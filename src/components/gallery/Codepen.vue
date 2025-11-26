<template>
    <div class="gallery">
        <div class="space"></div>
        <div class="boxes" ref="boxesRef">
            <div class="box" v-for="(img, i) in images" :key="i" :style="`--src: url(${img})`">
                <span>{{ i + 1 }}</span>
                <img :src="img" :alt="`album ${i + 1}`" />
            </div>

            <div class="controls">
                <button ref="prevBtnRef" class="prev" aria-label="Previous album">
                    <span>Previous album</span>
                    <svg viewBox="0 0 448 512" width="100" title="Previous Album">
                        <path
                            d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
                    </svg>
                </button>
                <button ref="nextBtnRef" class="next" aria-label="Next album">
                    <span>Next album</span>
                    <svg viewBox="0 0 448 512" width="100" title="Next Album">
                        <path
                            d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
                    </svg>
                </button>
            </div>

            <svg class="scroll-icon" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M20 6H23L19 2L15 6H18V18H15L19 22L23 18H20V6M9 3.09C11.83 3.57 14 6.04 14 9H9V3.09M14 11V15C14 18.3 11.3 21 8 21S2 18.3 2 15V11H14M7 9H2C2 6.04 4.17 3.57 7 3.09V9Z" />
            </svg>

            <div class="drag-proxy" ref="dragProxyRef"></div>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { galleryImages } from '../../data/galleryData';

// NOTE: You can install gsap via npm: `npm i gsap`
// or keep using CDN imports as in original. Here we import from CDN for parity.
import gsap from 'https://cdn.skypack.dev/gsap@3.7.0';
import ScrollTrigger from 'https://cdn.skypack.dev/gsap@3.7.0/ScrollTrigger';
import Draggable from 'https://cdn.skypack.dev/gsap@3.7.0/Draggable';

gsap.registerPlugin(ScrollTrigger, Draggable);

// Replace these image URLs with your own if needed
// const images = [
//   'https://i.scdn.co/image/ab67616d00001e020ecc8c4fd215d9eb83cbfdb3',
//   'https://i.scdn.co/image/ab67616d00001e02d9194aa18fa4c9362b47464f',
//   'https://i.scdn.co/image/ab67616d00001e02a7ea08ab3914c5fb2084a8ac',
//   'https://i.scdn.co/image/ab67616d00001e0213ca80c3035333e5a6fcea59',
//   'https://i.scdn.co/image/ab67616d00001e02df04e6071763615d44643725',
//   'https://i.scdn.co/image/ab67616d00001e0239c7302c04f8d06f60e14403',
//   'https://i.scdn.co/image/ab67616d00001e021c0bcf8b536295438d26c70d',
//   'https://i.scdn.co/image/ab67616d00001e029bbd79106e510d13a9a5ec33',
//   'https://i.scdn.co/image/ab67616d00001e021d97ca7376f835055f828139',
//   'https://www.udiscovermusic.com/wp-content/uploads/2015/10/Kanye-West-Yeezus.jpg'
// ];
const images = galleryImages.reduce((acc, item) => {
    acc.push(item.full);
    return acc;
}, []);

const boxesRef = ref(null);
const nextBtnRef = ref(null);
const prevBtnRef = ref(null);
const dragProxyRef = ref(null);

let LOOP, LOOP_HEAD, SCRUB, TRIGGER, PLAYHEAD, BOXES, iteration;

/**
 * Helper to cleanly remove listeners/instances on unmount
 */
onBeforeUnmount(() => {
    try {
        if (TRIGGER) TRIGGER.kill();
        if (LOOP_HEAD) LOOP_HEAD.kill();
        if (LOOP) LOOP.kill();
        if (SCRUB) SCRUB.kill();
        ScrollTrigger.removeEventListener && ScrollTrigger.removeEventListener('scrollEnd', onScrollEnd);
        // remove global event listeners
        document.removeEventListener('keydown', handleKeydown);
        if (boxesRef.value) boxesRef.value.removeEventListener('click', handleBoxClick);
        if (nextBtnRef.value) nextBtnRef.value.removeEventListener('click', NEXT);
        if (prevBtnRef.value) prevBtnRef.value.removeEventListener('click', PREV);
    } catch (e) {
        // ignore cleanup errors
    }
});

// --- Functions used inside setup ---
const POSITION_WRAP = (val, max) => gsap.utils.wrap(0, max, val);

function onScrollEnd() {
    scrollToPosition(SCRUB.vars.position);
}

function handleKeydown(event) {
    if (event.code === 'ArrowLeft' || event.code === 'KeyA') NEXT();
    if (event.code === 'ArrowRight' || event.code === 'KeyD') PREV();
}

function handleBoxClick(e) {
    const BOX = e.target.closest('.box');
    if (BOX) {
        const BOX_ARR = BOXES;
        let TARGET = BOX_ARR.indexOf(BOX);
        let CURRENT = gsap.utils.wrap(
            0,
            BOX_ARR.length,
            Math.floor(BOX_ARR.length * SCRUB.vars.position)
        );

        let BUMP = TARGET - CURRENT;
        if (TARGET > CURRENT && TARGET - CURRENT > BOX_ARR.length * 0.5) {
            BUMP = (BOX_ARR.length - BUMP) * -1;
        }
        if (CURRENT > TARGET && CURRENT - TARGET > BOX_ARR.length * 0.5) {
            BUMP = BOX_ARR.length + BUMP;
        }
        scrollToPosition(SCRUB.vars.position + BUMP * (1 / BOX_ARR.length));
    }
}

const SNAP = (n) => gsap.utils.snap(1 / n);

const progressToScroll = (progress, TRIG) =>
    gsap.utils.clamp(
        1,
        TRIG.end - 1,
        gsap.utils.wrap(0, 1, progress) * TRIG.end
    );

function scrollToPosition(position) {
    const SNAP_POS = SNAP(BOXES.length)(position);
    const PROGRESS = (SNAP_POS - LOOP_HEAD.duration() * iteration) / LOOP_HEAD.duration();
    const SCROLL = progressToScroll(PROGRESS, TRIGGER);
    if (PROGRESS >= 1 || PROGRESS < 0) return WRAP(Math.floor(PROGRESS), SCROLL);
    TRIGGER.scroll(SCROLL);
}

function WRAP(iterationDelta, scrollTo) {
    iteration += iterationDelta;
    TRIGGER.scroll(scrollTo);
    TRIGGER.update();
}

function NEXT() {
    scrollToPosition(SCRUB.vars.position - 1 / BOXES.length);
}
function PREV() {
    scrollToPosition(SCRUB.vars.position + 1 / BOXES.length);
}

onMounted(() => {
    // main initialization (based largely on your original script)
    const BOXES_NODELIST = boxesRef.value.querySelectorAll('.box');
    BOXES = gsap.utils.toArray(BOXES_NODELIST);

    gsap.set('.box', { yPercent: -50, display: 'block' });
    gsap.set('button', { z: 200 });

    const STAGGER = 0.1;
    const DURATION = 1;
    const OFFSET = 0;

    LOOP = gsap.timeline({
        paused: true,
        repeat: -1,
        ease: 'none'
    });

    const SHIFTS = [...BOXES, ...BOXES, ...BOXES];

    SHIFTS.forEach((BOX, index) => {
        const BOX_TL = gsap
            .timeline()
            .set(BOX, { xPercent: 250, rotateY: -50, opacity: 0, scale: 0.5 })

            // Opacity && Scale
            .to(BOX, { opacity: 1, scale: 1, duration: 0.1 }, 0)
            .to(BOX, { opacity: 0, scale: 0.5, duration: 0.1 }, 0.9)

            // Panning
            .fromTo(BOX, { xPercent: 250 }, {
                xPercent: -350, duration: 1, immediateRender: false, ease: 'power1.inOut'
            }, 0)

            // Rotations
            .fromTo(BOX, { rotateY: -50 }, {
                rotateY: 50, immediateRender: false, duration: 1, ease: 'power4.inOut'
            }, 0)

            // Scale && Z
            .to(BOX, { z: 100, scale: 1.25, duration: 0.1, repeat: 1, yoyo: true }, 0.4)
            .fromTo(BOX, { zIndex: 1 }, {
                zIndex: BOXES.length, repeat: 1, yoyo: true, ease: 'none', duration: 0.5, immediateRender: false
            }, 0);

        LOOP.add(BOX_TL, index * STAGGER);
    });

    const CYCLE_DURATION = STAGGER * BOXES.length;
    const START_TIME = CYCLE_DURATION + DURATION * 0.5 + OFFSET;

    LOOP_HEAD = gsap.fromTo(
        LOOP,
        { totalTime: START_TIME },
        {
            totalTime: `+=${CYCLE_DURATION}`,
            duration: 1,
            ease: 'none',
            repeat: -1,
            paused: true
        }
    );

    PLAYHEAD = { position: 0 };

    const POSITION_WRAPPER = (v) => POSITION_WRAP(v, LOOP_HEAD.duration());

    SCRUB = gsap.to(PLAYHEAD, {
        position: 0,
        onUpdate: () => {
            LOOP_HEAD.totalTime(POSITION_WRAPPER(PLAYHEAD.position));
        },
        paused: true,
        duration: 0.25,
        ease: 'power3'
    });

    iteration = 0;

    TRIGGER = ScrollTrigger.create({
        start: 0,
        end: '+=2000',
        horizontal: false,
        pin: boxesRef.value,
        onUpdate: self => {
            const SCROLL = self.scroll();
            if (SCROLL > self.end - 1) {
                // Go forwards in time
                WRAP(1, 1);
            } else if (SCROLL < 1 && self.direction < 0) {
                // Go backwards in time
                WRAP(-1, self.end - 1);
            } else {
                const NEW_POS = (iteration + self.progress) * LOOP_HEAD.duration();
                SCRUB.vars.position = NEW_POS;
                SCRUB.invalidate().restart();
            }
        }
    });

    // attach scrollEnd listener
    ScrollTrigger.addEventListener('scrollEnd', onScrollEnd);

    // attach event listeners
    document.addEventListener('keydown', handleKeydown);
    boxesRef.value.addEventListener('click', handleBoxClick);
    nextBtnRef.value.addEventListener('click', NEXT);
    prevBtnRef.value.addEventListener('click', PREV);

    // Dragging using Draggable
    Draggable.create(dragProxyRef.value, {
        type: 'x',
        trigger: '.box',
        onPress() {
            this.startOffset = SCRUB.vars.position;
        },
        onDrag() {
            SCRUB.vars.position = this.startOffset + (this.startX - this.x) * 0.001;
            SCRUB.invalidate().restart();
        },
        onDragEnd() {
            scrollToPosition(SCRUB.vars.position);
        }
    });
});
</script>
<style>
.gallery {
    width: 100%;
    height: 100vh;
}
:root {
    /* --bg: #1a1a1a; */
    --min-size: 200px;
}

/* body {
    display: grid;
    place-items: center;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    overflow-y: hidden;
    background: var(--bg);
} */

/* .drag-proxy {
    visibility: hidden;
    position: absolute;
} */

.controls {
    /* position: absolute; */
    top: calc(50% + clamp(var(--min-size), 20vmin, 20vmin));
    left: 50%;
    transform: translate(-50%, -50%) scale(1.5);
    display: flex;
    justify-content: space-between;
    min-width: var(--min-size);
    height: 44px;
    width: 20vmin;
    z-index: 300;
}

button {
    height: 48px;
    width: 48px;
    border-radius: 50%;
    position: absolute;
    top: 0%;
    outline: transparent;
    cursor: pointer;
    background: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    transition: transform 0.1s;
    transform: translate(0, calc(var(--y, 0)));
}

button:before {
    border: 2px solid #e6e6e6;
    /* background: linear-gradient(rgba(204, 204, 204, 0.65), #000) #000; */
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 80%;
    width: 80%;
    border-radius: 50%;
}

button:active:before {
    /* background: linear-gradient(#000, rgba(204, 204, 204, 0.65)) #000; */
}

button:nth-of-type(1) {
    right: 100%;
}

button:nth-of-type(2) {
    left: 100%;
}

button span {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}

button:hover {
    --y: -5%;
}

button svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg) translate(2%, 0);
    height: 30%;
    fill: #e6e6e6;
}

button:nth-of-type(1) svg {
    transform: translate(-50%, -50%) rotate(180deg) translate(2%, 0);
}

.scroll-icon {
    height: 30px;
    position: fixed;
    top: 1rem;
    right: 1rem;
    color: #e6e6e6;
    -webkit-animation: action 4s infinite;
    animation: action 4s infinite;
}

.boxes {
    height: 100vh;
    width: 100%;
    overflow: hidden;
    position: absolute;
    transform-style: preserve-3d;
    perspective: 800px;
    touch-action: none;
}

.box {
    transform-style: preserve-3d;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 30vmin;
    width: 30vmin;
    min-height: var(--min-size);
    min-width: var(--min-size);
    display: none;
}

.box:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100%;
    width: 100%;
    /* background-image: var(--src); */
    background-size: cover;
    transform: translate(-50%, -50%) rotate(180deg) translate(0, -100%) translate(0, -0.5vmin);
    /* opacity: 0.75; */
}

.box:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100%;
    width: 100%;
    background: linear-gradient(var(--bg) 50%, transparent);
    transform: translate(-50%, -50%) rotate(180deg) translate(0, -100%) translate(0, -0.5vmin) scale(1.01);
    z-index: 2;
}

.box img {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    -o-object-fit: cover;
    object-fit: cover;
}

.box:nth-of-type(odd) {
    background: #b3f075;
}

.box:nth-of-type(even) {
    background: #66b814;
}

@supports (-webkit-box-reflect: below) {
    .box {
        -webkit-box-reflect: below 0.5vmin linear-gradient(transparent 0 50%, #fff 100%);
    }

    .box:after,
    .box:before {
        display: none;
    }
}

@-webkit-keyframes action {

    0%,
    25%,
    50%,
    100% {
        transform: translate(0, 0);
    }

    12.5%,
    37.5% {
        transform: translate(0, 25%);
    }
}

@keyframes action {

    0%,
    25%,
    50%,
    100% {
        transform: translate(0, 0);
    }

    12.5%,
    37.5% {
        transform: translate(0, 25%);
    }
}

</style>
<template>
        <div class="campus">
                <div class="">
                        <div class=" campus-content">
                                <div class="page-block">
                                        <h2 class="page-title">Virtual Ko‘rinish</h2>

                                        <iframe id="tour-embedded" name="Sharq_1_qavat" :src="tourUrl" frameborder="0"
                                                width="100%" height="400px" scrolling="no" allowvr="yes"
                                                allow="vr; xr; accelerometer; gyroscope; autoplay;"
                                                allowfullscreen="false" webkitallowfullscreen="false"
                                                mozallowfullscreen="false" loading="eager"></iframe>
                                </div>
                        </div>

                </div>
        </div>

</template>

<script>
export default {
        name: "Campus360",

        data() {
                return {
                        tourUrl: "https://tour.panoee.net/iframe/69232ed26af138f518c2246d",
                        open: {
                                leadership: false,
                                policies: false,
                                partners: false,
                        }
                };
        },

        mounted() {
                this.enableDeviceMotion();
        },

        methods: {
                toggle(section) {
                        this.open[section] = !this.open[section];
                },

                enableDeviceMotion() {
                        const iframeId = "tour-embedded";

                        window.addEventListener("devicemotion", (e) => {
                                const iframe = document.getElementById(iframeId);
                                if (!iframe) return;

                                iframe.contentWindow.postMessage(
                                        {
                                                type: "devicemotion",
                                                deviceMotionEvent: {
                                                        acceleration: e.acceleration,
                                                        accelerationIncludingGravity: e.accelerationIncludingGravity,
                                                        rotationRate: e.rotationRate,
                                                        interval: e.interval,
                                                        timeStamp: e.timeStamp,
                                                },
                                        },
                                        "*"
                                );
                        });
                },
        },
};
</script>

<style scoped>
.page-row {
        display: flex;
        /* grid-template-columns: 3fr 1fr; */
        gap: 20px;
        /* padding-top: 140px; */
}

.page-row__col {
        /* flex: 1; */
        width: 267px;

}

.campus-content {
        /* width: calc(100% - 267px) */
}

.page-block {
        background: white;
}


/* .aside {
        position: sticky;
        top: 148px;
} */

.sidebar-title {
        font-size: 22px;
        /* margin-bottom: 10px; */
}

.sidebar-menu__link {
        cursor: pointer;
        display: block;
        padding: 6px 0;
}

.sub-menu-sidebar {
        padding-left: 15px;
}

.page-block {
        border-radius: 12px;
        border: 1px solid rgba(234, 238, 245, 1);
        ;
        background: rgb(255, 255, 255, 1);
        padding: 16px;
}

.sidebar {
        border-radius: 12px;
        border: 1px solid rgba(234, 238, 245, 1);
        /* background: var(--white-1); */
        box-shadow: 0px 0px 30px 0px rgba(7, 12, 28, 0.04);
}

.sidebar-menu__link {
        display: block;
        padding: 12px;
        position: relative;
        color: rgba(1, 11, 27, 1);
        font-size: var(--size-text-16);
        line-height: 140%;
        letter-spacing: -0.16px;
}

.sidebar-title {
        padding: 12px;
        color: rgba(1, 11, 27, 1);
        font-size: 19px;
        line-height: 140%;
        letter-spacing: -0.2px;
        font-weight: 600;
}

.sidebar-menu__link:hover,
.sidebar-menu__link.active {
        color: rgb(20, 69, 126);
}

a:hover {
        color: rgb(65, 135, 176);
}

.page-block iframe {
        width: 100%;
        height: auto;
        display: block;
        aspect-ratio: 1.582;
        border-radius: 12px;
}

.aside-banner__title {
        color: rgba(1, 11, 27, 1);
        font-size: 15px;
        line-height: 140%;
        letter-spacing: -0.16px;
        margin-bottom: 12px;
}

.aside-banner__btn {
        background-color: transparent;
        padding: 0;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        outline: none;
        color: #fff;
        font-size: 15px;
        line-height: 140%;
        letter-spacing: -0.16px;
        border-radius: 8px;
        padding: 6px 8px;
        /* background: rgb(20, 62, 126); */
        background: linear-gradient(to right, rgba(0, 14, 90, 0.822), rgba(0, 50, 131, 0.973));
}

.aside-banner {
        border-radius: 12px;
        border: 1px solid var(--black-7);
        background: linear-gradient(90deg, #EAEEF5 0%, #DFE4ED 100%);
        padding: 12px;
        position: relative;
        overflow: hidden;
        z-index: 1;
}

.aside-banner__image {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: auto;
        z-index: -1;
}
</style>

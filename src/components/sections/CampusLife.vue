<template>
    <section class="campus-life">
        <div class="header">
            <!-- <div class="logo">
        <img src="/img/logo.svg" alt="Logo" />
      </div> -->
            <h2 class="title">Campus <span class="highlight">Life</span></h2>
            <p class="description">
                A vibrant campus with clubs, sports, and endless opportunities for growth.
            </p>
        </div>

        <div class="carousel-container">
            <button class="nav-btn prev" @click="prev" :disabled="currentIndex === 0">
                ←
            </button>

            <div class="carousel">
                <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * slideWidth}px)` }">
                    <div v-for="(item, index) in items" :key="index" class="card">
                        <div class="card-image">
                            <img :src="item.image" :alt="item.title" />
                        </div>
                        <h3 class="card-title">{{ item.title }}</h3>
                    </div>
                </div>
            </div>

            <button class="nav-btn next" @click="next" :disabled="currentIndex >= items.length - visibleSlides">
                →
            </button>
        </div>

        <div class="dots">
            <span v-for="(dot, index) in Math.ceil(items.length / visibleSlides)" :key="index"
                :class="['dot', { active: Math.floor(currentIndex / visibleSlides) === index }]"
                @click="goToSlide(index)"></span>
        </div>
    </section>
</template>

<script>
export default {
    name: 'CampusLife',
    data() {
        return {
            currentIndex: 0,
            slideWidth: 220,
            visibleSlides: 5,
            items: [
                { title: 'Sport klubi', image: '/img/club/futbol.png' },
                { title: 'Yosh kitobxon klubi', image: '/img/club/library.png' },
                { title: '🧠 Zakovat klubi ', image: '/img/club/zakovat.png' },
                { title: '🎭 Teatr klubi    ', image: '/img/club/teatr.png' },
                { title: '🎮 Kibersport klubi', image: '/img/club/kibersport.png' },
                { title: '🎥 Media klubi', image: '/img/club/osh.png' },
                { title: 'Tadbirlar', image: '/img/club/tadbir.png' },
                { title: 'Konfrensiyalar', image: '/img/club/konfrensiya.png' },
                { title: 'Yosh tadqiqodchilar klubi', image: '/img/club/image.png' },

            ]
        };
    },
    methods: {
        next() {
            if (this.currentIndex < this.items.length - this.visibleSlides) {
                this.currentIndex++;
            }
        },
        prev() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            }
        },
        goToSlide(index) {
            this.currentIndex = index * this.visibleSlides;
        }
    }
};
</script>

<style scoped>
.campus-life {
    /* background: linear-gradient(180deg, #e3f2fd 0%, #bbdefb 100%); */
    padding: 60px 20px;
    position: relative;
}

.header {
    text-align: center;
    margin-bottom: 50px;
}

.logo img {
    width: 60px;
    height: 60px;
    margin-bottom: 15px;
}

.title {
    font-size: 42px;
    font-weight: 700;
    color: #1a237e;
    margin: 0;
}

.highlight {
    color: #2196f3;
}

.description {
    color: #546e7a;
    font-size: 16px;
    margin-top: 10px;
}

.carousel-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.carousel {
    overflow: hidden;
    width: 1100px;
}

.carousel-track {
    display: flex;
    gap: 20px;
    transition: transform 0.4s ease;
}

.card {
    min-width: 200px;
    text-align: center;
}

.card-image {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 15px;
    border: 5px solid #90caf9;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-title {
    font-size: 16px;
    font-weight: 600;
    color: #1a237e;
    margin: 0;
}

.nav-btn {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: none;
    background: white;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    transition: all 0.3s;
}

.nav-btn:hover:not(:disabled) {
    background: #2196f3;
    color: white;
    transform: scale(1.1);
}

.nav-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}

.dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 30px;
}

.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #90caf9;
    cursor: pointer;
    transition: all 0.3s;
}

.dot.active {
    background: #1a237e;
    width: 30px;
    border-radius: 5px;
}
</style>
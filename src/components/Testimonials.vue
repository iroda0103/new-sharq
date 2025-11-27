<template>
  <section class="testimonials">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <!-- <h2>O'qituvchilarimiz</h2>
        <p>
          Sharq Universitetining asosiy kuchi — bu yuksak malakali, fidokor va zamonaviy bilimlarga ega
          professor-o'qituvchilar jamoasidir. Ular nafaqat dars berishadi, balki har bir talabaga ilhom, yo'l-yo'riq va
          ma'naviy tayanch bo'lishadi.
        </p> -->
      </div>

      <div class="testimonial-carousel">
        <div class="carousel-container">
          <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div class="carousel-slide" v-for="(item, index) in testimonials" :key="index">
              <div class="testimonial-card">
                <div class="card-image">
                  <img loading="lazy" :src="'/img/person/' + item.image" :alt="item.name" />
                  <div class="image-overlay"></div>
                </div>
                <div class="about-mid__divider"></div>
                <div class="card-content">
                  <div class="quote-mark">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <path d="M10 20C10 14.477 14.477 10 20 10V14C16.686 14 14 16.686 14 20H18V30H10V20Z"
                        fill="currentColor" />
                      <path d="M24 20C24 14.477 28.477 10 34 10V14C30.686 14 28 16.686 28 20H32V30H24V20Z"
                        fill="currentColor" />
                    </svg>
                  </div>
                  <p class="testimonial-text">{{ item.text }}</p>
                  <div class="author-info">
                    <h3>{{ item.name }}</h3>
                    <span class="position">{{ item.position }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation buttons -->
        <!-- <button class="nav-btn prev-btn" @click="prevSlide" aria-label="Oldingi">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
        <button class="nav-btn next-btn" @click="nextSlide" aria-label="Keyingi">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button> -->

        <!-- Pagination dots -->
        <div class="carousel-pagination">
          <button v-for="(item, index) in testimonials" :key="index" class="pagination-dot"
            :class="{ active: currentIndex === index }" @click="goToSlide(index)" :aria-label="`Slayd ${index + 1}`">
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TestimonialsCarousel",
  data() {
    return {
      currentIndex: 0,
      autoPlayInterval: null,
      testimonials: [
        {
          name: "Sherzod Atamuradov",
          position: "Rektor",
          // image: "sherzod_atamuradov.webp",
          image: "rector.jpg",
          text: "Yuqori sifatli xizmat ko'rsatish va ilg'or innovatsion yechimlar faoliyatimizni samarali tarzda o'zgartirdi, bu esa barcha aloqa nuqtalarida talabalar ehtiyojini qondirish va universitetning jadal o'sishiga zamin yaratdi."
        },
        // {
        //   name: "Botir Ibragimov",
        //   position: "Registr ofis menejeri",
        //   image: "botir _ibragimov.webp",
        //   text: "Sharq Universiteti o'quv jarayoni HEMIS tizimi bilan integratsiyalashgan! Talabalar HEMIS orqali raqamli ta'lim infratuzilmasidan foydalanishing imkoniyatiga ega."
        // }
      ]
    }
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    },
    prevSlide() {
      this.currentIndex = this.currentIndex === 0 ? this.testimonials.length - 1 : this.currentIndex - 1;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
    startAutoPlay() {
      this.autoPlayInterval = setInterval(() => {
        this.nextSlide();
      }, 6000);
    },
    stopAutoPlay() {
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval);
        this.autoPlayInterval = null;
      }
    }
  },
  mounted() {
    this.startAutoPlay();
  },
  beforeUnmount() {
    this.stopAutoPlay();
  }
}
</script>

<style lang="scss" scoped>
.testimonials {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: radial-gradient(circle at 20% 50%, rgba(0, 122, 204, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 2;
  }

  .section-title {
    text-align: center;
    margin-bottom: 70px;

    h2 {
      font-size: 2.8rem;
      margin-bottom: 20px;
      color: #1a1a1a;
      font-weight: 800;
      position: relative;
      display: inline-block;

      &::after {
        content: '';
        position: absolute;
        bottom: -12px;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 5px;
        background: linear-gradient(90deg, #007acc, #00a8ff);
        border-radius: 3px;
      }
    }

    p {
      color: #555;
      font-size: 1.15rem;
      line-height: 1.8;
      max-width: 800px;
      margin: 30px auto 0;
    }
  }

  .testimonial-carousel {
    position: relative;
    // max-width: 1000px;
    margin: 0 auto;

    .carousel-container {
      overflow: hidden;
    border-radius: 14px;
    }

    .carousel-track {
      display: flex;
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .carousel-slide {
      flex: 0 0 100%;
      min-width: 100%;
      padding: 0 15px;
      box-sizing: border-box;
    }
  }

  .about-mid__divider {
    width: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgba(20, 87, 149, 1);
  }

  .testimonial-card {
    background: #ffffff;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
    transition: all 0.4s ease;
    display: grid;
    grid-template-columns: 400px 15px 1fr;
    // min-height: 200px;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 30px 80px rgba(0, 0, 0, 0.12);
    }

    .card-image {
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, #007acc 0%, #00a8ff 100%);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s ease;
object-position: 10% center;
            // background-position: right;

      }

      .image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.2) 100%);
      }

      &:hover img {
        transform: scale(1.05);
      }
    }

    .card-content {
      padding: 50px 45px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;

      .quote-mark {
        color: #007acc;
        opacity: 0.15;
        position: absolute;
        top: 30px;
        left: 30px;
      }

      .testimonial-text {
        font-size: 1.5rem;
        color: #333;
        line-height: 1.9;
        margin-bottom: 35px;
        position: relative;
        z-index: 1;
        font-style: italic;
        font-weight: 400;
      }

      .author-info {
        margin-top: auto;
        padding-top: 25px;
        border-top: 2px solid #f0f0f0;

        h3 {
          font-size: 1.4rem;
          color: #1a1a1a;
          font-weight: 700;
          margin: 0 0 8px 0;
        }

        .position {
          font-size: 1.05rem;
          color: #007acc;
          font-weight: 600;
          display: block;
        }
      }
    }
  }

  .nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: none;
    background: #ffffff;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #007acc;
    z-index: 10;

    &:hover {
      background: #007acc;
      color: white;
      transform: translateY(-50%) scale(1.1);
      box-shadow: 0 12px 32px rgba(0, 122, 204, 0.3);
    }

    &:active {
      transform: translateY(-50%) scale(0.95);
    }

    &.prev-btn {
      left: -28px;
    }

    &.next-btn {
      right: -28px;
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }

  .carousel-pagination {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    gap: 12px;

    .pagination-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid #007acc;
      background: transparent;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: #007acc;
        transform: scale(1.3);
      }

      &.active {
        background: #007acc;
        width: 32px;
        border-radius: 5px;
      }
    }
  }

  @media (max-width: 992px) {
    padding: 80px 0;

    .testimonial-card {
      grid-template-columns: 1fr;
      // min-height: auto;

      .card-image {
        height: 450px;
      }

      .card-content {
        padding: 40px 35px;
      }
    }

    .nav-btn {
      &.prev-btn {
        left: 10px;
      }

      &.next-btn {
        right: 10px;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 60px 0;

    .section-title {
      margin-bottom: 50px;

      h2 {
        font-size: 2.2rem;
      }

      p {
        font-size: 1rem;
        padding: 0 10px;
      }
    }

    .testimonial-card {
      .card-image {
        height: 300px;
      }

      .card-content {
        padding: 35px 25px;

        .testimonial-text {
          font-size: 1.05rem;
        }

        .author-info {
          h3 {
            font-size: 1.25rem;
          }

          .position {
            font-size: 0.95rem;
          }
        }
      }
    }

    .nav-btn {
      width: 48px;
      height: 48px;

      &.prev-btn {
        left: 5px;
      }

      &.next-btn {
        right: 5px;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 50px 0;

    .section-title {
      margin-bottom: 40px;

      h2 {
        font-size: 1.9rem;
      }
    }

    .testimonial-card {
      .card-image {
        height: 250px;
      }

      .card-content {
        padding: 30px 20px;

        .quote-mark {
          svg {
            width: 30px;
            height: 30px;
          }
        }

        .testimonial-text {
          font-size: 0.95rem;
        }
      }
    }

    .nav-btn {
      width: 40px;
      height: 40px;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.carousel-slide {
  animation: fadeIn 0.6s ease-out;
}
</style>
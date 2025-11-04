<template>
  <section class="testimonials">
    <div class="container">
      <div class="faq-title section-title" data-aos="fade-up">
        <h2>O'qituvchilarimiz</h2>
        <p>
          Sharq Universitetining asosiy kuchi — bu yuksak malakali, fidokor va zamonaviy bilimlarga ega
<<<<<<< HEAD
          professor-o‘qituvchilar jamoasidir. Ular nafaqat dars berishadi, balki har bir talabaga ilhom, yo‘l-yo‘riq va
          ma’naviy tayanch bo‘lishadi.
        </p>
      </div>

      <div class="testimonial-grid">
        <div
          class="testimonial-item"
          v-for="(item, index) in testimonials"
          :key="index"
          :class="{ highlight: item.highlighted }"
        >
          <div class="testimonial-content">
            <div class="quote-icon">
              <span>“</span>
            </div>
            <p>{{ item.text }}</p>
            <div class="client-info">
              <div class="client-image">
                <!-- <img loading="lazy":src="item.image" :alt="item.name" /> -->
                <img loading="lazy":src="'/img/person/'+item.image" :alt="item.name" />
                <!-- <img loading="lazy"src="../." :alt="item.name" /> -->
              </div>
              <div class="client-details">
                <h3>{{ item.name }}</h3>
                <span class="position">{{ item.position }}</span>
=======
          professor-o'qituvchilar jamoasidir. Ular nafaqat dars berishadi, balki har bir talabaga ilhom, yo'l-yo'riq va
          ma'naviy tayanch bo'lishadi.
        </p>
      </div>

      <div class="testimonial-carousel">
        <div class="carousel-container">
          <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div class="carousel-slide" v-for="(item, index) in testimonials" :key="index">
              <div class="testimonial-content">
                <!-- <div class="quote-icon">
                  <span>"</span>
                </div> -->
                <div class="text-wrapper">
                  <p>{{ item.text }}</p>
                  <div class="client-details">
                    <h3>{{ item.name }}</h3>
                    <span class="position">{{ item.position }}</span>
                  </div>
                </div>

                <div class="client-info">
                  <div class="client-image">
                    <img loading="lazy" :src="'/img/person/' + item.image" :alt="item.name" />
                  </div>

                </div>
>>>>>>> dad943b (update)
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
=======

        <!-- Navigation buttons -->
        <!-- <div class="carousel-nav">
          <button class="nav-btn prev-btn" @click="prevSlide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button class="nav-btn next-btn" @click="nextSlide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div> -->

        <!-- Pagination dots -->
        <div class="carousel-pagination">
          <button v-for="(item, index) in testimonials" :key="index" class="pagination-dot"
            :class="{ active: currentIndex === index }" @click="goToSlide(index)"></button>
        </div>
>>>>>>> dad943b (update)
      </div>
    </div>
  </section>
</template>

<script>
export default {
<<<<<<< HEAD
  name: "Testimonials",
  data() {
    return {
      testimonials: [
        {
          name: "Bektosh Qodirov",
          position: "Prorektor",
          image: "bektosh_qodirov.webp",
          text:
            "Innovatsion strategiyalarni joriy etish bozor muammolariga va raqobatdagi o‘rnimizga yondashuvimizni tubdan o‘zgartirdi.",
          highlighted: false
        },
=======
  name: "TestimonialsCarousel",
  data() {
    return {
      currentIndex: 0,
      autoPlayInterval: null,
      testimonials: [
        //  {
        //   name: "Bektosh Qodirov",
        //   position: "Prorektor",
        //  image: "bektosh_qodirov.webp",
        //  text: "Innovatsion strategiyalarni joriy etish bozor muammolariga va raqobatdagi o'rnimizga yondashuvimizni tubdan o'zgartirdi."
        //},
>>>>>>> dad943b (update)
        {
          name: "Sherzod Atamuradov",
          position: "Rektor",
          image: "sherzod_atamuradov.webp",
<<<<<<< HEAD
          text:
            "Yuqori sifatli xizmat ko‘rsatish va ilg‘or innovatsion yechimlar faoliyatimizni samarali tarzda o‘zgartirdi, bu esa barcha aloqa nuqtalarida talabalar ehtiyojini qondirish va universitetning jadal o‘sishiga zamin yaratdi.",
          highlighted: true
=======
          text: "Yuqori sifatli xizmat ko'rsatish va ilg'or innovatsion yechimlar faoliyatimizni samarali tarzda o'zgartirdi, bu esa barcha aloqa nuqtalarida talabalar ehtiyojini qondirish va universitetning jadal o'sishiga zamin yaratdi."
>>>>>>> dad943b (update)
        },
        {
          name: "Botir Ibragimov",
          position: "Registr ofis menejeri",
<<<<<<< HEAD
          image: "botir ibragimov.webp",
          text:
            "Sharq Universiteti o‘quv jarayoni HEMIS tizimi bilan integratsiyalashgan! Talabalar HEMIS orqali raqamli ta’lim infratuzilmasidan foydalanish imkoniyatiga ega.",
          highlighted: false
        }
      ]
    };
  }
};
=======
          image: "botir _ibragimov.webp",
          text: "Sharq Universiteti o'quv jarayoni HEMIS tizimi bilan integratsiyalashgan! Talabalar HEMIS orqali raqamli ta'lim infratuzilmasidan foydalanishing imkoniyatiga ega."
        }
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
      }, 5000);
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
>>>>>>> dad943b (update)
</script>

<style lang="scss" scoped>
.testimonials {
<<<<<<< HEAD
  padding: 60px 0;
  background: #f5f7fa;
=======
  padding: 80px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ed 100%);
  position: relative;
  overflow: hidden;
>>>>>>> dad943b (update)

  .container {
    max-width: 1200px;
    margin: 0 auto;
<<<<<<< HEAD
    padding: 0 15px;
=======
    padding: 0 20px;
    position: relative;
    z-index: 2;
>>>>>>> dad943b (update)
  }

  .section-title {
    text-align: center;
<<<<<<< HEAD
    margin-bottom: 50px;

    h2 {
      font-size: 32px;
      margin-bottom: 10px;
      color: #2c3e50;
=======
    margin-bottom: 60px;

    h2 {
      font-size: 2.5rem;
      margin-bottom: 15px;
      color: #2c3e50;
      font-weight: 700;
      position: relative;
      display: inline-block;

      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background: linear-gradient(to right, #007acc, #00a8ff);
        border-radius: 2px;
      }
>>>>>>> dad943b (update)
    }

    p {
      color: #666;
<<<<<<< HEAD
      font-size: 16px;
      line-height: 1.6;
      max-width: 700px;
      margin: 0 auto;
    }
  }

  .testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
  }

  .testimonial-item {
    .testimonial-content {
      position: relative;
      background-color: #ffffff;
      border: 1px solid #e0e0e0;
      border-radius: 16px;
      padding: 25px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }

      .quote-icon {
        position: absolute;
        top: -15px;
        left: 20px;
        background: #fff;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        color: #007acc;
        border: 1px solid #e0e0e0;
        font-family: serif;
      }

      p {
        font-size: 15px;
        color: #444;
        line-height: 1.7;
        margin-top: 20px;
        margin-bottom: 20px;
        position: relative;
        z-index: 1;
      }

      .client-info {
        display: flex;
        align-items: center;
        gap: 15px;
        padding-top: 15px;
        border-top: 1px solid #eee;

        .client-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .client-details {
          h3 {
            margin: 0;
            font-size: 16px;
            color: #2c3e50;
          }

          .position {
            font-size: 14px;
            color: #888;
          }
=======
      font-size: 1.1rem;
      line-height: 1.7;
      max-width: 800px;
      margin: 25px auto 0;
    }
  }

  .testimonial-carousel {
    position: relative;
    max-width: 1100px;
    margin: 0 auto;

    .carousel-container {
      overflow: hidden;
      border-radius: 20px;
      // box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }

    .carousel-track {
      display: flex;
      transition: transform 0.5s ease-in-out;
    }

    .carousel-slide {
      flex: 0 0 100%;
      min-width: 100%;
      // padding: 20px;
      box-sizing: border-box;
    }
  }

  .text-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
  }

  .testimonial-content {
    position: relative;
    // background: #ffffff;
    border-radius: 20px;
    padding: 80px 30px 80px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    // max-width: 700px;
    // margin: 0 auto;
    height: 100%;
    display: grid;
    grid-template-columns: 3fr 2fr;

    &:hover {
      transform: translateY(-5px);
      // box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }

    .quote-icon {
      position: absolute;
      top: 4px;
      left: 30px;
      background: linear-gradient(135deg, #007acc, #00a8ff);
      border-radius: 50%;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 36px;
      color: white;
      box-shadow: 0 5px 15px rgba(0, 122, 204, 0.3);
      font-family: serif;
    }

    p {
      font-size: 1.1rem;
      color: #444;
      line-height: 1.8;
      margin: 25px 0 30px;
      position: relative;
      z-index: 1;
      font-style: italic;
      text-align: center;
      display: flex;
      align-items: center;
    }

    .client-info {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 20px;
      padding-top: 25px;
      // border-left: 1px solid #eee;

      .client-image {
        width: 380px;
        height: 400px;
        border-radius: 5px;
        overflow: hidden;
        flex-shrink: 0;
        // border: 3px solid #f0f0f0;
        transition: border-color 0.3s ease;

        &:hover {
          border-color: #007acc;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        &:hover img {
          transform: scale(1.1);
        }
      }

      .client-details {
        text-align: left;

        h3 {
          margin: 0;
          font-size: 1.3rem;
          color: #2c3e50;
          font-weight: 600;
        }

        .position {
          font-size: 1rem;
          color: #007acc;
          font-weight: 500;
          margin-top: 5px;
          display: block;
        }
      }
    }
  }

  .carousel-nav {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    pointer-events: none;
    z-index: 10;

    .nav-btn {
      pointer-events: all;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: none;
      background: white;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      color: #007acc;

      &:hover {
        background: #007acc;
        color: white;
        transform: scale(1.1);
      }

      &:active {
        transform: scale(0.95);
      }

      &.prev-btn {
        margin-left: -25px;
      }

      &.next-btn {
        margin-right: -25px;
      }

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }

  .carousel-pagination {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    gap: 10px;

    .pagination-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: none;
      background: #ccc;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: #999;
        transform: scale(1.2);
      }

      &.active {
        background: linear-gradient(to right, #007acc, #00a8ff);
        transform: scale(1.2);
      }
    }
  }

  // Responsive design
  @media (max-width: 768px) {
    padding: 60px 0;

    .section-title {
      h2 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
        padding: 0 10px;
      }
    }

    .testimonial-content {
      padding: 30px 20px 25px;

      p {
        font-size: 1rem;

      }

      .client-info {
        flex-direction: column;
        text-align: center;
        gap: 15px;

        .client-details {
          text-align: center;
>>>>>>> dad943b (update)
        }
      }
    }

<<<<<<< HEAD
    &.highlight .testimonial-content {
      background-color: #e6f2ff;
      border: 1px solid #cce6ff;

      .quote-icon {
        background-color: #d9ecff;
        color: #007acc;
=======
    .carousel-nav {
      .nav-btn {
        width: 40px;
        height: 40px;

        &.prev-btn {
          margin-left: -15px;
        }

        &.next-btn {
          margin-right: -15px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    padding: 40px 0;

    .section-title {
      margin-bottom: 40px;

      h2 {
        font-size: 1.8rem;
      }
    }

    .testimonial-content {
      padding: 25px 15px 20px;

      .quote-icon {
        width: 50px;
        height: 50px;
        font-size: 28px;
        top: -15px;
        left: 20px;
      }
    }

    .carousel-nav {
      .nav-btn {
        width: 35px;
        height: 35px;

        svg {
          width: 18px;
          height: 18px;
        }
>>>>>>> dad943b (update)
      }
    }
  }
}
<<<<<<< HEAD
</style>
=======

// Animation for slide entrance
.carousel-slide {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
>>>>>>> dad943b (update)

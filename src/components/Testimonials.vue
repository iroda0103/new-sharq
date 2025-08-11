<template>
  <section class="testimonials">
    <div class="container">
      <div class="faq-title section-title" data-aos="fade-up">
        <h2>O'qituvchilarimiz</h2>
        <p>
          Sharq Universitetining asosiy kuchi — bu yuksak malakali, fidokor va zamonaviy bilimlarga ega
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
        {
          name: "Sherzod Atamuradov",
          position: "Rektor",
          image: "sherzod_atamuradov.webp",
          text:
            "Yuqori sifatli xizmat ko‘rsatish va ilg‘or innovatsion yechimlar faoliyatimizni samarali tarzda o‘zgartirdi, bu esa barcha aloqa nuqtalarida talabalar ehtiyojini qondirish va universitetning jadal o‘sishiga zamin yaratdi.",
          highlighted: true
        },
        {
          name: "Botir Ibragimov",
          position: "Registr ofis menejeri",
          image: "botir ibragimov.webp",
          text:
            "Sharq Universiteti o‘quv jarayoni HEMIS tizimi bilan integratsiyalashgan! Talabalar HEMIS orqali raqamli ta’lim infratuzilmasidan foydalanish imkoniyatiga ega.",
          highlighted: false
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.testimonials {
  padding: 60px 0;
  background: #f5f7fa;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .section-title {
    text-align: center;
    margin-bottom: 50px;

    h2 {
      font-size: 32px;
      margin-bottom: 10px;
      color: #2c3e50;
    }

    p {
      color: #666;
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
        }
      }
    }

    &.highlight .testimonial-content {
      background-color: #e6f2ff;
      border: 1px solid #cce6ff;

      .quote-icon {
        background-color: #d9ecff;
        color: #007acc;
      }
    }
  }
}
</style>

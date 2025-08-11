<template>
  <section id="stats" class="stats section">
    <div class="container">
      <div class="stats-overview">
        <h2 class="stats-title">Ta'lim sifati</h2>
        <p class="stats-description">
          Sharq Universitetida taʼlim sifati – ustuvor qadriyat. Darslar zamonaviy metodlar, xalqaro standartlar va
          amaliyotga yo‘naltirilgan dasturlar asosida olib boriladi. Malakali o‘qituvchilar, raqamli texnologiyalar va
          innovatsion yondashuvlar – bizning muvaffaqiyat kalitimizdir.
        </p>
        <div class="stats-cta">
          <a href="https://qabul.sharqedu.uz/" class="btn-primary">Ariza topshirish</a>
          <a href="#" class="btn-outline">Saytni xaritasi</a>
        </div>
      </div>

      <div class="stats-grid">
        <div class="stats-card" v-for="(item, index) in stats" :key="index">
          <div class="stats-icon">{{ item.icon }}</div>
          <div class="stats-number">{{ item.number }}</div>
          <div class="stats-label">{{ item.label }}</div>
        </div>
      </div>

      <div class="achievements-gallery">
        <div class="achievement-item" v-for="(achieve, index) in achievements" :key="index">
          <img loading="lazy":src="achieve.image" :alt="achieve.title" />
          <div class="achievement-content">
            <h4>{{ achieve.title }}</h4>
            <p v-html="achieve.description"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { icon: '👨‍🏫', number: '84%', label: "O'qituvchilarning ilmiy salohiyati" },
  { icon: '🧑‍🎓', number: '15:1', label: "Har bir o'qituvchi uchun talaba" },
  { icon: '🎓', number: '10+', label: "Zamonaviy yo'nalishlar" },
  { icon: '💰', number: '1.5 mlrd. so\'m', label: 'Grantlar miqdori' }
];

const achievements = [
  {
    title: '🏅Oltin medal - 100% grant',
    image: 'assets/img/education/oltin medal.jpg',
    description:
      "Agar Siz maktabni oltin medal bilan tamomlagan bo‘lsangiz — Sharq Universitetining 1-bosqich uchun 100% to‘liq grant dasturida qatnashishingiz mumkin! Bu sizning mehnatingiz va bilimga bo‘lgan sadoqatingizga berilgan haqiqiy e’tirof!"
  },
  {
    title: 'IELTS - 100% grant',
    image: 'assets/img/education/IELTS.jpg',
    description:
      `Sharq Universiteti IELTS sertifikatiga ega abituriyentlar uchun imtiyozli grant dasturini taklif etadi. <br>➤ IELTS 6.5 – 25% chegirma<br>➤ IELTS 7.0 – 50% chegirma<br>➤ IELTS 7.5 va undan yuqori – 100% grant`
  },
  {
    title: 'Zakovat bilimdoni - 100% grant',
    image: 'assets/img/education/zakovat.jpg',
    description:
      "🎓 Sharq Universiteti Zakovat g‘oliblari uchun alohida grant ajratmoqda. Aynan respublika bosqichida g‘alaba qozongan zakovatchilar uchun – 25% lik GRANT!"
  }
];
</script>

<style lang="scss" scoped>
.stats {
  padding: 60px 0;

  .container {
    max-width: 1200px;
    margin: auto;
    padding: 0 1rem;
  }

  .stats-overview {
    margin-bottom: 3rem;
    text-align: center;

    .stats-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .stats-description {
      font-size: 1.1rem;
      line-height: 1.8;
      max-width: 800px;
      margin: 0 auto 1.5rem auto;
    }

    .stats-cta {
      display: flex;
      justify-content: center;
      gap: 1rem;

      .btn-primary,
      .btn-outline {
        padding: 0.75rem 1.5rem;
        font-weight: 600;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.3s ease;
      }

      .btn-primary {
        background-color: #3a86ff;
        color: #fff;
        border: none;

        &:hover {
          background-color: #2968d9;
        }
      }

      .btn-outline {
        border: 2px solid #3a86ff;
        color: #3a86ff;
        background: transparent;

        &:hover {
          background: #e3f0ff;
        }
      }
    }
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;

    .stats-card {
      background: #fff;
      border-radius: 1rem;
      padding: 2rem;
      text-align: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-8px);
      }

      .stats-icon {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: #3a86ff;
      }

      .stats-number {
        font-size: 2rem;
        font-weight: 700;
        color: #222;
      }

      .stats-label {
        font-size: 1rem;
        color: #666;
        margin-top: 0.5rem;
      }
    }
  }

  .achievements-gallery {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;

    .achievement-item {
      position: relative;
      overflow: hidden;
      border-radius: 1rem;
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease;

      &:hover img {
        transform: scale(1.05);
      }

      img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        transition: transform 0.5s ease;
      }

      .achievement-content {
        position: absolute;
        bottom: 0;
        padding: 1rem;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent);
        color: #fff;

        h4 {
          margin-bottom: 0.5rem;
        }

        p {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.85);
        }
      }
    }
  }
}
</style>

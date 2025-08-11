<template>
  <section class="faq-section">
    <div class="container faq-container">
      <h2 class="faq-title">Tez-tez Beriladigan Savollar</h2>
      <p class="faq-subtitle">O'quv jarayoni, qabul va grantlar haqida eng ko'p so'raladigan savollarga javoblar</p>

      <div class="faq-accordion">
        <div v-for="(item, index) in faqItems" :key="index" class="faq-item"
          :class="{ 'active': activeIndex === index }" @click="toggleAccordion(index)">
          <div class="faq-question">
            <h3>{{ index + 1 }}. &nbsp; {{ item.question }}</h3>
            <div class="faq-icon">
              <font-awesome-icon :icon="['fas', activeIndex === index ? 'minus' : 'plus']" />
            </div>
          </div>
          <transition name="slide-fade">
            <div v-if="activeIndex === index" class="faq-answer">
              <p>{{ item.answer }}</p>
              <a v-if="item.link" :href="item.link" class="faq-link">Batafsil ma'lumot</a>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FAQComponent',
  data() {
    return {
      activeIndex: null,
      faqItems: [
        {
          question: "Qabul qilish uchun hujjatlar to'plami qanday?",
          answer: "Qabul uchun talab etiladigan asosiy hujjatlar: diplom yoki attestat nusxasi, passport nusxasi, 3x4 rasm (6 ta), ariza topshirish",
          link: "https://t.me/sharq_qabul"
        },
        {
          question: "Grant asosida o'qish imkoniyati bormi?",
          answer: `Ha, universitetimizda iqtidorli abituriyentlar uchun grantlar mavjud.Xususan:
          Maktabni oltin medal bilan tugatganlarga;
          IELTS sertifikati egalariga;
          “Zakovat”ning respublika bosqichida g‘olib bo‘lganlarga;
          `,
          link: "https://t.me/sharquniversiteti/1292"
        },
        {
          question: "O'qishni sirtqi shaklda olib borish mumkinmi?",
          answer: "Ha, bizning universitetda bakalavr yo'nalishida sirtqi ta'lim shakli mavjud. Darslar qulay o`quv grafigi asosida o`tiladi.",
          link: "/"
        },
        {
          question: "Ta’lim krediti mavjudmi?",
          answer: ` Sharq Universiteti talabalari uchun tijorat bankalari bilan hamkorlikda maxsus ta’lim krediti imkoniyati yaratildi!

Kredit atigi bir kunda rasmiylashtiriladi.
Yillik foiz stavkasi:
➤ 0% — xotin-qizlar uchun
➤ 14% — yigitlar uchun;

To‘lovni o‘qishni tugatgach 6 oy ichida boshlaysiz 7 yilgacha bo‘lib to‘lash imkoni mavjud!`,
          link: 'https://t.me/sharquniversiteti/1282'
        },
        {
          question: "Universitetga qanday ishga kirish mumkin?",
          answer: "https://t.me/HR_SharqUniversiteti_bot bot orqali hujjat topshirishlari mumkin",
          link: 'https://t.me/sharquniversiteti/1268'
        }
      ]
    }
  },
  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index
    }
  }
}
</script>

<style lang="scss">
.faq-section {
  padding: 4rem 1rem;
  //   background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.faq-container {
  //   max-width: 800px;
  margin: 0 auto;
}

.faq-title {
  font-size: 2rem;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: #3498db;
    margin: 1rem auto;
    border-radius: 2px;
  }
}

.faq-subtitle {
  text-align: center;
  color: #7f8c8d;
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
}

.faq-accordion {
  border-radius: 10px;
  overflow: hidden;
  //   box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
}

.faq-item {
  //   background: white;
  border-bottom: 1px solid #eee;

  transition: all 0.3s ease;

  &:last-child {
    border-bottom: none;
  }

  &.active {
    background: #f8fafc;

    .faq-question {
      h3 {
        color: #3498db;
      }
    }
  }
}

.faq-question {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
    flex: 1;
    transition: color 0.2s;
  }
}

.faq-icon {
  width: 30px;
  height: 30px;
  background: #e3f2fd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3498db;
  transition: all 0.3s ease;

  .active & {
    background: #3498db;
    color: white;
  }
}

.faq-answer {
  padding: 0 1.5rem 1.5rem;
  color: #555;
  line-height: 1.6;

  p {
    margin-bottom: 1rem;
  }
}

.faq-link {
  display: inline-block;
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    text-decoration: underline;
    color: #2980b9;
  }
}

/* Animatsiyalar */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

@media (max-width: 768px) {
  .faq-title {
    font-size: 1.8rem;
  }

  .faq-question h3 {
    font-size: 1rem;
  }
}
</style>
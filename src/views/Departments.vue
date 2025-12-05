<template>
  <div class="rektor__container rahbariyat-page">
    <!-- Chap: Tanlangan bo‘lim haqida ma'lumot -->
    <div class="rektor__content rahbariyat-detail">
      <div class="rektor__info" v-if="selectedDepartment">
        <h2 class="rektor__title">{{ selectedDepartment.name }}</h2>
        <!-- <img loading="lazy"class="rektor__image" :src="selectedDepartment.img" :alt="selectedDepartment.name" /> -->
        <p class="rektor__description">{{ selectedDepartment.description }}</p>
        <div class="rektor__quote">
          <em>"{{ selectedDepartment.motto }}"</em>
        </div>
        <div class="contact-info">
          <p><strong>Email:</strong> {{ selectedDepartment.email }}</p>
          <p><strong>Telefon:</strong> {{ selectedDepartment.phone }}</p>
          <p><strong>Manzil:</strong> {{ selectedDepartment.address }}</p>
        </div>
      </div>
      <div v-else>
        <p>Iltimos, bo‘limni tanlang.</p>
      </div>
    </div>

    <!-- O‘ng: Bo‘limlar ro‘yxati -->
    <aside class="rahbariyat-list">
      <h4>BO‘LIMLAR</h4>
      <ul>
        <li
          v-for="dept in departments"
          :key="dept.slug"
          :class="{ active: selectedDepartment?.slug === dept.slug }"
          @click="selectDepartment(dept)"
        >
          <span class="arrow">»</span> {{ dept.name }}
        </li>
      </ul>
    </aside>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const departments = [
  {
    slug: "moliya-iqtisod",
    name: "Moliya-iqtisod bo‘limi",
    description:
      "Moliya-iqtisod bo‘limi universitetning moliyaviy barqarorligini ta’minlash, byudjetlarni shakllantirish va harajatlarni tahlil qilish, hisobotlarni tayyorlash bilan shug‘ullanadi. Bo‘lim moliyaviy intizomni nazorat qiladi, grantlar va shartnomaviy asosdagi tushumlarni boshqaradi.",
    email: "info@sharqedu.uz",
    phone: "+998 79 222 07 00",
    address: "1-qavat, 102-xona",
    motto: "Moliyaviy intizom — barqaror taraqqiyot asosi.",
    img: "https://via.placeholder.com/300x200?text=Moliya+bo‘limi",
  },
  {
    slug: "xojalik",
    name: "Xo‘jalik bo‘limi",
    description:
      "Xo‘jalik bo‘limi universitet binolarining ta’miri, tozaligi, yoritilishi, isitilishi va barcha moddiy-texnik infratuzilmasi uchun mas’ul. Bo‘lim ta’mirlash, mebel, inventar va jihozlar bilan ta’minlashni tashkil qiladi.",
    email: "info@sharqedu.uz",
    phone: "+998 79 222 07 00",
    address: "1-qavat, 104-xona",
    motto: "Qulay muhit — samarali ta’limning garovi.",
    img: "https://via.placeholder.com/300x200?text=Xo‘jalik+bo‘limi",
  },
  {
    slug: "atm",
    name: "Axborot texnologiyalar markazi",
    description:
      "ATM raqamli infratuzilmani rivojlantirish, ichki axborot tizimlari, internet xizmatlari, serverlar va foydalanuvchi kompyuterlarini nazorat qilish bilan shug‘ullanadi. Bo‘lim zamonaviy texnologiyalarni joriy etish orqali ta’lim sifatini oshirishga xizmat qiladi.",
    email: "info@sharqedu.uz",
    phone: "+998 79 222 07 00",
    address: "2-qavat, 201-xona",
    motto: "Raqamli taraqqiyot — kelajak kaliti.",
    img: "https://via.placeholder.com/300x200?text=ATM",
  },
  {
    slug: "arm",
    name: "Axborot-resurslar markazi",
    description:
      "ARM universitet kutubxona tizimini boshqaradi. O‘quv, ilmiy, metodik va badiiy adabiyotlar bilan ta’minlaydi. Elektron kutubxona xizmatlari va ilmiy ma’lumotlar bazalariga kirishni yo‘lga qo‘yadi.",
    email: "info@sharqedu.uz",
    phone: "+998 79 222 07 00",
    address: "2-qavat, 210-xona",
    motto: "Ilm — eng qudratli qurol.",
    img: "https://via.placeholder.com/300x200?text=Kutubxona",
  },
  {
    slug: "xodimlar",
    name: "Xodimlar bo‘limi",
    description:
      "Kadrlar bilan ishlash, mehnat shartnomalarini rasmiylashtirish, ishga qabul qilish va bo‘shatish, attestatsiyalar, ish tartibini monitoring qilish bilan shug‘ullanadi.",
    email: "info@sharqedu.uz",
    phone: "+998 79 222 07 00",
    address: "3-qavat, 301-xona",
    motto: "Kadrlar hal qiluvchi kuchdir.",
    img: "https://via.placeholder.com/300x200?text=Kadrlar",
  },
  {
    slug: "oubolim",
    name: "O‘quv-uslubiy bo‘lim",
    description:
      "O‘quv jarayonini rejalashtirish, o‘quv rejalari va fan dasturlarini ishlab chiqish, kredit-modul tizimini boshqarish va ta’lim monitoringini yuritadi.",
    email: "info@sharqedu.uz",
    phone: "+998 79 222 07 00",
    address: "3-qavat, 305-xona",
    motto: "Tizimli ta’lim — bilim kaliti.",
    img: "https://via.placeholder.com/300x200?text=O‘quv-uslubiy",
  },
  {
    slug: "marketing",
    name: "Marketing va shartnomalar bo‘limi",
    description:
      "Talabalarni jalb qilish, reklama kampaniyalari, ta’lim xizmatlari bo‘yicha shartnomalarni rasmiylashtirish va nazorat qilish bilan shug‘ullanadi.",
    email: "info@sharqedu.uz",
    phone: "+998 79 222 07 00",
    address: "4-qavat, 401-xona",
    motto: "Tanlov — bizni aniqlaydi.",
    img: "https://via.placeholder.com/300x200?text=Marketing",
  },
  {
    slug: "talabalarga-xizmat",
    name: "Talabalarga xizmat ko‘rsatish bo‘limi",
    description:
      "Talabalar uchun hujjatlarni rasmiylashtirish, stipendiya, yotoqxona, maslahat va huquqiy yordam xizmatlarini ko‘rsatadi.",
    email: "info@sharqedu.uz",
    phone: "+998 79 222 07 00",
    address: "4-qavat, 410-xona",
    motto: "Talaba — bizning markazimizda.",
    img: "https://via.placeholder.com/300x200?text=TXKB",
  },
];

const selectedDepartment = ref(null);

const selectDepartment = (dept) => {
  selectedDepartment.value = dept;
};

onMounted(() => {
  selectedDepartment.value = departments[0]; // Default: birinchi bo‘lim
});
</script>

<style scoped lang="scss">
.rahbariyat-page {
  background: #f9fbff;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  gap: 20px;
  padding-top: 150px;

  .rektor__image {
    width: 300px;
    margin: 0 auto;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .rektor__info {
    text-align: center;
  }

  .rektor__quote,
  .rektor__description,
  .contact-info {
    text-align: start;
    margin-top: 20px;
  }

  .contact-info p {
    margin: 6px 0;
  }
}

.rahbariyat-detail {
  flex: 1 1 65%;
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);

  h2 {
    color: #004aad;
    margin-bottom: 1rem;
  }

  h3 {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: #222;
  }

  p {
    line-height: 1.6;
    color: #444;
  }
}

.rahbariyat-list {
display: none;
  flex: 1 1 30%;
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);

  h4 {
    margin-bottom: 1rem;
    font-size: 1rem;
    color: #004aad;
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      padding: 10px 15px;
      border-radius: 6px;
      margin-bottom: 8px;
      cursor: pointer;
      background-color: #f2f6ff;
      display: flex;
      align-items: center;
      transition: all 0.3s;

      .arrow {
        margin-right: 10px;
        color: #004aad;
      }

      &:hover {
        background-color: #dfeeff;
      }

      &.active {
        background-color: #004aad;
        color: white;

        .arrow {
          color: white;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .rahbariyat-page {
    flex-direction: column-reverse;
  }
}
</style>

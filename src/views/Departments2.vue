<template>
  <div class="departments">
    <div class="departments-grid">
      <div v-for="department in departments" :key="department.id" class="department-wrapper"><router-link
          class="program-card" :to="`/department/staffs?department_id=${department.id}`">
          <!-- <a 
          :href="`/department/staffs?department_id=${department.id}`"
          class="program-card"
        > -->
          <div class="program-card__header">
            <h3 class="program-card__title">{{ department.name }}</h3>
            <div class="program-card__icon">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M32.0027 7.34922C32.004 6.04522 31.2307 4.91855 30.0307 4.47855L19.4947 0.611888C17.2853 -0.197445 14.8547 -0.202778 12.6467 0.602555L1.98133 4.48255C0.778667 4.92122 0.00133333 6.04789 0.00266667 7.35189C0.00266667 8.65722 0.781333 9.78255 1.984 10.2186L12.5893 14.0666C13.6867 14.4652 14.84 14.6639 15.992 14.6639C17.144 14.6639 18.296 14.4652 19.392 14.0666L29.3333 10.4599V15.9986C29.3333 16.7346 29.9307 17.3319 30.6667 17.3319C31.4027 17.3319 32 16.7346 32 15.9986C32 15.9986 32.0027 7.35589 32.0027 7.34922ZM2.93733 21.3879C5.72 22.0852 11.0067 23.5906 14.6667 23.9266V29.4066C11.0067 29.7426 5.71867 31.2492 2.93733 31.9452C1.44267 32.3199 0 31.1839 0 29.6426V23.6906C0 22.1492 1.44267 21.0132 2.93733 21.3879ZM32 23.6906V29.6426C32 31.1839 30.5573 32.3199 29.0627 31.9452C26.28 31.2479 20.9933 29.7426 17.3333 29.4066V23.9266C20.9933 23.5906 26.2813 22.0839 29.0627 21.3879C30.5573 21.0132 32 22.1492 32 23.6906ZM6.66667 19.5959V14.7546L11.6787 16.5732C14.444 17.5772 17.5307 17.5786 20.3013 16.5732L25.332 14.7479V19.5946C22.7267 20.2626 19.332 21.3706 15.9987 21.3706C12.6653 21.3706 9.27067 20.2626 6.66533 19.5946L6.66667 19.5959Z">
                </path>
              </svg>
            </div>
          </div>

          <span class="program-card__subtitle">
            Xodimlar: {{ department.employeeCount }}
          </span>

          <div class="program-card__divider"></div>

          <div class="program-card__footer">
            <div class="program-card__users">
              <div v-for="(employee, index) in department.employees?.slice(0, 3)" :key="index"
                class="program-card__user">
                <img v-if="employee.photo" :src="employee.photo" :alt="employee.name" />
                <span v-else class="user-initials">
                  {{ getInitials(employee.name) }}
                </span>
              </div>

              <div v-if="department.employeeCount > 3" class="program-card__user program-card__user--more">
                +{{ department.employeeCount - 3 }}
              </div>
            </div>

            <span class="program-card__link">
              Batafsil <i class="icon-arrow-right">→</i>
            </span>
          </div>
        </router-link> </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';


// Mock ma'lumotlar - keyinchalik API dan keladigan bo'ladi
const departments = ref([
    {
    id: 10,
    slug: 'nazorat-sifat',
    name: "Nazorat va sifat monitoringi bo’limi",
    description: "Taʼlim sifatini nazorat qilish boʻlimining asosiy maqsadi Sharq universiteti talabalari bilimlarining davlat taʼlim standartlariga muvofiqligini oʻrganib borish, tahlil qilish, kadrlar tayyorlash sifati monitoringini yuritish, Sharq universiteti ichki attestatsiyadan oʻtkazishni tashkil etish va uning natijalari boʻyicha taʼlim sifatiga salbiy taʼsir etuvchi omillarni aniqlash hamda ularni bartaraf etish va oldini olish choralarini koʻrishdan iborat.",
    email: 'info@sharqedu.uz',
    phone: '+998 79 222 07 00',
    address: '4-qavat, 405-xona',
    motto: "Qulay muhit — samarali ta'limning garovi.",
    employeeCount: 8,
    employees: [
      { name: 'Habibullayev Qahramon', photo: null },
      // { name: 'Tursunov Jahongir', photo: null }
    ]
  },
  {
    id: 1,
    slug: 'moliya-iqtisod',
    name: "Moliya-iqtisod bo'limi",
    description: "Moliya-iqtisod bo'limi universitetning moliyaviy barqarorligini ta'minlash, byudjetlarni shakllantirish va harajatlarni tahlil qilish, hisobotlarni tayyorlash bilan shug'ullanadi.",
    email: 'info@sharqedu.uz',
    phone: '+998 79 222 07 00',
    address: '1-qavat, 102-xona',
    motto: 'Moliyaviy intizom — barqaror taraqqiyot asosi.',
    employeeCount: 5,
    employees: [
      // { name: 'Usmonov Akmal', photo: '/img/person/usmon.jpg' },
      // { name: 'Karimova Dilnoza', photo: null },
      // { name: 'Rahimov Sardor', photo: null }
    ]
  },
  {
    id: 2,
    slug: 'xojalik',
    name: "Xo'jalik bo'limi",
    description: "Xo'jalik bo'limi universitet binolarining ta'miri, tozaligi, yoritilishi, isitilishi va barcha moddiy-texnik infratuzilmasi uchun mas'ul.",
    email: 'info@sharqedu.uz',
    phone: '+998 79 222 07 00',
    address: '1-qavat, 104-xona',
    motto: "Qulay muhit — samarali ta'limning garovi.",
    employeeCount: 8,
    employees: [
      // { name: 'Aliyev Botir', photo: null },
      // { name: 'Tursunov Jahongir', photo: null }
    ]
  },
  {
    id: 3,
    slug: 'atm',
    name: 'Axborot texnologiyalar markazi',
    description: 'ATM raqamli infratuzilmani rivojlantirish, ichki axborot tizimlari, internet xizmatlari, serverlar va foydalanuvchi kompyuterlarini nazorat qilish bilan shug\'ullanadi.',
    email: 'info@sharqedu.uz',
    phone: '+998 79 222 07 00',
    address: '2-qavat, 201-xona',
    motto: 'Raqamli taraqqiyot — kelajak kaliti.',
    employeeCount: 6,
    employees: [
      // { name: 'Mahmudov Aziz', photo: null },
      // { name: 'Yusupova Madina', photo: null }
    ]
  },
  {
    id: 4,
    slug: 'arm',
    name: 'Axborot-resurslar markazi',
    description: "ARM universitet kutubxona tizimini boshqaradi. O'quv, ilmiy, metodik va badiiy adabiyotlar bilan ta'minlaydi.",
    email: 'info@sharqedu.uz',
    phone: '+998 79 222 07 00',
    address: '2-qavat, 210-xona',
    motto: 'Ilm — eng qudratli qurol.',
    employeeCount: 4,
    employees: [
      // { name: 'Ergasheva Nilufar', photo: null },
      // { name: 'Saidov Jamshid', photo: null }
    ]
  },
  {
    id: 5,
    slug: 'xodimlar',
    name: "Xodimlar bo'limi",
    description: 'Kadrlar bilan ishlash, mehnat shartnomalarini rasmiylashtirish, ishga qabul qilish va bo\'shatish, attestatsiyalar, ish tartibini monitoring qilish bilan shug\'ullanadi.',
    email: 'info@sharqedu.uz',
    phone: '+998 79 222 07 00',
    address: '3-qavat, 301-xona',
    motto: 'Kadrlar hal qiluvchi kuchdir.',
    employeeCount: 3,
    employees: [
      // { name: 'Nazarova Feruza', photo: null }
    ]
  },
  {
    id: 6,
    slug: 'oubolim',
    name: "O'quv-uslubiy bo'lim",
    description: "O'quv jarayonini rejalashtirish, o'quv rejalari va fan dasturlarini ishlab chiqish, kredit-modul tizimini boshqarish va ta'lim monitoringini yuritadi.",
    email: 'info@sharqedu.uz',
    phone: '+998 79 222 07 00',
    address: '3-qavat, 305-xona',
    motto: "Tizimli ta'lim — bilim kaliti.",
    employeeCount: 7,
    employees: [
      // { name: 'Qodirov Sanjar', photo: null },
      // { name: 'Hasanova Gulnora', photo: null }
    ]
  },
  {
    id: 7,
    slug: 'marketing',
    name: 'Marketing va shartnomalar bo\'limi',
    description: "Talabalarni jalb qilish, reklama kampaniyalari, ta'lim xizmatlari bo'yicha shartnomalarni rasmiylashtirish va nazorat qilish bilan shug'ullanadi.",
    email: 'info@sharqedu.uz',
    phone: '+998 79 222 07 00',
    address: '4-qavat, 401-xona',
    motto: 'Tanlov — bizni aniqlaydi.',
    employeeCount: 5,
    employees: [
      // { name: 'Ibragimov Rustam', photo: null },
      // { name: 'Karimova Nodira', photo: null }
    ]
  },
  {
    id: 8,
    slug: 'talabalarga-xizmat',
    name: "Talabalarga xizmat ko'rsatish bo'limi",
    description: "Talabalar uchun hujjatlarni rasmiylashtirish, stipendiya, yotoqxona, maslahat va huquqiy yordam xizmatlarini ko'rsatadi.",
    email: 'info@sharqedu.uz',
    phone: '+998 79 222 07 00',
    address: '4-qavat, 410-xona',
    motto: 'Talaba — bizning markazimizda.',
    employeeCount: 6,
    employees: [
      // { name: 'Tursunova Malika', photo: null },
      // { name: 'Abdullayev Farhod', photo: null }
    ]
  }
]);

// Ismdan bosh harflarni olish
const getInitials = (name) => {
  if (!name) return '?';
  const parts = name.split(' ');
  return parts.map(p => p.charAt(0)).join('').toUpperCase().slice(0, 2);
};

// API dan ma'lumotlarni olish (keyinchalik)
const fetchDepartments = async () => {
  try {
    // const response = await fetch('/api/departments');
    // const data = await response.json();
    // departments.value = data;
  } catch (error) {
    console.error('Ma\'lumotlarni yuklashda xatolik:', error);
  }
};

onMounted(() => {
  // fetchDepartments();
});
</script>

<style scoped>
.departments-container {
  padding: 20px;
  background: #f9fbff;
}

.departments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 24px;
  max-width: 1400px;
  margin: 0 auto;
}

.department-wrapper {
  width: 100%;
}

.program-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  text-decoration: none;
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.program-card::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(180deg, #96bbdbe0 0%, #D7E6F3 100%);
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  border-radius: 16px;
  z-index: -2;
  transition: all 0.3s ease;
}

.program-card::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 17px;
  border-top: 1px solid #5490ff;
  z-index: -3;
}

.program-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(84, 144, 255, 0.25);
}

.program-card:hover::before {
  background: linear-gradient(180deg, #8ab3d8 0%, #cce0f0 100%);
}

.program-card__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 12px;
  position: relative;
}

.program-card__title {
  color: #283353;
  font-weight: 600;
  font-size: 22px;
  line-height: 1.4;
  letter-spacing: -0.28px;
  margin: 0;
  padding-right: 50px;
  transition: color 0.15s ease-in-out;
}

.program-card:hover .program-card__title {
  /* color: #1a5dbd; */
}

.program-card__icon {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
}

.program-card__icon svg {
  width: 100%;
  height: 100%;
  fill: #5490ff;
  transition: fill 0.15s ease;
}

.program-card:hover .program-card__icon svg {
  fill: #1a5dbd;
}

.program-card__subtitle {
  display: inline-block;
  color: #4a5568;
  font-size: 15px;
  margin-top: 8px;
  font-weight: 500;
}

.program-card__divider {
  margin: 18px 0;
  border-bottom: 1px solid #5490ff;
  opacity: 0.5;
  transition: all 0.15s ease-in-out;
}

.program-card:hover .program-card__divider {
  opacity: 0.8;
}

.program-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.program-card__users {
  display: flex;
  align-items: center;
  padding-left: 20px;
  transition: all 0.3s ease-in-out;
}

.program-card__user {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 3px solid #fff;
  overflow: hidden;
  position: relative;
  margin-left: -20px;
  transition: all 0.3s ease-in-out;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.program-card__user img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-initials {
  font-size: 14px;
  font-weight: 600;
}

.program-card__user--more {
  background: #5490ff;
  font-size: 13px;
}

.program-card:hover .program-card__users {
  padding-left: 0;
}

.program-card:hover .program-card__user {
  margin-left: 0;
  margin-right: 8px;
}

.program-card__link {
  display: flex;
  align-items: center;
  color: #1D253C;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.18px;
  gap: 8px;
  transition: all 0.3s ease-in-out;
  white-space: nowrap;
}

.program-card__link i {
  transition: transform 0.3s ease-in-out;
  color: #197683;
  font-style: normal;
}

.program-card:hover .program-card__link {
  transform: translateX(12px);
  color: #197683;
}

.program-card:hover .program-card__link i {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .departments-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .program-card {
    padding: 20px;
  }

  .program-card__title {
    font-size: 18px;
    padding-right: 40px;
  }

  .program-card__icon {
    width: 32px;
    height: 32px;
  }
}
</style>
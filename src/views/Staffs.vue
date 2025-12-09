<template>
  <div class="deparment-person">
    <div v-for="employee in employees" :key="employee.id" class="staff">
      <div class="staff-image">
        <div class="staff-image__inner">
          <img :src="employee.photo || '/img/person/usmon.jpg'" :alt="employee.fullName" loading="lazy"
            @error="handleImageError">
        </div>
      </div>
      <div class="staff-info__wrapper">
        <div class="staff-info">
          <h3 class="staff-info__fio">{{ employee.fullName }}</h3>
          <div class="staff-info__divider"></div>
          <p class="staff-info__text">{{ employee.position }}</p>
          <div class="staff-info__bottom">
            <div class="staff-info__links">
              <a v-if="employee.email" :href="`mailto:${employee.email}`" class="staff-info__link">
                <i class="fa-regular fa-envelope"></i>
                {{ employee.email }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const employees = ref([]);

// Mock ma'lumotlar - Keyinchalik API dan keladi
const mockEmployees = {
  10: [
    {
      id: 1,
      fullName: "Habibullayev Qahramon ",
      position: "Bo'lim boshlig'i",
      email: "markett22@mail.ru",
      photo: "/img/person/qahramon.jpg"
    },
    // {
    //   id: 2,
    //   fullName: "",
    //   position: "Senior Specialist",
    //   email: "d.karimova@newuu.uz",
    //   photo: "/img/person/usmon.jpg"
    // },
    // {
    //   id: 3,
    //   fullName: "Rahimov Sardor Azimovich",
    //   position: "Specialist",
    //   email: "s.rahimov@newuu.uz",
    //   photo: "/img/person/usmon.jpg"
    // }
  ],
  1: [
    {
      id: 1,
      fullName: "Turgunova Komola Baxriddinovna",
      position: "Chief Specialist",
      email: "k.turgunova@newuu.uz",
      photo: "/img/person/usmon.jpg"
    },
    {
      id: 2,
      fullName: "Karimova Dilnoza Sharipovna",
      position: "Senior Specialist",
      email: "d.karimova@newuu.uz",
      photo: "/img/person/usmon.jpg"
    },
    {
      id: 3,
      fullName: "Rahimov Sardor Azimovich",
      position: "Specialist",
      email: "s.rahimov@newuu.uz",
      photo: "/img/person/usmon.jpg"
    }
  ],
  2: [
    {
      id: 4,
      fullName: "Aliyev Botir Raximovich",
      position: "Department Head",
      email: "b.aliyev@newuu.uz",
      photo: "/img/person/usmon.jpg"
    },
    {
      id: 5,
      fullName: "Tursunov Jahongir Karimovich",
      position: "Chief Specialist",
      email: "j.tursunov@newuu.uz",
      photo: "/img/person/usmon.jpg"
    }
  ],
  3: [
    {
      id: 6,
      fullName: "Mahmudov Aziz Shavkatovich",
      position: "IT Director",
      email: "a.mahmudov@newuu.uz",
      photo: "/img/person/usmon.jpg"
    }
  ]
};

// API dan xodimlarni olish
const fetchEmployees = async (departmentId) => {
  try {
    // Real API chaqiruvi (keyinchalik):
    // const response = await fetch(`/api/departments/${departmentId}/employees`);
    // const data = await response.json();
    // employees.value = data;

    // Hozircha mock data:
    employees.value = mockEmployees[departmentId] || [];

  } catch (error) {
    console.error('Xodimlarni yuklashda xatolik:', error);
    employees.value = [];
  }
};

// Rasm yuklanmasa default rasm
const handleImageError = (event) => {
  event.target.src = '/img/person/usmon.jpg';
};

onMounted(() => {
  const departmentId = route.query.department_id;
  if (departmentId) {
    fetchEmployees(departmentId);
  }
});
</script>

<style scoped>
.deparment-person {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-.5 * var(--bs-gutter-x));
  margin-left: calc(-.5 * var(--bs-gutter-x));
}

.staff {
  display: flex;
  /* max-width: 400px; */
  flex-grow: 1;
  justify-content: space-between;
  gap: 5px;
  flex: 0 0 auto;
  width: calc(50% - 20px);
  max-width: 100%;
  /* height: 100%; */
}

.staff-info__wrapper {
  width: calc(100% - 160px - 8px);
  width: 100%;

}

.staff-info {
  background: var(--local-bg, var(--white-1));
  display: flex;
  flex-direction: column;
  padding: 14px;
  border: 1px solid var(--local-border-color, var(--black-9));
  border-radius: 12px;
  height: 100%;
  position: relative;
}

.staff-info__fio {
  color: var(--local-color, var(--black-1));
  font-size: 20px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.24px;
}

.staff-info__text {
  color: var(--local-text-color, var(--black-3));
  font-size: var(--size-text-16);
  line-height: 140%;
  letter-spacing: -0.16px;
  margin-bottom: auto;
}

.staff-info__divider {
  max-width: 120px;
  width: 100%;
  height: 2px;
  background-color: var(--blue-4);
  margin: 12px 0;
}

.staff-info__bottom {
  margin-top: var(--space-16);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 16px;
}

.staff-info__links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.staff-info__link {
  padding: 6px 8px;
  display: flex;
  align-items: center;
  color: var(--local-color, var(--black-1));
  font-size: 15px;
  line-height: 138%;
  letter-spacing: -0.16px;
  gap: 6px;
  border-radius: 8px;
  border: 1px solid var(--local-link-border, var(--black-7));
  background: rgba(248, 250, 253, 1);
}

.staff-image__inner img {
  border-radius: 12px;
  width: 290px;
  height: 180px;
  object-fit: cover;
}

/* 
.staff-image {
    width: 100%;
    max-width: 160px;
    margin: 0 auto;
} */
.staff-info__link i {
  font-size: 18px;
  color: rgba(82, 148, 229, 1);
  height: 100%;
}
</style>
<template>
  <div class="department-person">
    <div v-for="employee in employees" :key="employee.id" class="staff">
      <!-- Xodim rasmi -->
      <div class="staff-image">
        <div class="staff-image__inner">
          <img 
            :src="`https://api.sharqedu.uz/uploads/img/person/${encodeURIComponent(employee.fullName)}.jpg`" 
            :alt="employee.fullName" 
            loading="lazy"
            @error="handleImageError"
          />
        </div>
      </div>

      <!-- Xodim ma'lumotlari -->
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
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useDepartmentsStore } from '../stores/department';

const route = useRoute();
const departmentsStore = useDepartmentsStore();

// Default ma'lumotlar
const mockEmployees = {
  // kerak bo‘lsa bu yerga mock ma'lumot qo‘yishingiz mumkin
};

// Local employees ref
const employees = ref([]);

// Department ID ni olish
const departmentId = computed(() => route.query.department_id);

// API dan xodimlarni olish
const fetchEmployees = async (deptId) => {
  if (!deptId) {
    employees.value = [];
    return;
  }

  try {
    if (!departmentsStore.departments || departmentsStore.departments.length === 0) {
      await departmentsStore.fetchDepartments({ });
    }

    const storeEmployees = departmentsStore.getEmployeesByDepartmentId(deptId);

    if (storeEmployees && storeEmployees.length > 0) {
      employees.value = storeEmployees.map(emp => ({
        id: emp.id,
        fullName: emp.fullName || emp.name,
        position: emp.position || 'Lavozim ko\'rsatilmagan',
        email: emp.email,
        phone: emp.phone,
        photo: emp.photo
      }));
      return;
    }

    employees.value = mockEmployees[deptId] || [];
  } catch (error) {
    console.error('Xodimlarni yuklashda xatolik:', error);
    employees.value = mockEmployees[deptId] || [];
  }
};

// Rasm yuklanmasa default rasm
const handleImageError = (event) => {
  event.target.src = '/img/person/default.png';
};

// Department ID o‘zgarganda xodimlarni qayta yuklash
watch(departmentId, async (newId, oldId) => {
  if (newId && newId !== oldId) {
    await fetchEmployees(newId);
  }
}, { immediate: false });

onMounted(async () => {
  if (departmentId.value) {
    await fetchEmployees(departmentId.value);
  }
});
</script>

<style scoped>
.department-person {
  display: flex;
  /* flex-wrap: wrap; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  justify-content: space-between;
  margin-top: 0;
}


.staff {
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex: 1 1 calc(50% - 18px);
  max-width: 100%;
  min-width: 250px;
}

/* Rasm qismi */
.staff-image__inner img {
  border-radius: 12px;
  width: 100%;
  max-width: 290px;
  height: auto;
  object-fit: cover;
}

/* Info qismi */
.staff-info__wrapper {
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

.staff-info__link i {
  font-size: 18px;
  color: rgba(82, 148, 229, 1);
  height: 100%;
}

/* RESPONSIVE */



/* Mobil ekranlar */
@media (max-width: 768px) {
  .staff-info__fio {
    font-size: 18px;
  }

  .staff-info__text {
    font-size: 14px;
  }

  .staff-info {
    padding: 12px;
  }
}
@media (max-width: 768px) {
  .department-person {
    grid-template-columns: 1fr;
  }
  /* .staff-image__inner img{
    max-width: 150px;
  } */
}
</style>

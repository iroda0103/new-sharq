<template>
  <section class="faculties-page">
    <div class="">
      <h2 class="documents__title page-title">Fakultetlar</h2>
      <p class="documents__subtitle page-subtitle">Bizda mavjud bo‘lgan fakultetlar ro‘yxati bilan tanishing</p>

      <div class="faculties-grid">
        <div
          v-for="(faculty, index) in faculties"
          :key="index"
          class="faculty-card"
          @click="goToDirections(faculty.key)"
        >
          <div class="faculty-icon">
            <font-awesome-icon :icon="['fas', faculty.icon]" />
          </div>
          <h3 class="faculty-title">{{ faculty.name }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FacultiesPage",
  data() {
    return {
      faculties: [
        {
          name: "Texnik va raqamli texnologiyalar fakulteti",
          key: "texnika",
          icon: "microchip",
        },
        {
          name: "Iqtisod va biznes fakulteti",
          key: "iqtisod",
          icon: "chart-line",
        },
        {
          name: "Gumanitar fanlar fakulteti",
          key: "gumanitar",
          icon: "book",
        },
      ],
    };
  },
  methods: {
    goToDirections(facultyKey) {
      this.$router.push({ path: "/directions", query: { faculty: facultyKey } });
    },
  },
};
</script>

<!-- <style lang="scss">
.faculties-page {
  padding: 80px 0;
  padding-bottom: 160px;
}

.faculties-grid {
  display: grid;
  //grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin-top: 30px;
}

.faculty-card {
  background: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  .faculty-icon {
    font-size: 36px;
    color: #00bafc;
    margin-bottom: 15px;
  }

  .faculty-title {
    font-size: 18px;
    font-weight: 600;
    color: #333;
  }
}
</style> -->

<style lang="scss">
.faculties-page {
  padding: 80px 0;
  // padding-bottom: 160px;
  // padding-top: 200px;

  .documents__title {
    text-align: center;
  }

  .documents__subtitle {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }
    @media (max-width: 600px) {
    padding: 30px 0;
  }
}

.faculties-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); // Default: 3 ta ustun
  gap: 30px;
  margin-top: 30px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr); // Planshetlar
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr; // Telefonlar
  }
}

.faculty-card {
  background: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  .faculty-icon {
    font-size: 36px;
    color: #00bafc;
    margin-bottom: 15px;
  }

  .faculty-title {
    font-size: 18px;
    font-weight: 600;
    color: #333;
  }
}
</style>
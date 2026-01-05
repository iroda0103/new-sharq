<style lang="scss">
.directions-page {
  // padding: 40px 20px;
  // max-width: 1200px;
  margin: 0 auto;
}

// .page-title {
//   font-size: 32px;
//   font-weight: 700;
//   text-align: center;
//   margin-bottom: 10px;
//   color: #222;
// }

.page-subtitle {
  font-size: 18px;
  text-align: center;
  margin-bottom: 30px;
  color: #555;
}

/* Filtrlash paneli uchun */
.direction-filters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 50px;

  .filter-group {
    display: flex;
    flex-direction: column;
    min-width: 200px;

    label {
      margin-bottom: 8px;
      font-weight: 600;
      font-size: 14px;
      color: #444;
    }

    select {
      padding: 12px 15px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 15px;
      background-color: #fff;
      cursor: pointer;
      transition: border-color 0.3s, box-shadow 0.3s;

      &:focus {
        outline: none;
        border-color: #00bafc;
        box-shadow: 0 0 8px rgba(0, 186, 252, 0.3);
      }
    }
  }
}

/* Ta'lim yo‘nalishlari kartlari uchun */
.directions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

/* Kartalar dizayni */
.direction-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.07);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #00bafc, #0062ff);
    border-radius: 12px 12px 0 0;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
  }
}

.direction-header {
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.direction-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(to right, #00bafc, #005bec);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 22px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.direction-title {
  flex: 1;
  font-size: 20px;
  font-weight: 600;
  color: #222;
  margin: 0;
}

/* Kontent uchun */
.direction-body {
  padding: 15px 20px;
  font-size: 14px;
  color: #555;

  .direction-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 12px;
  }

  .direction-price {
    background-color: #f0f8ff;
    padding: 10px 15px;
    border-radius: 8px;
    font-size: 15px;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 15px;
    color: #333;
  }
}

/* Linklar uchun */
.direction-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #00bafc;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #0088cc;
  }

  i {
    font-size: 14px;
    transition: transform 0.3s;
  }
}

/* Responsive dizayn */
@media(max-width: 768px) {
  .direction-header {
    flex-direction: column;
    text-align: center;
  }

  .direction-icon {
    margin-bottom: 10px;
  }
}
</style>

<template>
  <section class="directions-page">
    <div class="">
      <h2 class="page-title">Taʼlim yo‘nalishlari</h2>
      <p class="page-subtitle">Zamonaviy kasblar va istiqbolli mutaxassisliklar</p>

      <div class="direction-filters">
        <div class="filter-group">
          <!-- <label for="faculty-filter">:</label> -->
          <select id="faculty-filter" v-model="selectedFaculty">
            <option value="all">Barchasi</option>
            <option value="texnika">Texnik va raqamli texnologiyalar fakulteti</option>
            <option value="iqtisod">Iqtisod va biznes fakulteti</option>
            <option value="gumanitar">Gumanitar fanlar fakulteti</option>
          </select>
        </div>

        <div class="filter-group">
          <!-- <label for="type-filter">Ta'lim turi:</label> -->
          <select id="type-filter" v-model="selectedType">
            <option value="all">Barchasi</option>
            <option value="kunduzgi">Kunduzgi</option>
            <option value="kechki">Kechki</option>
            <option value="sirtqi">Sirtqi</option>
          </select>
        </div>
      </div>

      <div class="directions-grid">
        <div v-for="(direction, index) in filteredDirections" :key="index" class="direction-card">
          <div class="direction-header">
            <div class="direction-icon">
              <font-awesome-icon :icon="['fas', direction.icon]" />
            </div>
            <h3 class="direction-title">{{ direction.title }}</h3>
          </div>
          <div class="direction-body">
            <div class="direction-meta">
              <span><i class="fas fa-clock"></i> {{ direction.duration }}</span>
              <span><i class="fas fa-graduation-cap"></i> {{ direction.credits }}</span>
              <span><i class="fas fa-calendar-alt"></i> {{ direction.semester }}</span>
            </div>
            <div class="direction-price">
              <i class="fas fa-money-bill-wave"></i> {{ direction.price }}
            </div>
            <!-- <a :href="direction.link" class="direction-link">
              
            </a> -->
            <router-link :to="direction.link" class="direction-link">Batafsil ma'lumot <i
                class="fas fa-arrow-right"></i></router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DirectionsPage",
  data() {
    return {
      selectedFaculty: "all",
      selectedType: "all",
      directions: [
        {
          key: "suniy-intellekt",
          title: "Sun'iy intellekt",
          icon: "robot",
          duration: "4 yil",
          credits: "240 kredit",
          semester: "Kuzgi semestr",
          price: "18,000,000 sO‘m/yil",
          faculty: "texnika",
          type: "kunduzgi",
          link: "/direction/suniy-intellekt",
        },
        {
          key: "kiberxavfsizlik",
          title: "Kiberxavfsizlik injiniringi",
          icon: "shield-alt",
          duration: "4 yil",
          credits: "240 kredit",
          semester: "Kuzgi semestr",
          price: "18,000,000 sO‘m/yil",
          faculty: "texnika",
          type: "kunduzgi",
          link: "/direction/kiberxavfsizlik",
        },
        {
          key: "dasturiy-injiniring",
          title: "Dasturiy injiniring",
          icon: "code",
          duration: "4 yil",
          credits: "240 kredit",
          semester: "Kuzgi semestr",
          price: "18,000,000 sO‘m/yil",
          faculty: "texnika",
          type: "kunduzgi",
          link: "/direction/dasturiy-injiniring",
        },
        {
          key: "iqtisodiyot",
          title: "Iqtisodiyot",
          icon: "chart-line",
          duration: "4 yil",
          credits: "240 kredit",
          semester: "Kuzgi semestr",
          price: "15,000,000 sO‘m/yil",
          faculty: "iqtisod",
          type: "kunduzgi",
          link: "/direction/iqtisodiyot",
        },
        {
          key: "biznes",
          title: "Biznesni boshqarish",
          icon: "briefcase",
          duration: "4 yil",
          credits: "240 kredit",
          semester: "Kuzgi semestr",
          price: "16,000,000 sO‘m/yil",
          faculty: "iqtisod",
          type: "kunduzgi",
          link: "/direction/biznes",
        },
        {
          key: "marketing",
          title: "Marketing",
          icon: "bullhorn",
          duration: "4 yil",
          credits: "240 kredit",
          semester: "Kuzgi semestr",
          price: "16,000,000 sO‘m/yil",
          faculty: "iqtisod",
          type: "kunduzgi",
          link: "/direction/marketing",
        },
        {
          key: "moliya",
          title: "Moliya va moliyaviy texnologiyalar",
          icon: "coins",
          duration: "4 yil",
          credits: "240 kredit",
          semester: "Kuzgi semestr",
          price: "17,000,000 sO‘m/yil",
          faculty: "iqtisod",
          type: "kunduzgi",
          link: "/direction/moliya",
        },
        {
          key: "tarix",
          title: "Tarix",
          icon: "landmark",
          duration: "4 yil",
          credits: "240 kredit",
          semester: "Kuzgi semestr",
          price: "15,000,000 sO‘m/yil",
          faculty: "gumanitar",
          type: "kunduzgi",
          link: "/direction/tarix",
        },
        {
          key: "psixologiya",
          title: "Psixologiya",
          icon: "brain",
          duration: "4 yil",
          credits: "240 kredit",
          semester: "Kuzgi semestr",
          price: "15,000,000 sO‘m/yil",
          faculty: "gumanitar",
          type: "kunduzgi",
          link: "/direction/psixologiya",
        },
        {
          key: "ozbek-tili",
          title: "Filologiya (o‘zbek tili)",
          icon: "language",
          duration: "4 yil",
          credits: "240 kredit",
          semester: "Kuzgi semestr",
          price: "15,000,000 sO‘m/yil",
          faculty: "gumanitar",
          type: "kunduzgi",
          link: "/direction/ozbek-tili",
        },
        {
          key: "rus-tili",
          title: "Filologiya (rus tili)",
          icon: "language",
          duration: "4 yil",
          credits: "240 kredit",
          semester: "Kuzgi semestr",
          price: "15,000,000 sO‘m/yil",
          faculty: "gumanitar",
          type: "kunduzgi",
          link: "/direction/rus-tili",
        },
        {
          key: "ingliz-tili",
          title: "Filologiya (ingliz tili)",
          icon: "language",
          duration: "4 yil",
          credits: "240 kredit",
          semester: "Kuzgi semestr",
          price: "15,000,000 sO‘m/yil",
          faculty: "gumanitar",
          type: "kunduzgi",
          link: "/direction/ingliz-tili",
        },
      ]
    };
  },
  computed: {
    filteredDirections() {
      return this.directions.filter((d) => {
        const facultyMatch = this.selectedFaculty === "all" || d.faculty === this.selectedFaculty;
        const typeMatch = this.selectedType === "all" || d.type === this.selectedType;
        return facultyMatch && typeMatch;
      });
    },
  },
  watch: {
    // '$route.query.faculty': {
    //   immediate: true,
    //   handler(newFaculty) {
    //     if (newFaculty) this.selectedFaculty = newFaculty;
    //   },
    // },
    selectedFaculty(newVal) {
      this.updateQueryParams();
    },
    selectedType(newVal) {
      this.updateQueryParams();
    },
  },
  created() {
    // Sahifa yuklanganda query asosida selectlarni tO‘g'rilab qO‘yamiz
    const { faculty, type } = this.$route.query;
    if (faculty) this.selectedFaculty = faculty;
    if (type) this.selectedType = type;
  },
  methods: {
    updateQueryParams() {
      this.$router.replace({
        path: this.$route.path,
        query: {
          faculty: this.selectedFaculty !== "all" ? this.selectedFaculty : undefined,
          type: this.selectedType !== "all" ? this.selectedType : undefined,
        },
      });
    },
  },
};
</script>

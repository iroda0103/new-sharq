<template>
  <section class="faculties-page">
    <div class="">
      <!-- <h2 class="documents__title page-title">Fakultetlar</h2> -->
      <!-- <p class="documents__subtitle page-subtitle">Bizda mavjud bo'lgan fakultetlar ro'yxati bilan tanishing</p> -->
      
      <div class="faculties-grid">
        <div
          v-for="(faculty, index) in faculties"
          :key="index"
          class="faculty-card-wrapper"
        >
          <h3 class="faculty-section-title">{{ faculty.name }}</h3>
          
          <div class="directions-row">
            <div
              v-for="(direction, dIndex) in faculty.directions"
              :key="dIndex"
              class="direction-item"
            >
                <router-link :to="direction.link" class="graduate-card">
                <div class="graduate-card__image">
                  <div class="graduate-card__image__wrapper">
                    <img :src="direction.image" :alt="direction.title" />
                  </div>
                </div>
                <div class="graduate-card__info">
                  <h4 class="graduate-card__title">{{ direction.title }}</h4>
                  <div class="graduate-card__divider"></div>
                  <span class="graduate-card__btn">
                    Batafsil <i class="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </router-link>
            </div>
          </div>
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
          directions: [
            {
              title: "Sun'iy intellekt",
              link: "/directions?faculty=texnika",
              image: "/img/faculty/si.png"
            },
            {
              title: "Kiberxavfsizlik injiniringi",
              link: "/directions?faculty=texnika",
              image: "/img/faculty/kiber.png"
            },
            {
              title: "Dasturiy injiniring",
              link: "/directions?faculty=texnika",
              image: "/img/faculty/engineering.png"
            }
          ]
        },
        {
          name: "Iqtisod va biznes fakulteti",
          key: "iqtisod",
          directions: [
            {
              title: "Iqtisodiyot",
              link: "/directions?faculty=iqtisod",
              image: "/img/faculty/iqtisodiyot.png"
            },
            {
              title: "Biznesni boshqarish",
              link: "/directions?faculty=iqtisod",
              image: "/img/faculty/biznes.png"
            }
          ]
        },
        {
          name: "Gumanitar fanlar fakulteti",
          key: "gumanitar",
          directions: [
            {
              title: "Tarix",
              link: "/directions?faculty=gumanitar",
              image: "/img/faculty/tarix.png"
            },
            {
              title: "Psixologiya",
              link: "/directions?faculty=gumanitar",
              image: "/img/faculty/filologiya.png"
            },
            {
              title: "Filologiya (ingliz tili)",
              link: "/directions?faculty=gumanitar",
              image: "/img/faculty/english.png"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.faculties-page {
//   padding: 80px 0;
  
  .documents__title {
    text-align: center;
  }
  
  .documents__subtitle {
    text-align: center;
    max-width: 600px;
    margin: 0 auto 40px;
  }
  
  @media (max-width: 600px) {
    padding: 30px 0;
  }
}

.faculties-grid {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.faculty-card-wrapper {
  background: #fff;
  padding: 15px;
  border-radius: 12px;
}

.faculty-section-title {
  font-size: 24px;
  font-weight: 700;
  color: #162347;
  margin-bottom: 25px;
  text-align: center;
}

.directions-row {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.direction-item {
  width: 100%;
}

.graduate-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 12px;
  border: 1px solid rgba(223, 228, 237, 1);
  background: rgba(239, 243, 249, 1);
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
}

.graduate-card__image {
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 10px;
    background-color: rgba(20, 87, 149, 1);
  }
}

.graduate-card__image__wrapper {
  position: relative;
  width: 100%;
  height: 200px;
  
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 33.3333%;
    background-color: rgba(82, 148, 229, 1);
    height: 10px;
    bottom: 0;
    z-index: 3;
  }
  
  &::before {
    left: 0;
  }
  
  &::after {
    right: 0;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
  }
}

.graduate-card__info {
  flex: 1;
  padding: 10px 14px 14px 14px;
  display: flex;
  flex-direction: column;
}

.graduate-card__title {
  color: rgba(22, 35, 71, 1);
  font-size: 18px;
  line-height: 140%;
  letter-spacing: -0.2px;
  margin-bottom: auto;
  font-weight: 600;
//   min-height: 60px;
}

.graduate-card__divider {
  margin: 14px 0;
  border-top: 1px solid rgba(190, 202, 221, 1);
}

.graduate-card__btn {
  display: flex;
  align-items: center;
  color: rgba(20, 87, 149, 1);
  font-size: 15px;
  line-height: 140%;
  letter-spacing: -0.16px;
  gap: 4px;
  
  i {
    transition: transform 0.3s;
  }
  
  &:hover i {
    transform: translateX(4px);
  }
}
</style>
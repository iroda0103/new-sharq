<template>
  <div class="row flex">
    <div
      v-for="(leader, index) in leaders"
      :key="index"
      class="col-12 col-xl-6"
    >
      <div class="leadership active">
        <div class="leadership-image">
          <div class="leadership-image__inner">
            <img :src="leader.image" :alt="leader.name">
          </div>
        </div>

        <div class="leadership-info__wrapper">
          <div class="leadership-info">
            <h3 class="leadership-info__fio">
              {{ leader.name }}
            </h3>

            <div class="leadership-info__divider"></div>

            <p class="leadership-info__text">
              {{ leader.position }}
            </p>

            <div class="leadership-info__bottom">
              <div class="leadership-info__links">

                <a
                  v-if="leader.email"
                  :href="`mailto:${leader.email}`"
                  class="leadership-info__link"
                >
                  <i class="icon-email"></i>
                  {{ leader.email }}
                </a>

                <a
                  v-if="leader.phone"
                  :href="`tel:${leader.phone}`"
                  class="leadership-info__link"
                >
                  <i class="icon-phone"></i>
                  
                  {{ leader.phone }}
                </a>

                <p
                  v-if="leader.reception"
                  class="leadership-info__link"
                >
                  <i class="icon-phone"></i>
                  <strong>Qabul vaqtlari:</strong>
                  {{ leader.reception }}
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LeadershipList',

  data() {
    return {
      leaders: [
        {
          name: 'PhD. Sherzod Atamurodov',
          position: 'Sharq universiteti rektori',
          image: '/img/person/sherzod_atamuradov.JPG',
          email: 'atamuradov@sharqedu.uz',
          phone: '+998 (79) 222-77-07',
          reception: 'Du–Ju, 09:00–17:00'
        },
        {
          name: 'Qodirov Bektosh',
          position: "Akademik faoliyat boshqarmasi boshlig‘i",
          image: '/img/person/bektosh.jpg',
          email: 'info@sharqedu.uz',
          phone: '+998 (79) 222-07-00',
          reception: 'Du–Ju, 09:00–17:00'
        },
         {
          name: 'Habibullayev Qahramon',
          position: "Nazorat va sifat monitoringi bo‘limi boshlig‘i",
          image: '/img/person/qahramon.jpg',
          email: 'markett22@mail.ru',
          phone: '+998 (79) 222-07-00',
          reception: 'Du–Ju, 09:00–17:00'
        }
      ]
    }
  }
}
</script>

<style scoped>
.row {
    display: flex;
    flex-wrap: wrap;
}

.leadership.active {
    --local-border-color: transparent;
    --local-bg: var(--program-2);
    --local-color: var(--white-1);
    --local-text-color: rgba(var(--c-white-1), 0.6);
    --local-link-bg: rgba(var(--c-white-1), 0.05);
    --local-link-border: rgba(var(--c-white-1), 0.15);
    --local-btn-bg: var(--blue-4);
    --local-btn-color: var(--white-1);
}

.leadership-info {
    background: linear-gradient(180deg, #3E7CB5 0%, #125EA4 100%);
    /* linear-gradient(180deg, #3E7CB5 0%, #125EA4 100%); */
    display: flex;
    flex-direction: column;
    padding: 16px;
    border: 1px solid rgba(239, 243, 249, 1);
    border-radius: 12px;
    height: 100%;
    position: relative;
}

.leadership-info::after {
    content: "";
    position: absolute;
    top: var(--space-16);
    right: var(--space-16);
    width: 80px;
    height: 100%;
    background-image: url('/img/bg/leader-bg.png');
    background-size: 100% auto;
    background-position: center top;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 0.1;
}

.leadership-info__divider {
    max-width: 120px;
    width: 100%;
    height: 2px;
    background-color: var(--blue-4);
    margin: 12px 0;
}

.leadership-info__text {
    color: var(--local-text-color, var(--black-3));
    font-size: var(--size-text-16);
    line-height: 140%;
    letter-spacing: -0.16px;
    margin-bottom: auto;
}

.leadership-info__fio {
    color: #FFF;
    font-size: 24px;
    line-height: 140%;
    letter-spacing: -0.24px;
    font-weight: 600;
}

.leadership-info__bottom {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 6px;
}

.leadership-info__links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 450px;
    align-items: flex-start;
}

.leadership-detail .leadership-info,
.active .leadership-info {
    position: relative;
    z-index: 1;
    overflow: hidden;
}

.leadership-info__link {
    padding: 6px 8px;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 16px;
    line-height: 138%;
    letter-spacing: -0.16px;
    gap: 6px;
    border-radius: 8px;
    border: 1px solid rgb(248 250 253 / 22%);
    ;
    background: rgb(248 250 253 / 22%);
    ;
}

.leadership-image {
    width: 100%;
    max-width: 207px;
    height: 100%;
    margin: 0 auto;
}

.leadership-image__inner {
    aspect-ratio: 0.89;
    position: sticky;
    top: 176px;
}

.leadership-image__inner img {
    width: 100%;
    height: 100%;
    /* object-position: right; */
    object-fit: cover;
    border-radius: 12px;
}
.row{
    display: flex;
}
</style>
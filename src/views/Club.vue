<template>
  <div class="club">
    <h1 class="page-title">Klublar</h1>

    <div class="row">
      <div class="col campus-col" v-for="(item, index) in items" :key="index">
        <a :href="item.link" class="campus-el">
          <div class="campus-el__top">
            <h4 class="campus-el__title">{{ item.title }}</h4>

            <div class="campus-el__image">
              <i :class="item.icon" style="font-size: 20px; color: #2a407a;"></i>
            </div>
          </div>

          <div class="campus-el__divider"></div>

          <span class="campus-el__btn">See gallery <i class="icon-arrow-right"></i></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Sport klubi",
          icon: "fas fa-football-ball",
          link: "#",
        },
        {
          title: "Zakovat klubi",
          icon: "fas fa-brain",
          link: "#",
        },
        {
          title: "QV sport guruhi",
          icon: "fas fa-running",
          link: "#",
        },
        {
          title: "Teatr klubi",
          icon: "fas fa-theater-masks",
          link: "#",
        },
        {
          title: "Kitobxonlar klubi",
          icon: "fas fa-book-open",
          link: "#",
        },
        {
          title: "Kibersport klubi",
          icon: "fas fa-gamepad",
          link: "#",
        },
        {
          title: "Media klubi",
          icon: "fas fa-video",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style>
.row {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.campus-el {
  border-radius: 12px;
  border: 1px solid rgba(234, 238, 245, 1);
  background: var(--white-1);
  box-shadow: 0px 2px 20px 0px rgba(22, 35, 71, 0.05);
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  /* max-width: 400px; */
  flex-grow: 1;
  min-width: 200px;
}

.campus-el__top {
  display: flex;
  align-items: center;
  margin-bottom: auto;
}

.campus-el__image {
  flex: 0 0 44px;
  max-width: 44px;
  height: 44px;
  border-radius: 8px;
  border: 1px solid var(--black-7);
  background: var(--black-9);
  padding: 6px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.campus-el__title {
  color: var(--black-1);
  font-weight: 600;
  font-size: 15px;
  line-height: 140%;
  letter-spacing: -0.16px;
  margin-right: 4px;
}

.campus-el__divider {
  border-top: 1px solid var(--black-8);
  margin: 12px 0;
}

.campus-el__btn {
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 4px;
  color: rgb(42, 64, 122);
}
.campus-el__image img {
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: contain;
}


</style>

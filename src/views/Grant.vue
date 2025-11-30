
<template>
  <section class="grants-section">
    <div class="">
      <h1 class="page-title">Grant va Chegirma Dasturlari</h1>

      <!-- <div class="section-subtitle">Grant Dasturlari va Chegirma Dasturlari</div> -->
      <div class="cards-grid">
        <div class="card" v-for="item in grants" :key="item.title">
          <div class="icon-wrapper">
            <i :class="item.icon"></i>
          </div>
          <h2>{{ item.title }}</h2>
          <p class="highlight">{{ item.percent }}</p>
        </div>
      </div>

      <div class="section-subtitle">Chegirma Dasturlari</div>
      <div class="cards-grid">
        <div class="card" v-for="item in discounts" :key="item.title">
          <div class="icon-wrapper">
            <i :class="item.icon"></i>
          </div>
          <h2>{{ item.title }}</h2>
          <p class="highlight">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GrantDiscountsPage",
  data() {
    return {
      grants: [
        { icon: "fas fa-medal", title: "Oltin medal sohiblari", percent: "100% grant" },
        { icon: "fas fa-book-open", title: "Fan olimpiadasi g'oliblari", percent: "100% grant" },
        { icon: "fas fa-brain", title: "Zakovat g'oliblari", percent: "100% grant" },
        { icon: "fas fa-language", title: "IELTS 6.5", percent: "25% grant" },
        { icon: "fas fa-language", title: "IELTS 7.0", percent: "50% grant" },
        { icon: "fas fa-language", title: "IELTS 7.5+", percent: "100% grant" },
      ],
      discounts: [
        { icon: "fas fa-female", title: "Ijtimoiy reyestrdagi xotin-qizlar", description: "10% chegirma" },
        { icon: "fas fa-users", title: "Sinf­dosh dasturi", description: "5% (50% gacha)" },
        { icon: "fas fa-home", title: "Oila dasturi", description: "Har biriga 10% chegirma" },
        { icon: "fas fa-exchange-alt", title: "OTMdan ko'chirilgan talabalar", description: "10% chegirma" },
        { icon: "fas fa-calendar-day", title: "15-avgustgacha 100% to'lov", description: "1 million so'm chegirma" },
        { icon: "fas fa-graduation-cap", title: "Yuqori baholarga", description: "Stipendiya dasturi" },
      ]
    };
  }
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');


.container {
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  /* background-color: #f5f9ff; */
}

.section-title {
  text-align: center;
  /* font-size: 2rem;
  font-weight: 700;
  color: #002855;
  margin-bottom: 2rem;
  text-transform: uppercase; */
  margin-top: 20px;
}

.section-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f3b73;
  margin: 2rem 0 1rem;
  border-left: 5px solid #2563eb;
  padding-left: 10px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-bottom: 40px;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  /* border-top: 4p x solid #2563eb; */
  transition: all 0.3s ease-in-out;
  position: relative;
}

.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #00bafc, #0062ff);
  border-radius: 12px 12px 0 0;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.icon-wrapper {
  font-size: 2.2rem;
  color: #2563eb;
  margin-bottom: 0.8rem;
}

.card h2 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.card .highlight {
  font-size: 1rem;
  color: #334155;
  font-weight: 500;
}
</style> 
<template>
<<<<<<< HEAD
    <section class="recent-news-section">
        <div class="container">
            <h2 class="faq-title">So'nggi yangiliklar</h2>

            <div class="news-list">
                <div v-for="(news, index) in newsList" :key="index" class="news-card">
                    <img loading="lazy":src="'/img/blog/' + news.image" alt="News image" class="news-image" />
                    <div class="news-content">
                        <h3 class="news-title">{{ news.title }}</h3>
                        <!-- <p class="news-description">{{ news.description }}</p> -->
                        <div class="recent-content-writer">
                            <img loading="lazy" :src="'/img/person/' + news.writer_image" class="content-writer">
                            <div class="post-meta">
                                <p class="post-author">Asilbek G'ofurov</p>
                                <p class="post-date">
                                    <time datetime="2022-01-01">14-iyun, 2025</time>
                                </p>
                            </div>
                        </div>
                        <!-- <a :href="news.link" class="read-more">Batafsil</a> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "RecentNews",
    data() {
        return {
            newsList: [
                {
                    title: "🏛️ Zamonaviy auditoriyalar – multimedia vositalari bilan jihozlangan, qulay va interaktiv darslar uchun mos.",
                    description: "Yangi o'quv yiliga tayyorgarlik ko‘rish ishlari boshlangan bo‘lib, infratuzilma yaxshilanishi kutilmoqda.",
                    image: "auditoriya.webp",
                    writer_image: "asilbek.webp",
                    link: "/news/1"
                },
                {
                    title: "⚽ Futbol maydoni – sog‘lom turmush tarzi va sport musobaqalari uchun qulay infratuzilma.",
                    description: "Seminarda xorijiy universitet vakillari ishtirok etib, ta'limdagi yondashuvlar muhokama qilindi.",
                    image: "futbol.webp",
                    writer_image: "murod.webp",
                    link: "/news/2"
                },
                {
                    title: "📚 Kitoblarni sevuvchilar uchun – zamonaviy, keng kutubxona har doim ochiq.",
                    description: "O‘qituvchilar tomonidan tayyorlangan maqolalar nufuzli jurnallarda chop etildi.",
                    image: "kutubxona.webp",
                    writer_image: "nozanin.webp",
                    link: "/news/3"
                }
            ]
        };
    }
};
</script>

<style scoped>
.recent-content-writer {
    display: flex;
    align-items: center;
}

.recent-content-writer {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    gap: 10px;
}

.content-writer {
    width: 50px;
    border-radius: 50%;
}

.author-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #ddd;
}

.post-meta {
    display: flex;
    flex-direction: column;
}

.post-author {
    margin: 0;
    font-weight: bold;
    color: #333;
    font-size: 14px;
}

.post-date {
    margin: 0;
    font-size: 13px;
    color: #777;
}

.recent-news-section {
    padding: 50px 0;
    background-color: #f9f9f9;
}

.container {
    max-width: 1200px;
    margin: auto;
    padding: 0 15px;
}

.section-title {
    text-align: center;
    font-size: 32px;
    margin-bottom: 40px;
    color: #333;
}

.news-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    margin-top: 30px;
}

.news-card {
    background-color: #fff;
    border-radius: 10px;
    width: calc(33.333% - 20px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;
}

.news-card:hover {
    transform: translateY(-5px);
}

.news-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.news-content {
    padding: 20px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.news-title {
    font-size: 20px;
    margin-bottom: 10px;
    color: #222;
}

.news-description {
    font-size: 14px;
    color: #555;
    margin-bottom: 15px;
}

.read-more {
    align-self: flex-start;
    font-weight: bold;
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s;
}

.read-more:hover {
    color: #0056b3;
=======
  <section class="recent-news-section">
    <div class="container">
      <h2 class="faq-title">So'nggi yangiliklar</h2>

      <div class="news-list">
        <div v-for="(news, index) in newsList" :key="index" class="news-card">
          <img loading="lazy" :src="'http://localhost:3000/uploads/' + news.imageUrl" alt="News image"
            class="news-image" />
            
          <div class="news-content">
            <h3 class="news-title">{{ news.title }}</h3>
            <div class="recent-content-writer">
              <img v-if="news.author?.img" loading="lazy" :src="'http://localhost:3000/uploads/' + news.author?.img" class="content-writer" />
              <img v-else loading="lazy" src="/img/person/not_found_user.avif" class="content-writer">
              <div class="post-meta">
                <p class="post-author">{{ news.author?.name }}</p>
                <p class="post-date">
                  <time :datetime="news.date">{{ news.date }}</time>
                  <time datetime="news.date">14-iyun, 2025</time>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>  
</template>

<script>
import axios from "axios";

export default {
  name: "RecentNews",
  data() {
    return {
      newsList: [],
    };
  },
  methods: {
    async getData() {
      try {
        const res = await axios.get("http://localhost:3000/api/posts");
        console.log("TEST", res.data.data)
        this.newsList = res.data.data;
      } catch (err) {
        console.error("Xatolik:", err);
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>


<style scoped>
.recent-content-writer {
  display: flex;
  align-items: center;
}

.recent-content-writer {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  gap: 10px;
}

.content-writer {
  width: 50px;
  border-radius: 50%;
}

.author-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ddd;
}

.post-meta {
  display: flex;
  flex-direction: column;
}

.post-author {
  margin: 0;
  font-weight: bold;
  color: #333;
  font-size: 14px;
}

.post-date {
  margin: 0;
  font-size: 13px;
  color: #777;
}

.recent-news-section {
  padding: 50px 0;
  background-color: #f9f9f9;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 15px;
}

.section-title {
  text-align: center;
  font-size: 32px;
  margin-bottom: 40px;
  color: #333;
}

.news-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin-top: 30px;
}

.news-card {
  background-color: #fff;
  border-radius: 10px;
  width: calc(33.333% - 20px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.news-card:hover {
  transform: translateY(-5px);
}

.news-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.news-content {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.news-title {
  font-size: 20px;
  margin-bottom: 10px;
  color: #222;
}

.news-description {
  font-size: 14px;
  color: #555;
  margin-bottom: 15px;
}

.read-more {
  align-self: flex-start;
  font-weight: bold;
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s;
}

.read-more:hover {
  color: #0056b3;
>>>>>>> dad943b (update)
}

/* Responsive */
@media (max-width: 992px) {
<<<<<<< HEAD
    .news-card {
        width: calc(50% - 20px);
    }
}

@media (max-width: 600px) {
    .news-card {
        width: 100%;
    }
}
</style>
=======
  .news-card {
    width: calc(50% - 20px);
  }
}

@media (max-width: 600px) {
  .news-card {
    width: 100%;
  }
}
</style>
>>>>>>> dad943b (update)

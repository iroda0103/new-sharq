
<!-- NewsCard.vue - Yangilik kartochkasi -->
<template>
    <article class="news-card" :class="{ featured }">
        <router-link :to="`/news/${news.id}`" class="news-link">
            <div class="news-image">
                <img :src="news.image" :alt="news.title" loading="lazy" />
            </div>
            <div class="news-content">
                <h3 class="news-title">{{ news.title }}</h3>
                <div class="news-meta">
                    <span class="news-date">
                        <i class="far fa-calendar"></i>
                        {{ formatDate(news.date) }}
                    </span>
                    <span class="news-views">
                        <i class="far fa-eye"></i>
                        {{ news.views }}
                    </span>
                </div>
            </div>
        </router-link>
    </article>
</template>

<script setup>
defineProps({
    news: { type: Object, required: true },
    featured: { type: Boolean, default: false }
})

const formatDate = (date) => {
    const d = new Date(date)
    return d.toLocaleDateString('en-US', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    })
}
</script>

<style scoped lang="scss">
.news-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.3s;
    height: 100%;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }

    &.featured {
        .news-image {
            height: 180px;
        }

        .news-title {
            font-size: 20px;
        }
    }
}

.news-link {
    display: block;
    text-decoration: none;
    color: inherit;
    height: 100%;
}

.news-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
    background: #e8eef5;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s;
    }

    .news-card:hover & img {
        transform: scale(1.05);
    }
}

.news-content {
    padding: 16px;
}

.news-title {
    font-size: 15px;
    font-weight: 600;
    color: #1a1a1a;
    line-height: 1.4;
    margin: 0 0 12px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.news-meta {
    display: flex;
    gap: 16px;
    font-size: 13px;
    color: #666;

    span {
        display: flex;
        align-items: center;
        gap: 6px;

        i {
            color: #0066cc;
        }
    }
}

@media (max-width: 768px) {
    .news-card.featured {
        .news-image {
            height: 220px;
        }

        .news-title {
            font-size: 16px;
        }
    }

    .news-content {
        padding: 12px;
    }

    .news-title {
        font-size: 14px;
    }

    .news-meta {
        font-size: 12px;
    }
}
</style>
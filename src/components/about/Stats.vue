<template>
    <div class="stats-card" data-aos="zoom-out" :data-aos-delay="delay">
        <div class="stats-header">
            <h3>{{ title }}</h3>
            <div class="decoration-line"></div>
        </div>

        <div class="stats-grid">
            <div v-for="(item, index) in stats" :key="index" class="stat-item">
                <div class="stat-icon">
                    <!-- <i :class="item.icon"></i> -->
                    <font-awesome-icon :icon="['fas', item.icon]" />
                </div>
                <div class="stat-content">
                    <h4>{{ item.value }}</h4>
                    <p>{{ item.label }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Stats",
    props: {
        title: {
            type: String,
            default: "Why Choose Us"
        },
        stats: {
            type: Array,
            required: true,
            // format: [{ icon: "bi bi-trophy-fill", value: "98%", label: "Graduate Employment" }]
        },
        delay: {
            type: [Number, String],
            default: 200
        }
    }
};
</script>

<style scoped>
.stats-card {
    background-color: color-mix(in srgb, var(--surface-color), transparent 95%);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    position: absolute;
    right: 50px;
    width: 40%;
    max-width: 600px;
}

.stats-header {
    text-align: center;
    margin-bottom: 25px;
}

.stats-header h3 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 15px;
}

.decoration-line {
    height: 3px;
    width: 70px;
    background-color: var(--accent-color);
    margin: 0 auto;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
}

.stat-item {
    display: flex;
    align-items: center;
}

.stat-icon {
    font-size: 1.8rem;
    height: 55px;
    width: 55px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--contrast-color);
    background-color: rgba(38, 83, 180, 0.856);
    margin-right: 12px;
    flex-shrink: 0;
}

.stat-content h4 {
    font-size: 1.6rem;
    font-weight: 800;
    margin: 0;
    line-height: 1;
}

.stat-content p {
    opacity: 0.8;
    margin: 5px 0 0 0;
    font-size: 0.9rem;
}

@media (max-width: 576px) {
    .stats-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
}
</style>

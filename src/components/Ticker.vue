<template>
    <!-- START Ticker Section -->
    <section class="ticker">
        <div class="ticker__container">
            <div class="ticker__grid">
                <div class="ticker__item">
                    <span class="ticker__date">Har kuni</span>
                    <span class="ticker__title">Ochiq eshiklar kuni</span>
                    <a href="https://t.me/sharq_qabul" class="ticker__button">Ro'yxatdan o'tish</a>
                </div>
                <div class="ticker__item">
                    <span class="ticker__date">30-sentyabrgacha</span>
                    <span class="ticker__title">Qabul-2025</span>
                    <a href="https://qabul.sharqedu.uz/" class="ticker__button">Ariza topshirish</a>
                </div>
             
            </div>
        </div>
        <!-- <img src="../../public/img/giphy.gif" /> -->
        <!-- <img src="../../public/img/camel2.png" height="200px" /> -->
    </section>
    <!-- END Ticker Section -->
</template>
<style>
/* Event Ticker */
.ticker {
    background: var(--gradient);
    /* background-image: url('../../public/img/headers1.png');
    background-size: cover;
    background-position: center; */
    padding: 1rem;
    padding: 1.5rem 0;
    color: var(--white);
    overflow-x: hidden;
}

.ticker__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

.ticker__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;

}

.ticker__item {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 1rem;
    border-radius: 12px;
    flex-wrap: wrap;
}

.ticker__date {
    background: rgba(255, 255, 255, 0.2);
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    white-space: nowrap;
}

.ticker__title {
    flex: 1 1 auto;
    font-weight: 500;
    font-size: 1rem;
}

.ticker__button {
    background: var(--white);
    color: var(--primary-color);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 600;
    transition: var(--transition);
    white-space: nowrap;
}

.ticker__button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Responsive tweaks */
@media (max-width: 768px) {
    .ticker__item {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
        text-align: left;
    }

    .ticker__title {
        font-size: 0.95rem;
    }

    .ticker__button {
        width: 100%;
        text-align: center;
    }
}

@media (max-width: 480px) {
    .ticker__grid {
        grid-template-columns: 1fr;
    }

    .ticker__title {
        font-size: 0.9rem;
    }
}
</style>
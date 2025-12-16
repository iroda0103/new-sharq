<template>
    <div class="row flex">
        <div class="col-12 col-xl-6">
            <div class="leadership active">
                <div class="leadership-image">
                    <div class="leadership-image__inner">
                        <img src="/img/person/rector.jpg" alt="Dr. Hilola Umarova Uktamovna">
                    </div>
                </div>
                <div class="leadership-info__wrapper">
                    <div class="leadership-info">
                        <h3 class="leadership-info__fio">PhD. Sherzod Atamurodov</h3>
                        <div class="leadership-info__divider"></div>
                        <p class="leadership-info__text">
                            Sharq universiteti rektori

                        </p>
                        <div class="leadership-info__bottom">
                            <div class="leadership-info__links">
                                <a href="mailto:info@uzedu.uz" class="leadership-info__link">
                                    <i class="icon-email"></i>

                                    info@sharqedu.uz
                                </a>
                                <a href="tel:+" class="leadership-info__link">
                                    <i class="icon-phone"></i>
                                    +998 (79) 222-77-07 </a>
                                <p class="leadership-info__link">
                                    <i class="icon-phone"></i>
                                    <strong>Qabul vaqtlari:</strong> Du–Ju, 09:00–17:00
                                </p>
                            </div>
                            <!-- <a href="https://newuu.uz/en/leadership/dr-hilola-umarova-uktamovna">
                                <button class="leadership-info__btn">
                                    See more <i class="icon-ar flex-right"></i>
                                </button>
                            </a> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div class="col-12 col-xl-6">
            <div class="leadership active">
                <div class="leadership-image">
                    <div class="leadership-image__inner">
                        <img src="/img/person/bektosh_qodirov.webp" alt="Dr. Hilola Umarova Uktamovna">
                    </div>
                </div>
                <div class="leadership-info__wrapper">
                    <div class="leadership-info">
                        <h3 class="leadership-info__fio">Qodirov Bektosh</h3>
                        <div class="leadership-info__divider"></div>
                        <p class="leadership-info__text">
                            Akademik faoliyat boshqarmasi boshlig'i

                        </p>
                        <div class="leadership-info__bottom">
                            <div class="leadership-info__links">
                                <a href="mailto:info@uzedu.uz" class="leadership-info__link">
                                    <i class="icon-email"></i>

                                    info@sharqedu.uz
                                </a>
                                <a href="tel:+" class="leadership-info__link">
                                    <i class="icon-phone"></i>
                                    +998 (79) 222-77-07 </a>
                                <p class="leadership-info__link">
                                    <i class="icon-phone"></i>
                                    <strong>Qabul vaqtlari:</strong> Du–Ju, 09:00–17:00
                                </p>
                            </div>
                            <!-- <a href="https://newuu.uz/en/leadership/dr-hilola-umarova-uktamovna">
                                <button class="leadership-info__btn">
                                    See more <i class="icon-arrow-right"></i>
                                </button>
                            </a> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
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
    object-position: center;
    object-fit: cover;
    border-radius: 12px;
}
.row{
    display: flex;
}
</style>
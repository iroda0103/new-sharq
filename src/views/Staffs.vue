<template>
    <div class="deparment-person">
        <div class="col-12 col-xl-6">
            <div class="staff ">
                <div class="staff-image">
                    <div class="staff-image__inner">
                        <img src="/img/person/usmon.jpg" alt="Turgunova Komola Baxriddinovna" loading="lazy">
                    </div>
                </div>
                <div class="staff-info__wrapper">
                    <div class="staff-info">
                        <h3 class="staff-info__fio">Turgunova Komola Baxriddinovna</h3>
                        <div class="staff-info__divider"></div>
                        <p class="staff-info__text">
                            Chief Specialist </p>
                        <div class="staff-info__bottom">
                            <div class="staff-info__links">
                                <a href="mailto:k.turgunova@newuu.uz" class="staff-info__link">
                                    <i class="icon-email"></i>
                                    k.turgunova@newuu.uz </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-xl-6">
            <div class="staff ">
                <div class="staff-image">
                    <div class="staff-image__inner">
                        <img src="/img/person/usmon.jpg" alt="Turgunova Komola Baxriddinovna" loading="lazy">
                    </div>
                </div>
                <div class="staff-info__wrapper">
                    <div class="staff-info">
                        <h3 class="staff-info__fio">Turgunova Komola Baxriddinovna</h3>
                        <div class="staff-info__divider"></div>
                        <p class="staff-info__text">
                            Chief Specialist </p>
                        <div class="staff-info__bottom">
                            <div class="staff-info__links">
                                <a href="mailto:k.turgunova@newuu.uz" class="staff-info__link">
                                    <i class="icon-email"></i>
                                    k.turgunova@newuu.uz </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-xl-6">
            <div class="staff ">
                <div class="staff-image">
                    <div class="staff-image__inner">
                        <img src="/img/person/usmon.jpg" alt="Turgunova Komola Baxriddinovna" loading="lazy">
                    </div>
                </div>
                <div class="staff-info__wrapper">
                    <div class="staff-info">
                        <h3 class="staff-info__fio">Turgunova Komola Baxriddinovna</h3>
                        <div class="staff-info__divider"></div>
                        <p class="staff-info__text">
                            Chief Specialist </p>
                        <div class="staff-info__bottom">
                            <div class="staff-info__links">
                                <a href="mailto:k.turgunova@newuu.uz" class="staff-info__link">
                                    <i class="icon-email"></i>
                                    k.turgunova@newuu.uz </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.deparment-person {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-.5 * var(--bs-gutter-x));
    margin-left: calc(-.5 * var(--bs-gutter-x));
}

.staff {
    display: flex;
    max-width: 400px;
    flex-grow: 1;
    justify-content: space-between;

    /* height: 100%; */
}

.staff-info__wrapper {
        width: calc(100% - 160px - 8px);
        width: 100%;
    
}
.staff-info {
  background: var(--local-bg, var(--white-1));
  display: flex;
  flex-direction: column;
  padding: 14px;
  border: 1px solid var(--local-border-color, var(--black-9));
  border-radius: 12px;
  height: 100%;
  position: relative;
}
.staff-info__fio {
  color: var(--local-color, var(--black-1));
  font-family: "MuseoSansCyrl-700", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.24px;
}
.staff-info__text {
  color: var(--local-text-color, var(--black-3));
  font-family: "MuseoSansCyrl-500", sans-serif;
  font-size: var(--size-text-16);
  line-height: 140%;
  letter-spacing: -0.16px;
  margin-bottom: auto;
}
.staff-info__divider {
  max-width: 120px;
  width: 100%;
  height: 2px;
  background-color: var(--blue-4);
  margin: 12px 0;
}
.staff-info__bottom {
  margin-top: var(--space-16);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 16px;
}
.staff-info__links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.staff-info__link {
  padding: 6px 8px;
  display: flex;
  align-items: center;
  color: var(--local-color, var(--black-1));
  font-family: "MuseoSansCyrl-300", sans-serif;
  font-size: 15px;
  line-height: 138%;
  letter-spacing: -0.16px;
  gap: 6px;
  border-radius: 8px;
  border: 1px solid var(--local-link-border, var(--black-7));
  background: rgba(223, 228, 237, 1);
}

/* 
.staff-image {
    width: 100%;
    max-width: 160px;
    margin: 0 auto;
} */
</style>
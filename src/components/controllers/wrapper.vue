<template>
    <div class="wrapper"> <div class=" container">
        <div class="page-row">
            <div class="main-section page-row__col">
                <div class="leadership">
                    <div class="leadersheap-image">
                        <div class="leadership-image__inner"> <img src="/img/person/sherzod_atamuradov.webp" alt="">
                        </div>

                    </div>

                    <div class="leadership-info__wrapper">
                        <div class="leadership-info">
                            <h3 class="leadership-info__fio">PhD. Sherzod Atamurodov</h3>
                            <div class="leadership-info__divider"></div>
                            <p class="leadership-info__text">
                                Sharq universiteti rektori </p>
                            <div class="leadership-info__bottom">
                                <div class="leadership-info__links">
                                    <a href="mailto:info@uzedu.uz" class="leadership-info__link">
                                       <i class="fa-regular fa-envelope"></i>
                                        info@uzedu.uz </a>
                                    <a href="tel:+998712410115" class="leadership-info__link">
                                        <i class="fa-solid fa-phone"></i>
                                        +998 (71) 241-01-15 </a>
                                </div>
                                <div class="leadership-info__social">
                                    <a href="https://instagram.com" class="icon-instagram" rel="nofollow"
                                        target="_blank"><i class="fa-brands fa-instagram"></i></a>
                                    <a href="https://t.me" class="icon-telegram" rel="nofollow" target="_blank"><i
                                            class="fa-brands fa-telegram"></i></a>
                                    <a href="https://facebook.com" class="icon-facebook" rel="nofollow"
                                        target="_blank"><i class="fa-brands fa-facebook"></i></a>
                                    <a href="https://youtube.com" class="icon-youtube" rel="nofollow" target="_blank"><i
                                            class="fa-brands fa-youtube"></i></a>
                                </div>

                            </div>
                        </div>
                        <div class="page-block">
                            <h3 class="page-block__subtitle">
                                Tarjimai hol </h3>
                            <div class="page-block__divider"></div>
                            <div class="content">
                                <p><span>Umarova Khilola Uktamovna was born in 1988 in Weimer in Germany. She graduated
                                        from the University of World Economy and Diplomacy in Tashkent with a major in
                                        International economic relations. Khilola Umarova is a researcher at the Academy
                                        of Public Administration under the President of the Republic of Uzbekistan. She
                                        is fluent in Uzbek, Russian and English. Khilola Umarova is married and has one
                                        child.</span></p>
                            </div>
                        </div>
                        <div class="page-block">
                            <h3 class="page-block__subtitle">
                                Experience </h3>
                            <div class="page-block__divider"></div>
                            <div class="content">
                                <ul>
                                    <li>2019 - 2019 — Chief Manager on the affairs of supporting active
                                        entrepreneurship, innovative ideas and technologies at Inha University in
                                        Tashkent.</li>
                                    <li>2019 - 2020 — Director of the specialized school named after Muhammad
                                        al-Khorazmi, specializing in advanced education in information and communication
                                        technologies.</li>
                                    <li>2020 - 2022 — Director of the Agency for Presidential Educational Institutions
                                        of the Republic of Uzbekistan</li>
                                    <li>2022-2025 – Minister of Preschool and School Education.</li>
                                    <li>2025 – Deputy Head of the Presidential Administration for Education Reform.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <aside class="page-row__col">
                <div class="aside">
                    <div class="sidebar">
                        <h3 class="sidebar-title">Rahbariyat</h3>
                        <ul class="sidebar-menu-list">
                            <li class="sidebar-menu__item"><a href="" class="sidebar-menu__link">Rector</a></li>
                            <li class="sidebar-menu__item"><a href="" class="sidebar-menu__link">Rahbariyat</a>
                            </li>
                            <li class="sidebar-menu__item"><a href="" class="sidebar-menu__link">Rahbariyat</a>
                            </li>
                            <li class="sidebar-menu__item"><a href="" class="sidebar-menu__link">Rahbariyat</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </div>
    </div></div>
   
</template>
<style>
.wrapper {
    background-image: url('/img/bg/image_copy.png');
    /* background-image: url('/img/bg/image.png'); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    background-color: rgba(255, 255, 255, 0.877);
    background-blend-mode: overlay;
}

.page-row {
    display: flex;
    gap: 14px;
    margin-top: 130px;
    /* height: 100vh; */
}

.page-row__col {
    flex-grow: 1;
    padding: 15px;
}

.page-row__col:nth-child(1) {
    width: 70%;
    /* background-color: #000; */
}

.page-row__col:nth-child(2) {
    width: 20%;
}

.aside {
    position: sticky;
    top: 130px;
    width: 100%;
    height: 100%;

}

.sidebar {
    height: 100%;

    border-radius: 12px;
    border: 1px solid rgba(234, 238, 245, 1);
    ;
    background: #fff;
    box-shadow: 0px 0px 30px 0px rgba(7, 12, 28, 0.04);
    width: 100%;
}

.sidebar-title {
    padding: 12px;
    color: rgba(1, 11, 27, 1);
    font-family: "MuseoSansCyrl-700", sans-serif;
    font-size: 20px;
    line-height: 140%;
    font-weight: 600;
    letter-spacing: -0.2px;
}

.sidebar-menu__item {
    /* background-color: aqua; */
    border-top: 1px solid rgba(223, 228, 237, 1);
}

.sidebar-menu__link {
    display: block;
    padding: 12px;
    position: relative;
    color: rgba(1, 11, 27, 1);
    ;
    font-family: "MuseoSansCyrl-500", sans-serif;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: -0.16px;
}

.sidebar-menu__link::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 0px;
    width: 4px;
    background-color: rgb(0, 60, 128);
    transition: all 0.2s ease-in-out;
}

.leadership {
    --local-image-width: 267px;
    display: flex;
    justify-content: space-between;
    height: 100%;
    gap: 20px;
}

.leadership-image__inner img {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
    border-radius: 12px;
    min-width: 220px;


}

.leadership-image {
    width: 100%;
    margin: 0 auto;
}

.leadership-image__inner {
    aspect-ratio: 0.89;
    position: sticky;
    top: 140px;
}

.leadership-info__wrapper {
    /* width: calc(100% - 70px); */
}

.leadership-info {
    /* background: #FFF; */
    display: flex;
    flex-direction: column;
    padding: 16px;
    border: 1px solid rgba(239, 243, 249, 1);
    border-radius: 12px;
    /* height: 100%; */
    position: relative;
}

.leadership-detail .leadership-info,
.active .leadership-info {
    position: relative;
    z-index: 1;
    overflow: hidden;
}

.leadership-info__fio {
    color: rgba(1, 11, 27, 1);
    font-family: "MuseoSansCyrl-700", sans-serif;
    font-size: 24px;
    line-height: 140%;
    letter-spacing: -0.24px;
}

.leadership-info__text {
    color: rgba(71, 82, 98, 1);
    font-family: "MuseoSansCyrl-500", sans-serif;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: -0.16px;
    margin-bottom: auto;
}

.leadership-detail .leadership-info__bottom {
    justify-content: flex-start;
}

.leadership-info__bottom {
    margin-top: 16px;
    display: flex;
    /* justify-content: space-between; */
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 16px;
}

.leadership-detail .leadership-info__links {
    flex-direction: row;
    gap: 16px;
}

.leadership-info__link {
    padding: 6px 8px;
    display: flex;
    align-items: center;
    color: rgba(1, 11, 27, 1);
    font-family: "MuseoSansCyrl-300", sans-serif;
    font-size: 16px;
    line-height: 138%;
    letter-spacing: -0.16px;
    gap: 6px;
    border-radius: 8px;
    border: 1px solid rgba(223, 228, 237, 1);
    background: rgba(248, 250, 253, 1);
}

.leadership-info__link i {
    font-size: 18px;
    color: rgba(82, 148, 229, 1);
}

.leadership-info__links {
    display: flex;
    /* flex-direction: column; */
    align-items: flex-start;
    flex-direction: row;
    gap: 16px;
}

.page-block__subtitle {
    color: rgba(22, 35, 71, 1);
    font-family: "MuseoSansCyrl-700", sans-serif;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: -0.2px;
    display: flex;
    align-items: center;
    gap: 12px;
}

.page-block__divider {
    border-top: 1px solid var(--black-7);
    margin: 12px 0;
}

.page-block {
    border-radius: 12px;
    border: 1px solid rgba(234, 238, 245, 1);
    background: #FFF;
    padding: 16px;
}

.page-block__subtitle {
    color: rgba(22, 35, 71, 1);
    font-family: "MuseoSansCyrl-700", sans-serif;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: -0.2px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 600;
}

.page-block:not(:last-of-type) {
    margin-bottom: 12px;
}

.leadership-info__wrapper> :not(:last-child) {
    margin-bottom: 12px;
}

.leadership-info__social {
  display: flex;
  gap: 6px;
}
.leadership-info__social a {
  width: 34px;
  aspect-ratio: 1/1;
  border-radius: 8px;
  border: 1px solid rgba(223, 228, 237, 1);
  background: rgba(248, 250, 253, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: rgba(119, 129, 145, 1);
}

.sidebar-menu__link:hover, .sidebar-menu__link.active {
  color: rgb(45, 48, 218);
}
.sidebar-menu__item:hover .sidebar-menu__link::before {
  height: 30%;
  background-color: rgb(45, 48, 218);
  color: rgb(45, 48, 218);
}
.sidebar-menu__link::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 0%;
  width: 4px;
  background-color: rgb(45, 48, 218);
  transition: all 0.2s ease-in-out;
}
</style>
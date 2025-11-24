<template>
        <div class="row page-row container">
                <div class="col page-row__col campus-content">
                        <div class="page-block">
                                <h2 class="sidebar-title campus360-title">Virtual Ko'rinish</h2>

                                <iframe id="tour-embedded" name="Sharq_1_qavat" :src="tourUrl" frameborder="0"
                                        width="100%" height="400px" scrolling="no" allowvr="yes"
                                        allow="vr; xr; accelerometer; gyroscope; autoplay;" allowfullscreen="false"
                                        webkitallowfullscreen="false" mozallowfullscreen="false"
                                        loading="eager"></iframe>
                        </div>
                </div>

                <div class="col page-row__col">
                        <div class="aside">

                                <!-- Sidebar Menu -->
                                <div class="aside-menu sidebar">
                                        <h3 class="sidebar-title">Bo'limlar</h3>
                                        <ul class="list-unstyled main-collapse section-aside-menu-list sidebar-menu">

                                                <!-- Rektor haqida -->
                                                <li class="section-aside-menu-list-item sidebar-menu__item">
                                                        <a href="/rektor" class="sidebar-menu__link no-active">
                                                                Rektor haqida
                                                        </a>
                                                </li>

                                                <!-- Tarixi -->
                                                <li class="section-aside-menu-list-item sidebar-menu__item">
                                                        <a href="/history" class="sidebar-menu__link no-active">
                                                                Tarixi
                                                        </a>
                                                </li>

                                                <!-- Hamkorlar -->
                                                <li class="section-aside-menu-list-item sidebar-menu__item">
                                                        <a href="/partners" class="sidebar-menu__link no-active">
                                                                Hamkorlar
                                                        </a>
                                                </li>

                                                <!-- Me'yoriy hujjatlar -->
                                                <li class="section-aside-menu-list-item sidebar-menu__item">
                                                        <a href="/document" class="sidebar-menu__link no-active">
                                                                Asosiy me’yoriy hujjatlar
                                                        </a>
                                                </li>
                                                <li class="section-aside-menu-list-item sidebar-menu__item">
                                                        <a href="/sertificat" class="sidebar-menu__link no-active">
                                                                Litsenziya va sertifikatlar
                                                        </a>
                                                </li>
                                                <li class="section-aside-menu-list-item sidebar-menu__item">
                                                        <a href="/sertificat" class="sidebar-menu__link no-active">
                                                                Litsenziya va sertifikatlar
                                                        </a>
                                                </li>

                                                <!-- Litsenziya & Sertifikatlar -->
                                                <li class="section-aside-menu-list-item sidebar-menu__item">
                                                        <a href="/sertificat" class="sidebar-menu__link no-active">
                                                                Litsenziya va sertifikatlar
                                                        </a>
                                                </li>

                                                <!-- 360 | Campus Map & VR -->
                                                <li class="section-aside-menu-list-item sidebar-menu__item">
                                                        <a href="#!" class="sidebar-menu__link no-active"
                                                                @click="toggle('campus')">
                                                                Campus Map & 360° VR <i class="icon-branch"></i>
                                                        </a>

                                                        <ul v-show="open.campus" class="sub-menu-sidebar list-unstyled">
                                                                <li class="sidebar-menu__item">
                                                                        <a href="/campus" class="sidebar-menu__link">
                                                                                360° Binolar tuzilishi
                                                                        </a>
                                                                </li>
                                                                <li class="sidebar-menu__item">
                                                                        <a href="/campus/map"
                                                                                class="sidebar-menu__link">
                                                                                Campus xaritasi
                                                                        </a>
                                                                </li>
                                                        </ul>
                                                </li>

                                        </ul>
                                        <!-- <ul class="list-unstyled main-collapse section-aside-menu-list sidebar-menu">

            <li class="section-aside-menu-list-item sidebar-menu__item">
              <a href="https://newuu.uz/en/about" class="sidebar-menu__link no-active">
                Vision &amp; Mission
              </a>
            </li>

            <li class="section-aside-menu-list-item sidebar-menu__item">
              <a href="#!"
                 class="sidebar-menu__link no-active"
                 @click="toggle('leadership')">
                Leadership <i class="icon-branch"></i>
              </a>

              <ul v-show="open.leadership" class="sub-menu-sidebar list-unstyled">
                <li class="sidebar-menu__item">
                  <a href="https://newuu.uz/en/rector-message" class="sidebar-menu__link">Message from the Rector</a>
                </li>
                <li class="sidebar-menu__item">
                  <a href="https://newuu.uz/en/leadership" class="sidebar-menu__link">Leadership Team</a>
                </li>
                <li class="sidebar-menu__item">
                  <a href="https://newuu.uz/en/menu/university-governance-bodies" class="sidebar-menu__link">Governance Bodies</a>
                </li>
                <li class="sidebar-menu__item">
                  <a href="https://newuu.uz/en/menu/our-team-" class="sidebar-menu__link">Our Team</a>
                </li>
              </ul>
            </li>

            <li class="section-aside-menu-list-item sidebar-menu__item">
              <a href="#!"
                 class="sidebar-menu__link no-active"
                 @click="toggle('policies')">
                Policies & Regulations <i class="icon-branch"></i>
              </a>

              <ul v-show="open.policies" class="sub-menu-sidebar list-unstyled">
                <li class="sidebar-menu__item">
                  <a href="https://newuu.uz/en/menu/general-university-regulations" class="sidebar-menu__link">General Regulations</a>
                </li>
                <li class="sidebar-menu__item">
                  <a href="https://newuu.uz/en/menu/academic-regulations" class="sidebar-menu__link">Academic Regulations</a>
                </li>
                <li class="sidebar-menu__item">
                  <a href="https://newuu.uz/en/menu/admission-rules" class="sidebar-menu__link">Admission Rules</a>
                </li>
                <li class="sidebar-menu__item">
                  <a href="https://newuu.uz/en/menu/financial-procurement" class="sidebar-menu__link">Financial & Procurement</a>
                </li>
              </ul>
            </li>

            <li class="section-aside-menu-list-item sidebar-menu__item">
              <a href="#!"
                 class="sidebar-menu__link no-active"
                 @click="toggle('partners')">
                Global Partnerships <i class="icon-branch"></i>
              </a>

              <ul v-show="open.partners" class="sub-menu-sidebar list-unstyled">
                <li class="sidebar-menu__item">
                  <a href="https://newuu.uz/en/strategic-partners" class="sidebar-menu__link">Strategic Partners</a>
                </li>
                <li class="sidebar-menu__item">
                  <a href="https://newuu.uz/en/partners" class="sidebar-menu__link">Partner Directory</a>
                </li>
                <li class="sidebar-menu__item">
                  <a href="https://newuu.uz/en/stories" class="sidebar-menu__link">Success Stories</a>
                </li>
              </ul>
            </li>

            <li class="section-aside-menu-list-item sidebar-menu__item">
              <a href="https://newuu.uz/en/campus-facilities" class="sidebar-menu__link no-active">
                Campus & Facilities
              </a>
            </li>

            <li class="section-aside-menu-list-item sidebar-menu__item">
              <a href="https://newuu.uz/en/virtual-tour" class="sidebar-menu__link active">
                Campus Map & 360° VR
              </a>
            </li>

            <li class="section-aside-menu-list-item sidebar-menu__item">
              <a href="https://newuu.uz/en/vacancy" class="sidebar-menu__link no-active">
                Vacancy
              </a>
            </li>

          </ul> -->
                                </div>

                                <!-- Aside Banner -->
                                <div class="aside-banner">
                                        <a href="https://t.me/sharqMurojaat_bot">
                                                <h3 class="aside-banner__title"> Rektorga <br>Murojaat</h3>
                                                <button class="aside-banner__btn">Yuborish</button>
                                                <img class="aside-banner__image" src="/img/murojaat.png"
                                                        alt="Reach out to the Rector">
                                        </a>
                                </div>

                        </div>
                </div>
        </div>
</template>

<script>
export default {
        name: "Campus360",

        data() {
                return {
                        tourUrl: "https://tour.panoee.net/iframe/69232ed26af138f518c2246d",
                        open: {
                                leadership: false,
                                policies: false,
                                partners: false,
                        }
                };
        },

        mounted() {
                this.enableDeviceMotion();
        },

        methods: {
                toggle(section) {
                        this.open[section] = !this.open[section];
                },

                enableDeviceMotion() {
                        const iframeId = "tour-embedded";

                        window.addEventListener("devicemotion", (e) => {
                                const iframe = document.getElementById(iframeId);
                                if (!iframe) return;

                                iframe.contentWindow.postMessage(
                                        {
                                                type: "devicemotion",
                                                deviceMotionEvent: {
                                                        acceleration: e.acceleration,
                                                        accelerationIncludingGravity: e.accelerationIncludingGravity,
                                                        rotationRate: e.rotationRate,
                                                        interval: e.interval,
                                                        timeStamp: e.timeStamp,
                                                },
                                        },
                                        "*"
                                );
                        });
                },
        },
};
</script>

<style scoped>
.page-row {
        display: flex;
        /* grid-template-columns: 3fr 1fr; */
        gap: 20px;
        padding-top: 140px;
}

.page-row__col {
        /* flex: 1; */
        width: 267px;

}

.campus-content {
        width: calc(100% - 267px)
}

.page-block {
        background: white;
}

.campus360-title {
        font-size: 26px;
        /* margin-bottom: 15px; */
        font-weight: bold;
}

.aside {
        position: sticky;
        top: 148px;
}

.sidebar-title {
        font-size: 22px;
        /* margin-bottom: 10px; */
}

.sidebar-menu__link {
        cursor: pointer;
        display: block;
        padding: 6px 0;
}

.sub-menu-sidebar {
        padding-left: 15px;
}

.page-block {
        border-radius: 12px;
        border: 1px solid rgba(234, 238, 245, 1);
        ;
        background: rgb(255, 255, 255, 1);
        padding: 16px;
}

.sidebar {
        border-radius: 12px;
        border: 1px solid rgba(234, 238, 245, 1);
        /* background: var(--white-1); */
        box-shadow: 0px 0px 30px 0px rgba(7, 12, 28, 0.04);
}

.sidebar-menu__link {
        display: block;
        padding: 12px;
        position: relative;
        color: rgba(1, 11, 27, 1);
        font-family: "MuseoSansCyrl-500", sans-serif;
        font-size: var(--size-text-16);
        line-height: 140%;
        letter-spacing: -0.16px;
}

.sidebar-title {
        padding: 12px;
        color: rgba(1, 11, 27, 1);
        font-family: "MuseoSansCyrl-700", sans-serif;
        font-size: 19px;
        line-height: 140%;
        letter-spacing: -0.2px;
        font-weight: 600;
}

.sidebar-menu__link:hover,
.sidebar-menu__link.active {
        color: rgb(20, 69, 126);
}

a:hover {
        color: rgb(65, 135, 176);
}

.page-block iframe {
        width: 100%;
        height: auto;
        display: block;
        aspect-ratio: 1.582;
        border-radius: 12px;
}

.aside-banner__title {
        color: rgba(1, 11, 27, 1);
        ;
        font-family: "MuseoSansCyrl-500", sans-serif;
        font-size: 15px;
        line-height: 140%;
        letter-spacing: -0.16px;
        margin-bottom: 12px;
}

.aside-banner__btn {
        background-color: transparent;
        padding: 0;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        outline: none;
        color: #fff;
        font-family: "MuseoSansCyrl-500", sans-serif;
        font-size: 15px;
        line-height: 140%;
        letter-spacing: -0.16px;
        border-radius: 8px;
        padding: 6px 8px;
        /* background: rgb(20, 62, 126); */
        background: linear-gradient(to right, rgba(0, 14, 90, 0.822), rgba(0, 50, 131, 0.973));
}

.aside-banner {
        border-radius: 12px;
        border: 1px solid var(--black-7);
        background: linear-gradient(90deg, #EAEEF5 0%, #DFE4ED 100%);
        padding: 12px;
        position: relative;
        overflow: hidden;
        z-index: 1;
}

.aside-banner__image {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: auto;
        z-index: -1;
}
</style>

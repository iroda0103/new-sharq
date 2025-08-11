<template>
    <header class="header" :class="{ 'menu-open': isMenuOpen }">
        <div class="container header__container">
            <div class="header-top">
                <a class="header-top-logo" href="/">
                    <img loading="lazy" class="logo__img" src="/img/logo_sharq.webp" alt="Site logo" />
                </a>
                <div class="contact-info">
                    <a href="mailto:info@sharqedu.uz" class="contact-link contact-mail">
                        <i class="fas fa-envelope"></i> <span class="contact-text">info@sharqedu.uz</span>
                    </a>
                    <a href="tel:+998712234567" class="contact-link contact-tel">
                        <i class="fas fa-phone"></i> <span class="contact-text">+998 (79) 222-07-00</span>
                    </a>
                </div>
                <span class="header-warning" data-bs-toggle="tooltip" data-bs-placement="bottom"
                    data-bs-title="The site works in test mode">
                    <i class="fa fa-warning"></i>
                    <span class="header-warning__text">The site works in test mode</span>
                </span>
                <div class="header__social">
                    <a href="https://t.me/sharquniversiteti" aria-label="Telegram">
                        <font-awesome-icon :icon="['fab', 'telegram']" />
                    </a>
                    <a href="https://www.instagram.com/sharquniversiteti/" aria-label="Instagram">
                        <font-awesome-icon :icon="['fab', 'instagram']" />
                    </a>
                    <a href="https://www.facebook.com/sharquniversiteti" aria-label="Facebook">
                        <font-awesome-icon :icon="['fab', 'facebook']" />
                    </a>
                    <a href="https://www.youtube.com/@sharquniversiteti" aria-label="YouTube">
                        <font-awesome-icon :icon="['fab', 'youtube']" />
                    </a>
                </div>
                <button class="header__btn" @click="toggleMenu" id="menuToggle" aria-label="Toggle menu">
                    <span class="hamburger"></span>
                </button>
            </div>

            <div class="header-bottom" id="mobileMenu">
                <a class="logo" href="/">
                    <img loading="lazy" class="logo__img" src="/img/logo_sharq.webp" alt="Site logo" />
                </a>
                <nav class="nav">
                    <ul class="nav__list">
                        <!-- <li class="nav__item mobile-only">
                            <a href="https://mentalaba.uz" class="nav__link men-talaba--logo">
                                <img loading="lazy"src="https://mentalaba.uz/assets/sidebarMenuLogo.svg" alt="Men Talaba Logo" />
                            </a>
                        </li> -->
                        <li class="nav__item">
                            <a class="nav__link" href="/">
                                <span>Bosh sahifa</span>
                            </a>
                        </li>

                        <li class="nav__item nav__item--has-dropdown">
                            <a class="nav__link" href="#" @click.prevent="toggleDropdown($event)">
                                <span>Universitet</span>
                                <i class="fas fa-chevron-down dropdown-icon"></i>
                            </a>
                            <ul class="dropdown">
                                <li><a href="/rektor">Rektor haqida</a></li>
                                <li><a href="/history/">Tarixi</a></li>
                                <li><a href="/partners/">Hamkorlar</a></li>
                                <li><a href="/document/">Asosiy me'yoriy hujjatlar</a></li>
                                <li><a href="/sertificat/">Litsenziya va sertifikatlar</a></li>
                            </ul>
                        </li>

                        <li class="nav__item nav__item--has-dropdown">
                            <a class="nav__link" href="#" @click.prevent="toggleDropdown($event)">
                                <span>Tuzilma</span>
                                <i class="fas fa-chevron-down dropdown-icon"></i>
                            </a>
                            <ul class="dropdown">
                                <li><a href="/leadership/">Rahbariyat</a></li>
                                <li><a href="/faculty/">Fakultetlar</a></li>
                                <li><a href="/kafedra">Kafedralar</a></li>
                                <li><a href="/department">Bo'limlar</a></li>
                            </ul>
                        </li>

                        <li class="nav__item">
                            <a class="nav__link" href="/grant">
                                <span>Grantlar</span>
                            </a>
                        </li>
                        <li class="nav__item nav__item--has-dropdown">
                            <a class="nav__link" href="#" @click.prevent="toggleDropdown($event)">
                                <span>Talabalarga</span>
                                <i class="fas fa-chevron-down dropdown-icon"></i>
                            </a>
                            <ul class="dropdown">
                                <li><a href="/education-portal">Ta'lim portali</a></li>
                                <li><a href="/library">Axborot resurslar markazi</a></li>
                            </ul>
                        </li>
                        <li class="nav__item nav__item--has-dropdown">
                            <a class="nav__link" href="#" @click.prevent="toggleDropdown($event)">
                                <span>Abituriyentlar</span>
                                <i class="fas fa-chevron-down dropdown-icon"></i>
                            </a>
                            <ul class="dropdown">
                                <li><a href="/directions">Ta'lim yo'nalishlari</a></li>
                                <li><a href="/bed-room">Yotoqxona</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

const toggleDropdown = (event) => {
    if (window.innerWidth > 768) return

    const parent = event.currentTarget.closest('.nav__item--has-dropdown')
    const dropdown = parent.querySelector('.dropdown')
    const icon = parent.querySelector('.dropdown-icon')

    parent.classList.toggle('dropdown-open')
    dropdown.style.maxHeight = parent.classList.contains('dropdown-open') ? dropdown.scrollHeight + 'px' : '0'
    icon.classList.toggle('fa-chevron-up')
    icon.classList.toggle('fa-chevron-down')
}
</script>

<style scoped lang="scss">
.header {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    position: fixed;
    background: linear-gradient(to right, #00455ede, #1b6ae9ee);
    width: 100%;
    z-index: 1000;
    top: 0;
    left: 0;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        background: linear-gradient(180deg, #0D172F 0%, rgba(13, 23, 47, 0) 100%);
        height: 100%;
        width: 100%;
        z-index: -1;
        transition: all 0.3s ease;
    }

    &__container {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
    }

    .header-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .header-top-logo {
        display: none;
    }

    .logo__img {
        height: 48px;
        width: auto;
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.05);
        }
    }

    .men-talaba--logo {
        display: flex;
        align-items: center;

        img {
            transition: transform 0.3s ease;
            height: 24px;

            &:hover {
                transform: scale(1.1);
            }
        }
    }

    &__btn {
        background: none;
        color: white;
        font-size: 28px;
        border: none;
        display: none;
        cursor: pointer;
        padding: 8px;
        position: relative;
        width: 40px;
        height: 40px;
        z-index: 1001;

        .hamburger {
            position: absolute;
            width: 24px;
            height: 2px;
            background: white;
            left: 8px;
            transition: all 0.3s ease;

            &::before,
            &::after {
                content: '';
                position: absolute;
                width: 24px;
                height: 2px;
                background: white;
                transition: all 0.3s ease;
            }

            &::before {
                top: -8px;
            }

            &::after {
                top: 8px;
            }
        }
    }

    .header-bottom {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 10px 0;

        .nav {
            width: 100%;

            &__list {
                display: flex;
                justify-content: center;
                gap: 20px;
                list-style: none;
                padding: 0;
                margin: 0;
                flex-wrap: wrap;
            }

            &__link {
                position: relative;
                display: inline-flex;
                align-items: center;
                padding: 16px 0;
                font-size: 18px;
                line-height: 24px;
                color: #fff;
                font-weight: 500;
                text-decoration: none;
                overflow: hidden;

                span {
                    position: relative;
                    display: inline-block;
                    padding: 0 4px;
                    transition: transform 0.3s ease;
                }

                &::after {
                    content: '';
                    position: absolute;
                    bottom: 12px;
                    left: 50%;
                    width: 0;
                    height: 2px;
                    background: white;
                    transform: translateX(-50%);
                    transition: width 0.3s ease;
                }

                &:hover {
                    &::after {
                        width: calc(100% - 8px);
                    }

                    span {
                        transform: translateY(-2px);
                    }
                }
            }
        }
    }

    .nav__item--has-dropdown {
        position: relative;


        &:hover .dropdown {
            visibility: visible;
            opacity: 1;
            transform: translateY(0);
            transform: translateX(-50%);

            @media (max-width: 768px) {
                transform: translateX(0)
            }
        }

        .dropdown-icon {
            display: none;
            margin-left: 5px;
            font-size: 12px;
            transition: transform 0.3s ease;
        }
    }

    .dropdown {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(-10px);
        background-color: white;
        border-radius: 6px;
        min-width: 200px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        z-index: 20;
        visibility: hidden;
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.1);

        &::before {
            content: '';
            position: absolute;
            top: -8px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-bottom: 8px solid white;
        }

        li {
            padding: 0;
            border-bottom: 1px solid #f0f0f0;

            &:last-child {
                border-bottom: none;
            }

            a {
                display: block;
                padding: 12px 20px;
                color: #333;
                text-decoration: none;
                transition: all 0.2s ease;

                &:hover {
                    background-color: #f8f8f8;
                    color: #1b6ae9;
                    padding-left: 25px;
                }
            }
        }
    }

    .mobile-only {
        display: none;
    }

    .contact-info {
        display: flex;
        gap: 30px;
        align-items: center;
        justify-content: space-between;

        a {
            color: #fff;
            font-size: 15px;
            display: flex;
            align-items: center;
        }

        i {
            margin-right: 8px;
            color: rgba(255, 255, 255, 0.945);
        }
    }

    .header__social {
        display: flex;
        gap: 15px;

        a {
            color: #fff;
            font-size: 18px;
            transition: color 0.3s ease;

            &:hover {
                color: #ffffffce;
            }
        }
    }

    .header-warning {
        display: flex;
        align-items: center;
        gap: 6px;
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.1);
        padding: 0 10px;
        height: 28px;
        color: #ffffffc9;
        font-size: 14px;
    }

    @media (max-width: 852px) {
        .contact-info {
            gap: 15px;
        }

        .header-bottom {
            .nav__link {
                font-size: 16px !important;
            }

            .nav__list {
                gap: 15px;
            }
        }

        .logo__img {
            height: 40px;
        }

        .contact-mail {
            gap: 15px;
            display: none;

            .contact-text {
                display: none;
            }
        }

        .header-warning {
            // &__text {
            //     display: none;
            // }
        }
    }

    @media (max-width: 768px) {
 .header-top-logo {
        display: block;
    }
        .mobile-only {
            display: block;
        }

        .header-top {
            padding: 8px 0;
        }

        // .contact-info {
        //     gap: 10px;

        //     a {
        //         font-size: 14px;
        //     }

        //     i {
        //         margin-right: 0;
        //         font-size: 16px;
        //     }
        // }
.contact-info{
    display: none;
}
        .header__social {
            gap: 10px;

            a {
                font-size: 16px;
            }
        }

        .header-warning {
            padding: 0 6px;

            i {
                font-size: 14px;
            }
        }

        &__btn {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &.menu-open {
            .header__btn .hamburger {
                background: transparent;

                &::before {
                    transform: rotate(45deg);
                    top: 0;
                }

                &::after {
                    transform: rotate(-45deg);
                    top: 0;
                }
            }

            .header-bottom {
                display: flex;
                animation: fadeInDown 0.4s ease;
            }
        }

        .logo__img {
            height: 36px;
        }

        .header-bottom {
            display: none;
            flex-direction: column;
            align-items: flex-start;
            padding: 16px 0;
            background: linear-gradient(to bottom, #00455e, #1b6ae9);
            box-shadow: inset 0 10px 20px rgba(0, 0, 0, 0.1);
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;

            .logo {
                display: none;
            }

            .nav__list {
                flex-direction: column;
                gap: 0;
                width: 100%;
            }

            .nav__link {
                width: 100%;
                padding: 14px 20px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                justify-content: space-between;

                &::after {
                    display: none;
                }

                &:hover {
                    background: rgba(255, 255, 255, 0.1);

                    span {
                        transform: translateX(8px);
                    }
                }
            }
        }

        .nav__item--has-dropdown {
            .dropdown-icon {
                display: inline-block;
            }
        }

        .dropdown {
            position: static;
            transform: none;
            visibility: visible;
            opacity: 1;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease;
            background-color: rgba(0, 0, 0, 0.1);
            box-shadow: none;
            width: 100%;
            border-radius: 0;

            &::before {
                display: none;
            }

            li {
                border-bottom-color: rgba(255, 255, 255, 0.1);

                a {
                    color: rgba(255, 255, 255, 0.9);
                    padding: 10px 30px;

                    &:hover {
                        color: white;
                        background-color: rgba(255, 255, 255, 0.2);
                    }
                }
            }
        }

        .dropdown-open .dropdown {
            max-height: 500px;
        }
    }

    @media (max-width:670px) {
        .header__social {
            display: none;
        }

        .contact-text {
            display: none;
        }
    }

    @media (max-width: 480px) {
        .contact-info {
            a {
                font-size: 12px;
            }

            i {
                font-size: 14px;
            }
        }

        .header__social {
            display: none;
        }

        .header-warning {
            display: none;
        }
    }
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
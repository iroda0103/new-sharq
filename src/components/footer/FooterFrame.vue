<template>
    <div class="footer-top-wrapper">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="footer-info">
                        <h2 class="footer-title">
                            Bizning <br> <span>ijtimoiy tarmoqlarga</span><br> ga obuna bO‘ling </h2>
                        <!-- <p class="footer-text">
                            Follow the latest news about us </p> -->
                    </div>
                </div>
                <div class="col">
                    <div class="footer-mockups">
                        <a href="https://www.instagram.com/sharquniversiteti" class="footer-mockup">
                            <img src="/img/social/instagram.png" alt="Instagram">
                            <span class="footer-mockup__social button">
                                <i class="icon-instagram-1"></i>
                                Instagram </span>
                        </a>
                        <a href="https://t.me/sharquniversiteti" class="footer-mockup">
                            <img src="/img/social/telegram.png" alt="Telegram">
                            <span class="footer-mockup__social button">
                                <i class="icon-telegram-1"></i>
                                Telegram </span>
                        </a>
                        <a href="https://www.facebook.com/newuzbekistanuniversity" class="footer-mockup">
                            <img src="/img/social/facebook.png" alt="Facebook">
                            <span class="footer-mockup__social button">
                                <i class="icon-facebook-1"></i>
                                Facebook </span>
                        </a>
                        <a href="https://www.youtube.com/@sharquniversiteti" class="footer-mockup">
                            <img src="/img/social/youtube.png" alt="YouTube">
                            <span class="footer-mockup__social button">
                                <i class="icon-youtube-1"></i>
                                YouTube </span>
                        </a>
                        <!-- <a href="https://www.linkedin.com/school/newuzbekistanuniversity" class="footer-mockup">
                            <img src="https://newuu.uz/uploads/social_network/85209343f579a8578c6831db9b83c2a5.png"
                                alt="Linkedin">
                            <span class="footer-mockup__social button">
                                <i class="icon-linkedin-1"></i>
                                Linkedin </span>
                        </a> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.footer-top {
    background-color: #000129;
    padding: 40px 0;
    color: #fff;
}

.footer-top-wrapper {
    background-image: url("../img/footer-frame.jpg");
    background: linear-gradient(to right, rgba(0, 14, 90, 0.822), rgba(0, 50, 131, 0.973));
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    background-repeat: repeat;
    background-size: auto auto;
    position: relative;
    /* z-index: -10; */
    z-index: 1;
    padding-top: 30px;
}
.footer-top-wrapper::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(180deg, #0D172F 0%, rgba(13, 23, 47, 0) 100%);
    height: 100%;
    width: 100%;
    z-index: -1;
    transition: all 0.3s 
ease;
}

.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.footer-mockups::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    background: linear-gradient(0deg, #2A407A 0%, rgba(24, 38, 78, 0) 100%);
    height: 104px;
    bottom: 102px;
    z-index: 1;
}

element.style {}

html:not(.bvi-panel) *,
html:not(.bvi-panel) ::after,
html:not(.bvi-panel) ::before {
    box-sizing: border-box;
}

@media only screen and (max-width: 1400px) {
    .footer-mockups {
        --local-margin-bottom: 32px;
    }
}

@media only screen and (max-width: 1712px) {
    .footer-mockups {
        --local-margin-bottom: 60px;
    }
}

.footer-mockups {
    --local-margin-top: 100px;
    --local-margin-bottom: 108px;
    display: flex;
    gap: var(--space-16);
    margin-bottom: calc(0px - var(--local-margin-bottom));
    margin-top: calc(0px - var(--local-margin-top));
    position: relative;
    /* z-index: -1; */
    z-index: 20;
}

.footer-mockup {
    flex: 1;
    position: relative;
}

.footer-mockup img {
    width: 210px
}

.footer-mockup__social {
    position: absolute;
    bottom: calc(var(--local-margin-bottom) + 24px);
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 99999;
    padding: 12px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    outline: none;
    height: 40px;
    border-radius: 12px;
    background: linear-gradient(90deg, #3E7CB5 0%, #39A589 100%);
    box-shadow: 0px 2px 0px 0px #29676A, 0px 8px 16px 0px rgba(255, 255, 255, 0.1) inset, 0px 2px 0px 0px rgba(255, 255, 255, 0.1) inset;
    font-size:16px;
    line-height: 140%;
    letter-spacing: -0.18px;
    color: #fff !important;
    width: max-content;
    justify-content: center;
    text-decoration: none !important;
      background: linear-gradient(to right, rgba(0, 69, 94, 0.8705882353), rgba(27, 106, 233, 0.9333333333));
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    font-weight: 600;
}

.footer-mockup__social i {
    color: var(--white-1);
    font-size: 20px;
}

/* .col {
    flex:1 0 0%;
} */

.footer-title {
    color: #fff;
    font-weight: 700;
    font-size: 26px;
    line-height: 140%;
    letter-spacing: -0.32px;
    margin-bottom: 20px;
}

.footer-title span {
    color: #f7c744;
}

@media (max-width: 1036px) {
  .footer-mockup img{
    display: none;
  }
  .footer-mockup__social{
    position: relative;
  }
  .footer-mockups{
    margin-top: 0;
    
    position: static;
    margin-bottom: 0;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
  .footer-mockups::after{
    display: none;
  }
  .row{
    justify-content: space-between;
    width: 100%;
  }
  .footer-mockup__social{
    position: static;
    left: 0;
    /* gap: 30px; */
  }
  .col:nth-child(2){
    margin-bottom: 20px;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .footer-mockup__social{
    transform: translate(0);
  }
}
/* Instagram */
.footer-mockup[href*="instagram"] .footer-mockup__social {
  background: linear-gradient(
    45deg,
    #f58529,
    #dd2a7b,
    #8134af,
    #515bd4
  );
}

/* Telegram */
.footer-mockup[href*="t.me"] .footer-mockup__social {
  background: linear-gradient(90deg, #0088cc 0%, #00aaff 100%);
}

/* Facebook */
.footer-mockup[href*="facebook"] .footer-mockup__social {
  background: linear-gradient(90deg, #1877f2 0%, #0f5dc2 100%);
}

/* YouTube */
.footer-mockup[href*="youtube"] .footer-mockup__social {
  background: linear-gradient(90deg, #ff0000 0%, #cc0000 100%);
}
.footer-mockup__social {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.footer-mockup:hover .footer-mockup__social {
  /* transform: translateY(-4px); */
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.25);
}

</style>
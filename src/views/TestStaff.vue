<script setup>
import Staffs from './Staffs.vue';
</script>

<template>
    <div class="staff-wrapper">
        <h1 class="page-title">Nazorat va sifat monitoringi bo’limi</h1>
        <ul class="nav tab mb-3 type-1" role="tablist">
            <li class="tab-item">
                    <button class="tab-item__btn active" data-bs-toggle="pill"
                            data-bs-target="#tab-1">Umumiy ma'lumot</button>
                </li>
            <li class="tab-item">
                <button class="tab-item__btn" data-bs-toggle="pill" data-bs-target="#tab-535" aria-selected="false"
                    role="tab" tabindex="-1">Bo'lim tarkibi</button>
            </li>
        </ul>
        <div class="page-block">
            <h3 class="page-block__subtitle">Bo‘lim haqida</h3>
            <p>
                Taʼlim sifatini nazorat qilish boʻlimi Oʻzbekiston Respublikasi Vazirlar Mahkamasining
                2017 yil 18 iyuldagi “Oʻzbekiston Respublikasi Vazirlar Mahkamasi huzuridagi Taʼlim sifatini nazorat
                qilish davlat
                inspeksiyasi faoliyatini tashkil etish toʻgʻrisida”gi 515-son qarorining 14-bandiga muvofiq tashkil
                etilgan boʻlib,
                bevosita universitet tarkibiga kiradi.
            </p>
        </div>

        <div class="page-block">
            <h3 class="page-block__subtitle">Boʻlimning asosiy maqsadi</h3>
            <p>
                Taʼlim sifatini nazorat qilish boʻlimining asosiy maqsadi Sharq universiteti talabalari bilimlarining
                davlat taʼlim
                standartlariga muvofiqligini oʻrganib borish, tahlil qilish, kadrlar tayyorlash sifati monitoringini
                yuritish,
                Sharq universiteti ichki attestatsiyadan oʻtkazishni tashkil etish va uning natijalari boʻyicha taʼlim
                sifatiga
                salbiy taʼsir etuvchi omillarni aniqlash hamda ularni bartaraf etish va oldini olish choralarini
                koʻrishdan iborat.
            </p>
        </div>

        <div class="page-block content">
            <h3 class="page-block__subtitle">Boʻlimining asosiy vazifalari</h3>


            <ul class="department_task">

                <li>
                    <strong>DTS va o‘quv hujjatlarini tahlil qilish:</strong>
                    Taʼlim yoʻnalishlari va mutaxassisliklarning davlat taʼlim standartlari, o‘quv rejalari va fan
                    dasturlari bilan taʼminlanganlik darajasini o‘rganish.
                </li>

                <li>
                    <strong>Ta’lim jarayoni sifatini o‘rganish:</strong>
                    O‘quv adabiyotlari va oʻquv-uslubiy materiallar bilan taʼminlanganlik darajasini tahlil qilish.
                </li>

                <li>
                    <strong>Bilimlarni baholash jarayonining shaffofligini nazorat qilish:</strong>
                    Talabalar bilimini baholash jarayonlarini o‘rganish va xolislikni ta’minlash.
                </li>

                <li>
                    <strong>Tanlanma nazorat ishlari oʻtkazish:</strong>
                    Talabalar bilimini aniqlash uchun qo‘shimcha nazorat ishlari tashkil etish va ularning natijalarini
                    tahlil qilish.
                </li>

                <li>
                    <strong>Dars mashg‘ulotlarini monitoring qilish:</strong>
                    Har bir fan bo‘yicha dars mashg‘ulotlarini tahlil qilish va rektorga ma’lumot berib borish.
                </li>

                <li>
                    <strong>Davomat va munosabat monitoringi:</strong>
                    Talabalar davomati hamda professor-o‘qituvchilarning darsga munosabatini nazorat qilish.
                </li>

                <li>
                    <strong>Yakuniy attestatsiya materiallarini o‘rganish:</strong>
                    Bitiruvchilarning bilim darajasini aniqlash maqsadida attestatsiya komissiyasi hujjatlarini ko‘rib
                    chiqish.
                </li>

                <li>
                    <strong>Ichki attestatsiyani tashkil etish:</strong>
                    Ichki attestatsiya jarayonlarini o‘tkazish va natijalarini rektorga hamda Davlat inspeksiyasiga
                    taqdim etish.
                </li>

                <li>
                    <strong>Ta’lim sifati ko‘rsatkichlarini monitoring qilish:</strong>
                    Aniqlangan muammolar bo‘yicha takliflar tayyorlash va rahbariyatga kiritish.
                </li>

                <li>
                    <strong>O‘qituvchilar malakasini oshirish jarayonini tahlil qilish:</strong>
                    Zamonaviy uslublardan foydalanish samaradorligini o‘rganish.
                </li>

                <li>
                    <strong>Ichki monitoring o‘tkazish:</strong>
                    Fakultet, kafedra va bo‘limlardagi pedagog xodimlar kasbiy malakasini tahlil qilish.
                </li>

                <li>
                    <strong>Moddiy-texnik bazani tahlil qilish:</strong>
                    Ta’lim jarayonining texnik ta’minoti holatini tahlil qilish va takliflar berish.
                </li>

                <li>
                    <strong>Talabalar amaliyotini nazorat qilish:</strong>
                    Amaliyotning yo‘nalishlarga mos tashkil etilganligini va samaradorligini tekshirish.
                </li>

                <li>
                    <strong>Sharq universiteti reytingida ishtirok etish:</strong>
                    Baholash va attestatsiya jarayonlarida faol qatnashish.
                </li>

                <li>
                    <strong>Ijtimoiy so‘rovlar o‘tkazish:</strong>
                    Talabalar, ota-onalar va o‘qituvchilar o‘rtasida muntazam so‘rovlar o‘tkazish.
                </li>

                <li>
                    <strong>Ijtimoiy muhitni tahlil qilish:</strong>
                    O‘qituvchilar va iste’molchilar fikrlarini o‘rganish va tavsiyalar ishlab chiqish.
                </li>

                <li>
                    <strong>Bitiruvchilar faoliyatini monitoring qilish:</strong>
                    Ularning o‘qishni davom ettirishi yoki ishga joylashishini tahlil qilish.
                </li>

                <li>
                    <strong>Xorijiy tajribalarni o‘rganish:</strong>
                    Ta’lim sifatini nazorat qilish bo‘yicha ichki va xalqaro yangiliklarni o‘rganish.
                </li>

                <li>
                    <strong>Xalqaro reyting bo‘yicha ishlash:</strong>
                    Universitet reytingini oshirish bo‘yicha chora-tadbirlarni ishlab chiqish va ijrosini ta’minlash.
                </li>

                <li>
                    <strong>Sifatni oshirish bo‘yicha seminarlar o‘tkazish:</strong>
                    Treninglar, o‘quv seminarlarini tashkil etish.
                </li>

                <li>
                    <strong>Ichki jamoatchi ekspertlar bazasini yaratish:</strong>
                    Ekspertlar bilan muntazam seminarlar o‘tkazish.
                </li>

                <li>
                    <strong>Innovatsion loyihalar va texnologiyalar bo‘yicha takliflar berish:</strong>
                    O‘quv jarayoni bilan ishlab chiqarish integratsiyasini kengaytirish.
                </li>

                <li>
                    <strong>Kengashga hisobot berish:</strong>
                    Monitoring natijalari bo‘yicha universitet Kengashiga ma’lumot taqdim etish.
                </li>

                <li>
                    <strong>Sifat bo‘yicha takliflar tayyorlash:</strong>
                    Tahlillar asosida rahbariyatga tavsiyalar kiritish.
                </li>

            </ul>
        </div>

        <Staffs></Staffs>
    </div>
</template>

<style>
.department_task li {
    padding: 7px 0;
}
.tab {
  display: inline-flex;
  align-items: center;
  border-radius: 12px;
  background: rgba(234, 238, 245, 1);
  padding: 4px;
  max-width: 100%;
  align-content: flex-start;
  row-gap: 4px;
  justify-content: center;
}
</style>
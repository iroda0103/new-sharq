<template>
    <section class="min-h-screen bg-gray-50">
        <!-- Hero Section -->
        <div class="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-none sm:rounded-xl">
            <img 
                loading="lazy" 
                src="/img/bed-room2/main.jpg" 
                alt="Yotoqxona binosi"
                class="w-full h-full object-cover"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
                <div class="max-w-7xl mx-auto">
                    <h1 class="text-2xl sm:text-3xl lg:text-3xl font-bold pb-7 sm:mb-4">
                        Talabalar yotoqxonasi
                    </h1>
                </div>
            </div>
        </div>

        <!-- Stats Section -->
        <div class="max-w-7xl mx-auto px-3 sm:px-4 -mt-12 sm:-mt-16 relative z-10 mb-12 sm:mb-16">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
                <div class="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 lg:p-6 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 lg:gap-4 hover:shadow-xl transition-shadow">
                    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <font-awesome-icon :icon="['fas', 'bed']" class="text-blue-600 text-lg sm:text-xl" />
                    </div>
                    <div class="text-center sm:text-left">
                        <div class="text-xl sm:text-2xl font-bold text-gray-800">250+</div>
                        <div class="text-xs sm:text-sm text-gray-600">Joylar</div>
                    </div>
                </div>

                <div class="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 lg:p-6 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 lg:gap-4 hover:shadow-xl transition-shadow">
                    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <font-awesome-icon :icon="['fas', 'building']" class="text-green-600 text-lg sm:text-xl" />
                    </div>
                    <div class="text-center sm:text-left">
                        <div class="text-xl sm:text-2xl font-bold text-gray-800">100+</div>
                        <div class="text-xs sm:text-sm text-gray-600">Xonalar</div>
                    </div>
                </div>

                <div class="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 lg:p-6 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 lg:gap-4 hover:shadow-xl transition-shadow">
                    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <font-awesome-icon :icon="['fas', 'wifi']" class="text-purple-600 text-lg sm:text-xl" />
                    </div>
                    <div class="text-center sm:text-left">
                        <div class="text-xl sm:text-2xl font-bold text-gray-800">100%</div>
                        <div class="text-xs sm:text-sm text-gray-600">WiFi</div>
                    </div>
                </div>

                <div class="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 lg:p-6 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 lg:gap-4 hover:shadow-xl transition-shadow">
                    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <font-awesome-icon :icon="['fas', 'utensils']" class="text-orange-600 text-lg sm:text-xl" />
                    </div>
                    <div class="text-center sm:text-left">
                        <div class="text-xl sm:text-2xl font-bold text-gray-800">3</div>
                        <div class="text-xs sm:text-sm text-gray-600">Oshxona</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Gallery Section -->
        <div class="max-w-7xl mx-auto px-3 sm:px-4 mb-12 sm:mb-16">
            <div class="text-center mb-8 sm:mb-5">
                <h2 class="text-1xl sm:text-2xl font-bold text-gray-800 page-title">
                    Yotoqxona hayoti
                </h2>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                <!-- Video -->
                <div class="lg:col-span-1 rounded-lg sm:rounded-xl overflow-hidden shadow-lg h-64 sm:h-80 lg:h-auto">
                    <video autoplay muted loop playsinline class="w-full h-full object-cover">
                        <source src="/img/bed-room2/video.mp4" type="video/mp4">
                    </video>
                </div>

                <!-- Images Grid -->
                <div class="lg:col-span-2 grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                    <div 
                        v-for="(item, index) in gallery" 
                        :key="index"
                        class="relative group rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
                    >
                        <img 
                            loading="lazy" 
                            :src="item.image" 
                            :alt="item.caption"
                            class="w-full h-30 sm:h-32 lg:h-60 object-cover group-hover:scale-110 transition-transform duration-300"
                        >
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3 lg:p-4">
                            <p class="text-white font-medium text-xs sm:text-sm lg:text-base">
                                {{ item.caption }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- FAQ Section -->
        <div class="bg-white py-12 sm:py-16">
            <div class="max-w-4xl mx-auto px-3 sm:px-4">
                <div class="text-center mb-8 sm:mb-5">
                    <h2 class="text-2xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4 page-title">
                        KO‘p beriladigan savollar
                    </h2>
                </div>

                <div class="space-y-3 sm:space-y-4">
                    <div 
                        v-for="(faq, index) in faqs" 
                        :key="index"
                        class="bg-gray-50 rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                        <button
                            @click="toggleFaq(index)"
                            class="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-start sm:items-center justify-between text-left hover:bg-gray-100 transition-colors gap-3"
                        >
                            <h3 class="font-semibold text-gray-800 text-sm sm:text-base pr-2">
                                {{ faq.question }}
                            </h3>
                            <font-awesome-icon 
                                :icon="['fas', faq.active ? 'minus' : 'plus']" 
                                class="text-blue-600 flex-shrink-0 text-sm sm:text-base mt-1 sm:mt-0"
                            />
                        </button>
                        <transition
                            enter-active-class="transition-all duration-300 ease-out"
                            leave-active-class="transition-all duration-200 ease-in"
                            enter-from-class="opacity-0 max-h-0"
                            enter-to-class="opacity-100 max-h-96"
                            leave-from-class="opacity-100 max-h-96"
                            leave-to-class="opacity-0 max-h-0"
                        >
                            <div 
                                v-show="faq.active"
                                class="px-4 sm:px-6 pb-4 sm:pb-5 text-gray-600 leading-relaxed border-t border-gray-200 pt-3 sm:pt-4 text-sm sm:text-base"
                            >
                                {{ faq.answer }}
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "DormitoryPage",
    data() {
        return {
            gallery: [
                { image: '/img/bed-room2/img4.jpg', caption: "Yotoqxona hovlisi" },
                { image: '/img/bed-room2/img3.jpg', caption: "Zal" },
                { image: '/img/bed-room2/img2.jpg', caption: "Oshxona" },
                { image: '/img/bed-room2/img5.jpg', caption: "Yotoq xonasi" },
                { image: '/img/bed-room2/img6.jpg', caption: "Kir yuvish xonasi" },
                { image: '/img/bed-room2/img1.jpg', caption: "Ichki muhit" }
            ],
            faqs: [
                {
                    question: "Yotoqxonaga rO‘yxatdan O‘tish jarayoni qanday?",
                    answer: "Yotoqxonaga rO‘yxatdan O‘tish uchun universitetning talabalar ishlari bO‘limiga murojaat qilishingiz kerak. Talab etiladigan hujjatlar rO‘yxati universitet veb-saytida joylashtirilgan.",
                    active: false
                },
                {
                    question: "Yotoqxona uchun tO‘lovni qanday amalga oshirish mumkin?",
                    answer: "Yotoqxona tO‘lovlari bank orqali yoki universitetning moliya bO‘limida naqd pulda amalga oshirilishi mumkin. TO‘lovlar har oyning 10-sanasigacha amalga oshirilishi kerak.",
                    active: false
                },
                {
                    question: "Yotoqxonada internet mavjudmi?",
                    answer: "Ha, barcha yotoqxonalarimizda tezkor WiFi internet tarmog'i mavjud. Internetdan foydalanish talabalar uchun bepul.",
                    active: false
                },
                {
                    question: "Yotoqxonaga mehmonlarni qabul qilish mumkinmi?",
                    answer: "Yotoqxonaga mehmonlarni qabul qilish mumkin, ammo ularni oldindan rO‘yxatdan O‘tkazish va ma'lum vaqt chegaralariga rioya qilish zarur.",
                    active: false
                }
            ]
        };
    },
    methods: {
        toggleFaq(index) {
            this.faqs[index].active = !this.faqs[index].active;
        }
    }
};
</script>
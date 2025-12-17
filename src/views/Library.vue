<template>
  <section class="pb-9">
    <div class="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">

      <!-- Info Card -->
      <div class="bg-slate-100 rounded-xl p-8 shadow-sm">
        <div class="flex items-center gap-3 mb-5">
          <i class="fas fa-book-open text-3xl text-blue-500"></i>
          <h2 class="text-2xl font-bold text-slate-900">
            {{ title }}
          </h2>
        </div>

        <p
          v-for="(text, index) in description"
          :key="index"
          class="text-slate-600 leading-relaxed mb-3"
        >
          {{ text }}
        </p>

        <a
          v-if="link"
          :href="link"
          target="_blank"
          class="inline-block mt-4 px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Batafsil
        </a>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div
          v-for="item in stats"
          :key="item.label"
          class="bg-slate-100 rounded-xl p-6 text-center shadow-sm hover:-translate-y-1 transition"
        >
          <i
            :class="item.icon"
            class="text-2xl text-blue-500 mb-3"
          ></i>

          <h3 class="text-xl font-bold text-slate-900">
            {{ formatNumber(item.count) }}
            <span class="block text-base font-medium text-slate-500 mt-1">
              {{ item.label }}
            </span>
          </h3>

          <p class="text-sm text-slate-500 mt-3">
            {{ item.description }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Unilibrary',

  data() {
    return {
      title: 'Unilibrary',

      description: [
        'O‘zbekiston Respublikasi oliy taʼlim va ilmiy tadqiqot muassasalarining yagona elektron kutubxona axborot tizimi.',
        'Elektron kutubxonada oliy taʼlim va ilmiy tadqiqot muassasalarining o‘quv adabiyotlari, monografiyalari, dissertatsiyalari va ilmiy maqolalari jamlangan.'
      ],

      link: 'https://unilibrary.uz',

      stats: [
        // {
        //   icon: 'fas fa-book',
        //   count: 406955,
        //   label: 'Adabiyotlar',
        //   description: 'Oliy taʼlim muassasalarining barcha o‘quv adabiyotlari'
        // },
         {
          icon: 'fas fa-book',
          count: 176,
          label: 'Darsliklar',
          description: 'Oliy taʼlim muassasalarining barcha o‘quv adabiyotlari'
        },
        {
          icon: 'fas fa-book',
          count: 1288,
          label: 'O‘quv qo‘llanma',
          description: 'Oliy taʼlim muassasalarining barcha o‘quv adabiyotlari'
        },
        {
          icon: 'fas fa-newspaper',
          count: 96145,
          label: 'Maqolalar',
          description: 'O‘qituvchilar va tadqiqotchilarning ilmiy maqolalari'
        },
        {
          icon: 'fas fa-book-reader',
          count: 17359,
          label: 'Monografiyalar',
          description: 'Oliy taʼlim muassasalarining monografiyalari'
        },
        {
          icon: 'fas fa-file-alt',
          count: 66641,
          label: 'Dissertatsiyalar',
          description: 'Oliy taʼlim muassasalarining dissertatsiyalari'
        }
      ]
    }
  },

  methods: {
    formatNumber(value) {
      return new Intl.NumberFormat('uz-UZ').format(value)
    }
  }
}
</script>

<template>
  <div class="flex justify-between items-center py-3 border-b border-white/20">
    <router-link to="/" class="lg:hidden">
      <img src="/img/logo_sharq.webp" class="w-[140px]" />
    </router-link>

    <div class="hidden lg:flex gap-8">
      <a href="mailto:info@sharqedu.uz" class="text-white">info@sharqedu.uz</a>
      <a href="tel:+998792227707" class="text-white">+998 (79) 222-07-00</a>
    </div>

    <div class="hidden md:flex gap-4">
      <a href="https://t.me/sharquniversiteti" target="_blank">TG</a>
      <a href="https://instagram.com/sharquniversiteti" target="_blank">IG</a>
    </div>

    <button
      class="lg:hidden w-10 h-10"
      @click="$emit('toggle-menu')"
    >
      ☰
    </button>
  </div>
</template>

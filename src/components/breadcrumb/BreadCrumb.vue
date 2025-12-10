<template>
  <nav class="flex p-4 bg-transparent rounded-lg shadow" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
      <li class="inline-flex items-center">
        <a
          href="/"
          class="inline-flex items-center text-sm font-medium text-white hover:text-blue-600 home-breadcrumb"
        >
          <svg
            class="w-4 h-4 me-1.5 home-breadcrumb"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
            />
          </svg>
          Home
        </a>
      </li>
      <li>
        <div class="flex items-center space-x-1.5">
          <svg
            class="w-3.5 h-3.5 text-gray-400 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
          </svg>
          <a href="/#posts" class="text-sm font-medium text-gray-700 hover:text-blue-600 home-breadcrumb">Universitet</a>
        </div>
      </li>
      <li aria-current="page">
        <div class="flex items-center space-x-1.5">
          <svg
            class="w-3.5 h-3.5 text-gray-400 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
          </svg>
          <span class="text-sm font-medium text-gray-500 home-breadcrumb">Rektor</span>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import 'flowbite'
</script>
<style>
  .home-breadcrumb{
    font-size: 16px;
  }
</style>
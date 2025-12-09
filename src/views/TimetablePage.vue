<template>
  <div class="timetable-page">
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-3xl font-bold mb-6 text-center text-blue-800">📘 Dars Jadvallari</h2>

      <div class="overflow-x-auto shadow rounded-lg border border-gray-200">
        <table class="min-w-full text-sm text-gray-700 bg-white">
          <thead class="bg-blue-600 text-white">
            <tr>
              <th class="px-4 py-3 text-left">#</th>
              <th class="px-4 py-3 text-left">Fan nomi</th>
              <th class="px-4 py-3 text-left">O'qituvchi</th>
              <th class="px-4 py-3 text-left">Guruh</th>
              <th class="px-4 py-3 text-left">Xona</th>
              <th class="px-4 py-3 text-left">Kun</th>
              <th class="px-4 py-3 text-left">Vaqti</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(lesson, index) in lessons" :key="index" class="border-b hover:bg-gray-100 transition">
              <td class="px-4 py-3">{{ index + 1 }}</td>
              <td class="px-4 py-3">{{ lesson.subject }}</td>
              <td class="px-4 py-3">{{ lesson.teacher }}</td>
              <td class="px-4 py-3">{{ lesson.group }}</td>
              <td class="px-4 py-3">{{ lesson.room }}</td>
              <td class="px-4 py-3">{{ lesson.day }}</td>
              <td class="px-4 py-3">{{ lesson.time }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
const lessons = [
  {
    subject: 'Matematika',
    teacher: 'Abdullayev M.',
    group: 'AM-31',
    room: 'Xona 205',
    day: 'Dushanba',
    time: '09:00 - 10:30'
  },
  {
    subject: 'Fizika',
    teacher: 'To’xtayev A.',
    group: 'AM-31',
    room: 'Xona 203',
    day: 'Seshanba',
    time: '10:40 - 12:10'
  },
  {
    subject: 'Dasturlash',
    teacher: 'Rustamova Z.',
    group: 'AM-31',
    room: 'Kompyuter xonasi',
    day: 'Chorshanba',
    time: '13:00 - 14:30'
  }
]
</script>

<style scoped>
.timetable-page {
  background: linear-gradient(to bottom right, #f9f9f9, #e8f0ff);
  min-height: 100vh;
}
</style>

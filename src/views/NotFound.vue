<template>
  <section class="not-found">
    <div class="container">
      <h1 class="error-code">404</h1>
      <h2 class="message">Kechirasiz, sahifa topilmadi</h2>
      <p class="description">
        Siz izlayotgan sahifa mavjud emas yoki ko‘chirilgan bo'lishi mumkin.
      </p>
      <router-link to="/" class="home-button">
        Bosh sahifaga qaytish
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "NotFoundPage",
};
</script>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f7fe;
  text-align: center;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
}

.container {
  max-width: 600px;
}

.error-code {
  font-size: 6rem;
  font-weight: 800;
  color: #2563eb;
  margin-bottom: 0.5rem;
}

.message {
  font-size: 1.8rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
}

.description {
  font-size: 1rem;
  color: #475569;
  margin-bottom: 2rem;
}

.home-button {
  display: inline-block;
  background-color: #2563eb;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.home-button:hover {
  background-color: #1d4ed8;
}
</style>

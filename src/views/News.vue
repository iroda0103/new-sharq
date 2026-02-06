<template>
  <div class="news">
    <div class="row justify-content-center d-flex news-wrapper">
      <div class="col-md-6 col-3">
        <div class="event-card">
          <!-- IMAGE -->
          <img
            src="/img/blog/unesco.png"
            class="img-news"
            alt="Yangilik rasmi"
            @click="openImage(1)"
          />

          <div class="new-wrapper d-flex flex-column">
            <div class="event-card__date">
              <span>1 Fevral 2026</span>
              <span>Chorshanba</span>
              <span>12:00</span>
            </div>

            <div class="event-card__info">
              <h1 class="event-card__title" >
                 🌍 Sharq Universiteti talabalari uchun — UNESCO grant dasturi!
              </h1>

              <div class="event-card__divider"></div>

              <span class="event-card__place">
                <i class="icon-pin"></i>
            
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-3">
        <div class="event-card">
          <!-- IMAGE -->
          <img
            src="/img/blog/indoneziya.png"
            class="img-news"
            alt="Yangilik rasmi"
            @click="openImage(2)"
          />

          <div class="new-wrapper d-flex flex-column">
            <div class="event-card__date">
              <span>2 Fevral 2026</span>
              <span>302-xona</span>
              <span>14:00</span>
            </div>

            <div class="event-card__info">
              <h1 class="event-card__title">
                 📣 DIQQAT! TANLOV! <br>
                 Indoneziyada o‘qish imkoniyatiga ega bo‘ling
              </h1>

              <div class="event-card__divider"></div>

              <span class="event-card__place">
                <i class="icon-pin"></i>

  </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- IMAGE MODAL -->
    <transition name="fade">
      <div
        v-if="showModal"
        class="image-modal"
        @click.self="closeImage"
      >
        <img :src="modalImage" class="modal-image" />
        <button class="modal-close" @click="closeImage">✕</button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showModal = ref(false)
const modalImage = ref('')

const openImage = (id) => {
  modalImage.value = `/img/blog/${id === 1 ? 'unesco.png' : 'indoneziya.png'}`
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeImage = () => {
  showModal.value = false
  document.body.style.overflow = ''
}

// ESC bilan yopish
const handleKey = (e) => {
  if (e.key === 'Escape') closeImage()
}

onMounted(() => window.addEventListener('keydown', handleKey))
onUnmounted(() => window.removeEventListener('keydown', handleKey))
</script>

<style>.news {
  padding: 20px 0;
}

.event-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* IMAGE */
.img-news {
  height: 250px;
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  cursor: zoom-in;
  transition: transform 0.3s ease;
}

.img-news:hover {
  transform: scale(1.02);
}

/* CONTENT */
.new-wrapper {
  gap: 12px;
}
.news-wrapper{
  display: flex;
  flex-wrap: nowrap !important;
}
.news-wrapper .col-3{
  width: 50%; }


.event-card__info {
  border-radius: 12px;
  border: 1px solid #e2e3e8;
  background: #fff;
  box-shadow: 0 4px 10px rgba(7, 12, 28, 0.05);
  padding: 14px;
}

.event-card__date {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14px;
  border-radius: 12px;
  background: linear-gradient(180deg, #3e7cb5, #125ea4);
  color: #fff;
}

.event-card__title {
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10px;
  line-height: 1.4;
}

.event-card__divider {
  border-top: 1px solid #e2e3e8;
  margin: 10px 0;
}

.event-card__place {
  font-size: 14px;
  display: flex;
  gap: 6px;
  align-items: center;
}

/* MODAL */
.image-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-image {
  max-width: 90%;
  max-height: 90%;
  border-radius: 12px;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #fff;
  border: none;
  font-size: 22px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}

/* ANIMATION */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* MOBILE */
@media (max-width: 768px) {
  .img-news {
    height: 200px;
  }

  .event-card__title {
    font-size: 14px;
  }
}
</style>
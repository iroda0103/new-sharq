<template>
  <router-link to="/campus" class="location-link">
    <button class="location-btn">
      <i class="fa-solid fa-location-crosshairs"></i>
      <span>360° Virtual Tour</span>
    </button>
  </router-link>
</template>

<style scoped>
.location-link {
  position: absolute;
  bottom: 40px;
  right: 40px;
  z-index: 5;
}

.location-btn {
  display: flex;
  align-items: center;
  gap: 10px;

  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(6px);

  color: #fff;
  padding: 12px 20px;
  border-radius: 40px;
  border: none;
  cursor: pointer;

  font-size: 15px;
  font-weight: 600;

  transition: all 0.3s ease;
}

.location-btn:hover {
  background: rgba(0, 0, 0, 0.75);
  transform: translateY(-2px);
}

/* Mobile */
@media (max-width: 768px) {
  .location-link {
    bottom: 20px;
    right: 50%;
    transform: translateX(50%);
  }

  .location-btn {
    font-size: 14px;
    padding: 10px 16px;
  }
}
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(0, 185, 252, 0.414); }
  70% { box-shadow: 0 0 0 15px rgba(0,186,252,0); }
  100% { box-shadow: 0 0 0 0 rgba(0,186,252,0); }
}

.location-btn {
  animation: pulse 2.5s infinite;
}

</style>

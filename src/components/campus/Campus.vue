<template>
  <div class="campus-360-viewer">
    <iframe
      :src="viewerUrl"
      width="100%"
      height="600"
      frameborder="0"
      allowfullscreen
      referrerpolicy="no-referrer"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "Campus360Viewer",
  props: {
    // viewer URL ni prop orqali berish mumkin, default siz bergan link
    viewerUrl: {
      type: String,
      default: "https://360photocam.com/online-viewer?id=7uvCL8",
    },
  },
};
</script>

<style scoped>
.campus-360-viewer {
  width: 100%;
  max-width: 1000px; /* optional, sayt layout ga qarab o'zgartiring */
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>

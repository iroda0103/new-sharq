<!-- <template>
    <div class="academic-calendar">
        <p class="page-title academic-title">Dars jadvali</p>
        <div class="pdf-viewer">
            <iframe src="/file/dars-jadval.pdf" width="100%" height="800px" style="border:none;"></iframe>
        </div>
    </div>

</template> -->
<template>
  <div class="academic-calendar">
    <p class="page-title academic-title">Dars jadvali</p>

    <div class="pdf-viewer">
      <iframe
        src="/file/dars-jadval.pdf#toolbar=0&navpanes=0&scrollbar=0"
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>
    

<style>
.academic-calendar {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
}

.academic-title {
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 25px;
  color: #1a1a1a;
}

.pdf-viewer {
  border-radius: 7px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
  background: #fff;
}

.pdf-viewer iframe {
  width: 100%;
  height: 85vh;
  border: none;
}

</style>
<template>
  <section class="journal-about">
    <h2 class="page-title">Jurnal haqida</h2>

    <!-- Jurnal maʼlumotlari -->
    <div class="page-block">
      <h3 class="page-block__subtitle">
        <font-awesome-icon :icon="['fas', 'circle-info']" />
        Jurnal maʼlumotlari
      </h3>
      <div class="page-block__divider"></div>

      <div class="info-table">
        <div class="info-row" v-for="(item, index) in journalInfo" :key="index">
          <span class="info-label">{{ item.label }}</span>
          <span class="info-value">{{ item.value }}</span>
        </div>
      </div>
    </div>

    <!-- Jurnal haqida matn -->
    <div class="page-block">
      <h3 class="page-block__subtitle">
        <font-awesome-icon :icon="['fas', 'book-open']" />
        Jurnal haqida
      </h3>
      <div class="page-block__divider"></div>
      <p class="about-text">
        "Zamonaviy iqtisodiyot va intellektual texnologiyalar" ilmiy-uslubiy
        elektron jurnali — Sharq universiteti tomonidan nashr etiladigan ilmiy
        nashr boʻlib, zamonaviy iqtisodiyot, axborot texnologiyalari, sunʻiy
        intellekt, raqamli iqtisodiyot va boshqa intellektual texnologiyalar
        sohasidagi ilmiy maqolalar, tadqiqot natijalari va tahliliy materiallarni
        jamlaydi. Jurnal yosh olimlar, professor-oʻqituvchilar, doktorantlar va
        mustaqil tadqiqotchilar uchun oʻz ilmiy ishlarini eʼlon qilish
        imkoniyatini yaratadi. Nashr milliy va xalqaro ilmiy hamjamiyatda
        universitetning ilmiy salohiyatini namoyon etishga xizmat qiladi.
      </p>
    </div>

    <!-- Tahririyat hayʼati -->
    <div class="page-block">
      <h3 class="page-block__subtitle">
        <font-awesome-icon :icon="['fas', 'users']" />
        Tahririyat hayʼati
      </h3>
      <div class="page-block__divider"></div>

      <!-- Bosh muharrir -->
      <div class="editor-section">
        <h4 class="editor-role">Bosh muharrir</h4>
        <div class="editor-item editor-item--chief">
          <font-awesome-icon :icon="['fas', 'user-tie']" class="editor-icon editor-icon--large" />
          <div class="editor-info">
            <span class="editor-name">{{ chief.name }}</span>
            <span class="editor-degree" v-if="chief.degree">{{ chief.degree }}</span>
          </div>
        </div>
      </div>

      <!-- Bosh muharrir oʻrinbosari -->
      <div class="editor-section">
        <h4 class="editor-role">Bosh muharrir oʻrinbosari</h4>
        <div class="editor-item editor-item--chief">
          <font-awesome-icon :icon="['fas', 'user-tie']" class="editor-icon editor-icon--large" />
          <div class="editor-info">
            <span class="editor-name">{{ deputy.name }}</span>
            <span class="editor-degree" v-if="deputy.degree">{{ deputy.degree }}</span>
          </div>
        </div>
      </div>

      <!-- Masʼul kotib -->
      <div class="editor-section">
        <h4 class="editor-role">Masʼul kotib</h4>
        <div class="editor-item editor-item--chief">
          <font-awesome-icon :icon="['fas', 'user-tie']" class="editor-icon editor-icon--large" />
          <div class="editor-info">
            <span class="editor-name">{{ secr.name }}</span>
            <span class="editor-degree" v-if="secr.degree">{{ secr.degree }}</span>
          </div>
        </div>
      </div>

      <!-- Tahririyat aʼzolari -->
      <div class="editor-section">
        <h4 class="editor-role">Tahririyat aʼzolari</h4>
        <div class="editors-list">
          <div
            v-for="member in board"
            :key="member.id"
            class="editor-item"
          >
            <font-awesome-icon :icon="['fas', 'user']" class="editor-icon" />
            <div class="editor-info">
              <span class="editor-name">{{ member.name }}</span>
              <span class="editor-degree">{{ member.degree }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Guvohnoma -->
    <div class="page-block">
      <h3 class="page-block__subtitle">
        <font-awesome-icon :icon="['fas', 'certificate']" />
        Guvohnoma
      </h3>
      <div class="page-block__divider"></div>
      <div class="certificate-viewer">
        <iframe
          src="/file/guvohnoma.pdf#toolbar=0&navpanes=0&scrollbar=0"
          loading="lazy"
        />
      </div>
      <a
        class="download-btn"
        href="/file/guvohnoma.pdf"
        target="_blank"
      >
        <font-awesome-icon :icon="['fas', 'download']" />
        Guvohnomani yuklab olish
      </a>
    </div>

    <!-- Bogʻlanish -->
    <div class="page-block">
      <h3 class="page-block__subtitle">
        <font-awesome-icon :icon="['fas', 'phone']" />
        Bogʻlanish
      </h3>
      <div class="page-block__divider"></div>
      <div class="contact-items">
        <div class="contact-row">
          <font-awesome-icon :icon="['fas', 'location-dot']" class="contact-icon" />
          <span>Navoiy viloyati, Oʻzbekiston</span>
        </div>
        <div class="contact-row">
          <font-awesome-icon :icon="['fas', 'phone']" class="contact-icon" />
          <span>+998 (79) 222-07-00</span>
        </div>
        <div class="contact-row">
          <font-awesome-icon :icon="['fas', 'envelope']" class="contact-icon" />
          <span>journal@sharqedu.uz</span>
        </div>
        <div class="contact-row">
          <font-awesome-icon :icon="['fas', 'globe']" class="contact-icon" />
          <span>www.sharqedu.uz</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  getChiefEditor,
  getDeputyEditor,
  getSecretary,
  getBoardMembers,
} from "@/data/editorial.js";

const chief = getChiefEditor();
const deputy = getDeputyEditor();
const secr = getSecretary();
const board = getBoardMembers();

const journalInfo = [
  { label: "Jurnal nomi", value: "\"Zamonaviy iqtisodiyot va intellektual texnologiyalar\" ilmiy-uslubiy elektron jurnali" },
  { label: "Nashriyotchi", value: "Sharq universiteti" },
  { label: "Nashriyotchi manzili", value: "Navoiy viloyati, Oʻzbekiston" },
  { label: "Muassisi", value: "Sharq universiteti" },
  { label: "Nashr tillari", value: "Oʻzbek, Rus, Ingliz" },
  { label: "Taʼsis etilgan yili", value: "2024" },
  { label: "Chop etish davriyligi", value: "Chorakda 1 marta" },
  { label: "Ixtisosligi", value: "Iqtisodiyot va intellektual texnologiyalar" },
  { label: "Nashr turi", value: "Elektron" },
];
</script>

<style lang="scss" scoped>
.journal-about {
  width: 100%;
}

.page-block {
  border-radius: 12px;
  border: 1px solid rgba(234, 238, 245, 1);
  background: #fff;
  padding: 16px;
  box-shadow: 0px 0px 30px 0px rgba(7, 12, 28, 0.04);

  &:not(:last-of-type) {
    margin-bottom: 12px;
  }
}

.page-block__subtitle {
  color: rgba(22, 35, 71, 1);
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.2px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;

  svg {
    color: var(--blue-3);
    font-size: 18px;
  }
}

.page-block__divider {
  border-top: 1px solid var(--black-7);
  margin: 12px 0;
}

/* Maʼlumotlar jadvali */
.info-table {
  display: flex;
  flex-direction: column;
}

.info-row {
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid rgba(234, 238, 245, 0.8);
  gap: 16px;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  &:first-child {
    padding-top: 0;
  }
}

.info-label {
  font-size: 14px;
  font-weight: 700;
  color: var(--black-4);
  min-width: 180px;
  flex-shrink: 0;
}

.info-value {
  font-size: 15px;
  font-weight: 600;
  color: var(--black-1);
  line-height: 1.5;
}

/* Jurnal haqida matn */
.about-text {
  font-size: 15px;
  line-height: 1.8;
  color: var(--black-3);
}

/* Tahririyat */
.editor-section {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.editor-role {
  font-size: 16px;
  font-weight: 700;
  color: var(--black-3);
  margin-bottom: 10px;
}

.editors-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.editor-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-radius: 8px;
  background: rgba(248, 250, 253, 1);

  &--chief {
    background: rgba(20, 87, 149, 0.06);
    padding: 14px 16px;
  }
}

.editor-icon {
  color: var(--blue-3);
  font-size: 16px;

  &--large {
    font-size: 22px;
  }
}

.editor-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.editor-name {
  font-size: 14px;
  font-weight: 700;
  color: var(--black-1);
}

.editor-degree {
  font-size: 13px;
  color: var(--black-4);
}

/* Guvohnoma */
.certificate-viewer {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(234, 238, 245, 1);

  iframe {
    width: 100%;
    height: 500px;
    display: block;
    border: none;
  }
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 14px;
  padding: 10px 20px;
  background: var(--blue-3);
  color: #fff;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background: var(--blue-2);
  }
}

/* Bogʻlanish */
.contact-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-row {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--black-3);
}

.contact-icon {
  color: var(--blue-3);
  font-size: 16px;
  width: 20px;
  text-align: center;
}

/* Responsive */
@media (max-width: 600px) {
  .info-row {
    flex-direction: column;
    gap: 4px;
  }

  .info-label {
    min-width: unset;
  }

  .certificate-viewer iframe {
    height: 350px;
  }
}
</style>

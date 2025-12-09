<template>
  <section class="unilibrary">
    <div class="container unlibrary__container">
      <div class="info-card">
        <div class="icon-title">
          <i class="fas fa-book-open"></i>
          <h2>Unilibrary</h2>
        </div>
        <p>
          O‘zbekiston Respublikasi oliy taʼlim va ilmiy tadqiqot muassasalarining yagona elektron kutubxona axborot tizimi.
        </p>
        <p>
          Elektron kutubxonada oliy taʼlim va ilmiy tadqiqot muassasalarining o‘quv adabiyotlari, monografiyalari, disseratsiyalari va ilmiy maqolalari jamlangan.
        </p>
        <!-- <a href="https://unilibrary.uz" target="_blank" class="btn-more blue-link">Batafsil</a> -->
      </div>

      <div class="stats-grid">
        <div class="stat-box">
          <i class="fas fa-book"></i>
          <h3>406955 <span>Adabiyotlar</span></h3>
          <p>Oliy taʼlim muassasalarining barcha o‘quv adabiyotlari ro‘yxati</p>
        </div>
        <div class="stat-box">
          <i class="fas fa-newspaper"></i>
          <h3>96145 <span>Maqolalar</span></h3>
          <p>O‘qituvchilar va ilmiy tadqiqotchilarning barcha maqolalari ro‘yxati</p>
        </div>
        <div class="stat-box">
          <i class="fas fa-book-reader"></i>
          <h3>17359 <span>Monografiyalar</span></h3>
          <p>Oliy taʼlim muassasalarining barcha monografiyalari ro‘yxati</p>
        </div>
        <div class="stat-box">
          <i class="fas fa-file-alt"></i>
          <h3>66641 <span>Dissertatsiyalar</span></h3>
          <p>Oliy taʼlim muassasalarining barcha dissertatsiyalari ro‘yxati</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Unilibrary'
}
</script>

<style lang="scss" scoped>
.unilibrary {
  // padding: 60px 20px;
// padding-top: 180px;
  .unlibrary__container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 2fr;
    gap: 30px;

    // 🔁 Responsiv: mobilda 1 ustun
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .info-card {
      background: #f1f5f9;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

      .icon-title {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 20px;

        i {
          font-size: 30px;
          color: #3b82f6;
        }

        h2 {
          font-size: 24px;
          font-weight: 700;
          color: #0f172a;
        }

        @media (max-width: 500px) {
          h2 {
            font-size: 20px;
          }
          i {
            font-size: 26px;
          }
        }
      }

      p {
        margin: 10px 0;
        color: #334155;
        line-height: 1.6;
        font-size: 16px;

        @media (max-width: 500px) {
          font-size: 14px;
        }
      }

      .btn-more {
        display: inline-block;
        margin-top: 15px;
        padding: 10px 20px;
        background-color: #1e40af;
        color: white;
        border-radius: 8px;
        font-weight: 600;
        text-decoration: none;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #2563eb;
        }
      }
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;

      @media (max-width: 500px) {
        grid-template-columns: 1fr;
      }

      .stat-box {
        background: #f1f5f9;
        padding: 20px;
        border-radius: 12px;
        text-align: center;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        transition: transform 0.2s;

        &:hover {
          transform: translateY(-4px);
        }

        i {
          font-size: 28px;
          color: #4283df;
          margin-bottom: 10px;

          @media (max-width: 500px) {
            font-size: 24px;
          }
        }

        h3 {
          font-size: 22px;
          font-weight: bold;
          color: #0f172a;

          span {
            font-weight: 500;
            font-size: 16px;
            margin-left: 5px;
            color: #475569;

            @media (max-width: 500px) {
              font-size: 14px;
            }
          }

          @media (max-width: 500px) {
            font-size: 20px;
          }
        }

        p {
          font-size: 14px;
          margin-top: 10px;
          color: #64748b;

          @media (max-width: 500px) {
            font-size: 13px;
          }
        }
      }
    }
  }
}
</style>


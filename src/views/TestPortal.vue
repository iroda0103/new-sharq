<template>
  <div class="tasks-schedule">
    <!-- Mobil navigatsiya -->
    <div class="mobile-nav">
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id"
      >
        <i :class="tab.icon"></i>
        <span>{{ tab.label }}</span>
      </button>
    </div>

    <!-- Asosiy kontent -->
    <div class="content">
      <!-- Topshiriqlar bo'limi -->
      <section v-show="activeTab === 'tasks'" class="tasks-section">
        <h2><i class="fas fa-tasks"></i> Topshiriqlar</h2>
        <div class="filter-options">
          <select v-model="taskFilter">
            <option value="all">Barchasi</option>
            <option value="active">Aktiv</option>
            <option value="completed">Yakunlangan</option>
            <option value="overdue">Muddati o'tgan</option>
          </select>
          <button class="refresh-btn">
            <i class="fas fa-sync-alt"></i>
          </button>
        </div>

        <div class="task-list">
          <div 
            v-for="task in filteredTasks" 
            :key="task.id" 
            class="task-card"
            @click="openTaskDetails(task)"
          >
            <div class="task-header">
              <h3>{{ task.title }}</h3>
              <span class="task-type">{{ task.type }}</span>
            </div>
            <p class="task-subject">{{ task.subject }}</p>
            <div class="task-footer">
              <span class="deadline" :class="{ 
                'warning': task.status === 'urgent', 
                'danger': task.status === 'overdue' 
              }">
                <i class="fas fa-clock"></i> {{ task.deadline }}
              </span>
              <span class="points">
                <i class="fas fa-star"></i> {{ task.points }} ball
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Dars jadvali bo'limi -->
      <section v-show="activeTab === 'schedule'" class="schedule-section">
        <h2><i class="fas fa-calendar-alt"></i> Dars jadvali</h2>
        <div class="week-selector">
          <button @click="prevWeek"><i class="fas fa-chevron-left"></i></button>
          <span>{{ currentWeekRange }}</span>
          <button @click="nextWeek"><i class="fas fa-chevron-right"></i></button>
        </div>

        <div class="schedule-view">
          <div class="schedule-day" v-for="day in schedule" :key="day.date">
            <h3>{{ day.dayName }}, {{ day.date }}</h3>
            <div class="lessons">
              <div 
                v-for="lesson in day.lessons" 
                :key="lesson.id" 
                class="lesson-card"
                @click="openLessonDetails(lesson)"
              >
                <div class="lesson-time">
                  {{ lesson.startTime }} - {{ lesson.endTime }}
                </div>
                <div class="lesson-info">
                  <h4>{{ lesson.subject }}</h4>
                  <p>{{ lesson.teacher }}</p>
                  <p>{{ lesson.type }}</p>
                </div>
                <div class="lesson-room">
                  <i class="fas fa-door-open"></i> {{ lesson.room }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Fanlar bo'limi -->
      <section v-show="activeTab === 'subjects'" class="subjects-section">
        <h2><i class="fas fa-book"></i> Fanlar</h2>
        <div class="subject-list">
          <div 
            v-for="subject in subjects" 
            :key="subject.id" 
            class="subject-card"
            @click="openSubjectDetails(subject)"
          >
            <div class="subject-header">
              <h3>{{ subject.name }}</h3>
              <span class="subject-code">{{ subject.code }}</span>
            </div>
            <div class="subject-progress">
              <div class="progress-bar">
                <div 
                  class="progress-fill" 
                  :style="{ width: subject.progress + '%' }"
                ></div>
              </div>
              <span>{{ subject.progress }}% o'zlashtirildi</span>
            </div>
            <div class="subject-resources">
              <span><i class="fas fa-file-alt"></i> {{ subject.materials }} material</span>
              <span><i class="fas fa-tasks"></i> {{ subject.tasks }} topshiriq</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Ma'lumotlar bo'limi -->
      <section v-show="activeTab === 'documents'" class="documents-section">
        <h2><i class="fas fa-file-contract"></i> Shartnomalar va hujjatlar</h2>
        <div class="document-list">
          <div 
            v-for="doc in documents" 
            :key="doc.id" 
            class="document-card"
            @click="openDocument(doc)"
          >
            <div class="doc-icon">
              <i :class="doc.icon"></i>
            </div>
            <div class="doc-info">
              <h3>{{ doc.name }}</h3>
              <p>{{ doc.description }}</p>
              <span class="doc-date">{{ doc.date }}</span>
            </div>
            <button class="download-btn">
              <i class="fas fa-download"></i>
            </button>
          </div>
        </div>
      </section>
    </div>

    <!-- Detallar modali -->
    <div v-if="selectedItem" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-modal" @click="closeModal">
          <i class="fas fa-times"></i>
        </button>
        
        <div v-if="selectedItem.type === 'task'" class="task-details">
          <h3>{{ selectedItem.title }}</h3>
          <div class="detail-row">
            <span class="label">Fan:</span>
            <span class="value">{{ selectedItem.subject }}</span>
          </div>
          <div class="detail-row">
            <span class="label">Topshiriq turi:</span>
            <span class="value">{{ selectedItem.type }}</span>
          </div>
          <div class="detail-row">
            <span class="label">Muddati:</span>
            <span class="value">{{ selectedItem.deadline }}</span>
          </div>
          <div class="detail-row">
            <span class="label">Ball:</span>
            <span class="value">{{ selectedItem.points }} ball</span>
          </div>
          <div class="detail-row full-width">
            <span class="label">Tavsif:</span>
            <p class="value">{{ selectedItem.description }}</p>
          </div>
          <div v-if="selectedItem.attachments.length" class="attachments">
            <h4>Ilovalar:</h4>
            <div class="attachment-list">
              <div 
                v-for="file in selectedItem.attachments" 
                :key="file.id" 
                class="attachment"
                @click="openAttachment(file)"
              >
                <i class="fas fa-paperclip"></i>
                <span>{{ file.name }}</span>
              </div>
            </div>
          </div>
          <div class="action-buttons">
            <button class="btn primary">
              <i class="fas fa-upload"></i> Topshiriqni yuklash
            </button>
            <button class="btn secondary">
              <i class="fas fa-question-circle"></i> Yordam
            </button>
          </div>
        </div>

        <div v-else-if="selectedItem.type === 'lesson'" class="lesson-details">
          <h3>{{ selectedItem.subject }}</h3>
          <div class="detail-row">
            <span class="label">O'qituvchi:</span>
            <span class="value">{{ selectedItem.teacher }}</span>
          </div>
          <div class="detail-row">
            <span class="label">Sana:</span>
            <span class="value">{{ selectedItem.date }}</span>
          </div>
          <div class="detail-row">
            <span class="label">Vaqt:</span>
            <span class="value">{{ selectedItem.startTime }} - {{ selectedItem.endTime }}</span>
          </div>
          <div class="detail-row">
            <span class="label">Xona:</span>
            <span class="value">{{ selectedItem.room }}</span>
          </div>
          <div class="detail-row">
            <span class="label">Dars turi:</span>
            <span class="value">{{ selectedItem.lessonType }}</span>
          </div>
          <div class="detail-row full-width">
            <span class="label">Mavzu:</span>
            <p class="value">{{ selectedItem.topic }}</p>
          </div>
          <div v-if="selectedItem.materials.length" class="materials">
            <h4>Dars materiallari:</h4>
            <div class="material-list">
              <div 
                v-for="material in selectedItem.materials" 
                :key="material.id" 
                class="material"
                @click="openMaterial(material)"
              >
                <i :class="material.icon"></i>
                <span>{{ material.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="selectedItem.type === 'subject'" class="subject-details">
          <h3>{{ selectedItem.name }}</h3>
          <div class="detail-row">
            <span class="label">Fan kodi:</span>
            <span class="value">{{ selectedItem.code }}</span>
          </div>
          <div class="detail-row">
            <span class="label">O'qituvchi:</span>
            <span class="value">{{ selectedItem.teacher }}</span>
          </div>
          <div class="detail-row">
            <span class="label">Semestr:</span>
            <span class="value">{{ selectedItem.semester }}</span>
          </div>
          <div class="detail-row">
            <span class="label">Kreditlar:</span>
            <span class="value">{{ selectedItem.credits }}</span>
          </div>
          <div class="progress-container">
            <div class="progress-info">
              <span>O'zlashtirish darajasi:</span>
              <span>{{ selectedItem.progress }}%</span>
            </div>
            <div class="progress-bar">
              <div 
                class="progress-fill" 
                :style="{ width: selectedItem.progress + '%' }"
              ></div>
            </div>
          </div>
          <div class="stats">
            <div class="stat">
              <i class="fas fa-book"></i>
              <span>{{ selectedItem.materials }} ta material</span>
            </div>
            <div class="stat">
              <i class="fas fa-tasks"></i>
              <span>{{ selectedItem.tasks }} ta topshiriq</span>
            </div>
            <div class="stat">
              <i class="fas fa-chart-line"></i>
              <span>O'rtacha baho: {{ selectedItem.averageGrade }}</span>
            </div>
          </div>
          <div class="action-buttons">
            <button class="btn primary">
              <i class="fas fa-book-open"></i> Darsliklar
            </button>
            <button class="btn secondary">
              <i class="fas fa-tasks"></i> Topshiriqlar
            </button>
          </div>
        </div>

        <div v-else-if="selectedItem.type === 'document'" class="document-details">
          <h3>{{ selectedItem.name }}</h3>
          <div class="detail-row">
            <span class="label">Turi:</span>
            <span class="value">{{ selectedItem.docType }}</span>
          </div>
          <div class="detail-row">
            <span class="label">Sana:</span>
            <span class="value">{{ selectedItem.date }}</span>
          </div>
          <div class="detail-row">
            <span class="label">Holati:</span>
            <span class="value">{{ selectedItem.status }}</span>
          </div>
          <div class="detail-row full-width">
            <span class="label">Tavsif:</span>
            <p class="value">{{ selectedItem.description }}</p>
          </div>
          <div class="document-preview">
            <img loading="lazy"
              v-if="selectedItem.preview" 
              :src="selectedItem.preview" 
              alt="Document preview"
            >
            <div v-else class="no-preview">
              <i class="fas fa-file-alt"></i>
              <span>Oldindan ko'rish mavjud emas</span>
            </div>
          </div>
          <div class="action-buttons">
            <button class="btn primary">
              <i class="fas fa-download"></i> Yuklab olish
            </button>
            <button class="btn secondary">
              <i class="fas fa-print"></i> Chop etish
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Rasm ko'rish modali -->
    <div v-if="selectedImage" class="image-modal" @click="closeImageModal">
      <div class="image-container">
        <img loading="lazy":src="selectedImage" alt="Preview">
        <button class="close-btn" @click="closeImageModal">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TasksAndSchedule',
  data() {
    return {
      activeTab: 'tasks',
      taskFilter: 'all',
      currentWeek: 0,
      selectedItem: null,
      selectedImage: null,
      tabs: [
        { id: 'tasks', label: 'Topshiriqlar', icon: 'fas fa-tasks' },
        { id: 'schedule', label: 'Dars jadvali', icon: 'fas fa-calendar-alt' },
        { id: 'subjects', label: 'Fanlar', icon: 'fas fa-book' },
        { id: 'documents', label: 'Hujjatlar', icon: 'fas fa-file-contract' }
      ],
      tasks: [
        {
          id: 1,
          title: 'Mustaqil ish',
          subject: "Ma'lumotlar tuzilmasi va algoritmlar",
          type: 'Loyiha',
          deadline: '31.01.2022 23:00',
          points: 20,
          status: 'urgent',
          description: 'Binar daraxtlar haqida tadqiqot ishi. 10-15 betlik hujjat tayyorlang va kod misollarini topshiring.',
          attachments: [
            { id: 1, name: 'Topshiriq tavsifi.pdf', type: 'pdf' },
            { id: 2, name: 'Namuna kodlar.zip', type: 'archive' }
          ]
        },
        {
          id: 2,
          title: 'Mustaqil ish',
          subject: "Ma'lumotlar tuzilmasi va algoritmlar",
          type: 'Vazifa',
          deadline: '31.01.2022 23:00',
          points: 15,
          status: 'active',
          description: 'Hash jadvallari haqida prezentatsiya tayyorlang.',
          attachments: []
        },
        {
          id: 3,
          title: 'Mustaqil ish',
          subject: "Ma'lumotlar tuzilmasi va algoritmlar",
          type: 'Loyiha',
          deadline: '31.01.2022 23:00',
          points: 25,
          status: 'overdue',
          description: 'Graf algoritmlarini tadqiq qilish va dasturiy taqdimot tayyorlash.',
          attachments: [
            { id: 1, name: 'Talablar.docx', type: 'doc' }
          ]
        },
        {
          id: 4,
          title: 'Mustaqil ish',
          subject: "Ma'lumotlar bazasi",
          type: 'Vazifa',
          deadline: '31.01.2022 23:00',
          points: 10,
          status: 'active',
          description: 'SQL so\'rovlari yozish.',
          attachments: []
        }
      ],
      schedule: this.generateWeekSchedule(0),
      subjects: [
        {
          id: 1,
          name: "Ma'lumotlar tuzilmasi va algoritmlar",
          code: 'MTA-101',
          teacher: 'Prof. Ismoilova S.',
          progress: 65,
          materials: 12,
          tasks: 5,
          averageGrade: 4.8,
          semester: '3-semestr',
          credits: 5
        },
        {
          id: 2,
          name: "Ma'lumotlar bazasi",
          code: 'MB-202',
          teacher: 'Prof. Ahmadjonov A.',
          progress: 40,
          materials: 8,
          tasks: 3,
          averageGrade: 4.2,
          semester: '3-semestr',
          credits: 4
        },
        {
          id: 3,
          name: 'Dasturiy injiniring',
          code: 'DI-303',
          teacher: 'Prof. Karimov T.',
          progress: 30,
          materials: 5,
          tasks: 2,
          averageGrade: 4.5,
          semester: '3-semestr',
          credits: 4
        }
      ],
      documents: [
        {
          id: 1,
          name: 'Talaba shartnomasi',
          docType: 'Shartnoma',
          date: '01.09.2021',
          status: 'Faol',
          description: 'Talaba va universitet o\'rtasidagi to\'lov shartnomasi',
          icon: 'fas fa-file-signature',
          preview: 'https://example.com/preview1.jpg'
        },
        {
          id: 2,
          name: 'O\'quv rejasi',
          docType: 'Reja',
          date: '15.09.2021',
          status: 'Tasdiqlangan',
          description: '2021/2022 o\'quv yili uchun o\'quv rejasi',
          icon: 'fas fa-calendar-check',
          preview: null
        },
        {
          id: 3,
          name: 'Stipendiya to\'g\'risida buyruq',
          docType: 'Buyruq',
          date: '10.10.2021',
          status: 'Amalda',
          description: 'Stipendiya miqdorlari va tartibi to\'g\'risida',
          icon: 'fas fa-file-invoice-dollar',
          preview: 'https://example.com/preview2.jpg'
        }
      ]
    }
  },
  computed: {
    filteredTasks() {
      if (this.taskFilter === 'all') return this.tasks;
      if (this.taskFilter === 'active') return this.tasks.filter(t => t.status === 'active');
      if (this.taskFilter === 'completed') return this.tasks.filter(t => t.status === 'completed');
      if (this.taskFilter === 'overdue') return this.tasks.filter(t => t.status === 'overdue');
      return this.tasks;
    },
    currentWeekRange() {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() + this.currentWeek * 7 - startDate.getDay() + 1);
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + 6);
      
      return `${this.formatDate(startDate)} - ${this.formatDate(endDate)}`;
    }
  },
  methods: {
    generateWeekSchedule(weekOffset) {
      const days = ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
      const today = new Date();
      const startDate = new Date(today);
      startDate.setDate(today.getDate() + weekOffset * 7 - today.getDay() + 1);
      
      return days.map((day, index) => {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + index);
        
        return {
          dayName: day,
          date: this.formatDate(date),
          lessons: this.generateLessonsForDay(day)
        };
      });
    },
    generateLessonsForDay(day) {
      const lessons = [];
      const subjects = ["Ma'lumotlar tuzilmasi", "Ma'lumotlar bazasi", "Dasturiy injiniring"];
      const teachers = ["Prof. Ismoilova S.", "Prof. Ahmadjonov A.", "Prof. Karimov T."];
      const types = ["Ma'ruza", "Amaliy", "Laboratoriya"];
      const rooms = ["302", "415", "210", "105"];
      
      const lessonCount = Math.floor(Math.random() * 3) + 1;
      
      for (let i = 0; i < lessonCount; i++) {
        const hour = 8 + i * 3;
        lessons.push({
          id: `${day}-${i}`,
          subject: subjects[Math.floor(Math.random() * subjects.length)],
          teacher: teachers[Math.floor(Math.random() * teachers.length)],
          type: types[Math.floor(Math.random() * types.length)],
          room: rooms[Math.floor(Math.random() * rooms.length)],
          startTime: `${hour}:00`,
          endTime: `${hour + 2}:00`,
          topic: `${types[Math.floor(Math.random() * types.length)]} darsi`,
          materials: [
            { id: 1, name: 'Dars prezentatsiyasi', type: 'ppt', icon: 'fas fa-file-powerpoint' },
            { id: 2, name: 'Qo\'llanma', type: 'pdf', icon: 'fas fa-file-pdf' }
          ]
        });
      }
      
      return lessons;
    },
    formatDate(date) {
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      return `${day}.${month}.${date.getFullYear()}`;
    },
    prevWeek() {
      this.currentWeek--;
      this.schedule = this.generateWeekSchedule(this.currentWeek);
    },
    nextWeek() {
      this.currentWeek++;
      this.schedule = this.generateWeekSchedule(this.currentWeek);
    },
    openTaskDetails(task) {
      this.selectedItem = { ...task, type: 'task' };
    },
    openLessonDetails(lesson) {
      this.selectedItem = { ...lesson, type: 'lesson' };
    },
    openSubjectDetails(subject) {
      this.selectedItem = { ...subject, type: 'subject' };
    },
    openDocument(doc) {
      this.selectedItem = { ...doc, type: 'document' };
    },
    closeModal() {
      this.selectedItem = null;
    },
    openAttachment(file) {
      if (file.type === 'pdf' || file.type === 'doc' || file.type === 'ppt') {
        // Bu yerda haqiqiy faylni ochish logikasi bo'lishi kerak
        alert(`${file.name} fayli ochilmoqda...`);
      } else {
        // Rasm yoki boshqa ko'rinadigan kontent uchun
        this.selectedImage = 'https://example.com/' + file.name;
      }
    },
    openMaterial(material) {
      // Materialni ochish logikasi
      alert(`${material.name} materialini yuklab olish...`);
    },
    closeImageModal() {
      this.selectedImage = null;
    }
  }
}
</script>

<style lang="scss" scoped>
.tasks-schedule {
  max-width: 100%;
  background-color: #f5f7fa;
  min-height: 100vh;
  padding-bottom: 20px;

  .mobile-nav {
    display: flex;
    background-color: #2c3ecc;
    position: sticky;
    top: 0;
    z-index: 100;

    button {
      flex: 1;
      padding: 12px 0;
      background: none;
      border: none;
      color: white;
      font-size: 0.9rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      cursor: pointer;
      transition: background-color 0.3s;

      &.active {
        background-color: rgba(255, 255, 255, 0.2);
        border-bottom: 3px solid white;
      }

      i {
        font-size: 1.2rem;
      }
    }
  }

  .content {
    padding: 15px;

    h2 {
      color: #1e3a8a;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1.3rem;

      i {
        color: #2c3ecc;
      }
    }
  }

  .tasks-section {
    .filter-options {
      display: flex;
      gap: 10px;
      margin-bottom: 15px;

      select {
        flex: 1;
        padding: 8px;
        border-radius: 6px;
        border: 1px solid #ddd;
        background-color: white;
      }

      .refresh-btn {
        background-color: #2c3ecc;
        color: white;
        border: none;
        border-radius: 6px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }

    .task-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .task-card {
      background-color: white;
      border-radius: 8px;
      padding: 15px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      cursor: pointer;
      transition: transform 0.2s;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      .task-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;

        h3 {
          font-size: 1.1rem;
          color: #1e3a8a;
          margin: 0;
        }

        .task-type {
          background-color: #e0e7ff;
          color: #2c3ecc;
          padding: 3px 8px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
        }
      }

      .task-subject {
        color: #64748b;
        font-size: 0.9rem;
        margin-bottom: 12px;
      }

      .task-footer {
        display: flex;
        justify-content: space-between;
        font-size: 0.85rem;

        .deadline {
          display: flex;
          align-items: center;
          gap: 5px;

          &.warning {
            color: #f59e0b;
          }

          &.danger {
            color: #ef4444;
          }
        }

        .points {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #10b981;
        }
      }
    }
  }

  .schedule-section {
    .week-selector {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      background-color: white;
      padding: 10px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

      span {
        font-weight: 500;
        color: #1e3a8a;
      }

      button {
        background-color: #e0e7ff;
        color: #2c3ecc;
        border: none;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }

    .schedule-view {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .schedule-day {
      background-color: white;
      border-radius: 8px;
      padding: 15px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

      h3 {
        color: #1e3a8a;
        margin: 0 0 10px 0;
        font-size: 1.1rem;
      }

      .lessons {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .lesson-card {
        display: flex;
        background-color: #f8fafc;
        border-radius: 6px;
        padding: 12px;
        cursor: pointer;
        transition: background-color 0.2s;

        &:hover {
          background-color: #e0e7ff;
        }

        .lesson-time {
          min-width: 80px;
          color: #64748b;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
        }

        .lesson-info {
          flex: 1;

          h4 {
            margin: 0 0 5px 0;
            font-size: 1rem;
            color: #1e293b;
          }

          p {
            margin: 0;
            font-size: 0.85rem;
            color: #64748b;

            &:first-of-type {
              margin-bottom: 3px;
            }
          }
        }

        .lesson-room {
          min-width: 50px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          color: #64748b;
          font-size: 0.85rem;
          gap: 5px;
        }
      }
    }
  }

  .subjects-section {
    .subject-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .subject-card {
      background-color: white;
      border-radius: 8px;
      padding: 15px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      cursor: pointer;
      transition: transform 0.2s;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      .subject-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;

        h3 {
          font-size: 1.1rem;
          color: #1e3a8a;
          margin: 0;
        }

        .subject-code {
          background-color: #e0e7ff;
          color: #2c3ecc;
          padding: 3px 8px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
        }
      }

      .subject-progress {
        margin-bottom: 10px;

        .progress-bar {
          height: 6px;
          background-color: #e2e8f0;
          border-radius: 3px;
          margin-bottom: 5px;
          overflow: hidden;

          .progress-fill {
            height: 100%;
            background-color: #2c3ecc;
            border-radius: 3px;
          }
        }

        span {
          font-size: 0.8rem;
          color: #64748b;
        }
      }

      .subject-resources {
        display: flex;
        gap: 15px;
        font-size: 0.85rem;

        span {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #64748b;

          i {
            color: #2c3ecc;
          }
        }
      }
    }
  }

  .documents-section {
    .document-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .document-card {
      display: flex;
      background-color: white;
      border-radius: 8px;
      padding: 15px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      cursor: pointer;
      transition: transform 0.2s;
      align-items: center;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      .doc-icon {
        width: 40px;
        height: 40px;
        background-color: #e0e7ff;
        color: #2c3ecc;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 15px;
        flex-shrink: 0;

        i {
          font-size: 1.2rem;
        }
      }

      .doc-info {
        flex: 1;

        h3 {
          margin: 0 0 5px 0;
          font-size: 1rem;
          color: #1e293b;
        }

        p {
          margin: 0 0 5px 0;
          font-size: 0.85rem;
          color: #64748b;
        }

        .doc-date {
          font-size: 0.8rem;
          color: #94a3b8;
        }
      }

      .download-btn {
        background-color: #e0e7ff;
        color: #2c3ecc;
        border: none;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex-shrink: 0;
      }
    }
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 15px;
  }

  .modal-content {
    background-color: white;
    border-radius: 10px;
    width: 100%;
    max-width: 500px;
    max-height: 90vh;
    overflow-y: auto;
    padding: 20px;
    position: relative;

    .close-modal {
      position: absolute;
      top: 15px;
      right: 15px;
      background: none;
      border: none;
      font-size: 1.2rem;
      color: #64748b;
      cursor: pointer;
    }

    h3 {
      color: #1e3a8a;
      margin-top: 0;
      margin-bottom: 20px;
      font-size: 1.3rem;
    }

    .detail-row {
      display: flex;
      margin-bottom: 12px;

      &.full-width {
        flex-direction: column;
      }

      .label {
        font-weight: 500;
        color: #334155;
        min-width: 100px;
      }

      .value {
        color: #64748b;
        flex: 1;
      }
    }

    .attachments, .materials {
      margin-top: 20px;

      h4 {
        color: #1e3a8a;
        margin-bottom: 10px;
        font-size: 1.1rem;
      }
    }

    .attachment-list, .material-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .attachment, .material {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      background-color: #f8fafc;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background-color: #e0e7ff;
      }

      i {
        color: #2c3ecc;
      }
    }

    .progress-container {
      margin: 20px 0;

      .progress-info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
        font-size: 0.9rem;
      }

      .progress-bar {
        height: 8px;
        background-color: #e2e8f0;
        border-radius: 4px;
        overflow: hidden;

        .progress-fill {
          height: 100%;
          background-color: #2c3ecc;
          border-radius: 4px;
        }
      }
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 10px;
      margin: 20px 0;

      .stat {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f8fafc;
        padding: 10px;
        border-radius: 6px;

        i {
          font-size: 1.2rem;
          color: #2c3ecc;
          margin-bottom: 5px;
        }

        span {
          font-size: 0.8rem;
          text-align: center;
          color: #64748b;
        }
      }
    }

    .document-preview {
      margin: 20px 0;
      background-color: #f8fafc;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 200px;

      img {
        max-width: 100%;
        max-height: 300px;
        border-radius: 6px;
      }

      .no-preview {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #94a3b8;

        i {
          font-size: 3rem;
          margin-bottom: 10px;
        }
      }
    }

    .action-buttons {
      display: flex;
      gap: 10px;
      margin-top: 20px;

      .btn {
        flex: 1;
        padding: 10px;
        border-radius: 6px;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        cursor: pointer;
        transition: opacity 0.2s;

        &.primary {
          background-color: #2c3ecc;
          color: white;
          border: none;
        }

        &.secondary {
          background-color: white;
          color: #2c3ecc;
          border: 1px solid #2c3ecc;
        }

        &:hover {
          opacity: 0.9;
        }
      }
    }
  }

  .image-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1001;
    padding: 20px;

    .image-container {
      position: relative;
      max-width: 100%;
      max-height: 100%;

      img {
        max-width: 100%;
        max-height: 90vh;
        border-radius: 8px;
      }

      .close-btn {
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
      }
    }
  }
}

// @media (min-width: 768px) {
  .tasks-schedule {
    .mobile-nav {
      display: none;
    }

    .content {
      padding: 25px;
    }

    .task-list, .schedule-view, .subject-list, .document-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 15px;
    }

    .schedule-day {
      grid-column: span 1;
    }
  }
// }
</style>
<template>
  <div class="post-creator">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <div class="form-wrapper">
      <div class="form-container">
        <h2 class="title">
          <i class="fas fa-edit"></i>
          Yangi Post Yaratish
        </h2>

        <form @submit.prevent="createPost" class="form">
          <!-- Post Content -->
          <div class="form-group">
            <label class="label">Post Sarlavhasi</label>
            <input v-model="form.title" type="text" class="input" placeholder="Post sarlavhasini kiriting..." required>
          </div>

          <div class="form-group">
            <label class="label">Post Matni</label>
            <textarea v-model="form.content" class="textarea" placeholder="Post matnini kiriting..." rows="6"
              required></textarea>
            <div class="counter">{{ form.content.length }}/2000</div>
          </div>

          <div class="form-group">
            <label class="label">Muallif nomi</label>
            <input v-model="form.authorName" type="text" class="input" placeholder="Muallif nomini kiriting..."
              required>
          </div>

          <!-- Media Upload -->
          <div class="form-group">
            <label class="label">Media qO‘shish</label>
            <div class="upload-area" @click="$refs.fileInput.click()">
              <input ref="fileInput" type="file" multiple accept="image/*,video/*" @change="handleFileUpload" hidden>
              <i class="fas fa-cloud-upload-alt"></i>
              <span>Rasm yoki video yuklang</span>
            </div>

            <div v-if="mediaFiles.length" class="media-preview">
              <div v-for="(file, index) in mediaFiles" :key="index" class="media-item">
                <img v-if="file.type === 'image'" :src="file.preview">
                <video v-else :src="file.preview" controls></video>
                <button type="button" @click="removeMedia(index)" class="remove-btn">
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Scheduling -->
          <div class="form-group">
            <div class="schedule-toggle">
              <label class="toggle">
                <input type="checkbox" v-model="schedulePost">
                <span class="slider"></span>
              </label>
              <span>Vaqt belgilash</span>
            </div>

            <input v-if="schedulePost" v-model="scheduleDate" type="datetime-local" class="input">
          </div>

          <!-- Action Buttons -->
          <div class="actions">
            <button type="button" @click="saveDraft" class="btn btn-secondary" :disabled="loading">
              <i class="fas fa-save"></i>
              Qoralama
            </button>

            <button type="submit" class="btn btn-primary" :disabled="!canSubmit || loading">
              <i v-if="loading" class="fas fa-spinner fa-spin"></i>
              <i v-else class="fas fa-paper-plane"></i>
              {{ schedulePost ? 'Vaqt belgilab yuborish' : 'Darhol yuborish' }}
            </button>
          </div>
        </form>
      </div>
      <div class="platform-section">
        <div class="form-group">
          <label class="label">Platformalarni tanlang</label>
          <div class="platforms">
            <div v-for="platform in platforms" :key="platform.id" class="platform"
              :class="{ active: platform.selected }" @click="togglePlatform(platform.id)">
              <i :class="platform.icon"></i>
              <span>{{ platform.name }}</span>
              <input type="checkbox" :checked="platform.selected">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div v-if="showModal" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="success-icon">
          <i class="fas fa-check"></i>
        </div>
        <h3>Muvaffaqiyatli!</h3>
        <p>Post {{ selectedPlatforms.length }} ta platformaga yuborildi</p>
        <button @click="closeModal" class="btn btn-primary">Yaxshi</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, reactive } from 'vue'
// import {sendTelegramMessage}  from '../../bot'

export default {
  name: 'PostCreator',
  setup() {
    const form = reactive({
      title: '',
      content: '',
      authorName: ''
    })

    const platforms = ref([
      { id: 'telegram', name: 'Telegram', icon: 'fab fa-telegram-plane', selected: false },
      { id: 'instagram', name: 'Instagram', icon: 'fab fa-instagram', selected: false },
      { id: 'facebook', name: 'Facebook', icon: 'fab fa-facebook-f', selected: false }
    ])

    const mediaFiles = ref([])
    const schedulePost = ref(false)
    const scheduleDate = ref('')
    const loading = ref(false)
    const showModal = ref(false)

    const selectedPlatforms = computed(() =>
      platforms.value.filter(p => p.selected)
    )

    const canSubmit = computed(() =>
      form.title.trim() &&
      form.content.trim() &&
      form.authorName.trim() &&
      selectedPlatforms.value.length > 0
    )

    const togglePlatform = (id) => {
      const platform = platforms.value.find(p => p.id === id)
      if (platform) platform.selected = !platform.selected
    }

    const handleFileUpload = (e) => {
      Array.from(e.target.files).forEach(file => {
        mediaFiles.value.push({
          file,
          type: file.type.startsWith('image/') ? 'image' : 'video',
          preview: URL.createObjectURL(file)
        })
      })
    }

    const removeMedia = (index) => {
      URL.revokeObjectURL(mediaFiles.value[index].preview)
      mediaFiles.value.splice(index, 1)
    }

    const createPost = async () => {
      if (!canSubmit.value) return

      loading.value = true

      try {
        // API ga yuborish
        const token = localStorage.getItem('authToken') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhjZTRlMTI3YzgwZDMxNTQ0ODY4YTRkIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTc1ODM1MDkxNSwiZXhwIjoxNzU4MzU0NTE1fQ.hwupHBtwFKLek2q4jp3QKDY9lBoqx1V1Epvqcte_xJc'

        const response = await fetch('http://localhost:3000/api/posts', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: form.title,
            content: form.content,
            authorName: form.authorName,
          }),
          // formData: mediaFiles.value.length ? mediaFiles.value[0].file : null
        })

        // if (platforms.includes("telegram")) {
        //   await sendTelegramMessage({ chatId: '-1003068129429', token: '8492751692:AAHUAo6V27GRaCatJ38T4rxLG2e9xyyWJVs', text: form.content })
        // }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()
        console.log('Post yaratildi:', result)

        // Reset form
        form.title = ''
        form.content = ''
        form.authorName = ''
        mediaFiles.value.forEach(m => URL.revokeObjectURL(m.preview))
        mediaFiles.value = []
        schedulePost.value = false
        scheduleDate.value = ''
        platforms.value.forEach(p => p.selected = false)

        showModal.value = true
      } catch (error) {
        console.error('Post yaratishda xatolik:', error)
        alert('Post yaratishda xatolik yuz berdi. Iltimos qaytadan urinib ko\'ring.')
      } finally {
        loading.value = false
      }
    }

    const saveDraft = () => {
      localStorage.setItem('postDraft', JSON.stringify({
        ...form,
        platforms: selectedPlatforms.value.map(p => p.id),
        timestamp: new Date().toISOString()
      }))
      alert('Qoralama saqlandi!')
    }

    const closeModal = () => {
      showModal.value = false
    }

    return {
      form,
      platforms,
      mediaFiles,
      schedulePost,
      scheduleDate,
      loading,
      showModal,
      selectedPlatforms,
      canSubmit,
      togglePlatform,
      handleFileUpload,
      removeMedia,
      createPost,
      saveDraft,
      closeModal
    }
  }
}
</script>

<style scoped>
.form-wrapper {
  display: grid;
  grid-template-columns: 4fr 2fr;
  gap: 60px;
  padding: 0 60px;
}

.post-creator {
  min-height: 100vh;
  padding: 2rem 1rem;
  margin-top: 120px;
  flex-grow: 1;
}

.form-container {
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  width: 100%;
  padding: 2rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}

.platform-section {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 2rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.label {
  font-weight: 600;
  color: #374151;
  font-size: 0.95rem;
}

.input,
.textarea {
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafafa;
}

.input:focus,
.textarea:focus {
  outline: none;
  border-color: #667eea;
  background: white;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.textarea {
  resize: vertical;
  min-height: 120px;
}

.counter {
  align-self: flex-end;
  font-size: 0.85rem;
  color: #6b7280;
}

/* Platforms */
.platforms {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.platform {
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #fafafa;
  gap: 0.75rem;
}

.platform:hover {
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
}

.platform.active {
  border-color: #667eea;
  background: rgba(102, 126, 234, 0.05);
}

.platform i {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  background: linear-gradient(to right, rgba(0, 69, 94, 0.8705882353), rgba(27, 106, 233, 0.9333333333));
  color: white;
}

.platform span {
  flex: 1;
  font-weight: 600;
  color: #374151;
}

.platform input {
  width: 20px;
  height: 20px;
  accent-color: #667eea;
}

/* Media Upload */
.upload-area {
  border: 2px dashed #d1d5db;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #fafafa;
}

.upload-area:hover {
  border-color: #667eea;
  background: rgba(102, 126, 234, 0.02);
}

.upload-area i {
  font-size: 2.5rem;
  color: #9ca3af;
  display: block;
  margin-bottom: 0.5rem;
}

.upload-area span {
  display: block;
  font-weight: 600;
  color: #374151;
}

.media-preview {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.media-item {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: #f3f4f6;
}

.media-item img,
.media-item video {
  width: 100%;
  height: 120px;
  object-fit: cover;
}

.remove-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 50%;
  background: rgba(239, 68, 68, 0.9);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Schedule Toggle */
.schedule-toggle {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.toggle {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.3s;
  border-radius: 24px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.3s;
  border-radius: 50%;
}

input:checked+.slider {
  background-color: #667eea;
}

input:checked+.slider:before {
  transform: translateX(26px);
}

.schedule-toggle span {
  font-weight: 600;
  color: #374151;
}

/* Buttons */
.actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.btn-secondary {
  background: #f3f4f6;
  color: #374151;
  border: 2px solid #e5e7eb;
}

.btn-secondary:hover:not(:disabled) {
  background: #e5e7eb;
}

/* Modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.success-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10b981, #059669);
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
}

.modal-content h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.modal-content p {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .form-wrapper {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 0 20px;
  }
}

@media (max-width: 768px) {
  .post-creator {
    padding: 1rem;
    margin-top: 60px;
  }

  .form-container,
  .platform-section {
    padding: 1.5rem;
  }

  .form-wrapper {
    padding: 0;
  }

  .platforms {
    gap: 0.75rem;
  }

  .actions {
    flex-direction: column;
  }

  .media-preview {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
}
</style>
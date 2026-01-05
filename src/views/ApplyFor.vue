    <template>
        <div class="dormitory-form">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

            <div class="form-wrapper">
                <div class="form-container">
                    <h2 class="title">
                        <i class="fas fa-home"></i>
                        Yotoqxona uchun ariza
                    </h2>

                    <div v-if="submitted" class="success-message">
                        <div class="success-icon">
                            <i class="fas fa-check"></i>
                        </div>
                        <h3>✅ Arizangiz muvaffaqiyatli yuborildi!</h3>
                        <p>Tez orada siz bilan bog'lanamiz. Telegram: <a href="https://t.me/sharq_qabul"
                                target="_blank">@sharq_qabul</a></p>
                    </div>

                    <form @submit.prevent="submitForm" v-if="!submitted" class="form">
                        <!-- Shaxsiy ma'lumotlar -->
                        <div class="section-title">
                            <i class="fas fa-user"></i>
                            <span>Shaxsiy ma'lumotlar</span>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label class="label">Familiya *</label>
                                <input v-model="form.lastName" type="text" class="input" :class="{ error: errors.lastName }"
                                    placeholder="Familiyangizni kiriting" required>
                                <div v-if="errors.lastName" class="error-message">{{ errors.lastName }}</div>
                            </div>

                            <div class="form-group">
                                <label class="label">Ism *</label>
                                <input v-model="form.firstName" type="text" class="input"
                                    :class="{ error: errors.firstName }" placeholder="Ismingizni kiriting" required>
                                <div v-if="errors.firstName" class="error-message">{{ errors.firstName }}</div>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label class="label">Otasining ismi</label>
                                <input v-model="form.middleName" type="text" class="input"
                                    placeholder="Otangizning ismini kiriting">
                            </div>

                            <div class="form-group">
                                <label class="label">Tug'ilgan sana *</label>
                                <input v-model="form.birthDate" type="date" class="input"
                                    :class="{ error: errors.birthDate }" required>
                                <div v-if="errors.birthDate" class="error-message">{{ errors.birthDate }}</div>
                            </div>
                        </div>

                        <!-- Pasport ma'lumotlari -->
                        <div class="section-title">
                            <i class="fas fa-id-card"></i>
                            <span>Pasport ma'lumotlari</span>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label class="label">Pasport seriyasi *</label>
                                <input v-model="form.passportSeries" type="text" class="input"
                                    :class="{ error: errors.passportSeries }" placeholder="AA" maxlength="2" required>
                                <div v-if="errors.passportSeries" class="error-message">{{ errors.passportSeries }}</div>
                            </div>

                            <div class="form-group">
                                <label class="label">Pasport raqami *</label>
                                <input v-model="form.passportNumber" type="text" class="input"
                                    :class="{ error: errors.passportNumber }" placeholder="1234567" maxlength="7" required>
                                <div v-if="errors.passportNumber" class="error-message">{{ errors.passportNumber }}</div>
                            </div>

                            <div class="form-group">
                                <label class="label">JShShIR *</label>
                                <input v-model="form.jshshir" type="text" class="input"
                                    :class="{ error: errors.jshshir }" placeholder="1234567890123" maxlength="14" required>
                                <div v-if="errors.jshshir" class="error-message">{{ errors.jshshir }}</div>
                            </div>

                        </div>

                        <!-- Aloqa ma'lumotlari -->
                        <div class="section-title">
                            <i class="fas fa-phone"></i>        
                            <span>Aloqa ma'lumotlari</span>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label class="label">Telefon raqami *</label>
                                <input v-model="form.phone" type="tel" class="input" :class="{ error: errors.phone }"
                                    placeholder="+998 90 123 45 67" required>
                                <div v-if="errors.phone" class="error-message">{{ errors.phone }}</div>
                            </div>
                        </div>

                        <!-- Yashash manzili -->
                        <div class="form-group">
                            <label class="label">Hozirgi yashash manzili *</label>
                            <textarea v-model="form.currentAddress" class="textarea"
                                :class="{ error: errors.currentAddress }"
                                placeholder="Viloyat, tuman/shahar, kO‘cha, uy raqami..." rows="3" required></textarea>
                            <div v-if="errors.currentAddress" class="error-message">{{ errors.currentAddress }}</div>
                        </div>

                        <!-- Hujjatlar yuklash -->
                        <div class="section-title">
                            <i class="fas fa-paperclip"></i>
                            <span>Hujjatlar yuklash</span>
                        </div>

                        <div class="form-group">
                            <label class="label">Pasport nusxasi (oldi va orqa tomoni) *</label>
                            <div class="upload-area" @click="$refs.passportInput.click()">
                                <input ref="passportInput" type="file" multiple accept="image/*,.pdf"
                                    @change="handleFileUpload($event, 'passportFiles')" hidden>
                                <i class="fas fa-cloud-upload-alt"></i>
                                <span>Pasport nusxalarini yuklang</span>
                                <small>PNG, JPG yoki PDF formatida</small>
                            </div>

                            <div v-if="form.passportFiles.length" class="file-preview">
                                <div v-for="(file, index) in form.passportFiles" :key="index" class="file-item">
                                    <i class="fas fa-file-image"></i>
                                    <span>{{ file.name }}</span>
                                    <button type="button" @click="removeFile(index, 'passportFiles')" class="remove-btn">
                                        <i class="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- QO‘shimcha ma'lumotlar -->
                        <div class="form-group">
                            <label class="label">QO‘shimcha ma'lumotlar</label>
                            <textarea v-model="form.additionalInfo" class="textarea"
                                placeholder="Yotoqxonada qolish sabablaringiz, maxsus ehtiyojlaringiz haqida yozing..."
                                rows="4"></textarea>
                            <div class="counter">{{ form.additionalInfo.length }}/500</div>
                        </div>

                        <!-- Rozlik -->
                        <div class="agreement-group">
                            <label class="checkbox-container">
                                <input type="checkbox" v-model="form.agreement" required>
                                <span class="checkmark"></span>
                                <span class="agreement-text">
                                    Men barcha ma'lumotlarning tO‘g'riligini tasdiqlaymen va yotoqxona qoidalariga rioya
                                    qilishga roziman *
                                </span>
                            </label>
                        </div>

                        <!-- Action Buttons -->
                        <div class="actions">
                            <button type="button" @click="saveDraft" class="btn btn-secondary" :disabled="loading">
                                <i class="fas fa-save"></i>
                                Qoralama saqlash
                            </button>

                            <button type="submit" class="btn btn-primary" :disabled="!isFormValid || loading">
                                <i v-if="loading" class="fas fa-spinner fa-spin"></i>
                                <i v-else class="fas fa-paper-plane"></i>
                                Arizani yuborish
                            </button>
                        </div>
                    </form>
                </div>

                <!-- QO‘llanma bO‘limi -->
                <div class="info-section">
                    <div class="info-card">
                        <h3>
                            <i class="fas fa-info-circle"></i>
                            Muhim eslatmalar
                        </h3>
                        <ul>
                            <li>
                                <i class="fas fa-check"></i>
                                Barcha kerakli hujjatlarni tO‘g'ri formatda yuklang
                            </li>
                            <li>
                                <i class="fas fa-check"></i>
                                Telefon raqamingiz faol va ishlaydigan bO‘lishi kerak
                            </li>
                            <li>
                                <i class="fas fa-check"></i>
                                Hujjatlar tiniq va aniq holatda bO‘lishi shart
                            </li>
                            <li>
                                <i class="fas fa-check"></i>
                                Yotoqxona joylashtirish rO‘yxati shakllangach, hujjatlar saralanadi
                            </li>
                        </ul>
                    </div>

                    <div class="contact-card">
                        <h3>
                            <i class="fab fa-telegram"></i>
                            Bog'lanish
                        </h3>
                        <p>QO‘shimcha savollar uchun:</p>
                        <a href="https://t.me/sharq_qabul" target="_blank" class="telegram-btn">
                            <i class="fab fa-telegram-plane"></i>
                            @sharq_qabul
                        </a>
                    </div>

                    <div class="progress-card">
                        <h3>
                            <i class="fas fa-tasks"></i>
                            Jarayon bosqichlari
                        </h3>
                        <div class="steps">
                            <div class="step" :class="{ active: currentStep >= 1, completed: currentStep > 1 }">
                                <div class="step-number">1</div>
                                <span>Ariza tO‘ldirish</span>
                            </div>
                            <div class="step" :class="{ active: currentStep >= 2, completed: currentStep > 2 }">
                                <div class="step-number">2</div>
                                <span>Hujjat saralash</span>
                            </div>
                            <div class="step" :class="{ active: currentStep >= 3, completed: currentStep > 3 }">
                                <div class="step-number">3</div>
                                <span>Natija e'lon qilish</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <script>
    import { ref, computed, reactive } from 'vue'

    export default {
        name: 'DormitoryApplication',
        setup() {
            const form = reactive({
                lastName: '',
                jshshir: '',
                firstName: '',
                middleName: '',
                birthDate: '',
                passportSeries: '',
                passportNumber: '',
                phone: '',
                currentAddress: '',
                passportFiles: [],
                additionalInfo: '',
                agreement: false
            })

            const errors = ref({})
            const submitted = ref(false)
            const loading = ref(false)
            const currentStep = ref(1)

            const isFormValid = computed(() => {
                return form.lastName.trim() &&
                    form.firstName.trim() &&
                    form.birthDate &&
                    form.passportSeries.trim() &&
                    form.passportNumber.trim() &&
                    form.phone.trim() &&
                    form.currentAddress.trim() &&
                    form.passportFiles.length > 0 &&
                    form.agreement
            })

            const validateForm = () => {
                errors.value = {}

                if (!form.lastName.trim()) {
                    errors.value.lastName = 'Familiya majburiy maydon'
                }
                if (!form.firstName.trim()) {
                    errors.value.firstName = 'Ism majburiy maydon'
                }
                if (!form.birthDate) {
                    errors.value.birthDate = 'Tug\'ilgan sana majburiy maydon'
                }
                if (!form.passportSeries.trim()) {
                    errors.value.passportSeries = 'Pasport seriyasi majburiy maydon'
                } else if (form.passportSeries.length !== 2) {
                    errors.value.passportSeries = 'Pasport seriyasi 2 ta harf bo\'lishi kerak'
                }
                if (!form.passportNumber.trim()) {
                    errors.value.passportNumber = 'Pasport raqami majburiy maydon'
                } else if (form.passportNumber.length !== 7) {
                    errors.value.passportNumber = 'Pasport raqami 7 ta raqam bo\'lishi kerak'
                }
                if (!form.phone.trim()) {
                    errors.value.phone = 'Telefon raqami majburiy maydon'
                }
                if (!form.currentAddress.trim()) {
                    errors.value.currentAddress = 'Yashash manzili majburiy maydon'
                }

                return Object.keys(errors.value).length === 0
            }

            const handleFileUpload = (event, fieldName) => {
                const files = Array.from(event.target.files)
                form[fieldName] = [...form[fieldName], ...files]
            }

            const removeFile = (index, fieldName) => {
                form[fieldName].splice(index, 1)
            }

            const submitForm = async () => {
                if (!validateForm()) {
                    return
                }

                loading.value = true

                try {
                    // API ga yuborish simulyatsiyasi
                    await new Promise(resolve => setTimeout(resolve, 2000))

                    console.log('Ariza ma\'lumotlari:', form)

                    // Formani tozalash
                    Object.keys(form).forEach(key => {
                        if (Array.isArray(form[key])) {
                            form[key] = []
                        } else if (typeof form[key] === 'boolean') {
                            form[key] = false
                        } else {
                            form[key] = ''
                        }
                    })
                    console.log('Tozalangan forma:', form)

                    submitted.value = true
                    currentStep.value = 2
                } catch (error) {
                    console.error('Arizani yuborishda xatolik:', error)
                    alert('Arizani yuborishda xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.')
                } finally {
                    loading.value = false
                }
            }

            const saveDraft = () => {
                const draftData = {
                    ...form,
                    timestamp: new Date().toISOString()
                }

                // localStorage O‘rniga session ma'lumotlaridan foydalanish
                window.dormitoryDraft = draftData
                alert('Qoralama saqlandi!')
            }

            // Qoralama ma'lumotlarni yuklash
            const loadDraft = () => {
                if (window.dormitoryDraft) {
                    Object.assign(form, window.dormitoryDraft)
                }
            }

            // Component yuklanganida qoralama yuklash
            loadDraft()

            return {
                form,
                errors,
                submitted,
                loading,
                currentStep,
                isFormValid,
                handleFileUpload,
                removeFile,
                submitForm,
                saveDraft
            }
        }
    }
    </script>

    <style scoped>
    .dormitory-form {
        min-height: 100vh;
        padding: 2rem 1rem;
        margin-top: 120px;
        flex-grow: 1;
    }

    .form-wrapper {
        display: grid;
        grid-template-columns: 4fr 2fr;
        gap: 60px;
        padding: 0 60px;
        max-width: 1400px;
        margin: 0 auto;
    }

    .form-container {
        background: white;
        border-radius: 20px;
        width: 100%;
        padding: 2rem;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    }

    .info-section {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
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

    .section-title {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 1.25rem;
        font-weight: 600;
        color: #374151;
        margin: 2rem 0 1rem 0;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid #f3f4f6;
    }

    .section-title:first-of-type {
        margin-top: 0;
    }

    .form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
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

    .input.error,
    .textarea.error {
        border-color: #ef4444;
        background: #fef2f2;
    }

    .error-message {
        color: #ef4444;
        font-size: 0.85rem;
        font-weight: 500;
    }

    .textarea {
        resize: vertical;
        min-height: 80px;
    }

    .counter {
        align-self: flex-end;
        font-size: 0.85rem;
        color: #6b7280;
    }

    /* File Upload */
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
        margin-bottom: 0.25rem;
    }

    .upload-area small {
        color: #6b7280;
        font-size: 0.85rem;
    }

    .file-preview {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-top: 1rem;
    }

    .file-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem;
        background: #f3f4f6;
        border-radius: 8px;
    }

    .file-item i {
        color: #667eea;
        font-size: 1.25rem;
    }

    .file-item span {
        flex: 1;
        font-weight: 500;
        color: #374151;
    }

    .remove-btn {
        width: 24px;
        height: 24px;
        border: none;
        border-radius: 50%;
        background: #ef4444;
        color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
    }

    /* Checkbox */
    .agreement-group {
        margin: 1.5rem 0;
    }

    .checkbox-container {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        cursor: pointer;
        position: relative;
    }

    .checkbox-container input {
        opacity: 0;
        position: absolute;
        width: 0;
        height: 0;
    }

    .checkmark {
        width: 20px;
        height: 20px;
        background: #fafafa;
        border: 2px solid #e5e7eb;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        flex-shrink: 0;
        margin-top: 2px;
    }

    .checkmark:after {
        content: "\f00c";
        font-weight: 900;
        color: white;
        font-size: 0.75rem;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .checkbox-container input:checked+.checkmark {
        background: #667eea;
        border-color: #667eea;
    }

    .checkbox-container input:checked+.checkmark:after {
        opacity: 1;
    }

    .agreement-text {
        font-size: 0.95rem;
        color: #374151;
        line-height: 1.5;
    }

    /* Success Message */
    .success-message {
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        color: white;
        padding: 2rem;
        border-radius: 20px;
        text-align: center;
        margin-bottom: 2rem;
    }

    .success-icon {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        margin: 0 auto 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
    }

    .success-message h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    .success-message a {
        color: white;
        text-decoration: underline;
    }

    /* Buttons */
    .actions {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
        margin-top: 2rem;
        padding-top: 1.5rem;
        border-top: 2px solid #f3f4f6;
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

    /* Info Cards */
    .info-card,
    .contact-card,
    .progress-card {
        background: white;
        border-radius: 20px;
        padding: 1.5rem;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
    }

    .info-card h3,
    .contact-card h3,
    .progress-card h3 {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1.1rem;
        font-weight: 600;
        color: #374151;
        margin-bottom: 1rem;
    }

    .info-card ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .info-card li {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.5rem 0;
        color: #6b7280;
        font-size: 0.95rem;
    }

    .info-card li i {
        color: #10b981;
        width: 16px;
    }

    .telegram-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.5rem;
        background: linear-gradient(135deg, #0088cc, #006ba6);
        color: white;
        text-decoration: none;
        border-radius: 12px;
        font-weight: 600;
        transition: all 0.3s ease;
        margin-top: 1rem;
    }

    .telegram-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 136, 204, 0.3);
    }

    /* Steps */
    .steps {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .step {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.75rem;
        border-radius: 12px;
        transition: all 0.3s ease;
    }

    .step.active {
        background: rgba(102, 126, 234, 0.1);
    }

    .step.completed {
        background: rgba(16, 185, 129, 0.1);
    }

    .step-number {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: #e5e7eb;
        color: #6b7280;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 0.9rem;
    }

    .step.active .step-number {
        background: #667eea;
        color: white;
    }

    .step.completed .step-number {
        background: #10b981;
        color: white;
    }

    .step span {
        color: #374151;
        font-weight: 500;
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
        .dormitory-form {
            padding: 1rem;
            margin-top: 60px;
        }

        .form-container,
        .info-card,
        .contact-card,
        .progress-card {
            padding: 1.5rem;
        }

        .form-wrapper {
            padding: 0;
        }

        .form-row {
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        .actions {
            flex-direction: column;
        }

        .title {
            font-size: 1.5rem;
        }

        .section-title {
            font-size: 1.1rem;
        }
    }

    @media (max-width: 480px) {
        .form-container {
            padding: 1rem;
        }

        .upload-area {
            padding: 1.5rem;
        }

        .upload-area i {
            font-size: 2rem;
        }

        .btn {
            padding: 0.6rem 1.25rem;
            font-size: 0.9rem;
        }
    }
    </style>
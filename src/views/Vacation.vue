<template>
    <div class="mx-auto rounded-xl">
        <h1 class="text-3xl font-bold text-center page-title">
            Ishga ariza topshirish
        </h1>

        <form class="space-y-5 page-block" @submit.prevent="submitForm">
            <div class="w-full">
                <label class="block mb-1 font-medium text-gray-700 form-group__label">To'liq ism *</label>
                <input v-model="form.fullName" type="text" placeholder="To'liq ismingizni kiriting"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 form-control"
                    :class="{ 'border-red-500': errors.fullName }" />
                <span v-if="errors.fullName" class="text-red-500 text-sm">{{ errors.fullName }}</span>
            </div>
            <div class="top flex gap-4 w-100">

                <!-- Email -->
                <div class="w-full">
                    <label class="block mb-1 font-medium text-gray-700 form-group__label">Elektron pochta *</label>
                    <input v-model="form.email" type="email" placeholder="sizning@pochta.com"
                        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 form-control"
                        :class="{ 'border-red-500': errors.email }" />
                    <span v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</span>
                </div>

                <!-- Telefon -->
                <div class="w-full">
                    <label class="block mb-1 font-medium text-gray-700 form-group__label">Telefon raqam *</label>
                    <input v-model="form.phone" type="tel" placeholder="+998 XX XXX XX XX"
                        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 form-control"
                        :class="{ 'border-red-500': errors.phone }" />
                    <span v-if="errors.phone" class="text-red-500 text-sm">{{ errors.phone }}</span>
                </div>

                <!-- Yo'nalish -->
                <div class="w-full">
                    <label class="block mb-1 font-medium text-gray-700 form-group__label">Yo'nalish *</label>
                    <select v-model="form.field"
                        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 form-control"
                        :class="{ 'border-red-500': errors.field }">
                        <option value="">Yo'nalishni tanlang</option>
                        <option value="employee">Xodim</option>
                        <option value="teacher">O'qituvchi</option>
                    </select>
                    <span v-if="errors.field" class="text-red-500 text-sm">{{ errors.field }}</span>
                </div>
            </div>

            <!-- CV yuklash -->
            <div class="form-group">
                <label class="form-group__label">Rezyume (CV) ni PDF formatda yuklang: *</label>
                <div class="form-uploader">
                    <label class="form-uploader__area" :class="{ 'border-red-500': errors.cvFile }">
                        <i class="fa-solid fa-file-arrow-down"></i>
                        {{ cvFileName || 'Faylni yuklang yoki tashlang' }}
                        <input type="file" accept="application/pdf" hidden @change="handleFileUpload" />
                    </label>
                    <span v-if="errors.cvFile" class="text-red-500 text-sm">{{ errors.cvFile }}</span>
                </div>
            </div>

            <!-- Motivatsion xat -->
            <div class="motivation-letter">
                <label class="block mb-1 font-medium text-gray-700 form-group__label">Motivatsion xat *</label>
                <textarea v-model="form.motivation" rows="5" placeholder="Motivatsion xatingizni yozing..."
                    class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 form-control"
                    :class="{ 'border-red-500': errors.motivation }"></textarea>
                <span v-if="errors.motivation" class="text-red-500 text-sm">{{ errors.motivation }}</span>
            </div>

            <!-- Yuborish -->
            <button type="submit"
                class="w-full py-3 bg-gradient-to-r from-[#0045DE] to-[#1B6AE9] text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition form-control">
                Arizani yuborish
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Vacation',
    data() {
        return {
            form: {
                fullName: '',
                email: '',
                phone: '',
                field: '',
                motivation: '',
                cvFile: null,
            },
            cvFileName: '',
            errors: {},
        };
    },
    methods: {
        handleFileUpload(event) {
            const file = event.target.files[0];
            if (file) {
                if (file.type !== 'application/pdf') {
                    this.errors = { ...this.errors, cvFile: 'Faqat PDF formatdagi fayl qabul qilinadi' };
                    this.form.cvFile = null;
                    this.cvFileName = '';
                    return;
                }
                if (file.size > 5 * 1024 * 1024) {
                    this.errors = { ...this.errors, cvFile: 'Fayl hajmi 5 MB dan oshmasligi kerak' };
                    this.form.cvFile = null;
                    this.cvFileName = '';
                    return;
                }
                this.form.cvFile = file;
                this.cvFileName = file.name;
                const { cvFile, ...rest } = this.errors;
                this.errors = rest;
            }
        },
        validate() {
            const errors = {};

            if (!this.form.fullName.trim()) {
                errors.fullName = "To'liq ism kiritilishi shart";
            } else if (this.form.fullName.trim().length < 3) {
                errors.fullName = "Ism kamida 3 ta belgidan iborat bo'lishi kerak";
            }

            if (!this.form.email.trim()) {
                errors.email = 'Elektron pochta kiritilishi shart';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
                errors.email = "Elektron pochta formati noto'g'ri";
            }

            if (!this.form.phone.trim()) {
                errors.phone = 'Telefon raqam kiritilishi shart';
            } else if (!/^\+998\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/.test(this.form.phone)) {
                errors.phone = "Telefon raqam formati: +998 XX XXX XX XX";
            }

            if (!this.form.field) {
                errors.field = "Yo'nalish tanlanishi shart";
            }

            if (!this.form.cvFile) {
                errors.cvFile = 'Rezyume (CV) yuklanishi shart';
            }

            if (!this.form.motivation.trim()) {
                errors.motivation = 'Motivatsion xat yozilishi shart';
            } else if (this.form.motivation.trim().length < 20) {
                errors.motivation = "Motivatsion xat kamida 20 ta belgidan iborat bo'lishi kerak";
            }

            this.errors = errors;
            return Object.keys(errors).length === 0;
        },
        submitForm() {
            if (this.validate()) {
                const formData = new FormData();
                formData.append('full_name', this.form.fullName);
                formData.append('email', this.form.email);
                formData.append('phone', this.form.phone);
                formData.append('field', this.form.field);
                formData.append('cv_file', this.form.cvFile);
                formData.append('motivation', this.form.motivation);

                console.log('Ariza yuborildi:', this.form);
                alert('Arizangiz muvaffaqiyatli yuborildi!');

                this.form = {
                    fullName: '',
                    email: '',
                    phone: '',
                    field: '',
                    motivation: '',
                    cvFile: null,
                };
                this.cvFileName = '';
                this.errors = {};
            }
        },
    },
};
</script>

<style>
.form-control {
    height: 44px;
    padding: 0 14px;
    border: 1px solid rgba(223, 228, 237, 1);
    background: rgba(239, 243, 249, 1);
    color: rgba(1, 11, 27, 1);
    font-size: 16px;
    line-height: 140%;
    border-radius: 12px;
    appearance: none;
}

.form-control.border-red-500 {
    border-color: #ef4444;
}

.motivation-letter textarea {
    height: 80px;
}

.form-group__label {
    color: rgba(71, 82, 98, 1);
    font-size: 16px;
    line-height: 140%;
    margin-bottom: 4px;
    display: block;
}

.form-control:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25);
}

.form-group {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.form-uploader__area {
    border-radius: 10px;
    border: 1px dashed rgba(150, 159, 173, 1);
    background: var(--black-9);
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: var(--black-2);
    font-family: "MuseoSansCyrl-500", sans-serif;
    font-size: var(--size-text-18);
    line-height: 140%;
    letter-spacing: -0.18px;
    cursor: pointer;
}

.form-uploader__area.border-red-500 {
    border-color: #ef4444;
}

.form-uploader__area i {
    font-size: 24px;
    color: rgba(42, 64, 122, 1);
}

.text-red-500 {
    color: #ef4444;
}

.text-sm {
    font-size: 13px;
    margin-top: 4px;
    display: block;
}
</style>

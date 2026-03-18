<template>
    <div class="mx-auto rounded-xl">
        <h1 class="text-3xl font-bold text-center page-title">
            Ro‘yxatdan o‘tish
        </h1>

        <!-- Muvaffaqiyat xabari -->
        <div v-if="success" class="success-banner page-block">
            <div class="success-icon">✅</div>
            <h2>Arizangiz qabul qilindi!</h2>
            <p>Tez orada siz bilan bog'lanamiz.</p>
            <button class="mt-4 m-auto py-1 bg-gradient-to-r from-[#0045DE] to-[#1B6AE9] text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition form-control submit-btn" @click="success = false">Yangi ariza</button>
        </div>

        <form v-else class="space-y-5 page-block" @submit.prevent="submitForm">
            <div class="w-full">
                <label class="block mb-1 font-medium text-gray-700 form-group__label">Toʻliq ism (FISH)*</label>
                <input v-model="form.fullName" type="text" placeholder="Toʻliq ismingizni kiriting"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 form-control"
                    :class="{ 'border-red-500': errors.fullName }" />
                <span v-if="errors.fullName" class="text-red-500 text-sm">{{ errors.fullName }}</span>
            </div>

            <div class="top flex gap-4 w-100">
                <!-- Telefon -->
                <div class="w-full">
                    <label class="block mb-1 font-medium text-gray-700 form-group__label">Telefon raqam *</label>
                    <input v-model="form.phone" type="tel" placeholder="+998 XX XXX XX XX" @input="formatPhone('phone')"
                        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 form-control"
                        :class="{ 'border-red-500': errors.phone }" />
                    <span v-if="errors.phone" class="text-red-500 text-sm">{{ errors.phone }}</span>
                </div>

                <!-- Telefon2 -->
                <div class="w-full">
                    <label class="block mb-1 font-medium text-gray-700 form-group__label">Qoʻshimcha telefon raqam</label>
                    <input v-model="form.phone2" type="tel" @input="formatPhone('phone2')" placeholder="+998 XX XXX XX XX"
                        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 form-control"
                        :class="{ 'border-red-500': errors.phone2 }" />
                    <span v-if="errors.phone2" class="text-red-500 text-sm">{{ errors.phone2 }}</span>
                </div>

                <!-- Yoʻnalish -->
                <div class="w-full">
                    <label class="block mb-1 font-medium text-gray-700 form-group__label">Yoʻnalish *</label>
                    <select v-model="form.field"
                        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 form-control"
                        :class="{ 'border-red-500': errors.field }">
                        <option value="">Yoʻnalishni tanlang</option>
                        <option value="Tarix">Tarix</option>
                        <option value="Psixologiya">Psixologiya</option>
                        <option value="Filologiya va tillarni oʻqitish">Filologiya va tillarni oʻqitish</option>
                        <option value="Iqtisodiyot">Iqtisodiyot</option>
                        <option value="Biznesni boshqarish">Biznesni boshqarish</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Moliya va moliyaviy texnologiyalar">Moliya va moliyaviy texnologiyalar</option>
                        <option value="Kiberxavfsizlik injiniringi">Kiberxavfsizlik injiniringi</option>
                        <option value="Dasturiy injiniring">Dasturiy injiniring</option>
                        <option value="Sunʼiy intellekt">Sunʼiy intellekt</option>
                    </select>
                    <span v-if="errors.field" class="text-red-500 text-sm">{{ errors.field }}</span>
                </div>
            </div>

            <!-- Server xatosi -->
            <div v-if="serverError" class="error-banner">
                ⚠️ {{ serverError }}
            </div>

            <!-- Yuborish tugmasi -->
            <button type="submit" :disabled="loading"
                class="w-full py-1 bg-gradient-to-r from-[#0045DE] to-[#1B6AE9] text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition form-control submit-btn">
                <span v-if="loading" class="spinner"></span>
                <span>{{ loading ? 'Yuborilmoqda...' : 'Yuborish' }}</span>
            </button>
        </form>
    </div>
</template>

<script>
const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
const CHAT_ID   = import.meta.env.VITE_CHAT_ID;

export default {
    name: 'AcceptPage',
    data() {
        return {
            form: {
                fullName: '',
                phone: '',
                phone2: '',
                field: '',
            },
            errors: {},
            loading: false,
            success: false,
            serverError: '',
        };
    },
    methods: {
        validate() {
            const errors = {};
            const phoneRegex = /^\+998\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/;

            if (!this.form.fullName.trim()) {
                errors.fullName = "Toʻliq ism kiritilishi shart";
            } else if (this.form.fullName.trim().length < 3) {
                errors.fullName = "Ism kamida 3 ta belgidan iborat boʻlishi kerak";
            }

            if (!this.form.phone.trim()) {
                errors.phone = 'Telefon raqam kiritilishi shart';
            } else if (!phoneRegex.test(this.form.phone)) {
                errors.phone = "Telefon raqam formati: +998 XX XXX XX XX";
            }

            if (this.form.phone2 && !phoneRegex.test(this.form.phone2)) {
                errors.phone2 = "Telefon raqam formati: +998 XX XXX XX XX";
            }

            if (!this.form.field) {
                errors.field = "Yoʻnalish tanlanishi shart";
            }

            this.errors = errors;
            return Object.keys(errors).length === 0;
        },

        formatPhone(field) {
            let numbers = this.form[field].replace(/\D/g, '');
            if (numbers.startsWith('998')) numbers = numbers.slice(3);
            numbers = numbers.substring(0, 9);

            let formatted = '+998 ';
            if (numbers.length > 0) formatted += numbers.substring(0, 2);
            if (numbers.length >= 3) formatted += ' ' + numbers.substring(2, 5);
            if (numbers.length >= 6) formatted += ' ' + numbers.substring(5, 7);
            if (numbers.length >= 8) formatted += ' ' + numbers.substring(7, 9);

            this.form[field] = formatted.trim();
        },

        async submitForm() {
            if (!this.validate()) return;

            this.loading = true;
            this.serverError = '';

            const text =
                `📋 <b>Yangi ariza!</b>\n\n` +
                `👤 <b>FISH:</b> ${this.form.fullName}\n` +
                `📞 <b>Telefon:</b> ${this.form.phone}\n` +
                (this.form.phone2 ? `📞 <b>Qo'shimcha:</b> ${this.form.phone2}\n` : '') +
                `🎓 <b>Yo'nalish:</b> ${this.form.field}`;

            try {
                const res = await fetch(
                    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            chat_id:    CHAT_ID,
                            text,
                            parse_mode: 'HTML',
                        }),
                    }
                );

                const data = await res.json();
                if (!data.ok) throw new Error(data.description || 'Telegram xatosi');

                this.success = true;
                this.form = { fullName: '', phone: '', phone2: '', field: '' };
                this.errors = {};
            } catch (err) {
                this.serverError = err.message || 'Xabar yuborishda xato. Qayta urinib koʻring.';
            } finally {
                this.loading = false;
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

.text-red-500 { color: #ef4444; }
.text-sm { font-size: 13px; margin-top: 4px; display: block; }

/* Submit tugmasi */
.submit-btn {
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
}
.submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

/* Loading spinner */
.spinner {
    width: 18px;
    height: 18px;
    border: 2px solid rgba(255,255,255,0.4);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    display: inline-block;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* Muvaffaqiyat banner */
.success-banner {
    text-align: center;
    padding: 48px 24px;
}
.success-icon { font-size: 48px; margin-bottom: 12px; }
.success-banner h2 { font-size: 22px; font-weight: 700; margin-bottom: 8px; color: #0f172a; }
.success-banner p  { color: #64748b; font-size: 15px; }

.btn-primary {
    display: inline-block;
    padding: 10px 28px;
    background: linear-gradient(to right, #0045DE, #1B6AE9);
    color: #fff;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
    border: none;
}

/* Xato banner */
.error-banner {
    background: #fef2f2;
    border: 1px solid #fecaca;
    color: #b91c1c;
    border-radius: 10px;
    padding: 12px 16px;
    font-size: 14px;
}
</style>

<template>
    <section class="documents">
        <div class="documents__container">
            <h2 class="page-title">Asosiy Me'yoriy Hujjatlar</h2>
            <!-- <p class="documents__subtitle">Sharq Universitetining asosiy normativ-huquqiy hujjatlari</p> -->

            <div class="documents__grid">
                <div v-for="(document, index) in documents" :key="index" class="documents__card"
                    @click="downloadDocument(document.file)">
                    <div class="documents__icon">
                        <font-awesome-icon :icon="['fas', 'file-alt']" />
                    </div>
                    <div class="documents__content">
                        <h3 class="documents__name">{{ document.name }}</h3>
                        <p class="documents__date">{{ document.date }}</p>
                    </div>
                    <div class="documents__download">
                        <font-awesome-icon :icon="['fas', 'download']" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'NormativeDocuments',
    data() {
        return {
            documents: [

                {
                    name: "Taʼlim standartlari",
                    date: "2024-yil 15-yanvar",
                    file: "education_standards.pdf"
                },
                //     {
                //        name: "Talabalar kodeksi",
                //        date: "2024-yil 1-sentyabr",
                //        file: "student_code.pdf"
                //    },
                {
                    name: "Xalqaro hamkorlik shartnomalari",
                    date: "2024-yil 10-mart",
                    file: "international_agreements.pdf"
                },
                {
                    name: "Ichki tartib qoidalari",
                    date: "2024-yil 20-avgust",
                    file: "odob-axloq.pdf"
                },
                {
                    name: "Universitet nizomi",
                    date: "2024-yil 12-iyul",
                    file: "university_charter.pdf"
                },
                {
                    name: "Sirtqi taʼlim tartibi",
                    date: "2024-yil 5-fevral",
                    file: "distance_education.pdf"
                }
            ]
        }
    },
    methods: {
        downloadDocument(fileName) {
            // Bu yerda hujjatni yuklab olish logikasi
            console.log(`Downloading ${fileName}`);
            // Haqiqiy loyihada:
            window.open(`/file/${fileName}`, '_blank');
        }
    }
}
</script>

<style lang="scss">
.documents {
    padding: 3rem 1rem;
    border-radius: 12px;
    border: 1px solid rgba(234, 238, 245, 1);
    background: #ffffffd8;
    box-shadow: 0px 0px 30px 0px rgba(7, 12, 28, 0.04);
    width: 100%;
    height: 100%;

    &__container {
        max-width: 1200px;
        margin: 0 auto;
    }

    &__title {
        font-size: 2rem;
        color: #2c3e50;
        text-align: center;
        margin-bottom: 0.5rem;
    }

    &__subtitle {
        text-align: center;
        color: #7f8c8d;
        margin-bottom: 2rem;
        font-size: 1.1rem;
    }

    &__grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 768px) {
        padding: 3rem 1rem;
    }

    &__card {
        background: white;
        border-radius: 8px;
        padding: 1.5rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
    }

    &__icon {
        font-size: 1.5rem;
        color: #3498db;
        margin-right: 1.5rem;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #e8f4fc;
        border-radius: 50%;
    }

    &__content {
        flex: 1;
    }

    &__name {
        font-size: 1.1rem;
        color: #2c3e50;
        margin-bottom: 0.3rem;
    }

    &__date {
        font-size: 0.9rem;
        color: #7f8c8d;
        margin: 0;
    }

    &__download {
        color: #7f8c8d;
        font-size: 1.2rem;
        transition: color 0.2s;

        .documents__card:hover & {
            color: #3498db;
        }
    }
}
</style>
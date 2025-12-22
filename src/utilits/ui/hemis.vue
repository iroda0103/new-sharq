<template>
    <div class="hemis-dropdown" @click="toggleDropdown">
        <!-- Selected value -->
        <div class="hemis-selected">
            <div class="hemis-icon"></div>
            <span>{{ selectedLabel }}</span>
            <!-- <svg class="arrow" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6 6L11 1" stroke="white" stroke-width="1.5" stroke-linecap="round" />
            </svg> -->
        </div>

        <!-- Options -->
        <ul v-show="open" class="hemis-options">
            <li @click.stop="select('teacher', 'Ustoz')">Ustoz</li>
            <li @click.stop="select('student', 'Talaba')">Talaba</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: '',
            selectedLabel: 'HEMIS',
            open: false
        };
    },
    methods: {
        toggleDropdown() {
            this.open = !this.open;
        },
        select(value, label) {
            this.selected = value;
            this.selectedLabel = label;
            this.open = false;

            if (value === "teacher") {
                window.open("https://hemis.sharqedu.uz/", "_blank");
            }
            if (value === "student") {
                window.open("https://my.hemis.uz/", "_blank");
            }
        }
    }
};
</script>

<style scoped>
.hemis-dropdown {
    position: relative;
    width: 160px;
    user-select: none;
    cursor: pointer;
}

.hemis-selected {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px 0 36px;
    height: 36px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.25);
    color: #fff;
    position: relative;
}

.hemis-icon {
    position: absolute;
    left: 10px;
    width: 16px;
    height: 16px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='12' fill='%231677FF'/%3E%3Ccircle cx='12' cy='12' r='6' fill='white'/%3E%3C/svg%3E");
    background-size: cover;
    background-repeat: no-repeat;
}

.arrow {
    margin-left: 8px;
}

.hemis-options {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin: 4px 0 0 0;
    padding: 0;
    list-style: none;
    border-radius: 8px;
    overflow: hidden;
    z-index: 10;
    /* background-color: rgba(0, 0, 0, 0.867); */
    background: linear-gradient(180deg, #375277 0%, #3C6CAC 100%);
}

.hemis-options li {
    padding: 8px 12px;
    color: #fff;

    transition: background 0.3s;
}

.hemis-options li:first-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);

}

.hemis-options li:hover {
    background: linear-gradient(180deg, #2d4766 0%, #355e94 100%);
}
</style>

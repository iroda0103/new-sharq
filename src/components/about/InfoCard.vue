<template>
    <div class="info-card">
        <div class="info-card__icon">
            <slot name="icon">
                {{ icon }}
            </slot>
        </div>
        <h3 class="info-card__title">{{ title }}</h3>
        <p class="info-card__text" v-html="formattedText"></p>
    </div>
</template>

<script setup>
const props = defineProps({
    icon: String,
    title: String,
    text: String
})

const formattedText = props.text.replace(/\n/g, '<br>')
</script>

<style scoped lang="scss">
.info-card {
    flex: 1 1 300px;
    background-color: #f9f9f9;
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    position: relative;
    overflow: hidden;
    z-index: 1;

    // Hover effect with background overlay
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0%;
        background-color: color-mix(in srgb, #0b7ac49f 25%, transparent);
        z-index: -1;
        transition: height 0.4s ease;
        border-radius: 15px;
    }

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.034);

        &::before {
            height: 100%;
        }

        .info-card__icon {
            background: linear-gradient(to right, rgba(0, 69, 94, 0.8705882353), rgba(27, 106, 233, 0.9333333333));
            color: #ffffff;

        }
    }

    &__icon {
        color: #000000c7;
        width: 60px;
        height: 60px;
        background-color: rgba(0, 186, 252, 0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.75rem;
        border-radius: 50%;
        margin-bottom: 1rem;
        transition: background-color 0.3s ease;
    }

    &__title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #222;
        margin-bottom: 1rem;
    }

    &__text {
        font-size: 1rem;
        color: #555;
        line-height: 1.6;
        white-space: pre-line;
    }
}
</style>

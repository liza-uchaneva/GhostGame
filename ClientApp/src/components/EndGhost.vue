<template>
    <div class="endGhost" :style="{ animationDelay: delay + 's' }">
        <div class="endGhost__body">
            <div class="endGhost__eyes"></div>
            <div class="endGhost__mouth"></div>
            <div class="endGhost__feet">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
    import { defineComponent, ref } from 'vue';

    export default defineComponent({
        setup() {
            const delay = ref(Math.random() * 5);
            return {
                delay,
            };
        },
        methods: {
        },
    });
</script>

<style lang="scss" scoped></style>

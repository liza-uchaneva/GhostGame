<template>
    <div id="windowGhost" 
         class="windowGhost" 
         v-on:click="$emit('ghostCollected',FlyAwayAndReturn())" 
         ref="windowGhost" 
         :style="{ animationDelay: delay + 's' }">

        <div id="ghost" class="windowGhost__body"  ref="ghost">
            <div class="windowGhost__eyes"></div>
            <div id="mouth" class="windowGhost__mouth" ref="mouth"></div>
            <div class="windowGhost__feet">
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
            const delay = ref(Math.random() * 3);
            return {
                delay,
            };
        },
        methods: {
            FlyAwayAndReturn() {
                const ghostElement = this.$refs.ghost;
                const mouthElement = this.$refs.mouth;

                if (ghostElement && mouthElement) {
                    mouthElement.classList.add('openMouth');
                    setTimeout(() => {
                        ghostElement.classList.add('fly');
                    }, 50);
                }

                mouthElement.addEventListener('animationend', () => {
                    setTimeout(() => {
                        ghostElement.classList.remove('fly');
                        mouthElement.classList.remove('openMouth');
                    }, 500);
                });

                if (ghostElement) {
                    setTimeout(() => {
                        ghostElement.classList.add('lookOut');
                    }, 500);
                }
            },
        },
    });
</script>

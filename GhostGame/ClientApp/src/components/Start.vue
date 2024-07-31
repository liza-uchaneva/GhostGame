<template>
    <section id="app" class="start center">
        <div class="start__title" ref="titleRef"><p>Welcome!</p></div>
        <div class="start__text" ref="textRef">
            You'll get 15 seconds to bust<br />
            as many ghosts as you can.<br />
            Colored ghosts score more<br />
            points!
        </div>
        <StartGhost ref="ghostRef" />
        <button @click="OpenGame"
                ref="buttonRef">
                Start
        </button>
    </section>
</template>

<script >
    import StartGhost from './StartGhost.vue'
    export default {
        components: {
            StartGhost
        },
        methods: {
            OpenGame() {
                const titleElement = this.$refs.titleRef;
                const textElement = this.$refs.textRef;
                const buttonElement = this.$refs.buttonRef;

                
                this.$refs.ghostRef.FlyAway();
                titleElement.classList.add('fadeOut');
                textElement.classList.add('fadeOut');
                buttonElement.classList.add('fadeOut');


                setTimeout(() => {
                    this.$router.replace({ path: '/game' });
                }, 2500);
            }
        },
    };
</script>

<style lang="scss" scoped></style>

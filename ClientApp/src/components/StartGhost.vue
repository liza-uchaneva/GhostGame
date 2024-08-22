<template>
    <div>
        <div id="ghost">
            <div id="spooky">
                <div id="body">
                    <div id="eyes"></div>
                    <div id="mouth"></div>
                    <div id="feet">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="shadow"></div>
    </div>
</template>

<script>
    export default {
        methods: {
            FlyAway() {
                const ghostElement = document.getElementById('ghost');
                const shadowElement = document.getElementById('shadow');
                const mouthElement = document.getElementById('mouth');

                if (ghostElement && shadowElement && mouthElement) {
                    mouthElement.classList.add('openMouth');

                    mouthElement.addEventListener('animationend', () => {
                        setTimeout(() => {
                            ghostElement.classList.add('fly');
                            shadowElement.classList.add('disappear');
                        }, 100);
                    });
                }
            }
        },
    };
</script>

<style lang="scss" scoped></style>

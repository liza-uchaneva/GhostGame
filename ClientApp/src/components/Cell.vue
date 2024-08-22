<template>
    <div id="app">
        <div class="cell">
            <div class="window">
                <WindowGhost @ghostCollected="emitGhostCollected" />
                <div class="window__sillhorizontal"></div>
                <div class="window__sillvertical"></div>
                <div class="window__boxToHide">
                    <div class="window__bench"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import WindowGhost from './WindowGhost.vue'

    export default {
        components: {
            WindowGhost
        },
        methods: {
            emitGhostCollected() {
                this.$emit('ghostCollected');
            },
        },
    };
</script>

<style lang="scss" scoped></style>

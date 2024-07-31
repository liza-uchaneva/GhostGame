<template>
    <div id="app">
        <div class="cell">
            <div class="window">
                <WindowGhost />
                <div class="window__sillhorizontal"></div>
                <div class="window__sillvertical"></div>
                <div class="window__boxToHide"></div>
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
        },
    };
</script>

<style lang="scss" scoped></style>

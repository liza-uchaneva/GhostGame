<template>
    <div id="app">
        <div class="house">
            <div class="house__roof">
                <div class="scoreBoard">
                    <div class="scoreBoard__text">
                        To get started, catch your first ghost<br />
                    </div>
                    <div class="scoreBoard__title">
                        Score: {{ score }}
                    </div>
                    <div class="scoreBoard__text">
                        <div>Time: {{ timeLeft }}</div>
                    </div>
                </div>
            </div>
            <div>
                <div class="house__frontWall">
                    <div class="fuild">
                        <Cell v-for="(cell, index) in cells" @ghostCollected="updateScore" :key="index" :id="cell.id">
                        </Cell>
                    </div>
                </div>
                <div class=" house__backWall"></div>
            </div>
        </div>
    </div>
    <!--<div class="popup" v-if="popupVisible.value">
        <div class="popup__inner">
            <p class="popup__title">Game Over!</p>
            <p class="popup__text">
                Your score is: {{ score }}
            </p>
            <button class="popup__button" @click="popupVisible.value = false">Restart</button>
        </div>
    </div>-->
</template>

<script>
    import Cell from './Cell.vue';
    import { ref, reactive } from 'vue';

    export default {
        components: {
            Cell
        },
        setup() {
            const popupVisible = reactive({ value: false });

            const score = ref(0);
            const cells = ref([1, 2, 3, 4, 5, 6]);

            const timeLeft = ref(15);
            let timer;

            return {
                popupVisible,
                cells,
                score,
                timeLeft,
                timer,
            };
        },
        methods: {
            startTimer() {
                this.timer = setInterval(() => {
                    if (this.timeLeft > 0) {
                        this.timeLeft -= 1;
                    }
                    else {
                        alert('Game Over! Your score is:' + this.score);
                        /*this.popupVisible.value = true;*/
                        this.resetGame();

                    }
                }, 1000);
            },
            resetGame() {
                this.score = 0;
                clearInterval(this.timer);
                this.timeLeft = 15;

            },
            updateScore() {
                if (this.score == 0) {
                    this.startTimer();
                }
                this.score += 1;
            },
        }
    };
</script>

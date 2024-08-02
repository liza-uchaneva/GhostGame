<template>
    <div id="app">
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
        <div class="fuild">
            <Cell v-for="(cell, index) in cells" @ghostCollected="updateScore" :key="index" :id="cell.id">
            </Cell>
        </div>
    </div>
</template>

<script>
    import Cell from './Cell.vue';
    import { ref } from 'vue';

    export default {
        components: {
            Cell
        },
        setup() {
            const score = ref(0);
            const cells = ref([1, 2, 3, 4, 5, 6]);

            const timeLeft = ref(10);
            let timer;

            return {
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
                        this.timeLeft-=1;
                    }
                    else {
                        clearInterval(this.timer);
                        alert('Game Over! Your score is: ' + this.score);
                    }
                }, 1000);
            },
            resetGame() {
                this.score = 0;
            },
            updateScore() {
                if (this.score == 0) {
                    this.startTimer();
                }
                this.score+=1;
            },
        }
    };
</script>

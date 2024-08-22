<template>
    <section id="app" class="game center">
        <div class="startText" v-if="startTextVisible.value">
            To get started, catch your first ghost
        </div>
        <div class="house">
            <div class="house__pipes"></div>
            <div class="house__roof">
                <div class="scoreBoard">
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
            </div>
        </div>

        <div>
            <div class="tree__first"></div>
            <div class="tree__sec"></div>
            <div class="tree__third"></div>
            <div class="tree__four"></div>
        </div>
        <div class="mist">
            <span style="--i: 1"></span>
            <span style="--i: 3"></span>
            <span style="--i: 16"></span>
            <span style="--i: 5"></span>
            <span style="--i: 13"></span>
            <span style="--i: 6"></span>
            <span style="--i: 7"></span>
            <span style="--i: 10"></span>
            <span style="--i: 8"></span>
            <span style="--i: 7"></span>
            <span style="--i: 10"></span>
            <span style="--i: 8"></span>
            <span style="--i: 17"></span>
            <span style="--i: 11"></span>
            <span style="--i: 12"></span>
            <span style="--i: 14"></span>
            <span style="--i: 2"></span>
            <span style="--i: 9"></span>
            <span style="--i: 15"></span>
            <span style="--i: 4"></span>
        </div>
        <div class="ground"></div>
        <div class="gameoverScreen" v-if="gameoverScreenVisible.value">
            <div class="gameoverScreen__inner">
                <p class="gameoverScreen__title">Time is up!</p>
                <p class="gameoverScreen__text">
                    Your score is: {{ score }}
                </p>
                <div class="collectedGhosts">
                    <EndGhost v-for="(ghost, index) in score" :key="index" />
                </div>
                <button class="gameoverScreen__button" @click="resetGame">Restart</button>
            </div>
        </div>
    </section>
</template>

<script>
    import Cell from './Cell.vue';
    import WindowGhost from './WindowGhost.vue'
    import EndGhost from './EndGhost.vue'

    import { ref, reactive } from 'vue';

    export default {
        components: {
            Cell,
            WindowGhost,
            EndGhost
        },
        setup() {
            const gameoverScreenVisible = reactive({ value: false });
            const startTextVisible = reactive({ value: true });
            const score = ref(0);
            const cells = ref([1, 2, 3, 4, 5, 6]);

            const timeLeft = ref(15);
            let timer;

            return {
                gameoverScreenVisible,
                cells,
                score,
                timeLeft,
                timer,
                startTextVisible,
            };
        },
        methods: {
            startTimer() {
                this.timer = setInterval(() => {
                    if (this.timeLeft > 0) {
                        this.timeLeft -= 1;
                    }
                    else {
                        this.gameoverScreenVisible.value = true;
                    }
                }, 1000);
            },
            resetGame() {
                this.gameoverScreenVisible.value = false;
                this.startTextVisible.value = true;
                this.score = 0;
                clearInterval(this.timer);
                this.timeLeft = 15;
            },
            updateScore() {
                if (this.score == 0) {
                    this.startTextVisible.value = false;
                    this.startTimer();
                }
                this.score += 1;
            },
        }

        };
</script>

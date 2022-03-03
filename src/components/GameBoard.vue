<template>

    <!-- Game Board Container -->
    <div class="board">

        <!-- Individual Card -->
        <Card v-for="card:any in deck" :key="uid(card)" :type="card.type" :path="card.img" :flipped="card.flipped" :matched="card.matched" @click="flip(card)" />

        <!-- Loader for Initial Game Load and Resets -->
        <div class="loader-wrap d-flex justify-content-center align-items-center" :class="{ 'loader-wrap--dissolve' : !loading }">
            <div class="loader">
              <div class="loader__inner" :class="{ 'loader__inner-animate' : loading }"></div>
            </div>
        </div>

        <!-- Game Finished Message -->
        <div class="finished d-flex flex-col justify-content-center align-items-center text-center" :class="{ 'finished--fade-in' : finishGame }">
            <p>You successfully completed the game!</p>
            <p>View your finishing time and total moves below</p>
            <p>Reset the game to try and beat your record</p>
        </div>

    </div>

    <!-- Game Statistics: Time Elapsed, Number of Moves, Number of Matches Found -->
    <GameStats :minutes="timeMins" :seconds="timeSecs" :oneMin="oneMinute" :moves="moves" :matches="matches" />

    <!-- Reset Button -->
    <div class="btn-wrap text-center">
        <a class="btn d-inline-block" href="#" @click="resetGame" aria-label="Restart game">Restart</a>
    </div>

</template>

<script lang="ts">

    import { defineComponent } from 'vue';
    import { cardsArr } from '../cards.js';
    import Card from './Card.vue';
    import GameStats from './GameStats.vue';

    type Card = {
        uid: any;
        type: string;
        img: string;
        flipped: boolean;
        matched: boolean;
    }

    function uid(card: Card): string {
        if (card.uid) { 
            return card.uid;
        }

        const key: string = Math.random().toString(16).slice(2);
        card.uid = card.type + '_' + key;
        return card.uid;
    }

    export default defineComponent({

        name: 'GameBoard',

        components: {
            Card,
            GameStats
        },

        data() {
            return {
                loading: true,
                deck: [],
                gameStarted: false,
                timeMins: 0,
                timeSecs: 0,
                moves: 0,
                matches: 0,
                flippedCards: [],
                finishGame: false,
                timerInterval: 0
            }
        },

        computed: {
            oneMinute(): boolean {
                return this.timeMins === 1;
            }
        },

        created() {
            this.buildDeck();
            this.shuffle();
            setTimeout(()=> {
                this.loading = false
            }, 3250);
        },

        methods: {
            uid,

            buildDeck() {
                this.deck.splice(0);
                
                cardsArr.forEach((card) => {
                    this.addToDeck(this.deck, card);
                    this.addToDeck(this.deck, card);
                });
            },

            addToDeck(deck: Card[], card: {type: string, img: string}) {
                deck.push({
                    uid: null,
                    type: card.type,
                    img: (new URL(card.img, import.meta.url)).toString(),
                    flipped: false,
                    matched: false
                });
            },

            shuffle() {
                let deck: Card[] = this.deck;
                let random: number, tempObj: Card;
                for (let i: number = deck.length; i > 0; i--) {
                    random = Math.floor(i * Math.random());
                    tempObj = deck[i - 1];
                    deck[i - 1] = deck[random];
                    deck[random] = tempObj;
                }
            },

            startGameClock() {
                this.updateGameClock();
                this.timerInterval = setInterval(this.updateGameClock, 1000);
            },

            updateGameClock() {
                if (this.timeSecs === 59) {
                    this.timeSecs = 0;
                    this.timeMins++;
                } else {
                    this.timeSecs++;
                }
            },

            flip(card: Card) {
                let currFlipped: Card[] = this.flippedCards;

                if (card.flipped || card.matched || currFlipped.length === 2) {
                    return;
                }

                if (!this.gameStarted) {
                    this.startGameClock();
                    this.gameStarted = true;
                }

                card.flipped = true;

                if (currFlipped.length < 2) {
                    currFlipped.push(card);
                }

                if (currFlipped.length === 2) {
                    this.checkForMatch();
                    this.addMove();
                }
            },

            checkForMatch() {
                let currFlipped: Card[] = this.flippedCards;

                if (currFlipped[0].type === currFlipped[1].type) {
                    setTimeout(() => {
                        this.updateCards(currFlipped, 'matched', true);
                        this.addMatch();
                        this.resetFlippedCards();
                        this.checkForCompletion();
                    }, 800);
                } 
                
                else {
                    setTimeout(() => {
                        this.updateCards(currFlipped, 'flipped', false);
                        this.resetFlippedCards();
                    }, 1000);
                }
            },

            updateCards(cards: Card[], prop: string, val: boolean) {
                cards.forEach((card: Card) => prop === 'flipped' ? card.flipped = val : card.matched = val);
            },

            resetFlippedCards() {
                this.flippedCards = [];
            },

            addMove() {
                this.moves++;
            },

            addMatch() {
                this.matches++;
            },

            checkForCompletion() {
                if (this.deck.filter((card: Card) => card.matched === false).length === 0) {
                    this.finishGame = true;
                    clearInterval(this.timerInterval);
                } 
            },

            resetGame() {
                clearInterval(this.timerInterval);
                this.finishGame = false
                this.loading = true;
                setTimeout(()=> {
                    this.loading = false;
                }, 3250);
                this.timeMins = 0;
                this.timeSecs = 0;
                this.moves = 0;
                this.matches = 0;
                this.buildDeck();
                this.shuffle();
            }

        }

    });

</script>
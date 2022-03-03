<template>

    <div class="container" :class="{ 'mobile': mobile}">

        <!-- Header: Game Title & Instructions -->
        <header class="header text-center">

            <h1 class="header__title">Memory Game</h1>

        </header>

        <!-- GameBoard Component -->
        <GameBoard />

    </div>

</template>

<script lang="ts">
    
    import { defineComponent } from 'vue';
    import GameBoard from './components/GameBoard.vue';

    let isMobile = {
        Android: function(): any {
            return navigator.userAgent.match(/Android/i);
        },
        iOS: function(): any {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function(): any {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function(): any {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function(): any {
            return (isMobile.Android() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    export default defineComponent ({
        name: 'App',
        
        components: {
            GameBoard
        },

        data() {
          return {
            mobile: false
          }
        },

        created() {
            if (isMobile.any()) {
              this.mobile = true;
            }
        }

    });

</script>

<style lang="scss" src="./assets/scss/game-styles.scss"></style>
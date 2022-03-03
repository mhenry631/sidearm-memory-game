<template>

    <div class="game-stats d-flex flex-col align-items-center flex-sm-row justify-content-sm-between">
        
        <div class="game-stats__stat">
            <span class="game-stats__title">Time Elapsed:</span>&nbsp;
            <span class="game-stats__val">{{minutes}} min<span v-show="!oneMin">s</span>, {{seconds}} secs</span>
        </div>
        
        <div class="game-stats__stat">
            <span class="game-stats__title">Moves:</span>&nbsp;
            <span class="game-stats__val">{{moves}}</span>
        </div>
        
        <div class="game-stats__stat">
            <span class="game-stats__title">Matches:</span>&nbsp;
            <span class="game-stats__val">{{matches}}</span>
        </div>

    </div>

</template>

<script lang="ts">

    import { defineComponent } from 'vue';

    export default defineComponent({

        name: 'GameStats',

        props: {
            minutes: Number,
            seconds: Number,
            oneMin: Boolean,
            moves: Number,
            matches: Number
        }
    
    });

</script>

<template>

    <button class="card" :class="{ 'card--flipped': flipped, 'card--matched': matched }" aria-label="flip-card">
            
            <div class="card__inner">
                <!-- Card Back (same image for each card) -->
                <div class="card__back">
                    <img class="card__img" src="../assets/images/card-back.jpg" alt="card back" />
                </div>
                
                <!-- Card Front (12 different images across 24 cards) -->
                <div class="card__front">
                    <img class="card__img" :src="path" :alt="type" />
                </div>
            </div>

    </button>

</template>

<script lang="ts">

    import { defineComponent } from 'vue';

    export default defineComponent({

        name: 'Card',

        props: {
            type: String,
            path: String,
            flipped: Boolean,
            matched: Boolean
        }
    
    });

</script>
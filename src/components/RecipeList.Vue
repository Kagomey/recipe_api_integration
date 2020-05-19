<template>
    <div class="flex-container">
        <app-recipe-overview v-for="id in list_food_id" :id="id" class="flex-item"></app-recipe-overview>
    </div>
</template>

<script>
import RecipeOverview from "./RecipeOverview.vue";

export default {
   props: ['list_food_id'],
   components: {
       'appRecipeOverview': RecipeOverview
   }
}
</script>

<style>
    .flex-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 80%;
    }
    .flex-item {
        margin: 10px;
        max-width: 200px;
        min-width: 100px;
        /* background-color: #082B28; */
        border-radius: 10px;
        position: relative;
        top: 0;
        transition: top ease 0.3s;
        border: 1px solid black;
    }
    .flex-item:hover {
        top: -10px;
        border: 2px solid black;
    }
</style>
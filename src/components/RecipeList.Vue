<template>
    <div class="grid-container">
        <app-recipe-overview></app-recipe-overview>
    </div>
</template>

<script>
import RecipeOverview from "./RecipeOverview.vue";

export default {
   components: {
       'appRecipeOverview': RecipeOverview
   } 
}
</script>

<style>
    .grid-container {
        display: grid;
        grid-template-columns: repeat(4, 200px);
        grid-template-rows:repeat(4, 200px);
    }
</style>
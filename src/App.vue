<template>
<div class="background">
  <div class="total-container">
    <app-header></app-header>
    <app-recipe-categories></app-recipe-categories>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import RecipeList from './components/RecipeList.vue';
import RecipeCategories from './components/RecipeCategories.vue'
import Header from './components/Header.vue'

export default {
  components: {
   'appRecipeList': RecipeList,
   'appRecipeCategories': RecipeCategories,
   'appHeader': Header,
 }
}
</script>

<style>
@font-face {
  font-family: 'Jost';
  src: url('/assets/Jost-VariableFont_wght.ttf') format('ttf');
}

.total-container {
  max-width: 80%;
  /* border: 2px solid black; */
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  font-family: 'Jost', sans-serif;
}
.background {
 /*  */
}

</style>

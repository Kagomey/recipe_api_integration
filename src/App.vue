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
.total-container {
  max-width: 80%;
  border: 2px solid black;
  margin-left: auto;
  margin-right: auto;
  /* background-color: white; */
}
.background {
  /* background-color: #272729; */
}
</style>

<template>
<div>
  <!-- <app-recipe-list></app-recipe-list> -->
  <app-recipe-categories></app-recipe-categories>
  <router-view></router-view>
</div>
</template>

<script>
import RecipeList from './components/RecipeList.vue';
import RecipeCategories from './components/RecipeCategories.vue'

export default {
  components: {
   'appRecipeList': RecipeList,
   'appRecipeCategories': RecipeCategories,
 }
}
</script>

<style>
</style>

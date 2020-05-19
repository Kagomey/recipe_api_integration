<template>
    <div class="recipeCard">
        <div class="image">
            <img :src="data.strMealThumb">
        </div>
        <h3>
            {{data.strMeal}}
        </h3>

        <div class="description">
            <p>Category: {{data.strCategory}}</p>
            <p>Area: {{data.strArea}}</p>
        </div>
    </div>
</template>

<script>
import TheMealDB from '../api/TheMealDB'

export default {
   data() {
       return {
           data: '',
           loading: true,
           id: 52772
       }
   },
//    props: ['id'],
   created() {
       TheMealDB.getRecipe(this.id)
            .then(recipe => {
                this.data = recipe.meals[0]
            })
            .catch(error => console.log(error))
            .finally(() => this.loading = false)
   }
}
</script>

<style>
.recipeCard {
    border: 1px black solid;
}
img {
    max-width: 100%;
    height: auto;
}
</style>
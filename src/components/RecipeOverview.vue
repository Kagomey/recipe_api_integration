<template>
    <router-link tag="div" :to="'/recipe/' + data.idMeal" class="recipeCard">
        <div class="image">
            <img :src="data.strMealThumb">
        </div>
        <div class="text">
            <h3>{{data.strMeal}}</h3>
            <div class="description">
                <p>Category: {{data.strCategory}} - Area: {{data.strArea}}</p>
            </div>
        </div>
    </router-link>
</template>

<script>
import TheMealDB from '../api/TheMealDB'

export default {
   data() {
       return {
           data: '',
           loading: true,
       }
   },
   props: ['id'],
   watch: {
       'id'(to, from) {
        TheMealDB.getRecipesById(this.id)
            .then(recipe => {
                this.data = recipe.meals[0]
            })
            .catch(error => console.log(error))
            .finally(() => this.loading = false)
       }
   },
   created() {
       TheMealDB.getRecipesById(this.id)
            .then(recipe => {
                this.data = recipe.meals[0]
            })
            .catch(error => console.log(error))
            .finally(() => this.loading = false)
   },
   methods: {
       displayDetails(id) {
           console.log(id);
       }
   }
}
</script>

<style>

.recipeCard {
    background-color: #F7F6E5;
}

img {
    max-width: 100%;
    height: auto;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
}
h3 {
    text-align: center;
    font-variation-settings: "wght" 600 "wdth" 400;
    font-style: italic;
    font-size: 20px;
    line-height: 1;
}
.text {
    position: relative;
    vertical-align: bottom;
}
.description {
    padding-left :10px;
}
</style>
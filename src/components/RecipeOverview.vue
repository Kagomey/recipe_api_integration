<template>
    <router-link tag="div" :to="'/recipe/' + data.idMeal" class="recipeCard">
        <div class="image">
            <img :src="data.strMealThumb">
        </div>
        <div class="text">
            <h3>
                {{data.strMeal}}
            </h3>

            <div class="description">
                <p>Category: {{data.strCategory}} - Area: {{data.strArea}}</p>
            </div>
        </div>
    </router-link>
    <!-- <div class="recipeCard" @click="displayDetails(data.idMeal)">

        <div class="image">
            <img :src="data.strMealThumb">
        </div>
        <div class="text">
            <h3>
                {{data.strMeal}}
            </h3>

            <div class="description">
                <p>Category: {{data.strCategory}} - Area: {{data.strArea}}</p>
            </div>
        </div>
    </div> -->
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



img {
    max-width: 100%;
    height: auto;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
}
h3 {
    text-align: center;
}
.description {
    padding-left :10px;
}
</style>
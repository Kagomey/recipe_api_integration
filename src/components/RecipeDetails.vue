<template>
    <div class="food_detail_card">
        <h3>{{meal_data.strMeal}}</h3>
        <p v-if="meal_data.dateModified">Date modified: {{meal_data.dateModified}}</p>
        <hr>
        Category: {{meal_data.strCategory}}
        Origin: {{meal_data.strArea}}
        Img : {{meal_data.strMealThumb}}
        Vid : {{meal_data.strYoutube}}
        <hr>
        Ingredients
        <div class="Ingredient" v-for="index in 20">
            <p v-if="meal_data['strIngredient'+index] != ''">{{index}}) {{meal_data['strIngredient'+index]}} - (x{{meal_data['strMeasure'+index]}})</p>
        </div>

        <hr>
        Instructions: {{meal_data.strInstructions}}
        <hr>
        Source: {{meal_data.strSource}}
    </div>
</template>

<script>
import TheMealDB from '../api/TheMealDB'

export default {
    data() {
        return {
            idMeal: this.$route.params.id,
            meal_data: '',
        }
    },
    created() {
        TheMealDB.getRecipesById(this.idMeal)
            .then(response => {
                this.meal_data = response.meals[0];
                console.log('test')
            })
            .catch(error => console.log(error))
    }
}
</script>

<style scoped>
.food_detail_card {

}
</style>
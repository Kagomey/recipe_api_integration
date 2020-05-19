<template>
    <div class="food_detail_card">
        <h3>{{meal_data.strMeal}}</h3>
        <router-link tag="div" :to="'/category/'+meal_data.strCategory" class="back_arrow"><span>&#8592;</span> Back to Category</router-link>
        <p v-if="meal_data.dateModified">Date modified: {{meal_data.dateModified}}</router-link>
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
        <youtube class="video" :video-id="$youtube.getIdFromURL(meal_data.strYoutube)"></youtube>
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
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid black;
    margin-top: 20px;
    padding: 10px;
}
.video {
    margin-left: auto;
    margin-right: auto
}
.back_arrow:hover {
    cursor: pointer;
    /* background-color: grey; */
    color: grey;
}
.back_arrow {
    border: 1px solid black;
    border-radius: 5px;
    max-width: 10%;
    min-width: 60px;;
    margin-left: auto;
    margin-right: 0;
    padding: 5px;
}
</style>
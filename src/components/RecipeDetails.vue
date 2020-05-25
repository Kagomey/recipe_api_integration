<template>
    <div class="food_detail_card">
        <h3 class="recipe_title">{{meal_data.strMeal}}</h3>
        <router-link tag="div" :to="'/category/'+meal_data.strCategory" class="back_arrow"><span>&#8592;</span> Back to {{meal_data.strCategory}}</router-link>
        <div class="metadata">
            <h6>Category: {{meal_data.strCategory}}</h6> /
            <h6>Origin: {{meal_data.strArea}}</h6>
            <p v-if="meal_data.dateModified">/ Date modified: {{meal_data.dateModified}}</p>
            <p class="source" v-if="meal_data.strSource != null && meal_data.strSource != ''">
                Source: {{ meal_data.strSource }}
            </p>
        </div>
        <img :src="meal_data.strMealThumb">

        <div class="ingredients">
            <h5>Ingredients</h5>
            <div v-for="index in 20">
                <p v-if="meal_data['strIngredient'+index] != null && meal_data['strIngredient'+index] != ''">{{index}}) {{meal_data['strIngredient'+index]}} - (x{{meal_data['strMeasure'+index]}})</p>
            </div>
        </div>
        <div class="instructions">
            <h5>Instructions</h5>
            {{meal_data.strInstructions}}
        </div>
        <youtube class="video" :video-id="$youtube.getIdFromURL(meal_data.strYoutube)" @playing="playing"></youtube>

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
                console.log(this.meal_data.strInstructions)
            })
            .catch(error => console.log(error))
    },
}
</script>

<style scoped>
.food_detail_card {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: auto auto auto auto auto auto;
    grid-row-gap: 1em;
}

h3 {
    font-variation-settings: "wght" 700, "wdth" 400;
    font-size: 3em;
    grid-column: 1 / 4;
    justify-self: start;
    line-height: 0.1em;
}
.back_arrow:hover {
    cursor: pointer;
    grid-column: 4 / 5;
    color: grey;
}
.back_arrow {
    border: 1px solid black;
    border-radius: 5px;
    max-width: 50%;
    min-width: 60px;;
    place-self: center;
    padding: 5px;
}
h6 {
    display: inline;
    font-variation-settings: "wght" 700, "wdth" 400;
}
h5 {
    font-size: 1.5em;
}
.metadata {
    grid-row: 2 / 3;
    grid-column: 1 / 4;
    color: grey;
}

img {
    max-width: 80%;
    margin: auto;
    grid-column: 2/4;
    grid-row: 3;

}
.source {
    word-break:break-all;
    font-size: 0.7em;
    color:grey; 
    font-style: italic;
}

.ingredients {
 grid-row: 4;
 grid-column: 1 / 5;
}

.instructions {
    grid-row: 5;
    grid-column: 1 / 5;
    line-height: 1.3;
    white-space: pre-wrap;
}

.video {
    grid-row: 6;
    grid-column: 2 / 4;
    margin-left: auto;
    margin-right: auto
}


</style>
<template>
    <div>
        <h2>{{category_name}}</h2>
        <app-recipe-list :list_food_id="list_food_id"></app-recipe-list>
    </div>
</template>
    
<script>
import TheMealDB from '../api/TheMealDB'
import RecipeList from './RecipeList.vue'

export default {
    data() {
        return {
            category_name: this.$route.params.name,
            food_list: []
        }
    },
    components: {
        'appRecipeList': RecipeList
    },
    watch: {
        '$route'(to, from) {
            this.category_name = to.params.name;
            TheMealDB.getRecipesByCategory(this.category_name)
            .then(list => {
                this.food_list = list.meals
            })
        }
    },
    computed: {
        list_food_id() {
            return this.food_list.map(object => object.idMeal)
        }
    },
    created() {
        TheMealDB.getRecipesByCategory(this.category_name)
            .then(list => {
                this.food_list = list.meals
            })
    }
}
</script>

<style>
h2 {
    padding-left: 1em;
}
</style>

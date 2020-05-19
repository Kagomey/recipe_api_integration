<template>
 <div>
    {{category_name}}
    <hr>
    {{food_list}}
 </div>
</template>
    
<script>
import TheMealDB from '../api/TheMealDB'
export default {
    data() {
        return {
            category_name: this.$route.params.name,
            food_list: []
        }
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
    created() {
        TheMealDB.getRecipesByCategory(this.category_name)
            .then(list => {
                this.food_list = list.meals
            })
    }
}
</script>

<style>

</style>

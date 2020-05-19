<template>
<div class="flexbox-container">
    <div v-for="category in categories" class="flexbox-item" @click="selectCategory">
        <img :src="category.strCategoryThumb">
        <router-link :to="'/category/'+category.strCategory" tag="p">{{category.strCategory}}</router-link>
    </div>
</div> 
</template>

<script>
import TheMealDB from '../api/TheMealDB'
export default {
    data() {
        return {
            categories: []
        }
    },
    methods: {
        selectCategory() {

        }
    },
    created() {
        TheMealDB.getRecipeCategories()
            .then(list => {
                this.categories = list.categories
            })
   } 
}
</script>

<style scoped>
    .flexbox-container {
        display: flex;
        max-height: 150px;
        max-width: 75%;
        /* flex-wrap: wrap; */
        min-width: 1000px;
    }
    .flexbox-item {
        max-height: 100px;
        margin-left: 10px;
        margin-right: 10px;
    }
    .item:hover {
        cursor: pointer;
    }
    img {
        border-radius: 50%;
        max-width: 100%;
        min-width: 50px;
        min-height: 50px;
        /* height: auto; */
    }
    p {
        text-align: center;
    }
</style>
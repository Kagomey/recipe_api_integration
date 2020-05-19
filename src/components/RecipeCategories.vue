<template>
<div class="flexbox-container">
    <div v-for="category in categories" class="flexbox-item" @click="selectCategory">
        <img :src="category.strCategoryThumb">
        <router-link :to="'/category/'+category.strCategory" tag="p" class="hoverable">{{category.strCategory}}</router-link>
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
        position: sticky;
        top: 0px;
        max-height: 150px;
        max-width: 75%;
        background-color: #06627b;
        color: white;
        z-index: 9999;
        margin-left: auto;
        margin-right:auto;
        /* flex-wrap: wrap; */
        min-width: 1000px;
    }
    .flexbox-item {
        max-height: 100px;
        margin-left: 10px;
        margin-right: 10px;
    }
    .hoverable:hover {
        cursor: pointer;
    }
    img {
        border-radius: 50%;
        max-width: 100%;
        min-width: 50px;
        min-height: 50px;
    }
    p {
        text-align: center;
    }
</style>
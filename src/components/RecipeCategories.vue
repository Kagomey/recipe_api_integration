<template>
<div class="flexbox-container">
    <div v-for="category in categories" class="item" @click="selectCategory">
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
        height: 150px;
        align-items: stretch;
        background-color: yellow;
    }
    .item {
        border: 1px black solid;
    }
    .item:hover {
        cursor: pointer;
    }
    img {
        border-radius: 50%;
        max-width: 100%;
        height: auto
    }
    p {
        text-align: center;
    }
</style>
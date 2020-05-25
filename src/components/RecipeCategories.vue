<template>
<div class="flexbox-container">
    <router-link v-for="category in categories" :to="'/category/'+category.strCategory" tag="div" class="flexbox-item">
        <div class="container">
            <img :src="category.strCategoryThumb">
            <div class="overlay">
                <div class="text">{{ category.strCategory }}</div>
            </div>
        </div>
        <p>{{ category.strCategory }}</p>
    </router-link>
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
        background-color: #F7F6E5;
        z-index: 9999;
        margin-left: auto;
        margin-right:auto;
        flex-wrap: wrap;
        justify-content: center;
        border-radius: 10px;
    }
    .flexbox-item {
        margin: .7em;
        max-width: 6em;
        max-height: 7em;
    }
    .flexbox-item:hover {
        cursor: pointer;
    }
    img {
        border-radius: 50%;
        display: block;
        width: 100%;
        height: auto;
    }
    p {
        text-align: center;
    }
    .container {
        position: relative;
    }

    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        border-radius: 50%;
        background-color: grey;
    }

    .container:hover .overlay {
        opacity: 1;
    }

    .text {
        color: white;
        font-size: 16px;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: center;
    }

    @media (max-width: 600px) {
        .flexbox-container {
            background-color: red;
        }
    }

</style>
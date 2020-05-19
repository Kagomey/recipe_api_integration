import axios from "axios"


export default {
    getRecipesById(id) {
        return axios.get('lookup.php?i='+id).then(response => {
            return response.data
        })
    },
    getRecipesByName(name) {
        return axios.get('search.php?s='+name).then(response => {
            return response.data
        })
    },
    getRecipeCategories() {
        return axios.get('categories.php').then(response => {
            return response.data
        })
    },
    getRecipesByCategory(category_name) {
        return axios.get('filter.php?c='+category_name).then(response => {
            return response.data
        })
    }
}
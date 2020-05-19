import RecipeCategory from './components/RecipeCategory.vue'
import RecipeDetails from './components/RecipeDetails.vue'

export const routes = [
    {path: '/category/:name', component: RecipeCategory},
    {path: '/recipe/:id', component: RecipeDetails},
]

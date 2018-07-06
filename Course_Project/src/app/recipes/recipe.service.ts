import { Recipe } from "./recipe.model";

export class RecipeService{
    private recipes:Recipe[] = [
        new Recipe("Test Recipe","Test Recipe Description","https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"),
        new Recipe("Test Recipe2","Test Recipe Description2","https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg")
      ];

      getRecipes()
      {
        return this.recipes.slice();
      }
}
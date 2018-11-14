import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Injectable } from '@angular/core';

import {Recipe} from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {

    dbPath = 'https://ng-recipe-book-f9f03.firebaseio.com/recipe.json';

    constructor(private httpService: Http, private recipeService: RecipeService) {}

    saveRecipes() {
        return this.httpService.put(this.dbPath, this.recipeService.getRecipes());
    }

    fetchRecipes() {
        this.httpService.get(this.dbPath).subscribe(
            (data: Response) => {
                const recipes: Recipe[] = data.json();
                // if there is no ingredients array, adding an empty array
                for (const recipe of recipes) {
                    if (!recipe.ingredients) {
                        recipe.ingredients = [];
                        console.log (recipe);
                    }
                }
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}

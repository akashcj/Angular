import { RecipeService } from '../recipes/recipe.service';
import { Injectable } from '@angular/core';

import {Recipe} from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class DataStorageService {

    dbPath = 'https://ng-recipe-book-f9f03.firebaseio.com/recipe.json';

    constructor(private httpclient: HttpClient, 
        private recipeService: RecipeService, 
        private authService: AuthService) {}

    saveRecipes() {
        let token = this.authService.getToken();
        return this.httpclient.put(this.dbPath + '?auth=' + token, this.recipeService.getRecipes(), {observe:'events'});
    }

    fetchRecipes() {
        let token = this.authService.getToken();
        // this.httpService.get(this.dbPath + '?auth=' + token).subscribe(
        this.httpclient.get<Recipe[]>(this.dbPath + '?auth=' + token, {
            observe:'body',
            responseType: 'json'
        }).subscribe(
            (data) => {
                const recipes: Recipe[] = data;
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

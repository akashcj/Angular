import { HttpClient, HttpParams, HttpRequest, HttpResponse} from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Injectable } from '@angular/core';

import {Recipe} from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

    dbPath = 'https://ng-recipe-book-f9f03.firebaseio.com/recipe.json';

    constructor(private httpClientService: HttpClient, 
        private recipeService: RecipeService, 
        private authService: AuthService) {}

    saveRecipes() {
        let token = this.authService.getToken();
        const req = new HttpRequest('PUT',this.dbPath,this.recipeService.getRecipes(), {
            reportProgress:true,
            params: new HttpParams().set('auth', token)
        });
        return this.httpClientService.request(req);
        // return this.httpClientService.put(this.dbPath, this.recipeService.getRecipes()
        //     , {observe:'body',
        //         params: new HttpParams().set('auth',token)});
    }

    fetchRecipes() {
        let token = this.authService.getToken();
        // this.httpService.get(this.dbPath + '?auth=' + token).subscribe(

        this.httpClientService.get<Recipe[]>(this.dbPath + '?auth=' + token, {
            observe:'body',
            responseType: 'json'
        }).subscribe(
            (data) => {
                const recipes: Recipe[] = data;
                //if there is no ingredients array, adding an empty array

                for (const recipe of data) {
                    if (!recipe.ingredients) {
                        recipe.ingredients = [];
                        console.log (recipe);
                    }
                }
                this.recipeService.setRecipes(data);
            }
        );
    }
}

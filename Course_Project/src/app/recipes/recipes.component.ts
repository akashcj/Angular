import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe:Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    //selecting the first recipe by default
    this.selectedRecipe = this.recipeService.getRecipes()[0];
    console.log("All Recipes");
    console.log("Selected Recipe Initially");
    console.log(this.selectedRecipe);
  }

  onRecipeSelected(recipe:Recipe){
    console.log("Got Recipe Selected in the recipe component");
    this.selectedRecipe = recipe;
  }

}

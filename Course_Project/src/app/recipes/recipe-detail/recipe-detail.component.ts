import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe;

  constructor(private shoppingListService:ShoppingListService,
    private activatedRoute:ActivatedRoute,
    private recipeService:RecipeService) { }

  ngOnInit() {
    console.log("Id is:" + this.activatedRoute.snapshot.params['id']);
    
    this.recipe = this.recipeService.getRecipe(parseInt(this.activatedRoute.snapshot.queryParams['id']));
    // if (!this.recipe)
    // {
    //   // getting the first recipe if no recipe exists
    //   this.recipe= this.recipeService.getRecipe(0);
    // }
    this.activatedRoute.params.subscribe(
      (params:Params) => {
        const id:number = parseInt(params['id']);
        this.recipe = this.recipeService.getRecipe(id);
      }
    );
  }

  addIngredientsToShoppingList(){
    console.log("addIngredientsToShoppingList invoked. Current list of ingredients is ");
    console.log(this.shoppingListService.getIngredients());
    this.shoppingListService.addIngredients(this.recipe.ingredients);
    console.log("New list of ingredients is:");
    console.log(this.shoppingListService.getIngredients());
  }

}

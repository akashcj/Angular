import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import {Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  recipeId: number;
  subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService,
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router) { }

  ngOnInit() {
    this.recipeId = parseInt(this.activatedRoute.snapshot.params['id'], 10);
    this.recipe = this.recipeService.getRecipe(this.recipeId);

    // if (!this.recipe)
    // {
    //   // getting the first recipe if no recipe exists
    //   this.recipe= this.recipeService.getRecipe(0);
    // }
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.recipeId = parseInt(this.activatedRoute.snapshot.params['id'], 10);
        this.recipe = this.recipeService.getRecipe(this.recipeId);
      }
    );
  }

  addIngredientsToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.recipeId);
    this.router.navigate(['/recipes']);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

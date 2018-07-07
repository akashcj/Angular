import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe:Recipe;
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }

  addIngredientsToShoppingList(){
    console.log("addIngredientsToShoppingList invoked. Current list of ingredients is ");
    console.log(this.shoppingListService.getIngredients());
    this.shoppingListService.addIngredients(this.recipe.ingredients);
    console.log("New list of ingredients is:");
    console.log(this.shoppingListService.getIngredients());
  }

}

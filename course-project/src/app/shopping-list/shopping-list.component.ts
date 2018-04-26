import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients:Ingredient[];
  subscription:Subscription;
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getAllIgredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (newIngredients:Ingredient[])=>
      {
        this.ingredients = newIngredients;
      }
    );
  }

  onIngredientAdded(addedIngredient:Ingredient){
    this.shoppingListService.addIngredient(addedIngredient);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

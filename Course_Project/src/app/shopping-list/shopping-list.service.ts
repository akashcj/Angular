import { Ingredient } from "../shared/ingredient.model";
import { Output, EventEmitter } from "@angular/core";

export class ShoppingListService{
    @Output() ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredients:Ingredient[] = [
      new Ingredient('Apples',5),
      new Ingredient('Tomatoes', 10)
    ];

    getIngredients()
    {
        return this.ingredients.slice();
    }

    addIngredient(ingredientToAdd:Ingredient)
    {
        this.ingredients.push(ingredientToAdd);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    
}
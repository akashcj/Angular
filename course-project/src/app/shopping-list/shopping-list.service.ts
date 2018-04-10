import {Ingredient} from '../shared/ingredient.model'
import { EventEmitter } from '@angular/core';

export class ShoppingListService{

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients:Ingredient[] = [
        new Ingredient("Apples",5),
        new Ingredient("Tomatoes", 10)
        ];

    getAllIgredients()
    {
        return this.ingredients.slice();
    }

    addIngredient(ingredientToAdd:Ingredient)
    {
        this.ingredients.push(ingredientToAdd);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    
    addIngredients(ingredients:Ingredient[])
    {
        // ingredients.forEach(ingredient => {
        //     this.ingredients.push(ingredient)
        // });
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

}
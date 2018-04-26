import { Subject } from 'rxjs/Subject';
import {Ingredient} from '../shared/ingredient.model'

export class ShoppingListService{

    ingredientsChanged = new Subject<Ingredient[]>();

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
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    
    addIngredients(ingredients:Ingredient[])
    {
        // ingredients.forEach(ingredient => {
        //     this.ingredients.push(ingredient)
        // });
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

}
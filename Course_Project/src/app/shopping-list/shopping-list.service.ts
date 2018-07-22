import { Ingredient } from '../shared/ingredient.model';
import { Subject } from '../../../node_modules/rxjs';

export class ShoppingListService {
    ingredientsChanged = new Subject();
    ingredients: Ingredient[] = [
      new Ingredient('Apples', 5),
      new Ingredient('Tomatoes', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredientToAdd: Ingredient) {
        this.ingredients.push(ingredientToAdd);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredientsToAdd: Ingredient[]) {
        this.ingredients = this.ingredients.concat(ingredientsToAdd.slice());
    }

}

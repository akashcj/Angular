import { Ingredient } from '../shared/ingredient.model';
import { Subject } from '../../../node_modules/rxjs';

export class ShoppingListService {
    ingredientsChanged = new Subject();
    ingredientEditStarted = new Subject();
    ingredients: Ingredient[] = [
      new Ingredient('Apples', 5),
      new Ingredient('Tomatoes', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number): Ingredient {
        return this.ingredients[index];
    }

    addIngredient(ingredientToAdd: Ingredient) {
        this.ingredients.push(ingredientToAdd);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredientsToAdd: Ingredient[]) {
        this.ingredients = this.ingredients.concat(ingredientsToAdd.slice());
    }

    updateIngredient(index: number, ingredient: Ingredient) {
        this.ingredients[index] = ingredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

}

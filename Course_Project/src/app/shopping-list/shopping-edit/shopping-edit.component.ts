import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  editMode = false;
  editItemIndex: number;
  editItem: Ingredient;

  @ViewChild('f') ingredientForm: NgForm;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListService.ingredientEditStarted.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editItemIndex = index;
        this.editItem = this.shoppingListService.getIngredient(index);
        this.ingredientForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        });
      }
    );
  }

  ngOnDestroy() {
    this.shoppingListService.ingredientEditStarted.unsubscribe();
  }

  onSubmit(f: NgForm) {
    const ingredientToAdd: Ingredient =
    new Ingredient(
      f.value.name,
      f.value.amount);
      if (this.editMode) {
        this.shoppingListService.updateIngredient(this.editItemIndex, ingredientToAdd);
      } else {
        this.shoppingListService.addIngredient(ingredientToAdd);
      }
      this.editMode = false;
      f.reset();
  }

  onClear() {
    this.ingredientForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }
}

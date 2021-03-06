import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameElement:ElementRef;
  @ViewChild('amountInput') amountElement:ElementRef;
  addedIngredient: Ingredient;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient(){
    this.addedIngredient = new Ingredient(this.nameElement.nativeElement.value,
    this.amountElement.nativeElement.value);
    this.shoppingListService.addIngredient(this.addedIngredient);
  }

}

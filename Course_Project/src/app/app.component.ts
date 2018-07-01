import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showRecipe:boolean = true;
  onHeaderChange(showRecipe:boolean)
  {
    this.showRecipe = showRecipe;
    console.log("Show Shopping List:" + showRecipe);
  }

  constructor(){
    console.log("In Constructor, showShoppingList is:"+ this.showRecipe);
  }
}

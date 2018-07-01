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
  }

  constructor(){
  }
}

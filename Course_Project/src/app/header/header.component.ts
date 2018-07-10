import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent
{
    @Output() featureSelected:EventEmitter<boolean> = new EventEmitter();

    onShowRecipe(){
        this.featureSelected.emit(true);
    }

    onShowShoppingList(){
        this.featureSelected.emit(false);
    }
}
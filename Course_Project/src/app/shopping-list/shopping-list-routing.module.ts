import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list.component";

const ShoppingListRoutes:Routes = [
    {path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
    imports:[RouterModule.forChild(ShoppingListRoutes)],
    exports: [RouterModule]
})
export class ShoppingListRoutingModule{}
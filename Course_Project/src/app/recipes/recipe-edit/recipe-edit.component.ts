import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode:boolean=true;
  recipe:Recipe;

  constructor(private activatedRoute:ActivatedRoute,
    private recipeService:RecipeService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params:Params) => 
      {
        if (params['id'])
        {
          this.id = parseInt(params['id']);
          this.recipe = this.recipeService.getRecipe(this.id);
          this.editMode = true;
        }
        else
        {
          //id doesn't exist
          this.editMode = false;
        }
      }
    );
  }

}

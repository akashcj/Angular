import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators, AbstractControl } from '@angular/forms';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = true;
  recipe: Recipe;
  recipeEditForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        if (params['id']) {
          this.id = parseInt(params['id'], 10);
          this.recipe = this.recipeService.getRecipe(this.id);
          this.editMode = true;
        } else {
          // id doesn't exist
          this.editMode = false;
        }
        this.initForm();
      }
    );
  }

  private initForm() {
    let recipeName = '';
    let recipeDescription = '';
    let recipeImagePath = '';
    const recipeIngredients: FormArray = new FormArray ([]);

    if (this.editMode) {
      if (this.recipe) {
        recipeName = this.recipe.name;
        recipeDescription = this.recipe.description;
        recipeImagePath = this.recipe.imagePath;
        if (this.recipe['ingredients']) {
          for (const ingredient of this.recipe.ingredients) {
            recipeIngredients.push( new FormGroup( {
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            }));
          }
        }
      }
    }

    this.recipeEditForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  onSubmit() {
    const ingredients: Ingredient[] = [];

    const formIngredients: AbstractControl[] = (<FormArray>this.recipeEditForm.get('ingredients')).controls;

    for (let i = 0; i < formIngredients.length; i++) {
      if (formIngredients[i]) {
        ingredients.push(formIngredients[i].value);
      }
    }

    const newRecipe: Recipe = new Recipe(this.recipeEditForm.get('name').value,
     this.recipeEditForm.get('description').value,
     this.recipeEditForm.get('imagePath').value,
     ingredients
    );

    if (this.editMode) {
      this.recipeService.UpdateRecipe(this.id, newRecipe);
    } else {
      this.id = this.recipeService.AddRecipe(newRecipe);
    }
    // this.router.navigate(['recipes', this.id]);
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  onAddIngredient() {
    (<FormArray>this.recipeEditForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeEditForm.get('ingredients')).controls.splice(index, 1);
  }

  onCancel() {
    // this.router.navigate(['recipes', this.id]);
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }
}

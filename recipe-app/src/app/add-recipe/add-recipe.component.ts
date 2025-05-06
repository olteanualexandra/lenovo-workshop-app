import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../interfaces/recipe.interface';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-recipe',
  imports: [FormsModule, ReactiveFormsModule,MatSlideToggleModule,MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss',
})
export class AddRecipeComponent {
  binding: any;
  localStorageValue: string | null = ' ';

  constructor(readonly recipeService:  RecipesService){}
  addRecipeForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    difficulty: new FormControl('', [
      Validators.required,
      Validators.minLength(0),
    ]),
    image: new FormControl('', [Validators.required, Validators.minLength(3)]),
    prepTimeMinutes: new FormControl(0, [
      Validators.required,
      Validators.min(0),
    ]),
  });

  onSubmit() {
    //if (this.addRecipeForm.valid) console.log(this.addRecipeForm.value);
    //else console.error('FORM IS NOT VALID');

  //   const jsonObj={
  //     "a":12,
  //     "height":180,
  //     "test":{
  //       a:"another object",
  //     },
  //     array:['1',2,4],
  //   };
  //   localStorage.setItem('theme', JSON.stringify(jsonObj));
  //   sessionStorage.setItem('theme', 'light');
  //   this.localStorageValue= localStorage.getItem('theme');
  // }
  if(this.addRecipeForm.valid){
    console.log('Form Data:', this.addRecipeForm.value); 
    this.recipeService.addDbRecipes(this.addRecipeForm.value as Omit<Recipe, 'id'>);
    alert('Recipe added successfully!'); 
  } else {
    console.error('Form is invalid'); 
  }
  }
}
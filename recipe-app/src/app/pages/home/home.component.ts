import { Component } from '@angular/core';

import { Recipe } from '../../interfaces/recipe.interface';
import { RecipesService } from '../../services/recipes.service';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';

@Component({
  selector: 'app-home',
  imports: [RecipeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    recipes: Recipe[] = [];
    dummyRecipes!: Recipe[];
    //errorMessage ='';
    constructor(recipesService: RecipesService){
      this.recipes= recipesService.recipes;
     // try{
      recipesService.getAllRecipes().subscribe({
        next: (response) => {
          console.log(response);
          //throw new Error('Something happened');
          this.dummyRecipes =response.recipes;
        },
       // error: (err) => {
           // console.log(err);
            //this.errorMessage=err.message;
        //},
      });
    //}catch(error: any){
      //this.errorMessage= error;
    }

  }
//}

import { Component } from '@angular/core';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { Recipe } from '../../interfaces/recipe.interface';
import { RecipesService } from '../../services/recipes.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RecipeCardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  recipes: Recipe[] = [];
  dummyRecipes!: Recipe[];
  filteredRecipes!: Recipe[];
  errorMessage: any = '';
  searchValue = '';

  constructor(recipesService: RecipesService, readonly router:Router) {
    this.recipes = recipesService.recipes;
    try {
      recipesService.getAllRecipes().subscribe({
        next: (response) => {
          console.log(response);
          this.dummyRecipes = response.recipes;
          this.filteredRecipes = response.recipes;
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = err.message;
        },
      });
    } catch (error) {
      this.errorMessage = error;
    }
  }

  redirectionToAddRecipe(){
    this.router.navigateByUrl('add-recipe');
  }

  filterValues() {
    this.filteredRecipes = this.dummyRecipes.filter((recipe) =>
      recipe.name.toUpperCase().includes(this.searchValue.toUpperCase())
    );
  }
}

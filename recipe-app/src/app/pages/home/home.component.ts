import { Component, OnInit } from '@angular/core';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { Recipe } from '../../interfaces/recipe.interface';
import { RecipesService } from '../../services/recipes.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { db } from '../../db/db';

@Component({
  selector: 'app-home',
  imports: [RecipeCardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  recipes: Recipe[] = [];
  dummyRecipes!: Recipe[];
  filteredRecipes!: Recipe[];
  errorMessage: any = '';
  searchValue = '';
  dbRecipes!: any[];
  dbsubscription: any;

  constructor(
    private recipesService: RecipesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.recipes = this.recipesService.recipes;

    try {
      this.recipesService.getAllRecipes().subscribe({
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
    
   db.subscribeQuery({ recipes: {} }, (resp) => {
      if (resp.error) {
        this.errorMessage = resp.error;
      }

      if (resp.data) {
        this.dbRecipes = resp.data.recipes;
      }
    });
  }

  redirectionToAddRecipe() {
    this.router.navigateByUrl('add-recipe');
  }
 
 // ngOnDestroy() {
   //this.dbsubscription();
 // }
  filterValues() {
    this.filteredRecipes = this.dummyRecipes.filter((recipe) =>
      recipe.name.toUpperCase().includes(this.searchValue.toUpperCase())
    );
  }
}
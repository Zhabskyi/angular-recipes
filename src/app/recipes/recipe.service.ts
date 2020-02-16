import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';


export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simple a test', 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2235&q=80'),
    new Recipe('A test Recipe', 'This is simple a test', 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2235&q=80')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}

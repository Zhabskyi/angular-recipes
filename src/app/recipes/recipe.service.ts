import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'Suoer testy meal!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/800px-Wiener-Schnitzel02.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Big fat burger',
      'What else you need to say',
      'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBKydwG.img?h=768&w=1080&m=6&q=60&o=t&l=f',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 2),
        new Ingredient('Cheese', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShopingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}

import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredient } from "../shared/ingredient";


@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Kotlet', 'Very calorian', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQh6N5Kv5WH1DAFzLjshVqk9tzXKBTS8VKqa1d3L5NUf5VqyytT', [
      new Ingredient('meat', 2),
      new Ingredient('bread', 1),
    ]),
    new Recipe('Cesar', 'Diet', 'http://stonefiregrill.com/wp-content/uploads/2014/08/SFG-Menu-Caesar-Salad.jpg', [])
  ];

  constructor() { }

  getRecipes () {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1)
  }
}

import {Injectable, EventEmitter} from '@angular/core';
import {Headers, Http, Response} from "@angular/http";

import 'rxjs/add/operator/map';

import { Recipe } from './recipe';
import { Ingredient } from "../shared/ingredient";


@Injectable()
export class RecipeService {
  recipeChanged: EventEmitter<Recipe[]> = new EventEmitter<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Kotlet', 'Very calorian', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQh6N5Kv5WH1DAFzLjshVqk9tzXKBTS8VKqa1d3L5NUf5VqyytT', [
      new Ingredient('meat', 2),
      new Ingredient('bread', 1),
    ]),
    new Recipe('Cesar', 'Diet', 'http://stonefiregrill.com/wp-content/uploads/2014/08/SFG-Menu-Caesar-Salad.jpg', [])
  ];

  constructor(private http: Http) { }

  getRecipes () {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1)
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipebook-ddd76.firebaseio.com/recipes.json', body, { headers: headers })
  }

  fetchData() {
    return this.http.get('https://recipebook-ddd76.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipeChanged.emit(this.recipes);
        }
      );
  }
}

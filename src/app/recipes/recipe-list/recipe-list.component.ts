import {Component, OnInit, EventEmitter, Output} from '@angular/core';

import { Recipe } from "../recipe";
// import { RecipeItemComponent } from './recipe-item.component';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Kotlet', 'Very calorian', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQh6N5Kv5WH1DAFzLjshVqk9tzXKBTS8VKqa1d3L5NUf5VqyytT', []),
    new Recipe('Cesar', 'Diet', 'http://stonefiregrill.com/wp-content/uploads/2014/08/SFG-Menu-Caesar-Salad.jpg', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}

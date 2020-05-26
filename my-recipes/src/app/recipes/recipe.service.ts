import { Ingredient } from './../shared/ingredient.model';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  public recipes: Recipe[];

  constructor(private dataStorageService: DataStorageService) { }

  getRecipes() {
    this.dataStorageService.sendGetRequest('recipes').subscribe((data: any[]) => {
      console.log(data);
      this.recipes = data;
    });
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  /*addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }*/
}

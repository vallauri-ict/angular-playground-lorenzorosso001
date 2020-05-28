import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public recipes: Recipe[];
  public selectedRecipe: Recipe;

  constructor(private dataStorageService: DataStorageService, private shoppingListService: ShoppingListService) {
    
  }

  getRecipes() {
    this.dataStorageService.sendGetRequest('recipes').subscribe((data: any[]) => {
      console.log(data);
      this.recipes = data;
    });
  }

  getRecipe(id: number) {
    this.dataStorageService.sendGetRequest('recipes/' + id).subscribe((data: any[]) => {
      console.log(data);
      this.recipes = data;
    });
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientsToShoppingList(ingredients);
  }
}

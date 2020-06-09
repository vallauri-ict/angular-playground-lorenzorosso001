import { Injectable, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  public recipes: Recipe[];
  public selectedRecipe: Recipe;

  constructor(private dataStorageService: DataStorageService) {
  }

  getRecipes() {
    this.dataStorageService.sendGetRequest('recipes').subscribe((data: Recipe[]) => {
      console.log(data);
      this.recipes = data;
    })
  }

  getRecipe(index: number) {
    this.dataStorageService.sendGetRequest('recipes/' + index).subscribe((data: Recipe) => {
      console.log(data);
      this.selectedRecipe = data;
    })
  }
}

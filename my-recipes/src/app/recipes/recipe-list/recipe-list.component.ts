import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // @Output() recipeWasSelected = new EventEmitter<Recipe>();

  // recipes: Recipe[] = [
  //   new Recipe('A Test Recipe', 'This is a simple test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
  //   new Recipe('', '', ''),
  //   new Recipe('', '', ''),
  //   new Recipe('', '', ''),
  //   new Recipe('', '', ''),
  //   new Recipe('', '', '')
  // ]

  // constructor(private dataStorageService: DataStorageService) { }
  constructor(public recipeService: RecipeService) { }

  ngOnInit(): void {
    // this.dataStorageService.sendGetRequest('recipes').subscribe((data: Recipe[]) => {
    //   console.log(data);
    //   this.recipes = data;
    // });
    this.recipeService.getRecipes();
  }

  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }

}

import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {

  constructor(
    public recipeService: RecipeService, private slService: ShoppingListService, private route: ActivatedRoute ) {
    }

  ngOnInit() {
    this.route.params.subscribe(
        (params: Params) => {
         this.recipeService.getRecipe(+params['id']); //cast a number
        }
      );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeService.selectedRecipe.ingredients);
  }

}

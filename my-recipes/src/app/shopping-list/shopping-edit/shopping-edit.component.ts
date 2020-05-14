import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  //così typescript può accedere a elementi del DOM
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef

  //eventemitter si usa per "informare" il componente padre ricevendo l'evento
  //@Output() ingredientAdded = new EventEmitter<Ingredient>(); //(name:string, amount:number)

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    //accedo ai ref del DOM
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);

    //this.ingredientAdded.emit(newIngredient); //emetto l'evento contenente il nuovo ingrediente così shopping list può prenderselo
    this.slService.addIngredient(newIngredient);
  }
}

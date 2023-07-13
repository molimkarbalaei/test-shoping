import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('tomamto', 10),
  ]

  constructor() { }

  ngOnInit(): void {
  }
  //Pass the method for added ingredients:
  onIngredientAdd(ingredient: Ingredient){
  this.ingredients.push(ingredient)
  }

}

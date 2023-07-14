import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Injectable()
export class ShoppingListService {
  //tell to the component that we have new data is availabe and the type is an array.
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('tomamto', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  //Reciving ingredient with type of ingredient
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    // When ever it changes. a copy of it=> slice
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}

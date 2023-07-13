import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  // inform types
  recipes : Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply a test', 'https://www.southernliving.com/thmb/jM1YjcVqzkt-Ej6pMp7qK--c_9Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg'),
    new Recipe('Recipe here', 'This is a simply a test', 'https://www.southernliving.com/thmb/jM1YjcVqzkt-Ej6pMp7qK--c_9Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg')
  ]
  // Emit an event for selected recipe:
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  constructor() { }

  ngOnInit(): void {
  }
  // Get the selected recipe by type of recipe
  onRecipeSelected(recipe: Recipe){
  this.recipeWasSelected.emit(recipe)
  }

}

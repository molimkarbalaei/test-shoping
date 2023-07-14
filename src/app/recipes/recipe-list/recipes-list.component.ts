import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Recipeservice } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  // inform types
  recipes: Recipe[] = [];

  // Emit an event for selected recipe:
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor(private recipeService: Recipeservice) {}

  ngOnInit(): void {
  this.recipes = this.recipeService.getRecipes()
  }

  // Get the selected recipe by type of recipe
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}

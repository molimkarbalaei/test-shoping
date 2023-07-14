import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { Recipeservice } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [Recipeservice],
})
export class RecipesComponent implements OnInit {
  // Create selectedrecipe property:
  selectedRecipe: Recipe;
  constructor(private recipeService: Recipeservice) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}

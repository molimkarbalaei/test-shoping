import { Component, OnInit } from '@angular/core';
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
  constructor(private recipeService: Recipeservice) {}

  ngOnInit() {
  this.recipes = this.recipeService.getRecipes()
  }

}

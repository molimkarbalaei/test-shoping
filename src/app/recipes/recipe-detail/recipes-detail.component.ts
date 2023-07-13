import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
// Passing the selectedRecipe to the app recipe detail: add a property: thus we use @Input then we go to the recipe component and bind it.
@Input() recipe: Recipe
  constructor() { }

  ngOnInit(): void {
  }

}

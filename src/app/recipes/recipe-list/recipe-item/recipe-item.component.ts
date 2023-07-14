import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { Recipeservice } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  // get the recipe from the outside initially:
  @Input() recipe: Recipe;

  constructor(private recipeService: Recipeservice) {}

  ngOnInit(): void {}

  // writing this method for selected the recipe:
  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}

// recipe item is the reciver and recipe list is the sender component.

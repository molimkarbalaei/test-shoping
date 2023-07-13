import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  // get the recipe from the outside initially:
  @Input() recipe: Recipe;
  // emit the selected event: and it will not pass any information so = void
  @Output() recipeSelected = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  // writing this method for selected the recipe:
  onSelected() {
    this.recipeSelected.emit();
  }
}

// recipe item is the reciver and recipe list is the sender component.

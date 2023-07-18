import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  // get the recipe from the outside initially:
  @Input() recipe: Recipe;
  //To pass the id, we have to pass this info to the component and send it to the recipes-list and also pass this index in recipe detail tempelate.
  @Input() index: number;
  ngOnInit() {}
}

// recipe item is the reciver and recipe list is the sender component.

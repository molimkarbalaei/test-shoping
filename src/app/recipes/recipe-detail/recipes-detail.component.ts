import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Recipeservice } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: Recipeservice,
    private route: ActivatedRoute
  ) {}
  // To get our single recipe with id from the router
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      // react to a new id:
      this.id = +params['id']
      //After fetching the id and store it, fetch new recipe:
      this.recipe = this.recipeService.getRecipe(this.id)
    });
  }
  onAddToShoppingList() {
    // pass on ingredients to the recipe service
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}

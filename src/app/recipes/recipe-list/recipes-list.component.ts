import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Recipeservice } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  // inform types
  recipes: Recipe[] = [];
  constructor(
    private recipeService: Recipeservice,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  //New recipe:
  onNewRecipe() {
    // we can use relative route 'new' so we have to use activatedRoute.
    // We have to inform the router about our current route by relativeTo
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}

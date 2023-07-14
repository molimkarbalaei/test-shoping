import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable()
export class Recipeservice{
   private recipes : Recipe[] = [
        new Recipe('A Test Recipe', 'This is a simply a test', 'https://www.southernliving.com/thmb/jM1YjcVqzkt-Ej6pMp7qK--c_9Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg'),
        new Recipe('Recipe here', 'This is a simply a test', 'https://www.southernliving.com/thmb/jM1YjcVqzkt-Ej6pMp7qK--c_9Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg')
      ]
      getRecipes(){
        return this.recipes.slice()
      }
}
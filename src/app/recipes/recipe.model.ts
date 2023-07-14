import { Ingredient } from "../shared/ingredient.model";

//Blue print:
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[]

  // Using constructor for instantiate this with the new keyword and pass it to the constructor
  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    (this.name = name), (this.description = desc), (this.imagePath = imagePath), (this.ingredients = ingredients);
  }
}

//Blue print:
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  // Using constructor for instantiate this with the new keyword and pass it to the constructor
  constructor(name: string, desc: string, imagePath: string) {
    (this.name = name), (this.description = desc), (this.imagePath = imagePath);
  }
}

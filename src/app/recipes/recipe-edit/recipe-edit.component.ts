import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  // retrive the id:
  constructor(private route: ActivatedRoute) {}
  //Store the id:
  id: number;
  // Find out I'm editing or creating new:
  editMode = false;

  ngOnInit(): void {
    //retrive the id in here:
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      // initially we assumed we create new recipe:
      this.editMode = params['id'] != null;
      console.log(this.editMode);
      
    });
  }
}

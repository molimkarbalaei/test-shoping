import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  //Add 2 properties for the value of input: then passing the name of local refrence.
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  // Passing these data to the parent by emitting an event that is shoping list, ingredients:
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() {}

  ngOnInit(): void {}

  // Adding new ingredients
  onAddItem() {
    // Create a new ingredient
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}

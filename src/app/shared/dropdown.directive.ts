import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
// Adding some functionality to it to allows us to add certain css class to the element it sits on when clicked! and remove again when we clicked again!
export class DropdownDirective {
    // to change it dinamically and bind it to the 'class' of the ELEMENT => we use @HoistBinding
  @HostBinding('class.open') isOpen = false;

  //Toggling so we need to listen to it.
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen
  }
}

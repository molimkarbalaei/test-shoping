import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
// Adding some functionality to it to allows us to add certain css class to the element it sits on when clicked! and remove again when we clicked again!
export class DropdownDirective {
  constructor(private elRef: ElementRef) {}

  // to change it dinamically and bind it to the 'class' of the ELEMENT => we use @HoistBinding
  @HostBinding('class.open') isOpen = false;

  //Toggling so we need to listen to it.
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
}

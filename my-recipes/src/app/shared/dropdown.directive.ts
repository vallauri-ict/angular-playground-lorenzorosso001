import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

//la directive agisce e si riferisce sempre sull'elemento su cui è applicata
export class DropdownDirective {
  //facendo così la classe 'open' si lega al bool 'isOpen', quindi se è true lo mette se no toglie
  @HostBinding('class.open') isOpen: Boolean = false;

  constructor() { }

  //questa direttiva è in ascolto sull'event click
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}

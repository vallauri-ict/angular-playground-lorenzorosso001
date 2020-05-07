import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

//la directive agisce e si riferisce sempre sull'elemento su cui è applicata
export class DropdownDirective {
  //facendo così la classe 'open' si lega al bool 'isOpen', quindi se è true lo mette se no toglie
  @HostBinding('class.open') isOpen: Boolean = false;

  constructor(private elRef: ElementRef) { } //elRef ci permette di raggiungere nel DOM l'elemento su cui è applicata la directive

  //questa direttiva è in ascolto sull'event click
  /*@HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  } */
  //Problema, se clicchi in uno spazio fuori il menu non si chiude..

  //così intercetto il click in ogni punto del dom
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    //se il click è avvenuto sull'elemento avente la directive
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

}

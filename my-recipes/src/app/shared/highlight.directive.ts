//import { Directive, Input, HostListener, ElementRef, Renderer2, OnInit, HostBinding } from '@angular/core';
import { Directive, Input, HostListener, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  @Input() defaultColor: string = 'LightCyan';
  @Input('appHighlight') highlightColor: string = 'Cyan'; //trucchetto, facciamo corrispondere nome direttiva a proprietà, da ora però si può solo più usare con le [] nel DOM
  @HostBinding('style.backgroundColor') backgroundColor: string; //assegno una proprietà del DOM a una variabile

  //elRef si riferisce all'elemento su cui applichiamo la directive
  //constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  constructor() { }

  ngOnInit(): void {
    //tutti gli elementi con la direttiva avranno lightCyan come iniziale
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.defaultColor);
    this.backgroundColor = this.defaultColor;
  }

  //quando avviene il mouseenter entriamo qua
  @HostListener('mouseenter') mouseenter(eventData: Event) {
    //this.elRef.nativeElement.style.backgroundColor = this.highlightColor;
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.highlightColor);
    this.backgroundColor = this.highlightColor;
  }
  //quando avviene il mouseleave entriamo qua
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.elRef.nativeElement.style.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.defaultColor);
    this.backgroundColor = this.defaultColor;
  }

}

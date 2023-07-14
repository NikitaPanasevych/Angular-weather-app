import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[cardColor]',
})
export class CardColorDirective {
  @Input() weather!: string;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.setCardColor();
  }

  private setCardColor() {
    this.element.nativeElement.style.backgroundColor =
      this.weather === 'clear sky' ? '#a4b0be' : '#dfe6e9';
  }
}

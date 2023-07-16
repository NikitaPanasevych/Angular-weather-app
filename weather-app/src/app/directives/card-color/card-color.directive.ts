import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[cardColor]',
})
export class CardColorDirective {
  @Input() cardColor!: {
    bg: string;
    text: string;
  };

  constructor(private element: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setCardColor(this.cardColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = '';
    this.element.nativeElement.style.color = '';
  }


  private setCardColor(color: { bg: string; text: string }) {
    this.element.nativeElement.style.backgroundColor = color.bg;
    this.element.nativeElement.style.color = color.text;
  }
}

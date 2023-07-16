import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[cardColor]',
})
export class CardColorDirective {
  @Input() cardColor: string | undefined;

  constructor(private element: ElementRef) {}
  text: string = ''
  bg: string = ''

  @HostListener('mouseenter') onMouseEnter() {
    this.setCardColor(this.cardColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = '';
    this.element.nativeElement.style.color = '';
  }



  private setCardColor(icon: string | undefined) {
    switch (icon) {
      case '01d': // clear sky done
        this.text = '#272343';
        this.bg = '#ffd803';
        break;
      case '02d': // few clouds
        this.text = '#232946';
        this.bg = '#d4d8f0';
        break;
      case '03d': // scattered clouds
        this.text = '#232946';
        this.bg = '#d4d8f0';
        break;
      case '04d': // broken clouds
        this.text = '#232946';
        this.bg = '#d4d8f0';
        break;
      case '09d': // shower rain
        this.text = '#0e172c';
        this.bg = '#d9d4e7';
        break;
      case '10d': // rain
        this.text = '#0e172c';
        this.bg = '#d9d4e7';
        break;
      case '13d': // snow
        this.text = '#232946';
        this.bg = '#d4d8f0';
        break;
      case '50d': // mist
        this.text = '#232946';
        this.bg = '#d4d8f0';
        break;
      //night
      default:
        this.text = '#b8c1ec';
        this.bg = '#232946';
        break;
    }
    this.element.nativeElement.style.backgroundColor = this.bg;
    this.element.nativeElement.style.color = this.text;
  }
}

import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[cardColor]',
})
export class CardColorDirective {
  @Input() icon!: string;

  colorBG!: string;
  color!: string;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.setCardColor();
  }

  private setCardColor() {
    switch (this.icon) {
      case '01d': // clear sky done
        this.color = '#272343';
        this.colorBG = '#ffd803';
        break;
      case '02d': // few clouds
        this.color = '#232946';
        this.colorBG = '#d4d8f0';
        break;
      case '03d': // scattered clouds
        this.color = '#232946';
        this.colorBG = '#d4d8f0';
        break;
      case '04d': // broken clouds
        this.color = '#232946';
        this.colorBG = '#eff0f3';
        break;
      case '09d': // shower rain
        this.color = '#0e172c';
        this.colorBG = '#d9d4e7';
        break;
      case '10d': // rain
        this.color = '#0e172c';
        this.colorBG = '#d9d4e7';
        break;
      case '13d': // snow
        this.color = '#232946';
        this.colorBG = '#d4d8f0';
        break;
      case '50d': // mist
        this.color = '#232946';
        this.colorBG = '#d4d8f0';
        break;
      //night
      default:
        this.color = '#b8c1ec';
        this.colorBG = '#232946';
        break;
    }
    this.element.nativeElement.style.backgroundColor = this.colorBG;
    this.element.nativeElement.style.color = this.color;
  }
}

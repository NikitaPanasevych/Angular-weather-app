import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { fadeInOut } from 'src/app/animations/fadeInOut';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  animations: [
    fadeInOut
  ]
})
export class WeatherCardComponent implements OnInit, OnDestroy {
  @Input() cityName: string | undefined;
  @Input() temperature: number | undefined;
  @Input() description: string | undefined;
  @Input() temperatureFeelsLike: number | undefined;
  @Input() icon: string | undefined;
  @Input() id: number | undefined;

  @Output() deleteCity = new EventEmitter<number>();

  color = {
    bg: '',
    text: '',
  };

  ngOnInit(): void {
    switch (this.icon) {
      case '01d': // clear sky done
        this.color.text = '#272343';
        this.color.bg = '#ffd803';
        break;
      case '02d': // few clouds
        this.color.text = '#232946';
        this.color.bg = '#d4d8f0';
        break;
      case '03d': // scattered clouds
        this.color.text = '#232946';
        this.color.bg = '#d4d8f0';
        break;
      case '04d': // broken clouds
        this.color.text = '#232946';
        this.color.bg = '#eff0f3';
        break;
      case '09d': // shower rain
        this.color.text = '#0e172c';
        this.color.bg = '#d9d4e7';
        break;
      case '10d': // rain
        this.color.text = '#0e172c';
        this.color.bg = '#d9d4e7';
        break;
      case '13d': // snow
        this.color.text = '#232946';
        this.color.bg = '#d4d8f0';
        break;
      case '50d': // mist
        this.color.text = '#232946';
        this.color.bg = '#d4d8f0';
        break;
      //night
      default:
        this.color.text = '#b8c1ec';
        this.color.bg = '#232946';
        break;
    }
  }

  ngOnDestroy(): void {
    console.log('destroyed');
  }

  delete() {
    this.deleteCity.emit(this.id);
  }
}

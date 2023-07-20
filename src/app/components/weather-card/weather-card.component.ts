import { Component, Input, Output, EventEmitter } from '@angular/core';
import { fadeInOut } from 'src/app/animations/fadeInOut';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  animations: [
    fadeInOut
  ]
})
export class WeatherCardComponent {
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

  delete() {
    this.deleteCity.emit(this.id);
  }
}

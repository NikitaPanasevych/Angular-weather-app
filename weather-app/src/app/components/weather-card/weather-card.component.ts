import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent {
  @Input() cityName: string | undefined;
  @Input() temperature: number | undefined;
  @Input() description: string | undefined;
  @Input() temperatureFeelsLike: number | undefined;
  @Input() icon: string | undefined;

  @Output() deleteCity = new EventEmitter<string>();

  roundTemperature(value: number): number {
    return Math.round(value);
  }

  delete() {
    this.deleteCity.emit(this.cityName);
  }
}

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
  @Input() id: number | undefined;

  @Output() deleteCity = new EventEmitter<number>();

  delete() {
    this.deleteCity.emit(this.id);
  }
}

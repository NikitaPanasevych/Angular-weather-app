import { Component, Input } from '@angular/core';
import { List } from 'src/app/models/weather-forecast.model';

@Component({
  selector: 'weather-forecast-card',
  templateUrl: './weather-forecast-card.component.html',
  styleUrls: ['./weather-forecast-card.component.scss'],
})
export class WeatherForecastCardComponent {
  @Input() temperature!: number;
  @Input() date!: string;
  @Input() icon!: string;
}

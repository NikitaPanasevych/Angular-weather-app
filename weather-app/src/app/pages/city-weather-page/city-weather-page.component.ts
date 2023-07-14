import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherForecast } from 'src/app/models/weather-forecast.model';
import { WeatherForecastService } from 'src/app/services/weather-forecast/weather-forecast.service';

@Component({
  selector: 'app-city-weather-page',
  templateUrl: './city-weather-page.component.html',
  styleUrls: ['./city-weather-page.component.scss'],
})
export class CityWeatherPageComponent implements OnInit {
  cityForecastData!: WeatherForecast;

  constructor(
    private readonly route: ActivatedRoute,
    private forecastService: WeatherForecastService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.forecastService.getWeather(params['city']).subscribe((data) => {
        this.cityForecastData = data;
      });
    });
  }
}

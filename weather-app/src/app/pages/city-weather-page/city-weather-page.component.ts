import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherForecast } from 'src/app/models/weather-forecast.model';
import { Weather } from 'src/app/models/weather.model';
import { WeatherForecastService } from 'src/app/services/weather-forecast/weather-forecast.service';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-city-weather-page',
  templateUrl: './city-weather-page.component.html',
  styleUrls: ['./city-weather-page.component.scss'],
})
export class CityWeatherPageComponent implements OnInit {
  cityForecastData!: WeatherForecast;
  weatherNow!: Weather;

  constructor(
    private readonly route: ActivatedRoute,
    private forecastService: WeatherForecastService,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.weatherService.getWeather(params['city']).subscribe((data) => {
        this.weatherNow = data;
      });
      this.forecastService.getWeather(params['city']).subscribe((data) => {
        this.cityForecastData = data;
      });
    });
  }
}

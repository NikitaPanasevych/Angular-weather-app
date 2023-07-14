import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-weather-page',
  templateUrl: './city-weather-page.component.html',
  styleUrls: ['./city-weather-page.component.scss'],
})
export class CityWeatherPageComponent implements OnInit {
  cityName: string = '';

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.cityName = params['city'];
    });
  }
}

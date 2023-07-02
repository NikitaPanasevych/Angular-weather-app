import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Weather } from '../models/weather.model';
import { WeatherService } from '../weather.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(
    private weatherService: WeatherService,
    private snackbar: MatSnackBar
  ) {}

  items = [
    { id: 1, title: 'Item 1', description: 'Description 1' },
    { id: 2, title: 'Item 2', description: 'Description 2' },
    { id: 3, title: 'Item 3', description: 'Description 3' },
  ];

  @ViewChild('cityForm') cityForm?: NgForm;

  weatherData: Weather[] = [];

  ngOnInit(): void {
    this.weatherService.getWeather('Warsaw').subscribe(
      (data) => {
        this.weatherData?.push(data);
        console.log(this.weatherData);
      },
      (error) => console.error(Error)
    );
  }

  getWeatherData() {
    this.weatherService
      .getWeather(this.cityForm?.value.city)
      .subscribe((data) => {
        if (this.weatherData?.some((item) => item.name === data.name)) {
          this.weatherData?.push(data);
          //snackbar success
          this.snackbar.open('Added', undefined, {
            duration: 2000,
          });
          console.log(this.weatherData);
        } else {
          console.log('City already added');
        }
      });
  }
}

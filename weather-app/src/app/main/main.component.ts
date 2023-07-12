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

  @ViewChild('cityForm') cityForm?: NgForm;

  weatherData: Weather[] = [];

  weatherIconUrl: string = 'http://openweathermap.org/img/wn/';

  getWeatherIconUrl(icon: string): string {
    return this.weatherIconUrl + icon + '@2x.png';
  }

  roundTemperature(value: number): number {
    return Math.round(value);
  }

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
    if (this.cityForm?.value.city != '') {
      this.weatherService.getWeather(this.cityForm?.value.city).subscribe(
        (data) => {
          if (this.weatherData.some((e) => e.name == data.name)) {
            this.snackbar.open('City is already in your list', 'Close', {
              duration: 2000,
            });
          } else {
            this.weatherData?.push(data);
            this.snackbar.open('City added', 'Close', {
              duration: 2000,
            });
          }
        },
        (error) => {
          this.snackbar.open('City not found', 'Close', {
            duration: 2000,
          });
        }
      );
    } else {
      this.snackbar.open('Type a city', 'Close', {
        duration: 2000,
      });
    }
  }

  receiveDeleteCity($event: string) {
    let deletedCity: string = $event;
    this.weatherData = this.weatherData.filter((e) => e.name != deletedCity);
    this.snackbar.open('City deleted', 'Close', {
      duration: 2000,
    });
  }
}

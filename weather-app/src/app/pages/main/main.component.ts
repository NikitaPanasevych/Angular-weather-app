import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Weather } from 'src/app/models/weather.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { Observable, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { WeatherListState } from 'src/app/store/weather-list.state';
import {
  addToWeatherList,
  removeFromWeatherList,
} from 'src/app/store/weather-list.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(
    private weatherService: WeatherService,
    private snackbar: MatSnackBar,
    private store: Store<WeatherListState>
  ) {
    this.weatherList$ = store.select('weatherList');
  }

  weatherList$: Observable<Weather[]>;

  @ViewChild('cityForm') cityForm?: NgForm;

  weatherData: Weather[] = [];

  ngOnInit(): void {
    this.weatherList$.subscribe((weatherList) => {
      this.weatherData = weatherList;
    });
    if (this.weatherData.length == 0) {
      this.weatherService.getWeather('Warsaw').subscribe(
        (data) => {
          this.addWeatherToList(data);
        },
        (error) => console.error(Error)
      );
    }
  }

  addWeatherToList(weather: Weather) {
    this.store.dispatch(addToWeatherList({ weather }));
  }

  removeWeatherFromList(id: number) {
    this.store.dispatch(removeFromWeatherList({ id }));
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
            this.addWeatherToList(data);
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

  receiveDeleteCity($event: number) {
    this.removeWeatherFromList($event);
    this.snackbar.open('City deleted', 'Close', {
      duration: 2000,
    });
  }
}

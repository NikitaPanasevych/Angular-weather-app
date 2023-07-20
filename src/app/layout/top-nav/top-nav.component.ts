import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { dropdown } from 'src/app/animations/dropdown';
import { Weather } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { addToWeatherList, removeFromWeatherList } from 'src/app/store/weather-list.actions';
import { WeatherListState } from 'src/app/store/weather-list.state';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  animations: [dropdown],
})
export class TopNavComponent {

  constructor(
    private weatherService: WeatherService,
    private snackbar: MatSnackBar,
    private store: Store<WeatherListState>
  ) {
    this.weatherList$ = store.select('weatherList');
  }

  @ViewChild('cityForm') cityForm?: NgForm;

  weatherList$: Observable<Weather[]>;
  weatherData: Weather[] = [];
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
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



}

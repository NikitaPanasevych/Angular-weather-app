import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { WeatherForecast } from 'src/app/models/weather-forecast.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastService {
  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<WeatherForecast> {
    const url = `${environment.baseApiUrlForecast}?q=${city}&appid=${environment.apiKey}&units=metric`;
    return this.http.get<WeatherForecast>(url);
  }
}

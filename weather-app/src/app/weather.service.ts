import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `${environment.baseApiUrl}?q=${city}&appid=${environment.apiKey}&units=metric`;
    return this.http.get<any>(url);
  }
}

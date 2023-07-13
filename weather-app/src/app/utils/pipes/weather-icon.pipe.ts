import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherIconPipe',
})
export class WeatherIconPipe implements PipeTransform {
  transform(icon: string | undefined): string {
    const weatherIconUrl: string = 'http://openweathermap.org/img/wn/';
    return weatherIconUrl + icon + '@2x.png';
  }
}

import { WeatherIconPipe } from './weather-icon.pipe';

describe('WeatherIconPipe', () => {
  it('should return a valid icon url', () => {
    const pipe = new WeatherIconPipe();
    const icon = '01d';
    const weatherIconUrl: string = 'http://openweathermap.org/img/wn/';
    expect(pipe.transform(icon)).toEqual(weatherIconUrl + icon + '@2x.png');
  });
});

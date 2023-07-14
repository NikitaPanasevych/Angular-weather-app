import { TestBed } from '@angular/core/testing';
import { WeatherForecastService } from './weather-forecast.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment.prod';

import { WeatherForecast } from 'src/app/models/weather-forecast.model';
describe('WeatherForecastService', () => {
  let service: WeatherForecastService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherForecastService],
    });
    service = TestBed.inject(WeatherForecastService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('response should be have property list with length 40', () => {
    const city = 'Warsaw';

    service.getWeather(city).subscribe((WeatherForecast: WeatherForecast) => {
      expect(WeatherForecast.list.length).toBe(40); // 40 is the length of the list in the mocked response
    });

    const req = httpMock.expectOne(
      `${environment.baseApiUrlForecast}?q=${city}&appid=${environment.apiKey}&units=metric`
    );
    expect(req.request.method).toBe('GET');
    req.flush({
      cod: '200',
      message: 0,
      cnt: 40,
      list: [
        {
          dt: 1689346800,
          main: {
            temp: 299,
            feels_like: 298.87,
            temp_min: 297.55,
            temp_max: 299,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 993,
            humidity: 47,
            temp_kf: 1.45,
          },
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'scattered clouds',
              icon: '03d',
            },
          ],
          clouds: {
            all: 40,
          },
          wind: {
            speed: 0.44,
            deg: 344,
            gust: 1.57,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-14 15:00:00',
        },
        {
          dt: 1689357600,
          main: {
            temp: 296.11,
            feels_like: 295.98,
            temp_min: 294.3,
            temp_max: 296.11,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 992,
            humidity: 58,
            temp_kf: 1.81,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04d',
            },
          ],
          clouds: {
            all: 66,
          },
          wind: {
            speed: 1.28,
            deg: 122,
            gust: 1.44,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-14 18:00:00',
        },
        {
          dt: 1689368400,
          main: {
            temp: 291.67,
            feels_like: 291.3,
            temp_min: 291.67,
            temp_max: 291.67,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 993,
            humidity: 66,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04n',
            },
          ],
          clouds: {
            all: 72,
          },
          wind: {
            speed: 1.83,
            deg: 107,
            gust: 2.17,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-07-14 21:00:00',
        },
        {
          dt: 1689379200,
          main: {
            temp: 289.11,
            feels_like: 288.69,
            temp_min: 289.11,
            temp_max: 289.11,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 992,
            humidity: 74,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04n',
            },
          ],
          clouds: {
            all: 51,
          },
          wind: {
            speed: 1.26,
            deg: 141,
            gust: 1.43,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-07-15 00:00:00',
        },
        {
          dt: 1689390000,
          main: {
            temp: 288.41,
            feels_like: 287.98,
            temp_min: 288.41,
            temp_max: 288.41,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 992,
            humidity: 76,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'scattered clouds',
              icon: '03d',
            },
          ],
          clouds: {
            all: 32,
          },
          wind: {
            speed: 1.35,
            deg: 162,
            gust: 1.34,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-15 03:00:00',
        },
        {
          dt: 1689400800,
          main: {
            temp: 294.33,
            feels_like: 294.15,
            temp_min: 294.33,
            temp_max: 294.33,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 992,
            humidity: 63,
            temp_kf: 0,
          },
          weather: [
            {
              id: 801,
              main: 'Clouds',
              description: 'few clouds',
              icon: '02d',
            },
          ],
          clouds: {
            all: 21,
          },
          wind: {
            speed: 1.61,
            deg: 169,
            gust: 2.11,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-15 06:00:00',
        },
        {
          dt: 1689411600,
          main: {
            temp: 299.91,
            feels_like: 300.13,
            temp_min: 299.91,
            temp_max: 299.91,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 992,
            humidity: 46,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          clouds: {
            all: 10,
          },
          wind: {
            speed: 2.1,
            deg: 161,
            gust: 2.72,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-15 09:00:00',
        },
        {
          dt: 1689422400,
          main: {
            temp: 302.68,
            feels_like: 302.21,
            temp_min: 302.68,
            temp_max: 302.68,
            pressure: 1015,
            sea_level: 1015,
            grnd_level: 991,
            humidity: 39,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          clouds: {
            all: 10,
          },
          wind: {
            speed: 1,
            deg: 239,
            gust: 3.63,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-15 12:00:00',
        },
        {
          dt: 1689433200,
          main: {
            temp: 303.26,
            feels_like: 303.09,
            temp_min: 303.26,
            temp_max: 303.26,
            pressure: 1015,
            sea_level: 1015,
            grnd_level: 990,
            humidity: 41,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          clouds: {
            all: 7,
          },
          wind: {
            speed: 0.45,
            deg: 119,
            gust: 2.58,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-15 15:00:00',
        },
        {
          dt: 1689444000,
          main: {
            temp: 298.12,
            feels_like: 298.27,
            temp_min: 298.12,
            temp_max: 298.12,
            pressure: 1015,
            sea_level: 1015,
            grnd_level: 990,
            humidity: 61,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          clouds: {
            all: 5,
          },
          wind: {
            speed: 2.47,
            deg: 121,
            gust: 2.78,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-15 18:00:00',
        },
        {
          dt: 1689454800,
          main: {
            temp: 294.21,
            feels_like: 294.15,
            temp_min: 294.21,
            temp_max: 294.21,
            pressure: 1015,
            sea_level: 1015,
            grnd_level: 990,
            humidity: 68,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          clouds: {
            all: 3,
          },
          wind: {
            speed: 1.18,
            deg: 143,
            gust: 1.39,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-07-15 21:00:00',
        },
        {
          dt: 1689465600,
          main: {
            temp: 292.94,
            feels_like: 292.91,
            temp_min: 292.94,
            temp_max: 292.94,
            pressure: 1015,
            sea_level: 1015,
            grnd_level: 989,
            humidity: 74,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          clouds: {
            all: 2,
          },
          wind: {
            speed: 1.31,
            deg: 152,
            gust: 1.43,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-07-16 00:00:00',
        },
        {
          dt: 1689476400,
          main: {
            temp: 292.02,
            feels_like: 292,
            temp_min: 292.02,
            temp_max: 292.02,
            pressure: 1014,
            sea_level: 1014,
            grnd_level: 989,
            humidity: 78,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          clouds: {
            all: 0,
          },
          wind: {
            speed: 1.45,
            deg: 169,
            gust: 1.44,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-16 03:00:00',
        },
        {
          dt: 1689487200,
          main: {
            temp: 297.32,
            feels_like: 297.46,
            temp_min: 297.32,
            temp_max: 297.32,
            pressure: 1015,
            sea_level: 1015,
            grnd_level: 990,
            humidity: 64,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          clouds: {
            all: 1,
          },
          wind: {
            speed: 1,
            deg: 242,
            gust: 1.33,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-16 06:00:00',
        },
        {
          dt: 1689498000,
          main: {
            temp: 302.9,
            feels_like: 303.28,
            temp_min: 302.9,
            temp_max: 302.9,
            pressure: 1015,
            sea_level: 1015,
            grnd_level: 990,
            humidity: 46,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          clouds: {
            all: 2,
          },
          wind: {
            speed: 0.84,
            deg: 301,
            gust: 1.59,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-16 09:00:00',
        },
        {
          dt: 1689508800,
          main: {
            temp: 305.07,
            feels_like: 305.49,
            temp_min: 305.07,
            temp_max: 305.07,
            pressure: 1014,
            sea_level: 1014,
            grnd_level: 990,
            humidity: 41,
            temp_kf: 0,
          },
          weather: [
            {
              id: 801,
              main: 'Clouds',
              description: 'few clouds',
              icon: '02d',
            },
          ],
          clouds: {
            all: 23,
          },
          wind: {
            speed: 0.85,
            deg: 31,
            gust: 1.61,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-16 12:00:00',
        },
        {
          dt: 1689519600,
          main: {
            temp: 302.02,
            feels_like: 303.01,
            temp_min: 302.02,
            temp_max: 302.02,
            pressure: 1014,
            sea_level: 1014,
            grnd_level: 989,
            humidity: 53,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'scattered clouds',
              icon: '03d',
            },
          ],
          clouds: {
            all: 45,
          },
          wind: {
            speed: 0.27,
            deg: 276,
            gust: 3.9,
          },
          visibility: 10000,
          pop: 0.05,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-16 15:00:00',
        },
        {
          dt: 1689530400,
          main: {
            temp: 296.06,
            feels_like: 296.52,
            temp_min: 296.06,
            temp_max: 296.06,
            pressure: 1015,
            sea_level: 1015,
            grnd_level: 990,
            humidity: 81,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10d',
            },
          ],
          clouds: {
            all: 61,
          },
          wind: {
            speed: 1.29,
            deg: 283,
            gust: 2.94,
          },
          visibility: 10000,
          pop: 0.47,
          rain: {
            '3h': 1.43,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-16 18:00:00',
        },
        {
          dt: 1689541200,
          main: {
            temp: 294.57,
            feels_like: 294.91,
            temp_min: 294.57,
            temp_max: 294.57,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 991,
            humidity: 82,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10n',
            },
          ],
          clouds: {
            all: 63,
          },
          wind: {
            speed: 0.33,
            deg: 264,
            gust: 0.92,
          },
          visibility: 10000,
          pop: 0.41,
          rain: {
            '3h': 0.24,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-07-16 21:00:00',
        },
        {
          dt: 1689552000,
          main: {
            temp: 293.33,
            feels_like: 293.65,
            temp_min: 293.33,
            temp_max: 293.33,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 991,
            humidity: 86,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'scattered clouds',
              icon: '03n',
            },
          ],
          clouds: {
            all: 31,
          },
          wind: {
            speed: 0.51,
            deg: 219,
            gust: 0.73,
          },
          visibility: 10000,
          pop: 0.17,
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-07-17 00:00:00',
        },
        {
          dt: 1689562800,
          main: {
            temp: 292.56,
            feels_like: 292.85,
            temp_min: 292.56,
            temp_max: 292.56,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 991,
            humidity: 88,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04d',
            },
          ],
          clouds: {
            all: 68,
          },
          wind: {
            speed: 0.88,
            deg: 81,
            gust: 0.99,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-17 03:00:00',
        },
        {
          dt: 1689573600,
          main: {
            temp: 295.75,
            feels_like: 296.15,
            temp_min: 295.75,
            temp_max: 295.75,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 991,
            humidity: 80,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10d',
            },
          ],
          clouds: {
            all: 84,
          },
          wind: {
            speed: 0.93,
            deg: 110,
            gust: 1.2,
          },
          visibility: 10000,
          pop: 0.34,
          rain: {
            '3h': 0.29,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-17 06:00:00',
        },
        {
          dt: 1689584400,
          main: {
            temp: 300.42,
            feels_like: 301.92,
            temp_min: 300.42,
            temp_max: 300.42,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 992,
            humidity: 64,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10d',
            },
          ],
          clouds: {
            all: 84,
          },
          wind: {
            speed: 2.87,
            deg: 299,
            gust: 3.31,
          },
          visibility: 10000,
          pop: 0.52,
          rain: {
            '3h': 0.95,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-17 09:00:00',
        },
        {
          dt: 1689595200,
          main: {
            temp: 299.48,
            feels_like: 299.48,
            temp_min: 299.48,
            temp_max: 299.48,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 992,
            humidity: 71,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10d',
            },
          ],
          clouds: {
            all: 92,
          },
          wind: {
            speed: 1.06,
            deg: 299,
            gust: 1.86,
          },
          visibility: 10000,
          pop: 0.97,
          rain: {
            '3h': 2.84,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-17 12:00:00',
        },
        {
          dt: 1689606000,
          main: {
            temp: 301.44,
            feels_like: 302.8,
            temp_min: 301.44,
            temp_max: 301.44,
            pressure: 1015,
            sea_level: 1015,
            grnd_level: 990,
            humidity: 58,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04d',
            },
          ],
          clouds: {
            all: 79,
          },
          wind: {
            speed: 2.74,
            deg: 279,
            gust: 3.55,
          },
          visibility: 10000,
          pop: 0.27,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-17 15:00:00',
        },
        {
          dt: 1689616800,
          main: {
            temp: 297.21,
            feels_like: 297.71,
            temp_min: 297.21,
            temp_max: 297.21,
            pressure: 1015,
            sea_level: 1015,
            grnd_level: 990,
            humidity: 78,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10d',
            },
          ],
          clouds: {
            all: 43,
          },
          wind: {
            speed: 2.25,
            deg: 284,
            gust: 2.82,
          },
          visibility: 10000,
          pop: 0.84,
          rain: {
            '3h': 0.69,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-17 18:00:00',
        },
        {
          dt: 1689627600,
          main: {
            temp: 293.31,
            feels_like: 293.65,
            temp_min: 293.31,
            temp_max: 293.31,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 991,
            humidity: 87,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10n',
            },
          ],
          clouds: {
            all: 1,
          },
          wind: {
            speed: 1.44,
            deg: 191,
            gust: 1.48,
          },
          visibility: 10000,
          pop: 0.87,
          rain: {
            '3h': 0.81,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-07-17 21:00:00',
        },
        {
          dt: 1689638400,
          main: {
            temp: 292.2,
            feels_like: 292.46,
            temp_min: 292.2,
            temp_max: 292.2,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 991,
            humidity: 88,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10n',
            },
          ],
          clouds: {
            all: 3,
          },
          wind: {
            speed: 2.33,
            deg: 221,
            gust: 3.02,
          },
          visibility: 10000,
          pop: 0.75,
          rain: {
            '3h': 0.16,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-07-18 00:00:00',
        },
        {
          dt: 1689649200,
          main: {
            temp: 290.38,
            feels_like: 290.43,
            temp_min: 290.38,
            temp_max: 290.38,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 991,
            humidity: 87,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          clouds: {
            all: 0,
          },
          wind: {
            speed: 3.43,
            deg: 252,
            gust: 6.44,
          },
          visibility: 10000,
          pop: 0.08,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-18 03:00:00',
        },
        {
          dt: 1689660000,
          main: {
            temp: 293.13,
            feels_like: 293.14,
            temp_min: 293.13,
            temp_max: 293.13,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 993,
            humidity: 75,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          clouds: {
            all: 2,
          },
          wind: {
            speed: 5.85,
            deg: 288,
            gust: 10.74,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-18 06:00:00',
        },
        {
          dt: 1689670800,
          main: {
            temp: 297.03,
            feels_like: 296.78,
            temp_min: 297.03,
            temp_max: 297.03,
            pressure: 1019,
            sea_level: 1019,
            grnd_level: 994,
            humidity: 50,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          clouds: {
            all: 6,
          },
          wind: {
            speed: 3.93,
            deg: 308,
            gust: 5.05,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-18 09:00:00',
        },
        {
          dt: 1689681600,
          main: {
            temp: 299.13,
            feels_like: 299.13,
            temp_min: 299.13,
            temp_max: 299.13,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 993,
            humidity: 42,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'scattered clouds',
              icon: '03d',
            },
          ],
          clouds: {
            all: 25,
          },
          wind: {
            speed: 2.72,
            deg: 289,
            gust: 5.18,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-18 12:00:00',
        },
        {
          dt: 1689692400,
          main: {
            temp: 299.62,
            feels_like: 299.62,
            temp_min: 299.62,
            temp_max: 299.62,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 992,
            humidity: 38,
            temp_kf: 0,
          },
          weather: [
            {
              id: 801,
              main: 'Clouds',
              description: 'few clouds',
              icon: '02d',
            },
          ],
          clouds: {
            all: 21,
          },
          wind: {
            speed: 3.43,
            deg: 267,
            gust: 4.61,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-18 15:00:00',
        },
        {
          dt: 1689703200,
          main: {
            temp: 294.84,
            feels_like: 294.63,
            temp_min: 294.84,
            temp_max: 294.84,
            pressure: 1015,
            sea_level: 1015,
            grnd_level: 990,
            humidity: 60,
            temp_kf: 0,
          },
          weather: [
            {
              id: 801,
              main: 'Clouds',
              description: 'few clouds',
              icon: '02d',
            },
          ],
          clouds: {
            all: 12,
          },
          wind: {
            speed: 0.82,
            deg: 287,
            gust: 1.55,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-18 18:00:00',
        },
        {
          dt: 1689714000,
          main: {
            temp: 291,
            feels_like: 290.51,
            temp_min: 291,
            temp_max: 291,
            pressure: 1015,
            sea_level: 1015,
            grnd_level: 990,
            humidity: 64,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          clouds: {
            all: 3,
          },
          wind: {
            speed: 1.2,
            deg: 123,
            gust: 1.22,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-07-18 21:00:00',
        },
        {
          dt: 1689724800,
          main: {
            temp: 289.69,
            feels_like: 289.15,
            temp_min: 289.69,
            temp_max: 289.69,
            pressure: 1014,
            sea_level: 1014,
            grnd_level: 989,
            humidity: 67,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          clouds: {
            all: 2,
          },
          wind: {
            speed: 1.4,
            deg: 141,
            gust: 1.47,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-07-19 00:00:00',
        },
        {
          dt: 1689735600,
          main: {
            temp: 288.91,
            feels_like: 288.37,
            temp_min: 288.91,
            temp_max: 288.91,
            pressure: 1012,
            sea_level: 1012,
            grnd_level: 987,
            humidity: 70,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04d',
            },
          ],
          clouds: {
            all: 62,
          },
          wind: {
            speed: 1.08,
            deg: 124,
            gust: 1.17,
          },
          visibility: 10000,
          pop: 0.06,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-19 03:00:00',
        },
        {
          dt: 1689746400,
          main: {
            temp: 293.51,
            feels_like: 293.25,
            temp_min: 293.51,
            temp_max: 293.51,
            pressure: 1012,
            sea_level: 1012,
            grnd_level: 986,
            humidity: 63,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04d',
            },
          ],
          clouds: {
            all: 75,
          },
          wind: {
            speed: 0.97,
            deg: 118,
            gust: 1.43,
          },
          visibility: 10000,
          pop: 0.27,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-19 06:00:00',
        },
        {
          dt: 1689757200,
          main: {
            temp: 298.07,
            feels_like: 298.05,
            temp_min: 298.07,
            temp_max: 298.07,
            pressure: 1010,
            sea_level: 1010,
            grnd_level: 986,
            humidity: 55,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04d',
            },
          ],
          clouds: {
            all: 82,
          },
          wind: {
            speed: 2.14,
            deg: 237,
            gust: 2.89,
          },
          visibility: 10000,
          pop: 0.31,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-19 09:00:00',
        },
        {
          dt: 1689768000,
          main: {
            temp: 300.46,
            feels_like: 301.31,
            temp_min: 300.46,
            temp_max: 300.46,
            pressure: 1008,
            sea_level: 1008,
            grnd_level: 983,
            humidity: 56,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],
          clouds: {
            all: 91,
          },
          wind: {
            speed: 2.68,
            deg: 246,
            gust: 3.98,
          },
          visibility: 10000,
          pop: 0.31,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-07-19 12:00:00',
        },
      ],
      city: {
        id: 3094802,
        name: 'Krakow',
        coord: {
          lat: 50.0833,
          lon: 19.9167,
        },
        country: 'PL',
        population: 755050,
        timezone: 7200,
        sunrise: 1689302743,
        sunset: 1689360368,
      },
    }); // Flush the response
  });
});

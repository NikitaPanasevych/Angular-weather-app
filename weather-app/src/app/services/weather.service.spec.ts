import { TestBed } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment.prod';
import { Weather } from '../models/weather.model';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService],
    });
    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('response should be of type Weather', () => {
    const city = 'Warsaw';

    service.getWeather(city).subscribe((weather: Weather) => {
      expect(weather.name).toBe('Warsaw'); // Check if the response has the property weather
    });

    const req = httpMock.expectOne(
      `${environment.baseApiUrl}?q=${city}&appid=${environment.apiKey}&units=metric`
    );
    expect(req.request.method).toBe('GET');
    req.flush({
      coord: {
        lon: 21.0118,
        lat: 52.2298,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      base: 'stations',
      main: {
        temp: 293.52,
        feels_like: 293.73,
        temp_min: 290.04,
        temp_max: 295.25,
        pressure: 1009,
        humidity: 81,
      },
      visibility: 10000,
      wind: {
        speed: 3.09,
        deg: 270,
      },
      clouds: {
        all: 0,
      },
      dt: 1689194758,
      sys: {
        type: 2,
        id: 2035775,
        country: 'PL',
        sunrise: 1689128912,
        sunset: 1689188045,
      },
      timezone: 7200,
      id: 756135,
      name: 'Warsaw',
      cod: 200,
    }); // Flush the response
  });
});

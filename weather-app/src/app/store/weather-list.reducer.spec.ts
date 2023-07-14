import { initialState, weatherListReducer } from './weather-list.reducer';
import {
  addToWeatherList,
  removeFromWeatherList,
} from './weather-list.actions';
import { Weather } from '../models/weather.model';

describe('weatherListReducer', () => {
  it('should return the initial state', () => {
    const action = {} as any;
    const state = weatherListReducer(undefined, action);

    expect(state).toEqual(initialState);
  });

  it('should add weather to the list', () => {
    const weather: Weather = {
      coord: {
        lon: 19.9167,
        lat: 50.0833,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      base: 'stations',
      main: {
        temp: 299.19,
        feels_like: 299.19,
        temp_min: 297.99,
        temp_max: 300.67,
        pressure: 1018,
        humidity: 46,
      },
      visibility: 10000,
      wind: {
        speed: 2.06,
        deg: 230,
      },
      clouds: {
        all: 20,
      },
      dt: 1689335257,
      sys: {
        type: 2,
        id: 2074307,
        country: 'PL',
        sunrise: 1689302743,
        sunset: 1689360368,
      },
      timezone: 7200,
      id: 3094802,
      name: 'Krakow',
      cod: 200,
    };
    const action = addToWeatherList({ weather });
    const state = weatherListReducer(initialState, action);

    expect(state).toContain(weather);
  });

  it('should remove weather from the list', () => {
    const existingWeather = {
      coord: {
        lon: 19.9167,
        lat: 50.0833,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      base: 'stations',
      main: {
        temp: 299.19,
        feels_like: 299.19,
        temp_min: 297.99,
        temp_max: 300.67,
        pressure: 1018,
        humidity: 46,
      },
      visibility: 10000,
      wind: {
        speed: 2.06,
        deg: 230,
      },
      clouds: {
        all: 20,
      },
      dt: 1689335257,
      sys: {
        type: 2,
        id: 2074307,
        country: 'PL',
        sunrise: 1689302743,
        sunset: 1689360368,
      },
      timezone: 7200,
      id: 3094802,
      name: 'Krakow',
      cod: 200,
    };
    const action = removeFromWeatherList({ id: existingWeather.id });
    const state = weatherListReducer([existingWeather], action);

    expect(state).not.toContain(existingWeather);
  });
});

import { createReducer, on } from '@ngrx/store';
import { Weather } from '../models/weather.model';
import {
  addToWeatherList,
  removeFromWeatherList,
} from './weather-list.actions';

// Import the localStorage functions
const getItemFromLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};
const setItemToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const initialState: ReadonlyArray<Weather> =
  getItemFromLocalStorage('weatherList') || [];

export const weatherListReducer = createReducer(
  initialState,

  on(addToWeatherList, (state, { weather }) => {
    const newState = [...state, weather];
    setItemToLocalStorage('weatherList', newState);
    return newState;
  }),

  on(removeFromWeatherList, (state, { id }) => {
    const newState = state.filter((weather) => weather.id !== id);
    setItemToLocalStorage('weatherList', newState);
    return newState;
  })
);

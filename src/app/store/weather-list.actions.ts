import { createAction, props } from '@ngrx/store';
import { Weather } from '../models/weather.model';

export const addToWeatherList = createAction(
  '[Weather List] Add To Weather List',
  props<{ weather: Weather }>()
);

export const removeFromWeatherList = createAction(
  '[Weather List] Remove From Weather List',
  props<{ id: number }>()
);

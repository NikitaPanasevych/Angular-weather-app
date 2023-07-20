import { trigger, transition, style, animate } from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [/*
  transition(':enter', [
    style({ opacity: 0 }),
    animate('2000ms', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate('2000ms', style({ opacity: 0 }))
  ])*/
]);

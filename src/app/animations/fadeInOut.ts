import { trigger, transition, style, animate, sequence } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
    transition(':enter', [
      style({ scale: 0.5, opacity: 0 }),
      sequence([
        animate('500ms', style({  scale: 1, opacity: 1, easing: 'ease-in-out' }))
      ]),
    ]),
    transition(':leave', [
      animate('500ms', style({ opacity: 0, scale: 0, easing: 'ease-in-out' }))
    ])
  ])
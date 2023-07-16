import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimations } from './animations/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routeAnimations, // Remove the square brackets here
  ],
})
export class AppComponent {
  
  getAnimationData(outlet: RouterOutlet) {
    // Return the animation data based on the route or any other logic
    // For example, you can return different animation values based on the route path
    return outlet.activatedRouteData['animation']; // Use square bracket notation
  }
  
  title = 'weather-app';
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityWeatherPageComponent } from './pages/city-weather-page/city-weather-page.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: ':city',
    component: CityWeatherPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

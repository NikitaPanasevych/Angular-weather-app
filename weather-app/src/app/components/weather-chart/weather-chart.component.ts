import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart } from 'chart.js';
import 'chart.js/auto';
import { WeatherForecast } from 'src/app/models/weather-forecast.model';
import { WeatherForecastService } from 'src/app/services/weather-forecast/weather-forecast.service';

@Component({
  selector: 'app-weather-chart',
  templateUrl: './weather-chart.component.html',
  styleUrls: ['./weather-chart.component.scss'],
})
export class WeatherChartComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private weatherForecastService: WeatherForecastService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.weatherForecastService
        .getWeather(params['city'])
        .subscribe((data) => {
          this.createChart(data);
        });
    });
  }

  createChart(data: WeatherForecast) {
    const chart = new Chart('myChart', {
      type: 'line',
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Weather forecast chart',
            color: '#f25042',
            font: {
              size: 20,
            },
          },
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            ticks: {
              color: '#f25042',
              font: {
                size: 14,
                weight: 'bold',
              },
            },
          },
          y: {
            ticks: {
              color: '#f25042',
              font: {
                size: 14,
                weight: 'bold',
              },
            },
          },
        },
      },
      data: {
        labels: data.list.map(
          (item) => item.dt_txt.split(' ')[1].split(':')[0] + ':00'
        ),
        datasets: [
          {
            label: 'Temperature',
            data: data.list.map((item) => item.main.temp),
            borderColor: '#f25042',
            backgroundColor: '#f25042',
          },
        ],
      },
    });
  }
}

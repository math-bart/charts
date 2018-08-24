import {Component, OnInit} from '@angular/core';
import { WeatherService } from '../weather.service';
import { Chart } from 'chart.js';
import 'chart.piecelabel.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  chart = []; // This will hold our chart info
  chart2 = []; // This will hold our chart info
  dataToChart = [
    { label: 'hjfgbjd dhsfd sfhdghdf fdghf', value: 23 },
    { label: 'hjfgbjd hggsh', value: 32 },
    { label: 'oiu dfgh', value: 3 },
    { label: 'qwrq', value: 2 },
    { label: 'uyiuty', value: 28 },
    { label: 'bnmb', value: 43 }
  ];
  values;
  values2;
  labels;

  constructor(private _weather: WeatherService) {
  }

  ngOnInit() {
    this.values = this.dataToChart.map(arg => arg.value);
    this.labels = this.dataToChart.map(arg => arg.label);
    this.values2 = this.values.map(arg => -arg);
    this._weather.dailyForecast()
      .subscribe(res => {
        this.chart = new Chart('canvas', {
          type: 'pie',
          data: {
            labels: this.labels,
            datasets: [
              {
                data: this.values,
                // backgroundColor: ['#81D4FA', '#80DEEA', '#80CBC4', '#C5E1A5', '#E6EE9C', '#FFF59D']
                backgroundColor: ['#0288D1', '#00796B', '#689F38', '#FBC02D', '#F57C00', '#D32F2F']
              },
            ]
          },
          options: {
            animation: {animateScale: true, animateRotate: false },
            title: {
              display: true,
              text: 'Custom Chart Title',
              fontSize: 26,
              lineHeight: 2,
              fontColor: '#64B5F6'
            },

            legend: {
              display: true,
              position: 'right',
              labels: {
                fontColor:  '#455A64'
              }
            },
            labels: {
              display: true
            },
            scales: {
              xAxes: [{
                display: false,
              }],
              yAxes: [{
                display: false,
              }],
            }
          }
        });
        this.chart2 = new Chart('canvas2', {
          type: 'horizontalBar',
          data: {
            labels: this.labels,
            datasets: [
              {
                data: this.values,
                // backgroundColor: ['#81D4FA', '#80DEEA', '#80CBC4', '#C5E1A5', '#E6EE9C', '#FFF59D']
                backgroundColor: ['#0288D1', '#00796B', '#689F38', '#FBC02D', '#F57C00', '#D32F2F']
              },
            ]
          },
          options: {
            animation: {animateScale: true, animateRotate: false },
            title: {
              display: true,
              text: 'Custom Chart Title',
              fontSize: 26,
              lineHeight: 2,
              fontColor: '#64B5F6'
            },
            legend: {
              display: true,
            },
            labels: {
              display: true
            },
            scales: {
              xAxes: [{
                display: false,
              }],
              yAxes: [{
                display: false,
                barPercentage: 1.0,
                categoryPercentage: 1.0,
                ticks: {mirror: true}
              }],
            }
          }
        });
      });
  }
}

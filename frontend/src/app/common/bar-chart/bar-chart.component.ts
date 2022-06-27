import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {


  @Input() barChartLabels: Label[] = [];
  @Input() barChartData: ChartDataSets[] = [
    {
      data: [0, 0, 0],
      label: '',
    },
  ];
  // @Input() barChartColor: Color[] = [];

  public barChartOptions: ChartOptions = {

    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'rgba(200,200,200,1)',
          lineWidth: 1
        },
        ticks: {
          fontColor: 'rgba(255,255,255,1)'
        }
      }],
      yAxes: [{
        gridLines: {
          color: 'rgba(200,200,200,1)',
          lineWidth: 1
        },
        ticks: {
          fontColor: 'rgba(110,110,110,1)',
          min: 0,
        }
      }]
    },
  };

  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];

  constructor() { }

  ngOnInit(): void {
  }

}

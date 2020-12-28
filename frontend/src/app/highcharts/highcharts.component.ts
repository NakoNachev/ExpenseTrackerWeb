import { Component, OnInit } from '@angular/core';
import Highcharts from 'highcharts';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.css']
})
export class HighchartsComponent implements OnInit {

  chartOptions: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.chartOptions = this.dataService.fetchChartOptions();

    //add new series

    this.chartOptions["series"].push({name:"test",data:[1,2,3]});
    console.log(this.chartOptions);
    Highcharts.chart('chart',this.chartOptions);
  }

}

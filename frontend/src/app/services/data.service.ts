import { Injectable } from '@angular/core';
import * as json from '../data.json'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  fetchData(): any{
    return json.data;
  }

  // get the data from the data.json file to load the chart options in the highcharts.component
  fetchChartOptions():any {
    //return json.chart_options;

    return {
      chart: {
        type: "line"
    },        
    title: "Expenses",
    xAxis: {
        categories: ["january","feb","march"]
    },
    yAxis: {
        title: {
            text: "yAxis"
        }
    },
    series: [{
      name: "",
      data: []
    }]
    }
  }
}

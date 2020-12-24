import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {HighchartsChartModule} from 'highcharts-angular'

import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { HighchartsComponent } from './highcharts/highcharts.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    HighchartsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

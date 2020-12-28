import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {HighchartsChartModule} from 'highcharts-angular'

import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { HighchartsComponent } from './highcharts/highcharts.component';
import { ExpenseInputComponent } from './expense-input/expense-input.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    HighchartsComponent,
    ExpenseInputComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HighchartsChartModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HammerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

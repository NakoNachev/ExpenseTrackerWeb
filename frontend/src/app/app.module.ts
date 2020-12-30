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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EditDialogComponent } from './data-table/edit-dialog/edit-dialog.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    HighchartsComponent,
    ExpenseInputComponent,
    EditDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HighchartsChartModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HammerModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatTabsModule,MatBadgeModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseInputComponent } from './expense-input/expense-input.component';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  //{path: '', component: AppComponent},
  //{path: '', redirectTo: '/input', pathMatch: 'full'},
  {path: "input", component: ExpenseInputComponent},
  {path: "datatable", component: DataTableComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

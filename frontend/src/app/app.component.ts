import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataTableComponent } from './data-table/data-table.component';
import { ExpenseInputComponent } from './expense-input/expense-input.component';
import { ApiService } from './services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  public expensesList = [];
  public badgeCounter = 0;

  @ViewChild(ExpenseInputComponent) private expenseInputComponent: ExpenseInputComponent;
  @ViewChild(DataTableComponent) private dataTableComponent: DataTableComponent;
  

  constructor(private apiService: ApiService, private router:Router){
    // this.data$ = this.apiService.getExpenses();
  }
  ngOnInit(){

    this.apiService.getExpenses()
        .subscribe(data => this.expensesList = data);

    console.log("expenseList", this.expensesList);

}

  public countChangedHandler(count: number){
    this.badgeCounter += count;
  }

  public countResetHandler(count:number){
    this.badgeCounter = 0;
  }

  onTabChanged(event: MatTabChangeEvent) 
  {
    if(event.index == 0)
    {
        this.expenseInputComponent.ngOnInit();//Or whatever name the method is called
    }
    if(event.index == 1)
    {
        this.dataTableComponent.emit();
    }
    else {

    }
  }
  
}

import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ExpenseInterface } from '../model/Expense';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input() public expensesList;
  @Input() public badgeCounter:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Output() countReset: EventEmitter<number> =   new EventEmitter();

  public tableHeaders:string[] = [];
  dataSource: MatTableDataSource<ExpenseInterface>;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.tableHeaders = ["expenseId","expenseAmount","expenseDescription","expenseDate","test"];

    // api calls to the database to fetch the data for the datatable
    this.apiService.getExpenses()
        .subscribe(data => {

           this.dataSource = new MatTableDataSource(data)
           this.dataSource.paginator = this.paginator;
           this.dataSource.sort = this.sort;}

           );
  }

  public emit(){
    this.badgeCounter = 0;
    this.countReset.emit(this.badgeCounter);
  }

  public reload(){
    location.reload();
  }

  /** Used for filtering the page */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      console.log("paginator true")
      this.dataSource.paginator.firstPage();
    }
  }

  public deleteExpense(expenseId: string){
    console.log("deleteExpense called inside component");
    console.log("expenseId", expenseId);
    this.apiService.deleteExpense(expenseId);
    //this.ngOnInit();
    
  }

}

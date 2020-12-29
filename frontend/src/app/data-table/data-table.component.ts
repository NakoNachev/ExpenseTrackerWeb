import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  data:any;
  @Input() public expensesList;
  @Input() public badgeCounter:any;
  //@Output() countChanged: EventEmitter<number> =   new EventEmitter();
  @Output() countReset: EventEmitter<number> =   new EventEmitter();
  public tableHeaders = ["ID","Amount","Description","Date"];

  constructor(private dataService: DataService,
              private apiService: ApiService) { }

  ngOnInit(): void {

    this.data = this.dataService.fetchData();
    console.log(this.data["series"]);
    
    //this.countChanged.emit(this.badgeCounter);
    
    //location.reload();

    // this.apiService.getExpenses()
    //     .subscribe(data => this.expensesList = data);
  }

  public emit(){
    this.badgeCounter = 0;
    this.countReset.emit(this.badgeCounter);
  }

  public reload(){
    location.reload();
  }

}

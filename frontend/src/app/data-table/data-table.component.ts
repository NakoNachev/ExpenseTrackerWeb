import { Component, Input, OnInit } from '@angular/core';
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
  public tableHeaders = ["ID","Amount","Description","Date"];

  constructor(private dataService: DataService,
              private apiService: ApiService) { }

  ngOnInit(): void {

    this.data = this.dataService.fetchData();
    console.log(this.data["series"]);

    // this.apiService.getExpenses()
    //     .subscribe(data => this.expensesList = data);
  }

}

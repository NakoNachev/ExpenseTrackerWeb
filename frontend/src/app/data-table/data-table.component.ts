import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  data:any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.data = this.dataService.fetchData();
    console.log(this.data["series"]);
  }

}

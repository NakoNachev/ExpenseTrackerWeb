import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //public data:any;

  // @Input()
  // data$: Observable<any>;

  public expensesList = [];

  constructor(private apiService: ApiService){
    // this.data$ = this.apiService.getExpenses();
  }
  ngOnInit(){

    this.apiService.getExpenses()
        .subscribe(data => this.expensesList = data);

    console.log("expenseList", this.expensesList);
}
  
}

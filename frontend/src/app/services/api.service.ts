import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as environment from '../../environments/environment';
import { Observable } from 'rxjs';
import { ExpenseInterface } from '../model/Expense';

@Injectable({
  providedIn: 'root'
})

//main api for calls to the middleware
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getExpenses():Observable<ExpenseInterface[]>{

    return this.httpClient.get<ExpenseInterface[]>(environment.environment.api + "expenses/all",
    {headers: new HttpHeaders({"Content-Type": "application/json"})})
  }

  public addExpense(data:any){

    this.httpClient.post(environment.environment.api + "expenses/add_expense",data).subscribe(response => console.log("response", response));
  }

  public addCustomExpense(amount:number,description:string,date:Date){
    this.httpClient.post(environment.environment.api + "expenses/add_expense" + "/" + description + "/" + amount + "/" + date,"").subscribe(response => console.log("res",response));
  }

  public deleteExpense(expenseId:string){
    console.log(environment.environment.api + "expenses/delete_expense" + "/" + expenseId);
    this.httpClient.delete(environment.environment.api + "expenses/delete_expense" + "/" + expenseId).subscribe(data => console.log("data", data));
  }

  public getExpenseTypes(){
    return this.httpClient.get(environment.environment.api + "expense_type/all");
  }

  public getExpenseTypeIdByDescription(description:string){
    return this.httpClient.get(environment.environment.api + "expense_type/" + description);
  }
      
}

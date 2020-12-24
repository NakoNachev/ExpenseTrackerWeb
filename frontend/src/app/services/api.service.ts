import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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

    return this.httpClient.get<ExpenseInterface[]>(environment.environment.api + "expenses/all")
  }
      
}

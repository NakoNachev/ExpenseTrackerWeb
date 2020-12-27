import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

/**Service for the calculation of different values for the charts */
export class CalculationService {

  constructor(private readonly apiService: ApiService) { }

  public calculateTotalExpenses(){

  }

  public calculateTotalExpensesPerMonth(){
    
  }
}

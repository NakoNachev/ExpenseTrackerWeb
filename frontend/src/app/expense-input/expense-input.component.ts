import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExpenseInterface } from '../model/Expense';
import { ExpenseEntity } from '../model/ExpenseEntity';
import { ExpenseInputForm } from '../model/ExpenseInputForm';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-expense-input',
  templateUrl: './expense-input.component.html',
  styleUrls: ['./expense-input.component.css']
})
export class ExpenseInputComponent implements OnInit {

  public expenseInputForm = new ExpenseInputForm(20,"",new Date("12.10.2020"));
  @Input() badgeCounter:any;
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }

  public submitFormData(){
    // let formData:any = new FormData();
    // formData.append("expenseAmount", this.expenseInputForm.expenseAmount);
    // formData.append("expenseDescription", this.expenseInputForm.expenseDescription);
    // formData.append("expenseDate", this.expenseInputForm.expenseDate);
    console.log("inside submitFormData")
    let expenseEntity:ExpenseEntity = new ExpenseEntity();
    console.log(this.expenseInputForm.expenseAmount);
    expenseEntity.setExpenseAmount = this.expenseInputForm.expenseAmount;
    expenseEntity.setExpenseDescription = this.expenseInputForm.expenseDescription;
    expenseEntity.setExpenseDate = this.expenseInputForm.expenseDate;

    console.log("formsData", this.expenseInputForm);
    // this.apiService.addExpense(formData);
    this.apiService.addExpense(expenseEntity);
    this.badgeCounter += 1;
    this.countChanged.emit(this.badgeCounter);
    console.log("this.badgecounter", this.badgeCounter);
    this.ngOnInit();
    
    //this.apiService.addCustomExpense(expenseEntity.expenseAmount, expenseEntity.expenseDescription, expenseEntity.expenseDate);
  }

}

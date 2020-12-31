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

  public expenseInputForm = new ExpenseInputForm(20,"",new Date("12.10.2020"),"");
  @Input() badgeCounter:any;
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();
  public expenseTypes:any;
  public selectedValue: any;
  public selectedValueId:string;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {

    this.apiService.getExpenseTypes().subscribe(data =>
      this.expenseTypes = data);
  }

  public submitFormData(){

    console.log("inside submitFormData")

    let expenseEntity:ExpenseEntity = new ExpenseEntity();
    console.log(this.expenseInputForm.expenseAmount);

    expenseEntity.setExpenseAmount = this.expenseInputForm.expenseAmount;
    expenseEntity.setExpenseDescription = this.expenseInputForm.expenseDescription;
    expenseEntity.setExpenseDate = this.expenseInputForm.expenseDate;

    // this.apiService.getExpenseTypeIdByDescription(this.selectedValue).subscribe(data =>{
    //   for (let dat in data){
    //       console.log(data[dat]);
    //       expenseEntity.setExpenseTypeId = data[dat];
    //   }});

    for(let type of this.expenseTypes){
      console.log("type", type)
      if(type.expenseTypeDescription === this.selectedValue){
        console.log("type.expenseId", type.expenseId);
        expenseEntity.setExpenseTypeId = type.expenseTypeId;
      }
    }



    console.log("formsData", this.expenseInputForm);

    this.apiService.addExpense(expenseEntity);
    this.badgeCounter += 1;
    this.countChanged.emit(this.badgeCounter);
    console.log("this.badgecounter", this.badgeCounter);
    this.ngOnInit();
    
  }

}

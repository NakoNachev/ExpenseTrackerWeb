export class ExpenseEntity{

    expenseId: string
    expenseAmount: number
    expenseDescription: string
    expenseDate: Date
    expenseTypeId: string

    public set setExpenseDescription(description:string){
        this.expenseDescription = description;
    }

    public set setExpenseAmount(amount:number){
        this.expenseAmount = amount;
    }

    public set setExpenseDate(date:Date){
        this.expenseDate = date;
    }

    public set setExpenseTypeId(id:string){
        this.expenseTypeId = id;
    }
}
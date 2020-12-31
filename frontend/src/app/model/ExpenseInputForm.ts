export class ExpenseInputForm{
    constructor(
        public expenseAmount:number,
        public expenseDescription:string,
        public expenseDate: Date,
        public expenseTypeId: string 
    ){}
}
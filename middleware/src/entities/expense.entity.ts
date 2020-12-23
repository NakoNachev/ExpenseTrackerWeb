import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("expense")
export class ExpenseEntity {

    @PrimaryGeneratedColumn('increment')
    private expenseId: string;

    @Column({name:"expense_amount"})
    private expenseAmount: number;

    @Column({name: "expense_description"})
    private expenseDescription: string;

    @Column({name: "expense_date", type:"date"})
    private expenseDate: Date;

    public set setExpenseDescription(description:string){
        this.expenseDescription = description;
    }

    public set setExpenseAmount(amount:number){
        this.expenseAmount = amount;
    }

    public set setExpenseDate(date:Date){
        this.expenseDate = date;
    }

}


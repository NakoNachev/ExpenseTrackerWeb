import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("expense")
export class ExpenseEntity {

    @PrimaryGeneratedColumn('increment')
    private expenseId: string;

    @Column({name:"expense_amount"})
    private expenseAmount: number;

    @Column({name: "expense_description"})
    private expenseDescription: string;

    @Column({name: "expense_date"})
    private expenseDate: string;


}


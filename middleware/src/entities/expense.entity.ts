import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ExpenseTypeEntity } from "./expensetype.entity";

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

    @OneToOne(type => ExpenseTypeEntity)
    @JoinColumn()
    private expenseTypeEntity: ExpenseEntity;

    @Column({name: "expenseTypeId", nullable: true})
    private expenseTypeId: string;

    public set setExpenseDescription(description:string){
        this.expenseDescription = description;
    }

    public set setExpenseAmount(amount:number){
        this.expenseAmount = amount;
    }

    public set setExpenseDate(date:Date){
        this.expenseDate = date;
    }

    public get getExpenseId():string { 
        return this.expenseId;
    }

}


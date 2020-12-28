import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("expense_type")
export class ExpenseTypeEntity{

    @PrimaryGeneratedColumn("increment")
    private expenseTypeId:string

    @Column({name:"expense_type_description"})
    private expenseTypeDescription:string


    public set setExpenseTypeDescription(description:string){
        this.expenseTypeDescription = description; 
    }

}
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiBody } from "@nestjs/swagger";
import { ExpenseEntity } from "src/entities/expense.entity";
import { ExpenseService } from "src/services/expense.service";

@Controller("/expenses")
export class ExpenseController{

    constructor(private expenseService: ExpenseService){
    }

    @Get("/all")
    public getAll():Promise<ExpenseEntity[]>{
        return this.expenseService.getAll();
    }

    @Get("/date/:requestDate")
    public getByDate(@Param('requestDate') requestDate:Date){
        return this.expenseService.getByDate(requestDate).getMany();
    }

    @Get("/min/amount/:minAmount")
    public getByMinAmount(@Param('minAmount') minAmount:number){
        return this.expenseService.getByLeastAmount(minAmount).getMany();
    }

    @Get("/description/:description")
    public getByDescription(@Param("description") description:string){
        return this.expenseService.getByDescription(description).getMany();
    }

    /** Add already prepared expense */
    @Post("add_expense")
    public addNewExpense(@Body() expenseEntity: ExpenseEntity){
        return this.expenseService.addExpenseObject(expenseEntity);
    }

    /** Add expense with custom details */
    @Post("add_expense/:description/:amount/:date")
    public addCustomNewExpense(@Param('description') description:string,
        @Param('amount') amount:number,
        @Param('date') date:Date){
        
        let customExpenseEntity:ExpenseEntity = new ExpenseEntity();
        customExpenseEntity.setExpenseDescription = description;
        customExpenseEntity.setExpenseAmount = amount;
        customExpenseEntity.setExpenseDate = date;

        return this.expenseService.addExpenseObject(customExpenseEntity);
    }
}
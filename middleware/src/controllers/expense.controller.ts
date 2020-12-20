import { Controller, Get, Param } from "@nestjs/common";
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

    @Get("/date")
    public getByDate(@Param('requestDate') requestDate:Date){
        return this.expenseService.getByDate(requestDate);
    }


}
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

    @Post("add_expense")
    public addNewExpense(@Body() expenseEntity: ExpenseEntity){
        return this.addNewExpense(expenseEntity);
    }


}
import { Controller, Get, Param, Post } from "@nestjs/common";
import { ExpenseTypeEntity } from "src/entities/expensetype.entity";
import { ExpenseService } from "src/services/expense.service";


@Controller("/expense_type")
export class ExpenseTypeController {

    constructor(private expenseService: ExpenseService){
    }

    @Get("/all")
    public getAllTypes(){
        return this.expenseService.getAlltypes();
    }

    @Get("/:description")
    public getTypeIdByDescription(@Param('description') description:string){
        return this.expenseService.getTypeIdByDescription(description);  
    }

    @Post("add/:description")
    public addExpenseType(@Param('description') description:string){
        let expenseTypeEntity:ExpenseTypeEntity = new ExpenseTypeEntity();
        expenseTypeEntity.setExpenseTypeDescription = description;

        this.expenseService.addExpenseType(expenseTypeEntity);
    }


}
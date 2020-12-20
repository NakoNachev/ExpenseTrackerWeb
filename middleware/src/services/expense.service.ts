import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExpenseEntity } from "src/entities/expense.entity";
import { Repository } from "typeorm";


// service for CRUD operations for the expense entity
@Injectable()
export class ExpenseService {

    constructor(
        @InjectRepository(ExpenseEntity)
        private expenseRepository: Repository<ExpenseEntity>
    ){}

    public getAll(){
        return this.expenseRepository.find();
    }

    public getByDate(requestDate: Date){

        return this.expenseRepository.createQueryBuilder()
        .select("expense")
        .where("expense.date = :date", {date: requestDate});

    }

    public getById(id: any[]){
        return this.expenseRepository.findByIds(id);
    }

    public getByLeastAmount(){
    }

}
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExpenseEntity } from "src/entities/expense.entity";
import { ExpenseTypeEntity } from "src/entities/expensetype.entity";
import { Repository } from "typeorm";


// service for CRUD operations for the expense entity
@Injectable()
export class ExpenseService {

    constructor(
        @InjectRepository(ExpenseEntity)
        private expenseRepository: Repository<ExpenseEntity>,
        @InjectRepository(ExpenseTypeEntity)
        private expenseTypeRepository: Repository<ExpenseTypeEntity>
    ){}

    public getAll(){
        return this.expenseRepository.find();
    }

    public getByDate(requestDate: Date){

        return this.expenseRepository.createQueryBuilder()
        .where("expense.date = :date", {date: requestDate});

    }

    public getByIdSingle(id:string){
        return this.expenseRepository.findOne(id);
    }

    public getById(id: any[]){
        return this.expenseRepository.findByIds(id);
    }

    public getByLeastAmount(minAmount:number){

        return this.expenseRepository.createQueryBuilder()
        .where("expense_amount >= :minAmount",{minAmount:minAmount});
    }

    public getByDescription(description:string){
        return this.expenseRepository.createQueryBuilder()
        .where("expense_description = :description", {description:description});
    }

    public addExpenseObject(expenseEntity: ExpenseEntity){
        this.expenseRepository.save(expenseEntity);
        //
    }

    public async deleteExpenseObjekt(expenseEntity: ExpenseEntity){
        console.log("service called");
        await this.expenseRepository.delete(expenseEntity.getExpenseId);
    }


    // --------------------- Expense Types methods -------------------

    public getAlltypes(){
        return this.expenseTypeRepository.find();
    }

    public getTypeById(id:any[]){
        return this.expenseTypeRepository.findByIds(id);
    }

    public getTypeIdByDescription(description:string){

        return this.expenseTypeRepository.createQueryBuilder()
        .where("expense_type_description = :description", {description:description}).getRawOne();

    }

    public addExpenseType(expenseTypeEntity:ExpenseTypeEntity){
        this.expenseTypeRepository.save(expenseTypeEntity);
    }



}
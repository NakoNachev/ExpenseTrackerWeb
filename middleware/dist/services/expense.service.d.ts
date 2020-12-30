import { ExpenseEntity } from "src/entities/expense.entity";
import { ExpenseTypeEntity } from "src/entities/expensetype.entity";
import { Repository } from "typeorm";
export declare class ExpenseService {
    private expenseRepository;
    private expenseTypeRepository;
    constructor(expenseRepository: Repository<ExpenseEntity>, expenseTypeRepository: Repository<ExpenseTypeEntity>);
    getAll(): Promise<ExpenseEntity[]>;
    getByDate(requestDate: Date): import("typeorm").SelectQueryBuilder<ExpenseEntity>;
    getByIdSingle(id: string): Promise<ExpenseEntity>;
    getById(id: any[]): Promise<ExpenseEntity[]>;
    getByLeastAmount(minAmount: number): import("typeorm").SelectQueryBuilder<ExpenseEntity>;
    getByDescription(description: string): import("typeorm").SelectQueryBuilder<ExpenseEntity>;
    addExpenseObject(expenseEntity: ExpenseEntity): void;
    deleteExpenseObjekt(expenseEntity: ExpenseEntity): Promise<void>;
    getAlltypes(): Promise<ExpenseTypeEntity[]>;
    getTypeById(id: any[]): Promise<ExpenseTypeEntity[]>;
    addExpenseType(expenseTypeEntity: ExpenseTypeEntity): void;
}

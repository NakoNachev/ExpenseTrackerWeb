import { ExpenseEntity } from "src/entities/expense.entity";
import { Repository } from "typeorm";
export declare class ExpenseService {
    private expenseRepository;
    constructor(expenseRepository: Repository<ExpenseEntity>);
    getAll(): Promise<ExpenseEntity[]>;
    getByDate(): void;
    getById(): void;
    getByLeastAmount(): void;
    public: any;
}

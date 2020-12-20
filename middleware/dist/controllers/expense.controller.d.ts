import { ExpenseEntity } from "src/entities/expense.entity";
import { ExpenseService } from "src/services/expense.service";
export declare class ExpenseController {
    private expenseService;
    constructor(expenseService: ExpenseService);
    getAll(): Promise<ExpenseEntity[]>;
    getByDate(requestDate: Date): import("typeorm").SelectQueryBuilder<ExpenseEntity>;
}

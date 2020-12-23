import { ExpenseEntity } from "src/entities/expense.entity";
import { ExpenseService } from "src/services/expense.service";
export declare class ExpenseController {
    private expenseService;
    constructor(expenseService: ExpenseService);
    getAll(): Promise<ExpenseEntity[]>;
    getByDate(requestDate: Date): Promise<ExpenseEntity[]>;
    getByMinAmount(minAmount: number): Promise<ExpenseEntity[]>;
    getByDescription(description: string): Promise<ExpenseEntity[]>;
    addNewExpense(expenseEntity: ExpenseEntity): void;
    addCustomNewExpense(description: string, amount: number, date: Date): void;
}

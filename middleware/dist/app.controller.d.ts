import { AppService } from './app.service';
import { ExpenseEntity } from './entities/expense.entity';
import { ExpenseService } from './services/expense.service';
export declare class AppController {
    private readonly appService;
    private readonly expenseService;
    constructor(appService: AppService, expenseService: ExpenseService);
    getHello(): string;
    getAll(): Promise<ExpenseEntity[]>;
}

import { AppService } from './app.service';
import { ExpenseEntity } from './entities/expense.entity';
import { ExpenseService } from './services/expense.service';
import { StopwatchService } from './services/stopwatch-service';
export declare class AppController {
    private readonly appService;
    private readonly expenseService;
    private readonly stopwatchService;
    constructor(appService: AppService, expenseService: ExpenseService, stopwatchService: StopwatchService);
    getHello(): string;
    getAll(): Promise<ExpenseEntity[]>;
    getStopwatch(): Promise<void>;
}

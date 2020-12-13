import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ExpenseEntity } from './entities/expense.entity';
import { ExpenseService } from './services/expense.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly expenseService: ExpenseService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/all")
  getAll():Promise<ExpenseEntity[]>{
    return this.expenseService.getAll();
  }
}

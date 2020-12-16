import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ExpenseEntity } from './entities/expense.entity';
import { ExpenseService } from './services/expense.service';
import { StopwatchService } from './services/stopwatch-service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly expenseService: ExpenseService,
              private readonly stopwatchService: StopwatchService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/all")
  getAll():Promise<ExpenseEntity[]>{
    return this.expenseService.getAll();
  }

  @Get("/stopwatch")
  getStopwatch(){
    //return this.stopwatchService.startWatch("test-watch",1500);

    //return this.stopwatchService.performanceTest();

    return this.stopwatchService.consoleTimeTest();
  }
}

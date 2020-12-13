import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConnectionService } from './database-connection.service';
import { ExpenseEntity } from './entities/expense.entity';
import { ExpenseService } from './services/expense.service';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useClass: DatabaseConnectionService 
  }),
          TypeOrmModule.forFeature([ExpenseEntity])],
  controllers: [AppController],
  providers: [AppService,ExpenseService],
})
export class AppModule {}

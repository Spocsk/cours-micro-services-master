import { Controller, UseGuards } from '@nestjs/common';
import { ExpensesService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { JwtAuthGuard } from './auth/guards/auth.guard';
import { Expense } from './schemas/expenses.shema';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @UseGuards(JwtAuthGuard)
  @MessagePattern({ cmd: 'create_expense' })
  createExpense(@Payload() expenseData: { token: string; data: Expense }) {
    return this.expensesService.createExpense(expenseData.data);
  }

  @UseGuards(JwtAuthGuard)
  @MessagePattern({ cmd: 'find_expense_by_id' })
  findExpenseById(@Payload() payload: { token: string; data: string }) {
    return this.expensesService.findExpenseById(payload.data);
  }

  @UseGuards(JwtAuthGuard)
  @MessagePattern({ cmd: 'find_expenses_by_user_id' })
  findExpensesByUserId(@Payload() payload: { token: string; data: string }) {
    return this.expensesService.findExpensesByUserId(payload.data);
  }

  @UseGuards(JwtAuthGuard)
  @MessagePattern({ cmd: 'find_all_expenses' })
  findAllExpenses(@Payload() payload: { token: string }) {
    return this.expensesService.findAllExpenses();
  }

  @UseGuards(JwtAuthGuard)
  @MessagePattern({ cmd: 'delete_expense' })
  deleteExpense(@Payload() payload: { token: string; data: string }) {
    return this.expensesService.deleteExpense(payload.data);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Request,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('expenses')
export class ExpensesController {
  constructor(@Inject('EXPENSES_SERVICE') private client: ClientProxy) {}

  @Post('create')
  createExpense(@Request() req, @Body() expenseData: any) {
    const token = req.headers.authorization.split(' ')[1];
    return this.client.send(
      { cmd: 'create_expense' },
      {
        token,
        data: expenseData,
      },
    );
  }

  @Get('find/:id')
  findExpenseById(@Request() req, @Param('id') id: string) {
    const token = req.headers.authorization.split(' ')[1];
    return this.client.send(
      { cmd: 'find_expense_by_id' },
      {
        token,
        data: id,
      },
    );
  }

  @Get('find/user/:userId')
  findExpensesByUserId(@Request() req, @Param('userId') userId: string) {
    const token = req.headers.authorization.split(' ')[1];
    return this.client.send(
      { cmd: 'find_expenses_by_user_id' },
      {
        token,
        data: userId,
      },
    );
  }

  @Get('find')
  findAllExpenses(@Request() req) {
    const token = req.headers.authorization.split(' ')[1];
    return this.client.send(
      { cmd: 'find_all_expenses' },
      {
        token,
      },
    );
  }

  @Delete('delete/:id')
  deleteExpense(@Request() req, @Param('id') id: string) {
    const token = req.headers.authorization.split(' ')[1];
    return this.client.send(
      { cmd: 'delete_expense' },
      {
        token,
        data: id,
      },
    );
  }
}

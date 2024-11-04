import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Expense } from './schemas/expenses.shema';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectModel(Expense.name) private expenseModel: Model<Expense>,
  ) {}

  async createExpense(expenseData): Promise<Expense> {
    const createdExpense = new this.expenseModel(expenseData);
    return createdExpense.save();
  }

  async findExpensesByUserId(userId: string): Promise<Expense[]> {
    return this.expenseModel.find({ userId }).exec();
  }

  async findAllExpenses(): Promise<Expense[]> {
    return this.expenseModel.find().exec();
  }

  async deleteExpense(expenseId: string): Promise<any> {
    return this.expenseModel.findByIdAndDelete(expenseId);
  }

  async findExpenseById(expenseId: string): Promise<Expense> {
    return this.expenseModel.findById(expenseId);
  }
}

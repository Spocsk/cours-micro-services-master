import { createReducer, on } from '@ngrx/store';
import { createExpense } from './expenses.actions';

export interface DefaulExpensestState {
  expenses: Expense[];
}

export interface Expense {
  amount: number;
  category: string;
  date: string;
  userId: string;
}

export const initialState: DefaulExpensestState = {
  expenses: [],
};

export const expensesReducer = createReducer(
  initialState,
  on(createExpense, (state, expense) => ({
    ...state,
    expenses: [...state.expenses, expense],
  }))
);

import { createAction, props } from '@ngrx/store';
import { Expense } from './expenses.reducers';

export const createExpense = createAction(
  '[Expenses] Create',
  props<Expense>()
);

export const findExpensesByUserId = createAction(
  '[Expenses] Find by user id',
  props<String>()
);

export const findAllExpenses = createAction('[Expenses] Find all expenses');

export const findExpenseById = createAction(
  '[Expenses] Find by id',
  props<String>()
);

export const deleteExpense = createAction('[Expenses] Delete', props<String>());

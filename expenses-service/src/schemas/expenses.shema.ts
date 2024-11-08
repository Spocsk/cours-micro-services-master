import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Expense extends Document {
  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  userId: string;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);

import { Module } from '@nestjs/common';
import { ExpenseSchema } from './schemas/expenses.shema';
import { Expense } from './schemas/expenses.shema';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpensesService } from './app.service';
import { ExpensesController } from './app.controller';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';
import { Image, ImageSchema } from './schemas/image.schema';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/expenses'),
    MongooseModule.forFeature([{ name: Expense.name, schema: ExpenseSchema }]),
    MongooseModule.forFeature([{ name: Image.name, schema: ImageSchema }]),
    PassportModule,
    JwtModule.register({
      secret: 'pouet',
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [ExpensesController, ImageController],
  providers: [ExpensesService, ImageService],
})
export class AppModule {}

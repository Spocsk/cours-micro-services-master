import { Module } from '@nestjs/common';
import { UserController } from './app.controller';
import { UserSchema } from './schemas/user/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { User } from './schemas/user/user.schema';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forRoot('mongodb://localhost:27017/users'),
    PassportModule,
    JwtModule.register({
      secret: 'pouet',
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}

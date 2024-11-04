import { Controller, Inject, Post, Body, Get, Request } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('auth')
export class AppController {
  constructor(
    @Inject('USER_SERVICE') private readonly usersService: ClientProxy,
  ) {}

  @Post('register')
  async register(
    @Body() registerUserDto: { username: string; password: string },
  ) {
    return this.usersService.send({ cmd: 'register_user' }, registerUserDto);
  }

  @Post('login')
  async login(@Body() loginUserDto: { username: string; password: string }) {
    return this.usersService.send({ cmd: 'login_user' }, loginUserDto);
  }

  @Get('profile')
  getProfile(@Request() req) {
    const token = req.headers.authorization.split(' ')[1];
    return this.usersService.send(
      { cmd: 'get_profile' },
      {
        token,
      },
    );
  }
}

import { Controller, UseGuards } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RegisterUserDto } from './schemas/user/dto/user.dto';
import { LoginUserDto } from './schemas/user/dto/user.dto';
import { UserService } from './user.service';
import { JwtAuthGuard } from './auth/guards/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'register_user' })
  async register(@Payload() registerUserDto: RegisterUserDto) {
    return this.userService.register(registerUserDto);
  }

  @MessagePattern({ cmd: 'login_user' })
  async login(@Payload() loginUserDto: LoginUserDto) {
    return this.userService.login(loginUserDto);
  }

  @MessagePattern({ cmd: 'get_profile' })
  async getProfile(@Payload() req: string) {
    const tokenPayload = await this.userService.extractPayloadFromToken(req);
    return tokenPayload.username;
  }

  @UseGuards(JwtAuthGuard)
  @MessagePattern({ cmd: 'get_profile' })
  async getProfile_(data) {
    return data.user.username;
  }
}

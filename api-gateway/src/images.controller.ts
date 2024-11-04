import {
  Controller,
  Inject,
  Post,
  Request,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Multer } from 'multer';
import { ClientProxy } from '@nestjs/microservices';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('images')
export class ImagesController {
  constructor(
    @Inject('EXPENSES_SERVICE') private expensesService: ClientProxy,
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(@UploadedFile() file: Multer.File, @Request() req) {
    console.log(file);
    const token = req.headers.authorization.split(' ')[1];
    return this.expensesService.send(
      { cmd: 'upload_image' },
      {
        token,
        file,
      },
    );
  }
}

import {
  Controller,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ImageService } from './image.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { JwtAuthGuard } from './auth/guards/auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('images')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @MessagePattern({ cmd: 'upload_image' })
  @UseInterceptors(FileInterceptor('file', { dest: './uploads' }))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    const savedImage = await this.imageService.saveImage(file);
    return {
      message: 'Image uploaded successfully',
      savedImage,
    };
  }

  @UseGuards(JwtAuthGuard)
  @MessagePattern({ cmd: 'find_all_images' })
  findAll() {
    return this.imageService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @MessagePattern({ cmd: 'find_one_image' })
  findOne(@Payload() id: string) {
    return this.imageService.findOne(id);
  }
}

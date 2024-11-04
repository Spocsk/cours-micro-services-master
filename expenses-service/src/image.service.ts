import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Image, ImageDocument } from './schemas/image.schema';

@Injectable()
export class ImageService {
  constructor(
    @InjectModel(Image.name) private imageModel: Model<ImageDocument>,
  ) {}

  async saveImage(file: Express.Multer.File): Promise<Image> {
    const newImage = new this.imageModel({
      filename: file.filename,
      path: file.path,
      mimetype: file.mimetype,
    });
    return newImage.save();
  }

  async findAll(): Promise<Image[]> {
    return this.imageModel.find().exec();
  }

  async findOne(id: string): Promise<Image> {
    return this.imageModel.findById(id).exec();
  }
}

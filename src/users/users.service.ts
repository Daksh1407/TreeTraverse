import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(username: string): Promise<User> {
    const createdUser = new this.userModel({ username, tree: {} });
    return createdUser.save();
  }

  async findOne(username: string): Promise<User> {
    return this.userModel.findOne({ username }).exec();
  }

  async updateTree(username: string, tree: any): Promise<User> {
    return this.userModel.findOneAndUpdate({ username }, { tree }, { new: true }).exec();
  }
}

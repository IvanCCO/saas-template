import { UserRepository } from '@/backend/domain/user/UserRepository';
import dbConnect from './moongose';
import { User } from '@/backend/domain/user/User';
import UserModel, { IUserModel } from './model/UserModel';
import { UserMapper } from '@/backend/mapper/UserMapper';

class UserRepositoryImpl implements UserRepository {

  async fetchById(id: string): Promise<User | null> {
    const user: IUserModel | null = await UserModel.findById(id);
    return UserMapper.toDomain(user);
  }

  async fetchByEmail(email: Email): Promise<User | null> {
    const user = await UserModel.findOne({ email: email.getValue() });
    return UserMapper.toDomain(user);
  }

  async save(user: User): Promise<void> {
    await UserModel.create(UserMapper.toPersistence(user));
  }

  async delete(id: string): Promise<void> {
    await UserModel.deleteOne({ _id: id });
  }
}

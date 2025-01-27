import { User } from '../domain/user/User';
import { IUserModel } from '../resources/database/model/UserModel';

export class UserMapper {
  static toDomain(user: IUserModel | null): User | null {
    if (!user) {
      return null;
    }
    return new User(
      user.id,
      user.name,
      user.email,
      user.created_at,
      user.updated_at
    );
  }

  static toPersistence(user: User): IUserModel {
    return {
      _id: user.id,
      name: user.name,
      email: user.email.getValue(),
      created_at: user.created_at,
      updated_at: user.updated_at,
    } as IUserModel;
  }
}

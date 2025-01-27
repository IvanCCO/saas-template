import { User } from './User';

export interface UserRepository {
  save(user: User): Promise<void>;
  fetchById(id: string): Promise<User | null>;
  fetchByEmail(email: Email): Promise<User | null>;
  delete(id: string): Promise<void>;
}

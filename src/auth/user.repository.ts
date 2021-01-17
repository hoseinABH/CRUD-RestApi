import { AuthCredentials } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signup(authCredentials: AuthCredentials): Promise<void> {
    const { username, password } = authCredentials;
    const user = new User();
    user.username = username;
    user.password = password;

    await user.save();
  }
}

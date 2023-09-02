import bcrypt from 'bcryptjs';

export default class UserPasswordService {
   static hash(password: string): Promise<string> {
      return bcrypt.hash(password, 10);
   }
}

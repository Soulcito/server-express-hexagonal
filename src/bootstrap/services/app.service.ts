//import { DB_CONFIG } from '../interfaces/dbConfig.interface';
import { UserEntity } from '../../modules/user/infrastructure/user.entity';
import yenv from 'yenv';

const env = yenv('.env', { env: 'production' })

export class AppService {

   static get PORT(): number {
      return +env.PORT || 3000;
   }

   static get DB_CONFIG() {

      const pass = env.DB_PASS.toString();

      return {
         host: env.DB_HOST || 'localhost',
         port: +env.DB_PORT || 3310,
         username:env.DB_USER || 'user',
         password: pass || '12345',
         database: env.DB_NAME || 'cursonode',
         synchronize:env.DB_SYNC || false,
         logging: env.DB_LOGG || false,
         entities: [UserEntity],
         //entities: [process.env.DB_ENTITIES || 'dist/**/*.entity.{.ts,.js}'],
         //entities: [process.env.DB_ENTITIES || 'src/**/*.entity.{.ts,.js}'],
      }
   }
}

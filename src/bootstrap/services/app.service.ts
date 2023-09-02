import { UserEntity } from '../../modules/user/infrastructure/user.entity';
//import { DB_CONFIG } from '../interfaces/dbConfig.interface';

export class AppService {

   static get PORT(): number {
      return +process.env.PORT || 3000;
   }

   static get DB_CONFIG() {

      return {
         host: process.env.DB_HOST || 'localhost',
         port: +process.env.DB_PORT || 3310,
         username: process.env.DB_USER || 'user',
         password: process.env.DB_PASS || '12345',
         database: process.env.DB_NAME || 'cursonode',
         synchronize: process.env.DB_SYNC === 'true' ? true : false,
         logging: process.env.DB_LOGG === 'true' ? true : false,
         entities: [UserEntity],
         //entities: [process.env.DB_ENTITIES || 'dist/**/*.entity.{.ts,.js}'],
         //entities: [process.env.DB_ENTITIES || 'src/**/*.entity.{.ts,.js}'],
      }
   }
}

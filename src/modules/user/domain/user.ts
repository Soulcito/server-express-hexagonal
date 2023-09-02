import { IEntity } from 'src/modules/shared/entity.interface'
import EmailVO from './value-objects/email.vo';
import { UserProperties } from './types/userProperties.type';
import { UserUpdate } from './types/userUpdate.type';


// Modelo de dominio
export default class User implements IEntity<UserProperties, UserUpdate>{
   private name: string;
   private lastname: string;
   private readonly email: EmailVO;
   private password: string;
   private refreshToken: string;
   private active: boolean;
   private readonly guid: string;

   constructor(userProperties: UserProperties) {
      this.active = true;
      Object.assign(this, userProperties);
   }

   // METHODS
   properties(): UserProperties {
      return {
         name: this.name,
         lastname: this.lastname,
         email: this.email,
         password: this.password,
         refreshToken: this.refreshToken,
         active: this.active,
         guid: this.guid
      }
   }

   update(fields: UserUpdate){
      Object.assign(this, fields);
   }

   delete() {
      this.active = false;
   }

}

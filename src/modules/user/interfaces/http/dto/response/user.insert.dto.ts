import { UserProperties } from 'src/modules/user/domain/types/userProperties.type';
import DTO from './dto.interface';

interface UserDTO {
   name: string;
   lastname: string;
   email: string;
   guid: string;
}

export type UsertInsertOneDTO = UserDTO;

export default class UserInsertMapping extends DTO<UserProperties, UsertInsertOneDTO> {
   execute(data: UserProperties): UsertInsertOneDTO {
      return {
         name: data.name,
         lastname: data.lastname,
         email: data.email.value,
         guid: data.guid
      }
   }

}

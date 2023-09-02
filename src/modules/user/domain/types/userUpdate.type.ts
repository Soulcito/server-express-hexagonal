import EmailVO from '../value-objects/email.vo';

export type UserUpdate = {
   name: string;
   lastname: string;
   email: EmailVO;
   password: string;
}

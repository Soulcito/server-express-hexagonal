import { Result } from 'neverthrow';
import User from '../user';
import { UserLastnameRequiredException, UserNameRequiredException, UserPasswordLengthInvalidException, UserPasswordRequiredException } from '../exceptions/user.exception';

export type UserResult = Result<
   User,
   | UserNameRequiredException
   | UserLastnameRequiredException
   | UserPasswordRequiredException
   | UserPasswordLengthInvalidException
>

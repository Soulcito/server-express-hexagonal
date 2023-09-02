import { Result } from 'neverthrow';
import GuidVO from '../guid.vo';
import { UserGuidInvalidException } from '../../exceptions/user.exception';

export type GuidResult = Result<GuidVO, UserGuidInvalidException>;

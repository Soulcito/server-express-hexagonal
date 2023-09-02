import { Router } from 'express';
import UserApplication from '../../application/user.application';
import { UserRepository } from '../../domain/user.repository';
import UserInfraestructure from '../../infrastructure/user.infrastructure';
import UserController from './controller';
import { MiddlewareListOne } from './middlewares/user.middleware';

const infrastructure: UserRepository = new UserInfraestructure();
const application = new UserApplication(infrastructure);
const controller = new UserController(application);

class UserRouter {
   readonly expressRouter: Router;



   constructor(){
      this.expressRouter = Router();
      this.mountRoutes();
   }

   mountRoutes() {

      this.expressRouter.get('/', controller.list);
      this.expressRouter.get('/:guid', ...MiddlewareListOne, controller.listOne);
      this.expressRouter.post('/', controller.insert);
      this.expressRouter.put('/:guid', controller.update);
      this.expressRouter.delete('/:guid', controller.delete);

   }

}


export default new UserRouter().expressRouter;

import { Request, Response } from 'express'

export default class {
   static notFound(req: Request, resp: Response): void {
      resp.status(404).send('Not Found')
   }
}

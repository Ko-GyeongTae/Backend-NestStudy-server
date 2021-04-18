import { Injectable, NestMiddleware } from '@nestjs/common';
 
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(`HTTP요청... host: ${req.headers.host}, url: ${req.originalUrl}, method:${req.method}`);
    next();
  }
}
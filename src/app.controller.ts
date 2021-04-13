import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello')
  sayHello():string{
    return this.appService.sayHello();
  }

  @Post('/hi')
  askHi(@Body()req: object): string {
    return this.appService.askHi(req);
  }
  
}

import { Body, Controller, Get, HttpCode, Param, Post, Query, Redirect } from '@nestjs/common';
import { AuthService } from "./auth.service";


@Controller()
export class AuthController {
  constructor(public readonly authService: AuthService) {}

  @Get('getauth')
  getauth(): string{
      return this.authService.getauth();
  }
}

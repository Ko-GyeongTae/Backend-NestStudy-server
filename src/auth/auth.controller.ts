import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(public readonly authService: AuthService) { }

    @Get('getauth')
    getauth(): string {
        return this.authService.getauth();
    }

    @Post('login')
    signin(): string {
        return this.authService.signin();
    }

    @Post('signup')
    signup(): string{
        return this.authService.signup();
    }

    @Post('email')
    checkEmail(): string{
        return this.authService.checkEmail();
    }
}

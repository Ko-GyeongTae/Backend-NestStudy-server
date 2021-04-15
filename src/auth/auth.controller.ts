import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(public readonly authService: AuthService) { }

    @Get('getauth')
    getauth(): string {
        return this.authService.getauth();
    }
}

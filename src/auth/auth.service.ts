import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    getauth(): string {
        return "auth api";
    }

    signin(): string {
        return "login";
    }

    signup(): string {
        return "signup";
    }

    checkEmail(): string {
        return "checkEmail";
    }
}

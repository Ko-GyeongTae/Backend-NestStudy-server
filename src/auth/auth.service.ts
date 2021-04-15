import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    getauth(): string {
        return "auth api";
    }
}

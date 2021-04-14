import { Global, Module } from '@nestjs/common';
import { AuthController } from "./auth.controller";
import { AuthService} from "./auth.service";

@Global()
@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}

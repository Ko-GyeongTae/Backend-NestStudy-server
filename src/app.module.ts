import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CommentService } from './comment/comment.service';
import { CommentController } from './comment/comment.controller';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [AuthModule, CommentModule],
  controllers: [AppController, CommentController],
  providers: [AppService, CommentService],
})
export class AppModule {}

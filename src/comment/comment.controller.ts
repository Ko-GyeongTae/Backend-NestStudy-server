import { Controller, Get, Post } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
    constructor(
        private readonly commentService: CommentService
    ){}

    @Get()
    getComment(): string {
        return this.commentService.getComment();
    }

    @Post('write')
    createComment(): string {
        return this.commentService.createComment();
    }

    @Post('update')
    updateComment(): string {
        return this.commentService.updateComment();
    }

}

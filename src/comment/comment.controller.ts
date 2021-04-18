import { Controller, Delete, Get, Post } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller()
export class CommentController {
    constructor(
        private readonly commentService: CommentService
    ){}

    @Get('list')
    getComment(): string {
        return this.commentService.getComment();
    }

    @Post('write')
    createComment(): string {
        return this.commentService.createComment();
    }

    @Delete('update')
    deleteComment(): string {
        return this.commentService.deleteComment();
    }

}

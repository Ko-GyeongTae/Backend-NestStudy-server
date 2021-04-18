import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
    getComment(): string {
        return 'Comment List';
    }

    createComment(): string {
        return 'create comment';
    }

    deleteComment(): string {
        return 'delete comment';
    }
}


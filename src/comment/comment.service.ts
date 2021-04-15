import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
    getComment(): string {
        return 'Comment List';
    }

    createComment(): string {
        return 'create comment';
    }

    updateComment(): string {
        return 'update comment';
    }
}


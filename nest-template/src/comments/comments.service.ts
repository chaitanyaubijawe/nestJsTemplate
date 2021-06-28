import {Injectable} from '@nestjs/common';
import {CreateCommentDto} from './dto/create-comment.dto';
import {UpdateCommentDto} from './dto/update-comment.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Comment, CommentDocument} from "./entities/comment.schema";

@Injectable()
export class CommentsService {
    constructor(@InjectModel(Comment.name) private commentModel: Model<CommentDocument>) {
    }

    create(createCommentDto: CreateCommentDto): Promise<any> {

        const createdComment = new this.commentModel(createCommentDto);
        return createdComment.save();
    }

    findAll() {
        return `This action returns all comments`;
    }

    findCommentsById(id: string) {
        return this.commentModel.find({filmId:id}).exec();
    }

    update(id: number, updateCommentDto: UpdateCommentDto) {
        return `This action updates a #${id} comment`;
    }

    remove(id: number) {
        return `This action removes a #${id} comment`;
    }
}

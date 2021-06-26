import {Injectable} from '@nestjs/common';
import {CreateCommentDto} from './dto/create-comment.dto';
import {UpdateCommentDto} from './dto/update-comment.dto';
import {Film, FilmDocument} from "../films/entities/film.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Comment} from "./entities/comment.schema";

@Injectable()
export class CommentsService {
    constructor(@InjectModel(Film.name) private filmModel: Model<FilmDocument>) {
    }

    create(createCommentDto: CreateCommentDto): Promise<any> {

        let query = {_id: createCommentDto.filmId};
        let updatedData = null;
        return new Promise((resolve, rejects) => {
            this.filmModel.findOne(query).exec((err, result) => {
                let commentArr: Array<Comment> = result.comments;
                if (commentArr == undefined) {
                    commentArr = Array();
                }
                result.comments.push(new Comment(createCommentDto.name, createCommentDto.comment, new Date()))
                updatedData = result;
                console.log("inside");
                let data = this.filmModel.findOneAndUpdate(query, updatedData, {
                    upsert: false,
                    useFindAndModify: true
                }).exec();
                resolve(data);
                // todo handle reject too. map the errors. error code is important for microservices.
            });

        });


    }

    findAll() {
        return `This action returns all comments`;
    }

    findOne(id: number) {
        return `This action returns a #${id} comment`;
    }

    update(id: number, updateCommentDto: UpdateCommentDto) {
        return `This action updates a #${id} comment`;
    }

    remove(id: number) {
        return `This action removes a #${id} comment`;
    }
}

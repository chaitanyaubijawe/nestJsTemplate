import {Injectable} from '@nestjs/common';
import {CreateFilmDto} from './dto/create-film.dto';
import {UpdateFilmDto} from './dto/update-film.dto';
import {Film, FilmDocument} from "./entities/film.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Comment, CommentDocument} from "../comments/entities/comment.schema";

@Injectable()
export class FilmsService {


    constructor(@InjectModel(Film.name) private filmModel: Model<FilmDocument>, @InjectModel(Comment.name) private commentModel: Model<CommentDocument>) {
    }

    create(createFilmDto: CreateFilmDto) {

        const createdFilm = new this.filmModel(createFilmDto);

        return createdFilm.save();
    }

    findAll() {

        return this.filmModel.find().exec();
    }


    findOne(id: string) {
        return this.filmModel.findById(id).exec();
    }

    update(id: number, updateFilmDto: UpdateFilmDto) {
        return `This action updates a #${id} film`;
    }

    remove(id: number) {
        return `This action removes a #${id} film`;
    }
}

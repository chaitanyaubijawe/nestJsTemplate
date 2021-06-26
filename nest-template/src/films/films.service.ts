import {Inject, Injectable} from '@nestjs/common';
import {CreateFilmDto} from './dto/create-film.dto';
import {UpdateFilmDto} from './dto/update-film.dto';
import {Film, FilmDocument, FilmSchema} from "./entities/film.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";

@Injectable()
export class FilmsService {


    constructor(@InjectModel(Film.name) private filmModel: Model<FilmDocument>) {
    }

    create(createFilmDto: CreateFilmDto) {
      const createdFilm = new this.filmModel(createFilmDto);
      return createdFilm.save();
    }

    findAll() {
        return this.filmModel.find().exec();
    }

    findOne(id: number) {
        return `This action returns a #${id} film`;
    }

    update(id: number, updateFilmDto: UpdateFilmDto) {
        return `This action updates a #${id} film`;
    }

    remove(id: number) {
        return `This action removes a #${id} film`;
    }
}

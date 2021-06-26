import {Comment} from "../../comments/entities/comment.entity";
import * as mongoose from 'mongoose';

export const FilmSchema = new mongoose.Schema({
    name: String,
    description: String,
    releaseDate: { type: Date },
    rating: Number,
    ticketPrice: Number,
    country: String,
    genre: String,
    photo: String,
    comments:[Comment]
});




import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {Comment} from "../../comments/entities/comment.schema";

export type FilmDocument = Film & Document;

@Schema()
export class Film {


    @Prop()
    id: string;
    @Prop()
    name: string;
    @Prop()
    description: string;
    @Prop()
    rating: number;
    @Prop()
    releaseDate: string;
    @Prop()
    ticketPrice: number;
    @Prop()
    country: String;
    @Prop()
    genre: String;
    @Prop()
    photo: String;
    @Prop()
    comments: [Comment];
}

export const FilmSchema = SchemaFactory.createForClass(Film);
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose'

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {


    @Prop()
    filmId: string;
    @Prop()
    username: string;
    @Prop()
    comment: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
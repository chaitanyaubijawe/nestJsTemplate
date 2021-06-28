import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {Comment} from "../../comments/entities/comment.schema";

export type UserDocument = UserDb & Document;

@Schema()
export class UserDb {


    @Prop()
    username: string;
    @Prop()
    password: string;

}

export const UserSchema = SchemaFactory.createForClass(UserDb);
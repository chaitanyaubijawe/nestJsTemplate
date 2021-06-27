import { Injectable } from '@nestjs/common';
import {UserDb, UserDocument, UserSchema} from "./entities/user.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Film, FilmDocument} from "../films/entities/film.schema";
import {CreateUserDto} from "./dto/create-user.dto";
// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'admin',
            password: 'admin',
        },
    ];

    constructor(@InjectModel(UserDb.name) private userModel: Model<UserDocument>) {
    }


    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }

    async findOneInDb(username: string) {
        return this.userModel.find({username:username}).exec();
    }

    async save(user: CreateUserDto): Promise<User | undefined> {
        const createdUser = new this.userModel(user);
        return createdUser.save();
    }
}
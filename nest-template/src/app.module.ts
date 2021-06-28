import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmsModule } from './films/films.module';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CommandModule } from 'nestjs-command';
import {UserCommand} from "./seed/user.command";
import {FilmsService} from "./films/films.service";
import {CommentsService} from "./comments/comments.service";
import {Comment, CommentSchema} from "./comments/entities/comment.schema";
import {Film, FilmSchema} from "./films/entities/film.schema";

@Module({
  imports: [CommandModule,FilmsModule, CommentsModule,  MongooseModule.forRoot('mongodb://localhost:27017/db-3'), AuthModule, UsersModule, MongooseModule.forFeature([{name: Comment.name, schema: CommentSchema}]), MongooseModule.forFeature([{name: Film.name, schema: FilmSchema}])],
  controllers: [AppController],
  providers: [UserCommand, AppService,FilmsService,CommentsService],
})
export class AppModule {}

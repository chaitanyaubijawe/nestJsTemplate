import {Module} from '@nestjs/common';
import {FilmsService} from './films.service';
import {FilmsController} from './films.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Film, FilmSchema} from "./entities/film.schema";
import {JwtAuthGuard} from "../auth/jwt-auth-guard.service";
import {APP_GUARD} from "@nestjs/core";
import {Comment, CommentSchema} from "../comments/entities/comment.schema";


@Module({
    imports: [MongooseModule.forFeature([{name: Comment.name, schema: CommentSchema}]), MongooseModule.forFeature([{name: Film.name, schema: FilmSchema}])],
    controllers: [FilmsController],
    providers: [{
        provide: APP_GUARD,
        useClass: JwtAuthGuard,
    }, FilmsService]
})
export class FilmsModule {
}

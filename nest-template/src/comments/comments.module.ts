import {Module} from '@nestjs/common';
import {CommentsService} from './comments.service';
import {CommentsController} from './comments.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Film, FilmSchema} from "../films/entities/Film.schema";

@Module({
    imports: [MongooseModule.forFeature([{name: Film.name, schema: FilmSchema}])],
    controllers: [CommentsController],
    providers: [CommentsService]
})
export class CommentsModule {
}

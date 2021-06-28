import {Command} from 'nestjs-command';
import {Injectable} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {CreateUserDto} from "../users/dto/create-user.dto";
import {FilmsService} from "../films/films.service";
import {CommentsService} from "../comments/comments.service";
import {CreateCommentDto} from "../comments/dto/create-comment.dto";
import {CreateFilmDto} from "../films/dto/create-film.dto";

@Injectable()
export class UserCommand {
    constructor(private readonly userService: UsersService, private readonly filmsService: FilmsService, private readonly commentsService: CommentsService) {
    }


    @Command({
        command: 'create',
        describe: 'create a user',
        autoExit: true // defaults to `true`, but you can use `false` if you need more control
    })
    async create() {
        console.log("Creating users.")
        const user1 = await this.userService.save(new CreateUserDto("abc", "abc"));
        console.log("User created=>", user1);
        const user2 = await this.userService.save(new CreateUserDto("admin", "admin"));
        console.log("User created=>", user2);

        console.log("Creating film.")
        const film1 = await this.filmsService.create(new CreateFilmDto("Avenger 1", "Movie with super heroes Part-1", "2020", 5, 20, "USA", "DRAMA", "temp url"));
        const comment1 = await this.commentsService.create(new CreateCommentDto(film1._id, user1.username, "awesome movie"));
        const comment2 = await this.commentsService.create(new CreateCommentDto(film1._id, user2.username, "amazing movie"));
        console.log("Film created=>", film1, "Comments=>", comment1, comment2);
        const film2 = await this.filmsService.create(new CreateFilmDto("Avenger 2", "Movie with super heroes Part-2", "2020", 4, 20, "USA", "DRAMA", "temp url"));
        const comment3 = await this.commentsService.create(new CreateCommentDto(film2._id, user1.username, "awesome movie and great graphics"));
        const comment4 = await this.commentsService.create(new CreateCommentDto(film2._id, user2.username, "amazing movie and great graphics"));
        console.log("Film created=>", film2, "Comments=>", comment3, comment4);
        const film3 = await this.filmsService.create(new CreateFilmDto("Avenger 3", "Movie with super heroes Part-3", "2020", 3, 20, "USA", "DRAMA", "temp url"));
        const comment5 = await this.commentsService.create(new CreateCommentDto(film3._id, user1.username, "awesome movie and great graphics and superb acting"));
        const comment6 =  await this.commentsService.create(new CreateCommentDto(film3._id, user2.username, "amazing movie and great graphics and superb acting"));
        console.log("Film created=>", film3, "Comments=>", comment5, comment6);

    }

}
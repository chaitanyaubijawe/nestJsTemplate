import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import {CreateUserDto} from "../users/dto/create-user.dto";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const userArr = await this.usersService.findOneInDb(username);
        if (userArr != undefined  && userArr[0] && userArr[0].password === pass) {
            const { password, ...result } = userArr[0];
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            username:user.username,
            access_token: this.jwtService.sign(payload),
        };
    }

    async register(user: CreateUserDto) {
        const userExists = await this.usersService.findOneInDb(user.username);
        if(userExists == undefined || userExists.length === 0){

            const userSaved =   await this.usersService.save(user);
            const payload = { username: user.username, sub: userSaved._id };
            return {
                user:userSaved,
                access_token: this.jwtService.sign(payload),
            };
        }else{
            // else throw error and http status code as already exists.
            throw new HttpException('Already Exists', HttpStatus.CONFLICT);
        }
    }

}
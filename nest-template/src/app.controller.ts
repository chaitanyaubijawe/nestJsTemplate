import {Controller, Get, Post, UseGuards, Request, Body} from '@nestjs/common';
import { AppService } from './app.service';
import {AuthService} from "./auth/auth.service";
import {JwtAuthGuard} from "./auth/jwt-auth-guard.service";
import {LocalAuthGuard} from "../dist/auth/local-auth.guard";
import {Public} from "./auth/public";
import {CreateFilmDto} from "./films/dto/create-film.dto";
import {CreateUserDto} from "./users/dto/create-user.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) {}

  @Get()
  getHealth(): string {
    return this.appService.getHealth();
  }

  @UseGuards(LocalAuthGuard)
  @Public()
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Public()
  @Post('auth/register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }
}

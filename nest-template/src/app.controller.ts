import {Controller, Get, Post, UseGuards, Request} from '@nestjs/common';
import { AppService } from './app.service';
import {AuthService} from "./auth/auth.service";
import {JwtAuthGuard} from "./auth/jwt-auth-guard.service";
import {LocalAuthGuard} from "../dist/auth/local-auth.guard";
import {Public} from "./auth/public";

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
}

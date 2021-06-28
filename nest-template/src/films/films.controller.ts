import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import {JwtAuthGuard} from "../auth/jwt-auth-guard.service";
import {Public} from "../auth/public";

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}


  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createFilmDto: CreateFilmDto) {
    return this.filmsService.create(createFilmDto);
  }


  @Public()
  @Get()
  findAll(@Query() query) {
    return this.filmsService.findAll(+query.page,1);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return this.filmsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilmDto: UpdateFilmDto) {
    return this.filmsService.update(+id, updateFilmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmsService.remove(+id);
  }
}

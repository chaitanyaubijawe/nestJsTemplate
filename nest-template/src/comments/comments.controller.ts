import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import {JwtAuthGuard} from "../auth/jwt-auth-guard.service";

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  async create(@Body() createCommentDto: CreateCommentDto): Promise<any> {

    return this.commentsService.create(createCommentDto);

  }

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findAllById(@Param('id') id: string) {
    return this.commentsService.findCommentsById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(+id, updateCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(+id);
  }
}

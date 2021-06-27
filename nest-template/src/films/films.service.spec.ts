import { Test, TestingModule } from '@nestjs/testing';
import { FilmsService } from './films.service';
import { closeInMongodConnection, rootMongooseTestModule } from '../../test/util';
import {MongooseModule} from "@nestjs/mongoose";
import {FilmSchema} from "./entities/film.schema";
import {CreateFilmDto} from "./dto/create-film.dto";

describe('FilmsService', () => {
  let service: FilmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: 'Film', schema: FilmSchema }]),
      ],
      providers: [FilmsService],
    }).compile();

    service = module.get<FilmsService>(FilmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should add film', async () => {

    const c = new CreateFilmDto("random","random","SHOULD_BE_DATE",1,1,"US","DRAMA","url" );
    const savedData = await service.create(c);
    expect(savedData).toBeDefined();

    expect(savedData._id).toBeDefined();
  });

  afterAll(async () => {
    await closeInMongodConnection();
  });
});

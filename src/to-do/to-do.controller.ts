/* eslint-disable prettier/prettier */
import {
    Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateToDoDto } from './dto/create-to-do.dto';
import { UpdateToDoDto } from './dto/update-to-do.dto';

@Controller('to-do')
export class ToDoController {
  //get /toDos?type=...
  @Get()
  getToDo(@Query('type') type: string) {
    return [{ type }];
  }
  //get one todo
  @Get(':id')
  getOneToDo(@Param('id') id: string) {
    return {
      id,
    };
  }
  //post
  @Post()
  CreateToDO(@Body() createToDoDto: CreateToDoDto) {
    return {
        name: createToDoDto.name,
    };
  }
  //PUT /todo/:id --> {...}
  @Put(':id')
  updateToDo(@Param('id') id: string, @Body() updateToDoDto: UpdateToDoDto) {
    return {
      id,
      name: updateToDoDto,
    };
  }
  //DELETE  /todo/:id
  @Delete(':id')
  removeToDo() {
    return {};
  }
}

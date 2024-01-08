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
import { ToDoService } from './to-do.service';

@Controller('to-do')
export class ToDoController {
    constructor(private readonly ToDoService: ToDoService) { }
  //get /toDos?type=...
  @Get()
  getToDo(@Query('task') task: 'bug fixing' | 'monitoring the server') {
    //   const service = new ToDoService();
    //   return service.getToDos(task);
      return this.ToDoService.getToDos(task);
  }
  //get one todo
  @Get(':id')
  getOneToDo(@Param('id') id: string) {
    return this.ToDoService.getToDo(+id);
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
    return this.ToDoService.updateToDO(+id, updateToDoDto);
  }
  //DELETE  /todo/:id
  @Delete(':id')
  removeToDo(@Param('id') id: string) {
   return this.ToDoService.removeToDo(+id);
  }
}

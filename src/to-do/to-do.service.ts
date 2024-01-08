/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateToDoDto } from './dto/create-to-do.dto';
import { UpdateToDoDto } from './dto/update-to-do.dto';
// import { InjectModel } from '@nestjs/mongoose';
// import { InjectConnection } from '@nestjs/mongoose';
// import { Connection } from 'mongoose';
// import { ToDo } from '../to-do/schema/ToDo.schema';
// import { CreateToDoDto } from '../to-do/dto/create-to-do.dto';

@Injectable()
export class ToDoService {
  private users = [
  {id: 0 , name: 'iman', task: 'car service'},
  {id: 1 , name: 'ali', task: 'bug fixing'},
  {id: 2 , name: 'hesam', task: 'monitoring the server'}
  ];

getToDos(task?: 'bug fixing' | 'monitoring the server'){
    if(task){
        return this.users.filter((users)=> users.task === task);
    }
    return this.users;
}

getToDo(id: number){
    const user = this.users.find((user)=> user.id === id);
    if(!user) {
        throw new Error('user not found');
    }

    return user;
}

createToDo(createToDoDto: CreateToDoDto) {
    const newuser = {
        ...createToDoDto,
        id: Date.now(),
    };
    this.users.push(newuser);
    
    return newuser
}

updateToDO(id: number, updateToDoDto:UpdateToDoDto) {
    this.users = this.users.map((user) => {
        if(user.id === id ){
            return {...user, ...updateToDoDto};
        }
        return user;
    });
    return this.getToDo(id);
}

removeToDo(id: number){
    const toBeRemoved = this.getToDo(id);

    this.users = this.users.filter((user)=> user.id !== id);
    return toBeRemoved;
}






};

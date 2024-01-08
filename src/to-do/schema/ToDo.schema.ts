/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ToDoClass extends Document {
  @Prop()
  name: string;

  @Prop()
  task: string;

  @Prop()
  deadLine: number;
}
export const ToDoSchema = SchemaFactory.createForClass(ToDoClass);

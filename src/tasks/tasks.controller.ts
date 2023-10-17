import { Body, Controller, Get, Param, Post,Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { title } from 'process';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  //вызвали get
  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }
  @Get('/:id')
  getTaskById(@Param('id') id:string){
    return this.taskService.getTaskById(id)
  }

  @Delete('/:id')
  deleteTaskById(@Param('id') id:string){
    return this.taskService.deleteTaskById(id)
  }

  //Create with Dto
  @Post()
  createTask(@Body() createTaskDto:CreateTaskDto): Task {
    return this.taskService.createTask(createTaskDto);
  }

  @Patch('/:id/status')
  updateTaskStatus(
   @Param('id')id:string,
   @Body('status')status:TaskStatus,
   ){
   return this.taskService.updateTaskStatus(id,status)
  }

}

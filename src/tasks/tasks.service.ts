import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 as uuid} from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
@Injectable()
export class TasksService {
    private tasks:Task[]=[];

    //1-создали сервис
    getAllTasks():Task[]{
        return this.tasks;
    }

    getTaskById(id:string):Task{
        return this.tasks.find(task=>task.id===id)
    }
    
    deleteTaskById(id:string){
        // const indexToDelete = this.tasks.findIndex(task => task.id === id);
        // if (indexToDelete !== -1) {
        //     this.tasks.splice(indexToDelete, 1);
        // } else {
        //     console.log(`Task with id ${id} not found.`);
        // }
        this.tasks=this.tasks.filter(task=>task.id !==id)
    }

    //with Dto
    createTask(createTaskDto:CreateTaskDto):Task{
        //destructurization
        const {title,description}=createTaskDto;
        const task:Task={
            id:uuid(),
            title,
            description,
            status:TaskStatus.OPEN,
        };
        this.tasks.push(task)

        return task;
    }
    updateTaskStatus(id:string,status:TaskStatus){
        const task=this.getTaskById(id);
        task.status=status;
        return task;
    }


}

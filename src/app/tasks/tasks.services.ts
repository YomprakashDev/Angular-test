import { dummyTasks } from "../dummy-tasks";
import { FormInterface } from "./new-task/new-task-model";


export class taskServices{
    private tasks = dummyTasks;
    
    getUserTask(userId:string){
        return this.tasks.filter((task) => task.userId === userId)
    }

    onAddTask(taskDate:FormInterface,userId:string){
         this.tasks.push({
      id:new Date().getTime().toString(),
      userId:userId,
      title:taskDate.title,
      summary:taskDate.summary,
      dueDate:taskDate.date
    })
    }

     onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }
}
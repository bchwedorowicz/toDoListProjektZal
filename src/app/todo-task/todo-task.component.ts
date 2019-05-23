import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Service } from '../services/service';
import { Task } from '../model/task';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  @Input()
  toDoTasksList: Array<Task> = [];

  constructor(private service: Service) {
    this.service.getTasksListObservator().subscribe(tasks => {
      this.toDoTasksList = tasks.filter(f => !f.isDone);
    });
  }

  ngOnInit() {
  }

  removeTask(task: Task) {
    this.service.removeTask(task);
  }

  doneTask(task: Task) {
    this.service.doneTask(task);
  }

  getColor(): string {
    return this.toDoTasksList.length >= 5 ? 'red' : 'green';
  }
}

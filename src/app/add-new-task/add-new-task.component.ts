import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Service } from '../services/service';
import { Task } from '../model/task';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.css']
})
export class AddNewTaskComponent implements OnInit {

  newTask: string;

  constructor(private service: Service) {

  }

  ngOnInit() {
  }

  addNewTask() {
    const task: Task = ({taskName: this.newTask, createdDate: new Date().toLocaleString(), isDone: false});
    this.service.addNewTask(task);
    this.newTask = '';
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../services/service';
import { Task } from '../model/task';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  doneTasks: Array<Task> = [];

  constructor(private service: Service) {
    this.service.getTasksListObservator().subscribe((tasks: Array<Task>) => {
      this.doneTasks = tasks.filter(e => e.isDone);
    });
  }

  ngOnInit() {
  }

}

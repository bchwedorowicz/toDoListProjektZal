import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable()
export class Service {

  private tasksList: Array<Task> = [];
  private doneTasksList: Array<Task> = [];

  private taskListObservator = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.tasksList = [
      {taskName: 'Odkurzanie', createdDate: new Date().toLocaleString(), isDone: false},
      {taskName: 'Gotowanie', createdDate: new Date().toLocaleString(), isDone: false},
      {taskName: 'Zakupy', createdDate: new Date().toLocaleString(), isDone: false},
      {taskName: 'Zakupy spożywcze', createdDate: new Date().toLocaleString(), isDone: true},
      {taskName: 'Mycie okien', createdDate: new Date().toLocaleString(), isDone: false}];
    this.taskListObservator.next(this.tasksList);
  }

  addNewTask(task: Task) {
    this.tasksList.push(task);
    this.taskListObservator.next(this.tasksList);
  }

  removeTask(task: Task) {
    this.tasksList = this.tasksList.filter(x => x !== task);
    this.taskListObservator.next(this.tasksList);
  }

  doneTask(task: Task) {
    task.doneDate = new Date().toLocaleString();
    task.isDone = true;
    const list = this.taskListObservator.getValue();
    this.taskListObservator.next(list);
  }

  getTasksListObservator(): Observable<Array<Task>> {
    return this.taskListObservator.asObservable();
  }
}

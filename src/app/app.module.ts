import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddNewTaskComponent } from './add-new-task/add-new-task.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { CheckedDirective } from './shared/checked.directive';
import { ShowDateDirective } from './shared/show-date.directive';
import { HttpServiceService } from './services/http-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddNewTaskComponent,
    TodoTaskComponent,
    DoneTaskComponent,
    CheckedDirective,
    ShowDateDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

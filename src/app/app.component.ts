import { Component, OnInit } from '@angular/core';
import { Service } from './services/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service]
})
export class AppComponent {



}

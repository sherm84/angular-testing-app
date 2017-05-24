import { Input } from '@angular/core/';
import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task = {content:'', status: ''};
  constructor() { }

  ngOnInit() {
  }

}
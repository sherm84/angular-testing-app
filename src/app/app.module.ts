import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdButtonModule, MdCheckboxModule, MdIconModule, MdInputModule, MdCardModule, MdListModule } from '@angular/material';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks/tasks.component';
import { DeletedComponent } from 'app/deleted/deleted.component';
import { RouterModule } from '@angular/router';
import { AppRoute } from './app-route.routing';



@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TasksComponent,
    DeletedComponent
],
  imports: [
    AppRoute,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdCheckboxModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdCardModule,
    MdListModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

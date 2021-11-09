import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoListWrapperComponent } from './todo-list-wrapper/todo-list-wrapper.component';
import { TodoListLineComponent } from './todo-list-line/todo-list-line.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListWrapperComponent,
    TodoListLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

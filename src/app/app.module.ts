import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoListWrapperComponent } from './todo-list-wrapper/todo-list-wrapper.component';
import { TodoListLineComponent } from './todo-list-line/todo-list-line.component';
import { DirtywordsDirective } from './dirtywords.directive';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  // para cada rota, especificamos um componente
  { path: 'home, component: TodoListWrapperComponent' },
  //{path: 'tasks/:id'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListWrapperComponent,
    TodoListLineComponent,
    DirtywordsDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

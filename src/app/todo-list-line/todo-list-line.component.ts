import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from '../model/Task';

@Component({
  selector: 'app-todo-list-line',
  templateUrl: './todo-list-line.component.html',
  styleUrls: ['./todo-list-line.component.css'],
})
export class TodoListLineComponent implements OnInit {
  @Input() task: Task = new Task('', '', '');

  //Event emitter é um emissor de eventos
  @Output() taskRemoved = new EventEmitter();

  words: string[] = ['bocó', 'boçal', 'john armless'];

  constructor() {}

  ngOnInit(): void {}

  remove(): void {
    //avisa que o evento de clique no botão de remoção foi feito. ele só avisa. a responsabilidade de remover é do componente pai
    this.taskRemoved.emit(this.task);
  }

  verifyDirtyWords() {
    return this.words.some((word) => this.task.name.includes(word));
  }
}

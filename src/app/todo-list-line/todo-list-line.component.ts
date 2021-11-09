import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list-line',
  templateUrl: './todo-list-line.component.html',
  styleUrls: ['./todo-list-line.component.css'],
})
export class TodoListLineComponent implements OnInit {
  @Input() task: string = '';

  //Event emitter é um emissor de eventos
  @Output() taskRemoved = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  remove(): void {
    //avisa que o evento de clique no botão de remoção foi feito. ele só avisa. a responsabilidade de remover é do componente pai
    this.taskRemoved.emit(this.task);
  }
}

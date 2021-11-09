import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list-wrapper',
  templateUrl: './todo-list-wrapper.component.html',
  styleUrls: ['./todo-list-wrapper.component.css'],
})
export class TodoListWrapperComponent implements OnInit {
  //declarando que as tasks serão uma array de strings. declaração e inicialização da nossa lista de tarefas;
  public tasks: string[] = [];
  constructor() {}

  ngOnInit(): void {}

  //método para adicionar a tarefa na propriedade do componente (array de tarefas)
  add(task: any): void {
    //aqui adicionamos o valor que está no input em nossa lista
    this.tasks.push(task.value);
    console.log(this.tasks);
  }

  handleRemove(removida: any): void {
    this.tasks = this.tasks.filter((task) => task != removida);
  }
}

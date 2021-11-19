import { Component, OnInit } from '@angular/core';
import { Task } from '../model/Task';
import { PersistenceService } from '../persistence.service';

@Component({
  selector: 'app-todo-list-wrapper',
  templateUrl: './todo-list-wrapper.component.html',
  styleUrls: ['./todo-list-wrapper.component.css'],
})
export class TodoListWrapperComponent implements OnInit {
  //declarando que as tasks serão uma array de strings. declaração e inicialização da nossa lista de tarefas;
  public tasks: Task[] = [];

  valorTarefa: string = '';

  constructor(private persistenceService: PersistenceService) {
    //loadFromAPI()
    this.tasks = this.persistenceService.loadFromLocalStorage();
  }

  ngOnInit(): void {}

  //método para adicionar a tarefa na propriedade do componente (array de tarefas)
  add(task: any): void {
    //aqui adicionamos o valor que está no input em nossa lista

    const localTask = new Task('1', task.value, task.value);

    this.tasks.push(localTask);
    this.persistenceService.addToLocalStorage(task.value);
  }

  handleRemove(removida: any): void {
    this.tasks = this.tasks.filter((task) => task != removida);
    this.persistenceService.loadToLocalStorage(this.tasks);
  }
}

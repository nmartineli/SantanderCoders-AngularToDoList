import { Injectable } from '@angular/core';
import { Task } from './model/Task';

@Injectable({
  providedIn: 'root',
})
export class PersistenceService {
  constructor() {}

  addToLocalStorage(task: Task) {
    let list: Task[] = JSON.parse(localStorage.getItem('tasks') ?? '[]');
    list.push(task);
    localStorage.setItem('tasks', JSON.stringify(list));
  }

  loadFromLocalStorage(): Task[] {
    return JSON.parse(localStorage.getItem('tasks') ?? '[]');
  }

  loadToLocalStorage(tasks: Task[]) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

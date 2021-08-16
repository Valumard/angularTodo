import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, partition } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from '../models/todo.model';
import { List } from 'immutable';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _todos: BehaviorSubject<List<Todo>> = new BehaviorSubject<List<Todo>>(List([]));

  public readonly doneTodos$: Observable<List<Todo>> = this._todos.pipe(
    map(todoList => todoList.filter(t => t.done))
  );

  public readonly undoneTodos$: Observable<List<Todo>> = this._todos.pipe(
    map(todoList => todoList.filter(t => !t.done))
  );

  addTodo(newTodo: string): void {
    const todo: Todo = { id: uuid(), title: newTodo, done: false }
    const newValue = this._todos.getValue().push(todo);
    this._todos.next(newValue);
  }

  setDone(id: string, value: boolean): void {
    const currentValue = this._todos.getValue();
    const index = currentValue.findIndex(todo => todo.id === id);
    const newValue = currentValue.update(
      index,
      item => {
        if (item) item.done = value;
        return item ?? { id, title: "marked", done: value };
      }
    );

    this._todos.next(newValue);
  }
}

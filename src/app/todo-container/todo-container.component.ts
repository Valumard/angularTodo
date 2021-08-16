import { Component } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodoService } from '../todoService/todo.service';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent {

  constructor(public todoService: TodoService) { }


  onDone(todo: Todo) {
    this.todoService.setDone(todo.id, !todo.done);
  }

}

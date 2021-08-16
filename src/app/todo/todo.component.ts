import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo!: Todo;
  @Output() onDone = new EventEmitter<Todo>();

  ngOnInit(): void {
  }

  checkTodo() {
    this.onDone.emit(this.todo);
  }

}

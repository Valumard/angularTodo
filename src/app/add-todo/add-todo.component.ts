import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../todoService/todo.service';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  constructor(public todoService: TodoService, private _formBuilder: FormBuilder) { }

  todoForm = this._formBuilder.group({
    title: ''
  })

  ngOnInit(): void {
  }

  onSubmit(): void {
    const formValue = this.todoForm.value.title;
    this.todoService.addTodo(formValue);
    this.todoForm.reset();
  }

}

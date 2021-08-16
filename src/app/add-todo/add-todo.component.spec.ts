import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { AddTodoComponent } from './add-todo.component';

describe('AddTodoComponent', () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;

  const todoServiceSpy =

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [AddTodoComponent],
        providers: [
          FormBuilder
        ]
      })
        .compileComponents();
    });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service to add a Todo with given title', () => {
    spyOn(component.todoService, "addTodo");
    component.todoForm.value.title = "Test";
    component.onSubmit();

    expect(component.todoService.addTodo).toHaveBeenCalledOnceWith("Test");
  })

  it('should reset form after submitting', () => {
    component.todoForm.value.title = "Test";
    component.onSubmit();

    expect(component.todoForm.value.title).toBeNull();
  })
});

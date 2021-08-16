import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be empty on first create', () => {
    service.todos$.subscribe(data => {
      expect(data).toBeDefined();
      expect(data.toArray()).toHaveSize(0);
    })
  });

  it('addTodo should add a Todo', () => {
    const dummyTodo = 'A Todo';
    service.addTodo(dummyTodo);
    service.todos$.subscribe(data => {
      expect(data).toBeDefined();
      expect(data.toArray()).toHaveSize(1);
      const addedTodo = data.toArray().find(el => el.title === dummyTodo);
      expect(addedTodo).toBeDefined();
    })
  })
});

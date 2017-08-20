import {Component} from '@angular/core';
import {ToDo} from './components/todo-list/todo';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private todoList = new BehaviorSubject<ToDo[]>([{
    name: 'Buy some milk',
    completed: false
  }, {
    name: 'Call Sophie',
    completed: true
  }]);

  private todoList$ = this.todoList.asObservable();

  public onAddNewTodo(e: any) {
    const value = this.todoList.getValue();
    value.push({name: e, completed: false});
    this.todoList.next(value);
  }

  get todos$(): Observable<ToDo[]> {
    return this.todoList$;
  }
}

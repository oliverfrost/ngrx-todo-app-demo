import {Component, Input} from '@angular/core';
import {ToDo} from './todo';
import {TodoListItemComponent} from './todo-list-item/todo-list-item.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  entryComponents: [TodoListItemComponent]
})
export class TodoListComponent {
  @Input() todos: ToDo[];
}

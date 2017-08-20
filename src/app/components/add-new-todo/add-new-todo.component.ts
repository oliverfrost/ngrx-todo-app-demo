import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-new-todo',
  templateUrl: './add-new-todo.component.html',
  styleUrls: ['./add-new-todo.component.scss']
})
export class AddNewTodoComponent {
  @Output() action = new EventEmitter();
  public newTodoText = '';

  public addToDo(): void {
    this.action.emit(this.newTodoText);
    this.newTodoText = '';
  }
}

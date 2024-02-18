import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  todoInput: string = '';

  constructor() {}

  ngOnInit() {
    this.todos = [
      {
        content: 'First todo',
        completed: false,
      },
      {
        content: 'Second todo',
        completed: true,
      },
    ];
  }

  toogleDone(id: number) {
    this.todos.map((value, index) => {
      if (index === id) value.completed = !value.completed;
      return value;
    });
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((value, index) => index !== id);
  }

  addTodo() {
    this.todos.push({
      content: this.todoInput,
      completed: false,
    });
    this.todoInput = '';
  }
}

import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TaskList } from '../../models/Task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  isDropdownOpen = false;

  task: TaskList[] = [];
  taskGeneral: TaskList[] = [];

  constructor(private serviceTask: TaskService) {}

  ngOnInit(): void {
    this.serviceTask.GetTask().subscribe((response) => {
      this.task = response.data;
      this.taskGeneral = response.data;
    });
  }

  openDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}

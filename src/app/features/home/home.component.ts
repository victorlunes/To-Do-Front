import { Component, OnInit, HostListener } from '@angular/core';
import { TaskService } from '../../core/services/task.service';
import { TaskList } from '../../core/models/Task';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private serviceTask: TaskService) {}

  isDropdownOpen = false;

  tasks: TaskList[] = [];
  taskGeneral: TaskList[] = [];

  ngOnInit(): void {
    this.serviceTask.GetTask().subscribe((response) => {
      this.tasks = response.data;
      this.taskGeneral = response.data;
    });
  }

  openDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  pressTimer: any;
  dropdownTask: any = null;

  startPress(task: any) {
    this.pressTimer = setTimeout(() => {
      this.dropdownTask = task;
    }, 600);
  }

  cancelPress() {
    clearTimeout(this.pressTimer);
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (!target.closest('.card-contents')) {
      this.dropdownTask = null;
    }
  }
}

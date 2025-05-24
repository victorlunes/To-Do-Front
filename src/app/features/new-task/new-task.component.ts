import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../core/services/task.service';

@Component({
  selector: 'app-new-task',
  imports: [CommonModule, FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  constructor(private serviceTask: TaskService) {}
  

}

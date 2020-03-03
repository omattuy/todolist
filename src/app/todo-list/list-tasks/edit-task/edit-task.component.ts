import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../../../services/DataTransferService';
import { Task } from '../../../models/task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {

  tasks: Task[] = [];
  id: string;
  title?: string;
  description?: string;
  priorities = ['High', 'Medium', 'Low'];
  priority?: string;
  types_status = ['Not started', 'In progress', 'Completed'];
  status?: string;

  edited_title: boolean;
  edited_description: boolean;
  edited_priority: boolean;
  edited_status: boolean;

  constructor(private ev: DataTransferService) {
    this.edited_title = false;
    this.edited_description = false;
    this.edited_priority = false;
    this.edited_status = false;
 }

  ngOnInit() {}

  editTitle() {
    this.edited_title = !this.edited_title;
  }

  editDescription() {
    this.edited_description = !this.edited_description;
  }

  editPriority() {
    this.edited_priority = !this.edited_priority;
  }

  editStatus() {
    this.edited_status = !this.edited_status;
  }

  editTask () {
    this.ev.editTask(this.id, this.title, this.description, this.priority, this.status);
  }

}

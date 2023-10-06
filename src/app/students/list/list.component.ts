import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class StudentsComponent {
  retreivedStudentDetails: any[] = [];

  @Input() studentDetails: any[] = [];
  selectedStudent: any;

  onEditClick(student: any) {
    this.selectedStudent = student;
  }

  constructor() {}

  ngOnInit() {
    const storedStudentDetails = localStorage.getItem('studentDetails');
    if (storedStudentDetails) {
      this.retreivedStudentDetails = JSON.parse(storedStudentDetails);
    }
  }
}

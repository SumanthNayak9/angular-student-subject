import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_student';

  retreivedStudentDetails = [
    // Sample student data, replace with your actual data
    { name: 'John Doe', id: '1', phno: '123-456-7890' },
    { name: 'Jane Smith', id: '2', phno: '987-654-3210' }
  ];

  selectedStudent: any = null;

  onEditClick(student: any) {
    this.selectedStudent = { ...student };
  }
  onUpdateStudent(updatedStudent: any) {
    // Handle the update logic here
    // You can update the data in this component or make an API call
    console.log('Updated student:', updatedStudent);
    this.selectedStudent = null; // Close the edit form after update
  }
}


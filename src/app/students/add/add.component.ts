import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  StudentDetails: any[] = [];
  inputName:any = '';
  inputId:any = '';
  inputPhno:any = '';
  // errorMessage = '';

  constructor(private router: Router) {
    const storedStudentDetails = localStorage.getItem('studentDetails');
    if (storedStudentDetails) {
      this.StudentDetails = JSON.parse(storedStudentDetails);
    }
  }

  addDetails(){
    if (this.inputName.trim() === '' || this.inputId.trim() === '' || this.inputPhno.trim() === '') {
      // this.errorMessage = 'All fields are required.';
      alert("All fields are required.")
      return; 
    }

    const existingDetails = this.StudentDetails.find(student => student.name === this.inputName ||student.id === this.inputId || student.phno === this.inputPhno);
    if(existingDetails){
      alert("The given details already exists, Please enter a different details");
      return;
    }

    const newTask = {
      name: this.inputName,
      id: this.inputId,
      phno: this.inputPhno,
    };
    this.StudentDetails.push(newTask);
    this.inputName = '';
    this.inputId = '';
    this.inputPhno = '';
    // this.errorMessage = '';

    localStorage.setItem('studentDetails', JSON.stringify(this.StudentDetails));
    this.router.navigate(['/students']);  
  }

}



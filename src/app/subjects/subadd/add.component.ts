import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  SubjectDetails: any[] = [];
  inputName = '';
  inputId = '';
  inputfname = '';
  inputfid = '';

  // errorMessage = '';

  constructor(private router: Router) {
    const storedSubjectDetails = localStorage.getItem('subjectDetails');
    if (storedSubjectDetails) {
      this.SubjectDetails = JSON.parse(storedSubjectDetails);
    }
  }

  addDetails(){
    if (this.inputName.trim() === '' || this.inputId.trim() === '' || this.inputfname.trim() === '' || this.inputfid.trim() === '') {
      // this.errorMessage = 'All fields are required.';
      alert("All fields are required.")
      return; 
    }

    const existingDetails = this.SubjectDetails.find(subject => subject.name === this.inputName ||subject.id === this.inputId || subject.fname === this.inputfname || subject.fid === this.inputfid);
    if(existingDetails){
      alert("The given details already exists, Please enter a different details");
      return;
    }

    const newTask = {
      name: this.inputName,
      id: this.inputId,
      fname: this.inputfname,
      fid: this.inputId,
      
    };
    this.SubjectDetails.push(newTask);
    this.inputName = '';
    this.inputId = '';
    this.inputfname = '';
    this.inputfid = '';

    // this.errorMessage = '';

    localStorage.setItem('subjectDetails', JSON.stringify(this.SubjectDetails));
    this.router.navigate(['/subjects']);  
  }

}



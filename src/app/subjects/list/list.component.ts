import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class SubjectsComponent {
  retreivedSubjectDetails: any[] = [];

  constructor() {}

  ngOnInit() {
    const storedSubjectDetails = localStorage.getItem('SubjectDetails');
    console.log('Stored Data:', storedSubjectDetails);
    if(storedSubjectDetails){
      this.retreivedSubjectDetails = JSON.parse(storedSubjectDetails);
      console.log('Parsed Data:', this.retreivedSubjectDetails);
    }
  }
}
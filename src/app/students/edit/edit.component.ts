
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditStudentComponent{
  @Input() selectedStudent: any;
  @Output() updateStudent = new EventEmitter<any>();
  StudentIdFromURL: String = "";
  ename:any = '';
  eid:any = '';
  ephno:any = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.StudentIdFromURL = params['id'];
      const studentsFromLocalStorage: any[] = JSON.parse(localStorage.getItem('studentDetails') || '[]');
      this.selectedStudent = studentsFromLocalStorage.find(student => student.id === this.StudentIdFromURL);
console.log(this.selectedStudent)
console.log(studentsFromLocalStorage)
      this.ename = this.selectedStudent.name;
      this.eid = this.selectedStudent.id;
      this.ephno = this.selectedStudent.phno;
      console.log(this.eid)

    });
  }



  onUpdateClick(){
    this.updateStudent.emit(this.selectedStudent);
  }
}

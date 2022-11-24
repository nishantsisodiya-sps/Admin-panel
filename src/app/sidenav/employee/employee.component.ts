import { Component, OnInit,} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { modalObj } from './interface2/modallist';
import { ModalComponent } from './modal/modal.component';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  user: any = {}
  employee:any ={}

  EmployeeData : modalObj[];

  modalObj: modalObj
  userObj: any;
  constructor(private dialog:MatDialog) {
    this.EmployeeData = [];
    this.modalObj = new modalObj();
   }

  ngOnInit(): void {
    this.recordold()
  }
  
  recordold = (): void => {
  const records = localStorage.getItem('EmployeeData')
  if(records != null){
    this.EmployeeData = JSON.parse(records)
  }}

  openDialog(): void {
    this.dialog.open(ModalComponent, {
      width: '50%'
    });
  }
}
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { modalObj } from '../interface2/modallist';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})


export class ModalComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  user: any = {}
  employee: any = {}

  modalObj: modalObj;
  EmployeeData: any;
  IsmodelShow: boolean = false;



  constructor() {
    this.modalObj = new modalObj();
  }


  getNewUser() {
    const oldUser = localStorage.getItem('EmployeeData')
    if (oldUser != null) {
      const EmployeeData = JSON.parse(oldUser)
      return EmployeeData.length + 1;
    } else {
      return 1;
    }
  }

  recordold = (): void => {

    const records = localStorage.getItem('EmployeeData')
    if (records != null) {
      this.EmployeeData = JSON.parse(records)
    }
  }

  saveData() {

    const newId = this.getNewUser();
    this.modalObj.employeeId = newId
    const oldUser = localStorage.getItem('EmployeeData')
    if (oldUser != null) {
      const EmployeeData = JSON.parse(oldUser)
      EmployeeData.push(this.modalObj)
      localStorage.setItem('EmployeeData', JSON.stringify(EmployeeData))
    } else {
      const userArr = [];
      userArr.push(this.modalObj);
      localStorage.setItem('EmployeeData', JSON.stringify(userArr))
    }
    this.recordold()
    this.registerForm.reset();
  }
  
    ngOnInit(): void {
    this.registerForm = new FormGroup({
      'Name': new FormControl(null, Validators.required),
      'date': new FormControl(null, Validators.required),
      'credit': new FormControl(null, Validators.required),
      'debit': new FormControl(null, Validators.required),
    })
    this.saveData()
  }
}


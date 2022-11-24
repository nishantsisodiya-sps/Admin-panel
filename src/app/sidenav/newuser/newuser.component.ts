import { JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { max } from 'rxjs';
import { UserObj } from './interface/userlist';

interface job {
  value: string;
  viewValue: string;
}
interface tech {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})


export class NewuserComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  user: any = {}
  employee:any ={}
 
  userList:UserObj [];
  userObj:UserObj;



  constructor(private fb: FormBuilder) {
    this.userObj = new UserObj();
    this.userList = [];
   
   }



   getNewUser(){
    const oldUser = localStorage.getItem('userList')
    if(oldUser != null){
      const userList = JSON.parse(oldUser)
      return userList.length+1;
    }else{
      return 1;
    }
   }
   
   onSubmit(){
    const newId = this.getNewUser();
    this.userObj.userId = newId
    const oldUser = localStorage.getItem('userList')
    if(oldUser != null){
      const userList = JSON.parse(oldUser)
      userList.push(this.userObj)
      localStorage.setItem('userList', JSON.stringify(userList))
    }else{
      const userArr = [];
      userArr.push(this.userObj);
      localStorage.setItem('userList', JSON.stringify(userArr))
      console.log(this.user.userFname)
    }
      this.registerForm.reset();
      this.recodesold()
   }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null, [Validators.required, Validators.pattern("[0-9 ]{10}")]),
      'age': new FormControl(null, [Validators.required, Validators.min(18), Validators.max(60)]),
      'doj': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required),
      'terms': new FormControl(null, Validators.required),
      'designation': new FormControl(null, Validators.required),
      'technology': new FormControl(null, Validators.required),
    })
    this.recodesold()
  }

    recodesold(){
      const records = localStorage.getItem('userList')
      if(records != null){
      this.userList = JSON.parse(records)
    }}

  
   dltData(id:any){
      const oldRecord = localStorage.getItem('userList')
      if (oldRecord != null){
       const userList = JSON.parse(oldRecord)
       userList.splice(userList.findIndex((a:any)=> a.userId == id),1);
       localStorage.setItem('userList' , JSON.stringify(userList))
     }
     this.recodesold()
   }



  Designation: job[] = [
    { value: 'Intern', viewValue: 'Intern' },
    { value: 'Software Developer', viewValue: 'Software Developer' },
    { value: 'Associate Software Engineer', viewValue: 'Associate software Engineer' },
    { value: 'Software Engineer', viewValue: 'software Engineer' },
    { value: 'Sr. Software Engineer', viewValue: 'Sr. Software Engineer' },
    { value: 'Solution Architect', viewValue: 'Solution Architect' },
    { value: 'Sr.Solution Architect', viewValue: 'Sr. Solution Architect' },
  ];
  Technology: tech[] = [
    { value: 'React Js', viewValue: 'React Js' },
    { value: 'Veu Js', viewValue: 'Veu Js' },
    { value: 'Angular Js', viewValue: 'Angular Js' },
    { value: 'Python', viewValue: 'Python' },
    { value: 'Node js', viewValue: 'Node js' },
    { value: 'React Native', viewValue: 'React Native' },
    { value: 'PhP', viewValue: 'PhP' },
  ];
  gender = [
    { value: 'Male', viewValue: 'Male' },
    { value: 'Female', viewValue: 'Female' },
    { value: 'Prefer not to say', viewValue: 'Prefer not to say' },
  ];
}

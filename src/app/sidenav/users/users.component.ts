import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { AppserviceService } from 'src/app/appservice/appservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  constructor(private _myService:AppserviceService) { }
  users = [{name:"" , id:"" , email:""}]

  ngOnInit(): void {
    this._myService.users().subscribe(userData => this.users = userData)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http:HttpClient) { }

  users():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}

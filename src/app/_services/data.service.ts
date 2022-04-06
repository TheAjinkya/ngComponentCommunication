import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  subject = new Subject<any>()

  constructor(private http: HttpClient) { }

  getusers():Observable<any> {
   return this.http.get('https://api.github.com/users')
  }

}

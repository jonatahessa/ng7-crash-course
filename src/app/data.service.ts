import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url:string = 'https://reqres.in';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.url}/api/users`);
  }
}

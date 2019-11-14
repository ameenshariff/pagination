import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080';

  getCustomers() : Observable<any>{
    console.log("in service")
    return this.http.get(`${this.baseUrl}/getAllCustomers`);
  }
}

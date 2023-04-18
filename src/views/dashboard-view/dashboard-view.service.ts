import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardViewService {
  private baseUrl = 'http://localhost:5000/cars';

  constructor(private http: HttpClient) {}

  getAllCars(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  apiUrl: string ="http://localhost:3000/employees";
  constructor(
    private httpClient: HttpClient
  ) { }
  // Get All list Employees
  getAllEmployees(): Observable<any> {
    return this.httpClient.get(this.apiUrl).pipe(map((response: any) => response));
  }
  // Add Employee
  addEmployees(data) {
    return this.httpClient.post(this.apiUrl, data).pipe(map((response: any) => response));
  }

  // Get Employees By ID
  getEmployeesById(id){
    return this.httpClient.get(`${this.apiUrl}/${id}`).pipe(map((respone:any)=>respone));
  }

  //Update Employees
  updateEmployee(data){
    return this.httpClient.put(`${this.apiUrl}/${data.id}`,data)
  }

  // Delete Employee
  deleteEmployees(id) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}

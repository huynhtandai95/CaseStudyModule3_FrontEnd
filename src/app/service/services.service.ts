import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ServicesByService {
  apiUrl: string = "http://localhost:3000/services"
  constructor(
    private httpClient : HttpClient
  ) { }

  // Get All Services
  getAllServices(): Observable<any>{
   return this.httpClient.get(this.apiUrl).pipe(map((response: any) =>response))
  }

  // Delete Service By ID
  DeleteService(id){
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
  addService(data){
    return this.httpClient.post(this.apiUrl,data).pipe(map((response:any)=>response))
  }

  getServiceById(id){
    return this.httpClient.get(`${this.apiUrl}/${id}`).pipe(map((respone:any)=>respone));
  }
  updateEmployee(data){
    return this.httpClient.put(`${this.apiUrl}/${data.id}`,data)
  }
}

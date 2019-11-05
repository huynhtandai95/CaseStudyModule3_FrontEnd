import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ContractsDeltailsService {
  apiUrl: string ="http://localhost:3000/contractsDeltails";
  constructor(
  private  httpClient: HttpClient
  ) { }
  // Get All list ContractsDeltails
  getAllContractsDeltails(): Observable<any> {
    return this.httpClient.get(this.apiUrl).pipe(map((response: any) => response))
  }
  getContractsDeltailsById(id){
    return this.httpClient.get(`${this.apiUrl}/${id}`).pipe(map((respone:any)=>respone));
  }
  
}

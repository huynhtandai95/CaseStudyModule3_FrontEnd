import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ContractsService {
  apiUrl: string ="http://localhost:3000/contracts";
  constructor(
    private httpClient :HttpClient
  ) { }
  getAllContracts(): Observable<any> {
    return this.httpClient.get(this.apiUrl).pipe(map((response: any) => response));
  }
  deleteContract(id){
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
  addContract(data) {
    return this.httpClient.post(this.apiUrl, data).pipe(map((response: any) => response));
  }
}


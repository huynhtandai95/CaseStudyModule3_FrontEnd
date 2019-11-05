import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import { Observable  } from 'rxjs';
import { map  } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  apiUrl: string = "http://localhost:3000/customers"
  constructor(
    private httpClient: HttpClient
    ) { }
    

// Get All list Customers
  getAllCustomer(): Observable<any> {
    return this.httpClient.get(this.apiUrl).pipe(map((response: any) => response ));

  }

  // Add Customer
  addCustomer(data) {
    return this.httpClient.post(this.apiUrl, data).pipe(map((response: any) => response  ));
    
  }

  // Get Customer By ID
  getCustomerById(id) {
    return this.httpClient.get(`${this.apiUrl}/${id}`).pipe(map((response: any) => response));
  }

  // Update Customer
  updateCustomer(data) {
    return this.httpClient.put(`${this.apiUrl}/${data.id}`, data);
  }

// Delete Customer
  deleteCustomer(id) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}


// WRITE CODE TYPE [ Template-Driven Forms ]

import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/models/customer.model';
import { CustomersService } from "../../service/customers.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.css']
})
export class CustomersEditComponent implements OnInit {
  customer: Customers;
  nowDate;
  constructor(
    private customersService: CustomersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {  }

  ngOnInit() {
    this.customer = new Customers;
    this.nowDate = new Date()
    this.loadCustomerById();
  }


  loadCustomerById() {
    this.activatedRoute.params.subscribe(data => {                  // Get ID params URL
      let id = data['id'];
      this.customersService.getCustomerById(id).subscribe(result => {   // Get Customer Data By ID
        this.customer = result
     
      })
    })
  }

  // Store Customer
  onClickUpdate() {
    this.customersService.updateCustomer(this.customer).subscribe(data => {
      this.router.navigateByUrl('/admin/manager/customers')
    })
  }
}

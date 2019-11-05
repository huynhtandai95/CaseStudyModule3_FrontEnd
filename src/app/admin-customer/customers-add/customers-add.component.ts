import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Customers } from 'src/app/models/customer.model';
import { CustomersService } from "../../service/customers.service";


@Component({
  selector: 'app-customers-add',
  templateUrl: './customers-add.component.html',
  styleUrls: ['./customers-add.component.css']
})
export class CustomersAddComponent implements OnInit {
  formCustomer: FormGroup;
  customer: Customers;
nowDate;
  constructor(
    private customersService: CustomersService,
    private router: Router,
    private formBuilder: FormBuilder,
    
  ) {this.nowDate = new Date() }

  ngOnInit() {
    this.customer = new Customers();
    this.createForm()
  }
  
  // Function Add Customer after Click Submit
  onClickAdd() {
    this.customersService.addCustomer(this.formCustomer.value).subscribe(data => {
      
      if (data &&data.id) {
        alert('User Create successfully.')
        this.router.navigate(['admin/manager/customers'])
       
      }
    })
  }

  // onGetCustomerByID(id) {
  //   this.customersService.getCustomerById(id).subscribe(data => {
  //     console.log(data)
  //   })
  // }

  // Create Form and Validation
  createForm() {
    this.formCustomer = this.formBuilder.group({
      code: ['', [
        Validators.required,
        Validators.pattern('[K][H]\-[0-9]{4}')
      ]],
      name: ['',[
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('[^0-9]+')
    
      ]],
      birthday: ['',[
        Validators.required,
        // Validators.pattern('^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$')
  
      ]],
      phone: ['',[
        Validators.required,
        Validators.pattern('^(([\+][8][4])|[0])([0-9]{9,10})$')
      ]],
      cmnd: ['',[
        Validators.required,
        Validators.pattern('^[0-9]{9}$|^[0-9]{12}$')
      ]],
      email: ['',[
        Validators.required,
        Validators.pattern('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$')
      ]],
      address: ['']
    })
    this.formCustomer.valueChanges.subscribe(data=>{
    
    })
  }

  // Reset Value Form
  onResetForm() {
    // this.formCustomer.reset();
  
  }
}


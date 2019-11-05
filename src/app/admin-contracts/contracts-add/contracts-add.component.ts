import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Contracts } from 'src/app/models/contracts.model';
import { ContractsService } from "../../service/contracts.service";
import { ServicesByService } from "../../service/services.service";
import { CustomersService } from "../../service/customers.service";
import { EmployeesService } from "../../service/employees.service";

import { Router } from "@angular/router";
@Component({
  selector: 'app-contracts-add',
  templateUrl: './contracts-add.component.html',
  styleUrls: ['./contracts-add.component.css']
})
export class ContractsAddComponent implements OnInit {
  formContracts: FormGroup;
  contracts: Contracts;
  services;
  customers;
  employees;
  dateStart;
  nowDate;
  constructor(
    private contractsService: ContractsService,
    private servicesByService: ServicesByService,
    private customersService: CustomersService,
    private employeesService: EmployeesService,
    private router: Router,
    private formBuilder: FormBuilder
    
  ) {this.nowDate = new Date() }

  ngOnInit() {
    this.contracts = new Contracts()
    this.getAllInfo()
    this.createForm()
   
   
  }


  createForm(){
    this.formContracts = this.formBuilder.group({
      id: [''],
      Users_id: [''],
      Employees_id: [''],
      Services_id: [''],
      DateStart: [''],   
      DateEnd: [''],
      TotalPrice: ['']
    })
    this.formContracts.valueChanges.subscribe(data=>{  
      this.dateStart =data.DateStart
      
    })
   
}

// Get all  Customers , Employees,  Services
getAllInfo(){
  this.customersService.getAllCustomer().subscribe(data => {
    this.customers = data;
  })
  this.employeesService.getAllEmployees().subscribe(data => {
    this.employees = data; 
  })
  this.servicesByService.getAllServices().subscribe(data=>{
    this.services = data
  })
}

//  
onClickAdd(){
  return this.contractsService.addContract(this.formContracts.value).subscribe(data=>{
    if (data && data.id) {
      this.router.navigate(['admin/manager/contracts'])
    }
  }) 
}

}

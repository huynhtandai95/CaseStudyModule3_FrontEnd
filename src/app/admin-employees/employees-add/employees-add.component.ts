import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Employees } from 'src/app/models/employees.model';
import { EmployeesService } from "../../service/employees.service";

@Component({
  selector: 'app-employees-add',
  templateUrl: './employees-add.component.html',
  styleUrls: ['./employees-add.component.css']
})
export class EmployeesAddComponent implements OnInit {
  formEmployee: FormGroup;
  employees: Employees;
  nowDate
  constructor(
    private employeesService: EmployeesService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { this.nowDate = new Date()}

  ngOnInit() {
    this.employees = new Employees()
    this.createForm()
  }
  createForm(){
      this.formEmployee = this.formBuilder.group({
        name: ['',[
          Validators.required,
          Validators.minLength(4),
          Validators.pattern('[^0-9]+')
        ]],
        code: ['',[
          Validators.required,
          Validators.pattern('[N][V]\-[0-9]{4}')
        ]],
        birthday: ['',[
          Validators.required
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
          Validators.pattern('([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+')
        ]],
        position: [''],
        address: ['']
      })
      this.formEmployee.valueChanges.subscribe(data=>{
        this.employees =data;
      })
  }

  onClickAdd(){
    this.employeesService.addEmployees( this.employees).subscribe(data=>{
      if (data && data.id) {
        this.router.navigate(['admin/manager/employees'])
      }
    })
  }


}

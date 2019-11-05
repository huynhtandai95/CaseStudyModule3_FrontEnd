import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from "@angular/forms";
import { Employees } from 'src/app/models/employees.model';
import { EmployeesService } from "../../service/employees.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-employees-edit',
  templateUrl: './employees-edit.component.html',
  styleUrls: ['./employees-edit.component.css']
})
export class EmployeesEditComponent implements OnInit {
  formEmployee : FormGroup
  employees = new Employees();
  nowDate
  constructor(
    private formBuilder : FormBuilder,
    private employeesService : EmployeesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
 
  ) {this.nowDate = new Date()}

  ngOnInit() {
    
    this.getEmployeesById()
    this.createForm()
    
  
    
  }
  createForm() {
    this.formEmployee = this.formBuilder.group({
      id: [''],
      code: ['', [
        Validators.required,
        Validators.pattern('[N][V]\-[0-9]{4}')
      ]],
      name: ['',[
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('[^0-9]+')
    
      ]],
      birthday: ['',[
        Validators.required,
        Validators.pattern('')
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
      address: [''],
      position:['']
    })
    // this.formEmployee.valueChanges.subscribe(data => {                        // Listen change value
    //   this.employees = data;
     
    
    // })
  }

  getEmployeesById(){
  this.activatedRoute.params.subscribe(data=>{
    let id = data['id'];
    this.employeesService.getEmployeesById(id).subscribe(result=>{
     this.formEmployee.patchValue(result)
     
     
    })
  })

  }
  onClickUpdate(){
    this.employeesService.updateEmployee(this.formEmployee.value).subscribe(data=>{
      this.router.navigateByUrl('/admin/manager/employees')
      
    })
   
  }
}

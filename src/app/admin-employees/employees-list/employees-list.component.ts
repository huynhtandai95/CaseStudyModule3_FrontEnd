import { Component, OnInit } from '@angular/core';
import { EmployeesService } from "../../service/employees.service";
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees;
  constructor(
    private employeesService: EmployeesService
  ) { }

  ngOnInit() {
    this.getAllEmployees()
  }

  getAllEmployees() {
    this.employeesService.getAllEmployees().subscribe(data => {
      this.employees = data;
     
    })
  }

  onDeleteEmployee(id){
    if(confirm("Bạn có chắn chắn muốn xóa Nhân Viên này")){
      this.employeesService.deleteEmployees(id).subscribe(data=>{
        this.getAllEmployees()
      })
    }
    
  }
}

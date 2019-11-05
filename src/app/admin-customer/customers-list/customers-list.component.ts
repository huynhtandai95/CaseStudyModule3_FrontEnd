import { Component, OnInit } from '@angular/core';
import { CustomersService } from "../../service/customers.service";

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers;
  constructor(
    private customersService: CustomersService,

  ) { }

  ngOnInit() {
    this.getAllCustomers()
    
  }

  getAllCustomers() {
    this.customersService.getAllCustomer().subscribe(data => {
      this.customers = data;

    })
  }
  onDeleteCustomer(id) {
    if (confirm('Bạn chắc chắc muốn xóa?')) {
      this.customersService.deleteCustomer(id).subscribe(data => {
        this.getAllCustomers()                                              // Return All List customers after Delete
      })
    }

  }


  // loadDataAfterDelete(id) {
  //   for (let i = 0; i < this.customers.length; i++) {
  //     if (this.customers[i].id == id) {
  //       this.customers.splice(i, 1);
  //       break;
  //     }
  //   }
  // }

}

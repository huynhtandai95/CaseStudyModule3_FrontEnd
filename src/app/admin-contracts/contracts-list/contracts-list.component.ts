import { Component, OnInit } from '@angular/core';
import { ContractsService } from "../../service/contracts.service";
@Component({
  selector: 'app-contracts-list',
  templateUrl: './contracts-list.component.html',
  styleUrls: ['./contracts-list.component.css']
})
export class ContractsListComponent implements OnInit {
  contracts;
  constructor(
    private contractsService: ContractsService,

  ) { }

  ngOnInit() {
    this.getAllContracts()
   
  }

  getAllContracts() {
    this.contractsService.getAllContracts().subscribe(data => {
      this.contracts = data
  
    })

  }

  onDeleteContract(id){
    if(confirm('Bạn có chắn chắn muốn xóa Hợp Đồng này ? '))
    this.contractsService.deleteContract(id).subscribe(data=>{
      this.getAllContracts()
    })
  }
}

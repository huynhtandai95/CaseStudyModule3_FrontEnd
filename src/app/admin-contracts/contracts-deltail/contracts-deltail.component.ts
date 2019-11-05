import { Component, OnInit } from '@angular/core';
import { ContractsDeltailsService } from "../../service/contracts-deltails.service";
import { ContractsDeltails } from 'src/app/models/contracts-deltails.model';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-contracts-deltail',
  templateUrl: './contracts-deltail.component.html',
  styleUrls: ['./contracts-deltail.component.css']
})
export class ContractsDeltailComponent implements OnInit {

  contractsDeltails : ContractsDeltails;
  constructor(
    private contractsDeltailsService : ContractsDeltailsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    
  }

  ngOnInit() {
    this.contractsDeltails = new ContractsDeltails;
    this.loadContractsById()

  }
  getAllContractsDeltails() {
    this.contractsDeltailsService.getAllContractsDeltails().subscribe(data=>{
      this.contractsDeltails = data
    })
  }
  loadContractsById() {
    this.activatedRoute.params.subscribe(data => {                  // Get ID params URL
      let id = data['id'];     
      this.contractsDeltailsService.getContractsDeltailsById(id).subscribe(result => {   // Get Customer Data By ID
        this.contractsDeltails = result    
        
      })
    })
  }
  
}

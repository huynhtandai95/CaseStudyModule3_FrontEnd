import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Services } from 'src/app/models/services';
import { ServicesByService } from "../../service/services.service";

@Component({
  selector: 'app-services-add',
  templateUrl: './services-add.component.html',
  styleUrls: ['./services-add.component.css']
})
export class ServicesAddComponent implements OnInit {
  formServices : FormGroup
  services: Services
  constructor(
    private formBuilder : FormBuilder,
    private servicesByService : ServicesByService,
    private router : Router,
    
  ) { }

  ngOnInit() {
    this.services = new Services()
    this.createForm()
  }
  createForm(){
    this.formServices = this.formBuilder.group({
      id: [''],
      NameService:[''],
      code: ['',[
        Validators.required,
        Validators.pattern('[D][V]\-[0-9]{4}')
      ]],
      Description: [''],
      AreaUsed: ['',[
        Validators.required,
        Validators.pattern('[0-9]+')
      ]],
      MaxPeople: ['',[
        Validators.pattern('[0-9]+')
      ]],
      Standard: [''],
      NumberFloors: ['',[
        Validators.pattern('[0-9]+')
      ]],
      AreaPool: ['',[
        Validators.pattern('[0-9]+')
      ]],
      Price: ['',[
        Validators.pattern('[0-9]+')
      ]],
      TypeService: ['']
    })
    this.formServices.valueChanges.subscribe(data=>{
      this.services =data;
      
    })
}
clickAddService(){
  this.servicesByService.addService(this.services).subscribe(data=>{
    if (data && data.id) {
      this.router.navigate(['admin/manager/services'])
    }
  })
}
  

}

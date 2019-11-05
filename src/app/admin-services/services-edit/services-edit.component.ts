import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Services } from 'src/app/models/services';
import { ServicesByService } from "../../service/services.service";
@Component({
  selector: 'app-services-edit',
  templateUrl: './services-edit.component.html',
  styleUrls: ['./services-edit.component.css']
})
export class ServicesEditComponent implements OnInit {
  formServices : FormGroup
  services = new Services()
  constructor(
    private formBuilder : FormBuilder,
    private servicesByService : ServicesByService,
    private router : Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getServicesById()
    this.createForm()
  }
  getServicesById(){
    this.activatedRoute.params.subscribe(data=>{
      let id = data['id'];
      this.servicesByService.getServiceById(id).subscribe(result=>{
       this.formServices.patchValue(result)      
      })
    }) 
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
      // this.formServices.valueChanges.subscribe(data=>{    // If use this.services in function onclickUpdate()
      //   this.services =data;
        
      // })
  }
  onClickUpdate(){
    this.servicesByService.updateEmployee(this.formServices.value).subscribe(data=>{
      this.router.navigateByUrl('/admin/manager/services')
    })
    
  }
}

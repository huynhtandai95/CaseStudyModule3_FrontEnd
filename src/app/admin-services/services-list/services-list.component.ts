import { Component, OnInit } from '@angular/core';
import { ServicesByService } from "../../service/services.service";
@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {
 services ;
  constructor(
    private servicesByService : ServicesByService
  
  ) { }

  ngOnInit() {
    this.getAllServices()
  }

  // Get All Services
  getAllServices(){
    this.servicesByService.getAllServices().subscribe(data=>{
      this.services = data
      
    })
  }

// Delete Service by ID
  onDeleteService(id){
    if(confirm("Bạn có chắc chắn xóa ?")){
      this.servicesByService.DeleteService(id).subscribe(data =>{
        this.getAllServices()
      });
    }  
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule , ReactiveFormsModule} from "@angular/forms";
import { MaterialModule } from './material/material.module';
import { NgxPaginationModule } from "ngx-pagination";
import { Ng2SearchPipeModule } from "ng2-search-filter";




import { ServicesListComponent } from './admin-services/services-list/services-list.component';
import { ServicesAddComponent } from './admin-services/services-add/services-add.component';
import { ServicesEditComponent } from './admin-services/services-edit/services-edit.component';

import { EmployeesAddComponent } from './admin-employees/employees-add/employees-add.component';
import { EmployeesListComponent } from './admin-employees/employees-list/employees-list.component';
import { EmployeesEditComponent } from './admin-employees/employees-edit/employees-edit.component';
import { CustomersListComponent } from './admin-customer/customers-list/customers-list.component';
import { CustomersAddComponent } from './admin-customer/customers-add/customers-add.component';
import { CustomersEditComponent } from './admin-customer/customers-edit/customers-edit.component';
import { ContractsAddComponent } from './admin-contracts/contracts-add/contracts-add.component';
import { ContractsListComponent } from './admin-contracts/contracts-list/contracts-list.component';
import { ContractsDeltailComponent } from './admin-contracts/contracts-deltail/contracts-deltail.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

 const routes : Routes =[
  { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' },
  { path: 'admin/manager/customers', component: CustomersListComponent},
  { path: 'admin/manager/customers/add', component: CustomersAddComponent},
  { path: 'admin/manager/customers/:id/edit', component: CustomersEditComponent},
  { path: 'admin/manager/employees', component: EmployeesListComponent},
  { path: 'admin/manager/employees/add', component: EmployeesAddComponent},
  { path: 'admin/manager/employees/:id/edit', component: EmployeesEditComponent},
  { path: 'admin/manager/services', component: ServicesListComponent},
  { path: 'admin/manager/services/add', component: ServicesAddComponent},
  { path: 'admin/manager/services/:id/edit', component: ServicesEditComponent},
  { path: 'admin/manager/contracts', component: ContractsListComponent},
  { path: 'admin/manager/contracts/add', component: ContractsAddComponent},
  { path: 'admin/manager/contracts/:id/deltail', component: ContractsDeltailComponent},
  { path: 'admin/dashboard', component: DashboardComponent},
  { path: '**', component: PageNotFoundComponent}

]
@NgModule({
  declarations: [
      PageNotFoundComponent,  
      ServicesListComponent,  ServicesAddComponent, 
      EmployeesAddComponent,  EmployeesListComponent, 
      CustomersListComponent, CustomersAddComponent,
      ContractsAddComponent,  ContractsListComponent, DashboardComponent, CustomersEditComponent, EmployeesEditComponent, ServicesEditComponent, ContractsDeltailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

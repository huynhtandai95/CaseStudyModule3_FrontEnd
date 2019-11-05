import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDatepickerModule, 
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  DateAdapter, 
  MAT_DATE_FORMATS
  
} from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS} from './date.adapter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
        provide: DateAdapter, useClass: AppDateAdapter
    },
    {
        provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
    ]
  
})
export class MaterialModule { }


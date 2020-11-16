import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout/typings/module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AgGridModule } from 'ag-grid-angular/lib/ag-grid-angular.module';
import { MaterialModules } from '../material/material.module';


const SHARED_MODULES = [
  CommonModule,
  FlexLayoutModule,
  HttpClientModule,
  AgGridModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  MaterialModules
];


@NgModule({
  imports: [SHARED_MODULES],
  exports: [SHARED_MODULES]
})
export class SharedModule { }

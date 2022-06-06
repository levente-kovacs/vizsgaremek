import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericDataTableComponent } from './generic-data-table/generic-data-table.component';



@NgModule({
  declarations: [
    GenericDataTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GenericDataTableComponent,
  ]
})
export class GenericTableModule { }

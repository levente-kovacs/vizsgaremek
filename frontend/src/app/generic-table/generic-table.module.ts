import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericDataTableComponent } from './generic-data-table/generic-data-table.component';
import { RouterModule, Routes } from '@angular/router';


const yourRoutes: Routes = [
  { path: '',  component: GenericDataTableComponent }
];

export const yourRouting = RouterModule.forChild(yourRoutes);


@NgModule({
  declarations: [
    GenericDataTableComponent
  ],
  imports: [
    CommonModule,
    yourRouting
  ],
  exports: [
    GenericDataTableComponent,
  ]
})
export class GenericTableModule { }

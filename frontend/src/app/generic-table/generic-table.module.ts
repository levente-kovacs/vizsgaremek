import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericDataTableComponent } from './generic-data-table/generic-data-table.component';
import { RouterModule, Routes } from '@angular/router';
import { SorterPipe } from './pipe/sorter.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { XPipePipe } from './pipe/x-pipe.pipe';


const yourRoutes: Routes = [
  // { path: '',  component: GenericDataTableComponent }
];

export const yourRouting = RouterModule.forChild(yourRoutes);


@NgModule({
  declarations: [
    GenericDataTableComponent,
    SorterPipe,
    FilterPipe,
    XPipePipe
  ],
  imports: [
    CommonModule,
    yourRouting,
    FormsModule
  ],
  exports: [
    GenericDataTableComponent,
  ]
})
export class GenericTableModule { }

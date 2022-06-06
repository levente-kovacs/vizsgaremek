import { Injectable } from '@angular/core';
import { ITableColumn } from '../generic-table/generic-data-table/generic-data-table.component';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  calorieChartTableColumns: ITableColumn[] = [
    {key: '_id', title: '#'},
    {key: 'name', title: 'Name'},
    {key: 'description', title: 'Desc.'},
    {key: 'price', title: 'Price'},
    {key: 'active', title: 'Active'},
  ];

  constructor() { }
}

// id: number = 0;
// name: string = '';
// foodGroup: string = '';
// energy: number = 0;
// kcal: number = 0;
// protein: number = 0;
// fat: number = 0;
// carbohydrate: number = 0;
// fiber: number = 0;
// cholesterol: number = 0;

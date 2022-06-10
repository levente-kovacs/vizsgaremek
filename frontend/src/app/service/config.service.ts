import { Injectable } from '@angular/core';
import { ITableColumn } from '../generic-table/generic-data-table/generic-data-table.component';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public readonly apiUrl: string = 'http://localhost:3000/';

  calorieChartTableColumns: ITableColumn[] = [
    {key: '_id', title: '#'},
    {key: 'name', title: 'Megnevezés'},
    {key: 'foodGroup', title: 'Ételfajta'},
    {key: 'energy', title: 'Energia'},
    {key: 'kcal', title: 'kcal'},
    {key: 'protein', title: 'Fehérje'},
    {key: 'fat', title: 'Zsír'},
    {key: 'carbohydrate', title: 'Szénhidrát'},
    {key: 'fiber', title: 'Rost'},
    {key: 'cholesterol', title: 'Koleszterin'},
  ];

  constructor() { }
}

import { Injectable } from '@angular/core';

export interface ITableColumn {
  title: string;
  key: string;
  hidden?: boolean;
  outputTransform?: any;
  htmlOutput?: any;
  pipes?: any[];
  pipeArgs?: [any[]];
}

@Injectable({
  providedIn: 'root'
})


export class ConfigService {

  calorieChartTableColumns: ITableColumn[] = [
    {
      key: "_id", title: "#",
      pipes: [ConfigService.curveLongString],
      pipeArgs: [[0, 6]]
    },
    {
      key: 'name', title: 'Megnevezés',
      pipes: [ConfigService.curveLongString],
      pipeArgs: [[0, 6]]
    },
    {key: 'foodGroup', title: 'Ételfajta'},
    {key: 'energy', title: 'Energia'},
    {key: 'kcal', title: 'kcal'},
    {key: 'protein', title: 'Fehérje'},
    {key: 'fat', title: 'Zsír'},
    {key: 'carbohydrate', title: 'Szénhidrát'},
    {key: 'fiber', title: 'Rost'},
    {key: 'cholesterol', title: 'Koleszterin'},
  ];

  sportSupplementTableColumns: ITableColumn[] = [
    {key: '_id', title: '#'},
    {key: 'manufacturer', title: 'Gyártó'},
    {key: 'name', title: 'Megnevezés'},
    {key: 'image', title: 'Kép'},
    {key: 'description', title: 'Leírás'},
    {key: 'price', title: 'Ár'},
    {key: 'dosing', title: 'Adagolás'},
    {key: 'allergen', title: 'Allergia'},
    {key: 'ingredients', title: 'Összetevők'},
  ];

  workoutTypeTableColumns: ITableColumn[] = [
    {key: '_id', title: '#'},
    {key: 'type', title: 'Típus'},
    {key: 'description', title: 'Leírás'},
    {key: 'image', title: 'Kép'},
  ];

  workoutExerciseTableColumns: ITableColumn[] = [
    {key: '_id', title: '#'},
    {key: 'workoutType', title: 'Edzéstípus'},
    {key: 'workingMuscles', title: 'Megdolgozott izmok'},
    {key: 'sets', title: 'Sorozat'},
    {key: 'reps', title: 'Ismétlés'},
    {key: 'time', title: 'Idő'},
    {key: 'weight', title: 'Súly'},
  ];

  constructor() { }

  static curveLongString(
    data: string,
    start: number,
    end: number,
    curve: string = '...'
  ): string {
    return data ? data.slice(start, end) + curve : data;
  }

}

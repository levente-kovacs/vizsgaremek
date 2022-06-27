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
  providedIn: 'root',
})
export class ConfigService {
  calorieChartTableColumns: ITableColumn[] = [
    {
      key: '_id',
      title: '#',
      pipes: [ConfigService.curveLongString],
      pipeArgs: [[0, 3]],
    },
    {
      key: 'name',
      title: 'Megnevezés',
    },
    { key: 'foodGroup', title: 'Ételfajta' },
    { key: 'energy', title: 'Energia' },
    { key: 'kcal', title: 'kcal' },
    { key: 'protein', title: 'Fehérje' },
    { key: 'fat', title: 'Zsír' },
    { key: 'carbohydrate', title: 'Szénhidrát' },
    { key: 'fiber', title: 'Rost' },
    { key: 'cholesterol', title: 'Koleszterin' },
  ];

  sportSupplementTableColumns: ITableColumn[] = [
    {
      key: '_id',
      title: '#',
      pipes: [ConfigService.curveLongString],
      pipeArgs: [[0, 3]],
    },
    { key: 'manufacturer', title: 'Gyártó' },
    { key: 'name', title: 'Megnevezés' },
    { key: 'image', title: 'Kép' },
    {
      key: 'description',
      title: 'Leírás',
      pipes: [ConfigService.curveLongString],
      pipeArgs: [[0, 15]],
    },
    { key: 'price', title: 'Ár' },
    {
      key: 'dosing',
      title: 'Adagolás',
      pipes: [ConfigService.curveLongString],
      pipeArgs: [[0, 20]],
    },
    {
      key: 'allergen',
      title: 'Allergia',
      pipes: [ConfigService.curveLongString],
      pipeArgs: [[0, 15]],
    },
    {
      key: 'ingredients',
      title: 'Összetevők',
      pipes: [ConfigService.insertSpace, ConfigService.curveLongString],
      pipeArgs: [[0, 2]],
    },
  ];

  workoutTypeTableColumns: ITableColumn[] = [
    {
      key: '_id',
      title: '#',
      pipes: [ConfigService.curveLongString],
      pipeArgs: [[0, 3]],
    },
    { key: 'type', title: 'Típus' },
    { key: 'description', title: 'Leírás' },
    { key: 'image', title: 'Kép' },
  ];

  workoutExerciseTableColumns: ITableColumn[] = [
    {
      key: '_id',
      title: '#',
      pipes: [ConfigService.curveLongString],
      pipeArgs: [[0, 3]],
    },
    { key: 'name', title: 'Megnevezés' },
    {
      key: 'workingMuscles',
      title: 'Megdolgozott izmok',
      pipes: [ConfigService.insertSpace, ConfigService.curveLongString],
      pipeArgs: [[0, 3]],
    },
    { key: 'sets', title: 'Sorozat' },
    { key: 'reps', title: 'Ismétlés' },
    { key: 'time', title: 'Idő(s)' },
    { key: 'weight', title: 'Súly(kg)' },
  ];

  userTableColumns: ITableColumn[] = [
    { key: '_id', title: '#' },
    { key: 'firstName', title: 'Keresztnév' },
    { key: 'lastName', title: 'Vezetéknév' },
    { key: 'email', title: 'E-mail' },
    { key: 'active', title: 'Aktív' },
  ];

  constructor() {}

  static curveLongString(
    data: string,
    start: number,
    end: number,
    curve: string = '...'
  ): string {
    if (data.length > end) {

      return data ? data.slice(start, end) + curve : data;
    }
    return data;
  }

  static insertSpace(data: any[]) {
    if (Array.isArray(data) && data.length > 1) {
      return data.reduce((acc, curr) => acc + ', ' + curr)

    }
    return data;
  }
}

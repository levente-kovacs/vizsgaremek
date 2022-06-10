import { Component, Input, OnInit } from '@angular/core';

export interface ITableColumn {
  title: string;
  key: string;
}

@Component({
  selector: 'generic-data-table',
  templateUrl: './generic-data-table.component.html',
  styleUrls: ['./generic-data-table.component.scss']
})
export class GenericDataTableComponent<T extends {[x: string]: any}> implements OnInit {

  @Input() list: T[] = [];

  @Input() columns: ITableColumn[] = [];

  pageSize: number = 20;

  startSlice: number = 0;

  endSlice: number = 20;

  page: number = 1;

  get pageList(): number[] {
    const pageSize = Math.ceil( this.list.length / this.pageSize );
    return new Array(pageSize).fill(1).map( (item, index) => index + 1 );
  }

  constructor() { }

  ngOnInit(): void {
  }

  jumpToPage(pageNum: number): void {
    this.page = pageNum;
    this.startSlice = this.pageSize * (pageNum - 1);
    this.endSlice = this.startSlice + this.pageSize;
  }
}

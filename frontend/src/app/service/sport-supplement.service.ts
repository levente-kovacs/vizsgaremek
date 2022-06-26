import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SportSupplement } from '../model/sport-supplement';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class SportSupplementService extends BaseService<SportSupplement> {

  constructor(
    public override config: ConfigService,
    public override http: HttpClient,
  ) {
    super(config, http);
    this.entity = 'sport-supplement';
  }
}

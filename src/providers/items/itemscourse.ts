import { Injectable } from '@angular/core';

import { Api } from '../api/api';

import { ItemCouse } from '../../models/itemCouse';

@Injectable()
export class Itemscourse {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/itemscourse', params);
  }

  add(item: ItemCouse) {
  }

  delete(item: ItemCouse) {
  }

}

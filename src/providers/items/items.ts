import { Injectable } from '@angular/core';

import { ItemNews } from '../../models/itemnews';
import { Api } from '../api/api';

@Injectable()
export class Items {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/items', params);
  }

  add(item: ItemNews) {
  }

  delete(item: ItemNews) {
  }

}

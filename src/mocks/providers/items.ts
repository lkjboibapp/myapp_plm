import { Injectable } from '@angular/core';

import { ItemNews } from '../../models/itemnews';

@Injectable()
export class Items {
  items: ItemNews[] = [];



  add(item: ItemNews) {
    this.items.push(item);
  }

  delete(item: ItemNews) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}

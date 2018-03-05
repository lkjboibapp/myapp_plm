import { Injectable } from '@angular/core';

import { ItemCouse } from '../../models/itemCouse';

@Injectable()
export class ItemsCouse {
  items: ItemCouse[] = [];



  add(item: ItemCouse) {
    this.items.push(item);
  }

  delete(item: ItemCouse) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}

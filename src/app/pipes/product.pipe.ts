import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductMatchesFilter implements PipeTransform {
  transform(items: any[], filter: string): any {
    if(typeof items == 'undefined' || typeof filter == 'undefined' || filter === "" || filter.replace(/^\s+|\s+$/g, '').length == 0){
      return items;
    }
    filter = filter.replace(/^\s+|\s+$/g, '');

    return items.filter(item => (item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1) || (item.description.toLowerCase().indexOf(filter.toLowerCase()) !== -1));
  }
}

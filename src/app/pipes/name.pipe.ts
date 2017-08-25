import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NameFilter implements PipeTransform {
  transform(items: any[], filter: string): any {
    if(typeof items == 'undefined' || typeof filter == 'undefined' || filter === "" || filter.replace(/^\s+|\s+$/g, '').length == 0){
      return items;
    }
    filter = filter.replace(/^\s+|\s+$/g, '');

    var matches = items.filter(item => (item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1));
    if(matches.length == 0){
      return [-1];
    }
    return matches;
  }
}

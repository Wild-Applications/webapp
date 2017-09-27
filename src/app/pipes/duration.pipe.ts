import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'duration'})
export class DurationPipe implements PipeTransform{
  transform(value: any, test: any){
    var now = moment(new Date());
    var end = moment(value);
    var dif = moment.duration(now.diff(end));
    var toReturn = [];
    if(("00" + dif.hours()).slice(-2) != "00"){
      toReturn[toReturn.length] = ("00" + dif.hours()).slice(-2);
    }
    toReturn[toReturn.length] = ("00" + dif.minutes()).slice(-2);
    toReturn[toReturn.length] = ("00" + dif.seconds()).slice(-2);
    return toReturn.join(':');
  }
}

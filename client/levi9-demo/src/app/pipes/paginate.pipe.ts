import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.model';

@Pipe({
  name: 'paginate',
  pure: false
})
export class PaginatePipe implements PipeTransform {

  transform(users: User[], crit: any): User[] {
    let ret: User[] = [];
    let max: number;
    if(users.length>(crit.page+1)*crit.pageSize)
      max = (crit.page+1)*crit.pageSize;
    else
      max = users.length;
    for(let i= crit.page*crit.pageSize; i<max;i++)
      ret.push(users[i]);
    return ret;
  }

}

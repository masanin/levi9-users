import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.model';

@Pipe({
  name: 'filterUsers',
  pure: false
})
export class FilterUsersPipe implements PipeTransform {

  transform(users: User[], input: string): User[] {
    let ret: User[] = [];
    if(users == undefined)
      return ret;
    let f:string = input.toLowerCase();
    users.forEach(usr =>{
      let fn: string = usr.first_name.toLowerCase();
      let ln: string = usr.last_name.toLowerCase();
      let by: string = String(usr.birth_year);
      if(fn.indexOf(f)>=0 || ln.indexOf(f)>=0 || by.indexOf(f)>=0)
        ret.push(usr);
    });
    return ret;
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  }    from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { serverAdress } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) { }
  private getAllUrl: string = "/api/users";
  private insertUrl: string = "/api/users";
  private updatetUrl: string = "/api/users";
  private deleteUrl: string = "/api/users/";
  

  public getAll() : Observable<User[]> {
    return this.http.get<User[]>(serverAdress+this.getAllUrl);
  }

  public insert(user: User): Observable<User> {
    return this.http.post<User>(serverAdress+this.insertUrl,user);
  }

  public update(user: User): Observable<User> {
    return this.http.put<User>(serverAdress+this.updatetUrl,user);
  }

  public delete(id): Observable<boolean> {
    return this.http.delete<boolean>(serverAdress+this.deleteUrl+id.toString());
  }
}

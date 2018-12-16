import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SaveuserComponent } from './saveuser/saveuser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  filterText: string;
  page: number = 1;
  pageSize: number = 5;
  snackbarMessage: string = "";

  constructor(
    private userService:UserService,
    private modalService: NgbModal,
    public snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.filterText = "";
    this.getUsers();
  }

  getUsers(){
    this.page = 1;
    this.userService.getAll().subscribe((data: User[])=> this.users = data);
  }

  addUser(){
    const modalRef = this.modalService.open(SaveuserComponent);
    modalRef.componentInstance.user = new User(null);
    modalRef.componentInstance.changes.subscribe((u: User) => this.onSave(u));
  }

  updateUser(user){
    const modalRef = this.modalService.open(SaveuserComponent);
    let usr: User  = new User(user);
    modalRef.componentInstance.user = usr;
    modalRef.componentInstance.changes.subscribe((u: User) => this.onSave(u));
  }

  deleteUser(user){
    const modalRef = this.modalService.open(DeleteuserComponent);
    modalRef.componentInstance.user = user;
    modalRef.componentInstance.changes.subscribe((u: User) => this.onDelete(u));
  }

  onDelete(user){
    if(user == null) return;
    this.userService.delete(user.id).subscribe((res:boolean) => {
      if(res){
        let ind = this.users.indexOf(user);
        if(ind >=0)
          this.users.splice(ind,1);
          this.snackBar.open("User deleted", "Close", {
            duration: 2000,
          });  
      }   
    });
  }

  onSave(usr:User){
    if(usr == null)
      return;
    if(usr.id!=undefined)
      this.userService.update(usr).subscribe((u:User) => {
        let changed:User = this.users.filter(o => o.id == u.id)[0];
        changed.first_name = u.first_name;
        changed.last_name = u.last_name;
        changed.birth_year = u.birth_year;
        this.snackBar.open("User updated", "Close", {
          duration: 2000,
        });
      });
    else
      this.userService.insert(usr).subscribe((u:User) => {
        this.users.push(u);
        this.snackBar.open("User added", "Close", {
          duration: 2000,
        });
      });
  }
}

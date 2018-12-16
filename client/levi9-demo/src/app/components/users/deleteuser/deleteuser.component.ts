import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent {

  @Input() user:User;
  @Output() changes = new EventEmitter<User>();

  constructor(public activeModal: NgbActiveModal) {}

  save(flag: boolean){
    if(flag)
      this.changes.emit(this.user);
    else
      this.changes.emit(null);
    this.activeModal.close('Save');
  }

}

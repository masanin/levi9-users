import { Component, Input, Output, EventEmitter,} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-saveuser-modal',
  templateUrl: './saveuser.component.html',
  styleUrls: ['./saveuser.component.css']
})
export class SaveuserComponent {

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
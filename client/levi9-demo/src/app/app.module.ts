import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FilterUsersPipe } from './pipes/filterusers.pipe';
import { FormsModule } from '@angular/forms';
import { SaveuserComponent } from './components/users/saveuser/saveuser.component';
import { DeleteuserComponent } from './components/users/deleteuser/deleteuser.component';
import { PaginatePipe } from './pipes/paginate.pipe';
import {MatSnackBarModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FilterUsersPipe,
    SaveuserComponent,
    DeleteuserComponent,
    PaginatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [
    NgbActiveModal
  ],
  entryComponents: [SaveuserComponent, DeleteuserComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

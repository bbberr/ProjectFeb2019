import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  closeForgetpasswordDialog() {
    this.dialog.closeAll();
  }
  backToLoginDialog() {
    this.dialog.closeAll();
    this.dialog.open(LoginDialogComponent, {
      width: '500px',
      height: '500px',
      disableClose: true,
    }
    );
  }
}

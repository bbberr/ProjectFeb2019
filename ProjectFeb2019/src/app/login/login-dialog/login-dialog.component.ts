import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ForgetpasswordComponent } from '../forgetpassword/forgetpassword.component';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openForgetpassword() {
    // this.dialog.closeAll();
    this.dialog.open(ForgetpasswordComponent, {
      width: '500px',
      height: '500px',
      disableClose: true,
    }
    );
  }

  closeLoginDialog() {
    this.dialog.closeAll();
  }
}

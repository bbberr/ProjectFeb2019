import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareMaterialModule } from 'src/app/share-material/share-material.module';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ShareMaterialModule
  ],
  exports: [
    LoginDialogComponent,
  ],
  declarations: [
    LoginDialogComponent
  ],
  entryComponents: [
    LoginDialogComponent
  ]
})
export class LoginModule { }

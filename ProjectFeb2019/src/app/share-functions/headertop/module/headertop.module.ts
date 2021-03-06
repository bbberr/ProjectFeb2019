import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadertopComponent } from '../headertop.component';
import { ShareMaterialModule } from 'src/app/share-material/share-material.module';
import { LoginModule } from 'src/app/login/module/login.module';

@NgModule({
  imports: [
    CommonModule,
    ShareMaterialModule,
    LoginModule,
  ],
  exports: [
    HeadertopComponent
  ],
  declarations: [
    HeadertopComponent
  ],

})
export class HeadertopModule { }

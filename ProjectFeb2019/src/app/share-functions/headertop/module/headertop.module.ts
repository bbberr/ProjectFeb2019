import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadertopComponent } from '../headertop.component';
import { ShareMaterialModule } from 'src/app/share-material/share-material.module';

@NgModule({
  imports: [
    CommonModule,
    ShareMaterialModule
  ],
  exports: [
    HeadertopComponent
  ],
  declarations: [
    HeadertopComponent
  ],
})
export class HeadertopModule { }

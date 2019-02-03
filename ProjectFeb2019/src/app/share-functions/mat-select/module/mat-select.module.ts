import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareMaterialModule } from 'src/app/share-material/share-material.module';
import { MatSelectComponent } from '../mat-select.component';

@NgModule({
  imports: [
    CommonModule,
    ShareMaterialModule
  ],
  exports: [
    MatSelectComponent
  ],
  declarations: [
    MatSelectComponent,
  ],
})
export class MatSelectModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from '../side-nav.component';
import { ShareMaterialModule } from 'src/app/share-material/share-material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ShareMaterialModule,
    AppRoutingModule,
  ],
  exports: [
    SideNavComponent
  ],
  declarations: [
    SideNavComponent
  ],
})
export class SideNavModule { }

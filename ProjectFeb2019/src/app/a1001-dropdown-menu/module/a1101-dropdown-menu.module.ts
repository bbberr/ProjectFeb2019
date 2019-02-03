import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareMaterialModule } from 'src/app/share-material/share-material.module';

import { A1001DropdownMenuComponent } from '../a1101/a1001-dropdown-menu.component';
import { MatSelectModule } from 'src/app/share-functions/mat-select/module/mat-select.module';
import { SideNavModule } from 'src/app/share-functions/side-nav/module/side-nav.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { P1001Module } from 'src/app/p1001/module/p1001.module';

@NgModule({
  imports: [
    CommonModule,
    ShareMaterialModule,
    MatSelectModule,
    SideNavModule,
  ],
  declarations: [
    A1001DropdownMenuComponent
  ],
  exports: [
    A1001DropdownMenuComponent
  ]
})
export class A1101DropdownMenuModule { }

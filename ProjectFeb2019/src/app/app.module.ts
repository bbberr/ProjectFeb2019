import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShareMaterialModule } from './share-material/share-material.module';
import { A1101DropdownMenuModule } from './a1001-dropdown-menu/module/a1101-dropdown-menu.module';
import { SideNavModule } from './share-functions/side-nav/module/side-nav.module';
import { P1001Module } from './p1001/module/p1001.module';
import { P1002Module } from './p1002/module/p1002.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareMaterialModule,
    BrowserAnimationsModule,
    A1101DropdownMenuModule,
    SideNavModule,
    P1001Module,
    P1002Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

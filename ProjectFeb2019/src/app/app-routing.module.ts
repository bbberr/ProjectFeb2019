import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A1001DropdownMenuComponent } from './a1001-dropdown-menu/a1101/a1001-dropdown-menu.component';
import { P1001Component } from './p1001/p1001/p1001.component';
import { P1002Component } from './p1002/p1002/p1002.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {
    path: 'admin', component: A1001DropdownMenuComponent,
    children: [
      { path: 'P1001', component: P1001Component },
      { path: 'P1002', component: P1002Component },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

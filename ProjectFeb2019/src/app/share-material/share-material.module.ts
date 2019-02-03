import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatSortModule, MatPaginatorModule, MatSelectModule, MatCheckboxModule, MatDividerModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatRadioModule } from '@angular/material';
import { MatGridListModule, MatExpansionModule, MatCardModule, MatListModule, MatProgressSpinnerModule } from '@angular/material';
import { MatNativeDateModule, MatSnackBarModule, MatDialogModule, MatAutocompleteModule, MatTabsModule } from '@angular/material';
import { MatMenuModule, MatSidenavModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  exports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule,
    MatExpansionModule,
    MatCardModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatRadioModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatSidenavModule,
  ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ShareMaterialModule { }

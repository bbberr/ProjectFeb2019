import { Component, OnInit } from '@angular/core';

export interface Titles {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-mat-select',
  templateUrl: './mat-select.component.html',
  styleUrls: ['./mat-select.component.scss']
})
export class MatSelectComponent implements OnInit {

  titles: Titles[] = [
    { value: '1', viewValue: 'Title1' },
    { value: '2', viewValue: 'Title2' },
    { value: '3', viewValue: 'Title3' }
  ];

  constructor() { }

  ngOnInit() {
  }

}

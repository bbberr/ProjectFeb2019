import { Component, OnInit } from '@angular/core';
import { template } from '@angular/core/src/render3';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from 'src/app/login/login-dialog/login-dialog.component';

@Component({
  selector: 'app-headertop',
  templateUrl: './headertop.component.html',
  styleUrls: ['./headertop.component.scss']
})
export class HeadertopComponent implements OnInit {
  iconsImage: any[] = [];
  positionValue: number;
  navLinks: any[] = [];

  constructor(
    private router: Router,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    // this.getPosition();
    this.putIcons();
    this.putLinks();
    // console.log(this.iconsImage);
  }

  putIcons() {
    this.iconsImage.push(
      { 'imagesrc': '.\\assets\\images\\navIcon-Home.png', 'imageTitle': '首頁', 'value': 'home' },
      { 'imagesrc': '.\\assets\\images\\navIcon-Dict.png', 'imageTitle': '資料字典維護', 'value': 'dict' },
      { 'imagesrc': '.\\assets\\images\\navIcon-DataList.png', 'imageTitle': '血緣衝擊分析', 'value': 'dataList' },
      { 'imagesrc': '.\\assets\\images\\navIcon-DataSearch.png', 'imageTitle': '差異比對', 'value': 'dataSearch' },
      { 'imagesrc': '.\\assets\\images\\navIcon-Setting.png', 'imageTitle': '系統管理', 'value': 'Setting' },
    );
  }
  putLinks() {
    this.navLinks.push(
      { 'path': '/P1001', 'title': 'P1001Title' },
      { 'path': '/P1002', 'title': 'P1002Title' }
    );
  }

  getPosition(idx: number) {
    const finalIdx = idx;
    const tempLenght = this.iconsImage.length;
    const tempValue = (tempLenght - finalIdx) * 4;
    // console.log(tempValue);
    return tempValue;
  }

  levelOneClick(value: string) {
    // console.log(value);
    if (value === 'home') {
      this.router.navigate(['/admin']);
    }
    alert(value);
  }

  loginDialog() {
    this.dialog.open(LoginDialogComponent, {
      width: '500px',
      height: '500px',
      disableClose: true
    }
    );
  }

  changeColor(click: any) {
    // console.log(click);
    if (click) {
      return '#0c7a96';
    } else {
      return '#808080';
    }
  }

  underlineShow(click: any) {
    // if (click) {
    //   return 'window.dispatchEvent(new Event(\'resize\'))';
    // }
    alert(click);
  }

}

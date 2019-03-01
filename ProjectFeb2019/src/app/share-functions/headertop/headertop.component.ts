import { Component, OnInit } from '@angular/core';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-headertop',
  templateUrl: './headertop.component.html',
  styleUrls: ['./headertop.component.scss']
})
export class HeadertopComponent implements OnInit {
  iconsImage: any[] = [];
  positionValue: number;
  // match = {};
  navLinks: any[] = [];

  constructor() {
    // this.match['img'] = this.positionValue;
    // this.match['img2'] = this.positionValue;
    // this.match['matchWrapperWidth'] = 100;
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
      {
        'path': '#', 'title': '郵件',
        'menu': [
          { 'path': '/P1001', 'title': 'Apples' },
          { 'path': '/P1001', 'title': 'Bananas' },
          { 'path': '/P1001', 'title': 'Kiwi' },
          { 'path': '/P1001', 'title': 'Pears' }
        ]
      },
      { 'path': '/P1002', 'title': '設定' }
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
    console.log(value);
    alert(value);
  }

  changeColor(click: any) {
    // console.log(click);
    if (click) {
      return '#16BA99';
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

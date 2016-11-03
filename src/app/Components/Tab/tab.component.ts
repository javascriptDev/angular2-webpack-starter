import { Component ,Input,Output,EventEmitter,OnInit,SimpleChange } from '@angular/core';

import { AppState } from '../../app.service';

//tab 数据源 数据格式约定
import { TABITEM } from './tab.interface';

@Component({
  selector: 'tab',  
  styles:[`.page{   
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;}`],
  templateUrl: './tab.component.html'
})
export class TabComponent implements OnInit {
  @Input() items    : TABITEM[];
  @Input() content  : String;
  @Output() tabTap  : EventEmitter<any> = new EventEmitter();

  selectedItem      : TABITEM;

  constructor(public appState: AppState) {

  }

  ngOnInit() {
    this.selectedItem = this.items[0];
    console.log(this.selectedItem);
  }
  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    //设置 tab 颜色 
    let item = changes['items'];
    if(item && item.currentValue.length!=0){
      this.selectedItem = this.items[0];
    }
  }
  tabChange(item:TABITEM,event:Object){
    this.selectedItem = item;

    this.tabTap.emit(item.text);
  }
  setClass(item){
    return {
      'weui-tabbar__item':true,
      'weui-bar__item_on': item === this.selectedItem
    }
  }
}

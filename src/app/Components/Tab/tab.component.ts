import { Component ,Input,Output,EventEmitter } from '@angular/core';

import { AppState } from '../../app.service';


@Component({
  selector: 'tab',  
  
  templateUrl: './tab.component.html'
})
export class TabComponent {
  @Input() items:String[];
  @Output() tabTap:EventEmitter<any> = new EventEmitter();

  selectedItem : Object;

  constructor(public appState: AppState) {

  }

  ngOnInit() {
    this.selectedItem = this.items[0];
  }
  tabChange(item:Object,event:Object){
    this.selectedItem = item;

    console.log(this.tabTap);
    this.tabTap.emit(null);
  }
  setClass(item){
    return {
      'weui-tabbar__item':true,
      'weui-bar__item_on': item === this.selectedItem
    }
  }
}

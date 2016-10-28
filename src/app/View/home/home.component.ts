import { Component,ElementRef } from '@angular/core';

import { AppState } from '../../app.service';
import { Title } from './title';
import { XLarge } from './x-large';
import { TabComponent } from '../../Components/Tab';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: `<tab [items]="items" (tabTap)="tap($event)"></tab>`
})



export class HomeComponent {
  // TypeScript public modifiers
  constructor(private _element: ElementRef) {

  }
  items : Object[];

  tap(e:Object){
     this.fill('啊') ;
  }
  initPage = ()=>{this.fill(`<div>asdasd</div>`)};
  fill = (html:String)=>{this._element.nativeElement.querySelector('.weui-tab__panel').innerHTML = html};
  ngOnInit() {
    this.items = [{
      src:'./assets/img/sc.png',
      activeSrc:'./assets/img/sca.png',
      text:'行程'
    },{
      src:'./assets/img/my.png',
      activeSrc:'./assets/img/mya.png',
      text:'我的'
    }]
    this.initPage();
  }
}

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './View/home';
import { NoContentComponent } from './View/no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  {
    path: 'detail', loadChildren: () => System.import('./View/+detail').then((comp: any) => {
      console.log(comp);
      return comp.default;
    })
    ,
  },
  { path: '**',    component: NoContentComponent },
];

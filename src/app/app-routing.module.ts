import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Tab2Component} from '../app/tab2/tab2.component';
import {Tab1Component} from '../app/tab1/tab1.component';

const routes: Routes = [
  {path:"", component:Tab1Component},
  {path:"booktype", component:Tab2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

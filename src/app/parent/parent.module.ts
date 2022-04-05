import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { DaughterComponent } from './daughter/daughter.component';
import { SonComponent } from './son/son.component';



@NgModule({
  declarations: [
    ParentComponent,
    DaughterComponent,
    SonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ParentComponent,
    DaughterComponent,
    SonComponent
  ]
})
export class ParentModule { }

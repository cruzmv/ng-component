import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackerStatusComponent } from './hacker-status/hacker-status.component';



@NgModule({
  declarations: [HackerStatusComponent],
  imports: [
    CommonModule
  ],
  exports: [HackerStatusComponent]
})
export class NgComponentsCruzModule { }

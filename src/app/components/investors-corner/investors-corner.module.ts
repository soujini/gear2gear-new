import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { InvestorsCornerRoutingModule } from './investors-corner-routing.module';
import { InvestorsCornerComponent } from './investors-corner.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InvestorsCornerRoutingModule
  ],
  declarations: [
     InvestorsCornerComponent
  ],
})
export class InvestorsCornerModule { }

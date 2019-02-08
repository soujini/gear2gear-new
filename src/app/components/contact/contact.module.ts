import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    // BrowserAnimationsModule,
    // MatButtonModule,
    // MatCheckboxModule,
    // MatTabsModule
  ],
  declarations: [
    ContactComponent,
  ],
  // providers: [InsuranceService],
})
export class ContactModule { }

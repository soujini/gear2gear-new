import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { AboutComponent } from './about.component';

import { HistoryComponent } from '../history/history.component';
// import { ChecklistComponent } from '../checklist/checklist.component';

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
    AboutComponent,
    // ChecklistComponent,
    HistoryComponent
  ],
  // providers: [InsuranceService],
})
export class AboutModule { }

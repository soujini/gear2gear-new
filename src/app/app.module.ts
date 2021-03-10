
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ChecklistComponent } from './components/checklist/checklist.component';

import { ROUTES } from './app.routes';
import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { HeaderComponent } from './components/header/header.component';

import { ValidationService } from './services/validation/validation.service';

import { MakeService } from './services/make/make.service';
import { ModelService } from './services/model/model.service';
import { VariantService } from './services/variant/variant.service';
import { VehicleTypeService } from './services/vehicle-type/vehicle-type.service';
import { FuelTypeService } from './services/fuel-type/fuel-type.service';
import { TransmissionTypeService } from './services/transmission-type/transmission-type.service';
import { InsuranceService } from './services/insurance/insurance.service';
import { ColorService } from './services/color/color.service';
import { CarService } from './services/car/car.service';
import { ClientService } from './services/client/client.service';
import { CommonService } from './services/common/common.service';
import { ExpenseService } from './services/expense/expense.service';
import { TransactionTypeService } from './services/transaction-type/transaction-type.service';
import { TransactionDetailsService } from './services/transaction-details/transaction-details.service';
import { LoaderComponent } from './components/loader/loader.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptorService } from './services/loader-interceptor.service';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { LazyLoadDirective } from './lazy-load.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
// import { environment } from '../environments/environment';

// import { UploadFileComponent } from './components/upload-file/upload-file.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    HeaderComponent,
    LoaderComponent,
    ChecklistComponent,
    AdvantagesComponent,
    LazyLoadDirective,
    // UploadFileComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(ROUTES, { enableTracing: false,  scrollPositionRestoration: 'enabled'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports:[
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptorService,
    multi: true
  },
    AuthService,
    ValidationService,
    MakeService,
    ModelService,
    VariantService,
    VehicleTypeService,
    FuelTypeService,
    TransmissionTypeService,
    ColorService,
    CarService,
    InsuranceService,
    ExpenseService,
    ClientService,
    CommonService,
    TransactionTypeService,
    TransactionDetailsService,

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

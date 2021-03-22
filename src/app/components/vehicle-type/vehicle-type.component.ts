import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { VehicleType } from '../../data-model';
import { VehicleTypeService } from '../../services/vehicle-type/vehicle-type.service';

@Component({
  selector: 'app-make',
  templateUrl: './vehicle-type.component.html',
  styleUrls: ['./vehicle-type.component.scss'],
})
export class VehicleTypeComponent implements OnInit {
  title : string = "Vehicle Type";
  selectedVehicleType : VehicleType;

  vehicleTypes$: Observable<VehicleType>;

  constructor(private fb: FormBuilder, private vehicleTypeService:VehicleTypeService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
   
  }

  // getVehicleTypes()  {
  //   this.vehicleTypes$ = this.vehicleTypeService.getVehicleTypes();
  // }

  // searchVehicleTypes(searchTerm){
  //   if(searchTerm){
  //     this.vehicleTypes$ = this.vehicleTypeService.searchVehicleTypes(searchTerm);
  //   }
  //   else{
  //     this.getVehicleTypes();
  //     //this.vehicleTypes$ = new EmptyObservable();
  //   }
  // }

}

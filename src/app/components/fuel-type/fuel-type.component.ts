import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { FuelType } from '../../data-model';
import { FuelTypeService } from '../../services/fuel-type/fuel-type.service';

@Component({
  selector: 'app-make',
  templateUrl: './fuel-type.component.html',
  styleUrls: ['./fuel-type.component.scss'],
})
export class FuelTypeComponent implements OnInit {
  title : string = "Fuel Type";
  selectedFuelType : FuelType;

  fuelTypes$: Observable<FuelType>;

  constructor(private fb: FormBuilder, private fuelTypeService:FuelTypeService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    
  }

  // getFuelTypes()  {
  //   this.fuelTypes$ = this.fuelTypeService.getFuelTypes();
  // }

  // searchFuelTypes(searchTerm){
  //   if(searchTerm){
  //     this.fuelTypes$ = this.fuelTypeService.searchFuelTypes(searchTerm);
  //   }
  //   else{
  //     this.getFuelTypes();
  //     //this.fuelTypes$ = new EmptyObservable();
  //   }
  // }

}

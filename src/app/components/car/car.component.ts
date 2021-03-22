import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { Car } from '../../data-model';
import { CarService } from '../../services/car/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {
  title : string = "Car";
  selectedCar : Car;

  cars$: Observable<Car>;

  constructor(private fb: FormBuilder, private carService:CarService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {

  }

  // getCars()  {
  //   this.cars$ = this.carService.getCars();
  // }
  //
  // searchCars(searchTerm){
  //   if(searchTerm){
  //     this.cars$ = this.carService.searchCars(searchTerm);
  //   }
  //   else{
  //     this.getCars();
  //     //this.cars$ = new EmptyObservable();
  //   }
  // }

}

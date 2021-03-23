import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { Car } from '../../../data-model';
import { CarService } from '../../../services/car/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnInit {
  @Input()
  results$: Observable<Car>;

  @Output()
  searchTerm = new EventEmitter();

  selectedCarId:any="";
  title: string = "Car";
  selectedCar: Car;

  cars$: Observable<Car>;

  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute) {

    this.carService.selectedCarId.subscribe(res => {
      this.selectedCarId = res;
    }, err => {

    });
  }

  ngOnInit() {
    this.getCars();
    this.carService.refreshList.subscribe(
      res => {
        this.getCars();
      },
      err => {
        console.log(err);
      }
    );
    // this.router.navigate(['/car/add']);
  }
  getCars() {
    this.cars$ = this.carService.getCars();
  }

  searchCars(searchTerm) {
    if (searchTerm) {
      this.cars$ = this.carService.searchCars(searchTerm);
    }
    else {
      this.getCars();
      //this.cars$ = new EmptyObservable();
    }
  }

  // searchCars(search: string){
  //   this.searchTerm.emit(search);
  // }

  //On Click of the Add Button
  createCar(mode: any) {
    this.selectedCarId = 0;
    this.carService.selectedMode = mode;
    this.router.navigate(['/car/add']);
  }

  //On Click of the Edit Button
  selectCar(car_id: number, mode: any) {
    this.selectedCarId = car_id;
    this.carService.selectedMode = mode;
    this.router.navigate(['/car/edit/'+ this.selectedCarId]);
    setTimeout(() => {
    this.carService.selectedCarId.next(car_id);
    }, 1000);
  }

}

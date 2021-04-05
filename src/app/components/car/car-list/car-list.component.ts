import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { Car } from '../../../data-model';
import { CarService } from '../../../services/car/car.service';
import { TransactionDetailsService } from '../../../services/transaction-details/transaction-details.service';

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
  message_error:string="";
  message:string="";
  cars$: Observable<Car>;

  constructor(private transactionDetailsService:TransactionDetailsService, private carService: CarService, private router: Router, private route: ActivatedRoute) {

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
  deleteAll(){
    this.carService.deleteAllCars()
    .subscribe(
      res => {
        this.transactionDetailsService.deleteAllTransactionDetails()
        .subscribe(
          res => {
            window.scrollTo(0, 0);
            this.message = "Transaction Details Deleted successfully.";
            setTimeout(() => {
              this.message = "";
            }, 5000);
          },
          err => {
            window.scrollTo(0, 0);
            this.message_error = err;
            setTimeout(() => {
              this.message_error = "";
            }, 5000);
            console.log(err);
          }
        );

        window.scrollTo(0, 0);
        this.message = "Cars Deleted successfully.";
        setTimeout(() => {
          this.message = "";
        }, 5000);
        this.getCars();
      },
      err => {
        window.scrollTo(0, 0);
        this.message_error = err;
        setTimeout(() => {
          this.message_error = "";
        }, 5000);
        console.log(err);
      }
    );
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

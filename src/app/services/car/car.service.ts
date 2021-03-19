import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import {environment} from '../../../environments/environment';
const environment = require('../../../environments/environment');
import { Car,FileUpload } from '../../data-model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
// import 'rxjs/add/operator/catch';
import { map } from 'rxjs/operators';
import { RequestOptions } from '@angular/http';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { UploadFileService } from '../../services/upload-file/upload-file.service';
import 'rxjs/add/observable/from';

const httpOptions = {
  headers: { 'Content-Type': 'application/json' }
};

@Injectable()
export class CarService {
  private apiUrl = environment.API_URL;
  selectedCarId = new BehaviorSubject(0);
  //sold:Subject<any> = new Subject();
  sold=new BehaviorSubject(null);
  selectedMode :string = "Create";
  refreshList:Subject<any> = new Subject();
  refreshCar:Subject<any> = new Subject();
  transactionDetail = new BehaviorSubject("");
  fileUploads: Observable<Array<any>>;

  constructor(private http:HttpClient, public uploadFileService: UploadFileService) {
  }

  public getCars(): Observable<any> {
    alert(this.apiUrl);
    return this.http.get(this.apiUrl+'/api/cars', {headers: {'Content-Type': 'application/json; charset=utf-8','Cache-Control': 'max-age=604800'}})
    .pipe(map(res => res));
  }

  public getAvailableCars(filterCars:Car): Observable<any> {
    var make="0";
    var model="0";
    var variant="0";
    var vehicle_type="0";
    var fuel_type="0";
    var transmission_type="0";
    var is_sold="false";

    if(filterCars.is_sold != null){
      is_sold = filterCars.is_sold.toString();
    }

    if(filterCars.make != null){
      make = filterCars.make.toString();
    }
    if(filterCars.model != null){
      model = filterCars.model.toString();
    }
    if(filterCars.variant != null){
      variant = filterCars.variant.toString();
    }
    if(filterCars.vehicle_type != null){
      vehicle_type = filterCars.vehicle_type.toString();
    }
    if(filterCars.fuel_type != null){
      fuel_type = filterCars.fuel_type.toString();
    }
    if(filterCars.transmission_type != null){
      transmission_type = filterCars.transmission_type.toString();
    }

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      }),
       params: {is_sold: is_sold, make:make, model:model, variant:variant, vehicle_type:vehicle_type, fuel_type:fuel_type, transmission_type:transmission_type},
    };

    return this.http.get<any[]>(this.apiUrl+'/api/available-cars',options)
    .pipe(map(car =>
      {
        car.forEach(c => {
          c.image_urls=[];
          c.selling_price=this.formatCurrency(c.selling_price);
          this.fileUploads = this.uploadFileService.getFiles(c.car_id);
          this.fileUploads.subscribe(res=>{
            c.image_urls=res;
          });
        });
        return car;
      }));
    }

    public getSoldCars(): Observable<any> {
      return this.http.get(this.apiUrl+'/api/sold-cars', {headers: {'Content-Type': 'application/json; charset=utf-8','Cache-Control': 'max-age=604800'}})
      .pipe(map(res => res));
    }

    public getCarById(car_id:number): Observable<any> {
      return this.http.get(this.apiUrl+'/api/cars/'+car_id, {headers: {'Content-Type': 'application/json; charset=utf-8','Cache-Control': 'max-age=604800'}})
      .pipe(map(res => res));
    }

    public searchCars(searchTerm): Observable<any> {
      return this.http.get(this.apiUrl+'/api/cars/search/'+searchTerm, {headers: {'Content-Type': 'application/json; charset=utf-8','Cache-Control': 'max-age=604800'}})
      .pipe(map(res => res));
    }

    public createCar(newCar:Car): Observable<any> {
      const body = JSON.stringify(newCar);

      return this.http.post(this.apiUrl+'/api/cars', body, {headers: {'Content-Type': 'application/json; charset=utf-8','Cache-Control': 'max-age=604800'}})
      .pipe(map(res => res));
    }

    public updateCar(editCar:Car): Observable<any> {
      const body = JSON.stringify(editCar);
      const car_id = editCar.car_id;

      return this.http.put(this.apiUrl+'/api/cars/'+car_id, body, {headers: {'Content-Type': 'application/json; charset=utf-8','Cache-Control': 'max-age=604800'}})
      .pipe(map(res => res));
    }

    public updateTotalCost(car:any) {
      const body = JSON.stringify(car);
      const car_id = car.car_id;
      return this.http.patch(this.apiUrl+'/api/cars/'+car_id, body, {headers: {'Content-Type': 'application/json; charset=utf-8','Cache-Control': 'max-age=604800'}})
      .subscribe(
        res => {
        },
        err => {
          console.log("error here", err);
        },
        () => {
          console.log("Completed");
        }
      );
    }

    public updateTotalIncome(car:any) {
      const body = JSON.stringify(car);
      const car_id = car.car_id;
      return this.http.patch(this.apiUrl+'/api/cars/income/'+car_id, body, {headers: {'Content-Type': 'application/json; charset=utf-8','Cache-Control': 'max-age=604800'}})
      .subscribe(
        res => {
          console.log("Total Income of the car is Updated", res);
        },
        err => {
          console.log("error here", err);
        },
        () => {
          console.log("Completed");
        }
      );
    }

    public deleteCar(car_id:number): Observable<any> {
      return this.http.delete(this.apiUrl+'/api/cars/'+car_id, {headers: {'Content-Type': 'application/json; charset=utf-8','Cache-Control': 'max-age=604800'}})
      .pipe(map(res => res));
    }

    extractData(res: Response) {
      let body = res.json();
      return body || {};
    }

    handleErrorObservable (error: Response | any) {
      console.error(error.message || error);
      return Observable.throw(error.message || error);
    }
    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.log(errMsg); // log to console instead
    }
    formatCurrency(val){
      var isValid = /^[0-9,.]*$/.test(val);
      if(isValid == true)
      {
        let x = val.toString().replace( /,/g, "" );
        var afterPoint = '';
        if(x.indexOf('.') > 0)
        afterPoint = x.substring(x.indexOf('.'),x.length);
        x = Math.floor(x);
        x=x.toString();
        var lastThree = x.substring(x.length-3);
        var otherNumbers = x.substring(0,x.length-3);
        if(otherNumbers != '')
        lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
        return res;
      }
      else{
        return "";
      }
    }
  }

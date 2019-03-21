import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Car, Make, Model, Variant, VehicleType, FuelType, TransmissionType, Insurance, Color, Client, Expense, FileUpload } from 'app/data-model';
import { CarService } from 'app/services/car/car.service';
import { MakeService } from 'app/services/make/make.service';
import { ModelService } from 'app/services/model/model.service';
import { VariantService } from 'app/services/variant/variant.service';
import { VehicleTypeService } from 'app/services/vehicle-type/vehicle-type.service';
import { FuelTypeService } from 'app/services/fuel-type/fuel-type.service';
import { TransmissionTypeService } from 'app/services/transmission-type/transmission-type.service';
import { UploadFileService } from 'app/services/upload-file/upload-file.service';
import 'rxjs/add/observable/of';
import { map } from 'rxjs/operators';
import * as _ from 'underscore';
import { PagerService } from 'app/services/index';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  title : string = "CARS";
  cars$: Observable<Car[]>;
  pagedCars$: Observable<any[]>;
  fileUploads: Observable<Array<any>>;
  filterForm: FormGroup;
  makes$:Observable<Make>;
  models$:Observable<Model>;
  variants$:Observable<Variant>;
  vehicleTypes$:Observable<VehicleType>;
  fuelTypes$:Observable<FuelType>;
  transmissionTypes$:Observable<TransmissionType>;

  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(
    private fb: FormBuilder,
    public carService:CarService,
    public makeService:MakeService,
    private modelService:ModelService,
    private variantService:VariantService,
    private vehicleTypeService:VehicleTypeService,
    private fuelTypeService:FuelTypeService,
    private transmissionTypeService:TransmissionTypeService,
    public uploadFileService:UploadFileService,
    // private http: Http,
    private pagerService: PagerService) { }



    ngOnInit() {
      this.createForm();
      this.getAvailableCars();
      this.getMakes();
      this.getModels();
      this.getVariants();
      this.getVehicleTypes();
      this.getFuelTypes();
      this.getTransmissionTypes();
    }

    setPage(page: number) {

      // if (page < 1 || page > this.pager.totalPages) {
      //   return;
      // }

      // get pager object from service
      this.pager = this.pagerService.getPager(this.allItems.length, page);

      // get current page of items
      //paged items
      this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
        window.scrollTo(0, 0);
    }
    createForm() {
      this.filterForm = this.fb.group({
        make : [],
        model : [],
        variant : [],
        vehicle_type : [],
        fuel_type : [],
        transmission_type : [],
        interior_color:[],
        exterior_color:[],
        is_sold : [false],
      });
    }

    getMakes()  {
      this.makes$ = this.makeService.getMakes();
    }
    getModels()  {
      this.models$ = this.modelService.getModels();
    }
    getVariants()  {
      this.variants$ = this.variantService.getVariants();
    }
    getVehicleTypes()  {
      this.vehicleTypes$ = this.vehicleTypeService.getVehicleTypes();
    }
    getFuelTypes()  {
      this.fuelTypes$ = this.fuelTypeService.getFuelTypes();
    }
    getTransmissionTypes()  {
      this.transmissionTypes$ = this.transmissionTypeService.getTransmissionTypes();
    }

    toArray(answers: object) {
      return Object.keys(answers).map(key => answers[key])
    }

    getAvailableCars() {
      var baseURL="https://s3.amazonaws.com/gear2gear/";

      //this.cars$ = this.carService.getAvailableCars(this.filterForm.value);
      //this.setPage(1);
      this.carService.getAvailableCars(this.filterForm.value)
      .subscribe(data => {
        // set items to json response
        this.allItems = data;
        this.cars$ = data;

        // initialize to page 1
        this.setPage(1);
      });
    }

    // this.http.get('./dummy-data.json')
    // .map((response: Response) => response.json())
    // .subscribe(data => {
    //     // set items to json response
    //     this.allItems = data;
    //
    //     // initialize to page 1
    //     this.setPage(1);
    // });


    getFilteredCars(){
      this.getAvailableCars();
    }
    clear(){
      this.filterForm.reset();
      this.getAvailableCars();
    }

  }

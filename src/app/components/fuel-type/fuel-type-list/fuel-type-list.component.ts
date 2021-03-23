import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';

import { FuelType } from '../../../data-model';
import { FuelTypeService } from '../../../services/fuel-type/fuel-type.service';

@Component({
  selector: 'app-fuelType-list',
  templateUrl: './fuel-type-list.component.html',
  styleUrls: ['./fuel-type-list.component.scss'],
})
export class FuelTypeListComponent implements OnInit {
  @Input()
  fuelTypes$: Observable<FuelType>;

  @Output()
  searchTerm = new EventEmitter();

  selectedFuelTypeId:number;

  constructor(private fuelTypeService:FuelTypeService, private router:Router, private route:ActivatedRoute) {
    this.fuelTypeService.selectedFuelTypeId.subscribe(res=>{
      this.selectedFuelTypeId=res;
    },err=>{

    });
  }

  ngOnInit() {
    this.getFuelTypes();
    this.fuelTypeService.refreshList.subscribe(
      res=>{
          this.getFuelTypes();
      },
      err => {
        console.log(err);
      }
    );
    // this.router.navigate(['/fuelType/add']);
  }

  getFuelTypes()  {
    this.fuelTypes$ = this.fuelTypeService.getFuelTypes();
  }

  searchFuelTypes(searchTerm){
    if(searchTerm){
      this.fuelTypes$ = this.fuelTypeService.searchFuelTypes(searchTerm);
    }
    else{
      this.getFuelTypes();
      //this.fuelTypes$ = new EmptyObservable();
    }
  }
  // searchFuelTypes(search: string){
  //   this.searchTerm.emit(search);
  // }

  //On Click of the Add Button
  createFuelType(mode:any){
    this.selectedFuelTypeId=0;
    this.fuelTypeService.selectedMode = mode;
    this.router.navigate(['/fuelType/add']);
  }

  //On Click of the Edit Button
  selectFuelType(fuelType_id:number, mode:any){
    this.selectedFuelTypeId=fuelType_id;
    this.fuelTypeService.selectedMode = mode;
    this.router.navigate(['/fuelType/edit/' + this.selectedFuelTypeId]);
    setTimeout(() => {
      this.fuelTypeService.selectedFuelTypeId.next(fuelType_id);
    }, 100);
  }

}

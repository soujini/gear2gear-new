import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';

import { VehicleType } from '../../../data-model';
import { VehicleTypeService } from '../../../services/vehicle-type/vehicle-type.service';

@Component({
  selector: 'app-vehicleType-list',
  templateUrl: './vehicle-type-list.component.html',
  styleUrls: ['./vehicle-type-list.component.scss'],
})
export class VehicleTypeListComponent implements OnInit {
  @Input()
  // results$: Observable<VehicleType>;
  vehicleTypes$: Observable<VehicleType>;
  @Output()
  searchTerm = new EventEmitter();

  selectedVehicleTypeId:number;

  constructor(private vehicleTypeService:VehicleTypeService, private router:Router, private route:ActivatedRoute) {
    this.vehicleTypeService.selectedVehicleTypeId.subscribe(res=>{
      this.selectedVehicleTypeId=res;
    },err=>{

    });
  }

  ngOnInit() {
    this.getVehicleTypes();
    this.vehicleTypeService.refreshList.subscribe(
      res=>{
          this.getVehicleTypes();
      },
      err => {
        console.log(err);
      }
    );
    // this.router.navigate(['/vehicleType/add']);
  }
  getVehicleTypes()  {
    this.vehicleTypes$ = this.vehicleTypeService.getVehicleTypes();
  }

  searchVehicleTypes(searchTerm){
    if(searchTerm){
      this.vehicleTypes$ = this.vehicleTypeService.searchVehicleTypes(searchTerm);
    }
    else{
      this.getVehicleTypes();
      //this.vehicleTypes$ = new EmptyObservable();
    }
  }
  // searchVehicleTypes(search: string){
  //   this.searchTerm.emit(search);
  // }

  //On Click of the Add Button
  createVehicleType(mode:any){
    this.selectedVehicleTypeId=0;
    this.vehicleTypeService.selectedMode = mode;
    this.router.navigate(['/vehicleType/add']);
  }

  //On Click of the Edit Button
  selectVehicleType(vehicleType_id:number, mode:any){
    this.selectedVehicleTypeId=vehicleType_id;
    this.vehicleTypeService.selectedMode = mode;
    this.router.navigate(['/vehicleType/edit/' + this.selectedVehicleTypeId]);
    setTimeout(() => {
      this.vehicleTypeService.selectedVehicleTypeId.next(vehicleType_id);
    }, 100);
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';

import { Insurance } from '../../../data-model';
import { InsuranceService } from '../../../services/insurance/insurance.service';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.scss'],
})
export class InsuranceListComponent implements OnInit {
  @Input()
  insurances$: Observable<Insurance>;

  @Output()
  searchTerm = new EventEmitter();

  selectedInsuranceId:number;

  constructor(private insuranceService:InsuranceService, private router:Router, private route:ActivatedRoute) {
    this.insuranceService.selectedInsuranceId.subscribe(res=>{
      this.selectedInsuranceId=res;
    },err=>{

    });
  }

  ngOnInit() {
    this.getInsurances();
    this.insuranceService.refreshList.subscribe(
      res=>{
          this.getInsurances();
      },
      err => {
        console.log(err);
      }
    );
    // this.router.navigate(['/insurance/add']);
  }

  // searchInsurances(search: string){
  //   this.searchTerm.emit(search);
  // }
  getInsurances()  {
    this.insurances$ = this.insuranceService.getInsurances();
  }

  searchInsurances(searchTerm){
    if(searchTerm){
      this.insurances$ = this.insuranceService.searchInsurances(searchTerm);
    }
    else{
        this.getInsurances();
      //this.insurances$ = new EmptyObservable();
    }
  }

  //On Click of the Add Button
  createInsurance(mode:any){
    this.selectedInsuranceId=0;
    this.insuranceService.selectedMode = mode;
    this.router.navigate(['/insurance/add']);
  }

  //On Click of the Edit Button
  selectInsurance(insurance_id:number, mode:any){
    this.selectedInsuranceId=insurance_id;
    this.insuranceService.selectedMode = mode;
    this.router.navigate(['/insurance/edit/' + this.selectedInsuranceId]);
    setTimeout(() => {
      this.insuranceService.selectedInsuranceId.next(insurance_id);
    }, 100);
  }

}

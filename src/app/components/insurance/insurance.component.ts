import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { Insurance } from '../../data-model';
import { InsuranceService } from '../../services/insurance/insurance.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss'],
})
export class InsuranceComponent implements OnInit {
  title : string = "Insurance";
  selectedInsurance : Insurance;

  insurances$: Observable<Insurance>;

  constructor(private fb: FormBuilder, private insuranceService:InsuranceService, private router: Router, private route: ActivatedRoute) {

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
  }

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

}

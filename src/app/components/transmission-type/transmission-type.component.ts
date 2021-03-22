import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { TransmissionType } from '../../data-model';
import { TransmissionTypeService } from '../../services/transmission-type/transmission-type.service';

@Component({
  selector: 'app-make',
  templateUrl: './transmission-type.component.html',
  styleUrls: ['./transmission-type.component.scss'],
})
export class TransmissionTypeComponent implements OnInit {
  title : string = "Transmission Type";
  selectedTransmissionType : TransmissionType;

  transmissionTypes$: Observable<TransmissionType>;

  constructor(private fb: FormBuilder, private transmissionTypeService:TransmissionTypeService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
   
  }

  getTransmissionTypes()  {
    this.transmissionTypes$ = this.transmissionTypeService.getTransmissionTypes();
  }

  searchTransmissionTypes(searchTerm){
    if(searchTerm){
      this.transmissionTypes$ = this.transmissionTypeService.searchTransmissionTypes(searchTerm);
    }
    else{
      this.getTransmissionTypes();
      //this.transmissionTypes$ = new EmptyObservable();
    }
  }

}

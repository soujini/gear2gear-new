import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { Model } from '../../data-model';
import { ModelService } from '../../services/model/model.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss'],
})
export class ModelComponent implements OnInit {
  title : string = "Models";
  selectedModel : Model;

  models$: Observable<Model>;

  constructor(private fb: FormBuilder, private modelService:ModelService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {

  }

  // getModels()  {
  //   this.models$ = this.modelService.getModels();
  // }

  // searchModels(searchTerm){
  //   if(searchTerm){
  //     this.models$ = this.modelService.searchModels(searchTerm);
  //   }
  //   else{
  //     this.getModels();
  //     //this.models$ = new EmptyObservable();
  //   }
  // }

}

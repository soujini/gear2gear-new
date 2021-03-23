import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';

import { Model } from '../../../data-model';
import { ModelService } from '../../../services/model/model.service';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.scss'],
})
export class ModelListComponent implements OnInit {
  @Input()
  // results$: Observable<Model>;
  models$: Observable<Model>;
  
  @Output()
  searchTerm = new EventEmitter();

  selectedModelId:number;

  constructor(private modelService:ModelService, private router:Router, private route:ActivatedRoute) {
    this.modelService.selectedModelId.subscribe(res=>{
      this.selectedModelId=res;
    },err=>{

    });
  }

  ngOnInit() {
    this.getModels();
    this.modelService.refreshList.subscribe(
      res=>{
          this.getModels();
      },
      err => {
        console.log(err);
      }
    );
    // this.router.navigate(['/model/add']);
  }
  getModels()  {
    this.models$ = this.modelService.getModels();
  }

  searchModels(searchTerm){
    if(searchTerm){
      this.models$ = this.modelService.searchModels(searchTerm);
    }
    else{
      this.getModels();
      //this.models$ = new EmptyObservable();
    }
  }
  // searchModels(search: string){
  //   this.searchTerm.emit(search);
  // }

  //On Click of the Add Button
  createModel(mode:any){
    this.selectedModelId=0;
    this.modelService.selectedMode = mode;
    this.router.navigate(['/model/add']);
  }

  //On Click of the Edit Button
  selectModel(model_id:number, mode:any){
    this.selectedModelId=model_id;
    this.modelService.selectedMode = mode;
    this.router.navigate(['/model/edit/' + this.selectedModelId]);
    setTimeout(() => {
      this.modelService.selectedModelId.next(model_id);
    }, 100);
  }

}

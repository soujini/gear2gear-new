import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Model } from '../../../data-model';
import { ModelService } from '../../../services/model/model.service';
import { MakeService } from '../../../services/make/make.service';
import { Make} from '../../../data-model';


@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.scss'],
})
export class ModelFormComponent implements OnInit {
  title : string = "Create Model";
  module :string="model";
  mode :string="discard";
  message:string="";
  message_error:string="";
  modelForm: FormGroup;
  selectedModel_Id: any;
  submitted = false;
  private sub;
  makes$:Observable<Make>;

  constructor(private fb: FormBuilder, private makeService:MakeService, private modelService:ModelService, private router:Router, private route:ActivatedRoute) {
    this.modelService.selectedModelId.next(0);
    this.sub = this.modelService.selectedModelId
    .subscribe(
      res => {
        this.selectedModel_Id = res;
        if(this.modelService.selectedMode == "Edit"){
          this.title = "Edit Model";
          this.mode = "delete";
          this.getModelById(res);
        }
      },
      err => {

      }
    );
  }

  createForm() {
    this.modelForm = this.fb.group({
      model_id: [''],
      make_id:['', [Validators.required]],
      name: ['', [Validators.required,Validators.maxLength(50)]],
    });
  }

  onSubmit(){
    this.submitted = true;
    if (this.modelForm.valid) {
      if(this.modelService.selectedMode == 'Create'){
        this.createModel();
      }
      else if (this.modelService.selectedMode == 'Edit'){
        this.updateModel();
      }
    }
  }

  getModelById(model_id:number){
    this.modelService.getModelById(model_id)
    .subscribe(
        res => {
        this.modelForm.patchValue(res[0]);
        },
        err => {
          window.scrollTo(0, 0);
          this.message_error = err;
          setTimeout(() => {
            this.message_error = "";
          },5000);
          console.log(err);
        }
      );
  }

  createModel(){
    this.modelService.createModel(this.modelForm.value)
    .subscribe(
      res => {
        window.scrollTo(0, 0);
        this.message = this.modelForm.get('name').value + " created successfully.";
        setTimeout(() => {
          this.message = "";
        },5000);

        this.modelService.refreshList.next(true);
        this.modelForm.reset();
      },
      err => {
        window.scrollTo(0, 0);
        this.message_error = err;
        setTimeout(() => {
          this.message_error = "";
        },5000);
        console.log(err);
      }
    );
  }

  updateModel(){
    this.modelService.updateModel(this.modelForm.value)
    .subscribe(
      res => {
        window.scrollTo(0, 0);
        this.message = this.modelForm.get('name').value + " updated successfully.";
        setTimeout(() => {
          this.message = "";
        },5000);
          this.modelService.refreshList.next(true);
      },
      err => {
        window.scrollTo(0, 0);
        this.message_error = err;
        setTimeout(() => {
          this.message_error = "";
        },5000);
        console.log(err);
      }
    );
  }

  deleteModel(event){
    if(this.selectedModel_Id)
    {
      this.modelService.deleteModel(this.selectedModel_Id).subscribe(
        res => {
          this.modelService.refreshList.next(true);
          this.router.navigate(['/model/add']);
        },
        err => {
          console.log(err);
        }
      );
    }
    else{
      this.modelForm.reset();
    }
  }
  
  getMakes()  {
    this.makes$ = this.makeService.getMakes();
  }

  ngOnInit() {
    this.getMakes();
    this.createForm();

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

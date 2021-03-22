import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { Variant } from '../../data-model';
import { VariantService } from '../../services/variant/variant.service';

@Component({
  selector: 'app-variant',
  templateUrl: './variant.component.html',
  styleUrls: ['./variant.component.scss'],
})
export class VariantComponent implements OnInit {
  title : string = "Variant";
  selectedVariant : Variant;

  variants$: Observable<Variant>;

  constructor(private fb: FormBuilder, private variantService:VariantService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    
  }

  // getVariants()  {
  //   this.variants$ = this.variantService.getVariants();
  // }

  // searchVariants(searchTerm){
  //   if(searchTerm){
  //     this.variants$ = this.variantService.searchVariants(searchTerm);
  //   }
  //   else{
  //     this.getVariants();
  //     //this.variants$ = new EmptyObservable();
  //   }
  // }

}

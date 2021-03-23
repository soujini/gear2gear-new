import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';

import { Variant } from '../../../data-model';
import { VariantService } from '../../../services/variant/variant.service';

@Component({
  selector: 'app-variant-list',
  templateUrl: './variant-list.component.html',
  styleUrls: ['./variant-list.component.scss'],
})
export class VariantListComponent implements OnInit {
  @Input()
  // results$: Observable<Variant>;
  variants$: Observable<Variant>;

  @Output()
  searchTerm = new EventEmitter();

  selectedVariantId:number;

  constructor(private variantService:VariantService, private router:Router, private route:ActivatedRoute) {
    this.variantService.selectedVariantId.subscribe(res=>{
      this.selectedVariantId=res;
    },err=>{

    });
  }

  ngOnInit() {
    this.getVariants();
    this.variantService.refreshList.subscribe(
      res=>{
          this.getVariants();
      },
      err => {
        console.log(err);
      }
    );
    // this.router.navigate(['/variant/add']);
  }
  getVariants()  {
    this.variants$ = this.variantService.getVariants();
  }

  searchVariants(searchTerm){
    if(searchTerm){
      this.variants$ = this.variantService.searchVariants(searchTerm);
    }
    else{
      this.getVariants();
      //this.variants$ = new EmptyObservable();
    }
  }
  // searchVariants(search: string){
  //   this.searchTerm.emit(search);
  // }

  //On Click of the Add Button
  createVariant(mode:any){
    this.selectedVariantId=0;
    this.variantService.selectedMode = mode;
    this.router.navigate(['/variant/add']);
  }

  //On Click of the Edit Button
  selectVariant(variant_id:number, mode:any){
    this.selectedVariantId=variant_id;
    this.variantService.selectedMode = mode;
    this.router.navigate(['/variant/edit/' + this.selectedVariantId]);
    setTimeout(() => {
      this.variantService.selectedVariantId.next(variant_id);
    }, 100);
  }

}

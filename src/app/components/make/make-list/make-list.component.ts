import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';

import { Make } from '../../../data-model';
import { MakeService } from '../../../services/make/make.service';

@Component({
  selector: 'app-make-list',
  templateUrl: './make-list.component.html',
  styleUrls: ['./make-list.component.scss'],
})
export class MakeListComponent implements OnInit {
  @Input()
  // results$: Observable<Make>;
  makes$: Observable<Make>;

  @Output()
  searchTerm = new EventEmitter();

  selectedMakeId:number;
  private sub;

  constructor(private makeService:MakeService, private router:Router, private route:ActivatedRoute) {
    this.sub = this.makeService.selectedMakeId
    .subscribe(
      res => {
        this.selectedMakeId = res;
      });
  }

  ngOnInit() {
    this.makeService.selectedMakeId.next(0);
    this.getMakes();
    this.makeService.refreshList.subscribe(
      res=>{
          this.getMakes();
      },
      err => {
        console.log(err);
      }
    );
    // this.router.navigate(['/make/add']);
  }
  getMakes()  {
    this.makes$ = this.makeService.getMakes();
  }

  searchMakes(searchTerm){
    if(searchTerm){
      this.makes$ = this.makeService.searchMakes(searchTerm);
    }
    else{
      this.getMakes();
      //this.makes$ = new EmptyObservable();
    }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // searchMakes(search: string){
  //   this.searchTerm.emit(search);
  // }

  //On Click of the Add Button
  createMake(mode:any){
    this.selectedMakeId=0;
    this.makeService.selectedMode = mode;
    this.router.navigate(['/make/add']);
  }

  //On Click of the Edit Button
  selectMake(make_id:number, mode:any){
    this.selectedMakeId=make_id;
    this.makeService.selectedMode = mode;
    this.router.navigate(['/make/edit']);
    setTimeout(() => {
      this.makeService.selectedMakeId.next(make_id);
    }, 100);
  }

}

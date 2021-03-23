import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { Color } from '../../../data-model';
import { ColorService } from '../../../services/color/color.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.scss'],
})
export class ColorListComponent implements OnInit {
  @Input()
  colors$: Observable<Color>;

  @Output()
  searchTerm = new EventEmitter();

  selectedColorId: number;

  constructor(private colorService: ColorService, private router: Router, private route: ActivatedRoute) {
    this.colorService.selectedColorId.subscribe(res => {
      this.selectedColorId = res;
    }, err => {

    });
  }

  ngOnInit() {
    this.getColors();
    this.colorService.refreshList.subscribe(
      res => {
        this.getColors();
      },
      err => {
        console.log(err);
      }
    );
    // this.router.navigate(['/color/add']);
  }
  getColors() {
    this.colors$ = this.colorService.getColors();
  }

  searchColors(searchTerm) {
    if (searchTerm) {
      this.colors$ = this.colorService.searchColors(searchTerm);
    }
    else {
      this.getColors();
      //this.colors$ = new EmptyObservable();
    }
  }

  // searchColors(search: string){
  //   this.searchTerm.emit(search);
  // }

  //On Click of the Add Button
  createColor(mode: any) {
    this.selectedColorId = 0;
    this.colorService.selectedMode = mode;
    this.router.navigate(['/color/add']);
  }

  //On Click of the Edit Button
  selectColor(color_id: number, mode: any) {
    this.selectedColorId = color_id;
    this.colorService.selectedMode = mode;
    this.router.navigate(['/color/edit/' + this.selectedColorId]);
    setTimeout(() => {
      this.colorService.selectedColorId.next(color_id);
    }, 100);
  }

}

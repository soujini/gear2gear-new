import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Observable } from "rxjs";
// import { Http, Response } from "@angular/http";
import { of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import {debounceTime} from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTerm = new FormControl('');
  name:String;
  user:any;
  @Output() searchTermValueChanged = new EventEmitter();
  @Output() isCreate = new EventEmitter();
  @Output() deleteAll = new EventEmitter();

  constructor() {
    this.getUserFromLocalStorage();
  }

  getUserFromLocalStorage(){
    if(JSON.parse(localStorage.getItem('User')) != null){
      var user = JSON.parse(localStorage.getItem('User'));
      this.user = user;
      this.name = user.email;
    }
    else{
      this.name = "";
    }
  }
  valueChanged() {
    this.searchTerm.valueChanges
    //  .debounceTime(400)
  //    .distinctUntilChanged()
      .subscribe(val =>{
      this.searchTermValueChanged.emit(val);
    });
  }

  create(){
    this.isCreate.emit(true);
  }
  deleteAllCarsAndTransactions(){
    this.deleteAll.emit(true);
  }

  ngOnInit() {
    this.valueChanged();
      // .debounceTime(400)
      // .distinctUntilChanged()
      // .switchMap( value => this.makeService.searchMakes(value))
      // .subscribe(res => {
      //   console.log("ress in search comp ",res);
      // });
    }
  }

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import {EMPTY} from 'rxjs';
import { of } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { Client } from '../../data-model';
import { ClientService } from '../../services/client/client.service';
import { CommonService } from '../../services/common/common.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  title : string = "Clients";
  selectedClient : Client;

  clients$: Observable<Client>;

  constructor(private fb: FormBuilder, private clientService:ClientService,private commonService:CommonService, private router: Router, private route: ActivatedRoute) {
//this.getStates();
  }

  ngOnInit() {

  }


  // getClients()  {
  //   this.clients$ = this.clientService.getClients();
  // }

  // searchClients(searchTerm){
  //   if(searchTerm){
  //     this.clients$ = this.clientService.searchClients(searchTerm);
  //   }
  //   else{
  //     this.getClients();
  //     this.clients$ =  EMPTY;
  //     of({});
  //   }
  // }

//   getStates(){
//     this.commonService.getStates().subscribe(res=>{
//     this.clientService.states$ = res.RestResponse.result;
//   })
// }

}

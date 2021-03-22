import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';

import { Client,Make,Model } from '../../../data-model';
import { ClientService } from '../../../services/client/client.service';
import {EMPTY} from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {
  @Input()
  results$: Observable<Client>;
  clients$: Observable<Client>;

  @Output()
  searchTerm = new EventEmitter();

  selectedClientId:number;

  constructor(private clientService:ClientService, private router:Router, private route:ActivatedRoute) {
    this.clientService.selectedClientId.subscribe(res=>{
      this.selectedClientId=res;
    },err=>{

    });
   }

  ngOnInit() {
      this.getClients();

    this.clientService.refreshList.subscribe(
      res=>{
          this.getClients();
      },
      err => {
        console.log(err);
      }
    );
    // this.router.navigate(['/client/add']);
  }
  getClients()  {
      this.clients$ = this.clientService.getClients();
    }
    searchClients(searchTerm){
    if(searchTerm){
      this.clients$ = this.clientService.searchClients(searchTerm);
    }
    else{
      this.getClients();
      this.clients$ =  EMPTY;
      of({});
    }
  }
  // searchClients(search: string){
  //   this.searchTerm.emit(search);
  // }

  //On Click of the Add Button
  createClient(mode:any){
    this.selectedClientId=0;
    this.clientService.selectedMode = mode;
    this.router.navigate(['/client/add']);
  }

  //On Click of the Edit Button
  selectClient(client_id:number, mode:any){
    this.selectedClientId=client_id;
    this.clientService.selectedMode = mode;
    this.router.navigate(['/client/edit']);
    setTimeout(() => {
      this.clientService.selectedClientId.next(client_id);
    }, 100);
  }

}

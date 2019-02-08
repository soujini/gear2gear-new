import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedMenu:string="home";

  constructor(public auth : AuthService) { }

  ngOnInit() {
    this.selectedMenu = window.location.pathname.split("/").pop();
  }

}

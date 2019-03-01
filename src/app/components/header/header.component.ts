import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  selectedMenu:string="home";

  constructor(public auth : AuthService) { }

  ngOnInit() {
    $(document).ready(function(){
      // $(".navbar-toggler-icon").addClass('sr-only');
  $(".navbar-toggler-icon").attr("aria-label","Toggle Menu");


      // click(function(){
      //   var div = $("div");
      //   div.animate({left: '100px'}, "slow");
      //   div.animate({fontSize: '5em'}, "slow");
      // });
    });

    this.selectedMenu = window.location.pathname.split("/").pop();
  }

}

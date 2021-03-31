import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { AuthService } from "../../shared/services/auth.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PagerService } from '../../services';
import {User} from '../../shared/services/user'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthService]
})
export class HeaderComponent implements OnInit {
  selectedMenu: string = "home";
  name: any = "";
  userName: any = "";
  password: any = "";
  isLogin = false;
  isRegister: boolean = false;
  isRecoverPassword: boolean = false;
  loading = false;
  submitted = false;
  public user :User;
  isVerifyEMAIL: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    private authService: AuthService,
    public pagerService: PagerService
  ) {


    this.pagerService.userDetailsSubject.subscribe(data => {
      if (JSON.stringify(data) === '{}') {
        if(JSON.parse(localStorage.getItem('User')) != null){
          var user = JSON.parse(localStorage.getItem('User'));
          this.user = user;
          this.name = user.email;
        }
        else{
          this.name = "";
        }
      }
      else {
        if(JSON.parse(localStorage.getItem('User')) != null){
          var user = JSON.parse(localStorage.getItem('User'));
          this.user = user;
          this.name = user.email;
        }
        else{
          this.name = "";
        }
        // if (user.firstName != undefined) {
        //   this.name = user.firstName + ' ' + user.lastName;
        // }
        // else {
        //   this.name = user.email;
        // }
      }

    });
  }

  ngOnInit() {

    $(document).ready(function () {
      // $(".navbar-toggler-icon").addClass('sr-only');
      $(".navbar-toggler-icon").attr("aria-label", "Toggle Menu");


      // click(function(){
      //   var div = $("div");
      //   div.animate({left: '100px'}, "slow");
      //   div.animate({fontSize: '5em'}, "slow");
      // });
    });

    this.selectedMenu = window.location.pathname.split("/").pop();
  }
  setIsRegister(event) {
    this.isRegister = event;
  }

  setIsRecoverPassword(event) {
    this.isRecoverPassword = event;
  }
  setIsLogin(event) {
    this.isLogin = event;
  }

  setUserName(event) {
    this.userName = event;
  }
  setPassword(event) {
    this.password = event;
  }

  logout() {
      this.router.navigate(['home']);
    this.authService.SignOut();
  }

  setisVerifyEMAIL(event) {
    this.isVerifyEMAIL = event;
  }
  setRegisteredEmail(event){
    this.userName=event;
    alert(this.userName);
  }
}

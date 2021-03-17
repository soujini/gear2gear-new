
import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from "../../shared/services/auth.service";
import { WindowService } from '../../services/window.service';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ModalDirective } from 'angular-bootstrap-md';
import { PagerService } from "../../services/pager.service";



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements AfterViewInit {
  @ViewChild('loginModal') loginModal: ModalDirective;
  submitted: boolean;
  loading: boolean;
  errorMessage: any;
  mode: any = "invalid";
  showPassword: boolean = false;
  successMessage:string="";
  appVerifier: any;
  @Output() isRegister = new EventEmitter();
  @Output() isLogin = new EventEmitter();
  @Output() isRecoverPassword = new EventEmitter();
  @Output() userName = new EventEmitter();
  @Output() password = new EventEmitter();
  loginBtnText: string = "Log In"

  constructor(public ngZone: NgZone,
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public pagerService: PagerService) {
  
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.loginModal.show();
  }
  
  forgotPassword() {
    this.isRecoverPassword.emit(true);
    this.isLogin.emit(false);
  }
  register() {
    this.isRegister.emit(true);
    this.isLogin.emit(false);
  }
  validate(event) {
    if (this.validateUsername(event) == true) {
      if (this.mode == 'email') {
        this.loginBtnText = "LOGIN";
        this.showPassword = true;
        this.errorMessage = "";
      }
      else if (this.mode == 'invalid') {
        this.loginBtnText = "Log In";
        this.showPassword = false;
        this.errorMessage = "Please enter a email"
      }
    }
  }
  validateUsername(event) {
      this.mode = "email";
      var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (event.target.value.match(emailPattern)) {
        this.errorMessage = "";
        this.mode = "email";
        return true;
      }
      else {
        this.mode = "invalid";
        return false;
      }
    }
  

  onSubmit() {
    this.submitted = true;
    this.loading = true;
  }
  signIn(userEmail:string, userPwd:string ){
    this.authService.SignIn(userEmail, userPwd).then(() => {
      this.successMessage = 'You are successfully logged in';
      setTimeout(() => {
        this.successMessage ="";
        this.isLogin.emit(false);
      }, 500);
    
    }).catch((error) => {
      this.errorMessage = error.message;
    })
  }
 
}

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'angular-bootstrap-md';
import { AuthService } from "../../shared/services/auth.service";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements AfterViewInit {
  public errorMessage:string="";
  @Output() isRegister = new EventEmitter();
  @Output() isLogin = new EventEmitter();
  @Output() isRecoverPassword = new EventEmitter();
  @Output() isVerifyEMAIL = new EventEmitter();
  @Output() registeredEmail = new EventEmitter();

  @ViewChild('registerModal') public registerModal: ModalDirective;
  registerForm: any;
  successMessage:string="";

  constructor( public authService: AuthService,private formBuilder: FormBuilder) {
    this.authService.errorMessage.subscribe(data => {
      this.errorMessage=data;
    });

    }

    ngAfterViewInit(): void {
      this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
      this.registerModal.show();
      this.isLogin.emit(false);
    }
    closeRegisterModal(){
      this.isRegister.emit(false);
      this.isLogin.emit(false);
    }
    login(){
      this.isRegister.emit(false);
      this.isLogin.emit(true);
    }

    signUp(userEmail:string, userPwd:string, firstName:string, lastName:string){
      this.authService.SignUp(userEmail, userPwd,firstName, lastName).then(user => {
        // this.pagerService.signInWeb(email,password,firstName,lastName);
        this.authService.SendVerificationMail().then(() => {
          // this.errorMessageSubject.next("Please check your email inbox for a verification email and login again.");
          // setTimeout(() => {
            this.isRegister.emit(false);
            this.isVerifyEMAIL.emit(true);
            this.registeredEmail.emit(userEmail);
          // }, 000);

        });

    })
    .catch(error => {
      switch (error.code) {
        case 'auth/email-already-in-use':
        // this.errorMessageSubject.next(`Email address ${email} already in use.`);
        this.errorMessage="Email address already in use.";
        setTimeout(() => {
          this.errorMessage="";
        }, 3000);
        break;
        case 'auth/invalid-email':
        // this.errorMessageSubject.next(`Email address ${email} is invalid.`);
        this.errorMessage="Email address is invalid.";
        setTimeout(() => {
          this.errorMessage="";
        }, 3000);
        break;
        case 'auth/operation-not-allowed':
        // this.errorMessageSubject.next(`Error during sign up.`);
        this.errorMessage="Error during sign up.";
        setTimeout(() => {
          this.errorMessage="";
        }, 3000);
        break;
        case 'auth/weak-password':
        // this.errorMessageSubject.next('Password is not strong enough. Add additional characters including special characters and numbers.');
        this.errorMessage="Password is not strong enough. Add additional characters including special characters and numbers.";
        setTimeout(() => {
          this.errorMessage="";
        }, 3000);
        break;
        default:
        // this.errorMessageSubject.next(error.message);
        this.errorMessage=error.message;
        setTimeout(() => {
          this.errorMessage="";
        }, 3000);
        break;
      }});
    }
    signUp2(userEmail:string, userPwd:string, firstName:string, lastName:string ){
      this.authService.SignUp(userEmail, userPwd,firstName, lastName);
      this.isVerifyEMAIL.emit(true);
      this.isRegister.emit(false);
      // .then(() => {
      //   this.successMessage = 'Verification email sent, check your inbox.';
      //   setTimeout(() => {
      //     this.successMessage ="";
      //     this.isRegister.emit(false);
      //     this.isVerifyEMAIL.emit(true);
      //   }, 500);


      // }).catch((error) => {
      //   this.errorMessage = error.message;
      // })
    }
  }

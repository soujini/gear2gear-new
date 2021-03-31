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

  @ViewChild('registerModal') public registerModal: ModalDirective;
  registerForm: any;

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
    signUp(userEmail:string, userPwd:string, firstName:string, lastName:string ){
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

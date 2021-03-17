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
  successMessage:string="";
  @Output() isRegister = new EventEmitter();
  @Output() isLogin = new EventEmitter();
  @Output() isRecoverPassword = new EventEmitter();

  @ViewChild('registerModal') public registerModal: ModalDirective;
  registerForm: any;

  constructor( public authService: AuthService) {
    this.authService.errorMessage.subscribe(data => {
      this.errorMessage=data;
    });

    }

    ngAfterViewInit(): void {
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
      this.authService.SignUp(userEmail, userPwd,).then(() => {
        this.successMessage = 'Verification email sent, check your inbox.';
        setTimeout(() => {
          this.successMessage ="";
          this.isRegister.emit(false);
        }, 500);
        
  
      }).catch((error) => {
        this.errorMessage = error.message;
      })
    }
  }

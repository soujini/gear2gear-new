import { Component, OnInit, ViewChild, Input,AfterViewInit } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { AuthService } from "../../shared/services/auth.service";
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements AfterViewInit {
  errorMessage: any;
  @ViewChild('verifyModal') verifyModal: ModalDirective;
  @Input() userName;

  // @Output() isRegister = new EventEmitter();
  // @Output() isLogin = new EventEmitter();

  constructor(public authService: AuthService) { }

  ngAfterViewInit(): void {
    this.verifyModal.show();
  }

  closeverifyModal(){

  }

}

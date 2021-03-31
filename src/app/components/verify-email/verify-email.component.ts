import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { AuthService } from "../../shared/services/auth.service";
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  errorMessage: any;
  @ViewChild('verifyModal') otpModal: ModalDirective;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}

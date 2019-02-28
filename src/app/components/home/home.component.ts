import { Component, OnInit } from '@angular/core';
// import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
 slide1:string = "https://s3.amazonaws.com/gear2gear/bg3.jpeg";
 slide2:string = "https://s3.amazonaws.com/gear2gear/xuv500.jpeg";
 slide3:string = "https://s3.amazonaws.com/gear2gear/bg5.jpg";

  constructor() { }

  ngOnInit() {
  }

}

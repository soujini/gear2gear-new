import { Injectable,NgZone } from  '@angular/core';
import auth from 'firebase/app';
import { Router } from  "@angular/router";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from "../services/user";
import { BehaviorSubject } from 'rxjs';
import {PagerService} from '../../services/pager.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  public errorMessageSubject = new BehaviorSubject("");
  errorMessage = this.errorMessageSubject.asObservable();
 constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public pagerService:PagerService,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        // localStorage.setItem('user', JSON.stringify(this.userData));
        // this.pagerService.userDetailsSubject.next(JSON.stringify(this.userData));
        // JSON.parse(localStorage.getItem('user'));
      } else {
        // localStorage.setItem('user', null);
        // this.pagerService.userDetailsSubject.next(null);
        // JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  SignIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password);

  }

  // Sign up with email/password
  SignUp(email, password,firstName, lastName) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);

  }

  // Send email verfificaiton when new user sign up
  async  SendVerificationMail() {
    return await (await this.afAuth.currentUser).sendEmailVerification();

  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail);
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }



  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('User');
      this.pagerService.userDetailsSubject.next(null);
      // this.router.navigate(['sign-in']);
    })
  }

}

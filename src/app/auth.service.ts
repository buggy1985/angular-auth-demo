import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';

@Injectable()
export class AuthService {

  error: any;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
  }

  loginWithFb() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .then(
        (success) => {
          this.router.navigate(['/members']);
        }).catch((err) => {
      this.error = err;
    });
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(
        (success) => {
          this.router.navigate(['/members']);
        }).catch(
      (err) => {
        this.error = err;
      });
  }

  signupWithEmail(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(
        (success) => {
          this.router.navigate(['/members']);
        }).catch(
      (err) => {
        this.error = err;
      });
  }

  loginWithEmail(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(
      (success) => {
        console.log(success);
        this.router.navigate(['/members']);
      }).catch(
      (err) => {
        console.log(err);
        this.error = err;
      });
  }
}

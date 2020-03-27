import {CanActivate, Router} from '@angular/router';
import {AngularFire, AngularFireAuth, AuthMethods, AuthProviders} from 'angularfire2/angularfire2';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthService {

  error: any;

  constructor(
    private auth: AngularFireAuth,
    private af: AngularFire,
    private router: Router
  ) {
  }


  loginWithFb() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then(
      (success) => {
        this.router.navigate(['/members']);
      }).catch((err) => {
      this.error = err;
    });
  }

  loginWithGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(
      (success) => {
        this.router.navigate(['/members']);
      }).catch(
      (err) => {
        this.error = err;
      });
  }

  signupWithEmail(email: string, password: string) {
    this.af.auth.createUser({
      email: email,
      password: password,
    }).then(
      (success) => {
        this.router.navigate(['/members']);
      }).catch(
      (err) => {
        this.error = err;
      });
  }

  loginWithEmail(email: string, password: string) {
    this.af.auth.login({
        email: email,
        password: password
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }).then(
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

import {Component, OnInit} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    public af: AngularFire,
    private router: Router,
    public authService: AuthService
  ) {

    this.af.auth.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/members');
      }
    });

  }

  onSubmit(formData) {
    if (formData.valid) {
      this.authService.loginWithEmail(formData.value.email, formData.value.password);
    }
  }

  ngOnInit() {
  }

}

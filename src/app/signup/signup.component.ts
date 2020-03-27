import {Component, OnInit} from '@angular/core';
import {AngularFire} from 'angularfire2';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    public af: AngularFire,
    private router: Router,
    public authService: AuthService
  ) {

  }

  onSubmit(formData) {
    if (formData.valid) {
      this.authService.signupWithEmail(formData.value.email, formData.value.password);
    }
  }

  ngOnInit() {
  }

}

import {Component, OnInit} from '@angular/core';
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

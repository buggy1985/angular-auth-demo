import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit {
  name: any;

  constructor(public af: AngularFireAuth, private router: Router) {

    this.af.authState.subscribe(auth => {
      if (auth) {
        this.name = auth.displayName;
      }
    });
  }

  logout() {
    this.af.auth.signOut();
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }
}

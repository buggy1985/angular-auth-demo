import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {MembersComponent} from './members/members.component';
import {AngularFireAuthGuardModule} from '@angular/fire/auth-guard';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AuthService} from './auth.service';


export const firebaseConfig = {
  apiKey: 'AIzaSyCN9InAwVN90ZIP4iXiJvLgOu4J8vJisig',
  authDomain: 'webperftools-app.firebaseapp.com',
  databaseURL: 'https://webperftools-app.firebaseio.com',
  storageBucket: 'webperftools-app.appspot.com',
  messagingSenderId: '672645113876',
  projectId: 'webperftools-app',
  appId: '1:672645113876:web:25e139584b17bead97df01',
  measurementId: 'G-4866Q88XSD'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

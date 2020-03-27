import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './authguard.service';
import { routes } from './app.routes';
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
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [
    AuthGuard,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  user: Observable<firebase.User>;
  authStatus: boolean;

  constructor(public afAuth: AngularFireAuth) {
  	this.user = afAuth.authState;
  	this.authStatus = false;
  }

  login(){
  	this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  	this.authStatus = true;
  }

  logout(){
  	this.afAuth.auth.signOut();
  	this.authStatus = false;
  }

  signup(){
  	console.log("Create user");
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  
  list: any;

  constructor(public db: AngularFireDatabase) { }

  ngOnInit() {
  	this.list = this.db.list('/stylists');
  }

}

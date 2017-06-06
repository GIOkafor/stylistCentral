import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import  { Stylist } from './stylist';

@Injectable()
export class StylistService {

  stylists: FirebaseListObservable<any[]>;

  constructor(public db: AngularFireDatabase) {
  	this.stylists = db.list('/stylists');
  }

  newStylist(stylist: Stylist){
  	this.stylists.push(stylist);
  }

  rateStylist(){
  	//apply rating
  }
}

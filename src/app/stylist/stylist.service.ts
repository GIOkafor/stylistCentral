import { Injectable, Inject } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import  { Stylist } from './stylist';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@Injectable()
export class StylistService {

  stylists: FirebaseListObservable<any[]>;
  firebaseStorage: any;

  constructor(public db: AngularFireDatabase, @Inject(FirebaseApp) firebaseApp: any) {
  	this.stylists = db.list('/stylists');
  	this.firebaseStorage = firebaseApp.storage();
  }

  newStylist(stylist: Stylist){
  	this.stylists.push(stylist);
  }

  rateStylist(){
  	//apply rating
  }

  uploadPhoto(file, stylist:Stylist): any{
  	console.log("Uploading : ", file.name);

  	//TODO: update it to be stored under stylist name
  	var uploadTask = this.firebaseStorage.ref('stylist-images/' + file.name).put(file);
  	
  	uploadTask.then((imgURL) => {
  		console.log("Upload complete downloadURL is : " + imgURL.downloadURL);

  		stylist.profilePhoto = imgURL.downloadURL;
  		this.newStylist(stylist);
  	})
  	
/** PROGRESS TRACKING
  	uploadTask.on('state_changed', (snapshot) => {
  		var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  		console.log("Upload is : " + progress + " % done");
  	}, (error) => {
  		console.log("Error occured" + error.code);
  	}, () => {
  		//console.log("Upload complete, url: " + uploadTask.snapshot.downloadURL);
  		return uploadTask.snapshot.downloadURL;
  	})

 **/ 	
  }
}

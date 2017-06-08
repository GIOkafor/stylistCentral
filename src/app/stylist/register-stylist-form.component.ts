import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Stylist } from './stylist';
import { StylistService } from './stylist.service';

@Component({
	selector: 'stylist-form',
	templateUrl: 'register-stylist-form.component.html',
	styleUrls: ['forms.css']
})

export class RegisterStylist {
	
	submitted = false;

	services = [
		{value: 'cutting', display: 'Hair Cutting'}, 
		{value: 'styling', display: 'Styling'}, 
		{value: 'dying', display: 'Dying'}
	];

	model:any;
	profilePhoto: any;


	constructor(private stylistService: StylistService) {
	
	this.model = new Stylist('', [], '', 0);
		
	}

	onSubmit(){ 
		console.log("Form submitted");

		this.stylistService.uploadPhoto(this.profilePhoto, this.model);
		this.submitted = true; 
	}

	selectFile(event){
		this.profilePhoto = event.target.files[0];
	}

	//TODO: Remove when we're done
	get diagnostic(){return JSON.stringify(this.model);}
}
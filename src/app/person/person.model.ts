export class PersonModel {
	firstname: string;
	surname: string;
	imageUrl: string;
	sex: string;
	fullName() : string {
		return this.firstname + ' ' + this.surname;
	}

	constructor();
	constructor(firstname: string, surname: string, sex: string);
	constructor(firstname?: string, surname?: string, sex?: string) {
		this.firstname = firstname || '';
		this.surname = surname || '';
		this.sex = sex;
		this.setImage();
		//this.imageUrl = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSoB9_W7D9f3u0hYnFb-NpIAPztQNxrNYdMJh-FLzN9PtLr1Q02yPx06g';
	//http://www.freeiconspng.com/uploads/female-icon-23.png female	
	}

	setImage() : void {
		if(this.sex) {
			if(this.sex === 'male') {
				this.imageUrl = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSoB9_W7D9f3u0hYnFb-NpIAPztQNxrNYdMJh-FLzN9PtLr1Q02yPx06g';
			} else {
				this.imageUrl = 'http://www.freeiconspng.com/uploads/female-icon-23.png';
			}
		}
	}
}
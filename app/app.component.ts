import {Component} from 'angular2/core';

@Component({
	selector: 'hello-world',
	template: `
		<!-- 1. Demo Simple data binding met {{ .. }} -->
		<h2>Naam: {{ name }}</h2>
		
		<!-- 2. Demo event binding met (...) en local template variable met # -->
		<input type="text" class="input-lg" placeholder="typ je naam..."
			#txtName (keyup.enter)="handleClick(txtName.value); txtName.value='' ">
		<button class="btn btn-primary" 
			(click)="handleClick(txtName.value); txtName.value=''">Toon naam (console)</button>
		<hr>
		
		<!-- 3. Demo attribute binding met [...] - 01  -->
		<button class="btn btn-primary" (click)="toggleText()">{{ btnToggleText}}</button>
		<h2 [hidden]="showText">Deze tekst wordt getoond of verborgen</h2>
		
		<hr>
		<!-- 3. Demo attribute binding - 02  -->
		<h2>Mijn favoriete steden:</h2>
		<button class="btn btn-primary" (click)="favCity('Groningen')">Groningen</button>
		<button class="btn btn-primary" (click)="favCity('Hengelo')">Hengelo</button>
		<button class="btn btn-primary" (click)="favCity('Enschede')">Enschede</button>
		<button class="btn btn-primary" (click)="favCity('Mechelen')">Mechelen</button>
		<img [src]="favCityImg" [alt]="favCityAlt" [title]="favCityTitle">
		
		<!-- 4. Demo Two-way databinding met [(ngModel)]  -->
		<hr>
		<input type="text" class="input-lg" [(ngModel)]="newCity">
		<h2>{{ newCity }}</h2>
		<button class="btn btn-primary" (click)="showCity()">Toon stad</button>

		<hr>
		<input type="text" class="input-lg" [(ngModel)]="newcolor">
		<h2 [style.color]="newcolor">djcjsdhfjsdhfj</h2>
		<button class="btn btn-primary" (click)="colorgen('yellow')">yellow</button>
		<button class="btn btn-primary" (click)="colorgen('orange')">orang</button>
		<button class="btn btn-primary" (click)="colorgen('red')">red</button>
		<hr>
		<input type="text" class="input-lg" [(ngModel)]="text1">
		<input type="text" class="input-lg" value= {{text1}} >
		<hr>

		<input  class="form-check-input" type="checkbox"  [(ngModel)]="accepted"> accept the agreement<br>
		<button class="btn btn-primary" [disabled]="!accepted" >thanks</button>
		<hr>
		 <li *ngFor="#item of items">{{item}}</li>
		 <hr>
		 <select [(ngModel)]="chosen">
		 <option *ngFor="#item of items">{{item}}</option>
		 </select>
		 <h2>{{chosen}}</h2>
		 <hr>
		 <div *ngIf="showing">
		<h2>visible</h2>
		</div>
		<button class="btn btn-primary" (click)="changeshowing()" >{{buttontxt}}</button>
		 <p>the end </p>
	`
})

export class AppComponent {
	name:string          = 'Peter Kassenaar';
	names:string[]       = [];
	showText:boolean     = false;
	btnToggleText:string = ' Toon tekst';
	favCityImg:string    = '';
	favCityAlt:string    = '';
	favCityTitle:string  = '';
	newCity:string       = '';
	newcolor:string		 ='';
	items:string[] =["jdfhjfhd","fdfjksd","fkdjdjfk"]
	showing:boolean = false
	buttontxt:string = "open"
	//accepted:boolean = true;


    
changeshowing(){
	this.showing = !this.showing;
	if(this.showing = true){
		this.buttontxt="close"
	}
	else{
		this.buttontxt="open"
	}
}
	
	handleClick(name:string) {
		this.names.push(name);
		console.log(this.names);
	}

	toggleText() {
		this.showText      = !this.showText;
		this.btnToggleText = this.showText ? ' Toon tekst' : ' Verberg tekst'
	}

	favCity(stad) {
		this.favCityImg   = `img/${stad}.jpg`;
		this.favCityAlt   = `Foto van ${stad}`;
		this.favCityTitle = `Foto van ${stad}`;
	}

colorgen(ncolor){
	this.newcolor = `${ncolor}`;
}

	showCity() {
		alert(' je typte: ' + this.newCity)
	}
}

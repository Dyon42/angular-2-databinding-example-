System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = 'Peter Kassenaar';
                    this.names = [];
                    this.showText = false;
                    this.btnToggleText = ' Toon tekst';
                    this.favCityImg = '';
                    this.favCityAlt = '';
                    this.favCityTitle = '';
                    this.newCity = '';
                    this.newcolor = '';
                    this.items = ["jdfhjfhd", "fdfjksd", "fkdjdjfk"];
                    this.showing = false;
                    this.buttontxt = "open";
                }
                //accepted:boolean = true;
                AppComponent.prototype.changeshowing = function () {
                    this.showing = !this.showing;
                    if (this.showing = true) {
                        this.buttontxt = "close";
                    }
                    else {
                        this.buttontxt = "open";
                    }
                };
                AppComponent.prototype.handleClick = function (name) {
                    this.names.push(name);
                    console.log(this.names);
                };
                AppComponent.prototype.toggleText = function () {
                    this.showText = !this.showText;
                    this.btnToggleText = this.showText ? ' Toon tekst' : ' Verberg tekst';
                };
                AppComponent.prototype.favCity = function (stad) {
                    this.favCityImg = "img/" + stad + ".jpg";
                    this.favCityAlt = "Foto van " + stad;
                    this.favCityTitle = "Foto van " + stad;
                };
                AppComponent.prototype.colorgen = function (ncolor) {
                    this.newcolor = "" + ncolor;
                };
                AppComponent.prototype.showCity = function () {
                    alert(' je typte: ' + this.newCity);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'hello-world',
                        template: "\n\t\t<!-- 1. Demo Simple data binding met {{ .. }} -->\n\t\t<h2>Naam: {{ name }}</h2>\n\t\t\n\t\t<!-- 2. Demo event binding met (...) en local template variable met # -->\n\t\t<input type=\"text\" class=\"input-lg\" placeholder=\"typ je naam...\"\n\t\t\t#txtName (keyup.enter)=\"handleClick(txtName.value); txtName.value='' \">\n\t\t<button class=\"btn btn-primary\" \n\t\t\t(click)=\"handleClick(txtName.value); txtName.value=''\">Toon naam (console)</button>\n\t\t<hr>\n\t\t\n\t\t<!-- 3. Demo attribute binding met [...] - 01  -->\n\t\t<button class=\"btn btn-primary\" (click)=\"toggleText()\">{{ btnToggleText}}</button>\n\t\t<h2 [hidden]=\"showText\">Deze tekst wordt getoond of verborgen</h2>\n\t\t\n\t\t<hr>\n\t\t<!-- 3. Demo attribute binding - 02  -->\n\t\t<h2>Mijn favoriete steden:</h2>\n\t\t<button class=\"btn btn-primary\" (click)=\"favCity('Groningen')\">Groningen</button>\n\t\t<button class=\"btn btn-primary\" (click)=\"favCity('Hengelo')\">Hengelo</button>\n\t\t<button class=\"btn btn-primary\" (click)=\"favCity('Enschede')\">Enschede</button>\n\t\t<button class=\"btn btn-primary\" (click)=\"favCity('Mechelen')\">Mechelen</button>\n\t\t<img [src]=\"favCityImg\" [alt]=\"favCityAlt\" [title]=\"favCityTitle\">\n\t\t\n\t\t<!-- 4. Demo Two-way databinding met [(ngModel)]  -->\n\t\t<hr>\n\t\t<input type=\"text\" class=\"input-lg\" [(ngModel)]=\"newCity\">\n\t\t<h2>{{ newCity }}</h2>\n\t\t<button class=\"btn btn-primary\" (click)=\"showCity()\">Toon stad</button>\n\n\t\t<hr>\n\t\t<input type=\"text\" class=\"input-lg\" [(ngModel)]=\"newcolor\">\n\t\t<h2 [style.color]=\"newcolor\">djcjsdhfjsdhfj</h2>\n\t\t<button class=\"btn btn-primary\" (click)=\"colorgen('yellow')\">yellow</button>\n\t\t<button class=\"btn btn-primary\" (click)=\"colorgen('orange')\">orang</button>\n\t\t<button class=\"btn btn-primary\" (click)=\"colorgen('red')\">red</button>\n\t\t<hr>\n\t\t<input type=\"text\" class=\"input-lg\" [(ngModel)]=\"text1\">\n\t\t<input type=\"text\" class=\"input-lg\" value= {{text1}} >\n\t\t<hr>\n\n\t\t<input  class=\"form-check-input\" type=\"checkbox\"  [(ngModel)]=\"accepted\"> accept the agreement<br>\n\t\t<button class=\"btn btn-primary\" [disabled]=\"!accepted\" >thanks</button>\n\t\t<hr>\n\t\t <li *ngFor=\"#item of items\">{{item}}</li>\n\t\t <hr>\n\t\t <select [(ngModel)]=\"chosen\">\n\t\t <option *ngFor=\"#item of items\">{{item}}</option>\n\t\t </select>\n\t\t <h2>{{chosen}}</h2>\n\t\t <hr>\n\t\t <div *ngIf=\"showing\">\n\t\t<h2>visible</h2>\n\t\t</div>\n\t\t<button class=\"btn btn-primary\" (click)=\"changeshowing()\" >{{buttontxt}}</button>\n\t\t <p>the end </p>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
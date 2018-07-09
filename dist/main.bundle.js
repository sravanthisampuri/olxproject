webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div>\n    <app-categories></app-categories>\n</div> -->\n    <div>\n        <app-navbar></app-navbar>\n    </div>\n\n\n   <div>\n    <router-outlet></router-outlet>\n   </div>\n    \n<div>\n\n    <app-footer></app-footer>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.filter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
        this.filterdata = [];
    }
    FilterPipe.prototype.transform = function (value, search) {
        console.log(value, search);
        if (search === undefined) {
            return value;
        }
        else {
            this.filterdata = [];
            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                var k = value_1[_i];
                console.log(k);
                if (k.toLowerCase().indexOf(search) >= 0) {
                    console.log(k.indexOf(search));
                    this.filterdata.push(k);
                }
            }
        }
        return this.filterdata;
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: "filter"
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_accordion__ = __webpack_require__("./node_modules/ngx-bootstrap/accordion/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_tabs__ = __webpack_require__("./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__categories_categories_component__ = __webpack_require__("./src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cars_cars_component__ = __webpack_require__("./src/app/cars/cars.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__electronics_electronics_component__ = __webpack_require__("./src/app/electronics/electronics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mobile_mobile_component__ = __webpack_require__("./src/app/mobile/mobile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__furniture_furniture_component__ = __webpack_require__("./src/app/furniture/furniture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__bikes_bikes_component__ = __webpack_require__("./src/app/bikes/bikes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__books_books_component__ = __webpack_require__("./src/app/books/books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__fashion_fashion_component__ = __webpack_require__("./src/app/fashion/fashion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pets_pets_component__ = __webpack_require__("./src/app/pets/pets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_services_component__ = __webpack_require__("./src/app/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__jobs_jobs_component__ = __webpack_require__("./src/app/jobs/jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__properties_properties_component__ = __webpack_require__("./src/app/properties/properties.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__submit_ad_submit_ad_component__ = __webpack_require__("./src/app/submit-ad/submit-ad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__car_sale_car_sale_component__ = __webpack_require__("./src/app/car-sale/car-sale.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__login_services__ = __webpack_require__("./src/app/login.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__app_filter__ = __webpack_require__("./src/app/app.filter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__myaccount_myaccount_component__ = __webpack_require__("./src/app/myaccount/myaccount.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__submitAdd_service__ = __webpack_require__("./src/app/submitAdd.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var routes = ([
    { path: '', component: __WEBPACK_IMPORTED_MODULE_22__home_home_component__["a" /* HomeComponent */] },
    { path: "signup", component: __WEBPACK_IMPORTED_MODULE_24__signup_signup_component__["a" /* SignupComponent */] },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_25__login_login_component__["a" /* LoginComponent */] },
    { path: "submit-ad", component: __WEBPACK_IMPORTED_MODULE_26__submit_ad_submit_ad_component__["a" /* SubmitAdComponent */] },
    { path: 'carSale', component: __WEBPACK_IMPORTED_MODULE_29__car_sale_car_sale_component__["a" /* CarSaleComponent */] },
    { path: 'myaccount', component: __WEBPACK_IMPORTED_MODULE_33__myaccount_myaccount_component__["a" /* MyaccountComponent */] },
    {
        path: 'categories', component: __WEBPACK_IMPORTED_MODULE_9__categories_categories_component__["a" /* CategoriesComponent */],
        children: [
            { path: 'properties', component: __WEBPACK_IMPORTED_MODULE_20__properties_properties_component__["a" /* PropertiesComponent */] },
            { path: 'cars', component: __WEBPACK_IMPORTED_MODULE_10__cars_cars_component__["a" /* CarsComponent */] },
            { path: 'electronics', component: __WEBPACK_IMPORTED_MODULE_11__electronics_electronics_component__["a" /* ElectronicsComponent */] },
            { path: 'furniture', component: __WEBPACK_IMPORTED_MODULE_13__furniture_furniture_component__["a" /* FurnitureComponent */] },
            { path: 'jobs', component: __WEBPACK_IMPORTED_MODULE_19__jobs_jobs_component__["a" /* JobsComponent */] },
            { path: 'mobiles', component: __WEBPACK_IMPORTED_MODULE_12__mobile_mobile_component__["a" /* MobileComponent */] },
            { path: 'books', component: __WEBPACK_IMPORTED_MODULE_15__books_books_component__["a" /* BooksComponent */] },
            { path: 'bikes', component: __WEBPACK_IMPORTED_MODULE_14__bikes_bikes_component__["a" /* BikesComponent */] },
            { path: 'fashion', component: __WEBPACK_IMPORTED_MODULE_16__fashion_fashion_component__["a" /* FashionComponent */] },
            { path: 'services', component: __WEBPACK_IMPORTED_MODULE_18__services_services_component__["a" /* ServicesComponent */] },
            { path: 'pets', component: __WEBPACK_IMPORTED_MODULE_17__pets_pets_component__["a" /* PetsComponent */] }
        ]
    }
]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__categories_categories_component__["a" /* CategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__cars_cars_component__["a" /* CarsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__electronics_electronics_component__["a" /* ElectronicsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__mobile_mobile_component__["a" /* MobileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__furniture_furniture_component__["a" /* FurnitureComponent */],
                __WEBPACK_IMPORTED_MODULE_14__bikes_bikes_component__["a" /* BikesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__books_books_component__["a" /* BooksComponent */],
                __WEBPACK_IMPORTED_MODULE_16__fashion_fashion_component__["a" /* FashionComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pets_pets_component__["a" /* PetsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__services_services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_19__jobs_jobs_component__["a" /* JobsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__properties_properties_component__["a" /* PropertiesComponent */],
                __WEBPACK_IMPORTED_MODULE_21__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_22__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_23__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_24__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_25__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_26__submit_ad_submit_ad_component__["a" /* SubmitAdComponent */],
                __WEBPACK_IMPORTED_MODULE_29__car_sale_car_sale_component__["a" /* CarSaleComponent */],
                __WEBPACK_IMPORTED_MODULE_32__app_filter__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_33__myaccount_myaccount_component__["a" /* MyaccountComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["b" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_27_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_accordion__["b" /* AccordionModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_31__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_28__app_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_30__login_services__["a" /* loginServices */], __WEBPACK_IMPORTED_MODULE_34__submitAdd_service__["a" /* SubmitAddService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/bikes/bikes.component.css":
/***/ (function(module, exports) {

module.exports = "\nbody{\n    margin: 0;\n    padding: 0;\n}\n.outline{\n    border: 1px solid lightblue;\n    margin-top: 30px;\n    height: 600px;\n    \n}\n.background{\n    background-color: rgb(209, 223, 228, 0.4);\n    height: 600px;\n    \n}\n.left{\n    padding-left: 0px;\n}\n/* li:hover{\n    width: 100%;\n    background-color: white;\n    border: 1px solid white;\n} */\n.list>li{\n    list-style: none;\n    \n    padding-top: 21px;\n}\n.list>li>a:hover{\n    text-decoration: none;\n    color: red;\n\n}\n.line{\n    border-bottom: 1px solid lightblue;\n    padding-bottom: 10px;\n}\n.li{\n    padding-top: 20px;\n}\n.anchor:hover{\n    text-decoration: none;\n    color: red;\n}\n.top{\n    margin-top: 18px;\n}\n.size{\n    font-size: 22px;\n    margin: 0;\n}\n.box:hover{\n    border: 2px solid rgb(122, 108, 201);\n    padding: 8px;\n    border-radius: 5px;\n    \n    \n}\na:hover{\n    text-decoration: none;\n}"

/***/ }),

/***/ "./src/app/bikes/bikes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n\n    <a routerLink='/india' class=\"anchor\">\n      <img src=\"./assets/images/jobs/map-marker.svg\" width=\"2%\" style=\"padding-bottom: 7px\">\n      <b style=\"font-size: 18px\">All India</b>\n      <small>(Select your city to see local ads)</small>\n    </a>\n  </div>\n</div>\n<div class=\"col-sm-12 line\">\n  <img src=\"./assets/images/bikes/bikes.png\" class=\"col-sm-2\">\n  <span class=\"col-sm-10\">\n    <p class=\"size\">Bikes</p>\n    1,78,016 Ads\n    <br>\n    <a routerLink=''>View all Ads >></a>\n  </span>\n</div>\n<div class=\"col-sm-12\" style=\"padding-top: 30px\">\n  <div class=\"col-sm-2 box text-center\">\n\n\n    <a routerLink=''>\n      <img src=\"./assets/images/bikes/motor.png\">\n      <br> Motorcycles</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/bikes/scooter.png\">\n      <br>Scooters</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/bikes/bicycle.png\">\n      <br>Bicycles</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/bikes/parts.png\">\n      <br>Spare Parts</a>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/bikes/bikes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BikesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BikesComponent = /** @class */ (function () {
    function BikesComponent() {
    }
    BikesComponent.prototype.ngOnInit = function () {
    };
    BikesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bikes',
            template: __webpack_require__("./src/app/bikes/bikes.component.html"),
            styles: [__webpack_require__("./src/app/bikes/bikes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BikesComponent);
    return BikesComponent;
}());



/***/ }),

/***/ "./src/app/books/books.component.css":
/***/ (function(module, exports) {

module.exports = "\nbody{\n    margin: 0;\n    padding: 0;\n}\n.outline{\n    border: 1px solid lightblue;\n    margin-top: 30px;\n    height: 600px;\n    \n}\n.background{\n    background-color: rgb(209, 223, 228, 0.4);\n    height: 600px;\n    \n}\n.left{\n    padding-left: 0px;\n}\n/* li:hover{\n    width: 100%;\n    background-color: white;\n    border: 1px solid white;\n} */\n.list>li{\n    list-style: none;\n    \n    padding-top: 21px;\n}\n.list>li>a:hover{\n    text-decoration: none;\n    color: red;\n\n}\n.line{\n    border-bottom: 1px solid lightblue;\n    padding-bottom: 10px;\n}\n.li{\n    padding-top: 20px;\n}\n.anchor:hover{\n    text-decoration: none;\n    color: red;\n}\n.top{\n    margin-top: 18px;\n}\n.size{\n    font-size: 22px;\n    margin: 0;\n}\n.box:hover{\n    border: 2px solid rgb(122, 108, 201);\n    padding: 8px;\n    border-radius: 5px;\n    \n    \n}\na:hover{\n    text-decoration: none;\n}"

/***/ }),

/***/ "./src/app/books/books.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n\n    <a routerLink='/india' class=\"anchor\">\n      <img src=\"./assets/images/jobs/map-marker.svg\" width=\"2%\" style=\"padding-bottom: 7px\">\n      <b style=\"font-size: 18px\">All India</b>\n      <small>(Select your city to see local ads)</small>\n    </a>\n  </div>\n</div>\n<div class=\"col-sm-12 line\">\n  <img src=\"./assets/images/books/books.png\" class=\"col-sm-2\">\n  <span class=\"col-sm-10\">\n    <p class=\"size\">Books, Sports & Hobbies</p>\n    1,78,016 Ads\n    <br>\n    <a routerLink=''>View all Ads >></a>\n  </span>\n</div>\n<div class=\"col-sm-12\" style=\"padding-top: 30px\">\n  <div class=\"col-sm-2 box text-center\">\n\n\n    <a routerLink=''>\n      <img src=\"./assets/images/books/book.png\">\n      <br>Books</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/books/music.png\">\n      <br> Musical &\n      <br>Instruments</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/books/sports.png\">\n      <br> Sports &\n      <br>Equpiment</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/books/gym.png\">\n      <br> Gym &\n      <br>Fitness</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/books/hobbies.png\">\n      <br> Other Hobbies\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/books/books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BooksComponent = /** @class */ (function () {
    function BooksComponent() {
    }
    BooksComponent.prototype.ngOnInit = function () {
    };
    BooksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-books',
            template: __webpack_require__("./src/app/books/books.component.html"),
            styles: [__webpack_require__("./src/app/books/books.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/car-sale/car-sale.component.css":
/***/ (function(module, exports) {

module.exports = ".fieldset{\n    background: #b0cfda;\n    padding: 20px;\n    border-radius: 5px;\n    margin-top: 10px;\n}\n\n.filtering{\n    background: #f5f5f5;\n    margin-top: 10px;\n    padding-bottom: 25px;\n}\n\n.filter{\n    margin-top: 10px;\n}\n\n.pricefrom{\n    padding-left: 0px !important;\n}\n\n.tabs-filter{\n    margin-top: 20px;\n    padding-left: 0px !important;\n}\n\n.ads{\n    padding-left:0px !important;\n    padding-right:0px !important;\n}\n\n.list1{\ndisplay: inline-block;\npadding: 0px 5px;\n}\n\n.list1 i {\n    font-size: 20px;\n    color: #2965be;\n    cursor: pointer;\n    border: 1px solid #dddddb;\n    border-bottom-color: #c9c9c6;\n    padding: 5px;\n    border-radius: 3px;\n}\n\n.btn-color:hover{\n    background: blue;\n    color:#fff;\n}\n\n.tabs-wrapper{\n    text-align: left;\n}\n\n.gridlist{\n    padding-right: 0px !important;\n\n}\n\n.add-border{\n    border:1px solid black;\n    padding-top: 15px;\n    margin-bottom: 20px;\n    \n}\n\n.add-border:hover{\n    background-color:#eeeeee;\n}\n\n.add-price{\n    font-size:20px;\n  \n    \n}\n\n.add-title{\n    font-size:20px;\n    color:blue;\n}\n\n.add-model{\n    font-size: 13px !important;\n    font-weight: 200;\n    color:black;\n    margin:0;\n\n}\n\n.add-address{\n    font-size: 13px;\n    color:black;\n\n}"

/***/ }),

/***/ "./src/app/car-sale/car-sale.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<div class=\"container fieldset\">\n  <div class=\"row\">\n\n    <div class=\"col-xs-12 matter\">\n      <div class=\"col-xs-4\">\n        <i>select your city and view local Ads</i>\n      </div>\n      <div class=\"col-xs-4\">\n        <i>Browse categories</i>\n      </div>\n      <div class=\"col-xs-4\">\n        <i>search for a specific product</i>\n      </div>\n    </div>\n    <section class=\"col-xs-12\">\n      <div class=\"col-xs-4\">\n        <select class=\"form-control\">...</select>\n      </div>\n      <div class=\"col-xs-4\">\n        <select class=\"form-control\">\n          <option></option>\n        </select>\n      </div>\n      <div class=\"col-xs-4\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"e.g swift samsung galaxy\">\n      </div>\n    </section>\n\n  </div>\n</div>\n<div class=\"container filtering\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 filter\">\n      <div class=\"col-xs-3\">\n        <i>Brand name</i>\n        <br>\n        <select class=\"form-control\">...</select>\n      </div>\n      <div class=\"col-xs-3\">\n        <i>Model</i>\n        <br>\n        <select class=\"form-control\">...</select>\n      </div>\n      <div class=\"col-xs-3\">\n        <div class=\"col-xs-6 pricefrom\">\n          <i>price from</i>\n          <br>\n\n          <select class=\"form-control\">...</select>\n        </div>\n        <div class=\"col-xs-6 priceto\">\n          <i>price to</i>\n          <br>\n\n          <select class=\"form-control\">...</select>\n        </div>\n\n      </div>\n      <div class=\"col-xs-3\">\n        <div class=\"col-xs-6 pricefrom\">\n          <i>year from</i>\n          <br>\n\n          <select class=\"form-control\">...</select>\n        </div>\n        <div class=\"col-xs-6 priceto\">\n          <i>year to</i>\n          <br>\n\n          <select class=\"form-control\">...</select>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xs-12 filter\">\n      <div class=\"col-xs-3\">\n\n        <div class=\"col-xs-6 pricefrom\">\n          <i>KM from</i>\n          <br>\n\n          <select class=\"form-control\">...</select>\n        </div>\n        <div class=\"col-xs-6 priceto\">\n          <i>KM to</i>\n          <br>\n\n          <select class=\"form-control\">...</select>\n        </div>\n      </div>\n      <div class=\"col-xs-3\">\n        <i>Fuel type</i>\n        <select class=\"form-control\">...</select>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n<div class=\"container ads\">\n  <div class=\"row\">\n    <div class='col-xs-12 tabs-filter'>\n      <div class=\"col-xs-6 tabs-part\">\n        <div class=\"tabs-wrapper\">\n          <tabset>\n            <tab heading=\"Ads with photos\" id=\"tab1\">\n\n            </tab>\n            <tab heading=\"All Ads\">\n\n            </tab>\n          </tabset>\n        </div>\n\n      </div>\n      <div class=\"col-xs-6 gridlist text-right\">\n        <span class=\"list1\">\n          <i class=\"fas fa-th-list\"></i>\n        </span>\n        <span class=\"list1\">\n          <i class=\"fas fa-th\"></i>\n        </span>\n        <span class=\"list1\">\n          <i class=\"fas fa-desktop\"></i>\n        </span>\n        <span>Sort by:</span>\n        <div class=\"btn-group\" dropdown>\n          <button id=\"button-menu-dividers\" dropdownToggle type=\"button\" class=\"btn-color btn btn-default dropdown-toggle\" aria-controls=\"dropdown-menu-dividers\">\n            Most Recent\n            <span class=\"caret\"></span>\n          </button>\n          <ul id=\"dropdown-menu-dividers\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-menu-dividers\">\n            <li role=\"menuitem\">\n              <a class=\"dropdown-item\" href=\"#\">Most Recent</a>\n            </li>\n            <li role=\"menuitem\">\n              <a class=\"dropdown-item\" href=\"#\">price: Rs Low to High</a>\n            </li>\n            <li role=\"menuitem\">\n              <a class=\"dropdown-item\" href=\"#\">price: Rs High to Low</a>\n            </li>\n\n          </ul>\n        </div>\n      </div>\n      <div class=\"clearfix\"></div>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <h4 class=\"text-left\">Featured Ads</h4>\n    <div class=\"col-xs-12  add-border\" *ngFor=\"let index of carsinfo\">\n      <div class=\"col-xs-2\">\n        <img src=\"{{ index.images }}\">\n      </div>\n      <div class=\"col-xs-8 add-title\">\n        {{ index.title}}\n        <br>\n        <p class=\"add-model\"> cars >> {{ index.model }}</p>\n        <b class=\"add-address\">{{ index.address }}</b>\n\n      </div>\n      <div class=\"col-xs-2 add-price text-right\">\n        <b> {{ index.price | currency:'INR' }}</b>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/car-sale/car-sale.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarSaleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarSaleComponent = /** @class */ (function () {
    function CarSaleComponent() {
        this.carsinfo = [];
    }
    CarSaleComponent.prototype.ngOnInit = function () {
        this.carsinfo = [
            {
                images: './assets/images/image1.webp',
                title: 'Hyundai Elite I20 Sportz 1.4 (o), 2014, Diesel',
                price: '150000',
                address: 'Hyderabad',
                model: 'swift dezire',
                verified: true
            },
            {
                images: './assets/images/image2.webp',
                title: 'Nissan Micra XL BS IV 2015 Model for Sale',
                price: '10000',
                address: 'Hyderabad',
                model: 'swift',
                verified: true
            },
            {
                images: './assets/images/image5.webp',
                title: 'Automatic Diesel Verna SX',
                price: '150000',
                address: 'Hyderabad',
                model: 'swift dezire',
                verified: true
            }, {
                images: './assets/images/image4.webp',
                title: '2000 Maruti Suzuki Alto 800 petrol 60000 Kms',
                price: '100000',
                address: 'Hyderabad',
                model: 'swift dezire',
                verified: true
            }
        ];
    };
    CarSaleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-car-sale',
            template: __webpack_require__("./src/app/car-sale/car-sale.component.html"),
            styles: [__webpack_require__("./src/app/car-sale/car-sale.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarSaleComponent);
    return CarSaleComponent;
}());



/***/ }),

/***/ "./src/app/cars/cars.component.css":
/***/ (function(module, exports) {

module.exports = "\nbody{\n    margin: 0;\n    padding: 0;\n}\n.outline{\n    border: 1px solid lightblue;\n    margin-top: 30px;\n    height: 600px;\n    \n}\n.background{\n    background-color: rgb(209, 223, 228, 0.4);\n    height: 600px;\n    \n}\n.left{\n    padding-left: 0px;\n}\n/* li:hover{\n    width: 100%;\n    background-color: white;\n    border: 1px solid white;\n} */\n.list>li{\n    list-style: none;\n    \n    padding-top: 21px;\n}\n.list>li>a:hover{\n    text-decoration: none;\n    color: red;\n\n}\n.line{\n    border-bottom: 1px solid lightblue;\n    padding-bottom: 10px;\n}\n.li{\n    padding-top: 20px;\n}\n.anchor:hover{\n    text-decoration: none;\n    color: red;\n}\n.panel-default {\n    border-color:white;\n    background-color: #FBFAAE;\n}\n.top{\n    margin-top: 18px;\n}\n.size{\n    font-size: 22px;\n    margin: 0;\n}\n.box:hover{\n    border: 2px solid rgb(122, 108, 201);\n    padding: 8px;\n    border-radius: 5px;\n    \n    \n}\na:hover{\n    text-decoration: none;\n}"

/***/ }),

/***/ "./src/app/cars/cars.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n\n      <a routerLink='/india' class=\"anchor\">\n        <img src=\"./assets/images/jobs/map-marker.svg\" width=\"2%\" style=\"padding-bottom: 7px\">\n        <b style=\"font-size: 18px\">All India</b>\n        <small>(Select your city to see local ads)</small>\n      </a>\n    </div>\n  </div>\n  <div class=\"col-sm-12 line\">\n    <img src=\"./assets/images/cars/cars.png\" class=\"col-sm-2\">\n    <span class=\"col-sm-10\">\n      <p class=\"size\">Cars</p>\n      1,78,016 Ads\n      <br>\n      <a routerLink=''>View all Ads >></a>\n    </span>\n  </div>\n  <div class=\"col-sm-12\" style=\"padding-top: 30px\">\n    <div class=\"col-sm-2 box text-center\">\n\n\n      <a routerLink='/carSale'>\n        <img src=\"./assets/images/cars/car.png\">\n        <br> Cars</a>\n    </div>\n    <div class=\"col-sm-2 box text-center\">\n\n      <a routerLink=''>\n        <img src=\"./assets/images/cars/truck.png\">\n        <br> Commercial &\n        <br>Vehicles</a>\n    </div>\n    <div class=\"col-sm-2 box text-center\">\n\n      <a routerLink=''>\n        <img src=\"./assets/images/cars/vehicle.png\">\n        <br> Other Vehicles</a>\n    </div>\n    <div class=\"col-sm-2 box text-center\">\n\n      <a routerLink=''>\n        <img src=\"./assets/images/cars/spare.png\">\n        <br>Spare Parts</a>\n    </div>\n\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/cars/cars.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarsComponent = /** @class */ (function () {
    function CarsComponent() {
    }
    CarsComponent.prototype.ngOnInit = function () {
    };
    CarsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cars',
            template: __webpack_require__("./src/app/cars/cars.component.html"),
            styles: [__webpack_require__("./src/app/cars/cars.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarsComponent);
    return CarsComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.css":
/***/ (function(module, exports) {

module.exports = "body{\n    margin: 0;\n    padding: 0;\n }\n .outline{\n    border: 1px solid rgba(158, 158, 158, 0.16);\n    margin-top: 30px;\n    height: 600px;\n    \n }\n .background{\n    background-color: rgb(209, 223, 228, 0.4);\n    height: 600px;\n    \n }\n .sidebar{\n    background-color: rgba(158, 158, 158, 0.05);\n    height: 600px;\n }\n ul>li>a:hover{\n     color: red;\n }\n .nav>li>a {\n    padding: 12px 15px;\n }\n .main{\n    padding: 15px;\n }\n .left{\n    padding-left: 0px;\n }\n /* li:hover{\n    width: 100%;\n    background-color: white;\n    border: 1px solid white;\n } */\n .list>li{\n    list-style: none;\n    \n    padding-top: 25px;\n }\n .list>li>a:hover{\n    text-decoration: none;\n    color: red;\n   \n \n }\n .nohover a:hover { \n     background-color: transparent;\n     }\n .line{\n    border-bottom: 1px solid rgb(50, 110, 130);\n    padding-bottom: 5px;\n }\n .li{\n    padding-top: 20px;\n }\n .anchor:hover{\n    text-decoration: none;\n    color: red;\n }\n .panel-default {\n    border-color:white;\n    background-color: #FBFAAE;\n }\n .top{\n    margin-top: 18px;\n }\n .size{\n    font-size: 22px;\n    margin: 0;\n }\n .box:hover{\n    border: 2px solid rgb(122, 108, 201);\n    padding: 8px;\n    border-radius: 5px;\n    \n    \n }\n a:hover{\n    text-decoration: none;\n }\n"

/***/ }),

/***/ "./src/app/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"outline\">\n    <div class=\"col-sm-12 left\">\n      <div class=\"col-sm-3 sidebar\">\n        <ul class=\"nav nav-sidebar\">\n          <li class=\"main\">\n            Main categories\n          </li>\n          <li class=\"line nohover\">\n            <a routerLink=\"#\">All Ads</a>\n          </li>\n\n          <li class=\"nohover\">\n            <a routerLinkActive=\"active-link\" routerLink='/categories/properties'>Properties</a>\n          </li>\n          \n          <li class=\"nohover\">\n            <a routerLinkActive=\"active-link\" routerLink='/categories/cars'>Cars</a>\n          </li>\n          <li class=\"nohover\">\n            <a routerLinkActive=\"active-link\" routerLink='/categories/electronics'>Electronics-Appliances</a>\n          </li>\n          <li class=\"nohover\">\n            <a routerLinkActive=\"active-link\" routerLink='/categories/furniture'>Furniture</a>\n          </li>\n          <li class=\"nohover\">\n            <a routerLinkActive=\"active-link\" routerLink='/categories/jobs'>Jobs</a>\n          </li>\n          <li class=\"nohover\">\n            <a routerLinkActive=\"active-link\" routerLink='/categories/mobiles'>Mobiles</a>\n          </li>\n          <li class=\"nohover\">\n            <a routerLinkActive=\"active-link\" routerLink='/categories/bikes'>Bikes</a>\n          </li>\n          <li class=\"nohover\">\n            <a routerLinkActive=\"active-link\" routerLink='/categories/books'>Books,Sports & Hobbies</a>\n          </li>\n          <li class=\"nohover\">\n            <a routerLinkActive=\"active-link\" routerLink='/categories/fashion'>Fashion</a>\n          </li>\n          <li class=\"nohover\">\n            <a routerLinkActive=\"active-link\" routerLink='/categories/pets'>Pets</a>\n          </li>\n          <li class=\"nohover\">\n            <a routerLinkActive=\"active-link\" routerLink='/categories/services'>Services</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-sm-9\">\n        <router-outlet></router-outlet>\n      </div>\n      <div class=\"clearfix\"></div>\n\n    </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent() {
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    CategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-categories',
            template: __webpack_require__("./src/app/categories/categories.component.html"),
            styles: [__webpack_require__("./src/app/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/electronics/electronics.component.css":
/***/ (function(module, exports) {

module.exports = "\nbody{\n    margin: 0;\n    padding: 0;\n}\n.outline{\n    border: 1px solid lightblue;\n    margin-top: 30px;\n    height: 600px;\n    \n}\n.background{\n    background-color: rgb(209, 223, 228, 0.4);\n    height: 600px;\n    \n}\n.left{\n    padding-left: 0px;\n}\n/* li:hover{\n    width: 100%;\n    background-color: white;\n    border: 1px solid white;\n} */\n.list>li{\n    list-style: none;\n    \n    padding-top: 21px;\n}\n.list>li>a:hover{\n    text-decoration: none;\n    color: red;\n\n}\n.line{\n    border-bottom: 1px solid lightblue;\n    padding-bottom: 10px;\n}\n.li{\n    padding-top: 20px;\n}\n.anchor:hover{\n    text-decoration: none;\n    color: red;\n}\n.top{\n    margin-top: 18px;\n}\n.size{\n    font-size: 22px;\n    margin: 0;\n}\n.box:hover{\n    border: 2px solid rgb(122, 108, 201);\n    padding: 8px;\n    border-radius: 5px;\n    \n    \n}\na:hover{\n    text-decoration: none;\n}"

/***/ }),

/***/ "./src/app/electronics/electronics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n\n    <a routerLink='/india' class=\"anchor\">\n      <img src=\"./assets/images/jobs/map-marker.svg\" width=\"2%\" style=\"padding-bottom: 7px\">\n      <b style=\"font-size: 18px\">All India</b>\n      <small>(Select your city to see local ads)</small>\n    </a>\n  </div>\n</div>\n<div class=\"col-sm-12 line\">\n  <img src=\"./assets/images/electronics/electronics.png\" class=\"col-sm-2\">\n  <span class=\"col-sm-10\">\n    <p class=\"size\">\n      Electronics & Appliances</p>\n    1,78,016 Ads\n    <br>\n    <a routerLink=''>View all Ads >></a>\n  </span>\n</div>\n<div class=\"col-sm-12\" style=\"padding-top: 30px\">\n  <div class=\"col-sm-2 box text-center\">\n\n\n    <a routerLink=''>\n      <img src=\"./assets/images/electronics/computer.png\">\n      <br> Computer &\n      <br>Laptops</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/electronics/tv.png\">\n      <br> TVs, Video &\n      <br>Audio</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/electronics/harddisk.png\">\n      <br>Hard Disk, Printer &\n      <br>Moniters</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/electronics/ac.png\">\n      <br>ACs</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/electronics/washing.png\">\n      <br> Washing\n      <br> Machines\n    </a>\n  </div>\n</div>\n<div class=\"col-sm-12\" style=\"padding-top: 30px\">\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/electronics/fridge.png\">\n      <br> Fridges\n    </a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/electronics/laptop.png\">\n      <br> Computer\n      <br>Accessoris</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/electronics/camera.png\">\n      <br> Camera&\n      <br>Lenses</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/electronics/kitchen.png\">\n      <br> Kitchen &\n      <br> Other Appliances\n    </a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/electronics/games.png\">\n      <br> Games\n      <br>Entertainment\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/electronics/electronics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectronicsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElectronicsComponent = /** @class */ (function () {
    function ElectronicsComponent() {
    }
    ElectronicsComponent.prototype.ngOnInit = function () {
    };
    ElectronicsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-electronics',
            template: __webpack_require__("./src/app/electronics/electronics.component.html"),
            styles: [__webpack_require__("./src/app/electronics/electronics.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ElectronicsComponent);
    return ElectronicsComponent;
}());



/***/ }),

/***/ "./src/app/fashion/fashion.component.css":
/***/ (function(module, exports) {

module.exports = "\nbody{\n    margin: 0;\n    padding: 0;\n}\n.outline{\n    border: 1px solid lightblue;\n    margin-top: 30px;\n    height: 600px;\n    \n}\n.background{\n    background-color: rgb(209, 223, 228, 0.4);\n    height: 600px;\n    \n}\n.left{\n    padding-left: 0px;\n}\n/* li:hover{\n    width: 100%;\n    background-color: white;\n    border: 1px solid white;\n} */\n.list>li{\n    list-style: none;\n    \n    padding-top: 21px;\n}\n.list>li>a:hover{\n    text-decoration: none;\n    color: red;\n\n}\n.line{\n    border-bottom: 1px solid lightblue;\n    padding-bottom: 10px;\n}\n.li{\n    padding-top: 20px;\n}\n.anchor:hover{\n    text-decoration: none;\n    color: red;\n}\n.top{\n    margin-top: 18px;\n}\n.size{\n    font-size: 22px;\n    margin: 0;\n}\n.box:hover{\n    border: 2px solid rgb(122, 108, 201);\n    padding: 8px;\n    border-radius: 5px;\n    \n    \n}\na:hover{\n    text-decoration: none;\n}"

/***/ }),

/***/ "./src/app/fashion/fashion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n\n    <a routerLink='/india' class=\"anchor\">\n      <img src=\"./assets/images/jobs/map-marker.svg\" width=\"2%\" style=\"padding-bottom: 7px\">\n      <b style=\"font-size: 18px\">All India</b>\n      <small>(Select your city to see local ads)</small>\n    </a>\n  </div>\n</div>\n<div class=\"col-sm-12 line\">\n  <img src=\"./assets/images/fashion/fashion.png\" class=\"col-sm-2\">\n  <span class=\"col-sm-10\">\n    <p class=\"size\">Fashion</p>\n    1,78,016 Ads\n    <br>\n    <a routerLink=''>View all Ads >></a>\n  </span>\n</div>\n<div class=\"col-sm-12\" style=\"padding-top: 30px\">\n  <div class=\"col-sm-2 box text-center\">\n\n\n    <a routerLink=''>\n      <img src=\"./assets/images/fashion/men.png\">\n      <br> Men</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/fashion/women.png\">\n      <br> Women</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/fashion/kids.png\">\n      <br>Kids</a>\n  </div>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/fashion/fashion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FashionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FashionComponent = /** @class */ (function () {
    function FashionComponent() {
    }
    FashionComponent.prototype.ngOnInit = function () {
    };
    FashionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fashion',
            template: __webpack_require__("./src/app/fashion/fashion.component.html"),
            styles: [__webpack_require__("./src/app/fashion/fashion.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FashionComponent);
    return FashionComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".downbanner{\n    background-image: url(\"/assets/images/backgroundlogo.png\");\n    background-repeat: no-repeat; \n    background-size: 100%; \n    margin-top: 40px;\n    border-bottom: 2px solid rgba(153, 153, 153, 0.05);\n    height: 157px ! important;\n }\n .set-down-bannerimage{\n  text-align: center;margin-bottom: 10px;border-bottom: 2px solid rgba(153, 153, 153, 0.05);height: 157px ! important;\n }\n .margin{\n    margin: 0px 0px 0px 70px;\n}\n a{\n    color: #414141;\n    text-decoration: none;\n}\n a:hover{\n    color: orange;\n    \n}\n .mar{\n    text-align: center;\n    color: #414141;\n}\n footer{\n    margin-top: 15px;\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n    <div class=\"col-sm-12 downbanner\">\n      <div class=\"col-sm-12  set-down-bannerimage\">\n        <a routerLink=\"\">\n          <img src=\"assets/images/makemobiles.png\" width=\"80%\" height=\"260px\" alt=\"services-image\" class=\"\">\n        </a>\n      </div>\n    </div>\n\n    <footer class=\"container\">\n        <div class=\"row\">\n      \n    <div class=\"col-xs-8\" style=\"margin-top: 30px\">\n      <div class=\"col-xs-1\">\n       <a routerLink=\"\">\n          <img src=\"./assets/images/Screenshot from 2018-06-10 22-42-50.png\" />\n       </a>\n      </div>\n      <div class=\"col-xs-3  margin\">\n        <div>\n          <a routerLink=\"#\">Locations Map</a>\n        </div>\n        <div>\n          <a routerLink=\"#\">Popular searches</a>\n        </div>\n        <div>\n          <a routerLink=\"#\">Archive</a>\n        </div>\n        <div>\n          <a routerLink=\"#\">Sitemap</a>\n        </div>\n        <div>\n          <a routerLink=\"#\">Featured Ads</a>\n        </div>\n      </div>\n      <div class=\"col-xs-2\">\n        <div>\n          <a routerLink=\"#\">Terms of Use</a>\n        </div>\n        <div>\n          <a routerLink=\"#\">Locations Map</a>\n        </div>\n      </div>\n      <div class=\"col-xs-2\">\n        <div>\n          <a routerLink=\"#\"> Who we are</a>\n        </div>\n        <div>\n          <a routerLink=\"#\"> Join OLX</a>\n        </div>\n        <div>\n          <a routerLink=\"#\"> Happy OLXers</a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-xs-4\" style=\"margin-top: 30px\">\n      <div class=\"mar\"> Connect with us</div>\n\n      <ul class=\"nav navbar-nav \">\n        <li class=\"pad\">\n         <a href=\"https://www.facebook.com\" target=\"_new\">\n            <img src=\"./assets/images/Screenshot from 2018-06-10 22-43-17.png\" />\n         </a>\n        </li>\n        <li class=\"pad\">\n         <a href=\"https://plus.google.com/\" target=\"_new\">\n            <img src=\"./assets/images/Screenshot from 2018-06-10 22-43-59.png\" />\n         </a>\n        </li>\n        <li class=\"pad\">\n          <a href=\"https://twitter.com\" target=\"_new\">\n              <img src=\"./assets/images/Screenshot from 2018-06-10 22-44-17.png\" />\n          </a>\n        </li>\n        <li class=\"pad\">\n         <a href=\"https://www.instagram.com\" target=\"_new\">\n            <img src=\"./assets/images/Screenshot from 2018-06-10 22-44-43.png\" />\n         </a>\n        </li>\n\n      </ul>\n\n    </div>\n\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/furniture/furniture.component.css":
/***/ (function(module, exports) {

module.exports = "\nbody{\n    margin: 0;\n    padding: 0;\n}\n.outline{\n    border: 1px solid lightblue;\n    margin-top: 30px;\n    height: 600px;\n    \n}\n.background{\n    background-color: rgb(209, 223, 228, 0.4);\n    height: 600px;\n    \n}\n.left{\n    padding-left: 0px;\n}\n/* li:hover{\n    width: 100%;\n    background-color: white;\n    border: 1px solid white;\n} */\n.list>li{\n    list-style: none;\n    \n    padding-top: 21px;\n}\n.list>li>a:hover{\n    text-decoration: none;\n    color: red;\n\n}\n.line{\n    border-bottom: 1px solid lightblue;\n    padding-bottom: 10px;\n}\n.li{\n    padding-top: 20px;\n}\n.anchor:hover{\n    text-decoration: none;\n    color: red;\n}\n.top{\n    margin-top: 18px;\n}\n.size{\n    font-size: 22px;\n    margin: 0;\n}\n.box:hover{\n    border: 2px solid rgb(122, 108, 201);\n    padding: 8px;\n    border-radius: 5px;\n    \n    \n}\na:hover{\n    text-decoration: none;\n}"

/***/ }),

/***/ "./src/app/furniture/furniture.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n\n    <a routerLink='/india' class=\"anchor\">\n      <img src=\"./assets/images/jobs/map-marker.svg\" width=\"2%\" style=\"padding-bottom: 7px\">\n      <b style=\"font-size: 18px\">All India</b>\n      <small>(Select your city to see local ads)</small>\n    </a>\n  </div>\n</div>\n<div class=\"col-sm-12 line\">\n  <img src=\"./assets/images/furniture/furniture.png\" class=\"col-sm-2\">\n  <span class=\"col-sm-10\">\n    <p class=\"size\">Furniture</p>\n    1,78,016 Ads\n    <br>\n    <a routerLink=''>View all Ads >></a>\n  </span>\n</div>\n<div class=\"col-sm-12\" style=\"padding-top: 30px\">\n  <div class=\"col-sm-2 box text-center\">\n\n\n    <a routerLink=''>\n      <img src=\"./assets/images/furniture/sofa.png\">\n      <br> Sofa & Dining\n    </a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/furniture/beds.png\">\n      <br> Beds &\n      <br>Wardrobes</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/furniture/home.png\">\n      <br> Home Deckor &\n      <br>Garden</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/furniture/spoons.png\">\n      <br> Other Household &\n      <br>Items</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/furniture/kids.png\">\n      <br> Kids Furniture\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/furniture/furniture.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FurnitureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FurnitureComponent = /** @class */ (function () {
    function FurnitureComponent() {
    }
    FurnitureComponent.prototype.ngOnInit = function () {
    };
    FurnitureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-furniture',
            template: __webpack_require__("./src/app/furniture/furniture.component.html"),
            styles: [__webpack_require__("./src/app/furniture/furniture.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FurnitureComponent);
    return FurnitureComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".setting-sections{\n    padding: 0px;\n    margin:  0px auto;\n }\n .carousel-set{\n    width: 100%;\n }\n .noindex{\n    display: block;\n    -webkit-box-shadow: 0 0 0 2000px rgba(102,102,102,0.4);\n            box-shadow: 0 0 0 2000px rgba(102,102,102,0.4);\n    border: 1px solid #cccccc;\n    position: absolute;\n    left: 15px;\n    right: 15px;\n    z-index: 13;\n    background: #fff;\n    font-size: 14px;\n    line-height: 18px;\n    top: 70px;\n    padding: 0px;\n }\n .deleting-cross{\n    position: absolute;\n    left: 74px;\n    z-index: 13;\n    width: 10%;\n    text-align: right;\n    top: 28px;\n    cursor: pointer;\n }\n .deletebutton{\n    text-align: right;\n    float: right;\n    color: blue; \n }\n .removeButton{\n    cursor: pointer;\n }\n .fa-caret-up{\n    left: 80px;\n    top: -9px;\n    position: absolute;\n    content: ' ';\n    color: white;\n }\n .fa-map-marker-alt{\n    left: 47px;\n    top: 23px;\n    position: absolute;\n    content: ' ';\n    color: rgba(0, 0, 0, 0.38);\n }\n .new-navigate{\n    left: 8px;\n    top: 28px;\n    position: absolute;\n    content: ' ';\n    color: rgba(0, 0, 0, 0.38);\n }\n .list-display ul{\n    display: table-cell;\n    padding: 0px;\n    margin: 0px;\n    /* width: 18%; */\n }\n .popularcities-margin{\n     margin-left: 15px;\n }\n .popularcities-margin>li>a:hover{\n     color: #f70;\n }\n .allindiacities{\n     /* border-left: 1px solid black; */\n    overflow: auto;\n }\n .allindiacities ul{\n    padding: 5px 0px;\n }\n .allindiacities ul li{\n    list-style: none;\n }\n /* .allindiacities ul li a{\n    padding: 6px 28px 6px 12px;\n } */\n .allindiacities ul li a:hover{\n     color: #f70;\n }\n .list-display li{\n    list-style: none;\n    width: 20%;\n }\n .list-display a{\n    text-decoration: none;\n }\n .viewport{\n    border-top: 1px solid #cccccc;\n    height: 290px;\n    overflow: auto;\n    background-color: white;\n }\n .viewport > .table {\n    height: 100%;\n    table-layout: fixed;\n }\n .table {\n    display: table;\n    background-color: white;\n }\n .full {\n    width: 100% !important;\n    padding-bottom: 10px;\n }\n .column {\n    display: table-cell;\n    vertical-align: top;\n    padding: 10px 0px;\n    border-left: 1px solid #ccc;\n }\n .part25 {\n    width: 25%;\n }\n .column li{\n    list-style: none;\n    padding: 10px;\n    font-size: 15px;\n }\n li.selected a > * {\n    color: #f70;\n }\n .column a{\n    text-decoration: none;\n }\n .title{\n    padding: 14px 5px;\n    margin: 10px 12px;\n    position: relative;\n    content: ' ';\n    background: #cae0eb;\n    border-radius: 5px;\n    text-align: center;\n }\n .popular-cities{\n    background: #f3f3f3;\n    padding: 12px;\n    font-size: 11px;\n    line-height: 16px;\n }\n .region-set{\n    padding: 5px 0px 5px 15px;\n    width: 80%;\n    border-radius: 5px;\n }\n .formdetails{\n    background-color: rgba(49, 112, 143, 0.32);padding: 20px 0px; border-radius: 8px;\n }\n .input-type{\n    padding: 5px 5px 5px 15px ;border-radius: 5px; margin-left: 5px;\n }\n .input-add-search{\n    width: 65%; padding: 5px 5px 5px 10px ;border-radius: 5px;margin-left: 5px;\n }\n .search-button{\n    height: 35px;\n    width: 10%;\n    background-color: blue;\n    margin-left: 10px;\n    padding: 0px;\n    border: 2px solid white;\n }\n .filter-search{\n    margin-top: 0px;\n    top: 82%;\n    left: 0px;\n    width: auto !important;\n    min-width: 405px;\n    z-index: 10;\n    max-height: 200px;\n    overflow: auto;\n    text-shadow: 0 0 0 transparent;\n    border: 1px solid #cccccc;\n    background: #fff;\n    line-height: 16px;\n    position: absolute;\n }\n .filter-borders{\n     border-bottom: 1px solid #cccccc;\n     padding:10px;\n     cursor: pointer;\n     text-align: left;\n }\n .filter-borders:hover{\n     color: #f70;\n }\n .banner-image{\n    background-color: black; height: 300px;margin:10px 0px;padding: 0px;\n }\n table{\n    border-collapse: collapse;\n }\n .setting-rows{\n    width: 24%;border-color: #999999; border-left:white; border-top: white; padding: 10px 5px;\n }\n .setting-rows a{\n    text-decoration: none;\n }\n .setting-borders{\n    text-align: center;  padding:20px 0px;\n \n }\n .setting-borders td{\n    vertical-align: top;\n }\n .setgif{\n    /* float: right ! important; */\n    text-align: right;\n    padding: 10px  15px 0px 5px;\n }\n .icongrid>tr>td:nth-child(1){\n    border-top: none; border-left: none; border-bottom: #999999; border-right: #999999;\n }\n .downbanner{\n    background-image: url(\"/assets/images/backgroundlogo.png\"); background-repeat: no-repeat; background-size: 100%; margin-top: 40px;border-bottom: 2px solid rgba(153, 153, 153, 0.05); height: 157px ! important;\n }\n .set-down-bannerimage{\n  text-align: center;margin-bottom: 10px;border-bottom: 2px solid rgba(153, 153, 153, 0.05);height: 157px ! important;\n }"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <section class=\"col-xs-12 setting-sections\">\n      <div class=\"col-xs-12   formdetails\">\n        <input type=\"text\" placeholder=\"All India\" class=\"input-type\" (click)=\"displayCities()\" [ngModel]=\"textfield\">\n        <a class=\"deleting-cross\" *ngIf=\"textfield\" (click)=\"removeSelectedCity()\">X</a>\n        <i class=\"fa fa-map-marker-alt new-navigate\"></i>\n        <div class=\"col-xs-10 noindex\" *ngIf=\"locationSearch\">\n          <i class=\"fa fa-caret-up\"></i>\n          <div class=\"col-xs-5 title\">\n            <input type=\"search\" placeholder=\"Type region or city\" class=\"region-set\" [(ngModel)]=\"search\">\n            <div class=\"filter-search\" *ngIf=\"search\">\n              <div *ngFor=\"let g of country | filter:search\" class=\"filter-borders\">\n                <span (click)=\"cities($event)\"> {{g}}</span>\n              </div>\n            </div>\n\n            <i class=\"fa fa-map-marker-alt\"></i>\n          </div>\n          <div class=\"col-sm-6 deletebutton\" (click)=\"deleteSelectedcities()\">\n            <span class=\"removeButton\">X</span>\n          </div>\n          <div class=\"clearfix\"></div>\n          <div class=\"col-sm-12 popular-cities\">\n            <p>Popular cities:</p>\n\n            <div class=\"list full  list-display\">\n              <ul class=\"col-sm-2 popularcities-margin\" *ngFor=\"let item of citiesdata\">\n                <li>\n                  <a href=\"#\" class=\"link regionSelectA2\" data-id=\"58677\" data-graytext=\"Gujarat\">\n                    <span (click)=\"cities($event)\">{{item}}</span>\n                  </a>\n                </li>\n\n              </ul>\n\n              <div class=\"clearfix\"></div>\n            </div>\n\n            <div class=\"viewport col-sm-12\">\n\n              <div class=\"col-sm-3 allindiacities\" *ngFor=\"let i of statesdata\">\n                <ul>\n\n                  <li class=\"\">\n                    <a id=\"regionlink7598\" href=\"#\">\n                      <span (click)=\"cities($event)\">{{i}}</span>\n                    </a>\n                  </li>\n\n                </ul>\n              </div>\n              <div class=\"clearfix\"></div>\n            </div>\n          </div>\n          <div class=\"clearfix\"></div>\n        </div>\n        <input type=\"text\" placeholder=\"\" class=\"input-add-search\">\n        <button type=\"button\" class=\"btn btn-primary btn-lg  search-button\">Search</button>\n      </div>\n    </section>\n\n    <div class=\"col-xs-12  banner-image\">\n      <div class=\"container\">\n        <div id=\"myCarousel\" class=\"carousel slide  col-sm-6\" data-ride=\"carousel\">\n          <!-- Indicators -->\n          <ol class=\"carousel-indicators\">\n            <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n            <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n            <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\n          </ol>\n\n          <!-- Wrapper for slides -->\n          <div class=\"carousel-inner carousel-set\">\n\n            <div class=\"item active\">\n              <img src=\"assets/images/olx8.jpg\" alt=\"Los Angeles\" style=\"width:100%; height:300px\">\n              <div class=\"carousel-caption\">\n                <h3>We there for all</h3>\n                <p>olx is always have so much of Products!</p>\n              </div>\n            </div>\n\n            <div class=\"item\">\n              <img src=\"assets/images/olx7.jpeg\" alt=\"Chicago\" style=\"width:100%; height:300px\">\n              <div class=\"carousel-caption\">\n                <h3>We india</h3>\n                <p>Thank you, olx!</p>\n              </div>\n            </div>\n\n            <div class=\"item\">\n              <img src=\"assets/images/olx9.jpg\" alt=\"New York\" style=\"width:100%; height:300px\">\n              <div class=\"carousel-caption\">\n                <h3>new add can give free advertise</h3>\n                <p>We love the Big Add!</p>\n              </div>\n            </div>\n\n            <div class=\"item\">\n              <div class=\"col-sm-12  video-set\">\n                <!-- <iframe width=\"100%\" height=\"300px\" autoplay muted loop src=\"https://www.youtube.com/embed/XEHjCYQCS4k?autoplay=1\" frameborder=\"0\" allow=\"autoplay; encrypted-media\"\n                  allowfullscreen></iframe> -->\n                <video src=\"assets/time3.webm\" autoplay=\"1\" type=\"video/mp4\" width=\"100%\" height=\"300px\" controls loop></video>\n\n              </div>\n            </div>\n\n          </div>\n          <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n          <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n            <span class=\"glyphicon glyphicon-chevron-right\"></span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </div>\n        <div class=\"col-sm-6\">\n          <video src=\"assets/time2.mp4\" autoplay=\"repeat\" controls loop type=\"video/mp4\" width=\"100%\" height=\"300px\"></video>\n        </div>\n\n\n      </div>\n\n      <!-- Left and right controls -->\n\n    </div>\n\n    <div class=\"col-xs-12\">\n      <div class=\"col-xs-6  setting-borders\">\n        <table width=\"100%\" border=\"0\" class=\"icongrid\">\n          <tbody>\n            <tr>\n              <td class=\"setting-rows\">\n                <a routerLinkActive=\"active-link\" routerLink='/categories/properties'>\n                  <div>\n                    <img src=\"assets/images/home.png\" width=\"50%\" alt=\"home-image\">\n                  </div>\n                  <div>\n                    <span>Properties</span>\n                  </div>\n                </a>\n\n              </td>\n              <td class=\"setting-rows\">\n                <a routerLinkActive=\"active-link\" routerLink=\"/categories/cars\">\n                  <div>\n                    <img src=\"assets/images/car.png\" width=\"50%\" alt=\"car-image\">\n                  </div>\n                  <div>\n                    <span>Cars</span>\n                  </div>\n                </a>\n              </td>\n              <td class=\"setting-rows\">\n                <a routerLinkActive=\"active-link\" routerLink=\"/categories/electronics\">\n                  <div>\n                    <img src=\"assets/images/electronics.png\" width=\"50%\" alt=\"electronics-image\">\n                  </div>\n                  <div>\n                    <span>Electronics & Applicances</span>\n                  </div>\n                </a>\n              </td>\n              <td class=\"setting-rows\">\n                <a routerLinkActive=\"active-link\" routerLink=\"/categories/furniture\">\n                  <div>\n                    <img src=\"assets/images/furniture.png\" width=\"50%\" alt=\"furniture-image\">\n                  </div>\n                  <div>\n                    <span>Furniture</span>\n                  </div>\n                </a>\n              </td>\n            </tr>\n\n\n            <tr>\n              <td class=\"setting-rows\">\n                <a routerLinkActive=\"active-link\" routerLink=\"/categories/jobs\">\n                  <div>\n                    <img src=\"assets/images/jobs.png\" width=\"50%\" alt=\"job-image\">\n                  </div>\n                  <div>\n                    <span>Jobs</span>\n                  </div>\n                </a>\n              </td>\n              <td class=\"setting-rows\">\n                <a routerLinkActive=\"active-link\" routerLink=\"/categories/mobiles\">\n                  <div>\n                    <img src=\"assets/images/mobiles.png\" width=\"50%\" alt=\"mobiles-image\">\n                  </div>\n                  <div>\n                    <span>Mobiles</span>\n                  </div>\n                </a>\n              </td>\n              <td class=\"setting-rows\">\n                <a routerLinkActive=\"active-link\" routerLink=\"/categories/bikes\">\n                  <div>\n                    <img src=\"assets/images/bikes.png\" width=\"50%\" alt=\"bikes-image\">\n                  </div>\n                  <div>\n                    <span>Bikes</span>\n                  </div>\n                </a>\n              </td>\n              <td class=\"setting-rows\">\n                <a routerLinkActive=\"active-link\" routerLink=\"/categories/books\">\n                  <div>\n                    <img src=\"assets/images/books-sports.png\" width=\"50%\" alt=\"books-image\">\n                  </div>\n                  <div>\n                    <span>Books,Sports & Hobbies</span>\n                  </div>\n                </a>\n              </td>\n            </tr>\n\n\n            <tr>\n              <td class=\"setting-rows\">\n                <a routerLinkActive=\"active-link\" routerLink=\"/categories/fashion\">\n                  <div>\n                    <img src=\"assets/images/fashion.png\" width=\"50%\" alt=\"fashion-image\">\n                  </div>\n                  <div>\n                    <span>Fashion</span>\n                  </div>\n                </a>\n              </td>\n              <td class=\"setting-rows\">\n                <a routerLinkActive=\"active-link\" routerLink=\"/categories/pets\">\n                  <div>\n                    <img src=\"assets/images/pets.png\" width=\"50%\" alt=\"pets-image\">\n                  </div>\n                  <div>\n                    <span>Pets</span>\n                  </div>\n                </a>\n              </td>\n              <td class=\"setting-rows\">\n                <a routerLink=\"/categories/services\">\n                  <div>\n                    <img src=\"assets/images/services.png\" width=\"50%\" alt=\"services-image\">\n                  </div>\n                  <div>\n                    <span>Services</span>\n                  </div>\n                </a>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"col-xs-6   setgif\" (click)=\"myclick()\">\n        <a routerLink=\"\">\n          <img src=\"{{display}}\" width=\"70%\">\n        </a>\n      </div>\n      <div class=\"colo-xs-6  setgif\">\n        <img src=\"assets/images/olx2.gif\" width=\"40%\" height=\"100px\">\n      </div>\n      <div class=\"clear\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.country = [];
        // public filtering : boolean=false;
        this.citiesdata = ["Ahmedabad", "Bengaluru", "Chandigarh", "Chennai", "Coimbatore", "Delhi",
            "Gurgaon", "Hyderabad", "Jaipur", "Kochi", "Kolkata", "Lucknow", "Ludhiana", "Mumbai", "Nagpur", "Pune", "Surat",
            "Thiruvananthapuram"];
        this.statesdata = ["All India", "Andaman &amp; Nicobar Islands", "Andhra Pradesh",
            "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra &amp; Nagar Haveli",
            "Daman &amp; Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu &amp; Kashmir",
            "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur",
            "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
            "Telangana", "Tripura", "Uttar Pradesh", "Uttaranchal", "West Bengal"];
        this.locationSearch = false;
        this.url = ["assets/images/olx.gif", "assets/images/olx1.gif", "assets/images/olx3.gif",
            "assets/images/olx4.gif", "assets/images/olx5.gif", "assets/images/olx6.gif"];
        this.display = ["assets/images/olx.gif"];
        this.i = 1;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.country = this.citiesdata.concat(this.statesdata);
    };
    HomeComponent.prototype.myclick = function () {
        this.i < this.url.length ? this.display = this.url[this.i] : this.url[this.i = 0];
        this.i++;
    };
    HomeComponent.prototype.displayCities = function () {
        this.locationSearch = true;
    };
    HomeComponent.prototype.deleteSelectedcities = function () {
        this.locationSearch = false;
    };
    HomeComponent.prototype.cities = function (select) {
        console.log(select);
        this.data = select.path[0].childNodes[0].data;
        console.log(this.data);
        this.textfield = this.data;
        this.locationSearch = false;
        this.search = '';
    };
    HomeComponent.prototype.removeSelectedCity = function () {
        this.textfield = "";
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/jobs/jobs.component.css":
/***/ (function(module, exports) {

module.exports = "\nbody{\n    margin: 0;\n    padding: 0;\n}\n.outline{\n    border: 1px solid lightblue;\n    margin-top: 30px;\n    height: 600px;\n    \n}\n.background{\n    background-color: rgb(209, 223, 228, 0.4);\n    height: 600px;\n    \n}\n.left{\n    padding-left: 0px;\n}\n/* li:hover{\n    width: 100%;\n    background-color: white;\n    border: 1px solid white;\n} */\n.list>li{\n    list-style: none;\n    \n    padding-top: 21px;\n}\n.list>li>a:hover{\n    text-decoration: none;\n    color: red;\n\n}\n.line{\n    border-bottom: 1px solid lightblue;\n    padding-bottom: 10px;\n}\n.li{\n    padding-top: 20px;\n}\n.anchor:hover{\n    text-decoration: none;\n    color: red;\n}\n.top{\n    margin-top: 18px;\n}\n.size{\n    font-size: 22px;\n    margin: 0;\n}\n.box:hover{\n    border: 2px solid rgb(122, 108, 201);\n    padding: 8px;\n    border-radius: 5px;\n    \n    \n}\na:hover{\n    text-decoration: none;\n}"

/***/ }),

/***/ "./src/app/jobs/jobs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n\n    <a routerLink='/india' class=\"anchor\">\n      <img src=\"./assets/images/jobs/map-marker.svg\" width=\"2%\" style=\"padding-bottom: 7px\">\n      <b style=\"font-size: 18px\">All India</b>\n      <small>(Select your city to see local ads)</small>\n    </a>\n  </div>\n</div>\n<div class=\"col-sm-12 line\">\n  <img src=\"./assets/images/jobs/jobs.png\" class=\"col-sm-2\">\n  <span class=\"col-sm-10\">\n    <p class=\"size\">Jobs</p>\n    1,78,016 Ads\n    <br>\n    <a routerLink=''>View all Ads >></a>\n  </span>\n</div>\n<div class=\"col-sm-12\" style=\"padding-top: 30px\">\n  <div class=\"col-sm-2 box text-center\">\n\n\n    <a routerLink=''>\n      <img src=\"./assets/images/jobs/dataentry.png\">\n      <br> Data entry &\n      <br>Bank office</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/jobs/bpo.png\">\n      <br> BPO &\n      <br>Telecaller</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/jobs/oparator.png\">\n      <br> Operator &\n      <br>Technician</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/jobs/sales.png\">\n      <br> Sales &\n      <br>Marketing</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/jobs/cook.png\">\n      <br> Cook\n    </a>\n  </div>\n</div>\n<div class=\"col-sm-12\" style=\"padding-top: 30px\">\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/jobs/driver.png\">\n      <br> Driver\n    </a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/jobs/hotel.png\">\n      <br> Hotel & Travel\n      <br>Executive</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/jobs/itengg.png\">\n      <br> IT Engineer&\n      <br>Developer</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/jobs/designer.png\">\n      <br> Designer\n    </a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/jobs/officeasst.png\">\n      <br> Office\n      <br>Assistant\n    </a>\n  </div>\n</div>\n<div class=\"col-sm-12\" style=\"padding-top: 30px\">\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/jobs/recetionist.png\">\n      <br> Receptionist\n      <br> Front office</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/jobs/truck.png\">\n      <br> Delivery &\n      <br>Collection</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/jobs/accounts.png\">\n      <br> Accountant\n    </a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/jobs/teacher.png\">\n      <br> Teacher\n    </a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/jobs/others.png\">\n      <br> Others\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/jobs/jobs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobsComponent = /** @class */ (function () {
    function JobsComponent() {
    }
    JobsComponent.prototype.ngOnInit = function () {
    };
    JobsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-jobs',
            template: __webpack_require__("./src/app/jobs/jobs.component.html"),
            styles: [__webpack_require__("./src/app/jobs/jobs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JobsComponent);
    return JobsComponent;
}());



/***/ }),

/***/ "./src/app/login.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loginServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var loginServices = /** @class */ (function () {
    function loginServices(http) {
        this.http = http;
    }
    loginServices.prototype.SubmitLogin = function (getDetails) {
        return this.http.post("http://localhost:3001/v1/add/createAdd", getDetails);
    };
    loginServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], loginServices);
    return loginServices;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "\n.card-container.card {\n    max-width: 400px;\n    padding: 40px 40px;\n}\n\n.btn {\n    font-weight: 700;\n    height: 36px;\n  }\n\n/*\n * Card component\n */\n\n.card {\n    background-color: #F7F7F7;\n    /* just in case there no content*/\n    top: 80px;\n    padding: 20px 25px 30px;\n    margin: 5px auto 25px;\n    }\n\n.profile-img-card {\n    width: 96px;\n    height: 96px;\n    margin: 0 auto 10px;\n    display: block;\n    border-radius: 50%;\n    }\n\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n\n    margin-bottom: 10px;\n}\n\n.form-signin .form-control:focus {\n    border-color: rgb(104, 145, 162);\n}\n\n.btn.btn-signin {\n    /*background-color: #4d90fe; */\n    background-color: rgb(104, 145, 162);\n    /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n    padding: 0px;\n    font-weight: 700;\n    font-size: 14px;\n    height: 36px;\n    border-radius: 3px;\n    border: none;\n    -webkit-transition: all 0.218s;\n    transition: all 0.218s;\n}\n\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n    background-color: rgb(12, 97, 33);\n}\n\n.register{\n    color: rgb(104, 145, 162);\n    float: right;\n}\n\n.main-container{\n/* background-image: url('../../assets/images/loginbg.jpg'); */\nbackground-repeat: no-repeat;\n/* width:80%;\nheight:70%; */\n}\n\n.btn-facebook{\n    \n    background-color: #4e6cab;\n    color: #fff;\n    margin:20px 20px 0px 20px;\n    font-size: 12px;\n    padding:6px 5px !important;\n    \n    }\n\n.btn-google{\n        margin-top: 14px;\n        background-color: white;\n        color: #fff;\n        font-size: 12px;\n    \n    }\n\n.btn > a{\n    color:#fff;\n    text-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.0.8/css/all.css\">\n<div class=\"main-container\">\n    <div class=\"container\">\n        <div class=\"card card-container\">\n\n            <h1 style=\"text-align:center\">LOGIN</h1>\n            <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\n            \n            <form class=\"form-signin\">\n                \n                <input type=\"email\" [(ngModel)]=\"loginData.email\" #email=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" name=\"email\"\n                    id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\">\n                <div [hidden]=\"email.dirty ||email.untouched\" class=\"alert alert-info\">please fill this field</div>\n                <div [hidden]=\"email.valid\" class=\"alert alert-info\">Please enter a valid email </div>\n                <input type=\"password\" [(ngModel)]=\"loginData.password\" name=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\">\n                <div id=\"remember\" class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" value=\"remember-me\"> Remember me\n                    </label>\n                </div>\n                \n                <button (click)=\"loginUser()\" class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">Sign in</button>\n            \n            </form>\n            <!-- /form -->\n            <a href=\"#\" class=\"forgot-password\">\n                Forgot the password?\n            </a>\n            <a routerLink='/signup' class=\"register\">Register</a>\n\n\n            <div class=\"row\">\n                <button class=\"btn col-xs-5 btn-facebook\">\n                    <i class=\"fab fa-facebook-f\"></i>   Login with facebook</button>\n                  <button  class=\"g-signin2 btn-google\" data-onsuccess=\"onSignIn\"  (click)=\"onSignIn()\">\n                    <i class=\"fab fa-google-plus-g\"></i>  Login with Google</button>\n                    </div>\n        </div>\n        \n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_services__ = __webpack_require__("./src/app/login.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, LoginServices) {
        this.route = route;
        this.LoginServices = LoginServices;
        this.loginData = {
            password: '',
            name: '',
            email: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        // console.log(this.loginData);
        this.udata = this.loginData;
        console.log(this.udata.email);
        if (!this.udata.email) {
            alert("Please Provide Email");
        }
        else if (!this.udata.password) {
            alert("Please Provide Password");
        }
        else {
            this.LoginServices.SubmitLogin(this.udata)
                .subscribe(function (response) {
                console.log(response);
            });
            this.route.navigate(['']);
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__login_services__["a" /* loginServices */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mobile/mobile.component.css":
/***/ (function(module, exports) {

module.exports = "\nbody{\n    margin: 0;\n    padding: 0;\n}\n.outline{\n    border: 1px solid lightblue;\n    margin-top: 30px;\n    height: 600px;\n    \n}\n.background{\n    background-color: rgb(209, 223, 228, 0.4);\n    height: 600px;\n    \n}\n.left{\n    padding-left: 0px;\n}\n/* li:hover{\n    width: 100%;\n    background-color: white;\n    border: 1px solid white;\n} */\n.list>li{\n    list-style: none;\n    \n    padding-top: 21px;\n}\n.list>li>a:hover{\n    text-decoration: none;\n    color: red;\n\n}\n.line{\n    border-bottom: 1px solid lightblue;\n    padding-bottom: 10px;\n}\n.li{\n    padding-top: 20px;\n}\n.anchor:hover{\n    text-decoration: none;\n    color: red;\n}\n.top{\n    margin-top: 18px;\n}\n.size{\n    font-size: 22px;\n    margin: 0;\n}\n.box:hover{\n    border: 2px solid rgb(122, 108, 201);\n    padding: 8px;\n    border-radius: 5px;\n    \n    \n}\na:hover{\n    text-decoration: none;\n}"

/***/ }),

/***/ "./src/app/mobile/mobile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n\n    <a routerLink='/india' class=\"anchor\">\n      <img src=\"./assets/images/jobs/map-marker.svg\" width=\"2%\" style=\"padding-bottom: 7px\">\n      <b style=\"font-size: 18px\">All India</b>\n      <small>(Select your city to see local ads)</small>\n    </a>\n  </div>\n</div>\n<div class=\"col-sm-12 line\">\n  <img src=\"./assets/images/mobiles/mobiles.png\" class=\"col-sm-2\">\n  <span class=\"col-sm-10\">\n    <p class=\"size\">Mobiles</p>\n    1,78,016 Ads\n    <br>\n    <a routerLink=''>View all Ads >></a>\n  </span>\n</div>\n<div class=\"col-sm-12\" style=\"padding-top: 30px\">\n  <div class=\"col-sm-2 box text-center\">\n\n\n    <a routerLink=''>\n      <img src=\"./assets/images/mobiles/phones.png\">\n      <br> Mobile Phones</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/mobiles/tablets.png\">\n      <br> Tablets</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/mobiles/accessories.png\">\n      <br> Accessories</a>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/mobile/mobile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MobileComponent = /** @class */ (function () {
    function MobileComponent() {
    }
    MobileComponent.prototype.ngOnInit = function () {
    };
    MobileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mobile',
            template: __webpack_require__("./src/app/mobile/mobile.component.html"),
            styles: [__webpack_require__("./src/app/mobile/mobile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MobileComponent);
    return MobileComponent;
}());



/***/ }),

/***/ "./src/app/myaccount/myaccount.component.css":
/***/ (function(module, exports) {

module.exports = ".border{\n    height: 600px;\n    border-bottom: 1px solid lightblue;\n    border-right: 1px solid lightblue;\n    border-left: 1px solid lightblue;\n    position: relative;\n}\n.center{\n    position: absolute;\n    left: 0;\n    top: 25%;\n    width: 100%;\n    text-align: center;\n    font-size: 18px;\n}\n.plus{\n    height: 5px;\n}\n.account{\n    border: 1px solid lightblue;\n    border-radius: 5px;\n    padding-bottom: 55px;\n    padding-top: 10px;\n    margin-top: 22px;\n}\n.navbar-inverse {\n    background-color: white;\n    border-color: white;\n    border-bottom: 1px solid lightblue;\n}\n.navbar-nav>a {\n    color:blue;\n    background-color:white;\n}\n.navbar-inverse .navbar-nav>li>a{\n    color: blue;\n}\n.navbar-inverse .navbar-nav>li>a:hover{\n    color: red;\n}\n.navbar-right{\n    margin-right: 0px;\n    margin-top: 15px;\n}\n.panel-default1 {\n    margin-top: 0px;\n    margin: 10px;\n    background-color: white;\n}\n.form-control{\n    width: 25%;\n}\n.save{\n    font-size: 18px;\n    padding: 3px 22px;\n}\n.delete{\n    font-size: 15px;\n    text-align: center;\n    margin-top: 20px;\n}\n.cntrycod {\n    z-index: 1000;\n    position: absolute;\n    font-size: 14px;\n    font-weight: normal;\n    color: #000;\n    padding-bottom: 5px;\n    padding-left: 7px;\n    padding-right: 7px;\n    padding-top: 5px;\n}\n\n"

/***/ }),

/***/ "./src/app/myaccount/myaccount.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-sm-12\">\n    <div class=\"col-sm-6\">\n      <h4>Your OLX Ads</h4>\n      <p>You can manage your Active & Inactive Ads here</p>\n    </div>\n    <div class=\"col-sm-3 col-sm-offset-3 pull-left account\">\n      Account balance\n    </div>\n  </div>\n  <br>\n\n  <div>\n    <tabset>\n      <tab heading=\"Ads\" id=\"tab1\" class=\"border\">\n        <div class=\"center\">\n          <img src=\"./assets/images/ads1.png\">\n          <br> You don't have active Ads. Place an ad now!\n          <br>\n          <br>\n          <a type=\"button\" class=\"btn btn-primary btn-lg\" routerLink=\"/submit-ad\" routerLinkActive=\"submit-btn\">\n            <span class=\"plus\">+ </span>\n            Submit a Free Ad</a>\n        </div>\n      </tab>\n      <tab heading=\"Messages\" class=\"border\">\n        <nav class=\"navbar navbar-inverse\">\n          <div class=\"container-fluid\">\n\n            <ul class=\"nav navbar-nav\">\n              <li>\n                <a href=\"#\">Inbox</a>\n              </li>\n              <li>\n                <a href=\"#\">Sent</a>\n              </li>\n              <li>\n                <a href=\"#\">Archive</a>\n              </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n              <input type=\"search\" placeholder=\"Ad title..\">\n            </ul>\n          </div>\n        </nav>\n\n        <div class=\"center\">\n          <img src=\"./assets/images/messages.png\">\n        </div>\n      </tab>\n      <tab heading=\"Payments\" class=\"border\">\n        <nav class=\"navbar navbar-inverse\">\n          <div class=\"container-fluid\">\n\n            <ul class=\"nav navbar-nav\">\n              <li>\n                <a href=\"#\">History</a>\n              </li>\n              <li>\n                <a href=\"#\">E-invoices</a>\n              </li>\n\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n              <input type=\"search\" placeholder=\"Search for payments..\">\n            </ul>\n          </div>\n        </nav>\n        <div class=\"center\">\n          Empty payment history.\n        </div>\n      </tab>\n      <tab heading=\"Settings\" class=\"border\">\n        <accordion class=\"panel-default1 \">\n          <accordion-group heading=\"Change contact details\">\n            <div class=\"form-group \">\n              <div>\n                <label>State</label>\n                <br>\n\n                <select class=\"form-control\">\n                  <option>Choose</option>\n                </select>\n              </div>\n              <div>\n                <label>Name*</label>\n                <br>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n              <br>\n              <div>\n                <input type=\"checkbox\"> Hide the link to 'All my Ads'\n              </div>\n              <br>\n              <button type=\"button\" class=\"btn btn-primary save\">Save</button>\n            </div>\n          </accordion-group>\n          <accordion-group heading=\"Change phone\">\n            <div class=\"form-group\">\n              <label>New phone</label>\n              <br>\n              <input type=\"text\" maxlength=\"10\" class=\"form-control\">\n              <span class=\"cntrycod\">+91</span>\n              <br>\n              <button type=\"button\" class=\"btn btn-primary save\">Save</button>\n            </div>\n          </accordion-group>\n          <accordion-group heading=\"Create password\">\n            <div class=\"form-group\">\n              <label>New password*</label>\n              <br>\n              <input type=\"text\" class=\"form-control\">\n              <br>\n              <label>Repeat new password*</label>\n              <br>\n              <input type=\"text\" class=\"form-control\">\n              <br>\n              <button type=\"button\" class=\"btn btn-primary save\">Create password</button>\n            </div>\n          </accordion-group>\n          <accordion-group heading=\"Change email\">\n            <div class=\"form-group\">\n              <label>New email</label><br>\n              <input type=\"text\" class=\"form-control\"><br>\n              <button type=\"button\" class=\"btn btn-primary save\">Save</button>\n            </div>\n          </accordion-group>\n          <accordion-group heading=\"Email notifications\">\n            <input type=\"checkbox\"> Yes, I want to receive newsletter <br><br>\n            <input type=\"checkbox\"> Yes, I want to receive e-mail notifications of messages <br><br>\n            <input type=\"checkbox\"> Yes, I want to receive e-mail alerts about new listings <br><br>\n            <button type=\"button\" class=\"btn btn-primary save\">Save</button>\n          </accordion-group>\n          <accordion-group heading=\"Delete account\">\n            <button type=\"button\" class=\"btn btn-danger delete\">Delete Account</button>\n          </accordion-group>\n        </accordion>\n      </tab>\n    </tabset>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/myaccount/myaccount.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAccordionConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyaccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_accordion__ = __webpack_require__("./node_modules/ngx-bootstrap/accordion/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function getAccordionConfig() {
    return Object.assign(new __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_accordion__["a" /* AccordionConfig */](), { closeOthers: true });
}
var MyaccountComponent = /** @class */ (function () {
    function MyaccountComponent() {
    }
    MyaccountComponent.prototype.ngOnInit = function () {
    };
    MyaccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-myaccount',
            template: __webpack_require__("./src/app/myaccount/myaccount.component.html"),
            styles: [__webpack_require__("./src/app/myaccount/myaccount.component.css")],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_accordion__["a" /* AccordionConfig */], useFactory: getAccordionConfig }]
        }),
        __metadata("design:paramtypes", [])
    ], MyaccountComponent);
    return MyaccountComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "body{\n    padding: 0px; margin: auto;\n }\n h1,h2,h3,h4,div,ul,li,nav,footer,section{\n    margin: auto; padding: 0px;\n }\n .clear{\n    clear: both;\n }\n .nav-settings{\n    padding-top: 5px;\n    padding-bottom:12px;\n }\n .matter-setting{\n    text-align: left;padding-right: 25px;padding-top: 45px;font-size: 20px;font-weight: normal;line-height: 20px;\n }\n .lang-selector{\n    color: #787878; right: 0px; top: 0px;line-height: 10px;background: #f7f8f9;padding:10px; border-radius: 0px 0px 5px 5px;float: right !important;\n }\n .small{\n    font-size: 15px !important;font-weight: 200;\n }\n .video-set{\n    text-align: center;\n }\n .marginslanguage{\n    margin-right: 5px !important;\n }\n .set-ul{\n    list-style: none;float: right;\n }\n .set-ul>::before{\n    content: \"|\"; color: #999999;padding: 0 .4em 0 .2em;\n }\n .set-list{\n    display: inline-block; zoom: 1;\n }\n .addingaccount{\n    float: right !important;padding-right: 0px !important;\n }\n .adding-account{\n    list-style: none;padding-top: 10px; float: right;\n }\n .adding-account>li{\n    display: inline-block; padding: 0px 0px 0px 25px;\n }\n .adding-account>li>a{\n    text-decoration:none;\n }\n .adding-account>li:nth-child(2){\n    padding: 0px;\n }\n .formdetails{\n    background-color: rgba(49, 112, 143, 0.32);padding: 20px 0px; border-radius: 8px;\n }\n .input-type{\n    padding: 5px 5px 5px 10px ;border-radius: 5px; margin-left: 5px;\n }\n .input-add-search{\n    width: 65%; padding: 5px 5px 5px 10px ;border-radius: 5px;margin-left: 5px;\n }\n .search-button{\n    height: 35px;\n    width: 10%;\n    background-color: blue;\n    margin-left: 10px;\n    padding: 0px;\n    border: 2px solid white;\n }\n .banner-image{\n    background-color: black; height: 300px;margin:10px 0px;\n }\n table{\n    border-collapse: collapse;\n }\n .setting-rows{\n    width: 24%;border-color: #999999; border-left:white; border-top: white; padding: 10px 5px;\n }\n .setting-rows a{\n    text-decoration: none;\n }\n .setting-borders{\n    text-align: center;  padding:20px 0px;\n \n }\n .setting-borders td{\n    vertical-align: top;\n }\n .setgif{\n    /* float: right ! important; */\n    text-align: right;\n    padding: 10px  15px 0px 5px;\n }\n .icongrid>tr>td:nth-child(1){\n    border-top: none; border-left: none; border-bottom: #999999; border-right: #999999;\n }\n .downbanner{\n    background-image: url(\"/assets/images/backgroundlogo.png\");\n    background-repeat: no-repeat; \n    background-size: 100%; \n    margin-top: 40px;\n    border-bottom: 2px solid rgba(153, 153, 153, 0.05); \n    height: 157px ! important;\n }\n .set-down-bannerimage{\n  text-align: center;margin-bottom: 10px;border-bottom: 2px solid rgba(153, 153, 153, 0.05);height: 157px ! important;\n }"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.0.8/css/all.css\">\n\n<div class=\"container\" >\n<nav class=\"col-xs-12 nav-settings\">\n \n   <div class=\"col-xs-6 text-right\">\n     <div class=\"col-xs-2\">\n       <a routerLink=\"\">\n         <img src=\"assets/images/olxlogo2.PNG\" alt=\"olx image\">\n       </a>\n     </div>\n     <div class=\"col-xs-10  matter-setting\">\n       <span>India's Largest Marketplace</span>\n     </div>\n   </div>\n\n   <div class=\"col-xs-6\">\n     <div class=\"col-xs-5 lang-selector small\">\n       <span class=\"marginslanguage\">Select language</span>\n       <ul class=\"set-ul\">\n         <li class=\"set-list\">\n           <span>English</span>\n         </li>\n         <li class=\"set-list\">\n           <span>\n             <a href=\"\">हिंदी</a>\n           </span>\n         </li>\n       </ul>\n     </div>\n\n     <div class=\"col-xs-8  addingaccount\">\n       <ul class=\"adding-account\">\n         <li>\n           <a routerLink=\"/signup\">\n               <i class=\"fa fa-user\"></i>\n           </a>\n         </li>\n         <li>\n           <a routerLink=\"/login\">\n             MyAccount\n           </a>\n         </li>\n         <li >\n           <!-- <button  class=\"submitfreeadd\"> Submit a Free Ad</button> -->\n           <a type=\"button\" class=\"btn btn-primary btn-lg\" routerLink=\"/submit-ad\"  routerLinkActive=\"submit-btn\">Submit a Free Ad</a>\n         </li>\n       </ul>\n     </div>\n     <div class=\"clear\"></div>\n   </div>\n </nav>\n </div>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_pairwise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/pairwise.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, route) {
        this.router = router;
        this.route = route;
        /* this.router.events.subscribe((event) => {
          console.log(event);
        }); */
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pets/pets.component.css":
/***/ (function(module, exports) {

module.exports = "\nbody{\n    margin: 0;\n    padding: 0;\n}\n.outline{\n    border: 1px solid lightblue;\n    margin-top: 30px;\n    height: 600px;\n    \n}\n.background{\n    background-color: rgb(209, 223, 228, 0.4);\n    height: 600px;\n    \n}\n.left{\n    padding-left: 0px;\n}\n/* li:hover{\n    width: 100%;\n    background-color: white;\n    border: 1px solid white;\n} */\n.list>li{\n    list-style: none;\n    \n    padding-top: 21px;\n}\n.list>li>a:hover{\n    text-decoration: none;\n    color: red;\n\n}\n.line{\n    border-bottom: 1px solid lightblue;\n    padding-bottom: 10px;\n}\n.li{\n    padding-top: 20px;\n}\n.anchor:hover{\n    text-decoration: none;\n    color: red;\n}\n.top{\n    margin-top: 18px;\n}\n.size{\n    font-size: 22px;\n    margin: 0;\n}\n.box:hover{\n    border: 2px solid rgb(122, 108, 201);\n    padding: 8px;\n    border-radius: 5px;\n    \n    \n}\na:hover{\n    text-decoration: none;\n}"

/***/ }),

/***/ "./src/app/pets/pets.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n\n    <a routerLink='/india' class=\"anchor\">\n      <img src=\"./assets/images/jobs/map-marker.svg\" width=\"2%\" style=\"padding-bottom: 7px\">\n      <b style=\"font-size: 18px\">All India</b>\n      <small>(Select your city to see local ads)</small>\n    </a>\n  </div>\n</div>\n<div class=\"col-sm-12 line\">\n  <img src=\"./assets/images/pets/pets.png\" class=\"col-sm-2\">\n  <span class=\"col-sm-10\">\n    <p class=\"size\">Pets</p>\n    1,78,016 Ads\n    <br>\n    <a routerLink=''>View all Ads >></a>\n  </span>\n</div>\n<div class=\"col-sm-12\" style=\"padding-top: 30px\">\n  <div class=\"col-sm-2 box text-center\">\n\n\n    <a routerLink=''>\n      <img src=\"./assets/images/pets/fishes.png\">\n      <br> Fishes &\n      <br>Aquarium</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/pets/dogs.png\">\n      <br> Dogs</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/pets/other.png\">\n      <br> Other &\n      <br>Pets</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/pets/food.png\">\n      <br> Pet Food &\n      <br>Accessories</a>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/pets/pets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PetsComponent = /** @class */ (function () {
    function PetsComponent() {
    }
    PetsComponent.prototype.ngOnInit = function () {
    };
    PetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pets',
            template: __webpack_require__("./src/app/pets/pets.component.html"),
            styles: [__webpack_require__("./src/app/pets/pets.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PetsComponent);
    return PetsComponent;
}());



/***/ }),

/***/ "./src/app/properties/properties.component.css":
/***/ (function(module, exports) {

module.exports = "\nbody{\n    margin: 0;\n    padding: 0;\n}\n.outline{\n    border: 1px solid lightblue;\n    margin-top: 30px;\n    height: 600px;\n    \n}\n.background{\n    background-color: rgb(209, 223, 228, 0.4);\n    height: 600px;\n    \n}\n.left{\n    padding-left: 0px;\n}\n/* li:hover{\n    width: 100%;\n    background-color: white;\n    border: 1px solid white;\n} */\n.list>li{\n    list-style: none;\n    \n    padding-top: 21px;\n}\n.list>li>a:hover{\n    text-decoration: none;\n    color: red;\n\n}\n.line{\n    border-bottom: 1px solid lightblue;\n    padding-bottom: 10px;\n}\n.li{\n    padding-top: 20px;\n}\n.anchor:hover{\n    text-decoration: none;\n    color: red;\n}\n.top{\n    margin-top: 18px;\n}\n.size{\n    font-size: 22px;\n    margin: 0;\n}\n\n"

/***/ }),

/***/ "./src/app/properties/properties.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n\n    <a routerLink='/india' class=\"anchor\">\n      <img src=\"./assets/images/jobs/map-marker.svg\" width=\"2%\" style=\"padding-bottom: 7px\">\n      <b style=\"font-size: 18px\">All India</b>\n      <small>(Select your city to see local ads)</small>\n    </a>\n  </div>\n</div>\n<div class=\"col-sm-12 line\">\n  <img src=\"./assets/images/properties/properties.png\" class=\"col-sm-2\">\n  <span class=\"col-sm-10\">\n    <p class=\"size\">Properties</p>\n    1,78,016 Ads\n    <br>\n    <a routerLink='null'>View all Ads <span> >> </span> </a>\n  </span>\n</div>\n<div class=\"col-sm-12\" style=\"padding-top: 30px\">\n  <div class=\"col-sm-2 box text-center\">\n\n\n    <a routerLink=''>\n      <img src=\"./assets/images/properties/sale.png\">\n      <br> For Sale</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/properties/rent.png\">\n      <br> For Rent</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/properties/projects.png\">\n      <br>New Projects</a>\n  </div>\n  <div class=\"clearfix\"></div>\n\n\n</div>\n<div class=\"clearfix\"></div>\n"

/***/ }),

/***/ "./src/app/properties/properties.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PropertiesComponent = /** @class */ (function () {
    function PropertiesComponent() {
    }
    PropertiesComponent.prototype.ngOnInit = function () {
    };
    PropertiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-properties',
            template: __webpack_require__("./src/app/properties/properties.component.html"),
            styles: [__webpack_require__("./src/app/properties/properties.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PropertiesComponent);
    return PropertiesComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.css":
/***/ (function(module, exports) {

module.exports = "\nbody{\n    margin: 0;\n    padding: 0;\n}\n.outline{\n    border: 1px solid lightblue;\n    margin-top: 30px;\n    height: 600px;\n    \n}\n.background{\n    background-color: rgb(209, 223, 228, 0.4);\n    height: 600px;\n    \n}\n.left{\n    padding-left: 0px;\n}\n/* li:hover{\n    width: 100%;\n    background-color: white;\n    border: 1px solid white;\n} */\n.list>li{\n    list-style: none;\n    \n    padding-top: 21px;\n}\n.list>li>a:hover{\n    text-decoration: none;\n    color: red;\n\n}\n.line{\n    border-bottom: 1px solid lightblue;\n    padding-bottom: 10px;\n}\n.li{\n    padding-top: 20px;\n}\n.anchor:hover{\n    text-decoration: none;\n    color: red;\n}\n.top{\n    margin-top: 18px;\n}\n.size{\n    font-size: 22px;\n    margin: 0;\n}\n.box:hover{\n    border: 2px solid rgb(122, 108, 201);\n    padding: 8px;\n    border-radius: 5px;\n    \n    \n}\na:hover{\n    text-decoration: none;\n}"

/***/ }),

/***/ "./src/app/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n\n    <a routerLink='/india' class=\"anchor\">\n      <img src=\"./assets/images/jobs/map-marker.svg\" width=\"2%\" style=\"padding-bottom: 7px\">\n      <b style=\"font-size: 18px\">All India</b>\n      <small>(Select your city to see local ads)</small>\n    </a>\n  </div>\n</div>\n<div class=\"col-sm-12 line\">\n  <img src=\"./assets/images/services/services.png\" class=\"col-sm-2\">\n  <span class=\"col-sm-10\">\n    <p class=\"size\">Services</p>\n    1,78,016 Ads\n    <br>\n    <a routerLink=''>View all Ads >></a>\n  </span>\n</div>\n<div class=\"col-sm-12\" style=\"padding-top: 30px\">\n  <div class=\"col-sm-2 box text-center\">\n\n\n    <a routerLink=''>\n      <img src=\"./assets/images/services/driver.png\">\n      <br> Driver &\n      <br>Taxi</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/services/education.png\">\n      <br> Education &\n      <br>Classes</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/services/electronics.png\">\n      <br> Electronics &\n      <br>Computer</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/services/healthy.png\">\n      <br> Health &\n      <br>Beauty</a>\n  </div>\n  <div class=\"col-sm-2 box text-center\">\n\n    <a routerLink=''>\n      <img src=\"./assets/images/services/other.png\">\n      <br> Other Services\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-services',
            template: __webpack_require__("./src/app/services/services.component.html"),
            styles: [__webpack_require__("./src/app/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = "\n.card-container.card {\n    max-width: 500px;\n    padding: 40px 40px;\n}\n\n.card {\n    background-color: #F7F7F7;\n    top: 80px;\n    padding: 20px 25px 30px;\n    margin: 0 auto 25px;\n    margin-top: 5px;\n\n}\n\n.btn-facebook{\n    margin-top:20px;\n    background-color: #4e6cab;\n    color: #fff;\n    margin-right: 20px;\n    margin-left: 30px;\n    \n    }\n\n.btn-google{\n        margin-top:20px;\n        background-color: #dd4b39;\n        color:#fff;\n    }\n\na{\n    text-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.0.8/css/all.css\">\n<div class=\"main-container\">\n  <div class=\"container\">\n    <br>\n    <div class=\"text-center\"><h1>Registration</h1></div>\n    <br>\n    <div class=\"card card-container\">\n      <h3 class=\"text-center\">Create Account</h3>\n      <p class=\"text-center\">Get started with your free account</p>\n      <form #regForm='ngForm' (ngSubmit)=\"Register(regForm)\">\n\t\t\t\t\t<div class=\"form-group input-group\">\n              <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n\t\t\t\t\t\t<input [(ngModel)]=\"userdata.name\" name=\"name\" minlength=\"5\" class=\"form-control\" placeholder=\"Full name\" type=\"text\"\n\t\t\t\t\t\t #name=\"ngModel\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div [hidden]=\"(name.dirty || name.untouched || name.invalid) \" class=\"alert alert-info\">Name is required\n          </div>\n          <div class=\"form-group input-group\">\n              <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-envelope\"></i></span>\n              <input [(ngModel)]=\"userdata.email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" #email=\"ngModel\" name=\"email\" class=\"form-control\"\n              placeholder=\"Email address\" type=\"email\">\n            </div>\n              <div [hidden]=\"email.dirty ||email.untouched\" class=\"alert alert-info\">please fill this field</div>\n\t\t\t\t\t    <div [hidden]=\"email.valid\" class=\"alert alert-info\">Please enter a valid email </div>\n          <div class=\"form-group input-group\">\n              <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-earphone\"></i></span>\n              <input name=\"number\" value=\"+91\" class=\"form-control\" placeholder=\"Phone number\" type=\"text\">\n          </div>\n          <!-- form-group end -->\n          <div ngModelGroup=\"password\" #userPassword=\"ngModelGroup\" minlength=\"8\" required>\n          <div class=\"form-group input-group\">\n              <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n              <input id=\"newPassword\" [(ngModel)]=\"userdata.password\" type=\"password\" class=\"form-control\" name=\"pword\" placeholder=\"Password\" minlength=\"8\" required>\n          </div>\n          <div class=\"form-group input-group\">\n              <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n              <input id=\"confirmPassword\" [(ngModel)]=\"userdata.conpassword\" type=\"password\" class=\"form-control\" name=\"conpwd\" placeholder=\"confirm password\" minlength=\"8\" required>\n          </div>\n         \n          <div *ngIf=\"(userPassword.invalid|| userPassword.value?.pword != userPassword.value?.conpwd) && (userPassword.touched)\" class=\"alert alert-info\">\n            {{userPassword.value?.pword+userPassword.value?.conpwd}}  \n            <div *ngIf=\"userPassword.invalid; else nomatch\">\n\t\t\t\t\t\t\t\tPassword must be more than 8 characters\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ng-template #nomatch>\n\t\t\t\t\t\t\t\tPasswords don't match\n              </ng-template>\n              </div>\n            </div>\n            <div class=\"form-group\">\n                <button (click)=\"signUp()\" [disabled]=\"!regForm.form.valid\" type=\"submit\" class=\"btn btn-primary btn-block\"> Create Account </button>\n              </div>\n              <p class=\"text-center\">Have an account?\n                  <a routerLink=\"/login\">Log In</a>\n              </p>\n              <div class=\"row\">\n              <button class=\"btn col-xs-5.5 btn-facebook\">\n                  <i class=\"fab fa-facebook-f\"></i>   signup with facebook</button>\n                <button class=\"btn col-xs-5.5 btn-google\">\n                  <i class=\"fab fa-google-plus-g\"></i>  signup with Google</button>\n                  </div>\n        </form>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent(route) {
        this.route = route;
        this.userdata = {
            conpassword: '',
            name: '',
            email: '',
            password: ''
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signUp = function () {
        // console.log(this.registerData)
        this.var = this.userdata;
        console.log(this.var.email);
        localStorage.setItem('email', this.var.email);
        localStorage.setItem('password', this.var.password);
        this.route.navigate(['/login']);
    };
    SignupComponent.prototype.Register = function (form) {
        console.log(form);
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/submit-ad/submit-ad.component.css":
/***/ (function(module, exports) {

module.exports = "/* ================================== */\n/* customclasses */\n.padding10{\n     padding-left:45px;\n}\n.font-wt{\n     font-weight:500;\n}\n.borderbot{\n     border-bottom:1px solid #e1e1e1;\n}\n.marg-bot{\n     margin-bottom: 20px;\n     padding: 10px;\n}\n/* ============================= */\n.navbar-brand img{\n     height: 80px;\n     width: 80px;\n}\n.language{\n     color: #787878;\n     position: absolute;\n     right: 0px;\n     background: #f7f8f9;\n     padding: 0px 12px;\n     border-radius: 0px 0px 5px 5px;\n}\n.select-lang {\n     display: inline-block;\n     zoom: 1;\n}\n.navbar{\n     width: 970px !important;\n}\n.break> :before {\n     content: \"|\";\n     color: #999999;\n     padding: 0 .4em 0 .2em;\n}\n.caption{\n     top: 50px;\n     position: absolute;\n     font-size: 20px;\n     font-weight: normal;\n}\n.navbar-right {\n     font-size:20px;\n     position:relative;\n     top:40px;\n     margin-right:0 \n}\n.nav>.myaccount>a:focus, .nav>.myaccount>a:hover{\n     background-color: transparent !important;\n     color:#2965be;\n}\na:focus{\n     outline:0px;\n}\n.adSubmitForm{\n     margin:10px;\n}\n.adSubmitForm {\n     width:65%;\n     margin: 2% auto;\n     height: 950px;\n     border: solid 1px #e1e1e1;\n     border-radius: 4px;\n}\n.adSubmitForm h4{\n     font-size:20px;\n     padding:2px 0px 5px 10px;\n     border-bottom:1px solid #e1e1e1;\n}\n.customwidth {\n     width:99%;\n     text-align: center;\n     padding:10px;\n}\n.pricewidth{\n    width:72%;\n    text-align: center;\n    padding:10px;\n}\n.customwidth input{\n     width:55%;\n     margin-left:10px;\n}\n/* .customwidth.active{\n     background-color: red;\n}\n */\n.important-mark{\n     color:red;\n}\n.char-length-msg{\n     width:65%;\n     text-align:center;\n     font-size:11px;\n}\n.categorywidth{\n     width: 103%;\n     margin-bottom: 10px;\n     text-align: center;\n     margin-left: 54px;\n    /* border-bottom:1px solid #e1e1e1;\n     */\n}\n.categorywidth input{\n     margin-left:10px;\n}\n.adDescription{\n     width: 100%;\n     text-align: center;\n     border-top: 1px solid #e1e1e1;\n     padding: 10px 55px 0 0;\n     margin-bottom: 20px;\n}\n.adDescription label{\n     position: relative;\n     bottom:50px;\n     padding-right: 10px;\n}\n.adDescription textarea{\n     height: 140px;\n     width: 400px;\n     resize: none;\n     margin-right: 50px;\n}\n.adDescription .char-length-msg{\n     width:72%;\n}\n.gallery{\n     position: relative;\n     width:100%;\n     padding:0;\n     margin-top:20px \n}\n.img-section{\n     margin:0;\n     border-bottom: 1px solid #e1e1e1;\n}\n.img-section:hover{\n     background-color:#ffa;\n}\n.left-label{\n     padding:0;\n     text-align:right;\n}\n.left-label small{\n     display:inherit \n}\n.icon img{\n     width: 122px;\n     height: 60px;\n}\n.photo-upload{\n    /* width: 87px;\n     height: 72px;\n     */\n     display:-webkit-inline-box;\n     display:-ms-inline-flexbox;\n     display:inline-flex;\n     padding-left:20px;\n     text-align: center;\n     margin-bottom: 10px;\n}\n.photo-upload img{\n     width: 35px;\n     height: 35px;\n}\n.upload-img li {\n     list-style: none;\n}\n.upload-img{\n     border:1px dashed #c5d7b5;\n     width: 87px;\n     height: 72px;\n     margin-right: 10px;\n     background: #e8f4de;\n}\n.upload-img img{\n     position: relative;\n     top: 18px;\n}\n#show-text{\n     font-size: 11px;\n     text-align: center;\n     margin-right: 50px;\n     margin:0 100px 20px 0;\n}\n.contrycode{\n     position: absolute;\n     top: 5px;\n     left: 171px;\n}\n.details{\n     padding:20px 0;\n     margin:10px;\n}\n.phninput, .nameinput,.cityinput{\n     margin-bottom: 20px \n}\n.details .nameinput input{\n     margin-left: 30px;\n     width:40%;\n}\n.details .phninput input{\n     margin-left:25px;\n     width:40%;\n}\n.details .phninput label{\n     margin-left:15px;\n}\n.details .cityinput input{\n     margin-left:25px;\n     width:40%;\n}\n.details .cityinput label{\n     margin-left: 38px;\n}\n.submitbtn{\n     padding:30px;\n}\n.submitbtn button{\n     width:170px;\n     background-color:#fc793f;\n     padding:10px;\n     color:#fff;\n     font-size:20px;\n}\n/* .callcenterBox {\n    position: fixed;\n    right: 0px;\n    top: 50%;\n    background: #fff;\n    height: 133px;\n    border: 1px solid #dedede;\n    border-right: none;\n    padding-left: 35px;\n    margin-top: -66px;\n    -webkit-border-radius: 2px 0px 0px 2px;\n    border-radius: 2px 0px 0px 2px;\n    width: 0;\n    -webkit-transition: width 0.5s;\n    transition: width 0.5s;\n    z-index: 10;\n}\n.callcenterBox .boxcontent {\n    width: 194px;\n    height: 111px;\n    padding-top: 22px;\n    font-size: 13px;\n    line-height: 20px;\n    text-align: center;\n}\n.callcenterBox .boxcontent .number {\n    font-size: 15px;\n    margin: 6px 0px 3px;\n    font-weight: bold;\n}\n\n\n.block {\n    display: block;\n}\n\n.callcenterBox .boxcontent .number a {\n    color: #ff7700;\n}\n.color-1 {\n    color: #a0a0a0;\n}\n.callcenterBox a.slider {\n    width: 35px;\n    display: block;\n    height: 133px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background:#2965be url('../../assets/images/chathelp.png') no-repeat 50% 35px;\n    color: #fff;\n    text-indent: -1000em;\n    -webkit-border-radius: 2px;\n    border-radius: 2px;\n} */\n.helpbox{\n    position:fixed;\n    left:86%;\n    top:52%;\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n \n    \n}\n.helpbox .btn{\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    font-size:22px;\n\n}\n.helpbox-text{\n    \n    -webkit-transform: rotate(90deg);\n    \n            transform: rotate(90deg);\n  \n    \n\n}\n.helpbox-text1{\n    position: absolute;\n    bottom: -48px;\n    width: 150px;\n    height: 140px;\n    left: 94px;\n    border: 1px solid rgb(17, 16, 16);\n    \n\n}\n.box{\n    border:  1px solid blue;\n    border-radius: 50%;\n    background-color: blue;\n    width:25px;\n    height:25px;\n    color:white;\n   }\n.shade{\n    border: 1px dashed #cbd2d7;\n    display: inline-block;\n    padding:30px;\n    background: #f4f4f4;\n    margin-right: 10px;\n    cursor: pointer;\n   }\n.photo-upload .shade:first-child {\n    background: #e8f4de;\n   }\n.shade label{\n    border: 1px dotted grey;\n    cursor: pointer;\n   }\n.box span{\n    position: relative;\n    top: -2px;\n    font-size:20px;\n   }\n.alert-info{\n   \n    color: #fa3909 !important;\n    background:none !important;\n    border: none !important;\n   }\ntable{\n    border-collapse: collapse;\n }\n.setting-rows{\n     width: 24%;\n    border-color: #999999;\n     border-left:white;\n     border-top: white;\n     padding: 10px 5px;\n}\n.setting-rows a{\n     text-decoration: none;\n}\n.setting-borders{\n     text-align: center;\n     padding:20px 0px;\n}\n.setting-borders td{\n     vertical-align: top;\n}\n.setgif{\n    /* float: right ! important;\n     */\n     text-align: right;\n     padding: 10px 15px 0px 5px;\n}\n.icongrid>tr>td:nth-child(1){\n     border-top: none;\n     border-left: none;\n     border-bottom: #999999;\n     border-right: #999999;\n}\n.modal-content{\n     height: 350px;\n     width: 750px !important;\n     overflow: auto;\n}\n.nohover a:hover {\n     background-color: transparent;\n}\n.nav>li>a {\n     padding: 2px 2px;\n}\n.nav>li>a:hover{\n     color: red;\n}\n/* .sidebar{\n     background-color: rgba(212, 184, 184, 0.5607843137254902);\n}\n */\n \n"

/***/ }),

/***/ "./src/app/submit-ad/submit-ad.component.html":
/***/ (function(module, exports) {

module.exports = "<section >\n  <div class=\"conatiner\">\n    <div class=\"row\">\n      <div class=\"adSubmitForm\">\n        <form class=\"form-inline\" (ngSubmit)=\"onSubmit(f)\" #f='ngForm'>\n          <h4>Submit a Free Classified Ad</h4>\n          <div class=\"customwidth form-group active\">\n            <label for=\"title\" class=\"font-wt\">Ad Title\n              <span class=\"important-mark\">\n                *\n              </span>\n            </label>\n\n            <input type=\"text\" class=\"form-control\" id=\"title\" maxlength=\"70\" (keyup)=\"counttitle(msg)\" name=\"title\" [(ngModel)]=\"log.title\" #title=\"ngModel\">\n            <p class=\"char-length-msg\">\n              <b>{{charactersleft}}</b> characters left</p>\n            <div [hidden]=\"title.dirty || title.untouched\" class=\" alert-info\">This field is manditory please enter title</div>\n\n          </div>\n\n          <div class=\"categorywidth form-group\" (click)=\"openModal(template)\">\n            <label class=\"font-wt\">Category\n              <span class=\"important-mark\">\n                *\n              </span>\n            </label>\n\n            <input type=\"text\" class=\"form-control\" id=\"category\" name=\"category\" [(ngModel)]=\"log.category\" #category=\"ngModel\">\n\n            <label for=\"categories\">\n              <img src=\"/assets/images/category-icon.png\" id=\"categories\">\n            </label>\n            <div [hidden]=\"category.dirty || category.untouched\" class=\" alert-info\">This field is manditory please enter category</div>\n\n          </div>\n          <div class=\"form-group pricewidth\">\n              <label class=\"font-wt\">Price\n                  <span class=\"important-mark\">\n                    *\n                  </span>\n                </label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"log.price\">\n          </div><br>\n          <div class=\"adDescription\">\n            <label class=\"font-wt\">Ad Description\n              <span class=\"important-mark\">\n                *\n              </span>\n            </label>\n            <textarea class=\"form-control\" name=\"description\" maxlength=\"4096\" (keyup)=\"count(msg)\" placeholder=\"Include the brand,model,age and any included accessories\"\n              [(ngModel)]=\"log.description\" #description=\"ngModel\"></textarea>\n\n\n            <p class=\"char-length-msg\">\n              <b>{{characterleft}}\n              </b> characters left</p>\n            <div [hidden]=\"description.dirty || description.untouched\" class=\" alert-info\">This field is manditory please enter description</div>\n\n          </div>\n          <div class=\"row img-section\">\n            <div class=\"gallery col-xs-12\">\n              <div class=\"left-label col-xs-3\">\n                <label for=\"photos\">Upload Photos</label>\n                <small>Ads with photos sell faster</small>\n                <span class=\"icon\"></span>\n                <img src=\"/assets/images/gallery.png\">\n\n              </div>\n              <div class=\"photo-upload col-xs-9\">\n                <div class=\"shade\">\n                  <label for='plus' class=\"box\">\n                    <span>+</span>\n                  </label>\n                  <input type=\"file\" id=\"plus\" style=\"display:none\">\n                </div>\n                <div class=\"shade\">\n                  <label for='plus' class=\"box\">\n                    <span>+</span>\n                  </label>\n                  <input type=\"file\" id=\"plus\" style=\"display:none\">\n                </div>\n                <div class=\"shade\">\n                  <label for='plus' class=\"box\">\n                    <span>+</span>\n                  </label>\n                  <input type=\"file\" id=\"plus\" style=\"display:none\">\n                </div>\n                <div class=\"shade\">\n                  <label for='plus' class=\"box\">\n                    <span>+</span>\n                  </label>\n                  <input type=\"file\" id=\"plus\" style=\"display:none\">\n                </div>\n\n              </div>\n\n            </div>\n            <div>\n              <p id=\"show-text\">If you have problems with flash please use\n                <a href=\"#\">simpler form</a>\n              </p>\n            </div>\n          </div>\n          <div class=\"details\">\n            <div class=\"form-group col-sm-offset-2 col-sm-10 nameinput\">\n              <label for=\"name\">Name\n                <span class=\"important-mark\">\n                  *\n                </span>\n              </label>\n              <input [(ngModel)]=\"log.name\" #name='ngModel' name=\"fullname\" id=\"name\" type=\"text\" class=\"form-control\">\n              <div [hidden]=\"name.dirty || name.untouched\" class=\" alert-info\">This field is manditory please enter name</div>\n\n            </div>\n            <div class=\"form-group col-sm-offset-1 col-sm-10 phninput\">\n              <label for=\"phnnum\">Phone Number\n                <span class=\"important-mark\">\n                  *\n                </span>\n              </label>\n              <input [(ngModel)]=\"log.mobile\" #mobile='ngModel' name=\"phonenmber\" id=\"phnnum\" type=\"text\" class=\"form-control\">\n              <div [hidden]=\"mobile.dirty || mobile.untouched\" class=\" alert-info\">This field is manditory please mobile number</div>\n\n            </div>\n            <div class=\"form-group col-sm-offset-1 col-sm-10 cityinput\">\n              <label for=\"city\">Enter a city\n                <span class=\"important-mark\">\n                  *\n                </span>\n              </label>\n              <input [(ngModel)]=\"log.city\" #city='ngModel' name=\"cityname\" id=\"city\" type=\"text\" class=\"form-control\">\n              <div [hidden]=\"city.dirty || city.untouched\" class=\" alert-info\">This field is manditory please enter the city</div>\n\n            </div>\n\n            <!-- \n            <div class=\"form-group col-sm-offset-1 col-sm-10 phninput\">\n              <label for=\"phnnum\">Phone Number\n                <span class=\"important-mark\">\n                  *\n                </span>\n              </label>\n              <span class=\"contrycode\">+91\n              </span>\n              <input id=\"phnnum\" type=\"text\" class=\"form-control\" [(ngModel)]=\"log.phnnum\" #phnnum1='ngModel'>\n              <div [hidden]=\"phnnum.dirty || phnnum.untouched\" class=\"alert-info\">This field is manditory please enter mobile number</div>\n              \n            </div>\n            \n        \n\n            <div class=\"form-group col-sm-offset-1 col-sm-10 cityinput\">\n              <label for=\"city\">Enter a city\n                <span class=\"important-mark\">\n                  *\n                </span>\n              </label>\n              <input id=\"city\" type=\"text\" class=\"form-control\" [(ngModel)]=\"log.city\" #city1='ngModel'>\n              <div [hidden]=\"city.dirty || city.untouched\" class=\" alert-info\">This field is manditory please enter city</div>\n              \n            </div> -->\n\n            <div class=\"col-sm-12 borderbot  text-center\">\n              <p class=\"padding10\">\n                By clicking 'Submit' you agree to our\n                <a href=\"#\">Terms of Use </a>&\n                <a>Posting Rules</a>\n              </p>\n            </div>\n\n          </div>\n          <div class=\"clearfix\"></div>\n          <div class=\"submitbtn\">\n            <button class=\"btn btn-default pull-right\">Submit</button>\n          </div>\n\n\n        </form>\n\n\n\n      </div>\n    </div>\n  </div>\n\n  <!-- <div class=\"helpbox\">\n    <button class=\"btn btn-primary\">\n      <b>Need help?</b>\n    </button>\n    <div class=\"helpbox-text text-center\" *ngIf=\"show\">\n      <p>Need help?</p>\n      <p>\n        <b>call us at</b>\n      </p>\n      <span>\n        <a href=\"tel:1800-103-3333\" id=\"callTollFree\">1800-103-3333</a>\n      </span>\n      <p>(10am - 7pm all 7 days)</p>\n    </div>\n\n\n  </div> -->\n\n\n  <accordion class=\"helpbox\">\n    <accordion-group heading=\"Need help?\" [isOpen]=\"toggleOpen\">\n      <div class=\"helpbox-text text-center\">\n        <p>Need help?</p>\n        <p>\n          <b>call us at</b>\n        </p>\n        <span>\n          <a href=\"tel:1800-103-3333\" id=\"callTollFree\">1800-103-3333</a>\n        </span>\n        <p>(10am - 7pm all 7 days)</p>\n      </div>\n    </accordion-group>\n  </accordion>\n\n</section>\n\n\n<ng-template #template>\n  <div class=\"modal-content\">\n\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Select category</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body text-center\">\n      <div class=\"col-xs-12\">\n        <div class=\"col-xs-2 marg-bot\" (click)=\"openModal2(templateNested)\" (click)=\"clickedOne('Properties')\">\n          <a routerLinkActive=\"active-link\" routerLink='null'>\n            <div>\n              <img src=\"assets/images/home.png\" width=\"60%\" alt=\"home-image\">\n            </div>\n            <div (click)=\"printdata(x)\">\n              <span>Properties</span>\n            </div>\n          </a>\n        </div>\n        <div class=\"col-xs-2 marg-bot\" (click)=\"openModal2(templateNested)\" (click)=\"clickedOne('cars')\">\n          <a routerLinkActive=\"active-link\" routerLink=\"null\">\n            <div>\n              <img src=\"assets/images/car.png\" width=\"60%\" alt=\"car-image\">\n            </div>\n            <div>\n              <span>Cars</span>\n            </div>\n          </a>\n        </div>\n        <div class=\"col-xs-2 marg-bot\" (click)=\"openModal2(templateNested)\" (click)=\"clickedOne('electronics')\">\n          <a routerLinkActive=\"active-link\" routerLink=\"#\">\n            <div>\n              <img src=\"assets/images/electronics.png\" width=\"60%\" alt=\"electronics-image\">\n            </div>\n            <div>\n              <span>Electronics & Applicances</span>\n            </div>\n          </a>\n        </div>\n        <div class=\"col-xs-2 marg-bot\" (click)=\"openModal2(templateNested)\" (click)=\"clickedOne('furniture')\">\n          <a routerLinkActive=\"active-link\" routerLink=\"#\">\n            <div>\n              <img src=\"assets/images/furniture.png\" width=\"60%\" alt=\"furniture-image\">\n            </div>\n            <div>\n              <span>Furniture</span>\n            </div>\n          </a>\n        </div>\n        <div class=\"col-xs-2 marg-bot\" (click)=\"openModal2(templateNested)\" (click)=\"clickedOne('jobs')\">\n          <a routerLinkActive=\"active-link\" routerLink=\"#\">\n            <div>\n              <img src=\"assets/images/jobs.png\" width=\"60%\" alt=\"job-image\">\n            </div>\n            <div>\n              <span>Jobs</span>\n            </div>\n          </a>\n        </div>\n        <div class=\"col-xs-2 marg-bot\" (click)=\"openModal2(templateNested)\" (click)=\"clickedOne('mobiles')\">\n          <a routerLinkActive=\"active-link\" routerLink=\"#\">\n            <div>\n              <img src=\"assets/images/mobiles.png\" width=\"60%\" alt=\"mobiles-image\">\n            </div>\n            <div>\n              <span>Mobiles</span>\n            </div>\n          </a>\n        </div>\n      </div>\n      <div class=\"col-xs-12\">\n        <div class=\"col-xs-2 marg-bot\" (click)=\"openModal2(templateNested)\" (click)=\"clickedOne('bikes')\">\n          <a routerLinkActive=\"active-link\" routerLink=\"#\">\n            <div>\n              <img src=\"assets/images/bikes.png\" width=\"60%\" alt=\"bikes-image\">\n            </div>\n            <div>\n              <span>Bikes</span>\n            </div>\n          </a>\n        </div>\n        <div class=\"col-xs-2 marg-bot\" (click)=\"openModal2(templateNested)\" (click)=\"clickedOne('books')\">\n          <a routerLinkActive=\"active-link\" routerLink=\"#\">\n            <div>\n              <img src=\"assets/images/books-sports.png\" width=\"60%\" alt=\"books-image\">\n            </div>\n            <div>\n              <span>Books,Sports & Hobbies</span>\n            </div>\n          </a>\n        </div>\n        <div class=\"col-xs-2 marg-bot\" (click)=\"openModal2(templateNested)\" (click)=\"clickedOne('fashion')\">\n          <a routerLinkActive=\"active-link\" routerLink=\"#\">\n            <div>\n              <img src=\"assets/images/fashion.png\" width=\"60%\" alt=\"fashion-image\">\n            </div>\n            <div>\n              <span>Fashion</span>\n            </div>\n          </a>\n        </div>\n        <div class=\"col-xs-2 marg-bot\" (click)=\"openModal2(templateNested)\" (click)=\"clickedOne('pets')\">\n          <a routerLinkActive=\"active-link\" routerLink=\"#\">\n            <div>\n              <img src=\"assets/images/pets.png\" width=\"60%\" alt=\"pets-image\">\n            </div>\n            <div>\n              <span>Pets</span>\n            </div>\n          </a>\n        </div>\n        <div class=\"col-xs-2 marg-bot\" (click)=\"openModal2(templateNested)\" (click)=\"clickedOne('services')\">\n          <a routerLinkActive=\"active-link\" routerLink=\"#\">\n            <div>\n              <img src=\"assets/images/services.png\" width=\"60%\" alt=\"services-image\">\n            </div>\n            <div>\n              <span>Services</span>\n            </div>\n          </a>\n        </div>\n      </div>\n      <!-- <mat-tab-group>\n        <mat-tab label=\"Tab 1\">Content 1</mat-tab>\n        <mat-tab label=\"Tab 2\">Content 2</mat-tab>\n      </mat-tab-group> -->\n    </div>\n  </div>\n</ng-template>\n\n\n<ng-template #templateNested>\n  <div class=\"modal-content\">\n\n    <div class=\"modal-body col-sm-12\">\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef2.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n\n      <div class=\"col-sm-4 sidebar\">\n\n        <ul class=\"nav nav-sidebar\">\n\n          <li>\n            <b>Category</b>\n          </li>\n          <br>\n\n          <li class=\"nohover\">\n            <a routerLinkActive=\"active-link\" routerLink='#' (click)=\"clickedOne('Properties')\">Properties\n              <span> > </span>\n            </a>\n          </li>\n\n          <li class=\"nohover\">\n            <a routerLinkActive=\"active-link\" routerLink='#' (click)=\"clickedOne('cars')\">Cars\n              <span> > </span>\n            </a>\n          </li>\n          <li class=\"nohover\">\n            <a routerLinkActive=\"active-link\" routerLink='#' (click)=\"clickedOne('electronics')\">Electronics-Appliances\n              <span> > </span>\n            </a>\n          </li>\n          <li class=\"nohover\">\n            <a routerLinkActive=\"active-link\" routerLink='#' (click)=\"clickedOne('furniture')\">Furniture\n              <span> > </span>\n            </a>\n          </li>\n          <li class=\"nohover\">\n            <a routerLinkActive=\"active-link\" routerLink='#' (click)=\"clickedOne('jobs')\">Jobs\n              <span> > </span>\n            </a>\n          </li>\n          <li class=\"nohover\">\n            <a routerLinkActive=\"active-link\" routerLink='#' (click)=\"clickedOne('mobiles')\">Mobiles\n              <span> > </span>\n            </a>\n          </li>\n          <li class=\"nohover\">\n            <a routerLinkActive=\"active-link\" routerLink='#' (click)=\"clickedOne('bikes')\">Bikes\n              <span> > </span>\n            </a>\n          </li>\n          <li class=\"nohover\">\n            <a routerLinkActive=\"active-link\" routerLink='#' (click)=\"clickedOne('books')\">Books,Sports & Hobbies\n              <span> > </span>\n            </a>\n          </li>\n          <li class=\"nohover\">\n            <a routerLinkActive=\"active-link\" routerLink='#' (click)=\"clickedOne('fashion')\">Fashion\n              <span> > </span>\n            </a>\n          </li>\n          <li class=\"nohover\">\n            <a routerLinkActive=\"active-link\" routerLink='#' (click)=\"clickedOne('pets')\">Pets\n              <span> > </span>\n            </a>\n          </li>\n          <li class=\"nohover\">\n            <a routerLinkActive=\"active-link\" routerLink='#' (click)=\"clickedOne('services')\">Services\n              <span> > </span>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div *ngIf=\"show1 == 'Properties'\">\n\n        <div class=\"col-sm-4 sidebar\">\n\n          <ul class=\"nav nav-sidebar\">\n            <li>\n              <b>Properties</b>\n            </li>\n            <br>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#' (click)=\"clicked('Sale')\">\n                For Sale\n                <span> > </span>\n              </a>\n            </li>\n\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#' (click)=\"clicked('Rent')\">For Rent\n                <span> > </span>\n              </a>\n            </li>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#' (click)=\"clicked('Projects')\">New Projects\n                <span> > </span>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n      <div *ngIf=\"show1 == 'cars'\">\n\n        <div class=\"col-sm-4 sidebar\">\n\n          <ul class=\"nav nav-sidebar\">\n            <li>\n              <b>Cars</b>\n            </li>\n            <br>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#' (click)=\"clicked('Vehicles')\">\n                Cars\n                <span> > </span>\n              </a>\n            </li>\n\n            <li class=\"nohover\" (click)=\"clickedTwo($event)\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Commercial Vehicles\n\n              </a>\n            </li>\n            <li class=\"nohover\" (click)=\"clickedTwo($event)\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Other Vehicles\n              </a>\n            </li>\n            <li class=\"nohover\" (click)=\"clickedTwo($event)\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Spare Parts\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n      <div *ngIf=\"show2 == 'Vehicles'\">\n\n\n        <div class=\"col-sm-3 sidebar\" (click)=\"clickedTwo($event)\">\n\n          <ul class=\"nav nav-sidebar\">\n            <li>\n              <b>Cars</b>\n            </li>\n            <br>\n            <li>\n              <a>Maruthi Suziki</a>\n            </li>\n            <li>\n              <a>Hyundai</a>\n            </li>\n            <li>\n              <a>Tata</a>\n            </li>\n            <li>\n              <a>Mahindra</a>\n            </li>\n            <li>\n              <a>Toyota</a>\n            </li>\n            <li>\n              <a>Honda</a>\n            </li>\n            <li>\n              <a>Chorvolet</a>\n            </li>\n            <li>\n              <a>Ford</a>\n            </li>\n            <li>\n              <a>Scoda</a>\n            </li>\n            <li>\n              <a>Fiat</a>\n            </li>\n            <li>\n              <a>Nissan</a>\n            </li>\n            <li>\n              <a>Audi</a>\n            </li>\n            <li>\n              <a>BMW</a>\n            </li>\n            <li>\n              <a>Other Brands</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n      <div *ngIf=\"show1 == 'electronics'\">\n\n        <div class=\"col-sm-4 sidebar\" (click)=\"clickedTwo($event)\">\n\n          <ul class=\"nav nav-sidebar\">\n            <li>\n              <b>Electronics-Appliances</b>\n            </li>\n            <br>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>\n                Computers & Laptops\n              </a>\n            </li>\n\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>TV's Video-Audio\n\n              </a>\n            </li>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Hard Disks,Printer & Moniter\n              </a>\n            </li>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>ACs\n              </a>\n            </li>\n\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Washing Machines\n              </a>\n            </li>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Fridges\n              </a>\n            </li>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Computer Accessories\n              </a>\n            </li>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Cameras & Lenses\n              </a>\n            </li>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Kitchen & Other Appliances\n              </a>\n            </li>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Games & Entertainment\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div *ngIf=\"show1 == 'furniture'\">\n\n        <div class=\"col-sm-4 sidebar\" (click)=\"clickedTwo($event)\">\n\n          <ul class=\"nav nav-sidebar\">\n            <li>\n              <b>Furniture</b>\n            </li>\n            <br>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>\n                Sofa & Dining\n              </a>\n            </li>\n\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Beds & Wardrobes\n\n              </a>\n            </li>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Home Decor & Garden\n              </a>\n            </li>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Other Household items\n              </a>\n            </li>\n\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Kids Furniture\n              </a>\n            </li>\n\n          </ul>\n        </div>\n      </div>\n\n      <div *ngIf=\"show1 == 'jobs'\">\n\n        <div class=\"col-sm-4 sidebar\" (click)=\"clickedTwo($event)\">\n\n          <ul class=\"nav nav-sidebar\">\n            <li>\n              <b>Jobs</b>\n            </li>\n            <br>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>\n                Data entry\n              </a>\n            </li>\n\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>BPO & Telecaller\n\n              </a>\n            </li>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Operator & Technician\n              </a>\n            </li>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Sales & Marketing\n              </a>\n            </li>\n\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Cook\n              </a>\n            </li>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Driver\n              </a>\n            </li>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>IT Engineer & Developer\n              </a>\n            </li>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Designer\n              </a>\n            </li>\n\n          </ul>\n        </div>\n      </div>\n\n      <div *ngIf=\"show1 == 'mobiles'\">\n\n        <div class=\"col-sm-4 sidebar\">\n\n          <ul class=\"nav nav-sidebar\">\n            <li>\n              <b>Mobiles</b>\n            </li>\n            <br>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#' (click)=\"clicked('phones')\">\n                Mobile Phones\n                <span> > </span>\n              </a>\n            </li>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#' (click)=\"clicked('tablets')\">\n                Tablets\n                <span> > </span>\n              </a>\n            </li>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#' (click)=\"clicked('accessories')\">\n                Accessories\n                <span> > </span>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n      <div *ngIf=\"show2 == 'phones'\">\n\n\n        <div class=\"col-sm-3 sidebar\" (click)=\"clickedTwo($event)\">\n\n          <ul class=\"nav nav-sidebar\">\n            <li>\n              <b>Mobile Phones</b>\n            </li>\n            <br>\n            <li>\n              <a>Samsung</a>\n            </li>\n            <li>\n              <a>iPhone</a>\n            </li>\n            <li>\n              <a>Micromax</a>\n            </li>\n            <li>\n              <a>Nokia</a>\n            </li>\n            <li>\n              <a>Sony</a>\n            </li>\n            <li>\n              <a>Mi</a>\n            </li>\n            <li>\n              <a>HTC</a>\n            </li>\n            <li>\n              <a>Lenovo</a>\n            </li>\n            <li>\n              <a>Gionee</a>\n            </li>\n            <li>\n              <a>Motorola</a>\n            </li>\n            <li>\n              <a>Oppo</a>\n            </li>\n            <li>\n              <a>Vivo</a>\n            </li>\n            <li>\n              <a>Lenovo</a>\n            </li>\n            <li>\n              <a>Intex</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n      <div *ngIf=\"show2 == 'tablets'\">\n\n\n        <div class=\"col-sm-3 sidebar\" (click)=\"clickedTwo($event)\">\n\n          <ul class=\"nav nav-sidebar\">\n            <li>\n              <b>Tablets</b>\n            </li>\n            <br>\n            <li>\n              <a>Samsung</a>\n            </li>\n            <li>\n              <a>iPads</a>\n            </li>\n            <li>\n              <a>Other Tablets</a>\n            </li>\n\n          </ul>\n        </div>\n      </div>\n      <div *ngIf=\"show2 == 'accessories'\">\n\n\n        <div class=\"col-sm-3 sidebar\" (click)=\"clickedTwo($event)\">\n\n          <ul class=\"nav nav-sidebar\">\n            <li>\n              <b>Accessories</b>\n            </li>\n            <br>\n            <li>\n              <a>Mobile</a>\n            </li>\n            <li>\n              <a>Tablets</a>\n            </li>\n\n          </ul>\n        </div>\n      </div>\n\n      <div *ngIf=\"show1 == 'bikes'\">\n\n        <div class=\"col-sm-4 sidebar\">\n\n          <ul class=\"nav nav-sidebar\">\n            <li>\n              <b>Bikes</b>\n            </li>\n            <br>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#' (click)=\"clicked('motor')\">\n                Motorcycles\n                <span> > </span>\n              </a>\n            </li>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#' (click)=\"clicked('Scootres')\">\n                Scootres\n                <span> > </span>\n              </a>\n            </li>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#' (click)=\"clicked('bicycles')\">\n                Bicycles\n                <span> > </span>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n      <div *ngIf=\"show2 == 'motor'\">\n\n\n        <div class=\"col-sm-3 sidebar\" (click)=\"clickedTwo($event)\">\n\n          <ul class=\"nav nav-sidebar\">\n            <li>\n              <b>Motorcycles</b>\n            </li>\n            <br>\n            <li>\n              <a>Bajaj</a>\n            </li>\n            <li>\n              <a>Hero Honda</a>\n            </li>\n            <li>\n              <a>Yamaha</a>\n            </li>\n            <li>\n              <a>Royal Enfield</a>\n            </li>\n            <li>\n              <a>Honda</a>\n            </li>\n            <li>\n              <a>Hero</a>\n            </li>\n            <li>\n              <a>TVS</a>\n            </li>\n            <li>\n              <a>Suzuki</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div *ngIf=\"show2 == 'Scootres'\">\n\n\n        <div class=\"col-sm-3 sidebar\" (click)=\"clickedTwo($event)\">\n\n          <ul class=\"nav nav-sidebar\">\n            <li>\n              <b>Scootres</b>\n            </li>\n            <br>\n            <li>\n              <a>Honda</a>\n            </li>\n            <li>\n              <a>TVS</a>\n            </li>\n            <li>\n              <a>Mahindra</a>\n            </li>\n            <li>\n              <a>Bajaj</a>\n            </li>\n\n            <li>\n              <a>Hero</a>\n            </li>\n\n            <li>\n              <a>Suzuki</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div *ngIf=\"show2 == 'bicycles'\">\n\n\n        <div class=\"col-sm-3 sidebar\" (click)=\"clickedTwo($event)\">\n\n          <ul class=\"nav nav-sidebar\">\n            <li>\n              <b>Bicycles</b>\n            </li>\n            <br>\n            <li>\n              <a>Hero</a>\n            </li>\n            <li>\n              <a>Hercules</a>\n            </li>\n            <li>\n              <a>Other Brands</a>\n            </li>\n\n          </ul>\n        </div>\n      </div>\n\n\n\n\n      <div *ngIf=\"show1 == 'books'\">\n\n        <div class=\"col-sm-4 sidebar\" (click)=\"clickedTwo($event)\">\n\n          <ul class=\"nav nav-sidebar\">\n            <li>\n              <b>Books, Sports & Hobbies</b>\n            </li>\n            <br>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>\n                Books\n              </a>\n            </li>\n\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Musical Instruments\n\n              </a>\n            </li>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Sports Equipment\n              </a>\n            </li>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Gym & Fitness\n              </a>\n            </li>\n\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Other Hobbies\n              </a>\n            </li>\n\n\n          </ul>\n        </div>\n      </div>\n\n      <div *ngIf=\"show1 == 'fashion'\">\n\n        <div class=\"col-sm-4 sidebar\" (click)=\"clickedTwo($event)\">\n\n          <ul class=\"nav nav-sidebar\">\n            <li>\n              <b>Fashion</b>\n            </li>\n            <br>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>\n                Men\n              </a>\n            </li>\n\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Women\n\n              </a>\n            </li>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Kids\n              </a>\n            </li>\n\n          </ul>\n        </div>\n      </div>\n\n      <div *ngIf=\"show1 == 'pets'\">\n\n        <div class=\"col-sm-4 sidebar\" (click)=\"clickedTwo($event)\">\n\n          <ul class=\"nav nav-sidebar\">\n            <li>\n              <b>Pets</b>\n            </li>\n            <br>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>\n                Fishes & Aquarium\n              </a>\n            </li>\n\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Dogs\n\n              </a>\n            </li>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Othes Pets\n              </a>\n            </li>\n\n          </ul>\n        </div>\n      </div>\n\n      <div *ngIf=\"show1 == 'services'\">\n\n        <div class=\"col-sm-4 sidebar\" (click)=\"clickedTwo($event)\">\n\n          <ul class=\"nav nav-sidebar\">\n            <li>\n              <b>Services</b>\n            </li>\n            <br>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>\n                Driver & Taxi\n              </a>\n            </li>\n\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Education & Classes\n\n              </a>\n            </li>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Electronics & Computers\n              </a>\n            </li>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Health & Beauty\n              </a>\n            </li>\n            <li class=\"nohover\">\n              <a routerLinkActive=\"active-link\" routerLink='#'>Other Services\n              </a>\n            </li>\n\n          </ul>\n        </div>\n      </div>\n\n      <div *ngIf=\"show2 == 'Sale'\">\n\n\n        <div class=\"col-sm-3 sidebar\" (click)=\"clickedTwo($event)\">\n\n          <ul class=\"nav nav-sidebar\">\n            <li>\n              <b>For Sale</b>\n            </li>\n            <br>\n            <li>\n              <a>Apartments</a>\n            </li>\n            <li>\n              <a>Houses & Villas</a>\n            </li>\n            <li>\n              <a>Builder Floors</a>\n            </li>\n            <li>\n              <a>Land & Plots</a>\n            </li>\n            <li>\n              <a>Shops & Offices</a>\n            </li>\n            <li>\n              <a>Farm Houses</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div *ngIf=\"show2 == 'Rent'\">\n\n\n        <div class=\"col-sm-3 sidebar\" (click)=\"clickedTwo($event)\">\n\n          <ul class=\"nav nav-sidebar\">\n\n            <li>\n              <b>For Rent</b>\n            </li>\n            <br>\n            <li>\n              <a>Apartments</a>\n            </li>\n            <li>\n              <a>Houses & Villas</a>\n            </li>\n            <li>\n              <a>Builder Floors</a>\n            </li>\n            <li>\n              <a>PG & Roommates</a>\n            </li>\n            <li>\n              <a>Land & Plots</a>\n            </li>\n            <li>\n              <a>Shops & Offices</a>\n            </li>\n            <li>\n              <a>Guest Houses</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div *ngIf=\"show2 == 'Projects'\">\n\n\n        <div class=\"col-sm-3 sidebar\" (click)=\"clickedTwo($event)\">\n\n          <ul class=\"nav nav-sidebar\">\n            <li>\n              <b>New Projects</b>\n            </li>\n            <br>\n            <li>\n              <a>Apartments</a>\n            </li>\n            <li>\n              <a>Houses & Villas</a>\n            </li>\n            <li>\n              <a>Builder Floors</a>\n            </li>\n            <li>\n              <a>Land & Plots</a>\n            </li>\n            <li>\n              <a>Shops & Offices</a>\n            </li>\n            <li>\n              <a>Farm Houses</a>\n            </li>\n          </ul>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n"

/***/ }),

/***/ "./src/app/submit-ad/submit-ad.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitAdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__submitAdd_service__ = __webpack_require__("./src/app/submitAdd.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubmitAdComponent = /** @class */ (function () {
    // limitText(limitField, limitCount, limitNum) {
    //   if (limitField.value.length > limitNum) {
    //     limitField.value = limitField.value.substring(0, limitNum);
    //   } else {
    //     limitCount.value = limitNum - limitField.value.length;
    //   } public show:boolean = false;
    // }
    function SubmitAdComponent(route, modalService, submitAddService) {
        this.route = route;
        this.modalService = modalService;
        this.submitAddService = submitAddService;
        this.toggleOpen = false;
        this.log = {
            title: '',
            category: '',
            description: '',
            name: '',
            mobile: '',
            price: '',
            city: ''
        };
        this.maxlength = 4096;
        this.titlelength = 70;
        this.characterleft = this.maxlength;
        this.charactersleft = this.titlelength;
    }
    SubmitAdComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    SubmitAdComponent.prototype.openModal2 = function (templateNested) {
        this.modalRef.hide();
        this.modalRef2 = this.modalService.show(templateNested);
    };
    SubmitAdComponent.prototype.clickedOne = function (menuName1) {
        console.log(menuName1);
        this.show2 = '';
        this.show1 = menuName1;
    };
    SubmitAdComponent.prototype.clicked = function (menuName2) {
        // console.log(menuName2)
        this.show2 = menuName2;
    };
    SubmitAdComponent.prototype.clickedTwo = function (menuName3) {
        this.modalRef2.hide();
        console.log(menuName3, this.show1);
        this.data = this.show1 + " >> " + this.show2 + " >> " + menuName3.target.childNodes[0].data;
        console.log(menuName3);
        // console.log(menuName3.target.childNodes[0].data);
        //  this.printdata(this.show1);
        this.log.category = this.data;
    };
    SubmitAdComponent.prototype.count = function (tweetmsg) {
        tweetmsg = this.log.description.length;
        console.log(tweetmsg);
        if (this.maxlength >= tweetmsg) {
            this.characterleft = (this.maxlength) - (tweetmsg);
        }
        else {
            tweetmsg = tweetmsg.substr(0, tweetmsg - 1);
            console.log(tweetmsg);
        }
    };
    SubmitAdComponent.prototype.counttitle = function (msg) {
        msg = this.log.title.length;
        console.log(msg);
        if (this.titlelength >= msg) {
            this.charactersleft = (this.titlelength) - (msg);
        }
        else {
            msg = msg.substr(0, msg - 1);
            console.log(msg);
        }
    };
    SubmitAdComponent.prototype.ngOnInit = function () {
    };
    SubmitAdComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    SubmitAdComponent.prototype.onSubmit = function (form) {
        console.log(form);
        if (!this.log.title) {
            alert("please enter title");
        }
        else if (!this.log.category) {
            alert("Please select Category");
        }
        else if (!this.log.price) {
            alert("please add Price");
        }
        else if (!this.log.description) {
            alert("please add Description");
        }
        else if (!this.log.name) {
            alert("please enter name");
        }
        else if (!this.log.mobile) {
            alert("please enter mobile number");
        }
        else if (!this.log.city) {
            alert("please enter city");
        }
        else {
            this.submitAddService.submitAdd(this.log)
                .subscribe(function (response) {
                console.log(response);
            });
        }
    };
    SubmitAdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-submit-ad',
            template: __webpack_require__("./src/app/submit-ad/submit-ad.component.html"),
            styles: [__webpack_require__("./src/app/submit-ad/submit-ad.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_3__submitAdd_service__["a" /* SubmitAddService */]])
    ], SubmitAdComponent);
    return SubmitAdComponent;
}());



/***/ }),

/***/ "./src/app/submitAdd.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitAddService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubmitAddService = /** @class */ (function () {
    function SubmitAddService(http) {
        this.http = http;
    }
    SubmitAddService.prototype.submitAdd = function (addDetails) {
        return this.http.post("http://localhost:3001/v1/add/createAdd", addDetails);
    };
    SubmitAddService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SubmitAddService);
    return SubmitAddService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
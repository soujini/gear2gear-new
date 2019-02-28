(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/car/car-routing.module": [
		"./src/app/components/car/car-routing.module.ts"
	],
	"./components/client/client-routing.module": [
		"./src/app/components/client/client-routing.module.ts"
	],
	"./components/color/color-routing.module": [
		"./src/app/components/color/color-routing.module.ts"
	],
	"./components/expense/expense-routing.module": [
		"./src/app/components/expense/expense-routing.module.ts"
	],
	"./components/fuel-type/fuel-type-routing.module": [
		"./src/app/components/fuel-type/fuel-type-routing.module.ts"
	],
	"./components/insurance/insurance-routing.module": [
		"./src/app/components/insurance/insurance-routing.module.ts"
	],
	"./components/investors-corner/investors-corner-routing.module": [
		"./src/app/components/investors-corner/investors-corner-routing.module.ts"
	],
	"./components/make/make-routing.module": [
		"./src/app/components/make/make-routing.module.ts"
	],
	"./components/model/model-routing.module": [
		"./src/app/components/model/model-routing.module.ts"
	],
	"./components/transmission-type/transmission-type-routing.module": [
		"./src/app/components/transmission-type/transmission-type-routing.module.ts"
	],
	"./components/variant/variant-routing.module": [
		"./src/app/components/variant/variant-routing.module.ts"
	],
	"./components/vehicle-type/vehicle-type-routing.module": [
		"./src/app/components/vehicle-type/vehicle-type-routing.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_make_make_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/make/make.module */ "./src/app/components/make/make.module.ts");
/* harmony import */ var _components_model_model_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/model/model.module */ "./src/app/components/model/model.module.ts");
/* harmony import */ var _components_variant_variant_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/variant/variant.module */ "./src/app/components/variant/variant.module.ts");
/* harmony import */ var _components_vehicle_type_vehicle_type_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/vehicle-type/vehicle-type.module */ "./src/app/components/vehicle-type/vehicle-type.module.ts");
/* harmony import */ var _components_fuel_type_fuel_type_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/fuel-type/fuel-type.module */ "./src/app/components/fuel-type/fuel-type.module.ts");
/* harmony import */ var _components_transmission_type_transmission_type_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/transmission-type/transmission-type.module */ "./src/app/components/transmission-type/transmission-type.module.ts");
/* harmony import */ var _components_insurance_insurance_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/insurance/insurance.module */ "./src/app/components/insurance/insurance.module.ts");
/* harmony import */ var _components_color_color_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/color/color.module */ "./src/app/components/color/color.module.ts");
/* harmony import */ var _components_car_car_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/car/car.module */ "./src/app/components/car/car.module.ts");
/* harmony import */ var _components_client_client_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/client/client.module */ "./src/app/components/client/client.module.ts");
/* harmony import */ var _components_expense_expense_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/expense/expense.module */ "./src/app/components/expense/expense.module.ts");
/* harmony import */ var _components_inventory_inventory_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/inventory/inventory.module */ "./src/app/components/inventory/inventory.module.ts");
/* harmony import */ var _components_investors_corner_investors_corner_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/investors-corner/investors-corner.module */ "./src/app/components/investors-corner/investors-corner.module.ts");
/* harmony import */ var _components_contact_contact_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/contact/contact.module */ "./src/app/components/contact/contact.module.ts");
/* harmony import */ var _components_about_about_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/about/about.module */ "./src/app/components/about/about.module.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/inventory/inventory.component */ "./src/app/components/inventory/inventory.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"] },
    {
        path: 'make',
        loadChildren: './components/make/make-routing.module#MakeRoutingModule'
    },
    {
        path: 'model',
        loadChildren: './components/model/model-routing.module#ModelRoutingModule'
    },
    {
        path: 'variant',
        loadChildren: './components/variant/variant-routing.module#VariantRoutingModule'
    },
    {
        path: 'vehicleType',
        loadChildren: './components/vehicle-type/vehicle-type-routing.module#VehicleTypeRoutingModule'
    },
    {
        path: 'fuelType',
        loadChildren: './components/fuel-type/fuel-type-routing.module#FuelTypeRoutingModule'
    },
    {
        path: 'transmissionType',
        loadChildren: './components/transmission-type/transmission-type-routing.module#TransmissionTypeRoutingModule'
    },
    {
        path: 'insurance',
        loadChildren: './components/insurance/insurance-routing.module#InsuranceRoutingModule'
    },
    {
        path: 'expense',
        loadChildren: './components/expense/expense-routing.module#ExpenseRoutingModule'
    },
    {
        path: 'color',
        loadChildren: './components/color/color-routing.module#ColorRoutingModule'
    },
    {
        path: 'client',
        loadChildren: './components/client/client-routing.module#ClientRoutingModule'
    },
    {
        path: 'car',
        loadChildren: './components/car/car-routing.module#CarRoutingModule'
    },
    { path: 'cars', component: _components_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_19__["InventoryComponent"] },
    { path: 'sold-cars', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"] },
    {
        path: 'investors-corner',
        loadChildren: './components/investors-corner/investors-corner-routing.module#InvestorsCornerRoutingModule'
    },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_21__["ContactComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_20__["AboutComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: false }),
                _components_make_make_module__WEBPACK_IMPORTED_MODULE_3__["MakeModule"],
                _components_model_model_module__WEBPACK_IMPORTED_MODULE_4__["ModelModule"],
                _components_variant_variant_module__WEBPACK_IMPORTED_MODULE_5__["VariantModule"],
                _components_vehicle_type_vehicle_type_module__WEBPACK_IMPORTED_MODULE_6__["VehicleTypeModule"],
                _components_fuel_type_fuel_type_module__WEBPACK_IMPORTED_MODULE_7__["FuelTypeModule"],
                _components_transmission_type_transmission_type_module__WEBPACK_IMPORTED_MODULE_8__["TransmissionTypeModule"],
                _components_insurance_insurance_module__WEBPACK_IMPORTED_MODULE_9__["InsuranceModule"],
                _components_expense_expense_module__WEBPACK_IMPORTED_MODULE_13__["ExpenseModule"],
                _components_color_color_module__WEBPACK_IMPORTED_MODULE_10__["ColorModule"],
                _components_client_client_module__WEBPACK_IMPORTED_MODULE_12__["ClientModule"],
                _components_car_car_module__WEBPACK_IMPORTED_MODULE_11__["CarModule"],
                _components_inventory_inventory_module__WEBPACK_IMPORTED_MODULE_14__["InventoryModule"],
                _components_about_about_module__WEBPACK_IMPORTED_MODULE_17__["AboutModule"],
                _components_contact_contact_module__WEBPACK_IMPORTED_MODULE_16__["ContactModule"],
                _components_investors_corner_investors_corner_module__WEBPACK_IMPORTED_MODULE_15__["InvestorsCornerModule"],
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            // providers: [AuthService,AuthGuard],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-header></app-header>\n  <app-loader></app-loader>\n</div>\n<div>\n    <router-outlet (activate)=\"onActivate($event)\"></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(swUpdate) {
        this.swUpdate = swUpdate;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(function () {
                if (confirm("New version available. Load New Version?")) {
                    window.location.reload();
                }
            });
        }
    };
    AppComponent.prototype.onActivate = function (event) {
        window.scrollTo(0, 0);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
        //export class AppComponent {
        ,
        __metadata("design:paramtypes", [_angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_checklist_checklist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/checklist/checklist.component */ "./src/app/components/checklist/checklist.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _callback_callback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./callback/callback.component */ "./src/app/callback/callback.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _services_validation_validation_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/validation/validation.service */ "./src/app/services/validation/validation.service.ts");
/* harmony import */ var _services_make_make_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/make/make.service */ "./src/app/services/make/make.service.ts");
/* harmony import */ var _services_model_model_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/model/model.service */ "./src/app/services/model/model.service.ts");
/* harmony import */ var _services_variant_variant_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/variant/variant.service */ "./src/app/services/variant/variant.service.ts");
/* harmony import */ var _services_vehicle_type_vehicle_type_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/vehicle-type/vehicle-type.service */ "./src/app/services/vehicle-type/vehicle-type.service.ts");
/* harmony import */ var _services_fuel_type_fuel_type_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/fuel-type/fuel-type.service */ "./src/app/services/fuel-type/fuel-type.service.ts");
/* harmony import */ var _services_transmission_type_transmission_type_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/transmission-type/transmission-type.service */ "./src/app/services/transmission-type/transmission-type.service.ts");
/* harmony import */ var _services_insurance_insurance_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/insurance/insurance.service */ "./src/app/services/insurance/insurance.service.ts");
/* harmony import */ var _services_color_color_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/color/color.service */ "./src/app/services/color/color.service.ts");
/* harmony import */ var _services_car_car_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/car/car.service */ "./src/app/services/car/car.service.ts");
/* harmony import */ var _services_client_client_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/client/client.service */ "./src/app/services/client/client.service.ts");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/common/common.service */ "./src/app/services/common/common.service.ts");
/* harmony import */ var _services_expense_expense_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/expense/expense.service */ "./src/app/services/expense/expense.service.ts");
/* harmony import */ var _services_transaction_type_transaction_type_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/transaction-type/transaction-type.service */ "./src/app/services/transaction-type/transaction-type.service.ts");
/* harmony import */ var _services_transaction_details_transaction_details_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/transaction-details/transaction-details.service */ "./src/app/services/transaction-details/transaction-details.service.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/components/loader/loader.component.ts");
/* harmony import */ var _services_loader_interceptor_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/loader-interceptor.service */ "./src/app/services/loader-interceptor.service.ts");
/* harmony import */ var _components_advantages_advantages_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/advantages/advantages.component */ "./src/app/components/advantages/advantages.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




 // replaces previous Http service
































// import { UploadFileComponent } from './components/upload-file/upload-file.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _callback_callback_component__WEBPACK_IMPORTED_MODULE_14__["CallbackComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
                _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_31__["LoaderComponent"],
                _components_checklist_checklist_component__WEBPACK_IMPORTED_MODULE_10__["ChecklistComponent"],
                _components_advantages_advantages_component__WEBPACK_IMPORTED_MODULE_33__["AdvantagesComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_11__["ROUTES"]),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_34__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_35__["environment"].production }),
            ],
            exports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _services_loader_interceptor_service__WEBPACK_IMPORTED_MODULE_32__["LoaderInterceptorService"],
                    multi: true
                },
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
                _services_validation_validation_service__WEBPACK_IMPORTED_MODULE_16__["ValidationService"],
                _services_make_make_service__WEBPACK_IMPORTED_MODULE_17__["MakeService"],
                _services_model_model_service__WEBPACK_IMPORTED_MODULE_18__["ModelService"],
                _services_variant_variant_service__WEBPACK_IMPORTED_MODULE_19__["VariantService"],
                _services_vehicle_type_vehicle_type_service__WEBPACK_IMPORTED_MODULE_20__["VehicleTypeService"],
                _services_fuel_type_fuel_type_service__WEBPACK_IMPORTED_MODULE_21__["FuelTypeService"],
                _services_transmission_type_transmission_type_service__WEBPACK_IMPORTED_MODULE_22__["TransmissionTypeService"],
                _services_color_color_service__WEBPACK_IMPORTED_MODULE_24__["ColorService"],
                _services_car_car_service__WEBPACK_IMPORTED_MODULE_25__["CarService"],
                _services_insurance_insurance_service__WEBPACK_IMPORTED_MODULE_23__["InsuranceService"],
                _services_expense_expense_service__WEBPACK_IMPORTED_MODULE_28__["ExpenseService"],
                _services_client_client_service__WEBPACK_IMPORTED_MODULE_26__["ClientService"],
                _services_common_common_service__WEBPACK_IMPORTED_MODULE_27__["CommonService"],
                _services_transaction_type_transaction_type_service__WEBPACK_IMPORTED_MODULE_29__["TransactionTypeService"],
                _services_transaction_details_transaction_details_service__WEBPACK_IMPORTED_MODULE_30__["TransactionDetailsService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");

var ROUTES = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
];


/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, myRoute) {
        this.auth = auth;
        this.myRoute = myRoute;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.isAuthenticated()) {
            return true;
        }
        else {
            this.myRoute.navigate(["home"]);
            //Navigate to Error Page
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth0-variables */ "./src/app/auth/auth0-variables.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var auth0_lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! auth0-lock */ "./node_modules/auth0-lock/lib/index.js");
/* harmony import */ var auth0_lock__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(auth0_lock__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(router) {
        var _this = this;
        this.router = router;
        this.options = {
            'allowSignUp': false,
            'redirect': false,
            theme: {
                logo: 'https://s3.amazonaws.com/gear2gear/g2g-favicon-auth0.png',
                primaryColor: '#31324F'
            },
            allowedConnections: ['Username-Password-Authentication'],
            languageDictionary: {
                emailInputPlaceholder: "something@youremail.com",
                title: "GEAR 2 GEAR"
            },
            scope: 'openid',
            audience: "https://" + _auth0_variables__WEBPACK_IMPORTED_MODULE_1__["AUTH_CONFIG"].domain + "/userinfo",
            redirectUri: _auth0_variables__WEBPACK_IMPORTED_MODULE_1__["AUTH_CONFIG"].callbackURL,
        };
        this.lock = new auth0_lock__WEBPACK_IMPORTED_MODULE_3___default.a(_auth0_variables__WEBPACK_IMPORTED_MODULE_1__["AUTH_CONFIG"].clientID, _auth0_variables__WEBPACK_IMPORTED_MODULE_1__["AUTH_CONFIG"].domain, this.options);
        this.lock.on('authenticated', function (authResult) {
            _this.lock.hide(); //Added this manually since lock popup wont close
            //console.log("souj ",authResult);
            //this.isAuthenticated=true;
            _this.lock.getUserInfo(authResult.accessToken, function (error, profile) {
                if (error) {
                    // Handle error
                    return;
                }
                //Save token and profile locally
                _this.setSession(authResult, profile);
            });
        });
    }
    AuthService.prototype.login = function () {
        this.lock.show();
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('accessToken');
        localStorage.removeItem('profile');
        localStorage.removeItem('expiresAt');
        //  this.isAuthenticated=false;
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.setSession = function (authResult, profile) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem("accessToken", authResult.accessToken);
        localStorage.setItem("profile", JSON.stringify(profile));
        localStorage.setItem('expiresAt', expiresAt);
        // Update DOM
        //alert("hello " + profile.name);
    };
    AuthService.prototype.isAuthenticated = function () {
        // //Check if there's an unexpired JWT
        // //This searches for an item in localStorage with key == 'id_token'
        var accessToken = localStorage.getItem("accessToken");
        //console.log("access ",accessToken);
        if (accessToken) {
            // Check whether the current time is past the
            // access token's expiry time
            var expiresAt = JSON.parse(localStorage.getItem('expiresAt'));
            //console.log("time ", new Date().getTime() + '   expires  '+expiresAt);
            return new Date().getTime() < expiresAt;
        }
        else {
            return false;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/auth0-variables.ts":
/*!*****************************************!*\
  !*** ./src/app/auth/auth0-variables.ts ***!
  \*****************************************/
/*! exports provided: AUTH_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_CONFIG", function() { return AUTH_CONFIG; });
var AUTH_CONFIG = {
    clientID: 'ZKnwKqFeiWfiHSeP34lPImZHC8qOCGUT',
    // domain: 'gear2gear.eu.auth0.com',
    domain: 'gear2gear.eu.auth0.com',
    callbackURL: 'http://localhost:3000/callback',
};


/***/ }),

/***/ "./src/app/callback/callback.component.css":
/*!*************************************************!*\
  !*** ./src/app/callback/callback.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsbGJhY2svY2FsbGJhY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixZQUFZO0VBQ1osTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NhbGxiYWNrL2NhbGxiYWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/callback/callback.component.html":
/*!**************************************************!*\
  !*** ./src/app/callback/callback.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\">\n  <img src=\"assets/loading.svg\" alt=\"loading\">\n  <h1>SOUJANYA</h1>\n</div>\n"

/***/ }),

/***/ "./src/app/callback/callback.component.ts":
/*!************************************************!*\
  !*** ./src/app/callback/callback.component.ts ***!
  \************************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CallbackComponent = /** @class */ (function () {
    function CallbackComponent() {
    }
    CallbackComponent.prototype.ngOnInit = function () {
    };
    CallbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-callback',
            template: __webpack_require__(/*! ./callback.component.html */ "./src/app/callback/callback.component.html"),
            styles: [__webpack_require__(/*! ./callback.component.css */ "./src/app/callback/callback.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-history></app-history>\n<!-- <app-checklist></app-checklist> -->\n"

/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.title = "ABOUT US";
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/components/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/about/about.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/about/about.module.ts ***!
  \**************************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../history/history.component */ "./src/app/components/history/history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { ChecklistComponent } from '../checklist/checklist.component';
var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            ],
            declarations: [
                _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
                // ChecklistComponent,
                _history_history_component__WEBPACK_IMPORTED_MODULE_4__["HistoryComponent"]
            ],
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "./src/app/components/advantages/advantages.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/advantages/advantages.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <section>\n  <div class=\"col-12\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 container-left\">\n        <div class=\"content row flex-center\">\n          <div class=\"title text-left\">\n            <h2>Why buy a brand new car and get stuck, when you could upgrade or change your car at will?</h2>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-6 container-right text-left\">\n        <div class=\"row flex-center\">\n          <p>\n            We all live in an expensive world and saving money is only getting harder by the day. Gear2Gear will help\n            you source the right car and save you a ton of money. Most new car buyers get stuck to their rides not because they like it, but mostly because the losses incurred are very high while selling a new car.\n          </p>\n          </div>\n      </div>\n\n    </div>\n  </div>\n</section> -->\n\n\n<section>\n  <div class=\"col-12\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 container-right\">\n        <div>\n          <div class=\"title text-center\">\n            <h2 class=\"accent2\">Why buy a brand new car and get stuck, when you could upgrade or change your car at will?</h2>\n          </div>\n          <div class=\"row col-md-6\">\n          <p>\n            We all live in an expensive world and saving money is only getting harder by the day. Gear2Gear will help\n            you source the right car and save you a ton of money. Most new car buyers get stuck to their rides not because they like it, but mostly because the losses incurred are very high while selling a new car.\n          </p>\n          </div>\n          </div>\n      </div>\n\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/advantages/advantages.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/advantages/advantages.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-car {\n  height: inherit; }\n\n.title {\n  padding: 75px 25px;\n  letter-spacing: 2px; }\n\n.container-right {\n  height: 550px;\n  padding-left: 0px;\n  background-image: url(\"https://s3.amazonaws.com/gear2gear/yellow-car.jp2\");\n  background-size: cover;\n  background-repeat: no-repeat; }\n\n.content {\n  padding: 5%;\n  padding-top: 5%;\n  color: #121213; }\n\n.container-left {\n  padding: 0px;\n  background-image: url(\"https://s3.amazonaws.com/gear2gear/bg4.jpeg\");\n  background-size: cover;\n  background-repeat: no-repeat; }\n\np {\n  padding: 50px 0px 50px 50px;\n  letter-spacing: 2px;\n  font-size: 18px;\n  color: whitesmoke; }\n\nh2 {\n  letter-spacing: 8px; }\n\n/* Extra Small devices (tablets, 768px and up) col-sm */\n\n@media (max-width: 767px) {\n  .container-right {\n    height: auto;\n    text-align: center; } }\n\n/* Small devices (tablets, 768px and up) col-md  collapses here*/\n\n@media (min-width: 768px) and (max-width: 992px) {\n  .container-right {\n    height: auto;\n    text-align: center; } }\n\n/* Medium devices (desktops, 992px and up)  col-lg */\n\n/* Large devices (large desktops, 1200px and up) */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb3VqYW55YS9Eb2N1bWVudHMvQ2xvbmVkLVJlcG8vZ2VhcjJnZWFyL3NyYy9hcHAvY29tcG9uZW50cy9hZHZhbnRhZ2VzL2FkdmFudGFnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxlQUFjLEVBQUE7O0FBRWhCO0VBQ0Usa0JBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsMEVBQTBFO0VBQzFFLHNCQUFzQjtFQUN0Qiw0QkFBNEIsRUFBQTs7QUFFOUI7RUFDRSxXQUFVO0VBQ1YsZUFBYztFQUNkLGNBQWEsRUFBQTs7QUFFZjtFQUNFLFlBQVc7RUFDWCxvRUFBb0U7RUFDcEUsc0JBQXNCO0VBQ3RCLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsZUFBYztFQUNkLGlCQUFnQixFQUFBOztBQUVsQjtFQUNFLG1CQUFtQixFQUFBOztBQUdyQix1REFBQTs7QUFDQTtFQUNFO0lBQ0UsWUFBVztJQUNYLGtCQUFrQixFQUFBLEVBQ25COztBQUVILGdFQUFBOztBQUNBO0VBQ0U7SUFDRSxZQUFXO0lBQ1gsa0JBQWtCLEVBQUEsRUFDbkI7O0FBR0gsb0RBQUE7O0FBS0Esa0RBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkdmFudGFnZXMvYWR2YW50YWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb257XG59XG5cbi5pbWctY2Fye1xuICBoZWlnaHQ6aW5oZXJpdDtcbn1cbi50aXRsZXtcbiAgcGFkZGluZyA6IDc1cHggMjVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxuLmNvbnRhaW5lci1yaWdodHtcbiAgaGVpZ2h0OjU1MHB4O1xuICBwYWRkaW5nLWxlZnQ6MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vZ2VhcjJnZWFyL3llbGxvdy1jYXIuanAyXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmNvbnRlbnR7XG4gIHBhZGRpbmc6NSU7XG4gIHBhZGRpbmctdG9wOjUlO1xuICBjb2xvcjojMTIxMjEzO1xufVxuLmNvbnRhaW5lci1sZWZ0e1xuICBwYWRkaW5nOjBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2dlYXIyZ2Vhci9iZzQuanBlZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxucHtcbiAgcGFkZGluZzogNTBweCAwcHggNTBweCA1MHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6MThweDtcbiAgY29sb3I6d2hpdGVzbW9rZTtcbn1cbmgye1xuICBsZXR0ZXItc3BhY2luZzogOHB4O1xufVxuXG4vKiBFeHRyYSBTbWFsbCBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApIGNvbC1zbSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250YWluZXItcmlnaHR7XG4gICAgaGVpZ2h0OmF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4vKiBTbWFsbCBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApIGNvbC1tZCAgY29sbGFwc2VzIGhlcmUqL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lci1yaWdodHtcbiAgICBoZWlnaHQ6YXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuLyogTWVkaXVtIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApICBjb2wtbGcgKi9cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuXG59XG5cbi8qIExhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE5MjBweCkge31cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/advantages/advantages.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/advantages/advantages.component.ts ***!
  \***************************************************************/
/*! exports provided: AdvantagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvantagesComponent", function() { return AdvantagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdvantagesComponent = /** @class */ (function () {
    function AdvantagesComponent() {
    }
    AdvantagesComponent.prototype.ngOnInit = function () {
    };
    AdvantagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advantages',
            template: __webpack_require__(/*! ./advantages.component.html */ "./src/app/components/advantages/advantages.component.html"),
            styles: [__webpack_require__(/*! ./advantages.component.scss */ "./src/app/components/advantages/advantages.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdvantagesComponent);
    return AdvantagesComponent;
}());



/***/ }),

/***/ "./src/app/components/car/car-form/car-form.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/car/car-form/car-form.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"container-fluid section\">\n  <div *ngIf=\"message\" class=\"alert alert-success text-center col-12\">\n    <strong>Success!</strong>&nbsp;<span>{{message}}</span>\n  </div>\n  <div *ngIf=\"message_error\" class=\"alert alert-danger text-center col-12\">\n    <strong>Error!</strong>&nbsp;<span>{{message_error}}</span>\n  </div>\n  <div class=\"row\">\n    <mat-tab-group class=\"col-12\">\n      <mat-tab  label=\"Car Details\">\n        <div class=\"col-12 grey lighten-4\">\n          <header class=\"header row\">\n            <div class=\"col-12\">\n              <app-title [title]=title></app-title>\n            </div>\n          </header>\n\n          <div class=\"col-12\">\n            <form [formGroup]=\"carForm\" (ngSubmit)=\"onSubmit()\" >\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"inputMake\" class=\"col-sm-3 col-form-label\">Make</label>\n                  <div>\n                    <div class=\"mt-0\">\n                      <select class=\"form-control\" id=\"inputMake\" formControlName=\"make\">\n                        <option *ngFor=\"let make of makes$ | async\" [value]=\"make.make_id\">{{make.name}}</option>\n                      </select>\n                      <app-control-messages [control]=\"carForm.controls.make\"></app-control-messages>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputModel\" class=\"col-sm-3 col-form-label\">Model</label>\n                  <div>\n                    <div class=\"mt-0\">\n                      <select id=\"inputModel\" class=\"form-control\" formControlName=\"model\">\n                        <option *ngFor=\"let model of models$ | async\" [value]=\"model.model_id\">{{model.name}}</option>\n                      </select>\n                      <app-control-messages [control]=\"carForm.controls.model\"></app-control-messages>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputDescription\" class=\"col-sm-3 col-form-label\">Description</label>\n                  <div>\n                    <div class=\"md-form mt-0\">\n                      <input id=\"inputDescription\" type=\"text\" class=\"form-control\" formControlName=\"description\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputRegistration\" class=\"col-sm-3 col-form-label\">Registration Number</label>\n                  <div>\n                    <div class=\"md-form mt-0\">\n                      <input id=\"inputRegistration\" type=\"text\" class=\"form-control\" formControlName=\"license_plate\">\n                      <app-control-messages [control]=\"carForm.controls.license_plate\"></app-control-messages>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputVariant\" class=\"col-sm-3 col-form-label\">Variant</label>\n                  <div>\n                    <div class=\"mt-0\">\n                      <select id=\"inputVariant\" class=\"form-control\"  formControlName=\"variant\">\n                        <option *ngFor=\"let variant of variants$ | async\" [value]=\"variant.variant_id\">{{variant.name}}</option>\n                      </select>\n                      <app-control-messages [control]=\"carForm.controls.variant\"></app-control-messages>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputMakeYear\" class=\"col-sm-3 col-form-label\">Make Year</label>\n                  <div>\n                    <div class=\"md-form mt-0\">\n                      <input id=\"inputMakeYear\" type=\"text\" class=\"form-control\" formControlName=\"make_year\">\n                      <app-control-messages [control]=\"carForm.controls.make_year\"></app-control-messages>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputMakeMonth\" class=\"col-sm-3 col-form-label\">Make Month</label>\n                  <div>\n                    <div class=\"md-form mt-0\">\n                      <input id=\"inputMakeMonth\" type=\"text\" class=\"form-control\" formControlName=\"make_month\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputMileage\" class=\"col-sm-3 col-form-label\">Mileage</label>\n                  <div>\n                    <div class=\"md-form mt-0\">\n                      <!-- <input id=\"inputMileage\" type=\"number\" class=\"form-control\" formControlName=\"mileage\"> -->\n                      <input id=\"inputMileage\" type=\"text\" class=\"form-control\" formControlName=\"mileage\" (keyup)=\"formatCurrency(carForm.controls.mileage)\">\n                      <app-control-messages [control]=\"carForm.controls.mileage\"></app-control-messages>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputOwners\" class=\"col-sm-3 col-form-label\">Owners</label>\n                  <div>\n                    <div class=\"md-form mt-0\">\n                      <input id=\"inputOwners\" type=\"number\" class=\"form-control\" formControlName=\"owners\">\n                      <app-control-messages [control]=\"carForm.controls.owners\"></app-control-messages>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputVehicleType\" class=\"col-sm-3 col-form-label\">Vehicle Type</label>\n                  <div>\n                    <div class=\"mt-0\">\n                      <select id=\"inputVehicleType\" class=\"form-control\" formControlName=\"vehicle_type\">\n                        <option *ngFor=\"let vehicleType of vehicleTypes$ | async\" [value]=\"vehicleType.vehicle_type_id\">{{vehicleType.name}}</option>\n                      </select>\n                      <app-control-messages [control]=\"carForm.controls.vehicle_type\"></app-control-messages>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputFuelType\" class=\"col-sm-3 col-form-label\">Fuel Type</label>\n                  <div>\n                    <div class=\"mt-0\">\n                      <select id=\"inputFuelType\" class=\"form-control\" formControlName=\"fuel_type\">\n                        <option *ngFor=\"let fuelType of fuelTypes$ | async\" [value]=\"fuelType.fuel_type_id\">{{fuelType.name}}</option>\n                      </select>\n                      <app-control-messages [control]=\"carForm.controls.fuel_type\"></app-control-messages>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputTransmissionType\" class=\"col-sm-3 col-form-label\">Transmission Type</label>\n                  <div>\n                    <div class=\"mt-0\">\n                      <select id=\"inputTransmissionType\" class=\"form-control\"  formControlName=\"transmission_type\">\n                        <option *ngFor=\"let transmissionType of transmissionTypes$ | async\" [value]=\"transmissionType.transmission_type_id\">{{transmissionType.name}}</option>\n                      </select>\n                      <app-control-messages [control]=\"carForm.controls.transmission_type\"></app-control-messages>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <label for=\"inputInsurance\" class=\"col-sm-3 col-form-label\">Insurance</label>\n                  <div>\n                    <div class=\"mt-0\">\n                      <select id=\"inputInsurance\" class=\"form-control\" formControlName=\"insurance\">\n                        <option *ngFor=\"let insurance of insurances$ | async\" [value]=\"insurance.insurance_id\">{{insurance.name}}</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputInsuranceYear\" class=\"col-sm-3 col-form-label\">Insurance Year</label>\n                  <div>\n                    <div class=\"md-form mt-0\">\n                      <input id=\"inputInsuranceYear\" type=\"text\" class=\"form-control\" formControlName=\"insurance_year\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputExteriorColor\" class=\"col-sm-3 col-form-label\">Exterior Color</label>\n                  <div>\n                    <div class=\"mt-0\">\n                      <select id=\"inputExteriorColor\" class=\"form-control\"  formControlName=\"exterior_color\">\n                        <option *ngFor=\"let color of colors$ | async\" [value]=\"color.color_id\">{{color.name}}</option>\n                      </select>\n                      <app-control-messages [control]=\"carForm.controls.exterior_color\"></app-control-messages>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputInteriorColor\" class=\"col-sm-3 col-form-label\">Interior Color</label>\n                  <div>\n                    <div class=\"mt-0\">\n                      <select id=\"inputInteriorColor\" class=\"form-control\"  formControlName=\"interior_color\">\n                        <option *ngFor=\"let color of colors$ | async\" [value]=\"color.color_id\">{{color.name}}</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputFuelEconomy\" class=\"col-sm-3 col-form-label\">Fuel Economy</label>\n                  <div>\n                    <div class=\"md-form mt-0\">\n                      <input id=\"inputFuelEconomy\" type=\"text\" class=\"form-control\" formControlName=\"fuel_economy\">\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <div class=\"form-group\">\n                    <label for=\"inputPurchasedOn\" class=\"col-sm-3 col-form-label\">Purchased On</label>\n                    <div>\n                      <div class=\"md-form mt-0\">\n                        <input id=\"inputPurchasedOn\" type=\"date\" class=\"form-control\" formControlName=\"purchased_on\">\n                        <app-control-messages [control]=\"carForm.controls.purchased_on\"></app-control-messages>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputPurchasedFrom\" class=\"col-sm-3 col-form-label\">Purchased From</label>\n                  <div>\n                    <div class=\"mt-0\">\n                      <select id=\"inputPurchasedFrom\" class=\"form-control\" formControlName=\"purchased_from\">\n                        <option *ngFor=\"let client of clients$ | async\" [value]=\"client.client_id\">{{client.name}}</option>\n                      </select>\n                      <app-control-messages [control]=\"carForm.controls.purchased_from\"></app-control-messages>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputPurchasedFor\" class=\"col-sm-3 col-form-label\">Purchased For</label>\n                  <div>\n                    <div class=\"md-form mt-0\">\n                      <input id=\"inputPurchasedFor\" type=\"text\" class=\"form-control\" formControlName=\"cost_price\" (keyup)=\"formatCurrency(carForm.controls.cost_price)\">\n                      <app-control-messages [control]=\"carForm.controls.cost_price\"></app-control-messages>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputSoldFor\" class=\"col-sm-3 col-form-label\">Selling Price</label>\n                  <div>\n                    <div class=\"md-form mt-0\">\n                      <input id=\"inputSoldFor\" type=\"text\" class=\"form-control\" formControlName=\"selling_price\" (keyup)=\"formatCurrency(carForm.controls.selling_price)\">\n                      <app-control-messages [control]=\"carForm.controls.selling_price\"></app-control-messages>\n                    </div>\n                  </div>\n                </div>\n                <!-- Default switch -->\n                <div class=\"form-check\" *ngIf=\"carForm.controls.is_sold.value == true\" >\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"inputIsSold\" formControlName=\"is_sold\" (change)=\"is_sold()\">\n                  <label class=\"form-check-label\" for=\"inputIsSold\">Is Sold?</label>\n                </div>\n                <div class=\"form-check\">\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"inputFlooded\" formControlName=\"is_flooded\">\n                  <label class=\"form-check-label\" for=\"inputFlooded\">Is Flooded?</label>\n                </div>\n                <div class=\"form-check\">\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"inputAccidental\" formControlName=\"is_accidental\">\n                  <label class=\"form-check-label\" for=\"inputAccidental\">Is Accidental?</label>\n                </div>\n                <div class=\"form-group\" *ngIf=\"selectedCar_Id\" style=\"margin-bottom:25px\">\n                  <app-upload-file [car_id]=selectedCar_Id></app-upload-file>\n                </div>\n                <div class=\"text-right\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-custom btn-md\" >\n                    <i class=\"fa fa-save\"></i>\n                  </button>\n                  <app-simple-modal [module]=\"module\" [mode]=\"mode\" [name]=\"carForm.controls.make.value\" (isDelete)=\"deleteCar($event)\"></app-simple-modal>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n\n      </mat-tab>\n      <mat-tab *ngIf=\"selectedCar_Id\" class=\"col-lg-12\" label=\"Transaction Details\">\n\n        <form [formGroup]=\"soldDetailsForm\">\n          <div class=\"row\" style=\"padding:10px;margin:15px\">\n          <h5>Buyer Details</h5>\n          </div>\n          <div class=\"row #f5f5f5 grey lighten-4\" style=\"padding-top:5px;margin:15px;\">\n\n            <div class=\"col col-md-12\">\n              <div class=\"form-group\">\n                <div>\n                  <div class=\"md-form mt-0\">\n                    <input id=\"inputSoldOn\" type=\"date\" class=\"form-control\" formControlName=\"sold_on\">\n                    <app-control-messages [control]=\"carForm.controls.sold_on\"></app-control-messages>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n            <div class=\"col col-md-12\">\n              <div class=\"form-group\">\n                <div>\n                  <div class=\"mt-0\">\n                    <select id=\"inputSoldto\" class=\"form-control\"  formControlName=\"sold_to\" placeholder=\"Sold To\">\n                      <option *ngFor=\"let client of clients$ | async\" [value]=\"client.client_id\">{{client.name}}</option>\n                    </select>\n                    <app-control-messages [control]=\"carForm.controls.sold_to\"></app-control-messages>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col col-md-12\">\n              <div class=\"form-group\">\n                <div>\n                  <div class=\"md-form mt-0\">\n                    <input style=\"text-align:right\" id=\"inputSoldFor\" type=\"text\" class=\"form-control\" formControlName=\"selling_price\" placeholder=\"Sold For\" (keyup)=\"formatCurrency(soldDetailsForm.controls.selling_price)\">\n                    <app-control-messages [control]=\"soldDetailsForm.controls.selling_price\"></app-control-messages>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col col-md-12\">\n              <button [hidden]=\"inProcess == true\" [disabled]=\"soldDetailsForm.invalid || soldDetailsForm.controls.selling_price.value <= 0\" type=\"submit\" class=\"btn btn-primary btn-custom btn-md\" style=\"width:100%\" (click)=\"ProcessSale()\" >\n                Process Sale\n              </button>\n              <button [hidden]=\"inProcess == false\" [disabled]=\"soldDetailsForm.invalid || soldDetailsForm.controls.selling_price.value <= 0\" type=\"submit\" class=\"btn btn-success btn-md\" (click)=\"ProcessSale()\" >\n                In Process\n              </button>\n            </div>\n            <div class=\"col col-md-12\">\n              <button *ngIf=\"carForm.controls.is_sold.value == false && inProcess == true\" type=\"submit\" class=\"btn btn-danger btn-md\" (click)=\"Sell()\" >\n                Sell\n              </button>\n              <button *ngIf=\"carForm.controls.is_sold.value == true\" type=\"submit\" class=\"btn btn-danger btn-md\">\n                SOLD\n              </button>\n            </div>\n          </div>\n        </form>\n        <div *ngIf=\"message_td != ''\" class=\"alert alert-danger text-center col-12\">\n          <strong>Error !</strong>&nbsp;{{message_td}}\n        </div>\n        <app-transaction-details (opMessage)=\"setMessage($event)\" [transactionTypes$]=\"transactionTypes$\" [expenses$]=\"expenses$\" [carForm]=\"carForm\" [refreshTD]=\"refreshTD\"></app-transaction-details>\n      </mat-tab>\n    </mat-tab-group>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/car/car-form/car-form.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/car/car-form/car-form.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\n  z-index: 25000 !important; }\n\n.modal-backdrop {\n  z-index: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb3VqYW55YS9Eb2N1bWVudHMvQ2xvbmVkLVJlcG8vZ2VhcjJnZWFyL3NyYy9hcHAvY29tcG9uZW50cy9jYXIvY2FyLWZvcm0vY2FyLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyL2Nhci1mb3JtL2Nhci1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFse1xuICB6LWluZGV4OiAyNTAwMCAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtYmFja2Ryb3Age1xuICB6LWluZGV4OiAwICFpbXBvcnRhbnQ7XG59XG4gIFxuIl19 */"

/***/ }),

/***/ "./src/app/components/car/car-form/car-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/car/car-form/car-form.component.ts ***!
  \***************************************************************/
/*! exports provided: CarFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarFormComponent", function() { return CarFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_car_car_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/car/car.service */ "./src/app/services/car/car.service.ts");
/* harmony import */ var app_services_make_make_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/make/make.service */ "./src/app/services/make/make.service.ts");
/* harmony import */ var app_services_model_model_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/model/model.service */ "./src/app/services/model/model.service.ts");
/* harmony import */ var app_services_variant_variant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/variant/variant.service */ "./src/app/services/variant/variant.service.ts");
/* harmony import */ var app_services_vehicle_type_vehicle_type_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/vehicle-type/vehicle-type.service */ "./src/app/services/vehicle-type/vehicle-type.service.ts");
/* harmony import */ var app_services_fuel_type_fuel_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/fuel-type/fuel-type.service */ "./src/app/services/fuel-type/fuel-type.service.ts");
/* harmony import */ var app_services_transmission_type_transmission_type_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/services/transmission-type/transmission-type.service */ "./src/app/services/transmission-type/transmission-type.service.ts");
/* harmony import */ var app_services_insurance_insurance_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/services/insurance/insurance.service */ "./src/app/services/insurance/insurance.service.ts");
/* harmony import */ var app_services_color_color_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/services/color/color.service */ "./src/app/services/color/color.service.ts");
/* harmony import */ var app_services_client_client_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/services/client/client.service */ "./src/app/services/client/client.service.ts");
/* harmony import */ var app_services_expense_expense_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/services/expense/expense.service */ "./src/app/services/expense/expense.service.ts");
/* harmony import */ var app_services_transaction_type_transaction_type_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/services/transaction-type/transaction-type.service */ "./src/app/services/transaction-type/transaction-type.service.ts");
/* harmony import */ var app_services_transaction_details_transaction_details_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/services/transaction-details/transaction-details.service */ "./src/app/services/transaction-details/transaction-details.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var CarFormComponent = /** @class */ (function () {
    function CarFormComponent(fb, router, route, carService, makeService, modelService, variantService, vehicleTypeService, fuelTypeService, transmissionTypeService, insuranceService, colorService, clientService, expenseService, transactionTypeService, transactionDetailsService) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.carService = carService;
        this.makeService = makeService;
        this.modelService = modelService;
        this.variantService = variantService;
        this.vehicleTypeService = vehicleTypeService;
        this.fuelTypeService = fuelTypeService;
        this.transmissionTypeService = transmissionTypeService;
        this.insuranceService = insuranceService;
        this.colorService = colorService;
        this.clientService = clientService;
        this.expenseService = expenseService;
        this.transactionTypeService = transactionTypeService;
        this.transactionDetailsService = transactionDetailsService;
        this.title = "Create Car";
        this.module = "car";
        this.mode = "discard";
        this.message = "";
        this.message_error = "";
        this.message_td = "";
        this.submitted = false;
        this.sold = false;
        this.refreshTD = false;
        this.inProcess = false;
        this.createForm();
        this.createSoldDetailsForm();
        this.sub = this.carService.selectedCarId
            .subscribe(function (res) {
            if (res != 0) {
                _this.selectedCar_Id = res;
                if (_this.carService.selectedMode == "Edit") {
                    _this.title = "Edit Car";
                    _this.mode = "delete";
                    _this.getCarById(res);
                    _this.carService.transactionDetail.next("true");
                }
            }
        });
        this.sub1 = this.carService.refreshCar
            .subscribe(function (res) {
            if (_this.selectedCar_Id > 0) {
                console.log("get car by id  refreshing car after sell", _this.selectedCar_Id);
                _this.getCarById(_this.selectedCar_Id);
            }
        }, function (err) {
        });
    }
    CarFormComponent.prototype.createForm = function () {
        this.carForm = this.fb.group({
            car_id: [],
            make: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            model: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            description: [],
            variant: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            vehicle_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            fuel_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            transmission_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            insurance: [],
            exterior_color: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            interior_color: [],
            fuel_economy: [],
            mileage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            make_year: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            owners: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            cost_price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            purchased_from: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            purchased_on: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            make_month: [],
            insurance_year: [],
            is_accidental: [],
            is_flooded: [],
            is_sold: [false],
            license_plate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            sold_to: [],
            sold_on: [],
            selling_price: [],
        });
    };
    CarFormComponent.prototype.createSoldDetailsForm = function () {
        this.soldDetailsForm = this.fb.group({
            car_id: [],
            sold_to: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            sold_on: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            selling_price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    };
    CarFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.carForm.valid) {
            if (this.carService.selectedMode == 'Create') {
                this.createCar();
            }
            else if (this.carService.selectedMode == 'Edit') {
                this.updateCar();
            }
        }
    };
    CarFormComponent.prototype.is_sold = function () {
        if (this.carForm.controls.is_sold.value == false) {
            console.log("Delete Transaction Details");
            this.carService.sold.next(false);
        }
    };
    CarFormComponent.prototype.getCarById = function (car_id) {
        var _this = this;
        this.carService.getCarById(car_id)
            .subscribe(function (res) {
            _this.carService.sold.next(null);
            _this.patchForm(res[0]);
            if (res[0].is_sold == true) {
                _this.carForm.get('cost_price').disable();
                _this.carForm.get('purchased_on').disable();
                _this.carForm.get('purchased_from').disable();
            }
            else {
                _this.carForm.get('cost_price').enable();
                _this.carForm.get('purchased_on').enable();
                _this.carForm.get('purchased_from').enable();
            }
            _this.soldDetailsForm.patchValue({
                car_id: res[0].car_id,
                sold_to: res[0].sold_to,
                sold_on: res[0].sold_on,
                selling_price: res[0].selling_price,
            });
            if (res[0].sold_to != null) {
                _this.inProcess = true;
            }
            else {
                _this.inProcess = false;
            }
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    CarFormComponent.prototype.getTransactionDetailsBySoldTranType = function (car_id) {
        var _this = this;
        this.transactionDetailsService.getTransactionDetailsBySoldTranType(car_id)
            .subscribe(function (res) {
            _this.total_money_received = parseInt(res[0].total_money_received);
        }, function (err) {
            console.log(err);
        });
    };
    CarFormComponent.prototype.getTransactionDetailsByPurchaseTranType = function (car_id) {
        var _this = this;
        this.transactionDetailsService.getTransactionDetailsByPurchaseTranType(car_id)
            .subscribe(function (res) {
            _this.total_money_invested = parseInt(res[0].total_money_invested);
        }, function (err) {
            console.log(err);
        });
    };
    CarFormComponent.prototype.patchForm = function (res) {
        this.carForm.patchValue(res);
    };
    CarFormComponent.prototype.createCar = function () {
        var _this = this;
        this.carForm.patchValue({
            total_cost: this.carForm.controls.cost_price.value,
        });
        this.carService.createCar(this.carForm.value)
            .subscribe(function (res) {
            window.scrollTo(0, 0);
            _this.message = "Created successfully.";
            setTimeout(function () {
                _this.message = "";
            }, 5000);
            _this.carService.refreshList.next(true);
            _this.carForm.reset();
            _this.selectCar(res.car_id);
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    CarFormComponent.prototype.updateCar = function () {
        var _this = this;
        //Checking to see if cost price has changed and deleting any purchase transactions
        var formControls = this.carForm.controls;
        if (formControls.cost_price.dirty) {
            this.transactionDetailsService.deleteTransactionDetailsByTransactionType(12).subscribe(function (res) {
                _this.transactionDetailsService.refreshTD.next(true);
                console.log("Successfully deleted");
            }, function (err) {
                console.log("Delete Transaction Details", err);
            });
        }
        console.log("cost price changed ", this.carForm.get('cost_price').value);
        this.carService.updateCar(this.carForm.value)
            .subscribe(function (res) {
            window.scrollTo(0, 0);
            _this.message = "Updated successfully.";
            setTimeout(function () {
                _this.message = "";
            }, 5000);
            _this.carService.refreshList.next(true);
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    CarFormComponent.prototype.updateCar2 = function () {
        var _this = this;
        this.carForm.patchValue({
            car_id: this.selectedCar_Id,
            sold_to: this.soldDetailsForm.get('sold_to').value,
            sold_on: this.soldDetailsForm.get('sold_on').value,
            selling_price: this.soldDetailsForm.get('selling_price').value,
        });
        this.carService.updateCar(this.carForm.value)
            .subscribe(function (res) {
            _this.inProcess = true;
            //Show message saved and Disable Process Sale
        }, function (err) {
            console.log(err);
        });
    };
    CarFormComponent.prototype.deleteCar = function (event) {
        var _this = this;
        if (this.selectedCar_Id) {
            this.carService.deleteCar(this.selectedCar_Id).subscribe(function (res) {
                _this.carService.refreshList.next(true);
                _this.router.navigate(['/car/add']);
                console.log("Delete Car : ", res.message);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.carForm.reset();
        }
    };
    CarFormComponent.prototype.selectCar = function (car_id) {
        var _this = this;
        this.carService.selectedMode = 'Edit';
        this.router.navigate(['/car/edit']);
        setTimeout(function () {
            _this.carService.selectedCarId.next(car_id);
        }, 100);
    };
    CarFormComponent.prototype.getMakes = function () {
        this.makes$ = this.makeService.getMakes();
    };
    CarFormComponent.prototype.getModels = function () {
        this.models$ = this.modelService.getModels();
    };
    CarFormComponent.prototype.getVariants = function () {
        this.variants$ = this.variantService.getVariants();
    };
    CarFormComponent.prototype.getVehicleTypes = function () {
        this.vehicleTypes$ = this.vehicleTypeService.getVehicleTypes();
    };
    CarFormComponent.prototype.getFuelTypes = function () {
        this.fuelTypes$ = this.fuelTypeService.getFuelTypes();
    };
    CarFormComponent.prototype.getTransmissionTypes = function () {
        this.transmissionTypes$ = this.transmissionTypeService.getTransmissionTypes();
    };
    CarFormComponent.prototype.getInsurances = function () {
        this.insurances$ = this.insuranceService.getInsurances();
    };
    CarFormComponent.prototype.getColors = function () {
        this.colors$ = this.colorService.getColors();
    };
    CarFormComponent.prototype.getClients = function () {
        this.clients$ = this.clientService.getClients();
    };
    CarFormComponent.prototype.getExpenses = function () {
        this.expenses$ = this.expenseService.getExpenses();
    };
    // getInvestors()  {
    //   this.investors$ = this.clientService.getInvestors();
    // }
    CarFormComponent.prototype.getTransactionTypes = function () {
        this.transactionTypes$ = this.transactionTypeService.getTransactionTypes();
    };
    CarFormComponent.prototype.formatCurrency1 = function (control) {
        //  var val = this.carForm.controls.expenses.value;
        var val = control.value;
        var x = val.replace(/,/g, "");
        var lastThree = x.substring(x.length - 3);
        var otherNumbers = x.substring(0, x.length - 3);
        if (otherNumbers != '')
            lastThree = ',' + lastThree;
        var res = otherNumbers(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        control.setValue(res);
    };
    CarFormComponent.prototype.formatCurrency = function (control) {
        var val = control.value;
        var isValid = /^[0-9,.]*$/.test(val);
        if (isValid == true) {
            var x = val.toString().replace(/,/g, "");
            var afterPoint = '';
            if (x.indexOf('.') > 0)
                afterPoint = x.substring(x.indexOf('.'), x.length);
            x = Math.floor(x);
            x = x.toString();
            var lastThree = x.substring(x.length - 3);
            var otherNumbers = x.substring(0, x.length - 3);
            if (otherNumbers != '')
                lastThree = ',' + lastThree;
            var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
            control.setValue(res);
        }
        else {
            control.setValue("");
        }
    };
    CarFormComponent.prototype.ProcessSale = function () {
        this.updateCar2();
        // this.transactionDetailsService.getTransactionDetailsByPurchaseTranType(this.selectedCar_Id)
        // .subscribe
        // (
        //   res=>{
        //     this.total_money_invested=parseInt(res[0].total_money_invested);
        //     if(this.total_money_invested < parseInt(this.carForm.get('cost_price').value.toString().replace( /,/g, "" )))
        //     {
        //       //Message - Please input all tran details iwht option sold to enable
        //       this.message_td = "Please enter transactions with type 'Purchase' to match the Cost Price";
        //       setTimeout(() => {
        //         this.message_td ="";
        //       },5000);
        //     }
        //     else{
        //       console.log("updating car with sold data");
        //       this.updateCar2();
        //     }
        //   },
        //   err=>{
        //     console.log(err);
        //   });
    };
    CarFormComponent.prototype.Sell = function () {
        var _this = this;
        this.transactionDetailsService.getTransactionDetailsByPurchaseTranType(this.selectedCar_Id)
            .subscribe(function (res) {
            _this.total_money_invested = parseInt(res[0].total_money_invested);
            if (_this.total_money_invested < parseInt(_this.carForm.get('cost_price').value.toString().replace(/,/g, ""))) {
                //Message - Please input all tran details iwht option sold to enable
                _this.message_td = "Please enter transactions with type 'Purchase' to match the Cost Price of Rs. " + _this.carForm.get('cost_price').value;
                setTimeout(function () {
                    _this.message_td = "";
                }, 5000);
            }
            else {
                _this.bla();
            }
        }, function (err) {
            console.log(err);
        });
    };
    CarFormComponent.prototype.bla = function () {
        var _this = this;
        //Check if sold tran types is less than SP
        this.transactionDetailsService.getTransactionDetailsBySoldTranType(this.selectedCar_Id)
            .subscribe(function (res) {
            _this.total_money_received = parseInt(res[0].total_money_received);
            console.log(_this.total_money_received);
            if (_this.total_money_received < parseInt(_this.carForm.get('selling_price').value.toString().replace(/,/g, ""))) {
                //Message - Please input all tran details iwht option sold to enable
                _this.message_td = "Please enter transactions with type 'Sold' to match the Selling Price of Rs." + _this.carForm.get('selling_price').value;
                setTimeout(function () {
                    _this.message_td = "";
                }, 5000);
            }
            else {
                //Ready to Create p&L Transactions
                _this.carService.sold.next(true);
                //Process P&L Transactions and mark is_sold = true
            }
        }, function (err) {
            console.log(err);
        });
    };
    CarFormComponent.prototype.setMessage = function (event) {
        this.carForm.patchValue({
            'is_sold': false,
        });
        window.scrollTo(0, 0);
        this.message_td = event;
    };
    CarFormComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 500);
        // this.createForm();
        this.getMakes();
        this.getModels();
        this.getVariants();
        this.getVehicleTypes();
        this.getFuelTypes();
        this.getTransmissionTypes();
        this.getInsurances();
        this.getColors();
        this.getClients();
        this.getExpenses();
        // this.getInvestors();
        this.getTransactionTypes();
    };
    CarFormComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
    };
    CarFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-form',
            template: __webpack_require__(/*! ./car-form.component.html */ "./src/app/components/car/car-form/car-form.component.html"),
            styles: [__webpack_require__(/*! ./car-form.component.scss */ "./src/app/components/car/car-form/car-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_services_car_car_service__WEBPACK_IMPORTED_MODULE_3__["CarService"],
            app_services_make_make_service__WEBPACK_IMPORTED_MODULE_4__["MakeService"],
            app_services_model_model_service__WEBPACK_IMPORTED_MODULE_5__["ModelService"],
            app_services_variant_variant_service__WEBPACK_IMPORTED_MODULE_6__["VariantService"],
            app_services_vehicle_type_vehicle_type_service__WEBPACK_IMPORTED_MODULE_7__["VehicleTypeService"],
            app_services_fuel_type_fuel_type_service__WEBPACK_IMPORTED_MODULE_8__["FuelTypeService"],
            app_services_transmission_type_transmission_type_service__WEBPACK_IMPORTED_MODULE_9__["TransmissionTypeService"],
            app_services_insurance_insurance_service__WEBPACK_IMPORTED_MODULE_10__["InsuranceService"],
            app_services_color_color_service__WEBPACK_IMPORTED_MODULE_11__["ColorService"],
            app_services_client_client_service__WEBPACK_IMPORTED_MODULE_12__["ClientService"],
            app_services_expense_expense_service__WEBPACK_IMPORTED_MODULE_13__["ExpenseService"],
            app_services_transaction_type_transaction_type_service__WEBPACK_IMPORTED_MODULE_14__["TransactionTypeService"],
            app_services_transaction_details_transaction_details_service__WEBPACK_IMPORTED_MODULE_15__["TransactionDetailsService"]])
    ], CarFormComponent);
    return CarFormComponent;
}());



/***/ }),

/***/ "./src/app/components/car/car-list/car-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/car/car-list/car-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid section-list\">\n  <div>\n    <app-search (searchTermValueChanged)=\"searchCars($event)\" (isCreate)=\"createCar('Create')\"></app-search>\n  </div>\n  <div>\n    <div *ngIf=\"(results$ | async)?.length==0\" class=\"alert alert-danger text-center col-12\">\n      <strong>Error!</strong>&nbsp;<span>No records found</span>\n    </div>\n    <table class=\"table\">\n      <thead class=\"#f5f5f5 grey lighten-4\">\n        <tr>\n          <th>Make</th>\n          <th>Model</th>\n          <th>Variant</th>\n          <th>Year</th>\n          <th>Edit</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor='let car of results$ | async' [ngClass]=\"{'is-active': selectedCarId == car.car_id}\">\n          <td class=\"capitalize\">{{car.make_name}}</td>\n            <td class=\"capitalize\">{{car.model_name}}</td>\n            <td class=\"capitalize\">{{car.variant_name}}</td>\n            <td>{{car.make_year}}</td>\n          <td class=\"pointer\" (click)=\"selectCar(car.car_id, 'Edit')\">\n              <i class=\"fa fa-pencil\"></i>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/car/car-list/car-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/car/car-list/car-list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyL2Nhci1saXN0L2Nhci1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/car/car-list/car-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/car/car-list/car-list.component.ts ***!
  \***************************************************************/
/*! exports provided: CarListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarListComponent", function() { return CarListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_car_car_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/car/car.service */ "./src/app/services/car/car.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CarListComponent = /** @class */ (function () {
    function CarListComponent(carService, router, route) {
        var _this = this;
        this.carService = carService;
        this.router = router;
        this.route = route;
        this.searchTerm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.carService.selectedCarId.subscribe(function (res) {
            _this.selectedCarId = res;
        }, function (err) {
        });
    }
    CarListComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/car/add']);
    };
    CarListComponent.prototype.searchCars = function (search) {
        this.searchTerm.emit(search);
    };
    //On Click of the Add Button
    CarListComponent.prototype.createCar = function (mode) {
        this.selectedCarId = 0;
        this.carService.selectedMode = mode;
        this.router.navigate(['/car/add']);
    };
    //On Click of the Edit Button
    CarListComponent.prototype.selectCar = function (car_id, mode) {
        var _this = this;
        this.selectedCarId = car_id;
        this.carService.selectedMode = mode;
        this.router.navigate(['/car/edit']);
        setTimeout(function () {
            _this.carService.selectedCarId.next(car_id);
        }, 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], CarListComponent.prototype, "results$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CarListComponent.prototype, "searchTerm", void 0);
    CarListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-list',
            template: __webpack_require__(/*! ./car-list.component.html */ "./src/app/components/car/car-list/car-list.component.html"),
            styles: [__webpack_require__(/*! ./car-list.component.scss */ "./src/app/components/car/car-list/car-list.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_car_car_service__WEBPACK_IMPORTED_MODULE_3__["CarService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CarListComponent);
    return CarListComponent;
}());



/***/ }),

/***/ "./src/app/components/car/car-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/car/car-routing.module.ts ***!
  \******************************************************/
/*! exports provided: CarRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarRoutingModule", function() { return CarRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _car_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./car.component */ "./src/app/components/car/car.component.ts");
/* harmony import */ var _car_list_car_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car-list/car-list.component */ "./src/app/components/car/car-list/car-list.component.ts");
/* harmony import */ var _car_form_car_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./car-form/car-form.component */ "./src/app/components/car/car-form/car-form.component.ts");
/* harmony import */ var app_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var carRoutes = [
    {
        path: 'car',
        canActivate: [app_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _car_component__WEBPACK_IMPORTED_MODULE_2__["CarComponent"],
        children: [
            { path: 'list', component: _car_list_car_list_component__WEBPACK_IMPORTED_MODULE_3__["CarListComponent"] },
            { path: 'add', component: _car_form_car_form_component__WEBPACK_IMPORTED_MODULE_4__["CarFormComponent"] },
            { path: 'edit', component: _car_form_car_form_component__WEBPACK_IMPORTED_MODULE_4__["CarFormComponent"] }
        ]
    }
];
var CarRoutingModule = /** @class */ (function () {
    function CarRoutingModule() {
    }
    CarRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(carRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CarRoutingModule);
    return CarRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/car/car.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/car/car.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"col-12\">\n    <app-title [title]=title></app-title>\n  </div>\n</header>\n\n<div class=\"row\">\n  <div class=\"col-lg-4\">\n  <app-car-list (searchTerm)=\"searchCars($event)\" [results$]=\"cars$\"></app-car-list>\n  </div>\n  <div class=\"col-lg-8\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/car/car.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/car/car.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyL2Nhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/car/car.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/car/car.component.ts ***!
  \*************************************************/
/*! exports provided: CarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarComponent", function() { return CarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_car_car_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/car/car.service */ "./src/app/services/car/car.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CarComponent = /** @class */ (function () {
    function CarComponent(fb, carService, router, route) {
        this.fb = fb;
        this.carService = carService;
        this.router = router;
        this.route = route;
        this.title = "Car";
    }
    CarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCars();
        this.carService.refreshList.subscribe(function (res) {
            _this.getCars();
        }, function (err) {
            console.log(err);
        });
    };
    CarComponent.prototype.getCars = function () {
        this.cars$ = this.carService.getCars();
    };
    CarComponent.prototype.searchCars = function (searchTerm) {
        if (searchTerm) {
            this.cars$ = this.carService.searchCars(searchTerm);
        }
        else {
            this.getCars();
            //this.cars$ = new EmptyObservable();
        }
    };
    CarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car',
            template: __webpack_require__(/*! ./car.component.html */ "./src/app/components/car/car.component.html"),
            styles: [__webpack_require__(/*! ./car.component.scss */ "./src/app/components/car/car.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], app_services_car_car_service__WEBPACK_IMPORTED_MODULE_3__["CarService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CarComponent);
    return CarComponent;
}());



/***/ }),

/***/ "./src/app/components/car/car.module.ts":
/*!**********************************************!*\
  !*** ./src/app/components/car/car.module.ts ***!
  \**********************************************/
/*! exports provided: CarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarModule", function() { return CarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _car_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car-routing.module */ "./src/app/components/car/car-routing.module.ts");
/* harmony import */ var _car_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./car.component */ "./src/app/components/car/car.component.ts");
/* harmony import */ var _car_list_car_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./car-list/car-list.component */ "./src/app/components/car/car-list/car-list.component.ts");
/* harmony import */ var _car_form_car_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./car-form/car-form.component */ "./src/app/components/car/car-form/car-form.component.ts");
/* harmony import */ var _transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transaction-details/transaction-details.component */ "./src/app/components/car/transaction-details/transaction-details.component.ts");
/* harmony import */ var app_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/components/upload-file/upload-file.component */ "./src/app/components/upload-file/upload-file.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CarModule = /** @class */ (function () {
    function CarModule() {
    }
    CarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _car_routing_module__WEBPACK_IMPORTED_MODULE_3__["CarRoutingModule"],
            ],
            declarations: [
                _car_component__WEBPACK_IMPORTED_MODULE_4__["CarComponent"],
                _car_list_car_list_component__WEBPACK_IMPORTED_MODULE_5__["CarListComponent"],
                _car_form_car_form_component__WEBPACK_IMPORTED_MODULE_6__["CarFormComponent"],
                _transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_7__["TransactionDetailsComponent"],
                app_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_8__["UploadFileComponent"]
            ],
        })
    ], CarModule);
    return CarModule;
}());



/***/ }),

/***/ "./src/app/components/car/transaction-details/transaction-details.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/car/transaction-details/transaction-details.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" class=\"alert alert-danger text-center col-12\">\n  <strong>Error! </strong>{{message}}\n</div>\n<form [formGroup]=\"transactionDetailsForm\" (ngSubmit)=\"onSubmit()\" >\n  <div class=\"row\">\n    <div class=\"form-group col-lg-12\">\n      <div>\n        <div class=\"mt-0\">\n          <table class=\"table\" *ngIf=\"carForm.get('is_sold').value != true\">\n            <thead class=\"#f5f5f5 grey lighten-4\">\n              <tr>\n                <th>Date</th>\n                <th>Transaction</th>\n                <th>Expense</th>\n                <th>Description</th>\n                <th class=\"text-right\">Credit</th>\n                <th class=\"text-right\">Debit</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>\n                  <input type=\"date\" class=\"form-control\" formControlName=\"date\" placeholder=\"Date\">\n                  <app-control-messages [control]=\"transactionDetailsForm.controls.date\"></app-control-messages>\n                </td>\n                <td>\n                  <select class=\"form-control\" formControlName=\"transaction_type_id\" (change)=\"getSelectedTransactionTypeMode($event.target.value)\" >\n                    <option *ngFor=\"let tt of transactionTypes$ |async\" [value]=\"tt.transaction_type_id\">{{tt.name}}\n                    </option>\n                  </select>\n                  <app-control-messages [control]=\"transactionDetailsForm.controls.transaction_type_id\"></app-control-messages>\n                </td>\n                <td>\n                  <select class=\"form-control\" formControlName=\"expense_id\" >\n                    <option *ngFor=\"let expense of expenses$ | async\" [value]=\"expense.expense_id\">{{expense.name}}</option>\n                  </select>\n                  <app-control-messages [control]=\"transactionDetailsForm.controls.expense_id\"></app-control-messages>\n                </td>\n                <td>\n                  <input type=\"text\" class=\"form-control\" formControlName=\"description\" placeholder=\"Description\" >\n                  <app-control-messages [control]=\"transactionDetailsForm.controls.description\"></app-control-messages>\n                </td>\n                <td class=\"text-right\">\n                  <input type=\"text\" class=\"form-control text-right\" formControlName=\"credit\" placeholder=\"Credit\" (keyup)=\"formatCurrency(transactionDetailsForm.controls.credit)\" >\n                  <app-control-messages [control]=\"transactionDetailsForm.controls.credit\"></app-control-messages>\n                </td>\n                <td class=\"text-right\">\n                  <input type=\"text\" class=\"form-control text-right\" formControlName=\"debit\" placeholder=\"Debit\" (keyup)=\"formatCurrency(transactionDetailsForm.controls.debit)\" >\n                  <app-control-messages [control]=\"transactionDetailsForm.controls.debit\"></app-control-messages>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n\n          <button type=\"submit\" [disabled]=\"!transactionDetailsForm.valid\" class=\"btn btn-primary btn-custom btn-md\" *ngIf=\"carForm.get('is_sold').value != true\" >\n            <i class=\"fa fa-save\"></i>\n          </button>\n          <div class=\"table-td\">\n          <table class=\"table\">\n            <thead class=\"#f5f5f5 grey lighten-4\">\n              <tr>\n                <th>Date</th>\n                <th>Transaction</th>\n                <th>Investor</th>\n                <th>Expense</th>\n                <th>Description</th>\n                <th class=\"text-right\">Credit</th>\n                <th class=\"text-right\">Debit</th>\n                <th class=\"text-center\">Void</th>\n\n                  <!-- <button *ngIf=\"item.is_void == false && (item.transaction_type_id == 1 ||item.transaction_type_id == 11)\" type=\"button\" class=\"btn btn-custom\" name=\"button\" (click)=\"voidTransaction(item)\">Void</button></td> -->\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of transactionDetails$ | async; let i = index;\">\n                <td> {{item.date | date}}</td>\n                <td>{{item.transaction_name}}</td>\n                <td>{{item.investor_name}}</td>\n                <td>{{item.expense_name}}</td>\n                <td>{{item.description}}</td>\n                <td class=\"text-right\">{{item.credit_formatted}}</td>\n                <td class=\"text-right\">{{item.debit_formatted}}</td>\n                <td class=\"text-center\">\n                  <app-simple-modal *ngIf=\"carForm.get('is_sold').value != true && (item.is_void == false || item.is_void == null) && (item.transaction_type_id == 2 || item.transaction_type_id == 12 || item.transaction_type_id == 13)\" [module]=\"module\" [mode]=\"mode\" (isDelete)=\"voidTransaction(item)\"></app-simple-modal>\n                  <label *ngIf=\"item.is_void == true\">VOID</label>\n                  </td>\n              </tr>\n            </tbody>\n          </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/car/transaction-details/transaction-details.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/car/transaction-details/transaction-details.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-td {\n  height: 610px;\n  overflow: scroll; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb3VqYW55YS9Eb2N1bWVudHMvQ2xvbmVkLVJlcG8vZ2VhcjJnZWFyL3NyYy9hcHAvY29tcG9uZW50cy9jYXIvdHJhbnNhY3Rpb24tZGV0YWlscy90cmFuc2FjdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXIvdHJhbnNhY3Rpb24tZGV0YWlscy90cmFuc2FjdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLXRke1xuICBoZWlnaHQ6IDYxMHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/car/transaction-details/transaction-details.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/car/transaction-details/transaction-details.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TransactionDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailsComponent", function() { return TransactionDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_services_client_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/client/client.service */ "./src/app/services/client/client.service.ts");
/* harmony import */ var app_services_car_car_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/car/car.service */ "./src/app/services/car/car.service.ts");
/* harmony import */ var app_services_transaction_details_transaction_details_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/transaction-details/transaction-details.service */ "./src/app/services/transaction-details/transaction-details.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TransactionDetailsComponent = /** @class */ (function () {
    function TransactionDetailsComponent(ref, fb, carService, clientService, transactionDetailsService) {
        var _this = this;
        this.ref = ref;
        this.fb = fb;
        this.carService = carService;
        this.clientService = clientService;
        this.transactionDetailsService = transactionDetailsService;
        this.opMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.opFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.transactionDetailProfitandLoss = [];
        this.total_cost_car = 0;
        this.message = "";
        this.mode = "Void";
        this.module = "transaction";
        this.message_error = "";
        this.createForm();
        this.sub = this.carService.transactionDetail.subscribe(function (value) {
            _this.getTransactionDetailsById(_this.carService.selectedCarId.getValue());
            _this.selectedCar_Id = _this.carService.selectedCarId.getValue();
        });
        this.sub1 = this.carService.sold.subscribe(function (value) {
            if (value == true) {
                if (_this.carForm.get('selling_price').value != 0 && _this.carForm.get('selling_price').value != '' && _this.carForm.get('selling_price').value != null) {
                    _this.sold = true;
                    //Calculate Profit
                    var Profit = parseInt(_this.carForm.get('selling_price').value.toString().replace(/,/g, "")) - _this.total_cost_car;
                    // console.log("SP   ",parseInt(this.carForm.get('selling_price').value.toString().replace( /,/g, "" )));
                    // console.log("total cost of the car ",this.total_cost_car);
                    // console.log("Profit in tran detail line 65 ", Profit);
                    //Split Owner Percent and Investors Percent
                    var OwnersAmount_1 = 60 / 100 * Profit;
                    //const InvestorsAmount = 40/100 * Profit;
                    var InvestorsAmount_1 = Profit - OwnersAmount_1;
                    // console.log("Owners Amt ", OwnersAmount);
                    // console.log("Investors Amt ", InvestorsAmount);
                    _this.transactionDetailsService.GetInvestorsInvestmentAndPercentDetailsByPurchaseDate(_this.carForm.get('purchased_on').value, _this.carForm.get('sold_on').value).subscribe(function (res) {
                        var today = new Date();
                        var dd = today.getDate();
                        var mm = today.getMonth() + 1;
                        var yyyy = today.getFullYear();
                        if (dd.toString().length == 1) {
                            var a = "0" + dd.toString();
                            dd = parseInt(a);
                        }
                        if (mm.toString().length == 1) {
                            var a = "0" + mm.toString();
                            mm = parseInt(a, 10);
                        }
                        _this.transactionDetailProfitandLoss = [];
                        res.forEach(function (investor) {
                            var debit = 0;
                            var credit = 0;
                            var transaction_type_id = 0;
                            var transaction_type_mode = "";
                            var investor_percent = investor.investor_percent;
                            // let profitAmount = parseFloat(investor_percent /100) * InvestorsAmount;
                            var profitAmount = ((investor_percent / 100.00) * InvestorsAmount_1).toString();
                            var description = "";
                            //Enable Credit, Debit, Investor
                            _this.transactionDetailsForm.get('credit').enable();
                            _this.transactionDetailsForm.get('credit').updateValueAndValidity({ emitEvent: false, onlySelf: true });
                            _this.transactionDetailsForm.get('debit').enable();
                            _this.transactionDetailsForm.get('debit').updateValueAndValidity({ emitEvent: false, onlySelf: true });
                            _this.transactionDetailsForm.get('investor_id').enable();
                            _this.transactionDetailsForm.get('investor_id').updateValueAndValidity({ emitEvent: false, onlySelf: true });
                            if (parseFloat(profitAmount) > 0) { //Profit
                                credit = parseFloat(profitAmount);
                                transaction_type_id = 3; //Profit
                                transaction_type_mode = 'credit';
                                description = "Profit Earned";
                            }
                            else {
                                debit = parseFloat(profitAmount);
                                var removeNegativeSign = profitAmount.toString().replace(/-/g, '');
                                debit = parseInt(removeNegativeSign);
                                transaction_type_id = 4; //Loss
                                transaction_type_mode = 'debit';
                                description = "Loss Incurred";
                            }
                            //Patch transaction detail values
                            _this.transactionDetailsForm.patchValue({
                                investor_id: investor.investor_id,
                                transaction_type_id: transaction_type_id,
                                transaction_type_mode: transaction_type_mode,
                                car_id: _this.carForm.get('car_id').value,
                                credit: credit,
                                debit: debit,
                                description: description,
                                // date:yyyy+"-0"+mm+"-"+dd,
                                date: _this.carForm.get('sold_on').value,
                                percentage: investor_percent,
                            });
                            //Add individual to array and bulk send to create P&L details
                            //this.transactionDetailsForm.updateValueAndValidity({emitEvent:false, onlySelf:true});
                            _this.transactionDetailProfitandLoss.push(_this.transactionDetailsForm.value);
                        }); //End of Investors Foreach
                        //CREATE OWNER PROFIT TRANSACTION DETAILS
                        var debit = 0;
                        var credit = 0;
                        var transaction_type_id = 0;
                        var transaction_type_mode = "";
                        var profitAmount = OwnersAmount_1;
                        var description = "";
                        if (profitAmount > 0) { //Profit
                            credit = profitAmount;
                            transaction_type_id = 3; //Profit
                            transaction_type_mode = 'credit';
                            description = "Owner Profit Earned";
                        }
                        else {
                            debit = profitAmount;
                            var removeNegativeSign = profitAmount.toString().replace(/-/g, '');
                            debit = parseInt(removeNegativeSign);
                            transaction_type_id = 4; //Loss
                            transaction_type_mode = 'debit';
                            description = "Owner Loss Incurred";
                        }
                        _this.transactionDetailsForm.patchValue({
                            investor_id: 1,
                            transaction_type_id: transaction_type_id,
                            transaction_type_mode: transaction_type_mode,
                            car_id: _this.carForm.get('car_id').value,
                            credit: credit,
                            debit: debit,
                            description: description,
                            date: _this.carForm.get('sold_on').value,
                            percentage: null,
                        });
                        _this.transactionDetailProfitandLoss.push(_this.transactionDetailsForm.value);
                        console.log("P&L details ", _this.transactionDetailProfitandLoss);
                        // Create P&L Transaction Detail for all investors and Update Car with IS_Sold = true
                        _this.transactionDetailsService.createTransactionDetailsProfitAndLoss(_this.transactionDetailProfitandLoss)
                            .debounceTime(1000)
                            .distinctUntilChanged()
                            .subscribe(function (res) {
                            _this.transactionDetailsForm.reset();
                            _this.carService.refreshCar.next(true);
                            _this.transactionDetailsService.refreshTD.next(true);
                        }, function (err) {
                            console.log("createTransactionDetailsProfitAndLoss ", err);
                        }); //End of createTransactionDetailsProfitAndLoss
                    }, //End of response GetInvestorsInvestmentAndPercentDetails
                    function (//End of response GetInvestorsInvestmentAndPercentDetails
                    err) {
                        console.log("GetInvestorsInvestmentAndPercentDetails =>", err);
                    }); //End of GetInvestorsInvestmentAndPercentDetails
                } //End of if selling price exists
                else {
                    _this.opMessage.emit("Please enter a Selling Price");
                    setTimeout(function () {
                        _this.opMessage.emit("");
                    }, 5000);
                } //End of if selling price DOES NOT exist
            } //End of is_sold value == true
            else if (value == false) { //If sold is false delete p&l tran details and update car is sold=false
                _this.deleteProfitOrLossTransactionDetails();
            }
        }); //End of carService.sold.subscribe
        this.sub2 = this.transactionDetailsService.refreshTD.subscribe(function (value) {
            console.log("refreshing td => get tran details by id   ", _this.carService.selectedCarId.getValue());
            _this.getTransactionDetailsById(_this.carService.selectedCarId.getValue());
        });
    }
    TransactionDetailsComponent.prototype.ngOnInit = function () {
        this.transactionDetailsForm.reset();
    }; //End of ng oninit
    TransactionDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
    };
    TransactionDetailsComponent.prototype.deleteProfitOrLossTransactionDetails = function () {
        var _this = this;
        this.transactionDetailsService.deleteProfitOrLossTransactionDetails(this.carService.selectedCarId.getValue())
            .subscribe(function (res) {
            _this.transactionDetailsService.refreshTD.next(true);
            _this.carService.refreshCar.next(true);
        }, function (err) {
        });
    };
    TransactionDetailsComponent.prototype.voidTransaction = function (transactionDetails) {
        var _this = this;
        this.transactionDetailsService.voidTransactionDetails(transactionDetails)
            .subscribe(function (res) {
            _this.getTransactionDetailsById(_this.selectedCar_Id);
        }, function (err) {
            console.log("Void Transaction Details ", err);
        });
        // var balance = this.total_balance.replace (/,/g, "");
        // //If investment => check if balance is there
        // //If withdrawal => Check if balance is there
        //
        // if(transactionDetails.transaction_type_id == 11){ //Withdrawal
        //   if(parseInt(balance) < parseInt(transactionDetails.debit))
        //   {
        //     this.message_error="Not enough available balance - Cannot void this transaction";
        //     setTimeout(() => {
        //       this.message_error = "";
        //     },5000);
        //   }
        //   else{
        //     this.transactionDetailsService.voidTransactionDetails(transactionDetails)
        //     .subscribe(
        //       res=>{
        //         this.getTransactionDetailsByInvestor(this.selectedClient_Id);
        //       },
        //       err=>{
        //         console.log("Void Transaction Details ", err);
        //       });
        //     }
        //   }
        //
        //   else if(transactionDetails.transaction_type_id == 1){ //Investment
        //     if(parseInt(balance) < parseInt(transactionDetails.credit))
        //     {
        //       this.message_error="Not enough available balance - Cannot void this transaction";
        //       this.transactionDetailsForm.reset();
        //       setTimeout(() => {
        //         this.message_error = "";
        //       },5000);
        //     }
        //     else{
        //       this.transactionDetailsService.voidTransactionDetails(transactionDetails)
        //       .subscribe(
        //         res=>{
        //           this.getTransactionDetailsByInvestor(this.selectedClient_Id);
        //         },
        //         err=>{
        //           console.log("Void Transaction Details ", err);
        //         });
        //       }
        //     }
    };
    TransactionDetailsComponent.prototype.createForm = function () {
        var _this = this;
        this.transactionDetailsForm = this.fb.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            transaction_type_id: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            transaction_type_mode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            car_id: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            investor_id: [''],
            expense_id: [{ value: '', disabled: true }],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)]],
            credit: [{ value: '', disabled: true }],
            debit: [{ value: '', disabled: true }],
            credit_formatted: [],
            debit_formatted: [],
            percentage: []
        });
        this.transactionDetailsForm.get('transaction_type_id')
            .valueChanges.subscribe(function (transaction_type_id) {
            if (transaction_type_id == "2") { //Expense
                _this.transactionDetailsForm.get('expense_id').enable();
                _this.transactionDetailsForm.get('expense_id').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                _this.transactionDetailsForm.get('expense_id').updateValueAndValidity({ emitEvent: false, onlySelf: true });
            }
            else {
                _this.transactionDetailsForm.get('expense_id').clearValidators();
                _this.transactionDetailsForm.get('expense_id').disable();
                _this.transactionDetailsForm.get('expense_id').updateValueAndValidity({ emitEvent: false, onlySelf: true });
                _this.transactionDetailsForm.patchValue({
                    expense_id: 0,
                    credit: "",
                    debit: ""
                });
            }
        });
        this.carService.selectedCarId
            .subscribe(function (res) {
            _this.selectedCar_Id = res;
            if (_this.carService.selectedMode == "Edit") {
                // this.getTransactionDetailsById(res);
            }
        }, function (err) {
        });
    };
    TransactionDetailsComponent.prototype.getSelectedTransactionTypeMode = function (transactionTypeId) {
        var _this = this;
        var transactionType;
        this.transactionTypes$.subscribe(function (res) {
            transactionType = res.filter(function (tt) { return tt.transaction_type_id == transactionTypeId; });
            _this.transactionDetailsForm.patchValue({
                transaction_type_mode: transactionType[0].mode,
            });
            if (transactionType[0].mode == "credit") {
                _this.transactionDetailsForm.get('credit').enable();
                _this.transactionDetailsForm.get('credit').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]);
                _this.transactionDetailsForm.get('credit').updateValueAndValidity({ emitEvent: false, onlySelf: true });
                _this.transactionDetailsForm.patchValue({ 'debit': '' });
                _this.transactionDetailsForm.get('debit').clearValidators();
                _this.transactionDetailsForm.get('debit').disable();
                _this.transactionDetailsForm.get('debit').updateValueAndValidity({ emitEvent: false, onlySelf: true });
            }
            else {
                _this.transactionDetailsForm.get('debit').enable();
                _this.transactionDetailsForm.get('debit').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]);
                _this.transactionDetailsForm.get('debit').updateValueAndValidity({ emitEvent: false, onlySelf: true });
                _this.transactionDetailsForm.patchValue({ 'credit': '' });
                _this.transactionDetailsForm.get('credit').clearValidators();
                _this.transactionDetailsForm.get('credit').disable();
                _this.transactionDetailsForm.get('credit').updateValueAndValidity({ emitEvent: false, onlySelf: true });
            }
        });
    };
    TransactionDetailsComponent.prototype.getTransactionDetailsById = function (car_id) {
        var _this = this;
        //this.transactionDetailsForm.reset();
        this.transactionDetails$ = this.transactionDetailsService.getTransactionDetailsById(car_id);
        var total_debits = "0.00";
        var total_credits = "0.00";
        this.transactionDetails$.subscribe(function (res) {
            _this.total_cost_car = 0;
            _this.total_money_received = 0;
            _this.total_money_invested = 0;
            res.forEach(function (val) {
                if (val.is_void != true) {
                    if (val.transaction_type_mode == "credit") {
                        total_credits = (parseFloat(total_credits) + parseFloat(val.credit)).toString();
                    }
                    else if (val.transaction_type_mode == "debit") {
                        total_debits = (parseFloat(total_debits) + parseFloat(val.debit)).toString();
                        _this.total_cost_car = _this.total_cost_car + parseFloat(val.debit);
                    }
                    if (val.transaction_type_id == 13) {
                        _this.total_money_received = _this.total_money_received + parseFloat(val.credit);
                    }
                    if (val.transaction_type_id == 12) {
                        _this.total_money_invested = _this.total_money_invested + parseFloat(val.debit);
                    }
                    _this.total_credits = _this.formatCurrencyByVal(total_credits);
                    _this.total_debits = _this.formatCurrencyByVal(total_debits);
                }
            });
        }, function (err) {
            console.log(err);
        });
    };
    TransactionDetailsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.transactionDetailsForm.patchValue({
            car_id: this.selectedCar_Id,
        });
        if (this.transactionDetailsForm.get('transaction_type_mode').value == "debit") {
            //Purchase Transaction Type Should match Cost Price
            if (this.transactionDetailsForm.get('transaction_type_id').value == 12) {
                var cp = parseInt(this.carForm.get('cost_price').value.toString().replace(/,/g, ""));
                var debit = parseInt(this.transactionDetailsForm.get('debit').value.toString().replace(/,/g, ""));
                var tot = this.total_money_invested + debit;
                if (tot > cp) {
                    this.opMessage.emit("Purchase Type transactions should not exceed the Cost Price " + this.carForm.get('cost_price').value);
                    setTimeout(function () {
                        _this.opMessage.emit("");
                    }, 5000);
                }
                else {
                    //this.createTransactionDetails();
                    this.getAvailablePoolBalanceAsOfPurchaseDate();
                }
            }
            else {
                //this.createTransactionDetails();
                this.getAvailablePoolBalanceAsOfPurchaseDate();
            }
        }
        else {
            //Sold Transaction Type Should match Selling Price
            if (this.transactionDetailsForm.get('transaction_type_id').value == 13) {
                var sp = parseInt(this.carForm.get('selling_price').value.toString().replace(/,/g, ""));
                var credit = parseInt(this.transactionDetailsForm.get('credit').value.toString().replace(/,/g, ""));
                var tot = this.total_money_received + credit;
                if (tot > sp) {
                    this.opMessage.emit("Sold Type transactions should not exceed the Selling Price " + this.carForm.get('selling_price').value);
                    setTimeout(function () {
                        _this.opMessage.emit("");
                    }, 5000);
                }
                else {
                    this.createTransactionDetails();
                }
            }
            else {
                this.createTransactionDetails();
            }
        }
        //this.transactionDetailsForm.reset();
    };
    TransactionDetailsComponent.prototype.getAvailablePoolBalanceAsOfPurchaseDate = function () {
        var _this = this;
        var formattedDate = this.carForm.get('purchased_on').value.split('T');
        var debit = 0;
        var total_debits = 0;
        this.transactionDetailsService.getAvailablePoolBalanceAsOfPurchaseDate(formattedDate[0].toString())
            .subscribe(function (res) {
            debit = parseInt(_this.transactionDetailsForm.get('debit').value.toString().replace(/,/g, ""));
            console.log("available balance ", res[0].available_balance);
            if (parseInt(res[0].available_balance) < debit) {
                _this.opMessage.emit("Insufficient funds in the Gear2Gear Pool - Balance is " + parseInt(res[0].available_balance));
                _this.transactionDetailsForm.reset();
                setTimeout(function () {
                    _this.opMessage.emit("");
                }, 5000);
            }
            else {
                _this.createTransactionDetails();
            }
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    TransactionDetailsComponent.prototype.deleteTransactionDetails = function (transations_Details_id) {
        this.transactionDetailsService.deleteTransactionDetails(transations_Details_id)
            .subscribe(function (res) {
            console.log("Transaction Details for Purchase Type has been deleted, since purchase transactions exceed the cost price(Might have happened when cost price was reduced and updated at some point)");
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    TransactionDetailsComponent.prototype.createTransactionDetails = function () {
        var _this = this;
        if (this.transactionDetailsForm.get('transaction_type_id').value != null) {
            var car_id = 0;
            this.transactionDetailsForm.patchValue({
                car_id: parseInt(this.carForm.get('car_id').value),
            });
            this.transactionDetailsService.createTransactionDetails(this.transactionDetailsForm.value)
                .subscribe(function (res) {
                _this.transactionDetailsForm.reset();
                _this.getTransactionDetailsById(_this.carService.selectedCarId.getValue());
                _this.transactionDetailsForm.patchValue({ 'debit': '' });
                _this.transactionDetailsForm.get('debit').clearValidators();
                _this.transactionDetailsForm.get('debit').disable();
                _this.transactionDetailsForm.get('debit').updateValueAndValidity({ emitEvent: false, onlySelf: true });
                _this.transactionDetailsForm.patchValue({ 'credit': '' });
                _this.transactionDetailsForm.get('credit').clearValidators();
                _this.transactionDetailsForm.get('credit').disable();
                _this.transactionDetailsForm.get('credit').updateValueAndValidity({ emitEvent: false, onlySelf: true });
            }, function (err) {
                console.log(err);
            }, function () {
            });
        }
    };
    TransactionDetailsComponent.prototype.formatCurrency = function (control) {
        var val = control.value;
        var isValid = /^[0-9,.]*$/.test(val);
        if (isValid == true) {
            var x = val.toString().replace(/,/g, "");
            var afterPoint = '';
            if (x.indexOf('.') > 0)
                afterPoint = x.substring(x.indexOf('.'), x.length);
            x = Math.floor(x);
            x = x.toString();
            var lastThree = x.substring(x.length - 3);
            var otherNumbers = x.substring(0, x.length - 3);
            if (otherNumbers != '')
                lastThree = ',' + lastThree;
            var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
            control.setValue(res);
        }
        else {
            control.setValue("");
        }
    };
    TransactionDetailsComponent.prototype.formatCurrencyByVal = function (val) {
        var val1 = '' + val;
        var x = val1.replace(/,/g, "");
        var afterPoint = '';
        if (x.indexOf('.') > 0)
            afterPoint = x.substring(x.indexOf('.'), x.length);
        x = Math.floor(parseInt(x)).toString();
        var lastThree = x.substring(x.length - 3);
        var otherNumbers = x.substring(0, x.length - 3);
        if (otherNumbers != '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
        return res;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], TransactionDetailsComponent.prototype, "transactionTypes$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], TransactionDetailsComponent.prototype, "refreshTD", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], TransactionDetailsComponent.prototype, "expenses$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], TransactionDetailsComponent.prototype, "carForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TransactionDetailsComponent.prototype, "opMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TransactionDetailsComponent.prototype, "opFunction", void 0);
    TransactionDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transaction-details',
            template: __webpack_require__(/*! ./transaction-details.component.html */ "./src/app/components/car/transaction-details/transaction-details.component.html"),
            styles: [__webpack_require__(/*! ./transaction-details.component.scss */ "./src/app/components/car/transaction-details/transaction-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            app_services_car_car_service__WEBPACK_IMPORTED_MODULE_4__["CarService"],
            app_services_client_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"],
            app_services_transaction_details_transaction_details_service__WEBPACK_IMPORTED_MODULE_5__["TransactionDetailsService"]])
    ], TransactionDetailsComponent);
    return TransactionDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/checklist/checklist.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/checklist/checklist.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"checklist row mask flex-center rgba-white-strong\">\n    <div class=\"title text-center\">\n      <h1 class=\"h1-responsive black-text\">Our Checklist</h1>\n      <p class=\"tag\">In our expert eyes, the way the car looks and feels speaks volumes about how the car was maintained.</p>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"checklist-item col-md-4 wow fadeInDown\" data-wow-delay=\"0.1s\">\n        <header>\n          <div class=\"header__bg\"></div>\n          <div class=\"header-div\">\n            <span class=\"col-12 fa fa-handshake-o text-center\"></span>\n            <h3> We procure cars that are customer driven and do not deal with middlemen.</h3>\n          </div>\n        </header>\n      </div>\n      <div class=\"checklist-item col-md-4 wow fadeInDown\" data-wow-delay=\"0.2s\">\n        <header>\n          <div class=\"header__bg\"></div>\n          <div class=\"header-div\">\n            <span class=\"col-12 fa fa-history text-center\"></span>\n          <h3>We check the service history and ensure that the car has been serviced through authorized service centers only.</h3>\n          </div>\n        </header>\n      </div>\n      <div class=\"checklist-item col-md-4 wow fadeInDown\" data-wow-delay=\"0.3s\">\n        <header>\n          <div class=\"header__bg\"></div>\n          <div class=\"header-div\">\n            <span class=\"col-12 fa fa-car text-center\"></span>\n          <h3>We do a thorough check for any impacts.</h3>\n          </div>\n        </header>\n      </div>\n\n    </div>\n    <div class=\"row row2\">\n      <div class=\"col-md-4 checklist-item wow fadeInUp\" data-wow-delay=\"0.1s\" visible>\n        <header>\n          <div class=\"header__bg\"></div>\n          <div class=\"header-div\">\n            <span class=\"col-12 fa fa-eye text-center\"></span>\n          <h3>We ensure that the odometer is not tampered with.</h3>\n          </div>\n        </header>\n      </div>\n      <div class=\"checklist-item col-md-4 wow fadeInUp\" data-wow-delay=\"0.2s\">\n        <header>\n\n          <div class=\"header__bg\"></div>\n          <div class=\"header-div\">\n            <span class=\"col-12 fa fa-book text-center\"></span>\n          <h3>Using our expertise we compare the tyre condition with the odometer reading.</h3>\n          </div>\n        </header>\n      </div>\n      <div class=\"checklist-item col-md-4 wow fadeInUp\" data-wow-delay=\"0.3s\">\n        <header>\n          <div class=\"header__bg\"></div>\n          <div class=\"header-div\">\n            <span class=\"col-12 fa fa-paint-brush text-center\"></span>\n          <h3>We compare the paint job to the age of the car.\n          </h3>\n          </div>\n        </header>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/checklist/checklist.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/checklist/checklist.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  background-image: url(\"https://s3.amazonaws.com/gear2gear/red-car-garage.jp2\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed; }\n\nheader {\n  position: relative;\n  height: 225px;\n  overflow: hidden; }\n\n.checklist {\n  padding: 50px; }\n\n.header__bg {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin-bottom: 25px;\n  margin-right: 5px;\n  background-image: linear-gradient(black, #333);\n  -webkit-transform: skewY(-6deg);\n          transform: skewY(-6deg);\n  -webkit-transform-origin: top left;\n          transform-origin: top left; }\n\nheader .header-div {\n  margin: 0;\n  padding: 50px 50px;\n  position: relative;\n  color: white; }\n\n.fa {\n  font-size: 25px !important;\n  margin-bottom: 15px;\n  color: #ADFF2F; }\n\n.title {\n  padding: 50px;\n  color: #e5e5e5;\n  font-size: 18px;\n  text-transform: uppercase; }\n\n.content {\n  padding: 5%;\n  padding-top: 5%;\n  letter-spacing: 1px; }\n\n.row2 {\n  margin-top: 50px; }\n\n/* Extra Small devices (tablets, 768px and up) col-sm */\n\n@media (max-width: 767px) {\n  .row2 {\n    margin-top: 0px; } }\n\n/* Small devices (tablets, 768px and up) col-md  collapses here*/\n\n/* Medium devices (desktops, 992px and up)  col-lg */\n\n/* Large devices (large desktops, 1200px and up) */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb3VqYW55YS9Eb2N1bWVudHMvQ2xvbmVkLVJlcG8vZ2VhcjJnZWFyL3NyYy9hcHAvY29tcG9uZW50cy9jaGVja2xpc3QvY2hlY2tsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEVBQThFO0VBQzlFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxhQUFZLEVBQUE7O0FBRWQ7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxRQUFRO0VBQ1IsT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUVoQiw4Q0FBOEM7RUFDOUMsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixrQ0FBMEI7VUFBMUIsMEJBQTBCLEVBQUE7O0FBSzVCO0VBQ0UsU0FBUztFQUNULGtCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsMEJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsYUFBYztFQUNkLGNBQWM7RUFDZCxlQUFlO0VBQ2YseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsV0FBVTtFQUNWLGVBQWM7RUFDZCxtQkFBbUIsRUFBQTs7QUFFckI7RUFDRyxnQkFBZSxFQUFBOztBQUdsQix1REFBQTs7QUFDQTtFQUNFO0lBQ0csZUFBYyxFQUFBLEVBQ2hCOztBQUdILGdFQUFBOztBQU1BLG9EQUFBOztBQUtBLGtEQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGVja2xpc3QvY2hlY2tsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbntcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2dlYXIyZ2Vhci9yZWQtY2FyLWdhcmFnZS5qcDJcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG5cbmhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyMjVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jaGVja2xpc3R7XG4gIHBhZGRpbmc6NTBweDtcbn1cbi5oZWFkZXJfX2JnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206MjVweDtcbiAgbWFyZ2luLXJpZ2h0OjVweDtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChibGFjaywgIzMzMyk7XG4gIHRyYW5zZm9ybTogc2tld1koLTZkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbn1cblxuXG5cbmhlYWRlciAuaGVhZGVyLWRpdntcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOjUwcHggNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYXtcbiAgZm9udC1zaXplOjI1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgY29sb3I6ICNBREZGMkY7XG59XG5cbi50aXRsZXtcbiAgcGFkZGluZyA6IDUwcHg7XG4gIGNvbG9yOiAjZTVlNWU1O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jb250ZW50e1xuICBwYWRkaW5nOjUlO1xuICBwYWRkaW5nLXRvcDo1JTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5yb3cye1xuICAgbWFyZ2luLXRvcDo1MHB4O1xufVxuXG4vKiBFeHRyYSBTbWFsbCBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApIGNvbC1zbSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5yb3cye1xuICAgICBtYXJnaW4tdG9wOjBweDtcbiAgfVxuXG59XG4vKiBTbWFsbCBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApIGNvbC1tZCAgY29sbGFwc2VzIGhlcmUqL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcblxuXG59XG5cbi8qIE1lZGl1bSBkZXZpY2VzIChkZXNrdG9wcywgOTkycHggYW5kIHVwKSAgY29sLWxnICovXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcblxufVxuXG4vKiBMYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHt9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/checklist/checklist.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/checklist/checklist.component.ts ***!
  \*************************************************************/
/*! exports provided: ChecklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistComponent", function() { return ChecklistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChecklistComponent = /** @class */ (function () {
    function ChecklistComponent() {
    }
    ChecklistComponent.prototype.ngOnInit = function () {
    };
    ChecklistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checklist',
            template: __webpack_require__(/*! ./checklist.component.html */ "./src/app/components/checklist/checklist.component.html"),
            styles: [__webpack_require__(/*! ./checklist.component.scss */ "./src/app/components/checklist/checklist.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChecklistComponent);
    return ChecklistComponent;
}());



/***/ }),

/***/ "./src/app/components/client/client-form/client-form.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/client/client-form/client-form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section  id=\"top\" class=\"container-fluid section\">\n  <div *ngIf=\"message\" class=\"alert alert-success text-center col-12\">\n    <strong>Success!</strong>&nbsp;<span>{{message}}</span>\n  </div>\n  <div *ngIf=\"message_error\" class=\"alert alert-danger text-center col-12\">\n    <strong>Error!</strong>&nbsp;<span>{{message_error}}</span>\n  </div>\n  <section class=\"container-fluid section\">\n    <div class=\"row\">\n      <mat-tab-group class=\"col-12\">\n        <mat-tab  label=\"Client Details\">\n          <div class=\"col-lg-12 grey lighten-4\">\n            <header class=\"header row\">\n              <div class=\"col-lg-12\">\n                <app-title [title]=title></app-title>\n              </div>\n            </header>\n            <div class=\"col-12\">\n              <form [formGroup]=\"clientForm\" (ngSubmit)=\"onSubmit()\" >\n                <div class=\"form-group\">\n                  <label for=\"inputClientName\" class=\"col-sm-3 col-form-label\">Name</label>\n                  <div>\n                    <div class=\"md-form mt-0\">\n                      <input type=\"text\" class=\"form-control capitalize\" id=\"inputClientName\" formControlName=\"name\">\n                      <!-- <p style=\"color:red\" *ngIf=\"clientForm.controls.name.touched && clientForm.controls.name.errors.required\">Required</p> -->\n                      <app-control-messages [control]=\"clientForm.controls.name\"></app-control-messages>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputPhone\" class=\"col-sm-3 col-form-label\">Phone</label>\n                  <div>\n                    <div class=\"md-form mt-0\">\n                      <input type=\"text\" class=\"form-control capitalize\" id=\"inputPhone\" formControlName=\"phone\">\n                      <!-- <p style=\"color:red\" *ngIf=\"clientForm.controls.name.touched && clientForm.controls.name.errors.required\">Required</p> -->\n                      <app-control-messages [control]=\"clientForm.controls.phone\"></app-control-messages>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputEmail\" class=\"col-sm-3 col-form-label\">Email</label>\n                  <div>\n                    <div class=\"md-form mt-0\">\n                      <input type=\"text\" class=\"form-control\" id=\"inputEmail\" formControlName=\"email\">\n                      <!-- <p style=\"color:red\" *ngIf=\"clientForm.controls.name.touched && clientForm.controls.name.errors.required\">Required</p> -->\n                      <app-control-messages [control]=\"clientForm.controls.email\"></app-control-messages>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputAddress\" class=\"col-sm-3 col-form-label\">Address</label>\n                  <div>\n                    <div class=\"md-form mt-0\">\n                      <input type=\"text\" class=\"form-control capitalize\" id=\"inputAddress\" formControlName=\"address\">\n                      <!-- <p style=\"color:red\" *ngIf=\"clientForm.controls.name.touched && clientForm.controls.name.errors.required\">Required</p> -->\n                      <app-control-messages [control]=\"clientForm.controls.address\"></app-control-messages>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputCity\" class=\"col-sm-3 col-form-label\">City</label>\n                  <div>\n                    <div class=\"md-form mt-0\">\n                      <input type=\"text\" class=\"form-control capitalize\" id=\"inputCity\" formControlName=\"city\">\n                      <app-control-messages [control]=\"clientForm.controls.city\"></app-control-messages>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputState\" class=\"col-sm-3 col-form-label\">State</label>\n                  <div>\n                    <div class=\"mt-0\">\n                      <!-- <input type=\"text\" class=\"form-control capitalize\" id=\"inputState\" formControlName=\"state\"> -->\n                      <select class=\"form-control\" id=\"sel1\" formControlName=\"state\">\n                        <option *ngFor=\"let state of clientService.states$\" [value]=\"state.id\" >{{state.name}}</option>\n                      </select>\n                      <app-control-messages [control]=\"clientForm.controls.state\"></app-control-messages>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"inputPin\" class=\"col-sm-3 col-form-label\">Pin</label>\n                  <div>\n                    <div class=\"md-form mt-0\">\n                      <input type=\"text\" class=\"form-control capitalize\" id=\"inputPin\" formControlName=\"pin\">\n                      <!-- <p style=\"color:red\" *ngIf=\"clientForm.controls.name.touched && clientForm.controls.name.errors.required\">Required</p> -->\n                      <!-- <app-control-messages [control]=\"clientForm.controls.pin\"></app-control-messages> -->\n                    </div>\n                  </div>\n                </div>\n                <!-- <div class=\"form-check\" disabled>\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"inputOwner\" formControlName=\"is_owner\">\n                  <label class=\"form-check-label\" for=\"inputOwner\">Is Owner?</label>\n                </div> -->\n                <div class=\"form-check\" *ngIf=\"clientForm.controls.client_id.value != 1\">\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"inputInvestor\" formControlName=\"is_investor\">\n                  <label class=\"form-check-label\" for=\"inputInvestor\">Is Investor?</label>\n                </div>\n\n                <div class=\"form-group\">\n                  <div class=\"text-right\">\n                    <button type=\"submit\" class=\"btn btn-primary btn-custom btn-md\" >\n                      <i class=\"fa fa-save\"></i>\n                    </button>\n                    <app-simple-modal [module]=\"module\" [mode]=\"mode\" [name]=\"clientForm.controls.name.value\" (isDelete)=\"deleteClient($event)\"></app-simple-modal>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </mat-tab>\n        <mat-tab *ngIf=\"selectedClient_Id && clientForm.controls.is_investor.value == true\" class=\"col-12\" label=\"Investment Details\">\n          <app-transaction-details (opMessage)=\"setMessage($event)\" [investor_id]=\"selectedClient_Id\" [investors$]=\"investors$\" [transactionTypes$]=\"transactionTypes$\" [clientForm]=\"clientForm\" [refreshTD]=\"refreshTD\"></app-transaction-details>\n        </mat-tab>\n      </mat-tab-group>\n    </div>\n  </section>\n"

/***/ }),

/***/ "./src/app/components/client/client-form/client-form.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/client/client-form/client-form.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50L2NsaWVudC1mb3JtL2NsaWVudC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/client/client-form/client-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/client/client-form/client-form.component.ts ***!
  \************************************************************************/
/*! exports provided: ClientFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientFormComponent", function() { return ClientFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_client_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/client/client.service */ "./src/app/services/client/client.service.ts");
/* harmony import */ var app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/common/common.service */ "./src/app/services/common/common.service.ts");
/* harmony import */ var app_services_transaction_type_transaction_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/transaction-type/transaction-type.service */ "./src/app/services/transaction-type/transaction-type.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClientFormComponent = /** @class */ (function () {
    function ClientFormComponent(fb, clientService, commonService, transactionTypeService, router, route) {
        var _this = this;
        this.fb = fb;
        this.clientService = clientService;
        this.commonService = commonService;
        this.transactionTypeService = transactionTypeService;
        this.router = router;
        this.route = route;
        this.title = "Create Client";
        this.module = "client";
        this.mode = "discard";
        this.message = "";
        this.message_error = "";
        this.submitted = false;
        this.sub = this.clientService.selectedClientId
            .subscribe(function (res) {
            _this.selectedClient_Id = res;
            if (_this.clientService.selectedMode == "Get" || _this.clientService.selectedMode == "Edit") {
                _this.title = "Edit Client";
                _this.mode = "delete";
                _this.getClientById(res);
                _this.clientService.transactionDetail.next("true");
            }
        }, function (err) {
        });
    }
    ClientFormComponent.prototype.createForm = function () {
        this.clientForm = this.fb.group({
            client_id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(12)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            state: [],
            pin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)],
            is_investor: [false],
            is_owner: [false]
        });
    };
    ClientFormComponent.prototype.createInvestmentRecord = function () {
        return this.fb.group({
            date: [],
            amount: [],
            is_void: [false],
            is_disabled: [false],
            is_void_disabled: [false]
        });
    };
    ClientFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.clientForm.valid) {
            if (this.clientService.selectedMode == 'Create') {
                this.createClient();
            }
            else if (this.clientService.selectedMode == 'Edit' || this.clientService.selectedMode == 'Get') {
                this.updateClient();
            }
        }
    };
    ClientFormComponent.prototype.selectClient = function (client_id) {
        var _this = this;
        this.clientService.selectedMode = 'Edit';
        this.router.navigate(['/client/edit']);
        setTimeout(function () {
            _this.clientService.selectedClientId.next(client_id);
        }, 100);
    };
    ClientFormComponent.prototype.getClientById = function (client_id) {
        var _this = this;
        this.clientService.getClientById(client_id)
            .subscribe(function (res) {
            _this.patchForm(res[0]);
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    ClientFormComponent.prototype.patchForm = function (res) {
        //this.clientForm.patchValue(res);
        this.clientForm.patchValue({
            client_id: res.client_id,
            name: res.name,
            phone: res.phone,
            email: res.email,
            address: res.address,
            city: res.city,
            state: res.state,
            pin: res.pin,
            is_investor: res.is_investor,
            is_owner: res.is_owner
        });
    };
    ClientFormComponent.prototype.createClient = function () {
        var _this = this;
        this.clientService.createClient(this.clientForm.value)
            .subscribe(function (res) {
            window.scrollTo(0, 0);
            _this.message = _this.clientForm.get('name').value + " created successfully.";
            setTimeout(function () {
                _this.message = "";
            }, 5000);
            _this.clientService.refreshList.next(true);
            _this.clientForm.reset();
            _this.selectClient(parseInt(res.client_id));
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    ClientFormComponent.prototype.updateClient = function () {
        var _this = this;
        this.clientService.updateClient(this.clientForm.value)
            .subscribe(function (res) {
            window.scrollTo(0, 0);
            _this.message = _this.clientForm.get('name').value + " updated successfully.";
            setTimeout(function () {
                _this.message = "";
            }, 5000);
            _this.clientService.refreshList.next(true);
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    ClientFormComponent.prototype.deleteClient = function (event) {
        var _this = this;
        if (this.selectedClient_Id) {
            this.clientService.deleteClient(this.selectedClient_Id).subscribe(function (res) {
                _this.clientService.refreshList.next(true);
                _this.router.navigate(['/client/add']);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.clientForm.reset();
        }
    };
    ClientFormComponent.prototype.getTransactionTypesForClient = function () {
        this.transactionTypes$ = this.transactionTypeService.getTransactionTypesForClient();
    };
    ClientFormComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            window.scrollTo(0, 0);
            //this.router.navigate(['/car/add']);
        }, 500);
        this.createForm();
        this.getTransactionTypesForClient();
    };
    ClientFormComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ClientFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-form',
            template: __webpack_require__(/*! ./client-form.component.html */ "./src/app/components/client/client-form/client-form.component.html"),
            styles: [__webpack_require__(/*! ./client-form.component.scss */ "./src/app/components/client/client-form/client-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            app_services_client_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"],
            app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
            app_services_transaction_type_transaction_type_service__WEBPACK_IMPORTED_MODULE_5__["TransactionTypeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ClientFormComponent);
    return ClientFormComponent;
}());



/***/ }),

/***/ "./src/app/components/client/client-list/client-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/client/client-list/client-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid section-list\">\n  <div>\n    <app-search (searchTermValueChanged)=\"searchClients($event)\" (isCreate)=\"createClient('Create')\"></app-search>\n  </div>\n  <div>\n    <div *ngIf=\"(results$ | async)?.length==0\" class=\"alert alert-danger text-center col-12\">\n      <strong>Error!</strong>&nbsp;<span>No records found</span>\n    </div>\n    <table class=\"table\">\n      <thead class=\"#f5f5f5 grey lighten-4\">\n        <tr>\n          <th>Name</th>\n          <th>Edit</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor='let client of results$ | async' [ngClass]=\"{'is-active': selectedClientId == client.client_id}\">\n          <td class=\"capitalize\">{{client.name}}</td>\n          <td class=\"pointer\" type=\"button\" (click)=\"selectClient(client.client_id, 'Get')\">\n              <i class=\"fa fa-pencil\"></i>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/client/client-list/client-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/client/client-list/client-list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50L2NsaWVudC1saXN0L2NsaWVudC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/client/client-list/client-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/client/client-list/client-list.component.ts ***!
  \************************************************************************/
/*! exports provided: ClientListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientListComponent", function() { return ClientListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_client_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/client/client.service */ "./src/app/services/client/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientListComponent = /** @class */ (function () {
    function ClientListComponent(clientService, router, route) {
        var _this = this;
        this.clientService = clientService;
        this.router = router;
        this.route = route;
        this.searchTerm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clientService.selectedClientId.subscribe(function (res) {
            _this.selectedClientId = res;
        }, function (err) {
        });
    }
    ClientListComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/client/add']);
    };
    ClientListComponent.prototype.searchClients = function (search) {
        this.searchTerm.emit(search);
    };
    //On Click of the Add Button
    ClientListComponent.prototype.createClient = function (mode) {
        this.selectedClientId = 0;
        this.clientService.selectedMode = mode;
        this.router.navigate(['/client/add']);
    };
    //On Click of the Edit Button
    ClientListComponent.prototype.selectClient = function (client_id, mode) {
        var _this = this;
        this.selectedClientId = client_id;
        this.clientService.selectedMode = mode;
        this.router.navigate(['/client/edit']);
        setTimeout(function () {
            _this.clientService.selectedClientId.next(client_id);
        }, 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], ClientListComponent.prototype, "results$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ClientListComponent.prototype, "searchTerm", void 0);
    ClientListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-list',
            template: __webpack_require__(/*! ./client-list.component.html */ "./src/app/components/client/client-list/client-list.component.html"),
            styles: [__webpack_require__(/*! ./client-list.component.scss */ "./src/app/components/client/client-list/client-list.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_client_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ClientListComponent);
    return ClientListComponent;
}());



/***/ }),

/***/ "./src/app/components/client/client-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/client/client-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ClientRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRoutingModule", function() { return ClientRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client.component */ "./src/app/components/client/client.component.ts");
/* harmony import */ var _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-list/client-list.component */ "./src/app/components/client/client-list/client-list.component.ts");
/* harmony import */ var _client_form_client_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client-form/client-form.component */ "./src/app/components/client/client-form/client-form.component.ts");
/* harmony import */ var app_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var clientRoutes = [
    {
        path: 'client',
        canActivate: [app_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _client_component__WEBPACK_IMPORTED_MODULE_2__["ClientComponent"],
        children: [
            { path: 'list', component: _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_3__["ClientListComponent"] },
            { path: 'add', component: _client_form_client_form_component__WEBPACK_IMPORTED_MODULE_4__["ClientFormComponent"] },
            { path: 'edit', component: _client_form_client_form_component__WEBPACK_IMPORTED_MODULE_4__["ClientFormComponent"] }
        ]
    }
];
var ClientRoutingModule = /** @class */ (function () {
    function ClientRoutingModule() {
    }
    ClientRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(clientRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ClientRoutingModule);
    return ClientRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/client/client.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/client/client.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<header class=\"header\">\n  <div class=\"col-12\">\n    <app-title [title]=title></app-title>\n  </div>\n</header>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-4\">\n  <app-client-list (searchTerm)=\"searchClients($event)\" [results$]=\"clients$\"></app-client-list>\n  </div>\n  <div class=\"col-lg-8\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/client/client.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/client/client.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50L2NsaWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/client/client.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/client/client.component.ts ***!
  \*******************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_observable_EmptyObservable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/EmptyObservable */ "./node_modules/rxjs-compat/_esm5/observable/EmptyObservable.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_client_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/client/client.service */ "./src/app/services/client/client.service.ts");
/* harmony import */ var app_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/common/common.service */ "./src/app/services/common/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClientComponent = /** @class */ (function () {
    function ClientComponent(fb, clientService, commonService, router, route) {
        this.fb = fb;
        this.clientService = clientService;
        this.commonService = commonService;
        this.router = router;
        this.route = route;
        this.title = "Client";
        //this.getStates();
    }
    ClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getClients();
        this.clientService.refreshList.subscribe(function (res) {
            _this.getClients();
        }, function (err) {
            console.log(err);
        });
    };
    ClientComponent.prototype.getClients = function () {
        this.clients$ = this.clientService.getClients();
    };
    ClientComponent.prototype.searchClients = function (searchTerm) {
        if (searchTerm) {
            this.clients$ = this.clientService.searchClients(searchTerm);
        }
        else {
            this.getClients();
            this.clients$ = new rxjs_observable_EmptyObservable__WEBPACK_IMPORTED_MODULE_2__["EmptyObservable"]();
        }
    };
    ClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/components/client/client.component.html"),
            styles: [__webpack_require__(/*! ./client.component.scss */ "./src/app/components/client/client.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], app_services_client_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"], app_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/components/client/client.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/client/client.module.ts ***!
  \****************************************************/
/*! exports provided: ClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _client_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-routing.module */ "./src/app/components/client/client-routing.module.ts");
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client.component */ "./src/app/components/client/client.component.ts");
/* harmony import */ var _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-list/client-list.component */ "./src/app/components/client/client-list/client-list.component.ts");
/* harmony import */ var _client_form_client_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client-form/client-form.component */ "./src/app/components/client/client-form/client-form.component.ts");
/* harmony import */ var _transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transaction-details/transaction-details.component */ "./src/app/components/client/transaction-details/transaction-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _client_routing_module__WEBPACK_IMPORTED_MODULE_3__["ClientRoutingModule"],
            ],
            declarations: [
                _client_component__WEBPACK_IMPORTED_MODULE_4__["ClientComponent"],
                _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_5__["ClientListComponent"],
                _client_form_client_form_component__WEBPACK_IMPORTED_MODULE_6__["ClientFormComponent"],
                _transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_7__["TransactionDetailsComponent"]
            ],
        })
    ], ClientModule);
    return ClientModule;
}());



/***/ }),

/***/ "./src/app/components/client/transaction-details/transaction-details.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/client/transaction-details/transaction-details.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"this.isAccountClosed == false && clientForm.controls.client_id.value != 1 && clientForm.controls.is_investor.value == true\" class=\"col-12 text-right\">\n  <app-simple-modal [module]=\"moduleTD\" [mode]=\"modeTD\" [name]=\"clientForm.controls.name.value\" (isDelete)=\"closeAccountAndRefund()\"></app-simple-modal>\n</div>\n<form [formGroup]=\"transactionDetailsForm\" (ngSubmit)=\"onSubmit()\" >\n  <div class=\"row\">\n    <div class=\"form-group col-12\">\n      <div>\n        <div class=\"xmt-0\">\n          <div *ngIf=\"message_error\" class=\"alert alert-danger text-center col-12\">\n            <strong>Error!</strong>&nbsp;<span>{{message_error}}</span>\n          </div>\n          <table *ngIf=\"isAccountClosed == false\" class=\"table\">\n            <thead class=\"#f5f5f5 grey lighten-4\">\n              <tr>\n                <th>Date</th>\n                <th>Transaction</th>\n                <th>Description</th>\n                <th class=\"text-right\">Investment</th>\n                <th class=\"text-right\">Withdrawal</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>\n                  <input type=\"date\" class=\"form-control\" formControlName=\"date\" placeholder=\"Date\">\n                  <app-control-messages [control]=\"transactionDetailsForm.controls.date\"></app-control-messages>\n                </td>\n                <td>\n                  <select class=\"form-control\" formControlName=\"transaction_type_id\" (change)=\"getSelectedTransactionTypeMode($event.target.value)\" >\n                    <option *ngFor=\"let tt of transactionTypes$ |async\" [value]=\"tt.transaction_type_id\">{{tt.name}}\n                    </option>\n                  </select>\n                  <app-control-messages [control]=\"transactionDetailsForm.controls.transaction_type_id\"></app-control-messages>\n                </td>\n                <td>\n                  <input type=\"text\" class=\"form-control\" formControlName=\"description\" placeholder=\"Description\" >\n                  <app-control-messages [control]=\"transactionDetailsForm.controls.description\"></app-control-messages>\n                </td>\n                <td class=\"text-right\">\n                  <input type=\"text\" class=\"form-control text-right\" formControlName=\"credit\" (keyup)=\"formatCurrency(transactionDetailsForm.controls.credit)\" placeholder=\"Credit\">\n                  <app-control-messages [control]=\"transactionDetailsForm.controls.credit\"></app-control-messages>\n                </td>\n                <td class=\"text-right\">\n                  <input type=\"text\" class=\"form-control text-right\" formControlName=\"debit\" placeholder=\"Debit\" (keyup)=\"formatCurrency(transactionDetailsForm.controls.debit)\" >\n                  <app-control-messages [control]=\"transactionDetailsForm.controls.debit\"></app-control-messages>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n\n          <button *ngIf=\"isAccountClosed == false\" type=\"submit\" [disabled]=\"!transactionDetailsForm.valid\" class=\"btn btn-primary btn-custom btn-md\">\n            <i class=\"fa fa-save\"></i>\n          </button>\n\n          <table class=\"table\">\n            <thead class=\"#f5f5f5 grey lighten-4\">\n              <tr>\n                <th>Date</th>\n                <th>Transaction</th>\n                <th>Description</th>\n                <th class=\"text-right\">Investment</th>\n                <th class=\"text-right\">Withdrawal</th>\n                <th class=\"text-right\">Balance</th>\n                <th class=\"text-center\">Void</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of transactionDetails$ | async; let i = index;\">\n                <td> {{item.date | date}}</td>\n                <td>{{item.transaction_name}}</td>\n                <td>{{item.description}}</td>\n                <td class=\"text-right\">{{item.credit_formatted}}</td>\n                <td class=\"text-right\">{{item.debit_formatted}}</td>\n                <td></td>\n                <td class=\"text-center\">\n                  <app-simple-modal *ngIf=\"(item.is_void == false || item.is_void == null) && (item.transaction_type_id == 1 ||item.transaction_type_id == 11)\" [module]=\"module\" [mode]=\"mode\" (isDelete)=\"voidTransaction(item)\"></app-simple-modal>\n                  <label *ngIf=\"item.is_void == true\">VOID</label>\n                  </td>\n                  <!-- <button *ngIf=\"item.is_void == false && (item.transaction_type_id == 1 ||item.transaction_type_id == 11)\" type=\"button\" class=\"btn btn-custom\" name=\"button\" (click)=\"voidTransaction(item)\">Void</button></td> -->\n                </tr>\n                <tr *ngIf=\"(transactionDetails$ | async)?.length != 0\">\n                  <td class=\"bold green-text\" colspan=\"3\">BALANCE</td>\n                  <td class=\"bold green-text text-right\">{{total_investment}}</td>\n                  <td class=\"bold green-text text-right\">{{total_withdrawal}}</td>\n                  <td class=\"bold green-text text-right\">{{total_balance}}</td>\n                  <td></td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n"

/***/ }),

/***/ "./src/app/components/client/transaction-details/transaction-details.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/components/client/transaction-details/transaction-details.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50L3RyYW5zYWN0aW9uLWRldGFpbHMvdHJhbnNhY3Rpb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/client/transaction-details/transaction-details.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/client/transaction-details/transaction-details.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TransactionDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailsComponent", function() { return TransactionDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_services_client_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/client/client.service */ "./src/app/services/client/client.service.ts");
/* harmony import */ var app_services_transaction_details_transaction_details_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/transaction-details/transaction-details.service */ "./src/app/services/transaction-details/transaction-details.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TransactionDetailsComponent = /** @class */ (function () {
    function TransactionDetailsComponent(fb, 
    // private carService:CarService,
    clientService, transactionDetailsService) {
        var _this = this;
        this.fb = fb;
        this.clientService = clientService;
        this.transactionDetailsService = transactionDetailsService;
        this.opMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mode = "Void";
        this.module = "transaction";
        this.modeTD = "Close";
        this.moduleTD = "Account & Refund";
        this.message_error = "";
        this.isAccountClosed = false;
        this.sub = this.clientService.selectedClientId
            .subscribe(function (res) {
            _this.selectedClient_Id = res;
            _this.getTransactionDetailsByInvestor(res);
        }, function (err) {
        });
    }
    TransactionDetailsComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.selectedClient_Id = this.investor_id;
        this.getTransactionDetailsByInvestor(this.investor_id);
        this.transactionDetailsForm.reset();
    }; //End of ng oninit
    TransactionDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TransactionDetailsComponent.prototype.createForm = function () {
        this.transactionDetailsForm = this.fb.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            transaction_type_id: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            transaction_type_mode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            investor_id: [''],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)]],
            credit: [{ value: '', disabled: true }],
            debit: [{ value: '', disabled: true }],
            credit_formatted: [],
            debit_formatted: []
        });
    };
    TransactionDetailsComponent.prototype.closeAccountAndRefund = function () {
        this.transactionDetailsForm.get('debit').enable();
        this.transactionDetailsForm.get('debit').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]);
        this.transactionDetailsForm.get('debit').updateValueAndValidity({ emitEvent: false, onlySelf: true });
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd.toString().length == 1) {
            var a = "0" + dd.toString();
            dd = parseInt(a);
        }
        if (mm.toString().length == 1) {
            var a = "0" + mm.toString();
            mm = parseInt(a, 10);
        }
        this.transactionDetailsForm.patchValue({
            date: yyyy + "-0" + mm + "-" + dd,
            debit: this.total_balance.replace(/,/g, ""),
            description: "Account Closed - Refund",
            investor_id: this.selectedClient_Id,
            transaction_type_id: 11,
            transaction_type_mode: "debit"
        });
        this.closeAccount();
    };
    TransactionDetailsComponent.prototype.closeAccount = function () {
        var _this = this;
        this.transactionDetailsService.closeAccountAndRefund(this.transactionDetailsForm.value)
            .subscribe(function (res) {
            _this.getTransactionDetailsByInvestor(_this.selectedClient_Id);
            _this.clientService.selectedClientId.next(_this.selectedClient_Id);
        }, function (err) {
            console.log("Void Transaction Details ", err);
        });
    };
    TransactionDetailsComponent.prototype.voidTransaction = function (transactionDetails) {
        var _this = this;
        var balance = this.total_balance.replace(/,/g, "");
        //If investment => check if balance is there
        //If withdrawal => Check if balance is there
        if (transactionDetails.transaction_type_id == 11) { //Withdrawal
            if (parseInt(balance) < parseInt(transactionDetails.debit)) {
                this.message_error = "Not enough available balance - Cannot void this transaction";
                setTimeout(function () {
                    _this.message_error = "";
                }, 5000);
            }
            else {
                this.transactionDetailsService.voidTransactionDetails(transactionDetails)
                    .subscribe(function (res) {
                    _this.getTransactionDetailsByInvestor(_this.selectedClient_Id);
                }, function (err) {
                    console.log("Void Transaction Details ", err);
                });
            }
        }
        else if (transactionDetails.transaction_type_id == 1) { //Investment
            if (parseInt(balance) < parseInt(transactionDetails.credit)) {
                this.message_error = "Not enough available balance - Cannot void this transaction";
                this.transactionDetailsForm.reset();
                setTimeout(function () {
                    _this.message_error = "";
                }, 5000);
            }
            else {
                this.transactionDetailsService.voidTransactionDetails(transactionDetails)
                    .subscribe(function (res) {
                    _this.getTransactionDetailsByInvestor(_this.selectedClient_Id);
                }, function (err) {
                    console.log("Void Transaction Details ", err);
                });
            }
        }
    };
    TransactionDetailsComponent.prototype.getSelectedTransactionTypeMode = function (transactionTypeId) {
        var _this = this;
        var transactionType;
        this.transactionTypes$.subscribe(function (res) {
            transactionType = res.filter(function (tt) { return tt.transaction_type_id == transactionTypeId; });
            _this.transactionDetailsForm.patchValue({
                transaction_type_mode: transactionType[0].mode,
            });
            if (transactionType[0].mode == "credit") {
                _this.transactionDetailsForm.get('credit').enable();
                _this.transactionDetailsForm.get('credit').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]);
                _this.transactionDetailsForm.get('credit').updateValueAndValidity({ emitEvent: false, onlySelf: true });
                _this.transactionDetailsForm.patchValue({ 'debit': '' });
                _this.transactionDetailsForm.get('debit').clearValidators();
                _this.transactionDetailsForm.get('debit').disable();
                _this.transactionDetailsForm.get('debit').updateValueAndValidity({ emitEvent: false, onlySelf: true });
            }
            else {
                _this.transactionDetailsForm.get('debit').enable();
                _this.transactionDetailsForm.get('debit').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]);
                _this.transactionDetailsForm.get('debit').updateValueAndValidity({ emitEvent: false, onlySelf: true });
                _this.transactionDetailsForm.patchValue({ 'credit': '' });
                _this.transactionDetailsForm.get('credit').clearValidators();
                _this.transactionDetailsForm.get('credit').disable();
                _this.transactionDetailsForm.get('credit').updateValueAndValidity({ emitEvent: false, onlySelf: true });
            }
        });
    };
    TransactionDetailsComponent.prototype.getTransactionDetailsByInvestor = function (investor_id) {
        var _this = this;
        this.transactionDetailsForm.reset();
        this.transactionDetails$ = this.transactionDetailsService.getTransactionDetailsByInvestor(investor_id);
        var total_investment = 0;
        var total_withdrawal = 0;
        this.total_balance = "";
        this.total_investment = "";
        this.total_withdrawal = "";
        this.transactionDetails$.subscribe(function (res) {
            res.forEach(function (val) {
                if (_this.isAccountClosed == false) {
                    if (val.description == "Account Closed - Refund") { //Withdraw - Refund
                        _this.isAccountClosed = true;
                    }
                }
                if (val.transaction_type_mode == "credit" && val.is_void != true) {
                    total_investment = total_investment + parseInt(val.credit);
                }
                else if (val.transaction_type_mode == "debit" && val.is_void != true) {
                    total_withdrawal = total_withdrawal + parseInt(val.debit);
                }
                _this.total_balance = _this.formatCurrencyByVal(total_investment - total_withdrawal);
                _this.total_investment = _this.formatCurrencyByVal(total_investment).toString();
                _this.total_withdrawal = _this.formatCurrencyByVal(total_withdrawal).toString();
            });
        }, function (err) {
            console.log("Error ", err);
        });
    };
    TransactionDetailsComponent.prototype.onSubmit = function () {
        var _this = this;
        var description = "";
        var mode = "";
        if (this.transactionDetailsForm.get('description').value == "" || this.transactionDetailsForm.get('description').value == null) {
            if (this.transactionDetailsForm.get('transaction_type_id').value == 1) {
                description = "Investment";
            }
            else if (this.transactionDetailsForm.get('transaction_type_id').value == 11) {
                description = "Withdrawal";
            }
        }
        else {
            description = this.transactionDetailsForm.get('description').value;
        }
        this.transactionDetailsForm.patchValue({
            investor_id: this.selectedClient_Id,
            description: description
        });
        if (this.transactionDetailsForm.get('transaction_type_id').value == 11) {
            //If withdrawal or void check if there is available balance
            var balance = this.total_balance.replace(/,/g, "");
            if (parseInt(balance) < parseInt(this.transactionDetailsForm.get('debit').value.replace(/,/g, ""))) {
                this.message_error = "Not enough available balance";
                this.transactionDetailsForm.reset();
                setTimeout(function () {
                    _this.message_error = "";
                }, 5000);
            }
            else {
                this.createTransactionDetails();
            }
        }
        else {
            this.createTransactionDetails();
        }
    };
    TransactionDetailsComponent.prototype.createTransactionDetails = function () {
        var _this = this;
        this.transactionDetailsService.createTransactionDetailsForClient(this.transactionDetailsForm.value)
            .debounceTime(1000)
            .distinctUntilChanged()
            .subscribe(function (res) {
            _this.getTransactionDetailsByInvestor(_this.selectedClient_Id);
            _this.transactionDetailsForm.reset();
            _this.transactionDetailsForm.patchValue({ 'debit': '' });
            _this.transactionDetailsForm.get('debit').clearValidators();
            _this.transactionDetailsForm.get('debit').disable();
            _this.transactionDetailsForm.get('debit').updateValueAndValidity({ emitEvent: false, onlySelf: true });
            _this.transactionDetailsForm.patchValue({ 'credit': '' });
            _this.transactionDetailsForm.get('credit').clearValidators();
            _this.transactionDetailsForm.get('credit').disable();
            _this.transactionDetailsForm.get('credit').updateValueAndValidity({ emitEvent: false, onlySelf: true });
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    TransactionDetailsComponent.prototype.formatCurrency = function (control) {
        var val = control.value;
        var isValid = /^[0-9,.]*$/.test(val);
        if (isValid == true) {
            var x = val.toString().replace(/,/g, "");
            var afterPoint = '';
            if (x.indexOf('.') > 0)
                afterPoint = x.substring(x.indexOf('.'), x.length);
            x = Math.floor(x);
            x = x.toString();
            var lastThree = x.substring(x.length - 3);
            var otherNumbers = x.substring(0, x.length - 3);
            if (otherNumbers != '')
                lastThree = ',' + lastThree;
            var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
            control.setValue(res);
        }
        else {
            control.value = "";
        }
    };
    TransactionDetailsComponent.prototype.formatCurrencyByVal = function (val) {
        var val1 = '' + val;
        var x = val1.replace(/,/g, "");
        var afterPoint = '';
        if (x.indexOf('.') > 0)
            afterPoint = x.substring(x.indexOf('.'), x.length);
        x = Math.floor(parseInt(x)).toString();
        var lastThree = x.substring(x.length - 3);
        var otherNumbers = x.substring(0, x.length - 3);
        if (otherNumbers != '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
        return res;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TransactionDetailsComponent.prototype, "investor_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], TransactionDetailsComponent.prototype, "refreshTD", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], TransactionDetailsComponent.prototype, "investors$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], TransactionDetailsComponent.prototype, "transactionTypes$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], TransactionDetailsComponent.prototype, "clientForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TransactionDetailsComponent.prototype, "opMessage", void 0);
    TransactionDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transaction-details',
            template: __webpack_require__(/*! ./transaction-details.component.html */ "./src/app/components/client/transaction-details/transaction-details.component.html"),
            styles: [__webpack_require__(/*! ./transaction-details.component.scss */ "./src/app/components/client/transaction-details/transaction-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            app_services_client_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"],
            app_services_transaction_details_transaction_details_service__WEBPACK_IMPORTED_MODULE_4__["TransactionDetailsService"]])
    ], TransactionDetailsComponent);
    return TransactionDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/color/color-form/color-form.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/color/color-form/color-form.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid section\">\n  <div *ngIf=\"message\" class=\"alert alert-success text-center col-12\">\n    <strong>Success!</strong>&nbsp;<span>{{message}}</span>\n  </div>\n  <div *ngIf=\"message_error\" class=\"alert alert-danger text-center col-12\">\n    <strong>Error!</strong>&nbsp;<span>{{message_error}}</span>\n  </div>\n  <div class=\"col-12 grey lighten-4\">\n    <header class=\"header row\">\n      <div class=\"col-12\">\n        <app-title [title]=title></app-title>\n      </div>\n    </header>\n\n    <div class=\"col-12\">\n      <form [formGroup]=\"colorForm\" (ngSubmit)=\"onSubmit()\" >\n        <div class=\"form-group\">\n          <label for=\"inputColorName\" class=\"col-sm-2 col-form-label\">Name</label>\n          <div>\n            <div class=\"md-form mt-0\">\n              <input type=\"text\" class=\"form-control capitalize\" id=\"inputColorName\" formControlName=\"name\">\n              <!-- <p style=\"color:red\" *ngIf=\"colorForm.controls.name.touched && colorForm.controls.name.errors.required\">Required</p> -->\n              <app-control-messages [control]=\"colorForm.controls.name\"></app-control-messages>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"text-right\">\n            <!--  [disabled]=\"colorForm.invalid\"-->\n            <button type=\"submit\" class=\"btn btn-primary btn-custom btn-md\" >\n              <i class=\"fa fa-save\"></i>\n            </button>\n            <app-simple-modal [module]=\"module\" [mode]=\"mode\" [name]=\"colorForm.controls.name.value\" (isDelete)=\"deleteColor($event)\"></app-simple-modal>\n\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/color/color-form/color-form.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/color/color-form/color-form.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29sb3IvY29sb3ItZm9ybS9jb2xvci1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/color/color-form/color-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/color/color-form/color-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: ColorFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorFormComponent", function() { return ColorFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_color_color_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/color/color.service */ "./src/app/services/color/color.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ColorFormComponent = /** @class */ (function () {
    function ColorFormComponent(fb, colorService, router, route) {
        var _this = this;
        this.fb = fb;
        this.colorService = colorService;
        this.router = router;
        this.route = route;
        this.title = "Create Color";
        this.module = "color";
        this.mode = "discard";
        this.message = "";
        this.message_error = "";
        this.submitted = false;
        this.colorService.selectedColorId.next(0);
        this.sub = this.colorService.selectedColorId
            .subscribe(function (res) {
            _this.selectedColor_Id = res;
            if (_this.colorService.selectedMode == "Edit") {
                _this.title = "Edit Color";
                _this.mode = "delete";
                _this.getColorById(res);
            }
        }, function (err) {
        });
    }
    ColorFormComponent.prototype.createForm = function () {
        this.colorForm = this.fb.group({
            color_id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
        });
    };
    ColorFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.colorForm.valid) {
            if (this.colorService.selectedMode == 'Create') {
                this.createColor();
            }
            else if (this.colorService.selectedMode == 'Edit') {
                this.updateColor();
            }
        }
    };
    ColorFormComponent.prototype.getColorById = function (color_id) {
        var _this = this;
        this.colorService.getColorById(color_id)
            .subscribe(function (res) {
            _this.colorForm.patchValue(res[0]);
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    ColorFormComponent.prototype.createColor = function () {
        var _this = this;
        this.colorService.createColor(this.colorForm.value)
            .subscribe(function (res) {
            window.scrollTo(0, 0);
            _this.message = _this.colorForm.get('name').value + " created successfully.";
            setTimeout(function () {
                _this.message = "";
            }, 5000);
            _this.colorService.refreshList.next(true);
            _this.colorForm.reset();
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    ColorFormComponent.prototype.updateColor = function () {
        var _this = this;
        this.colorService.updateColor(this.colorForm.value)
            .subscribe(function (res) {
            window.scrollTo(0, 0);
            _this.message = _this.colorForm.get('name').value + " updated successfully.";
            setTimeout(function () {
                _this.message = "";
            }, 5000);
            _this.colorService.refreshList.next(true);
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    ColorFormComponent.prototype.deleteColor = function (event) {
        var _this = this;
        if (this.selectedColor_Id) {
            this.colorService.deleteColor(this.selectedColor_Id).subscribe(function (res) {
                _this.colorService.refreshList.next(true);
                _this.router.navigate(['/color/add']);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.colorForm.reset();
        }
    };
    ColorFormComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    ColorFormComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ColorFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-color-form',
            template: __webpack_require__(/*! ./color-form.component.html */ "./src/app/components/color/color-form/color-form.component.html"),
            styles: [__webpack_require__(/*! ./color-form.component.scss */ "./src/app/components/color/color-form/color-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            app_services_color_color_service__WEBPACK_IMPORTED_MODULE_3__["ColorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ColorFormComponent);
    return ColorFormComponent;
}());



/***/ }),

/***/ "./src/app/components/color/color-list/color-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/color/color-list/color-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid section-list\">\n  <div>\n    <app-search (searchTermValueChanged)=\"searchColors($event)\" (isCreate)=\"createColor('Create')\"></app-search>\n  </div>\n  <div>\n    <div *ngIf=\"(results$ | async)?.length==0\" class=\"alert alert-danger text-center col-12\">\n      <strong>Error!</strong>&nbsp;<span>No records found</span>\n    </div>\n    <table class=\"table\">\n      <thead class=\"#f5f5f5 grey lighten-4\">\n        <tr>\n          <th>Name</th>\n          <th>Edit</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor='let color of results$ | async' [ngClass]=\"{'is-active': selectedColorId == color.color_id}\">\n          <td class=\"capitalize\">{{color.name}}</td>\n          <td class=\"pointer\" (click)=\"selectColor(color.color_id, 'Edit')\">\n              <i class=\"fa fa-pencil\"></i>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/color/color-list/color-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/color/color-list/color-list.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29sb3IvY29sb3ItbGlzdC9jb2xvci1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/color/color-list/color-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/color/color-list/color-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: ColorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorListComponent", function() { return ColorListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_color_color_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/color/color.service */ "./src/app/services/color/color.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ColorListComponent = /** @class */ (function () {
    function ColorListComponent(colorService, router, route) {
        var _this = this;
        this.colorService = colorService;
        this.router = router;
        this.route = route;
        this.searchTerm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.colorService.selectedColorId.subscribe(function (res) {
            _this.selectedColorId = res;
        }, function (err) {
        });
    }
    ColorListComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/color/add']);
    };
    ColorListComponent.prototype.searchColors = function (search) {
        this.searchTerm.emit(search);
    };
    //On Click of the Add Button
    ColorListComponent.prototype.createColor = function (mode) {
        this.selectedColorId = 0;
        this.colorService.selectedMode = mode;
        this.router.navigate(['/color/add']);
    };
    //On Click of the Edit Button
    ColorListComponent.prototype.selectColor = function (color_id, mode) {
        var _this = this;
        this.selectedColorId = color_id;
        this.colorService.selectedMode = mode;
        this.router.navigate(['/color/edit']);
        setTimeout(function () {
            _this.colorService.selectedColorId.next(color_id);
        }, 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], ColorListComponent.prototype, "results$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ColorListComponent.prototype, "searchTerm", void 0);
    ColorListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-color-list',
            template: __webpack_require__(/*! ./color-list.component.html */ "./src/app/components/color/color-list/color-list.component.html"),
            styles: [__webpack_require__(/*! ./color-list.component.scss */ "./src/app/components/color/color-list/color-list.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_color_color_service__WEBPACK_IMPORTED_MODULE_3__["ColorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ColorListComponent);
    return ColorListComponent;
}());



/***/ }),

/***/ "./src/app/components/color/color-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/color/color-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ColorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorRoutingModule", function() { return ColorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _color_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color.component */ "./src/app/components/color/color.component.ts");
/* harmony import */ var _color_list_color_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color-list/color-list.component */ "./src/app/components/color/color-list/color-list.component.ts");
/* harmony import */ var _color_form_color_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-form/color-form.component */ "./src/app/components/color/color-form/color-form.component.ts");
/* harmony import */ var app_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var colorRoutes = [
    {
        path: 'color',
        canActivate: [app_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _color_component__WEBPACK_IMPORTED_MODULE_2__["ColorComponent"],
        children: [
            { path: 'list', component: _color_list_color_list_component__WEBPACK_IMPORTED_MODULE_3__["ColorListComponent"] },
            { path: 'add', component: _color_form_color_form_component__WEBPACK_IMPORTED_MODULE_4__["ColorFormComponent"] },
            { path: 'edit', component: _color_form_color_form_component__WEBPACK_IMPORTED_MODULE_4__["ColorFormComponent"] }
        ]
    }
];
var ColorRoutingModule = /** @class */ (function () {
    function ColorRoutingModule() {
    }
    ColorRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(colorRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ColorRoutingModule);
    return ColorRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/color/color.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/color/color.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"col-12\">\n    <app-title [title]=title></app-title>\n  </div>\n</header>\n\n<div class=\"row\">\n  <div class=\"col-lg-4\">\n  <app-color-list (searchTerm)=\"searchColors($event)\" [results$]=\"colors$\"></app-color-list>\n  </div>\n  <div class=\"col-lg-8\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/color/color.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/color/color.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29sb3IvY29sb3IuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/color/color.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/color/color.component.ts ***!
  \*****************************************************/
/*! exports provided: ColorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorComponent", function() { return ColorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_color_color_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/color/color.service */ "./src/app/services/color/color.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ColorComponent = /** @class */ (function () {
    function ColorComponent(fb, colorService, router, route) {
        this.fb = fb;
        this.colorService = colorService;
        this.router = router;
        this.route = route;
        this.title = "Color";
    }
    ColorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getColors();
        this.colorService.refreshList.subscribe(function (res) {
            _this.getColors();
        }, function (err) {
            console.log(err);
        });
    };
    ColorComponent.prototype.getColors = function () {
        this.colors$ = this.colorService.getColors();
    };
    ColorComponent.prototype.searchColors = function (searchTerm) {
        if (searchTerm) {
            this.colors$ = this.colorService.searchColors(searchTerm);
        }
        else {
            this.getColors();
            //this.colors$ = new EmptyObservable();
        }
    };
    ColorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-color',
            template: __webpack_require__(/*! ./color.component.html */ "./src/app/components/color/color.component.html"),
            styles: [__webpack_require__(/*! ./color.component.scss */ "./src/app/components/color/color.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], app_services_color_color_service__WEBPACK_IMPORTED_MODULE_3__["ColorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ColorComponent);
    return ColorComponent;
}());



/***/ }),

/***/ "./src/app/components/color/color.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/color/color.module.ts ***!
  \**************************************************/
/*! exports provided: ColorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorModule", function() { return ColorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _color_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color-routing.module */ "./src/app/components/color/color-routing.module.ts");
/* harmony import */ var _color_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color.component */ "./src/app/components/color/color.component.ts");
/* harmony import */ var _color_list_color_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color-list/color-list.component */ "./src/app/components/color/color-list/color-list.component.ts");
/* harmony import */ var _color_form_color_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./color-form/color-form.component */ "./src/app/components/color/color-form/color-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ColorModule = /** @class */ (function () {
    function ColorModule() {
    }
    ColorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _color_routing_module__WEBPACK_IMPORTED_MODULE_3__["ColorRoutingModule"],
            ],
            declarations: [
                _color_component__WEBPACK_IMPORTED_MODULE_4__["ColorComponent"],
                _color_list_color_list_component__WEBPACK_IMPORTED_MODULE_5__["ColorListComponent"],
                _color_form_color_form_component__WEBPACK_IMPORTED_MODULE_6__["ColorFormComponent"],
            ],
        })
    ], ColorModule);
    return ColorModule;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"col-12\">\n    <div class=\"col-12\">\n      <div style=\"padding:25px\">\n        <div class=\"title text-center\">\n          <h1 class=\"h1-responsive text-white\">LET'S TALK ABOUT WHEELS!</h1>\n        </div>\n      </div>\n    </div>\n    <div>\n      <div class=\"content\">\n        <div class=\"support d-none d-lg-block\"></div>\n        <div class=\"row contact-box-main\">\n          <div class=\"col-lg-4 contact-box-div\">\n            <div class=\"contact-box\">\n              <p class=\"name\">SHIBLY MOHAMMED</p>\n              <p>Sales Manager</p>\n              <span class=\"fa fa-phone\"></span> +919747082382\n              <p><span class=\"fa fa-envelope-o\"></span> shibly@gear2gear.in</p>\n            </div>\n          </div>\n          <div class=\"col-lg-4 contact-box-div\">\n            <div class=\"contact-box\">\n              <p class=\"name\">ASHFAQ</p>\n              <p>Director</p>\n              <span class=\"fa fa-phone\"></span> 08095185197\n              <p><span class=\"fa fa-envelope-o\"></span> ashfaq@gear2gear.in</p>\n            </div>\n          </div>\n          <div class=\"col-lg-4 contact-box-div\">\n            <div class=\"contact-box\">\n              <p class=\"name\">NISHKARSH</p>\n              <p>Marketing Manager</p>\n              <span class=\"fa fa-phone\"></span> +919178226951\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row map\">\n      <div class=\"mapouter\">\n        <div class=\"gmap_canvas\">\n          <iframe width=\"100%\" height=\"400px\" id=\"gmap_canvas\" src=\"https://maps.google.com/maps?q=22%20F%20St%20Rd%2C%20Cleveland%20Town%20Pulikeshi%20Nagar&t=&z=13&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe>\n        </div>\n        <style>.mapouter{text-align:right;height:100%;width:100%;}.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}</style>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  background-color: black; }\n\n.content {\n  text-align: left;\n  font: 400 15px/1.8 \"Open Sans\",Verdana,sans-serif;\n  color: #666;\n  -webkit-font-smoothing: antialiased;\n  padding: 50px; }\n\n.map {\n  padding-top: 5%; }\n\n.name {\n  padding-top: 15px;\n  color: #8acc25; }\n\n.support {\n  height: 150px;\n  background-color: transparent;\n  text-align: center;\n  font-size: 24px;\n  border-radius: 8px; }\n\n.contact-box-main {\n  padding: 25px; }\n\n.contact-box-div {\n  margin-top: -10%; }\n\n.contact-box {\n  background-color: black;\n  color: #eee;\n  height: 200px;\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n  border: 1px dotted white;\n  border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb3VqYW55YS9Eb2N1bWVudHMvQ2xvbmVkLVJlcG8vZ2VhcjJnZWFyL3NyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUIsRUFBQTs7QUFFekI7RUFDSSxnQkFBZ0I7RUFDaEIsaURBQWlEO0VBQ2pELFdBQVc7RUFDWCxtQ0FBbUM7RUFDbkMsYUFBYSxFQUFBOztBQUdqQjtFQUNBLGVBQWUsRUFBQTs7QUFFZjtFQUNFLGlCQUFnQjtFQUNoQixjQUFhLEVBQUE7O0FBR2Y7RUFDSSxhQUFhO0VBQ2IsNkJBQTZCO0VBRTdCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksYUFBYSxFQUFBOztBQUVqQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHdCQUF1QjtFQUN2QixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4uY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250OiA0MDAgMTVweC8xLjggXCJPcGVuIFNhbnNcIixWZXJkYW5hLHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgcGFkZGluZzogNTBweDtcbn1cblxuLm1hcHtcbnBhZGRpbmctdG9wOiA1JTtcbn1cbi5uYW1le1xuICBwYWRkaW5nLXRvcDoxNXB4O1xuICBjb2xvcjojOGFjYzI1O1xufVxuXG4uc3VwcG9ydHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uY29udGFjdC1ib3gtbWFpbntcbiAgICBwYWRkaW5nOiAyNXB4O1xufVxuLmNvbnRhY3QtYm94LWRpdntcbiAgICBtYXJnaW4tdG9wOiAtMTAlO1xufVxuLmNvbnRhY3QtYm94e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiAjZWVlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjoxcHggZG90dGVkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/contact/contact.module.ts ***!
  \******************************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.component */ "./src/app/components/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            ],
            declarations: [
                _contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"],
            ],
        })
    ], ContactModule);
    return ContactModule;
}());



/***/ }),

/***/ "./src/app/components/expense/expense-form/expense-form.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/expense/expense-form/expense-form.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid section\">\n  <div *ngIf=\"message\" class=\"alert alert-success text-center col-12\">\n    <strong>Success!</strong>&nbsp;<span>{{message}}</span>\n  </div>\n  <div *ngIf=\"message_error\" class=\"alert alert-danger text-center col-12\">\n    <strong>Error!</strong>&nbsp;<span>{{message_error}}</span>\n  </div>\n  <div class=\"col-12 grey lighten-4\">\n    <header class=\"header row\">\n      <div class=\"col-12\">\n        <app-title [title]=title></app-title>\n      </div>\n    </header>\n\n    <div class=\"col-12\">\n      <form [formGroup]=\"expenseForm\" (ngSubmit)=\"onSubmit()\" >\n        <div class=\"form-group\">\n          <label for=\"inputExpenseName\" class=\"col-sm-2 col-form-label\">Name</label>\n          <div>\n            <div class=\"md-form mt-0\">\n              <input type=\"text\" class=\"form-control capitalize\" id=\"inputExpenseName\" formControlName=\"name\">\n              <!-- <p style=\"color:red\" *ngIf=\"expenseForm.controls.name.touched && expenseForm.controls.name.errors.required\">Required</p> -->\n              <app-control-messages [control]=\"expenseForm.controls.name\"></app-control-messages>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"text-right\">\n            <!--  [disabled]=\"expenseForm.invalid\"-->\n            <button type=\"submit\" class=\"btn btn-primary btn-custom btn-md\" >\n              <i class=\"fa fa-save\"></i>\n            </button>\n            <app-simple-modal [module]=\"module\" [mode]=\"mode\" [name]=\"expenseForm.controls.name.value\" (isDelete)=\"deleteExpense($event)\"></app-simple-modal>\n\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/expense/expense-form/expense-form.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/expense/expense-form/expense-form.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwZW5zZS9leHBlbnNlLWZvcm0vZXhwZW5zZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/expense/expense-form/expense-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/expense/expense-form/expense-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: ExpenseFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseFormComponent", function() { return ExpenseFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_expense_expense_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/expense/expense.service */ "./src/app/services/expense/expense.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExpenseFormComponent = /** @class */ (function () {
    function ExpenseFormComponent(fb, expenseService, router, route) {
        var _this = this;
        this.fb = fb;
        this.expenseService = expenseService;
        this.router = router;
        this.route = route;
        this.title = "Create Expense";
        this.module = "expense";
        this.mode = "discard";
        this.message = "";
        this.message_error = "";
        this.submitted = false;
        this.expenseService.selectedExpenseId.next(0);
        this.sub = this.expenseService.selectedExpenseId
            .subscribe(function (res) {
            _this.selectedExpense_Id = res;
            if (_this.expenseService.selectedMode == "Edit") {
                _this.title = "Edit Expense";
                _this.mode = "delete";
                _this.getExpenseById(res);
            }
        }, function (err) {
        });
    }
    ExpenseFormComponent.prototype.createForm = function () {
        this.expenseForm = this.fb.group({
            expense_id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
        });
    };
    ExpenseFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.expenseForm.valid) {
            if (this.expenseService.selectedMode == 'Create') {
                this.createExpense();
            }
            else if (this.expenseService.selectedMode == 'Edit') {
                this.updateExpense();
            }
        }
    };
    ExpenseFormComponent.prototype.getExpenseById = function (expense_id) {
        var _this = this;
        this.expenseService.getExpenseById(expense_id)
            .subscribe(function (res) {
            _this.expenseForm.patchValue(res[0]);
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    ExpenseFormComponent.prototype.createExpense = function () {
        var _this = this;
        this.expenseService.createExpense(this.expenseForm.value)
            .subscribe(function (res) {
            window.scrollTo(0, 0);
            _this.message = _this.expenseForm.get('name').value + " created successfully.";
            setTimeout(function () {
                _this.message = "";
            }, 5000);
            _this.expenseService.refreshList.next(true);
            _this.expenseForm.reset();
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    ExpenseFormComponent.prototype.updateExpense = function () {
        var _this = this;
        this.expenseService.updateExpense(this.expenseForm.value)
            .subscribe(function (res) {
            window.scrollTo(0, 0);
            _this.message = _this.expenseForm.get('name').value + " updated successfully.";
            setTimeout(function () {
                _this.message = "";
            }, 5000);
            _this.expenseService.refreshList.next(true);
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    ExpenseFormComponent.prototype.deleteExpense = function (event) {
        var _this = this;
        if (this.selectedExpense_Id) {
            this.expenseService.deleteExpense(this.selectedExpense_Id).subscribe(function (res) {
                _this.expenseService.refreshList.next(true);
                _this.router.navigate(['/expense/add']);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.expenseForm.reset();
        }
    };
    ExpenseFormComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    ExpenseFormComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ExpenseFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expense-form',
            template: __webpack_require__(/*! ./expense-form.component.html */ "./src/app/components/expense/expense-form/expense-form.component.html"),
            styles: [__webpack_require__(/*! ./expense-form.component.scss */ "./src/app/components/expense/expense-form/expense-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], app_services_expense_expense_service__WEBPACK_IMPORTED_MODULE_3__["ExpenseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ExpenseFormComponent);
    return ExpenseFormComponent;
}());



/***/ }),

/***/ "./src/app/components/expense/expense-list/expense-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/expense/expense-list/expense-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid section-list\">\n  <div>\n    <app-search (searchTermValueChanged)=\"searchExpenses($event)\" (isCreate)=\"createExpense('Create')\"></app-search>\n  </div>\n  <div>\n    <div *ngIf=\"(results$ | async)?.length==0\" class=\"alert alert-danger text-center col-12\">\n      <strong>Error!</strong>&nbsp;<span>No records found</span>\n    </div>\n    <table class=\"table\">\n      <thead class=\"#f5f5f5 grey lighten-4\">\n        <tr>\n          <th>Name</th>\n          <th>Edit</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor='let expense of results$ | async' [ngClass]=\"{'is-active': selectedExpenseId == expense.expense_id}\">\n          <td class=\"capitalize\">{{expense.name}}</td>\n          <td class=\"pointer\" (click)=\"selectExpense(expense.expense_id, 'Edit')\">\n              <i class=\"fa fa-pencil\"></i>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/expense/expense-list/expense-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/expense/expense-list/expense-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwZW5zZS9leHBlbnNlLWxpc3QvZXhwZW5zZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/expense/expense-list/expense-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/expense/expense-list/expense-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: ExpenseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseListComponent", function() { return ExpenseListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_expense_expense_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/expense/expense.service */ "./src/app/services/expense/expense.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExpenseListComponent = /** @class */ (function () {
    function ExpenseListComponent(expenseService, router, route) {
        var _this = this;
        this.expenseService = expenseService;
        this.router = router;
        this.route = route;
        this.searchTerm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.expenseService.selectedExpenseId.subscribe(function (res) {
            _this.selectedExpenseId = res;
        }, function (err) {
        });
    }
    ExpenseListComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/expense/add']);
    };
    ExpenseListComponent.prototype.searchExpenses = function (search) {
        this.searchTerm.emit(search);
    };
    //On Click of the Add Button
    ExpenseListComponent.prototype.createExpense = function (mode) {
        this.selectedExpenseId = 0;
        this.expenseService.selectedMode = mode;
        this.router.navigate(['/expense/add']);
    };
    //On Click of the Edit Button
    ExpenseListComponent.prototype.selectExpense = function (expense_id, mode) {
        var _this = this;
        this.selectedExpenseId = expense_id;
        this.expenseService.selectedMode = mode;
        this.router.navigate(['/expense/edit']);
        setTimeout(function () {
            _this.expenseService.selectedExpenseId.next(expense_id);
        }, 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], ExpenseListComponent.prototype, "results$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ExpenseListComponent.prototype, "searchTerm", void 0);
    ExpenseListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expense-list',
            template: __webpack_require__(/*! ./expense-list.component.html */ "./src/app/components/expense/expense-list/expense-list.component.html"),
            styles: [__webpack_require__(/*! ./expense-list.component.scss */ "./src/app/components/expense/expense-list/expense-list.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_expense_expense_service__WEBPACK_IMPORTED_MODULE_3__["ExpenseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ExpenseListComponent);
    return ExpenseListComponent;
}());



/***/ }),

/***/ "./src/app/components/expense/expense-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/expense/expense-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ExpenseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseRoutingModule", function() { return ExpenseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _expense_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expense.component */ "./src/app/components/expense/expense.component.ts");
/* harmony import */ var _expense_list_expense_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expense-list/expense-list.component */ "./src/app/components/expense/expense-list/expense-list.component.ts");
/* harmony import */ var _expense_form_expense_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expense-form/expense-form.component */ "./src/app/components/expense/expense-form/expense-form.component.ts");
/* harmony import */ var app_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var expenseRoutes = [
    {
        path: 'expense',
        canActivate: [app_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _expense_component__WEBPACK_IMPORTED_MODULE_2__["ExpenseComponent"],
        children: [
            { path: 'list', component: _expense_list_expense_list_component__WEBPACK_IMPORTED_MODULE_3__["ExpenseListComponent"] },
            { path: 'add', component: _expense_form_expense_form_component__WEBPACK_IMPORTED_MODULE_4__["ExpenseFormComponent"] },
            { path: 'edit', component: _expense_form_expense_form_component__WEBPACK_IMPORTED_MODULE_4__["ExpenseFormComponent"] }
        ]
    }
];
var ExpenseRoutingModule = /** @class */ (function () {
    function ExpenseRoutingModule() {
    }
    ExpenseRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(expenseRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ExpenseRoutingModule);
    return ExpenseRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/expense/expense.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/expense/expense.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"col-12\">\n    <app-title [title]=title></app-title>\n  </div>\n</header>\n\n<div class=\"row\">\n  <div class=\"col-lg-4\">\n  <app-expense-list (searchTerm)=\"searchExpenses($event)\" [results$]=\"expenses$\"></app-expense-list>\n  </div>\n  <div class=\"col-lg-8\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/expense/expense.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/expense/expense.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwZW5zZS9leHBlbnNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/expense/expense.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/expense/expense.component.ts ***!
  \*********************************************************/
/*! exports provided: ExpenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseComponent", function() { return ExpenseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_expense_expense_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/expense/expense.service */ "./src/app/services/expense/expense.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExpenseComponent = /** @class */ (function () {
    function ExpenseComponent(fb, expenseService, router, route) {
        this.fb = fb;
        this.expenseService = expenseService;
        this.router = router;
        this.route = route;
        this.title = "Expense";
    }
    ExpenseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getExpenses();
        this.expenseService.refreshList.subscribe(function (res) {
            _this.getExpenses();
        }, function (err) {
            console.log(err);
        });
    };
    ExpenseComponent.prototype.getExpenses = function () {
        this.expenses$ = this.expenseService.getExpenses();
    };
    ExpenseComponent.prototype.searchExpenses = function (searchTerm) {
        if (searchTerm) {
            this.expenses$ = this.expenseService.searchExpenses(searchTerm);
        }
        else {
            this.getExpenses();
            //this.expenses$ = new EmptyObservable();
        }
    };
    ExpenseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expense',
            template: __webpack_require__(/*! ./expense.component.html */ "./src/app/components/expense/expense.component.html"),
            styles: [__webpack_require__(/*! ./expense.component.scss */ "./src/app/components/expense/expense.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], app_services_expense_expense_service__WEBPACK_IMPORTED_MODULE_3__["ExpenseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ExpenseComponent);
    return ExpenseComponent;
}());



/***/ }),

/***/ "./src/app/components/expense/expense.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/expense/expense.module.ts ***!
  \******************************************************/
/*! exports provided: ExpenseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseModule", function() { return ExpenseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _expense_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expense-routing.module */ "./src/app/components/expense/expense-routing.module.ts");
/* harmony import */ var _expense_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expense.component */ "./src/app/components/expense/expense.component.ts");
/* harmony import */ var _expense_list_expense_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expense-list/expense-list.component */ "./src/app/components/expense/expense-list/expense-list.component.ts");
/* harmony import */ var _expense_form_expense_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expense-form/expense-form.component */ "./src/app/components/expense/expense-form/expense-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ExpenseModule = /** @class */ (function () {
    function ExpenseModule() {
    }
    ExpenseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _expense_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExpenseRoutingModule"],
            ],
            declarations: [
                _expense_component__WEBPACK_IMPORTED_MODULE_4__["ExpenseComponent"],
                _expense_list_expense_list_component__WEBPACK_IMPORTED_MODULE_5__["ExpenseListComponent"],
                _expense_form_expense_form_component__WEBPACK_IMPORTED_MODULE_6__["ExpenseFormComponent"],
            ],
        })
    ], ExpenseModule);
    return ExpenseModule;
}());



/***/ }),

/***/ "./src/app/components/fuel-type/fuel-type-form/fuel-type-form.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/fuel-type/fuel-type-form/fuel-type-form.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid section\">\n  <div *ngIf=\"message\" class=\"alert alert-success text-center col-12\">\n    <strong>Success!</strong>&nbsp;<span>{{message}}</span>\n  </div>\n  <div *ngIf=\"message_error\" class=\"alert alert-danger text-center col-12\">\n    <strong>Error!</strong>&nbsp;<span>{{message_error}}</span>\n  </div>\n  <div class=\"col-12 grey lighten-4\">\n    <header class=\"header row\">\n      <div class=\"col-12\">\n        <app-title [title]=title></app-title>\n      </div>\n    </header>\n\n    <div class=\"col-12\">\n      <form [formGroup]=\"fuelTypeForm\" (ngSubmit)=\"onSubmit()\" >\n        <div class=\"form-group\">\n          <label for=\"inputFuelTypeName\" class=\"col-sm-2 col-form-label\">Name</label>\n          <div>\n            <div class=\"md-form mt-0\">\n              <input type=\"text\" class=\"form-control capitalize\" id=\"inputFuelTypeName\" formControlName=\"name\">\n              <!-- <p style=\"color:red\" *ngIf=\"fuelTypeForm.controls.name.touched && fuelTypeForm.controls.name.errors.required\">Required</p> -->\n              <app-control-messages [control]=\"fuelTypeForm.controls.name\"></app-control-messages>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"text-right\">\n            <!--  [disabled]=\"fuelTypeForm.invalid\"-->\n            <button type=\"submit\" class=\"btn btn-primary btn-custom btn-md\" >\n              <i class=\"fa fa-save\"></i>\n            </button>\n            <app-simple-modal [module]=\"module\" [mode]=\"mode\" [name]=\"fuelTypeForm.controls.name.value\" (isDelete)=\"deleteFuelType($event)\"></app-simple-modal>\n\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/fuel-type/fuel-type-form/fuel-type-form.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/fuel-type/fuel-type-form/fuel-type-form.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZnVlbC10eXBlL2Z1ZWwtdHlwZS1mb3JtL2Z1ZWwtdHlwZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/fuel-type/fuel-type-form/fuel-type-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/fuel-type/fuel-type-form/fuel-type-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FuelTypeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelTypeFormComponent", function() { return FuelTypeFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_fuel_type_fuel_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/fuel-type/fuel-type.service */ "./src/app/services/fuel-type/fuel-type.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuelTypeFormComponent = /** @class */ (function () {
    function FuelTypeFormComponent(fb, fuelTypeService, router, route) {
        var _this = this;
        this.fb = fb;
        this.fuelTypeService = fuelTypeService;
        this.router = router;
        this.route = route;
        this.title = "Create Fuel Type";
        this.module = "fuel type";
        this.mode = "discard";
        this.message = "";
        this.message_error = "";
        this.submitted = false;
        this.fuelTypeService.selectedFuelTypeId.next(0);
        this.sub = this.fuelTypeService.selectedFuelTypeId
            .subscribe(function (res) {
            _this.selectedFuelType_Id = res;
            if (_this.fuelTypeService.selectedMode == "Edit") {
                _this.title = "Edit Fuel Type";
                _this.mode = "delete";
                _this.getFuelTypeById(res);
            }
        }, function (err) {
        });
    }
    FuelTypeFormComponent.prototype.createForm = function () {
        this.fuelTypeForm = this.fb.group({
            fuel_type_id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
        });
    };
    FuelTypeFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.fuelTypeForm.valid) {
            if (this.fuelTypeService.selectedMode == 'Create') {
                this.createFuelType();
            }
            else if (this.fuelTypeService.selectedMode == 'Edit') {
                this.updateFuelType();
            }
        }
    };
    FuelTypeFormComponent.prototype.getFuelTypeById = function (fuelType_id) {
        var _this = this;
        this.fuelTypeService.getFuelTypeById(fuelType_id)
            .subscribe(function (res) {
            _this.fuelTypeForm.patchValue(res[0]);
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    FuelTypeFormComponent.prototype.createFuelType = function () {
        var _this = this;
        this.fuelTypeService.createFuelType(this.fuelTypeForm.value)
            .subscribe(function (res) {
            window.scrollTo(0, 0);
            _this.message = _this.fuelTypeForm.get('name').value + " created successfully.";
            setTimeout(function () {
                _this.message = "";
            }, 5000);
            _this.fuelTypeService.refreshList.next(true);
            _this.fuelTypeForm.reset();
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    FuelTypeFormComponent.prototype.updateFuelType = function () {
        var _this = this;
        this.fuelTypeService.updateFuelType(this.fuelTypeForm.value)
            .subscribe(function (res) {
            window.scrollTo(0, 0);
            _this.message = _this.fuelTypeForm.get('name').value + " updated successfully.";
            setTimeout(function () {
                _this.message = "";
            }, 5000);
            _this.fuelTypeService.refreshList.next(true);
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    FuelTypeFormComponent.prototype.deleteFuelType = function (event) {
        var _this = this;
        if (this.selectedFuelType_Id) {
            this.fuelTypeService.deleteFuelType(this.selectedFuelType_Id).subscribe(function (res) {
                _this.fuelTypeService.refreshList.next(true);
                _this.router.navigate(['/fuelType/add']);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.fuelTypeForm.reset();
        }
    };
    FuelTypeFormComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    FuelTypeFormComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    FuelTypeFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fuelType-form',
            template: __webpack_require__(/*! ./fuel-type-form.component.html */ "./src/app/components/fuel-type/fuel-type-form/fuel-type-form.component.html"),
            styles: [__webpack_require__(/*! ./fuel-type-form.component.scss */ "./src/app/components/fuel-type/fuel-type-form/fuel-type-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], app_services_fuel_type_fuel_type_service__WEBPACK_IMPORTED_MODULE_3__["FuelTypeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FuelTypeFormComponent);
    return FuelTypeFormComponent;
}());



/***/ }),

/***/ "./src/app/components/fuel-type/fuel-type-list/fuel-type-list.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/fuel-type/fuel-type-list/fuel-type-list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid section-list\">\n  <div>\n    <app-search (searchTermValueChanged)=\"searchFuelTypes($event)\" (isCreate)=\"createFuelType('Create')\"></app-search>\n  </div>\n  <div>\n    <div *ngIf=\"(results$ | async)?.length==0\" class=\"alert alert-danger text-center col-12\">\n      <strong>Error!</strong>&nbsp;<span>No records found</span>\n    </div>\n    <table class=\"table\">\n      <thead class=\"#f5f5f5 grey lighten-4\">\n        <tr>\n          <th>Name</th>\n          <th>Edit</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor='let fuelType of results$ | async' [ngClass]=\"{'is-active': selectedFuelTypeId == fuelType.fuel_type_id}\">\n          <td class=\"capitalize\">{{fuelType.name}}</td>\n          <td class=\"pointer\" (click)=\"selectFuelType(fuelType.fuel_type_id, 'Edit')\">\n              <i class=\"fa fa-pencil\"></i>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/fuel-type/fuel-type-list/fuel-type-list.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/fuel-type/fuel-type-list/fuel-type-list.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZnVlbC10eXBlL2Z1ZWwtdHlwZS1saXN0L2Z1ZWwtdHlwZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/fuel-type/fuel-type-list/fuel-type-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/fuel-type/fuel-type-list/fuel-type-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FuelTypeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelTypeListComponent", function() { return FuelTypeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_fuel_type_fuel_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/fuel-type/fuel-type.service */ "./src/app/services/fuel-type/fuel-type.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuelTypeListComponent = /** @class */ (function () {
    function FuelTypeListComponent(fuelTypeService, router, route) {
        var _this = this;
        this.fuelTypeService = fuelTypeService;
        this.router = router;
        this.route = route;
        this.searchTerm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fuelTypeService.selectedFuelTypeId.subscribe(function (res) {
            _this.selectedFuelTypeId = res;
        }, function (err) {
        });
    }
    FuelTypeListComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/fuelType/add']);
    };
    FuelTypeListComponent.prototype.searchFuelTypes = function (search) {
        this.searchTerm.emit(search);
    };
    //On Click of the Add Button
    FuelTypeListComponent.prototype.createFuelType = function (mode) {
        this.selectedFuelTypeId = 0;
        this.fuelTypeService.selectedMode = mode;
        this.router.navigate(['/fuelType/add']);
    };
    //On Click of the Edit Button
    FuelTypeListComponent.prototype.selectFuelType = function (fuelType_id, mode) {
        var _this = this;
        this.selectedFuelTypeId = fuelType_id;
        this.fuelTypeService.selectedMode = mode;
        this.router.navigate(['/fuelType/edit']);
        setTimeout(function () {
            _this.fuelTypeService.selectedFuelTypeId.next(fuelType_id);
        }, 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], FuelTypeListComponent.prototype, "results$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FuelTypeListComponent.prototype, "searchTerm", void 0);
    FuelTypeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fuelType-list',
            template: __webpack_require__(/*! ./fuel-type-list.component.html */ "./src/app/components/fuel-type/fuel-type-list/fuel-type-list.component.html"),
            styles: [__webpack_require__(/*! ./fuel-type-list.component.scss */ "./src/app/components/fuel-type/fuel-type-list/fuel-type-list.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_fuel_type_fuel_type_service__WEBPACK_IMPORTED_MODULE_3__["FuelTypeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FuelTypeListComponent);
    return FuelTypeListComponent;
}());



/***/ }),

/***/ "./src/app/components/fuel-type/fuel-type-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/fuel-type/fuel-type-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: FuelTypeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelTypeRoutingModule", function() { return FuelTypeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuel_type_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fuel-type.component */ "./src/app/components/fuel-type/fuel-type.component.ts");
/* harmony import */ var _fuel_type_list_fuel_type_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fuel-type-list/fuel-type-list.component */ "./src/app/components/fuel-type/fuel-type-list/fuel-type-list.component.ts");
/* harmony import */ var _fuel_type_form_fuel_type_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fuel-type-form/fuel-type-form.component */ "./src/app/components/fuel-type/fuel-type-form/fuel-type-form.component.ts");
/* harmony import */ var app_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var fuelTypeRoutes = [
    {
        path: 'fuelType',
        canActivate: [app_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _fuel_type_component__WEBPACK_IMPORTED_MODULE_2__["FuelTypeComponent"],
        children: [
            { path: 'list', component: _fuel_type_list_fuel_type_list_component__WEBPACK_IMPORTED_MODULE_3__["FuelTypeListComponent"] },
            { path: 'add', component: _fuel_type_form_fuel_type_form_component__WEBPACK_IMPORTED_MODULE_4__["FuelTypeFormComponent"] },
            { path: 'edit', component: _fuel_type_form_fuel_type_form_component__WEBPACK_IMPORTED_MODULE_4__["FuelTypeFormComponent"] }
        ]
    }
];
var FuelTypeRoutingModule = /** @class */ (function () {
    function FuelTypeRoutingModule() {
    }
    FuelTypeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(fuelTypeRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FuelTypeRoutingModule);
    return FuelTypeRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/fuel-type/fuel-type.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/fuel-type/fuel-type.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"col-12\">\n    <app-title [title]=title></app-title>\n  </div>\n</header>\n\n<div class=\"row\">\n  <div class=\"col-lg-4\">\n  <app-fuelType-list (searchTerm)=\"searchFuelTypes($event)\" [results$]=\"fuelTypes$\"></app-fuelType-list>\n  </div>\n  <div class=\"col-lg-8\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/fuel-type/fuel-type.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/fuel-type/fuel-type.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZnVlbC10eXBlL2Z1ZWwtdHlwZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/fuel-type/fuel-type.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/fuel-type/fuel-type.component.ts ***!
  \*************************************************************/
/*! exports provided: FuelTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelTypeComponent", function() { return FuelTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_fuel_type_fuel_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/fuel-type/fuel-type.service */ "./src/app/services/fuel-type/fuel-type.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuelTypeComponent = /** @class */ (function () {
    function FuelTypeComponent(fb, fuelTypeService, router, route) {
        this.fb = fb;
        this.fuelTypeService = fuelTypeService;
        this.router = router;
        this.route = route;
        this.title = "Fuel Type";
    }
    FuelTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getFuelTypes();
        this.fuelTypeService.refreshList.subscribe(function (res) {
            _this.getFuelTypes();
        }, function (err) {
            console.log(err);
        });
    };
    FuelTypeComponent.prototype.getFuelTypes = function () {
        this.fuelTypes$ = this.fuelTypeService.getFuelTypes();
    };
    FuelTypeComponent.prototype.searchFuelTypes = function (searchTerm) {
        if (searchTerm) {
            this.fuelTypes$ = this.fuelTypeService.searchFuelTypes(searchTerm);
        }
        else {
            this.getFuelTypes();
            //this.fuelTypes$ = new EmptyObservable();
        }
    };
    FuelTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-make',
            template: __webpack_require__(/*! ./fuel-type.component.html */ "./src/app/components/fuel-type/fuel-type.component.html"),
            styles: [__webpack_require__(/*! ./fuel-type.component.scss */ "./src/app/components/fuel-type/fuel-type.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], app_services_fuel_type_fuel_type_service__WEBPACK_IMPORTED_MODULE_3__["FuelTypeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FuelTypeComponent);
    return FuelTypeComponent;
}());



/***/ }),

/***/ "./src/app/components/fuel-type/fuel-type.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/fuel-type/fuel-type.module.ts ***!
  \**********************************************************/
/*! exports provided: FuelTypeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelTypeModule", function() { return FuelTypeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _fuel_type_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fuel-type-routing.module */ "./src/app/components/fuel-type/fuel-type-routing.module.ts");
/* harmony import */ var _fuel_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fuel-type.component */ "./src/app/components/fuel-type/fuel-type.component.ts");
/* harmony import */ var _fuel_type_list_fuel_type_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fuel-type-list/fuel-type-list.component */ "./src/app/components/fuel-type/fuel-type-list/fuel-type-list.component.ts");
/* harmony import */ var _fuel_type_form_fuel_type_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fuel-type-form/fuel-type-form.component */ "./src/app/components/fuel-type/fuel-type-form/fuel-type-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var FuelTypeModule = /** @class */ (function () {
    function FuelTypeModule() {
    }
    FuelTypeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _fuel_type_routing_module__WEBPACK_IMPORTED_MODULE_3__["FuelTypeRoutingModule"],
            ],
            declarations: [
                _fuel_type_component__WEBPACK_IMPORTED_MODULE_4__["FuelTypeComponent"],
                _fuel_type_list_fuel_type_list_component__WEBPACK_IMPORTED_MODULE_5__["FuelTypeListComponent"],
                _fuel_type_form_fuel_type_form_component__WEBPACK_IMPORTED_MODULE_6__["FuelTypeFormComponent"],
            ],
        })
    ], FuelTypeModule);
    return FuelTypeModule;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"header d-none d-block\">\n  <mdb-navbar id=\"mn\" SideClass=\"navbar navbar-expand-lg navbar-dark\">\n    <logo>\n      <img class=\"logo\" alt=\"logo\" src=\"https://s3.amazonaws.com/gear2gear/g2g-logo.png\">\n    </logo>\n    <links>\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" routerLink=\"/home\" routerLinkActive=\"active-link\">HOME<span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item dropdown\" *ngIf=\"auth.isAuthenticated()\" dropdown>\n          <a dropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\n            ADMIN<span class=\"caret\"></span></a>\n            <div *dropdownMenu class=\"dropdown-menu dropdown dropdown-primary\" role=\"menu\">\n              <a class=\"dropdown-item waves-light\" href=\"#\" routerLink=\"/car/edit\" routerLinkActive=\"active-link\">CAR</a>\n              <a class=\"dropdown-item waves-light\" href=\"#\" routerLink=\"/client/edit\" routerLinkActive=\"active-link\">CLIENT</a>\n              <a class=\"dropdown-item waves-light\" href=\"#\" routerLink=\"/make/add\" routerLinkActive=\"active-link\">MAKE</a>\n              <a class=\"dropdown-item waves-light\" href=\"#\" routerLink=\"/model/add\">MODEL</a>\n              <a class=\"dropdown-item waves-light\" href=\"#\" routerLink=\"/variant/add\">VARIANT</a>\n              <a class=\"dropdown-item waves-light\" href=\"#\" routerLink=\"/vehicleType/add\">VEHICLE TYPE</a>\n              <a class=\"dropdown-item waves-light\" href=\"#\" routerLink=\"/fuelType/add\">FUEL TYPE</a>\n              <a class=\"dropdown-item waves-light\" href=\"#\" routerLink=\"/transmissionType/add\">TRANSMISSION</a>\n              <a class=\"dropdown-item waves-light\" href=\"#\" routerLink=\"/insurance/add\">INSURANCE</a>\n              <a class=\"dropdown-item waves-light\" href=\"#\" routerLink=\"/expense/add\">EXPENSE</a>\n              <a class=\"dropdown-item waves-light\" href=\"#\" routerLink=\"/color/add\">COLOR</a>\n            </div>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/cars\" routerLinkActive=\"active-link\">CAR LISTING<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"auth.isAuthenticated()\">\n            <a class=\"nav-link\" routerLink=\"/investors-corner\" routerLinkActive=\"active-link\">INVESTOR'S CORNER<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"active-link\">ABOUT US<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/contact\" routerLinkActive=\"active-link\">CONTACT US<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"!auth.isAuthenticated()\" (click)=\"!auth.login()\">\n            <a class=\"nav-link\">LOGIN<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"auth.isAuthenticated()\" (click)=\"auth.logout()\">\n            <a class=\"nav-link\">LOGOUT<span class=\"sr-only\">(current)</span></a>\n          </li>\n        </ul>\n      </links>\n    </mdb-navbar>\n    </section>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  max-width: 100% !important; }\n\n.sr-only, button.navbar-toogler {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0; }\n\n.header {\n  height: 110px;\n  background-image: url(\"https://s3.amazonaws.com/gear2gear/bg1.jpeg\");\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding-top: 25px;\n  z-index: auto; }\n\n.dropdown-menu {\n  height: 350px;\n  overflow: scroll; }\n\n.logo {\n  width: 315px;\n  margin-left: -50px; }\n\na {\n  font-size: 12px !important; }\n\n/* Extra Small devices (tablets, 768px and up) col-sm */\n\n@media (max-width: 767px) {\n  .logo {\n    width: 200px;\n    height: auto;\n    margin-left: 0px; }\n  .header {\n    height: auto; }\n  .container {\n    max-width: 100% !important; } }\n\n/* Small devices (tablets, 768px and up) col-md  collapses here*/\n\n@media (min-width: 768px) and (max-width: 992px) {\n  .logo {\n    width: 200px;\n    height: auto;\n    margin-left: 0px; }\n  .header {\n    height: auto; }\n  .container {\n    margin: 0px !important; } }\n\n/* Medium devices (desktops, 992px and up)  col-lg */\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .logo {\n    width: 200px; }\n  a {\n    font-size: 10px !important; }\n  .container {\n    max-width: 100% !important; } }\n\n@media (min-width: 992px) {\n  .container {\n    max-width: 100% !important; } }\n\n/* Large devices (large desktops, 1200px and up) */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb3VqYW55YS9Eb2N1bWVudHMvQ2xvbmVkLVJlcG8vZ2VhcjJnZWFyL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQXlCLEVBQUE7O0FBVzNCO0VBQ0ksa0JBQWtCO0VBQ3BCLFVBQVU7RUFDVixXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixzQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFNBQVMsRUFBQTs7QUFFWDtFQUNFLGFBQWE7RUFDYixvRUFBb0U7RUFDcEUsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsaUJBQWdCO0VBQ2hCLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGFBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsMEJBQXlCLEVBQUE7O0FBSTNCLHVEQUFBOztBQUNBO0VBWEE7SUFhSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQixFQUFBO0VBOUJwQjtJQWlDSSxZQUFZLEVBQUE7RUF2RGhCO0lBMERJLDBCQUF5QixFQUFBLEVBQzFCOztBQUVILGdFQUFBOztBQUNBO0VBekJBO0lBMkJJLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7RUE1Q3BCO0lBK0NJLFlBQVksRUFBQTtFQXJFaEI7SUF3RUksc0JBQXFCLEVBQUEsRUFDdEI7O0FBSUgsb0RBQUE7O0FBQ0E7RUF6Q0E7SUEyQ0ksWUFBWSxFQUFBO0VBdENoQjtJQXlDSSwwQkFBMEIsRUFBQTtFQW5GOUI7SUFzRkksMEJBQXlCLEVBQUEsRUFDMUI7O0FBR0g7RUExRkE7SUE0RkksMEJBQTBCLEVBQUEsRUFDM0I7O0FBR0gsa0RBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICBtYXgtd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xufVxuLy8gLm5hdmJhci10b2dnbGVyLWljb257XG4vLyAgIGNvbG9yOmdyZWVuICFpbXBvcnRhbnQ7XG4vLyB9XG4gYnV0dG9uLm5hdmJhci10b29nbGVye1xuXG5cbkBleHRlbmQgLnNyLW9ubHk7XG59XG5cbi5zci1vbmx5e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNsaXA6IHJlY3QoMCwwLDAsMCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogMDtcbn1cbi5oZWFkZXJ7XG4gIGhlaWdodDogMTEwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2dlYXIyZ2Vhci9iZzEuanBlZycpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBhZGRpbmctdG9wOjI1cHg7XG4gIHotaW5kZXg6IGF1dG87XG59XG5cbi5kcm9wZG93bi1tZW51e1xuICBoZWlnaHQ6MzUwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5sb2dve1xuICB3aWR0aDogMzE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtNTBweDtcbn1cblxuYXtcbiAgZm9udC1zaXplOjEycHggIWltcG9ydGFudDtcbn1cblxuXG4vKiBFeHRyYSBTbWFsbCBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApIGNvbC1zbSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5sb2dve1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxuICAuaGVhZGVye1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAuY29udGFpbmVye1xuICAgIG1heC13aWR0aDoxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qIFNtYWxsIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgY29sLW1kICBjb2xsYXBzZXMgaGVyZSovXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAubG9nb3tcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cbiAgLmhlYWRlcntcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLmNvbnRhaW5lcntcbiAgICBtYXJnaW46MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuXG4vKiBNZWRpdW0gZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgIGNvbC1sZyAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gIC5sb2dve1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuICBhe1xuICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5jb250YWluZXJ7XG4gICAgbWF4LXdpZHRoOjEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpe1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKiBMYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHt9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth) {
        this.auth = auth;
        this.selectedMenu = "home";
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.selectedMenu = window.location.pathname.split("/").pop();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/history/history.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/history/history.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"col-12\">\n  <div class=\"row\">\n    <div class=\"col-lg-8 container-left\">\n      <div class=\"title text-center\">\n        <h1 class=\"h1-responsive\">ABOUT US</h1>\n      </div>\n      <div class=\"content\">\n        <p>\n          At a time when they were only <span class=\"strong\">Ambassadors and Fiats</span>, Mr. Rahman, a well known name in the used car dealership business dealt with the supply of imported cars and ran a successful garage\n          to fuel his passion for automobiles. His hard work and simplicity earned him a lot of respect and helped forge valuable customer relationships.\n        </p>\n        <p>\n          After working in a corporate job for 12 years, his son Ashfaq TP -\n          a car fanatic himself - established <span class=\"bold\">Gear2Gear</span>, a car dealership\n          company in Bengaluru, to carry on with the family legacy and cater to\n          a growing demand for good used cars.\n          His knowledge in cars along with his corporate experience has helped Gear2Gear build a successful client base in India.\n        </p>\n        <p class=\"tag\">\n          WE WILL HELP YOU DRIVE THE RIDE YOU DESIRE, THE RIDE YOU DESERVE\n        </p>\n      </div>\n    </div>\n    <div class=\"col-lg-4 container-right\">\n      <img class=\"img-car w-100 d-none d-lg-block\" src=\"https://s3.amazonaws.com/gear2gear/black-car.jpeg\"/>\n    </div>\n  </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/history/history.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/history/history.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-left {\n  padding-left: 25px;\n  padding-right: 25px;\n  padding-top: 50px; }\n\n.content {\n  padding-left: 15%;\n  padding-right: 15%;\n  padding-top: 5%; }\n\n.container-right {\n  padding: 0px; }\n\n.tag {\n  font-size: 18px;\n  letter-spacing: 5px;\n  padding: 25px 0px 25px 0px;\n  text-align: left;\n  font-family: 'Arial Black', 'Arial Bold', Gadget, sans-serif; }\n\n.strong {\n  font-size: 22px;\n  color: #8acc25;\n  letter-spacing: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb3VqYW55YS9Eb2N1bWVudHMvQ2xvbmVkLVJlcG8vZ2VhcjJnZWFyL3NyYy9hcHAvY29tcG9uZW50cy9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxrQkFBaUI7RUFDZixtQkFBa0I7RUFDbkIsaUJBQWdCLEVBQUE7O0FBRW5CO0VBQ0UsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixlQUFjLEVBQUE7O0FBRWhCO0VBQ0UsWUFBVyxFQUFBOztBQUdiO0VBQ0csZUFBZTtFQUNmLG1CQUFtQjtFQUNwQiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLDREQUE0RCxFQUFBOztBQUU5RDtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb257XG59XG5cbi5pbWctY2Fye1xuXG59XG5cbi5jb250YWluZXItbGVmdHtcbiAgcGFkZGluZy1sZWZ0OjI1cHg7XG4gICAgcGFkZGluZy1yaWdodDoyNXB4O1xuICAgcGFkZGluZy10b3A6NTBweDtcbn1cbi5jb250ZW50e1xuICBwYWRkaW5nLWxlZnQ6MTUlO1xuICBwYWRkaW5nLXJpZ2h0OjE1JTtcbiAgcGFkZGluZy10b3A6NSU7XG59XG4uY29udGFpbmVyLXJpZ2h0e1xuICBwYWRkaW5nOjBweDtcbn1cblxuLnRhZ3tcbiAgIGZvbnQtc2l6ZTogMThweDtcbiAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gIHBhZGRpbmcgOjI1cHggMHB4IDI1cHggMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogJ0FyaWFsIEJsYWNrJywgJ0FyaWFsIEJvbGQnLCBHYWRnZXQsIHNhbnMtc2VyaWY7Ly9UbyBEaXNwbGF5IGFyaWFsIGJsYWNrXG59XG4uc3Ryb25ne1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjOGFjYzI1O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/history/history.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/history/history.component.ts ***!
  \*********************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HistoryComponent = /** @class */ (function () {
    function HistoryComponent() {
    }
    HistoryComponent.prototype.ngOnInit = function () {
    };
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/components/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.scss */ "./src/app/components/history/history.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"text-center\">\n    <mdb-carousel class=\"carousel slide carousel-fade\" xdata-interval=\"false\" [animation]=\"'fade'\">\n      <mdb-carousel-item>\n        <div class=\"view w-100\">\n          <img class=\"d-block w-100\" data-src=\"https://s3.amazonaws.com/gear2gear/bg3.jpeg\" alt=\"First slide\">\n          <div class=\"mask rgba-black-light waves-light\" mdbWavesEffect></div>\n        </div>\n        <div class=\"carousel-caption text-center\">\n          <h1 class=\"h1-responsive text-white animated fadeInDown\">WE BUY-SELL-SWAP USED CARS AND PREMIUM BICYCLES</h1>\n        </div>\n      </mdb-carousel-item>\n      <mdb-carousel-item>\n        <div class=\"view w-100\">\n          <img class=\"d-block w-100\" data-src=\"https://s3.amazonaws.com/gear2gear/xuv500.jp2\" alt=\"Second slide\">\n          <div class=\"mask rgba-black-strong waves-strong\" mdbWavesEffect></div>\n        </div>\n        <div class=\"carousel-caption text-left\">\n          <h1 class=\"h1-responsive text-white animated slideInLeft\">WANT TO BUY</h1>\n          <h1 class=\"h1-responsive text-white animated slideInLeft\">YOUR FAVOURITE SUV?</h1>\n          <button class=\"d-none d-lg-block btn btn-c-black animated slideInLeft\"><a class=\"nav-link\" href=\"#\" routerLink=\"/cars\" routerLinkActive=\"active-link\">Find your car<span class=\"sr-only\">(current)</span></a></button>\n        </div>\n      </mdb-carousel-item>\n\n      <mdb-carousel-item>\n        <div class=\"view w-100\">\n          <img class=\"d-block w-100\" src=\"https://s3.amazonaws.com/gear2gear/bg5.jpg\" alt=\"Third slide\">\n          <div xclass=\"mask rgba-black-light waves-light\" mdbWavesEffect></div>\n        </div>\n        <div class=\"carousel-caption text-right\">\n          <h1 class=\"h1-responsive text-white animated fadeInRight\">READY FOR</h1>\n          <h1 class=\"h1-responsive text-white animated slideInRight\">AN UPGRADE?</h1>\n          <button class=\"d-none d-lg-block float-right btn btn-c-green animated slideInRight\"><a class=\"nav-link\" href=\"#\" routerLink=\"/cars\" routerLinkActive=\"active-link\">Find your car<span class=\"sr-only\">(current)</span></a></button>\n        </div>\n      </mdb-carousel-item>\n    </mdb-carousel>\n  </div>\n</section>\n\n<app-advantages></app-advantages>\n<section>\n  <app-checklist></app-checklist>\n</section>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-item {\n  height: 500px; }\n\n.carousel-caption {\n  margin-bottom: 175px !important; }\n\n.carousel-info {\n  margin-top: 35px; }\n\n/* Extra Small devices (tablets, 768px and up) col-sm */\n\n@media (max-width: 767px) {\n  .carousel-caption {\n    margin-bottom: 25px !important; }\n  .carousel-item {\n    height: 240px; } }\n\n/* Small devices (tablets, 768px and up) col-md  collapses here*/\n\n@media (min-width: 768px) and (max-width: 992px) {\n  .carousel-caption {\n    margin-bottom: 150px !important; } }\n\n/* Medium devices (desktops, 992px and up)  col-lg */\n\n/* Large devices (large desktops, 1200px and up) */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb3VqYW55YS9Eb2N1bWVudHMvQ2xvbmVkLVJlcG8vZ2VhcjJnZWFyL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxhQUFZLEVBQUE7O0FBRVo7RUFDRSwrQkFBOEIsRUFBQTs7QUFFaEM7RUFDRSxnQkFBZSxFQUFBOztBQUdqQix1REFBQTs7QUFDQTtFQUNFO0lBQ0UsOEJBQTZCLEVBQUE7RUFFL0I7SUFDQSxhQUFZLEVBQUEsRUFDWDs7QUFFSCxnRUFBQTs7QUFDQTtFQUNFO0lBQ0UsK0JBQThCLEVBQUEsRUFDL0I7O0FBSUgsb0RBQUE7O0FBS0Esa0RBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1pdGVte1xuaGVpZ2h0OjUwMHB4O1xufVxuLmNhcm91c2VsLWNhcHRpb257XG4gIG1hcmdpbi1ib3R0b206MTc1cHggIWltcG9ydGFudDtcbn1cbi5jYXJvdXNlbC1pbmZve1xuICBtYXJnaW4tdG9wOjM1cHg7XG59XG5cbi8qIEV4dHJhIFNtYWxsIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgY29sLXNtICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNhcm91c2VsLWNhcHRpb257XG4gICAgbWFyZ2luLWJvdHRvbToyNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNhcm91c2VsLWl0ZW17XG4gIGhlaWdodDoyNDBweDtcbiAgfVxufVxuLyogU21hbGwgZGV2aWNlcyAodGFibGV0cywgNzY4cHggYW5kIHVwKSBjb2wtbWQgIGNvbGxhcHNlcyBoZXJlKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jYXJvdXNlbC1jYXB0aW9ue1xuICAgIG1hcmdpbi1ib3R0b206MTUwcHggIWltcG9ydGFudDtcbiAgfVxuXG59XG5cbi8qIE1lZGl1bSBkZXZpY2VzIChkZXNrdG9wcywgOTkycHggYW5kIHVwKSAgY29sLWxnICovXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcblxufVxuXG4vKiBMYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHt9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { AuthService } from './../auth/auth.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/insurance/insurance-form/insurance-form.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/insurance/insurance-form/insurance-form.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid section\">\n  <div *ngIf=\"message\" class=\"alert alert-success text-center col-12\">\n    <strong>Success!</strong>&nbsp;<span>{{message}}</span>\n  </div>\n  <div *ngIf=\"message_error\" class=\"alert alert-danger text-center col-12\">\n    <strong>Error!</strong>&nbsp;<span>{{message_error}}</span>\n  </div>\n  <div class=\"col-12 grey lighten-4\">\n    <header class=\"header row\">\n      <div class=\"col-12\">\n        <app-title [title]=title></app-title>\n      </div>\n    </header>\n\n    <div class=\"col-12\">\n      <form [formGroup]=\"insuranceForm\" (ngSubmit)=\"onSubmit()\" >\n        <div class=\"form-group\">\n          <label for=\"inputInsuranceName\" class=\"col-sm-2 col-form-label\">Name</label>\n          <div>\n            <div class=\"md-form mt-0\">\n              <input type=\"text\" class=\"form-control capitalize\" id=\"inputInsuranceName\" formControlName=\"name\">\n              <!-- <p style=\"color:red\" *ngIf=\"insuranceForm.controls.name.touched && insuranceForm.controls.name.errors.required\">Required</p> -->\n              <app-control-messages [control]=\"insuranceForm.controls.name\"></app-control-messages>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"text-right\">\n            <!--  [disabled]=\"insuranceForm.invalid\"-->\n            <button type=\"submit\" class=\"btn btn-primary btn-custom btn-md\" >\n              <i class=\"fa fa-save\"></i>\n            </button>\n            <app-simple-modal [module]=\"module\" [mode]=\"mode\" [name]=\"insuranceForm.controls.name.value\" (isDelete)=\"deleteInsurance($event)\"></app-simple-modal>\n\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/insurance/insurance-form/insurance-form.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/insurance/insurance-form/insurance-form.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5zdXJhbmNlL2luc3VyYW5jZS1mb3JtL2luc3VyYW5jZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/insurance/insurance-form/insurance-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/insurance/insurance-form/insurance-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: InsuranceFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceFormComponent", function() { return InsuranceFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_insurance_insurance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/insurance/insurance.service */ "./src/app/services/insurance/insurance.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InsuranceFormComponent = /** @class */ (function () {
    function InsuranceFormComponent(fb, insuranceService, router, route) {
        var _this = this;
        this.fb = fb;
        this.insuranceService = insuranceService;
        this.router = router;
        this.route = route;
        this.title = "Create Insurance";
        this.module = "insurance";
        this.mode = "discard";
        this.message = "";
        this.message_error = "";
        this.submitted = false;
        this.insuranceService.selectedInsuranceId.next(0);
        this.sub = this.insuranceService.selectedInsuranceId
            .subscribe(function (res) {
            _this.selectedInsurance_Id = res;
            if (_this.insuranceService.selectedMode == "Edit") {
                _this.title = "Edit Insurance";
                _this.mode = "delete";
                _this.getInsuranceById(res);
            }
        }, function (err) {
        });
    }
    InsuranceFormComponent.prototype.createForm = function () {
        this.insuranceForm = this.fb.group({
            insurance_id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
        });
    };
    InsuranceFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.insuranceForm.valid) {
            if (this.insuranceService.selectedMode == 'Create') {
                this.createInsurance();
            }
            else if (this.insuranceService.selectedMode == 'Edit') {
                this.updateInsurance();
            }
        }
    };
    InsuranceFormComponent.prototype.getInsuranceById = function (insurance_id) {
        var _this = this;
        this.insuranceService.getInsuranceById(insurance_id)
            .subscribe(function (res) {
            _this.insuranceForm.patchValue(res[0]);
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    InsuranceFormComponent.prototype.createInsurance = function () {
        var _this = this;
        this.insuranceService.createInsurance(this.insuranceForm.value)
            .subscribe(function (res) {
            window.scrollTo(0, 0);
            _this.message = _this.insuranceForm.get('name').value + " created successfully.";
            setTimeout(function () {
                _this.message = "";
            }, 5000);
            _this.insuranceService.refreshList.next(true);
            _this.insuranceForm.reset();
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    InsuranceFormComponent.prototype.updateInsurance = function () {
        var _this = this;
        this.insuranceService.updateInsurance(this.insuranceForm.value)
            .subscribe(function (res) {
            window.scrollTo(0, 0);
            _this.message = _this.insuranceForm.get('name').value + " updated successfully.";
            setTimeout(function () {
                _this.message = "";
            }, 5000);
            _this.insuranceService.refreshList.next(true);
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    InsuranceFormComponent.prototype.deleteInsurance = function (event) {
        var _this = this;
        if (this.selectedInsurance_Id) {
            this.insuranceService.deleteInsurance(this.selectedInsurance_Id).subscribe(function (res) {
                _this.insuranceService.refreshList.next(true);
                _this.router.navigate(['/insurance/add']);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.insuranceForm.reset();
        }
    };
    InsuranceFormComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    InsuranceFormComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    InsuranceFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-insurance-form',
            template: __webpack_require__(/*! ./insurance-form.component.html */ "./src/app/components/insurance/insurance-form/insurance-form.component.html"),
            styles: [__webpack_require__(/*! ./insurance-form.component.scss */ "./src/app/components/insurance/insurance-form/insurance-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], app_services_insurance_insurance_service__WEBPACK_IMPORTED_MODULE_3__["InsuranceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], InsuranceFormComponent);
    return InsuranceFormComponent;
}());



/***/ }),

/***/ "./src/app/components/insurance/insurance-list/insurance-list.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/insurance/insurance-list/insurance-list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid section-list\">\n  <div>\n    <app-search (searchTermValueChanged)=\"searchInsurances($event)\" (isCreate)=\"createInsurance('Create')\"></app-search>\n  </div>\n  <div>\n    <div *ngIf=\"(results$ | async)?.length==0\" class=\"alert alert-danger text-center col-12\">\n      <strong>Error!</strong>&nbsp;<span>No records found</span>\n    </div>\n    <table class=\"table\">\n      <thead class=\"#f5f5f5 grey lighten-4\">\n        <tr>\n          <th>Name</th>\n          <th>Edit</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor='let insurance of results$ | async' [ngClass]=\"{'is-active': selectedInsuranceId == insurance.insurance_id}\">\n          <td class=\"capitalize\">{{insurance.name}}</td>\n          <td class=\"pointer\" (click)=\"selectInsurance(insurance.insurance_id, 'Edit')\">\n              <i class=\"fa fa-pencil\"></i>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/insurance/insurance-list/insurance-list.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/insurance/insurance-list/insurance-list.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5zdXJhbmNlL2luc3VyYW5jZS1saXN0L2luc3VyYW5jZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/insurance/insurance-list/insurance-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/insurance/insurance-list/insurance-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: InsuranceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceListComponent", function() { return InsuranceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_insurance_insurance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/insurance/insurance.service */ "./src/app/services/insurance/insurance.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InsuranceListComponent = /** @class */ (function () {
    function InsuranceListComponent(insuranceService, router, route) {
        var _this = this;
        this.insuranceService = insuranceService;
        this.router = router;
        this.route = route;
        this.searchTerm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.insuranceService.selectedInsuranceId.subscribe(function (res) {
            _this.selectedInsuranceId = res;
        }, function (err) {
        });
    }
    InsuranceListComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/insurance/add']);
    };
    InsuranceListComponent.prototype.searchInsurances = function (search) {
        this.searchTerm.emit(search);
    };
    //On Click of the Add Button
    InsuranceListComponent.prototype.createInsurance = function (mode) {
        this.selectedInsuranceId = 0;
        this.insuranceService.selectedMode = mode;
        this.router.navigate(['/insurance/add']);
    };
    //On Click of the Edit Button
    InsuranceListComponent.prototype.selectInsurance = function (insurance_id, mode) {
        var _this = this;
        this.selectedInsuranceId = insurance_id;
        this.insuranceService.selectedMode = mode;
        this.router.navigate(['/insurance/edit']);
        setTimeout(function () {
            _this.insuranceService.selectedInsuranceId.next(insurance_id);
        }, 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], InsuranceListComponent.prototype, "results$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], InsuranceListComponent.prototype, "searchTerm", void 0);
    InsuranceListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-insurance-list',
            template: __webpack_require__(/*! ./insurance-list.component.html */ "./src/app/components/insurance/insurance-list/insurance-list.component.html"),
            styles: [__webpack_require__(/*! ./insurance-list.component.scss */ "./src/app/components/insurance/insurance-list/insurance-list.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_insurance_insurance_service__WEBPACK_IMPORTED_MODULE_3__["InsuranceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], InsuranceListComponent);
    return InsuranceListComponent;
}());



/***/ }),

/***/ "./src/app/components/insurance/insurance-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/insurance/insurance-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: InsuranceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceRoutingModule", function() { return InsuranceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _insurance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./insurance.component */ "./src/app/components/insurance/insurance.component.ts");
/* harmony import */ var _insurance_list_insurance_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insurance-list/insurance-list.component */ "./src/app/components/insurance/insurance-list/insurance-list.component.ts");
/* harmony import */ var _insurance_form_insurance_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./insurance-form/insurance-form.component */ "./src/app/components/insurance/insurance-form/insurance-form.component.ts");
/* harmony import */ var app_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var insuranceRoutes = [
    {
        path: 'insurance',
        canActivate: [app_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _insurance_component__WEBPACK_IMPORTED_MODULE_2__["InsuranceComponent"],
        children: [
            { path: 'list', component: _insurance_list_insurance_list_component__WEBPACK_IMPORTED_MODULE_3__["InsuranceListComponent"] },
            { path: 'add', component: _insurance_form_insurance_form_component__WEBPACK_IMPORTED_MODULE_4__["InsuranceFormComponent"] },
            { path: 'edit', component: _insurance_form_insurance_form_component__WEBPACK_IMPORTED_MODULE_4__["InsuranceFormComponent"] }
        ]
    }
];
var InsuranceRoutingModule = /** @class */ (function () {
    function InsuranceRoutingModule() {
    }
    InsuranceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(insuranceRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], InsuranceRoutingModule);
    return InsuranceRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/insurance/insurance.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/insurance/insurance.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"col-12\">\n    <app-title [title]=title></app-title>\n  </div>\n</header>\n\n<div class=\"row\">\n  <div class=\"col-lg-4\">\n  <app-insurance-list (searchTerm)=\"searchInsurances($event)\" [results$]=\"insurances$\"></app-insurance-list>\n  </div>\n  <div class=\"col-lg-8\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/insurance/insurance.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/insurance/insurance.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5zdXJhbmNlL2luc3VyYW5jZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/insurance/insurance.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/insurance/insurance.component.ts ***!
  \*************************************************************/
/*! exports provided: InsuranceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceComponent", function() { return InsuranceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_insurance_insurance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/insurance/insurance.service */ "./src/app/services/insurance/insurance.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InsuranceComponent = /** @class */ (function () {
    function InsuranceComponent(fb, insuranceService, router, route) {
        this.fb = fb;
        this.insuranceService = insuranceService;
        this.router = router;
        this.route = route;
        this.title = "Insurance";
    }
    InsuranceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getInsurances();
        this.insuranceService.refreshList.subscribe(function (res) {
            _this.getInsurances();
        }, function (err) {
            console.log(err);
        });
    };
    InsuranceComponent.prototype.getInsurances = function () {
        this.insurances$ = this.insuranceService.getInsurances();
    };
    InsuranceComponent.prototype.searchInsurances = function (searchTerm) {
        if (searchTerm) {
            this.insurances$ = this.insuranceService.searchInsurances(searchTerm);
        }
        else {
            this.getInsurances();
            //this.insurances$ = new EmptyObservable();
        }
    };
    InsuranceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-insurance',
            template: __webpack_require__(/*! ./insurance.component.html */ "./src/app/components/insurance/insurance.component.html"),
            styles: [__webpack_require__(/*! ./insurance.component.scss */ "./src/app/components/insurance/insurance.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], app_services_insurance_insurance_service__WEBPACK_IMPORTED_MODULE_3__["InsuranceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], InsuranceComponent);
    return InsuranceComponent;
}());



/***/ }),

/***/ "./src/app/components/insurance/insurance.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/insurance/insurance.module.ts ***!
  \**********************************************************/
/*! exports provided: InsuranceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceModule", function() { return InsuranceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _insurance_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insurance-routing.module */ "./src/app/components/insurance/insurance-routing.module.ts");
/* harmony import */ var _insurance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./insurance.component */ "./src/app/components/insurance/insurance.component.ts");
/* harmony import */ var _insurance_list_insurance_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./insurance-list/insurance-list.component */ "./src/app/components/insurance/insurance-list/insurance-list.component.ts");
/* harmony import */ var _insurance_form_insurance_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insurance-form/insurance-form.component */ "./src/app/components/insurance/insurance-form/insurance-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var InsuranceModule = /** @class */ (function () {
    function InsuranceModule() {
    }
    InsuranceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _insurance_routing_module__WEBPACK_IMPORTED_MODULE_3__["InsuranceRoutingModule"],
            ],
            declarations: [
                _insurance_component__WEBPACK_IMPORTED_MODULE_4__["InsuranceComponent"],
                _insurance_list_insurance_list_component__WEBPACK_IMPORTED_MODULE_5__["InsuranceListComponent"],
                _insurance_form_insurance_form_component__WEBPACK_IMPORTED_MODULE_6__["InsuranceFormComponent"],
            ],
        })
    ], InsuranceModule);
    return InsuranceModule;
}());



/***/ }),

/***/ "./src/app/components/inventory/inventory.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/inventory/inventory.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<header>\n  <h1 class=\"h1-responsive\">CAR LISTINGS</h1>\n</header>\n\n<section>\n  <div class=\"row content\">\n    <div class=\"filter-div col-lg-3\">\n      <div class=\"qc\">\n        <h2 class=\"title\"><i class=\"fa fa-car text-right\"></i>&nbsp;&nbsp;Find your car</h2>\n      </div>\n      <form [formGroup]=\"filterForm\" xaction=\"/action_page.php\">\n        <div>\n          <div class=\"form-group col\">\n            <label class=\"col-form-label\">Make</label>\n            <select class=\"form-control\" formControlName=\"make\">\n              <option *ngFor=\"let make of makes$ | async\" [value]=\"make.make_id\">{{make.name}}</option>\n            </select>\n          </div>\n          <div class=\"form-group col\">\n            <label class=\"col-form-label\">Model</label>\n            <select class=\"form-control\" formControlName=\"model\">\n              <option *ngFor=\"let model of models$ | async\" [value]=\"model.model_id\">{{model.name}}</option>\n            </select>\n          </div>\n          <div class=\"form-group col\">\n            <label class=\"col-form-label\">Variant</label>\n            <select class=\"form-control\"  formControlName=\"variant\">\n              <option *ngFor=\"let variant of variants$ | async\" [value]=\"variant.variant_id\">{{variant.name}}</option>\n            </select>\n          </div>\n          <div class=\"form-group col\">\n            <label class=\"col-form-label\">Vehicle Type</label>\n            <select class=\"form-control\" formControlName=\"vehicle_type\">\n              <option *ngFor=\"let vehicleType of vehicleTypes$ | async\" [value]=\"vehicleType.vehicle_type_id\">{{vehicleType.name}}</option>\n            </select>\n          </div>\n\n          <div class=\"form-group col\">\n            <label class=\"col-form-label\">Fuel Type</label>\n            <select class=\"form-control\" formControlName=\"fuel_type\">\n              <option *ngFor=\"let fuelType of fuelTypes$ | async\" [value]=\"fuelType.fuel_type_id\">{{fuelType.name}}</option>\n            </select>\n          </div>\n          <div class=\"form-group col\">\n            <label class=\"col-form-label\">Transmission</label>\n            <select class=\"form-control\" formControlName=\"transmission_type\">\n              <option *ngFor=\"let transmissionType of transmissionTypes$ | async\" [value]=\"transmissionType.transmission_type_id\">{{transmissionType.name}}</option>\n            </select>\n          </div>\n          <div class=\"form-group col text-center\">\n            <label class=\"col-form-label\" for=\"inputIsSold\">Is Sold?</label><br>\n            <input type=\"checkbox\" cclass=\"form-check-input\" id=\"inputIsSold\" formControlName=\"is_sold\">\n          </div>\n\n          <div class=\"form-group col text-center\" xstyle=\"margin-top: 32px;\">\n            <button type=\"submit\" class=\"btn btn-primary btn-custom2 btn-md xcol-md-5\" (click)=\"getFilteredCars()\">\n              Find\n            </button>\n            <button type=\"submit\" class=\"btn btn-primary btn-custom2 btn-md xcol-md-5\" (click)=\"clear()\">\n              Clear\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-lg-9\">\n      <div *ngIf=\"(cars$ | async)?.length==0\" class=\"alert alert-danger text-center xcol-12\" style=\"margin:50px\">\n        <strong>Error!</strong>&nbsp;<span>No records matching the search criteria.</span>\n      </div>\n\n      <div class=\"row car-item\" *ngFor=\"let car of cars$ |async\">\n        <div class=\"col-lg-5 xcar-image\">\n          <mdb-carousel [isControls]=\"true\">\n            <mdb-slide *ngFor=\"let file of car.image_urls\">\n              <img class=\"d-block w-100 img-fluid car-img\" [src]=\"file.url\" alt=\"First slide\">\n            </mdb-slide>\n            <mdb-slide *ngIf=\"car.image_urls?.length==0\">\n              <img class=\"d-block w-100 img-fluid car-img\" src=\"https://s3.amazonaws.com/gear2gear/no-photo1.jpeg\" alt=\"First slide\" style=\"height:370px\">\n            </mdb-slide>\n          </mdb-carousel>\n        </div>\n\n        <div class=\"col-lg-7 car-details\">\n          <mat-tab-group>\n            <mat-tab class=\"col-lg-6\" label=\"DETAILS\">\n              <div class=\"car-details-inner\">\n                <div>\n                  <div class=\"row\">\n                    <p class=\"title-car col-lg-8\">{{car.make_name}} {{car.model_name}} {{car.variant_name}}\n                    </p>\n                    <p *ngIf=\"car.selling_price != null && car.selling_price != ''\" class=\"col-lg-4 text-lg-right sp\">Rs.{{car.selling_price}}</p>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6 text-center component\">\n                      <i class=\"fa fa-heartbeat fa-small\"></i>\n                      <p class=\"capitalize\">{{car.fuel_type_name}}</p>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6 text-center component\">\n                      <i class=\"fa fa-calendar fa-small\"></i>\n                      <p>{{car.make_year}}</p>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6 text-center component\">\n                      <i class=\"fa fa-road fa-small\"></i>\n                      <p>{{car.mileage}} Kms</p>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6 text-center component\">\n                      <i class=\"fa fa-users fa-small\"></i>\n                      <p *ngIf=\"car.owners == 1\">{{car.owners}} Owner</p>\n                      <p *ngIf=\"car.owners != 1\">{{car.owners}} Owners</p>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 text-center component\">\n                      <i class=\"fa fa-magic fa-small\" aria-hidden=\"true\"></i>\n                      <p class=\"capitalize\">Ext. {{car.exterior_color_name}}</p>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 text-center component\">\n                      <i class=\"fa fa-paint-brush fa-small\" aria-hidden=\"true\"></i>\n                      <p class=\"capitalize\">Int. {{car.interior_color_name}}</p>\n                    </div>\n\n                    <div class=\"col-lg-3 col-md-3 text-center component\">\n                      <i class=\"fa fa-life-ring fa-small\" aria-hidden=\"true\"></i>\n                      <p class=\"capitalize\">{{car.transmission_type_name}}</p>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 text-center component\">\n                      <i class=\"fa fa-bolt fa-small\" aria-hidden=\"true\"></i>\n                      <p *ngIf=\"car.is_accidental == true\">Accidental? Yes</p>\n                      <p *ngIf=\"car.is_accidental != true\">Accidental? No</p>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6 text-center component\">\n                      <i class=\"fa fa-automobile fa-small\" aria-hidden=\"true\"></i>\n                      <p class=\"capitalize\">{{car.vehicle_type_name}}</p>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 text-center component\">\n                      <i class=\"fa fa-thermometer-full fa-small\" aria-hidden=\"true\"></i>\n                      <p>{{car.fuel_economy}}Km/l</p>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 text-center component\">\n                      <i class=\"fa fa-file fa-small\" aria-hidden=\"true\"></i>\n                      <p class=\"capitalize\">{{car.insurance_name}}</p>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 text-center component\">\n                      <i class=\"fa fa-car fa-small\" aria-hidden=\"true\"></i>\n                      <p class=\"uppercase\">{{car.license_plate}}</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </mat-tab>\n            <mat-tab class=\"col-6\" label=\"DESCRIPTION\">\n              <div>\n                <div class=\"col-12\" style=\"padding:10px;\">\n                  <div class=\"col-12\">\n                    <h3 class=\"row title-car\">More Info</h3>\n                  </div>\n                  <p *ngIf=\"car.description != ''\">{{car.description}}</p>\n                  <p class=\"info\" *ngIf=\"car.description == '' || car.description == null\">NOT AVAILABLE</p>\n                </div>\n              </div>\n            </mat-tab>\n          </mat-tab-group>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/inventory/inventory.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/inventory/inventory.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  position: relative;\n  height: 300px;\n  background-image: linear-gradient(#ff9d2f, #ff6126);\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));\n          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));\n  background-image: url(\"https://s3.amazonaws.com/gear2gear/bg1.jpeg\");\n  background-attachment: fixed;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  /* change the calc height to a percentage height to get alternate responsive behavior*/ }\n\nh1 {\n  margin: 0;\n  padding: 100px 0;\n  padding-left: 50px;\n  padding-top: 150px;\n  color: white; }\n\nh2 {\n  font-size: 18px;\n  color: black; }\n\nsection {\n  margin-top: -5vw;\n  background-image: linear-gradient(135deg, #777, #111);\n  background-image: linear-gradient(135deg, #fff, #fff); }\n\n.content {\n  margin: 0;\n  padding: 100px 0;\n  padding-left: 2%; }\n\n.page-title {\n  height: 350px; }\n\n.page-title-bg {\n  background-image: url(\"https://s3.amazonaws.com/gear2gear/bg1.jpeg\");\n  background-attachment: fixed;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.page-title h1 {\n  height: inherit;\n  vertical-align: center;\n  padding-top: 10%;\n  padding-bottom: 10%;\n  padding-left: 5%;\n  font-weight: 700;\n  color: #fff;\n  text-transform: uppercase;\n  font-family: \"Source Sans Pro\", Helvetica, Arial, sans-serif; }\n\n.filter-div {\n  border-radius: 5px;\n  padding: 10px;\n  border: 1px dotted #e8e8e8; }\n\n.qc {\n  padding: 25px;\n  font-weight: bold;\n  border-bottom: 5px solid #8acc25; }\n\n.fa {\n  font-size: 22px !important; }\n\n.fa-small {\n  font-size: 20px !important;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n.col-form-label {\n  font-size: 13px !important;\n  text-transform: uppercase !important; }\n\n.info {\n  font-size: 13px; }\n\n.title-car {\n  color: #8acc25 !important;\n  text-transform: capitalize;\n  font-size: 18px;\n  color: #222 !important;\n  font-weight: bold; }\n\n.sp {\n  color: #8acc25 !important;\n  font-size: 18px;\n  font-weight: bold; }\n\n.car-item {\n  margin-left: 5px;\n  border-radius: 5px;\n  border: 1px dotted #e8e8e8;\n  margin-bottom: 25px;\n  height: 385px; }\n\n.car-image {\n  padding: 0px; }\n\n.car-details {\n  border-left: 0px; }\n\n.car-details-inner {\n  background-color: white;\n  padding: 15px;\n  height: inherit; }\n\n.component {\n  background-color: #f8f8f8;\n  border-right: 5px solid white;\n  border-bottom: 5px solid white;\n  padding: 0px;\n  font-size: 13px; }\n\n.component:hover {\n  opacity: 0.8; }\n\n.accent {\n  color: #8acc25 !important; }\n\n.filter-label {\n  margin: 10px; }\n\n.filter-control {\n  margin-right: 15px; }\n\ninput[type=checkbox] {\n  -ms-transform: scale(2.5);\n  /* IE */\n  -moz-transform: scale(2.5);\n  /* FF */\n  -webkit-transform: scale(2.5);\n  /* Safari and Chrome */\n  -o-transform: scale(2.5);\n  /* Opera */\n  margin-left: 10px;\n  margin-top: 10px; }\n\n/* Extra Small devices (tablets, 768px and up) col-sm */\n\n@media (max-width: 767px) {\n  .car-item {\n    height: auto; } }\n\n/* Small devices (tablets, 768px and up) col-md  collapses here*/\n\n@media (min-width: 768px) and (max-width: 992px) {\n  .car-item {\n    height: auto; } }\n\n/* Medium devices (desktops, 992px and up)  col-lg */\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .car-item {\n    height: auto; } }\n\n/* Large devices (large desktops, 1200px and up) */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb3VqYW55YS9Eb2N1bWVudHMvQ2xvbmVkLVJlcG8vZ2VhcjJnZWFyL3NyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRvcnkvaW52ZW50b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtREFBbUQ7RUFDbkQsc0VBS0M7VUFMRCw4REFLQztFQUVELG9FQUFvRTtFQUNwRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsc0ZBQUEsRUFBdUY7O0FBR3pGO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFXZDtFQUNHLGVBQWM7RUFDZixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxnQkFBZ0I7RUFDaEIscURBQXFEO0VBQ3JELHFEQUFxRCxFQUFBOztBQUd2RDtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsZ0JBQWUsRUFBQTs7QUFHakI7RUFDRSxhQUFZLEVBQUE7O0FBR2Q7RUFDRSxvRUFBb0U7RUFDcEUsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsc0JBRUYsRUFBQTs7QUFDQTtFQUNFLGVBQWM7RUFDZCxzQkFBc0I7RUFDdEIsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6Qiw0REFBNEQsRUFBQTs7QUFHOUQ7RUFDRSxrQkFBaUI7RUFDakIsYUFBWTtFQUNaLDBCQUEwQixFQUFBOztBQUU1QjtFQUNFLGFBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0NBQWdDLEVBQUE7O0FBRWxDO0VBQ0UsMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0UsMEJBQTBCO0VBQzFCLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsMEJBQTBCO0VBQzFCLG9DQUFvQyxFQUFBOztBQU10QztFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSx5QkFBeUI7RUFDekIsMEJBQXlCO0VBQ3pCLGVBQWU7RUFDZixzQkFBc0I7RUFDckIsaUJBQWlCLEVBQUE7O0FBRXBCO0VBQ0UseUJBQXlCO0VBQ3hCLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFFcEI7RUFDRSxnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQiwwQkFBeUI7RUFDekIsbUJBQWtCO0VBQ2xCLGFBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVcsRUFBQTs7QUFHYjtFQUNFLGdCQUFlLEVBQUE7O0FBR2pCO0VBQ0UsdUJBQXNCO0VBQ3RCLGFBQVk7RUFDWixlQUFjLEVBQUE7O0FBR2hCO0VBQ0UseUJBQXdCO0VBQ3hCLDZCQUE0QjtFQUM1Qiw4QkFBNkI7RUFDN0IsWUFBVztFQUNYLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSx5QkFBd0IsRUFBQTs7QUFFMUI7RUFDRSxZQUFXLEVBQUE7O0FBRWI7RUFDRSxrQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSx5QkFBeUI7RUFBRSxPQUFBO0VBQzNCLDBCQUEwQjtFQUFFLE9BQUE7RUFDNUIsNkJBQTZCO0VBQUUsc0JBQUE7RUFDL0Isd0JBQXdCO0VBQUUsVUFBQTtFQUMxQixpQkFBZ0I7RUFDaEIsZ0JBQWUsRUFBQTs7QUFLakIsdURBQUE7O0FBQ0E7RUFDRTtJQUNFLFlBQVcsRUFBQSxFQUNaOztBQUVILGdFQUFBOztBQUNBO0VBQ0U7SUFDRSxZQUFXLEVBQUEsRUFDWjs7QUFHSCxvREFBQTs7QUFDQTtFQUNFO0lBQ0UsWUFBVyxFQUFBLEVBQ1o7O0FBSUgsa0RBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ludmVudG9yeS9pbnZlbnRvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjZmY5ZDJmLCAjZmY2MTI2KTtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKFxuICAwIDAsXG4gIDEwMCUgMCxcbiAgMTAwJSAxMDAlLFxuICAwIGNhbGMoMTAwJSAtIDV2dylcbiAgKTtcblxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9nZWFyMmdlYXIvYmcxLmpwZWcnKTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAvKiBjaGFuZ2UgdGhlIGNhbGMgaGVpZ2h0IHRvIGEgcGVyY2VudGFnZSBoZWlnaHQgdG8gZ2V0IGFsdGVybmF0ZSByZXNwb25zaXZlIGJlaGF2aW9yKi9cbn1cblxuaDEge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwMHB4IDA7XG4gIHBhZGRpbmctbGVmdDo1MHB4O1xuICBwYWRkaW5nLXRvcDogMTUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLy8gaDIge1xuLy8gICBtYXJnaW46IDA7XG4vLyAgIHBhZGRpbmc6IDEwMHB4IDA7XG4vLyAgIHBhZGRpbmctbGVmdDo1MHB4O1xuLy8gICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbi8vICAgZm9udDogMzRweCBcIkFyaWFsXCI7XG4vLyAgIGNvbG9yOiBibGFjaztcbi8vIH1cbmgyIHtcbiAgIGZvbnQtc2l6ZToxOHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbnNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAtNXZ3O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNzc3LCAjMTExKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZiwgI2ZmZik7XG59XG5cbi5jb250ZW50e1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwMHB4IDA7XG4gIHBhZGRpbmctbGVmdDoyJTtcbn1cblxuLnBhZ2UtdGl0bGV7XG4gIGhlaWdodDozNTBweDtcbn1cblxuLnBhZ2UtdGl0bGUtYmd7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2dlYXIyZ2Vhci9iZzEuanBlZycpO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXJcblxufVxuLnBhZ2UtdGl0bGUgaDF7XG4gIGhlaWdodDppbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDoxMCU7XG4gIHBhZGRpbmctYm90dG9tOjEwJTtcbiAgcGFkZGluZy1sZWZ0OjUlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgUHJvXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5maWx0ZXItZGl2e1xuICBib3JkZXItcmFkaXVzOjVweDtcbiAgcGFkZGluZzoxMHB4O1xuICBib3JkZXI6IDFweCBkb3R0ZWQgI2U4ZThlODtcbn1cbi5xY3tcbiAgcGFkZGluZzoyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICM4YWNjMjU7XG59XG4uZmF7XG4gIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xufVxuXG4uZmEtc21hbGx7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOjEwcHg7XG4gIG1hcmdpbi1ib3R0b206MTBweDtcbn1cbi5jb2wtZm9ybS1sYWJlbHtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbn1cbi50aXRsZXtcbiAgLy8gbWFyZ2luLWxlZnQ6MjVweDtcblxufVxuLmluZm97XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi50aXRsZS1jYXJ7XG4gIGNvbG9yOiAjOGFjYzI1ICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOmNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMyMjIgIWltcG9ydGFudDtcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNwe1xuICBjb2xvcjogIzhhY2MyNSAhaW1wb3J0YW50O1xuICAgZm9udC1zaXplOiAxOHB4O1xuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY2FyLWl0ZW17XG4gIG1hcmdpbi1sZWZ0OjVweDtcbiAgYm9yZGVyLXJhZGl1czo1cHg7XG4gIGJvcmRlcjoxcHggZG90dGVkICNlOGU4ZTg7XG4gIG1hcmdpbi1ib3R0b206MjVweDtcbiAgaGVpZ2h0OjM4NXB4O1xufVxuXG4uY2FyLWltYWdle1xuICBwYWRkaW5nOjBweDtcbn1cblxuLmNhci1kZXRhaWxze1xuICBib3JkZXItbGVmdDowcHg7XG59XG5cbi5jYXItZGV0YWlscy1pbm5lcntcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgcGFkZGluZzoxNXB4O1xuICBoZWlnaHQ6aW5oZXJpdDtcbn1cblxuLmNvbXBvbmVudHtcbiAgYmFja2dyb3VuZC1jb2xvcjojZjhmOGY4O1xuICBib3JkZXItcmlnaHQ6NXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItYm90dG9tOjVweCBzb2xpZCB3aGl0ZTtcbiAgcGFkZGluZzowcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmNvbXBvbmVudDpob3ZlcntcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uYWNjZW50e1xuICBjb2xvcjojOGFjYzI1ICFpbXBvcnRhbnQ7XG59XG4uZmlsdGVyLWxhYmVse1xuICBtYXJnaW46MTBweDtcbn1cbi5maWx0ZXItY29udHJvbHtcbiAgbWFyZ2luLXJpZ2h0OjE1cHg7XG59XG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDIuNSk7IC8qIElFICovXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgyLjUpOyAvKiBGRiAqL1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMi41KTsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgyLjUpOyAvKiBPcGVyYSAqL1xuICBtYXJnaW4tbGVmdDoxMHB4O1xuICBtYXJnaW4tdG9wOjEwcHg7XG59XG4ubWF0LXRhYi1sYWJlbCAubWF0LXRhYi1sYWJlbC1jb250ZW50IHtcbn1cblxuLyogRXh0cmEgU21hbGwgZGV2aWNlcyAodGFibGV0cywgNzY4cHggYW5kIHVwKSBjb2wtc20gKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY2FyLWl0ZW17XG4gICAgaGVpZ2h0OmF1dG87XG4gIH1cbn1cbi8qIFNtYWxsIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgY29sLW1kICBjb2xsYXBzZXMgaGVyZSovXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY2FyLWl0ZW17XG4gICAgaGVpZ2h0OmF1dG87XG4gIH1cbn1cblxuLyogTWVkaXVtIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApICBjb2wtbGcgKi9cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAuY2FyLWl0ZW17XG4gICAgaGVpZ2h0OmF1dG87XG4gIH1cblxufVxuXG4vKiBMYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHt9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/inventory/inventory.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/inventory/inventory.component.ts ***!
  \*************************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_services_car_car_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/car/car.service */ "./src/app/services/car/car.service.ts");
/* harmony import */ var app_services_make_make_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/make/make.service */ "./src/app/services/make/make.service.ts");
/* harmony import */ var app_services_model_model_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/model/model.service */ "./src/app/services/model/model.service.ts");
/* harmony import */ var app_services_variant_variant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/variant/variant.service */ "./src/app/services/variant/variant.service.ts");
/* harmony import */ var app_services_vehicle_type_vehicle_type_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/vehicle-type/vehicle-type.service */ "./src/app/services/vehicle-type/vehicle-type.service.ts");
/* harmony import */ var app_services_fuel_type_fuel_type_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/fuel-type/fuel-type.service */ "./src/app/services/fuel-type/fuel-type.service.ts");
/* harmony import */ var app_services_transmission_type_transmission_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/transmission-type/transmission-type.service */ "./src/app/services/transmission-type/transmission-type.service.ts");
/* harmony import */ var app_services_upload_file_upload_file_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/services/upload-file/upload-file.service */ "./src/app/services/upload-file/upload-file.service.ts");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var InventoryComponent = /** @class */ (function () {
    function InventoryComponent(fb, carService, makeService, modelService, variantService, vehicleTypeService, fuelTypeService, transmissionTypeService, uploadFileService) {
        this.fb = fb;
        this.carService = carService;
        this.makeService = makeService;
        this.modelService = modelService;
        this.variantService = variantService;
        this.vehicleTypeService = vehicleTypeService;
        this.fuelTypeService = fuelTypeService;
        this.transmissionTypeService = transmissionTypeService;
        this.uploadFileService = uploadFileService;
        this.title = "CARS";
    }
    InventoryComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.getAvailableCars();
        this.getMakes();
        this.getModels();
        this.getVariants();
        this.getVehicleTypes();
        this.getFuelTypes();
        this.getTransmissionTypes();
    };
    InventoryComponent.prototype.createForm = function () {
        this.filterForm = this.fb.group({
            make: [],
            model: [],
            variant: [],
            vehicle_type: [],
            fuel_type: [],
            transmission_type: [],
            interior_color: [],
            exterior_color: [],
            is_sold: [false],
        });
    };
    InventoryComponent.prototype.getMakes = function () {
        this.makes$ = this.makeService.getMakes();
    };
    InventoryComponent.prototype.getModels = function () {
        this.models$ = this.modelService.getModels();
    };
    InventoryComponent.prototype.getVariants = function () {
        this.variants$ = this.variantService.getVariants();
    };
    InventoryComponent.prototype.getVehicleTypes = function () {
        this.vehicleTypes$ = this.vehicleTypeService.getVehicleTypes();
    };
    InventoryComponent.prototype.getFuelTypes = function () {
        this.fuelTypes$ = this.fuelTypeService.getFuelTypes();
    };
    InventoryComponent.prototype.getTransmissionTypes = function () {
        this.transmissionTypes$ = this.transmissionTypeService.getTransmissionTypes();
    };
    InventoryComponent.prototype.toArray = function (answers) {
        return Object.keys(answers).map(function (key) { return answers[key]; });
    };
    InventoryComponent.prototype.getAvailableCars = function () {
        var baseURL = "https://s3.amazonaws.com/gear2gear/";
        this.cars$ = this.carService.getAvailableCars(this.filterForm.value);
    };
    InventoryComponent.prototype.getFilteredCars = function () {
        this.getAvailableCars();
    };
    InventoryComponent.prototype.clear = function () {
        this.filterForm.reset();
    };
    InventoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inventory',
            template: __webpack_require__(/*! ./inventory.component.html */ "./src/app/components/inventory/inventory.component.html"),
            styles: [__webpack_require__(/*! ./inventory.component.scss */ "./src/app/components/inventory/inventory.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            app_services_car_car_service__WEBPACK_IMPORTED_MODULE_2__["CarService"],
            app_services_make_make_service__WEBPACK_IMPORTED_MODULE_3__["MakeService"],
            app_services_model_model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"],
            app_services_variant_variant_service__WEBPACK_IMPORTED_MODULE_5__["VariantService"],
            app_services_vehicle_type_vehicle_type_service__WEBPACK_IMPORTED_MODULE_6__["VehicleTypeService"],
            app_services_fuel_type_fuel_type_service__WEBPACK_IMPORTED_MODULE_7__["FuelTypeService"],
            app_services_transmission_type_transmission_type_service__WEBPACK_IMPORTED_MODULE_8__["TransmissionTypeService"],
            app_services_upload_file_upload_file_service__WEBPACK_IMPORTED_MODULE_9__["UploadFileService"]])
    ], InventoryComponent);
    return InventoryComponent;
}());



/***/ }),

/***/ "./src/app/components/inventory/inventory.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/inventory/inventory.module.ts ***!
  \**********************************************************/
/*! exports provided: InventoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryModule", function() { return InventoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _inventory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventory.component */ "./src/app/components/inventory/inventory.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InventoryModule = /** @class */ (function () {
    function InventoryModule() {
    }
    InventoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            ],
            declarations: [
                _inventory_component__WEBPACK_IMPORTED_MODULE_3__["InventoryComponent"],
            ],
        })
    ], InventoryModule);
    return InventoryModule;
}());



/***/ }),

/***/ "./src/app/components/investors-corner/investors-corner-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/investors-corner/investors-corner-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: InvestorsCornerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestorsCornerRoutingModule", function() { return InvestorsCornerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _investors_corner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./investors-corner.component */ "./src/app/components/investors-corner/investors-corner.component.ts");
/* harmony import */ var app_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var investorsCornerRoutes = [
    {
        path: 'investors-corner',
        component: _investors_corner_component__WEBPACK_IMPORTED_MODULE_2__["InvestorsCornerComponent"],
        canActivate: [app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    }
];
var InvestorsCornerRoutingModule = /** @class */ (function () {
    function InvestorsCornerRoutingModule() {
    }
    InvestorsCornerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(investorsCornerRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], InvestorsCornerRoutingModule);
    return InvestorsCornerRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/investors-corner/investors-corner.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/investors-corner/investors-corner.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <mat-tab-group class=\"col-12\">\n    <mat-tab  label=\"Car Details\">\n      <form>\n        <div *ngIf=\"(cars$ | async)?.length==0\" class=\"alert alert-danger text-center col-12\">\n          <strong>Error!</strong>&nbsp;<span>No records found</span>\n        </div>\n        <table class=\"table\">\n          <thead class=\"#f5f5f5 grey lighten-4\">\n            <tr>\n              <th class=\"text-center\">Car Details</th>\n              <th class=\"text-center\">Investment</th>\n              <th class=\"text-center\">Expenses</th>\n              <th class=\"text-center\">Profit and Loss</th>\n            </tr>\n          </thead>\n          <tbody>\n\n            <tr *ngFor=\"let car of cars;let i=index\">\n              <td style=\"color:#8acc25\">\n                <span>{{car.make_name}} {{car.model_name}} {{car.variant_name}} {{car.make_year}}</span><br>\n                <span>{{car.vehicle_type_name}}</span><br>\n                <span>{{car.fuel_type_name}}</span><br>\n                <span>{{car.transmission_type_name}}</span><br>\n                <span>{{car.mileage}}</span><span>Kms</span><br>\n                <span>{{car.license_plate}}</span><br>\n                <span>PP Rs. {{car.cost_price | currency:' '}}</span><br>\n                <span>CP Rs. {{car.total_cost | currency:' '}}</span><br>\n                <span>SP Rs. {{car.selling_price | currency:' '}}</span><br>\n                <span>Profit Rs. {{car.selling_price - car.total_cost | currency:' '}}</span><br>\n                <span>Purchased On: {{car.purchased_on |date}}</span><br>\n                <span>Purchased From: {{car.purchased_from_name}}</span><br>\n                <span>Sold On: {{car.sold_on |date }}</span><br>\n                <span>Sold To: {{car.sold_to_name}}</span><br>\n                <span>Aging Days: {{car.aging_days}}</span><br>\n              </td>\n              <td>\n                <table class=\"table table-investors\">\n                  <thead class=\"#f5f5f5 grey lighten-4\">\n                    <tr>\n                      <th>Date</th>\n                      <th>Investor</th>\n                      <th>Type</th>\n                      <th class=\"text-right\">Amount</th>\n                    </tr>\n                  </thead>\n                  <tbody *ngFor=\"let td of transactionDetails\">\n                    <tr  *ngIf=\"(td.transaction_type_id == 1 ||td.transaction_type_id == 3) && td.date <=car.purchased_on && td.is_void != true\" >\n                      <td>{{td.date | date}}</td>\n                      <td>{{td.investor_name}}</td>\n                      <td>{{td.transaction_type_name}}</td>\n                      <td class=\"text-right\">{{td.credit| currency:' '}}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </td>\n              <td>\n                <table class=\"table table-investors\">\n                  <thead class=\"#f5f5f5 grey lighten-4\">\n                    <tr>\n                      <th>Date</th>\n                      <th>Expense</th>\n                      <th class=\"text-right\">Amount</th>\n                    </tr>\n                  </thead>\n                  <tbody *ngFor=\"let td of transactionDetails\">\n                    <tr  *ngIf=\"td.transaction_type_id == 2 && car.car_id == td.car_id && td.is_void != true\"  >\n                      <td>{{td.date | date}}</td>\n                      <td>{{td.expense_name}}</td>\n                      <td class=\"text-right\">{{td.debit| currency:' '}}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </td>\n              <td>\n                <table class=\"table table-investors\">\n                  <thead class=\"#f5f5f5 grey lighten-4\">\n                    <tr>\n                      <th>Date</th>\n                      <th>Investor</th>\n                      <th class=\"text-right\">Percentage</th>\n                      <th class=\"text-right\">Profit</th>\n                      <th class=\"text-right\">Loss</th>\n                    </tr>\n                  </thead>\n                  <tbody *ngFor=\"let td of transactionDetails\">\n                    <tr *ngIf=\"(td.transaction_type_id == 3 || td.transaction_type_id == 4) && car.car_id == td.car_id && td.is_void != true\"  >\n                      <td>{{td.date | date}}</td>\n                      <td>{{td.investor_name}}</td>\n                      <td class=\"text-right\" *ngIf=\"td.percentage != null\">{{td.percentage| number : '1.2-2'}}%</td>\n                      <td *ngIf=\"td.percentage == null\"></td>\n                      <td class=\"text-right\">{{td.credit | currency:' '}}</td>\n                      <td class=\"text-right\">{{td.debit| currency:' '}}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </td>\n            </tr>\n\n          </tbody>\n        </table>\n      </form>\n    </mat-tab>\n    <mat-tab  label=\"G2G Pool Balance\">\n      <div class=\"row text-center\" style=\"margin-top:25px\">\n        <h5 class=\"bold col-lg-2\">Credits</h5><h5 class=\"green-text bold col-lg-2\"> ₹{{total_credits}}</h5>\n        <h5 class=\"bold col-lg-2\">Available Pool Balance</h5><h5 class=\"green-text bold col-lg-2\"> ₹{{available_balance}}</h5>\n        <h5 class=\"bold col-lg-2\">Debits</h5><h5 class=\"red-text bold col-lg-2\"> ₹{{total_debits}}</h5>\n      </div>\n      <div class=\"table-td\">\n        <table class=\"table\">\n          <thead class=\"#f5f5f5 grey lighten-4\">\n            <tr>\n              <th>Date</th>\n              <th>Transaction</th>\n              <th>Investor</th>\n              <th>Car</th>\n              <th>Expense</th>\n              <th>Description</th>\n              <th class=\"text-right\">Credit</th>\n              <th class=\"text-right\">Debit</th>\n            </tr>\n          </thead>\n          <tbody *ngFor=\"let item of transactionDetails; let i = index;\">\n            <tr *ngIf=\"item.is_void != true\">\n              <td>{{item.date | date}}</td>\n              <td>{{item.transaction_type_name}}</td>\n              <td>{{item.investor_name}}</td>\n              <td><span>{{item.make_name}}</span>&nbsp;<span>{{item.model_name}}</span>&nbsp;<span>{{item.variant_name}}</span>&nbsp;<span>{{item.make_year}}</span></td>\n              <td>{{item.expense_name}}</td>\n              <td>{{item.description}}</td>\n              <td class=\"text-right\">{{item.credit | currency:' '}}</td>\n              <td class=\"text-right\">{{item.debit | currency:' '}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</section>\n"

/***/ }),

/***/ "./src/app/components/investors-corner/investors-corner.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/investors-corner/investors-corner.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-investors {\n  display: block;\n  height: 300px;\n  overflow: scroll; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb3VqYW55YS9Eb2N1bWVudHMvQ2xvbmVkLVJlcG8vZ2VhcjJnZWFyL3NyYy9hcHAvY29tcG9uZW50cy9pbnZlc3RvcnMtY29ybmVyL2ludmVzdG9ycy1jb3JuZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxjQUFjO0VBQ2QsYUFBWTtFQUNaLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnZlc3RvcnMtY29ybmVyL2ludmVzdG9ycy1jb3JuZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50YWJsZS1pbnZlc3RvcnN7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6MzAwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/investors-corner/investors-corner.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/investors-corner/investors-corner.component.ts ***!
  \***************************************************************************/
/*! exports provided: InvestorsCornerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestorsCornerComponent", function() { return InvestorsCornerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_services_client_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/client/client.service */ "./src/app/services/client/client.service.ts");
/* harmony import */ var app_services_car_car_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/car/car.service */ "./src/app/services/car/car.service.ts");
/* harmony import */ var app_services_transaction_details_transaction_details_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/transaction-details/transaction-details.service */ "./src/app/services/transaction-details/transaction-details.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InvestorsCornerComponent = /** @class */ (function () {
    function InvestorsCornerComponent(fb, carService, transactionDetailsService, clientService) {
        this.fb = fb;
        this.carService = carService;
        this.transactionDetailsService = transactionDetailsService;
        this.clientService = clientService;
        this.cars = [];
        this.investors = [];
        this.expenses = [];
        this.transactionDetails = [];
        this.investorsDetails = new Array();
        this.total_expenses = "0";
    }
    InvestorsCornerComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.getTransactionDetails();
        this.getCars();
        this.getAvailablePoolBalanceAsOfPurchaseDate();
    };
    InvestorsCornerComponent.prototype.createForm = function () {
        this.transactionDetailsForm = this.fb.group({
            car_records: this.fb.array([
                this.fb.group({
                    car_id: [],
                    investor_records: this.fb.array([
                        this.fb.group({
                            investor_id: [],
                        }),
                    ]),
                }),
            ]),
        });
    };
    InvestorsCornerComponent.prototype.getCars = function () {
        var _this = this;
        this.cars$ = this.carService.getCars();
        this.cars$.subscribe(function (res) {
            _this.cars = res;
        }, function (err) {
        });
    };
    InvestorsCornerComponent.prototype.getTransactionDetails = function () {
        var _this = this;
        this.transactionDetailsService.getTransactionDetails().subscribe(function (res) {
            // this.transactionDetails = res.filter(elem => elem.is_void !== true);
            _this.transactionDetails = res;
            _this.cars$.subscribe(function (res1) {
                for (var i = 0; i < res1.length; i++) {
                    _this.total_expenses = "0";
                    for (var j = 0; j < res.length; j++) {
                        if (res[j].is_void != true) {
                            if (res[j].car_id != null) {
                                if (res1[i].car_id == res[j].car_id && res[j].transaction_type_id == 2) {
                                    _this.total_expenses = (parseFloat(_this.total_expenses) + parseFloat(res[j].debit)).toString();
                                    _this.cars[i].total_cost = parseFloat(res1[i].cost_price) + parseFloat(_this.total_expenses);
                                }
                                if (_this.total_expenses == "0") {
                                    _this.cars[i].total_cost = parseFloat(res1[i].cost_price);
                                }
                            }
                        }
                    }
                }
            }, function (err) {
            });
            // for(var i=0;i<res.length;i++){
            //   if(res[i].transaction_type_id == 2){//Expenses
            //     this.total_expenses = this.total_expenses + parseInt(res[i].debit);
            //     console.log(this.total_expenses);
            //   }
            // }
            //  this.getCars();
        }, function (err) {
        });
    };
    InvestorsCornerComponent.prototype.formatCurrency = function (val) {
        var isValid = /^[0-9,.]*$/.test(val);
        if (isValid == true) {
            var x = val.toString().replace(/,/g, "");
            var afterPoint = '';
            if (x.indexOf('.') > 0)
                afterPoint = x.substring(x.indexOf('.'), x.length);
            x = Math.floor(x);
            x = x.toString();
            var lastThree = x.substring(x.length - 3);
            var otherNumbers = x.substring(0, x.length - 3);
            if (otherNumbers != '')
                lastThree = ',' + lastThree;
            var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
            return res;
        }
        else {
            return "";
        }
    };
    InvestorsCornerComponent.prototype.getAvailablePoolBalanceAsOfPurchaseDate = function () {
        var _this = this;
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        var formattedDate = yyyy + "-" + mm + "-" + dd;
        this.transactionDetailsService.getAvailablePoolBalanceAsOfPurchaseDate(formattedDate)
            .subscribe(function (res) {
            _this.available_balance = _this.formatCurrency(res[0].available_balance);
            _this.total_credits = _this.formatCurrency(res[0].total_credits);
            _this.total_debits = _this.formatCurrency(res[0].total_debits);
        }, function (err) {
            console.log("Get Available Pool Balance ", err);
        }, function () {
        });
    };
    InvestorsCornerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-investors-corner',
            template: __webpack_require__(/*! ./investors-corner.component.html */ "./src/app/components/investors-corner/investors-corner.component.html"),
            styles: [__webpack_require__(/*! ./investors-corner.component.scss */ "./src/app/components/investors-corner/investors-corner.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            app_services_car_car_service__WEBPACK_IMPORTED_MODULE_3__["CarService"],
            app_services_transaction_details_transaction_details_service__WEBPACK_IMPORTED_MODULE_4__["TransactionDetailsService"],
            app_services_client_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"]])
    ], InvestorsCornerComponent);
    return InvestorsCornerComponent;
}());



/***/ }),

/***/ "./src/app/components/investors-corner/investors-corner.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/investors-corner/investors-corner.module.ts ***!
  \************************************************************************/
/*! exports provided: InvestorsCornerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestorsCornerModule", function() { return InvestorsCornerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _investors_corner_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./investors-corner-routing.module */ "./src/app/components/investors-corner/investors-corner-routing.module.ts");
/* harmony import */ var _investors_corner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./investors-corner.component */ "./src/app/components/investors-corner/investors-corner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var InvestorsCornerModule = /** @class */ (function () {
    function InvestorsCornerModule() {
    }
    InvestorsCornerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _investors_corner_routing_module__WEBPACK_IMPORTED_MODULE_3__["InvestorsCornerRoutingModule"]
            ],
            declarations: [
                _investors_corner_component__WEBPACK_IMPORTED_MODULE_4__["InvestorsCornerComponent"]
            ],
        })
    ], InvestorsCornerModule);
    return InvestorsCornerModule;
}());



/***/ }),

/***/ "./src/app/components/loader/loader.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/loader/loader.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class.hidden]=\"!show\">\n  <div class=\"loader-overlay\">\n    <div *ngIf=\"show\" class=\"loader\"></div>\n  </div>\n</div>\n\n\n<!-- <div [class.hidden]=\"!show\">\n<div *ngIf=\"show\" class=\"load-bar\">\n  <div class=\"bar\"></div>\n  <div class=\"bar\"></div>\n  <div class=\"bar\"></div>\n</div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/components/loader/loader.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/loader/loader.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hidden {\n  visibility: hidden; }\n\n.loader-overlay {\n  position: absolute;\n  width: 100%;\n  z-index: 500000;\n  top: 20%; }\n\n.loader {\n  height: 50px;\n  position: relative;\n  overflow: hidden;\n  background-color: greenyellow; }\n\n.loader:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: red;\n  -webkit-animation: loading 2s linear infinite;\n          animation: loading 2s linear infinite; }\n\n@-webkit-keyframes loading {\n  from {\n    left: -200px;\n    width: 30%; }\n  50% {\n    width: 30%; }\n  70% {\n    width: 70%; }\n  80% {\n    left: 50%; }\n  95% {\n    left: 120%; }\n  to {\n    left: 100%; } }\n\n@keyframes loading {\n  from {\n    left: -200px;\n    width: 30%; }\n  50% {\n    width: 30%; }\n  70% {\n    width: 70%; }\n  80% {\n    left: 50%; }\n  95% {\n    left: 120%; }\n  to {\n    left: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb3VqYW55YS9Eb2N1bWVudHMvQ2xvbmVkLVJlcG8vZ2VhcjJnZWFyL3NyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsUUFBUSxFQUFBOztBQUVWO0VBQ0UsWUFBWTtFQUVaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNkJBQTZCLEVBQUE7O0FBRS9CO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLDZDQUFxQztVQUFyQyxxQ0FBcUMsRUFBQTs7QUFFdkM7RUFDRTtJQUFNLFlBQVk7SUFBRSxVQUFVLEVBQUE7RUFDOUI7SUFBSyxVQUFVLEVBQUE7RUFDZjtJQUFLLFVBQVUsRUFBQTtFQUNmO0lBQUssU0FBUyxFQUFBO0VBQ2Q7SUFBSyxVQUFVLEVBQUE7RUFDZjtJQUFJLFVBQVUsRUFBQSxFQUFBOztBQU5oQjtFQUNFO0lBQU0sWUFBWTtJQUFFLFVBQVUsRUFBQTtFQUM5QjtJQUFLLFVBQVUsRUFBQTtFQUNmO0lBQUssVUFBVSxFQUFBO0VBQ2Y7SUFBSyxTQUFTLEVBQUE7RUFDZDtJQUFLLFVBQVUsRUFBQTtFQUNmO0lBQUksVUFBVSxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmxvYWRlci1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogNTAwMDAwO1xuICB0b3A6IDIwJTtcbn1cbi5sb2FkZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIC8vIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xufVxuLmxvYWRlcjpiZWZvcmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBsZWZ0OiAtMjAwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nIDJzIGxpbmVhciBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgbG9hZGluZyB7XG4gIGZyb20ge2xlZnQ6IC0yMDBweDsgd2lkdGg6IDMwJTt9XG4gIDUwJSB7d2lkdGg6IDMwJTt9XG4gIDcwJSB7d2lkdGg6IDcwJTt9XG4gIDgwJSB7bGVmdDogNTAlO31cbiAgOTUlIHtsZWZ0OiAxMjAlO31cbiAgdG8ge2xlZnQ6IDEwMCU7fVxufVxuXG4vL1xuLy9cbi8vIC5sb2FkLWJhciB7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgbWFyZ2luLXRvcDogMjBweDtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIGhlaWdodDogNnB4O1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiYTJjO1xuLy8gfVxuLy8gLmJhciB7XG4vLyAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgIGRpc3BsYXk6IGlubGluZTtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICB3aWR0aDogMDtcbi8vICAgaGVpZ2h0OiAxMDAlO1xuLy8gICBsZWZ0OiA1MCU7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vIH1cbi8vIC5iYXI6bnRoLWNoaWxkKDEpIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2RhNDczMztcbi8vICAgYW5pbWF0aW9uOiBsb2FkaW5nIDNzIGxpbmVhciBpbmZpbml0ZTtcbi8vIH1cbi8vIC5iYXI6bnRoLWNoaWxkKDIpIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNzhlNztcbi8vICAgYW5pbWF0aW9uOiBsb2FkaW5nIDNzIGxpbmVhciAxcyBpbmZpbml0ZTtcbi8vIH1cbi8vIC5iYXI6bnRoLWNoaWxkKDMpIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYmEyYztcbi8vICAgYW5pbWF0aW9uOiBsb2FkaW5nIDNzIGxpbmVhciAycyBpbmZpbml0ZTtcbi8vIH1cbi8vIEBrZXlmcmFtZXMgbG9hZGluZyB7XG4vLyAgICAgZnJvbSB7bGVmdDogNTAlOyB3aWR0aDogMDt6LWluZGV4OjEwMDt9XG4vLyAgICAgMzMuMzMzMyUge2xlZnQ6IDA7IHdpZHRoOiAxMDAlO3otaW5kZXg6IDEwO31cbi8vICAgICB0byB7bGVmdDogMDsgd2lkdGg6IDEwMCU7fVxuLy8gfVxuIl19 */"

/***/ }),

/***/ "./src/app/components/loader/loader.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/loader.service */ "./src/app/services/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
        this.show = false;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.loaderService.loaderState
            .subscribe(function (state) {
            _this.show = state.show;
        });
    };
    LoaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/components/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/components/loader/loader.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/components/make/make-form/make-form.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/make/make-form/make-form.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid section\">\n  <div *ngIf=\"message\" class=\"alert alert-success text-center col-12\">\n    <strong>Success!</strong>&nbsp;<span>{{message}}</span>\n  </div>\n  <div *ngIf=\"message_error\" class=\"alert alert-danger text-center col-12\">\n    <strong>Error!</strong>&nbsp;<span>{{message_error}}</span>\n  </div>\n\n  <div class=\"col-12 #f5f5f5 grey lighten-4\">\n    <header class=\"header row\">\n      <div class=\"col-12\">\n        <app-title [title]=title></app-title>\n      </div>\n    </header>\n\n    <div class=\"col-12\">\n      <form [formGroup]=\"makeForm\" (ngSubmit)=\"onSubmit()\" >\n        <div class=\"form-group\">\n          <label for=\"inputMakeName\" class=\"col-sm-2 col-form-label\">Name</label>\n          <div>\n            <div class=\"md-form mt-0\">\n              <input type=\"text\" class=\"form-control capitalize\" id=\"inputMakeName\" formControlName=\"name\">\n              <!-- <p style=\"color:red\" *ngIf=\"makeForm.controls.name.touched && makeForm.controls.name.errors.required\">Required</p> -->\n              <app-control-messages [control]=\"makeForm.controls.name\"></app-control-messages>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"text-right\">\n            <!--  [disabled]=\"makeForm.invalid\"-->\n            <button type=\"submit\" class=\"btn btn-primary btn-custom btn-md\" >\n              <i class=\"fa fa-save\"></i>\n            </button>\n            <app-simple-modal [module]=\"module\" [mode]=\"mode\" [name]=\"makeForm.controls.name.value\" (isDelete)=\"deleteMake($event)\"></app-simple-modal>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/make/make-form/make-form.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/make/make-form/make-form.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFrZS9tYWtlLWZvcm0vbWFrZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/make/make-form/make-form.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/make/make-form/make-form.component.ts ***!
  \******************************************************************/
/*! exports provided: MakeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeFormComponent", function() { return MakeFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_make_make_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/make/make.service */ "./src/app/services/make/make.service.ts");
/* harmony import */ var rxjs_add_operator_takeUntil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/takeUntil */ "./node_modules/rxjs-compat/_esm5/add/operator/takeUntil.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MakeFormComponent = /** @class */ (function () {
    function MakeFormComponent(fb, makeService, router, route) {
        var _this = this;
        this.fb = fb;
        this.makeService = makeService;
        this.router = router;
        this.route = route;
        this.title = "Create Make";
        this.module = "make";
        this.mode = "discard";
        this.message = "";
        this.message_error = "";
        this.submitted = false;
        this.makeService.selectedMakeId.next(0);
        this.sub = this.makeService.selectedMakeId
            .subscribe(function (res) {
            _this.selectedMake_Id = res;
            if (_this.makeService.selectedMode == "Edit") {
                _this.title = "Edit Make";
                _this.mode = "delete";
                _this.getMakeById(res);
            }
        }, function (err) {
        });
    }
    MakeFormComponent.prototype.createForm = function () {
        this.makeForm = this.fb.group({
            make_id: [''],
            // name: ['', [Validators.required,Validators.maxLength(50)]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    };
    MakeFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.makeForm.valid) {
            if (this.makeService.selectedMode == 'Create') {
                this.createMake();
            }
            else if (this.makeService.selectedMode == 'Edit') {
                this.updateMake();
            }
        }
    };
    MakeFormComponent.prototype.getMakeById = function (make_id) {
        var _this = this;
        this.makeService.getMakeById(make_id)
            .subscribe(function (res) {
            _this.makeForm.patchValue(res[0]);
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    MakeFormComponent.prototype.createMake = function () {
        var _this = this;
        this.makeService.createMake(this.makeForm.value)
            .subscribe(function (res) {
            window.scrollTo(0, 0);
            _this.message = _this.makeForm.get('name').value + " created successfully.";
            setTimeout(function () {
                _this.message = "";
            }, 5000);
            _this.makeService.refreshList.next(true);
            _this.makeForm.reset();
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    MakeFormComponent.prototype.updateMake = function () {
        var _this = this;
        this.makeService.updateMake(this.makeForm.value)
            .subscribe(function (res) {
            window.scrollTo(0, 0);
            _this.message = _this.makeForm.get('name').value + " updated successfully.";
            setTimeout(function () {
                _this.message = "";
            }, 5000);
            _this.makeService.refreshList.next(true);
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    MakeFormComponent.prototype.deleteMake = function (event) {
        var _this = this;
        if (this.selectedMake_Id) {
            this.makeService.deleteMake(this.selectedMake_Id).subscribe(function (res) {
                window.scrollTo(0, 0);
                _this.message = _this.makeForm.get('name').value + " deleted successfully.";
                setTimeout(function () {
                    _this.message = "";
                }, 5000);
                _this.makeService.refreshList.next(true);
                _this.router.navigate(['/make/add']);
            }, function (err) {
                window.scrollTo(0, 0);
                _this.message_error = err;
                setTimeout(function () {
                    _this.message_error = "";
                }, 5000);
                console.log(err);
            });
        }
        else {
            this.makeForm.reset();
        }
    };
    MakeFormComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    MakeFormComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MakeFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-make-form',
            template: __webpack_require__(/*! ./make-form.component.html */ "./src/app/components/make/make-form/make-form.component.html"),
            styles: [__webpack_require__(/*! ./make-form.component.scss */ "./src/app/components/make/make-form/make-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], app_services_make_make_service__WEBPACK_IMPORTED_MODULE_3__["MakeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MakeFormComponent);
    return MakeFormComponent;
}());



/***/ }),

/***/ "./src/app/components/make/make-list/make-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/make/make-list/make-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid section-list\">\n  <div>\n    <app-search (searchTermValueChanged)=\"searchMakes($event)\" (isCreate)=\"createMake('Create')\"></app-search>\n  </div>\n  <div>\n    <div *ngIf=\"(results$ | async)?.length==0\" class=\"alert alert-danger text-center col-12\">\n      <strong>Error!</strong>&nbsp;<span>No records found</span>\n    </div>\n    <table class=\"table\">\n      <thead class=\"#f5f5f5 grey lighten-4\">\n        <tr>\n          <th>Name</th>\n          <th>Edit</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor='let make of results$ | async' [ngClass]=\"{'is-active': selectedMakeId == make.make_id}\">\n          <td class=\"capitalize\">{{make.name}}</td>\n          <td class=\"pointer\" (click)=\"selectMake(make.make_id, 'Edit')\">\n              <i class=\"fa fa-pencil\"></i>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/make/make-list/make-list.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/make/make-list/make-list.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFrZS9tYWtlLWxpc3QvbWFrZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/make/make-list/make-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/make/make-list/make-list.component.ts ***!
  \******************************************************************/
/*! exports provided: MakeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeListComponent", function() { return MakeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_make_make_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/make/make.service */ "./src/app/services/make/make.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MakeListComponent = /** @class */ (function () {
    function MakeListComponent(makeService, router, route) {
        var _this = this;
        this.makeService = makeService;
        this.router = router;
        this.route = route;
        this.searchTerm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sub = this.makeService.selectedMakeId
            .subscribe(function (res) {
            _this.selectedMakeId = res;
        });
    }
    MakeListComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/make/add']);
    };
    MakeListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MakeListComponent.prototype.searchMakes = function (search) {
        this.searchTerm.emit(search);
    };
    //On Click of the Add Button
    MakeListComponent.prototype.createMake = function (mode) {
        this.selectedMakeId = 0;
        this.makeService.selectedMode = mode;
        this.router.navigate(['/make/add']);
    };
    //On Click of the Edit Button
    MakeListComponent.prototype.selectMake = function (make_id, mode) {
        var _this = this;
        this.selectedMakeId = make_id;
        this.makeService.selectedMode = mode;
        this.router.navigate(['/make/edit']);
        setTimeout(function () {
            _this.makeService.selectedMakeId.next(make_id);
        }, 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], MakeListComponent.prototype, "results$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MakeListComponent.prototype, "searchTerm", void 0);
    MakeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-make-list',
            template: __webpack_require__(/*! ./make-list.component.html */ "./src/app/components/make/make-list/make-list.component.html"),
            styles: [__webpack_require__(/*! ./make-list.component.scss */ "./src/app/components/make/make-list/make-list.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_make_make_service__WEBPACK_IMPORTED_MODULE_3__["MakeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MakeListComponent);
    return MakeListComponent;
}());



/***/ }),

/***/ "./src/app/components/make/make-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/make/make-routing.module.ts ***!
  \********************************************************/
/*! exports provided: MakeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeRoutingModule", function() { return MakeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _make_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./make.component */ "./src/app/components/make/make.component.ts");
/* harmony import */ var _make_list_make_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./make-list/make-list.component */ "./src/app/components/make/make-list/make-list.component.ts");
/* harmony import */ var _make_form_make_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./make-form/make-form.component */ "./src/app/components/make/make-form/make-form.component.ts");
/* harmony import */ var app_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var makeRoutes = [
    {
        path: 'make',
        canActivate: [app_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _make_component__WEBPACK_IMPORTED_MODULE_2__["MakeComponent"],
        children: [
            { path: 'list', component: _make_list_make_list_component__WEBPACK_IMPORTED_MODULE_3__["MakeListComponent"] },
            { path: 'add', component: _make_form_make_form_component__WEBPACK_IMPORTED_MODULE_4__["MakeFormComponent"] },
            { path: 'edit', component: _make_form_make_form_component__WEBPACK_IMPORTED_MODULE_4__["MakeFormComponent"] }
        ]
    }
];
var MakeRoutingModule = /** @class */ (function () {
    function MakeRoutingModule() {
    }
    MakeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(makeRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MakeRoutingModule);
    return MakeRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/make/make.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/make/make.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"col-12\">\n    <app-title [title]=title></app-title>\n  </div>\n</header>\n\n<div class=\"row\">\n  <div class=\"col-lg-4\">\n  <app-make-list (searchTerm)=\"searchMakes($event)\" [results$]=\"makes$\"></app-make-list>\n  </div>\n  <div class=\"col-lg-8\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/make/make.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/make/make.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFrZS9tYWtlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/make/make.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/make/make.component.ts ***!
  \***************************************************/
/*! exports provided: MakeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeComponent", function() { return MakeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_make_make_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/make/make.service */ "./src/app/services/make/make.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MakeComponent = /** @class */ (function () {
    function MakeComponent(fb, makeService, router, route) {
        this.fb = fb;
        this.makeService = makeService;
        this.router = router;
        this.route = route;
        this.title = "Make";
    }
    MakeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.makeService.selectedMakeId.next(0);
        this.getMakes();
        this.makeService.refreshList.subscribe(function (res) {
            _this.getMakes();
        }, function (err) {
            console.log(err);
        });
    };
    MakeComponent.prototype.getMakes = function () {
        this.makes$ = this.makeService.getMakes();
    };
    MakeComponent.prototype.searchMakes = function (searchTerm) {
        if (searchTerm) {
            this.makes$ = this.makeService.searchMakes(searchTerm);
        }
        else {
            this.getMakes();
            //this.makes$ = new EmptyObservable();
        }
    };
    MakeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-make',
            template: __webpack_require__(/*! ./make.component.html */ "./src/app/components/make/make.component.html"),
            styles: [__webpack_require__(/*! ./make.component.scss */ "./src/app/components/make/make.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], app_services_make_make_service__WEBPACK_IMPORTED_MODULE_3__["MakeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MakeComponent);
    return MakeComponent;
}());



/***/ }),

/***/ "./src/app/components/make/make.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/make/make.module.ts ***!
  \************************************************/
/*! exports provided: MakeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeModule", function() { return MakeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _make_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./make-routing.module */ "./src/app/components/make/make-routing.module.ts");
/* harmony import */ var _make_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./make.component */ "./src/app/components/make/make.component.ts");
/* harmony import */ var _make_list_make_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./make-list/make-list.component */ "./src/app/components/make/make-list/make-list.component.ts");
/* harmony import */ var _make_form_make_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./make-form/make-form.component */ "./src/app/components/make/make-form/make-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MakeModule = /** @class */ (function () {
    function MakeModule() {
    }
    MakeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _make_routing_module__WEBPACK_IMPORTED_MODULE_3__["MakeRoutingModule"],
            ],
            declarations: [
                _make_component__WEBPACK_IMPORTED_MODULE_4__["MakeComponent"],
                _make_list_make_list_component__WEBPACK_IMPORTED_MODULE_5__["MakeListComponent"],
                _make_form_make_form_component__WEBPACK_IMPORTED_MODULE_6__["MakeFormComponent"],
            ],
        })
    ], MakeModule);
    return MakeModule;
}());



/***/ }),

/***/ "./src/app/components/model/model-form/model-form.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/model/model-form/model-form.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid section\">\n  <div *ngIf=\"message\" class=\"alert alert-success text-center col-12\">\n    <strong>Success!</strong>&nbsp;<span>{{message}}</span>\n  </div>\n  <div *ngIf=\"message_error\" class=\"alert alert-danger text-center col-12\">\n    <strong>Error!</strong>&nbsp;<span>{{message_error}}</span>\n  </div>\n  <div class=\"col-12 grey lighten-4\">\n    <header class=\"header row\">\n      <div class=\"col-12\">\n        <app-title [title]=title></app-title>\n      </div>\n    </header>\n\n    <div class=\"col-12\">\n      <form [formGroup]=\"modelForm\" (ngSubmit)=\"onSubmit()\" >\n        <div class=\"form-group\">\n          <label for=\"inputModelName\" class=\"col-sm-2 col-form-label\">Name</label>\n          <div>\n            <div class=\"md-form mt-0\">\n              <input type=\"text\" class=\"form-control capitalize\" id=\"inputModelName\" formControlName=\"name\">\n              <!-- <p style=\"color:red\" *ngIf=\"modelForm.controls.name.touched && modelForm.controls.name.errors.required\">Required</p> -->\n              <app-control-messages [control]=\"modelForm.controls.name\"></app-control-messages>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"text-right\">\n            <!--  [disabled]=\"modelForm.invalid\"-->\n            <button type=\"submit\" class=\"btn btn-primary btn-custom btn-md\" >\n              <i class=\"fa fa-save\"></i>\n            </button>\n            <app-simple-modal [module]=\"module\" [mode]=\"mode\" [name]=\"modelForm.controls.name.value\" (isDelete)=\"deleteModel($event)\"></app-simple-modal>\n\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/model/model-form/model-form.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/model/model-form/model-form.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kZWwvbW9kZWwtZm9ybS9tb2RlbC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/model/model-form/model-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/model/model-form/model-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: ModelFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelFormComponent", function() { return ModelFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_model_model_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/model/model.service */ "./src/app/services/model/model.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModelFormComponent = /** @class */ (function () {
    function ModelFormComponent(fb, modelService, router, route) {
        var _this = this;
        this.fb = fb;
        this.modelService = modelService;
        this.router = router;
        this.route = route;
        this.title = "Create Model";
        this.module = "model";
        this.mode = "discard";
        this.message = "";
        this.message_error = "";
        this.submitted = false;
        this.modelService.selectedModelId.next(0);
        this.sub = this.modelService.selectedModelId
            .subscribe(function (res) {
            _this.selectedModel_Id = res;
            if (_this.modelService.selectedMode == "Edit") {
                _this.title = "Edit Model";
                _this.mode = "delete";
                _this.getModelById(res);
            }
        }, function (err) {
        });
    }
    ModelFormComponent.prototype.createForm = function () {
        this.modelForm = this.fb.group({
            model_id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
        });
    };
    ModelFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.modelForm.valid) {
            if (this.modelService.selectedMode == 'Create') {
                this.createModel();
            }
            else if (this.modelService.selectedMode == 'Edit') {
                this.updateModel();
            }
        }
    };
    ModelFormComponent.prototype.getModelById = function (model_id) {
        var _this = this;
        this.modelService.getModelById(model_id)
            .subscribe(function (res) {
            _this.modelForm.patchValue(res[0]);
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    ModelFormComponent.prototype.createModel = function () {
        var _this = this;
        this.modelService.createModel(this.modelForm.value)
            .subscribe(function (res) {
            window.scrollTo(0, 0);
            _this.message = _this.modelForm.get('name').value + " created successfully.";
            setTimeout(function () {
                _this.message = "";
            }, 5000);
            _this.modelService.refreshList.next(true);
            _this.modelForm.reset();
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    ModelFormComponent.prototype.updateModel = function () {
        var _this = this;
        this.modelService.updateModel(this.modelForm.value)
            .subscribe(function (res) {
            window.scrollTo(0, 0);
            _this.message = _this.modelForm.get('name').value + " updated successfully.";
            setTimeout(function () {
                _this.message = "";
            }, 5000);
            _this.modelService.refreshList.next(true);
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    ModelFormComponent.prototype.deleteModel = function (event) {
        var _this = this;
        if (this.selectedModel_Id) {
            this.modelService.deleteModel(this.selectedModel_Id).subscribe(function (res) {
                _this.modelService.refreshList.next(true);
                _this.router.navigate(['/model/add']);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.modelForm.reset();
        }
    };
    ModelFormComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    ModelFormComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ModelFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-model-form',
            template: __webpack_require__(/*! ./model-form.component.html */ "./src/app/components/model/model-form/model-form.component.html"),
            styles: [__webpack_require__(/*! ./model-form.component.scss */ "./src/app/components/model/model-form/model-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], app_services_model_model_service__WEBPACK_IMPORTED_MODULE_3__["ModelService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ModelFormComponent);
    return ModelFormComponent;
}());



/***/ }),

/***/ "./src/app/components/model/model-list/model-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/model/model-list/model-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid section-list\">\n  <div>\n    <app-search (searchTermValueChanged)=\"searchModels($event)\" (isCreate)=\"createModel('Create')\"></app-search>\n  </div>\n  <div>\n    <div *ngIf=\"(results$ | async)?.length==0\" class=\"alert alert-danger text-center col-12\">\n      <strong>Error!</strong>&nbsp;<span>No records found</span>\n    </div>\n    <table class=\"table\">\n      <thead class=\"#f5f5f5 grey lighten-4\">\n        <tr>\n          <th>Name</th>\n          <th>Edit</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor='let model of results$ | async' [ngClass]=\"{'is-active': selectedModelId == model.model_id}\">\n          <td class=\"capitalize\">{{model.name}}</td>\n          <td class=\"pointer\" (click)=\"selectModel(model.model_id, 'Edit')\">\n              <i class=\"fa fa-pencil\"></i>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/model/model-list/model-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/model/model-list/model-list.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kZWwvbW9kZWwtbGlzdC9tb2RlbC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/model/model-list/model-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/model/model-list/model-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: ModelListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelListComponent", function() { return ModelListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_model_model_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/model/model.service */ "./src/app/services/model/model.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModelListComponent = /** @class */ (function () {
    function ModelListComponent(modelService, router, route) {
        var _this = this;
        this.modelService = modelService;
        this.router = router;
        this.route = route;
        this.searchTerm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.modelService.selectedModelId.subscribe(function (res) {
            _this.selectedModelId = res;
        }, function (err) {
        });
    }
    ModelListComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/model/add']);
    };
    ModelListComponent.prototype.searchModels = function (search) {
        this.searchTerm.emit(search);
    };
    //On Click of the Add Button
    ModelListComponent.prototype.createModel = function (mode) {
        this.selectedModelId = 0;
        this.modelService.selectedMode = mode;
        this.router.navigate(['/model/add']);
    };
    //On Click of the Edit Button
    ModelListComponent.prototype.selectModel = function (model_id, mode) {
        var _this = this;
        this.selectedModelId = model_id;
        this.modelService.selectedMode = mode;
        this.router.navigate(['/model/edit']);
        setTimeout(function () {
            _this.modelService.selectedModelId.next(model_id);
        }, 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], ModelListComponent.prototype, "results$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModelListComponent.prototype, "searchTerm", void 0);
    ModelListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-model-list',
            template: __webpack_require__(/*! ./model-list.component.html */ "./src/app/components/model/model-list/model-list.component.html"),
            styles: [__webpack_require__(/*! ./model-list.component.scss */ "./src/app/components/model/model-list/model-list.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_model_model_service__WEBPACK_IMPORTED_MODULE_3__["ModelService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ModelListComponent);
    return ModelListComponent;
}());



/***/ }),

/***/ "./src/app/components/model/model-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/model/model-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ModelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelRoutingModule", function() { return ModelRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model.component */ "./src/app/components/model/model.component.ts");
/* harmony import */ var _model_list_model_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model-list/model-list.component */ "./src/app/components/model/model-list/model-list.component.ts");
/* harmony import */ var _model_form_model_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model-form/model-form.component */ "./src/app/components/model/model-form/model-form.component.ts");
/* harmony import */ var app_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var modelRoutes = [
    {
        path: 'model',
        canActivate: [app_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _model_component__WEBPACK_IMPORTED_MODULE_2__["ModelComponent"],
        children: [
            { path: 'list', component: _model_list_model_list_component__WEBPACK_IMPORTED_MODULE_3__["ModelListComponent"] },
            { path: 'add', component: _model_form_model_form_component__WEBPACK_IMPORTED_MODULE_4__["ModelFormComponent"] },
            { path: 'edit', component: _model_form_model_form_component__WEBPACK_IMPORTED_MODULE_4__["ModelFormComponent"] }
        ]
    }
];
var ModelRoutingModule = /** @class */ (function () {
    function ModelRoutingModule() {
    }
    ModelRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(modelRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ModelRoutingModule);
    return ModelRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/model/model.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/model/model.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"col-12\">\n    <app-title [title]=title></app-title>\n  </div>\n</header>\n\n<div class=\"row\">\n  <div class=\"col-lg-4\">\n  <app-model-list (searchTerm)=\"searchModels($event)\" [results$]=\"models$\"></app-model-list>\n  </div>\n  <div class=\"col-lg-8\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/model/model.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/model/model.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kZWwvbW9kZWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/model/model.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/model/model.component.ts ***!
  \*****************************************************/
/*! exports provided: ModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelComponent", function() { return ModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_model_model_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/model/model.service */ "./src/app/services/model/model.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModelComponent = /** @class */ (function () {
    function ModelComponent(fb, modelService, router, route) {
        this.fb = fb;
        this.modelService = modelService;
        this.router = router;
        this.route = route;
        this.title = "Model";
    }
    ModelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getModels();
        this.modelService.refreshList.subscribe(function (res) {
            _this.getModels();
        }, function (err) {
            console.log(err);
        });
    };
    ModelComponent.prototype.getModels = function () {
        this.models$ = this.modelService.getModels();
    };
    ModelComponent.prototype.searchModels = function (searchTerm) {
        if (searchTerm) {
            this.models$ = this.modelService.searchModels(searchTerm);
        }
        else {
            this.getModels();
            //this.models$ = new EmptyObservable();
        }
    };
    ModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-model',
            template: __webpack_require__(/*! ./model.component.html */ "./src/app/components/model/model.component.html"),
            styles: [__webpack_require__(/*! ./model.component.scss */ "./src/app/components/model/model.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], app_services_model_model_service__WEBPACK_IMPORTED_MODULE_3__["ModelService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ModelComponent);
    return ModelComponent;
}());



/***/ }),

/***/ "./src/app/components/model/model.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/model/model.module.ts ***!
  \**************************************************/
/*! exports provided: ModelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelModule", function() { return ModelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _model_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model-routing.module */ "./src/app/components/model/model-routing.module.ts");
/* harmony import */ var _model_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model.component */ "./src/app/components/model/model.component.ts");
/* harmony import */ var _model_list_model_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model-list/model-list.component */ "./src/app/components/model/model-list/model-list.component.ts");
/* harmony import */ var _model_form_model_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model-form/model-form.component */ "./src/app/components/model/model-form/model-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ModelModule = /** @class */ (function () {
    function ModelModule() {
    }
    ModelModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _model_routing_module__WEBPACK_IMPORTED_MODULE_3__["ModelRoutingModule"],
            ],
            declarations: [
                _model_component__WEBPACK_IMPORTED_MODULE_4__["ModelComponent"],
                _model_list_model_list_component__WEBPACK_IMPORTED_MODULE_5__["ModelListComponent"],
                _model_form_model_form_component__WEBPACK_IMPORTED_MODULE_6__["ModelFormComponent"],
            ],
        })
    ], ModelModule);
    return ModelModule;
}());



/***/ }),

/***/ "./src/app/components/transmission-type/transmission-type-form/transmission-type-form.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/transmission-type/transmission-type-form/transmission-type-form.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid section\">\n  <div *ngIf=\"message\" class=\"alert alert-success text-center col-12\">\n    <strong>Success!</strong>&nbsp;<span>{{message}}</span>\n  </div>\n  <div *ngIf=\"message_error\" class=\"alert alert-danger text-center col-12\">\n    <strong>Error!</strong>&nbsp;<span>{{message_error}}</span>\n  </div>\n  <div class=\"col-12 grey lighten-4\">\n    <header class=\"header row\">\n      <div class=\"col-12\">\n        <app-title [title]=title></app-title>\n      </div>\n    </header>\n\n    <div class=\"col-12\">\n      <form [formGroup]=\"transmissionTypeForm\" (ngSubmit)=\"onSubmit()\" >\n        <div class=\"form-group\">\n          <label for=\"inputTransmissionTypeName\" class=\"col-sm-2 col-form-label\">Name</label>\n          <div>\n            <div class=\"md-form mt-0\">\n              <input type=\"text\" class=\"form-control capitalize\" id=\"inputTransmissionTypeName\" formControlName=\"name\">\n              <!-- <p style=\"color:red\" *ngIf=\"transmissionTypeForm.controls.name.touched && transmissionTypeForm.controls.name.errors.required\">Required</p> -->\n              <app-control-messages [control]=\"transmissionTypeForm.controls.name\"></app-control-messages>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"text-right\">\n            <!--  [disabled]=\"transmissionTypeForm.invalid\"-->\n            <button type=\"submit\" class=\"btn btn-primary btn-custom btn-md\" >\n              <i class=\"fa fa-save\"></i>\n            </button>\n            <app-simple-modal [module]=\"module\" [mode]=\"mode\" [name]=\"transmissionTypeForm.controls.name.value\" (isDelete)=\"deleteTransmissionType($event)\"></app-simple-modal>\n\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/transmission-type/transmission-type-form/transmission-type-form.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/transmission-type/transmission-type-form/transmission-type-form.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhbnNtaXNzaW9uLXR5cGUvdHJhbnNtaXNzaW9uLXR5cGUtZm9ybS90cmFuc21pc3Npb24tdHlwZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/transmission-type/transmission-type-form/transmission-type-form.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/transmission-type/transmission-type-form/transmission-type-form.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: TransmissionTypeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransmissionTypeFormComponent", function() { return TransmissionTypeFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_transmission_type_transmission_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/transmission-type/transmission-type.service */ "./src/app/services/transmission-type/transmission-type.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransmissionTypeFormComponent = /** @class */ (function () {
    function TransmissionTypeFormComponent(fb, transmissionTypeService, router, route) {
        var _this = this;
        this.fb = fb;
        this.transmissionTypeService = transmissionTypeService;
        this.router = router;
        this.route = route;
        this.title = "Create Transmission Type";
        this.module = "trasnmission type";
        this.mode = "discard";
        this.message = "";
        this.message_error = "";
        this.submitted = false;
        this.transmissionTypeService.selectedTransmissionTypeId.next(0);
        this.sub = this.transmissionTypeService.selectedTransmissionTypeId
            .subscribe(function (res) {
            _this.selectedTransmissionType_Id = res;
            if (_this.transmissionTypeService.selectedMode == "Edit") {
                _this.title = "Edit Transmission Type";
                _this.mode = "delete";
                _this.getTransmissionTypeById(res);
            }
        }, function (err) {
        });
    }
    TransmissionTypeFormComponent.prototype.createForm = function () {
        this.transmissionTypeForm = this.fb.group({
            transmission_type_id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
        });
    };
    TransmissionTypeFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.transmissionTypeForm.valid) {
            if (this.transmissionTypeService.selectedMode == 'Create') {
                this.createTransmissionType();
            }
            else if (this.transmissionTypeService.selectedMode == 'Edit') {
                this.updateTransmissionType();
            }
        }
    };
    TransmissionTypeFormComponent.prototype.getTransmissionTypeById = function (transmissionType_id) {
        var _this = this;
        this.transmissionTypeService.getTransmissionTypeById(transmissionType_id)
            .subscribe(function (res) {
            _this.transmissionTypeForm.patchValue(res[0]);
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    TransmissionTypeFormComponent.prototype.createTransmissionType = function () {
        var _this = this;
        this.transmissionTypeService.createTransmissionType(this.transmissionTypeForm.value)
            .subscribe(function (res) {
            window.scrollTo(0, 0);
            _this.message = _this.transmissionTypeForm.get('name').value + " created successfully.";
            setTimeout(function () {
                _this.message = "";
            }, 5000);
            _this.transmissionTypeService.refreshList.next(true);
            _this.transmissionTypeForm.reset();
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = _this.transmissionTypeForm.get('name').value + " updated successfully.";
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    TransmissionTypeFormComponent.prototype.updateTransmissionType = function () {
        var _this = this;
        this.transmissionTypeService.updateTransmissionType(this.transmissionTypeForm.value)
            .subscribe(function (res) {
            window.scrollTo(0, 0);
            _this.message = _this.transmissionTypeForm.get('name').value + " updated successfully.";
            setTimeout(function () {
                _this.message = "";
            }, 5000);
            _this.transmissionTypeService.refreshList.next(true);
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    TransmissionTypeFormComponent.prototype.deleteTransmissionType = function (event) {
        var _this = this;
        if (this.selectedTransmissionType_Id) {
            this.transmissionTypeService.deleteTransmissionType(this.selectedTransmissionType_Id).subscribe(function (res) {
                _this.transmissionTypeService.refreshList.next(true);
                _this.router.navigate(['/transmissionType/add']);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.transmissionTypeForm.reset();
        }
    };
    TransmissionTypeFormComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    TransmissionTypeFormComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TransmissionTypeFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transmissionType-form',
            template: __webpack_require__(/*! ./transmission-type-form.component.html */ "./src/app/components/transmission-type/transmission-type-form/transmission-type-form.component.html"),
            styles: [__webpack_require__(/*! ./transmission-type-form.component.scss */ "./src/app/components/transmission-type/transmission-type-form/transmission-type-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], app_services_transmission_type_transmission_type_service__WEBPACK_IMPORTED_MODULE_3__["TransmissionTypeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TransmissionTypeFormComponent);
    return TransmissionTypeFormComponent;
}());



/***/ }),

/***/ "./src/app/components/transmission-type/transmission-type-list/transmission-type-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/transmission-type/transmission-type-list/transmission-type-list.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid section-list\">\n  <div>\n    <app-search (searchTermValueChanged)=\"searchTransmissionTypes($event)\" (isCreate)=\"createTransmissionType('Create')\"></app-search>\n  </div>\n  <div>\n    <div *ngIf=\"(results$ | async)?.length==0\" class=\"alert alert-danger text-center col-12\">\n      <strong>Error!</strong>&nbsp;<span>No records found</span>\n    </div>\n    <table class=\"table\">\n      <thead class=\"#f5f5f5 grey lighten-4\">\n        <tr>\n          <th>Name</th>\n          <th>Edit</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor='let transmissionType of results$ | async' [ngClass]=\"{'is-active': selectedTransmissionTypeId == transmissionType.transmission_type_id}\">\n          <td class=\"capitalize\">{{transmissionType.name}}</td>\n          <td class=\"pointer\" (click)=\"selectTransmissionType(transmissionType.transmission_type_id, 'Edit')\">\n              <i class=\"fa fa-pencil\"></i>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/transmission-type/transmission-type-list/transmission-type-list.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/transmission-type/transmission-type-list/transmission-type-list.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhbnNtaXNzaW9uLXR5cGUvdHJhbnNtaXNzaW9uLXR5cGUtbGlzdC90cmFuc21pc3Npb24tdHlwZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/transmission-type/transmission-type-list/transmission-type-list.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/transmission-type/transmission-type-list/transmission-type-list.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: TransmissionTypeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransmissionTypeListComponent", function() { return TransmissionTypeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_transmission_type_transmission_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/transmission-type/transmission-type.service */ "./src/app/services/transmission-type/transmission-type.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransmissionTypeListComponent = /** @class */ (function () {
    function TransmissionTypeListComponent(transmissionTypeService, router, route) {
        var _this = this;
        this.transmissionTypeService = transmissionTypeService;
        this.router = router;
        this.route = route;
        this.searchTerm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.transmissionTypeService.selectedTransmissionTypeId.subscribe(function (res) {
            _this.selectedTransmissionTypeId = res;
        }, function (err) {
        });
    }
    TransmissionTypeListComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/transmissionType/add']);
    };
    TransmissionTypeListComponent.prototype.searchTransmissionTypes = function (search) {
        this.searchTerm.emit(search);
    };
    //On Click of the Add Button
    TransmissionTypeListComponent.prototype.createTransmissionType = function (mode) {
        this.selectedTransmissionTypeId = 0;
        this.transmissionTypeService.selectedMode = mode;
        this.router.navigate(['/transmissionType/add']);
    };
    //On Click of the Edit Button
    TransmissionTypeListComponent.prototype.selectTransmissionType = function (transmissionType_id, mode) {
        var _this = this;
        this.selectedTransmissionTypeId = transmissionType_id;
        this.transmissionTypeService.selectedMode = mode;
        this.router.navigate(['/transmissionType/edit']);
        setTimeout(function () {
            _this.transmissionTypeService.selectedTransmissionTypeId.next(transmissionType_id);
        }, 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], TransmissionTypeListComponent.prototype, "results$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TransmissionTypeListComponent.prototype, "searchTerm", void 0);
    TransmissionTypeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transmissionType-list',
            template: __webpack_require__(/*! ./transmission-type-list.component.html */ "./src/app/components/transmission-type/transmission-type-list/transmission-type-list.component.html"),
            styles: [__webpack_require__(/*! ./transmission-type-list.component.scss */ "./src/app/components/transmission-type/transmission-type-list/transmission-type-list.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_transmission_type_transmission_type_service__WEBPACK_IMPORTED_MODULE_3__["TransmissionTypeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TransmissionTypeListComponent);
    return TransmissionTypeListComponent;
}());



/***/ }),

/***/ "./src/app/components/transmission-type/transmission-type-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/transmission-type/transmission-type-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: TransmissionTypeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransmissionTypeRoutingModule", function() { return TransmissionTypeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _transmission_type_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transmission-type.component */ "./src/app/components/transmission-type/transmission-type.component.ts");
/* harmony import */ var _transmission_type_list_transmission_type_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transmission-type-list/transmission-type-list.component */ "./src/app/components/transmission-type/transmission-type-list/transmission-type-list.component.ts");
/* harmony import */ var _transmission_type_form_transmission_type_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transmission-type-form/transmission-type-form.component */ "./src/app/components/transmission-type/transmission-type-form/transmission-type-form.component.ts");
/* harmony import */ var app_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var transmissionTypeRoutes = [
    {
        path: 'transmissionType',
        canActivate: [app_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _transmission_type_component__WEBPACK_IMPORTED_MODULE_2__["TransmissionTypeComponent"],
        children: [
            { path: 'list', component: _transmission_type_list_transmission_type_list_component__WEBPACK_IMPORTED_MODULE_3__["TransmissionTypeListComponent"] },
            { path: 'add', component: _transmission_type_form_transmission_type_form_component__WEBPACK_IMPORTED_MODULE_4__["TransmissionTypeFormComponent"] },
            { path: 'edit', component: _transmission_type_form_transmission_type_form_component__WEBPACK_IMPORTED_MODULE_4__["TransmissionTypeFormComponent"] }
        ]
    }
];
var TransmissionTypeRoutingModule = /** @class */ (function () {
    function TransmissionTypeRoutingModule() {
    }
    TransmissionTypeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(transmissionTypeRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TransmissionTypeRoutingModule);
    return TransmissionTypeRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/transmission-type/transmission-type.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/transmission-type/transmission-type.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"col-12\">\n    <app-title [title]=title></app-title>\n  </div>\n</header>\n\n<div class=\"row\">\n  <div class=\"col-lg-4\">\n  <app-transmissionType-list (searchTerm)=\"searchTransmissionTypes($event)\" [results$]=\"transmissionTypes$\"></app-transmissionType-list>\n  </div>\n  <div class=\"col-lg-8\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/transmission-type/transmission-type.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/transmission-type/transmission-type.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhbnNtaXNzaW9uLXR5cGUvdHJhbnNtaXNzaW9uLXR5cGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/transmission-type/transmission-type.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/transmission-type/transmission-type.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TransmissionTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransmissionTypeComponent", function() { return TransmissionTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_transmission_type_transmission_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/transmission-type/transmission-type.service */ "./src/app/services/transmission-type/transmission-type.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransmissionTypeComponent = /** @class */ (function () {
    function TransmissionTypeComponent(fb, transmissionTypeService, router, route) {
        this.fb = fb;
        this.transmissionTypeService = transmissionTypeService;
        this.router = router;
        this.route = route;
        this.title = "Transmission Type";
    }
    TransmissionTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTransmissionTypes();
        this.transmissionTypeService.refreshList.subscribe(function (res) {
            _this.getTransmissionTypes();
        }, function (err) {
            console.log(err);
        });
    };
    TransmissionTypeComponent.prototype.getTransmissionTypes = function () {
        this.transmissionTypes$ = this.transmissionTypeService.getTransmissionTypes();
    };
    TransmissionTypeComponent.prototype.searchTransmissionTypes = function (searchTerm) {
        if (searchTerm) {
            this.transmissionTypes$ = this.transmissionTypeService.searchTransmissionTypes(searchTerm);
        }
        else {
            this.getTransmissionTypes();
            //this.transmissionTypes$ = new EmptyObservable();
        }
    };
    TransmissionTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-make',
            template: __webpack_require__(/*! ./transmission-type.component.html */ "./src/app/components/transmission-type/transmission-type.component.html"),
            styles: [__webpack_require__(/*! ./transmission-type.component.scss */ "./src/app/components/transmission-type/transmission-type.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], app_services_transmission_type_transmission_type_service__WEBPACK_IMPORTED_MODULE_3__["TransmissionTypeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TransmissionTypeComponent);
    return TransmissionTypeComponent;
}());



/***/ }),

/***/ "./src/app/components/transmission-type/transmission-type.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/transmission-type/transmission-type.module.ts ***!
  \**************************************************************************/
/*! exports provided: TransmissionTypeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransmissionTypeModule", function() { return TransmissionTypeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _transmission_type_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transmission-type-routing.module */ "./src/app/components/transmission-type/transmission-type-routing.module.ts");
/* harmony import */ var _transmission_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transmission-type.component */ "./src/app/components/transmission-type/transmission-type.component.ts");
/* harmony import */ var _transmission_type_list_transmission_type_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transmission-type-list/transmission-type-list.component */ "./src/app/components/transmission-type/transmission-type-list/transmission-type-list.component.ts");
/* harmony import */ var _transmission_type_form_transmission_type_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transmission-type-form/transmission-type-form.component */ "./src/app/components/transmission-type/transmission-type-form/transmission-type-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TransmissionTypeModule = /** @class */ (function () {
    function TransmissionTypeModule() {
    }
    TransmissionTypeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _transmission_type_routing_module__WEBPACK_IMPORTED_MODULE_3__["TransmissionTypeRoutingModule"],
            ],
            declarations: [
                _transmission_type_component__WEBPACK_IMPORTED_MODULE_4__["TransmissionTypeComponent"],
                _transmission_type_list_transmission_type_list_component__WEBPACK_IMPORTED_MODULE_5__["TransmissionTypeListComponent"],
                _transmission_type_form_transmission_type_form_component__WEBPACK_IMPORTED_MODULE_6__["TransmissionTypeFormComponent"],
            ],
        })
    ], TransmissionTypeModule);
    return TransmissionTypeModule;
}());



/***/ }),

/***/ "./src/app/components/upload-file/upload-file.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/upload-file/upload-file.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label class=\"btn btn-default\">\n  <input type=\"file\" multiple=\"multiple\" (change)=\"selectFile($event)\">\n</label>\n\n<button class=\"btn btn-success\" [disabled]=\"!selectedFiles\" (click)=\"upload()\">Upload</button>\n"

/***/ }),

/***/ "./src/app/components/upload-file/upload-file.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/upload-file/upload-file.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBsb2FkLWZpbGUvdXBsb2FkLWZpbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/upload-file/upload-file.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/upload-file/upload-file.component.ts ***!
  \*****************************************************************/
/*! exports provided: UploadFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileComponent", function() { return UploadFileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_upload_file_upload_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/upload-file/upload-file.service */ "./src/app/services/upload-file/upload-file.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadFileComponent = /** @class */ (function () {
    function UploadFileComponent(uploadService) {
        this.uploadService = uploadService;
        this.car_id = "default"; //Will be the folder name
    }
    UploadFileComponent.prototype.ngOnInit = function () {
    };
    UploadFileComponent.prototype.upload = function () {
        //console.log("total files ", this.selectedFiles.length);
        for (var i = 0; i < this.selectedFiles.length; i++) {
            var file = this.selectedFiles.item(i);
            this.uploadService.uploadfile(file, this.car_id);
        }
    };
    UploadFileComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UploadFileComponent.prototype, "car_id", void 0);
    UploadFileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-file',
            template: __webpack_require__(/*! ./upload-file.component.html */ "./src/app/components/upload-file/upload-file.component.html"),
            styles: [__webpack_require__(/*! ./upload-file.component.scss */ "./src/app/components/upload-file/upload-file.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_upload_file_upload_file_service__WEBPACK_IMPORTED_MODULE_1__["UploadFileService"]])
    ], UploadFileComponent);
    return UploadFileComponent;
}());



/***/ }),

/***/ "./src/app/components/variant/variant-form/variant-form.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/variant/variant-form/variant-form.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid section\">\n  <div *ngIf=\"message\" class=\"alert alert-success text-center col-12\">\n    <strong>Success!</strong>&nbsp;<span>{{message}}</span>\n  </div>\n  <div *ngIf=\"message_error\" class=\"alert alert-danger text-center col-12\">\n    <strong>Error!</strong>&nbsp;<span>{{message_error}}</span>\n  </div>\n  <div class=\"col-12 grey lighten-4\">\n    <header class=\"header row\">\n      <div class=\"col-12\">\n        <app-title [title]=title></app-title>\n      </div>\n    </header>\n\n    <div class=\"col-12\">\n      <form [formGroup]=\"variantForm\" (ngSubmit)=\"onSubmit()\" >\n        <div class=\"form-group\">\n          <label for=\"inputVariantName\" class=\"col-sm-2 col-form-label\">Name</label>\n          <div>\n            <div class=\"md-form mt-0\">\n              <input type=\"text\" class=\"form-control capitalize\" id=\"inputVariantName\" formControlName=\"name\">\n              <!-- <p style=\"color:red\" *ngIf=\"variantForm.controls.name.touched && variantForm.controls.name.errors.required\">Required</p> -->\n              <app-control-messages [control]=\"variantForm.controls.name\"></app-control-messages>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"text-right\">\n            <!--  [disabled]=\"variantForm.invalid\"-->\n            <button type=\"submit\" class=\"btn btn-primary btn-custom btn-md\" >\n              <i class=\"fa fa-save\"></i>\n            </button>\n            <app-simple-modal [module]=\"module\" [mode]=\"mode\" [name]=\"variantForm.controls.name.value\" (isDelete)=\"deleteVariant($event)\"></app-simple-modal>\n\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/variant/variant-form/variant-form.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/variant/variant-form/variant-form.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmFyaWFudC92YXJpYW50LWZvcm0vdmFyaWFudC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/variant/variant-form/variant-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/variant/variant-form/variant-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: VariantFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantFormComponent", function() { return VariantFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_variant_variant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/variant/variant.service */ "./src/app/services/variant/variant.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VariantFormComponent = /** @class */ (function () {
    function VariantFormComponent(fb, variantService, router, route) {
        var _this = this;
        this.fb = fb;
        this.variantService = variantService;
        this.router = router;
        this.route = route;
        this.title = "Create Variant";
        this.module = "variant";
        this.mode = "discard";
        this.message = "";
        this.message_error = "";
        this.submitted = false;
        this.variantService.selectedVariantId.next(0);
        this.sub = this.variantService.selectedVariantId
            .subscribe(function (res) {
            _this.selectedVariant_Id = res;
            if (_this.variantService.selectedMode == "Edit") {
                _this.title = "Edit Variant";
                _this.mode = "delete";
                _this.getVariantById(res);
            }
        }, function (err) {
        });
    }
    VariantFormComponent.prototype.createForm = function () {
        this.variantForm = this.fb.group({
            variant_id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
        });
    };
    VariantFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.variantForm.valid) {
            if (this.variantService.selectedMode == 'Create') {
                this.createVariant();
            }
            else if (this.variantService.selectedMode == 'Edit') {
                this.updateVariant();
            }
        }
    };
    VariantFormComponent.prototype.getVariantById = function (variant_id) {
        var _this = this;
        this.variantService.getVariantById(variant_id)
            .subscribe(function (res) {
            _this.variantForm.patchValue(res[0]);
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    VariantFormComponent.prototype.createVariant = function () {
        var _this = this;
        this.variantService.createVariant(this.variantForm.value)
            .subscribe(function (res) {
            window.scrollTo(0, 0);
            _this.message = _this.variantForm.get('name').value + " created successfully.";
            setTimeout(function () {
                _this.message = "";
            }, 5000);
            _this.variantService.refreshList.next(true);
            _this.variantForm.reset();
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    VariantFormComponent.prototype.updateVariant = function () {
        var _this = this;
        this.variantService.updateVariant(this.variantForm.value)
            .subscribe(function (res) {
            window.scrollTo(0, 0);
            _this.message = _this.variantForm.get('name').value + " updated successfully.";
            setTimeout(function () {
                _this.message = "";
            }, 5000);
            _this.variantService.refreshList.next(true);
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    VariantFormComponent.prototype.deleteVariant = function (event) {
        var _this = this;
        if (this.selectedVariant_Id) {
            this.variantService.deleteVariant(this.selectedVariant_Id).subscribe(function (res) {
                _this.variantService.refreshList.next(true);
                _this.router.navigate(['/variant/add']);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.variantForm.reset();
        }
    };
    VariantFormComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    VariantFormComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    VariantFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-variant-form',
            template: __webpack_require__(/*! ./variant-form.component.html */ "./src/app/components/variant/variant-form/variant-form.component.html"),
            styles: [__webpack_require__(/*! ./variant-form.component.scss */ "./src/app/components/variant/variant-form/variant-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], app_services_variant_variant_service__WEBPACK_IMPORTED_MODULE_3__["VariantService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], VariantFormComponent);
    return VariantFormComponent;
}());



/***/ }),

/***/ "./src/app/components/variant/variant-list/variant-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/variant/variant-list/variant-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid section-list\">\n  <div>\n    <app-search (searchTermValueChanged)=\"searchVariants($event)\" (isCreate)=\"createVariant('Create')\"></app-search>\n  </div>\n  <div>\n    <div *ngIf=\"(results$ | async)?.length==0\" class=\"alert alert-danger text-center col-12\">\n      <strong>Error!</strong>&nbsp;<span>No records found</span>\n    </div>\n    <table class=\"table\">\n      <thead class=\"#f5f5f5 grey lighten-4\">\n        <tr>\n          <th>Name</th>\n          <th>Edit</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor='let variant of results$ | async' [ngClass]=\"{'is-active': selectedVariantId == variant.variant_id}\">\n          <td class=\"capitalize\">{{variant.name}}</td>\n          <td class=\"pointer\" (click)=\"selectVariant(variant.variant_id, 'Edit')\">\n              <i class=\"fa fa-pencil\"></i>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/variant/variant-list/variant-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/variant/variant-list/variant-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmFyaWFudC92YXJpYW50LWxpc3QvdmFyaWFudC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/variant/variant-list/variant-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/variant/variant-list/variant-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: VariantListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantListComponent", function() { return VariantListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_variant_variant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/variant/variant.service */ "./src/app/services/variant/variant.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VariantListComponent = /** @class */ (function () {
    function VariantListComponent(variantService, router, route) {
        var _this = this;
        this.variantService = variantService;
        this.router = router;
        this.route = route;
        this.searchTerm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.variantService.selectedVariantId.subscribe(function (res) {
            _this.selectedVariantId = res;
        }, function (err) {
        });
    }
    VariantListComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/variant/add']);
    };
    VariantListComponent.prototype.searchVariants = function (search) {
        this.searchTerm.emit(search);
    };
    //On Click of the Add Button
    VariantListComponent.prototype.createVariant = function (mode) {
        this.selectedVariantId = 0;
        this.variantService.selectedMode = mode;
        this.router.navigate(['/variant/add']);
    };
    //On Click of the Edit Button
    VariantListComponent.prototype.selectVariant = function (variant_id, mode) {
        var _this = this;
        this.selectedVariantId = variant_id;
        this.variantService.selectedMode = mode;
        this.router.navigate(['/variant/edit']);
        setTimeout(function () {
            _this.variantService.selectedVariantId.next(variant_id);
        }, 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], VariantListComponent.prototype, "results$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VariantListComponent.prototype, "searchTerm", void 0);
    VariantListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-variant-list',
            template: __webpack_require__(/*! ./variant-list.component.html */ "./src/app/components/variant/variant-list/variant-list.component.html"),
            styles: [__webpack_require__(/*! ./variant-list.component.scss */ "./src/app/components/variant/variant-list/variant-list.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_variant_variant_service__WEBPACK_IMPORTED_MODULE_3__["VariantService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], VariantListComponent);
    return VariantListComponent;
}());



/***/ }),

/***/ "./src/app/components/variant/variant-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/variant/variant-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: VariantRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantRoutingModule", function() { return VariantRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _variant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variant.component */ "./src/app/components/variant/variant.component.ts");
/* harmony import */ var _variant_list_variant_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variant-list/variant-list.component */ "./src/app/components/variant/variant-list/variant-list.component.ts");
/* harmony import */ var _variant_form_variant_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./variant-form/variant-form.component */ "./src/app/components/variant/variant-form/variant-form.component.ts");
/* harmony import */ var app_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var variantRoutes = [
    {
        path: 'variant',
        canActivate: [app_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _variant_component__WEBPACK_IMPORTED_MODULE_2__["VariantComponent"],
        children: [
            { path: 'list', component: _variant_list_variant_list_component__WEBPACK_IMPORTED_MODULE_3__["VariantListComponent"] },
            { path: 'add', component: _variant_form_variant_form_component__WEBPACK_IMPORTED_MODULE_4__["VariantFormComponent"] },
            { path: 'edit', component: _variant_form_variant_form_component__WEBPACK_IMPORTED_MODULE_4__["VariantFormComponent"] }
        ]
    }
];
var VariantRoutingModule = /** @class */ (function () {
    function VariantRoutingModule() {
    }
    VariantRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(variantRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], VariantRoutingModule);
    return VariantRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/variant/variant.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/variant/variant.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"col-12\">\n    <app-title [title]=title></app-title>\n  </div>\n</header>\n\n<div class=\"row\">\n  <div class=\"col-lg-4\">\n  <app-variant-list (searchTerm)=\"searchVariants($event)\" [results$]=\"variants$\"></app-variant-list>\n  </div>\n  <div class=\"col-lg-8\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/variant/variant.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/variant/variant.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmFyaWFudC92YXJpYW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/variant/variant.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/variant/variant.component.ts ***!
  \*********************************************************/
/*! exports provided: VariantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantComponent", function() { return VariantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_variant_variant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/variant/variant.service */ "./src/app/services/variant/variant.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VariantComponent = /** @class */ (function () {
    function VariantComponent(fb, variantService, router, route) {
        this.fb = fb;
        this.variantService = variantService;
        this.router = router;
        this.route = route;
        this.title = "Variant";
    }
    VariantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getVariants();
        this.variantService.refreshList.subscribe(function (res) {
            _this.getVariants();
        }, function (err) {
            console.log(err);
        });
    };
    VariantComponent.prototype.getVariants = function () {
        this.variants$ = this.variantService.getVariants();
    };
    VariantComponent.prototype.searchVariants = function (searchTerm) {
        if (searchTerm) {
            this.variants$ = this.variantService.searchVariants(searchTerm);
        }
        else {
            this.getVariants();
            //this.variants$ = new EmptyObservable();
        }
    };
    VariantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-variant',
            template: __webpack_require__(/*! ./variant.component.html */ "./src/app/components/variant/variant.component.html"),
            styles: [__webpack_require__(/*! ./variant.component.scss */ "./src/app/components/variant/variant.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], app_services_variant_variant_service__WEBPACK_IMPORTED_MODULE_3__["VariantService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], VariantComponent);
    return VariantComponent;
}());



/***/ }),

/***/ "./src/app/components/variant/variant.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/variant/variant.module.ts ***!
  \******************************************************/
/*! exports provided: VariantModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantModule", function() { return VariantModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _variant_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variant-routing.module */ "./src/app/components/variant/variant-routing.module.ts");
/* harmony import */ var _variant_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./variant.component */ "./src/app/components/variant/variant.component.ts");
/* harmony import */ var _variant_list_variant_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./variant-list/variant-list.component */ "./src/app/components/variant/variant-list/variant-list.component.ts");
/* harmony import */ var _variant_form_variant_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./variant-form/variant-form.component */ "./src/app/components/variant/variant-form/variant-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var VariantModule = /** @class */ (function () {
    function VariantModule() {
    }
    VariantModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _variant_routing_module__WEBPACK_IMPORTED_MODULE_3__["VariantRoutingModule"],
            ],
            declarations: [
                _variant_component__WEBPACK_IMPORTED_MODULE_4__["VariantComponent"],
                _variant_list_variant_list_component__WEBPACK_IMPORTED_MODULE_5__["VariantListComponent"],
                _variant_form_variant_form_component__WEBPACK_IMPORTED_MODULE_6__["VariantFormComponent"],
            ],
        })
    ], VariantModule);
    return VariantModule;
}());



/***/ }),

/***/ "./src/app/components/vehicle-type/vehicle-type-form/vehicle-type-form.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/vehicle-type/vehicle-type-form/vehicle-type-form.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid section\">\n  <div *ngIf=\"message\" class=\"alert alert-success text-center col-12\">\n    <strong>Success!</strong>&nbsp;<span>{{message}}</span>\n  </div>\n  <div *ngIf=\"message_error\" class=\"alert alert-danger text-center col-12\">\n    <strong>Error!</strong>&nbsp;<span>{{message_error}}</span>\n  </div>\n  <div class=\"col-12 grey lighten-4\">\n    <header class=\"header row\">\n      <div class=\"col-12\">\n        <app-title [title]=title></app-title>\n      </div>\n    </header>\n\n    <div class=\"col-12\">\n      <form [formGroup]=\"vehicleTypeForm\" (ngSubmit)=\"onSubmit()\" >\n        <div class=\"form-group\">\n          <label for=\"inputVehicleTypeName\" class=\"col-sm-2 col-form-label\">Name</label>\n          <div>\n            <div class=\"md-form mt-0\">\n              <input type=\"text\" class=\"form-control capitalize\" id=\"inputVehicleTypeName\" formControlName=\"name\">\n              <!-- <p style=\"color:red\" *ngIf=\"vehicleTypeForm.controls.name.touched && vehicleTypeForm.controls.name.errors.required\">Required</p> -->\n              <app-control-messages [control]=\"vehicleTypeForm.controls.name\"></app-control-messages>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"text-right\">\n            <!--  [disabled]=\"vehicleTypeForm.invalid\"-->\n            <button type=\"submit\" class=\"btn btn-primary btn-custom btn-md\" >\n              <i class=\"fa fa-save\"></i>\n            </button>\n            <app-simple-modal [module]=\"module\" [mode]=\"mode\" [name]=\"vehicleTypeForm.controls.name.value\" (isDelete)=\"deleteVehicleType($event)\"></app-simple-modal>\n\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/vehicle-type/vehicle-type-form/vehicle-type-form.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/components/vehicle-type/vehicle-type-form/vehicle-type-form.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmVoaWNsZS10eXBlL3ZlaGljbGUtdHlwZS1mb3JtL3ZlaGljbGUtdHlwZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/vehicle-type/vehicle-type-form/vehicle-type-form.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/vehicle-type/vehicle-type-form/vehicle-type-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: VehicleTypeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleTypeFormComponent", function() { return VehicleTypeFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_vehicle_type_vehicle_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/vehicle-type/vehicle-type.service */ "./src/app/services/vehicle-type/vehicle-type.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VehicleTypeFormComponent = /** @class */ (function () {
    function VehicleTypeFormComponent(fb, vehicleTypeService, router, route) {
        var _this = this;
        this.fb = fb;
        this.vehicleTypeService = vehicleTypeService;
        this.router = router;
        this.route = route;
        this.title = "Create Vehicle Type";
        this.module = "vehicle type";
        this.mode = "discard";
        this.message = "";
        this.message_error = "";
        this.submitted = false;
        this.vehicleTypeService.selectedVehicleTypeId.next(0);
        this.sub = this.vehicleTypeService.selectedVehicleTypeId
            .subscribe(function (res) {
            _this.selectedVehicleType_Id = res;
            if (_this.vehicleTypeService.selectedMode == "Edit") {
                _this.title = "Edit Vehicle Type";
                _this.mode = "delete";
                _this.getVehicleTypeById(res);
            }
        }, function (err) {
        });
    }
    VehicleTypeFormComponent.prototype.createForm = function () {
        this.vehicleTypeForm = this.fb.group({
            vehicle_type_id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
        });
    };
    VehicleTypeFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.vehicleTypeForm.valid) {
            if (this.vehicleTypeService.selectedMode == 'Create') {
                this.createVehicleType();
            }
            else if (this.vehicleTypeService.selectedMode == 'Edit') {
                this.updateVehicleType();
            }
        }
    };
    VehicleTypeFormComponent.prototype.getVehicleTypeById = function (vehicleType_id) {
        var _this = this;
        this.vehicleTypeService.getVehicleTypeById(vehicleType_id)
            .subscribe(function (res) {
            _this.vehicleTypeForm.patchValue(res[0]);
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    VehicleTypeFormComponent.prototype.createVehicleType = function () {
        var _this = this;
        this.vehicleTypeService.createVehicleType(this.vehicleTypeForm.value)
            .subscribe(function (res) {
            window.scrollTo(0, 0);
            _this.message = _this.vehicleTypeForm.get('name').value + " created successfully.";
            setTimeout(function () {
                _this.message = "";
            }, 5000);
            _this.vehicleTypeService.refreshList.next(true);
            _this.vehicleTypeForm.reset();
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    VehicleTypeFormComponent.prototype.updateVehicleType = function () {
        var _this = this;
        this.vehicleTypeService.updateVehicleType(this.vehicleTypeForm.value)
            .subscribe(function (res) {
            window.scrollTo(0, 0);
            _this.message = _this.vehicleTypeForm.get('name').value + " updated successfully.";
            setTimeout(function () {
                _this.message = "";
            }, 5000);
            _this.vehicleTypeService.refreshList.next(true);
        }, function (err) {
            window.scrollTo(0, 0);
            _this.message_error = err;
            setTimeout(function () {
                _this.message_error = "";
            }, 5000);
            console.log(err);
        });
    };
    VehicleTypeFormComponent.prototype.deleteVehicleType = function (event) {
        var _this = this;
        if (this.selectedVehicleType_Id) {
            this.vehicleTypeService.deleteVehicleType(this.selectedVehicleType_Id).subscribe(function (res) {
                _this.vehicleTypeService.refreshList.next(true);
                _this.router.navigate(['/vehicleType/add']);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.vehicleTypeForm.reset();
        }
    };
    VehicleTypeFormComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    VehicleTypeFormComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    VehicleTypeFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehicleType-form',
            template: __webpack_require__(/*! ./vehicle-type-form.component.html */ "./src/app/components/vehicle-type/vehicle-type-form/vehicle-type-form.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-type-form.component.scss */ "./src/app/components/vehicle-type/vehicle-type-form/vehicle-type-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], app_services_vehicle_type_vehicle_type_service__WEBPACK_IMPORTED_MODULE_3__["VehicleTypeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], VehicleTypeFormComponent);
    return VehicleTypeFormComponent;
}());



/***/ }),

/***/ "./src/app/components/vehicle-type/vehicle-type-list/vehicle-type-list.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/vehicle-type/vehicle-type-list/vehicle-type-list.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid section-list\">\n  <div>\n    <app-search (searchTermValueChanged)=\"searchVehicleTypes($event)\" (isCreate)=\"createVehicleType('Create')\"></app-search>\n  </div>\n  <div>\n    <div *ngIf=\"(results$ | async)?.length==0\" class=\"alert alert-danger text-center col-12\">\n      <strong>Error!</strong>&nbsp;<span>No records found</span>\n    </div>\n    <table class=\"table\">\n      <thead class=\"#f5f5f5 grey lighten-4\">\n        <tr>\n          <th>Name</th>\n          <th>Edit</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor='let vehicleType of results$ | async' [ngClass]=\"{'is-active': selectedVehicleTypeId == vehicleType.vehicle_type_id}\">\n          <td class=\"capitalize\">{{vehicleType.name}}</td>\n          <td class=\"pointer\" (click)=\"selectVehicleType(vehicleType.vehicle_type_id, 'Edit')\">\n              <i class=\"fa fa-pencil\"></i>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/vehicle-type/vehicle-type-list/vehicle-type-list.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/components/vehicle-type/vehicle-type-list/vehicle-type-list.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmVoaWNsZS10eXBlL3ZlaGljbGUtdHlwZS1saXN0L3ZlaGljbGUtdHlwZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/vehicle-type/vehicle-type-list/vehicle-type-list.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/vehicle-type/vehicle-type-list/vehicle-type-list.component.ts ***!
  \******************************************************************************************/
/*! exports provided: VehicleTypeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleTypeListComponent", function() { return VehicleTypeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_vehicle_type_vehicle_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/vehicle-type/vehicle-type.service */ "./src/app/services/vehicle-type/vehicle-type.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VehicleTypeListComponent = /** @class */ (function () {
    function VehicleTypeListComponent(vehicleTypeService, router, route) {
        var _this = this;
        this.vehicleTypeService = vehicleTypeService;
        this.router = router;
        this.route = route;
        this.searchTerm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.vehicleTypeService.selectedVehicleTypeId.subscribe(function (res) {
            _this.selectedVehicleTypeId = res;
        }, function (err) {
        });
    }
    VehicleTypeListComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/vehicleType/add']);
    };
    VehicleTypeListComponent.prototype.searchVehicleTypes = function (search) {
        this.searchTerm.emit(search);
    };
    //On Click of the Add Button
    VehicleTypeListComponent.prototype.createVehicleType = function (mode) {
        this.selectedVehicleTypeId = 0;
        this.vehicleTypeService.selectedMode = mode;
        this.router.navigate(['/vehicleType/add']);
    };
    //On Click of the Edit Button
    VehicleTypeListComponent.prototype.selectVehicleType = function (vehicleType_id, mode) {
        var _this = this;
        this.selectedVehicleTypeId = vehicleType_id;
        this.vehicleTypeService.selectedMode = mode;
        this.router.navigate(['/vehicleType/edit']);
        setTimeout(function () {
            _this.vehicleTypeService.selectedVehicleTypeId.next(vehicleType_id);
        }, 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], VehicleTypeListComponent.prototype, "results$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VehicleTypeListComponent.prototype, "searchTerm", void 0);
    VehicleTypeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehicleType-list',
            template: __webpack_require__(/*! ./vehicle-type-list.component.html */ "./src/app/components/vehicle-type/vehicle-type-list/vehicle-type-list.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-type-list.component.scss */ "./src/app/components/vehicle-type/vehicle-type-list/vehicle-type-list.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_vehicle_type_vehicle_type_service__WEBPACK_IMPORTED_MODULE_3__["VehicleTypeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], VehicleTypeListComponent);
    return VehicleTypeListComponent;
}());



/***/ }),

/***/ "./src/app/components/vehicle-type/vehicle-type-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/vehicle-type/vehicle-type-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: VehicleTypeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleTypeRoutingModule", function() { return VehicleTypeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vehicle_type_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vehicle-type.component */ "./src/app/components/vehicle-type/vehicle-type.component.ts");
/* harmony import */ var _vehicle_type_list_vehicle_type_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicle-type-list/vehicle-type-list.component */ "./src/app/components/vehicle-type/vehicle-type-list/vehicle-type-list.component.ts");
/* harmony import */ var _vehicle_type_form_vehicle_type_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicle-type-form/vehicle-type-form.component */ "./src/app/components/vehicle-type/vehicle-type-form/vehicle-type-form.component.ts");
/* harmony import */ var app_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var vehicleTypeRoutes = [
    {
        path: 'vehicleType',
        canActivate: [app_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _vehicle_type_component__WEBPACK_IMPORTED_MODULE_2__["VehicleTypeComponent"],
        children: [
            { path: 'list', component: _vehicle_type_list_vehicle_type_list_component__WEBPACK_IMPORTED_MODULE_3__["VehicleTypeListComponent"] },
            { path: 'add', component: _vehicle_type_form_vehicle_type_form_component__WEBPACK_IMPORTED_MODULE_4__["VehicleTypeFormComponent"] },
            { path: 'edit', component: _vehicle_type_form_vehicle_type_form_component__WEBPACK_IMPORTED_MODULE_4__["VehicleTypeFormComponent"] }
        ]
    }
];
var VehicleTypeRoutingModule = /** @class */ (function () {
    function VehicleTypeRoutingModule() {
    }
    VehicleTypeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(vehicleTypeRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], VehicleTypeRoutingModule);
    return VehicleTypeRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/vehicle-type/vehicle-type.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/vehicle-type/vehicle-type.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"col-12\">\n    <app-title [title]=title></app-title>\n  </div>\n</header>\n\n<div class=\"row\">\n  <div class=\"col-lg-4\">\n  <app-vehicleType-list (searchTerm)=\"searchVehicleTypes($event)\" [results$]=\"vehicleTypes$\"></app-vehicleType-list>\n  </div>\n  <div class=\"col-lg-8\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/vehicle-type/vehicle-type.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/vehicle-type/vehicle-type.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmVoaWNsZS10eXBlL3ZlaGljbGUtdHlwZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/vehicle-type/vehicle-type.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/vehicle-type/vehicle-type.component.ts ***!
  \*******************************************************************/
/*! exports provided: VehicleTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleTypeComponent", function() { return VehicleTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_vehicle_type_vehicle_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/vehicle-type/vehicle-type.service */ "./src/app/services/vehicle-type/vehicle-type.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VehicleTypeComponent = /** @class */ (function () {
    function VehicleTypeComponent(fb, vehicleTypeService, router, route) {
        this.fb = fb;
        this.vehicleTypeService = vehicleTypeService;
        this.router = router;
        this.route = route;
        this.title = "Vehicle Type";
    }
    VehicleTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getVehicleTypes();
        this.vehicleTypeService.refreshList.subscribe(function (res) {
            _this.getVehicleTypes();
        }, function (err) {
            console.log(err);
        });
    };
    VehicleTypeComponent.prototype.getVehicleTypes = function () {
        this.vehicleTypes$ = this.vehicleTypeService.getVehicleTypes();
    };
    VehicleTypeComponent.prototype.searchVehicleTypes = function (searchTerm) {
        if (searchTerm) {
            this.vehicleTypes$ = this.vehicleTypeService.searchVehicleTypes(searchTerm);
        }
        else {
            this.getVehicleTypes();
            //this.vehicleTypes$ = new EmptyObservable();
        }
    };
    VehicleTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-make',
            template: __webpack_require__(/*! ./vehicle-type.component.html */ "./src/app/components/vehicle-type/vehicle-type.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-type.component.scss */ "./src/app/components/vehicle-type/vehicle-type.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], app_services_vehicle_type_vehicle_type_service__WEBPACK_IMPORTED_MODULE_3__["VehicleTypeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], VehicleTypeComponent);
    return VehicleTypeComponent;
}());



/***/ }),

/***/ "./src/app/components/vehicle-type/vehicle-type.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/vehicle-type/vehicle-type.module.ts ***!
  \****************************************************************/
/*! exports provided: VehicleTypeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleTypeModule", function() { return VehicleTypeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _vehicle_type_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicle-type-routing.module */ "./src/app/components/vehicle-type/vehicle-type-routing.module.ts");
/* harmony import */ var _vehicle_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicle-type.component */ "./src/app/components/vehicle-type/vehicle-type.component.ts");
/* harmony import */ var _vehicle_type_list_vehicle_type_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vehicle-type-list/vehicle-type-list.component */ "./src/app/components/vehicle-type/vehicle-type-list/vehicle-type-list.component.ts");
/* harmony import */ var _vehicle_type_form_vehicle_type_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vehicle-type-form/vehicle-type-form.component */ "./src/app/components/vehicle-type/vehicle-type-form/vehicle-type-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var VehicleTypeModule = /** @class */ (function () {
    function VehicleTypeModule() {
    }
    VehicleTypeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _vehicle_type_routing_module__WEBPACK_IMPORTED_MODULE_3__["VehicleTypeRoutingModule"],
            ],
            declarations: [
                _vehicle_type_component__WEBPACK_IMPORTED_MODULE_4__["VehicleTypeComponent"],
                _vehicle_type_list_vehicle_type_list_component__WEBPACK_IMPORTED_MODULE_5__["VehicleTypeListComponent"],
                _vehicle_type_form_vehicle_type_form_component__WEBPACK_IMPORTED_MODULE_6__["VehicleTypeFormComponent"],
            ],
        })
    ], VehicleTypeModule);
    return VehicleTypeModule;
}());



/***/ }),

/***/ "./src/app/data-model.ts":
/*!*******************************!*\
  !*** ./src/app/data-model.ts ***!
  \*******************************/
/*! exports provided: Make, Model, Variant, VehicleType, FuelType, TransmissionType, Insurance, Expense, Color, Car, Client, TransactionType, TransactionDetails, FileUpload, states */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Make", function() { return Make; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Variant", function() { return Variant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleType", function() { return VehicleType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelType", function() { return FuelType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransmissionType", function() { return TransmissionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Insurance", function() { return Insurance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expense", function() { return Expense; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Car", function() { return Car; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionType", function() { return TransactionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetails", function() { return TransactionDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUpload", function() { return FileUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "states", function() { return states; });
var Make = /** @class */ (function () {
    function Make() {
    }
    return Make;
}());

var Model = /** @class */ (function () {
    function Model() {
    }
    return Model;
}());

var Variant = /** @class */ (function () {
    function Variant() {
    }
    return Variant;
}());

var VehicleType = /** @class */ (function () {
    function VehicleType() {
    }
    return VehicleType;
}());

var FuelType = /** @class */ (function () {
    function FuelType() {
    }
    return FuelType;
}());

var TransmissionType = /** @class */ (function () {
    function TransmissionType() {
    }
    return TransmissionType;
}());

var Insurance = /** @class */ (function () {
    function Insurance() {
    }
    return Insurance;
}());

var Expense = /** @class */ (function () {
    function Expense() {
    }
    return Expense;
}());

var Color = /** @class */ (function () {
    function Color() {
    }
    return Color;
}());

var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());

var Client = /** @class */ (function () {
    function Client() {
        this.is_investor = false;
        this.is_owner = false;
    }
    return Client;
}());

var TransactionType = /** @class */ (function () {
    function TransactionType() {
    }
    return TransactionType;
}());

var TransactionDetails = /** @class */ (function () {
    function TransactionDetails() {
    }
    return TransactionDetails;
}());

var FileUpload = /** @class */ (function () {
    function FileUpload(url) {
        this.url = url;
    }
    return FileUpload;
}());

var states = ['CA', 'MD', 'OH', 'VA'];


/***/ }),

/***/ "./src/app/services/car/car.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/car/car.service.ts ***!
  \*********************************************/
/*! exports provided: CarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarService", function() { return CarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var app_services_upload_file_upload_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/upload-file/upload-file.service */ "./src/app/services/upload-file/upload-file.service.ts");
/* harmony import */ var rxjs_add_observable_from__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/observable/from */ "./node_modules/rxjs-compat/_esm5/add/observable/from.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {environment} from '../../../environments/environment';
var environment = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






var httpOptions = {
    headers: { 'Content-Type': 'application/json' }
};
var CarService = /** @class */ (function () {
    function CarService(http, uploadFileService) {
        this.http = http;
        this.uploadFileService = uploadFileService;
        this.apiUrl = environment.API_URL;
        this.selectedCarId = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](0);
        //sold:Subject<any> = new Subject();
        this.sold = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.selectedMode = "Create";
        this.refreshList = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.refreshCar = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.transactionDetail = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]("");
    }
    CarService.prototype.getCars = function () {
        return this.http.get(this.apiUrl + '/api/cars', { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    CarService.prototype.getAvailableCars = function (filterCars) {
        var _this = this;
        var make = "0";
        var model = "0";
        var variant = "0";
        var vehicle_type = "0";
        var fuel_type = "0";
        var transmission_type = "0";
        if (filterCars.make != null) {
            make = filterCars.make.toString();
        }
        if (filterCars.model != null) {
            model = filterCars.model.toString();
        }
        if (filterCars.variant != null) {
            variant = filterCars.variant.toString();
        }
        if (filterCars.vehicle_type != null) {
            vehicle_type = filterCars.vehicle_type.toString();
        }
        if (filterCars.fuel_type != null) {
            fuel_type = filterCars.fuel_type.toString();
        }
        if (filterCars.transmission_type != null) {
            transmission_type = filterCars.transmission_type.toString();
        }
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json; charset=utf-8',
            }),
            params: { is_sold: filterCars.is_sold.toString(), make: make, model: model, variant: variant, vehicle_type: vehicle_type, fuel_type: fuel_type, transmission_type: transmission_type },
        };
        return this.http.get(this.apiUrl + '/api/available-cars', options)
            .map(function (car) {
            car.forEach(function (c) {
                c.image_urls = [];
                c.selling_price = _this.formatCurrency(c.selling_price);
                _this.fileUploads = _this.uploadFileService.getFiles(c.car_id);
                _this.fileUploads.subscribe(function (res) {
                    c.image_urls = res;
                });
            });
            return car;
        });
    };
    CarService.prototype.getSoldCars = function () {
        return this.http.get(this.apiUrl + '/api/sold-cars', { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    CarService.prototype.getCarById = function (car_id) {
        return this.http.get(this.apiUrl + '/api/cars/' + car_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    CarService.prototype.searchCars = function (searchTerm) {
        return this.http.get(this.apiUrl + '/api/cars/search/' + searchTerm, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    CarService.prototype.createCar = function (newCar) {
        var body = JSON.stringify(newCar);
        return this.http.post(this.apiUrl + '/api/cars', body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    CarService.prototype.updateCar = function (editCar) {
        var body = JSON.stringify(editCar);
        var car_id = editCar.car_id;
        return this.http.put(this.apiUrl + '/api/cars/' + car_id, body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    CarService.prototype.updateTotalCost = function (car) {
        var body = JSON.stringify(car);
        var car_id = car.car_id;
        return this.http.patch(this.apiUrl + '/api/cars/' + car_id, body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .subscribe(function (res) {
        }, function (err) {
            console.log("error here", err);
        }, function () {
            console.log("Completed");
        });
    };
    CarService.prototype.updateTotalIncome = function (car) {
        var body = JSON.stringify(car);
        var car_id = car.car_id;
        return this.http.patch(this.apiUrl + '/api/cars/income/' + car_id, body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .subscribe(function (res) {
            console.log("Total Income of the car is Updated", res);
        }, function (err) {
            console.log("error here", err);
        }, function () {
            console.log("Completed");
        });
    };
    CarService.prototype.deleteCar = function (car_id) {
        return this.http.delete(this.apiUrl + '/api/cars/' + car_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    CarService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    CarService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.message || error);
    };
    CarService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.log(errMsg); // log to console instead
    };
    CarService.prototype.formatCurrency = function (val) {
        var isValid = /^[0-9,.]*$/.test(val);
        if (isValid == true) {
            var x = val.toString().replace(/,/g, "");
            var afterPoint = '';
            if (x.indexOf('.') > 0)
                afterPoint = x.substring(x.indexOf('.'), x.length);
            x = Math.floor(x);
            x = x.toString();
            var lastThree = x.substring(x.length - 3);
            var otherNumbers = x.substring(0, x.length - 3);
            if (otherNumbers != '')
                lastThree = ',' + lastThree;
            var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
            return res;
        }
        else {
            return "";
        }
    };
    CarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], app_services_upload_file_upload_file_service__WEBPACK_IMPORTED_MODULE_6__["UploadFileService"]])
    ], CarService);
    return CarService;
}());



/***/ }),

/***/ "./src/app/services/client/client.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/client/client.service.ts ***!
  \***************************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { environment } from '../../../environments/environment';
var environment = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var httpOptions = {
    headers: { 'Content-Type': 'application/json' }
};
var ClientService = /** @class */ (function () {
    function ClientService(http) {
        this.http = http;
        this.apiUrl = environment.API_URL;
        this.selectedClientId = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.selectedMode = "Create";
        this.refreshList = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.transactionDetail = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]("");
    }
    ClientService.prototype.getClients = function () {
        return this.http.get(this.apiUrl + '/api/clients', { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    ClientService.prototype.getInvestors = function () {
        return this.http.get(this.apiUrl + '/api/investors', { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    ClientService.prototype.getInvestorsExpensesAndPercent = function (car_id) {
        return this.http.get(this.apiUrl + '/api/investors/investorsExpensesAndPercent/' + car_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    ClientService.prototype.getAvailableBalance = function (investor_id) {
        return this.http.get(this.apiUrl + '/api/investors/' + investor_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    ClientService.prototype.updateAvailableBalance = function (investor) {
        var body = JSON.stringify(investor);
        var investor_id = investor.investor_id;
        return this.http.patch(this.apiUrl + '/api/clients/' + investor_id, body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .subscribe(function (res) {
            console.log("Available Balance for the client is updated", res);
        }, function (err) {
            console.log("Error ", err);
        }, function () {
            console.log("Completed");
        });
    };
    ClientService.prototype.updateTotalExpenses = function (investor) {
        var body = JSON.stringify(investor);
        var investor_id = investor.investor_id;
        return this.http.patch(this.apiUrl + '/api/clients/expenses/' + investor_id, body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .subscribe(function (res) {
            console.log("Total Expenses for the client is updated : ", res);
        }, function (err) {
            console.log("Error ", err);
        }, function () {
            console.log("Completed");
        });
    };
    ClientService.prototype.getClientById = function (client_id) {
        return this.http.get(this.apiUrl + '/api/clients/' + client_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    ClientService.prototype.searchClients = function (searchTerm) {
        return this.http.get(this.apiUrl + '/api/clients/search/' + searchTerm, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    ClientService.prototype.createClient = function (newClient) {
        var body = JSON.stringify(newClient);
        return this.http.post(this.apiUrl + '/api/clients', body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    ClientService.prototype.updateClient = function (editClient) {
        var body = JSON.stringify(editClient);
        var client_id = editClient.client_id;
        return this.http.put(this.apiUrl + '/api/clients/' + client_id, body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    ClientService.prototype.deleteClient = function (client_id) {
        return this.http.delete(this.apiUrl + '/api/clients/' + client_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    ClientService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ClientService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.message || error);
    };
    ClientService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.log(errMsg); // log to console instead
    };
    ClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/services/color/color.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/color/color.service.ts ***!
  \*************************************************/
/*! exports provided: ColorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorService", function() { return ColorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { environment } from '../../../environments/environment';
var environment = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");



var httpOptions = {
    headers: { 'Content-Type': 'application/json' }
};
var ColorService = /** @class */ (function () {
    function ColorService(http) {
        this.http = http;
        this.apiUrl = environment.API_URL;
        this.selectedColorId = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.selectedMode = "Create";
        this.refreshList = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ColorService.prototype.getColors = function () {
        return this.http.get(this.apiUrl + '/api/colors', { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    ColorService.prototype.getColorById = function (color_id) {
        return this.http.get(this.apiUrl + '/api/colors/' + color_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    ColorService.prototype.searchColors = function (searchTerm) {
        return this.http.get(this.apiUrl + '/api/colors/search/' + searchTerm, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    ColorService.prototype.createColor = function (newColor) {
        var body = JSON.stringify(newColor);
        return this.http.post(this.apiUrl + '/api/colors', body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    ColorService.prototype.updateColor = function (editColor) {
        var body = JSON.stringify(editColor);
        var color_id = editColor.color_id;
        return this.http.put("http://localhost:3000/api/colors/" + color_id, body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    ColorService.prototype.deleteColor = function (color_id) {
        return this.http.delete(this.apiUrl + '/api/colors/' + color_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    ColorService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ColorService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.message || error);
    };
    ColorService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.log(errMsg); // log to console instead
    };
    ColorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ColorService);
    return ColorService;
}());



/***/ }),

/***/ "./src/app/services/common/common.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/common/common.service.ts ***!
  \***************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: { 'Content-Type': 'application/json' }
};
var CommonService = /** @class */ (function () {
    function CommonService(http) {
        this.http = http;
    }
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/services/expense/expense.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/expense/expense.service.ts ***!
  \*****************************************************/
/*! exports provided: ExpenseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseService", function() { return ExpenseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { environment } from '../../../environments/environment';
var environment = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");



var httpOptions = {
    headers: { 'Content-Type': 'application/json' }
};
var ExpenseService = /** @class */ (function () {
    function ExpenseService(http) {
        this.http = http;
        this.apiUrl = environment.API_URL;
        this.selectedExpenseId = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.selectedMode = "Create";
        this.refreshList = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ExpenseService.prototype.getExpenses = function () {
        return this.http.get(this.apiUrl + '/api/expenses', { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    ExpenseService.prototype.getExpenseById = function (expense_id) {
        return this.http.get(this.apiUrl + '/api/expenses/' + expense_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    ExpenseService.prototype.searchExpenses = function (searchTerm) {
        return this.http.get(this.apiUrl + '/api/expenses/search/' + searchTerm, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    ExpenseService.prototype.createExpense = function (newExpense) {
        var body = JSON.stringify(newExpense);
        return this.http.post(this.apiUrl + '/api/expenses', body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    ExpenseService.prototype.updateExpense = function (editExpense) {
        var body = JSON.stringify(editExpense);
        var expense_id = editExpense.expense_id;
        return this.http.put("http://localhost:3000/api/expenses/" + expense_id, body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    ExpenseService.prototype.deleteExpense = function (expense_id) {
        return this.http.delete(this.apiUrl + '/api/expenses/' + expense_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    ExpenseService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ExpenseService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.message || error);
    };
    ExpenseService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.log(errMsg); // log to console instead
    };
    ExpenseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ExpenseService);
    return ExpenseService;
}());



/***/ }),

/***/ "./src/app/services/fuel-type/fuel-type.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/fuel-type/fuel-type.service.ts ***!
  \*********************************************************/
/*! exports provided: FuelTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelTypeService", function() { return FuelTypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { environment } from '../../../environments/environment';
var environment = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");



var httpOptions = {
    headers: { 'Content-Type': 'application/json' }
};
var FuelTypeService = /** @class */ (function () {
    function FuelTypeService(http) {
        this.http = http;
        this.apiUrl = environment.API_URL;
        this.selectedFuelTypeId = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.selectedMode = "Create";
        this.refreshList = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    FuelTypeService.prototype.getFuelTypes = function () {
        return this.http.get(this.apiUrl + '/api/fuelTypes', { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    FuelTypeService.prototype.getFuelTypeById = function (fuel_type_id) {
        return this.http.get(this.apiUrl + '/api/fuelTypes/' + fuel_type_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    FuelTypeService.prototype.searchFuelTypes = function (searchTerm) {
        return this.http.get(this.apiUrl + '/api/fuelTypes/search/' + searchTerm, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    FuelTypeService.prototype.createFuelType = function (newFuelType) {
        var body = JSON.stringify(newFuelType);
        return this.http.post(this.apiUrl + '/api/fuelTypes', body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    FuelTypeService.prototype.updateFuelType = function (editFuelType) {
        var body = JSON.stringify(editFuelType);
        var fuel_type_id = editFuelType.fuel_type_id;
        return this.http.put("http://localhost:3000/api/fuelTypes/" + fuel_type_id, body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    FuelTypeService.prototype.deleteFuelType = function (fuel_type_id) {
        return this.http.delete(this.apiUrl + '/api/fuelTypes/' + fuel_type_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    FuelTypeService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    FuelTypeService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.message || error);
    };
    FuelTypeService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.log(errMsg); // log to console instead
    };
    FuelTypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FuelTypeService);
    return FuelTypeService;
}());



/***/ }),

/***/ "./src/app/services/insurance/insurance.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/insurance/insurance.service.ts ***!
  \*********************************************************/
/*! exports provided: InsuranceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceService", function() { return InsuranceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { environment } from '../../../environments/environment';
var environment = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");



var httpOptions = {
    headers: { 'Content-Type': 'application/json' }
};
var InsuranceService = /** @class */ (function () {
    function InsuranceService(http) {
        this.http = http;
        this.apiUrl = environment.API_URL;
        this.selectedInsuranceId = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.selectedMode = "Create";
        this.refreshList = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    InsuranceService.prototype.getInsurances = function () {
        return this.http.get(this.apiUrl + '/api/insurances', { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    InsuranceService.prototype.getInsuranceById = function (insurance_id) {
        return this.http.get(this.apiUrl + '/api/insurances/' + insurance_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    InsuranceService.prototype.searchInsurances = function (searchTerm) {
        return this.http.get(this.apiUrl + '/api/insurances/search/' + searchTerm, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    InsuranceService.prototype.createInsurance = function (newInsurance) {
        var body = JSON.stringify(newInsurance);
        return this.http.post(this.apiUrl + '/api/insurances', body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    InsuranceService.prototype.updateInsurance = function (editInsurance) {
        var body = JSON.stringify(editInsurance);
        var insurance_id = editInsurance.insurance_id;
        return this.http.put("http://localhost:3000/api/insurances/" + insurance_id, body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    InsuranceService.prototype.deleteInsurance = function (insurance_id) {
        return this.http.delete(this.apiUrl + '/api/insurances/' + insurance_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    InsuranceService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    InsuranceService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.message || error);
    };
    InsuranceService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.log(errMsg); // log to console instead
    };
    InsuranceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InsuranceService);
    return InsuranceService;
}());



/***/ }),

/***/ "./src/app/services/loader-interceptor.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/loader-interceptor.service.ts ***!
  \********************************************************/
/*! exports provided: LoaderInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptorService", function() { return LoaderInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoaderInterceptorService = /** @class */ (function () {
    function LoaderInterceptorService(loaderService) {
        this.loaderService = loaderService;
    }
    LoaderInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        this.showLoader();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                _this.onEnd();
            }
        }, function (err) {
            _this.onEnd();
        }));
    };
    LoaderInterceptorService.prototype.onEnd = function () {
        this.hideLoader();
    };
    LoaderInterceptorService.prototype.showLoader = function () {
        this.loaderService.show();
    };
    LoaderInterceptorService.prototype.hideLoader = function () {
        this.loaderService.hide();
    };
    LoaderInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], LoaderInterceptorService);
    return LoaderInterceptorService;
}());



/***/ }),

/***/ "./src/app/services/loader.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/loader.service.ts ***!
  \********************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loaderState = this.loaderSubject.asObservable();
    }
    LoaderService.prototype.show = function () {
        this.loaderSubject.next({ show: true });
    };
    LoaderService.prototype.hide = function () {
        this.loaderSubject.next({ show: false });
    };
    LoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/services/make/make.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/make/make.service.ts ***!
  \***********************************************/
/*! exports provided: MakeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeService", function() { return MakeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { environment } from '../../../environments/environment';
var environment = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");



var httpOptions = {
    headers: { 'Content-Type': 'application/json' }
};
var MakeService = /** @class */ (function () {
    function MakeService(http) {
        this.http = http;
        this.apiUrl = environment.API_URL;
        this.selectedMakeId = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.selectedMode = "Create";
        this.refreshList = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    MakeService.prototype.getMakes = function () {
        return this.http.get(this.apiUrl + '/api/makes', { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    MakeService.prototype.getMakeById = function (make_id) {
        return this.http.get(this.apiUrl + '/api/makes/' + make_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    MakeService.prototype.searchMakes = function (searchTerm) {
        return this.http.get(this.apiUrl + '/api/makes/search/' + searchTerm, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    MakeService.prototype.createMake = function (newMake) {
        var body = JSON.stringify(newMake);
        return this.http.post(this.apiUrl + '/api/makes', body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    MakeService.prototype.updateMake = function (editMake) {
        var body = JSON.stringify(editMake);
        var make_id = editMake.make_id;
        return this.http.put(this.apiUrl + '/api/makes/' + make_id, body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    MakeService.prototype.deleteMake = function (make_id) {
        return this.http.delete(this.apiUrl + '/api/makes/' + make_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    MakeService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    MakeService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.message || error);
    };
    MakeService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.log(errMsg); // log to console instead
    };
    MakeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MakeService);
    return MakeService;
}());



/***/ }),

/***/ "./src/app/services/model/model.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/model/model.service.ts ***!
  \*************************************************/
/*! exports provided: ModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelService", function() { return ModelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { environment } from '../../../environments/environment';
var environment = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");



var httpOptions = {
    headers: { 'Content-Type': 'application/json' }
};
var ModelService = /** @class */ (function () {
    function ModelService(http) {
        this.http = http;
        this.apiUrl = environment.API_URL;
        this.selectedModelId = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.selectedMode = "Create";
        this.refreshList = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ModelService.prototype.getModels = function () {
        return this.http.get(this.apiUrl + '/api/models', { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    ModelService.prototype.getModelById = function (model_id) {
        return this.http.get(this.apiUrl + '/api/models/' + model_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    ModelService.prototype.searchModels = function (searchTerm) {
        return this.http.get(this.apiUrl + '/api/models/search/' + searchTerm, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    ModelService.prototype.createModel = function (newModel) {
        var body = JSON.stringify(newModel);
        return this.http.post(this.apiUrl + '/api/models', body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    ModelService.prototype.updateModel = function (editModel) {
        var body = JSON.stringify(editModel);
        var model_id = editModel.model_id;
        return this.http.put("http://localhost:3000/api/models/" + model_id, body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    ModelService.prototype.deleteModel = function (model_id) {
        return this.http.delete(this.apiUrl + '/api/models/' + model_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    ModelService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ModelService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.message || error);
    };
    ModelService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.log(errMsg); // log to console instead
    };
    ModelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ModelService);
    return ModelService;
}());



/***/ }),

/***/ "./src/app/services/transaction-details/transaction-details.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/services/transaction-details/transaction-details.service.ts ***!
  \*****************************************************************************/
/*! exports provided: TransactionDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailsService", function() { return TransactionDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { environment } from '../../../environments/environment';
var environment = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");



// import "rxjs/add/operator/debounceTime";
var httpOptions = {
    headers: { 'Content-Type': 'application/json' }
};
var TransactionDetailsService = /** @class */ (function () {
    function TransactionDetailsService(http) {
        this.http = http;
        this.apiUrl = environment.API_URL;
        this.selectedTransactionDetailsId = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.selectedMode = "Create";
        this.refreshList = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.refreshTD = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    TransactionDetailsService.prototype.getAvailablePoolBalanceAsOfPurchaseDate = function (purchaseDate) {
        return this.http.get(this.apiUrl + '/api/transactionDetails/availablePoolBalance/' + purchaseDate, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    TransactionDetailsService.prototype.getTransactionDetails = function () {
        return this.http.get(this.apiUrl + '/api/transactionDetails', { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    TransactionDetailsService.prototype.GetInvestorsInvestmentAndPercentDetailsByPurchaseDate = function (purchaseDate, soldDate) {
        return this.http.get(this.apiUrl + '/api/transactionDetails/investorsInvestmentDetails/' + purchaseDate + '/' + soldDate, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    TransactionDetailsService.prototype.getTransactionDetailsByInvestor = function (investor_id) {
        var _this = this;
        console.log("getting tran details by investor");
        return this.http.get(this.apiUrl + '/api/transactionDetails/investor/' + investor_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (transaction) {
            transaction.forEach(function (c) {
                if (c.debit != 0 && c.debit != null) {
                    c.debit_formatted = _this.formatCurrencyByVal(c.debit);
                }
                if (c.credit != 0 && c.credit != null) {
                    c.credit_formatted = _this.formatCurrencyByVal(c.credit);
                }
            });
            return transaction;
        });
    };
    TransactionDetailsService.prototype.getTransactionDetailsById = function (car_id) {
        var _this = this;
        return this.http.get(this.apiUrl + '/api/transactionDetails/' + car_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (transaction) {
            transaction.forEach(function (c) {
                if (c.debit != 0 && c.debit != null) {
                    c.debit_formatted = _this.formatCurrencyByVal(c.debit);
                }
                if (c.credit != 0 && c.credit != null) {
                    c.credit_formatted = _this.formatCurrencyByVal(c.credit);
                }
            });
            return transaction;
        }, function (err) {
            console.log("Error getTransactionDetailsById ", err);
        });
    };
    TransactionDetailsService.prototype.getAllTransactionDetailsById = function (car_id) {
        var _this = this;
        return this.http.get(this.apiUrl + '/api/transactionDetails/' + car_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (transaction) {
            transaction.forEach(function (c) {
                if (c.debit != 0 && c.debit != null) {
                    c.debit_formatted = _this.formatCurrencyByVal(c.debit);
                }
                if (c.credit != 0 && c.credit != null) {
                    c.credit_formatted = _this.formatCurrencyByVal(c.credit);
                }
            });
            return transaction;
        }, function (err) {
            console.log("Error getAllTransactionDetailsById ", err);
        });
    };
    // public getTotalInvestmentAndBalanceByCar(car_id:number): Observable<any> {
    //   return this.http.get(this.apiUrl+'/api/transactionDetails/totalInvestmentBalance/'+car_id, {headers: {'Content-Type': 'application/json; charset=utf-8','Cache-Control': 'max-age=604800'}})
    //   .map(res => res);
    // }
    TransactionDetailsService.prototype.getTransactionDetailsBySoldTranType = function (car_id) {
        return this.http.get(this.apiUrl + '/api/transactionDetails/soldTranType/' + car_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    TransactionDetailsService.prototype.getTransactionDetailsByPurchaseTranType = function (car_id) {
        return this.http.get(this.apiUrl + '/api/transactionDetails/purchaseTranType/' + car_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    // public searchTransactionDetailss(searchTerm): Observable<any> {
    //   return this.http.get(this.apiUrl+'/api/transactionDetails/search/'+searchTerm, {headers: {'Content-Type': 'application/json; charset=utf-8','Cache-Control': 'max-age=604800'}})
    //   .map(res => res);
    // }
    TransactionDetailsService.prototype.createTransactionDetails = function (newTransactionDetails) {
        console.log(newTransactionDetails);
        var body = JSON.stringify(newTransactionDetails);
        return this.http.post(this.apiUrl + '/api/transactionDetails', body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    TransactionDetailsService.prototype.createTransactionDetailsForClient = function (newTransactionDetails) {
        console.log(newTransactionDetails);
        var body = JSON.stringify(newTransactionDetails);
        return this.http.post(this.apiUrl + '/api/transactionDetails/client', body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    TransactionDetailsService.prototype.closeAccountAndRefund = function (newTransactionDetails) {
        console.log(newTransactionDetails);
        var body = JSON.stringify(newTransactionDetails);
        return this.http.post(this.apiUrl + '/api/transactionDetails/closeAccountAndRefund', body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    TransactionDetailsService.prototype.createTransactionDetailsProfitAndLoss = function (newTransactionDetails) {
        var body = JSON.stringify(newTransactionDetails);
        return this.http.post(this.apiUrl + '/api/transactionDetails/profitAndLoss', body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    TransactionDetailsService.prototype.updateTransactionDetails = function (editTransactionDetails) {
        var body = JSON.stringify(editTransactionDetails);
        var transaction_details_id = editTransactionDetails.transaction_details_id;
        return this.http.put(this.apiUrl + '/api/transactionDetails/' + transaction_details_id, body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    TransactionDetailsService.prototype.voidTransactionDetails = function (transactionDetails) {
        var body = JSON.stringify(transactionDetails);
        var transaction_details_id = transactionDetails.transaction_details_id;
        return this.http.put(this.apiUrl + '/api/transactionDetails/void/' + transaction_details_id, body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    TransactionDetailsService.prototype.deleteTransactionDetails = function (transaction_details_id) {
        return this.http.delete(this.apiUrl + '/api/transactionDetails/' + transaction_details_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    TransactionDetailsService.prototype.deleteTransactionDetailsByTransactionType = function (transaction_type_id) {
        return this.http.delete(this.apiUrl + '/api/transactionDetails/transactionType/' + transaction_type_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    TransactionDetailsService.prototype.deleteProfitOrLossTransactionDetails = function (car_id) {
        // const investorsDetails = JSON.stringify(investorsExpensesAndPercent);
        // let options = {
        //   headers: new HttpHeaders({
        //     'Content-Type': 'application/json; charset=utf-8',
        //   }),
        //   body: investorsDetails,
        // };
        return this.http.delete(this.apiUrl + '/api/transactionDetails/deleteProfitOrLoss/' + car_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    TransactionDetailsService.prototype.formatCurrencyByVal = function (val) {
        var val1 = '' + val;
        var x = val1.replace(/,/g, "");
        var afterPoint = '';
        if (x.indexOf('.') > 0)
            afterPoint = x.substring(x.indexOf('.'), x.length);
        x = Math.floor(parseInt(x)).toString();
        //x=x.toString();
        var lastThree = x.substring(x.length - 3);
        var otherNumbers = x.substring(0, x.length - 3);
        if (otherNumbers != '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
        return res;
    };
    TransactionDetailsService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    TransactionDetailsService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.message || error);
    };
    TransactionDetailsService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.log(errMsg); // log to console instead
    };
    TransactionDetailsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TransactionDetailsService);
    return TransactionDetailsService;
}());



/***/ }),

/***/ "./src/app/services/transaction-type/transaction-type.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/transaction-type/transaction-type.service.ts ***!
  \***********************************************************************/
/*! exports provided: TransactionTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionTypeService", function() { return TransactionTypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { environment } from '../../../environments/environment';
var environment = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");



var httpOptions = {
    headers: { 'Content-Type': 'application/json' }
};
var TransactionTypeService = /** @class */ (function () {
    function TransactionTypeService(http) {
        this.http = http;
        this.apiUrl = environment.API_URL;
        this.selectedTransactionTypeId = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.selectedMode = "Create";
        this.refreshList = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    TransactionTypeService.prototype.getTransactionTypes = function () {
        return this.http.get(this.apiUrl + '/api/transactionTypes', { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    TransactionTypeService.prototype.getTransactionTypesForClient = function () {
        return this.http.get(this.apiUrl + '/api/transactionTypes/client', { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    TransactionTypeService.prototype.getTransactionTypeById = function (transaction_type_id) {
        return this.http.get(this.apiUrl + '/api/transactionTypes/' + transaction_type_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    TransactionTypeService.prototype.searchTransactionTypes = function (searchTerm) {
        return this.http.get(this.apiUrl + '/api/transactionTypes/search/' + searchTerm, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    TransactionTypeService.prototype.createTransactionType = function (newTransactionType) {
        var body = JSON.stringify(newTransactionType);
        return this.http.post(this.apiUrl + '/api/transactionTypes', body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    TransactionTypeService.prototype.updateTransactionType = function (editTransactionType) {
        var body = JSON.stringify(editTransactionType);
        var transaction_type_id = editTransactionType.transaction_type_id;
        return this.http.put("http://localhost:3000/api/transactionTypes/" + transaction_type_id, body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    TransactionTypeService.prototype.deleteTransactionType = function (transaction_type_id) {
        return this.http.delete(this.apiUrl + '/api/transactionTypes/' + transaction_type_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    TransactionTypeService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    TransactionTypeService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.message || error);
    };
    TransactionTypeService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.log(errMsg); // log to console instead
    };
    TransactionTypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TransactionTypeService);
    return TransactionTypeService;
}());



/***/ }),

/***/ "./src/app/services/transmission-type/transmission-type.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/services/transmission-type/transmission-type.service.ts ***!
  \*************************************************************************/
/*! exports provided: TransmissionTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransmissionTypeService", function() { return TransmissionTypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { environment } from '../../../environments/environment';
var environment = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");



var httpOptions = {
    headers: { 'Content-Type': 'application/json' }
};
var TransmissionTypeService = /** @class */ (function () {
    function TransmissionTypeService(http) {
        this.http = http;
        this.apiUrl = environment.API_URL;
        this.selectedTransmissionTypeId = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.selectedMode = "Create";
        this.refreshList = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    TransmissionTypeService.prototype.getTransmissionTypes = function () {
        return this.http.get(this.apiUrl + '/api/transmissionTypes', { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    TransmissionTypeService.prototype.getTransmissionTypeById = function (transmission_type_id) {
        return this.http.get(this.apiUrl + '/api/transmissionTypes/' + transmission_type_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    TransmissionTypeService.prototype.searchTransmissionTypes = function (searchTerm) {
        return this.http.get(this.apiUrl + '/api/transmissionTypes/search/' + searchTerm, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    TransmissionTypeService.prototype.createTransmissionType = function (newTransmissionType) {
        var body = JSON.stringify(newTransmissionType);
        return this.http.post(this.apiUrl + '/api/transmissionTypes', body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    TransmissionTypeService.prototype.updateTransmissionType = function (editTransmissionType) {
        var body = JSON.stringify(editTransmissionType);
        var transmission_type_id = editTransmissionType.transmission_type_id;
        return this.http.put("http://localhost:3000/api/transmissionTypes/" + transmission_type_id, body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    TransmissionTypeService.prototype.deleteTransmissionType = function (transmission_type_id) {
        return this.http.delete(this.apiUrl + '/api/transmissionTypes/' + transmission_type_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    TransmissionTypeService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    TransmissionTypeService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.message || error);
    };
    TransmissionTypeService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.log(errMsg); // log to console instead
    };
    TransmissionTypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TransmissionTypeService);
    return TransmissionTypeService;
}());



/***/ }),

/***/ "./src/app/services/upload-file/upload-file.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/upload-file/upload-file.service.ts ***!
  \*************************************************************/
/*! exports provided: UploadFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileService", function() { return UploadFileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-sdk/clients/s3 */ "./node_modules/aws-sdk/clients/s3.js");
/* harmony import */ var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var _data_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data-model */ "./src/app/data-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UploadFileService = /** @class */ (function () {
    function UploadFileService() {
        this.BUCKET = "gear2gear";
        this.FOLDER = 'default';
    }
    UploadFileService.prototype.getFiles = function (folder) {
        var fileUploads = new Array();
        this.FOLDER = folder + '/';
        var params = {
            Bucket: this.BUCKET,
            Prefix: this.FOLDER
        };
        var bucket = new aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__({
            accessKeyId: 'AKIAJS73LQ3ABHAU3Z6Q',
            secretAccessKey: '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',
            region: 'us-east-1'
        });
        bucket.listObjects(params, function (err, data) {
            if (err) {
                console.log('There was an error getting your files: ' + err);
                return;
            }
            console.log('Successfully get files.', data);
            var fileDatas = data.Contents;
            var baseURL = "https://s3.amazonaws.com/gear2gear/";
            fileDatas.forEach(function (file) {
                fileUploads.push(new _data_model__WEBPACK_IMPORTED_MODULE_4__["FileUpload"](baseURL + file.Key));
            });
        });
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(fileUploads);
    };
    UploadFileService.prototype.uploadfile = function (file, folder) {
        this.FOLDER = folder + '/';
        var bucket = new aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__({
            accessKeyId: 'AKIAJS73LQ3ABHAU3Z6Q',
            secretAccessKey: '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',
            region: 'us-east-1'
        });
        var extn = file.name.split('.').pop();
        var contentType = 'application/octet-stream';
        if (extn == 'html')
            contentType = "text/html";
        if (extn == 'css')
            contentType = "text/css";
        if (extn == 'js')
            contentType = "application/javascript";
        if (extn == 'png' || extn == 'jpg' || extn == 'gif')
            contentType = "image/" + extn;
        var params = {
            Bucket: 'gear2gear',
            Key: this.FOLDER + file.name,
            Body: file,
            ContentType: contentType
        };
        bucket.upload(params, function (err, data) {
            if (err) {
                console.log('There was an error uploading your file: ', err);
                return false;
            }
            console.log('Successfully uploaded file.', data);
            return true;
        });
    };
    UploadFileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UploadFileService);
    return UploadFileService;
}());



/***/ }),

/***/ "./src/app/services/validation/validation.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/validation/validation.service.ts ***!
  \***********************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'Required',
            'minlength': "Minimum length " + validatorValue.requiredLength,
            'maxlength': "Maximum length " + validatorValue.requiredLength,
            'email': 'Invalid email address',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
        };
        return config[validatorName];
    };
    ValidationService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    ValidationService.formatCurrency = function (val) {
        //var val = control.value;
        var x = val.replace(/,/g, "");
        var afterPoint = '';
        if (x.indexOf('.') > 0)
            afterPoint = x.substring(x.indexOf('.'), x.length);
        x = Math.floor(x);
        x = x.toString();
        var lastThree = x.substring(x.length - 3);
        var otherNumbers = x.substring(0, x.length - 3);
        if (otherNumbers != '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
        return res;
    };
    ValidationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidationService);
    return ValidationService;
}());



/***/ }),

/***/ "./src/app/services/variant/variant.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/variant/variant.service.ts ***!
  \*****************************************************/
/*! exports provided: VariantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantService", function() { return VariantService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { environment } from '../../../environments/environment';
var environment = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");



var httpOptions = {
    headers: { 'Content-Type': 'application/json' }
};
var VariantService = /** @class */ (function () {
    function VariantService(http) {
        this.http = http;
        this.apiUrl = environment.API_URL;
        this.selectedVariantId = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.selectedMode = "Create";
        this.refreshList = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    VariantService.prototype.getVariants = function () {
        return this.http.get(this.apiUrl + '/api/variants', { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    VariantService.prototype.getVariantById = function (variant_id) {
        return this.http.get(this.apiUrl + '/api/variants/' + variant_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    VariantService.prototype.searchVariants = function (searchTerm) {
        return this.http.get(this.apiUrl + '/api/variants/search/' + searchTerm, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    VariantService.prototype.createVariant = function (newVariant) {
        var body = JSON.stringify(newVariant);
        return this.http.post(this.apiUrl + '/api/variants', body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    VariantService.prototype.updateVariant = function (editVariant) {
        var body = JSON.stringify(editVariant);
        var variant_id = editVariant.variant_id;
        return this.http.put("http://localhost:3000/api/variants/" + variant_id, body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    VariantService.prototype.deleteVariant = function (variant_id) {
        return this.http.delete(this.apiUrl + '/api/variants/' + variant_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    VariantService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    VariantService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.message || error);
    };
    VariantService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.log(errMsg); // log to console instead
    };
    VariantService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VariantService);
    return VariantService;
}());



/***/ }),

/***/ "./src/app/services/vehicle-type/vehicle-type.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/vehicle-type/vehicle-type.service.ts ***!
  \***************************************************************/
/*! exports provided: VehicleTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleTypeService", function() { return VehicleTypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { environment } from '../../../environments/environment';
var environment = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");



var httpOptions = {
    headers: { 'Content-Type': 'application/json' }
};
var VehicleTypeService = /** @class */ (function () {
    function VehicleTypeService(http) {
        this.http = http;
        this.apiUrl = environment.API_URL;
        this.selectedVehicleTypeId = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.selectedMode = "Create";
        this.refreshList = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    VehicleTypeService.prototype.getVehicleTypes = function () {
        return this.http.get(this.apiUrl + '/api/vehicleTypes', { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    VehicleTypeService.prototype.getVehicleTypeById = function (vehicle_type_id) {
        return this.http.get(this.apiUrl + '/api/vehicleTypes/' + vehicle_type_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    VehicleTypeService.prototype.searchVehicleTypes = function (searchTerm) {
        return this.http.get(this.apiUrl + '/api/vehicleTypes/search/' + searchTerm, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    VehicleTypeService.prototype.createVehicleType = function (newVehicleType) {
        var body = JSON.stringify(newVehicleType);
        return this.http.post(this.apiUrl + '/api/vehicleTypes', body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    VehicleTypeService.prototype.updateVehicleType = function (editVehicleType) {
        var body = JSON.stringify(editVehicleType);
        var vehicle_type_id = editVehicleType.vehicle_type_id;
        return this.http.put("http://localhost:3000/api/vehicleTypes/" + vehicle_type_id, body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    VehicleTypeService.prototype.deleteVehicleType = function (vehicle_type_id) {
        return this.http.delete(this.apiUrl + '/api/vehicleTypes/' + vehicle_type_id, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'max-age=604800' } })
            .map(function (res) { return res; });
    };
    VehicleTypeService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    VehicleTypeService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.message || error);
    };
    VehicleTypeService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.log(errMsg); // log to console instead
    };
    VehicleTypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VehicleTypeService);
    return VehicleTypeService;
}());



/***/ }),

/***/ "./src/app/shared/control-messages/control-messages.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/shared/control-messages/control-messages.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"color:red; font-weight:bolder; font-size:14px\" *ngIf=\"errorMessage !== null\">{{errorMessage}}</p>\n"

/***/ }),

/***/ "./src/app/shared/control-messages/control-messages.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/shared/control-messages/control-messages.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb250cm9sLW1lc3NhZ2VzL2NvbnRyb2wtbWVzc2FnZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/control-messages/control-messages.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/control-messages/control-messages.component.ts ***!
  \***********************************************************************/
/*! exports provided: ControlMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlMessagesComponent", function() { return ControlMessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_services_validation_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/validation/validation.service */ "./src/app/services/validation/validation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControlMessagesComponent = /** @class */ (function () {
    function ControlMessagesComponent() {
    }
    ControlMessagesComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(ControlMessagesComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                //if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                if (this.control.errors.hasOwnProperty(propertyName)) {
                    return app_services_validation_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"].getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"])
    ], ControlMessagesComponent.prototype, "control", void 0);
    ControlMessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-control-messages',
            template: __webpack_require__(/*! ./control-messages.component.html */ "./src/app/shared/control-messages/control-messages.component.html"),
            styles: [__webpack_require__(/*! ./control-messages.component.scss */ "./src/app/shared/control-messages/control-messages.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ControlMessagesComponent);
    return ControlMessagesComponent;
}());



/***/ }),

/***/ "./src/app/shared/modals/simple-modal/simple-modal.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/modals/simple-modal/simple-modal.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button type=\"button\" *ngIf=\"mode != 'Close'\" class=\"btn btn-danger waves-light btn-md\" (click)=\"style.show()\" mdbWavesEffect><i class=\"fa fa-trash\"></i></button>\n<button *ngIf=\"mode == 'Close'\" class=\"btn btn-danger btn-md\" (click)=\"style.show()\" mdbWavesEffect>\n  Close Account & Refund\n</button>\n<div mdbModal #style=\"mdb-modal\" class=\"modal fade\" id=\"centralModalSuccess\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-notify modal-danger\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <p class=\"heading lead capitalize\">{{mode}} {{module}}</p>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"style.hide()\">\n                    <span id=\"linkid\" aria-hidden=\"true\" class=\"white-text\">×</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"text-center\">\n                    <i class=\"fa fa-check fa-4x mb-3 animated rotateIn\"></i>\n                    <p>Are you sure you want to {{mode}} {{module}} {{name}}?</p>\n                </div>\n            </div>\n            <div class=\"modal-footer justify-content-center\">\n                <a type=\"button\" class=\"btn btn-danger waves-light\" mdbWavesEffect (click)=\"delete()\">Yes</a>\n                <a type=\"button\" class=\"btn btn-outline-secondary\" data-dismiss=\"modal\" (click)=\"style.hide()\" mdbWavesEffect>No, thanks</a>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/modals/simple-modal/simple-modal.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/modals/simple-modal/simple-modal.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2RhbHMvc2ltcGxlLW1vZGFsL3NpbXBsZS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/modals/simple-modal/simple-modal.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/modals/simple-modal/simple-modal.component.ts ***!
  \**********************************************************************/
/*! exports provided: SimpleModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleModalComponent", function() { return SimpleModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SimpleModalComponent = /** @class */ (function () {
    function SimpleModalComponent() {
        // @ViewChild('content') public contentModal;
        this.module = "";
        this.mode = "";
        this.name = "";
        this.isDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SimpleModalComponent.prototype.ngOnInit = function () {
    };
    SimpleModalComponent.prototype.delete = function () {
        this.isDelete.emit(true);
        document.getElementById('linkid').click();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SimpleModalComponent.prototype, "module", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SimpleModalComponent.prototype, "mode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SimpleModalComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SimpleModalComponent.prototype, "isDelete", void 0);
    SimpleModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-simple-modal',
            template: __webpack_require__(/*! ./simple-modal.component.html */ "./src/app/shared/modals/simple-modal/simple-modal.component.html"),
            styles: [__webpack_require__(/*! ./simple-modal.component.scss */ "./src/app/shared/modals/simple-modal/simple-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleModalComponent);
    return SimpleModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/search/search.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/search/search.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-bottom:25px\">\n   <div class=\"col-10\"><input type=\"text\" id=\"Form-email1\" class=\"form-control\" [formControl]=\"searchTerm\"></div>\n   <div class=\"col-2\">  <button class=\"btn-custom col-12 text-center pointer\" type=\"button\" (click)=create()>\n     <i class=\"fa fa-plus nm-left3\"></i>\n   </button></div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/search/search.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/search/search.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/search/search.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/search/search.component.ts ***!
  \***************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.searchTerm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.searchTermValueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SearchComponent.prototype.valueChanged = function () {
        var _this = this;
        this.searchTerm.valueChanges
            //  .debounceTime(400)
            //    .distinctUntilChanged()
            .subscribe(function (val) {
            _this.searchTermValueChanged.emit(val);
        });
    };
    SearchComponent.prototype.create = function () {
        this.isCreate.emit(true);
    };
    SearchComponent.prototype.ngOnInit = function () {
        this.valueChanged();
        // .debounceTime(400)
        // .distinctUntilChanged()
        // .switchMap( value => this.makeService.searchMakes(value))
        // .subscribe(res => {
        //   console.log("ress in search comp ",res);
        // });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "searchTermValueChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "isCreate", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/shared/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/shared/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./title/title.component */ "./src/app/shared/title/title.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search/search.component */ "./src/app/shared/search/search.component.ts");
/* harmony import */ var _control_messages_control_messages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./control-messages/control-messages.component */ "./src/app/shared/control-messages/control-messages.component.ts");
/* harmony import */ var _modals_simple_modal_simple_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modals/simple-modal/simple-modal.component */ "./src/app/shared/modals/simple-modal/simple-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatButtonModule, MatCheckboxModule} from '@angular/material';





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                // DlDateTimePickerDateModule,
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot(),
                // BrowserAnimationsModule,
                // MatButtonModule,
                // MatCheckboxModule,
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            ],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                // DlDateTimePickerDateModule,
                _title_title_component__WEBPACK_IMPORTED_MODULE_5__["TitleComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"],
                _modals_simple_modal_simple_modal_component__WEBPACK_IMPORTED_MODULE_8__["SimpleModalComponent"],
                _control_messages_control_messages_component__WEBPACK_IMPORTED_MODULE_7__["ControlMessagesComponent"],
            ],
            declarations: [
                _title_title_component__WEBPACK_IMPORTED_MODULE_5__["TitleComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"],
                _modals_simple_modal_simple_modal_component__WEBPACK_IMPORTED_MODULE_8__["SimpleModalComponent"],
                _control_messages_control_messages_component__WEBPACK_IMPORTED_MODULE_7__["ControlMessagesComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/title/title.component.html":
/*!***************************************************!*\
  !*** ./src/app/shared/title/title.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 title\">\n  <h5>{{title}}</h5>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/title/title.component.scss":
/*!***************************************************!*\
  !*** ./src/app/shared/title/title.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  color: #43464B;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin: 25px 0px 25px 0px;\n  border-bottom: 1px solid #E5E7E7;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb3VqYW55YS9Eb2N1bWVudHMvQ2xvbmVkLVJlcG8vZ2VhcjJnZWFyL3NyYy9hcHAvc2hhcmVkL3RpdGxlL3RpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvdGl0bGUvdGl0bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XG4gIGNvbG9yOiM0MzQ2NEI7XG4gIHBhZGRpbmctdG9wOjVweDtcbiAgcGFkZGluZy1ib3R0b206NXB4O1xuICBtYXJnaW46IDI1cHggMHB4IDI1cHggMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U1RTdFNztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/title/title.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/title/title.component.ts ***!
  \*************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TitleComponent = /** @class */ (function () {
    function TitleComponent() {
        this.title = " ";
    }
    TitleComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TitleComponent.prototype, "title", void 0);
    TitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-title',
            template: __webpack_require__(/*! ./title.component.html */ "./src/app/shared/title/title.component.html"),
            styles: [__webpack_require__(/*! ./title.component.scss */ "./src/app/shared/title/title.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TitleComponent);
    return TitleComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    CONNECTION_STRING: 'postgres://localhost:5432/postgres',
    DATABASE_URL: 'postgres://localhost:5432/postgres',
    API_URL: 'http://localhost:3000',
    SSL: false,
    // ORIGIN: 'http://localhost:4200', //use this origin for local
    ORIGIN: 'http://www.gear2gear.in',
};

//module.exports =  environment;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);



// import { environment } from './environments/environment';
var environment = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");

if (environment.production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .then(function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('ngsw-worker.js');
    }
})
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/soujanya/Documents/Cloned-Repo/gear2gear/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
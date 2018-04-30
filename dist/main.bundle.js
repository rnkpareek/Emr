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

/***/ "./src/app/app-routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var login_component_1 = __webpack_require__("./src/app/dashboard/components/login/login.component.ts");
var dashboard_component_1 = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var registration_component_1 = __webpack_require__("./src/app/dashboard/components/registration/registration.component.ts");
exports.routes = [
    { path: '', component: login_component_1.LoginComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'registration', component: registration_component_1.RegistrationComponent }
    /*{path:'dashboard',component:CoreComponent,canActivate:[AuthService]}*/
    /*{ path: 'admin', loadChildren: 'app/dashboard/admin/admin.module#AdminModule',data: { preload: true } }*/
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(exports.routes)],
            exports: [router_1.RouterModule],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var angular_admin_lte_1 = __webpack_require__("./node_modules/angular-admin-lte/angular-admin-lte.es5.js"); //Loading layout module
var angular_admin_lte_2 = __webpack_require__("./node_modules/angular-admin-lte/angular-admin-lte.es5.js"); //Box component
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var core_component_1 = __webpack_require__("./src/app/dashboard/components/core/core.component.ts");
var login_component_1 = __webpack_require__("./src/app/dashboard/components/login/login.component.ts");
var app_routing_1 = __webpack_require__("./src/app/app-routing.ts");
var dashboard_component_1 = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
//etc
var ngx_toastr_1 = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
//services
var Authservice_1 = __webpack_require__("./src/app/service/Authservice.ts");
var authenticate_module_1 = __webpack_require__("./src/app/auth/authenticate.module.ts");
var registration_component_1 = __webpack_require__("./src/app/dashboard/components/registration/registration.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                core_component_1.CoreComponent,
                login_component_1.LoginComponent,
                dashboard_component_1.DashboardComponent,
                registration_component_1.RegistrationComponent
            ],
            imports: [
                platform_browser_1.BrowserModule, angular_admin_lte_1.LayoutModule, angular_admin_lte_2.BoxModule, app_routing_1.AppRoutingModule, http_1.HttpModule, ngx_toastr_1.ToastrModule.forRoot(), authenticate_module_1.AuthModule
            ],
            providers: [Authservice_1.AuthService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/auth/authenticate.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var angular2_jwt_1 = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
function authHttpServiceFactory(_http, options) {
    return new angular2_jwt_1.AuthHttp(new angular2_jwt_1.AuthConfig({
        tokenName: 'token',
        headerPrefix: 'Bearer:',
        tokenGetter: (function () { return localStorage.getItem('apiToken'); }),
        globalHeaders: [{ 'Content-Type': 'application/json' }],
    }), _http, options);
}
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            providers: [
                {
                    provide: angular2_jwt_1.AuthHttp,
                    useFactory: authHttpServiceFactory,
                    deps: [http_1.Http, http_1.RequestOptions]
                }
            ]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./src/app/dashboard/components/core/core.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/components/core/core.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"wrapper\">\n\n  <header class=\"main-header\">\n\n    Logo\n    <a href=\"index2.html\" class=\"logo\">\n      mini logo for sidebar mini 50x50 pixels\n      <span class=\"logo-mini\"><b>A</b>LT</span>\n      logo for regular state and mobile devices\n      <span class=\"logo-lg\"><b>Admin</b>LTE</span>\n    </a>\n\n    Header Navbar: style can be found in header.less\n    <nav class=\"navbar navbar-static-top\">\n      Sidebar toggle button\n      <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\n        <span class=\"sr-only\">Toggle navigation</span>\n      </a>\n      Navbar Right Menu\n      <div class=\"navbar-custom-menu\">\n        <ul class=\"nav navbar-nav\">\n          Messages: style can be found in dropdown.less\n          <li class=\"dropdown messages-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-envelope-o\"></i>\n              <span class=\"label label-success\">4</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li class=\"header\">You have 4 messages</li>\n              <li>\n                inner menu: contains the actual data\n                <ul class=\"menu\">\n                  <li>start message\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Support Team\n                        <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  end message\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"dist/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        AdminLTE Design Team\n                        <small><i class=\"fa fa-clock-o\"></i> 2 hours</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"dist/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Developers\n                        <small><i class=\"fa fa-clock-o\"></i> Today</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"dist/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Sales Department\n                        <small><i class=\"fa fa-clock-o\"></i> Yesterday</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"dist/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Reviewers\n                        <small><i class=\"fa fa-clock-o\"></i> 2 days</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"footer\"><a href=\"#\">See All Messages</a></li>\n            </ul>\n          </li>\n          Notifications: style can be found in dropdown.less\n          <li class=\"dropdown notifications-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-bell-o\"></i>\n              <span class=\"label label-warning\">10</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li class=\"header\">You have 10 notifications</li>\n              <li>\n                inner menu: contains the actual data\n                <ul class=\"menu\">\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-warning text-yellow\"></i> Very long description here that may not fit into the\n                      page and may cause design problems\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-users text-red\"></i> 5 new members joined\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-shopping-cart text-green\"></i> 25 sales made\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-user text-red\"></i> You changed your username\n                    </a>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"footer\"><a href=\"#\">View all</a></li>\n            </ul>\n          </li>\n          Tasks: style can be found in dropdown.less\n          <li class=\"dropdown tasks-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-flag-o\"></i>\n              <span class=\"label label-danger\">9</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li class=\"header\">You have 9 tasks</li>\n              <li>\n                inner menu: contains the actual data\n                <ul class=\"menu\">\n                  <li>Task item\n                    <a href=\"#\">\n                      <h3>\n                        Design some buttons\n                        <small class=\"pull-right\">20%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\"\n                             aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                          <span class=\"sr-only\">20% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  end task item\n                  <li>Task item\n                    <a href=\"#\">\n                      <h3>\n                        Create a nice theme\n                        <small class=\"pull-right\">40%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-green\" style=\"width: 40%\" role=\"progressbar\"\n                             aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                          <span class=\"sr-only\">40% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  end task item\n                  <li>Task item\n                    <a href=\"#\">\n                      <h3>\n                        Some task I need to do\n                        <small class=\"pull-right\">60%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-red\" style=\"width: 60%\" role=\"progressbar\"\n                             aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                          <span class=\"sr-only\">60% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  end task item\n                  <li>Task item\n                    <a href=\"#\">\n                      <h3>\n                        Make beautiful transitions\n                        <small class=\"pull-right\">80%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-yellow\" style=\"width: 80%\" role=\"progressbar\"\n                             aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                          <span class=\"sr-only\">80% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  end task item\n                </ul>\n              </li>\n              <li class=\"footer\">\n                <a href=\"#\">View all tasks</a>\n              </li>\n            </ul>\n          </li>\n          User Account: style can be found in dropdown.less\n          <li class=\"dropdown user user-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <img src=\"dist/img/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\n              <span class=\"hidden-xs\">Alexander Pierce</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              User image\n              <li class=\"user-header\">\n                <img src=\"dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n\n                <p>\n                  Alexander Pierce - Web Developer\n                  <small>Member since Nov. 2012</small>\n                </p>\n              </li>\n              Menu Body\n              <li class=\"user-body\">\n                <div class=\"row\">\n                  <div class=\"col-xs-4 text-center\">\n                    <a href=\"#\">Followers</a>\n                  </div>\n                  <div class=\"col-xs-4 text-center\">\n                    <a href=\"#\">Sales</a>\n                  </div>\n                  <div class=\"col-xs-4 text-center\">\n                    <a href=\"#\">Friends</a>\n                  </div>\n                </div>\n                /.row\n              </li>\n              Menu Footer\n              <li class=\"user-footer\">\n                <div class=\"pull-left\">\n                  <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\n                </div>\n                <div class=\"pull-right\">\n                  <a href=\"#\" class=\"btn btn-default btn-flat\">Sign out</a>\n                </div>\n              </li>\n            </ul>\n          </li>\n          Control Sidebar Toggle Button\n          <li>\n            <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>\n          </li>\n        </ul>\n      </div>\n\n    </nav>\n  </header>\n  Left side column. contains the logo and sidebar\n  <aside class=\"main-sidebar\">\n    sidebar: style can be found in sidebar.less\n    <section class=\"sidebar\">\n      Sidebar user panel\n      <div class=\"user-panel\">\n        <div class=\"pull-left image\">\n          <img src=\"dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n        </div>\n        <div class=\"pull-left info\">\n          <p>Alexander Pierce</p>\n          <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n        </div>\n      </div>\n      search form\n      <form action=\"#\" method=\"get\" class=\"sidebar-form\">\n        <div class=\"input-group\">\n          <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\n          <span class=\"input-group-btn\">\n                <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\">\n                  <i class=\"fa fa-search\"></i>\n                </button>\n              </span>\n        </div>\n      </form>\n      /.search form\n      sidebar menu: : style can be found in sidebar.less\n      <ul class=\"sidebar-menu\" data-widget=\"tree\">\n        <li class=\"header\">MAIN NAVIGATION</li>\n        <li class=\"active treeview menu-open\">\n          <a href=\"#\">\n            <i class=\"fa fa-dashboard\"></i> <span>Dashboard</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a href=\"index.html\"><i class=\"fa fa-circle-o\"></i> Dashboard v1</a></li>\n            <li class=\"active\"><a href=\"index2.html\"><i class=\"fa fa-circle-o\"></i> Dashboard v2</a></li>\n          </ul>\n        </li>\n        <li class=\"treeview\">\n          <a href=\"#\">\n            <i class=\"fa fa-files-o\"></i>\n            <span>Layout Options</span>\n            <span class=\"pull-right-container\">\n              <span class=\"label label-primary pull-right\">4</span>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a href=\"pages/layout/top-nav.html\"><i class=\"fa fa-circle-o\"></i> Top Navigation</a></li>\n            <li><a href=\"pages/layout/boxed.html\"><i class=\"fa fa-circle-o\"></i> Boxed</a></li>\n            <li><a href=\"pages/layout/fixed.html\"><i class=\"fa fa-circle-o\"></i> Fixed</a></li>\n            <li><a href=\"pages/layout/collapsed-sidebar.html\"><i class=\"fa fa-circle-o\"></i> Collapsed Sidebar</a></li>\n          </ul>\n        </li>\n        <li>\n          <a href=\"pages/widgets.html\">\n            <i class=\"fa fa-th\"></i> <span>Widgets</span>\n            <span class=\"pull-right-container\">\n              <small class=\"label pull-right bg-green\">new</small>\n            </span>\n          </a>\n        </li>\n        <li class=\"treeview\">\n          <a href=\"#\">\n            <i class=\"fa fa-pie-chart\"></i>\n            <span>Charts</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a href=\"pages/charts/chartjs.html\"><i class=\"fa fa-circle-o\"></i> ChartJS</a></li>\n            <li><a href=\"pages/charts/morris.html\"><i class=\"fa fa-circle-o\"></i> Morris</a></li>\n            <li><a href=\"pages/charts/flot.html\"><i class=\"fa fa-circle-o\"></i> Flot</a></li>\n            <li><a href=\"pages/charts/inline.html\"><i class=\"fa fa-circle-o\"></i> Inline charts</a></li>\n          </ul>\n        </li>\n        <li class=\"treeview\">\n          <a href=\"#\">\n            <i class=\"fa fa-laptop\"></i>\n            <span>UI Elements</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a href=\"pages/UI/general.html\"><i class=\"fa fa-circle-o\"></i> General</a></li>\n            <li><a href=\"pages/UI/icons.html\"><i class=\"fa fa-circle-o\"></i> Icons</a></li>\n            <li><a href=\"pages/UI/buttons.html\"><i class=\"fa fa-circle-o\"></i> Buttons</a></li>\n            <li><a href=\"pages/UI/sliders.html\"><i class=\"fa fa-circle-o\"></i> Sliders</a></li>\n            <li><a href=\"pages/UI/timeline.html\"><i class=\"fa fa-circle-o\"></i> Timeline</a></li>\n            <li><a href=\"pages/UI/modals.html\"><i class=\"fa fa-circle-o\"></i> Modals</a></li>\n          </ul>\n        </li>\n        <li class=\"treeview\">\n          <a href=\"#\">\n            <i class=\"fa fa-edit\"></i> <span>Forms</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a href=\"pages/forms/general.html\"><i class=\"fa fa-circle-o\"></i> General Elements</a></li>\n            <li><a href=\"pages/forms/advanced.html\"><i class=\"fa fa-circle-o\"></i> Advanced Elements</a></li>\n            <li><a href=\"pages/forms/editors.html\"><i class=\"fa fa-circle-o\"></i> Editors</a></li>\n          </ul>\n        </li>\n        <li class=\"treeview\">\n          <a href=\"#\">\n            <i class=\"fa fa-table\"></i> <span>Tables</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a href=\"pages/tables/simple.html\"><i class=\"fa fa-circle-o\"></i> Simple tables</a></li>\n            <li><a href=\"pages/tables/data.html\"><i class=\"fa fa-circle-o\"></i> Data tables</a></li>\n          </ul>\n        </li>\n        <li>\n          <a href=\"pages/calendar.html\">\n            <i class=\"fa fa-calendar\"></i> <span>Calendar</span>\n            <span class=\"pull-right-container\">\n              <small class=\"label pull-right bg-red\">3</small>\n              <small class=\"label pull-right bg-blue\">17</small>\n            </span>\n          </a>\n        </li>\n        <li>\n          <a href=\"pages/mailbox/mailbox.html\">\n            <i class=\"fa fa-envelope\"></i> <span>Mailbox</span>\n            <span class=\"pull-right-container\">\n              <small class=\"label pull-right bg-yellow\">12</small>\n              <small class=\"label pull-right bg-green\">16</small>\n              <small class=\"label pull-right bg-red\">5</small>\n            </span>\n          </a>\n        </li>\n        <li class=\"treeview\">\n          <a href=\"#\">\n            <i class=\"fa fa-folder\"></i> <span>Examples</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a href=\"pages/examples/invoice.html\"><i class=\"fa fa-circle-o\"></i> Invoice</a></li>\n            <li><a href=\"pages/examples/profile.html\"><i class=\"fa fa-circle-o\"></i> Profile</a></li>\n            <li><a href=\"pages/examples/login.html\"><i class=\"fa fa-circle-o\"></i> Login</a></li>\n            <li><a href=\"pages/examples/register.html\"><i class=\"fa fa-circle-o\"></i> Register</a></li>\n            <li><a href=\"pages/examples/lockscreen.html\"><i class=\"fa fa-circle-o\"></i> Lockscreen</a></li>\n            <li><a href=\"pages/examples/404.html\"><i class=\"fa fa-circle-o\"></i> 404 Error</a></li>\n            <li><a href=\"pages/examples/500.html\"><i class=\"fa fa-circle-o\"></i> 500 Error</a></li>\n            <li><a href=\"pages/examples/blank.html\"><i class=\"fa fa-circle-o\"></i> Blank Page</a></li>\n            <li><a href=\"pages/examples/pace.html\"><i class=\"fa fa-circle-o\"></i> Pace Page</a></li>\n          </ul>\n        </li>\n        <li class=\"treeview\">\n          <a href=\"#\">\n            <i class=\"fa fa-share\"></i> <span>Multilevel</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One</a></li>\n            <li class=\"treeview\">\n              <a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One\n                <span class=\"pull-right-container\">\n                  <i class=\"fa fa-angle-left pull-right\"></i>\n                </span>\n              </a>\n              <ul class=\"treeview-menu\">\n                <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Two</a></li>\n                <li class=\"treeview\">\n                  <a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Two\n                    <span class=\"pull-right-container\">\n                      <i class=\"fa fa-angle-left pull-right\"></i>\n                    </span>\n                  </a>\n                  <ul class=\"treeview-menu\">\n                    <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Three</a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Three</a></li>\n                  </ul>\n                </li>\n              </ul>\n            </li>\n            <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One</a></li>\n          </ul>\n        </li>\n        <li><a href=\"https://adminlte.io/docs\"><i class=\"fa fa-book\"></i> <span>Documentation</span></a></li>\n        <li class=\"header\">LABELS</li>\n        <li><a href=\"#\"><i class=\"fa fa-circle-o text-red\"></i> <span>Important</span></a></li>\n        <li><a href=\"#\"><i class=\"fa fa-circle-o text-yellow\"></i> <span>Warning</span></a></li>\n        <li><a href=\"#\"><i class=\"fa fa-circle-o text-aqua\"></i> <span>Information</span></a></li>\n      </ul>\n    </section>\n    /.sidebar\n  </aside>\n\n  Content Wrapper. Contains page content\n  <div class=\"content-wrapper\">\n    Content Header (Page header)\n    <section class=\"content-header\">\n      <h1>\n        Dashboard\n        <small>Version 2.0</small>\n      </h1>\n      <ol class=\"breadcrumb\">\n        <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n        <li class=\"active\">Dashboard</li>\n      </ol>\n    </section>\n\n    Main content\n    <section class=\"content\">\n      Info boxes\n      <div class=\"row\">\n        <div class=\"col-md-3 col-sm-6 col-xs-12\">\n          <div class=\"info-box\">\n            <span class=\"info-box-icon bg-aqua\"><i class=\"ion ion-ios-gear-outline\"></i></span>\n\n            <div class=\"info-box-content\">\n              <span class=\"info-box-text\">CPU Traffic</span>\n              <span class=\"info-box-number\">90<small>%</small></span>\n            </div>\n            /.info-box-content\n          </div>\n          /.info-box\n        </div>\n        /.col\n        <div class=\"col-md-3 col-sm-6 col-xs-12\">\n          <div class=\"info-box\">\n            <span class=\"info-box-icon bg-red\"><i class=\"fa fa-google-plus\"></i></span>\n\n            <div class=\"info-box-content\">\n              <span class=\"info-box-text\">Likes</span>\n              <span class=\"info-box-number\">41,410</span>\n            </div>\n            /.info-box-content\n          </div>\n          /.info-box\n        </div>\n        /.col\n\n        fix for small devices only\n        <div class=\"clearfix visible-sm-block\"></div>\n\n        <div class=\"col-md-3 col-sm-6 col-xs-12\">\n          <div class=\"info-box\">\n            <span class=\"info-box-icon bg-green\"><i class=\"ion ion-ios-cart-outline\"></i></span>\n\n            <div class=\"info-box-content\">\n              <span class=\"info-box-text\">Sales</span>\n              <span class=\"info-box-number\">760</span>\n            </div>\n            /.info-box-content\n          </div>\n          /.info-box\n        </div>\n        /.col\n        <div class=\"col-md-3 col-sm-6 col-xs-12\">\n          <div class=\"info-box\">\n            <span class=\"info-box-icon bg-yellow\"><i class=\"ion ion-ios-people-outline\"></i></span>\n\n            <div class=\"info-box-content\">\n              <span class=\"info-box-text\">New Members</span>\n              <span class=\"info-box-number\">2,000</span>\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </section>\n\n\n\n\n\n\n  Control Sidebar\n  <aside class=\"control-sidebar control-sidebar-dark\">\n    Create the tabs\n    <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\n      <li><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\n      <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>\n    </ul>\n    Tab panes\n    <div class=\"tab-content\">\n      Home tab content\n      <div class=\"tab-pane\" id=\"control-sidebar-home-tab\">\n        <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\n        <ul class=\"control-sidebar-menu\">\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\n\n                <p>Will be 23 on April 24th</p>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-user bg-yellow\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Frodo Updated His Profile</h4>\n\n                <p>New phone +1(800)555-1234</p>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-envelope-o bg-light-blue\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Nora Joined Mailing List</h4>\n\n                <p>nora@example.com</p>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-file-code-o bg-green\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Cron Job 254 Executed</h4>\n\n                <p>Execution time 5 seconds</p>\n              </div>\n            </a>\n          </li>\n        </ul>\n        /.control-sidebar-menu\n\n        <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\n        <ul class=\"control-sidebar-menu\">\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Custom Template Design\n                <span class=\"label label-danger pull-right\">70%</span>\n              </h4>\n\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Update Resume\n                <span class=\"label label-success pull-right\">95%</span>\n              </h4>\n\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-success\" style=\"width: 95%\"></div>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Laravel Integration\n                <span class=\"label label-warning pull-right\">50%</span>\n              </h4>\n\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-warning\" style=\"width: 50%\"></div>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Back End Framework\n                <span class=\"label label-primary pull-right\">68%</span>\n              </h4>\n\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-primary\" style=\"width: 68%\"></div>\n              </div>\n            </a>\n          </li>\n        </ul>\n        /.control-sidebar-menu\n\n      </div>\n      /.tab-pane\n\n      Settings tab content\n      <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\n        <form method=\"post\">\n          <h3 class=\"control-sidebar-heading\">General Settings</h3>\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Report panel usage\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n            <p>\n              Some information about this general settings option\n            </p>\n          </div>\n          /.form-group\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Allow mail redirect\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n            <p>\n              Other sets of options are available\n            </p>\n          </div>\n          /.form-group\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Expose author name in posts\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n            <p>\n              Allow the user to show his name in blog posts\n            </p>\n          </div>\n          /.form-group\n\n          <h3 class=\"control-sidebar-heading\">Chat Settings</h3>\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Show me as online\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n          </div>\n          /.form-group\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Turn off notifications\n              <input type=\"checkbox\" class=\"pull-right\">\n            </label>\n          </div>\n          /.form-group\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Delete chat history\n              <a href=\"javascript:void(0)\" class=\"text-red pull-right\"><i class=\"fa fa-trash-o\"></i></a>\n            </label>\n          </div>\n          /.form-group\n        </form>\n      </div>\n      /.tab-pane\n    </div>\n  </aside>\n  /.control-sidebar\n  Add the sidebar's background. This div must be placed\n       immediately after the control sidebar\n  <div class=\"control-sidebar-bg\"></div>\n\n</div>\n./wrapper\n -->\n\n\n <header class=\"main-header\">\n\n    <!-- Logo -->\n    <a href=\"index2.html\" class=\"logo\">\n      <!-- mini logo for sidebar mini 50x50 pixels -->\n      <span class=\"logo-mini\"><b>A</b>LT</span>\n      <!-- logo for regular state and mobile devices -->\n      <span class=\"logo-lg\"><b>Admin</b>LTE</span>\n    </a>\n\n    <!-- Header Navbar: style can be found in header.less -->\n    <nav class=\"navbar navbar-static-top\">\n      <!-- Sidebar toggle button-->\n      <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\n        <span class=\"sr-only\">Toggle navigation</span>\n      </a>\n      <!-- Navbar Right Menu -->\n      <div class=\"navbar-custom-menu\">\n        <ul class=\"nav navbar-nav\">\n          <!-- Messages: style can be found in dropdown.less-->\n          <li class=\"dropdown messages-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-envelope-o\"></i>\n              <span class=\"label label-success\">4</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li class=\"header\">You have 4 messages</li>\n              <li>\n                <!-- inner menu: contains the actual data -->\n                <ul class=\"menu\">\n                  <li><!-- start message -->\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Support Team\n                        <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  <!-- end message -->\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"dist/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        AdminLTE Design Team\n                        <small><i class=\"fa fa-clock-o\"></i> 2 hours</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"dist/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Developers\n                        <small><i class=\"fa fa-clock-o\"></i> Today</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"dist/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Sales Department\n                        <small><i class=\"fa fa-clock-o\"></i> Yesterday</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"dist/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Reviewers\n                        <small><i class=\"fa fa-clock-o\"></i> 2 days</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"footer\"><a href=\"#\">See All Messages</a></li>\n            </ul>\n          </li>\n          <!-- Notifications: style can be found in dropdown.less -->\n          <li class=\"dropdown notifications-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-bell-o\"></i>\n              <span class=\"label label-warning\">10</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li class=\"header\">You have 10 notifications</li>\n              <li>\n                <!-- inner menu: contains the actual data -->\n                <ul class=\"menu\">\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-warning text-yellow\"></i> Very long description here that may not fit into the\n                      page and may cause design problems\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-users text-red\"></i> 5 new members joined\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-shopping-cart text-green\"></i> 25 sales made\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-user text-red\"></i> You changed your username\n                    </a>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"footer\"><a href=\"#\">View all</a></li>\n            </ul>\n          </li>\n          <!-- Tasks: style can be found in dropdown.less -->\n          <li class=\"dropdown tasks-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-flag-o\"></i>\n              <span class=\"label label-danger\">9</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li class=\"header\">You have 9 tasks</li>\n              <li>\n                <!-- inner menu: contains the actual data -->\n                <ul class=\"menu\">\n                  <li><!-- Task item -->\n                    <a href=\"#\">\n                      <h3>\n                        Design some buttons\n                        <small class=\"pull-right\">20%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\"\n                             aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                          <span class=\"sr-only\">20% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  <!-- end task item -->\n                  <li><!-- Task item -->\n                    <a href=\"#\">\n                      <h3>\n                        Create a nice theme\n                        <small class=\"pull-right\">40%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-green\" style=\"width: 40%\" role=\"progressbar\"\n                             aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                          <span class=\"sr-only\">40% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  <!-- end task item -->\n                  <li><!-- Task item -->\n                    <a href=\"#\">\n                      <h3>\n                        Some task I need to do\n                        <small class=\"pull-right\">60%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-red\" style=\"width: 60%\" role=\"progressbar\"\n                             aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                          <span class=\"sr-only\">60% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  <!-- end task item -->\n                  <li><!-- Task item -->\n                    <a href=\"#\">\n                      <h3>\n                        Make beautiful transitions\n                        <small class=\"pull-right\">80%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-yellow\" style=\"width: 80%\" role=\"progressbar\"\n                             aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                          <span class=\"sr-only\">80% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  <!-- end task item -->\n                </ul>\n              </li>\n              <li class=\"footer\">\n                <a href=\"#\">View all tasks</a>\n              </li>\n            </ul>\n          </li>\n          <!-- User Account: style can be found in dropdown.less -->\n          <li class=\"dropdown user user-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <img src=\"dist/img/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\n              <span class=\"hidden-xs\">Alexander Pierce</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <!-- User image -->\n              <li class=\"user-header\">\n                <img src=\"dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n\n                <p>\n                  Alexander Pierce - Web Developer\n                  <small>Member since Nov. 2012</small>\n                </p>\n              </li>\n              <!-- Menu Body -->\n              <li class=\"user-body\">\n                <div class=\"row\">\n                  <div class=\"col-xs-4 text-center\">\n                    <a href=\"#\">Followers</a>\n                  </div>\n                  <div class=\"col-xs-4 text-center\">\n                    <a href=\"#\">Sales</a>\n                  </div>\n                  <div class=\"col-xs-4 text-center\">\n                    <a href=\"#\">Friends</a>\n                  </div>\n                </div>\n                <!-- /.row -->\n              </li>\n              <!-- Menu Footer-->\n              <li class=\"user-footer\">\n                <div class=\"pull-left\">\n                  <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\n                </div>\n                <div class=\"pull-right\">\n                  <a href=\"#\" class=\"btn btn-default btn-flat\">Sign out</a>\n                </div>\n              </li>\n            </ul>\n          </li>\n          <!-- Control Sidebar Toggle Button -->\n          <li>\n            <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>\n          </li>\n        </ul>\n      </div>\n\n    </nav>\n  </header>\n  <!-- Left side column. contains the logo and sidebar -->\n  <aside class=\"main-sidebar\">\n    <!-- sidebar: style can be found in sidebar.less -->\n    <section class=\"sidebar\">\n      <!-- Sidebar user panel -->\n      <div class=\"user-panel\">\n        <div class=\"pull-left image\">\n          <img src=\"dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n        </div>\n        <div class=\"pull-left info\">\n          <p>Alexander Pierce</p>\n          <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n        </div>\n      </div>\n      <!-- search form -->\n      <form action=\"#\" method=\"get\" class=\"sidebar-form\">\n        <div class=\"input-group\">\n          <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\n          <span class=\"input-group-btn\">\n                <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\">\n                  <i class=\"fa fa-search\"></i>\n                </button>\n              </span>\n        </div>\n      </form>\n      <!-- /.search form -->\n      <!-- sidebar menu: : style can be found in sidebar.less -->\n      <ul class=\"sidebar-menu\" data-widget=\"tree\">\n        <li class=\"header\">MAIN NAVIGATION</li>\n        <li class=\"active treeview menu-open\">\n          <a href=\"#\">\n            <i class=\"fa fa-dashboard\"></i> <span>Dashboard</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a href=\"index.html\"><i class=\"fa fa-circle-o\"></i> Dashboard v1</a></li>\n            <li class=\"active\"><a href=\"index2.html\"><i class=\"fa fa-circle-o\"></i> Dashboard v2</a></li>\n          </ul>\n        </li>\n        <li class=\"treeview\">\n          <a href=\"#\">\n            <i class=\"fa fa-files-o\"></i>\n            <span>Layout Options</span>\n            <span class=\"pull-right-container\">\n              <span class=\"label label-primary pull-right\">4</span>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a href=\"pages/layout/top-nav.html\"><i class=\"fa fa-circle-o\"></i> Top Navigation</a></li>\n            <li><a href=\"pages/layout/boxed.html\"><i class=\"fa fa-circle-o\"></i> Boxed</a></li>\n            <li><a href=\"pages/layout/fixed.html\"><i class=\"fa fa-circle-o\"></i> Fixed</a></li>\n            <li><a href=\"pages/layout/collapsed-sidebar.html\"><i class=\"fa fa-circle-o\"></i> Collapsed Sidebar</a></li>\n          </ul>\n        </li>\n        <li>\n          <a href=\"pages/widgets.html\">\n            <i class=\"fa fa-th\"></i> <span>Widgets</span>\n            <span class=\"pull-right-container\">\n              <small class=\"label pull-right bg-green\">new</small>\n            </span>\n          </a>\n        </li>\n        <li class=\"treeview\">\n          <a href=\"#\">\n            <i class=\"fa fa-pie-chart\"></i>\n            <span>Charts</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a href=\"pages/charts/chartjs.html\"><i class=\"fa fa-circle-o\"></i> ChartJS</a></li>\n            <li><a href=\"pages/charts/morris.html\"><i class=\"fa fa-circle-o\"></i> Morris</a></li>\n            <li><a href=\"pages/charts/flot.html\"><i class=\"fa fa-circle-o\"></i> Flot</a></li>\n            <li><a href=\"pages/charts/inline.html\"><i class=\"fa fa-circle-o\"></i> Inline charts</a></li>\n          </ul>\n        </li>\n        <li class=\"treeview\">\n          <a href=\"#\">\n            <i class=\"fa fa-laptop\"></i>\n            <span>UI Elements</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a href=\"pages/UI/general.html\"><i class=\"fa fa-circle-o\"></i> General</a></li>\n            <li><a href=\"pages/UI/icons.html\"><i class=\"fa fa-circle-o\"></i> Icons</a></li>\n            <li><a href=\"pages/UI/buttons.html\"><i class=\"fa fa-circle-o\"></i> Buttons</a></li>\n            <li><a href=\"pages/UI/sliders.html\"><i class=\"fa fa-circle-o\"></i> Sliders</a></li>\n            <li><a href=\"pages/UI/timeline.html\"><i class=\"fa fa-circle-o\"></i> Timeline</a></li>\n            <li><a href=\"pages/UI/modals.html\"><i class=\"fa fa-circle-o\"></i> Modals</a></li>\n          </ul>\n        </li>\n        <li class=\"treeview\">\n          <a href=\"#\">\n            <i class=\"fa fa-edit\"></i> <span>Forms</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a href=\"pages/forms/general.html\"><i class=\"fa fa-circle-o\"></i> General Elements</a></li>\n            <li><a href=\"pages/forms/advanced.html\"><i class=\"fa fa-circle-o\"></i> Advanced Elements</a></li>\n            <li><a href=\"pages/forms/editors.html\"><i class=\"fa fa-circle-o\"></i> Editors</a></li>\n          </ul>\n        </li>\n        <li class=\"treeview\">\n          <a href=\"#\">\n            <i class=\"fa fa-table\"></i> <span>Tables</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a href=\"pages/tables/simple.html\"><i class=\"fa fa-circle-o\"></i> Simple tables</a></li>\n            <li><a href=\"pages/tables/data.html\"><i class=\"fa fa-circle-o\"></i> Data tables</a></li>\n          </ul>\n        </li>\n        <li>\n          <a href=\"pages/calendar.html\">\n            <i class=\"fa fa-calendar\"></i> <span>Calendar</span>\n            <span class=\"pull-right-container\">\n              <small class=\"label pull-right bg-red\">3</small>\n              <small class=\"label pull-right bg-blue\">17</small>\n            </span>\n          </a>\n        </li>\n        <li>\n          <a href=\"pages/mailbox/mailbox.html\">\n            <i class=\"fa fa-envelope\"></i> <span>Mailbox</span>\n            <span class=\"pull-right-container\">\n              <small class=\"label pull-right bg-yellow\">12</small>\n              <small class=\"label pull-right bg-green\">16</small>\n              <small class=\"label pull-right bg-red\">5</small>\n            </span>\n          </a>\n        </li>\n        <li class=\"treeview\">\n          <a href=\"#\">\n            <i class=\"fa fa-folder\"></i> <span>Examples</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a href=\"pages/examples/invoice.html\"><i class=\"fa fa-circle-o\"></i> Invoice</a></li>\n            <li><a href=\"pages/examples/profile.html\"><i class=\"fa fa-circle-o\"></i> Profile</a></li>\n            <li><a href=\"pages/examples/login.html\"><i class=\"fa fa-circle-o\"></i> Login</a></li>\n            <li><a href=\"pages/examples/register.html\"><i class=\"fa fa-circle-o\"></i> Register</a></li>\n            <li><a href=\"pages/examples/lockscreen.html\"><i class=\"fa fa-circle-o\"></i> Lockscreen</a></li>\n            <li><a href=\"pages/examples/404.html\"><i class=\"fa fa-circle-o\"></i> 404 Error</a></li>\n            <li><a href=\"pages/examples/500.html\"><i class=\"fa fa-circle-o\"></i> 500 Error</a></li>\n            <li><a href=\"pages/examples/blank.html\"><i class=\"fa fa-circle-o\"></i> Blank Page</a></li>\n            <li><a href=\"pages/examples/pace.html\"><i class=\"fa fa-circle-o\"></i> Pace Page</a></li>\n          </ul>\n        </li>\n        <li class=\"treeview\">\n          <a href=\"#\">\n            <i class=\"fa fa-share\"></i> <span>Multilevel</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One</a></li>\n            <li class=\"treeview\">\n              <a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One\n                <span class=\"pull-right-container\">\n                  <i class=\"fa fa-angle-left pull-right\"></i>\n                </span>\n              </a>\n              <ul class=\"treeview-menu\">\n                <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Two</a></li>\n                <li class=\"treeview\">\n                  <a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Two\n                    <span class=\"pull-right-container\">\n                      <i class=\"fa fa-angle-left pull-right\"></i>\n                    </span>\n                  </a>\n                  <ul class=\"treeview-menu\">\n                    <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Three</a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Three</a></li>\n                  </ul>\n                </li>\n              </ul>\n            </li>\n            <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One</a></li>\n          </ul>\n        </li>\n        <li><a href=\"https://adminlte.io/docs\"><i class=\"fa fa-book\"></i> <span>Documentation</span></a></li>\n        <li class=\"header\">LABELS</li>\n        <li><a href=\"#\"><i class=\"fa fa-circle-o text-red\"></i> <span>Important</span></a></li>\n        <li><a href=\"#\"><i class=\"fa fa-circle-o text-yellow\"></i> <span>Warning</span></a></li>\n        <li><a href=\"#\"><i class=\"fa fa-circle-o text-aqua\"></i> <span>Information</span></a></li>\n      </ul>\n    </section>\n    <!-- /.sidebar -->\n  </aside>\n\n  <!-- Content Wrapper. Contains page content -->\n  <div class=\"content-wrapper\">\n    <!-- Content Header (Page header) -->\n    <section class=\"content-header\">\n      <h1>\n        Dashboard\n        <small>Version 2.0</small>\n      </h1>\n      <ol class=\"breadcrumb\">\n        <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n        <li class=\"active\">Dashboard</li>\n      </ol>\n    </section>\n\n   <!--  Main content\n   <section class=\"content\">\n     Info boxes\n     <div class=\"row\">\n       <div class=\"col-md-3 col-sm-6 col-xs-12\">\n         <div class=\"info-box\">\n           <span class=\"info-box-icon bg-aqua\"><i class=\"ion ion-ios-gear-outline\"></i></span>\n\n           <div class=\"info-box-content\">\n             <span class=\"info-box-text\">CPU Traffic</span>\n             <span class=\"info-box-number\">90<small>%</small></span>\n           </div>\n           /.info-box-content\n         </div>\n         /.info-box\n       </div>\n       /.col\n       <div class=\"col-md-3 col-sm-6 col-xs-12\">\n         <div class=\"info-box\">\n           <span class=\"info-box-icon bg-red\"><i class=\"fa fa-google-plus\"></i></span>\n\n           <div class=\"info-box-content\">\n             <span class=\"info-box-text\">Likes</span>\n             <span class=\"info-box-number\">41,410</span>\n           </div>\n           /.info-box-content\n         </div>\n         /.info-box\n       </div>\n       /.col\n\n       fix for small devices only\n       <div class=\"clearfix visible-sm-block\"></div>\n\n       <div class=\"col-md-3 col-sm-6 col-xs-12\">\n         <div class=\"info-box\">\n           <span class=\"info-box-icon bg-green\"><i class=\"ion ion-ios-cart-outline\"></i></span>\n\n           <div class=\"info-box-content\">\n             <span class=\"info-box-text\">Sales</span>\n             <span class=\"info-box-number\">760</span>\n           </div>\n           /.info-box-content\n         </div>\n         /.info-box\n       </div>\n       /.col\n       <div class=\"col-md-3 col-sm-6 col-xs-12\">\n         <div class=\"info-box\">\n           <span class=\"info-box-icon bg-yellow\"><i class=\"ion ion-ios-people-outline\"></i></span>\n\n           <div class=\"info-box-content\">\n             <span class=\"info-box-text\">New Members</span>\n             <span class=\"info-box-number\">2,000</span>\n           </div>\n\n         </div>\n\n       </div>\n\n     </div>\n   </section> -->\n"

/***/ }),

/***/ "./src/app/dashboard/components/core/core.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var CoreComponent = /** @class */ (function () {
    function CoreComponent() {
    }
    CoreComponent.prototype.ngOnInit = function () {
    };
    CoreComponent = __decorate([
        core_1.Component({
            selector: 'app-core',
            template: __webpack_require__("./src/app/dashboard/components/core/core.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/components/core/core.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CoreComponent);
    return CoreComponent;
}());
exports.CoreComponent = CoreComponent;


/***/ }),

/***/ "./src/app/dashboard/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "form {\n  border: 3px solid #f1f1f1;\n\n}\n\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nbutton {\n  background-color: #4CAF50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n}\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: 700;\n  color: white;\n}\n\nbody {\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #333;\n  background-color: #fff;\n  height: 651px;\n  margin-top: -62px;\n}\n\nbutton:hover {\n  opacity: 0.8;\n}\n\n.cancelbtn {\n  width: auto;\n  padding: 10px 18px;\n  background-color: #f44336;\n}\n\n.imgcontainer {\n  text-align: center;\n  margin: 24px 0 12px 0;\n}\n\nimg.avatar {\n  width: 40%;\n  border-radius: 50%;\n}\n\n.container {\n  padding: 16px;\n  margin-top: 62px;\n}\n\n.header1{\n  color: red;\n  margin-left: 385px;\n  font-weight: bold;\n}\n\nspan.psw {\n  float: right;\n  padding-top: 16px;\n}\n\nform[_ngcontent-c1][_ngcontent-c1] {\n  background: #00000070;\n  border: 3px solid #5c5a5d;\n  border-radius: 29px;\n  padding: 34px;\n}\n\n/* Change styles for span and cancel button on extra small screens */\n\n@media screen and (max-width: 300px) {\n  span.psw {\n    display: block;\n    float: none;\n  }\n  .cancelbtn {\n    width: 100%;\n  }\n}\n"

/***/ }),

/***/ "./src/app/dashboard/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<body background=\"../../../assets/images/background.jpeg\">\n<div class=\"container\">\n  <h1 class=\"header1\"><img src=\"../../../assets/images/logo.jpg\"></h1>\n  <div class=\"col-md-6 col-md-offset-3\">\n    <form class=\"form-signin\" (submit)=\"login($event, email.value, password.value)\" >\n      <h1 style=\"color: white\">Sign in</h1>\n      <div class=\"form-group\">\n        <label for=\"email\">Username</label>\n        <input type=\"text\" #email class=\"form-control\" id=\"email\"\n               placeholder=\"Username\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" #password class=\"form-control\" id=\"password\"\n               placeholder=\"Password\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-lg btn-primary\">Sign In</button>\n      <!-- <button type=\"button\" class=\"btn btn-lg btn-primary\"><a  style=\"color: white\" href=\"#\" [routerLink]=\"['/register']\">Sign Up</a></button>-->\n      <a [routerLink]=\"['/resetpassword']\">Forgot Password</a>\n    </form>\n  </div>\n</div>\n<router-outlet></router-outlet>\n</body>\n"

/***/ }),

/***/ "./src/app/dashboard/components/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ngx_toastr_1 = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var Authservice_1 = __webpack_require__("./src/app/service/Authservice.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, toastr, authService) {
        this.router = router;
        this.toastr = toastr;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        /* this.auth_verified = this.authService.useJwtHelper();
     
         //const auth_verified = this.authService.useJwtHelper();
         console.log('auth_verified:::::' + this.auth_verified);
         if (this.auth_verified) {
           console.log('moved to dashboard page.....')
           this.router.navigateByUrl('/dashboard');
         }*/
    };
    LoginComponent.prototype.login = function (event, email, password) {
        if (email && password != null) {
            console.log("not null");
            this.router.navigateByUrl('/dashboard');
            /* event.preventDefault();
             this.dataservice.login(email, password)
               .subscribe(response => {
                 if(response.save === true){
                   localStorage.apiToken=response.token
                   this.router.navigate(['/dashboard']);
                   this.showSuccess();
                 }
                 else if(response.save === false){
                   this.showError();
                   console.log("password or user not matching 11")
                 }
                 }, this.handleError);*/
        }
        else {
            console.log("password or user not matching");
        }
    };
    LoginComponent.prototype.handleError = function (error) {
        console.log(error.status);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/dashboard/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router, ngx_toastr_1.ToastrService, Authservice_1.AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/dashboard/components/registration/registration.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/components/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>heloooooooooooooooo</h1>\n"

/***/ }),

/***/ "./src/app/dashboard/components/registration/registration.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent() {
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'app-registration',
            template: __webpack_require__("./src/app/dashboard/components/registration/registration.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/components/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-core></app-core>\n -->\n\n <div class=\"wrapper\">\n\n  <header class=\"main-header\">\n\n    <!-- Logo -->\n    <a href=\"index2.html\" class=\"logo\">\n      <!-- mini logo for sidebar mini 50x50 pixels -->\n      <span class=\"logo-mini\"><b>A</b>LT</span>\n      <!-- logo for regular state and mobile devices -->\n      <span class=\"logo-lg\"><b>Admin</b>LTE</span>\n    </a>\n\n    <!-- Header Navbar: style can be found in header.less -->\n    <nav class=\"navbar navbar-static-top\">\n      <!-- Sidebar toggle button-->\n      <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\n        <span class=\"sr-only\">Toggle navigation</span>\n      </a>\n      <!-- Navbar Right Menu -->\n      <div class=\"navbar-custom-menu\">\n        <ul class=\"nav navbar-nav\">\n          <!-- Messages: style can be found in dropdown.less-->\n          <li class=\"dropdown messages-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-envelope-o\"></i>\n              <span class=\"label label-success\">4</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li class=\"header\">You have 4 messages</li>\n              <li>\n                <!-- inner menu: contains the actual data -->\n                <ul class=\"menu\">\n                  <li><!-- start message -->\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Support Team\n                        <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  <!-- end message -->\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"dist/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        AdminLTE Design Team\n                        <small><i class=\"fa fa-clock-o\"></i> 2 hours</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"dist/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Developers\n                        <small><i class=\"fa fa-clock-o\"></i> Today</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"dist/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Sales Department\n                        <small><i class=\"fa fa-clock-o\"></i> Yesterday</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"dist/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Reviewers\n                        <small><i class=\"fa fa-clock-o\"></i> 2 days</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"footer\"><a href=\"#\">See All Messages</a></li>\n            </ul>\n          </li>\n          <!-- Notifications: style can be found in dropdown.less -->\n          <li class=\"dropdown notifications-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-bell-o\"></i>\n              <span class=\"label label-warning\">10</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li class=\"header\">You have 10 notifications</li>\n              <li>\n                <!-- inner menu: contains the actual data -->\n                <ul class=\"menu\">\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-warning text-yellow\"></i> Very long description here that may not fit into the\n                      page and may cause design problems\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-users text-red\"></i> 5 new members joined\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-shopping-cart text-green\"></i> 25 sales made\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-user text-red\"></i> You changed your username\n                    </a>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"footer\"><a href=\"#\">View all</a></li>\n            </ul>\n          </li>\n          <!-- Tasks: style can be found in dropdown.less -->\n          <li class=\"dropdown tasks-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-flag-o\"></i>\n              <span class=\"label label-danger\">9</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li class=\"header\">You have 9 tasks</li>\n              <li>\n                <!-- inner menu: contains the actual data -->\n                <ul class=\"menu\">\n                  <li><!-- Task item -->\n                    <a href=\"#\">\n                      <h3>\n                        Design some buttons\n                        <small class=\"pull-right\">20%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\"\n                             aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                          <span class=\"sr-only\">20% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  <!-- end task item -->\n                  <li><!-- Task item -->\n                    <a href=\"#\">\n                      <h3>\n                        Create a nice theme\n                        <small class=\"pull-right\">40%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-green\" style=\"width: 40%\" role=\"progressbar\"\n                             aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                          <span class=\"sr-only\">40% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  <!-- end task item -->\n                  <li><!-- Task item -->\n                    <a href=\"#\">\n                      <h3>\n                        Some task I need to do\n                        <small class=\"pull-right\">60%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-red\" style=\"width: 60%\" role=\"progressbar\"\n                             aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                          <span class=\"sr-only\">60% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  <!-- end task item -->\n                  <li><!-- Task item -->\n                    <a href=\"#\">\n                      <h3>\n                        Make beautiful transitions\n                        <small class=\"pull-right\">80%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-yellow\" style=\"width: 80%\" role=\"progressbar\"\n                             aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                          <span class=\"sr-only\">80% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  <!-- end task item -->\n                </ul>\n              </li>\n              <li class=\"footer\">\n                <a href=\"#\">View all tasks</a>\n              </li>\n            </ul>\n          </li>\n          <!-- User Account: style can be found in dropdown.less -->\n          <li class=\"dropdown user user-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <img src=\"dist/img/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\n              <span class=\"hidden-xs\">Alexander Pierce</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <!-- User image -->\n              <li class=\"user-header\">\n                <img src=\"dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n\n                <p>\n                  Alexander Pierce - Web Developer\n                  <small>Member since Nov. 2012</small>\n                </p>\n              </li>\n              <!-- Menu Body -->\n              <li class=\"user-body\">\n                <div class=\"row\">\n                  <div class=\"col-xs-4 text-center\">\n                    <a href=\"#\">Followers</a>\n                  </div>\n                  <div class=\"col-xs-4 text-center\">\n                    <a href=\"#\">Sales</a>\n                  </div>\n                  <div class=\"col-xs-4 text-center\">\n                    <a href=\"#\">Friends</a>\n                  </div>\n                </div>\n                <!-- /.row -->\n              </li>\n              <!-- Menu Footer-->\n              <li class=\"user-footer\">\n                <div class=\"pull-left\">\n                  <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\n                </div>\n                <div class=\"pull-right\">\n                  <a href=\"#\" class=\"btn btn-default btn-flat\">Sign out</a>\n                </div>\n              </li>\n            </ul>\n          </li>\n          <!-- Control Sidebar Toggle Button -->\n          <li>\n            <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>\n          </li>\n        </ul>\n      </div>\n\n    </nav>\n  </header>\n  <!-- Left side column. contains the logo and sidebar -->\n  <aside class=\"main-sidebar\">\n    <!-- sidebar: style can be found in sidebar.less -->\n    <section class=\"sidebar\">\n      <!-- Sidebar user panel -->\n      <div class=\"user-panel\">\n        <div class=\"pull-left image\">\n          <img src=\"dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n        </div>\n        <div class=\"pull-left info\">\n          <p>Alexander Pierce</p>\n          <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n        </div>\n      </div>\n      <!-- search form -->\n      <form action=\"#\" method=\"get\" class=\"sidebar-form\">\n        <div class=\"input-group\">\n          <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\n          <span class=\"input-group-btn\">\n                <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\">\n                  <i class=\"fa fa-search\"></i>\n                </button>\n              </span>\n        </div>\n      </form>\n      <!-- /.search form -->\n      <!-- sidebar menu: : style can be found in sidebar.less -->\n      <ul class=\"sidebar-menu\" data-widget=\"tree\">\n        <li class=\"header\">MAIN NAVIGATION</li>\n        <li class=\"active treeview menu-open\">\n          <a href=\"#\">\n            <i class=\"fa fa-dashboard\"></i> <span>Dashboard</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a routerLink=\"/registration\" routerLinkActive=\"active\"><i class=\"fa fa-circle-o\"></i> Dashboard v1</a></li>\n            <li class=\"active\"><a href=\"index2.html\"><i class=\"fa fa-circle-o\"></i> Dashboard v2</a></li>\n          </ul>\n        </li>\n        <li class=\"treeview\">\n          <a href=\"#\">\n            <i class=\"fa fa-files-o\"></i>\n            <span>Layout Options</span>\n            <span class=\"pull-right-container\">\n              <span class=\"label label-primary pull-right\">4</span>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a href=\"pages/layout/top-nav.html\"><i class=\"fa fa-circle-o\"></i> Top Navigation</a></li>\n            <li><a href=\"pages/layout/boxed.html\"><i class=\"fa fa-circle-o\"></i> Boxed</a></li>\n            <li><a href=\"pages/layout/fixed.html\"><i class=\"fa fa-circle-o\"></i> Fixed</a></li>\n            <li><a href=\"pages/layout/collapsed-sidebar.html\"><i class=\"fa fa-circle-o\"></i> Collapsed Sidebar</a></li>\n          </ul>\n        </li>\n        <li>\n          <a href=\"pages/widgets.html\">\n            <i class=\"fa fa-th\"></i> <span>Widgets</span>\n            <span class=\"pull-right-container\">\n              <small class=\"label pull-right bg-green\">new</small>\n            </span>\n          </a>\n        </li>\n        <li class=\"treeview\">\n          <a href=\"#\">\n            <i class=\"fa fa-pie-chart\"></i>\n            <span>Charts</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a href=\"pages/charts/chartjs.html\"><i class=\"fa fa-circle-o\"></i> ChartJS</a></li>\n            <li><a href=\"pages/charts/morris.html\"><i class=\"fa fa-circle-o\"></i> Morris</a></li>\n            <li><a href=\"pages/charts/flot.html\"><i class=\"fa fa-circle-o\"></i> Flot</a></li>\n            <li><a href=\"pages/charts/inline.html\"><i class=\"fa fa-circle-o\"></i> Inline charts</a></li>\n          </ul>\n        </li>\n        <li class=\"treeview\">\n          <a href=\"#\">\n            <i class=\"fa fa-laptop\"></i>\n            <span>UI Elements</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a href=\"pages/UI/general.html\"><i class=\"fa fa-circle-o\"></i> General</a></li>\n            <li><a href=\"pages/UI/icons.html\"><i class=\"fa fa-circle-o\"></i> Icons</a></li>\n            <li><a href=\"pages/UI/buttons.html\"><i class=\"fa fa-circle-o\"></i> Buttons</a></li>\n            <li><a href=\"pages/UI/sliders.html\"><i class=\"fa fa-circle-o\"></i> Sliders</a></li>\n            <li><a href=\"pages/UI/timeline.html\"><i class=\"fa fa-circle-o\"></i> Timeline</a></li>\n            <li><a href=\"pages/UI/modals.html\"><i class=\"fa fa-circle-o\"></i> Modals</a></li>\n          </ul>\n        </li>\n        <li class=\"treeview\">\n          <a href=\"#\">\n            <i class=\"fa fa-edit\"></i> <span>Forms</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a href=\"pages/forms/general.html\"><i class=\"fa fa-circle-o\"></i> General Elements</a></li>\n            <li><a href=\"pages/forms/advanced.html\"><i class=\"fa fa-circle-o\"></i> Advanced Elements</a></li>\n            <li><a href=\"pages/forms/editors.html\"><i class=\"fa fa-circle-o\"></i> Editors</a></li>\n          </ul>\n        </li>\n        <li class=\"treeview\">\n          <a href=\"#\">\n            <i class=\"fa fa-table\"></i> <span>Tables</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a href=\"pages/tables/simple.html\"><i class=\"fa fa-circle-o\"></i> Simple tables</a></li>\n            <li><a href=\"pages/tables/data.html\"><i class=\"fa fa-circle-o\"></i> Data tables</a></li>\n          </ul>\n        </li>\n        <li>\n          <a href=\"pages/calendar.html\">\n            <i class=\"fa fa-calendar\"></i> <span>Calendar</span>\n            <span class=\"pull-right-container\">\n              <small class=\"label pull-right bg-red\">3</small>\n              <small class=\"label pull-right bg-blue\">17</small>\n            </span>\n          </a>\n        </li>\n        <li>\n          <a href=\"pages/mailbox/mailbox.html\">\n            <i class=\"fa fa-envelope\"></i> <span>Mailbox</span>\n            <span class=\"pull-right-container\">\n              <small class=\"label pull-right bg-yellow\">12</small>\n              <small class=\"label pull-right bg-green\">16</small>\n              <small class=\"label pull-right bg-red\">5</small>\n            </span>\n          </a>\n        </li>\n        <li class=\"treeview\">\n          <a href=\"#\">\n            <i class=\"fa fa-folder\"></i> <span>Examples</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a href=\"pages/examples/invoice.html\"><i class=\"fa fa-circle-o\"></i> Invoice</a></li>\n            <li><a href=\"pages/examples/profile.html\"><i class=\"fa fa-circle-o\"></i> Profile</a></li>\n            <li><a href=\"pages/examples/login.html\"><i class=\"fa fa-circle-o\"></i> Login</a></li>\n            <li><a href=\"pages/examples/register.html\"><i class=\"fa fa-circle-o\"></i> Register</a></li>\n            <li><a href=\"pages/examples/lockscreen.html\"><i class=\"fa fa-circle-o\"></i> Lockscreen</a></li>\n            <li><a href=\"pages/examples/404.html\"><i class=\"fa fa-circle-o\"></i> 404 Error</a></li>\n            <li><a href=\"pages/examples/500.html\"><i class=\"fa fa-circle-o\"></i> 500 Error</a></li>\n            <li><a href=\"pages/examples/blank.html\"><i class=\"fa fa-circle-o\"></i> Blank Page</a></li>\n            <li><a href=\"pages/examples/pace.html\"><i class=\"fa fa-circle-o\"></i> Pace Page</a></li>\n          </ul>\n        </li>\n        <li class=\"treeview\">\n          <a href=\"#\">\n            <i class=\"fa fa-share\"></i> <span>Multilevel</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One</a></li>\n            <li class=\"treeview\">\n              <a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One\n                <span class=\"pull-right-container\">\n                  <i class=\"fa fa-angle-left pull-right\"></i>\n                </span>\n              </a>\n              <ul class=\"treeview-menu\">\n                <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Two</a></li>\n                <li class=\"treeview\">\n                  <a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Two\n                    <span class=\"pull-right-container\">\n                      <i class=\"fa fa-angle-left pull-right\"></i>\n                    </span>\n                  </a>\n                  <ul class=\"treeview-menu\">\n                    <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Three</a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Three</a></li>\n                  </ul>\n                </li>\n              </ul>\n            </li>\n            <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One</a></li>\n          </ul>\n        </li>\n        <li><a href=\"https://adminlte.io/docs\"><i class=\"fa fa-book\"></i> <span>Documentation</span></a></li>\n        <li class=\"header\">LABELS</li>\n        <li><a href=\"#\"><i class=\"fa fa-circle-o text-red\"></i> <span>Important</span></a></li>\n        <li><a href=\"#\"><i class=\"fa fa-circle-o text-yellow\"></i> <span>Warning</span></a></li>\n        <li><a href=\"#\"><i class=\"fa fa-circle-o text-aqua\"></i> <span>Information</span></a></li>\n      </ul>\n    </section>\n    <!-- /.sidebar -->\n  </aside>\n\n  <!-- Content Wrapper. Contains page content -->\n  <div class=\"content-wrapper\">\n    <!-- Content Header (Page header) -->\n    <section class=\"content-header\">\n      <h1>\n        Dashboard\n        <small>Version 2.0</small>\n      </h1>\n      <ol class=\"breadcrumb\">\n        <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n        <li class=\"active\">Dashboard</li>\n      </ol>\n    </section>\n\n    <!-- Main content -->\n    <section class=\"content\">\n      <!-- Info boxes -->\n      <div class=\"row\">\n        <div class=\"col-md-3 col-sm-6 col-xs-12\">\n          <div class=\"info-box\">\n            <span class=\"info-box-icon bg-aqua\"><i class=\"ion ion-ios-gear-outline\"></i></span>\n\n            <div class=\"info-box-content\">\n              <span class=\"info-box-text\">CPU Traffic</span>\n              <span class=\"info-box-number\">90<small>%</small></span>\n            </div>\n            <!-- /.info-box-content -->\n          </div>\n          <!-- /.info-box -->\n        </div>\n        <!-- /.col -->\n        <div class=\"col-md-3 col-sm-6 col-xs-12\">\n          <div class=\"info-box\">\n            <span class=\"info-box-icon bg-red\"><i class=\"fa fa-google-plus\"></i></span>\n\n            <div class=\"info-box-content\">\n              <span class=\"info-box-text\">Likes</span>\n              <span class=\"info-box-number\">41,410</span>\n            </div>\n            <!-- /.info-box-content -->\n          </div>\n          <!-- /.info-box -->\n        </div>\n        <!-- /.col -->\n\n        <!-- fix for small devices only -->\n        <div class=\"clearfix visible-sm-block\"></div>\n\n        <div class=\"col-md-3 col-sm-6 col-xs-12\">\n          <div class=\"info-box\">\n            <span class=\"info-box-icon bg-green\"><i class=\"ion ion-ios-cart-outline\"></i></span>\n\n            <div class=\"info-box-content\">\n              <span class=\"info-box-text\">Sales</span>\n              <span class=\"info-box-number\">760</span>\n            </div>\n            <!-- /.info-box-content -->\n          </div>\n          <!-- /.info-box -->\n        </div>\n        <!-- /.col -->\n        <div class=\"col-md-3 col-sm-6 col-xs-12\">\n          <div class=\"info-box\">\n            <span class=\"info-box-icon bg-yellow\"><i class=\"ion ion-ios-people-outline\"></i></span>\n\n            <div class=\"info-box-content\">\n              <span class=\"info-box-text\">New Members</span>\n              <span class=\"info-box-number\">2,000</span>\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n      <!-- <app-registration></app-registration> -->\n     <router-outlet></router-outlet>\n</section>\n\n    </div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "./src/app/service/Authservice.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*import { Injectable } from '@angular/core';
import {Http , Headers , RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  result: any;

  constructor(private  _http: Http ,private router:Router) {
  }
  isLoggedIn(){

  }

}*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/*import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild ,Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private  router: Router) {
  }
  canActivate() {
    return true;
  }

}*/
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var angular2_jwt_1 = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
var angular2_jwt_2 = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var AuthService = /** @class */ (function () {
    function AuthService(router, authHttp, _http) {
        this.router = router;
        this.authHttp = authHttp;
        this._http = _http;
        this.jwtHelper = new angular2_jwt_2.JwtHelper();
    }
    AuthService.prototype.useJwtHelper = function () {
        if (localStorage.getItem('apiToken')) {
            var token = localStorage.getItem('apiToken');
            console.log('token::::' + token);
            if (!this.jwtHelper.isTokenExpired(token)) {
                return true;
            }
            else {
                localStorage.clear();
                return false;
            }
        }
        return false;
    };
    /*login(email, password) {
      const headers = new Headers();
      var data = [{username:email,password:password}]
      console.log("mail "+JSON.stringify(data))
      headers.append('Content-Type', 'application/json');
      return this._http.post('/api/login', JSON.stringify(data) ,{headers : headers, withCredentials: true})
        .map(res => res.json());
    }*/
    AuthService.prototype.userLogout = function () {
        console.log('Signing Out...');
        return this.authHttp.get('http://localhost:3000/logout');
    };
    AuthService.prototype.canActivate = function () {
        if (localStorage.getItem('apiToken') !== null) {
            console.log("getting true..");
            return true;
        }
        else {
            console.log("canactive is blocking you sorry");
            this.router.navigate(['']);
            return false;
        }
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, angular2_jwt_1.AuthHttp, http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
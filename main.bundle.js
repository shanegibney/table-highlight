webpackJsonp([2,4],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, ".container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.stuart{\nbackground-color: lightgrey;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n<app-highlight-table></app-highlight-table>\n"

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

module.exports = "<h3>\n  highlight-table works!\n</h3>\n<style>\n  .container {\n    display: flex;\n  }\n\n  .stuart {\n    flex: 1;\n    flex-direction: row;\n  }\n\n  .shane {\n    align-content: center;\n  }\n</style>\n<!-- <div class=\"container\"> -->\n<!-- <div *ngFor=\"let col of table; let i=index\">\n  <div *ngFor=\"let row of col; let j=index\">\n    <span (mouseover)=\"hover=true\" (mouseleave)=\"hover=false\" [ngStyle]=\"{backgroundColor: hover==true ? 'pink' : 'transparent'}\">{{ row['r' + j + 'c' + i] }}</span>\n  </div>\n</div> -->\n<!-- </div> -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div *ngFor=\"let col of table; let j=index\">\n      <div class=\"col-md-2\" *ngFor=\"let row of col; let i=index\" (mouseover)=\"columni=i; rowj=j\" [ngStyle]=\"{'backgroundColor': (rowj!=j && columni!=i) || (rowj<j) || (columni<i) ? 'transparent' : 'silver', 'font-weight': (j==0 || i==0) || (rowj==j && columni==i) ? 'bold' : 'normal',\n      'color': (j==rowj && i==0) || (i==columni && j==0) ? 'teal' : 'black'}\">\n        <!-- {{ row['r' + j + 'c' + i] }} -->\n        <span *ngIf=\"i==0 || j==0; else inputBlock\" style=\"align-text: center;\">{{ i }} {{ j }}</span>\n        <ng-template #inputBlock>\n          <input class=\"form-control\" type=\"number\" style=\"width:50px; height:20px; font-size:20px; align-text:center;\" [value]=\"addmin1\" (input)=\"addmin1 = $event.target.value\" />\n        </ng-template>\n\n      </div>\n      <!-- <div class=\"col-md-2\" *ngFor=\"let row of col; let i=index\" (mouseover)=\"columni=i; rowj=j\" (mouseleave)=\"hover=false\" [ngStyle]=\"{'color': 'red', 'backgroundColor': 'blue', 'font-size': '46px'}\">\n        {{ row['r' + j + 'c' + i] }}\n      </div> -->\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <!-- row: {{ rowj }}; column: {{ columni }} -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(73);


/***/ }),

/***/ 72:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 72;


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(84);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(142),
        styles: [__webpack_require__(139)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__highlight_table_highlight_table_component__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__highlight_table_highlight_table_component__["a" /* HighlightTableComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightTableComponent = (function () {
    function HighlightTableComponent() {
        this.table = [];
        this.cols = [];
        this.cell = null;
        this.key = null;
        this.rowslength = 6;
        this.columnslength = 6;
        this.makeTable();
    }
    HighlightTableComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit() is running");
    };
    HighlightTableComponent.prototype.makeTable = function () {
        console.log("checking makeTable() runs");
        for (this.r = 0; this.r < this.rowslength; this.r++) {
            for (this.c = 0; this.c < this.columnslength; this.c++) {
                console.log("-----start-----");
                console.log("this.r = " + this.r + ", this.c = " + this.c);
                this.key = "r" + this.r + "c" + this.c;
                console.log("this.key = " + this.key);
                console.log("typeof(this.key) = " + typeof (this.key));
                // console.log("typeof(this.cell) = " + typeof(this.cell));
                this.cell = (_a = {}, _a[this.key] = this.key, _a);
                console.log("this.cell: " + this.cell);
                this.cols.push(this.cell);
                console.log("this.cols: " + this.cols);
            }
            this.table.push(this.cols);
            this.cols = [];
        }
        console.log("this.table: " + this.table);
        var _a;
    };
    return HighlightTableComponent;
}());
HighlightTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-highlight-table',
        template: __webpack_require__(143),
        styles: [__webpack_require__(140)]
    }),
    __metadata("design:paramtypes", [])
], HighlightTableComponent);

//# sourceMappingURL=highlight-table.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[171]);
//# sourceMappingURL=main.bundle.js.map
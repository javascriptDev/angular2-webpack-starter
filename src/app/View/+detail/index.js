"use strict";
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var detail_component_1 = require('./detail.component');
console.log('`Detail` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
exports.routes = [
    { path: '', component: detail_component_1.DetailComponent, pathMatch: 'full' }
];
var AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule.routes = exports.routes;
    AboutModule = __decorate([
        core_1.NgModule({
            declarations: [
                // Components / Directives/ Pipes
                detail_component_1.DetailComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutModule);
    return AboutModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AboutModule;
//# sourceMappingURL=index.js.map
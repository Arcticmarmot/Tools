(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tools-scale-scale-module"],{

/***/ "8esN":
/*!*****************************************************!*\
  !*** ./src/app/tools/scale/scale-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ScaleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScaleRoutingModule", function() { return ScaleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _scale_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scale.component */ "TcZR");





const routes = [
    {
        path: '',
        component: _scale_component__WEBPACK_IMPORTED_MODULE_2__["ScaleComponent"]
    },
];
class ScaleRoutingModule {
}
ScaleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ScaleRoutingModule });
ScaleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ScaleRoutingModule_Factory(t) { return new (t || ScaleRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScaleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScaleRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "8hoF":
/*!***********************************!*\
  !*** ./src/constants/scale/fn.ts ***!
  \***********************************/
/*! exports provided: NToX, XToN, stringsToNumbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NToX", function() { return NToX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XToN", function() { return XToN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringsToNumbers", function() { return stringsToNumbers; });
// 任意进制转换为10进制
function NToX(num, scale) {
    let sum = 0;
    // tslint:disable-next-line:forin
    for (const i in num) {
        sum += num[i] * Math.pow(scale, num.length - 1 - Number(i));
    }
    return stringsToNumbers(sum.toString().split(''));
}
// 十进制转换为任意进制
function XToN(num) {
    console.log(num);
    const result = [];
    const value = Number(num.join(''));
    console.log(value);
    function compute(computeScale) {
        const subResult = [];
        let v = value;
        while (Math.floor(v / computeScale)) {
            subResult.push(v % computeScale);
            v = Math.floor(v / computeScale);
        }
        subResult.push(v % computeScale);
        // reverse
        for (const i in subResult) {
            if ((Number(i) + 1) <= (subResult.length / 2)) {
                const temp = subResult[subResult.length - 1 - Number(i)];
                subResult[subResult.length - 1 - Number(i)] = subResult[i];
                subResult[i] = temp;
            }
        }
        return numbersToStrings(subResult).join('');
    }
    result.push(compute(2));
    result.push(compute(8));
    result.push(num.join(''));
    result.push(compute(16));
    console.log(result);
    return result;
}
function stringsToNumbers(arrs) {
    // tslint:disable-next-line:forin
    for (const i in arrs) {
        arrs[i] = arrs[i].toLowerCase();
        if (arrs[i].charCodeAt(0) > 58) {
            arrs[i] = arrs[i].charCodeAt(0) - 87;
        }
        else {
            arrs[i] = arrs[i].charCodeAt(0) - 48;
        }
    }
    return arrs;
}
function numbersToStrings(arrs) {
    for (const i in arrs) {
        if (arrs[i] > 9) {
            arrs[i] = String.fromCharCode(arrs[i] + 87);
        }
        else {
            arrs[i] = Number(arrs[i]);
        }
    }
    return arrs;
}


/***/ }),

/***/ "SqCe":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/list.js ***!
  \*********************************************************/
/*! exports provided: MAT_LIST, MAT_NAV_LIST, MAT_SELECTION_LIST_VALUE_ACCESSOR, MatList, MatListAvatarCssMatStyler, MatListIconCssMatStyler, MatListItem, MatListModule, MatListOption, MatListSubheaderCssMatStyler, MatNavList, MatSelectionList, MatSelectionListChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_LIST", function() { return MAT_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_NAV_LIST", function() { return MAT_NAV_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECTION_LIST_VALUE_ACCESSOR", function() { return MAT_SELECTION_LIST_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatList", function() { return MatList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatListAvatarCssMatStyler", function() { return MatListAvatarCssMatStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatListIconCssMatStyler", function() { return MatListIconCssMatStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatListItem", function() { return MatListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatListModule", function() { return MatListModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatListOption", function() { return MatListOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatListSubheaderCssMatStyler", function() { return MatListSubheaderCssMatStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatNavList", function() { return MatNavList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectionList", function() { return MatSelectionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectionListChange", function() { return MatSelectionListChange; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ "CtHx");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/keycodes */ "Ht+U");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");












/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatList.
/** @docs-private */





const _c0 = ["*"];
const _c1 = ".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-single-selected-option):not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}\n";
const _c2 = [[["", "mat-list-avatar", ""], ["", "mat-list-icon", ""], ["", "matListAvatar", ""], ["", "matListIcon", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
const _c3 = ["[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]", "[mat-line], [matLine]", "*"];
const _c4 = ["text"];
function MatListOption_mat_pseudo_checkbox_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-pseudo-checkbox", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("state", ctx_r0.selected ? "checked" : "unchecked")("disabled", ctx_r0.disabled);
} }
const _c5 = ["*", [["", "mat-list-avatar", ""], ["", "mat-list-icon", ""], ["", "matListAvatar", ""], ["", "matListIcon", ""]]];
const _c6 = ["*", "[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]"];
class MatListBase {
}
const _MatListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatListBase));
// Boilerplate for applying mixins to MatListItem.
/** @docs-private */
class MatListItemBase {
}
const _MatListItemMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatListItemBase);
/**
 * Injection token that can be used to inject instances of `MatList`. It serves as
 * alternative token to the actual `MatList` class which could cause unnecessary
 * retention of the class and its component metadata.
 */
const MAT_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatList');
/**
 * Injection token that can be used to inject instances of `MatNavList`. It serves as
 * alternative token to the actual `MatNavList` class which could cause unnecessary
 * retention of the class and its component metadata.
 */
const MAT_NAV_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatNavList');
class MatNavList extends _MatListMixinBase {
    constructor() {
        super(...arguments);
        /** Emits when the state of the list changes. */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnChanges() {
        this._stateChanges.next();
    }
    ngOnDestroy() {
        this._stateChanges.complete();
    }
}
MatNavList.ɵfac = function MatNavList_Factory(t) { return ɵMatNavList_BaseFactory(t || MatNavList); };
MatNavList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatNavList, selectors: [["mat-nav-list"]], hostAttrs: ["role", "navigation", 1, "mat-nav-list", "mat-list-base"], inputs: { disableRipple: "disableRipple", disabled: "disabled" }, exportAs: ["matNavList"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: MAT_NAV_LIST, useExisting: MatNavList }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MatNavList_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, styles: [_c1], encapsulation: 2, changeDetection: 0 });
const ɵMatNavList_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatNavList);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatNavList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mat-nav-list',
                exportAs: 'matNavList',
                host: {
                    'role': 'navigation',
                    'class': 'mat-nav-list mat-list-base'
                },
                template: "<ng-content></ng-content>\n\n",
                inputs: ['disableRipple', 'disabled'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [{ provide: MAT_NAV_LIST, useExisting: MatNavList }],
                styles: [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-single-selected-option):not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}\n"]
            }]
    }], null, null); })();
class MatList extends _MatListMixinBase {
    constructor(_elementRef) {
        super();
        this._elementRef = _elementRef;
        /** Emits when the state of the list changes. */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        if (this._getListType() === 'action-list') {
            _elementRef.nativeElement.classList.add('mat-action-list');
        }
    }
    _getListType() {
        const nodeName = this._elementRef.nativeElement.nodeName.toLowerCase();
        if (nodeName === 'mat-list') {
            return 'list';
        }
        if (nodeName === 'mat-action-list') {
            return 'action-list';
        }
        return null;
    }
    ngOnChanges() {
        this._stateChanges.next();
    }
    ngOnDestroy() {
        this._stateChanges.complete();
    }
}
MatList.ɵfac = function MatList_Factory(t) { return new (t || MatList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
MatList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatList, selectors: [["mat-list"], ["mat-action-list"]], hostAttrs: [1, "mat-list", "mat-list-base"], inputs: { disableRipple: "disableRipple", disabled: "disabled" }, exportAs: ["matList"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: MAT_LIST, useExisting: MatList }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MatList_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, styles: [_c1], encapsulation: 2, changeDetection: 0 });
MatList.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mat-list, mat-action-list',
                exportAs: 'matList',
                template: "<ng-content></ng-content>\n\n",
                host: {
                    'class': 'mat-list mat-list-base'
                },
                inputs: ['disableRipple', 'disabled'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [{ provide: MAT_LIST, useExisting: MatList }],
                styles: [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-single-selected-option):not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, null); })();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
class MatListAvatarCssMatStyler {
}
MatListAvatarCssMatStyler.ɵfac = function MatListAvatarCssMatStyler_Factory(t) { return new (t || MatListAvatarCssMatStyler)(); };
MatListAvatarCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatListAvatarCssMatStyler, selectors: [["", "mat-list-avatar", ""], ["", "matListAvatar", ""]], hostAttrs: [1, "mat-list-avatar"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListAvatarCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[mat-list-avatar], [matListAvatar]',
                host: { 'class': 'mat-list-avatar' }
            }]
    }], null, null); })();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
class MatListIconCssMatStyler {
}
MatListIconCssMatStyler.ɵfac = function MatListIconCssMatStyler_Factory(t) { return new (t || MatListIconCssMatStyler)(); };
MatListIconCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatListIconCssMatStyler, selectors: [["", "mat-list-icon", ""], ["", "matListIcon", ""]], hostAttrs: [1, "mat-list-icon"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListIconCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[mat-list-icon], [matListIcon]',
                host: { 'class': 'mat-list-icon' }
            }]
    }], null, null); })();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
class MatListSubheaderCssMatStyler {
}
MatListSubheaderCssMatStyler.ɵfac = function MatListSubheaderCssMatStyler_Factory(t) { return new (t || MatListSubheaderCssMatStyler)(); };
MatListSubheaderCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatListSubheaderCssMatStyler, selectors: [["", "mat-subheader", ""], ["", "matSubheader", ""]], hostAttrs: [1, "mat-subheader"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListSubheaderCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[mat-subheader], [matSubheader]',
                host: { 'class': 'mat-subheader' }
            }]
    }], null, null); })();
/** An item within a Material Design list. */
class MatListItem extends _MatListItemMixinBase {
    constructor(_element, _changeDetectorRef, navList, list) {
        super();
        this._element = _element;
        this._isInteractiveList = false;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._disabled = false;
        this._isInteractiveList = !!(navList || (list && list._getListType() === 'action-list'));
        this._list = navList || list;
        // If no type attribute is specified for <button>, set it to "button".
        // If a type attribute is already specified, do nothing.
        const element = this._getHostElement();
        if (element.nodeName.toLowerCase() === 'button' && !element.hasAttribute('type')) {
            element.setAttribute('type', 'button');
        }
        if (this._list) {
            // React to changes in the state of the parent list since
            // some of the item's properties depend on it (e.g. `disableRipple`).
            this._list._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed)).subscribe(() => {
                _changeDetectorRef.markForCheck();
            });
        }
    }
    /** Whether the option is disabled. */
    get disabled() { return this._disabled || !!(this._list && this._list.disabled); }
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
    }
    ngAfterContentInit() {
        Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["setLines"])(this._lines, this._element);
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    /** Whether this list item should show a ripple effect when clicked. */
    _isRippleDisabled() {
        return !this._isInteractiveList || this.disableRipple ||
            !!(this._list && this._list.disableRipple);
    }
    /** Retrieves the DOM element of the component host. */
    _getHostElement() {
        return this._element.nativeElement;
    }
}
MatListItem.ɵfac = function MatListItem_Factory(t) { return new (t || MatListItem)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_NAV_LIST, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_LIST, 8)); };
MatListItem.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatListItem, selectors: [["mat-list-item"], ["a", "mat-list-item", ""], ["button", "mat-list-item", ""]], contentQueries: function MatListItem_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListAvatarCssMatStyler, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListIconCssMatStyler, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._avatar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._icon = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._lines = _t);
    } }, hostAttrs: [1, "mat-list-item", "mat-focus-indicator"], hostVars: 6, hostBindings: function MatListItem_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-list-item-disabled", ctx.disabled)("mat-list-item-avatar", ctx._avatar || ctx._icon)("mat-list-item-with-avatar", ctx._avatar || ctx._icon);
    } }, inputs: { disableRipple: "disableRipple", disabled: "disabled" }, exportAs: ["matListItem"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c3, decls: 6, vars: 2, consts: [[1, "mat-list-item-content"], ["mat-ripple", "", 1, "mat-list-item-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-list-text"]], template: function MatListItem_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx._isRippleDisabled());
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"]], encapsulation: 2, changeDetection: 0 });
MatListItem.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: MatNavList, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_NAV_LIST,] }] },
    { type: MatList, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_LIST,] }] }
];
MatListItem.propDecorators = {
    _lines: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], { descendants: true },] }],
    _avatar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [MatListAvatarCssMatStyler,] }],
    _icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [MatListIconCssMatStyler,] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListItem, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mat-list-item, a[mat-list-item], button[mat-list-item]',
                exportAs: 'matListItem',
                host: {
                    'class': 'mat-list-item mat-focus-indicator',
                    '[class.mat-list-item-disabled]': 'disabled',
                    // @breaking-change 8.0.0 Remove `mat-list-item-avatar` in favor of `mat-list-item-with-avatar`.
                    '[class.mat-list-item-avatar]': '_avatar || _icon',
                    '[class.mat-list-item-with-avatar]': '_avatar || _icon'
                },
                inputs: ['disableRipple'],
                template: "<div class=\"mat-list-item-content\">\n  <div class=\"mat-list-item-ripple\" mat-ripple\n       [matRippleTrigger]=\"_getHostElement()\"\n       [matRippleDisabled]=\"_isRippleDisabled()\">\n  </div>\n\n  <ng-content select=\"[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]\">\n  </ng-content>\n\n  <div class=\"mat-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div>\n\n  <ng-content></ng-content>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: MatNavList, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [MAT_NAV_LIST]
            }] }, { type: MatList, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [MAT_LIST]
            }] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], _lines: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], { descendants: true }]
        }], _avatar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MatListAvatarCssMatStyler]
        }], _icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MatListIconCssMatStyler]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatSelectionListBase {
}
const _MatSelectionListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatSelectionListBase);
class MatListOptionBase {
}
const _MatListOptionMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatListOptionBase);
/** @docs-private */
const MAT_SELECTION_LIST_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MatSelectionList),
    multi: true
};
/** Change event that is being fired whenever the selected state of an option changes. */
class MatSelectionListChange {
    constructor(
    /** Reference to the selection list that emitted the event. */
    source, 
    /**
     * Reference to the option that has been changed.
     * @deprecated Use `options` instead, because some events may change more than one option.
     * @breaking-change 12.0.0
     */
    option, 
    /** Reference to the options that have been changed. */
    options) {
        this.source = source;
        this.option = option;
        this.options = options;
    }
}
/**
 * Component for list-options of selection-list. Each list-option can automatically
 * generate a checkbox and can put current item into the selectionModel of selection-list
 * if the current item is selected.
 */
class MatListOption extends _MatListOptionMixinBase {
    constructor(_element, _changeDetector, 
    /** @docs-private */
    selectionList) {
        super();
        this._element = _element;
        this._changeDetector = _changeDetector;
        this.selectionList = selectionList;
        this._selected = false;
        this._disabled = false;
        this._hasFocus = false;
        /** Whether the label should appear before or after the checkbox. Defaults to 'after' */
        this.checkboxPosition = 'after';
        /**
         * This is set to true after the first OnChanges cycle so we don't clear the value of `selected`
         * in the first cycle.
         */
        this._inputsInitialized = false;
    }
    /** Theme color of the list option. This sets the color of the checkbox. */
    get color() { return this._color || this.selectionList.color; }
    set color(newValue) { this._color = newValue; }
    /** Value of the option */
    get value() { return this._value; }
    set value(newValue) {
        if (this.selected &&
            !this.selectionList.compareWith(newValue, this.value) &&
            this._inputsInitialized) {
            this.selected = false;
        }
        this._value = newValue;
    }
    /** Whether the option is disabled. */
    get disabled() { return this._disabled || (this.selectionList && this.selectionList.disabled); }
    set disabled(value) {
        const newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        if (newValue !== this._disabled) {
            this._disabled = newValue;
            this._changeDetector.markForCheck();
        }
    }
    /** Whether the option is selected. */
    get selected() { return this.selectionList.selectedOptions.isSelected(this); }
    set selected(value) {
        const isSelected = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        if (isSelected !== this._selected) {
            this._setSelected(isSelected);
            this.selectionList._reportValueChange();
        }
    }
    ngOnInit() {
        const list = this.selectionList;
        if (list._value && list._value.some(value => list.compareWith(value, this._value))) {
            this._setSelected(true);
        }
        const wasSelected = this._selected;
        // List options that are selected at initialization can't be reported properly to the form
        // control. This is because it takes some time until the selection-list knows about all
        // available options. Also it can happen that the ControlValueAccessor has an initial value
        // that should be used instead. Deferring the value change report to the next tick ensures
        // that the form control value is not being overwritten.
        Promise.resolve().then(() => {
            if (this._selected || wasSelected) {
                this.selected = true;
                this._changeDetector.markForCheck();
            }
        });
        this._inputsInitialized = true;
    }
    ngAfterContentInit() {
        Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["setLines"])(this._lines, this._element);
    }
    ngOnDestroy() {
        if (this.selected) {
            // We have to delay this until the next tick in order
            // to avoid changed after checked errors.
            Promise.resolve().then(() => {
                this.selected = false;
            });
        }
        const hadFocus = this._hasFocus;
        const newActiveItem = this.selectionList._removeOptionFromList(this);
        // Only move focus if this option was focused at the time it was destroyed.
        if (hadFocus && newActiveItem) {
            newActiveItem.focus();
        }
    }
    /** Toggles the selection state of the option. */
    toggle() {
        this.selected = !this.selected;
    }
    /** Allows for programmatic focusing of the option. */
    focus() {
        this._element.nativeElement.focus();
    }
    /**
     * Returns the list item's text label. Implemented as a part of the FocusKeyManager.
     * @docs-private
     */
    getLabel() {
        return this._text ? (this._text.nativeElement.textContent || '') : '';
    }
    /** Whether this list item should show a ripple effect when clicked. */
    _isRippleDisabled() {
        return this.disabled || this.disableRipple || this.selectionList.disableRipple;
    }
    _handleClick() {
        if (!this.disabled && (this.selectionList.multiple || !this.selected)) {
            this.toggle();
            // Emit a change event if the selected state of the option changed through user interaction.
            this.selectionList._emitChangeEvent([this]);
        }
    }
    _handleFocus() {
        this.selectionList._setFocusedOption(this);
        this._hasFocus = true;
    }
    _handleBlur() {
        this.selectionList._onTouched();
        this._hasFocus = false;
    }
    /** Retrieves the DOM element of the component host. */
    _getHostElement() {
        return this._element.nativeElement;
    }
    /** Sets the selected state of the option. Returns whether the value has changed. */
    _setSelected(selected) {
        if (selected === this._selected) {
            return false;
        }
        this._selected = selected;
        if (selected) {
            this.selectionList.selectedOptions.select(this);
        }
        else {
            this.selectionList.selectedOptions.deselect(this);
        }
        this._changeDetector.markForCheck();
        return true;
    }
    /**
     * Notifies Angular that the option needs to be checked in the next change detection run. Mainly
     * used to trigger an update of the list option if the disabled state of the selection list
     * changed.
     */
    _markForCheck() {
        this._changeDetector.markForCheck();
    }
}
MatListOption.ɵfac = function MatListOption_Factory(t) { return new (t || MatListOption)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MatSelectionList))); };
MatListOption.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatListOption, selectors: [["mat-list-option"]], contentQueries: function MatListOption_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListAvatarCssMatStyler, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListIconCssMatStyler, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._avatar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._icon = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._lines = _t);
    } }, viewQuery: function MatListOption_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._text = _t.first);
    } }, hostAttrs: ["role", "option", 1, "mat-list-item", "mat-list-option", "mat-focus-indicator"], hostVars: 15, hostBindings: function MatListOption_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatListOption_focus_HostBindingHandler() { return ctx._handleFocus(); })("blur", function MatListOption_blur_HostBindingHandler() { return ctx._handleBlur(); })("click", function MatListOption_click_HostBindingHandler() { return ctx._handleClick(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-selected", ctx.selected)("aria-disabled", ctx.disabled)("tabindex", -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-list-item-disabled", ctx.disabled)("mat-list-item-with-avatar", ctx._avatar || ctx._icon)("mat-primary", ctx.color === "primary")("mat-accent", ctx.color !== "primary" && ctx.color !== "warn")("mat-warn", ctx.color === "warn")("mat-list-single-selected-option", ctx.selected && !ctx.selectionList.multiple);
    } }, inputs: { disableRipple: "disableRipple", checkboxPosition: "checkboxPosition", color: "color", value: "value", selected: "selected", disabled: "disabled" }, exportAs: ["matListOption"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c6, decls: 7, vars: 5, consts: [[1, "mat-list-item-content"], ["mat-ripple", "", 1, "mat-list-item-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [3, "state", "disabled", 4, "ngIf"], [1, "mat-list-text"], ["text", ""], [3, "state", "disabled"]], template: function MatListOption_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatListOption_mat_pseudo_checkbox_2_Template, 1, 2, "mat-pseudo-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-list-item-content-reverse", ctx.checkboxPosition == "after");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx._isRippleDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectionList.multiple);
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckbox"]], encapsulation: 2, changeDetection: 0 });
MatListOption.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: MatSelectionList, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MatSelectionList),] }] }
];
MatListOption.propDecorators = {
    _avatar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [MatListAvatarCssMatStyler,] }],
    _icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [MatListIconCssMatStyler,] }],
    _lines: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], { descendants: true },] }],
    _text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['text',] }],
    checkboxPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListOption, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mat-list-option',
                exportAs: 'matListOption',
                inputs: ['disableRipple'],
                host: {
                    'role': 'option',
                    'class': 'mat-list-item mat-list-option mat-focus-indicator',
                    '(focus)': '_handleFocus()',
                    '(blur)': '_handleBlur()',
                    '(click)': '_handleClick()',
                    '[class.mat-list-item-disabled]': 'disabled',
                    '[class.mat-list-item-with-avatar]': '_avatar || _icon',
                    // Manually set the "primary" or "warn" class if the color has been explicitly
                    // set to "primary" or "warn". The pseudo checkbox picks up these classes for
                    // its theme.
                    '[class.mat-primary]': 'color === "primary"',
                    // Even though accent is the default, we need to set this class anyway, because the  list might
                    // be placed inside a parent that has one of the other colors with a higher specificity.
                    '[class.mat-accent]': 'color !== "primary" && color !== "warn"',
                    '[class.mat-warn]': 'color === "warn"',
                    '[class.mat-list-single-selected-option]': 'selected && !selectionList.multiple',
                    '[attr.aria-selected]': 'selected',
                    '[attr.aria-disabled]': 'disabled',
                    '[attr.tabindex]': '-1'
                },
                template: "<div class=\"mat-list-item-content\"\n  [class.mat-list-item-content-reverse]=\"checkboxPosition == 'after'\">\n\n  <div mat-ripple\n    class=\"mat-list-item-ripple\"\n    [matRippleTrigger]=\"_getHostElement()\"\n    [matRippleDisabled]=\"_isRippleDisabled()\"></div>\n\n  <mat-pseudo-checkbox\n    *ngIf=\"selectionList.multiple\"\n    [state]=\"selected ? 'checked' : 'unchecked'\"\n    [disabled]=\"disabled\"></mat-pseudo-checkbox>\n\n  <div class=\"mat-list-text\" #text><ng-content></ng-content></div>\n\n  <ng-content select=\"[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]\">\n  </ng-content>\n\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: MatSelectionList, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MatSelectionList)]
            }] }]; }, { checkboxPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], _avatar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MatListAvatarCssMatStyler]
        }], _icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MatListIconCssMatStyler]
        }], _lines: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], { descendants: true }]
        }], _text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['text']
        }] }); })();
/**
 * Material Design list component where each item is a selectable option. Behaves as a listbox.
 */
class MatSelectionList extends _MatSelectionListMixinBase {
    constructor(_element, 
    // @breaking-change 11.0.0 Remove `tabIndex` parameter.
    tabIndex, _changeDetector, 
    // @breaking-change 11.0.0 `_focusMonitor` parameter to become required.
    _focusMonitor) {
        super();
        this._element = _element;
        this._changeDetector = _changeDetector;
        this._focusMonitor = _focusMonitor;
        this._multiple = true;
        this._contentInitialized = false;
        /** Emits a change event whenever the selected state of an option changes. */
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Tabindex of the selection list.
         * @breaking-change 11.0.0 Remove `tabIndex` input.
         */
        this.tabIndex = 0;
        /** Theme color of the selection list. This sets the checkbox color for all list options. */
        this.color = 'accent';
        /**
         * Function used for comparing an option against the selected value when determining which
         * options should appear as selected. The first argument is the value of an options. The second
         * one is a value from the selected value. A boolean must be returned.
         */
        this.compareWith = (a1, a2) => a1 === a2;
        this._disabled = false;
        /** The currently selected options. */
        this.selectedOptions = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["SelectionModel"](this._multiple);
        /** The tabindex of the selection list. */
        this._tabIndex = -1;
        /** View to model callback that should be called whenever the selected options change. */
        this._onChange = (_) => { };
        /** Emits when the list has been destroyed. */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /** View to model callback that should be called if the list or its options lost focus. */
        this._onTouched = () => { };
    }
    /** Whether the selection list is disabled. */
    get disabled() { return this._disabled; }
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        // The `MatSelectionList` and `MatListOption` are using the `OnPush` change detection
        // strategy. Therefore the options will not check for any changes if the `MatSelectionList`
        // changed its state. Since we know that a change to `disabled` property of the list affects
        // the state of the options, we manually mark each option for check.
        this._markOptionsForCheck();
    }
    /** Whether selection is limited to one or multiple items (default multiple). */
    get multiple() { return this._multiple; }
    set multiple(value) {
        const newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        if (newValue !== this._multiple) {
            if (this._contentInitialized && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw new Error('Cannot change `multiple` mode of mat-selection-list after initialization.');
            }
            this._multiple = newValue;
            this.selectedOptions = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["SelectionModel"](this._multiple, this.selectedOptions.selected);
        }
    }
    ngAfterContentInit() {
        var _a;
        this._contentInitialized = true;
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusKeyManager"](this.options)
            .withWrap()
            .withTypeAhead()
            .withHomeAndEnd()
            // Allow disabled items to be focusable. For accessibility reasons, there must be a way for
            // screenreader users, that allows reading the different options of the list.
            .skipPredicate(() => false)
            .withAllowedModifierKeys(['shiftKey']);
        if (this._value) {
            this._setOptionsFromValues(this._value);
        }
        // If the user attempts to tab out of the selection list, allow focus to escape.
        this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed)).subscribe(() => {
            this._allowFocusEscape();
        });
        // When the number of options change, update the tabindex of the selection list.
        this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed)).subscribe(() => {
            this._updateTabIndex();
        });
        // Sync external changes to the model back to the options.
        this.selectedOptions.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed)).subscribe(event => {
            if (event.added) {
                for (let item of event.added) {
                    item.selected = true;
                }
            }
            if (event.removed) {
                for (let item of event.removed) {
                    item.selected = false;
                }
            }
        });
        // @breaking-change 11.0.0 Remove null assertion once _focusMonitor is required.
        (_a = this._focusMonitor) === null || _a === void 0 ? void 0 : _a.monitor(this._element).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed)).subscribe(origin => {
            if (origin === 'keyboard' || origin === 'program') {
                const activeIndex = this._keyManager.activeItemIndex;
                if (!activeIndex || activeIndex === -1) {
                    // If there is no active index, set focus to the first option.
                    this._keyManager.setFirstItemActive();
                }
                else {
                    // Otherwise, set focus to the active option.
                    this._keyManager.setActiveItem(activeIndex);
                }
            }
        });
    }
    ngOnChanges(changes) {
        const disableRippleChanges = changes['disableRipple'];
        const colorChanges = changes['color'];
        if ((disableRippleChanges && !disableRippleChanges.firstChange) ||
            (colorChanges && !colorChanges.firstChange)) {
            this._markOptionsForCheck();
        }
    }
    ngOnDestroy() {
        var _a;
        // @breaking-change 11.0.0 Remove null assertion once _focusMonitor is required.
        (_a = this._focusMonitor) === null || _a === void 0 ? void 0 : _a.stopMonitoring(this._element);
        this._destroyed.next();
        this._destroyed.complete();
        this._isDestroyed = true;
    }
    /** Focuses the selection list. */
    focus(options) {
        this._element.nativeElement.focus(options);
    }
    /** Selects all of the options. */
    selectAll() {
        this._setAllOptionsSelected(true);
    }
    /** Deselects all of the options. */
    deselectAll() {
        this._setAllOptionsSelected(false);
    }
    /** Sets the focused option of the selection-list. */
    _setFocusedOption(option) {
        this._keyManager.updateActiveItem(option);
    }
    /**
     * Removes an option from the selection list and updates the active item.
     * @returns Currently-active item.
     */
    _removeOptionFromList(option) {
        const optionIndex = this._getOptionIndex(option);
        if (optionIndex > -1 && this._keyManager.activeItemIndex === optionIndex) {
            // Check whether the option is the last item
            if (optionIndex > 0) {
                this._keyManager.updateActiveItem(optionIndex - 1);
            }
            else if (optionIndex === 0 && this.options.length > 1) {
                this._keyManager.updateActiveItem(Math.min(optionIndex + 1, this.options.length - 1));
            }
        }
        return this._keyManager.activeItem;
    }
    /** Passes relevant key presses to our key manager. */
    _keydown(event) {
        const keyCode = event.keyCode;
        const manager = this._keyManager;
        const previousFocusIndex = manager.activeItemIndex;
        const hasModifier = Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(event);
        switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["SPACE"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ENTER"]:
                if (!hasModifier && !manager.isTyping()) {
                    this._toggleFocusedOption();
                    // Always prevent space from scrolling the page since the list has focus
                    event.preventDefault();
                }
                break;
            default:
                // The "A" key gets special treatment, because it's used for the "select all" functionality.
                if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["A"] && this.multiple && Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(event, 'ctrlKey') &&
                    !manager.isTyping()) {
                    const shouldSelect = this.options.some(option => !option.disabled && !option.selected);
                    this._setAllOptionsSelected(shouldSelect, true, true);
                    event.preventDefault();
                }
                else {
                    manager.onKeydown(event);
                }
        }
        if (this.multiple && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["DOWN_ARROW"]) && event.shiftKey &&
            manager.activeItemIndex !== previousFocusIndex) {
            this._toggleFocusedOption();
        }
    }
    /** Reports a value change to the ControlValueAccessor */
    _reportValueChange() {
        // Stop reporting value changes after the list has been destroyed. This avoids
        // cases where the list might wrongly reset its value once it is removed, but
        // the form control is still live.
        if (this.options && !this._isDestroyed) {
            const value = this._getSelectedOptionValues();
            this._onChange(value);
            this._value = value;
        }
    }
    /** Emits a change event if the selected state of an option changed. */
    _emitChangeEvent(options) {
        this.selectionChange.emit(new MatSelectionListChange(this, options[0], options));
    }
    /** Implemented as part of ControlValueAccessor. */
    writeValue(values) {
        this._value = values;
        if (this.options) {
            this._setOptionsFromValues(values || []);
        }
    }
    /** Implemented as a part of ControlValueAccessor. */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /** Implemented as part of ControlValueAccessor. */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /** Implemented as part of ControlValueAccessor. */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /** Sets the selected options based on the specified values. */
    _setOptionsFromValues(values) {
        this.options.forEach(option => option._setSelected(false));
        values.forEach(value => {
            const correspondingOption = this.options.find(option => {
                // Skip options that are already in the model. This allows us to handle cases
                // where the same primitive value is selected multiple times.
                return option.selected ? false : this.compareWith(option.value, value);
            });
            if (correspondingOption) {
                correspondingOption._setSelected(true);
            }
        });
    }
    /** Returns the values of the selected options. */
    _getSelectedOptionValues() {
        return this.options.filter(option => option.selected).map(option => option.value);
    }
    /** Toggles the state of the currently focused option if enabled. */
    _toggleFocusedOption() {
        let focusedIndex = this._keyManager.activeItemIndex;
        if (focusedIndex != null && this._isValidIndex(focusedIndex)) {
            let focusedOption = this.options.toArray()[focusedIndex];
            if (focusedOption && !focusedOption.disabled && (this._multiple || !focusedOption.selected)) {
                focusedOption.toggle();
                // Emit a change event because the focused option changed its state through user
                // interaction.
                this._emitChangeEvent([focusedOption]);
            }
        }
    }
    /**
     * Sets the selected state on all of the options
     * and emits an event if anything changed.
     */
    _setAllOptionsSelected(isSelected, skipDisabled, isUserInput) {
        // Keep track of whether anything changed, because we only want to
        // emit the changed event when something actually changed.
        const changedOptions = [];
        this.options.forEach(option => {
            if ((!skipDisabled || !option.disabled) && option._setSelected(isSelected)) {
                changedOptions.push(option);
            }
        });
        if (changedOptions.length) {
            this._reportValueChange();
            if (isUserInput) {
                this._emitChangeEvent(changedOptions);
            }
        }
    }
    /**
     * Utility to ensure all indexes are valid.
     * @param index The index to be checked.
     * @returns True if the index is valid for our list of options.
     */
    _isValidIndex(index) {
        return index >= 0 && index < this.options.length;
    }
    /** Returns the index of the specified list option. */
    _getOptionIndex(option) {
        return this.options.toArray().indexOf(option);
    }
    /** Marks all the options to be checked in the next change detection run. */
    _markOptionsForCheck() {
        if (this.options) {
            this.options.forEach(option => option._markForCheck());
        }
    }
    /**
     * Removes the tabindex from the selection list and resets it back afterwards, allowing the user
     * to tab out of it. This prevents the list from capturing focus and redirecting it back within
     * the list, creating a focus trap if it user tries to tab away.
     */
    _allowFocusEscape() {
        this._tabIndex = -1;
        setTimeout(() => {
            this._tabIndex = 0;
            this._changeDetector.markForCheck();
        });
    }
    /** Updates the tabindex based upon if the selection list is empty. */
    _updateTabIndex() {
        this._tabIndex = (this.options.length === 0) ? -1 : 0;
    }
}
MatSelectionList.ɵfac = function MatSelectionList_Factory(t) { return new (t || MatSelectionList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"])); };
MatSelectionList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatSelectionList, selectors: [["mat-selection-list"]], contentQueries: function MatSelectionList_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListOption, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.options = _t);
    } }, hostAttrs: ["role", "listbox", 1, "mat-selection-list", "mat-list-base"], hostVars: 3, hostBindings: function MatSelectionList_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function MatSelectionList_keydown_HostBindingHandler($event) { return ctx._keydown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-multiselectable", ctx.multiple)("aria-disabled", ctx.disabled.toString())("tabindex", ctx._tabIndex);
    } }, inputs: { disableRipple: "disableRipple", tabIndex: "tabIndex", color: "color", compareWith: "compareWith", disabled: "disabled", multiple: "multiple" }, outputs: { selectionChange: "selectionChange" }, exportAs: ["matSelectionList"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SELECTION_LIST_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MatSelectionList_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, styles: [_c1], encapsulation: 2, changeDetection: 0 });
MatSelectionList.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['tabindex',] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"] }
];
MatSelectionList.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [MatListOption, { descendants: true },] }],
    selectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSelectionList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mat-selection-list',
                exportAs: 'matSelectionList',
                inputs: ['disableRipple'],
                host: {
                    'role': 'listbox',
                    'class': 'mat-selection-list mat-list-base',
                    '(keydown)': '_keydown($event)',
                    '[attr.aria-multiselectable]': 'multiple',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.tabindex]': '_tabIndex'
                },
                template: '<ng-content></ng-content>',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                providers: [MAT_SELECTION_LIST_VALUE_ACCESSOR],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-single-selected-option):not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['tabindex']
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"] }]; }, { selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [MatListOption, { descendants: true }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatListModule {
}
MatListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MatListModule });
MatListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MatListModule_Factory(t) { return new (t || MatListModule)(); }, imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatListModule, { declarations: function () { return [MatList, MatNavList, MatListItem, MatListAvatarCssMatStyler, MatListIconCssMatStyler, MatListSubheaderCssMatStyler, MatSelectionList, MatListOption]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]; }, exports: function () { return [MatList, MatNavList, MatListItem, MatListAvatarCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], MatListIconCssMatStyler, MatListSubheaderCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], MatSelectionList, MatListOption, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                exports: [
                    MatList,
                    MatNavList,
                    MatListItem,
                    MatListAvatarCssMatStyler,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                    MatListIconCssMatStyler,
                    MatListSubheaderCssMatStyler,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"],
                    MatSelectionList,
                    MatListOption,
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"]
                ],
                declarations: [
                    MatList,
                    MatNavList,
                    MatListItem,
                    MatListAvatarCssMatStyler,
                    MatListIconCssMatStyler,
                    MatListSubheaderCssMatStyler,
                    MatSelectionList,
                    MatListOption
                ]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=list.js.map

/***/ }),

/***/ "TcZR":
/*!************************************************!*\
  !*** ./src/app/tools/scale/scale.component.ts ***!
  \************************************************/
/*! exports provided: ScaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScaleComponent", function() { return ScaleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _constants_scale_fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/scale/fn */ "8hoF");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _templates_title_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/title/title.component */ "l2pl");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "UhP/");














function ScaleComponent_mat_list_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u8BA1\u7B97\u7ED3\u679C:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-list-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-list-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-list-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-list-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("2\u8FDB\u5236: ", ctx_r0.result[0], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("8\u8FDB\u5236: ", ctx_r0.result[1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("10\u8FDB\u5236: ", ctx_r0.result[2], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("16\u8FDB\u5236: ", ctx_r0.result[3], "");
} }
class ScaleComponent {
    constructor(fb, snackBar) {
        this.fb = fb;
        this.snackBar = snackBar;
        this.formData = this.fb.group({
            number: [],
            scale: []
        });
        this.isComputed = false;
    }
    ngOnInit() {
        this.formData.controls.number.valueChanges.subscribe(value => {
            this.isComputed = false;
        });
    }
    onSubmit() {
        const num = this.formData.controls.number.value;
        const scale = this.formData.controls.scale.value;
        if (this.validate(num, scale)) {
            const [transNum, transScale] = this.transfer(num, scale);
            this.result = this.compute(transNum, transScale);
            this.isComputed = true;
        }
        else {
            this.snackBar.open('数值与进制不匹配', 'OK', { duration: 2000 });
            this.isComputed = false;
        }
    }
    validate(num, scale) {
        if (!num) {
            return false;
        }
        const re2 = /[01]+/;
        const re8 = /[0-7]+/;
        const rex = /[0-9]+/;
        const re0x = /[0-9abcdefABCDEF]+/;
        let group;
        switch (scale) {
            case '2':
                group = num.match(re2);
                break;
            case '8':
                group = num.match(re8);
                break;
            case '10':
                group = num.match(rex);
                break;
            case '16':
                group = num.match(re0x);
                break;
            default:
                return false;
        }
        return group && num === group[0];
    }
    transfer(num, scale) {
        if (num.startsWith('0')) {
            this.transfer(num.replace('0', ''), scale);
        }
        return [Object(_constants_scale_fn__WEBPACK_IMPORTED_MODULE_1__["stringsToNumbers"])(num.split('')), Number(scale)];
    }
    compute(num, scale) {
        console.log(num, scale);
        let X = num;
        if (scale !== 10) {
            X = Object(_constants_scale_fn__WEBPACK_IMPORTED_MODULE_1__["NToX"])(num, scale);
        }
        return Object(_constants_scale_fn__WEBPACK_IMPORTED_MODULE_1__["XToN"])(X);
    }
}
ScaleComponent.ɵfac = function ScaleComponent_Factory(t) { return new (t || ScaleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
ScaleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScaleComponent, selectors: [["app-scale"]], decls: 19, vars: 3, consts: [["id", "scale"], [1, "wrap"], [3, "title"], [1, "content"], [1, "scale-form", 3, "formGroup", "ngSubmit"], [1, "input-scale"], ["matInput", "", "placeholder", "\u8BF7\u8F93\u5165\u6570\u503C", "formControlName", "number"], ["formControlName", "scale"], ["value", "2"], ["value", "8"], ["value", "10"], ["value", "16"], ["mat-button", "", "type", "submit"], ["role", "list", 4, "ngIf"], ["role", "list"], ["mat-subheader", ""], ["role", "listitem"], ["mat-list-icon", ""], ["mat-line", ""]], template: function ScaleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ScaleComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-radio-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-radio-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "2\u8FDB\u5236");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-radio-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "8\u8FDB\u5236");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-radio-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "10\u8FDB\u5236");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-radio-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "16\u8FDB\u5236");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u8BA1\u7B97");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ScaleComponent_mat_list_18_Template, 23, 4, "mat-list", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "\u8FDB\u5236\u8F6C\u6362");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isComputed);
    } }, directives: [_templates_title_title_component__WEBPACK_IMPORTED_MODULE_4__["TitleComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatLine"]], styles: ["#scale[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: flex;\n  justify-content: center;\n}\n#scale[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  width: 80%;\n}\n#scale[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n}\n#scale[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 50px;\n  color: #112233;\n  letter-spacing: 5px;\n}\n#scale[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 900px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#scale[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n#scale[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-scale[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 25px;\n}\n#scale[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-radio-group[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  font-size: 18px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n#scale[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  font-size: 20px;\n  background-color: rgba(50, 150, 250, 0.1);\n}\n#scale[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   mat-list[_ngcontent-%COMP%] {\n  width: 40%;\n  margin-top: 100px;\n}\n#scale[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   mat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbHMvc2NhbGUvQzovVXNlcnMvYXJjdGkvRGVza3RvcC9Bbmd1bGFyL1Rvb2xzL3NyYy9hcHAvdG9vbHMvc2NhbGUvc2NhbGUuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3Rvb2xzL3NjYWxlL3NjYWxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNBRjtBREpBO0VBTUksVUFBQTtBQ0NKO0FEUEE7RUFRTSxXQUFBO0VBQ0EsYUFBQTtBQ0VOO0FEWEE7RUFXUSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0dSO0FEckJBO0VBc0JNLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNFTjtBRDVCQTtFQTRCUSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FDR1I7QURuQ0E7RUFrQ1UsV0FBQTtFQUNBLGVBQUE7QUNJVjtBRHZDQTtFQXNDVSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQ0lWO0FEL0NBO0VBOENVLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0FDSVY7QURyREE7RUFxRFEsVUFBQTtFQUNBLGlCQUFBO0FDR1I7QUR6REE7RUF3RFUsZUFBQTtBQ0lWIiwiZmlsZSI6InNyYy9hcHAvdG9vbHMvc2NhbGUvc2NhbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9jdXN0b21cIjtcbiNzY2FsZXtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC53cmFwe1xuICAgIHdpZHRoOiA4MCU7XG4gICAgLmhlYWRlcntcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgIC5zdWItdGl0bGV7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIGNvbG9yOiBAYmxhY2s7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5jb250ZW50e1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDkwMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZm9ybXtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAuaW5wdXQtc2NhbGV7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICB9XG4gICAgICAgIG1hdC1yYWRpby1ncm91cHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBibHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBtYXQtbGlzdHtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgIG1hdC1saXN0LWl0ZW17XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiIsIiNzY2FsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuI3NjYWxlIC53cmFwIHtcbiAgd2lkdGg6IDgwJTtcbn1cbiNzY2FsZSAud3JhcCAuaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG59XG4jc2NhbGUgLndyYXAgLmhlYWRlciAuc3ViLXRpdGxlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY29sb3I6ICMxMTIyMzM7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG59XG4jc2NhbGUgLndyYXAgLmNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNzY2FsZSAud3JhcCAuY29udGVudCBmb3JtIHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuI3NjYWxlIC53cmFwIC5jb250ZW50IGZvcm0gLmlucHV0LXNjYWxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbiNzY2FsZSAud3JhcCAuY29udGVudCBmb3JtIG1hdC1yYWRpby1ncm91cCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiNzY2FsZSAud3JhcCAuY29udGVudCBmb3JtIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCwgMTUwLCAyNTAsIDAuMSk7XG59XG4jc2NhbGUgLndyYXAgLmNvbnRlbnQgbWF0LWxpc3Qge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cbiNzY2FsZSAud3JhcCAuY29udGVudCBtYXQtbGlzdCBtYXQtbGlzdC1pdGVtIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScaleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scale',
                templateUrl: './scale.component.html',
                styleUrls: ['./scale.component.less']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "V/+W":
/*!*********************************************!*\
  !*** ./src/app/tools/scale/scale.module.ts ***!
  \*********************************************/
/*! exports provided: ScaleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScaleModule", function() { return ScaleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _scale_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scale.component */ "TcZR");
/* harmony import */ var _scale_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scale-routing.module */ "8esN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _templates_title_title_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../templates/title/title.module */ "Ut3L");













class ScaleModule {
}
ScaleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ScaleModule });
ScaleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ScaleModule_Factory(t) { return new (t || ScaleModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _scale_routing_module__WEBPACK_IMPORTED_MODULE_3__["ScaleRoutingModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _templates_title_title_module__WEBPACK_IMPORTED_MODULE_11__["TitleModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScaleModule, { declarations: [_scale_component__WEBPACK_IMPORTED_MODULE_2__["ScaleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _scale_routing_module__WEBPACK_IMPORTED_MODULE_3__["ScaleRoutingModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _templates_title_title_module__WEBPACK_IMPORTED_MODULE_11__["TitleModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScaleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_scale_component__WEBPACK_IMPORTED_MODULE_2__["ScaleComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                    _scale_routing_module__WEBPACK_IMPORTED_MODULE_3__["ScaleRoutingModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                    _templates_title_title_module__WEBPACK_IMPORTED_MODULE_11__["TitleModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zHaW":
/*!**************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/snack-bar.js ***!
  \**************************************************************/
/*! exports provided: MAT_SNACK_BAR_DATA, MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY, MatSnackBar, MatSnackBarConfig, MatSnackBarContainer, MatSnackBarModule, MatSnackBarRef, SimpleSnackBar, matSnackBarAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DATA", function() { return MAT_SNACK_BAR_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DEFAULT_OPTIONS", function() { return MAT_SNACK_BAR_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY", function() { return MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSnackBar", function() { return MatSnackBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarConfig", function() { return MatSnackBarConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarContainer", function() { return MatSnackBarContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarModule", function() { return MatSnackBarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarRef", function() { return MatSnackBarRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleSnackBar", function() { return SimpleSnackBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matSnackBarAnimations", function() { return matSnackBarAnimations; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "1z/I");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "GS7A");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/layout */ "HeVh");












/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token that can be used to access the data that was passed in to a snack bar. */








function SimpleSnackBar_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SimpleSnackBar_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r1.action(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.data.action);
} }
function MatSnackBarContainer_ng_template_0_Template(rf, ctx) { }
const MAT_SNACK_BAR_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MatSnackBarData');
/**
 * Configuration used when opening a snack-bar.
 */
class MatSnackBarConfig {
    constructor() {
        /** The politeness level for the MatAriaLiveAnnouncer announcement. */
        this.politeness = 'assertive';
        /**
         * Message to be announced by the LiveAnnouncer. When opening a snackbar without a custom
         * component or template, the announcement message will default to the specified message.
         */
        this.announcementMessage = '';
        /** The length of time in milliseconds to wait before automatically dismissing the snack bar. */
        this.duration = 0;
        /** Data being injected into the child component. */
        this.data = null;
        /** The horizontal position to place the snack bar. */
        this.horizontalPosition = 'center';
        /** The vertical position to place the snack bar. */
        this.verticalPosition = 'bottom';
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Maximum amount of milliseconds that can be passed into setTimeout. */
const MAX_TIMEOUT = Math.pow(2, 31) - 1;
/**
 * Reference to a snack bar dispatched from the snack bar service.
 */
class MatSnackBarRef {
    constructor(containerInstance, _overlayRef) {
        this._overlayRef = _overlayRef;
        /** Subject for notifying the user that the snack bar has been dismissed. */
        this._afterDismissed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /** Subject for notifying the user that the snack bar has opened and appeared. */
        this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /** Subject for notifying the user that the snack bar action was called. */
        this._onAction = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /** Whether the snack bar was dismissed using the action button. */
        this._dismissedByAction = false;
        this.containerInstance = containerInstance;
        // Dismiss snackbar on action.
        this.onAction().subscribe(() => this.dismiss());
        containerInstance._onExit.subscribe(() => this._finishDismiss());
    }
    /** Dismisses the snack bar. */
    dismiss() {
        if (!this._afterDismissed.closed) {
            this.containerInstance.exit();
        }
        clearTimeout(this._durationTimeoutId);
    }
    /** Marks the snackbar action clicked. */
    dismissWithAction() {
        if (!this._onAction.closed) {
            this._dismissedByAction = true;
            this._onAction.next();
            this._onAction.complete();
        }
    }
    /**
     * Marks the snackbar action clicked.
     * @deprecated Use `dismissWithAction` instead.
     * @breaking-change 8.0.0
     */
    closeWithAction() {
        this.dismissWithAction();
    }
    /** Dismisses the snack bar after some duration */
    _dismissAfter(duration) {
        // Note that we need to cap the duration to the maximum value for setTimeout, because
        // it'll revert to 1 if somebody passes in something greater (e.g. `Infinity`). See #17234.
        this._durationTimeoutId = setTimeout(() => this.dismiss(), Math.min(duration, MAX_TIMEOUT));
    }
    /** Marks the snackbar as opened */
    _open() {
        if (!this._afterOpened.closed) {
            this._afterOpened.next();
            this._afterOpened.complete();
        }
    }
    /** Cleans up the DOM after closing. */
    _finishDismiss() {
        this._overlayRef.dispose();
        if (!this._onAction.closed) {
            this._onAction.complete();
        }
        this._afterDismissed.next({ dismissedByAction: this._dismissedByAction });
        this._afterDismissed.complete();
        this._dismissedByAction = false;
    }
    /** Gets an observable that is notified when the snack bar is finished closing. */
    afterDismissed() {
        return this._afterDismissed;
    }
    /** Gets an observable that is notified when the snack bar has opened and appeared. */
    afterOpened() {
        return this.containerInstance._onEnter;
    }
    /** Gets an observable that is notified when the snack bar action is called. */
    onAction() {
        return this._onAction;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A component used to open as the default snack bar, matching material spec.
 * This should only be used internally by the snack bar service.
 */
class SimpleSnackBar {
    constructor(snackBarRef, data) {
        this.snackBarRef = snackBarRef;
        this.data = data;
    }
    /** Performs the action on the snack bar. */
    action() {
        this.snackBarRef.dismissWithAction();
    }
    /** If the action button should be shown. */
    get hasAction() {
        return !!this.data.action;
    }
}
SimpleSnackBar.ɵfac = function SimpleSnackBar_Factory(t) { return new (t || SimpleSnackBar)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatSnackBarRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_SNACK_BAR_DATA)); };
SimpleSnackBar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SimpleSnackBar, selectors: [["simple-snack-bar"]], hostAttrs: [1, "mat-simple-snackbar"], decls: 3, vars: 2, consts: [["class", "mat-simple-snackbar-action", 4, "ngIf"], [1, "mat-simple-snackbar-action"], ["mat-button", "", 3, "click"]], template: function SimpleSnackBar_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SimpleSnackBar_div_2_Template, 3, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasAction);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: [".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}\n"], encapsulation: 2, changeDetection: 0 });
SimpleSnackBar.ctorParameters = () => [
    { type: MatSnackBarRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_SNACK_BAR_DATA,] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SimpleSnackBar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'simple-snack-bar',
                template: "<span>{{data.message}}</span>\n<div class=\"mat-simple-snackbar-action\"  *ngIf=\"hasAction\">\n  <button mat-button (click)=\"action()\">{{data.action}}</button>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                host: {
                    'class': 'mat-simple-snackbar'
                },
                styles: [".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}\n"]
            }]
    }], function () { return [{ type: MatSnackBarRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [MAT_SNACK_BAR_DATA]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Animations used by the Material snack bar.
 * @docs-private
 */
const matSnackBarAnimations = {
    /** Animation that shows and hides a snack bar. */
    snackBarState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('state', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            transform: 'scale(0.8)',
            opacity: 0,
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            transform: 'scale(1)',
            opacity: 1,
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => void, * => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('75ms cubic-bezier(0.4, 0.0, 1, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            opacity: 0
        }))),
    ])
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Internal component that wraps user-provided snack bar content.
 * @docs-private
 */
class MatSnackBarContainer extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["BasePortalOutlet"] {
    constructor(_ngZone, _elementRef, _changeDetectorRef, 
    /** The snack bar configuration. */
    snackBarConfig) {
        super();
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this.snackBarConfig = snackBarConfig;
        /** Whether the component has been destroyed. */
        this._destroyed = false;
        /** Subject for notifying that the snack bar has exited from view. */
        this._onExit = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /** Subject for notifying that the snack bar has finished entering the view. */
        this._onEnter = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /** The state of the snack bar animations. */
        this._animationState = 'void';
        /**
         * Attaches a DOM portal to the snack bar container.
         * @deprecated To be turned into a method.
         * @breaking-change 10.0.0
         */
        this.attachDomPortal = (portal) => {
            this._assertNotAttached();
            this._applySnackBarClasses();
            return this._portalOutlet.attachDomPortal(portal);
        };
        // Based on the ARIA spec, `alert` and `status` roles have an
        // implicit `assertive` and `polite` politeness respectively.
        if (snackBarConfig.politeness === 'assertive' && !snackBarConfig.announcementMessage) {
            this._role = 'alert';
        }
        else if (snackBarConfig.politeness === 'off') {
            this._role = null;
        }
        else {
            this._role = 'status';
        }
    }
    /** Attach a component portal as content to this snack bar container. */
    attachComponentPortal(portal) {
        this._assertNotAttached();
        this._applySnackBarClasses();
        return this._portalOutlet.attachComponentPortal(portal);
    }
    /** Attach a template portal as content to this snack bar container. */
    attachTemplatePortal(portal) {
        this._assertNotAttached();
        this._applySnackBarClasses();
        return this._portalOutlet.attachTemplatePortal(portal);
    }
    /** Handle end of animations, updating the state of the snackbar. */
    onAnimationEnd(event) {
        const { fromState, toState } = event;
        if ((toState === 'void' && fromState !== 'void') || toState === 'hidden') {
            this._completeExit();
        }
        if (toState === 'visible') {
            // Note: we shouldn't use `this` inside the zone callback,
            // because it can cause a memory leak.
            const onEnter = this._onEnter;
            this._ngZone.run(() => {
                onEnter.next();
                onEnter.complete();
            });
        }
    }
    /** Begin animation of snack bar entrance into view. */
    enter() {
        if (!this._destroyed) {
            this._animationState = 'visible';
            this._changeDetectorRef.detectChanges();
        }
    }
    /** Begin animation of the snack bar exiting from view. */
    exit() {
        // Note: this one transitions to `hidden`, rather than `void`, in order to handle the case
        // where multiple snack bars are opened in quick succession (e.g. two consecutive calls to
        // `MatSnackBar.open`).
        this._animationState = 'hidden';
        // Mark this element with an 'exit' attribute to indicate that the snackbar has
        // been dismissed and will soon be removed from the DOM. This is used by the snackbar
        // test harness.
        this._elementRef.nativeElement.setAttribute('mat-exit', '');
        return this._onExit;
    }
    /** Makes sure the exit callbacks have been invoked when the element is destroyed. */
    ngOnDestroy() {
        this._destroyed = true;
        this._completeExit();
    }
    /**
     * Waits for the zone to settle before removing the element. Helps prevent
     * errors where we end up removing an element which is in the middle of an animation.
     */
    _completeExit() {
        this._ngZone.onMicrotaskEmpty.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(() => {
            this._onExit.next();
            this._onExit.complete();
        });
    }
    /** Applies the various positioning and user-configured CSS classes to the snack bar. */
    _applySnackBarClasses() {
        const element = this._elementRef.nativeElement;
        const panelClasses = this.snackBarConfig.panelClass;
        if (panelClasses) {
            if (Array.isArray(panelClasses)) {
                // Note that we can't use a spread here, because IE doesn't support multiple arguments.
                panelClasses.forEach(cssClass => element.classList.add(cssClass));
            }
            else {
                element.classList.add(panelClasses);
            }
        }
        if (this.snackBarConfig.horizontalPosition === 'center') {
            element.classList.add('mat-snack-bar-center');
        }
        if (this.snackBarConfig.verticalPosition === 'top') {
            element.classList.add('mat-snack-bar-top');
        }
    }
    /** Asserts that no content is already attached to the container. */
    _assertNotAttached() {
        if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('Attempting to attach snack bar content after content is already attached');
        }
    }
}
MatSnackBarContainer.ɵfac = function MatSnackBarContainer_Factory(t) { return new (t || MatSnackBarContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatSnackBarConfig)); };
MatSnackBarContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MatSnackBarContainer, selectors: [["snack-bar-container"]], viewQuery: function MatSnackBarContainer_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
    } }, hostAttrs: [1, "mat-snack-bar-container"], hostVars: 2, hostBindings: function MatSnackBarContainer_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsyntheticHostListener"]("@state.done", function MatSnackBarContainer_animation_state_done_HostBindingHandler($event) { return ctx.onAnimationEnd($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("role", ctx._role);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsyntheticHostProperty"]("@state", ctx._animationState);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkPortalOutlet", ""]], template: function MatSnackBarContainer_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MatSnackBarContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
    } }, directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]], styles: [".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}\n"], encapsulation: 2, data: { animation: [matSnackBarAnimations.snackBarState] } });
MatSnackBarContainer.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: MatSnackBarConfig }
];
MatSnackBarContainer.propDecorators = {
    _portalOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], { static: true },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatSnackBarContainer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'snack-bar-container',
                template: "<ng-template cdkPortalOutlet></ng-template>\n",
                // In Ivy embedded views will be change detected from their declaration place, rather than
                // where they were stamped out. This means that we can't have the snack bar container be OnPush,
                // because it might cause snack bars that were opened from a template not to be out of date.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                animations: [matSnackBarAnimations.snackBarState],
                host: {
                    '[attr.role]': '_role',
                    'class': 'mat-snack-bar-container',
                    '[@state]': '_animationState',
                    '(@state.done)': 'onAnimationEnd($event)'
                },
                styles: [".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: MatSnackBarConfig }]; }, { _portalOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], { static: true }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatSnackBarModule {
}
MatSnackBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MatSnackBarModule });
MatSnackBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function MatSnackBarModule_Factory(t) { return new (t || MatSnackBarModule)(); }, imports: [[
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"],
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatSnackBarModule, { declarations: function () { return [MatSnackBarContainer, SimpleSnackBar]; }, imports: function () { return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]]; }, exports: function () { return [MatSnackBarContainer, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatSnackBarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"],
                ],
                exports: [MatSnackBarContainer, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]],
                declarations: [MatSnackBarContainer, SimpleSnackBar],
                entryComponents: [MatSnackBarContainer, SimpleSnackBar]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token that can be used to specify default snack bar. */
const MAT_SNACK_BAR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-snack-bar-default-options', {
    providedIn: 'root',
    factory: MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY,
});
/** @docs-private */
function MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY() {
    return new MatSnackBarConfig();
}
/**
 * Service to dispatch Material Design snack bar messages.
 */
class MatSnackBar {
    constructor(_overlay, _live, _injector, _breakpointObserver, _parentSnackBar, _defaultConfig) {
        this._overlay = _overlay;
        this._live = _live;
        this._injector = _injector;
        this._breakpointObserver = _breakpointObserver;
        this._parentSnackBar = _parentSnackBar;
        this._defaultConfig = _defaultConfig;
        /**
         * Reference to the current snack bar in the view *at this level* (in the Angular injector tree).
         * If there is a parent snack-bar service, all operations should delegate to that parent
         * via `_openedSnackBarRef`.
         */
        this._snackBarRefAtThisLevel = null;
        /** The component that should be rendered as the snack bar's simple component. */
        this.simpleSnackBarComponent = SimpleSnackBar;
        /** The container component that attaches the provided template or component. */
        this.snackBarContainerComponent = MatSnackBarContainer;
        /** The CSS class to applie for handset mode. */
        this.handsetCssClass = 'mat-snack-bar-handset';
    }
    /** Reference to the currently opened snackbar at *any* level. */
    get _openedSnackBarRef() {
        const parent = this._parentSnackBar;
        return parent ? parent._openedSnackBarRef : this._snackBarRefAtThisLevel;
    }
    set _openedSnackBarRef(value) {
        if (this._parentSnackBar) {
            this._parentSnackBar._openedSnackBarRef = value;
        }
        else {
            this._snackBarRefAtThisLevel = value;
        }
    }
    /**
     * Creates and dispatches a snack bar with a custom component for the content, removing any
     * currently opened snack bars.
     *
     * @param component Component to be instantiated.
     * @param config Extra configuration for the snack bar.
     */
    openFromComponent(component, config) {
        return this._attach(component, config);
    }
    /**
     * Creates and dispatches a snack bar with a custom template for the content, removing any
     * currently opened snack bars.
     *
     * @param template Template to be instantiated.
     * @param config Extra configuration for the snack bar.
     */
    openFromTemplate(template, config) {
        return this._attach(template, config);
    }
    /**
     * Opens a snackbar with a message and an optional action.
     * @param message The message to show in the snackbar.
     * @param action The label for the snackbar action.
     * @param config Additional configuration options for the snackbar.
     */
    open(message, action = '', config) {
        const _config = Object.assign(Object.assign({}, this._defaultConfig), config);
        // Since the user doesn't have access to the component, we can
        // override the data to pass in our own message and action.
        _config.data = { message, action };
        // Since the snack bar has `role="alert"`, we don't
        // want to announce the same message twice.
        if (_config.announcementMessage === message) {
            _config.announcementMessage = undefined;
        }
        return this.openFromComponent(this.simpleSnackBarComponent, _config);
    }
    /**
     * Dismisses the currently-visible snack bar.
     */
    dismiss() {
        if (this._openedSnackBarRef) {
            this._openedSnackBarRef.dismiss();
        }
    }
    ngOnDestroy() {
        // Only dismiss the snack bar at the current level on destroy.
        if (this._snackBarRefAtThisLevel) {
            this._snackBarRefAtThisLevel.dismiss();
        }
    }
    /**
     * Attaches the snack bar container component to the overlay.
     */
    _attachSnackBarContainer(overlayRef, config) {
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        const injector = _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"].create({
            parent: userInjector || this._injector,
            providers: [{ provide: MatSnackBarConfig, useValue: config }]
        });
        const containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](this.snackBarContainerComponent, config.viewContainerRef, injector);
        const containerRef = overlayRef.attach(containerPortal);
        containerRef.instance.snackBarConfig = config;
        return containerRef.instance;
    }
    /**
     * Places a new component or a template as the content of the snack bar container.
     */
    _attach(content, userConfig) {
        const config = Object.assign(Object.assign(Object.assign({}, new MatSnackBarConfig()), this._defaultConfig), userConfig);
        const overlayRef = this._createOverlay(config);
        const container = this._attachSnackBarContainer(overlayRef, config);
        const snackBarRef = new MatSnackBarRef(container, overlayRef);
        if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]) {
            const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](content, null, {
                $implicit: config.data,
                snackBarRef
            });
            snackBarRef.instance = container.attachTemplatePortal(portal);
        }
        else {
            const injector = this._createInjector(config, snackBarRef);
            const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](content, undefined, injector);
            const contentRef = container.attachComponentPortal(portal);
            // We can't pass this via the injector, because the injector is created earlier.
            snackBarRef.instance = contentRef.instance;
        }
        // Subscribe to the breakpoint observer and attach the mat-snack-bar-handset class as
        // appropriate. This class is applied to the overlay element because the overlay must expand to
        // fill the width of the screen for full width snackbars.
        this._breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["Breakpoints"].HandsetPortrait).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(overlayRef.detachments())).subscribe(state => {
            const classList = overlayRef.overlayElement.classList;
            state.matches ? classList.add(this.handsetCssClass) : classList.remove(this.handsetCssClass);
        });
        this._animateSnackBar(snackBarRef, config);
        this._openedSnackBarRef = snackBarRef;
        return this._openedSnackBarRef;
    }
    /** Animates the old snack bar out and the new one in. */
    _animateSnackBar(snackBarRef, config) {
        // When the snackbar is dismissed, clear the reference to it.
        snackBarRef.afterDismissed().subscribe(() => {
            // Clear the snackbar ref if it hasn't already been replaced by a newer snackbar.
            if (this._openedSnackBarRef == snackBarRef) {
                this._openedSnackBarRef = null;
            }
            if (config.announcementMessage) {
                this._live.clear();
            }
        });
        if (this._openedSnackBarRef) {
            // If a snack bar is already in view, dismiss it and enter the
            // new snack bar after exit animation is complete.
            this._openedSnackBarRef.afterDismissed().subscribe(() => {
                snackBarRef.containerInstance.enter();
            });
            this._openedSnackBarRef.dismiss();
        }
        else {
            // If no snack bar is in view, enter the new snack bar.
            snackBarRef.containerInstance.enter();
        }
        // If a dismiss timeout is provided, set up dismiss based on after the snackbar is opened.
        if (config.duration && config.duration > 0) {
            snackBarRef.afterOpened().subscribe(() => snackBarRef._dismissAfter(config.duration));
        }
        if (config.announcementMessage) {
            this._live.announce(config.announcementMessage, config.politeness);
        }
    }
    /**
     * Creates a new overlay and places it in the correct location.
     * @param config The user-specified snack bar config.
     */
    _createOverlay(config) {
        const overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayConfig"]();
        overlayConfig.direction = config.direction;
        let positionStrategy = this._overlay.position().global();
        // Set horizontal position.
        const isRtl = config.direction === 'rtl';
        const isLeft = (config.horizontalPosition === 'left' ||
            (config.horizontalPosition === 'start' && !isRtl) ||
            (config.horizontalPosition === 'end' && isRtl));
        const isRight = !isLeft && config.horizontalPosition !== 'center';
        if (isLeft) {
            positionStrategy.left('0');
        }
        else if (isRight) {
            positionStrategy.right('0');
        }
        else {
            positionStrategy.centerHorizontally();
        }
        // Set horizontal position.
        if (config.verticalPosition === 'top') {
            positionStrategy.top('0');
        }
        else {
            positionStrategy.bottom('0');
        }
        overlayConfig.positionStrategy = positionStrategy;
        return this._overlay.create(overlayConfig);
    }
    /**
     * Creates an injector to be used inside of a snack bar component.
     * @param config Config that was used to create the snack bar.
     * @param snackBarRef Reference to the snack bar.
     */
    _createInjector(config, snackBarRef) {
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"].create({
            parent: userInjector || this._injector,
            providers: [
                { provide: MatSnackBarRef, useValue: snackBarRef },
                { provide: MAT_SNACK_BAR_DATA, useValue: config.data }
            ]
        });
    }
}
MatSnackBar.ɵfac = function MatSnackBar_Factory(t) { return new (t || MatSnackBar)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["LiveAnnouncer"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](MatSnackBar, 12), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](MAT_SNACK_BAR_DEFAULT_OPTIONS)); };
MatSnackBar.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({ factory: function MatSnackBar_Factory() { return new MatSnackBar(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["LiveAnnouncer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["BreakpointObserver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(MatSnackBar, 12), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(MAT_SNACK_BAR_DEFAULT_OPTIONS)); }, token: MatSnackBar, providedIn: MatSnackBarModule });
MatSnackBar.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["LiveAnnouncer"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["BreakpointObserver"] },
    { type: MatSnackBar, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"] }] },
    { type: MatSnackBarConfig, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_SNACK_BAR_DEFAULT_OPTIONS,] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatSnackBar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{ providedIn: MatSnackBarModule }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["LiveAnnouncer"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["BreakpointObserver"] }, { type: MatSnackBar, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
            }] }, { type: MatSnackBarConfig, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [MAT_SNACK_BAR_DEFAULT_OPTIONS]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=snack-bar.js.map

/***/ }),

/***/ "zQhy":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/radio.js ***!
  \**********************************************************/
/*! exports provided: MAT_RADIO_DEFAULT_OPTIONS, MAT_RADIO_DEFAULT_OPTIONS_FACTORY, MAT_RADIO_GROUP, MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, MatRadioButton, MatRadioChange, MatRadioGroup, MatRadioModule, _MatRadioButtonBase, _MatRadioGroupBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_RADIO_DEFAULT_OPTIONS", function() { return MAT_RADIO_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_RADIO_DEFAULT_OPTIONS_FACTORY", function() { return MAT_RADIO_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_RADIO_GROUP", function() { return MAT_RADIO_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR", function() { return MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRadioButton", function() { return MatRadioButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRadioChange", function() { return MatRadioChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRadioGroup", function() { return MatRadioGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRadioModule", function() { return MatRadioModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatRadioButtonBase", function() { return _MatRadioButtonBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatRadioGroupBase", function() { return _MatRadioGroupBase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "CtHx");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





const _c0 = ["input"];
const _c1 = function () { return { enterDuration: 150 }; };
const _c2 = ["*"];
const MAT_RADIO_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-radio-default-options', {
    providedIn: 'root',
    factory: MAT_RADIO_DEFAULT_OPTIONS_FACTORY
});
function MAT_RADIO_DEFAULT_OPTIONS_FACTORY() {
    return {
        color: 'accent'
    };
}
// Increasing integer for generating unique ids for radio components.
let nextUniqueId = 0;
/**
 * Provider Expression that allows mat-radio-group to register as a ControlValueAccessor. This
 * allows it to support [(ngModel)] and ngControl.
 * @docs-private
 */
const MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => MatRadioGroup),
    multi: true
};
/** Change event object emitted by MatRadio and MatRadioGroup. */
class MatRadioChange {
    constructor(
    /** The MatRadioButton that emits the change event. */
    source, 
    /** The value of the MatRadioButton. */
    value) {
        this.source = source;
        this.value = value;
    }
}
/**
 * Injection token that can be used to inject instances of `MatRadioGroup`. It serves as
 * alternative token to the actual `MatRadioGroup` class which could cause unnecessary
 * retention of the class and its component metadata.
 */
const MAT_RADIO_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MatRadioGroup');
/**
 * Base class with all of the `MatRadioGroup` functionality.
 * @docs-private
 */
class _MatRadioGroupBase {
    constructor(_changeDetector) {
        this._changeDetector = _changeDetector;
        /** Selected value for the radio group. */
        this._value = null;
        /** The HTML name attribute applied to radio buttons in this group. */
        this._name = `mat-radio-group-${nextUniqueId++}`;
        /** The currently selected radio button. Should match value. */
        this._selected = null;
        /** Whether the `value` has been set to its initial value. */
        this._isInitialized = false;
        /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
        this._labelPosition = 'after';
        /** Whether the radio group is disabled. */
        this._disabled = false;
        /** Whether the radio group is required. */
        this._required = false;
        /** The method to be called in order to update ngModel */
        this._controlValueAccessorChangeFn = () => { };
        /**
         * onTouch function registered via registerOnTouch (ControlValueAccessor).
         * @docs-private
         */
        this.onTouched = () => { };
        /**
         * Event emitted when the group value changes.
         * Change events are only emitted when the value changes due to user interaction with
         * a radio button (the same behavior as `<input type-"radio">`).
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /** Name of the radio button group. All radio buttons inside this group will use this name. */
    get name() { return this._name; }
    set name(value) {
        this._name = value;
        this._updateRadioButtonNames();
    }
    /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
    get labelPosition() {
        return this._labelPosition;
    }
    set labelPosition(v) {
        this._labelPosition = v === 'before' ? 'before' : 'after';
        this._markRadiosForCheck();
    }
    /**
     * Value for the radio-group. Should equal the value of the selected radio button if there is
     * a corresponding radio button with a matching value. If there is not such a corresponding
     * radio button, this value persists to be applied in case a new radio button is added with a
     * matching value.
     */
    get value() { return this._value; }
    set value(newValue) {
        if (this._value !== newValue) {
            // Set this before proceeding to ensure no circular loop occurs with selection.
            this._value = newValue;
            this._updateSelectedRadioFromValue();
            this._checkSelectedRadioButton();
        }
    }
    _checkSelectedRadioButton() {
        if (this._selected && !this._selected.checked) {
            this._selected.checked = true;
        }
    }
    /**
     * The currently selected radio button. If set to a new radio button, the radio group value
     * will be updated to match the new selected button.
     */
    get selected() { return this._selected; }
    set selected(selected) {
        this._selected = selected;
        this.value = selected ? selected.value : null;
        this._checkSelectedRadioButton();
    }
    /** Whether the radio group is disabled */
    get disabled() { return this._disabled; }
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        this._markRadiosForCheck();
    }
    /** Whether the radio group is required */
    get required() { return this._required; }
    set required(value) {
        this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        this._markRadiosForCheck();
    }
    /**
     * Initialize properties once content children are available.
     * This allows us to propagate relevant attributes to associated buttons.
     */
    ngAfterContentInit() {
        // Mark this component as initialized in AfterContentInit because the initial value can
        // possibly be set by NgModel on MatRadioGroup, and it is possible that the OnInit of the
        // NgModel occurs *after* the OnInit of the MatRadioGroup.
        this._isInitialized = true;
    }
    /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     */
    _touch() {
        if (this.onTouched) {
            this.onTouched();
        }
    }
    _updateRadioButtonNames() {
        if (this._radios) {
            this._radios.forEach(radio => {
                radio.name = this.name;
                radio._markForCheck();
            });
        }
    }
    /** Updates the `selected` radio button from the internal _value state. */
    _updateSelectedRadioFromValue() {
        // If the value already matches the selected radio, do nothing.
        const isAlreadySelected = this._selected !== null && this._selected.value === this._value;
        if (this._radios && !isAlreadySelected) {
            this._selected = null;
            this._radios.forEach(radio => {
                radio.checked = this.value === radio.value;
                if (radio.checked) {
                    this._selected = radio;
                }
            });
        }
    }
    /** Dispatch change event with current selection and group value. */
    _emitChangeEvent() {
        if (this._isInitialized) {
            this.change.emit(new MatRadioChange(this._selected, this._value));
        }
    }
    _markRadiosForCheck() {
        if (this._radios) {
            this._radios.forEach(radio => radio._markForCheck());
        }
    }
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value
     */
    writeValue(value) {
        this.value = value;
        this._changeDetector.markForCheck();
    }
    /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param isDisabled Whether the control should be disabled.
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._changeDetector.markForCheck();
    }
}
_MatRadioGroupBase.ɵfac = function _MatRadioGroupBase_Factory(t) { return new (t || _MatRadioGroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
_MatRadioGroupBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatRadioGroupBase, inputs: { name: "name", labelPosition: "labelPosition", value: "value", selected: "selected", disabled: "disabled", required: "required", color: "color" }, outputs: { change: "change" } });
_MatRadioGroupBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
_MatRadioGroupBase.propDecorators = {
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    labelPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatRadioGroupBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
/**
 * A group of radio buttons. May contain one or more `<mat-radio-button>` elements.
 */
class MatRadioGroup extends _MatRadioGroupBase {
}
MatRadioGroup.ɵfac = function MatRadioGroup_Factory(t) { return ɵMatRadioGroup_BaseFactory(t || MatRadioGroup); };
MatRadioGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatRadioGroup, selectors: [["mat-radio-group"]], contentQueries: function MatRadioGroup_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatRadioButton, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._radios = _t);
    } }, hostAttrs: ["role", "radiogroup", 1, "mat-radio-group"], exportAs: ["matRadioGroup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR,
            { provide: MAT_RADIO_GROUP, useExisting: MatRadioGroup },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
MatRadioGroup.propDecorators = {
    _radios: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => MatRadioButton), { descendants: true },] }]
};
const ɵMatRadioGroup_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRadioGroup);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRadioGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mat-radio-group',
                exportAs: 'matRadioGroup',
                providers: [
                    MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR,
                    { provide: MAT_RADIO_GROUP, useExisting: MatRadioGroup },
                ],
                host: {
                    'role': 'radiogroup',
                    'class': 'mat-radio-group'
                }
            }]
    }], null, { _radios: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => MatRadioButton), { descendants: true }]
        }] }); })();
// Boilerplate for applying mixins to MatRadioButton.
/** @docs-private */
class MatRadioButtonBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
// As per Material design specifications the selection control radio should use the accent color
// palette by default. https://material.io/guidelines/components/selection-controls.html
const _MatRadioButtonMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinTabIndex"])(MatRadioButtonBase));
/**
 * Base class with all of the `MatRadioButton` functionality.
 * @docs-private
 */
class _MatRadioButtonBase extends _MatRadioButtonMixinBase {
    constructor(radioGroup, elementRef, _changeDetector, _focusMonitor, _radioDispatcher, _animationMode, _providerOverride, tabIndex) {
        super(elementRef);
        this._changeDetector = _changeDetector;
        this._focusMonitor = _focusMonitor;
        this._radioDispatcher = _radioDispatcher;
        this._animationMode = _animationMode;
        this._providerOverride = _providerOverride;
        this._uniqueId = `mat-radio-${++nextUniqueId}`;
        /** The unique ID for the radio button. */
        this.id = this._uniqueId;
        /**
         * Event emitted when the checked state of this radio button changes.
         * Change events are only emitted when the value changes due to user interaction with
         * the radio button (the same behavior as `<input type-"radio">`).
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Whether this radio is checked. */
        this._checked = false;
        /** Value assigned to this radio. */
        this._value = null;
        /** Unregister function for _radioDispatcher */
        this._removeUniqueSelectionListener = () => { };
        // Assertions. Ideally these should be stripped out by the compiler.
        // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.
        this.radioGroup = radioGroup;
        if (tabIndex) {
            this.tabIndex = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(tabIndex, 0);
        }
        this._removeUniqueSelectionListener =
            _radioDispatcher.listen((id, name) => {
                if (id !== this.id && name === this.name) {
                    this.checked = false;
                }
            });
    }
    /** Whether this radio button is checked. */
    get checked() { return this._checked; }
    set checked(value) {
        const newCheckedState = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        if (this._checked !== newCheckedState) {
            this._checked = newCheckedState;
            if (newCheckedState && this.radioGroup && this.radioGroup.value !== this.value) {
                this.radioGroup.selected = this;
            }
            else if (!newCheckedState && this.radioGroup && this.radioGroup.value === this.value) {
                // When unchecking the selected radio button, update the selected radio
                // property on the group.
                this.radioGroup.selected = null;
            }
            if (newCheckedState) {
                // Notify all radio buttons with the same name to un-check.
                this._radioDispatcher.notify(this.id, this.name);
            }
            this._changeDetector.markForCheck();
        }
    }
    /** The value of this radio button. */
    get value() { return this._value; }
    set value(value) {
        if (this._value !== value) {
            this._value = value;
            if (this.radioGroup !== null) {
                if (!this.checked) {
                    // Update checked when the value changed to match the radio group's value
                    this.checked = this.radioGroup.value === value;
                }
                if (this.checked) {
                    this.radioGroup.selected = this;
                }
            }
        }
    }
    /** Whether the label should appear after or before the radio button. Defaults to 'after' */
    get labelPosition() {
        return this._labelPosition || (this.radioGroup && this.radioGroup.labelPosition) || 'after';
    }
    set labelPosition(value) {
        this._labelPosition = value;
    }
    /** Whether the radio button is disabled. */
    get disabled() {
        return this._disabled || (this.radioGroup !== null && this.radioGroup.disabled);
    }
    set disabled(value) {
        this._setDisabled(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value));
    }
    /** Whether the radio button is required. */
    get required() {
        return this._required || (this.radioGroup && this.radioGroup.required);
    }
    set required(value) {
        this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
    }
    /** Theme color of the radio button. */
    get color() {
        return this._color ||
            (this.radioGroup && this.radioGroup.color) ||
            this._providerOverride && this._providerOverride.color || 'accent';
    }
    set color(newValue) { this._color = newValue; }
    /** ID of the native input element inside `<mat-radio-button>` */
    get inputId() { return `${this.id || this._uniqueId}-input`; }
    /** Focuses the radio button. */
    focus(options) {
        this._focusMonitor.focusVia(this._inputElement, 'keyboard', options);
    }
    /**
     * Marks the radio button as needing checking for change detection.
     * This method is exposed because the parent radio group will directly
     * update bound properties of the radio button.
     */
    _markForCheck() {
        // When group value changes, the button will not be notified. Use `markForCheck` to explicit
        // update radio button's status
        this._changeDetector.markForCheck();
    }
    ngOnInit() {
        if (this.radioGroup) {
            // If the radio is inside a radio group, determine if it should be checked
            this.checked = this.radioGroup.value === this._value;
            // Copy name from parent radio group
            this.name = this.radioGroup.name;
        }
    }
    ngAfterViewInit() {
        this._focusMonitor
            .monitor(this._elementRef, true)
            .subscribe(focusOrigin => {
            if (!focusOrigin && this.radioGroup) {
                this.radioGroup._touch();
            }
        });
    }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
        this._removeUniqueSelectionListener();
    }
    /** Dispatch change event with current value. */
    _emitChangeEvent() {
        this.change.emit(new MatRadioChange(this, this._value));
    }
    _isRippleDisabled() {
        return this.disableRipple || this.disabled;
    }
    _onInputClick(event) {
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `radio-button` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
    }
    /**
     * Triggered when the radio button received a click or the input recognized any change.
     * Clicking on a label element, will trigger a change event on the associated input.
     */
    _onInputChange(event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the `change` output.
        event.stopPropagation();
        const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
        this.checked = true;
        this._emitChangeEvent();
        if (this.radioGroup) {
            this.radioGroup._controlValueAccessorChangeFn(this.value);
            if (groupValueChanged) {
                this.radioGroup._emitChangeEvent();
            }
        }
    }
    /** Sets the disabled state and marks for check if a change occurred. */
    _setDisabled(value) {
        if (this._disabled !== value) {
            this._disabled = value;
            this._changeDetector.markForCheck();
        }
    }
}
_MatRadioButtonBase.ɵfac = function _MatRadioButtonBase_Factory(t) { return new (t || _MatRadioButtonBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MatRadioGroupBase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["UniqueSelectionDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](String), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](String)); };
_MatRadioButtonBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatRadioButtonBase, viewQuery: function _MatRadioButtonBase_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
    } }, inputs: { id: "id", checked: "checked", value: "value", labelPosition: "labelPosition", disabled: "disabled", required: "required", color: "color", name: "name", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], ariaDescribedby: ["aria-describedby", "ariaDescribedby"] }, outputs: { change: "change" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
_MatRadioButtonBase.ctorParameters = () => [
    { type: _MatRadioGroupBase },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"] },
    { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["UniqueSelectionDispatcher"] },
    { type: String },
    { type: undefined },
    { type: String }
];
_MatRadioButtonBase.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-labelledby',] }],
    ariaDescribedby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-describedby',] }],
    checked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    labelPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    _inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['input',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatRadioButtonBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
    }], function () { return [{ type: _MatRadioGroupBase }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"] }, { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["UniqueSelectionDispatcher"] }, { type: String }, { type: undefined }, { type: String }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-labelledby']
        }], ariaDescribedby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-describedby']
        }], _inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['input']
        }] }); })();
/**
 * A Material design radio-button. Typically placed inside of `<mat-radio-group>` elements.
 */
class MatRadioButton extends _MatRadioButtonBase {
    constructor(radioGroup, elementRef, changeDetector, focusMonitor, radioDispatcher, animationMode, providerOverride, tabIndex) {
        super(radioGroup, elementRef, changeDetector, focusMonitor, radioDispatcher, animationMode, providerOverride, tabIndex);
    }
}
MatRadioButton.ɵfac = function MatRadioButton_Factory(t) { return new (t || MatRadioButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RADIO_GROUP, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["UniqueSelectionDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RADIO_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex')); };
MatRadioButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatRadioButton, selectors: [["mat-radio-button"]], hostAttrs: [1, "mat-radio-button"], hostVars: 17, hostBindings: function MatRadioButton_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatRadioButton_focus_HostBindingHandler() { return ctx._inputElement.nativeElement.focus(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", -1)("id", ctx.id)("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-radio-checked", ctx.checked)("mat-radio-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-primary", ctx.color === "primary")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn");
    } }, inputs: { disableRipple: "disableRipple", tabIndex: "tabIndex" }, exportAs: ["matRadioButton"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c2, decls: 13, vars: 19, consts: [[1, "mat-radio-label"], ["label", ""], [1, "mat-radio-container"], [1, "mat-radio-outer-circle"], [1, "mat-radio-inner-circle"], ["type", "radio", 1, "mat-radio-input", "cdk-visually-hidden", 3, "id", "checked", "disabled", "tabIndex", "required", "change", "click"], ["input", ""], ["mat-ripple", "", 1, "mat-radio-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"], [1, "mat-ripple-element", "mat-radio-persistent-ripple"], [1, "mat-radio-label-content"], [2, "display", "none"]], template: function MatRadioButton_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MatRadioButton_Template_input_change_5_listener($event) { return ctx._onInputChange($event); })("click", function MatRadioButton_Template_input_click_5_listener($event) { return ctx._onInputClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.inputId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled)("tabIndex", ctx.tabIndex)("required", ctx.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", ctx.name)("value", ctx.value)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", true)("matRippleRadius", 20)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-radio-label-before", ctx.labelPosition == "before");
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]], styles: [".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:transform ease 280ms,background-color ease 280ms;width:20px;transform:scale(0.001)}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5)}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}.mat-radio-label-content{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{bottom:0;left:50%}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"], encapsulation: 2, changeDetection: 0 });
MatRadioButton.ctorParameters = () => [
    { type: MatRadioGroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_RADIO_GROUP,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"] },
    { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["UniqueSelectionDispatcher"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_RADIO_DEFAULT_OPTIONS,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['tabindex',] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRadioButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-radio-button',
                template: "<!-- TODO(jelbourn): render the radio on either side of the content -->\n<!-- TODO(mtlin): Evaluate trade-offs of using native radio vs. cost of additional bindings. -->\n<label [attr.for]=\"inputId\" class=\"mat-radio-label\" #label>\n  <!-- The actual 'radio' part of the control. -->\n  <div class=\"mat-radio-container\">\n    <div class=\"mat-radio-outer-circle\"></div>\n    <div class=\"mat-radio-inner-circle\"></div>\n    <input #input class=\"mat-radio-input cdk-visually-hidden\" type=\"radio\"\n        [id]=\"inputId\"\n        [checked]=\"checked\"\n        [disabled]=\"disabled\"\n        [tabIndex]=\"tabIndex\"\n        [attr.name]=\"name\"\n        [attr.value]=\"value\"\n        [required]=\"required\"\n        [attr.aria-label]=\"ariaLabel\"\n        [attr.aria-labelledby]=\"ariaLabelledby\"\n        [attr.aria-describedby]=\"ariaDescribedby\"\n        (change)=\"_onInputChange($event)\"\n        (click)=\"_onInputClick($event)\">\n\n    <!-- The ripple comes after the input so that we can target it with a CSS\n         sibling selector when the input is focused. -->\n    <div mat-ripple class=\"mat-radio-ripple mat-focus-indicator\"\n         [matRippleTrigger]=\"label\"\n         [matRippleDisabled]=\"_isRippleDisabled()\"\n         [matRippleCentered]=\"true\"\n         [matRippleRadius]=\"20\"\n         [matRippleAnimation]=\"{enterDuration: 150}\">\n\n      <div class=\"mat-ripple-element mat-radio-persistent-ripple\"></div>\n    </div>\n  </div>\n\n  <!-- The label content for radio control. -->\n  <div class=\"mat-radio-label-content\" [class.mat-radio-label-before]=\"labelPosition == 'before'\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </div>\n</label>\n",
                inputs: ['disableRipple', 'tabIndex'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                exportAs: 'matRadioButton',
                host: {
                    'class': 'mat-radio-button',
                    '[class.mat-radio-checked]': 'checked',
                    '[class.mat-radio-disabled]': 'disabled',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                    '[class.mat-primary]': 'color === "primary"',
                    '[class.mat-accent]': 'color === "accent"',
                    '[class.mat-warn]': 'color === "warn"',
                    // Needs to be -1 so the `focus` event still fires.
                    '[attr.tabindex]': '-1',
                    '[attr.id]': 'id',
                    '[attr.aria-label]': 'null',
                    '[attr.aria-labelledby]': 'null',
                    '[attr.aria-describedby]': 'null',
                    // Note: under normal conditions focus shouldn't land on this element, however it may be
                    // programmatically set, for example inside of a focus trap, in this case we want to forward
                    // the focus to the native element.
                    '(focus)': '_inputElement.nativeElement.focus()'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: [".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:transform ease 280ms,background-color ease 280ms;width:20px;transform:scale(0.001)}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5)}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}.mat-radio-label-content{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{bottom:0;left:50%}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"]
            }]
    }], function () { return [{ type: MatRadioGroup, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [MAT_RADIO_GROUP]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"] }, { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["UniqueSelectionDispatcher"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [MAT_RADIO_DEFAULT_OPTIONS]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['tabindex']
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatRadioModule {
}
MatRadioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatRadioModule });
MatRadioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatRadioModule_Factory(t) { return new (t || MatRadioModule)(); }, imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatRadioModule, { declarations: function () { return [MatRadioGroup, MatRadioButton]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]; }, exports: function () { return [MatRadioGroup, MatRadioButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRadioModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
                exports: [MatRadioGroup, MatRadioButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
                declarations: [MatRadioGroup, MatRadioButton]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=radio.js.map

/***/ })

}]);
//# sourceMappingURL=tools-scale-scale-module-es2015.js.map
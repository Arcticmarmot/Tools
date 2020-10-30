(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "Ut3L":
    /*!*******************************************************!*\
      !*** ./src/app/tools/templates/title/title.module.ts ***!
      \*******************************************************/

    /*! exports provided: TitleModule */

    /***/
    function Ut3L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TitleModule", function () {
        return TitleModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./title.component */
      "l2pl");

      var TitleModule = function TitleModule() {
        _classCallCheck(this, TitleModule);
      };

      TitleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TitleModule
      });
      TitleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TitleModule_Factory(t) {
          return new (t || TitleModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TitleModule, {
          declarations: [_title_component__WEBPACK_IMPORTED_MODULE_2__["TitleComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_title_component__WEBPACK_IMPORTED_MODULE_2__["TitleComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_title_component__WEBPACK_IMPORTED_MODULE_2__["TitleComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_title_component__WEBPACK_IMPORTED_MODULE_2__["TitleComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "l2pl":
    /*!**********************************************************!*\
      !*** ./src/app/tools/templates/title/title.component.ts ***!
      \**********************************************************/

    /*! exports provided: TitleComponent */

    /***/
    function l2pl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TitleComponent", function () {
        return TitleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var TitleComponent = /*#__PURE__*/function () {
        function TitleComponent() {
          _classCallCheck(this, TitleComponent);
        }

        _createClass(TitleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TitleComponent;
      }();

      TitleComponent.ɵfac = function TitleComponent_Factory(t) {
        return new (t || TitleComponent)();
      };

      TitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TitleComponent,
        selectors: [["app-title"]],
        inputs: {
          title: "title"
        },
        decls: 4,
        vars: 1,
        consts: [[1, "header"], [1, "sub-title"]],
        template: function TitleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
          }
        },
        styles: [".header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n}\n.header[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 50px;\n  color: #112233;\n  letter-spacing: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbHMvdGVtcGxhdGVzL3RpdGxlL0M6L1VzZXJzL2FyY3RpL0Rlc2t0b3AvQW5ndWxhci9Ub29scy9zcmMvYXBwL3Rvb2xzL3RlbXBsYXRlcy90aXRsZS90aXRsZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvdG9vbHMvdGVtcGxhdGVzL3RpdGxlL3RpdGxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNBRjtBREZBO0VBSUksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3Rvb2xzL3RlbXBsYXRlcy90aXRsZS90aXRsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvY3VzdG9tJztcbi5oZWFkZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICAuc3ViLXRpdGxle1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGNvbG9yOiBAYmxhY2s7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgfVxufVxuXG4iLCIuaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG59XG4uaGVhZGVyIC5zdWItdGl0bGUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjb2xvcjogIzExMjIzMztcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-title',
            templateUrl: './title.component.html',
            styleUrls: ['./title.component.less']
          }]
        }], function () {
          return [];
        }, {
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map
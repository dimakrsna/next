webpackHotUpdate("static/development/pages/pricing.js",{

/***/ "./view/components/container.tsx":
/*!***************************************!*\
  !*** ./view/components/container.tsx ***!
  \***************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header */ "./view/components/header/index.tsx");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer */ "./view/components/footer/index.tsx");
/* harmony import */ var _static_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../static/css/bootstrap.min.css */ "./static/css/bootstrap.min.css");
/* harmony import */ var _static_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static_css_animate_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../static/css/animate.css */ "./static/css/animate.css");
/* harmony import */ var _static_css_animate_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_css_animate_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _static_css_owl_carousel_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../static/css/owl.carousel.min.css */ "./static/css/owl.carousel.min.css");
/* harmony import */ var _static_css_owl_carousel_min_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_css_owl_carousel_min_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _static_css_all_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../static/css/all.css */ "./static/css/all.css");
/* harmony import */ var _static_css_all_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_css_all_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _static_css_flaticon_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../static/css/flaticon.css */ "./static/css/flaticon.css");
/* harmony import */ var _static_css_flaticon_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_css_flaticon_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _static_css_themify_icons_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../static/css/themify-icons.css */ "./static/css/themify-icons.css");
/* harmony import */ var _static_css_themify_icons_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_static_css_themify_icons_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _static_css_magnific_popup_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../static/css/magnific-popup.css */ "./static/css/magnific-popup.css");
/* harmony import */ var _static_css_magnific_popup_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_static_css_magnific_popup_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _static_css_slick_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../static/css/slick.css */ "./static/css/slick.css");
/* harmony import */ var _static_css_slick_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_static_css_slick_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _static_sass_style_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../../static/sass/style.scss */ "./static/sass/style.scss");
/* harmony import */ var _static_sass_style_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_static_sass_style_scss__WEBPACK_IMPORTED_MODULE_17__);





var _jsxFileName = "/Dima/Krama/works/krama.team/site/view/components/container.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;












 // // import '../static/css/aos.css'
// // import '../static/css/font-awesome.min.css'
// // import '../static/css/nice-select.css'
// // import '../static/css/swiper.min.css'

var Container =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Container, _React$Component);

  function Container() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Container);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Container).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Container, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isIndexPage = _this$props.isIndexPage,
          seoTitle = _this$props.seoTitle;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Ecobit ", seoTitle && "| ".concat(seoTitle)), __jsx("meta", {
        charSet: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), __jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), __jsx("link", {
        rel: "icon",
        href: "/static/img/favicon.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })), __jsx(_header__WEBPACK_IMPORTED_MODULE_7__["Header"], {
        isIndexPage: isIndexPage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), this.props.children, __jsx(_footer__WEBPACK_IMPORTED_MODULE_8__["Footer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }));
    }
  }]);

  return Container;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/***/ })

})
//# sourceMappingURL=pricing.js.0591096b4e7d286a9c4c.hot-update.js.map
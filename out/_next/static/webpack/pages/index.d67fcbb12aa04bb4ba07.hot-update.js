webpackHotUpdate_N_E("pages/index",{

/***/ "./hooks/useProducts.js":
/*!******************************!*\
  !*** ./hooks/useProducts.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ "./firebase/index.js");


var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var useProducts = function useProducts(order) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      products = _useState[0],
      setProducts = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_firebase__WEBPACK_IMPORTED_MODULE_2__["FirebaseContext"]),
      firebase = _useContext.firebase;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var getProducts = function getProducts() {
      firebase.db.collection('products').orderBy(order, 'desc').onSnapshot(manageSnapshot);
    };

    getProducts();
  }, []);

  function manageSnapshot(snapshot) {
    var products = snapshot.docs.map(function (doc) {
      return _objectSpread({
        id: doc.id
      }, doc.data());
    });
    setProducts(products);
  }

  return {
    products: products
  };
};

_s(useProducts, "HnnvNHc161Vvp2SLo35ghwgXg6Q=");

/* harmony default export */ __webpack_exports__["default"] = (useProducts);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _components_layout_productDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/productDetail */ "./components/layout/productDetail.js");
/* harmony import */ var _hooks_useProducts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useProducts */ "./hooks/useProducts.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");


var _jsxFileName = "C:\\Users\\Propietario\\Documents\\Matias\\cursos\\cursos2020\\React-Nextjs\\ProductHunt-Nextjs\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();







var Home = function Home() {
  _s();

  var _useProducts = Object(_hooks_useProducts__WEBPACK_IMPORTED_MODULE_4__["default"])('created'),
      products = _useProducts.products;

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    },
    __self: _this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    },
    __self: _this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    className: "productList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    },
    __self: _this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    },
    __self: _this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("ul", {
    className: "bg-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    },
    __self: _this
  }, products.map(function (product) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_components_layout_productDetail__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: product.id,
      product: product,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      },
      __self: _this
    });
  }))))));
};

_s(Home, "QXEuj9cgl4c0WATo9vBomRv8JeI=", false, function () {
  return [_hooks_useProducts__WEBPACK_IMPORTED_MODULE_4__["default"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlUHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVByb2R1Y3RzIiwib3JkZXIiLCJ1c2VTdGF0ZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJ1c2VDb250ZXh0IiwiRmlyZWJhc2VDb250ZXh0IiwiZmlyZWJhc2UiLCJ1c2VFZmZlY3QiLCJnZXRQcm9kdWN0cyIsImRiIiwiY29sbGVjdGlvbiIsIm9yZGVyQnkiLCJvblNuYXBzaG90IiwibWFuYWdlU25hcHNob3QiLCJzbmFwc2hvdCIsImRvY3MiLCJtYXAiLCJkb2MiLCJpZCIsImRhdGEiLCJIb21lIiwicHJvZHVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEtBQUssRUFBSTtBQUFBOztBQUFBLGtCQUVPQyxzREFBUSxDQUFDLEVBQUQsQ0FGZjtBQUFBLE1BRWxCQyxRQUZrQjtBQUFBLE1BRVJDLFdBRlE7O0FBQUEsb0JBR0pDLHdEQUFVLENBQUVDLHlEQUFGLENBSE47QUFBQSxNQUdqQkMsUUFIaUIsZUFHakJBLFFBSGlCOztBQUt6QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkYsY0FBUSxDQUFDRyxFQUFULENBQVlDLFVBQVosQ0FBdUIsVUFBdkIsRUFDR0MsT0FESCxDQUNZWCxLQURaLEVBQ2tCLE1BRGxCLEVBRUdZLFVBRkgsQ0FFY0MsY0FGZDtBQUdELEtBSkQ7O0FBS0FMLGVBQVc7QUFDWixHQVBRLEVBT04sRUFQTSxDQUFUOztBQVNBLFdBQVNLLGNBQVQsQ0FBeUJDLFFBQXpCLEVBQW1DO0FBQ2pDLFFBQU1aLFFBQVEsR0FBR1ksUUFBUSxDQUFDQyxJQUFULENBQWNDLEdBQWQsQ0FBbUIsVUFBQUMsR0FBRyxFQUFJO0FBQ3pDO0FBQ0VDLFVBQUUsRUFBRUQsR0FBRyxDQUFDQztBQURWLFNBRUtELEdBQUcsQ0FBQ0UsSUFBSixFQUZMO0FBSUQsS0FMZ0IsQ0FBakI7QUFNQWhCLGVBQVcsQ0FBQ0QsUUFBRCxDQUFYO0FBQ0Q7O0FBRUQsU0FBTztBQUNIQSxZQUFRLEVBQVJBO0FBREcsR0FBUDtBQUdILENBM0JEOztHQUFNSCxXOztBQTZCU0EsMEVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTXFCLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxxQkFFSXJCLGtFQUFXLENBQUMsU0FBRCxDQUZmO0FBQUEsTUFFVEcsUUFGUyxnQkFFVEEsUUFGUzs7QUFJakIsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJQSxRQUFRLENBQUNjLEdBQVQsQ0FBYyxVQUFBSyxPQUFPO0FBQUEsV0FDckIsMERBQUMsd0VBQUQ7QUFDRSxTQUFHLEVBQUVBLE9BQU8sQ0FBQ0gsRUFEZjtBQUVFLGFBQU8sRUFBRUcsT0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRHFCO0FBQUEsR0FBckIsQ0FESixDQURGLENBREYsQ0FERixDQURGLENBREY7QUFrQkQsQ0F0QkQ7O0dBQU1ELEk7VUFFaUJyQiwwRDs7O0tBRmpCcUIsSTtBQXdCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDY3ZmNiYjEyYWEwNGJiNGJhMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGaXJlYmFzZUNvbnRleHQgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcclxuXHJcbmNvbnN0IHVzZVByb2R1Y3RzID0gb3JkZXIgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgeyBmaXJlYmFzZSB9ID0gdXNlQ29udGV4dCggRmlyZWJhc2VDb250ZXh0ICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3QgZ2V0UHJvZHVjdHMgPSAoKSA9PiB7XHJcbiAgICAgICAgZmlyZWJhc2UuZGIuY29sbGVjdGlvbigncHJvZHVjdHMnKVxyXG4gICAgICAgICAgLm9yZGVyQnkoIG9yZGVyLCdkZXNjJylcclxuICAgICAgICAgIC5vblNuYXBzaG90KG1hbmFnZVNuYXBzaG90KVxyXG4gICAgICB9XHJcbiAgICAgIGdldFByb2R1Y3RzKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gbWFuYWdlU25hcHNob3QoIHNuYXBzaG90ICl7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gc25hcHNob3QuZG9jcy5tYXAoIGRvYyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgICAuLi5kb2MuZGF0YSgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgc2V0UHJvZHVjdHMocHJvZHVjdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvZHVjdHNcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlUHJvZHVjdHM7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcbmltcG9ydCBQcm9kdWN0RGV0YWlsIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L3Byb2R1Y3REZXRhaWwnO1xuaW1wb3J0IHVzZVByb2R1Y3RzIGZyb20gJy4uL2hvb2tzL3VzZVByb2R1Y3RzJztcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcblxuICBjb25zdCB7IHByb2R1Y3RzIH0gPSB1c2VQcm9kdWN0cygnY3JlYXRlZCcpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdExpc3RcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICB7IHByb2R1Y3RzLm1hcCggcHJvZHVjdCA9PiAoXG4gICAgICAgICAgICAgICAgPFByb2R1Y3REZXRhaWxcbiAgICAgICAgICAgICAgICAgIGtleT17cHJvZHVjdC5pZH1cbiAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9e3Byb2R1Y3R9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwic291cmNlUm9vdCI6IiJ9
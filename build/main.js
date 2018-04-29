require('source-map-support/register');
module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        /******/ configurable: false,
        /******/ enumerable: true,
        /******/ get: getter
        /******/
      });
      /******/
    }
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = '/'; // Load entry module and return exports
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 1));
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /***/ function(module, exports) {
      module.exports = require('express');

      /***/
    },
    /* 1 */
    /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(2);

      /***/
    },
    /* 2 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(
        0
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_0_express__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(
        3
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_1_body_parser__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_morgan__ = __webpack_require__(
        4
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_morgan___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_2_morgan__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(
        5
      );

      const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

      // Middlewares
      app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.json());
      app.use(
        __WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.urlencoded({
          extended: true
        })
      );
      app.use(__WEBPACK_IMPORTED_MODULE_2_morgan___default()('dev'));

      app.use(__WEBPACK_IMPORTED_MODULE_3__router__['a' /* default */]);

      app.listen(process.env.port || 3002, () => {
        console.log('Listening to port 3002');
      });

      /***/
    },
    /* 3 */
    /***/ function(module, exports) {
      module.exports = require('body-parser');

      /***/
    },
    /* 4 */
    /***/ function(module, exports) {
      module.exports = require('morgan');

      /***/
    },
    /* 5 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(
        0
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_0_express__
      );

      const router = Object(__WEBPACK_IMPORTED_MODULE_0_express__['Router'])();

      /* harmony default export */ __webpack_exports__['a'] = router;

      /***/
    }
    /******/
  ]
);
//# sourceMappingURL=main.map

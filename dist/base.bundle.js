/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ModuleHeader.ts":
/*!*************************!*\
  !*** ./ModuleHeader.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar ModuleHeader = /** @class */ (function () {\n    function ModuleHeader(viewport) {\n        var _this = this;\n        this._mobilenav = document.querySelector(\"#mNav\");\n        this._mobileopen = document.querySelector(\".openbtn\");\n        this._mobileclose = document.querySelector(\".closebtn\");\n        this._headerImg = document.querySelector(\"#header-img\");\n        this._navwidth = \"100vw\";\n        this.addHoverEffect = function () {\n            document.querySelector(\"header\").classList.add(\"move\");\n            _this._headerImg.classList.add(\"fade\");\n        };\n        this.removeHoverEffect = function () {\n            document.querySelector(\"header\").classList.remove(\"move\");\n            _this._headerImg.classList.remove(\"fade\");\n        };\n        this.openNav = function () {\n            _this._mobilenav.style.width = _this._navwidth;\n            _this._mobileclose.style.display = \"block\";\n        };\n        this.closeNav = function () {\n            _this._mobileclose.style.display = \"none\";\n            _this._mobilenav.style.width = \"0vw\";\n        };\n        if (viewport < 1025) {\n            this.addListeners(viewport);\n        }\n        else {\n            this.addDesktopListeners();\n        }\n    }\n    ModuleHeader.prototype.addDesktopListeners = function () {\n        document\n            .querySelector(\"header\")\n            .addEventListener(\"mouseover\", this.addHoverEffect);\n        document\n            .querySelector(\"header\")\n            .addEventListener(\"mouseout\", this.removeHoverEffect);\n    };\n    ModuleHeader.prototype.addListeners = function (viewport) {\n        if (viewport > 400) {\n            this._navwidth = \"60vw\";\n        }\n        this._mobileopen.addEventListener(\"click\", this.openNav);\n        this._mobileclose.addEventListener(\"click\", this.closeNav);\n    };\n    return ModuleHeader;\n}());\nexports.default = ModuleHeader;\n\n\n//# sourceURL=webpack:///./ModuleHeader.ts?");

/***/ }),

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar ModuleHeader_1 = __webpack_require__(/*! ./ModuleHeader */ \"./ModuleHeader.ts\");\nvar App = /** @class */ (function () {\n    function App() {\n        var _this = this;\n        this.awake = function () {\n            _this._viewport = _this.setViewport();\n            _this.setupModules();\n            // this._dataloader = new ModuleDataLoader();\n        };\n        this.build();\n    }\n    App.prototype.build = function () {\n        window.addEventListener(\"load\", this.awake);\n    };\n    App.prototype.setViewport = function () {\n        return window.innerWidth;\n    };\n    App.prototype.setupModules = function () {\n        this._header = new ModuleHeader_1.default(this._viewport);\n    };\n    return App;\n}());\nexports.App = App;\nvar app = new App();\n\n\n//# sourceURL=webpack:///./app.ts?");

/***/ })

/******/ });
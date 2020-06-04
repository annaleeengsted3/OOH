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
/******/ 	return __webpack_require__(__webpack_require__.s = "./ModuleAffaldsDatabase.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./DataLoader.ts":
/*!***********************!*\
  !*** ./DataLoader.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataLoader = /** @class */ (function () {\n    function DataLoader(url) {\n        this._URL = url;\n    }\n    DataLoader.prototype.loadData = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var jsonData, _a;\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0: return [4 /*yield*/, fetch(this._URL)];\n                    case 1:\n                        jsonData = _b.sent();\n                        _a = this;\n                        return [4 /*yield*/, jsonData.json()];\n                    case 2:\n                        _a._data = _b.sent();\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    Object.defineProperty(DataLoader.prototype, \"getData\", {\n        get: function () {\n            return this._data;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return DataLoader;\n}());\nexports.default = DataLoader;\n\n\n//# sourceURL=webpack:///./DataLoader.ts?");

/***/ }),

/***/ "./DataURLs.ts":
/*!*********************!*\
  !*** ./DataURLs.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataURLs = /** @class */ (function () {\n    function DataURLs() {\n        this._URLS = {\n            index: \"http://osomhavet.dk/wordpress/wp-json/wp/v2/forside_billeder/\",\n            omos: \"http://osomhavet.dk/wordpress/wp-json/wp/v2/om_os/\",\n            hvem_er_vi: \"http://osomhavet.dk/wordpress/wp-json/wp/v2/hvem_er_vi/\",\n            kommende_events: \"http://osomhavet.dk/wordpress/wp-json/wp/v2/kommende_events/\",\n            komm_events_billeder: \"http://osomhavet.dk/wordpress/wp-json/wp/v2/komm_events-forside_\",\n            viden: \"http://osomhavet.dk/wordpress/wp-json/wp/v2/viden_navigation/\",\n            affaldsdb: \"http://osomhavet.dk/wordpress/wp-json/wp/v2/affalds-database/\",\n            spoerg_en_biolog: \"http://osomhavet.dk/wordpress/wp-json/wp/v2/sprg_en_biolog/\",\n            viden_og_raad: \"http://osomhavet.dk/wordpress/wp-json/wp/v2/viden_og_gode_rd/\",\n            nyttige_links: \"http://osomhavet.dk/wordpress/wp-json/wp/v2/media?parent=136\",\n            kontakt: \"http://osomhavet.dk/wordpress/wp-json/wp/v2/kontakt/\",\n        };\n    }\n    Object.defineProperty(DataURLs.prototype, \"getURLS\", {\n        get: function () {\n            return this._URLS;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return DataURLs;\n}());\nexports.DataURLs = DataURLs;\n\n\n//# sourceURL=webpack:///./DataURLs.ts?");

/***/ }),

/***/ "./IntObserver.ts":
/*!************************!*\
  !*** ./IntObserver.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar IntObserver = /** @class */ (function () {\n    function IntObserver(elements) {\n        this.elms = elements;\n        this.setupIntObserver(this.elms);\n    }\n    IntObserver.prototype.setupIntObserver = function (elements) {\n        var config = {\n            root: null,\n            rootMargin: \"0px\",\n            threshold: [0, 0.25],\n        };\n        var observer = new IntersectionObserver(function (entries) {\n            entries.forEach(function (entry) {\n                if (entry.intersectionRatio > 0.25) {\n                    entry.target.classList.add(\"visible\");\n                }\n                else {\n                    entry.target.classList.remove(\"visible\");\n                }\n            });\n        }, config);\n        elements.forEach(function (elem) {\n            observer.observe(elem);\n        });\n    };\n    return IntObserver;\n}());\nexports.IntObserver = IntObserver;\n\n\n//# sourceURL=webpack:///./IntObserver.ts?");

/***/ }),

/***/ "./ModuleAffaldsDatabase.ts":
/*!**********************************!*\
  !*** ./ModuleAffaldsDatabase.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataLoader_1 = __webpack_require__(/*! ./DataLoader */ \"./DataLoader.ts\");\nvar DataURLs_1 = __webpack_require__(/*! ./DataURLs */ \"./DataURLs.ts\");\nvar IntObserver_1 = __webpack_require__(/*! ./IntObserver */ \"./IntObserver.ts\");\nvar counterup2_1 = __webpack_require__(/*! counterup2 */ \"./node_modules/counterup2/dist/index.js\");\nvar ModuleAffaldsDatabase = /** @class */ (function () {\n    function ModuleAffaldsDatabase() {\n        this._image = document.querySelector(\".img2\");\n        this._dataviz = document.querySelector(\".data-viz\");\n        this._imgA = document.querySelector(\"img.imgA\");\n        this._countelement = document.querySelector(\".details .counter\");\n        this._dataURLs = new DataURLs_1.DataURLs().getURLS;\n        this._url = this._dataURLs.affaldsdb;\n        this.getDatafromJSON();\n    }\n    ModuleAffaldsDatabase.prototype.getDatafromJSON = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        this._dataLoader = new DataLoader_1.default(this._url);\n                        return [4 /*yield*/, this._dataLoader.loadData()];\n                    case 1:\n                        _a.sent();\n                        this._data = this._dataLoader.getData;\n                        this.showData(this._data);\n                        this.createObserver();\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    ModuleAffaldsDatabase.prototype.createObserver = function () {\n        this._watchelements = document.querySelectorAll(\".load\");\n        this._observer = new IntObserver_1.IntObserver(this._watchelements);\n    };\n    ModuleAffaldsDatabase.prototype.showData = function (data) {\n        document.querySelector(\".big\").innerHTML = data[0].kg_indsamlet_affald;\n        document.querySelector(\".latest\").innerHTML =\n            data[0].sidste_events_lokation;\n        document.querySelector(\".latest-kg\").innerHTML =\n            data[0].kg_indsamlet_til_sidste_event;\n        document.querySelector(\".latest-kg\").innerHTML =\n            data[0].kg_indsamlet_til_sidste_event;\n        this._dataviz.src = data[0].data_visualisering.guid;\n        this._dataviz.alt = data[0].data_visualisering.post_title;\n        document.querySelector(\".subtitle\").innerHTML = data[0].subtitle;\n        document.querySelector(\".content\").innerHTML = data[0].tekstbeskrivelse;\n        this._image.src = data[0].billede.guid;\n        this._image.alt = data[0].billede.post_title;\n        this.startCounter();\n    };\n    ModuleAffaldsDatabase.prototype.startCounter = function () {\n        counterup2_1.default(this._countelement, {\n            duration: 2000,\n            delay: 50,\n        });\n        // this._imgA.style.animation = \"fade 6000ms both\";\n    };\n    return ModuleAffaldsDatabase;\n}());\nexports.default = ModuleAffaldsDatabase;\nvar module_om_os = new ModuleAffaldsDatabase();\n\n\n//# sourceURL=webpack:///./ModuleAffaldsDatabase.ts?");

/***/ }),

/***/ "./node_modules/counterup2/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/counterup2/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(t,\"__esModule\",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&\"object\"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:t}),2&e&&\"string\"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,\"a\",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p=\"\",n(n.s=0)}([function(t,e,n){\"use strict\";n.r(e),n.d(e,\"divideNumbers\",function(){return o}),n.d(e,\"hasComma\",function(){return i}),n.d(e,\"isFloat\",function(){return u}),n.d(e,\"decimalPlaces\",function(){return l});e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.action,i=void 0===n?\"start\":n,u=e.duration,l=void 0===u?1e3:u,a=e.delay,c=void 0===a?16:a,d=e.lang,f=void 0===d?void 0:d;if(\"stop\"!==i){if(r(t),/[0-9]/.test(t.innerHTML)){var s=o(t.innerHTML,{duration:l||t.getAttribute(\"data-duration\"),lang:f||document.querySelector(\"html\").getAttribute(\"lang\")||void 0,delay:c||t.getAttribute(\"data-delay\")});t._countUpOrigInnerHTML=t.innerHTML,t.innerHTML=s[0],t.style.visibility=\"visible\",t.countUpTimeout=setTimeout(function e(){t.innerHTML=s.shift(),s.length?(clearTimeout(t.countUpTimeout),t.countUpTimeout=setTimeout(e,c)):t._countUpOrigInnerHTML=void 0},c)}}else r(t)};var r=function(t){clearTimeout(t.countUpTimeout),t._countUpOrigInnerHTML&&(t.innerHTML=t._countUpOrigInnerHTML,t._countUpOrigInnerHTML=void 0),t.style.visibility=\"\"},o=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.duration,r=void 0===n?1e3:n,o=e.delay,i=void 0===o?16:o,u=e.lang,l=void 0===u?void 0:u,a=r/i,c=t.toString().split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/),d=[],f=0;f<a;f++)d.push(\"\");for(var s=0;s<c.length;s++)if(/([0-9.][,.0-9]*[0-9]*)/.test(c[s])&&!/<[^>]+>/.test(c[s])){var p=c[s],v=/[0-9]+,[0-9]+/.test(p);p=p.replace(/,/g,\"\");for(var g=/^[0-9]+\\.[0-9]+$/.test(p),y=g?(p.split(\".\")[1]||[]).length:0,b=d.length-1,m=a;m>=1;m--){var T=parseInt(p/a*m,10);g&&(T=parseFloat(p/a*m).toFixed(y),T=parseFloat(T).toLocaleString(l)),v&&(T=T.toLocaleString(l)),d[b--]+=T}}else for(var M=0;M<a;M++)d[M]+=c[s];return d[d.length]=t.toString(),d},i=function(t){return/[0-9]+,[0-9]+/.test(t)},u=function(t){return/^[0-9]+\\.[0-9]+$/.test(t)},l=function(t){return u(t)?(t.split(\".\")[1]||[]).length:0}}])});\n\n//# sourceURL=webpack:///./node_modules/counterup2/dist/index.js?");

/***/ })

/******/ });
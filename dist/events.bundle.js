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
/******/ 	return __webpack_require__(__webpack_require__.s = "./ModuleKommendeEvents.ts");
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
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataLoader = /** @class */ (function () {\n    // constructor(url: string[]) {\n    //   this._URLs = url;\n    // }\n    function DataLoader(url) {\n        this._URL = url;\n    }\n    DataLoader.prototype.loadData = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var jsonData, _a;\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0: return [4 /*yield*/, fetch(this._URL)];\n                    case 1:\n                        jsonData = _b.sent();\n                        _a = this;\n                        return [4 /*yield*/, jsonData.json()];\n                    case 2:\n                        _a._data = _b.sent();\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    Object.defineProperty(DataLoader.prototype, \"getData\", {\n        get: function () {\n            return this._data;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return DataLoader;\n}());\nexports.default = DataLoader;\n\n\n//# sourceURL=webpack:///./DataLoader.ts?");

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
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar IntObserver = /** @class */ (function () {\n    function IntObserver(elements) {\n        this.elms = elements;\n        this.setupIntObserver();\n    }\n    IntObserver.prototype.setupIntObserver = function () {\n        var config = {\n            root: null,\n            rootMargin: \"0px\",\n            threshold: [0, 0.25],\n        };\n        var observer = new IntersectionObserver(function (entries) {\n            entries.forEach(function (entry) {\n                console.log(entry);\n                if (entry.intersectionRatio > 0.25) {\n                    entry.target.classList.add(\"visible\");\n                }\n                else {\n                    entry.target.classList.remove(\"visible\");\n                }\n            });\n        }, config);\n        this.elms.forEach(function (elem) {\n            observer.observe(elem);\n        });\n    };\n    return IntObserver;\n}());\nexports.IntObserver = IntObserver;\n\n\n//# sourceURL=webpack:///./IntObserver.ts?");

/***/ }),

/***/ "./ModuleKommendeEvents.ts":
/*!*********************************!*\
  !*** ./ModuleKommendeEvents.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataLoader_1 = __webpack_require__(/*! ./DataLoader */ \"./DataLoader.ts\");\nvar DataURLs_1 = __webpack_require__(/*! ./DataURLs */ \"./DataURLs.ts\");\nvar IntObserver_1 = __webpack_require__(/*! ./IntObserver */ \"./IntObserver.ts\");\nvar ModuleKommendeEvents = /** @class */ (function () {\n    function ModuleKommendeEvents() {\n        this._ke_image = document.querySelector(\"#kommende-events img\");\n        this._dataURLs = new DataURLs_1.DataURLs().getURLS;\n        this._url = this._dataURLs.kommende_events;\n        this._url2 = this._dataURLs.komm_events_billeder;\n        this.getDatafromJSON();\n    }\n    ModuleKommendeEvents.prototype.getDatafromJSON = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        this._dataLoader = new DataLoader_1.default(this._url);\n                        return [4 /*yield*/, this._dataLoader.loadData()];\n                    case 1:\n                        _a.sent();\n                        this._events = this._dataLoader.getData;\n                        this.getImgfromJSON();\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    ModuleKommendeEvents.prototype.getImgfromJSON = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        this._dataLoader = new DataLoader_1.default(this._url2);\n                        return [4 /*yield*/, this._dataLoader.loadData()];\n                    case 1:\n                        _a.sent();\n                        this._imgs = this._dataLoader.getData;\n                        this.showData();\n                        this.createObserver();\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    ModuleKommendeEvents.prototype.createObserver = function () {\n        var watchElements = document.querySelectorAll(\".load\");\n        var observer = new IntObserver_1.IntObserver(watchElements);\n    };\n    ModuleKommendeEvents.prototype.showData = function () {\n        var dest = document.querySelector(\"#kommende-events .events-container\");\n        dest.innerHTML = \"\";\n        this._events.forEach(function (event) {\n            var template = \"\\n\\n                                           <article class = \\\"event load\\\">\\n                                           <div class=\\\"left\\\">\\n                                            <h3>\" + event.dato + \"</h3>\\n                                            <div>\\n                                             <p class=\\\"month\\\">\" + event.dato_maaned + \"</p>\\n                                             <p class=\\\"time\\\">\" + event.dato_tidsinterval + \"</p>\\n                                            </div>\\n                                           </div>\\n\\n                                           <div class=\\\"right\\\">\\n                                           <h3>\" + event.title.rendered + \"</h3>\\n                                           <p>\" + event.kort_tekst + \"</p>\\n                                           <p class=\\\"bold\\\">\" + event.adresse_2 + \"</p>\\n                                           <div>\\n                                           <a href=\\\"event.html?id=\" + event.id + \"\\\" class=\\\"read-more-button\\\">L\\u00E6s mere</a>\\n                                           <a href=\\\"\" + event.fb_link + \"\\\" class=\\\"fb-button\\\" target=\\\"_blank\\\">Meld dig til \\n       <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"8\\\" height=\\\"9.089\\\" viewBox=\\\"0 0 8 9.089\\\"><g transform=\\\"translate(-0.394 0.455)\\\"><rect width=\\\"8\\\" height=\\\"9\\\" transform=\\\"translate(0.394 -0.455)\\\" fill=\\\"none\\\"/><path d=\\\"M82.87,8.468V4.61h1.317L84.375,3.1H82.87V2.164c0-.423.141-.753.753-.753h.8V.047C84.234.047,83.764,0,83.246,0a1.816,1.816,0,0,0-1.929,1.976V3.1H80V4.61h1.317V8.468Z\\\" transform=\\\"translate(-77.927 0.167)\\\" fill=\\\"#f8f9fa\\\" fill-rule=\\\"evenodd\\\"/></g></svg>\\n                                           </a>\\n                                           </div>\\n                                           </div>\\n                   \";\n            dest.insertAdjacentHTML(\"beforeend\", template);\n        });\n        this._ke_image.src = \"\" + this._imgs[0].forside_billede.guid;\n        //    this._desktop.setAttribute(\n        //      \"srcset\",\n        //      `${this._data[0].desktop_fallback.guid}`\n        //    );\n    };\n    return ModuleKommendeEvents;\n}());\nexports.default = ModuleKommendeEvents;\nvar module_om_os = new ModuleKommendeEvents();\n\n\n//# sourceURL=webpack:///./ModuleKommendeEvents.ts?");

/***/ })

/******/ });
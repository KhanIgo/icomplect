/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/ham.js":
/*!***********************!*\
  !*** ./src/js/ham.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(function ($) {\n  $('.js-header-ham').click(function (e) {\n    $(this).toggleClass('is-active');\n    $('.b-header__links').toggleClass('is-active');\n    $('.b-header__nav').toggleClass('is-active');\n  });\n}); //\n\n//# sourceURL=webpack:///./src/js/ham.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// import jquery from 'jquery';\n__webpack_require__(/*! ./ham */ \"./src/js/ham.js\");\n\n__webpack_require__(/*! ./nav-scroll */ \"./src/js/nav-scroll.js\");\n\n__webpack_require__(/*! ./tab */ \"./src/js/tab.js\");\n\n__webpack_require__(/*! ./map */ \"./src/js/map.js\");\n\n__webpack_require__(/*! ./video */ \"./src/js/video.js\"); // window.jQuery = jquery;\n// window.$ = jquery;\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/map.js":
/*!***********************!*\
  !*** ./src/js/map.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import jquery from 'jquery';\nfunction init_mapcatalog() {\n  var myPlacemarks = get_placemarks();\n  myMap = new ymaps.Map(\"map\", {\n    center: [56.260364, 50.019876],\n    zoom: 5\n  });\n  myMap.controls.remove('fullscreenControl');\n  myMap.controls.remove('trafficControl');\n  myPlacemarks.forEach(function (Placemark) {\n    var myPlacemark = new ymaps.Placemark([Placemark.latitude, Placemark.longitude], {\n      data: [{\n        weight: Placemark.count,\n        color: Placemark.color\n      }],\n      hintContent: Placemark.name + '<br>' + Placemark.hint\n    }, {\n      iconLayout: 'default#pieChart',\n      iconPieChartRadius: 20,\n      iconPieChartCoreRadius: 15\n    });\n    myPlacemark.events.add('click', function () {\n      show_group(Placemark.id);\n    });\n    myMap.geoObjects.add(myPlacemark);\n  }); // $(document).on('click', '.mapcatalog-modal.warehousegroup', function (e) {\n  //     if ($(document).find(e.target).length && !$(e.target).parents('.mapcatalog-modal-content').length) {\n  //         hide_group($($(e.target).parents('.mapcatalog-modal')[0] || $(e.target)[0]));\n  //     }\n  // });\n  // $('.close').on('click', function (e) {\n  //     hide_group($(e.target).parents('.mapcatalog-modal'));\n  // });\n}\n\nfunction get_placemarks() {\n  var myPlacemarks = [{\n    \"count\": 1,\n    \"name\": \"Алтайская (РЖД)\",\n    \"hint\": \"Колесная пара б/у: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"83.926246\",\n    \"latitude\": 53.404339,\n    \"id\": 181\n  }, {\n    \"count\": 5,\n    \"name\": \"Арзамас (ВРК-3)\",\n    \"hint\": \"Рама боковая: 5\",\n    \"color\": \"#ffab00\",\n    \"longitude\": \"43.866146\",\n    \"latitude\": 55.42283,\n    \"id\": 156\n  }, {\n    \"count\": 128,\n    \"name\": \"Артём-Приморский\",\n    \"hint\": \"Балка надрессорная: 61 <br>Рама боковая: 67\",\n    \"color\": \"#89ff00\",\n    \"longitude\": \"132.192412\",\n    \"latitude\": 43.380496,\n    \"id\": 261\n  }, {\n    \"count\": 56,\n    \"name\": \"Арчеда (Фролово)\",\n    \"hint\": \"АП Фрикционный: 41 <br>АП Эластомерный: 15\",\n    \"color\": \"#ffff00\",\n    \"longitude\": \"43.62997\",\n    \"latitude\": 49.766594,\n    \"id\": 259\n  }, {\n    \"count\": 1,\n    \"name\": \"Аскиз (ВРК-2)\",\n    \"hint\": \"Рама боковая: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"90.420446\",\n    \"latitude\": 53.13192,\n    \"id\": 81\n  }, {\n    \"count\": 1,\n    \"name\": \"Бензин (ВРК-2)\",\n    \"hint\": \"Колесная пара б/у: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"56.090734\",\n    \"latitude\": 54.837545,\n    \"id\": 83\n  }, {\n    \"count\": 1,\n    \"name\": \"Бирюлево (РЖД)\",\n    \"hint\": \"Колесная пара б/у: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"37.717797\",\n    \"latitude\": 55.660805,\n    \"id\": 185\n  }, {\n    \"count\": 7,\n    \"name\": \"Боготол (РЖД)\",\n    \"hint\": \"Колесная пара б/у: 7\",\n    \"color\": \"#ffae00\",\n    \"longitude\": \"89.525499\",\n    \"latitude\": 56.210352,\n    \"id\": 105\n  }, {\n    \"count\": 2,\n    \"name\": \"Бологое (ВРК-3)\",\n    \"hint\": \"Колесная пара б/у: 2\",\n    \"color\": \"#ffa600\",\n    \"longitude\": \"34.086385\",\n    \"latitude\": 57.879248,\n    \"id\": 151\n  }, {\n    \"count\": 5,\n    \"name\": \"Борзя (РЖД)\",\n    \"hint\": \"Колесная пара б/у: 4 <br>Рама боковая: 1\",\n    \"color\": \"#ffab00\",\n    \"longitude\": \"116.519209\",\n    \"latitude\": 50.390856,\n    \"id\": 186\n  }, {\n    \"count\": 2,\n    \"name\": \"Буй (РЖД)\",\n    \"hint\": \"Балка надрессорная: 2\",\n    \"color\": \"#ffa600\",\n    \"longitude\": \"41.563853\",\n    \"latitude\": 58.456742,\n    \"id\": 223\n  }, {\n    \"count\": 3,\n    \"name\": \"Вихоревка (ВРК-3)\",\n    \"hint\": \"Рама боковая: 3\",\n    \"color\": \"#ffa800\",\n    \"longitude\": \"101.170396\",\n    \"latitude\": 56.120718,\n    \"id\": 148\n  }, {\n    \"count\": 104,\n    \"name\": \"ВКМ Старый Оскол\",\n    \"hint\": \"Балка надрессорная: 61 <br>Рама боковая: 43\",\n    \"color\": \"#b0ff00\",\n    \"longitude\": \"37.909337\",\n    \"latitude\": 51.230606,\n    \"id\": 267\n  }, {\n    \"count\": 30,\n    \"name\": \"Волховстрой (ВРК-2)\",\n    \"hint\": \"Балка надрессорная: 22 <br>Рама боковая: 8\",\n    \"color\": \"#ffd400\",\n    \"longitude\": \"32.301073\",\n    \"latitude\": 59.921777,\n    \"id\": 187\n  }, {\n    \"count\": 12,\n    \"name\": \"ВРП Магдагачи \",\n    \"hint\": \"Балка надрессорная: 1 <br>Колесная пара б/у: 8 <br>Рама боковая: 3\",\n    \"color\": \"#ffb700\",\n    \"longitude\": \"125.807371\",\n    \"latitude\": 53.451135,\n    \"id\": 263\n  }, {\n    \"count\": 1,\n    \"name\": \"ВРП «Новотранс» (ст. Белая)\",\n    \"hint\": \"Колесная пара б/у: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"None\",\n    \"latitude\": null,\n    \"id\": 274\n  }, {\n    \"count\": 211,\n    \"name\": \"ВРП Новотранс (Ч)\",\n    \"hint\": \"Балка надрессорная: 46 <br>Рама боковая: 165\",\n    \"color\": \"#00ff00\",\n    \"longitude\": \"103.478051\",\n    \"latitude\": 52.866131,\n    \"id\": 19\n  }, {\n    \"count\": 3,\n    \"name\": \"ВРП Черемхово (ТМХ)\",\n    \"hint\": \"Рама боковая: 3\",\n    \"color\": \"#ffa800\",\n    \"longitude\": \"103.081131\",\n    \"latitude\": 53.15373,\n    \"id\": 264\n  }, {\n    \"count\": 1,\n    \"name\": \"ВЧД-19 Костанай\",\n    \"hint\": \"Колесная пара б/у: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"None\",\n    \"latitude\": null,\n    \"id\": 277\n  }, {\n    \"count\": 1,\n    \"name\": \"ВЧД-1 Атырау\",\n    \"hint\": \"Колесная пара б/у: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"None\",\n    \"latitude\": null,\n    \"id\": 276\n  }, {\n    \"count\": 1,\n    \"name\": \"ВЧД-30 Арысь\",\n    \"hint\": \"Колесная пара б/у: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"None\",\n    \"latitude\": null,\n    \"id\": 278\n  }, {\n    \"count\": 4,\n    \"name\": \"ВЧД-34 Курорт-Боровое\",\n    \"hint\": \"Колесная пара б/у: 4\",\n    \"color\": \"#ffa900\",\n    \"longitude\": \"None\",\n    \"latitude\": null,\n    \"id\": 279\n  }, {\n    \"count\": 1,\n    \"name\": \"ВЧД-8 Астана\",\n    \"hint\": \"Колесная пара б/у: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"None\",\n    \"latitude\": null,\n    \"id\": 280\n  }, {\n    \"count\": 1,\n    \"name\": \"ВЧД Защита\",\n    \"hint\": \"Колесная пара б/у: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"None\",\n    \"latitude\": null,\n    \"id\": 275\n  }, {\n    \"count\": 1,\n    \"name\": \"Вязьма (ВРК-2)\",\n    \"hint\": \"Колесная пара б/у: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"34.316309\",\n    \"latitude\": 55.193324,\n    \"id\": 205\n  }, {\n    \"count\": 1,\n    \"name\": \"Гороблагодатская (ВРК-3)\",\n    \"hint\": \"Балка надрессорная: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"59.70799\",\n    \"latitude\": 58.268099,\n    \"id\": 145\n  }, {\n    \"count\": 1,\n    \"name\": \"Дальвагоноремонт (Павелец) (Ч)\",\n    \"hint\": \"Колесная пара б/у: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"39.216897\",\n    \"latitude\": 53.840228,\n    \"id\": 20\n  }, {\n    \"count\": 1,\n    \"name\": \"Депо-ЕвроХим\",\n    \"hint\": \"Колесная пара б/у: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"None\",\n    \"latitude\": null,\n    \"id\": 281\n  }, {\n    \"count\": 3,\n    \"name\": \"Зелецино (ВРК-2)\",\n    \"hint\": \"Рама боковая: 3\",\n    \"color\": \"#ffa800\",\n    \"longitude\": \"44.206751\",\n    \"latitude\": 56.15067,\n    \"id\": 207\n  }, {\n    \"count\": 21,\n    \"name\": \"Зима (ВРК-3)\",\n    \"hint\": \"Балка надрессорная: 4 <br>Рама боковая: 17\",\n    \"color\": \"#ffc500\",\n    \"longitude\": \"102.051051\",\n    \"latitude\": 53.921266,\n    \"id\": 218\n  }, {\n    \"count\": 12,\n    \"name\": \"Иланская (ВРК-1)\",\n    \"hint\": \"Колесная пара б/у: 8 <br>Рама боковая: 4\",\n    \"color\": \"#ffb700\",\n    \"longitude\": \"96.059503\",\n    \"latitude\": 56.243465,\n    \"id\": 74\n  }, {\n    \"count\": 4,\n    \"name\": \"Иркутск-Сортировочный (ВРК-2)\",\n    \"hint\": \"Рама боковая: 4\",\n    \"color\": \"#ffa900\",\n    \"longitude\": \"104.281047\",\n    \"latitude\": 52.287054,\n    \"id\": 192\n  }, {\n    \"count\": 7,\n    \"name\": \"Иркутск – Сортировочный (РЖД)\",\n    \"hint\": \"Рама боковая: 7\",\n    \"color\": \"#ffae00\",\n    \"longitude\": \"104.281047\",\n    \"latitude\": 52.287054,\n    \"id\": 193\n  }, {\n    \"count\": 1,\n    \"name\": \"Исакогорка (РЖД)\",\n    \"hint\": \"Колесная пара б/у: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"40.605899\",\n    \"latitude\": 64.431138,\n    \"id\": 194\n  }, {\n    \"count\": 4,\n    \"name\": \"Калининград (РЖД)\",\n    \"hint\": \"Колесная пара б/у: 4\",\n    \"color\": \"#ffa900\",\n    \"longitude\": \"20.488856\",\n    \"latitude\": 54.691761,\n    \"id\": 224\n  }, {\n    \"count\": 1,\n    \"name\": \"КВРЗ Новотранс\",\n    \"hint\": \"Балка надрессорная: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"38.262134\",\n    \"latitude\": 54.814378,\n    \"id\": 268\n  }, {\n    \"count\": 28,\n    \"name\": \"КВРП Новотранс (Ч)\",\n    \"hint\": \"Балка надрессорная: 28\",\n    \"color\": \"#ffd100\",\n    \"longitude\": \"103.478051\",\n    \"latitude\": 52.866131,\n    \"id\": 23\n  }, {\n    \"count\": 1,\n    \"name\": \"Кемь (ВРК-3)\",\n    \"hint\": \"Колесная пара б/у: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"34.57974\",\n    \"latitude\": 64.959804,\n    \"id\": 138\n  }, {\n    \"count\": 98,\n    \"name\": \"Колпино\",\n    \"hint\": \"Балка надрессорная: 41 <br>Рама боковая: 57\",\n    \"color\": \"#baff00\",\n    \"longitude\": \"30.614873\",\n    \"latitude\": 59.749668,\n    \"id\": 258\n  }, {\n    \"count\": 36,\n    \"name\": \"Комсомольск-на-Амуре (ВРК-2)\",\n    \"hint\": \"Балка надрессорная: 10 <br>Рама боковая: 26\",\n    \"color\": \"#ffde00\",\n    \"longitude\": \"136.988877\",\n    \"latitude\": 50.555417,\n    \"id\": 136\n  }, {\n    \"count\": 1,\n    \"name\": \"Кочетовка (ВРК-2)\",\n    \"hint\": \"Колесная пара б/у: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"40.486962\",\n    \"latitude\": 52.960863,\n    \"id\": 159\n  }, {\n    \"count\": 1,\n    \"name\": \"Краснодар (РЖД)\",\n    \"hint\": \"Колесная пара б/у: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"38.995229\",\n    \"latitude\": 45.020067,\n    \"id\": 52\n  }, {\n    \"count\": 1,\n    \"name\": \"Красноярск-Восточный (РЖД)\",\n    \"hint\": \"Колесная пара б/у: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"93.11364\",\n    \"latitude\": 55.997094,\n    \"id\": 158\n  }, {\n    \"count\": 13,\n    \"name\": \"Люблино (ВРК-1)\",\n    \"hint\": \"Колесная пара б/у: 13\",\n    \"color\": \"#ffb800\",\n    \"longitude\": \"37.617635\",\n    \"latitude\": 55.755814,\n    \"id\": 46\n  }, {\n    \"count\": 2,\n    \"name\": \"Лянгасово (ВРК-1)\",\n    \"hint\": \"Рама боковая: 2\",\n    \"color\": \"#ffa600\",\n    \"longitude\": \"49.453613\",\n    \"latitude\": 58.519746,\n    \"id\": 43\n  }, {\n    \"count\": 1,\n    \"name\": \"Могоча (РЖД)\",\n    \"hint\": \"Колесная пара б/у: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"119.766816\",\n    \"latitude\": 53.745573,\n    \"id\": 129\n  }, {\n    \"count\": 25,\n    \"name\": \"Москва\",\n    \"hint\": \"АП Эластомерный: 25\",\n    \"color\": \"#ffcc00\",\n    \"longitude\": \"37.715911\",\n    \"latitude\": 55.70284,\n    \"id\": 260\n  }, {\n    \"count\": 15,\n    \"name\": \"Муром (ВРК-3)\",\n    \"hint\": \"Рама боковая: 15\",\n    \"color\": \"#ffbc00\",\n    \"longitude\": \"42.032558\",\n    \"latitude\": 55.56867,\n    \"id\": 176\n  }, {\n    \"count\": 19,\n    \"name\": \"Находка\",\n    \"hint\": \"Балка надрессорная: 19\",\n    \"color\": \"#ffc200\",\n    \"longitude\": \"132.961412\",\n    \"latitude\": 42.850004,\n    \"id\": 265\n  }, {\n    \"count\": 6,\n    \"name\": \"Нижнеудинск (ВРК-1)\",\n    \"hint\": \"Колесная пара б/у: 4 <br>Рама боковая: 2\",\n    \"color\": \"#ffad00\",\n    \"longitude\": \"99.0109\",\n    \"latitude\": 54.907351,\n    \"id\": 73\n  }, {\n    \"count\": 25,\n    \"name\": \"Новосибирск-Западный\",\n    \"hint\": \"Балка надрессорная: 25\",\n    \"color\": \"#ffcc00\",\n    \"longitude\": \"82.854602\",\n    \"latitude\": 54.995496,\n    \"id\": 266\n  }, {\n    \"count\": 15,\n    \"name\": \"Орехово-Зуево (РЖД)\",\n    \"hint\": \"Колесная пара б/у: 15\",\n    \"color\": \"#ffbc00\",\n    \"longitude\": \"38.976382\",\n    \"latitude\": 55.786384,\n    \"id\": 29\n  }, {\n    \"count\": 44,\n    \"name\": \"Партизанск (ВРК-2)\",\n    \"hint\": \"Балка надрессорная: 17 <br>Рама боковая: 27\",\n    \"color\": \"#ffeb00\",\n    \"longitude\": \"133.142821\",\n    \"latitude\": 43.145229,\n    \"id\": 174\n  }, {\n    \"count\": 47,\n    \"name\": \"Пермь (частный склад)\",\n    \"hint\": \"Балка надрессорная: 13 <br>Колесная пара б/у: 19 <br>Рама боковая: 15\",\n    \"color\": \"#fff000\",\n    \"longitude\": \"56.133342\",\n    \"latitude\": 58.034954,\n    \"id\": 273\n  }, {\n    \"count\": 1,\n    \"name\": \"Петрозаводск (РЖД)\",\n    \"hint\": \"Колесная пара б/у: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"34.324052\",\n    \"latitude\": 61.79701,\n    \"id\": 94\n  }, {\n    \"count\": 1,\n    \"name\": \"Псков (ВРК-1)\",\n    \"hint\": \"Колесная пара б/у: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"28.38688\",\n    \"latitude\": 57.808209,\n    \"id\": 49\n  }, {\n    \"count\": 1,\n    \"name\": \"Рубцовск (ВРК-3)\",\n    \"hint\": \"Колесная пара б/у: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"81.196473\",\n    \"latitude\": 51.512133,\n    \"id\": 168\n  }, {\n    \"count\": 20,\n    \"name\": \"Ружино (ВРК-1)\",\n    \"hint\": \"Балка надрессорная: 4 <br>Рама боковая: 16\",\n    \"color\": \"#ffc400\",\n    \"longitude\": \"133.439974\",\n    \"latitude\": 45.498851,\n    \"id\": 67\n  }, {\n    \"count\": 1,\n    \"name\": \"Рузаевка (ВРК-3)\",\n    \"hint\": \"Рама боковая: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"44.932859\",\n    \"latitude\": 54.054119,\n    \"id\": 167\n  }, {\n    \"count\": 63,\n    \"name\": \"Санкт-Петербург-Сортировочный-Витебский (ВРК-2)\",\n    \"hint\": \"Балка надрессорная: 24 <br>Рама боковая: 39\",\n    \"color\": \"#f4ff00\",\n    \"longitude\": \"30.348989\",\n    \"latitude\": 59.89074,\n    \"id\": 100\n  }, {\n    \"count\": 1,\n    \"name\": \"Северобайкальск (РЖД)\",\n    \"hint\": \"Рама боковая: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"109.345488\",\n    \"latitude\": 55.636148,\n    \"id\": 228\n  }, {\n    \"count\": 2,\n    \"name\": \"Сургут (РЖД)\",\n    \"hint\": \"Колесная пара б/у: 2\",\n    \"color\": \"#ffa600\",\n    \"longitude\": \"73.32105\",\n    \"latitude\": 61.289137,\n    \"id\": 118\n  }, {\n    \"count\": 3,\n    \"name\": \"Тайшет  (ВРК-1)\",\n    \"hint\": \"Колесная пара б/у: 3\",\n    \"color\": \"#ffa800\",\n    \"longitude\": \"98.018963\",\n    \"latitude\": 55.926449,\n    \"id\": 72\n  }, {\n    \"count\": 2,\n    \"name\": \"Тайшет (РЖД)\",\n    \"hint\": \"Колесная пара б/у: 1 <br>Рама боковая: 1\",\n    \"color\": \"#ffa600\",\n    \"longitude\": \"98.028089\",\n    \"latitude\": 55.930413,\n    \"id\": 86\n  }, {\n    \"count\": 1,\n    \"name\": \"Тверь (ВЧД)\",\n    \"hint\": \"Балка надрессорная: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"35.883276\",\n    \"latitude\": 56.838184,\n    \"id\": 247\n  }, {\n    \"count\": 8,\n    \"name\": \"Ужур (ВРК-3)\",\n    \"hint\": \"Балка надрессорная: 5 <br>Колесная пара б/у: 2 <br>Рама боковая: 1\",\n    \"color\": \"#ffb000\",\n    \"longitude\": \"89.841302\",\n    \"latitude\": 55.301997,\n    \"id\": 199\n  }, {\n    \"count\": 13,\n    \"name\": \"Улан-Удэ (ВРК-1)\",\n    \"hint\": \"Балка надрессорная: 1 <br>Колесная пара б/у: 10 <br>Рама боковая: 2\",\n    \"color\": \"#ffb800\",\n    \"longitude\": \"107.582445\",\n    \"latitude\": 51.839556,\n    \"id\": 70\n  }, {\n    \"count\": 48,\n    \"name\": \"Уссурийск (ВРК-1)\",\n    \"hint\": \"Балка надрессорная: 11 <br>Колесная пара б/у: 16 <br>Рама боковая: 21\",\n    \"color\": \"#fff200\",\n    \"longitude\": \"131.980068\",\n    \"latitude\": 43.821876,\n    \"id\": 66\n  }, {\n    \"count\": 67,\n    \"name\": \"Хабаровск2\",\n    \"hint\": \"Балка надрессорная: 42 <br>Рама боковая: 25\",\n    \"color\": \"#edff00\",\n    \"longitude\": \"135.127286\",\n    \"latitude\": 48.426018,\n    \"id\": 271\n  }, {\n    \"count\": 9,\n    \"name\": \"Хабаровск (ВРК-1)\",\n    \"hint\": \"Балка надрессорная: 3 <br>Колесная пара б/у: 2 <br>Рама боковая: 4\",\n    \"color\": \"#ffb200\",\n    \"longitude\": \"135.128053\",\n    \"latitude\": 48.429026,\n    \"id\": 68\n  }, {\n    \"count\": 10,\n    \"name\": \"Чемской\",\n    \"hint\": \"Балка надрессорная: 10\",\n    \"color\": \"#ffb300\",\n    \"longitude\": \"82.962013\",\n    \"latitude\": 54.952069,\n    \"id\": 272\n  }, {\n    \"count\": 8,\n    \"name\": \"Череповец (ВРК-2)\",\n    \"hint\": \"Балка надрессорная: 4 <br>Колесная пара б/у: 1 <br>Рама боковая: 3\",\n    \"color\": \"#ffb000\",\n    \"longitude\": \"37.919927\",\n    \"latitude\": 59.14433,\n    \"id\": 200\n  }, {\n    \"count\": 1,\n    \"name\": \"Юдино (РЖД)\",\n    \"hint\": \"Колесная пара б/у: 1\",\n    \"color\": \"#ffa500\",\n    \"longitude\": \"48.8970417\",\n    \"latitude\": 55.8092505,\n    \"id\": 112\n  }, {\n    \"count\": 8,\n    \"name\": \"Ярославль (ВРК-2)\",\n    \"hint\": \"Балка надрессорная: 8\",\n    \"color\": \"#ffb000\",\n    \"longitude\": \"39.868786\",\n    \"latitude\": 57.597131,\n    \"id\": 104\n  }];\n  return myPlacemarks;\n}\n\nfunction show_group(id) {\n  var params = get_params();\n  params.view_mode = 'list';\n  params.page = 1;\n  params.warehouses = id;\n  var group = $(\"#group_\" + id);\n  group.find('.modal-content-body').html('<div class=\"row catalog-preloader\"><img src=\"/static/images/preloader.gif\"></div>');\n  $.ajax({\n    url: window.location.pathname,\n    type: 'GET',\n    data: params,\n    traditional: true,\n    success: function success(data) {\n      var group = $(\"#group_\" + id);\n      set_default_sorting_param(group);\n      group.find('.modal-content-body').html(data);\n      group.find('.product--item-list').removeClass('hide');\n    }\n  });\n  setTimeout(function () {\n    $('#page-container').css({\n      zIndex: '1031'\n    });\n    $(\"#group_\" + id).show();\n  }, 100);\n}\n\nymaps.ready(function () {\n  init_mapcatalog();\n});\n\n//# sourceURL=webpack:///./src/js/map.js?");

/***/ }),

/***/ "./src/js/nav-scroll.js":
/*!******************************!*\
  !*** ./src/js/nav-scroll.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(function ($) {\n  var winW = window.innerWidth;\n  $(\"a.js-nav-link\").click(function (e) {\n    e.preventDefault();\n\n    if (location.pathname.replace(/^\\//, \"\") == this.pathname.replace(/^\\//, \"\") && location.hostname == this.hostname) {\n      var target = $(this.hash);\n      target = target.length ? target : $(\"[name=\" + this.hash.slice(1) + \"]\");\n\n      if (target.length) {\n        var scrollPos = target.offset().top;\n        if (winW < 800) scrollPos -= 50;\n        $(\"html,body\").animate({\n          scrollTop: scrollPos\n        }, 1000);\n      }\n    }\n\n    $(this).closest('li').addClass('is-active').siblings('li').removeClass('is-active');\n    $(this).closest('.b-nav').removeClass('is-active');\n    $('.b-header__links').removeClass('is-active');\n    $('.js-header-ham').removeClass('is-active');\n  });\n});\n\n//# sourceURL=webpack:///./src/js/nav-scroll.js?");

/***/ }),

/***/ "./src/js/tab.js":
/*!***********************!*\
  !*** ./src/js/tab.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(function ($) {\n  $('.js-tab-content').not('.is-active').css('height', '0px');\n  $('.js-tab').click(function (e) {\n    e.preventDefault();\n    var time = 400;\n    var $this = $(this);\n    $this.addClass('is-active').siblings('.js-tab').removeClass('is-active');\n    var target = $this.data('target-tab');\n    target = '#' + target;\n    var $target = $(target);\n    var $siblings = $target.siblings('.js-tab-content');\n    $siblings.animate({\n      height: '0px'\n    }, time);\n    var targethHeight = $target.find('>div').outerHeight();\n    $target.animate({\n      height: targethHeight + 'px'\n    }, time);\n  });\n});\n\n//# sourceURL=webpack:///./src/js/tab.js?");

/***/ }),

/***/ "./src/js/video.js":
/*!*************************!*\
  !*** ./src/js/video.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/js/video.js?");

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi @babel/polyfill ./src/js/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"../node_modules/@babel/polyfill/lib/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./src/js/index.js?");

/***/ })

/******/ });
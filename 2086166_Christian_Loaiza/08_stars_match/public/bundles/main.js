/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game */ \"./src/components/Game.js\");\n\n //Import components\n\n\n\nvar StarMatch = function StarMatch() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      gameId = _useState2[0],\n      setGameId = _useState2[1]; // Changing the key component, react will unmount the all component\n  // reset the unmounted one and create a new component.\n\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Game__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    key: gameId,\n    startNewGame: function startNewGame() {\n      return setGameId(gameId + 1);\n    }\n  });\n};\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(StarMatch, null);\n} //export default StarMatch;\n\n//# sourceURL=webpack://08_star_match/./src/components/App.js?");

/***/ }),

/***/ "./src/components/Game.js":
/*!********************************!*\
  !*** ./src/components/Game.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math_utils */ \"./src/math_utils.js\");\n/* harmony import */ var _StarsDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StarsDisplay */ \"./src/components/StarsDisplay.js\");\n/* harmony import */ var _PlayNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlayNumber */ \"./src/components/PlayNumber.js\");\n/* harmony import */ var _PlayAgain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlayAgain */ \"./src/components/PlayAgain.js\");\n\n\n //Import components\n\n\n\n\n/** Custom Hook\r\n  prexed with \"use{name}\"  this helps to identify it as hook\r\n  Hooks have an order, the should call in the same order\r\n  Part 4\r\n*/\n\nvar useGameState = function useGameState() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].random(1, 9)),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      stars = _useState2[0],\n      setStars = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].range(1, 9)),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState3, 2),\n      availableNums = _useState4[0],\n      setAvailableNums = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState5, 2),\n      candidateNums = _useState6[0],\n      setCandidateNums = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10),\n      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState7, 2),\n      secondsLeft = _useState8[0],\n      setSecondsLeft = _useState8[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (secondsLeft > 0 && availableNums.length > 0) {\n      // This create a new timer on each render, we must to remove timer\n      // to avoid errors\n      var timerId = setTimeout(function () {\n        setSecondsLeft(secondsLeft - 1);\n      }, 1000);\n      return function () {\n        return clearTimeout(timerId);\n      };\n    } // Use Effect triggers everytime the component renders\n    // console.log('Done Rendering')\n    //return () => console.log('Component is going to rerender')\n\n  });\n\n  var setGameState = function setGameState(newCandidatesNums) {\n    if (_math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sum(newCandidatesNums) !== stars) {\n      setCandidateNums(newCandidatesNums);\n    } else {\n      var newAvailablesNums = availableNums.filter(function (number) {\n        return !newCandidatesNums.includes(number);\n      }); //redraw number of starts\n\n      setStars(_math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].randomSumIn(newAvailablesNums, 9));\n      setAvailableNums(newAvailablesNums);\n      setCandidateNums([0]);\n    }\n  };\n\n  return {\n    stars: stars,\n    availableNums: availableNums,\n    candidateNums: candidateNums,\n    secondsLeft: secondsLeft,\n    setGameState: setGameState\n  };\n};\n\nvar Game = function Game(props) {\n  // Part 4 deconstructing\n  var _useGameState = useGameState(),\n      stars = _useGameState.stars,\n      availableNums = _useGameState.availableNums,\n      candidateNums = _useGameState.candidateNums,\n      secondsLeft = _useGameState.secondsLeft,\n      setGameState = _useGameState.setGameState;\n\n  var candidatesAreWrong = _math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sum(candidateNums) > stars;\n  var gameStatus = availableNums.length === 0 ? 'won' : secondsLeft === 0 ? 'lost' : 'active'; //const gameIsDone = availableNums.length === 0;\n  //const gameIsLost = secondsLeft === 0;\n\n  var numberStatus = function numberStatus(number) {\n    if (!availableNums.includes(number)) {\n      return 'used';\n    }\n\n    if (candidateNums.includes(number)) {\n      return candidatesAreWrong ? 'wrong' : 'candidate';\n    }\n\n    return 'available';\n  };\n\n  var onNumberClick = function onNumberClick(number, currentStatus) {\n    if (gameStatus !== 'active' || currentStatus == 'used') {\n      return;\n    } //CandidateNums\n\n\n    var newCandidatesNums = currentStatus === 'available' ? candidateNums.concat(number) : candidateNums.filter(function (candidateNum) {\n      return candidateNum !== number;\n    }); // Part 4 Use deconstructer variable\n\n    setGameState(newCandidatesNums);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"game\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"help\"\n  }, \"Pick 1 or more numbers that sum to the number of stars\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"body\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"left\"\n  }, gameStatus != 'active' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_PlayAgain__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: props.startNewGame,\n    gameStatus: gameStatus\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_StarsDisplay__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    count: stars\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"right\"\n  }, _math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].range(1, 9).map(function (number) {\n    return (\n      /*#__PURE__*/\n      // Number loop element should has a key\n      react__WEBPACK_IMPORTED_MODULE_1__.createElement(_PlayNumber__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        key: number,\n        status: numberStatus(number),\n        number: number,\n        onClick: onNumberClick\n      })\n    );\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"timer\"\n  }, \"Time Remaining: \", secondsLeft));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://08_star_match/./src/components/Game.js?");

/***/ }),

/***/ "./src/components/PlayAgain.js":
/*!*************************************!*\
  !*** ./src/components/PlayAgain.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nvar PlayAgain = function PlayAgain(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"game-done\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"message\",\n    style: {\n      color: props.gameStatus === 'lost' ? 'red' : 'green'\n    }\n  }, props.gameStatus === 'lost' ? 'Game Over' : 'Awesome!'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    onClick: props.onClick\n  }, \"Play Again\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayAgain);\n\n//# sourceURL=webpack://08_star_match/./src/components/PlayAgain.js?");

/***/ }),

/***/ "./src/components/PlayNumber.js":
/*!**************************************!*\
  !*** ./src/components/PlayNumber.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n // Color Theme\n\nvar colors = {\n  available: 'lightgray',\n  used: 'lightgreen',\n  wrong: 'lightcoral',\n  candidate: 'deepskyblue'\n};\n\nvar PlayNumber = function PlayNumber(props) {\n  return (\n    /*#__PURE__*/\n    //No key is need it bacuse is a component\n    //Key should be add immediately in the loop\n    react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n      className: \"number\",\n      style: {\n        backgroundColor: colors[props.status]\n      },\n      onClick: function onClick() {\n        return props.onClick(props.number, props.status);\n      }\n    }, props.number) // onClick works for each number due to closure, every number act from their componente scope\n\n  );\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayNumber);\n\n//# sourceURL=webpack://08_star_match/./src/components/PlayNumber.js?");

/***/ }),

/***/ "./src/components/StarsDisplay.js":
/*!****************************************!*\
  !*** ./src/components/StarsDisplay.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math_utils */ \"./src/math_utils.js\");\n// Each component should import react and neccesaries\n// Dependencies\n\n\n\nvar StarsDisplay = function StarsDisplay(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, _math_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].range(1, props.count).map(function (starId) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      key: starId,\n      className: \"star\"\n    });\n  }));\n}; //As a component/methos required in other files it should be export.\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StarsDisplay);\n\n//# sourceURL=webpack://08_star_match/./src/components/StarsDisplay.js?");

/***/ }),

/***/ "./src/math_utils.js":
/*!***************************!*\
  !*** ./src/math_utils.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Math science\nvar utils = {\n  // Sum an array\n  sum: function sum(arr) {\n    return arr.reduce(function (acc, curr) {\n      return acc + curr;\n    }, 0);\n  },\n  // create an array of numbers between min and max (edges included)\n  range: function range(min, max) {\n    return Array.from({\n      length: max - min + 1\n    }, function (_, i) {\n      return min + i;\n    });\n  },\n  // pick a random number between min and max (edges included)\n  random: function random(min, max) {\n    return min + Math.floor(Math.random() * (max - min + 1));\n  },\n  // Given an array of numbers and a max...\n  // Pick a random sum (< max) from the set of all available sums in arr\n  randomSumIn: function randomSumIn(arr, max) {\n    var sets = [[]];\n    var sums = [];\n\n    for (var i = 0; i < arr.length; i++) {\n      for (var j = 0, len = sets.length; j < len; j++) {\n        var candidateSet = sets[j].concat(arr[i]);\n        var candidateSum = utils.sum(candidateSet);\n\n        if (candidateSum <= max) {\n          sets.push(candidateSet);\n          sums.push(candidateSum);\n        }\n      }\n    }\n\n    return sums[utils.random(0, sums.length - 1)];\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (utils);\n\n//# sourceURL=webpack://08_star_match/./src/math_utils.js?");

/***/ }),

/***/ "./src/renderers/dom.js":
/*!******************************!*\
  !*** ./src/renderers/dom.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/App */ \"./src/components/App.js\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.css */ \"./src/styles/index.css\");\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1__.hydrate( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_App__WEBPACK_IMPORTED_MODULE_2__.App, {\n  initialData: window.__R_DATA.initialData\n}), document.getElementById('root'));\n\n//# sourceURL=webpack://08_star_match/./src/renderers/dom.js?");

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://08_star_match/./src/styles/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_08_star_match"] = self["webpackChunk_08_star_match"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/renderers/dom.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
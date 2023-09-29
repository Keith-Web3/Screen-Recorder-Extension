/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/popup/popup.tsx":
/*!*****************************!*\
  !*** ./src/popup/popup.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var _assets_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/tailwind.css */ "./src/assets/tailwind.css");




const Test = function () {
    const [recordOption, setRecordOption] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('browser');
    const isScreen = recordOption === 'monitor';
    const [isAudioEnabled, setIsAudioEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const [isVideoEnabled, setIsVideoEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "min-w-[350px] p-4 font-work" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", { className: "flex items-center justify-between" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "logo object-contain", src: "logo-2.png", alt: "logo" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-center gap-4" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "cursor-pointer", src: "setting-2.svg", alt: "settings" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "cursor-pointer", src: "close-circle.svg", alt: "close", onClick: () => window.close() }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: " pt-4 text-base text-[#413C6D] font-normal" }, "This extension helps you record and share help videos with ease"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-center justify-center gap-8 mt-8" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " text-center cursor-pointer", onClick: () => setRecordOption('monitor') },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "mx-auto " },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.path, { d: "M8.5865 2.66675H23.3998C28.1465 2.66675 29.3332 3.85341 29.3332 8.58675V17.0267C29.3332 21.7734 28.1465 22.9467 23.4132 22.9467H8.5865C3.85317 22.9601 2.6665 21.7734 2.6665 17.0401V8.58675C2.6665 3.85341 3.85317 2.66675 8.5865 2.66675Z", stroke: "#928FAB", strokeWidth: "1.5", animate: {
                            stroke: isScreen ? '#120B48' : '#928FAB',
                            strokeWidth: isScreen ? 2.5 : 1.5,
                        }, strokeLinecap: "round", strokeLinejoin: "round" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.path, { d: "M16 22.96V29.3333", stroke: "#928FAB", strokeWidth: "1.5", animate: {
                            stroke: isScreen ? '#120B48' : '#928FAB',
                            strokeWidth: isScreen ? 2.5 : 1.5,
                        }, strokeLinecap: "round", strokeLinejoin: "round" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.path, { d: "M2.6665 17.3333H29.3332", stroke: "#928FAB", strokeWidth: "1.5", animate: {
                            stroke: isScreen ? '#120B48' : '#928FAB',
                            strokeWidth: isScreen ? 2.5 : 1.5,
                        }, strokeLinecap: "round", strokeLinejoin: "round" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.path, { d: "M10 29.3333H22", stroke: "#928FAB", strokeWidth: "1.5", animate: {
                            stroke: isScreen ? '#120B48' : '#928FAB',
                            strokeWidth: isScreen ? 2.5 : 1.5,
                        }, strokeLinecap: "round", strokeLinejoin: "round" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: `text-base ${isScreen
                        ? 'font-semibold text-[#120B48]'
                        : ' font-medium text-[#928FAB]'}` }, "Full screen")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-center cursor-pointer", onClick: () => setRecordOption('browser') },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "mx-auto" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.path, { d: "M21.3332 17.2001V22.8001C21.3332 27.4667 19.4665 29.3334 14.7998 29.3334H9.19984C4.53317 29.3334 2.6665 27.4667 2.6665 22.8001V17.2001C2.6665 12.5334 4.53317 10.6667 9.19984 10.6667H14.7998C19.4665 10.6667 21.3332 12.5334 21.3332 17.2001Z", stroke: "#120B48", animate: {
                            strokeWidth: !isScreen ? 2.5 : 1.5,
                            stroke: !isScreen ? '#120B48' : '#928FAB',
                        }, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.path, { d: "M29.3332 9.20008V14.8001C29.3332 19.4667 27.4665 21.3334 22.7998 21.3334H21.3332V17.2001C21.3332 12.5334 19.4665 10.6667 14.7998 10.6667H10.6665V9.20008C10.6665 4.53341 12.5332 2.66675 17.1998 2.66675H22.7998C27.4665 2.66675 29.3332 4.53341 29.3332 9.20008Z", stroke: "#120B48", animate: {
                            strokeWidth: !isScreen ? 2.5 : 1.5,
                            stroke: !isScreen ? '#120B48' : '#928FAB',
                        }, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: `text-base capitalize ${!isScreen
                        ? 'font-semibold text-[#120B48]'
                        : ' font-medium text-[#928FAB]'}` }, "current tab"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DevicePermissions, { img: "video-camera.svg", device: "camera", enabled: isVideoEnabled, setEnabled: setIsVideoEnabled }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DevicePermissions, { img: "microphone.svg", device: "audio", enabled: isAudioEnabled, setEnabled: setIsAudioEnabled }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: () => {
                chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                    console.log(tabs);
                    chrome.tabs.sendMessage(tabs[0].id, {
                        message: { isAudioEnabled, isVideoEnabled, recordOption },
                    });
                });
            }, className: "capitalize bg-[#120B48] border-none outline-none px-5 py-4 text-base text-white w-full mt-5 rounded-xl font-medium" }, "start recording")));
};
const DevicePermissions = function ({ img, device, enabled, setEnabled, }) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "rounded-xl flex gap-4 items-center mt-4 border-[1px] border-[#100A42] p-3" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: img, alt: device, className: " w-8" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "capitalize text-[#100A42] font-medium text-base" }, device),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, { transition: {
                backgroundColor: {
                    duration: 0.3,
                },
            }, className: ` flex rounded-3xl ml-auto w-11 h-[1.55rem] p-[0.2rem] cursor-pointer ${enabled ? 'justify-end bg-[#120B48]' : 'justify-start bg-[#928FAB]'}`, onClick: () => setEnabled(prev => !prev) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, { layout: true, transition: {
                    layout: {
                        duration: 0.3,
                    },
                }, className: "w-[1.15rem] h-[1.15rem] rounded-full bg-white" }))));
};
const container = document.createElement('div');
document.body.appendChild(container);
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Test, null));


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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
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
/******/ 			"popup": 0
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
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkscreen_recorder_extension"] = self["webpackChunkscreen_recorder_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-b53f7e","vendors-node_modules_framer-motion_dist_es_render_dom_motion_mjs","src_assets_tailwind_css"], () => (__webpack_require__("./src/popup/popup.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=popup.js.map
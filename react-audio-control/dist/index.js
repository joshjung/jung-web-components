import React, { useRef, useEffect, useLayoutEffect, useContext, useState } from 'react';

var AudioProviderEventTypes;
(function (AudioProviderEventTypes) {
    AudioProviderEventTypes["AUDIO_UPDATED"] = "AUDIO_UPDATED";
    AudioProviderEventTypes["AUDIO_TIME_UPDATE"] = "AUDIO_TIME_UPDATE";
})(AudioProviderEventTypes || (AudioProviderEventTypes = {}));

class AudioUrlProvider {
    constructor({ url, autoload = true }) {
        this._url = undefined;
        this._loadPromise = undefined;
        this._blob = null;
        this._arrayBuffer = undefined;
        this._audioBuffer = undefined;
        this._audioContext = undefined;
        this._audio = undefined;
        this._listeners = [];
        if (typeof window === undefined) {
            throw new Error('AudioUrlProvider is only available on the browser/client.');
        }
        this._url = url;
        if (autoload) {
            this.load();
        }
    }
    get url() {
        return this._url;
    }
    get loaded() {
        return !!this._audioBuffer;
    }
    load() {
        if (this._loadPromise) {
            return this._loadPromise;
        }
        this._loadPromise = fetch(this.url)
            .then((result) => {
            return result.blob();
        })
            .then((blob) => {
            this._blob = blob;
            return this._blob.arrayBuffer();
        })
            .then((arrayBuffer) => {
            this._arrayBuffer = arrayBuffer;
            const ac = new AudioContext();
            return ac.decodeAudioData(arrayBuffer);
        })
            .then((audioBuffer) => {
            this._audioBuffer = audioBuffer;
            this.dispatch({ type: AudioProviderEventTypes.AUDIO_UPDATED });
            return this;
        });
        return this._loadPromise;
    }
    getSamples(channel) {
        if (!this._audioBuffer)
            return [];
        // TODO probably should cache this, as I think slice call will duplicate the data.
        return Array.prototype.slice.call(this._audioBuffer.getChannelData(channel));
    }
    getAudio() {
        if (!this._audio && this._blob) {
            this._audio = new Audio();
            this._audio.src = URL.createObjectURL(this._blob);
            this._audio.addEventListener('timeupdate', () => {
                this.dispatch({ type: AudioProviderEventTypes.AUDIO_TIME_UPDATE });
            });
        }
        return this._audio;
    }
    getAudioBuffer() {
        return this._audioBuffer;
    }
    getAudioContext() {
        return this._audioContext;
    }
    addListener(callback) {
        this._listeners.push(callback);
    }
    removeListener(callback) {
        const ix = this._listeners.indexOf(callback);
        if (ix >= 0)
            this._listeners.splice(ix, 1);
    }
    dispatch(event) {
        this._listeners.forEach(l => l(event));
    }
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
						classes.push(arg.toString());
						continue;
					}

					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}()); 
} (classnames));

var classnamesExports = classnames.exports;
var classNames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

const RACContext = React.createContext({
    audioProvider: undefined,
    playing: false,
    percent: 0,
    togglePlay() {
        // NOOP
    }
});

var sparkline$1 = {exports: {}};

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */

(function (module, exports) {
	(function webpackUniversalModuleDefinition(root, factory) {
		module.exports = factory();
	})(self, () => {
	return /******/ (() => { // webpackBootstrap
	/******/ 	var __webpack_modules__ = ({

	/***/ "./build/sparkline-wasm.js":
	/*!*********************************!*\
	  !*** ./build/sparkline-wasm.js ***!
	  \*********************************/
	/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nvar Module = (() => {\n  var _scriptDir = \"file:///Users/joshjung/dev/jung-web-components/sparkline/build/sparkline-wasm.js\";\n  \n  return (\nfunction(moduleArg = {}) {\n\nvar Module=moduleArg;var readyPromiseResolve,readyPromiseReject;Module[\"ready\"]=new Promise((resolve,reject)=>{readyPromiseResolve=resolve;readyPromiseReject=reject});var moduleOverrides=Object.assign({},Module);var arguments_=[];var thisProgram=\"./this.program\";var quit_=(status,toThrow)=>{throw toThrow};var ENVIRONMENT_IS_WEB=true;var ENVIRONMENT_IS_WORKER=false;var scriptDirectory=\"\";function locateFile(path){if(Module[\"locateFile\"]){return Module[\"locateFile\"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary;if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(typeof document!=\"undefined\"&&document.currentScript){scriptDirectory=document.currentScript.src}if(_scriptDir){scriptDirectory=_scriptDir}if(scriptDirectory.indexOf(\"blob:\")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.replace(/[?#].*/,\"\").lastIndexOf(\"/\")+1)}else{scriptDirectory=\"\"}{read_=url=>{var xhr=new XMLHttpRequest;xhr.open(\"GET\",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=url=>{var xhr=new XMLHttpRequest;xhr.open(\"GET\",url,false);xhr.responseType=\"arraybuffer\";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=(url,onload,onerror)=>{var xhr=new XMLHttpRequest;xhr.open(\"GET\",url,true);xhr.responseType=\"arraybuffer\";xhr.onload=()=>{if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()};xhr.onerror=onerror;xhr.send(null)}}}else{}var out=Module[\"print\"]||console.log.bind(console);var err=Module[\"printErr\"]||console.error.bind(console);Object.assign(Module,moduleOverrides);moduleOverrides=null;if(Module[\"arguments\"])arguments_=Module[\"arguments\"];if(Module[\"thisProgram\"])thisProgram=Module[\"thisProgram\"];if(Module[\"quit\"])quit_=Module[\"quit\"];var wasmBinary;if(Module[\"wasmBinary\"])wasmBinary=Module[\"wasmBinary\"];var noExitRuntime=Module[\"noExitRuntime\"]||true;if(typeof WebAssembly!=\"object\"){abort(\"no native wasm support detected\")}var wasmMemory;var ABORT=false;var EXITSTATUS;var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateMemoryViews(){var b=wasmMemory.buffer;Module[\"HEAP8\"]=HEAP8=new Int8Array(b);Module[\"HEAP16\"]=HEAP16=new Int16Array(b);Module[\"HEAPU8\"]=HEAPU8=new Uint8Array(b);Module[\"HEAPU16\"]=HEAPU16=new Uint16Array(b);Module[\"HEAP32\"]=HEAP32=new Int32Array(b);Module[\"HEAPU32\"]=HEAPU32=new Uint32Array(b);Module[\"HEAPF32\"]=HEAPF32=new Float32Array(b);Module[\"HEAPF64\"]=HEAPF64=new Float64Array(b)}var __ATPRERUN__=[];var __ATINIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;function preRun(){if(Module[\"preRun\"]){if(typeof Module[\"preRun\"]==\"function\")Module[\"preRun\"]=[Module[\"preRun\"]];while(Module[\"preRun\"].length){addOnPreRun(Module[\"preRun\"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function postRun(){if(Module[\"postRun\"]){if(typeof Module[\"postRun\"]==\"function\")Module[\"postRun\"]=[Module[\"postRun\"]];while(Module[\"postRun\"].length){addOnPostRun(Module[\"postRun\"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnInit(cb){__ATINIT__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module[\"monitorRunDependencies\"]){Module[\"monitorRunDependencies\"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module[\"monitorRunDependencies\"]){Module[\"monitorRunDependencies\"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}function abort(what){if(Module[\"onAbort\"]){Module[\"onAbort\"](what)}what=\"Aborted(\"+what+\")\";err(what);ABORT=true;EXITSTATUS=1;what+=\". Build with -sASSERTIONS for more info.\";var e=new WebAssembly.RuntimeError(what);readyPromiseReject(e);throw e}var dataURIPrefix=\"data:application/octet-stream;base64,\";function isDataURI(filename){return filename.startsWith(dataURIPrefix)}var wasmBinaryFile;if(Module[\"locateFile\"]){wasmBinaryFile=\"sparkline-wasm.wasm\";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}}else{wasmBinaryFile=new URL(/* asset import */ __webpack_require__(/*! sparkline-wasm.wasm */ \"./build/sparkline-wasm.wasm\"), __webpack_require__.b).href}function getBinarySync(file){if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}throw\"both async and sync fetching of the wasm failed\"}function getBinaryPromise(binaryFile){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)){if(typeof fetch==\"function\"){return fetch(binaryFile,{credentials:\"same-origin\"}).then(response=>{if(!response[\"ok\"]){throw\"failed to load wasm binary file at '\"+binaryFile+\"'\"}return response[\"arrayBuffer\"]()}).catch(()=>getBinarySync(binaryFile))}}return Promise.resolve().then(()=>getBinarySync(binaryFile))}function instantiateArrayBuffer(binaryFile,imports,receiver){return getBinaryPromise(binaryFile).then(binary=>WebAssembly.instantiate(binary,imports)).then(instance=>instance).then(receiver,reason=>{err(`failed to asynchronously prepare wasm: ${reason}`);abort(reason)})}function instantiateAsync(binary,binaryFile,imports,callback){if(!binary&&typeof WebAssembly.instantiateStreaming==\"function\"&&!isDataURI(binaryFile)&&typeof fetch==\"function\"){return fetch(binaryFile,{credentials:\"same-origin\"}).then(response=>{var result=WebAssembly.instantiateStreaming(response,imports);return result.then(callback,function(reason){err(`wasm streaming compile failed: ${reason}`);err(\"falling back to ArrayBuffer instantiation\");return instantiateArrayBuffer(binaryFile,imports,callback)})})}return instantiateArrayBuffer(binaryFile,imports,callback)}function createWasm(){var info={\"a\":wasmImports};function receiveInstance(instance,module){wasmExports=instance.exports;wasmMemory=wasmExports[\"b\"];updateMemoryViews();addOnInit(wasmExports[\"c\"]);removeRunDependency(\"wasm-instantiate\");return wasmExports}addRunDependency(\"wasm-instantiate\");function receiveInstantiationResult(result){receiveInstance(result[\"instance\"])}if(Module[\"instantiateWasm\"]){try{return Module[\"instantiateWasm\"](info,receiveInstance)}catch(e){err(`Module.instantiateWasm callback failed with error: ${e}`);readyPromiseReject(e)}}instantiateAsync(wasmBinary,wasmBinaryFile,info,receiveInstantiationResult).catch(readyPromiseReject);return{}}var callRuntimeCallbacks=callbacks=>{while(callbacks.length>0){callbacks.shift()(Module)}};var abortOnCannotGrowMemory=requestedSize=>{abort(\"OOM\")};var _emscripten_resize_heap=requestedSize=>{var oldSize=HEAPU8.length;requestedSize>>>=0;abortOnCannotGrowMemory(requestedSize)};var wasmImports={a:_emscripten_resize_heap};var wasmExports=createWasm();var ___wasm_call_ctors=()=>(___wasm_call_ctors=wasmExports[\"c\"])();var _mallocPixelBuffer=Module[\"_mallocPixelBuffer\"]=(a0,a1)=>(_mallocPixelBuffer=Module[\"_mallocPixelBuffer\"]=wasmExports[\"d\"])(a0,a1);var _mallocFloatBuffer=Module[\"_mallocFloatBuffer\"]=a0=>(_mallocFloatBuffer=Module[\"_mallocFloatBuffer\"]=wasmExports[\"e\"])(a0);var _freeFloatBuffer=Module[\"_freeFloatBuffer\"]=a0=>(_freeFloatBuffer=Module[\"_freeFloatBuffer\"]=wasmExports[\"f\"])(a0);var _freePixelBuffer=Module[\"_freePixelBuffer\"]=a0=>(_freePixelBuffer=Module[\"_freePixelBuffer\"]=wasmExports[\"g\"])(a0);var _fillBuffer=Module[\"_fillBuffer\"]=(a0,a1,a2)=>(_fillBuffer=Module[\"_fillBuffer\"]=wasmExports[\"h\"])(a0,a1,a2);var _fill=Module[\"_fill\"]=(a0,a1,a2,a3,a4,a5,a6)=>(_fill=Module[\"_fill\"]=wasmExports[\"i\"])(a0,a1,a2,a3,a4,a5,a6);var _renderWaveForm=Module[\"_renderWaveForm\"]=(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9)=>(_renderWaveForm=Module[\"_renderWaveForm\"]=wasmExports[\"j\"])(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9);var _renderVerticalLine=Module[\"_renderVerticalLine\"]=(a0,a1,a2,a3,a4,a5)=>(_renderVerticalLine=Module[\"_renderVerticalLine\"]=wasmExports[\"k\"])(a0,a1,a2,a3,a4,a5);var _renderVerticalTicks=Module[\"_renderVerticalTicks\"]=(a0,a1,a2,a3,a4,a5,a6,a7,a8)=>(_renderVerticalTicks=Module[\"_renderVerticalTicks\"]=wasmExports[\"l\"])(a0,a1,a2,a3,a4,a5,a6,a7,a8);var ___errno_location=()=>(___errno_location=wasmExports[\"__errno_location\"])();var calledRun;dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function run(){if(runDependencies>0){return}preRun();if(runDependencies>0){return}function doRun(){if(calledRun)return;calledRun=true;Module[\"calledRun\"]=true;if(ABORT)return;initRuntime();readyPromiseResolve(Module);if(Module[\"onRuntimeInitialized\"])Module[\"onRuntimeInitialized\"]();postRun()}if(Module[\"setStatus\"]){Module[\"setStatus\"](\"Running...\");setTimeout(function(){setTimeout(function(){Module[\"setStatus\"](\"\")},1);doRun()},1)}else{doRun()}}if(Module[\"preInit\"]){if(typeof Module[\"preInit\"]==\"function\")Module[\"preInit\"]=[Module[\"preInit\"]];while(Module[\"preInit\"].length>0){Module[\"preInit\"].pop()()}}run();\n\n\n  return moduleArg.ready\n}\n\n);\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Module);\n\n//# sourceURL=webpack://sparkline/./build/sparkline-wasm.js?");

	/***/ }),

	/***/ "./src/index.ts":
	/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/
	/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _build_sparkline_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../build/sparkline-wasm */ \"./build/sparkline-wasm.js\");\n\n// See: https://compile.fi/canvas-filled-three-ways-js-webassembly-and-webgl/\nvar Sparkline = /** @class */ (function () {\n    function Sparkline(options) {\n        var _this = this;\n        this._initPromise = undefined;\n        this.module = null;\n        this.dataPtr = null;\n        this.pixelPtr = null;\n        this.options = options || {};\n        this._initPromise = new Promise(function (resolve) {\n            (0,_build_sparkline_wasm__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n                print: function (text) {\n                    var other = [];\n                    for (var _i = 1; _i < arguments.length; _i++) {\n                        other[_i - 1] = arguments[_i];\n                    }\n                    if (other.length > 0)\n                        text = text + ' ' + Array.prototype.slice.call(other).join(' ');\n                    console.log(text);\n                }\n            }).then(function (module) {\n                _this.module = module;\n                if (_this.options.ready) {\n                    _this.options.ready();\n                }\n                resolve();\n            });\n        });\n    }\n    Sparkline.prototype.init = function () {\n        return this._initPromise;\n    };\n    /**\n     * Render an audio-wave looking sparkline. This renders once and then cleans up memory preparing for another render.\n     *\n     * @param canvas The canvas to render to.\n     * @param data A series of numbers to render, where values magnitude is determined by their distance from 0.0.\n     * @param x The x location to render into\n     * @param y The y location to render into\n     * @param width The width of the rendered image\n     * @param height The height of the rendered image\n     * @param options The optional RenderWaveFormOptions to choose how to render.\n     */\n    Sparkline.prototype.renderWaveForm = function (canvas, data, x, y, width, height, options) {\n        var _this = this;\n        if (options === void 0) { options = {}; }\n        if (!this.module) {\n            throw new Error('Do not call renderWave until Sparkline is ready!');\n        }\n        var start = undefined;\n        if (this.options.profile) {\n            start = window.performance.now();\n        }\n        var ctx = canvas.getContext('2d', {\n            alpha: options.alpha !== undefined ? options.alpha : false,\n            antialias: true,\n            depth: false\n        });\n        if (!ctx) {\n            throw 'Your browser does not support canvas';\n        }\n        var _a = options.backgroundColor, backgroundColor = _a === void 0 ? 0xFFCCCCCC : _a, _b = options.foregroundColor, foregroundColor = _b === void 0 ? 0xFFEE1111 : _b, verticalLineX = options.verticalLineX, _c = options.verticalLineColor, verticalLineColor = _c === void 0 ? 0xFF0000FF : _c;\n        // We need to put our data into the sparkline WASM memory so it can be used\n        // We have to initialize some memory within the heap of the WebAssembly context to store the data...\n        this.pixelPtr = this.module._mallocPixelBuffer(width - x, height - y);\n        this.dataPtr = this.module._mallocFloatBuffer(data.length);\n        var dataArray = new Float32Array(this.module.HEAPF32.buffer, this.dataPtr, data.length);\n        // Copy our points into the heap memory of WASM...\n        for (var i = 0; i < data.length; i++) {\n            dataArray[i] = data[i];\n        }\n        // Render using WASM!\n        this.module._renderWaveForm(this.pixelPtr, x, y, width, height, this.dataPtr, data.length, backgroundColor, foregroundColor, true);\n        if (verticalLineX !== undefined) {\n            this.module._renderVerticalLine(this.pixelPtr, verticalLineX, 3, width, height, verticalLineColor);\n        }\n        var verticalTicks = options.verticalTicks;\n        if (verticalTicks && verticalTicks.length) {\n            if (!options.sampleRate) {\n                throw new Error('You must provide a sampleRate in order to use verticalTicks! (e.g. sampleRate: 44100)');\n            }\n            verticalTicks.forEach(function (vt) {\n                var _a;\n                var totalMillis = (data.length / options.sampleRate) * 1000;\n                var pixelsPerMilli = width / totalMillis;\n                var gap = pixelsPerMilli * vt.ms;\n                var xStart = vt.offsetMs ? -(vt.offsetMs * pixelsPerMilli) : 0;\n                (_a = _this.module) === null || _a === void 0 ? void 0 : _a._renderVerticalTicks(_this.pixelPtr, xStart, width, gap, 3, vt.height, width, height, vt.color);\n            });\n        }\n        var img = new ImageData(new Uint8ClampedArray(this.module.HEAPU8.buffer, this.pixelPtr, width * height * 4), width, height);\n        ctx.putImageData(img, 0, 0);\n        // Cleanup!\n        this.module._freeFloatBuffer(this.dataPtr);\n        this.module._freePixelBuffer(this.pixelPtr);\n        this.dataPtr = null;\n        this.pixelPtr = null;\n        if (this.options.profile && start) {\n            var end = window.performance.now();\n            console.log('Sparkline::renderWaveForm took ' + (end - start) + ' milliseconds to render ', data.length + \" samples into a \".concat(width, \"x\").concat(height, \" canvas.\"));\n        }\n    };\n    return Sparkline;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sparkline);\n\n\n//# sourceURL=webpack://sparkline/./src/index.ts?");

	/***/ }),

	/***/ "./build/sparkline-wasm.wasm":
	/*!***********************************!*\
	  !*** ./build/sparkline-wasm.wasm ***!
	  \***********************************/
	/***/ ((module) => {

	eval("module.exports = \"data:application/wasm;base64,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QZwIIAY2AgBBkAhBkAgoAgAgAGoiADYCACAGIABBAXI2AgQgACAGaiAANgIADAgLIAUoAgQiA0EDcUEBRw0GIANBeHEhCSADQf8BTQRAIAUoAgwiASAFKAIIIgJGBEBBiAhBiAgoAgBBfiADQQN2d3E2AgAMBwsgAiABNgIMIAEgAjYCCAwGCyAFKAIYIQggBSAFKAIMIgJHBEAgBSgCCCIBIAI2AgwgAiABNgIIDAULIAVBFGoiASgCACIDRQRAIAUoAhAiA0UNBCAFQRBqIQELA0AgASEEIAMiAkEUaiIBKAIAIgMNACACQRBqIQEgAigCECIDDQALIARBADYCAAwEC0GUCCAFQShrIgBBeCACa0EHcSIBayIINgIAQaAIIAEgAmoiATYCACABIAhBAXI2AgQgACACakEoNgIEQaQIQfALKAIANgIAIAMgBEEnIARrQQdxakEvayIAIAAgA0EQakkbIgFBGzYCBCABQdALKQIANwIQIAFByAspAgA3AghB0AsgAUEIajYCAEHMCyAFNgIAQcgLIAI2AgBB1AtBADYCACABQRhqIQADQCAAQQc2AgQgAEEIaiEMIABBBGohACAMIARJDQALIAEgA0YNACABIAEoAgRBfnE2AgQgAyABIANrIgJBAXI2AgQgASACNgIAIAJB/wFNBEAgAkF4cUGwCGohAAJ/QYgIKAIAIgFBASACQQN2dCICcUUEQEGICCABIAJyNgIAIAAMAQsgACgCCAshASAAIAM2AgggASADNgIMIAMgADYCDCADIAE2AggMAQtBHyEAIAJB////B00EQCACQSYgAkEIdmciAGt2QQFxIABBAXRrQT5qIQALIAMgADYCHCADQgA3AhAgAEECdEG4CmohAQJAAkBBjAgoAgAiBEEBIAB0IgVxRQRAQYwIIAQgBXI2AgAgASADNgIADAELIAJBGSAAQQF2a0EAIABBH0cbdCEAIAEoAgAhBANAIAQiASgCBEF4cSACRg0CIABBHXYhBSAAQQF0IQAgASAFQQRxaiIFKAIQIgQNAAsgBSADNgIQCyADIAE2AhggAyADNgIMIAMgAzYCCAwBCyABKAIIIgAgAzYCDCABIAM2AgggA0EANgIYIAMgATYCDCADIAA2AggLQZQIKAIAIgAgBk0NAEGUCCAAIAZrIgE2AgBBoAhBoAgoAgAiACAG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\";\n\n//# sourceURL=webpack://sparkline/./build/sparkline-wasm.wasm?");

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
	/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
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
	/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
	/******/ 		// no on chunks loaded
	/******/ 		
	/******/ 		// no jsonp function
	/******/ 	})();
	/******/ 	
	/************************************************************************/
	/******/ 	
	/******/ 	// startup
	/******/ 	// Load entry module and return exports
	/******/ 	// This entry module can't be inlined because the eval devtool is used.
	/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
	/******/ 	
	/******/ 	return __webpack_exports__;
	/******/ })()
	;
	}); 
} (sparkline$1));

var sparklineExports = sparkline$1.exports;
var Sparkline = /*@__PURE__*/getDefaultExportFromCjs(sparklineExports);

(undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

(undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function useInterval(callback, delay) {
    const savedCallback = useRef(callback);
    useIsomorphicLayoutEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    useEffect(() => {
        if (!delay && delay !== 0) {
            return;
        }
        const id = setInterval(() => savedCallback.current(), delay);
        return () => clearInterval(id);
    }, [delay]);
}

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const sparkline = new Sparkline();
function RACCanvas({ className, profile }) {
    const c = classNames('rac-wrapper', className);
    const context = useContext(RACContext);
    const { audioProvider, channelOptions } = context;
    const canvasWrapperRef = useRef(null);
    const canvasRef = useRef(null);
    const [canvasWidth, setCanvasWidth] = useState(0);
    const [canvasHeight, setCanvasHeight] = useState(0);
    const [renderTrigger, setRenderTrigger] = useState(0);
    function render(canvasWidth, canvasHeight) {
        if ((canvasRef === null || canvasRef === void 0 ? void 0 : canvasRef.current) && (audioProvider === null || audioProvider === void 0 ? void 0 : audioProvider.loaded) && canvasWidth && canvasHeight) {
            window.requestAnimationFrame(() => {
                sparkline.options.profile = profile;
                // For now, default to just mono if not otherwise specified
                const _channelOptions = channelOptions || [{
                        backgroundColor: 0x00000000,
                        foregroundColor: 0xFFCC4433,
                        fillBackground: true
                    }];
                _channelOptions.forEach((channelOption, ix) => {
                    var _a, _b, _c, _d, _e, _f, _g, _j;
                    if (ix < audioProvider.getAudioBuffer().numberOfChannels) {
                        const _x = (_a = channelOption.x) !== null && _a !== void 0 ? _a : 0;
                        const _y = (_b = channelOption.y) !== null && _b !== void 0 ? _b : 0;
                        const _w = (_c = channelOption.width) !== null && _c !== void 0 ? _c : canvasWidth;
                        const _h = (_d = channelOption.height) !== null && _d !== void 0 ? _d : canvasHeight;
                        const _bg = (_e = channelOption.backgroundColor) !== null && _e !== void 0 ? _e : 0x00000000;
                        const _fg = (_f = channelOption.foregroundColor) !== null && _f !== void 0 ? _f : 0xFFFFFFFF;
                        const _fbg = (_g = channelOption.fillBackground) !== null && _g !== void 0 ? _g : false;
                        const _vlc = (_j = channelOption.verticalLineColor) !== null && _j !== void 0 ? _j : 0xFFFF0000;
                        let audio = audioProvider.getAudio();
                        let percentComplete = audio.currentTime / audio.duration;
                        let x = Math.round(_w * percentComplete);
                        sparkline.renderWaveForm(canvasRef.current, audioProvider.getSamples(ix), _x, _y, _w, _h, {
                            backgroundColor: _bg,
                            foregroundColor: _fg,
                            fillBackground: _fbg,
                            alpha: true,
                            verticalLineX: isNaN(x) ? -1 : x,
                            verticalLineColor: _vlc,
                        });
                    }
                    else {
                        console.warn(`Unable to render wave form for channel ${ix}`);
                    }
                });
            });
        }
    }
    function calcSizeAndTriggerRender() {
        if (canvasWrapperRef === null || canvasWrapperRef === void 0 ? void 0 : canvasWrapperRef.current) {
            const bcr = canvasWrapperRef.current.getBoundingClientRect();
            setCanvasWidth(Math.ceil(bcr.width));
            setCanvasHeight(Math.ceil(bcr.height));
        }
        render(canvasWidth, canvasHeight);
    }
    useInterval(() => {
        render(canvasWidth, canvasHeight);
    }, context.playing ? 30 : null);
    useEffect(() => {
        const callback = (event) => {
            setRenderTrigger(renderTrigger + 1);
        };
        audioProvider === null || audioProvider === void 0 ? void 0 : audioProvider.addListener(callback);
        return () => audioProvider === null || audioProvider === void 0 ? void 0 : audioProvider.removeListener(callback);
    }, [renderTrigger]);
    useEffect(() => {
        render(canvasWidth, canvasHeight);
    }, [canvasWidth, canvasHeight, renderTrigger]);
    useEffect(() => {
        calcSizeAndTriggerRender();
    }, [audioProvider]);
    function root_onResizeHandler() {
        calcSizeAndTriggerRender();
    }
    return React.createElement("div", { className: c, onResize: root_onResizeHandler, ref: canvasWrapperRef },
        React.createElement("canvas", { className: "rac-canvas", width: canvasWidth, height: canvasHeight, ref: canvasRef }));
}

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React.createContext && React.createContext(DefaultContext);

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return React.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  // eslint-disable-next-line react/display-name
  return function (props) {
    return React.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
      size = props.size,
      title = props.title,
      svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return React.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? React.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function FaPlay (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"}}]})(props);
}function FaStop (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"}}]})(props);
}

function RACPlayPause({ className }) {
    const c = classNames('rac-play-pause', className);
    const { togglePlay, playing } = useContext(RACContext);
    function playPause_onClickHandler() {
        togglePlay();
    }
    return React.createElement("div", { className: c },
        React.createElement("button", { onClick: playPause_onClickHandler }, playing ? React.createElement(FaStop, null) : React.createElement(FaPlay, null)));
}

const ReactAudioControl = ({ audioProvider, channelOptions, className, children }) => {
    const classes = classNames('rac', className);
    const rootRef = useRef(null);
    function togglePlay() {
        var _a, _b;
        if (state.playing) {
            (_a = state.audioProvider) === null || _a === void 0 ? void 0 : _a.getAudio().pause();
        }
        else {
            (_b = state.audioProvider) === null || _b === void 0 ? void 0 : _b.getAudio().play();
        }
        setState(Object.assign(Object.assign({}, state), { playing: !state.playing }));
    }
    const [state, setState] = useState({
        audioProvider,
        playing: false,
        percent: 0,
        channelOptions,
        togglePlay
    });
    children = children || React.createElement(React.Fragment, null,
        React.createElement(RACPlayPause, { className: "default" }),
        React.createElement(RACCanvas, { className: "default" }));
    return React.createElement(RACContext.Provider, { value: Object.assign(Object.assign({}, state), { togglePlay }) },
        React.createElement("div", { className: classes, ref: rootRef }, children));
};

export { AudioUrlProvider, RACCanvas, RACContext, RACPlayPause, ReactAudioControl };
//# sourceMappingURL=index.js.map

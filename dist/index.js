!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("markup-utils",[],t):"object"==typeof exports?exports["markup-utils"]=t():e["markup-utils"]=t()}(this,(function(){return(()=>{"use strict";var __webpack_modules__={64:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "EventEmitter": () => (/* reexport */ EventEmitter),\n  "debouncer": () => (/* reexport */ debouncer)\n});\n\n;// CONCATENATED MODULE: ./src/debouncer.ts\nfunction debouncer(callback, timeout = 200, ...args) {\r\n    let timeoutID;\r\n    return function () {\r\n        const _this = this;\r\n        window.clearTimeout(timeoutID);\r\n        timeoutID = setTimeout(function () {\r\n            callback.apply(_this, args);\r\n        }, timeout);\r\n    };\r\n}\r\n\n;// CONCATENATED MODULE: ./src/EventEmitter.ts\nclass EventEmitter {\r\n    constructor() {\r\n        this.events = {};\r\n    }\r\n    on(eventName, callback) {\r\n        if (!this.events[eventName])\r\n            this.events[eventName] = [];\r\n        this.events[eventName].push(callback);\r\n        return () => this.events[eventName] = this.events[eventName].filter(e => callback !== e);\r\n    }\r\n    emit(eventName, data) {\r\n        const event = this.events[eventName];\r\n        if (event)\r\n            event.forEach((callback) => callback.call(null, data));\r\n    }\r\n}\r\n\n;// CONCATENATED MODULE: ./src/index.js\n\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJrdXAtdXRpbHMvLi9zcmMvZGVib3VuY2VyLnRzPzBkMGMiLCJ3ZWJwYWNrOi8vbWFya3VwLXV0aWxzLy4vc3JjL0V2ZW50RW1pdHRlci50cz8yMWQ0Iiwid2VicGFjazovL21hcmt1cC11dGlscy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7QUNUZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDZm9DO0FBQ007O0FBS3pDIiwiZmlsZSI6IjY0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2VyKGNhbGxiYWNrLCB0aW1lb3V0ID0gMjAwLCAuLi5hcmdzKSB7XHJcbiAgICBsZXQgdGltZW91dElEO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0SUQpO1xyXG4gICAgICAgIHRpbWVvdXRJRCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseShfdGhpcywgYXJncyk7XHJcbiAgICAgICAgfSwgdGltZW91dCk7XHJcbiAgICB9O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xyXG4gICAgfVxyXG4gICAgb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSlcclxuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZpbHRlcihlID0+IGNhbGxiYWNrICE9PSBlKTtcclxuICAgIH1cclxuICAgIGVtaXQoZXZlbnROYW1lLCBkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnQgPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdO1xyXG4gICAgICAgIGlmIChldmVudClcclxuICAgICAgICAgICAgZXZlbnQuZm9yRWFjaCgoY2FsbGJhY2spID0+IGNhbGxiYWNrLmNhbGwobnVsbCwgZGF0YSkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBkZWJvdW5jZXIgZnJvbSAnLi9kZWJvdW5jZXInO1xyXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vRXZlbnRFbWl0dGVyJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgZGVib3VuY2VyLFxyXG4gIEV2ZW50RW1pdHRlclxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///64\n')}},__webpack_require__={d:(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},__webpack_exports__={};return __webpack_modules__[64](0,__webpack_exports__,__webpack_require__),__webpack_exports__})()}));
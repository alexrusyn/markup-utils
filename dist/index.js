(()=>{"use strict";var __webpack_modules__={339:()=>{eval("\n// UNUSED EXPORTS: EventEmitter, debouncer\n\n;// CONCATENATED MODULE: ./src/EventEmitter.ts\nvar EventEmitter = /** @class */ (function () {\r\n    /**\r\n     * Used to create and track events\r\n     */\r\n    function EventEmitter() {\r\n        this.events = {};\r\n    }\r\n    /**\r\n     * Creates an event by key, and saves the callback\r\n     */\r\n    EventEmitter.prototype.on = function (eventName, callback) {\r\n        var _this = this;\r\n        if (!this.events[eventName])\r\n            this.events[eventName] = [];\r\n        this.events[eventName].push(callback);\r\n        return function () { return _this.events[eventName] = _this.events[eventName].filter(function (e) { return callback !== e; }); };\r\n    };\r\n    /**\r\n     * Call an event by key and triggers a callback\r\n     */\r\n    EventEmitter.prototype.emit = function (eventName, data) {\r\n        var event = this.events[eventName];\r\n        if (!event)\r\n            return;\r\n        event.forEach(function (callback) { return callback.call(null, data); });\r\n    };\r\n    return EventEmitter;\r\n}());\r\n/* harmony default export */ const src_EventEmitter = ((/* unused pure expression or super */ null && (EventEmitter)));\r\n\n;// CONCATENATED MODULE: ./src/index.js\n\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJrdXAtdXRpbHMvLi9zcmMvRXZlbnRFbWl0dGVyLnRzPzQzOTkiLCJ3ZWJwYWNrOi8vbWFya3VwLXV0aWxzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0lBR0U7O09BRUc7SUFFSDtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRTtJQUNsQixDQUFDO0lBRUQ7O09BRUc7SUFFSCx5QkFBRSxHQUFGLFVBQUksU0FBaUIsRUFBRSxRQUFrQjtRQUF6QyxpQkFJQztRQUhDLElBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sY0FBTSxZQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQUMsSUFBSSxlQUFRLEtBQUssQ0FBQyxFQUFkLENBQWMsQ0FBQyxFQUEzRSxDQUEyRSxDQUFDO0lBQ3pGLENBQUM7SUFFRDs7T0FFRztJQUVILDJCQUFJLEdBQUosVUFBTSxTQUFpQixFQUFFLElBQVU7UUFDakMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQyxJQUFLLENBQUMsS0FBSztZQUFHLE9BQU87UUFDckIsS0FBSyxDQUFDLE9BQU8sQ0FBRSxVQUFDLFFBQWtCLElBQUssZUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQXpCLENBQXlCLENBQUUsQ0FBQztJQUNyRSxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDOzs7O0FDaENtQztBQUNNOztBQUt6QyIsImZpbGUiOiIzMzkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIEV2ZW50TGlzdCA9IHsgW2tleTogc3RyaW5nXTogQXJyYXk8T2JqZWN0PiB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcclxuICBldmVudHM6IEV2ZW50TGlzdFxyXG5cclxuICAvKipcclxuICAgKiBVc2VkIHRvIGNyZWF0ZSBhbmQgdHJhY2sgZXZlbnRzXHJcbiAgICovXHJcblxyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHRoaXMuZXZlbnRzID0ge31cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYW4gZXZlbnQgYnkga2V5LCBhbmQgc2F2ZXMgdGhlIGNhbGxiYWNrXHJcbiAgICovXHJcblxyXG4gIG9uIChldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogRnVuY3Rpb24ge1xyXG4gICAgaWYgKCAhdGhpcy5ldmVudHNbZXZlbnROYW1lXSApIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXTtcclxuXHRcdHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XHJcblx0XHRyZXR1cm4gKCkgPT4gdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZmlsdGVyKGUgPT4gY2FsbGJhY2sgIT09IGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbCBhbiBldmVudCBieSBrZXkgYW5kIHRyaWdnZXJzIGEgY2FsbGJhY2tcclxuICAgKi9cclxuXHJcbiAgZW1pdCAoZXZlbnROYW1lOiBzdHJpbmcsIGRhdGE/OiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXTtcclxuICAgIGlmICggIWV2ZW50ICkgcmV0dXJuO1xyXG4gICAgZXZlbnQuZm9yRWFjaCggKGNhbGxiYWNrOiBGdW5jdGlvbikgPT4gY2FsbGJhY2suY2FsbChudWxsLCBkYXRhKSApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgZGVib3VuY2VyIGZyb20gJy4vZGVib3VuY2VyJztcclxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL0V2ZW50RW1pdHRlcic7XHJcblxyXG5leHBvcnQge1xyXG4gIGRlYm91bmNlcixcclxuICBFdmVudEVtaXR0ZXJcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///339\n")}},__webpack_exports__={};__webpack_modules__[339]()})();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/rxjs/internal/BehaviorSubject.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/BehaviorSubject.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/internal/Subject.js");
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
var BehaviorSubject = (function (_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: true,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        if (subscription && !subscription.closed) {
            subscriber.next(this._value);
        }
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        if (this.hasError) {
            throw this.thrownError;
        }
        else if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return this._value;
        }
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}(Subject_1.Subject));
exports.BehaviorSubject = BehaviorSubject;
//# sourceMappingURL=BehaviorSubject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/InnerSubscriber.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/InnerSubscriber.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var InnerSubscriber = (function (_super) {
    __extends(InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        _this.index = 0;
        return _this;
    }
    InnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber;
}(Subscriber_1.Subscriber));
exports.InnerSubscriber = InnerSubscriber;
//# sourceMappingURL=InnerSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observable.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Observable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var canReportError_1 = __webpack_require__(/*! ./util/canReportError */ "./node_modules/rxjs/internal/util/canReportError.js");
var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/rxjs/internal/util/toSubscriber.js");
var observable_1 = __webpack_require__(/*! ./symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
var pipe_1 = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var Observable = (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError_1.canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observer.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/OuterSubscriber.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/OuterSubscriber.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var OuterSubscriber = (function (_super) {
    __extends(OuterSubscriber, _super);
    function OuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}(Subscriber_1.Subscriber));
exports.OuterSubscriber = OuterSubscriber;
//# sourceMappingURL=OuterSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Scheduler.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/Scheduler.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function () { return Date.now(); };
    return Scheduler;
}());
exports.Scheduler = Scheduler;
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subject.js":
/*!***********************************************!*\
  !*** ./node_modules/rxjs/internal/Subject.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ./Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
var SubjectSubscription_1 = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/rxjs/internal/SubjectSubscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var SubjectSubscriber = (function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(Subscriber_1.Subscriber));
exports.SubjectSubscriber = SubjectSubscriber;
var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_1.Observable));
exports.Subject = Subject;
var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription_1.Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));
exports.AnonymousSubject = AnonymousSubject;
//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/SubjectSubscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/SubjectSubscription.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var SubjectSubscription = (function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription_1.Subscription));
exports.SubjectSubscription = SubjectSubscription;
//# sourceMappingURL=SubjectSubscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscriber.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var Observer_1 = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/internal/Observer.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError_1.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscription.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isObject_1 = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/config.js":
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/combineLatest.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/combineLatest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
var fromArray_1 = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/internal/observable/fromArray.js");
var NONE = {};
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var resultSelector = null;
    var scheduler = null;
    if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
        scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
        resultSelector = observables.pop();
    }
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
        observables = observables[0];
    }
    return fromArray_1.fromArray(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}
exports.combineLatest = combineLatest;
var CombineLatestOperator = (function () {
    function CombineLatestOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    CombineLatestOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
    };
    return CombineLatestOperator;
}());
exports.CombineLatestOperator = CombineLatestOperator;
var CombineLatestSubscriber = (function (_super) {
    __extends(CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, resultSelector) {
        var _this = _super.call(this, destination) || this;
        _this.resultSelector = resultSelector;
        _this.active = 0;
        _this.values = [];
        _this.observables = [];
        return _this;
    }
    CombineLatestSubscriber.prototype._next = function (observable) {
        this.values.push(NONE);
        this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            this.active = len;
            this.toRespond = len;
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
            }
        }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
    };
    CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var values = this.values;
        var oldVal = values[outerIndex];
        var toRespond = !this.toRespond
            ? 0
            : oldVal === NONE ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.resultSelector) {
                this._tryResultSelector(values);
            }
            else {
                this.destination.next(values.slice());
            }
        }
    };
    CombineLatestSubscriber.prototype._tryResultSelector = function (values) {
        var result;
        try {
            result = this.resultSelector.apply(this, values);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return CombineLatestSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.CombineLatestSubscriber = CombineLatestSubscriber;
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var subscribeTo_1 = __webpack_require__(/*! ../util/subscribeTo */ "./node_modules/rxjs/internal/util/subscribeTo.js");
var scheduled_1 = __webpack_require__(/*! ../scheduled/scheduled */ "./node_modules/rxjs/internal/scheduled/scheduled.js");
function from(input, scheduler) {
    if (!scheduler) {
        if (input instanceof Observable_1.Observable) {
            return input;
        }
        return new Observable_1.Observable(subscribeTo_1.subscribeTo(input));
    }
    else {
        return scheduled_1.scheduled(input, scheduler);
    }
}
exports.from = from;
//# sourceMappingURL=from.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromArray.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromArray.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var subscribeToArray_1 = __webpack_require__(/*! ../util/subscribeToArray */ "./node_modules/rxjs/internal/util/subscribeToArray.js");
var scheduleArray_1 = __webpack_require__(/*! ../scheduled/scheduleArray */ "./node_modules/rxjs/internal/scheduled/scheduleArray.js");
function fromArray(input, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(subscribeToArray_1.subscribeToArray(input));
    }
    else {
        return scheduleArray_1.scheduleArray(input, scheduler);
    }
}
exports.fromArray = fromArray;
//# sourceMappingURL=fromArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/debounceTime.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/debounceTime.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var async_1 = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/internal/scheduler/async.js");
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return function (source) { return source.lift(new DebounceTimeOperator(dueTime, scheduler)); };
}
exports.debounceTime = debounceTime;
var DebounceTimeOperator = (function () {
    function DebounceTimeOperator(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator;
}());
var DebounceTimeSubscriber = (function (_super) {
    __extends(DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.dueTime = dueTime;
        _this.scheduler = scheduler;
        _this.debouncedSubscription = null;
        _this.lastValue = null;
        _this.hasValue = false;
        return _this;
    }
    DebounceTimeSubscriber.prototype._next = function (value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function () {
        this.debouncedNext();
        this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function () {
        this.clearDebounce();
        if (this.hasValue) {
            var lastValue = this.lastValue;
            this.lastValue = null;
            this.hasValue = false;
            this.destination.next(lastValue);
        }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function () {
        var debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    };
    return DebounceTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/filter.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/filter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function filter(predicate, thisArg) {
    return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
    };
}
exports.filter = filter;
var FilterOperator = (function () {
    function FilterOperator(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    FilterOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator;
}());
var FilterSubscriber = (function (_super) {
    __extends(FilterSubscriber, _super);
    function FilterSubscriber(destination, predicate, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.count = 0;
        return _this;
    }
    FilterSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.destination.next(value);
        }
    };
    return FilterSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/map.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/map.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
exports.map = map;
var MapOperator = (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());
exports.MapOperator = MapOperator;
var MapSubscriber = (function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/switchMap.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/switchMap.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var InnerSubscriber_1 = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/rxjs/internal/InnerSubscriber.js");
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
var map_1 = __webpack_require__(/*! ./map */ "./node_modules/rxjs/internal/operators/map.js");
var from_1 = __webpack_require__(/*! ../observable/from */ "./node_modules/rxjs/internal/observable/from.js");
function switchMap(project, resultSelector) {
    if (typeof resultSelector === 'function') {
        return function (source) { return source.pipe(switchMap(function (a, i) { return from_1.from(project(a, i)).pipe(map_1.map(function (b, ii) { return resultSelector(a, b, i, ii); })); })); };
    }
    return function (source) { return source.lift(new SwitchMapOperator(project)); };
}
exports.switchMap = switchMap;
var SwitchMapOperator = (function () {
    function SwitchMapOperator(project) {
        this.project = project;
    }
    SwitchMapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchMapSubscriber(subscriber, this.project));
    };
    return SwitchMapOperator;
}());
var SwitchMapSubscriber = (function (_super) {
    __extends(SwitchMapSubscriber, _super);
    function SwitchMapSubscriber(destination, project) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.index = 0;
        return _this;
    }
    SwitchMapSubscriber.prototype._next = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (error) {
            this.destination.error(error);
            return;
        }
        this._innerSub(result, value, index);
    };
    SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
        var innerSubscription = this.innerSubscription;
        if (innerSubscription) {
            innerSubscription.unsubscribe();
        }
        var innerSubscriber = new InnerSubscriber_1.InnerSubscriber(this, value, index);
        var destination = this.destination;
        destination.add(innerSubscriber);
        this.innerSubscription = subscribeToResult_1.subscribeToResult(this, result, undefined, undefined, innerSubscriber);
        if (this.innerSubscription !== innerSubscriber) {
            destination.add(this.innerSubscription);
        }
    };
    SwitchMapSubscriber.prototype._complete = function () {
        var innerSubscription = this.innerSubscription;
        if (!innerSubscription || innerSubscription.closed) {
            _super.prototype._complete.call(this);
        }
        this.unsubscribe();
    };
    SwitchMapSubscriber.prototype._unsubscribe = function () {
        this.innerSubscription = null;
    };
    SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
        var destination = this.destination;
        destination.remove(innerSub);
        this.innerSubscription = null;
        if (this.isStopped) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    return SwitchMapSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/takeUntil.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/takeUntil.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
function takeUntil(notifier) {
    return function (source) { return source.lift(new TakeUntilOperator(notifier)); };
}
exports.takeUntil = takeUntil;
var TakeUntilOperator = (function () {
    function TakeUntilOperator(notifier) {
        this.notifier = notifier;
    }
    TakeUntilOperator.prototype.call = function (subscriber, source) {
        var takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
        var notifierSubscription = subscribeToResult_1.subscribeToResult(takeUntilSubscriber, this.notifier);
        if (notifierSubscription && !takeUntilSubscriber.seenValue) {
            takeUntilSubscriber.add(notifierSubscription);
            return source.subscribe(takeUntilSubscriber);
        }
        return takeUntilSubscriber;
    };
    return TakeUntilOperator;
}());
var TakeUntilSubscriber = (function (_super) {
    __extends(TakeUntilSubscriber, _super);
    function TakeUntilSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.seenValue = false;
        return _this;
    }
    TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.seenValue = true;
        this.complete();
    };
    TakeUntilSubscriber.prototype.notifyComplete = function () {
    };
    return TakeUntilSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/throttle.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/throttle.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
exports.defaultThrottleConfig = {
    leading: true,
    trailing: false
};
function throttle(durationSelector, config) {
    if (config === void 0) { config = exports.defaultThrottleConfig; }
    return function (source) { return source.lift(new ThrottleOperator(durationSelector, config.leading, config.trailing)); };
}
exports.throttle = throttle;
var ThrottleOperator = (function () {
    function ThrottleOperator(durationSelector, leading, trailing) {
        this.durationSelector = durationSelector;
        this.leading = leading;
        this.trailing = trailing;
    }
    ThrottleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ThrottleSubscriber(subscriber, this.durationSelector, this.leading, this.trailing));
    };
    return ThrottleOperator;
}());
var ThrottleSubscriber = (function (_super) {
    __extends(ThrottleSubscriber, _super);
    function ThrottleSubscriber(destination, durationSelector, _leading, _trailing) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.durationSelector = durationSelector;
        _this._leading = _leading;
        _this._trailing = _trailing;
        _this._hasValue = false;
        return _this;
    }
    ThrottleSubscriber.prototype._next = function (value) {
        this._hasValue = true;
        this._sendValue = value;
        if (!this._throttled) {
            if (this._leading) {
                this.send();
            }
            else {
                this.throttle(value);
            }
        }
    };
    ThrottleSubscriber.prototype.send = function () {
        var _a = this, _hasValue = _a._hasValue, _sendValue = _a._sendValue;
        if (_hasValue) {
            this.destination.next(_sendValue);
            this.throttle(_sendValue);
        }
        this._hasValue = false;
        this._sendValue = null;
    };
    ThrottleSubscriber.prototype.throttle = function (value) {
        var duration = this.tryDurationSelector(value);
        if (!!duration) {
            this.add(this._throttled = subscribeToResult_1.subscribeToResult(this, duration));
        }
    };
    ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
        try {
            return this.durationSelector(value);
        }
        catch (err) {
            this.destination.error(err);
            return null;
        }
    };
    ThrottleSubscriber.prototype.throttlingDone = function () {
        var _a = this, _throttled = _a._throttled, _trailing = _a._trailing;
        if (_throttled) {
            _throttled.unsubscribe();
        }
        this._throttled = null;
        if (_trailing) {
            this.send();
        }
    };
    ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.throttlingDone();
    };
    ThrottleSubscriber.prototype.notifyComplete = function () {
        this.throttlingDone();
    };
    return ThrottleSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=throttle.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/throttleTime.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/throttleTime.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var async_1 = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/internal/scheduler/async.js");
var throttle_1 = __webpack_require__(/*! ./throttle */ "./node_modules/rxjs/internal/operators/throttle.js");
function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    if (config === void 0) { config = throttle_1.defaultThrottleConfig; }
    return function (source) { return source.lift(new ThrottleTimeOperator(duration, scheduler, config.leading, config.trailing)); };
}
exports.throttleTime = throttleTime;
var ThrottleTimeOperator = (function () {
    function ThrottleTimeOperator(duration, scheduler, leading, trailing) {
        this.duration = duration;
        this.scheduler = scheduler;
        this.leading = leading;
        this.trailing = trailing;
    }
    ThrottleTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
    };
    return ThrottleTimeOperator;
}());
var ThrottleTimeSubscriber = (function (_super) {
    __extends(ThrottleTimeSubscriber, _super);
    function ThrottleTimeSubscriber(destination, duration, scheduler, leading, trailing) {
        var _this = _super.call(this, destination) || this;
        _this.duration = duration;
        _this.scheduler = scheduler;
        _this.leading = leading;
        _this.trailing = trailing;
        _this._hasTrailingValue = false;
        _this._trailingValue = null;
        return _this;
    }
    ThrottleTimeSubscriber.prototype._next = function (value) {
        if (this.throttled) {
            if (this.trailing) {
                this._trailingValue = value;
                this._hasTrailingValue = true;
            }
        }
        else {
            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, { subscriber: this }));
            if (this.leading) {
                this.destination.next(value);
            }
            else if (this.trailing) {
                this._trailingValue = value;
                this._hasTrailingValue = true;
            }
        }
    };
    ThrottleTimeSubscriber.prototype._complete = function () {
        if (this._hasTrailingValue) {
            this.destination.next(this._trailingValue);
            this.destination.complete();
        }
        else {
            this.destination.complete();
        }
    };
    ThrottleTimeSubscriber.prototype.clearThrottle = function () {
        var throttled = this.throttled;
        if (throttled) {
            if (this.trailing && this._hasTrailingValue) {
                this.destination.next(this._trailingValue);
                this._trailingValue = null;
                this._hasTrailingValue = false;
            }
            throttled.unsubscribe();
            this.remove(throttled);
            this.throttled = null;
        }
    };
    return ThrottleTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNext(arg) {
    var subscriber = arg.subscriber;
    subscriber.clearThrottle();
}
//# sourceMappingURL=throttleTime.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduled/scheduleArray.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduled/scheduleArray.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
function scheduleArray(input, scheduler) {
    return new Observable_1.Observable(function (subscriber) {
        var sub = new Subscription_1.Subscription();
        var i = 0;
        sub.add(scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
                return;
            }
            subscriber.next(input[i++]);
            if (!subscriber.closed) {
                sub.add(this.schedule());
            }
        }));
        return sub;
    });
}
exports.scheduleArray = scheduleArray;
//# sourceMappingURL=scheduleArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduled/scheduleIterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduled/scheduleIterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
function scheduleIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    return new Observable_1.Observable(function (subscriber) {
        var sub = new Subscription_1.Subscription();
        var iterator;
        sub.add(function () {
            if (iterator && typeof iterator.return === 'function') {
                iterator.return();
            }
        });
        sub.add(scheduler.schedule(function () {
            iterator = input[iterator_1.iterator]();
            sub.add(scheduler.schedule(function () {
                if (subscriber.closed) {
                    return;
                }
                var value;
                var done;
                try {
                    var result = iterator.next();
                    value = result.value;
                    done = result.done;
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                }
                else {
                    subscriber.next(value);
                    this.schedule();
                }
            }));
        }));
        return sub;
    });
}
exports.scheduleIterable = scheduleIterable;
//# sourceMappingURL=scheduleIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduled/scheduleObservable.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduled/scheduleObservable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
function scheduleObservable(input, scheduler) {
    return new Observable_1.Observable(function (subscriber) {
        var sub = new Subscription_1.Subscription();
        sub.add(scheduler.schedule(function () {
            var observable = input[observable_1.observable]();
            sub.add(observable.subscribe({
                next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
                error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
                complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
            }));
        }));
        return sub;
    });
}
exports.scheduleObservable = scheduleObservable;
//# sourceMappingURL=scheduleObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduled/schedulePromise.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduled/schedulePromise.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
function schedulePromise(input, scheduler) {
    return new Observable_1.Observable(function (subscriber) {
        var sub = new Subscription_1.Subscription();
        sub.add(scheduler.schedule(function () { return input.then(function (value) {
            sub.add(scheduler.schedule(function () {
                subscriber.next(value);
                sub.add(scheduler.schedule(function () { return subscriber.complete(); }));
            }));
        }, function (err) {
            sub.add(scheduler.schedule(function () { return subscriber.error(err); }));
        }); }));
        return sub;
    });
}
exports.schedulePromise = schedulePromise;
//# sourceMappingURL=schedulePromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduled/scheduled.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduled/scheduled.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var scheduleObservable_1 = __webpack_require__(/*! ./scheduleObservable */ "./node_modules/rxjs/internal/scheduled/scheduleObservable.js");
var schedulePromise_1 = __webpack_require__(/*! ./schedulePromise */ "./node_modules/rxjs/internal/scheduled/schedulePromise.js");
var scheduleArray_1 = __webpack_require__(/*! ./scheduleArray */ "./node_modules/rxjs/internal/scheduled/scheduleArray.js");
var scheduleIterable_1 = __webpack_require__(/*! ./scheduleIterable */ "./node_modules/rxjs/internal/scheduled/scheduleIterable.js");
var isInteropObservable_1 = __webpack_require__(/*! ../util/isInteropObservable */ "./node_modules/rxjs/internal/util/isInteropObservable.js");
var isPromise_1 = __webpack_require__(/*! ../util/isPromise */ "./node_modules/rxjs/internal/util/isPromise.js");
var isArrayLike_1 = __webpack_require__(/*! ../util/isArrayLike */ "./node_modules/rxjs/internal/util/isArrayLike.js");
var isIterable_1 = __webpack_require__(/*! ../util/isIterable */ "./node_modules/rxjs/internal/util/isIterable.js");
function scheduled(input, scheduler) {
    if (input != null) {
        if (isInteropObservable_1.isInteropObservable(input)) {
            return scheduleObservable_1.scheduleObservable(input, scheduler);
        }
        else if (isPromise_1.isPromise(input)) {
            return schedulePromise_1.schedulePromise(input, scheduler);
        }
        else if (isArrayLike_1.isArrayLike(input)) {
            return scheduleArray_1.scheduleArray(input, scheduler);
        }
        else if (isIterable_1.isIterable(input) || typeof input === 'string') {
            return scheduleIterable_1.scheduleIterable(input, scheduler);
        }
    }
    throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}
exports.scheduled = scheduled;
//# sourceMappingURL=scheduled.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/Action.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/Action.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
exports.Action = Action;
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsyncAction.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsyncAction.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = __webpack_require__(/*! ./Action */ "./node_modules/rxjs/internal/scheduler/Action.js");
var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(Action_1.Action));
exports.AsyncAction = AsyncAction;
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsyncScheduler.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Scheduler_1 = __webpack_require__(/*! ../Scheduler */ "./node_modules/rxjs/internal/Scheduler.js");
var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler_1.Scheduler.now; }
        var _this = _super.call(this, SchedulerAction, function () {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return _super.prototype.schedule.call(this, work, delay, state);
        }
    };
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
exports.AsyncScheduler = AsyncScheduler;
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/async.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/async.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
exports.asyncScheduler = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
exports.async = exports.asyncScheduler;
//# sourceMappingURL=async.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/iterator.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/iterator.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
exports.getSymbolIterator = getSymbolIterator;
exports.iterator = getSymbolIterator();
exports.$$iterator = exports.iterator;
//# sourceMappingURL=iterator.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/observable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rxSubscriber = (function () {
    return typeof Symbol === 'function'
        ? Symbol('rxSubscriber')
        : '@@rxSubscriber_' + Math.random();
})();
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ObjectUnsubscribedErrorImpl = (function () {
    function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
    }
    ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
    return ObjectUnsubscribedErrorImpl;
})();
exports.ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UnsubscriptionErrorImpl = (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/canReportError.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber_1.Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
exports.canReportError = canReportError;
//# sourceMappingURL=canReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/hostReportError.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/identity.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/identity.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function identity(x) {
    return x;
}
exports.identity = identity;
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArrayLike.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArrayLike.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isInteropObservable.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isInteropObservable.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
function isInteropObservable(input) {
    return input && typeof input[observable_1.observable] === 'function';
}
exports.isInteropObservable = isInteropObservable;
//# sourceMappingURL=isInteropObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isIterable.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isIterable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
function isIterable(input) {
    return input && typeof input[iterator_1.iterator] === 'function';
}
exports.isIterable = isIterable;
//# sourceMappingURL=isIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isObject(x) {
    return x !== null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isPromise.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isPromise.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isPromise(value) {
    return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
exports.isPromise = isPromise;
//# sourceMappingURL=isPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isScheduler.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isScheduler.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
exports.isScheduler = isScheduler;
//# sourceMappingURL=isScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/pipe.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/pipe.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var identity_1 = __webpack_require__(/*! ./identity */ "./node_modules/rxjs/internal/util/identity.js");
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity_1.identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeTo.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeTo.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var subscribeToArray_1 = __webpack_require__(/*! ./subscribeToArray */ "./node_modules/rxjs/internal/util/subscribeToArray.js");
var subscribeToPromise_1 = __webpack_require__(/*! ./subscribeToPromise */ "./node_modules/rxjs/internal/util/subscribeToPromise.js");
var subscribeToIterable_1 = __webpack_require__(/*! ./subscribeToIterable */ "./node_modules/rxjs/internal/util/subscribeToIterable.js");
var subscribeToObservable_1 = __webpack_require__(/*! ./subscribeToObservable */ "./node_modules/rxjs/internal/util/subscribeToObservable.js");
var isArrayLike_1 = __webpack_require__(/*! ./isArrayLike */ "./node_modules/rxjs/internal/util/isArrayLike.js");
var isPromise_1 = __webpack_require__(/*! ./isPromise */ "./node_modules/rxjs/internal/util/isPromise.js");
var isObject_1 = __webpack_require__(/*! ./isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
exports.subscribeTo = function (result) {
    if (!!result && typeof result[observable_1.observable] === 'function') {
        return subscribeToObservable_1.subscribeToObservable(result);
    }
    else if (isArrayLike_1.isArrayLike(result)) {
        return subscribeToArray_1.subscribeToArray(result);
    }
    else if (isPromise_1.isPromise(result)) {
        return subscribeToPromise_1.subscribeToPromise(result);
    }
    else if (!!result && typeof result[iterator_1.iterator] === 'function') {
        return subscribeToIterable_1.subscribeToIterable(result);
    }
    else {
        var value = isObject_1.isObject(result) ? 'an invalid object' : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected."
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};
//# sourceMappingURL=subscribeTo.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToArray.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToArray.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeToArray = function (array) { return function (subscriber) {
    for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
        subscriber.next(array[i]);
    }
    subscriber.complete();
}; };
//# sourceMappingURL=subscribeToArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToIterable.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToIterable.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
exports.subscribeToIterable = function (iterable) { return function (subscriber) {
    var iterator = iterable[iterator_1.iterator]();
    do {
        var item = void 0;
        try {
            item = iterator.next();
        }
        catch (err) {
            subscriber.error(err);
            return subscriber;
        }
        if (item.done) {
            subscriber.complete();
            break;
        }
        subscriber.next(item.value);
        if (subscriber.closed) {
            break;
        }
    } while (true);
    if (typeof iterator.return === 'function') {
        subscriber.add(function () {
            if (iterator.return) {
                iterator.return();
            }
        });
    }
    return subscriber;
}; };
//# sourceMappingURL=subscribeToIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToObservable.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToObservable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
exports.subscribeToObservable = function (obj) { return function (subscriber) {
    var obs = obj[observable_1.observable]();
    if (typeof obs.subscribe !== 'function') {
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    }
    else {
        return obs.subscribe(subscriber);
    }
}; };
//# sourceMappingURL=subscribeToObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToPromise.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToPromise.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hostReportError_1 = __webpack_require__(/*! ./hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.subscribeToPromise = function (promise) { return function (subscriber) {
    promise.then(function (value) {
        if (!subscriber.closed) {
            subscriber.next(value);
            subscriber.complete();
        }
    }, function (err) { return subscriber.error(err); })
        .then(null, hostReportError_1.hostReportError);
    return subscriber;
}; };
//# sourceMappingURL=subscribeToPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToResult.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToResult.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InnerSubscriber_1 = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/rxjs/internal/InnerSubscriber.js");
var subscribeTo_1 = __webpack_require__(/*! ./subscribeTo */ "./node_modules/rxjs/internal/util/subscribeTo.js");
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, innerSubscriber) {
    if (innerSubscriber === void 0) { innerSubscriber = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex); }
    if (innerSubscriber.closed) {
        return undefined;
    }
    if (result instanceof Observable_1.Observable) {
        return result.subscribe(innerSubscriber);
    }
    return subscribeTo_1.subscribeTo(result)(innerSubscriber);
}
exports.subscribeToResult = subscribeToResult;
//# sourceMappingURL=subscribeToResult.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/toSubscriber.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var Observer_1 = __webpack_require__(/*! ../Observer */ "./node_modules/rxjs/internal/Observer.js");
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),

/***/ "./src/const.ts":
/*!**********************!*\
  !*** ./src/const.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isDebug = exports.DEBUG = exports.UPDATE_INTERVAL = exports.PORT = exports.IP = void 0;
exports.IP = "192.168.0.75"; // "localhost"; // "192.168.0.75";
exports.PORT = "8080";
exports.UPDATE_INTERVAL = 60; // milliseconds
exports.DEBUG = false;
exports.isDebug = function () { return exports.DEBUG; };


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./services/backend */ "./src/services/backend/index.ts");
__webpack_require__(/*! ./services/channel */ "./src/services/channel/index.ts");
__webpack_require__(/*! ./services/communication */ "./src/services/communication/index.ts");
__webpack_require__(/*! ./services/init */ "./src/services/init/index.ts");
__webpack_require__(/*! ./services/media */ "./src/services/media/index.ts");
__webpack_require__(/*! ./services/state */ "./src/services/state/index.ts");
__webpack_require__(/*! ./services/unity */ "./src/services/unity/index.ts");


/***/ }),

/***/ "./src/lib/broadcast.ts":
/*!******************************!*\
  !*** ./src/lib/broadcast.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BroadcastingAgent = void 0;
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var const_1 = __webpack_require__(/*! ../const */ "./src/const.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var BroadcastingAgent = /** @class */ (function () {
    function BroadcastingAgent(id, communicationChannel) {
        var _this = this;
        if (id === void 0) { id = utils_1.generateId(4, 4); }
        this.id = id;
        // Participants
        this.participants = [];
        // Subjects
        this.addParticipantSubject = new Subject_1.Subject();
        this.removeParticipantSubject = new Subject_1.Subject();
        // Output
        this.DebugSubject_ = new Subject_1.Subject();
        // Messaging Utils
        this.getCommSubject = function () {
            return _this.commSubject.pipe(filter_1.filter(function (_a) {
                var _id = _a.id;
                return _id !== _this.id;
            }));
        };
        this.getIndividualMessageCommSubject = function () {
            return _this.getCommSubject().pipe(filter_1.filter(function (_a) {
                var to = _a.to;
                return to === _this.id;
            }));
        };
        this.messageHandler = function (message) {
            _this.DebugSubject_.next(message);
        };
        this.sendIndividualRequest = function (data, to) {
            _this.commSubject.next({
                id: _this.id,
                type: "individual",
                data: data,
                to: to,
            });
        };
        // Participants
        this.addParticipant = function (id) {
            _this.participants.push(id);
            _this.addParticipantSubject.next(id);
        };
        this.removeParticipant = function (id) {
            var participants = _this.getParticipants();
            participants = participants.filter(function (_id) { return _id !== id; });
            _this.removeParticipantSubject.next(id);
        };
        this.getParticipants = function () {
            var participants = __spreadArrays(_this.participants);
            return participants;
        };
        // Salutations
        this.greetingHandler = function (message) {
            _this.DebugSubject_.next("Broadcast Test #2");
            var id = message.id, type = message.type;
            var participants = _this.getParticipants();
            if (type !== "greeting")
                return;
            _this.DebugSubject_.next("Broadcast Test #3");
            _this.DebugSubject_.next(["Greeting", message]);
            if (participants.includes(id))
                return;
            _this.DebugSubject_.next("ID: " + _this.id + ", Add Participant");
            _this.addParticipant(id);
            setTimeout(_this.sendGreeting, 1000);
        };
        this.farewellHandler = function (message) {
            var id = message.id, type = message.type;
            var participants = _this.getParticipants();
            if (type !== "farewell")
                return;
            if (participants.includes(id))
                return;
            _this.removeParticipant(id);
        };
        this.sendGreeting = function () {
            _this.commSubject.next({
                id: _this.id,
                type: "greeting",
                data: {},
            });
        };
        this.sendFarewell = function () {
            _this.commSubject.next({
                id: _this.id,
                type: "farewell",
                data: {},
            });
        };
        this.commSubject = communicationChannel;
        this.DebugSubject_.next("Broadcast Test #1");
        this.DebugSubject_.next(["Broadcast Test #4", communicationChannel]);
        this.commSubject.subscribe(function (m) {
            return _this.DebugSubject_.next(["Broadcast Test #5", m]);
        });
        this.getCommSubject().subscribe(function (m) {
            return _this.DebugSubject_.next(["Broadcast Test #6", m]);
        });
        this.getCommSubject().subscribe(this.messageHandler);
        this.getCommSubject().subscribe(this.greetingHandler);
        this.DebugSubject_.pipe(filter_1.filter(const_1.isDebug)).subscribe(function (m) {
            return console.warn("Broadcast: ", m);
        });
    }
    return BroadcastingAgent;
}());
exports.BroadcastingAgent = BroadcastingAgent;


/***/ }),

/***/ "./src/lib/client.ts":
/*!***************************!*\
  !*** ./src/lib/client.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var const_1 = __webpack_require__(/*! ../const */ "./src/const.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var broadcast_1 = __webpack_require__(/*! ./broadcast */ "./src/lib/broadcast.ts");
var connection_manager_1 = __webpack_require__(/*! ./connection-manager */ "./src/lib/connection-manager.ts");
var rtc_messaging_agent_1 = __webpack_require__(/*! ./rtc-messaging-agent */ "./src/lib/rtc-messaging-agent.ts");
var Client = /** @class */ (function () {
    function Client(subject) {
        var _this = this;
        this.subject = subject;
        this.id = utils_1.generateId(4, 4);
        // Channels
        this.dataChannels = {};
        this.streams = {};
        // Subjects
        // Input
        this._LocalMediaSubject = new BehaviorSubject_1.BehaviorSubject(null);
        // Output
        this.OnDataChannelMessageSubject_ = new Subject_1.Subject();
        this.OnDataChannelSubject_ = new Subject_1.Subject();
        this.OnStreamSubject_ = new Subject_1.Subject();
        this.DebugSubject_ = new Subject_1.Subject();
        // Connection
        this.onConnectionCreatedHandler = function (message) {
            var id = message[0], connection = message[1];
            connection.ondatachannel = _this.onDataChannelHandler(id);
            connection.ontrack = _this.onTrackHandler(id);
            _this.addDataChannelToConnection(id, connection);
            var stream = _this._LocalMediaSubject.getValue();
            if (!stream)
                return;
            _this.addStreamToConnection(stream, connection);
        };
        this.onConnected = function (id, connection) {
            connection.onconnectionstatechange = function (ev) {
                var _a;
                if (connection.connectionState === "connected") {
                    _this.DebugSubject_.next("Connection " + id + ", Now Connected");
                    var isOffer = ((_a = connection.localDescription) === null || _a === void 0 ? void 0 : _a.type) === "offer";
                    if (isOffer)
                        return;
                }
            };
        };
        // Stream
        this.onLocalStreamHandler = function (stream) {
            var connections = _this.ConnectionManager.connections;
            for (var id in connections) {
                _this.addStreamToConnection(stream, connections[id]);
            }
        };
        this.addStreamToConnection = function (stream, connection) {
            stream.getTracks().forEach(function (t) { return connection.addTrack(t, stream); });
        };
        this.addStream = function (id, stream) {
            if (!_this.streams[id])
                _this.streams[id] = [];
            _this.streams[id].push(stream);
        };
        this.onTrackHandler = function (id) { return function (ev) {
            _this.DebugSubject_.next("ID: " + id + ", On Track Handler");
            var stream = ev.streams[0];
            _this.addStream(id, stream);
            _this.OnStreamSubject_.next([id, stream]);
        }; };
        // Data Channel
        this.addDataChannelToConnection = function (id, connection) {
            // Data Channel
            var dataChannel = connection.createDataChannel("data-channel-" + id);
            dataChannel.onopen = function (ev) { return _this.DebugSubject_.next("Opened Channel"); };
            dataChannel.onerror = function (ev) { return _this.DebugSubject_.next(JSON.stringify(ev)); };
            _this.dataChannels[id] = dataChannel;
            dataChannel.onmessage = _this.onDataChannelMessageHandler(id);
        };
        this.sendDataToChannel = function (id, message) {
            var channel = _this.dataChannels[id];
            if (!channel)
                return;
            channel.send(message);
        };
        this.broadcastData = function (message) {
            var channels = _this.dataChannels;
            for (var id in channels) {
                var channel = channels[id];
                var isOpen = channel.readyState === "open";
                if (!channel || !isOpen)
                    continue;
                channel.send(message);
            }
        };
        this.onDataChannelHandler = function (id) { return function (ev) {
            _this.DebugSubject_.next("ID: " + id + ", On Data Channel Handler");
            var dataChannel = ev.channel;
            if (!dataChannel)
                return;
            dataChannel.onmessage = _this.onDataChannelMessageHandler(id);
            _this.dataChannels[id] = dataChannel;
            _this.OnDataChannelSubject_.next([id, dataChannel]);
        }; };
        this.onDataChannelMessageHandler = function (id) { return function (ev) {
            var message = ev.data;
            if (!message)
                return;
            _this.OnDataChannelMessageSubject_.next([id, message]);
        }; };
        this.onDataChannelMessageSubjectHandler = function (message) {
            _this.DebugSubject_.next(message);
        };
        // Agents
        this.BroadcastingAgent = new broadcast_1.BroadcastingAgent(this.id, this.subject);
        this.RTCMessagingAgent = new rtc_messaging_agent_1.RTCMessagingAgent(this.BroadcastingAgent);
        this.ConnectionManager = new connection_manager_1.ConnectionManager(this.RTCMessagingAgent);
        this.OnDataChannelMessageSubject_.subscribe(this.onDataChannelMessageSubjectHandler);
        this.ConnectionManager.OnConnectionCreatedSubject.subscribe(this.onConnectionCreatedHandler);
        this._LocalMediaSubject.subscribe(function () {
            return _this.DebugSubject_.next("Client -> LocalMediaSubject");
        });
        this.BroadcastingAgent.sendGreeting();
        this.DebugSubject_.next(["Client", this]);
        this.DebugSubject_.pipe(filter_1.filter(const_1.isDebug)).subscribe(function (m) {
            return console.warn("Client: ", m);
        });
    }
    Client.createClient = function (subject) {
        return new Client(subject);
    };
    return Client;
}());
exports.Client = Client;


/***/ }),

/***/ "./src/lib/connection-manager.ts":
/*!***************************************!*\
  !*** ./src/lib/connection-manager.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionManager = void 0;
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var const_1 = __webpack_require__(/*! ../const */ "./src/const.ts");
var configuration = {
    iceServers: [
        {
            urls: [
                "stun:stun.l.google.com:19302",
                "stun:stun1.l.google.com:19302",
                "stun:stun2.l.google.com:19302",
                "stun:stun3.l.google.com:19302",
                "stun:stun4.l.google.com:19302",
                "stun:stun01.sipphone.com",
                "stun:stun.ekiga.net",
                "stun:stun.fwdnet.net",
                "stun:stun.ideasip.com",
                "stun:stun.iptel.org",
                "stun:stun.rixtelecom.se",
                "stun:stun.schlund.de",
                "stun:stunserver.org",
                "stun:stun.softjoys.com",
                "stun:stun.voiparound.com",
                "stun:stun.voipbuster.com",
                "stun:stun.voipstunt.com",
                "stun:stun.voxgratia.org",
                "stun:stun.xten.com",
            ],
        },
    ],
};
var ConnectionManager = /** @class */ (function () {
    function ConnectionManager(ma) {
        var _this = this;
        this.ma = ma;
        // Connections
        this.connections = {};
        // Subjects
        this.OnDataChannelSubject = new Subject_1.Subject();
        this.OnConnectionCreatedSubject = new Subject_1.Subject();
        this.DebugSubject_ = new Subject_1.Subject();
        this.createConnection = function (id) {
            var _id = _this.ma.broadcastingAgent.id;
            _this.DebugSubject_.next("ID: " + id + ", Create Connection in " + _this.ma.broadcastingAgent.id);
            var connection = new RTCPeerConnection(configuration);
            _this.connections[id] = connection;
            connection.onicecandidate = _this.onICECandidateHandler(id);
            _this.OnConnectionCreatedSubject.next([id, connection]);
            return connection;
        };
        // Add/Remove Participants
        this.onAddParticipantHandler = function (id) {
            _this.DebugSubject_.next(_this.ma.broadcastingAgent.id + " On Add Participant Handler");
            var oldConnection = _this.connections[id];
            if (oldConnection)
                return;
            var connection = _this.createConnection(id);
            connection
                .createOffer()
                .then(_this.ma.onOfferCreatedHandler(id))
                .catch(function (e) {
                _this.DebugSubject_.next(["Couldn't create offer for id " + id, e]);
            });
        };
        this.onRemoveParticipantHandler = function (id) {
            delete _this.connections[id];
        };
        // Session Description
        this.onSetLocalDescriptionHandler = function (message) {
            var id = message[0], sessionDescription = message[1];
            var connection = _this.connections[id];
            if (!connection)
                return;
            connection.setLocalDescription(sessionDescription);
        };
        this.onSetRemoteDescriptionHandler = function (message) {
            var id = message[0], sessionDescription = message[1];
            _this.DebugSubject_.next("Setting remote description in " + _this.ma.broadcastingAgent.id + " for " + id);
            var connection = _this.connections[id];
            if (!connection) {
                // Answer
                connection = _this.onCreateAnswerHandler(id, sessionDescription);
            }
            else {
                // Offer
                connection.setRemoteDescription(sessionDescription);
            }
        };
        // Connection Logistics
        this.onICECandidateHandler = function (id) { return function (ev) {
            _this.DebugSubject_.next("ID: " + id + ", On ICE Candidate Handler");
            var candidate = ev.candidate;
            if (!candidate)
                return;
            _this.ma.onCandidateCreatedHandler(id)(candidate);
        }; };
        this.onCreateAnswerHandler = function (id, sessionDescription) {
            var connection = _this.createConnection(id);
            connection.setRemoteDescription(sessionDescription);
            connection
                .createAnswer()
                .then(_this.ma.onAnswerCreatedHandler(id))
                .catch(function (e) {
                _this.DebugSubject_.next(["Couldn't create answer in ID " + id, e]);
            });
            return connection;
        };
        this.onAddCandidateHandler = function (message) {
            var id = message[0], candidate = message[1];
            _this.DebugSubject_.next(["Add Candidate", candidate]);
            var connection = _this.connections[id];
            if (!connection)
                return;
            connection.addIceCandidate(candidate);
        };
        this.ma.OnAddParticipantSubject.subscribe(this.onAddParticipantHandler);
        this.ma.OnRemoveParticipantSubject.subscribe(this.onRemoveParticipantHandler);
        // this.ma.OnCreateAnswerSubject.subscribe(this.onCreateAnswerHandler);
        this.ma.OnSetLocalDescription.subscribe(this.onSetLocalDescriptionHandler);
        this.ma.OnSetRemoteDescription.subscribe(this.onSetRemoteDescriptionHandler);
        this.ma.OnAddCandidateSubject.subscribe(this.onAddCandidateHandler);
        this.DebugSubject_.pipe(filter_1.filter(const_1.isDebug)).subscribe(function (m) {
            return console.warn("Connection Manager", m);
        });
    }
    return ConnectionManager;
}());
exports.ConnectionManager = ConnectionManager;


/***/ }),

/***/ "./src/lib/rtc-messaging-agent.ts":
/*!****************************************!*\
  !*** ./src/lib/rtc-messaging-agent.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RTCMessagingAgent = void 0;
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var const_1 = __webpack_require__(/*! ../const */ "./src/const.ts");
var RTCMessagingAgent = /** @class */ (function () {
    function RTCMessagingAgent(broadcastingAgent) {
        var _this = this;
        this.broadcastingAgent = broadcastingAgent;
        // Subjects
        this.OnAddParticipantSubject = new Subject_1.Subject();
        this.OnRemoveParticipantSubject = new Subject_1.Subject();
        this.OnSetLocalDescription = new Subject_1.Subject();
        this.OnSetRemoteDescription = new Subject_1.Subject();
        this.OnAddCandidateSubject = new Subject_1.Subject();
        this.DebugSubject_ = new Subject_1.Subject();
        // Add/Remove Participants
        this.onAddParticipantHandler = function (id) {
            _this.OnAddParticipantSubject.next(id);
        };
        this.onRemoveParticipantHandler = function (id) {
            _this.OnRemoveParticipantSubject.next(id);
        };
        // Offer
        this.getOfferSubject = function () {
            return _this.broadcastingAgent
                .getIndividualMessageCommSubject()
                // @ts-ignore
                .pipe(filter_1.filter(function (_a) {
                var data = _a.data;
                return data.type === "offer";
            }));
        };
        this.onOfferCreatedHandler = function (id) { return function (sessionDescription) {
            _this.DebugSubject_.next([
                "Offer for " + id + " Created in " + _this.broadcastingAgent.id,
                sessionDescription,
            ]);
            _this.OnSetLocalDescription.next([id, sessionDescription]);
            console.log("setLocalAndSendMessage sending message", sessionDescription);
            _this.broadcastingAgent.sendIndividualRequest(sessionDescription, id);
        }; };
        this.onOfferHandler = function (message) {
            var id = message.id, data = message.data;
            _this.OnSetRemoteDescription.next([id, data]);
        };
        // Answer
        this.getAnswerSubject = function () {
            return _this.broadcastingAgent
                .getIndividualMessageCommSubject()
                // @ts-ignore
                .pipe(filter_1.filter(function (_a) {
                var data = _a.data;
                return data.type === "answer";
            }));
        };
        this.onAnswerCreatedHandler = function (id) { return function (sessionDescription) {
            _this.DebugSubject_.next([
                "Answer for " + id + " Created in " + _this.broadcastingAgent.id,
                sessionDescription,
            ]);
            _this.OnSetLocalDescription.next([id, sessionDescription]);
            console.log("setLocalAndSendMessage sending message", sessionDescription);
            _this.broadcastingAgent.sendIndividualRequest(sessionDescription, id);
        }; };
        this.onAnswerHandler = function (message) {
            var id = message.id, data = message.data;
            _this.OnSetRemoteDescription.next([id, data]);
        };
        // Candidate
        this.getCandidateSubject = function () {
            return _this.broadcastingAgent
                .getIndividualMessageCommSubject()
                // @ts-ignore
                .pipe(filter_1.filter(function (_a) {
                var data = _a.data;
                return data.type === "candidate";
            }));
        };
        this.onCandidateHandler = function (message) {
            var id = message.id, data = message.data;
            var candidate = new RTCIceCandidate({
                // @ts-ignore
                sdpMLineIndex: data.label,
                // @ts-ignore
                candidate: data.candidate,
            });
            _this.OnAddCandidateSubject.next([id, candidate]);
        };
        this.handleIceCandidate = function (id) { return function (event) {
            console.log("icecandidate event: ", event);
            if (event.candidate) {
                _this.broadcastingAgent.sendIndividualRequest({
                    type: "candidate",
                    label: event.candidate.sdpMLineIndex,
                    id: event.candidate.sdpMid,
                    candidate: event.candidate.candidate,
                }, id);
            }
            else {
                console.log("End of candidates.");
            }
        }; };
        this.onCandidateCreatedHandler = function (id) { return function (candidate) {
            _this.broadcastingAgent.sendIndividualRequest({
                type: "candidate",
                label: candidate.sdpMLineIndex,
                id: candidate.sdpMid,
                candidate: candidate.candidate,
            }, id);
        }; };
        this.broadcastingAgent.addParticipantSubject.subscribe(this.onAddParticipantHandler);
        this.broadcastingAgent.removeParticipantSubject.subscribe(this.onRemoveParticipantHandler);
        this.getOfferSubject().subscribe(this.onOfferHandler);
        this.getAnswerSubject().subscribe(this.onAnswerHandler);
        this.getCandidateSubject().subscribe(this.onCandidateHandler);
        this.DebugSubject_.pipe(filter_1.filter(const_1.isDebug)).subscribe(function (m) {
            return console.warn("RTC-Messaging-Agent: ", m);
        });
    }
    return RTCMessagingAgent;
}());
exports.RTCMessagingAgent = RTCMessagingAgent;


/***/ }),

/***/ "./src/lib/web-sockets-agent.ts":
/*!**************************************!*\
  !*** ./src/lib/web-sockets-agent.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketsAgent = void 0;
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var const_1 = __webpack_require__(/*! ../const */ "./src/const.ts");
var WebSocketsAgent = /** @class */ (function () {
    function WebSocketsAgent(_CommunicationSubject, CommunicationSubject_) {
        var _this = this;
        this._CommunicationSubject = _CommunicationSubject;
        this.CommunicationSubject_ = CommunicationSubject_;
        // Flags
        this.isOpen = false;
        this.canSend = true;
        // Subjects
        this.IsWebSocketReadySubject = new BehaviorSubject_1.BehaviorSubject(false);
        this.OnCloseSubject = new Subject_1.Subject();
        this.DebugSubject_ = new Subject_1.Subject();
        this.onIsWebSocketReadyHandler = function () {
            _this._CommunicationSubject
                .pipe(filter_1.filter(function () {
                var _canSend = _this.canSend;
                if (!_this.canSend)
                    _this.canSend = true;
                return _canSend;
            }))
                .subscribe(function (message) {
                _this.sendMessage(JSON.stringify(message));
            });
        };
        this.getURL = function () {
            var origin = window.location.origin;
            origin = origin.replace("https", "wss").replace("http", "ws");
            return origin;
        };
        this.onMessageHandler = function (event) {
            _this.DebugSubject_.next(event.data);
            var message = JSON.parse(event.data);
            _this.canSend = false;
            _this.CommunicationSubject_.next(message);
        };
        this.onErrorHandler = function (event) {
            console.error("WS Error: ", event);
            if (!_this.ws.OPEN)
                _this.OnCloseSubject.next();
        };
        this.onOpenHandler = function () {
            _this.DebugSubject_.next("WS is Open");
            _this.isOpen = true;
            _this.IsWebSocketReadySubject.next(_this.isOpen);
        };
        this.onCloseHandler = function () {
            _this.isOpen = false;
            _this.OnCloseSubject.next();
        };
        this.sendMessage = function (message) {
            _this.DebugSubject_.next(message);
            if (!_this.ws.OPEN)
                return;
            _this.ws.send(message);
        };
        var url = this.getURL();
        this.ws = new WebSocket(url);
        this.ws.onmessage = this.onMessageHandler;
        this.ws.onopen = this.onOpenHandler;
        this.ws.onclose = this.onCloseHandler;
        this.ws.onerror = this.onErrorHandler;
        this.IsWebSocketReadySubject.pipe(filter_1.filter(function (isReady) { return isReady; })).subscribe(this.onIsWebSocketReadyHandler);
        this.DebugSubject_.pipe(filter_1.filter(const_1.isDebug)).subscribe(function (m) {
            return console.warn("WebSockets Agent: ", m);
        });
    }
    return WebSocketsAgent;
}());
exports.WebSocketsAgent = WebSocketsAgent;


/***/ }),

/***/ "./src/services/backend/backend.ts":
/*!*****************************************!*\
  !*** ./src/services/backend/backend.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BackendService = void 0;
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var definitions_1 = __webpack_require__(/*! ../../shared/definitions */ "./src/shared/definitions.ts");
var IsInitializedSubject = new BehaviorSubject_1.BehaviorSubject(false);
// Incoming
var _InitSubject = new Subject_1.Subject();
var _RefreshSubject = new Subject_1.Subject();
var _IDSubject = new BehaviorSubject_1.BehaviorSubject(null);
var _UseTVChannelSubject = new Subject_1.Subject();
var _SetNameSubject = new Subject_1.Subject();
// Outgoing
var TVProgramStateSubject_ = new BehaviorSubject_1.BehaviorSubject({});
var NamesStateSubject_ = new BehaviorSubject_1.BehaviorSubject({});
var DebugSubject_ = new Subject_1.Subject();
// Methods
var post = function (url, data) {
    return fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    }).catch(function (e) { return DebugSubject_.next(e.message); });
};
var get = function (url) {
    return fetch(url)
        .then(function (response) { return response.json(); })
        .catch(function (e) { return DebugSubject_.next(e); });
};
var sendTVChannel = function (id, channel) {
    return post(definitions_1.URL_TV_CHANNEL, {
        id: id,
        channel: channel,
    });
};
var getNames = function () {
    return get(definitions_1.URL_NAME).then(function (data) {
        if (!data)
            return;
        var names = data;
        NamesStateSubject_.next(names);
    });
};
var sendName = function (id, name) {
    return post(definitions_1.URL_NAME, {
        id: id,
        name: name,
    });
};
var getTVProgram = function () {
    return get(definitions_1.URL_TV_CHANNEL).then(function (data) {
        if (!data)
            return;
        var program = data;
        TVProgramStateSubject_.next(program);
    });
};
var onChannelHandler = function (channel) {
    var id = _IDSubject.getValue();
    if (!id)
        return;
    sendTVChannel(id, channel);
};
var onRefreshHandler = function () {
    getTVProgram();
    getNames();
};
// Subscriptions
_InitSubject.subscribe(function () { return IsInitializedSubject.next(true); });
_UseTVChannelSubject
    .pipe(filter_1.filter(function () { return IsInitializedSubject.getValue(); }))
    .subscribe(onChannelHandler);
_RefreshSubject
    .pipe(filter_1.filter(function () { return IsInitializedSubject.getValue(); }))
    .subscribe(onRefreshHandler);
// Exports
var BackendService = /** @class */ (function () {
    function BackendService() {
    }
    // Incoming
    BackendService._IDSbuject = _IDSubject;
    BackendService._InitSubject = _InitSubject;
    BackendService._RefreshSubject = _RefreshSubject;
    BackendService._UseTVChannelSubject = _UseTVChannelSubject;
    BackendService._SetNameSubject = _SetNameSubject;
    // Output
    BackendService.TVProgramStateSubject_ = TVProgramStateSubject_;
    BackendService.NamesStateSubject_ = NamesStateSubject_;
    BackendService.DebugSubject_ = DebugSubject_;
    return BackendService;
}());
exports.BackendService = BackendService;


/***/ }),

/***/ "./src/services/backend/index.ts":
/*!***************************************!*\
  !*** ./src/services/backend/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./integration/channel */ "./src/services/backend/integration/channel.ts");
__webpack_require__(/*! ./integration/state */ "./src/services/backend/integration/state.ts");


/***/ }),

/***/ "./src/services/backend/integration/channel.ts":
/*!*****************************************************!*\
  !*** ./src/services/backend/integration/channel.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var channel_1 = __webpack_require__(/*! ../../channel/channel */ "./src/services/channel/channel.ts");
var backend_1 = __webpack_require__(/*! ../backend */ "./src/services/backend/backend.ts");
backend_1.BackendService.TVProgramStateSubject_.subscribe(function (program) {
    return channel_1.ChannelService._TVProgramSubject.next(program);
});


/***/ }),

/***/ "./src/services/backend/integration/state.ts":
/*!***************************************************!*\
  !*** ./src/services/backend/integration/state.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var state_1 = __webpack_require__(/*! ../../state/state */ "./src/services/state/state.ts");
var backend_1 = __webpack_require__(/*! ../backend */ "./src/services/backend/backend.ts");
backend_1.BackendService.TVProgramStateSubject_.subscribe(function (program) {
    return state_1.StateService._TVProgramStateSubject.next(program);
});


/***/ }),

/***/ "./src/services/channel/channel.ts":
/*!*****************************************!*\
  !*** ./src/services/channel/channel.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelService = void 0;
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
var combineLatest_1 = __webpack_require__(/*! rxjs/internal/observable/combineLatest */ "./node_modules/rxjs/internal/observable/combineLatest.js");
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var const_1 = __webpack_require__(/*! ../../const */ "./src/const.ts");
/**
 * Channel Module
 *
 * Responsible for passing through only those image data messages that
 * have the id associated with the current channel.
 */
var ImageDataMessageSubject = new BehaviorSubject_1.BehaviorSubject(null);
// Input
var _InitSubject = new Subject_1.Subject();
var _TVProgramSubject = new BehaviorSubject_1.BehaviorSubject({});
var _CurrentChannelSubject = new BehaviorSubject_1.BehaviorSubject(1);
var _ImageDataMessageSubject = new Subject_1.Subject();
var _ProceedSubject = new Subject_1.Subject();
// Output
var ImageDataMessageSubject_ = new Subject_1.Subject();
var DebugSubject_ = new Subject_1.Subject();
// Internal
var IsInitializedSubject = new BehaviorSubject_1.BehaviorSubject(false);
// Methods
var init = function () { return IsInitializedSubject.next(true); };
var filterCurrentChannelImageDataMessages = function (_a) {
    var program = _a[0], channel = _a[1], tuple = _a[2];
    DebugSubject_.next(["Channel Debug #1: ", program, channel, tuple]);
    var from = tuple[0], message = tuple[1];
    var id = program[channel];
    DebugSubject_.next(["Channel Debug #2: ", id]);
    if (!id)
        return;
    if (id !== from)
        return;
    DebugSubject_.next("Channel Debug #3");
    ImageDataMessageSubject_.next(message);
};
var hasMessageFilter = function () { return !!ImageDataMessageSubject.getValue(); };
// Subscriptions
_InitSubject.subscribe(init);
combineLatest_1.combineLatest([
    _TVProgramSubject,
    _CurrentChannelSubject,
    _ImageDataMessageSubject,
])
    .pipe(filter_1.filter(function () { return IsInitializedSubject.getValue(); }))
    .subscribe(filterCurrentChannelImageDataMessages);
DebugSubject_.pipe(filter_1.filter(const_1.isDebug)).subscribe(function (m) {
    return console.warn("Channel Service: ", m);
});
_ProceedSubject
    .pipe(filter_1.filter(hasMessageFilter))
    .subscribe(function () {
    return ImageDataMessageSubject_.next(ImageDataMessageSubject.getValue());
});
// External
var ChannelService = /** @class */ (function () {
    function ChannelService() {
    }
    // Input
    ChannelService._InitSubject = _InitSubject;
    ChannelService._TVProgramSubject = _TVProgramSubject;
    ChannelService._CurrentChannelSubject = _CurrentChannelSubject;
    ChannelService._ImageDataMessageSubject = _ImageDataMessageSubject;
    ChannelService._ProceedSubject = _ProceedSubject;
    // Output
    ChannelService.ImageDataMessageSubject_ = ImageDataMessageSubject_;
    return ChannelService;
}());
exports.ChannelService = ChannelService;


/***/ }),

/***/ "./src/services/channel/index.ts":
/*!***************************************!*\
  !*** ./src/services/channel/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./integration/unity */ "./src/services/channel/integration/unity.ts");


/***/ }),

/***/ "./src/services/channel/integration/unity.ts":
/*!***************************************************!*\
  !*** ./src/services/channel/integration/unity.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var unity_1 = __webpack_require__(/*! ../../unity/unity */ "./src/services/unity/unity.ts");
var channel_1 = __webpack_require__(/*! ../channel */ "./src/services/channel/channel.ts");
channel_1.ChannelService.ImageDataMessageSubject_.subscribe(function (message) {
    return unity_1.UnityService._SendMessageToUnitySubject.next(message);
});


/***/ }),

/***/ "./src/services/communication/incoming/incoming.ts":
/*!*********************************************************!*\
  !*** ./src/services/communication/incoming/incoming.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomingMessageService = void 0;
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var map_1 = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var definitions_1 = __webpack_require__(/*! ../../../shared/definitions */ "./src/shared/definitions.ts");
/**
 * Messages Coming into Unity
 */
// Input
var _MessageSubject = new Subject_1.Subject();
var _ImageSubject = new Subject_1.Subject();
// Output
var PositionMessageSubject_ = new Subject_1.Subject();
var ImageDataMessageSubject_ = new Subject_1.Subject();
var DebugSubject_ = new Subject_1.Subject();
// Methods
var handleIncomingMessage = function (_a) {
    var id = _a[0], message = _a[1];
    var m = null;
    try {
        m = JSON.parse(message);
        m.id = id;
    }
    catch (e) {
        DebugSubject_.next([e, "Could not parse message"]);
    }
    return m;
};
var positionMessageFilter = function (m) {
    return !!m && m.type === definitions_1.EMessageType.Position;
};
var imageMessageFilter = function (m) {
    return !!m && m.type === definitions_1.EMessageType.ImageData;
};
var imageSubjectHandler = function (image) { return ({
    type: definitions_1.EMessageType.ImageData,
    image: image,
}); };
// Subscriptions
_MessageSubject
    .pipe(map_1.map(handleIncomingMessage), filter_1.filter(positionMessageFilter))
    .subscribe(function (m) {
    return PositionMessageSubject_.next(m);
});
_MessageSubject
    .pipe(map_1.map(handleIncomingMessage), filter_1.filter(imageMessageFilter))
    .subscribe(function (m) {
    if (!m)
        return;
    ImageDataMessageSubject_.next([m.id, m]);
});
// Export
var IncomingMessageService = /** @class */ (function () {
    function IncomingMessageService() {
    }
    // Input
    IncomingMessageService._MessageSubject = _MessageSubject;
    IncomingMessageService._ImageSubject = _ImageSubject;
    // Output
    IncomingMessageService.PositionMessageSubject_ = PositionMessageSubject_;
    IncomingMessageService.ImageDataMessageSubject_ = ImageDataMessageSubject_;
    IncomingMessageService.DebugSubject_ = DebugSubject_;
    return IncomingMessageService;
}());
exports.IncomingMessageService = IncomingMessageService;


/***/ }),

/***/ "./src/services/communication/incoming/integration/integration.ts":
/*!************************************************************************!*\
  !*** ./src/services/communication/incoming/integration/integration.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var channel_1 = __webpack_require__(/*! ../../../channel/channel */ "./src/services/channel/channel.ts");
var unity_1 = __webpack_require__(/*! ../../../unity/unity */ "./src/services/unity/unity.ts");
var incoming_1 = __webpack_require__(/*! ../incoming */ "./src/services/communication/incoming/incoming.ts");
incoming_1.IncomingMessageService.ImageDataMessageSubject_.subscribe(function (message) {
    return channel_1.ChannelService._ImageDataMessageSubject.next(message);
});
incoming_1.IncomingMessageService.PositionMessageSubject_.subscribe(function (message) {
    return unity_1.UnityService._SendMessageToUnitySubject.next(message);
});


/***/ }),

/***/ "./src/services/communication/index.ts":
/*!*********************************************!*\
  !*** ./src/services/communication/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./incoming/integration/integration */ "./src/services/communication/incoming/integration/integration.ts");
__webpack_require__(/*! ./outgoing/integration/integration */ "./src/services/communication/outgoing/integration/integration.ts");
__webpack_require__(/*! ./rtc/integration/integration */ "./src/services/communication/rtc/integration/integration.ts");
__webpack_require__(/*! ./ws/integration/integration */ "./src/services/communication/ws/integration/integration.ts");


/***/ }),

/***/ "./src/services/communication/outgoing/integration/integration.ts":
/*!************************************************************************!*\
  !*** ./src/services/communication/outgoing/integration/integration.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var backend_1 = __webpack_require__(/*! ../../../backend/backend */ "./src/services/backend/backend.ts");
var channel_1 = __webpack_require__(/*! ../../../channel/channel */ "./src/services/channel/channel.ts");
var init_1 = __webpack_require__(/*! ../../../init/init */ "./src/services/init/init.ts");
var media_1 = __webpack_require__(/*! ../../../media/media */ "./src/services/media/media.ts");
var unity_1 = __webpack_require__(/*! ../../../unity/unity */ "./src/services/unity/unity.ts");
var rtc_1 = __webpack_require__(/*! ../../rtc/rtc */ "./src/services/communication/rtc/rtc.ts");
var outgoing_1 = __webpack_require__(/*! ../outgoing */ "./src/services/communication/outgoing/outgoing.ts");
outgoing_1.OutgoingMessageService.StartMessageSubject_.subscribe(function () {
    return init_1.InitService._IsGameLoadedSubject.next(true);
});
outgoing_1.OutgoingMessageService.PresentMessageSubject_.subscribe(function () {
    return backend_1.BackendService._UseTVChannelSubject.next(1);
});
outgoing_1.OutgoingMessageService.PresentMessageSubject_.subscribe(function () {
    return media_1.MediaService._ShareScreenSubject.next();
});
outgoing_1.OutgoingMessageService.PositionMessageSubject_.subscribe(function (message) {
    return rtc_1.RTCService._BroadcastSubject.next(JSON.stringify(message));
});
outgoing_1.OutgoingMessageService.FullScreenMessageSubject_.subscribe(function () {
    return unity_1.UnityService._MakeFullScreenSubject.next();
});
outgoing_1.OutgoingMessageService.ProceedMessageSubject_.subscribe(function () {
    return channel_1.ChannelService._ProceedSubject.next();
});


/***/ }),

/***/ "./src/services/communication/outgoing/outgoing.ts":
/*!*********************************************************!*\
  !*** ./src/services/communication/outgoing/outgoing.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OutgoingMessageService = void 0;
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var const_1 = __webpack_require__(/*! ../../../const */ "./src/const.ts");
var definitions_1 = __webpack_require__(/*! ../../../shared/definitions */ "./src/shared/definitions.ts");
/**
 * Messages Going out of Unity
 */
// Input
var _RawMessageSubject = new Subject_1.Subject();
var _ImageMessageSubject = new Subject_1.Subject();
var _IDSubject_ = new BehaviorSubject_1.BehaviorSubject(null);
var MessageSubject_ = new Subject_1.Subject();
var StartMessageSubject_ = new Subject_1.Subject();
var PresentMessageSubject_ = new Subject_1.Subject();
var FullScreenMessageSubject_ = new Subject_1.Subject();
var PositionMessageSubject_ = new Subject_1.Subject();
var ImageMessageSubject_ = new Subject_1.Subject();
var ProceedMessageSubject_ = new Subject_1.Subject();
var DebugSubject_ = new Subject_1.Subject();
// Methods
var generateFilter = function (type) { return function (message) {
    return !!message && message.type === type;
}; };
var rawMessageHandler = function (message) {
    var parsedMessage = null;
    DebugSubject_.next(message);
    try {
        parsedMessage = JSON.parse(message);
    }
    catch (e) {
        DebugSubject_.next("Could not Parse Message");
    }
    if (!parsedMessage)
        return;
    MessageSubject_.next(parsedMessage);
};
var imageHandler = function (_a) {
    var id = _a[0], image = _a[1];
};
// Subscriptions
_RawMessageSubject.subscribe(rawMessageHandler);
MessageSubject_.pipe(filter_1.filter(generateFilter(definitions_1.EMessageType.Start))).subscribe(function (m) { return StartMessageSubject_.next(m); });
MessageSubject_.pipe(filter_1.filter(generateFilter(definitions_1.EMessageType.Present))).subscribe(function (m) { return PresentMessageSubject_.next(m); });
MessageSubject_.pipe(filter_1.filter(generateFilter(definitions_1.EMessageType.FullScreen))).subscribe(function (m) { return FullScreenMessageSubject_.next(m); });
MessageSubject_.pipe(filter_1.filter(generateFilter(definitions_1.EMessageType.Proceed))).subscribe(function (m) { return ProceedMessageSubject_.next(m); });
MessageSubject_.pipe(filter_1.filter(generateFilter(definitions_1.EMessageType.Position))).subscribe(function (m) { return PositionMessageSubject_.next(m); });
// Debugging
DebugSubject_.pipe(filter_1.filter(const_1.isDebug)).subscribe(function (m) {
    return console.warn("Outgoing Message Service: ", m);
});
PresentMessageSubject_.subscribe(function (m) { return DebugSubject_.next(m); });
// Exports
var OutgoingMessageService = /** @class */ (function () {
    function OutgoingMessageService() {
    }
    // Input
    OutgoingMessageService._RawMessageSubject = _RawMessageSubject;
    OutgoingMessageService._ImageMessageSubject = _ImageMessageSubject;
    // IO
    OutgoingMessageService._IDSubject_ = _IDSubject_;
    // Output
    OutgoingMessageService.MessageSubject_ = MessageSubject_;
    OutgoingMessageService.StartMessageSubject_ = StartMessageSubject_;
    OutgoingMessageService.PresentMessageSubject_ = PresentMessageSubject_;
    OutgoingMessageService.FullScreenMessageSubject_ = FullScreenMessageSubject_;
    OutgoingMessageService.PositionMessageSubject_ = PositionMessageSubject_;
    OutgoingMessageService.ImageMessageSubject_ = ImageMessageSubject_;
    OutgoingMessageService.ProceedMessageSubject_ = ProceedMessageSubject_;
    OutgoingMessageService.DebugSubject_ = DebugSubject_;
    return OutgoingMessageService;
}());
exports.OutgoingMessageService = OutgoingMessageService;


/***/ }),

/***/ "./src/services/communication/rtc/integration/integration.ts":
/*!*******************************************************************!*\
  !*** ./src/services/communication/rtc/integration/integration.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var backend_1 = __webpack_require__(/*! ../../../backend/backend */ "./src/services/backend/backend.ts");
var media_1 = __webpack_require__(/*! ../../../media/media */ "./src/services/media/media.ts");
var state_1 = __webpack_require__(/*! ../../../state/state */ "./src/services/state/state.ts");
var incoming_1 = __webpack_require__(/*! ../../incoming/incoming */ "./src/services/communication/incoming/incoming.ts");
var outgoing_1 = __webpack_require__(/*! ../../outgoing/outgoing */ "./src/services/communication/outgoing/outgoing.ts");
var ws_1 = __webpack_require__(/*! ../../ws/ws */ "./src/services/communication/ws/ws.ts");
var rtc_1 = __webpack_require__(/*! ../rtc */ "./src/services/communication/rtc/rtc.ts");
rtc_1.RTCService.OnDataChannelMessageSubject_.subscribe(function (m) {
    return incoming_1.IncomingMessageService._MessageSubject.next(m);
});
rtc_1.RTCService.UpdateStateSubject_.subscribe(function () {
    return backend_1.BackendService._RefreshSubject.next();
});
rtc_1.RTCService.CommunicationSubject_.subscribe(function (m) {
    ws_1.WSService._CommunicationSubject.next(m);
});
rtc_1.RTCService.IDSubject_.subscribe(function (id) { return backend_1.BackendService._IDSbuject.next(id); });
rtc_1.RTCService.IDSubject_.subscribe(function (id) {
    return outgoing_1.OutgoingMessageService._IDSubject_.next(id);
});
rtc_1.RTCService.IDSubject_.subscribe(function (id) { return state_1.StateService._IDSubject_.next(id); });
rtc_1.RTCService.OnStreamSubject_.subscribe(function (stream) {
    return media_1.MediaService._AddAudioSubject.next(stream);
});


/***/ }),

/***/ "./src/services/communication/rtc/rtc.ts":
/*!***********************************************!*\
  !*** ./src/services/communication/rtc/rtc.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RTCService = void 0;
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
var debounceTime_1 = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var switchMap_1 = __webpack_require__(/*! rxjs/internal/operators/switchMap */ "./node_modules/rxjs/internal/operators/switchMap.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var const_1 = __webpack_require__(/*! ../../../const */ "./src/const.ts");
var client_1 = __webpack_require__(/*! ../../../lib/client */ "./src/lib/client.ts");
// Input
var _InitSubject = new Subject_1.Subject();
var _IsInitializedSubject = new BehaviorSubject_1.BehaviorSubject(false);
var _BroadcastSubject = new Subject_1.Subject();
var _CommunicationSubject = new Subject_1.Subject();
var _MediaSubject = new BehaviorSubject_1.BehaviorSubject(null);
// Output
var CommunicationSubject_ = new Subject_1.Subject();
var ClientSubject_ = new BehaviorSubject_1.BehaviorSubject(null);
var IDSubject_ = new BehaviorSubject_1.BehaviorSubject(null);
var UpdateStateSubject_ = new Subject_1.Subject();
var OnDataChannelMessageSubject_ = new Subject_1.Subject();
var OnStreamSubject_ = new Subject_1.Subject();
var DebugSubject_ = new Subject_1.Subject();
// Methods
var init = function () {
    var client = client_1.Client.createClient(CommunicationSubject_);
    ClientSubject_.next(client);
    _IsInitializedSubject.next(true);
    // DebugSubject_.next("Remote");
    IDSubject_.next(client.id);
};
var isInitializedFilter = function () { return _IsInitializedSubject.getValue(); };
var onDataChannelHandler = function (m) {
    DebugSubject_.next(m);
    OnDataChannelMessageSubject_.next(m);
};
var onBroadcastHandler = function (message) {
    // DebugSubject_.next(message);
    var client = ClientSubject_.getValue();
    if (!client)
        return;
    client.broadcastData(message);
};
var onMediaHandler = function (media) {
    DebugSubject_.next("RTCService -> onMediaHandler");
    var client = ClientSubject_.getValue();
    if (!client)
        return;
    client._LocalMediaSubject.next(media);
};
var onStreamHandler = function (_a) {
    var _ = _a[0], stream = _a[1];
    DebugSubject_.next("RTC Service -> onStreamHandler");
    OnStreamSubject_.next(stream);
};
// Subscriptions
_InitSubject.subscribe(init);
ClientSubject_.pipe(filter_1.filter(function (c) { return !!c; }), switchMap_1.switchMap(function (client) { return client.OnDataChannelMessageSubject_; })).subscribe(onDataChannelHandler);
ClientSubject_.pipe(filter_1.filter(function (c) { return !!c; }), switchMap_1.switchMap(function (client) { return client.OnDataChannelSubject_; })).subscribe(console.warn);
ClientSubject_.pipe(filter_1.filter(function (c) { return !!c; }), switchMap_1.switchMap(function (client) { return client.OnStreamSubject_; })).subscribe(onStreamHandler);
_BroadcastSubject.subscribe(onBroadcastHandler);
_CommunicationSubject.subscribe(function (m) { return CommunicationSubject_.next(m); });
CommunicationSubject_.pipe(debounceTime_1.debounceTime(100)).subscribe(function () {
    return UpdateStateSubject_.next();
});
ClientSubject_.pipe(filter_1.filter(function (c) { return !!c; }), switchMap_1.switchMap(function (client) { return client.DebugSubject_; })).subscribe(function (m) { return DebugSubject_.next(m); });
ClientSubject_.pipe(filter_1.filter(function (c) { return !!c; }), switchMap_1.switchMap(function () { return _MediaSubject; })).subscribe(onMediaHandler);
DebugSubject_.pipe(filter_1.filter(const_1.isDebug)).subscribe(function (m) {
    return console.warn("RTC Service: ", m);
});
// Exports
var RTCService = /** @class */ (function () {
    function RTCService() {
    }
    RTCService._InitSubject = _InitSubject;
    RTCService._IsInitializedSubject = _IsInitializedSubject;
    RTCService._BroadcastSubject = _BroadcastSubject;
    RTCService._CommunicationSubject = _CommunicationSubject;
    RTCService._MediaSubject = _MediaSubject;
    // Output
    RTCService.CommunicationSubject_ = CommunicationSubject_;
    RTCService.ClientSubject_ = ClientSubject_;
    RTCService.IDSubject_ = IDSubject_;
    RTCService.UpdateStateSubject_ = UpdateStateSubject_;
    RTCService.OnDataChannelMessageSubject_ = OnDataChannelMessageSubject_;
    RTCService.OnStreamSubject_ = OnStreamSubject_;
    RTCService.DebugSubject_ = DebugSubject_;
    return RTCService;
}());
exports.RTCService = RTCService;


/***/ }),

/***/ "./src/services/communication/ws/integration/integration.ts":
/*!******************************************************************!*\
  !*** ./src/services/communication/ws/integration/integration.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var init_1 = __webpack_require__(/*! ../../../init/init */ "./src/services/init/init.ts");
var rtc_1 = __webpack_require__(/*! ../../rtc/rtc */ "./src/services/communication/rtc/rtc.ts");
var ws_1 = __webpack_require__(/*! ../ws */ "./src/services/communication/ws/ws.ts");
ws_1.WSService.IsWebSocketConnectionOpen_.subscribe(function (isOpen) {
    return init_1.InitService._IsWebSocketConnectionOpen.next(isOpen);
});
ws_1.WSService.CommunicationSubject_.subscribe(function (m) {
    rtc_1.RTCService._CommunicationSubject.next(m);
});


/***/ }),

/***/ "./src/services/communication/ws/ws.ts":
/*!*********************************************!*\
  !*** ./src/services/communication/ws/ws.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WSService = void 0;
var web_sockets_agent_1 = __webpack_require__(/*! ../../../lib/web-sockets-agent */ "./src/lib/web-sockets-agent.ts");
var switchMap_1 = __webpack_require__(/*! rxjs/internal/operators/switchMap */ "./node_modules/rxjs/internal/operators/switchMap.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var const_1 = __webpack_require__(/*! ../../../const */ "./src/const.ts");
// Input
var _CommunicationSubject = new Subject_1.Subject();
var _IsWindowLoadedSubject = new Subject_1.Subject();
var _IsRemoteSubject = new BehaviorSubject_1.BehaviorSubject(false);
// Output
var CommunicationSubject_ = new Subject_1.Subject();
var WebSocketsAgentSubject_ = new BehaviorSubject_1.BehaviorSubject(null);
var ResetAgentSubject_ = new Subject_1.Subject();
var IsWebSocketConnectionOpen_ = new BehaviorSubject_1.BehaviorSubject(false);
var DebugSubject_ = new Subject_1.Subject();
// Methods
var init = function () {
    // TODO: Add Handler to Refresh WS in WebSocketAgent
    var ws = new web_sockets_agent_1.WebSocketsAgent(_CommunicationSubject, CommunicationSubject_);
    WebSocketsAgentSubject_.next(ws);
};
var onWebSocketReadyHandler = function (isReady) {
    DebugSubject_.next("WS Ready");
    IsWebSocketConnectionOpen_.next(isReady);
};
var onWebSocketCloseHandler = function () {
    DebugSubject_.next("WS Closed");
    ResetAgentSubject_.next();
};
// Subscriptions
window.addEventListener("load", function () { return _IsWindowLoadedSubject.next(); });
_IsWindowLoadedSubject.subscribe(init);
ResetAgentSubject_.subscribe(init);
WebSocketsAgentSubject_.pipe(filter_1.filter(function (ws) { return !!ws; }), switchMap_1.switchMap(function (ws) { return ws.IsWebSocketReadySubject; })).subscribe(onWebSocketReadyHandler);
WebSocketsAgentSubject_.pipe(filter_1.filter(function (ws) { return !!ws; }), switchMap_1.switchMap(function (ws) { return ws.OnCloseSubject; })).subscribe(onWebSocketCloseHandler);
_CommunicationSubject.subscribe(function (m) { return DebugSubject_.next(m); });
DebugSubject_.pipe(filter_1.filter(const_1.isDebug)).subscribe(function (m) {
    return console.warn("WS Service: ", m);
});
// Exports
var WSService = /** @class */ (function () {
    function WSService() {
    }
    //Input
    WSService._CommunicationSubject = _CommunicationSubject;
    WSService._IsWindowLoadedSubject = _IsWindowLoadedSubject;
    WSService._IsRemoteSubject = _IsRemoteSubject;
    // Output
    WSService.CommunicationSubject_ = CommunicationSubject_;
    WSService.WebSocketsAgentSubject_ = WebSocketsAgentSubject_;
    WSService.ResetAgentSubject_ = ResetAgentSubject_;
    WSService.IsWebSocketConnectionOpen_ = IsWebSocketConnectionOpen_;
    return WSService;
}());
exports.WSService = WSService;


/***/ }),

/***/ "./src/services/init/index.ts":
/*!************************************!*\
  !*** ./src/services/init/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./integration/integration */ "./src/services/init/integration/integration.ts");


/***/ }),

/***/ "./src/services/init/init.ts":
/*!***********************************!*\
  !*** ./src/services/init/init.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InitService = void 0;
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
var combineLatest_1 = __webpack_require__(/*! rxjs/internal/observable/combineLatest */ "./node_modules/rxjs/internal/observable/combineLatest.js");
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var takeUntil_1 = __webpack_require__(/*! rxjs/internal/operators/takeUntil */ "./node_modules/rxjs/internal/operators/takeUntil.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var const_1 = __webpack_require__(/*! ../../const */ "./src/const.ts");
// Input
var _IsWebSocketConnectionOpen = new BehaviorSubject_1.BehaviorSubject(false);
var _IsMediaConfiguredSubject = new BehaviorSubject_1.BehaviorSubject(false);
var _EnvironmentSubject = new BehaviorSubject_1.BehaviorSubject("remote");
// Output
var _IsWindowLoadedSubject = new BehaviorSubject_1.BehaviorSubject(false);
var _IsGameLoadedSubject = new BehaviorSubject_1.BehaviorSubject(false);
var InitSubject_ = new Subject_1.Subject();
var DebugSubject_ = new Subject_1.Subject();
var EnvSubject_ = new BehaviorSubject_1.BehaviorSubject("production");
// Methods
var getIsRemote = function () { return _EnvironmentSubject.getValue() === "remote"; };
var getIsLocal = function () { return _EnvironmentSubject.getValue() === "local"; };
var onLoadHandler = function () {
    var origin = window.location.origin;
    var isLocal = origin.includes("localhost");
    _EnvironmentSubject.next("remote"); //isLocal ? "local" : "remote");
    _IsWindowLoadedSubject.next(true);
};
var init = function () {
    InitSubject_.next();
    EnvSubject_.next("production");
};
// Subscriptions
window.addEventListener("load", onLoadHandler);
combineLatest_1.combineLatest([
    _IsWindowLoadedSubject,
    _IsGameLoadedSubject,
    _IsWebSocketConnectionOpen,
    _IsMediaConfiguredSubject,
])
    .pipe(takeUntil_1.takeUntil(InitSubject_), filter_1.filter(function (_a) {
    var isWindowLoadedSubject = _a[0], isGameLoaded = _a[1], isWebSocketConnectionOpen = _a[2], isMediaConfigured = _a[3];
    DebugSubject_.next([
        isWindowLoadedSubject,
        isGameLoaded,
        isWebSocketConnectionOpen,
        isMediaConfigured,
    ]);
    var isRemote = getIsRemote();
    if (!isWindowLoadedSubject || !isGameLoaded || !isMediaConfigured)
        return false;
    if (isRemote && !isWebSocketConnectionOpen)
        return false;
    return true;
}))
    .subscribe(init);
InitSubject_.subscribe(function () {
    DebugSubject_.next("INIT!");
});
DebugSubject_.pipe(filter_1.filter(const_1.isDebug)).subscribe(function (m) {
    return console.warn("Init Service: ", m);
});
// Exports
var InitService = /** @class */ (function () {
    function InitService() {
    }
    // Input
    InitService._IsWebSocketConnectionOpen = _IsWebSocketConnectionOpen;
    InitService._EnvironmentSubject = _EnvironmentSubject;
    InitService._IsWindowLoadedSubject = _IsWindowLoadedSubject;
    InitService._IsGameLoadedSubject = _IsGameLoadedSubject;
    InitService._IsMediaConfiguredSubject = _IsMediaConfiguredSubject;
    // Output
    InitService.InitSubject_ = InitSubject_;
    InitService.DebugSubject_ = DebugSubject_;
    InitService.EnvSubject_ = EnvSubject_;
    return InitService;
}());
exports.InitService = InitService;


/***/ }),

/***/ "./src/services/init/integration/integration.ts":
/*!******************************************************!*\
  !*** ./src/services/init/integration/integration.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var backend_1 = __webpack_require__(/*! ../../backend/backend */ "./src/services/backend/backend.ts");
var channel_1 = __webpack_require__(/*! ../../channel/channel */ "./src/services/channel/channel.ts");
var rtc_1 = __webpack_require__(/*! ../../communication/rtc/rtc */ "./src/services/communication/rtc/rtc.ts");
var media_1 = __webpack_require__(/*! ../../media/media */ "./src/services/media/media.ts");
var state_1 = __webpack_require__(/*! ../../state/state */ "./src/services/state/state.ts");
var init_1 = __webpack_require__(/*! ../init */ "./src/services/init/init.ts");
init_1.InitService.InitSubject_.subscribe(function () { return backend_1.BackendService._InitSubject.next(); });
init_1.InitService.InitSubject_.subscribe(function () { return channel_1.ChannelService._InitSubject.next(); });
init_1.InitService.InitSubject_.subscribe(function () { return media_1.MediaService._InitSubject.next(); });
init_1.InitService.InitSubject_.subscribe(function () { return rtc_1.RTCService._InitSubject.next(); });
init_1.InitService.InitSubject_.subscribe(function () { return state_1.StateService._InitSubject.next(); });


/***/ }),

/***/ "./src/services/media/index.ts":
/*!*************************************!*\
  !*** ./src/services/media/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./integration/integration */ "./src/services/media/integration/integration.ts");


/***/ }),

/***/ "./src/services/media/integration/integration.ts":
/*!*******************************************************!*\
  !*** ./src/services/media/integration/integration.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var backend_1 = __webpack_require__(/*! ../../backend/backend */ "./src/services/backend/backend.ts");
var rtc_1 = __webpack_require__(/*! ../../communication/rtc/rtc */ "./src/services/communication/rtc/rtc.ts");
var init_1 = __webpack_require__(/*! ../../init/init */ "./src/services/init/init.ts");
var state_1 = __webpack_require__(/*! ../../state/state */ "./src/services/state/state.ts");
var unity_1 = __webpack_require__(/*! ../../unity/unity */ "./src/services/unity/unity.ts");
var media_1 = __webpack_require__(/*! ../media */ "./src/services/media/media.ts");
media_1.MediaService.IsPresentingSubject_.pipe(filter_1.filter(function (isPresenting) { return isPresenting; })).subscribe(function () { return backend_1.BackendService._UseTVChannelSubject.next(1); });
media_1.MediaService.ImageDataMessageSubject_.subscribe(function (m) {
    return rtc_1.RTCService._BroadcastSubject.next(JSON.stringify(m));
});
media_1.MediaService.IsPresentingSubject_.subscribe(function (isPresenting) {
    return state_1.StateService._IsPresentingSubject.next(isPresenting);
});
media_1.MediaService.IsPresentingSubject_.pipe(filter_1.filter(function (isPresenting) { return isPresenting; })).subscribe(function () { return unity_1.UnityService._CanSendMessages.next(false); });
media_1.MediaService.IsPresentingSubject_.pipe(filter_1.filter(function (isPresenting) { return isPresenting; })).subscribe(function () { return unity_1.UnityService._QuitGameSubject.next(); });
media_1.MediaService.IsMediaConfiguredSubject_.subscribe(function (isConfigured) {
    return init_1.InitService._IsMediaConfiguredSubject.next(isConfigured);
});
media_1.MediaService.MediaSubject_.subscribe(function (media) {
    return rtc_1.RTCService._MediaSubject.next(media);
});


/***/ }),

/***/ "./src/services/media/media.ts":
/*!*************************************!*\
  !*** ./src/services/media/media.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaService = void 0;
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var switchMap_1 = __webpack_require__(/*! rxjs/internal/operators/switchMap */ "./node_modules/rxjs/internal/operators/switchMap.js");
var throttleTime_1 = __webpack_require__(/*! rxjs/internal/operators/throttleTime */ "./node_modules/rxjs/internal/operators/throttleTime.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var const_1 = __webpack_require__(/*! ../../const */ "./src/const.ts");
var definitions_1 = __webpack_require__(/*! ../../shared/definitions */ "./src/shared/definitions.ts");
var IsInitializedSubject = new BehaviorSubject_1.BehaviorSubject(false);
var AudioStreamSubject = new BehaviorSubject_1.BehaviorSubject(null);
var AudioTrackSubject = new BehaviorSubject_1.BehaviorSubject(null);
// Input
var _InitSubject = new Subject_1.Subject();
var _ShareScreenSubject = new Subject_1.Subject();
var _AddAudioSubject = new Subject_1.Subject();
// Output
var OnRequestAnimationFrame_ = new Subject_1.Subject();
var IsPresentingSubject_ = new BehaviorSubject_1.BehaviorSubject(false);
var MediaSubject_ = new BehaviorSubject_1.BehaviorSubject(null);
var IsMediaConfiguredSubject_ = new BehaviorSubject_1.BehaviorSubject(false);
var ScreenMediaSubject_ = new BehaviorSubject_1.BehaviorSubject(null);
var ImageSubject_ = new Subject_1.Subject();
var ImageDataMessageSubject_ = new Subject_1.Subject();
var DebugSubject_ = new Subject_1.Subject();
// Auxilary
var SIZE = 1024;
var video = document.createElement("video");
var canvas;
// Methods
var getAudio = function () {
    return navigator.mediaDevices
        .getUserMedia({ audio: true, video: false })
        .then(function (stream) {
        MediaSubject_.next(stream);
        AudioStreamSubject.next(stream);
        AudioTrackSubject.next(stream.getAudioTracks()[0]);
    })
        .catch(function (e) {
        DebugSubject_.next("getAudio() error: " + e.name);
    })
        .finally(function () { return IsMediaConfiguredSubject_.next(true); });
};
var getDisplayMedia = function () {
    return navigator.mediaDevices
        //@ts-ignore
        .getDisplayMedia({
        video: true,
        audio: true,
    })
        .then(function (stream) {
        ScreenMediaSubject_.next(stream);
        DebugSubject_.next("Local Media");
    })
        .catch(function (e) {
        DebugSubject_.next("getDisplayMedia() error: " + e.name);
    });
};
var initializeCanvas = function () {
    try {
        canvas = new OffscreenCanvas(SIZE, SIZE);
    }
    catch (e) {
        DebugSubject_.next(e);
    }
};
var streamToImageHandler = function (stream) {
    if (!canvas)
        return;
    video.pause();
    video.srcObject = stream;
    video.addEventListener("canplay", function () {
        video.play();
    });
};
var update = function () {
    var _a;
    if (!canvas)
        return;
    (_a = canvas.getContext("2d")) === null || _a === void 0 ? void 0 : _a.drawImage(video, 0, 0, SIZE, SIZE);
    var data = canvas.convertToBlob({
        type: "image/jpeg",
        quality: 0.1,
    });
    data.then(function (blob) {
        var reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
            var s = reader.result;
            if (!s || typeof s !== "string")
                return;
            s = s.replace("data:image/jpeg;base64,", "");
            ImageSubject_.next(s);
        };
    });
};
var onLocalMediaHandler = function (stream) {
    if (!stream)
        return;
    IsPresentingSubject_.next(true);
    streamToImageHandler(stream);
    var audioStream = AudioStreamSubject.getValue();
    if (!audioStream)
        return;
    for (var _i = 0, _a = stream.getAudioTracks(); _i < _a.length; _i++) {
        var track = _a[_i];
        audioStream.addTrack(track);
    }
};
var onImageToImageDataMessageHandler = function (image) {
    var message = {
        type: definitions_1.EMessageType.ImageData,
        image: image,
    };
    ImageDataMessageSubject_.next(message);
};
var onShareScreenHandler = function () {
    DebugSubject_.next("Init Media");
    getDisplayMedia();
};
var onAddAudio = function (stream) {
    DebugSubject_.next("Media Service -> onAddAudio");
    var audio = document.createElement("audio");
    audio.setAttribute("autoplay", "true");
    audio.srcObject = stream;
    IsPresentingSubject_.pipe(filter_1.filter(function (isPresenting) { return isPresenting; })).subscribe(function () { return (audio.muted = true); });
};
var init = function () {
    initializeCanvas();
    step();
    IsInitializedSubject.next(true);
};
var isInitializedFilter = function () { return IsInitializedSubject.getValue(); };
var step = function () {
    OnRequestAnimationFrame_.next();
    requestAnimationFrame(step);
};
// Subscriptions
window.addEventListener("load", getAudio);
_InitSubject.subscribe(init);
IsPresentingSubject_.pipe(filter_1.filter(function (isPresenting) { return isPresenting; }), switchMap_1.switchMap(function () { return AudioTrackSubject; }), filter_1.filter(function (track) { return !!track; })).subscribe(function (track) { return (track.enabled = false); });
ImageSubject_.pipe(filter_1.filter(isInitializedFilter)).subscribe(onImageToImageDataMessageHandler);
ScreenMediaSubject_.pipe(filter_1.filter(isInitializedFilter)).subscribe(onLocalMediaHandler);
_ShareScreenSubject
    // .pipe(filter(isInitializedFilter), filter(hasNoLocalMediaFilter))
    .subscribe(onShareScreenHandler);
_AddAudioSubject.subscribe(onAddAudio);
OnRequestAnimationFrame_.pipe(filter_1.filter(function () { return IsPresentingSubject_.getValue(); }), throttleTime_1.throttleTime(const_1.UPDATE_INTERVAL)).subscribe(update);
DebugSubject_.pipe(filter_1.filter(const_1.isDebug)).subscribe(function (m) {
    return console.warn("Media Service: ", m);
});
// Export
var MediaService = /** @class */ (function () {
    function MediaService() {
    }
    // Input
    MediaService._InitSubject = _InitSubject;
    MediaService._ShareScreenSubject = _ShareScreenSubject;
    MediaService._AddAudioSubject = _AddAudioSubject;
    // Output
    MediaService.IsPresentingSubject_ = IsPresentingSubject_;
    MediaService.IsMediaConfiguredSubject_ = IsMediaConfiguredSubject_;
    MediaService.MediaSubject_ = MediaSubject_;
    MediaService.ScreenMediaSubject_ = ScreenMediaSubject_;
    MediaService.ImageDataMessageSubject_ = ImageDataMessageSubject_;
    MediaService.DebugSubject_ = DebugSubject_;
    return MediaService;
}());
exports.MediaService = MediaService;


/***/ }),

/***/ "./src/services/state/index.ts":
/*!*************************************!*\
  !*** ./src/services/state/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/***/ }),

/***/ "./src/services/state/state.ts":
/*!*************************************!*\
  !*** ./src/services/state/state.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateService = void 0;
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
var combineLatest_1 = __webpack_require__(/*! rxjs/internal/observable/combineLatest */ "./node_modules/rxjs/internal/observable/combineLatest.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var definitions_1 = __webpack_require__(/*! ../../shared/definitions */ "./src/shared/definitions.ts");
// Input
var _InitSubject = new Subject_1.Subject();
var _ClientSubject = new Subject_1.Subject();
var _IDSubject_ = new Subject_1.Subject();
var _CurrentTVChannelStateSubject = new Subject_1.Subject();
var _TVProgramStateSubject = new Subject_1.Subject();
var _IsPresentingSubject = new Subject_1.Subject();
// Output
var GameStateSubject_ = new BehaviorSubject_1.BehaviorSubject(definitions_1.DEFAULT_STATE);
var DebugSubject_ = new Subject_1.Subject();
var getState = function () { return (__assign({}, GameStateSubject_.getValue())); };
var updateState = function (partial) {
    var prevState = getState();
    var newState = __assign(__assign({}, prevState), partial);
    GameStateSubject_.next(newState);
};
var stateUpdateHandler = function (_a) {
    var client = _a[0], id = _a[1], channel = _a[2], program = _a[3], isPresenting = _a[4];
    DebugSubject_.next(client === null || client === void 0 ? void 0 : client.ConnectionManager.connections);
    updateState({
        streams: (client === null || client === void 0 ? void 0 : client.streams) || {},
        id: id || undefined,
        channel: channel || null,
        program: program,
        isPresenting: isPresenting,
    });
};
_InitSubject.subscribe(function () {
    combineLatest_1.combineLatest([
        _ClientSubject,
        _IDSubject_,
        _CurrentTVChannelStateSubject,
        _TVProgramStateSubject,
        _IsPresentingSubject,
    ]).subscribe(stateUpdateHandler);
    GameStateSubject_.subscribe(function (state) { return DebugSubject_.next(state); });
});
var StateService = /** @class */ (function () {
    function StateService() {
    }
    // Input
    StateService._InitSubject = _InitSubject;
    StateService._ClientSubject = _ClientSubject;
    StateService._IDSubject_ = _IDSubject_;
    StateService._CurrentTVChannelStateSubject = _CurrentTVChannelStateSubject;
    StateService._TVProgramStateSubject = _TVProgramStateSubject;
    StateService._IsPresentingSubject = _IsPresentingSubject;
    // Output
    StateService.GameStateSubject_ = GameStateSubject_;
    StateService.DebugSubject_ = DebugSubject_;
    return StateService;
}());
exports.StateService = StateService;


/***/ }),

/***/ "./src/services/unity/index.ts":
/*!*************************************!*\
  !*** ./src/services/unity/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./integration/outgoing */ "./src/services/unity/integration/outgoing.ts");


/***/ }),

/***/ "./src/services/unity/integration/outgoing.ts":
/*!****************************************************!*\
  !*** ./src/services/unity/integration/outgoing.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var outgoing_1 = __webpack_require__(/*! ../../communication/outgoing/outgoing */ "./src/services/communication/outgoing/outgoing.ts");
var unity_1 = __webpack_require__(/*! ../unity */ "./src/services/unity/unity.ts");
unity_1.UnityService.UnityMessageSubject_.subscribe(function (message) {
    outgoing_1.OutgoingMessageService._RawMessageSubject.next(message);
});


/***/ }),

/***/ "./src/services/unity/unity.ts":
/*!*************************************!*\
  !*** ./src/services/unity/unity.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UnityService = void 0;
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
// Input
var _CurrentTVChannelStateSubject = new BehaviorSubject_1.BehaviorSubject(1);
var _CanSendMessages = new BehaviorSubject_1.BehaviorSubject(true);
var _SendMessageToUnitySubject = new Subject_1.Subject();
var _MakeFullScreenSubject = new Subject_1.Subject();
var _QuitGameSubject = new Subject_1.Subject();
// Output
var UnityMessageSubject_ = new Subject_1.Subject();
var PositionStateSubject_ = new Subject_1.Subject();
var DebugSubject_ = new Subject_1.Subject();
// Auxilary
var MANAGER = "Manager";
var ON_MESSAGE = "OnMessage";
// Methods
var sendToUnity = function (object, method, message) {
    // @ts-ignore
    if (!unityInstance)
        return;
    // @ts-ignore
    unityInstance.SendMessage(object, method, message);
};
var sendMessageToUnityHandler = function (message) {
    DebugSubject_.next(["Send To Unity", message]);
    var messageString = JSON.stringify(message);
    sendToUnity(MANAGER, ON_MESSAGE, messageString);
};
var makeFullScreen = function () {
    // @ts-ignore
    if (!unityInstance)
        return;
    // @ts-ignore
    unityInstance.SetFullscreen(1);
};
var quitGame = function () {
    // @ts-ignore
    if (!unityInstance)
        return;
    // @ts-ignore
    unityInstance.Quit();
};
// Subscriptions
// @ts-ignore
window.sendUnityMessage = function (message) {
    return UnityMessageSubject_.next(message);
};
_SendMessageToUnitySubject
    .pipe(filter_1.filter(function () { return _CanSendMessages.getValue(); }))
    .subscribe(sendMessageToUnityHandler);
_MakeFullScreenSubject.subscribe(makeFullScreen);
_QuitGameSubject.subscribe(quitGame);
var UnityService = /** @class */ (function () {
    function UnityService() {
    }
    UnityService._CurrentTVChannelStateSubject = _CurrentTVChannelStateSubject;
    UnityService._CanSendMessages = _CanSendMessages;
    UnityService._SendMessageToUnitySubject = _SendMessageToUnitySubject;
    UnityService._MakeFullScreenSubject = _MakeFullScreenSubject;
    UnityService._QuitGameSubject = _QuitGameSubject;
    // Output
    UnityService.UnityMessageSubject_ = UnityMessageSubject_;
    UnityService.PositionStateSubject_ = PositionStateSubject_;
    UnityService.DebugSubject_ = DebugSubject_;
    return UnityService;
}());
exports.UnityService = UnityService;


/***/ }),

/***/ "./src/shared/definitions.ts":
/*!***********************************!*\
  !*** ./src/shared/definitions.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_STATE = exports.URL_NAME = exports.URL_TV_CHANNEL = exports.EMessageType = void 0;
// Messages
var EMessageType;
(function (EMessageType) {
    EMessageType["Present"] = "present";
    EMessageType["FullScreen"] = "fullscreen";
    EMessageType["Position"] = "position";
    EMessageType["ImageData"] = "image";
    EMessageType["Start"] = "start";
    EMessageType["Proceed"] = "proceed";
})(EMessageType = exports.EMessageType || (exports.EMessageType = {}));
// Backend
exports.URL_TV_CHANNEL = "/tv";
exports.URL_NAME = "/name";
exports.DEFAULT_STATE = {
    id: "",
    isPresenting: false,
    streams: {},
    channel: 1,
    program: {},
};


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugSubject = exports.EnvironmentSubject = exports.generateId = void 0;
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
var filter_1 = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
var getRandomNumbers = function (length) {
    var value = Array.from(Math.round(Math.random() * Math.pow(10, length)).toString()).reverse();
    return new Array(length)
        .fill("0")
        .map(function (v, i) { return value[i] || v; })
        .reverse()
        .join("");
};
exports.generateId = function (amount, length) {
    return new Array(amount)
        .fill(0)
        .map(function (a, i, b) { return "" + (i && "-") + getRandomNumbers(length); })
        .join("");
};
exports.EnvironmentSubject = new BehaviorSubject_1.BehaviorSubject("development");
exports.DebugSubject = new Subject_1.Subject();
exports.DebugSubject.pipe(filter_1.filter(function () { return exports.EnvironmentSubject.getValue() === "development"; })).subscribe(console.warn);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL0lubmVyU3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9PYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL09ic2VydmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL091dGVyU3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9TY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvU3ViamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9TdWJqZWN0U3Vic2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL1N1YnNjcmliZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvU3Vic2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL2NvbWJpbmVMYXRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29ic2VydmFibGUvZnJvbUFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29wZXJhdG9ycy9kZWJvdW5jZVRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvbWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29wZXJhdG9ycy9zd2l0Y2hNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzL3Rha2VVbnRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvdGhyb3R0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzL3Rocm90dGxlVGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVJdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVPYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZVByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zY2hlZHVsZXIvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3NjaGVkdWxlci9Bc3luY0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zY2hlZHVsZXIvQXN5bmNTY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvc2NoZWR1bGVyL2FzeW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zeW1ib2wvb2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zeW1ib2wvcnhTdWJzY3JpYmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9VbnN1YnNjcmlwdGlvbkVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvY2FuUmVwb3J0RXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9ob3N0UmVwb3J0RXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9pc0ludGVyb3BPYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvaXNJdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvaXNQcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvaXNTY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9waXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvc3Vic2NyaWJlVG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9zdWJzY3JpYmVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvc3Vic2NyaWJlVG9JdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL3N1YnNjcmliZVRvT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL3N1YnNjcmliZVRvUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL3N1YnNjcmliZVRvUmVzdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvdG9TdWJzY3JpYmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9icm9hZGNhc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb25uZWN0aW9uLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9ydGMtbWVzc2FnaW5nLWFnZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvd2ViLXNvY2tldHMtYWdlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2JhY2tlbmQvYmFja2VuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvYmFja2VuZC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvYmFja2VuZC9pbnRlZ3JhdGlvbi9jaGFubmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9iYWNrZW5kL2ludGVncmF0aW9uL3N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9jaGFubmVsL2NoYW5uZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NoYW5uZWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NoYW5uZWwvaW50ZWdyYXRpb24vdW5pdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vaW5jb21pbmcvaW5jb21pbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vaW5jb21pbmcvaW50ZWdyYXRpb24vaW50ZWdyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vb3V0Z29pbmcvaW50ZWdyYXRpb24vaW50ZWdyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vb3V0Z29pbmcvb3V0Z29pbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vcnRjL2ludGVncmF0aW9uL2ludGVncmF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uL3J0Yy9ydGMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vd3MvaW50ZWdyYXRpb24vaW50ZWdyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbW11bmljYXRpb24vd3Mvd3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2luaXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2luaXQvaW5pdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvaW5pdC9pbnRlZ3JhdGlvbi9pbnRlZ3JhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvbWVkaWEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL21lZGlhL2ludGVncmF0aW9uL2ludGVncmF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9tZWRpYS9tZWRpYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc3RhdGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3N0YXRlL3N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy91bml0eS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdW5pdHkvaW50ZWdyYXRpb24vb3V0Z29pbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3VuaXR5L3VuaXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvZGVmaW5pdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQywwREFBVztBQUNuQyxnQ0FBZ0MsbUJBQU8sQ0FBQyxvR0FBZ0M7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDJDOzs7Ozs7Ozs7Ozs7QUN2RGE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCw4Q0FBOEMsY0FBYztBQUM1RCxtQkFBbUIsbUJBQU8sQ0FBQyxnRUFBYztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDJDOzs7Ozs7Ozs7Ozs7QUN4Q2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCx1QkFBdUIsbUJBQU8sQ0FBQyxrRkFBdUI7QUFDdEQscUJBQXFCLG1CQUFPLENBQUMsOEVBQXFCO0FBQ2xELG1CQUFtQixtQkFBTyxDQUFDLDhFQUFxQjtBQUNoRCxhQUFhLG1CQUFPLENBQUMsOERBQWE7QUFDbEMsZUFBZSxtQkFBTyxDQUFDLHdEQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxrQkFBa0IsRUFBRSxrQkFBa0Isb0JBQW9CLEVBQUUsZUFBZSx1QkFBdUIsRUFBRTtBQUM5SSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDOzs7Ozs7Ozs7Ozs7QUNwSGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxlQUFlLG1CQUFPLENBQUMsd0RBQVU7QUFDakMsd0JBQXdCLG1CQUFPLENBQUMsb0ZBQXdCO0FBQ3hEO0FBQ0E7QUFDQSw0QkFBNEIsRUFBRTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCwyQkFBMkI7QUFDM0I7QUFDQSxvQzs7Ozs7Ozs7Ozs7O0FDakJhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQThDLGNBQWM7QUFDNUQsbUJBQW1CLG1CQUFPLENBQUMsZ0VBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMkM7Ozs7Ozs7Ozs7OztBQ2pDYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQSw2QkFBNkIscUJBQXFCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFdBQVc7QUFDMUM7QUFDQTtBQUNBLGlDQUFpQyxtQkFBbUI7QUFDcEQ7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxxQzs7Ozs7Ozs7Ozs7O0FDaEJhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQThDLGNBQWM7QUFDNUQsbUJBQW1CLG1CQUFPLENBQUMsZ0VBQWM7QUFDekMsbUJBQW1CLG1CQUFPLENBQUMsZ0VBQWM7QUFDekMscUJBQXFCLG1CQUFPLENBQUMsb0VBQWdCO0FBQzdDLGdDQUFnQyxtQkFBTyxDQUFDLG9HQUFnQztBQUN4RSw0QkFBNEIsbUJBQU8sQ0FBQyxrRkFBdUI7QUFDM0QscUJBQXFCLG1CQUFPLENBQUMsNEZBQWlDO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxtQzs7Ozs7Ozs7Ozs7O0FDMUthO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQThDLGNBQWM7QUFDNUQscUJBQXFCLG1CQUFPLENBQUMsb0VBQWdCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwrQzs7Ozs7Ozs7Ozs7O0FDNUNhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQThDLGNBQWM7QUFDNUQsbUJBQW1CLG1CQUFPLENBQUMsMEVBQW1CO0FBQzlDLGlCQUFpQixtQkFBTyxDQUFDLDREQUFZO0FBQ3JDLHFCQUFxQixtQkFBTyxDQUFDLG9FQUFnQjtBQUM3QyxxQkFBcUIsbUJBQU8sQ0FBQyw0RkFBaUM7QUFDOUQsZUFBZSxtQkFBTyxDQUFDLHdEQUFVO0FBQ2pDLHdCQUF3QixtQkFBTyxDQUFDLG9GQUF3QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUsYUFBYTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCw2Q0FBNkM7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0FBQyx3RkFBZ0M7QUFDdkQsZ0JBQWdCLG1CQUFPLENBQUMsc0VBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHNCQUFzQixFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxtREFBbUQsRUFBRTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxnRUFBZ0UsRUFBRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwiLi9TdWJqZWN0XCIpO1xudmFyIE9iamVjdFVuc3Vic2NyaWJlZEVycm9yXzEgPSByZXF1aXJlKFwiLi91dGlsL09iamVjdFVuc3Vic2NyaWJlZEVycm9yXCIpO1xudmFyIEJlaGF2aW9yU3ViamVjdCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJlaGF2aW9yU3ViamVjdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCZWhhdmlvclN1YmplY3QoX3ZhbHVlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl92YWx1ZSA9IF92YWx1ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQmVoYXZpb3JTdWJqZWN0LnByb3RvdHlwZSwgXCJ2YWx1ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQmVoYXZpb3JTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IF9zdXBlci5wcm90b3R5cGUuX3N1YnNjcmliZS5jYWxsKHRoaXMsIHN1YnNjcmliZXIpO1xuICAgICAgICBpZiAoc3Vic2NyaXB0aW9uICYmICFzdWJzY3JpcHRpb24uY2xvc2VkKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodGhpcy5fdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgfTtcbiAgICBCZWhhdmlvclN1YmplY3QucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5oYXNFcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy50aHJvd25FcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yXzEuT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQmVoYXZpb3JTdWJqZWN0LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUubmV4dC5jYWxsKHRoaXMsIHRoaXMuX3ZhbHVlID0gdmFsdWUpO1xuICAgIH07XG4gICAgcmV0dXJuIEJlaGF2aW9yU3ViamVjdDtcbn0oU3ViamVjdF8xLlN1YmplY3QpKTtcbmV4cG9ydHMuQmVoYXZpb3JTdWJqZWN0ID0gQmVoYXZpb3JTdWJqZWN0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QmVoYXZpb3JTdWJqZWN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi9TdWJzY3JpYmVyXCIpO1xudmFyIElubmVyU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKElubmVyU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBJbm5lclN1YnNjcmliZXIocGFyZW50LCBvdXRlclZhbHVlLCBvdXRlckluZGV4KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgX3RoaXMub3V0ZXJWYWx1ZSA9IG91dGVyVmFsdWU7XG4gICAgICAgIF90aGlzLm91dGVySW5kZXggPSBvdXRlckluZGV4O1xuICAgICAgICBfdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgSW5uZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnBhcmVudC5ub3RpZnlOZXh0KHRoaXMub3V0ZXJWYWx1ZSwgdmFsdWUsIHRoaXMub3V0ZXJJbmRleCwgdGhpcy5pbmRleCsrLCB0aGlzKTtcbiAgICB9O1xuICAgIElubmVyU3Vic2NyaWJlci5wcm90b3R5cGUuX2Vycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm5vdGlmeUVycm9yKGVycm9yLCB0aGlzKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgSW5uZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm5vdGlmeUNvbXBsZXRlKHRoaXMpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gSW5uZXJTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xuZXhwb3J0cy5Jbm5lclN1YnNjcmliZXIgPSBJbm5lclN1YnNjcmliZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Jbm5lclN1YnNjcmliZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY2FuUmVwb3J0RXJyb3JfMSA9IHJlcXVpcmUoXCIuL3V0aWwvY2FuUmVwb3J0RXJyb3JcIik7XG52YXIgdG9TdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi91dGlsL3RvU3Vic2NyaWJlclwiKTtcbnZhciBvYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi9zeW1ib2wvb2JzZXJ2YWJsZVwiKTtcbnZhciBwaXBlXzEgPSByZXF1aXJlKFwiLi91dGlsL3BpcGVcIik7XG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi9jb25maWdcIik7XG52YXIgT2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gT2JzZXJ2YWJsZShzdWJzY3JpYmUpIHtcbiAgICAgICAgdGhpcy5faXNTY2FsYXIgPSBmYWxzZTtcbiAgICAgICAgaWYgKHN1YnNjcmliZSkge1xuICAgICAgICAgICAgdGhpcy5fc3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgICAgICB9XG4gICAgfVxuICAgIE9ic2VydmFibGUucHJvdG90eXBlLmxpZnQgPSBmdW5jdGlvbiAob3BlcmF0b3IpIHtcbiAgICAgICAgdmFyIG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZSgpO1xuICAgICAgICBvYnNlcnZhYmxlLnNvdXJjZSA9IHRoaXM7XG4gICAgICAgIG9ic2VydmFibGUub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAob2JzZXJ2ZXJPck5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICB2YXIgb3BlcmF0b3IgPSB0aGlzLm9wZXJhdG9yO1xuICAgICAgICB2YXIgc2luayA9IHRvU3Vic2NyaWJlcl8xLnRvU3Vic2NyaWJlcihvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKTtcbiAgICAgICAgaWYgKG9wZXJhdG9yKSB7XG4gICAgICAgICAgICBzaW5rLmFkZChvcGVyYXRvci5jYWxsKHNpbmssIHRoaXMuc291cmNlKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaW5rLmFkZCh0aGlzLnNvdXJjZSB8fCAoY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcgJiYgIXNpbmsuc3luY0Vycm9yVGhyb3dhYmxlKSA/XG4gICAgICAgICAgICAgICAgdGhpcy5fc3Vic2NyaWJlKHNpbmspIDpcbiAgICAgICAgICAgICAgICB0aGlzLl90cnlTdWJzY3JpYmUoc2luaykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgaWYgKHNpbmsuc3luY0Vycm9yVGhyb3dhYmxlKSB7XG4gICAgICAgICAgICAgICAgc2luay5zeW5jRXJyb3JUaHJvd2FibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoc2luay5zeW5jRXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgc2luay5zeW5jRXJyb3JWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNpbms7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5fdHJ5U3Vic2NyaWJlID0gZnVuY3Rpb24gKHNpbmspIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdWJzY3JpYmUoc2luayk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgaWYgKGNvbmZpZ18xLmNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICAgICAgc2luay5zeW5jRXJyb3JUaHJvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNpbmsuc3luY0Vycm9yVmFsdWUgPSBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuUmVwb3J0RXJyb3JfMS5jYW5SZXBvcnRFcnJvcihzaW5rKSkge1xuICAgICAgICAgICAgICAgIHNpbmsuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKG5leHQsIHByb21pc2VDdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHByb21pc2VDdG9yID0gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpO1xuICAgICAgICByZXR1cm4gbmV3IHByb21pc2VDdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBfdGhpcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgcmVqZWN0LCByZXNvbHZlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IHRoaXMuc291cmNlO1xuICAgICAgICByZXR1cm4gc291cmNlICYmIHNvdXJjZS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZVtvYnNlcnZhYmxlXzEub2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wZXJhdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG9wZXJhdGlvbnNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3BlcmF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwaXBlXzEucGlwZUZyb21BcnJheShvcGVyYXRpb25zKSh0aGlzKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnRvUHJvbWlzZSA9IGZ1bmN0aW9uIChwcm9taXNlQ3Rvcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBwcm9taXNlQ3RvciA9IGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yKTtcbiAgICAgICAgcmV0dXJuIG5ldyBwcm9taXNlQ3RvcihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgICAgICBfdGhpcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHZhbHVlID0geDsgfSwgZnVuY3Rpb24gKGVycikgeyByZXR1cm4gcmVqZWN0KGVycik7IH0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc29sdmUodmFsdWUpOyB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLmNyZWF0ZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKHN1YnNjcmliZSk7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZTtcbn0oKSk7XG5leHBvcnRzLk9ic2VydmFibGUgPSBPYnNlcnZhYmxlO1xuZnVuY3Rpb24gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpIHtcbiAgICBpZiAoIXByb21pc2VDdG9yKSB7XG4gICAgICAgIHByb21pc2VDdG9yID0gY29uZmlnXzEuY29uZmlnLlByb21pc2UgfHwgUHJvbWlzZTtcbiAgICB9XG4gICAgaWYgKCFwcm9taXNlQ3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIFByb21pc2UgaW1wbCBmb3VuZCcpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZUN0b3I7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PYnNlcnZhYmxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbmZpZ18xID0gcmVxdWlyZShcIi4vY29uZmlnXCIpO1xudmFyIGhvc3RSZXBvcnRFcnJvcl8xID0gcmVxdWlyZShcIi4vdXRpbC9ob3N0UmVwb3J0RXJyb3JcIik7XG5leHBvcnRzLmVtcHR5ID0ge1xuICAgIGNsb3NlZDogdHJ1ZSxcbiAgICBuZXh0OiBmdW5jdGlvbiAodmFsdWUpIHsgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGhvc3RSZXBvcnRFcnJvcl8xLmhvc3RSZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkgeyB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T2JzZXJ2ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuL1N1YnNjcmliZXJcIik7XG52YXIgT3V0ZXJTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoT3V0ZXJTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE91dGVyU3Vic2NyaWJlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPdXRlclN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeU5leHQgPSBmdW5jdGlvbiAob3V0ZXJWYWx1ZSwgaW5uZXJWYWx1ZSwgb3V0ZXJJbmRleCwgaW5uZXJJbmRleCwgaW5uZXJTdWIpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KGlubmVyVmFsdWUpO1xuICAgIH07XG4gICAgT3V0ZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlFcnJvciA9IGZ1bmN0aW9uIChlcnJvciwgaW5uZXJTdWIpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnJvcik7XG4gICAgfTtcbiAgICBPdXRlclN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeUNvbXBsZXRlID0gZnVuY3Rpb24gKGlubmVyU3ViKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICB9O1xuICAgIHJldHVybiBPdXRlclN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG5leHBvcnRzLk91dGVyU3Vic2NyaWJlciA9IE91dGVyU3Vic2NyaWJlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU91dGVyU3Vic2NyaWJlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTY2hlZHVsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNjaGVkdWxlcihTY2hlZHVsZXJBY3Rpb24sIG5vdykge1xuICAgICAgICBpZiAobm93ID09PSB2b2lkIDApIHsgbm93ID0gU2NoZWR1bGVyLm5vdzsgfVxuICAgICAgICB0aGlzLlNjaGVkdWxlckFjdGlvbiA9IFNjaGVkdWxlckFjdGlvbjtcbiAgICAgICAgdGhpcy5ub3cgPSBub3c7XG4gICAgfVxuICAgIFNjaGVkdWxlci5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAod29yaywgZGVsYXksIHN0YXRlKSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICByZXR1cm4gbmV3IHRoaXMuU2NoZWR1bGVyQWN0aW9uKHRoaXMsIHdvcmspLnNjaGVkdWxlKHN0YXRlLCBkZWxheSk7XG4gICAgfTtcbiAgICBTY2hlZHVsZXIubm93ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gRGF0ZS5ub3coKTsgfTtcbiAgICByZXR1cm4gU2NoZWR1bGVyO1xufSgpKTtcbmV4cG9ydHMuU2NoZWR1bGVyID0gU2NoZWR1bGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2NoZWR1bGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi9PYnNlcnZhYmxlXCIpO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuL1N1YnNjcmliZXJcIik7XG52YXIgU3Vic2NyaXB0aW9uXzEgPSByZXF1aXJlKFwiLi9TdWJzY3JpcHRpb25cIik7XG52YXIgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JfMSA9IHJlcXVpcmUoXCIuL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JcIik7XG52YXIgU3ViamVjdFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZShcIi4vU3ViamVjdFN1YnNjcmlwdGlvblwiKTtcbnZhciByeFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcm5hbC9zeW1ib2wvcnhTdWJzY3JpYmVyXCIpO1xudmFyIFN1YmplY3RTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3ViamVjdFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU3ViamVjdFN1YnNjcmliZXIoZGVzdGluYXRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFN1YmplY3RTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xuZXhwb3J0cy5TdWJqZWN0U3Vic2NyaWJlciA9IFN1YmplY3RTdWJzY3JpYmVyO1xudmFyIFN1YmplY3QgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTdWJqZWN0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1YmplY3QoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm9ic2VydmVycyA9IFtdO1xuICAgICAgICBfdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnRocm93bkVycm9yID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTdWJqZWN0LnByb3RvdHlwZVtyeFN1YnNjcmliZXJfMS5yeFN1YnNjcmliZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFN1YmplY3RTdWJzY3JpYmVyKHRoaXMpO1xuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUubGlmdCA9IGZ1bmN0aW9uIChvcGVyYXRvcikge1xuICAgICAgICB2YXIgc3ViamVjdCA9IG5ldyBBbm9ueW1vdXNTdWJqZWN0KHRoaXMsIHRoaXMpO1xuICAgICAgICBzdWJqZWN0Lm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHJldHVybiBzdWJqZWN0O1xuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcl8xLk9iamVjdFVuc3Vic2NyaWJlZEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzO1xuICAgICAgICAgICAgdmFyIGxlbiA9IG9ic2VydmVycy5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgY29weSA9IG9ic2VydmVycy5zbGljZSgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGNvcHlbaV0ubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcl8xLk9iamVjdFVuc3Vic2NyaWJlZEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMudGhyb3duRXJyb3IgPSBlcnI7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzO1xuICAgICAgICB2YXIgbGVuID0gb2JzZXJ2ZXJzLmxlbmd0aDtcbiAgICAgICAgdmFyIGNvcHkgPSBvYnNlcnZlcnMuc2xpY2UoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY29weVtpXS5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCA9IDA7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JfMS5PYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzO1xuICAgICAgICB2YXIgbGVuID0gb2JzZXJ2ZXJzLmxlbmd0aDtcbiAgICAgICAgdmFyIGNvcHkgPSBvYnNlcnZlcnMuc2xpY2UoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY29weVtpXS5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCA9IDA7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gbnVsbDtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLl90cnlTdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcl8xLk9iamVjdFVuc3Vic2NyaWJlZEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5fdHJ5U3Vic2NyaWJlLmNhbGwodGhpcywgc3Vic2NyaWJlcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLl9zdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcl8xLk9iamVjdFVuc3Vic2NyaWJlZEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5oYXNFcnJvcikge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcih0aGlzLnRocm93bkVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24uRU1QVFk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIHJldHVybiBTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24uRU1QVFk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdWJqZWN0U3Vic2NyaXB0aW9uXzEuU3ViamVjdFN1YnNjcmlwdGlvbih0aGlzLCBzdWJzY3JpYmVyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUuYXNPYnNlcnZhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZSgpO1xuICAgICAgICBvYnNlcnZhYmxlLnNvdXJjZSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH07XG4gICAgU3ViamVjdC5jcmVhdGUgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gbmV3IEFub255bW91c1N1YmplY3QoZGVzdGluYXRpb24sIHNvdXJjZSk7XG4gICAgfTtcbiAgICByZXR1cm4gU3ViamVjdDtcbn0oT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUpKTtcbmV4cG9ydHMuU3ViamVjdCA9IFN1YmplY3Q7XG52YXIgQW5vbnltb3VzU3ViamVjdCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFub255bW91c1N1YmplY3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQW5vbnltb3VzU3ViamVjdChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG4gICAgICAgIF90aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbiAmJiBkZXN0aW5hdGlvbi5uZXh0KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQW5vbnltb3VzU3ViamVjdC5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbiAmJiBkZXN0aW5hdGlvbi5lcnJvcikge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRlc3RpbmF0aW9uID0gdGhpcy5kZXN0aW5hdGlvbjtcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uICYmIGRlc3RpbmF0aW9uLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFub255bW91c1N1YmplY3QucHJvdG90eXBlLl9zdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgc291cmNlID0gdGhpcy5zb3VyY2U7XG4gICAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gU3Vic2NyaXB0aW9uXzEuU3Vic2NyaXB0aW9uLkVNUFRZO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQW5vbnltb3VzU3ViamVjdDtcbn0oU3ViamVjdCkpO1xuZXhwb3J0cy5Bbm9ueW1vdXNTdWJqZWN0ID0gQW5vbnltb3VzU3ViamVjdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1YmplY3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZShcIi4vU3Vic2NyaXB0aW9uXCIpO1xudmFyIFN1YmplY3RTdWJzY3JpcHRpb24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTdWJqZWN0U3Vic2NyaXB0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1YmplY3RTdWJzY3JpcHRpb24oc3ViamVjdCwgc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdWJqZWN0ID0gc3ViamVjdDtcbiAgICAgICAgX3RoaXMuc3Vic2NyaWJlciA9IHN1YnNjcmliZXI7XG4gICAgICAgIF90aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFN1YmplY3RTdWJzY3JpcHRpb24ucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHZhciBzdWJqZWN0ID0gdGhpcy5zdWJqZWN0O1xuICAgICAgICB2YXIgb2JzZXJ2ZXJzID0gc3ViamVjdC5vYnNlcnZlcnM7XG4gICAgICAgIHRoaXMuc3ViamVjdCA9IG51bGw7XG4gICAgICAgIGlmICghb2JzZXJ2ZXJzIHx8IG9ic2VydmVycy5sZW5ndGggPT09IDAgfHwgc3ViamVjdC5pc1N0b3BwZWQgfHwgc3ViamVjdC5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3Vic2NyaWJlckluZGV4ID0gb2JzZXJ2ZXJzLmluZGV4T2YodGhpcy5zdWJzY3JpYmVyKTtcbiAgICAgICAgaWYgKHN1YnNjcmliZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIG9ic2VydmVycy5zcGxpY2Uoc3Vic2NyaWJlckluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFN1YmplY3RTdWJzY3JpcHRpb247XG59KFN1YnNjcmlwdGlvbl8xLlN1YnNjcmlwdGlvbikpO1xuZXhwb3J0cy5TdWJqZWN0U3Vic2NyaXB0aW9uID0gU3ViamVjdFN1YnNjcmlwdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1YmplY3RTdWJzY3JpcHRpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGlzRnVuY3Rpb25fMSA9IHJlcXVpcmUoXCIuL3V0aWwvaXNGdW5jdGlvblwiKTtcbnZhciBPYnNlcnZlcl8xID0gcmVxdWlyZShcIi4vT2JzZXJ2ZXJcIik7XG52YXIgU3Vic2NyaXB0aW9uXzEgPSByZXF1aXJlKFwiLi9TdWJzY3JpcHRpb25cIik7XG52YXIgcnhTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJuYWwvc3ltYm9sL3J4U3Vic2NyaWJlclwiKTtcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuL2NvbmZpZ1wiKTtcbnZhciBob3N0UmVwb3J0RXJyb3JfMSA9IHJlcXVpcmUoXCIuL3V0aWwvaG9zdFJlcG9ydEVycm9yXCIpO1xudmFyIFN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1YnNjcmliZXIoZGVzdGluYXRpb25Pck5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zeW5jRXJyb3JWYWx1ZSA9IG51bGw7XG4gICAgICAgIF90aGlzLnN5bmNFcnJvclRocm93biA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5zeW5jRXJyb3JUaHJvd2FibGUgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gT2JzZXJ2ZXJfMS5lbXB0eTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpZiAoIWRlc3RpbmF0aW9uT3JOZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gT2JzZXJ2ZXJfMS5lbXB0eTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGVzdGluYXRpb25Pck5leHQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbk9yTmV4dCBpbnN0YW5jZW9mIFN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnN5bmNFcnJvclRocm93YWJsZSA9IGRlc3RpbmF0aW9uT3JOZXh0LnN5bmNFcnJvclRocm93YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb25Pck5leHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbk9yTmV4dC5hZGQoX3RoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3luY0Vycm9yVGhyb3dhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gbmV3IFNhZmVTdWJzY3JpYmVyKF90aGlzLCBkZXN0aW5hdGlvbk9yTmV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBfdGhpcy5zeW5jRXJyb3JUaHJvd2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gbmV3IFNhZmVTdWJzY3JpYmVyKF90aGlzLCBkZXN0aW5hdGlvbk9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFN1YnNjcmliZXIucHJvdG90eXBlW3J4U3Vic2NyaWJlcl8xLnJ4U3Vic2NyaWJlcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuICAgIFN1YnNjcmliZXIuY3JlYXRlID0gZnVuY3Rpb24gKG5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICB2YXIgc3Vic2NyaWJlciA9IG5ldyBTdWJzY3JpYmVyKG5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG4gICAgICAgIHN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3dhYmxlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVyO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9uZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX2Vycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fdW5zdWJzY3JpYmVBbmRSZWN5Y2xlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3BhcmVudE9yUGFyZW50cyA9IHRoaXMuX3BhcmVudE9yUGFyZW50cztcbiAgICAgICAgdGhpcy5fcGFyZW50T3JQYXJlbnRzID0gbnVsbDtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9wYXJlbnRPclBhcmVudHMgPSBfcGFyZW50T3JQYXJlbnRzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBTdWJzY3JpYmVyO1xufShTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24pKTtcbmV4cG9ydHMuU3Vic2NyaWJlciA9IFN1YnNjcmliZXI7XG52YXIgU2FmZVN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTYWZlU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTYWZlU3Vic2NyaWJlcihfcGFyZW50U3Vic2NyaWJlciwgb2JzZXJ2ZXJPck5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fcGFyZW50U3Vic2NyaWJlciA9IF9wYXJlbnRTdWJzY3JpYmVyO1xuICAgICAgICB2YXIgbmV4dDtcbiAgICAgICAgdmFyIGNvbnRleHQgPSBfdGhpcztcbiAgICAgICAgaWYgKGlzRnVuY3Rpb25fMS5pc0Z1bmN0aW9uKG9ic2VydmVyT3JOZXh0KSkge1xuICAgICAgICAgICAgbmV4dCA9IG9ic2VydmVyT3JOZXh0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9ic2VydmVyT3JOZXh0KSB7XG4gICAgICAgICAgICBuZXh0ID0gb2JzZXJ2ZXJPck5leHQubmV4dDtcbiAgICAgICAgICAgIGVycm9yID0gb2JzZXJ2ZXJPck5leHQuZXJyb3I7XG4gICAgICAgICAgICBjb21wbGV0ZSA9IG9ic2VydmVyT3JOZXh0LmNvbXBsZXRlO1xuICAgICAgICAgICAgaWYgKG9ic2VydmVyT3JOZXh0ICE9PSBPYnNlcnZlcl8xLmVtcHR5KSB7XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IE9iamVjdC5jcmVhdGUob2JzZXJ2ZXJPck5leHQpO1xuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uXzEuaXNGdW5jdGlvbihjb250ZXh0LnVuc3Vic2NyaWJlKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGQoY29udGV4dC51bnN1YnNjcmliZS5iaW5kKGNvbnRleHQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGV4dC51bnN1YnNjcmliZSA9IF90aGlzLnVuc3Vic2NyaWJlLmJpbmQoX3RoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF90aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgX3RoaXMuX25leHQgPSBuZXh0O1xuICAgICAgICBfdGhpcy5fZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgX3RoaXMuX2NvbXBsZXRlID0gY29tcGxldGU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCAmJiB0aGlzLl9uZXh0KSB7XG4gICAgICAgICAgICB2YXIgX3BhcmVudFN1YnNjcmliZXIgPSB0aGlzLl9wYXJlbnRTdWJzY3JpYmVyO1xuICAgICAgICAgICAgaWYgKCFjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyB8fCAhX3BhcmVudFN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3dhYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yVW5zdWIodGhpcy5fbmV4dCwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fX3RyeU9yU2V0RXJyb3IoX3BhcmVudFN1YnNjcmliZXIsIHRoaXMuX25leHQsIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB2YXIgX3BhcmVudFN1YnNjcmliZXIgPSB0aGlzLl9wYXJlbnRTdWJzY3JpYmVyO1xuICAgICAgICAgICAgdmFyIHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcgPSBjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZztcbiAgICAgICAgICAgIGlmICh0aGlzLl9lcnJvcikge1xuICAgICAgICAgICAgICAgIGlmICghdXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyB8fCAhX3BhcmVudFN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3dhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX190cnlPclVuc3ViKHRoaXMuX2Vycm9yLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fdHJ5T3JTZXRFcnJvcihfcGFyZW50U3Vic2NyaWJlciwgdGhpcy5fZXJyb3IsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghX3BhcmVudFN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3dhYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaG9zdFJlcG9ydEVycm9yXzEuaG9zdFJlcG9ydEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgICAgICAgICBfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JWYWx1ZSA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgX3BhcmVudFN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3RSZXBvcnRFcnJvcl8xLmhvc3RSZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdmFyIF9wYXJlbnRTdWJzY3JpYmVyID0gdGhpcy5fcGFyZW50U3Vic2NyaWJlcjtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHZhciB3cmFwcGVkQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fY29tcGxldGUuY2FsbChfdGhpcy5fY29udGV4dCk7IH07XG4gICAgICAgICAgICAgICAgaWYgKCFjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyB8fCAhX3BhcmVudFN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3dhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX190cnlPclVuc3ViKHdyYXBwZWRDb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX190cnlPclNldEVycm9yKF9wYXJlbnRTdWJzY3JpYmVyLCB3cmFwcGVkQ29tcGxldGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTYWZlU3Vic2NyaWJlci5wcm90b3R5cGUuX190cnlPclVuc3ViID0gZnVuY3Rpb24gKGZuLCB2YWx1ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLl9jb250ZXh0LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ18xLmNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaG9zdFJlcG9ydEVycm9yXzEuaG9zdFJlcG9ydEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5fX3RyeU9yU2V0RXJyb3IgPSBmdW5jdGlvbiAocGFyZW50LCBmbiwgdmFsdWUpIHtcbiAgICAgICAgaWYgKCFjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdiYWQgY2FsbCcpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMuX2NvbnRleHQsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQuc3luY0Vycm9yVmFsdWUgPSBlcnI7XG4gICAgICAgICAgICAgICAgcGFyZW50LnN5bmNFcnJvclRocm93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBob3N0UmVwb3J0RXJyb3JfMS5ob3N0UmVwb3J0RXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBTYWZlU3Vic2NyaWJlci5wcm90b3R5cGUuX3Vuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3BhcmVudFN1YnNjcmliZXIgPSB0aGlzLl9wYXJlbnRTdWJzY3JpYmVyO1xuICAgICAgICB0aGlzLl9jb250ZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fcGFyZW50U3Vic2NyaWJlciA9IG51bGw7XG4gICAgICAgIF9wYXJlbnRTdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gU2FmZVN1YnNjcmliZXI7XG59KFN1YnNjcmliZXIpKTtcbmV4cG9ydHMuU2FmZVN1YnNjcmliZXIgPSBTYWZlU3Vic2NyaWJlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1YnNjcmliZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaXNBcnJheV8xID0gcmVxdWlyZShcIi4vdXRpbC9pc0FycmF5XCIpO1xudmFyIGlzT2JqZWN0XzEgPSByZXF1aXJlKFwiLi91dGlsL2lzT2JqZWN0XCIpO1xudmFyIGlzRnVuY3Rpb25fMSA9IHJlcXVpcmUoXCIuL3V0aWwvaXNGdW5jdGlvblwiKTtcbnZhciBVbnN1YnNjcmlwdGlvbkVycm9yXzEgPSByZXF1aXJlKFwiLi91dGlsL1Vuc3Vic2NyaXB0aW9uRXJyb3JcIik7XG52YXIgU3Vic2NyaXB0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdWJzY3JpcHRpb24odW5zdWJzY3JpYmUpIHtcbiAgICAgICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcGFyZW50T3JQYXJlbnRzID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucyA9IG51bGw7XG4gICAgICAgIGlmICh1bnN1YnNjcmliZSkge1xuICAgICAgICAgICAgdGhpcy5fdW5zdWJzY3JpYmUgPSB1bnN1YnNjcmliZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZXJyb3JzO1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2EgPSB0aGlzLCBfcGFyZW50T3JQYXJlbnRzID0gX2EuX3BhcmVudE9yUGFyZW50cywgX3Vuc3Vic2NyaWJlID0gX2EuX3Vuc3Vic2NyaWJlLCBfc3Vic2NyaXB0aW9ucyA9IF9hLl9zdWJzY3JpcHRpb25zO1xuICAgICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3BhcmVudE9yUGFyZW50cyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBudWxsO1xuICAgICAgICBpZiAoX3BhcmVudE9yUGFyZW50cyBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgX3BhcmVudE9yUGFyZW50cy5yZW1vdmUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX3BhcmVudE9yUGFyZW50cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IF9wYXJlbnRPclBhcmVudHMubGVuZ3RoOyArK2luZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudF8xID0gX3BhcmVudE9yUGFyZW50c1tpbmRleF07XG4gICAgICAgICAgICAgICAgcGFyZW50XzEucmVtb3ZlKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uXzEuaXNGdW5jdGlvbihfdW5zdWJzY3JpYmUpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIF91bnN1YnNjcmliZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBlcnJvcnMgPSBlIGluc3RhbmNlb2YgVW5zdWJzY3JpcHRpb25FcnJvcl8xLlVuc3Vic2NyaXB0aW9uRXJyb3IgPyBmbGF0dGVuVW5zdWJzY3JpcHRpb25FcnJvcnMoZS5lcnJvcnMpIDogW2VdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpc0FycmF5XzEuaXNBcnJheShfc3Vic2NyaXB0aW9ucykpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IC0xO1xuICAgICAgICAgICAgdmFyIGxlbiA9IF9zdWJzY3JpcHRpb25zLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1YiA9IF9zdWJzY3JpcHRpb25zW2luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoaXNPYmplY3RfMS5pc09iamVjdChzdWIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzID0gZXJyb3JzIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBVbnN1YnNjcmlwdGlvbkVycm9yXzEuVW5zdWJzY3JpcHRpb25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQoZmxhdHRlblVuc3Vic2NyaXB0aW9uRXJyb3JzKGUuZXJyb3JzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVW5zdWJzY3JpcHRpb25FcnJvcl8xLlVuc3Vic2NyaXB0aW9uRXJyb3IoZXJyb3JzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodGVhcmRvd24pIHtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRlYXJkb3duO1xuICAgICAgICBpZiAoIXRlYXJkb3duKSB7XG4gICAgICAgICAgICByZXR1cm4gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHRlYXJkb3duKSB7XG4gICAgICAgICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbih0ZWFyZG93bik7XG4gICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24gPT09IHRoaXMgfHwgc3Vic2NyaXB0aW9uLmNsb3NlZCB8fCB0eXBlb2Ygc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghKHN1YnNjcmlwdGlvbiBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRtcCA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24uX3N1YnNjcmlwdGlvbnMgPSBbdG1wXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnJlY29nbml6ZWQgdGVhcmRvd24gJyArIHRlYXJkb3duICsgJyBhZGRlZCB0byBTdWJzY3JpcHRpb24uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9wYXJlbnRPclBhcmVudHMgPSBzdWJzY3JpcHRpb24uX3BhcmVudE9yUGFyZW50cztcbiAgICAgICAgaWYgKF9wYXJlbnRPclBhcmVudHMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5fcGFyZW50T3JQYXJlbnRzID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfcGFyZW50T3JQYXJlbnRzIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBpZiAoX3BhcmVudE9yUGFyZW50cyA9PT0gdGhpcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24uX3BhcmVudE9yUGFyZW50cyA9IFtfcGFyZW50T3JQYXJlbnRzLCB0aGlzXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfcGFyZW50T3JQYXJlbnRzLmluZGV4T2YodGhpcykgPT09IC0xKSB7XG4gICAgICAgICAgICBfcGFyZW50T3JQYXJlbnRzLnB1c2godGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb25zID0gdGhpcy5fc3Vic2NyaXB0aW9ucztcbiAgICAgICAgaWYgKHN1YnNjcmlwdGlvbnMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBbc3Vic2NyaXB0aW9uXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbnMucHVzaChzdWJzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbnMgPSB0aGlzLl9zdWJzY3JpcHRpb25zO1xuICAgICAgICBpZiAoc3Vic2NyaXB0aW9ucykge1xuICAgICAgICAgICAgdmFyIHN1YnNjcmlwdGlvbkluZGV4ID0gc3Vic2NyaXB0aW9ucy5pbmRleE9mKHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9ucy5zcGxpY2Uoc3Vic2NyaXB0aW9uSW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24uRU1QVFkgPSAoZnVuY3Rpb24gKGVtcHR5KSB7XG4gICAgICAgIGVtcHR5LmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBlbXB0eTtcbiAgICB9KG5ldyBTdWJzY3JpcHRpb24oKSkpO1xuICAgIHJldHVybiBTdWJzY3JpcHRpb247XG59KCkpO1xuZXhwb3J0cy5TdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb247XG5mdW5jdGlvbiBmbGF0dGVuVW5zdWJzY3JpcHRpb25FcnJvcnMoZXJyb3JzKSB7XG4gICAgcmV0dXJuIGVycm9ycy5yZWR1Y2UoZnVuY3Rpb24gKGVycnMsIGVycikgeyByZXR1cm4gZXJycy5jb25jYXQoKGVyciBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3JfMS5VbnN1YnNjcmlwdGlvbkVycm9yKSA/IGVyci5lcnJvcnMgOiBlcnIpOyB9LCBbXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJzY3JpcHRpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgX2VuYWJsZV9zdXBlcl9ncm9zc19tb2RlX3RoYXRfd2lsbF9jYXVzZV9iYWRfdGhpbmdzID0gZmFsc2U7XG5leHBvcnRzLmNvbmZpZyA9IHtcbiAgICBQcm9taXNlOiB1bmRlZmluZWQsXG4gICAgc2V0IHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignREVQUkVDQVRFRCEgUnhKUyB3YXMgc2V0IHRvIHVzZSBkZXByZWNhdGVkIHN5bmNocm9ub3VzIGVycm9yIGhhbmRsaW5nIGJlaGF2aW9yIGJ5IGNvZGUgYXQ6IFxcbicgKyBlcnJvci5zdGFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX2VuYWJsZV9zdXBlcl9ncm9zc19tb2RlX3RoYXRfd2lsbF9jYXVzZV9iYWRfdGhpbmdzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUnhKUzogQmFjayB0byBhIGJldHRlciBlcnJvciBiZWhhdmlvci4gVGhhbmsgeW91LiA8MycpO1xuICAgICAgICB9XG4gICAgICAgIF9lbmFibGVfc3VwZXJfZ3Jvc3NfbW9kZV90aGF0X3dpbGxfY2F1c2VfYmFkX3RoaW5ncyA9IHZhbHVlO1xuICAgIH0sXG4gICAgZ2V0IHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcoKSB7XG4gICAgICAgIHJldHVybiBfZW5hYmxlX3N1cGVyX2dyb3NzX21vZGVfdGhhdF93aWxsX2NhdXNlX2JhZF90aGluZ3M7XG4gICAgfSxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25maWcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGlzU2NoZWR1bGVyXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9pc1NjaGVkdWxlclwiKTtcbnZhciBpc0FycmF5XzEgPSByZXF1aXJlKFwiLi4vdXRpbC9pc0FycmF5XCIpO1xudmFyIE91dGVyU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL091dGVyU3Vic2NyaWJlclwiKTtcbnZhciBzdWJzY3JpYmVUb1Jlc3VsdF8xID0gcmVxdWlyZShcIi4uL3V0aWwvc3Vic2NyaWJlVG9SZXN1bHRcIik7XG52YXIgZnJvbUFycmF5XzEgPSByZXF1aXJlKFwiLi9mcm9tQXJyYXlcIik7XG52YXIgTk9ORSA9IHt9O1xuZnVuY3Rpb24gY29tYmluZUxhdGVzdCgpIHtcbiAgICB2YXIgb2JzZXJ2YWJsZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBvYnNlcnZhYmxlc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0U2VsZWN0b3IgPSBudWxsO1xuICAgIHZhciBzY2hlZHVsZXIgPSBudWxsO1xuICAgIGlmIChpc1NjaGVkdWxlcl8xLmlzU2NoZWR1bGVyKG9ic2VydmFibGVzW29ic2VydmFibGVzLmxlbmd0aCAtIDFdKSkge1xuICAgICAgICBzY2hlZHVsZXIgPSBvYnNlcnZhYmxlcy5wb3AoKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYnNlcnZhYmxlc1tvYnNlcnZhYmxlcy5sZW5ndGggLSAxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXN1bHRTZWxlY3RvciA9IG9ic2VydmFibGVzLnBvcCgpO1xuICAgIH1cbiAgICBpZiAob2JzZXJ2YWJsZXMubGVuZ3RoID09PSAxICYmIGlzQXJyYXlfMS5pc0FycmF5KG9ic2VydmFibGVzWzBdKSkge1xuICAgICAgICBvYnNlcnZhYmxlcyA9IG9ic2VydmFibGVzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gZnJvbUFycmF5XzEuZnJvbUFycmF5KG9ic2VydmFibGVzLCBzY2hlZHVsZXIpLmxpZnQobmV3IENvbWJpbmVMYXRlc3RPcGVyYXRvcihyZXN1bHRTZWxlY3RvcikpO1xufVxuZXhwb3J0cy5jb21iaW5lTGF0ZXN0ID0gY29tYmluZUxhdGVzdDtcbnZhciBDb21iaW5lTGF0ZXN0T3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbWJpbmVMYXRlc3RPcGVyYXRvcihyZXN1bHRTZWxlY3Rvcikge1xuICAgICAgICB0aGlzLnJlc3VsdFNlbGVjdG9yID0gcmVzdWx0U2VsZWN0b3I7XG4gICAgfVxuICAgIENvbWJpbmVMYXRlc3RPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMucmVzdWx0U2VsZWN0b3IpKTtcbiAgICB9O1xuICAgIHJldHVybiBDb21iaW5lTGF0ZXN0T3BlcmF0b3I7XG59KCkpO1xuZXhwb3J0cy5Db21iaW5lTGF0ZXN0T3BlcmF0b3IgPSBDb21iaW5lTGF0ZXN0T3BlcmF0b3I7XG52YXIgQ29tYmluZUxhdGVzdFN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb21iaW5lTGF0ZXN0U3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb21iaW5lTGF0ZXN0U3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgcmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnJlc3VsdFNlbGVjdG9yID0gcmVzdWx0U2VsZWN0b3I7XG4gICAgICAgIF90aGlzLmFjdGl2ZSA9IDA7XG4gICAgICAgIF90aGlzLnZhbHVlcyA9IFtdO1xuICAgICAgICBfdGhpcy5vYnNlcnZhYmxlcyA9IFtdO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uIChvYnNlcnZhYmxlKSB7XG4gICAgICAgIHRoaXMudmFsdWVzLnB1c2goTk9ORSk7XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZXMucHVzaChvYnNlcnZhYmxlKTtcbiAgICB9O1xuICAgIENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvYnNlcnZhYmxlcyA9IHRoaXMub2JzZXJ2YWJsZXM7XG4gICAgICAgIHZhciBsZW4gPSBvYnNlcnZhYmxlcy5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gbGVuO1xuICAgICAgICAgICAgdGhpcy50b1Jlc3BvbmQgPSBsZW47XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9ic2VydmFibGUgPSBvYnNlcnZhYmxlc1tpXTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChzdWJzY3JpYmVUb1Jlc3VsdF8xLnN1YnNjcmliZVRvUmVzdWx0KHRoaXMsIG9ic2VydmFibGUsIG9ic2VydmFibGUsIGkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29tYmluZUxhdGVzdFN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeUNvbXBsZXRlID0gZnVuY3Rpb24gKHVudXNlZCkge1xuICAgICAgICBpZiAoKHRoaXMuYWN0aXZlIC09IDEpID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlOZXh0ID0gZnVuY3Rpb24gKG91dGVyVmFsdWUsIGlubmVyVmFsdWUsIG91dGVySW5kZXgsIGlubmVySW5kZXgsIGlubmVyU3ViKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICAgICAgdmFyIG9sZFZhbCA9IHZhbHVlc1tvdXRlckluZGV4XTtcbiAgICAgICAgdmFyIHRvUmVzcG9uZCA9ICF0aGlzLnRvUmVzcG9uZFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IG9sZFZhbCA9PT0gTk9ORSA/IC0tdGhpcy50b1Jlc3BvbmQgOiB0aGlzLnRvUmVzcG9uZDtcbiAgICAgICAgdmFsdWVzW291dGVySW5kZXhdID0gaW5uZXJWYWx1ZTtcbiAgICAgICAgaWYgKHRvUmVzcG9uZCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90cnlSZXN1bHRTZWxlY3Rvcih2YWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlcy5zbGljZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29tYmluZUxhdGVzdFN1YnNjcmliZXIucHJvdG90eXBlLl90cnlSZXN1bHRTZWxlY3RvciA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucmVzdWx0U2VsZWN0b3IuYXBwbHkodGhpcywgdmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHJlc3VsdCk7XG4gICAgfTtcbiAgICByZXR1cm4gQ29tYmluZUxhdGVzdFN1YnNjcmliZXI7XG59KE91dGVyU3Vic2NyaWJlcl8xLk91dGVyU3Vic2NyaWJlcikpO1xuZXhwb3J0cy5Db21iaW5lTGF0ZXN0U3Vic2NyaWJlciA9IENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tYmluZUxhdGVzdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2YWJsZVwiKTtcbnZhciBzdWJzY3JpYmVUb18xID0gcmVxdWlyZShcIi4uL3V0aWwvc3Vic2NyaWJlVG9cIik7XG52YXIgc2NoZWR1bGVkXzEgPSByZXF1aXJlKFwiLi4vc2NoZWR1bGVkL3NjaGVkdWxlZFwiKTtcbmZ1bmN0aW9uIGZyb20oaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIGlmICghc2NoZWR1bGVyKSB7XG4gICAgICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZShzdWJzY3JpYmVUb18xLnN1YnNjcmliZVRvKGlucHV0KSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gc2NoZWR1bGVkXzEuc2NoZWR1bGVkKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgIH1cbn1cbmV4cG9ydHMuZnJvbSA9IGZyb207XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mcm9tLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuLi9PYnNlcnZhYmxlXCIpO1xudmFyIHN1YnNjcmliZVRvQXJyYXlfMSA9IHJlcXVpcmUoXCIuLi91dGlsL3N1YnNjcmliZVRvQXJyYXlcIik7XG52YXIgc2NoZWR1bGVBcnJheV8xID0gcmVxdWlyZShcIi4uL3NjaGVkdWxlZC9zY2hlZHVsZUFycmF5XCIpO1xuZnVuY3Rpb24gZnJvbUFycmF5KGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICBpZiAoIXNjaGVkdWxlcikge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKHN1YnNjcmliZVRvQXJyYXlfMS5zdWJzY3JpYmVUb0FycmF5KGlucHV0KSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gc2NoZWR1bGVBcnJheV8xLnNjaGVkdWxlQXJyYXkoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgfVxufVxuZXhwb3J0cy5mcm9tQXJyYXkgPSBmcm9tQXJyYXk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mcm9tQXJyYXkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpYmVyXCIpO1xudmFyIGFzeW5jXzEgPSByZXF1aXJlKFwiLi4vc2NoZWR1bGVyL2FzeW5jXCIpO1xuZnVuY3Rpb24gZGVib3VuY2VUaW1lKGR1ZVRpbWUsIHNjaGVkdWxlcikge1xuICAgIGlmIChzY2hlZHVsZXIgPT09IHZvaWQgMCkgeyBzY2hlZHVsZXIgPSBhc3luY18xLmFzeW5jOyB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzb3VyY2UpIHsgcmV0dXJuIHNvdXJjZS5saWZ0KG5ldyBEZWJvdW5jZVRpbWVPcGVyYXRvcihkdWVUaW1lLCBzY2hlZHVsZXIpKTsgfTtcbn1cbmV4cG9ydHMuZGVib3VuY2VUaW1lID0gZGVib3VuY2VUaW1lO1xudmFyIERlYm91bmNlVGltZU9wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEZWJvdW5jZVRpbWVPcGVyYXRvcihkdWVUaW1lLCBzY2hlZHVsZXIpIHtcbiAgICAgICAgdGhpcy5kdWVUaW1lID0gZHVlVGltZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgfVxuICAgIERlYm91bmNlVGltZU9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKHN1YnNjcmliZXIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShuZXcgRGVib3VuY2VUaW1lU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLmR1ZVRpbWUsIHRoaXMuc2NoZWR1bGVyKSk7XG4gICAgfTtcbiAgICByZXR1cm4gRGVib3VuY2VUaW1lT3BlcmF0b3I7XG59KCkpO1xudmFyIERlYm91bmNlVGltZVN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEZWJvdW5jZVRpbWVTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERlYm91bmNlVGltZVN1YnNjcmliZXIoZGVzdGluYXRpb24sIGR1ZVRpbWUsIHNjaGVkdWxlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZHVlVGltZSA9IGR1ZVRpbWU7XG4gICAgICAgIF90aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgICAgX3RoaXMuZGVib3VuY2VkU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgX3RoaXMubGFzdFZhbHVlID0gbnVsbDtcbiAgICAgICAgX3RoaXMuaGFzVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBEZWJvdW5jZVRpbWVTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNsZWFyRGVib3VuY2UoKTtcbiAgICAgICAgdGhpcy5sYXN0VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5oYXNWYWx1ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWRkKHRoaXMuZGVib3VuY2VkU3Vic2NyaXB0aW9uID0gdGhpcy5zY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2hOZXh0LCB0aGlzLmR1ZVRpbWUsIHRoaXMpKTtcbiAgICB9O1xuICAgIERlYm91bmNlVGltZVN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kZWJvdW5jZWROZXh0KCk7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICB9O1xuICAgIERlYm91bmNlVGltZVN1YnNjcmliZXIucHJvdG90eXBlLmRlYm91bmNlZE5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJEZWJvdW5jZSgpO1xuICAgICAgICBpZiAodGhpcy5oYXNWYWx1ZSkge1xuICAgICAgICAgICAgdmFyIGxhc3RWYWx1ZSA9IHRoaXMubGFzdFZhbHVlO1xuICAgICAgICAgICAgdGhpcy5sYXN0VmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5oYXNWYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KGxhc3RWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERlYm91bmNlVGltZVN1YnNjcmliZXIucHJvdG90eXBlLmNsZWFyRGVib3VuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkZWJvdW5jZWRTdWJzY3JpcHRpb24gPSB0aGlzLmRlYm91bmNlZFN1YnNjcmlwdGlvbjtcbiAgICAgICAgaWYgKGRlYm91bmNlZFN1YnNjcmlwdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUoZGVib3VuY2VkU3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGRlYm91bmNlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgdGhpcy5kZWJvdW5jZWRTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gRGVib3VuY2VUaW1lU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpKTtcbmZ1bmN0aW9uIGRpc3BhdGNoTmV4dChzdWJzY3JpYmVyKSB7XG4gICAgc3Vic2NyaWJlci5kZWJvdW5jZWROZXh0KCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWJvdW5jZVRpbWUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpYmVyXCIpO1xuZnVuY3Rpb24gZmlsdGVyKHByZWRpY2F0ZSwgdGhpc0FyZykge1xuICAgIHJldHVybiBmdW5jdGlvbiBmaWx0ZXJPcGVyYXRvckZ1bmN0aW9uKHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLmxpZnQobmV3IEZpbHRlck9wZXJhdG9yKHByZWRpY2F0ZSwgdGhpc0FyZykpO1xuICAgIH07XG59XG5leHBvcnRzLmZpbHRlciA9IGZpbHRlcjtcbnZhciBGaWx0ZXJPcGVyYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRmlsdGVyT3BlcmF0b3IocHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gICAgICAgIHRoaXMucHJlZGljYXRlID0gcHJlZGljYXRlO1xuICAgICAgICB0aGlzLnRoaXNBcmcgPSB0aGlzQXJnO1xuICAgIH1cbiAgICBGaWx0ZXJPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IEZpbHRlclN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5wcmVkaWNhdGUsIHRoaXMudGhpc0FyZykpO1xuICAgIH07XG4gICAgcmV0dXJuIEZpbHRlck9wZXJhdG9yO1xufSgpKTtcbnZhciBGaWx0ZXJTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRmlsdGVyU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGaWx0ZXJTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBwcmVkaWNhdGUsIHRoaXNBcmcpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnByZWRpY2F0ZSA9IHByZWRpY2F0ZTtcbiAgICAgICAgX3RoaXMudGhpc0FyZyA9IHRoaXNBcmc7XG4gICAgICAgIF90aGlzLmNvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBGaWx0ZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5wcmVkaWNhdGUuY2FsbCh0aGlzLnRoaXNBcmcsIHZhbHVlLCB0aGlzLmNvdW50KyspO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gRmlsdGVyU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZpbHRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmliZXJcIik7XG5mdW5jdGlvbiBtYXAocHJvamVjdCwgdGhpc0FyZykge1xuICAgIHJldHVybiBmdW5jdGlvbiBtYXBPcGVyYXRpb24oc291cmNlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvamVjdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgaXMgbm90IGEgZnVuY3Rpb24uIEFyZSB5b3UgbG9va2luZyBmb3IgYG1hcFRvKClgPycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzb3VyY2UubGlmdChuZXcgTWFwT3BlcmF0b3IocHJvamVjdCwgdGhpc0FyZykpO1xuICAgIH07XG59XG5leHBvcnRzLm1hcCA9IG1hcDtcbnZhciBNYXBPcGVyYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFwT3BlcmF0b3IocHJvamVjdCwgdGhpc0FyZykge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLnRoaXNBcmcgPSB0aGlzQXJnO1xuICAgIH1cbiAgICBNYXBPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IE1hcFN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5wcm9qZWN0LCB0aGlzLnRoaXNBcmcpKTtcbiAgICB9O1xuICAgIHJldHVybiBNYXBPcGVyYXRvcjtcbn0oKSk7XG5leHBvcnRzLk1hcE9wZXJhdG9yID0gTWFwT3BlcmF0b3I7XG52YXIgTWFwU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1hcFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTWFwU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgcHJvamVjdCwgdGhpc0FyZykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIF90aGlzLmNvdW50ID0gMDtcbiAgICAgICAgX3RoaXMudGhpc0FyZyA9IHRoaXNBcmcgfHwgX3RoaXM7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTWFwU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucHJvamVjdC5jYWxsKHRoaXMudGhpc0FyZywgdmFsdWUsIHRoaXMuY291bnQrKyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChyZXN1bHQpO1xuICAgIH07XG4gICAgcmV0dXJuIE1hcFN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXAuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE91dGVyU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL091dGVyU3Vic2NyaWJlclwiKTtcbnZhciBJbm5lclN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9Jbm5lclN1YnNjcmliZXJcIik7XG52YXIgc3Vic2NyaWJlVG9SZXN1bHRfMSA9IHJlcXVpcmUoXCIuLi91dGlsL3N1YnNjcmliZVRvUmVzdWx0XCIpO1xudmFyIG1hcF8xID0gcmVxdWlyZShcIi4vbWFwXCIpO1xudmFyIGZyb21fMSA9IHJlcXVpcmUoXCIuLi9vYnNlcnZhYmxlL2Zyb21cIik7XG5mdW5jdGlvbiBzd2l0Y2hNYXAocHJvamVjdCwgcmVzdWx0U2VsZWN0b3IpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFNlbGVjdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoc291cmNlKSB7IHJldHVybiBzb3VyY2UucGlwZShzd2l0Y2hNYXAoZnVuY3Rpb24gKGEsIGkpIHsgcmV0dXJuIGZyb21fMS5mcm9tKHByb2plY3QoYSwgaSkpLnBpcGUobWFwXzEubWFwKGZ1bmN0aW9uIChiLCBpaSkgeyByZXR1cm4gcmVzdWx0U2VsZWN0b3IoYSwgYiwgaSwgaWkpOyB9KSk7IH0pKTsgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzb3VyY2UpIHsgcmV0dXJuIHNvdXJjZS5saWZ0KG5ldyBTd2l0Y2hNYXBPcGVyYXRvcihwcm9qZWN0KSk7IH07XG59XG5leHBvcnRzLnN3aXRjaE1hcCA9IHN3aXRjaE1hcDtcbnZhciBTd2l0Y2hNYXBPcGVyYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3dpdGNoTWFwT3BlcmF0b3IocHJvamVjdCkge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cbiAgICBTd2l0Y2hNYXBPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IFN3aXRjaE1hcFN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5wcm9qZWN0KSk7XG4gICAgfTtcbiAgICByZXR1cm4gU3dpdGNoTWFwT3BlcmF0b3I7XG59KCkpO1xudmFyIFN3aXRjaE1hcFN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTd2l0Y2hNYXBTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN3aXRjaE1hcFN1YnNjcmliZXIoZGVzdGluYXRpb24sIHByb2plY3QpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICBfdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgU3dpdGNoTWFwU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleCsrO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5wcm9qZWN0KHZhbHVlLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbm5lclN1YihyZXN1bHQsIHZhbHVlLCBpbmRleCk7XG4gICAgfTtcbiAgICBTd2l0Y2hNYXBTdWJzY3JpYmVyLnByb3RvdHlwZS5faW5uZXJTdWIgPSBmdW5jdGlvbiAocmVzdWx0LCB2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGlubmVyU3Vic2NyaXB0aW9uID0gdGhpcy5pbm5lclN1YnNjcmlwdGlvbjtcbiAgICAgICAgaWYgKGlubmVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBpbm5lclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbm5lclN1YnNjcmliZXIgPSBuZXcgSW5uZXJTdWJzY3JpYmVyXzEuSW5uZXJTdWJzY3JpYmVyKHRoaXMsIHZhbHVlLCBpbmRleCk7XG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG4gICAgICAgIGRlc3RpbmF0aW9uLmFkZChpbm5lclN1YnNjcmliZXIpO1xuICAgICAgICB0aGlzLmlubmVyU3Vic2NyaXB0aW9uID0gc3Vic2NyaWJlVG9SZXN1bHRfMS5zdWJzY3JpYmVUb1Jlc3VsdCh0aGlzLCByZXN1bHQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBpbm5lclN1YnNjcmliZXIpO1xuICAgICAgICBpZiAodGhpcy5pbm5lclN1YnNjcmlwdGlvbiAhPT0gaW5uZXJTdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5hZGQodGhpcy5pbm5lclN1YnNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN3aXRjaE1hcFN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlubmVyU3Vic2NyaXB0aW9uID0gdGhpcy5pbm5lclN1YnNjcmlwdGlvbjtcbiAgICAgICAgaWYgKCFpbm5lclN1YnNjcmlwdGlvbiB8fCBpbm5lclN1YnNjcmlwdGlvbi5jbG9zZWQpIHtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuX2NvbXBsZXRlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgU3dpdGNoTWFwU3Vic2NyaWJlci5wcm90b3R5cGUuX3Vuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlubmVyU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9O1xuICAgIFN3aXRjaE1hcFN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeUNvbXBsZXRlID0gZnVuY3Rpb24gKGlubmVyU3ViKSB7XG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG4gICAgICAgIGRlc3RpbmF0aW9uLnJlbW92ZShpbm5lclN1Yik7XG4gICAgICAgIHRoaXMuaW5uZXJTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuX2NvbXBsZXRlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN3aXRjaE1hcFN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeU5leHQgPSBmdW5jdGlvbiAob3V0ZXJWYWx1ZSwgaW5uZXJWYWx1ZSwgb3V0ZXJJbmRleCwgaW5uZXJJbmRleCwgaW5uZXJTdWIpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KGlubmVyVmFsdWUpO1xuICAgIH07XG4gICAgcmV0dXJuIFN3aXRjaE1hcFN1YnNjcmliZXI7XG59KE91dGVyU3Vic2NyaWJlcl8xLk91dGVyU3Vic2NyaWJlcikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3dpdGNoTWFwLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPdXRlclN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9PdXRlclN1YnNjcmliZXJcIik7XG52YXIgc3Vic2NyaWJlVG9SZXN1bHRfMSA9IHJlcXVpcmUoXCIuLi91dGlsL3N1YnNjcmliZVRvUmVzdWx0XCIpO1xuZnVuY3Rpb24gdGFrZVVudGlsKG5vdGlmaWVyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzb3VyY2UpIHsgcmV0dXJuIHNvdXJjZS5saWZ0KG5ldyBUYWtlVW50aWxPcGVyYXRvcihub3RpZmllcikpOyB9O1xufVxuZXhwb3J0cy50YWtlVW50aWwgPSB0YWtlVW50aWw7XG52YXIgVGFrZVVudGlsT3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRha2VVbnRpbE9wZXJhdG9yKG5vdGlmaWVyKSB7XG4gICAgICAgIHRoaXMubm90aWZpZXIgPSBub3RpZmllcjtcbiAgICB9XG4gICAgVGFrZVVudGlsT3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHZhciB0YWtlVW50aWxTdWJzY3JpYmVyID0gbmV3IFRha2VVbnRpbFN1YnNjcmliZXIoc3Vic2NyaWJlcik7XG4gICAgICAgIHZhciBub3RpZmllclN1YnNjcmlwdGlvbiA9IHN1YnNjcmliZVRvUmVzdWx0XzEuc3Vic2NyaWJlVG9SZXN1bHQodGFrZVVudGlsU3Vic2NyaWJlciwgdGhpcy5ub3RpZmllcik7XG4gICAgICAgIGlmIChub3RpZmllclN1YnNjcmlwdGlvbiAmJiAhdGFrZVVudGlsU3Vic2NyaWJlci5zZWVuVmFsdWUpIHtcbiAgICAgICAgICAgIHRha2VVbnRpbFN1YnNjcmliZXIuYWRkKG5vdGlmaWVyU3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKHRha2VVbnRpbFN1YnNjcmliZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YWtlVW50aWxTdWJzY3JpYmVyO1xuICAgIH07XG4gICAgcmV0dXJuIFRha2VVbnRpbE9wZXJhdG9yO1xufSgpKTtcbnZhciBUYWtlVW50aWxTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVGFrZVVudGlsU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUYWtlVW50aWxTdWJzY3JpYmVyKGRlc3RpbmF0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zZWVuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBUYWtlVW50aWxTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlOZXh0ID0gZnVuY3Rpb24gKG91dGVyVmFsdWUsIGlubmVyVmFsdWUsIG91dGVySW5kZXgsIGlubmVySW5kZXgsIGlubmVyU3ViKSB7XG4gICAgICAgIHRoaXMuc2VlblZhbHVlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH07XG4gICAgVGFrZVVudGlsU3Vic2NyaWJlci5wcm90b3R5cGUubm90aWZ5Q29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcbiAgICByZXR1cm4gVGFrZVVudGlsU3Vic2NyaWJlcjtcbn0oT3V0ZXJTdWJzY3JpYmVyXzEuT3V0ZXJTdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10YWtlVW50aWwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE91dGVyU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL091dGVyU3Vic2NyaWJlclwiKTtcbnZhciBzdWJzY3JpYmVUb1Jlc3VsdF8xID0gcmVxdWlyZShcIi4uL3V0aWwvc3Vic2NyaWJlVG9SZXN1bHRcIik7XG5leHBvcnRzLmRlZmF1bHRUaHJvdHRsZUNvbmZpZyA9IHtcbiAgICBsZWFkaW5nOiB0cnVlLFxuICAgIHRyYWlsaW5nOiBmYWxzZVxufTtcbmZ1bmN0aW9uIHRocm90dGxlKGR1cmF0aW9uU2VsZWN0b3IsIGNvbmZpZykge1xuICAgIGlmIChjb25maWcgPT09IHZvaWQgMCkgeyBjb25maWcgPSBleHBvcnRzLmRlZmF1bHRUaHJvdHRsZUNvbmZpZzsgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoc291cmNlKSB7IHJldHVybiBzb3VyY2UubGlmdChuZXcgVGhyb3R0bGVPcGVyYXRvcihkdXJhdGlvblNlbGVjdG9yLCBjb25maWcubGVhZGluZywgY29uZmlnLnRyYWlsaW5nKSk7IH07XG59XG5leHBvcnRzLnRocm90dGxlID0gdGhyb3R0bGU7XG52YXIgVGhyb3R0bGVPcGVyYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGhyb3R0bGVPcGVyYXRvcihkdXJhdGlvblNlbGVjdG9yLCBsZWFkaW5nLCB0cmFpbGluZykge1xuICAgICAgICB0aGlzLmR1cmF0aW9uU2VsZWN0b3IgPSBkdXJhdGlvblNlbGVjdG9yO1xuICAgICAgICB0aGlzLmxlYWRpbmcgPSBsZWFkaW5nO1xuICAgICAgICB0aGlzLnRyYWlsaW5nID0gdHJhaWxpbmc7XG4gICAgfVxuICAgIFRocm90dGxlT3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBUaHJvdHRsZVN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5kdXJhdGlvblNlbGVjdG9yLCB0aGlzLmxlYWRpbmcsIHRoaXMudHJhaWxpbmcpKTtcbiAgICB9O1xuICAgIHJldHVybiBUaHJvdHRsZU9wZXJhdG9yO1xufSgpKTtcbnZhciBUaHJvdHRsZVN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUaHJvdHRsZVN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVGhyb3R0bGVTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBkdXJhdGlvblNlbGVjdG9yLCBfbGVhZGluZywgX3RyYWlsaW5nKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICBfdGhpcy5kdXJhdGlvblNlbGVjdG9yID0gZHVyYXRpb25TZWxlY3RvcjtcbiAgICAgICAgX3RoaXMuX2xlYWRpbmcgPSBfbGVhZGluZztcbiAgICAgICAgX3RoaXMuX3RyYWlsaW5nID0gX3RyYWlsaW5nO1xuICAgICAgICBfdGhpcy5faGFzVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBUaHJvdHRsZVN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2hhc1ZhbHVlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fc2VuZFZhbHVlID0gdmFsdWU7XG4gICAgICAgIGlmICghdGhpcy5fdGhyb3R0bGVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbGVhZGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvdHRsZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRocm90dGxlU3Vic2NyaWJlci5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcywgX2hhc1ZhbHVlID0gX2EuX2hhc1ZhbHVlLCBfc2VuZFZhbHVlID0gX2EuX3NlbmRWYWx1ZTtcbiAgICAgICAgaWYgKF9oYXNWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KF9zZW5kVmFsdWUpO1xuICAgICAgICAgICAgdGhpcy50aHJvdHRsZShfc2VuZFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9oYXNWYWx1ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zZW5kVmFsdWUgPSBudWxsO1xuICAgIH07XG4gICAgVGhyb3R0bGVTdWJzY3JpYmVyLnByb3RvdHlwZS50aHJvdHRsZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgZHVyYXRpb24gPSB0aGlzLnRyeUR1cmF0aW9uU2VsZWN0b3IodmFsdWUpO1xuICAgICAgICBpZiAoISFkdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5hZGQodGhpcy5fdGhyb3R0bGVkID0gc3Vic2NyaWJlVG9SZXN1bHRfMS5zdWJzY3JpYmVUb1Jlc3VsdCh0aGlzLCBkdXJhdGlvbikpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUaHJvdHRsZVN1YnNjcmliZXIucHJvdG90eXBlLnRyeUR1cmF0aW9uU2VsZWN0b3IgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmR1cmF0aW9uU2VsZWN0b3IodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUaHJvdHRsZVN1YnNjcmliZXIucHJvdG90eXBlLnRocm90dGxpbmdEb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCBfdGhyb3R0bGVkID0gX2EuX3Rocm90dGxlZCwgX3RyYWlsaW5nID0gX2EuX3RyYWlsaW5nO1xuICAgICAgICBpZiAoX3Rocm90dGxlZCkge1xuICAgICAgICAgICAgX3Rocm90dGxlZC51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Rocm90dGxlZCA9IG51bGw7XG4gICAgICAgIGlmIChfdHJhaWxpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc2VuZCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUaHJvdHRsZVN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeU5leHQgPSBmdW5jdGlvbiAob3V0ZXJWYWx1ZSwgaW5uZXJWYWx1ZSwgb3V0ZXJJbmRleCwgaW5uZXJJbmRleCwgaW5uZXJTdWIpIHtcbiAgICAgICAgdGhpcy50aHJvdHRsaW5nRG9uZSgpO1xuICAgIH07XG4gICAgVGhyb3R0bGVTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50aHJvdHRsaW5nRG9uZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIFRocm90dGxlU3Vic2NyaWJlcjtcbn0oT3V0ZXJTdWJzY3JpYmVyXzEuT3V0ZXJTdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10aHJvdHRsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmliZXJcIik7XG52YXIgYXN5bmNfMSA9IHJlcXVpcmUoXCIuLi9zY2hlZHVsZXIvYXN5bmNcIik7XG52YXIgdGhyb3R0bGVfMSA9IHJlcXVpcmUoXCIuL3Rocm90dGxlXCIpO1xuZnVuY3Rpb24gdGhyb3R0bGVUaW1lKGR1cmF0aW9uLCBzY2hlZHVsZXIsIGNvbmZpZykge1xuICAgIGlmIChzY2hlZHVsZXIgPT09IHZvaWQgMCkgeyBzY2hlZHVsZXIgPSBhc3luY18xLmFzeW5jOyB9XG4gICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7IGNvbmZpZyA9IHRocm90dGxlXzEuZGVmYXVsdFRocm90dGxlQ29uZmlnOyB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzb3VyY2UpIHsgcmV0dXJuIHNvdXJjZS5saWZ0KG5ldyBUaHJvdHRsZVRpbWVPcGVyYXRvcihkdXJhdGlvbiwgc2NoZWR1bGVyLCBjb25maWcubGVhZGluZywgY29uZmlnLnRyYWlsaW5nKSk7IH07XG59XG5leHBvcnRzLnRocm90dGxlVGltZSA9IHRocm90dGxlVGltZTtcbnZhciBUaHJvdHRsZVRpbWVPcGVyYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGhyb3R0bGVUaW1lT3BlcmF0b3IoZHVyYXRpb24sIHNjaGVkdWxlciwgbGVhZGluZywgdHJhaWxpbmcpIHtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgICAgdGhpcy5sZWFkaW5nID0gbGVhZGluZztcbiAgICAgICAgdGhpcy50cmFpbGluZyA9IHRyYWlsaW5nO1xuICAgIH1cbiAgICBUaHJvdHRsZVRpbWVPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IFRocm90dGxlVGltZVN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5kdXJhdGlvbiwgdGhpcy5zY2hlZHVsZXIsIHRoaXMubGVhZGluZywgdGhpcy50cmFpbGluZykpO1xuICAgIH07XG4gICAgcmV0dXJuIFRocm90dGxlVGltZU9wZXJhdG9yO1xufSgpKTtcbnZhciBUaHJvdHRsZVRpbWVTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVGhyb3R0bGVUaW1lU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUaHJvdHRsZVRpbWVTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBkdXJhdGlvbiwgc2NoZWR1bGVyLCBsZWFkaW5nLCB0cmFpbGluZykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgX3RoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgICBfdGhpcy5sZWFkaW5nID0gbGVhZGluZztcbiAgICAgICAgX3RoaXMudHJhaWxpbmcgPSB0cmFpbGluZztcbiAgICAgICAgX3RoaXMuX2hhc1RyYWlsaW5nVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuX3RyYWlsaW5nVmFsdWUgPSBudWxsO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFRocm90dGxlVGltZVN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnRocm90dGxlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudHJhaWxpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFpbGluZ1ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFzVHJhaWxpbmdWYWx1ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkZCh0aGlzLnRocm90dGxlZCA9IHRoaXMuc2NoZWR1bGVyLnNjaGVkdWxlKGRpc3BhdGNoTmV4dCwgdGhpcy5kdXJhdGlvbiwgeyBzdWJzY3JpYmVyOiB0aGlzIH0pKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmxlYWRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy50cmFpbGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyYWlsaW5nVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYXNUcmFpbGluZ1ZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgVGhyb3R0bGVUaW1lU3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5faGFzVHJhaWxpbmdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHRoaXMuX3RyYWlsaW5nVmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUaHJvdHRsZVRpbWVTdWJzY3JpYmVyLnByb3RvdHlwZS5jbGVhclRocm90dGxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGhyb3R0bGVkID0gdGhpcy50aHJvdHRsZWQ7XG4gICAgICAgIGlmICh0aHJvdHRsZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYWlsaW5nICYmIHRoaXMuX2hhc1RyYWlsaW5nVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodGhpcy5fdHJhaWxpbmdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhaWxpbmdWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFzVHJhaWxpbmdWYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3R0bGVkLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZSh0aHJvdHRsZWQpO1xuICAgICAgICAgICAgdGhpcy50aHJvdHRsZWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gVGhyb3R0bGVUaW1lU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpKTtcbmZ1bmN0aW9uIGRpc3BhdGNoTmV4dChhcmcpIHtcbiAgICB2YXIgc3Vic2NyaWJlciA9IGFyZy5zdWJzY3JpYmVyO1xuICAgIHN1YnNjcmliZXIuY2xlYXJUaHJvdHRsZSgpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGhyb3R0bGVUaW1lLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuLi9PYnNlcnZhYmxlXCIpO1xudmFyIFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmlwdGlvblwiKTtcbmZ1bmN0aW9uIHNjaGVkdWxlQXJyYXkoaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHN1YiA9IG5ldyBTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24oKTtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gaW5wdXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChpbnB1dFtpKytdKTtcbiAgICAgICAgICAgIGlmICghc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICBzdWIuYWRkKHRoaXMuc2NoZWR1bGUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHN1YjtcbiAgICB9KTtcbn1cbmV4cG9ydHMuc2NoZWR1bGVBcnJheSA9IHNjaGVkdWxlQXJyYXk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZUFycmF5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuLi9PYnNlcnZhYmxlXCIpO1xudmFyIFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmlwdGlvblwiKTtcbnZhciBpdGVyYXRvcl8xID0gcmVxdWlyZShcIi4uL3N5bWJvbC9pdGVyYXRvclwiKTtcbmZ1bmN0aW9uIHNjaGVkdWxlSXRlcmFibGUoaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJdGVyYWJsZSBjYW5ub3QgYmUgbnVsbCcpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBzdWIgPSBuZXcgU3Vic2NyaXB0aW9uXzEuU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgIHZhciBpdGVyYXRvcjtcbiAgICAgICAgc3ViLmFkZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoaXRlcmF0b3IgJiYgdHlwZW9mIGl0ZXJhdG9yLnJldHVybiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaXRlcmF0b3IgPSBpbnB1dFtpdGVyYXRvcl8xLml0ZXJhdG9yXSgpO1xuICAgICAgICAgICAgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgZG9uZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZG9uZSA9IHJlc3VsdC5kb25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBzdWI7XG4gICAgfSk7XG59XG5leHBvcnRzLnNjaGVkdWxlSXRlcmFibGUgPSBzY2hlZHVsZUl0ZXJhYmxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NoZWR1bGVJdGVyYWJsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2YWJsZVwiKTtcbnZhciBTdWJzY3JpcHRpb25fMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpcHRpb25cIik7XG52YXIgb2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL3N5bWJvbC9vYnNlcnZhYmxlXCIpO1xuZnVuY3Rpb24gc2NoZWR1bGVPYnNlcnZhYmxlKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBzdWIgPSBuZXcgU3Vic2NyaXB0aW9uXzEuU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgIHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlID0gaW5wdXRbb2JzZXJ2YWJsZV8xLm9ic2VydmFibGVdKCk7XG4gICAgICAgICAgICBzdWIuYWRkKG9ic2VydmFibGUuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAodmFsdWUpIHsgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5uZXh0KHZhbHVlKTsgfSkpOyB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7IHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmliZXIuZXJyb3IoZXJyKTsgfSkpOyB9LFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7IHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmliZXIuY29tcGxldGUoKTsgfSkpOyB9LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBzdWI7XG4gICAgfSk7XG59XG5leHBvcnRzLnNjaGVkdWxlT2JzZXJ2YWJsZSA9IHNjaGVkdWxlT2JzZXJ2YWJsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjaGVkdWxlT2JzZXJ2YWJsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2YWJsZVwiKTtcbnZhciBTdWJzY3JpcHRpb25fMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpcHRpb25cIik7XG5mdW5jdGlvbiBzY2hlZHVsZVByb21pc2UoaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHN1YiA9IG5ldyBTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24oKTtcbiAgICAgICAgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gaW5wdXQudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgIHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmliZXIuY29tcGxldGUoKTsgfSkpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpYmVyLmVycm9yKGVycik7IH0pKTtcbiAgICAgICAgfSk7IH0pKTtcbiAgICAgICAgcmV0dXJuIHN1YjtcbiAgICB9KTtcbn1cbmV4cG9ydHMuc2NoZWR1bGVQcm9taXNlID0gc2NoZWR1bGVQcm9taXNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NoZWR1bGVQcm9taXNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHNjaGVkdWxlT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4vc2NoZWR1bGVPYnNlcnZhYmxlXCIpO1xudmFyIHNjaGVkdWxlUHJvbWlzZV8xID0gcmVxdWlyZShcIi4vc2NoZWR1bGVQcm9taXNlXCIpO1xudmFyIHNjaGVkdWxlQXJyYXlfMSA9IHJlcXVpcmUoXCIuL3NjaGVkdWxlQXJyYXlcIik7XG52YXIgc2NoZWR1bGVJdGVyYWJsZV8xID0gcmVxdWlyZShcIi4vc2NoZWR1bGVJdGVyYWJsZVwiKTtcbnZhciBpc0ludGVyb3BPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9pc0ludGVyb3BPYnNlcnZhYmxlXCIpO1xudmFyIGlzUHJvbWlzZV8xID0gcmVxdWlyZShcIi4uL3V0aWwvaXNQcm9taXNlXCIpO1xudmFyIGlzQXJyYXlMaWtlXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9pc0FycmF5TGlrZVwiKTtcbnZhciBpc0l0ZXJhYmxlXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9pc0l0ZXJhYmxlXCIpO1xuZnVuY3Rpb24gc2NoZWR1bGVkKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNJbnRlcm9wT2JzZXJ2YWJsZV8xLmlzSW50ZXJvcE9ic2VydmFibGUoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVPYnNlcnZhYmxlXzEuc2NoZWR1bGVPYnNlcnZhYmxlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzUHJvbWlzZV8xLmlzUHJvbWlzZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZVByb21pc2VfMS5zY2hlZHVsZVByb21pc2UoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNBcnJheUxpa2VfMS5pc0FycmF5TGlrZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZUFycmF5XzEuc2NoZWR1bGVBcnJheShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0l0ZXJhYmxlXzEuaXNJdGVyYWJsZShpbnB1dCkgfHwgdHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlSXRlcmFibGVfMS5zY2hlZHVsZUl0ZXJhYmxlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKGlucHV0ICE9PSBudWxsICYmIHR5cGVvZiBpbnB1dCB8fCBpbnB1dCkgKyAnIGlzIG5vdCBvYnNlcnZhYmxlJyk7XG59XG5leHBvcnRzLnNjaGVkdWxlZCA9IHNjaGVkdWxlZDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjaGVkdWxlZC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3Vic2NyaXB0aW9uXzEgPSByZXF1aXJlKFwiLi4vU3Vic2NyaXB0aW9uXCIpO1xudmFyIEFjdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFjdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBY3Rpb24oc2NoZWR1bGVyLCB3b3JrKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBBY3Rpb24ucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICByZXR1cm4gQWN0aW9uO1xufShTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24pKTtcbmV4cG9ydHMuQWN0aW9uID0gQWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBY3Rpb25fMSA9IHJlcXVpcmUoXCIuL0FjdGlvblwiKTtcbnZhciBBc3luY0FjdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFzeW5jQWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFzeW5jQWN0aW9uKHNjaGVkdWxlciwgd29yaykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBzY2hlZHVsZXIsIHdvcmspIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgICAgX3RoaXMud29yayA9IHdvcms7XG4gICAgICAgIF90aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5pZDtcbiAgICAgICAgdmFyIHNjaGVkdWxlciA9IHRoaXMuc2NoZWR1bGVyO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMucmVjeWNsZUFzeW5jSWQoc2NoZWR1bGVyLCBpZCwgZGVsYXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGVuZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuZGVsYXkgPSBkZWxheTtcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuaWQgfHwgdGhpcy5yZXF1ZXN0QXN5bmNJZChzY2hlZHVsZXIsIHRoaXMuaWQsIGRlbGF5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUucmVxdWVzdEFzeW5jSWQgPSBmdW5jdGlvbiAoc2NoZWR1bGVyLCBpZCwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgICAgIHJldHVybiBzZXRJbnRlcnZhbChzY2hlZHVsZXIuZmx1c2guYmluZChzY2hlZHVsZXIsIHRoaXMpLCBkZWxheSk7XG4gICAgfTtcbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUucmVjeWNsZUFzeW5jSWQgPSBmdW5jdGlvbiAoc2NoZWR1bGVyLCBpZCwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgICAgIGlmIChkZWxheSAhPT0gbnVsbCAmJiB0aGlzLmRlbGF5ID09PSBkZWxheSAmJiB0aGlzLnBlbmRpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdleGVjdXRpbmcgYSBjYW5jZWxsZWQgYWN0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHZhciBlcnJvciA9IHRoaXMuX2V4ZWN1dGUoc3RhdGUsIGRlbGF5KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5wZW5kaW5nID09PSBmYWxzZSAmJiB0aGlzLmlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLnJlY3ljbGVBc3luY0lkKHRoaXMuc2NoZWR1bGVyLCB0aGlzLmlkLCBudWxsKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXN5bmNBY3Rpb24ucHJvdG90eXBlLl9leGVjdXRlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICB2YXIgZXJyb3JlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgZXJyb3JWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMud29yayhzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGVycm9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgZXJyb3JWYWx1ZSA9ICEhZSAmJiBlIHx8IG5ldyBFcnJvcihlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3JlZCkge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yVmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFzeW5jQWN0aW9uLnByb3RvdHlwZS5fdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuaWQ7XG4gICAgICAgIHZhciBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcbiAgICAgICAgdmFyIGFjdGlvbnMgPSBzY2hlZHVsZXIuYWN0aW9ucztcbiAgICAgICAgdmFyIGluZGV4ID0gYWN0aW9ucy5pbmRleE9mKHRoaXMpO1xuICAgICAgICB0aGlzLndvcmsgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyID0gbnVsbDtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgYWN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5yZWN5Y2xlQXN5bmNJZChzY2hlZHVsZXIsIGlkLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlbGF5ID0gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBBc3luY0FjdGlvbjtcbn0oQWN0aW9uXzEuQWN0aW9uKSk7XG5leHBvcnRzLkFzeW5jQWN0aW9uID0gQXN5bmNBY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Bc3luY0FjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU2NoZWR1bGVyXzEgPSByZXF1aXJlKFwiLi4vU2NoZWR1bGVyXCIpO1xudmFyIEFzeW5jU2NoZWR1bGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXN5bmNTY2hlZHVsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXN5bmNTY2hlZHVsZXIoU2NoZWR1bGVyQWN0aW9uLCBub3cpIHtcbiAgICAgICAgaWYgKG5vdyA9PT0gdm9pZCAwKSB7IG5vdyA9IFNjaGVkdWxlcl8xLlNjaGVkdWxlci5ub3c7IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgU2NoZWR1bGVyQWN0aW9uLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoQXN5bmNTY2hlZHVsZXIuZGVsZWdhdGUgJiYgQXN5bmNTY2hlZHVsZXIuZGVsZWdhdGUgIT09IF90aGlzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFzeW5jU2NoZWR1bGVyLmRlbGVnYXRlLm5vdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5hY3Rpb25zID0gW107XG4gICAgICAgIF90aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5zY2hlZHVsZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQXN5bmNTY2hlZHVsZXIucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHdvcmssIGRlbGF5LCBzdGF0ZSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgaWYgKEFzeW5jU2NoZWR1bGVyLmRlbGVnYXRlICYmIEFzeW5jU2NoZWR1bGVyLmRlbGVnYXRlICE9PSB0aGlzKSB7XG4gICAgICAgICAgICByZXR1cm4gQXN5bmNTY2hlZHVsZXIuZGVsZWdhdGUuc2NoZWR1bGUod29yaywgZGVsYXksIHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnNjaGVkdWxlLmNhbGwodGhpcywgd29yaywgZGVsYXksIHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXN5bmNTY2hlZHVsZXIucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB2YXIgYWN0aW9ucyA9IHRoaXMuYWN0aW9ucztcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKGVycm9yID0gYWN0aW9uLmV4ZWN1dGUoYWN0aW9uLnN0YXRlLCBhY3Rpb24uZGVsYXkpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKSk7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgd2hpbGUgKGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBBc3luY1NjaGVkdWxlcjtcbn0oU2NoZWR1bGVyXzEuU2NoZWR1bGVyKSk7XG5leHBvcnRzLkFzeW5jU2NoZWR1bGVyID0gQXN5bmNTY2hlZHVsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Bc3luY1NjaGVkdWxlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBc3luY0FjdGlvbl8xID0gcmVxdWlyZShcIi4vQXN5bmNBY3Rpb25cIik7XG52YXIgQXN5bmNTY2hlZHVsZXJfMSA9IHJlcXVpcmUoXCIuL0FzeW5jU2NoZWR1bGVyXCIpO1xuZXhwb3J0cy5hc3luY1NjaGVkdWxlciA9IG5ldyBBc3luY1NjaGVkdWxlcl8xLkFzeW5jU2NoZWR1bGVyKEFzeW5jQWN0aW9uXzEuQXN5bmNBY3Rpb24pO1xuZXhwb3J0cy5hc3luYyA9IGV4cG9ydHMuYXN5bmNTY2hlZHVsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hc3luYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGdldFN5bWJvbEl0ZXJhdG9yKCkge1xuICAgIGlmICh0eXBlb2YgU3ltYm9sICE9PSAnZnVuY3Rpb24nIHx8ICFTeW1ib2wuaXRlcmF0b3IpIHtcbiAgICAgICAgcmV0dXJuICdAQGl0ZXJhdG9yJztcbiAgICB9XG4gICAgcmV0dXJuIFN5bWJvbC5pdGVyYXRvcjtcbn1cbmV4cG9ydHMuZ2V0U3ltYm9sSXRlcmF0b3IgPSBnZXRTeW1ib2xJdGVyYXRvcjtcbmV4cG9ydHMuaXRlcmF0b3IgPSBnZXRTeW1ib2xJdGVyYXRvcigpO1xuZXhwb3J0cy4kJGl0ZXJhdG9yID0gZXhwb3J0cy5pdGVyYXRvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWl0ZXJhdG9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5vYnNlcnZhYmxlID0gKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLm9ic2VydmFibGUgfHwgJ0BAb2JzZXJ2YWJsZSc7IH0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYnNlcnZhYmxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yeFN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gU3ltYm9sKCdyeFN1YnNjcmliZXInKVxuICAgICAgICA6ICdAQHJ4U3Vic2NyaWJlcl8nICsgTWF0aC5yYW5kb20oKTtcbn0pKCk7XG5leHBvcnRzLiQkcnhTdWJzY3JpYmVyID0gZXhwb3J0cy5yeFN1YnNjcmliZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yeFN1YnNjcmliZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JJbXBsID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYmplY3RVbnN1YnNjcmliZWRFcnJvckltcGwoKSB7XG4gICAgICAgIEVycm9yLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICdvYmplY3QgdW5zdWJzY3JpYmVkJztcbiAgICAgICAgdGhpcy5uYW1lID0gJ09iamVjdFVuc3Vic2NyaWJlZEVycm9yJztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIE9iamVjdFVuc3Vic2NyaWJlZEVycm9ySW1wbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG4gICAgcmV0dXJuIE9iamVjdFVuc3Vic2NyaWJlZEVycm9ySW1wbDtcbn0pKCk7XG5leHBvcnRzLk9iamVjdFVuc3Vic2NyaWJlZEVycm9yID0gT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JJbXBsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgVW5zdWJzY3JpcHRpb25FcnJvckltcGwgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFVuc3Vic2NyaXB0aW9uRXJyb3JJbXBsKGVycm9ycykge1xuICAgICAgICBFcnJvci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBlcnJvcnMgP1xuICAgICAgICAgICAgZXJyb3JzLmxlbmd0aCArIFwiIGVycm9ycyBvY2N1cnJlZCBkdXJpbmcgdW5zdWJzY3JpcHRpb246XFxuXCIgKyBlcnJvcnMubWFwKGZ1bmN0aW9uIChlcnIsIGkpIHsgcmV0dXJuIGkgKyAxICsgXCIpIFwiICsgZXJyLnRvU3RyaW5nKCk7IH0pLmpvaW4oJ1xcbiAgJykgOiAnJztcbiAgICAgICAgdGhpcy5uYW1lID0gJ1Vuc3Vic2NyaXB0aW9uRXJyb3InO1xuICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFVuc3Vic2NyaXB0aW9uRXJyb3JJbXBsLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbiAgICByZXR1cm4gVW5zdWJzY3JpcHRpb25FcnJvckltcGw7XG59KSgpO1xuZXhwb3J0cy5VbnN1YnNjcmlwdGlvbkVycm9yID0gVW5zdWJzY3JpcHRpb25FcnJvckltcGw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1VbnN1YnNjcmlwdGlvbkVycm9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpYmVyXCIpO1xuZnVuY3Rpb24gY2FuUmVwb3J0RXJyb3Iob2JzZXJ2ZXIpIHtcbiAgICB3aGlsZSAob2JzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIF9hID0gb2JzZXJ2ZXIsIGNsb3NlZF8xID0gX2EuY2xvc2VkLCBkZXN0aW5hdGlvbiA9IF9hLmRlc3RpbmF0aW9uLCBpc1N0b3BwZWQgPSBfYS5pc1N0b3BwZWQ7XG4gICAgICAgIGlmIChjbG9zZWRfMSB8fCBpc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkZXN0aW5hdGlvbiAmJiBkZXN0aW5hdGlvbiBpbnN0YW5jZW9mIFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICBvYnNlcnZlciA9IGRlc3RpbmF0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0cy5jYW5SZXBvcnRFcnJvciA9IGNhblJlcG9ydEVycm9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FuUmVwb3J0RXJyb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBob3N0UmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHRocm93IGVycjsgfSwgMCk7XG59XG5leHBvcnRzLmhvc3RSZXBvcnRFcnJvciA9IGhvc3RSZXBvcnRFcnJvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvc3RSZXBvcnRFcnJvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGlkZW50aXR5KHgpIHtcbiAgICByZXR1cm4geDtcbn1cbmV4cG9ydHMuaWRlbnRpdHkgPSBpZGVudGl0eTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlkZW50aXR5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc0FycmF5ID0gKGZ1bmN0aW9uICgpIHsgcmV0dXJuIEFycmF5LmlzQXJyYXkgfHwgKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4ICYmIHR5cGVvZiB4Lmxlbmd0aCA9PT0gJ251bWJlcic7IH0pOyB9KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNBcnJheS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaXNBcnJheUxpa2UgPSAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHggJiYgdHlwZW9mIHgubGVuZ3RoID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgeCAhPT0gJ2Z1bmN0aW9uJzsgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0FycmF5TGlrZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGlzRnVuY3Rpb24oeCkge1xuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0Z1bmN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuLi9zeW1ib2wvb2JzZXJ2YWJsZVwiKTtcbmZ1bmN0aW9uIGlzSW50ZXJvcE9ic2VydmFibGUoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQgJiYgdHlwZW9mIGlucHV0W29ic2VydmFibGVfMS5vYnNlcnZhYmxlXSA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNJbnRlcm9wT2JzZXJ2YWJsZSA9IGlzSW50ZXJvcE9ic2VydmFibGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0ludGVyb3BPYnNlcnZhYmxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGl0ZXJhdG9yXzEgPSByZXF1aXJlKFwiLi4vc3ltYm9sL2l0ZXJhdG9yXCIpO1xuZnVuY3Rpb24gaXNJdGVyYWJsZShpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dCAmJiB0eXBlb2YgaW5wdXRbaXRlcmF0b3JfMS5pdGVyYXRvcl0gPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzSXRlcmFibGUgPSBpc0l0ZXJhYmxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNJdGVyYWJsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGlzT2JqZWN0KHgpIHtcbiAgICByZXR1cm4geCAhPT0gbnVsbCAmJiB0eXBlb2YgeCA9PT0gJ29iamVjdCc7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc09iamVjdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZSkge1xuICAgIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZS5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzUHJvbWlzZSA9IGlzUHJvbWlzZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzUHJvbWlzZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGlzU2NoZWR1bGVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS5zY2hlZHVsZSA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNTY2hlZHVsZXIgPSBpc1NjaGVkdWxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzU2NoZWR1bGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGlkZW50aXR5XzEgPSByZXF1aXJlKFwiLi9pZGVudGl0eVwiKTtcbmZ1bmN0aW9uIHBpcGUoKSB7XG4gICAgdmFyIGZucyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGZuc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gcGlwZUZyb21BcnJheShmbnMpO1xufVxuZXhwb3J0cy5waXBlID0gcGlwZTtcbmZ1bmN0aW9uIHBpcGVGcm9tQXJyYXkoZm5zKSB7XG4gICAgaWYgKGZucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGlkZW50aXR5XzEuaWRlbnRpdHk7XG4gICAgfVxuICAgIGlmIChmbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBmbnNbMF07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiBwaXBlZChpbnB1dCkge1xuICAgICAgICByZXR1cm4gZm5zLnJlZHVjZShmdW5jdGlvbiAocHJldiwgZm4pIHsgcmV0dXJuIGZuKHByZXYpOyB9LCBpbnB1dCk7XG4gICAgfTtcbn1cbmV4cG9ydHMucGlwZUZyb21BcnJheSA9IHBpcGVGcm9tQXJyYXk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1waXBlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHN1YnNjcmliZVRvQXJyYXlfMSA9IHJlcXVpcmUoXCIuL3N1YnNjcmliZVRvQXJyYXlcIik7XG52YXIgc3Vic2NyaWJlVG9Qcm9taXNlXzEgPSByZXF1aXJlKFwiLi9zdWJzY3JpYmVUb1Byb21pc2VcIik7XG52YXIgc3Vic2NyaWJlVG9JdGVyYWJsZV8xID0gcmVxdWlyZShcIi4vc3Vic2NyaWJlVG9JdGVyYWJsZVwiKTtcbnZhciBzdWJzY3JpYmVUb09ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuL3N1YnNjcmliZVRvT2JzZXJ2YWJsZVwiKTtcbnZhciBpc0FycmF5TGlrZV8xID0gcmVxdWlyZShcIi4vaXNBcnJheUxpa2VcIik7XG52YXIgaXNQcm9taXNlXzEgPSByZXF1aXJlKFwiLi9pc1Byb21pc2VcIik7XG52YXIgaXNPYmplY3RfMSA9IHJlcXVpcmUoXCIuL2lzT2JqZWN0XCIpO1xudmFyIGl0ZXJhdG9yXzEgPSByZXF1aXJlKFwiLi4vc3ltYm9sL2l0ZXJhdG9yXCIpO1xudmFyIG9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuLi9zeW1ib2wvb2JzZXJ2YWJsZVwiKTtcbmV4cG9ydHMuc3Vic2NyaWJlVG8gPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgaWYgKCEhcmVzdWx0ICYmIHR5cGVvZiByZXN1bHRbb2JzZXJ2YWJsZV8xLm9ic2VydmFibGVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVUb09ic2VydmFibGVfMS5zdWJzY3JpYmVUb09ic2VydmFibGUocmVzdWx0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNBcnJheUxpa2VfMS5pc0FycmF5TGlrZShyZXN1bHQpKSB7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVUb0FycmF5XzEuc3Vic2NyaWJlVG9BcnJheShyZXN1bHQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1Byb21pc2VfMS5pc1Byb21pc2UocmVzdWx0KSkge1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlVG9Qcm9taXNlXzEuc3Vic2NyaWJlVG9Qcm9taXNlKHJlc3VsdCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCEhcmVzdWx0ICYmIHR5cGVvZiByZXN1bHRbaXRlcmF0b3JfMS5pdGVyYXRvcl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZVRvSXRlcmFibGVfMS5zdWJzY3JpYmVUb0l0ZXJhYmxlKHJlc3VsdCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgdmFsdWUgPSBpc09iamVjdF8xLmlzT2JqZWN0KHJlc3VsdCkgPyAnYW4gaW52YWxpZCBvYmplY3QnIDogXCInXCIgKyByZXN1bHQgKyBcIidcIjtcbiAgICAgICAgdmFyIG1zZyA9IFwiWW91IHByb3ZpZGVkIFwiICsgdmFsdWUgKyBcIiB3aGVyZSBhIHN0cmVhbSB3YXMgZXhwZWN0ZWQuXCJcbiAgICAgICAgICAgICsgJyBZb3UgY2FuIHByb3ZpZGUgYW4gT2JzZXJ2YWJsZSwgUHJvbWlzZSwgQXJyYXksIG9yIEl0ZXJhYmxlLic7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IobXNnKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Vic2NyaWJlVG8uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN1YnNjcmliZVRvQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHsgcmV0dXJuIGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbiAmJiAhc3Vic2NyaWJlci5jbG9zZWQ7IGkrKykge1xuICAgICAgICBzdWJzY3JpYmVyLm5leHQoYXJyYXlbaV0pO1xuICAgIH1cbiAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG59OyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Vic2NyaWJlVG9BcnJheS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBpdGVyYXRvcl8xID0gcmVxdWlyZShcIi4uL3N5bWJvbC9pdGVyYXRvclwiKTtcbmV4cG9ydHMuc3Vic2NyaWJlVG9JdGVyYWJsZSA9IGZ1bmN0aW9uIChpdGVyYWJsZSkgeyByZXR1cm4gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYWJsZVtpdGVyYXRvcl8xLml0ZXJhdG9yXSgpO1xuICAgIGRvIHtcbiAgICAgICAgdmFyIGl0ZW0gPSB2b2lkIDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpdGVtID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybiBzdWJzY3JpYmVyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtLmRvbmUpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHN1YnNjcmliZXIubmV4dChpdGVtLnZhbHVlKTtcbiAgICAgICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0gd2hpbGUgKHRydWUpO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3IucmV0dXJuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHN1YnNjcmliZXIuYWRkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChpdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAgICAgICBpdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBzdWJzY3JpYmVyO1xufTsgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1YnNjcmliZVRvSXRlcmFibGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgb2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL3N5bWJvbC9vYnNlcnZhYmxlXCIpO1xuZXhwb3J0cy5zdWJzY3JpYmVUb09ic2VydmFibGUgPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgIHZhciBvYnMgPSBvYmpbb2JzZXJ2YWJsZV8xLm9ic2VydmFibGVdKCk7XG4gICAgaWYgKHR5cGVvZiBvYnMuc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb3ZpZGVkIG9iamVjdCBkb2VzIG5vdCBjb3JyZWN0bHkgaW1wbGVtZW50IFN5bWJvbC5vYnNlcnZhYmxlJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gb2JzLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICB9XG59OyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Vic2NyaWJlVG9PYnNlcnZhYmxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGhvc3RSZXBvcnRFcnJvcl8xID0gcmVxdWlyZShcIi4vaG9zdFJlcG9ydEVycm9yXCIpO1xuZXhwb3J0cy5zdWJzY3JpYmVUb1Byb21pc2UgPSBmdW5jdGlvbiAocHJvbWlzZSkgeyByZXR1cm4gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICghc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoZXJyKSB7IHJldHVybiBzdWJzY3JpYmVyLmVycm9yKGVycik7IH0pXG4gICAgICAgIC50aGVuKG51bGwsIGhvc3RSZXBvcnRFcnJvcl8xLmhvc3RSZXBvcnRFcnJvcik7XG4gICAgcmV0dXJuIHN1YnNjcmliZXI7XG59OyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Vic2NyaWJlVG9Qcm9taXNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIElubmVyU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL0lubmVyU3Vic2NyaWJlclwiKTtcbnZhciBzdWJzY3JpYmVUb18xID0gcmVxdWlyZShcIi4vc3Vic2NyaWJlVG9cIik7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL09ic2VydmFibGVcIik7XG5mdW5jdGlvbiBzdWJzY3JpYmVUb1Jlc3VsdChvdXRlclN1YnNjcmliZXIsIHJlc3VsdCwgb3V0ZXJWYWx1ZSwgb3V0ZXJJbmRleCwgaW5uZXJTdWJzY3JpYmVyKSB7XG4gICAgaWYgKGlubmVyU3Vic2NyaWJlciA9PT0gdm9pZCAwKSB7IGlubmVyU3Vic2NyaWJlciA9IG5ldyBJbm5lclN1YnNjcmliZXJfMS5Jbm5lclN1YnNjcmliZXIob3V0ZXJTdWJzY3JpYmVyLCBvdXRlclZhbHVlLCBvdXRlckluZGV4KTsgfVxuICAgIGlmIChpbm5lclN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0LnN1YnNjcmliZShpbm5lclN1YnNjcmliZXIpO1xuICAgIH1cbiAgICByZXR1cm4gc3Vic2NyaWJlVG9fMS5zdWJzY3JpYmVUbyhyZXN1bHQpKGlubmVyU3Vic2NyaWJlcik7XG59XG5leHBvcnRzLnN1YnNjcmliZVRvUmVzdWx0ID0gc3Vic2NyaWJlVG9SZXN1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdWJzY3JpYmVUb1Jlc3VsdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vU3Vic2NyaWJlclwiKTtcbnZhciByeFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9zeW1ib2wvcnhTdWJzY3JpYmVyXCIpO1xudmFyIE9ic2VydmVyXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2ZXJcIik7XG5mdW5jdGlvbiB0b1N1YnNjcmliZXIobmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgIGlmIChuZXh0T3JPYnNlcnZlcikge1xuICAgICAgICBpZiAobmV4dE9yT2JzZXJ2ZXIgaW5zdGFuY2VvZiBTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIG5leHRPck9ic2VydmVyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXh0T3JPYnNlcnZlcltyeFN1YnNjcmliZXJfMS5yeFN1YnNjcmliZXJdKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dE9yT2JzZXJ2ZXJbcnhTdWJzY3JpYmVyXzEucnhTdWJzY3JpYmVyXSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghbmV4dE9yT2JzZXJ2ZXIgJiYgIWVycm9yICYmICFjb21wbGV0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKE9ic2VydmVyXzEuZW1wdHkpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpO1xufVxuZXhwb3J0cy50b1N1YnNjcmliZXIgPSB0b1N1YnNjcmliZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10b1N1YnNjcmliZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5pc0RlYnVnID0gZXhwb3J0cy5ERUJVRyA9IGV4cG9ydHMuVVBEQVRFX0lOVEVSVkFMID0gZXhwb3J0cy5QT1JUID0gZXhwb3J0cy5JUCA9IHZvaWQgMDtcclxuZXhwb3J0cy5JUCA9IFwiMTkyLjE2OC4wLjc1XCI7IC8vIFwibG9jYWxob3N0XCI7IC8vIFwiMTkyLjE2OC4wLjc1XCI7XHJcbmV4cG9ydHMuUE9SVCA9IFwiODA4MFwiO1xyXG5leHBvcnRzLlVQREFURV9JTlRFUlZBTCA9IDYwOyAvLyBtaWxsaXNlY29uZHNcclxuZXhwb3J0cy5ERUJVRyA9IGZhbHNlO1xyXG5leHBvcnRzLmlzRGVidWcgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBleHBvcnRzLkRFQlVHOyB9O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9zZXJ2aWNlcy9iYWNrZW5kXCIpO1xyXG5yZXF1aXJlKFwiLi9zZXJ2aWNlcy9jaGFubmVsXCIpO1xyXG5yZXF1aXJlKFwiLi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uXCIpO1xyXG5yZXF1aXJlKFwiLi9zZXJ2aWNlcy9pbml0XCIpO1xyXG5yZXF1aXJlKFwiLi9zZXJ2aWNlcy9tZWRpYVwiKTtcclxucmVxdWlyZShcIi4vc2VydmljZXMvc3RhdGVcIik7XHJcbnJlcXVpcmUoXCIuL3NlcnZpY2VzL3VuaXR5XCIpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5Ccm9hZGNhc3RpbmdBZ2VudCA9IHZvaWQgMDtcclxudmFyIGZpbHRlcl8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvb3BlcmF0b3JzL2ZpbHRlclwiKTtcclxudmFyIFN1YmplY3RfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL1N1YmplY3RcIik7XHJcbnZhciBjb25zdF8xID0gcmVxdWlyZShcIi4uL2NvbnN0XCIpO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcclxudmFyIEJyb2FkY2FzdGluZ0FnZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQnJvYWRjYXN0aW5nQWdlbnQoaWQsIGNvbW11bmljYXRpb25DaGFubmVsKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoaWQgPT09IHZvaWQgMCkgeyBpZCA9IHV0aWxzXzEuZ2VuZXJhdGVJZCg0LCA0KTsgfVxyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICAvLyBQYXJ0aWNpcGFudHNcclxuICAgICAgICB0aGlzLnBhcnRpY2lwYW50cyA9IFtdO1xyXG4gICAgICAgIC8vIFN1YmplY3RzXHJcbiAgICAgICAgdGhpcy5hZGRQYXJ0aWNpcGFudFN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuICAgICAgICB0aGlzLnJlbW92ZVBhcnRpY2lwYW50U3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4gICAgICAgIC8vIE91dHB1dFxyXG4gICAgICAgIHRoaXMuRGVidWdTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4gICAgICAgIC8vIE1lc3NhZ2luZyBVdGlsc1xyXG4gICAgICAgIHRoaXMuZ2V0Q29tbVN1YmplY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5jb21tU3ViamVjdC5waXBlKGZpbHRlcl8xLmZpbHRlcihmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfaWQgPSBfYS5pZDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfaWQgIT09IF90aGlzLmlkO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdldEluZGl2aWR1YWxNZXNzYWdlQ29tbVN1YmplY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5nZXRDb21tU3ViamVjdCgpLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvID0gX2EudG87XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG8gPT09IF90aGlzLmlkO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KG1lc3NhZ2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZW5kSW5kaXZpZHVhbFJlcXVlc3QgPSBmdW5jdGlvbiAoZGF0YSwgdG8pIHtcclxuICAgICAgICAgICAgX3RoaXMuY29tbVN1YmplY3QubmV4dCh7XHJcbiAgICAgICAgICAgICAgICBpZDogX3RoaXMuaWQsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImluZGl2aWR1YWxcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICB0bzogdG8sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gUGFydGljaXBhbnRzXHJcbiAgICAgICAgdGhpcy5hZGRQYXJ0aWNpcGFudCA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICBfdGhpcy5wYXJ0aWNpcGFudHMucHVzaChpZCk7XHJcbiAgICAgICAgICAgIF90aGlzLmFkZFBhcnRpY2lwYW50U3ViamVjdC5uZXh0KGlkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucmVtb3ZlUGFydGljaXBhbnQgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgdmFyIHBhcnRpY2lwYW50cyA9IF90aGlzLmdldFBhcnRpY2lwYW50cygpO1xyXG4gICAgICAgICAgICBwYXJ0aWNpcGFudHMgPSBwYXJ0aWNpcGFudHMuZmlsdGVyKGZ1bmN0aW9uIChfaWQpIHsgcmV0dXJuIF9pZCAhPT0gaWQ7IH0pO1xyXG4gICAgICAgICAgICBfdGhpcy5yZW1vdmVQYXJ0aWNpcGFudFN1YmplY3QubmV4dChpZCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdldFBhcnRpY2lwYW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHBhcnRpY2lwYW50cyA9IF9fc3ByZWFkQXJyYXlzKF90aGlzLnBhcnRpY2lwYW50cyk7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJ0aWNpcGFudHM7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBTYWx1dGF0aW9uc1xyXG4gICAgICAgIHRoaXMuZ3JlZXRpbmdIYW5kbGVyID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KFwiQnJvYWRjYXN0IFRlc3QgIzJcIik7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IG1lc3NhZ2UuaWQsIHR5cGUgPSBtZXNzYWdlLnR5cGU7XHJcbiAgICAgICAgICAgIHZhciBwYXJ0aWNpcGFudHMgPSBfdGhpcy5nZXRQYXJ0aWNpcGFudHMoKTtcclxuICAgICAgICAgICAgaWYgKHR5cGUgIT09IFwiZ3JlZXRpbmdcIilcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KFwiQnJvYWRjYXN0IFRlc3QgIzNcIik7XHJcbiAgICAgICAgICAgIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChbXCJHcmVldGluZ1wiLCBtZXNzYWdlXSk7XHJcbiAgICAgICAgICAgIGlmIChwYXJ0aWNpcGFudHMuaW5jbHVkZXMoaWQpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBfdGhpcy5EZWJ1Z1N1YmplY3RfLm5leHQoXCJJRDogXCIgKyBfdGhpcy5pZCArIFwiLCBBZGQgUGFydGljaXBhbnRcIik7XHJcbiAgICAgICAgICAgIF90aGlzLmFkZFBhcnRpY2lwYW50KGlkKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChfdGhpcy5zZW5kR3JlZXRpbmcsIDEwMDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5mYXJld2VsbEhhbmRsZXIgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICB2YXIgaWQgPSBtZXNzYWdlLmlkLCB0eXBlID0gbWVzc2FnZS50eXBlO1xyXG4gICAgICAgICAgICB2YXIgcGFydGljaXBhbnRzID0gX3RoaXMuZ2V0UGFydGljaXBhbnRzKCk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlICE9PSBcImZhcmV3ZWxsXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGlmIChwYXJ0aWNpcGFudHMuaW5jbHVkZXMoaWQpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBfdGhpcy5yZW1vdmVQYXJ0aWNpcGFudChpZCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNlbmRHcmVldGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuY29tbVN1YmplY3QubmV4dCh7XHJcbiAgICAgICAgICAgICAgICBpZDogX3RoaXMuaWQsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImdyZWV0aW5nXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNlbmRGYXJld2VsbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuY29tbVN1YmplY3QubmV4dCh7XHJcbiAgICAgICAgICAgICAgICBpZDogX3RoaXMuaWQsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImZhcmV3ZWxsXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvbW1TdWJqZWN0ID0gY29tbXVuaWNhdGlvbkNoYW5uZWw7XHJcbiAgICAgICAgdGhpcy5EZWJ1Z1N1YmplY3RfLm5leHQoXCJCcm9hZGNhc3QgVGVzdCAjMVwiKTtcclxuICAgICAgICB0aGlzLkRlYnVnU3ViamVjdF8ubmV4dChbXCJCcm9hZGNhc3QgVGVzdCAjNFwiLCBjb21tdW5pY2F0aW9uQ2hhbm5lbF0pO1xyXG4gICAgICAgIHRoaXMuY29tbVN1YmplY3Quc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5EZWJ1Z1N1YmplY3RfLm5leHQoW1wiQnJvYWRjYXN0IFRlc3QgIzVcIiwgbV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZ2V0Q29tbVN1YmplY3QoKS5zdWJzY3JpYmUoZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChbXCJCcm9hZGNhc3QgVGVzdCAjNlwiLCBtXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5nZXRDb21tU3ViamVjdCgpLnN1YnNjcmliZSh0aGlzLm1lc3NhZ2VIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLmdldENvbW1TdWJqZWN0KCkuc3Vic2NyaWJlKHRoaXMuZ3JlZXRpbmdIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLkRlYnVnU3ViamVjdF8ucGlwZShmaWx0ZXJfMS5maWx0ZXIoY29uc3RfMS5pc0RlYnVnKSkuc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oXCJCcm9hZGNhc3Q6IFwiLCBtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBCcm9hZGNhc3RpbmdBZ2VudDtcclxufSgpKTtcclxuZXhwb3J0cy5Ccm9hZGNhc3RpbmdBZ2VudCA9IEJyb2FkY2FzdGluZ0FnZW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkNsaWVudCA9IHZvaWQgMDtcclxudmFyIEJlaGF2aW9yU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0XCIpO1xyXG52YXIgZmlsdGVyXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZmlsdGVyXCIpO1xyXG52YXIgU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvU3ViamVjdFwiKTtcclxudmFyIGNvbnN0XzEgPSByZXF1aXJlKFwiLi4vY29uc3RcIik7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xyXG52YXIgYnJvYWRjYXN0XzEgPSByZXF1aXJlKFwiLi9icm9hZGNhc3RcIik7XHJcbnZhciBjb25uZWN0aW9uX21hbmFnZXJfMSA9IHJlcXVpcmUoXCIuL2Nvbm5lY3Rpb24tbWFuYWdlclwiKTtcclxudmFyIHJ0Y19tZXNzYWdpbmdfYWdlbnRfMSA9IHJlcXVpcmUoXCIuL3J0Yy1tZXNzYWdpbmctYWdlbnRcIik7XHJcbnZhciBDbGllbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDbGllbnQoc3ViamVjdCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zdWJqZWN0ID0gc3ViamVjdDtcclxuICAgICAgICB0aGlzLmlkID0gdXRpbHNfMS5nZW5lcmF0ZUlkKDQsIDQpO1xyXG4gICAgICAgIC8vIENoYW5uZWxzXHJcbiAgICAgICAgdGhpcy5kYXRhQ2hhbm5lbHMgPSB7fTtcclxuICAgICAgICB0aGlzLnN0cmVhbXMgPSB7fTtcclxuICAgICAgICAvLyBTdWJqZWN0c1xyXG4gICAgICAgIC8vIElucHV0XHJcbiAgICAgICAgdGhpcy5fTG9jYWxNZWRpYVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xyXG4gICAgICAgIC8vIE91dHB1dFxyXG4gICAgICAgIHRoaXMuT25EYXRhQ2hhbm5lbE1lc3NhZ2VTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4gICAgICAgIHRoaXMuT25EYXRhQ2hhbm5lbFN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5PblN0cmVhbVN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5EZWJ1Z1N1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbiAgICAgICAgLy8gQ29ubmVjdGlvblxyXG4gICAgICAgIHRoaXMub25Db25uZWN0aW9uQ3JlYXRlZEhhbmRsZXIgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICB2YXIgaWQgPSBtZXNzYWdlWzBdLCBjb25uZWN0aW9uID0gbWVzc2FnZVsxXTtcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5vbmRhdGFjaGFubmVsID0gX3RoaXMub25EYXRhQ2hhbm5lbEhhbmRsZXIoaWQpO1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLm9udHJhY2sgPSBfdGhpcy5vblRyYWNrSGFuZGxlcihpZCk7XHJcbiAgICAgICAgICAgIF90aGlzLmFkZERhdGFDaGFubmVsVG9Db25uZWN0aW9uKGlkLCBjb25uZWN0aW9uKTtcclxuICAgICAgICAgICAgdmFyIHN0cmVhbSA9IF90aGlzLl9Mb2NhbE1lZGlhU3ViamVjdC5nZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICBpZiAoIXN0cmVhbSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgX3RoaXMuYWRkU3RyZWFtVG9Db25uZWN0aW9uKHN0cmVhbSwgY29ubmVjdGlvbik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uQ29ubmVjdGVkID0gZnVuY3Rpb24gKGlkLCBjb25uZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ub25jb25uZWN0aW9uc3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgICAgIGlmIChjb25uZWN0aW9uLmNvbm5lY3Rpb25TdGF0ZSA9PT0gXCJjb25uZWN0ZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChcIkNvbm5lY3Rpb24gXCIgKyBpZCArIFwiLCBOb3cgQ29ubmVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc09mZmVyID0gKChfYSA9IGNvbm5lY3Rpb24ubG9jYWxEZXNjcmlwdGlvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnR5cGUpID09PSBcIm9mZmVyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT2ZmZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIFN0cmVhbVxyXG4gICAgICAgIHRoaXMub25Mb2NhbFN0cmVhbUhhbmRsZXIgPSBmdW5jdGlvbiAoc3RyZWFtKSB7XHJcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9ucyA9IF90aGlzLkNvbm5lY3Rpb25NYW5hZ2VyLmNvbm5lY3Rpb25zO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZCBpbiBjb25uZWN0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuYWRkU3RyZWFtVG9Db25uZWN0aW9uKHN0cmVhbSwgY29ubmVjdGlvbnNbaWRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hZGRTdHJlYW1Ub0Nvbm5lY3Rpb24gPSBmdW5jdGlvbiAoc3RyZWFtLCBjb25uZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7IHJldHVybiBjb25uZWN0aW9uLmFkZFRyYWNrKHQsIHN0cmVhbSk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hZGRTdHJlYW0gPSBmdW5jdGlvbiAoaWQsIHN0cmVhbSkge1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLnN0cmVhbXNbaWRdKVxyXG4gICAgICAgICAgICAgICAgX3RoaXMuc3RyZWFtc1tpZF0gPSBbXTtcclxuICAgICAgICAgICAgX3RoaXMuc3RyZWFtc1tpZF0ucHVzaChzdHJlYW0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vblRyYWNrSGFuZGxlciA9IGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChcIklEOiBcIiArIGlkICsgXCIsIE9uIFRyYWNrIEhhbmRsZXJcIik7XHJcbiAgICAgICAgICAgIHZhciBzdHJlYW0gPSBldi5zdHJlYW1zWzBdO1xyXG4gICAgICAgICAgICBfdGhpcy5hZGRTdHJlYW0oaWQsIHN0cmVhbSk7XHJcbiAgICAgICAgICAgIF90aGlzLk9uU3RyZWFtU3ViamVjdF8ubmV4dChbaWQsIHN0cmVhbV0pO1xyXG4gICAgICAgIH07IH07XHJcbiAgICAgICAgLy8gRGF0YSBDaGFubmVsXHJcbiAgICAgICAgdGhpcy5hZGREYXRhQ2hhbm5lbFRvQ29ubmVjdGlvbiA9IGZ1bmN0aW9uIChpZCwgY29ubmVjdGlvbikge1xyXG4gICAgICAgICAgICAvLyBEYXRhIENoYW5uZWxcclxuICAgICAgICAgICAgdmFyIGRhdGFDaGFubmVsID0gY29ubmVjdGlvbi5jcmVhdGVEYXRhQ2hhbm5lbChcImRhdGEtY2hhbm5lbC1cIiArIGlkKTtcclxuICAgICAgICAgICAgZGF0YUNoYW5uZWwub25vcGVuID0gZnVuY3Rpb24gKGV2KSB7IHJldHVybiBfdGhpcy5EZWJ1Z1N1YmplY3RfLm5leHQoXCJPcGVuZWQgQ2hhbm5lbFwiKTsgfTtcclxuICAgICAgICAgICAgZGF0YUNoYW5uZWwub25lcnJvciA9IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KEpTT04uc3RyaW5naWZ5KGV2KSk7IH07XHJcbiAgICAgICAgICAgIF90aGlzLmRhdGFDaGFubmVsc1tpZF0gPSBkYXRhQ2hhbm5lbDtcclxuICAgICAgICAgICAgZGF0YUNoYW5uZWwub25tZXNzYWdlID0gX3RoaXMub25EYXRhQ2hhbm5lbE1lc3NhZ2VIYW5kbGVyKGlkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2VuZERhdGFUb0NoYW5uZWwgPSBmdW5jdGlvbiAoaWQsIG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdmFyIGNoYW5uZWwgPSBfdGhpcy5kYXRhQ2hhbm5lbHNbaWRdO1xyXG4gICAgICAgICAgICBpZiAoIWNoYW5uZWwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNoYW5uZWwuc2VuZChtZXNzYWdlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYnJvYWRjYXN0RGF0YSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHZhciBjaGFubmVscyA9IF90aGlzLmRhdGFDaGFubmVscztcclxuICAgICAgICAgICAgZm9yICh2YXIgaWQgaW4gY2hhbm5lbHMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGFubmVsID0gY2hhbm5lbHNbaWRdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzT3BlbiA9IGNoYW5uZWwucmVhZHlTdGF0ZSA9PT0gXCJvcGVuXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNoYW5uZWwgfHwgIWlzT3BlbilcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNoYW5uZWwuc2VuZChtZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vbkRhdGFDaGFubmVsSGFuZGxlciA9IGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChcIklEOiBcIiArIGlkICsgXCIsIE9uIERhdGEgQ2hhbm5lbCBIYW5kbGVyXCIpO1xyXG4gICAgICAgICAgICB2YXIgZGF0YUNoYW5uZWwgPSBldi5jaGFubmVsO1xyXG4gICAgICAgICAgICBpZiAoIWRhdGFDaGFubmVsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBkYXRhQ2hhbm5lbC5vbm1lc3NhZ2UgPSBfdGhpcy5vbkRhdGFDaGFubmVsTWVzc2FnZUhhbmRsZXIoaWQpO1xyXG4gICAgICAgICAgICBfdGhpcy5kYXRhQ2hhbm5lbHNbaWRdID0gZGF0YUNoYW5uZWw7XHJcbiAgICAgICAgICAgIF90aGlzLk9uRGF0YUNoYW5uZWxTdWJqZWN0Xy5uZXh0KFtpZCwgZGF0YUNoYW5uZWxdKTtcclxuICAgICAgICB9OyB9O1xyXG4gICAgICAgIHRoaXMub25EYXRhQ2hhbm5lbE1lc3NhZ2VIYW5kbGVyID0gZnVuY3Rpb24gKGlkKSB7IHJldHVybiBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBldi5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoIW1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIF90aGlzLk9uRGF0YUNoYW5uZWxNZXNzYWdlU3ViamVjdF8ubmV4dChbaWQsIG1lc3NhZ2VdKTtcclxuICAgICAgICB9OyB9O1xyXG4gICAgICAgIHRoaXMub25EYXRhQ2hhbm5lbE1lc3NhZ2VTdWJqZWN0SGFuZGxlciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChtZXNzYWdlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEFnZW50c1xyXG4gICAgICAgIHRoaXMuQnJvYWRjYXN0aW5nQWdlbnQgPSBuZXcgYnJvYWRjYXN0XzEuQnJvYWRjYXN0aW5nQWdlbnQodGhpcy5pZCwgdGhpcy5zdWJqZWN0KTtcclxuICAgICAgICB0aGlzLlJUQ01lc3NhZ2luZ0FnZW50ID0gbmV3IHJ0Y19tZXNzYWdpbmdfYWdlbnRfMS5SVENNZXNzYWdpbmdBZ2VudCh0aGlzLkJyb2FkY2FzdGluZ0FnZW50KTtcclxuICAgICAgICB0aGlzLkNvbm5lY3Rpb25NYW5hZ2VyID0gbmV3IGNvbm5lY3Rpb25fbWFuYWdlcl8xLkNvbm5lY3Rpb25NYW5hZ2VyKHRoaXMuUlRDTWVzc2FnaW5nQWdlbnQpO1xyXG4gICAgICAgIHRoaXMuT25EYXRhQ2hhbm5lbE1lc3NhZ2VTdWJqZWN0Xy5zdWJzY3JpYmUodGhpcy5vbkRhdGFDaGFubmVsTWVzc2FnZVN1YmplY3RIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLkNvbm5lY3Rpb25NYW5hZ2VyLk9uQ29ubmVjdGlvbkNyZWF0ZWRTdWJqZWN0LnN1YnNjcmliZSh0aGlzLm9uQ29ubmVjdGlvbkNyZWF0ZWRIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLl9Mb2NhbE1lZGlhU3ViamVjdC5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KFwiQ2xpZW50IC0+IExvY2FsTWVkaWFTdWJqZWN0XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuQnJvYWRjYXN0aW5nQWdlbnQuc2VuZEdyZWV0aW5nKCk7XHJcbiAgICAgICAgdGhpcy5EZWJ1Z1N1YmplY3RfLm5leHQoW1wiQ2xpZW50XCIsIHRoaXNdKTtcclxuICAgICAgICB0aGlzLkRlYnVnU3ViamVjdF8ucGlwZShmaWx0ZXJfMS5maWx0ZXIoY29uc3RfMS5pc0RlYnVnKSkuc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oXCJDbGllbnQ6IFwiLCBtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIENsaWVudC5jcmVhdGVDbGllbnQgPSBmdW5jdGlvbiAoc3ViamVjdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50KHN1YmplY3QpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDbGllbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ2xpZW50ID0gQ2xpZW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkNvbm5lY3Rpb25NYW5hZ2VyID0gdm9pZCAwO1xyXG52YXIgZmlsdGVyXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZmlsdGVyXCIpO1xyXG52YXIgU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvU3ViamVjdFwiKTtcclxudmFyIGNvbnN0XzEgPSByZXF1aXJlKFwiLi4vY29uc3RcIik7XHJcbnZhciBjb25maWd1cmF0aW9uID0ge1xyXG4gICAgaWNlU2VydmVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsczogW1xyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4ubC5nb29nbGUuY29tOjE5MzAyXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bjEubC5nb29nbGUuY29tOjE5MzAyXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bjIubC5nb29nbGUuY29tOjE5MzAyXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bjMubC5nb29nbGUuY29tOjE5MzAyXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bjQubC5nb29nbGUuY29tOjE5MzAyXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bjAxLnNpcHBob25lLmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4uZWtpZ2EubmV0XCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bi5md2RuZXQubmV0XCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bi5pZGVhc2lwLmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4uaXB0ZWwub3JnXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bi5yaXh0ZWxlY29tLnNlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bi5zY2hsdW5kLmRlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bnNlcnZlci5vcmdcIixcclxuICAgICAgICAgICAgICAgIFwic3R1bjpzdHVuLnNvZnRqb3lzLmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHVuOnN0dW4udm9pcGFyb3VuZC5jb21cIixcclxuICAgICAgICAgICAgICAgIFwic3R1bjpzdHVuLnZvaXBidXN0ZXIuY29tXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bi52b2lwc3R1bnQuY29tXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bi52b3hncmF0aWEub3JnXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0dW46c3R1bi54dGVuLmNvbVwiLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG59O1xyXG52YXIgQ29ubmVjdGlvbk1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb25uZWN0aW9uTWFuYWdlcihtYSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5tYSA9IG1hO1xyXG4gICAgICAgIC8vIENvbm5lY3Rpb25zXHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucyA9IHt9O1xyXG4gICAgICAgIC8vIFN1YmplY3RzXHJcbiAgICAgICAgdGhpcy5PbkRhdGFDaGFubmVsU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4gICAgICAgIHRoaXMuT25Db25uZWN0aW9uQ3JlYXRlZFN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuICAgICAgICB0aGlzLkRlYnVnU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUNvbm5lY3Rpb24gPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgdmFyIF9pZCA9IF90aGlzLm1hLmJyb2FkY2FzdGluZ0FnZW50LmlkO1xyXG4gICAgICAgICAgICBfdGhpcy5EZWJ1Z1N1YmplY3RfLm5leHQoXCJJRDogXCIgKyBpZCArIFwiLCBDcmVhdGUgQ29ubmVjdGlvbiBpbiBcIiArIF90aGlzLm1hLmJyb2FkY2FzdGluZ0FnZW50LmlkKTtcclxuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSBuZXcgUlRDUGVlckNvbm5lY3Rpb24oY29uZmlndXJhdGlvbik7XHJcbiAgICAgICAgICAgIF90aGlzLmNvbm5lY3Rpb25zW2lkXSA9IGNvbm5lY3Rpb247XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ub25pY2VjYW5kaWRhdGUgPSBfdGhpcy5vbklDRUNhbmRpZGF0ZUhhbmRsZXIoaWQpO1xyXG4gICAgICAgICAgICBfdGhpcy5PbkNvbm5lY3Rpb25DcmVhdGVkU3ViamVjdC5uZXh0KFtpZCwgY29ubmVjdGlvbl0pO1xyXG4gICAgICAgICAgICByZXR1cm4gY29ubmVjdGlvbjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEFkZC9SZW1vdmUgUGFydGljaXBhbnRzXHJcbiAgICAgICAgdGhpcy5vbkFkZFBhcnRpY2lwYW50SGFuZGxlciA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICBfdGhpcy5EZWJ1Z1N1YmplY3RfLm5leHQoX3RoaXMubWEuYnJvYWRjYXN0aW5nQWdlbnQuaWQgKyBcIiBPbiBBZGQgUGFydGljaXBhbnQgSGFuZGxlclwiKTtcclxuICAgICAgICAgICAgdmFyIG9sZENvbm5lY3Rpb24gPSBfdGhpcy5jb25uZWN0aW9uc1tpZF07XHJcbiAgICAgICAgICAgIGlmIChvbGRDb25uZWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbiA9IF90aGlzLmNyZWF0ZUNvbm5lY3Rpb24oaWQpO1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAuY3JlYXRlT2ZmZXIoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oX3RoaXMubWEub25PZmZlckNyZWF0ZWRIYW5kbGVyKGlkKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KFtcIkNvdWxkbid0IGNyZWF0ZSBvZmZlciBmb3IgaWQgXCIgKyBpZCwgZV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub25SZW1vdmVQYXJ0aWNpcGFudEhhbmRsZXIgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgZGVsZXRlIF90aGlzLmNvbm5lY3Rpb25zW2lkXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIFNlc3Npb24gRGVzY3JpcHRpb25cclxuICAgICAgICB0aGlzLm9uU2V0TG9jYWxEZXNjcmlwdGlvbkhhbmRsZXIgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICB2YXIgaWQgPSBtZXNzYWdlWzBdLCBzZXNzaW9uRGVzY3JpcHRpb24gPSBtZXNzYWdlWzFdO1xyXG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbiA9IF90aGlzLmNvbm5lY3Rpb25zW2lkXTtcclxuICAgICAgICAgICAgaWYgKCFjb25uZWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnNldExvY2FsRGVzY3JpcHRpb24oc2Vzc2lvbkRlc2NyaXB0aW9uKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub25TZXRSZW1vdGVEZXNjcmlwdGlvbkhhbmRsZXIgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICB2YXIgaWQgPSBtZXNzYWdlWzBdLCBzZXNzaW9uRGVzY3JpcHRpb24gPSBtZXNzYWdlWzFdO1xyXG4gICAgICAgICAgICBfdGhpcy5EZWJ1Z1N1YmplY3RfLm5leHQoXCJTZXR0aW5nIHJlbW90ZSBkZXNjcmlwdGlvbiBpbiBcIiArIF90aGlzLm1hLmJyb2FkY2FzdGluZ0FnZW50LmlkICsgXCIgZm9yIFwiICsgaWQpO1xyXG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbiA9IF90aGlzLmNvbm5lY3Rpb25zW2lkXTtcclxuICAgICAgICAgICAgaWYgKCFjb25uZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBbnN3ZXJcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24gPSBfdGhpcy5vbkNyZWF0ZUFuc3dlckhhbmRsZXIoaWQsIHNlc3Npb25EZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPZmZlclxyXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbi5zZXRSZW1vdGVEZXNjcmlwdGlvbihzZXNzaW9uRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBDb25uZWN0aW9uIExvZ2lzdGljc1xyXG4gICAgICAgIHRoaXMub25JQ0VDYW5kaWRhdGVIYW5kbGVyID0gZnVuY3Rpb24gKGlkKSB7IHJldHVybiBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KFwiSUQ6IFwiICsgaWQgKyBcIiwgT24gSUNFIENhbmRpZGF0ZSBIYW5kbGVyXCIpO1xyXG4gICAgICAgICAgICB2YXIgY2FuZGlkYXRlID0gZXYuY2FuZGlkYXRlO1xyXG4gICAgICAgICAgICBpZiAoIWNhbmRpZGF0ZSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgX3RoaXMubWEub25DYW5kaWRhdGVDcmVhdGVkSGFuZGxlcihpZCkoY2FuZGlkYXRlKTtcclxuICAgICAgICB9OyB9O1xyXG4gICAgICAgIHRoaXMub25DcmVhdGVBbnN3ZXJIYW5kbGVyID0gZnVuY3Rpb24gKGlkLCBzZXNzaW9uRGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSBfdGhpcy5jcmVhdGVDb25uZWN0aW9uKGlkKTtcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5zZXRSZW1vdGVEZXNjcmlwdGlvbihzZXNzaW9uRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAuY3JlYXRlQW5zd2VyKClcclxuICAgICAgICAgICAgICAgIC50aGVuKF90aGlzLm1hLm9uQW5zd2VyQ3JlYXRlZEhhbmRsZXIoaWQpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5EZWJ1Z1N1YmplY3RfLm5leHQoW1wiQ291bGRuJ3QgY3JlYXRlIGFuc3dlciBpbiBJRCBcIiArIGlkLCBlXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gY29ubmVjdGlvbjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub25BZGRDYW5kaWRhdGVIYW5kbGVyID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdmFyIGlkID0gbWVzc2FnZVswXSwgY2FuZGlkYXRlID0gbWVzc2FnZVsxXTtcclxuICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KFtcIkFkZCBDYW5kaWRhdGVcIiwgY2FuZGlkYXRlXSk7XHJcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9uID0gX3RoaXMuY29ubmVjdGlvbnNbaWRdO1xyXG4gICAgICAgICAgICBpZiAoIWNvbm5lY3Rpb24pXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24uYWRkSWNlQ2FuZGlkYXRlKGNhbmRpZGF0ZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1hLk9uQWRkUGFydGljaXBhbnRTdWJqZWN0LnN1YnNjcmliZSh0aGlzLm9uQWRkUGFydGljaXBhbnRIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLm1hLk9uUmVtb3ZlUGFydGljaXBhbnRTdWJqZWN0LnN1YnNjcmliZSh0aGlzLm9uUmVtb3ZlUGFydGljaXBhbnRIYW5kbGVyKTtcclxuICAgICAgICAvLyB0aGlzLm1hLk9uQ3JlYXRlQW5zd2VyU3ViamVjdC5zdWJzY3JpYmUodGhpcy5vbkNyZWF0ZUFuc3dlckhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMubWEuT25TZXRMb2NhbERlc2NyaXB0aW9uLnN1YnNjcmliZSh0aGlzLm9uU2V0TG9jYWxEZXNjcmlwdGlvbkhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMubWEuT25TZXRSZW1vdGVEZXNjcmlwdGlvbi5zdWJzY3JpYmUodGhpcy5vblNldFJlbW90ZURlc2NyaXB0aW9uSGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5tYS5PbkFkZENhbmRpZGF0ZVN1YmplY3Quc3Vic2NyaWJlKHRoaXMub25BZGRDYW5kaWRhdGVIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLkRlYnVnU3ViamVjdF8ucGlwZShmaWx0ZXJfMS5maWx0ZXIoY29uc3RfMS5pc0RlYnVnKSkuc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oXCJDb25uZWN0aW9uIE1hbmFnZXJcIiwgbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQ29ubmVjdGlvbk1hbmFnZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ29ubmVjdGlvbk1hbmFnZXIgPSBDb25uZWN0aW9uTWFuYWdlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5SVENNZXNzYWdpbmdBZ2VudCA9IHZvaWQgMDtcclxudmFyIGZpbHRlcl8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvb3BlcmF0b3JzL2ZpbHRlclwiKTtcclxudmFyIFN1YmplY3RfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL1N1YmplY3RcIik7XHJcbnZhciBjb25zdF8xID0gcmVxdWlyZShcIi4uL2NvbnN0XCIpO1xyXG52YXIgUlRDTWVzc2FnaW5nQWdlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSVENNZXNzYWdpbmdBZ2VudChicm9hZGNhc3RpbmdBZ2VudCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RpbmdBZ2VudCA9IGJyb2FkY2FzdGluZ0FnZW50O1xyXG4gICAgICAgIC8vIFN1YmplY3RzXHJcbiAgICAgICAgdGhpcy5PbkFkZFBhcnRpY2lwYW50U3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4gICAgICAgIHRoaXMuT25SZW1vdmVQYXJ0aWNpcGFudFN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuICAgICAgICB0aGlzLk9uU2V0TG9jYWxEZXNjcmlwdGlvbiA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4gICAgICAgIHRoaXMuT25TZXRSZW1vdGVEZXNjcmlwdGlvbiA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4gICAgICAgIHRoaXMuT25BZGRDYW5kaWRhdGVTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5EZWJ1Z1N1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbiAgICAgICAgLy8gQWRkL1JlbW92ZSBQYXJ0aWNpcGFudHNcclxuICAgICAgICB0aGlzLm9uQWRkUGFydGljaXBhbnRIYW5kbGVyID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIF90aGlzLk9uQWRkUGFydGljaXBhbnRTdWJqZWN0Lm5leHQoaWQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vblJlbW92ZVBhcnRpY2lwYW50SGFuZGxlciA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICBfdGhpcy5PblJlbW92ZVBhcnRpY2lwYW50U3ViamVjdC5uZXh0KGlkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIE9mZmVyXHJcbiAgICAgICAgdGhpcy5nZXRPZmZlclN1YmplY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5icm9hZGNhc3RpbmdBZ2VudFxyXG4gICAgICAgICAgICAgICAgLmdldEluZGl2aWR1YWxNZXNzYWdlQ29tbVN1YmplY3QoKVxyXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBfYS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEudHlwZSA9PT0gXCJvZmZlclwiO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uT2ZmZXJDcmVhdGVkSGFuZGxlciA9IGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gZnVuY3Rpb24gKHNlc3Npb25EZXNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICBfdGhpcy5EZWJ1Z1N1YmplY3RfLm5leHQoW1xyXG4gICAgICAgICAgICAgICAgXCJPZmZlciBmb3IgXCIgKyBpZCArIFwiIENyZWF0ZWQgaW4gXCIgKyBfdGhpcy5icm9hZGNhc3RpbmdBZ2VudC5pZCxcclxuICAgICAgICAgICAgICAgIHNlc3Npb25EZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIF90aGlzLk9uU2V0TG9jYWxEZXNjcmlwdGlvbi5uZXh0KFtpZCwgc2Vzc2lvbkRlc2NyaXB0aW9uXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2V0TG9jYWxBbmRTZW5kTWVzc2FnZSBzZW5kaW5nIG1lc3NhZ2VcIiwgc2Vzc2lvbkRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgX3RoaXMuYnJvYWRjYXN0aW5nQWdlbnQuc2VuZEluZGl2aWR1YWxSZXF1ZXN0KHNlc3Npb25EZXNjcmlwdGlvbiwgaWQpO1xyXG4gICAgICAgIH07IH07XHJcbiAgICAgICAgdGhpcy5vbk9mZmVySGFuZGxlciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IG1lc3NhZ2UuaWQsIGRhdGEgPSBtZXNzYWdlLmRhdGE7XHJcbiAgICAgICAgICAgIF90aGlzLk9uU2V0UmVtb3RlRGVzY3JpcHRpb24ubmV4dChbaWQsIGRhdGFdKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEFuc3dlclxyXG4gICAgICAgIHRoaXMuZ2V0QW5zd2VyU3ViamVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmJyb2FkY2FzdGluZ0FnZW50XHJcbiAgICAgICAgICAgICAgICAuZ2V0SW5kaXZpZHVhbE1lc3NhZ2VDb21tU3ViamVjdCgpXHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAucGlwZShmaWx0ZXJfMS5maWx0ZXIoZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IF9hLmRhdGE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS50eXBlID09PSBcImFuc3dlclwiO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uQW5zd2VyQ3JlYXRlZEhhbmRsZXIgPSBmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIGZ1bmN0aW9uIChzZXNzaW9uRGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KFtcclxuICAgICAgICAgICAgICAgIFwiQW5zd2VyIGZvciBcIiArIGlkICsgXCIgQ3JlYXRlZCBpbiBcIiArIF90aGlzLmJyb2FkY2FzdGluZ0FnZW50LmlkLFxyXG4gICAgICAgICAgICAgICAgc2Vzc2lvbkRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgX3RoaXMuT25TZXRMb2NhbERlc2NyaXB0aW9uLm5leHQoW2lkLCBzZXNzaW9uRGVzY3JpcHRpb25dKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZXRMb2NhbEFuZFNlbmRNZXNzYWdlIHNlbmRpbmcgbWVzc2FnZVwiLCBzZXNzaW9uRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICBfdGhpcy5icm9hZGNhc3RpbmdBZ2VudC5zZW5kSW5kaXZpZHVhbFJlcXVlc3Qoc2Vzc2lvbkRlc2NyaXB0aW9uLCBpZCk7XHJcbiAgICAgICAgfTsgfTtcclxuICAgICAgICB0aGlzLm9uQW5zd2VySGFuZGxlciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IG1lc3NhZ2UuaWQsIGRhdGEgPSBtZXNzYWdlLmRhdGE7XHJcbiAgICAgICAgICAgIF90aGlzLk9uU2V0UmVtb3RlRGVzY3JpcHRpb24ubmV4dChbaWQsIGRhdGFdKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIENhbmRpZGF0ZVxyXG4gICAgICAgIHRoaXMuZ2V0Q2FuZGlkYXRlU3ViamVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmJyb2FkY2FzdGluZ0FnZW50XHJcbiAgICAgICAgICAgICAgICAuZ2V0SW5kaXZpZHVhbE1lc3NhZ2VDb21tU3ViamVjdCgpXHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAucGlwZShmaWx0ZXJfMS5maWx0ZXIoZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IF9hLmRhdGE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS50eXBlID09PSBcImNhbmRpZGF0ZVwiO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uQ2FuZGlkYXRlSGFuZGxlciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IG1lc3NhZ2UuaWQsIGRhdGEgPSBtZXNzYWdlLmRhdGE7XHJcbiAgICAgICAgICAgIHZhciBjYW5kaWRhdGUgPSBuZXcgUlRDSWNlQ2FuZGlkYXRlKHtcclxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIHNkcE1MaW5lSW5kZXg6IGRhdGEubGFiZWwsXHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBjYW5kaWRhdGU6IGRhdGEuY2FuZGlkYXRlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgX3RoaXMuT25BZGRDYW5kaWRhdGVTdWJqZWN0Lm5leHQoW2lkLCBjYW5kaWRhdGVdKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlSWNlQ2FuZGlkYXRlID0gZnVuY3Rpb24gKGlkKSB7IHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpY2VjYW5kaWRhdGUgZXZlbnQ6IFwiLCBldmVudCk7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5jYW5kaWRhdGUpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmJyb2FkY2FzdGluZ0FnZW50LnNlbmRJbmRpdmlkdWFsUmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJjYW5kaWRhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogZXZlbnQuY2FuZGlkYXRlLnNkcE1MaW5lSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGV2ZW50LmNhbmRpZGF0ZS5zZHBNaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuZGlkYXRlOiBldmVudC5jYW5kaWRhdGUuY2FuZGlkYXRlLFxyXG4gICAgICAgICAgICAgICAgfSwgaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbmQgb2YgY2FuZGlkYXRlcy5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9OyB9O1xyXG4gICAgICAgIHRoaXMub25DYW5kaWRhdGVDcmVhdGVkSGFuZGxlciA9IGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gZnVuY3Rpb24gKGNhbmRpZGF0ZSkge1xyXG4gICAgICAgICAgICBfdGhpcy5icm9hZGNhc3RpbmdBZ2VudC5zZW5kSW5kaXZpZHVhbFJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJjYW5kaWRhdGVcIixcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBjYW5kaWRhdGUuc2RwTUxpbmVJbmRleCxcclxuICAgICAgICAgICAgICAgIGlkOiBjYW5kaWRhdGUuc2RwTWlkLFxyXG4gICAgICAgICAgICAgICAgY2FuZGlkYXRlOiBjYW5kaWRhdGUuY2FuZGlkYXRlLFxyXG4gICAgICAgICAgICB9LCBpZCk7XHJcbiAgICAgICAgfTsgfTtcclxuICAgICAgICB0aGlzLmJyb2FkY2FzdGluZ0FnZW50LmFkZFBhcnRpY2lwYW50U3ViamVjdC5zdWJzY3JpYmUodGhpcy5vbkFkZFBhcnRpY2lwYW50SGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RpbmdBZ2VudC5yZW1vdmVQYXJ0aWNpcGFudFN1YmplY3Quc3Vic2NyaWJlKHRoaXMub25SZW1vdmVQYXJ0aWNpcGFudEhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMuZ2V0T2ZmZXJTdWJqZWN0KCkuc3Vic2NyaWJlKHRoaXMub25PZmZlckhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMuZ2V0QW5zd2VyU3ViamVjdCgpLnN1YnNjcmliZSh0aGlzLm9uQW5zd2VySGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5nZXRDYW5kaWRhdGVTdWJqZWN0KCkuc3Vic2NyaWJlKHRoaXMub25DYW5kaWRhdGVIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLkRlYnVnU3ViamVjdF8ucGlwZShmaWx0ZXJfMS5maWx0ZXIoY29uc3RfMS5pc0RlYnVnKSkuc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oXCJSVEMtTWVzc2FnaW5nLUFnZW50OiBcIiwgbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUlRDTWVzc2FnaW5nQWdlbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUlRDTWVzc2FnaW5nQWdlbnQgPSBSVENNZXNzYWdpbmdBZ2VudDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5XZWJTb2NrZXRzQWdlbnQgPSB2b2lkIDA7XHJcbnZhciBCZWhhdmlvclN1YmplY3RfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL0JlaGF2aW9yU3ViamVjdFwiKTtcclxudmFyIGZpbHRlcl8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvb3BlcmF0b3JzL2ZpbHRlclwiKTtcclxudmFyIFN1YmplY3RfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL1N1YmplY3RcIik7XHJcbnZhciBjb25zdF8xID0gcmVxdWlyZShcIi4uL2NvbnN0XCIpO1xyXG52YXIgV2ViU29ja2V0c0FnZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV2ViU29ja2V0c0FnZW50KF9Db21tdW5pY2F0aW9uU3ViamVjdCwgQ29tbXVuaWNhdGlvblN1YmplY3RfKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9Db21tdW5pY2F0aW9uU3ViamVjdCA9IF9Db21tdW5pY2F0aW9uU3ViamVjdDtcclxuICAgICAgICB0aGlzLkNvbW11bmljYXRpb25TdWJqZWN0XyA9IENvbW11bmljYXRpb25TdWJqZWN0XztcclxuICAgICAgICAvLyBGbGFnc1xyXG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jYW5TZW5kID0gdHJ1ZTtcclxuICAgICAgICAvLyBTdWJqZWN0c1xyXG4gICAgICAgIHRoaXMuSXNXZWJTb2NrZXRSZWFkeVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuICAgICAgICB0aGlzLk9uQ2xvc2VTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5EZWJ1Z1N1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5vbklzV2ViU29ja2V0UmVhZHlIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5fQ29tbXVuaWNhdGlvblN1YmplY3RcclxuICAgICAgICAgICAgICAgIC5waXBlKGZpbHRlcl8xLmZpbHRlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2NhblNlbmQgPSBfdGhpcy5jYW5TZW5kO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5jYW5TZW5kKVxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNhblNlbmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jYW5TZW5kO1xyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnNlbmRNZXNzYWdlKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdldFVSTCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG9yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XHJcbiAgICAgICAgICAgIG9yaWdpbiA9IG9yaWdpbi5yZXBsYWNlKFwiaHR0cHNcIiwgXCJ3c3NcIikucmVwbGFjZShcImh0dHBcIiwgXCJ3c1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub25NZXNzYWdlSGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBfdGhpcy5EZWJ1Z1N1YmplY3RfLm5leHQoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcclxuICAgICAgICAgICAgX3RoaXMuY2FuU2VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBfdGhpcy5Db21tdW5pY2F0aW9uU3ViamVjdF8ubmV4dChtZXNzYWdlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub25FcnJvckhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIldTIEVycm9yOiBcIiwgZXZlbnQpO1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLndzLk9QRU4pXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5PbkNsb3NlU3ViamVjdC5uZXh0KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uT3BlbkhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLkRlYnVnU3ViamVjdF8ubmV4dChcIldTIGlzIE9wZW5cIik7XHJcbiAgICAgICAgICAgIF90aGlzLmlzT3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIF90aGlzLklzV2ViU29ja2V0UmVhZHlTdWJqZWN0Lm5leHQoX3RoaXMuaXNPcGVuKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub25DbG9zZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBfdGhpcy5PbkNsb3NlU3ViamVjdC5uZXh0KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgX3RoaXMuRGVidWdTdWJqZWN0Xy5uZXh0KG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLndzLk9QRU4pXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIF90aGlzLndzLnNlbmQobWVzc2FnZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgdXJsID0gdGhpcy5nZXRVUkwoKTtcclxuICAgICAgICB0aGlzLndzID0gbmV3IFdlYlNvY2tldCh1cmwpO1xyXG4gICAgICAgIHRoaXMud3Mub25tZXNzYWdlID0gdGhpcy5vbk1lc3NhZ2VIYW5kbGVyO1xyXG4gICAgICAgIHRoaXMud3Mub25vcGVuID0gdGhpcy5vbk9wZW5IYW5kbGVyO1xyXG4gICAgICAgIHRoaXMud3Mub25jbG9zZSA9IHRoaXMub25DbG9zZUhhbmRsZXI7XHJcbiAgICAgICAgdGhpcy53cy5vbmVycm9yID0gdGhpcy5vbkVycm9ySGFuZGxlcjtcclxuICAgICAgICB0aGlzLklzV2ViU29ja2V0UmVhZHlTdWJqZWN0LnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uIChpc1JlYWR5KSB7IHJldHVybiBpc1JlYWR5OyB9KSkuc3Vic2NyaWJlKHRoaXMub25Jc1dlYlNvY2tldFJlYWR5SGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5EZWJ1Z1N1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGNvbnN0XzEuaXNEZWJ1ZykpLnN1YnNjcmliZShmdW5jdGlvbiAobSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKFwiV2ViU29ja2V0cyBBZ2VudDogXCIsIG0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFdlYlNvY2tldHNBZ2VudDtcclxufSgpKTtcclxuZXhwb3J0cy5XZWJTb2NrZXRzQWdlbnQgPSBXZWJTb2NrZXRzQWdlbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQmFja2VuZFNlcnZpY2UgPSB2b2lkIDA7XHJcbnZhciBCZWhhdmlvclN1YmplY3RfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL0JlaGF2aW9yU3ViamVjdFwiKTtcclxudmFyIGZpbHRlcl8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvb3BlcmF0b3JzL2ZpbHRlclwiKTtcclxudmFyIFN1YmplY3RfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL1N1YmplY3RcIik7XHJcbnZhciBkZWZpbml0aW9uc18xID0gcmVxdWlyZShcIi4uLy4uL3NoYXJlZC9kZWZpbml0aW9uc1wiKTtcclxudmFyIElzSW5pdGlhbGl6ZWRTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcbi8vIEluY29taW5nXHJcbnZhciBfSW5pdFN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIF9SZWZyZXNoU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX0lEU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QobnVsbCk7XHJcbnZhciBfVXNlVFZDaGFubmVsU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX1NldE5hbWVTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbi8vIE91dGdvaW5nXHJcbnZhciBUVlByb2dyYW1TdGF0ZVN1YmplY3RfID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdCh7fSk7XHJcbnZhciBOYW1lc1N0YXRlU3ViamVjdF8gPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KHt9KTtcclxudmFyIERlYnVnU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuLy8gTWV0aG9kc1xyXG52YXIgcG9zdCA9IGZ1bmN0aW9uICh1cmwsIGRhdGEpIHtcclxuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7IHJldHVybiBEZWJ1Z1N1YmplY3RfLm5leHQoZS5tZXNzYWdlKTsgfSk7XHJcbn07XHJcbnZhciBnZXQgPSBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gRGVidWdTdWJqZWN0Xy5uZXh0KGUpOyB9KTtcclxufTtcclxudmFyIHNlbmRUVkNoYW5uZWwgPSBmdW5jdGlvbiAoaWQsIGNoYW5uZWwpIHtcclxuICAgIHJldHVybiBwb3N0KGRlZmluaXRpb25zXzEuVVJMX1RWX0NIQU5ORUwsIHtcclxuICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgY2hhbm5lbDogY2hhbm5lbCxcclxuICAgIH0pO1xyXG59O1xyXG52YXIgZ2V0TmFtZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gZ2V0KGRlZmluaXRpb25zXzEuVVJMX05BTUUpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBpZiAoIWRhdGEpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgbmFtZXMgPSBkYXRhO1xyXG4gICAgICAgIE5hbWVzU3RhdGVTdWJqZWN0Xy5uZXh0KG5hbWVzKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgc2VuZE5hbWUgPSBmdW5jdGlvbiAoaWQsIG5hbWUpIHtcclxuICAgIHJldHVybiBwb3N0KGRlZmluaXRpb25zXzEuVVJMX05BTUUsIHtcclxuICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgbmFtZTogbmFtZSxcclxuICAgIH0pO1xyXG59O1xyXG52YXIgZ2V0VFZQcm9ncmFtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGdldChkZWZpbml0aW9uc18xLlVSTF9UVl9DSEFOTkVMKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgaWYgKCFkYXRhKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdmFyIHByb2dyYW0gPSBkYXRhO1xyXG4gICAgICAgIFRWUHJvZ3JhbVN0YXRlU3ViamVjdF8ubmV4dChwcm9ncmFtKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgb25DaGFubmVsSGFuZGxlciA9IGZ1bmN0aW9uIChjaGFubmVsKSB7XHJcbiAgICB2YXIgaWQgPSBfSURTdWJqZWN0LmdldFZhbHVlKCk7XHJcbiAgICBpZiAoIWlkKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIHNlbmRUVkNoYW5uZWwoaWQsIGNoYW5uZWwpO1xyXG59O1xyXG52YXIgb25SZWZyZXNoSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGdldFRWUHJvZ3JhbSgpO1xyXG4gICAgZ2V0TmFtZXMoKTtcclxufTtcclxuLy8gU3Vic2NyaXB0aW9uc1xyXG5fSW5pdFN1YmplY3Quc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIElzSW5pdGlhbGl6ZWRTdWJqZWN0Lm5leHQodHJ1ZSk7IH0pO1xyXG5fVXNlVFZDaGFubmVsU3ViamVjdFxyXG4gICAgLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uICgpIHsgcmV0dXJuIElzSW5pdGlhbGl6ZWRTdWJqZWN0LmdldFZhbHVlKCk7IH0pKVxyXG4gICAgLnN1YnNjcmliZShvbkNoYW5uZWxIYW5kbGVyKTtcclxuX1JlZnJlc2hTdWJqZWN0XHJcbiAgICAucGlwZShmaWx0ZXJfMS5maWx0ZXIoZnVuY3Rpb24gKCkgeyByZXR1cm4gSXNJbml0aWFsaXplZFN1YmplY3QuZ2V0VmFsdWUoKTsgfSkpXHJcbiAgICAuc3Vic2NyaWJlKG9uUmVmcmVzaEhhbmRsZXIpO1xyXG4vLyBFeHBvcnRzXHJcbnZhciBCYWNrZW5kU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJhY2tlbmRTZXJ2aWNlKCkge1xyXG4gICAgfVxyXG4gICAgLy8gSW5jb21pbmdcclxuICAgIEJhY2tlbmRTZXJ2aWNlLl9JRFNidWplY3QgPSBfSURTdWJqZWN0O1xyXG4gICAgQmFja2VuZFNlcnZpY2UuX0luaXRTdWJqZWN0ID0gX0luaXRTdWJqZWN0O1xyXG4gICAgQmFja2VuZFNlcnZpY2UuX1JlZnJlc2hTdWJqZWN0ID0gX1JlZnJlc2hTdWJqZWN0O1xyXG4gICAgQmFja2VuZFNlcnZpY2UuX1VzZVRWQ2hhbm5lbFN1YmplY3QgPSBfVXNlVFZDaGFubmVsU3ViamVjdDtcclxuICAgIEJhY2tlbmRTZXJ2aWNlLl9TZXROYW1lU3ViamVjdCA9IF9TZXROYW1lU3ViamVjdDtcclxuICAgIC8vIE91dHB1dFxyXG4gICAgQmFja2VuZFNlcnZpY2UuVFZQcm9ncmFtU3RhdGVTdWJqZWN0XyA9IFRWUHJvZ3JhbVN0YXRlU3ViamVjdF87XHJcbiAgICBCYWNrZW5kU2VydmljZS5OYW1lc1N0YXRlU3ViamVjdF8gPSBOYW1lc1N0YXRlU3ViamVjdF87XHJcbiAgICBCYWNrZW5kU2VydmljZS5EZWJ1Z1N1YmplY3RfID0gRGVidWdTdWJqZWN0XztcclxuICAgIHJldHVybiBCYWNrZW5kU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5CYWNrZW5kU2VydmljZSA9IEJhY2tlbmRTZXJ2aWNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9pbnRlZ3JhdGlvbi9jaGFubmVsXCIpO1xyXG5yZXF1aXJlKFwiLi9pbnRlZ3JhdGlvbi9zdGF0ZVwiKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNoYW5uZWxfMSA9IHJlcXVpcmUoXCIuLi8uLi9jaGFubmVsL2NoYW5uZWxcIik7XHJcbnZhciBiYWNrZW5kXzEgPSByZXF1aXJlKFwiLi4vYmFja2VuZFwiKTtcclxuYmFja2VuZF8xLkJhY2tlbmRTZXJ2aWNlLlRWUHJvZ3JhbVN0YXRlU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChwcm9ncmFtKSB7XHJcbiAgICByZXR1cm4gY2hhbm5lbF8xLkNoYW5uZWxTZXJ2aWNlLl9UVlByb2dyYW1TdWJqZWN0Lm5leHQocHJvZ3JhbSk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc3RhdGVfMSA9IHJlcXVpcmUoXCIuLi8uLi9zdGF0ZS9zdGF0ZVwiKTtcclxudmFyIGJhY2tlbmRfMSA9IHJlcXVpcmUoXCIuLi9iYWNrZW5kXCIpO1xyXG5iYWNrZW5kXzEuQmFja2VuZFNlcnZpY2UuVFZQcm9ncmFtU3RhdGVTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKHByb2dyYW0pIHtcclxuICAgIHJldHVybiBzdGF0ZV8xLlN0YXRlU2VydmljZS5fVFZQcm9ncmFtU3RhdGVTdWJqZWN0Lm5leHQocHJvZ3JhbSk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkNoYW5uZWxTZXJ2aWNlID0gdm9pZCAwO1xyXG52YXIgQmVoYXZpb3JTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9CZWhhdmlvclN1YmplY3RcIik7XHJcbnZhciBjb21iaW5lTGF0ZXN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL2NvbWJpbmVMYXRlc3RcIik7XHJcbnZhciBmaWx0ZXJfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXJcIik7XHJcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9TdWJqZWN0XCIpO1xyXG52YXIgY29uc3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb25zdFwiKTtcclxuLyoqXHJcbiAqIENoYW5uZWwgTW9kdWxlXHJcbiAqXHJcbiAqIFJlc3BvbnNpYmxlIGZvciBwYXNzaW5nIHRocm91Z2ggb25seSB0aG9zZSBpbWFnZSBkYXRhIG1lc3NhZ2VzIHRoYXRcclxuICogaGF2ZSB0aGUgaWQgYXNzb2NpYXRlZCB3aXRoIHRoZSBjdXJyZW50IGNoYW5uZWwuXHJcbiAqL1xyXG52YXIgSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xyXG4vLyBJbnB1dFxyXG52YXIgX0luaXRTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfVFZQcm9ncmFtU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3Qoe30pO1xyXG52YXIgX0N1cnJlbnRDaGFubmVsU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QoMSk7XHJcbnZhciBfSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIF9Qcm9jZWVkU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4vLyBPdXRwdXRcclxudmFyIEltYWdlRGF0YU1lc3NhZ2VTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgRGVidWdTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4vLyBJbnRlcm5hbFxyXG52YXIgSXNJbml0aWFsaXplZFN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuLy8gTWV0aG9kc1xyXG52YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIElzSW5pdGlhbGl6ZWRTdWJqZWN0Lm5leHQodHJ1ZSk7IH07XHJcbnZhciBmaWx0ZXJDdXJyZW50Q2hhbm5lbEltYWdlRGF0YU1lc3NhZ2VzID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgcHJvZ3JhbSA9IF9hWzBdLCBjaGFubmVsID0gX2FbMV0sIHR1cGxlID0gX2FbMl07XHJcbiAgICBEZWJ1Z1N1YmplY3RfLm5leHQoW1wiQ2hhbm5lbCBEZWJ1ZyAjMTogXCIsIHByb2dyYW0sIGNoYW5uZWwsIHR1cGxlXSk7XHJcbiAgICB2YXIgZnJvbSA9IHR1cGxlWzBdLCBtZXNzYWdlID0gdHVwbGVbMV07XHJcbiAgICB2YXIgaWQgPSBwcm9ncmFtW2NoYW5uZWxdO1xyXG4gICAgRGVidWdTdWJqZWN0Xy5uZXh0KFtcIkNoYW5uZWwgRGVidWcgIzI6IFwiLCBpZF0pO1xyXG4gICAgaWYgKCFpZClcclxuICAgICAgICByZXR1cm47XHJcbiAgICBpZiAoaWQgIT09IGZyb20pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgRGVidWdTdWJqZWN0Xy5uZXh0KFwiQ2hhbm5lbCBEZWJ1ZyAjM1wiKTtcclxuICAgIEltYWdlRGF0YU1lc3NhZ2VTdWJqZWN0Xy5uZXh0KG1lc3NhZ2UpO1xyXG59O1xyXG52YXIgaGFzTWVzc2FnZUZpbHRlciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICEhSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3QuZ2V0VmFsdWUoKTsgfTtcclxuLy8gU3Vic2NyaXB0aW9uc1xyXG5fSW5pdFN1YmplY3Quc3Vic2NyaWJlKGluaXQpO1xyXG5jb21iaW5lTGF0ZXN0XzEuY29tYmluZUxhdGVzdChbXHJcbiAgICBfVFZQcm9ncmFtU3ViamVjdCxcclxuICAgIF9DdXJyZW50Q2hhbm5lbFN1YmplY3QsXHJcbiAgICBfSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3QsXHJcbl0pXHJcbiAgICAucGlwZShmaWx0ZXJfMS5maWx0ZXIoZnVuY3Rpb24gKCkgeyByZXR1cm4gSXNJbml0aWFsaXplZFN1YmplY3QuZ2V0VmFsdWUoKTsgfSkpXHJcbiAgICAuc3Vic2NyaWJlKGZpbHRlckN1cnJlbnRDaGFubmVsSW1hZ2VEYXRhTWVzc2FnZXMpO1xyXG5EZWJ1Z1N1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGNvbnN0XzEuaXNEZWJ1ZykpLnN1YnNjcmliZShmdW5jdGlvbiAobSkge1xyXG4gICAgcmV0dXJuIGNvbnNvbGUud2FybihcIkNoYW5uZWwgU2VydmljZTogXCIsIG0pO1xyXG59KTtcclxuX1Byb2NlZWRTdWJqZWN0XHJcbiAgICAucGlwZShmaWx0ZXJfMS5maWx0ZXIoaGFzTWVzc2FnZUZpbHRlcikpXHJcbiAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBJbWFnZURhdGFNZXNzYWdlU3ViamVjdF8ubmV4dChJbWFnZURhdGFNZXNzYWdlU3ViamVjdC5nZXRWYWx1ZSgpKTtcclxufSk7XHJcbi8vIEV4dGVybmFsXHJcbnZhciBDaGFubmVsU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENoYW5uZWxTZXJ2aWNlKCkge1xyXG4gICAgfVxyXG4gICAgLy8gSW5wdXRcclxuICAgIENoYW5uZWxTZXJ2aWNlLl9Jbml0U3ViamVjdCA9IF9Jbml0U3ViamVjdDtcclxuICAgIENoYW5uZWxTZXJ2aWNlLl9UVlByb2dyYW1TdWJqZWN0ID0gX1RWUHJvZ3JhbVN1YmplY3Q7XHJcbiAgICBDaGFubmVsU2VydmljZS5fQ3VycmVudENoYW5uZWxTdWJqZWN0ID0gX0N1cnJlbnRDaGFubmVsU3ViamVjdDtcclxuICAgIENoYW5uZWxTZXJ2aWNlLl9JbWFnZURhdGFNZXNzYWdlU3ViamVjdCA9IF9JbWFnZURhdGFNZXNzYWdlU3ViamVjdDtcclxuICAgIENoYW5uZWxTZXJ2aWNlLl9Qcm9jZWVkU3ViamVjdCA9IF9Qcm9jZWVkU3ViamVjdDtcclxuICAgIC8vIE91dHB1dFxyXG4gICAgQ2hhbm5lbFNlcnZpY2UuSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3RfID0gSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3RfO1xyXG4gICAgcmV0dXJuIENoYW5uZWxTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLkNoYW5uZWxTZXJ2aWNlID0gQ2hhbm5lbFNlcnZpY2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL2ludGVncmF0aW9uL3VuaXR5XCIpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdW5pdHlfMSA9IHJlcXVpcmUoXCIuLi8uLi91bml0eS91bml0eVwiKTtcclxudmFyIGNoYW5uZWxfMSA9IHJlcXVpcmUoXCIuLi9jaGFubmVsXCIpO1xyXG5jaGFubmVsXzEuQ2hhbm5lbFNlcnZpY2UuSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgcmV0dXJuIHVuaXR5XzEuVW5pdHlTZXJ2aWNlLl9TZW5kTWVzc2FnZVRvVW5pdHlTdWJqZWN0Lm5leHQobWVzc2FnZSk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkluY29taW5nTWVzc2FnZVNlcnZpY2UgPSB2b2lkIDA7XHJcbnZhciBmaWx0ZXJfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXJcIik7XHJcbnZhciBtYXBfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9tYXBcIik7XHJcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9TdWJqZWN0XCIpO1xyXG52YXIgZGVmaW5pdGlvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zaGFyZWQvZGVmaW5pdGlvbnNcIik7XHJcbi8qKlxyXG4gKiBNZXNzYWdlcyBDb21pbmcgaW50byBVbml0eVxyXG4gKi9cclxuLy8gSW5wdXRcclxudmFyIF9NZXNzYWdlU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX0ltYWdlU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4vLyBPdXRwdXRcclxudmFyIFBvc2l0aW9uTWVzc2FnZVN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBJbWFnZURhdGFNZXNzYWdlU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIERlYnVnU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuLy8gTWV0aG9kc1xyXG52YXIgaGFuZGxlSW5jb21pbmdNZXNzYWdlID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgaWQgPSBfYVswXSwgbWVzc2FnZSA9IF9hWzFdO1xyXG4gICAgdmFyIG0gPSBudWxsO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBtID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgICAgICBtLmlkID0gaWQ7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIERlYnVnU3ViamVjdF8ubmV4dChbZSwgXCJDb3VsZCBub3QgcGFyc2UgbWVzc2FnZVwiXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbTtcclxufTtcclxudmFyIHBvc2l0aW9uTWVzc2FnZUZpbHRlciA9IGZ1bmN0aW9uIChtKSB7XHJcbiAgICByZXR1cm4gISFtICYmIG0udHlwZSA9PT0gZGVmaW5pdGlvbnNfMS5FTWVzc2FnZVR5cGUuUG9zaXRpb247XHJcbn07XHJcbnZhciBpbWFnZU1lc3NhZ2VGaWx0ZXIgPSBmdW5jdGlvbiAobSkge1xyXG4gICAgcmV0dXJuICEhbSAmJiBtLnR5cGUgPT09IGRlZmluaXRpb25zXzEuRU1lc3NhZ2VUeXBlLkltYWdlRGF0YTtcclxufTtcclxudmFyIGltYWdlU3ViamVjdEhhbmRsZXIgPSBmdW5jdGlvbiAoaW1hZ2UpIHsgcmV0dXJuICh7XHJcbiAgICB0eXBlOiBkZWZpbml0aW9uc18xLkVNZXNzYWdlVHlwZS5JbWFnZURhdGEsXHJcbiAgICBpbWFnZTogaW1hZ2UsXHJcbn0pOyB9O1xyXG4vLyBTdWJzY3JpcHRpb25zXHJcbl9NZXNzYWdlU3ViamVjdFxyXG4gICAgLnBpcGUobWFwXzEubWFwKGhhbmRsZUluY29taW5nTWVzc2FnZSksIGZpbHRlcl8xLmZpbHRlcihwb3NpdGlvbk1lc3NhZ2VGaWx0ZXIpKVxyXG4gICAgLnN1YnNjcmliZShmdW5jdGlvbiAobSkge1xyXG4gICAgcmV0dXJuIFBvc2l0aW9uTWVzc2FnZVN1YmplY3RfLm5leHQobSk7XHJcbn0pO1xyXG5fTWVzc2FnZVN1YmplY3RcclxuICAgIC5waXBlKG1hcF8xLm1hcChoYW5kbGVJbmNvbWluZ01lc3NhZ2UpLCBmaWx0ZXJfMS5maWx0ZXIoaW1hZ2VNZXNzYWdlRmlsdGVyKSlcclxuICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKG0pIHtcclxuICAgIGlmICghbSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICBJbWFnZURhdGFNZXNzYWdlU3ViamVjdF8ubmV4dChbbS5pZCwgbV0pO1xyXG59KTtcclxuLy8gRXhwb3J0XHJcbnZhciBJbmNvbWluZ01lc3NhZ2VTZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSW5jb21pbmdNZXNzYWdlU2VydmljZSgpIHtcclxuICAgIH1cclxuICAgIC8vIElucHV0XHJcbiAgICBJbmNvbWluZ01lc3NhZ2VTZXJ2aWNlLl9NZXNzYWdlU3ViamVjdCA9IF9NZXNzYWdlU3ViamVjdDtcclxuICAgIEluY29taW5nTWVzc2FnZVNlcnZpY2UuX0ltYWdlU3ViamVjdCA9IF9JbWFnZVN1YmplY3Q7XHJcbiAgICAvLyBPdXRwdXRcclxuICAgIEluY29taW5nTWVzc2FnZVNlcnZpY2UuUG9zaXRpb25NZXNzYWdlU3ViamVjdF8gPSBQb3NpdGlvbk1lc3NhZ2VTdWJqZWN0XztcclxuICAgIEluY29taW5nTWVzc2FnZVNlcnZpY2UuSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3RfID0gSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3RfO1xyXG4gICAgSW5jb21pbmdNZXNzYWdlU2VydmljZS5EZWJ1Z1N1YmplY3RfID0gRGVidWdTdWJqZWN0XztcclxuICAgIHJldHVybiBJbmNvbWluZ01lc3NhZ2VTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLkluY29taW5nTWVzc2FnZVNlcnZpY2UgPSBJbmNvbWluZ01lc3NhZ2VTZXJ2aWNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY2hhbm5lbF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NoYW5uZWwvY2hhbm5lbFwiKTtcclxudmFyIHVuaXR5XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vdW5pdHkvdW5pdHlcIik7XHJcbnZhciBpbmNvbWluZ18xID0gcmVxdWlyZShcIi4uL2luY29taW5nXCIpO1xyXG5pbmNvbWluZ18xLkluY29taW5nTWVzc2FnZVNlcnZpY2UuSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgcmV0dXJuIGNoYW5uZWxfMS5DaGFubmVsU2VydmljZS5fSW1hZ2VEYXRhTWVzc2FnZVN1YmplY3QubmV4dChtZXNzYWdlKTtcclxufSk7XHJcbmluY29taW5nXzEuSW5jb21pbmdNZXNzYWdlU2VydmljZS5Qb3NpdGlvbk1lc3NhZ2VTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgIHJldHVybiB1bml0eV8xLlVuaXR5U2VydmljZS5fU2VuZE1lc3NhZ2VUb1VuaXR5U3ViamVjdC5uZXh0KG1lc3NhZ2UpO1xyXG59KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxucmVxdWlyZShcIi4vaW5jb21pbmcvaW50ZWdyYXRpb24vaW50ZWdyYXRpb25cIik7XHJcbnJlcXVpcmUoXCIuL291dGdvaW5nL2ludGVncmF0aW9uL2ludGVncmF0aW9uXCIpO1xyXG5yZXF1aXJlKFwiLi9ydGMvaW50ZWdyYXRpb24vaW50ZWdyYXRpb25cIik7XHJcbnJlcXVpcmUoXCIuL3dzL2ludGVncmF0aW9uL2ludGVncmF0aW9uXCIpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgYmFja2VuZF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2JhY2tlbmQvYmFja2VuZFwiKTtcclxudmFyIGNoYW5uZWxfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jaGFubmVsL2NoYW5uZWxcIik7XHJcbnZhciBpbml0XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vaW5pdC9pbml0XCIpO1xyXG52YXIgbWVkaWFfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9tZWRpYS9tZWRpYVwiKTtcclxudmFyIHVuaXR5XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vdW5pdHkvdW5pdHlcIik7XHJcbnZhciBydGNfMSA9IHJlcXVpcmUoXCIuLi8uLi9ydGMvcnRjXCIpO1xyXG52YXIgb3V0Z29pbmdfMSA9IHJlcXVpcmUoXCIuLi9vdXRnb2luZ1wiKTtcclxub3V0Z29pbmdfMS5PdXRnb2luZ01lc3NhZ2VTZXJ2aWNlLlN0YXJ0TWVzc2FnZVN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gaW5pdF8xLkluaXRTZXJ2aWNlLl9Jc0dhbWVMb2FkZWRTdWJqZWN0Lm5leHQodHJ1ZSk7XHJcbn0pO1xyXG5vdXRnb2luZ18xLk91dGdvaW5nTWVzc2FnZVNlcnZpY2UuUHJlc2VudE1lc3NhZ2VTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGJhY2tlbmRfMS5CYWNrZW5kU2VydmljZS5fVXNlVFZDaGFubmVsU3ViamVjdC5uZXh0KDEpO1xyXG59KTtcclxub3V0Z29pbmdfMS5PdXRnb2luZ01lc3NhZ2VTZXJ2aWNlLlByZXNlbnRNZXNzYWdlU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBtZWRpYV8xLk1lZGlhU2VydmljZS5fU2hhcmVTY3JlZW5TdWJqZWN0Lm5leHQoKTtcclxufSk7XHJcbm91dGdvaW5nXzEuT3V0Z29pbmdNZXNzYWdlU2VydmljZS5Qb3NpdGlvbk1lc3NhZ2VTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgIHJldHVybiBydGNfMS5SVENTZXJ2aWNlLl9Ccm9hZGNhc3RTdWJqZWN0Lm5leHQoSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xyXG59KTtcclxub3V0Z29pbmdfMS5PdXRnb2luZ01lc3NhZ2VTZXJ2aWNlLkZ1bGxTY3JlZW5NZXNzYWdlU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB1bml0eV8xLlVuaXR5U2VydmljZS5fTWFrZUZ1bGxTY3JlZW5TdWJqZWN0Lm5leHQoKTtcclxufSk7XHJcbm91dGdvaW5nXzEuT3V0Z29pbmdNZXNzYWdlU2VydmljZS5Qcm9jZWVkTWVzc2FnZVN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gY2hhbm5lbF8xLkNoYW5uZWxTZXJ2aWNlLl9Qcm9jZWVkU3ViamVjdC5uZXh0KCk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLk91dGdvaW5nTWVzc2FnZVNlcnZpY2UgPSB2b2lkIDA7XHJcbnZhciBCZWhhdmlvclN1YmplY3RfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL0JlaGF2aW9yU3ViamVjdFwiKTtcclxudmFyIGZpbHRlcl8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvb3BlcmF0b3JzL2ZpbHRlclwiKTtcclxudmFyIFN1YmplY3RfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL1N1YmplY3RcIik7XHJcbnZhciBjb25zdF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NvbnN0XCIpO1xyXG52YXIgZGVmaW5pdGlvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zaGFyZWQvZGVmaW5pdGlvbnNcIik7XHJcbi8qKlxyXG4gKiBNZXNzYWdlcyBHb2luZyBvdXQgb2YgVW5pdHlcclxuICovXHJcbi8vIElucHV0XHJcbnZhciBfUmF3TWVzc2FnZVN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIF9JbWFnZU1lc3NhZ2VTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfSURTdWJqZWN0XyA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QobnVsbCk7XHJcbnZhciBNZXNzYWdlU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIFN0YXJ0TWVzc2FnZVN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBQcmVzZW50TWVzc2FnZVN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBGdWxsU2NyZWVuTWVzc2FnZVN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBQb3NpdGlvbk1lc3NhZ2VTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgSW1hZ2VNZXNzYWdlU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIFByb2NlZWRNZXNzYWdlU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIERlYnVnU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuLy8gTWV0aG9kc1xyXG52YXIgZ2VuZXJhdGVGaWx0ZXIgPSBmdW5jdGlvbiAodHlwZSkgeyByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgIHJldHVybiAhIW1lc3NhZ2UgJiYgbWVzc2FnZS50eXBlID09PSB0eXBlO1xyXG59OyB9O1xyXG52YXIgcmF3TWVzc2FnZUhhbmRsZXIgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgdmFyIHBhcnNlZE1lc3NhZ2UgPSBudWxsO1xyXG4gICAgRGVidWdTdWJqZWN0Xy5uZXh0KG1lc3NhZ2UpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBwYXJzZWRNZXNzYWdlID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgRGVidWdTdWJqZWN0Xy5uZXh0KFwiQ291bGQgbm90IFBhcnNlIE1lc3NhZ2VcIik7XHJcbiAgICB9XHJcbiAgICBpZiAoIXBhcnNlZE1lc3NhZ2UpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgTWVzc2FnZVN1YmplY3RfLm5leHQocGFyc2VkTWVzc2FnZSk7XHJcbn07XHJcbnZhciBpbWFnZUhhbmRsZXIgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBpZCA9IF9hWzBdLCBpbWFnZSA9IF9hWzFdO1xyXG59O1xyXG4vLyBTdWJzY3JpcHRpb25zXHJcbl9SYXdNZXNzYWdlU3ViamVjdC5zdWJzY3JpYmUocmF3TWVzc2FnZUhhbmRsZXIpO1xyXG5NZXNzYWdlU3ViamVjdF8ucGlwZShmaWx0ZXJfMS5maWx0ZXIoZ2VuZXJhdGVGaWx0ZXIoZGVmaW5pdGlvbnNfMS5FTWVzc2FnZVR5cGUuU3RhcnQpKSkuc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7IHJldHVybiBTdGFydE1lc3NhZ2VTdWJqZWN0Xy5uZXh0KG0pOyB9KTtcclxuTWVzc2FnZVN1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGdlbmVyYXRlRmlsdGVyKGRlZmluaXRpb25zXzEuRU1lc3NhZ2VUeXBlLlByZXNlbnQpKSkuc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7IHJldHVybiBQcmVzZW50TWVzc2FnZVN1YmplY3RfLm5leHQobSk7IH0pO1xyXG5NZXNzYWdlU3ViamVjdF8ucGlwZShmaWx0ZXJfMS5maWx0ZXIoZ2VuZXJhdGVGaWx0ZXIoZGVmaW5pdGlvbnNfMS5FTWVzc2FnZVR5cGUuRnVsbFNjcmVlbikpKS5zdWJzY3JpYmUoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIEZ1bGxTY3JlZW5NZXNzYWdlU3ViamVjdF8ubmV4dChtKTsgfSk7XHJcbk1lc3NhZ2VTdWJqZWN0Xy5waXBlKGZpbHRlcl8xLmZpbHRlcihnZW5lcmF0ZUZpbHRlcihkZWZpbml0aW9uc18xLkVNZXNzYWdlVHlwZS5Qcm9jZWVkKSkpLnN1YnNjcmliZShmdW5jdGlvbiAobSkgeyByZXR1cm4gUHJvY2VlZE1lc3NhZ2VTdWJqZWN0Xy5uZXh0KG0pOyB9KTtcclxuTWVzc2FnZVN1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGdlbmVyYXRlRmlsdGVyKGRlZmluaXRpb25zXzEuRU1lc3NhZ2VUeXBlLlBvc2l0aW9uKSkpLnN1YnNjcmliZShmdW5jdGlvbiAobSkgeyByZXR1cm4gUG9zaXRpb25NZXNzYWdlU3ViamVjdF8ubmV4dChtKTsgfSk7XHJcbi8vIERlYnVnZ2luZ1xyXG5EZWJ1Z1N1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGNvbnN0XzEuaXNEZWJ1ZykpLnN1YnNjcmliZShmdW5jdGlvbiAobSkge1xyXG4gICAgcmV0dXJuIGNvbnNvbGUud2FybihcIk91dGdvaW5nIE1lc3NhZ2UgU2VydmljZTogXCIsIG0pO1xyXG59KTtcclxuUHJlc2VudE1lc3NhZ2VTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIERlYnVnU3ViamVjdF8ubmV4dChtKTsgfSk7XHJcbi8vIEV4cG9ydHNcclxudmFyIE91dGdvaW5nTWVzc2FnZVNlcnZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBPdXRnb2luZ01lc3NhZ2VTZXJ2aWNlKCkge1xyXG4gICAgfVxyXG4gICAgLy8gSW5wdXRcclxuICAgIE91dGdvaW5nTWVzc2FnZVNlcnZpY2UuX1Jhd01lc3NhZ2VTdWJqZWN0ID0gX1Jhd01lc3NhZ2VTdWJqZWN0O1xyXG4gICAgT3V0Z29pbmdNZXNzYWdlU2VydmljZS5fSW1hZ2VNZXNzYWdlU3ViamVjdCA9IF9JbWFnZU1lc3NhZ2VTdWJqZWN0O1xyXG4gICAgLy8gSU9cclxuICAgIE91dGdvaW5nTWVzc2FnZVNlcnZpY2UuX0lEU3ViamVjdF8gPSBfSURTdWJqZWN0XztcclxuICAgIC8vIE91dHB1dFxyXG4gICAgT3V0Z29pbmdNZXNzYWdlU2VydmljZS5NZXNzYWdlU3ViamVjdF8gPSBNZXNzYWdlU3ViamVjdF87XHJcbiAgICBPdXRnb2luZ01lc3NhZ2VTZXJ2aWNlLlN0YXJ0TWVzc2FnZVN1YmplY3RfID0gU3RhcnRNZXNzYWdlU3ViamVjdF87XHJcbiAgICBPdXRnb2luZ01lc3NhZ2VTZXJ2aWNlLlByZXNlbnRNZXNzYWdlU3ViamVjdF8gPSBQcmVzZW50TWVzc2FnZVN1YmplY3RfO1xyXG4gICAgT3V0Z29pbmdNZXNzYWdlU2VydmljZS5GdWxsU2NyZWVuTWVzc2FnZVN1YmplY3RfID0gRnVsbFNjcmVlbk1lc3NhZ2VTdWJqZWN0XztcclxuICAgIE91dGdvaW5nTWVzc2FnZVNlcnZpY2UuUG9zaXRpb25NZXNzYWdlU3ViamVjdF8gPSBQb3NpdGlvbk1lc3NhZ2VTdWJqZWN0XztcclxuICAgIE91dGdvaW5nTWVzc2FnZVNlcnZpY2UuSW1hZ2VNZXNzYWdlU3ViamVjdF8gPSBJbWFnZU1lc3NhZ2VTdWJqZWN0XztcclxuICAgIE91dGdvaW5nTWVzc2FnZVNlcnZpY2UuUHJvY2VlZE1lc3NhZ2VTdWJqZWN0XyA9IFByb2NlZWRNZXNzYWdlU3ViamVjdF87XHJcbiAgICBPdXRnb2luZ01lc3NhZ2VTZXJ2aWNlLkRlYnVnU3ViamVjdF8gPSBEZWJ1Z1N1YmplY3RfO1xyXG4gICAgcmV0dXJuIE91dGdvaW5nTWVzc2FnZVNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuT3V0Z29pbmdNZXNzYWdlU2VydmljZSA9IE91dGdvaW5nTWVzc2FnZVNlcnZpY2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBiYWNrZW5kXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vYmFja2VuZC9iYWNrZW5kXCIpO1xyXG52YXIgbWVkaWFfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9tZWRpYS9tZWRpYVwiKTtcclxudmFyIHN0YXRlXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc3RhdGUvc3RhdGVcIik7XHJcbnZhciBpbmNvbWluZ18xID0gcmVxdWlyZShcIi4uLy4uL2luY29taW5nL2luY29taW5nXCIpO1xyXG52YXIgb3V0Z29pbmdfMSA9IHJlcXVpcmUoXCIuLi8uLi9vdXRnb2luZy9vdXRnb2luZ1wiKTtcclxudmFyIHdzXzEgPSByZXF1aXJlKFwiLi4vLi4vd3Mvd3NcIik7XHJcbnZhciBydGNfMSA9IHJlcXVpcmUoXCIuLi9ydGNcIik7XHJcbnJ0Y18xLlJUQ1NlcnZpY2UuT25EYXRhQ2hhbm5lbE1lc3NhZ2VTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKG0pIHtcclxuICAgIHJldHVybiBpbmNvbWluZ18xLkluY29taW5nTWVzc2FnZVNlcnZpY2UuX01lc3NhZ2VTdWJqZWN0Lm5leHQobSk7XHJcbn0pO1xyXG5ydGNfMS5SVENTZXJ2aWNlLlVwZGF0ZVN0YXRlU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBiYWNrZW5kXzEuQmFja2VuZFNlcnZpY2UuX1JlZnJlc2hTdWJqZWN0Lm5leHQoKTtcclxufSk7XHJcbnJ0Y18xLlJUQ1NlcnZpY2UuQ29tbXVuaWNhdGlvblN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAobSkge1xyXG4gICAgd3NfMS5XU1NlcnZpY2UuX0NvbW11bmljYXRpb25TdWJqZWN0Lm5leHQobSk7XHJcbn0pO1xyXG5ydGNfMS5SVENTZXJ2aWNlLklEU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gYmFja2VuZF8xLkJhY2tlbmRTZXJ2aWNlLl9JRFNidWplY3QubmV4dChpZCk7IH0pO1xyXG5ydGNfMS5SVENTZXJ2aWNlLklEU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChpZCkge1xyXG4gICAgcmV0dXJuIG91dGdvaW5nXzEuT3V0Z29pbmdNZXNzYWdlU2VydmljZS5fSURTdWJqZWN0Xy5uZXh0KGlkKTtcclxufSk7XHJcbnJ0Y18xLlJUQ1NlcnZpY2UuSURTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKGlkKSB7IHJldHVybiBzdGF0ZV8xLlN0YXRlU2VydmljZS5fSURTdWJqZWN0Xy5uZXh0KGlkKTsgfSk7XHJcbnJ0Y18xLlJUQ1NlcnZpY2UuT25TdHJlYW1TdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKHN0cmVhbSkge1xyXG4gICAgcmV0dXJuIG1lZGlhXzEuTWVkaWFTZXJ2aWNlLl9BZGRBdWRpb1N1YmplY3QubmV4dChzdHJlYW0pO1xyXG59KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5SVENTZXJ2aWNlID0gdm9pZCAwO1xyXG52YXIgQmVoYXZpb3JTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9CZWhhdmlvclN1YmplY3RcIik7XHJcbnZhciBkZWJvdW5jZVRpbWVfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9kZWJvdW5jZVRpbWVcIik7XHJcbnZhciBmaWx0ZXJfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXJcIik7XHJcbnZhciBzd2l0Y2hNYXBfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9zd2l0Y2hNYXBcIik7XHJcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9TdWJqZWN0XCIpO1xyXG52YXIgY29uc3RfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb25zdFwiKTtcclxudmFyIGNsaWVudF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2xpYi9jbGllbnRcIik7XHJcbi8vIElucHV0XHJcbnZhciBfSW5pdFN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIF9Jc0luaXRpYWxpemVkU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG52YXIgX0Jyb2FkY2FzdFN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIF9Db21tdW5pY2F0aW9uU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX01lZGlhU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QobnVsbCk7XHJcbi8vIE91dHB1dFxyXG52YXIgQ29tbXVuaWNhdGlvblN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBDbGllbnRTdWJqZWN0XyA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QobnVsbCk7XHJcbnZhciBJRFN1YmplY3RfID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChudWxsKTtcclxudmFyIFVwZGF0ZVN0YXRlU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIE9uRGF0YUNoYW5uZWxNZXNzYWdlU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIE9uU3RyZWFtU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIERlYnVnU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuLy8gTWV0aG9kc1xyXG52YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjbGllbnQgPSBjbGllbnRfMS5DbGllbnQuY3JlYXRlQ2xpZW50KENvbW11bmljYXRpb25TdWJqZWN0Xyk7XHJcbiAgICBDbGllbnRTdWJqZWN0Xy5uZXh0KGNsaWVudCk7XHJcbiAgICBfSXNJbml0aWFsaXplZFN1YmplY3QubmV4dCh0cnVlKTtcclxuICAgIC8vIERlYnVnU3ViamVjdF8ubmV4dChcIlJlbW90ZVwiKTtcclxuICAgIElEU3ViamVjdF8ubmV4dChjbGllbnQuaWQpO1xyXG59O1xyXG52YXIgaXNJbml0aWFsaXplZEZpbHRlciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9Jc0luaXRpYWxpemVkU3ViamVjdC5nZXRWYWx1ZSgpOyB9O1xyXG52YXIgb25EYXRhQ2hhbm5lbEhhbmRsZXIgPSBmdW5jdGlvbiAobSkge1xyXG4gICAgRGVidWdTdWJqZWN0Xy5uZXh0KG0pO1xyXG4gICAgT25EYXRhQ2hhbm5lbE1lc3NhZ2VTdWJqZWN0Xy5uZXh0KG0pO1xyXG59O1xyXG52YXIgb25Ccm9hZGNhc3RIYW5kbGVyID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgIC8vIERlYnVnU3ViamVjdF8ubmV4dChtZXNzYWdlKTtcclxuICAgIHZhciBjbGllbnQgPSBDbGllbnRTdWJqZWN0Xy5nZXRWYWx1ZSgpO1xyXG4gICAgaWYgKCFjbGllbnQpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgY2xpZW50LmJyb2FkY2FzdERhdGEobWVzc2FnZSk7XHJcbn07XHJcbnZhciBvbk1lZGlhSGFuZGxlciA9IGZ1bmN0aW9uIChtZWRpYSkge1xyXG4gICAgRGVidWdTdWJqZWN0Xy5uZXh0KFwiUlRDU2VydmljZSAtPiBvbk1lZGlhSGFuZGxlclwiKTtcclxuICAgIHZhciBjbGllbnQgPSBDbGllbnRTdWJqZWN0Xy5nZXRWYWx1ZSgpO1xyXG4gICAgaWYgKCFjbGllbnQpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgY2xpZW50Ll9Mb2NhbE1lZGlhU3ViamVjdC5uZXh0KG1lZGlhKTtcclxufTtcclxudmFyIG9uU3RyZWFtSGFuZGxlciA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIF8gPSBfYVswXSwgc3RyZWFtID0gX2FbMV07XHJcbiAgICBEZWJ1Z1N1YmplY3RfLm5leHQoXCJSVEMgU2VydmljZSAtPiBvblN0cmVhbUhhbmRsZXJcIik7XHJcbiAgICBPblN0cmVhbVN1YmplY3RfLm5leHQoc3RyZWFtKTtcclxufTtcclxuLy8gU3Vic2NyaXB0aW9uc1xyXG5fSW5pdFN1YmplY3Quc3Vic2NyaWJlKGluaXQpO1xyXG5DbGllbnRTdWJqZWN0Xy5waXBlKGZpbHRlcl8xLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gISFjOyB9KSwgc3dpdGNoTWFwXzEuc3dpdGNoTWFwKGZ1bmN0aW9uIChjbGllbnQpIHsgcmV0dXJuIGNsaWVudC5PbkRhdGFDaGFubmVsTWVzc2FnZVN1YmplY3RfOyB9KSkuc3Vic2NyaWJlKG9uRGF0YUNoYW5uZWxIYW5kbGVyKTtcclxuQ2xpZW50U3ViamVjdF8ucGlwZShmaWx0ZXJfMS5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuICEhYzsgfSksIHN3aXRjaE1hcF8xLnN3aXRjaE1hcChmdW5jdGlvbiAoY2xpZW50KSB7IHJldHVybiBjbGllbnQuT25EYXRhQ2hhbm5lbFN1YmplY3RfOyB9KSkuc3Vic2NyaWJlKGNvbnNvbGUud2Fybik7XHJcbkNsaWVudFN1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiAhIWM7IH0pLCBzd2l0Y2hNYXBfMS5zd2l0Y2hNYXAoZnVuY3Rpb24gKGNsaWVudCkgeyByZXR1cm4gY2xpZW50Lk9uU3RyZWFtU3ViamVjdF87IH0pKS5zdWJzY3JpYmUob25TdHJlYW1IYW5kbGVyKTtcclxuX0Jyb2FkY2FzdFN1YmplY3Quc3Vic2NyaWJlKG9uQnJvYWRjYXN0SGFuZGxlcik7XHJcbl9Db21tdW5pY2F0aW9uU3ViamVjdC5zdWJzY3JpYmUoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIENvbW11bmljYXRpb25TdWJqZWN0Xy5uZXh0KG0pOyB9KTtcclxuQ29tbXVuaWNhdGlvblN1YmplY3RfLnBpcGUoZGVib3VuY2VUaW1lXzEuZGVib3VuY2VUaW1lKDEwMCkpLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gVXBkYXRlU3RhdGVTdWJqZWN0Xy5uZXh0KCk7XHJcbn0pO1xyXG5DbGllbnRTdWJqZWN0Xy5waXBlKGZpbHRlcl8xLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gISFjOyB9KSwgc3dpdGNoTWFwXzEuc3dpdGNoTWFwKGZ1bmN0aW9uIChjbGllbnQpIHsgcmV0dXJuIGNsaWVudC5EZWJ1Z1N1YmplY3RfOyB9KSkuc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7IHJldHVybiBEZWJ1Z1N1YmplY3RfLm5leHQobSk7IH0pO1xyXG5DbGllbnRTdWJqZWN0Xy5waXBlKGZpbHRlcl8xLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gISFjOyB9KSwgc3dpdGNoTWFwXzEuc3dpdGNoTWFwKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9NZWRpYVN1YmplY3Q7IH0pKS5zdWJzY3JpYmUob25NZWRpYUhhbmRsZXIpO1xyXG5EZWJ1Z1N1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGNvbnN0XzEuaXNEZWJ1ZykpLnN1YnNjcmliZShmdW5jdGlvbiAobSkge1xyXG4gICAgcmV0dXJuIGNvbnNvbGUud2FybihcIlJUQyBTZXJ2aWNlOiBcIiwgbSk7XHJcbn0pO1xyXG4vLyBFeHBvcnRzXHJcbnZhciBSVENTZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUlRDU2VydmljZSgpIHtcclxuICAgIH1cclxuICAgIFJUQ1NlcnZpY2UuX0luaXRTdWJqZWN0ID0gX0luaXRTdWJqZWN0O1xyXG4gICAgUlRDU2VydmljZS5fSXNJbml0aWFsaXplZFN1YmplY3QgPSBfSXNJbml0aWFsaXplZFN1YmplY3Q7XHJcbiAgICBSVENTZXJ2aWNlLl9Ccm9hZGNhc3RTdWJqZWN0ID0gX0Jyb2FkY2FzdFN1YmplY3Q7XHJcbiAgICBSVENTZXJ2aWNlLl9Db21tdW5pY2F0aW9uU3ViamVjdCA9IF9Db21tdW5pY2F0aW9uU3ViamVjdDtcclxuICAgIFJUQ1NlcnZpY2UuX01lZGlhU3ViamVjdCA9IF9NZWRpYVN1YmplY3Q7XHJcbiAgICAvLyBPdXRwdXRcclxuICAgIFJUQ1NlcnZpY2UuQ29tbXVuaWNhdGlvblN1YmplY3RfID0gQ29tbXVuaWNhdGlvblN1YmplY3RfO1xyXG4gICAgUlRDU2VydmljZS5DbGllbnRTdWJqZWN0XyA9IENsaWVudFN1YmplY3RfO1xyXG4gICAgUlRDU2VydmljZS5JRFN1YmplY3RfID0gSURTdWJqZWN0XztcclxuICAgIFJUQ1NlcnZpY2UuVXBkYXRlU3RhdGVTdWJqZWN0XyA9IFVwZGF0ZVN0YXRlU3ViamVjdF87XHJcbiAgICBSVENTZXJ2aWNlLk9uRGF0YUNoYW5uZWxNZXNzYWdlU3ViamVjdF8gPSBPbkRhdGFDaGFubmVsTWVzc2FnZVN1YmplY3RfO1xyXG4gICAgUlRDU2VydmljZS5PblN0cmVhbVN1YmplY3RfID0gT25TdHJlYW1TdWJqZWN0XztcclxuICAgIFJUQ1NlcnZpY2UuRGVidWdTdWJqZWN0XyA9IERlYnVnU3ViamVjdF87XHJcbiAgICByZXR1cm4gUlRDU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5SVENTZXJ2aWNlID0gUlRDU2VydmljZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGluaXRfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9pbml0L2luaXRcIik7XHJcbnZhciBydGNfMSA9IHJlcXVpcmUoXCIuLi8uLi9ydGMvcnRjXCIpO1xyXG52YXIgd3NfMSA9IHJlcXVpcmUoXCIuLi93c1wiKTtcclxud3NfMS5XU1NlcnZpY2UuSXNXZWJTb2NrZXRDb25uZWN0aW9uT3Blbl8uc3Vic2NyaWJlKGZ1bmN0aW9uIChpc09wZW4pIHtcclxuICAgIHJldHVybiBpbml0XzEuSW5pdFNlcnZpY2UuX0lzV2ViU29ja2V0Q29ubmVjdGlvbk9wZW4ubmV4dChpc09wZW4pO1xyXG59KTtcclxud3NfMS5XU1NlcnZpY2UuQ29tbXVuaWNhdGlvblN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAobSkge1xyXG4gICAgcnRjXzEuUlRDU2VydmljZS5fQ29tbXVuaWNhdGlvblN1YmplY3QubmV4dChtKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuV1NTZXJ2aWNlID0gdm9pZCAwO1xyXG52YXIgd2ViX3NvY2tldHNfYWdlbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9saWIvd2ViLXNvY2tldHMtYWdlbnRcIik7XHJcbnZhciBzd2l0Y2hNYXBfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9zd2l0Y2hNYXBcIik7XHJcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9TdWJqZWN0XCIpO1xyXG52YXIgQmVoYXZpb3JTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9CZWhhdmlvclN1YmplY3RcIik7XHJcbnZhciBmaWx0ZXJfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXJcIik7XHJcbnZhciBjb25zdF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NvbnN0XCIpO1xyXG4vLyBJbnB1dFxyXG52YXIgX0NvbW11bmljYXRpb25TdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfSXNXaW5kb3dMb2FkZWRTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfSXNSZW1vdGVTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcbi8vIE91dHB1dFxyXG52YXIgQ29tbXVuaWNhdGlvblN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBXZWJTb2NrZXRzQWdlbnRTdWJqZWN0XyA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QobnVsbCk7XHJcbnZhciBSZXNldEFnZW50U3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIElzV2ViU29ja2V0Q29ubmVjdGlvbk9wZW5fID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcbnZhciBEZWJ1Z1N1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbi8vIE1ldGhvZHNcclxudmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBUT0RPOiBBZGQgSGFuZGxlciB0byBSZWZyZXNoIFdTIGluIFdlYlNvY2tldEFnZW50XHJcbiAgICB2YXIgd3MgPSBuZXcgd2ViX3NvY2tldHNfYWdlbnRfMS5XZWJTb2NrZXRzQWdlbnQoX0NvbW11bmljYXRpb25TdWJqZWN0LCBDb21tdW5pY2F0aW9uU3ViamVjdF8pO1xyXG4gICAgV2ViU29ja2V0c0FnZW50U3ViamVjdF8ubmV4dCh3cyk7XHJcbn07XHJcbnZhciBvbldlYlNvY2tldFJlYWR5SGFuZGxlciA9IGZ1bmN0aW9uIChpc1JlYWR5KSB7XHJcbiAgICBEZWJ1Z1N1YmplY3RfLm5leHQoXCJXUyBSZWFkeVwiKTtcclxuICAgIElzV2ViU29ja2V0Q29ubmVjdGlvbk9wZW5fLm5leHQoaXNSZWFkeSk7XHJcbn07XHJcbnZhciBvbldlYlNvY2tldENsb3NlSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIERlYnVnU3ViamVjdF8ubmV4dChcIldTIENsb3NlZFwiKTtcclxuICAgIFJlc2V0QWdlbnRTdWJqZWN0Xy5uZXh0KCk7XHJcbn07XHJcbi8vIFN1YnNjcmlwdGlvbnNcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9Jc1dpbmRvd0xvYWRlZFN1YmplY3QubmV4dCgpOyB9KTtcclxuX0lzV2luZG93TG9hZGVkU3ViamVjdC5zdWJzY3JpYmUoaW5pdCk7XHJcblJlc2V0QWdlbnRTdWJqZWN0Xy5zdWJzY3JpYmUoaW5pdCk7XHJcbldlYlNvY2tldHNBZ2VudFN1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uICh3cykgeyByZXR1cm4gISF3czsgfSksIHN3aXRjaE1hcF8xLnN3aXRjaE1hcChmdW5jdGlvbiAod3MpIHsgcmV0dXJuIHdzLklzV2ViU29ja2V0UmVhZHlTdWJqZWN0OyB9KSkuc3Vic2NyaWJlKG9uV2ViU29ja2V0UmVhZHlIYW5kbGVyKTtcclxuV2ViU29ja2V0c0FnZW50U3ViamVjdF8ucGlwZShmaWx0ZXJfMS5maWx0ZXIoZnVuY3Rpb24gKHdzKSB7IHJldHVybiAhIXdzOyB9KSwgc3dpdGNoTWFwXzEuc3dpdGNoTWFwKGZ1bmN0aW9uICh3cykgeyByZXR1cm4gd3MuT25DbG9zZVN1YmplY3Q7IH0pKS5zdWJzY3JpYmUob25XZWJTb2NrZXRDbG9zZUhhbmRsZXIpO1xyXG5fQ29tbXVuaWNhdGlvblN1YmplY3Quc3Vic2NyaWJlKGZ1bmN0aW9uIChtKSB7IHJldHVybiBEZWJ1Z1N1YmplY3RfLm5leHQobSk7IH0pO1xyXG5EZWJ1Z1N1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGNvbnN0XzEuaXNEZWJ1ZykpLnN1YnNjcmliZShmdW5jdGlvbiAobSkge1xyXG4gICAgcmV0dXJuIGNvbnNvbGUud2FybihcIldTIFNlcnZpY2U6IFwiLCBtKTtcclxufSk7XHJcbi8vIEV4cG9ydHNcclxudmFyIFdTU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdTU2VydmljZSgpIHtcclxuICAgIH1cclxuICAgIC8vSW5wdXRcclxuICAgIFdTU2VydmljZS5fQ29tbXVuaWNhdGlvblN1YmplY3QgPSBfQ29tbXVuaWNhdGlvblN1YmplY3Q7XHJcbiAgICBXU1NlcnZpY2UuX0lzV2luZG93TG9hZGVkU3ViamVjdCA9IF9Jc1dpbmRvd0xvYWRlZFN1YmplY3Q7XHJcbiAgICBXU1NlcnZpY2UuX0lzUmVtb3RlU3ViamVjdCA9IF9Jc1JlbW90ZVN1YmplY3Q7XHJcbiAgICAvLyBPdXRwdXRcclxuICAgIFdTU2VydmljZS5Db21tdW5pY2F0aW9uU3ViamVjdF8gPSBDb21tdW5pY2F0aW9uU3ViamVjdF87XHJcbiAgICBXU1NlcnZpY2UuV2ViU29ja2V0c0FnZW50U3ViamVjdF8gPSBXZWJTb2NrZXRzQWdlbnRTdWJqZWN0XztcclxuICAgIFdTU2VydmljZS5SZXNldEFnZW50U3ViamVjdF8gPSBSZXNldEFnZW50U3ViamVjdF87XHJcbiAgICBXU1NlcnZpY2UuSXNXZWJTb2NrZXRDb25uZWN0aW9uT3Blbl8gPSBJc1dlYlNvY2tldENvbm5lY3Rpb25PcGVuXztcclxuICAgIHJldHVybiBXU1NlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV1NTZXJ2aWNlID0gV1NTZXJ2aWNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9pbnRlZ3JhdGlvbi9pbnRlZ3JhdGlvblwiKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5Jbml0U2VydmljZSA9IHZvaWQgMDtcclxudmFyIEJlaGF2aW9yU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0XCIpO1xyXG52YXIgY29tYmluZUxhdGVzdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9jb21iaW5lTGF0ZXN0XCIpO1xyXG52YXIgZmlsdGVyXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZmlsdGVyXCIpO1xyXG52YXIgdGFrZVVudGlsXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvdGFrZVVudGlsXCIpO1xyXG52YXIgU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvU3ViamVjdFwiKTtcclxudmFyIGNvbnN0XzEgPSByZXF1aXJlKFwiLi4vLi4vY29uc3RcIik7XHJcbi8vIElucHV0XHJcbnZhciBfSXNXZWJTb2NrZXRDb25uZWN0aW9uT3BlbiA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG52YXIgX0lzTWVkaWFDb25maWd1cmVkU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG52YXIgX0Vudmlyb25tZW50U3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QoXCJyZW1vdGVcIik7XHJcbi8vIE91dHB1dFxyXG52YXIgX0lzV2luZG93TG9hZGVkU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG52YXIgX0lzR2FtZUxvYWRlZFN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxudmFyIEluaXRTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgRGVidWdTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgRW52U3ViamVjdF8gPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KFwicHJvZHVjdGlvblwiKTtcclxuLy8gTWV0aG9kc1xyXG52YXIgZ2V0SXNSZW1vdGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfRW52aXJvbm1lbnRTdWJqZWN0LmdldFZhbHVlKCkgPT09IFwicmVtb3RlXCI7IH07XHJcbnZhciBnZXRJc0xvY2FsID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX0Vudmlyb25tZW50U3ViamVjdC5nZXRWYWx1ZSgpID09PSBcImxvY2FsXCI7IH07XHJcbnZhciBvbkxvYWRIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIG9yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XHJcbiAgICB2YXIgaXNMb2NhbCA9IG9yaWdpbi5pbmNsdWRlcyhcImxvY2FsaG9zdFwiKTtcclxuICAgIF9FbnZpcm9ubWVudFN1YmplY3QubmV4dChcInJlbW90ZVwiKTsgLy9pc0xvY2FsID8gXCJsb2NhbFwiIDogXCJyZW1vdGVcIik7XHJcbiAgICBfSXNXaW5kb3dMb2FkZWRTdWJqZWN0Lm5leHQodHJ1ZSk7XHJcbn07XHJcbnZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgSW5pdFN1YmplY3RfLm5leHQoKTtcclxuICAgIEVudlN1YmplY3RfLm5leHQoXCJwcm9kdWN0aW9uXCIpO1xyXG59O1xyXG4vLyBTdWJzY3JpcHRpb25zXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBvbkxvYWRIYW5kbGVyKTtcclxuY29tYmluZUxhdGVzdF8xLmNvbWJpbmVMYXRlc3QoW1xyXG4gICAgX0lzV2luZG93TG9hZGVkU3ViamVjdCxcclxuICAgIF9Jc0dhbWVMb2FkZWRTdWJqZWN0LFxyXG4gICAgX0lzV2ViU29ja2V0Q29ubmVjdGlvbk9wZW4sXHJcbiAgICBfSXNNZWRpYUNvbmZpZ3VyZWRTdWJqZWN0LFxyXG5dKVxyXG4gICAgLnBpcGUodGFrZVVudGlsXzEudGFrZVVudGlsKEluaXRTdWJqZWN0XyksIGZpbHRlcl8xLmZpbHRlcihmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBpc1dpbmRvd0xvYWRlZFN1YmplY3QgPSBfYVswXSwgaXNHYW1lTG9hZGVkID0gX2FbMV0sIGlzV2ViU29ja2V0Q29ubmVjdGlvbk9wZW4gPSBfYVsyXSwgaXNNZWRpYUNvbmZpZ3VyZWQgPSBfYVszXTtcclxuICAgIERlYnVnU3ViamVjdF8ubmV4dChbXHJcbiAgICAgICAgaXNXaW5kb3dMb2FkZWRTdWJqZWN0LFxyXG4gICAgICAgIGlzR2FtZUxvYWRlZCxcclxuICAgICAgICBpc1dlYlNvY2tldENvbm5lY3Rpb25PcGVuLFxyXG4gICAgICAgIGlzTWVkaWFDb25maWd1cmVkLFxyXG4gICAgXSk7XHJcbiAgICB2YXIgaXNSZW1vdGUgPSBnZXRJc1JlbW90ZSgpO1xyXG4gICAgaWYgKCFpc1dpbmRvd0xvYWRlZFN1YmplY3QgfHwgIWlzR2FtZUxvYWRlZCB8fCAhaXNNZWRpYUNvbmZpZ3VyZWQpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKGlzUmVtb3RlICYmICFpc1dlYlNvY2tldENvbm5lY3Rpb25PcGVuKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KSlcclxuICAgIC5zdWJzY3JpYmUoaW5pdCk7XHJcbkluaXRTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgRGVidWdTdWJqZWN0Xy5uZXh0KFwiSU5JVCFcIik7XHJcbn0pO1xyXG5EZWJ1Z1N1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGNvbnN0XzEuaXNEZWJ1ZykpLnN1YnNjcmliZShmdW5jdGlvbiAobSkge1xyXG4gICAgcmV0dXJuIGNvbnNvbGUud2FybihcIkluaXQgU2VydmljZTogXCIsIG0pO1xyXG59KTtcclxuLy8gRXhwb3J0c1xyXG52YXIgSW5pdFNlcnZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBJbml0U2VydmljZSgpIHtcclxuICAgIH1cclxuICAgIC8vIElucHV0XHJcbiAgICBJbml0U2VydmljZS5fSXNXZWJTb2NrZXRDb25uZWN0aW9uT3BlbiA9IF9Jc1dlYlNvY2tldENvbm5lY3Rpb25PcGVuO1xyXG4gICAgSW5pdFNlcnZpY2UuX0Vudmlyb25tZW50U3ViamVjdCA9IF9FbnZpcm9ubWVudFN1YmplY3Q7XHJcbiAgICBJbml0U2VydmljZS5fSXNXaW5kb3dMb2FkZWRTdWJqZWN0ID0gX0lzV2luZG93TG9hZGVkU3ViamVjdDtcclxuICAgIEluaXRTZXJ2aWNlLl9Jc0dhbWVMb2FkZWRTdWJqZWN0ID0gX0lzR2FtZUxvYWRlZFN1YmplY3Q7XHJcbiAgICBJbml0U2VydmljZS5fSXNNZWRpYUNvbmZpZ3VyZWRTdWJqZWN0ID0gX0lzTWVkaWFDb25maWd1cmVkU3ViamVjdDtcclxuICAgIC8vIE91dHB1dFxyXG4gICAgSW5pdFNlcnZpY2UuSW5pdFN1YmplY3RfID0gSW5pdFN1YmplY3RfO1xyXG4gICAgSW5pdFNlcnZpY2UuRGVidWdTdWJqZWN0XyA9IERlYnVnU3ViamVjdF87XHJcbiAgICBJbml0U2VydmljZS5FbnZTdWJqZWN0XyA9IEVudlN1YmplY3RfO1xyXG4gICAgcmV0dXJuIEluaXRTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLkluaXRTZXJ2aWNlID0gSW5pdFNlcnZpY2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBiYWNrZW5kXzEgPSByZXF1aXJlKFwiLi4vLi4vYmFja2VuZC9iYWNrZW5kXCIpO1xyXG52YXIgY2hhbm5lbF8xID0gcmVxdWlyZShcIi4uLy4uL2NoYW5uZWwvY2hhbm5lbFwiKTtcclxudmFyIHJ0Y18xID0gcmVxdWlyZShcIi4uLy4uL2NvbW11bmljYXRpb24vcnRjL3J0Y1wiKTtcclxudmFyIG1lZGlhXzEgPSByZXF1aXJlKFwiLi4vLi4vbWVkaWEvbWVkaWFcIik7XHJcbnZhciBzdGF0ZV8xID0gcmVxdWlyZShcIi4uLy4uL3N0YXRlL3N0YXRlXCIpO1xyXG52YXIgaW5pdF8xID0gcmVxdWlyZShcIi4uL2luaXRcIik7XHJcbmluaXRfMS5Jbml0U2VydmljZS5Jbml0U3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJhY2tlbmRfMS5CYWNrZW5kU2VydmljZS5fSW5pdFN1YmplY3QubmV4dCgpOyB9KTtcclxuaW5pdF8xLkluaXRTZXJ2aWNlLkluaXRTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gY2hhbm5lbF8xLkNoYW5uZWxTZXJ2aWNlLl9Jbml0U3ViamVjdC5uZXh0KCk7IH0pO1xyXG5pbml0XzEuSW5pdFNlcnZpY2UuSW5pdFN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7IHJldHVybiBtZWRpYV8xLk1lZGlhU2VydmljZS5fSW5pdFN1YmplY3QubmV4dCgpOyB9KTtcclxuaW5pdF8xLkluaXRTZXJ2aWNlLkluaXRTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gcnRjXzEuUlRDU2VydmljZS5fSW5pdFN1YmplY3QubmV4dCgpOyB9KTtcclxuaW5pdF8xLkluaXRTZXJ2aWNlLkluaXRTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RhdGVfMS5TdGF0ZVNlcnZpY2UuX0luaXRTdWJqZWN0Lm5leHQoKTsgfSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL2ludGVncmF0aW9uL2ludGVncmF0aW9uXCIpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZmlsdGVyXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZmlsdGVyXCIpO1xyXG52YXIgYmFja2VuZF8xID0gcmVxdWlyZShcIi4uLy4uL2JhY2tlbmQvYmFja2VuZFwiKTtcclxudmFyIHJ0Y18xID0gcmVxdWlyZShcIi4uLy4uL2NvbW11bmljYXRpb24vcnRjL3J0Y1wiKTtcclxudmFyIGluaXRfMSA9IHJlcXVpcmUoXCIuLi8uLi9pbml0L2luaXRcIik7XHJcbnZhciBzdGF0ZV8xID0gcmVxdWlyZShcIi4uLy4uL3N0YXRlL3N0YXRlXCIpO1xyXG52YXIgdW5pdHlfMSA9IHJlcXVpcmUoXCIuLi8uLi91bml0eS91bml0eVwiKTtcclxudmFyIG1lZGlhXzEgPSByZXF1aXJlKFwiLi4vbWVkaWFcIik7XHJcbm1lZGlhXzEuTWVkaWFTZXJ2aWNlLklzUHJlc2VudGluZ1N1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uIChpc1ByZXNlbnRpbmcpIHsgcmV0dXJuIGlzUHJlc2VudGluZzsgfSkpLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7IHJldHVybiBiYWNrZW5kXzEuQmFja2VuZFNlcnZpY2UuX1VzZVRWQ2hhbm5lbFN1YmplY3QubmV4dCgxKTsgfSk7XHJcbm1lZGlhXzEuTWVkaWFTZXJ2aWNlLkltYWdlRGF0YU1lc3NhZ2VTdWJqZWN0Xy5zdWJzY3JpYmUoZnVuY3Rpb24gKG0pIHtcclxuICAgIHJldHVybiBydGNfMS5SVENTZXJ2aWNlLl9Ccm9hZGNhc3RTdWJqZWN0Lm5leHQoSlNPTi5zdHJpbmdpZnkobSkpO1xyXG59KTtcclxubWVkaWFfMS5NZWRpYVNlcnZpY2UuSXNQcmVzZW50aW5nU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChpc1ByZXNlbnRpbmcpIHtcclxuICAgIHJldHVybiBzdGF0ZV8xLlN0YXRlU2VydmljZS5fSXNQcmVzZW50aW5nU3ViamVjdC5uZXh0KGlzUHJlc2VudGluZyk7XHJcbn0pO1xyXG5tZWRpYV8xLk1lZGlhU2VydmljZS5Jc1ByZXNlbnRpbmdTdWJqZWN0Xy5waXBlKGZpbHRlcl8xLmZpbHRlcihmdW5jdGlvbiAoaXNQcmVzZW50aW5nKSB7IHJldHVybiBpc1ByZXNlbnRpbmc7IH0pKS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5pdHlfMS5Vbml0eVNlcnZpY2UuX0NhblNlbmRNZXNzYWdlcy5uZXh0KGZhbHNlKTsgfSk7XHJcbm1lZGlhXzEuTWVkaWFTZXJ2aWNlLklzUHJlc2VudGluZ1N1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uIChpc1ByZXNlbnRpbmcpIHsgcmV0dXJuIGlzUHJlc2VudGluZzsgfSkpLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7IHJldHVybiB1bml0eV8xLlVuaXR5U2VydmljZS5fUXVpdEdhbWVTdWJqZWN0Lm5leHQoKTsgfSk7XHJcbm1lZGlhXzEuTWVkaWFTZXJ2aWNlLklzTWVkaWFDb25maWd1cmVkU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChpc0NvbmZpZ3VyZWQpIHtcclxuICAgIHJldHVybiBpbml0XzEuSW5pdFNlcnZpY2UuX0lzTWVkaWFDb25maWd1cmVkU3ViamVjdC5uZXh0KGlzQ29uZmlndXJlZCk7XHJcbn0pO1xyXG5tZWRpYV8xLk1lZGlhU2VydmljZS5NZWRpYVN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAobWVkaWEpIHtcclxuICAgIHJldHVybiBydGNfMS5SVENTZXJ2aWNlLl9NZWRpYVN1YmplY3QubmV4dChtZWRpYSk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLk1lZGlhU2VydmljZSA9IHZvaWQgMDtcclxudmFyIEJlaGF2aW9yU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0XCIpO1xyXG52YXIgZmlsdGVyXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZmlsdGVyXCIpO1xyXG52YXIgc3dpdGNoTWFwXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvc3dpdGNoTWFwXCIpO1xyXG52YXIgdGhyb3R0bGVUaW1lXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvdGhyb3R0bGVUaW1lXCIpO1xyXG52YXIgU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvU3ViamVjdFwiKTtcclxudmFyIGNvbnN0XzEgPSByZXF1aXJlKFwiLi4vLi4vY29uc3RcIik7XHJcbnZhciBkZWZpbml0aW9uc18xID0gcmVxdWlyZShcIi4uLy4uL3NoYXJlZC9kZWZpbml0aW9uc1wiKTtcclxudmFyIElzSW5pdGlhbGl6ZWRTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcbnZhciBBdWRpb1N0cmVhbVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xyXG52YXIgQXVkaW9UcmFja1N1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xyXG4vLyBJbnB1dFxyXG52YXIgX0luaXRTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfU2hhcmVTY3JlZW5TdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfQWRkQXVkaW9TdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbi8vIE91dHB1dFxyXG52YXIgT25SZXF1ZXN0QW5pbWF0aW9uRnJhbWVfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBJc1ByZXNlbnRpbmdTdWJqZWN0XyA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG52YXIgTWVkaWFTdWJqZWN0XyA9IG5ldyBCZWhhdmlvclN1YmplY3RfMS5CZWhhdmlvclN1YmplY3QobnVsbCk7XHJcbnZhciBJc01lZGlhQ29uZmlndXJlZFN1YmplY3RfID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcbnZhciBTY3JlZW5NZWRpYVN1YmplY3RfID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChudWxsKTtcclxudmFyIEltYWdlU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIEltYWdlRGF0YU1lc3NhZ2VTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgRGVidWdTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4vLyBBdXhpbGFyeVxyXG52YXIgU0laRSA9IDEwMjQ7XHJcbnZhciB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiKTtcclxudmFyIGNhbnZhcztcclxuLy8gTWV0aG9kc1xyXG52YXIgZ2V0QXVkaW8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlc1xyXG4gICAgICAgIC5nZXRVc2VyTWVkaWEoeyBhdWRpbzogdHJ1ZSwgdmlkZW86IGZhbHNlIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHN0cmVhbSkge1xyXG4gICAgICAgIE1lZGlhU3ViamVjdF8ubmV4dChzdHJlYW0pO1xyXG4gICAgICAgIEF1ZGlvU3RyZWFtU3ViamVjdC5uZXh0KHN0cmVhbSk7XHJcbiAgICAgICAgQXVkaW9UcmFja1N1YmplY3QubmV4dChzdHJlYW0uZ2V0QXVkaW9UcmFja3MoKVswXSk7XHJcbiAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIERlYnVnU3ViamVjdF8ubmV4dChcImdldEF1ZGlvKCkgZXJyb3I6IFwiICsgZS5uYW1lKTtcclxuICAgIH0pXHJcbiAgICAgICAgLmZpbmFsbHkoZnVuY3Rpb24gKCkgeyByZXR1cm4gSXNNZWRpYUNvbmZpZ3VyZWRTdWJqZWN0Xy5uZXh0KHRydWUpOyB9KTtcclxufTtcclxudmFyIGdldERpc3BsYXlNZWRpYSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzXHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgLmdldERpc3BsYXlNZWRpYSh7XHJcbiAgICAgICAgdmlkZW86IHRydWUsXHJcbiAgICAgICAgYXVkaW86IHRydWUsXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChzdHJlYW0pIHtcclxuICAgICAgICBTY3JlZW5NZWRpYVN1YmplY3RfLm5leHQoc3RyZWFtKTtcclxuICAgICAgICBEZWJ1Z1N1YmplY3RfLm5leHQoXCJMb2NhbCBNZWRpYVwiKTtcclxuICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgRGVidWdTdWJqZWN0Xy5uZXh0KFwiZ2V0RGlzcGxheU1lZGlhKCkgZXJyb3I6IFwiICsgZS5uYW1lKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgaW5pdGlhbGl6ZUNhbnZhcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY2FudmFzID0gbmV3IE9mZnNjcmVlbkNhbnZhcyhTSVpFLCBTSVpFKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgRGVidWdTdWJqZWN0Xy5uZXh0KGUpO1xyXG4gICAgfVxyXG59O1xyXG52YXIgc3RyZWFtVG9JbWFnZUhhbmRsZXIgPSBmdW5jdGlvbiAoc3RyZWFtKSB7XHJcbiAgICBpZiAoIWNhbnZhcylcclxuICAgICAgICByZXR1cm47XHJcbiAgICB2aWRlby5wYXVzZSgpO1xyXG4gICAgdmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xyXG4gICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcihcImNhbnBsYXlcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZpZGVvLnBsYXkoKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgdXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgaWYgKCFjYW52YXMpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgKF9hID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRyYXdJbWFnZSh2aWRlbywgMCwgMCwgU0laRSwgU0laRSk7XHJcbiAgICB2YXIgZGF0YSA9IGNhbnZhcy5jb252ZXJ0VG9CbG9iKHtcclxuICAgICAgICB0eXBlOiBcImltYWdlL2pwZWdcIixcclxuICAgICAgICBxdWFsaXR5OiAwLjEsXHJcbiAgICB9KTtcclxuICAgIGRhdGEudGhlbihmdW5jdGlvbiAoYmxvYikge1xyXG4gICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xyXG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzID0gcmVhZGVyLnJlc3VsdDtcclxuICAgICAgICAgICAgaWYgKCFzIHx8IHR5cGVvZiBzICE9PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBzID0gcy5yZXBsYWNlKFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCxcIiwgXCJcIik7XHJcbiAgICAgICAgICAgIEltYWdlU3ViamVjdF8ubmV4dChzKTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBvbkxvY2FsTWVkaWFIYW5kbGVyID0gZnVuY3Rpb24gKHN0cmVhbSkge1xyXG4gICAgaWYgKCFzdHJlYW0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgSXNQcmVzZW50aW5nU3ViamVjdF8ubmV4dCh0cnVlKTtcclxuICAgIHN0cmVhbVRvSW1hZ2VIYW5kbGVyKHN0cmVhbSk7XHJcbiAgICB2YXIgYXVkaW9TdHJlYW0gPSBBdWRpb1N0cmVhbVN1YmplY3QuZ2V0VmFsdWUoKTtcclxuICAgIGlmICghYXVkaW9TdHJlYW0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHN0cmVhbS5nZXRBdWRpb1RyYWNrcygpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciB0cmFjayA9IF9hW19pXTtcclxuICAgICAgICBhdWRpb1N0cmVhbS5hZGRUcmFjayh0cmFjayk7XHJcbiAgICB9XHJcbn07XHJcbnZhciBvbkltYWdlVG9JbWFnZURhdGFNZXNzYWdlSGFuZGxlciA9IGZ1bmN0aW9uIChpbWFnZSkge1xyXG4gICAgdmFyIG1lc3NhZ2UgPSB7XHJcbiAgICAgICAgdHlwZTogZGVmaW5pdGlvbnNfMS5FTWVzc2FnZVR5cGUuSW1hZ2VEYXRhLFxyXG4gICAgICAgIGltYWdlOiBpbWFnZSxcclxuICAgIH07XHJcbiAgICBJbWFnZURhdGFNZXNzYWdlU3ViamVjdF8ubmV4dChtZXNzYWdlKTtcclxufTtcclxudmFyIG9uU2hhcmVTY3JlZW5IYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgRGVidWdTdWJqZWN0Xy5uZXh0KFwiSW5pdCBNZWRpYVwiKTtcclxuICAgIGdldERpc3BsYXlNZWRpYSgpO1xyXG59O1xyXG52YXIgb25BZGRBdWRpbyA9IGZ1bmN0aW9uIChzdHJlYW0pIHtcclxuICAgIERlYnVnU3ViamVjdF8ubmV4dChcIk1lZGlhIFNlcnZpY2UgLT4gb25BZGRBdWRpb1wiKTtcclxuICAgIHZhciBhdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKTtcclxuICAgIGF1ZGlvLnNldEF0dHJpYnV0ZShcImF1dG9wbGF5XCIsIFwidHJ1ZVwiKTtcclxuICAgIGF1ZGlvLnNyY09iamVjdCA9IHN0cmVhbTtcclxuICAgIElzUHJlc2VudGluZ1N1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uIChpc1ByZXNlbnRpbmcpIHsgcmV0dXJuIGlzUHJlc2VudGluZzsgfSkpLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7IHJldHVybiAoYXVkaW8ubXV0ZWQgPSB0cnVlKTsgfSk7XHJcbn07XHJcbnZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaW5pdGlhbGl6ZUNhbnZhcygpO1xyXG4gICAgc3RlcCgpO1xyXG4gICAgSXNJbml0aWFsaXplZFN1YmplY3QubmV4dCh0cnVlKTtcclxufTtcclxudmFyIGlzSW5pdGlhbGl6ZWRGaWx0ZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBJc0luaXRpYWxpemVkU3ViamVjdC5nZXRWYWx1ZSgpOyB9O1xyXG52YXIgc3RlcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIE9uUmVxdWVzdEFuaW1hdGlvbkZyYW1lXy5uZXh0KCk7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbn07XHJcbi8vIFN1YnNjcmlwdGlvbnNcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGdldEF1ZGlvKTtcclxuX0luaXRTdWJqZWN0LnN1YnNjcmliZShpbml0KTtcclxuSXNQcmVzZW50aW5nU3ViamVjdF8ucGlwZShmaWx0ZXJfMS5maWx0ZXIoZnVuY3Rpb24gKGlzUHJlc2VudGluZykgeyByZXR1cm4gaXNQcmVzZW50aW5nOyB9KSwgc3dpdGNoTWFwXzEuc3dpdGNoTWFwKGZ1bmN0aW9uICgpIHsgcmV0dXJuIEF1ZGlvVHJhY2tTdWJqZWN0OyB9KSwgZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uICh0cmFjaykgeyByZXR1cm4gISF0cmFjazsgfSkpLnN1YnNjcmliZShmdW5jdGlvbiAodHJhY2spIHsgcmV0dXJuICh0cmFjay5lbmFibGVkID0gZmFsc2UpOyB9KTtcclxuSW1hZ2VTdWJqZWN0Xy5waXBlKGZpbHRlcl8xLmZpbHRlcihpc0luaXRpYWxpemVkRmlsdGVyKSkuc3Vic2NyaWJlKG9uSW1hZ2VUb0ltYWdlRGF0YU1lc3NhZ2VIYW5kbGVyKTtcclxuU2NyZWVuTWVkaWFTdWJqZWN0Xy5waXBlKGZpbHRlcl8xLmZpbHRlcihpc0luaXRpYWxpemVkRmlsdGVyKSkuc3Vic2NyaWJlKG9uTG9jYWxNZWRpYUhhbmRsZXIpO1xyXG5fU2hhcmVTY3JlZW5TdWJqZWN0XHJcbiAgICAvLyAucGlwZShmaWx0ZXIoaXNJbml0aWFsaXplZEZpbHRlciksIGZpbHRlcihoYXNOb0xvY2FsTWVkaWFGaWx0ZXIpKVxyXG4gICAgLnN1YnNjcmliZShvblNoYXJlU2NyZWVuSGFuZGxlcik7XHJcbl9BZGRBdWRpb1N1YmplY3Quc3Vic2NyaWJlKG9uQWRkQXVkaW8pO1xyXG5PblJlcXVlc3RBbmltYXRpb25GcmFtZV8ucGlwZShmaWx0ZXJfMS5maWx0ZXIoZnVuY3Rpb24gKCkgeyByZXR1cm4gSXNQcmVzZW50aW5nU3ViamVjdF8uZ2V0VmFsdWUoKTsgfSksIHRocm90dGxlVGltZV8xLnRocm90dGxlVGltZShjb25zdF8xLlVQREFURV9JTlRFUlZBTCkpLnN1YnNjcmliZSh1cGRhdGUpO1xyXG5EZWJ1Z1N1YmplY3RfLnBpcGUoZmlsdGVyXzEuZmlsdGVyKGNvbnN0XzEuaXNEZWJ1ZykpLnN1YnNjcmliZShmdW5jdGlvbiAobSkge1xyXG4gICAgcmV0dXJuIGNvbnNvbGUud2FybihcIk1lZGlhIFNlcnZpY2U6IFwiLCBtKTtcclxufSk7XHJcbi8vIEV4cG9ydFxyXG52YXIgTWVkaWFTZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTWVkaWFTZXJ2aWNlKCkge1xyXG4gICAgfVxyXG4gICAgLy8gSW5wdXRcclxuICAgIE1lZGlhU2VydmljZS5fSW5pdFN1YmplY3QgPSBfSW5pdFN1YmplY3Q7XHJcbiAgICBNZWRpYVNlcnZpY2UuX1NoYXJlU2NyZWVuU3ViamVjdCA9IF9TaGFyZVNjcmVlblN1YmplY3Q7XHJcbiAgICBNZWRpYVNlcnZpY2UuX0FkZEF1ZGlvU3ViamVjdCA9IF9BZGRBdWRpb1N1YmplY3Q7XHJcbiAgICAvLyBPdXRwdXRcclxuICAgIE1lZGlhU2VydmljZS5Jc1ByZXNlbnRpbmdTdWJqZWN0XyA9IElzUHJlc2VudGluZ1N1YmplY3RfO1xyXG4gICAgTWVkaWFTZXJ2aWNlLklzTWVkaWFDb25maWd1cmVkU3ViamVjdF8gPSBJc01lZGlhQ29uZmlndXJlZFN1YmplY3RfO1xyXG4gICAgTWVkaWFTZXJ2aWNlLk1lZGlhU3ViamVjdF8gPSBNZWRpYVN1YmplY3RfO1xyXG4gICAgTWVkaWFTZXJ2aWNlLlNjcmVlbk1lZGlhU3ViamVjdF8gPSBTY3JlZW5NZWRpYVN1YmplY3RfO1xyXG4gICAgTWVkaWFTZXJ2aWNlLkltYWdlRGF0YU1lc3NhZ2VTdWJqZWN0XyA9IEltYWdlRGF0YU1lc3NhZ2VTdWJqZWN0XztcclxuICAgIE1lZGlhU2VydmljZS5EZWJ1Z1N1YmplY3RfID0gRGVidWdTdWJqZWN0XztcclxuICAgIHJldHVybiBNZWRpYVNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTWVkaWFTZXJ2aWNlID0gTWVkaWFTZXJ2aWNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlN0YXRlU2VydmljZSA9IHZvaWQgMDtcclxudmFyIEJlaGF2aW9yU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0XCIpO1xyXG52YXIgY29tYmluZUxhdGVzdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9jb21iaW5lTGF0ZXN0XCIpO1xyXG52YXIgU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvU3ViamVjdFwiKTtcclxudmFyIGRlZmluaXRpb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vc2hhcmVkL2RlZmluaXRpb25zXCIpO1xyXG4vLyBJbnB1dFxyXG52YXIgX0luaXRTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfQ2xpZW50U3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgX0lEU3ViamVjdF8gPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIF9DdXJyZW50VFZDaGFubmVsU3RhdGVTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfVFZQcm9ncmFtU3RhdGVTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBfSXNQcmVzZW50aW5nU3ViamVjdCA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG4vLyBPdXRwdXRcclxudmFyIEdhbWVTdGF0ZVN1YmplY3RfID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdChkZWZpbml0aW9uc18xLkRFRkFVTFRfU1RBVEUpO1xyXG52YXIgRGVidWdTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgZ2V0U3RhdGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAoX19hc3NpZ24oe30sIEdhbWVTdGF0ZVN1YmplY3RfLmdldFZhbHVlKCkpKTsgfTtcclxudmFyIHVwZGF0ZVN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWwpIHtcclxuICAgIHZhciBwcmV2U3RhdGUgPSBnZXRTdGF0ZSgpO1xyXG4gICAgdmFyIG5ld1N0YXRlID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHByZXZTdGF0ZSksIHBhcnRpYWwpO1xyXG4gICAgR2FtZVN0YXRlU3ViamVjdF8ubmV4dChuZXdTdGF0ZSk7XHJcbn07XHJcbnZhciBzdGF0ZVVwZGF0ZUhhbmRsZXIgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBjbGllbnQgPSBfYVswXSwgaWQgPSBfYVsxXSwgY2hhbm5lbCA9IF9hWzJdLCBwcm9ncmFtID0gX2FbM10sIGlzUHJlc2VudGluZyA9IF9hWzRdO1xyXG4gICAgRGVidWdTdWJqZWN0Xy5uZXh0KGNsaWVudCA9PT0gbnVsbCB8fCBjbGllbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNsaWVudC5Db25uZWN0aW9uTWFuYWdlci5jb25uZWN0aW9ucyk7XHJcbiAgICB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgc3RyZWFtczogKGNsaWVudCA9PT0gbnVsbCB8fCBjbGllbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNsaWVudC5zdHJlYW1zKSB8fCB7fSxcclxuICAgICAgICBpZDogaWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICAgIGNoYW5uZWw6IGNoYW5uZWwgfHwgbnVsbCxcclxuICAgICAgICBwcm9ncmFtOiBwcm9ncmFtLFxyXG4gICAgICAgIGlzUHJlc2VudGluZzogaXNQcmVzZW50aW5nLFxyXG4gICAgfSk7XHJcbn07XHJcbl9Jbml0U3ViamVjdC5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgY29tYmluZUxhdGVzdF8xLmNvbWJpbmVMYXRlc3QoW1xyXG4gICAgICAgIF9DbGllbnRTdWJqZWN0LFxyXG4gICAgICAgIF9JRFN1YmplY3RfLFxyXG4gICAgICAgIF9DdXJyZW50VFZDaGFubmVsU3RhdGVTdWJqZWN0LFxyXG4gICAgICAgIF9UVlByb2dyYW1TdGF0ZVN1YmplY3QsXHJcbiAgICAgICAgX0lzUHJlc2VudGluZ1N1YmplY3QsXHJcbiAgICBdKS5zdWJzY3JpYmUoc3RhdGVVcGRhdGVIYW5kbGVyKTtcclxuICAgIEdhbWVTdGF0ZVN1YmplY3RfLnN1YnNjcmliZShmdW5jdGlvbiAoc3RhdGUpIHsgcmV0dXJuIERlYnVnU3ViamVjdF8ubmV4dChzdGF0ZSk7IH0pO1xyXG59KTtcclxudmFyIFN0YXRlU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFN0YXRlU2VydmljZSgpIHtcclxuICAgIH1cclxuICAgIC8vIElucHV0XHJcbiAgICBTdGF0ZVNlcnZpY2UuX0luaXRTdWJqZWN0ID0gX0luaXRTdWJqZWN0O1xyXG4gICAgU3RhdGVTZXJ2aWNlLl9DbGllbnRTdWJqZWN0ID0gX0NsaWVudFN1YmplY3Q7XHJcbiAgICBTdGF0ZVNlcnZpY2UuX0lEU3ViamVjdF8gPSBfSURTdWJqZWN0XztcclxuICAgIFN0YXRlU2VydmljZS5fQ3VycmVudFRWQ2hhbm5lbFN0YXRlU3ViamVjdCA9IF9DdXJyZW50VFZDaGFubmVsU3RhdGVTdWJqZWN0O1xyXG4gICAgU3RhdGVTZXJ2aWNlLl9UVlByb2dyYW1TdGF0ZVN1YmplY3QgPSBfVFZQcm9ncmFtU3RhdGVTdWJqZWN0O1xyXG4gICAgU3RhdGVTZXJ2aWNlLl9Jc1ByZXNlbnRpbmdTdWJqZWN0ID0gX0lzUHJlc2VudGluZ1N1YmplY3Q7XHJcbiAgICAvLyBPdXRwdXRcclxuICAgIFN0YXRlU2VydmljZS5HYW1lU3RhdGVTdWJqZWN0XyA9IEdhbWVTdGF0ZVN1YmplY3RfO1xyXG4gICAgU3RhdGVTZXJ2aWNlLkRlYnVnU3ViamVjdF8gPSBEZWJ1Z1N1YmplY3RfO1xyXG4gICAgcmV0dXJuIFN0YXRlU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5TdGF0ZVNlcnZpY2UgPSBTdGF0ZVNlcnZpY2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL2ludGVncmF0aW9uL291dGdvaW5nXCIpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgb3V0Z29pbmdfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb21tdW5pY2F0aW9uL291dGdvaW5nL291dGdvaW5nXCIpO1xyXG52YXIgdW5pdHlfMSA9IHJlcXVpcmUoXCIuLi91bml0eVwiKTtcclxudW5pdHlfMS5Vbml0eVNlcnZpY2UuVW5pdHlNZXNzYWdlU3ViamVjdF8uc3Vic2NyaWJlKGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICBvdXRnb2luZ18xLk91dGdvaW5nTWVzc2FnZVNlcnZpY2UuX1Jhd01lc3NhZ2VTdWJqZWN0Lm5leHQobWVzc2FnZSk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlVuaXR5U2VydmljZSA9IHZvaWQgMDtcclxudmFyIEJlaGF2aW9yU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0XCIpO1xyXG52YXIgZmlsdGVyXzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZmlsdGVyXCIpO1xyXG52YXIgU3ViamVjdF8xID0gcmVxdWlyZShcInJ4anMvaW50ZXJuYWwvU3ViamVjdFwiKTtcclxuLy8gSW5wdXRcclxudmFyIF9DdXJyZW50VFZDaGFubmVsU3RhdGVTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdCgxKTtcclxudmFyIF9DYW5TZW5kTWVzc2FnZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KHRydWUpO1xyXG52YXIgX1NlbmRNZXNzYWdlVG9Vbml0eVN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIF9NYWtlRnVsbFNjcmVlblN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxudmFyIF9RdWl0R2FtZVN1YmplY3QgPSBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcclxuLy8gT3V0cHV0XHJcbnZhciBVbml0eU1lc3NhZ2VTdWJqZWN0XyA9IG5ldyBTdWJqZWN0XzEuU3ViamVjdCgpO1xyXG52YXIgUG9zaXRpb25TdGF0ZVN1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbnZhciBEZWJ1Z1N1YmplY3RfID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbi8vIEF1eGlsYXJ5XHJcbnZhciBNQU5BR0VSID0gXCJNYW5hZ2VyXCI7XHJcbnZhciBPTl9NRVNTQUdFID0gXCJPbk1lc3NhZ2VcIjtcclxuLy8gTWV0aG9kc1xyXG52YXIgc2VuZFRvVW5pdHkgPSBmdW5jdGlvbiAob2JqZWN0LCBtZXRob2QsIG1lc3NhZ2UpIHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGlmICghdW5pdHlJbnN0YW5jZSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICB1bml0eUluc3RhbmNlLlNlbmRNZXNzYWdlKG9iamVjdCwgbWV0aG9kLCBtZXNzYWdlKTtcclxufTtcclxudmFyIHNlbmRNZXNzYWdlVG9Vbml0eUhhbmRsZXIgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgRGVidWdTdWJqZWN0Xy5uZXh0KFtcIlNlbmQgVG8gVW5pdHlcIiwgbWVzc2FnZV0pO1xyXG4gICAgdmFyIG1lc3NhZ2VTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShtZXNzYWdlKTtcclxuICAgIHNlbmRUb1VuaXR5KE1BTkFHRVIsIE9OX01FU1NBR0UsIG1lc3NhZ2VTdHJpbmcpO1xyXG59O1xyXG52YXIgbWFrZUZ1bGxTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBpZiAoIXVuaXR5SW5zdGFuY2UpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgdW5pdHlJbnN0YW5jZS5TZXRGdWxsc2NyZWVuKDEpO1xyXG59O1xyXG52YXIgcXVpdEdhbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBpZiAoIXVuaXR5SW5zdGFuY2UpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgdW5pdHlJbnN0YW5jZS5RdWl0KCk7XHJcbn07XHJcbi8vIFN1YnNjcmlwdGlvbnNcclxuLy8gQHRzLWlnbm9yZVxyXG53aW5kb3cuc2VuZFVuaXR5TWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICByZXR1cm4gVW5pdHlNZXNzYWdlU3ViamVjdF8ubmV4dChtZXNzYWdlKTtcclxufTtcclxuX1NlbmRNZXNzYWdlVG9Vbml0eVN1YmplY3RcclxuICAgIC5waXBlKGZpbHRlcl8xLmZpbHRlcihmdW5jdGlvbiAoKSB7IHJldHVybiBfQ2FuU2VuZE1lc3NhZ2VzLmdldFZhbHVlKCk7IH0pKVxyXG4gICAgLnN1YnNjcmliZShzZW5kTWVzc2FnZVRvVW5pdHlIYW5kbGVyKTtcclxuX01ha2VGdWxsU2NyZWVuU3ViamVjdC5zdWJzY3JpYmUobWFrZUZ1bGxTY3JlZW4pO1xyXG5fUXVpdEdhbWVTdWJqZWN0LnN1YnNjcmliZShxdWl0R2FtZSk7XHJcbnZhciBVbml0eVNlcnZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBVbml0eVNlcnZpY2UoKSB7XHJcbiAgICB9XHJcbiAgICBVbml0eVNlcnZpY2UuX0N1cnJlbnRUVkNoYW5uZWxTdGF0ZVN1YmplY3QgPSBfQ3VycmVudFRWQ2hhbm5lbFN0YXRlU3ViamVjdDtcclxuICAgIFVuaXR5U2VydmljZS5fQ2FuU2VuZE1lc3NhZ2VzID0gX0NhblNlbmRNZXNzYWdlcztcclxuICAgIFVuaXR5U2VydmljZS5fU2VuZE1lc3NhZ2VUb1VuaXR5U3ViamVjdCA9IF9TZW5kTWVzc2FnZVRvVW5pdHlTdWJqZWN0O1xyXG4gICAgVW5pdHlTZXJ2aWNlLl9NYWtlRnVsbFNjcmVlblN1YmplY3QgPSBfTWFrZUZ1bGxTY3JlZW5TdWJqZWN0O1xyXG4gICAgVW5pdHlTZXJ2aWNlLl9RdWl0R2FtZVN1YmplY3QgPSBfUXVpdEdhbWVTdWJqZWN0O1xyXG4gICAgLy8gT3V0cHV0XHJcbiAgICBVbml0eVNlcnZpY2UuVW5pdHlNZXNzYWdlU3ViamVjdF8gPSBVbml0eU1lc3NhZ2VTdWJqZWN0XztcclxuICAgIFVuaXR5U2VydmljZS5Qb3NpdGlvblN0YXRlU3ViamVjdF8gPSBQb3NpdGlvblN0YXRlU3ViamVjdF87XHJcbiAgICBVbml0eVNlcnZpY2UuRGVidWdTdWJqZWN0XyA9IERlYnVnU3ViamVjdF87XHJcbiAgICByZXR1cm4gVW5pdHlTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLlVuaXR5U2VydmljZSA9IFVuaXR5U2VydmljZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5ERUZBVUxUX1NUQVRFID0gZXhwb3J0cy5VUkxfTkFNRSA9IGV4cG9ydHMuVVJMX1RWX0NIQU5ORUwgPSBleHBvcnRzLkVNZXNzYWdlVHlwZSA9IHZvaWQgMDtcclxuLy8gTWVzc2FnZXNcclxudmFyIEVNZXNzYWdlVHlwZTtcclxuKGZ1bmN0aW9uIChFTWVzc2FnZVR5cGUpIHtcclxuICAgIEVNZXNzYWdlVHlwZVtcIlByZXNlbnRcIl0gPSBcInByZXNlbnRcIjtcclxuICAgIEVNZXNzYWdlVHlwZVtcIkZ1bGxTY3JlZW5cIl0gPSBcImZ1bGxzY3JlZW5cIjtcclxuICAgIEVNZXNzYWdlVHlwZVtcIlBvc2l0aW9uXCJdID0gXCJwb3NpdGlvblwiO1xyXG4gICAgRU1lc3NhZ2VUeXBlW1wiSW1hZ2VEYXRhXCJdID0gXCJpbWFnZVwiO1xyXG4gICAgRU1lc3NhZ2VUeXBlW1wiU3RhcnRcIl0gPSBcInN0YXJ0XCI7XHJcbiAgICBFTWVzc2FnZVR5cGVbXCJQcm9jZWVkXCJdID0gXCJwcm9jZWVkXCI7XHJcbn0pKEVNZXNzYWdlVHlwZSA9IGV4cG9ydHMuRU1lc3NhZ2VUeXBlIHx8IChleHBvcnRzLkVNZXNzYWdlVHlwZSA9IHt9KSk7XHJcbi8vIEJhY2tlbmRcclxuZXhwb3J0cy5VUkxfVFZfQ0hBTk5FTCA9IFwiL3R2XCI7XHJcbmV4cG9ydHMuVVJMX05BTUUgPSBcIi9uYW1lXCI7XHJcbmV4cG9ydHMuREVGQVVMVF9TVEFURSA9IHtcclxuICAgIGlkOiBcIlwiLFxyXG4gICAgaXNQcmVzZW50aW5nOiBmYWxzZSxcclxuICAgIHN0cmVhbXM6IHt9LFxyXG4gICAgY2hhbm5lbDogMSxcclxuICAgIHByb2dyYW06IHt9LFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkRlYnVnU3ViamVjdCA9IGV4cG9ydHMuRW52aXJvbm1lbnRTdWJqZWN0ID0gZXhwb3J0cy5nZW5lcmF0ZUlkID0gdm9pZCAwO1xyXG52YXIgQmVoYXZpb3JTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9CZWhhdmlvclN1YmplY3RcIik7XHJcbnZhciBmaWx0ZXJfMSA9IHJlcXVpcmUoXCJyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXJcIik7XHJcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwicnhqcy9pbnRlcm5hbC9TdWJqZWN0XCIpO1xyXG52YXIgZ2V0UmFuZG9tTnVtYmVycyA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcclxuICAgIHZhciB2YWx1ZSA9IEFycmF5LmZyb20oTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogTWF0aC5wb3coMTAsIGxlbmd0aCkpLnRvU3RyaW5nKCkpLnJldmVyc2UoKTtcclxuICAgIHJldHVybiBuZXcgQXJyYXkobGVuZ3RoKVxyXG4gICAgICAgIC5maWxsKFwiMFwiKVxyXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHYsIGkpIHsgcmV0dXJuIHZhbHVlW2ldIHx8IHY7IH0pXHJcbiAgICAgICAgLnJldmVyc2UoKVxyXG4gICAgICAgIC5qb2luKFwiXCIpO1xyXG59O1xyXG5leHBvcnRzLmdlbmVyYXRlSWQgPSBmdW5jdGlvbiAoYW1vdW50LCBsZW5ndGgpIHtcclxuICAgIHJldHVybiBuZXcgQXJyYXkoYW1vdW50KVxyXG4gICAgICAgIC5maWxsKDApXHJcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoYSwgaSwgYikgeyByZXR1cm4gXCJcIiArIChpICYmIFwiLVwiKSArIGdldFJhbmRvbU51bWJlcnMobGVuZ3RoKTsgfSlcclxuICAgICAgICAuam9pbihcIlwiKTtcclxufTtcclxuZXhwb3J0cy5FbnZpcm9ubWVudFN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0XzEuQmVoYXZpb3JTdWJqZWN0KFwiZGV2ZWxvcG1lbnRcIik7XHJcbmV4cG9ydHMuRGVidWdTdWJqZWN0ID0gbmV3IFN1YmplY3RfMS5TdWJqZWN0KCk7XHJcbmV4cG9ydHMuRGVidWdTdWJqZWN0LnBpcGUoZmlsdGVyXzEuZmlsdGVyKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGV4cG9ydHMuRW52aXJvbm1lbnRTdWJqZWN0LmdldFZhbHVlKCkgPT09IFwiZGV2ZWxvcG1lbnRcIjsgfSkpLnN1YnNjcmliZShjb25zb2xlLndhcm4pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VSb290IjoiIn0=
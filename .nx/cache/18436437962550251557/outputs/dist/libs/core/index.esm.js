AFRAME.registerComponent('hide-on-ar', {
    enterVr: null,
    exitVr: null,
    init: function() {
        const sceneEl = this.el.sceneEl;
        if (sceneEl.is('ar-mode')) {
            this.el.object3D.visible = false;
        }
        this.enterVr = ()=>{
            if (sceneEl.is('ar-mode')) {
                this.el.object3D.visible = false;
            }
        };
        this.exitVr = ()=>{
            this.el.object3D.visible = true;
        };
        sceneEl.addEventListener('enter-vr', this.enterVr);
        sceneEl.addEventListener('exit-vr', this.exitVr);
    },
    remove: function() {
        const sceneEl = this.el.sceneEl;
        sceneEl.removeEventListener('enter-vr', this.enterVr);
        sceneEl.removeEventListener('exit-vr', this.exitVr);
    }
});

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function _class_call_check$5(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties$5(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class$5(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$5(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$5(Constructor, staticProps);
    return Constructor;
}
function _instanceof$1(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
var t$3 = globalThis, e$4 = t$3.ShadowRoot && (void 0 === t$3.ShadyCSS || t$3.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$1 = Symbol(), o$4 = new WeakMap;
var n$3 = /*#__PURE__*/ function() {
    function n(t, e, o) {
        _class_call_check$5(this, n);
        if (this._$cssResult$ = !0, o !== s$1) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    _create_class$5(n, [
        {
            key: "styleSheet",
            get: function get() {
                var t = this.o;
                var s = this.t;
                if (e$4 && void 0 === t) {
                    var e1 = void 0 !== s && 1 === s.length;
                    e1 && (t = o$4.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e1 && o$4.set(s, t));
                }
                return t;
            }
        },
        {
            key: "toString",
            value: function toString() {
                return this.cssText;
            }
        }
    ]);
    return n;
}();
var r$5 = function(t) {
    return new n$3("string" == typeof t ? t : t + "", void 0, s$1);
}, S$1 = function(s, o) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    if (e$4) s.adoptedStyleSheets = o.map(function(t) {
        return _instanceof$1(t, CSSStyleSheet) ? t : t.styleSheet;
    });
    else try {
        for(var _iterator = o[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var e1 = _step.value;
            var _$o = document.createElement("style"), n = t$3.litNonce;
            void 0 !== n && _$o.setAttribute("nonce", n), _$o.textContent = e1.cssText, s.appendChild(_$o);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}, c$2 = e$4 ? function(t) {
    return t;
} : function(t) {
    return _instanceof$1(t, CSSStyleSheet) ? function(t) {
        var e = "";
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = t.cssRules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var s = _step.value;
                e += s.cssText;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return r$5(e);
    }(t) : t;
};

function _array_like_to_array$2(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes$1(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes$2(arr) {
    if (Array.isArray(arr)) return _array_like_to_array$2(arr);
}
function _assert_this_initialized$3(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check$4(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct$3()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of$3(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _defineProperties$4(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class$4(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$4(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$4(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of$3(o) {
    _get_prototype_of$3 = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of$3(o);
}
function _inherits$3(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of$3(subClass, superClass);
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterable_to_array$2(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit$1(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest$1() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread$2() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return$3(self, call) {
    if (call && (_type_of$4(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized$3(self);
}
function _set_prototype_of$3(o, p) {
    _set_prototype_of$3 = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of$3(o, p);
}
function _sliced_to_array$1(arr, i) {
    return _array_with_holes$1(arr) || _iterable_to_array_limit$1(arr, i) || _unsupported_iterable_to_array$2(arr, i) || _non_iterable_rest$1();
}
function _to_consumable_array$2(arr) {
    return _array_without_holes$2(arr) || _iterable_to_array$2(arr) || _unsupported_iterable_to_array$2(arr) || _non_iterable_spread$2();
}
function _type_of$4(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array$2(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array$2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array$2(o, minLen);
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of$3(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of$3(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct$3() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super$3(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct$3();
    return function _createSuperInternal() {
        var Super = _get_prototype_of$3(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of$3(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return$3(this, result);
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var _Symbol, _a, _a1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var i$3 = Object.is, e$3 = Object.defineProperty, r$4 = Object.getOwnPropertyDescriptor, h$1 = Object.getOwnPropertyNames, o$3 = Object.getOwnPropertySymbols, n$2 = Object.getPrototypeOf, a$1 = globalThis, c$1 = a$1.trustedTypes, l$1 = c$1 ? c$1.emptyScript : "", p$1 = a$1.reactiveElementPolyfillSupport, d$1 = function(t, s) {
    return t;
}, u$1 = {
    toAttribute: function toAttribute(t, s) {
        switch(s){
            case Boolean:
                t = t ? l$1 : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute: function fromAttribute(t, s) {
        var i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, f$1 = function(t, s) {
    return !i$3(t, s);
}, y$1 = {
    attribute: !0,
    type: String,
    converter: u$1,
    reflect: !1,
    hasChanged: f$1
};
var _metadata, _litPropertyMetadata;
(_metadata = (_Symbol = Symbol).metadata) !== null && _metadata !== void 0 ? _metadata : _Symbol.metadata = Symbol("metadata"), (_litPropertyMetadata = (_a = a$1).litPropertyMetadata) !== null && _litPropertyMetadata !== void 0 ? _litPropertyMetadata : _a.litPropertyMetadata = new WeakMap;
var b = /*#__PURE__*/ function(HTMLElement1) {
    _inherits$3(b, HTMLElement1);
    var _super = _create_super$3(b);
    function b() {
        _class_call_check$4(this, b);
        var _this;
        _this = _super.call(this), _this._$Ep = void 0, _this.isUpdatePending = !1, _this.hasUpdated = !1, _this._$Em = null, _this._$Ev();
        return _possible_constructor_return$3(_this);
    }
    _create_class$4(b, [
        {
            key: "_$Ev",
            value: function _$Ev() {
                var _this = this;
                var _this_constructor_l;
                this._$ES = new Promise(function(t) {
                    return _this.enableUpdating = t;
                }), this._$AL = new Map, this._$E_(), this.requestUpdate(), (_this_constructor_l = this.constructor.l) === null || _this_constructor_l === void 0 ? void 0 : _this_constructor_l.forEach(function(t) {
                    return t(_this);
                });
            }
        },
        {
            key: "addController",
            value: function addController(t) {
                var _t_hostConnected;
                var _this__$EO;
                ((_this__$EO = this._$EO) !== null && _this__$EO !== void 0 ? _this__$EO : this._$EO = new Set).add(t), void 0 !== this.renderRoot && this.isConnected && ((_t_hostConnected = t.hostConnected) === null || _t_hostConnected === void 0 ? void 0 : _t_hostConnected.call(t));
            }
        },
        {
            key: "removeController",
            value: function removeController(t) {
                var _this__$EO;
                (_this__$EO = this._$EO) === null || _this__$EO === void 0 ? void 0 : _this__$EO.delete(t);
            }
        },
        {
            key: "_$E_",
            value: function _$E_() {
                var t = new Map, s = this.constructor.elementProperties;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = s.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var i = _step.value;
                        this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                t.size > 0 && (this._$Ep = t);
            }
        },
        {
            key: "createRenderRoot",
            value: function createRenderRoot() {
                var _this_shadowRoot;
                var t = (_this_shadowRoot = this.shadowRoot) !== null && _this_shadowRoot !== void 0 ? _this_shadowRoot : this.attachShadow(this.constructor.shadowRootOptions);
                return S$1(t, this.constructor.elementStyles), t;
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                var _this__$EO;
                var _this_renderRoot;
                (_this_renderRoot = this.renderRoot) !== null && _this_renderRoot !== void 0 ? _this_renderRoot : this.renderRoot = this.createRenderRoot(), this.enableUpdating(!0), (_this__$EO = this._$EO) === null || _this__$EO === void 0 ? void 0 : _this__$EO.forEach(function(t) {
                    var _t_hostConnected;
                    return (_t_hostConnected = t.hostConnected) === null || _t_hostConnected === void 0 ? void 0 : _t_hostConnected.call(t);
                });
            }
        },
        {
            key: "enableUpdating",
            value: function enableUpdating(t) {}
        },
        {
            key: "disconnectedCallback",
            value: function disconnectedCallback() {
                var _this__$EO;
                (_this__$EO = this._$EO) === null || _this__$EO === void 0 ? void 0 : _this__$EO.forEach(function(t) {
                    var _t_hostDisconnected;
                    return (_t_hostDisconnected = t.hostDisconnected) === null || _t_hostDisconnected === void 0 ? void 0 : _t_hostDisconnected.call(t);
                });
            }
        },
        {
            key: "attributeChangedCallback",
            value: function attributeChangedCallback(t, s, i) {
                this._$AK(t, i);
            }
        },
        {
            key: "_$EC",
            value: function _$EC(t, s) {
                var i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
                if (void 0 !== e && !0 === i.reflect) {
                    var _i_converter;
                    var r = (void 0 !== ((_i_converter = i.converter) === null || _i_converter === void 0 ? void 0 : _i_converter.toAttribute) ? i.converter : u$1).toAttribute(s, i.type);
                    this._$Em = t, null == r ? this.removeAttribute(e) : this.setAttribute(e, r), this._$Em = null;
                }
            }
        },
        {
            key: "_$AK",
            value: function _$AK(t, s) {
                var i = this.constructor, e = i._$Eh.get(t);
                if (void 0 !== e && this._$Em !== e) {
                    var _t_converter;
                    var _$t = i.getPropertyOptions(e), r = "function" == typeof _$t.converter ? {
                        fromAttribute: _$t.converter
                    } : void 0 !== ((_t_converter = _$t.converter) === null || _t_converter === void 0 ? void 0 : _t_converter.fromAttribute) ? _$t.converter : u$1;
                    this._$Em = e, this[e] = r.fromAttribute(s, _$t.type), this._$Em = null;
                }
            }
        },
        {
            key: "requestUpdate",
            value: function requestUpdate(t, s, i) {
                if (void 0 !== t) {
                    var _i_hasChanged;
                    if (i !== null && i !== void 0 ? i : i = this.constructor.getPropertyOptions(t), !((_i_hasChanged = i.hasChanged) !== null && _i_hasChanged !== void 0 ? _i_hasChanged : f$1)(this[t], s)) return;
                    this.P(t, s, i);
                }
                !1 === this.isUpdatePending && (this._$ES = this._$ET());
            }
        },
        {
            key: "P",
            value: function P(t, s, i) {
                var _this__$Ej;
                this._$AL.has(t) || this._$AL.set(t, s), !0 === i.reflect && this._$Em !== t && ((_this__$Ej = this._$Ej) !== null && _this__$Ej !== void 0 ? _this__$Ej : this._$Ej = new Set).add(t);
            }
        },
        {
            key: "_$ET",
            value: function _$ET() {
                var _this = this;
                return _async_to_generator(function() {
                    var t, _$t, _tmp;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.isUpdatePending = !0;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    _this._$ES
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                t = _state.sent();
                                Promise.reject(t);
                                return [
                                    3,
                                    4
                                ];
                            case 4:
                                _$t = _this.scheduleUpdate();
                                _tmp = null != _$t;
                                if (!_tmp) return [
                                    3,
                                    6
                                ];
                                return [
                                    4,
                                    _$t
                                ];
                            case 5:
                                _tmp = _state.sent();
                                _state.label = 6;
                            case 6:
                                return [
                                    2,
                                    (!_this.isUpdatePending)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "scheduleUpdate",
            value: function scheduleUpdate() {
                return this.performUpdate();
            }
        },
        {
            key: "performUpdate",
            value: function performUpdate() {
                if (!this.isUpdatePending) return;
                if (!this.hasUpdated) {
                    var _this_renderRoot;
                    if ((_this_renderRoot = this.renderRoot) !== null && _this_renderRoot !== void 0 ? _this_renderRoot : this.renderRoot = this.createRenderRoot(), this._$Ep) {
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = this._$Ep[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var _step_value = _sliced_to_array$1(_step.value, 2), t = _step_value[0], _$s = _step_value[1];
                                this[t] = _$s;
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                        this._$Ep = void 0;
                    }
                    var t1 = this.constructor.elementProperties;
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    if (t1.size > 0) try {
                        for(var _iterator1 = t1[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var _step_value1 = _sliced_to_array$1(_step1.value, 2), _$s1 = _step_value1[0], i = _step_value1[1];
                            !0 !== i.wrapped || this._$AL.has(_$s1) || void 0 === this[_$s1] || this.P(_$s1, this[_$s1], i);
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                }
                var t2 = !1;
                var _$s2 = this._$AL;
                try {
                    var _this__$EO;
                    t2 = this.shouldUpdate(_$s2), t2 ? (this.willUpdate(_$s2), (_this__$EO = this._$EO) === null || _this__$EO === void 0 ? void 0 : _this__$EO.forEach(function(t) {
                        var _t_hostUpdate;
                        return (_t_hostUpdate = t.hostUpdate) === null || _t_hostUpdate === void 0 ? void 0 : _t_hostUpdate.call(t);
                    }), this.update(_$s2)) : this._$EU();
                } catch (s) {
                    throw t2 = !1, this._$EU(), s;
                }
                t2 && this._$AE(_$s2);
            }
        },
        {
            key: "willUpdate",
            value: function willUpdate(t) {}
        },
        {
            key: "_$AE",
            value: function _$AE(t) {
                var _this__$EO;
                (_this__$EO = this._$EO) === null || _this__$EO === void 0 ? void 0 : _this__$EO.forEach(function(t) {
                    var _t_hostUpdated;
                    return (_t_hostUpdated = t.hostUpdated) === null || _t_hostUpdated === void 0 ? void 0 : _t_hostUpdated.call(t);
                }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
            }
        },
        {
            key: "_$EU",
            value: function _$EU() {
                this._$AL = new Map, this.isUpdatePending = !1;
            }
        },
        {
            key: "updateComplete",
            get: function get() {
                return this.getUpdateComplete();
            }
        },
        {
            key: "getUpdateComplete",
            value: function getUpdateComplete() {
                return this._$ES;
            }
        },
        {
            key: "shouldUpdate",
            value: function shouldUpdate(t) {
                return !0;
            }
        },
        {
            key: "update",
            value: function update(t) {
                var _this = this;
                this._$Ej && (this._$Ej = this._$Ej.forEach(function(t) {
                    return _this._$EC(t, _this[t]);
                })), this._$EU();
            }
        },
        {
            key: "updated",
            value: function updated(t) {}
        },
        {
            key: "firstUpdated",
            value: function firstUpdated(t) {}
        }
    ], [
        {
            key: "addInitializer",
            value: function addInitializer(t) {
                var _this_l;
                this._$Ei(), ((_this_l = this.l) !== null && _this_l !== void 0 ? _this_l : this.l = []).push(t);
            }
        },
        {
            key: "observedAttributes",
            get: function get() {
                return this.finalize(), this._$Eh && _to_consumable_array$2(this._$Eh.keys());
            }
        },
        {
            key: "createProperty",
            value: function createProperty(t) {
                var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : y$1;
                if (s.state && (s.attribute = !1), this._$Ei(), this.elementProperties.set(t, s), !s.noAccessor) {
                    var i = Symbol(), r = this.getPropertyDescriptor(t, i, s);
                    void 0 !== r && e$3(this.prototype, t, r);
                }
            }
        },
        {
            key: "getPropertyDescriptor",
            value: function getPropertyDescriptor(t, s, i) {
                var _r;
                var _ref = (_r = r$4(this.prototype, t)) !== null && _r !== void 0 ? _r : {
                    get: function get() {
                        return this[s];
                    },
                    set: function set(t) {
                        this[s] = t;
                    }
                }, e = _ref.get, h = _ref.set;
                return {
                    get: function get() {
                        return e === null || e === void 0 ? void 0 : e.call(this);
                    },
                    set: function set(s) {
                        var r = e === null || e === void 0 ? void 0 : e.call(this);
                        h.call(this, s), this.requestUpdate(t, r, i);
                    },
                    configurable: !0,
                    enumerable: !0
                };
            }
        },
        {
            key: "getPropertyOptions",
            value: function getPropertyOptions(t) {
                var _this_elementProperties_get;
                return (_this_elementProperties_get = this.elementProperties.get(t)) !== null && _this_elementProperties_get !== void 0 ? _this_elementProperties_get : y$1;
            }
        },
        {
            key: "_$Ei",
            value: function _$Ei() {
                if (this.hasOwnProperty(d$1("elementProperties"))) return;
                var t = n$2(this);
                t.finalize(), void 0 !== t.l && (this.l = _to_consumable_array$2(t.l)), this.elementProperties = new Map(t.elementProperties);
            }
        },
        {
            key: "finalize",
            value: function finalize() {
                if (this.hasOwnProperty(d$1("finalized"))) return;
                if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
                    var t = this.properties, s = _to_consumable_array$2(h$1(t)).concat(_to_consumable_array$2(o$3(t)));
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var i = _step.value;
                            this.createProperty(i, t[i]);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
                var t1 = this[Symbol.metadata];
                if (null !== t1) {
                    var s1 = litPropertyMetadata.get(t1);
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    if (void 0 !== s1) try {
                        for(var _iterator1 = s1[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var _step_value = _sliced_to_array$1(_step1.value, 2), t2 = _step_value[0], i1 = _step_value[1];
                            this.elementProperties.set(t2, i1);
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                }
                this._$Eh = new Map;
                var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                try {
                    for(var _iterator2 = this.elementProperties[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                        var _step_value1 = _sliced_to_array$1(_step2.value, 2), t3 = _step_value1[0], s2 = _step_value1[1];
                        var i2 = this._$Eu(t3, s2);
                        void 0 !== i2 && this._$Eh.set(i2, t3);
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                            _iterator2.return();
                        }
                    } finally{
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
                this.elementStyles = this.finalizeStyles(this.styles);
            }
        },
        {
            key: "finalizeStyles",
            value: function finalizeStyles(s) {
                var i = [];
                if (Array.isArray(s)) {
                    var e = new Set(s.flat(1 / 0).reverse());
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var _$s = _step.value;
                            i.unshift(c$2(_$s));
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                } else void 0 !== s && i.push(c$2(s));
                return i;
            }
        },
        {
            key: "_$Eu",
            value: function _$Eu(t, s) {
                var i = s.attribute;
                return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
            }
        }
    ]);
    return b;
}(_wrap_native_super(HTMLElement));
var _reactiveElementVersions;
b.elementStyles = [], b.shadowRootOptions = {
    mode: "open"
}, b[d$1("elementProperties")] = new Map, b[d$1("finalized")] = new Map, p$1 === null || p$1 === void 0 ? void 0 : p$1({
    ReactiveElement: b
}), ((_reactiveElementVersions = (_a1 = a$1).reactiveElementVersions) !== null && _reactiveElementVersions !== void 0 ? _reactiveElementVersions : _a1.reactiveElementVersions = []).push("2.0.4");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function _array_like_to_array$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes$1(arr) {
    if (Array.isArray(arr)) return _array_like_to_array$1(arr);
}
function _assert_this_initialized$2(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check$3(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties$3(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class$3(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$3(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$3(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of$2(o) {
    _get_prototype_of$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of$2(o);
}
function _inherits$2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of$2(subClass, superClass);
}
function _iterable_to_array$1(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread$1() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return$2(self, call) {
    if (call && (_type_of$3(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized$2(self);
}
function _set_prototype_of$2(o, p) {
    _set_prototype_of$2 = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of$2(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array$1(arr, i) || _non_iterable_rest();
}
function _to_consumable_array$1(arr) {
    return _array_without_holes$1(arr) || _iterable_to_array$1(arr) || _unsupported_iterable_to_array$1(arr) || _non_iterable_spread$1();
}
function _type_of$3(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array$1(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array$1(o, minLen);
}
function _is_native_reflect_construct$2() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super$2(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct$2();
    return function _createSuperInternal() {
        var Super = _get_prototype_of$2(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of$2(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return$2(this, result);
    };
}
var _t;
var t$2 = globalThis, i$2 = t$2.trustedTypes, s = i$2 ? i$2.createPolicy("lit-html", {
    createHTML: function(t) {
        return t;
    }
}) : void 0, e$2 = "$lit$", h = "lit$".concat(Math.random().toFixed(9).slice(2), "$"), o$2 = "?" + h, n$1 = "<".concat(o$2, ">"), r$3 = document, l = function() {
    return r$3.createComment("");
}, c = function(t) {
    return null === t || "object" != typeof t && "function" != typeof t;
}, a = Array.isArray, u = function(t) {
    return a(t) || "function" == typeof (t === null || t === void 0 ? void 0 : t[Symbol.iterator]);
}, d = "[ 	\n\f\r]", f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, _ = />/g, m = RegExp(">|".concat(d, "(?:([^\\s\"'>=/]+)(").concat(d, "*=").concat(d, "*(?:[^ 	\n\f\r\"'`<>=]|(\"|')|))|$)"), "g"), p = /'/g, g = /"/g, $ = /^(?:script|style|textarea|title)$/i, y = function(t) {
    return function(i) {
        for(var _len = arguments.length, s = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            s[_key - 1] = arguments[_key];
        }
        return {
            _$litType$: t,
            strings: i,
            values: s
        };
    };
}, x = y(1), T = Symbol.for("lit-noChange"), E = Symbol.for("lit-nothing"), A = new WeakMap, C = r$3.createTreeWalker(r$3, 129);
function P(t, i) {
    if (!a(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== s ? s.createHTML(i) : i;
}
var V = function(t, i) {
    var s = t.length - 1, o = [];
    var r, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = f;
    for(var _$i = 0; _$i < s; _$i++){
        var s1 = t[_$i];
        var a = void 0, u = void 0, d = -1, y = 0;
        for(; y < s1.length && (c.lastIndex = y, u = c.exec(s1), null !== u);)y = c.lastIndex, c === f ? "!--" === u[1] ? c = v : void 0 !== u[1] ? c = _ : void 0 !== u[2] ? ($.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = m) : void 0 !== u[3] && (c = m) : c === m ? ">" === u[0] ? (c = r !== null && r !== void 0 ? r : f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? m : '"' === u[3] ? g : p) : c === g || c === p ? c = m : c === v || c === _ ? c = f : (c = m, r = void 0);
        var x = c === m && t[_$i + 1].startsWith("/>") ? " " : "";
        l += c === f ? s1 + n$1 : d >= 0 ? (o.push(a), s1.slice(0, d) + e$2 + s1.slice(d) + h + x) : s1 + h + (-2 === d ? _$i : x);
    }
    return [
        P(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        o
    ];
};
var N = /*#__PURE__*/ function() {
    function N(param, n) {
        var t = param.strings, s = param._$litType$;
        _class_call_check$3(this, N);
        var r;
        this.parts = [];
        var c = 0, a = 0;
        var u = t.length - 1, d = this.parts, _V = _sliced_to_array(V(t, s), 2), f = _V[0], v = _V[1];
        if (this.el = N.createElement(f, n), C.currentNode = this.el.content, 2 === s || 3 === s) {
            var _t;
            var t1 = this.el.content.firstChild;
            (_t = t1).replaceWith.apply(_t, _to_consumable_array$1(t1.childNodes));
        }
        for(; null !== (r = C.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                if (r.hasAttributes()) try {
                    for(var _iterator = r.getAttributeNames()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var t2 = _step.value;
                        if (t2.endsWith(e$2)) {
                            var i1 = v[a++], s1 = r.getAttribute(t2).split(h), e1 = /([.?@])?(.*)/.exec(i1);
                            d.push({
                                type: 1,
                                index: c,
                                name: e1[2],
                                strings: s1,
                                ctor: "." === e1[1] ? H : "?" === e1[1] ? I : "@" === e1[1] ? L : k
                            }), r.removeAttribute(t2);
                        } else t2.startsWith(h) && (d.push({
                            type: 6,
                            index: c
                        }), r.removeAttribute(t2));
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                if ($.test(r.tagName)) {
                    var t3 = r.textContent.split(h), s2 = t3.length - 1;
                    if (s2 > 0) {
                        r.textContent = i$2 ? i$2.emptyScript : "";
                        for(var i2 = 0; i2 < s2; i2++)r.append(t3[i2], l()), C.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t3[s2], l());
                    }
                }
            } else if (8 === r.nodeType) if (r.data === o$2) d.push({
                type: 2,
                index: c
            });
            else {
                var t4 = -1;
                for(; -1 !== (t4 = r.data.indexOf(h, t4 + 1));)d.push({
                    type: 7,
                    index: c
                }), t4 += h.length - 1;
            }
            c++;
        }
    }
    _create_class$3(N, null, [
        {
            key: "createElement",
            value: function createElement(t, i) {
                var s = r$3.createElement("template");
                return s.innerHTML = t, s;
            }
        }
    ]);
    return N;
}();
function S(t, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : t, e = arguments.length > 3 ? arguments[3] : void 0;
    var _s__$Co, _h__$AO;
    var _s;
    if (i === T) return i;
    var h = void 0 !== e ? (_s__$Co = s._$Co) === null || _s__$Co === void 0 ? void 0 : _s__$Co[e] : s._$Cl;
    var o = c(i) ? void 0 : i._$litDirective$;
    var __$Co;
    return (h === null || h === void 0 ? void 0 : h.constructor) !== o && (h === null || h === void 0 ? void 0 : (_h__$AO = h._$AO) === null || _h__$AO === void 0 ? void 0 : _h__$AO.call(h, !1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? ((__$Co = (_s = s)._$Co) !== null && __$Co !== void 0 ? __$Co : _s._$Co = [])[e] = h : s._$Cl = h), void 0 !== h && (i = S(t, h._$AS(t, i.values), h, e)), i;
}
var M = /*#__PURE__*/ function() {
    function M(t, i) {
        _class_call_check$3(this, M);
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    _create_class$3(M, [
        {
            key: "parentNode",
            get: function get() {
                return this._$AM.parentNode;
            }
        },
        {
            key: "_$AU",
            get: function get() {
                return this._$AM._$AU;
            }
        },
        {
            key: "u",
            value: function u(t) {
                var _t_creationScope;
                var _this__$AD = this._$AD, _this__$AD_el = _this__$AD.el, i = _this__$AD_el.content, s = _this__$AD.parts, e = ((_t_creationScope = t === null || t === void 0 ? void 0 : t.creationScope) !== null && _t_creationScope !== void 0 ? _t_creationScope : r$3).importNode(i, !0);
                C.currentNode = e;
                var h = C.nextNode(), o = 0, n = 0, l = s[0];
                for(; void 0 !== l;){
                    if (o === l.index) {
                        var i1 = void 0;
                        2 === l.type ? i1 = new R(h, h.nextSibling, this, t) : 1 === l.type ? i1 = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i1 = new z(h, this, t)), this._$AV.push(i1), l = s[++n];
                    }
                    o !== (l === null || l === void 0 ? void 0 : l.index) && (h = C.nextNode(), o++);
                }
                return C.currentNode = r$3, e;
            }
        },
        {
            key: "p",
            value: function p(t) {
                var i = 0;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this._$AV[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var s = _step.value;
                        void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }
    ]);
    return M;
}();
var R = /*#__PURE__*/ function() {
    function R(t, i, s, e) {
        _class_call_check$3(this, R);
        var _e_isConnected;
        this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = (_e_isConnected = e === null || e === void 0 ? void 0 : e.isConnected) !== null && _e_isConnected !== void 0 ? _e_isConnected : !0;
    }
    _create_class$3(R, [
        {
            key: "_$AU",
            get: function get() {
                var _this__$AM;
                var _this__$AM__$AU;
                return (_this__$AM__$AU = (_this__$AM = this._$AM) === null || _this__$AM === void 0 ? void 0 : _this__$AM._$AU) !== null && _this__$AM__$AU !== void 0 ? _this__$AM__$AU : this._$Cv;
            }
        },
        {
            key: "parentNode",
            get: function get() {
                var t = this._$AA.parentNode;
                var i = this._$AM;
                return void 0 !== i && 11 === (t === null || t === void 0 ? void 0 : t.nodeType) && (t = i.parentNode), t;
            }
        },
        {
            key: "startNode",
            get: function get() {
                return this._$AA;
            }
        },
        {
            key: "endNode",
            get: function get() {
                return this._$AB;
            }
        },
        {
            key: "_$AI",
            value: function _$AI(t) {
                var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
                t = S(this, t, i), c(t) ? t === E || null == t || "" === t ? (this._$AH !== E && this._$AR(), this._$AH = E) : t !== this._$AH && t !== T && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : u(t) ? this.k(t) : this._(t);
            }
        },
        {
            key: "O",
            value: function O(t) {
                return this._$AA.parentNode.insertBefore(t, this._$AB);
            }
        },
        {
            key: "T",
            value: function T(t) {
                this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
            }
        },
        {
            key: "_",
            value: function _(t) {
                this._$AH !== E && c(this._$AH) ? this._$AA.nextSibling.data = t : this.T(r$3.createTextNode(t)), this._$AH = t;
            }
        },
        {
            key: "$",
            value: function $(t) {
                var _this__$AH;
                var i = t.values, s = t._$litType$, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = N.createElement(P(s.h, s.h[0]), this.options)), s);
                if (((_this__$AH = this._$AH) === null || _this__$AH === void 0 ? void 0 : _this__$AH._$AD) === e) this._$AH.p(i);
                else {
                    var _$t = new M(e, this), s1 = _$t.u(this.options);
                    _$t.p(i), this.T(s1), this._$AH = _$t;
                }
            }
        },
        {
            key: "_$AC",
            value: function _$AC(t) {
                var i = A.get(t.strings);
                return void 0 === i && A.set(t.strings, i = new N(t)), i;
            }
        },
        {
            key: "k",
            value: function k(t) {
                a(this._$AH) || (this._$AH = [], this._$AR());
                var i = this._$AH;
                var s, e = 0;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var h = _step.value;
                        e === i.length ? i.push(s = new R(this.O(l()), this.O(l()), this, this.options)) : s = i[e], s._$AI(h), e++;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
            }
        },
        {
            key: "_$AR",
            value: function _$AR() {
                var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this._$AA.nextSibling, i = arguments.length > 1 ? arguments[1] : void 0;
                var _this__$AP, _this;
                for((_this__$AP = (_this = this)._$AP) === null || _this__$AP === void 0 ? void 0 : _this__$AP.call(_this, !1, !0, i); t && t !== this._$AB;){
                    var i1 = t.nextSibling;
                    t.remove(), t = i1;
                }
            }
        },
        {
            key: "setConnected",
            value: function setConnected(t) {
                var _this__$AP, _this;
                void 0 === this._$AM && (this._$Cv = t, (_this__$AP = (_this = this)._$AP) === null || _this__$AP === void 0 ? void 0 : _this__$AP.call(_this, t));
            }
        }
    ]);
    return R;
}();
var k = /*#__PURE__*/ function() {
    function k(t, i, s, e, h) {
        _class_call_check$3(this, k);
        this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = E;
    }
    _create_class$3(k, [
        {
            key: "tagName",
            get: function get() {
                return this.element.tagName;
            }
        },
        {
            key: "_$AU",
            get: function get() {
                return this._$AM._$AU;
            }
        },
        {
            key: "_$AI",
            value: function _$AI(t) {
                var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this, s = arguments.length > 2 ? arguments[2] : void 0, e = arguments.length > 3 ? arguments[3] : void 0;
                var h = this.strings;
                var o = !1;
                if (void 0 === h) t = S(this, t, i, 0), o = !c(t) || t !== this._$AH && t !== T, o && (this._$AH = t);
                else {
                    var e1 = t;
                    var n, r;
                    for(t = h[0], n = 0; n < h.length - 1; n++)r = S(this, e1[s + n], i, n), r === T && (r = this._$AH[n]), o || (o = !c(r) || r !== this._$AH[n]), r === E ? t = E : t !== E && (t += (r !== null && r !== void 0 ? r : "") + h[n + 1]), this._$AH[n] = r;
                }
                o && !e && this.j(t);
            }
        },
        {
            key: "j",
            value: function j(t) {
                t === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t !== null && t !== void 0 ? t : "");
            }
        }
    ]);
    return k;
}();
var H = /*#__PURE__*/ function(k) {
    _inherits$2(H, k);
    var _super = _create_super$2(H);
    function H() {
        _class_call_check$3(this, H);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments))), _this.type = 3;
        return _possible_constructor_return$2(_this);
    }
    _create_class$3(H, [
        {
            key: "j",
            value: function j(t) {
                this.element[this.name] = t === E ? void 0 : t;
            }
        }
    ]);
    return H;
}(k);
var I = /*#__PURE__*/ function(k) {
    _inherits$2(I, k);
    var _super = _create_super$2(I);
    function I() {
        _class_call_check$3(this, I);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments))), _this.type = 4;
        return _possible_constructor_return$2(_this);
    }
    _create_class$3(I, [
        {
            key: "j",
            value: function j(t) {
                this.element.toggleAttribute(this.name, !!t && t !== E);
            }
        }
    ]);
    return I;
}(k);
var L = /*#__PURE__*/ function(k) {
    _inherits$2(L, k);
    var _super = _create_super$2(L);
    function L(t, i, s, e, h) {
        _class_call_check$3(this, L);
        var _this;
        _this = _super.call(this, t, i, s, e, h), _this.type = 5;
        return _possible_constructor_return$2(_this);
    }
    _create_class$3(L, [
        {
            key: "_$AI",
            value: function _$AI(t) {
                var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
                var _S;
                if ((t = (_S = S(this, t, i, 0)) !== null && _S !== void 0 ? _S : E) === T) return;
                var s = this._$AH, e = t === E && s !== E || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== E && (s === E || e);
                e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
            }
        },
        {
            key: "handleEvent",
            value: function handleEvent(t) {
                var _this_options;
                var _this_options_host;
                "function" == typeof this._$AH ? this._$AH.call((_this_options_host = (_this_options = this.options) === null || _this_options === void 0 ? void 0 : _this_options.host) !== null && _this_options_host !== void 0 ? _this_options_host : this.element, t) : this._$AH.handleEvent(t);
            }
        }
    ]);
    return L;
}(k);
var z = /*#__PURE__*/ function() {
    function z(t, i, s) {
        _class_call_check$3(this, z);
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    _create_class$3(z, [
        {
            key: "_$AU",
            get: function get() {
                return this._$AM._$AU;
            }
        },
        {
            key: "_$AI",
            value: function _$AI(t) {
                S(this, t);
            }
        }
    ]);
    return z;
}();
var j = t$2.litHtmlPolyfillSupport;
var _litHtmlVersions;
j === null || j === void 0 ? void 0 : j(N, R), ((_litHtmlVersions = (_t = t$2).litHtmlVersions) !== null && _litHtmlVersions !== void 0 ? _litHtmlVersions : _t.litHtmlVersions = []).push("3.2.1");
var B = function(t, i, s) {
    var _s_renderBefore;
    var e = (_s_renderBefore = s === null || s === void 0 ? void 0 : s.renderBefore) !== null && _s_renderBefore !== void 0 ? _s_renderBefore : i;
    var h = e._$litPart$;
    if (void 0 === h) {
        var _s_renderBefore1;
        var _$t = (_s_renderBefore1 = s === null || s === void 0 ? void 0 : s.renderBefore) !== null && _s_renderBefore1 !== void 0 ? _s_renderBefore1 : null;
        e._$litPart$ = h = new R(i.insertBefore(l(), _$t), _$t, void 0, s !== null && s !== void 0 ? s : {});
    }
    return h._$AI(t), h;
};

function _assert_this_initialized$1(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check$2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties$2(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class$2(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$2(Constructor, staticProps);
    return Constructor;
}
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _get_prototype_of$1(o) {
    _get_prototype_of$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of$1(o);
}
function _inherits$1(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of$1(subClass, superClass);
}
function _possible_constructor_return$1(self, call) {
    if (call && (_type_of$2(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized$1(self);
}
function _set_prototype_of$1(o, p) {
    _set_prototype_of$1 = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of$1(o, p);
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of$1(object);
        if (object === null) break;
    }
    return object;
}
function _type_of$2(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct$1() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super$1(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct$1();
    return function _createSuperInternal() {
        var Super = _get_prototype_of$1(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of$1(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return$1(this, result);
    };
}
var _globalThis_litElementHydrateSupport, _globalThis;
var _globalThis1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var r$2 = /*#__PURE__*/ function(t) {
    _inherits$1(r, t);
    var _super = _create_super$1(r);
    function r() {
        _class_call_check$2(this, r);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments))), _this.renderOptions = {
            host: _assert_this_initialized$1(_this)
        }, _this._$Do = void 0;
        return _possible_constructor_return$1(_this);
    }
    _create_class$2(r, [
        {
            key: "createRenderRoot",
            value: function createRenderRoot() {
                var _this_renderOptions;
                var _$t = _get(_get_prototype_of$1(r.prototype), "createRenderRoot", this).call(this);
                var _renderBefore;
                return (_renderBefore = (_this_renderOptions = this.renderOptions).renderBefore) !== null && _renderBefore !== void 0 ? _renderBefore : _this_renderOptions.renderBefore = _$t.firstChild, _$t;
            }
        },
        {
            key: "update",
            value: function update(t) {
                var s = this.render();
                this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), _get(_get_prototype_of$1(r.prototype), "update", this).call(this, t), this._$Do = B(s, this.renderRoot, this.renderOptions);
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                var _this__$Do;
                _get(_get_prototype_of$1(r.prototype), "connectedCallback", this).call(this), (_this__$Do = this._$Do) === null || _this__$Do === void 0 ? void 0 : _this__$Do.setConnected(!0);
            }
        },
        {
            key: "disconnectedCallback",
            value: function disconnectedCallback() {
                var _this__$Do;
                _get(_get_prototype_of$1(r.prototype), "disconnectedCallback", this).call(this), (_this__$Do = this._$Do) === null || _this__$Do === void 0 ? void 0 : _this__$Do.setConnected(!1);
            }
        },
        {
            key: "render",
            value: function render() {
                return T;
            }
        }
    ]);
    return r;
}(b);
r$2._$litElement$ = !0, r$2["finalized"] = !0, (_globalThis_litElementHydrateSupport = (_globalThis = globalThis).litElementHydrateSupport) === null || _globalThis_litElementHydrateSupport === void 0 ? void 0 : _globalThis_litElementHydrateSupport.call(_globalThis, {
    LitElement: r$2
});
var i$1 = globalThis.litElementPolyfillSupport;
i$1 === null || i$1 === void 0 ? void 0 : i$1({
    LitElement: r$2
});
var _litElementVersions;
((_litElementVersions = (_globalThis1 = globalThis).litElementVersions) !== null && _litElementVersions !== void 0 ? _litElementVersions : _globalThis1.litElementVersions = []).push("4.1.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var t$1 = function(t) {
    return function(e, o) {
        void 0 !== o ? o.addInitializer(function() {
            customElements.define(t, e);
        }) : customElements.define(t, e);
    };
};

function _define_property$1(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread$1(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property$1(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props$1(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$1(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var o$1 = {
    attribute: !0,
    type: String,
    converter: u$1,
    reflect: !1,
    hasChanged: f$1
}, r$1 = function() {
    var _$t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : o$1, _$e = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0;
    var n = r.kind, i = r.metadata;
    var s = globalThis.litPropertyMetadata.get(i);
    if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = new Map), s.set(r.name, _$t), "accessor" === n) {
        var o1 = r.name;
        return {
            set: function set(r) {
                var n = _$e.get.call(this);
                _$e.set.call(this, r), this.requestUpdate(o1, n, _$t);
            },
            init: function init(e) {
                return void 0 !== e && this.P(o1, void 0, _$t), e;
            }
        };
    }
    if ("setter" === n) {
        var o2 = r.name;
        return function r(r) {
            var n = this[o2];
            _$e.call(this, r), this.requestUpdate(o2, n, _$t);
        };
    }
    throw Error("Unsupported decorator location: " + n);
};
function n(t) {
    return function(e, o) {
        return "object" == typeof o ? r$1(t, e, o) : function(t, e, o) {
            var r = e.hasOwnProperty(o);
            return e.constructor.createProperty(o, r ? _object_spread_props$1(_object_spread$1({}, t), {
                wrapped: !0
            }) : t), r ? Object.getOwnPropertyDescriptor(e, o) : void 0;
        }(t, e, o);
    };
}

function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function r(r) {
    return n(_object_spread_props(_object_spread({}, r), {
        state: !0,
        attribute: !1
    }));
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties$1(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class$1(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$1(Constructor, staticProps);
    return Constructor;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var t = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, e$1 = function(t) {
    return function() {
        for(var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++){
            e[_key] = arguments[_key];
        }
        return {
            _$litDirective$: t,
            values: e
        };
    };
};
var i = /*#__PURE__*/ function() {
    function i(t) {
        _class_call_check$1(this, i);
    }
    _create_class$1(i, [
        {
            key: "_$AU",
            get: function get() {
                return this._$AM._$AU;
            }
        },
        {
            key: "_$AT",
            value: function _$AT(t, e, i) {
                this._$Ct = t, this._$AM = e, this._$Ci = i;
            }
        },
        {
            key: "_$AS",
            value: function _$AS(t, e) {
                return this.update(t, e);
            }
        },
        {
            key: "update",
            value: function update(t, e) {
                return this.render.apply(this, _to_consumable_array(e));
            }
        }
    ]);
    return i;
}();

function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of$1(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of$1(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var e = /*#__PURE__*/ function(r) {
    _inherits(e, r);
    var _super = _create_super(e);
    function e(i) {
        _class_call_check(this, e);
        var _this;
        if (_this = _super.call(this, i), _this.it = E, i.type !== t.CHILD) throw Error(_this.constructor.directiveName + "() can only be used in child bindings");
        return _possible_constructor_return(_this);
    }
    _create_class(e, [
        {
            key: "render",
            value: function render(r) {
                if (r === E || null == r) return this._t = void 0, this.it = r;
                if (r === T) return r;
                if ("string" != typeof r) throw Error(this.constructor.directiveName + "() called with a non-string value");
                if (r === this.it) return this._t;
                this.it = r;
                var s = [
                    r
                ];
                return s.raw = s, this._t = {
                    _$litType$: this.constructor.resultType,
                    strings: s,
                    values: []
                };
            }
        }
    ]);
    return e;
}(i);
e.directiveName = "unsafeHTML", e.resultType = 1;
var o = e$1(e);

class MetaElement {
    init() {}
    pause() {}
    play() {}
    remove() {}
    tick(time, timeDelta) {}
    tock(time, timeDelta, camera) {}
    update(oldData) {}
    updateSchema() {}
    extendSchema(update) {
        this.__AFRAME_INSTANCE__.extendSchema(update);
    }
    flushToDOM() {
        this.__AFRAME_INSTANCE__.flushToDOM();
    }
    get attrName() {
        return this.__AFRAME_INSTANCE__.attrName;
    }
    get data() {
        return this.__AFRAME_INSTANCE__.data;
    }
    get dependencies() {
        return this.__AFRAME_INSTANCE__.dependencies;
    }
    get el() {
        return this.__AFRAME_INSTANCE__.el;
    }
    get id() {
        return this.__AFRAME_INSTANCE__.id;
    }
    get initialized() {
        return this.__AFRAME_INSTANCE__.initialized;
    }
    get multiple() {
        return this.__AFRAME_INSTANCE__.multiple;
    }
    get name() {
        return this.__AFRAME_INSTANCE__.name;
    }
    get system() {
        return this.__AFRAME_INSTANCE__.system;
    }
    get events() {
        return this.__AFRAME_INSTANCE__.events;
    }
    requestUpdate() {
        if (!this.el) return;
        const template = this.render();
        if (template) {
            B(template, this.el);
        }
    }
    render() {
        return null;
    }
}

class MetaHtmlElement extends r$2 {
    createRenderRoot() {
        return this;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        const __SUBSCRIPTIONS__ = this.__SUBSCRIPTIONS__ || [];
        __SUBSCRIPTIONS__.forEach(({ el, type, listener })=>{
            el.removeEventListener(type, listener);
        });
    }
}

class MetaProvider extends MetaElement {
}

function _extends() {
    _extends = Object.assign || function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getPathTo(element, root) {
    if (element.id !== '') return 'id("' + element.id + '")';
    if (element === root) return element.tagName;
    let ix = 0;
    const siblings = element.parentNode.childNodes;
    for(let i = 0; i < siblings.length; i++){
        const sibling = siblings[i];
        if (sibling === element) return getPathTo(element.parentNode, root) + '/' + element.tagName + '[' + (ix + 1) + ']';
        if (sibling.nodeType === 1 && sibling.tagName === element.tagName) ix++;
    }
    return '';
}
function kebabCase(text) {
    return text.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase();
}
AFRAME.registerComponent('networked-element', {
    schema: {
        element: {
            type: 'string'
        },
        providers: {
            type: 'array'
        },
        networkedElements: {
            type: 'array'
        }
    },
    init () {
        var _this_el_sceneEl;
        let assets = (_this_el_sceneEl = this.el.sceneEl) == null ? void 0 : _this_el_sceneEl.querySelector(':scope > a-assets');
        if (!assets) {
            var _this_el_sceneEl1;
            assets = document.createElement('a-assets');
            (_this_el_sceneEl1 = this.el.sceneEl) == null ? void 0 : _this_el_sceneEl1.appendChild(assets);
        }
        const templateId = this.data.element;
        if (!assets.querySelector(`:scope > #${templateId}`)) {
            const template = document.createElement('template');
            template.setAttribute('id', templateId);
            const element = document.createElement('a-entity');
            element.setAttribute(this.data.element, {});
            for (const provider of this.data.providers){
                element.setAttribute(provider, {});
            }
            template.content.appendChild(element);
            assets.appendChild(template);
            NAF == null ? void 0 : NAF.schemas.add({
                template: `#${templateId}`,
                components: [
                    'position',
                    'rotation',
                    'scale',
                    ...this.data.networkedElements
                ]
            });
        }
        this.el.setAttribute('networked', {
            template: `#${templateId}`,
            persistent: true,
            owner: 'scene',
            networkId: kebabCase(getPathTo(this.el, this.el.sceneEl))
        });
    }
});

const providers = new Map();

const customElement = (elementName, _options)=>(ElementClass)=>{
        const instances = new Map();
        const options = _extends({
            networked: false,
            providers: []
        }, _options);
        ElementClass.__ELEMENT_NAME__ = elementName;
        ElementClass.__NETWORKED__ = options.networked;
        ElementClass.__INTERNAL_PROPERTIES__ = ElementClass.__INTERNAL_PROPERTIES__ || [];
        ElementClass.schema = ElementClass.schema || {};
        ElementClass.dependencies = ElementClass.dependencies || [];
        ElementClass.multiple = false;
        ElementClass.mappings = ElementClass.mappings || {};
        const getInstance = (aframeInstance)=>{
            let instance = instances.get(aframeInstance);
            if (!instance) {
                instance = new ElementClass();
                instance.__AFRAME_INSTANCE__ = aframeInstance;
                instances.set(aframeInstance, instance);
            }
            return instance;
        };
        const aFrameElementDefinition = {
            __META_INITIALIZED__: false,
            get schema () {
                return ElementClass.schema;
            },
            get dependencies () {
                return ElementClass.dependencies;
            },
            get multiple () {
                return ElementClass.multiple;
            },
            init: function() {
                // defer init for providers
                setTimeout(()=>{
                    getInstance(this).init();
                    this.__META_INITIALIZED__ = true;
                    getInstance(this).requestUpdate();
                }, 1);
            },
            pause: function() {
                getInstance(this).pause();
            },
            play: function() {
                getInstance(this).play();
            },
            remove: function() {
                const __SUBSCRIPTIONS__ = this.__SUBSCRIPTIONS__ || [];
                __SUBSCRIPTIONS__.forEach(({ el, type, listener })=>{
                    el.removeEventListener(type, listener);
                });
                getInstance(this).remove();
                instances.delete(this);
            },
            tick: function(time, timeDelta) {
                getInstance(this).tick(time, timeDelta);
            },
            tock: function(time, timeDelta, camera) {
                getInstance(this).tock(time, timeDelta, camera);
            },
            updateSchema: function() {
                getInstance(this).updateSchema();
            },
            update: function(oldData) {
                getInstance(this).update(oldData);
                if (this.__META_INITIALIZED__) {
                    getInstance(this).requestUpdate();
                }
            }
        };
        AFRAME.registerComponent(elementName, aFrameElementDefinition);
        const networkedProviders = options.providers.filter((provider)=>provider.__NETWORKED__).map((key)=>({
                component: providers.get(key),
                properties: Object.keys(key.schema).filter((property)=>!!key.schema[property].default)
            }));
        if (options.networked || networkedProviders.length > 0) {
            AFRAME.registerPrimitive(elementName, {
                defaultComponents: {
                    'networked-element': {
                        element: elementName,
                        providers: options.providers.map((key)=>providers.get(key)),
                        networkedElements: [
                            ...!options.networked ? [] : ElementClass.__INTERNAL_PROPERTIES__.map((property)=>({
                                    component: elementName,
                                    property
                                })),
                            ...options.providers.filter((provider)=>provider.__NETWORKED__).map((provider)=>({
                                    component: providers.get(provider),
                                    properties: provider.__INTERNAL_PROPERTIES__
                                })).flat()
                        ]
                    }
                },
                get mappings () {
                    return Object.assign({}, ...Object.keys(ElementClass.schema).map((key)=>({
                            [`${key}`]: `${elementName}.${key}`
                        })));
                }
            });
        } else {
            AFRAME.registerPrimitive(elementName, {
                defaultComponents: _extends({
                    [elementName]: {}
                }, Object.fromEntries(options.providers.map((key)=>[
                        providers.get(key),
                        {}
                    ]))),
                get mappings () {
                    return Object.assign({}, ...Object.keys(ElementClass.schema).map((key)=>({
                            [`${key}`]: `${elementName}.${key}`
                        })));
                }
            });
        }
    };

var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};

/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var Reflect$1;
(function(Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function(factory) {
        var root = typeof globalThis === "object" ? globalThis : typeof commonjsGlobal === "object" ? commonjsGlobal : typeof self === "object" ? self : typeof this === "object" ? this : sloppyModeThis();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect !== "undefined") {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter, root);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        function makeExporter(target, previous) {
            return function(key, value) {
                Object.defineProperty(target, key, {
                    configurable: true,
                    writable: true,
                    value: value
                });
                if (previous) previous(key, value);
            };
        }
        function functionThis() {
            try {
                return Function("return this;")();
            } catch (_) {}
        }
        function indirectEvalThis() {
            try {
                return (0, eval)("(function() { return this; })()");
            } catch (_) {}
        }
        function sloppyModeThis() {
            return functionThis() || indirectEvalThis();
        }
    })(function(exporter, root) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = _instanceof({
            __proto__: []
        }, Array); // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate ? function() {
                return MakeDictionary(Object.create(null));
            } : supportsProto ? function() {
                return MakeDictionary({
                    __proto__: null
                });
            } : function() {
                return MakeDictionary({});
            },
            has: downLevel ? function(map, key) {
                return hasOwn.call(map, key);
            } : function(map, key) {
                return key in map;
            },
            get: downLevel ? function(map, key) {
                return hasOwn.call(map, key) ? map[key] : undefined;
            } : function(map, key) {
                return map[key];
            }
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var _Map = typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        var registrySymbol = supportsSymbol ? Symbol.for("@reflect-metadata:registry") : undefined;
        var metadataRegistry = GetOrCreateMetadataRegistry();
        var metadataProvider = CreateMetadataProvider(metadataRegistry);
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */ function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators)) throw new TypeError();
                if (!IsObject(target)) throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes)) throw new TypeError();
                if (IsNull(attributes)) attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            } else {
                if (!IsArray(decorators)) throw new TypeError();
                if (!IsConstructor(target)) throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */ function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target)) throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey)) throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */ function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target)) throw new TypeError();
            if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */ function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target)) throw new TypeError();
            if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */ function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target)) throw new TypeError();
            if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */ function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target)) throw new TypeError();
            if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */ function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target)) throw new TypeError();
            if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */ function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target)) throw new TypeError();
            if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */ function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target)) throw new TypeError();
            if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */ function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target)) throw new TypeError();
            if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
            if (!IsObject(target)) throw new TypeError();
            if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
            var provider = GetMetadataProvider(target, propertyKey, /*Create*/ false);
            if (IsUndefined(provider)) return false;
            return provider.OrdinaryDeleteMetadata(metadataKey, target, propertyKey);
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for(var i = decorators.length - 1; i >= 0; --i){
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated)) throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for(var i = decorators.length - 1; i >= 0; --i){
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated)) throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn) return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent)) return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var provider = GetMetadataProvider(O, P, /*Create*/ false);
            if (IsUndefined(provider)) return false;
            return ToBoolean(provider.OrdinaryHasOwnMetadata(MetadataKey, O, P));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn) return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent)) return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var provider = GetMetadataProvider(O, P, /*Create*/ false);
            if (IsUndefined(provider)) return;
            return provider.OrdinaryGetOwnMetadata(MetadataKey, O, P);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var provider = GetMetadataProvider(O, P, /*Create*/ true);
            provider.OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null) return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0) return ownKeys;
            if (ownKeys.length <= 0) return parentKeys;
            var set = new _Set();
            var keys = [];
            for(var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++){
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for(var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++){
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var provider = GetMetadataProvider(O, P, /*create*/ false);
            if (!provider) {
                return [];
            }
            return provider.OrdinaryOwnMetadataKeys(O, P);
        }
        // 6 ECMAScript Data Types and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null) return 1 /* Null */ ;
            switch(typeof x === "undefined" ? "undefined" : _type_of(x)){
                case "undefined":
                    return 0 /* Undefined */ ;
                case "boolean":
                    return 2 /* Boolean */ ;
                case "string":
                    return 3 /* String */ ;
                case "symbol":
                    return 4 /* Symbol */ ;
                case "number":
                    return 5 /* Number */ ;
                case "object":
                    return x === null ? 1 /* Null */  : 6 /* Object */ ;
                default:
                    return 6 /* Object */ ;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return (typeof x === "undefined" ? "undefined" : _type_of(x)) === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch(Type(input)){
                case 0 /* Undefined */ :
                    return input;
                case 1 /* Null */ :
                    return input;
                case 2 /* Boolean */ :
                    return input;
                case 3 /* String */ :
                    return input;
                case 4 /* Symbol */ :
                    return input;
                case 5 /* Number */ :
                    return input;
            }
            var hint = PreferredType === 3 /* String */  ? "string" : PreferredType === 5 /* Number */  ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result)) throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result)) return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result)) return result;
                }
            } else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result)) return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result)) return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */ );
            if (IsSymbol(key)) return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray ? Array.isArray(argument) : _instanceof(argument, Object) ? _instanceof(argument, Array) : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch(Type(argument)){
                case 3 /* String */ :
                    return true;
                case 4 /* Symbol */ :
                    return true;
                default:
                    return false;
            }
        }
        function SameValueZero(x, y) {
            return x === y || x !== x && y !== y;
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null) return undefined;
            if (!IsCallable(func)) throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method)) throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator)) throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f) f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype) return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype) return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype) return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function") return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O) return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // Global metadata registry
        // - Allows `import "reflect-metadata"` and `import "reflect-metadata/no-conflict"` to interoperate.
        // - Uses isolated metadata if `Reflect` is frozen before the registry can be installed.
        /**
         * Creates a registry used to allow multiple `reflect-metadata` providers.
         */ function CreateMetadataRegistry() {
            var fallback;
            if (!IsUndefined(registrySymbol) && typeof root.Reflect !== "undefined" && !(registrySymbol in root.Reflect) && typeof root.Reflect.defineMetadata === "function") {
                // interoperate with older version of `reflect-metadata` that did not support a registry.
                fallback = CreateFallbackProvider(root.Reflect);
            }
            var first;
            var second;
            var rest;
            var targetProviderMap = new _WeakMap();
            var registry = {
                registerProvider: registerProvider,
                getProvider: getProvider,
                setProvider: setProvider
            };
            return registry;
            function registerProvider(provider) {
                if (!Object.isExtensible(registry)) {
                    throw new Error("Cannot add provider to a frozen registry.");
                }
                switch(true){
                    case fallback === provider:
                        break;
                    case IsUndefined(first):
                        first = provider;
                        break;
                    case first === provider:
                        break;
                    case IsUndefined(second):
                        second = provider;
                        break;
                    case second === provider:
                        break;
                    default:
                        if (rest === undefined) rest = new _Set();
                        rest.add(provider);
                        break;
                }
            }
            function getProviderNoCache(O, P) {
                if (!IsUndefined(first)) {
                    if (first.isProviderFor(O, P)) return first;
                    if (!IsUndefined(second)) {
                        if (second.isProviderFor(O, P)) return first;
                        if (!IsUndefined(rest)) {
                            var iterator = GetIterator(rest);
                            while(true){
                                var next = IteratorStep(iterator);
                                if (!next) {
                                    return undefined;
                                }
                                var provider = IteratorValue(next);
                                if (provider.isProviderFor(O, P)) {
                                    IteratorClose(iterator);
                                    return provider;
                                }
                            }
                        }
                    }
                }
                if (!IsUndefined(fallback) && fallback.isProviderFor(O, P)) {
                    return fallback;
                }
                return undefined;
            }
            function getProvider(O, P) {
                var providerMap = targetProviderMap.get(O);
                var provider;
                if (!IsUndefined(providerMap)) {
                    provider = providerMap.get(P);
                }
                if (!IsUndefined(provider)) {
                    return provider;
                }
                provider = getProviderNoCache(O, P);
                if (!IsUndefined(provider)) {
                    if (IsUndefined(providerMap)) {
                        providerMap = new _Map();
                        targetProviderMap.set(O, providerMap);
                    }
                    providerMap.set(P, provider);
                }
                return provider;
            }
            function hasProvider(provider) {
                if (IsUndefined(provider)) throw new TypeError();
                return first === provider || second === provider || !IsUndefined(rest) && rest.has(provider);
            }
            function setProvider(O, P, provider) {
                if (!hasProvider(provider)) {
                    throw new Error("Metadata provider not registered.");
                }
                var existingProvider = getProvider(O, P);
                if (existingProvider !== provider) {
                    if (!IsUndefined(existingProvider)) {
                        return false;
                    }
                    var providerMap = targetProviderMap.get(O);
                    if (IsUndefined(providerMap)) {
                        providerMap = new _Map();
                        targetProviderMap.set(O, providerMap);
                    }
                    providerMap.set(P, provider);
                }
                return true;
            }
        }
        /**
         * Gets or creates the shared registry of metadata providers.
         */ function GetOrCreateMetadataRegistry() {
            var metadataRegistry;
            if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
                metadataRegistry = root.Reflect[registrySymbol];
            }
            if (IsUndefined(metadataRegistry)) {
                metadataRegistry = CreateMetadataRegistry();
            }
            if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
                Object.defineProperty(root.Reflect, registrySymbol, {
                    enumerable: false,
                    configurable: false,
                    writable: false,
                    value: metadataRegistry
                });
            }
            return metadataRegistry;
        }
        function CreateMetadataProvider(registry) {
            // [[Metadata]] internal slot
            // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
            var _$metadata = new _WeakMap();
            var provider = {
                isProviderFor: function isProviderFor(O, P) {
                    var targetMetadata = _$metadata.get(O);
                    if (IsUndefined(targetMetadata)) return false;
                    return targetMetadata.has(P);
                },
                OrdinaryDefineOwnMetadata: OrdinaryDefineOwnMetadata,
                OrdinaryHasOwnMetadata: OrdinaryHasOwnMetadata,
                OrdinaryGetOwnMetadata: OrdinaryGetOwnMetadata,
                OrdinaryOwnMetadataKeys: OrdinaryOwnMetadataKeys,
                OrdinaryDeleteMetadata: OrdinaryDeleteMetadata
            };
            metadataRegistry.registerProvider(provider);
            return provider;
            function GetOrCreateMetadataMap(O, P, Create) {
                var targetMetadata = _$metadata.get(O);
                var createdTargetMetadata = false;
                if (IsUndefined(targetMetadata)) {
                    if (!Create) return undefined;
                    targetMetadata = new _Map();
                    _$metadata.set(O, targetMetadata);
                    createdTargetMetadata = true;
                }
                var metadataMap = targetMetadata.get(P);
                if (IsUndefined(metadataMap)) {
                    if (!Create) return undefined;
                    metadataMap = new _Map();
                    targetMetadata.set(P, metadataMap);
                    if (!registry.setProvider(O, P, provider)) {
                        targetMetadata.delete(P);
                        if (createdTargetMetadata) {
                            _$metadata.delete(O);
                        }
                        throw new Error("Wrong provider for target.");
                    }
                }
                return metadataMap;
            }
            // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
            function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
                if (IsUndefined(metadataMap)) return false;
                return ToBoolean(metadataMap.has(MetadataKey));
            }
            // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
            function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
                if (IsUndefined(metadataMap)) return undefined;
                return metadataMap.get(MetadataKey);
            }
            // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
            function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
                metadataMap.set(MetadataKey, MetadataValue);
            }
            // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
            function OrdinaryOwnMetadataKeys(O, P) {
                var keys = [];
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
                if (IsUndefined(metadataMap)) return keys;
                var keysObj = metadataMap.keys();
                var iterator = GetIterator(keysObj);
                var k = 0;
                while(true){
                    var next = IteratorStep(iterator);
                    if (!next) {
                        keys.length = k;
                        return keys;
                    }
                    var nextValue = IteratorValue(next);
                    try {
                        keys[k] = nextValue;
                    } catch (e) {
                        try {
                            IteratorClose(iterator);
                        } finally{
                            throw e;
                        }
                    }
                    k++;
                }
            }
            function OrdinaryDeleteMetadata(MetadataKey, O, P) {
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
                if (IsUndefined(metadataMap)) return false;
                if (!metadataMap.delete(MetadataKey)) return false;
                if (metadataMap.size === 0) {
                    var targetMetadata = _$metadata.get(O);
                    if (!IsUndefined(targetMetadata)) {
                        targetMetadata.delete(P);
                        if (targetMetadata.size === 0) {
                            _$metadata.delete(targetMetadata);
                        }
                    }
                }
                return true;
            }
        }
        function CreateFallbackProvider(reflect) {
            var _$defineMetadata = reflect.defineMetadata, _$hasOwnMetadata = reflect.hasOwnMetadata, _$getOwnMetadata = reflect.getOwnMetadata, _$getOwnMetadataKeys = reflect.getOwnMetadataKeys, _$deleteMetadata = reflect.deleteMetadata;
            var metadataOwner = new _WeakMap();
            var provider = {
                isProviderFor: function isProviderFor(O, P) {
                    var metadataPropertySet = metadataOwner.get(O);
                    if (!IsUndefined(metadataPropertySet) && metadataPropertySet.has(P)) {
                        return true;
                    }
                    if (_$getOwnMetadataKeys(O, P).length) {
                        if (IsUndefined(metadataPropertySet)) {
                            metadataPropertySet = new _Set();
                            metadataOwner.set(O, metadataPropertySet);
                        }
                        metadataPropertySet.add(P);
                        return true;
                    }
                    return false;
                },
                OrdinaryDefineOwnMetadata: _$defineMetadata,
                OrdinaryHasOwnMetadata: _$hasOwnMetadata,
                OrdinaryGetOwnMetadata: _$getOwnMetadata,
                OrdinaryOwnMetadataKeys: _$getOwnMetadataKeys,
                OrdinaryDeleteMetadata: _$deleteMetadata
            };
            return provider;
        }
        /**
         * Gets the metadata provider for an object. If the object has no metadata provider and this is for a create operation,
         * then this module's metadata provider is assigned to the object.
         */ function GetMetadataProvider(O, P, Create) {
            var registeredProvider = metadataRegistry.getProvider(O, P);
            if (!IsUndefined(registeredProvider)) {
                return registeredProvider;
            }
            if (Create) {
                if (metadataRegistry.setProvider(O, P, metadataProvider)) {
                    return metadataProvider;
                }
                throw new Error("Illegal state.");
            }
            return undefined;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ function() {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function() {
                    return this;
                };
                MapIterator.prototype[iteratorSymbol] = function() {
                    return this;
                };
                MapIterator.prototype.next = function() {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        } else {
                            this._index++;
                        }
                        return {
                            value: result,
                            done: false
                        };
                    }
                    return {
                        value: undefined,
                        done: true
                    };
                };
                MapIterator.prototype.throw = function(error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function(value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return {
                        value: value,
                        done: true
                    };
                };
                return MapIterator;
            }();
            var _$Map = /** @class */ function() {
                function Map1() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map1.prototype, "size", {
                    get: function get() {
                        return this._keys.length;
                    },
                    enumerable: true,
                    configurable: true
                });
                Map1.prototype.has = function(key) {
                    return this._find(key, /*insert*/ false) >= 0;
                };
                Map1.prototype.get = function(key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map1.prototype.set = function(key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map1.prototype.delete = function(key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for(var i = index + 1; i < size; i++){
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (SameValueZero(key, this._cacheKey)) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map1.prototype.clear = function() {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map1.prototype.keys = function() {
                    return new MapIterator(this._keys, this._values, getKey);
                };
                Map1.prototype.values = function() {
                    return new MapIterator(this._keys, this._values, getValue);
                };
                Map1.prototype.entries = function() {
                    return new MapIterator(this._keys, this._values, getEntry);
                };
                Map1.prototype["@@iterator"] = function() {
                    return this.entries();
                };
                Map1.prototype[iteratorSymbol] = function() {
                    return this.entries();
                };
                Map1.prototype._find = function(key, insert) {
                    if (!SameValueZero(this._cacheKey, key)) {
                        this._cacheIndex = -1;
                        for(var i = 0; i < this._keys.length; i++){
                            if (SameValueZero(this._keys[i], key)) {
                                this._cacheIndex = i;
                                break;
                            }
                        }
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map1;
            }();
            return _$Map;
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [
                    key,
                    value
                ];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            var _$Set = /** @class */ function() {
                function Set1() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set1.prototype, "size", {
                    get: function get() {
                        return this._map.size;
                    },
                    enumerable: true,
                    configurable: true
                });
                Set1.prototype.has = function(value) {
                    return this._map.has(value);
                };
                Set1.prototype.add = function(value) {
                    return this._map.set(value, value), this;
                };
                Set1.prototype.delete = function(value) {
                    return this._map.delete(value);
                };
                Set1.prototype.clear = function() {
                    this._map.clear();
                };
                Set1.prototype.keys = function() {
                    return this._map.keys();
                };
                Set1.prototype.values = function() {
                    return this._map.keys();
                };
                Set1.prototype.entries = function() {
                    return this._map.entries();
                };
                Set1.prototype["@@iterator"] = function() {
                    return this.keys();
                };
                Set1.prototype[iteratorSymbol] = function() {
                    return this.keys();
                };
                return Set1;
            }();
            return _$Set;
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ function() {
                function WeakMap1() {
                    this._key = CreateUniqueKey();
                }
                WeakMap1.prototype.has = function(target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap1.prototype.get = function(target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap1.prototype.set = function(target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap1.prototype.delete = function(target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap1.prototype.clear = function() {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap1;
            }();
            function CreateUniqueKey() {
                var key;
                do key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create) return undefined;
                    Object.defineProperty(target, rootKey, {
                        value: HashMap.create()
                    });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for(var i = 0; i < size; ++i)buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    var array = new Uint8Array(size);
                    if (typeof crypto !== "undefined") {
                        crypto.getRandomValues(array);
                    } else if (typeof msCrypto !== "undefined") {
                        msCrypto.getRandomValues(array);
                    } else {
                        FillRandomBytes(array, size);
                    }
                    return array;
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for(var offset = 0; offset < UUID_SIZE; ++offset){
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8) result += "-";
                    if (byte < 16) result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect$1 || (Reflect$1 = {}));

const inject = ()=>(target, property)=>{
        const type = Reflect.getMetadata('design:type', target, property);
        const providersByElement = new Map();
        Object.defineProperty(target, property, {
            get () {
                let provider = providersByElement.get(this);
                if (!provider) {
                    var _this;
                    const name = providers.get(type);
                    provider = (_this = this.el.closest(`[${name}]`) || this.el.sceneEl.querySelector(`meta-scene-container[${name}]`)) == null ? void 0 : _this.components[name].__AFRAME_ELEMENT__;
                    if (!provider) {
                        throw new Error(`${name} cannot be injected. May be it is not correctly provided ?`);
                    }
                    const listener = ()=>{
                        this.requestUpdate();
                    };
                    provider.el.addEventListener('__META_UPDATE__', listener);
                    this.__SUBSCRIPTIONS__ = this.__SUBSCRIPTIONS__ || [];
                    this.__SUBSCRIPTIONS__.push({
                        el: provider.el,
                        type: '__META_UPDATE__',
                        listener
                    });
                    providersByElement.set(this, provider);
                }
                return provider;
            },
            enumerable: true,
            configurable: true
        });
    };

const injectHtml = ()=>(target, property)=>{
        const type = Reflect.getMetadata('design:type', target, property);
        const providersByElement = new Map();
        Object.defineProperty(target, property, {
            get () {
                let provider = providersByElement.get(this);
                if (!provider) {
                    var _this;
                    const el = this.closest(`[meta-html-container]`).__META_ELEMENT_INSTANCE__.el;
                    const name = providers.get(type);
                    provider = (_this = el.closest(`[${name}]`) || el.sceneEl.querySelector(`meta-scene-container[${name}]`)) == null ? void 0 : _this.components[name].__AFRAME_ELEMENT__;
                    if (!provider) {
                        throw new Error(`${name} cannot be injected. May be it is not correctly provided ?`);
                    }
                    const listener = ()=>{
                        this.requestUpdate();
                    };
                    provider.el.addEventListener('__META_UPDATE__', listener);
                    this.__SUBSCRIPTIONS__ = this.__SUBSCRIPTIONS__ || [];
                    this.__SUBSCRIPTIONS__.push({
                        el: provider.el,
                        type: '__META_UPDATE__',
                        listener
                    });
                    providersByElement.set(this, provider);
                }
                return provider;
            },
            enumerable: true,
            configurable: true
        });
    };

const THREE$1 = AFRAME.THREE;
const injectable = (_options)=>(ElementClass)=>{
        const options = _extends({
            networked: false
        }, _options);
        const elementName = `_${THREE$1.MathUtils.generateUUID().toLowerCase()}`;
        providers.set(ElementClass, elementName);
        ElementClass.__ELEMENT_NAME__ = elementName;
        ElementClass.__NETWORKED__ = options.networked;
        ElementClass.__INTERNAL_PROPERTIES__ = ElementClass.__INTERNAL_PROPERTIES__ || [];
        ElementClass.schema = ElementClass.schema || {};
        ElementClass.dependencies = ElementClass.dependencies || [];
        ElementClass.multiple = false;
        ElementClass.mappings = ElementClass.mappings || {};
        const instances = new Map();
        const getInstance = (aframeInstance)=>{
            let instance = instances.get(aframeInstance);
            if (!instance) {
                instance = new ElementClass();
                aframeInstance.__AFRAME_ELEMENT__ = instance;
                instance.__AFRAME_INSTANCE__ = aframeInstance;
                instances.set(aframeInstance, instance);
            }
            return instance;
        };
        const aFrameElementDefinition = {
            get schema () {
                return ElementClass.schema;
            },
            get dependencies () {
                return ElementClass.dependencies;
            },
            get multiple () {
                return ElementClass.multiple;
            },
            init: function() {
                getInstance(this).init();
            },
            pause: function() {
                getInstance(this).pause();
            },
            play: function() {
                getInstance(this).play();
            },
            remove: function() {
                getInstance(this).remove();
                instances.delete(this);
            },
            tick: function(time, timeDelta) {
                getInstance(this).tick(time, timeDelta);
            },
            tock: function(time, timeDelta, camera) {
                getInstance(this).tock(time, timeDelta, camera);
            },
            updateSchema: function() {
                getInstance(this).updateSchema();
            },
            update: function(oldData) {
                getInstance(this).update(oldData);
                getInstance(this).el.dispatchEvent(new CustomEvent('__META_UPDATE__'));
            }
        };
        AFRAME.registerComponent(elementName, aFrameElementDefinition);
    };

const property = (options)=>(target, property)=>{
        const type = Reflect.getMetadata('design:type', target, property);
        if (!target.constructor.schema) {
            target.constructor.schema = {};
        }
        target.constructor.schema[property] = _extends({}, (options == null ? void 0 : options.default) !== undefined ? {
            default: type === Number || type === Boolean || type === String ? options.default : btoa(encodeURIComponent(JSON.stringify(options.default)))
        } : {}, {
            type: type === Number ? 'number' : type === Boolean ? 'boolean' : 'string',
            parse: function(value) {
                const result = type === String || !value ? value : type === Number || type === Boolean ? JSON.parse(value) : JSON.parse(decodeURIComponent(atob(value)));
                return result;
            }
        });
        Object.defineProperty(target, property, {
            get () {
                return this.data[property];
            },
            enumerable: true,
            configurable: true
        });
    };

const actions = new Map();
const state = ()=>(target, property)=>{
        if (!target.constructor.__INTERNAL_PROPERTIES__) {
            target.constructor.__INTERNAL_PROPERTIES__ = [];
        }
        target.constructor.__INTERNAL_PROPERTIES__.push(property);
        if (!target.constructor.schema) {
            target.constructor.schema = {};
        }
        target.constructor.schema[property] = {
            type: 'string'
        };
        Object.defineProperty(target, property, {
            get () {
                return JSON.parse(decodeURIComponent(atob(this.data[property])));
            },
            set (value) {
                if (!this.constructor.schema[property].default) {
                    this.constructor.schema[property].default = btoa(encodeURIComponent(JSON.stringify(value)));
                }
                if (!this.__AFRAME_INSTANCE__) {
                    return;
                }
                const action = actions.get(this) || {
                    timer: 0,
                    properties: []
                };
                if (action.timer) {
                    clearTimeout(action.timer);
                }
                action.properties[property] = btoa(encodeURIComponent(JSON.stringify(value)));
                action.timer = setTimeout(()=>{
                    this.el.setAttribute(this.constructor.__ELEMENT_NAME__, action.properties);
                    actions.delete(this);
                }, 100);
                if (NAF && this.constructor.__NETWORKED__ && NAF.connection.isConnected() && !NAF.utils.isMine(this.el)) {
                    NAF.utils.takeOwnership(this.el);
                }
            },
            enumerable: true,
            configurable: true
        });
    };

const { THREE } = AFRAME;

export { MetaElement, MetaHtmlElement, MetaProvider, THREE, customElement, t$1 as customHtmlElement, x as html, inject, injectHtml, injectable, T as noChange, E as nothing, property, n as propertyHtml, state, r as stateHtml, o as unsafeHTML };

// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"J4Nk":[function(require,module,exports) {
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
'use strict';
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};
},{}],"awqi":[function(require,module,exports) {
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

var l = require("object-assign"),
    n = "function" === typeof Symbol && Symbol.for,
    p = n ? Symbol.for("react.element") : 60103,
    q = n ? Symbol.for("react.portal") : 60106,
    r = n ? Symbol.for("react.fragment") : 60107,
    t = n ? Symbol.for("react.strict_mode") : 60108,
    u = n ? Symbol.for("react.profiler") : 60114,
    v = n ? Symbol.for("react.provider") : 60109,
    w = n ? Symbol.for("react.context") : 60110,
    x = n ? Symbol.for("react.forward_ref") : 60112,
    y = n ? Symbol.for("react.suspense") : 60113,
    z = n ? Symbol.for("react.memo") : 60115,
    A = n ? Symbol.for("react.lazy") : 60116,
    B = "function" === typeof Symbol && Symbol.iterator;

function C(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);

  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}

var D = {
  isMounted: function () {
    return !1;
  },
  enqueueForceUpdate: function () {},
  enqueueReplaceState: function () {},
  enqueueSetState: function () {}
},
    E = {};

function F(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = E;
  this.updater = c || D;
}

F.prototype.isReactComponent = {};

F.prototype.setState = function (a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(C(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};

F.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function G() {}

G.prototype = F.prototype;

function H(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = E;
  this.updater = c || D;
}

var I = H.prototype = new G();
I.constructor = H;
l(I, F.prototype);
I.isPureReactComponent = !0;
var J = {
  current: null
},
    K = Object.prototype.hasOwnProperty,
    L = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function M(a, b, c) {
  var e,
      d = {},
      g = null,
      k = null;
  if (null != b) for (e in void 0 !== b.ref && (k = b.ref), void 0 !== b.key && (g = "" + b.key), b) K.call(b, e) && !L.hasOwnProperty(e) && (d[e] = b[e]);
  var f = arguments.length - 2;
  if (1 === f) d.children = c;else if (1 < f) {
    for (var h = Array(f), m = 0; m < f; m++) h[m] = arguments[m + 2];

    d.children = h;
  }
  if (a && a.defaultProps) for (e in f = a.defaultProps, f) void 0 === d[e] && (d[e] = f[e]);
  return {
    $$typeof: p,
    type: a,
    key: g,
    ref: k,
    props: d,
    _owner: J.current
  };
}

function N(a, b) {
  return {
    $$typeof: p,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function O(a) {
  return "object" === typeof a && null !== a && a.$$typeof === p;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var P = /\/+/g,
    Q = [];

function R(a, b, c, e) {
  if (Q.length) {
    var d = Q.pop();
    d.result = a;
    d.keyPrefix = b;
    d.func = c;
    d.context = e;
    d.count = 0;
    return d;
  }

  return {
    result: a,
    keyPrefix: b,
    func: c,
    context: e,
    count: 0
  };
}

function S(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > Q.length && Q.push(a);
}

function T(a, b, c, e) {
  var d = typeof a;
  if ("undefined" === d || "boolean" === d) a = null;
  var g = !1;
  if (null === a) g = !0;else switch (d) {
    case "string":
    case "number":
      g = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case p:
        case q:
          g = !0;
      }

  }
  if (g) return c(e, a, "" === b ? "." + U(a, 0) : b), 1;
  g = 0;
  b = "" === b ? "." : b + ":";
  if (Array.isArray(a)) for (var k = 0; k < a.length; k++) {
    d = a[k];
    var f = b + U(d, k);
    g += T(d, f, c, e);
  } else if (null === a || "object" !== typeof a ? f = null : (f = B && a[B] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), k = 0; !(d = a.next()).done;) d = d.value, f = b + U(d, k++), g += T(d, f, c, e);else if ("object" === d) throw c = "" + a, Error(C(31, "[object Object]" === c ? "object with keys {" + Object.keys(a).join(", ") + "}" : c, ""));
  return g;
}

function V(a, b, c) {
  return null == a ? 0 : T(a, "", b, c);
}

function U(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}

function W(a, b) {
  a.func.call(a.context, b, a.count++);
}

function aa(a, b, c) {
  var e = a.result,
      d = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a) ? X(a, e, c, function (a) {
    return a;
  }) : null != a && (O(a) && (a = N(a, d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(P, "$&/") + "/") + c)), e.push(a));
}

function X(a, b, c, e, d) {
  var g = "";
  null != c && (g = ("" + c).replace(P, "$&/") + "/");
  b = R(b, g, e, d);
  V(a, aa, b);
  S(b);
}

var Y = {
  current: null
};

function Z() {
  var a = Y.current;
  if (null === a) throw Error(C(321));
  return a;
}

var ba = {
  ReactCurrentDispatcher: Y,
  ReactCurrentBatchConfig: {
    suspense: null
  },
  ReactCurrentOwner: J,
  IsSomeRendererActing: {
    current: !1
  },
  assign: l
};
exports.Children = {
  map: function (a, b, c) {
    if (null == a) return a;
    var e = [];
    X(a, e, null, b, c);
    return e;
  },
  forEach: function (a, b, c) {
    if (null == a) return a;
    b = R(null, null, b, c);
    V(a, W, b);
    S(b);
  },
  count: function (a) {
    return V(a, function () {
      return null;
    }, null);
  },
  toArray: function (a) {
    var b = [];
    X(a, b, null, function (a) {
      return a;
    });
    return b;
  },
  only: function (a) {
    if (!O(a)) throw Error(C(143));
    return a;
  }
};
exports.Component = F;
exports.Fragment = r;
exports.Profiler = u;
exports.PureComponent = H;
exports.StrictMode = t;
exports.Suspense = y;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ba;

exports.cloneElement = function (a, b, c) {
  if (null === a || void 0 === a) throw Error(C(267, a));
  var e = l({}, a.props),
      d = a.key,
      g = a.ref,
      k = a._owner;

  if (null != b) {
    void 0 !== b.ref && (g = b.ref, k = J.current);
    void 0 !== b.key && (d = "" + b.key);
    if (a.type && a.type.defaultProps) var f = a.type.defaultProps;

    for (h in b) K.call(b, h) && !L.hasOwnProperty(h) && (e[h] = void 0 === b[h] && void 0 !== f ? f[h] : b[h]);
  }

  var h = arguments.length - 2;
  if (1 === h) e.children = c;else if (1 < h) {
    f = Array(h);

    for (var m = 0; m < h; m++) f[m] = arguments[m + 2];

    e.children = f;
  }
  return {
    $$typeof: p,
    type: a.type,
    key: d,
    ref: g,
    props: e,
    _owner: k
  };
};

exports.createContext = function (a, b) {
  void 0 === b && (b = null);
  a = {
    $$typeof: w,
    _calculateChangedBits: b,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
  a.Provider = {
    $$typeof: v,
    _context: a
  };
  return a.Consumer = a;
};

exports.createElement = M;

exports.createFactory = function (a) {
  var b = M.bind(null, a);
  b.type = a;
  return b;
};

exports.createRef = function () {
  return {
    current: null
  };
};

exports.forwardRef = function (a) {
  return {
    $$typeof: x,
    render: a
  };
};

exports.isValidElement = O;

exports.lazy = function (a) {
  return {
    $$typeof: A,
    _ctor: a,
    _status: -1,
    _result: null
  };
};

exports.memo = function (a, b) {
  return {
    $$typeof: z,
    type: a,
    compare: void 0 === b ? null : b
  };
};

exports.useCallback = function (a, b) {
  return Z().useCallback(a, b);
};

exports.useContext = function (a, b) {
  return Z().useContext(a, b);
};

exports.useDebugValue = function () {};

exports.useEffect = function (a, b) {
  return Z().useEffect(a, b);
};

exports.useImperativeHandle = function (a, b, c) {
  return Z().useImperativeHandle(a, b, c);
};

exports.useLayoutEffect = function (a, b) {
  return Z().useLayoutEffect(a, b);
};

exports.useMemo = function (a, b) {
  return Z().useMemo(a, b);
};

exports.useReducer = function (a, b, c) {
  return Z().useReducer(a, b, c);
};

exports.useRef = function (a) {
  return Z().useRef(a);
};

exports.useState = function (a) {
  return Z().useState(a);
};

exports.version = "16.13.1";
},{"object-assign":"J4Nk"}],"n8MK":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}
},{"./cjs/react.production.min.js":"awqi"}],"IvPb":[function(require,module,exports) {
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';var f,g,h,k,l;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0))};g=function(a,b){q=setTimeout(a,b)};h=function(){clearTimeout(q)};k=function(){return!1};l=exports.unstable_forceFrameRate=function(){}}else{var w=window.performance,x=window.Date,
y=window.setTimeout,z=window.clearTimeout;if("undefined"!==typeof console){var A=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function"!==typeof A&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"===
typeof w&&"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else{var B=x.now();exports.unstable_now=function(){return x.now()-B}}var C=!1,D=null,E=-1,F=5,G=0;k=function(){return exports.unstable_now()>=G};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):F=0<a?Math.floor(1E3/a):5};var H=new MessageChannel,I=H.port2;H.port1.onmessage=
function(){if(null!==D){var a=exports.unstable_now();G=a+F;try{D(!0,a)?I.postMessage(null):(C=!1,D=null)}catch(b){throw I.postMessage(null),b;}}else C=!1};f=function(a){D=a;C||(C=!0,I.postMessage(null))};g=function(a,b){E=y(function(){a(exports.unstable_now())},b)};h=function(){z(E);E=-1}}function J(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<K(e,b))a[d]=b,a[c]=e,c=d;else break a}}function L(a){a=a[0];return void 0===a?null:a}
function M(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>K(n,c))void 0!==r&&0>K(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>K(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function K(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var N=[],O=[],P=1,Q=null,R=3,S=!1,T=!1,U=!1;
function V(a){for(var b=L(O);null!==b;){if(null===b.callback)M(O);else if(b.startTime<=a)M(O),b.sortIndex=b.expirationTime,J(N,b);else break;b=L(O)}}function W(a){U=!1;V(a);if(!T)if(null!==L(N))T=!0,f(X);else{var b=L(O);null!==b&&g(W,b.startTime-a)}}
function X(a,b){T=!1;U&&(U=!1,h());S=!0;var c=R;try{V(b);for(Q=L(N);null!==Q&&(!(Q.expirationTime>b)||a&&!k());){var d=Q.callback;if(null!==d){Q.callback=null;R=Q.priorityLevel;var e=d(Q.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?Q.callback=e:Q===L(N)&&M(N);V(b)}else M(N);Q=L(N)}if(null!==Q)var m=!0;else{var n=L(O);null!==n&&g(W,n.startTime-b);m=!1}return m}finally{Q=null,R=c,S=!1}}
function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var Z=l;exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){T||S||(T=!0,f(X))};
exports.unstable_getCurrentPriorityLevel=function(){return R};exports.unstable_getFirstCallbackNode=function(){return L(N)};exports.unstable_next=function(a){switch(R){case 1:case 2:case 3:var b=3;break;default:b=R}var c=R;R=b;try{return a()}finally{R=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=Z;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=R;R=a;try{return b()}finally{R=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Y(a)}else c=Y(a),e=d;c=e+c;a={id:P++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,J(O,a),null===L(N)&&a===L(O)&&(U?h():U=!0,g(W,e-d))):(a.sortIndex=c,J(N,a),T||S||(T=!0,f(X)));return a};
exports.unstable_shouldYield=function(){var a=exports.unstable_now();V(a);var b=L(N);return b!==Q&&null!==Q&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<Q.expirationTime||k()};exports.unstable_wrapCallback=function(a){var b=R;return function(){var c=R;R=b;try{return a.apply(this,arguments)}finally{R=c}}};

},{}],"MDSO":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/scheduler.production.min.js');
} else {
  module.exports = require('./cjs/scheduler.development.js');
}
},{"./cjs/scheduler.production.min.js":"IvPb"}],"i17t":[function(require,module,exports) {
/** @license React v16.13.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
'use strict';var aa=require("react"),n=require("object-assign"),r=require("scheduler");function u(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(u(227));
function ba(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a}};function ja(a,b,c,d,e,f,g,h,k){da=!1;ea=null;ba.apply(ia,arguments)}function ka(a,b,c,d,e,f,g,h,k){ja.apply(this,arguments);if(da){if(da){var l=ea;da=!1;ea=null}else throw Error(u(198));fa||(fa=!0,ha=l)}}var la=null,ma=null,na=null;
function oa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=na(c);ka(d,b,void 0,a);a.currentTarget=null}var pa=null,qa={};
function ra(){if(pa)for(var a in qa){var b=qa[a],c=pa.indexOf(a);if(!(-1<c))throw Error(u(96,a));if(!sa[c]){if(!b.extractEvents)throw Error(u(97,a));sa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(ta.hasOwnProperty(h))throw Error(u(99,h));ta[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ua(k[e],g,h);e=!0}else f.registrationName?(ua(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(u(98,d,a));}}}}
function ua(a,b,c){if(va[a])throw Error(u(100,a));va[a]=b;wa[a]=b.eventTypes[c].dependencies}var sa=[],ta={},va={},wa={};function xa(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!qa.hasOwnProperty(c)||qa[c]!==d){if(qa[c])throw Error(u(102,c));qa[c]=d;b=!0}}b&&ra()}var ya=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),za=null,Aa=null,Ba=null;
function Ca(a){if(a=ma(a)){if("function"!==typeof za)throw Error(u(280));var b=a.stateNode;b&&(b=la(b),za(a.stateNode,a.type,b))}}function Da(a){Aa?Ba?Ba.push(a):Ba=[a]:Aa=a}function Ea(){if(Aa){var a=Aa,b=Ba;Ba=Aa=null;Ca(a);if(b)for(a=0;a<b.length;a++)Ca(b[a])}}function Fa(a,b){return a(b)}function Ga(a,b,c,d,e){return a(b,c,d,e)}function Ha(){}var Ia=Fa,Ja=!1,Ka=!1;function La(){if(null!==Aa||null!==Ba)Ha(),Ea()}
function Ma(a,b,c){if(Ka)return a(b,c);Ka=!0;try{return Ia(a,b,c)}finally{Ka=!1,La()}}var Na=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oa=Object.prototype.hasOwnProperty,Pa={},Qa={};
function Ra(a){if(Oa.call(Qa,a))return!0;if(Oa.call(Pa,a))return!1;if(Na.test(a))return Qa[a]=!0;Pa[a]=!0;return!1}function Sa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function Ta(a,b,c,d){if(null===b||"undefined"===typeof b||Sa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var C={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){C[a]=new v(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];C[b]=new v(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){C[a]=new v(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){C[a]=new v(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){C[a]=new v(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){C[a]=new v(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){C[a]=new v(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){C[a]=new v(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){C[a]=new v(a,5,!1,a.toLowerCase(),null,!1)});var Ua=/[\-:]([a-z])/g;function Va(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Ua,
Va);C[b]=new v(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!1)});
C.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!0)});var Wa=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Wa.hasOwnProperty("ReactCurrentDispatcher")||(Wa.ReactCurrentDispatcher={current:null});Wa.hasOwnProperty("ReactCurrentBatchConfig")||(Wa.ReactCurrentBatchConfig={suspense:null});
function Xa(a,b,c,d){var e=C.hasOwnProperty(b)?C[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Ta(b,c,e,d)&&(c=null),d||null===e?Ra(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var Ya=/^(.*)[\\\/]/,E="function"===typeof Symbol&&Symbol.for,Za=E?Symbol.for("react.element"):60103,$a=E?Symbol.for("react.portal"):60106,ab=E?Symbol.for("react.fragment"):60107,bb=E?Symbol.for("react.strict_mode"):60108,cb=E?Symbol.for("react.profiler"):60114,db=E?Symbol.for("react.provider"):60109,eb=E?Symbol.for("react.context"):60110,fb=E?Symbol.for("react.concurrent_mode"):60111,gb=E?Symbol.for("react.forward_ref"):60112,hb=E?Symbol.for("react.suspense"):60113,ib=E?Symbol.for("react.suspense_list"):
60120,jb=E?Symbol.for("react.memo"):60115,kb=E?Symbol.for("react.lazy"):60116,lb=E?Symbol.for("react.block"):60121,mb="function"===typeof Symbol&&Symbol.iterator;function nb(a){if(null===a||"object"!==typeof a)return null;a=mb&&a[mb]||a["@@iterator"];return"function"===typeof a?a:null}function ob(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}}
function pb(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ab:return"Fragment";case $a:return"Portal";case cb:return"Profiler";case bb:return"StrictMode";case hb:return"Suspense";case ib:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case eb:return"Context.Consumer";case db:return"Context.Provider";case gb:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case jb:return pb(a.type);case lb:return pb(a.render);case kb:if(a=1===a._status?a._result:null)return pb(a)}return null}function qb(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=pb(a.type);c=null;d&&(c=pb(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ya,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
function rb(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function sb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function tb(a){var b=sb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function xb(a){a._valueTracker||(a._valueTracker=tb(a))}function yb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=sb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function zb(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Ab(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=rb(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Bb(a,b){b=b.checked;null!=b&&Xa(a,"checked",b,!1)}
function Cb(a,b){Bb(a,b);var c=rb(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Db(a,b.type,c):b.hasOwnProperty("defaultValue")&&Db(a,b.type,rb(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Eb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Db(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Fb(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Gb(a,b){a=n({children:void 0},b);if(b=Fb(b.children))a.children=b;return a}
function Hb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+rb(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Ib(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(u(91));return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Jb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(u(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(u(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:rb(c)}}
function Kb(a,b){var c=rb(b.value),d=rb(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Lb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var Mb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Nb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ob(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Nb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Pb,Qb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Mb.svg||"innerHTML"in a)a.innerHTML=b;else{Pb=Pb||document.createElement("div");Pb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Pb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Rb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}function Sb(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Tb={animationend:Sb("Animation","AnimationEnd"),animationiteration:Sb("Animation","AnimationIteration"),animationstart:Sb("Animation","AnimationStart"),transitionend:Sb("Transition","TransitionEnd")},Ub={},Vb={};
ya&&(Vb=document.createElement("div").style,"AnimationEvent"in window||(delete Tb.animationend.animation,delete Tb.animationiteration.animation,delete Tb.animationstart.animation),"TransitionEvent"in window||delete Tb.transitionend.transition);function Wb(a){if(Ub[a])return Ub[a];if(!Tb[a])return a;var b=Tb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Vb)return Ub[a]=b[c];return a}
var Xb=Wb("animationend"),Yb=Wb("animationiteration"),Zb=Wb("animationstart"),$b=Wb("transitionend"),ac="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bc=new ("function"===typeof WeakMap?WeakMap:Map);function cc(a){var b=bc.get(a);void 0===b&&(b=new Map,bc.set(a,b));return b}
function dc(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function ec(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function fc(a){if(dc(a)!==a)throw Error(u(188));}
function gc(a){var b=a.alternate;if(!b){b=dc(a);if(null===b)throw Error(u(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return fc(e),a;if(f===d)return fc(e),b;f=f.sibling}throw Error(u(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(u(189));}}if(c.alternate!==d)throw Error(u(190));}if(3!==c.tag)throw Error(u(188));return c.stateNode.current===c?a:b}function hc(a){a=gc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function ic(a,b){if(null==b)throw Error(u(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function jc(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var kc=null;
function lc(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)oa(a,b[d],c[d]);else b&&oa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function mc(a){null!==a&&(kc=ic(kc,a));a=kc;kc=null;if(a){jc(a,lc);if(kc)throw Error(u(95));if(fa)throw a=ha,fa=!1,ha=null,a;}}
function nc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function oc(a){if(!ya)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}var pc=[];function qc(a){a.topLevelType=null;a.nativeEvent=null;a.targetInst=null;a.ancestors.length=0;10>pc.length&&pc.push(a)}
function rc(a,b,c,d){if(pc.length){var e=pc.pop();e.topLevelType=a;e.eventSystemFlags=d;e.nativeEvent=b;e.targetInst=c;return e}return{topLevelType:a,eventSystemFlags:d,nativeEvent:b,targetInst:c,ancestors:[]}}
function sc(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else{for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=tc(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=nc(a.nativeEvent);d=a.topLevelType;var f=a.nativeEvent,g=a.eventSystemFlags;0===c&&(g|=64);for(var h=null,k=0;k<sa.length;k++){var l=sa[k];l&&(l=l.extractEvents(d,b,f,e,g))&&(h=
ic(h,l))}mc(h)}}function uc(a,b,c){if(!c.has(a)){switch(a){case "scroll":vc(b,"scroll",!0);break;case "focus":case "blur":vc(b,"focus",!0);vc(b,"blur",!0);c.set("blur",null);c.set("focus",null);break;case "cancel":case "close":oc(a)&&vc(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===ac.indexOf(a)&&F(a,b)}c.set(a,null)}}
var wc,xc,yc,zc=!1,Ac=[],Bc=null,Cc=null,Dc=null,Ec=new Map,Fc=new Map,Gc=[],Hc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Ic="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
function Jc(a,b){var c=cc(b);Hc.forEach(function(a){uc(a,b,c)});Ic.forEach(function(a){uc(a,b,c)})}function Kc(a,b,c,d,e){return{blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:e,container:d}}
function Lc(a,b){switch(a){case "focus":case "blur":Bc=null;break;case "dragenter":case "dragleave":Cc=null;break;case "mouseover":case "mouseout":Dc=null;break;case "pointerover":case "pointerout":Ec.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Fc.delete(b.pointerId)}}function Mc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=Kc(b,c,d,e,f),null!==b&&(b=Nc(b),null!==b&&xc(b)),a;a.eventSystemFlags|=d;return a}
function Oc(a,b,c,d,e){switch(b){case "focus":return Bc=Mc(Bc,a,b,c,d,e),!0;case "dragenter":return Cc=Mc(Cc,a,b,c,d,e),!0;case "mouseover":return Dc=Mc(Dc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Ec.set(f,Mc(Ec.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Fc.set(f,Mc(Fc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Pc(a){var b=tc(a.target);if(null!==b){var c=dc(b);if(null!==c)if(b=c.tag,13===b){if(b=ec(c),null!==b){a.blockedOn=b;r.unstable_runWithPriority(a.priority,function(){yc(c)});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function Qc(a){if(null!==a.blockedOn)return!1;var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);if(null!==b){var c=Nc(b);null!==c&&xc(c);a.blockedOn=b;return!1}return!0}
function Sc(a,b,c){Qc(a)&&c.delete(b)}function Tc(){for(zc=!1;0<Ac.length;){var a=Ac[0];if(null!==a.blockedOn){a=Nc(a.blockedOn);null!==a&&wc(a);break}var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);null!==b?a.blockedOn=b:Ac.shift()}null!==Bc&&Qc(Bc)&&(Bc=null);null!==Cc&&Qc(Cc)&&(Cc=null);null!==Dc&&Qc(Dc)&&(Dc=null);Ec.forEach(Sc);Fc.forEach(Sc)}function Uc(a,b){a.blockedOn===b&&(a.blockedOn=null,zc||(zc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Tc)))}
function Vc(a){function b(b){return Uc(b,a)}if(0<Ac.length){Uc(Ac[0],a);for(var c=1;c<Ac.length;c++){var d=Ac[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Bc&&Uc(Bc,a);null!==Cc&&Uc(Cc,a);null!==Dc&&Uc(Dc,a);Ec.forEach(b);Fc.forEach(b);for(c=0;c<Gc.length;c++)d=Gc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Gc.length&&(c=Gc[0],null===c.blockedOn);)Pc(c),null===c.blockedOn&&Gc.shift()}
var Wc={},Yc=new Map,Zc=new Map,$c=["abort","abort",Xb,"animationEnd",Yb,"animationIteration",Zb,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking",
"seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",$b,"transitionEnd","waiting","waiting"];function ad(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1],f="on"+(e[0].toUpperCase()+e.slice(1));f={phasedRegistrationNames:{bubbled:f,captured:f+"Capture"},dependencies:[d],eventPriority:b};Zc.set(d,b);Yc.set(d,f);Wc[e]=f}}
ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);
ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);ad($c,2);for(var bd="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),cd=0;cd<bd.length;cd++)Zc.set(bd[cd],0);
var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function F(a,b){vc(b,a,!1)}function vc(a,b,c){var d=Zc.get(b);switch(void 0===d?2:d){case 0:d=gd.bind(null,b,1,a);break;case 1:d=hd.bind(null,b,1,a);break;default:d=id.bind(null,b,1,a)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function gd(a,b,c,d){Ja||Ha();var e=id,f=Ja;Ja=!0;try{Ga(e,a,b,c,d)}finally{(Ja=f)||La()}}function hd(a,b,c,d){ed(dd,id.bind(null,a,b,c,d))}
function id(a,b,c,d){if(fd)if(0<Ac.length&&-1<Hc.indexOf(a))a=Kc(null,a,b,c,d),Ac.push(a);else{var e=Rc(a,b,c,d);if(null===e)Lc(a,d);else if(-1<Hc.indexOf(a))a=Kc(e,a,b,c,d),Ac.push(a);else if(!Oc(e,a,b,c,d)){Lc(a,d);a=rc(a,d,null,b);try{Ma(sc,a)}finally{qc(a)}}}}
function Rc(a,b,c,d){c=nc(d);c=tc(c);if(null!==c){var e=dc(c);if(null===e)c=null;else{var f=e.tag;if(13===f){c=ec(e);if(null!==c)return c;c=null}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;c=null}else e!==c&&(c=null)}}a=rc(a,d,c,b);try{Ma(sc,a)}finally{qc(a)}return null}
var jd={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(jd).forEach(function(a){kd.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);jd[b]=jd[a]})});function ld(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||jd.hasOwnProperty(a)&&jd[a]?(""+b).trim():b+"px"}
function md(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ld(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var nd=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function od(a,b){if(b){if(nd[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(u(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(u(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(u(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(u(62,""));}}
function pd(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var qd=Mb.html;function rd(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=cc(a);b=wa[b];for(var d=0;d<b.length;d++)uc(b[d],a,c)}function sd(){}
function td(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ud(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function vd(a,b){var c=ud(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=ud(c)}}
function wd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?wd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function xd(){for(var a=window,b=td();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=td(a.document)}return b}
function yd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}var zd="$",Ad="/$",Bd="$?",Cd="$!",Dd=null,Ed=null;function Fd(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function Gd(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var Hd="function"===typeof setTimeout?setTimeout:void 0,Id="function"===typeof clearTimeout?clearTimeout:void 0;function Jd(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}
function Kd(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===zd||c===Cd||c===Bd){if(0===b)return a;b--}else c===Ad&&b++}a=a.previousSibling}return null}var Ld=Math.random().toString(36).slice(2),Md="__reactInternalInstance$"+Ld,Nd="__reactEventHandlers$"+Ld,Od="__reactContainere$"+Ld;
function tc(a){var b=a[Md];if(b)return b;for(var c=a.parentNode;c;){if(b=c[Od]||c[Md]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Kd(a);null!==a;){if(c=a[Md])return c;a=Kd(a)}return b}a=c;c=a.parentNode}return null}function Nc(a){a=a[Md]||a[Od];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Pd(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(u(33));}function Qd(a){return a[Nd]||null}
function Rd(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}
function Sd(a,b){var c=a.stateNode;if(!c)return null;var d=la(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw Error(u(231,
b,typeof c));return c}function Td(a,b,c){if(b=Sd(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a)}function Ud(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Rd(b);for(b=c.length;0<b--;)Td(c[b],"captured",a);for(b=0;b<c.length;b++)Td(c[b],"bubbled",a)}}
function Vd(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Sd(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a))}function Wd(a){a&&a.dispatchConfig.registrationName&&Vd(a._targetInst,null,a)}function Xd(a){jc(a,Ud)}var Yd=null,Zd=null,$d=null;
function ae(){if($d)return $d;var a,b=Zd,c=b.length,d,e="value"in Yd?Yd.value:Yd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return $d=e.slice(a,1<d?1-d:void 0)}function be(){return!0}function ce(){return!1}
function G(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?be:ce;this.isPropagationStopped=ce;return this}
n(G.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=be)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=be)},persist:function(){this.isPersistent=be},isPersistent:ce,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=ce;this._dispatchInstances=this._dispatchListeners=null}});G.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
G.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;de(c);return c};de(G);function ee(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function fe(a){if(!(a instanceof this))throw Error(u(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function de(a){a.eventPool=[];a.getPooled=ee;a.release=fe}var ge=G.extend({data:null}),he=G.extend({data:null}),ie=[9,13,27,32],je=ya&&"CompositionEvent"in window,ke=null;ya&&"documentMode"in document&&(ke=document.documentMode);
var le=ya&&"TextEvent"in window&&!ke,me=ya&&(!je||ke&&8<ke&&11>=ke),ne=String.fromCharCode(32),oe={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},pe=!1;
function qe(a,b){switch(a){case "keyup":return-1!==ie.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function re(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var se=!1;function te(a,b){switch(a){case "compositionend":return re(b);case "keypress":if(32!==b.which)return null;pe=!0;return ne;case "textInput":return a=b.data,a===ne&&pe?null:a;default:return null}}
function ue(a,b){if(se)return"compositionend"===a||!je&&qe(a,b)?(a=ae(),$d=Zd=Yd=null,se=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return me&&"ko"!==b.locale?null:b.data;default:return null}}
var ve={eventTypes:oe,extractEvents:function(a,b,c,d){var e;if(je)b:{switch(a){case "compositionstart":var f=oe.compositionStart;break b;case "compositionend":f=oe.compositionEnd;break b;case "compositionupdate":f=oe.compositionUpdate;break b}f=void 0}else se?qe(a,c)&&(f=oe.compositionEnd):"keydown"===a&&229===c.keyCode&&(f=oe.compositionStart);f?(me&&"ko"!==c.locale&&(se||f!==oe.compositionStart?f===oe.compositionEnd&&se&&(e=ae()):(Yd=d,Zd="value"in Yd?Yd.value:Yd.textContent,se=!0)),f=ge.getPooled(f,
b,c,d),e?f.data=e:(e=re(c),null!==e&&(f.data=e)),Xd(f),e=f):e=null;(a=le?te(a,c):ue(a,c))?(b=he.getPooled(oe.beforeInput,b,c,d),b.data=a,Xd(b)):b=null;return null===e?b:null===b?e:[e,b]}},we={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!we[a.type]:"textarea"===b?!0:!1}
var ye={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function ze(a,b,c){a=G.getPooled(ye.change,a,b,c);a.type="change";Da(c);Xd(a);return a}var Ae=null,Be=null;function Ce(a){mc(a)}function De(a){var b=Pd(a);if(yb(b))return a}function Ee(a,b){if("change"===a)return b}var Fe=!1;ya&&(Fe=oc("input")&&(!document.documentMode||9<document.documentMode));
function Ge(){Ae&&(Ae.detachEvent("onpropertychange",He),Be=Ae=null)}function He(a){if("value"===a.propertyName&&De(Be))if(a=ze(Be,a,nc(a)),Ja)mc(a);else{Ja=!0;try{Fa(Ce,a)}finally{Ja=!1,La()}}}function Ie(a,b,c){"focus"===a?(Ge(),Ae=b,Be=c,Ae.attachEvent("onpropertychange",He)):"blur"===a&&Ge()}function Je(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return De(Be)}function Ke(a,b){if("click"===a)return De(b)}function Le(a,b){if("input"===a||"change"===a)return De(b)}
var Me={eventTypes:ye,_isInputEventSupported:Fe,extractEvents:function(a,b,c,d){var e=b?Pd(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Ee;else if(xe(e))if(Fe)g=Le;else{g=Je;var h=Ie}else(f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=Ke);if(g&&(g=g(a,b)))return ze(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Db(e,"number",e.value)}},Ne=G.extend({view:null,detail:null}),
Oe={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pe(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Oe[a])?!!b[a]:!1}function Qe(){return Pe}
var Re=0,Se=0,Te=!1,Ue=!1,Ve=Ne.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Qe,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Re;Re=a.screenX;return Te?"mousemove"===a.type?a.screenX-b:0:(Te=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=Se;Se=a.screenY;return Ue?"mousemove"===a.type?a.screenY-b:0:(Ue=!0,0)}}),We=Ve.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Xe={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},Ye={eventTypes:Xe,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?tc(b):null,null!==b){var h=dc(b);if(b!==h||5!==b.tag&&6!==b.tag)b=null}}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===
a){var k=Ve;var l=Xe.mouseLeave;var m=Xe.mouseEnter;var p="mouse"}else if("pointerout"===a||"pointerover"===a)k=We,l=Xe.pointerLeave,m=Xe.pointerEnter,p="pointer";a=null==g?f:Pd(g);f=null==b?f:Pd(b);l=k.getPooled(l,g,c,d);l.type=p+"leave";l.target=a;l.relatedTarget=f;c=k.getPooled(m,b,c,d);c.type=p+"enter";c.target=f;c.relatedTarget=a;d=g;p=b;if(d&&p)a:{k=d;m=p;g=0;for(a=k;a;a=Rd(a))g++;a=0;for(b=m;b;b=Rd(b))a++;for(;0<g-a;)k=Rd(k),g--;for(;0<a-g;)m=Rd(m),a--;for(;g--;){if(k===m||k===m.alternate)break a;
k=Rd(k);m=Rd(m)}k=null}else k=null;m=k;for(k=[];d&&d!==m;){g=d.alternate;if(null!==g&&g===m)break;k.push(d);d=Rd(d)}for(d=[];p&&p!==m;){g=p.alternate;if(null!==g&&g===m)break;d.push(p);p=Rd(p)}for(p=0;p<k.length;p++)Vd(k[p],"bubbled",l);for(p=d.length;0<p--;)Vd(d[p],"captured",c);return 0===(e&64)?[l]:[l,c]}};function Ze(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var $e="function"===typeof Object.is?Object.is:Ze,af=Object.prototype.hasOwnProperty;
function bf(a,b){if($e(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!af.call(b,c[d])||!$e(a[c[d]],b[c[d]]))return!1;return!0}
var cf=ya&&"documentMode"in document&&11>=document.documentMode,df={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},ef=null,ff=null,gf=null,hf=!1;
function jf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(hf||null==ef||ef!==td(c))return null;c=ef;"selectionStart"in c&&yd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return gf&&bf(gf,c)?null:(gf=c,a=G.getPooled(df.select,ff,a,b),a.type="select",a.target=ef,Xd(a),a)}
var kf={eventTypes:df,extractEvents:function(a,b,c,d,e,f){e=f||(d.window===d?d.document:9===d.nodeType?d:d.ownerDocument);if(!(f=!e)){a:{e=cc(e);f=wa.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Pd(b):window;switch(a){case "focus":if(xe(e)||"true"===e.contentEditable)ef=e,ff=b,gf=null;break;case "blur":gf=ff=ef=null;break;case "mousedown":hf=!0;break;case "contextmenu":case "mouseup":case "dragend":return hf=!1,jf(c,d);case "selectionchange":if(cf)break;
case "keydown":case "keyup":return jf(c,d)}return null}},lf=G.extend({animationName:null,elapsedTime:null,pseudoElement:null}),mf=G.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),nf=Ne.extend({relatedTarget:null});function of(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf=Ne.extend({key:function(a){if(a.key){var b=pf[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=of(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?qf[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Qe,charCode:function(a){return"keypress"===
a.type?of(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?of(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),sf=Ve.extend({dataTransfer:null}),tf=Ne.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Qe}),uf=G.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),vf=Ve.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),wf={eventTypes:Wc,extractEvents:function(a,b,c,d){var e=Yc.get(a);if(!e)return null;switch(a){case "keypress":if(0===of(c))return null;case "keydown":case "keyup":a=rf;break;case "blur":case "focus":a=nf;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=
Ve;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=sf;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=tf;break;case Xb:case Yb:case Zb:a=lf;break;case $b:a=uf;break;case "scroll":a=Ne;break;case "wheel":a=vf;break;case "copy":case "cut":case "paste":a=mf;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=
We;break;default:a=G}b=a.getPooled(e,b,c,d);Xd(b);return b}};if(pa)throw Error(u(101));pa=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ra();var xf=Nc;la=Qd;ma=xf;na=Pd;xa({SimpleEventPlugin:wf,EnterLeaveEventPlugin:Ye,ChangeEventPlugin:Me,SelectEventPlugin:kf,BeforeInputEventPlugin:ve});var yf=[],zf=-1;function H(a){0>zf||(a.current=yf[zf],yf[zf]=null,zf--)}
function I(a,b){zf++;yf[zf]=a.current;a.current=b}var Af={},J={current:Af},K={current:!1},Bf=Af;function Cf(a,b){var c=a.type.contextTypes;if(!c)return Af;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L(a){a=a.childContextTypes;return null!==a&&void 0!==a}
function Df(){H(K);H(J)}function Ef(a,b,c){if(J.current!==Af)throw Error(u(168));I(J,b);I(K,c)}function Ff(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(u(108,pb(b)||"Unknown",e));return n({},c,{},d)}function Gf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Af;Bf=J.current;I(J,a);I(K,K.current);return!0}
function Hf(a,b,c){var d=a.stateNode;if(!d)throw Error(u(169));c?(a=Ff(a,b,Bf),d.__reactInternalMemoizedMergedChildContext=a,H(K),H(J),I(J,a)):H(K);I(K,c)}
var If=r.unstable_runWithPriority,Jf=r.unstable_scheduleCallback,Kf=r.unstable_cancelCallback,Lf=r.unstable_requestPaint,Mf=r.unstable_now,Nf=r.unstable_getCurrentPriorityLevel,Of=r.unstable_ImmediatePriority,Pf=r.unstable_UserBlockingPriority,Qf=r.unstable_NormalPriority,Rf=r.unstable_LowPriority,Sf=r.unstable_IdlePriority,Tf={},Uf=r.unstable_shouldYield,Vf=void 0!==Lf?Lf:function(){},Wf=null,Xf=null,Yf=!1,Zf=Mf(),$f=1E4>Zf?Mf:function(){return Mf()-Zf};
function ag(){switch(Nf()){case Of:return 99;case Pf:return 98;case Qf:return 97;case Rf:return 96;case Sf:return 95;default:throw Error(u(332));}}function bg(a){switch(a){case 99:return Of;case 98:return Pf;case 97:return Qf;case 96:return Rf;case 95:return Sf;default:throw Error(u(332));}}function cg(a,b){a=bg(a);return If(a,b)}function dg(a,b,c){a=bg(a);return Jf(a,b,c)}function eg(a){null===Wf?(Wf=[a],Xf=Jf(Of,fg)):Wf.push(a);return Tf}function gg(){if(null!==Xf){var a=Xf;Xf=null;Kf(a)}fg()}
function fg(){if(!Yf&&null!==Wf){Yf=!0;var a=0;try{var b=Wf;cg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Wf=null}catch(c){throw null!==Wf&&(Wf=Wf.slice(a+1)),Jf(Of,gg),c;}finally{Yf=!1}}}function hg(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function ig(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}var jg={current:null},kg=null,lg=null,mg=null;function ng(){mg=lg=kg=null}
function og(a){var b=jg.current;H(jg);a.type._context._currentValue=b}function pg(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}function qg(a,b){kg=a;mg=lg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(rg=!0),a.firstContext=null)}
function sg(a,b){if(mg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)mg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===lg){if(null===kg)throw Error(u(308));lg=b;kg.dependencies={expirationTime:0,firstContext:b,responders:null}}else lg=lg.next=b}return a._currentValue}var tg=!1;function ug(a){a.updateQueue={baseState:a.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}
function vg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,baseQueue:a.baseQueue,shared:a.shared,effects:a.effects})}function wg(a,b){a={expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null};return a.next=a}function xg(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function yg(a,b){var c=a.alternate;null!==c&&vg(c,a);a=a.updateQueue;c=a.baseQueue;null===c?(a.baseQueue=b.next=b,b.next=b):(b.next=c.next,c.next=b)}
function zg(a,b,c,d){var e=a.updateQueue;tg=!1;var f=e.baseQueue,g=e.shared.pending;if(null!==g){if(null!==f){var h=f.next;f.next=g.next;g.next=h}f=g;e.shared.pending=null;h=a.alternate;null!==h&&(h=h.updateQueue,null!==h&&(h.baseQueue=g))}if(null!==f){h=f.next;var k=e.baseState,l=0,m=null,p=null,x=null;if(null!==h){var z=h;do{g=z.expirationTime;if(g<d){var ca={expirationTime:z.expirationTime,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null};null===x?(p=x=
ca,m=k):x=x.next=ca;g>l&&(l=g)}else{null!==x&&(x=x.next={expirationTime:1073741823,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null});Ag(g,z.suspenseConfig);a:{var D=a,t=z;g=b;ca=c;switch(t.tag){case 1:D=t.payload;if("function"===typeof D){k=D.call(ca,k,g);break a}k=D;break a;case 3:D.effectTag=D.effectTag&-4097|64;case 0:D=t.payload;g="function"===typeof D?D.call(ca,k,g):D;if(null===g||void 0===g)break a;k=n({},k,g);break a;case 2:tg=!0}}null!==z.callback&&
(a.effectTag|=32,g=e.effects,null===g?e.effects=[z]:g.push(z))}z=z.next;if(null===z||z===h)if(g=e.shared.pending,null===g)break;else z=f.next=g.next,g.next=h,e.baseQueue=f=g,e.shared.pending=null}while(1)}null===x?m=k:x.next=p;e.baseState=m;e.baseQueue=x;Bg(l);a.expirationTime=l;a.memoizedState=k}}
function Cg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=e;e=c;if("function"!==typeof d)throw Error(u(191,d));d.call(e)}}}var Dg=Wa.ReactCurrentBatchConfig,Eg=(new aa.Component).refs;function Fg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;0===a.expirationTime&&(a.updateQueue.baseState=c)}
var Jg={isMounted:function(a){return(a=a._reactInternalFiber)?dc(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Gg(),d=Dg.suspense;
c=Hg(c,a,d);d=wg(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);xg(a,d);Ig(a,c)}};function Kg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!bf(c,d)||!bf(e,f):!0}
function Lg(a,b,c){var d=!1,e=Af;var f=b.contextType;"object"===typeof f&&null!==f?f=sg(f):(e=L(b)?Bf:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Cf(a,e):Af);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Jg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Mg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Jg.enqueueReplaceState(b,b.state,null)}
function Ng(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Eg;ug(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=sg(f):(f=L(b)?Bf:J.current,e.context=Cf(a,f));zg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Fg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Jg.enqueueReplaceState(e,e.state,null),zg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Og=Array.isArray;
function Pg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(u(309));var d=c.stateNode}if(!d)throw Error(u(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Eg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(u(284));if(!c._owner)throw Error(u(290,a));}return a}
function Qg(a,b){if("textarea"!==a.type)throw Error(u(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}
function Rg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Sg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Tg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Pg(a,b,c),d.return=a,d;d=Ug(c.type,c.key,c.props,null,a.mode,d);d.ref=Pg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=Vg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Wg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Tg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Za:return c=Ug(b.type,b.key,b.props,null,a.mode,c),c.ref=Pg(a,null,b),c.return=a,c;case $a:return b=Vg(b,a.mode,c),b.return=a,b}if(Og(b)||
nb(b))return b=Wg(b,a.mode,c,null),b.return=a,b;Qg(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Za:return c.key===e?c.type===ab?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case $a:return c.key===e?l(a,b,c,d):null}if(Og(c)||nb(c))return null!==e?null:m(a,b,c,d,null);Qg(a,c)}return null}function z(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Za:return a=a.get(null===d.key?c:d.key)||null,d.type===ab?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case $a:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Og(d)||nb(d))return a=a.get(c)||null,m(b,a,d,e,null);Qg(b,d)}return null}function ca(e,g,h,k){for(var l=null,t=null,m=g,y=g=0,A=null;null!==m&&y<h.length;y++){m.index>y?(A=m,m=null):A=m.sibling;var q=x(e,m,h[y],k);if(null===q){null===m&&(m=A);break}a&&
m&&null===q.alternate&&b(e,m);g=f(q,g,y);null===t?l=q:t.sibling=q;t=q;m=A}if(y===h.length)return c(e,m),l;if(null===m){for(;y<h.length;y++)m=p(e,h[y],k),null!==m&&(g=f(m,g,y),null===t?l=m:t.sibling=m,t=m);return l}for(m=d(e,m);y<h.length;y++)A=z(m,e,y,h[y],k),null!==A&&(a&&null!==A.alternate&&m.delete(null===A.key?y:A.key),g=f(A,g,y),null===t?l=A:t.sibling=A,t=A);a&&m.forEach(function(a){return b(e,a)});return l}function D(e,g,h,l){var k=nb(h);if("function"!==typeof k)throw Error(u(150));h=k.call(h);
if(null==h)throw Error(u(151));for(var m=k=null,t=g,y=g=0,A=null,q=h.next();null!==t&&!q.done;y++,q=h.next()){t.index>y?(A=t,t=null):A=t.sibling;var D=x(e,t,q.value,l);if(null===D){null===t&&(t=A);break}a&&t&&null===D.alternate&&b(e,t);g=f(D,g,y);null===m?k=D:m.sibling=D;m=D;t=A}if(q.done)return c(e,t),k;if(null===t){for(;!q.done;y++,q=h.next())q=p(e,q.value,l),null!==q&&(g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);return k}for(t=d(e,t);!q.done;y++,q=h.next())q=z(t,e,y,q.value,l),null!==q&&(a&&null!==
q.alternate&&t.delete(null===q.key?y:q.key),g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);a&&t.forEach(function(a){return b(e,a)});return k}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ab&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Za:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ab){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,
k.sibling);d=e(k,f.props);d.ref=Pg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ab?(d=Wg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ug(f.type,f.key,f.props,null,a.mode,h),h.ref=Pg(a,d,f),h.return=a,a=h)}return g(a);case $a:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=
d.sibling}d=Vg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Tg(f,a.mode,h),d.return=a,a=d),g(a);if(Og(f))return ca(a,d,f,h);if(nb(f))return D(a,d,f,h);l&&Qg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,Error(u(152,a.displayName||a.name||"Component"));}return c(a,d)}}var Xg=Rg(!0),Yg=Rg(!1),Zg={},$g={current:Zg},ah={current:Zg},bh={current:Zg};
function ch(a){if(a===Zg)throw Error(u(174));return a}function dh(a,b){I(bh,b);I(ah,a);I($g,Zg);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Ob(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=Ob(b,a)}H($g);I($g,b)}function eh(){H($g);H(ah);H(bh)}function fh(a){ch(bh.current);var b=ch($g.current);var c=Ob(b,a.type);b!==c&&(I(ah,a),I($g,c))}function gh(a){ah.current===a&&(H($g),H(ah))}var M={current:0};
function hh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===Bd||c.data===Cd))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function ih(a,b){return{responder:a,props:b}}
var jh=Wa.ReactCurrentDispatcher,kh=Wa.ReactCurrentBatchConfig,lh=0,N=null,O=null,P=null,mh=!1;function Q(){throw Error(u(321));}function nh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!$e(a[c],b[c]))return!1;return!0}
function oh(a,b,c,d,e,f){lh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.expirationTime=0;jh.current=null===a||null===a.memoizedState?ph:qh;a=c(d,e);if(b.expirationTime===lh){f=0;do{b.expirationTime=0;if(!(25>f))throw Error(u(301));f+=1;P=O=null;b.updateQueue=null;jh.current=rh;a=c(d,e)}while(b.expirationTime===lh)}jh.current=sh;b=null!==O&&null!==O.next;lh=0;P=O=N=null;mh=!1;if(b)throw Error(u(300));return a}
function th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}function uh(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(u(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}
function vh(a,b){return"function"===typeof b?b(a):b}
function wh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.expirationTime;if(l<lh){var m={expirationTime:k.expirationTime,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null};null===h?(g=h=m,f=d):h=h.next=m;l>N.expirationTime&&
(N.expirationTime=l,Bg(l))}else null!==h&&(h=h.next={expirationTime:1073741823,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),Ag(l,k.suspenseConfig),d=k.eagerReducer===a?k.eagerState:a(d,k.action);k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;$e(d,b.memoizedState)||(rg=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function xh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);$e(f,b.memoizedState)||(rg=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function yh(a){var b=th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:vh,lastRenderedState:a};a=a.dispatch=zh.bind(null,N,a);return[b.memoizedState,a]}function Ah(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}
function Bh(){return uh().memoizedState}function Ch(a,b,c,d){var e=th();N.effectTag|=a;e.memoizedState=Ah(1|b,c,void 0,void 0===d?null:d)}function Dh(a,b,c,d){var e=uh();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&nh(d,g.deps)){Ah(b,c,f,d);return}}N.effectTag|=a;e.memoizedState=Ah(1|b,c,f,d)}function Eh(a,b){return Ch(516,4,a,b)}function Fh(a,b){return Dh(516,4,a,b)}function Gh(a,b){return Dh(4,2,a,b)}
function Hh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function Ih(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Dh(4,2,Hh.bind(null,b,a),c)}function Jh(){}function Kh(a,b){th().memoizedState=[a,void 0===b?null:b];return a}function Lh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Mh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Nh(a,b,c){var d=ag();cg(98>d?98:d,function(){a(!0)});cg(97<d?97:d,function(){var d=kh.suspense;kh.suspense=void 0===b?null:b;try{a(!1),c()}finally{kh.suspense=d}})}
function zh(a,b,c){var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e={expirationTime:d,suspenseConfig:e,action:c,eagerReducer:null,eagerState:null,next:null};var f=b.pending;null===f?e.next=e:(e.next=f.next,f.next=e);b.pending=e;f=a.alternate;if(a===N||null!==f&&f===N)mh=!0,e.expirationTime=lh,N.expirationTime=lh;else{if(0===a.expirationTime&&(null===f||0===f.expirationTime)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.eagerReducer=f;e.eagerState=h;if($e(h,g))return}catch(k){}finally{}Ig(a,
d)}}
var sh={readContext:sg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useResponder:Q,useDeferredValue:Q,useTransition:Q},ph={readContext:sg,useCallback:Kh,useContext:sg,useEffect:Eh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Ch(4,2,Hh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Ch(4,2,a,b)},useMemo:function(a,b){var c=th();b=void 0===b?null:b;a=a();c.memoizedState=[a,
b];return a},useReducer:function(a,b,c){var d=th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=zh.bind(null,N,a);return[d.memoizedState,a]},useRef:function(a){var b=th();a={current:a};return b.memoizedState=a},useState:yh,useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=yh(a),d=c[0],e=c[1];Eh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=
c}},[a,b]);return d},useTransition:function(a){var b=yh(!1),c=b[0];b=b[1];return[Kh(Nh.bind(null,b,a),[b,a]),c]}},qh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:wh,useRef:Bh,useState:function(){return wh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=wh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=
wh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,b,a),[b,a]),c]}},rh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:xh,useRef:Bh,useState:function(){return xh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=xh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=xh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,
b,a),[b,a]),c]}},Oh=null,Ph=null,Qh=!1;function Rh(a,b){var c=Sh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function Th(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function Uh(a){if(Qh){var b=Ph;if(b){var c=b;if(!Th(a,b)){b=Jd(c.nextSibling);if(!b||!Th(a,b)){a.effectTag=a.effectTag&-1025|2;Qh=!1;Oh=a;return}Rh(Oh,c)}Oh=a;Ph=Jd(b.firstChild)}else a.effectTag=a.effectTag&-1025|2,Qh=!1,Oh=a}}function Vh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;Oh=a}
function Wh(a){if(a!==Oh)return!1;if(!Qh)return Vh(a),Qh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Gd(b,a.memoizedProps))for(b=Ph;b;)Rh(a,b),b=Jd(b.nextSibling);Vh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(u(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===Ad){if(0===b){Ph=Jd(a.nextSibling);break a}b--}else c!==zd&&c!==Cd&&c!==Bd||b++}a=a.nextSibling}Ph=null}}else Ph=Oh?Jd(a.stateNode.nextSibling):null;return!0}
function Xh(){Ph=Oh=null;Qh=!1}var Yh=Wa.ReactCurrentOwner,rg=!1;function R(a,b,c,d){b.child=null===a?Yg(b,null,c,d):Xg(b,a.child,c,d)}function Zh(a,b,c,d,e){c=c.render;var f=b.ref;qg(b,e);d=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,d,e);return b.child}
function ai(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!bi(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ci(a,b,g,d,e,f);a=Ug(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:bf,c(e,d)&&a.ref===b.ref))return $h(a,b,f);b.effectTag|=1;a=Sg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ci(a,b,c,d,e,f){return null!==a&&bf(a.memoizedProps,d)&&a.ref===b.ref&&(rg=!1,e<f)?(b.expirationTime=a.expirationTime,$h(a,b,f)):di(a,b,c,d,f)}function ei(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function di(a,b,c,d,e){var f=L(c)?Bf:J.current;f=Cf(b,f);qg(b,e);c=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,c,e);return b.child}
function fi(a,b,c,d,e){if(L(c)){var f=!0;Gf(b)}else f=!1;qg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Lg(b,c,d),Ng(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l);tg=!1;var x=b.memoizedState;g.state=x;zg(b,d,g,e);k=b.memoizedState;h!==d||x!==k||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),k=b.memoizedState),(h=tg||Kg(b,c,h,d,x,k,l))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,vg(a,b),h=b.memoizedProps,g.props=b.type===b.elementType?h:ig(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l)),m=c.getDerivedStateFromProps,(p="function"===typeof m||"function"===
typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l),tg=!1,k=b.memoizedState,g.state=k,zg(b,d,g,e),x=b.memoizedState,h!==d||k!==x||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),x=b.memoizedState),(m=tg||Kg(b,c,h,d,k,x,l))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=l,d=m):
("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return gi(a,b,c,d,f,e)}
function gi(a,b,c,d,e,f){ei(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Hf(b,c,!1),$h(a,b,f);d=b.stateNode;Yh.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Xg(b,a.child,null,f),b.child=Xg(b,null,h,f)):R(a,b,h,f);b.memoizedState=d.state;e&&Hf(b,c,!0);return b.child}function hi(a){var b=a.stateNode;b.pendingContext?Ef(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ef(a,b.context,!1);dh(a,b.containerInfo)}
var ii={dehydrated:null,retryTime:0};
function ji(a,b,c){var d=b.mode,e=b.pendingProps,f=M.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);I(M,f&1);if(null===a){void 0!==e.fallback&&Uh(b);if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=
b;e.sibling=c;b.memoizedState=ii;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=Yg(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;c=Sg(a,a.pendingProps);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=Sg(d,e);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=ii;b.child=c;return d}c=Xg(b,a.child,e.children,c);b.memoizedState=null;return b.child=
c}a=a.child;if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=ii;b.child=e;return c}b.memoizedState=null;return b.child=Xg(b,a,e.children,c)}
function ki(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);pg(a.return,b)}function li(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailExpiration:0,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f)}
function mi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&ki(a,c);else if(19===a.tag)ki(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(M,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===hh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);li(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===hh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}li(b,!0,c,null,f,b.lastEffect);break;case "together":li(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function $h(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Bg(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(u(153));if(null!==b.child){a=b.child;c=Sg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Sg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}var ni,oi,pi,qi;
ni=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};oi=function(){};
pi=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;ch($g.current);a=null;switch(c){case "input":f=zb(g,f);d=zb(g,d);a=[];break;case "option":f=Gb(g,f);d=Gb(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=Ib(g,f);d=Ib(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=sd)}od(c,d);var h,k;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===
h)for(k in g=f[h],g)g.hasOwnProperty(k)&&(c||(c={}),c[k]="");else"dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(va.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var l=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&l!==g&&(null!=l||null!=g))if("style"===h)if(g){for(k in g)!g.hasOwnProperty(k)||l&&l.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in l)l.hasOwnProperty(k)&&g[k]!==l[k]&&(c||(c={}),
c[k]=l[k])}else c||(a||(a=[]),a.push(h,c)),c=l;else"dangerouslySetInnerHTML"===h?(l=l?l.__html:void 0,g=g?g.__html:void 0,null!=l&&g!==l&&(a=a||[]).push(h,l)):"children"===h?g===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(h,""+l):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(va.hasOwnProperty(h)?(null!=l&&rd(e,h),a||g===l||(a=[])):(a=a||[]).push(h,l))}c&&(a=a||[]).push("style",c);e=a;if(b.updateQueue=e)b.effectTag|=4}};
qi=function(a,b,c,d){c!==d&&(b.effectTag|=4)};function ri(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function si(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return L(b.type)&&Df(),null;case 3:return eh(),H(K),H(J),c=b.stateNode,c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),null!==a&&null!==a.child||!Wh(b)||(b.effectTag|=4),oi(b),null;case 5:gh(b);c=ch(bh.current);var e=b.type;if(null!==a&&null!=b.stateNode)pi(a,b,e,d,c),a.ref!==b.ref&&(b.effectTag|=128);else{if(!d){if(null===b.stateNode)throw Error(u(166));
return null}a=ch($g.current);if(Wh(b)){d=b.stateNode;e=b.type;var f=b.memoizedProps;d[Md]=b;d[Nd]=f;switch(e){case "iframe":case "object":case "embed":F("load",d);break;case "video":case "audio":for(a=0;a<ac.length;a++)F(ac[a],d);break;case "source":F("error",d);break;case "img":case "image":case "link":F("error",d);F("load",d);break;case "form":F("reset",d);F("submit",d);break;case "details":F("toggle",d);break;case "input":Ab(d,f);F("invalid",d);rd(c,"onChange");break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};F("invalid",d);rd(c,"onChange");break;case "textarea":Jb(d,f),F("invalid",d),rd(c,"onChange")}od(e,f);a=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(a=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(a=["children",""+h]):va.hasOwnProperty(g)&&null!=h&&rd(c,g)}switch(e){case "input":xb(d);Eb(d,f,!0);break;case "textarea":xb(d);Lb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&
(d.onclick=sd)}c=a;b.updateQueue=c;null!==c&&(b.effectTag|=4)}else{g=9===c.nodeType?c:c.ownerDocument;a===qd&&(a=Nb(e));a===qd?"script"===e?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(e,{is:d.is}):(a=g.createElement(e),"select"===e&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,e);a[Md]=b;a[Nd]=d;ni(a,b,!1,!1);b.stateNode=a;g=pd(e,d);switch(e){case "iframe":case "object":case "embed":F("load",
a);h=d;break;case "video":case "audio":for(h=0;h<ac.length;h++)F(ac[h],a);h=d;break;case "source":F("error",a);h=d;break;case "img":case "image":case "link":F("error",a);F("load",a);h=d;break;case "form":F("reset",a);F("submit",a);h=d;break;case "details":F("toggle",a);h=d;break;case "input":Ab(a,d);h=zb(a,d);F("invalid",a);rd(c,"onChange");break;case "option":h=Gb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};h=n({},d,{value:void 0});F("invalid",a);rd(c,"onChange");break;case "textarea":Jb(a,
d);h=Ib(a,d);F("invalid",a);rd(c,"onChange");break;default:h=d}od(e,h);var k=h;for(f in k)if(k.hasOwnProperty(f)){var l=k[f];"style"===f?md(a,l):"dangerouslySetInnerHTML"===f?(l=l?l.__html:void 0,null!=l&&Qb(a,l)):"children"===f?"string"===typeof l?("textarea"!==e||""!==l)&&Rb(a,l):"number"===typeof l&&Rb(a,""+l):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(va.hasOwnProperty(f)?null!=l&&rd(c,f):null!=l&&Xa(a,f,l,g))}switch(e){case "input":xb(a);Eb(a,d,!1);
break;case "textarea":xb(a);Lb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+rb(d.value));break;case "select":a.multiple=!!d.multiple;c=d.value;null!=c?Hb(a,!!d.multiple,c,!1):null!=d.defaultValue&&Hb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof h.onClick&&(a.onclick=sd)}Fd(e,d)&&(b.effectTag|=4)}null!==b.ref&&(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)qi(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(u(166));
c=ch(bh.current);ch($g.current);Wh(b)?(c=b.stateNode,d=b.memoizedProps,c[Md]=b,c.nodeValue!==d&&(b.effectTag|=4)):(c=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),c[Md]=b,b.stateNode=c)}return null;case 13:H(M);d=b.memoizedState;if(0!==(b.effectTag&64))return b.expirationTime=c,b;c=null!==d;d=!1;null===a?void 0!==b.memoizedProps.fallback&&Wh(b):(e=a.memoizedState,d=null!==e,c||null===e||(e=a.child.sibling,null!==e&&(f=b.firstEffect,null!==f?(b.firstEffect=e,e.nextEffect=f):(b.firstEffect=b.lastEffect=
e,e.nextEffect=null),e.effectTag=8)));if(c&&!d&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M.current&1))S===ti&&(S=ui);else{if(S===ti||S===ui)S=vi;0!==wi&&null!==T&&(xi(T,U),yi(T,wi))}if(c||d)b.effectTag|=4;return null;case 4:return eh(),oi(b),null;case 10:return og(b),null;case 17:return L(b.type)&&Df(),null;case 19:H(M);d=b.memoizedState;if(null===d)return null;e=0!==(b.effectTag&64);f=d.rendering;if(null===f)if(e)ri(d,!1);else{if(S!==ti||null!==a&&0!==(a.effectTag&
64))for(f=b.child;null!==f;){a=hh(f);if(null!==a){b.effectTag|=64;ri(d,!1);e=a.updateQueue;null!==e&&(b.updateQueue=e,b.effectTag|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;for(d=b.child;null!==d;)e=d,f=c,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,a=e.alternate,null===a?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=a.childExpirationTime,
e.expirationTime=a.expirationTime,e.child=a.child,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,f=a.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),d=d.sibling;I(M,M.current&1|2);return b.child}f=f.sibling}}else{if(!e)if(a=hh(f),null!==a){if(b.effectTag|=64,e=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.effectTag|=4),ri(d,!0),null===d.tail&&"hidden"===d.tailMode&&!f.alternate)return b=
b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*$f()-d.renderingStartTime>d.tailExpiration&&1<c&&(b.effectTag|=64,e=!0,ri(d,!1),b.expirationTime=b.childExpirationTime=c-1);d.isBackwards?(f.sibling=b.child,b.child=f):(c=d.last,null!==c?c.sibling=f:b.child=f,d.last=f)}return null!==d.tail?(0===d.tailExpiration&&(d.tailExpiration=$f()+500),c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=$f(),c.sibling=null,b=M.current,I(M,e?b&1|2:b&1),c):null}throw Error(u(156,
b.tag));}function zi(a){switch(a.tag){case 1:L(a.type)&&Df();var b=a.effectTag;return b&4096?(a.effectTag=b&-4097|64,a):null;case 3:eh();H(K);H(J);b=a.effectTag;if(0!==(b&64))throw Error(u(285));a.effectTag=b&-4097|64;return a;case 5:return gh(a),null;case 13:return H(M),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return H(M),null;case 4:return eh(),null;case 10:return og(a),null;default:return null}}function Ai(a,b){return{value:a,source:b,stack:qb(b)}}
var Bi="function"===typeof WeakSet?WeakSet:Set;function Ci(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=qb(c));null!==c&&pb(c.type);b=b.value;null!==a&&1===a.tag&&pb(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Di(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Ei(a,c)}}function Fi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Ei(a,c)}else b.current=null}
function Gi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:ig(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(u(163));}
function Hi(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.destroy;c.destroy=void 0;void 0!==d&&d()}c=c.next}while(c!==b)}}function Ii(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}
function Ji(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:Ii(3,c);return;case 1:a=c.stateNode;if(c.effectTag&4)if(null===b)a.componentDidMount();else{var d=c.elementType===c.type?b.memoizedProps:ig(c.type,b.memoizedProps);a.componentDidUpdate(d,b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}b=c.updateQueue;null!==b&&Cg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Cg(c,b,a)}return;
case 5:a=c.stateNode;null===b&&c.effectTag&4&&Fd(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Vc(c))));return;case 19:case 17:case 20:case 21:return}throw Error(u(163));}
function Ki(a,b,c){"function"===typeof Li&&Li(b);switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;cg(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c()}catch(h){Ei(g,h)}}a=a.next}while(a!==d)})}break;case 1:Fi(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&Di(b,c);break;case 5:Fi(b);break;case 4:Mi(a,b,c)}}
function Ni(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;a.stateNode=null;null!==b&&Ni(b)}function Oi(a){return 5===a.tag||3===a.tag||4===a.tag}
function Pi(a){a:{for(var b=a.return;null!==b;){if(Oi(b)){var c=b;break a}b=b.return}throw Error(u(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(u(161));}c.effectTag&16&&(Rb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Oi(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}d?Qi(a,c,b):Ri(a,c,b)}
function Qi(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=sd));else if(4!==d&&(a=a.child,null!==a))for(Qi(a,b,c),a=a.sibling;null!==a;)Qi(a,b,c),a=a.sibling}
function Ri(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Ri(a,b,c),a=a.sibling;null!==a;)Ri(a,b,c),a=a.sibling}
function Mi(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(u(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag){a:for(var h=a,k=d,l=c,m=k;;)if(Ki(h,m,l),null!==m.child&&4!==m.tag)m.child.return=m,m=m.child;else{if(m===k)break a;for(;null===m.sibling;){if(null===m.return||m.return===k)break a;m=m.return}m.sibling.return=m.return;m=m.sibling}g?(h=
f,k=d.stateNode,8===h.nodeType?h.parentNode.removeChild(k):h.removeChild(k)):f.removeChild(d.stateNode)}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Ki(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}
function Si(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:Hi(3,b);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Nd]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Bb(c,d);pd(a,e);b=pd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?md(c,h):"dangerouslySetInnerHTML"===g?Qb(c,h):"children"===g?Rb(c,h):Xa(c,g,h,b)}switch(a){case "input":Cb(c,d);break;
case "textarea":Kb(c,d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?Hb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?Hb(c,!!d.multiple,d.defaultValue,!0):Hb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(u(162));b.stateNode.nodeValue=b.memoizedProps;return;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,Vc(b.containerInfo));return;case 12:return;case 13:c=b;null===b.memoizedState?
d=!1:(d=!0,c=b.child,Ti=$f());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=ld("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=
f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}Ui(b);return;case 19:Ui(b);return;case 17:return}throw Error(u(163));}function Ui(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Bi);b.forEach(function(b){var d=Vi.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
var Wi="function"===typeof WeakMap?WeakMap:Map;function Xi(a,b,c){c=wg(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Yi||(Yi=!0,Zi=d);Ci(a,b)};return c}
function $i(a,b,c){c=wg(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ci(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===aj?aj=new Set([this]):aj.add(this),Ci(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
var bj=Math.ceil,cj=Wa.ReactCurrentDispatcher,dj=Wa.ReactCurrentOwner,V=0,ej=8,fj=16,gj=32,ti=0,hj=1,ij=2,ui=3,vi=4,jj=5,W=V,T=null,X=null,U=0,S=ti,kj=null,lj=1073741823,mj=1073741823,nj=null,wi=0,oj=!1,Ti=0,pj=500,Y=null,Yi=!1,Zi=null,aj=null,qj=!1,rj=null,sj=90,tj=null,uj=0,vj=null,wj=0;function Gg(){return(W&(fj|gj))!==V?1073741821-($f()/10|0):0!==wj?wj:wj=1073741821-($f()/10|0)}
function Hg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=ag();if(0===(b&4))return 99===d?1073741823:1073741822;if((W&fj)!==V)return U;if(null!==c)a=hg(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=hg(a,150,100);break;case 97:case 96:a=hg(a,5E3,250);break;case 95:a=2;break;default:throw Error(u(326));}null!==T&&a===U&&--a;return a}
function Ig(a,b){if(50<uj)throw uj=0,vj=null,Error(u(185));a=xj(a,b);if(null!==a){var c=ag();1073741823===b?(W&ej)!==V&&(W&(fj|gj))===V?yj(a):(Z(a),W===V&&gg()):Z(a);(W&4)===V||98!==c&&99!==c||(null===tj?tj=new Map([[a,b]]):(c=tj.get(a),(void 0===c||c>b)&&tj.set(a,b)))}}
function xj(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(T===e&&(Bg(b),S===vi&&xi(e,U)),yi(e,b));return e}
function zj(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Aj(a,b))return b;var c=a.lastPingedTime;a=a.nextKnownPendingLevel;a=c>a?c:a;return 2>=a&&b!==a?0:a}
function Z(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=eg(yj.bind(null,a));else{var b=zj(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else{var d=Gg();1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Tf&&Kf(c)}a.callbackExpirationTime=
b;a.callbackPriority=d;b=1073741823===b?eg(yj.bind(null,a)):dg(d,Bj.bind(null,a),{timeout:10*(1073741821-b)-$f()});a.callbackNode=b}}}
function Bj(a,b){wj=0;if(b)return b=Gg(),Cj(a,b),Z(a),null;var c=zj(a);if(0!==c){b=a.callbackNode;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&c===U||Ej(a,c);if(null!==X){var d=W;W|=fj;var e=Fj();do try{Gj();break}catch(h){Hj(a,h)}while(1);ng();W=d;cj.current=e;if(S===hj)throw b=kj,Ej(a,c),xi(a,c),Z(a),b;if(null===X)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=S,T=null,d){case ti:case hj:throw Error(u(345));case ij:Cj(a,2<c?2:c);break;case ui:xi(a,c);d=a.lastSuspendedTime;
c===d&&(a.nextKnownPendingLevel=Ij(e));if(1073741823===lj&&(e=Ti+pj-$f(),10<e)){if(oj){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=c;Ej(a,c);break}}f=zj(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=Hd(Jj.bind(null,a),e);break}Jj(a);break;case vi:xi(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Ij(e));if(oj&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;Ej(a,c);break}e=zj(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=
d;break}1073741823!==mj?d=10*(1073741821-mj)-$f():1073741823===lj?d=0:(d=10*(1073741821-lj)-5E3,e=$f(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*bj(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=Hd(Jj.bind(null,a),d);break}Jj(a);break;case jj:if(1073741823!==lj&&null!==nj){f=lj;var g=nj;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=$f()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){xi(a,c);a.timeoutHandle=
Hd(Jj.bind(null,a),d);break}}Jj(a);break;default:throw Error(u(329));}Z(a);if(a.callbackNode===b)return Bj.bind(null,a)}}return null}
function yj(a){var b=a.lastExpiredTime;b=0!==b?b:1073741823;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&b===U||Ej(a,b);if(null!==X){var c=W;W|=fj;var d=Fj();do try{Kj();break}catch(e){Hj(a,e)}while(1);ng();W=c;cj.current=d;if(S===hj)throw c=kj,Ej(a,b),xi(a,b),Z(a),c;if(null!==X)throw Error(u(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;T=null;Jj(a);Z(a)}return null}function Lj(){if(null!==tj){var a=tj;tj=null;a.forEach(function(a,c){Cj(c,a);Z(c)});gg()}}
function Mj(a,b){var c=W;W|=1;try{return a(b)}finally{W=c,W===V&&gg()}}function Nj(a,b){var c=W;W&=-2;W|=ej;try{return a(b)}finally{W=c,W===V&&gg()}}
function Ej(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Id(c));if(null!==X)for(c=X.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Df();break;case 3:eh();H(K);H(J);break;case 5:gh(d);break;case 4:eh();break;case 13:H(M);break;case 19:H(M);break;case 10:og(d)}c=c.return}T=a;X=Sg(a.current,null);U=b;S=ti;kj=null;mj=lj=1073741823;nj=null;wi=0;oj=!1}
function Hj(a,b){do{try{ng();jh.current=sh;if(mh)for(var c=N.memoizedState;null!==c;){var d=c.queue;null!==d&&(d.pending=null);c=c.next}lh=0;P=O=N=null;mh=!1;if(null===X||null===X.return)return S=hj,kj=b,X=null;a:{var e=a,f=X.return,g=X,h=b;b=U;g.effectTag|=2048;g.firstEffect=g.lastEffect=null;if(null!==h&&"object"===typeof h&&"function"===typeof h.then){var k=h;if(0===(g.mode&2)){var l=g.alternate;l?(g.updateQueue=l.updateQueue,g.memoizedState=l.memoizedState,g.expirationTime=l.expirationTime):(g.updateQueue=
null,g.memoizedState=null)}var m=0!==(M.current&1),p=f;do{var x;if(x=13===p.tag){var z=p.memoizedState;if(null!==z)x=null!==z.dehydrated?!0:!1;else{var ca=p.memoizedProps;x=void 0===ca.fallback?!1:!0!==ca.unstable_avoidThisFallback?!0:m?!1:!0}}if(x){var D=p.updateQueue;if(null===D){var t=new Set;t.add(k);p.updateQueue=t}else D.add(k);if(0===(p.mode&2)){p.effectTag|=64;g.effectTag&=-2981;if(1===g.tag)if(null===g.alternate)g.tag=17;else{var y=wg(1073741823,null);y.tag=2;xg(g,y)}g.expirationTime=1073741823;
break a}h=void 0;g=b;var A=e.pingCache;null===A?(A=e.pingCache=new Wi,h=new Set,A.set(k,h)):(h=A.get(k),void 0===h&&(h=new Set,A.set(k,h)));if(!h.has(g)){h.add(g);var q=Oj.bind(null,e,k,g);k.then(q,q)}p.effectTag|=4096;p.expirationTime=b;break a}p=p.return}while(null!==p);h=Error((pb(g.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+qb(g))}S!==
jj&&(S=ij);h=Ai(h,g);p=f;do{switch(p.tag){case 3:k=h;p.effectTag|=4096;p.expirationTime=b;var B=Xi(p,k,b);yg(p,B);break a;case 1:k=h;var w=p.type,ub=p.stateNode;if(0===(p.effectTag&64)&&("function"===typeof w.getDerivedStateFromError||null!==ub&&"function"===typeof ub.componentDidCatch&&(null===aj||!aj.has(ub)))){p.effectTag|=4096;p.expirationTime=b;var vb=$i(p,k,b);yg(p,vb);break a}}p=p.return}while(null!==p)}X=Pj(X)}catch(Xc){b=Xc;continue}break}while(1)}
function Fj(){var a=cj.current;cj.current=sh;return null===a?sh:a}function Ag(a,b){a<lj&&2<a&&(lj=a);null!==b&&a<mj&&2<a&&(mj=a,nj=b)}function Bg(a){a>wi&&(wi=a)}function Kj(){for(;null!==X;)X=Qj(X)}function Gj(){for(;null!==X&&!Uf();)X=Qj(X)}function Qj(a){var b=Rj(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=Pj(a));dj.current=null;return b}
function Pj(a){X=a;do{var b=X.alternate;a=X.return;if(0===(X.effectTag&2048)){b=si(b,X,U);if(1===U||1!==X.childExpirationTime){for(var c=0,d=X.child;null!==d;){var e=d.expirationTime,f=d.childExpirationTime;e>c&&(c=e);f>c&&(c=f);d=d.sibling}X.childExpirationTime=c}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=X.firstEffect),null!==X.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=X.firstEffect),a.lastEffect=X.lastEffect),1<X.effectTag&&(null!==
a.lastEffect?a.lastEffect.nextEffect=X:a.firstEffect=X,a.lastEffect=X))}else{b=zi(X);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=2048)}b=X.sibling;if(null!==b)return b;X=a}while(null!==X);S===ti&&(S=jj);return null}function Ij(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function Jj(a){var b=ag();cg(99,Sj.bind(null,a,b));return null}
function Sj(a,b){do Dj();while(null!==rj);if((W&(fj|gj))!==V)throw Error(u(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(u(177));a.callbackNode=null;a.callbackExpirationTime=0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Ij(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=
d-1);d<=a.lastPingedTime&&(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===T&&(X=T=null,U=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=W;W|=gj;dj.current=null;Dd=fd;var g=xd();if(yd(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,
m=k.focusNode;k=k.focusOffset;try{h.nodeType,m.nodeType}catch(wb){h=null;break a}var p=0,x=-1,z=-1,ca=0,D=0,t=g,y=null;b:for(;;){for(var A;;){t!==h||0!==l&&3!==t.nodeType||(x=p+l);t!==m||0!==k&&3!==t.nodeType||(z=p+k);3===t.nodeType&&(p+=t.nodeValue.length);if(null===(A=t.firstChild))break;y=t;t=A}for(;;){if(t===g)break b;y===h&&++ca===l&&(x=p);y===m&&++D===k&&(z=p);if(null!==(A=t.nextSibling))break;t=y;y=t.parentNode}t=A}h=-1===x||-1===z?null:{start:x,end:z}}else h=null}h=h||{start:0,end:0}}else h=
null;Ed={activeElementDetached:null,focusedElem:g,selectionRange:h};fd=!1;Y=e;do try{Tj()}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=e;do try{for(g=a,h=b;null!==Y;){var q=Y.effectTag;q&16&&Rb(Y.stateNode,"");if(q&128){var B=Y.alternate;if(null!==B){var w=B.ref;null!==w&&("function"===typeof w?w(null):w.current=null)}}switch(q&1038){case 2:Pi(Y);Y.effectTag&=-3;break;case 6:Pi(Y);Y.effectTag&=-3;Si(Y.alternate,Y);break;case 1024:Y.effectTag&=-1025;break;case 1028:Y.effectTag&=
-1025;Si(Y.alternate,Y);break;case 4:Si(Y.alternate,Y);break;case 8:l=Y,Mi(g,l,h),Ni(l)}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);w=Ed;B=xd();q=w.focusedElem;h=w.selectionRange;if(B!==q&&q&&q.ownerDocument&&wd(q.ownerDocument.documentElement,q)){null!==h&&yd(q)&&(B=h.start,w=h.end,void 0===w&&(w=B),"selectionStart"in q?(q.selectionStart=B,q.selectionEnd=Math.min(w,q.value.length)):(w=(B=q.ownerDocument||document)&&B.defaultView||window,w.getSelection&&
(w=w.getSelection(),l=q.textContent.length,g=Math.min(h.start,l),h=void 0===h.end?g:Math.min(h.end,l),!w.extend&&g>h&&(l=h,h=g,g=l),l=vd(q,g),m=vd(q,h),l&&m&&(1!==w.rangeCount||w.anchorNode!==l.node||w.anchorOffset!==l.offset||w.focusNode!==m.node||w.focusOffset!==m.offset)&&(B=B.createRange(),B.setStart(l.node,l.offset),w.removeAllRanges(),g>h?(w.addRange(B),w.extend(m.node,m.offset)):(B.setEnd(m.node,m.offset),w.addRange(B))))));B=[];for(w=q;w=w.parentNode;)1===w.nodeType&&B.push({element:w,left:w.scrollLeft,
top:w.scrollTop});"function"===typeof q.focus&&q.focus();for(q=0;q<B.length;q++)w=B[q],w.element.scrollLeft=w.left,w.element.scrollTop=w.top}fd=!!Dd;Ed=Dd=null;a.current=c;Y=e;do try{for(q=a;null!==Y;){var ub=Y.effectTag;ub&36&&Ji(q,Y.alternate,Y);if(ub&128){B=void 0;var vb=Y.ref;if(null!==vb){var Xc=Y.stateNode;switch(Y.tag){case 5:B=Xc;break;default:B=Xc}"function"===typeof vb?vb(B):vb.current=B}}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=
null;Vf();W=f}else a.current=c;if(qj)qj=!1,rj=a,sj=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0===b&&(aj=null);1073741823===b?a===vj?uj++:(uj=0,vj=a):uj=0;"function"===typeof Uj&&Uj(c.stateNode,d);Z(a);if(Yi)throw Yi=!1,a=Zi,Zi=null,a;if((W&ej)!==V)return null;gg();return null}function Tj(){for(;null!==Y;){var a=Y.effectTag;0!==(a&256)&&Gi(Y.alternate,Y);0===(a&512)||qj||(qj=!0,dg(97,function(){Dj();return null}));Y=Y.nextEffect}}
function Dj(){if(90!==sj){var a=97<sj?97:sj;sj=90;return cg(a,Vj)}}function Vj(){if(null===rj)return!1;var a=rj;rj=null;if((W&(fj|gj))!==V)throw Error(u(331));var b=W;W|=gj;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:case 22:Hi(5,c),Ii(5,c)}}catch(d){if(null===a)throw Error(u(330));Ei(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}W=b;gg();return!0}
function Wj(a,b,c){b=Ai(c,b);b=Xi(a,b,1073741823);xg(a,b);a=xj(a,1073741823);null!==a&&Z(a)}function Ei(a,b){if(3===a.tag)Wj(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){Wj(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===aj||!aj.has(d))){a=Ai(b,a);a=$i(c,a,1073741823);xg(c,a);c=xj(c,1073741823);null!==c&&Z(c);break}}c=c.return}}
function Oj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);T===a&&U===c?S===vi||S===ui&&1073741823===lj&&$f()-Ti<pj?Ej(a,U):oj=!0:Aj(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,Z(a)))}function Vi(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=Gg(),b=Hg(b,a,null));a=xj(a,b);null!==a&&Z(a)}var Rj;
Rj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||K.current)rg=!0;else{if(d<c){rg=!1;switch(b.tag){case 3:hi(b);Xh();break;case 5:fh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:L(b.type)&&Gf(b);break;case 4:dh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;e=b.type._context;I(jg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;
if(0!==d&&d>=c)return ji(a,b,c);I(M,M.current&1);b=$h(a,b,c);return null!==b?b.sibling:null}I(M,M.current&1);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return mi(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);I(M,M.current);if(!d)return null}return $h(a,b,c)}rg=!1}}else rg=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Cf(b,J.current);qg(b,c);e=oh(null,
b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(L(d)){var f=!0;Gf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;ug(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Fg(b,d,g,a);e.updater=Jg;b.stateNode=e;e._reactInternalFiber=b;Ng(b,d,a,c);b=gi(null,b,d,!0,f,c)}else b.tag=0,R(null,b,e,c),b=b.child;return b;case 16:a:{e=b.elementType;null!==a&&(a.alternate=
null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;ob(e);if(1!==e._status)throw e._result;e=e._result;b.type=e;f=b.tag=Xj(e);a=ig(e,a);switch(f){case 0:b=di(null,b,e,a,c);break a;case 1:b=fi(null,b,e,a,c);break a;case 11:b=Zh(null,b,e,a,c);break a;case 14:b=ai(null,b,e,ig(e.type,a),d,c);break a}throw Error(u(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),di(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),fi(a,b,d,e,c);
case 3:hi(b);d=b.updateQueue;if(null===a||null===d)throw Error(u(282));d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;vg(a,b);zg(b,d,null,c);d=b.memoizedState.element;if(d===e)Xh(),b=$h(a,b,c);else{if(e=b.stateNode.hydrate)Ph=Jd(b.stateNode.containerInfo.firstChild),Oh=b,e=Qh=!0;if(e)for(c=Yg(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else R(a,b,d,c),Xh();b=b.child}return b;case 5:return fh(b),null===a&&Uh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:
null,g=e.children,Gd(d,e)?g=null:null!==f&&Gd(d,f)&&(b.effectTag|=16),ei(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(R(a,b,g,c),b=b.child),b;case 6:return null===a&&Uh(b),null;case 13:return ji(a,b,c);case 4:return dh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Xg(b,null,d,c):R(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),Zh(a,b,d,e,c);case 7:return R(a,b,b.pendingProps,c),b.child;case 8:return R(a,
b,b.pendingProps.children,c),b.child;case 12:return R(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(jg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=$e(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!K.current){b=$h(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==
k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=wg(c,null),l.tag=2,xg(h,l));h.expirationTime<c&&(h.expirationTime=c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);pg(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=
g}R(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,qg(b,c),e=sg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,R(a,b,d,c),b.child;case 14:return e=b.type,f=ig(e,b.pendingProps),f=ig(e.type,f),ai(a,b,e,f,d,c);case 15:return ci(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,L(d)?(a=!0,Gf(b)):a=!1,qg(b,c),Lg(b,d,e),Ng(b,d,e,c),gi(null,
b,d,!0,a,c);case 19:return mi(a,b,c)}throw Error(u(156,b.tag));};var Uj=null,Li=null;function Yj(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Uj=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};Li=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
function Zj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Sh(a,b,c,d){return new Zj(a,b,c,d)}
function bi(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Xj(a){if("function"===typeof a)return bi(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gb)return 11;if(a===jb)return 14}return 2}
function Sg(a,b){var c=a.alternate;null===c?(c=Sh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Ug(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bi(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ab:return Wg(c.children,e,f,b);case fb:g=8;e|=7;break;case bb:g=8;e|=1;break;case cb:return a=Sh(12,c,b,e|8),a.elementType=cb,a.type=cb,a.expirationTime=f,a;case hb:return a=Sh(13,c,b,e),a.type=hb,a.elementType=hb,a.expirationTime=f,a;case ib:return a=Sh(19,c,b,e),a.elementType=ib,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case db:g=
10;break a;case eb:g=9;break a;case gb:g=11;break a;case jb:g=14;break a;case kb:g=16;d=null;break a;case lb:g=22;break a}throw Error(u(130,null==a?a:typeof a,""));}b=Sh(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Wg(a,b,c,d){a=Sh(7,a,d,b);a.expirationTime=c;return a}function Tg(a,b,c){a=Sh(6,a,null,b);a.expirationTime=c;return a}
function Vg(a,b,c){b=Sh(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function ak(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}
function Aj(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function xi(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0)}
function yi(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b))}function Cj(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b}
function bk(a,b,c,d){var e=b.current,f=Gg(),g=Dg.suspense;f=Hg(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(dc(c)!==c||1!==c.tag)throw Error(u(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(L(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(u(171));}if(1===c.tag){var k=c.type;if(L(k)){c=Ff(c,k,h);break a}}c=h}else c=Af;null===b.context?b.context=c:b.pendingContext=c;b=wg(f,g);b.payload={element:a};d=void 0===
d?null:d;null!==d&&(b.callback=d);xg(e,b);Ig(e,f);return f}function ck(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function dk(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b)}function ek(a,b){dk(a,b);(a=a.alternate)&&dk(a,b)}
function fk(a,b,c){c=null!=c&&!0===c.hydrate;var d=new ak(a,b,c),e=Sh(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;ug(e);a[Od]=d.current;c&&0!==b&&Jc(a,9===a.nodeType?a:a.ownerDocument);this._internalRoot=d}fk.prototype.render=function(a){bk(a,this._internalRoot,null,null)};fk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;bk(null,a,null,function(){b[Od]=null})};
function gk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function hk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new fk(a,0,b?{hydrate:!0}:void 0)}
function ik(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=ck(g);h.call(a)}}bk(b,g,a,e)}else{f=c._reactRootContainer=hk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=ck(g);k.call(a)}}Nj(function(){bk(b,g,a,e)})}return ck(g)}function jk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:$a,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
wc=function(a){if(13===a.tag){var b=hg(Gg(),150,100);Ig(a,b);ek(a,b)}};xc=function(a){13===a.tag&&(Ig(a,3),ek(a,3))};yc=function(a){if(13===a.tag){var b=Gg();b=Hg(b,a,null);Ig(a,b);ek(a,b)}};
za=function(a,b,c){switch(b){case "input":Cb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Qd(d);if(!e)throw Error(u(90));yb(d);Cb(d,e)}}}break;case "textarea":Kb(a,c);break;case "select":b=c.value,null!=b&&Hb(a,!!c.multiple,b,!1)}};Fa=Mj;
Ga=function(a,b,c,d,e){var f=W;W|=4;try{return cg(98,a.bind(null,b,c,d,e))}finally{W=f,W===V&&gg()}};Ha=function(){(W&(1|fj|gj))===V&&(Lj(),Dj())};Ia=function(a,b){var c=W;W|=2;try{return a(b)}finally{W=c,W===V&&gg()}};function kk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!gk(b))throw Error(u(200));return jk(a,b,null,c)}var lk={Events:[Nc,Pd,Qd,xa,ta,Xd,function(a){jc(a,Wd)},Da,Ea,id,mc,Dj,{current:!1}]};
(function(a){var b=a.findFiberByHostInstance;return Yj(n({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wa.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hc(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:tc,bundleType:0,version:"16.13.1",
rendererPackageName:"react-dom"});exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lk;exports.createPortal=kk;exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(u(188));throw Error(u(268,Object.keys(a)));}a=hc(b);a=null===a?null:a.stateNode;return a};
exports.flushSync=function(a,b){if((W&(fj|gj))!==V)throw Error(u(187));var c=W;W|=1;try{return cg(99,a.bind(null,b))}finally{W=c,gg()}};exports.hydrate=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!0,c)};exports.render=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!1,c)};
exports.unmountComponentAtNode=function(a){if(!gk(a))throw Error(u(40));return a._reactRootContainer?(Nj(function(){ik(null,null,a,!1,function(){a._reactRootContainer=null;a[Od]=null})}),!0):!1};exports.unstable_batchedUpdates=Mj;exports.unstable_createPortal=function(a,b){return kk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!gk(c))throw Error(u(200));if(null==a||void 0===a._reactInternalFiber)throw Error(u(38));return ik(a,b,c,!1,d)};exports.version="16.13.1";

},{"react":"n8MK","object-assign":"J4Nk","scheduler":"MDSO"}],"NKHc":[function(require,module,exports) {
'use strict';

function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
    return;
  }

  if ("production" !== 'production') {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }

  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if ("production" === 'production') {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = require('./cjs/react-dom.production.min.js');
} else {
  module.exports = require('./cjs/react-dom.development.js');
}
},{"./cjs/react-dom.production.min.js":"i17t"}],"SSrD":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.castDraft = T;
exports.castImmutable = F;
exports.enableAllPlugins = N;
exports.enableES5 = k;
exports.enableMapSet = D;
exports.enablePatches = R;
exports.isDraft = t;
exports.isDraftable = r;
exports.original = e;
exports.setUseProxies = exports.setAutoFreeze = exports.produceWithPatches = exports.produce = exports.nothing = exports.immerable = exports.finishDraft = exports.createDraft = exports.applyPatches = exports.Immer = exports.default = void 0;

function n(n) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), e = 1; e < t; e++) r[e - 1] = arguments[e];

  if ("production" !== "production") {
    var i = H[n],
        o = i ? "function" == typeof i ? i.apply(null, r) : i : "unknown error nr: " + n;
    throw Error("[Immer] " + o);
  }

  throw Error("[Immer] minified error nr: " + n + (r.length ? " " + r.join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}

function t(n) {
  return !!n && !!n[B];
}

function r(n) {
  return !!n && (function (n) {
    if (!n || "object" != typeof n) return !1;
    var t = Object.getPrototypeOf(n);
    return !t || t === Object.prototype;
  }(n) || Array.isArray(n) || !!n[q] || !!n.constructor[q] || c(n) || s(n));
}

function e(n) {
  if (n && n[B]) return n[B].t;
}

function i(n, t) {
  0 === o(n) ? L(n).forEach(function (r) {
    return t(r, n[r], n);
  }) : n.forEach(function (r, e) {
    return t(e, r, n);
  });
}

function o(n) {
  var t = n[B];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(n) ? 1 : c(n) ? 2 : s(n) ? 3 : 0;
}

function u(n, t) {
  return 2 === o(n) ? n.has(t) : Object.prototype.hasOwnProperty.call(n, t);
}

function a(n, t) {
  return 2 === o(n) ? n.get(t) : n[t];
}

function f(n, t) {
  return n === t ? 0 !== n || 1 / n == 1 / t : n != n && t != t;
}

function c(n) {
  return $ && n instanceof Map;
}

function s(n) {
  return U && n instanceof Set;
}

function v(n) {
  return n.o || n.t;
}

function p(t, r) {
  if (void 0 === r && (r = !1), Array.isArray(t)) return t.slice();
  var e = Object.create(Object.getPrototypeOf(t));
  return i(t, function (i) {
    if (i !== B) {
      var o = Object.getOwnPropertyDescriptor(t, i),
          u = o.value;
      o.get && (r || n(1), u = o.get.call(t)), o.enumerable ? e[i] = u : Object.defineProperty(e, i, {
        value: u,
        writable: !0,
        configurable: !0
      });
    }
  }), e;
}

function d(n, e) {
  t(n) || Object.isFrozen(n) || !r(n) || (o(n) > 1 && (n.set = n.add = n.clear = n.delete = l), Object.freeze(n), e && i(n, function (n, t) {
    return d(t, !0);
  }));
}

function l() {
  n(2);
}

function h(t) {
  var r = Q[t];
  return r || n("production" !== "production" ? 18 : 19, t), r;
}

function y(n, t) {
  Q[n] = t;
}

function m() {
  return "production" === "production" || J || n(0), J;
}

function b(n, t) {
  t && (h("Patches"), n.u = [], n.s = [], n.v = t);
}

function _(n) {
  j(n), n.p.forEach(g), n.p = null;
}

function j(n) {
  n === J && (J = n.l);
}

function O(n) {
  return J = {
    p: [],
    l: J,
    h: n,
    m: !0,
    _: 0
  };
}

function g(n) {
  var t = n[B];
  0 === t.i || 1 === t.i ? t.j() : t.O = !0;
}

function w(t, e) {
  e._ = e.p.length;
  var i = e.p[0],
      o = void 0 !== t && t !== i;
  return e.h.g || h("ES5").S(e, t, o), o ? (i[B].P && (_(e), n(4)), r(t) && (t = S(e, t), e.l || M(e, t)), e.u && h("Patches").M(i[B], t, e.u, e.s)) : t = S(e, i, []), _(e), e.u && e.v(e.u, e.s), t !== X ? t : void 0;
}

function S(n, t, r) {
  if (Object.isFrozen(t)) return t;
  var e = t[B];
  if (!e) return i(t, function (i, o) {
    return P(n, e, t, i, o, r);
  }), t;
  if (e.A !== n) return t;
  if (!e.P) return M(n, e.t, !0), e.t;

  if (!e.I) {
    e.I = !0, e.A._--;
    var o = 4 === e.i || 5 === e.i ? e.o = p(e.k, !0) : e.o;
    i(o, function (t, i) {
      return P(n, e, o, t, i, r);
    }), M(n, o, !1), r && n.u && h("Patches").R(e, r, n.u, n.s);
  }

  return e.o;
}

function P(e, i, c, s, v, p) {
  if ("production" !== "production" && v === c && n(5), t(v)) {
    var d = S(e, v, p && i && 3 !== i.i && !u(i.D, s) ? p.concat(s) : void 0);
    if (h = s, y = d, 2 === (m = o(l = c)) ? l.set(h, y) : 3 === m ? (l.delete(h), l.add(y)) : l[h] = y, !t(d)) return;
    e.m = !1;
  }

  var l, h, y, m;

  if ((!i || !f(v, a(i.t, s))) && r(v)) {
    if (!e.h.N && e._ < 1) return;
    S(e, v), i && i.A.l || M(e, v);
  }
}

function M(n, t, r) {
  void 0 === r && (r = !1), n.h.N && n.m && d(t, r);
}

function A(n, t) {
  var r = n[B],
      e = Reflect.getOwnPropertyDescriptor(r ? v(r) : n, t);
  return e && e.value;
}

function z(n) {
  if (!n.P) {
    if (n.P = !0, 0 === n.i || 1 === n.i) {
      var t = n.o = p(n.t);
      i(n.p, function (n, r) {
        t[n] = r;
      }), n.p = void 0;
    }

    n.l && z(n.l);
  }
}

function x(n) {
  n.o || (n.o = p(n.t));
}

function I(n, t, r) {
  var e = c(t) ? h("MapSet").T(t, r) : s(t) ? h("MapSet").F(t, r) : n.g ? function (n, t) {
    var r = Array.isArray(n),
        e = {
      i: r ? 1 : 0,
      A: t ? t.A : m(),
      P: !1,
      I: !1,
      D: {},
      l: t,
      t: n,
      k: null,
      p: {},
      o: null,
      j: null,
      C: !1
    },
        i = e,
        o = V;
    r && (i = [e], o = Y);
    var u = Proxy.revocable(i, o),
        a = u.revoke,
        f = u.proxy;
    return e.k = f, e.j = a, f;
  }(t, r) : h("ES5").J(t, r);
  return (r ? r.A : m()).p.push(e), e;
}

function E(n, t) {
  n.g ? z(t) : h("ES5").K(t);
}

function k() {
  function e(n, t) {
    var r = n[B];

    if (r && !r.$) {
      r.$ = !0;
      var e = n[t];
      return r.$ = !1, e;
    }

    return n[t];
  }

  function o(n) {
    n.P || (n.P = !0, n.l && o(n.l));
  }

  function a(n) {
    n.o || (n.o = c(n.t));
  }

  function c(n) {
    var t = n && n[B];

    if (t) {
      t.$ = !0;
      var r = p(t.k, !0);
      return t.$ = !1, r;
    }

    return p(n);
  }

  function s(n) {
    for (var t = n.length - 1; t >= 0; t--) {
      var r = n[t][B];
      if (!r.P) switch (r.i) {
        case 5:
          l(r) && o(r);
          break;

        case 4:
          d(r) && o(r);
      }
    }
  }

  function d(n) {
    for (var t = n.t, r = n.k, e = Object.keys(r), i = e.length - 1; i >= 0; i--) {
      var o = e[i],
          a = t[o];
      if (void 0 === a && !u(t, o)) return !0;
      var c = r[o],
          s = c && c[B];
      if (s ? s.t !== a : !f(c, a)) return !0;
    }

    return e.length !== Object.keys(t).length;
  }

  function l(n) {
    var t = n.k;
    if (t.length !== n.t.length) return !0;
    var r = Object.getOwnPropertyDescriptor(t, t.length - 1);
    return !(!r || r.get);
  }

  function h(t) {
    t.O && n(3, JSON.stringify(v(t)));
  }

  var b = {};
  y("ES5", {
    J: function (n, t) {
      var u = Array.isArray(n),
          s = c(n);
      i(s, function (t) {
        !function (n, t, i) {
          var u = b[t];
          u ? u.enumerable = i : b[t] = u = {
            enumerable: i,
            get: function () {
              return function (n, t) {
                h(n);
                var i = e(v(n), t);
                return n.$ ? i : i === e(n.t, t) && r(i) ? (a(n), n.o[t] = I(n.A.h, i, n)) : i;
              }(this[B], t);
            },
            set: function (n) {
              !function (n, t, r) {
                if (h(n), n.D[t] = !0, !n.P) {
                  if (f(r, e(v(n), t))) return;
                  o(n), a(n);
                }

                n.o[t] = r;
              }(this[B], t, n);
            }
          }, Object.defineProperty(n, t, u);
        }(s, t, u || function (n, t) {
          var r = Object.getOwnPropertyDescriptor(n, t);
          return !(!r || !r.enumerable);
        }(n, t));
      });
      var p = {
        i: u ? 5 : 4,
        A: t ? t.A : m(),
        P: !1,
        $: !1,
        I: !1,
        D: {},
        l: t,
        t: n,
        k: s,
        o: null,
        O: !1,
        C: !1
      };
      return Object.defineProperty(s, B, {
        value: p,
        writable: !0
      }), s;
    },
    K: o,
    S: function (n, r, e) {
      n.p.forEach(function (n) {
        n[B].$ = !0;
      }), e ? t(r) && r[B].A === n && s(n.p) : (n.u && function n(t) {
        if (t && "object" == typeof t) {
          var r = t[B];

          if (r) {
            var e = r.t,
                a = r.k,
                f = r.D,
                c = r.i;
            if (4 === c) i(a, function (t) {
              t !== B && (void 0 !== e[t] || u(e, t) ? f[t] || n(a[t]) : (f[t] = !0, o(r)));
            }), i(e, function (n) {
              void 0 !== a[n] || u(a, n) || (f[n] = !1, o(r));
            });else if (5 === c) {
              if (l(r) && (o(r), f.length = !0), a.length < e.length) for (var s = a.length; s < e.length; s++) f[s] = !1;else for (var v = e.length; v < a.length; v++) f[v] = !0;

              for (var p = Math.min(a.length, e.length), d = 0; d < p; d++) void 0 === f[d] && n(a[d]);
            }
          }
        }
      }(n.p[0]), s(n.p));
    }
  });
}

function R() {
  function t(n) {
    if (!n || "object" != typeof n) return n;
    if (Array.isArray(n)) return n.map(t);
    if (c(n)) return new Map(Array.from(n.entries()).map(function (n) {
      return [n[0], t(n[1])];
    }));
    if (s(n)) return new Set(Array.from(n).map(t));
    var r = Object.create(Object.getPrototypeOf(n));

    for (var e in n) r[e] = t(n[e]);

    return r;
  }

  var r = "add";
  y("Patches", {
    U: function (e, i) {
      return i.forEach(function (i) {
        for (var u = i.path, f = i.op, c = e, s = 0; s < u.length - 1; s++) "object" != typeof (c = a(c, u[s])) && n(15, u.join("/"));

        var v = o(c),
            p = t(i.value),
            d = u[u.length - 1];

        switch (f) {
          case "replace":
            switch (v) {
              case 2:
                return c.set(d, p);

              case 3:
                n(16);

              default:
                return c[d] = p;
            }

          case r:
            switch (v) {
              case 1:
                return c.splice(d, 0, p);

              case 2:
                return c.set(d, p);

              case 3:
                return c.add(p);

              default:
                return c[d] = p;
            }

          case "remove":
            switch (v) {
              case 1:
                return c.splice(d, 1);

              case 2:
                return c.delete(d);

              case 3:
                return c.delete(i.value);

              default:
                return delete c[d];
            }

          default:
            n(17, f);
        }
      }), e;
    },
    R: function (n, t, e, o) {
      switch (n.i) {
        case 0:
        case 4:
        case 2:
          return function (n, t, e, o) {
            var f = n.t,
                c = n.o;
            i(n.D, function (n, i) {
              var s = a(f, n),
                  v = a(c, n),
                  p = i ? u(f, n) ? "replace" : r : "remove";

              if (s !== v || "replace" !== p) {
                var d = t.concat(n);
                e.push("remove" === p ? {
                  op: p,
                  path: d
                } : {
                  op: p,
                  path: d,
                  value: v
                }), o.push(p === r ? {
                  op: "remove",
                  path: d
                } : "remove" === p ? {
                  op: r,
                  path: d,
                  value: s
                } : {
                  op: "replace",
                  path: d,
                  value: s
                });
              }
            });
          }(n, t, e, o);

        case 5:
        case 1:
          return function (n, t, e, i) {
            var o = n.t,
                u = n.D,
                a = n.o;

            if (a.length < o.length) {
              var f = [a, o];
              o = f[0], a = f[1];
              var c = [i, e];
              e = c[0], i = c[1];
            }

            for (var s = a.length - o.length, v = 0; o[v] === a[v] && v < o.length;) ++v;

            for (var p = o.length; p > v && o[p - 1] === a[p + s - 1];) --p;

            for (var d = v; d < p; ++d) if (u[d] && a[d] !== o[d]) {
              var l = t.concat([d]);
              e.push({
                op: "replace",
                path: l,
                value: a[d]
              }), i.push({
                op: "replace",
                path: l,
                value: o[d]
              });
            }

            for (var h = e.length, y = p + s - 1; y >= p; --y) {
              var m = t.concat([y]);
              e[h + y - p] = {
                op: r,
                path: m,
                value: a[y]
              }, i.push({
                op: "remove",
                path: m
              });
            }
          }(n, t, e, o);

        case 3:
          return function (n, t, e, i) {
            var o = n.t,
                u = n.o,
                a = 0;
            o.forEach(function (n) {
              if (!u.has(n)) {
                var o = t.concat([a]);
                e.push({
                  op: "remove",
                  path: o,
                  value: n
                }), i.unshift({
                  op: r,
                  path: o,
                  value: n
                });
              }

              a++;
            }), a = 0, u.forEach(function (n) {
              if (!o.has(n)) {
                var u = t.concat([a]);
                e.push({
                  op: r,
                  path: u,
                  value: n
                }), i.unshift({
                  op: "remove",
                  path: u,
                  value: n
                });
              }

              a++;
            });
          }(n, t, e, o);
      }
    },
    M: function (n, t, r, e) {
      r.push({
        op: "replace",
        path: [],
        value: t
      }), e.push({
        op: "replace",
        path: [],
        value: n.t
      });
    }
  });
}

function D() {
  function t(n, t) {
    function r() {
      this.constructor = n;
    }

    u(n, t), n.prototype = (r.prototype = t.prototype, new r());
  }

  function e(n) {
    n.o || (n.D = new Map(), n.o = new Map(n.t));
  }

  function i(n) {
    n.o || (n.o = new Set(), n.t.forEach(function (t) {
      if (r(t)) {
        var e = I(n.A.h, t, n);
        n.p.set(t, e), n.o.add(e);
      } else n.o.add(t);
    }));
  }

  function o(t) {
    t.O && n(3, JSON.stringify(v(t)));
  }

  var u = function (n, t) {
    return (u = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (n, t) {
      n.__proto__ = t;
    } || function (n, t) {
      for (var r in t) t.hasOwnProperty(r) && (n[r] = t[r]);
    })(n, t);
  },
      a = function () {
    function n(n, t) {
      return this[B] = {
        i: 2,
        l: t,
        A: t ? t.A : m(),
        P: !1,
        I: !1,
        o: void 0,
        D: void 0,
        t: n,
        k: this,
        C: !1,
        O: !1
      }, this;
    }

    t(n, Map);
    var i = n.prototype;
    return Object.defineProperty(i, "size", {
      get: function () {
        return v(this[B]).size;
      }
    }), i.has = function (n) {
      return v(this[B]).has(n);
    }, i.set = function (n, t) {
      var r = this[B];
      return o(r), v(r).get(n) !== t && (e(r), E(r.A.h, r), r.D.set(n, !0), r.o.set(n, t), r.D.set(n, !0)), this;
    }, i.delete = function (n) {
      if (!this.has(n)) return !1;
      var t = this[B];
      return o(t), e(t), E(t.A.h, t), t.D.set(n, !1), t.o.delete(n), !0;
    }, i.clear = function () {
      var n = this[B];
      return o(n), e(n), E(n.A.h, n), n.D = new Map(), n.o.clear();
    }, i.forEach = function (n, t) {
      var r = this;
      v(this[B]).forEach(function (e, i) {
        n.call(t, r.get(i), i, r);
      });
    }, i.get = function (n) {
      var t = this[B];
      o(t);
      var i = v(t).get(n);
      if (t.I || !r(i)) return i;
      if (i !== t.t.get(n)) return i;
      var u = I(t.A.h, i, t);
      return e(t), t.o.set(n, u), u;
    }, i.keys = function () {
      return v(this[B]).keys();
    }, i.values = function () {
      var n,
          t = this,
          r = this.keys();
      return (n = {})[G] = function () {
        return t.values();
      }, n.next = function () {
        var n = r.next();
        return n.done ? n : {
          done: !1,
          value: t.get(n.value)
        };
      }, n;
    }, i.entries = function () {
      var n,
          t = this,
          r = this.keys();
      return (n = {})[G] = function () {
        return t.entries();
      }, n.next = function () {
        var n = r.next();
        if (n.done) return n;
        var e = t.get(n.value);
        return {
          done: !1,
          value: [n.value, e]
        };
      }, n;
    }, i[G] = function () {
      return this.entries();
    }, n;
  }(),
      f = function () {
    function n(n, t) {
      return this[B] = {
        i: 3,
        l: t,
        A: t ? t.A : m(),
        P: !1,
        I: !1,
        o: void 0,
        t: n,
        k: this,
        p: new Map(),
        O: !1,
        C: !1
      }, this;
    }

    t(n, Set);
    var r = n.prototype;
    return Object.defineProperty(r, "size", {
      get: function () {
        return v(this[B]).size;
      }
    }), r.has = function (n) {
      var t = this[B];
      return o(t), t.o ? !!t.o.has(n) || !(!t.p.has(n) || !t.o.has(t.p.get(n))) : t.t.has(n);
    }, r.add = function (n) {
      var t = this[B];
      return o(t), t.o ? t.o.add(n) : t.t.has(n) || (i(t), E(t.A.h, t), t.o.add(n)), this;
    }, r.delete = function (n) {
      if (!this.has(n)) return !1;
      var t = this[B];
      return o(t), i(t), E(t.A.h, t), t.o.delete(n) || !!t.p.has(n) && t.o.delete(t.p.get(n));
    }, r.clear = function () {
      var n = this[B];
      return o(n), i(n), E(n.A.h, n), n.o.clear();
    }, r.values = function () {
      var n = this[B];
      return o(n), i(n), n.o.values();
    }, r.entries = function () {
      var n = this[B];
      return o(n), i(n), n.o.entries();
    }, r.keys = function () {
      return this.values();
    }, r[G] = function () {
      return this.values();
    }, r.forEach = function (n, t) {
      for (var r = this.values(), e = r.next(); !e.done;) n.call(t, e.value, e.value, this), e = r.next();
    }, n;
  }();

  y("MapSet", {
    T: function (n, t) {
      return new a(n, t);
    },
    F: function (n, t) {
      return new f(n, t);
    }
  });
}

function N() {
  k(), D(), R();
}

function T(n) {
  return n;
}

function F(n) {
  return n;
}

var C,
    J,
    K = "undefined" != typeof Symbol,
    $ = "undefined" != typeof Map,
    U = "undefined" != typeof Set,
    W = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
    X = K ? Symbol("immer-nothing") : ((C = {})["immer-nothing"] = !0, C),
    q = K ? Symbol("immer-draftable") : "__$immer_draftable",
    B = K ? Symbol("immer-state") : "__$immer_state",
    G = K ? Symbol.iterator : "@@iterator",
    H = {
  0: "Illegal state",
  1: "Immer drafts cannot have computed properties",
  2: "This object has been frozen and should not be mutated",
  3: function (n) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n;
  },
  4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  5: "Immer forbids circular references",
  6: "The first or second argument to `produce` must be a function",
  7: "The third argument to `produce` must be a function or undefined",
  8: "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  9: "First argument to `finishDraft` must be a draft returned by `createDraft`",
  10: "The given draft is already finalized",
  11: "Object.defineProperty() cannot be used on an Immer draft",
  12: "Object.setPrototypeOf() cannot be used on an Immer draft",
  13: "Immer only supports deleting array indices",
  14: "Immer only supports setting array indices and the 'length' property",
  15: function (n) {
    return "Cannot apply patch, path doesn't resolve: " + n;
  },
  16: 'Sets cannot have "replace" patches.',
  17: function (n) {
    return "Unsupported patch operation: " + n;
  },
  18: function (n) {
    return "The plugin for '" + n + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n + "()` when initializing your application.";
  },
  19: "plugin not loaded",
  20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available"
},
    L = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function (n) {
  return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n));
} : Object.getOwnPropertyNames,
    Q = {},
    V = {
  get: function (n, t) {
    if (t === B) return n;
    var e = n.p;
    if (!n.P && u(e, t)) return e[t];
    var i = v(n)[t];
    if (n.I || !r(i)) return i;

    if (n.P) {
      if (i !== A(n.t, t)) return i;
      e = n.o;
    }

    return e[t] = I(n.A.h, i, n);
  },
  has: function (n, t) {
    return t in v(n);
  },
  ownKeys: function (n) {
    return Reflect.ownKeys(v(n));
  },
  set: function (n, t, r) {
    if (!n.P) {
      var e = A(n.t, t);
      if (r ? f(e, r) || r === n.p[t] : f(e, r) && t in n.t) return !0;
      x(n), z(n);
    }

    return n.D[t] = !0, n.o[t] = r, !0;
  },
  deleteProperty: function (n, t) {
    return void 0 !== A(n.t, t) || t in n.t ? (n.D[t] = !1, x(n), z(n)) : n.D[t] && delete n.D[t], n.o && delete n.o[t], !0;
  },
  getOwnPropertyDescriptor: function (n, t) {
    var r = v(n),
        e = Reflect.getOwnPropertyDescriptor(r, t);
    return e && (e.writable = !0, e.configurable = 1 !== n.i || "length" !== t), e;
  },
  defineProperty: function () {
    n(11);
  },
  getPrototypeOf: function (n) {
    return Object.getPrototypeOf(n.t);
  },
  setPrototypeOf: function () {
    n(12);
  }
},
    Y = {};
exports.immerable = q;
exports.nothing = X;
i(V, function (n, t) {
  Y[n] = function () {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), Y.deleteProperty = function (t, r) {
  return "production" !== "production" && isNaN(parseInt(r)) && n(13), V.deleteProperty.call(this, t[0], r);
}, Y.set = function (t, r, e) {
  return "production" !== "production" && "length" !== r && isNaN(parseInt(r)) && n(14), V.set.call(this, t[0], r, e, t[0]);
};

var Z = function () {
  function e(n) {
    this.g = W, this.N = "production" !== "production", "boolean" == typeof (null == n ? void 0 : n.useProxies) && this.setUseProxies(n.useProxies), "boolean" == typeof (null == n ? void 0 : n.autoFreeze) && this.setAutoFreeze(n.autoFreeze), this.produce = this.produce.bind(this), this.produceWithPatches = this.produceWithPatches.bind(this);
  }

  var i = e.prototype;
  return i.produce = function (t, e, i) {
    if ("function" == typeof t && "function" != typeof e) {
      var o = e;
      e = t;
      var u = this;
      return function (n) {
        var t = this;
        void 0 === n && (n = o);

        for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];

        return u.produce(n, function (n) {
          var r;
          return (r = e).call.apply(r, [t, n].concat(i));
        });
      };
    }

    var a;

    if ("function" != typeof e && n(6), void 0 !== i && "function" != typeof i && n(7), r(t)) {
      var f = O(this),
          c = I(this, t, void 0),
          s = !0;

      try {
        a = e(c), s = !1;
      } finally {
        s ? _(f) : j(f);
      }

      return "undefined" != typeof Promise && a instanceof Promise ? a.then(function (n) {
        return b(f, i), w(n, f);
      }, function (n) {
        throw _(f), n;
      }) : (b(f, i), w(a, f));
    }

    if ((a = e(t)) !== X) return void 0 === a && (a = t), this.N && d(a, !0), a;
  }, i.produceWithPatches = function (n, t) {
    var r,
        e,
        i = this;
    return "function" == typeof n ? function (t) {
      for (var r = arguments.length, e = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) e[o - 1] = arguments[o];

      return i.produceWithPatches(t, function (t) {
        return n.apply(void 0, [t].concat(e));
      });
    } : [this.produce(n, t, function (n, t) {
      r = n, e = t;
    }), r, e];
  }, i.createDraft = function (t) {
    r(t) || n(8);
    var e = O(this),
        i = I(this, t, void 0);
    return i[B].C = !0, j(e), i;
  }, i.finishDraft = function (t, r) {
    var e = t && t[B];
    "production" !== "production" && (e && e.C || n(9), e.I && n(10));
    var i = e.A;
    return b(i, r), w(void 0, i);
  }, i.setAutoFreeze = function (n) {
    this.N = n;
  }, i.setUseProxies = function (t) {
    W || n(20), this.g = t;
  }, i.applyPatches = function (n, r) {
    var e;

    for (e = r.length - 1; e >= 0; e--) {
      var i = r[e];

      if (0 === i.path.length && "replace" === i.op) {
        n = i.value;
        break;
      }
    }

    var o = h("Patches").U;
    return t(n) ? o(n, r) : this.produce(n, function (n) {
      return o(n, r.slice(e + 1));
    });
  }, e;
}(),
    nn = new Z(),
    tn = nn.produce,
    rn = nn.produceWithPatches.bind(nn),
    en = nn.setAutoFreeze.bind(nn),
    on = nn.setUseProxies.bind(nn),
    un = nn.applyPatches.bind(nn),
    an = nn.createDraft.bind(nn),
    fn = nn.finishDraft.bind(nn);

exports.finishDraft = fn;
exports.createDraft = an;
exports.applyPatches = un;
exports.setUseProxies = on;
exports.setAutoFreeze = en;
exports.produceWithPatches = rn;
exports.produce = tn;
exports.Immer = Z;
var _default = tn;
exports.default = _default;
},{}],"l9Ao":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fontStyleItalic = { fontStyle: 'italic' };
exports.fontWeightNormal = { fontWeight: 'normal' };
exports.fontWeightBold = { fontWeight: 'bold' };

},{}],"FXYJ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.FreeStyle = exports.Rule = exports.Style = exports.Selector = exports.Cache = void 0;

/**
 * The unique id is used for unique hashes.
 */
let uniqueId = 0;
/**
 * Quick dictionary lookup for unit-less numbers.
 */

const CSS_NUMBER = Object.create(null);
/**
 * CSS properties that are valid unit-less numbers.
 *
 * Ref: https://github.com/facebook/react/blob/master/packages/react-dom/src/shared/CSSProperty.js
 */

const CSS_NUMBER_KEYS = ["animation-iteration-count", "border-image-outset", "border-image-slice", "border-image-width", "box-flex", "box-flex-group", "box-ordinal-group", "column-count", "columns", "counter-increment", "counter-reset", "flex", "flex-grow", "flex-positive", "flex-shrink", "flex-negative", "flex-order", "font-weight", "grid-area", "grid-column", "grid-column-end", "grid-column-span", "grid-column-start", "grid-row", "grid-row-end", "grid-row-span", "grid-row-start", "line-clamp", "line-height", "opacity", "order", "orphans", "tab-size", "widows", "z-index", "zoom", // SVG properties.
"fill-opacity", "flood-opacity", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-miterlimit", "stroke-opacity", "stroke-width"]; // Add vendor prefixes to all unit-less properties.

for (const property of CSS_NUMBER_KEYS) {
  for (const prefix of ["-webkit-", "-ms-", "-moz-", "-o-", ""]) {
    CSS_NUMBER[prefix + property] = true;
  }
}
/**
 * Escape a CSS class name.
 */


function escape(str) {
  return str.replace(/[ !#$%&()*+,./;<=>?@[\]^`{|}~"'\\]/g, "\\$&");
}
/**
 * Transform a JavaScript property into a CSS property.
 */


function hyphenate(propertyName) {
  return propertyName.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`).replace(/^ms-/, "-ms-"); // Internet Explorer vendor prefix.
}
/**
 * Generate a hash value from a string.
 */


function stringHash(str) {
  let value = 5381;
  let len = str.length;

  while (len--) value = value * 33 ^ str.charCodeAt(len);

  return (value >>> 0).toString(36);
}
/**
 * Transform a style string to a CSS string.
 */


function styleToString(key, value) {
  if (value && typeof value === "number" && !CSS_NUMBER[key]) {
    return `${key}:${value}px`;
  }

  return `${key}:${value}`;
}
/**
 * Sort an array of tuples by first value.
 */


function sortTuples(value) {
  return value.sort((a, b) => a[0] > b[0] ? 1 : -1);
}
/**
 * Categorize user styles.
 */


function parseStyles(styles, hasNestedStyles) {
  const properties = [];
  const nestedStyles = []; // Sort keys before adding to styles.

  for (const key of Object.keys(styles)) {
    const name = key.trim();
    const value = styles[key];

    if (name.charCodeAt(0) !== 36
    /* $ */
    && value != null) {
      if (typeof value === "object" && !Array.isArray(value)) {
        nestedStyles.push([name, value]);
      } else {
        properties.push([hyphenate(name), value]);
      }
    }
  }

  return {
    style: stringifyProperties(sortTuples(properties)),
    nested: hasNestedStyles ? nestedStyles : sortTuples(nestedStyles),
    isUnique: !!styles.$unique
  };
}
/**
 * Stringify an array of property tuples.
 */


function stringifyProperties(properties) {
  return properties.map(([name, value]) => {
    if (!Array.isArray(value)) return styleToString(name, value);
    return value.map(x => styleToString(name, x)).join(";");
  }).join(";");
}
/**
 * Interpolate CSS selectors.
 */


function interpolate(selector, parent) {
  if (selector.indexOf("&") === -1) return `${parent} ${selector}`;
  return selector.replace(/&/g, parent);
}
/**
 * Recursive loop building styles with deferred selectors.
 */


function stylize(selector, styles, rulesList, stylesList, parent) {
  const {
    style,
    nested,
    isUnique
  } = parseStyles(styles, selector !== "");
  let pid = style;

  if (selector.charCodeAt(0) === 64
  /* @ */
  ) {
      const child = {
        selector,
        styles: [],
        rules: [],
        style: parent ? "" : style
      };
      rulesList.push(child); // Nested styles support (e.g. `.foo > @media > .bar`).

      if (style && parent) {
        child.styles.push({
          selector: parent,
          style,
          isUnique
        });
      }

      for (const [name, value] of nested) {
        pid += name + stylize(name, value, child.rules, child.styles, parent);
      }
    } else {
    const key = parent ? interpolate(selector, parent) : selector;
    if (style) stylesList.push({
      selector: key,
      style,
      isUnique
    });

    for (const [name, value] of nested) {
      pid += name + stylize(name, value, rulesList, stylesList, key);
    }
  }

  return pid;
}
/**
 * Transform `stylize` tree into style objects.
 */


function composeStylize(cache, pid, rulesList, stylesList, className, isStyle) {
  for (const {
    selector,
    style,
    isUnique
  } of stylesList) {
    const key = isStyle ? interpolate(selector, className) : selector;
    const id = isUnique ? `u\0${(++uniqueId).toString(36)}` : `s\0${pid}\0${style}`;
    const item = new Style(style, id);
    item.add(new Selector(key, `k\0${pid}\0${key}`));
    cache.add(item);
  }

  for (const {
    selector,
    style,
    rules,
    styles
  } of rulesList) {
    const item = new Rule(selector, style, `r\0${pid}\0${selector}\0${style}`);
    composeStylize(item, pid, rules, styles, className, isStyle);
    cache.add(item);
  }
}
/**
 * Cache to list to styles.
 */


function join(arr) {
  let res = "";

  for (let i = 0; i < arr.length; i++) res += arr[i];

  return res;
}
/**
 * Noop changes.
 */


const noopChanges = {
  add: () => undefined,
  change: () => undefined,
  remove: () => undefined
};
/**
 * Implement a cache/event emitter.
 */

class Cache {
  constructor(changes = noopChanges) {
    this.changes = changes;
    this.sheet = [];
    this.changeId = 0;
    this._keys = [];
    this._children = Object.create(null);
    this._counters = Object.create(null);
  }

  add(style) {
    const count = this._counters[style.id] || 0;
    const item = this._children[style.id] || style.clone();
    this._counters[style.id] = count + 1;

    if (count === 0) {
      this._children[item.id] = item;

      this._keys.push(item.id);

      this.sheet.push(item.getStyles());
      this.changeId++;
      this.changes.add(item, this._keys.length - 1);
    } else if (item instanceof Cache && style instanceof Cache) {
      const curIndex = this._keys.indexOf(style.id);

      const prevItemChangeId = item.changeId;
      item.merge(style);

      if (item.changeId !== prevItemChangeId) {
        this.sheet.splice(curIndex, 1, item.getStyles());
        this.changeId++;
        this.changes.change(item, curIndex, curIndex);
      }
    }
  }

  remove(style) {
    const count = this._counters[style.id];

    if (count) {
      this._counters[style.id] = count - 1;
      const item = this._children[style.id];

      const index = this._keys.indexOf(item.id);

      if (count === 1) {
        delete this._counters[style.id];
        delete this._children[style.id];

        this._keys.splice(index, 1);

        this.sheet.splice(index, 1);
        this.changeId++;
        this.changes.remove(item, index);
      } else if (item instanceof Cache && style instanceof Cache) {
        const prevChangeId = item.changeId;
        item.unmerge(style);

        if (item.changeId !== prevChangeId) {
          this.sheet.splice(index, 1, item.getStyles());
          this.changeId++;
          this.changes.change(item, index, index);
        }
      }
    }
  }

  values() {
    return this._keys.map(key => this._children[key]);
  }

  merge(cache) {
    for (const item of cache.values()) this.add(item);

    return this;
  }

  unmerge(cache) {
    for (const item of cache.values()) this.remove(item);

    return this;
  }

  clone() {
    return new Cache().merge(this);
  }

}
/**
 * Selector is a dumb class made to represent nested CSS selectors.
 */


exports.Cache = Cache;

class Selector {
  constructor(selector, id) {
    this.selector = selector;
    this.id = id;
  }

  getStyles() {
    return this.selector;
  }

  clone() {
    return this;
  }

}
/**
 * The style container registers a style string with selectors.
 */


exports.Selector = Selector;

class Style extends Cache {
  constructor(style, id) {
    super();
    this.style = style;
    this.id = id;
  }

  getStyles() {
    return `${this.sheet.join(",")}{${this.style}}`;
  }

  clone() {
    return new Style(this.style, this.id).merge(this);
  }

}
/**
 * Implement rule logic for style output.
 */


exports.Style = Style;

class Rule extends Cache {
  constructor(rule, style, id) {
    super();
    this.rule = rule;
    this.style = style;
    this.id = id;
  }

  getStyles() {
    return `${this.rule}{${this.style}${join(this.sheet)}}`;
  }

  clone() {
    return new Rule(this.rule, this.style, this.id).merge(this);
  }

}

exports.Rule = Rule;

function key(pid, styles) {
  const key = `f${stringHash(pid)}`;
  if ("production" === "production" || !styles.$displayName) return key;
  return `${styles.$displayName}_${key}`;
}
/**
 * The FreeStyle class implements the API for everything else.
 */


class FreeStyle extends Cache {
  constructor(id, changes) {
    super(changes);
    this.id = id;
  }

  registerStyle(styles) {
    const rulesList = [];
    const stylesList = [];
    const pid = stylize("&", styles, rulesList, stylesList);
    const id = key(pid, styles);
    const selector = `.${"production" === "production" ? id : escape(id)}`;
    composeStylize(this, pid, rulesList, stylesList, selector, true);
    return id;
  }

  registerKeyframes(keyframes) {
    return this.registerHashRule("@keyframes", keyframes);
  }

  registerHashRule(prefix, styles) {
    const rulesList = [];
    const stylesList = [];
    const pid = stylize("", styles, rulesList, stylesList);
    const id = key(pid, styles);
    const selector = `${prefix} ${"production" === "production" ? id : escape(id)}`;
    const rule = new Rule(selector, "", `h\0${pid}\0${prefix}`);
    composeStylize(rule, pid, rulesList, stylesList, "", false);
    this.add(rule);
    return id;
  }

  registerRule(rule, styles) {
    const rulesList = [];
    const stylesList = [];
    const pid = stylize(rule, styles, rulesList, stylesList);
    composeStylize(this, pid, rulesList, stylesList, "", false);
  }

  registerCss(styles) {
    return this.registerRule("", styles);
  }

  getStyles() {
    return join(this.sheet);
  }

  clone() {
    return new FreeStyle(this.id, this.changes).merge(this);
  }

}
/**
 * Exports a simple function to create a new instance.
 */


exports.FreeStyle = FreeStyle;

function create(changes) {
  return new FreeStyle(`f${(++uniqueId).toString(36)}`, changes);
}
},{}],"yHfk":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertToStyles = convertToStyles;
exports.convertToKeyframes = convertToKeyframes;

/**
 * We need to do the following to *our* objects before passing to freestyle:
 * - For any `$nest` directive move up to FreeStyle style nesting
 * - For any `$unique` directive map to FreeStyle Unique
 * - For any `$debugName` directive return the debug name
 */
function convertToStyles(object) {
  /** The final result we will return */
  var styles = {};

  for (var key in object) {
    /** Grab the value upfront */
    var val = object[key];
    /** TypeStyle configuration options */

    if (key === '$nest') {
      var nested = val;

      for (var selector in nested) {
        var subproperties = nested[selector];
        styles[selector] = convertToStyles(subproperties);
      }
    } else if (key === '$debugName') {
      styles.$displayName = val;
    } else {
      styles[key] = val;
    }
  }

  return styles;
} // todo: better name here


function convertToKeyframes(frames) {
  var result = {};

  for (var offset in frames) {
    if (offset !== '$debugName') {
      result[offset] = frames[offset];
    }
  }

  if (frames.$debugName) {
    result.$displayName = frames.$debugName;
  }

  return result;
}
},{}],"wj8W":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classes = classes;
exports.extend = extend;
exports.media = exports.raf = void 0;

/** Raf for node + browser */
var raf = typeof requestAnimationFrame === 'undefined'
/**
 * Make sure setTimeout is always invoked with
 * `this` set to `window` or `global` automatically
 **/
? function (cb) {
  return setTimeout(cb);
}
/**
 * Make sure window.requestAnimationFrame is always invoked with `this` window
 * We might have raf without window in case of `raf/polyfill` (recommended by React)
 **/
: typeof window === 'undefined' ? requestAnimationFrame : requestAnimationFrame.bind(window);
/**
 * Utility to join classes conditionally
 */

exports.raf = raf;

function classes() {
  var classes = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    classes[_i] = arguments[_i];
  }

  return classes.map(function (c) {
    return c && typeof c === 'object' ? Object.keys(c).map(function (key) {
      return !!c[key] && key;
    }) : [c];
  }).reduce(function (flattened, c) {
    return flattened.concat(c);
  }, []).filter(function (c) {
    return !!c;
  }).join(' ');
}
/**
 * Merges various styles into a single style object.
 * Note: if two objects have the same property the last one wins
 */


function extend() {
  var objects = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    objects[_i] = arguments[_i];
  }
  /** The final result we will return */


  var result = {};

  for (var _a = 0, objects_1 = objects; _a < objects_1.length; _a++) {
    var object = objects_1[_a];

    if (object == null || object === false) {
      continue;
    }

    for (var key in object) {
      /** Falsy values except a explicit 0 is ignored */
      var val = object[key];

      if (!val && val !== 0) {
        continue;
      }
      /** if nested media or pseudo selector */


      if (key === '$nest' && val) {
        result[key] = result['$nest'] ? extend(result['$nest'], val) : val;
      }
      /** if freestyle sub key that needs merging. We come here due to our recursive calls */
      else if (key.indexOf('&') !== -1 || key.indexOf('@media') === 0) {
          result[key] = result[key] ? extend(result[key], val) : val;
        } else {
          result[key] = val;
        }
    }
  }

  return result;
}
/**
 * Utility to help customize styles with media queries. e.g.
 * ```
 * style(
 *  media({maxWidth:500}, {color:'red'})
 * )
 * ```
 */


var media = function (mediaQuery) {
  var _a;

  var objects = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    objects[_i - 1] = arguments[_i];
  }

  var mediaQuerySections = [];
  if (mediaQuery.type) mediaQuerySections.push(mediaQuery.type);
  if (mediaQuery.orientation) mediaQuerySections.push("(orientation: " + mediaQuery.orientation + ")");
  if (mediaQuery.minWidth) mediaQuerySections.push("(min-width: " + mediaLength(mediaQuery.minWidth) + ")");
  if (mediaQuery.maxWidth) mediaQuerySections.push("(max-width: " + mediaLength(mediaQuery.maxWidth) + ")");
  if (mediaQuery.minHeight) mediaQuerySections.push("(min-height: " + mediaLength(mediaQuery.minHeight) + ")");
  if (mediaQuery.maxHeight) mediaQuerySections.push("(max-height: " + mediaLength(mediaQuery.maxHeight) + ")");
  var stringMediaQuery = "@media " + mediaQuerySections.join(' and ');
  var object = {
    $nest: (_a = {}, _a[stringMediaQuery] = extend.apply(void 0, objects), _a)
  };
  return object;
};

exports.media = media;

var mediaLength = function (value) {
  return typeof value === 'string' ? value : value + "px";
};
},{}],"ouja":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeStyle = void 0;

var FreeStyle = _interopRequireWildcard(require("free-style"));

var _formatting = require("./formatting");

var _utilities = require("./utilities");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Creates an instance of free style with our options
 */
var createFreeStyle = function () {
  return FreeStyle.create();
};
/**
 * Maintains a single stylesheet and keeps it in sync with requested styles
 */


var TypeStyle =
/** @class */
function () {
  function TypeStyle(_a) {
    var _this = this;

    var autoGenerateTag = _a.autoGenerateTag;
    /**
     * Insert `raw` CSS as a string. This is useful for e.g.
     * - third party CSS that you are customizing with template strings
     * - generating raw CSS in JavaScript
     * - reset libraries like normalize.css that you can use without loaders
     */

    this.cssRaw = function (mustBeValidCSS) {
      if (!mustBeValidCSS) {
        return;
      }

      _this._raw += mustBeValidCSS || '';
      _this._pendingRawChange = true;

      _this._styleUpdated();
    };
    /**
     * Takes CSSProperties and registers it to a global selector (body, html, etc.)
     */


    this.cssRule = function (selector) {
      var objects = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        objects[_i - 1] = arguments[_i];
      }

      var styles = (0, _formatting.convertToStyles)(_utilities.extend.apply(void 0, objects));

      _this._freeStyle.registerRule(selector, styles);

      _this._styleUpdated();

      return;
    };
    /**
     * Renders styles to the singleton tag imediately
     * NOTE: You should only call it on initial render to prevent any non CSS flash.
     * After that it is kept sync using `requestAnimationFrame` and we haven't noticed any bad flashes.
     **/


    this.forceRenderStyles = function () {
      var target = _this._getTag();

      if (!target) {
        return;
      }

      target.textContent = _this.getStyles();
    };
    /**
     * Utility function to register an @font-face
     */


    this.fontFace = function () {
      var fontFace = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        fontFace[_i] = arguments[_i];
      }

      var freeStyle = _this._freeStyle;

      for (var _a = 0, _b = fontFace; _a < _b.length; _a++) {
        var face = _b[_a];
        freeStyle.registerRule('@font-face', face);
      }

      _this._styleUpdated();

      return;
    };
    /**
     * Allows use to use the stylesheet in a node.js environment
     */


    this.getStyles = function () {
      return (_this._raw || '') + _this._freeStyle.getStyles();
    };
    /**
     * Takes keyframes and returns a generated animationName
     */


    this.keyframes = function (frames) {
      var keyframes = (0, _formatting.convertToKeyframes)(frames); // TODO: replace $debugName with display name

      var animationName = _this._freeStyle.registerKeyframes(keyframes);

      _this._styleUpdated();

      return animationName;
    };
    /**
     * Helps with testing. Reinitializes FreeStyle + raw
     */


    this.reinit = function () {
      /** reinit freestyle */
      var freeStyle = createFreeStyle();
      _this._freeStyle = freeStyle;
      _this._lastFreeStyleChangeId = freeStyle.changeId;
      /** reinit raw */

      _this._raw = '';
      _this._pendingRawChange = false;
      /** Clear any styles that were flushed */

      var target = _this._getTag();

      if (target) {
        target.textContent = '';
      }
    };
    /** Sets the target tag where we write the css on style updates */


    this.setStylesTarget = function (tag) {
      /** Clear any data in any previous tag */
      if (_this._tag) {
        _this._tag.textContent = '';
      }

      _this._tag = tag;
      /** This special time buffer immediately */

      _this.forceRenderStyles();
    };
    /**
     * Takes an object where property names are ideal class names and property values are CSSProperties, and
     * returns an object where property names are the same ideal class names and the property values are
     * the actual generated class names using the ideal class name as the $debugName
     */


    this.stylesheet = function (classes) {
      var classNames = Object.getOwnPropertyNames(classes);
      var result = {};

      for (var _i = 0, classNames_1 = classNames; _i < classNames_1.length; _i++) {
        var className = classNames_1[_i];
        var classDef = classes[className];

        if (classDef) {
          classDef.$debugName = className;
          result[className] = _this.style(classDef);
        }
      }

      return result;
    };

    var freeStyle = createFreeStyle();
    this._autoGenerateTag = autoGenerateTag;
    this._freeStyle = freeStyle;
    this._lastFreeStyleChangeId = freeStyle.changeId;
    this._pending = 0;
    this._pendingRawChange = false;
    this._raw = '';
    this._tag = undefined; // rebind prototype to TypeStyle.  It might be better to do a function() { return this.style.apply(this, arguments)}

    this.style = this.style.bind(this);
  }
  /**
   * Only calls cb all sync operations settle
   */


  TypeStyle.prototype._afterAllSync = function (cb) {
    var _this = this;

    this._pending++;
    var pending = this._pending;
    (0, _utilities.raf)(function () {
      if (pending !== _this._pending) {
        return;
      }

      cb();
    });
  };

  TypeStyle.prototype._getTag = function () {
    if (this._tag) {
      return this._tag;
    }

    if (this._autoGenerateTag) {
      var tag = typeof window === 'undefined' ? {
        textContent: ''
      } : document.createElement('style');

      if (typeof document !== 'undefined') {
        document.head.appendChild(tag);
      }

      this._tag = tag;
      return tag;
    }

    return undefined;
  };
  /** Checks if the style tag needs updating and if so queues up the change */


  TypeStyle.prototype._styleUpdated = function () {
    var _this = this;

    var changeId = this._freeStyle.changeId;
    var lastChangeId = this._lastFreeStyleChangeId;

    if (!this._pendingRawChange && changeId === lastChangeId) {
      return;
    }

    this._lastFreeStyleChangeId = changeId;
    this._pendingRawChange = false;

    this._afterAllSync(function () {
      return _this.forceRenderStyles();
    });
  };

  TypeStyle.prototype.style = function () {
    var className = this._freeStyle.registerStyle((0, _formatting.convertToStyles)(_utilities.extend.apply(undefined, arguments)));

    this._styleUpdated();

    return className;
  };

  return TypeStyle;
}();

exports.TypeStyle = TypeStyle;
},{"free-style":"FXYJ","./formatting":"yHfk","./utilities":"wj8W"}],"o6es":[function(require,module,exports) {

},{}],"oehJ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTypeStyle = createTypeStyle;
Object.defineProperty(exports, "TypeStyle", {
  enumerable: true,
  get: function () {
    return _typestyle.TypeStyle;
  }
});
Object.defineProperty(exports, "extend", {
  enumerable: true,
  get: function () {
    return _utilities.extend;
  }
});
Object.defineProperty(exports, "classes", {
  enumerable: true,
  get: function () {
    return _utilities.classes;
  }
});
Object.defineProperty(exports, "media", {
  enumerable: true,
  get: function () {
    return _utilities.media;
  }
});
exports.types = exports.stylesheet = exports.style = exports.reinit = exports.keyframes = exports.getStyles = exports.fontFace = exports.forceRenderStyles = exports.cssRule = exports.cssRaw = exports.setStylesTarget = void 0;

var _typestyle = require("./internal/typestyle");

var types = _interopRequireWildcard(require("./types"));

exports.types = types;

var _utilities = require("./internal/utilities");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * All the CSS types in the 'types' namespace
 */

/**
 * Export certain utilities
 */

/** Zero configuration, default instance of TypeStyle */
var ts = new _typestyle.TypeStyle({
  autoGenerateTag: true
});
/** Sets the target tag where we write the css on style updates */

var setStylesTarget = ts.setStylesTarget;
/**
 * Insert `raw` CSS as a string. This is useful for e.g.
 * - third party CSS that you are customizing with template strings
 * - generating raw CSS in JavaScript
 * - reset libraries like normalize.css that you can use without loaders
 */

exports.setStylesTarget = setStylesTarget;
var cssRaw = ts.cssRaw;
/**
 * Takes CSSProperties and registers it to a global selector (body, html, etc.)
 */

exports.cssRaw = cssRaw;
var cssRule = ts.cssRule;
/**
 * Renders styles to the singleton tag imediately
 * NOTE: You should only call it on initial render to prevent any non CSS flash.
 * After that it is kept sync using `requestAnimationFrame` and we haven't noticed any bad flashes.
 **/

exports.cssRule = cssRule;
var forceRenderStyles = ts.forceRenderStyles;
/**
 * Utility function to register an @font-face
 */

exports.forceRenderStyles = forceRenderStyles;
var fontFace = ts.fontFace;
/**
 * Allows use to use the stylesheet in a node.js environment
 */

exports.fontFace = fontFace;
var getStyles = ts.getStyles;
/**
 * Takes keyframes and returns a generated animationName
 */

exports.getStyles = getStyles;
var keyframes = ts.keyframes;
/**
 * Helps with testing. Reinitializes FreeStyle + raw
 */

exports.keyframes = keyframes;
var reinit = ts.reinit;
/**
 * Takes CSSProperties and return a generated className you can use on your component
 */

exports.reinit = reinit;
var style = ts.style;
/**
 * Takes an object where property names are ideal class names and property values are CSSProperties, and
 * returns an object where property names are the same ideal class names and the property values are
 * the actual generated class names using the ideal class name as the $debugName
 */

exports.style = style;
var stylesheet = ts.stylesheet;
/**
 * Creates a new instance of TypeStyle separate from the default instance.
 *
 * - Use this for creating a different typestyle instance for a shadow dom component.
 * - Use this if you don't want an auto tag generated and you just want to collect the CSS.
 *
 * NOTE: styles aren't shared between different instances.
 */

exports.stylesheet = stylesheet;

function createTypeStyle(target) {
  var instance = new _typestyle.TypeStyle({
    autoGenerateTag: false
  });

  if (target) {
    instance.setStylesTarget(target);
  }

  return instance;
}
},{"./internal/typestyle":"ouja","./types":"o6es","./internal/utilities":"wj8W"}],"NHtu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module Flexbox abstraction
 *
 * -webkit- is needed for mobile safari (iPhone / iPad)
 * -ms- is needed for IE
 */
var typestyle_1 = require("typestyle");
/**
 * If you have more than one child prefer horizontal,vertical
 */
exports.flexRoot = {
    display: [
        '-ms-flexbox',
        '-webkit-flex',
        'flex',
    ]
};
/**
 * A general grouping component that has no impact on the parent flexbox properties e.g.
 * <vertical>
 *    <pass>
 *       <content/>
 *    </pass>
 * </vertical>
 */
exports.pass = {
    display: 'inherit',
    '-ms-flex-direction': 'inherit',
    '-webkit-flex-direction': 'inherit',
    flexDirection: 'inherit',
    '-ms-flex-positive': 1,
    '-webkit-flex-grow': 1,
    flexGrow: 1,
};
exports.inlineRoot = {
    display: [
        '-ms-inline-flexbox',
        '-webkit-inline-flex',
        'inline-flex'
    ]
};
exports.horizontal = typestyle_1.extend(exports.flexRoot, {
    '-ms-flex-direction': 'row',
    '-webkit-flex-direction': 'row',
    flexDirection: 'row'
});
exports.vertical = typestyle_1.extend(exports.flexRoot, {
    '-ms-flex-direction': 'column',
    '-webkit-flex-direction': 'column',
    flexDirection: 'column'
});
exports.wrap = {
    '-ms-flex-wrap': 'wrap',
    '-webkit-flex-wrap': 'wrap',
    flexWrap: 'wrap'
};
/**
 * If you want items to be sized automatically by their children use this
 * This is because of a bug in various flexbox implementations: http://philipwalton.com/articles/normalizing-cross-browser-flexbox-bugs/
 * Specifically bug 1 : https://github.com/philipwalton/flexbugs#1-minimum-content-sizing-of-flex-items-not-honored
 */
exports.content = {
    '-ms-flex-negative': 0,
    '-webkit-flex-shrink': 0,
    flexShrink: 0,
    flexBasis: 'auto',
};
exports.flex = {
    '-ms-flex': 1,
    '-webkit-flex': 1,
    flex: 1
};
exports.flex1 = exports.flex;
exports.flex2 = {
    '-ms-flex': 2,
    '-webkit-flex': 2,
    flex: 2
};
exports.flex3 = {
    '-ms-flex': 3,
    '-webkit-flex': 3,
    flex: 3
};
exports.flex4 = {
    '-ms-flex': 4,
    '-webkit-flex': 4,
    flex: 4
};
exports.flex5 = {
    '-ms-flex': 5,
    '-webkit-flex': 5,
    flex: 5
};
exports.flex6 = {
    '-ms-flex': 6,
    '-webkit-flex': 6,
    flex: 6
};
exports.flex7 = {
    '-ms-flex': 7,
    '-webkit-flex': 7,
    flex: 7
};
exports.flex8 = {
    '-ms-flex': 8,
    '-webkit-flex': 8,
    flex: 8
};
exports.flex9 = {
    '-ms-flex': 9,
    '-webkit-flex': 9,
    flex: 9
};
exports.flex10 = {
    '-ms-flex': 10,
    '-webkit-flex': 10,
    flex: 10
};
exports.flex11 = {
    '-ms-flex': 11,
    '-webkit-flex': 11,
    flex: 11
};
exports.flex12 = {
    '-ms-flex': 12,
    '-webkit-flex': 12,
    flex: 12
};
/////////////////////////////
// Alignment in cross axis //
/////////////////////////////
exports.start = {
    '-ms-flex-align': 'start',
    '-webkit-align-items': 'flex-start',
    alignItems: 'flex-start'
};
exports.center = {
    '-ms-flex-align': 'center',
    '-webkit-align-items': 'center',
    alignItems: 'center'
};
exports.end = {
    '-ms-flex-align': 'end',
    '-webkit-align-items': 'flex-end',
    alignItems: 'flex-end'
};
////////////////////////////
// Alignment in main axis //
////////////////////////////
exports.startJustified = {
    '-ms-flex-pack': 'start',
    '-webkit-justify-content': 'flex-start',
    justifyContent: 'flex-start'
};
exports.centerJustified = {
    '-ms-flex-pack': 'center',
    '-webkit-justify-content': 'center',
    justifyContent: 'center'
};
exports.endJustified = {
    '-ms-flex-pack': 'end',
    '-webkit-justify-content': 'flex-end',
    justifyContent: 'flex-end'
};
exports.aroundJustified = {
    '-ms-flex-pack': 'distribute',
    '-webkit-justify-content': 'space-around',
    justifyContent: 'space-around'
};
exports.betweenJustified = {
    '-ms-flex-pack': 'justify',
    '-webkit-justify-content': 'space-between',
    justifyContent: 'space-between'
};
////////////////////////////
// Alignment in both axes //
////////////////////////////
exports.centerCenter = typestyle_1.extend(exports.flexRoot, exports.center, exports.centerJustified);
////////////////////
// Self alignment //
////////////////////
exports.selfStart = {
    '-ms-flex-item-align': 'start',
    '-webkit-align-self': 'flex-start',
    alignSelf: 'flex-start'
};
exports.selfCenter = {
    '-ms-flex-item-align': 'center',
    '-webkit-align-self': 'center',
    alignSelf: 'center'
};
exports.selfEnd = {
    '-ms-flex-item-align': 'end',
    '-webkit-align-self': 'flex-end',
    alignSelf: 'flex-end'
};
exports.selfStretch = {
    '-ms-flex-item-align': 'stretch',
    '-webkit-align-self': 'stretch',
    alignSelf: 'stretch',
};

},{"typestyle":"oehJ"}],"QFDa":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module Layers essentially allow you to create a new surface for layouts
 */
var typestyle_1 = require("typestyle");
/**
 * New layer parent
 */
exports.layerParent = {
    position: 'relative',
};
/**
 * Use this to attach to any parent layer
 * and then you can use `left`/`top` etc to position yourself
 */
exports.attachToLayerParent = {
    position: 'absolute',
};
/**
 * This new layer will attach itself to the nearest parent with `position:relative` or `position:absolute`
 * And will become the new `layerParent`
 */
exports.newLayer = typestyle_1.extend(exports.attachToLayerParent, {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
});
exports.attachToTop = typestyle_1.extend(exports.attachToLayerParent, {
    top: 0,
    left: 0,
    right: 0,
});
exports.attachToRight = typestyle_1.extend(exports.attachToLayerParent, {
    top: 0,
    right: 0,
    bottom: 0,
});
exports.attachToBottom = typestyle_1.extend(exports.attachToLayerParent, {
    right: 0,
    bottom: 0,
    left: 0,
});
exports.attachToLeft = typestyle_1.extend(exports.attachToLayerParent, {
    top: 0,
    bottom: 0,
    left: 0,
});
/**
 * Helps fixing to page
 */
var fixed = {
    position: 'fixed'
};
exports.pageTop = typestyle_1.extend(fixed, {
    top: 0,
    left: 0,
    right: 0,
});
exports.pageRight = typestyle_1.extend(fixed, {
    top: 0,
    right: 0,
    bottom: 0,
});
exports.pageBottom = typestyle_1.extend(fixed, {
    right: 0,
    bottom: 0,
    left: 0,
});
exports.pageLeft = typestyle_1.extend(fixed, {
    top: 0,
    bottom: 0,
    left: 0,
});

},{"typestyle":"oehJ"}],"giSd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function boxUnitToString(value) {
    if (typeof value === 'number') {
        return value.toString() + 'px';
    }
    else {
        return value;
    }
}
/**
 * Takes a function that expects Box to be passed into it
 * and creates a BoxFunction
 */
function createBoxFunction(mapFromBox) {
    var result = function (a, b, c, d) {
        if (b === undefined && c === undefined && d === undefined) {
            b = c = d = a;
        }
        else if (c === undefined && d === undefined) {
            c = a;
            d = b;
        }
        var box = {
            top: boxUnitToString(a),
            right: boxUnitToString(b),
            bottom: boxUnitToString(c),
            left: boxUnitToString(d)
        };
        return mapFromBox(box);
    };
    return result;
}
exports.padding = createBoxFunction(function (box) {
    return {
        paddingTop: box.top,
        paddingRight: box.right,
        paddingBottom: box.bottom,
        paddingLeft: box.left
    };
});
exports.margin = createBoxFunction(function (box) {
    return {
        marginTop: box.top,
        marginRight: box.right,
        marginBottom: box.bottom,
        marginLeft: box.left
    };
});
exports.border = createBoxFunction(function (box) {
    return {
        borderTop: box.top,
        borderRight: box.right,
        borderBottom: box.bottom,
        borderLeft: box.left
    };
});
/**
 * Puts a vertical margin between each child
 */
exports.verticallySpaced = function (margin) {
    var spacing = boxUnitToString(margin);
    return {
        '&>*': {
            marginBottom: spacing + ' !important'
        },
        '&>*:last-child': {
            marginBottom: '0px !important',
        }
    };
};
/**
 * Puts a horizontal margin between each child
 */
exports.horizontallySpaced = function (margin) {
    var spacing = boxUnitToString(margin);
    return {
        '&>*': {
            marginRight: spacing + ' !important'
        },
        '&>*:last-child': {
            marginRight: '0px !important',
        }
    };
};
function gridSpaced(topAndBottom, leftAndRight) {
    if (leftAndRight === void 0) { leftAndRight = topAndBottom; }
    var vertical = boxUnitToString(topAndBottom);
    var horizontal = boxUnitToString(leftAndRight);
    return {
        marginTop: '-' + vertical,
        marginLeft: '-' + horizontal,
        '&>*': {
            marginTop: vertical,
            marginLeft: horizontal,
        }
    };
}
exports.gridSpaced = gridSpaced;
;
/**
 * Gives this element the same size as the nearest offsetParent
 */
exports.fillParent = {
    width: '100%',
    height: '100%',
};
/** mixin: maxWidth */
exports.maxWidth = function (value) {
    var maxWidth = boxUnitToString(value);
    return { maxWidth: maxWidth };
};
/** mixin: maxHeight */
exports.maxHeight = function (value) {
    var maxHeight = boxUnitToString(value);
    return { maxHeight: maxHeight };
};
/**
 * Block elements: Centering *self* using margins
 */
exports.horizontallyCenterSelf = {
    marginLeft: 'auto',
    marginRight: 'auto',
};
/**
 * Block elements: Centering *child* elements using textAlign
 */
exports.horizontallyCenterChildren = {
    textAlign: 'center'
};
/** mixin: height */
exports.height = function (value) {
    var height = boxUnitToString(value);
    return { height: height };
};
/** mixin: width */
exports.width = function (value) {
    var width = boxUnitToString(value);
    return { width: width };
};

},{}],"AZoA":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scroll = {
    '-webkit-overflow-scrolling': 'touch',
    overflow: 'auto'
};
exports.scrollX = {
    '-webkit-overflow-scrolling': 'touch',
    overflowX: 'auto'
};
exports.scrollY = {
    '-webkit-overflow-scrolling': 'touch',
    overflowY: 'auto'
};
/**
 * If you expect a child somewhere down in the tree to scroll
 * you need to tell the browser to prevent a scroll bar.
 * Use : `parent(someChildWillScroll) > child(scroll)`
 */
exports.someChildWillScroll = {
    overflow: 'hidden'
};

},{}],"Sld3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.block = {
    display: 'block'
};
exports.none = {
    display: 'none'
};
exports.inlineBlock = {
    display: 'inline-block'
};
exports.invisible = {
    visibility: 'hidden'
};

},{}],"I13i":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typestyle_1 = require("typestyle");
/**
 * Adds normalize.css to the registerd outputs
 */
function normalize() {
    /**
     * To update:
     * - https://cdnjs.com/libraries/normalize
     * - then latest. Currently https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css
     * - then copy paste raw below
     * - remove the sourmap at the end of the file
     * - fix the test (checks length of raw)
     * - update the link in this comment
     *
     * Release
     * - If its a major version change in nomalize. Release as a major change in typestyle.
     * - otherwise minor
     **/
    typestyle_1.cssRaw("\n    button,hr,input{overflow:visible}audio,canvas,progress,video{display:inline-block}progress,sub,sup{vertical-align:baseline}html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0} menu,article,aside,details,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{}button,select{text-transform:none}[type=submit], [type=reset],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}\n    ".trim());
}
exports.normalize = normalize;

},{"typestyle":"oehJ"}],"sSpF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typestyle_1 = require("typestyle");
var box_1 = require("./box");
/**
 * Recommended Page setup
 * - Sets up the body to be full size
 * - Sets up box sizing to be border box
 **/
function setupPage(rootSelector) {
    /** Use full window size for application */
    typestyle_1.cssRule('html, body', {
        height: '100%',
        width: '100%',
        padding: 0,
        margin: 0
    });
    /** Use border box */
    typestyle_1.cssRule('html', {
        '-moz-box-sizing': 'border-box',
        '-webkit-box-sizing': 'border-box',
        boxSizing: 'border-box'
    });
    typestyle_1.cssRule('*,*:before,*:after', {
        boxSizing: 'inherit',
    });
    /** Also root should fill parent */
    typestyle_1.cssRule(rootSelector, box_1.fillParent);
}
exports.setupPage = setupPage;

},{"typestyle":"oehJ","./box":"giSd"}],"pm94":[function(require,module,exports) {
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * TODO: move out to csstips
 */
__export(require("./font"));
__export(require("./flex"));
__export(require("./layer"));
__export(require("./box"));
__export(require("./scroll"));
__export(require("./display"));
__export(require("./normalize"));
__export(require("./page"));

},{"./font":"l9Ao","./flex":"NHtu","./layer":"QFDa","./box":"giSd","./scroll":"AZoA","./display":"Sld3","./normalize":"I13i","./page":"sSpF"}],"JUot":[function(require,module,exports) {

module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};

},{}],"xbqV":[function(require,module,exports) {
"use strict";

var deselectCurrent = require("toggle-selection");

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;

},{"toggle-selection":"JUot"}],"dWiE":[function(require,module,exports) {
/*
Breaks a Javascript string into individual user-perceived "characters" 
called extended grapheme clusters by implementing the Unicode UAX-29 standard, version 10.0.0

Usage:
var splitter = new GraphemeSplitter();
//returns an array of strings, one string for each grapheme cluster
var graphemes = splitter.splitGraphemes(string); 

*/
function GraphemeSplitter(){
	var CR = 0,
		LF = 1,
		Control = 2,
		Extend = 3,
		Regional_Indicator = 4,
		SpacingMark = 5,
		L = 6,
		V = 7,
		T = 8,
		LV = 9,
		LVT = 10,
		Other = 11,
		Prepend = 12,
		E_Base = 13,
		E_Modifier = 14,
		ZWJ = 15,
		Glue_After_Zwj = 16,
		E_Base_GAZ = 17;
		
	// BreakTypes
	var NotBreak = 0,
		BreakStart = 1,
		Break = 2,
		BreakLastRegional = 3,
		BreakPenultimateRegional = 4;
		
	function isSurrogate(str, pos) {
		return  0xd800 <= str.charCodeAt(pos) && str.charCodeAt(pos) <= 0xdbff && 
				0xdc00 <= str.charCodeAt(pos + 1) && str.charCodeAt(pos + 1) <= 0xdfff;
	}
		
	// Private function, gets a Unicode code point from a JavaScript UTF-16 string
	// handling surrogate pairs appropriately
	function codePointAt(str, idx){
		if(idx === undefined){
			idx = 0;
		}
		var code = str.charCodeAt(idx);

		// if a high surrogate
		if (0xD800 <= code && code <= 0xDBFF && 
			idx < str.length - 1){
			var hi = code;
			var low = str.charCodeAt(idx + 1);
			if (0xDC00 <= low && low <= 0xDFFF){
				return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
			}
			return hi;
		}
		
		// if a low surrogate
		if (0xDC00 <= code && code <= 0xDFFF &&
			idx >= 1){
			var hi = str.charCodeAt(idx - 1);
			var low = code;
			if (0xD800 <= hi && hi <= 0xDBFF){
				return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
			}
			return low;
		}
		
		//just return the char if an unmatched surrogate half or a 
		//single-char codepoint
		return code;
	}
	
	// Private function, returns whether a break is allowed between the 
	// two given grapheme breaking classes
	function shouldBreak(start, mid, end){
		var all = [start].concat(mid).concat([end]);
		var previous = all[all.length - 2]
		var next = end
		
		// Lookahead termintor for:
		// GB10. (E_Base | EBG) Extend* ?	E_Modifier
		var eModifierIndex = all.lastIndexOf(E_Modifier)
		if(eModifierIndex > 1 &&
			all.slice(1, eModifierIndex).every(function(c){return c == Extend}) &&
			[Extend, E_Base, E_Base_GAZ].indexOf(start) == -1){
			return Break
		}

		// Lookahead termintor for:
		// GB12. ^ (RI RI)* RI	?	RI
		// GB13. [^RI] (RI RI)* RI	?	RI
		var rIIndex = all.lastIndexOf(Regional_Indicator)
		if(rIIndex > 0 &&
			all.slice(1, rIIndex).every(function(c){return c == Regional_Indicator}) &&
			[Prepend, Regional_Indicator].indexOf(previous) == -1) { 
			if(all.filter(function(c){return c == Regional_Indicator}).length % 2 == 1) {
				return BreakLastRegional
			}
			else {
				return BreakPenultimateRegional
			}
		}
		
		// GB3. CR X LF
		if(previous == CR && next == LF){
			return NotBreak;
		}
		// GB4. (Control|CR|LF) ÷
		else if(previous == Control || previous == CR || previous == LF){
			if(next == E_Modifier && mid.every(function(c){return c == Extend})){
				return Break
			}
			else {
				return BreakStart
			}
		}
		// GB5. ÷ (Control|CR|LF)
		else if(next == Control || next == CR || next == LF){
			return BreakStart;
		}
		// GB6. L X (L|V|LV|LVT)
		else if(previous == L && 
			(next == L || next == V || next == LV || next == LVT)){
			return NotBreak;
		}
		// GB7. (LV|V) X (V|T)
		else if((previous == LV || previous == V) && 
			(next == V || next == T)){
			return NotBreak;
		}
		// GB8. (LVT|T) X (T)
		else if((previous == LVT || previous == T) && 
			next == T){
			return NotBreak;
		}
		// GB9. X (Extend|ZWJ)
		else if (next == Extend || next == ZWJ){
			return NotBreak;
		}
		// GB9a. X SpacingMark
		else if(next == SpacingMark){
			return NotBreak;
		}
		// GB9b. Prepend X
		else if (previous == Prepend){
			return NotBreak;
		}
		
		// GB10. (E_Base | EBG) Extend* ?	E_Modifier
		var previousNonExtendIndex = all.indexOf(Extend) != -1 ? all.lastIndexOf(Extend) - 1 : all.length - 2;
		if([E_Base, E_Base_GAZ].indexOf(all[previousNonExtendIndex]) != -1 &&
			all.slice(previousNonExtendIndex + 1, -1).every(function(c){return c == Extend}) &&
			next == E_Modifier){
			return NotBreak;
		}
		
		// GB11. ZWJ ? (Glue_After_Zwj | EBG)
		if(previous == ZWJ && [Glue_After_Zwj, E_Base_GAZ].indexOf(next) != -1) {
			return NotBreak;
		}

		// GB12. ^ (RI RI)* RI ? RI
		// GB13. [^RI] (RI RI)* RI ? RI
		if(mid.indexOf(Regional_Indicator) != -1) { 
			return Break;
		}
		if(previous == Regional_Indicator && next == Regional_Indicator) {
			return NotBreak;
		}

		// GB999. Any ? Any
		return BreakStart;
	}
	
	// Returns the next grapheme break in the string after the given index
	this.nextBreak = function(string, index){
		if(index === undefined){
			index = 0;
		}
		if(index < 0){
			return 0;
		}
		if(index >= string.length - 1){
			return string.length;
		}
		var prev = getGraphemeBreakProperty(codePointAt(string, index));
		var mid = []
		for (var i = index + 1; i < string.length; i++) {
			// check for already processed low surrogates
			if(isSurrogate(string, i - 1)){
				continue;
			}
		
			var next = getGraphemeBreakProperty(codePointAt(string, i));
			if(shouldBreak(prev, mid, next)){
				return i;
			}
			
			mid.push(next);
		}
		return string.length;
	};
	
	// Breaks the given string into an array of grapheme cluster strings
	this.splitGraphemes = function(str){
		var res = [];
		var index = 0;
		var brk;
		while((brk = this.nextBreak(str, index)) < str.length){
			res.push(str.slice(index, brk));
			index = brk;
		}
		if(index < str.length){
			res.push(str.slice(index));
		}
		return res;
	};

	// Returns the iterator of grapheme clusters there are in the given string
	this.iterateGraphemes = function(str) {
		var index = 0;
		var res = {
			next: (function() {
				var value;
				var brk;
				if ((brk = this.nextBreak(str, index)) < str.length) {
					value = str.slice(index, brk);
					index = brk;
					return { value: value, done: false };
				}
				if (index < str.length) {
					value = str.slice(index);
					index = str.length;
					return { value: value, done: false };
				}
				return { value: undefined, done: true };
			}).bind(this)
		};
		// ES2015 @@iterator method (iterable) for spread syntax and for...of statement
		if (typeof Symbol !== 'undefined' && Symbol.iterator) {
			res[Symbol.iterator] = function() {return res};
		}
		return res;
	};

	// Returns the number of grapheme clusters there are in the given string
	this.countGraphemes = function(str){
		var count = 0;
		var index = 0;
		var brk;
		while((brk = this.nextBreak(str, index)) < str.length){
			index = brk;
			count++;
		}
		if(index < str.length){
			count++;
		}
		return count;
	};
	
	//given a Unicode code point, determines this symbol's grapheme break property
	function getGraphemeBreakProperty(code){
		
		//grapheme break property for Unicode 10.0.0, 
		//taken from http://www.unicode.org/Public/10.0.0/ucd/auxiliary/GraphemeBreakProperty.txt
		//and adapted to JavaScript rules
		
		if(		
		(0x0600 <= code && code <= 0x0605) || // Cf   [6] ARABIC NUMBER SIGN..ARABIC NUMBER MARK ABOVE
		0x06DD == code || // Cf       ARABIC END OF AYAH
		0x070F == code || // Cf       SYRIAC ABBREVIATION MARK
		0x08E2 == code || // Cf       ARABIC DISPUTED END OF AYAH
		0x0D4E == code || // Lo       MALAYALAM LETTER DOT REPH
		0x110BD == code || // Cf       KAITHI NUMBER SIGN
		(0x111C2 <= code && code <= 0x111C3) || // Lo   [2] SHARADA SIGN JIHVAMULIYA..SHARADA SIGN UPADHMANIYA
		0x11A3A == code || // Lo       ZANABAZAR SQUARE CLUSTER-INITIAL LETTER RA
		(0x11A86 <= code && code <= 0x11A89) || // Lo   [4] SOYOMBO CLUSTER-INITIAL LETTER RA..SOYOMBO CLUSTER-INITIAL LETTER SA
		0x11D46 == code // Lo       MASARAM GONDI REPHA
		){
			return Prepend;
		}
		if(
		0x000D == code // Cc       <control-000D>
		){
			return CR;
		}
		
		if(
		0x000A == code // Cc       <control-000A>
		){
			return LF;
		}
		
		
		if(
		(0x0000 <= code && code <= 0x0009) || // Cc  [10] <control-0000>..<control-0009>
		(0x000B <= code && code <= 0x000C) || // Cc   [2] <control-000B>..<control-000C>
		(0x000E <= code && code <= 0x001F) || // Cc  [18] <control-000E>..<control-001F>
		(0x007F <= code && code <= 0x009F) || // Cc  [33] <control-007F>..<control-009F>
		0x00AD == code || // Cf       SOFT HYPHEN
		0x061C == code || // Cf       ARABIC LETTER MARK
	
		0x180E == code || // Cf       MONGOLIAN VOWEL SEPARATOR
		0x200B == code || // Cf       ZERO WIDTH SPACE
		(0x200E <= code && code <= 0x200F) || // Cf   [2] LEFT-TO-RIGHT MARK..RIGHT-TO-LEFT MARK
		0x2028 == code || // Zl       LINE SEPARATOR
		0x2029 == code || // Zp       PARAGRAPH SEPARATOR
		(0x202A <= code && code <= 0x202E) || // Cf   [5] LEFT-TO-RIGHT EMBEDDING..RIGHT-TO-LEFT OVERRIDE
		(0x2060 <= code && code <= 0x2064) || // Cf   [5] WORD JOINER..INVISIBLE PLUS
		0x2065 == code || // Cn       <reserved-2065>
		(0x2066 <= code && code <= 0x206F) || // Cf  [10] LEFT-TO-RIGHT ISOLATE..NOMINAL DIGIT SHAPES
		(0xD800 <= code && code <= 0xDFFF) || // Cs [2048] <surrogate-D800>..<surrogate-DFFF>
		0xFEFF == code || // Cf       ZERO WIDTH NO-BREAK SPACE
		(0xFFF0 <= code && code <= 0xFFF8) || // Cn   [9] <reserved-FFF0>..<reserved-FFF8>
		(0xFFF9 <= code && code <= 0xFFFB) || // Cf   [3] INTERLINEAR ANNOTATION ANCHOR..INTERLINEAR ANNOTATION TERMINATOR
		(0x1BCA0 <= code && code <= 0x1BCA3) || // Cf   [4] SHORTHAND FORMAT LETTER OVERLAP..SHORTHAND FORMAT UP STEP
		(0x1D173 <= code && code <= 0x1D17A) || // Cf   [8] MUSICAL SYMBOL BEGIN BEAM..MUSICAL SYMBOL END PHRASE
		0xE0000 == code || // Cn       <reserved-E0000>
		0xE0001 == code || // Cf       LANGUAGE TAG
		(0xE0002 <= code && code <= 0xE001F) || // Cn  [30] <reserved-E0002>..<reserved-E001F>
		(0xE0080 <= code && code <= 0xE00FF) || // Cn [128] <reserved-E0080>..<reserved-E00FF>
		(0xE01F0 <= code && code <= 0xE0FFF) // Cn [3600] <reserved-E01F0>..<reserved-E0FFF>
		){
			return Control;
		}
		
		
		if(
		(0x0300 <= code && code <= 0x036F) || // Mn [112] COMBINING GRAVE ACCENT..COMBINING LATIN SMALL LETTER X
		(0x0483 <= code && code <= 0x0487) || // Mn   [5] COMBINING CYRILLIC TITLO..COMBINING CYRILLIC POKRYTIE
		(0x0488 <= code && code <= 0x0489) || // Me   [2] COMBINING CYRILLIC HUNDRED THOUSANDS SIGN..COMBINING CYRILLIC MILLIONS SIGN
		(0x0591 <= code && code <= 0x05BD) || // Mn  [45] HEBREW ACCENT ETNAHTA..HEBREW POINT METEG
		0x05BF == code || // Mn       HEBREW POINT RAFE
		(0x05C1 <= code && code <= 0x05C2) || // Mn   [2] HEBREW POINT SHIN DOT..HEBREW POINT SIN DOT
		(0x05C4 <= code && code <= 0x05C5) || // Mn   [2] HEBREW MARK UPPER DOT..HEBREW MARK LOWER DOT
		0x05C7 == code || // Mn       HEBREW POINT QAMATS QATAN
		(0x0610 <= code && code <= 0x061A) || // Mn  [11] ARABIC SIGN SALLALLAHOU ALAYHE WASSALLAM..ARABIC SMALL KASRA
		(0x064B <= code && code <= 0x065F) || // Mn  [21] ARABIC FATHATAN..ARABIC WAVY HAMZA BELOW
		0x0670 == code || // Mn       ARABIC LETTER SUPERSCRIPT ALEF
		(0x06D6 <= code && code <= 0x06DC) || // Mn   [7] ARABIC SMALL HIGH LIGATURE SAD WITH LAM WITH ALEF MAKSURA..ARABIC SMALL HIGH SEEN
		(0x06DF <= code && code <= 0x06E4) || // Mn   [6] ARABIC SMALL HIGH ROUNDED ZERO..ARABIC SMALL HIGH MADDA
		(0x06E7 <= code && code <= 0x06E8) || // Mn   [2] ARABIC SMALL HIGH YEH..ARABIC SMALL HIGH NOON
		(0x06EA <= code && code <= 0x06ED) || // Mn   [4] ARABIC EMPTY CENTRE LOW STOP..ARABIC SMALL LOW MEEM
		0x0711 == code || // Mn       SYRIAC LETTER SUPERSCRIPT ALAPH
		(0x0730 <= code && code <= 0x074A) || // Mn  [27] SYRIAC PTHAHA ABOVE..SYRIAC BARREKH
		(0x07A6 <= code && code <= 0x07B0) || // Mn  [11] THAANA ABAFILI..THAANA SUKUN
		(0x07EB <= code && code <= 0x07F3) || // Mn   [9] NKO COMBINING SHORT HIGH TONE..NKO COMBINING DOUBLE DOT ABOVE
		(0x0816 <= code && code <= 0x0819) || // Mn   [4] SAMARITAN MARK IN..SAMARITAN MARK DAGESH
		(0x081B <= code && code <= 0x0823) || // Mn   [9] SAMARITAN MARK EPENTHETIC YUT..SAMARITAN VOWEL SIGN A
		(0x0825 <= code && code <= 0x0827) || // Mn   [3] SAMARITAN VOWEL SIGN SHORT A..SAMARITAN VOWEL SIGN U
		(0x0829 <= code && code <= 0x082D) || // Mn   [5] SAMARITAN VOWEL SIGN LONG I..SAMARITAN MARK NEQUDAA
		(0x0859 <= code && code <= 0x085B) || // Mn   [3] MANDAIC AFFRICATION MARK..MANDAIC GEMINATION MARK
		(0x08D4 <= code && code <= 0x08E1) || // Mn  [14] ARABIC SMALL HIGH WORD AR-RUB..ARABIC SMALL HIGH SIGN SAFHA
		(0x08E3 <= code && code <= 0x0902) || // Mn  [32] ARABIC TURNED DAMMA BELOW..DEVANAGARI SIGN ANUSVARA
		0x093A == code || // Mn       DEVANAGARI VOWEL SIGN OE
		0x093C == code || // Mn       DEVANAGARI SIGN NUKTA
		(0x0941 <= code && code <= 0x0948) || // Mn   [8] DEVANAGARI VOWEL SIGN U..DEVANAGARI VOWEL SIGN AI
		0x094D == code || // Mn       DEVANAGARI SIGN VIRAMA
		(0x0951 <= code && code <= 0x0957) || // Mn   [7] DEVANAGARI STRESS SIGN UDATTA..DEVANAGARI VOWEL SIGN UUE
		(0x0962 <= code && code <= 0x0963) || // Mn   [2] DEVANAGARI VOWEL SIGN VOCALIC L..DEVANAGARI VOWEL SIGN VOCALIC LL
		0x0981 == code || // Mn       BENGALI SIGN CANDRABINDU
		0x09BC == code || // Mn       BENGALI SIGN NUKTA
		0x09BE == code || // Mc       BENGALI VOWEL SIGN AA
		(0x09C1 <= code && code <= 0x09C4) || // Mn   [4] BENGALI VOWEL SIGN U..BENGALI VOWEL SIGN VOCALIC RR
		0x09CD == code || // Mn       BENGALI SIGN VIRAMA
		0x09D7 == code || // Mc       BENGALI AU LENGTH MARK
		(0x09E2 <= code && code <= 0x09E3) || // Mn   [2] BENGALI VOWEL SIGN VOCALIC L..BENGALI VOWEL SIGN VOCALIC LL
		(0x0A01 <= code && code <= 0x0A02) || // Mn   [2] GURMUKHI SIGN ADAK BINDI..GURMUKHI SIGN BINDI
		0x0A3C == code || // Mn       GURMUKHI SIGN NUKTA
		(0x0A41 <= code && code <= 0x0A42) || // Mn   [2] GURMUKHI VOWEL SIGN U..GURMUKHI VOWEL SIGN UU
		(0x0A47 <= code && code <= 0x0A48) || // Mn   [2] GURMUKHI VOWEL SIGN EE..GURMUKHI VOWEL SIGN AI
		(0x0A4B <= code && code <= 0x0A4D) || // Mn   [3] GURMUKHI VOWEL SIGN OO..GURMUKHI SIGN VIRAMA
		0x0A51 == code || // Mn       GURMUKHI SIGN UDAAT
		(0x0A70 <= code && code <= 0x0A71) || // Mn   [2] GURMUKHI TIPPI..GURMUKHI ADDAK
		0x0A75 == code || // Mn       GURMUKHI SIGN YAKASH
		(0x0A81 <= code && code <= 0x0A82) || // Mn   [2] GUJARATI SIGN CANDRABINDU..GUJARATI SIGN ANUSVARA
		0x0ABC == code || // Mn       GUJARATI SIGN NUKTA
		(0x0AC1 <= code && code <= 0x0AC5) || // Mn   [5] GUJARATI VOWEL SIGN U..GUJARATI VOWEL SIGN CANDRA E
		(0x0AC7 <= code && code <= 0x0AC8) || // Mn   [2] GUJARATI VOWEL SIGN E..GUJARATI VOWEL SIGN AI
		0x0ACD == code || // Mn       GUJARATI SIGN VIRAMA
		(0x0AE2 <= code && code <= 0x0AE3) || // Mn   [2] GUJARATI VOWEL SIGN VOCALIC L..GUJARATI VOWEL SIGN VOCALIC LL
		(0x0AFA <= code && code <= 0x0AFF) || // Mn   [6] GUJARATI SIGN SUKUN..GUJARATI SIGN TWO-CIRCLE NUKTA ABOVE
		0x0B01 == code || // Mn       ORIYA SIGN CANDRABINDU
		0x0B3C == code || // Mn       ORIYA SIGN NUKTA
		0x0B3E == code || // Mc       ORIYA VOWEL SIGN AA
		0x0B3F == code || // Mn       ORIYA VOWEL SIGN I
		(0x0B41 <= code && code <= 0x0B44) || // Mn   [4] ORIYA VOWEL SIGN U..ORIYA VOWEL SIGN VOCALIC RR
		0x0B4D == code || // Mn       ORIYA SIGN VIRAMA
		0x0B56 == code || // Mn       ORIYA AI LENGTH MARK
		0x0B57 == code || // Mc       ORIYA AU LENGTH MARK
		(0x0B62 <= code && code <= 0x0B63) || // Mn   [2] ORIYA VOWEL SIGN VOCALIC L..ORIYA VOWEL SIGN VOCALIC LL
		0x0B82 == code || // Mn       TAMIL SIGN ANUSVARA
		0x0BBE == code || // Mc       TAMIL VOWEL SIGN AA
		0x0BC0 == code || // Mn       TAMIL VOWEL SIGN II
		0x0BCD == code || // Mn       TAMIL SIGN VIRAMA
		0x0BD7 == code || // Mc       TAMIL AU LENGTH MARK
		0x0C00 == code || // Mn       TELUGU SIGN COMBINING CANDRABINDU ABOVE
		(0x0C3E <= code && code <= 0x0C40) || // Mn   [3] TELUGU VOWEL SIGN AA..TELUGU VOWEL SIGN II
		(0x0C46 <= code && code <= 0x0C48) || // Mn   [3] TELUGU VOWEL SIGN E..TELUGU VOWEL SIGN AI
		(0x0C4A <= code && code <= 0x0C4D) || // Mn   [4] TELUGU VOWEL SIGN O..TELUGU SIGN VIRAMA
		(0x0C55 <= code && code <= 0x0C56) || // Mn   [2] TELUGU LENGTH MARK..TELUGU AI LENGTH MARK
		(0x0C62 <= code && code <= 0x0C63) || // Mn   [2] TELUGU VOWEL SIGN VOCALIC L..TELUGU VOWEL SIGN VOCALIC LL
		0x0C81 == code || // Mn       KANNADA SIGN CANDRABINDU
		0x0CBC == code || // Mn       KANNADA SIGN NUKTA
		0x0CBF == code || // Mn       KANNADA VOWEL SIGN I
		0x0CC2 == code || // Mc       KANNADA VOWEL SIGN UU
		0x0CC6 == code || // Mn       KANNADA VOWEL SIGN E
		(0x0CCC <= code && code <= 0x0CCD) || // Mn   [2] KANNADA VOWEL SIGN AU..KANNADA SIGN VIRAMA
		(0x0CD5 <= code && code <= 0x0CD6) || // Mc   [2] KANNADA LENGTH MARK..KANNADA AI LENGTH MARK
		(0x0CE2 <= code && code <= 0x0CE3) || // Mn   [2] KANNADA VOWEL SIGN VOCALIC L..KANNADA VOWEL SIGN VOCALIC LL
		(0x0D00 <= code && code <= 0x0D01) || // Mn   [2] MALAYALAM SIGN COMBINING ANUSVARA ABOVE..MALAYALAM SIGN CANDRABINDU
		(0x0D3B <= code && code <= 0x0D3C) || // Mn   [2] MALAYALAM SIGN VERTICAL BAR VIRAMA..MALAYALAM SIGN CIRCULAR VIRAMA
		0x0D3E == code || // Mc       MALAYALAM VOWEL SIGN AA
		(0x0D41 <= code && code <= 0x0D44) || // Mn   [4] MALAYALAM VOWEL SIGN U..MALAYALAM VOWEL SIGN VOCALIC RR
		0x0D4D == code || // Mn       MALAYALAM SIGN VIRAMA
		0x0D57 == code || // Mc       MALAYALAM AU LENGTH MARK
		(0x0D62 <= code && code <= 0x0D63) || // Mn   [2] MALAYALAM VOWEL SIGN VOCALIC L..MALAYALAM VOWEL SIGN VOCALIC LL
		0x0DCA == code || // Mn       SINHALA SIGN AL-LAKUNA
		0x0DCF == code || // Mc       SINHALA VOWEL SIGN AELA-PILLA
		(0x0DD2 <= code && code <= 0x0DD4) || // Mn   [3] SINHALA VOWEL SIGN KETTI IS-PILLA..SINHALA VOWEL SIGN KETTI PAA-PILLA
		0x0DD6 == code || // Mn       SINHALA VOWEL SIGN DIGA PAA-PILLA
		0x0DDF == code || // Mc       SINHALA VOWEL SIGN GAYANUKITTA
		0x0E31 == code || // Mn       THAI CHARACTER MAI HAN-AKAT
		(0x0E34 <= code && code <= 0x0E3A) || // Mn   [7] THAI CHARACTER SARA I..THAI CHARACTER PHINTHU
		(0x0E47 <= code && code <= 0x0E4E) || // Mn   [8] THAI CHARACTER MAITAIKHU..THAI CHARACTER YAMAKKAN
		0x0EB1 == code || // Mn       LAO VOWEL SIGN MAI KAN
		(0x0EB4 <= code && code <= 0x0EB9) || // Mn   [6] LAO VOWEL SIGN I..LAO VOWEL SIGN UU
		(0x0EBB <= code && code <= 0x0EBC) || // Mn   [2] LAO VOWEL SIGN MAI KON..LAO SEMIVOWEL SIGN LO
		(0x0EC8 <= code && code <= 0x0ECD) || // Mn   [6] LAO TONE MAI EK..LAO NIGGAHITA
		(0x0F18 <= code && code <= 0x0F19) || // Mn   [2] TIBETAN ASTROLOGICAL SIGN -KHYUD PA..TIBETAN ASTROLOGICAL SIGN SDONG TSHUGS
		0x0F35 == code || // Mn       TIBETAN MARK NGAS BZUNG NYI ZLA
		0x0F37 == code || // Mn       TIBETAN MARK NGAS BZUNG SGOR RTAGS
		0x0F39 == code || // Mn       TIBETAN MARK TSA -PHRU
		(0x0F71 <= code && code <= 0x0F7E) || // Mn  [14] TIBETAN VOWEL SIGN AA..TIBETAN SIGN RJES SU NGA RO
		(0x0F80 <= code && code <= 0x0F84) || // Mn   [5] TIBETAN VOWEL SIGN REVERSED I..TIBETAN MARK HALANTA
		(0x0F86 <= code && code <= 0x0F87) || // Mn   [2] TIBETAN SIGN LCI RTAGS..TIBETAN SIGN YANG RTAGS
		(0x0F8D <= code && code <= 0x0F97) || // Mn  [11] TIBETAN SUBJOINED SIGN LCE TSA CAN..TIBETAN SUBJOINED LETTER JA
		(0x0F99 <= code && code <= 0x0FBC) || // Mn  [36] TIBETAN SUBJOINED LETTER NYA..TIBETAN SUBJOINED LETTER FIXED-FORM RA
		0x0FC6 == code || // Mn       TIBETAN SYMBOL PADMA GDAN
		(0x102D <= code && code <= 0x1030) || // Mn   [4] MYANMAR VOWEL SIGN I..MYANMAR VOWEL SIGN UU
		(0x1032 <= code && code <= 0x1037) || // Mn   [6] MYANMAR VOWEL SIGN AI..MYANMAR SIGN DOT BELOW
		(0x1039 <= code && code <= 0x103A) || // Mn   [2] MYANMAR SIGN VIRAMA..MYANMAR SIGN ASAT
		(0x103D <= code && code <= 0x103E) || // Mn   [2] MYANMAR CONSONANT SIGN MEDIAL WA..MYANMAR CONSONANT SIGN MEDIAL HA
		(0x1058 <= code && code <= 0x1059) || // Mn   [2] MYANMAR VOWEL SIGN VOCALIC L..MYANMAR VOWEL SIGN VOCALIC LL
		(0x105E <= code && code <= 0x1060) || // Mn   [3] MYANMAR CONSONANT SIGN MON MEDIAL NA..MYANMAR CONSONANT SIGN MON MEDIAL LA
		(0x1071 <= code && code <= 0x1074) || // Mn   [4] MYANMAR VOWEL SIGN GEBA KAREN I..MYANMAR VOWEL SIGN KAYAH EE
		0x1082 == code || // Mn       MYANMAR CONSONANT SIGN SHAN MEDIAL WA
		(0x1085 <= code && code <= 0x1086) || // Mn   [2] MYANMAR VOWEL SIGN SHAN E ABOVE..MYANMAR VOWEL SIGN SHAN FINAL Y
		0x108D == code || // Mn       MYANMAR SIGN SHAN COUNCIL EMPHATIC TONE
		0x109D == code || // Mn       MYANMAR VOWEL SIGN AITON AI
		(0x135D <= code && code <= 0x135F) || // Mn   [3] ETHIOPIC COMBINING GEMINATION AND VOWEL LENGTH MARK..ETHIOPIC COMBINING GEMINATION MARK
		(0x1712 <= code && code <= 0x1714) || // Mn   [3] TAGALOG VOWEL SIGN I..TAGALOG SIGN VIRAMA
		(0x1732 <= code && code <= 0x1734) || // Mn   [3] HANUNOO VOWEL SIGN I..HANUNOO SIGN PAMUDPOD
		(0x1752 <= code && code <= 0x1753) || // Mn   [2] BUHID VOWEL SIGN I..BUHID VOWEL SIGN U
		(0x1772 <= code && code <= 0x1773) || // Mn   [2] TAGBANWA VOWEL SIGN I..TAGBANWA VOWEL SIGN U
		(0x17B4 <= code && code <= 0x17B5) || // Mn   [2] KHMER VOWEL INHERENT AQ..KHMER VOWEL INHERENT AA
		(0x17B7 <= code && code <= 0x17BD) || // Mn   [7] KHMER VOWEL SIGN I..KHMER VOWEL SIGN UA
		0x17C6 == code || // Mn       KHMER SIGN NIKAHIT
		(0x17C9 <= code && code <= 0x17D3) || // Mn  [11] KHMER SIGN MUUSIKATOAN..KHMER SIGN BATHAMASAT
		0x17DD == code || // Mn       KHMER SIGN ATTHACAN
		(0x180B <= code && code <= 0x180D) || // Mn   [3] MONGOLIAN FREE VARIATION SELECTOR ONE..MONGOLIAN FREE VARIATION SELECTOR THREE
		(0x1885 <= code && code <= 0x1886) || // Mn   [2] MONGOLIAN LETTER ALI GALI BALUDA..MONGOLIAN LETTER ALI GALI THREE BALUDA
		0x18A9 == code || // Mn       MONGOLIAN LETTER ALI GALI DAGALGA
		(0x1920 <= code && code <= 0x1922) || // Mn   [3] LIMBU VOWEL SIGN A..LIMBU VOWEL SIGN U
		(0x1927 <= code && code <= 0x1928) || // Mn   [2] LIMBU VOWEL SIGN E..LIMBU VOWEL SIGN O
		0x1932 == code || // Mn       LIMBU SMALL LETTER ANUSVARA
		(0x1939 <= code && code <= 0x193B) || // Mn   [3] LIMBU SIGN MUKPHRENG..LIMBU SIGN SA-I
		(0x1A17 <= code && code <= 0x1A18) || // Mn   [2] BUGINESE VOWEL SIGN I..BUGINESE VOWEL SIGN U
		0x1A1B == code || // Mn       BUGINESE VOWEL SIGN AE
		0x1A56 == code || // Mn       TAI THAM CONSONANT SIGN MEDIAL LA
		(0x1A58 <= code && code <= 0x1A5E) || // Mn   [7] TAI THAM SIGN MAI KANG LAI..TAI THAM CONSONANT SIGN SA
		0x1A60 == code || // Mn       TAI THAM SIGN SAKOT
		0x1A62 == code || // Mn       TAI THAM VOWEL SIGN MAI SAT
		(0x1A65 <= code && code <= 0x1A6C) || // Mn   [8] TAI THAM VOWEL SIGN I..TAI THAM VOWEL SIGN OA BELOW
		(0x1A73 <= code && code <= 0x1A7C) || // Mn  [10] TAI THAM VOWEL SIGN OA ABOVE..TAI THAM SIGN KHUEN-LUE KARAN
		0x1A7F == code || // Mn       TAI THAM COMBINING CRYPTOGRAMMIC DOT
		(0x1AB0 <= code && code <= 0x1ABD) || // Mn  [14] COMBINING DOUBLED CIRCUMFLEX ACCENT..COMBINING PARENTHESES BELOW
		0x1ABE == code || // Me       COMBINING PARENTHESES OVERLAY
		(0x1B00 <= code && code <= 0x1B03) || // Mn   [4] BALINESE SIGN ULU RICEM..BALINESE SIGN SURANG
		0x1B34 == code || // Mn       BALINESE SIGN REREKAN
		(0x1B36 <= code && code <= 0x1B3A) || // Mn   [5] BALINESE VOWEL SIGN ULU..BALINESE VOWEL SIGN RA REPA
		0x1B3C == code || // Mn       BALINESE VOWEL SIGN LA LENGA
		0x1B42 == code || // Mn       BALINESE VOWEL SIGN PEPET
		(0x1B6B <= code && code <= 0x1B73) || // Mn   [9] BALINESE MUSICAL SYMBOL COMBINING TEGEH..BALINESE MUSICAL SYMBOL COMBINING GONG
		(0x1B80 <= code && code <= 0x1B81) || // Mn   [2] SUNDANESE SIGN PANYECEK..SUNDANESE SIGN PANGLAYAR
		(0x1BA2 <= code && code <= 0x1BA5) || // Mn   [4] SUNDANESE CONSONANT SIGN PANYAKRA..SUNDANESE VOWEL SIGN PANYUKU
		(0x1BA8 <= code && code <= 0x1BA9) || // Mn   [2] SUNDANESE VOWEL SIGN PAMEPET..SUNDANESE VOWEL SIGN PANEULEUNG
		(0x1BAB <= code && code <= 0x1BAD) || // Mn   [3] SUNDANESE SIGN VIRAMA..SUNDANESE CONSONANT SIGN PASANGAN WA
		0x1BE6 == code || // Mn       BATAK SIGN TOMPI
		(0x1BE8 <= code && code <= 0x1BE9) || // Mn   [2] BATAK VOWEL SIGN PAKPAK E..BATAK VOWEL SIGN EE
		0x1BED == code || // Mn       BATAK VOWEL SIGN KARO O
		(0x1BEF <= code && code <= 0x1BF1) || // Mn   [3] BATAK VOWEL SIGN U FOR SIMALUNGUN SA..BATAK CONSONANT SIGN H
		(0x1C2C <= code && code <= 0x1C33) || // Mn   [8] LEPCHA VOWEL SIGN E..LEPCHA CONSONANT SIGN T
		(0x1C36 <= code && code <= 0x1C37) || // Mn   [2] LEPCHA SIGN RAN..LEPCHA SIGN NUKTA
		(0x1CD0 <= code && code <= 0x1CD2) || // Mn   [3] VEDIC TONE KARSHANA..VEDIC TONE PRENKHA
		(0x1CD4 <= code && code <= 0x1CE0) || // Mn  [13] VEDIC SIGN YAJURVEDIC MIDLINE SVARITA..VEDIC TONE RIGVEDIC KASHMIRI INDEPENDENT SVARITA
		(0x1CE2 <= code && code <= 0x1CE8) || // Mn   [7] VEDIC SIGN VISARGA SVARITA..VEDIC SIGN VISARGA ANUDATTA WITH TAIL
		0x1CED == code || // Mn       VEDIC SIGN TIRYAK
		0x1CF4 == code || // Mn       VEDIC TONE CANDRA ABOVE
		(0x1CF8 <= code && code <= 0x1CF9) || // Mn   [2] VEDIC TONE RING ABOVE..VEDIC TONE DOUBLE RING ABOVE
		(0x1DC0 <= code && code <= 0x1DF9) || // Mn  [58] COMBINING DOTTED GRAVE ACCENT..COMBINING WIDE INVERTED BRIDGE BELOW
		(0x1DFB <= code && code <= 0x1DFF) || // Mn   [5] COMBINING DELETION MARK..COMBINING RIGHT ARROWHEAD AND DOWN ARROWHEAD BELOW
		0x200C == code || // Cf       ZERO WIDTH NON-JOINER
		(0x20D0 <= code && code <= 0x20DC) || // Mn  [13] COMBINING LEFT HARPOON ABOVE..COMBINING FOUR DOTS ABOVE
		(0x20DD <= code && code <= 0x20E0) || // Me   [4] COMBINING ENCLOSING CIRCLE..COMBINING ENCLOSING CIRCLE BACKSLASH
		0x20E1 == code || // Mn       COMBINING LEFT RIGHT ARROW ABOVE
		(0x20E2 <= code && code <= 0x20E4) || // Me   [3] COMBINING ENCLOSING SCREEN..COMBINING ENCLOSING UPWARD POINTING TRIANGLE
		(0x20E5 <= code && code <= 0x20F0) || // Mn  [12] COMBINING REVERSE SOLIDUS OVERLAY..COMBINING ASTERISK ABOVE
		(0x2CEF <= code && code <= 0x2CF1) || // Mn   [3] COPTIC COMBINING NI ABOVE..COPTIC COMBINING SPIRITUS LENIS
		0x2D7F == code || // Mn       TIFINAGH CONSONANT JOINER
		(0x2DE0 <= code && code <= 0x2DFF) || // Mn  [32] COMBINING CYRILLIC LETTER BE..COMBINING CYRILLIC LETTER IOTIFIED BIG YUS
		(0x302A <= code && code <= 0x302D) || // Mn   [4] IDEOGRAPHIC LEVEL TONE MARK..IDEOGRAPHIC ENTERING TONE MARK
		(0x302E <= code && code <= 0x302F) || // Mc   [2] HANGUL SINGLE DOT TONE MARK..HANGUL DOUBLE DOT TONE MARK
		(0x3099 <= code && code <= 0x309A) || // Mn   [2] COMBINING KATAKANA-HIRAGANA VOICED SOUND MARK..COMBINING KATAKANA-HIRAGANA SEMI-VOICED SOUND MARK
		0xA66F == code || // Mn       COMBINING CYRILLIC VZMET
		(0xA670 <= code && code <= 0xA672) || // Me   [3] COMBINING CYRILLIC TEN MILLIONS SIGN..COMBINING CYRILLIC THOUSAND MILLIONS SIGN
		(0xA674 <= code && code <= 0xA67D) || // Mn  [10] COMBINING CYRILLIC LETTER UKRAINIAN IE..COMBINING CYRILLIC PAYEROK
		(0xA69E <= code && code <= 0xA69F) || // Mn   [2] COMBINING CYRILLIC LETTER EF..COMBINING CYRILLIC LETTER IOTIFIED E
		(0xA6F0 <= code && code <= 0xA6F1) || // Mn   [2] BAMUM COMBINING MARK KOQNDON..BAMUM COMBINING MARK TUKWENTIS
		0xA802 == code || // Mn       SYLOTI NAGRI SIGN DVISVARA
		0xA806 == code || // Mn       SYLOTI NAGRI SIGN HASANTA
		0xA80B == code || // Mn       SYLOTI NAGRI SIGN ANUSVARA
		(0xA825 <= code && code <= 0xA826) || // Mn   [2] SYLOTI NAGRI VOWEL SIGN U..SYLOTI NAGRI VOWEL SIGN E
		(0xA8C4 <= code && code <= 0xA8C5) || // Mn   [2] SAURASHTRA SIGN VIRAMA..SAURASHTRA SIGN CANDRABINDU
		(0xA8E0 <= code && code <= 0xA8F1) || // Mn  [18] COMBINING DEVANAGARI DIGIT ZERO..COMBINING DEVANAGARI SIGN AVAGRAHA
		(0xA926 <= code && code <= 0xA92D) || // Mn   [8] KAYAH LI VOWEL UE..KAYAH LI TONE CALYA PLOPHU
		(0xA947 <= code && code <= 0xA951) || // Mn  [11] REJANG VOWEL SIGN I..REJANG CONSONANT SIGN R
		(0xA980 <= code && code <= 0xA982) || // Mn   [3] JAVANESE SIGN PANYANGGA..JAVANESE SIGN LAYAR
		0xA9B3 == code || // Mn       JAVANESE SIGN CECAK TELU
		(0xA9B6 <= code && code <= 0xA9B9) || // Mn   [4] JAVANESE VOWEL SIGN WULU..JAVANESE VOWEL SIGN SUKU MENDUT
		0xA9BC == code || // Mn       JAVANESE VOWEL SIGN PEPET
		0xA9E5 == code || // Mn       MYANMAR SIGN SHAN SAW
		(0xAA29 <= code && code <= 0xAA2E) || // Mn   [6] CHAM VOWEL SIGN AA..CHAM VOWEL SIGN OE
		(0xAA31 <= code && code <= 0xAA32) || // Mn   [2] CHAM VOWEL SIGN AU..CHAM VOWEL SIGN UE
		(0xAA35 <= code && code <= 0xAA36) || // Mn   [2] CHAM CONSONANT SIGN LA..CHAM CONSONANT SIGN WA
		0xAA43 == code || // Mn       CHAM CONSONANT SIGN FINAL NG
		0xAA4C == code || // Mn       CHAM CONSONANT SIGN FINAL M
		0xAA7C == code || // Mn       MYANMAR SIGN TAI LAING TONE-2
		0xAAB0 == code || // Mn       TAI VIET MAI KANG
		(0xAAB2 <= code && code <= 0xAAB4) || // Mn   [3] TAI VIET VOWEL I..TAI VIET VOWEL U
		(0xAAB7 <= code && code <= 0xAAB8) || // Mn   [2] TAI VIET MAI KHIT..TAI VIET VOWEL IA
		(0xAABE <= code && code <= 0xAABF) || // Mn   [2] TAI VIET VOWEL AM..TAI VIET TONE MAI EK
		0xAAC1 == code || // Mn       TAI VIET TONE MAI THO
		(0xAAEC <= code && code <= 0xAAED) || // Mn   [2] MEETEI MAYEK VOWEL SIGN UU..MEETEI MAYEK VOWEL SIGN AAI
		0xAAF6 == code || // Mn       MEETEI MAYEK VIRAMA
		0xABE5 == code || // Mn       MEETEI MAYEK VOWEL SIGN ANAP
		0xABE8 == code || // Mn       MEETEI MAYEK VOWEL SIGN UNAP
		0xABED == code || // Mn       MEETEI MAYEK APUN IYEK
		0xFB1E == code || // Mn       HEBREW POINT JUDEO-SPANISH VARIKA
		(0xFE00 <= code && code <= 0xFE0F) || // Mn  [16] VARIATION SELECTOR-1..VARIATION SELECTOR-16
		(0xFE20 <= code && code <= 0xFE2F) || // Mn  [16] COMBINING LIGATURE LEFT HALF..COMBINING CYRILLIC TITLO RIGHT HALF
		(0xFF9E <= code && code <= 0xFF9F) || // Lm   [2] HALFWIDTH KATAKANA VOICED SOUND MARK..HALFWIDTH KATAKANA SEMI-VOICED SOUND MARK
		0x101FD == code || // Mn       PHAISTOS DISC SIGN COMBINING OBLIQUE STROKE
		0x102E0 == code || // Mn       COPTIC EPACT THOUSANDS MARK
		(0x10376 <= code && code <= 0x1037A) || // Mn   [5] COMBINING OLD PERMIC LETTER AN..COMBINING OLD PERMIC LETTER SII
		(0x10A01 <= code && code <= 0x10A03) || // Mn   [3] KHAROSHTHI VOWEL SIGN I..KHAROSHTHI VOWEL SIGN VOCALIC R
		(0x10A05 <= code && code <= 0x10A06) || // Mn   [2] KHAROSHTHI VOWEL SIGN E..KHAROSHTHI VOWEL SIGN O
		(0x10A0C <= code && code <= 0x10A0F) || // Mn   [4] KHAROSHTHI VOWEL LENGTH MARK..KHAROSHTHI SIGN VISARGA
		(0x10A38 <= code && code <= 0x10A3A) || // Mn   [3] KHAROSHTHI SIGN BAR ABOVE..KHAROSHTHI SIGN DOT BELOW
		0x10A3F == code || // Mn       KHAROSHTHI VIRAMA
		(0x10AE5 <= code && code <= 0x10AE6) || // Mn   [2] MANICHAEAN ABBREVIATION MARK ABOVE..MANICHAEAN ABBREVIATION MARK BELOW
		0x11001 == code || // Mn       BRAHMI SIGN ANUSVARA
		(0x11038 <= code && code <= 0x11046) || // Mn  [15] BRAHMI VOWEL SIGN AA..BRAHMI VIRAMA
		(0x1107F <= code && code <= 0x11081) || // Mn   [3] BRAHMI NUMBER JOINER..KAITHI SIGN ANUSVARA
		(0x110B3 <= code && code <= 0x110B6) || // Mn   [4] KAITHI VOWEL SIGN U..KAITHI VOWEL SIGN AI
		(0x110B9 <= code && code <= 0x110BA) || // Mn   [2] KAITHI SIGN VIRAMA..KAITHI SIGN NUKTA
		(0x11100 <= code && code <= 0x11102) || // Mn   [3] CHAKMA SIGN CANDRABINDU..CHAKMA SIGN VISARGA
		(0x11127 <= code && code <= 0x1112B) || // Mn   [5] CHAKMA VOWEL SIGN A..CHAKMA VOWEL SIGN UU
		(0x1112D <= code && code <= 0x11134) || // Mn   [8] CHAKMA VOWEL SIGN AI..CHAKMA MAAYYAA
		0x11173 == code || // Mn       MAHAJANI SIGN NUKTA
		(0x11180 <= code && code <= 0x11181) || // Mn   [2] SHARADA SIGN CANDRABINDU..SHARADA SIGN ANUSVARA
		(0x111B6 <= code && code <= 0x111BE) || // Mn   [9] SHARADA VOWEL SIGN U..SHARADA VOWEL SIGN O
		(0x111CA <= code && code <= 0x111CC) || // Mn   [3] SHARADA SIGN NUKTA..SHARADA EXTRA SHORT VOWEL MARK
		(0x1122F <= code && code <= 0x11231) || // Mn   [3] KHOJKI VOWEL SIGN U..KHOJKI VOWEL SIGN AI
		0x11234 == code || // Mn       KHOJKI SIGN ANUSVARA
		(0x11236 <= code && code <= 0x11237) || // Mn   [2] KHOJKI SIGN NUKTA..KHOJKI SIGN SHADDA
		0x1123E == code || // Mn       KHOJKI SIGN SUKUN
		0x112DF == code || // Mn       KHUDAWADI SIGN ANUSVARA
		(0x112E3 <= code && code <= 0x112EA) || // Mn   [8] KHUDAWADI VOWEL SIGN U..KHUDAWADI SIGN VIRAMA
		(0x11300 <= code && code <= 0x11301) || // Mn   [2] GRANTHA SIGN COMBINING ANUSVARA ABOVE..GRANTHA SIGN CANDRABINDU
		0x1133C == code || // Mn       GRANTHA SIGN NUKTA
		0x1133E == code || // Mc       GRANTHA VOWEL SIGN AA
		0x11340 == code || // Mn       GRANTHA VOWEL SIGN II
		0x11357 == code || // Mc       GRANTHA AU LENGTH MARK
		(0x11366 <= code && code <= 0x1136C) || // Mn   [7] COMBINING GRANTHA DIGIT ZERO..COMBINING GRANTHA DIGIT SIX
		(0x11370 <= code && code <= 0x11374) || // Mn   [5] COMBINING GRANTHA LETTER A..COMBINING GRANTHA LETTER PA
		(0x11438 <= code && code <= 0x1143F) || // Mn   [8] NEWA VOWEL SIGN U..NEWA VOWEL SIGN AI
		(0x11442 <= code && code <= 0x11444) || // Mn   [3] NEWA SIGN VIRAMA..NEWA SIGN ANUSVARA
		0x11446 == code || // Mn       NEWA SIGN NUKTA
		0x114B0 == code || // Mc       TIRHUTA VOWEL SIGN AA
		(0x114B3 <= code && code <= 0x114B8) || // Mn   [6] TIRHUTA VOWEL SIGN U..TIRHUTA VOWEL SIGN VOCALIC LL
		0x114BA == code || // Mn       TIRHUTA VOWEL SIGN SHORT E
		0x114BD == code || // Mc       TIRHUTA VOWEL SIGN SHORT O
		(0x114BF <= code && code <= 0x114C0) || // Mn   [2] TIRHUTA SIGN CANDRABINDU..TIRHUTA SIGN ANUSVARA
		(0x114C2 <= code && code <= 0x114C3) || // Mn   [2] TIRHUTA SIGN VIRAMA..TIRHUTA SIGN NUKTA
		0x115AF == code || // Mc       SIDDHAM VOWEL SIGN AA
		(0x115B2 <= code && code <= 0x115B5) || // Mn   [4] SIDDHAM VOWEL SIGN U..SIDDHAM VOWEL SIGN VOCALIC RR
		(0x115BC <= code && code <= 0x115BD) || // Mn   [2] SIDDHAM SIGN CANDRABINDU..SIDDHAM SIGN ANUSVARA
		(0x115BF <= code && code <= 0x115C0) || // Mn   [2] SIDDHAM SIGN VIRAMA..SIDDHAM SIGN NUKTA
		(0x115DC <= code && code <= 0x115DD) || // Mn   [2] SIDDHAM VOWEL SIGN ALTERNATE U..SIDDHAM VOWEL SIGN ALTERNATE UU
		(0x11633 <= code && code <= 0x1163A) || // Mn   [8] MODI VOWEL SIGN U..MODI VOWEL SIGN AI
		0x1163D == code || // Mn       MODI SIGN ANUSVARA
		(0x1163F <= code && code <= 0x11640) || // Mn   [2] MODI SIGN VIRAMA..MODI SIGN ARDHACANDRA
		0x116AB == code || // Mn       TAKRI SIGN ANUSVARA
		0x116AD == code || // Mn       TAKRI VOWEL SIGN AA
		(0x116B0 <= code && code <= 0x116B5) || // Mn   [6] TAKRI VOWEL SIGN U..TAKRI VOWEL SIGN AU
		0x116B7 == code || // Mn       TAKRI SIGN NUKTA
		(0x1171D <= code && code <= 0x1171F) || // Mn   [3] AHOM CONSONANT SIGN MEDIAL LA..AHOM CONSONANT SIGN MEDIAL LIGATING RA
		(0x11722 <= code && code <= 0x11725) || // Mn   [4] AHOM VOWEL SIGN I..AHOM VOWEL SIGN UU
		(0x11727 <= code && code <= 0x1172B) || // Mn   [5] AHOM VOWEL SIGN AW..AHOM SIGN KILLER
		(0x11A01 <= code && code <= 0x11A06) || // Mn   [6] ZANABAZAR SQUARE VOWEL SIGN I..ZANABAZAR SQUARE VOWEL SIGN O
		(0x11A09 <= code && code <= 0x11A0A) || // Mn   [2] ZANABAZAR SQUARE VOWEL SIGN REVERSED I..ZANABAZAR SQUARE VOWEL LENGTH MARK
		(0x11A33 <= code && code <= 0x11A38) || // Mn   [6] ZANABAZAR SQUARE FINAL CONSONANT MARK..ZANABAZAR SQUARE SIGN ANUSVARA
		(0x11A3B <= code && code <= 0x11A3E) || // Mn   [4] ZANABAZAR SQUARE CLUSTER-FINAL LETTER YA..ZANABAZAR SQUARE CLUSTER-FINAL LETTER VA
		0x11A47 == code || // Mn       ZANABAZAR SQUARE SUBJOINER
		(0x11A51 <= code && code <= 0x11A56) || // Mn   [6] SOYOMBO VOWEL SIGN I..SOYOMBO VOWEL SIGN OE
		(0x11A59 <= code && code <= 0x11A5B) || // Mn   [3] SOYOMBO VOWEL SIGN VOCALIC R..SOYOMBO VOWEL LENGTH MARK
		(0x11A8A <= code && code <= 0x11A96) || // Mn  [13] SOYOMBO FINAL CONSONANT SIGN G..SOYOMBO SIGN ANUSVARA
		(0x11A98 <= code && code <= 0x11A99) || // Mn   [2] SOYOMBO GEMINATION MARK..SOYOMBO SUBJOINER
		(0x11C30 <= code && code <= 0x11C36) || // Mn   [7] BHAIKSUKI VOWEL SIGN I..BHAIKSUKI VOWEL SIGN VOCALIC L
		(0x11C38 <= code && code <= 0x11C3D) || // Mn   [6] BHAIKSUKI VOWEL SIGN E..BHAIKSUKI SIGN ANUSVARA
		0x11C3F == code || // Mn       BHAIKSUKI SIGN VIRAMA
		(0x11C92 <= code && code <= 0x11CA7) || // Mn  [22] MARCHEN SUBJOINED LETTER KA..MARCHEN SUBJOINED LETTER ZA
		(0x11CAA <= code && code <= 0x11CB0) || // Mn   [7] MARCHEN SUBJOINED LETTER RA..MARCHEN VOWEL SIGN AA
		(0x11CB2 <= code && code <= 0x11CB3) || // Mn   [2] MARCHEN VOWEL SIGN U..MARCHEN VOWEL SIGN E
		(0x11CB5 <= code && code <= 0x11CB6) || // Mn   [2] MARCHEN SIGN ANUSVARA..MARCHEN SIGN CANDRABINDU
		(0x11D31 <= code && code <= 0x11D36) || // Mn   [6] MASARAM GONDI VOWEL SIGN AA..MASARAM GONDI VOWEL SIGN VOCALIC R
		0x11D3A == code || // Mn       MASARAM GONDI VOWEL SIGN E
		(0x11D3C <= code && code <= 0x11D3D) || // Mn   [2] MASARAM GONDI VOWEL SIGN AI..MASARAM GONDI VOWEL SIGN O
		(0x11D3F <= code && code <= 0x11D45) || // Mn   [7] MASARAM GONDI VOWEL SIGN AU..MASARAM GONDI VIRAMA
		0x11D47 == code || // Mn       MASARAM GONDI RA-KARA
		(0x16AF0 <= code && code <= 0x16AF4) || // Mn   [5] BASSA VAH COMBINING HIGH TONE..BASSA VAH COMBINING HIGH-LOW TONE
		(0x16B30 <= code && code <= 0x16B36) || // Mn   [7] PAHAWH HMONG MARK CIM TUB..PAHAWH HMONG MARK CIM TAUM
		(0x16F8F <= code && code <= 0x16F92) || // Mn   [4] MIAO TONE RIGHT..MIAO TONE BELOW
		(0x1BC9D <= code && code <= 0x1BC9E) || // Mn   [2] DUPLOYAN THICK LETTER SELECTOR..DUPLOYAN DOUBLE MARK
		0x1D165 == code || // Mc       MUSICAL SYMBOL COMBINING STEM
		(0x1D167 <= code && code <= 0x1D169) || // Mn   [3] MUSICAL SYMBOL COMBINING TREMOLO-1..MUSICAL SYMBOL COMBINING TREMOLO-3
		(0x1D16E <= code && code <= 0x1D172) || // Mc   [5] MUSICAL SYMBOL COMBINING FLAG-1..MUSICAL SYMBOL COMBINING FLAG-5
		(0x1D17B <= code && code <= 0x1D182) || // Mn   [8] MUSICAL SYMBOL COMBINING ACCENT..MUSICAL SYMBOL COMBINING LOURE
		(0x1D185 <= code && code <= 0x1D18B) || // Mn   [7] MUSICAL SYMBOL COMBINING DOIT..MUSICAL SYMBOL COMBINING TRIPLE TONGUE
		(0x1D1AA <= code && code <= 0x1D1AD) || // Mn   [4] MUSICAL SYMBOL COMBINING DOWN BOW..MUSICAL SYMBOL COMBINING SNAP PIZZICATO
		(0x1D242 <= code && code <= 0x1D244) || // Mn   [3] COMBINING GREEK MUSICAL TRISEME..COMBINING GREEK MUSICAL PENTASEME
		(0x1DA00 <= code && code <= 0x1DA36) || // Mn  [55] SIGNWRITING HEAD RIM..SIGNWRITING AIR SUCKING IN
		(0x1DA3B <= code && code <= 0x1DA6C) || // Mn  [50] SIGNWRITING MOUTH CLOSED NEUTRAL..SIGNWRITING EXCITEMENT
		0x1DA75 == code || // Mn       SIGNWRITING UPPER BODY TILTING FROM HIP JOINTS
		0x1DA84 == code || // Mn       SIGNWRITING LOCATION HEAD NECK
		(0x1DA9B <= code && code <= 0x1DA9F) || // Mn   [5] SIGNWRITING FILL MODIFIER-2..SIGNWRITING FILL MODIFIER-6
		(0x1DAA1 <= code && code <= 0x1DAAF) || // Mn  [15] SIGNWRITING ROTATION MODIFIER-2..SIGNWRITING ROTATION MODIFIER-16
		(0x1E000 <= code && code <= 0x1E006) || // Mn   [7] COMBINING GLAGOLITIC LETTER AZU..COMBINING GLAGOLITIC LETTER ZHIVETE
		(0x1E008 <= code && code <= 0x1E018) || // Mn  [17] COMBINING GLAGOLITIC LETTER ZEMLJA..COMBINING GLAGOLITIC LETTER HERU
		(0x1E01B <= code && code <= 0x1E021) || // Mn   [7] COMBINING GLAGOLITIC LETTER SHTA..COMBINING GLAGOLITIC LETTER YATI
		(0x1E023 <= code && code <= 0x1E024) || // Mn   [2] COMBINING GLAGOLITIC LETTER YU..COMBINING GLAGOLITIC LETTER SMALL YUS
		(0x1E026 <= code && code <= 0x1E02A) || // Mn   [5] COMBINING GLAGOLITIC LETTER YO..COMBINING GLAGOLITIC LETTER FITA
		(0x1E8D0 <= code && code <= 0x1E8D6) || // Mn   [7] MENDE KIKAKUI COMBINING NUMBER TEENS..MENDE KIKAKUI COMBINING NUMBER MILLIONS
		(0x1E944 <= code && code <= 0x1E94A) || // Mn   [7] ADLAM ALIF LENGTHENER..ADLAM NUKTA
		(0xE0020 <= code && code <= 0xE007F) || // Cf  [96] TAG SPACE..CANCEL TAG
		(0xE0100 <= code && code <= 0xE01EF) // Mn [240] VARIATION SELECTOR-17..VARIATION SELECTOR-256
		){
			return Extend;
		}
		
		
		if(
		(0x1F1E6 <= code && code <= 0x1F1FF) // So  [26] REGIONAL INDICATOR SYMBOL LETTER A..REGIONAL INDICATOR SYMBOL LETTER Z
		){
			return Regional_Indicator;
		}
		
		if(
		0x0903 == code || // Mc       DEVANAGARI SIGN VISARGA
		0x093B == code || // Mc       DEVANAGARI VOWEL SIGN OOE
		(0x093E <= code && code <= 0x0940) || // Mc   [3] DEVANAGARI VOWEL SIGN AA..DEVANAGARI VOWEL SIGN II
		(0x0949 <= code && code <= 0x094C) || // Mc   [4] DEVANAGARI VOWEL SIGN CANDRA O..DEVANAGARI VOWEL SIGN AU
		(0x094E <= code && code <= 0x094F) || // Mc   [2] DEVANAGARI VOWEL SIGN PRISHTHAMATRA E..DEVANAGARI VOWEL SIGN AW
		(0x0982 <= code && code <= 0x0983) || // Mc   [2] BENGALI SIGN ANUSVARA..BENGALI SIGN VISARGA
		(0x09BF <= code && code <= 0x09C0) || // Mc   [2] BENGALI VOWEL SIGN I..BENGALI VOWEL SIGN II
		(0x09C7 <= code && code <= 0x09C8) || // Mc   [2] BENGALI VOWEL SIGN E..BENGALI VOWEL SIGN AI
		(0x09CB <= code && code <= 0x09CC) || // Mc   [2] BENGALI VOWEL SIGN O..BENGALI VOWEL SIGN AU
		0x0A03 == code || // Mc       GURMUKHI SIGN VISARGA
		(0x0A3E <= code && code <= 0x0A40) || // Mc   [3] GURMUKHI VOWEL SIGN AA..GURMUKHI VOWEL SIGN II
		0x0A83 == code || // Mc       GUJARATI SIGN VISARGA
		(0x0ABE <= code && code <= 0x0AC0) || // Mc   [3] GUJARATI VOWEL SIGN AA..GUJARATI VOWEL SIGN II
		0x0AC9 == code || // Mc       GUJARATI VOWEL SIGN CANDRA O
		(0x0ACB <= code && code <= 0x0ACC) || // Mc   [2] GUJARATI VOWEL SIGN O..GUJARATI VOWEL SIGN AU
		(0x0B02 <= code && code <= 0x0B03) || // Mc   [2] ORIYA SIGN ANUSVARA..ORIYA SIGN VISARGA
		0x0B40 == code || // Mc       ORIYA VOWEL SIGN II
		(0x0B47 <= code && code <= 0x0B48) || // Mc   [2] ORIYA VOWEL SIGN E..ORIYA VOWEL SIGN AI
		(0x0B4B <= code && code <= 0x0B4C) || // Mc   [2] ORIYA VOWEL SIGN O..ORIYA VOWEL SIGN AU
		0x0BBF == code || // Mc       TAMIL VOWEL SIGN I
		(0x0BC1 <= code && code <= 0x0BC2) || // Mc   [2] TAMIL VOWEL SIGN U..TAMIL VOWEL SIGN UU
		(0x0BC6 <= code && code <= 0x0BC8) || // Mc   [3] TAMIL VOWEL SIGN E..TAMIL VOWEL SIGN AI
		(0x0BCA <= code && code <= 0x0BCC) || // Mc   [3] TAMIL VOWEL SIGN O..TAMIL VOWEL SIGN AU
		(0x0C01 <= code && code <= 0x0C03) || // Mc   [3] TELUGU SIGN CANDRABINDU..TELUGU SIGN VISARGA
		(0x0C41 <= code && code <= 0x0C44) || // Mc   [4] TELUGU VOWEL SIGN U..TELUGU VOWEL SIGN VOCALIC RR
		(0x0C82 <= code && code <= 0x0C83) || // Mc   [2] KANNADA SIGN ANUSVARA..KANNADA SIGN VISARGA
		0x0CBE == code || // Mc       KANNADA VOWEL SIGN AA
		(0x0CC0 <= code && code <= 0x0CC1) || // Mc   [2] KANNADA VOWEL SIGN II..KANNADA VOWEL SIGN U
		(0x0CC3 <= code && code <= 0x0CC4) || // Mc   [2] KANNADA VOWEL SIGN VOCALIC R..KANNADA VOWEL SIGN VOCALIC RR
		(0x0CC7 <= code && code <= 0x0CC8) || // Mc   [2] KANNADA VOWEL SIGN EE..KANNADA VOWEL SIGN AI
		(0x0CCA <= code && code <= 0x0CCB) || // Mc   [2] KANNADA VOWEL SIGN O..KANNADA VOWEL SIGN OO
		(0x0D02 <= code && code <= 0x0D03) || // Mc   [2] MALAYALAM SIGN ANUSVARA..MALAYALAM SIGN VISARGA
		(0x0D3F <= code && code <= 0x0D40) || // Mc   [2] MALAYALAM VOWEL SIGN I..MALAYALAM VOWEL SIGN II
		(0x0D46 <= code && code <= 0x0D48) || // Mc   [3] MALAYALAM VOWEL SIGN E..MALAYALAM VOWEL SIGN AI
		(0x0D4A <= code && code <= 0x0D4C) || // Mc   [3] MALAYALAM VOWEL SIGN O..MALAYALAM VOWEL SIGN AU
		(0x0D82 <= code && code <= 0x0D83) || // Mc   [2] SINHALA SIGN ANUSVARAYA..SINHALA SIGN VISARGAYA
		(0x0DD0 <= code && code <= 0x0DD1) || // Mc   [2] SINHALA VOWEL SIGN KETTI AEDA-PILLA..SINHALA VOWEL SIGN DIGA AEDA-PILLA
		(0x0DD8 <= code && code <= 0x0DDE) || // Mc   [7] SINHALA VOWEL SIGN GAETTA-PILLA..SINHALA VOWEL SIGN KOMBUVA HAA GAYANUKITTA
		(0x0DF2 <= code && code <= 0x0DF3) || // Mc   [2] SINHALA VOWEL SIGN DIGA GAETTA-PILLA..SINHALA VOWEL SIGN DIGA GAYANUKITTA
		0x0E33 == code || // Lo       THAI CHARACTER SARA AM
		0x0EB3 == code || // Lo       LAO VOWEL SIGN AM
		(0x0F3E <= code && code <= 0x0F3F) || // Mc   [2] TIBETAN SIGN YAR TSHES..TIBETAN SIGN MAR TSHES
		0x0F7F == code || // Mc       TIBETAN SIGN RNAM BCAD
		0x1031 == code || // Mc       MYANMAR VOWEL SIGN E
		(0x103B <= code && code <= 0x103C) || // Mc   [2] MYANMAR CONSONANT SIGN MEDIAL YA..MYANMAR CONSONANT SIGN MEDIAL RA
		(0x1056 <= code && code <= 0x1057) || // Mc   [2] MYANMAR VOWEL SIGN VOCALIC R..MYANMAR VOWEL SIGN VOCALIC RR
		0x1084 == code || // Mc       MYANMAR VOWEL SIGN SHAN E
		0x17B6 == code || // Mc       KHMER VOWEL SIGN AA
		(0x17BE <= code && code <= 0x17C5) || // Mc   [8] KHMER VOWEL SIGN OE..KHMER VOWEL SIGN AU
		(0x17C7 <= code && code <= 0x17C8) || // Mc   [2] KHMER SIGN REAHMUK..KHMER SIGN YUUKALEAPINTU
		(0x1923 <= code && code <= 0x1926) || // Mc   [4] LIMBU VOWEL SIGN EE..LIMBU VOWEL SIGN AU
		(0x1929 <= code && code <= 0x192B) || // Mc   [3] LIMBU SUBJOINED LETTER YA..LIMBU SUBJOINED LETTER WA
		(0x1930 <= code && code <= 0x1931) || // Mc   [2] LIMBU SMALL LETTER KA..LIMBU SMALL LETTER NGA
		(0x1933 <= code && code <= 0x1938) || // Mc   [6] LIMBU SMALL LETTER TA..LIMBU SMALL LETTER LA
		(0x1A19 <= code && code <= 0x1A1A) || // Mc   [2] BUGINESE VOWEL SIGN E..BUGINESE VOWEL SIGN O
		0x1A55 == code || // Mc       TAI THAM CONSONANT SIGN MEDIAL RA
		0x1A57 == code || // Mc       TAI THAM CONSONANT SIGN LA TANG LAI
		(0x1A6D <= code && code <= 0x1A72) || // Mc   [6] TAI THAM VOWEL SIGN OY..TAI THAM VOWEL SIGN THAM AI
		0x1B04 == code || // Mc       BALINESE SIGN BISAH
		0x1B35 == code || // Mc       BALINESE VOWEL SIGN TEDUNG
		0x1B3B == code || // Mc       BALINESE VOWEL SIGN RA REPA TEDUNG
		(0x1B3D <= code && code <= 0x1B41) || // Mc   [5] BALINESE VOWEL SIGN LA LENGA TEDUNG..BALINESE VOWEL SIGN TALING REPA TEDUNG
		(0x1B43 <= code && code <= 0x1B44) || // Mc   [2] BALINESE VOWEL SIGN PEPET TEDUNG..BALINESE ADEG ADEG
		0x1B82 == code || // Mc       SUNDANESE SIGN PANGWISAD
		0x1BA1 == code || // Mc       SUNDANESE CONSONANT SIGN PAMINGKAL
		(0x1BA6 <= code && code <= 0x1BA7) || // Mc   [2] SUNDANESE VOWEL SIGN PANAELAENG..SUNDANESE VOWEL SIGN PANOLONG
		0x1BAA == code || // Mc       SUNDANESE SIGN PAMAAEH
		0x1BE7 == code || // Mc       BATAK VOWEL SIGN E
		(0x1BEA <= code && code <= 0x1BEC) || // Mc   [3] BATAK VOWEL SIGN I..BATAK VOWEL SIGN O
		0x1BEE == code || // Mc       BATAK VOWEL SIGN U
		(0x1BF2 <= code && code <= 0x1BF3) || // Mc   [2] BATAK PANGOLAT..BATAK PANONGONAN
		(0x1C24 <= code && code <= 0x1C2B) || // Mc   [8] LEPCHA SUBJOINED LETTER YA..LEPCHA VOWEL SIGN UU
		(0x1C34 <= code && code <= 0x1C35) || // Mc   [2] LEPCHA CONSONANT SIGN NYIN-DO..LEPCHA CONSONANT SIGN KANG
		0x1CE1 == code || // Mc       VEDIC TONE ATHARVAVEDIC INDEPENDENT SVARITA
		(0x1CF2 <= code && code <= 0x1CF3) || // Mc   [2] VEDIC SIGN ARDHAVISARGA..VEDIC SIGN ROTATED ARDHAVISARGA
		0x1CF7 == code || // Mc       VEDIC SIGN ATIKRAMA
		(0xA823 <= code && code <= 0xA824) || // Mc   [2] SYLOTI NAGRI VOWEL SIGN A..SYLOTI NAGRI VOWEL SIGN I
		0xA827 == code || // Mc       SYLOTI NAGRI VOWEL SIGN OO
		(0xA880 <= code && code <= 0xA881) || // Mc   [2] SAURASHTRA SIGN ANUSVARA..SAURASHTRA SIGN VISARGA
		(0xA8B4 <= code && code <= 0xA8C3) || // Mc  [16] SAURASHTRA CONSONANT SIGN HAARU..SAURASHTRA VOWEL SIGN AU
		(0xA952 <= code && code <= 0xA953) || // Mc   [2] REJANG CONSONANT SIGN H..REJANG VIRAMA
		0xA983 == code || // Mc       JAVANESE SIGN WIGNYAN
		(0xA9B4 <= code && code <= 0xA9B5) || // Mc   [2] JAVANESE VOWEL SIGN TARUNG..JAVANESE VOWEL SIGN TOLONG
		(0xA9BA <= code && code <= 0xA9BB) || // Mc   [2] JAVANESE VOWEL SIGN TALING..JAVANESE VOWEL SIGN DIRGA MURE
		(0xA9BD <= code && code <= 0xA9C0) || // Mc   [4] JAVANESE CONSONANT SIGN KERET..JAVANESE PANGKON
		(0xAA2F <= code && code <= 0xAA30) || // Mc   [2] CHAM VOWEL SIGN O..CHAM VOWEL SIGN AI
		(0xAA33 <= code && code <= 0xAA34) || // Mc   [2] CHAM CONSONANT SIGN YA..CHAM CONSONANT SIGN RA
		0xAA4D == code || // Mc       CHAM CONSONANT SIGN FINAL H
		0xAAEB == code || // Mc       MEETEI MAYEK VOWEL SIGN II
		(0xAAEE <= code && code <= 0xAAEF) || // Mc   [2] MEETEI MAYEK VOWEL SIGN AU..MEETEI MAYEK VOWEL SIGN AAU
		0xAAF5 == code || // Mc       MEETEI MAYEK VOWEL SIGN VISARGA
		(0xABE3 <= code && code <= 0xABE4) || // Mc   [2] MEETEI MAYEK VOWEL SIGN ONAP..MEETEI MAYEK VOWEL SIGN INAP
		(0xABE6 <= code && code <= 0xABE7) || // Mc   [2] MEETEI MAYEK VOWEL SIGN YENAP..MEETEI MAYEK VOWEL SIGN SOUNAP
		(0xABE9 <= code && code <= 0xABEA) || // Mc   [2] MEETEI MAYEK VOWEL SIGN CHEINAP..MEETEI MAYEK VOWEL SIGN NUNG
		0xABEC == code || // Mc       MEETEI MAYEK LUM IYEK
		0x11000 == code || // Mc       BRAHMI SIGN CANDRABINDU
		0x11002 == code || // Mc       BRAHMI SIGN VISARGA
		0x11082 == code || // Mc       KAITHI SIGN VISARGA
		(0x110B0 <= code && code <= 0x110B2) || // Mc   [3] KAITHI VOWEL SIGN AA..KAITHI VOWEL SIGN II
		(0x110B7 <= code && code <= 0x110B8) || // Mc   [2] KAITHI VOWEL SIGN O..KAITHI VOWEL SIGN AU
		0x1112C == code || // Mc       CHAKMA VOWEL SIGN E
		0x11182 == code || // Mc       SHARADA SIGN VISARGA
		(0x111B3 <= code && code <= 0x111B5) || // Mc   [3] SHARADA VOWEL SIGN AA..SHARADA VOWEL SIGN II
		(0x111BF <= code && code <= 0x111C0) || // Mc   [2] SHARADA VOWEL SIGN AU..SHARADA SIGN VIRAMA
		(0x1122C <= code && code <= 0x1122E) || // Mc   [3] KHOJKI VOWEL SIGN AA..KHOJKI VOWEL SIGN II
		(0x11232 <= code && code <= 0x11233) || // Mc   [2] KHOJKI VOWEL SIGN O..KHOJKI VOWEL SIGN AU
		0x11235 == code || // Mc       KHOJKI SIGN VIRAMA
		(0x112E0 <= code && code <= 0x112E2) || // Mc   [3] KHUDAWADI VOWEL SIGN AA..KHUDAWADI VOWEL SIGN II
		(0x11302 <= code && code <= 0x11303) || // Mc   [2] GRANTHA SIGN ANUSVARA..GRANTHA SIGN VISARGA
		0x1133F == code || // Mc       GRANTHA VOWEL SIGN I
		(0x11341 <= code && code <= 0x11344) || // Mc   [4] GRANTHA VOWEL SIGN U..GRANTHA VOWEL SIGN VOCALIC RR
		(0x11347 <= code && code <= 0x11348) || // Mc   [2] GRANTHA VOWEL SIGN EE..GRANTHA VOWEL SIGN AI
		(0x1134B <= code && code <= 0x1134D) || // Mc   [3] GRANTHA VOWEL SIGN OO..GRANTHA SIGN VIRAMA
		(0x11362 <= code && code <= 0x11363) || // Mc   [2] GRANTHA VOWEL SIGN VOCALIC L..GRANTHA VOWEL SIGN VOCALIC LL
		(0x11435 <= code && code <= 0x11437) || // Mc   [3] NEWA VOWEL SIGN AA..NEWA VOWEL SIGN II
		(0x11440 <= code && code <= 0x11441) || // Mc   [2] NEWA VOWEL SIGN O..NEWA VOWEL SIGN AU
		0x11445 == code || // Mc       NEWA SIGN VISARGA
		(0x114B1 <= code && code <= 0x114B2) || // Mc   [2] TIRHUTA VOWEL SIGN I..TIRHUTA VOWEL SIGN II
		0x114B9 == code || // Mc       TIRHUTA VOWEL SIGN E
		(0x114BB <= code && code <= 0x114BC) || // Mc   [2] TIRHUTA VOWEL SIGN AI..TIRHUTA VOWEL SIGN O
		0x114BE == code || // Mc       TIRHUTA VOWEL SIGN AU
		0x114C1 == code || // Mc       TIRHUTA SIGN VISARGA
		(0x115B0 <= code && code <= 0x115B1) || // Mc   [2] SIDDHAM VOWEL SIGN I..SIDDHAM VOWEL SIGN II
		(0x115B8 <= code && code <= 0x115BB) || // Mc   [4] SIDDHAM VOWEL SIGN E..SIDDHAM VOWEL SIGN AU
		0x115BE == code || // Mc       SIDDHAM SIGN VISARGA
		(0x11630 <= code && code <= 0x11632) || // Mc   [3] MODI VOWEL SIGN AA..MODI VOWEL SIGN II
		(0x1163B <= code && code <= 0x1163C) || // Mc   [2] MODI VOWEL SIGN O..MODI VOWEL SIGN AU
		0x1163E == code || // Mc       MODI SIGN VISARGA
		0x116AC == code || // Mc       TAKRI SIGN VISARGA
		(0x116AE <= code && code <= 0x116AF) || // Mc   [2] TAKRI VOWEL SIGN I..TAKRI VOWEL SIGN II
		0x116B6 == code || // Mc       TAKRI SIGN VIRAMA
		(0x11720 <= code && code <= 0x11721) || // Mc   [2] AHOM VOWEL SIGN A..AHOM VOWEL SIGN AA
		0x11726 == code || // Mc       AHOM VOWEL SIGN E
		(0x11A07 <= code && code <= 0x11A08) || // Mc   [2] ZANABAZAR SQUARE VOWEL SIGN AI..ZANABAZAR SQUARE VOWEL SIGN AU
		0x11A39 == code || // Mc       ZANABAZAR SQUARE SIGN VISARGA
		(0x11A57 <= code && code <= 0x11A58) || // Mc   [2] SOYOMBO VOWEL SIGN AI..SOYOMBO VOWEL SIGN AU
		0x11A97 == code || // Mc       SOYOMBO SIGN VISARGA
		0x11C2F == code || // Mc       BHAIKSUKI VOWEL SIGN AA
		0x11C3E == code || // Mc       BHAIKSUKI SIGN VISARGA
		0x11CA9 == code || // Mc       MARCHEN SUBJOINED LETTER YA
		0x11CB1 == code || // Mc       MARCHEN VOWEL SIGN I
		0x11CB4 == code || // Mc       MARCHEN VOWEL SIGN O
		(0x16F51 <= code && code <= 0x16F7E) || // Mc  [46] MIAO SIGN ASPIRATION..MIAO VOWEL SIGN NG
		0x1D166 == code || // Mc       MUSICAL SYMBOL COMBINING SPRECHGESANG STEM
		0x1D16D == code // Mc       MUSICAL SYMBOL COMBINING AUGMENTATION DOT
		){
			return SpacingMark;
		}
		
		
		if(
		(0x1100 <= code && code <= 0x115F) || // Lo  [96] HANGUL CHOSEONG KIYEOK..HANGUL CHOSEONG FILLER
		(0xA960 <= code && code <= 0xA97C) // Lo  [29] HANGUL CHOSEONG TIKEUT-MIEUM..HANGUL CHOSEONG SSANGYEORINHIEUH
		){
			return L;
		}
		
		if(
		(0x1160 <= code && code <= 0x11A7) || // Lo  [72] HANGUL JUNGSEONG FILLER..HANGUL JUNGSEONG O-YAE
		(0xD7B0 <= code && code <= 0xD7C6) // Lo  [23] HANGUL JUNGSEONG O-YEO..HANGUL JUNGSEONG ARAEA-E
		){
			return V;
		}
		
		
		if(
		(0x11A8 <= code && code <= 0x11FF) || // Lo  [88] HANGUL JONGSEONG KIYEOK..HANGUL JONGSEONG SSANGNIEUN
		(0xD7CB <= code && code <= 0xD7FB) // Lo  [49] HANGUL JONGSEONG NIEUN-RIEUL..HANGUL JONGSEONG PHIEUPH-THIEUTH
		){
			return T;
		}
		
		if(
		0xAC00 == code || // Lo       HANGUL SYLLABLE GA
		0xAC1C == code || // Lo       HANGUL SYLLABLE GAE
		0xAC38 == code || // Lo       HANGUL SYLLABLE GYA
		0xAC54 == code || // Lo       HANGUL SYLLABLE GYAE
		0xAC70 == code || // Lo       HANGUL SYLLABLE GEO
		0xAC8C == code || // Lo       HANGUL SYLLABLE GE
		0xACA8 == code || // Lo       HANGUL SYLLABLE GYEO
		0xACC4 == code || // Lo       HANGUL SYLLABLE GYE
		0xACE0 == code || // Lo       HANGUL SYLLABLE GO
		0xACFC == code || // Lo       HANGUL SYLLABLE GWA
		0xAD18 == code || // Lo       HANGUL SYLLABLE GWAE
		0xAD34 == code || // Lo       HANGUL SYLLABLE GOE
		0xAD50 == code || // Lo       HANGUL SYLLABLE GYO
		0xAD6C == code || // Lo       HANGUL SYLLABLE GU
		0xAD88 == code || // Lo       HANGUL SYLLABLE GWEO
		0xADA4 == code || // Lo       HANGUL SYLLABLE GWE
		0xADC0 == code || // Lo       HANGUL SYLLABLE GWI
		0xADDC == code || // Lo       HANGUL SYLLABLE GYU
		0xADF8 == code || // Lo       HANGUL SYLLABLE GEU
		0xAE14 == code || // Lo       HANGUL SYLLABLE GYI
		0xAE30 == code || // Lo       HANGUL SYLLABLE GI
		0xAE4C == code || // Lo       HANGUL SYLLABLE GGA
		0xAE68 == code || // Lo       HANGUL SYLLABLE GGAE
		0xAE84 == code || // Lo       HANGUL SYLLABLE GGYA
		0xAEA0 == code || // Lo       HANGUL SYLLABLE GGYAE
		0xAEBC == code || // Lo       HANGUL SYLLABLE GGEO
		0xAED8 == code || // Lo       HANGUL SYLLABLE GGE
		0xAEF4 == code || // Lo       HANGUL SYLLABLE GGYEO
		0xAF10 == code || // Lo       HANGUL SYLLABLE GGYE
		0xAF2C == code || // Lo       HANGUL SYLLABLE GGO
		0xAF48 == code || // Lo       HANGUL SYLLABLE GGWA
		0xAF64 == code || // Lo       HANGUL SYLLABLE GGWAE
		0xAF80 == code || // Lo       HANGUL SYLLABLE GGOE
		0xAF9C == code || // Lo       HANGUL SYLLABLE GGYO
		0xAFB8 == code || // Lo       HANGUL SYLLABLE GGU
		0xAFD4 == code || // Lo       HANGUL SYLLABLE GGWEO
		0xAFF0 == code || // Lo       HANGUL SYLLABLE GGWE
		0xB00C == code || // Lo       HANGUL SYLLABLE GGWI
		0xB028 == code || // Lo       HANGUL SYLLABLE GGYU
		0xB044 == code || // Lo       HANGUL SYLLABLE GGEU
		0xB060 == code || // Lo       HANGUL SYLLABLE GGYI
		0xB07C == code || // Lo       HANGUL SYLLABLE GGI
		0xB098 == code || // Lo       HANGUL SYLLABLE NA
		0xB0B4 == code || // Lo       HANGUL SYLLABLE NAE
		0xB0D0 == code || // Lo       HANGUL SYLLABLE NYA
		0xB0EC == code || // Lo       HANGUL SYLLABLE NYAE
		0xB108 == code || // Lo       HANGUL SYLLABLE NEO
		0xB124 == code || // Lo       HANGUL SYLLABLE NE
		0xB140 == code || // Lo       HANGUL SYLLABLE NYEO
		0xB15C == code || // Lo       HANGUL SYLLABLE NYE
		0xB178 == code || // Lo       HANGUL SYLLABLE NO
		0xB194 == code || // Lo       HANGUL SYLLABLE NWA
		0xB1B0 == code || // Lo       HANGUL SYLLABLE NWAE
		0xB1CC == code || // Lo       HANGUL SYLLABLE NOE
		0xB1E8 == code || // Lo       HANGUL SYLLABLE NYO
		0xB204 == code || // Lo       HANGUL SYLLABLE NU
		0xB220 == code || // Lo       HANGUL SYLLABLE NWEO
		0xB23C == code || // Lo       HANGUL SYLLABLE NWE
		0xB258 == code || // Lo       HANGUL SYLLABLE NWI
		0xB274 == code || // Lo       HANGUL SYLLABLE NYU
		0xB290 == code || // Lo       HANGUL SYLLABLE NEU
		0xB2AC == code || // Lo       HANGUL SYLLABLE NYI
		0xB2C8 == code || // Lo       HANGUL SYLLABLE NI
		0xB2E4 == code || // Lo       HANGUL SYLLABLE DA
		0xB300 == code || // Lo       HANGUL SYLLABLE DAE
		0xB31C == code || // Lo       HANGUL SYLLABLE DYA
		0xB338 == code || // Lo       HANGUL SYLLABLE DYAE
		0xB354 == code || // Lo       HANGUL SYLLABLE DEO
		0xB370 == code || // Lo       HANGUL SYLLABLE DE
		0xB38C == code || // Lo       HANGUL SYLLABLE DYEO
		0xB3A8 == code || // Lo       HANGUL SYLLABLE DYE
		0xB3C4 == code || // Lo       HANGUL SYLLABLE DO
		0xB3E0 == code || // Lo       HANGUL SYLLABLE DWA
		0xB3FC == code || // Lo       HANGUL SYLLABLE DWAE
		0xB418 == code || // Lo       HANGUL SYLLABLE DOE
		0xB434 == code || // Lo       HANGUL SYLLABLE DYO
		0xB450 == code || // Lo       HANGUL SYLLABLE DU
		0xB46C == code || // Lo       HANGUL SYLLABLE DWEO
		0xB488 == code || // Lo       HANGUL SYLLABLE DWE
		0xB4A4 == code || // Lo       HANGUL SYLLABLE DWI
		0xB4C0 == code || // Lo       HANGUL SYLLABLE DYU
		0xB4DC == code || // Lo       HANGUL SYLLABLE DEU
		0xB4F8 == code || // Lo       HANGUL SYLLABLE DYI
		0xB514 == code || // Lo       HANGUL SYLLABLE DI
		0xB530 == code || // Lo       HANGUL SYLLABLE DDA
		0xB54C == code || // Lo       HANGUL SYLLABLE DDAE
		0xB568 == code || // Lo       HANGUL SYLLABLE DDYA
		0xB584 == code || // Lo       HANGUL SYLLABLE DDYAE
		0xB5A0 == code || // Lo       HANGUL SYLLABLE DDEO
		0xB5BC == code || // Lo       HANGUL SYLLABLE DDE
		0xB5D8 == code || // Lo       HANGUL SYLLABLE DDYEO
		0xB5F4 == code || // Lo       HANGUL SYLLABLE DDYE
		0xB610 == code || // Lo       HANGUL SYLLABLE DDO
		0xB62C == code || // Lo       HANGUL SYLLABLE DDWA
		0xB648 == code || // Lo       HANGUL SYLLABLE DDWAE
		0xB664 == code || // Lo       HANGUL SYLLABLE DDOE
		0xB680 == code || // Lo       HANGUL SYLLABLE DDYO
		0xB69C == code || // Lo       HANGUL SYLLABLE DDU
		0xB6B8 == code || // Lo       HANGUL SYLLABLE DDWEO
		0xB6D4 == code || // Lo       HANGUL SYLLABLE DDWE
		0xB6F0 == code || // Lo       HANGUL SYLLABLE DDWI
		0xB70C == code || // Lo       HANGUL SYLLABLE DDYU
		0xB728 == code || // Lo       HANGUL SYLLABLE DDEU
		0xB744 == code || // Lo       HANGUL SYLLABLE DDYI
		0xB760 == code || // Lo       HANGUL SYLLABLE DDI
		0xB77C == code || // Lo       HANGUL SYLLABLE RA
		0xB798 == code || // Lo       HANGUL SYLLABLE RAE
		0xB7B4 == code || // Lo       HANGUL SYLLABLE RYA
		0xB7D0 == code || // Lo       HANGUL SYLLABLE RYAE
		0xB7EC == code || // Lo       HANGUL SYLLABLE REO
		0xB808 == code || // Lo       HANGUL SYLLABLE RE
		0xB824 == code || // Lo       HANGUL SYLLABLE RYEO
		0xB840 == code || // Lo       HANGUL SYLLABLE RYE
		0xB85C == code || // Lo       HANGUL SYLLABLE RO
		0xB878 == code || // Lo       HANGUL SYLLABLE RWA
		0xB894 == code || // Lo       HANGUL SYLLABLE RWAE
		0xB8B0 == code || // Lo       HANGUL SYLLABLE ROE
		0xB8CC == code || // Lo       HANGUL SYLLABLE RYO
		0xB8E8 == code || // Lo       HANGUL SYLLABLE RU
		0xB904 == code || // Lo       HANGUL SYLLABLE RWEO
		0xB920 == code || // Lo       HANGUL SYLLABLE RWE
		0xB93C == code || // Lo       HANGUL SYLLABLE RWI
		0xB958 == code || // Lo       HANGUL SYLLABLE RYU
		0xB974 == code || // Lo       HANGUL SYLLABLE REU
		0xB990 == code || // Lo       HANGUL SYLLABLE RYI
		0xB9AC == code || // Lo       HANGUL SYLLABLE RI
		0xB9C8 == code || // Lo       HANGUL SYLLABLE MA
		0xB9E4 == code || // Lo       HANGUL SYLLABLE MAE
		0xBA00 == code || // Lo       HANGUL SYLLABLE MYA
		0xBA1C == code || // Lo       HANGUL SYLLABLE MYAE
		0xBA38 == code || // Lo       HANGUL SYLLABLE MEO
		0xBA54 == code || // Lo       HANGUL SYLLABLE ME
		0xBA70 == code || // Lo       HANGUL SYLLABLE MYEO
		0xBA8C == code || // Lo       HANGUL SYLLABLE MYE
		0xBAA8 == code || // Lo       HANGUL SYLLABLE MO
		0xBAC4 == code || // Lo       HANGUL SYLLABLE MWA
		0xBAE0 == code || // Lo       HANGUL SYLLABLE MWAE
		0xBAFC == code || // Lo       HANGUL SYLLABLE MOE
		0xBB18 == code || // Lo       HANGUL SYLLABLE MYO
		0xBB34 == code || // Lo       HANGUL SYLLABLE MU
		0xBB50 == code || // Lo       HANGUL SYLLABLE MWEO
		0xBB6C == code || // Lo       HANGUL SYLLABLE MWE
		0xBB88 == code || // Lo       HANGUL SYLLABLE MWI
		0xBBA4 == code || // Lo       HANGUL SYLLABLE MYU
		0xBBC0 == code || // Lo       HANGUL SYLLABLE MEU
		0xBBDC == code || // Lo       HANGUL SYLLABLE MYI
		0xBBF8 == code || // Lo       HANGUL SYLLABLE MI
		0xBC14 == code || // Lo       HANGUL SYLLABLE BA
		0xBC30 == code || // Lo       HANGUL SYLLABLE BAE
		0xBC4C == code || // Lo       HANGUL SYLLABLE BYA
		0xBC68 == code || // Lo       HANGUL SYLLABLE BYAE
		0xBC84 == code || // Lo       HANGUL SYLLABLE BEO
		0xBCA0 == code || // Lo       HANGUL SYLLABLE BE
		0xBCBC == code || // Lo       HANGUL SYLLABLE BYEO
		0xBCD8 == code || // Lo       HANGUL SYLLABLE BYE
		0xBCF4 == code || // Lo       HANGUL SYLLABLE BO
		0xBD10 == code || // Lo       HANGUL SYLLABLE BWA
		0xBD2C == code || // Lo       HANGUL SYLLABLE BWAE
		0xBD48 == code || // Lo       HANGUL SYLLABLE BOE
		0xBD64 == code || // Lo       HANGUL SYLLABLE BYO
		0xBD80 == code || // Lo       HANGUL SYLLABLE BU
		0xBD9C == code || // Lo       HANGUL SYLLABLE BWEO
		0xBDB8 == code || // Lo       HANGUL SYLLABLE BWE
		0xBDD4 == code || // Lo       HANGUL SYLLABLE BWI
		0xBDF0 == code || // Lo       HANGUL SYLLABLE BYU
		0xBE0C == code || // Lo       HANGUL SYLLABLE BEU
		0xBE28 == code || // Lo       HANGUL SYLLABLE BYI
		0xBE44 == code || // Lo       HANGUL SYLLABLE BI
		0xBE60 == code || // Lo       HANGUL SYLLABLE BBA
		0xBE7C == code || // Lo       HANGUL SYLLABLE BBAE
		0xBE98 == code || // Lo       HANGUL SYLLABLE BBYA
		0xBEB4 == code || // Lo       HANGUL SYLLABLE BBYAE
		0xBED0 == code || // Lo       HANGUL SYLLABLE BBEO
		0xBEEC == code || // Lo       HANGUL SYLLABLE BBE
		0xBF08 == code || // Lo       HANGUL SYLLABLE BBYEO
		0xBF24 == code || // Lo       HANGUL SYLLABLE BBYE
		0xBF40 == code || // Lo       HANGUL SYLLABLE BBO
		0xBF5C == code || // Lo       HANGUL SYLLABLE BBWA
		0xBF78 == code || // Lo       HANGUL SYLLABLE BBWAE
		0xBF94 == code || // Lo       HANGUL SYLLABLE BBOE
		0xBFB0 == code || // Lo       HANGUL SYLLABLE BBYO
		0xBFCC == code || // Lo       HANGUL SYLLABLE BBU
		0xBFE8 == code || // Lo       HANGUL SYLLABLE BBWEO
		0xC004 == code || // Lo       HANGUL SYLLABLE BBWE
		0xC020 == code || // Lo       HANGUL SYLLABLE BBWI
		0xC03C == code || // Lo       HANGUL SYLLABLE BBYU
		0xC058 == code || // Lo       HANGUL SYLLABLE BBEU
		0xC074 == code || // Lo       HANGUL SYLLABLE BBYI
		0xC090 == code || // Lo       HANGUL SYLLABLE BBI
		0xC0AC == code || // Lo       HANGUL SYLLABLE SA
		0xC0C8 == code || // Lo       HANGUL SYLLABLE SAE
		0xC0E4 == code || // Lo       HANGUL SYLLABLE SYA
		0xC100 == code || // Lo       HANGUL SYLLABLE SYAE
		0xC11C == code || // Lo       HANGUL SYLLABLE SEO
		0xC138 == code || // Lo       HANGUL SYLLABLE SE
		0xC154 == code || // Lo       HANGUL SYLLABLE SYEO
		0xC170 == code || // Lo       HANGUL SYLLABLE SYE
		0xC18C == code || // Lo       HANGUL SYLLABLE SO
		0xC1A8 == code || // Lo       HANGUL SYLLABLE SWA
		0xC1C4 == code || // Lo       HANGUL SYLLABLE SWAE
		0xC1E0 == code || // Lo       HANGUL SYLLABLE SOE
		0xC1FC == code || // Lo       HANGUL SYLLABLE SYO
		0xC218 == code || // Lo       HANGUL SYLLABLE SU
		0xC234 == code || // Lo       HANGUL SYLLABLE SWEO
		0xC250 == code || // Lo       HANGUL SYLLABLE SWE
		0xC26C == code || // Lo       HANGUL SYLLABLE SWI
		0xC288 == code || // Lo       HANGUL SYLLABLE SYU
		0xC2A4 == code || // Lo       HANGUL SYLLABLE SEU
		0xC2C0 == code || // Lo       HANGUL SYLLABLE SYI
		0xC2DC == code || // Lo       HANGUL SYLLABLE SI
		0xC2F8 == code || // Lo       HANGUL SYLLABLE SSA
		0xC314 == code || // Lo       HANGUL SYLLABLE SSAE
		0xC330 == code || // Lo       HANGUL SYLLABLE SSYA
		0xC34C == code || // Lo       HANGUL SYLLABLE SSYAE
		0xC368 == code || // Lo       HANGUL SYLLABLE SSEO
		0xC384 == code || // Lo       HANGUL SYLLABLE SSE
		0xC3A0 == code || // Lo       HANGUL SYLLABLE SSYEO
		0xC3BC == code || // Lo       HANGUL SYLLABLE SSYE
		0xC3D8 == code || // Lo       HANGUL SYLLABLE SSO
		0xC3F4 == code || // Lo       HANGUL SYLLABLE SSWA
		0xC410 == code || // Lo       HANGUL SYLLABLE SSWAE
		0xC42C == code || // Lo       HANGUL SYLLABLE SSOE
		0xC448 == code || // Lo       HANGUL SYLLABLE SSYO
		0xC464 == code || // Lo       HANGUL SYLLABLE SSU
		0xC480 == code || // Lo       HANGUL SYLLABLE SSWEO
		0xC49C == code || // Lo       HANGUL SYLLABLE SSWE
		0xC4B8 == code || // Lo       HANGUL SYLLABLE SSWI
		0xC4D4 == code || // Lo       HANGUL SYLLABLE SSYU
		0xC4F0 == code || // Lo       HANGUL SYLLABLE SSEU
		0xC50C == code || // Lo       HANGUL SYLLABLE SSYI
		0xC528 == code || // Lo       HANGUL SYLLABLE SSI
		0xC544 == code || // Lo       HANGUL SYLLABLE A
		0xC560 == code || // Lo       HANGUL SYLLABLE AE
		0xC57C == code || // Lo       HANGUL SYLLABLE YA
		0xC598 == code || // Lo       HANGUL SYLLABLE YAE
		0xC5B4 == code || // Lo       HANGUL SYLLABLE EO
		0xC5D0 == code || // Lo       HANGUL SYLLABLE E
		0xC5EC == code || // Lo       HANGUL SYLLABLE YEO
		0xC608 == code || // Lo       HANGUL SYLLABLE YE
		0xC624 == code || // Lo       HANGUL SYLLABLE O
		0xC640 == code || // Lo       HANGUL SYLLABLE WA
		0xC65C == code || // Lo       HANGUL SYLLABLE WAE
		0xC678 == code || // Lo       HANGUL SYLLABLE OE
		0xC694 == code || // Lo       HANGUL SYLLABLE YO
		0xC6B0 == code || // Lo       HANGUL SYLLABLE U
		0xC6CC == code || // Lo       HANGUL SYLLABLE WEO
		0xC6E8 == code || // Lo       HANGUL SYLLABLE WE
		0xC704 == code || // Lo       HANGUL SYLLABLE WI
		0xC720 == code || // Lo       HANGUL SYLLABLE YU
		0xC73C == code || // Lo       HANGUL SYLLABLE EU
		0xC758 == code || // Lo       HANGUL SYLLABLE YI
		0xC774 == code || // Lo       HANGUL SYLLABLE I
		0xC790 == code || // Lo       HANGUL SYLLABLE JA
		0xC7AC == code || // Lo       HANGUL SYLLABLE JAE
		0xC7C8 == code || // Lo       HANGUL SYLLABLE JYA
		0xC7E4 == code || // Lo       HANGUL SYLLABLE JYAE
		0xC800 == code || // Lo       HANGUL SYLLABLE JEO
		0xC81C == code || // Lo       HANGUL SYLLABLE JE
		0xC838 == code || // Lo       HANGUL SYLLABLE JYEO
		0xC854 == code || // Lo       HANGUL SYLLABLE JYE
		0xC870 == code || // Lo       HANGUL SYLLABLE JO
		0xC88C == code || // Lo       HANGUL SYLLABLE JWA
		0xC8A8 == code || // Lo       HANGUL SYLLABLE JWAE
		0xC8C4 == code || // Lo       HANGUL SYLLABLE JOE
		0xC8E0 == code || // Lo       HANGUL SYLLABLE JYO
		0xC8FC == code || // Lo       HANGUL SYLLABLE JU
		0xC918 == code || // Lo       HANGUL SYLLABLE JWEO
		0xC934 == code || // Lo       HANGUL SYLLABLE JWE
		0xC950 == code || // Lo       HANGUL SYLLABLE JWI
		0xC96C == code || // Lo       HANGUL SYLLABLE JYU
		0xC988 == code || // Lo       HANGUL SYLLABLE JEU
		0xC9A4 == code || // Lo       HANGUL SYLLABLE JYI
		0xC9C0 == code || // Lo       HANGUL SYLLABLE JI
		0xC9DC == code || // Lo       HANGUL SYLLABLE JJA
		0xC9F8 == code || // Lo       HANGUL SYLLABLE JJAE
		0xCA14 == code || // Lo       HANGUL SYLLABLE JJYA
		0xCA30 == code || // Lo       HANGUL SYLLABLE JJYAE
		0xCA4C == code || // Lo       HANGUL SYLLABLE JJEO
		0xCA68 == code || // Lo       HANGUL SYLLABLE JJE
		0xCA84 == code || // Lo       HANGUL SYLLABLE JJYEO
		0xCAA0 == code || // Lo       HANGUL SYLLABLE JJYE
		0xCABC == code || // Lo       HANGUL SYLLABLE JJO
		0xCAD8 == code || // Lo       HANGUL SYLLABLE JJWA
		0xCAF4 == code || // Lo       HANGUL SYLLABLE JJWAE
		0xCB10 == code || // Lo       HANGUL SYLLABLE JJOE
		0xCB2C == code || // Lo       HANGUL SYLLABLE JJYO
		0xCB48 == code || // Lo       HANGUL SYLLABLE JJU
		0xCB64 == code || // Lo       HANGUL SYLLABLE JJWEO
		0xCB80 == code || // Lo       HANGUL SYLLABLE JJWE
		0xCB9C == code || // Lo       HANGUL SYLLABLE JJWI
		0xCBB8 == code || // Lo       HANGUL SYLLABLE JJYU
		0xCBD4 == code || // Lo       HANGUL SYLLABLE JJEU
		0xCBF0 == code || // Lo       HANGUL SYLLABLE JJYI
		0xCC0C == code || // Lo       HANGUL SYLLABLE JJI
		0xCC28 == code || // Lo       HANGUL SYLLABLE CA
		0xCC44 == code || // Lo       HANGUL SYLLABLE CAE
		0xCC60 == code || // Lo       HANGUL SYLLABLE CYA
		0xCC7C == code || // Lo       HANGUL SYLLABLE CYAE
		0xCC98 == code || // Lo       HANGUL SYLLABLE CEO
		0xCCB4 == code || // Lo       HANGUL SYLLABLE CE
		0xCCD0 == code || // Lo       HANGUL SYLLABLE CYEO
		0xCCEC == code || // Lo       HANGUL SYLLABLE CYE
		0xCD08 == code || // Lo       HANGUL SYLLABLE CO
		0xCD24 == code || // Lo       HANGUL SYLLABLE CWA
		0xCD40 == code || // Lo       HANGUL SYLLABLE CWAE
		0xCD5C == code || // Lo       HANGUL SYLLABLE COE
		0xCD78 == code || // Lo       HANGUL SYLLABLE CYO
		0xCD94 == code || // Lo       HANGUL SYLLABLE CU
		0xCDB0 == code || // Lo       HANGUL SYLLABLE CWEO
		0xCDCC == code || // Lo       HANGUL SYLLABLE CWE
		0xCDE8 == code || // Lo       HANGUL SYLLABLE CWI
		0xCE04 == code || // Lo       HANGUL SYLLABLE CYU
		0xCE20 == code || // Lo       HANGUL SYLLABLE CEU
		0xCE3C == code || // Lo       HANGUL SYLLABLE CYI
		0xCE58 == code || // Lo       HANGUL SYLLABLE CI
		0xCE74 == code || // Lo       HANGUL SYLLABLE KA
		0xCE90 == code || // Lo       HANGUL SYLLABLE KAE
		0xCEAC == code || // Lo       HANGUL SYLLABLE KYA
		0xCEC8 == code || // Lo       HANGUL SYLLABLE KYAE
		0xCEE4 == code || // Lo       HANGUL SYLLABLE KEO
		0xCF00 == code || // Lo       HANGUL SYLLABLE KE
		0xCF1C == code || // Lo       HANGUL SYLLABLE KYEO
		0xCF38 == code || // Lo       HANGUL SYLLABLE KYE
		0xCF54 == code || // Lo       HANGUL SYLLABLE KO
		0xCF70 == code || // Lo       HANGUL SYLLABLE KWA
		0xCF8C == code || // Lo       HANGUL SYLLABLE KWAE
		0xCFA8 == code || // Lo       HANGUL SYLLABLE KOE
		0xCFC4 == code || // Lo       HANGUL SYLLABLE KYO
		0xCFE0 == code || // Lo       HANGUL SYLLABLE KU
		0xCFFC == code || // Lo       HANGUL SYLLABLE KWEO
		0xD018 == code || // Lo       HANGUL SYLLABLE KWE
		0xD034 == code || // Lo       HANGUL SYLLABLE KWI
		0xD050 == code || // Lo       HANGUL SYLLABLE KYU
		0xD06C == code || // Lo       HANGUL SYLLABLE KEU
		0xD088 == code || // Lo       HANGUL SYLLABLE KYI
		0xD0A4 == code || // Lo       HANGUL SYLLABLE KI
		0xD0C0 == code || // Lo       HANGUL SYLLABLE TA
		0xD0DC == code || // Lo       HANGUL SYLLABLE TAE
		0xD0F8 == code || // Lo       HANGUL SYLLABLE TYA
		0xD114 == code || // Lo       HANGUL SYLLABLE TYAE
		0xD130 == code || // Lo       HANGUL SYLLABLE TEO
		0xD14C == code || // Lo       HANGUL SYLLABLE TE
		0xD168 == code || // Lo       HANGUL SYLLABLE TYEO
		0xD184 == code || // Lo       HANGUL SYLLABLE TYE
		0xD1A0 == code || // Lo       HANGUL SYLLABLE TO
		0xD1BC == code || // Lo       HANGUL SYLLABLE TWA
		0xD1D8 == code || // Lo       HANGUL SYLLABLE TWAE
		0xD1F4 == code || // Lo       HANGUL SYLLABLE TOE
		0xD210 == code || // Lo       HANGUL SYLLABLE TYO
		0xD22C == code || // Lo       HANGUL SYLLABLE TU
		0xD248 == code || // Lo       HANGUL SYLLABLE TWEO
		0xD264 == code || // Lo       HANGUL SYLLABLE TWE
		0xD280 == code || // Lo       HANGUL SYLLABLE TWI
		0xD29C == code || // Lo       HANGUL SYLLABLE TYU
		0xD2B8 == code || // Lo       HANGUL SYLLABLE TEU
		0xD2D4 == code || // Lo       HANGUL SYLLABLE TYI
		0xD2F0 == code || // Lo       HANGUL SYLLABLE TI
		0xD30C == code || // Lo       HANGUL SYLLABLE PA
		0xD328 == code || // Lo       HANGUL SYLLABLE PAE
		0xD344 == code || // Lo       HANGUL SYLLABLE PYA
		0xD360 == code || // Lo       HANGUL SYLLABLE PYAE
		0xD37C == code || // Lo       HANGUL SYLLABLE PEO
		0xD398 == code || // Lo       HANGUL SYLLABLE PE
		0xD3B4 == code || // Lo       HANGUL SYLLABLE PYEO
		0xD3D0 == code || // Lo       HANGUL SYLLABLE PYE
		0xD3EC == code || // Lo       HANGUL SYLLABLE PO
		0xD408 == code || // Lo       HANGUL SYLLABLE PWA
		0xD424 == code || // Lo       HANGUL SYLLABLE PWAE
		0xD440 == code || // Lo       HANGUL SYLLABLE POE
		0xD45C == code || // Lo       HANGUL SYLLABLE PYO
		0xD478 == code || // Lo       HANGUL SYLLABLE PU
		0xD494 == code || // Lo       HANGUL SYLLABLE PWEO
		0xD4B0 == code || // Lo       HANGUL SYLLABLE PWE
		0xD4CC == code || // Lo       HANGUL SYLLABLE PWI
		0xD4E8 == code || // Lo       HANGUL SYLLABLE PYU
		0xD504 == code || // Lo       HANGUL SYLLABLE PEU
		0xD520 == code || // Lo       HANGUL SYLLABLE PYI
		0xD53C == code || // Lo       HANGUL SYLLABLE PI
		0xD558 == code || // Lo       HANGUL SYLLABLE HA
		0xD574 == code || // Lo       HANGUL SYLLABLE HAE
		0xD590 == code || // Lo       HANGUL SYLLABLE HYA
		0xD5AC == code || // Lo       HANGUL SYLLABLE HYAE
		0xD5C8 == code || // Lo       HANGUL SYLLABLE HEO
		0xD5E4 == code || // Lo       HANGUL SYLLABLE HE
		0xD600 == code || // Lo       HANGUL SYLLABLE HYEO
		0xD61C == code || // Lo       HANGUL SYLLABLE HYE
		0xD638 == code || // Lo       HANGUL SYLLABLE HO
		0xD654 == code || // Lo       HANGUL SYLLABLE HWA
		0xD670 == code || // Lo       HANGUL SYLLABLE HWAE
		0xD68C == code || // Lo       HANGUL SYLLABLE HOE
		0xD6A8 == code || // Lo       HANGUL SYLLABLE HYO
		0xD6C4 == code || // Lo       HANGUL SYLLABLE HU
		0xD6E0 == code || // Lo       HANGUL SYLLABLE HWEO
		0xD6FC == code || // Lo       HANGUL SYLLABLE HWE
		0xD718 == code || // Lo       HANGUL SYLLABLE HWI
		0xD734 == code || // Lo       HANGUL SYLLABLE HYU
		0xD750 == code || // Lo       HANGUL SYLLABLE HEU
		0xD76C == code || // Lo       HANGUL SYLLABLE HYI
		0xD788 == code // Lo       HANGUL SYLLABLE HI
		){
			return LV;
		}
		
		if(
		(0xAC01 <= code && code <= 0xAC1B) || // Lo  [27] HANGUL SYLLABLE GAG..HANGUL SYLLABLE GAH
		(0xAC1D <= code && code <= 0xAC37) || // Lo  [27] HANGUL SYLLABLE GAEG..HANGUL SYLLABLE GAEH
		(0xAC39 <= code && code <= 0xAC53) || // Lo  [27] HANGUL SYLLABLE GYAG..HANGUL SYLLABLE GYAH
		(0xAC55 <= code && code <= 0xAC6F) || // Lo  [27] HANGUL SYLLABLE GYAEG..HANGUL SYLLABLE GYAEH
		(0xAC71 <= code && code <= 0xAC8B) || // Lo  [27] HANGUL SYLLABLE GEOG..HANGUL SYLLABLE GEOH
		(0xAC8D <= code && code <= 0xACA7) || // Lo  [27] HANGUL SYLLABLE GEG..HANGUL SYLLABLE GEH
		(0xACA9 <= code && code <= 0xACC3) || // Lo  [27] HANGUL SYLLABLE GYEOG..HANGUL SYLLABLE GYEOH
		(0xACC5 <= code && code <= 0xACDF) || // Lo  [27] HANGUL SYLLABLE GYEG..HANGUL SYLLABLE GYEH
		(0xACE1 <= code && code <= 0xACFB) || // Lo  [27] HANGUL SYLLABLE GOG..HANGUL SYLLABLE GOH
		(0xACFD <= code && code <= 0xAD17) || // Lo  [27] HANGUL SYLLABLE GWAG..HANGUL SYLLABLE GWAH
		(0xAD19 <= code && code <= 0xAD33) || // Lo  [27] HANGUL SYLLABLE GWAEG..HANGUL SYLLABLE GWAEH
		(0xAD35 <= code && code <= 0xAD4F) || // Lo  [27] HANGUL SYLLABLE GOEG..HANGUL SYLLABLE GOEH
		(0xAD51 <= code && code <= 0xAD6B) || // Lo  [27] HANGUL SYLLABLE GYOG..HANGUL SYLLABLE GYOH
		(0xAD6D <= code && code <= 0xAD87) || // Lo  [27] HANGUL SYLLABLE GUG..HANGUL SYLLABLE GUH
		(0xAD89 <= code && code <= 0xADA3) || // Lo  [27] HANGUL SYLLABLE GWEOG..HANGUL SYLLABLE GWEOH
		(0xADA5 <= code && code <= 0xADBF) || // Lo  [27] HANGUL SYLLABLE GWEG..HANGUL SYLLABLE GWEH
		(0xADC1 <= code && code <= 0xADDB) || // Lo  [27] HANGUL SYLLABLE GWIG..HANGUL SYLLABLE GWIH
		(0xADDD <= code && code <= 0xADF7) || // Lo  [27] HANGUL SYLLABLE GYUG..HANGUL SYLLABLE GYUH
		(0xADF9 <= code && code <= 0xAE13) || // Lo  [27] HANGUL SYLLABLE GEUG..HANGUL SYLLABLE GEUH
		(0xAE15 <= code && code <= 0xAE2F) || // Lo  [27] HANGUL SYLLABLE GYIG..HANGUL SYLLABLE GYIH
		(0xAE31 <= code && code <= 0xAE4B) || // Lo  [27] HANGUL SYLLABLE GIG..HANGUL SYLLABLE GIH
		(0xAE4D <= code && code <= 0xAE67) || // Lo  [27] HANGUL SYLLABLE GGAG..HANGUL SYLLABLE GGAH
		(0xAE69 <= code && code <= 0xAE83) || // Lo  [27] HANGUL SYLLABLE GGAEG..HANGUL SYLLABLE GGAEH
		(0xAE85 <= code && code <= 0xAE9F) || // Lo  [27] HANGUL SYLLABLE GGYAG..HANGUL SYLLABLE GGYAH
		(0xAEA1 <= code && code <= 0xAEBB) || // Lo  [27] HANGUL SYLLABLE GGYAEG..HANGUL SYLLABLE GGYAEH
		(0xAEBD <= code && code <= 0xAED7) || // Lo  [27] HANGUL SYLLABLE GGEOG..HANGUL SYLLABLE GGEOH
		(0xAED9 <= code && code <= 0xAEF3) || // Lo  [27] HANGUL SYLLABLE GGEG..HANGUL SYLLABLE GGEH
		(0xAEF5 <= code && code <= 0xAF0F) || // Lo  [27] HANGUL SYLLABLE GGYEOG..HANGUL SYLLABLE GGYEOH
		(0xAF11 <= code && code <= 0xAF2B) || // Lo  [27] HANGUL SYLLABLE GGYEG..HANGUL SYLLABLE GGYEH
		(0xAF2D <= code && code <= 0xAF47) || // Lo  [27] HANGUL SYLLABLE GGOG..HANGUL SYLLABLE GGOH
		(0xAF49 <= code && code <= 0xAF63) || // Lo  [27] HANGUL SYLLABLE GGWAG..HANGUL SYLLABLE GGWAH
		(0xAF65 <= code && code <= 0xAF7F) || // Lo  [27] HANGUL SYLLABLE GGWAEG..HANGUL SYLLABLE GGWAEH
		(0xAF81 <= code && code <= 0xAF9B) || // Lo  [27] HANGUL SYLLABLE GGOEG..HANGUL SYLLABLE GGOEH
		(0xAF9D <= code && code <= 0xAFB7) || // Lo  [27] HANGUL SYLLABLE GGYOG..HANGUL SYLLABLE GGYOH
		(0xAFB9 <= code && code <= 0xAFD3) || // Lo  [27] HANGUL SYLLABLE GGUG..HANGUL SYLLABLE GGUH
		(0xAFD5 <= code && code <= 0xAFEF) || // Lo  [27] HANGUL SYLLABLE GGWEOG..HANGUL SYLLABLE GGWEOH
		(0xAFF1 <= code && code <= 0xB00B) || // Lo  [27] HANGUL SYLLABLE GGWEG..HANGUL SYLLABLE GGWEH
		(0xB00D <= code && code <= 0xB027) || // Lo  [27] HANGUL SYLLABLE GGWIG..HANGUL SYLLABLE GGWIH
		(0xB029 <= code && code <= 0xB043) || // Lo  [27] HANGUL SYLLABLE GGYUG..HANGUL SYLLABLE GGYUH
		(0xB045 <= code && code <= 0xB05F) || // Lo  [27] HANGUL SYLLABLE GGEUG..HANGUL SYLLABLE GGEUH
		(0xB061 <= code && code <= 0xB07B) || // Lo  [27] HANGUL SYLLABLE GGYIG..HANGUL SYLLABLE GGYIH
		(0xB07D <= code && code <= 0xB097) || // Lo  [27] HANGUL SYLLABLE GGIG..HANGUL SYLLABLE GGIH
		(0xB099 <= code && code <= 0xB0B3) || // Lo  [27] HANGUL SYLLABLE NAG..HANGUL SYLLABLE NAH
		(0xB0B5 <= code && code <= 0xB0CF) || // Lo  [27] HANGUL SYLLABLE NAEG..HANGUL SYLLABLE NAEH
		(0xB0D1 <= code && code <= 0xB0EB) || // Lo  [27] HANGUL SYLLABLE NYAG..HANGUL SYLLABLE NYAH
		(0xB0ED <= code && code <= 0xB107) || // Lo  [27] HANGUL SYLLABLE NYAEG..HANGUL SYLLABLE NYAEH
		(0xB109 <= code && code <= 0xB123) || // Lo  [27] HANGUL SYLLABLE NEOG..HANGUL SYLLABLE NEOH
		(0xB125 <= code && code <= 0xB13F) || // Lo  [27] HANGUL SYLLABLE NEG..HANGUL SYLLABLE NEH
		(0xB141 <= code && code <= 0xB15B) || // Lo  [27] HANGUL SYLLABLE NYEOG..HANGUL SYLLABLE NYEOH
		(0xB15D <= code && code <= 0xB177) || // Lo  [27] HANGUL SYLLABLE NYEG..HANGUL SYLLABLE NYEH
		(0xB179 <= code && code <= 0xB193) || // Lo  [27] HANGUL SYLLABLE NOG..HANGUL SYLLABLE NOH
		(0xB195 <= code && code <= 0xB1AF) || // Lo  [27] HANGUL SYLLABLE NWAG..HANGUL SYLLABLE NWAH
		(0xB1B1 <= code && code <= 0xB1CB) || // Lo  [27] HANGUL SYLLABLE NWAEG..HANGUL SYLLABLE NWAEH
		(0xB1CD <= code && code <= 0xB1E7) || // Lo  [27] HANGUL SYLLABLE NOEG..HANGUL SYLLABLE NOEH
		(0xB1E9 <= code && code <= 0xB203) || // Lo  [27] HANGUL SYLLABLE NYOG..HANGUL SYLLABLE NYOH
		(0xB205 <= code && code <= 0xB21F) || // Lo  [27] HANGUL SYLLABLE NUG..HANGUL SYLLABLE NUH
		(0xB221 <= code && code <= 0xB23B) || // Lo  [27] HANGUL SYLLABLE NWEOG..HANGUL SYLLABLE NWEOH
		(0xB23D <= code && code <= 0xB257) || // Lo  [27] HANGUL SYLLABLE NWEG..HANGUL SYLLABLE NWEH
		(0xB259 <= code && code <= 0xB273) || // Lo  [27] HANGUL SYLLABLE NWIG..HANGUL SYLLABLE NWIH
		(0xB275 <= code && code <= 0xB28F) || // Lo  [27] HANGUL SYLLABLE NYUG..HANGUL SYLLABLE NYUH
		(0xB291 <= code && code <= 0xB2AB) || // Lo  [27] HANGUL SYLLABLE NEUG..HANGUL SYLLABLE NEUH
		(0xB2AD <= code && code <= 0xB2C7) || // Lo  [27] HANGUL SYLLABLE NYIG..HANGUL SYLLABLE NYIH
		(0xB2C9 <= code && code <= 0xB2E3) || // Lo  [27] HANGUL SYLLABLE NIG..HANGUL SYLLABLE NIH
		(0xB2E5 <= code && code <= 0xB2FF) || // Lo  [27] HANGUL SYLLABLE DAG..HANGUL SYLLABLE DAH
		(0xB301 <= code && code <= 0xB31B) || // Lo  [27] HANGUL SYLLABLE DAEG..HANGUL SYLLABLE DAEH
		(0xB31D <= code && code <= 0xB337) || // Lo  [27] HANGUL SYLLABLE DYAG..HANGUL SYLLABLE DYAH
		(0xB339 <= code && code <= 0xB353) || // Lo  [27] HANGUL SYLLABLE DYAEG..HANGUL SYLLABLE DYAEH
		(0xB355 <= code && code <= 0xB36F) || // Lo  [27] HANGUL SYLLABLE DEOG..HANGUL SYLLABLE DEOH
		(0xB371 <= code && code <= 0xB38B) || // Lo  [27] HANGUL SYLLABLE DEG..HANGUL SYLLABLE DEH
		(0xB38D <= code && code <= 0xB3A7) || // Lo  [27] HANGUL SYLLABLE DYEOG..HANGUL SYLLABLE DYEOH
		(0xB3A9 <= code && code <= 0xB3C3) || // Lo  [27] HANGUL SYLLABLE DYEG..HANGUL SYLLABLE DYEH
		(0xB3C5 <= code && code <= 0xB3DF) || // Lo  [27] HANGUL SYLLABLE DOG..HANGUL SYLLABLE DOH
		(0xB3E1 <= code && code <= 0xB3FB) || // Lo  [27] HANGUL SYLLABLE DWAG..HANGUL SYLLABLE DWAH
		(0xB3FD <= code && code <= 0xB417) || // Lo  [27] HANGUL SYLLABLE DWAEG..HANGUL SYLLABLE DWAEH
		(0xB419 <= code && code <= 0xB433) || // Lo  [27] HANGUL SYLLABLE DOEG..HANGUL SYLLABLE DOEH
		(0xB435 <= code && code <= 0xB44F) || // Lo  [27] HANGUL SYLLABLE DYOG..HANGUL SYLLABLE DYOH
		(0xB451 <= code && code <= 0xB46B) || // Lo  [27] HANGUL SYLLABLE DUG..HANGUL SYLLABLE DUH
		(0xB46D <= code && code <= 0xB487) || // Lo  [27] HANGUL SYLLABLE DWEOG..HANGUL SYLLABLE DWEOH
		(0xB489 <= code && code <= 0xB4A3) || // Lo  [27] HANGUL SYLLABLE DWEG..HANGUL SYLLABLE DWEH
		(0xB4A5 <= code && code <= 0xB4BF) || // Lo  [27] HANGUL SYLLABLE DWIG..HANGUL SYLLABLE DWIH
		(0xB4C1 <= code && code <= 0xB4DB) || // Lo  [27] HANGUL SYLLABLE DYUG..HANGUL SYLLABLE DYUH
		(0xB4DD <= code && code <= 0xB4F7) || // Lo  [27] HANGUL SYLLABLE DEUG..HANGUL SYLLABLE DEUH
		(0xB4F9 <= code && code <= 0xB513) || // Lo  [27] HANGUL SYLLABLE DYIG..HANGUL SYLLABLE DYIH
		(0xB515 <= code && code <= 0xB52F) || // Lo  [27] HANGUL SYLLABLE DIG..HANGUL SYLLABLE DIH
		(0xB531 <= code && code <= 0xB54B) || // Lo  [27] HANGUL SYLLABLE DDAG..HANGUL SYLLABLE DDAH
		(0xB54D <= code && code <= 0xB567) || // Lo  [27] HANGUL SYLLABLE DDAEG..HANGUL SYLLABLE DDAEH
		(0xB569 <= code && code <= 0xB583) || // Lo  [27] HANGUL SYLLABLE DDYAG..HANGUL SYLLABLE DDYAH
		(0xB585 <= code && code <= 0xB59F) || // Lo  [27] HANGUL SYLLABLE DDYAEG..HANGUL SYLLABLE DDYAEH
		(0xB5A1 <= code && code <= 0xB5BB) || // Lo  [27] HANGUL SYLLABLE DDEOG..HANGUL SYLLABLE DDEOH
		(0xB5BD <= code && code <= 0xB5D7) || // Lo  [27] HANGUL SYLLABLE DDEG..HANGUL SYLLABLE DDEH
		(0xB5D9 <= code && code <= 0xB5F3) || // Lo  [27] HANGUL SYLLABLE DDYEOG..HANGUL SYLLABLE DDYEOH
		(0xB5F5 <= code && code <= 0xB60F) || // Lo  [27] HANGUL SYLLABLE DDYEG..HANGUL SYLLABLE DDYEH
		(0xB611 <= code && code <= 0xB62B) || // Lo  [27] HANGUL SYLLABLE DDOG..HANGUL SYLLABLE DDOH
		(0xB62D <= code && code <= 0xB647) || // Lo  [27] HANGUL SYLLABLE DDWAG..HANGUL SYLLABLE DDWAH
		(0xB649 <= code && code <= 0xB663) || // Lo  [27] HANGUL SYLLABLE DDWAEG..HANGUL SYLLABLE DDWAEH
		(0xB665 <= code && code <= 0xB67F) || // Lo  [27] HANGUL SYLLABLE DDOEG..HANGUL SYLLABLE DDOEH
		(0xB681 <= code && code <= 0xB69B) || // Lo  [27] HANGUL SYLLABLE DDYOG..HANGUL SYLLABLE DDYOH
		(0xB69D <= code && code <= 0xB6B7) || // Lo  [27] HANGUL SYLLABLE DDUG..HANGUL SYLLABLE DDUH
		(0xB6B9 <= code && code <= 0xB6D3) || // Lo  [27] HANGUL SYLLABLE DDWEOG..HANGUL SYLLABLE DDWEOH
		(0xB6D5 <= code && code <= 0xB6EF) || // Lo  [27] HANGUL SYLLABLE DDWEG..HANGUL SYLLABLE DDWEH
		(0xB6F1 <= code && code <= 0xB70B) || // Lo  [27] HANGUL SYLLABLE DDWIG..HANGUL SYLLABLE DDWIH
		(0xB70D <= code && code <= 0xB727) || // Lo  [27] HANGUL SYLLABLE DDYUG..HANGUL SYLLABLE DDYUH
		(0xB729 <= code && code <= 0xB743) || // Lo  [27] HANGUL SYLLABLE DDEUG..HANGUL SYLLABLE DDEUH
		(0xB745 <= code && code <= 0xB75F) || // Lo  [27] HANGUL SYLLABLE DDYIG..HANGUL SYLLABLE DDYIH
		(0xB761 <= code && code <= 0xB77B) || // Lo  [27] HANGUL SYLLABLE DDIG..HANGUL SYLLABLE DDIH
		(0xB77D <= code && code <= 0xB797) || // Lo  [27] HANGUL SYLLABLE RAG..HANGUL SYLLABLE RAH
		(0xB799 <= code && code <= 0xB7B3) || // Lo  [27] HANGUL SYLLABLE RAEG..HANGUL SYLLABLE RAEH
		(0xB7B5 <= code && code <= 0xB7CF) || // Lo  [27] HANGUL SYLLABLE RYAG..HANGUL SYLLABLE RYAH
		(0xB7D1 <= code && code <= 0xB7EB) || // Lo  [27] HANGUL SYLLABLE RYAEG..HANGUL SYLLABLE RYAEH
		(0xB7ED <= code && code <= 0xB807) || // Lo  [27] HANGUL SYLLABLE REOG..HANGUL SYLLABLE REOH
		(0xB809 <= code && code <= 0xB823) || // Lo  [27] HANGUL SYLLABLE REG..HANGUL SYLLABLE REH
		(0xB825 <= code && code <= 0xB83F) || // Lo  [27] HANGUL SYLLABLE RYEOG..HANGUL SYLLABLE RYEOH
		(0xB841 <= code && code <= 0xB85B) || // Lo  [27] HANGUL SYLLABLE RYEG..HANGUL SYLLABLE RYEH
		(0xB85D <= code && code <= 0xB877) || // Lo  [27] HANGUL SYLLABLE ROG..HANGUL SYLLABLE ROH
		(0xB879 <= code && code <= 0xB893) || // Lo  [27] HANGUL SYLLABLE RWAG..HANGUL SYLLABLE RWAH
		(0xB895 <= code && code <= 0xB8AF) || // Lo  [27] HANGUL SYLLABLE RWAEG..HANGUL SYLLABLE RWAEH
		(0xB8B1 <= code && code <= 0xB8CB) || // Lo  [27] HANGUL SYLLABLE ROEG..HANGUL SYLLABLE ROEH
		(0xB8CD <= code && code <= 0xB8E7) || // Lo  [27] HANGUL SYLLABLE RYOG..HANGUL SYLLABLE RYOH
		(0xB8E9 <= code && code <= 0xB903) || // Lo  [27] HANGUL SYLLABLE RUG..HANGUL SYLLABLE RUH
		(0xB905 <= code && code <= 0xB91F) || // Lo  [27] HANGUL SYLLABLE RWEOG..HANGUL SYLLABLE RWEOH
		(0xB921 <= code && code <= 0xB93B) || // Lo  [27] HANGUL SYLLABLE RWEG..HANGUL SYLLABLE RWEH
		(0xB93D <= code && code <= 0xB957) || // Lo  [27] HANGUL SYLLABLE RWIG..HANGUL SYLLABLE RWIH
		(0xB959 <= code && code <= 0xB973) || // Lo  [27] HANGUL SYLLABLE RYUG..HANGUL SYLLABLE RYUH
		(0xB975 <= code && code <= 0xB98F) || // Lo  [27] HANGUL SYLLABLE REUG..HANGUL SYLLABLE REUH
		(0xB991 <= code && code <= 0xB9AB) || // Lo  [27] HANGUL SYLLABLE RYIG..HANGUL SYLLABLE RYIH
		(0xB9AD <= code && code <= 0xB9C7) || // Lo  [27] HANGUL SYLLABLE RIG..HANGUL SYLLABLE RIH
		(0xB9C9 <= code && code <= 0xB9E3) || // Lo  [27] HANGUL SYLLABLE MAG..HANGUL SYLLABLE MAH
		(0xB9E5 <= code && code <= 0xB9FF) || // Lo  [27] HANGUL SYLLABLE MAEG..HANGUL SYLLABLE MAEH
		(0xBA01 <= code && code <= 0xBA1B) || // Lo  [27] HANGUL SYLLABLE MYAG..HANGUL SYLLABLE MYAH
		(0xBA1D <= code && code <= 0xBA37) || // Lo  [27] HANGUL SYLLABLE MYAEG..HANGUL SYLLABLE MYAEH
		(0xBA39 <= code && code <= 0xBA53) || // Lo  [27] HANGUL SYLLABLE MEOG..HANGUL SYLLABLE MEOH
		(0xBA55 <= code && code <= 0xBA6F) || // Lo  [27] HANGUL SYLLABLE MEG..HANGUL SYLLABLE MEH
		(0xBA71 <= code && code <= 0xBA8B) || // Lo  [27] HANGUL SYLLABLE MYEOG..HANGUL SYLLABLE MYEOH
		(0xBA8D <= code && code <= 0xBAA7) || // Lo  [27] HANGUL SYLLABLE MYEG..HANGUL SYLLABLE MYEH
		(0xBAA9 <= code && code <= 0xBAC3) || // Lo  [27] HANGUL SYLLABLE MOG..HANGUL SYLLABLE MOH
		(0xBAC5 <= code && code <= 0xBADF) || // Lo  [27] HANGUL SYLLABLE MWAG..HANGUL SYLLABLE MWAH
		(0xBAE1 <= code && code <= 0xBAFB) || // Lo  [27] HANGUL SYLLABLE MWAEG..HANGUL SYLLABLE MWAEH
		(0xBAFD <= code && code <= 0xBB17) || // Lo  [27] HANGUL SYLLABLE MOEG..HANGUL SYLLABLE MOEH
		(0xBB19 <= code && code <= 0xBB33) || // Lo  [27] HANGUL SYLLABLE MYOG..HANGUL SYLLABLE MYOH
		(0xBB35 <= code && code <= 0xBB4F) || // Lo  [27] HANGUL SYLLABLE MUG..HANGUL SYLLABLE MUH
		(0xBB51 <= code && code <= 0xBB6B) || // Lo  [27] HANGUL SYLLABLE MWEOG..HANGUL SYLLABLE MWEOH
		(0xBB6D <= code && code <= 0xBB87) || // Lo  [27] HANGUL SYLLABLE MWEG..HANGUL SYLLABLE MWEH
		(0xBB89 <= code && code <= 0xBBA3) || // Lo  [27] HANGUL SYLLABLE MWIG..HANGUL SYLLABLE MWIH
		(0xBBA5 <= code && code <= 0xBBBF) || // Lo  [27] HANGUL SYLLABLE MYUG..HANGUL SYLLABLE MYUH
		(0xBBC1 <= code && code <= 0xBBDB) || // Lo  [27] HANGUL SYLLABLE MEUG..HANGUL SYLLABLE MEUH
		(0xBBDD <= code && code <= 0xBBF7) || // Lo  [27] HANGUL SYLLABLE MYIG..HANGUL SYLLABLE MYIH
		(0xBBF9 <= code && code <= 0xBC13) || // Lo  [27] HANGUL SYLLABLE MIG..HANGUL SYLLABLE MIH
		(0xBC15 <= code && code <= 0xBC2F) || // Lo  [27] HANGUL SYLLABLE BAG..HANGUL SYLLABLE BAH
		(0xBC31 <= code && code <= 0xBC4B) || // Lo  [27] HANGUL SYLLABLE BAEG..HANGUL SYLLABLE BAEH
		(0xBC4D <= code && code <= 0xBC67) || // Lo  [27] HANGUL SYLLABLE BYAG..HANGUL SYLLABLE BYAH
		(0xBC69 <= code && code <= 0xBC83) || // Lo  [27] HANGUL SYLLABLE BYAEG..HANGUL SYLLABLE BYAEH
		(0xBC85 <= code && code <= 0xBC9F) || // Lo  [27] HANGUL SYLLABLE BEOG..HANGUL SYLLABLE BEOH
		(0xBCA1 <= code && code <= 0xBCBB) || // Lo  [27] HANGUL SYLLABLE BEG..HANGUL SYLLABLE BEH
		(0xBCBD <= code && code <= 0xBCD7) || // Lo  [27] HANGUL SYLLABLE BYEOG..HANGUL SYLLABLE BYEOH
		(0xBCD9 <= code && code <= 0xBCF3) || // Lo  [27] HANGUL SYLLABLE BYEG..HANGUL SYLLABLE BYEH
		(0xBCF5 <= code && code <= 0xBD0F) || // Lo  [27] HANGUL SYLLABLE BOG..HANGUL SYLLABLE BOH
		(0xBD11 <= code && code <= 0xBD2B) || // Lo  [27] HANGUL SYLLABLE BWAG..HANGUL SYLLABLE BWAH
		(0xBD2D <= code && code <= 0xBD47) || // Lo  [27] HANGUL SYLLABLE BWAEG..HANGUL SYLLABLE BWAEH
		(0xBD49 <= code && code <= 0xBD63) || // Lo  [27] HANGUL SYLLABLE BOEG..HANGUL SYLLABLE BOEH
		(0xBD65 <= code && code <= 0xBD7F) || // Lo  [27] HANGUL SYLLABLE BYOG..HANGUL SYLLABLE BYOH
		(0xBD81 <= code && code <= 0xBD9B) || // Lo  [27] HANGUL SYLLABLE BUG..HANGUL SYLLABLE BUH
		(0xBD9D <= code && code <= 0xBDB7) || // Lo  [27] HANGUL SYLLABLE BWEOG..HANGUL SYLLABLE BWEOH
		(0xBDB9 <= code && code <= 0xBDD3) || // Lo  [27] HANGUL SYLLABLE BWEG..HANGUL SYLLABLE BWEH
		(0xBDD5 <= code && code <= 0xBDEF) || // Lo  [27] HANGUL SYLLABLE BWIG..HANGUL SYLLABLE BWIH
		(0xBDF1 <= code && code <= 0xBE0B) || // Lo  [27] HANGUL SYLLABLE BYUG..HANGUL SYLLABLE BYUH
		(0xBE0D <= code && code <= 0xBE27) || // Lo  [27] HANGUL SYLLABLE BEUG..HANGUL SYLLABLE BEUH
		(0xBE29 <= code && code <= 0xBE43) || // Lo  [27] HANGUL SYLLABLE BYIG..HANGUL SYLLABLE BYIH
		(0xBE45 <= code && code <= 0xBE5F) || // Lo  [27] HANGUL SYLLABLE BIG..HANGUL SYLLABLE BIH
		(0xBE61 <= code && code <= 0xBE7B) || // Lo  [27] HANGUL SYLLABLE BBAG..HANGUL SYLLABLE BBAH
		(0xBE7D <= code && code <= 0xBE97) || // Lo  [27] HANGUL SYLLABLE BBAEG..HANGUL SYLLABLE BBAEH
		(0xBE99 <= code && code <= 0xBEB3) || // Lo  [27] HANGUL SYLLABLE BBYAG..HANGUL SYLLABLE BBYAH
		(0xBEB5 <= code && code <= 0xBECF) || // Lo  [27] HANGUL SYLLABLE BBYAEG..HANGUL SYLLABLE BBYAEH
		(0xBED1 <= code && code <= 0xBEEB) || // Lo  [27] HANGUL SYLLABLE BBEOG..HANGUL SYLLABLE BBEOH
		(0xBEED <= code && code <= 0xBF07) || // Lo  [27] HANGUL SYLLABLE BBEG..HANGUL SYLLABLE BBEH
		(0xBF09 <= code && code <= 0xBF23) || // Lo  [27] HANGUL SYLLABLE BBYEOG..HANGUL SYLLABLE BBYEOH
		(0xBF25 <= code && code <= 0xBF3F) || // Lo  [27] HANGUL SYLLABLE BBYEG..HANGUL SYLLABLE BBYEH
		(0xBF41 <= code && code <= 0xBF5B) || // Lo  [27] HANGUL SYLLABLE BBOG..HANGUL SYLLABLE BBOH
		(0xBF5D <= code && code <= 0xBF77) || // Lo  [27] HANGUL SYLLABLE BBWAG..HANGUL SYLLABLE BBWAH
		(0xBF79 <= code && code <= 0xBF93) || // Lo  [27] HANGUL SYLLABLE BBWAEG..HANGUL SYLLABLE BBWAEH
		(0xBF95 <= code && code <= 0xBFAF) || // Lo  [27] HANGUL SYLLABLE BBOEG..HANGUL SYLLABLE BBOEH
		(0xBFB1 <= code && code <= 0xBFCB) || // Lo  [27] HANGUL SYLLABLE BBYOG..HANGUL SYLLABLE BBYOH
		(0xBFCD <= code && code <= 0xBFE7) || // Lo  [27] HANGUL SYLLABLE BBUG..HANGUL SYLLABLE BBUH
		(0xBFE9 <= code && code <= 0xC003) || // Lo  [27] HANGUL SYLLABLE BBWEOG..HANGUL SYLLABLE BBWEOH
		(0xC005 <= code && code <= 0xC01F) || // Lo  [27] HANGUL SYLLABLE BBWEG..HANGUL SYLLABLE BBWEH
		(0xC021 <= code && code <= 0xC03B) || // Lo  [27] HANGUL SYLLABLE BBWIG..HANGUL SYLLABLE BBWIH
		(0xC03D <= code && code <= 0xC057) || // Lo  [27] HANGUL SYLLABLE BBYUG..HANGUL SYLLABLE BBYUH
		(0xC059 <= code && code <= 0xC073) || // Lo  [27] HANGUL SYLLABLE BBEUG..HANGUL SYLLABLE BBEUH
		(0xC075 <= code && code <= 0xC08F) || // Lo  [27] HANGUL SYLLABLE BBYIG..HANGUL SYLLABLE BBYIH
		(0xC091 <= code && code <= 0xC0AB) || // Lo  [27] HANGUL SYLLABLE BBIG..HANGUL SYLLABLE BBIH
		(0xC0AD <= code && code <= 0xC0C7) || // Lo  [27] HANGUL SYLLABLE SAG..HANGUL SYLLABLE SAH
		(0xC0C9 <= code && code <= 0xC0E3) || // Lo  [27] HANGUL SYLLABLE SAEG..HANGUL SYLLABLE SAEH
		(0xC0E5 <= code && code <= 0xC0FF) || // Lo  [27] HANGUL SYLLABLE SYAG..HANGUL SYLLABLE SYAH
		(0xC101 <= code && code <= 0xC11B) || // Lo  [27] HANGUL SYLLABLE SYAEG..HANGUL SYLLABLE SYAEH
		(0xC11D <= code && code <= 0xC137) || // Lo  [27] HANGUL SYLLABLE SEOG..HANGUL SYLLABLE SEOH
		(0xC139 <= code && code <= 0xC153) || // Lo  [27] HANGUL SYLLABLE SEG..HANGUL SYLLABLE SEH
		(0xC155 <= code && code <= 0xC16F) || // Lo  [27] HANGUL SYLLABLE SYEOG..HANGUL SYLLABLE SYEOH
		(0xC171 <= code && code <= 0xC18B) || // Lo  [27] HANGUL SYLLABLE SYEG..HANGUL SYLLABLE SYEH
		(0xC18D <= code && code <= 0xC1A7) || // Lo  [27] HANGUL SYLLABLE SOG..HANGUL SYLLABLE SOH
		(0xC1A9 <= code && code <= 0xC1C3) || // Lo  [27] HANGUL SYLLABLE SWAG..HANGUL SYLLABLE SWAH
		(0xC1C5 <= code && code <= 0xC1DF) || // Lo  [27] HANGUL SYLLABLE SWAEG..HANGUL SYLLABLE SWAEH
		(0xC1E1 <= code && code <= 0xC1FB) || // Lo  [27] HANGUL SYLLABLE SOEG..HANGUL SYLLABLE SOEH
		(0xC1FD <= code && code <= 0xC217) || // Lo  [27] HANGUL SYLLABLE SYOG..HANGUL SYLLABLE SYOH
		(0xC219 <= code && code <= 0xC233) || // Lo  [27] HANGUL SYLLABLE SUG..HANGUL SYLLABLE SUH
		(0xC235 <= code && code <= 0xC24F) || // Lo  [27] HANGUL SYLLABLE SWEOG..HANGUL SYLLABLE SWEOH
		(0xC251 <= code && code <= 0xC26B) || // Lo  [27] HANGUL SYLLABLE SWEG..HANGUL SYLLABLE SWEH
		(0xC26D <= code && code <= 0xC287) || // Lo  [27] HANGUL SYLLABLE SWIG..HANGUL SYLLABLE SWIH
		(0xC289 <= code && code <= 0xC2A3) || // Lo  [27] HANGUL SYLLABLE SYUG..HANGUL SYLLABLE SYUH
		(0xC2A5 <= code && code <= 0xC2BF) || // Lo  [27] HANGUL SYLLABLE SEUG..HANGUL SYLLABLE SEUH
		(0xC2C1 <= code && code <= 0xC2DB) || // Lo  [27] HANGUL SYLLABLE SYIG..HANGUL SYLLABLE SYIH
		(0xC2DD <= code && code <= 0xC2F7) || // Lo  [27] HANGUL SYLLABLE SIG..HANGUL SYLLABLE SIH
		(0xC2F9 <= code && code <= 0xC313) || // Lo  [27] HANGUL SYLLABLE SSAG..HANGUL SYLLABLE SSAH
		(0xC315 <= code && code <= 0xC32F) || // Lo  [27] HANGUL SYLLABLE SSAEG..HANGUL SYLLABLE SSAEH
		(0xC331 <= code && code <= 0xC34B) || // Lo  [27] HANGUL SYLLABLE SSYAG..HANGUL SYLLABLE SSYAH
		(0xC34D <= code && code <= 0xC367) || // Lo  [27] HANGUL SYLLABLE SSYAEG..HANGUL SYLLABLE SSYAEH
		(0xC369 <= code && code <= 0xC383) || // Lo  [27] HANGUL SYLLABLE SSEOG..HANGUL SYLLABLE SSEOH
		(0xC385 <= code && code <= 0xC39F) || // Lo  [27] HANGUL SYLLABLE SSEG..HANGUL SYLLABLE SSEH
		(0xC3A1 <= code && code <= 0xC3BB) || // Lo  [27] HANGUL SYLLABLE SSYEOG..HANGUL SYLLABLE SSYEOH
		(0xC3BD <= code && code <= 0xC3D7) || // Lo  [27] HANGUL SYLLABLE SSYEG..HANGUL SYLLABLE SSYEH
		(0xC3D9 <= code && code <= 0xC3F3) || // Lo  [27] HANGUL SYLLABLE SSOG..HANGUL SYLLABLE SSOH
		(0xC3F5 <= code && code <= 0xC40F) || // Lo  [27] HANGUL SYLLABLE SSWAG..HANGUL SYLLABLE SSWAH
		(0xC411 <= code && code <= 0xC42B) || // Lo  [27] HANGUL SYLLABLE SSWAEG..HANGUL SYLLABLE SSWAEH
		(0xC42D <= code && code <= 0xC447) || // Lo  [27] HANGUL SYLLABLE SSOEG..HANGUL SYLLABLE SSOEH
		(0xC449 <= code && code <= 0xC463) || // Lo  [27] HANGUL SYLLABLE SSYOG..HANGUL SYLLABLE SSYOH
		(0xC465 <= code && code <= 0xC47F) || // Lo  [27] HANGUL SYLLABLE SSUG..HANGUL SYLLABLE SSUH
		(0xC481 <= code && code <= 0xC49B) || // Lo  [27] HANGUL SYLLABLE SSWEOG..HANGUL SYLLABLE SSWEOH
		(0xC49D <= code && code <= 0xC4B7) || // Lo  [27] HANGUL SYLLABLE SSWEG..HANGUL SYLLABLE SSWEH
		(0xC4B9 <= code && code <= 0xC4D3) || // Lo  [27] HANGUL SYLLABLE SSWIG..HANGUL SYLLABLE SSWIH
		(0xC4D5 <= code && code <= 0xC4EF) || // Lo  [27] HANGUL SYLLABLE SSYUG..HANGUL SYLLABLE SSYUH
		(0xC4F1 <= code && code <= 0xC50B) || // Lo  [27] HANGUL SYLLABLE SSEUG..HANGUL SYLLABLE SSEUH
		(0xC50D <= code && code <= 0xC527) || // Lo  [27] HANGUL SYLLABLE SSYIG..HANGUL SYLLABLE SSYIH
		(0xC529 <= code && code <= 0xC543) || // Lo  [27] HANGUL SYLLABLE SSIG..HANGUL SYLLABLE SSIH
		(0xC545 <= code && code <= 0xC55F) || // Lo  [27] HANGUL SYLLABLE AG..HANGUL SYLLABLE AH
		(0xC561 <= code && code <= 0xC57B) || // Lo  [27] HANGUL SYLLABLE AEG..HANGUL SYLLABLE AEH
		(0xC57D <= code && code <= 0xC597) || // Lo  [27] HANGUL SYLLABLE YAG..HANGUL SYLLABLE YAH
		(0xC599 <= code && code <= 0xC5B3) || // Lo  [27] HANGUL SYLLABLE YAEG..HANGUL SYLLABLE YAEH
		(0xC5B5 <= code && code <= 0xC5CF) || // Lo  [27] HANGUL SYLLABLE EOG..HANGUL SYLLABLE EOH
		(0xC5D1 <= code && code <= 0xC5EB) || // Lo  [27] HANGUL SYLLABLE EG..HANGUL SYLLABLE EH
		(0xC5ED <= code && code <= 0xC607) || // Lo  [27] HANGUL SYLLABLE YEOG..HANGUL SYLLABLE YEOH
		(0xC609 <= code && code <= 0xC623) || // Lo  [27] HANGUL SYLLABLE YEG..HANGUL SYLLABLE YEH
		(0xC625 <= code && code <= 0xC63F) || // Lo  [27] HANGUL SYLLABLE OG..HANGUL SYLLABLE OH
		(0xC641 <= code && code <= 0xC65B) || // Lo  [27] HANGUL SYLLABLE WAG..HANGUL SYLLABLE WAH
		(0xC65D <= code && code <= 0xC677) || // Lo  [27] HANGUL SYLLABLE WAEG..HANGUL SYLLABLE WAEH
		(0xC679 <= code && code <= 0xC693) || // Lo  [27] HANGUL SYLLABLE OEG..HANGUL SYLLABLE OEH
		(0xC695 <= code && code <= 0xC6AF) || // Lo  [27] HANGUL SYLLABLE YOG..HANGUL SYLLABLE YOH
		(0xC6B1 <= code && code <= 0xC6CB) || // Lo  [27] HANGUL SYLLABLE UG..HANGUL SYLLABLE UH
		(0xC6CD <= code && code <= 0xC6E7) || // Lo  [27] HANGUL SYLLABLE WEOG..HANGUL SYLLABLE WEOH
		(0xC6E9 <= code && code <= 0xC703) || // Lo  [27] HANGUL SYLLABLE WEG..HANGUL SYLLABLE WEH
		(0xC705 <= code && code <= 0xC71F) || // Lo  [27] HANGUL SYLLABLE WIG..HANGUL SYLLABLE WIH
		(0xC721 <= code && code <= 0xC73B) || // Lo  [27] HANGUL SYLLABLE YUG..HANGUL SYLLABLE YUH
		(0xC73D <= code && code <= 0xC757) || // Lo  [27] HANGUL SYLLABLE EUG..HANGUL SYLLABLE EUH
		(0xC759 <= code && code <= 0xC773) || // Lo  [27] HANGUL SYLLABLE YIG..HANGUL SYLLABLE YIH
		(0xC775 <= code && code <= 0xC78F) || // Lo  [27] HANGUL SYLLABLE IG..HANGUL SYLLABLE IH
		(0xC791 <= code && code <= 0xC7AB) || // Lo  [27] HANGUL SYLLABLE JAG..HANGUL SYLLABLE JAH
		(0xC7AD <= code && code <= 0xC7C7) || // Lo  [27] HANGUL SYLLABLE JAEG..HANGUL SYLLABLE JAEH
		(0xC7C9 <= code && code <= 0xC7E3) || // Lo  [27] HANGUL SYLLABLE JYAG..HANGUL SYLLABLE JYAH
		(0xC7E5 <= code && code <= 0xC7FF) || // Lo  [27] HANGUL SYLLABLE JYAEG..HANGUL SYLLABLE JYAEH
		(0xC801 <= code && code <= 0xC81B) || // Lo  [27] HANGUL SYLLABLE JEOG..HANGUL SYLLABLE JEOH
		(0xC81D <= code && code <= 0xC837) || // Lo  [27] HANGUL SYLLABLE JEG..HANGUL SYLLABLE JEH
		(0xC839 <= code && code <= 0xC853) || // Lo  [27] HANGUL SYLLABLE JYEOG..HANGUL SYLLABLE JYEOH
		(0xC855 <= code && code <= 0xC86F) || // Lo  [27] HANGUL SYLLABLE JYEG..HANGUL SYLLABLE JYEH
		(0xC871 <= code && code <= 0xC88B) || // Lo  [27] HANGUL SYLLABLE JOG..HANGUL SYLLABLE JOH
		(0xC88D <= code && code <= 0xC8A7) || // Lo  [27] HANGUL SYLLABLE JWAG..HANGUL SYLLABLE JWAH
		(0xC8A9 <= code && code <= 0xC8C3) || // Lo  [27] HANGUL SYLLABLE JWAEG..HANGUL SYLLABLE JWAEH
		(0xC8C5 <= code && code <= 0xC8DF) || // Lo  [27] HANGUL SYLLABLE JOEG..HANGUL SYLLABLE JOEH
		(0xC8E1 <= code && code <= 0xC8FB) || // Lo  [27] HANGUL SYLLABLE JYOG..HANGUL SYLLABLE JYOH
		(0xC8FD <= code && code <= 0xC917) || // Lo  [27] HANGUL SYLLABLE JUG..HANGUL SYLLABLE JUH
		(0xC919 <= code && code <= 0xC933) || // Lo  [27] HANGUL SYLLABLE JWEOG..HANGUL SYLLABLE JWEOH
		(0xC935 <= code && code <= 0xC94F) || // Lo  [27] HANGUL SYLLABLE JWEG..HANGUL SYLLABLE JWEH
		(0xC951 <= code && code <= 0xC96B) || // Lo  [27] HANGUL SYLLABLE JWIG..HANGUL SYLLABLE JWIH
		(0xC96D <= code && code <= 0xC987) || // Lo  [27] HANGUL SYLLABLE JYUG..HANGUL SYLLABLE JYUH
		(0xC989 <= code && code <= 0xC9A3) || // Lo  [27] HANGUL SYLLABLE JEUG..HANGUL SYLLABLE JEUH
		(0xC9A5 <= code && code <= 0xC9BF) || // Lo  [27] HANGUL SYLLABLE JYIG..HANGUL SYLLABLE JYIH
		(0xC9C1 <= code && code <= 0xC9DB) || // Lo  [27] HANGUL SYLLABLE JIG..HANGUL SYLLABLE JIH
		(0xC9DD <= code && code <= 0xC9F7) || // Lo  [27] HANGUL SYLLABLE JJAG..HANGUL SYLLABLE JJAH
		(0xC9F9 <= code && code <= 0xCA13) || // Lo  [27] HANGUL SYLLABLE JJAEG..HANGUL SYLLABLE JJAEH
		(0xCA15 <= code && code <= 0xCA2F) || // Lo  [27] HANGUL SYLLABLE JJYAG..HANGUL SYLLABLE JJYAH
		(0xCA31 <= code && code <= 0xCA4B) || // Lo  [27] HANGUL SYLLABLE JJYAEG..HANGUL SYLLABLE JJYAEH
		(0xCA4D <= code && code <= 0xCA67) || // Lo  [27] HANGUL SYLLABLE JJEOG..HANGUL SYLLABLE JJEOH
		(0xCA69 <= code && code <= 0xCA83) || // Lo  [27] HANGUL SYLLABLE JJEG..HANGUL SYLLABLE JJEH
		(0xCA85 <= code && code <= 0xCA9F) || // Lo  [27] HANGUL SYLLABLE JJYEOG..HANGUL SYLLABLE JJYEOH
		(0xCAA1 <= code && code <= 0xCABB) || // Lo  [27] HANGUL SYLLABLE JJYEG..HANGUL SYLLABLE JJYEH
		(0xCABD <= code && code <= 0xCAD7) || // Lo  [27] HANGUL SYLLABLE JJOG..HANGUL SYLLABLE JJOH
		(0xCAD9 <= code && code <= 0xCAF3) || // Lo  [27] HANGUL SYLLABLE JJWAG..HANGUL SYLLABLE JJWAH
		(0xCAF5 <= code && code <= 0xCB0F) || // Lo  [27] HANGUL SYLLABLE JJWAEG..HANGUL SYLLABLE JJWAEH
		(0xCB11 <= code && code <= 0xCB2B) || // Lo  [27] HANGUL SYLLABLE JJOEG..HANGUL SYLLABLE JJOEH
		(0xCB2D <= code && code <= 0xCB47) || // Lo  [27] HANGUL SYLLABLE JJYOG..HANGUL SYLLABLE JJYOH
		(0xCB49 <= code && code <= 0xCB63) || // Lo  [27] HANGUL SYLLABLE JJUG..HANGUL SYLLABLE JJUH
		(0xCB65 <= code && code <= 0xCB7F) || // Lo  [27] HANGUL SYLLABLE JJWEOG..HANGUL SYLLABLE JJWEOH
		(0xCB81 <= code && code <= 0xCB9B) || // Lo  [27] HANGUL SYLLABLE JJWEG..HANGUL SYLLABLE JJWEH
		(0xCB9D <= code && code <= 0xCBB7) || // Lo  [27] HANGUL SYLLABLE JJWIG..HANGUL SYLLABLE JJWIH
		(0xCBB9 <= code && code <= 0xCBD3) || // Lo  [27] HANGUL SYLLABLE JJYUG..HANGUL SYLLABLE JJYUH
		(0xCBD5 <= code && code <= 0xCBEF) || // Lo  [27] HANGUL SYLLABLE JJEUG..HANGUL SYLLABLE JJEUH
		(0xCBF1 <= code && code <= 0xCC0B) || // Lo  [27] HANGUL SYLLABLE JJYIG..HANGUL SYLLABLE JJYIH
		(0xCC0D <= code && code <= 0xCC27) || // Lo  [27] HANGUL SYLLABLE JJIG..HANGUL SYLLABLE JJIH
		(0xCC29 <= code && code <= 0xCC43) || // Lo  [27] HANGUL SYLLABLE CAG..HANGUL SYLLABLE CAH
		(0xCC45 <= code && code <= 0xCC5F) || // Lo  [27] HANGUL SYLLABLE CAEG..HANGUL SYLLABLE CAEH
		(0xCC61 <= code && code <= 0xCC7B) || // Lo  [27] HANGUL SYLLABLE CYAG..HANGUL SYLLABLE CYAH
		(0xCC7D <= code && code <= 0xCC97) || // Lo  [27] HANGUL SYLLABLE CYAEG..HANGUL SYLLABLE CYAEH
		(0xCC99 <= code && code <= 0xCCB3) || // Lo  [27] HANGUL SYLLABLE CEOG..HANGUL SYLLABLE CEOH
		(0xCCB5 <= code && code <= 0xCCCF) || // Lo  [27] HANGUL SYLLABLE CEG..HANGUL SYLLABLE CEH
		(0xCCD1 <= code && code <= 0xCCEB) || // Lo  [27] HANGUL SYLLABLE CYEOG..HANGUL SYLLABLE CYEOH
		(0xCCED <= code && code <= 0xCD07) || // Lo  [27] HANGUL SYLLABLE CYEG..HANGUL SYLLABLE CYEH
		(0xCD09 <= code && code <= 0xCD23) || // Lo  [27] HANGUL SYLLABLE COG..HANGUL SYLLABLE COH
		(0xCD25 <= code && code <= 0xCD3F) || // Lo  [27] HANGUL SYLLABLE CWAG..HANGUL SYLLABLE CWAH
		(0xCD41 <= code && code <= 0xCD5B) || // Lo  [27] HANGUL SYLLABLE CWAEG..HANGUL SYLLABLE CWAEH
		(0xCD5D <= code && code <= 0xCD77) || // Lo  [27] HANGUL SYLLABLE COEG..HANGUL SYLLABLE COEH
		(0xCD79 <= code && code <= 0xCD93) || // Lo  [27] HANGUL SYLLABLE CYOG..HANGUL SYLLABLE CYOH
		(0xCD95 <= code && code <= 0xCDAF) || // Lo  [27] HANGUL SYLLABLE CUG..HANGUL SYLLABLE CUH
		(0xCDB1 <= code && code <= 0xCDCB) || // Lo  [27] HANGUL SYLLABLE CWEOG..HANGUL SYLLABLE CWEOH
		(0xCDCD <= code && code <= 0xCDE7) || // Lo  [27] HANGUL SYLLABLE CWEG..HANGUL SYLLABLE CWEH
		(0xCDE9 <= code && code <= 0xCE03) || // Lo  [27] HANGUL SYLLABLE CWIG..HANGUL SYLLABLE CWIH
		(0xCE05 <= code && code <= 0xCE1F) || // Lo  [27] HANGUL SYLLABLE CYUG..HANGUL SYLLABLE CYUH
		(0xCE21 <= code && code <= 0xCE3B) || // Lo  [27] HANGUL SYLLABLE CEUG..HANGUL SYLLABLE CEUH
		(0xCE3D <= code && code <= 0xCE57) || // Lo  [27] HANGUL SYLLABLE CYIG..HANGUL SYLLABLE CYIH
		(0xCE59 <= code && code <= 0xCE73) || // Lo  [27] HANGUL SYLLABLE CIG..HANGUL SYLLABLE CIH
		(0xCE75 <= code && code <= 0xCE8F) || // Lo  [27] HANGUL SYLLABLE KAG..HANGUL SYLLABLE KAH
		(0xCE91 <= code && code <= 0xCEAB) || // Lo  [27] HANGUL SYLLABLE KAEG..HANGUL SYLLABLE KAEH
		(0xCEAD <= code && code <= 0xCEC7) || // Lo  [27] HANGUL SYLLABLE KYAG..HANGUL SYLLABLE KYAH
		(0xCEC9 <= code && code <= 0xCEE3) || // Lo  [27] HANGUL SYLLABLE KYAEG..HANGUL SYLLABLE KYAEH
		(0xCEE5 <= code && code <= 0xCEFF) || // Lo  [27] HANGUL SYLLABLE KEOG..HANGUL SYLLABLE KEOH
		(0xCF01 <= code && code <= 0xCF1B) || // Lo  [27] HANGUL SYLLABLE KEG..HANGUL SYLLABLE KEH
		(0xCF1D <= code && code <= 0xCF37) || // Lo  [27] HANGUL SYLLABLE KYEOG..HANGUL SYLLABLE KYEOH
		(0xCF39 <= code && code <= 0xCF53) || // Lo  [27] HANGUL SYLLABLE KYEG..HANGUL SYLLABLE KYEH
		(0xCF55 <= code && code <= 0xCF6F) || // Lo  [27] HANGUL SYLLABLE KOG..HANGUL SYLLABLE KOH
		(0xCF71 <= code && code <= 0xCF8B) || // Lo  [27] HANGUL SYLLABLE KWAG..HANGUL SYLLABLE KWAH
		(0xCF8D <= code && code <= 0xCFA7) || // Lo  [27] HANGUL SYLLABLE KWAEG..HANGUL SYLLABLE KWAEH
		(0xCFA9 <= code && code <= 0xCFC3) || // Lo  [27] HANGUL SYLLABLE KOEG..HANGUL SYLLABLE KOEH
		(0xCFC5 <= code && code <= 0xCFDF) || // Lo  [27] HANGUL SYLLABLE KYOG..HANGUL SYLLABLE KYOH
		(0xCFE1 <= code && code <= 0xCFFB) || // Lo  [27] HANGUL SYLLABLE KUG..HANGUL SYLLABLE KUH
		(0xCFFD <= code && code <= 0xD017) || // Lo  [27] HANGUL SYLLABLE KWEOG..HANGUL SYLLABLE KWEOH
		(0xD019 <= code && code <= 0xD033) || // Lo  [27] HANGUL SYLLABLE KWEG..HANGUL SYLLABLE KWEH
		(0xD035 <= code && code <= 0xD04F) || // Lo  [27] HANGUL SYLLABLE KWIG..HANGUL SYLLABLE KWIH
		(0xD051 <= code && code <= 0xD06B) || // Lo  [27] HANGUL SYLLABLE KYUG..HANGUL SYLLABLE KYUH
		(0xD06D <= code && code <= 0xD087) || // Lo  [27] HANGUL SYLLABLE KEUG..HANGUL SYLLABLE KEUH
		(0xD089 <= code && code <= 0xD0A3) || // Lo  [27] HANGUL SYLLABLE KYIG..HANGUL SYLLABLE KYIH
		(0xD0A5 <= code && code <= 0xD0BF) || // Lo  [27] HANGUL SYLLABLE KIG..HANGUL SYLLABLE KIH
		(0xD0C1 <= code && code <= 0xD0DB) || // Lo  [27] HANGUL SYLLABLE TAG..HANGUL SYLLABLE TAH
		(0xD0DD <= code && code <= 0xD0F7) || // Lo  [27] HANGUL SYLLABLE TAEG..HANGUL SYLLABLE TAEH
		(0xD0F9 <= code && code <= 0xD113) || // Lo  [27] HANGUL SYLLABLE TYAG..HANGUL SYLLABLE TYAH
		(0xD115 <= code && code <= 0xD12F) || // Lo  [27] HANGUL SYLLABLE TYAEG..HANGUL SYLLABLE TYAEH
		(0xD131 <= code && code <= 0xD14B) || // Lo  [27] HANGUL SYLLABLE TEOG..HANGUL SYLLABLE TEOH
		(0xD14D <= code && code <= 0xD167) || // Lo  [27] HANGUL SYLLABLE TEG..HANGUL SYLLABLE TEH
		(0xD169 <= code && code <= 0xD183) || // Lo  [27] HANGUL SYLLABLE TYEOG..HANGUL SYLLABLE TYEOH
		(0xD185 <= code && code <= 0xD19F) || // Lo  [27] HANGUL SYLLABLE TYEG..HANGUL SYLLABLE TYEH
		(0xD1A1 <= code && code <= 0xD1BB) || // Lo  [27] HANGUL SYLLABLE TOG..HANGUL SYLLABLE TOH
		(0xD1BD <= code && code <= 0xD1D7) || // Lo  [27] HANGUL SYLLABLE TWAG..HANGUL SYLLABLE TWAH
		(0xD1D9 <= code && code <= 0xD1F3) || // Lo  [27] HANGUL SYLLABLE TWAEG..HANGUL SYLLABLE TWAEH
		(0xD1F5 <= code && code <= 0xD20F) || // Lo  [27] HANGUL SYLLABLE TOEG..HANGUL SYLLABLE TOEH
		(0xD211 <= code && code <= 0xD22B) || // Lo  [27] HANGUL SYLLABLE TYOG..HANGUL SYLLABLE TYOH
		(0xD22D <= code && code <= 0xD247) || // Lo  [27] HANGUL SYLLABLE TUG..HANGUL SYLLABLE TUH
		(0xD249 <= code && code <= 0xD263) || // Lo  [27] HANGUL SYLLABLE TWEOG..HANGUL SYLLABLE TWEOH
		(0xD265 <= code && code <= 0xD27F) || // Lo  [27] HANGUL SYLLABLE TWEG..HANGUL SYLLABLE TWEH
		(0xD281 <= code && code <= 0xD29B) || // Lo  [27] HANGUL SYLLABLE TWIG..HANGUL SYLLABLE TWIH
		(0xD29D <= code && code <= 0xD2B7) || // Lo  [27] HANGUL SYLLABLE TYUG..HANGUL SYLLABLE TYUH
		(0xD2B9 <= code && code <= 0xD2D3) || // Lo  [27] HANGUL SYLLABLE TEUG..HANGUL SYLLABLE TEUH
		(0xD2D5 <= code && code <= 0xD2EF) || // Lo  [27] HANGUL SYLLABLE TYIG..HANGUL SYLLABLE TYIH
		(0xD2F1 <= code && code <= 0xD30B) || // Lo  [27] HANGUL SYLLABLE TIG..HANGUL SYLLABLE TIH
		(0xD30D <= code && code <= 0xD327) || // Lo  [27] HANGUL SYLLABLE PAG..HANGUL SYLLABLE PAH
		(0xD329 <= code && code <= 0xD343) || // Lo  [27] HANGUL SYLLABLE PAEG..HANGUL SYLLABLE PAEH
		(0xD345 <= code && code <= 0xD35F) || // Lo  [27] HANGUL SYLLABLE PYAG..HANGUL SYLLABLE PYAH
		(0xD361 <= code && code <= 0xD37B) || // Lo  [27] HANGUL SYLLABLE PYAEG..HANGUL SYLLABLE PYAEH
		(0xD37D <= code && code <= 0xD397) || // Lo  [27] HANGUL SYLLABLE PEOG..HANGUL SYLLABLE PEOH
		(0xD399 <= code && code <= 0xD3B3) || // Lo  [27] HANGUL SYLLABLE PEG..HANGUL SYLLABLE PEH
		(0xD3B5 <= code && code <= 0xD3CF) || // Lo  [27] HANGUL SYLLABLE PYEOG..HANGUL SYLLABLE PYEOH
		(0xD3D1 <= code && code <= 0xD3EB) || // Lo  [27] HANGUL SYLLABLE PYEG..HANGUL SYLLABLE PYEH
		(0xD3ED <= code && code <= 0xD407) || // Lo  [27] HANGUL SYLLABLE POG..HANGUL SYLLABLE POH
		(0xD409 <= code && code <= 0xD423) || // Lo  [27] HANGUL SYLLABLE PWAG..HANGUL SYLLABLE PWAH
		(0xD425 <= code && code <= 0xD43F) || // Lo  [27] HANGUL SYLLABLE PWAEG..HANGUL SYLLABLE PWAEH
		(0xD441 <= code && code <= 0xD45B) || // Lo  [27] HANGUL SYLLABLE POEG..HANGUL SYLLABLE POEH
		(0xD45D <= code && code <= 0xD477) || // Lo  [27] HANGUL SYLLABLE PYOG..HANGUL SYLLABLE PYOH
		(0xD479 <= code && code <= 0xD493) || // Lo  [27] HANGUL SYLLABLE PUG..HANGUL SYLLABLE PUH
		(0xD495 <= code && code <= 0xD4AF) || // Lo  [27] HANGUL SYLLABLE PWEOG..HANGUL SYLLABLE PWEOH
		(0xD4B1 <= code && code <= 0xD4CB) || // Lo  [27] HANGUL SYLLABLE PWEG..HANGUL SYLLABLE PWEH
		(0xD4CD <= code && code <= 0xD4E7) || // Lo  [27] HANGUL SYLLABLE PWIG..HANGUL SYLLABLE PWIH
		(0xD4E9 <= code && code <= 0xD503) || // Lo  [27] HANGUL SYLLABLE PYUG..HANGUL SYLLABLE PYUH
		(0xD505 <= code && code <= 0xD51F) || // Lo  [27] HANGUL SYLLABLE PEUG..HANGUL SYLLABLE PEUH
		(0xD521 <= code && code <= 0xD53B) || // Lo  [27] HANGUL SYLLABLE PYIG..HANGUL SYLLABLE PYIH
		(0xD53D <= code && code <= 0xD557) || // Lo  [27] HANGUL SYLLABLE PIG..HANGUL SYLLABLE PIH
		(0xD559 <= code && code <= 0xD573) || // Lo  [27] HANGUL SYLLABLE HAG..HANGUL SYLLABLE HAH
		(0xD575 <= code && code <= 0xD58F) || // Lo  [27] HANGUL SYLLABLE HAEG..HANGUL SYLLABLE HAEH
		(0xD591 <= code && code <= 0xD5AB) || // Lo  [27] HANGUL SYLLABLE HYAG..HANGUL SYLLABLE HYAH
		(0xD5AD <= code && code <= 0xD5C7) || // Lo  [27] HANGUL SYLLABLE HYAEG..HANGUL SYLLABLE HYAEH
		(0xD5C9 <= code && code <= 0xD5E3) || // Lo  [27] HANGUL SYLLABLE HEOG..HANGUL SYLLABLE HEOH
		(0xD5E5 <= code && code <= 0xD5FF) || // Lo  [27] HANGUL SYLLABLE HEG..HANGUL SYLLABLE HEH
		(0xD601 <= code && code <= 0xD61B) || // Lo  [27] HANGUL SYLLABLE HYEOG..HANGUL SYLLABLE HYEOH
		(0xD61D <= code && code <= 0xD637) || // Lo  [27] HANGUL SYLLABLE HYEG..HANGUL SYLLABLE HYEH
		(0xD639 <= code && code <= 0xD653) || // Lo  [27] HANGUL SYLLABLE HOG..HANGUL SYLLABLE HOH
		(0xD655 <= code && code <= 0xD66F) || // Lo  [27] HANGUL SYLLABLE HWAG..HANGUL SYLLABLE HWAH
		(0xD671 <= code && code <= 0xD68B) || // Lo  [27] HANGUL SYLLABLE HWAEG..HANGUL SYLLABLE HWAEH
		(0xD68D <= code && code <= 0xD6A7) || // Lo  [27] HANGUL SYLLABLE HOEG..HANGUL SYLLABLE HOEH
		(0xD6A9 <= code && code <= 0xD6C3) || // Lo  [27] HANGUL SYLLABLE HYOG..HANGUL SYLLABLE HYOH
		(0xD6C5 <= code && code <= 0xD6DF) || // Lo  [27] HANGUL SYLLABLE HUG..HANGUL SYLLABLE HUH
		(0xD6E1 <= code && code <= 0xD6FB) || // Lo  [27] HANGUL SYLLABLE HWEOG..HANGUL SYLLABLE HWEOH
		(0xD6FD <= code && code <= 0xD717) || // Lo  [27] HANGUL SYLLABLE HWEG..HANGUL SYLLABLE HWEH
		(0xD719 <= code && code <= 0xD733) || // Lo  [27] HANGUL SYLLABLE HWIG..HANGUL SYLLABLE HWIH
		(0xD735 <= code && code <= 0xD74F) || // Lo  [27] HANGUL SYLLABLE HYUG..HANGUL SYLLABLE HYUH
		(0xD751 <= code && code <= 0xD76B) || // Lo  [27] HANGUL SYLLABLE HEUG..HANGUL SYLLABLE HEUH
		(0xD76D <= code && code <= 0xD787) || // Lo  [27] HANGUL SYLLABLE HYIG..HANGUL SYLLABLE HYIH
		(0xD789 <= code && code <= 0xD7A3) // Lo  [27] HANGUL SYLLABLE HIG..HANGUL SYLLABLE HIH
		){
			return LVT;
		}
		
		if(
		0x261D == code || // So       WHITE UP POINTING INDEX
		0x26F9 == code || // So       PERSON WITH BALL
		(0x270A <= code && code <= 0x270D) || // So   [4] RAISED FIST..WRITING HAND
		0x1F385 == code || // So       FATHER CHRISTMAS
		(0x1F3C2 <= code && code <= 0x1F3C4) || // So   [3] SNOWBOARDER..SURFER
		0x1F3C7 == code || // So       HORSE RACING
		(0x1F3CA <= code && code <= 0x1F3CC) || // So   [3] SWIMMER..GOLFER
		(0x1F442 <= code && code <= 0x1F443) || // So   [2] EAR..NOSE
		(0x1F446 <= code && code <= 0x1F450) || // So  [11] WHITE UP POINTING BACKHAND INDEX..OPEN HANDS SIGN
		0x1F46E == code || // So       POLICE OFFICER
		(0x1F470 <= code && code <= 0x1F478) || // So   [9] BRIDE WITH VEIL..PRINCESS
		0x1F47C == code || // So       BABY ANGEL
		(0x1F481 <= code && code <= 0x1F483) || // So   [3] INFORMATION DESK PERSON..DANCER
		(0x1F485 <= code && code <= 0x1F487) || // So   [3] NAIL POLISH..HAIRCUT
		0x1F4AA == code || // So       FLEXED BICEPS
		(0x1F574 <= code && code <= 0x1F575) || // So   [2] MAN IN BUSINESS SUIT LEVITATING..SLEUTH OR SPY
		0x1F57A == code || // So       MAN DANCING
		0x1F590 == code || // So       RAISED HAND WITH FINGERS SPLAYED
		(0x1F595 <= code && code <= 0x1F596) || // So   [2] REVERSED HAND WITH MIDDLE FINGER EXTENDED..RAISED HAND WITH PART BETWEEN MIDDLE AND RING FINGERS
		(0x1F645 <= code && code <= 0x1F647) || // So   [3] FACE WITH NO GOOD GESTURE..PERSON BOWING DEEPLY
		(0x1F64B <= code && code <= 0x1F64F) || // So   [5] HAPPY PERSON RAISING ONE HAND..PERSON WITH FOLDED HANDS
		0x1F6A3 == code || // So       ROWBOAT
		(0x1F6B4 <= code && code <= 0x1F6B6) || // So   [3] BICYCLIST..PEDESTRIAN
		0x1F6C0 == code || // So       BATH
		0x1F6CC == code || // So       SLEEPING ACCOMMODATION
		(0x1F918 <= code && code <= 0x1F91C) || // So   [5] SIGN OF THE HORNS..RIGHT-FACING FIST
		(0x1F91E <= code && code <= 0x1F91F) || // So   [2] HAND WITH INDEX AND MIDDLE FINGERS CROSSED..I LOVE YOU HAND SIGN
		0x1F926 == code || // So       FACE PALM
		(0x1F930 <= code && code <= 0x1F939) || // So  [10] PREGNANT WOMAN..JUGGLING
		(0x1F93D <= code && code <= 0x1F93E) || // So   [2] WATER POLO..HANDBALL
		(0x1F9D1 <= code && code <= 0x1F9DD) // So  [13] ADULT..ELF
		){
			return E_Base;
		}

		if(
		(0x1F3FB <= code && code <= 0x1F3FF) // Sk   [5] EMOJI MODIFIER FITZPATRICK TYPE-1-2..EMOJI MODIFIER FITZPATRICK TYPE-6
		){
			return E_Modifier;
		}

		if(
		0x200D == code // Cf       ZERO WIDTH JOINER
		){
			return ZWJ;
		}

		if(
		0x2640 == code || // So       FEMALE SIGN
		0x2642 == code || // So       MALE SIGN
		(0x2695 <= code && code <= 0x2696) || // So   [2] STAFF OF AESCULAPIUS..SCALES
		0x2708 == code || // So       AIRPLANE
		0x2764 == code || // So       HEAVY BLACK HEART
		0x1F308 == code || // So       RAINBOW
		0x1F33E == code || // So       EAR OF RICE
		0x1F373 == code || // So       COOKING
		0x1F393 == code || // So       GRADUATION CAP
		0x1F3A4 == code || // So       MICROPHONE
		0x1F3A8 == code || // So       ARTIST PALETTE
		0x1F3EB == code || // So       SCHOOL
		0x1F3ED == code || // So       FACTORY
		0x1F48B == code || // So       KISS MARK
		(0x1F4BB <= code && code <= 0x1F4BC) || // So   [2] PERSONAL COMPUTER..BRIEFCASE
		0x1F527 == code || // So       WRENCH
		0x1F52C == code || // So       MICROSCOPE
		0x1F5E8 == code || // So       LEFT SPEECH BUBBLE
		0x1F680 == code || // So       ROCKET
		0x1F692 == code // So       FIRE ENGINE
		){
			return Glue_After_Zwj;
		}

		if(
		(0x1F466 <= code && code <= 0x1F469) // So   [4] BOY..WOMAN
		){
			return E_Base_GAZ;
		}
		
		
		//all unlisted characters have a grapheme break property of "Other"
		return Other;
	}
	return this;
}

if (typeof module != 'undefined' && module.exports) {
    module.exports = GraphemeSplitter;
}

},{}],"z0em":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.If = If;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function If(props) {
  return _react.default.createElement(_react.default.Fragment, null, props.when ? props.children : null);
}
},{"react":"n8MK"}],"lqYF":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toFullWidth = toFullWidth;
exports.stackToText = stackToText;
var latinChars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;<=>?@[]^_`{|}~';
var fullWidthLatinChars = '０１２３４５６７８９ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ！゛＃＄％＆（）＊＋、ー。／：；〈＝〉？＠［］＾＿‘｛｜｝～';

function toFullWidth(text) {
  var chars = text.split('').map(function (c) {
    var idx = latinChars.indexOf(c);

    if (idx < 0) {
      return c;
    }

    return fullWidthLatinChars[idx];
  });
  return chars.join('');
}

function stackToText(stack) {
  return stack.lines.map(function (line) {
    return line.characters.join('');
  }).join('\n').trim();
}
},{}],"frOy":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMobileDevice = isMobileDevice;

function isMobileDevice() {
  return typeof window.orientation !== "undefined" || navigator.userAgent.indexOf('IEMobile') !== -1;
}

;
},{}],"DRMG":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.background = background;

var _ = require(".");

function background() {
  var output = '';

  for (var i = 0; i < arguments.length; i++) {
    var background_1 = arguments[i];
    var backgroundSize = background_1.size ? '/' + background_1.size : '';
    var backgroundParts = [(0, _.coalesce)(background_1.image), (0, _.coalesce)(background_1.position) + backgroundSize, (0, _.coalesce)(background_1.repeat), (0, _.coalesce)(background_1.origin), (0, _.coalesce)(background_1.clip), (0, _.coalesce)(background_1.attachment), (0, _.coalesce)(background_1.color)];
    var backgroundString = backgroundParts.filter(Boolean).join(' ');
    output += (output.length && backgroundString ? ', ' : '') + backgroundString;
  }

  return output;
}
},{".":"O5kx"}],"vrYl":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensurePercent = ensurePercent;
exports.formatPercent = formatPercent;
exports.formatFloat = formatFloat;
exports.ensureLength = ensureLength;
exports.parseCSSFunction = parseCSSFunction;
exports.cssFunction = cssFunction;
exports.createFunction = createFunction;
exports.toFloat = exports.formatUnit = void 0;
var functionExpression = /[\s]*([a-z-]+)[\s]*\([\s]*([^\)]+)[\s]*\)[\s]*/i;
var floatExpression = /^(\-?\d+\.?\d{0,5})/;

var formatUnit = function (unit) {
  return function (val) {
    return val + unit;
  };
};

exports.formatUnit = formatUnit;
var toFloat = parseFloat;
exports.toFloat = toFloat;

function ensurePercent(value) {
  return typeof value === 'number' ? value : toFloat(value) * .01;
}

function formatPercent(value) {
  return formatFloat(value * 100) + '%';
}
/**
 * Returns a number formatted to a max number of 5 decimal places
 */


function formatFloat(n) {
  return floatExpression.exec(n.toString())[1];
}

function ensureLength(value) {
  if (value === null || value === undefined) {
    return undefined;
  } // convert to number


  var number = +value; // validate conversion worked (NaN will not equal NaN)

  if (number === number) {
    return value + 'px';
  }

  return value;
}

function parseCSSFunction(stringValue) {
  var matches = functionExpression.exec(stringValue);

  if (!matches || !matches.length) {
    return undefined;
  }

  return [matches[1]].concat(matches[2].split(','));
}

function cssFunction(functionName, params) {
  var parts = Array.prototype.join.call(params, ', ');
  return functionName + "(" + parts + ")";
}

function createFunction(name) {
  return function () {
    return cssFunction(name, arguments);
  };
}
},{}],"m1sL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = exports.filter = void 0;

var filter = function (args, condition) {
  return Array.prototype.filter.call(args, condition);
};

exports.filter = filter;

var map = function (args, mapper) {
  return Array.prototype.map.call(args, mapper);
};

exports.map = map;
},{}],"eDQ8":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.turn = exports.viewWidth = exports.viewHeight = exports.rem = exports.rad = exports.px = exports.ex = exports.em = exports.deg = exports.percent = void 0;

var _formatting = require("./utils/formatting");

/**
 * Returns the number with a suffix of %
 */
var percent = (0, _formatting.formatUnit)('%');
/**
 * Returns the number with a suffix of deg
 */

exports.percent = percent;
var deg = (0, _formatting.formatUnit)('deg');
/**
 * Returns the number with a suffix of em
 */

exports.deg = deg;
var em = (0, _formatting.formatUnit)('em');
/**
 * Returns the number with a suffix of ex
 */

exports.em = em;
var ex = (0, _formatting.formatUnit)('ex');
/**
 * Returns the number with a suffix of px
 */

exports.ex = ex;
var px = (0, _formatting.formatUnit)('px');
/**
 * Returns the number with a suffix of rad
 */

exports.px = px;
var rad = (0, _formatting.formatUnit)('rad');
/**
 * Returns the number with a suffix of rem
 */

exports.rad = rad;
var rem = (0, _formatting.formatUnit)('rem');
/**
 * Returns the number with a suffix of vh
 */

exports.rem = rem;
var viewHeight = (0, _formatting.formatUnit)('vh');
/**
 * Returns the number with a suffix of vw
 */

exports.viewHeight = viewHeight;
var viewWidth = (0, _formatting.formatUnit)('vw');
/**
 * Returns the number with a suffix of turn
 */

exports.viewWidth = viewWidth;
var turn = (0, _formatting.formatUnit)('turn');
exports.turn = turn;
},{"./utils/formatting":"vrYl"}],"fgiZ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.list = exports.params = void 0;

var _arrays = require("./utils/arrays");

var _units = require("./units");

var delimited = function (delimiter) {
  return function () {
    return (0, _arrays.filter)(arguments, function (s) {
      return s || s === 0;
    }).map(function (s) {
      return typeof s === 'number' ? (0, _units.px)(s) : s.toString();
    }).join(delimiter);
  };
};

var params = delimited(' ');
exports.params = params;
var list = delimited(',');
exports.list = list;
},{"./utils/arrays":"m1sL","./units":"eDQ8"}],"VyX4":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.border = border;
exports.borderWidth = exports.borderStyle = exports.borderColor = void 0;

var _formatting = require("./utils/formatting");

var _lists = require("./lists");

/**
 * Returns the value with '' around it.  Any 's will be escaped \' in the output
 */
function border(p) {
  return (0, _lists.params)(p.color, p.style, (0, _formatting.ensureLength)(p.width));
}

var borderColor = _lists.params;
exports.borderColor = borderColor;
var borderStyle = _lists.params;
exports.borderStyle = borderStyle;
var borderWidth = _lists.params;
exports.borderWidth = borderWidth;
},{"./utils/formatting":"vrYl","./lists":"fgiZ"}],"fVC5":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roundFloat = roundFloat;
exports.round = void 0;
var math = Math;
var round = math.round;
/**
 * Rounds a decimal by multiplying it by a factor, rounding it, and then dividing it by that same factor
 * @param n number to round
 * @param factor to use 100 = scale of 2, 100000 = scale of 5
 */

exports.round = round;

function roundFloat(n, factor) {
  return round(n * factor) / factor;
}
},{}],"voOo":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.color = color;
exports.hsl = hsl;
exports.hsla = hsla;
exports.rgb = rgb;
exports.rgba = rgba;
exports.ColorHelper = void 0;

var _formatting = require("./utils/formatting");

var _math = require("./utils/math");

var _a;

var RGB = 'rgb',
    HSL = 'hsl';
var converters = (_a = {}, _a[RGB + HSL] = RGBtoHSL, _a[HSL + RGB] = HSLtoRGB, _a);
/**
 * Describe the ceiling for each color channel for each format
 */

var maxChannelValues = {
  r: 255,
  g: 255,
  b: 255,
  h: 360,
  s: 1,
  l: 1,
  a: 1
};
/**
 * Creates a color from a hex color code or named color.
 * e.g. color('red') or color('#FF0000') or color('#F00'))
 */

function color(value) {
  return parseHexCode(value) || parseColorFunction(value) || rgb(255, 0, 0);
}
/**
 * Creates a color from hue, saturation, and lightness.  Alpha is automatically set to 100%
 * @param hue The hue of the color. This should be a number between 0-360.
 * @param saturation The saturation of the color. This should be a number between 0-1 or a percentage string between 0%-100%.
 * @param lightness The lightness of the color. This should be a number between 0-1 or a percentage string between 0%-100%.
 * @param alpha The alpha of the color. This should be a number between 0-1 or a percentage string between 0%-100%. If not specified, this defaults to 1.
 */


function hsl(hue, saturation, lightness, alpha) {
  return new ColorHelper(HSL, modDegrees(hue), (0, _formatting.ensurePercent)(saturation), (0, _formatting.ensurePercent)(lightness), alpha === undefined ? 1 : (0, _formatting.ensurePercent)(alpha), alpha !== undefined
  /* hasAlpha*/
  );
}
/**
 * Creates a color from hue, saturation, lightness, and alpha
 * @param hue The hue of the color. This should be a number between 0-360.
 * @param saturation The saturation of the color. This should be a number between 0-1 or a percentage string between 0%-100%.
 * @param lightness The lightness of the color. This should be a number between 0-1 or a percentage string between 0%-100%.
 * @param alpha The alpha of the color. This should be a number between 0-1 or a percentage string between 0%-100%.
 */


function hsla(hue, saturation, lightness, alpha) {
  return new ColorHelper(HSL, modDegrees(hue), (0, _formatting.ensurePercent)(saturation), (0, _formatting.ensurePercent)(lightness), (0, _formatting.ensurePercent)(alpha), true);
}
/**
 * Creates a color form the red, blue, and green color space.  Alpha is automatically set to 100%
 * @param red The red channel of the color. This should be a number between 0-255.
 * @param blue The blue channel of the color. This should be a number between 0-255.
 * @param green The green channel of the color. This should be a number between 0-255.
 * @param alpha The alpha of the color. This should be a number between 0-1 or a percentage string between 0%-100%. If not specified, this defaults to 1.
 */


function rgb(red, blue, green, alpha) {
  return new ColorHelper(RGB, red, blue, green, alpha === undefined ? 1 : (0, _formatting.ensurePercent)(alpha), alpha !== undefined
  /* hasAlpha*/
  );
}
/**
 * Creates a color form the red, blue, green, and alpha in the color space
 * @param red The red channel of the color. This should be a number between 0-255.
 * @param blue The blue channel of the color. This should be a number between 0-255.
 * @param green The green channel of the color. This should be a number between 0-255.
 * @param alpha The alpha of the color. This should be a number between 0-1 or a percentage string between 0%-100%.
 */


function rgba(red, blue, green, alpha) {
  return new ColorHelper(RGB, red, blue, green, (0, _formatting.ensurePercent)(alpha), true);
}

function convertHelper(toFormat, helper, forceAlpha) {
  var fromFormat = helper.f,
      r = helper.r,
      g = helper.g,
      b = helper.b,
      a = helper.a;
  var newAlpha = forceAlpha === undefined ? helper.o : forceAlpha;

  if (fromFormat !== toFormat) {
    return converters[fromFormat + toFormat](r, g, b, a, newAlpha);
  }

  return forceAlpha === undefined ? helper : new ColorHelper(fromFormat, r, g, b, a, newAlpha);
}
/**
 * A CSS Color.  Includes utilities for converting between color types
 */


var ColorHelper =
/** @class */
function () {
  function ColorHelper(format, r, g, b, a, hasAlpha) {
    var self = this;
    self.f = format;
    self.o = hasAlpha;
    var isHSL = format === HSL;
    self.r = clampColor(isHSL ? 'h' : 'r', r);
    self.g = clampColor(isHSL ? 's' : 'g', g);
    self.b = clampColor(isHSL ? 'l' : 'b', b);
    self.a = clampColor('a', a);
  }
  /**
   * Converts the stored color into string form (which is used by Free Style)
   */


  ColorHelper.prototype.toString = function () {
    var _a = this,
        hasAlpha = _a.o,
        format = _a.f,
        r = _a.r,
        g = _a.g,
        b = _a.b,
        a = _a.a;

    var fnName;
    var params; // find function name and resolve first three channels

    if (format === RGB) {
      fnName = hasAlpha ? 'rgba' : RGB;
      params = [(0, _math.round)(r), (0, _math.round)(g), (0, _math.round)(b)];
    } else if (format === HSL) {
      fnName = hasAlpha ? 'hsla' : HSL;
      params = [(0, _math.round)(r), (0, _formatting.formatPercent)((0, _math.roundFloat)(g, 100)), (0, _formatting.formatPercent)((0, _math.roundFloat)(b, 100))];
    } else {
      throw new Error('Invalid color format');
    } // add alpha channel if needed


    if (hasAlpha) {
      params.push((0, _formatting.formatFloat)((0, _math.roundFloat)(a, 100000)));
    } // return as a string


    return (0, _formatting.cssFunction)(fnName, params);
  };
  /**
   * Converts to hex rgb(255, 255, 255) to #FFFFFF
   */


  ColorHelper.prototype.toHexString = function () {
    var color = convertHelper(RGB, this);
    return '#' + (toHex(color.r) + toHex(color.g) + toHex(color.b)).toUpperCase();
  };
  /**
   * Converts to the Hue, Saturation, Lightness color space
   */


  ColorHelper.prototype.toHSL = function () {
    return convertHelper(HSL, this, false);
  };
  /**
   * Converts to the Hue, Saturation, Lightness color space and adds an alpha channel
   */


  ColorHelper.prototype.toHSLA = function () {
    return convertHelper(HSL, this, true);
  };
  /**
   * Converts to the Red, Green, Blue color space
   */


  ColorHelper.prototype.toRGB = function () {
    return convertHelper(RGB, this, false);
  };
  /**
   * Converts to the Red, Green, Blue color space and adds an alpha channel
   */


  ColorHelper.prototype.toRGBA = function () {
    return convertHelper(RGB, this, true);
  };

  ColorHelper.prototype.red = function () {
    var _ = this;

    return (_.f === RGB ? _ : _.toRGB()).r;
  };

  ColorHelper.prototype.green = function () {
    var _ = this;

    return (_.f === RGB ? _ : _.toRGB()).g;
  };

  ColorHelper.prototype.blue = function () {
    var _ = this;

    return (_.f === RGB ? _ : _.toRGB()).b;
  };

  ColorHelper.prototype.hue = function () {
    var _ = this;

    return (_.f === HSL ? _ : _.toHSL()).r;
  };

  ColorHelper.prototype.saturation = function () {
    var _ = this;

    return (_.f === HSL ? _ : _.toHSL()).g;
  };

  ColorHelper.prototype.lightness = function () {
    var _ = this;

    return (_.f === HSL ? _ : _.toHSL()).b;
  };

  ColorHelper.prototype.alpha = function () {
    return this.a;
  };

  ColorHelper.prototype.opacity = function () {
    return this.a;
  };

  ColorHelper.prototype.invert = function () {
    var _ = this;

    var color2 = convertHelper(RGB, _);
    return convertHelper(_.f, new ColorHelper(RGB, 255 - color2.r, 255 - color2.g, 255 - color2.b, _.a, _.o));
  };

  ColorHelper.prototype.lighten = function (percent, relative) {
    var _ = this;

    var color2 = convertHelper(HSL, _);
    var max = maxChannelValues.l;
    var l = color2.b + (relative ? max - color2.b : max) * (0, _formatting.ensurePercent)(percent);
    return convertHelper(_.f, new ColorHelper(HSL, color2.r, color2.g, l, _.a, _.o));
  };

  ColorHelper.prototype.darken = function (percent, relative) {
    var _ = this;

    var color2 = convertHelper(HSL, _);
    var l = color2.b - (relative ? color2.b : maxChannelValues.l) * (0, _formatting.ensurePercent)(percent);
    return convertHelper(_.f, new ColorHelper(HSL, color2.r, color2.g, l, _.a, _.o));
  };

  ColorHelper.prototype.saturate = function (percent, relative) {
    var _ = this;

    var color2 = convertHelper(HSL, _);
    var max = maxChannelValues.s;
    var s = color2.g + (relative ? max - color2.g : max) * (0, _formatting.ensurePercent)(percent);
    return convertHelper(_.f, new ColorHelper(HSL, color2.r, s, color2.b, _.a, _.o));
  };

  ColorHelper.prototype.desaturate = function (percent, relative) {
    var _ = this;

    var color2 = convertHelper(HSL, _);
    var max = maxChannelValues.s;
    var s = color2.g - (relative ? color2.g : max) * (0, _formatting.ensurePercent)(percent);
    return convertHelper(_.f, new ColorHelper(HSL, color2.r, s, color2.b, _.a, _.o));
  };

  ColorHelper.prototype.grayscale = function () {
    return this.desaturate(1);
  };

  ColorHelper.prototype.fade = function (percent) {
    var _ = this;

    var a = clampColor('a', (0, _formatting.ensurePercent)(percent));
    return convertHelper(_.f, new ColorHelper(_.f, _.r, _.g, _.b, a, true));
  };

  ColorHelper.prototype.fadeOut = function (percent, relative) {
    var _ = this;

    var max = 1;
    var a = clampColor('a', _.a - (relative ? _.a : max) * (0, _formatting.ensurePercent)(percent));
    return convertHelper(_.f, new ColorHelper(_.f, _.r, _.g, _.b, a, true));
  };

  ColorHelper.prototype.fadeIn = function (percent, relative) {
    var _ = this;

    var max = 1;
    var a = clampColor('a', _.a + (relative ? _.a : max) * (0, _formatting.ensurePercent)(percent));
    return convertHelper(_.f, new ColorHelper(_.f, _.r, _.g, _.b, a, true));
  };

  ColorHelper.prototype.mix = function (mixin, weight) {
    var _ = this;

    var color2 = ensureColor(mixin);
    var g = convertHelper(RGB, _);
    var b = convertHelper(RGB, color2);
    var p = weight === undefined ? 0.5 : weight;
    var w = 2 * p - 1;
    var a = Math.abs(g.a - b.a);
    var w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
    var w2 = 1 - w1;
    var helper = new ColorHelper(RGB, (0, _math.round)(g.r * w1 + b.r * w2), (0, _math.round)(g.g * w1 + b.g * w2), (0, _math.round)(g.b * w1 + b.b * w2), g.a * p + b.a * (1 - p), _.o || color2.o);
    return convertHelper(this.f, helper);
  };

  ColorHelper.prototype.tint = function (weight) {
    return rgb(255, 255, 255).mix(this, weight);
  };

  ColorHelper.prototype.shade = function (weight) {
    return rgb(0, 0, 0).mix(this, weight);
  };

  ColorHelper.prototype.spin = function (degrees) {
    var _ = this;

    var color2 = convertHelper(HSL, _);
    return convertHelper(_.f, new ColorHelper(HSL, modDegrees(color2.r + degrees), color2.g, color2.b, _.a, _.o));
  };

  return ColorHelper;
}();

exports.ColorHelper = ColorHelper;

function toHex(n) {
  var i = (0, _math.round)(n);
  return (i < 16 ? '0' : '') + i.toString(16);
}

function modDegrees(n) {
  // note: maybe there is a way to simplify this
  return ((n < 0 ? 360 : 0) + n % 360) % 360;
}

function RGBtoHSL(r, g, b, a, hasAlpha) {
  var newR = r / 255;
  var newG = g / 255;
  var newB = b / 255;
  var min = Math.min(newR, newG, newB);
  var max = Math.max(newR, newG, newB);
  var l = (min + max) / 2;
  var delta = max - min;
  var h;

  if (max === min) {
    h = 0;
  } else if (newR === max) {
    h = (newG - newB) / delta;
  } else if (newG === max) {
    h = 2 + (newB - newR) / delta;
  } else if (newB === max) {
    h = 4 + (newR - newG) / delta;
  } else {
    h = 0;
  }

  h = Math.min(h * 60, 360);

  if (h < 0) {
    h += 360;
  }

  var s;

  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = delta / (max + min);
  } else {
    s = delta / (2 - max - min);
  }

  return new ColorHelper(HSL, h, s, l, a, hasAlpha);
}

function HSLtoRGB(r, g, b, a, hasAlpha) {
  var newH = r / 360;
  var newS = g;
  var newL = b;

  if (newS === 0) {
    var val = newL * 255;
    return new ColorHelper(RGB, val, val, val, a, hasAlpha);
  }

  var t2 = newL < 0.5 ? newL * (1 + newS) : newL + newS - newL * newS;
  var t1 = 2 * newL - t2;
  var newR = 0,
      newG = 0,
      newB = 0;

  for (var i = 0; i < 3; i++) {
    var t3 = newH + 1 / 3 * -(i - 1);

    if (t3 < 0) {
      t3++;
    }

    if (t3 > 1) {
      t3--;
    }

    var val = void 0;

    if (6 * t3 < 1) {
      val = t1 + (t2 - t1) * 6 * t3;
    } else if (2 * t3 < 1) {
      val = t2;
    } else if (3 * t3 < 2) {
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    } else {
      val = t1;
    }

    val *= 255; // manually set variables instead of using an array

    if (i === 0) {
      newR = val;
    } else if (i === 1) {
      newG = val;
    } else {
      newB = val;
    }
  }

  return new ColorHelper(RGB, newR, newG, newB, a, hasAlpha);
}

function clampColor(channel, value) {
  var min = 0;
  var max = maxChannelValues[channel];
  return value < min ? min : value > max ? max : value;
}

function ensureColor(c) {
  return c instanceof ColorHelper ? c : color(c);
}

function parseHexCode(stringValue) {
  var match = stringValue.match(/#(([a-f0-9]{6})|([a-f0-9]{3}))$/i);

  if (!match) {
    return undefined;
  }

  var hex = match[1];
  var hexColor = parseInt(hex.length === 3 ? hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] : hex, 16);
  var r = hexColor >> 16 & 0xff;
  var b = hexColor >> 8 & 0xff;
  var g = hexColor & 0xff;
  return new ColorHelper(RGB, r, b, g, 1, false);
}

function parseColorFunction(colorString) {
  var cssParts = (0, _formatting.parseCSSFunction)(colorString);

  if (!cssParts || !(cssParts.length === 4 || cssParts.length === 5)) {
    return undefined;
  }

  var fn = cssParts[0];
  var isRGBA = fn === 'rgba';
  var isHSLA = fn === 'hsla';
  var isRGB = fn === RGB;
  var isHSL = fn === HSL;
  var hasAlpha = isHSLA || isRGBA;
  var type;

  if (isRGB || isRGBA) {
    type = RGB;
  } else if (isHSL || isHSLA) {
    type = HSL;
  } else {
    throw new Error('unsupported color string');
  }

  var r = (0, _formatting.toFloat)(cssParts[1]);
  var g = isRGB || isRGBA ? (0, _formatting.toFloat)(cssParts[2]) : (0, _formatting.ensurePercent)(cssParts[2]);
  var b = isRGB || isRGBA ? (0, _formatting.toFloat)(cssParts[3]) : (0, _formatting.ensurePercent)(cssParts[3]);
  var a = hasAlpha ? (0, _formatting.toFloat)(cssParts[4]) : 1;
  return new ColorHelper(type, r, g, b, a, hasAlpha);
}
},{"./utils/formatting":"vrYl","./utils/math":"fVC5"}],"IUGL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linearGradient = linearGradient;
exports.repeatingLinearGradient = repeatingLinearGradient;

var _formatting = require("./utils/formatting");

/**
 * Helper for the linear-gradient function in CSS
 * https://drafts.csswg.org/css-images-3/#funcdef-linear-gradient
 */
function linearGradient(position) {
  var colors = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    colors[_i - 1] = arguments[_i];
  }

  return (0, _formatting.cssFunction)('linear-gradient', [position].concat(colors.map(flattenColorStops)));
}
/**
 * Helper for the repeating-linear-gradient function in CSS
 * https://drafts.csswg.org/css-images-3/#funcdef-repeating-linear-gradient
 */


function repeatingLinearGradient(position) {
  var colors = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    colors[_i - 1] = arguments[_i];
  }

  return (0, _formatting.cssFunction)('repeating-linear-gradient', [position].concat(colors.map(flattenColorStops)));
}
/**
 * Single CSSColorStop => string conversion is like:
 * 'x'=>'x'
 * ['x', '50%'] => 'x 50%'
 **/


function flattenColorStops(c) {
  return Array.isArray(c) ? c.map(function (s) {
    return s.toString();
  }).join(' ') : c.toString();
}
},{"./utils/formatting":"vrYl"}],"U4tE":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.margin = void 0;

var _lists = require("./lists");

var margin = _lists.params;
exports.margin = margin;
},{"./lists":"fgiZ"}],"tUbI":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.padding = void 0;

var _lists = require("./lists");

var padding = _lists.params;
exports.padding = padding;
},{"./lists":"fgiZ"}],"it9w":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calc = calc;
exports.quote = quote;
exports.important = important;
exports.url = url;
exports.coalesce = coalesce;

/**
 * Returns the value with '' around it.  Any 's will be escaped \' in the output
 */
function calc(exp) {
  return "calc(" + exp + ")";
}
/**
 * Returns the value with '' around it.  Any 's will be escaped \' in the output
 */


function quote(val) {
  var val2 = (val || val === 0 ? val.toString() : '').replace(/\'/g, "\\'");
  return "'" + val2 + "'";
}
/**
 * Returns the value with !important on the end.  If the value provided is a CSSHelper, it will
 * be converted to a string by necessity, but will look like it is the original type to TypeScript.
 */


function important(val) {
  if (!val && val !== 0) {
    return '';
  }

  return val.toString() + " !important";
}
/**
 * Returns the string in a url()
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/url
 */


function url(val) {
  return "url(" + (val || '') + ")";
}
/**
 * Returns the value as a string or an empty string if null or undefined.
 * @param value
 * @param fallbackValue
 */


function coalesce(value) {
  return !value && value !== 0 ? '' : value.toString();
}
},{}],"Lond":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transform = transform;
exports.translateZ = exports.translateY = exports.translateX = exports.translate3d = exports.translate = exports.skewY = exports.skewX = exports.skew = exports.scaleZ = exports.scaleY = exports.scaleX = exports.scale3d = exports.scale = exports.rotateZ = exports.rotateY = exports.rotateX = exports.rotate3d = exports.rotate = exports.perspective = exports.matrix3d = exports.matrix = void 0;

var _formatting = require("./utils/formatting");

/**
 * The CSS transform property lets you modify the coordinate space of the CSS visual formatting model. Using it, elements can be translated, rotated, scaled, and skewed.
 * Returns the transforms as a delimited string by space or returns 'none' if no arguments are provided
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform
 */
function transform() {
  var transforms = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    transforms[_i] = arguments[_i];
  }

  return transforms.length ? transforms.join(' ') : 'none';
}

var matrix = (0, _formatting.createFunction)('matrix');
exports.matrix = matrix;
var matrix3d = (0, _formatting.createFunction)('matrix3d');
exports.matrix3d = matrix3d;
var perspective = (0, _formatting.createFunction)('perspective');
exports.perspective = perspective;
var rotate = (0, _formatting.createFunction)('rotate');
exports.rotate = rotate;
var rotate3d = (0, _formatting.createFunction)('rotate3d');
exports.rotate3d = rotate3d;
var rotateX = (0, _formatting.createFunction)('rotateX');
exports.rotateX = rotateX;
var rotateY = (0, _formatting.createFunction)('rotateY');
exports.rotateY = rotateY;
var rotateZ = (0, _formatting.createFunction)('rotateZ');
exports.rotateZ = rotateZ;
var scale = (0, _formatting.createFunction)('scale');
exports.scale = scale;
var scale3d = (0, _formatting.createFunction)('scale3d');
exports.scale3d = scale3d;
var scaleX = (0, _formatting.createFunction)('scaleX');
exports.scaleX = scaleX;
var scaleY = (0, _formatting.createFunction)('scaleY');
exports.scaleY = scaleY;
var scaleZ = (0, _formatting.createFunction)('scaleZ');
exports.scaleZ = scaleZ;
var skew = (0, _formatting.createFunction)('skew');
exports.skew = skew;
var skewX = (0, _formatting.createFunction)('skewX');
exports.skewX = skewX;
var skewY = (0, _formatting.createFunction)('skewY');
exports.skewY = skewY;
var translate = (0, _formatting.createFunction)('translate');
exports.translate = translate;
var translate3d = (0, _formatting.createFunction)('translate3d');
exports.translate3d = translate3d;
var translateX = (0, _formatting.createFunction)('translateX');
exports.translateX = translateX;
var translateY = (0, _formatting.createFunction)('translateY');
exports.translateY = translateY;
var translateZ = (0, _formatting.createFunction)('translateZ');
exports.translateZ = translateZ;
},{"./utils/formatting":"vrYl"}],"O5kx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _background = require("./background");

Object.keys(_background).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _background[key];
    }
  });
});

var _border = require("./border");

Object.keys(_border).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _border[key];
    }
  });
});

var _color = require("./color");

Object.keys(_color).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _color[key];
    }
  });
});

var _gradient = require("./gradient");

Object.keys(_gradient).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _gradient[key];
    }
  });
});

var _lists = require("./lists");

Object.keys(_lists).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _lists[key];
    }
  });
});

var _margin = require("./margin");

Object.keys(_margin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _margin[key];
    }
  });
});

var _padding = require("./padding");

Object.keys(_padding).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _padding[key];
    }
  });
});

var _strings = require("./strings");

Object.keys(_strings).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _strings[key];
    }
  });
});

var _transforms = require("./transforms");

Object.keys(_transforms).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _transforms[key];
    }
  });
});

var _units = require("./units");

Object.keys(_units).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _units[key];
    }
  });
});
},{"./background":"DRMG","./border":"VyX4","./color":"voOo","./gradient":"IUGL","./lists":"fgiZ","./margin":"U4tE","./padding":"tUbI","./strings":"it9w","./transforms":"Lond","./units":"eDQ8"}],"kJvX":[function(require,module,exports) {
var define;
var global = arguments[3];
/* interact.js 1.9.17 | https://raw.github.com/taye/interact.js/master/LICENSE */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).interact=t()}}((function(){var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(t){return!(!t||!t.Window)&&t instanceof t.Window};var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.init=r,e.getWindow=o,e.default=void 0;var n={realWindow:void 0,window:void 0,getWindow:o,init:r};function r(t){n.realWindow=t;var e=t.document.createTextNode("");e.ownerDocument!==t.document&&"function"==typeof t.wrap&&t.wrap(e)===e&&(t=t.wrap(t)),n.window=t}function o(e){return(0,t.default)(e)?e:(e.ownerDocument||e).defaultView||n.window}"undefined"==typeof window?(n.window=void 0,n.realWindow=void 0):r(window),n.init=r;var i=n;e.default=i;var a={};function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=function(t){return!!t&&"object"===s(t)},u=function(t){return"function"==typeof t},c={window:function(n){return n===e.default.window||(0,t.default)(n)},docFrag:function(t){return l(t)&&11===t.nodeType},object:l,func:u,number:function(t){return"number"==typeof t},bool:function(t){return"boolean"==typeof t},string:function(t){return"string"==typeof t},element:function(t){if(!t||"object"!==s(t))return!1;var n=e.default.getWindow(t)||e.default.window;return/object|function/.test(s(n.Element))?t instanceof n.Element:1===t.nodeType&&"string"==typeof t.nodeName},plainObject:function(t){return l(t)&&!!t.constructor&&/function Object\b/.test(t.constructor.toString())},array:function(t){return l(t)&&void 0!==t.length&&u(t.splice)}};a.default=c;var f={};function d(t){var e=t.interaction;if("drag"===e.prepared.name){var n=e.prepared.axis;"x"===n?(e.coords.cur.page.y=e.coords.start.page.y,e.coords.cur.client.y=e.coords.start.client.y,e.coords.velocity.client.y=0,e.coords.velocity.page.y=0):"y"===n&&(e.coords.cur.page.x=e.coords.start.page.x,e.coords.cur.client.x=e.coords.start.client.x,e.coords.velocity.client.x=0,e.coords.velocity.page.x=0)}}function p(t){var e=t.iEvent,n=t.interaction;if("drag"===n.prepared.name){var r=n.prepared.axis;if("x"===r||"y"===r){var o="x"===r?"y":"x";e.page[o]=n.coords.start.page[o],e.client[o]=n.coords.start.client[o],e.delta[o]=0}}}Object.defineProperty(f,"__esModule",{value:!0}),f.default=void 0;var v={id:"actions/drag",install:function(t){var e=t.actions,n=t.Interactable,r=t.defaults;n.prototype.draggable=v.draggable,e.map.drag=v,e.methodDict.drag="draggable",r.actions.drag=v.defaults},listeners:{"interactions:before-action-move":d,"interactions:action-resume":d,"interactions:action-move":p,"auto-start:check":function(t){var e=t.interaction,n=t.interactable,r=t.buttons,o=n.options.drag;if(o&&o.enabled&&(!e.pointerIsDown||!/mouse|pointer/.test(e.pointerType)||0!=(r&n.options.drag.mouseButtons)))return t.action={name:"drag",axis:"start"===o.lockAxis?o.startAxis:o.lockAxis},!1}},draggable:function(t){return a.default.object(t)?(this.options.drag.enabled=!1!==t.enabled,this.setPerAction("drag",t),this.setOnEvents("drag",t),/^(xy|x|y|start)$/.test(t.lockAxis)&&(this.options.drag.lockAxis=t.lockAxis),/^(xy|x|y)$/.test(t.startAxis)&&(this.options.drag.startAxis=t.startAxis),this):a.default.bool(t)?(this.options.drag.enabled=t,this):this.options.drag},beforeMove:d,move:p,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"}},h=v;f.default=h;var g={};Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var y={init:function(t){var e=t;y.document=e.document,y.DocumentFragment=e.DocumentFragment||m,y.SVGElement=e.SVGElement||m,y.SVGSVGElement=e.SVGSVGElement||m,y.SVGElementInstance=e.SVGElementInstance||m,y.Element=e.Element||m,y.HTMLElement=e.HTMLElement||y.Element,y.Event=e.Event,y.Touch=e.Touch||m,y.PointerEvent=e.PointerEvent||e.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function m(){}var b=y;g.default=b;var x={};Object.defineProperty(x,"__esModule",{value:!0}),x.default=void 0;var w={init:function(t){var n=g.default.Element,r=e.default.window.navigator;w.supportsTouch="ontouchstart"in t||a.default.func(t.DocumentTouch)&&g.default.document instanceof t.DocumentTouch,w.supportsPointerEvent=!1!==r.pointerEnabled&&!!g.default.PointerEvent,w.isIOS=/iP(hone|od|ad)/.test(r.platform),w.isIOS7=/iP(hone|od|ad)/.test(r.platform)&&/OS 7[^\d]/.test(r.appVersion),w.isIe9=/MSIE 9/.test(r.userAgent),w.isOperaMobile="Opera"===r.appName&&w.supportsTouch&&/Presto/.test(r.userAgent),w.prefixedMatchesSelector="matches"in n.prototype?"matches":"webkitMatchesSelector"in n.prototype?"webkitMatchesSelector":"mozMatchesSelector"in n.prototype?"mozMatchesSelector":"oMatchesSelector"in n.prototype?"oMatchesSelector":"msMatchesSelector",w.pEventTypes=w.supportsPointerEvent?g.default.PointerEvent===t.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,w.wheelEvent="onmousewheel"in g.default.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null};var _=w;x.default=_;var P={};function S(t){var e=t.parentNode;if(a.default.docFrag(e)){for(;(e=e.host)&&a.default.docFrag(e););return e}return e}function O(t,n){return e.default.window!==e.default.realWindow&&(n=n.replace(/\/deep\//g," ")),t[x.default.prefixedMatchesSelector](n)}Object.defineProperty(P,"__esModule",{value:!0}),P.nodeContains=function(t,e){for(;e;){if(e===t)return!0;e=e.parentNode}return!1},P.closest=function(t,e){for(;a.default.element(t);){if(O(t,e))return t;t=S(t)}return null},P.parentNode=S,P.matchesSelector=O,P.indexOfDeepestElement=function(t){var n,r,o=[],i=t[0],a=i?0:-1;for(n=1;n<t.length;n++){var s=t[n];if(s&&s!==i)if(i){if(s.parentNode!==s.ownerDocument)if(i.parentNode!==s.ownerDocument)if(s.parentNode!==i.parentNode){if(!o.length)for(var l=i,u=void 0;(u=E(l))&&u!==l.ownerDocument;)o.unshift(l),l=u;var c=void 0;if(i instanceof g.default.HTMLElement&&s instanceof g.default.SVGElement&&!(s instanceof g.default.SVGSVGElement)){if(s===i.parentNode)continue;c=s.ownerSVGElement}else c=s;for(var f=[];c.parentNode!==c.ownerDocument;)f.unshift(c),c=E(c);for(r=0;f[r]&&f[r]===o[r];)r++;for(var d=[f[r-1],f[r],o[r]],p=d[0].lastChild;p;){if(p===d[1]){i=s,a=n,o=f;break}if(p===d[2])break;p=p.previousSibling}}else{var v=parseInt((0,e.getWindow)(i).getComputedStyle(i).zIndex,10)||0;(parseInt((0,e.getWindow)(s).getComputedStyle(s).zIndex,10)||0)>=v&&(i=s,a=n)}else i=s,a=n}else i=s,a=n}return a},P.matchesUpTo=function(t,e,n){for(;a.default.element(t);){if(O(t,e))return!0;if((t=S(t))===n)return O(t,e)}return!1},P.getActualElement=function(t){return t instanceof g.default.SVGElementInstance?t.correspondingUseElement:t},P.getScrollXY=T,P.getElementClientRect=M,P.getElementRect=function(t){var n=M(t);if(!x.default.isIOS7&&n){var r=T(e.default.getWindow(t));n.left+=r.x,n.right+=r.x,n.top+=r.y,n.bottom+=r.y}return n},P.getPath=function(t){var e=[];for(;t;)e.push(t),t=S(t);return e},P.trySelector=function(t){if(!a.default.string(t))return!1;return g.default.document.querySelector(t),!0};var E=function(t){return t.parentNode?t.parentNode:t.host};function T(t){return{x:(t=t||e.default.window).scrollX||t.document.documentElement.scrollLeft,y:t.scrollY||t.document.documentElement.scrollTop}}function M(t){var e=t instanceof g.default.SVGElement?t.getBoundingClientRect():t.getClientRects()[0];return e&&{left:e.left,right:e.right,top:e.top,bottom:e.bottom,width:e.width||e.right-e.left,height:e.height||e.bottom-e.top}}var j={};Object.defineProperty(j,"__esModule",{value:!0}),j.default=function(t,e){for(var n in e)t[n]=e[n];return t};var k={};function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function D(t,e,n){return"parent"===t?(0,P.parentNode)(n):"self"===t?e.getRect(n):(0,P.closest)(n,t)}Object.defineProperty(k,"__esModule",{value:!0}),k.getStringOptionResult=D,k.resolveRectLike=function(t,e,n,r){var o=t;a.default.string(o)?o=D(o,e,n):a.default.func(o)&&(o=o.apply(void 0,function(t){if(Array.isArray(t))return I(t)}(i=r)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(i)||function(t,e){if(t){if("string"==typeof t)return I(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(t,e):void 0}}(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()));var i;a.default.element(o)&&(o=(0,P.getElementRect)(o));return o},k.rectToXY=function(t){return t&&{x:"x"in t?t.x:t.left,y:"y"in t?t.y:t.top}},k.xywhToTlbr=function(t){!t||"left"in t&&"top"in t||((t=(0,j.default)({},t)).left=t.x||0,t.top=t.y||0,t.right=t.right||t.left+t.width,t.bottom=t.bottom||t.top+t.height);return t},k.tlbrToXywh=function(t){!t||"x"in t&&"y"in t||((t=(0,j.default)({},t)).x=t.left||0,t.y=t.top||0,t.width=t.width||(t.right||0)-t.x,t.height=t.height||(t.bottom||0)-t.y);return t},k.addEdges=function(t,e,n){t.left&&(e.left+=n.x);t.right&&(e.right+=n.x);t.top&&(e.top+=n.y);t.bottom&&(e.bottom+=n.y);e.width=e.right-e.left,e.height=e.bottom-e.top};var A={};Object.defineProperty(A,"__esModule",{value:!0}),A.default=function(t,e,n){var r=t.options[n],o=r&&r.origin||t.options.origin,i=(0,k.resolveRectLike)(o,t,e,[t&&e]);return(0,k.rectToXY)(i)||{x:0,y:0}};var z={};function C(t){return t.trim().split(/ +/)}Object.defineProperty(z,"__esModule",{value:!0}),z.default=function t(e,n,r){r=r||{},a.default.string(e)&&-1!==e.search(" ")&&(e=C(e));if(a.default.array(e))return e.reduce((function(e,o){return(0,j.default)(e,t(o,n,r))}),r);a.default.object(e)&&(n=e,e="");if(a.default.func(n))r[e]=r[e]||[],r[e].push(n);else if(a.default.array(n))for(var o=0;o<n.length;o++){var i;i=n[o],t(e,i,r)}else if(a.default.object(n))for(var s in n){var l=C(s).map((function(t){return"".concat(e).concat(t)}));t(l,n[s],r)}return r};var R={};Object.defineProperty(R,"__esModule",{value:!0}),R.default=void 0;R.default=function(t,e){return Math.sqrt(t*t+e*e)};var F={};function X(t,e){for(var n in e){var r=X.prefixedPropREs,o=!1;for(var i in r)if(0===n.indexOf(i)&&r[i].test(n)){o=!0;break}o||"function"==typeof e[n]||(t[n]=e[n])}return t}Object.defineProperty(F,"__esModule",{value:!0}),F.default=void 0,X.prefixedPropREs={webkit:/(Movement[XY]|Radius[XY]|RotationAngle|Force)$/,moz:/(Pressure)$/};var Y=X;F.default=Y;var W={};function L(t){return t instanceof g.default.Event||t instanceof g.default.Touch}function N(t,e,n){return t=t||"page",(n=n||{}).x=e[t+"X"],n.y=e[t+"Y"],n}function B(t,e){return e=e||{x:0,y:0},x.default.isOperaMobile&&L(t)?(N("screen",t,e),e.x+=window.scrollX,e.y+=window.scrollY):N("page",t,e),e}function U(t,e){return e=e||{},x.default.isOperaMobile&&L(t)?N("screen",t,e):N("client",t,e),e}function V(t){var e=[];return a.default.array(t)?(e[0]=t[0],e[1]=t[1]):"touchend"===t.type?1===t.touches.length?(e[0]=t.touches[0],e[1]=t.changedTouches[0]):0===t.touches.length&&(e[0]=t.changedTouches[0],e[1]=t.changedTouches[1]):(e[0]=t.touches[0],e[1]=t.touches[1]),e}function q(t){for(var e={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},n=0;n<t.length;n++){var r=t[n];for(var o in e)e[o]+=r[o]}for(var i in e)e[i]/=t.length;return e}Object.defineProperty(W,"__esModule",{value:!0}),W.copyCoords=function(t,e){t.page=t.page||{},t.page.x=e.page.x,t.page.y=e.page.y,t.client=t.client||{},t.client.x=e.client.x,t.client.y=e.client.y,t.timeStamp=e.timeStamp},W.setCoordDeltas=function(t,e,n){t.page.x=n.page.x-e.page.x,t.page.y=n.page.y-e.page.y,t.client.x=n.client.x-e.client.x,t.client.y=n.client.y-e.client.y,t.timeStamp=n.timeStamp-e.timeStamp},W.setCoordVelocity=function(t,e){var n=Math.max(e.timeStamp/1e3,.001);t.page.x=e.page.x/n,t.page.y=e.page.y/n,t.client.x=e.client.x/n,t.client.y=e.client.y/n,t.timeStamp=n},W.setZeroCoords=function(t){t.page.x=0,t.page.y=0,t.client.x=0,t.client.y=0},W.isNativePointer=L,W.getXY=N,W.getPageXY=B,W.getClientXY=U,W.getPointerId=function(t){return a.default.number(t.pointerId)?t.pointerId:t.identifier},W.setCoords=function(t,e,n){var r=e.length>1?q(e):e[0],o={};B(r,o),t.page.x=o.x,t.page.y=o.y,U(r,o),t.client.x=o.x,t.client.y=o.y,t.timeStamp=n},W.getTouchPair=V,W.pointerAverage=q,W.touchBBox=function(t){if(!(t.length||t.touches&&t.touches.length>1))return null;var e=V(t),n=Math.min(e[0].pageX,e[1].pageX),r=Math.min(e[0].pageY,e[1].pageY),o=Math.max(e[0].pageX,e[1].pageX),i=Math.max(e[0].pageY,e[1].pageY);return{x:n,y:r,left:n,top:r,right:o,bottom:i,width:o-n,height:i-r}},W.touchDistance=function(t,e){var n=e+"X",r=e+"Y",o=V(t),i=o[0][n]-o[1][n],a=o[0][r]-o[1][r];return(0,R.default)(i,a)},W.touchAngle=function(t,e){var n=e+"X",r=e+"Y",o=V(t),i=o[1][n]-o[0][n],a=o[1][r]-o[0][r];return 180*Math.atan2(a,i)/Math.PI},W.getPointerType=function(t){return a.default.string(t.pointerType)?t.pointerType:a.default.number(t.pointerType)?[void 0,void 0,"touch","pen","mouse"][t.pointerType]:/touch/.test(t.type)||t instanceof g.default.Touch?"touch":"mouse"},W.getEventTargets=function(t){var e=a.default.func(t.composedPath)?t.composedPath():t.path;return[P.getActualElement(e?e[0]:t.target),P.getActualElement(t.currentTarget)]},W.newCoords=function(){return{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},W.coordsToEvent=function(t){return{coords:t,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}},Object.defineProperty(W,"pointerExtend",{enumerable:!0,get:function(){return F.default}});var G={};function $(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(G,"__esModule",{value:!0}),G.default=G.BaseEvent=void 0;var H=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.type=void 0,this.target=void 0,this.currentTarget=void 0,this.interactable=void 0,this._interaction=void 0,this.timeStamp=void 0,this.immediatePropagationStopped=!1,this.propagationStopped=!1,this._interaction=e}var e,n,r;return e=t,(n=[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&$(e.prototype,n),r&&$(e,r),t}();G.BaseEvent=H,Object.defineProperty(H.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var K=H;G.default=K;var Z={};Object.defineProperty(Z,"__esModule",{value:!0}),Z.find=Z.findIndex=Z.from=Z.merge=Z.remove=Z.contains=void 0;Z.contains=function(t,e){return-1!==t.indexOf(e)};Z.remove=function(t,e){return t.splice(t.indexOf(e),1)};var J=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];t.push(r)}return t};Z.merge=J;Z.from=function(t){return J([],t)};var Q=function(t,e){for(var n=0;n<t.length;n++)if(e(t[n],n,t))return n;return-1};Z.findIndex=Q;Z.find=function(t,e){return t[Q(t,e)]};var tt={};function et(t){return(et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function nt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function rt(t,e){return(rt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function ot(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=at(t);if(e){var o=at(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return it(this,n)}}function it(t,e){return!e||"object"!==et(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function at(t){return(at=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(tt,"__esModule",{value:!0}),tt.default=void 0;var st=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&rt(t,e)}(i,t);var e,n,r,o=ot(i);function i(t,e,n){var r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(r=o.call(this,e._interaction)).target=void 0,r.dropzone=void 0,r.dragEvent=void 0,r.relatedTarget=void 0,r.draggable=void 0,r.timeStamp=void 0,r.propagationStopped=!1,r.immediatePropagationStopped=!1;var a="dragleave"===n?t.prev:t.cur,s=a.element,l=a.dropzone;return r.type=n,r.target=s,r.currentTarget=s,r.dropzone=l,r.dragEvent=e,r.relatedTarget=e.target,r.draggable=e.interactable,r.timeStamp=e.timeStamp,r}return e=i,(n=[{key:"reject",value:function(){var t=this,e=this._interaction.dropState;if("dropactivate"===this.type||this.dropzone&&e.cur.dropzone===this.dropzone&&e.cur.element===this.target)if(e.prev.dropzone=this.dropzone,e.prev.element=this.target,e.rejected=!0,e.events.enter=null,this.stopImmediatePropagation(),"dropactivate"===this.type){var n=e.activeDrops,r=Z.findIndex(n,(function(e){var n=e.dropzone,r=e.element;return n===t.dropzone&&r===t.target}));e.activeDrops.splice(r,1);var o=new i(e,this.dragEvent,"dropdeactivate");o.dropzone=this.dropzone,o.target=this.target,this.dropzone.fire(o)}else this.dropzone.fire(new i(e,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&nt(e.prototype,n),r&&nt(e,r),i}(G.default);tt.default=st;var lt={};function ut(t,e){for(var n=0;n<t.slice().length;n++){var r=t.slice()[n],o=r.dropzone,i=r.element;e.dropzone=o,e.target=i,o.fire(e),e.propagationStopped=e.immediatePropagationStopped=!1}}function ct(t,e){for(var n=function(t,e){for(var n=t.interactables,r=[],o=0;o<n.list.length;o++){var i=n.list[o];if(i.options.drop.enabled){var s=i.options.drop.accept;if(!(a.default.element(s)&&s!==e||a.default.string(s)&&!P.matchesSelector(e,s)||a.default.func(s)&&!s({dropzone:i,draggableElement:e})))for(var l=a.default.string(i.target)?i._context.querySelectorAll(i.target):a.default.array(i.target)?i.target:[i.target],u=0;u<l.length;u++){var c=l[u];c!==e&&r.push({dropzone:i,element:c})}}}return r}(t,e),r=0;r<n.length;r++){var o=n[r];o.rect=o.dropzone.getRect(o.element)}return n}function ft(t,e,n){for(var r=t.dropState,o=t.interactable,i=t.element,a=[],s=0;s<r.activeDrops.length;s++){var l=r.activeDrops[s],u=l.dropzone,c=l.element,f=l.rect;a.push(u.dropCheck(e,n,o,i,c,f)?c:null)}var d=P.indexOfDeepestElement(a);return r.activeDrops[d]||null}function dt(t,e,n){var r=t.dropState,o={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return"dragstart"===n.type&&(o.activate=new tt.default(r,n,"dropactivate"),o.activate.target=null,o.activate.dropzone=null),"dragend"===n.type&&(o.deactivate=new tt.default(r,n,"dropdeactivate"),o.deactivate.target=null,o.deactivate.dropzone=null),r.rejected||(r.cur.element!==r.prev.element&&(r.prev.dropzone&&(o.leave=new tt.default(r,n,"dragleave"),n.dragLeave=o.leave.target=r.prev.element,n.prevDropzone=o.leave.dropzone=r.prev.dropzone),r.cur.dropzone&&(o.enter=new tt.default(r,n,"dragenter"),n.dragEnter=r.cur.element,n.dropzone=r.cur.dropzone)),"dragend"===n.type&&r.cur.dropzone&&(o.drop=new tt.default(r,n,"drop"),n.dropzone=r.cur.dropzone,n.relatedTarget=r.cur.element),"dragmove"===n.type&&r.cur.dropzone&&(o.move=new tt.default(r,n,"dropmove"),o.move.dragmove=n,n.dropzone=r.cur.dropzone)),o}function pt(t,e){var n=t.dropState,r=n.activeDrops,o=n.cur,i=n.prev;e.leave&&i.dropzone.fire(e.leave),e.move&&o.dropzone.fire(e.move),e.enter&&o.dropzone.fire(e.enter),e.drop&&o.dropzone.fire(e.drop),e.deactivate&&ut(r,e.deactivate),n.prev.dropzone=o.dropzone,n.prev.element=o.element}function vt(t,e){var n=t.interaction,r=t.iEvent,o=t.event;if("dragmove"===r.type||"dragend"===r.type){var i=n.dropState;e.dynamicDrop&&(i.activeDrops=ct(e,n.element));var a=r,s=ft(n,a,o);i.rejected=i.rejected&&!!s&&s.dropzone===i.cur.dropzone&&s.element===i.cur.element,i.cur.dropzone=s&&s.dropzone,i.cur.element=s&&s.element,i.events=dt(n,0,a)}}Object.defineProperty(lt,"__esModule",{value:!0}),lt.default=void 0;var ht={id:"actions/drop",install:function(t){var e=t.actions,n=t.interactStatic,r=t.Interactable,o=t.defaults;t.usePlugin(f.default),r.prototype.dropzone=function(t){return function(t,e){if(a.default.object(e)){if(t.options.drop.enabled=!1!==e.enabled,e.listeners){var n=(0,z.default)(e.listeners),r=Object.keys(n).reduce((function(t,e){return t[/^(enter|leave)/.test(e)?"drag".concat(e):/^(activate|deactivate|move)/.test(e)?"drop".concat(e):e]=n[e],t}),{});t.off(t.options.drop.listeners),t.on(r),t.options.drop.listeners=r}return a.default.func(e.ondrop)&&t.on("drop",e.ondrop),a.default.func(e.ondropactivate)&&t.on("dropactivate",e.ondropactivate),a.default.func(e.ondropdeactivate)&&t.on("dropdeactivate",e.ondropdeactivate),a.default.func(e.ondragenter)&&t.on("dragenter",e.ondragenter),a.default.func(e.ondragleave)&&t.on("dragleave",e.ondragleave),a.default.func(e.ondropmove)&&t.on("dropmove",e.ondropmove),/^(pointer|center)$/.test(e.overlap)?t.options.drop.overlap=e.overlap:a.default.number(e.overlap)&&(t.options.drop.overlap=Math.max(Math.min(1,e.overlap),0)),"accept"in e&&(t.options.drop.accept=e.accept),"checker"in e&&(t.options.drop.checker=e.checker),t}if(a.default.bool(e))return t.options.drop.enabled=e,t;return t.options.drop}(this,t)},r.prototype.dropCheck=function(t,e,n,r,o,i){return function(t,e,n,r,o,i,s){var l=!1;if(!(s=s||t.getRect(i)))return!!t.options.drop.checker&&t.options.drop.checker(e,n,l,t,i,r,o);var u=t.options.drop.overlap;if("pointer"===u){var c=(0,A.default)(r,o,"drag"),f=W.getPageXY(e);f.x+=c.x,f.y+=c.y;var d=f.x>s.left&&f.x<s.right,p=f.y>s.top&&f.y<s.bottom;l=d&&p}var v=r.getRect(o);if(v&&"center"===u){var h=v.left+v.width/2,g=v.top+v.height/2;l=h>=s.left&&h<=s.right&&g>=s.top&&g<=s.bottom}if(v&&a.default.number(u)){var y=Math.max(0,Math.min(s.right,v.right)-Math.max(s.left,v.left))*Math.max(0,Math.min(s.bottom,v.bottom)-Math.max(s.top,v.top))/(v.width*v.height);l=y>=u}t.options.drop.checker&&(l=t.options.drop.checker(e,n,l,t,i,r,o));return l}(this,t,e,n,r,o,i)},n.dynamicDrop=function(e){return a.default.bool(e)?(t.dynamicDrop=e,n):t.dynamicDrop},(0,j.default)(e.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),e.methodDict.drop="dropzone",t.dynamicDrop=!1,o.actions.drop=ht.defaults},listeners:{"interactions:before-action-start":function(t){var e=t.interaction;"drag"===e.prepared.name&&(e.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(t,e){var n=t.interaction,r=(t.event,t.iEvent);if("drag"===n.prepared.name){var o=n.dropState;o.activeDrops=null,o.events=null,o.activeDrops=ct(e,n.element),o.events=dt(n,0,r),o.events.activate&&(ut(o.activeDrops,o.events.activate),e.fire("actions/drop:start",{interaction:n,dragEvent:r}))}},"interactions:action-move":vt,"interactions:action-end":vt,"interactions:after-action-move":function(t,e){var n=t.interaction,r=t.iEvent;"drag"===n.prepared.name&&(pt(n,n.dropState.events),e.fire("actions/drop:move",{interaction:n,dragEvent:r}),n.dropState.events={})},"interactions:after-action-end":function(t,e){var n=t.interaction,r=t.iEvent;"drag"===n.prepared.name&&(pt(n,n.dropState.events),e.fire("actions/drop:end",{interaction:n,dragEvent:r}))},"interactions:stop":function(t){var e=t.interaction;if("drag"===e.prepared.name){var n=e.dropState;n&&(n.activeDrops=null,n.events=null,n.cur.dropzone=null,n.cur.element=null,n.prev.dropzone=null,n.prev.element=null,n.rejected=!1)}}},getActiveDrops:ct,getDrop:ft,getDropEvents:dt,fireDropEvents:pt,defaults:{enabled:!1,accept:null,overlap:"pointer"}},gt=ht;lt.default=gt;var yt={};function mt(t){var e=t.interaction,n=t.iEvent,r=t.phase;if("gesture"===e.prepared.name){var o=e.pointers.map((function(t){return t.pointer})),i="start"===r,s="end"===r,l=e.interactable.options.deltaSource;if(n.touches=[o[0],o[1]],i)n.distance=W.touchDistance(o,l),n.box=W.touchBBox(o),n.scale=1,n.ds=0,n.angle=W.touchAngle(o,l),n.da=0,e.gesture.startDistance=n.distance,e.gesture.startAngle=n.angle;else if(s){var u=e.prevEvent;n.distance=u.distance,n.box=u.box,n.scale=u.scale,n.ds=0,n.angle=u.angle,n.da=0}else n.distance=W.touchDistance(o,l),n.box=W.touchBBox(o),n.scale=n.distance/e.gesture.startDistance,n.angle=W.touchAngle(o,l),n.ds=n.scale-e.gesture.scale,n.da=n.angle-e.gesture.angle;e.gesture.distance=n.distance,e.gesture.angle=n.angle,a.default.number(n.scale)&&n.scale!==1/0&&!isNaN(n.scale)&&(e.gesture.scale=n.scale)}}Object.defineProperty(yt,"__esModule",{value:!0}),yt.default=void 0;var bt={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(t){var e=t.actions,n=t.Interactable,r=t.defaults;n.prototype.gesturable=function(t){return a.default.object(t)?(this.options.gesture.enabled=!1!==t.enabled,this.setPerAction("gesture",t),this.setOnEvents("gesture",t),this):a.default.bool(t)?(this.options.gesture.enabled=t,this):this.options.gesture},e.map.gesture=bt,e.methodDict.gesture="gesturable",r.actions.gesture=bt.defaults},listeners:{"interactions:action-start":mt,"interactions:action-move":mt,"interactions:action-end":mt,"interactions:new":function(t){t.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(t){if(!(t.interaction.pointers.length<2)){var e=t.interactable.options.gesture;if(e&&e.enabled)return t.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""}},xt=bt;yt.default=xt;var wt={};function _t(t,e,n,r,o,i,s){if(!e)return!1;if(!0===e){var l=a.default.number(i.width)?i.width:i.right-i.left,u=a.default.number(i.height)?i.height:i.bottom-i.top;if(s=Math.min(s,Math.abs(("left"===t||"right"===t?l:u)/2)),l<0&&("left"===t?t="right":"right"===t&&(t="left")),u<0&&("top"===t?t="bottom":"bottom"===t&&(t="top")),"left"===t)return n.x<(l>=0?i.left:i.right)+s;if("top"===t)return n.y<(u>=0?i.top:i.bottom)+s;if("right"===t)return n.x>(l>=0?i.right:i.left)-s;if("bottom"===t)return n.y>(u>=0?i.bottom:i.top)-s}return!!a.default.element(r)&&(a.default.element(e)?e===r:P.matchesUpTo(r,e,o))}function Pt(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.resizeAxes){var r=e;n.interactable.options.resize.square?("y"===n.resizeAxes?r.delta.x=r.delta.y:r.delta.y=r.delta.x,r.axes="xy"):(r.axes=n.resizeAxes,"x"===n.resizeAxes?r.delta.y=0:"y"===n.resizeAxes&&(r.delta.x=0))}}Object.defineProperty(wt,"__esModule",{value:!0}),wt.default=void 0;var St={id:"actions/resize",before:["actions/drag"],install:function(t){var e=t.actions,n=t.browser,r=t.Interactable,o=t.defaults;St.cursors=function(t){return t.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}}(n),St.defaultMargin=n.supportsTouch||n.supportsPointerEvent?20:10,r.prototype.resizable=function(e){return function(t,e,n){if(a.default.object(e))return t.options.resize.enabled=!1!==e.enabled,t.setPerAction("resize",e),t.setOnEvents("resize",e),a.default.string(e.axis)&&/^x$|^y$|^xy$/.test(e.axis)?t.options.resize.axis=e.axis:null===e.axis&&(t.options.resize.axis=n.defaults.actions.resize.axis),a.default.bool(e.preserveAspectRatio)?t.options.resize.preserveAspectRatio=e.preserveAspectRatio:a.default.bool(e.square)&&(t.options.resize.square=e.square),t;if(a.default.bool(e))return t.options.resize.enabled=e,t;return t.options.resize}(this,e,t)},e.map.resize=St,e.methodDict.resize="resizable",o.actions.resize=St.defaults},listeners:{"interactions:new":function(t){t.interaction.resizeAxes="xy"},"interactions:action-start":function(t){!function(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.prepared.edges){var r=e,o=n.rect;n._rects={start:(0,j.default)({},o),corrected:(0,j.default)({},o),previous:(0,j.default)({},o),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},r.edges=n.prepared.edges,r.rect=n._rects.corrected,r.deltaRect=n._rects.delta}}(t),Pt(t)},"interactions:action-move":function(t){!function(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.prepared.edges){var r=e,o=n.interactable.options.resize.invert,i="reposition"===o||"negate"===o,a=n.rect,s=n._rects,l=s.start,u=s.corrected,c=s.delta,f=s.previous;if((0,j.default)(f,u),i){if((0,j.default)(u,a),"reposition"===o){if(u.top>u.bottom){var d=u.top;u.top=u.bottom,u.bottom=d}if(u.left>u.right){var p=u.left;u.left=u.right,u.right=p}}}else u.top=Math.min(a.top,l.bottom),u.bottom=Math.max(a.bottom,l.top),u.left=Math.min(a.left,l.right),u.right=Math.max(a.right,l.left);for(var v in u.width=u.right-u.left,u.height=u.bottom-u.top,u)c[v]=u[v]-f[v];r.edges=n.prepared.edges,r.rect=u,r.deltaRect=c}}(t),Pt(t)},"interactions:action-end":function(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.prepared.edges){var r=e;r.edges=n.prepared.edges,r.rect=n._rects.corrected,r.deltaRect=n._rects.delta}},"auto-start:check":function(t){var e=t.interaction,n=t.interactable,r=t.element,o=t.rect,i=t.buttons;if(o){var s=(0,j.default)({},e.coords.cur.page),l=n.options.resize;if(l&&l.enabled&&(!e.pointerIsDown||!/mouse|pointer/.test(e.pointerType)||0!=(i&l.mouseButtons))){if(a.default.object(l.edges)){var u={left:!1,right:!1,top:!1,bottom:!1};for(var c in u)u[c]=_t(c,l.edges[c],s,e._latestPointer.eventTarget,r,o,l.margin||St.defaultMargin);u.left=u.left&&!u.right,u.top=u.top&&!u.bottom,(u.left||u.right||u.top||u.bottom)&&(t.action={name:"resize",edges:u})}else{var f="y"!==l.axis&&s.x>o.right-St.defaultMargin,d="x"!==l.axis&&s.y>o.bottom-St.defaultMargin;(f||d)&&(t.action={name:"resize",axes:(f?"x":"")+(d?"y":"")})}return!t.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(t){var e=t.edges,n=t.axis,r=t.name,o=St.cursors,i=null;if(n)i=o[r+n];else if(e){for(var a="",s=["top","bottom","left","right"],l=0;l<s.length;l++){var u=s[l];e[u]&&(a+=u)}i=o[a]}return i},defaultMargin:null},Ot=St;wt.default=Ot;var Et={};Object.defineProperty(Et,"__esModule",{value:!0}),Et.default=void 0;var Tt={id:"actions",install:function(t){t.usePlugin(yt.default),t.usePlugin(wt.default),t.usePlugin(f.default),t.usePlugin(lt.default)}};Et.default=Tt;var Mt={};Object.defineProperty(Mt,"__esModule",{value:!0}),Mt.default=void 0;Mt.default={};var jt={};Object.defineProperty(jt,"__esModule",{value:!0}),jt.default=void 0;var kt,It,Dt=0;var At={request:function(t){return kt(t)},cancel:function(t){return It(t)},init:function(t){if(kt=t.requestAnimationFrame,It=t.cancelAnimationFrame,!kt)for(var e=["ms","moz","webkit","o"],n=0;n<e.length;n++){var r=e[n];kt=t["".concat(r,"RequestAnimationFrame")],It=t["".concat(r,"CancelAnimationFrame")]||t["".concat(r,"CancelRequestAnimationFrame")]}kt||(kt=function(t){var e=Date.now(),n=Math.max(0,16-(e-Dt)),r=setTimeout((function(){t(e+n)}),n);return Dt=e+n,r},It=function(t){return clearTimeout(t)})}};jt.default=At;var zt={};Object.defineProperty(zt,"__esModule",{value:!0}),zt.getContainer=Rt,zt.getScroll=Ft,zt.getScrollSize=function(t){a.default.window(t)&&(t=window.document.body);return{x:t.scrollWidth,y:t.scrollHeight}},zt.getScrollSizeDelta=function(t,e){var n=t.interaction,r=t.element,o=n&&n.interactable.options[n.prepared.name].autoScroll;if(!o||!o.enabled)return e(),{x:0,y:0};var i=Rt(o.container,n.interactable,r),a=Ft(i);e();var s=Ft(i);return{x:s.x-a.x,y:s.y-a.y}},zt.default=void 0;var Ct={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(t){Ct.isScrolling=!0,jt.default.cancel(Ct.i),t.autoScroll=Ct,Ct.interaction=t,Ct.prevTime=Ct.now(),Ct.i=jt.default.request(Ct.scroll)},stop:function(){Ct.isScrolling=!1,Ct.interaction&&(Ct.interaction.autoScroll=null),jt.default.cancel(Ct.i)},scroll:function(){var t=Ct.interaction,e=t.interactable,n=t.element,r=t.prepared.name,o=e.options[r].autoScroll,i=Rt(o.container,e,n),s=Ct.now(),l=(s-Ct.prevTime)/1e3,u=o.speed*l;if(u>=1){var c={x:Ct.x*u,y:Ct.y*u};if(c.x||c.y){var f=Ft(i);a.default.window(i)?i.scrollBy(c.x,c.y):i&&(i.scrollLeft+=c.x,i.scrollTop+=c.y);var d=Ft(i),p={x:d.x-f.x,y:d.y-f.y};(p.x||p.y)&&e.fire({type:"autoscroll",target:n,interactable:e,delta:p,interaction:t,container:i})}Ct.prevTime=s}Ct.isScrolling&&(jt.default.cancel(Ct.i),Ct.i=jt.default.request(Ct.scroll))},check:function(t,e){var n=t.options;return n[e].autoScroll&&n[e].autoScroll.enabled},onInteractionMove:function(t){var e=t.interaction,n=t.pointer;if(e.interacting()&&Ct.check(e.interactable,e.prepared.name))if(e.simulation)Ct.x=Ct.y=0;else{var r,o,i,s,l=e.interactable,u=e.element,c=e.prepared.name,f=l.options[c].autoScroll,d=Rt(f.container,l,u);if(a.default.window(d))s=n.clientX<Ct.margin,r=n.clientY<Ct.margin,o=n.clientX>d.innerWidth-Ct.margin,i=n.clientY>d.innerHeight-Ct.margin;else{var p=P.getElementClientRect(d);s=n.clientX<p.left+Ct.margin,r=n.clientY<p.top+Ct.margin,o=n.clientX>p.right-Ct.margin,i=n.clientY>p.bottom-Ct.margin}Ct.x=o?1:s?-1:0,Ct.y=i?1:r?-1:0,Ct.isScrolling||(Ct.margin=f.margin,Ct.speed=f.speed,Ct.start(e))}}};function Rt(t,n,r){return(a.default.string(t)?(0,k.getStringOptionResult)(t,n,r):t)||(0,e.getWindow)(r)}function Ft(t){return a.default.window(t)&&(t=window.document.body),{x:t.scrollLeft,y:t.scrollTop}}var Xt={id:"auto-scroll",install:function(t){var e=t.defaults,n=t.actions;t.autoScroll=Ct,Ct.now=function(){return t.now()},n.phaselessTypes.autoscroll=!0,e.perAction.autoScroll=Ct.defaults},listeners:{"interactions:new":function(t){t.interaction.autoScroll=null},"interactions:destroy":function(t){t.interaction.autoScroll=null,Ct.stop(),Ct.interaction&&(Ct.interaction=null)},"interactions:stop":Ct.stop,"interactions:action-move":function(t){return Ct.onInteractionMove(t)}}};zt.default=Xt;var Yt={};Object.defineProperty(Yt,"__esModule",{value:!0}),Yt.warnOnce=function(t,n){var r=!1;return function(){return r||(e.default.window.console.warn(n),r=!0),t.apply(this,arguments)}},Yt.copyAction=function(t,e){return t.name=e.name,t.axis=e.axis,t.edges=e.edges,t};var Wt={};function Lt(t){return a.default.bool(t)?(this.options.styleCursor=t,this):null===t?(delete this.options.styleCursor,this):this.options.styleCursor}function Nt(t){return a.default.func(t)?(this.options.actionChecker=t,this):null===t?(delete this.options.actionChecker,this):this.options.actionChecker}Object.defineProperty(Wt,"__esModule",{value:!0}),Wt.default=void 0;var Bt={id:"auto-start/interactableMethods",install:function(t){var e=t.Interactable;e.prototype.getAction=function(e,n,r,o){var i=function(t,e,n,r,o){var i=t.getRect(r),a=e.buttons||{0:1,1:4,3:8,4:16}[e.button],s={action:null,interactable:t,interaction:n,element:r,rect:i,buttons:a};return o.fire("auto-start:check",s),s.action}(this,n,r,o,t);return this.options.actionChecker?this.options.actionChecker(e,n,i,this,o,r):i},e.prototype.ignoreFrom=(0,Yt.warnOnce)((function(t){return this._backCompatOption("ignoreFrom",t)}),"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),e.prototype.allowFrom=(0,Yt.warnOnce)((function(t){return this._backCompatOption("allowFrom",t)}),"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),e.prototype.actionChecker=Nt,e.prototype.styleCursor=Lt}};Wt.default=Bt;var Ut={};function Vt(t,e,n,r,o){return e.testIgnoreAllow(e.options[t.name],n,r)&&e.options[t.name].enabled&&Ht(e,n,t,o)?t:null}function qt(t,e,n,r,o,i,a){for(var s=0,l=r.length;s<l;s++){var u=r[s],c=o[s],f=u.getAction(e,n,t,c);if(f){var d=Vt(f,u,c,i,a);if(d)return{action:d,interactable:u,element:c}}}return{action:null,interactable:null,element:null}}function Gt(t,e,n,r,o){var i=[],s=[],l=r;function u(t){i.push(t),s.push(l)}for(;a.default.element(l);){i=[],s=[],o.interactables.forEachMatch(l,u);var c=qt(t,e,n,i,s,r,o);if(c.action&&!c.interactable.options[c.action.name].manualStart)return c;l=P.parentNode(l)}return{action:null,interactable:null,element:null}}function $t(t,e,n){var r=e.action,o=e.interactable,i=e.element;r=r||{name:null},t.interactable=o,t.element=i,(0,Yt.copyAction)(t.prepared,r),t.rect=o&&r.name?o.getRect(i):null,Jt(t,n),n.fire("autoStart:prepared",{interaction:t})}function Ht(t,e,n,r){var o=t.options,i=o[n.name].max,a=o[n.name].maxPerElement,s=r.autoStart.maxInteractions,l=0,u=0,c=0;if(!(i&&a&&s))return!1;for(var f=0;f<r.interactions.list.length;f++){var d=r.interactions.list[f],p=d.prepared.name;if(d.interacting()){if(++l>=s)return!1;if(d.interactable===t){if((u+=p===n.name?1:0)>=i)return!1;if(d.element===e&&(c++,p===n.name&&c>=a))return!1}}}return s>0}function Kt(t,e){return a.default.number(t)?(e.autoStart.maxInteractions=t,this):e.autoStart.maxInteractions}function Zt(t,e,n){var r=n.autoStart.cursorElement;r&&r!==t&&(r.style.cursor=""),t.ownerDocument.documentElement.style.cursor=e,t.style.cursor=e,n.autoStart.cursorElement=e?t:null}function Jt(t,e){var n=t.interactable,r=t.element,o=t.prepared;if("mouse"===t.pointerType&&n&&n.options.styleCursor){var i="";if(o.name){var s=n.options[o.name].cursorChecker;i=a.default.func(s)?s(o,n,r,t._interacting):e.actions.map[o.name].getCursor(o)}Zt(t.element,i||"",e)}else e.autoStart.cursorElement&&Zt(e.autoStart.cursorElement,"",e)}Object.defineProperty(Ut,"__esModule",{value:!0}),Ut.default=void 0;var Qt={id:"auto-start/base",before:["actions","actions/drag","actions/resize","actions/gesture"],install:function(t){var e=t.interactStatic,n=t.defaults;t.usePlugin(Wt.default),n.base.actionChecker=null,n.base.styleCursor=!0,(0,j.default)(n.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),e.maxInteractions=function(e){return Kt(e,t)},t.autoStart={maxInteractions:1/0,withinInteractionLimit:Ht,cursorElement:null}},listeners:{"interactions:down":function(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget;n.interacting()||$t(n,Gt(n,r,o,i,e),e)},"interactions:move":function(t,e){!function(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget;"mouse"!==n.pointerType||n.pointerIsDown||n.interacting()||$t(n,Gt(n,r,o,i,e),e)}(t,e),function(t,e){var n=t.interaction;if(n.pointerIsDown&&!n.interacting()&&n.pointerWasMoved&&n.prepared.name){e.fire("autoStart:before-start",t);var r=n.interactable,o=n.prepared.name;o&&r&&(r.options[o].manualStart||!Ht(r,n.element,n.prepared,e)?n.stop():(n.start(n.prepared,r,n.element),Jt(n,e)))}}(t,e)},"interactions:stop":function(t,e){var n=t.interaction,r=n.interactable;r&&r.options.styleCursor&&Zt(n.element,"",e)}},maxInteractions:Kt,withinInteractionLimit:Ht,validateAction:Vt};Ut.default=Qt;var te={};Object.defineProperty(te,"__esModule",{value:!0}),te.default=void 0;var ee={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(t,e){var n=t.interaction,r=t.eventTarget,o=t.dx,i=t.dy;if("drag"===n.prepared.name){var s=Math.abs(o),l=Math.abs(i),u=n.interactable.options.drag,c=u.startAxis,f=s>l?"x":s<l?"y":"xy";if(n.prepared.axis="start"===u.lockAxis?f[0]:u.lockAxis,"xy"!==f&&"xy"!==c&&c!==f){n.prepared.name=null;for(var d=r,p=function(t){if(t!==n.interactable){var o=n.interactable.options.drag;if(!o.manualStart&&t.testIgnoreAllow(o,d,r)){var i=t.getAction(n.downPointer,n.downEvent,n,d);if(i&&"drag"===i.name&&function(t,e){if(!e)return!1;var n=e.options.drag.startAxis;return"xy"===t||"xy"===n||n===t}(f,t)&&Ut.default.validateAction(i,t,d,r,e))return t}}};a.default.element(d);){var v=e.interactables.forEachMatch(d,p);if(v){n.prepared.name="drag",n.interactable=v,n.element=d;break}d=(0,P.parentNode)(d)}}}}}};te.default=ee;var ne={};function re(t){var e=t.prepared&&t.prepared.name;if(!e)return null;var n=t.interactable.options;return n[e].hold||n[e].delay}Object.defineProperty(ne,"__esModule",{value:!0}),ne.default=void 0;var oe={id:"auto-start/hold",install:function(t){var e=t.defaults;t.usePlugin(Ut.default),e.perAction.hold=0,e.perAction.delay=0},listeners:{"interactions:new":function(t){t.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(t){var e=t.interaction,n=re(e);n>0&&(e.autoStartHoldTimer=setTimeout((function(){e.start(e.prepared,e.interactable,e.element)}),n))},"interactions:move":function(t){var e=t.interaction,n=t.duplicate;e.pointerWasMoved&&!n&&clearTimeout(e.autoStartHoldTimer)},"autoStart:before-start":function(t){var e=t.interaction;re(e)>0&&(e.prepared.name=null)}},getHoldDuration:re};ne.default=oe;var ie={};Object.defineProperty(ie,"__esModule",{value:!0}),ie.default=void 0;var ae={id:"auto-start",install:function(t){t.usePlugin(Ut.default),t.usePlugin(ne.default),t.usePlugin(te.default)}};ie.default=ae;var se={};Object.defineProperty(se,"__esModule",{value:!0}),se.default=void 0;se.default={};var le={};function ue(t){return/^(always|never|auto)$/.test(t)?(this.options.preventDefault=t,this):a.default.bool(t)?(this.options.preventDefault=t?"always":"never",this):this.options.preventDefault}function ce(t){var e=t.interaction,n=t.event;e.interactable&&e.interactable.checkAndPreventDefault(n)}function fe(t){var n=t.Interactable;n.prototype.preventDefault=ue,n.prototype.checkAndPreventDefault=function(n){return function(t,n,r){var o=t.options.preventDefault;if("never"!==o)if("always"!==o){if(n.events.supportsPassive&&/^touch(start|move)$/.test(r.type)){var i=(0,e.getWindow)(r.target).document,s=n.getDocOptions(i);if(!s||!s.events||!1!==s.events.passive)return}/^(mouse|pointer|touch)*(down|start)/i.test(r.type)||a.default.element(r.target)&&(0,P.matchesSelector)(r.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||r.preventDefault()}else r.preventDefault()}(this,t,n)},t.interactions.docEvents.push({type:"dragstart",listener:function(e){for(var n=0;n<t.interactions.list.length;n++){var r=t.interactions.list[n];if(r.element&&(r.element===e.target||(0,P.nodeContains)(r.element,e.target)))return void r.interactable.checkAndPreventDefault(e)}}})}Object.defineProperty(le,"__esModule",{value:!0}),le.install=fe,le.default=void 0;var de={id:"core/interactablePreventDefault",install:fe,listeners:["down","move","up","cancel"].reduce((function(t,e){return t["interactions:".concat(e)]=ce,t}),{})};le.default=de;var pe,ve={};function he(t){return function(t){if(Array.isArray(t))return ge(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return ge(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ge(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ge(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(ve,"__esModule",{value:!0}),ve.default=void 0,function(t){t.touchAction="touchAction",t.boxSizing="boxSizing",t.noListeners="noListeners"}(pe||(pe={}));var ye={touchAction:"https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action",boxSizing:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"};var me=[{name:pe.touchAction,perform:function(t){return!function(t,e,n){var r=t;for(;a.default.element(r);){if(be(r,e,n))return!0;r=(0,P.parentNode)(r)}return!1}(t.element,"touchAction",/pan-|pinch|none/)},getInfo:function(t){return[t.element,ye.touchAction]},text:'Consider adding CSS "touch-action: none" to this element\n'},{name:pe.boxSizing,perform:function(t){var e=t.element;return"resize"===t.prepared.name&&e instanceof g.default.HTMLElement&&!be(e,"boxSizing",/border-box/)},text:'Consider adding CSS "box-sizing: border-box" to this resizable element',getInfo:function(t){return[t.element,ye.boxSizing]}},{name:pe.noListeners,perform:function(t){var e=t.prepared.name;return!(t.interactable.events.types["".concat(e,"move")]||[]).length},getInfo:function(t){return[t.prepared.name,t.interactable]},text:"There are no listeners set for this action"}];function be(t,n,r){return r.test(t.style[n]||e.default.window.getComputedStyle(t)[n])}var xe="dev-tools",we={id:xe,install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.logger,r=t.Interactable,o=t.defaults;t.logger=n||console,o.base.devTools={ignore:{}},r.prototype.devTools=function(t){return t?((0,j.default)(this.options.devTools,t),this):this.options.devTools}},listeners:{"interactions:action-start":function(t,e){for(var n=t.interaction,r=0;r<me.length;r++){var o,i=me[r],a=n.interactable&&n.interactable.options;if(!(a&&a.devTools&&a.devTools.ignore[i.name])&&i.perform(n))(o=e.logger).warn.apply(o,["[interact.js] "+i.text].concat(he(i.getInfo(n))))}}},checks:me,CheckName:pe,links:ye,prefix:"[interact.js] "};ve.default=we;var _e={};Object.defineProperty(_e,"__esModule",{value:!0}),_e.default=void 0;_e.default={};var Pe={};Object.defineProperty(Pe,"__esModule",{value:!0}),Pe.default=function t(e){var n={};for(var r in e){var o=e[r];a.default.plainObject(o)?n[r]=t(o):a.default.array(o)?n[r]=Z.from(o):n[r]=o}return n};var Se={};function Oe(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return Ee(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ee(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ee(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Te(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(Se,"__esModule",{value:!0}),Se.getRectOffset=ke,Se.default=void 0;var Me=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.states=[],this.startOffset={left:0,right:0,top:0,bottom:0},this.startDelta=null,this.result=null,this.endResult=null,this.edges=void 0,this.interaction=void 0,this.interaction=e,this.result=je()}var e,n,r;return e=t,(n=[{key:"start",value:function(t,e){var n=t.phase,r=this.interaction,o=function(t){var e=t.interactable.options[t.prepared.name],n=e.modifiers;return n&&n.length?n.filter((function(t){return!t.options||!1!==t.options.enabled})):["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map((function(t){var n=e[t];return n&&n.enabled&&{options:n,methods:n._methods}})).filter((function(t){return!!t}))}(r);this.prepareStates(o),this.edges=(0,j.default)({},r.edges),this.startOffset=ke(r.rect,e),this.startDelta={x:0,y:0};var i={phase:n,pageCoords:e,preEnd:!1};return this.result=je(),this.startAll(i),this.result=this.setAll(i)}},{key:"fillArg",value:function(t){var e=this.interaction;t.interaction=e,t.interactable=e.interactable,t.element=e.element,t.rect=t.rect||e.rect,t.edges=this.edges,t.startOffset=this.startOffset}},{key:"startAll",value:function(t){this.fillArg(t);for(var e=0;e<this.states.length;e++){var n=this.states[e];n.methods.start&&(t.state=n,n.methods.start(t))}}},{key:"setAll",value:function(t){this.fillArg(t);var e=t.phase,n=t.preEnd,r=t.skipModifiers,o=t.rect;t.coords=(0,j.default)({},t.pageCoords),t.rect=(0,j.default)({},o);for(var i=r?this.states.slice(r):this.states,a=je(t.coords,t.rect),s=0;s<i.length;s++){var l=i[s],u=l.options,c=(0,j.default)({},t.coords),f=null;l.methods.set&&this.shouldDo(u,n,e)&&(t.state=l,f=l.methods.set(t),k.addEdges(this.interaction.edges,t.rect,{x:t.coords.x-c.x,y:t.coords.y-c.y})),a.eventProps.push(f)}a.delta.x=t.coords.x-t.pageCoords.x,a.delta.y=t.coords.y-t.pageCoords.y,a.rectDelta.left=t.rect.left-o.left,a.rectDelta.right=t.rect.right-o.right,a.rectDelta.top=t.rect.top-o.top,a.rectDelta.bottom=t.rect.bottom-o.bottom;var d=this.result.coords,p=this.result.rect;if(d&&p){var v=a.rect.left!==p.left||a.rect.right!==p.right||a.rect.top!==p.top||a.rect.bottom!==p.bottom;a.changed=v||d.x!==a.coords.x||d.y!==a.coords.y}return a}},{key:"applyToInteraction",value:function(t){var e=this.interaction,n=t.phase,r=e.coords.cur,o=e.coords.start,i=this.result,a=this.startDelta,s=i.delta;"start"===n&&(0,j.default)(this.startDelta,i.delta);for(var l=[[o,a],[r,s]],u=0;u<l.length;u++){var c=Oe(l[u],2),f=c[0],d=c[1];f.page.x+=d.x,f.page.y+=d.y,f.client.x+=d.x,f.client.y+=d.y}var p=this.result.rectDelta,v=t.rect||e.rect;v.left+=p.left,v.right+=p.right,v.top+=p.top,v.bottom+=p.bottom,v.width=v.right-v.left,v.height=v.bottom-v.top}},{key:"setAndApply",value:function(t){var e=this.interaction,n=t.phase,r=t.preEnd,o=t.skipModifiers,i=this.setAll({preEnd:r,phase:n,pageCoords:t.modifiedCoords||e.coords.cur.page});if(this.result=i,!i.changed&&(!o||o<this.states.length)&&e.interacting())return!1;if(t.modifiedCoords){var a=e.coords.cur.page,s={x:t.modifiedCoords.x-a.x,y:t.modifiedCoords.y-a.y};i.coords.x+=s.x,i.coords.y+=s.y,i.delta.x+=s.x,i.delta.y+=s.y}this.applyToInteraction(t)}},{key:"beforeEnd",value:function(t){var e=t.interaction,n=t.event,r=this.states;if(r&&r.length){for(var o=!1,i=0;i<r.length;i++){var a=r[i];t.state=a;var s=a.options,l=a.methods,u=l.beforeEnd&&l.beforeEnd(t);if(u)return this.endResult=u,!1;o=o||!o&&this.shouldDo(s,!0,t.phase,!0)}o&&e.move({event:n,preEnd:!0})}}},{key:"stop",value:function(t){var e=t.interaction;if(this.states&&this.states.length){var n=(0,j.default)({states:this.states,interactable:e.interactable,element:e.element,rect:null},t);this.fillArg(n);for(var r=0;r<this.states.length;r++){var o=this.states[r];n.state=o,o.methods.stop&&o.methods.stop(n)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(t){this.states=[];for(var e=0;e<t.length;e++){var n=t[e],r=n.options,o=n.methods,i=n.name;r&&!1===r.enabled||this.states.push({options:r,methods:o,index:e,name:i})}return this.states}},{key:"restoreInteractionCoords",value:function(t){var e=t.interaction,n=e.coords,r=e.rect,o=e.modification;if(o.result){for(var i=o.startDelta,a=o.result,s=a.delta,l=a.rectDelta,u=[[n.start,i],[n.cur,s]],c=0;c<u.length;c++){var f=Oe(u[c],2),d=f[0],p=f[1];d.page.x-=p.x,d.page.y-=p.y,d.client.x-=p.x,d.client.y-=p.y}r.left-=l.left,r.right-=l.right,r.top-=l.top,r.bottom-=l.bottom}}},{key:"shouldDo",value:function(t,e,n,r){return!(!t||!1===t.enabled||r&&!t.endOnly||t.endOnly&&!e||"start"===n&&!t.setStart)}},{key:"copyFrom",value:function(t){this.startOffset=t.startOffset,this.startDelta=t.startDelta,this.edges=t.edges,this.states=t.states.map((function(t){return(0,Pe.default)(t)})),this.result=je((0,j.default)({},t.result.coords),(0,j.default)({},t.result.rect))}},{key:"destroy",value:function(){for(var t in this)this[t]=null}}])&&Te(e.prototype,n),r&&Te(e,r),t}();function je(t,e){return{rect:e,coords:t,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function ke(t,e){return t?{left:e.x-t.left,top:e.y-t.top,right:t.right-e.x,bottom:t.bottom-e.y}:{left:0,top:0,right:0,bottom:0}}Se.default=Me;var Ie={};function De(t){var e=t.iEvent,n=t.interaction.modification.result;n&&(e.modifiers=n.eventProps)}Object.defineProperty(Ie,"__esModule",{value:!0}),Ie.makeModifier=function(t,e){var n=t.defaults,r={start:t.start,set:t.set,beforeEnd:t.beforeEnd,stop:t.stop},o=function(t){var o=t||{};for(var i in o.enabled=!1!==o.enabled,n)i in o||(o[i]=n[i]);return{options:o,methods:r,name:e}};e&&"string"==typeof e&&(o._defaults=n,o._methods=r);return o},Ie.addEventModifiers=De,Ie.default=void 0;var Ae={id:"modifiers/base",install:function(t){t.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(t){var e=t.interaction;e.modification=new Se.default(e)},"interactions:before-action-start":function(t){var e=t.interaction.modification;e.start(t,t.interaction.coords.start.page),t.interaction.edges=e.edges,e.applyToInteraction(t)},"interactions:before-action-move":function(t){return t.interaction.modification.setAndApply(t)},"interactions:before-action-end":function(t){return t.interaction.modification.beforeEnd(t)},"interactions:action-start":De,"interactions:action-move":De,"interactions:action-end":De,"interactions:after-action-start":function(t){return t.interaction.modification.restoreInteractionCoords(t)},"interactions:after-action-move":function(t){return t.interaction.modification.restoreInteractionCoords(t)},"interactions:stop":function(t){return t.interaction.modification.stop(t)}},before:["actions","action/drag","actions/resize","actions/gesture"]};Ie.default=Ae;var ze={};Object.defineProperty(ze,"__esModule",{value:!0}),ze.default=ze.defaults=void 0;var Ce={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}};ze.defaults=Ce;var Re=Ce;ze.default=Re;var Fe={};function Xe(t){return(Xe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Ye(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function We(t,e){return(We=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Le(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Ue(t);if(e){var o=Ue(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Ne(this,n)}}function Ne(t,e){return!e||"object"!==Xe(e)&&"function"!=typeof e?Be(t):e}function Be(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ue(t){return(Ue=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(Fe,"__esModule",{value:!0}),Fe.default=Fe.InteractEvent=void 0;var Ve=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&We(t,e)}(i,t);var e,n,r,o=Le(i);function i(t,e,n,r,a,s,l){var u;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(u=o.call(this,t)).target=void 0,u.currentTarget=void 0,u.relatedTarget=null,u.screenX=void 0,u.screenY=void 0,u.button=void 0,u.buttons=void 0,u.ctrlKey=void 0,u.shiftKey=void 0,u.altKey=void 0,u.metaKey=void 0,u.page=void 0,u.client=void 0,u.delta=void 0,u.rect=void 0,u.x0=void 0,u.y0=void 0,u.t0=void 0,u.dt=void 0,u.duration=void 0,u.clientX0=void 0,u.clientY0=void 0,u.velocity=void 0,u.speed=void 0,u.swipe=void 0,u.timeStamp=void 0,u.dragEnter=void 0,u.dragLeave=void 0,u.axes=void 0,u.preEnd=void 0,a=a||t.element;var c=t.interactable,f=(c&&c.options||ze.default).deltaSource,d=(0,A.default)(c,a,n),p="start"===r,v="end"===r,h=p?Be(u):t.prevEvent,g=p?t.coords.start:v?{page:h.page,client:h.client,timeStamp:t.coords.cur.timeStamp}:t.coords.cur;return u.page=(0,j.default)({},g.page),u.client=(0,j.default)({},g.client),u.rect=(0,j.default)({},t.rect),u.timeStamp=g.timeStamp,v||(u.page.x-=d.x,u.page.y-=d.y,u.client.x-=d.x,u.client.y-=d.y),u.ctrlKey=e.ctrlKey,u.altKey=e.altKey,u.shiftKey=e.shiftKey,u.metaKey=e.metaKey,u.button=e.button,u.buttons=e.buttons,u.target=a,u.currentTarget=a,u.preEnd=s,u.type=l||n+(r||""),u.interactable=c,u.t0=p?t.pointers[t.pointers.length-1].downTime:h.t0,u.x0=t.coords.start.page.x-d.x,u.y0=t.coords.start.page.y-d.y,u.clientX0=t.coords.start.client.x-d.x,u.clientY0=t.coords.start.client.y-d.y,u.delta=p||v?{x:0,y:0}:{x:u[f].x-h[f].x,y:u[f].y-h[f].y},u.dt=t.coords.delta.timeStamp,u.duration=u.timeStamp-u.t0,u.velocity=(0,j.default)({},t.coords.velocity[f]),u.speed=(0,R.default)(u.velocity.x,u.velocity.y),u.swipe=v||"inertiastart"===r?u.getSwipe():null,u}return e=i,(n=[{key:"getSwipe",value:function(){var t=this._interaction;if(t.prevEvent.speed<600||this.timeStamp-t.prevEvent.timeStamp>150)return null;var e=180*Math.atan2(t.prevEvent.velocityY,t.prevEvent.velocityX)/Math.PI;e<0&&(e+=360);var n=112.5<=e&&e<247.5,r=202.5<=e&&e<337.5;return{up:r,down:!r&&22.5<=e&&e<157.5,left:n,right:!n&&(292.5<=e||e<67.5),angle:e,speed:t.prevEvent.speed,velocity:{x:t.prevEvent.velocityX,y:t.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}])&&Ye(e.prototype,n),r&&Ye(e,r),i}(G.default);Fe.InteractEvent=Ve,Object.defineProperties(Ve.prototype,{pageX:{get:function(){return this.page.x},set:function(t){this.page.x=t}},pageY:{get:function(){return this.page.y},set:function(t){this.page.y=t}},clientX:{get:function(){return this.client.x},set:function(t){this.client.x=t}},clientY:{get:function(){return this.client.y},set:function(t){this.client.y=t}},dx:{get:function(){return this.delta.x},set:function(t){this.delta.x=t}},dy:{get:function(){return this.delta.y},set:function(t){this.delta.y=t}},velocityX:{get:function(){return this.velocity.x},set:function(t){this.velocity.x=t}},velocityY:{get:function(){return this.velocity.y},set:function(t){this.velocity.y=t}}});var qe=Ve;Fe.default=qe;var Ge={};Object.defineProperty(Ge,"__esModule",{value:!0}),Ge.default=Ge.PointerInfo=void 0;var $e=function t(e,n,r,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=void 0,this.pointer=void 0,this.event=void 0,this.downTime=void 0,this.downTarget=void 0,this.id=e,this.pointer=n,this.event=r,this.downTime=o,this.downTarget=i};Ge.PointerInfo=$e;var He=$e;Ge.default=He;var Ke,Ze,Je={};function Qe(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function tn(t,e,n){return e&&Qe(t.prototype,e),n&&Qe(t,n),t}Object.defineProperty(Je,"__esModule",{value:!0}),Object.defineProperty(Je,"PointerInfo",{enumerable:!0,get:function(){return Ge.default}}),Je.default=Je.Interaction=Je._ProxyMethods=Je._ProxyValues=void 0,Je._ProxyValues=Ke,function(t){t.interactable="",t.element="",t.prepared="",t.pointerIsDown="",t.pointerWasMoved="",t._proxy=""}(Ke||(Je._ProxyValues=Ke={})),Je._ProxyMethods=Ze,function(t){t.start="",t.move="",t.end="",t.stop="",t.interacting=""}(Ze||(Je._ProxyMethods=Ze={}));var en=0,nn=function(){function t(e){var n=this,r=e.pointerType,o=e.scopeFire;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.interactable=null,this.element=null,this.rect=void 0,this._rects=void 0,this.edges=void 0,this._scopeFire=void 0,this.prepared={name:null,axis:null,edges:null},this.pointerType=void 0,this.pointers=[],this.downEvent=null,this.downPointer={},this._latestPointer={pointer:null,event:null,eventTarget:null},this.prevEvent=null,this.pointerIsDown=!1,this.pointerWasMoved=!1,this._interacting=!1,this._ending=!1,this._stopped=!0,this._proxy=null,this.simulation=null,this.doMove=(0,Yt.warnOnce)((function(t){this.move(t)}),"The interaction.doMove() method has been renamed to interaction.move()"),this.coords={start:W.newCoords(),prev:W.newCoords(),cur:W.newCoords(),delta:W.newCoords(),velocity:W.newCoords()},this._id=en++,this._scopeFire=o,this.pointerType=r;var i=this;this._proxy={};var a=function(t){Object.defineProperty(n._proxy,t,{get:function(){return i[t]}})};for(var s in Ke)a(s);var l=function(t){Object.defineProperty(n._proxy,t,{value:function(){return i[t].apply(i,arguments)}})};for(var u in Ze)l(u);this._scopeFire("interactions:new",{interaction:this})}return tn(t,[{key:"pointerMoveTolerance",get:function(){return 1}}]),tn(t,[{key:"pointerDown",value:function(t,e,n){var r=this.updatePointer(t,e,n,!0),o=this.pointers[r];this._scopeFire("interactions:down",{pointer:t,event:e,eventTarget:n,pointerIndex:r,pointerInfo:o,type:"down",interaction:this})}},{key:"start",value:function(t,e,n){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<("gesture"===t.name?2:1)||!e.options[t.name].enabled)&&((0,Yt.copyAction)(this.prepared,t),this.interactable=e,this.element=n,this.rect=e.getRect(n),this.edges=this.prepared.edges?(0,j.default)({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(t,e,n){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(t,e,n,!1);var r,o,i=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(r=this.coords.cur.client.x-this.coords.start.client.x,o=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=(0,R.default)(r,o)>this.pointerMoveTolerance);var a=this.getPointerIndex(t),s={pointer:t,pointerIndex:a,pointerInfo:this.pointers[a],event:e,type:"move",eventTarget:n,dx:r,dy:o,duplicate:i,interaction:this};i||W.setCoordVelocity(this.coords.velocity,this.coords.delta),this._scopeFire("interactions:move",s),i||this.simulation||(this.interacting()&&(s.type=null,this.move(s)),this.pointerWasMoved&&W.copyCoords(this.coords.prev,this.coords.cur))}},{key:"move",value:function(t){t&&t.event||W.setZeroCoords(this.coords.delta),(t=(0,j.default)({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},t||{})).phase="move",this._doPhase(t)}},{key:"pointerUp",value:function(t,e,n,r){var o=this.getPointerIndex(t);-1===o&&(o=this.updatePointer(t,e,n,!1));var i=/cancel$/i.test(e.type)?"cancel":"up";this._scopeFire("interactions:".concat(i),{pointer:t,pointerIndex:o,pointerInfo:this.pointers[o],event:e,eventTarget:n,type:i,curEventTarget:r,interaction:this}),this.simulation||this.end(e),this.pointerIsDown=!1,this.removePointer(t,e)}},{key:"documentBlur",value:function(t){this.end(t),this._scopeFire("interactions:blur",{event:t,type:"blur",interaction:this})}},{key:"end",value:function(t){var e;this._ending=!0,t=t||this._latestPointer.event,this.interacting()&&(e=this._doPhase({event:t,interaction:this,phase:"end"})),this._ending=!1,!0===e&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(t){var e=W.getPointerId(t);return"mouse"===this.pointerType||"pen"===this.pointerType?this.pointers.length-1:Z.findIndex(this.pointers,(function(t){return t.id===e}))}},{key:"getPointerInfo",value:function(t){return this.pointers[this.getPointerIndex(t)]}},{key:"updatePointer",value:function(t,e,n,r){var o=W.getPointerId(t),i=this.getPointerIndex(t),a=this.pointers[i];return r=!1!==r&&(r||/(down|start)$/i.test(e.type)),a?a.pointer=t:(a=new Ge.default(o,t,e,null,null),i=this.pointers.length,this.pointers.push(a)),W.setCoords(this.coords.cur,this.pointers.map((function(t){return t.pointer})),this._now()),W.setCoordDeltas(this.coords.delta,this.coords.prev,this.coords.cur),r&&(this.pointerIsDown=!0,a.downTime=this.coords.cur.timeStamp,a.downTarget=n,W.pointerExtend(this.downPointer,t),this.interacting()||(W.copyCoords(this.coords.start,this.coords.cur),W.copyCoords(this.coords.prev,this.coords.cur),this.downEvent=e,this.pointerWasMoved=!1)),this._updateLatestPointer(t,e,n),this._scopeFire("interactions:update-pointer",{pointer:t,event:e,eventTarget:n,down:r,pointerInfo:a,pointerIndex:i,interaction:this}),i}},{key:"removePointer",value:function(t,e){var n=this.getPointerIndex(t);if(-1!==n){var r=this.pointers[n];this._scopeFire("interactions:remove-pointer",{pointer:t,event:e,eventTarget:null,pointerIndex:n,pointerInfo:r,interaction:this}),this.pointers.splice(n,1)}}},{key:"_updateLatestPointer",value:function(t,e,n){this._latestPointer.pointer=t,this._latestPointer.event=e,this._latestPointer.eventTarget=n}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(t,e,n,r){return new Fe.default(this,t,this.prepared.name,e,this.element,n,r)}},{key:"_fireEvent",value:function(t){this.interactable.fire(t),(!this.prevEvent||t.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=t)}},{key:"_doPhase",value:function(t){var e=t.event,n=t.phase,r=t.preEnd,o=t.type,i=this.rect;if(i&&"move"===n&&(k.addEdges(this.edges,i,this.coords.delta[this.interactable.options.deltaSource]),i.width=i.right-i.left,i.height=i.bottom-i.top),!1===this._scopeFire("interactions:before-action-".concat(n),t))return!1;var a=t.iEvent=this._createPreparedEvent(e,n,r,o);return this._scopeFire("interactions:action-".concat(n),t),"start"===n&&(this.prevEvent=a),this._fireEvent(a),this._scopeFire("interactions:after-action-".concat(n),t),!0}},{key:"_now",value:function(){return Date.now()}}]),t}();Je.Interaction=nn;var rn=nn;Je.default=rn;var on={};function an(t){t.pointerIsDown&&(cn(t.coords.cur,t.offset.total),t.offset.pending.x=0,t.offset.pending.y=0)}function sn(t){ln(t.interaction)}function ln(t){if(!function(t){return!(!t.offset.pending.x&&!t.offset.pending.y)}(t))return!1;var e=t.offset.pending;return cn(t.coords.cur,e),cn(t.coords.delta,e),k.addEdges(t.edges,t.rect,e),e.x=0,e.y=0,!0}function un(t){var e=t.x,n=t.y;this.offset.pending.x+=e,this.offset.pending.y+=n,this.offset.total.x+=e,this.offset.total.y+=n}function cn(t,e){var n=t.page,r=t.client,o=e.x,i=e.y;n.x+=o,n.y+=i,r.x+=o,r.y+=i}Object.defineProperty(on,"__esModule",{value:!0}),on.addTotal=an,on.applyPending=ln,on.default=void 0,Je._ProxyMethods.offsetBy="";var fn={id:"offset",install:function(t){t.Interaction.prototype.offsetBy=un},listeners:{"interactions:new":function(t){t.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(t){return an(t.interaction)},"interactions:before-action-start":sn,"interactions:before-action-move":sn,"interactions:before-action-end":function(t){var e=t.interaction;if(ln(e))return e.move({offset:!0}),e.end(),!1},"interactions:stop":function(t){var e=t.interaction;e.offset.total.x=0,e.offset.total.y=0,e.offset.pending.x=0,e.offset.pending.y=0}}};on.default=fn;var dn={};function pn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(dn,"__esModule",{value:!0}),dn.default=dn.InertiaState=void 0;var vn=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.active=!1,this.isModified=!1,this.smoothEnd=!1,this.allowResume=!1,this.modification=null,this.modifierCount=0,this.modifierArg=null,this.startCoords=null,this.t0=0,this.v0=0,this.te=0,this.targetOffset=null,this.modifiedOffset=null,this.currentOffset=null,this.lambda_v0=0,this.one_ve_v0=0,this.timeout=null,this.interaction=void 0,this.interaction=e}var e,n,r;return e=t,(n=[{key:"start",value:function(t){var e=this.interaction,n=hn(e);if(!n||!n.enabled)return!1;var r=e.coords.velocity.client,o=(0,R.default)(r.x,r.y),i=this.modification||(this.modification=new Se.default(e));if(i.copyFrom(e.modification),this.t0=e._now(),this.allowResume=n.allowResume,this.v0=o,this.currentOffset={x:0,y:0},this.startCoords=e.coords.cur.page,this.modifierArg={interaction:e,interactable:e.interactable,element:e.element,rect:e.rect,edges:e.edges,pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"},this.t0-e.coords.cur.timeStamp<50&&o>n.minSpeed&&o>n.endSpeed)this.startInertia();else{if(i.result=i.setAll(this.modifierArg),!i.result.changed)return!1;this.startSmoothEnd()}return e.modification.result.rect=null,e.offsetBy(this.targetOffset),e._doPhase({interaction:e,event:t,phase:"inertiastart"}),e.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),e.modification.result.rect=null,this.active=!0,e.simulation=this,!0}},{key:"startInertia",value:function(){var t=this,e=this.interaction.coords.velocity.client,n=hn(this.interaction),r=n.resistance,o=-Math.log(n.endSpeed/this.v0)/r;this.targetOffset={x:(e.x-o)/r,y:(e.y-o)/r},this.te=o,this.lambda_v0=r/this.v0,this.one_ve_v0=1-n.endSpeed/this.v0;var i=this.modification,a=this.modifierArg;a.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},i.result=i.setAll(a),i.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+i.result.delta.x,y:this.targetOffset.y+i.result.delta.y}),this.timeout=jt.default.request((function(){return t.inertiaTick()}))}},{key:"startSmoothEnd",value:function(){var t=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.timeout=jt.default.request((function(){return t.smoothEndTick()}))}},{key:"inertiaTick",value:function(){var t,e,n,r,o,i,a,s=this,l=this.interaction,u=hn(l).resistance,c=(l._now()-this.t0)/1e3;if(c<this.te){var f,d=1-(Math.exp(-u*c)-this.lambda_v0)/this.one_ve_v0;this.isModified?(t=0,e=0,n=this.targetOffset.x,r=this.targetOffset.y,o=this.modifiedOffset.x,i=this.modifiedOffset.y,f={x:gn(a=d,t,n,o),y:gn(a,e,r,i)}):f={x:this.targetOffset.x*d,y:this.targetOffset.y*d};var p={x:f.x-this.currentOffset.x,y:f.y-this.currentOffset.y};this.currentOffset.x+=p.x,this.currentOffset.y+=p.y,l.offsetBy(p),l.move(),this.timeout=jt.default.request((function(){return s.inertiaTick()}))}else l.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var t=this,e=this.interaction,n=e._now()-this.t0,r=hn(e).smoothEndDuration;if(n<r){var o={x:yn(n,0,this.targetOffset.x,r),y:yn(n,0,this.targetOffset.y,r)},i={x:o.x-this.currentOffset.x,y:o.y-this.currentOffset.y};this.currentOffset.x+=i.x,this.currentOffset.y+=i.y,e.offsetBy(i),e.move({skipModifiers:this.modifierCount}),this.timeout=jt.default.request((function(){return t.smoothEndTick()}))}else e.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(t){var e=t.pointer,n=t.event,r=t.eventTarget,o=this.interaction;o.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),o.updatePointer(e,n,r,!0),o._doPhase({interaction:o,event:n,phase:"resume"}),(0,W.copyCoords)(o.coords.prev,o.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,jt.default.cancel(this.timeout)}}])&&pn(e.prototype,n),r&&pn(e,r),t}();function hn(t){var e=t.interactable,n=t.prepared;return e&&e.options&&n.name&&e.options[n.name].inertia}function gn(t,e,n,r){var o=1-t;return o*o*e+2*o*t*n+t*t*r}function yn(t,e,n,r){return-n*(t/=r)*(t-2)+e}dn.InertiaState=vn;var mn={id:"inertia",before:["modifiers/base"],install:function(t){var e=t.defaults;t.usePlugin(on.default),t.usePlugin(Ie.default),t.actions.phases.inertiastart=!0,t.actions.phases.resume=!0,e.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(t){var e=t.interaction;e.inertia=new vn(e)},"interactions:before-action-end":function(t){var e=t.interaction,n=t.event;return(!e._interacting||e.simulation||!e.inertia.start(n))&&null},"interactions:down":function(t){var e=t.interaction,n=t.eventTarget,r=e.inertia;if(r.active)for(var o=n;a.default.element(o);){if(o===e.element){r.resume(t);break}o=P.parentNode(o)}},"interactions:stop":function(t){var e=t.interaction.inertia;e.active&&e.stop()},"interactions:before-action-resume":function(t){var e=t.interaction.modification;e.stop(t),e.start(t,t.interaction.coords.cur.page),e.applyToInteraction(t)},"interactions:before-action-inertiastart":function(t){return t.interaction.modification.setAndApply(t)},"interactions:action-resume":Ie.addEventModifiers,"interactions:action-inertiastart":Ie.addEventModifiers,"interactions:after-action-inertiastart":function(t){return t.interaction.modification.restoreInteractionCoords(t)},"interactions:after-action-resume":function(t){return t.interaction.modification.restoreInteractionCoords(t)}}};dn.default=mn;var bn={};function xn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function wn(t,e){for(var n=0;n<e.length;n++){var r=e[n];if(t.immediatePropagationStopped)break;r(t)}}Object.defineProperty(bn,"__esModule",{value:!0}),bn.default=void 0;var _n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=void 0,this.types={},this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.global=void 0,this.options=(0,j.default)({},e||{})}var e,n,r;return e=t,(n=[{key:"fire",value:function(t){var e,n=this.global;(e=this.types[t.type])&&wn(t,e),!t.propagationStopped&&n&&(e=n[t.type])&&wn(t,e)}},{key:"on",value:function(t,e){var n=(0,z.default)(t,e);for(t in n)this.types[t]=Z.merge(this.types[t]||[],n[t])}},{key:"off",value:function(t,e){var n=(0,z.default)(t,e);for(t in n){var r=this.types[t];if(r&&r.length)for(var o=0;o<n[t].length;o++){var i=n[t][o],a=r.indexOf(i);-1!==a&&r.splice(a,1)}}}},{key:"getRect",value:function(t){return null}}])&&xn(e.prototype,n),r&&xn(e,r),t}();bn.default=_n;var Pn={};Object.defineProperty(Pn,"__esModule",{value:!0}),Pn.default=function(t,e){if(e.phaselessTypes[t])return!0;for(var n in e.map)if(0===t.indexOf(n)&&t.substr(n.length)in e.phases)return!0;return!1};var Sn={};function On(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(Sn,"__esModule",{value:!0}),Sn.default=Sn.InteractStatic=void 0;var En=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.getPointerAverage=W.pointerAverage,this.getTouchBBox=W.touchBBox,this.getTouchDistance=W.touchDistance,this.getTouchAngle=W.touchAngle,this.getElementRect=P.getElementRect,this.getElementClientRect=P.getElementClientRect,this.matchesSelector=P.matchesSelector,this.closest=P.closest,this.globalEvents={},this.dynamicDrop=void 0,this.version=void 0,this.interact=void 0,this.scope=void 0,this.scope=e;for(var r=this.constructor.prototype,o=function(t,r){var o=e.interactables.get(t,r);return o||((o=e.interactables.new(t,r)).events.global=n.globalEvents),o},i=0;i<Object.getOwnPropertyNames(this.constructor.prototype).length;i++){var a;a=Object.getOwnPropertyNames(this.constructor.prototype)[i];o[a]=r[a]}return(0,j.default)(o,this),o.constructor=this.constructor,this.interact=o,o}var e,n,r;return e=t,(n=[{key:"use",value:function(t,e){return this.scope.usePlugin(t,e),this}},{key:"isSet",value:function(t,e){return!!this.scope.interactables.get(t,e&&e.context)}},{key:"on",value:function(t,e,n){if(a.default.string(t)&&-1!==t.search(" ")&&(t=t.trim().split(/ +/)),a.default.array(t)){for(var r=0;r<t.length;r++){var o=t[r];this.on(o,e,n)}return this}if(a.default.object(t)){for(var i in t)this.on(i,t[i],e);return this}return(0,Pn.default)(t,this.scope.actions)?this.globalEvents[t]?this.globalEvents[t].push(e):this.globalEvents[t]=[e]:this.scope.events.add(this.scope.document,t,e,{options:n}),this}},{key:"off",value:function(t,e,n){if(a.default.string(t)&&-1!==t.search(" ")&&(t=t.trim().split(/ +/)),a.default.array(t)){for(var r=0;r<t.length;r++){var o=t[r];this.off(o,e,n)}return this}if(a.default.object(t)){for(var i in t)this.off(i,t[i],e);return this}var s;return(0,Pn.default)(t,this.scope.actions)?t in this.globalEvents&&-1!==(s=this.globalEvents[t].indexOf(e))&&this.globalEvents[t].splice(s,1):this.scope.events.remove(this.scope.document,t,e,n),this}},{key:"debug",value:function(){return this.scope}},{key:"supportsTouch",value:function(){return x.default.supportsTouch}},{key:"supportsPointerEvent",value:function(){return x.default.supportsPointerEvent}},{key:"stop",value:function(){for(var t=0;t<this.scope.interactions.list.length;t++)this.scope.interactions.list[t].stop();return this}},{key:"pointerMoveTolerance",value:function(t){return a.default.number(t)?(this.scope.interactions.pointerMoveTolerance=t,this):this.scope.interactions.pointerMoveTolerance}},{key:"addDocument",value:function(t,e){this.scope.addDocument(t,e)}},{key:"removeDocument",value:function(t){this.scope.removeDocument(t)}}])&&On(e.prototype,n),r&&On(e,r),t}();Sn.InteractStatic=En;var Tn=En;Sn.default=Tn;var Mn={};function jn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function kn(t,e,n){return e&&jn(t.prototype,e),n&&jn(t,n),t}Object.defineProperty(Mn,"__esModule",{value:!0}),Mn.default=Mn.Interactable=void 0;var In=function(){function t(n,r,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=void 0,this._actions=void 0,this.target=void 0,this.events=new bn.default,this._context=void 0,this._win=void 0,this._doc=void 0,this._scopeEvents=void 0,this._rectChecker=void 0,this._actions=r.actions,this.target=n,this._context=r.context||o,this._win=(0,e.getWindow)((0,P.trySelector)(n)?this._context:n),this._doc=this._win.document,this._scopeEvents=i,this.set(r)}return kn(t,[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}}]),kn(t,[{key:"setOnEvents",value:function(t,e){return a.default.func(e.onstart)&&this.on("".concat(t,"start"),e.onstart),a.default.func(e.onmove)&&this.on("".concat(t,"move"),e.onmove),a.default.func(e.onend)&&this.on("".concat(t,"end"),e.onend),a.default.func(e.oninertiastart)&&this.on("".concat(t,"inertiastart"),e.oninertiastart),this}},{key:"updatePerActionListeners",value:function(t,e,n){(a.default.array(e)||a.default.object(e))&&this.off(t,e),(a.default.array(n)||a.default.object(n))&&this.on(t,n)}},{key:"setPerAction",value:function(t,e){var n=this._defaults;for(var r in e){var o=r,i=this.options[t],s=e[o];"listeners"===o&&this.updatePerActionListeners(t,i.listeners,s),a.default.array(s)?i[o]=Z.from(s):a.default.plainObject(s)?(i[o]=(0,j.default)(i[o]||{},(0,Pe.default)(s)),a.default.object(n.perAction[o])&&"enabled"in n.perAction[o]&&(i[o].enabled=!1!==s.enabled)):a.default.bool(s)&&a.default.object(n.perAction[o])?i[o].enabled=s:i[o]=s}}},{key:"getRect",value:function(t){return t=t||(a.default.element(this.target)?this.target:null),a.default.string(this.target)&&(t=t||this._context.querySelector(this.target)),(0,P.getElementRect)(t)}},{key:"rectChecker",value:function(t){var e=this;return a.default.func(t)?(this._rectChecker=t,this.getRect=function(t){var n=(0,j.default)({},e._rectChecker(t));return"width"in n||(n.width=n.right-n.left,n.height=n.bottom-n.top),n},this):null===t?(delete this.getRect,delete this._rectChecker,this):this.getRect}},{key:"_backCompatOption",value:function(t,e){if((0,P.trySelector)(e)||a.default.object(e)){for(var n in this.options[t]=e,this._actions.map)this.options[n][t]=e;return this}return this.options[t]}},{key:"origin",value:function(t){return this._backCompatOption("origin",t)}},{key:"deltaSource",value:function(t){return"page"===t||"client"===t?(this.options.deltaSource=t,this):this.options.deltaSource}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(t){return this._context===t.ownerDocument||(0,P.nodeContains)(this._context,t)}},{key:"testIgnoreAllow",value:function(t,e,n){return!this.testIgnore(t.ignoreFrom,e,n)&&this.testAllow(t.allowFrom,e,n)}},{key:"testAllow",value:function(t,e,n){return!t||!!a.default.element(n)&&(a.default.string(t)?(0,P.matchesUpTo)(n,t,e):!!a.default.element(t)&&(0,P.nodeContains)(t,n))}},{key:"testIgnore",value:function(t,e,n){return!(!t||!a.default.element(n))&&(a.default.string(t)?(0,P.matchesUpTo)(n,t,e):!!a.default.element(t)&&(0,P.nodeContains)(t,n))}},{key:"fire",value:function(t){return this.events.fire(t),this}},{key:"_onOff",value:function(t,e,n,r){a.default.object(e)&&!a.default.array(e)&&(r=n,n=null);var o="on"===t?"add":"remove",i=(0,z.default)(e,n);for(var s in i){"wheel"===s&&(s=x.default.wheelEvent);for(var l=0;l<i[s].length;l++){var u=i[s][l];(0,Pn.default)(s,this._actions)?this.events[t](s,u):a.default.string(this.target)?this._scopeEvents["".concat(o,"Delegate")](this.target,this._context,s,u,r):this._scopeEvents[o](this.target,s,u,r)}}return this}},{key:"on",value:function(t,e,n){return this._onOff("on",t,e,n)}},{key:"off",value:function(t,e,n){return this._onOff("off",t,e,n)}},{key:"set",value:function(t){var e=this._defaults;for(var n in a.default.object(t)||(t={}),this.options=(0,Pe.default)(e.base),this._actions.methodDict){var r=n,o=this._actions.methodDict[r];this.options[r]={},this.setPerAction(r,(0,j.default)((0,j.default)({},e.perAction),e.actions[r])),this[o](t[r])}for(var i in t)a.default.func(this[i])&&this[i](t[i]);return this}},{key:"unset",value:function(){if(a.default.string(this.target))for(var t in this._scopeEvents.delegatedEvents)for(var e=this._scopeEvents.delegatedEvents[t],n=e.length-1;n>=0;n--){var r=e[n],o=r.selector,i=r.context,s=r.listeners;o===this.target&&i===this._context&&e.splice(n,1);for(var l=s.length-1;l>=0;l--)this._scopeEvents.removeDelegate(this.target,this._context,t,s[l][0],s[l][1])}else this._scopeEvents.remove(this.target,"all")}}]),t}();Mn.Interactable=In;var Dn=In;Mn.default=Dn;var An={};function zn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(An,"__esModule",{value:!0}),An.default=void 0;var Cn=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.list=[],this.selectorMap={},this.scope=void 0,this.scope=e,e.addListeners({"interactable:unset":function(t){var e=t.interactable,r=e.target,o=e._context,i=a.default.string(r)?n.selectorMap[r]:r[n.scope.id],s=i.findIndex((function(t){return t.context===o}));i[s]&&(i[s].context=null,i[s].interactable=null),i.splice(s,1)}})}var e,n,r;return e=t,(n=[{key:"new",value:function(t,e){e=(0,j.default)(e||{},{actions:this.scope.actions});var n=new this.scope.Interactable(t,e,this.scope.document,this.scope.events),r={context:n._context,interactable:n};return this.scope.addDocument(n._doc),this.list.push(n),a.default.string(t)?(this.selectorMap[t]||(this.selectorMap[t]=[]),this.selectorMap[t].push(r)):(n.target[this.scope.id]||Object.defineProperty(t,this.scope.id,{value:[],configurable:!0}),t[this.scope.id].push(r)),this.scope.fire("interactable:new",{target:t,options:e,interactable:n,win:this.scope._win}),n}},{key:"get",value:function(t,e){var n=e&&e.context||this.scope.document,r=a.default.string(t),o=r?this.selectorMap[t]:t[this.scope.id];if(!o)return null;var i=Z.find(o,(function(e){return e.context===n&&(r||e.interactable.inContext(t))}));return i&&i.interactable}},{key:"forEachMatch",value:function(t,e){for(var n=0;n<this.list.length;n++){var r=this.list[n],o=void 0;if((a.default.string(r.target)?a.default.element(t)&&P.matchesSelector(t,r.target):t===r.target)&&r.inContext(t)&&(o=e(r)),void 0!==o)return o}}}])&&zn(e.prototype,n),r&&zn(e,r),t}();An.default=Cn;var Rn={};function Fn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Xn(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return Yn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yn(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Yn(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(Rn,"__esModule",{value:!0}),Rn.default=Rn.FakeEvent=void 0;var Wn=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.currentTarget=void 0,this.originalEvent=void 0,this.originalEvent=e,(0,F.default)(this,e)}var e,n,r;return e=t,(n=[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}])&&Fn(e.prototype,n),r&&Fn(e,r),t}();function Ln(t){if(!a.default.object(t))return{capture:!!t,passive:!1};var e=(0,j.default)({},t);return e.capture=!!t.capture,e.passive=!!t.passive,e}Rn.FakeEvent=Wn;var Nn={id:"events",install:function(t){var e=[],n={},r=[],o={add:i,remove:s,addDelegate:function(t,e,o,a,s){var c=Ln(s);if(!n[o]){n[o]=[];for(var f=0;f<r.length;f++){var d=r[f];i(d,o,l),i(d,o,u,!0)}}var p=n[o],v=Z.find(p,(function(n){return n.selector===t&&n.context===e}));v||(v={selector:t,context:e,listeners:[]},p.push(v));v.listeners.push([a,c])},removeDelegate:function(t,e,r,o,i){var a,c=Ln(i),f=n[r],d=!1;if(!f)return;for(a=f.length-1;a>=0;a--){var p=f[a];if(p.selector===t&&p.context===e){for(var v=p.listeners,h=v.length-1;h>=0;h--){var g=Xn(v[h],2),y=g[0],m=g[1],b=m.capture,x=m.passive;if(y===o&&b===c.capture&&x===c.passive){v.splice(h,1),v.length||(f.splice(a,1),s(e,r,l),s(e,r,u,!0)),d=!0;break}}if(d)break}}},delegateListener:l,delegateUseCapture:u,delegatedEvents:n,documents:r,targets:e,supportsOptions:!1,supportsPassive:!1};function i(t,n,r,i){var a=Ln(i),s=Z.find(e,(function(e){return e.eventTarget===t}));s||(s={eventTarget:t,events:{}},e.push(s)),s.events[n]||(s.events[n]=[]),t.addEventListener&&!Z.contains(s.events[n],r)&&(t.addEventListener(n,r,o.supportsOptions?a:a.capture),s.events[n].push(r))}function s(t,n,r,i){var a=Ln(i),l=Z.findIndex(e,(function(e){return e.eventTarget===t})),u=e[l];if(u&&u.events)if("all"!==n){var c=!1,f=u.events[n];if(f){if("all"===r){for(var d=f.length-1;d>=0;d--)s(t,n,f[d],a);return}for(var p=0;p<f.length;p++)if(f[p]===r){t.removeEventListener(n,r,o.supportsOptions?a:a.capture),f.splice(p,1),0===f.length&&(delete u.events[n],c=!0);break}}c&&!Object.keys(u.events).length&&e.splice(l,1)}else for(n in u.events)u.events.hasOwnProperty(n)&&s(t,n,"all")}function l(t,e){for(var r=Ln(e),o=new Wn(t),i=n[t.type],s=Xn(W.getEventTargets(t),1)[0],l=s;a.default.element(l);){for(var u=0;u<i.length;u++){var c=i[u],f=c.selector,d=c.context;if(P.matchesSelector(l,f)&&P.nodeContains(d,s)&&P.nodeContains(d,l)){var p=c.listeners;o.currentTarget=l;for(var v=0;v<p.length;v++){var h=Xn(p[v],2),g=h[0],y=h[1],m=y.capture,b=y.passive;m===r.capture&&b===r.passive&&g(o)}}}l=P.parentNode(l)}}function u(t){return l(t,!0)}return t.document.createElement("div").addEventListener("test",null,{get capture(){return o.supportsOptions=!0},get passive(){return o.supportsPassive=!0}}),t.events=o,o}};Rn.default=Nn;var Bn={};Object.defineProperty(Bn,"__esModule",{value:!0}),Bn.default=void 0;var Un={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(t){for(var e=0;e<Un.methodOrder.length;e++){var n;n=Un.methodOrder[e];var r=Un[n](t);if(r)return r}return null},simulationResume:function(t){var e=t.pointerType,n=t.eventType,r=t.eventTarget,o=t.scope;if(!/down|start/i.test(n))return null;for(var i=0;i<o.interactions.list.length;i++){var a=o.interactions.list[i],s=r;if(a.simulation&&a.simulation.allowResume&&a.pointerType===e)for(;s;){if(s===a.element)return a;s=P.parentNode(s)}}return null},mouseOrPen:function(t){var e,n=t.pointerId,r=t.pointerType,o=t.eventType,i=t.scope;if("mouse"!==r&&"pen"!==r)return null;for(var a=0;a<i.interactions.list.length;a++){var s=i.interactions.list[a];if(s.pointerType===r){if(s.simulation&&!Vn(s,n))continue;if(s.interacting())return s;e||(e=s)}}if(e)return e;for(var l=0;l<i.interactions.list.length;l++){var u=i.interactions.list[l];if(!(u.pointerType!==r||/down/i.test(o)&&u.simulation))return u}return null},hasPointer:function(t){for(var e=t.pointerId,n=t.scope,r=0;r<n.interactions.list.length;r++){var o=n.interactions.list[r];if(Vn(o,e))return o}return null},idle:function(t){for(var e=t.pointerType,n=t.scope,r=0;r<n.interactions.list.length;r++){var o=n.interactions.list[r];if(1===o.pointers.length){var i=o.interactable;if(i&&(!i.options.gesture||!i.options.gesture.enabled))continue}else if(o.pointers.length>=2)continue;if(!o.interacting()&&e===o.pointerType)return o}return null}};function Vn(t,e){return t.pointers.some((function(t){return t.id===e}))}var qn=Un;Bn.default=qn;var Gn={};function $n(t){return($n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Hn(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return Kn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kn(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Kn(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Zn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Jn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Qn(t,e){return(Qn=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function tr(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=nr(t);if(e){var o=nr(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return er(this,n)}}function er(t,e){return!e||"object"!==$n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function nr(t){return(nr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(Gn,"__esModule",{value:!0}),Gn.default=void 0;var rr=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function or(t,e){return function(n){var r=e.interactions.list,o=W.getPointerType(n),i=Hn(W.getEventTargets(n),2),a=i[0],s=i[1],l=[];if(/^touch/.test(n.type)){e.prevTouchTime=e.now();for(var u=0;u<n.changedTouches.length;u++){var c=n.changedTouches[u],f={pointer:c,pointerId:W.getPointerId(c),pointerType:o,eventType:n.type,eventTarget:a,curEventTarget:s,scope:e},d=ir(f);l.push([f.pointer,f.eventTarget,f.curEventTarget,d])}}else{var p=!1;if(!x.default.supportsPointerEvent&&/mouse/.test(n.type)){for(var v=0;v<r.length&&!p;v++)p="mouse"!==r[v].pointerType&&r[v].pointerIsDown;p=p||e.now()-e.prevTouchTime<500||0===n.timeStamp}if(!p){var h={pointer:n,pointerId:W.getPointerId(n),pointerType:o,eventType:n.type,curEventTarget:s,eventTarget:a,scope:e},g=ir(h);l.push([h.pointer,h.eventTarget,h.curEventTarget,g])}}for(var y=0;y<l.length;y++){var m=Hn(l[y],4),b=m[0],w=m[1],_=m[2];m[3][t](b,n,w,_)}}}function ir(t){var e=t.pointerType,n=t.scope,r={interaction:Bn.default.search(t),searchDetails:t};return n.fire("interactions:find",r),r.interaction||n.interactions.new({pointerType:e})}function ar(t,e){var n=t.doc,r=t.scope,o=t.options,i=r.interactions.docEvents,a=r.events,s=a[e];for(var l in r.browser.isIOS&&!o.events&&(o.events={passive:!1}),a.delegatedEvents)s(n,l,a.delegateListener),s(n,l,a.delegateUseCapture,!0);for(var u=o&&o.events,c=0;c<i.length;c++){var f=i[c];s(n,f.type,f.listener,u)}}var sr={id:"core/interactions",install:function(t){for(var e={},n=0;n<rr.length;n++){var r=rr[n];e[r]=or(r,t)}var o,i=x.default.pEventTypes;function a(){for(var e=0;e<t.interactions.list.length;e++){var n=t.interactions.list[e];if(n.pointerIsDown&&"touch"===n.pointerType&&!n._interacting)for(var r=function(){var e=n.pointers[o];t.documents.some((function(t){var n=t.doc;return(0,P.nodeContains)(n,e.downTarget)}))||n.removePointer(e.pointer,e.event)},o=0;o<n.pointers.length;o++){r()}}}(o=g.default.PointerEvent?[{type:i.down,listener:a},{type:i.down,listener:e.pointerDown},{type:i.move,listener:e.pointerMove},{type:i.up,listener:e.pointerUp},{type:i.cancel,listener:e.pointerUp}]:[{type:"mousedown",listener:e.pointerDown},{type:"mousemove",listener:e.pointerMove},{type:"mouseup",listener:e.pointerUp},{type:"touchstart",listener:a},{type:"touchstart",listener:e.pointerDown},{type:"touchmove",listener:e.pointerMove},{type:"touchend",listener:e.pointerUp},{type:"touchcancel",listener:e.pointerUp}]).push({type:"blur",listener:function(e){for(var n=0;n<t.interactions.list.length;n++){t.interactions.list[n].documentBlur(e)}}}),t.prevTouchTime=0,t.Interaction=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Qn(t,e)}(a,e);var n,r,o,i=tr(a);function a(){return Zn(this,a),i.apply(this,arguments)}return n=a,(r=[{key:"_now",value:function(){return t.now()}},{key:"pointerMoveTolerance",get:function(){return t.interactions.pointerMoveTolerance},set:function(e){t.interactions.pointerMoveTolerance=e}}])&&Jn(n.prototype,r),o&&Jn(n,o),a}(Je.default),t.interactions={list:[],new:function(e){e.scopeFire=function(e,n){return t.fire(e,n)};var n=new t.Interaction(e);return t.interactions.list.push(n),n},listeners:e,docEvents:o,pointerMoveTolerance:1},t.usePlugin(le.default)},listeners:{"scope:add-document":function(t){return ar(t,"add")},"scope:remove-document":function(t){return ar(t,"remove")},"interactable:unset":function(t,e){for(var n=t.interactable,r=e.interactions.list.length-1;r>=0;r--){var o=e.interactions.list[r];o.interactable===n&&(o.stop(),e.fire("interactions:destroy",{interaction:o}),o.destroy(),e.interactions.list.length>2&&e.interactions.list.splice(r,1))}}},onDocSignal:ar,doOnInteractions:or,methodNames:rr};Gn.default=sr;var lr={};function ur(t){return(ur="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function cr(t,e,n){return(cr="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=vr(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function fr(t,e){return(fr=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function dr(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=vr(t);if(e){var o=vr(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return pr(this,n)}}function pr(t,e){return!e||"object"!==ur(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function vr(t){return(vr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function hr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function gr(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function yr(t,e,n){return e&&gr(t.prototype,e),n&&gr(t,n),t}Object.defineProperty(lr,"__esModule",{value:!0}),lr.initScope=br,lr.Scope=lr.default=void 0;var mr=function(){function t(){var e=this;hr(this,t),this.id="__interact_scope_".concat(Math.floor(100*Math.random())),this.isInitialized=!1,this.listenerMaps=[],this.browser=x.default,this.defaults=(0,Pe.default)(ze.default),this.Eventable=bn.default,this.actions={map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}},this.interactStatic=new Sn.default(this),this.InteractEvent=Fe.default,this.Interactable=void 0,this.interactables=new An.default(this),this._win=void 0,this.document=void 0,this.window=void 0,this.documents=[],this._plugins={list:[],map:{}},this.onWindowUnload=function(t){return e.removeDocument(t.target)};var n=this;this.Interactable=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&fr(t,e)}(r,t);var e=dr(r);function r(){return hr(this,r),e.apply(this,arguments)}return yr(r,[{key:"set",value:function(t){return cr(vr(r.prototype),"set",this).call(this,t),n.fire("interactable:set",{options:t,interactable:this}),this}},{key:"unset",value:function(){cr(vr(r.prototype),"unset",this).call(this),n.interactables.list.splice(n.interactables.list.indexOf(this),1),n.fire("interactable:unset",{interactable:this})}},{key:"_defaults",get:function(){return n.defaults}}]),r}(Mn.default)}return yr(t,[{key:"addListeners",value:function(t,e){this.listenerMaps.push({id:e,map:t})}},{key:"fire",value:function(t,e){for(var n=0;n<this.listenerMaps.length;n++){var r=this.listenerMaps[n].map[t];if(r&&!1===r(e,this,t))return!1}}},{key:"init",value:function(t){return this.isInitialized?this:br(this,t)}},{key:"pluginIsInstalled",value:function(t){return this._plugins.map[t.id]||-1!==this._plugins.list.indexOf(t)}},{key:"usePlugin",value:function(t,e){if(!this.isInitialized)return this;if(this.pluginIsInstalled(t))return this;if(t.id&&(this._plugins.map[t.id]=t),this._plugins.list.push(t),t.install&&t.install(this,e),t.listeners&&t.before){for(var n=0,r=this.listenerMaps.length,o=t.before.reduce((function(t,e){return t[e]=!0,t}),{});n<r;n++){if(o[this.listenerMaps[n].id])break}this.listenerMaps.splice(n,0,{id:t.id,map:t.listeners})}else t.listeners&&this.listenerMaps.push({id:t.id,map:t.listeners});return this}},{key:"addDocument",value:function(t,n){if(-1!==this.getDocIndex(t))return!1;var r=e.default.getWindow(t);n=n?(0,j.default)({},n):{},this.documents.push({doc:t,options:n}),this.events.documents.push(t),t!==this.document&&this.events.add(r,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:t,window:r,scope:this,options:n})}},{key:"removeDocument",value:function(t){var n=this.getDocIndex(t),r=e.default.getWindow(t),o=this.documents[n].options;this.events.remove(r,"unload",this.onWindowUnload),this.documents.splice(n,1),this.events.documents.splice(n,1),this.fire("scope:remove-document",{doc:t,window:r,scope:this,options:o})}},{key:"getDocIndex",value:function(t){for(var e=0;e<this.documents.length;e++)if(this.documents[e].doc===t)return e;return-1}},{key:"getDocOptions",value:function(t){var e=this.getDocIndex(t);return-1===e?null:this.documents[e].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),t}();function br(t,n){return t.isInitialized=!0,e.default.init(n),g.default.init(n),x.default.init(n),jt.default.init(n),t.window=n,t.document=n.document,t.usePlugin(Gn.default),t.usePlugin(Rn.default),t}lr.Scope=lr.default=mr;var xr={};function wr(t){return(wr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(xr,"__esModule",{value:!0}),xr.init=xr.default=void 0;var _r=new lr.default,Pr=_r.interactStatic;xr.default=Pr;var Sr=function(t){return _r.init(t)};xr.init=Sr,"object"===("undefined"==typeof window?"undefined":wr(window))&&window&&Sr(window);var Or={};Object.defineProperty(Or,"__esModule",{value:!0}),Or.default=void 0;Or.default=function(){};var Er={};Object.defineProperty(Er,"__esModule",{value:!0}),Er.default=void 0;Er.default=function(){};var Tr={};function Mr(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return jr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jr(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function jr(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(Tr,"__esModule",{value:!0}),Tr.default=void 0;Tr.default=function(t){var e=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter((function(e){var n=Mr(e,2),r=n[0],o=n[1];return r in t||o in t})),n=function(n,r){for(var o=t.range,i=t.limits,a=void 0===i?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:i,s=t.offset,l=void 0===s?{x:0,y:0}:s,u={range:o,grid:t,x:null,y:null},c=0;c<e.length;c++){var f=Mr(e[c],2),d=f[0],p=f[1],v=Math.round((n-l.x)/t[d]),h=Math.round((r-l.y)/t[p]);u[d]=Math.max(a.left,Math.min(a.right,v*t[d]+l.x)),u[p]=Math.max(a.top,Math.min(a.bottom,h*t[p]+l.y))}return u};return n.grid=t,n.coordFields=e,n};var kr={};Object.defineProperty(kr,"__esModule",{value:!0}),Object.defineProperty(kr,"edgeTarget",{enumerable:!0,get:function(){return Or.default}}),Object.defineProperty(kr,"elements",{enumerable:!0,get:function(){return Er.default}}),Object.defineProperty(kr,"grid",{enumerable:!0,get:function(){return Tr.default}});var Ir={};Object.defineProperty(Ir,"__esModule",{value:!0}),Ir.default=void 0;var Dr={id:"snappers",install:function(t){var e=t.interactStatic;e.snappers=(0,j.default)(e.snappers||{},kr),e.createSnapGrid=e.snappers.grid}};Ir.default=Dr;var Ar={};function zr(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Cr(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?zr(Object(n),!0).forEach((function(e){Rr(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):zr(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Rr(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(Ar,"__esModule",{value:!0}),Ar.aspectRatio=Ar.default=void 0;var Fr={start:function(t){var e=t.state,n=t.rect,r=t.edges,o=t.pageCoords,i=e.options.ratio,a=e.options,s=a.equalDelta,l=a.modifiers;"preserve"===i&&(i=n.width/n.height),e.startCoords=(0,j.default)({},o),e.startRect=(0,j.default)({},n),e.ratio=i,e.equalDelta=s;var u=e.linkedEdges={top:r.top||r.left&&!r.bottom,left:r.left||r.top&&!r.right,bottom:r.bottom||r.right&&!r.top,right:r.right||r.bottom&&!r.left};if(e.xIsPrimaryAxis=!(!r.left&&!r.right),e.equalDelta)e.edgeSign=(u.left?1:-1)*(u.top?1:-1);else{var c=e.xIsPrimaryAxis?u.top:u.left;e.edgeSign=c?-1:1}if((0,j.default)(t.edges,u),l&&l.length){var f=new Se.default(t.interaction);f.copyFrom(t.interaction.modification),f.prepareStates(l),e.subModification=f,f.startAll(Cr({},t))}},set:function(t){var e=t.state,n=t.rect,r=t.coords,o=(0,j.default)({},r),i=e.equalDelta?Xr:Yr;if(i(e,e.xIsPrimaryAxis,r,n),!e.subModification)return null;var a=(0,j.default)({},n);(0,k.addEdges)(e.linkedEdges,a,{x:r.x-o.x,y:r.y-o.y});var s=e.subModification.setAll(Cr(Cr({},t),{},{rect:a,edges:e.linkedEdges,pageCoords:r,prevCoords:r,prevRect:a})),l=s.delta;s.changed&&(i(e,Math.abs(l.x)>Math.abs(l.y),s.coords,s.rect),(0,j.default)(r,s.coords));return s.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function Xr(t,e,n){var r=t.startCoords,o=t.edgeSign;e?n.y=r.y+(n.x-r.x)*o:n.x=r.x+(n.y-r.y)*o}function Yr(t,e,n,r){var o=t.startRect,i=t.startCoords,a=t.ratio,s=t.edgeSign;if(e){var l=r.width/a;n.y=i.y+(l-o.height)*s}else{var u=r.height*a;n.x=i.x+(u-o.width)*s}}Ar.aspectRatio=Fr;var Wr=(0,Ie.makeModifier)(Fr,"aspectRatio");Ar.default=Wr;var Lr={};Object.defineProperty(Lr,"__esModule",{value:!0}),Lr.default=void 0;var Nr=function(){};Nr._defaults={};var Br=Nr;Lr.default=Br;var Ur={};Object.defineProperty(Ur,"__esModule",{value:!0}),Object.defineProperty(Ur,"default",{enumerable:!0,get:function(){return Lr.default}});var Vr={};function qr(t,e,n){return a.default.func(t)?k.resolveRectLike(t,e.interactable,e.element,[n.x,n.y,e]):k.resolveRectLike(t,e.interactable,e.element)}Object.defineProperty(Vr,"__esModule",{value:!0}),Vr.getRestrictionRect=qr,Vr.restrict=Vr.default=void 0;var Gr={start:function(t){var e=t.rect,n=t.startOffset,r=t.state,o=t.interaction,i=t.pageCoords,a=r.options,s=a.elementRect,l=(0,j.default)({left:0,top:0,right:0,bottom:0},a.offset||{});if(e&&s){var u=qr(a.restriction,o,i);if(u){var c=u.right-u.left-e.width,f=u.bottom-u.top-e.height;c<0&&(l.left+=c,l.right+=c),f<0&&(l.top+=f,l.bottom+=f)}l.left+=n.left-e.width*s.left,l.top+=n.top-e.height*s.top,l.right+=n.right-e.width*(1-s.right),l.bottom+=n.bottom-e.height*(1-s.bottom)}r.offset=l},set:function(t){var e=t.coords,n=t.interaction,r=t.state,o=r.options,i=r.offset,a=qr(o.restriction,n,e);if(a){var s=k.xywhToTlbr(a);e.x=Math.max(Math.min(s.right-i.right,e.x),s.left+i.left),e.y=Math.max(Math.min(s.bottom-i.bottom,e.y),s.top+i.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}};Vr.restrict=Gr;var $r=(0,Ie.makeModifier)(Gr,"restrict");Vr.default=$r;var Hr={};Object.defineProperty(Hr,"__esModule",{value:!0}),Hr.restrictEdges=Hr.default=void 0;var Kr={top:1/0,left:1/0,bottom:-1/0,right:-1/0},Zr={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function Jr(t,e){for(var n=["top","left","bottom","right"],r=0;r<n.length;r++){var o=n[r];o in t||(t[o]=e[o])}return t}var Qr={noInner:Kr,noOuter:Zr,start:function(t){var e,n=t.interaction,r=t.startOffset,o=t.state,i=o.options;if(i){var a=(0,Vr.getRestrictionRect)(i.offset,n,n.coords.start.page);e=k.rectToXY(a)}e=e||{x:0,y:0},o.offset={top:e.y+r.top,left:e.x+r.left,bottom:e.y-r.bottom,right:e.x-r.right}},set:function(t){var e=t.coords,n=t.edges,r=t.interaction,o=t.state,i=o.offset,a=o.options;if(n){var s=(0,j.default)({},e),l=(0,Vr.getRestrictionRect)(a.inner,r,s)||{},u=(0,Vr.getRestrictionRect)(a.outer,r,s)||{};Jr(l,Kr),Jr(u,Zr),n.top?e.y=Math.min(Math.max(u.top+i.top,s.y),l.top+i.top):n.bottom&&(e.y=Math.max(Math.min(u.bottom+i.bottom,s.y),l.bottom+i.bottom)),n.left?e.x=Math.min(Math.max(u.left+i.left,s.x),l.left+i.left):n.right&&(e.x=Math.max(Math.min(u.right+i.right,s.x),l.right+i.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}};Hr.restrictEdges=Qr;var to=(0,Ie.makeModifier)(Qr,"restrictEdges");Hr.default=to;var eo={};Object.defineProperty(eo,"__esModule",{value:!0}),eo.restrictRect=eo.default=void 0;var no=(0,j.default)({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(t){}},Vr.restrict.defaults),ro={start:Vr.restrict.start,set:Vr.restrict.set,defaults:no};eo.restrictRect=ro;var oo=(0,Ie.makeModifier)(ro,"restrictRect");eo.default=oo;var io={};Object.defineProperty(io,"__esModule",{value:!0}),io.restrictSize=io.default=void 0;var ao={width:-1/0,height:-1/0},so={width:1/0,height:1/0};var lo={start:function(t){return Hr.restrictEdges.start(t)},set:function(t){var e=t.interaction,n=t.state,r=t.rect,o=t.edges,i=n.options;if(o){var a=k.tlbrToXywh((0,Vr.getRestrictionRect)(i.min,e,t.coords))||ao,s=k.tlbrToXywh((0,Vr.getRestrictionRect)(i.max,e,t.coords))||so;n.options={endOnly:i.endOnly,inner:(0,j.default)({},Hr.restrictEdges.noInner),outer:(0,j.default)({},Hr.restrictEdges.noOuter)},o.top?(n.options.inner.top=r.bottom-a.height,n.options.outer.top=r.bottom-s.height):o.bottom&&(n.options.inner.bottom=r.top+a.height,n.options.outer.bottom=r.top+s.height),o.left?(n.options.inner.left=r.right-a.width,n.options.outer.left=r.right-s.width):o.right&&(n.options.inner.right=r.left+a.width,n.options.outer.right=r.left+s.width),Hr.restrictEdges.set(t),n.options=i}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}};io.restrictSize=lo;var uo=(0,Ie.makeModifier)(lo,"restrictSize");io.default=uo;var co={};Object.defineProperty(co,"__esModule",{value:!0}),Object.defineProperty(co,"default",{enumerable:!0,get:function(){return Lr.default}});var fo={};Object.defineProperty(fo,"__esModule",{value:!0}),fo.snap=fo.default=void 0;var po={start:function(t){var e,n=t.interaction,r=t.interactable,o=t.element,i=t.rect,a=t.state,s=t.startOffset,l=a.options,u=l.offsetWithOrigin?function(t){var e=t.interaction.element;return(0,k.rectToXY)((0,k.resolveRectLike)(t.state.options.origin,null,null,[e]))||(0,A.default)(t.interactable,e,t.interaction.prepared.name)}(t):{x:0,y:0};if("startCoords"===l.offset)e={x:n.coords.start.page.x,y:n.coords.start.page.y};else{var c=(0,k.resolveRectLike)(l.offset,r,o,[n]);(e=(0,k.rectToXY)(c)||{x:0,y:0}).x+=u.x,e.y+=u.y}var f=l.relativePoints;a.offsets=i&&f&&f.length?f.map((function(t,n){return{index:n,relativePoint:t,x:s.left-i.width*t.x+e.x,y:s.top-i.height*t.y+e.y}})):[(0,j.default)({index:0,relativePoint:null},e)]},set:function(t){var e=t.interaction,n=t.coords,r=t.state,o=r.options,i=r.offsets,s=(0,A.default)(e.interactable,e.element,e.prepared.name),l=(0,j.default)({},n),u=[];o.offsetWithOrigin||(l.x-=s.x,l.y-=s.y);for(var c=0;c<i.length;c++)for(var f=i[c],d=l.x-f.x,p=l.y-f.y,v=0,h=o.targets.length;v<h;v++){var g=o.targets[v],y=void 0;(y=a.default.func(g)?g(d,p,e._proxy,f,v):g)&&u.push({x:(a.default.number(y.x)?y.x:d)+f.x,y:(a.default.number(y.y)?y.y:p)+f.y,range:a.default.number(y.range)?y.range:o.range,source:g,index:v,offset:f})}for(var m={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},b=0;b<u.length;b++){var x=u[b],w=x.range,_=x.x-l.x,P=x.y-l.y,S=(0,R.default)(_,P),O=S<=w;w===1/0&&m.inRange&&m.range!==1/0&&(O=!1),m.target&&!(O?m.inRange&&w!==1/0?S/w<m.distance/m.range:w===1/0&&m.range!==1/0||S<m.distance:!m.inRange&&S<m.distance)||(m.target=x,m.distance=S,m.range=w,m.inRange=O,m.delta.x=_,m.delta.y=P)}return m.inRange&&(n.x=m.target.x,n.y=m.target.y),r.closest=m,m},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}};fo.snap=po;var vo=(0,Ie.makeModifier)(po,"snap");fo.default=vo;var ho={};function go(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return yo(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yo(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function yo(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(ho,"__esModule",{value:!0}),ho.snapSize=ho.default=void 0;var mo={start:function(t){var e=t.state,n=t.edges,r=e.options;if(!n)return null;t.state={options:{targets:null,relativePoints:[{x:n.left?0:1,y:n.top?0:1}],offset:r.offset||"self",origin:{x:0,y:0},range:r.range}},e.targetFields=e.targetFields||[["width","height"],["x","y"]],fo.snap.start(t),e.offsets=t.state.offsets,t.state=e},set:function(t){var e=t.interaction,n=t.state,r=t.coords,o=n.options,i=n.offsets,s={x:r.x-i[0].x,y:r.y-i[0].y};n.options=(0,j.default)({},o),n.options.targets=[];for(var l=0;l<(o.targets||[]).length;l++){var u=(o.targets||[])[l],c=void 0;if(c=a.default.func(u)?u(s.x,s.y,e):u){for(var f=0;f<n.targetFields.length;f++){var d=go(n.targetFields[f],2),p=d[0],v=d[1];if(p in c||v in c){c.x=c[p],c.y=c[v];break}}n.options.targets.push(c)}}var h=fo.snap.set(t);return n.options=o,h},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}};ho.snapSize=mo;var bo=(0,Ie.makeModifier)(mo,"snapSize");ho.default=bo;var xo={};Object.defineProperty(xo,"__esModule",{value:!0}),xo.snapEdges=xo.default=void 0;var wo={start:function(t){var e=t.edges;return e?(t.state.targetFields=t.state.targetFields||[[e.left?"left":"right",e.top?"top":"bottom"]],ho.snapSize.start(t)):null},set:ho.snapSize.set,defaults:(0,j.default)((0,Pe.default)(ho.snapSize.defaults),{targets:null,range:null,offset:{x:0,y:0}})};xo.snapEdges=wo;var _o=(0,Ie.makeModifier)(wo,"snapEdges");xo.default=_o;var Po={};Object.defineProperty(Po,"__esModule",{value:!0}),Object.defineProperty(Po,"default",{enumerable:!0,get:function(){return Lr.default}});var So={};Object.defineProperty(So,"__esModule",{value:!0}),Object.defineProperty(So,"default",{enumerable:!0,get:function(){return Lr.default}});var Oo={};Object.defineProperty(Oo,"__esModule",{value:!0}),Oo.default=void 0;var Eo={aspectRatio:Ar.default,restrictEdges:Hr.default,restrict:Vr.default,restrictRect:eo.default,restrictSize:io.default,snapEdges:xo.default,snap:fo.default,snapSize:ho.default,spring:Po.default,avoid:Ur.default,transform:So.default,rubberband:co.default};Oo.default=Eo;var To={};Object.defineProperty(To,"__esModule",{value:!0}),To.default=void 0;var Mo={id:"modifiers",install:function(t){var e=t.interactStatic;for(var n in t.usePlugin(Ie.default),t.usePlugin(Ir.default),e.modifiers=Oo.default,Oo.default){var r=Oo.default[n],o=r._defaults,i=r._methods;o._methods=i,t.defaults.perAction[n]=o}}};To.default=Mo;var jo={};Object.defineProperty(jo,"__esModule",{value:!0}),jo.default=void 0;jo.default={};var ko={};function Io(t){return(Io="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Do(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Ao(t,e){return(Ao=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function zo(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Fo(t);if(e){var o=Fo(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Co(this,n)}}function Co(t,e){return!e||"object"!==Io(e)&&"function"!=typeof e?Ro(t):e}function Ro(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Fo(t){return(Fo=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(ko,"__esModule",{value:!0}),ko.PointerEvent=ko.default=void 0;var Xo=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ao(t,e)}(i,t);var e,n,r,o=zo(i);function i(t,e,n,r,a,s){var l;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(l=o.call(this,a)).type=void 0,l.originalEvent=void 0,l.pointerId=void 0,l.pointerType=void 0,l.double=void 0,l.pageX=void 0,l.pageY=void 0,l.clientX=void 0,l.clientY=void 0,l.dt=void 0,l.eventable=void 0,W.pointerExtend(Ro(l),n),n!==e&&W.pointerExtend(Ro(l),e),l.timeStamp=s,l.originalEvent=n,l.type=t,l.pointerId=W.getPointerId(e),l.pointerType=W.getPointerType(e),l.target=r,l.currentTarget=null,"tap"===t){var u=a.getPointerIndex(e);l.dt=l.timeStamp-a.pointers[u].downTime;var c=l.timeStamp-a.tapTime;l.double=!!(a.prevTap&&"doubletap"!==a.prevTap.type&&a.prevTap.target===l.target&&c<500)}else"doubletap"===t&&(l.dt=e.timeStamp-a.tapTime);return l}return e=i,(n=[{key:"_subtractOrigin",value:function(t){var e=t.x,n=t.y;return this.pageX-=e,this.pageY-=n,this.clientX-=e,this.clientY-=n,this}},{key:"_addOrigin",value:function(t){var e=t.x,n=t.y;return this.pageX+=e,this.pageY+=n,this.clientX+=e,this.clientY+=n,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}])&&Do(e.prototype,n),r&&Do(e,r),i}(G.default);ko.PointerEvent=ko.default=Xo;var Yo={};Object.defineProperty(Yo,"__esModule",{value:!0}),Yo.default=void 0;var Wo={id:"pointer-events/base",install:function(t){t.pointerEvents=Wo,t.defaults.actions.pointerEvents=Wo.defaults,(0,j.default)(t.actions.phaselessTypes,Wo.types)},listeners:{"interactions:new":function(t){var e=t.interaction;e.prevTap=null,e.tapTime=0},"interactions:update-pointer":function(t){var e=t.down,n=t.pointerInfo;if(!e&&n.hold)return;n.hold={duration:1/0,timeout:null}},"interactions:move":function(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget,a=t.duplicate,s=n.getPointerIndex(r);a||n.pointerIsDown&&!n.pointerWasMoved||(n.pointerIsDown&&clearTimeout(n.pointers[s].hold.timeout),Lo({interaction:n,pointer:r,event:o,eventTarget:i,type:"move"},e))},"interactions:down":function(t,e){!function(t,e){for(var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget,a=t.pointerIndex,s=n.pointers[a].hold,l=P.getPath(i),u={interaction:n,pointer:r,event:o,eventTarget:i,type:"hold",targets:[],path:l,node:null},c=0;c<l.length;c++){var f=l[c];u.node=f,e.fire("pointerEvents:collect-targets",u)}if(!u.targets.length)return;for(var d=1/0,p=0;p<u.targets.length;p++){var v=u.targets[p].eventable.options.holdDuration;v<d&&(d=v)}s.duration=d,s.timeout=setTimeout((function(){Lo({interaction:n,eventTarget:i,pointer:r,event:o,type:"hold"},e)}),d)}(t,e),Lo(t,e)},"interactions:up":function(t,e){Bo(t),Lo(t,e),function(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget;n.pointerWasMoved||Lo({interaction:n,eventTarget:i,pointer:r,event:o,type:"tap"},e)}(t,e)},"interactions:cancel":function(t,e){Bo(t),Lo(t,e)}},PointerEvent:ko.default,fire:Lo,collectEventTargets:No,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function Lo(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget,a=t.type,s=t.targets,l=void 0===s?No(t,e):s,u=new ko.default(a,r,o,i,n,e.now());e.fire("pointerEvents:new",{pointerEvent:u});for(var c={interaction:n,pointer:r,event:o,eventTarget:i,targets:l,type:a,pointerEvent:u},f=0;f<l.length;f++){var d=l[f];for(var p in d.props||{})u[p]=d.props[p];var v=(0,A.default)(d.eventable,d.node);if(u._subtractOrigin(v),u.eventable=d.eventable,u.currentTarget=d.node,d.eventable.fire(u),u._addOrigin(v),u.immediatePropagationStopped||u.propagationStopped&&f+1<l.length&&l[f+1].node!==u.currentTarget)break}if(e.fire("pointerEvents:fired",c),"tap"===a){var h=u.double?Lo({interaction:n,pointer:r,event:o,eventTarget:i,type:"doubletap"},e):u;n.prevTap=h,n.tapTime=h.timeStamp}return u}function No(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget,a=t.type,s=n.getPointerIndex(r),l=n.pointers[s];if("tap"===a&&(n.pointerWasMoved||!l||l.downTarget!==i))return[];for(var u=P.getPath(i),c={interaction:n,pointer:r,event:o,eventTarget:i,type:a,path:u,targets:[],node:null},f=0;f<u.length;f++){var d=u[f];c.node=d,e.fire("pointerEvents:collect-targets",c)}return"hold"===a&&(c.targets=c.targets.filter((function(t){return t.eventable.options.holdDuration===n.pointers[s].hold.duration}))),c.targets}function Bo(t){var e=t.interaction,n=t.pointerIndex;e.pointers[n].hold&&clearTimeout(e.pointers[n].hold.timeout)}var Uo=Wo;Yo.default=Uo;var Vo={};function qo(t){var e=t.interaction;e.holdIntervalHandle&&(clearInterval(e.holdIntervalHandle),e.holdIntervalHandle=null)}Object.defineProperty(Vo,"__esModule",{value:!0}),Vo.default=void 0;var Go={id:"pointer-events/holdRepeat",install:function(t){t.usePlugin(Yo.default);var e=t.pointerEvents;e.defaults.holdRepeatInterval=0,e.types.holdrepeat=t.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce((function(t,e){return t["pointerEvents:".concat(e)]=qo,t}),{"pointerEvents:new":function(t){var e=t.pointerEvent;"hold"===e.type&&(e.count=(e.count||0)+1)},"pointerEvents:fired":function(t,e){var n=t.interaction,r=t.pointerEvent,o=t.eventTarget,i=t.targets;if("hold"===r.type&&i.length){var a=i[0].eventable.options.holdRepeatInterval;a<=0||(n.holdIntervalHandle=setTimeout((function(){e.pointerEvents.fire({interaction:n,eventTarget:o,type:"hold",pointer:r,event:r},e)}),a))}}})};Vo.default=Go;var $o={};function Ho(t){return(0,j.default)(this.events.options,t),this}Object.defineProperty($o,"__esModule",{value:!0}),$o.default=void 0;var Ko={id:"pointer-events/interactableTargets",install:function(t){var e=t.Interactable;e.prototype.pointerEvents=Ho;var n=e.prototype._backCompatOption;e.prototype._backCompatOption=function(t,e){var r=n.call(this,t,e);return r===this&&(this.events.options[t]=e),r}},listeners:{"pointerEvents:collect-targets":function(t,e){var n=t.targets,r=t.node,o=t.type,i=t.eventTarget;e.interactables.forEachMatch(r,(function(t){var e=t.events,a=e.options;e.types[o]&&e.types[o].length&&t.testIgnoreAllow(a,r,i)&&n.push({node:r,eventable:e,props:{interactable:t}})}))},"interactable:new":function(t){var e=t.interactable;e.events.getRect=function(t){return e.getRect(t)}},"interactable:set":function(t,e){var n=t.interactable,r=t.options;(0,j.default)(n.events.options,e.pointerEvents.defaults),(0,j.default)(n.events.options,r.pointerEvents||{})}}};$o.default=Ko;var Zo={};Object.defineProperty(Zo,"__esModule",{value:!0}),Object.defineProperty(Zo,"holdRepeat",{enumerable:!0,get:function(){return Vo.default}}),Object.defineProperty(Zo,"interactableTargets",{enumerable:!0,get:function(){return $o.default}}),Zo.pointerEvents=Zo.default=void 0,Zo.pointerEvents=Yo;var Jo={id:"pointer-events",install:function(t){t.usePlugin(Yo),t.usePlugin(Vo.default),t.usePlugin($o.default)}};Zo.default=Jo;var Qo={};Object.defineProperty(Qo,"__esModule",{value:!0}),Qo.default=void 0;Qo.default={};var ti={};function ei(t){var e=t.Interactable;t.actions.phases.reflow=!0,e.prototype.reflow=function(e){return function(t,e,n){for(var r=a.default.string(t.target)?Z.from(t._context.querySelectorAll(t.target)):[t.target],o=n.window.Promise,i=o?[]:null,s=function(){var a=r[l],s=t.getRect(a);if(!s)return"break";var u=Z.find(n.interactions.list,(function(n){return n.interacting()&&n.interactable===t&&n.element===a&&n.prepared.name===e.name})),c=void 0;if(u)u.move(),i&&(c=u._reflowPromise||new o((function(t){u._reflowResolve=t})));else{var f=(0,k.tlbrToXywh)(s),d={page:{x:f.x,y:f.y},client:{x:f.x,y:f.y},timeStamp:n.now()},p=W.coordsToEvent(d);c=function(t,e,n,r,o){var i=t.interactions.new({pointerType:"reflow"}),a={interaction:i,event:o,pointer:o,eventTarget:n,phase:"reflow"};i.interactable=e,i.element=n,i.prepared=(0,j.default)({},r),i.prevEvent=o,i.updatePointer(o,o,n,!0),i._doPhase(a);var s=t.window.Promise,l=s?new s((function(t){i._reflowResolve=t})):null;i._reflowPromise=l,i.start(r,e,n),i._interacting?(i.move(a),i.end(o)):i.stop();return i.removePointer(o,o),i.pointerIsDown=!1,l}(n,t,a,e,p)}i&&i.push(c)},l=0;l<r.length;l++){if("break"===s())break}return i&&o.all(i).then((function(){return t}))}(this,e,t)}}Object.defineProperty(ti,"__esModule",{value:!0}),ti.install=ei,ti.default=void 0;var ni={id:"reflow",install:ei,listeners:{"interactions:stop":function(t,e){var n=t.interaction;"reflow"===n.pointerType&&(n._reflowResolve&&n._reflowResolve(),Z.remove(e.interactions.list,n))}}};ti.default=ni;var ri={};Object.defineProperty(ri,"__esModule",{value:!0}),ri.default=void 0;ri.default={};var oi={};Object.defineProperty(oi,"__esModule",{value:!0}),oi.exchange=void 0;oi.exchange={};var ii={};Object.defineProperty(ii,"__esModule",{value:!0}),ii.default=void 0;ii.default={};var ai={exports:{}};function si(t){return(si="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(ai.exports,"__esModule",{value:!0}),ai.exports.default=void 0,xr.default.use(jo.default),xr.default.use(le.default),xr.default.use(on.default),xr.default.use(se.default),xr.default.use(Mt.default),xr.default.use(Zo.default),xr.default.use(dn.default),xr.default.use(To.default),xr.default.use(ie.default),xr.default.use(Et.default),xr.default.use(zt.default),xr.default.use(ti.default),xr.default.use(_e.default),xr.default.use(ii.default),xr.default.use(Qo.default),xr.default.__utils={exchange:oi.exchange,displace:ri,pointer:W},xr.default.use(ve.default);var li=xr.default;if(ai.exports.default=li,"object"===si(ai)&&ai)try{ai.exports=xr.default}catch(t){}xr.default.default=xr.default,ai=ai.exports;var ui={exports:{}};function ci(t){return(ci="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(ui.exports,"__esModule",{value:!0}),ui.exports.default=void 0;var fi=ai.default;if(ui.exports.default=fi,"object"===ci(ui)&&ui)try{ui.exports=ai.default}catch(t){}return ai.default.default=ai.default,ui=ui.exports}));


},{}],"vM5Z":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PositionedDisplay;

var _react = _interopRequireWildcard(require("react"));

var _csx = require("csx");

var _typestyle = require("typestyle");

var _interactjs = _interopRequireDefault(require("interactjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function PositionedDisplay(props) {
  var _a = props.width,
      width = _a === void 0 ? 200 : _a;
  var columnCount = props.stack.lines[0].characters.length;
  var rowCount = props.stack.lines.length;
  var cellSize = width / columnCount;
  var ref = (0, _react.useRef)();
  var interactableRef = (0, _react.useRef)(null); // Interactable captures stale callback
  // There must be a more elegant way to fix it!

  var characterPaintRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    characterPaintRef.current = props.onCharacterPaint;
  }, [props.onCharacterPaint]);
  (0, _react.useEffect)(function () {
    if (interactableRef.current) {
      return;
    }

    console.log('mounting interact');
    interactableRef.current = (0, _interactjs.default)(ref.current).draggable({
      origin: 'self',
      modifiers: [_interactjs.default.modifiers.snap({
        targets: [_interactjs.default.snappers.grid({
          x: cellSize / 10,
          y: cellSize / 10
        })]
      })],
      listeners: {
        move: function move(event) {
          var column = Math.floor(event.client.x / cellSize);
          var row = Math.floor(event.client.y / cellSize);
          var value = props.stack.lines[row].characters[column];

          if (column <= columnCount && row <= rowCount) {
            var onCharacterPaint = characterPaintRef.current;
            onCharacterPaint({
              position: {
                column: column,
                row: row
              },
              value: value
            });
          }
        }
      }
    });
    return function () {
      var _a;

      console.log('unmounting interact');
      (_a = interactableRef.current) === null || _a === void 0 ? void 0 : _a.unset();
    };
  }, [ref]);
  var outerStyle = (0, _typestyle.style)({
    position: 'relative',
    display: 'table',
    fontFamily: 'monospace',
    fontSize: '48px',
    cursor: 'pointer',
    width: (0, _csx.px)(width),
    height: (0, _csx.px)(columnCount * cellSize),
    touchAction: 'none'
  });
  return _react.default.createElement("div", {
    className: outerStyle,
    ref: ref
  }, renderCells(props.stack, width, cellSize));
}

function renderCells(stack, width, cellSize) {
  var cellStyle = (0, _typestyle.style)({
    position: 'absolute',
    display: 'table-cell',
    textAlign: 'center',
    width: (0, _csx.px)(cellSize),
    height: (0, _csx.px)(cellSize),
    fontSize: (0, _csx.px)(Math.floor(cellSize * 0.9)),
    pointerEvents: 'none'
  });

  var Cell = function Cell(props) {
    var _a = props.position,
        row = _a.row,
        column = _a.column;
    var itemStyle = {
      left: (0, _csx.px)(column * cellSize),
      top: (0, _csx.px)(row * cellSize)
    };
    return _react.default.createElement("div", {
      className: cellStyle,
      style: itemStyle
    }, props.children);
  };

  return stack.lines.map(function (line, row) {
    return line.characters.map(function (char, column) {
      return _react.default.createElement(Cell, {
        position: {
          row: row,
          column: column
        },
        key: row + "." + column
      }, char);
    });
  });
}
},{"react":"n8MK","csx":"O5kx","typestyle":"oehJ","interactjs":"kJvX"}],"qv5k":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Editor;

var _react = _interopRequireWildcard(require("react"));

var _immer = _interopRequireDefault(require("immer"));

var csstips = _interopRequireWildcard(require("csstips"));

require("emoji-mart/css/emoji-mart.css");

var _copyToClipboard = _interopRequireDefault(require("copy-to-clipboard"));

var _graphemeSplitter = _interopRequireDefault(require("grapheme-splitter"));

var _typestyle = require("typestyle");

var _reactUtil = require("../util/reactUtil");

var _charUtil = require("../util/charUtil");

var _browserUtil = require("../util/browserUtil");

var _PositionedDisplay = _interopRequireDefault(require("./PositionedDisplay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

// const emojiData = getEmojiData('11.0')
var isMobile = (0, _browserUtil.isMobileDevice)();
var defaultStackRaw = "\u2600\uFE0F\uD83C\uDF2B\uD83C\uDF26\n\uD83C\uDF2B\u26C8\uD83C\uDF08\n\uD83C\uDF27\uD83C\uDF08\uD83D\uDCB0";
var splitter = new _graphemeSplitter.default();
var defaultStack = {
  lines: defaultStackRaw.split('\n').map(function (line) {
    var characters = splitter.splitGraphemes(line.trim());
    return {
      characters: characters
    };
  })
};
var inputStyle = (0, _typestyle.style)({
  border: '10px solid lightgray',
  fontSize: '64px',
  padding: '4px',
  textAlign: 'center'
});

function Editor(props) {
  var _a = (0, _react.useState)(),
      copied = _a[0],
      setCopied = _a[1];

  var _b = (0, _react.useState)(props.initialStack || defaultStack),
      stack = _b[0],
      setStack = _b[1];

  var _c = (0, _react.useState)('😇'),
      brush = _c[0],
      setBrush = _c[1];

  var handleCharacterPaint = function handleCharacterPaint(event) {
    if (event.value !== brush) {
      setStack(function (state) {
        return (0, _immer.default)(state, function (draft) {
          draft.lines[event.position.row].characters[event.position.column] = brush;
        });
      });
    }
  };

  var rootStyle = __assign({
    cursor: 'pointer'
  }, csstips.flex);

  return _react.default.createElement("div", {
    className: (0, _typestyle.style)(rootStyle)
  }, _react.default.createElement("h3", null, "\uD83D\uDCAB Mojistack \uD83D\uDCAB"), _react.default.createElement("p", null, "Click on the table to change it. Copy and paste where you like!"), _react.default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, _react.default.createElement(_PositionedDisplay.default, {
    stack: stack,
    width: 300,
    onCharacterPaint: handleCharacterPaint
  }), _react.default.createElement("div", null, _react.default.createElement("button", {
    onClick: function onClick() {
      var text = (0, _charUtil.stackToText)(stack);
      console.log('copying', text);
      (0, _copyToClipboard.default)(text, {
        format: "text/plain",
        onCopy: function onCopy() {
          setCopied(true);
        }
      });
    }
  }, "Copy to clipboard", copied && _react.default.createElement("span", null, "- done!")))), _react.default.createElement("h3", null, "Brush"), _react.default.createElement("input", {
    type: "text",
    className: inputStyle,
    defaultValue: brush,
    size: 2,
    maxLength: 2,
    width: "1em",
    style: {
      cursor: 'pointer'
    },
    onChange: function onChange(ev) {
      var value = ev.target.value.trim();
      console.log('entered', value);
      setBrush(value);
    },
    onFocus: function onFocus(event) {
      event.target.select();
    }
  }), _react.default.createElement(_reactUtil.If, {
    when: !isMobile
  }, _react.default.createElement("div", null, "(MacOS tip: Hit Command-Ctrl-Space for emoji keyboard)")));
}
},{"react":"n8MK","immer":"SSrD","csstips":"pm94","emoji-mart/css/emoji-mart.css":"o6es","copy-to-clipboard":"xbqV","grapheme-splitter":"dWiE","typestyle":"oehJ","../util/reactUtil":"z0em","../util/charUtil":"lqYF","../util/browserUtil":"frOy","./PositionedDisplay":"vM5Z"}],"R3v4":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var React = _interopRequireWildcard(require("react"));

var _Editor = _interopRequireDefault(require("./Editor/Editor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function App() {
  return React.createElement(_Editor.default, null);
}
},{"react":"n8MK","./Editor/Editor":"qv5k"}],"wGC4":[function(require,module,exports) {
"use strict";

var React = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var rootElement = document.getElementById('root');
(0, _reactDom.render)(React.createElement(_App.default, null), rootElement);
},{"react":"n8MK","react-dom":"NKHc","./App":"R3v4"}]},{},["wGC4"], null)
//# sourceMappingURL=src.050dc56f.js.map
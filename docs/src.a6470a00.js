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

},{}],"lqYF":[function(require,module,exports) {
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
},{}],"aOan":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Display = Display;

var _react = _interopRequireDefault(require("react"));

var csstips = _interopRequireWildcard(require("csstips"));

var _typestyle = require("typestyle");

var _charUtil = require("../util/charUtil");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var staticStyle = __assign({
  fontFamily: 'monospace',
  fontSize: '48px'
}, csstips.content);

function Display(props) {
  var lineElements = props.stack.lines.map(function (line, lineIndex) {
    return _react.default.createElement("div", {
      key: "l-" + lineIndex,
      className: (0, _typestyle.style)(staticStyle)
    }, line.characters.map(function (character, charIndex) {
      return _react.default.createElement("span", {
        key: "c-" + lineIndex + "-" + charIndex,
        onClick: props.onCharacterClick && function () {
          return props.onCharacterClick({
            value: character,
            position: [lineIndex, charIndex]
          });
        }
      }, (0, _charUtil.toFullWidth)(character));
    }));
  });
  return _react.default.createElement("div", null, lineElements);
}
},{"react":"n8MK","csstips":"pm94","typestyle":"oehJ","../util/charUtil":"lqYF"}],"Wjva":[function(require,module,exports) {
module.exports = {"compressed":true,"categories":[{"id":"people","name":"Smileys & People","emojis":["grinning","smiley","smile","grin","laughing","sweat_smile","rolling_on_the_floor_laughing","joy","slightly_smiling_face","upside_down_face","wink","blush","innocent","smiling_face_with_3_hearts","heart_eyes","star-struck","kissing_heart","kissing","relaxed","kissing_closed_eyes","kissing_smiling_eyes","yum","stuck_out_tongue","stuck_out_tongue_winking_eye","zany_face","stuck_out_tongue_closed_eyes","money_mouth_face","hugging_face","face_with_hand_over_mouth","shushing_face","thinking_face","zipper_mouth_face","face_with_raised_eyebrow","neutral_face","expressionless","no_mouth","smirk","unamused","face_with_rolling_eyes","grimacing","lying_face","relieved","pensive","sleepy","drooling_face","sleeping","mask","face_with_thermometer","face_with_head_bandage","nauseated_face","face_vomiting","sneezing_face","hot_face","cold_face","woozy_face","dizzy_face","exploding_head","face_with_cowboy_hat","partying_face","sunglasses","nerd_face","face_with_monocle","confused","worried","slightly_frowning_face","white_frowning_face","open_mouth","hushed","astonished","flushed","pleading_face","frowning","anguished","fearful","cold_sweat","disappointed_relieved","cry","sob","scream","confounded","persevere","disappointed","sweat","weary","tired_face","yawning_face","triumph","rage","angry","face_with_symbols_on_mouth","smiling_imp","imp","skull","skull_and_crossbones","hankey","clown_face","japanese_ogre","japanese_goblin","ghost","alien","space_invader","robot_face","smiley_cat","smile_cat","joy_cat","heart_eyes_cat","smirk_cat","kissing_cat","scream_cat","crying_cat_face","pouting_cat","see_no_evil","hear_no_evil","speak_no_evil","wave","raised_back_of_hand","raised_hand_with_fingers_splayed","hand","spock-hand","ok_hand","pinching_hand","v","crossed_fingers","i_love_you_hand_sign","the_horns","call_me_hand","point_left","point_right","point_up_2","middle_finger","point_down","point_up","+1","-1","fist","facepunch","left-facing_fist","right-facing_fist","clap","raised_hands","open_hands","palms_up_together","handshake","pray","writing_hand","nail_care","selfie","muscle","mechanical_arm","mechanical_leg","leg","foot","ear","ear_with_hearing_aid","nose","brain","tooth","bone","eyes","eye","tongue","lips","baby","child","boy","girl","adult","person_with_blond_hair","man","bearded_person","red_haired_man","curly_haired_man","white_haired_man","bald_man","woman","red_haired_woman","red_haired_person","curly_haired_woman","curly_haired_person","white_haired_woman","white_haired_person","bald_woman","bald_person","blond-haired-woman","blond-haired-man","older_adult","older_man","older_woman","person_frowning","man-frowning","woman-frowning","person_with_pouting_face","man-pouting","woman-pouting","no_good","man-gesturing-no","woman-gesturing-no","ok_woman","man-gesturing-ok","woman-gesturing-ok","information_desk_person","man-tipping-hand","woman-tipping-hand","raising_hand","man-raising-hand","woman-raising-hand","deaf_person","deaf_man","deaf_woman","bow","man-bowing","woman-bowing","face_palm","man-facepalming","woman-facepalming","shrug","man-shrugging","woman-shrugging","health_worker","male-doctor","female-doctor","student","male-student","female-student","teacher","male-teacher","female-teacher","judge","male-judge","female-judge","farmer","male-farmer","female-farmer","cook","male-cook","female-cook","mechanic","male-mechanic","female-mechanic","factory_worker","male-factory-worker","female-factory-worker","office_worker","male-office-worker","female-office-worker","scientist","male-scientist","female-scientist","technologist","male-technologist","female-technologist","singer","male-singer","female-singer","artist","male-artist","female-artist","pilot","male-pilot","female-pilot","astronaut","male-astronaut","female-astronaut","firefighter","male-firefighter","female-firefighter","cop","male-police-officer","female-police-officer","sleuth_or_spy","male-detective","female-detective","guardsman","male-guard","female-guard","construction_worker","male-construction-worker","female-construction-worker","prince","princess","man_with_turban","man-wearing-turban","woman-wearing-turban","man_with_gua_pi_mao","person_with_headscarf","man_in_tuxedo","bride_with_veil","pregnant_woman","breast-feeding","angel","santa","mrs_claus","superhero","male_superhero","female_superhero","supervillain","male_supervillain","female_supervillain","mage","male_mage","female_mage","fairy","male_fairy","female_fairy","vampire","male_vampire","female_vampire","merperson","merman","mermaid","elf","male_elf","female_elf","genie","male_genie","female_genie","zombie","male_zombie","female_zombie","massage","man-getting-massage","woman-getting-massage","haircut","man-getting-haircut","woman-getting-haircut","walking","man-walking","woman-walking","standing_person","man_standing","woman_standing","kneeling_person","man_kneeling","woman_kneeling","person_with_probing_cane","man_with_probing_cane","woman_with_probing_cane","person_in_motorized_wheelchair","man_in_motorized_wheelchair","woman_in_motorized_wheelchair","person_in_manual_wheelchair","man_in_manual_wheelchair","woman_in_manual_wheelchair","runner","man-running","woman-running","dancer","man_dancing","man_in_business_suit_levitating","dancers","man-with-bunny-ears-partying","woman-with-bunny-ears-partying","person_in_steamy_room","man_in_steamy_room","woman_in_steamy_room","person_climbing","man_climbing","woman_climbing","fencer","horse_racing","skier","snowboarder","golfer","man-golfing","woman-golfing","surfer","man-surfing","woman-surfing","rowboat","man-rowing-boat","woman-rowing-boat","swimmer","man-swimming","woman-swimming","person_with_ball","man-bouncing-ball","woman-bouncing-ball","weight_lifter","man-lifting-weights","woman-lifting-weights","bicyclist","man-biking","woman-biking","mountain_bicyclist","man-mountain-biking","woman-mountain-biking","person_doing_cartwheel","man-cartwheeling","woman-cartwheeling","wrestlers","man-wrestling","woman-wrestling","water_polo","man-playing-water-polo","woman-playing-water-polo","handball","man-playing-handball","woman-playing-handball","juggling","man-juggling","woman-juggling","person_in_lotus_position","man_in_lotus_position","woman_in_lotus_position","bath","sleeping_accommodation","people_holding_hands","two_women_holding_hands","couple","two_men_holding_hands","couplekiss","woman-kiss-man","man-kiss-man","woman-kiss-woman","couple_with_heart","woman-heart-man","man-heart-man","woman-heart-woman","family","man-woman-boy","man-woman-girl","man-woman-girl-boy","man-woman-boy-boy","man-woman-girl-girl","man-man-boy","man-man-girl","man-man-girl-boy","man-man-boy-boy","man-man-girl-girl","woman-woman-boy","woman-woman-girl","woman-woman-girl-boy","woman-woman-boy-boy","woman-woman-girl-girl","man-boy","man-boy-boy","man-girl","man-girl-boy","man-girl-girl","woman-boy","woman-boy-boy","woman-girl","woman-girl-boy","woman-girl-girl","speaking_head_in_silhouette","bust_in_silhouette","busts_in_silhouette","footprints","kiss","love_letter","cupid","gift_heart","sparkling_heart","heartpulse","heartbeat","revolving_hearts","two_hearts","heart_decoration","heavy_heart_exclamation_mark_ornament","broken_heart","heart","orange_heart","yellow_heart","green_heart","blue_heart","purple_heart","brown_heart","black_heart","white_heart","100","anger","boom","dizzy","sweat_drops","dash","hole","bomb","speech_balloon","eye-in-speech-bubble","left_speech_bubble","right_anger_bubble","thought_balloon","zzz"]},{"id":"nature","name":"Animals & Nature","emojis":["monkey_face","monkey","gorilla","orangutan","dog","dog2","guide_dog","service_dog","poodle","wolf","fox_face","raccoon","cat","cat2","lion_face","tiger","tiger2","leopard","horse","racehorse","unicorn_face","zebra_face","deer","cow","ox","water_buffalo","cow2","pig","pig2","boar","pig_nose","ram","sheep","goat","dromedary_camel","camel","llama","giraffe_face","elephant","rhinoceros","hippopotamus","mouse","mouse2","rat","hamster","rabbit","rabbit2","chipmunk","hedgehog","bat","bear","koala","panda_face","sloth","otter","skunk","kangaroo","badger","feet","turkey","chicken","rooster","hatching_chick","baby_chick","hatched_chick","bird","penguin","dove_of_peace","eagle","duck","swan","owl","flamingo","peacock","parrot","frog","crocodile","turtle","lizard","snake","dragon_face","dragon","sauropod","t-rex","whale","whale2","dolphin","fish","tropical_fish","blowfish","shark","octopus","shell","snail","butterfly","bug","ant","bee","beetle","cricket","spider","spider_web","scorpion","mosquito","microbe","bouquet","cherry_blossom","white_flower","rosette","rose","wilted_flower","hibiscus","sunflower","blossom","tulip","seedling","evergreen_tree","deciduous_tree","palm_tree","cactus","ear_of_rice","herb","shamrock","four_leaf_clover","maple_leaf","fallen_leaf","leaves"]},{"id":"foods","name":"Food & Drink","emojis":["grapes","melon","watermelon","tangerine","lemon","banana","pineapple","mango","apple","green_apple","pear","peach","cherries","strawberry","kiwifruit","tomato","coconut","avocado","eggplant","potato","carrot","corn","hot_pepper","cucumber","leafy_green","broccoli","garlic","onion","mushroom","peanuts","chestnut","bread","croissant","baguette_bread","pretzel","bagel","pancakes","waffle","cheese_wedge","meat_on_bone","poultry_leg","cut_of_meat","bacon","hamburger","fries","pizza","hotdog","sandwich","taco","burrito","stuffed_flatbread","falafel","egg","fried_egg","shallow_pan_of_food","stew","bowl_with_spoon","green_salad","popcorn","butter","salt","canned_food","bento","rice_cracker","rice_ball","rice","curry","ramen","spaghetti","sweet_potato","oden","sushi","fried_shrimp","fish_cake","moon_cake","dango","dumpling","fortune_cookie","takeout_box","crab","lobster","shrimp","squid","oyster","icecream","shaved_ice","ice_cream","doughnut","cookie","birthday","cake","cupcake","pie","chocolate_bar","candy","lollipop","custard","honey_pot","baby_bottle","glass_of_milk","coffee","tea","sake","champagne","wine_glass","cocktail","tropical_drink","beer","beers","clinking_glasses","tumbler_glass","cup_with_straw","beverage_box","mate_drink","ice_cube","chopsticks","knife_fork_plate","fork_and_knife","spoon","hocho","amphora"]},{"id":"activity","name":"Activities","emojis":["jack_o_lantern","christmas_tree","fireworks","sparkler","firecracker","sparkles","balloon","tada","confetti_ball","tanabata_tree","bamboo","dolls","flags","wind_chime","rice_scene","red_envelope","ribbon","gift","reminder_ribbon","admission_tickets","ticket","medal","trophy","sports_medal","first_place_medal","second_place_medal","third_place_medal","soccer","baseball","softball","basketball","volleyball","football","rugby_football","tennis","flying_disc","bowling","cricket_bat_and_ball","field_hockey_stick_and_ball","ice_hockey_stick_and_puck","lacrosse","table_tennis_paddle_and_ball","badminton_racquet_and_shuttlecock","boxing_glove","martial_arts_uniform","goal_net","golf","ice_skate","fishing_pole_and_fish","diving_mask","running_shirt_with_sash","ski","sled","curling_stone","dart","yo-yo","kite","8ball","crystal_ball","nazar_amulet","video_game","joystick","slot_machine","game_die","jigsaw","teddy_bear","spades","hearts","diamonds","clubs","chess_pawn","black_joker","mahjong","flower_playing_cards","performing_arts","frame_with_picture","art","thread","yarn"]},{"id":"places","name":"Travel & Places","emojis":["earth_africa","earth_americas","earth_asia","globe_with_meridians","world_map","japan","compass","snow_capped_mountain","mountain","volcano","mount_fuji","camping","beach_with_umbrella","desert","desert_island","national_park","stadium","classical_building","building_construction","bricks","house_buildings","derelict_house_building","house","house_with_garden","office","post_office","european_post_office","hospital","bank","hotel","love_hotel","convenience_store","school","department_store","factory","japanese_castle","european_castle","wedding","tokyo_tower","statue_of_liberty","church","mosque","hindu_temple","synagogue","shinto_shrine","kaaba","fountain","tent","foggy","night_with_stars","cityscape","sunrise_over_mountains","sunrise","city_sunset","city_sunrise","bridge_at_night","hotsprings","carousel_horse","ferris_wheel","roller_coaster","barber","circus_tent","steam_locomotive","railway_car","bullettrain_side","bullettrain_front","train2","metro","light_rail","station","tram","monorail","mountain_railway","train","bus","oncoming_bus","trolleybus","minibus","ambulance","fire_engine","police_car","oncoming_police_car","taxi","oncoming_taxi","car","oncoming_automobile","blue_car","truck","articulated_lorry","tractor","racing_car","racing_motorcycle","motor_scooter","manual_wheelchair","motorized_wheelchair","auto_rickshaw","bike","scooter","skateboard","busstop","motorway","railway_track","oil_drum","fuelpump","rotating_light","traffic_light","vertical_traffic_light","octagonal_sign","construction","anchor","boat","canoe","speedboat","passenger_ship","ferry","motor_boat","ship","airplane","small_airplane","airplane_departure","airplane_arriving","parachute","seat","helicopter","suspension_railway","mountain_cableway","aerial_tramway","satellite","rocket","flying_saucer","bellhop_bell","luggage","hourglass","hourglass_flowing_sand","watch","alarm_clock","stopwatch","timer_clock","mantelpiece_clock","clock12","clock1230","clock1","clock130","clock2","clock230","clock3","clock330","clock4","clock430","clock5","clock530","clock6","clock630","clock7","clock730","clock8","clock830","clock9","clock930","clock10","clock1030","clock11","clock1130","new_moon","waxing_crescent_moon","first_quarter_moon","moon","full_moon","waning_gibbous_moon","last_quarter_moon","waning_crescent_moon","crescent_moon","new_moon_with_face","first_quarter_moon_with_face","last_quarter_moon_with_face","thermometer","sunny","full_moon_with_face","sun_with_face","ringed_planet","star","star2","stars","milky_way","cloud","partly_sunny","thunder_cloud_and_rain","mostly_sunny","barely_sunny","partly_sunny_rain","rain_cloud","snow_cloud","lightning","tornado","fog","wind_blowing_face","cyclone","rainbow","closed_umbrella","umbrella","umbrella_with_rain_drops","umbrella_on_ground","zap","snowflake","snowman","snowman_without_snow","comet","fire","droplet","ocean"]},{"id":"objects","name":"Objects","emojis":["eyeglasses","dark_sunglasses","goggles","lab_coat","safety_vest","necktie","shirt","jeans","scarf","gloves","coat","socks","dress","kimono","sari","one-piece_swimsuit","briefs","shorts","bikini","womans_clothes","purse","handbag","pouch","shopping_bags","school_satchel","mans_shoe","athletic_shoe","hiking_boot","womans_flat_shoe","high_heel","sandal","ballet_shoes","boot","crown","womans_hat","tophat","mortar_board","billed_cap","helmet_with_white_cross","prayer_beads","lipstick","ring","gem","mute","speaker","sound","loud_sound","loudspeaker","mega","postal_horn","bell","no_bell","musical_score","musical_note","notes","studio_microphone","level_slider","control_knobs","microphone","headphones","radio","saxophone","guitar","musical_keyboard","trumpet","violin","banjo","drum_with_drumsticks","iphone","calling","phone","telephone_receiver","pager","fax","battery","electric_plug","computer","desktop_computer","printer","keyboard","three_button_mouse","trackball","minidisc","floppy_disk","cd","dvd","abacus","movie_camera","film_frames","film_projector","clapper","tv","camera","camera_with_flash","video_camera","vhs","mag","mag_right","candle","bulb","flashlight","izakaya_lantern","diya_lamp","notebook_with_decorative_cover","closed_book","book","green_book","blue_book","orange_book","books","notebook","ledger","page_with_curl","scroll","page_facing_up","newspaper","rolled_up_newspaper","bookmark_tabs","bookmark","label","moneybag","yen","dollar","euro","pound","money_with_wings","credit_card","receipt","chart","currency_exchange","heavy_dollar_sign","email","e-mail","incoming_envelope","envelope_with_arrow","outbox_tray","inbox_tray","package","mailbox","mailbox_closed","mailbox_with_mail","mailbox_with_no_mail","postbox","ballot_box_with_ballot","pencil2","black_nib","lower_left_fountain_pen","lower_left_ballpoint_pen","lower_left_paintbrush","lower_left_crayon","memo","briefcase","file_folder","open_file_folder","card_index_dividers","date","calendar","spiral_note_pad","spiral_calendar_pad","card_index","chart_with_upwards_trend","chart_with_downwards_trend","bar_chart","clipboard","pushpin","round_pushpin","paperclip","linked_paperclips","straight_ruler","triangular_ruler","scissors","card_file_box","file_cabinet","wastebasket","lock","unlock","lock_with_ink_pen","closed_lock_with_key","key","old_key","hammer","axe","pick","hammer_and_pick","hammer_and_wrench","dagger_knife","crossed_swords","gun","bow_and_arrow","shield","wrench","nut_and_bolt","gear","compression","scales","probing_cane","link","chains","toolbox","magnet","alembic","test_tube","petri_dish","dna","microscope","telescope","satellite_antenna","syringe","drop_of_blood","pill","adhesive_bandage","stethoscope","door","bed","couch_and_lamp","chair","toilet","shower","bathtub","razor","lotion_bottle","safety_pin","broom","basket","roll_of_paper","soap","sponge","fire_extinguisher","shopping_trolley","smoking","coffin","funeral_urn","moyai"]},{"id":"symbols","name":"Symbols","emojis":["atm","put_litter_in_its_place","potable_water","wheelchair","mens","womens","restroom","baby_symbol","wc","passport_control","customs","baggage_claim","left_luggage","warning","children_crossing","no_entry","no_entry_sign","no_bicycles","no_smoking","do_not_litter","non-potable_water","no_pedestrians","no_mobile_phones","underage","radioactive_sign","biohazard_sign","arrow_up","arrow_upper_right","arrow_right","arrow_lower_right","arrow_down","arrow_lower_left","arrow_left","arrow_upper_left","arrow_up_down","left_right_arrow","leftwards_arrow_with_hook","arrow_right_hook","arrow_heading_up","arrow_heading_down","arrows_clockwise","arrows_counterclockwise","back","end","on","soon","top","place_of_worship","atom_symbol","om_symbol","star_of_david","wheel_of_dharma","yin_yang","latin_cross","orthodox_cross","star_and_crescent","peace_symbol","menorah_with_nine_branches","six_pointed_star","aries","taurus","gemini","cancer","leo","virgo","libra","scorpius","sagittarius","capricorn","aquarius","pisces","ophiuchus","twisted_rightwards_arrows","repeat","repeat_one","arrow_forward","fast_forward","black_right_pointing_double_triangle_with_vertical_bar","black_right_pointing_triangle_with_double_vertical_bar","arrow_backward","rewind","black_left_pointing_double_triangle_with_vertical_bar","arrow_up_small","arrow_double_up","arrow_down_small","arrow_double_down","double_vertical_bar","black_square_for_stop","black_circle_for_record","eject","cinema","low_brightness","high_brightness","signal_strength","vibration_mode","mobile_phone_off","female_sign","male_sign","medical_symbol","infinity","recycle","fleur_de_lis","trident","name_badge","beginner","o","white_check_mark","ballot_box_with_check","heavy_check_mark","heavy_multiplication_x","x","negative_squared_cross_mark","heavy_plus_sign","heavy_minus_sign","heavy_division_sign","curly_loop","loop","part_alternation_mark","eight_spoked_asterisk","eight_pointed_black_star","sparkle","bangbang","interrobang","question","grey_question","grey_exclamation","exclamation","wavy_dash","copyright","registered","tm","hash","keycap_star","zero","one","two","three","four","five","six","seven","eight","nine","keycap_ten","capital_abcd","abcd","1234","symbols","abc","a","ab","b","cl","cool","free","information_source","id","m","new","ng","o2","ok","parking","sos","up","vs","koko","sa","u6708","u6709","u6307","ideograph_advantage","u5272","u7121","u7981","accept","u7533","u5408","u7a7a","congratulations","secret","u55b6","u6e80","red_circle","large_orange_circle","large_yellow_circle","large_green_circle","large_blue_circle","large_purple_circle","large_brown_circle","black_circle","white_circle","large_red_square","large_orange_square","large_yellow_square","large_green_square","large_blue_square","large_purple_square","large_brown_square","black_large_square","white_large_square","black_medium_square","white_medium_square","black_medium_small_square","white_medium_small_square","black_small_square","white_small_square","large_orange_diamond","large_blue_diamond","small_orange_diamond","small_blue_diamond","small_red_triangle","small_red_triangle_down","diamond_shape_with_a_dot_inside","radio_button","white_square_button","black_square_button"]},{"id":"flags","name":"Flags","emojis":["checkered_flag","cn","crossed_flags","de","es","flag-ac","flag-ad","flag-ae","flag-af","flag-ag","flag-ai","flag-al","flag-am","flag-ao","flag-aq","flag-ar","flag-as","flag-at","flag-au","flag-aw","flag-ax","flag-az","flag-ba","flag-bb","flag-bd","flag-be","flag-bf","flag-bg","flag-bh","flag-bi","flag-bj","flag-bl","flag-bm","flag-bn","flag-bo","flag-bq","flag-br","flag-bs","flag-bt","flag-bv","flag-bw","flag-by","flag-bz","flag-ca","flag-cc","flag-cd","flag-cf","flag-cg","flag-ch","flag-ci","flag-ck","flag-cl","flag-cm","flag-co","flag-cp","flag-cr","flag-cu","flag-cv","flag-cw","flag-cx","flag-cy","flag-cz","flag-dg","flag-dj","flag-dk","flag-dm","flag-do","flag-dz","flag-ea","flag-ec","flag-ee","flag-eg","flag-eh","flag-england","flag-er","flag-et","flag-eu","flag-fi","flag-fj","flag-fk","flag-fm","flag-fo","flag-ga","flag-gd","flag-ge","flag-gf","flag-gg","flag-gh","flag-gi","flag-gl","flag-gm","flag-gn","flag-gp","flag-gq","flag-gr","flag-gs","flag-gt","flag-gu","flag-gw","flag-gy","flag-hk","flag-hm","flag-hn","flag-hr","flag-ht","flag-hu","flag-ic","flag-id","flag-ie","flag-il","flag-im","flag-in","flag-io","flag-iq","flag-ir","flag-is","flag-je","flag-jm","flag-jo","flag-ke","flag-kg","flag-kh","flag-ki","flag-km","flag-kn","flag-kp","flag-kw","flag-ky","flag-kz","flag-la","flag-lb","flag-lc","flag-li","flag-lk","flag-lr","flag-ls","flag-lt","flag-lu","flag-lv","flag-ly","flag-ma","flag-mc","flag-md","flag-me","flag-mf","flag-mg","flag-mh","flag-mk","flag-ml","flag-mm","flag-mn","flag-mo","flag-mp","flag-mq","flag-mr","flag-ms","flag-mt","flag-mu","flag-mv","flag-mw","flag-mx","flag-my","flag-mz","flag-na","flag-nc","flag-ne","flag-nf","flag-ng","flag-ni","flag-nl","flag-no","flag-np","flag-nr","flag-nu","flag-nz","flag-om","flag-pa","flag-pe","flag-pf","flag-pg","flag-ph","flag-pk","flag-pl","flag-pm","flag-pn","flag-pr","flag-ps","flag-pt","flag-pw","flag-py","flag-qa","flag-re","flag-ro","flag-rs","flag-rw","flag-sa","flag-sb","flag-sc","flag-scotland","flag-sd","flag-se","flag-sg","flag-sh","flag-si","flag-sj","flag-sk","flag-sl","flag-sm","flag-sn","flag-so","flag-sr","flag-ss","flag-st","flag-sv","flag-sx","flag-sy","flag-sz","flag-ta","flag-tc","flag-td","flag-tf","flag-tg","flag-th","flag-tj","flag-tk","flag-tl","flag-tm","flag-tn","flag-to","flag-tr","flag-tt","flag-tv","flag-tw","flag-tz","flag-ua","flag-ug","flag-um","flag-uy","flag-uz","flag-va","flag-vc","flag-ve","flag-vg","flag-vi","flag-vn","flag-vu","flag-wales","flag-wf","flag-ws","flag-xk","flag-ye","flag-yt","flag-za","flag-zm","flag-zw","fr","gb","it","jp","kr","pirate_flag","rainbow-flag","ru","triangular_flag_on_post","us","waving_black_flag","waving_white_flag"]}],"emojis":{"100":{"a":"Hundred Points Symbol","b":"1F4AF","d":true,"e":true,"f":true,"h":true,"j":["score","perfect","numbers","century","exam","quiz","test","pass","hundred"],"k":[26,5],"o":2},"1234":{"a":"Input Symbol for Numbers","b":"1F522","d":true,"e":true,"f":true,"h":true,"j":["numbers","blue-square"],"k":[28,5],"o":2},"grinning":{"a":"Grinning Face","b":"1F600","d":true,"e":true,"f":true,"h":true,"j":["face","smile","happy","joy",":D","grin"],"k":[30,35],"m":":D","o":2},"monkey_face":{"a":"Monkey Face","b":"1F435","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","circus"],"k":[12,25],"l":[":o)"],"o":2},"grapes":{"a":"Grapes","b":"1F347","d":true,"e":true,"f":true,"h":true,"j":["fruit","food","wine"],"k":[6,31],"o":2},"eyeglasses":{"a":"Eyeglasses","b":"1F453","d":true,"e":true,"f":true,"h":true,"j":["fashion","accessories","eyesight","nerdy","dork","geek"],"k":[14,7],"o":2},"checkered_flag":{"a":"Chequered Flag","b":"1F3C1","d":true,"e":true,"f":true,"h":true,"j":["contest","finishline","race","gokart"],"k":[8,39],"o":2},"jack_o_lantern":{"a":"Jack-O-Lantern","b":"1F383","d":true,"e":true,"f":true,"h":true,"j":["halloween","light","pumpkin","creepy","fall"],"k":[7,34],"o":2},"wave":{"skin_variations":{"1F3FB":{"unified":"1F44B-1F3FB","non_qualified":null,"image":"1f44b-1f3fb.png","sheet_x":13,"sheet_y":27,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F44B-1F3FC","non_qualified":null,"image":"1f44b-1f3fc.png","sheet_x":13,"sheet_y":28,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F44B-1F3FD","non_qualified":null,"image":"1f44b-1f3fd.png","sheet_x":13,"sheet_y":29,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F44B-1F3FE","non_qualified":null,"image":"1f44b-1f3fe.png","sheet_x":13,"sheet_y":30,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F44B-1F3FF","non_qualified":null,"image":"1f44b-1f3ff.png","sheet_x":13,"sheet_y":31,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Waving Hand Sign","b":"1F44B","d":true,"e":true,"f":true,"h":true,"j":["hands","gesture","goodbye","solong","farewell","hello","hi","palm"],"k":[13,26],"o":2},"earth_africa":{"a":"Earth Globe Europe-Africa","b":"1F30D","d":true,"e":true,"f":true,"h":true,"j":["globe","world","international"],"k":[5,32],"o":2},"atm":{"a":"Automated Teller Machine","b":"1F3E7","d":true,"e":true,"f":true,"h":true,"j":["money","sales","cash","blue-square","payment","bank"],"k":[11,1],"o":2},"melon":{"a":"Melon","b":"1F348","d":true,"e":true,"f":true,"h":true,"j":["fruit","nature","food"],"k":[6,32],"o":2},"triangular_flag_on_post":{"a":"Triangular Flag on Post","b":"1F6A9","d":true,"e":true,"f":true,"h":true,"j":["mark","milestone","place"],"k":[35,0],"o":2},"put_litter_in_its_place":{"a":"Put Litter in Its Place Symbol","b":"1F6AE","d":true,"e":true,"f":true,"h":true,"j":["blue-square","sign","human","info"],"k":[35,5],"o":2},"christmas_tree":{"a":"Christmas Tree","b":"1F384","d":true,"e":true,"f":true,"h":true,"j":["festival","vacation","december","xmas","celebration"],"k":[7,35],"o":2},"monkey":{"a":"Monkey","b":"1F412","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","banana","circus"],"k":[11,46],"o":2},"earth_americas":{"a":"Earth Globe Americas","b":"1F30E","d":true,"e":true,"f":true,"h":true,"j":["globe","world","USA","international"],"k":[5,33],"o":2},"dark_sunglasses":{"a":"Dark Sunglasses","b":"1F576-FE0F","c":"1F576","d":true,"e":true,"f":true,"h":true,"j":["face","cool","accessories"],"k":[29,33],"o":2},"raised_back_of_hand":{"skin_variations":{"1F3FB":{"unified":"1F91A-1F3FB","non_qualified":null,"image":"1f91a-1f3fb.png","sheet_x":37,"sheet_y":44,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F91A-1F3FC","non_qualified":null,"image":"1f91a-1f3fc.png","sheet_x":37,"sheet_y":45,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F91A-1F3FD","non_qualified":null,"image":"1f91a-1f3fd.png","sheet_x":37,"sheet_y":46,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F91A-1F3FE","non_qualified":null,"image":"1f91a-1f3fe.png","sheet_x":37,"sheet_y":47,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F91A-1F3FF","non_qualified":null,"image":"1f91a-1f3ff.png","sheet_x":37,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Raised Back of Hand","b":"1F91A","d":true,"e":true,"f":true,"h":true,"j":["fingers","raised","backhand"],"k":[37,43],"o":4},"smiley":{"a":"Smiling Face with Open Mouth","b":"1F603","d":true,"e":true,"f":true,"h":true,"j":["face","happy","joy","haha",":D",":)","smile","funny"],"k":[30,38],"l":["=)","=-)"],"m":":)","o":2},"earth_asia":{"a":"Earth Globe Asia-Australia","b":"1F30F","d":true,"e":true,"f":true,"h":true,"j":["globe","world","east","international"],"k":[5,34],"o":2},"crossed_flags":{"a":"Crossed Flags","b":"1F38C","d":true,"e":true,"f":true,"h":true,"j":["japanese","nation","country","border"],"k":[7,48],"o":2},"watermelon":{"a":"Watermelon","b":"1F349","d":true,"e":true,"f":true,"h":true,"j":["fruit","food","picnic","summer"],"k":[6,33],"o":2},"goggles":{"a":"Goggles","b":"1F97D","d":true,"e":true,"f":true,"h":true,"k":[42,15],"o":11},"raised_hand_with_fingers_splayed":{"skin_variations":{"1F3FB":{"unified":"1F590-1F3FB","non_qualified":null,"image":"1f590-1f3fb.png","sheet_x":29,"sheet_y":49,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F590-1F3FC","non_qualified":null,"image":"1f590-1f3fc.png","sheet_x":29,"sheet_y":50,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F590-1F3FD","non_qualified":null,"image":"1f590-1f3fd.png","sheet_x":29,"sheet_y":51,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F590-1F3FE","non_qualified":null,"image":"1f590-1f3fe.png","sheet_x":29,"sheet_y":52,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F590-1F3FF","non_qualified":null,"image":"1f590-1f3ff.png","sheet_x":29,"sheet_y":53,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Raised Hand with Fingers Splayed","b":"1F590-FE0F","c":"1F590","d":true,"e":true,"f":true,"h":true,"j":["hand","fingers","palm"],"k":[29,48],"o":2},"smile":{"a":"Smiling Face with Open Mouth and Smiling Eyes","b":"1F604","d":true,"e":true,"f":true,"h":true,"j":["face","happy","joy","funny","haha","laugh","like",":D",":)"],"k":[30,39],"l":["C:","c:",":D",":-D"],"m":":)","o":2},"potable_water":{"a":"Potable Water Symbol","b":"1F6B0","d":true,"e":true,"f":true,"h":true,"j":["blue-square","liquid","restroom","cleaning","faucet"],"k":[35,7],"o":2},"fireworks":{"a":"Fireworks","b":"1F386","d":true,"e":true,"f":true,"h":true,"j":["photo","festival","carnival","congratulations"],"k":[7,42],"o":2},"gorilla":{"a":"Gorilla","b":"1F98D","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","circus"],"k":[42,31],"o":4},"lab_coat":{"a":"Lab Coat","b":"1F97C","d":true,"e":true,"f":true,"h":true,"k":[42,14],"o":11},"tangerine":{"a":"Tangerine","b":"1F34A","d":true,"e":true,"f":true,"h":true,"j":["food","fruit","nature","orange"],"k":[6,34],"o":2},"wheelchair":{"a":"Wheelchair Symbol","b":"267F","d":true,"e":true,"f":true,"h":true,"j":["blue-square","disabled","a11y","accessibility"],"k":[53,40],"o":2},"waving_black_flag":{"a":"Waving Black Flag","b":"1F3F4","d":true,"e":true,"f":true,"h":true,"k":[11,17],"o":2},"orangutan":{"a":"Orangutan","b":"1F9A7","d":true,"e":true,"f":true,"h":true,"k":[42,55],"o":12},"sparkler":{"a":"Firework Sparkler","b":"1F387","d":true,"e":true,"f":true,"h":true,"j":["stars","night","shine"],"k":[7,43],"o":2},"globe_with_meridians":{"a":"Globe with Meridians","b":"1F310","d":true,"e":true,"f":true,"h":true,"j":["earth","international","world","internet","interweb","i18n"],"k":[5,35],"o":2},"grin":{"a":"Grinning Face with Smiling Eyes","b":"1F601","d":true,"e":true,"f":true,"h":true,"j":["face","happy","smile","joy","kawaii"],"k":[30,36],"o":2},"hand":{"skin_variations":{"1F3FB":{"unified":"270B-1F3FB","non_qualified":null,"image":"270b-1f3fb.png","sheet_x":54,"sheet_y":50,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"270B-1F3FC","non_qualified":null,"image":"270b-1f3fc.png","sheet_x":54,"sheet_y":51,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"270B-1F3FD","non_qualified":null,"image":"270b-1f3fd.png","sheet_x":54,"sheet_y":52,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"270B-1F3FE","non_qualified":null,"image":"270b-1f3fe.png","sheet_x":54,"sheet_y":53,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"270B-1F3FF","non_qualified":null,"image":"270b-1f3ff.png","sheet_x":54,"sheet_y":54,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Raised Hand","b":"270B","d":true,"e":true,"f":true,"h":true,"k":[54,49],"n":["raised_hand"],"o":2},"firecracker":{"a":"Firecracker","b":"1F9E8","d":true,"e":true,"f":true,"h":true,"k":[51,27],"o":11},"lemon":{"a":"Lemon","b":"1F34B","d":true,"e":true,"f":true,"h":true,"j":["fruit","nature"],"k":[6,35],"o":2},"dog":{"a":"Dog Face","b":"1F436","d":true,"e":true,"f":true,"h":true,"j":["animal","friend","nature","woof","puppy","pet","faithful"],"k":[12,26],"o":2},"mens":{"a":"Mens Symbol","b":"1F6B9","d":true,"e":true,"f":true,"h":true,"j":["toilet","restroom","wc","blue-square","gender","male"],"k":[36,10],"o":2},"spock-hand":{"skin_variations":{"1F3FB":{"unified":"1F596-1F3FB","non_qualified":null,"image":"1f596-1f3fb.png","sheet_x":30,"sheet_y":4,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F596-1F3FC","non_qualified":null,"image":"1f596-1f3fc.png","sheet_x":30,"sheet_y":5,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F596-1F3FD","non_qualified":null,"image":"1f596-1f3fd.png","sheet_x":30,"sheet_y":6,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F596-1F3FE","non_qualified":null,"image":"1f596-1f3fe.png","sheet_x":30,"sheet_y":7,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F596-1F3FF","non_qualified":null,"image":"1f596-1f3ff.png","sheet_x":30,"sheet_y":8,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Raised Hand with Part Between Middle and Ring Fingers","b":"1F596","d":true,"e":true,"f":true,"h":true,"k":[30,3],"o":2},"world_map":{"a":"World Map","b":"1F5FA-FE0F","c":"1F5FA","d":true,"e":true,"f":true,"h":true,"j":["location","direction"],"k":[30,29],"o":2},"laughing":{"a":"Smiling Face with Open Mouth and Tightly-Closed Eyes","b":"1F606","d":true,"e":true,"f":true,"h":true,"j":["happy","joy","lol","satisfied","haha","face","glad","XD","laugh"],"k":[30,41],"l":[":>",":->"],"n":["satisfied"],"o":2},"waving_white_flag":{"a":"Waving White Flag","b":"1F3F3-FE0F","c":"1F3F3","d":true,"e":true,"f":true,"h":true,"k":[11,12],"o":2},"safety_vest":{"a":"Safety Vest","b":"1F9BA","d":true,"e":true,"f":true,"h":true,"k":[43,54],"o":12},"sweat_smile":{"a":"Smiling Face with Open Mouth and Cold Sweat","b":"1F605","d":true,"e":true,"f":true,"h":true,"j":["face","hot","happy","laugh","sweat","smile","relief"],"k":[30,40],"o":2},"sparkles":{"a":"Sparkles","b":"2728","d":true,"e":true,"f":true,"h":true,"j":["stars","shine","shiny","cool","awesome","good","magic"],"k":[55,16],"o":2},"banana":{"a":"Banana","b":"1F34C","d":true,"e":true,"f":true,"h":true,"j":["fruit","food","monkey"],"k":[6,36],"o":2},"rainbow-flag":{"a":"Rainbow Flag","b":"1F3F3-FE0F-200D-1F308","c":"1F3F3-200D-1F308","d":true,"e":true,"f":true,"h":true,"k":[11,11],"o":4},"ok_hand":{"skin_variations":{"1F3FB":{"unified":"1F44C-1F3FB","non_qualified":null,"image":"1f44c-1f3fb.png","sheet_x":13,"sheet_y":33,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F44C-1F3FC","non_qualified":null,"image":"1f44c-1f3fc.png","sheet_x":13,"sheet_y":34,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F44C-1F3FD","non_qualified":null,"image":"1f44c-1f3fd.png","sheet_x":13,"sheet_y":35,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F44C-1F3FE","non_qualified":null,"image":"1f44c-1f3fe.png","sheet_x":13,"sheet_y":36,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F44C-1F3FF","non_qualified":null,"image":"1f44c-1f3ff.png","sheet_x":13,"sheet_y":37,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Ok Hand Sign","b":"1F44C","d":true,"e":true,"f":true,"h":true,"j":["fingers","limbs","perfect","ok","okay"],"k":[13,32],"o":2},"japan":{"a":"Silhouette of Japan","b":"1F5FE","d":true,"e":true,"f":true,"h":true,"j":["nation","country","japanese","asia"],"k":[30,33],"o":2},"dog2":{"a":"Dog","b":"1F415","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","friend","doge","pet","faithful"],"k":[11,50],"o":2},"womens":{"a":"Womens Symbol","b":"1F6BA","d":true,"e":true,"f":true,"h":true,"j":["purple-square","woman","female","toilet","loo","restroom","gender"],"k":[36,11],"o":2},"necktie":{"a":"Necktie","b":"1F454","d":true,"e":true,"f":true,"h":true,"j":["shirt","suitup","formal","fashion","cloth","business"],"k":[14,8],"o":2},"pirate_flag":{"a":"Pirate Flag","b":"1F3F4-200D-2620-FE0F","c":"1F3F4-200D-2620","d":true,"e":true,"f":true,"h":true,"k":[11,13],"o":11},"guide_dog":{"a":"Guide Dog","b":"1F9AE","d":true,"e":true,"f":true,"h":true,"k":[43,2],"o":12},"restroom":{"a":"Restroom","b":"1F6BB","d":true,"e":true,"f":true,"h":true,"j":["blue-square","toilet","refresh","wc","gender"],"k":[36,12],"o":2},"compass":{"a":"Compass","b":"1F9ED","d":true,"e":true,"f":true,"h":true,"k":[51,32],"o":11},"rolling_on_the_floor_laughing":{"a":"Rolling on the Floor Laughing","b":"1F923","d":true,"e":true,"f":true,"h":true,"k":[38,20],"o":4},"balloon":{"a":"Balloon","b":"1F388","d":true,"e":true,"f":true,"h":true,"j":["party","celebration","birthday","circus"],"k":[7,44],"o":2},"pinching_hand":{"skin_variations":{"1F3FB":{"unified":"1F90F-1F3FB","non_qualified":null,"image":"1f90f-1f3fb.png","sheet_x":37,"sheet_y":18,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F90F-1F3FC","non_qualified":null,"image":"1f90f-1f3fc.png","sheet_x":37,"sheet_y":19,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F90F-1F3FD","non_qualified":null,"image":"1f90f-1f3fd.png","sheet_x":37,"sheet_y":20,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F90F-1F3FE","non_qualified":null,"image":"1f90f-1f3fe.png","sheet_x":37,"sheet_y":21,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F90F-1F3FF","non_qualified":null,"image":"1f90f-1f3ff.png","sheet_x":37,"sheet_y":22,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Pinching Hand","b":"1F90F","d":true,"e":true,"f":true,"h":true,"k":[37,17],"o":12},"pineapple":{"a":"Pineapple","b":"1F34D","d":true,"e":true,"f":true,"h":true,"j":["fruit","nature","food"],"k":[6,37],"o":2},"shirt":{"a":"T-Shirt","b":"1F455","d":true,"e":true,"f":true,"h":true,"k":[14,9],"n":["tshirt"],"o":2},"service_dog":{"a":"Service Dog","b":"1F415-200D-1F9BA","d":true,"e":true,"f":true,"h":true,"k":[11,49],"o":12},"baby_symbol":{"a":"Baby Symbol","b":"1F6BC","d":true,"e":true,"f":true,"h":true,"j":["orange-square","child"],"k":[36,13],"o":2},"joy":{"a":"Face with Tears of Joy","b":"1F602","d":true,"e":true,"f":true,"h":true,"j":["face","cry","tears","weep","happy","happytears","haha"],"k":[30,37],"o":2},"tada":{"a":"Party Popper","b":"1F389","d":true,"e":true,"f":true,"h":true,"j":["party","congratulations","birthday","magic","circus","celebration"],"k":[7,45],"o":2},"mango":{"a":"Mango","b":"1F96D","d":true,"e":true,"f":true,"h":true,"k":[42,3],"o":11},"v":{"skin_variations":{"1F3FB":{"unified":"270C-1F3FB","non_qualified":null,"image":"270c-1f3fb.png","sheet_x":54,"sheet_y":56,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"270C-1F3FC","non_qualified":null,"image":"270c-1f3fc.png","sheet_x":55,"sheet_y":0,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"270C-1F3FD","non_qualified":null,"image":"270c-1f3fd.png","sheet_x":55,"sheet_y":1,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"270C-1F3FE","non_qualified":null,"image":"270c-1f3fe.png","sheet_x":55,"sheet_y":2,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"270C-1F3FF","non_qualified":null,"image":"270c-1f3ff.png","sheet_x":55,"sheet_y":3,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Victory Hand","b":"270C-FE0F","c":"270C","d":true,"e":true,"f":true,"h":true,"j":["fingers","ohyeah","hand","peace","victory","two"],"k":[54,55],"o":2},"snow_capped_mountain":{"a":"Snow Capped Mountain","b":"1F3D4-FE0F","c":"1F3D4","d":true,"e":true,"f":true,"h":true,"k":[10,39],"o":2},"flag-ac":{"a":"Ascension Island Flag","b":"1F1E6-1F1E8","d":true,"e":true,"f":true,"h":true,"k":[0,31],"o":2},"jeans":{"a":"Jeans","b":"1F456","d":true,"e":true,"f":true,"h":true,"j":["fashion","shopping"],"k":[14,10],"o":2},"poodle":{"a":"Poodle","b":"1F429","d":true,"e":true,"f":true,"h":true,"j":["dog","animal","101","nature","pet"],"k":[12,13],"o":2},"crossed_fingers":{"skin_variations":{"1F3FB":{"unified":"1F91E-1F3FB","non_qualified":null,"image":"1f91e-1f3fb.png","sheet_x":38,"sheet_y":6,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F91E-1F3FC","non_qualified":null,"image":"1f91e-1f3fc.png","sheet_x":38,"sheet_y":7,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F91E-1F3FD","non_qualified":null,"image":"1f91e-1f3fd.png","sheet_x":38,"sheet_y":8,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F91E-1F3FE","non_qualified":null,"image":"1f91e-1f3fe.png","sheet_x":38,"sheet_y":9,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F91E-1F3FF","non_qualified":null,"image":"1f91e-1f3ff.png","sheet_x":38,"sheet_y":10,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Hand with Index and Middle Fingers Crossed","b":"1F91E","d":true,"e":true,"f":true,"h":true,"j":["good","lucky"],"k":[38,5],"n":["hand_with_index_and_middle_fingers_crossed"],"o":4},"flag-ad":{"a":"Andorra Flag","b":"1F1E6-1F1E9","d":true,"e":true,"f":true,"h":true,"k":[0,32],"o":2},"slightly_smiling_face":{"a":"Slightly Smiling Face","b":"1F642","d":true,"e":true,"f":true,"h":true,"j":["face","smile"],"k":[31,44],"l":[":)","(:",":-)"],"o":2},"apple":{"a":"Red Apple","b":"1F34E","d":true,"e":true,"f":true,"h":true,"j":["fruit","mac","school"],"k":[6,38],"o":2},"wc":{"a":"Water Closet","b":"1F6BE","d":true,"e":true,"f":true,"h":true,"j":["toilet","restroom","blue-square"],"k":[36,15],"o":2},"scarf":{"a":"Scarf","b":"1F9E3","d":true,"e":true,"f":true,"h":true,"k":[51,22],"o":5},"mountain":{"a":"Mountain","b":"26F0-FE0F","c":"26F0","d":true,"e":true,"f":true,"h":true,"j":["photo","nature","environment"],"k":[54,11],"o":2},"confetti_ball":{"a":"Confetti Ball","b":"1F38A","d":true,"e":true,"f":true,"h":true,"j":["festival","party","birthday","circus"],"k":[7,46],"o":2},"i_love_you_hand_sign":{"skin_variations":{"1F3FB":{"unified":"1F91F-1F3FB","non_qualified":null,"image":"1f91f-1f3fb.png","sheet_x":38,"sheet_y":12,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F91F-1F3FC","non_qualified":null,"image":"1f91f-1f3fc.png","sheet_x":38,"sheet_y":13,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F91F-1F3FD","non_qualified":null,"image":"1f91f-1f3fd.png","sheet_x":38,"sheet_y":14,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F91F-1F3FE","non_qualified":null,"image":"1f91f-1f3fe.png","sheet_x":38,"sheet_y":15,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F91F-1F3FF","non_qualified":null,"image":"1f91f-1f3ff.png","sheet_x":38,"sheet_y":16,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"I Love You Hand Sign","b":"1F91F","d":true,"e":true,"f":true,"h":true,"k":[38,11],"o":5},"wolf":{"a":"Wolf Face","b":"1F43A","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","wild"],"k":[12,30],"o":2},"gloves":{"a":"Gloves","b":"1F9E4","d":true,"e":true,"f":true,"h":true,"k":[51,23],"o":5},"flag-ae":{"a":"United Arab Emirates Flag","b":"1F1E6-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[0,33],"o":2},"upside_down_face":{"a":"Upside-Down Face","b":"1F643","d":true,"e":true,"f":true,"h":true,"j":["face","flipped","silly","smile"],"k":[31,45],"o":2},"green_apple":{"a":"Green Apple","b":"1F34F","d":true,"e":true,"f":true,"h":true,"j":["fruit","nature"],"k":[6,39],"o":2},"passport_control":{"a":"Passport Control","b":"1F6C2","d":true,"e":true,"f":true,"h":true,"j":["custom","blue-square"],"k":[36,24],"o":2},"volcano":{"a":"Volcano","b":"1F30B","d":true,"e":true,"f":true,"h":true,"j":["photo","nature","disaster"],"k":[5,30],"o":2},"tanabata_tree":{"a":"Tanabata Tree","b":"1F38B","d":true,"e":true,"f":true,"h":true,"j":["plant","nature","branch","summer"],"k":[7,47],"o":2},"customs":{"a":"Customs","b":"1F6C3","d":true,"e":true,"f":true,"h":true,"j":["passport","border","blue-square"],"k":[36,25],"o":2},"coat":{"a":"Coat","b":"1F9E5","d":true,"e":true,"f":true,"h":true,"k":[51,24],"o":5},"wink":{"a":"Winking Face","b":"1F609","d":true,"e":true,"f":true,"h":true,"j":["face","happy","mischievous","secret",";)","smile","eye"],"k":[30,44],"l":[";)",";-)"],"m":";)","o":2},"bamboo":{"a":"Pine Decoration","b":"1F38D","d":true,"e":true,"f":true,"h":true,"j":["plant","nature","vegetable","panda","pine_decoration"],"k":[7,49],"o":2},"flag-af":{"a":"Afghanistan Flag","b":"1F1E6-1F1EB","d":true,"e":true,"f":true,"h":true,"k":[0,34],"o":2},"fox_face":{"a":"Fox Face","b":"1F98A","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","face"],"k":[42,28],"o":4},"pear":{"a":"Pear","b":"1F350","d":true,"e":true,"f":true,"h":true,"j":["fruit","nature","food"],"k":[6,40],"o":2},"mount_fuji":{"a":"Mount Fuji","b":"1F5FB","d":true,"e":true,"f":true,"h":true,"j":["photo","mountain","nature","japanese"],"k":[30,30],"o":2},"the_horns":{"skin_variations":{"1F3FB":{"unified":"1F918-1F3FB","non_qualified":null,"image":"1f918-1f3fb.png","sheet_x":37,"sheet_y":32,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F918-1F3FC","non_qualified":null,"image":"1f918-1f3fc.png","sheet_x":37,"sheet_y":33,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F918-1F3FD","non_qualified":null,"image":"1f918-1f3fd.png","sheet_x":37,"sheet_y":34,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F918-1F3FE","non_qualified":null,"image":"1f918-1f3fe.png","sheet_x":37,"sheet_y":35,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F918-1F3FF","non_qualified":null,"image":"1f918-1f3ff.png","sheet_x":37,"sheet_y":36,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Sign of the Horns","b":"1F918","d":true,"e":true,"f":true,"h":true,"k":[37,31],"n":["sign_of_the_horns"],"o":2},"call_me_hand":{"skin_variations":{"1F3FB":{"unified":"1F919-1F3FB","non_qualified":null,"image":"1f919-1f3fb.png","sheet_x":37,"sheet_y":38,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F919-1F3FC","non_qualified":null,"image":"1f919-1f3fc.png","sheet_x":37,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F919-1F3FD","non_qualified":null,"image":"1f919-1f3fd.png","sheet_x":37,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F919-1F3FE","non_qualified":null,"image":"1f919-1f3fe.png","sheet_x":37,"sheet_y":41,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F919-1F3FF","non_qualified":null,"image":"1f919-1f3ff.png","sheet_x":37,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Call Me Hand","b":"1F919","d":true,"e":true,"f":true,"h":true,"j":["hands","gesture"],"k":[37,37],"o":4},"flag-ag":{"a":"Antigua & Barbuda Flag","b":"1F1E6-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[0,35],"o":2},"raccoon":{"a":"Raccoon","b":"1F99D","d":true,"e":true,"f":true,"h":true,"k":[42,47],"o":11},"dolls":{"a":"Japanese Dolls","b":"1F38E","d":true,"e":true,"f":true,"h":true,"j":["japanese","toy","kimono"],"k":[7,50],"o":2},"blush":{"a":"Smiling Face with Smiling Eyes","b":"1F60A","d":true,"e":true,"f":true,"h":true,"j":["face","smile","happy","flushed","crush","embarrassed","shy","joy"],"k":[30,45],"m":":)","o":2},"peach":{"a":"Peach","b":"1F351","d":true,"e":true,"f":true,"h":true,"j":["fruit","nature","food"],"k":[6,41],"o":2},"baggage_claim":{"a":"Baggage Claim","b":"1F6C4","d":true,"e":true,"f":true,"h":true,"j":["blue-square","airport","transport"],"k":[36,26],"o":2},"socks":{"a":"Socks","b":"1F9E6","d":true,"e":true,"f":true,"h":true,"k":[51,25],"o":5},"camping":{"a":"Camping","b":"1F3D5-FE0F","c":"1F3D5","d":true,"e":true,"f":true,"h":true,"j":["photo","outdoors","tent"],"k":[10,40],"o":2},"dress":{"a":"Dress","b":"1F457","d":true,"e":true,"f":true,"h":true,"j":["clothes","fashion","shopping"],"k":[14,11],"o":2},"beach_with_umbrella":{"a":"Beach with Umbrella","b":"1F3D6-FE0F","c":"1F3D6","d":true,"e":true,"f":true,"h":true,"k":[10,41],"o":2},"cherries":{"a":"Cherries","b":"1F352","d":true,"e":true,"f":true,"h":true,"j":["food","fruit"],"k":[6,42],"o":2},"cat":{"a":"Cat Face","b":"1F431","d":true,"e":true,"f":true,"h":true,"j":["animal","meow","nature","pet","kitten"],"k":[12,21],"o":2},"point_left":{"skin_variations":{"1F3FB":{"unified":"1F448-1F3FB","non_qualified":null,"image":"1f448-1f3fb.png","sheet_x":13,"sheet_y":9,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F448-1F3FC","non_qualified":null,"image":"1f448-1f3fc.png","sheet_x":13,"sheet_y":10,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F448-1F3FD","non_qualified":null,"image":"1f448-1f3fd.png","sheet_x":13,"sheet_y":11,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F448-1F3FE","non_qualified":null,"image":"1f448-1f3fe.png","sheet_x":13,"sheet_y":12,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F448-1F3FF","non_qualified":null,"image":"1f448-1f3ff.png","sheet_x":13,"sheet_y":13,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"White Left Pointing Backhand Index","b":"1F448","d":true,"e":true,"f":true,"h":true,"j":["direction","fingers","hand","left"],"k":[13,8],"o":2},"left_luggage":{"a":"Left Luggage","b":"1F6C5","d":true,"e":true,"f":true,"h":true,"j":["blue-square","travel"],"k":[36,27],"o":2},"flag-ai":{"a":"Anguilla Flag","b":"1F1E6-1F1EE","d":true,"e":true,"f":true,"h":true,"k":[0,36],"o":2},"innocent":{"a":"Smiling Face with Halo","b":"1F607","d":true,"e":true,"f":true,"h":true,"j":["face","angel","heaven","halo"],"k":[30,42],"o":2},"flags":{"a":"Carp Streamer","b":"1F38F","d":true,"e":true,"f":true,"h":true,"j":["fish","japanese","koinobori","carp","banner"],"k":[7,51],"o":2},"warning":{"a":"Warning Sign","b":"26A0-FE0F","c":"26A0","d":true,"e":true,"f":true,"h":true,"j":["exclamation","wip","alert","error","problem","issue"],"k":[53,50],"o":2},"strawberry":{"a":"Strawberry","b":"1F353","d":true,"e":true,"f":true,"h":true,"j":["fruit","food","nature"],"k":[6,43],"o":2},"point_right":{"skin_variations":{"1F3FB":{"unified":"1F449-1F3FB","non_qualified":null,"image":"1f449-1f3fb.png","sheet_x":13,"sheet_y":15,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F449-1F3FC","non_qualified":null,"image":"1f449-1f3fc.png","sheet_x":13,"sheet_y":16,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F449-1F3FD","non_qualified":null,"image":"1f449-1f3fd.png","sheet_x":13,"sheet_y":17,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F449-1F3FE","non_qualified":null,"image":"1f449-1f3fe.png","sheet_x":13,"sheet_y":18,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F449-1F3FF","non_qualified":null,"image":"1f449-1f3ff.png","sheet_x":13,"sheet_y":19,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"White Right Pointing Backhand Index","b":"1F449","d":true,"e":true,"f":true,"h":true,"j":["fingers","hand","direction","right"],"k":[13,14],"o":2},"desert":{"a":"Desert","b":"1F3DC-FE0F","c":"1F3DC","d":true,"e":true,"f":true,"h":true,"j":["photo","warm","saharah"],"k":[10,47],"o":2},"kimono":{"a":"Kimono","b":"1F458","d":true,"e":true,"f":true,"h":true,"j":["dress","fashion","women","female","japanese"],"k":[14,12],"o":2},"flag-al":{"a":"Albania Flag","b":"1F1E6-1F1F1","d":true,"e":true,"f":true,"h":true,"k":[0,37],"o":2},"wind_chime":{"a":"Wind Chime","b":"1F390","d":true,"e":true,"f":true,"h":true,"j":["nature","ding","spring","bell"],"k":[7,52],"o":2},"smiling_face_with_3_hearts":{"a":"Smiling Face with Smiling Eyes and Three Hearts","b":"1F970","d":true,"e":true,"f":true,"h":true,"k":[42,6],"o":11},"cat2":{"a":"Cat","b":"1F408","d":true,"e":true,"f":true,"h":true,"j":["animal","meow","pet","cats"],"k":[11,36],"o":2},"rice_scene":{"a":"Moon Viewing Ceremony","b":"1F391","d":true,"e":true,"f":true,"h":true,"j":["photo","japan","asia","tsukimi"],"k":[7,53],"o":2},"heart_eyes":{"a":"Smiling Face with Heart-Shaped Eyes","b":"1F60D","d":true,"e":true,"f":true,"h":true,"j":["face","love","like","affection","valentines","infatuation","crush","heart"],"k":[30,48],"o":2},"sari":{"a":"Sari","b":"1F97B","d":true,"e":true,"f":true,"h":true,"k":[42,13],"o":12},"flag-am":{"a":"Armenia Flag","b":"1F1E6-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[0,38],"o":2},"lion_face":{"a":"Lion Face","b":"1F981","d":true,"e":true,"f":true,"h":true,"k":[42,19],"o":2},"desert_island":{"a":"Desert Island","b":"1F3DD-FE0F","c":"1F3DD","d":true,"e":true,"f":true,"h":true,"j":["photo","tropical","mojito"],"k":[10,48],"o":2},"point_up_2":{"skin_variations":{"1F3FB":{"unified":"1F446-1F3FB","non_qualified":null,"image":"1f446-1f3fb.png","sheet_x":12,"sheet_y":54,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F446-1F3FC","non_qualified":null,"image":"1f446-1f3fc.png","sheet_x":12,"sheet_y":55,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F446-1F3FD","non_qualified":null,"image":"1f446-1f3fd.png","sheet_x":12,"sheet_y":56,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F446-1F3FE","non_qualified":null,"image":"1f446-1f3fe.png","sheet_x":13,"sheet_y":0,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F446-1F3FF","non_qualified":null,"image":"1f446-1f3ff.png","sheet_x":13,"sheet_y":1,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"White Up Pointing Backhand Index","b":"1F446","d":true,"e":true,"f":true,"h":true,"j":["fingers","hand","direction","up"],"k":[12,53],"o":2},"kiwifruit":{"a":"Kiwifruit","b":"1F95D","d":true,"e":true,"f":true,"h":true,"k":[41,44],"o":4},"children_crossing":{"a":"Children Crossing","b":"1F6B8","d":true,"e":true,"f":true,"h":true,"j":["school","warning","danger","sign","driving","yellow-diamond"],"k":[36,9],"o":2},"national_park":{"a":"National Park","b":"1F3DE-FE0F","c":"1F3DE","d":true,"e":true,"f":true,"h":true,"j":["photo","environment","nature"],"k":[10,49],"o":2},"no_entry":{"a":"No Entry","b":"26D4","d":true,"e":true,"f":true,"h":true,"j":["limit","security","privacy","bad","denied","stop","circle"],"k":[54,8],"o":2},"one-piece_swimsuit":{"a":"One-Piece Swimsuit","b":"1FA71","d":true,"e":true,"f":true,"h":true,"k":[51,52],"o":12},"tiger":{"a":"Tiger Face","b":"1F42F","d":true,"e":true,"f":true,"h":true,"j":["animal","cat","danger","wild","nature","roar"],"k":[12,19],"o":2},"red_envelope":{"a":"Red Gift Envelope","b":"1F9E7","d":true,"e":true,"f":true,"h":true,"k":[51,26],"o":11},"star-struck":{"a":"Grinning Face with Star Eyes","b":"1F929","d":true,"e":true,"f":true,"h":true,"k":[38,43],"n":["grinning_face_with_star_eyes"],"o":5},"middle_finger":{"skin_variations":{"1F3FB":{"unified":"1F595-1F3FB","non_qualified":null,"image":"1f595-1f3fb.png","sheet_x":29,"sheet_y":55,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F595-1F3FC","non_qualified":null,"image":"1f595-1f3fc.png","sheet_x":29,"sheet_y":56,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F595-1F3FD","non_qualified":null,"image":"1f595-1f3fd.png","sheet_x":30,"sheet_y":0,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F595-1F3FE","non_qualified":null,"image":"1f595-1f3fe.png","sheet_x":30,"sheet_y":1,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F595-1F3FF","non_qualified":null,"image":"1f595-1f3ff.png","sheet_x":30,"sheet_y":2,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Reversed Hand with Middle Finger Extended","b":"1F595","d":true,"e":true,"f":true,"h":true,"k":[29,54],"n":["reversed_hand_with_middle_finger_extended"],"o":2},"flag-ao":{"a":"Angola Flag","b":"1F1E6-1F1F4","d":true,"e":true,"f":true,"h":true,"k":[0,39],"o":2},"tomato":{"a":"Tomato","b":"1F345","d":true,"e":true,"f":true,"h":true,"j":["fruit","vegetable","nature","food"],"k":[6,29],"o":2},"coconut":{"a":"Coconut","b":"1F965","d":true,"e":true,"f":true,"h":true,"k":[41,52],"o":5},"ribbon":{"a":"Ribbon","b":"1F380","d":true,"e":true,"f":true,"h":true,"j":["decoration","pink","girl","bowtie"],"k":[7,31],"o":2},"no_entry_sign":{"a":"No Entry Sign","b":"1F6AB","d":true,"e":true,"f":true,"h":true,"j":["forbid","stop","limit","denied","disallow","circle"],"k":[35,2],"o":2},"point_down":{"skin_variations":{"1F3FB":{"unified":"1F447-1F3FB","non_qualified":null,"image":"1f447-1f3fb.png","sheet_x":13,"sheet_y":3,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F447-1F3FC","non_qualified":null,"image":"1f447-1f3fc.png","sheet_x":13,"sheet_y":4,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F447-1F3FD","non_qualified":null,"image":"1f447-1f3fd.png","sheet_x":13,"sheet_y":5,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F447-1F3FE","non_qualified":null,"image":"1f447-1f3fe.png","sheet_x":13,"sheet_y":6,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F447-1F3FF","non_qualified":null,"image":"1f447-1f3ff.png","sheet_x":13,"sheet_y":7,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"White Down Pointing Backhand Index","b":"1F447","d":true,"e":true,"f":true,"h":true,"j":["fingers","hand","direction","down"],"k":[13,2],"o":2},"flag-aq":{"a":"Antarctica Flag","b":"1F1E6-1F1F6","d":true,"e":true,"f":true,"h":true,"k":[0,40],"o":2},"briefs":{"a":"Briefs","b":"1FA72","d":true,"e":true,"f":true,"h":true,"k":[51,53],"o":12},"kissing_heart":{"a":"Face Throwing a Kiss","b":"1F618","d":true,"e":true,"f":true,"h":true,"j":["face","love","like","affection","valentines","infatuation","kiss"],"k":[31,2],"l":[":*",":-*"],"o":2},"tiger2":{"a":"Tiger","b":"1F405","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","roar"],"k":[11,33],"o":2},"stadium":{"a":"Stadium","b":"1F3DF-FE0F","c":"1F3DF","d":true,"e":true,"f":true,"h":true,"j":["photo","place","sports","concert","venue"],"k":[10,50],"o":2},"leopard":{"a":"Leopard","b":"1F406","d":true,"e":true,"f":true,"h":true,"j":["animal","nature"],"k":[11,34],"o":2},"no_bicycles":{"a":"No Bicycles","b":"1F6B3","d":true,"e":true,"f":true,"h":true,"j":["cyclist","prohibited","circle"],"k":[35,10],"o":2},"kissing":{"a":"Kissing Face","b":"1F617","d":true,"e":true,"f":true,"h":true,"j":["love","like","face","3","valentines","infatuation","kiss"],"k":[31,1],"o":2},"flag-ar":{"a":"Argentina Flag","b":"1F1E6-1F1F7","d":true,"e":true,"f":true,"h":true,"k":[0,41],"o":2},"avocado":{"a":"Avocado","b":"1F951","d":true,"e":true,"f":true,"h":true,"j":["fruit","food"],"k":[41,32],"o":4},"point_up":{"skin_variations":{"1F3FB":{"unified":"261D-1F3FB","non_qualified":null,"image":"261d-1f3fb.png","sheet_x":53,"sheet_y":3,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"261D-1F3FC","non_qualified":null,"image":"261d-1f3fc.png","sheet_x":53,"sheet_y":4,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"261D-1F3FD","non_qualified":null,"image":"261d-1f3fd.png","sheet_x":53,"sheet_y":5,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"261D-1F3FE","non_qualified":null,"image":"261d-1f3fe.png","sheet_x":53,"sheet_y":6,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"261D-1F3FF","non_qualified":null,"image":"261d-1f3ff.png","sheet_x":53,"sheet_y":7,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"White Up Pointing Index","b":"261D-FE0F","c":"261D","d":true,"e":true,"f":true,"h":true,"j":["hand","fingers","direction","up"],"k":[53,2],"o":2},"gift":{"a":"Wrapped Present","b":"1F381","d":true,"e":true,"f":true,"h":true,"j":["present","birthday","christmas","xmas"],"k":[7,32],"o":2},"classical_building":{"a":"Classical Building","b":"1F3DB-FE0F","c":"1F3DB","d":true,"e":true,"f":true,"h":true,"j":["art","culture","history"],"k":[10,46],"o":2},"shorts":{"a":"Shorts","b":"1FA73","d":true,"e":true,"f":true,"h":true,"k":[51,54],"o":12},"+1":{"skin_variations":{"1F3FB":{"unified":"1F44D-1F3FB","non_qualified":null,"image":"1f44d-1f3fb.png","sheet_x":13,"sheet_y":39,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F44D-1F3FC","non_qualified":null,"image":"1f44d-1f3fc.png","sheet_x":13,"sheet_y":40,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F44D-1F3FD","non_qualified":null,"image":"1f44d-1f3fd.png","sheet_x":13,"sheet_y":41,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F44D-1F3FE","non_qualified":null,"image":"1f44d-1f3fe.png","sheet_x":13,"sheet_y":42,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F44D-1F3FF","non_qualified":null,"image":"1f44d-1f3ff.png","sheet_x":13,"sheet_y":43,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Thumbs Up Sign","b":"1F44D","d":true,"e":true,"f":true,"h":true,"j":["thumbsup","yes","awesome","good","agree","accept","cool","hand","like"],"k":[13,38],"n":["thumbsup"],"o":2},"horse":{"a":"Horse Face","b":"1F434","d":true,"e":true,"f":true,"h":true,"j":["animal","brown","nature"],"k":[12,24],"o":2},"bikini":{"a":"Bikini","b":"1F459","d":true,"e":true,"f":true,"h":true,"j":["swimming","female","woman","girl","fashion","beach","summer"],"k":[14,13],"o":2},"no_smoking":{"a":"No Smoking Symbol","b":"1F6AD","d":true,"e":true,"f":true,"h":true,"j":["cigarette","blue-square","smell","smoke"],"k":[35,4],"o":2},"eggplant":{"a":"Aubergine","b":"1F346","d":true,"e":true,"f":true,"h":true,"j":["vegetable","nature","food","aubergine"],"k":[6,30],"o":2},"flag-as":{"a":"American Samoa Flag","b":"1F1E6-1F1F8","d":true,"e":true,"f":true,"h":true,"k":[0,42],"o":2},"reminder_ribbon":{"a":"Reminder Ribbon","b":"1F397-FE0F","c":"1F397","d":true,"e":true,"f":true,"h":true,"j":["sports","cause","support","awareness"],"k":[8,0],"o":2},"building_construction":{"a":"Building Construction","b":"1F3D7-FE0F","c":"1F3D7","d":true,"e":true,"f":true,"h":true,"j":["wip","working","progress"],"k":[10,42],"o":2},"relaxed":{"a":"White Smiling Face","b":"263A-FE0F","c":"263A","d":true,"e":true,"f":true,"h":true,"j":["face","blush","massage","happiness"],"k":[53,17],"o":2},"kissing_closed_eyes":{"a":"Kissing Face with Closed Eyes","b":"1F61A","d":true,"e":true,"f":true,"h":true,"j":["face","love","like","affection","valentines","infatuation","kiss"],"k":[31,4],"o":2},"-1":{"skin_variations":{"1F3FB":{"unified":"1F44E-1F3FB","non_qualified":null,"image":"1f44e-1f3fb.png","sheet_x":13,"sheet_y":45,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F44E-1F3FC","non_qualified":null,"image":"1f44e-1f3fc.png","sheet_x":13,"sheet_y":46,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F44E-1F3FD","non_qualified":null,"image":"1f44e-1f3fd.png","sheet_x":13,"sheet_y":47,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F44E-1F3FE","non_qualified":null,"image":"1f44e-1f3fe.png","sheet_x":13,"sheet_y":48,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F44E-1F3FF","non_qualified":null,"image":"1f44e-1f3ff.png","sheet_x":13,"sheet_y":49,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Thumbs Down Sign","b":"1F44E","d":true,"e":true,"f":true,"h":true,"j":["thumbsdown","no","dislike","hand"],"k":[13,44],"n":["thumbsdown"],"o":2},"admission_tickets":{"a":"Admission Tickets","b":"1F39F-FE0F","c":"1F39F","d":true,"e":true,"f":true,"h":true,"k":[8,5],"o":2},"flag-at":{"a":"Austria Flag","b":"1F1E6-1F1F9","d":true,"e":true,"f":true,"h":true,"k":[0,43],"o":2},"womans_clothes":{"a":"Womans Clothes","b":"1F45A","d":true,"e":true,"f":true,"h":true,"j":["fashion","shopping_bags","female"],"k":[14,14],"o":2},"do_not_litter":{"a":"Do Not Litter Symbol","b":"1F6AF","d":true,"e":true,"f":true,"h":true,"j":["trash","bin","garbage","circle"],"k":[35,6],"o":2},"potato":{"a":"Potato","b":"1F954","d":true,"e":true,"f":true,"h":true,"j":["food","tuber","vegatable","starch"],"k":[41,35],"o":4},"racehorse":{"a":"Horse","b":"1F40E","d":true,"e":true,"f":true,"h":true,"j":["animal","gamble","luck"],"k":[11,42],"o":2},"bricks":{"a":"Brick","b":"1F9F1","d":true,"e":true,"f":true,"h":true,"k":[51,36],"o":11},"fist":{"skin_variations":{"1F3FB":{"unified":"270A-1F3FB","non_qualified":null,"image":"270a-1f3fb.png","sheet_x":54,"sheet_y":44,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"270A-1F3FC","non_qualified":null,"image":"270a-1f3fc.png","sheet_x":54,"sheet_y":45,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"270A-1F3FD","non_qualified":null,"image":"270a-1f3fd.png","sheet_x":54,"sheet_y":46,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"270A-1F3FE","non_qualified":null,"image":"270a-1f3fe.png","sheet_x":54,"sheet_y":47,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"270A-1F3FF","non_qualified":null,"image":"270a-1f3ff.png","sheet_x":54,"sheet_y":48,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Raised Fist","b":"270A","d":true,"e":true,"f":true,"h":true,"j":["fingers","hand","grasp"],"k":[54,43],"o":2},"house_buildings":{"a":"House Buildings","b":"1F3D8-FE0F","c":"1F3D8","d":true,"e":true,"f":true,"h":true,"k":[10,43],"o":2},"carrot":{"a":"Carrot","b":"1F955","d":true,"e":true,"f":true,"h":true,"j":["vegetable","food","orange"],"k":[41,36],"o":4},"ticket":{"a":"Ticket","b":"1F3AB","d":true,"e":true,"f":true,"h":true,"j":["event","concert","pass"],"k":[8,17],"o":2},"flag-au":{"a":"Australia Flag","b":"1F1E6-1F1FA","d":true,"e":true,"f":true,"h":true,"k":[0,44],"o":2},"non-potable_water":{"a":"Non-Potable Water Symbol","b":"1F6B1","d":true,"e":true,"f":true,"h":true,"j":["drink","faucet","tap","circle"],"k":[35,8],"o":2},"purse":{"a":"Purse","b":"1F45B","d":true,"e":true,"f":true,"h":true,"j":["fashion","accessories","money","sales","shopping"],"k":[14,15],"o":2},"unicorn_face":{"a":"Unicorn Face","b":"1F984","d":true,"e":true,"f":true,"h":true,"k":[42,22],"o":2},"kissing_smiling_eyes":{"a":"Kissing Face with Smiling Eyes","b":"1F619","d":true,"e":true,"f":true,"h":true,"j":["face","affection","valentines","infatuation","kiss"],"k":[31,3],"o":2},"facepunch":{"skin_variations":{"1F3FB":{"unified":"1F44A-1F3FB","non_qualified":null,"image":"1f44a-1f3fb.png","sheet_x":13,"sheet_y":21,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F44A-1F3FC","non_qualified":null,"image":"1f44a-1f3fc.png","sheet_x":13,"sheet_y":22,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F44A-1F3FD","non_qualified":null,"image":"1f44a-1f3fd.png","sheet_x":13,"sheet_y":23,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F44A-1F3FE","non_qualified":null,"image":"1f44a-1f3fe.png","sheet_x":13,"sheet_y":24,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F44A-1F3FF","non_qualified":null,"image":"1f44a-1f3ff.png","sheet_x":13,"sheet_y":25,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Fisted Hand Sign","b":"1F44A","d":true,"e":true,"f":true,"h":true,"j":["angry","violence","fist","hit","attack","hand"],"k":[13,20],"n":["punch"],"o":2},"medal":{"a":"Medal","b":"1F396-FE0F","c":"1F396","d":true,"e":true,"f":true,"h":true,"k":[7,56],"o":2},"zebra_face":{"a":"Zebra Face","b":"1F993","d":true,"e":true,"f":true,"h":true,"k":[42,37],"o":5},"handbag":{"a":"Handbag","b":"1F45C","d":true,"e":true,"f":true,"h":true,"j":["fashion","accessory","accessories","shopping"],"k":[14,16],"o":2},"derelict_house_building":{"a":"Derelict House Building","b":"1F3DA-FE0F","c":"1F3DA","d":true,"e":true,"f":true,"h":true,"k":[10,45],"o":2},"yum":{"a":"Face Savouring Delicious Food","b":"1F60B","d":true,"e":true,"f":true,"h":true,"j":["happy","joy","tongue","smile","face","silly","yummy","nom","delicious","savouring"],"k":[30,46],"o":2},"corn":{"a":"Ear of Maize","b":"1F33D","d":true,"e":true,"f":true,"h":true,"j":["food","vegetable","plant"],"k":[6,21],"o":2},"flag-aw":{"a":"Aruba Flag","b":"1F1E6-1F1FC","d":true,"e":true,"f":true,"h":true,"k":[0,45],"o":2},"no_pedestrians":{"a":"No Pedestrians","b":"1F6B7","d":true,"e":true,"f":true,"h":true,"j":["rules","crossing","walking","circle"],"k":[36,8],"o":2},"house":{"a":"House Building","b":"1F3E0","d":true,"e":true,"f":true,"h":true,"j":["building","home"],"k":[10,51],"o":2},"hot_pepper":{"a":"Hot Pepper","b":"1F336-FE0F","c":"1F336","d":true,"e":true,"f":true,"h":true,"j":["food","spicy","chilli","chili"],"k":[6,14],"o":2},"flag-ax":{"a":"Åland Islands Flag","b":"1F1E6-1F1FD","d":true,"e":true,"f":true,"h":true,"k":[0,46],"o":2},"trophy":{"a":"Trophy","b":"1F3C6","d":true,"e":true,"f":true,"h":true,"j":["win","award","contest","place","ftw","ceremony"],"k":[9,26],"o":2},"deer":{"a":"Deer","b":"1F98C","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","horns","venison"],"k":[42,30],"o":4},"left-facing_fist":{"skin_variations":{"1F3FB":{"unified":"1F91B-1F3FB","non_qualified":null,"image":"1f91b-1f3fb.png","sheet_x":37,"sheet_y":50,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F91B-1F3FC","non_qualified":null,"image":"1f91b-1f3fc.png","sheet_x":37,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F91B-1F3FD","non_qualified":null,"image":"1f91b-1f3fd.png","sheet_x":37,"sheet_y":52,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F91B-1F3FE","non_qualified":null,"image":"1f91b-1f3fe.png","sheet_x":37,"sheet_y":53,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F91B-1F3FF","non_qualified":null,"image":"1f91b-1f3ff.png","sheet_x":37,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Left-Facing Fist","b":"1F91B","d":true,"e":true,"f":true,"h":true,"k":[37,49],"o":4},"stuck_out_tongue":{"a":"Face with Stuck-out Tongue","b":"1F61B","d":true,"e":true,"f":true,"h":true,"j":["face","prank","childish","playful","mischievous","smile","tongue"],"k":[31,5],"l":[":p",":-p",":P",":-P",":b",":-b"],"m":":p","o":2},"pouch":{"a":"Pouch","b":"1F45D","d":true,"e":true,"f":true,"h":true,"j":["bag","accessories","shopping"],"k":[14,17],"o":2},"no_mobile_phones":{"a":"No Mobile Phones","b":"1F4F5","d":true,"e":true,"f":true,"h":true,"j":["iphone","mute","circle"],"k":[27,18],"o":2},"stuck_out_tongue_winking_eye":{"a":"Face with Stuck-out Tongue and Winking Eye","b":"1F61C","d":true,"e":true,"f":true,"h":true,"j":["face","prank","childish","playful","mischievous","smile","wink","tongue"],"k":[31,6],"l":[";p",";-p",";b",";-b",";P",";-P"],"m":";p","o":2},"sports_medal":{"a":"Sports Medal","b":"1F3C5","d":true,"e":true,"f":true,"h":true,"k":[9,25],"o":2},"cucumber":{"a":"Cucumber","b":"1F952","d":true,"e":true,"f":true,"h":true,"j":["fruit","food","pickle"],"k":[41,33],"o":4},"cow":{"a":"Cow Face","b":"1F42E","d":true,"e":true,"f":true,"h":true,"j":["beef","ox","animal","nature","moo","milk"],"k":[12,18],"o":2},"underage":{"a":"No One Under Eighteen Symbol","b":"1F51E","d":true,"e":true,"f":true,"h":true,"j":["18","drink","pub","night","minor","circle"],"k":[28,1],"o":2},"flag-az":{"a":"Azerbaijan Flag","b":"1F1E6-1F1FF","d":true,"e":true,"f":true,"h":true,"k":[0,47],"o":2},"shopping_bags":{"a":"Shopping Bags","b":"1F6CD-FE0F","c":"1F6CD","d":true,"e":true,"f":true,"h":true,"k":[36,35],"o":2},"right-facing_fist":{"skin_variations":{"1F3FB":{"unified":"1F91C-1F3FB","non_qualified":null,"image":"1f91c-1f3fb.png","sheet_x":37,"sheet_y":56,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F91C-1F3FC","non_qualified":null,"image":"1f91c-1f3fc.png","sheet_x":38,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F91C-1F3FD","non_qualified":null,"image":"1f91c-1f3fd.png","sheet_x":38,"sheet_y":1,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F91C-1F3FE","non_qualified":null,"image":"1f91c-1f3fe.png","sheet_x":38,"sheet_y":2,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F91C-1F3FF","non_qualified":null,"image":"1f91c-1f3ff.png","sheet_x":38,"sheet_y":3,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Right-Facing Fist","b":"1F91C","d":true,"e":true,"f":true,"h":true,"k":[37,55],"o":4},"house_with_garden":{"a":"House with Garden","b":"1F3E1","d":true,"e":true,"f":true,"h":true,"j":["home","plant","nature"],"k":[10,52],"o":2},"clap":{"skin_variations":{"1F3FB":{"unified":"1F44F-1F3FB","non_qualified":null,"image":"1f44f-1f3fb.png","sheet_x":13,"sheet_y":51,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F44F-1F3FC","non_qualified":null,"image":"1f44f-1f3fc.png","sheet_x":13,"sheet_y":52,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F44F-1F3FD","non_qualified":null,"image":"1f44f-1f3fd.png","sheet_x":13,"sheet_y":53,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F44F-1F3FE","non_qualified":null,"image":"1f44f-1f3fe.png","sheet_x":13,"sheet_y":54,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F44F-1F3FF","non_qualified":null,"image":"1f44f-1f3ff.png","sheet_x":13,"sheet_y":55,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Clapping Hands Sign","b":"1F44F","d":true,"e":true,"f":true,"h":true,"j":["hands","praise","applause","congrats","yay"],"k":[13,50],"o":2},"leafy_green":{"a":"Leafy Green","b":"1F96C","d":true,"e":true,"f":true,"h":true,"k":[42,2],"o":11},"office":{"a":"Office Building","b":"1F3E2","d":true,"e":true,"f":true,"h":true,"j":["building","bureau","work"],"k":[10,53],"o":2},"flag-ba":{"a":"Bosnia & Herzegovina Flag","b":"1F1E7-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[0,48],"o":2},"zany_face":{"a":"Grinning Face with One Large and One Small Eye","b":"1F92A","d":true,"e":true,"f":true,"h":true,"k":[38,44],"n":["grinning_face_with_one_large_and_one_small_eye"],"o":5},"first_place_medal":{"a":"First Place Medal","b":"1F947","d":true,"e":true,"f":true,"h":true,"k":[41,22],"o":4},"ox":{"a":"Ox","b":"1F402","d":true,"e":true,"f":true,"h":true,"j":["animal","cow","beef"],"k":[11,30],"o":2},"school_satchel":{"a":"School Satchel","b":"1F392","d":true,"e":true,"f":true,"h":true,"j":["student","education","bag","backpack"],"k":[7,54],"o":2},"radioactive_sign":{"a":"Radioactive Sign","b":"2622-FE0F","c":"2622","d":true,"e":true,"f":true,"h":true,"k":[53,9],"o":2},"second_place_medal":{"a":"Second Place Medal","b":"1F948","d":true,"e":true,"f":true,"h":true,"k":[41,23],"o":4},"stuck_out_tongue_closed_eyes":{"a":"Face with Stuck-out Tongue and Tightly-Closed Eyes","b":"1F61D","d":true,"e":true,"f":true,"h":true,"j":["face","prank","playful","mischievous","smile","tongue"],"k":[31,7],"o":2},"broccoli":{"a":"Broccoli","b":"1F966","d":true,"e":true,"f":true,"h":true,"k":[41,53],"o":5},"biohazard_sign":{"a":"Biohazard Sign","b":"2623-FE0F","c":"2623","d":true,"e":true,"f":true,"h":true,"k":[53,10],"o":2},"mans_shoe":{"a":"Mans Shoe","b":"1F45E","d":true,"e":true,"f":true,"h":true,"j":["fashion","male"],"k":[14,18],"n":["shoe"],"o":2},"raised_hands":{"skin_variations":{"1F3FB":{"unified":"1F64C-1F3FB","non_qualified":null,"image":"1f64c-1f3fb.png","sheet_x":33,"sheet_y":9,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F64C-1F3FC","non_qualified":null,"image":"1f64c-1f3fc.png","sheet_x":33,"sheet_y":10,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F64C-1F3FD","non_qualified":null,"image":"1f64c-1f3fd.png","sheet_x":33,"sheet_y":11,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F64C-1F3FE","non_qualified":null,"image":"1f64c-1f3fe.png","sheet_x":33,"sheet_y":12,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F64C-1F3FF","non_qualified":null,"image":"1f64c-1f3ff.png","sheet_x":33,"sheet_y":13,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Person Raising Both Hands in Celebration","b":"1F64C","d":true,"e":true,"f":true,"h":true,"j":["gesture","hooray","yea","celebration","hands"],"k":[33,8],"o":2},"post_office":{"a":"Japanese Post Office","b":"1F3E3","d":true,"e":true,"f":true,"h":true,"j":["building","envelope","communication"],"k":[10,54],"o":2},"flag-bb":{"a":"Barbados Flag","b":"1F1E7-1F1E7","d":true,"e":true,"f":true,"h":true,"k":[0,49],"o":2},"water_buffalo":{"a":"Water Buffalo","b":"1F403","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","ox","cow"],"k":[11,31],"o":2},"third_place_medal":{"a":"Third Place Medal","b":"1F949","d":true,"e":true,"f":true,"h":true,"k":[41,24],"o":4},"european_post_office":{"a":"European Post Office","b":"1F3E4","d":true,"e":true,"f":true,"h":true,"j":["building","email"],"k":[10,55],"o":2},"athletic_shoe":{"a":"Athletic Shoe","b":"1F45F","d":true,"e":true,"f":true,"h":true,"j":["shoes","sports","sneakers"],"k":[14,19],"o":2},"arrow_up":{"a":"Upwards Black Arrow","b":"2B06-FE0F","c":"2B06","d":true,"e":true,"f":true,"h":true,"j":["blue-square","continue","top","direction"],"k":[55,38],"o":2},"cow2":{"a":"Cow","b":"1F404","d":true,"e":true,"f":true,"h":true,"j":["beef","ox","animal","nature","moo","milk"],"k":[11,32],"o":2},"open_hands":{"skin_variations":{"1F3FB":{"unified":"1F450-1F3FB","non_qualified":null,"image":"1f450-1f3fb.png","sheet_x":14,"sheet_y":0,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F450-1F3FC","non_qualified":null,"image":"1f450-1f3fc.png","sheet_x":14,"sheet_y":1,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F450-1F3FD","non_qualified":null,"image":"1f450-1f3fd.png","sheet_x":14,"sheet_y":2,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F450-1F3FE","non_qualified":null,"image":"1f450-1f3fe.png","sheet_x":14,"sheet_y":3,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F450-1F3FF","non_qualified":null,"image":"1f450-1f3ff.png","sheet_x":14,"sheet_y":4,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Open Hands Sign","b":"1F450","d":true,"e":true,"f":true,"h":true,"j":["fingers","butterfly","hands","open"],"k":[13,56],"o":2},"garlic":{"a":"Garlic","b":"1F9C4","d":true,"e":true,"f":true,"h":true,"k":[44,12],"o":12},"money_mouth_face":{"a":"Money-Mouth Face","b":"1F911","d":true,"e":true,"f":true,"h":true,"j":["face","rich","dollar","money"],"k":[37,24],"o":2},"flag-bd":{"a":"Bangladesh Flag","b":"1F1E7-1F1E9","d":true,"e":true,"f":true,"h":true,"k":[0,50],"o":2},"soccer":{"a":"Soccer Ball","b":"26BD","d":true,"e":true,"f":true,"h":true,"j":["sports","football"],"k":[53,56],"o":2},"hugging_face":{"a":"Hugging Face","b":"1F917","d":true,"e":true,"f":true,"h":true,"k":[37,30],"o":2},"onion":{"a":"Onion","b":"1F9C5","d":true,"e":true,"f":true,"h":true,"k":[44,13],"o":12},"arrow_upper_right":{"a":"North East Arrow","b":"2197-FE0F","c":"2197","d":true,"e":true,"f":true,"h":true,"j":["blue-square","point","direction","diagonal","northeast"],"k":[52,17],"o":2},"palms_up_together":{"skin_variations":{"1F3FB":{"unified":"1F932-1F3FB","non_qualified":null,"image":"1f932-1f3fb.png","sheet_x":39,"sheet_y":6,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F932-1F3FC","non_qualified":null,"image":"1f932-1f3fc.png","sheet_x":39,"sheet_y":7,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F932-1F3FD","non_qualified":null,"image":"1f932-1f3fd.png","sheet_x":39,"sheet_y":8,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F932-1F3FE","non_qualified":null,"image":"1f932-1f3fe.png","sheet_x":39,"sheet_y":9,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F932-1F3FF","non_qualified":null,"image":"1f932-1f3ff.png","sheet_x":39,"sheet_y":10,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Palms Up Together","b":"1F932","d":true,"e":true,"f":true,"h":true,"k":[39,5],"o":5},"pig":{"a":"Pig Face","b":"1F437","d":true,"e":true,"f":true,"h":true,"j":["animal","oink","nature"],"k":[12,27],"o":2},"hospital":{"a":"Hospital","b":"1F3E5","d":true,"e":true,"f":true,"h":true,"j":["building","health","surgery","doctor"],"k":[10,56],"o":2},"hiking_boot":{"a":"Hiking Boot","b":"1F97E","d":true,"e":true,"f":true,"h":true,"k":[42,16],"o":11},"flag-be":{"a":"Belgium Flag","b":"1F1E7-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[0,51],"o":2},"flag-bf":{"a":"Burkina Faso Flag","b":"1F1E7-1F1EB","d":true,"e":true,"f":true,"h":true,"k":[0,52],"o":2},"mushroom":{"a":"Mushroom","b":"1F344","d":true,"e":true,"f":true,"h":true,"j":["plant","vegetable"],"k":[6,28],"o":2},"pig2":{"a":"Pig","b":"1F416","d":true,"e":true,"f":true,"h":true,"j":["animal","nature"],"k":[11,51],"o":2},"baseball":{"a":"Baseball","b":"26BE","d":true,"e":true,"f":true,"h":true,"j":["sports","balls"],"k":[54,0],"o":2},"face_with_hand_over_mouth":{"a":"Smiling Face with Smiling Eyes and Hand Covering Mouth","b":"1F92D","d":true,"e":true,"f":true,"h":true,"k":[38,47],"n":["smiling_face_with_smiling_eyes_and_hand_covering_mouth"],"o":5},"handshake":{"a":"Handshake","b":"1F91D","d":true,"e":true,"f":true,"h":true,"j":["agreement","shake"],"k":[38,4],"o":4},"womans_flat_shoe":{"a":"Flat Shoe","b":"1F97F","d":true,"e":true,"f":true,"h":true,"k":[42,17],"o":11},"bank":{"a":"Bank","b":"1F3E6","d":true,"e":true,"f":true,"h":true,"j":["building","money","sales","cash","business","enterprise"],"k":[11,0],"o":2},"arrow_right":{"a":"Black Rightwards Arrow","b":"27A1-FE0F","c":"27A1","d":true,"e":true,"f":true,"h":true,"j":["blue-square","next"],"k":[55,32],"o":2},"peanuts":{"a":"Peanuts","b":"1F95C","d":true,"e":true,"f":true,"h":true,"j":["food","nut"],"k":[41,43],"o":4},"shushing_face":{"a":"Face with Finger Covering Closed Lips","b":"1F92B","d":true,"e":true,"f":true,"h":true,"k":[38,45],"n":["face_with_finger_covering_closed_lips"],"o":5},"pray":{"skin_variations":{"1F3FB":{"unified":"1F64F-1F3FB","non_qualified":null,"image":"1f64f-1f3fb.png","sheet_x":33,"sheet_y":51,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F64F-1F3FC","non_qualified":null,"image":"1f64f-1f3fc.png","sheet_x":33,"sheet_y":52,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F64F-1F3FD","non_qualified":null,"image":"1f64f-1f3fd.png","sheet_x":33,"sheet_y":53,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F64F-1F3FE","non_qualified":null,"image":"1f64f-1f3fe.png","sheet_x":33,"sheet_y":54,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F64F-1F3FF","non_qualified":null,"image":"1f64f-1f3ff.png","sheet_x":33,"sheet_y":55,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Person with Folded Hands","b":"1F64F","d":true,"e":true,"f":true,"h":true,"j":["please","hope","wish","namaste","highfive"],"k":[33,50],"o":2},"softball":{"a":"Softball","b":"1F94E","d":true,"e":true,"f":true,"h":true,"k":[41,29],"o":11},"high_heel":{"a":"High-Heeled Shoe","b":"1F460","d":true,"e":true,"f":true,"h":true,"j":["fashion","shoes","female","pumps","stiletto"],"k":[14,20],"o":2},"flag-bg":{"a":"Bulgaria Flag","b":"1F1E7-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[0,53],"o":2},"arrow_lower_right":{"a":"South East Arrow","b":"2198-FE0F","c":"2198","d":true,"e":true,"f":true,"h":true,"j":["blue-square","direction","diagonal","southeast"],"k":[52,18],"o":2},"hotel":{"a":"Hotel","b":"1F3E8","d":true,"e":true,"f":true,"h":true,"j":["building","accomodation","checkin"],"k":[11,2],"o":2},"boar":{"a":"Boar","b":"1F417","d":true,"e":true,"f":true,"h":true,"j":["animal","nature"],"k":[11,52],"o":2},"sandal":{"a":"Womans Sandal","b":"1F461","d":true,"e":true,"f":true,"h":true,"j":["shoes","fashion","flip flops"],"k":[14,21],"o":2},"flag-bh":{"a":"Bahrain Flag","b":"1F1E7-1F1ED","d":true,"e":true,"f":true,"h":true,"k":[0,54],"o":2},"arrow_down":{"a":"Downwards Black Arrow","b":"2B07-FE0F","c":"2B07","d":true,"e":true,"f":true,"h":true,"j":["blue-square","direction","bottom"],"k":[55,39],"o":2},"thinking_face":{"a":"Thinking Face","b":"1F914","d":true,"e":true,"f":true,"h":true,"k":[37,27],"o":2},"writing_hand":{"skin_variations":{"1F3FB":{"unified":"270D-1F3FB","non_qualified":null,"image":"270d-1f3fb.png","sheet_x":55,"sheet_y":5,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"270D-1F3FC","non_qualified":null,"image":"270d-1f3fc.png","sheet_x":55,"sheet_y":6,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"270D-1F3FD","non_qualified":null,"image":"270d-1f3fd.png","sheet_x":55,"sheet_y":7,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"270D-1F3FE","non_qualified":null,"image":"270d-1f3fe.png","sheet_x":55,"sheet_y":8,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"270D-1F3FF","non_qualified":null,"image":"270d-1f3ff.png","sheet_x":55,"sheet_y":9,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Writing Hand","b":"270D-FE0F","c":"270D","d":true,"e":true,"f":true,"h":true,"j":["lower_left_ballpoint_pen","stationery","write","compose"],"k":[55,4],"o":2},"chestnut":{"a":"Chestnut","b":"1F330","d":true,"e":true,"f":true,"h":true,"j":["food","squirrel"],"k":[6,8],"o":2},"basketball":{"a":"Basketball and Hoop","b":"1F3C0","d":true,"e":true,"f":true,"h":true,"j":["sports","balls","NBA"],"k":[8,38],"o":2},"pig_nose":{"a":"Pig Nose","b":"1F43D","d":true,"e":true,"f":true,"h":true,"j":["animal","oink"],"k":[12,33],"o":2},"love_hotel":{"a":"Love Hotel","b":"1F3E9","d":true,"e":true,"f":true,"h":true,"j":["like","affection","dating"],"k":[11,3],"o":2},"nail_care":{"skin_variations":{"1F3FB":{"unified":"1F485-1F3FB","non_qualified":null,"image":"1f485-1f3fb.png","sheet_x":24,"sheet_y":34,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F485-1F3FC","non_qualified":null,"image":"1f485-1f3fc.png","sheet_x":24,"sheet_y":35,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F485-1F3FD","non_qualified":null,"image":"1f485-1f3fd.png","sheet_x":24,"sheet_y":36,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F485-1F3FE","non_qualified":null,"image":"1f485-1f3fe.png","sheet_x":24,"sheet_y":37,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F485-1F3FF","non_qualified":null,"image":"1f485-1f3ff.png","sheet_x":24,"sheet_y":38,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Nail Polish","b":"1F485","d":true,"e":true,"f":true,"h":true,"j":["beauty","manicure","finger","fashion","nail"],"k":[24,33],"o":2},"volleyball":{"a":"Volleyball","b":"1F3D0","d":true,"e":true,"f":true,"h":true,"j":["sports","balls"],"k":[10,35],"o":2},"flag-bi":{"a":"Burundi Flag","b":"1F1E7-1F1EE","d":true,"e":true,"f":true,"h":true,"k":[0,55],"o":2},"arrow_lower_left":{"a":"South West Arrow","b":"2199-FE0F","c":"2199","d":true,"e":true,"f":true,"h":true,"j":["blue-square","direction","diagonal","southwest"],"k":[52,19],"o":2},"ram":{"a":"Ram","b":"1F40F","d":true,"e":true,"f":true,"h":true,"j":["animal","sheep","nature"],"k":[11,43],"o":2},"ballet_shoes":{"a":"Ballet Shoes","b":"1FA70","d":true,"e":true,"f":true,"h":true,"k":[51,51],"o":12},"zipper_mouth_face":{"a":"Zipper-Mouth Face","b":"1F910","d":true,"e":true,"f":true,"h":true,"j":["face","sealed","zipper","secret"],"k":[37,23],"o":2},"bread":{"a":"Bread","b":"1F35E","d":true,"e":true,"f":true,"h":true,"j":["food","wheat","breakfast","toast"],"k":[6,54],"o":2},"convenience_store":{"a":"Convenience Store","b":"1F3EA","d":true,"e":true,"f":true,"h":true,"j":["building","shopping","groceries"],"k":[11,4],"o":2},"boot":{"a":"Womans Boots","b":"1F462","d":true,"e":true,"f":true,"h":true,"j":["shoes","fashion"],"k":[14,22],"o":2},"sheep":{"a":"Sheep","b":"1F411","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","wool","shipit"],"k":[11,45],"o":2},"face_with_raised_eyebrow":{"a":"Face with One Eyebrow Raised","b":"1F928","d":true,"e":true,"f":true,"h":true,"k":[38,42],"n":["face_with_one_eyebrow_raised"],"o":5},"flag-bj":{"a":"Benin Flag","b":"1F1E7-1F1EF","d":true,"e":true,"f":true,"h":true,"k":[0,56],"o":2},"arrow_left":{"a":"Leftwards Black Arrow","b":"2B05-FE0F","c":"2B05","d":true,"e":true,"f":true,"h":true,"j":["blue-square","previous","back"],"k":[55,37],"o":2},"selfie":{"skin_variations":{"1F3FB":{"unified":"1F933-1F3FB","non_qualified":null,"image":"1f933-1f3fb.png","sheet_x":39,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F933-1F3FC","non_qualified":null,"image":"1f933-1f3fc.png","sheet_x":39,"sheet_y":13,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F933-1F3FD","non_qualified":null,"image":"1f933-1f3fd.png","sheet_x":39,"sheet_y":14,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F933-1F3FE","non_qualified":null,"image":"1f933-1f3fe.png","sheet_x":39,"sheet_y":15,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F933-1F3FF","non_qualified":null,"image":"1f933-1f3ff.png","sheet_x":39,"sheet_y":16,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Selfie","b":"1F933","d":true,"e":true,"f":true,"h":true,"j":["camera","phone"],"k":[39,11],"o":4},"croissant":{"a":"Croissant","b":"1F950","d":true,"e":true,"f":true,"h":true,"j":["food","bread","french"],"k":[41,31],"o":4},"school":{"a":"School","b":"1F3EB","d":true,"e":true,"f":true,"h":true,"j":["building","student","education","learn","teach"],"k":[11,5],"o":2},"football":{"a":"American Football","b":"1F3C8","d":true,"e":true,"f":true,"h":true,"j":["sports","balls","NFL"],"k":[9,33],"o":2},"goat":{"a":"Goat","b":"1F410","d":true,"e":true,"f":true,"h":true,"j":["animal","nature"],"k":[11,44],"o":2},"department_store":{"a":"Department Store","b":"1F3EC","d":true,"e":true,"f":true,"h":true,"j":["building","shopping","mall"],"k":[11,6],"o":2},"flag-bl":{"a":"St. Barthélemy Flag","b":"1F1E7-1F1F1","d":true,"e":true,"f":true,"h":true,"k":[1,0],"o":2},"crown":{"a":"Crown","b":"1F451","d":true,"e":true,"f":true,"h":true,"j":["king","kod","leader","royalty","lord"],"k":[14,5],"o":2},"arrow_upper_left":{"a":"North West Arrow","b":"2196-FE0F","c":"2196","d":true,"e":true,"f":true,"h":true,"j":["blue-square","point","direction","diagonal","northwest"],"k":[52,16],"o":2},"neutral_face":{"a":"Neutral Face","b":"1F610","d":true,"e":true,"f":true,"h":true,"j":["indifference","meh",":|","neutral"],"k":[30,51],"l":[":|",":-|"],"o":2},"rugby_football":{"a":"Rugby Football","b":"1F3C9","d":true,"e":true,"f":true,"h":true,"j":["sports","team"],"k":[9,34],"o":2},"muscle":{"skin_variations":{"1F3FB":{"unified":"1F4AA-1F3FB","non_qualified":null,"image":"1f4aa-1f3fb.png","sheet_x":25,"sheet_y":53,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F4AA-1F3FC","non_qualified":null,"image":"1f4aa-1f3fc.png","sheet_x":25,"sheet_y":54,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F4AA-1F3FD","non_qualified":null,"image":"1f4aa-1f3fd.png","sheet_x":25,"sheet_y":55,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F4AA-1F3FE","non_qualified":null,"image":"1f4aa-1f3fe.png","sheet_x":25,"sheet_y":56,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F4AA-1F3FF","non_qualified":null,"image":"1f4aa-1f3ff.png","sheet_x":26,"sheet_y":0,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Flexed Biceps","b":"1F4AA","d":true,"e":true,"f":true,"h":true,"j":["arm","flex","hand","summer","strong","biceps"],"k":[25,52],"o":2},"baguette_bread":{"a":"Baguette Bread","b":"1F956","d":true,"e":true,"f":true,"h":true,"j":["food","bread","french"],"k":[41,37],"o":4},"expressionless":{"a":"Expressionless Face","b":"1F611","d":true,"e":true,"f":true,"h":true,"j":["face","indifferent","-_-","meh","deadpan"],"k":[30,52],"o":2},"womans_hat":{"a":"Womans Hat","b":"1F452","d":true,"e":true,"f":true,"h":true,"j":["fashion","accessories","female","lady","spring"],"k":[14,6],"o":2},"pretzel":{"a":"Pretzel","b":"1F968","d":true,"e":true,"f":true,"h":true,"k":[41,55],"o":5},"mechanical_arm":{"a":"Mechanical Arm","b":"1F9BE","d":true,"e":true,"f":true,"h":true,"k":[44,6],"o":12},"arrow_up_down":{"a":"Up Down Arrow","b":"2195-FE0F","c":"2195","d":true,"e":true,"f":true,"h":true,"j":["blue-square","direction","way","vertical"],"k":[52,15],"o":2},"dromedary_camel":{"a":"Dromedary Camel","b":"1F42A","d":true,"e":true,"f":true,"h":true,"j":["animal","hot","desert","hump"],"k":[12,14],"o":2},"tennis":{"a":"Tennis Racquet and Ball","b":"1F3BE","d":true,"e":true,"f":true,"h":true,"j":["sports","balls","green"],"k":[8,36],"o":2},"flag-bm":{"a":"Bermuda Flag","b":"1F1E7-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[1,1],"o":2},"factory":{"a":"Factory","b":"1F3ED","d":true,"e":true,"f":true,"h":true,"j":["building","industry","pollution","smoke"],"k":[11,7],"o":2},"japanese_castle":{"a":"Japanese Castle","b":"1F3EF","d":true,"e":true,"f":true,"h":true,"j":["photo","building"],"k":[11,9],"o":2},"no_mouth":{"a":"Face Without Mouth","b":"1F636","d":true,"e":true,"f":true,"h":true,"j":["face","hellokitty"],"k":[31,32],"o":2},"mechanical_leg":{"a":"Mechanical Leg","b":"1F9BF","d":true,"e":true,"f":true,"h":true,"k":[44,7],"o":12},"bagel":{"a":"Bagel","b":"1F96F","d":true,"e":true,"f":true,"h":true,"k":[42,5],"o":11},"camel":{"a":"Bactrian Camel","b":"1F42B","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","hot","desert","hump"],"k":[12,15],"o":2},"tophat":{"a":"Top Hat","b":"1F3A9","d":true,"e":true,"f":true,"h":true,"j":["magic","gentleman","classy","circus"],"k":[8,15],"o":2},"left_right_arrow":{"a":"Left Right Arrow","b":"2194-FE0F","c":"2194","d":true,"e":true,"f":true,"h":true,"j":["shape","direction","horizontal","sideways"],"k":[52,14],"o":2},"flag-bn":{"a":"Brunei Flag","b":"1F1E7-1F1F3","d":true,"e":true,"f":true,"h":true,"k":[1,2],"o":2},"flying_disc":{"a":"Flying Disc","b":"1F94F","d":true,"e":true,"f":true,"h":true,"k":[41,30],"o":11},"smirk":{"a":"Smirking Face","b":"1F60F","d":true,"e":true,"f":true,"h":true,"j":["face","smile","mean","prank","smug","sarcasm"],"k":[30,50],"o":2},"mortar_board":{"a":"Graduation Cap","b":"1F393","d":true,"e":true,"f":true,"h":true,"j":["school","college","degree","university","graduation","cap","hat","legal","learn","education"],"k":[7,55],"o":2},"european_castle":{"a":"European Castle","b":"1F3F0","d":true,"e":true,"f":true,"h":true,"j":["building","royalty","history"],"k":[11,10],"o":2},"leg":{"skin_variations":{"1F3FB":{"unified":"1F9B5-1F3FB","non_qualified":null,"image":"1f9b5-1f3fb.png","sheet_x":43,"sheet_y":6,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9B5-1F3FC","non_qualified":null,"image":"1f9b5-1f3fc.png","sheet_x":43,"sheet_y":7,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9B5-1F3FD","non_qualified":null,"image":"1f9b5-1f3fd.png","sheet_x":43,"sheet_y":8,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9B5-1F3FE","non_qualified":null,"image":"1f9b5-1f3fe.png","sheet_x":43,"sheet_y":9,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9B5-1F3FF","non_qualified":null,"image":"1f9b5-1f3ff.png","sheet_x":43,"sheet_y":10,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Leg","b":"1F9B5","d":true,"e":true,"f":true,"h":true,"k":[43,5],"o":11},"pancakes":{"a":"Pancakes","b":"1F95E","d":true,"e":true,"f":true,"h":true,"j":["food","breakfast","flapjacks","hotcakes"],"k":[41,45],"o":4},"leftwards_arrow_with_hook":{"a":"Leftwards Arrow with Hook","b":"21A9-FE0F","c":"21A9","d":true,"e":true,"f":true,"h":true,"j":["back","return","blue-square","undo","enter"],"k":[52,20],"o":2},"flag-bo":{"a":"Bolivia Flag","b":"1F1E7-1F1F4","d":true,"e":true,"f":true,"h":true,"k":[1,3],"o":2},"bowling":{"a":"Bowling","b":"1F3B3","d":true,"e":true,"f":true,"h":true,"j":["sports","fun","play"],"k":[8,25],"o":2},"llama":{"a":"Llama","b":"1F999","d":true,"e":true,"f":true,"h":true,"k":[42,43],"o":11},"arrow_right_hook":{"a":"Rightwards Arrow with Hook","b":"21AA-FE0F","c":"21AA","d":true,"e":true,"f":true,"h":true,"j":["blue-square","return","rotate","direction"],"k":[52,21],"o":2},"wedding":{"a":"Wedding","b":"1F492","d":true,"e":true,"f":true,"h":true,"j":["love","like","affection","couple","marriage","bride","groom"],"k":[25,28],"o":2},"flag-bq":{"a":"Caribbean Netherlands Flag","b":"1F1E7-1F1F6","d":true,"e":true,"f":true,"h":true,"k":[1,4],"o":2},"foot":{"skin_variations":{"1F3FB":{"unified":"1F9B6-1F3FB","non_qualified":null,"image":"1f9b6-1f3fb.png","sheet_x":43,"sheet_y":12,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9B6-1F3FC","non_qualified":null,"image":"1f9b6-1f3fc.png","sheet_x":43,"sheet_y":13,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9B6-1F3FD","non_qualified":null,"image":"1f9b6-1f3fd.png","sheet_x":43,"sheet_y":14,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9B6-1F3FE","non_qualified":null,"image":"1f9b6-1f3fe.png","sheet_x":43,"sheet_y":15,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9B6-1F3FF","non_qualified":null,"image":"1f9b6-1f3ff.png","sheet_x":43,"sheet_y":16,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Foot","b":"1F9B6","d":true,"e":true,"f":true,"h":true,"k":[43,11],"o":11},"giraffe_face":{"a":"Giraffe Face","b":"1F992","d":true,"e":true,"f":true,"h":true,"k":[42,36],"o":5},"unamused":{"a":"Unamused Face","b":"1F612","d":true,"e":true,"f":true,"h":true,"j":["indifference","bored","straight face","serious","sarcasm"],"k":[30,53],"m":":(","o":2},"billed_cap":{"a":"Billed Cap","b":"1F9E2","d":true,"e":true,"f":true,"h":true,"k":[51,21],"o":5},"waffle":{"a":"Waffle","b":"1F9C7","d":true,"e":true,"f":true,"h":true,"k":[44,15],"o":12},"cricket_bat_and_ball":{"a":"Cricket Bat and Ball","b":"1F3CF","d":true,"e":true,"f":true,"h":true,"k":[10,34],"o":2},"helmet_with_white_cross":{"a":"Helmet with White Cross","b":"26D1-FE0F","c":"26D1","d":true,"e":true,"f":true,"h":true,"k":[54,6],"o":2},"ear":{"skin_variations":{"1F3FB":{"unified":"1F442-1F3FB","non_qualified":null,"image":"1f442-1f3fb.png","sheet_x":12,"sheet_y":40,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F442-1F3FC","non_qualified":null,"image":"1f442-1f3fc.png","sheet_x":12,"sheet_y":41,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F442-1F3FD","non_qualified":null,"image":"1f442-1f3fd.png","sheet_x":12,"sheet_y":42,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F442-1F3FE","non_qualified":null,"image":"1f442-1f3fe.png","sheet_x":12,"sheet_y":43,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F442-1F3FF","non_qualified":null,"image":"1f442-1f3ff.png","sheet_x":12,"sheet_y":44,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Ear","b":"1F442","d":true,"e":true,"f":true,"h":true,"j":["face","hear","sound","listen"],"k":[12,39],"o":2},"elephant":{"a":"Elephant","b":"1F418","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","nose","th","circus"],"k":[11,53],"o":2},"cheese_wedge":{"a":"Cheese Wedge","b":"1F9C0","d":true,"e":true,"f":true,"h":true,"k":[44,8],"o":2},"tokyo_tower":{"a":"Tokyo Tower","b":"1F5FC","d":true,"e":true,"f":true,"h":true,"j":["photo","japanese"],"k":[30,31],"o":2},"arrow_heading_up":{"a":"Arrow Pointing Rightwards Then Curving Upwards","b":"2934-FE0F","c":"2934","d":true,"e":true,"f":true,"h":true,"j":["blue-square","direction","top"],"k":[55,35],"o":2},"field_hockey_stick_and_ball":{"a":"Field Hockey Stick and Ball","b":"1F3D1","d":true,"e":true,"f":true,"h":true,"k":[10,36],"o":2},"flag-br":{"a":"Brazil Flag","b":"1F1E7-1F1F7","d":true,"e":true,"f":true,"h":true,"k":[1,5],"o":2},"face_with_rolling_eyes":{"a":"Face with Rolling Eyes","b":"1F644","d":true,"e":true,"f":true,"h":true,"k":[31,46],"o":2},"ear_with_hearing_aid":{"skin_variations":{"1F3FB":{"unified":"1F9BB-1F3FB","non_qualified":null,"image":"1f9bb-1f3fb.png","sheet_x":43,"sheet_y":56,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9BB-1F3FC","non_qualified":null,"image":"1f9bb-1f3fc.png","sheet_x":44,"sheet_y":0,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9BB-1F3FD","non_qualified":null,"image":"1f9bb-1f3fd.png","sheet_x":44,"sheet_y":1,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9BB-1F3FE","non_qualified":null,"image":"1f9bb-1f3fe.png","sheet_x":44,"sheet_y":2,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9BB-1F3FF","non_qualified":null,"image":"1f9bb-1f3ff.png","sheet_x":44,"sheet_y":3,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Ear with Hearing Aid","b":"1F9BB","d":true,"e":true,"f":true,"h":true,"k":[43,55],"o":12},"arrow_heading_down":{"a":"Arrow Pointing Rightwards Then Curving Downwards","b":"2935-FE0F","c":"2935","d":true,"e":true,"f":true,"h":true,"j":["blue-square","direction","bottom"],"k":[55,36],"o":2},"ice_hockey_stick_and_puck":{"a":"Ice Hockey Stick and Puck","b":"1F3D2","d":true,"e":true,"f":true,"h":true,"k":[10,37],"o":2},"meat_on_bone":{"a":"Meat on Bone","b":"1F356","d":true,"e":true,"f":true,"h":true,"j":["good","food","drumstick"],"k":[6,46],"o":2},"prayer_beads":{"a":"Prayer Beads","b":"1F4FF","d":true,"e":true,"f":true,"h":true,"j":["dhikr","religious"],"k":[27,27],"o":2},"statue_of_liberty":{"a":"Statue of Liberty","b":"1F5FD","d":true,"e":true,"f":true,"h":true,"j":["american","newyork"],"k":[30,32],"o":2},"grimacing":{"a":"Grimacing Face","b":"1F62C","d":true,"e":true,"f":true,"h":true,"j":["face","grimace","teeth"],"k":[31,22],"o":2},"flag-bs":{"a":"Bahamas Flag","b":"1F1E7-1F1F8","d":true,"e":true,"f":true,"h":true,"k":[1,6],"o":2},"rhinoceros":{"a":"Rhinoceros","b":"1F98F","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","horn"],"k":[42,33],"o":4},"lacrosse":{"a":"Lacrosse Stick and Ball","b":"1F94D","d":true,"e":true,"f":true,"h":true,"k":[41,28],"o":11},"poultry_leg":{"a":"Poultry Leg","b":"1F357","d":true,"e":true,"f":true,"h":true,"j":["food","meat","drumstick","bird","chicken","turkey"],"k":[6,47],"o":2},"hippopotamus":{"a":"Hippopotamus","b":"1F99B","d":true,"e":true,"f":true,"h":true,"k":[42,45],"o":11},"nose":{"skin_variations":{"1F3FB":{"unified":"1F443-1F3FB","non_qualified":null,"image":"1f443-1f3fb.png","sheet_x":12,"sheet_y":46,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F443-1F3FC","non_qualified":null,"image":"1f443-1f3fc.png","sheet_x":12,"sheet_y":47,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F443-1F3FD","non_qualified":null,"image":"1f443-1f3fd.png","sheet_x":12,"sheet_y":48,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F443-1F3FE","non_qualified":null,"image":"1f443-1f3fe.png","sheet_x":12,"sheet_y":49,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F443-1F3FF","non_qualified":null,"image":"1f443-1f3ff.png","sheet_x":12,"sheet_y":50,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Nose","b":"1F443","d":true,"e":true,"f":true,"h":true,"j":["smell","sniff"],"k":[12,45],"o":2},"arrows_clockwise":{"a":"Clockwise Downwards and Upwards Open Circle Arrows","b":"1F503","d":true,"e":true,"f":true,"h":true,"j":["sync","cycle","round","repeat"],"k":[27,31],"o":2},"flag-bt":{"a":"Bhutan Flag","b":"1F1E7-1F1F9","d":true,"e":true,"f":true,"h":true,"k":[1,7],"o":2},"church":{"a":"Church","b":"26EA","d":true,"e":true,"f":true,"h":true,"j":["building","religion","christ"],"k":[54,10],"o":2},"lipstick":{"a":"Lipstick","b":"1F484","d":true,"e":true,"f":true,"h":true,"j":["female","girl","fashion","woman"],"k":[24,32],"o":2},"lying_face":{"a":"Lying Face","b":"1F925","d":true,"e":true,"f":true,"h":true,"j":["face","lie","pinocchio"],"k":[38,22],"o":4},"arrows_counterclockwise":{"a":"Anticlockwise Downwards and Upwards Open Circle Arrows","b":"1F504","d":true,"e":true,"f":true,"h":true,"j":["blue-square","sync","cycle"],"k":[27,32],"o":2},"flag-bv":{"a":"Bouvet Island Flag","b":"1F1E7-1F1FB","d":true,"e":true,"f":true,"h":true,"k":[1,8],"o":2},"cut_of_meat":{"a":"Cut of Meat","b":"1F969","d":true,"e":true,"f":true,"h":true,"k":[41,56],"o":5},"mosque":{"a":"Mosque","b":"1F54C","d":true,"e":true,"f":true,"h":true,"j":["islam","worship","minaret"],"k":[28,36],"o":2},"ring":{"a":"Ring","b":"1F48D","d":true,"e":true,"f":true,"h":true,"j":["wedding","propose","marriage","valentines","diamond","fashion","jewelry","gem","engagement"],"k":[25,23],"o":2},"brain":{"a":"Brain","b":"1F9E0","d":true,"e":true,"f":true,"h":true,"k":[51,19],"o":5},"table_tennis_paddle_and_ball":{"a":"Table Tennis Paddle and Ball","b":"1F3D3","d":true,"e":true,"f":true,"h":true,"k":[10,38],"o":2},"relieved":{"a":"Relieved Face","b":"1F60C","d":true,"e":true,"f":true,"h":true,"j":["face","relaxed","phew","massage","happiness"],"k":[30,47],"o":2},"mouse":{"a":"Mouse Face","b":"1F42D","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","cheese_wedge","rodent"],"k":[12,17],"o":2},"hindu_temple":{"a":"Hindu Temple","b":"1F6D5","d":true,"e":true,"f":true,"h":true,"k":[36,41],"o":12},"back":{"a":"Back with Leftwards Arrow Above","b":"1F519","d":true,"e":true,"f":true,"h":true,"j":["arrow","words","return"],"k":[27,53],"o":2},"gem":{"a":"Gem Stone","b":"1F48E","d":true,"e":true,"f":true,"h":true,"j":["blue","ruby","diamond","jewelry"],"k":[25,24],"o":2},"pensive":{"a":"Pensive Face","b":"1F614","d":true,"e":true,"f":true,"h":true,"j":["face","sad","depressed","upset"],"k":[30,55],"o":2},"flag-bw":{"a":"Botswana Flag","b":"1F1E7-1F1FC","d":true,"e":true,"f":true,"h":true,"k":[1,9],"o":2},"mouse2":{"a":"Mouse","b":"1F401","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","rodent"],"k":[11,29],"o":2},"bacon":{"a":"Bacon","b":"1F953","d":true,"e":true,"f":true,"h":true,"j":["food","breakfast","pork","pig","meat"],"k":[41,34],"o":4},"tooth":{"a":"Tooth","b":"1F9B7","d":true,"e":true,"f":true,"h":true,"k":[43,17],"o":11},"badminton_racquet_and_shuttlecock":{"a":"Badminton Racquet and Shuttlecock","b":"1F3F8","d":true,"e":true,"f":true,"h":true,"k":[11,20],"o":2},"rat":{"a":"Rat","b":"1F400","d":true,"e":true,"f":true,"h":true,"j":["animal","mouse","rodent"],"k":[11,28],"o":2},"synagogue":{"a":"Synagogue","b":"1F54D","d":true,"e":true,"f":true,"h":true,"j":["judaism","worship","temple","jewish"],"k":[28,37],"o":2},"end":{"a":"End with Leftwards Arrow Above","b":"1F51A","d":true,"e":true,"f":true,"h":true,"j":["words","arrow"],"k":[27,54],"o":2},"bone":{"a":"Bone","b":"1F9B4","d":true,"e":true,"f":true,"h":true,"k":[43,4],"o":11},"boxing_glove":{"a":"Boxing Glove","b":"1F94A","d":true,"e":true,"f":true,"h":true,"j":["sports","fighting"],"k":[41,25],"o":4},"mute":{"a":"Speaker with Cancellation Stroke","b":"1F507","d":true,"e":true,"f":true,"h":true,"j":["sound","volume","silence","quiet"],"k":[27,35],"o":2},"hamburger":{"a":"Hamburger","b":"1F354","d":true,"e":true,"f":true,"h":true,"j":["meat","fast food","beef","cheeseburger","mcdonalds","burger king"],"k":[6,44],"o":2},"flag-by":{"a":"Belarus Flag","b":"1F1E7-1F1FE","d":true,"e":true,"f":true,"h":true,"k":[1,10],"o":2},"sleepy":{"a":"Sleepy Face","b":"1F62A","d":true,"e":true,"f":true,"h":true,"j":["face","tired","rest","nap"],"k":[31,20],"o":2},"on":{"a":"On with Exclamation Mark with Left Right Arrow Above","b":"1F51B","d":true,"e":true,"f":true,"h":true,"j":["arrow","words"],"k":[27,55],"o":2},"martial_arts_uniform":{"a":"Martial Arts Uniform","b":"1F94B","d":true,"e":true,"f":true,"h":true,"j":["judo","karate","taekwondo"],"k":[41,26],"o":4},"speaker":{"a":"Speaker","b":"1F508","d":true,"e":true,"f":true,"h":true,"j":["sound","volume","silence","broadcast"],"k":[27,36],"o":2},"drooling_face":{"a":"Drooling Face","b":"1F924","d":true,"e":true,"f":true,"h":true,"j":["face"],"k":[38,21],"o":4},"eyes":{"a":"Eyes","b":"1F440","d":true,"e":true,"f":true,"h":true,"j":["look","watch","stalk","peek","see"],"k":[12,36],"o":2},"flag-bz":{"a":"Belize Flag","b":"1F1E7-1F1FF","d":true,"e":true,"f":true,"h":true,"k":[1,11],"o":2},"hamster":{"a":"Hamster Face","b":"1F439","d":true,"e":true,"f":true,"h":true,"j":["animal","nature"],"k":[12,29],"o":2},"shinto_shrine":{"a":"Shinto Shrine","b":"26E9-FE0F","c":"26E9","d":true,"e":true,"f":true,"h":true,"j":["temple","japan","kyoto"],"k":[54,9],"o":2},"fries":{"a":"French Fries","b":"1F35F","d":true,"e":true,"f":true,"h":true,"j":["chips","snack","fast food"],"k":[6,55],"o":2},"goal_net":{"a":"Goal Net","b":"1F945","d":true,"e":true,"f":true,"h":true,"j":["sports"],"k":[41,21],"o":4},"kaaba":{"a":"Kaaba","b":"1F54B","d":true,"e":true,"f":true,"h":true,"j":["mecca","mosque","islam"],"k":[28,35],"o":2},"soon":{"a":"Soon with Rightwards Arrow Above","b":"1F51C","d":true,"e":true,"f":true,"h":true,"j":["arrow","words"],"k":[27,56],"o":2},"flag-ca":{"a":"Canada Flag","b":"1F1E8-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[1,12],"o":2},"rabbit":{"a":"Rabbit Face","b":"1F430","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","pet","spring","magic","bunny"],"k":[12,20],"o":2},"eye":{"a":"Eye","b":"1F441-FE0F","c":"1F441","d":true,"e":true,"f":true,"h":true,"j":["face","look","see","watch","stare"],"k":[12,38],"o":2},"sleeping":{"a":"Sleeping Face","b":"1F634","d":true,"e":true,"f":true,"h":true,"j":["face","tired","sleepy","night","zzz"],"k":[31,30],"o":2},"pizza":{"a":"Slice of Pizza","b":"1F355","d":true,"e":true,"f":true,"h":true,"j":["food","party"],"k":[6,45],"o":2},"sound":{"a":"Speaker with One Sound Wave","b":"1F509","d":true,"e":true,"f":true,"h":true,"j":["volume","speaker","broadcast"],"k":[27,37],"o":2},"rabbit2":{"a":"Rabbit","b":"1F407","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","pet","magic","spring"],"k":[11,35],"o":2},"fountain":{"a":"Fountain","b":"26F2","d":true,"e":true,"f":true,"h":true,"j":["photo","summer","water","fresh"],"k":[54,13],"o":2},"golf":{"a":"Flag in Hole","b":"26F3","d":true,"e":true,"f":true,"h":true,"j":["sports","business","flag","hole","summer"],"k":[54,14],"o":2},"top":{"a":"Top with Upwards Arrow Above","b":"1F51D","d":true,"e":true,"f":true,"h":true,"j":["words","blue-square"],"k":[28,0],"o":2},"mask":{"a":"Face with Medical Mask","b":"1F637","d":true,"e":true,"f":true,"h":true,"j":["face","sick","ill","disease"],"k":[31,33],"o":2},"flag-cc":{"a":"Cocos (keeling) Islands Flag","b":"1F1E8-1F1E8","d":true,"e":true,"f":true,"h":true,"k":[1,13],"o":2},"hotdog":{"a":"Hot Dog","b":"1F32D","d":true,"e":true,"f":true,"h":true,"j":["food","frankfurter"],"k":[6,5],"o":2},"loud_sound":{"a":"Speaker with Three Sound Waves","b":"1F50A","d":true,"e":true,"f":true,"h":true,"j":["volume","noise","noisy","speaker","broadcast"],"k":[27,38],"o":2},"tongue":{"a":"Tongue","b":"1F445","d":true,"e":true,"f":true,"h":true,"j":["mouth","playful"],"k":[12,52],"o":2},"place_of_worship":{"a":"Place of Worship","b":"1F6D0","d":true,"e":true,"f":true,"h":true,"j":["religion","church","temple","prayer"],"k":[36,38],"o":2},"ice_skate":{"a":"Ice Skate","b":"26F8-FE0F","c":"26F8","d":true,"e":true,"f":true,"h":true,"j":["sports"],"k":[54,18],"o":2},"sandwich":{"a":"Sandwich","b":"1F96A","d":true,"e":true,"f":true,"h":true,"k":[42,0],"o":5},"chipmunk":{"a":"Chipmunk","b":"1F43F-FE0F","c":"1F43F","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","rodent","squirrel"],"k":[12,35],"o":2},"loudspeaker":{"a":"Public Address Loudspeaker","b":"1F4E2","d":true,"e":true,"f":true,"h":true,"j":["volume","sound"],"k":[26,56],"o":2},"lips":{"a":"Mouth","b":"1F444","d":true,"e":true,"f":true,"h":true,"j":["mouth","kiss"],"k":[12,51],"o":2},"flag-cd":{"a":"Congo - Kinshasa Flag","b":"1F1E8-1F1E9","d":true,"e":true,"f":true,"h":true,"k":[1,14],"o":2},"tent":{"a":"Tent","b":"26FA","d":true,"e":true,"f":true,"h":true,"j":["photo","camping","outdoors"],"k":[54,37],"o":2},"face_with_thermometer":{"a":"Face with Thermometer","b":"1F912","d":true,"e":true,"f":true,"h":true,"j":["sick","temperature","thermometer","cold","fever"],"k":[37,25],"o":2},"taco":{"a":"Taco","b":"1F32E","d":true,"e":true,"f":true,"h":true,"j":["food","mexican"],"k":[6,6],"o":2},"foggy":{"a":"Foggy","b":"1F301","d":true,"e":true,"f":true,"h":true,"j":["photo","mountain"],"k":[5,20],"o":2},"flag-cf":{"a":"Central African Republic Flag","b":"1F1E8-1F1EB","d":true,"e":true,"f":true,"h":true,"k":[1,15],"o":2},"baby":{"skin_variations":{"1F3FB":{"unified":"1F476-1F3FB","non_qualified":null,"image":"1f476-1f3fb.png","sheet_x":23,"sheet_y":5,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F476-1F3FC","non_qualified":null,"image":"1f476-1f3fc.png","sheet_x":23,"sheet_y":6,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F476-1F3FD","non_qualified":null,"image":"1f476-1f3fd.png","sheet_x":23,"sheet_y":7,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F476-1F3FE","non_qualified":null,"image":"1f476-1f3fe.png","sheet_x":23,"sheet_y":8,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F476-1F3FF","non_qualified":null,"image":"1f476-1f3ff.png","sheet_x":23,"sheet_y":9,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Baby","b":"1F476","d":true,"e":true,"f":true,"h":true,"j":["child","boy","girl","toddler"],"k":[23,4],"o":2},"atom_symbol":{"a":"Atom Symbol","b":"269B-FE0F","c":"269B","d":true,"e":true,"f":true,"h":true,"j":["science","physics","chemistry"],"k":[53,48],"o":2},"fishing_pole_and_fish":{"a":"Fishing Pole and Fish","b":"1F3A3","d":true,"e":true,"f":true,"h":true,"j":["food","hobby","summer"],"k":[8,9],"o":2},"hedgehog":{"a":"Hedgehog","b":"1F994","d":true,"e":true,"f":true,"h":true,"k":[42,38],"o":5},"face_with_head_bandage":{"a":"Face with Head-Bandage","b":"1F915","d":true,"e":true,"f":true,"h":true,"j":["injured","clumsy","bandage","hurt"],"k":[37,28],"o":2},"mega":{"a":"Cheering Megaphone","b":"1F4E3","d":true,"e":true,"f":true,"h":true,"j":["sound","speaker","volume"],"k":[27,0],"o":2},"nauseated_face":{"a":"Nauseated Face","b":"1F922","d":true,"e":true,"f":true,"h":true,"j":["face","vomit","gross","green","sick","throw up","ill"],"k":[38,19],"o":4},"child":{"skin_variations":{"1F3FB":{"unified":"1F9D2-1F3FB","non_qualified":null,"image":"1f9d2-1f3fb.png","sheet_x":48,"sheet_y":17,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9D2-1F3FC","non_qualified":null,"image":"1f9d2-1f3fc.png","sheet_x":48,"sheet_y":18,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9D2-1F3FD","non_qualified":null,"image":"1f9d2-1f3fd.png","sheet_x":48,"sheet_y":19,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9D2-1F3FE","non_qualified":null,"image":"1f9d2-1f3fe.png","sheet_x":48,"sheet_y":20,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9D2-1F3FF","non_qualified":null,"image":"1f9d2-1f3ff.png","sheet_x":48,"sheet_y":21,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Child","b":"1F9D2","d":true,"e":true,"f":true,"h":true,"k":[48,16],"o":5},"flag-cg":{"a":"Congo - Brazzaville Flag","b":"1F1E8-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[1,16],"o":2},"bat":{"a":"Bat","b":"1F987","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","blind","vampire"],"k":[42,25],"o":4},"diving_mask":{"a":"Diving Mask","b":"1F93F","d":true,"e":true,"f":true,"h":true,"k":[41,15],"o":12},"burrito":{"a":"Burrito","b":"1F32F","d":true,"e":true,"f":true,"h":true,"j":["food","mexican"],"k":[6,7],"o":2},"postal_horn":{"a":"Postal Horn","b":"1F4EF","d":true,"e":true,"f":true,"h":true,"j":["instrument","music"],"k":[27,12],"o":2},"night_with_stars":{"a":"Night with Stars","b":"1F303","d":true,"e":true,"f":true,"h":true,"j":["evening","city","downtown"],"k":[5,22],"o":2},"om_symbol":{"a":"Om Symbol","b":"1F549-FE0F","c":"1F549","d":true,"e":true,"f":true,"h":true,"k":[28,33],"o":2},"star_of_david":{"a":"Star of David","b":"2721-FE0F","c":"2721","d":true,"e":true,"f":true,"h":true,"j":["judaism"],"k":[55,15],"o":2},"boy":{"skin_variations":{"1F3FB":{"unified":"1F466-1F3FB","non_qualified":null,"image":"1f466-1f3fb.png","sheet_x":14,"sheet_y":27,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F466-1F3FC","non_qualified":null,"image":"1f466-1f3fc.png","sheet_x":14,"sheet_y":28,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F466-1F3FD","non_qualified":null,"image":"1f466-1f3fd.png","sheet_x":14,"sheet_y":29,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F466-1F3FE","non_qualified":null,"image":"1f466-1f3fe.png","sheet_x":14,"sheet_y":30,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F466-1F3FF","non_qualified":null,"image":"1f466-1f3ff.png","sheet_x":14,"sheet_y":31,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Boy","b":"1F466","d":true,"e":true,"f":true,"h":true,"j":["man","male","guy","teenager"],"k":[14,26],"o":2},"bell":{"a":"Bell","b":"1F514","d":true,"e":true,"f":true,"h":true,"j":["sound","notification","christmas","xmas","chime"],"k":[27,48],"o":2},"flag-ch":{"a":"Switzerland Flag","b":"1F1E8-1F1ED","d":true,"e":true,"f":true,"h":true,"k":[1,17],"o":2},"running_shirt_with_sash":{"a":"Running Shirt with Sash","b":"1F3BD","d":true,"e":true,"f":true,"h":true,"j":["play","pageant"],"k":[8,35],"o":2},"stuffed_flatbread":{"a":"Stuffed Flatbread","b":"1F959","d":true,"e":true,"f":true,"h":true,"j":["food","flatbread","stuffed","gyro"],"k":[41,40],"o":4},"bear":{"a":"Bear Face","b":"1F43B","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","wild"],"k":[12,31],"o":2},"cityscape":{"a":"Cityscape","b":"1F3D9-FE0F","c":"1F3D9","d":true,"e":true,"f":true,"h":true,"j":["photo","night life","urban"],"k":[10,44],"o":2},"face_vomiting":{"a":"Face with Open Mouth Vomiting","b":"1F92E","d":true,"e":true,"f":true,"h":true,"k":[38,48],"n":["face_with_open_mouth_vomiting"],"o":5},"wheel_of_dharma":{"a":"Wheel of Dharma","b":"2638-FE0F","c":"2638","d":true,"e":true,"f":true,"h":true,"j":["hinduism","buddhism","sikhism","jainism"],"k":[53,15],"o":2},"ski":{"a":"Ski and Ski Boot","b":"1F3BF","d":true,"e":true,"f":true,"h":true,"j":["sports","winter","cold","snow"],"k":[8,37],"o":2},"girl":{"skin_variations":{"1F3FB":{"unified":"1F467-1F3FB","non_qualified":null,"image":"1f467-1f3fb.png","sheet_x":14,"sheet_y":33,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F467-1F3FC","non_qualified":null,"image":"1f467-1f3fc.png","sheet_x":14,"sheet_y":34,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F467-1F3FD","non_qualified":null,"image":"1f467-1f3fd.png","sheet_x":14,"sheet_y":35,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F467-1F3FE","non_qualified":null,"image":"1f467-1f3fe.png","sheet_x":14,"sheet_y":36,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F467-1F3FF","non_qualified":null,"image":"1f467-1f3ff.png","sheet_x":14,"sheet_y":37,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Girl","b":"1F467","d":true,"e":true,"f":true,"h":true,"j":["female","woman","teenager"],"k":[14,32],"o":2},"falafel":{"a":"Falafel","b":"1F9C6","d":true,"e":true,"f":true,"h":true,"k":[44,14],"o":12},"sneezing_face":{"a":"Sneezing Face","b":"1F927","d":true,"e":true,"f":true,"h":true,"j":["face","gesundheit","sneeze","sick","allergy"],"k":[38,41],"o":4},"no_bell":{"a":"Bell with Cancellation Stroke","b":"1F515","d":true,"e":true,"f":true,"h":true,"j":["sound","volume","mute","quiet","silent"],"k":[27,49],"o":2},"koala":{"a":"Koala","b":"1F428","d":true,"e":true,"f":true,"h":true,"j":["animal","nature"],"k":[12,12],"o":2},"sunrise_over_mountains":{"a":"Sunrise over Mountains","b":"1F304","d":true,"e":true,"f":true,"h":true,"j":["view","vacation","photo"],"k":[5,23],"o":2},"flag-ci":{"a":"Côte D’ivoire Flag","b":"1F1E8-1F1EE","d":true,"e":true,"f":true,"h":true,"k":[1,18],"o":2},"sunrise":{"a":"Sunrise","b":"1F305","d":true,"e":true,"f":true,"h":true,"j":["morning","view","vacation","photo"],"k":[5,24],"o":2},"yin_yang":{"a":"Yin Yang","b":"262F-FE0F","c":"262F","d":true,"e":true,"f":true,"h":true,"j":["balance"],"k":[53,14],"o":2},"adult":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB","non_qualified":null,"image":"1f9d1-1f3fb.png","sheet_x":48,"sheet_y":11,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9D1-1F3FC","non_qualified":null,"image":"1f9d1-1f3fc.png","sheet_x":48,"sheet_y":12,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9D1-1F3FD","non_qualified":null,"image":"1f9d1-1f3fd.png","sheet_x":48,"sheet_y":13,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9D1-1F3FE","non_qualified":null,"image":"1f9d1-1f3fe.png","sheet_x":48,"sheet_y":14,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9D1-1F3FF","non_qualified":null,"image":"1f9d1-1f3ff.png","sheet_x":48,"sheet_y":15,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Adult","b":"1F9D1","d":true,"e":true,"f":true,"h":true,"k":[48,10],"o":5},"hot_face":{"a":"Overheated Face","b":"1F975","d":true,"e":true,"f":true,"h":true,"k":[42,10],"o":11},"musical_score":{"a":"Musical Score","b":"1F3BC","d":true,"e":true,"f":true,"h":true,"j":["treble","clef","compose"],"k":[8,34],"o":2},"sled":{"a":"Sled","b":"1F6F7","d":true,"e":true,"f":true,"h":true,"k":[36,56],"o":5},"egg":{"a":"Egg","b":"1F95A","d":true,"e":true,"f":true,"h":true,"j":["food","chicken","breakfast"],"k":[41,41],"o":4},"panda_face":{"a":"Panda Face","b":"1F43C","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","panda"],"k":[12,32],"o":2},"flag-ck":{"a":"Cook Islands Flag","b":"1F1E8-1F1F0","d":true,"e":true,"f":true,"h":true,"k":[1,19],"o":2},"flag-cl":{"a":"Chile Flag","b":"1F1E8-1F1F1","d":true,"e":true,"f":true,"h":true,"k":[1,20],"o":2},"person_with_blond_hair":{"skin_variations":{"1F3FB":{"unified":"1F471-1F3FB","non_qualified":null,"image":"1f471-1f3fb.png","sheet_x":22,"sheet_y":20,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F471-1F3FC","non_qualified":null,"image":"1f471-1f3fc.png","sheet_x":22,"sheet_y":21,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F471-1F3FD","non_qualified":null,"image":"1f471-1f3fd.png","sheet_x":22,"sheet_y":22,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F471-1F3FE","non_qualified":null,"image":"1f471-1f3fe.png","sheet_x":22,"sheet_y":23,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F471-1F3FF","non_qualified":null,"image":"1f471-1f3ff.png","sheet_x":22,"sheet_y":24,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F471-200D-2642-FE0F","a":"Person with Blond Hair","b":"1F471","d":true,"e":true,"f":true,"h":false,"k":[22,19],"o":2},"sloth":{"a":"Sloth","b":"1F9A5","d":true,"e":true,"f":true,"h":true,"k":[42,53],"o":12},"latin_cross":{"a":"Latin Cross","b":"271D-FE0F","c":"271D","d":true,"e":true,"f":true,"h":true,"j":["christianity"],"k":[55,14],"o":2},"curling_stone":{"a":"Curling Stone","b":"1F94C","d":true,"e":true,"f":true,"h":true,"k":[41,27],"o":5},"cold_face":{"a":"Freezing Face","b":"1F976","d":true,"e":true,"f":true,"h":true,"k":[42,11],"o":11},"fried_egg":{"a":"Cooking","b":"1F373","d":true,"e":true,"f":true,"h":true,"j":["food","breakfast","kitchen","egg"],"k":[7,18],"n":["cooking"],"o":2},"city_sunset":{"a":"Cityscape at Dusk","b":"1F306","d":true,"e":true,"f":true,"h":true,"j":["photo","evening","sky","buildings"],"k":[5,25],"o":2},"musical_note":{"a":"Musical Note","b":"1F3B5","d":true,"e":true,"f":true,"h":true,"j":["score","tone","sound"],"k":[8,27],"o":2},"flag-cm":{"a":"Cameroon Flag","b":"1F1E8-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[1,21],"o":2},"notes":{"a":"Multiple Musical Notes","b":"1F3B6","d":true,"e":true,"f":true,"h":true,"j":["music","score"],"k":[8,28],"o":2},"woozy_face":{"a":"Face with Uneven Eyes and Wavy Mouth","b":"1F974","d":true,"e":true,"f":true,"h":true,"k":[42,9],"o":11},"dart":{"a":"Direct Hit","b":"1F3AF","d":true,"e":true,"f":true,"h":true,"j":["game","play","bar"],"k":[8,21],"o":2},"orthodox_cross":{"a":"Orthodox Cross","b":"2626-FE0F","c":"2626","d":true,"e":true,"f":true,"h":true,"j":["suppedaneum","religion"],"k":[53,11],"o":2},"shallow_pan_of_food":{"a":"Shallow Pan of Food","b":"1F958","d":true,"e":true,"f":true,"h":true,"j":["food","cooking","casserole","paella"],"k":[41,39],"o":4},"otter":{"a":"Otter","b":"1F9A6","d":true,"e":true,"f":true,"h":true,"k":[42,54],"o":12},"man":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB","non_qualified":null,"image":"1f468-1f3fb.png","sheet_x":17,"sheet_y":23,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC","non_qualified":null,"image":"1f468-1f3fc.png","sheet_x":17,"sheet_y":24,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD","non_qualified":null,"image":"1f468-1f3fd.png","sheet_x":17,"sheet_y":25,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE","non_qualified":null,"image":"1f468-1f3fe.png","sheet_x":17,"sheet_y":26,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF","non_qualified":null,"image":"1f468-1f3ff.png","sheet_x":17,"sheet_y":27,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man","b":"1F468","d":true,"e":true,"f":true,"h":true,"j":["mustache","father","dad","guy","classy","sir","moustache"],"k":[17,22],"o":2},"city_sunrise":{"a":"Sunset over Buildings","b":"1F307","d":true,"e":true,"f":true,"h":true,"j":["photo","good morning","dawn"],"k":[5,26],"o":2},"bearded_person":{"skin_variations":{"1F3FB":{"unified":"1F9D4-1F3FB","non_qualified":null,"image":"1f9d4-1f3fb.png","sheet_x":48,"sheet_y":29,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9D4-1F3FC","non_qualified":null,"image":"1f9d4-1f3fc.png","sheet_x":48,"sheet_y":30,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9D4-1F3FD","non_qualified":null,"image":"1f9d4-1f3fd.png","sheet_x":48,"sheet_y":31,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9D4-1F3FE","non_qualified":null,"image":"1f9d4-1f3fe.png","sheet_x":48,"sheet_y":32,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9D4-1F3FF","non_qualified":null,"image":"1f9d4-1f3ff.png","sheet_x":48,"sheet_y":33,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Bearded Person","b":"1F9D4","d":true,"e":true,"f":true,"h":true,"k":[48,28],"o":5},"skunk":{"a":"Skunk","b":"1F9A8","d":true,"e":true,"f":true,"h":true,"k":[42,56],"o":12},"stew":{"a":"Pot of Food","b":"1F372","d":true,"e":true,"f":true,"h":true,"j":["food","meat","soup"],"k":[7,17],"o":2},"cn":{"a":"China Flag","b":"1F1E8-1F1F3","d":true,"e":true,"f":true,"h":true,"j":["china","chinese","prc","flag","country","nation","banner"],"k":[1,22],"n":["flag-cn"],"o":2},"studio_microphone":{"a":"Studio Microphone","b":"1F399-FE0F","c":"1F399","d":true,"e":true,"f":true,"h":true,"j":["sing","recording","artist","talkshow"],"k":[8,1],"o":2},"star_and_crescent":{"a":"Star and Crescent","b":"262A-FE0F","c":"262A","d":true,"e":true,"f":true,"h":true,"j":["islam"],"k":[53,12],"o":2},"yo-yo":{"a":"Yo-Yo","b":"1FA80","d":true,"e":true,"f":true,"h":true,"k":[52,1],"o":12},"bridge_at_night":{"a":"Bridge at Night","b":"1F309","d":true,"e":true,"f":true,"h":true,"j":["photo","sanfrancisco"],"k":[5,28],"o":2},"dizzy_face":{"a":"Dizzy Face","b":"1F635","d":true,"e":true,"f":true,"h":true,"j":["spent","unconscious","xox","dizzy"],"k":[31,31],"o":2},"red_haired_man":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F9B0","non_qualified":null,"image":"1f468-1f3fb-200d-1f9b0.png","sheet_x":16,"sheet_y":24,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F9B0","non_qualified":null,"image":"1f468-1f3fc-200d-1f9b0.png","sheet_x":16,"sheet_y":25,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F9B0","non_qualified":null,"image":"1f468-1f3fd-200d-1f9b0.png","sheet_x":16,"sheet_y":26,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F9B0","non_qualified":null,"image":"1f468-1f3fe-200d-1f9b0.png","sheet_x":16,"sheet_y":27,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F9B0","non_qualified":null,"image":"1f468-1f3ff-200d-1f9b0.png","sheet_x":16,"sheet_y":28,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Red Haired Man","b":"1F468-200D-1F9B0","d":true,"e":true,"f":true,"h":true,"k":[16,23],"o":11},"kite":{"a":"Kite","b":"1FA81","d":true,"e":true,"f":true,"h":true,"k":[52,2],"o":12},"bowl_with_spoon":{"a":"Bowl with Spoon","b":"1F963","d":true,"e":true,"f":true,"h":true,"k":[41,50],"o":5},"flag-co":{"a":"Colombia Flag","b":"1F1E8-1F1F4","d":true,"e":true,"f":true,"h":true,"k":[1,23],"o":2},"peace_symbol":{"a":"Peace Symbol","b":"262E-FE0F","c":"262E","d":true,"e":true,"f":true,"h":true,"j":["hippie"],"k":[53,13],"o":2},"kangaroo":{"a":"Kangaroo","b":"1F998","d":true,"e":true,"f":true,"h":true,"k":[42,42],"o":11},"hotsprings":{"a":"Hot Springs","b":"2668-FE0F","c":"2668","d":true,"e":true,"f":true,"h":true,"j":["bath","warm","relax"],"k":[53,37],"o":2},"exploding_head":{"a":"Shocked Face with Exploding Head","b":"1F92F","d":true,"e":true,"f":true,"h":true,"k":[38,49],"n":["shocked_face_with_exploding_head"],"o":5},"level_slider":{"a":"Level Slider","b":"1F39A-FE0F","c":"1F39A","d":true,"e":true,"f":true,"h":true,"j":["scale"],"k":[8,2],"o":2},"badger":{"a":"Badger","b":"1F9A1","d":true,"e":true,"f":true,"h":true,"k":[42,51],"o":11},"8ball":{"a":"Billiards","b":"1F3B1","d":true,"e":true,"f":true,"h":true,"j":["pool","hobby","game","luck","magic"],"k":[8,23],"o":2},"curly_haired_man":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F9B1","non_qualified":null,"image":"1f468-1f3fb-200d-1f9b1.png","sheet_x":16,"sheet_y":30,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F9B1","non_qualified":null,"image":"1f468-1f3fc-200d-1f9b1.png","sheet_x":16,"sheet_y":31,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F9B1","non_qualified":null,"image":"1f468-1f3fd-200d-1f9b1.png","sheet_x":16,"sheet_y":32,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F9B1","non_qualified":null,"image":"1f468-1f3fe-200d-1f9b1.png","sheet_x":16,"sheet_y":33,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F9B1","non_qualified":null,"image":"1f468-1f3ff-200d-1f9b1.png","sheet_x":16,"sheet_y":34,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Curly Haired Man","b":"1F468-200D-1F9B1","d":true,"e":true,"f":true,"h":true,"k":[16,29],"o":11},"flag-cp":{"a":"Clipperton Island Flag","b":"1F1E8-1F1F5","d":true,"e":true,"f":true,"h":true,"k":[1,24],"o":2},"carousel_horse":{"a":"Carousel Horse","b":"1F3A0","d":true,"e":true,"f":true,"h":true,"j":["photo","carnival"],"k":[8,6],"o":2},"face_with_cowboy_hat":{"a":"Face with Cowboy Hat","b":"1F920","d":true,"e":true,"f":true,"h":true,"k":[38,17],"o":4},"menorah_with_nine_branches":{"a":"Menorah with Nine Branches","b":"1F54E","d":true,"e":true,"f":true,"h":true,"k":[28,38],"o":2},"green_salad":{"a":"Green Salad","b":"1F957","d":true,"e":true,"f":true,"h":true,"j":["food","healthy","lettuce"],"k":[41,38],"o":4},"control_knobs":{"a":"Control Knobs","b":"1F39B-FE0F","c":"1F39B","d":true,"e":true,"f":true,"h":true,"j":["dial"],"k":[8,3],"o":2},"popcorn":{"a":"Popcorn","b":"1F37F","d":true,"e":true,"f":true,"h":true,"j":["food","movie theater","films","snack"],"k":[7,30],"o":2},"six_pointed_star":{"a":"Six Pointed Star with Middle Dot","b":"1F52F","d":true,"e":true,"f":true,"h":true,"j":["purple-square","religion","jewish","hexagram"],"k":[28,18],"o":2},"feet":{"a":"Paw Prints","b":"1F43E","d":true,"e":true,"f":true,"h":true,"k":[12,34],"n":["paw_prints"],"o":2},"ferris_wheel":{"a":"Ferris Wheel","b":"1F3A1","d":true,"e":true,"f":true,"h":true,"j":["photo","carnival","londoneye"],"k":[8,7],"o":2},"microphone":{"a":"Microphone","b":"1F3A4","d":true,"e":true,"f":true,"h":true,"j":["sound","music","PA","sing","talkshow"],"k":[8,10],"o":2},"crystal_ball":{"a":"Crystal Ball","b":"1F52E","d":true,"e":true,"f":true,"h":true,"j":["disco","party","magic","circus","fortune_teller"],"k":[28,17],"o":2},"partying_face":{"a":"Face with Party Horn and Party Hat","b":"1F973","d":true,"e":true,"f":true,"h":true,"k":[42,8],"o":11},"flag-cr":{"a":"Costa Rica Flag","b":"1F1E8-1F1F7","d":true,"e":true,"f":true,"h":true,"k":[1,25],"o":2},"white_haired_man":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F9B3","non_qualified":null,"image":"1f468-1f3fb-200d-1f9b3.png","sheet_x":16,"sheet_y":42,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F9B3","non_qualified":null,"image":"1f468-1f3fc-200d-1f9b3.png","sheet_x":16,"sheet_y":43,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F9B3","non_qualified":null,"image":"1f468-1f3fd-200d-1f9b3.png","sheet_x":16,"sheet_y":44,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F9B3","non_qualified":null,"image":"1f468-1f3fe-200d-1f9b3.png","sheet_x":16,"sheet_y":45,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F9B3","non_qualified":null,"image":"1f468-1f3ff-200d-1f9b3.png","sheet_x":16,"sheet_y":46,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"White Haired Man","b":"1F468-200D-1F9B3","d":true,"e":true,"f":true,"h":true,"k":[16,41],"o":11},"headphones":{"a":"Headphone","b":"1F3A7","d":true,"e":true,"f":true,"h":true,"j":["music","score","gadgets"],"k":[8,13],"o":2},"bald_man":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F9B2","non_qualified":null,"image":"1f468-1f3fb-200d-1f9b2.png","sheet_x":16,"sheet_y":36,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F9B2","non_qualified":null,"image":"1f468-1f3fc-200d-1f9b2.png","sheet_x":16,"sheet_y":37,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F9B2","non_qualified":null,"image":"1f468-1f3fd-200d-1f9b2.png","sheet_x":16,"sheet_y":38,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F9B2","non_qualified":null,"image":"1f468-1f3fe-200d-1f9b2.png","sheet_x":16,"sheet_y":39,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F9B2","non_qualified":null,"image":"1f468-1f3ff-200d-1f9b2.png","sheet_x":16,"sheet_y":40,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Bald Man","b":"1F468-200D-1F9B2","d":true,"e":true,"f":true,"h":true,"k":[16,35],"o":11},"sunglasses":{"a":"Smiling Face with Sunglasses","b":"1F60E","d":true,"e":true,"f":true,"h":true,"j":["face","cool","smile","summer","beach","sunglass"],"k":[30,49],"l":["8)"],"o":2},"butter":{"a":"Butter","b":"1F9C8","d":true,"e":true,"f":true,"h":true,"k":[44,16],"o":12},"roller_coaster":{"a":"Roller Coaster","b":"1F3A2","d":true,"e":true,"f":true,"h":true,"j":["carnival","playground","photo","fun"],"k":[8,8],"o":2},"turkey":{"a":"Turkey","b":"1F983","d":true,"e":true,"f":true,"h":true,"j":["animal","bird"],"k":[42,21],"o":2},"nazar_amulet":{"a":"Nazar Amulet","b":"1F9FF","d":true,"e":true,"f":true,"h":true,"k":[51,50],"o":11},"flag-cu":{"a":"Cuba Flag","b":"1F1E8-1F1FA","d":true,"e":true,"f":true,"h":true,"k":[1,26],"o":2},"aries":{"a":"Aries","b":"2648","d":true,"e":true,"f":true,"h":true,"j":["sign","purple-square","zodiac","astrology"],"k":[53,20],"o":2},"flag-cv":{"a":"Cape Verde Flag","b":"1F1E8-1F1FB","d":true,"e":true,"f":true,"h":true,"k":[1,27],"o":2},"barber":{"a":"Barber Pole","b":"1F488","d":true,"e":true,"f":true,"h":true,"j":["hair","salon","style"],"k":[25,18],"o":2},"taurus":{"a":"Taurus","b":"2649","d":true,"e":true,"f":true,"h":true,"j":["purple-square","sign","zodiac","astrology"],"k":[53,21],"o":2},"salt":{"a":"Salt Shaker","b":"1F9C2","d":true,"e":true,"f":true,"h":true,"k":[44,10],"o":11},"woman":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB","non_qualified":null,"image":"1f469-1f3fb.png","sheet_x":20,"sheet_y":10,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC","non_qualified":null,"image":"1f469-1f3fc.png","sheet_x":20,"sheet_y":11,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD","non_qualified":null,"image":"1f469-1f3fd.png","sheet_x":20,"sheet_y":12,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE","non_qualified":null,"image":"1f469-1f3fe.png","sheet_x":20,"sheet_y":13,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF","non_qualified":null,"image":"1f469-1f3ff.png","sheet_x":20,"sheet_y":14,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman","b":"1F469","d":true,"e":true,"f":true,"h":true,"j":["female","girls","lady"],"k":[20,9],"o":2},"video_game":{"a":"Video Game","b":"1F3AE","d":true,"e":true,"f":true,"h":true,"j":["play","console","PS4","controller"],"k":[8,20],"o":2},"chicken":{"a":"Chicken","b":"1F414","d":true,"e":true,"f":true,"h":true,"j":["animal","cluck","nature","bird"],"k":[11,48],"o":2},"radio":{"a":"Radio","b":"1F4FB","d":true,"e":true,"f":true,"h":true,"j":["communication","music","podcast","program"],"k":[27,24],"o":2},"nerd_face":{"a":"Nerd Face","b":"1F913","d":true,"e":true,"f":true,"h":true,"j":["face","nerdy","geek","dork"],"k":[37,26],"o":2},"red_haired_woman":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F9B0","non_qualified":null,"image":"1f469-1f3fb-200d-1f9b0.png","sheet_x":19,"sheet_y":9,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F9B0","non_qualified":null,"image":"1f469-1f3fc-200d-1f9b0.png","sheet_x":19,"sheet_y":10,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F9B0","non_qualified":null,"image":"1f469-1f3fd-200d-1f9b0.png","sheet_x":19,"sheet_y":11,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F9B0","non_qualified":null,"image":"1f469-1f3fe-200d-1f9b0.png","sheet_x":19,"sheet_y":12,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F9B0","non_qualified":null,"image":"1f469-1f3ff-200d-1f9b0.png","sheet_x":19,"sheet_y":13,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Red Haired Woman","b":"1F469-200D-1F9B0","d":true,"e":true,"f":true,"h":true,"k":[19,8],"o":11},"circus_tent":{"a":"Circus Tent","b":"1F3AA","d":true,"e":true,"f":true,"h":true,"j":["festival","carnival","party"],"k":[8,16],"o":2},"face_with_monocle":{"a":"Face with Monocle","b":"1F9D0","d":true,"e":true,"f":true,"h":true,"k":[45,16],"o":5},"canned_food":{"a":"Canned Food","b":"1F96B","d":true,"e":true,"f":true,"h":true,"k":[42,1],"o":5},"flag-cw":{"a":"Curaçao Flag","b":"1F1E8-1F1FC","d":true,"e":true,"f":true,"h":true,"k":[1,28],"o":2},"gemini":{"a":"Gemini","b":"264A","d":true,"e":true,"f":true,"h":true,"j":["sign","zodiac","purple-square","astrology"],"k":[53,22],"o":2},"saxophone":{"a":"Saxophone","b":"1F3B7","d":true,"e":true,"f":true,"h":true,"j":["music","instrument","jazz","blues"],"k":[8,29],"o":2},"rooster":{"a":"Rooster","b":"1F413","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","chicken"],"k":[11,47],"o":2},"joystick":{"a":"Joystick","b":"1F579-FE0F","c":"1F579","d":true,"e":true,"f":true,"h":true,"j":["game","play"],"k":[29,36],"o":2},"guitar":{"a":"Guitar","b":"1F3B8","d":true,"e":true,"f":true,"h":true,"j":["music","instrument"],"k":[8,30],"o":2},"slot_machine":{"a":"Slot Machine","b":"1F3B0","d":true,"e":true,"f":true,"h":true,"j":["bet","gamble","vegas","fruit machine","luck","casino"],"k":[8,22],"o":2},"bento":{"a":"Bento Box","b":"1F371","d":true,"e":true,"f":true,"h":true,"j":["food","japanese","box"],"k":[7,16],"o":2},"steam_locomotive":{"a":"Steam Locomotive","b":"1F682","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle","train"],"k":[34,1],"o":2},"confused":{"a":"Confused Face","b":"1F615","d":true,"e":true,"f":true,"h":true,"j":["face","indifference","huh","weird","hmmm",":/"],"k":[30,56],"l":[":\\",":-\\",":/",":-/"],"o":2},"flag-cx":{"a":"Christmas Island Flag","b":"1F1E8-1F1FD","d":true,"e":true,"f":true,"h":true,"k":[1,29],"o":2},"hatching_chick":{"a":"Hatching Chick","b":"1F423","d":true,"e":true,"f":true,"h":true,"j":["animal","chicken","egg","born","baby","bird"],"k":[12,7],"o":2},"cancer":{"a":"Cancer","b":"264B","d":true,"e":true,"f":true,"h":true,"j":["sign","zodiac","purple-square","astrology"],"k":[53,23],"o":2},"red_haired_person":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F9B0","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f9b0.png","sheet_x":47,"sheet_y":14,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F9B0","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f9b0.png","sheet_x":47,"sheet_y":15,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F9B0","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f9b0.png","sheet_x":47,"sheet_y":16,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F9B0","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f9b0.png","sheet_x":47,"sheet_y":17,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F9B0","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f9b0.png","sheet_x":47,"sheet_y":18,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Red Haired Person","b":"1F9D1-200D-1F9B0","d":true,"e":false,"f":false,"h":false,"k":[47,13],"o":12},"flag-cy":{"a":"Cyprus Flag","b":"1F1E8-1F1FE","d":true,"e":true,"f":true,"h":true,"k":[1,30],"o":2},"worried":{"a":"Worried Face","b":"1F61F","d":true,"e":true,"f":true,"h":true,"j":["face","concern","nervous",":("],"k":[31,9],"o":2},"railway_car":{"a":"Railway Car","b":"1F683","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle"],"k":[34,2],"o":2},"leo":{"a":"Leo","b":"264C","d":true,"e":true,"f":true,"h":true,"j":["sign","purple-square","zodiac","astrology"],"k":[53,24],"o":2},"curly_haired_woman":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F9B1","non_qualified":null,"image":"1f469-1f3fb-200d-1f9b1.png","sheet_x":19,"sheet_y":15,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F9B1","non_qualified":null,"image":"1f469-1f3fc-200d-1f9b1.png","sheet_x":19,"sheet_y":16,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F9B1","non_qualified":null,"image":"1f469-1f3fd-200d-1f9b1.png","sheet_x":19,"sheet_y":17,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F9B1","non_qualified":null,"image":"1f469-1f3fe-200d-1f9b1.png","sheet_x":19,"sheet_y":18,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F9B1","non_qualified":null,"image":"1f469-1f3ff-200d-1f9b1.png","sheet_x":19,"sheet_y":19,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Curly Haired Woman","b":"1F469-200D-1F9B1","d":true,"e":true,"f":true,"h":true,"k":[19,14],"o":11},"baby_chick":{"a":"Baby Chick","b":"1F424","d":true,"e":true,"f":true,"h":true,"j":["animal","chicken","bird"],"k":[12,8],"o":2},"musical_keyboard":{"a":"Musical Keyboard","b":"1F3B9","d":true,"e":true,"f":true,"h":true,"j":["piano","instrument","compose"],"k":[8,31],"o":2},"game_die":{"a":"Game Die","b":"1F3B2","d":true,"e":true,"f":true,"h":true,"j":["dice","random","tabletop","play","luck"],"k":[8,24],"o":2},"rice_cracker":{"a":"Rice Cracker","b":"1F358","d":true,"e":true,"f":true,"h":true,"j":["food","japanese"],"k":[6,48],"o":2},"virgo":{"a":"Virgo","b":"264D","d":true,"e":true,"f":true,"h":true,"j":["sign","zodiac","purple-square","astrology"],"k":[53,25],"o":2},"flag-cz":{"a":"Czechia Flag","b":"1F1E8-1F1FF","d":true,"e":true,"f":true,"h":true,"k":[1,31],"o":2},"curly_haired_person":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F9B1","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f9b1.png","sheet_x":47,"sheet_y":20,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F9B1","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f9b1.png","sheet_x":47,"sheet_y":21,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F9B1","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f9b1.png","sheet_x":47,"sheet_y":22,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F9B1","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f9b1.png","sheet_x":47,"sheet_y":23,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F9B1","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f9b1.png","sheet_x":47,"sheet_y":24,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Curly Haired Person","b":"1F9D1-200D-1F9B1","d":true,"e":false,"f":false,"h":false,"k":[47,19],"o":12},"rice_ball":{"a":"Rice Ball","b":"1F359","d":true,"e":true,"f":true,"h":true,"j":["food","japanese"],"k":[6,49],"o":2},"hatched_chick":{"a":"Front-Facing Baby Chick","b":"1F425","d":true,"e":true,"f":true,"h":true,"j":["animal","chicken","baby","bird"],"k":[12,9],"o":2},"jigsaw":{"a":"Jigsaw Puzzle Piece","b":"1F9E9","d":true,"e":true,"f":true,"h":true,"k":[51,28],"o":11},"trumpet":{"a":"Trumpet","b":"1F3BA","d":true,"e":true,"f":true,"h":true,"j":["music","brass"],"k":[8,32],"o":2},"slightly_frowning_face":{"a":"Slightly Frowning Face","b":"1F641","d":true,"e":true,"f":true,"h":true,"j":["face","frowning","disappointed","sad","upset"],"k":[31,43],"o":2},"bullettrain_side":{"a":"High-Speed Train","b":"1F684","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle"],"k":[34,3],"o":2},"libra":{"a":"Libra","b":"264E","d":true,"e":true,"f":true,"h":true,"j":["sign","purple-square","zodiac","astrology"],"k":[53,26],"o":2},"de":{"a":"Germany Flag","b":"1F1E9-1F1EA","d":true,"e":true,"f":true,"h":true,"j":["german","nation","flag","country","banner"],"k":[1,32],"n":["flag-de"],"o":2},"rice":{"a":"Cooked Rice","b":"1F35A","d":true,"e":true,"f":true,"h":true,"j":["food","china","asian"],"k":[6,50],"o":2},"violin":{"a":"Violin","b":"1F3BB","d":true,"e":true,"f":true,"h":true,"j":["music","instrument","orchestra","symphony"],"k":[8,33],"o":2},"white_haired_woman":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F9B3","non_qualified":null,"image":"1f469-1f3fb-200d-1f9b3.png","sheet_x":19,"sheet_y":27,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F9B3","non_qualified":null,"image":"1f469-1f3fc-200d-1f9b3.png","sheet_x":19,"sheet_y":28,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F9B3","non_qualified":null,"image":"1f469-1f3fd-200d-1f9b3.png","sheet_x":19,"sheet_y":29,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F9B3","non_qualified":null,"image":"1f469-1f3fe-200d-1f9b3.png","sheet_x":19,"sheet_y":30,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F9B3","non_qualified":null,"image":"1f469-1f3ff-200d-1f9b3.png","sheet_x":19,"sheet_y":31,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"White Haired Woman","b":"1F469-200D-1F9B3","d":true,"e":true,"f":true,"h":true,"k":[19,26],"o":11},"bird":{"a":"Bird","b":"1F426","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","fly","tweet","spring"],"k":[12,10],"o":2},"white_frowning_face":{"a":"White Frowning Face","b":"2639-FE0F","c":"2639","d":true,"e":true,"f":true,"h":true,"k":[53,16],"o":2},"bullettrain_front":{"a":"High-Speed Train with Bullet Nose","b":"1F685","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle","speed","fast","public","travel"],"k":[34,4],"o":2},"teddy_bear":{"a":"Teddy Bear","b":"1F9F8","d":true,"e":true,"f":true,"h":true,"k":[51,43],"o":11},"white_haired_person":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F9B3","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f9b3.png","sheet_x":47,"sheet_y":32,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F9B3","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f9b3.png","sheet_x":47,"sheet_y":33,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F9B3","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f9b3.png","sheet_x":47,"sheet_y":34,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F9B3","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f9b3.png","sheet_x":47,"sheet_y":35,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F9B3","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f9b3.png","sheet_x":47,"sheet_y":36,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"White Haired Person","b":"1F9D1-200D-1F9B3","d":true,"e":false,"f":false,"h":false,"k":[47,31],"o":12},"spades":{"a":"Black Spade Suit","b":"2660-FE0F","c":"2660","d":true,"e":true,"f":true,"h":true,"j":["poker","cards","suits","magic"],"k":[53,33],"o":2},"banjo":{"a":"Banjo","b":"1FA95","d":true,"e":true,"f":true,"h":true,"k":[52,9],"o":12},"train2":{"a":"Train","b":"1F686","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle"],"k":[34,5],"o":2},"scorpius":{"a":"Scorpius","b":"264F","d":true,"e":true,"f":true,"h":true,"j":["sign","zodiac","purple-square","astrology","scorpio"],"k":[53,27],"o":2},"curry":{"a":"Curry and Rice","b":"1F35B","d":true,"e":true,"f":true,"h":true,"j":["food","spicy","hot","indian"],"k":[6,51],"o":2},"open_mouth":{"a":"Face with Open Mouth","b":"1F62E","d":true,"e":true,"f":true,"h":true,"j":["face","surprise","impressed","wow","whoa",":O"],"k":[31,24],"l":[":o",":-o",":O",":-O"],"o":2},"flag-dg":{"a":"Diego Garcia Flag","b":"1F1E9-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[1,33],"o":2},"penguin":{"a":"Penguin","b":"1F427","d":true,"e":true,"f":true,"h":true,"j":["animal","nature"],"k":[12,11],"o":2},"hearts":{"a":"Black Heart Suit","b":"2665-FE0F","c":"2665","d":true,"e":true,"f":true,"h":true,"j":["poker","cards","magic","suits"],"k":[53,35],"o":2},"ramen":{"a":"Steaming Bowl","b":"1F35C","d":true,"e":true,"f":true,"h":true,"j":["food","japanese","noodle","chopsticks"],"k":[6,52],"o":2},"sagittarius":{"a":"Sagittarius","b":"2650","d":true,"e":true,"f":true,"h":true,"j":["sign","zodiac","purple-square","astrology"],"k":[53,28],"o":2},"bald_woman":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F9B2","non_qualified":null,"image":"1f469-1f3fb-200d-1f9b2.png","sheet_x":19,"sheet_y":21,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F9B2","non_qualified":null,"image":"1f469-1f3fc-200d-1f9b2.png","sheet_x":19,"sheet_y":22,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F9B2","non_qualified":null,"image":"1f469-1f3fd-200d-1f9b2.png","sheet_x":19,"sheet_y":23,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F9B2","non_qualified":null,"image":"1f469-1f3fe-200d-1f9b2.png","sheet_x":19,"sheet_y":24,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F9B2","non_qualified":null,"image":"1f469-1f3ff-200d-1f9b2.png","sheet_x":19,"sheet_y":25,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Bald Woman","b":"1F469-200D-1F9B2","d":true,"e":true,"f":true,"h":true,"k":[19,20],"o":11},"dove_of_peace":{"a":"Dove of Peace","b":"1F54A-FE0F","c":"1F54A","d":true,"e":true,"f":true,"h":true,"k":[28,34],"o":2},"hushed":{"a":"Hushed Face","b":"1F62F","d":true,"e":true,"f":true,"h":true,"j":["face","woo","shh"],"k":[31,25],"o":2},"metro":{"a":"Metro","b":"1F687","d":true,"e":true,"f":true,"h":true,"j":["transportation","blue-square","mrt","underground","tube"],"k":[34,6],"o":2},"flag-dj":{"a":"Djibouti Flag","b":"1F1E9-1F1EF","d":true,"e":true,"f":true,"h":true,"k":[1,34],"o":2},"drum_with_drumsticks":{"a":"Drum with Drumsticks","b":"1F941","d":true,"e":true,"f":true,"h":true,"k":[41,17],"o":4},"spaghetti":{"a":"Spaghetti","b":"1F35D","d":true,"e":true,"f":true,"h":true,"j":["food","italian","noodle"],"k":[6,53],"o":2},"eagle":{"a":"Eagle","b":"1F985","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","bird"],"k":[42,23],"o":4},"astonished":{"a":"Astonished Face","b":"1F632","d":true,"e":true,"f":true,"h":true,"j":["face","xox","surprised","poisoned"],"k":[31,28],"o":2},"capricorn":{"a":"Capricorn","b":"2651","d":true,"e":true,"f":true,"h":true,"j":["sign","zodiac","purple-square","astrology"],"k":[53,29],"o":2},"light_rail":{"a":"Light Rail","b":"1F688","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle"],"k":[34,7],"o":2},"flag-dk":{"a":"Denmark Flag","b":"1F1E9-1F1F0","d":true,"e":true,"f":true,"h":true,"k":[1,35],"o":2},"iphone":{"a":"Mobile Phone","b":"1F4F1","d":true,"e":true,"f":true,"h":true,"j":["technology","apple","gadgets","dial"],"k":[27,14],"o":2},"bald_person":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F9B2","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f9b2.png","sheet_x":47,"sheet_y":26,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F9B2","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f9b2.png","sheet_x":47,"sheet_y":27,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F9B2","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f9b2.png","sheet_x":47,"sheet_y":28,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F9B2","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f9b2.png","sheet_x":47,"sheet_y":29,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F9B2","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f9b2.png","sheet_x":47,"sheet_y":30,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Bald Person","b":"1F9D1-200D-1F9B2","d":true,"e":false,"f":false,"h":false,"k":[47,25],"o":12},"diamonds":{"a":"Black Diamond Suit","b":"2666-FE0F","c":"2666","d":true,"e":true,"f":true,"h":true,"j":["poker","cards","magic","suits"],"k":[53,36],"o":2},"clubs":{"a":"Black Club Suit","b":"2663-FE0F","c":"2663","d":true,"e":true,"f":true,"h":true,"j":["poker","cards","magic","suits"],"k":[53,34],"o":2},"aquarius":{"a":"Aquarius","b":"2652","d":true,"e":true,"f":true,"h":true,"j":["sign","purple-square","zodiac","astrology"],"k":[53,30],"o":2},"sweet_potato":{"a":"Roasted Sweet Potato","b":"1F360","d":true,"e":true,"f":true,"h":true,"j":["food","nature"],"k":[6,56],"o":2},"flag-dm":{"a":"Dominica Flag","b":"1F1E9-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[1,36],"o":2},"duck":{"a":"Duck","b":"1F986","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","bird","mallard"],"k":[42,24],"o":4},"calling":{"a":"Mobile Phone with Rightwards Arrow at Left","b":"1F4F2","d":true,"e":true,"f":true,"h":true,"j":["iphone","incoming"],"k":[27,15],"o":2},"station":{"a":"Station","b":"1F689","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle","public"],"k":[34,8],"o":2},"blond-haired-woman":{"skin_variations":{"1F3FB":{"unified":"1F471-1F3FB-200D-2640-FE0F","non_qualified":"1F471-1F3FB-200D-2640","image":"1f471-1f3fb-200d-2640-fe0f.png","sheet_x":22,"sheet_y":8,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F471-1F3FC-200D-2640-FE0F","non_qualified":"1F471-1F3FC-200D-2640","image":"1f471-1f3fc-200d-2640-fe0f.png","sheet_x":22,"sheet_y":9,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F471-1F3FD-200D-2640-FE0F","non_qualified":"1F471-1F3FD-200D-2640","image":"1f471-1f3fd-200d-2640-fe0f.png","sheet_x":22,"sheet_y":10,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F471-1F3FE-200D-2640-FE0F","non_qualified":"1F471-1F3FE-200D-2640","image":"1f471-1f3fe-200d-2640-fe0f.png","sheet_x":22,"sheet_y":11,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F471-1F3FF-200D-2640-FE0F","non_qualified":"1F471-1F3FF-200D-2640","image":"1f471-1f3ff-200d-2640-fe0f.png","sheet_x":22,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Blond Haired Woman","b":"1F471-200D-2640-FE0F","c":"1F471-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[22,7],"o":4},"flushed":{"a":"Flushed Face","b":"1F633","d":true,"e":true,"f":true,"h":true,"j":["face","blush","shy","flattered"],"k":[31,29],"o":2},"pisces":{"a":"Pisces","b":"2653","d":true,"e":true,"f":true,"h":true,"j":["purple-square","sign","zodiac","astrology"],"k":[53,31],"o":2},"chess_pawn":{"a":"Chess Pawn","b":"265F-FE0F","c":"265F","d":true,"e":true,"f":true,"h":true,"k":[53,32],"o":11},"blond-haired-man":{"skin_variations":{"1F3FB":{"unified":"1F471-1F3FB-200D-2642-FE0F","non_qualified":"1F471-1F3FB-200D-2642","image":"1f471-1f3fb-200d-2642-fe0f.png","sheet_x":22,"sheet_y":14,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F471-1F3FC-200D-2642-FE0F","non_qualified":"1F471-1F3FC-200D-2642","image":"1f471-1f3fc-200d-2642-fe0f.png","sheet_x":22,"sheet_y":15,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F471-1F3FD-200D-2642-FE0F","non_qualified":"1F471-1F3FD-200D-2642","image":"1f471-1f3fd-200d-2642-fe0f.png","sheet_x":22,"sheet_y":16,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F471-1F3FE-200D-2642-FE0F","non_qualified":"1F471-1F3FE-200D-2642","image":"1f471-1f3fe-200d-2642-fe0f.png","sheet_x":22,"sheet_y":17,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F471-1F3FF-200D-2642-FE0F","non_qualified":"1F471-1F3FF-200D-2642","image":"1f471-1f3ff-200d-2642-fe0f.png","sheet_x":22,"sheet_y":18,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F471","a":"Blond Haired Man","b":"1F471-200D-2642-FE0F","c":"1F471-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[22,13],"o":4},"phone":{"a":"Black Telephone","b":"260E-FE0F","c":"260E","d":true,"e":true,"f":true,"h":true,"j":["technology","communication","dial","telephone"],"k":[52,54],"n":["telephone"],"o":2},"oden":{"a":"Oden","b":"1F362","d":true,"e":true,"f":true,"h":true,"j":["food","japanese"],"k":[7,1],"o":2},"flag-do":{"a":"Dominican Republic Flag","b":"1F1E9-1F1F4","d":true,"e":true,"f":true,"h":true,"k":[1,37],"o":2},"tram":{"a":"Tram","b":"1F68A","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle"],"k":[34,9],"o":2},"swan":{"a":"Swan","b":"1F9A2","d":true,"e":true,"f":true,"h":true,"k":[42,52],"o":11},"pleading_face":{"a":"Face with Pleading Eyes","b":"1F97A","d":true,"e":true,"f":true,"h":true,"k":[42,12],"o":11},"flag-dz":{"a":"Algeria Flag","b":"1F1E9-1F1FF","d":true,"e":true,"f":true,"h":true,"k":[1,38],"o":2},"monorail":{"a":"Monorail","b":"1F69D","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle"],"k":[34,28],"o":2},"owl":{"a":"Owl","b":"1F989","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","bird","hoot"],"k":[42,27],"o":4},"sushi":{"a":"Sushi","b":"1F363","d":true,"e":true,"f":true,"h":true,"j":["food","fish","japanese","rice"],"k":[7,2],"o":2},"telephone_receiver":{"a":"Telephone Receiver","b":"1F4DE","d":true,"e":true,"f":true,"h":true,"j":["technology","communication","dial"],"k":[26,52],"o":2},"black_joker":{"a":"Playing Card Black Joker","b":"1F0CF","d":true,"e":true,"f":true,"h":true,"j":["poker","cards","game","play","magic"],"k":[0,15],"o":2},"ophiuchus":{"a":"Ophiuchus","b":"26CE","d":true,"e":true,"f":true,"h":true,"j":["sign","purple-square","constellation","astrology"],"k":[54,4],"o":2},"frowning":{"a":"Frowning Face with Open Mouth","b":"1F626","d":true,"e":true,"f":true,"h":true,"j":["face","aw","what"],"k":[31,16],"o":2},"older_adult":{"skin_variations":{"1F3FB":{"unified":"1F9D3-1F3FB","non_qualified":null,"image":"1f9d3-1f3fb.png","sheet_x":48,"sheet_y":23,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9D3-1F3FC","non_qualified":null,"image":"1f9d3-1f3fc.png","sheet_x":48,"sheet_y":24,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9D3-1F3FD","non_qualified":null,"image":"1f9d3-1f3fd.png","sheet_x":48,"sheet_y":25,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9D3-1F3FE","non_qualified":null,"image":"1f9d3-1f3fe.png","sheet_x":48,"sheet_y":26,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9D3-1F3FF","non_qualified":null,"image":"1f9d3-1f3ff.png","sheet_x":48,"sheet_y":27,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Older Adult","b":"1F9D3","d":true,"e":true,"f":true,"h":true,"k":[48,22],"o":5},"flag-ea":{"a":"Ceuta & Melilla Flag","b":"1F1EA-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[1,39],"o":2},"flamingo":{"a":"Flamingo","b":"1F9A9","d":true,"e":true,"f":true,"h":true,"k":[43,0],"o":12},"pager":{"a":"Pager","b":"1F4DF","d":true,"e":true,"f":true,"h":true,"j":["bbcall","oldschool","90s"],"k":[26,53],"o":2},"mountain_railway":{"a":"Mountain Railway","b":"1F69E","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle"],"k":[34,29],"o":2},"mahjong":{"a":"Mahjong Tile Red Dragon","b":"1F004","d":true,"e":true,"f":true,"h":true,"j":["game","play","chinese","kanji"],"k":[0,14],"o":2},"older_man":{"skin_variations":{"1F3FB":{"unified":"1F474-1F3FB","non_qualified":null,"image":"1f474-1f3fb.png","sheet_x":22,"sheet_y":50,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F474-1F3FC","non_qualified":null,"image":"1f474-1f3fc.png","sheet_x":22,"sheet_y":51,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F474-1F3FD","non_qualified":null,"image":"1f474-1f3fd.png","sheet_x":22,"sheet_y":52,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F474-1F3FE","non_qualified":null,"image":"1f474-1f3fe.png","sheet_x":22,"sheet_y":53,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F474-1F3FF","non_qualified":null,"image":"1f474-1f3ff.png","sheet_x":22,"sheet_y":54,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Older Man","b":"1F474","d":true,"e":true,"f":true,"h":true,"j":["human","male","men","old","elder","senior"],"k":[22,49],"o":2},"twisted_rightwards_arrows":{"a":"Twisted Rightwards Arrows","b":"1F500","d":true,"e":true,"f":true,"h":true,"j":["blue-square","shuffle","music","random"],"k":[27,28],"o":2},"fried_shrimp":{"a":"Fried Shrimp","b":"1F364","d":true,"e":true,"f":true,"h":true,"j":["food","animal","appetizer","summer"],"k":[7,3],"o":2},"anguished":{"a":"Anguished Face","b":"1F627","d":true,"e":true,"f":true,"h":true,"j":["face","stunned","nervous"],"k":[31,17],"l":["D:"],"o":2},"repeat":{"a":"Clockwise Rightwards and Leftwards Open Circle Arrows","b":"1F501","d":true,"e":true,"f":true,"h":true,"j":["loop","record"],"k":[27,29],"o":2},"fish_cake":{"a":"Fish Cake with Swirl Design","b":"1F365","d":true,"e":true,"f":true,"h":true,"j":["food","japan","sea","beach","narutomaki","pink","swirl","kamaboko","surimi","ramen"],"k":[7,4],"o":2},"fax":{"a":"Fax Machine","b":"1F4E0","d":true,"e":true,"f":true,"h":true,"j":["communication","technology"],"k":[26,54],"o":2},"older_woman":{"skin_variations":{"1F3FB":{"unified":"1F475-1F3FB","non_qualified":null,"image":"1f475-1f3fb.png","sheet_x":22,"sheet_y":56,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F475-1F3FC","non_qualified":null,"image":"1f475-1f3fc.png","sheet_x":23,"sheet_y":0,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F475-1F3FD","non_qualified":null,"image":"1f475-1f3fd.png","sheet_x":23,"sheet_y":1,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F475-1F3FE","non_qualified":null,"image":"1f475-1f3fe.png","sheet_x":23,"sheet_y":2,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F475-1F3FF","non_qualified":null,"image":"1f475-1f3ff.png","sheet_x":23,"sheet_y":3,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Older Woman","b":"1F475","d":true,"e":true,"f":true,"h":true,"j":["human","female","women","lady","old","elder","senior"],"k":[22,55],"o":2},"flag-ec":{"a":"Ecuador Flag","b":"1F1EA-1F1E8","d":true,"e":true,"f":true,"h":true,"k":[1,40],"o":2},"peacock":{"a":"Peacock","b":"1F99A","d":true,"e":true,"f":true,"h":true,"k":[42,44],"o":11},"fearful":{"a":"Fearful Face","b":"1F628","d":true,"e":true,"f":true,"h":true,"j":["face","scared","terrified","nervous","oops","huh"],"k":[31,18],"o":2},"train":{"a":"Tram Car","b":"1F68B","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle","carriage","public","travel"],"k":[34,10],"o":2},"flower_playing_cards":{"a":"Flower Playing Cards","b":"1F3B4","d":true,"e":true,"f":true,"h":true,"j":["game","sunset","red"],"k":[8,26],"o":2},"repeat_one":{"a":"Clockwise Rightwards and Leftwards Open Circle Arrows with Circled One Overlay","b":"1F502","d":true,"e":true,"f":true,"h":true,"j":["blue-square","loop"],"k":[27,30],"o":2},"moon_cake":{"a":"Moon Cake","b":"1F96E","d":true,"e":true,"f":true,"h":true,"k":[42,4],"o":11},"performing_arts":{"a":"Performing Arts","b":"1F3AD","d":true,"e":true,"f":true,"h":true,"j":["acting","theater","drama"],"k":[8,19],"o":2},"cold_sweat":{"a":"Face with Open Mouth and Cold Sweat","b":"1F630","d":true,"e":true,"f":true,"h":true,"j":["face","nervous","sweat"],"k":[31,26],"o":2},"person_frowning":{"skin_variations":{"1F3FB":{"unified":"1F64D-1F3FB","non_qualified":null,"image":"1f64d-1f3fb.png","sheet_x":33,"sheet_y":27,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F64D-1F3FC","non_qualified":null,"image":"1f64d-1f3fc.png","sheet_x":33,"sheet_y":28,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F64D-1F3FD","non_qualified":null,"image":"1f64d-1f3fd.png","sheet_x":33,"sheet_y":29,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F64D-1F3FE","non_qualified":null,"image":"1f64d-1f3fe.png","sheet_x":33,"sheet_y":30,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F64D-1F3FF","non_qualified":null,"image":"1f64d-1f3ff.png","sheet_x":33,"sheet_y":31,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F64D-200D-2640-FE0F","a":"Person Frowning","b":"1F64D","d":true,"e":true,"f":true,"h":false,"k":[33,26],"o":2},"flag-ee":{"a":"Estonia Flag","b":"1F1EA-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[1,41],"o":2},"battery":{"a":"Battery","b":"1F50B","d":true,"e":true,"f":true,"h":true,"j":["power","energy","sustain"],"k":[27,39],"o":2},"parrot":{"a":"Parrot","b":"1F99C","d":true,"e":true,"f":true,"h":true,"k":[42,46],"o":11},"bus":{"a":"Bus","b":"1F68C","d":true,"e":true,"f":true,"h":true,"j":["car","vehicle","transportation"],"k":[34,11],"o":2},"flag-eg":{"a":"Egypt Flag","b":"1F1EA-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[1,42],"o":2},"arrow_forward":{"a":"Black Right-Pointing Triangle","b":"25B6-FE0F","c":"25B6","d":true,"e":true,"f":true,"h":true,"j":["blue-square","right","direction","play"],"k":[52,43],"o":2},"man-frowning":{"skin_variations":{"1F3FB":{"unified":"1F64D-1F3FB-200D-2642-FE0F","non_qualified":"1F64D-1F3FB-200D-2642","image":"1f64d-1f3fb-200d-2642-fe0f.png","sheet_x":33,"sheet_y":21,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F64D-1F3FC-200D-2642-FE0F","non_qualified":"1F64D-1F3FC-200D-2642","image":"1f64d-1f3fc-200d-2642-fe0f.png","sheet_x":33,"sheet_y":22,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F64D-1F3FD-200D-2642-FE0F","non_qualified":"1F64D-1F3FD-200D-2642","image":"1f64d-1f3fd-200d-2642-fe0f.png","sheet_x":33,"sheet_y":23,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F64D-1F3FE-200D-2642-FE0F","non_qualified":"1F64D-1F3FE-200D-2642","image":"1f64d-1f3fe-200d-2642-fe0f.png","sheet_x":33,"sheet_y":24,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F64D-1F3FF-200D-2642-FE0F","non_qualified":"1F64D-1F3FF-200D-2642","image":"1f64d-1f3ff-200d-2642-fe0f.png","sheet_x":33,"sheet_y":25,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Frowning","b":"1F64D-200D-2642-FE0F","c":"1F64D-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[33,20],"o":4},"disappointed_relieved":{"a":"Disappointed but Relieved Face","b":"1F625","d":true,"e":true,"f":true,"h":true,"j":["face","phew","sweat","nervous"],"k":[31,15],"o":2},"electric_plug":{"a":"Electric Plug","b":"1F50C","d":true,"e":true,"f":true,"h":true,"j":["charger","power"],"k":[27,40],"o":2},"frame_with_picture":{"a":"Frame with Picture","b":"1F5BC-FE0F","c":"1F5BC","d":true,"e":true,"f":true,"h":true,"k":[30,14],"o":2},"oncoming_bus":{"a":"Oncoming Bus","b":"1F68D","d":true,"e":true,"f":true,"h":true,"j":["vehicle","transportation"],"k":[34,12],"o":2},"dango":{"a":"Dango","b":"1F361","d":true,"e":true,"f":true,"h":true,"j":["food","dessert","sweet","japanese","barbecue","meat"],"k":[7,0],"o":2},"frog":{"a":"Frog Face","b":"1F438","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","croak","toad"],"k":[12,28],"o":2},"computer":{"a":"Personal Computer","b":"1F4BB","d":true,"e":true,"f":true,"h":true,"j":["technology","laptop","screen","display","monitor"],"k":[26,17],"o":2},"art":{"a":"Artist Palette","b":"1F3A8","d":true,"e":true,"f":true,"h":true,"j":["design","paint","draw","colors"],"k":[8,14],"o":2},"flag-eh":{"a":"Western Sahara Flag","b":"1F1EA-1F1ED","d":true,"e":true,"f":true,"h":true,"k":[1,43],"o":2},"fast_forward":{"a":"Black Right-Pointing Double Triangle","b":"23E9","d":true,"e":true,"f":true,"h":true,"j":["blue-square","play","speed","continue"],"k":[52,26],"o":2},"cry":{"a":"Crying Face","b":"1F622","d":true,"e":true,"f":true,"h":true,"j":["face","tears","sad","depressed","upset",":'("],"k":[31,12],"l":[":'("],"m":":'(","o":2},"woman-frowning":{"skin_variations":{"1F3FB":{"unified":"1F64D-1F3FB-200D-2640-FE0F","non_qualified":"1F64D-1F3FB-200D-2640","image":"1f64d-1f3fb-200d-2640-fe0f.png","sheet_x":33,"sheet_y":15,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F64D-1F3FC-200D-2640-FE0F","non_qualified":"1F64D-1F3FC-200D-2640","image":"1f64d-1f3fc-200d-2640-fe0f.png","sheet_x":33,"sheet_y":16,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F64D-1F3FD-200D-2640-FE0F","non_qualified":"1F64D-1F3FD-200D-2640","image":"1f64d-1f3fd-200d-2640-fe0f.png","sheet_x":33,"sheet_y":17,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F64D-1F3FE-200D-2640-FE0F","non_qualified":"1F64D-1F3FE-200D-2640","image":"1f64d-1f3fe-200d-2640-fe0f.png","sheet_x":33,"sheet_y":18,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F64D-1F3FF-200D-2640-FE0F","non_qualified":"1F64D-1F3FF-200D-2640","image":"1f64d-1f3ff-200d-2640-fe0f.png","sheet_x":33,"sheet_y":19,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F64D","a":"Woman Frowning","b":"1F64D-200D-2640-FE0F","c":"1F64D-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[33,14],"o":4},"trolleybus":{"a":"Trolleybus","b":"1F68E","d":true,"e":true,"f":true,"h":true,"j":["bart","transportation","vehicle"],"k":[34,13],"o":2},"crocodile":{"a":"Crocodile","b":"1F40A","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","reptile","lizard","alligator"],"k":[11,38],"o":2},"dumpling":{"a":"Dumpling","b":"1F95F","d":true,"e":true,"f":true,"h":true,"k":[41,46],"o":5},"black_right_pointing_double_triangle_with_vertical_bar":{"a":"Black Right Pointing Double Triangle with Vertical Bar","b":"23ED-FE0F","c":"23ED","d":true,"e":true,"f":true,"h":true,"k":[52,30],"o":2},"desktop_computer":{"a":"Desktop Computer","b":"1F5A5-FE0F","c":"1F5A5","d":true,"e":true,"f":true,"h":true,"j":["technology","computing","screen"],"k":[30,10],"o":2},"person_with_pouting_face":{"skin_variations":{"1F3FB":{"unified":"1F64E-1F3FB","non_qualified":null,"image":"1f64e-1f3fb.png","sheet_x":33,"sheet_y":45,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F64E-1F3FC","non_qualified":null,"image":"1f64e-1f3fc.png","sheet_x":33,"sheet_y":46,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F64E-1F3FD","non_qualified":null,"image":"1f64e-1f3fd.png","sheet_x":33,"sheet_y":47,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F64E-1F3FE","non_qualified":null,"image":"1f64e-1f3fe.png","sheet_x":33,"sheet_y":48,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F64E-1F3FF","non_qualified":null,"image":"1f64e-1f3ff.png","sheet_x":33,"sheet_y":49,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F64E-200D-2640-FE0F","a":"Person with Pouting Face","b":"1F64E","d":true,"e":true,"f":true,"h":false,"k":[33,44],"o":2},"turtle":{"a":"Turtle","b":"1F422","d":true,"e":true,"f":true,"h":true,"j":["animal","slow","nature","tortoise"],"k":[12,6],"o":2},"sob":{"a":"Loudly Crying Face","b":"1F62D","d":true,"e":true,"f":true,"h":true,"j":["face","cry","tears","sad","upset","depressed"],"k":[31,23],"m":":'(","o":2},"flag-er":{"a":"Eritrea Flag","b":"1F1EA-1F1F7","d":true,"e":true,"f":true,"h":true,"k":[1,44],"o":2},"thread":{"a":"Spool of Thread","b":"1F9F5","d":true,"e":true,"f":true,"h":true,"k":[51,40],"o":11},"minibus":{"a":"Minibus","b":"1F690","d":true,"e":true,"f":true,"h":true,"j":["vehicle","car","transportation"],"k":[34,15],"o":2},"fortune_cookie":{"a":"Fortune Cookie","b":"1F960","d":true,"e":true,"f":true,"h":true,"k":[41,47],"o":5},"yarn":{"a":"Ball of Yarn","b":"1F9F6","d":true,"e":true,"f":true,"h":true,"k":[51,41],"o":11},"takeout_box":{"a":"Takeout Box","b":"1F961","d":true,"e":true,"f":true,"h":true,"k":[41,48],"o":5},"man-pouting":{"skin_variations":{"1F3FB":{"unified":"1F64E-1F3FB-200D-2642-FE0F","non_qualified":"1F64E-1F3FB-200D-2642","image":"1f64e-1f3fb-200d-2642-fe0f.png","sheet_x":33,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F64E-1F3FC-200D-2642-FE0F","non_qualified":"1F64E-1F3FC-200D-2642","image":"1f64e-1f3fc-200d-2642-fe0f.png","sheet_x":33,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F64E-1F3FD-200D-2642-FE0F","non_qualified":"1F64E-1F3FD-200D-2642","image":"1f64e-1f3fd-200d-2642-fe0f.png","sheet_x":33,"sheet_y":41,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F64E-1F3FE-200D-2642-FE0F","non_qualified":"1F64E-1F3FE-200D-2642","image":"1f64e-1f3fe-200d-2642-fe0f.png","sheet_x":33,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F64E-1F3FF-200D-2642-FE0F","non_qualified":"1F64E-1F3FF-200D-2642","image":"1f64e-1f3ff-200d-2642-fe0f.png","sheet_x":33,"sheet_y":43,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Pouting","b":"1F64E-200D-2642-FE0F","c":"1F64E-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[33,38],"o":4},"printer":{"a":"Printer","b":"1F5A8-FE0F","c":"1F5A8","d":true,"e":true,"f":true,"h":true,"j":["paper","ink"],"k":[30,11],"o":2},"scream":{"a":"Face Screaming in Fear","b":"1F631","d":true,"e":true,"f":true,"h":true,"j":["face","munch","scared","omg"],"k":[31,27],"o":2},"es":{"a":"Spain Flag","b":"1F1EA-1F1F8","d":true,"e":true,"f":true,"h":true,"j":["spain","flag","nation","country","banner"],"k":[1,45],"n":["flag-es"],"o":2},"ambulance":{"a":"Ambulance","b":"1F691","d":true,"e":true,"f":true,"h":true,"j":["health","911","hospital"],"k":[34,16],"o":2},"black_right_pointing_triangle_with_double_vertical_bar":{"a":"Black Right Pointing Triangle with Double Vertical Bar","b":"23EF-FE0F","c":"23EF","d":true,"e":true,"f":true,"h":true,"k":[52,32],"o":2},"lizard":{"a":"Lizard","b":"1F98E","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","reptile"],"k":[42,32],"o":4},"flag-et":{"a":"Ethiopia Flag","b":"1F1EA-1F1F9","d":true,"e":true,"f":true,"h":true,"k":[1,46],"o":2},"keyboard":{"a":"Keyboard","b":"2328-FE0F","c":"2328","d":true,"e":true,"f":true,"h":true,"j":["technology","computer","type","input","text"],"k":[52,24],"o":2},"crab":{"a":"Crab","b":"1F980","d":true,"e":true,"f":true,"h":true,"j":["animal","crustacean"],"k":[42,18],"o":2},"confounded":{"a":"Confounded Face","b":"1F616","d":true,"e":true,"f":true,"h":true,"j":["face","confused","sick","unwell","oops",":S"],"k":[31,0],"o":2},"snake":{"a":"Snake","b":"1F40D","d":true,"e":true,"f":true,"h":true,"j":["animal","evil","nature","hiss","python"],"k":[11,41],"o":2},"woman-pouting":{"skin_variations":{"1F3FB":{"unified":"1F64E-1F3FB-200D-2640-FE0F","non_qualified":"1F64E-1F3FB-200D-2640","image":"1f64e-1f3fb-200d-2640-fe0f.png","sheet_x":33,"sheet_y":33,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F64E-1F3FC-200D-2640-FE0F","non_qualified":"1F64E-1F3FC-200D-2640","image":"1f64e-1f3fc-200d-2640-fe0f.png","sheet_x":33,"sheet_y":34,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F64E-1F3FD-200D-2640-FE0F","non_qualified":"1F64E-1F3FD-200D-2640","image":"1f64e-1f3fd-200d-2640-fe0f.png","sheet_x":33,"sheet_y":35,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F64E-1F3FE-200D-2640-FE0F","non_qualified":"1F64E-1F3FE-200D-2640","image":"1f64e-1f3fe-200d-2640-fe0f.png","sheet_x":33,"sheet_y":36,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F64E-1F3FF-200D-2640-FE0F","non_qualified":"1F64E-1F3FF-200D-2640","image":"1f64e-1f3ff-200d-2640-fe0f.png","sheet_x":33,"sheet_y":37,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F64E","a":"Woman Pouting","b":"1F64E-200D-2640-FE0F","c":"1F64E-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[33,32],"o":4},"arrow_backward":{"a":"Black Left-Pointing Triangle","b":"25C0-FE0F","c":"25C0","d":true,"e":true,"f":true,"h":true,"j":["blue-square","left","direction"],"k":[52,44],"o":2},"fire_engine":{"a":"Fire Engine","b":"1F692","d":true,"e":true,"f":true,"h":true,"j":["transportation","cars","vehicle"],"k":[34,17],"o":2},"rewind":{"a":"Black Left-Pointing Double Triangle","b":"23EA","d":true,"e":true,"f":true,"h":true,"j":["play","blue-square"],"k":[52,27],"o":2},"three_button_mouse":{"a":"Three Button Mouse","b":"1F5B1-FE0F","c":"1F5B1","d":true,"e":true,"f":true,"h":true,"k":[30,12],"o":2},"no_good":{"skin_variations":{"1F3FB":{"unified":"1F645-1F3FB","non_qualified":null,"image":"1f645-1f3fb.png","sheet_x":32,"sheet_y":3,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F645-1F3FC","non_qualified":null,"image":"1f645-1f3fc.png","sheet_x":32,"sheet_y":4,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F645-1F3FD","non_qualified":null,"image":"1f645-1f3fd.png","sheet_x":32,"sheet_y":5,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F645-1F3FE","non_qualified":null,"image":"1f645-1f3fe.png","sheet_x":32,"sheet_y":6,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F645-1F3FF","non_qualified":null,"image":"1f645-1f3ff.png","sheet_x":32,"sheet_y":7,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F645-200D-2640-FE0F","a":"Face with No Good Gesture","b":"1F645","d":true,"e":true,"f":true,"h":false,"k":[32,2],"o":2},"police_car":{"a":"Police Car","b":"1F693","d":true,"e":true,"f":true,"h":true,"j":["vehicle","cars","transportation","law","legal","enforcement"],"k":[34,18],"o":2},"dragon_face":{"a":"Dragon Face","b":"1F432","d":true,"e":true,"f":true,"h":true,"j":["animal","myth","nature","chinese","green"],"k":[12,22],"o":2},"persevere":{"a":"Persevering Face","b":"1F623","d":true,"e":true,"f":true,"h":true,"j":["face","sick","no","upset","oops"],"k":[31,13],"o":2},"lobster":{"a":"Lobster","b":"1F99E","d":true,"e":true,"f":true,"h":true,"k":[42,48],"o":11},"flag-eu":{"a":"European Union Flag","b":"1F1EA-1F1FA","d":true,"e":true,"f":true,"h":true,"k":[1,47],"o":2},"disappointed":{"a":"Disappointed Face","b":"1F61E","d":true,"e":true,"f":true,"h":true,"j":["face","sad","upset","depressed",":("],"k":[31,8],"l":["):",":(",":-("],"m":":(","o":2},"shrimp":{"a":"Shrimp","b":"1F990","d":true,"e":true,"f":true,"h":true,"j":["animal","ocean","nature","seafood"],"k":[42,34],"o":4},"dragon":{"a":"Dragon","b":"1F409","d":true,"e":true,"f":true,"h":true,"j":["animal","myth","nature","chinese","green"],"k":[11,37],"o":2},"man-gesturing-no":{"skin_variations":{"1F3FB":{"unified":"1F645-1F3FB-200D-2642-FE0F","non_qualified":"1F645-1F3FB-200D-2642","image":"1f645-1f3fb-200d-2642-fe0f.png","sheet_x":31,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F645-1F3FC-200D-2642-FE0F","non_qualified":"1F645-1F3FC-200D-2642","image":"1f645-1f3fc-200d-2642-fe0f.png","sheet_x":31,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F645-1F3FD-200D-2642-FE0F","non_qualified":"1F645-1F3FD-200D-2642","image":"1f645-1f3fd-200d-2642-fe0f.png","sheet_x":31,"sheet_y":56,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F645-1F3FE-200D-2642-FE0F","non_qualified":"1F645-1F3FE-200D-2642","image":"1f645-1f3fe-200d-2642-fe0f.png","sheet_x":32,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F645-1F3FF-200D-2642-FE0F","non_qualified":"1F645-1F3FF-200D-2642","image":"1f645-1f3ff-200d-2642-fe0f.png","sheet_x":32,"sheet_y":1,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Gesturing No","b":"1F645-200D-2642-FE0F","c":"1F645-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[31,53],"o":4},"flag-fi":{"a":"Finland Flag","b":"1F1EB-1F1EE","d":true,"e":true,"f":true,"h":true,"k":[1,48],"o":2},"trackball":{"a":"Trackball","b":"1F5B2-FE0F","c":"1F5B2","d":true,"e":true,"f":true,"h":true,"j":["technology","trackpad"],"k":[30,13],"o":2},"black_left_pointing_double_triangle_with_vertical_bar":{"a":"Black Left Pointing Double Triangle with Vertical Bar","b":"23EE-FE0F","c":"23EE","d":true,"e":true,"f":true,"h":true,"k":[52,31],"o":2},"oncoming_police_car":{"a":"Oncoming Police Car","b":"1F694","d":true,"e":true,"f":true,"h":true,"j":["vehicle","law","legal","enforcement","911"],"k":[34,19],"o":2},"minidisc":{"a":"Minidisc","b":"1F4BD","d":true,"e":true,"f":true,"h":true,"j":["technology","record","data","disk","90s"],"k":[26,19],"o":2},"sweat":{"a":"Face with Cold Sweat","b":"1F613","d":true,"e":true,"f":true,"h":true,"j":["face","hot","sad","tired","exercise"],"k":[30,54],"o":2},"squid":{"a":"Squid","b":"1F991","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","ocean","sea"],"k":[42,35],"o":4},"sauropod":{"a":"Sauropod","b":"1F995","d":true,"e":true,"f":true,"h":true,"k":[42,39],"o":5},"arrow_up_small":{"a":"Up-Pointing Small Red Triangle","b":"1F53C","d":true,"e":true,"f":true,"h":true,"j":["blue-square","triangle","direction","point","forward","top"],"k":[28,31],"o":2},"flag-fj":{"a":"Fiji Flag","b":"1F1EB-1F1EF","d":true,"e":true,"f":true,"h":true,"k":[1,49],"o":2},"woman-gesturing-no":{"skin_variations":{"1F3FB":{"unified":"1F645-1F3FB-200D-2640-FE0F","non_qualified":"1F645-1F3FB-200D-2640","image":"1f645-1f3fb-200d-2640-fe0f.png","sheet_x":31,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F645-1F3FC-200D-2640-FE0F","non_qualified":"1F645-1F3FC-200D-2640","image":"1f645-1f3fc-200d-2640-fe0f.png","sheet_x":31,"sheet_y":49,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F645-1F3FD-200D-2640-FE0F","non_qualified":"1F645-1F3FD-200D-2640","image":"1f645-1f3fd-200d-2640-fe0f.png","sheet_x":31,"sheet_y":50,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F645-1F3FE-200D-2640-FE0F","non_qualified":"1F645-1F3FE-200D-2640","image":"1f645-1f3fe-200d-2640-fe0f.png","sheet_x":31,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F645-1F3FF-200D-2640-FE0F","non_qualified":"1F645-1F3FF-200D-2640","image":"1f645-1f3ff-200d-2640-fe0f.png","sheet_x":31,"sheet_y":52,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F645","a":"Woman Gesturing No","b":"1F645-200D-2640-FE0F","c":"1F645-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[31,47],"o":4},"taxi":{"a":"Taxi","b":"1F695","d":true,"e":true,"f":true,"h":true,"j":["uber","vehicle","cars","transportation"],"k":[34,20],"o":2},"flag-fk":{"a":"Falkland Islands Flag","b":"1F1EB-1F1F0","d":true,"e":true,"f":true,"h":true,"k":[1,50],"o":2},"floppy_disk":{"a":"Floppy Disk","b":"1F4BE","d":true,"e":true,"f":true,"h":true,"j":["oldschool","technology","save","90s","80s"],"k":[26,20],"o":2},"t-rex":{"a":"T-Rex","b":"1F996","d":true,"e":true,"f":true,"h":true,"k":[42,40],"o":5},"oyster":{"a":"Oyster","b":"1F9AA","d":true,"e":true,"f":true,"h":true,"k":[43,1],"o":12},"arrow_double_up":{"a":"Black Up-Pointing Double Triangle","b":"23EB","d":true,"e":true,"f":true,"h":true,"j":["blue-square","direction","top"],"k":[52,28],"o":2},"oncoming_taxi":{"a":"Oncoming Taxi","b":"1F696","d":true,"e":true,"f":true,"h":true,"j":["vehicle","cars","uber"],"k":[34,21],"o":2},"ok_woman":{"skin_variations":{"1F3FB":{"unified":"1F646-1F3FB","non_qualified":null,"image":"1f646-1f3fb.png","sheet_x":32,"sheet_y":21,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F646-1F3FC","non_qualified":null,"image":"1f646-1f3fc.png","sheet_x":32,"sheet_y":22,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F646-1F3FD","non_qualified":null,"image":"1f646-1f3fd.png","sheet_x":32,"sheet_y":23,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F646-1F3FE","non_qualified":null,"image":"1f646-1f3fe.png","sheet_x":32,"sheet_y":24,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F646-1F3FF","non_qualified":null,"image":"1f646-1f3ff.png","sheet_x":32,"sheet_y":25,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F646-200D-2640-FE0F","a":"Face with Ok Gesture","b":"1F646","d":true,"e":true,"f":true,"h":false,"j":["women","girl","female","pink","human","woman"],"k":[32,20],"o":2},"weary":{"a":"Weary Face","b":"1F629","d":true,"e":true,"f":true,"h":true,"j":["face","tired","sleepy","sad","frustrated","upset"],"k":[31,19],"o":2},"man-gesturing-ok":{"skin_variations":{"1F3FB":{"unified":"1F646-1F3FB-200D-2642-FE0F","non_qualified":"1F646-1F3FB-200D-2642","image":"1f646-1f3fb-200d-2642-fe0f.png","sheet_x":32,"sheet_y":15,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F646-1F3FC-200D-2642-FE0F","non_qualified":"1F646-1F3FC-200D-2642","image":"1f646-1f3fc-200d-2642-fe0f.png","sheet_x":32,"sheet_y":16,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F646-1F3FD-200D-2642-FE0F","non_qualified":"1F646-1F3FD-200D-2642","image":"1f646-1f3fd-200d-2642-fe0f.png","sheet_x":32,"sheet_y":17,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F646-1F3FE-200D-2642-FE0F","non_qualified":"1F646-1F3FE-200D-2642","image":"1f646-1f3fe-200d-2642-fe0f.png","sheet_x":32,"sheet_y":18,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F646-1F3FF-200D-2642-FE0F","non_qualified":"1F646-1F3FF-200D-2642","image":"1f646-1f3ff-200d-2642-fe0f.png","sheet_x":32,"sheet_y":19,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Gesturing Ok","b":"1F646-200D-2642-FE0F","c":"1F646-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[32,14],"o":4},"arrow_down_small":{"a":"Down-Pointing Small Red Triangle","b":"1F53D","d":true,"e":true,"f":true,"h":true,"j":["blue-square","direction","bottom"],"k":[28,32],"o":2},"tired_face":{"a":"Tired Face","b":"1F62B","d":true,"e":true,"f":true,"h":true,"j":["sick","whine","upset","frustrated"],"k":[31,21],"o":2},"car":{"a":"Automobile","b":"1F697","d":true,"e":true,"f":true,"h":true,"k":[34,22],"n":["red_car"],"o":2},"icecream":{"a":"Soft Ice Cream","b":"1F366","d":true,"e":true,"f":true,"h":true,"j":["food","hot","dessert","summer"],"k":[7,5],"o":2},"cd":{"a":"Optical Disc","b":"1F4BF","d":true,"e":true,"f":true,"h":true,"j":["technology","dvd","disk","disc","90s"],"k":[26,21],"o":2},"whale":{"a":"Spouting Whale","b":"1F433","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","sea","ocean"],"k":[12,23],"o":2},"flag-fm":{"a":"Micronesia Flag","b":"1F1EB-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[1,51],"o":2},"oncoming_automobile":{"a":"Oncoming Automobile","b":"1F698","d":true,"e":true,"f":true,"h":true,"j":["car","vehicle","transportation"],"k":[34,23],"o":2},"arrow_double_down":{"a":"Black Down-Pointing Double Triangle","b":"23EC","d":true,"e":true,"f":true,"h":true,"j":["blue-square","direction","bottom"],"k":[52,29],"o":2},"woman-gesturing-ok":{"skin_variations":{"1F3FB":{"unified":"1F646-1F3FB-200D-2640-FE0F","non_qualified":"1F646-1F3FB-200D-2640","image":"1f646-1f3fb-200d-2640-fe0f.png","sheet_x":32,"sheet_y":9,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F646-1F3FC-200D-2640-FE0F","non_qualified":"1F646-1F3FC-200D-2640","image":"1f646-1f3fc-200d-2640-fe0f.png","sheet_x":32,"sheet_y":10,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F646-1F3FD-200D-2640-FE0F","non_qualified":"1F646-1F3FD-200D-2640","image":"1f646-1f3fd-200d-2640-fe0f.png","sheet_x":32,"sheet_y":11,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F646-1F3FE-200D-2640-FE0F","non_qualified":"1F646-1F3FE-200D-2640","image":"1f646-1f3fe-200d-2640-fe0f.png","sheet_x":32,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F646-1F3FF-200D-2640-FE0F","non_qualified":"1F646-1F3FF-200D-2640","image":"1f646-1f3ff-200d-2640-fe0f.png","sheet_x":32,"sheet_y":13,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F646","a":"Woman Gesturing Ok","b":"1F646-200D-2640-FE0F","c":"1F646-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[32,8],"o":4},"yawning_face":{"a":"Yawning Face","b":"1F971","d":true,"e":true,"f":true,"h":true,"k":[42,7],"o":12},"dvd":{"a":"Dvd","b":"1F4C0","d":true,"e":true,"f":true,"h":true,"j":["cd","disk","disc"],"k":[26,22],"o":2},"whale2":{"a":"Whale","b":"1F40B","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","sea","ocean"],"k":[11,39],"o":2},"flag-fo":{"a":"Faroe Islands Flag","b":"1F1EB-1F1F4","d":true,"e":true,"f":true,"h":true,"k":[1,52],"o":2},"shaved_ice":{"a":"Shaved Ice","b":"1F367","d":true,"e":true,"f":true,"h":true,"j":["hot","dessert","summer"],"k":[7,6],"o":2},"double_vertical_bar":{"a":"Double Vertical Bar","b":"23F8-FE0F","c":"23F8","d":true,"e":true,"f":true,"h":true,"k":[52,37],"o":2},"information_desk_person":{"skin_variations":{"1F3FB":{"unified":"1F481-1F3FB","non_qualified":null,"image":"1f481-1f3fb.png","sheet_x":24,"sheet_y":3,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F481-1F3FC","non_qualified":null,"image":"1f481-1f3fc.png","sheet_x":24,"sheet_y":4,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F481-1F3FD","non_qualified":null,"image":"1f481-1f3fd.png","sheet_x":24,"sheet_y":5,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F481-1F3FE","non_qualified":null,"image":"1f481-1f3fe.png","sheet_x":24,"sheet_y":6,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F481-1F3FF","non_qualified":null,"image":"1f481-1f3ff.png","sheet_x":24,"sheet_y":7,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F481-200D-2640-FE0F","a":"Information Desk Person","b":"1F481","d":true,"e":true,"f":true,"h":false,"k":[24,2],"o":2},"dolphin":{"a":"Dolphin","b":"1F42C","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","fish","sea","ocean","flipper","fins","beach"],"k":[12,16],"n":["flipper"],"o":2},"blue_car":{"a":"Recreational Vehicle","b":"1F699","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle"],"k":[34,24],"o":2},"ice_cream":{"a":"Ice Cream","b":"1F368","d":true,"e":true,"f":true,"h":true,"j":["food","hot","dessert"],"k":[7,7],"o":2},"fr":{"a":"France Flag","b":"1F1EB-1F1F7","d":true,"e":true,"f":true,"h":true,"j":["banner","flag","nation","france","french","country"],"k":[1,53],"n":["flag-fr"],"o":2},"triumph":{"a":"Face with Look of Triumph","b":"1F624","d":true,"e":true,"f":true,"h":true,"j":["face","gas","phew","proud","pride"],"k":[31,14],"o":2},"abacus":{"a":"Abacus","b":"1F9EE","d":true,"e":true,"f":true,"h":true,"k":[51,33],"o":11},"man-tipping-hand":{"skin_variations":{"1F3FB":{"unified":"1F481-1F3FB-200D-2642-FE0F","non_qualified":"1F481-1F3FB-200D-2642","image":"1f481-1f3fb-200d-2642-fe0f.png","sheet_x":23,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F481-1F3FC-200D-2642-FE0F","non_qualified":"1F481-1F3FC-200D-2642","image":"1f481-1f3fc-200d-2642-fe0f.png","sheet_x":23,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F481-1F3FD-200D-2642-FE0F","non_qualified":"1F481-1F3FD-200D-2642","image":"1f481-1f3fd-200d-2642-fe0f.png","sheet_x":23,"sheet_y":56,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F481-1F3FE-200D-2642-FE0F","non_qualified":"1F481-1F3FE-200D-2642","image":"1f481-1f3fe-200d-2642-fe0f.png","sheet_x":24,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F481-1F3FF-200D-2642-FE0F","non_qualified":"1F481-1F3FF-200D-2642","image":"1f481-1f3ff-200d-2642-fe0f.png","sheet_x":24,"sheet_y":1,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Tipping Hand","b":"1F481-200D-2642-FE0F","c":"1F481-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[23,53],"o":4},"doughnut":{"a":"Doughnut","b":"1F369","d":true,"e":true,"f":true,"h":true,"j":["food","dessert","snack","sweet","donut"],"k":[7,8],"o":2},"fish":{"a":"Fish","b":"1F41F","d":true,"e":true,"f":true,"h":true,"j":["animal","food","nature"],"k":[12,3],"o":2},"truck":{"a":"Delivery Truck","b":"1F69A","d":true,"e":true,"f":true,"h":true,"j":["cars","transportation"],"k":[34,25],"o":2},"movie_camera":{"a":"Movie Camera","b":"1F3A5","d":true,"e":true,"f":true,"h":true,"j":["film","record"],"k":[8,11],"o":2},"flag-ga":{"a":"Gabon Flag","b":"1F1EC-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[1,54],"o":2},"rage":{"a":"Pouting Face","b":"1F621","d":true,"e":true,"f":true,"h":true,"j":["angry","mad","hate","despise"],"k":[31,11],"o":2},"black_square_for_stop":{"a":"Black Square for Stop","b":"23F9-FE0F","c":"23F9","d":true,"e":true,"f":true,"h":true,"k":[52,38],"o":2},"articulated_lorry":{"a":"Articulated Lorry","b":"1F69B","d":true,"e":true,"f":true,"h":true,"j":["vehicle","cars","transportation","express"],"k":[34,26],"o":2},"angry":{"a":"Angry Face","b":"1F620","d":true,"e":true,"f":true,"h":true,"j":["mad","face","annoyed","frustrated"],"k":[31,10],"l":[">:(",">:-("],"o":2},"cookie":{"a":"Cookie","b":"1F36A","d":true,"e":true,"f":true,"h":true,"j":["food","snack","oreo","chocolate","sweet","dessert"],"k":[7,9],"o":2},"gb":{"a":"United Kingdom Flag","b":"1F1EC-1F1E7","d":true,"e":true,"f":true,"h":true,"k":[1,55],"n":["uk","flag-gb"],"o":2},"tropical_fish":{"a":"Tropical Fish","b":"1F420","d":true,"e":true,"f":true,"h":true,"j":["animal","swim","ocean","beach","nemo"],"k":[12,4],"o":2},"woman-tipping-hand":{"skin_variations":{"1F3FB":{"unified":"1F481-1F3FB-200D-2640-FE0F","non_qualified":"1F481-1F3FB-200D-2640","image":"1f481-1f3fb-200d-2640-fe0f.png","sheet_x":23,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F481-1F3FC-200D-2640-FE0F","non_qualified":"1F481-1F3FC-200D-2640","image":"1f481-1f3fc-200d-2640-fe0f.png","sheet_x":23,"sheet_y":49,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F481-1F3FD-200D-2640-FE0F","non_qualified":"1F481-1F3FD-200D-2640","image":"1f481-1f3fd-200d-2640-fe0f.png","sheet_x":23,"sheet_y":50,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F481-1F3FE-200D-2640-FE0F","non_qualified":"1F481-1F3FE-200D-2640","image":"1f481-1f3fe-200d-2640-fe0f.png","sheet_x":23,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F481-1F3FF-200D-2640-FE0F","non_qualified":"1F481-1F3FF-200D-2640","image":"1f481-1f3ff-200d-2640-fe0f.png","sheet_x":23,"sheet_y":52,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F481","a":"Woman Tipping Hand","b":"1F481-200D-2640-FE0F","c":"1F481-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[23,47],"o":4},"black_circle_for_record":{"a":"Black Circle for Record","b":"23FA-FE0F","c":"23FA","d":true,"e":true,"f":true,"h":true,"k":[52,39],"o":2},"film_frames":{"a":"Film Frames","b":"1F39E-FE0F","c":"1F39E","d":true,"e":true,"f":true,"h":true,"k":[8,4],"o":2},"film_projector":{"a":"Film Projector","b":"1F4FD-FE0F","c":"1F4FD","d":true,"e":true,"f":true,"h":true,"j":["video","tape","record","movie"],"k":[27,26],"o":2},"flag-gd":{"a":"Grenada Flag","b":"1F1EC-1F1E9","d":true,"e":true,"f":true,"h":true,"k":[1,56],"o":2},"blowfish":{"a":"Blowfish","b":"1F421","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","food","sea","ocean"],"k":[12,5],"o":2},"face_with_symbols_on_mouth":{"a":"Serious Face with Symbols Covering Mouth","b":"1F92C","d":true,"e":true,"f":true,"h":true,"k":[38,46],"n":["serious_face_with_symbols_covering_mouth"],"o":5},"birthday":{"a":"Birthday Cake","b":"1F382","d":true,"e":true,"f":true,"h":true,"j":["food","dessert","cake"],"k":[7,33],"o":2},"eject":{"a":"Eject","b":"23CF-FE0F","c":"23CF","d":true,"e":true,"f":true,"h":true,"k":[52,25],"o":2},"raising_hand":{"skin_variations":{"1F3FB":{"unified":"1F64B-1F3FB","non_qualified":null,"image":"1f64b-1f3fb.png","sheet_x":33,"sheet_y":3,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F64B-1F3FC","non_qualified":null,"image":"1f64b-1f3fc.png","sheet_x":33,"sheet_y":4,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F64B-1F3FD","non_qualified":null,"image":"1f64b-1f3fd.png","sheet_x":33,"sheet_y":5,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F64B-1F3FE","non_qualified":null,"image":"1f64b-1f3fe.png","sheet_x":33,"sheet_y":6,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F64B-1F3FF","non_qualified":null,"image":"1f64b-1f3ff.png","sheet_x":33,"sheet_y":7,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F64B-200D-2640-FE0F","a":"Happy Person Raising One Hand","b":"1F64B","d":true,"e":true,"f":true,"h":false,"k":[33,2],"o":2},"tractor":{"a":"Tractor","b":"1F69C","d":true,"e":true,"f":true,"h":true,"j":["vehicle","car","farming","agriculture"],"k":[34,27],"o":2},"flag-ge":{"a":"Georgia Flag","b":"1F1EC-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[2,0],"o":2},"smiling_imp":{"a":"Smiling Face with Horns","b":"1F608","d":true,"e":true,"f":true,"h":true,"j":["devil","horns"],"k":[30,43],"o":2},"racing_car":{"a":"Racing Car","b":"1F3CE-FE0F","c":"1F3CE","d":true,"e":true,"f":true,"h":true,"j":["sports","race","fast","formula","f1"],"k":[10,33],"o":2},"cinema":{"a":"Cinema","b":"1F3A6","d":true,"e":true,"f":true,"h":true,"j":["blue-square","record","film","movie","curtain","stage","theater"],"k":[8,12],"o":2},"clapper":{"a":"Clapper Board","b":"1F3AC","d":true,"e":true,"f":true,"h":true,"j":["movie","film","record"],"k":[8,18],"o":2},"shark":{"a":"Shark","b":"1F988","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","fish","sea","ocean","jaws","fins","beach"],"k":[42,26],"o":4},"cake":{"a":"Shortcake","b":"1F370","d":true,"e":true,"f":true,"h":true,"j":["food","dessert"],"k":[7,15],"o":2},"man-raising-hand":{"skin_variations":{"1F3FB":{"unified":"1F64B-1F3FB-200D-2642-FE0F","non_qualified":"1F64B-1F3FB-200D-2642","image":"1f64b-1f3fb-200d-2642-fe0f.png","sheet_x":32,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F64B-1F3FC-200D-2642-FE0F","non_qualified":"1F64B-1F3FC-200D-2642","image":"1f64b-1f3fc-200d-2642-fe0f.png","sheet_x":32,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F64B-1F3FD-200D-2642-FE0F","non_qualified":"1F64B-1F3FD-200D-2642","image":"1f64b-1f3fd-200d-2642-fe0f.png","sheet_x":32,"sheet_y":56,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F64B-1F3FE-200D-2642-FE0F","non_qualified":"1F64B-1F3FE-200D-2642","image":"1f64b-1f3fe-200d-2642-fe0f.png","sheet_x":33,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F64B-1F3FF-200D-2642-FE0F","non_qualified":"1F64B-1F3FF-200D-2642","image":"1f64b-1f3ff-200d-2642-fe0f.png","sheet_x":33,"sheet_y":1,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Raising Hand","b":"1F64B-200D-2642-FE0F","c":"1F64B-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[32,53],"o":4},"octopus":{"a":"Octopus","b":"1F419","d":true,"e":true,"f":true,"h":true,"j":["animal","creature","ocean","sea","nature","beach"],"k":[11,54],"o":2},"woman-raising-hand":{"skin_variations":{"1F3FB":{"unified":"1F64B-1F3FB-200D-2640-FE0F","non_qualified":"1F64B-1F3FB-200D-2640","image":"1f64b-1f3fb-200d-2640-fe0f.png","sheet_x":32,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F64B-1F3FC-200D-2640-FE0F","non_qualified":"1F64B-1F3FC-200D-2640","image":"1f64b-1f3fc-200d-2640-fe0f.png","sheet_x":32,"sheet_y":49,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F64B-1F3FD-200D-2640-FE0F","non_qualified":"1F64B-1F3FD-200D-2640","image":"1f64b-1f3fd-200d-2640-fe0f.png","sheet_x":32,"sheet_y":50,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F64B-1F3FE-200D-2640-FE0F","non_qualified":"1F64B-1F3FE-200D-2640","image":"1f64b-1f3fe-200d-2640-fe0f.png","sheet_x":32,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F64B-1F3FF-200D-2640-FE0F","non_qualified":"1F64B-1F3FF-200D-2640","image":"1f64b-1f3ff-200d-2640-fe0f.png","sheet_x":32,"sheet_y":52,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F64B","a":"Woman Raising Hand","b":"1F64B-200D-2640-FE0F","c":"1F64B-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[32,47],"o":4},"flag-gf":{"a":"French Guiana Flag","b":"1F1EC-1F1EB","d":true,"e":true,"f":true,"h":true,"k":[2,1],"o":2},"tv":{"a":"Television","b":"1F4FA","d":true,"e":true,"f":true,"h":true,"j":["technology","program","oldschool","show","television"],"k":[27,23],"o":2},"imp":{"a":"Imp","b":"1F47F","d":true,"e":true,"f":true,"h":true,"j":["devil","angry","horns"],"k":[23,45],"o":2},"cupcake":{"a":"Cupcake","b":"1F9C1","d":true,"e":true,"f":true,"h":true,"k":[44,9],"o":11},"racing_motorcycle":{"a":"Racing Motorcycle","b":"1F3CD-FE0F","c":"1F3CD","d":true,"e":true,"f":true,"h":true,"k":[10,32],"o":2},"low_brightness":{"a":"Low Brightness Symbol","b":"1F505","d":true,"e":true,"f":true,"h":true,"j":["sun","afternoon","warm","summer"],"k":[27,33],"o":2},"shell":{"a":"Spiral Shell","b":"1F41A","d":true,"e":true,"f":true,"h":true,"j":["nature","sea","beach"],"k":[11,55],"o":2},"flag-gg":{"a":"Guernsey Flag","b":"1F1EC-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[2,2],"o":2},"high_brightness":{"a":"High Brightness Symbol","b":"1F506","d":true,"e":true,"f":true,"h":true,"j":["sun","light"],"k":[27,34],"o":2},"deaf_person":{"skin_variations":{"1F3FB":{"unified":"1F9CF-1F3FB","non_qualified":null,"image":"1f9cf-1f3fb.png","sheet_x":45,"sheet_y":11,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9CF-1F3FC","non_qualified":null,"image":"1f9cf-1f3fc.png","sheet_x":45,"sheet_y":12,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9CF-1F3FD","non_qualified":null,"image":"1f9cf-1f3fd.png","sheet_x":45,"sheet_y":13,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9CF-1F3FE","non_qualified":null,"image":"1f9cf-1f3fe.png","sheet_x":45,"sheet_y":14,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9CF-1F3FF","non_qualified":null,"image":"1f9cf-1f3ff.png","sheet_x":45,"sheet_y":15,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Deaf Person","b":"1F9CF","d":true,"e":true,"f":true,"h":true,"k":[45,10],"o":12},"skull":{"a":"Skull","b":"1F480","d":true,"e":true,"f":true,"h":true,"j":["dead","skeleton","creepy","death"],"k":[23,46],"o":2},"motor_scooter":{"a":"Motor Scooter","b":"1F6F5","d":true,"e":true,"f":true,"h":true,"j":["vehicle","vespa","sasha"],"k":[36,54],"o":4},"camera":{"a":"Camera","b":"1F4F7","d":true,"e":true,"f":true,"h":true,"j":["gadgets","photography"],"k":[27,20],"o":2},"pie":{"a":"Pie","b":"1F967","d":true,"e":true,"f":true,"h":true,"k":[41,54],"o":5},"flag-gh":{"a":"Ghana Flag","b":"1F1EC-1F1ED","d":true,"e":true,"f":true,"h":true,"k":[2,3],"o":2},"deaf_man":{"skin_variations":{"1F3FB":{"unified":"1F9CF-1F3FB-200D-2642-FE0F","non_qualified":"1F9CF-1F3FB-200D-2642","image":"1f9cf-1f3fb-200d-2642-fe0f.png","sheet_x":45,"sheet_y":5,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9CF-1F3FC-200D-2642-FE0F","non_qualified":"1F9CF-1F3FC-200D-2642","image":"1f9cf-1f3fc-200d-2642-fe0f.png","sheet_x":45,"sheet_y":6,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9CF-1F3FD-200D-2642-FE0F","non_qualified":"1F9CF-1F3FD-200D-2642","image":"1f9cf-1f3fd-200d-2642-fe0f.png","sheet_x":45,"sheet_y":7,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9CF-1F3FE-200D-2642-FE0F","non_qualified":"1F9CF-1F3FE-200D-2642","image":"1f9cf-1f3fe-200d-2642-fe0f.png","sheet_x":45,"sheet_y":8,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9CF-1F3FF-200D-2642-FE0F","non_qualified":"1F9CF-1F3FF-200D-2642","image":"1f9cf-1f3ff-200d-2642-fe0f.png","sheet_x":45,"sheet_y":9,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Deaf Man","b":"1F9CF-200D-2642-FE0F","c":"1F9CF-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[45,4],"o":12},"skull_and_crossbones":{"a":"Skull and Crossbones","b":"2620-FE0F","c":"2620","d":true,"e":true,"f":true,"h":true,"j":["poison","danger","deadly","scary","death","pirate","evil"],"k":[53,8],"o":2},"camera_with_flash":{"a":"Camera with Flash","b":"1F4F8","d":true,"e":true,"f":true,"h":true,"k":[27,21],"o":2},"signal_strength":{"a":"Antenna with Bars","b":"1F4F6","d":true,"e":true,"f":true,"h":true,"j":["blue-square","reception","phone","internet","connection","wifi","bluetooth","bars"],"k":[27,19],"o":2},"chocolate_bar":{"a":"Chocolate Bar","b":"1F36B","d":true,"e":true,"f":true,"h":true,"j":["food","snack","dessert","sweet"],"k":[7,10],"o":2},"manual_wheelchair":{"a":"Manual Wheelchair","b":"1F9BD","d":true,"e":true,"f":true,"h":true,"k":[44,5],"o":12},"snail":{"a":"Snail","b":"1F40C","d":true,"e":true,"f":true,"h":true,"j":["slow","animal","shell"],"k":[11,40],"o":2},"motorized_wheelchair":{"a":"Motorized Wheelchair","b":"1F9BC","d":true,"e":true,"f":true,"h":true,"k":[44,4],"o":12},"flag-gi":{"a":"Gibraltar Flag","b":"1F1EC-1F1EE","d":true,"e":true,"f":true,"h":true,"k":[2,4],"o":2},"hankey":{"a":"Pile of Poo","b":"1F4A9","d":true,"e":true,"f":true,"h":true,"k":[25,51],"n":["poop","shit"],"o":2},"vibration_mode":{"a":"Vibration Mode","b":"1F4F3","d":true,"e":true,"f":true,"h":true,"j":["orange-square","phone"],"k":[27,16],"o":2},"deaf_woman":{"skin_variations":{"1F3FB":{"unified":"1F9CF-1F3FB-200D-2640-FE0F","non_qualified":"1F9CF-1F3FB-200D-2640","image":"1f9cf-1f3fb-200d-2640-fe0f.png","sheet_x":44,"sheet_y":56,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9CF-1F3FC-200D-2640-FE0F","non_qualified":"1F9CF-1F3FC-200D-2640","image":"1f9cf-1f3fc-200d-2640-fe0f.png","sheet_x":45,"sheet_y":0,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9CF-1F3FD-200D-2640-FE0F","non_qualified":"1F9CF-1F3FD-200D-2640","image":"1f9cf-1f3fd-200d-2640-fe0f.png","sheet_x":45,"sheet_y":1,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9CF-1F3FE-200D-2640-FE0F","non_qualified":"1F9CF-1F3FE-200D-2640","image":"1f9cf-1f3fe-200d-2640-fe0f.png","sheet_x":45,"sheet_y":2,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9CF-1F3FF-200D-2640-FE0F","non_qualified":"1F9CF-1F3FF-200D-2640","image":"1f9cf-1f3ff-200d-2640-fe0f.png","sheet_x":45,"sheet_y":3,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Deaf Woman","b":"1F9CF-200D-2640-FE0F","c":"1F9CF-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[44,55],"o":12},"butterfly":{"a":"Butterfly","b":"1F98B","d":true,"e":true,"f":true,"h":true,"j":["animal","insect","nature","caterpillar"],"k":[42,29],"o":4},"video_camera":{"a":"Video Camera","b":"1F4F9","d":true,"e":true,"f":true,"h":true,"j":["film","record"],"k":[27,22],"o":2},"candy":{"a":"Candy","b":"1F36C","d":true,"e":true,"f":true,"h":true,"j":["snack","dessert","sweet","lolly"],"k":[7,11],"o":2},"auto_rickshaw":{"a":"Auto Rickshaw","b":"1F6FA","d":true,"e":true,"f":true,"h":true,"k":[37,2],"o":12},"bow":{"skin_variations":{"1F3FB":{"unified":"1F647-1F3FB","non_qualified":null,"image":"1f647-1f3fb.png","sheet_x":32,"sheet_y":39,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F647-1F3FC","non_qualified":null,"image":"1f647-1f3fc.png","sheet_x":32,"sheet_y":40,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F647-1F3FD","non_qualified":null,"image":"1f647-1f3fd.png","sheet_x":32,"sheet_y":41,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F647-1F3FE","non_qualified":null,"image":"1f647-1f3fe.png","sheet_x":32,"sheet_y":42,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F647-1F3FF","non_qualified":null,"image":"1f647-1f3ff.png","sheet_x":32,"sheet_y":43,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F647-200D-2642-FE0F","a":"Person Bowing Deeply","b":"1F647","d":true,"e":true,"f":true,"h":false,"k":[32,38],"o":2},"mobile_phone_off":{"a":"Mobile Phone off","b":"1F4F4","d":true,"e":true,"f":true,"h":true,"j":["mute","orange-square","silence","quiet"],"k":[27,17],"o":2},"clown_face":{"a":"Clown Face","b":"1F921","d":true,"e":true,"f":true,"h":true,"j":["face"],"k":[38,18],"o":4},"lollipop":{"a":"Lollipop","b":"1F36D","d":true,"e":true,"f":true,"h":true,"j":["food","snack","candy","sweet"],"k":[7,12],"o":2},"flag-gl":{"a":"Greenland Flag","b":"1F1EC-1F1F1","d":true,"e":true,"f":true,"h":true,"k":[2,5],"o":2},"vhs":{"a":"Videocassette","b":"1F4FC","d":true,"e":true,"f":true,"h":true,"j":["record","video","oldschool","90s","80s"],"k":[27,25],"o":2},"bug":{"a":"Bug","b":"1F41B","d":true,"e":true,"f":true,"h":true,"j":["animal","insect","nature","worm"],"k":[11,56],"o":2},"bike":{"a":"Bicycle","b":"1F6B2","d":true,"e":true,"f":true,"h":true,"j":["sports","bicycle","exercise","hipster"],"k":[35,9],"o":2},"man-bowing":{"skin_variations":{"1F3FB":{"unified":"1F647-1F3FB-200D-2642-FE0F","non_qualified":"1F647-1F3FB-200D-2642","image":"1f647-1f3fb-200d-2642-fe0f.png","sheet_x":32,"sheet_y":33,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F647-1F3FC-200D-2642-FE0F","non_qualified":"1F647-1F3FC-200D-2642","image":"1f647-1f3fc-200d-2642-fe0f.png","sheet_x":32,"sheet_y":34,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F647-1F3FD-200D-2642-FE0F","non_qualified":"1F647-1F3FD-200D-2642","image":"1f647-1f3fd-200d-2642-fe0f.png","sheet_x":32,"sheet_y":35,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F647-1F3FE-200D-2642-FE0F","non_qualified":"1F647-1F3FE-200D-2642","image":"1f647-1f3fe-200d-2642-fe0f.png","sheet_x":32,"sheet_y":36,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F647-1F3FF-200D-2642-FE0F","non_qualified":"1F647-1F3FF-200D-2642","image":"1f647-1f3ff-200d-2642-fe0f.png","sheet_x":32,"sheet_y":37,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F647","a":"Man Bowing","b":"1F647-200D-2642-FE0F","c":"1F647-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[32,32],"o":4},"female_sign":{"a":"Female Sign","b":"2640-FE0F","c":"2640","d":false,"e":true,"f":true,"h":true,"k":[53,18],"o":4},"japanese_ogre":{"a":"Japanese Ogre","b":"1F479","d":true,"e":true,"f":true,"h":true,"j":["monster","red","mask","halloween","scary","creepy","devil","demon","japanese","ogre"],"k":[23,34],"o":2},"custard":{"a":"Custard","b":"1F36E","d":true,"e":true,"f":true,"h":true,"j":["dessert","food"],"k":[7,13],"o":2},"ant":{"a":"Ant","b":"1F41C","d":true,"e":true,"f":true,"h":true,"j":["animal","insect","nature","bug"],"k":[12,0],"o":2},"mag":{"a":"Left-Pointing Magnifying Glass","b":"1F50D","d":true,"e":true,"f":true,"h":true,"j":["search","zoom","find","detective"],"k":[27,41],"o":2},"flag-gm":{"a":"Gambia Flag","b":"1F1EC-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[2,6],"o":2},"honey_pot":{"a":"Honey Pot","b":"1F36F","d":true,"e":true,"f":true,"h":true,"j":["bees","sweet","kitchen"],"k":[7,14],"o":2},"woman-bowing":{"skin_variations":{"1F3FB":{"unified":"1F647-1F3FB-200D-2640-FE0F","non_qualified":"1F647-1F3FB-200D-2640","image":"1f647-1f3fb-200d-2640-fe0f.png","sheet_x":32,"sheet_y":27,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F647-1F3FC-200D-2640-FE0F","non_qualified":"1F647-1F3FC-200D-2640","image":"1f647-1f3fc-200d-2640-fe0f.png","sheet_x":32,"sheet_y":28,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F647-1F3FD-200D-2640-FE0F","non_qualified":"1F647-1F3FD-200D-2640","image":"1f647-1f3fd-200d-2640-fe0f.png","sheet_x":32,"sheet_y":29,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F647-1F3FE-200D-2640-FE0F","non_qualified":"1F647-1F3FE-200D-2640","image":"1f647-1f3fe-200d-2640-fe0f.png","sheet_x":32,"sheet_y":30,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F647-1F3FF-200D-2640-FE0F","non_qualified":"1F647-1F3FF-200D-2640","image":"1f647-1f3ff-200d-2640-fe0f.png","sheet_x":32,"sheet_y":31,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Bowing","b":"1F647-200D-2640-FE0F","c":"1F647-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[32,26],"o":4},"male_sign":{"a":"Male Sign","b":"2642-FE0F","c":"2642","d":false,"e":true,"f":true,"h":true,"k":[53,19],"o":4},"mag_right":{"a":"Right-Pointing Magnifying Glass","b":"1F50E","d":true,"e":true,"f":true,"h":true,"j":["search","zoom","find","detective"],"k":[27,42],"o":2},"japanese_goblin":{"a":"Japanese Goblin","b":"1F47A","d":true,"e":true,"f":true,"h":true,"j":["red","evil","mask","monster","scary","creepy","japanese","goblin"],"k":[23,35],"o":2},"scooter":{"a":"Scooter","b":"1F6F4","d":true,"e":true,"f":true,"h":true,"k":[36,53],"o":4},"bee":{"a":"Honeybee","b":"1F41D","d":true,"e":true,"f":true,"h":true,"k":[12,1],"n":["honeybee"],"o":2},"flag-gn":{"a":"Guinea Flag","b":"1F1EC-1F1F3","d":true,"e":true,"f":true,"h":true,"k":[2,7],"o":2},"candle":{"a":"Candle","b":"1F56F-FE0F","c":"1F56F","d":true,"e":true,"f":true,"h":true,"j":["fire","wax"],"k":[29,6],"o":2},"skateboard":{"a":"Skateboard","b":"1F6F9","d":true,"e":true,"f":true,"h":true,"k":[37,1],"o":11},"medical_symbol":{"a":"Medical Symbol","b":"2695-FE0F","c":"2695","d":false,"e":true,"f":true,"h":true,"k":[53,44],"n":["staff_of_aesculapius"],"o":4},"ghost":{"a":"Ghost","b":"1F47B","d":true,"e":true,"f":true,"h":true,"j":["halloween","spooky","scary"],"k":[23,36],"o":2},"beetle":{"a":"Lady Beetle","b":"1F41E","d":true,"e":true,"f":true,"h":true,"j":["animal","insect","nature","ladybug"],"k":[12,2],"o":2},"face_palm":{"skin_variations":{"1F3FB":{"unified":"1F926-1F3FB","non_qualified":null,"image":"1f926-1f3fb.png","sheet_x":38,"sheet_y":36,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F926-1F3FC","non_qualified":null,"image":"1f926-1f3fc.png","sheet_x":38,"sheet_y":37,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F926-1F3FD","non_qualified":null,"image":"1f926-1f3fd.png","sheet_x":38,"sheet_y":38,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F926-1F3FE","non_qualified":null,"image":"1f926-1f3fe.png","sheet_x":38,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F926-1F3FF","non_qualified":null,"image":"1f926-1f3ff.png","sheet_x":38,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"a":"Face Palm","b":"1F926","d":true,"e":true,"f":true,"h":false,"k":[38,35],"o":4},"flag-gp":{"a":"Guadeloupe Flag","b":"1F1EC-1F1F5","d":true,"e":true,"f":true,"h":true,"k":[2,8],"o":2},"baby_bottle":{"a":"Baby Bottle","b":"1F37C","d":true,"e":true,"f":true,"h":true,"j":["food","container","milk"],"k":[7,27],"o":2},"infinity":{"a":"Infinity","b":"267E-FE0F","c":"267E","d":true,"e":true,"f":true,"h":true,"k":[53,39],"o":11},"glass_of_milk":{"a":"Glass of Milk","b":"1F95B","d":true,"e":true,"f":true,"h":true,"k":[41,42],"o":4},"man-facepalming":{"skin_variations":{"1F3FB":{"unified":"1F926-1F3FB-200D-2642-FE0F","non_qualified":"1F926-1F3FB-200D-2642","image":"1f926-1f3fb-200d-2642-fe0f.png","sheet_x":38,"sheet_y":30,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F926-1F3FC-200D-2642-FE0F","non_qualified":"1F926-1F3FC-200D-2642","image":"1f926-1f3fc-200d-2642-fe0f.png","sheet_x":38,"sheet_y":31,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F926-1F3FD-200D-2642-FE0F","non_qualified":"1F926-1F3FD-200D-2642","image":"1f926-1f3fd-200d-2642-fe0f.png","sheet_x":38,"sheet_y":32,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F926-1F3FE-200D-2642-FE0F","non_qualified":"1F926-1F3FE-200D-2642","image":"1f926-1f3fe-200d-2642-fe0f.png","sheet_x":38,"sheet_y":33,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F926-1F3FF-200D-2642-FE0F","non_qualified":"1F926-1F3FF-200D-2642","image":"1f926-1f3ff-200d-2642-fe0f.png","sheet_x":38,"sheet_y":34,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Facepalming","b":"1F926-200D-2642-FE0F","c":"1F926-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[38,29],"o":4},"cricket":{"a":"Cricket","b":"1F997","d":true,"e":true,"f":true,"h":true,"j":["sports"],"k":[42,41],"o":5},"busstop":{"a":"Bus Stop","b":"1F68F","d":true,"e":true,"f":true,"h":true,"j":["transportation","wait"],"k":[34,14],"o":2},"flag-gq":{"a":"Equatorial Guinea Flag","b":"1F1EC-1F1F6","d":true,"e":true,"f":true,"h":true,"k":[2,9],"o":2},"alien":{"a":"Extraterrestrial Alien","b":"1F47D","d":true,"e":true,"f":true,"h":true,"j":["UFO","paul","weird","outer_space"],"k":[23,43],"o":2},"bulb":{"a":"Electric Light Bulb","b":"1F4A1","d":true,"e":true,"f":true,"h":true,"j":["light","electricity","idea"],"k":[25,43],"o":2},"woman-facepalming":{"skin_variations":{"1F3FB":{"unified":"1F926-1F3FB-200D-2640-FE0F","non_qualified":"1F926-1F3FB-200D-2640","image":"1f926-1f3fb-200d-2640-fe0f.png","sheet_x":38,"sheet_y":24,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F926-1F3FC-200D-2640-FE0F","non_qualified":"1F926-1F3FC-200D-2640","image":"1f926-1f3fc-200d-2640-fe0f.png","sheet_x":38,"sheet_y":25,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F926-1F3FD-200D-2640-FE0F","non_qualified":"1F926-1F3FD-200D-2640","image":"1f926-1f3fd-200d-2640-fe0f.png","sheet_x":38,"sheet_y":26,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F926-1F3FE-200D-2640-FE0F","non_qualified":"1F926-1F3FE-200D-2640","image":"1f926-1f3fe-200d-2640-fe0f.png","sheet_x":38,"sheet_y":27,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F926-1F3FF-200D-2640-FE0F","non_qualified":"1F926-1F3FF-200D-2640","image":"1f926-1f3ff-200d-2640-fe0f.png","sheet_x":38,"sheet_y":28,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Facepalming","b":"1F926-200D-2640-FE0F","c":"1F926-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[38,23],"o":4},"spider":{"a":"Spider","b":"1F577-FE0F","c":"1F577","d":true,"e":true,"f":true,"h":true,"j":["animal","arachnid"],"k":[29,34],"o":2},"space_invader":{"a":"Alien Monster","b":"1F47E","d":true,"e":true,"f":true,"h":true,"j":["game","arcade","play"],"k":[23,44],"o":2},"motorway":{"a":"Motorway","b":"1F6E3-FE0F","c":"1F6E3","d":true,"e":true,"f":true,"h":true,"j":["road","cupertino","interstate","highway"],"k":[36,45],"o":2},"flag-gr":{"a":"Greece Flag","b":"1F1EC-1F1F7","d":true,"e":true,"f":true,"h":true,"k":[2,10],"o":2},"recycle":{"a":"Black Universal Recycling Symbol","b":"267B-FE0F","c":"267B","d":true,"e":true,"f":true,"h":true,"j":["arrow","environment","garbage","trash"],"k":[53,38],"o":2},"coffee":{"a":"Hot Beverage","b":"2615","d":true,"e":true,"f":true,"h":true,"j":["beverage","caffeine","latte","espresso"],"k":[53,0],"o":2},"flashlight":{"a":"Electric Torch","b":"1F526","d":true,"e":true,"f":true,"h":true,"j":["dark","camping","sight","night"],"k":[28,9],"o":2},"spider_web":{"a":"Spider Web","b":"1F578-FE0F","c":"1F578","d":true,"e":true,"f":true,"h":true,"j":["animal","insect","arachnid","silk"],"k":[29,35],"o":2},"izakaya_lantern":{"a":"Izakaya Lantern","b":"1F3EE","d":true,"e":true,"f":true,"h":true,"j":["light","paper","halloween","spooky"],"k":[11,8],"n":["lantern"],"o":2},"flag-gs":{"a":"South Georgia & South Sandwich Islands Flag","b":"1F1EC-1F1F8","d":true,"e":true,"f":true,"h":true,"k":[2,11],"o":2},"shrug":{"skin_variations":{"1F3FB":{"unified":"1F937-1F3FB","non_qualified":null,"image":"1f937-1f3fb.png","sheet_x":39,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F937-1F3FC","non_qualified":null,"image":"1f937-1f3fc.png","sheet_x":39,"sheet_y":49,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F937-1F3FD","non_qualified":null,"image":"1f937-1f3fd.png","sheet_x":39,"sheet_y":50,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F937-1F3FE","non_qualified":null,"image":"1f937-1f3fe.png","sheet_x":39,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F937-1F3FF","non_qualified":null,"image":"1f937-1f3ff.png","sheet_x":39,"sheet_y":52,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"a":"Shrug","b":"1F937","d":true,"e":true,"f":true,"h":false,"k":[39,47],"o":4},"fleur_de_lis":{"a":"Fleur De Lis","b":"269C-FE0F","c":"269C","d":true,"e":true,"f":true,"h":true,"j":["decorative","scout"],"k":[53,49],"o":2},"robot_face":{"a":"Robot Face","b":"1F916","d":true,"e":true,"f":true,"h":true,"k":[37,29],"o":2},"railway_track":{"a":"Railway Track","b":"1F6E4-FE0F","c":"1F6E4","d":true,"e":true,"f":true,"h":true,"j":["train","transportation"],"k":[36,46],"o":2},"tea":{"a":"Teacup Without Handle","b":"1F375","d":true,"e":true,"f":true,"h":true,"j":["drink","bowl","breakfast","green","british"],"k":[7,20],"o":2},"flag-gt":{"a":"Guatemala Flag","b":"1F1EC-1F1F9","d":true,"e":true,"f":true,"h":true,"k":[2,12],"o":2},"oil_drum":{"a":"Oil Drum","b":"1F6E2-FE0F","c":"1F6E2","d":true,"e":true,"f":true,"h":true,"j":["barrell"],"k":[36,44],"o":2},"diya_lamp":{"a":"Diya Lamp","b":"1FA94","d":true,"e":true,"f":true,"h":true,"k":[52,8],"o":12},"sake":{"a":"Sake Bottle and Cup","b":"1F376","d":true,"e":true,"f":true,"h":true,"j":["wine","drink","drunk","beverage","japanese","alcohol","booze"],"k":[7,21],"o":2},"trident":{"a":"Trident Emblem","b":"1F531","d":true,"e":true,"f":true,"h":true,"j":["weapon","spear"],"k":[28,20],"o":2},"man-shrugging":{"skin_variations":{"1F3FB":{"unified":"1F937-1F3FB-200D-2642-FE0F","non_qualified":"1F937-1F3FB-200D-2642","image":"1f937-1f3fb-200d-2642-fe0f.png","sheet_x":39,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F937-1F3FC-200D-2642-FE0F","non_qualified":"1F937-1F3FC-200D-2642","image":"1f937-1f3fc-200d-2642-fe0f.png","sheet_x":39,"sheet_y":43,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F937-1F3FD-200D-2642-FE0F","non_qualified":"1F937-1F3FD-200D-2642","image":"1f937-1f3fd-200d-2642-fe0f.png","sheet_x":39,"sheet_y":44,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F937-1F3FE-200D-2642-FE0F","non_qualified":"1F937-1F3FE-200D-2642","image":"1f937-1f3fe-200d-2642-fe0f.png","sheet_x":39,"sheet_y":45,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F937-1F3FF-200D-2642-FE0F","non_qualified":"1F937-1F3FF-200D-2642","image":"1f937-1f3ff-200d-2642-fe0f.png","sheet_x":39,"sheet_y":46,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Shrugging","b":"1F937-200D-2642-FE0F","c":"1F937-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[39,41],"o":4},"smiley_cat":{"a":"Smiling Cat Face with Open Mouth","b":"1F63A","d":true,"e":true,"f":true,"h":true,"j":["animal","cats","happy","smile"],"k":[31,36],"o":2},"scorpion":{"a":"Scorpion","b":"1F982","d":true,"e":true,"f":true,"h":true,"j":["animal","arachnid"],"k":[42,20],"o":2},"woman-shrugging":{"skin_variations":{"1F3FB":{"unified":"1F937-1F3FB-200D-2640-FE0F","non_qualified":"1F937-1F3FB-200D-2640","image":"1f937-1f3fb-200d-2640-fe0f.png","sheet_x":39,"sheet_y":36,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F937-1F3FC-200D-2640-FE0F","non_qualified":"1F937-1F3FC-200D-2640","image":"1f937-1f3fc-200d-2640-fe0f.png","sheet_x":39,"sheet_y":37,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F937-1F3FD-200D-2640-FE0F","non_qualified":"1F937-1F3FD-200D-2640","image":"1f937-1f3fd-200d-2640-fe0f.png","sheet_x":39,"sheet_y":38,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F937-1F3FE-200D-2640-FE0F","non_qualified":"1F937-1F3FE-200D-2640","image":"1f937-1f3fe-200d-2640-fe0f.png","sheet_x":39,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F937-1F3FF-200D-2640-FE0F","non_qualified":"1F937-1F3FF-200D-2640","image":"1f937-1f3ff-200d-2640-fe0f.png","sheet_x":39,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Shrugging","b":"1F937-200D-2640-FE0F","c":"1F937-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[39,35],"o":4},"notebook_with_decorative_cover":{"a":"Notebook with Decorative Cover","b":"1F4D4","d":true,"e":true,"f":true,"h":true,"j":["classroom","notes","record","paper","study"],"k":[26,42],"o":2},"fuelpump":{"a":"Fuel Pump","b":"26FD","d":true,"e":true,"f":true,"h":true,"j":["gas station","petroleum"],"k":[54,38],"o":2},"name_badge":{"a":"Name Badge","b":"1F4DB","d":true,"e":true,"f":true,"h":true,"j":["fire","forbid"],"k":[26,49],"o":2},"mosquito":{"a":"Mosquito","b":"1F99F","d":true,"e":true,"f":true,"h":true,"k":[42,49],"o":11},"flag-gu":{"a":"Guam Flag","b":"1F1EC-1F1FA","d":true,"e":true,"f":true,"h":true,"k":[2,13],"o":2},"smile_cat":{"a":"Grinning Cat Face with Smiling Eyes","b":"1F638","d":true,"e":true,"f":true,"h":true,"j":["animal","cats","smile"],"k":[31,34],"o":2},"champagne":{"a":"Bottle with Popping Cork","b":"1F37E","d":true,"e":true,"f":true,"h":true,"j":["drink","wine","bottle","celebration"],"k":[7,29],"o":2},"joy_cat":{"a":"Cat Face with Tears of Joy","b":"1F639","d":true,"e":true,"f":true,"h":true,"j":["animal","cats","haha","happy","tears"],"k":[31,35],"o":2},"closed_book":{"a":"Closed Book","b":"1F4D5","d":true,"e":true,"f":true,"h":true,"j":["read","library","knowledge","textbook","learn"],"k":[26,43],"o":2},"health_worker":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-2695-FE0F","non_qualified":"1F9D1-1F3FB-200D-2695","image":"1f9d1-1f3fb-200d-2695-fe0f.png","sheet_x":47,"sheet_y":50,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-2695-FE0F","non_qualified":"1F9D1-1F3FC-200D-2695","image":"1f9d1-1f3fc-200d-2695-fe0f.png","sheet_x":47,"sheet_y":51,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-2695-FE0F","non_qualified":"1F9D1-1F3FD-200D-2695","image":"1f9d1-1f3fd-200d-2695-fe0f.png","sheet_x":47,"sheet_y":52,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-2695-FE0F","non_qualified":"1F9D1-1F3FE-200D-2695","image":"1f9d1-1f3fe-200d-2695-fe0f.png","sheet_x":47,"sheet_y":53,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-2695-FE0F","non_qualified":"1F9D1-1F3FF-200D-2695","image":"1f9d1-1f3ff-200d-2695-fe0f.png","sheet_x":47,"sheet_y":54,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Health Worker","b":"1F9D1-200D-2695-FE0F","c":"1F9D1-200D-2695","d":true,"e":false,"f":false,"h":false,"k":[47,49],"o":12},"rotating_light":{"a":"Police Cars Revolving Light","b":"1F6A8","d":true,"e":true,"f":true,"h":true,"j":["police","ambulance","911","emergency","alert","error","pinged","law","legal"],"k":[34,56],"o":2},"microbe":{"a":"Microbe","b":"1F9A0","d":true,"e":true,"f":true,"h":true,"k":[42,50],"o":11},"flag-gw":{"a":"Guinea-Bissau Flag","b":"1F1EC-1F1FC","d":true,"e":true,"f":true,"h":true,"k":[2,14],"o":2},"wine_glass":{"a":"Wine Glass","b":"1F377","d":true,"e":true,"f":true,"h":true,"j":["drink","beverage","drunk","alcohol","booze"],"k":[7,22],"o":2},"beginner":{"a":"Japanese Symbol for Beginner","b":"1F530","d":true,"e":true,"f":true,"h":true,"j":["badge","shield"],"k":[28,19],"o":2},"bouquet":{"a":"Bouquet","b":"1F490","d":true,"e":true,"f":true,"h":true,"j":["flowers","nature","spring"],"k":[25,26],"o":2},"heart_eyes_cat":{"a":"Smiling Cat Face with Heart-Shaped Eyes","b":"1F63B","d":true,"e":true,"f":true,"h":true,"j":["animal","love","like","affection","cats","valentines","heart"],"k":[31,37],"o":2},"male-doctor":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-2695-FE0F","non_qualified":"1F468-1F3FB-200D-2695","image":"1f468-1f3fb-200d-2695-fe0f.png","sheet_x":17,"sheet_y":3,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-2695-FE0F","non_qualified":"1F468-1F3FC-200D-2695","image":"1f468-1f3fc-200d-2695-fe0f.png","sheet_x":17,"sheet_y":4,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-2695-FE0F","non_qualified":"1F468-1F3FD-200D-2695","image":"1f468-1f3fd-200d-2695-fe0f.png","sheet_x":17,"sheet_y":5,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-2695-FE0F","non_qualified":"1F468-1F3FE-200D-2695","image":"1f468-1f3fe-200d-2695-fe0f.png","sheet_x":17,"sheet_y":6,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-2695-FE0F","non_qualified":"1F468-1F3FF-200D-2695","image":"1f468-1f3ff-200d-2695-fe0f.png","sheet_x":17,"sheet_y":7,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Doctor","b":"1F468-200D-2695-FE0F","c":"1F468-200D-2695","d":true,"e":true,"f":true,"h":true,"k":[17,2],"o":4},"book":{"a":"Open Book","b":"1F4D6","d":true,"e":true,"f":true,"h":true,"k":[26,44],"n":["open_book"],"o":2},"traffic_light":{"a":"Horizontal Traffic Light","b":"1F6A5","d":true,"e":true,"f":true,"h":true,"j":["transportation","signal"],"k":[34,53],"o":2},"cocktail":{"a":"Cocktail Glass","b":"1F378","d":true,"e":true,"f":true,"h":true,"j":["drink","drunk","alcohol","beverage","booze","mojito"],"k":[7,23],"o":2},"o":{"a":"Heavy Large Circle","b":"2B55","d":true,"e":true,"f":true,"h":true,"j":["circle","round"],"k":[55,43],"o":2},"flag-gy":{"a":"Guyana Flag","b":"1F1EC-1F1FE","d":true,"e":true,"f":true,"h":true,"k":[2,15],"o":2},"female-doctor":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-2695-FE0F","non_qualified":"1F469-1F3FB-200D-2695","image":"1f469-1f3fb-200d-2695-fe0f.png","sheet_x":19,"sheet_y":45,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-2695-FE0F","non_qualified":"1F469-1F3FC-200D-2695","image":"1f469-1f3fc-200d-2695-fe0f.png","sheet_x":19,"sheet_y":46,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-2695-FE0F","non_qualified":"1F469-1F3FD-200D-2695","image":"1f469-1f3fd-200d-2695-fe0f.png","sheet_x":19,"sheet_y":47,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-2695-FE0F","non_qualified":"1F469-1F3FE-200D-2695","image":"1f469-1f3fe-200d-2695-fe0f.png","sheet_x":19,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-2695-FE0F","non_qualified":"1F469-1F3FF-200D-2695","image":"1f469-1f3ff-200d-2695-fe0f.png","sheet_x":19,"sheet_y":49,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Doctor","b":"1F469-200D-2695-FE0F","c":"1F469-200D-2695","d":true,"e":true,"f":true,"h":true,"k":[19,44],"o":4},"smirk_cat":{"a":"Cat Face with Wry Smile","b":"1F63C","d":true,"e":true,"f":true,"h":true,"j":["animal","cats","smirk"],"k":[31,38],"o":2},"green_book":{"a":"Green Book","b":"1F4D7","d":true,"e":true,"f":true,"h":true,"j":["read","library","knowledge","study"],"k":[26,45],"o":2},"cherry_blossom":{"a":"Cherry Blossom","b":"1F338","d":true,"e":true,"f":true,"h":true,"j":["nature","plant","spring","flower"],"k":[6,16],"o":2},"flag-hk":{"a":"Hong Kong Sar China Flag","b":"1F1ED-1F1F0","d":true,"e":true,"f":true,"h":true,"k":[2,16],"o":2},"vertical_traffic_light":{"a":"Vertical Traffic Light","b":"1F6A6","d":true,"e":true,"f":true,"h":true,"j":["transportation","driving"],"k":[34,54],"o":2},"white_check_mark":{"a":"White Heavy Check Mark","b":"2705","d":true,"e":true,"f":true,"h":true,"j":["green-square","ok","agree","vote","election","answer","tick"],"k":[54,40],"o":2},"tropical_drink":{"a":"Tropical Drink","b":"1F379","d":true,"e":true,"f":true,"h":true,"j":["beverage","cocktail","summer","beach","alcohol","booze","mojito"],"k":[7,24],"o":2},"kissing_cat":{"a":"Kissing Cat Face with Closed Eyes","b":"1F63D","d":true,"e":true,"f":true,"h":true,"j":["animal","cats","kiss"],"k":[31,39],"o":2},"flag-hm":{"a":"Heard & Mcdonald Islands Flag","b":"1F1ED-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[2,17],"o":2},"octagonal_sign":{"a":"Octagonal Sign","b":"1F6D1","d":true,"e":true,"f":true,"h":true,"k":[36,39],"o":4},"white_flower":{"a":"White Flower","b":"1F4AE","d":true,"e":true,"f":true,"h":true,"j":["japanese","spring"],"k":[26,4],"o":2},"ballot_box_with_check":{"a":"Ballot Box with Check","b":"2611-FE0F","c":"2611","d":true,"e":true,"f":true,"h":true,"j":["ok","agree","confirm","black-square","vote","election","yes","tick"],"k":[52,55],"o":2},"student":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F393","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f393.png","sheet_x":45,"sheet_y":30,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F393","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f393.png","sheet_x":45,"sheet_y":31,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F393","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f393.png","sheet_x":45,"sheet_y":32,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F393","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f393.png","sheet_x":45,"sheet_y":33,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F393","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f393.png","sheet_x":45,"sheet_y":34,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Student","b":"1F9D1-200D-1F393","d":true,"e":false,"f":false,"h":false,"k":[45,29],"o":12},"blue_book":{"a":"Blue Book","b":"1F4D8","d":true,"e":true,"f":true,"h":true,"j":["read","library","knowledge","learn","study"],"k":[26,46],"o":2},"beer":{"a":"Beer Mug","b":"1F37A","d":true,"e":true,"f":true,"h":true,"j":["relax","beverage","drink","drunk","party","pub","summer","alcohol","booze"],"k":[7,25],"o":2},"construction":{"a":"Construction Sign","b":"1F6A7","d":true,"e":true,"f":true,"h":true,"j":["wip","progress","caution","warning"],"k":[34,55],"o":2},"rosette":{"a":"Rosette","b":"1F3F5-FE0F","c":"1F3F5","d":true,"e":true,"f":true,"h":true,"j":["flower","decoration","military"],"k":[11,18],"o":2},"heavy_check_mark":{"a":"Heavy Check Mark","b":"2714-FE0F","c":"2714","d":true,"e":true,"f":true,"h":true,"j":["ok","nike","answer","yes","tick"],"k":[55,12],"o":2},"scream_cat":{"a":"Weary Cat Face","b":"1F640","d":true,"e":true,"f":true,"h":true,"j":["animal","cats","munch","scared","scream"],"k":[31,42],"o":2},"orange_book":{"a":"Orange Book","b":"1F4D9","d":true,"e":true,"f":true,"h":true,"j":["read","library","knowledge","textbook","study"],"k":[26,47],"o":2},"beers":{"a":"Clinking Beer Mugs","b":"1F37B","d":true,"e":true,"f":true,"h":true,"j":["relax","beverage","drink","drunk","party","pub","summer","alcohol","booze"],"k":[7,26],"o":2},"male-student":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F393","non_qualified":null,"image":"1f468-1f3fb-200d-1f393.png","sheet_x":14,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F393","non_qualified":null,"image":"1f468-1f3fc-200d-1f393.png","sheet_x":14,"sheet_y":52,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F393","non_qualified":null,"image":"1f468-1f3fd-200d-1f393.png","sheet_x":14,"sheet_y":53,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F393","non_qualified":null,"image":"1f468-1f3fe-200d-1f393.png","sheet_x":14,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F393","non_qualified":null,"image":"1f468-1f3ff-200d-1f393.png","sheet_x":14,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Student","b":"1F468-200D-1F393","d":true,"e":true,"f":true,"h":true,"k":[14,50],"o":4},"flag-hn":{"a":"Honduras Flag","b":"1F1ED-1F1F3","d":true,"e":true,"f":true,"h":true,"k":[2,18],"o":2},"crying_cat_face":{"a":"Crying Cat Face","b":"1F63F","d":true,"e":true,"f":true,"h":true,"j":["animal","tears","weep","sad","cats","upset","cry"],"k":[31,41],"o":2},"anchor":{"a":"Anchor","b":"2693","d":true,"e":true,"f":true,"h":true,"j":["ship","ferry","sea","boat"],"k":[53,42],"o":2},"flag-hr":{"a":"Croatia Flag","b":"1F1ED-1F1F7","d":true,"e":true,"f":true,"h":true,"k":[2,19],"o":2},"heavy_multiplication_x":{"a":"Heavy Multiplication X","b":"2716-FE0F","c":"2716","d":true,"e":true,"f":true,"h":true,"j":["math","calculation"],"k":[55,13],"o":2},"female-student":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F393","non_qualified":null,"image":"1f469-1f3fb-200d-1f393.png","sheet_x":17,"sheet_y":41,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F393","non_qualified":null,"image":"1f469-1f3fc-200d-1f393.png","sheet_x":17,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F393","non_qualified":null,"image":"1f469-1f3fd-200d-1f393.png","sheet_x":17,"sheet_y":43,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F393","non_qualified":null,"image":"1f469-1f3fe-200d-1f393.png","sheet_x":17,"sheet_y":44,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F393","non_qualified":null,"image":"1f469-1f3ff-200d-1f393.png","sheet_x":17,"sheet_y":45,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Student","b":"1F469-200D-1F393","d":true,"e":true,"f":true,"h":true,"k":[17,40],"o":4},"rose":{"a":"Rose","b":"1F339","d":true,"e":true,"f":true,"h":true,"j":["flowers","valentines","love","spring"],"k":[6,17],"o":2},"books":{"a":"Books","b":"1F4DA","d":true,"e":true,"f":true,"h":true,"j":["literature","library","study"],"k":[26,48],"o":2},"clinking_glasses":{"a":"Clinking Glasses","b":"1F942","d":true,"e":true,"f":true,"h":true,"j":["beverage","drink","party","alcohol","celebrate","cheers"],"k":[41,18],"o":4},"teacher":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F3EB","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f3eb.png","sheet_x":45,"sheet_y":48,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F3EB","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f3eb.png","sheet_x":45,"sheet_y":49,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F3EB","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f3eb.png","sheet_x":45,"sheet_y":50,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F3EB","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f3eb.png","sheet_x":45,"sheet_y":51,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F3EB","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f3eb.png","sheet_x":45,"sheet_y":52,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Teacher","b":"1F9D1-200D-1F3EB","d":true,"e":false,"f":false,"h":false,"k":[45,47],"o":12},"x":{"a":"Cross Mark","b":"274C","d":true,"e":true,"f":true,"h":true,"j":["no","delete","remove","cancel"],"k":[55,21],"o":2},"pouting_cat":{"a":"Pouting Cat Face","b":"1F63E","d":true,"e":true,"f":true,"h":true,"j":["animal","cats"],"k":[31,40],"o":2},"wilted_flower":{"a":"Wilted Flower","b":"1F940","d":true,"e":true,"f":true,"h":true,"j":["plant","nature","flower"],"k":[41,16],"o":4},"boat":{"a":"Sailboat","b":"26F5","d":true,"e":true,"f":true,"h":true,"k":[54,16],"n":["sailboat"],"o":2},"flag-ht":{"a":"Haiti Flag","b":"1F1ED-1F1F9","d":true,"e":true,"f":true,"h":true,"k":[2,20],"o":2},"tumbler_glass":{"a":"Tumbler Glass","b":"1F943","d":true,"e":true,"f":true,"h":true,"j":["drink","beverage","drunk","alcohol","liquor","booze","bourbon","scotch","whisky","glass","shot"],"k":[41,19],"o":4},"notebook":{"a":"Notebook","b":"1F4D3","d":true,"e":true,"f":true,"h":true,"j":["stationery","record","notes","paper","study"],"k":[26,41],"o":2},"male-teacher":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F3EB","non_qualified":null,"image":"1f468-1f3fb-200d-1f3eb.png","sheet_x":15,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F3EB","non_qualified":null,"image":"1f468-1f3fc-200d-1f3eb.png","sheet_x":15,"sheet_y":13,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F3EB","non_qualified":null,"image":"1f468-1f3fd-200d-1f3eb.png","sheet_x":15,"sheet_y":14,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F3EB","non_qualified":null,"image":"1f468-1f3fe-200d-1f3eb.png","sheet_x":15,"sheet_y":15,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F3EB","non_qualified":null,"image":"1f468-1f3ff-200d-1f3eb.png","sheet_x":15,"sheet_y":16,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Teacher","b":"1F468-200D-1F3EB","d":true,"e":true,"f":true,"h":true,"k":[15,11],"o":4},"ledger":{"a":"Ledger","b":"1F4D2","d":true,"e":true,"f":true,"h":true,"j":["notes","paper"],"k":[26,40],"o":2},"flag-hu":{"a":"Hungary Flag","b":"1F1ED-1F1FA","d":true,"e":true,"f":true,"h":true,"k":[2,21],"o":2},"cup_with_straw":{"a":"Cup with Straw","b":"1F964","d":true,"e":true,"f":true,"h":true,"k":[41,51],"o":5},"hibiscus":{"a":"Hibiscus","b":"1F33A","d":true,"e":true,"f":true,"h":true,"j":["plant","vegetable","flowers","beach"],"k":[6,18],"o":2},"see_no_evil":{"a":"See-No-Evil Monkey","b":"1F648","d":true,"e":true,"f":true,"h":true,"j":["monkey","animal","nature","haha"],"k":[32,44],"o":2},"canoe":{"a":"Canoe","b":"1F6F6","d":true,"e":true,"f":true,"h":true,"j":["boat","paddle","water","ship"],"k":[36,55],"o":4},"negative_squared_cross_mark":{"a":"Negative Squared Cross Mark","b":"274E","d":true,"e":true,"f":true,"h":true,"j":["x","green-square","no","deny"],"k":[55,22],"o":2},"flag-ic":{"a":"Canary Islands Flag","b":"1F1EE-1F1E8","d":true,"e":true,"f":true,"h":true,"k":[2,22],"o":2},"beverage_box":{"a":"Beverage Box","b":"1F9C3","d":true,"e":true,"f":true,"h":true,"k":[44,11],"o":12},"speedboat":{"a":"Speedboat","b":"1F6A4","d":true,"e":true,"f":true,"h":true,"j":["ship","transportation","vehicle","summer"],"k":[34,52],"o":2},"heavy_plus_sign":{"a":"Heavy Plus Sign","b":"2795","d":true,"e":true,"f":true,"h":true,"j":["math","calculation","addition","more","increase"],"k":[55,29],"o":2},"sunflower":{"a":"Sunflower","b":"1F33B","d":true,"e":true,"f":true,"h":true,"j":["nature","plant","fall"],"k":[6,19],"o":2},"page_with_curl":{"a":"Page with Curl","b":"1F4C3","d":true,"e":true,"f":true,"h":true,"j":["documents","office","paper"],"k":[26,25],"o":2},"female-teacher":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F3EB","non_qualified":null,"image":"1f469-1f3fb-200d-1f3eb.png","sheet_x":18,"sheet_y":2,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F3EB","non_qualified":null,"image":"1f469-1f3fc-200d-1f3eb.png","sheet_x":18,"sheet_y":3,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F3EB","non_qualified":null,"image":"1f469-1f3fd-200d-1f3eb.png","sheet_x":18,"sheet_y":4,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F3EB","non_qualified":null,"image":"1f469-1f3fe-200d-1f3eb.png","sheet_x":18,"sheet_y":5,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F3EB","non_qualified":null,"image":"1f469-1f3ff-200d-1f3eb.png","sheet_x":18,"sheet_y":6,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Teacher","b":"1F469-200D-1F3EB","d":true,"e":true,"f":true,"h":true,"k":[18,1],"o":4},"hear_no_evil":{"a":"Hear-No-Evil Monkey","b":"1F649","d":true,"e":true,"f":true,"h":true,"j":["animal","monkey","nature"],"k":[32,45],"o":2},"mate_drink":{"a":"Mate Drink","b":"1F9C9","d":true,"e":true,"f":true,"h":true,"k":[44,17],"o":12},"passenger_ship":{"a":"Passenger Ship","b":"1F6F3-FE0F","c":"1F6F3","d":true,"e":true,"f":true,"h":true,"j":["yacht","cruise","ferry"],"k":[36,52],"o":2},"judge":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-2696-FE0F","non_qualified":"1F9D1-1F3FB-200D-2696","image":"1f9d1-1f3fb-200d-2696-fe0f.png","sheet_x":47,"sheet_y":56,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-2696-FE0F","non_qualified":"1F9D1-1F3FC-200D-2696","image":"1f9d1-1f3fc-200d-2696-fe0f.png","sheet_x":48,"sheet_y":0,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-2696-FE0F","non_qualified":"1F9D1-1F3FD-200D-2696","image":"1f9d1-1f3fd-200d-2696-fe0f.png","sheet_x":48,"sheet_y":1,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-2696-FE0F","non_qualified":"1F9D1-1F3FE-200D-2696","image":"1f9d1-1f3fe-200d-2696-fe0f.png","sheet_x":48,"sheet_y":2,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-2696-FE0F","non_qualified":"1F9D1-1F3FF-200D-2696","image":"1f9d1-1f3ff-200d-2696-fe0f.png","sheet_x":48,"sheet_y":3,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Judge","b":"1F9D1-200D-2696-FE0F","c":"1F9D1-200D-2696","d":true,"e":false,"f":false,"h":false,"k":[47,55],"o":12},"scroll":{"a":"Scroll","b":"1F4DC","d":true,"e":true,"f":true,"h":true,"j":["documents","ancient","history","paper"],"k":[26,50],"o":2},"blossom":{"a":"Blossom","b":"1F33C","d":true,"e":true,"f":true,"h":true,"j":["nature","flowers","yellow"],"k":[6,20],"o":2},"flag-id":{"a":"Indonesia Flag","b":"1F1EE-1F1E9","d":true,"e":true,"f":true,"h":true,"k":[2,23],"o":2},"speak_no_evil":{"a":"Speak-No-Evil Monkey","b":"1F64A","d":true,"e":true,"f":true,"h":true,"j":["monkey","animal","nature","omg"],"k":[32,46],"o":2},"heavy_minus_sign":{"a":"Heavy Minus Sign","b":"2796","d":true,"e":true,"f":true,"h":true,"j":["math","calculation","subtract","less"],"k":[55,30],"o":2},"flag-ie":{"a":"Ireland Flag","b":"1F1EE-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[2,24],"o":2},"ice_cube":{"a":"Ice Cube","b":"1F9CA","d":true,"e":true,"f":true,"h":true,"k":[44,18],"o":12},"page_facing_up":{"a":"Page Facing Up","b":"1F4C4","d":true,"e":true,"f":true,"h":true,"j":["documents","office","paper","information"],"k":[26,26],"o":2},"male-judge":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-2696-FE0F","non_qualified":"1F468-1F3FB-200D-2696","image":"1f468-1f3fb-200d-2696-fe0f.png","sheet_x":17,"sheet_y":9,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-2696-FE0F","non_qualified":"1F468-1F3FC-200D-2696","image":"1f468-1f3fc-200d-2696-fe0f.png","sheet_x":17,"sheet_y":10,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-2696-FE0F","non_qualified":"1F468-1F3FD-200D-2696","image":"1f468-1f3fd-200d-2696-fe0f.png","sheet_x":17,"sheet_y":11,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-2696-FE0F","non_qualified":"1F468-1F3FE-200D-2696","image":"1f468-1f3fe-200d-2696-fe0f.png","sheet_x":17,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-2696-FE0F","non_qualified":"1F468-1F3FF-200D-2696","image":"1f468-1f3ff-200d-2696-fe0f.png","sheet_x":17,"sheet_y":13,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Judge","b":"1F468-200D-2696-FE0F","c":"1F468-200D-2696","d":true,"e":true,"f":true,"h":true,"k":[17,8],"o":4},"tulip":{"a":"Tulip","b":"1F337","d":true,"e":true,"f":true,"h":true,"j":["flowers","plant","nature","summer","spring"],"k":[6,15],"o":2},"ferry":{"a":"Ferry","b":"26F4-FE0F","c":"26F4","d":true,"e":true,"f":true,"h":true,"j":["boat","ship","yacht"],"k":[54,15],"o":2},"kiss":{"a":"Kiss Mark","b":"1F48B","d":true,"e":true,"f":true,"h":true,"j":["face","lips","love","like","affection","valentines"],"k":[25,21],"o":2},"heavy_division_sign":{"a":"Heavy Division Sign","b":"2797","d":true,"e":true,"f":true,"h":true,"j":["divide","math","calculation"],"k":[55,31],"o":2},"newspaper":{"a":"Newspaper","b":"1F4F0","d":true,"e":true,"f":true,"h":true,"j":["press","headline"],"k":[27,13],"o":2},"female-judge":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-2696-FE0F","non_qualified":"1F469-1F3FB-200D-2696","image":"1f469-1f3fb-200d-2696-fe0f.png","sheet_x":19,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-2696-FE0F","non_qualified":"1F469-1F3FC-200D-2696","image":"1f469-1f3fc-200d-2696-fe0f.png","sheet_x":19,"sheet_y":52,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-2696-FE0F","non_qualified":"1F469-1F3FD-200D-2696","image":"1f469-1f3fd-200d-2696-fe0f.png","sheet_x":19,"sheet_y":53,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-2696-FE0F","non_qualified":"1F469-1F3FE-200D-2696","image":"1f469-1f3fe-200d-2696-fe0f.png","sheet_x":19,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-2696-FE0F","non_qualified":"1F469-1F3FF-200D-2696","image":"1f469-1f3ff-200d-2696-fe0f.png","sheet_x":19,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Judge","b":"1F469-200D-2696-FE0F","c":"1F469-200D-2696","d":true,"e":true,"f":true,"h":true,"k":[19,50],"o":4},"seedling":{"a":"Seedling","b":"1F331","d":true,"e":true,"f":true,"h":true,"j":["plant","nature","grass","lawn","spring"],"k":[6,9],"o":2},"love_letter":{"a":"Love Letter","b":"1F48C","d":true,"e":true,"f":true,"h":true,"j":["email","like","affection","envelope","valentines"],"k":[25,22],"o":2},"chopsticks":{"a":"Chopsticks","b":"1F962","d":true,"e":true,"f":true,"h":true,"k":[41,49],"o":5},"motor_boat":{"a":"Motor Boat","b":"1F6E5-FE0F","c":"1F6E5","d":true,"e":true,"f":true,"h":true,"j":["ship"],"k":[36,47],"o":2},"flag-il":{"a":"Israel Flag","b":"1F1EE-1F1F1","d":true,"e":true,"f":true,"h":true,"k":[2,25],"o":2},"curly_loop":{"a":"Curly Loop","b":"27B0","d":true,"e":true,"f":true,"h":true,"j":["scribble","draw","shape","squiggle"],"k":[55,33],"o":2},"flag-im":{"a":"Isle of Man Flag","b":"1F1EE-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[2,26],"o":2},"evergreen_tree":{"a":"Evergreen Tree","b":"1F332","d":true,"e":true,"f":true,"h":true,"j":["plant","nature"],"k":[6,10],"o":2},"cupid":{"a":"Heart with Arrow","b":"1F498","d":true,"e":true,"f":true,"h":true,"j":["love","like","heart","affection","valentines"],"k":[25,34],"o":2},"loop":{"a":"Double Curly Loop","b":"27BF","d":true,"e":true,"f":true,"h":true,"j":["tape","cassette"],"k":[55,34],"o":2},"ship":{"a":"Ship","b":"1F6A2","d":true,"e":true,"f":true,"h":true,"j":["transportation","titanic","deploy"],"k":[34,33],"o":2},"farmer":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F33E","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f33e.png","sheet_x":45,"sheet_y":18,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F33E","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f33e.png","sheet_x":45,"sheet_y":19,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F33E","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f33e.png","sheet_x":45,"sheet_y":20,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F33E","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f33e.png","sheet_x":45,"sheet_y":21,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F33E","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f33e.png","sheet_x":45,"sheet_y":22,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Farmer","b":"1F9D1-200D-1F33E","d":true,"e":false,"f":false,"h":false,"k":[45,17],"o":12},"rolled_up_newspaper":{"a":"Rolled Up Newspaper","b":"1F5DE-FE0F","c":"1F5DE","d":true,"e":true,"f":true,"h":true,"k":[30,23],"o":2},"knife_fork_plate":{"a":"Knife Fork Plate","b":"1F37D-FE0F","c":"1F37D","d":true,"e":true,"f":true,"h":true,"k":[7,28],"o":2},"fork_and_knife":{"a":"Fork and Knife","b":"1F374","d":true,"e":true,"f":true,"h":true,"j":["cutlery","kitchen"],"k":[7,19],"o":2},"male-farmer":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F33E","non_qualified":null,"image":"1f468-1f3fb-200d-1f33e.png","sheet_x":14,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F33E","non_qualified":null,"image":"1f468-1f3fc-200d-1f33e.png","sheet_x":14,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F33E","non_qualified":null,"image":"1f468-1f3fd-200d-1f33e.png","sheet_x":14,"sheet_y":41,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F33E","non_qualified":null,"image":"1f468-1f3fe-200d-1f33e.png","sheet_x":14,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F33E","non_qualified":null,"image":"1f468-1f3ff-200d-1f33e.png","sheet_x":14,"sheet_y":43,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Farmer","b":"1F468-200D-1F33E","d":true,"e":true,"f":true,"h":true,"k":[14,38],"o":4},"bookmark_tabs":{"a":"Bookmark Tabs","b":"1F4D1","d":true,"e":true,"f":true,"h":true,"j":["favorite","save","order","tidy"],"k":[26,39],"o":2},"part_alternation_mark":{"a":"Part Alternation Mark","b":"303D-FE0F","c":"303D","d":true,"e":true,"f":true,"h":true,"j":["graph","presentation","stats","business","economics","bad"],"k":[55,45],"o":2},"flag-in":{"a":"India Flag","b":"1F1EE-1F1F3","d":true,"e":true,"f":true,"h":true,"k":[2,27],"o":2},"gift_heart":{"a":"Heart with Ribbon","b":"1F49D","d":true,"e":true,"f":true,"h":true,"j":["love","valentines"],"k":[25,39],"o":2},"airplane":{"a":"Airplane","b":"2708-FE0F","c":"2708","d":true,"e":true,"f":true,"h":true,"j":["vehicle","transportation","flight","fly"],"k":[54,41],"o":2},"deciduous_tree":{"a":"Deciduous Tree","b":"1F333","d":true,"e":true,"f":true,"h":true,"j":["plant","nature"],"k":[6,11],"o":2},"spoon":{"a":"Spoon","b":"1F944","d":true,"e":true,"f":true,"h":true,"j":["cutlery","kitchen","tableware"],"k":[41,20],"o":4},"flag-io":{"a":"British Indian Ocean Territory Flag","b":"1F1EE-1F1F4","d":true,"e":true,"f":true,"h":true,"k":[2,28],"o":2},"palm_tree":{"a":"Palm Tree","b":"1F334","d":true,"e":true,"f":true,"h":true,"j":["plant","vegetable","nature","summer","beach","mojito","tropical"],"k":[6,12],"o":2},"sparkling_heart":{"a":"Sparkling Heart","b":"1F496","d":true,"e":true,"f":true,"h":true,"j":["love","like","affection","valentines"],"k":[25,32],"o":2},"female-farmer":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F33E","non_qualified":null,"image":"1f469-1f3fb-200d-1f33e.png","sheet_x":17,"sheet_y":29,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F33E","non_qualified":null,"image":"1f469-1f3fc-200d-1f33e.png","sheet_x":17,"sheet_y":30,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F33E","non_qualified":null,"image":"1f469-1f3fd-200d-1f33e.png","sheet_x":17,"sheet_y":31,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F33E","non_qualified":null,"image":"1f469-1f3fe-200d-1f33e.png","sheet_x":17,"sheet_y":32,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F33E","non_qualified":null,"image":"1f469-1f3ff-200d-1f33e.png","sheet_x":17,"sheet_y":33,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Farmer","b":"1F469-200D-1F33E","d":true,"e":true,"f":true,"h":true,"k":[17,28],"o":4},"eight_spoked_asterisk":{"a":"Eight Spoked Asterisk","b":"2733-FE0F","c":"2733","d":true,"e":true,"f":true,"h":true,"j":["star","sparkle","green-square"],"k":[55,17],"o":2},"small_airplane":{"a":"Small Airplane","b":"1F6E9-FE0F","c":"1F6E9","d":true,"e":true,"f":true,"h":true,"j":["flight","transportation","fly","vehicle"],"k":[36,48],"o":2},"bookmark":{"a":"Bookmark","b":"1F516","d":true,"e":true,"f":true,"h":true,"j":["favorite","label","save"],"k":[27,50],"o":2},"cook":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F373","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f373.png","sheet_x":45,"sheet_y":24,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F373","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f373.png","sheet_x":45,"sheet_y":25,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F373","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f373.png","sheet_x":45,"sheet_y":26,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F373","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f373.png","sheet_x":45,"sheet_y":27,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F373","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f373.png","sheet_x":45,"sheet_y":28,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Cook","b":"1F9D1-200D-1F373","d":true,"e":false,"f":false,"h":false,"k":[45,23],"o":12},"eight_pointed_black_star":{"a":"Eight Pointed Black Star","b":"2734-FE0F","c":"2734","d":true,"e":true,"f":true,"h":true,"j":["orange-square","shape","polygon"],"k":[55,18],"o":2},"heartpulse":{"a":"Growing Heart","b":"1F497","d":true,"e":true,"f":true,"h":true,"j":["like","love","affection","valentines","pink"],"k":[25,33],"o":2},"label":{"a":"Label","b":"1F3F7-FE0F","c":"1F3F7","d":true,"e":true,"f":true,"h":true,"j":["sale","tag"],"k":[11,19],"o":2},"flag-iq":{"a":"Iraq Flag","b":"1F1EE-1F1F6","d":true,"e":true,"f":true,"h":true,"k":[2,29],"o":2},"hocho":{"a":"Hocho","b":"1F52A","d":true,"e":true,"f":true,"h":true,"j":["knife","blade","cutlery","kitchen","weapon"],"k":[28,13],"n":["knife"],"o":2},"cactus":{"a":"Cactus","b":"1F335","d":true,"e":true,"f":true,"h":true,"j":["vegetable","plant","nature"],"k":[6,13],"o":2},"airplane_departure":{"a":"Airplane Departure","b":"1F6EB","d":true,"e":true,"f":true,"h":true,"k":[36,49],"o":2},"airplane_arriving":{"a":"Airplane Arriving","b":"1F6EC","d":true,"e":true,"f":true,"h":true,"k":[36,50],"o":2},"ear_of_rice":{"a":"Ear of Rice","b":"1F33E","d":true,"e":true,"f":true,"h":true,"j":["nature","plant"],"k":[6,22],"o":2},"flag-ir":{"a":"Iran Flag","b":"1F1EE-1F1F7","d":true,"e":true,"f":true,"h":true,"k":[2,30],"o":2},"moneybag":{"a":"Money Bag","b":"1F4B0","d":true,"e":true,"f":true,"h":true,"j":["dollar","payment","coins","sale"],"k":[26,6],"o":2},"male-cook":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F373","non_qualified":null,"image":"1f468-1f3fb-200d-1f373.png","sheet_x":14,"sheet_y":45,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F373","non_qualified":null,"image":"1f468-1f3fc-200d-1f373.png","sheet_x":14,"sheet_y":46,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F373","non_qualified":null,"image":"1f468-1f3fd-200d-1f373.png","sheet_x":14,"sheet_y":47,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F373","non_qualified":null,"image":"1f468-1f3fe-200d-1f373.png","sheet_x":14,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F373","non_qualified":null,"image":"1f468-1f3ff-200d-1f373.png","sheet_x":14,"sheet_y":49,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Cook","b":"1F468-200D-1F373","d":true,"e":true,"f":true,"h":true,"k":[14,44],"o":4},"heartbeat":{"a":"Beating Heart","b":"1F493","d":true,"e":true,"f":true,"h":true,"j":["love","like","affection","valentines","pink","heart"],"k":[25,29],"o":2},"sparkle":{"a":"Sparkle","b":"2747-FE0F","c":"2747","d":true,"e":true,"f":true,"h":true,"j":["stars","green-square","awesome","good","fireworks"],"k":[55,20],"o":2},"amphora":{"a":"Amphora","b":"1F3FA","d":true,"e":true,"f":true,"h":true,"j":["vase","jar"],"k":[11,22],"o":2},"yen":{"a":"Banknote with Yen Sign","b":"1F4B4","d":true,"e":true,"f":true,"h":true,"j":["money","sales","japanese","dollar","currency"],"k":[26,10],"o":2},"revolving_hearts":{"a":"Revolving Hearts","b":"1F49E","d":true,"e":true,"f":true,"h":true,"j":["love","like","affection","valentines"],"k":[25,40],"o":2},"bangbang":{"a":"Double Exclamation Mark","b":"203C-FE0F","c":"203C","d":true,"e":true,"f":true,"h":true,"j":["exclamation","surprise"],"k":[52,10],"o":2},"parachute":{"a":"Parachute","b":"1FA82","d":true,"e":true,"f":true,"h":true,"k":[52,3],"o":12},"herb":{"a":"Herb","b":"1F33F","d":true,"e":true,"f":true,"h":true,"j":["vegetable","plant","medicine","weed","grass","lawn"],"k":[6,23],"o":2},"flag-is":{"a":"Iceland Flag","b":"1F1EE-1F1F8","d":true,"e":true,"f":true,"h":true,"k":[2,31],"o":2},"female-cook":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F373","non_qualified":null,"image":"1f469-1f3fb-200d-1f373.png","sheet_x":17,"sheet_y":35,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F373","non_qualified":null,"image":"1f469-1f3fc-200d-1f373.png","sheet_x":17,"sheet_y":36,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F373","non_qualified":null,"image":"1f469-1f3fd-200d-1f373.png","sheet_x":17,"sheet_y":37,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F373","non_qualified":null,"image":"1f469-1f3fe-200d-1f373.png","sheet_x":17,"sheet_y":38,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F373","non_qualified":null,"image":"1f469-1f3ff-200d-1f373.png","sheet_x":17,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Cook","b":"1F469-200D-1F373","d":true,"e":true,"f":true,"h":true,"k":[17,34],"o":4},"mechanic":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F527","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f527.png","sheet_x":46,"sheet_y":15,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F527","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f527.png","sheet_x":46,"sheet_y":16,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F527","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f527.png","sheet_x":46,"sheet_y":17,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F527","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f527.png","sheet_x":46,"sheet_y":18,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F527","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f527.png","sheet_x":46,"sheet_y":19,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Mechanic","b":"1F9D1-200D-1F527","d":true,"e":false,"f":false,"h":false,"k":[46,14],"o":12},"interrobang":{"a":"Exclamation Question Mark","b":"2049-FE0F","c":"2049","d":true,"e":true,"f":true,"h":true,"j":["wat","punctuation","surprise"],"k":[52,11],"o":2},"seat":{"a":"Seat","b":"1F4BA","d":true,"e":true,"f":true,"h":true,"j":["sit","airplane","transport","bus","flight","fly"],"k":[26,16],"o":2},"dollar":{"a":"Banknote with Dollar Sign","b":"1F4B5","d":true,"e":true,"f":true,"h":true,"j":["money","sales","bill","currency"],"k":[26,11],"o":2},"two_hearts":{"a":"Two Hearts","b":"1F495","d":true,"e":true,"f":true,"h":true,"j":["love","like","affection","valentines","heart"],"k":[25,31],"o":2},"it":{"a":"Italy Flag","b":"1F1EE-1F1F9","d":true,"e":true,"f":true,"h":true,"j":["italy","flag","nation","country","banner"],"k":[2,32],"n":["flag-it"],"o":2},"shamrock":{"a":"Shamrock","b":"2618-FE0F","c":"2618","d":true,"e":true,"f":true,"h":true,"j":["vegetable","plant","nature","irish","clover"],"k":[53,1],"o":2},"four_leaf_clover":{"a":"Four Leaf Clover","b":"1F340","d":true,"e":true,"f":true,"h":true,"j":["vegetable","plant","nature","lucky","irish"],"k":[6,24],"o":2},"euro":{"a":"Banknote with Euro Sign","b":"1F4B6","d":true,"e":true,"f":true,"h":true,"j":["money","sales","dollar","currency"],"k":[26,12],"o":2},"question":{"a":"Black Question Mark Ornament","b":"2753","d":true,"e":true,"f":true,"h":true,"j":["doubt","confused"],"k":[55,23],"o":2},"helicopter":{"a":"Helicopter","b":"1F681","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle","fly"],"k":[34,0],"o":2},"heart_decoration":{"a":"Heart Decoration","b":"1F49F","d":true,"e":true,"f":true,"h":true,"j":["purple-square","love","like"],"k":[25,41],"o":2},"flag-je":{"a":"Jersey Flag","b":"1F1EF-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[2,33],"o":2},"male-mechanic":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F527","non_qualified":null,"image":"1f468-1f3fb-200d-1f527.png","sheet_x":15,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F527","non_qualified":null,"image":"1f468-1f3fc-200d-1f527.png","sheet_x":15,"sheet_y":52,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F527","non_qualified":null,"image":"1f468-1f3fd-200d-1f527.png","sheet_x":15,"sheet_y":53,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F527","non_qualified":null,"image":"1f468-1f3fe-200d-1f527.png","sheet_x":15,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F527","non_qualified":null,"image":"1f468-1f3ff-200d-1f527.png","sheet_x":15,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Mechanic","b":"1F468-200D-1F527","d":true,"e":true,"f":true,"h":true,"k":[15,50],"o":4},"suspension_railway":{"a":"Suspension Railway","b":"1F69F","d":true,"e":true,"f":true,"h":true,"j":["vehicle","transportation"],"k":[34,30],"o":2},"heavy_heart_exclamation_mark_ornament":{"a":"Heavy Heart Exclamation Mark Ornament","b":"2763-FE0F","c":"2763","d":true,"e":true,"f":true,"h":true,"k":[55,27],"o":2},"female-mechanic":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F527","non_qualified":null,"image":"1f469-1f3fb-200d-1f527.png","sheet_x":18,"sheet_y":36,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F527","non_qualified":null,"image":"1f469-1f3fc-200d-1f527.png","sheet_x":18,"sheet_y":37,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F527","non_qualified":null,"image":"1f469-1f3fd-200d-1f527.png","sheet_x":18,"sheet_y":38,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F527","non_qualified":null,"image":"1f469-1f3fe-200d-1f527.png","sheet_x":18,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F527","non_qualified":null,"image":"1f469-1f3ff-200d-1f527.png","sheet_x":18,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Mechanic","b":"1F469-200D-1F527","d":true,"e":true,"f":true,"h":true,"k":[18,35],"o":4},"flag-jm":{"a":"Jamaica Flag","b":"1F1EF-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[2,34],"o":2},"grey_question":{"a":"White Question Mark Ornament","b":"2754","d":true,"e":true,"f":true,"h":true,"j":["doubts","gray","huh","confused"],"k":[55,24],"o":2},"maple_leaf":{"a":"Maple Leaf","b":"1F341","d":true,"e":true,"f":true,"h":true,"j":["nature","plant","vegetable","ca","fall"],"k":[6,25],"o":2},"pound":{"a":"Banknote with Pound Sign","b":"1F4B7","d":true,"e":true,"f":true,"h":true,"j":["british","sterling","money","sales","bills","uk","england","currency"],"k":[26,13],"o":2},"money_with_wings":{"a":"Money with Wings","b":"1F4B8","d":true,"e":true,"f":true,"h":true,"j":["dollar","bills","payment","sale"],"k":[26,14],"o":2},"flag-jo":{"a":"Jordan Flag","b":"1F1EF-1F1F4","d":true,"e":true,"f":true,"h":true,"k":[2,35],"o":2},"fallen_leaf":{"a":"Fallen Leaf","b":"1F342","d":true,"e":true,"f":true,"h":true,"j":["nature","plant","vegetable","leaves"],"k":[6,26],"o":2},"factory_worker":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F3ED","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f3ed.png","sheet_x":45,"sheet_y":54,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F3ED","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f3ed.png","sheet_x":45,"sheet_y":55,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F3ED","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f3ed.png","sheet_x":45,"sheet_y":56,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F3ED","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f3ed.png","sheet_x":46,"sheet_y":0,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F3ED","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f3ed.png","sheet_x":46,"sheet_y":1,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Factory Worker","b":"1F9D1-200D-1F3ED","d":true,"e":false,"f":false,"h":false,"k":[45,53],"o":12},"broken_heart":{"a":"Broken Heart","b":"1F494","d":true,"e":true,"f":true,"h":true,"j":["sad","sorry","break","heart","heartbreak"],"k":[25,30],"l":["</3"],"m":"</3","o":2},"grey_exclamation":{"a":"White Exclamation Mark Ornament","b":"2755","d":true,"e":true,"f":true,"h":true,"j":["surprise","punctuation","gray","wow","warning"],"k":[55,25],"o":2},"mountain_cableway":{"a":"Mountain Cableway","b":"1F6A0","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle","ski"],"k":[34,31],"o":2},"exclamation":{"a":"Heavy Exclamation Mark Symbol","b":"2757","d":true,"e":true,"f":true,"h":true,"j":["heavy_exclamation_mark","danger","surprise","punctuation","wow","warning"],"k":[55,26],"n":["heavy_exclamation_mark"],"o":2},"leaves":{"a":"Leaf Fluttering in Wind","b":"1F343","d":true,"e":true,"f":true,"h":true,"j":["nature","plant","tree","vegetable","grass","lawn","spring"],"k":[6,27],"o":2},"heart":{"a":"Heavy Black Heart","b":"2764-FE0F","c":"2764","d":true,"e":true,"f":true,"h":true,"j":["love","like","valentines"],"k":[55,28],"l":["<3"],"m":"<3","o":2},"jp":{"a":"Japan Flag","b":"1F1EF-1F1F5","d":true,"e":true,"f":true,"h":true,"j":["japanese","nation","flag","country","banner"],"k":[2,36],"n":["flag-jp"],"o":2},"male-factory-worker":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F3ED","non_qualified":null,"image":"1f468-1f3fb-200d-1f3ed.png","sheet_x":15,"sheet_y":18,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F3ED","non_qualified":null,"image":"1f468-1f3fc-200d-1f3ed.png","sheet_x":15,"sheet_y":19,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F3ED","non_qualified":null,"image":"1f468-1f3fd-200d-1f3ed.png","sheet_x":15,"sheet_y":20,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F3ED","non_qualified":null,"image":"1f468-1f3fe-200d-1f3ed.png","sheet_x":15,"sheet_y":21,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F3ED","non_qualified":null,"image":"1f468-1f3ff-200d-1f3ed.png","sheet_x":15,"sheet_y":22,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Factory Worker","b":"1F468-200D-1F3ED","d":true,"e":true,"f":true,"h":true,"k":[15,17],"o":4},"credit_card":{"a":"Credit Card","b":"1F4B3","d":true,"e":true,"f":true,"h":true,"j":["money","sales","dollar","bill","payment","shopping"],"k":[26,9],"o":2},"aerial_tramway":{"a":"Aerial Tramway","b":"1F6A1","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle","ski"],"k":[34,32],"o":2},"female-factory-worker":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F3ED","non_qualified":null,"image":"1f469-1f3fb-200d-1f3ed.png","sheet_x":18,"sheet_y":8,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F3ED","non_qualified":null,"image":"1f469-1f3fc-200d-1f3ed.png","sheet_x":18,"sheet_y":9,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F3ED","non_qualified":null,"image":"1f469-1f3fd-200d-1f3ed.png","sheet_x":18,"sheet_y":10,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F3ED","non_qualified":null,"image":"1f469-1f3fe-200d-1f3ed.png","sheet_x":18,"sheet_y":11,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F3ED","non_qualified":null,"image":"1f469-1f3ff-200d-1f3ed.png","sheet_x":18,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Factory Worker","b":"1F469-200D-1F3ED","d":true,"e":true,"f":true,"h":true,"k":[18,7],"o":4},"receipt":{"a":"Receipt","b":"1F9FE","d":true,"e":true,"f":true,"h":true,"k":[51,49],"o":11},"wavy_dash":{"a":"Wavy Dash","b":"3030-FE0F","c":"3030","d":true,"e":true,"f":true,"h":true,"j":["draw","line","moustache","mustache","squiggle","scribble"],"k":[55,44],"o":2},"flag-ke":{"a":"Kenya Flag","b":"1F1F0-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[2,37],"o":2},"satellite":{"a":"Satellite","b":"1F6F0-FE0F","c":"1F6F0","d":true,"e":true,"f":true,"h":true,"j":["communication","future","radio","space"],"k":[36,51],"o":2},"orange_heart":{"a":"Orange Heart","b":"1F9E1","d":true,"e":true,"f":true,"h":true,"k":[51,20],"o":5},"yellow_heart":{"a":"Yellow Heart","b":"1F49B","d":true,"e":true,"f":true,"h":true,"j":["love","like","affection","valentines"],"k":[25,37],"m":"<3","o":2},"copyright":{"a":"Copyright Sign","b":"00A9-FE0F","c":"00A9","d":true,"e":true,"f":true,"h":false,"j":["ip","license","circle","law","legal"],"k":[0,12],"o":2},"rocket":{"a":"Rocket","b":"1F680","d":true,"e":true,"f":true,"h":true,"j":["launch","ship","staffmode","NASA","outer space","outer_space","fly"],"k":[33,56],"o":2},"chart":{"a":"Chart with Upwards Trend and Yen Sign","b":"1F4B9","d":true,"e":true,"f":true,"h":true,"j":["green-square","graph","presentation","stats"],"k":[26,15],"o":2},"flag-kg":{"a":"Kyrgyzstan Flag","b":"1F1F0-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[2,38],"o":2},"office_worker":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F4BC","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f4bc.png","sheet_x":46,"sheet_y":9,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F4BC","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f4bc.png","sheet_x":46,"sheet_y":10,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F4BC","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f4bc.png","sheet_x":46,"sheet_y":11,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F4BC","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f4bc.png","sheet_x":46,"sheet_y":12,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F4BC","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f4bc.png","sheet_x":46,"sheet_y":13,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Office Worker","b":"1F9D1-200D-1F4BC","d":true,"e":false,"f":false,"h":false,"k":[46,8],"o":12},"currency_exchange":{"a":"Currency Exchange","b":"1F4B1","d":true,"e":true,"f":true,"h":true,"j":["money","sales","dollar","travel"],"k":[26,7],"o":2},"registered":{"a":"Registered Sign","b":"00AE-FE0F","c":"00AE","d":true,"e":true,"f":true,"h":false,"j":["alphabet","circle"],"k":[0,13],"o":2},"green_heart":{"a":"Green Heart","b":"1F49A","d":true,"e":true,"f":true,"h":true,"j":["love","like","affection","valentines"],"k":[25,36],"m":"<3","o":2},"flying_saucer":{"a":"Flying Saucer","b":"1F6F8","d":true,"e":true,"f":true,"h":true,"k":[37,0],"o":5},"flag-kh":{"a":"Cambodia Flag","b":"1F1F0-1F1ED","d":true,"e":true,"f":true,"h":true,"k":[2,39],"o":2},"male-office-worker":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F4BC","non_qualified":null,"image":"1f468-1f3fb-200d-1f4bc.png","sheet_x":15,"sheet_y":45,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F4BC","non_qualified":null,"image":"1f468-1f3fc-200d-1f4bc.png","sheet_x":15,"sheet_y":46,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F4BC","non_qualified":null,"image":"1f468-1f3fd-200d-1f4bc.png","sheet_x":15,"sheet_y":47,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F4BC","non_qualified":null,"image":"1f468-1f3fe-200d-1f4bc.png","sheet_x":15,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F4BC","non_qualified":null,"image":"1f468-1f3ff-200d-1f4bc.png","sheet_x":15,"sheet_y":49,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Office Worker","b":"1F468-200D-1F4BC","d":true,"e":true,"f":true,"h":true,"k":[15,44],"o":4},"tm":{"a":"Trade Mark Sign","b":"2122-FE0F","c":"2122","d":true,"e":true,"f":true,"h":true,"j":["trademark","brand","law","legal"],"k":[52,12],"o":2},"bellhop_bell":{"a":"Bellhop Bell","b":"1F6CE-FE0F","c":"1F6CE","d":true,"e":true,"f":true,"h":true,"j":["service"],"k":[36,36],"o":2},"blue_heart":{"a":"Blue Heart","b":"1F499","d":true,"e":true,"f":true,"h":true,"j":["love","like","affection","valentines"],"k":[25,35],"m":"<3","o":2},"flag-ki":{"a":"Kiribati Flag","b":"1F1F0-1F1EE","d":true,"e":true,"f":true,"h":true,"k":[2,40],"o":2},"heavy_dollar_sign":{"a":"Heavy Dollar Sign","b":"1F4B2","d":true,"e":true,"f":true,"h":true,"j":["money","sales","payment","currency","buck"],"k":[26,8],"o":2},"female-office-worker":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F4BC","non_qualified":null,"image":"1f469-1f3fb-200d-1f4bc.png","sheet_x":18,"sheet_y":30,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F4BC","non_qualified":null,"image":"1f469-1f3fc-200d-1f4bc.png","sheet_x":18,"sheet_y":31,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F4BC","non_qualified":null,"image":"1f469-1f3fd-200d-1f4bc.png","sheet_x":18,"sheet_y":32,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F4BC","non_qualified":null,"image":"1f469-1f3fe-200d-1f4bc.png","sheet_x":18,"sheet_y":33,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F4BC","non_qualified":null,"image":"1f469-1f3ff-200d-1f4bc.png","sheet_x":18,"sheet_y":34,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Office Worker","b":"1F469-200D-1F4BC","d":true,"e":true,"f":true,"h":true,"k":[18,29],"o":4},"purple_heart":{"a":"Purple Heart","b":"1F49C","d":true,"e":true,"f":true,"h":true,"j":["love","like","affection","valentines"],"k":[25,38],"m":"<3","o":2},"scientist":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F52C","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f52c.png","sheet_x":46,"sheet_y":21,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F52C","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f52c.png","sheet_x":46,"sheet_y":22,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F52C","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f52c.png","sheet_x":46,"sheet_y":23,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F52C","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f52c.png","sheet_x":46,"sheet_y":24,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F52C","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f52c.png","sheet_x":46,"sheet_y":25,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Scientist","b":"1F9D1-200D-1F52C","d":true,"e":false,"f":false,"h":false,"k":[46,20],"o":12},"luggage":{"a":"Luggage","b":"1F9F3","d":true,"e":true,"f":true,"h":true,"k":[51,38],"o":11},"hash":{"a":"Hash Key","b":"0023-FE0F-20E3","c":"0023-20E3","d":true,"e":true,"f":true,"h":false,"j":["symbol","blue-square","twitter"],"k":[0,0],"o":0},"flag-km":{"a":"Comoros Flag","b":"1F1F0-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[2,41],"o":2},"email":{"a":"Envelope","b":"2709-FE0F","c":"2709","d":true,"e":true,"f":true,"h":true,"j":["letter","postal","inbox","communication"],"k":[54,42],"n":["envelope"],"o":2},"e-mail":{"a":"E-Mail Symbol","b":"1F4E7","d":true,"e":true,"f":true,"h":true,"j":["communication","inbox"],"k":[27,4],"o":2},"keycap_star":{"a":"Keycap Star","b":"002A-FE0F-20E3","c":"002A-20E3","d":true,"e":true,"f":true,"h":false,"k":[0,1],"o":0},"flag-kn":{"a":"St. Kitts & Nevis Flag","b":"1F1F0-1F1F3","d":true,"e":true,"f":true,"h":true,"k":[2,42],"o":2},"hourglass":{"a":"Hourglass","b":"231B","d":true,"e":true,"f":true,"h":true,"j":["time","clock","oldschool","limit","exam","quiz","test"],"k":[52,23],"o":2},"brown_heart":{"a":"Brown Heart","b":"1F90E","d":true,"e":true,"f":true,"h":true,"k":[37,16],"o":12},"male-scientist":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F52C","non_qualified":null,"image":"1f468-1f3fb-200d-1f52c.png","sheet_x":16,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F52C","non_qualified":null,"image":"1f468-1f3fc-200d-1f52c.png","sheet_x":16,"sheet_y":1,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F52C","non_qualified":null,"image":"1f468-1f3fd-200d-1f52c.png","sheet_x":16,"sheet_y":2,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F52C","non_qualified":null,"image":"1f468-1f3fe-200d-1f52c.png","sheet_x":16,"sheet_y":3,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F52C","non_qualified":null,"image":"1f468-1f3ff-200d-1f52c.png","sheet_x":16,"sheet_y":4,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Scientist","b":"1F468-200D-1F52C","d":true,"e":true,"f":true,"h":true,"k":[15,56],"o":4},"hourglass_flowing_sand":{"a":"Hourglass with Flowing Sand","b":"23F3","d":true,"e":true,"f":true,"h":true,"j":["oldschool","time","countdown"],"k":[52,36],"o":2},"black_heart":{"a":"Black Heart","b":"1F5A4","d":true,"e":true,"f":true,"h":true,"j":["evil"],"k":[30,9],"o":4},"zero":{"a":"Keycap 0","b":"0030-FE0F-20E3","c":"0030-20E3","d":true,"e":true,"f":true,"h":false,"j":["0","numbers","blue-square","null"],"k":[0,2],"o":0},"incoming_envelope":{"a":"Incoming Envelope","b":"1F4E8","d":true,"e":true,"f":true,"h":true,"j":["email","inbox"],"k":[27,5],"o":2},"flag-kp":{"a":"North Korea Flag","b":"1F1F0-1F1F5","d":true,"e":true,"f":true,"h":true,"k":[2,43],"o":2},"female-scientist":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F52C","non_qualified":null,"image":"1f469-1f3fb-200d-1f52c.png","sheet_x":18,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F52C","non_qualified":null,"image":"1f469-1f3fc-200d-1f52c.png","sheet_x":18,"sheet_y":43,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F52C","non_qualified":null,"image":"1f469-1f3fd-200d-1f52c.png","sheet_x":18,"sheet_y":44,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F52C","non_qualified":null,"image":"1f469-1f3fe-200d-1f52c.png","sheet_x":18,"sheet_y":45,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F52C","non_qualified":null,"image":"1f469-1f3ff-200d-1f52c.png","sheet_x":18,"sheet_y":46,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Scientist","b":"1F469-200D-1F52C","d":true,"e":true,"f":true,"h":true,"k":[18,41],"o":4},"watch":{"a":"Watch","b":"231A","d":true,"e":true,"f":true,"h":true,"j":["time","accessories"],"k":[52,22],"o":2},"white_heart":{"a":"White Heart","b":"1F90D","d":true,"e":true,"f":true,"h":true,"k":[37,15],"o":12},"one":{"a":"Keycap 1","b":"0031-FE0F-20E3","c":"0031-20E3","d":true,"e":true,"f":true,"h":false,"j":["blue-square","numbers","1"],"k":[0,3],"o":0},"kr":{"a":"South Korea Flag","b":"1F1F0-1F1F7","d":true,"e":true,"f":true,"h":true,"j":["south","korea","nation","flag","country","banner"],"k":[2,44],"n":["flag-kr"],"o":2},"envelope_with_arrow":{"a":"Envelope with Downwards Arrow Above","b":"1F4E9","d":true,"e":true,"f":true,"h":true,"j":["email","communication"],"k":[27,6],"o":2},"technologist":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F4BB","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f4bb.png","sheet_x":46,"sheet_y":3,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F4BB","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f4bb.png","sheet_x":46,"sheet_y":4,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F4BB","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f4bb.png","sheet_x":46,"sheet_y":5,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F4BB","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f4bb.png","sheet_x":46,"sheet_y":6,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F4BB","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f4bb.png","sheet_x":46,"sheet_y":7,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Technologist","b":"1F9D1-200D-1F4BB","d":true,"e":false,"f":false,"h":false,"k":[46,2],"o":12},"outbox_tray":{"a":"Outbox Tray","b":"1F4E4","d":true,"e":true,"f":true,"h":true,"j":["inbox","email"],"k":[27,1],"o":2},"male-technologist":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F4BB","non_qualified":null,"image":"1f468-1f3fb-200d-1f4bb.png","sheet_x":15,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F4BB","non_qualified":null,"image":"1f468-1f3fc-200d-1f4bb.png","sheet_x":15,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F4BB","non_qualified":null,"image":"1f468-1f3fd-200d-1f4bb.png","sheet_x":15,"sheet_y":41,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F4BB","non_qualified":null,"image":"1f468-1f3fe-200d-1f4bb.png","sheet_x":15,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F4BB","non_qualified":null,"image":"1f468-1f3ff-200d-1f4bb.png","sheet_x":15,"sheet_y":43,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Technologist","b":"1F468-200D-1F4BB","d":true,"e":true,"f":true,"h":true,"k":[15,38],"o":4},"alarm_clock":{"a":"Alarm Clock","b":"23F0","d":true,"e":true,"f":true,"h":true,"j":["time","wake"],"k":[52,33],"o":2},"flag-kw":{"a":"Kuwait Flag","b":"1F1F0-1F1FC","d":true,"e":true,"f":true,"h":true,"k":[2,45],"o":2},"two":{"a":"Keycap 2","b":"0032-FE0F-20E3","c":"0032-20E3","d":true,"e":true,"f":true,"h":false,"j":["numbers","2","prime","blue-square"],"k":[0,4],"o":0},"anger":{"a":"Anger Symbol","b":"1F4A2","d":true,"e":true,"f":true,"h":true,"j":["angry","mad"],"k":[25,44],"o":2},"inbox_tray":{"a":"Inbox Tray","b":"1F4E5","d":true,"e":true,"f":true,"h":true,"j":["email","documents"],"k":[27,2],"o":2},"three":{"a":"Keycap 3","b":"0033-FE0F-20E3","c":"0033-20E3","d":true,"e":true,"f":true,"h":false,"j":["3","numbers","prime","blue-square"],"k":[0,5],"o":0},"flag-ky":{"a":"Cayman Islands Flag","b":"1F1F0-1F1FE","d":true,"e":true,"f":true,"h":true,"k":[2,46],"o":2},"stopwatch":{"a":"Stopwatch","b":"23F1-FE0F","c":"23F1","d":true,"e":true,"f":true,"h":true,"j":["time","deadline"],"k":[52,34],"o":2},"female-technologist":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F4BB","non_qualified":null,"image":"1f469-1f3fb-200d-1f4bb.png","sheet_x":18,"sheet_y":24,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F4BB","non_qualified":null,"image":"1f469-1f3fc-200d-1f4bb.png","sheet_x":18,"sheet_y":25,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F4BB","non_qualified":null,"image":"1f469-1f3fd-200d-1f4bb.png","sheet_x":18,"sheet_y":26,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F4BB","non_qualified":null,"image":"1f469-1f3fe-200d-1f4bb.png","sheet_x":18,"sheet_y":27,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F4BB","non_qualified":null,"image":"1f469-1f3ff-200d-1f4bb.png","sheet_x":18,"sheet_y":28,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Technologist","b":"1F469-200D-1F4BB","d":true,"e":true,"f":true,"h":true,"k":[18,23],"o":4},"boom":{"a":"Collision Symbol","b":"1F4A5","d":true,"e":true,"f":true,"h":true,"j":["bomb","explode","explosion","collision","blown"],"k":[25,47],"n":["collision"],"o":2},"flag-kz":{"a":"Kazakhstan Flag","b":"1F1F0-1F1FF","d":true,"e":true,"f":true,"h":true,"k":[2,47],"o":2},"four":{"a":"Keycap 4","b":"0034-FE0F-20E3","c":"0034-20E3","d":true,"e":true,"f":true,"h":false,"j":["4","numbers","blue-square"],"k":[0,6],"o":0},"timer_clock":{"a":"Timer Clock","b":"23F2-FE0F","c":"23F2","d":true,"e":true,"f":true,"h":true,"j":["alarm"],"k":[52,35],"o":2},"singer":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F3A4","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f3a4.png","sheet_x":45,"sheet_y":36,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F3A4","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f3a4.png","sheet_x":45,"sheet_y":37,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F3A4","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f3a4.png","sheet_x":45,"sheet_y":38,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F3A4","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f3a4.png","sheet_x":45,"sheet_y":39,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F3A4","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f3a4.png","sheet_x":45,"sheet_y":40,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Singer","b":"1F9D1-200D-1F3A4","d":true,"e":false,"f":false,"h":false,"k":[45,35],"o":12},"package":{"a":"Package","b":"1F4E6","d":true,"e":true,"f":true,"h":true,"j":["mail","gift","cardboard","box","moving"],"k":[27,3],"o":2},"mailbox":{"a":"Closed Mailbox with Raised Flag","b":"1F4EB","d":true,"e":true,"f":true,"h":true,"j":["email","inbox","communication"],"k":[27,8],"o":2},"flag-la":{"a":"Laos Flag","b":"1F1F1-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[2,48],"o":2},"dizzy":{"a":"Dizzy Symbol","b":"1F4AB","d":true,"e":true,"f":true,"h":true,"j":["star","sparkle","shoot","magic"],"k":[26,1],"o":2},"five":{"a":"Keycap 5","b":"0035-FE0F-20E3","c":"0035-20E3","d":true,"e":true,"f":true,"h":false,"j":["5","numbers","blue-square","prime"],"k":[0,7],"o":0},"male-singer":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F3A4","non_qualified":null,"image":"1f468-1f3fb-200d-1f3a4.png","sheet_x":15,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F3A4","non_qualified":null,"image":"1f468-1f3fc-200d-1f3a4.png","sheet_x":15,"sheet_y":1,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F3A4","non_qualified":null,"image":"1f468-1f3fd-200d-1f3a4.png","sheet_x":15,"sheet_y":2,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F3A4","non_qualified":null,"image":"1f468-1f3fe-200d-1f3a4.png","sheet_x":15,"sheet_y":3,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F3A4","non_qualified":null,"image":"1f468-1f3ff-200d-1f3a4.png","sheet_x":15,"sheet_y":4,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Singer","b":"1F468-200D-1F3A4","d":true,"e":true,"f":true,"h":true,"k":[14,56],"o":4},"mantelpiece_clock":{"a":"Mantelpiece Clock","b":"1F570-FE0F","c":"1F570","d":true,"e":true,"f":true,"h":true,"j":["time"],"k":[29,7],"o":2},"female-singer":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F3A4","non_qualified":null,"image":"1f469-1f3fb-200d-1f3a4.png","sheet_x":17,"sheet_y":47,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F3A4","non_qualified":null,"image":"1f469-1f3fc-200d-1f3a4.png","sheet_x":17,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F3A4","non_qualified":null,"image":"1f469-1f3fd-200d-1f3a4.png","sheet_x":17,"sheet_y":49,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F3A4","non_qualified":null,"image":"1f469-1f3fe-200d-1f3a4.png","sheet_x":17,"sheet_y":50,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F3A4","non_qualified":null,"image":"1f469-1f3ff-200d-1f3a4.png","sheet_x":17,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Singer","b":"1F469-200D-1F3A4","d":true,"e":true,"f":true,"h":true,"k":[17,46],"o":4},"flag-lb":{"a":"Lebanon Flag","b":"1F1F1-1F1E7","d":true,"e":true,"f":true,"h":true,"k":[2,49],"o":2},"six":{"a":"Keycap 6","b":"0036-FE0F-20E3","c":"0036-20E3","d":true,"e":true,"f":true,"h":false,"j":["6","numbers","blue-square"],"k":[0,8],"o":0},"mailbox_closed":{"a":"Closed Mailbox with Lowered Flag","b":"1F4EA","d":true,"e":true,"f":true,"h":true,"j":["email","communication","inbox"],"k":[27,7],"o":2},"sweat_drops":{"a":"Splashing Sweat Symbol","b":"1F4A6","d":true,"e":true,"f":true,"h":true,"j":["water","drip","oops"],"k":[25,48],"o":2},"clock12":{"a":"Clock Face Twelve Oclock","b":"1F55B","d":true,"e":true,"f":true,"h":true,"j":["time","noon","midnight","midday","late","early","schedule"],"k":[28,50],"o":2},"seven":{"a":"Keycap 7","b":"0037-FE0F-20E3","c":"0037-20E3","d":true,"e":true,"f":true,"h":false,"j":["7","numbers","blue-square","prime"],"k":[0,9],"o":0},"mailbox_with_mail":{"a":"Open Mailbox with Raised Flag","b":"1F4EC","d":true,"e":true,"f":true,"h":true,"j":["email","inbox","communication"],"k":[27,9],"o":2},"clock1230":{"a":"Clock Face Twelve-Thirty","b":"1F567","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[29,5],"o":2},"dash":{"a":"Dash Symbol","b":"1F4A8","d":true,"e":true,"f":true,"h":true,"j":["wind","air","fast","shoo","fart","smoke","puff"],"k":[25,50],"o":2},"artist":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F3A8","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f3a8.png","sheet_x":45,"sheet_y":42,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F3A8","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f3a8.png","sheet_x":45,"sheet_y":43,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F3A8","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f3a8.png","sheet_x":45,"sheet_y":44,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F3A8","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f3a8.png","sheet_x":45,"sheet_y":45,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F3A8","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f3a8.png","sheet_x":45,"sheet_y":46,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Artist","b":"1F9D1-200D-1F3A8","d":true,"e":false,"f":false,"h":false,"k":[45,41],"o":12},"flag-lc":{"a":"St. Lucia Flag","b":"1F1F1-1F1E8","d":true,"e":true,"f":true,"h":true,"k":[2,50],"o":2},"hole":{"a":"Hole","b":"1F573-FE0F","c":"1F573","d":true,"e":true,"f":true,"h":true,"j":["embarrassing"],"k":[29,8],"o":2},"male-artist":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F3A8","non_qualified":null,"image":"1f468-1f3fb-200d-1f3a8.png","sheet_x":15,"sheet_y":6,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F3A8","non_qualified":null,"image":"1f468-1f3fc-200d-1f3a8.png","sheet_x":15,"sheet_y":7,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F3A8","non_qualified":null,"image":"1f468-1f3fd-200d-1f3a8.png","sheet_x":15,"sheet_y":8,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F3A8","non_qualified":null,"image":"1f468-1f3fe-200d-1f3a8.png","sheet_x":15,"sheet_y":9,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F3A8","non_qualified":null,"image":"1f468-1f3ff-200d-1f3a8.png","sheet_x":15,"sheet_y":10,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Artist","b":"1F468-200D-1F3A8","d":true,"e":true,"f":true,"h":true,"k":[15,5],"o":4},"clock1":{"a":"Clock Face One Oclock","b":"1F550","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,39],"o":2},"eight":{"a":"Keycap 8","b":"0038-FE0F-20E3","c":"0038-20E3","d":true,"e":true,"f":true,"h":false,"j":["8","blue-square","numbers"],"k":[0,10],"o":0},"mailbox_with_no_mail":{"a":"Open Mailbox with Lowered Flag","b":"1F4ED","d":true,"e":true,"f":true,"h":true,"j":["email","inbox"],"k":[27,10],"o":2},"flag-li":{"a":"Liechtenstein Flag","b":"1F1F1-1F1EE","d":true,"e":true,"f":true,"h":true,"k":[2,51],"o":2},"bomb":{"a":"Bomb","b":"1F4A3","d":true,"e":true,"f":true,"h":true,"j":["boom","explode","explosion","terrorism"],"k":[25,45],"o":2},"nine":{"a":"Keycap 9","b":"0039-FE0F-20E3","c":"0039-20E3","d":true,"e":true,"f":true,"h":false,"j":["blue-square","numbers","9"],"k":[0,11],"o":0},"postbox":{"a":"Postbox","b":"1F4EE","d":true,"e":true,"f":true,"h":true,"j":["email","letter","envelope"],"k":[27,11],"o":2},"female-artist":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F3A8","non_qualified":null,"image":"1f469-1f3fb-200d-1f3a8.png","sheet_x":17,"sheet_y":53,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F3A8","non_qualified":null,"image":"1f469-1f3fc-200d-1f3a8.png","sheet_x":17,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F3A8","non_qualified":null,"image":"1f469-1f3fd-200d-1f3a8.png","sheet_x":17,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F3A8","non_qualified":null,"image":"1f469-1f3fe-200d-1f3a8.png","sheet_x":17,"sheet_y":56,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F3A8","non_qualified":null,"image":"1f469-1f3ff-200d-1f3a8.png","sheet_x":18,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Artist","b":"1F469-200D-1F3A8","d":true,"e":true,"f":true,"h":true,"k":[17,52],"o":4},"clock130":{"a":"Clock Face One-Thirty","b":"1F55C","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,51],"o":2},"flag-lk":{"a":"Sri Lanka Flag","b":"1F1F1-1F1F0","d":true,"e":true,"f":true,"h":true,"k":[2,52],"o":2},"ballot_box_with_ballot":{"a":"Ballot Box with Ballot","b":"1F5F3-FE0F","c":"1F5F3","d":true,"e":true,"f":true,"h":true,"k":[30,28],"o":2},"pilot":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-2708-FE0F","non_qualified":"1F9D1-1F3FB-200D-2708","image":"1f9d1-1f3fb-200d-2708-fe0f.png","sheet_x":48,"sheet_y":5,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-2708-FE0F","non_qualified":"1F9D1-1F3FC-200D-2708","image":"1f9d1-1f3fc-200d-2708-fe0f.png","sheet_x":48,"sheet_y":6,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-2708-FE0F","non_qualified":"1F9D1-1F3FD-200D-2708","image":"1f9d1-1f3fd-200d-2708-fe0f.png","sheet_x":48,"sheet_y":7,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-2708-FE0F","non_qualified":"1F9D1-1F3FE-200D-2708","image":"1f9d1-1f3fe-200d-2708-fe0f.png","sheet_x":48,"sheet_y":8,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-2708-FE0F","non_qualified":"1F9D1-1F3FF-200D-2708","image":"1f9d1-1f3ff-200d-2708-fe0f.png","sheet_x":48,"sheet_y":9,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Pilot","b":"1F9D1-200D-2708-FE0F","c":"1F9D1-200D-2708","d":true,"e":false,"f":false,"h":false,"k":[48,4],"o":12},"keycap_ten":{"a":"Keycap Ten","b":"1F51F","d":true,"e":true,"f":true,"h":true,"j":["numbers","10","blue-square"],"k":[28,2],"o":2},"clock2":{"a":"Clock Face Two Oclock","b":"1F551","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,40],"o":2},"flag-lr":{"a":"Liberia Flag","b":"1F1F1-1F1F7","d":true,"e":true,"f":true,"h":true,"k":[2,53],"o":2},"speech_balloon":{"a":"Speech Balloon","b":"1F4AC","d":true,"e":true,"f":true,"h":true,"j":["bubble","words","message","talk","chatting"],"k":[26,2],"o":2},"eye-in-speech-bubble":{"a":"Eye in Speech Bubble","b":"1F441-FE0F-200D-1F5E8-FE0F","d":true,"e":true,"f":false,"h":false,"k":[12,37],"o":2},"flag-ls":{"a":"Lesotho Flag","b":"1F1F1-1F1F8","d":true,"e":true,"f":true,"h":true,"k":[2,54],"o":2},"clock230":{"a":"Clock Face Two-Thirty","b":"1F55D","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,52],"o":2},"male-pilot":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-2708-FE0F","non_qualified":"1F468-1F3FB-200D-2708","image":"1f468-1f3fb-200d-2708-fe0f.png","sheet_x":17,"sheet_y":15,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-2708-FE0F","non_qualified":"1F468-1F3FC-200D-2708","image":"1f468-1f3fc-200d-2708-fe0f.png","sheet_x":17,"sheet_y":16,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-2708-FE0F","non_qualified":"1F468-1F3FD-200D-2708","image":"1f468-1f3fd-200d-2708-fe0f.png","sheet_x":17,"sheet_y":17,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-2708-FE0F","non_qualified":"1F468-1F3FE-200D-2708","image":"1f468-1f3fe-200d-2708-fe0f.png","sheet_x":17,"sheet_y":18,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-2708-FE0F","non_qualified":"1F468-1F3FF-200D-2708","image":"1f468-1f3ff-200d-2708-fe0f.png","sheet_x":17,"sheet_y":19,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Pilot","b":"1F468-200D-2708-FE0F","c":"1F468-200D-2708","d":true,"e":true,"f":true,"h":true,"k":[17,14],"o":4},"capital_abcd":{"a":"Input Symbol for Latin Capital Letters","b":"1F520","d":true,"e":true,"f":true,"h":true,"j":["alphabet","words","blue-square"],"k":[28,3],"o":2},"pencil2":{"a":"Pencil","b":"270F-FE0F","c":"270F","d":true,"e":true,"f":true,"h":true,"j":["stationery","write","paper","writing","school","study"],"k":[55,10],"o":2},"female-pilot":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-2708-FE0F","non_qualified":"1F469-1F3FB-200D-2708","image":"1f469-1f3fb-200d-2708-fe0f.png","sheet_x":20,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-2708-FE0F","non_qualified":"1F469-1F3FC-200D-2708","image":"1f469-1f3fc-200d-2708-fe0f.png","sheet_x":20,"sheet_y":1,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-2708-FE0F","non_qualified":"1F469-1F3FD-200D-2708","image":"1f469-1f3fd-200d-2708-fe0f.png","sheet_x":20,"sheet_y":2,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-2708-FE0F","non_qualified":"1F469-1F3FE-200D-2708","image":"1f469-1f3fe-200d-2708-fe0f.png","sheet_x":20,"sheet_y":3,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-2708-FE0F","non_qualified":"1F469-1F3FF-200D-2708","image":"1f469-1f3ff-200d-2708-fe0f.png","sheet_x":20,"sheet_y":4,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Pilot","b":"1F469-200D-2708-FE0F","c":"1F469-200D-2708","d":true,"e":true,"f":true,"h":true,"k":[19,56],"o":4},"black_nib":{"a":"Black Nib","b":"2712-FE0F","c":"2712","d":true,"e":true,"f":true,"h":true,"j":["pen","stationery","writing","write"],"k":[55,11],"o":2},"left_speech_bubble":{"a":"Left Speech Bubble","b":"1F5E8-FE0F","c":"1F5E8","d":true,"e":true,"f":true,"h":true,"j":["words","message","talk","chatting"],"k":[30,26],"o":2},"clock3":{"a":"Clock Face Three Oclock","b":"1F552","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,41],"o":2},"abcd":{"a":"Input Symbol for Latin Small Letters","b":"1F521","d":true,"e":true,"f":true,"h":true,"j":["blue-square","alphabet"],"k":[28,4],"o":2},"flag-lt":{"a":"Lithuania Flag","b":"1F1F1-1F1F9","d":true,"e":true,"f":true,"h":true,"k":[2,55],"o":2},"clock330":{"a":"Clock Face Three-Thirty","b":"1F55E","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,53],"o":2},"astronaut":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F680","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f680.png","sheet_x":46,"sheet_y":27,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F680","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f680.png","sheet_x":46,"sheet_y":28,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F680","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f680.png","sheet_x":46,"sheet_y":29,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F680","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f680.png","sheet_x":46,"sheet_y":30,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F680","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f680.png","sheet_x":46,"sheet_y":31,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Astronaut","b":"1F9D1-200D-1F680","d":true,"e":false,"f":false,"h":false,"k":[46,26],"o":12},"flag-lu":{"a":"Luxembourg Flag","b":"1F1F1-1F1FA","d":true,"e":true,"f":true,"h":true,"k":[2,56],"o":2},"right_anger_bubble":{"a":"Right Anger Bubble","b":"1F5EF-FE0F","c":"1F5EF","d":true,"e":true,"f":true,"h":true,"j":["caption","speech","thinking","mad"],"k":[30,27],"o":2},"lower_left_fountain_pen":{"a":"Lower Left Fountain Pen","b":"1F58B-FE0F","c":"1F58B","d":true,"e":true,"f":true,"h":true,"k":[29,45],"o":2},"male-astronaut":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F680","non_qualified":null,"image":"1f468-1f3fb-200d-1f680.png","sheet_x":16,"sheet_y":6,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F680","non_qualified":null,"image":"1f468-1f3fc-200d-1f680.png","sheet_x":16,"sheet_y":7,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F680","non_qualified":null,"image":"1f468-1f3fd-200d-1f680.png","sheet_x":16,"sheet_y":8,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F680","non_qualified":null,"image":"1f468-1f3fe-200d-1f680.png","sheet_x":16,"sheet_y":9,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F680","non_qualified":null,"image":"1f468-1f3ff-200d-1f680.png","sheet_x":16,"sheet_y":10,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Astronaut","b":"1F468-200D-1F680","d":true,"e":true,"f":true,"h":true,"k":[16,5],"o":4},"thought_balloon":{"a":"Thought Balloon","b":"1F4AD","d":true,"e":true,"f":true,"h":true,"j":["bubble","cloud","speech","thinking","dream"],"k":[26,3],"o":2},"symbols":{"a":"Input Symbol for Symbols","b":"1F523","d":true,"e":true,"f":true,"h":true,"j":["blue-square","music","note","ampersand","percent","glyphs","characters"],"k":[28,6],"o":2},"clock4":{"a":"Clock Face Four Oclock","b":"1F553","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,42],"o":2},"flag-lv":{"a":"Latvia Flag","b":"1F1F1-1F1FB","d":true,"e":true,"f":true,"h":true,"k":[3,0],"o":2},"lower_left_ballpoint_pen":{"a":"Lower Left Ballpoint Pen","b":"1F58A-FE0F","c":"1F58A","d":true,"e":true,"f":true,"h":true,"k":[29,44],"o":2},"abc":{"a":"Input Symbol for Latin Letters","b":"1F524","d":true,"e":true,"f":true,"h":true,"j":["blue-square","alphabet"],"k":[28,7],"o":2},"zzz":{"a":"Sleeping Symbol","b":"1F4A4","d":true,"e":true,"f":true,"h":true,"j":["sleepy","tired","dream"],"k":[25,46],"o":2},"lower_left_paintbrush":{"a":"Lower Left Paintbrush","b":"1F58C-FE0F","c":"1F58C","d":true,"e":true,"f":true,"h":true,"k":[29,46],"o":2},"female-astronaut":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F680","non_qualified":null,"image":"1f469-1f3fb-200d-1f680.png","sheet_x":18,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F680","non_qualified":null,"image":"1f469-1f3fc-200d-1f680.png","sheet_x":18,"sheet_y":49,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F680","non_qualified":null,"image":"1f469-1f3fd-200d-1f680.png","sheet_x":18,"sheet_y":50,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F680","non_qualified":null,"image":"1f469-1f3fe-200d-1f680.png","sheet_x":18,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F680","non_qualified":null,"image":"1f469-1f3ff-200d-1f680.png","sheet_x":18,"sheet_y":52,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Astronaut","b":"1F469-200D-1F680","d":true,"e":true,"f":true,"h":true,"k":[18,47],"o":4},"flag-ly":{"a":"Libya Flag","b":"1F1F1-1F1FE","d":true,"e":true,"f":true,"h":true,"k":[3,1],"o":2},"clock430":{"a":"Clock Face Four-Thirty","b":"1F55F","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,54],"o":2},"flag-ma":{"a":"Morocco Flag","b":"1F1F2-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[3,2],"o":2},"a":{"a":"Negative Squared Latin Capital Letter a","b":"1F170-FE0F","c":"1F170","d":true,"e":true,"f":true,"h":true,"j":["red-square","alphabet","letter"],"k":[0,16],"o":2},"clock5":{"a":"Clock Face Five Oclock","b":"1F554","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,43],"o":2},"lower_left_crayon":{"a":"Lower Left Crayon","b":"1F58D-FE0F","c":"1F58D","d":true,"e":true,"f":true,"h":true,"k":[29,47],"o":2},"firefighter":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F692","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f692.png","sheet_x":46,"sheet_y":33,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F692","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f692.png","sheet_x":46,"sheet_y":34,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F692","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f692.png","sheet_x":46,"sheet_y":35,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F692","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f692.png","sheet_x":46,"sheet_y":36,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F692","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f692.png","sheet_x":46,"sheet_y":37,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Firefighter","b":"1F9D1-200D-1F692","d":true,"e":false,"f":false,"h":false,"k":[46,32],"o":12},"male-firefighter":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F692","non_qualified":null,"image":"1f468-1f3fb-200d-1f692.png","sheet_x":16,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F692","non_qualified":null,"image":"1f468-1f3fc-200d-1f692.png","sheet_x":16,"sheet_y":13,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F692","non_qualified":null,"image":"1f468-1f3fd-200d-1f692.png","sheet_x":16,"sheet_y":14,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F692","non_qualified":null,"image":"1f468-1f3fe-200d-1f692.png","sheet_x":16,"sheet_y":15,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F692","non_qualified":null,"image":"1f468-1f3ff-200d-1f692.png","sheet_x":16,"sheet_y":16,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Firefighter","b":"1F468-200D-1F692","d":true,"e":true,"f":true,"h":true,"k":[16,11],"o":4},"memo":{"a":"Memo","b":"1F4DD","d":true,"e":true,"f":true,"h":true,"j":["write","documents","stationery","pencil","paper","writing","legal","exam","quiz","test","study","compose"],"k":[26,51],"n":["pencil"],"o":2},"ab":{"a":"Negative Squared Ab","b":"1F18E","d":true,"e":true,"f":true,"h":true,"j":["red-square","alphabet"],"k":[0,20],"o":2},"flag-mc":{"a":"Monaco Flag","b":"1F1F2-1F1E8","d":true,"e":true,"f":true,"h":true,"k":[3,3],"o":2},"clock530":{"a":"Clock Face Five-Thirty","b":"1F560","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,55],"o":2},"briefcase":{"a":"Briefcase","b":"1F4BC","d":true,"e":true,"f":true,"h":true,"j":["business","documents","work","law","legal","job","career"],"k":[26,18],"o":2},"female-firefighter":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F692","non_qualified":null,"image":"1f469-1f3fb-200d-1f692.png","sheet_x":18,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F692","non_qualified":null,"image":"1f469-1f3fc-200d-1f692.png","sheet_x":18,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F692","non_qualified":null,"image":"1f469-1f3fd-200d-1f692.png","sheet_x":18,"sheet_y":56,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F692","non_qualified":null,"image":"1f469-1f3fe-200d-1f692.png","sheet_x":19,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F692","non_qualified":null,"image":"1f469-1f3ff-200d-1f692.png","sheet_x":19,"sheet_y":1,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Firefighter","b":"1F469-200D-1F692","d":true,"e":true,"f":true,"h":true,"k":[18,53],"o":4},"clock6":{"a":"Clock Face Six Oclock","b":"1F555","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule","dawn","dusk"],"k":[28,44],"o":2},"b":{"a":"Negative Squared Latin Capital Letter B","b":"1F171-FE0F","c":"1F171","d":true,"e":true,"f":true,"h":true,"j":["red-square","alphabet","letter"],"k":[0,17],"o":2},"flag-md":{"a":"Moldova Flag","b":"1F1F2-1F1E9","d":true,"e":true,"f":true,"h":true,"k":[3,4],"o":2},"clock630":{"a":"Clock Face Six-Thirty","b":"1F561","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,56],"o":2},"cl":{"a":"Squared Cl","b":"1F191","d":true,"e":true,"f":true,"h":true,"j":["alphabet","words","red-square"],"k":[0,21],"o":2},"flag-me":{"a":"Montenegro Flag","b":"1F1F2-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[3,5],"o":2},"file_folder":{"a":"File Folder","b":"1F4C1","d":true,"e":true,"f":true,"h":true,"j":["documents","business","office"],"k":[26,23],"o":2},"cop":{"skin_variations":{"1F3FB":{"unified":"1F46E-1F3FB","non_qualified":null,"image":"1f46e-1f3fb.png","sheet_x":21,"sheet_y":50,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F46E-1F3FC","non_qualified":null,"image":"1f46e-1f3fc.png","sheet_x":21,"sheet_y":51,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F46E-1F3FD","non_qualified":null,"image":"1f46e-1f3fd.png","sheet_x":21,"sheet_y":52,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F46E-1F3FE","non_qualified":null,"image":"1f46e-1f3fe.png","sheet_x":21,"sheet_y":53,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F46E-1F3FF","non_qualified":null,"image":"1f46e-1f3ff.png","sheet_x":21,"sheet_y":54,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F46E-200D-2642-FE0F","a":"Police Officer","b":"1F46E","d":true,"e":true,"f":true,"h":false,"k":[21,49],"o":2},"male-police-officer":{"skin_variations":{"1F3FB":{"unified":"1F46E-1F3FB-200D-2642-FE0F","non_qualified":"1F46E-1F3FB-200D-2642","image":"1f46e-1f3fb-200d-2642-fe0f.png","sheet_x":21,"sheet_y":44,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F46E-1F3FC-200D-2642-FE0F","non_qualified":"1F46E-1F3FC-200D-2642","image":"1f46e-1f3fc-200d-2642-fe0f.png","sheet_x":21,"sheet_y":45,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F46E-1F3FD-200D-2642-FE0F","non_qualified":"1F46E-1F3FD-200D-2642","image":"1f46e-1f3fd-200d-2642-fe0f.png","sheet_x":21,"sheet_y":46,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F46E-1F3FE-200D-2642-FE0F","non_qualified":"1F46E-1F3FE-200D-2642","image":"1f46e-1f3fe-200d-2642-fe0f.png","sheet_x":21,"sheet_y":47,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F46E-1F3FF-200D-2642-FE0F","non_qualified":"1F46E-1F3FF-200D-2642","image":"1f46e-1f3ff-200d-2642-fe0f.png","sheet_x":21,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F46E","a":"Male Police Officer","b":"1F46E-200D-2642-FE0F","c":"1F46E-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[21,43],"o":4},"cool":{"a":"Squared Cool","b":"1F192","d":true,"e":true,"f":true,"h":true,"j":["words","blue-square"],"k":[0,22],"o":2},"clock7":{"a":"Clock Face Seven Oclock","b":"1F556","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,45],"o":2},"flag-mf":{"a":"St. Martin Flag","b":"1F1F2-1F1EB","d":true,"e":true,"f":true,"h":true,"k":[3,6],"o":2},"open_file_folder":{"a":"Open File Folder","b":"1F4C2","d":true,"e":true,"f":true,"h":true,"j":["documents","load"],"k":[26,24],"o":2},"card_index_dividers":{"a":"Card Index Dividers","b":"1F5C2-FE0F","c":"1F5C2","d":true,"e":true,"f":true,"h":true,"j":["organizing","business","stationery"],"k":[30,15],"o":2},"flag-mg":{"a":"Madagascar Flag","b":"1F1F2-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[3,7],"o":2},"free":{"a":"Squared Free","b":"1F193","d":true,"e":true,"f":true,"h":true,"j":["blue-square","words"],"k":[0,23],"o":2},"female-police-officer":{"skin_variations":{"1F3FB":{"unified":"1F46E-1F3FB-200D-2640-FE0F","non_qualified":"1F46E-1F3FB-200D-2640","image":"1f46e-1f3fb-200d-2640-fe0f.png","sheet_x":21,"sheet_y":38,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F46E-1F3FC-200D-2640-FE0F","non_qualified":"1F46E-1F3FC-200D-2640","image":"1f46e-1f3fc-200d-2640-fe0f.png","sheet_x":21,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F46E-1F3FD-200D-2640-FE0F","non_qualified":"1F46E-1F3FD-200D-2640","image":"1f46e-1f3fd-200d-2640-fe0f.png","sheet_x":21,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F46E-1F3FE-200D-2640-FE0F","non_qualified":"1F46E-1F3FE-200D-2640","image":"1f46e-1f3fe-200d-2640-fe0f.png","sheet_x":21,"sheet_y":41,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F46E-1F3FF-200D-2640-FE0F","non_qualified":"1F46E-1F3FF-200D-2640","image":"1f46e-1f3ff-200d-2640-fe0f.png","sheet_x":21,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Police Officer","b":"1F46E-200D-2640-FE0F","c":"1F46E-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[21,37],"o":4},"clock730":{"a":"Clock Face Seven-Thirty","b":"1F562","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[29,0],"o":2},"date":{"a":"Calendar","b":"1F4C5","d":true,"e":true,"f":true,"h":true,"j":["calendar","schedule"],"k":[26,27],"o":2},"clock8":{"a":"Clock Face Eight Oclock","b":"1F557","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,46],"o":2},"information_source":{"a":"Information Source","b":"2139-FE0F","c":"2139","d":true,"e":true,"f":true,"h":true,"j":["blue-square","alphabet","letter"],"k":[52,13],"o":2},"sleuth_or_spy":{"skin_variations":{"1F3FB":{"unified":"1F575-1F3FB","non_qualified":null,"image":"1f575-1f3fb.png","sheet_x":29,"sheet_y":28,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F575-1F3FC","non_qualified":null,"image":"1f575-1f3fc.png","sheet_x":29,"sheet_y":29,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F575-1F3FD","non_qualified":null,"image":"1f575-1f3fd.png","sheet_x":29,"sheet_y":30,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F575-1F3FE","non_qualified":null,"image":"1f575-1f3fe.png","sheet_x":29,"sheet_y":31,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F575-1F3FF","non_qualified":null,"image":"1f575-1f3ff.png","sheet_x":29,"sheet_y":32,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F575-FE0F-200D-2642-FE0F","a":"Sleuth or Spy","b":"1F575-FE0F","c":"1F575","d":true,"e":true,"f":true,"h":false,"k":[29,27],"o":2},"flag-mh":{"a":"Marshall Islands Flag","b":"1F1F2-1F1ED","d":true,"e":true,"f":true,"h":true,"k":[3,8],"o":2},"clock830":{"a":"Clock Face Eight-Thirty","b":"1F563","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[29,1],"o":2},"calendar":{"a":"Tear-off Calendar","b":"1F4C6","d":true,"e":true,"f":true,"h":true,"j":["schedule","date","planning"],"k":[26,28],"o":2},"male-detective":{"skin_variations":{"1F3FB":{"unified":"1F575-1F3FB-200D-2642-FE0F","non_qualified":"1F575-1F3FB-200D-2642","image":"1f575-1f3fb-200d-2642-fe0f.png","sheet_x":29,"sheet_y":22,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F575-1F3FC-200D-2642-FE0F","non_qualified":"1F575-1F3FC-200D-2642","image":"1f575-1f3fc-200d-2642-fe0f.png","sheet_x":29,"sheet_y":23,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F575-1F3FD-200D-2642-FE0F","non_qualified":"1F575-1F3FD-200D-2642","image":"1f575-1f3fd-200d-2642-fe0f.png","sheet_x":29,"sheet_y":24,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F575-1F3FE-200D-2642-FE0F","non_qualified":"1F575-1F3FE-200D-2642","image":"1f575-1f3fe-200d-2642-fe0f.png","sheet_x":29,"sheet_y":25,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F575-1F3FF-200D-2642-FE0F","non_qualified":"1F575-1F3FF-200D-2642","image":"1f575-1f3ff-200d-2642-fe0f.png","sheet_x":29,"sheet_y":26,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F575-FE0F","a":"Male Detective","b":"1F575-FE0F-200D-2642-FE0F","d":true,"e":true,"f":true,"h":false,"k":[29,21],"o":4},"flag-mk":{"a":"North Macedonia Flag","b":"1F1F2-1F1F0","d":true,"e":true,"f":true,"h":true,"k":[3,9],"o":2},"id":{"a":"Squared Id","b":"1F194","d":true,"e":true,"f":true,"h":true,"j":["purple-square","words"],"k":[0,24],"o":2},"spiral_note_pad":{"a":"Spiral Note Pad","b":"1F5D2-FE0F","c":"1F5D2","d":true,"e":true,"f":true,"h":true,"k":[30,19],"o":2},"female-detective":{"skin_variations":{"1F3FB":{"unified":"1F575-1F3FB-200D-2640-FE0F","non_qualified":"1F575-1F3FB-200D-2640","image":"1f575-1f3fb-200d-2640-fe0f.png","sheet_x":29,"sheet_y":16,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F575-1F3FC-200D-2640-FE0F","non_qualified":"1F575-1F3FC-200D-2640","image":"1f575-1f3fc-200d-2640-fe0f.png","sheet_x":29,"sheet_y":17,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F575-1F3FD-200D-2640-FE0F","non_qualified":"1F575-1F3FD-200D-2640","image":"1f575-1f3fd-200d-2640-fe0f.png","sheet_x":29,"sheet_y":18,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F575-1F3FE-200D-2640-FE0F","non_qualified":"1F575-1F3FE-200D-2640","image":"1f575-1f3fe-200d-2640-fe0f.png","sheet_x":29,"sheet_y":19,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F575-1F3FF-200D-2640-FE0F","non_qualified":"1F575-1F3FF-200D-2640","image":"1f575-1f3ff-200d-2640-fe0f.png","sheet_x":29,"sheet_y":20,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Detective","b":"1F575-FE0F-200D-2640-FE0F","d":true,"e":true,"f":true,"h":false,"k":[29,15],"o":4},"clock9":{"a":"Clock Face Nine Oclock","b":"1F558","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,47],"o":2},"flag-ml":{"a":"Mali Flag","b":"1F1F2-1F1F1","d":true,"e":true,"f":true,"h":true,"k":[3,10],"o":2},"m":{"a":"Circled Latin Capital Letter M","b":"24C2-FE0F","c":"24C2","d":true,"e":true,"f":true,"h":true,"j":["alphabet","blue-circle","letter"],"k":[52,40],"o":2},"flag-mm":{"a":"Myanmar (burma) Flag","b":"1F1F2-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[3,11],"o":2},"clock930":{"a":"Clock Face Nine-Thirty","b":"1F564","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[29,2],"o":2},"guardsman":{"skin_variations":{"1F3FB":{"unified":"1F482-1F3FB","non_qualified":null,"image":"1f482-1f3fb.png","sheet_x":24,"sheet_y":21,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F482-1F3FC","non_qualified":null,"image":"1f482-1f3fc.png","sheet_x":24,"sheet_y":22,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F482-1F3FD","non_qualified":null,"image":"1f482-1f3fd.png","sheet_x":24,"sheet_y":23,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F482-1F3FE","non_qualified":null,"image":"1f482-1f3fe.png","sheet_x":24,"sheet_y":24,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F482-1F3FF","non_qualified":null,"image":"1f482-1f3ff.png","sheet_x":24,"sheet_y":25,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F482-200D-2642-FE0F","a":"Guardsman","b":"1F482","d":true,"e":true,"f":true,"h":false,"j":["uk","gb","british","male","guy","royal"],"k":[24,20],"o":2},"new":{"a":"Squared New","b":"1F195","d":true,"e":true,"f":true,"h":true,"j":["blue-square","words","start"],"k":[0,25],"o":2},"spiral_calendar_pad":{"a":"Spiral Calendar Pad","b":"1F5D3-FE0F","c":"1F5D3","d":true,"e":true,"f":true,"h":true,"k":[30,20],"o":2},"ng":{"a":"Squared Ng","b":"1F196","d":true,"e":true,"f":true,"h":true,"j":["blue-square","words","shape","icon"],"k":[0,26],"o":2},"card_index":{"a":"Card Index","b":"1F4C7","d":true,"e":true,"f":true,"h":true,"j":["business","stationery"],"k":[26,29],"o":2},"clock10":{"a":"Clock Face Ten Oclock","b":"1F559","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,48],"o":2},"flag-mn":{"a":"Mongolia Flag","b":"1F1F2-1F1F3","d":true,"e":true,"f":true,"h":true,"k":[3,12],"o":2},"male-guard":{"skin_variations":{"1F3FB":{"unified":"1F482-1F3FB-200D-2642-FE0F","non_qualified":"1F482-1F3FB-200D-2642","image":"1f482-1f3fb-200d-2642-fe0f.png","sheet_x":24,"sheet_y":15,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F482-1F3FC-200D-2642-FE0F","non_qualified":"1F482-1F3FC-200D-2642","image":"1f482-1f3fc-200d-2642-fe0f.png","sheet_x":24,"sheet_y":16,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F482-1F3FD-200D-2642-FE0F","non_qualified":"1F482-1F3FD-200D-2642","image":"1f482-1f3fd-200d-2642-fe0f.png","sheet_x":24,"sheet_y":17,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F482-1F3FE-200D-2642-FE0F","non_qualified":"1F482-1F3FE-200D-2642","image":"1f482-1f3fe-200d-2642-fe0f.png","sheet_x":24,"sheet_y":18,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F482-1F3FF-200D-2642-FE0F","non_qualified":"1F482-1F3FF-200D-2642","image":"1f482-1f3ff-200d-2642-fe0f.png","sheet_x":24,"sheet_y":19,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F482","a":"Male Guard","b":"1F482-200D-2642-FE0F","c":"1F482-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[24,14],"o":4},"flag-mo":{"a":"Macao Sar China Flag","b":"1F1F2-1F1F4","d":true,"e":true,"f":true,"h":true,"k":[3,13],"o":2},"clock1030":{"a":"Clock Face Ten-Thirty","b":"1F565","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[29,3],"o":2},"chart_with_upwards_trend":{"a":"Chart with Upwards Trend","b":"1F4C8","d":true,"e":true,"f":true,"h":true,"j":["graph","presentation","stats","recovery","business","economics","money","sales","good","success"],"k":[26,30],"o":2},"o2":{"a":"Negative Squared Latin Capital Letter O","b":"1F17E-FE0F","c":"1F17E","d":true,"e":true,"f":true,"h":true,"j":["alphabet","red-square","letter"],"k":[0,18],"o":2},"female-guard":{"skin_variations":{"1F3FB":{"unified":"1F482-1F3FB-200D-2640-FE0F","non_qualified":"1F482-1F3FB-200D-2640","image":"1f482-1f3fb-200d-2640-fe0f.png","sheet_x":24,"sheet_y":9,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F482-1F3FC-200D-2640-FE0F","non_qualified":"1F482-1F3FC-200D-2640","image":"1f482-1f3fc-200d-2640-fe0f.png","sheet_x":24,"sheet_y":10,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F482-1F3FD-200D-2640-FE0F","non_qualified":"1F482-1F3FD-200D-2640","image":"1f482-1f3fd-200d-2640-fe0f.png","sheet_x":24,"sheet_y":11,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F482-1F3FE-200D-2640-FE0F","non_qualified":"1F482-1F3FE-200D-2640","image":"1f482-1f3fe-200d-2640-fe0f.png","sheet_x":24,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F482-1F3FF-200D-2640-FE0F","non_qualified":"1F482-1F3FF-200D-2640","image":"1f482-1f3ff-200d-2640-fe0f.png","sheet_x":24,"sheet_y":13,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Guard","b":"1F482-200D-2640-FE0F","c":"1F482-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[24,8],"o":4},"chart_with_downwards_trend":{"a":"Chart with Downwards Trend","b":"1F4C9","d":true,"e":true,"f":true,"h":true,"j":["graph","presentation","stats","recession","business","economics","money","sales","bad","failure"],"k":[26,31],"o":2},"flag-mp":{"a":"Northern Mariana Islands Flag","b":"1F1F2-1F1F5","d":true,"e":true,"f":true,"h":true,"k":[3,14],"o":2},"ok":{"a":"Squared Ok","b":"1F197","d":true,"e":true,"f":true,"h":true,"j":["good","agree","yes","blue-square"],"k":[0,27],"o":2},"clock11":{"a":"Clock Face Eleven Oclock","b":"1F55A","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,49],"o":2},"construction_worker":{"skin_variations":{"1F3FB":{"unified":"1F477-1F3FB","non_qualified":null,"image":"1f477-1f3fb.png","sheet_x":23,"sheet_y":23,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F477-1F3FC","non_qualified":null,"image":"1f477-1f3fc.png","sheet_x":23,"sheet_y":24,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F477-1F3FD","non_qualified":null,"image":"1f477-1f3fd.png","sheet_x":23,"sheet_y":25,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F477-1F3FE","non_qualified":null,"image":"1f477-1f3fe.png","sheet_x":23,"sheet_y":26,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F477-1F3FF","non_qualified":null,"image":"1f477-1f3ff.png","sheet_x":23,"sheet_y":27,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F477-200D-2642-FE0F","a":"Construction Worker","b":"1F477","d":true,"e":true,"f":true,"h":false,"k":[23,22],"o":2},"male-construction-worker":{"skin_variations":{"1F3FB":{"unified":"1F477-1F3FB-200D-2642-FE0F","non_qualified":"1F477-1F3FB-200D-2642","image":"1f477-1f3fb-200d-2642-fe0f.png","sheet_x":23,"sheet_y":17,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F477-1F3FC-200D-2642-FE0F","non_qualified":"1F477-1F3FC-200D-2642","image":"1f477-1f3fc-200d-2642-fe0f.png","sheet_x":23,"sheet_y":18,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F477-1F3FD-200D-2642-FE0F","non_qualified":"1F477-1F3FD-200D-2642","image":"1f477-1f3fd-200d-2642-fe0f.png","sheet_x":23,"sheet_y":19,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F477-1F3FE-200D-2642-FE0F","non_qualified":"1F477-1F3FE-200D-2642","image":"1f477-1f3fe-200d-2642-fe0f.png","sheet_x":23,"sheet_y":20,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F477-1F3FF-200D-2642-FE0F","non_qualified":"1F477-1F3FF-200D-2642","image":"1f477-1f3ff-200d-2642-fe0f.png","sheet_x":23,"sheet_y":21,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F477","a":"Male Construction Worker","b":"1F477-200D-2642-FE0F","c":"1F477-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[23,16],"o":4},"clock1130":{"a":"Clock Face Eleven-Thirty","b":"1F566","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[29,4],"o":2},"flag-mq":{"a":"Martinique Flag","b":"1F1F2-1F1F6","d":true,"e":true,"f":true,"h":true,"k":[3,15],"o":2},"bar_chart":{"a":"Bar Chart","b":"1F4CA","d":true,"e":true,"f":true,"h":true,"j":["graph","presentation","stats"],"k":[26,32],"o":2},"parking":{"a":"Negative Squared Latin Capital Letter P","b":"1F17F-FE0F","c":"1F17F","d":true,"e":true,"f":true,"h":true,"j":["cars","blue-square","alphabet","letter"],"k":[0,19],"o":2},"new_moon":{"a":"New Moon Symbol","b":"1F311","d":true,"e":true,"f":true,"h":true,"j":["nature","twilight","planet","space","night","evening","sleep"],"k":[5,36],"o":2},"female-construction-worker":{"skin_variations":{"1F3FB":{"unified":"1F477-1F3FB-200D-2640-FE0F","non_qualified":"1F477-1F3FB-200D-2640","image":"1f477-1f3fb-200d-2640-fe0f.png","sheet_x":23,"sheet_y":11,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F477-1F3FC-200D-2640-FE0F","non_qualified":"1F477-1F3FC-200D-2640","image":"1f477-1f3fc-200d-2640-fe0f.png","sheet_x":23,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F477-1F3FD-200D-2640-FE0F","non_qualified":"1F477-1F3FD-200D-2640","image":"1f477-1f3fd-200d-2640-fe0f.png","sheet_x":23,"sheet_y":13,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F477-1F3FE-200D-2640-FE0F","non_qualified":"1F477-1F3FE-200D-2640","image":"1f477-1f3fe-200d-2640-fe0f.png","sheet_x":23,"sheet_y":14,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F477-1F3FF-200D-2640-FE0F","non_qualified":"1F477-1F3FF-200D-2640","image":"1f477-1f3ff-200d-2640-fe0f.png","sheet_x":23,"sheet_y":15,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Construction Worker","b":"1F477-200D-2640-FE0F","c":"1F477-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[23,10],"o":4},"sos":{"a":"Squared Sos","b":"1F198","d":true,"e":true,"f":true,"h":true,"j":["help","red-square","words","emergency","911"],"k":[0,28],"o":2},"clipboard":{"a":"Clipboard","b":"1F4CB","d":true,"e":true,"f":true,"h":true,"j":["stationery","documents"],"k":[26,33],"o":2},"flag-mr":{"a":"Mauritania Flag","b":"1F1F2-1F1F7","d":true,"e":true,"f":true,"h":true,"k":[3,16],"o":2},"prince":{"skin_variations":{"1F3FB":{"unified":"1F934-1F3FB","non_qualified":null,"image":"1f934-1f3fb.png","sheet_x":39,"sheet_y":18,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F934-1F3FC","non_qualified":null,"image":"1f934-1f3fc.png","sheet_x":39,"sheet_y":19,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F934-1F3FD","non_qualified":null,"image":"1f934-1f3fd.png","sheet_x":39,"sheet_y":20,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F934-1F3FE","non_qualified":null,"image":"1f934-1f3fe.png","sheet_x":39,"sheet_y":21,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F934-1F3FF","non_qualified":null,"image":"1f934-1f3ff.png","sheet_x":39,"sheet_y":22,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Prince","b":"1F934","d":true,"e":true,"f":true,"h":true,"j":["boy","man","male","crown","royal","king"],"k":[39,17],"o":4},"waxing_crescent_moon":{"a":"Waxing Crescent Moon Symbol","b":"1F312","d":true,"e":true,"f":true,"h":true,"j":["nature","twilight","planet","space","night","evening","sleep"],"k":[5,37],"o":2},"flag-ms":{"a":"Montserrat Flag","b":"1F1F2-1F1F8","d":true,"e":true,"f":true,"h":true,"k":[3,17],"o":2},"pushpin":{"a":"Pushpin","b":"1F4CC","d":true,"e":true,"f":true,"h":true,"j":["stationery","mark","here"],"k":[26,34],"o":2},"up":{"a":"Squared Up with Exclamation Mark","b":"1F199","d":true,"e":true,"f":true,"h":true,"j":["blue-square","above","high"],"k":[0,29],"o":2},"flag-mt":{"a":"Malta Flag","b":"1F1F2-1F1F9","d":true,"e":true,"f":true,"h":true,"k":[3,18],"o":2},"princess":{"skin_variations":{"1F3FB":{"unified":"1F478-1F3FB","non_qualified":null,"image":"1f478-1f3fb.png","sheet_x":23,"sheet_y":29,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F478-1F3FC","non_qualified":null,"image":"1f478-1f3fc.png","sheet_x":23,"sheet_y":30,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F478-1F3FD","non_qualified":null,"image":"1f478-1f3fd.png","sheet_x":23,"sheet_y":31,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F478-1F3FE","non_qualified":null,"image":"1f478-1f3fe.png","sheet_x":23,"sheet_y":32,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F478-1F3FF","non_qualified":null,"image":"1f478-1f3ff.png","sheet_x":23,"sheet_y":33,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Princess","b":"1F478","d":true,"e":true,"f":true,"h":true,"j":["girl","woman","female","blond","crown","royal","queen"],"k":[23,28],"o":2},"round_pushpin":{"a":"Round Pushpin","b":"1F4CD","d":true,"e":true,"f":true,"h":true,"j":["stationery","location","map","here"],"k":[26,35],"o":2},"first_quarter_moon":{"a":"First Quarter Moon Symbol","b":"1F313","d":true,"e":true,"f":true,"h":true,"j":["nature","twilight","planet","space","night","evening","sleep"],"k":[5,38],"o":2},"vs":{"a":"Squared Vs","b":"1F19A","d":true,"e":true,"f":true,"h":true,"j":["words","orange-square"],"k":[0,30],"o":2},"flag-mu":{"a":"Mauritius Flag","b":"1F1F2-1F1FA","d":true,"e":true,"f":true,"h":true,"k":[3,19],"o":2},"koko":{"a":"Squared Katakana Koko","b":"1F201","d":true,"e":true,"f":true,"h":true,"j":["blue-square","here","katakana","japanese","destination"],"k":[5,4],"o":2},"man_with_turban":{"skin_variations":{"1F3FB":{"unified":"1F473-1F3FB","non_qualified":null,"image":"1f473-1f3fb.png","sheet_x":22,"sheet_y":44,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F473-1F3FC","non_qualified":null,"image":"1f473-1f3fc.png","sheet_x":22,"sheet_y":45,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F473-1F3FD","non_qualified":null,"image":"1f473-1f3fd.png","sheet_x":22,"sheet_y":46,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F473-1F3FE","non_qualified":null,"image":"1f473-1f3fe.png","sheet_x":22,"sheet_y":47,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F473-1F3FF","non_qualified":null,"image":"1f473-1f3ff.png","sheet_x":22,"sheet_y":48,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F473-200D-2642-FE0F","a":"Man with Turban","b":"1F473","d":true,"e":true,"f":true,"h":false,"j":["male","indian","hinduism","arabs"],"k":[22,43],"o":2},"moon":{"a":"Waxing Gibbous Moon Symbol","b":"1F314","d":true,"e":true,"f":true,"h":true,"k":[5,39],"n":["waxing_gibbous_moon"],"o":2},"paperclip":{"a":"Paperclip","b":"1F4CE","d":true,"e":true,"f":true,"h":true,"j":["documents","stationery"],"k":[26,36],"o":2},"linked_paperclips":{"a":"Linked Paperclips","b":"1F587-FE0F","c":"1F587","d":true,"e":true,"f":true,"h":true,"k":[29,43],"o":2},"man-wearing-turban":{"skin_variations":{"1F3FB":{"unified":"1F473-1F3FB-200D-2642-FE0F","non_qualified":"1F473-1F3FB-200D-2642","image":"1f473-1f3fb-200d-2642-fe0f.png","sheet_x":22,"sheet_y":38,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F473-1F3FC-200D-2642-FE0F","non_qualified":"1F473-1F3FC-200D-2642","image":"1f473-1f3fc-200d-2642-fe0f.png","sheet_x":22,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F473-1F3FD-200D-2642-FE0F","non_qualified":"1F473-1F3FD-200D-2642","image":"1f473-1f3fd-200d-2642-fe0f.png","sheet_x":22,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F473-1F3FE-200D-2642-FE0F","non_qualified":"1F473-1F3FE-200D-2642","image":"1f473-1f3fe-200d-2642-fe0f.png","sheet_x":22,"sheet_y":41,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F473-1F3FF-200D-2642-FE0F","non_qualified":"1F473-1F3FF-200D-2642","image":"1f473-1f3ff-200d-2642-fe0f.png","sheet_x":22,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F473","a":"Man Wearing Turban","b":"1F473-200D-2642-FE0F","c":"1F473-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[22,37],"o":4},"sa":{"a":"Squared Katakana Sa","b":"1F202-FE0F","c":"1F202","d":true,"e":true,"f":true,"h":true,"j":["japanese","blue-square","katakana"],"k":[5,5],"o":2},"full_moon":{"a":"Full Moon Symbol","b":"1F315","d":true,"e":true,"f":true,"h":true,"j":["nature","yellow","twilight","planet","space","night","evening","sleep"],"k":[5,40],"o":2},"flag-mv":{"a":"Maldives Flag","b":"1F1F2-1F1FB","d":true,"e":true,"f":true,"h":true,"k":[3,20],"o":2},"flag-mw":{"a":"Malawi Flag","b":"1F1F2-1F1FC","d":true,"e":true,"f":true,"h":true,"k":[3,21],"o":2},"waning_gibbous_moon":{"a":"Waning Gibbous Moon Symbol","b":"1F316","d":true,"e":true,"f":true,"h":true,"j":["nature","twilight","planet","space","night","evening","sleep","waxing_gibbous_moon"],"k":[5,41],"o":2},"woman-wearing-turban":{"skin_variations":{"1F3FB":{"unified":"1F473-1F3FB-200D-2640-FE0F","non_qualified":"1F473-1F3FB-200D-2640","image":"1f473-1f3fb-200d-2640-fe0f.png","sheet_x":22,"sheet_y":32,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F473-1F3FC-200D-2640-FE0F","non_qualified":"1F473-1F3FC-200D-2640","image":"1f473-1f3fc-200d-2640-fe0f.png","sheet_x":22,"sheet_y":33,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F473-1F3FD-200D-2640-FE0F","non_qualified":"1F473-1F3FD-200D-2640","image":"1f473-1f3fd-200d-2640-fe0f.png","sheet_x":22,"sheet_y":34,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F473-1F3FE-200D-2640-FE0F","non_qualified":"1F473-1F3FE-200D-2640","image":"1f473-1f3fe-200d-2640-fe0f.png","sheet_x":22,"sheet_y":35,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F473-1F3FF-200D-2640-FE0F","non_qualified":"1F473-1F3FF-200D-2640","image":"1f473-1f3ff-200d-2640-fe0f.png","sheet_x":22,"sheet_y":36,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Wearing Turban","b":"1F473-200D-2640-FE0F","c":"1F473-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[22,31],"o":4},"u6708":{"a":"Squared Cjk Unified Ideograph-6708","b":"1F237-FE0F","c":"1F237","d":true,"e":true,"f":true,"h":true,"j":["chinese","month","moon","japanese","orange-square","kanji"],"k":[5,13],"o":2},"straight_ruler":{"a":"Straight Ruler","b":"1F4CF","d":true,"e":true,"f":true,"h":true,"j":["stationery","calculate","length","math","school","drawing","architect","sketch"],"k":[26,37],"o":2},"u6709":{"a":"Squared Cjk Unified Ideograph-6709","b":"1F236","d":true,"e":true,"f":true,"h":true,"j":["orange-square","chinese","have","kanji"],"k":[5,12],"o":2},"triangular_ruler":{"a":"Triangular Ruler","b":"1F4D0","d":true,"e":true,"f":true,"h":true,"j":["stationery","math","architect","sketch"],"k":[26,38],"o":2},"man_with_gua_pi_mao":{"skin_variations":{"1F3FB":{"unified":"1F472-1F3FB","non_qualified":null,"image":"1f472-1f3fb.png","sheet_x":22,"sheet_y":26,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F472-1F3FC","non_qualified":null,"image":"1f472-1f3fc.png","sheet_x":22,"sheet_y":27,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F472-1F3FD","non_qualified":null,"image":"1f472-1f3fd.png","sheet_x":22,"sheet_y":28,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F472-1F3FE","non_qualified":null,"image":"1f472-1f3fe.png","sheet_x":22,"sheet_y":29,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F472-1F3FF","non_qualified":null,"image":"1f472-1f3ff.png","sheet_x":22,"sheet_y":30,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man with Gua Pi Mao","b":"1F472","d":true,"e":true,"f":true,"h":true,"j":["male","boy","chinese"],"k":[22,25],"o":2},"flag-mx":{"a":"Mexico Flag","b":"1F1F2-1F1FD","d":true,"e":true,"f":true,"h":true,"k":[3,22],"o":2},"last_quarter_moon":{"a":"Last Quarter Moon Symbol","b":"1F317","d":true,"e":true,"f":true,"h":true,"j":["nature","twilight","planet","space","night","evening","sleep"],"k":[5,42],"o":2},"person_with_headscarf":{"skin_variations":{"1F3FB":{"unified":"1F9D5-1F3FB","non_qualified":null,"image":"1f9d5-1f3fb.png","sheet_x":48,"sheet_y":35,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9D5-1F3FC","non_qualified":null,"image":"1f9d5-1f3fc.png","sheet_x":48,"sheet_y":36,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9D5-1F3FD","non_qualified":null,"image":"1f9d5-1f3fd.png","sheet_x":48,"sheet_y":37,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9D5-1F3FE","non_qualified":null,"image":"1f9d5-1f3fe.png","sheet_x":48,"sheet_y":38,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9D5-1F3FF","non_qualified":null,"image":"1f9d5-1f3ff.png","sheet_x":48,"sheet_y":39,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Person with Headscarf","b":"1F9D5","d":true,"e":true,"f":true,"h":true,"k":[48,34],"o":5},"waning_crescent_moon":{"a":"Waning Crescent Moon Symbol","b":"1F318","d":true,"e":true,"f":true,"h":true,"j":["nature","twilight","planet","space","night","evening","sleep"],"k":[5,43],"o":2},"u6307":{"a":"Squared Cjk Unified Ideograph-6307","b":"1F22F","d":true,"e":true,"f":true,"h":true,"j":["chinese","point","green-square","kanji"],"k":[5,7],"o":2},"scissors":{"a":"Black Scissors","b":"2702-FE0F","c":"2702","d":true,"e":true,"f":true,"h":true,"j":["stationery","cut"],"k":[54,39],"o":2},"flag-my":{"a":"Malaysia Flag","b":"1F1F2-1F1FE","d":true,"e":true,"f":true,"h":true,"k":[3,23],"o":2},"ideograph_advantage":{"a":"Circled Ideograph Advantage","b":"1F250","d":true,"e":true,"f":true,"h":true,"j":["chinese","kanji","obtain","get","circle"],"k":[5,17],"o":2},"man_in_tuxedo":{"skin_variations":{"1F3FB":{"unified":"1F935-1F3FB","non_qualified":null,"image":"1f935-1f3fb.png","sheet_x":39,"sheet_y":24,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F935-1F3FC","non_qualified":null,"image":"1f935-1f3fc.png","sheet_x":39,"sheet_y":25,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F935-1F3FD","non_qualified":null,"image":"1f935-1f3fd.png","sheet_x":39,"sheet_y":26,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F935-1F3FE","non_qualified":null,"image":"1f935-1f3fe.png","sheet_x":39,"sheet_y":27,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F935-1F3FF","non_qualified":null,"image":"1f935-1f3ff.png","sheet_x":39,"sheet_y":28,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man in Tuxedo","b":"1F935","d":true,"e":true,"f":true,"h":true,"j":["couple","marriage","wedding","groom"],"k":[39,23],"o":4},"flag-mz":{"a":"Mozambique Flag","b":"1F1F2-1F1FF","d":true,"e":true,"f":true,"h":true,"k":[3,24],"o":2},"card_file_box":{"a":"Card File Box","b":"1F5C3-FE0F","c":"1F5C3","d":true,"e":true,"f":true,"h":true,"j":["business","stationery"],"k":[30,16],"o":2},"crescent_moon":{"a":"Crescent Moon","b":"1F319","d":true,"e":true,"f":true,"h":true,"j":["night","sleep","sky","evening","magic"],"k":[5,44],"o":2},"flag-na":{"a":"Namibia Flag","b":"1F1F3-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[3,25],"o":2},"bride_with_veil":{"skin_variations":{"1F3FB":{"unified":"1F470-1F3FB","non_qualified":null,"image":"1f470-1f3fb.png","sheet_x":22,"sheet_y":2,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F470-1F3FC","non_qualified":null,"image":"1f470-1f3fc.png","sheet_x":22,"sheet_y":3,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F470-1F3FD","non_qualified":null,"image":"1f470-1f3fd.png","sheet_x":22,"sheet_y":4,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F470-1F3FE","non_qualified":null,"image":"1f470-1f3fe.png","sheet_x":22,"sheet_y":5,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F470-1F3FF","non_qualified":null,"image":"1f470-1f3ff.png","sheet_x":22,"sheet_y":6,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Bride with Veil","b":"1F470","d":true,"e":true,"f":true,"h":true,"j":["couple","marriage","wedding","woman","bride"],"k":[22,1],"o":2},"new_moon_with_face":{"a":"New Moon with Face","b":"1F31A","d":true,"e":true,"f":true,"h":true,"j":["nature","twilight","planet","space","night","evening","sleep"],"k":[5,45],"o":2},"file_cabinet":{"a":"File Cabinet","b":"1F5C4-FE0F","c":"1F5C4","d":true,"e":true,"f":true,"h":true,"j":["filing","organizing"],"k":[30,17],"o":2},"u5272":{"a":"Squared Cjk Unified Ideograph-5272","b":"1F239","d":true,"e":true,"f":true,"h":true,"j":["cut","divide","chinese","kanji","pink-square"],"k":[5,15],"o":2},"wastebasket":{"a":"Wastebasket","b":"1F5D1-FE0F","c":"1F5D1","d":true,"e":true,"f":true,"h":true,"j":["bin","trash","rubbish","garbage","toss"],"k":[30,18],"o":2},"pregnant_woman":{"skin_variations":{"1F3FB":{"unified":"1F930-1F3FB","non_qualified":null,"image":"1f930-1f3fb.png","sheet_x":38,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F930-1F3FC","non_qualified":null,"image":"1f930-1f3fc.png","sheet_x":38,"sheet_y":52,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F930-1F3FD","non_qualified":null,"image":"1f930-1f3fd.png","sheet_x":38,"sheet_y":53,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F930-1F3FE","non_qualified":null,"image":"1f930-1f3fe.png","sheet_x":38,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F930-1F3FF","non_qualified":null,"image":"1f930-1f3ff.png","sheet_x":38,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Pregnant Woman","b":"1F930","d":true,"e":true,"f":true,"h":true,"j":["baby"],"k":[38,50],"o":4},"first_quarter_moon_with_face":{"a":"First Quarter Moon with Face","b":"1F31B","d":true,"e":true,"f":true,"h":true,"j":["nature","twilight","planet","space","night","evening","sleep"],"k":[5,46],"o":2},"flag-nc":{"a":"New Caledonia Flag","b":"1F1F3-1F1E8","d":true,"e":true,"f":true,"h":true,"k":[3,26],"o":2},"u7121":{"a":"Squared Cjk Unified Ideograph-7121","b":"1F21A","d":true,"e":true,"f":true,"h":true,"j":["nothing","chinese","kanji","japanese","orange-square"],"k":[5,6],"o":2},"lock":{"a":"Lock","b":"1F512","d":true,"e":true,"f":true,"h":true,"j":["security","password","padlock"],"k":[27,46],"o":2},"flag-ne":{"a":"Niger Flag","b":"1F1F3-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[3,27],"o":2},"last_quarter_moon_with_face":{"a":"Last Quarter Moon with Face","b":"1F31C","d":true,"e":true,"f":true,"h":true,"j":["nature","twilight","planet","space","night","evening","sleep"],"k":[5,47],"o":2},"breast-feeding":{"skin_variations":{"1F3FB":{"unified":"1F931-1F3FB","non_qualified":null,"image":"1f931-1f3fb.png","sheet_x":39,"sheet_y":0,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F931-1F3FC","non_qualified":null,"image":"1f931-1f3fc.png","sheet_x":39,"sheet_y":1,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F931-1F3FD","non_qualified":null,"image":"1f931-1f3fd.png","sheet_x":39,"sheet_y":2,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F931-1F3FE","non_qualified":null,"image":"1f931-1f3fe.png","sheet_x":39,"sheet_y":3,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F931-1F3FF","non_qualified":null,"image":"1f931-1f3ff.png","sheet_x":39,"sheet_y":4,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Breast-Feeding","b":"1F931","d":true,"e":true,"f":true,"h":true,"k":[38,56],"o":5},"u7981":{"a":"Squared Cjk Unified Ideograph-7981","b":"1F232","d":true,"e":true,"f":true,"h":true,"j":["kanji","japanese","chinese","forbidden","limit","restricted","red-square"],"k":[5,8],"o":2},"accept":{"a":"Circled Ideograph Accept","b":"1F251","d":true,"e":true,"f":true,"h":true,"j":["ok","good","chinese","kanji","agree","yes","orange-circle"],"k":[5,18],"o":2},"angel":{"skin_variations":{"1F3FB":{"unified":"1F47C-1F3FB","non_qualified":null,"image":"1f47c-1f3fb.png","sheet_x":23,"sheet_y":38,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F47C-1F3FC","non_qualified":null,"image":"1f47c-1f3fc.png","sheet_x":23,"sheet_y":39,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F47C-1F3FD","non_qualified":null,"image":"1f47c-1f3fd.png","sheet_x":23,"sheet_y":40,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F47C-1F3FE","non_qualified":null,"image":"1f47c-1f3fe.png","sheet_x":23,"sheet_y":41,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F47C-1F3FF","non_qualified":null,"image":"1f47c-1f3ff.png","sheet_x":23,"sheet_y":42,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Baby Angel","b":"1F47C","d":true,"e":true,"f":true,"h":true,"j":["heaven","wings","halo"],"k":[23,37],"o":2},"unlock":{"a":"Open Lock","b":"1F513","d":true,"e":true,"f":true,"h":true,"j":["privacy","security"],"k":[27,47],"o":2},"flag-nf":{"a":"Norfolk Island Flag","b":"1F1F3-1F1EB","d":true,"e":true,"f":true,"h":true,"k":[3,28],"o":2},"thermometer":{"a":"Thermometer","b":"1F321-FE0F","c":"1F321","d":true,"e":true,"f":true,"h":true,"j":["weather","temperature","hot","cold"],"k":[5,52],"o":2},"flag-ng":{"a":"Nigeria Flag","b":"1F1F3-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[3,29],"o":2},"u7533":{"a":"Squared Cjk Unified Ideograph-7533","b":"1F238","d":true,"e":true,"f":true,"h":true,"j":["chinese","japanese","kanji","orange-square"],"k":[5,14],"o":2},"sunny":{"a":"Black Sun with Rays","b":"2600-FE0F","c":"2600","d":true,"e":true,"f":true,"h":true,"j":["weather","nature","brightness","summer","beach","spring"],"k":[52,49],"o":2},"lock_with_ink_pen":{"a":"Lock with Ink Pen","b":"1F50F","d":true,"e":true,"f":true,"h":true,"j":["security","secret"],"k":[27,43],"o":2},"santa":{"skin_variations":{"1F3FB":{"unified":"1F385-1F3FB","non_qualified":null,"image":"1f385-1f3fb.png","sheet_x":7,"sheet_y":37,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F385-1F3FC","non_qualified":null,"image":"1f385-1f3fc.png","sheet_x":7,"sheet_y":38,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F385-1F3FD","non_qualified":null,"image":"1f385-1f3fd.png","sheet_x":7,"sheet_y":39,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F385-1F3FE","non_qualified":null,"image":"1f385-1f3fe.png","sheet_x":7,"sheet_y":40,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F385-1F3FF","non_qualified":null,"image":"1f385-1f3ff.png","sheet_x":7,"sheet_y":41,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Father Christmas","b":"1F385","d":true,"e":true,"f":true,"h":true,"j":["festival","man","male","xmas","father christmas"],"k":[7,36],"o":2},"closed_lock_with_key":{"a":"Closed Lock with Key","b":"1F510","d":true,"e":true,"f":true,"h":true,"j":["security","privacy"],"k":[27,44],"o":2},"u5408":{"a":"Squared Cjk Unified Ideograph-5408","b":"1F234","d":true,"e":true,"f":true,"h":true,"j":["japanese","chinese","join","kanji","red-square"],"k":[5,10],"o":2},"flag-ni":{"a":"Nicaragua Flag","b":"1F1F3-1F1EE","d":true,"e":true,"f":true,"h":true,"k":[3,30],"o":2},"mrs_claus":{"skin_variations":{"1F3FB":{"unified":"1F936-1F3FB","non_qualified":null,"image":"1f936-1f3fb.png","sheet_x":39,"sheet_y":30,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F936-1F3FC","non_qualified":null,"image":"1f936-1f3fc.png","sheet_x":39,"sheet_y":31,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F936-1F3FD","non_qualified":null,"image":"1f936-1f3fd.png","sheet_x":39,"sheet_y":32,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F936-1F3FE","non_qualified":null,"image":"1f936-1f3fe.png","sheet_x":39,"sheet_y":33,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F936-1F3FF","non_qualified":null,"image":"1f936-1f3ff.png","sheet_x":39,"sheet_y":34,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Mother Christmas","b":"1F936","d":true,"e":true,"f":true,"h":true,"j":["woman","female","xmas","mother christmas"],"k":[39,29],"n":["mother_christmas"],"o":4},"full_moon_with_face":{"a":"Full Moon with Face","b":"1F31D","d":true,"e":true,"f":true,"h":true,"j":["nature","twilight","planet","space","night","evening","sleep"],"k":[5,48],"o":2},"key":{"a":"Key","b":"1F511","d":true,"e":true,"f":true,"h":true,"j":["lock","door","password"],"k":[27,45],"o":2},"superhero":{"skin_variations":{"1F3FB":{"unified":"1F9B8-1F3FB","non_qualified":null,"image":"1f9b8-1f3fb.png","sheet_x":43,"sheet_y":31,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9B8-1F3FC","non_qualified":null,"image":"1f9b8-1f3fc.png","sheet_x":43,"sheet_y":32,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9B8-1F3FD","non_qualified":null,"image":"1f9b8-1f3fd.png","sheet_x":43,"sheet_y":33,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9B8-1F3FE","non_qualified":null,"image":"1f9b8-1f3fe.png","sheet_x":43,"sheet_y":34,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9B8-1F3FF","non_qualified":null,"image":"1f9b8-1f3ff.png","sheet_x":43,"sheet_y":35,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Superhero","b":"1F9B8","d":true,"e":true,"f":true,"h":true,"k":[43,30],"o":11},"flag-nl":{"a":"Netherlands Flag","b":"1F1F3-1F1F1","d":true,"e":true,"f":true,"h":true,"k":[3,31],"o":2},"u7a7a":{"a":"Squared Cjk Unified Ideograph-7a7a","b":"1F233","d":true,"e":true,"f":true,"h":true,"j":["kanji","japanese","chinese","empty","sky","blue-square"],"k":[5,9],"o":2},"sun_with_face":{"a":"Sun with Face","b":"1F31E","d":true,"e":true,"f":true,"h":true,"j":["nature","morning","sky"],"k":[5,49],"o":2},"male_superhero":{"skin_variations":{"1F3FB":{"unified":"1F9B8-1F3FB-200D-2642-FE0F","non_qualified":"1F9B8-1F3FB-200D-2642","image":"1f9b8-1f3fb-200d-2642-fe0f.png","sheet_x":43,"sheet_y":25,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9B8-1F3FC-200D-2642-FE0F","non_qualified":"1F9B8-1F3FC-200D-2642","image":"1f9b8-1f3fc-200d-2642-fe0f.png","sheet_x":43,"sheet_y":26,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9B8-1F3FD-200D-2642-FE0F","non_qualified":"1F9B8-1F3FD-200D-2642","image":"1f9b8-1f3fd-200d-2642-fe0f.png","sheet_x":43,"sheet_y":27,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9B8-1F3FE-200D-2642-FE0F","non_qualified":"1F9B8-1F3FE-200D-2642","image":"1f9b8-1f3fe-200d-2642-fe0f.png","sheet_x":43,"sheet_y":28,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9B8-1F3FF-200D-2642-FE0F","non_qualified":"1F9B8-1F3FF-200D-2642","image":"1f9b8-1f3ff-200d-2642-fe0f.png","sheet_x":43,"sheet_y":29,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Superhero","b":"1F9B8-200D-2642-FE0F","c":"1F9B8-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[43,24],"o":11},"ringed_planet":{"a":"Ringed Planet","b":"1FA90","d":true,"e":true,"f":true,"h":true,"k":[52,4],"o":12},"old_key":{"a":"Old Key","b":"1F5DD-FE0F","c":"1F5DD","d":true,"e":true,"f":true,"h":true,"j":["lock","door","password"],"k":[30,22],"o":2},"congratulations":{"a":"Circled Ideograph Congratulation","b":"3297-FE0F","c":"3297","d":true,"e":true,"f":true,"h":true,"j":["chinese","kanji","japanese","red-circle"],"k":[55,46],"o":2},"flag-no":{"a":"Norway Flag","b":"1F1F3-1F1F4","d":true,"e":true,"f":true,"h":true,"k":[3,32],"o":2},"star":{"a":"White Medium Star","b":"2B50","d":true,"e":true,"f":true,"h":true,"j":["night","yellow"],"k":[55,42],"o":2},"secret":{"a":"Circled Ideograph Secret","b":"3299-FE0F","c":"3299","d":true,"e":true,"f":true,"h":true,"j":["privacy","chinese","sshh","kanji","red-circle"],"k":[55,47],"o":2},"flag-np":{"a":"Nepal Flag","b":"1F1F3-1F1F5","d":true,"e":true,"f":true,"h":true,"k":[3,33],"o":2},"female_superhero":{"skin_variations":{"1F3FB":{"unified":"1F9B8-1F3FB-200D-2640-FE0F","non_qualified":"1F9B8-1F3FB-200D-2640","image":"1f9b8-1f3fb-200d-2640-fe0f.png","sheet_x":43,"sheet_y":19,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9B8-1F3FC-200D-2640-FE0F","non_qualified":"1F9B8-1F3FC-200D-2640","image":"1f9b8-1f3fc-200d-2640-fe0f.png","sheet_x":43,"sheet_y":20,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9B8-1F3FD-200D-2640-FE0F","non_qualified":"1F9B8-1F3FD-200D-2640","image":"1f9b8-1f3fd-200d-2640-fe0f.png","sheet_x":43,"sheet_y":21,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9B8-1F3FE-200D-2640-FE0F","non_qualified":"1F9B8-1F3FE-200D-2640","image":"1f9b8-1f3fe-200d-2640-fe0f.png","sheet_x":43,"sheet_y":22,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9B8-1F3FF-200D-2640-FE0F","non_qualified":"1F9B8-1F3FF-200D-2640","image":"1f9b8-1f3ff-200d-2640-fe0f.png","sheet_x":43,"sheet_y":23,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Superhero","b":"1F9B8-200D-2640-FE0F","c":"1F9B8-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[43,18],"o":11},"hammer":{"a":"Hammer","b":"1F528","d":true,"e":true,"f":true,"h":true,"j":["tools","build","create"],"k":[28,11],"o":2},"star2":{"a":"Glowing Star","b":"1F31F","d":true,"e":true,"f":true,"h":true,"j":["night","sparkle","awesome","good","magic"],"k":[5,50],"o":2},"flag-nr":{"a":"Nauru Flag","b":"1F1F3-1F1F7","d":true,"e":true,"f":true,"h":true,"k":[3,34],"o":2},"axe":{"a":"Axe","b":"1FA93","d":true,"e":true,"f":true,"h":true,"k":[52,7],"o":12},"u55b6":{"a":"Squared Cjk Unified Ideograph-55b6","b":"1F23A","d":true,"e":true,"f":true,"h":true,"j":["japanese","opening hours","orange-square"],"k":[5,16],"o":2},"supervillain":{"skin_variations":{"1F3FB":{"unified":"1F9B9-1F3FB","non_qualified":null,"image":"1f9b9-1f3fb.png","sheet_x":43,"sheet_y":49,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9B9-1F3FC","non_qualified":null,"image":"1f9b9-1f3fc.png","sheet_x":43,"sheet_y":50,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9B9-1F3FD","non_qualified":null,"image":"1f9b9-1f3fd.png","sheet_x":43,"sheet_y":51,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9B9-1F3FE","non_qualified":null,"image":"1f9b9-1f3fe.png","sheet_x":43,"sheet_y":52,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9B9-1F3FF","non_qualified":null,"image":"1f9b9-1f3ff.png","sheet_x":43,"sheet_y":53,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Supervillain","b":"1F9B9","d":true,"e":true,"f":true,"h":true,"k":[43,48],"o":11},"stars":{"a":"Shooting Star","b":"1F320","d":true,"e":true,"f":true,"h":true,"j":["night","photo"],"k":[5,51],"o":2},"u6e80":{"a":"Squared Cjk Unified Ideograph-6e80","b":"1F235","d":true,"e":true,"f":true,"h":true,"j":["full","chinese","japanese","red-square","kanji"],"k":[5,11],"o":2},"flag-nu":{"a":"Niue Flag","b":"1F1F3-1F1FA","d":true,"e":true,"f":true,"h":true,"k":[3,35],"o":2},"pick":{"a":"Pick","b":"26CF-FE0F","c":"26CF","d":true,"e":true,"f":true,"h":true,"j":["tools","dig"],"k":[54,5],"o":2},"male_supervillain":{"skin_variations":{"1F3FB":{"unified":"1F9B9-1F3FB-200D-2642-FE0F","non_qualified":"1F9B9-1F3FB-200D-2642","image":"1f9b9-1f3fb-200d-2642-fe0f.png","sheet_x":43,"sheet_y":43,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9B9-1F3FC-200D-2642-FE0F","non_qualified":"1F9B9-1F3FC-200D-2642","image":"1f9b9-1f3fc-200d-2642-fe0f.png","sheet_x":43,"sheet_y":44,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9B9-1F3FD-200D-2642-FE0F","non_qualified":"1F9B9-1F3FD-200D-2642","image":"1f9b9-1f3fd-200d-2642-fe0f.png","sheet_x":43,"sheet_y":45,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9B9-1F3FE-200D-2642-FE0F","non_qualified":"1F9B9-1F3FE-200D-2642","image":"1f9b9-1f3fe-200d-2642-fe0f.png","sheet_x":43,"sheet_y":46,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9B9-1F3FF-200D-2642-FE0F","non_qualified":"1F9B9-1F3FF-200D-2642","image":"1f9b9-1f3ff-200d-2642-fe0f.png","sheet_x":43,"sheet_y":47,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Supervillain","b":"1F9B9-200D-2642-FE0F","c":"1F9B9-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[43,42],"o":11},"female_supervillain":{"skin_variations":{"1F3FB":{"unified":"1F9B9-1F3FB-200D-2640-FE0F","non_qualified":"1F9B9-1F3FB-200D-2640","image":"1f9b9-1f3fb-200d-2640-fe0f.png","sheet_x":43,"sheet_y":37,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9B9-1F3FC-200D-2640-FE0F","non_qualified":"1F9B9-1F3FC-200D-2640","image":"1f9b9-1f3fc-200d-2640-fe0f.png","sheet_x":43,"sheet_y":38,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9B9-1F3FD-200D-2640-FE0F","non_qualified":"1F9B9-1F3FD-200D-2640","image":"1f9b9-1f3fd-200d-2640-fe0f.png","sheet_x":43,"sheet_y":39,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9B9-1F3FE-200D-2640-FE0F","non_qualified":"1F9B9-1F3FE-200D-2640","image":"1f9b9-1f3fe-200d-2640-fe0f.png","sheet_x":43,"sheet_y":40,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9B9-1F3FF-200D-2640-FE0F","non_qualified":"1F9B9-1F3FF-200D-2640","image":"1f9b9-1f3ff-200d-2640-fe0f.png","sheet_x":43,"sheet_y":41,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Supervillain","b":"1F9B9-200D-2640-FE0F","c":"1F9B9-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[43,36],"o":11},"hammer_and_pick":{"a":"Hammer and Pick","b":"2692-FE0F","c":"2692","d":true,"e":true,"f":true,"h":true,"j":["tools","build","create"],"k":[53,41],"o":2},"milky_way":{"a":"Milky Way","b":"1F30C","d":true,"e":true,"f":true,"h":true,"j":["photo","space","stars"],"k":[5,31],"o":2},"red_circle":{"a":"Large Red Circle","b":"1F534","d":true,"e":true,"f":true,"h":true,"j":["shape","error","danger"],"k":[28,23],"o":2},"flag-nz":{"a":"New Zealand Flag","b":"1F1F3-1F1FF","d":true,"e":true,"f":true,"h":true,"k":[3,36],"o":2},"large_orange_circle":{"a":"Large Orange Circle","b":"1F7E0","d":true,"e":true,"f":true,"h":true,"k":[37,3],"o":12},"hammer_and_wrench":{"a":"Hammer and Wrench","b":"1F6E0-FE0F","c":"1F6E0","d":true,"e":true,"f":true,"h":true,"j":["tools","build","create"],"k":[36,42],"o":2},"flag-om":{"a":"Oman Flag","b":"1F1F4-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[3,37],"o":2},"cloud":{"a":"Cloud","b":"2601-FE0F","c":"2601","d":true,"e":true,"f":true,"h":true,"j":["weather","sky"],"k":[52,50],"o":2},"mage":{"skin_variations":{"1F3FB":{"unified":"1F9D9-1F3FB","non_qualified":null,"image":"1f9d9-1f3fb.png","sheet_x":49,"sheet_y":50,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D9-1F3FB-200D-2640-FE0F"},"1F3FC":{"unified":"1F9D9-1F3FC","non_qualified":null,"image":"1f9d9-1f3fc.png","sheet_x":49,"sheet_y":51,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D9-1F3FC-200D-2640-FE0F"},"1F3FD":{"unified":"1F9D9-1F3FD","non_qualified":null,"image":"1f9d9-1f3fd.png","sheet_x":49,"sheet_y":52,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D9-1F3FD-200D-2640-FE0F"},"1F3FE":{"unified":"1F9D9-1F3FE","non_qualified":null,"image":"1f9d9-1f3fe.png","sheet_x":49,"sheet_y":53,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D9-1F3FE-200D-2640-FE0F"},"1F3FF":{"unified":"1F9D9-1F3FF","non_qualified":null,"image":"1f9d9-1f3ff.png","sheet_x":49,"sheet_y":54,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D9-1F3FF-200D-2640-FE0F"}},"obsoleted_by":"1F9D9-200D-2640-FE0F","a":"Mage","b":"1F9D9","d":true,"e":true,"f":true,"h":true,"k":[49,49],"o":5},"dagger_knife":{"a":"Dagger Knife","b":"1F5E1-FE0F","c":"1F5E1","d":true,"e":true,"f":true,"h":true,"k":[30,24],"o":2},"partly_sunny":{"a":"Sun Behind Cloud","b":"26C5","d":true,"e":true,"f":true,"h":true,"j":["weather","nature","cloudy","morning","fall","spring"],"k":[54,2],"o":2},"large_yellow_circle":{"a":"Large Yellow Circle","b":"1F7E1","d":true,"e":true,"f":true,"h":true,"k":[37,4],"o":12},"male_mage":{"skin_variations":{"1F3FB":{"unified":"1F9D9-1F3FB-200D-2642-FE0F","non_qualified":"1F9D9-1F3FB-200D-2642","image":"1f9d9-1f3fb-200d-2642-fe0f.png","sheet_x":49,"sheet_y":44,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9D9-1F3FC-200D-2642-FE0F","non_qualified":"1F9D9-1F3FC-200D-2642","image":"1f9d9-1f3fc-200d-2642-fe0f.png","sheet_x":49,"sheet_y":45,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9D9-1F3FD-200D-2642-FE0F","non_qualified":"1F9D9-1F3FD-200D-2642","image":"1f9d9-1f3fd-200d-2642-fe0f.png","sheet_x":49,"sheet_y":46,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9D9-1F3FE-200D-2642-FE0F","non_qualified":"1F9D9-1F3FE-200D-2642","image":"1f9d9-1f3fe-200d-2642-fe0f.png","sheet_x":49,"sheet_y":47,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9D9-1F3FF-200D-2642-FE0F","non_qualified":"1F9D9-1F3FF-200D-2642","image":"1f9d9-1f3ff-200d-2642-fe0f.png","sheet_x":49,"sheet_y":48,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Mage","b":"1F9D9-200D-2642-FE0F","c":"1F9D9-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[49,43],"o":5},"flag-pa":{"a":"Panama Flag","b":"1F1F5-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[3,38],"o":2},"thunder_cloud_and_rain":{"a":"Thunder Cloud and Rain","b":"26C8-FE0F","c":"26C8","d":true,"e":true,"f":true,"h":true,"k":[54,3],"o":2},"large_green_circle":{"a":"Large Green Circle","b":"1F7E2","d":true,"e":true,"f":true,"h":true,"k":[37,5],"o":12},"female_mage":{"skin_variations":{"1F3FB":{"unified":"1F9D9-1F3FB-200D-2640-FE0F","non_qualified":"1F9D9-1F3FB-200D-2640","image":"1f9d9-1f3fb-200d-2640-fe0f.png","sheet_x":49,"sheet_y":38,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D9-1F3FB"},"1F3FC":{"unified":"1F9D9-1F3FC-200D-2640-FE0F","non_qualified":"1F9D9-1F3FC-200D-2640","image":"1f9d9-1f3fc-200d-2640-fe0f.png","sheet_x":49,"sheet_y":39,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D9-1F3FC"},"1F3FD":{"unified":"1F9D9-1F3FD-200D-2640-FE0F","non_qualified":"1F9D9-1F3FD-200D-2640","image":"1f9d9-1f3fd-200d-2640-fe0f.png","sheet_x":49,"sheet_y":40,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D9-1F3FD"},"1F3FE":{"unified":"1F9D9-1F3FE-200D-2640-FE0F","non_qualified":"1F9D9-1F3FE-200D-2640","image":"1f9d9-1f3fe-200d-2640-fe0f.png","sheet_x":49,"sheet_y":41,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D9-1F3FE"},"1F3FF":{"unified":"1F9D9-1F3FF-200D-2640-FE0F","non_qualified":"1F9D9-1F3FF-200D-2640","image":"1f9d9-1f3ff-200d-2640-fe0f.png","sheet_x":49,"sheet_y":42,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D9-1F3FF"}},"obsoletes":"1F9D9","a":"Female Mage","b":"1F9D9-200D-2640-FE0F","c":"1F9D9-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[49,37],"o":5},"crossed_swords":{"a":"Crossed Swords","b":"2694-FE0F","c":"2694","d":true,"e":true,"f":true,"h":true,"j":["weapon"],"k":[53,43],"o":2},"flag-pe":{"a":"Peru Flag","b":"1F1F5-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[3,39],"o":2},"gun":{"a":"Pistol","b":"1F52B","d":true,"e":true,"f":true,"h":true,"j":["violence","weapon","pistol","revolver"],"k":[28,14],"o":2},"mostly_sunny":{"a":"Mostly Sunny","b":"1F324-FE0F","c":"1F324","d":true,"e":true,"f":true,"h":true,"k":[5,53],"n":["sun_small_cloud"],"o":2},"fairy":{"skin_variations":{"1F3FB":{"unified":"1F9DA-1F3FB","non_qualified":null,"image":"1f9da-1f3fb.png","sheet_x":50,"sheet_y":11,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false,"obsoleted_by":"1F9DA-1F3FB-200D-2640-FE0F"},"1F3FC":{"unified":"1F9DA-1F3FC","non_qualified":null,"image":"1f9da-1f3fc.png","sheet_x":50,"sheet_y":12,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false,"obsoleted_by":"1F9DA-1F3FC-200D-2640-FE0F"},"1F3FD":{"unified":"1F9DA-1F3FD","non_qualified":null,"image":"1f9da-1f3fd.png","sheet_x":50,"sheet_y":13,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false,"obsoleted_by":"1F9DA-1F3FD-200D-2640-FE0F"},"1F3FE":{"unified":"1F9DA-1F3FE","non_qualified":null,"image":"1f9da-1f3fe.png","sheet_x":50,"sheet_y":14,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false,"obsoleted_by":"1F9DA-1F3FE-200D-2640-FE0F"},"1F3FF":{"unified":"1F9DA-1F3FF","non_qualified":null,"image":"1f9da-1f3ff.png","sheet_x":50,"sheet_y":15,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false,"obsoleted_by":"1F9DA-1F3FF-200D-2640-FE0F"}},"obsoleted_by":"1F9DA-200D-2640-FE0F","a":"Fairy","b":"1F9DA","d":true,"e":true,"f":true,"h":true,"k":[50,10],"o":5},"flag-pf":{"a":"French Polynesia Flag","b":"1F1F5-1F1EB","d":true,"e":true,"f":true,"h":true,"k":[3,40],"o":2},"large_blue_circle":{"a":"Large Blue Circle","b":"1F535","d":true,"e":true,"f":true,"h":true,"j":["shape","icon","button"],"k":[28,24],"o":2},"large_purple_circle":{"a":"Large Purple Circle","b":"1F7E3","d":true,"e":true,"f":true,"h":true,"k":[37,6],"o":12},"bow_and_arrow":{"a":"Bow and Arrow","b":"1F3F9","d":true,"e":true,"f":true,"h":true,"j":["sports"],"k":[11,21],"o":2},"male_fairy":{"skin_variations":{"1F3FB":{"unified":"1F9DA-1F3FB-200D-2642-FE0F","non_qualified":"1F9DA-1F3FB-200D-2642","image":"1f9da-1f3fb-200d-2642-fe0f.png","sheet_x":50,"sheet_y":5,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F9DA-1F3FC-200D-2642-FE0F","non_qualified":"1F9DA-1F3FC-200D-2642","image":"1f9da-1f3fc-200d-2642-fe0f.png","sheet_x":50,"sheet_y":6,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F9DA-1F3FD-200D-2642-FE0F","non_qualified":"1F9DA-1F3FD-200D-2642","image":"1f9da-1f3fd-200d-2642-fe0f.png","sheet_x":50,"sheet_y":7,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F9DA-1F3FE-200D-2642-FE0F","non_qualified":"1F9DA-1F3FE-200D-2642","image":"1f9da-1f3fe-200d-2642-fe0f.png","sheet_x":50,"sheet_y":8,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F9DA-1F3FF-200D-2642-FE0F","non_qualified":"1F9DA-1F3FF-200D-2642","image":"1f9da-1f3ff-200d-2642-fe0f.png","sheet_x":50,"sheet_y":9,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"a":"Male Fairy","b":"1F9DA-200D-2642-FE0F","c":"1F9DA-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[50,4],"o":5},"barely_sunny":{"a":"Barely Sunny","b":"1F325-FE0F","c":"1F325","d":true,"e":true,"f":true,"h":true,"k":[5,54],"n":["sun_behind_cloud"],"o":2},"flag-pg":{"a":"Papua New Guinea Flag","b":"1F1F5-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[3,41],"o":2},"shield":{"a":"Shield","b":"1F6E1-FE0F","c":"1F6E1","d":true,"e":true,"f":true,"h":true,"j":["protection","security"],"k":[36,43],"o":2},"partly_sunny_rain":{"a":"Partly Sunny Rain","b":"1F326-FE0F","c":"1F326","d":true,"e":true,"f":true,"h":true,"k":[5,55],"n":["sun_behind_rain_cloud"],"o":2},"large_brown_circle":{"a":"Large Brown Circle","b":"1F7E4","d":true,"e":true,"f":true,"h":true,"k":[37,7],"o":12},"female_fairy":{"skin_variations":{"1F3FB":{"unified":"1F9DA-1F3FB-200D-2640-FE0F","non_qualified":"1F9DA-1F3FB-200D-2640","image":"1f9da-1f3fb-200d-2640-fe0f.png","sheet_x":49,"sheet_y":56,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false,"obsoletes":"1F9DA-1F3FB"},"1F3FC":{"unified":"1F9DA-1F3FC-200D-2640-FE0F","non_qualified":"1F9DA-1F3FC-200D-2640","image":"1f9da-1f3fc-200d-2640-fe0f.png","sheet_x":50,"sheet_y":0,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false,"obsoletes":"1F9DA-1F3FC"},"1F3FD":{"unified":"1F9DA-1F3FD-200D-2640-FE0F","non_qualified":"1F9DA-1F3FD-200D-2640","image":"1f9da-1f3fd-200d-2640-fe0f.png","sheet_x":50,"sheet_y":1,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false,"obsoletes":"1F9DA-1F3FD"},"1F3FE":{"unified":"1F9DA-1F3FE-200D-2640-FE0F","non_qualified":"1F9DA-1F3FE-200D-2640","image":"1f9da-1f3fe-200d-2640-fe0f.png","sheet_x":50,"sheet_y":2,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false,"obsoletes":"1F9DA-1F3FE"},"1F3FF":{"unified":"1F9DA-1F3FF-200D-2640-FE0F","non_qualified":"1F9DA-1F3FF-200D-2640","image":"1f9da-1f3ff-200d-2640-fe0f.png","sheet_x":50,"sheet_y":3,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false,"obsoletes":"1F9DA-1F3FF"}},"obsoletes":"1F9DA","a":"Female Fairy","b":"1F9DA-200D-2640-FE0F","c":"1F9DA-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[49,55],"o":5},"flag-ph":{"a":"Philippines Flag","b":"1F1F5-1F1ED","d":true,"e":true,"f":true,"h":true,"k":[3,42],"o":2},"flag-pk":{"a":"Pakistan Flag","b":"1F1F5-1F1F0","d":true,"e":true,"f":true,"h":true,"k":[3,43],"o":2},"black_circle":{"a":"Medium Black Circle","b":"26AB","d":true,"e":true,"f":true,"h":true,"j":["shape","button","round"],"k":[53,53],"o":2},"wrench":{"a":"Wrench","b":"1F527","d":true,"e":true,"f":true,"h":true,"j":["tools","diy","ikea","fix","maintainer"],"k":[28,10],"o":2},"vampire":{"skin_variations":{"1F3FB":{"unified":"1F9DB-1F3FB","non_qualified":null,"image":"1f9db-1f3fb.png","sheet_x":50,"sheet_y":29,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DB-1F3FB-200D-2640-FE0F"},"1F3FC":{"unified":"1F9DB-1F3FC","non_qualified":null,"image":"1f9db-1f3fc.png","sheet_x":50,"sheet_y":30,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DB-1F3FC-200D-2640-FE0F"},"1F3FD":{"unified":"1F9DB-1F3FD","non_qualified":null,"image":"1f9db-1f3fd.png","sheet_x":50,"sheet_y":31,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DB-1F3FD-200D-2640-FE0F"},"1F3FE":{"unified":"1F9DB-1F3FE","non_qualified":null,"image":"1f9db-1f3fe.png","sheet_x":50,"sheet_y":32,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DB-1F3FE-200D-2640-FE0F"},"1F3FF":{"unified":"1F9DB-1F3FF","non_qualified":null,"image":"1f9db-1f3ff.png","sheet_x":50,"sheet_y":33,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DB-1F3FF-200D-2640-FE0F"}},"obsoleted_by":"1F9DB-200D-2640-FE0F","a":"Vampire","b":"1F9DB","d":true,"e":true,"f":true,"h":true,"k":[50,28],"o":5},"rain_cloud":{"a":"Rain Cloud","b":"1F327-FE0F","c":"1F327","d":true,"e":true,"f":true,"h":true,"k":[5,56],"o":2},"snow_cloud":{"a":"Snow Cloud","b":"1F328-FE0F","c":"1F328","d":true,"e":true,"f":true,"h":true,"k":[6,0],"o":2},"flag-pl":{"a":"Poland Flag","b":"1F1F5-1F1F1","d":true,"e":true,"f":true,"h":true,"k":[3,44],"o":2},"male_vampire":{"skin_variations":{"1F3FB":{"unified":"1F9DB-1F3FB-200D-2642-FE0F","non_qualified":"1F9DB-1F3FB-200D-2642","image":"1f9db-1f3fb-200d-2642-fe0f.png","sheet_x":50,"sheet_y":23,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9DB-1F3FC-200D-2642-FE0F","non_qualified":"1F9DB-1F3FC-200D-2642","image":"1f9db-1f3fc-200d-2642-fe0f.png","sheet_x":50,"sheet_y":24,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9DB-1F3FD-200D-2642-FE0F","non_qualified":"1F9DB-1F3FD-200D-2642","image":"1f9db-1f3fd-200d-2642-fe0f.png","sheet_x":50,"sheet_y":25,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9DB-1F3FE-200D-2642-FE0F","non_qualified":"1F9DB-1F3FE-200D-2642","image":"1f9db-1f3fe-200d-2642-fe0f.png","sheet_x":50,"sheet_y":26,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9DB-1F3FF-200D-2642-FE0F","non_qualified":"1F9DB-1F3FF-200D-2642","image":"1f9db-1f3ff-200d-2642-fe0f.png","sheet_x":50,"sheet_y":27,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Vampire","b":"1F9DB-200D-2642-FE0F","c":"1F9DB-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[50,22],"o":5},"nut_and_bolt":{"a":"Nut and Bolt","b":"1F529","d":true,"e":true,"f":true,"h":true,"j":["handy","tools","fix"],"k":[28,12],"o":2},"white_circle":{"a":"Medium White Circle","b":"26AA","d":true,"e":true,"f":true,"h":true,"j":["shape","round"],"k":[53,52],"o":2},"female_vampire":{"skin_variations":{"1F3FB":{"unified":"1F9DB-1F3FB-200D-2640-FE0F","non_qualified":"1F9DB-1F3FB-200D-2640","image":"1f9db-1f3fb-200d-2640-fe0f.png","sheet_x":50,"sheet_y":17,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DB-1F3FB"},"1F3FC":{"unified":"1F9DB-1F3FC-200D-2640-FE0F","non_qualified":"1F9DB-1F3FC-200D-2640","image":"1f9db-1f3fc-200d-2640-fe0f.png","sheet_x":50,"sheet_y":18,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DB-1F3FC"},"1F3FD":{"unified":"1F9DB-1F3FD-200D-2640-FE0F","non_qualified":"1F9DB-1F3FD-200D-2640","image":"1f9db-1f3fd-200d-2640-fe0f.png","sheet_x":50,"sheet_y":19,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DB-1F3FD"},"1F3FE":{"unified":"1F9DB-1F3FE-200D-2640-FE0F","non_qualified":"1F9DB-1F3FE-200D-2640","image":"1f9db-1f3fe-200d-2640-fe0f.png","sheet_x":50,"sheet_y":20,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DB-1F3FE"},"1F3FF":{"unified":"1F9DB-1F3FF-200D-2640-FE0F","non_qualified":"1F9DB-1F3FF-200D-2640","image":"1f9db-1f3ff-200d-2640-fe0f.png","sheet_x":50,"sheet_y":21,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DB-1F3FF"}},"obsoletes":"1F9DB","a":"Female Vampire","b":"1F9DB-200D-2640-FE0F","c":"1F9DB-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[50,16],"o":5},"flag-pm":{"a":"St. Pierre & Miquelon Flag","b":"1F1F5-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[3,45],"o":2},"large_red_square":{"a":"Large Red Square","b":"1F7E5","d":true,"e":true,"f":true,"h":true,"k":[37,8],"o":12},"lightning":{"a":"Lightning","b":"1F329-FE0F","c":"1F329","d":true,"e":true,"f":true,"h":true,"k":[6,1],"n":["lightning_cloud"],"o":2},"gear":{"a":"Gear","b":"2699-FE0F","c":"2699","d":true,"e":true,"f":true,"h":true,"j":["cog"],"k":[53,47],"o":2},"merperson":{"skin_variations":{"1F3FB":{"unified":"1F9DC-1F3FB","non_qualified":null,"image":"1f9dc-1f3fb.png","sheet_x":50,"sheet_y":47,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DC-1F3FB-200D-2642-FE0F"},"1F3FC":{"unified":"1F9DC-1F3FC","non_qualified":null,"image":"1f9dc-1f3fc.png","sheet_x":50,"sheet_y":48,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DC-1F3FC-200D-2642-FE0F"},"1F3FD":{"unified":"1F9DC-1F3FD","non_qualified":null,"image":"1f9dc-1f3fd.png","sheet_x":50,"sheet_y":49,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DC-1F3FD-200D-2642-FE0F"},"1F3FE":{"unified":"1F9DC-1F3FE","non_qualified":null,"image":"1f9dc-1f3fe.png","sheet_x":50,"sheet_y":50,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DC-1F3FE-200D-2642-FE0F"},"1F3FF":{"unified":"1F9DC-1F3FF","non_qualified":null,"image":"1f9dc-1f3ff.png","sheet_x":50,"sheet_y":51,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DC-1F3FF-200D-2642-FE0F"}},"obsoleted_by":"1F9DC-200D-2642-FE0F","a":"Merperson","b":"1F9DC","d":true,"e":true,"f":true,"h":true,"k":[50,46],"o":5},"tornado":{"a":"Tornado","b":"1F32A-FE0F","c":"1F32A","d":true,"e":true,"f":true,"h":true,"j":["weather","cyclone","twister"],"k":[6,2],"n":["tornado_cloud"],"o":2},"large_orange_square":{"a":"Large Orange Square","b":"1F7E7","d":true,"e":true,"f":true,"h":true,"k":[37,10],"o":12},"flag-pn":{"a":"Pitcairn Islands Flag","b":"1F1F5-1F1F3","d":true,"e":true,"f":true,"h":true,"k":[3,46],"o":2},"compression":{"a":"Compression","b":"1F5DC-FE0F","c":"1F5DC","d":true,"e":true,"f":true,"h":true,"k":[30,21],"o":2},"merman":{"skin_variations":{"1F3FB":{"unified":"1F9DC-1F3FB-200D-2642-FE0F","non_qualified":"1F9DC-1F3FB-200D-2642","image":"1f9dc-1f3fb-200d-2642-fe0f.png","sheet_x":50,"sheet_y":41,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DC-1F3FB"},"1F3FC":{"unified":"1F9DC-1F3FC-200D-2642-FE0F","non_qualified":"1F9DC-1F3FC-200D-2642","image":"1f9dc-1f3fc-200d-2642-fe0f.png","sheet_x":50,"sheet_y":42,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DC-1F3FC"},"1F3FD":{"unified":"1F9DC-1F3FD-200D-2642-FE0F","non_qualified":"1F9DC-1F3FD-200D-2642","image":"1f9dc-1f3fd-200d-2642-fe0f.png","sheet_x":50,"sheet_y":43,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DC-1F3FD"},"1F3FE":{"unified":"1F9DC-1F3FE-200D-2642-FE0F","non_qualified":"1F9DC-1F3FE-200D-2642","image":"1f9dc-1f3fe-200d-2642-fe0f.png","sheet_x":50,"sheet_y":44,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DC-1F3FE"},"1F3FF":{"unified":"1F9DC-1F3FF-200D-2642-FE0F","non_qualified":"1F9DC-1F3FF-200D-2642","image":"1f9dc-1f3ff-200d-2642-fe0f.png","sheet_x":50,"sheet_y":45,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DC-1F3FF"}},"obsoletes":"1F9DC","a":"Merman","b":"1F9DC-200D-2642-FE0F","c":"1F9DC-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[50,40],"o":5},"large_yellow_square":{"a":"Large Yellow Square","b":"1F7E8","d":true,"e":true,"f":true,"h":true,"k":[37,11],"o":12},"fog":{"a":"Fog","b":"1F32B-FE0F","c":"1F32B","d":true,"e":true,"f":true,"h":true,"j":["weather"],"k":[6,3],"o":2},"scales":{"a":"Scales","b":"2696-FE0F","c":"2696","d":true,"e":true,"f":true,"h":true,"k":[53,45],"o":2},"flag-pr":{"a":"Puerto Rico Flag","b":"1F1F5-1F1F7","d":true,"e":true,"f":true,"h":true,"k":[3,47],"o":2},"wind_blowing_face":{"a":"Wind Blowing Face","b":"1F32C-FE0F","c":"1F32C","d":true,"e":true,"f":true,"h":true,"k":[6,4],"o":2},"flag-ps":{"a":"Palestinian Territories Flag","b":"1F1F5-1F1F8","d":true,"e":true,"f":true,"h":true,"k":[3,48],"o":2},"mermaid":{"skin_variations":{"1F3FB":{"unified":"1F9DC-1F3FB-200D-2640-FE0F","non_qualified":"1F9DC-1F3FB-200D-2640","image":"1f9dc-1f3fb-200d-2640-fe0f.png","sheet_x":50,"sheet_y":35,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9DC-1F3FC-200D-2640-FE0F","non_qualified":"1F9DC-1F3FC-200D-2640","image":"1f9dc-1f3fc-200d-2640-fe0f.png","sheet_x":50,"sheet_y":36,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9DC-1F3FD-200D-2640-FE0F","non_qualified":"1F9DC-1F3FD-200D-2640","image":"1f9dc-1f3fd-200d-2640-fe0f.png","sheet_x":50,"sheet_y":37,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9DC-1F3FE-200D-2640-FE0F","non_qualified":"1F9DC-1F3FE-200D-2640","image":"1f9dc-1f3fe-200d-2640-fe0f.png","sheet_x":50,"sheet_y":38,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9DC-1F3FF-200D-2640-FE0F","non_qualified":"1F9DC-1F3FF-200D-2640","image":"1f9dc-1f3ff-200d-2640-fe0f.png","sheet_x":50,"sheet_y":39,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Mermaid","b":"1F9DC-200D-2640-FE0F","c":"1F9DC-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[50,34],"o":5},"probing_cane":{"a":"Probing Cane","b":"1F9AF","d":true,"e":true,"f":true,"h":true,"k":[43,3],"o":12},"large_green_square":{"a":"Large Green Square","b":"1F7E9","d":true,"e":true,"f":true,"h":true,"k":[37,12],"o":12},"flag-pt":{"a":"Portugal Flag","b":"1F1F5-1F1F9","d":true,"e":true,"f":true,"h":true,"k":[3,49],"o":2},"link":{"a":"Link Symbol","b":"1F517","d":true,"e":true,"f":true,"h":true,"j":["rings","url"],"k":[27,51],"o":2},"large_blue_square":{"a":"Large Blue Square","b":"1F7E6","d":true,"e":true,"f":true,"h":true,"k":[37,9],"o":12},"elf":{"skin_variations":{"1F3FB":{"unified":"1F9DD-1F3FB","non_qualified":null,"image":"1f9dd-1f3fb.png","sheet_x":51,"sheet_y":8,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DD-1F3FB-200D-2642-FE0F"},"1F3FC":{"unified":"1F9DD-1F3FC","non_qualified":null,"image":"1f9dd-1f3fc.png","sheet_x":51,"sheet_y":9,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DD-1F3FC-200D-2642-FE0F"},"1F3FD":{"unified":"1F9DD-1F3FD","non_qualified":null,"image":"1f9dd-1f3fd.png","sheet_x":51,"sheet_y":10,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DD-1F3FD-200D-2642-FE0F"},"1F3FE":{"unified":"1F9DD-1F3FE","non_qualified":null,"image":"1f9dd-1f3fe.png","sheet_x":51,"sheet_y":11,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DD-1F3FE-200D-2642-FE0F"},"1F3FF":{"unified":"1F9DD-1F3FF","non_qualified":null,"image":"1f9dd-1f3ff.png","sheet_x":51,"sheet_y":12,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DD-1F3FF-200D-2642-FE0F"}},"obsoleted_by":"1F9DD-200D-2642-FE0F","a":"Elf","b":"1F9DD","d":true,"e":true,"f":true,"h":true,"k":[51,7],"o":5},"cyclone":{"a":"Cyclone","b":"1F300","d":true,"e":true,"f":true,"h":true,"j":["weather","swirl","blue","cloud","vortex","spiral","whirlpool","spin","tornado","hurricane","typhoon"],"k":[5,19],"o":2},"rainbow":{"a":"Rainbow","b":"1F308","d":true,"e":true,"f":true,"h":true,"j":["nature","happy","unicorn_face","photo","sky","spring"],"k":[5,27],"o":2},"male_elf":{"skin_variations":{"1F3FB":{"unified":"1F9DD-1F3FB-200D-2642-FE0F","non_qualified":"1F9DD-1F3FB-200D-2642","image":"1f9dd-1f3fb-200d-2642-fe0f.png","sheet_x":51,"sheet_y":2,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DD-1F3FB"},"1F3FC":{"unified":"1F9DD-1F3FC-200D-2642-FE0F","non_qualified":"1F9DD-1F3FC-200D-2642","image":"1f9dd-1f3fc-200d-2642-fe0f.png","sheet_x":51,"sheet_y":3,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DD-1F3FC"},"1F3FD":{"unified":"1F9DD-1F3FD-200D-2642-FE0F","non_qualified":"1F9DD-1F3FD-200D-2642","image":"1f9dd-1f3fd-200d-2642-fe0f.png","sheet_x":51,"sheet_y":4,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DD-1F3FD"},"1F3FE":{"unified":"1F9DD-1F3FE-200D-2642-FE0F","non_qualified":"1F9DD-1F3FE-200D-2642","image":"1f9dd-1f3fe-200d-2642-fe0f.png","sheet_x":51,"sheet_y":5,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DD-1F3FE"},"1F3FF":{"unified":"1F9DD-1F3FF-200D-2642-FE0F","non_qualified":"1F9DD-1F3FF-200D-2642","image":"1f9dd-1f3ff-200d-2642-fe0f.png","sheet_x":51,"sheet_y":6,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DD-1F3FF"}},"obsoletes":"1F9DD","a":"Male Elf","b":"1F9DD-200D-2642-FE0F","c":"1F9DD-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[51,1],"o":5},"flag-pw":{"a":"Palau Flag","b":"1F1F5-1F1FC","d":true,"e":true,"f":true,"h":true,"k":[3,50],"o":2},"chains":{"a":"Chains","b":"26D3-FE0F","c":"26D3","d":true,"e":true,"f":true,"h":true,"j":["lock","arrest"],"k":[54,7],"o":2},"large_purple_square":{"a":"Large Purple Square","b":"1F7EA","d":true,"e":true,"f":true,"h":true,"k":[37,13],"o":12},"female_elf":{"skin_variations":{"1F3FB":{"unified":"1F9DD-1F3FB-200D-2640-FE0F","non_qualified":"1F9DD-1F3FB-200D-2640","image":"1f9dd-1f3fb-200d-2640-fe0f.png","sheet_x":50,"sheet_y":53,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9DD-1F3FC-200D-2640-FE0F","non_qualified":"1F9DD-1F3FC-200D-2640","image":"1f9dd-1f3fc-200d-2640-fe0f.png","sheet_x":50,"sheet_y":54,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9DD-1F3FD-200D-2640-FE0F","non_qualified":"1F9DD-1F3FD-200D-2640","image":"1f9dd-1f3fd-200d-2640-fe0f.png","sheet_x":50,"sheet_y":55,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9DD-1F3FE-200D-2640-FE0F","non_qualified":"1F9DD-1F3FE-200D-2640","image":"1f9dd-1f3fe-200d-2640-fe0f.png","sheet_x":50,"sheet_y":56,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9DD-1F3FF-200D-2640-FE0F","non_qualified":"1F9DD-1F3FF-200D-2640","image":"1f9dd-1f3ff-200d-2640-fe0f.png","sheet_x":51,"sheet_y":0,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Elf","b":"1F9DD-200D-2640-FE0F","c":"1F9DD-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[50,52],"o":5},"flag-py":{"a":"Paraguay Flag","b":"1F1F5-1F1FE","d":true,"e":true,"f":true,"h":true,"k":[3,51],"o":2},"closed_umbrella":{"a":"Closed Umbrella","b":"1F302","d":true,"e":true,"f":true,"h":true,"j":["weather","rain","drizzle"],"k":[5,21],"o":2},"toolbox":{"a":"Toolbox","b":"1F9F0","d":true,"e":true,"f":true,"h":true,"k":[51,35],"o":11},"large_brown_square":{"a":"Large Brown Square","b":"1F7EB","d":true,"e":true,"f":true,"h":true,"k":[37,14],"o":12},"magnet":{"a":"Magnet","b":"1F9F2","d":true,"e":true,"f":true,"h":true,"k":[51,37],"o":11},"genie":{"obsoleted_by":"1F9DE-200D-2642-FE0F","a":"Genie","b":"1F9DE","d":true,"e":true,"f":true,"h":true,"k":[51,15],"o":5},"flag-qa":{"a":"Qatar Flag","b":"1F1F6-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[3,52],"o":2},"umbrella":{"a":"Umbrella","b":"2602-FE0F","c":"2602","d":true,"e":true,"f":true,"h":true,"j":["rainy","weather","spring"],"k":[52,51],"o":2},"black_large_square":{"a":"Black Large Square","b":"2B1B","d":true,"e":true,"f":true,"h":true,"j":["shape","icon","button"],"k":[55,40],"o":2},"male_genie":{"obsoletes":"1F9DE","a":"Male Genie","b":"1F9DE-200D-2642-FE0F","c":"1F9DE-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[51,14],"o":5},"umbrella_with_rain_drops":{"a":"Umbrella with Rain Drops","b":"2614","d":true,"e":true,"f":true,"h":true,"k":[52,56],"o":2},"flag-re":{"a":"Réunion Flag","b":"1F1F7-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[3,53],"o":2},"white_large_square":{"a":"White Large Square","b":"2B1C","d":true,"e":true,"f":true,"h":true,"j":["shape","icon","stone","button"],"k":[55,41],"o":2},"alembic":{"a":"Alembic","b":"2697-FE0F","c":"2697","d":true,"e":true,"f":true,"h":true,"j":["distilling","science","experiment","chemistry"],"k":[53,46],"o":2},"black_medium_square":{"a":"Black Medium Square","b":"25FC-FE0F","c":"25FC","d":true,"e":true,"f":true,"h":true,"j":["shape","button","icon"],"k":[52,46],"o":2},"test_tube":{"a":"Test Tube","b":"1F9EA","d":true,"e":true,"f":true,"h":true,"k":[51,29],"o":11},"flag-ro":{"a":"Romania Flag","b":"1F1F7-1F1F4","d":true,"e":true,"f":true,"h":true,"k":[3,54],"o":2},"female_genie":{"a":"Female Genie","b":"1F9DE-200D-2640-FE0F","c":"1F9DE-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[51,13],"o":5},"umbrella_on_ground":{"a":"Umbrella on Ground","b":"26F1-FE0F","c":"26F1","d":true,"e":true,"f":true,"h":true,"k":[54,12],"o":2},"zombie":{"obsoleted_by":"1F9DF-200D-2642-FE0F","a":"Zombie","b":"1F9DF","d":true,"e":true,"f":true,"h":true,"k":[51,18],"o":5},"zap":{"a":"High Voltage Sign","b":"26A1","d":true,"e":true,"f":true,"h":true,"j":["thunder","weather","lightning bolt","fast"],"k":[53,51],"o":2},"white_medium_square":{"a":"White Medium Square","b":"25FB-FE0F","c":"25FB","d":true,"e":true,"f":true,"h":true,"j":["shape","stone","icon"],"k":[52,45],"o":2},"flag-rs":{"a":"Serbia Flag","b":"1F1F7-1F1F8","d":true,"e":true,"f":true,"h":true,"k":[3,55],"o":2},"petri_dish":{"a":"Petri Dish","b":"1F9EB","d":true,"e":true,"f":true,"h":true,"k":[51,30],"o":11},"snowflake":{"a":"Snowflake","b":"2744-FE0F","c":"2744","d":true,"e":true,"f":true,"h":true,"j":["winter","season","cold","weather","christmas","xmas"],"k":[55,19],"o":2},"dna":{"a":"Dna Double Helix","b":"1F9EC","d":true,"e":true,"f":true,"h":true,"k":[51,31],"o":11},"male_zombie":{"obsoletes":"1F9DF","a":"Male Zombie","b":"1F9DF-200D-2642-FE0F","c":"1F9DF-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[51,17],"o":5},"black_medium_small_square":{"a":"Black Medium Small Square","b":"25FE","d":true,"e":true,"f":true,"h":true,"j":["icon","shape","button"],"k":[52,48],"o":2},"ru":{"a":"Russia Flag","b":"1F1F7-1F1FA","d":true,"e":true,"f":true,"h":true,"j":["russian","federation","flag","nation","country","banner"],"k":[3,56],"n":["flag-ru"],"o":2},"female_zombie":{"a":"Female Zombie","b":"1F9DF-200D-2640-FE0F","c":"1F9DF-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[51,16],"o":5},"flag-rw":{"a":"Rwanda Flag","b":"1F1F7-1F1FC","d":true,"e":true,"f":true,"h":true,"k":[4,0],"o":2},"snowman":{"a":"Snowman","b":"2603-FE0F","c":"2603","d":true,"e":true,"f":true,"h":true,"j":["winter","season","cold","weather","christmas","xmas","frozen","without_snow"],"k":[52,52],"o":2},"white_medium_small_square":{"a":"White Medium Small Square","b":"25FD","d":true,"e":true,"f":true,"h":true,"j":["shape","stone","icon","button"],"k":[52,47],"o":2},"microscope":{"a":"Microscope","b":"1F52C","d":true,"e":true,"f":true,"h":true,"j":["laboratory","experiment","zoomin","science","study"],"k":[28,15],"o":2},"snowman_without_snow":{"a":"Snowman Without Snow","b":"26C4","d":true,"e":true,"f":true,"h":true,"k":[54,1],"o":2},"telescope":{"a":"Telescope","b":"1F52D","d":true,"e":true,"f":true,"h":true,"j":["stars","space","zoom","science","astronomy"],"k":[28,16],"o":2},"massage":{"skin_variations":{"1F3FB":{"unified":"1F486-1F3FB","non_qualified":null,"image":"1f486-1f3fb.png","sheet_x":24,"sheet_y":52,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F486-1F3FC","non_qualified":null,"image":"1f486-1f3fc.png","sheet_x":24,"sheet_y":53,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F486-1F3FD","non_qualified":null,"image":"1f486-1f3fd.png","sheet_x":24,"sheet_y":54,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F486-1F3FE","non_qualified":null,"image":"1f486-1f3fe.png","sheet_x":24,"sheet_y":55,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F486-1F3FF","non_qualified":null,"image":"1f486-1f3ff.png","sheet_x":24,"sheet_y":56,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F486-200D-2640-FE0F","a":"Face Massage","b":"1F486","d":true,"e":true,"f":true,"h":false,"k":[24,51],"o":2},"black_small_square":{"a":"Black Small Square","b":"25AA-FE0F","c":"25AA","d":true,"e":true,"f":true,"h":true,"j":["shape","icon"],"k":[52,41],"o":2},"flag-sa":{"a":"Saudi Arabia Flag","b":"1F1F8-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[4,1],"o":2},"man-getting-massage":{"skin_variations":{"1F3FB":{"unified":"1F486-1F3FB-200D-2642-FE0F","non_qualified":"1F486-1F3FB-200D-2642","image":"1f486-1f3fb-200d-2642-fe0f.png","sheet_x":24,"sheet_y":46,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F486-1F3FC-200D-2642-FE0F","non_qualified":"1F486-1F3FC-200D-2642","image":"1f486-1f3fc-200d-2642-fe0f.png","sheet_x":24,"sheet_y":47,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F486-1F3FD-200D-2642-FE0F","non_qualified":"1F486-1F3FD-200D-2642","image":"1f486-1f3fd-200d-2642-fe0f.png","sheet_x":24,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F486-1F3FE-200D-2642-FE0F","non_qualified":"1F486-1F3FE-200D-2642","image":"1f486-1f3fe-200d-2642-fe0f.png","sheet_x":24,"sheet_y":49,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F486-1F3FF-200D-2642-FE0F","non_qualified":"1F486-1F3FF-200D-2642","image":"1f486-1f3ff-200d-2642-fe0f.png","sheet_x":24,"sheet_y":50,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Getting Massage","b":"1F486-200D-2642-FE0F","c":"1F486-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[24,45],"o":4},"comet":{"a":"Comet","b":"2604-FE0F","c":"2604","d":true,"e":true,"f":true,"h":true,"j":["space"],"k":[52,53],"o":2},"white_small_square":{"a":"White Small Square","b":"25AB-FE0F","c":"25AB","d":true,"e":true,"f":true,"h":true,"j":["shape","icon"],"k":[52,42],"o":2},"flag-sb":{"a":"Solomon Islands Flag","b":"1F1F8-1F1E7","d":true,"e":true,"f":true,"h":true,"k":[4,2],"o":2},"satellite_antenna":{"a":"Satellite Antenna","b":"1F4E1","d":true,"e":true,"f":true,"h":true,"k":[26,55],"o":2},"large_orange_diamond":{"a":"Large Orange Diamond","b":"1F536","d":true,"e":true,"f":true,"h":true,"j":["shape","jewel","gem"],"k":[28,25],"o":2},"woman-getting-massage":{"skin_variations":{"1F3FB":{"unified":"1F486-1F3FB-200D-2640-FE0F","non_qualified":"1F486-1F3FB-200D-2640","image":"1f486-1f3fb-200d-2640-fe0f.png","sheet_x":24,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F486-1F3FC-200D-2640-FE0F","non_qualified":"1F486-1F3FC-200D-2640","image":"1f486-1f3fc-200d-2640-fe0f.png","sheet_x":24,"sheet_y":41,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F486-1F3FD-200D-2640-FE0F","non_qualified":"1F486-1F3FD-200D-2640","image":"1f486-1f3fd-200d-2640-fe0f.png","sheet_x":24,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F486-1F3FE-200D-2640-FE0F","non_qualified":"1F486-1F3FE-200D-2640","image":"1f486-1f3fe-200d-2640-fe0f.png","sheet_x":24,"sheet_y":43,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F486-1F3FF-200D-2640-FE0F","non_qualified":"1F486-1F3FF-200D-2640","image":"1f486-1f3ff-200d-2640-fe0f.png","sheet_x":24,"sheet_y":44,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F486","a":"Woman Getting Massage","b":"1F486-200D-2640-FE0F","c":"1F486-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[24,39],"o":4},"fire":{"a":"Fire","b":"1F525","d":true,"e":true,"f":true,"h":true,"j":["hot","cook","flame"],"k":[28,8],"o":2},"syringe":{"a":"Syringe","b":"1F489","d":true,"e":true,"f":true,"h":true,"j":["health","hospital","drugs","blood","medicine","needle","doctor","nurse"],"k":[25,19],"o":2},"flag-sc":{"a":"Seychelles Flag","b":"1F1F8-1F1E8","d":true,"e":true,"f":true,"h":true,"k":[4,3],"o":2},"large_blue_diamond":{"a":"Large Blue Diamond","b":"1F537","d":true,"e":true,"f":true,"h":true,"j":["shape","jewel","gem"],"k":[28,26],"o":2},"flag-sd":{"a":"Sudan Flag","b":"1F1F8-1F1E9","d":true,"e":true,"f":true,"h":true,"k":[4,4],"o":2},"droplet":{"a":"Droplet","b":"1F4A7","d":true,"e":true,"f":true,"h":true,"j":["water","drip","faucet","spring"],"k":[25,49],"o":2},"drop_of_blood":{"a":"Drop of Blood","b":"1FA78","d":true,"e":true,"f":true,"h":true,"k":[51,55],"o":12},"haircut":{"skin_variations":{"1F3FB":{"unified":"1F487-1F3FB","non_qualified":null,"image":"1f487-1f3fb.png","sheet_x":25,"sheet_y":13,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F487-1F3FC","non_qualified":null,"image":"1f487-1f3fc.png","sheet_x":25,"sheet_y":14,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F487-1F3FD","non_qualified":null,"image":"1f487-1f3fd.png","sheet_x":25,"sheet_y":15,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F487-1F3FE","non_qualified":null,"image":"1f487-1f3fe.png","sheet_x":25,"sheet_y":16,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F487-1F3FF","non_qualified":null,"image":"1f487-1f3ff.png","sheet_x":25,"sheet_y":17,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F487-200D-2640-FE0F","a":"Haircut","b":"1F487","d":true,"e":true,"f":true,"h":false,"k":[25,12],"o":2},"ocean":{"a":"Water Wave","b":"1F30A","d":true,"e":true,"f":true,"h":true,"j":["sea","water","wave","nature","tsunami","disaster"],"k":[5,29],"o":2},"flag-se":{"a":"Sweden Flag","b":"1F1F8-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[4,5],"o":2},"man-getting-haircut":{"skin_variations":{"1F3FB":{"unified":"1F487-1F3FB-200D-2642-FE0F","non_qualified":"1F487-1F3FB-200D-2642","image":"1f487-1f3fb-200d-2642-fe0f.png","sheet_x":25,"sheet_y":7,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F487-1F3FC-200D-2642-FE0F","non_qualified":"1F487-1F3FC-200D-2642","image":"1f487-1f3fc-200d-2642-fe0f.png","sheet_x":25,"sheet_y":8,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F487-1F3FD-200D-2642-FE0F","non_qualified":"1F487-1F3FD-200D-2642","image":"1f487-1f3fd-200d-2642-fe0f.png","sheet_x":25,"sheet_y":9,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F487-1F3FE-200D-2642-FE0F","non_qualified":"1F487-1F3FE-200D-2642","image":"1f487-1f3fe-200d-2642-fe0f.png","sheet_x":25,"sheet_y":10,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F487-1F3FF-200D-2642-FE0F","non_qualified":"1F487-1F3FF-200D-2642","image":"1f487-1f3ff-200d-2642-fe0f.png","sheet_x":25,"sheet_y":11,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Getting Haircut","b":"1F487-200D-2642-FE0F","c":"1F487-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[25,6],"o":4},"small_orange_diamond":{"a":"Small Orange Diamond","b":"1F538","d":true,"e":true,"f":true,"h":true,"j":["shape","jewel","gem"],"k":[28,27],"o":2},"pill":{"a":"Pill","b":"1F48A","d":true,"e":true,"f":true,"h":true,"j":["health","medicine","doctor","pharmacy","drug"],"k":[25,20],"o":2},"woman-getting-haircut":{"skin_variations":{"1F3FB":{"unified":"1F487-1F3FB-200D-2640-FE0F","non_qualified":"1F487-1F3FB-200D-2640","image":"1f487-1f3fb-200d-2640-fe0f.png","sheet_x":25,"sheet_y":1,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F487-1F3FC-200D-2640-FE0F","non_qualified":"1F487-1F3FC-200D-2640","image":"1f487-1f3fc-200d-2640-fe0f.png","sheet_x":25,"sheet_y":2,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F487-1F3FD-200D-2640-FE0F","non_qualified":"1F487-1F3FD-200D-2640","image":"1f487-1f3fd-200d-2640-fe0f.png","sheet_x":25,"sheet_y":3,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F487-1F3FE-200D-2640-FE0F","non_qualified":"1F487-1F3FE-200D-2640","image":"1f487-1f3fe-200d-2640-fe0f.png","sheet_x":25,"sheet_y":4,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F487-1F3FF-200D-2640-FE0F","non_qualified":"1F487-1F3FF-200D-2640","image":"1f487-1f3ff-200d-2640-fe0f.png","sheet_x":25,"sheet_y":5,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F487","a":"Woman Getting Haircut","b":"1F487-200D-2640-FE0F","c":"1F487-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[25,0],"o":4},"small_blue_diamond":{"a":"Small Blue Diamond","b":"1F539","d":true,"e":true,"f":true,"h":true,"j":["shape","jewel","gem"],"k":[28,28],"o":2},"flag-sg":{"a":"Singapore Flag","b":"1F1F8-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[4,6],"o":2},"adhesive_bandage":{"a":"Adhesive Bandage","b":"1FA79","d":true,"e":true,"f":true,"h":true,"k":[51,56],"o":12},"walking":{"skin_variations":{"1F3FB":{"unified":"1F6B6-1F3FB","non_qualified":null,"image":"1f6b6-1f3fb.png","sheet_x":36,"sheet_y":3,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F6B6-1F3FC","non_qualified":null,"image":"1f6b6-1f3fc.png","sheet_x":36,"sheet_y":4,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F6B6-1F3FD","non_qualified":null,"image":"1f6b6-1f3fd.png","sheet_x":36,"sheet_y":5,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F6B6-1F3FE","non_qualified":null,"image":"1f6b6-1f3fe.png","sheet_x":36,"sheet_y":6,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F6B6-1F3FF","non_qualified":null,"image":"1f6b6-1f3ff.png","sheet_x":36,"sheet_y":7,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F6B6-200D-2642-FE0F","a":"Pedestrian","b":"1F6B6","d":true,"e":true,"f":true,"h":false,"k":[36,2],"o":2},"small_red_triangle":{"a":"Up-Pointing Red Triangle","b":"1F53A","d":true,"e":true,"f":true,"h":true,"j":["shape","direction","up","top"],"k":[28,29],"o":2},"flag-sh":{"a":"St. Helena Flag","b":"1F1F8-1F1ED","d":true,"e":true,"f":true,"h":true,"k":[4,7],"o":2},"stethoscope":{"a":"Stethoscope","b":"1FA7A","d":true,"e":true,"f":true,"h":true,"k":[52,0],"o":12},"man-walking":{"skin_variations":{"1F3FB":{"unified":"1F6B6-1F3FB-200D-2642-FE0F","non_qualified":"1F6B6-1F3FB-200D-2642","image":"1f6b6-1f3fb-200d-2642-fe0f.png","sheet_x":35,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F6B6-1F3FC-200D-2642-FE0F","non_qualified":"1F6B6-1F3FC-200D-2642","image":"1f6b6-1f3fc-200d-2642-fe0f.png","sheet_x":35,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F6B6-1F3FD-200D-2642-FE0F","non_qualified":"1F6B6-1F3FD-200D-2642","image":"1f6b6-1f3fd-200d-2642-fe0f.png","sheet_x":35,"sheet_y":56,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F6B6-1F3FE-200D-2642-FE0F","non_qualified":"1F6B6-1F3FE-200D-2642","image":"1f6b6-1f3fe-200d-2642-fe0f.png","sheet_x":36,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F6B6-1F3FF-200D-2642-FE0F","non_qualified":"1F6B6-1F3FF-200D-2642","image":"1f6b6-1f3ff-200d-2642-fe0f.png","sheet_x":36,"sheet_y":1,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F6B6","a":"Man Walking","b":"1F6B6-200D-2642-FE0F","c":"1F6B6-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[35,53],"o":4},"flag-si":{"a":"Slovenia Flag","b":"1F1F8-1F1EE","d":true,"e":true,"f":true,"h":true,"k":[4,8],"o":2},"door":{"a":"Door","b":"1F6AA","d":true,"e":true,"f":true,"h":true,"j":["house","entry","exit"],"k":[35,1],"o":2},"small_red_triangle_down":{"a":"Down-Pointing Red Triangle","b":"1F53B","d":true,"e":true,"f":true,"h":true,"j":["shape","direction","bottom"],"k":[28,30],"o":2},"flag-sj":{"a":"Svalbard & Jan Mayen Flag","b":"1F1F8-1F1EF","d":true,"e":true,"f":true,"h":true,"k":[4,9],"o":2},"diamond_shape_with_a_dot_inside":{"a":"Diamond Shape with a Dot Inside","b":"1F4A0","d":true,"e":true,"f":true,"h":true,"j":["jewel","blue","gem","crystal","fancy"],"k":[25,42],"o":2},"woman-walking":{"skin_variations":{"1F3FB":{"unified":"1F6B6-1F3FB-200D-2640-FE0F","non_qualified":"1F6B6-1F3FB-200D-2640","image":"1f6b6-1f3fb-200d-2640-fe0f.png","sheet_x":35,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F6B6-1F3FC-200D-2640-FE0F","non_qualified":"1F6B6-1F3FC-200D-2640","image":"1f6b6-1f3fc-200d-2640-fe0f.png","sheet_x":35,"sheet_y":49,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F6B6-1F3FD-200D-2640-FE0F","non_qualified":"1F6B6-1F3FD-200D-2640","image":"1f6b6-1f3fd-200d-2640-fe0f.png","sheet_x":35,"sheet_y":50,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F6B6-1F3FE-200D-2640-FE0F","non_qualified":"1F6B6-1F3FE-200D-2640","image":"1f6b6-1f3fe-200d-2640-fe0f.png","sheet_x":35,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F6B6-1F3FF-200D-2640-FE0F","non_qualified":"1F6B6-1F3FF-200D-2640","image":"1f6b6-1f3ff-200d-2640-fe0f.png","sheet_x":35,"sheet_y":52,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Walking","b":"1F6B6-200D-2640-FE0F","c":"1F6B6-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[35,47],"o":4},"bed":{"a":"Bed","b":"1F6CF-FE0F","c":"1F6CF","d":true,"e":true,"f":true,"h":true,"j":["sleep","rest"],"k":[36,37],"o":2},"radio_button":{"a":"Radio Button","b":"1F518","d":true,"e":true,"f":true,"h":true,"j":["input","old","music","circle"],"k":[27,52],"o":2},"flag-sk":{"a":"Slovakia Flag","b":"1F1F8-1F1F0","d":true,"e":true,"f":true,"h":true,"k":[4,10],"o":2},"standing_person":{"skin_variations":{"1F3FB":{"unified":"1F9CD-1F3FB","non_qualified":null,"image":"1f9cd-1f3fb.png","sheet_x":44,"sheet_y":32,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9CD-1F3FC","non_qualified":null,"image":"1f9cd-1f3fc.png","sheet_x":44,"sheet_y":33,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9CD-1F3FD","non_qualified":null,"image":"1f9cd-1f3fd.png","sheet_x":44,"sheet_y":34,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9CD-1F3FE","non_qualified":null,"image":"1f9cd-1f3fe.png","sheet_x":44,"sheet_y":35,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9CD-1F3FF","non_qualified":null,"image":"1f9cd-1f3ff.png","sheet_x":44,"sheet_y":36,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Standing Person","b":"1F9CD","d":true,"e":true,"f":true,"h":true,"k":[44,31],"o":12},"couch_and_lamp":{"a":"Couch and Lamp","b":"1F6CB-FE0F","c":"1F6CB","d":true,"e":true,"f":true,"h":true,"j":["read","chill"],"k":[36,28],"o":2},"man_standing":{"skin_variations":{"1F3FB":{"unified":"1F9CD-1F3FB-200D-2642-FE0F","non_qualified":"1F9CD-1F3FB-200D-2642","image":"1f9cd-1f3fb-200d-2642-fe0f.png","sheet_x":44,"sheet_y":26,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9CD-1F3FC-200D-2642-FE0F","non_qualified":"1F9CD-1F3FC-200D-2642","image":"1f9cd-1f3fc-200d-2642-fe0f.png","sheet_x":44,"sheet_y":27,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9CD-1F3FD-200D-2642-FE0F","non_qualified":"1F9CD-1F3FD-200D-2642","image":"1f9cd-1f3fd-200d-2642-fe0f.png","sheet_x":44,"sheet_y":28,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9CD-1F3FE-200D-2642-FE0F","non_qualified":"1F9CD-1F3FE-200D-2642","image":"1f9cd-1f3fe-200d-2642-fe0f.png","sheet_x":44,"sheet_y":29,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9CD-1F3FF-200D-2642-FE0F","non_qualified":"1F9CD-1F3FF-200D-2642","image":"1f9cd-1f3ff-200d-2642-fe0f.png","sheet_x":44,"sheet_y":30,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Standing","b":"1F9CD-200D-2642-FE0F","c":"1F9CD-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[44,25],"o":12},"white_square_button":{"a":"White Square Button","b":"1F533","d":true,"e":true,"f":true,"h":true,"j":["shape","input"],"k":[28,22],"o":2},"flag-sl":{"a":"Sierra Leone Flag","b":"1F1F8-1F1F1","d":true,"e":true,"f":true,"h":true,"k":[4,11],"o":2},"chair":{"a":"Chair","b":"1FA91","d":true,"e":true,"f":true,"h":true,"k":[52,5],"o":12},"toilet":{"a":"Toilet","b":"1F6BD","d":true,"e":true,"f":true,"h":true,"j":["restroom","wc","washroom","bathroom","potty"],"k":[36,14],"o":2},"black_square_button":{"a":"Black Square Button","b":"1F532","d":true,"e":true,"f":true,"h":true,"j":["shape","input","frame"],"k":[28,21],"o":2},"flag-sm":{"a":"San Marino Flag","b":"1F1F8-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[4,12],"o":2},"woman_standing":{"skin_variations":{"1F3FB":{"unified":"1F9CD-1F3FB-200D-2640-FE0F","non_qualified":"1F9CD-1F3FB-200D-2640","image":"1f9cd-1f3fb-200d-2640-fe0f.png","sheet_x":44,"sheet_y":20,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9CD-1F3FC-200D-2640-FE0F","non_qualified":"1F9CD-1F3FC-200D-2640","image":"1f9cd-1f3fc-200d-2640-fe0f.png","sheet_x":44,"sheet_y":21,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9CD-1F3FD-200D-2640-FE0F","non_qualified":"1F9CD-1F3FD-200D-2640","image":"1f9cd-1f3fd-200d-2640-fe0f.png","sheet_x":44,"sheet_y":22,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9CD-1F3FE-200D-2640-FE0F","non_qualified":"1F9CD-1F3FE-200D-2640","image":"1f9cd-1f3fe-200d-2640-fe0f.png","sheet_x":44,"sheet_y":23,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9CD-1F3FF-200D-2640-FE0F","non_qualified":"1F9CD-1F3FF-200D-2640","image":"1f9cd-1f3ff-200d-2640-fe0f.png","sheet_x":44,"sheet_y":24,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Standing","b":"1F9CD-200D-2640-FE0F","c":"1F9CD-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[44,19],"o":12},"kneeling_person":{"skin_variations":{"1F3FB":{"unified":"1F9CE-1F3FB","non_qualified":null,"image":"1f9ce-1f3fb.png","sheet_x":44,"sheet_y":50,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9CE-1F3FC","non_qualified":null,"image":"1f9ce-1f3fc.png","sheet_x":44,"sheet_y":51,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9CE-1F3FD","non_qualified":null,"image":"1f9ce-1f3fd.png","sheet_x":44,"sheet_y":52,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9CE-1F3FE","non_qualified":null,"image":"1f9ce-1f3fe.png","sheet_x":44,"sheet_y":53,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9CE-1F3FF","non_qualified":null,"image":"1f9ce-1f3ff.png","sheet_x":44,"sheet_y":54,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Kneeling Person","b":"1F9CE","d":true,"e":true,"f":true,"h":true,"k":[44,49],"o":12},"shower":{"a":"Shower","b":"1F6BF","d":true,"e":true,"f":true,"h":true,"j":["clean","water","bathroom"],"k":[36,16],"o":2},"flag-sn":{"a":"Senegal Flag","b":"1F1F8-1F1F3","d":true,"e":true,"f":true,"h":true,"k":[4,13],"o":2},"bathtub":{"a":"Bathtub","b":"1F6C1","d":true,"e":true,"f":true,"h":true,"j":["clean","shower","bathroom"],"k":[36,23],"o":2},"flag-so":{"a":"Somalia Flag","b":"1F1F8-1F1F4","d":true,"e":true,"f":true,"h":true,"k":[4,14],"o":2},"man_kneeling":{"skin_variations":{"1F3FB":{"unified":"1F9CE-1F3FB-200D-2642-FE0F","non_qualified":"1F9CE-1F3FB-200D-2642","image":"1f9ce-1f3fb-200d-2642-fe0f.png","sheet_x":44,"sheet_y":44,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9CE-1F3FC-200D-2642-FE0F","non_qualified":"1F9CE-1F3FC-200D-2642","image":"1f9ce-1f3fc-200d-2642-fe0f.png","sheet_x":44,"sheet_y":45,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9CE-1F3FD-200D-2642-FE0F","non_qualified":"1F9CE-1F3FD-200D-2642","image":"1f9ce-1f3fd-200d-2642-fe0f.png","sheet_x":44,"sheet_y":46,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9CE-1F3FE-200D-2642-FE0F","non_qualified":"1F9CE-1F3FE-200D-2642","image":"1f9ce-1f3fe-200d-2642-fe0f.png","sheet_x":44,"sheet_y":47,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9CE-1F3FF-200D-2642-FE0F","non_qualified":"1F9CE-1F3FF-200D-2642","image":"1f9ce-1f3ff-200d-2642-fe0f.png","sheet_x":44,"sheet_y":48,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Kneeling","b":"1F9CE-200D-2642-FE0F","c":"1F9CE-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[44,43],"o":12},"flag-sr":{"a":"Suriname Flag","b":"1F1F8-1F1F7","d":true,"e":true,"f":true,"h":true,"k":[4,15],"o":2},"woman_kneeling":{"skin_variations":{"1F3FB":{"unified":"1F9CE-1F3FB-200D-2640-FE0F","non_qualified":"1F9CE-1F3FB-200D-2640","image":"1f9ce-1f3fb-200d-2640-fe0f.png","sheet_x":44,"sheet_y":38,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9CE-1F3FC-200D-2640-FE0F","non_qualified":"1F9CE-1F3FC-200D-2640","image":"1f9ce-1f3fc-200d-2640-fe0f.png","sheet_x":44,"sheet_y":39,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9CE-1F3FD-200D-2640-FE0F","non_qualified":"1F9CE-1F3FD-200D-2640","image":"1f9ce-1f3fd-200d-2640-fe0f.png","sheet_x":44,"sheet_y":40,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9CE-1F3FE-200D-2640-FE0F","non_qualified":"1F9CE-1F3FE-200D-2640","image":"1f9ce-1f3fe-200d-2640-fe0f.png","sheet_x":44,"sheet_y":41,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9CE-1F3FF-200D-2640-FE0F","non_qualified":"1F9CE-1F3FF-200D-2640","image":"1f9ce-1f3ff-200d-2640-fe0f.png","sheet_x":44,"sheet_y":42,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Kneeling","b":"1F9CE-200D-2640-FE0F","c":"1F9CE-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[44,37],"o":12},"razor":{"a":"Razor","b":"1FA92","d":true,"e":true,"f":true,"h":true,"k":[52,6],"o":12},"person_with_probing_cane":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F9AF","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f9af.png","sheet_x":47,"sheet_y":8,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F9AF","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f9af.png","sheet_x":47,"sheet_y":9,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F9AF","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f9af.png","sheet_x":47,"sheet_y":10,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F9AF","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f9af.png","sheet_x":47,"sheet_y":11,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F9AF","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f9af.png","sheet_x":47,"sheet_y":12,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Person with Probing Cane","b":"1F9D1-200D-1F9AF","d":true,"e":false,"f":false,"h":false,"k":[47,7],"o":12},"flag-ss":{"a":"South Sudan Flag","b":"1F1F8-1F1F8","d":true,"e":true,"f":true,"h":true,"k":[4,16],"o":2},"lotion_bottle":{"a":"Lotion Bottle","b":"1F9F4","d":true,"e":true,"f":true,"h":true,"k":[51,39],"o":11},"flag-st":{"a":"São Tomé & Príncipe Flag","b":"1F1F8-1F1F9","d":true,"e":true,"f":true,"h":true,"k":[4,17],"o":2},"safety_pin":{"a":"Safety Pin","b":"1F9F7","d":true,"e":true,"f":true,"h":true,"k":[51,42],"o":11},"man_with_probing_cane":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F9AF","non_qualified":null,"image":"1f468-1f3fb-200d-1f9af.png","sheet_x":16,"sheet_y":18,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F9AF","non_qualified":null,"image":"1f468-1f3fc-200d-1f9af.png","sheet_x":16,"sheet_y":19,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F9AF","non_qualified":null,"image":"1f468-1f3fd-200d-1f9af.png","sheet_x":16,"sheet_y":20,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F9AF","non_qualified":null,"image":"1f468-1f3fe-200d-1f9af.png","sheet_x":16,"sheet_y":21,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F9AF","non_qualified":null,"image":"1f468-1f3ff-200d-1f9af.png","sheet_x":16,"sheet_y":22,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man with Probing Cane","b":"1F468-200D-1F9AF","d":true,"e":true,"f":true,"h":true,"k":[16,17],"o":12},"broom":{"a":"Broom","b":"1F9F9","d":true,"e":true,"f":true,"h":true,"k":[51,44],"o":11},"woman_with_probing_cane":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F9AF","non_qualified":null,"image":"1f469-1f3fb-200d-1f9af.png","sheet_x":19,"sheet_y":3,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F9AF","non_qualified":null,"image":"1f469-1f3fc-200d-1f9af.png","sheet_x":19,"sheet_y":4,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F9AF","non_qualified":null,"image":"1f469-1f3fd-200d-1f9af.png","sheet_x":19,"sheet_y":5,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F9AF","non_qualified":null,"image":"1f469-1f3fe-200d-1f9af.png","sheet_x":19,"sheet_y":6,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F9AF","non_qualified":null,"image":"1f469-1f3ff-200d-1f9af.png","sheet_x":19,"sheet_y":7,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman with Probing Cane","b":"1F469-200D-1F9AF","d":true,"e":true,"f":true,"h":true,"k":[19,2],"o":12},"flag-sv":{"a":"El Salvador Flag","b":"1F1F8-1F1FB","d":true,"e":true,"f":true,"h":true,"k":[4,18],"o":2},"flag-sx":{"a":"Sint Maarten Flag","b":"1F1F8-1F1FD","d":true,"e":true,"f":true,"h":true,"k":[4,19],"o":2},"basket":{"a":"Basket","b":"1F9FA","d":true,"e":true,"f":true,"h":true,"k":[51,45],"o":11},"person_in_motorized_wheelchair":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F9BC","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f9bc.png","sheet_x":47,"sheet_y":38,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F9BC","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f9bc.png","sheet_x":47,"sheet_y":39,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F9BC","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f9bc.png","sheet_x":47,"sheet_y":40,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F9BC","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f9bc.png","sheet_x":47,"sheet_y":41,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F9BC","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f9bc.png","sheet_x":47,"sheet_y":42,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Person in Motorized Wheelchair","b":"1F9D1-200D-1F9BC","d":true,"e":false,"f":false,"h":false,"k":[47,37],"o":12},"man_in_motorized_wheelchair":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F9BC","non_qualified":null,"image":"1f468-1f3fb-200d-1f9bc.png","sheet_x":16,"sheet_y":48,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F9BC","non_qualified":null,"image":"1f468-1f3fc-200d-1f9bc.png","sheet_x":16,"sheet_y":49,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F9BC","non_qualified":null,"image":"1f468-1f3fd-200d-1f9bc.png","sheet_x":16,"sheet_y":50,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F9BC","non_qualified":null,"image":"1f468-1f3fe-200d-1f9bc.png","sheet_x":16,"sheet_y":51,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F9BC","non_qualified":null,"image":"1f468-1f3ff-200d-1f9bc.png","sheet_x":16,"sheet_y":52,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man in Motorized Wheelchair","b":"1F468-200D-1F9BC","d":true,"e":true,"f":true,"h":true,"k":[16,47],"o":12},"flag-sy":{"a":"Syria Flag","b":"1F1F8-1F1FE","d":true,"e":true,"f":true,"h":true,"k":[4,20],"o":2},"roll_of_paper":{"a":"Roll of Paper","b":"1F9FB","d":true,"e":true,"f":true,"h":true,"k":[51,46],"o":11},"woman_in_motorized_wheelchair":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F9BC","non_qualified":null,"image":"1f469-1f3fb-200d-1f9bc.png","sheet_x":19,"sheet_y":33,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F9BC","non_qualified":null,"image":"1f469-1f3fc-200d-1f9bc.png","sheet_x":19,"sheet_y":34,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F9BC","non_qualified":null,"image":"1f469-1f3fd-200d-1f9bc.png","sheet_x":19,"sheet_y":35,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F9BC","non_qualified":null,"image":"1f469-1f3fe-200d-1f9bc.png","sheet_x":19,"sheet_y":36,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F9BC","non_qualified":null,"image":"1f469-1f3ff-200d-1f9bc.png","sheet_x":19,"sheet_y":37,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman in Motorized Wheelchair","b":"1F469-200D-1F9BC","d":true,"e":true,"f":true,"h":true,"k":[19,32],"o":12},"flag-sz":{"a":"Eswatini Flag","b":"1F1F8-1F1FF","d":true,"e":true,"f":true,"h":true,"k":[4,21],"o":2},"soap":{"a":"Bar of Soap","b":"1F9FC","d":true,"e":true,"f":true,"h":true,"k":[51,47],"o":11},"flag-ta":{"a":"Tristan Da Cunha Flag","b":"1F1F9-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[4,22],"o":2},"sponge":{"a":"Sponge","b":"1F9FD","d":true,"e":true,"f":true,"h":true,"k":[51,48],"o":11},"person_in_manual_wheelchair":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F9BD","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f9bd.png","sheet_x":47,"sheet_y":44,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F9BD","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f9bd.png","sheet_x":47,"sheet_y":45,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F9BD","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f9bd.png","sheet_x":47,"sheet_y":46,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F9BD","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f9bd.png","sheet_x":47,"sheet_y":47,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F9BD","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f9bd.png","sheet_x":47,"sheet_y":48,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Person in Manual Wheelchair","b":"1F9D1-200D-1F9BD","d":true,"e":false,"f":false,"h":false,"k":[47,43],"o":12},"fire_extinguisher":{"a":"Fire Extinguisher","b":"1F9EF","d":true,"e":true,"f":true,"h":true,"k":[51,34],"o":11},"man_in_manual_wheelchair":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F9BD","non_qualified":null,"image":"1f468-1f3fb-200d-1f9bd.png","sheet_x":16,"sheet_y":54,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F9BD","non_qualified":null,"image":"1f468-1f3fc-200d-1f9bd.png","sheet_x":16,"sheet_y":55,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F9BD","non_qualified":null,"image":"1f468-1f3fd-200d-1f9bd.png","sheet_x":16,"sheet_y":56,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F9BD","non_qualified":null,"image":"1f468-1f3fe-200d-1f9bd.png","sheet_x":17,"sheet_y":0,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F9BD","non_qualified":null,"image":"1f468-1f3ff-200d-1f9bd.png","sheet_x":17,"sheet_y":1,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man in Manual Wheelchair","b":"1F468-200D-1F9BD","d":true,"e":true,"f":true,"h":true,"k":[16,53],"o":12},"flag-tc":{"a":"Turks & Caicos Islands Flag","b":"1F1F9-1F1E8","d":true,"e":true,"f":true,"h":true,"k":[4,23],"o":2},"woman_in_manual_wheelchair":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F9BD","non_qualified":null,"image":"1f469-1f3fb-200d-1f9bd.png","sheet_x":19,"sheet_y":39,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F9BD","non_qualified":null,"image":"1f469-1f3fc-200d-1f9bd.png","sheet_x":19,"sheet_y":40,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F9BD","non_qualified":null,"image":"1f469-1f3fd-200d-1f9bd.png","sheet_x":19,"sheet_y":41,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F9BD","non_qualified":null,"image":"1f469-1f3fe-200d-1f9bd.png","sheet_x":19,"sheet_y":42,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F9BD","non_qualified":null,"image":"1f469-1f3ff-200d-1f9bd.png","sheet_x":19,"sheet_y":43,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman in Manual Wheelchair","b":"1F469-200D-1F9BD","d":true,"e":true,"f":true,"h":true,"k":[19,38],"o":12},"flag-td":{"a":"Chad Flag","b":"1F1F9-1F1E9","d":true,"e":true,"f":true,"h":true,"k":[4,24],"o":2},"shopping_trolley":{"a":"Shopping Trolley","b":"1F6D2","d":true,"e":true,"f":true,"h":true,"k":[36,40],"o":4},"runner":{"skin_variations":{"1F3FB":{"unified":"1F3C3-1F3FB","non_qualified":null,"image":"1f3c3-1f3fb.png","sheet_x":9,"sheet_y":2,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F3C3-1F3FC","non_qualified":null,"image":"1f3c3-1f3fc.png","sheet_x":9,"sheet_y":3,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F3C3-1F3FD","non_qualified":null,"image":"1f3c3-1f3fd.png","sheet_x":9,"sheet_y":4,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F3C3-1F3FE","non_qualified":null,"image":"1f3c3-1f3fe.png","sheet_x":9,"sheet_y":5,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F3C3-1F3FF","non_qualified":null,"image":"1f3c3-1f3ff.png","sheet_x":9,"sheet_y":6,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F3C3-200D-2642-FE0F","a":"Runner","b":"1F3C3","d":true,"e":true,"f":true,"h":false,"k":[9,1],"n":["running"],"o":2},"flag-tf":{"a":"French Southern Territories Flag","b":"1F1F9-1F1EB","d":true,"e":true,"f":true,"h":true,"k":[4,25],"o":2},"smoking":{"a":"Smoking Symbol","b":"1F6AC","d":true,"e":true,"f":true,"h":true,"j":["kills","tobacco","cigarette","joint","smoke"],"k":[35,3],"o":2},"coffin":{"a":"Coffin","b":"26B0-FE0F","c":"26B0","d":true,"e":true,"f":true,"h":true,"j":["vampire","dead","die","death","rip","graveyard","cemetery","casket","funeral","box"],"k":[53,54],"o":2},"man-running":{"skin_variations":{"1F3FB":{"unified":"1F3C3-1F3FB-200D-2642-FE0F","non_qualified":"1F3C3-1F3FB-200D-2642","image":"1f3c3-1f3fb-200d-2642-fe0f.png","sheet_x":8,"sheet_y":53,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F3C3-1F3FC-200D-2642-FE0F","non_qualified":"1F3C3-1F3FC-200D-2642","image":"1f3c3-1f3fc-200d-2642-fe0f.png","sheet_x":8,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F3C3-1F3FD-200D-2642-FE0F","non_qualified":"1F3C3-1F3FD-200D-2642","image":"1f3c3-1f3fd-200d-2642-fe0f.png","sheet_x":8,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F3C3-1F3FE-200D-2642-FE0F","non_qualified":"1F3C3-1F3FE-200D-2642","image":"1f3c3-1f3fe-200d-2642-fe0f.png","sheet_x":8,"sheet_y":56,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F3C3-1F3FF-200D-2642-FE0F","non_qualified":"1F3C3-1F3FF-200D-2642","image":"1f3c3-1f3ff-200d-2642-fe0f.png","sheet_x":9,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F3C3","a":"Man Running","b":"1F3C3-200D-2642-FE0F","c":"1F3C3-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[8,52],"o":4},"flag-tg":{"a":"Togo Flag","b":"1F1F9-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[4,26],"o":2},"woman-running":{"skin_variations":{"1F3FB":{"unified":"1F3C3-1F3FB-200D-2640-FE0F","non_qualified":"1F3C3-1F3FB-200D-2640","image":"1f3c3-1f3fb-200d-2640-fe0f.png","sheet_x":8,"sheet_y":47,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F3C3-1F3FC-200D-2640-FE0F","non_qualified":"1F3C3-1F3FC-200D-2640","image":"1f3c3-1f3fc-200d-2640-fe0f.png","sheet_x":8,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F3C3-1F3FD-200D-2640-FE0F","non_qualified":"1F3C3-1F3FD-200D-2640","image":"1f3c3-1f3fd-200d-2640-fe0f.png","sheet_x":8,"sheet_y":49,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F3C3-1F3FE-200D-2640-FE0F","non_qualified":"1F3C3-1F3FE-200D-2640","image":"1f3c3-1f3fe-200d-2640-fe0f.png","sheet_x":8,"sheet_y":50,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F3C3-1F3FF-200D-2640-FE0F","non_qualified":"1F3C3-1F3FF-200D-2640","image":"1f3c3-1f3ff-200d-2640-fe0f.png","sheet_x":8,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Running","b":"1F3C3-200D-2640-FE0F","c":"1F3C3-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[8,46],"o":4},"funeral_urn":{"a":"Funeral Urn","b":"26B1-FE0F","c":"26B1","d":true,"e":true,"f":true,"h":true,"j":["dead","die","death","rip","ashes"],"k":[53,55],"o":2},"flag-th":{"a":"Thailand Flag","b":"1F1F9-1F1ED","d":true,"e":true,"f":true,"h":true,"k":[4,27],"o":2},"moyai":{"a":"Moyai","b":"1F5FF","d":true,"e":true,"f":true,"h":true,"j":["rock","easter island","moai"],"k":[30,34],"o":2},"flag-tj":{"a":"Tajikistan Flag","b":"1F1F9-1F1EF","d":true,"e":true,"f":true,"h":true,"k":[4,28],"o":2},"dancer":{"skin_variations":{"1F3FB":{"unified":"1F483-1F3FB","non_qualified":null,"image":"1f483-1f3fb.png","sheet_x":24,"sheet_y":27,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F483-1F3FC","non_qualified":null,"image":"1f483-1f3fc.png","sheet_x":24,"sheet_y":28,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F483-1F3FD","non_qualified":null,"image":"1f483-1f3fd.png","sheet_x":24,"sheet_y":29,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F483-1F3FE","non_qualified":null,"image":"1f483-1f3fe.png","sheet_x":24,"sheet_y":30,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F483-1F3FF","non_qualified":null,"image":"1f483-1f3ff.png","sheet_x":24,"sheet_y":31,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Dancer","b":"1F483","d":true,"e":true,"f":true,"h":true,"j":["female","girl","woman","fun"],"k":[24,26],"o":2},"flag-tk":{"a":"Tokelau Flag","b":"1F1F9-1F1F0","d":true,"e":true,"f":true,"h":true,"k":[4,29],"o":2},"man_dancing":{"skin_variations":{"1F3FB":{"unified":"1F57A-1F3FB","non_qualified":null,"image":"1f57a-1f3fb.png","sheet_x":29,"sheet_y":38,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F57A-1F3FC","non_qualified":null,"image":"1f57a-1f3fc.png","sheet_x":29,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F57A-1F3FD","non_qualified":null,"image":"1f57a-1f3fd.png","sheet_x":29,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F57A-1F3FE","non_qualified":null,"image":"1f57a-1f3fe.png","sheet_x":29,"sheet_y":41,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F57A-1F3FF","non_qualified":null,"image":"1f57a-1f3ff.png","sheet_x":29,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Dancing","b":"1F57A","d":true,"e":true,"f":true,"h":true,"j":["male","boy","fun","dancer"],"k":[29,37],"o":4},"flag-tl":{"a":"Timor-Leste Flag","b":"1F1F9-1F1F1","d":true,"e":true,"f":true,"h":true,"k":[4,30],"o":2},"man_in_business_suit_levitating":{"skin_variations":{"1F3FB":{"unified":"1F574-1F3FB","non_qualified":null,"image":"1f574-1f3fb.png","sheet_x":29,"sheet_y":10,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F574-1F3FC","non_qualified":null,"image":"1f574-1f3fc.png","sheet_x":29,"sheet_y":11,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F574-1F3FD","non_qualified":null,"image":"1f574-1f3fd.png","sheet_x":29,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F574-1F3FE","non_qualified":null,"image":"1f574-1f3fe.png","sheet_x":29,"sheet_y":13,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F574-1F3FF","non_qualified":null,"image":"1f574-1f3ff.png","sheet_x":29,"sheet_y":14,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man in Business Suit Levitating","b":"1F574-FE0F","c":"1F574","d":true,"e":true,"f":true,"h":true,"k":[29,9],"o":2},"flag-tm":{"a":"Turkmenistan Flag","b":"1F1F9-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[4,31],"o":2},"dancers":{"obsoleted_by":"1F46F-200D-2640-FE0F","a":"Woman with Bunny Ears","b":"1F46F","d":true,"e":true,"f":true,"h":true,"k":[22,0],"o":2},"man-with-bunny-ears-partying":{"a":"Man with Bunny Ears Partying","b":"1F46F-200D-2642-FE0F","c":"1F46F-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[21,56],"o":4},"flag-tn":{"a":"Tunisia Flag","b":"1F1F9-1F1F3","d":true,"e":true,"f":true,"h":true,"k":[4,32],"o":2},"flag-to":{"a":"Tonga Flag","b":"1F1F9-1F1F4","d":true,"e":true,"f":true,"h":true,"k":[4,33],"o":2},"woman-with-bunny-ears-partying":{"obsoletes":"1F46F","a":"Woman with Bunny Ears Partying","b":"1F46F-200D-2640-FE0F","c":"1F46F-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[21,55],"o":4},"flag-tr":{"a":"Turkey Flag","b":"1F1F9-1F1F7","d":true,"e":true,"f":true,"h":true,"k":[4,34],"o":2},"person_in_steamy_room":{"skin_variations":{"1F3FB":{"unified":"1F9D6-1F3FB","non_qualified":null,"image":"1f9d6-1f3fb.png","sheet_x":48,"sheet_y":53,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D6-1F3FB-200D-2642-FE0F"},"1F3FC":{"unified":"1F9D6-1F3FC","non_qualified":null,"image":"1f9d6-1f3fc.png","sheet_x":48,"sheet_y":54,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D6-1F3FC-200D-2642-FE0F"},"1F3FD":{"unified":"1F9D6-1F3FD","non_qualified":null,"image":"1f9d6-1f3fd.png","sheet_x":48,"sheet_y":55,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D6-1F3FD-200D-2642-FE0F"},"1F3FE":{"unified":"1F9D6-1F3FE","non_qualified":null,"image":"1f9d6-1f3fe.png","sheet_x":48,"sheet_y":56,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D6-1F3FE-200D-2642-FE0F"},"1F3FF":{"unified":"1F9D6-1F3FF","non_qualified":null,"image":"1f9d6-1f3ff.png","sheet_x":49,"sheet_y":0,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D6-1F3FF-200D-2642-FE0F"}},"obsoleted_by":"1F9D6-200D-2642-FE0F","a":"Person in Steamy Room","b":"1F9D6","d":true,"e":true,"f":true,"h":true,"k":[48,52],"o":5},"man_in_steamy_room":{"skin_variations":{"1F3FB":{"unified":"1F9D6-1F3FB-200D-2642-FE0F","non_qualified":"1F9D6-1F3FB-200D-2642","image":"1f9d6-1f3fb-200d-2642-fe0f.png","sheet_x":48,"sheet_y":47,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D6-1F3FB"},"1F3FC":{"unified":"1F9D6-1F3FC-200D-2642-FE0F","non_qualified":"1F9D6-1F3FC-200D-2642","image":"1f9d6-1f3fc-200d-2642-fe0f.png","sheet_x":48,"sheet_y":48,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D6-1F3FC"},"1F3FD":{"unified":"1F9D6-1F3FD-200D-2642-FE0F","non_qualified":"1F9D6-1F3FD-200D-2642","image":"1f9d6-1f3fd-200d-2642-fe0f.png","sheet_x":48,"sheet_y":49,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D6-1F3FD"},"1F3FE":{"unified":"1F9D6-1F3FE-200D-2642-FE0F","non_qualified":"1F9D6-1F3FE-200D-2642","image":"1f9d6-1f3fe-200d-2642-fe0f.png","sheet_x":48,"sheet_y":50,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D6-1F3FE"},"1F3FF":{"unified":"1F9D6-1F3FF-200D-2642-FE0F","non_qualified":"1F9D6-1F3FF-200D-2642","image":"1f9d6-1f3ff-200d-2642-fe0f.png","sheet_x":48,"sheet_y":51,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D6-1F3FF"}},"obsoletes":"1F9D6","a":"Man in Steamy Room","b":"1F9D6-200D-2642-FE0F","c":"1F9D6-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[48,46],"o":5},"flag-tt":{"a":"Trinidad & Tobago Flag","b":"1F1F9-1F1F9","d":true,"e":true,"f":true,"h":true,"k":[4,35],"o":2},"woman_in_steamy_room":{"skin_variations":{"1F3FB":{"unified":"1F9D6-1F3FB-200D-2640-FE0F","non_qualified":"1F9D6-1F3FB-200D-2640","image":"1f9d6-1f3fb-200d-2640-fe0f.png","sheet_x":48,"sheet_y":41,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9D6-1F3FC-200D-2640-FE0F","non_qualified":"1F9D6-1F3FC-200D-2640","image":"1f9d6-1f3fc-200d-2640-fe0f.png","sheet_x":48,"sheet_y":42,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9D6-1F3FD-200D-2640-FE0F","non_qualified":"1F9D6-1F3FD-200D-2640","image":"1f9d6-1f3fd-200d-2640-fe0f.png","sheet_x":48,"sheet_y":43,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9D6-1F3FE-200D-2640-FE0F","non_qualified":"1F9D6-1F3FE-200D-2640","image":"1f9d6-1f3fe-200d-2640-fe0f.png","sheet_x":48,"sheet_y":44,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9D6-1F3FF-200D-2640-FE0F","non_qualified":"1F9D6-1F3FF-200D-2640","image":"1f9d6-1f3ff-200d-2640-fe0f.png","sheet_x":48,"sheet_y":45,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman in Steamy Room","b":"1F9D6-200D-2640-FE0F","c":"1F9D6-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[48,40],"o":5},"flag-tv":{"a":"Tuvalu Flag","b":"1F1F9-1F1FB","d":true,"e":true,"f":true,"h":true,"k":[4,36],"o":2},"flag-tw":{"a":"Taiwan Flag","b":"1F1F9-1F1FC","d":true,"e":true,"f":true,"h":true,"k":[4,37],"o":2},"person_climbing":{"skin_variations":{"1F3FB":{"unified":"1F9D7-1F3FB","non_qualified":null,"image":"1f9d7-1f3fb.png","sheet_x":49,"sheet_y":14,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D7-1F3FB-200D-2640-FE0F"},"1F3FC":{"unified":"1F9D7-1F3FC","non_qualified":null,"image":"1f9d7-1f3fc.png","sheet_x":49,"sheet_y":15,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D7-1F3FC-200D-2640-FE0F"},"1F3FD":{"unified":"1F9D7-1F3FD","non_qualified":null,"image":"1f9d7-1f3fd.png","sheet_x":49,"sheet_y":16,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D7-1F3FD-200D-2640-FE0F"},"1F3FE":{"unified":"1F9D7-1F3FE","non_qualified":null,"image":"1f9d7-1f3fe.png","sheet_x":49,"sheet_y":17,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D7-1F3FE-200D-2640-FE0F"},"1F3FF":{"unified":"1F9D7-1F3FF","non_qualified":null,"image":"1f9d7-1f3ff.png","sheet_x":49,"sheet_y":18,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D7-1F3FF-200D-2640-FE0F"}},"obsoleted_by":"1F9D7-200D-2640-FE0F","a":"Person Climbing","b":"1F9D7","d":true,"e":true,"f":true,"h":true,"k":[49,13],"o":5},"man_climbing":{"skin_variations":{"1F3FB":{"unified":"1F9D7-1F3FB-200D-2642-FE0F","non_qualified":"1F9D7-1F3FB-200D-2642","image":"1f9d7-1f3fb-200d-2642-fe0f.png","sheet_x":49,"sheet_y":8,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9D7-1F3FC-200D-2642-FE0F","non_qualified":"1F9D7-1F3FC-200D-2642","image":"1f9d7-1f3fc-200d-2642-fe0f.png","sheet_x":49,"sheet_y":9,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9D7-1F3FD-200D-2642-FE0F","non_qualified":"1F9D7-1F3FD-200D-2642","image":"1f9d7-1f3fd-200d-2642-fe0f.png","sheet_x":49,"sheet_y":10,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9D7-1F3FE-200D-2642-FE0F","non_qualified":"1F9D7-1F3FE-200D-2642","image":"1f9d7-1f3fe-200d-2642-fe0f.png","sheet_x":49,"sheet_y":11,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9D7-1F3FF-200D-2642-FE0F","non_qualified":"1F9D7-1F3FF-200D-2642","image":"1f9d7-1f3ff-200d-2642-fe0f.png","sheet_x":49,"sheet_y":12,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Climbing","b":"1F9D7-200D-2642-FE0F","c":"1F9D7-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[49,7],"o":5},"flag-tz":{"a":"Tanzania Flag","b":"1F1F9-1F1FF","d":true,"e":true,"f":true,"h":true,"k":[4,38],"o":2},"flag-ua":{"a":"Ukraine Flag","b":"1F1FA-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[4,39],"o":2},"woman_climbing":{"skin_variations":{"1F3FB":{"unified":"1F9D7-1F3FB-200D-2640-FE0F","non_qualified":"1F9D7-1F3FB-200D-2640","image":"1f9d7-1f3fb-200d-2640-fe0f.png","sheet_x":49,"sheet_y":2,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D7-1F3FB"},"1F3FC":{"unified":"1F9D7-1F3FC-200D-2640-FE0F","non_qualified":"1F9D7-1F3FC-200D-2640","image":"1f9d7-1f3fc-200d-2640-fe0f.png","sheet_x":49,"sheet_y":3,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D7-1F3FC"},"1F3FD":{"unified":"1F9D7-1F3FD-200D-2640-FE0F","non_qualified":"1F9D7-1F3FD-200D-2640","image":"1f9d7-1f3fd-200d-2640-fe0f.png","sheet_x":49,"sheet_y":4,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D7-1F3FD"},"1F3FE":{"unified":"1F9D7-1F3FE-200D-2640-FE0F","non_qualified":"1F9D7-1F3FE-200D-2640","image":"1f9d7-1f3fe-200d-2640-fe0f.png","sheet_x":49,"sheet_y":5,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D7-1F3FE"},"1F3FF":{"unified":"1F9D7-1F3FF-200D-2640-FE0F","non_qualified":"1F9D7-1F3FF-200D-2640","image":"1f9d7-1f3ff-200d-2640-fe0f.png","sheet_x":49,"sheet_y":6,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D7-1F3FF"}},"obsoletes":"1F9D7","a":"Woman Climbing","b":"1F9D7-200D-2640-FE0F","c":"1F9D7-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[49,1],"o":5},"flag-ug":{"a":"Uganda Flag","b":"1F1FA-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[4,40],"o":2},"fencer":{"a":"Fencer","b":"1F93A","d":true,"e":true,"f":true,"h":true,"k":[40,32],"o":4},"flag-um":{"a":"U.s. Outlying Islands Flag","b":"1F1FA-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[4,41],"o":2},"horse_racing":{"skin_variations":{"1F3FB":{"unified":"1F3C7-1F3FB","non_qualified":null,"image":"1f3c7-1f3fb.png","sheet_x":9,"sheet_y":28,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F3C7-1F3FC","non_qualified":null,"image":"1f3c7-1f3fc.png","sheet_x":9,"sheet_y":29,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F3C7-1F3FD","non_qualified":null,"image":"1f3c7-1f3fd.png","sheet_x":9,"sheet_y":30,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F3C7-1F3FE","non_qualified":null,"image":"1f3c7-1f3fe.png","sheet_x":9,"sheet_y":31,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F3C7-1F3FF","non_qualified":null,"image":"1f3c7-1f3ff.png","sheet_x":9,"sheet_y":32,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Horse Racing","b":"1F3C7","d":true,"e":true,"f":true,"h":true,"j":["animal","betting","competition","gambling","luck"],"k":[9,27],"o":2},"skier":{"a":"Skier","b":"26F7-FE0F","c":"26F7","d":true,"e":true,"f":true,"h":true,"j":["sports","winter","snow"],"k":[54,17],"o":2},"flag-un":{"a":"United Nations Flag","b":"1F1FA-1F1F3","d":true,"e":true,"f":true,"h":true,"k":[4,42],"o":4},"us":{"a":"United States Flag","b":"1F1FA-1F1F8","d":true,"e":true,"f":true,"h":true,"j":["united","states","america","flag","nation","country","banner"],"k":[4,43],"n":["flag-us"],"o":2},"snowboarder":{"skin_variations":{"1F3FB":{"unified":"1F3C2-1F3FB","non_qualified":null,"image":"1f3c2-1f3fb.png","sheet_x":8,"sheet_y":41,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F3C2-1F3FC","non_qualified":null,"image":"1f3c2-1f3fc.png","sheet_x":8,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F3C2-1F3FD","non_qualified":null,"image":"1f3c2-1f3fd.png","sheet_x":8,"sheet_y":43,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F3C2-1F3FE","non_qualified":null,"image":"1f3c2-1f3fe.png","sheet_x":8,"sheet_y":44,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F3C2-1F3FF","non_qualified":null,"image":"1f3c2-1f3ff.png","sheet_x":8,"sheet_y":45,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Snowboarder","b":"1F3C2","d":true,"e":true,"f":true,"h":true,"j":["sports","winter"],"k":[8,40],"o":2},"golfer":{"skin_variations":{"1F3FB":{"unified":"1F3CC-1F3FB","non_qualified":null,"image":"1f3cc-1f3fb.png","sheet_x":10,"sheet_y":27,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F3CC-1F3FC","non_qualified":null,"image":"1f3cc-1f3fc.png","sheet_x":10,"sheet_y":28,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F3CC-1F3FD","non_qualified":null,"image":"1f3cc-1f3fd.png","sheet_x":10,"sheet_y":29,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F3CC-1F3FE","non_qualified":null,"image":"1f3cc-1f3fe.png","sheet_x":10,"sheet_y":30,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F3CC-1F3FF","non_qualified":null,"image":"1f3cc-1f3ff.png","sheet_x":10,"sheet_y":31,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F3CC-FE0F-200D-2642-FE0F","a":"Golfer","b":"1F3CC-FE0F","c":"1F3CC","d":true,"e":true,"f":true,"h":false,"k":[10,26],"o":2},"flag-uy":{"a":"Uruguay Flag","b":"1F1FA-1F1FE","d":true,"e":true,"f":true,"h":true,"k":[4,44],"o":2},"flag-uz":{"a":"Uzbekistan Flag","b":"1F1FA-1F1FF","d":true,"e":true,"f":true,"h":true,"k":[4,45],"o":2},"man-golfing":{"skin_variations":{"1F3FB":{"unified":"1F3CC-1F3FB-200D-2642-FE0F","non_qualified":"1F3CC-1F3FB-200D-2642","image":"1f3cc-1f3fb-200d-2642-fe0f.png","sheet_x":10,"sheet_y":21,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F3CC-1F3FC-200D-2642-FE0F","non_qualified":"1F3CC-1F3FC-200D-2642","image":"1f3cc-1f3fc-200d-2642-fe0f.png","sheet_x":10,"sheet_y":22,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F3CC-1F3FD-200D-2642-FE0F","non_qualified":"1F3CC-1F3FD-200D-2642","image":"1f3cc-1f3fd-200d-2642-fe0f.png","sheet_x":10,"sheet_y":23,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F3CC-1F3FE-200D-2642-FE0F","non_qualified":"1F3CC-1F3FE-200D-2642","image":"1f3cc-1f3fe-200d-2642-fe0f.png","sheet_x":10,"sheet_y":24,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F3CC-1F3FF-200D-2642-FE0F","non_qualified":"1F3CC-1F3FF-200D-2642","image":"1f3cc-1f3ff-200d-2642-fe0f.png","sheet_x":10,"sheet_y":25,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F3CC-FE0F","a":"Man Golfing","b":"1F3CC-FE0F-200D-2642-FE0F","d":true,"e":true,"f":true,"h":false,"k":[10,20],"o":4},"flag-va":{"a":"Vatican City Flag","b":"1F1FB-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[4,46],"o":2},"woman-golfing":{"skin_variations":{"1F3FB":{"unified":"1F3CC-1F3FB-200D-2640-FE0F","non_qualified":"1F3CC-1F3FB-200D-2640","image":"1f3cc-1f3fb-200d-2640-fe0f.png","sheet_x":10,"sheet_y":15,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F3CC-1F3FC-200D-2640-FE0F","non_qualified":"1F3CC-1F3FC-200D-2640","image":"1f3cc-1f3fc-200d-2640-fe0f.png","sheet_x":10,"sheet_y":16,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F3CC-1F3FD-200D-2640-FE0F","non_qualified":"1F3CC-1F3FD-200D-2640","image":"1f3cc-1f3fd-200d-2640-fe0f.png","sheet_x":10,"sheet_y":17,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F3CC-1F3FE-200D-2640-FE0F","non_qualified":"1F3CC-1F3FE-200D-2640","image":"1f3cc-1f3fe-200d-2640-fe0f.png","sheet_x":10,"sheet_y":18,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F3CC-1F3FF-200D-2640-FE0F","non_qualified":"1F3CC-1F3FF-200D-2640","image":"1f3cc-1f3ff-200d-2640-fe0f.png","sheet_x":10,"sheet_y":19,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Golfing","b":"1F3CC-FE0F-200D-2640-FE0F","d":true,"e":true,"f":true,"h":false,"k":[10,14],"o":4},"flag-vc":{"a":"St. Vincent & Grenadines Flag","b":"1F1FB-1F1E8","d":true,"e":true,"f":true,"h":true,"k":[4,47],"o":2},"surfer":{"skin_variations":{"1F3FB":{"unified":"1F3C4-1F3FB","non_qualified":null,"image":"1f3c4-1f3fb.png","sheet_x":9,"sheet_y":20,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F3C4-1F3FC","non_qualified":null,"image":"1f3c4-1f3fc.png","sheet_x":9,"sheet_y":21,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F3C4-1F3FD","non_qualified":null,"image":"1f3c4-1f3fd.png","sheet_x":9,"sheet_y":22,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F3C4-1F3FE","non_qualified":null,"image":"1f3c4-1f3fe.png","sheet_x":9,"sheet_y":23,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F3C4-1F3FF","non_qualified":null,"image":"1f3c4-1f3ff.png","sheet_x":9,"sheet_y":24,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F3C4-200D-2642-FE0F","a":"Surfer","b":"1F3C4","d":true,"e":true,"f":true,"h":false,"k":[9,19],"o":2},"man-surfing":{"skin_variations":{"1F3FB":{"unified":"1F3C4-1F3FB-200D-2642-FE0F","non_qualified":"1F3C4-1F3FB-200D-2642","image":"1f3c4-1f3fb-200d-2642-fe0f.png","sheet_x":9,"sheet_y":14,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F3C4-1F3FC-200D-2642-FE0F","non_qualified":"1F3C4-1F3FC-200D-2642","image":"1f3c4-1f3fc-200d-2642-fe0f.png","sheet_x":9,"sheet_y":15,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F3C4-1F3FD-200D-2642-FE0F","non_qualified":"1F3C4-1F3FD-200D-2642","image":"1f3c4-1f3fd-200d-2642-fe0f.png","sheet_x":9,"sheet_y":16,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F3C4-1F3FE-200D-2642-FE0F","non_qualified":"1F3C4-1F3FE-200D-2642","image":"1f3c4-1f3fe-200d-2642-fe0f.png","sheet_x":9,"sheet_y":17,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F3C4-1F3FF-200D-2642-FE0F","non_qualified":"1F3C4-1F3FF-200D-2642","image":"1f3c4-1f3ff-200d-2642-fe0f.png","sheet_x":9,"sheet_y":18,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F3C4","a":"Man Surfing","b":"1F3C4-200D-2642-FE0F","c":"1F3C4-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[9,13],"o":4},"flag-ve":{"a":"Venezuela Flag","b":"1F1FB-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[4,48],"o":2},"flag-vg":{"a":"British Virgin Islands Flag","b":"1F1FB-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[4,49],"o":2},"woman-surfing":{"skin_variations":{"1F3FB":{"unified":"1F3C4-1F3FB-200D-2640-FE0F","non_qualified":"1F3C4-1F3FB-200D-2640","image":"1f3c4-1f3fb-200d-2640-fe0f.png","sheet_x":9,"sheet_y":8,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F3C4-1F3FC-200D-2640-FE0F","non_qualified":"1F3C4-1F3FC-200D-2640","image":"1f3c4-1f3fc-200d-2640-fe0f.png","sheet_x":9,"sheet_y":9,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F3C4-1F3FD-200D-2640-FE0F","non_qualified":"1F3C4-1F3FD-200D-2640","image":"1f3c4-1f3fd-200d-2640-fe0f.png","sheet_x":9,"sheet_y":10,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F3C4-1F3FE-200D-2640-FE0F","non_qualified":"1F3C4-1F3FE-200D-2640","image":"1f3c4-1f3fe-200d-2640-fe0f.png","sheet_x":9,"sheet_y":11,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F3C4-1F3FF-200D-2640-FE0F","non_qualified":"1F3C4-1F3FF-200D-2640","image":"1f3c4-1f3ff-200d-2640-fe0f.png","sheet_x":9,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Surfing","b":"1F3C4-200D-2640-FE0F","c":"1F3C4-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[9,7],"o":4},"rowboat":{"skin_variations":{"1F3FB":{"unified":"1F6A3-1F3FB","non_qualified":null,"image":"1f6a3-1f3fb.png","sheet_x":34,"sheet_y":47,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F6A3-1F3FC","non_qualified":null,"image":"1f6a3-1f3fc.png","sheet_x":34,"sheet_y":48,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F6A3-1F3FD","non_qualified":null,"image":"1f6a3-1f3fd.png","sheet_x":34,"sheet_y":49,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F6A3-1F3FE","non_qualified":null,"image":"1f6a3-1f3fe.png","sheet_x":34,"sheet_y":50,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F6A3-1F3FF","non_qualified":null,"image":"1f6a3-1f3ff.png","sheet_x":34,"sheet_y":51,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F6A3-200D-2642-FE0F","a":"Rowboat","b":"1F6A3","d":true,"e":true,"f":true,"h":false,"k":[34,46],"o":2},"flag-vi":{"a":"U.s. Virgin Islands Flag","b":"1F1FB-1F1EE","d":true,"e":true,"f":true,"h":true,"k":[4,50],"o":2},"man-rowing-boat":{"skin_variations":{"1F3FB":{"unified":"1F6A3-1F3FB-200D-2642-FE0F","non_qualified":"1F6A3-1F3FB-200D-2642","image":"1f6a3-1f3fb-200d-2642-fe0f.png","sheet_x":34,"sheet_y":41,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F6A3-1F3FC-200D-2642-FE0F","non_qualified":"1F6A3-1F3FC-200D-2642","image":"1f6a3-1f3fc-200d-2642-fe0f.png","sheet_x":34,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F6A3-1F3FD-200D-2642-FE0F","non_qualified":"1F6A3-1F3FD-200D-2642","image":"1f6a3-1f3fd-200d-2642-fe0f.png","sheet_x":34,"sheet_y":43,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F6A3-1F3FE-200D-2642-FE0F","non_qualified":"1F6A3-1F3FE-200D-2642","image":"1f6a3-1f3fe-200d-2642-fe0f.png","sheet_x":34,"sheet_y":44,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F6A3-1F3FF-200D-2642-FE0F","non_qualified":"1F6A3-1F3FF-200D-2642","image":"1f6a3-1f3ff-200d-2642-fe0f.png","sheet_x":34,"sheet_y":45,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F6A3","a":"Man Rowing Boat","b":"1F6A3-200D-2642-FE0F","c":"1F6A3-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[34,40],"o":4},"flag-vn":{"a":"Vietnam Flag","b":"1F1FB-1F1F3","d":true,"e":true,"f":true,"h":true,"k":[4,51],"o":2},"flag-vu":{"a":"Vanuatu Flag","b":"1F1FB-1F1FA","d":true,"e":true,"f":true,"h":true,"k":[4,52],"o":2},"woman-rowing-boat":{"skin_variations":{"1F3FB":{"unified":"1F6A3-1F3FB-200D-2640-FE0F","non_qualified":"1F6A3-1F3FB-200D-2640","image":"1f6a3-1f3fb-200d-2640-fe0f.png","sheet_x":34,"sheet_y":35,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F6A3-1F3FC-200D-2640-FE0F","non_qualified":"1F6A3-1F3FC-200D-2640","image":"1f6a3-1f3fc-200d-2640-fe0f.png","sheet_x":34,"sheet_y":36,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F6A3-1F3FD-200D-2640-FE0F","non_qualified":"1F6A3-1F3FD-200D-2640","image":"1f6a3-1f3fd-200d-2640-fe0f.png","sheet_x":34,"sheet_y":37,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F6A3-1F3FE-200D-2640-FE0F","non_qualified":"1F6A3-1F3FE-200D-2640","image":"1f6a3-1f3fe-200d-2640-fe0f.png","sheet_x":34,"sheet_y":38,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F6A3-1F3FF-200D-2640-FE0F","non_qualified":"1F6A3-1F3FF-200D-2640","image":"1f6a3-1f3ff-200d-2640-fe0f.png","sheet_x":34,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Rowing Boat","b":"1F6A3-200D-2640-FE0F","c":"1F6A3-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[34,34],"o":4},"swimmer":{"skin_variations":{"1F3FB":{"unified":"1F3CA-1F3FB","non_qualified":null,"image":"1f3ca-1f3fb.png","sheet_x":9,"sheet_y":48,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F3CA-1F3FC","non_qualified":null,"image":"1f3ca-1f3fc.png","sheet_x":9,"sheet_y":49,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F3CA-1F3FD","non_qualified":null,"image":"1f3ca-1f3fd.png","sheet_x":9,"sheet_y":50,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F3CA-1F3FE","non_qualified":null,"image":"1f3ca-1f3fe.png","sheet_x":9,"sheet_y":51,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F3CA-1F3FF","non_qualified":null,"image":"1f3ca-1f3ff.png","sheet_x":9,"sheet_y":52,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F3CA-200D-2642-FE0F","a":"Swimmer","b":"1F3CA","d":true,"e":true,"f":true,"h":false,"k":[9,47],"o":2},"flag-wf":{"a":"Wallis & Futuna Flag","b":"1F1FC-1F1EB","d":true,"e":true,"f":true,"h":true,"k":[4,53],"o":2},"man-swimming":{"skin_variations":{"1F3FB":{"unified":"1F3CA-1F3FB-200D-2642-FE0F","non_qualified":"1F3CA-1F3FB-200D-2642","image":"1f3ca-1f3fb-200d-2642-fe0f.png","sheet_x":9,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F3CA-1F3FC-200D-2642-FE0F","non_qualified":"1F3CA-1F3FC-200D-2642","image":"1f3ca-1f3fc-200d-2642-fe0f.png","sheet_x":9,"sheet_y":43,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F3CA-1F3FD-200D-2642-FE0F","non_qualified":"1F3CA-1F3FD-200D-2642","image":"1f3ca-1f3fd-200d-2642-fe0f.png","sheet_x":9,"sheet_y":44,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F3CA-1F3FE-200D-2642-FE0F","non_qualified":"1F3CA-1F3FE-200D-2642","image":"1f3ca-1f3fe-200d-2642-fe0f.png","sheet_x":9,"sheet_y":45,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F3CA-1F3FF-200D-2642-FE0F","non_qualified":"1F3CA-1F3FF-200D-2642","image":"1f3ca-1f3ff-200d-2642-fe0f.png","sheet_x":9,"sheet_y":46,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F3CA","a":"Man Swimming","b":"1F3CA-200D-2642-FE0F","c":"1F3CA-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[9,41],"o":4},"flag-ws":{"a":"Samoa Flag","b":"1F1FC-1F1F8","d":true,"e":true,"f":true,"h":true,"k":[4,54],"o":2},"woman-swimming":{"skin_variations":{"1F3FB":{"unified":"1F3CA-1F3FB-200D-2640-FE0F","non_qualified":"1F3CA-1F3FB-200D-2640","image":"1f3ca-1f3fb-200d-2640-fe0f.png","sheet_x":9,"sheet_y":36,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F3CA-1F3FC-200D-2640-FE0F","non_qualified":"1F3CA-1F3FC-200D-2640","image":"1f3ca-1f3fc-200d-2640-fe0f.png","sheet_x":9,"sheet_y":37,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F3CA-1F3FD-200D-2640-FE0F","non_qualified":"1F3CA-1F3FD-200D-2640","image":"1f3ca-1f3fd-200d-2640-fe0f.png","sheet_x":9,"sheet_y":38,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F3CA-1F3FE-200D-2640-FE0F","non_qualified":"1F3CA-1F3FE-200D-2640","image":"1f3ca-1f3fe-200d-2640-fe0f.png","sheet_x":9,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F3CA-1F3FF-200D-2640-FE0F","non_qualified":"1F3CA-1F3FF-200D-2640","image":"1f3ca-1f3ff-200d-2640-fe0f.png","sheet_x":9,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Swimming","b":"1F3CA-200D-2640-FE0F","c":"1F3CA-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[9,35],"o":4},"flag-xk":{"a":"Kosovo Flag","b":"1F1FD-1F1F0","d":true,"e":true,"f":true,"h":true,"k":[4,55],"o":2},"person_with_ball":{"skin_variations":{"1F3FB":{"unified":"26F9-1F3FB","non_qualified":null,"image":"26f9-1f3fb.png","sheet_x":54,"sheet_y":32,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"26F9-1F3FC","non_qualified":null,"image":"26f9-1f3fc.png","sheet_x":54,"sheet_y":33,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"26F9-1F3FD","non_qualified":null,"image":"26f9-1f3fd.png","sheet_x":54,"sheet_y":34,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"26F9-1F3FE","non_qualified":null,"image":"26f9-1f3fe.png","sheet_x":54,"sheet_y":35,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"26F9-1F3FF","non_qualified":null,"image":"26f9-1f3ff.png","sheet_x":54,"sheet_y":36,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"26F9-FE0F-200D-2642-FE0F","a":"Person with Ball","b":"26F9-FE0F","c":"26F9","d":true,"e":true,"f":true,"h":false,"k":[54,31],"o":2},"flag-ye":{"a":"Yemen Flag","b":"1F1FE-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[4,56],"o":2},"man-bouncing-ball":{"skin_variations":{"1F3FB":{"unified":"26F9-1F3FB-200D-2642-FE0F","non_qualified":"26F9-1F3FB-200D-2642","image":"26f9-1f3fb-200d-2642-fe0f.png","sheet_x":54,"sheet_y":26,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"26F9-1F3FC-200D-2642-FE0F","non_qualified":"26F9-1F3FC-200D-2642","image":"26f9-1f3fc-200d-2642-fe0f.png","sheet_x":54,"sheet_y":27,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"26F9-1F3FD-200D-2642-FE0F","non_qualified":"26F9-1F3FD-200D-2642","image":"26f9-1f3fd-200d-2642-fe0f.png","sheet_x":54,"sheet_y":28,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"26F9-1F3FE-200D-2642-FE0F","non_qualified":"26F9-1F3FE-200D-2642","image":"26f9-1f3fe-200d-2642-fe0f.png","sheet_x":54,"sheet_y":29,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"26F9-1F3FF-200D-2642-FE0F","non_qualified":"26F9-1F3FF-200D-2642","image":"26f9-1f3ff-200d-2642-fe0f.png","sheet_x":54,"sheet_y":30,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"26F9-FE0F","a":"Man Bouncing Ball","b":"26F9-FE0F-200D-2642-FE0F","d":true,"e":true,"f":true,"h":false,"k":[54,25],"o":4},"flag-yt":{"a":"Mayotte Flag","b":"1F1FE-1F1F9","d":true,"e":true,"f":true,"h":true,"k":[5,0],"o":2},"woman-bouncing-ball":{"skin_variations":{"1F3FB":{"unified":"26F9-1F3FB-200D-2640-FE0F","non_qualified":"26F9-1F3FB-200D-2640","image":"26f9-1f3fb-200d-2640-fe0f.png","sheet_x":54,"sheet_y":20,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"26F9-1F3FC-200D-2640-FE0F","non_qualified":"26F9-1F3FC-200D-2640","image":"26f9-1f3fc-200d-2640-fe0f.png","sheet_x":54,"sheet_y":21,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"26F9-1F3FD-200D-2640-FE0F","non_qualified":"26F9-1F3FD-200D-2640","image":"26f9-1f3fd-200d-2640-fe0f.png","sheet_x":54,"sheet_y":22,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"26F9-1F3FE-200D-2640-FE0F","non_qualified":"26F9-1F3FE-200D-2640","image":"26f9-1f3fe-200d-2640-fe0f.png","sheet_x":54,"sheet_y":23,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"26F9-1F3FF-200D-2640-FE0F","non_qualified":"26F9-1F3FF-200D-2640","image":"26f9-1f3ff-200d-2640-fe0f.png","sheet_x":54,"sheet_y":24,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Bouncing Ball","b":"26F9-FE0F-200D-2640-FE0F","d":true,"e":true,"f":true,"h":false,"k":[54,19],"o":4},"flag-za":{"a":"South Africa Flag","b":"1F1FF-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[5,1],"o":2},"flag-zm":{"a":"Zambia Flag","b":"1F1FF-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[5,2],"o":2},"weight_lifter":{"skin_variations":{"1F3FB":{"unified":"1F3CB-1F3FB","non_qualified":null,"image":"1f3cb-1f3fb.png","sheet_x":10,"sheet_y":9,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F3CB-1F3FC","non_qualified":null,"image":"1f3cb-1f3fc.png","sheet_x":10,"sheet_y":10,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F3CB-1F3FD","non_qualified":null,"image":"1f3cb-1f3fd.png","sheet_x":10,"sheet_y":11,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F3CB-1F3FE","non_qualified":null,"image":"1f3cb-1f3fe.png","sheet_x":10,"sheet_y":12,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F3CB-1F3FF","non_qualified":null,"image":"1f3cb-1f3ff.png","sheet_x":10,"sheet_y":13,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F3CB-FE0F-200D-2642-FE0F","a":"Weight Lifter","b":"1F3CB-FE0F","c":"1F3CB","d":true,"e":true,"f":true,"h":false,"k":[10,8],"o":2},"man-lifting-weights":{"skin_variations":{"1F3FB":{"unified":"1F3CB-1F3FB-200D-2642-FE0F","non_qualified":"1F3CB-1F3FB-200D-2642","image":"1f3cb-1f3fb-200d-2642-fe0f.png","sheet_x":10,"sheet_y":3,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F3CB-1F3FC-200D-2642-FE0F","non_qualified":"1F3CB-1F3FC-200D-2642","image":"1f3cb-1f3fc-200d-2642-fe0f.png","sheet_x":10,"sheet_y":4,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F3CB-1F3FD-200D-2642-FE0F","non_qualified":"1F3CB-1F3FD-200D-2642","image":"1f3cb-1f3fd-200d-2642-fe0f.png","sheet_x":10,"sheet_y":5,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F3CB-1F3FE-200D-2642-FE0F","non_qualified":"1F3CB-1F3FE-200D-2642","image":"1f3cb-1f3fe-200d-2642-fe0f.png","sheet_x":10,"sheet_y":6,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F3CB-1F3FF-200D-2642-FE0F","non_qualified":"1F3CB-1F3FF-200D-2642","image":"1f3cb-1f3ff-200d-2642-fe0f.png","sheet_x":10,"sheet_y":7,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F3CB-FE0F","a":"Man Lifting Weights","b":"1F3CB-FE0F-200D-2642-FE0F","d":true,"e":true,"f":true,"h":false,"k":[10,2],"o":4},"flag-zw":{"a":"Zimbabwe Flag","b":"1F1FF-1F1FC","d":true,"e":true,"f":true,"h":true,"k":[5,3],"o":2},"woman-lifting-weights":{"skin_variations":{"1F3FB":{"unified":"1F3CB-1F3FB-200D-2640-FE0F","non_qualified":"1F3CB-1F3FB-200D-2640","image":"1f3cb-1f3fb-200d-2640-fe0f.png","sheet_x":9,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F3CB-1F3FC-200D-2640-FE0F","non_qualified":"1F3CB-1F3FC-200D-2640","image":"1f3cb-1f3fc-200d-2640-fe0f.png","sheet_x":9,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F3CB-1F3FD-200D-2640-FE0F","non_qualified":"1F3CB-1F3FD-200D-2640","image":"1f3cb-1f3fd-200d-2640-fe0f.png","sheet_x":9,"sheet_y":56,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F3CB-1F3FE-200D-2640-FE0F","non_qualified":"1F3CB-1F3FE-200D-2640","image":"1f3cb-1f3fe-200d-2640-fe0f.png","sheet_x":10,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F3CB-1F3FF-200D-2640-FE0F","non_qualified":"1F3CB-1F3FF-200D-2640","image":"1f3cb-1f3ff-200d-2640-fe0f.png","sheet_x":10,"sheet_y":1,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Lifting Weights","b":"1F3CB-FE0F-200D-2640-FE0F","d":true,"e":true,"f":true,"h":false,"k":[9,53],"o":4},"flag-england":{"a":"England Flag","b":"1F3F4-E0067-E0062-E0065-E006E-E0067-E007F","d":true,"e":true,"f":true,"h":true,"k":[11,14],"o":5},"bicyclist":{"skin_variations":{"1F3FB":{"unified":"1F6B4-1F3FB","non_qualified":null,"image":"1f6b4-1f3fb.png","sheet_x":35,"sheet_y":24,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F6B4-1F3FC","non_qualified":null,"image":"1f6b4-1f3fc.png","sheet_x":35,"sheet_y":25,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F6B4-1F3FD","non_qualified":null,"image":"1f6b4-1f3fd.png","sheet_x":35,"sheet_y":26,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F6B4-1F3FE","non_qualified":null,"image":"1f6b4-1f3fe.png","sheet_x":35,"sheet_y":27,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F6B4-1F3FF","non_qualified":null,"image":"1f6b4-1f3ff.png","sheet_x":35,"sheet_y":28,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F6B4-200D-2642-FE0F","a":"Bicyclist","b":"1F6B4","d":true,"e":true,"f":true,"h":false,"k":[35,23],"o":2},"flag-scotland":{"a":"Scotland Flag","b":"1F3F4-E0067-E0062-E0073-E0063-E0074-E007F","d":true,"e":true,"f":true,"h":true,"k":[11,15],"o":5},"flag-wales":{"a":"Wales Flag","b":"1F3F4-E0067-E0062-E0077-E006C-E0073-E007F","d":true,"e":true,"f":true,"h":true,"k":[11,16],"o":5},"man-biking":{"skin_variations":{"1F3FB":{"unified":"1F6B4-1F3FB-200D-2642-FE0F","non_qualified":"1F6B4-1F3FB-200D-2642","image":"1f6b4-1f3fb-200d-2642-fe0f.png","sheet_x":35,"sheet_y":18,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F6B4-1F3FC-200D-2642-FE0F","non_qualified":"1F6B4-1F3FC-200D-2642","image":"1f6b4-1f3fc-200d-2642-fe0f.png","sheet_x":35,"sheet_y":19,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F6B4-1F3FD-200D-2642-FE0F","non_qualified":"1F6B4-1F3FD-200D-2642","image":"1f6b4-1f3fd-200d-2642-fe0f.png","sheet_x":35,"sheet_y":20,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F6B4-1F3FE-200D-2642-FE0F","non_qualified":"1F6B4-1F3FE-200D-2642","image":"1f6b4-1f3fe-200d-2642-fe0f.png","sheet_x":35,"sheet_y":21,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F6B4-1F3FF-200D-2642-FE0F","non_qualified":"1F6B4-1F3FF-200D-2642","image":"1f6b4-1f3ff-200d-2642-fe0f.png","sheet_x":35,"sheet_y":22,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F6B4","a":"Man Biking","b":"1F6B4-200D-2642-FE0F","c":"1F6B4-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[35,17],"o":4},"woman-biking":{"skin_variations":{"1F3FB":{"unified":"1F6B4-1F3FB-200D-2640-FE0F","non_qualified":"1F6B4-1F3FB-200D-2640","image":"1f6b4-1f3fb-200d-2640-fe0f.png","sheet_x":35,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F6B4-1F3FC-200D-2640-FE0F","non_qualified":"1F6B4-1F3FC-200D-2640","image":"1f6b4-1f3fc-200d-2640-fe0f.png","sheet_x":35,"sheet_y":13,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F6B4-1F3FD-200D-2640-FE0F","non_qualified":"1F6B4-1F3FD-200D-2640","image":"1f6b4-1f3fd-200d-2640-fe0f.png","sheet_x":35,"sheet_y":14,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F6B4-1F3FE-200D-2640-FE0F","non_qualified":"1F6B4-1F3FE-200D-2640","image":"1f6b4-1f3fe-200d-2640-fe0f.png","sheet_x":35,"sheet_y":15,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F6B4-1F3FF-200D-2640-FE0F","non_qualified":"1F6B4-1F3FF-200D-2640","image":"1f6b4-1f3ff-200d-2640-fe0f.png","sheet_x":35,"sheet_y":16,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Biking","b":"1F6B4-200D-2640-FE0F","c":"1F6B4-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[35,11],"o":4},"mountain_bicyclist":{"skin_variations":{"1F3FB":{"unified":"1F6B5-1F3FB","non_qualified":null,"image":"1f6b5-1f3fb.png","sheet_x":35,"sheet_y":42,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F6B5-1F3FC","non_qualified":null,"image":"1f6b5-1f3fc.png","sheet_x":35,"sheet_y":43,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F6B5-1F3FD","non_qualified":null,"image":"1f6b5-1f3fd.png","sheet_x":35,"sheet_y":44,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F6B5-1F3FE","non_qualified":null,"image":"1f6b5-1f3fe.png","sheet_x":35,"sheet_y":45,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F6B5-1F3FF","non_qualified":null,"image":"1f6b5-1f3ff.png","sheet_x":35,"sheet_y":46,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F6B5-200D-2642-FE0F","a":"Mountain Bicyclist","b":"1F6B5","d":true,"e":true,"f":true,"h":false,"k":[35,41],"o":2},"man-mountain-biking":{"skin_variations":{"1F3FB":{"unified":"1F6B5-1F3FB-200D-2642-FE0F","non_qualified":"1F6B5-1F3FB-200D-2642","image":"1f6b5-1f3fb-200d-2642-fe0f.png","sheet_x":35,"sheet_y":36,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F6B5-1F3FC-200D-2642-FE0F","non_qualified":"1F6B5-1F3FC-200D-2642","image":"1f6b5-1f3fc-200d-2642-fe0f.png","sheet_x":35,"sheet_y":37,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F6B5-1F3FD-200D-2642-FE0F","non_qualified":"1F6B5-1F3FD-200D-2642","image":"1f6b5-1f3fd-200d-2642-fe0f.png","sheet_x":35,"sheet_y":38,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F6B5-1F3FE-200D-2642-FE0F","non_qualified":"1F6B5-1F3FE-200D-2642","image":"1f6b5-1f3fe-200d-2642-fe0f.png","sheet_x":35,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F6B5-1F3FF-200D-2642-FE0F","non_qualified":"1F6B5-1F3FF-200D-2642","image":"1f6b5-1f3ff-200d-2642-fe0f.png","sheet_x":35,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F6B5","a":"Man Mountain Biking","b":"1F6B5-200D-2642-FE0F","c":"1F6B5-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[35,35],"o":4},"woman-mountain-biking":{"skin_variations":{"1F3FB":{"unified":"1F6B5-1F3FB-200D-2640-FE0F","non_qualified":"1F6B5-1F3FB-200D-2640","image":"1f6b5-1f3fb-200d-2640-fe0f.png","sheet_x":35,"sheet_y":30,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F6B5-1F3FC-200D-2640-FE0F","non_qualified":"1F6B5-1F3FC-200D-2640","image":"1f6b5-1f3fc-200d-2640-fe0f.png","sheet_x":35,"sheet_y":31,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F6B5-1F3FD-200D-2640-FE0F","non_qualified":"1F6B5-1F3FD-200D-2640","image":"1f6b5-1f3fd-200d-2640-fe0f.png","sheet_x":35,"sheet_y":32,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F6B5-1F3FE-200D-2640-FE0F","non_qualified":"1F6B5-1F3FE-200D-2640","image":"1f6b5-1f3fe-200d-2640-fe0f.png","sheet_x":35,"sheet_y":33,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F6B5-1F3FF-200D-2640-FE0F","non_qualified":"1F6B5-1F3FF-200D-2640","image":"1f6b5-1f3ff-200d-2640-fe0f.png","sheet_x":35,"sheet_y":34,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Mountain Biking","b":"1F6B5-200D-2640-FE0F","c":"1F6B5-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[35,29],"o":4},"person_doing_cartwheel":{"skin_variations":{"1F3FB":{"unified":"1F938-1F3FB","non_qualified":null,"image":"1f938-1f3fb.png","sheet_x":40,"sheet_y":9,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F938-1F3FC","non_qualified":null,"image":"1f938-1f3fc.png","sheet_x":40,"sheet_y":10,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F938-1F3FD","non_qualified":null,"image":"1f938-1f3fd.png","sheet_x":40,"sheet_y":11,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F938-1F3FE","non_qualified":null,"image":"1f938-1f3fe.png","sheet_x":40,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F938-1F3FF","non_qualified":null,"image":"1f938-1f3ff.png","sheet_x":40,"sheet_y":13,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"a":"Person Doing Cartwheel","b":"1F938","d":true,"e":true,"f":true,"h":false,"k":[40,8],"o":4},"man-cartwheeling":{"skin_variations":{"1F3FB":{"unified":"1F938-1F3FB-200D-2642-FE0F","non_qualified":"1F938-1F3FB-200D-2642","image":"1f938-1f3fb-200d-2642-fe0f.png","sheet_x":40,"sheet_y":3,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F938-1F3FC-200D-2642-FE0F","non_qualified":"1F938-1F3FC-200D-2642","image":"1f938-1f3fc-200d-2642-fe0f.png","sheet_x":40,"sheet_y":4,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F938-1F3FD-200D-2642-FE0F","non_qualified":"1F938-1F3FD-200D-2642","image":"1f938-1f3fd-200d-2642-fe0f.png","sheet_x":40,"sheet_y":5,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F938-1F3FE-200D-2642-FE0F","non_qualified":"1F938-1F3FE-200D-2642","image":"1f938-1f3fe-200d-2642-fe0f.png","sheet_x":40,"sheet_y":6,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F938-1F3FF-200D-2642-FE0F","non_qualified":"1F938-1F3FF-200D-2642","image":"1f938-1f3ff-200d-2642-fe0f.png","sheet_x":40,"sheet_y":7,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Cartwheeling","b":"1F938-200D-2642-FE0F","c":"1F938-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[40,2],"o":4},"woman-cartwheeling":{"skin_variations":{"1F3FB":{"unified":"1F938-1F3FB-200D-2640-FE0F","non_qualified":"1F938-1F3FB-200D-2640","image":"1f938-1f3fb-200d-2640-fe0f.png","sheet_x":39,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F938-1F3FC-200D-2640-FE0F","non_qualified":"1F938-1F3FC-200D-2640","image":"1f938-1f3fc-200d-2640-fe0f.png","sheet_x":39,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F938-1F3FD-200D-2640-FE0F","non_qualified":"1F938-1F3FD-200D-2640","image":"1f938-1f3fd-200d-2640-fe0f.png","sheet_x":39,"sheet_y":56,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F938-1F3FE-200D-2640-FE0F","non_qualified":"1F938-1F3FE-200D-2640","image":"1f938-1f3fe-200d-2640-fe0f.png","sheet_x":40,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F938-1F3FF-200D-2640-FE0F","non_qualified":"1F938-1F3FF-200D-2640","image":"1f938-1f3ff-200d-2640-fe0f.png","sheet_x":40,"sheet_y":1,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Cartwheeling","b":"1F938-200D-2640-FE0F","c":"1F938-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[39,53],"o":4},"wrestlers":{"a":"Wrestlers","b":"1F93C","d":true,"e":true,"f":true,"h":true,"k":[40,35],"o":4},"man-wrestling":{"a":"Man Wrestling","b":"1F93C-200D-2642-FE0F","c":"1F93C-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[40,34],"o":4},"woman-wrestling":{"a":"Woman Wrestling","b":"1F93C-200D-2640-FE0F","c":"1F93C-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[40,33],"o":4},"water_polo":{"skin_variations":{"1F3FB":{"unified":"1F93D-1F3FB","non_qualified":null,"image":"1f93d-1f3fb.png","sheet_x":40,"sheet_y":49,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F93D-1F3FC","non_qualified":null,"image":"1f93d-1f3fc.png","sheet_x":40,"sheet_y":50,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F93D-1F3FD","non_qualified":null,"image":"1f93d-1f3fd.png","sheet_x":40,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F93D-1F3FE","non_qualified":null,"image":"1f93d-1f3fe.png","sheet_x":40,"sheet_y":52,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F93D-1F3FF","non_qualified":null,"image":"1f93d-1f3ff.png","sheet_x":40,"sheet_y":53,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"a":"Water Polo","b":"1F93D","d":true,"e":true,"f":true,"h":false,"k":[40,48],"o":4},"man-playing-water-polo":{"skin_variations":{"1F3FB":{"unified":"1F93D-1F3FB-200D-2642-FE0F","non_qualified":"1F93D-1F3FB-200D-2642","image":"1f93d-1f3fb-200d-2642-fe0f.png","sheet_x":40,"sheet_y":43,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F93D-1F3FC-200D-2642-FE0F","non_qualified":"1F93D-1F3FC-200D-2642","image":"1f93d-1f3fc-200d-2642-fe0f.png","sheet_x":40,"sheet_y":44,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F93D-1F3FD-200D-2642-FE0F","non_qualified":"1F93D-1F3FD-200D-2642","image":"1f93d-1f3fd-200d-2642-fe0f.png","sheet_x":40,"sheet_y":45,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F93D-1F3FE-200D-2642-FE0F","non_qualified":"1F93D-1F3FE-200D-2642","image":"1f93d-1f3fe-200d-2642-fe0f.png","sheet_x":40,"sheet_y":46,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F93D-1F3FF-200D-2642-FE0F","non_qualified":"1F93D-1F3FF-200D-2642","image":"1f93d-1f3ff-200d-2642-fe0f.png","sheet_x":40,"sheet_y":47,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Playing Water Polo","b":"1F93D-200D-2642-FE0F","c":"1F93D-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[40,42],"o":4},"woman-playing-water-polo":{"skin_variations":{"1F3FB":{"unified":"1F93D-1F3FB-200D-2640-FE0F","non_qualified":"1F93D-1F3FB-200D-2640","image":"1f93d-1f3fb-200d-2640-fe0f.png","sheet_x":40,"sheet_y":37,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F93D-1F3FC-200D-2640-FE0F","non_qualified":"1F93D-1F3FC-200D-2640","image":"1f93d-1f3fc-200d-2640-fe0f.png","sheet_x":40,"sheet_y":38,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F93D-1F3FD-200D-2640-FE0F","non_qualified":"1F93D-1F3FD-200D-2640","image":"1f93d-1f3fd-200d-2640-fe0f.png","sheet_x":40,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F93D-1F3FE-200D-2640-FE0F","non_qualified":"1F93D-1F3FE-200D-2640","image":"1f93d-1f3fe-200d-2640-fe0f.png","sheet_x":40,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F93D-1F3FF-200D-2640-FE0F","non_qualified":"1F93D-1F3FF-200D-2640","image":"1f93d-1f3ff-200d-2640-fe0f.png","sheet_x":40,"sheet_y":41,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Playing Water Polo","b":"1F93D-200D-2640-FE0F","c":"1F93D-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[40,36],"o":4},"handball":{"skin_variations":{"1F3FB":{"unified":"1F93E-1F3FB","non_qualified":null,"image":"1f93e-1f3fb.png","sheet_x":41,"sheet_y":10,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F93E-1F3FC","non_qualified":null,"image":"1f93e-1f3fc.png","sheet_x":41,"sheet_y":11,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F93E-1F3FD","non_qualified":null,"image":"1f93e-1f3fd.png","sheet_x":41,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F93E-1F3FE","non_qualified":null,"image":"1f93e-1f3fe.png","sheet_x":41,"sheet_y":13,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F93E-1F3FF","non_qualified":null,"image":"1f93e-1f3ff.png","sheet_x":41,"sheet_y":14,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"a":"Handball","b":"1F93E","d":true,"e":true,"f":true,"h":false,"k":[41,9],"o":4},"man-playing-handball":{"skin_variations":{"1F3FB":{"unified":"1F93E-1F3FB-200D-2642-FE0F","non_qualified":"1F93E-1F3FB-200D-2642","image":"1f93e-1f3fb-200d-2642-fe0f.png","sheet_x":41,"sheet_y":4,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F93E-1F3FC-200D-2642-FE0F","non_qualified":"1F93E-1F3FC-200D-2642","image":"1f93e-1f3fc-200d-2642-fe0f.png","sheet_x":41,"sheet_y":5,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F93E-1F3FD-200D-2642-FE0F","non_qualified":"1F93E-1F3FD-200D-2642","image":"1f93e-1f3fd-200d-2642-fe0f.png","sheet_x":41,"sheet_y":6,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F93E-1F3FE-200D-2642-FE0F","non_qualified":"1F93E-1F3FE-200D-2642","image":"1f93e-1f3fe-200d-2642-fe0f.png","sheet_x":41,"sheet_y":7,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F93E-1F3FF-200D-2642-FE0F","non_qualified":"1F93E-1F3FF-200D-2642","image":"1f93e-1f3ff-200d-2642-fe0f.png","sheet_x":41,"sheet_y":8,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Playing Handball","b":"1F93E-200D-2642-FE0F","c":"1F93E-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[41,3],"o":4},"woman-playing-handball":{"skin_variations":{"1F3FB":{"unified":"1F93E-1F3FB-200D-2640-FE0F","non_qualified":"1F93E-1F3FB-200D-2640","image":"1f93e-1f3fb-200d-2640-fe0f.png","sheet_x":40,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F93E-1F3FC-200D-2640-FE0F","non_qualified":"1F93E-1F3FC-200D-2640","image":"1f93e-1f3fc-200d-2640-fe0f.png","sheet_x":40,"sheet_y":56,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F93E-1F3FD-200D-2640-FE0F","non_qualified":"1F93E-1F3FD-200D-2640","image":"1f93e-1f3fd-200d-2640-fe0f.png","sheet_x":41,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F93E-1F3FE-200D-2640-FE0F","non_qualified":"1F93E-1F3FE-200D-2640","image":"1f93e-1f3fe-200d-2640-fe0f.png","sheet_x":41,"sheet_y":1,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F93E-1F3FF-200D-2640-FE0F","non_qualified":"1F93E-1F3FF-200D-2640","image":"1f93e-1f3ff-200d-2640-fe0f.png","sheet_x":41,"sheet_y":2,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Playing Handball","b":"1F93E-200D-2640-FE0F","c":"1F93E-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[40,54],"o":4},"juggling":{"skin_variations":{"1F3FB":{"unified":"1F939-1F3FB","non_qualified":null,"image":"1f939-1f3fb.png","sheet_x":40,"sheet_y":27,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F939-1F3FC","non_qualified":null,"image":"1f939-1f3fc.png","sheet_x":40,"sheet_y":28,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F939-1F3FD","non_qualified":null,"image":"1f939-1f3fd.png","sheet_x":40,"sheet_y":29,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F939-1F3FE","non_qualified":null,"image":"1f939-1f3fe.png","sheet_x":40,"sheet_y":30,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F939-1F3FF","non_qualified":null,"image":"1f939-1f3ff.png","sheet_x":40,"sheet_y":31,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Juggling","b":"1F939","d":true,"e":true,"f":true,"h":true,"k":[40,26],"o":4},"man-juggling":{"skin_variations":{"1F3FB":{"unified":"1F939-1F3FB-200D-2642-FE0F","non_qualified":"1F939-1F3FB-200D-2642","image":"1f939-1f3fb-200d-2642-fe0f.png","sheet_x":40,"sheet_y":21,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F939-1F3FC-200D-2642-FE0F","non_qualified":"1F939-1F3FC-200D-2642","image":"1f939-1f3fc-200d-2642-fe0f.png","sheet_x":40,"sheet_y":22,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F939-1F3FD-200D-2642-FE0F","non_qualified":"1F939-1F3FD-200D-2642","image":"1f939-1f3fd-200d-2642-fe0f.png","sheet_x":40,"sheet_y":23,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F939-1F3FE-200D-2642-FE0F","non_qualified":"1F939-1F3FE-200D-2642","image":"1f939-1f3fe-200d-2642-fe0f.png","sheet_x":40,"sheet_y":24,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F939-1F3FF-200D-2642-FE0F","non_qualified":"1F939-1F3FF-200D-2642","image":"1f939-1f3ff-200d-2642-fe0f.png","sheet_x":40,"sheet_y":25,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Juggling","b":"1F939-200D-2642-FE0F","c":"1F939-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[40,20],"o":4},"woman-juggling":{"skin_variations":{"1F3FB":{"unified":"1F939-1F3FB-200D-2640-FE0F","non_qualified":"1F939-1F3FB-200D-2640","image":"1f939-1f3fb-200d-2640-fe0f.png","sheet_x":40,"sheet_y":15,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F939-1F3FC-200D-2640-FE0F","non_qualified":"1F939-1F3FC-200D-2640","image":"1f939-1f3fc-200d-2640-fe0f.png","sheet_x":40,"sheet_y":16,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F939-1F3FD-200D-2640-FE0F","non_qualified":"1F939-1F3FD-200D-2640","image":"1f939-1f3fd-200d-2640-fe0f.png","sheet_x":40,"sheet_y":17,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F939-1F3FE-200D-2640-FE0F","non_qualified":"1F939-1F3FE-200D-2640","image":"1f939-1f3fe-200d-2640-fe0f.png","sheet_x":40,"sheet_y":18,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F939-1F3FF-200D-2640-FE0F","non_qualified":"1F939-1F3FF-200D-2640","image":"1f939-1f3ff-200d-2640-fe0f.png","sheet_x":40,"sheet_y":19,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Juggling","b":"1F939-200D-2640-FE0F","c":"1F939-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[40,14],"o":4},"person_in_lotus_position":{"skin_variations":{"1F3FB":{"unified":"1F9D8-1F3FB","non_qualified":null,"image":"1f9d8-1f3fb.png","sheet_x":49,"sheet_y":32,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D8-1F3FB-200D-2640-FE0F"},"1F3FC":{"unified":"1F9D8-1F3FC","non_qualified":null,"image":"1f9d8-1f3fc.png","sheet_x":49,"sheet_y":33,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D8-1F3FC-200D-2640-FE0F"},"1F3FD":{"unified":"1F9D8-1F3FD","non_qualified":null,"image":"1f9d8-1f3fd.png","sheet_x":49,"sheet_y":34,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D8-1F3FD-200D-2640-FE0F"},"1F3FE":{"unified":"1F9D8-1F3FE","non_qualified":null,"image":"1f9d8-1f3fe.png","sheet_x":49,"sheet_y":35,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D8-1F3FE-200D-2640-FE0F"},"1F3FF":{"unified":"1F9D8-1F3FF","non_qualified":null,"image":"1f9d8-1f3ff.png","sheet_x":49,"sheet_y":36,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D8-1F3FF-200D-2640-FE0F"}},"obsoleted_by":"1F9D8-200D-2640-FE0F","a":"Person in Lotus Position","b":"1F9D8","d":true,"e":true,"f":true,"h":true,"k":[49,31],"o":5},"man_in_lotus_position":{"skin_variations":{"1F3FB":{"unified":"1F9D8-1F3FB-200D-2642-FE0F","non_qualified":"1F9D8-1F3FB-200D-2642","image":"1f9d8-1f3fb-200d-2642-fe0f.png","sheet_x":49,"sheet_y":26,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9D8-1F3FC-200D-2642-FE0F","non_qualified":"1F9D8-1F3FC-200D-2642","image":"1f9d8-1f3fc-200d-2642-fe0f.png","sheet_x":49,"sheet_y":27,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9D8-1F3FD-200D-2642-FE0F","non_qualified":"1F9D8-1F3FD-200D-2642","image":"1f9d8-1f3fd-200d-2642-fe0f.png","sheet_x":49,"sheet_y":28,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9D8-1F3FE-200D-2642-FE0F","non_qualified":"1F9D8-1F3FE-200D-2642","image":"1f9d8-1f3fe-200d-2642-fe0f.png","sheet_x":49,"sheet_y":29,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9D8-1F3FF-200D-2642-FE0F","non_qualified":"1F9D8-1F3FF-200D-2642","image":"1f9d8-1f3ff-200d-2642-fe0f.png","sheet_x":49,"sheet_y":30,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man in Lotus Position","b":"1F9D8-200D-2642-FE0F","c":"1F9D8-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[49,25],"o":5},"woman_in_lotus_position":{"skin_variations":{"1F3FB":{"unified":"1F9D8-1F3FB-200D-2640-FE0F","non_qualified":"1F9D8-1F3FB-200D-2640","image":"1f9d8-1f3fb-200d-2640-fe0f.png","sheet_x":49,"sheet_y":20,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D8-1F3FB"},"1F3FC":{"unified":"1F9D8-1F3FC-200D-2640-FE0F","non_qualified":"1F9D8-1F3FC-200D-2640","image":"1f9d8-1f3fc-200d-2640-fe0f.png","sheet_x":49,"sheet_y":21,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D8-1F3FC"},"1F3FD":{"unified":"1F9D8-1F3FD-200D-2640-FE0F","non_qualified":"1F9D8-1F3FD-200D-2640","image":"1f9d8-1f3fd-200d-2640-fe0f.png","sheet_x":49,"sheet_y":22,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D8-1F3FD"},"1F3FE":{"unified":"1F9D8-1F3FE-200D-2640-FE0F","non_qualified":"1F9D8-1F3FE-200D-2640","image":"1f9d8-1f3fe-200d-2640-fe0f.png","sheet_x":49,"sheet_y":23,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D8-1F3FE"},"1F3FF":{"unified":"1F9D8-1F3FF-200D-2640-FE0F","non_qualified":"1F9D8-1F3FF-200D-2640","image":"1f9d8-1f3ff-200d-2640-fe0f.png","sheet_x":49,"sheet_y":24,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D8-1F3FF"}},"obsoletes":"1F9D8","a":"Woman in Lotus Position","b":"1F9D8-200D-2640-FE0F","c":"1F9D8-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[49,19],"o":5},"bath":{"skin_variations":{"1F3FB":{"unified":"1F6C0-1F3FB","non_qualified":null,"image":"1f6c0-1f3fb.png","sheet_x":36,"sheet_y":18,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F6C0-1F3FC","non_qualified":null,"image":"1f6c0-1f3fc.png","sheet_x":36,"sheet_y":19,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F6C0-1F3FD","non_qualified":null,"image":"1f6c0-1f3fd.png","sheet_x":36,"sheet_y":20,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F6C0-1F3FE","non_qualified":null,"image":"1f6c0-1f3fe.png","sheet_x":36,"sheet_y":21,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F6C0-1F3FF","non_qualified":null,"image":"1f6c0-1f3ff.png","sheet_x":36,"sheet_y":22,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Bath","b":"1F6C0","d":true,"e":true,"f":true,"h":true,"j":["clean","shower","bathroom"],"k":[36,17],"o":2},"sleeping_accommodation":{"skin_variations":{"1F3FB":{"unified":"1F6CC-1F3FB","non_qualified":null,"image":"1f6cc-1f3fb.png","sheet_x":36,"sheet_y":30,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F6CC-1F3FC","non_qualified":null,"image":"1f6cc-1f3fc.png","sheet_x":36,"sheet_y":31,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F6CC-1F3FD","non_qualified":null,"image":"1f6cc-1f3fd.png","sheet_x":36,"sheet_y":32,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F6CC-1F3FE","non_qualified":null,"image":"1f6cc-1f3fe.png","sheet_x":36,"sheet_y":33,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F6CC-1F3FF","non_qualified":null,"image":"1f6cc-1f3ff.png","sheet_x":36,"sheet_y":34,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Sleeping Accommodation","b":"1F6CC","d":true,"e":true,"f":true,"h":true,"k":[36,29],"o":2},"people_holding_hands":{"skin_variations":{"1F3FB-1F3FB":{"unified":"1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FB","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb.png","sheet_x":46,"sheet_y":39,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FB-1F3FC":{"unified":"1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FC","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fc.png","sheet_x":46,"sheet_y":40,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FB-1F3FD":{"unified":"1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FD","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fd.png","sheet_x":46,"sheet_y":41,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FB-1F3FE":{"unified":"1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FE","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fe.png","sheet_x":46,"sheet_y":42,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FB-1F3FF":{"unified":"1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FF","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3ff.png","sheet_x":46,"sheet_y":43,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FC-1F3FB":{"unified":"1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FB","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb.png","sheet_x":46,"sheet_y":44,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC-1F3FC":{"unified":"1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FC","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc.png","sheet_x":46,"sheet_y":45,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC-1F3FD":{"unified":"1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FD","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fd.png","sheet_x":46,"sheet_y":46,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FC-1F3FE":{"unified":"1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FE","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fe.png","sheet_x":46,"sheet_y":47,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FC-1F3FF":{"unified":"1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FF","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3ff.png","sheet_x":46,"sheet_y":48,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FD-1F3FB":{"unified":"1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FB","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb.png","sheet_x":46,"sheet_y":49,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD-1F3FC":{"unified":"1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FC","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc.png","sheet_x":46,"sheet_y":50,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD-1F3FD":{"unified":"1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FD","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd.png","sheet_x":46,"sheet_y":51,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD-1F3FE":{"unified":"1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FE","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fe.png","sheet_x":46,"sheet_y":52,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FD-1F3FF":{"unified":"1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FF","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3ff.png","sheet_x":46,"sheet_y":53,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FE-1F3FB":{"unified":"1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FB","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb.png","sheet_x":46,"sheet_y":54,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FC":{"unified":"1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FC","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc.png","sheet_x":46,"sheet_y":55,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FD":{"unified":"1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FD","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd.png","sheet_x":46,"sheet_y":56,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FE":{"unified":"1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FE","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe.png","sheet_x":47,"sheet_y":0,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FF":{"unified":"1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FF","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3ff.png","sheet_x":47,"sheet_y":1,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FF-1F3FB":{"unified":"1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FB","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb.png","sheet_x":47,"sheet_y":2,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FC":{"unified":"1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FC","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc.png","sheet_x":47,"sheet_y":3,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FD":{"unified":"1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FD","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd.png","sheet_x":47,"sheet_y":4,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FE":{"unified":"1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FE","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe.png","sheet_x":47,"sheet_y":5,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FF":{"unified":"1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FF","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff.png","sheet_x":47,"sheet_y":6,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"People Holding Hands","b":"1F9D1-200D-1F91D-200D-1F9D1","d":true,"e":true,"f":true,"h":true,"k":[46,38],"o":12},"two_women_holding_hands":{"skin_variations":{"1F3FB":{"unified":"1F46D-1F3FB","non_qualified":null,"image":"1f46d-1f3fb.png","sheet_x":21,"sheet_y":12,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F46D-1F3FC","non_qualified":null,"image":"1f46d-1f3fc.png","sheet_x":21,"sheet_y":13,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F46D-1F3FD","non_qualified":null,"image":"1f46d-1f3fd.png","sheet_x":21,"sheet_y":14,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F46D-1F3FE","non_qualified":null,"image":"1f46d-1f3fe.png","sheet_x":21,"sheet_y":15,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F46D-1F3FF","non_qualified":null,"image":"1f46d-1f3ff.png","sheet_x":21,"sheet_y":16,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FB-1F3FC":{"unified":"1F469-1F3FB-200D-1F91D-200D-1F469-1F3FC","non_qualified":null,"image":"1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc.png","sheet_x":21,"sheet_y":17,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FB-1F3FD":{"unified":"1F469-1F3FB-200D-1F91D-200D-1F469-1F3FD","non_qualified":null,"image":"1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd.png","sheet_x":21,"sheet_y":18,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FB-1F3FE":{"unified":"1F469-1F3FB-200D-1F91D-200D-1F469-1F3FE","non_qualified":null,"image":"1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe.png","sheet_x":21,"sheet_y":19,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FB-1F3FF":{"unified":"1F469-1F3FB-200D-1F91D-200D-1F469-1F3FF","non_qualified":null,"image":"1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff.png","sheet_x":21,"sheet_y":20,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FC-1F3FB":{"unified":"1F469-1F3FC-200D-1F91D-200D-1F469-1F3FB","non_qualified":null,"image":"1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb.png","sheet_x":21,"sheet_y":21,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC-1F3FD":{"unified":"1F469-1F3FC-200D-1F91D-200D-1F469-1F3FD","non_qualified":null,"image":"1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd.png","sheet_x":21,"sheet_y":22,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FC-1F3FE":{"unified":"1F469-1F3FC-200D-1F91D-200D-1F469-1F3FE","non_qualified":null,"image":"1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe.png","sheet_x":21,"sheet_y":23,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FC-1F3FF":{"unified":"1F469-1F3FC-200D-1F91D-200D-1F469-1F3FF","non_qualified":null,"image":"1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff.png","sheet_x":21,"sheet_y":24,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FD-1F3FB":{"unified":"1F469-1F3FD-200D-1F91D-200D-1F469-1F3FB","non_qualified":null,"image":"1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb.png","sheet_x":21,"sheet_y":25,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD-1F3FC":{"unified":"1F469-1F3FD-200D-1F91D-200D-1F469-1F3FC","non_qualified":null,"image":"1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc.png","sheet_x":21,"sheet_y":26,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD-1F3FE":{"unified":"1F469-1F3FD-200D-1F91D-200D-1F469-1F3FE","non_qualified":null,"image":"1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe.png","sheet_x":21,"sheet_y":27,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FD-1F3FF":{"unified":"1F469-1F3FD-200D-1F91D-200D-1F469-1F3FF","non_qualified":null,"image":"1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff.png","sheet_x":21,"sheet_y":28,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FE-1F3FB":{"unified":"1F469-1F3FE-200D-1F91D-200D-1F469-1F3FB","non_qualified":null,"image":"1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb.png","sheet_x":21,"sheet_y":29,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FC":{"unified":"1F469-1F3FE-200D-1F91D-200D-1F469-1F3FC","non_qualified":null,"image":"1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc.png","sheet_x":21,"sheet_y":30,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FD":{"unified":"1F469-1F3FE-200D-1F91D-200D-1F469-1F3FD","non_qualified":null,"image":"1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd.png","sheet_x":21,"sheet_y":31,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FF":{"unified":"1F469-1F3FE-200D-1F91D-200D-1F469-1F3FF","non_qualified":null,"image":"1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff.png","sheet_x":21,"sheet_y":32,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FF-1F3FB":{"unified":"1F469-1F3FF-200D-1F91D-200D-1F469-1F3FB","non_qualified":null,"image":"1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb.png","sheet_x":21,"sheet_y":33,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FC":{"unified":"1F469-1F3FF-200D-1F91D-200D-1F469-1F3FC","non_qualified":null,"image":"1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc.png","sheet_x":21,"sheet_y":34,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FD":{"unified":"1F469-1F3FF-200D-1F91D-200D-1F469-1F3FD","non_qualified":null,"image":"1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd.png","sheet_x":21,"sheet_y":35,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FE":{"unified":"1F469-1F3FF-200D-1F91D-200D-1F469-1F3FE","non_qualified":null,"image":"1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe.png","sheet_x":21,"sheet_y":36,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Two Women Holding Hands","b":"1F46D","d":true,"e":true,"f":true,"h":true,"j":["pair","friendship","couple","love","like","female","people","human"],"k":[21,11],"n":["women_holding_hands"],"o":2},"couple":{"skin_variations":{"1F3FB":{"unified":"1F46B-1F3FB","non_qualified":null,"image":"1f46b-1f3fb.png","sheet_x":20,"sheet_y":17,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F46B-1F3FC","non_qualified":null,"image":"1f46b-1f3fc.png","sheet_x":20,"sheet_y":18,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F46B-1F3FD","non_qualified":null,"image":"1f46b-1f3fd.png","sheet_x":20,"sheet_y":19,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F46B-1F3FE","non_qualified":null,"image":"1f46b-1f3fe.png","sheet_x":20,"sheet_y":20,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F46B-1F3FF","non_qualified":null,"image":"1f46b-1f3ff.png","sheet_x":20,"sheet_y":21,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FB-1F3FC":{"unified":"1F469-1F3FB-200D-1F91D-200D-1F468-1F3FC","non_qualified":null,"image":"1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc.png","sheet_x":20,"sheet_y":22,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FB-1F3FD":{"unified":"1F469-1F3FB-200D-1F91D-200D-1F468-1F3FD","non_qualified":null,"image":"1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd.png","sheet_x":20,"sheet_y":23,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FB-1F3FE":{"unified":"1F469-1F3FB-200D-1F91D-200D-1F468-1F3FE","non_qualified":null,"image":"1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe.png","sheet_x":20,"sheet_y":24,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FB-1F3FF":{"unified":"1F469-1F3FB-200D-1F91D-200D-1F468-1F3FF","non_qualified":null,"image":"1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff.png","sheet_x":20,"sheet_y":25,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC-1F3FB":{"unified":"1F469-1F3FC-200D-1F91D-200D-1F468-1F3FB","non_qualified":null,"image":"1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb.png","sheet_x":20,"sheet_y":26,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC-1F3FD":{"unified":"1F469-1F3FC-200D-1F91D-200D-1F468-1F3FD","non_qualified":null,"image":"1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd.png","sheet_x":20,"sheet_y":27,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC-1F3FE":{"unified":"1F469-1F3FC-200D-1F91D-200D-1F468-1F3FE","non_qualified":null,"image":"1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe.png","sheet_x":20,"sheet_y":28,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC-1F3FF":{"unified":"1F469-1F3FC-200D-1F91D-200D-1F468-1F3FF","non_qualified":null,"image":"1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff.png","sheet_x":20,"sheet_y":29,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD-1F3FB":{"unified":"1F469-1F3FD-200D-1F91D-200D-1F468-1F3FB","non_qualified":null,"image":"1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb.png","sheet_x":20,"sheet_y":30,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD-1F3FC":{"unified":"1F469-1F3FD-200D-1F91D-200D-1F468-1F3FC","non_qualified":null,"image":"1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc.png","sheet_x":20,"sheet_y":31,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD-1F3FE":{"unified":"1F469-1F3FD-200D-1F91D-200D-1F468-1F3FE","non_qualified":null,"image":"1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe.png","sheet_x":20,"sheet_y":32,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD-1F3FF":{"unified":"1F469-1F3FD-200D-1F91D-200D-1F468-1F3FF","non_qualified":null,"image":"1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff.png","sheet_x":20,"sheet_y":33,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FB":{"unified":"1F469-1F3FE-200D-1F91D-200D-1F468-1F3FB","non_qualified":null,"image":"1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb.png","sheet_x":20,"sheet_y":34,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FC":{"unified":"1F469-1F3FE-200D-1F91D-200D-1F468-1F3FC","non_qualified":null,"image":"1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc.png","sheet_x":20,"sheet_y":35,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FD":{"unified":"1F469-1F3FE-200D-1F91D-200D-1F468-1F3FD","non_qualified":null,"image":"1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd.png","sheet_x":20,"sheet_y":36,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FF":{"unified":"1F469-1F3FE-200D-1F91D-200D-1F468-1F3FF","non_qualified":null,"image":"1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff.png","sheet_x":20,"sheet_y":37,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FB":{"unified":"1F469-1F3FF-200D-1F91D-200D-1F468-1F3FB","non_qualified":null,"image":"1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb.png","sheet_x":20,"sheet_y":38,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FC":{"unified":"1F469-1F3FF-200D-1F91D-200D-1F468-1F3FC","non_qualified":null,"image":"1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc.png","sheet_x":20,"sheet_y":39,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FD":{"unified":"1F469-1F3FF-200D-1F91D-200D-1F468-1F3FD","non_qualified":null,"image":"1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd.png","sheet_x":20,"sheet_y":40,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FE":{"unified":"1F469-1F3FF-200D-1F91D-200D-1F468-1F3FE","non_qualified":null,"image":"1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe.png","sheet_x":20,"sheet_y":41,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man and Woman Holding Hands","b":"1F46B","d":true,"e":true,"f":true,"h":true,"j":["pair","people","human","love","date","dating","like","affection","valentines","marriage"],"k":[20,16],"n":["man_and_woman_holding_hands","woman_and_man_holding_hands"],"o":2},"two_men_holding_hands":{"skin_variations":{"1F3FB":{"unified":"1F46C-1F3FB","non_qualified":null,"image":"1f46c-1f3fb.png","sheet_x":20,"sheet_y":43,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F46C-1F3FC","non_qualified":null,"image":"1f46c-1f3fc.png","sheet_x":20,"sheet_y":44,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F46C-1F3FD","non_qualified":null,"image":"1f46c-1f3fd.png","sheet_x":20,"sheet_y":45,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F46C-1F3FE","non_qualified":null,"image":"1f46c-1f3fe.png","sheet_x":20,"sheet_y":46,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F46C-1F3FF","non_qualified":null,"image":"1f46c-1f3ff.png","sheet_x":20,"sheet_y":47,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FB-1F3FC":{"unified":"1F468-1F3FB-200D-1F91D-200D-1F468-1F3FC","non_qualified":null,"image":"1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc.png","sheet_x":20,"sheet_y":48,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FB-1F3FD":{"unified":"1F468-1F3FB-200D-1F91D-200D-1F468-1F3FD","non_qualified":null,"image":"1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd.png","sheet_x":20,"sheet_y":49,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FB-1F3FE":{"unified":"1F468-1F3FB-200D-1F91D-200D-1F468-1F3FE","non_qualified":null,"image":"1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe.png","sheet_x":20,"sheet_y":50,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FB-1F3FF":{"unified":"1F468-1F3FB-200D-1F91D-200D-1F468-1F3FF","non_qualified":null,"image":"1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff.png","sheet_x":20,"sheet_y":51,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FC-1F3FB":{"unified":"1F468-1F3FC-200D-1F91D-200D-1F468-1F3FB","non_qualified":null,"image":"1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb.png","sheet_x":20,"sheet_y":52,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC-1F3FD":{"unified":"1F468-1F3FC-200D-1F91D-200D-1F468-1F3FD","non_qualified":null,"image":"1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd.png","sheet_x":20,"sheet_y":53,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FC-1F3FE":{"unified":"1F468-1F3FC-200D-1F91D-200D-1F468-1F3FE","non_qualified":null,"image":"1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe.png","sheet_x":20,"sheet_y":54,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FC-1F3FF":{"unified":"1F468-1F3FC-200D-1F91D-200D-1F468-1F3FF","non_qualified":null,"image":"1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff.png","sheet_x":20,"sheet_y":55,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FD-1F3FB":{"unified":"1F468-1F3FD-200D-1F91D-200D-1F468-1F3FB","non_qualified":null,"image":"1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb.png","sheet_x":20,"sheet_y":56,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD-1F3FC":{"unified":"1F468-1F3FD-200D-1F91D-200D-1F468-1F3FC","non_qualified":null,"image":"1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc.png","sheet_x":21,"sheet_y":0,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD-1F3FE":{"unified":"1F468-1F3FD-200D-1F91D-200D-1F468-1F3FE","non_qualified":null,"image":"1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe.png","sheet_x":21,"sheet_y":1,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FD-1F3FF":{"unified":"1F468-1F3FD-200D-1F91D-200D-1F468-1F3FF","non_qualified":null,"image":"1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff.png","sheet_x":21,"sheet_y":2,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FE-1F3FB":{"unified":"1F468-1F3FE-200D-1F91D-200D-1F468-1F3FB","non_qualified":null,"image":"1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb.png","sheet_x":21,"sheet_y":3,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FC":{"unified":"1F468-1F3FE-200D-1F91D-200D-1F468-1F3FC","non_qualified":null,"image":"1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc.png","sheet_x":21,"sheet_y":4,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FD":{"unified":"1F468-1F3FE-200D-1F91D-200D-1F468-1F3FD","non_qualified":null,"image":"1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd.png","sheet_x":21,"sheet_y":5,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FF":{"unified":"1F468-1F3FE-200D-1F91D-200D-1F468-1F3FF","non_qualified":null,"image":"1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff.png","sheet_x":21,"sheet_y":6,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FF-1F3FB":{"unified":"1F468-1F3FF-200D-1F91D-200D-1F468-1F3FB","non_qualified":null,"image":"1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb.png","sheet_x":21,"sheet_y":7,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FC":{"unified":"1F468-1F3FF-200D-1F91D-200D-1F468-1F3FC","non_qualified":null,"image":"1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc.png","sheet_x":21,"sheet_y":8,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FD":{"unified":"1F468-1F3FF-200D-1F91D-200D-1F468-1F3FD","non_qualified":null,"image":"1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd.png","sheet_x":21,"sheet_y":9,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FE":{"unified":"1F468-1F3FF-200D-1F91D-200D-1F468-1F3FE","non_qualified":null,"image":"1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe.png","sheet_x":21,"sheet_y":10,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Two Men Holding Hands","b":"1F46C","d":true,"e":true,"f":true,"h":true,"j":["pair","couple","love","like","bromance","friendship","people","human"],"k":[20,42],"n":["men_holding_hands"],"o":2},"couplekiss":{"obsoleted_by":"1F469-200D-2764-FE0F-200D-1F48B-200D-1F468","a":"Kiss","b":"1F48F","d":true,"e":true,"f":true,"h":true,"k":[25,25],"o":2},"woman-kiss-man":{"obsoletes":"1F48F","a":"Woman Kiss Man","b":"1F469-200D-2764-FE0F-200D-1F48B-200D-1F468","c":"1F469-200D-2764-200D-1F48B-200D-1F468","d":true,"e":true,"f":true,"h":true,"k":[20,7],"o":2},"man-kiss-man":{"a":"Man Kiss Man","b":"1F468-200D-2764-FE0F-200D-1F48B-200D-1F468","c":"1F468-200D-2764-200D-1F48B-200D-1F468","d":true,"e":true,"f":true,"h":true,"k":[17,21],"o":2},"woman-kiss-woman":{"a":"Woman Kiss Woman","b":"1F469-200D-2764-FE0F-200D-1F48B-200D-1F469","c":"1F469-200D-2764-200D-1F48B-200D-1F469","d":true,"e":true,"f":true,"h":true,"k":[20,8],"o":2},"couple_with_heart":{"obsoleted_by":"1F469-200D-2764-FE0F-200D-1F468","a":"Couple with Heart","b":"1F491","d":true,"e":true,"f":true,"h":true,"k":[25,27],"o":2},"woman-heart-man":{"obsoletes":"1F491","a":"Woman Heart Man","b":"1F469-200D-2764-FE0F-200D-1F468","c":"1F469-200D-2764-200D-1F468","d":true,"e":true,"f":true,"h":true,"k":[20,5],"o":2},"man-heart-man":{"a":"Man Heart Man","b":"1F468-200D-2764-FE0F-200D-1F468","c":"1F468-200D-2764-200D-1F468","d":true,"e":true,"f":true,"h":true,"k":[17,20],"o":2},"woman-heart-woman":{"a":"Woman Heart Woman","b":"1F469-200D-2764-FE0F-200D-1F469","c":"1F469-200D-2764-200D-1F469","d":true,"e":true,"f":true,"h":true,"k":[20,6],"o":2},"family":{"obsoleted_by":"1F468-200D-1F469-200D-1F466","a":"Family","b":"1F46A","d":true,"e":true,"f":true,"h":true,"k":[20,15],"n":["man-woman-boy"],"o":2},"man-woman-boy":{"obsoletes":"1F46A","a":"Man Woman Boy","b":"1F468-200D-1F469-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[15,33],"n":["family"],"o":2},"man-woman-girl":{"a":"Man Woman Girl","b":"1F468-200D-1F469-200D-1F467","d":true,"e":true,"f":true,"h":true,"k":[15,35],"o":2},"man-woman-girl-boy":{"a":"Man Woman Girl Boy","b":"1F468-200D-1F469-200D-1F467-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[15,36],"o":2},"man-woman-boy-boy":{"a":"Man Woman Boy Boy","b":"1F468-200D-1F469-200D-1F466-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[15,34],"o":2},"man-woman-girl-girl":{"a":"Man Woman Girl Girl","b":"1F468-200D-1F469-200D-1F467-200D-1F467","d":true,"e":true,"f":true,"h":true,"k":[15,37],"o":2},"man-man-boy":{"a":"Man Man Boy","b":"1F468-200D-1F468-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[15,28],"o":2},"man-man-girl":{"a":"Man Man Girl","b":"1F468-200D-1F468-200D-1F467","d":true,"e":true,"f":true,"h":true,"k":[15,30],"o":2},"man-man-girl-boy":{"a":"Man Man Girl Boy","b":"1F468-200D-1F468-200D-1F467-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[15,31],"o":2},"man-man-boy-boy":{"a":"Man Man Boy Boy","b":"1F468-200D-1F468-200D-1F466-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[15,29],"o":2},"man-man-girl-girl":{"a":"Man Man Girl Girl","b":"1F468-200D-1F468-200D-1F467-200D-1F467","d":true,"e":true,"f":true,"h":true,"k":[15,32],"o":2},"woman-woman-boy":{"a":"Woman Woman Boy","b":"1F469-200D-1F469-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[18,18],"o":2},"woman-woman-girl":{"a":"Woman Woman Girl","b":"1F469-200D-1F469-200D-1F467","d":true,"e":true,"f":true,"h":true,"k":[18,20],"o":2},"woman-woman-girl-boy":{"a":"Woman Woman Girl Boy","b":"1F469-200D-1F469-200D-1F467-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[18,21],"o":2},"woman-woman-boy-boy":{"a":"Woman Woman Boy Boy","b":"1F469-200D-1F469-200D-1F466-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[18,19],"o":2},"woman-woman-girl-girl":{"a":"Woman Woman Girl Girl","b":"1F469-200D-1F469-200D-1F467-200D-1F467","d":true,"e":true,"f":true,"h":true,"k":[18,22],"o":2},"man-boy":{"a":"Man Boy","b":"1F468-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[15,24],"o":4},"man-boy-boy":{"a":"Man Boy Boy","b":"1F468-200D-1F466-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[15,23],"o":4},"man-girl":{"a":"Man Girl","b":"1F468-200D-1F467","d":true,"e":true,"f":true,"h":true,"k":[15,27],"o":4},"man-girl-boy":{"a":"Man Girl Boy","b":"1F468-200D-1F467-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[15,25],"o":4},"man-girl-girl":{"a":"Man Girl Girl","b":"1F468-200D-1F467-200D-1F467","d":true,"e":true,"f":true,"h":true,"k":[15,26],"o":4},"woman-boy":{"a":"Woman Boy","b":"1F469-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[18,14],"o":4},"woman-boy-boy":{"a":"Woman Boy Boy","b":"1F469-200D-1F466-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[18,13],"o":4},"woman-girl":{"a":"Woman Girl","b":"1F469-200D-1F467","d":true,"e":true,"f":true,"h":true,"k":[18,17],"o":4},"woman-girl-boy":{"a":"Woman Girl Boy","b":"1F469-200D-1F467-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[18,15],"o":4},"woman-girl-girl":{"a":"Woman Girl Girl","b":"1F469-200D-1F467-200D-1F467","d":true,"e":true,"f":true,"h":true,"k":[18,16],"o":4},"speaking_head_in_silhouette":{"a":"Speaking Head in Silhouette","b":"1F5E3-FE0F","c":"1F5E3","d":true,"e":true,"f":true,"h":true,"k":[30,25],"o":2},"bust_in_silhouette":{"a":"Bust in Silhouette","b":"1F464","d":true,"e":true,"f":true,"h":true,"j":["user","person","human"],"k":[14,24],"o":2},"busts_in_silhouette":{"a":"Busts in Silhouette","b":"1F465","d":true,"e":true,"f":true,"h":true,"j":["user","person","human","group","team"],"k":[14,25],"o":2},"footprints":{"a":"Footprints","b":"1F463","d":true,"e":true,"f":true,"h":true,"j":["feet","tracking","walking","beach"],"k":[14,23],"o":2}},"aliases":{"raised_hand":"hand","satisfied":"laughing","tshirt":"shirt","hand_with_index_and_middle_fingers_crossed":"crossed_fingers","sign_of_the_horns":"the_horns","grinning_face_with_star_eyes":"star-struck","reversed_hand_with_middle_finger_extended":"middle_finger","thumbsup":"+1","thumbsdown":"-1","punch":"facepunch","grinning_face_with_one_large_and_one_small_eye":"zany_face","shoe":"mans_shoe","smiling_face_with_smiling_eyes_and_hand_covering_mouth":"face_with_hand_over_mouth","face_with_finger_covering_closed_lips":"shushing_face","face_with_one_eyebrow_raised":"face_with_raised_eyebrow","face_with_open_mouth_vomiting":"face_vomiting","cooking":"fried_egg","flag-cn":"cn","shocked_face_with_exploding_head":"exploding_head","paw_prints":"feet","flag-de":"de","telephone":"phone","flag-es":"es","red_car":"car","flipper":"dolphin","flag-fr":"fr","uk":"gb","flag-gb":"gb","serious_face_with_symbols_covering_mouth":"face_with_symbols_on_mouth","poop":"hankey","shit":"hankey","honeybee":"bee","staff_of_aesculapius":"medical_symbol","lantern":"izakaya_lantern","open_book":"book","sailboat":"boat","knife":"hocho","flag-it":"it","heavy_exclamation_mark":"exclamation","flag-jp":"jp","envelope":"email","flag-kr":"kr","collision":"boom","pencil":"memo","waxing_gibbous_moon":"moon","mother_christmas":"mrs_claus","sun_small_cloud":"mostly_sunny","sun_behind_cloud":"barely_sunny","sun_behind_rain_cloud":"partly_sunny_rain","lightning_cloud":"lightning","tornado_cloud":"tornado","flag-ru":"ru","running":"runner","flag-us":"us","women_holding_hands":"two_women_holding_hands","man_and_woman_holding_hands":"couple","woman_and_man_holding_hands":"couple","men_holding_hands":"two_men_holding_hands","man-woman-boy":"family","family":"man-woman-boy"}};
},{}],"RYpE":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toEntries = toEntries;
exports.fromEntries = fromEntries;

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

function toEntries(obj) {
  var ownProps = Object.keys(obj);
  var i = ownProps.length;
  var resArray = new Array(i);

  while (i--) {
    resArray[i] = [ownProps[i], obj[ownProps[i]]];
  }

  return resArray;
}

function fromEntries(entries) {
  return entries.reduce(function (acc, _a) {
    var _b;

    var key = _a[0],
        value = _a[1];
    return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
  }, {});
}
},{}],"qHcg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEmojiData = getEmojiData;

var _all = _interopRequireDefault(require("emoji-mart/data/all.json"));

var _objectUtil = require("./objectUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = _all.default;

function getEmojiData(maxVersion) {
  return {
    aliases: data.aliases,
    categories: data.categories,
    emojis: filterEmojis(data.emojis, maxVersion),
    compressed: data.compressed
  };
}

function filterEmojis(emojis, maxVersion) {
  var result = {};
  (0, _objectUtil.toEntries)(emojis).forEach(function (_a) {
    var key = _a[0],
        value = _a[1];

    if (availableInVersion(value, maxVersion)) {
      result[key] = value;
    }
  });
  return result;
}

function availableInVersion(emoji, maxVersion) {
  return emoji.added_in == null || compareVersions(emoji.added_in, maxVersion) <= 0;
}

function compareVersions(a, b) {
  return versionStringToInt(a) - versionStringToInt(b);
}

function versionStringToInt(versionString) {
  if (!versionString) {
    return 0;
  }

  var parts = versionString.split('.');

  if (parts.length === 0) {
    return 0;
  }

  var value = parseInt(parts[0]) * 100;

  if (parts.length > 0) {
    value += parseInt(parts[1]);
  }

  return value;
}
},{"emoji-mart/data/all.json":"Wjva","./objectUtil":"RYpE"}],"qv5k":[function(require,module,exports) {
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

var _Display = require("./Display");

var _typestyle = require("typestyle");

var _emojiUtil = require("../util/emojiUtil");

var _charUtil = require("../util/charUtil");

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

var emojiData = (0, _emojiUtil.getEmojiData)('11.0');
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
      setBrush = _c[1]; // const handlePickerSelect = (emoji: BaseEmoji) => {
  //   console.log(emoji)
  //   setBrush(emoji.native)
  // }


  var handleCharacterClick = function handleCharacterClick(event) {
    console.log('character click', event);
    var nextState = (0, _immer.default)(stack, function (draft) {
      draft.lines[event.position[0]].characters[event.position[1]] = brush;
    });
    console.log('stack is', nextState);
    setStack(nextState);
    setCopied(false);
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
  }, _react.default.createElement(_Display.Display, {
    stack: stack,
    onCharacterClick: handleCharacterClick
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
  }), _react.default.createElement("div", null, "(MacOS tip: Hit Command-Ctrl-Space for emoji keyboard)"));
}
},{"react":"n8MK","immer":"SSrD","csstips":"pm94","emoji-mart/css/emoji-mart.css":"o6es","copy-to-clipboard":"xbqV","grapheme-splitter":"dWiE","./Display":"aOan","typestyle":"oehJ","../util/emojiUtil":"qHcg","../util/charUtil":"lqYF"}],"R3v4":[function(require,module,exports) {
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
//# sourceMappingURL=src.a6470a00.js.map
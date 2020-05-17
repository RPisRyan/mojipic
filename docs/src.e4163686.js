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

},{"./font":"l9Ao","./flex":"NHtu","./layer":"QFDa","./box":"giSd","./scroll":"AZoA","./display":"Sld3","./normalize":"I13i","./page":"sSpF"}],"Wjva":[function(require,module,exports) {
module.exports = {"compressed":true,"categories":[{"id":"people","name":"Smileys & People","emojis":["grinning","smiley","smile","grin","laughing","sweat_smile","rolling_on_the_floor_laughing","joy","slightly_smiling_face","upside_down_face","wink","blush","innocent","smiling_face_with_3_hearts","heart_eyes","star-struck","kissing_heart","kissing","relaxed","kissing_closed_eyes","kissing_smiling_eyes","yum","stuck_out_tongue","stuck_out_tongue_winking_eye","zany_face","stuck_out_tongue_closed_eyes","money_mouth_face","hugging_face","face_with_hand_over_mouth","shushing_face","thinking_face","zipper_mouth_face","face_with_raised_eyebrow","neutral_face","expressionless","no_mouth","smirk","unamused","face_with_rolling_eyes","grimacing","lying_face","relieved","pensive","sleepy","drooling_face","sleeping","mask","face_with_thermometer","face_with_head_bandage","nauseated_face","face_vomiting","sneezing_face","hot_face","cold_face","woozy_face","dizzy_face","exploding_head","face_with_cowboy_hat","partying_face","sunglasses","nerd_face","face_with_monocle","confused","worried","slightly_frowning_face","white_frowning_face","open_mouth","hushed","astonished","flushed","pleading_face","frowning","anguished","fearful","cold_sweat","disappointed_relieved","cry","sob","scream","confounded","persevere","disappointed","sweat","weary","tired_face","yawning_face","triumph","rage","angry","face_with_symbols_on_mouth","smiling_imp","imp","skull","skull_and_crossbones","hankey","clown_face","japanese_ogre","japanese_goblin","ghost","alien","space_invader","robot_face","smiley_cat","smile_cat","joy_cat","heart_eyes_cat","smirk_cat","kissing_cat","scream_cat","crying_cat_face","pouting_cat","see_no_evil","hear_no_evil","speak_no_evil","wave","raised_back_of_hand","raised_hand_with_fingers_splayed","hand","spock-hand","ok_hand","pinching_hand","v","crossed_fingers","i_love_you_hand_sign","the_horns","call_me_hand","point_left","point_right","point_up_2","middle_finger","point_down","point_up","+1","-1","fist","facepunch","left-facing_fist","right-facing_fist","clap","raised_hands","open_hands","palms_up_together","handshake","pray","writing_hand","nail_care","selfie","muscle","mechanical_arm","mechanical_leg","leg","foot","ear","ear_with_hearing_aid","nose","brain","tooth","bone","eyes","eye","tongue","lips","baby","child","boy","girl","adult","person_with_blond_hair","man","bearded_person","red_haired_man","curly_haired_man","white_haired_man","bald_man","woman","red_haired_woman","red_haired_person","curly_haired_woman","curly_haired_person","white_haired_woman","white_haired_person","bald_woman","bald_person","blond-haired-woman","blond-haired-man","older_adult","older_man","older_woman","person_frowning","man-frowning","woman-frowning","person_with_pouting_face","man-pouting","woman-pouting","no_good","man-gesturing-no","woman-gesturing-no","ok_woman","man-gesturing-ok","woman-gesturing-ok","information_desk_person","man-tipping-hand","woman-tipping-hand","raising_hand","man-raising-hand","woman-raising-hand","deaf_person","deaf_man","deaf_woman","bow","man-bowing","woman-bowing","face_palm","man-facepalming","woman-facepalming","shrug","man-shrugging","woman-shrugging","health_worker","male-doctor","female-doctor","student","male-student","female-student","teacher","male-teacher","female-teacher","judge","male-judge","female-judge","farmer","male-farmer","female-farmer","cook","male-cook","female-cook","mechanic","male-mechanic","female-mechanic","factory_worker","male-factory-worker","female-factory-worker","office_worker","male-office-worker","female-office-worker","scientist","male-scientist","female-scientist","technologist","male-technologist","female-technologist","singer","male-singer","female-singer","artist","male-artist","female-artist","pilot","male-pilot","female-pilot","astronaut","male-astronaut","female-astronaut","firefighter","male-firefighter","female-firefighter","cop","male-police-officer","female-police-officer","sleuth_or_spy","male-detective","female-detective","guardsman","male-guard","female-guard","construction_worker","male-construction-worker","female-construction-worker","prince","princess","man_with_turban","man-wearing-turban","woman-wearing-turban","man_with_gua_pi_mao","person_with_headscarf","man_in_tuxedo","bride_with_veil","pregnant_woman","breast-feeding","angel","santa","mrs_claus","superhero","male_superhero","female_superhero","supervillain","male_supervillain","female_supervillain","mage","male_mage","female_mage","fairy","male_fairy","female_fairy","vampire","male_vampire","female_vampire","merperson","merman","mermaid","elf","male_elf","female_elf","genie","male_genie","female_genie","zombie","male_zombie","female_zombie","massage","man-getting-massage","woman-getting-massage","haircut","man-getting-haircut","woman-getting-haircut","walking","man-walking","woman-walking","standing_person","man_standing","woman_standing","kneeling_person","man_kneeling","woman_kneeling","person_with_probing_cane","man_with_probing_cane","woman_with_probing_cane","person_in_motorized_wheelchair","man_in_motorized_wheelchair","woman_in_motorized_wheelchair","person_in_manual_wheelchair","man_in_manual_wheelchair","woman_in_manual_wheelchair","runner","man-running","woman-running","dancer","man_dancing","man_in_business_suit_levitating","dancers","man-with-bunny-ears-partying","woman-with-bunny-ears-partying","person_in_steamy_room","man_in_steamy_room","woman_in_steamy_room","person_climbing","man_climbing","woman_climbing","fencer","horse_racing","skier","snowboarder","golfer","man-golfing","woman-golfing","surfer","man-surfing","woman-surfing","rowboat","man-rowing-boat","woman-rowing-boat","swimmer","man-swimming","woman-swimming","person_with_ball","man-bouncing-ball","woman-bouncing-ball","weight_lifter","man-lifting-weights","woman-lifting-weights","bicyclist","man-biking","woman-biking","mountain_bicyclist","man-mountain-biking","woman-mountain-biking","person_doing_cartwheel","man-cartwheeling","woman-cartwheeling","wrestlers","man-wrestling","woman-wrestling","water_polo","man-playing-water-polo","woman-playing-water-polo","handball","man-playing-handball","woman-playing-handball","juggling","man-juggling","woman-juggling","person_in_lotus_position","man_in_lotus_position","woman_in_lotus_position","bath","sleeping_accommodation","people_holding_hands","two_women_holding_hands","couple","two_men_holding_hands","couplekiss","woman-kiss-man","man-kiss-man","woman-kiss-woman","couple_with_heart","woman-heart-man","man-heart-man","woman-heart-woman","family","man-woman-boy","man-woman-girl","man-woman-girl-boy","man-woman-boy-boy","man-woman-girl-girl","man-man-boy","man-man-girl","man-man-girl-boy","man-man-boy-boy","man-man-girl-girl","woman-woman-boy","woman-woman-girl","woman-woman-girl-boy","woman-woman-boy-boy","woman-woman-girl-girl","man-boy","man-boy-boy","man-girl","man-girl-boy","man-girl-girl","woman-boy","woman-boy-boy","woman-girl","woman-girl-boy","woman-girl-girl","speaking_head_in_silhouette","bust_in_silhouette","busts_in_silhouette","footprints","kiss","love_letter","cupid","gift_heart","sparkling_heart","heartpulse","heartbeat","revolving_hearts","two_hearts","heart_decoration","heavy_heart_exclamation_mark_ornament","broken_heart","heart","orange_heart","yellow_heart","green_heart","blue_heart","purple_heart","brown_heart","black_heart","white_heart","100","anger","boom","dizzy","sweat_drops","dash","hole","bomb","speech_balloon","eye-in-speech-bubble","left_speech_bubble","right_anger_bubble","thought_balloon","zzz"]},{"id":"nature","name":"Animals & Nature","emojis":["monkey_face","monkey","gorilla","orangutan","dog","dog2","guide_dog","service_dog","poodle","wolf","fox_face","raccoon","cat","cat2","lion_face","tiger","tiger2","leopard","horse","racehorse","unicorn_face","zebra_face","deer","cow","ox","water_buffalo","cow2","pig","pig2","boar","pig_nose","ram","sheep","goat","dromedary_camel","camel","llama","giraffe_face","elephant","rhinoceros","hippopotamus","mouse","mouse2","rat","hamster","rabbit","rabbit2","chipmunk","hedgehog","bat","bear","koala","panda_face","sloth","otter","skunk","kangaroo","badger","feet","turkey","chicken","rooster","hatching_chick","baby_chick","hatched_chick","bird","penguin","dove_of_peace","eagle","duck","swan","owl","flamingo","peacock","parrot","frog","crocodile","turtle","lizard","snake","dragon_face","dragon","sauropod","t-rex","whale","whale2","dolphin","fish","tropical_fish","blowfish","shark","octopus","shell","snail","butterfly","bug","ant","bee","beetle","cricket","spider","spider_web","scorpion","mosquito","microbe","bouquet","cherry_blossom","white_flower","rosette","rose","wilted_flower","hibiscus","sunflower","blossom","tulip","seedling","evergreen_tree","deciduous_tree","palm_tree","cactus","ear_of_rice","herb","shamrock","four_leaf_clover","maple_leaf","fallen_leaf","leaves"]},{"id":"foods","name":"Food & Drink","emojis":["grapes","melon","watermelon","tangerine","lemon","banana","pineapple","mango","apple","green_apple","pear","peach","cherries","strawberry","kiwifruit","tomato","coconut","avocado","eggplant","potato","carrot","corn","hot_pepper","cucumber","leafy_green","broccoli","garlic","onion","mushroom","peanuts","chestnut","bread","croissant","baguette_bread","pretzel","bagel","pancakes","waffle","cheese_wedge","meat_on_bone","poultry_leg","cut_of_meat","bacon","hamburger","fries","pizza","hotdog","sandwich","taco","burrito","stuffed_flatbread","falafel","egg","fried_egg","shallow_pan_of_food","stew","bowl_with_spoon","green_salad","popcorn","butter","salt","canned_food","bento","rice_cracker","rice_ball","rice","curry","ramen","spaghetti","sweet_potato","oden","sushi","fried_shrimp","fish_cake","moon_cake","dango","dumpling","fortune_cookie","takeout_box","crab","lobster","shrimp","squid","oyster","icecream","shaved_ice","ice_cream","doughnut","cookie","birthday","cake","cupcake","pie","chocolate_bar","candy","lollipop","custard","honey_pot","baby_bottle","glass_of_milk","coffee","tea","sake","champagne","wine_glass","cocktail","tropical_drink","beer","beers","clinking_glasses","tumbler_glass","cup_with_straw","beverage_box","mate_drink","ice_cube","chopsticks","knife_fork_plate","fork_and_knife","spoon","hocho","amphora"]},{"id":"activity","name":"Activities","emojis":["jack_o_lantern","christmas_tree","fireworks","sparkler","firecracker","sparkles","balloon","tada","confetti_ball","tanabata_tree","bamboo","dolls","flags","wind_chime","rice_scene","red_envelope","ribbon","gift","reminder_ribbon","admission_tickets","ticket","medal","trophy","sports_medal","first_place_medal","second_place_medal","third_place_medal","soccer","baseball","softball","basketball","volleyball","football","rugby_football","tennis","flying_disc","bowling","cricket_bat_and_ball","field_hockey_stick_and_ball","ice_hockey_stick_and_puck","lacrosse","table_tennis_paddle_and_ball","badminton_racquet_and_shuttlecock","boxing_glove","martial_arts_uniform","goal_net","golf","ice_skate","fishing_pole_and_fish","diving_mask","running_shirt_with_sash","ski","sled","curling_stone","dart","yo-yo","kite","8ball","crystal_ball","nazar_amulet","video_game","joystick","slot_machine","game_die","jigsaw","teddy_bear","spades","hearts","diamonds","clubs","chess_pawn","black_joker","mahjong","flower_playing_cards","performing_arts","frame_with_picture","art","thread","yarn"]},{"id":"places","name":"Travel & Places","emojis":["earth_africa","earth_americas","earth_asia","globe_with_meridians","world_map","japan","compass","snow_capped_mountain","mountain","volcano","mount_fuji","camping","beach_with_umbrella","desert","desert_island","national_park","stadium","classical_building","building_construction","bricks","house_buildings","derelict_house_building","house","house_with_garden","office","post_office","european_post_office","hospital","bank","hotel","love_hotel","convenience_store","school","department_store","factory","japanese_castle","european_castle","wedding","tokyo_tower","statue_of_liberty","church","mosque","hindu_temple","synagogue","shinto_shrine","kaaba","fountain","tent","foggy","night_with_stars","cityscape","sunrise_over_mountains","sunrise","city_sunset","city_sunrise","bridge_at_night","hotsprings","carousel_horse","ferris_wheel","roller_coaster","barber","circus_tent","steam_locomotive","railway_car","bullettrain_side","bullettrain_front","train2","metro","light_rail","station","tram","monorail","mountain_railway","train","bus","oncoming_bus","trolleybus","minibus","ambulance","fire_engine","police_car","oncoming_police_car","taxi","oncoming_taxi","car","oncoming_automobile","blue_car","truck","articulated_lorry","tractor","racing_car","racing_motorcycle","motor_scooter","manual_wheelchair","motorized_wheelchair","auto_rickshaw","bike","scooter","skateboard","busstop","motorway","railway_track","oil_drum","fuelpump","rotating_light","traffic_light","vertical_traffic_light","octagonal_sign","construction","anchor","boat","canoe","speedboat","passenger_ship","ferry","motor_boat","ship","airplane","small_airplane","airplane_departure","airplane_arriving","parachute","seat","helicopter","suspension_railway","mountain_cableway","aerial_tramway","satellite","rocket","flying_saucer","bellhop_bell","luggage","hourglass","hourglass_flowing_sand","watch","alarm_clock","stopwatch","timer_clock","mantelpiece_clock","clock12","clock1230","clock1","clock130","clock2","clock230","clock3","clock330","clock4","clock430","clock5","clock530","clock6","clock630","clock7","clock730","clock8","clock830","clock9","clock930","clock10","clock1030","clock11","clock1130","new_moon","waxing_crescent_moon","first_quarter_moon","moon","full_moon","waning_gibbous_moon","last_quarter_moon","waning_crescent_moon","crescent_moon","new_moon_with_face","first_quarter_moon_with_face","last_quarter_moon_with_face","thermometer","sunny","full_moon_with_face","sun_with_face","ringed_planet","star","star2","stars","milky_way","cloud","partly_sunny","thunder_cloud_and_rain","mostly_sunny","barely_sunny","partly_sunny_rain","rain_cloud","snow_cloud","lightning","tornado","fog","wind_blowing_face","cyclone","rainbow","closed_umbrella","umbrella","umbrella_with_rain_drops","umbrella_on_ground","zap","snowflake","snowman","snowman_without_snow","comet","fire","droplet","ocean"]},{"id":"objects","name":"Objects","emojis":["eyeglasses","dark_sunglasses","goggles","lab_coat","safety_vest","necktie","shirt","jeans","scarf","gloves","coat","socks","dress","kimono","sari","one-piece_swimsuit","briefs","shorts","bikini","womans_clothes","purse","handbag","pouch","shopping_bags","school_satchel","mans_shoe","athletic_shoe","hiking_boot","womans_flat_shoe","high_heel","sandal","ballet_shoes","boot","crown","womans_hat","tophat","mortar_board","billed_cap","helmet_with_white_cross","prayer_beads","lipstick","ring","gem","mute","speaker","sound","loud_sound","loudspeaker","mega","postal_horn","bell","no_bell","musical_score","musical_note","notes","studio_microphone","level_slider","control_knobs","microphone","headphones","radio","saxophone","guitar","musical_keyboard","trumpet","violin","banjo","drum_with_drumsticks","iphone","calling","phone","telephone_receiver","pager","fax","battery","electric_plug","computer","desktop_computer","printer","keyboard","three_button_mouse","trackball","minidisc","floppy_disk","cd","dvd","abacus","movie_camera","film_frames","film_projector","clapper","tv","camera","camera_with_flash","video_camera","vhs","mag","mag_right","candle","bulb","flashlight","izakaya_lantern","diya_lamp","notebook_with_decorative_cover","closed_book","book","green_book","blue_book","orange_book","books","notebook","ledger","page_with_curl","scroll","page_facing_up","newspaper","rolled_up_newspaper","bookmark_tabs","bookmark","label","moneybag","yen","dollar","euro","pound","money_with_wings","credit_card","receipt","chart","currency_exchange","heavy_dollar_sign","email","e-mail","incoming_envelope","envelope_with_arrow","outbox_tray","inbox_tray","package","mailbox","mailbox_closed","mailbox_with_mail","mailbox_with_no_mail","postbox","ballot_box_with_ballot","pencil2","black_nib","lower_left_fountain_pen","lower_left_ballpoint_pen","lower_left_paintbrush","lower_left_crayon","memo","briefcase","file_folder","open_file_folder","card_index_dividers","date","calendar","spiral_note_pad","spiral_calendar_pad","card_index","chart_with_upwards_trend","chart_with_downwards_trend","bar_chart","clipboard","pushpin","round_pushpin","paperclip","linked_paperclips","straight_ruler","triangular_ruler","scissors","card_file_box","file_cabinet","wastebasket","lock","unlock","lock_with_ink_pen","closed_lock_with_key","key","old_key","hammer","axe","pick","hammer_and_pick","hammer_and_wrench","dagger_knife","crossed_swords","gun","bow_and_arrow","shield","wrench","nut_and_bolt","gear","compression","scales","probing_cane","link","chains","toolbox","magnet","alembic","test_tube","petri_dish","dna","microscope","telescope","satellite_antenna","syringe","drop_of_blood","pill","adhesive_bandage","stethoscope","door","bed","couch_and_lamp","chair","toilet","shower","bathtub","razor","lotion_bottle","safety_pin","broom","basket","roll_of_paper","soap","sponge","fire_extinguisher","shopping_trolley","smoking","coffin","funeral_urn","moyai"]},{"id":"symbols","name":"Symbols","emojis":["atm","put_litter_in_its_place","potable_water","wheelchair","mens","womens","restroom","baby_symbol","wc","passport_control","customs","baggage_claim","left_luggage","warning","children_crossing","no_entry","no_entry_sign","no_bicycles","no_smoking","do_not_litter","non-potable_water","no_pedestrians","no_mobile_phones","underage","radioactive_sign","biohazard_sign","arrow_up","arrow_upper_right","arrow_right","arrow_lower_right","arrow_down","arrow_lower_left","arrow_left","arrow_upper_left","arrow_up_down","left_right_arrow","leftwards_arrow_with_hook","arrow_right_hook","arrow_heading_up","arrow_heading_down","arrows_clockwise","arrows_counterclockwise","back","end","on","soon","top","place_of_worship","atom_symbol","om_symbol","star_of_david","wheel_of_dharma","yin_yang","latin_cross","orthodox_cross","star_and_crescent","peace_symbol","menorah_with_nine_branches","six_pointed_star","aries","taurus","gemini","cancer","leo","virgo","libra","scorpius","sagittarius","capricorn","aquarius","pisces","ophiuchus","twisted_rightwards_arrows","repeat","repeat_one","arrow_forward","fast_forward","black_right_pointing_double_triangle_with_vertical_bar","black_right_pointing_triangle_with_double_vertical_bar","arrow_backward","rewind","black_left_pointing_double_triangle_with_vertical_bar","arrow_up_small","arrow_double_up","arrow_down_small","arrow_double_down","double_vertical_bar","black_square_for_stop","black_circle_for_record","eject","cinema","low_brightness","high_brightness","signal_strength","vibration_mode","mobile_phone_off","female_sign","male_sign","medical_symbol","infinity","recycle","fleur_de_lis","trident","name_badge","beginner","o","white_check_mark","ballot_box_with_check","heavy_check_mark","heavy_multiplication_x","x","negative_squared_cross_mark","heavy_plus_sign","heavy_minus_sign","heavy_division_sign","curly_loop","loop","part_alternation_mark","eight_spoked_asterisk","eight_pointed_black_star","sparkle","bangbang","interrobang","question","grey_question","grey_exclamation","exclamation","wavy_dash","copyright","registered","tm","hash","keycap_star","zero","one","two","three","four","five","six","seven","eight","nine","keycap_ten","capital_abcd","abcd","1234","symbols","abc","a","ab","b","cl","cool","free","information_source","id","m","new","ng","o2","ok","parking","sos","up","vs","koko","sa","u6708","u6709","u6307","ideograph_advantage","u5272","u7121","u7981","accept","u7533","u5408","u7a7a","congratulations","secret","u55b6","u6e80","red_circle","large_orange_circle","large_yellow_circle","large_green_circle","large_blue_circle","large_purple_circle","large_brown_circle","black_circle","white_circle","large_red_square","large_orange_square","large_yellow_square","large_green_square","large_blue_square","large_purple_square","large_brown_square","black_large_square","white_large_square","black_medium_square","white_medium_square","black_medium_small_square","white_medium_small_square","black_small_square","white_small_square","large_orange_diamond","large_blue_diamond","small_orange_diamond","small_blue_diamond","small_red_triangle","small_red_triangle_down","diamond_shape_with_a_dot_inside","radio_button","white_square_button","black_square_button"]},{"id":"flags","name":"Flags","emojis":["checkered_flag","cn","crossed_flags","de","es","flag-ac","flag-ad","flag-ae","flag-af","flag-ag","flag-ai","flag-al","flag-am","flag-ao","flag-aq","flag-ar","flag-as","flag-at","flag-au","flag-aw","flag-ax","flag-az","flag-ba","flag-bb","flag-bd","flag-be","flag-bf","flag-bg","flag-bh","flag-bi","flag-bj","flag-bl","flag-bm","flag-bn","flag-bo","flag-bq","flag-br","flag-bs","flag-bt","flag-bv","flag-bw","flag-by","flag-bz","flag-ca","flag-cc","flag-cd","flag-cf","flag-cg","flag-ch","flag-ci","flag-ck","flag-cl","flag-cm","flag-co","flag-cp","flag-cr","flag-cu","flag-cv","flag-cw","flag-cx","flag-cy","flag-cz","flag-dg","flag-dj","flag-dk","flag-dm","flag-do","flag-dz","flag-ea","flag-ec","flag-ee","flag-eg","flag-eh","flag-england","flag-er","flag-et","flag-eu","flag-fi","flag-fj","flag-fk","flag-fm","flag-fo","flag-ga","flag-gd","flag-ge","flag-gf","flag-gg","flag-gh","flag-gi","flag-gl","flag-gm","flag-gn","flag-gp","flag-gq","flag-gr","flag-gs","flag-gt","flag-gu","flag-gw","flag-gy","flag-hk","flag-hm","flag-hn","flag-hr","flag-ht","flag-hu","flag-ic","flag-id","flag-ie","flag-il","flag-im","flag-in","flag-io","flag-iq","flag-ir","flag-is","flag-je","flag-jm","flag-jo","flag-ke","flag-kg","flag-kh","flag-ki","flag-km","flag-kn","flag-kp","flag-kw","flag-ky","flag-kz","flag-la","flag-lb","flag-lc","flag-li","flag-lk","flag-lr","flag-ls","flag-lt","flag-lu","flag-lv","flag-ly","flag-ma","flag-mc","flag-md","flag-me","flag-mf","flag-mg","flag-mh","flag-mk","flag-ml","flag-mm","flag-mn","flag-mo","flag-mp","flag-mq","flag-mr","flag-ms","flag-mt","flag-mu","flag-mv","flag-mw","flag-mx","flag-my","flag-mz","flag-na","flag-nc","flag-ne","flag-nf","flag-ng","flag-ni","flag-nl","flag-no","flag-np","flag-nr","flag-nu","flag-nz","flag-om","flag-pa","flag-pe","flag-pf","flag-pg","flag-ph","flag-pk","flag-pl","flag-pm","flag-pn","flag-pr","flag-ps","flag-pt","flag-pw","flag-py","flag-qa","flag-re","flag-ro","flag-rs","flag-rw","flag-sa","flag-sb","flag-sc","flag-scotland","flag-sd","flag-se","flag-sg","flag-sh","flag-si","flag-sj","flag-sk","flag-sl","flag-sm","flag-sn","flag-so","flag-sr","flag-ss","flag-st","flag-sv","flag-sx","flag-sy","flag-sz","flag-ta","flag-tc","flag-td","flag-tf","flag-tg","flag-th","flag-tj","flag-tk","flag-tl","flag-tm","flag-tn","flag-to","flag-tr","flag-tt","flag-tv","flag-tw","flag-tz","flag-ua","flag-ug","flag-um","flag-uy","flag-uz","flag-va","flag-vc","flag-ve","flag-vg","flag-vi","flag-vn","flag-vu","flag-wales","flag-wf","flag-ws","flag-xk","flag-ye","flag-yt","flag-za","flag-zm","flag-zw","fr","gb","it","jp","kr","pirate_flag","rainbow-flag","ru","triangular_flag_on_post","us","waving_black_flag","waving_white_flag"]}],"emojis":{"100":{"a":"Hundred Points Symbol","b":"1F4AF","d":true,"e":true,"f":true,"h":true,"j":["score","perfect","numbers","century","exam","quiz","test","pass","hundred"],"k":[26,5],"o":2},"1234":{"a":"Input Symbol for Numbers","b":"1F522","d":true,"e":true,"f":true,"h":true,"j":["numbers","blue-square"],"k":[28,5],"o":2},"grinning":{"a":"Grinning Face","b":"1F600","d":true,"e":true,"f":true,"h":true,"j":["face","smile","happy","joy",":D","grin"],"k":[30,35],"m":":D","o":2},"monkey_face":{"a":"Monkey Face","b":"1F435","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","circus"],"k":[12,25],"l":[":o)"],"o":2},"grapes":{"a":"Grapes","b":"1F347","d":true,"e":true,"f":true,"h":true,"j":["fruit","food","wine"],"k":[6,31],"o":2},"eyeglasses":{"a":"Eyeglasses","b":"1F453","d":true,"e":true,"f":true,"h":true,"j":["fashion","accessories","eyesight","nerdy","dork","geek"],"k":[14,7],"o":2},"checkered_flag":{"a":"Chequered Flag","b":"1F3C1","d":true,"e":true,"f":true,"h":true,"j":["contest","finishline","race","gokart"],"k":[8,39],"o":2},"jack_o_lantern":{"a":"Jack-O-Lantern","b":"1F383","d":true,"e":true,"f":true,"h":true,"j":["halloween","light","pumpkin","creepy","fall"],"k":[7,34],"o":2},"wave":{"skin_variations":{"1F3FB":{"unified":"1F44B-1F3FB","non_qualified":null,"image":"1f44b-1f3fb.png","sheet_x":13,"sheet_y":27,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F44B-1F3FC","non_qualified":null,"image":"1f44b-1f3fc.png","sheet_x":13,"sheet_y":28,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F44B-1F3FD","non_qualified":null,"image":"1f44b-1f3fd.png","sheet_x":13,"sheet_y":29,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F44B-1F3FE","non_qualified":null,"image":"1f44b-1f3fe.png","sheet_x":13,"sheet_y":30,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F44B-1F3FF","non_qualified":null,"image":"1f44b-1f3ff.png","sheet_x":13,"sheet_y":31,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Waving Hand Sign","b":"1F44B","d":true,"e":true,"f":true,"h":true,"j":["hands","gesture","goodbye","solong","farewell","hello","hi","palm"],"k":[13,26],"o":2},"earth_africa":{"a":"Earth Globe Europe-Africa","b":"1F30D","d":true,"e":true,"f":true,"h":true,"j":["globe","world","international"],"k":[5,32],"o":2},"atm":{"a":"Automated Teller Machine","b":"1F3E7","d":true,"e":true,"f":true,"h":true,"j":["money","sales","cash","blue-square","payment","bank"],"k":[11,1],"o":2},"melon":{"a":"Melon","b":"1F348","d":true,"e":true,"f":true,"h":true,"j":["fruit","nature","food"],"k":[6,32],"o":2},"triangular_flag_on_post":{"a":"Triangular Flag on Post","b":"1F6A9","d":true,"e":true,"f":true,"h":true,"j":["mark","milestone","place"],"k":[35,0],"o":2},"put_litter_in_its_place":{"a":"Put Litter in Its Place Symbol","b":"1F6AE","d":true,"e":true,"f":true,"h":true,"j":["blue-square","sign","human","info"],"k":[35,5],"o":2},"christmas_tree":{"a":"Christmas Tree","b":"1F384","d":true,"e":true,"f":true,"h":true,"j":["festival","vacation","december","xmas","celebration"],"k":[7,35],"o":2},"monkey":{"a":"Monkey","b":"1F412","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","banana","circus"],"k":[11,46],"o":2},"earth_americas":{"a":"Earth Globe Americas","b":"1F30E","d":true,"e":true,"f":true,"h":true,"j":["globe","world","USA","international"],"k":[5,33],"o":2},"dark_sunglasses":{"a":"Dark Sunglasses","b":"1F576-FE0F","c":"1F576","d":true,"e":true,"f":true,"h":true,"j":["face","cool","accessories"],"k":[29,33],"o":2},"raised_back_of_hand":{"skin_variations":{"1F3FB":{"unified":"1F91A-1F3FB","non_qualified":null,"image":"1f91a-1f3fb.png","sheet_x":37,"sheet_y":44,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F91A-1F3FC","non_qualified":null,"image":"1f91a-1f3fc.png","sheet_x":37,"sheet_y":45,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F91A-1F3FD","non_qualified":null,"image":"1f91a-1f3fd.png","sheet_x":37,"sheet_y":46,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F91A-1F3FE","non_qualified":null,"image":"1f91a-1f3fe.png","sheet_x":37,"sheet_y":47,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F91A-1F3FF","non_qualified":null,"image":"1f91a-1f3ff.png","sheet_x":37,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Raised Back of Hand","b":"1F91A","d":true,"e":true,"f":true,"h":true,"j":["fingers","raised","backhand"],"k":[37,43],"o":4},"smiley":{"a":"Smiling Face with Open Mouth","b":"1F603","d":true,"e":true,"f":true,"h":true,"j":["face","happy","joy","haha",":D",":)","smile","funny"],"k":[30,38],"l":["=)","=-)"],"m":":)","o":2},"earth_asia":{"a":"Earth Globe Asia-Australia","b":"1F30F","d":true,"e":true,"f":true,"h":true,"j":["globe","world","east","international"],"k":[5,34],"o":2},"crossed_flags":{"a":"Crossed Flags","b":"1F38C","d":true,"e":true,"f":true,"h":true,"j":["japanese","nation","country","border"],"k":[7,48],"o":2},"watermelon":{"a":"Watermelon","b":"1F349","d":true,"e":true,"f":true,"h":true,"j":["fruit","food","picnic","summer"],"k":[6,33],"o":2},"goggles":{"a":"Goggles","b":"1F97D","d":true,"e":true,"f":true,"h":true,"k":[42,15],"o":11},"raised_hand_with_fingers_splayed":{"skin_variations":{"1F3FB":{"unified":"1F590-1F3FB","non_qualified":null,"image":"1f590-1f3fb.png","sheet_x":29,"sheet_y":49,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F590-1F3FC","non_qualified":null,"image":"1f590-1f3fc.png","sheet_x":29,"sheet_y":50,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F590-1F3FD","non_qualified":null,"image":"1f590-1f3fd.png","sheet_x":29,"sheet_y":51,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F590-1F3FE","non_qualified":null,"image":"1f590-1f3fe.png","sheet_x":29,"sheet_y":52,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F590-1F3FF","non_qualified":null,"image":"1f590-1f3ff.png","sheet_x":29,"sheet_y":53,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Raised Hand with Fingers Splayed","b":"1F590-FE0F","c":"1F590","d":true,"e":true,"f":true,"h":true,"j":["hand","fingers","palm"],"k":[29,48],"o":2},"smile":{"a":"Smiling Face with Open Mouth and Smiling Eyes","b":"1F604","d":true,"e":true,"f":true,"h":true,"j":["face","happy","joy","funny","haha","laugh","like",":D",":)"],"k":[30,39],"l":["C:","c:",":D",":-D"],"m":":)","o":2},"potable_water":{"a":"Potable Water Symbol","b":"1F6B0","d":true,"e":true,"f":true,"h":true,"j":["blue-square","liquid","restroom","cleaning","faucet"],"k":[35,7],"o":2},"fireworks":{"a":"Fireworks","b":"1F386","d":true,"e":true,"f":true,"h":true,"j":["photo","festival","carnival","congratulations"],"k":[7,42],"o":2},"gorilla":{"a":"Gorilla","b":"1F98D","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","circus"],"k":[42,31],"o":4},"lab_coat":{"a":"Lab Coat","b":"1F97C","d":true,"e":true,"f":true,"h":true,"k":[42,14],"o":11},"tangerine":{"a":"Tangerine","b":"1F34A","d":true,"e":true,"f":true,"h":true,"j":["food","fruit","nature","orange"],"k":[6,34],"o":2},"wheelchair":{"a":"Wheelchair Symbol","b":"267F","d":true,"e":true,"f":true,"h":true,"j":["blue-square","disabled","a11y","accessibility"],"k":[53,40],"o":2},"waving_black_flag":{"a":"Waving Black Flag","b":"1F3F4","d":true,"e":true,"f":true,"h":true,"k":[11,17],"o":2},"orangutan":{"a":"Orangutan","b":"1F9A7","d":true,"e":true,"f":true,"h":true,"k":[42,55],"o":12},"sparkler":{"a":"Firework Sparkler","b":"1F387","d":true,"e":true,"f":true,"h":true,"j":["stars","night","shine"],"k":[7,43],"o":2},"globe_with_meridians":{"a":"Globe with Meridians","b":"1F310","d":true,"e":true,"f":true,"h":true,"j":["earth","international","world","internet","interweb","i18n"],"k":[5,35],"o":2},"grin":{"a":"Grinning Face with Smiling Eyes","b":"1F601","d":true,"e":true,"f":true,"h":true,"j":["face","happy","smile","joy","kawaii"],"k":[30,36],"o":2},"hand":{"skin_variations":{"1F3FB":{"unified":"270B-1F3FB","non_qualified":null,"image":"270b-1f3fb.png","sheet_x":54,"sheet_y":50,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"270B-1F3FC","non_qualified":null,"image":"270b-1f3fc.png","sheet_x":54,"sheet_y":51,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"270B-1F3FD","non_qualified":null,"image":"270b-1f3fd.png","sheet_x":54,"sheet_y":52,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"270B-1F3FE","non_qualified":null,"image":"270b-1f3fe.png","sheet_x":54,"sheet_y":53,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"270B-1F3FF","non_qualified":null,"image":"270b-1f3ff.png","sheet_x":54,"sheet_y":54,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Raised Hand","b":"270B","d":true,"e":true,"f":true,"h":true,"k":[54,49],"n":["raised_hand"],"o":2},"firecracker":{"a":"Firecracker","b":"1F9E8","d":true,"e":true,"f":true,"h":true,"k":[51,27],"o":11},"lemon":{"a":"Lemon","b":"1F34B","d":true,"e":true,"f":true,"h":true,"j":["fruit","nature"],"k":[6,35],"o":2},"dog":{"a":"Dog Face","b":"1F436","d":true,"e":true,"f":true,"h":true,"j":["animal","friend","nature","woof","puppy","pet","faithful"],"k":[12,26],"o":2},"mens":{"a":"Mens Symbol","b":"1F6B9","d":true,"e":true,"f":true,"h":true,"j":["toilet","restroom","wc","blue-square","gender","male"],"k":[36,10],"o":2},"spock-hand":{"skin_variations":{"1F3FB":{"unified":"1F596-1F3FB","non_qualified":null,"image":"1f596-1f3fb.png","sheet_x":30,"sheet_y":4,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F596-1F3FC","non_qualified":null,"image":"1f596-1f3fc.png","sheet_x":30,"sheet_y":5,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F596-1F3FD","non_qualified":null,"image":"1f596-1f3fd.png","sheet_x":30,"sheet_y":6,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F596-1F3FE","non_qualified":null,"image":"1f596-1f3fe.png","sheet_x":30,"sheet_y":7,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F596-1F3FF","non_qualified":null,"image":"1f596-1f3ff.png","sheet_x":30,"sheet_y":8,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Raised Hand with Part Between Middle and Ring Fingers","b":"1F596","d":true,"e":true,"f":true,"h":true,"k":[30,3],"o":2},"world_map":{"a":"World Map","b":"1F5FA-FE0F","c":"1F5FA","d":true,"e":true,"f":true,"h":true,"j":["location","direction"],"k":[30,29],"o":2},"laughing":{"a":"Smiling Face with Open Mouth and Tightly-Closed Eyes","b":"1F606","d":true,"e":true,"f":true,"h":true,"j":["happy","joy","lol","satisfied","haha","face","glad","XD","laugh"],"k":[30,41],"l":[":>",":->"],"n":["satisfied"],"o":2},"waving_white_flag":{"a":"Waving White Flag","b":"1F3F3-FE0F","c":"1F3F3","d":true,"e":true,"f":true,"h":true,"k":[11,12],"o":2},"safety_vest":{"a":"Safety Vest","b":"1F9BA","d":true,"e":true,"f":true,"h":true,"k":[43,54],"o":12},"sweat_smile":{"a":"Smiling Face with Open Mouth and Cold Sweat","b":"1F605","d":true,"e":true,"f":true,"h":true,"j":["face","hot","happy","laugh","sweat","smile","relief"],"k":[30,40],"o":2},"sparkles":{"a":"Sparkles","b":"2728","d":true,"e":true,"f":true,"h":true,"j":["stars","shine","shiny","cool","awesome","good","magic"],"k":[55,16],"o":2},"banana":{"a":"Banana","b":"1F34C","d":true,"e":true,"f":true,"h":true,"j":["fruit","food","monkey"],"k":[6,36],"o":2},"rainbow-flag":{"a":"Rainbow Flag","b":"1F3F3-FE0F-200D-1F308","c":"1F3F3-200D-1F308","d":true,"e":true,"f":true,"h":true,"k":[11,11],"o":4},"ok_hand":{"skin_variations":{"1F3FB":{"unified":"1F44C-1F3FB","non_qualified":null,"image":"1f44c-1f3fb.png","sheet_x":13,"sheet_y":33,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F44C-1F3FC","non_qualified":null,"image":"1f44c-1f3fc.png","sheet_x":13,"sheet_y":34,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F44C-1F3FD","non_qualified":null,"image":"1f44c-1f3fd.png","sheet_x":13,"sheet_y":35,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F44C-1F3FE","non_qualified":null,"image":"1f44c-1f3fe.png","sheet_x":13,"sheet_y":36,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F44C-1F3FF","non_qualified":null,"image":"1f44c-1f3ff.png","sheet_x":13,"sheet_y":37,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Ok Hand Sign","b":"1F44C","d":true,"e":true,"f":true,"h":true,"j":["fingers","limbs","perfect","ok","okay"],"k":[13,32],"o":2},"japan":{"a":"Silhouette of Japan","b":"1F5FE","d":true,"e":true,"f":true,"h":true,"j":["nation","country","japanese","asia"],"k":[30,33],"o":2},"dog2":{"a":"Dog","b":"1F415","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","friend","doge","pet","faithful"],"k":[11,50],"o":2},"womens":{"a":"Womens Symbol","b":"1F6BA","d":true,"e":true,"f":true,"h":true,"j":["purple-square","woman","female","toilet","loo","restroom","gender"],"k":[36,11],"o":2},"necktie":{"a":"Necktie","b":"1F454","d":true,"e":true,"f":true,"h":true,"j":["shirt","suitup","formal","fashion","cloth","business"],"k":[14,8],"o":2},"pirate_flag":{"a":"Pirate Flag","b":"1F3F4-200D-2620-FE0F","c":"1F3F4-200D-2620","d":true,"e":true,"f":true,"h":true,"k":[11,13],"o":11},"guide_dog":{"a":"Guide Dog","b":"1F9AE","d":true,"e":true,"f":true,"h":true,"k":[43,2],"o":12},"restroom":{"a":"Restroom","b":"1F6BB","d":true,"e":true,"f":true,"h":true,"j":["blue-square","toilet","refresh","wc","gender"],"k":[36,12],"o":2},"compass":{"a":"Compass","b":"1F9ED","d":true,"e":true,"f":true,"h":true,"k":[51,32],"o":11},"rolling_on_the_floor_laughing":{"a":"Rolling on the Floor Laughing","b":"1F923","d":true,"e":true,"f":true,"h":true,"k":[38,20],"o":4},"balloon":{"a":"Balloon","b":"1F388","d":true,"e":true,"f":true,"h":true,"j":["party","celebration","birthday","circus"],"k":[7,44],"o":2},"pinching_hand":{"skin_variations":{"1F3FB":{"unified":"1F90F-1F3FB","non_qualified":null,"image":"1f90f-1f3fb.png","sheet_x":37,"sheet_y":18,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F90F-1F3FC","non_qualified":null,"image":"1f90f-1f3fc.png","sheet_x":37,"sheet_y":19,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F90F-1F3FD","non_qualified":null,"image":"1f90f-1f3fd.png","sheet_x":37,"sheet_y":20,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F90F-1F3FE","non_qualified":null,"image":"1f90f-1f3fe.png","sheet_x":37,"sheet_y":21,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F90F-1F3FF","non_qualified":null,"image":"1f90f-1f3ff.png","sheet_x":37,"sheet_y":22,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Pinching Hand","b":"1F90F","d":true,"e":true,"f":true,"h":true,"k":[37,17],"o":12},"pineapple":{"a":"Pineapple","b":"1F34D","d":true,"e":true,"f":true,"h":true,"j":["fruit","nature","food"],"k":[6,37],"o":2},"shirt":{"a":"T-Shirt","b":"1F455","d":true,"e":true,"f":true,"h":true,"k":[14,9],"n":["tshirt"],"o":2},"service_dog":{"a":"Service Dog","b":"1F415-200D-1F9BA","d":true,"e":true,"f":true,"h":true,"k":[11,49],"o":12},"baby_symbol":{"a":"Baby Symbol","b":"1F6BC","d":true,"e":true,"f":true,"h":true,"j":["orange-square","child"],"k":[36,13],"o":2},"joy":{"a":"Face with Tears of Joy","b":"1F602","d":true,"e":true,"f":true,"h":true,"j":["face","cry","tears","weep","happy","happytears","haha"],"k":[30,37],"o":2},"tada":{"a":"Party Popper","b":"1F389","d":true,"e":true,"f":true,"h":true,"j":["party","congratulations","birthday","magic","circus","celebration"],"k":[7,45],"o":2},"mango":{"a":"Mango","b":"1F96D","d":true,"e":true,"f":true,"h":true,"k":[42,3],"o":11},"v":{"skin_variations":{"1F3FB":{"unified":"270C-1F3FB","non_qualified":null,"image":"270c-1f3fb.png","sheet_x":54,"sheet_y":56,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"270C-1F3FC","non_qualified":null,"image":"270c-1f3fc.png","sheet_x":55,"sheet_y":0,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"270C-1F3FD","non_qualified":null,"image":"270c-1f3fd.png","sheet_x":55,"sheet_y":1,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"270C-1F3FE","non_qualified":null,"image":"270c-1f3fe.png","sheet_x":55,"sheet_y":2,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"270C-1F3FF","non_qualified":null,"image":"270c-1f3ff.png","sheet_x":55,"sheet_y":3,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Victory Hand","b":"270C-FE0F","c":"270C","d":true,"e":true,"f":true,"h":true,"j":["fingers","ohyeah","hand","peace","victory","two"],"k":[54,55],"o":2},"snow_capped_mountain":{"a":"Snow Capped Mountain","b":"1F3D4-FE0F","c":"1F3D4","d":true,"e":true,"f":true,"h":true,"k":[10,39],"o":2},"flag-ac":{"a":"Ascension Island Flag","b":"1F1E6-1F1E8","d":true,"e":true,"f":true,"h":true,"k":[0,31],"o":2},"jeans":{"a":"Jeans","b":"1F456","d":true,"e":true,"f":true,"h":true,"j":["fashion","shopping"],"k":[14,10],"o":2},"poodle":{"a":"Poodle","b":"1F429","d":true,"e":true,"f":true,"h":true,"j":["dog","animal","101","nature","pet"],"k":[12,13],"o":2},"crossed_fingers":{"skin_variations":{"1F3FB":{"unified":"1F91E-1F3FB","non_qualified":null,"image":"1f91e-1f3fb.png","sheet_x":38,"sheet_y":6,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F91E-1F3FC","non_qualified":null,"image":"1f91e-1f3fc.png","sheet_x":38,"sheet_y":7,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F91E-1F3FD","non_qualified":null,"image":"1f91e-1f3fd.png","sheet_x":38,"sheet_y":8,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F91E-1F3FE","non_qualified":null,"image":"1f91e-1f3fe.png","sheet_x":38,"sheet_y":9,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F91E-1F3FF","non_qualified":null,"image":"1f91e-1f3ff.png","sheet_x":38,"sheet_y":10,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Hand with Index and Middle Fingers Crossed","b":"1F91E","d":true,"e":true,"f":true,"h":true,"j":["good","lucky"],"k":[38,5],"n":["hand_with_index_and_middle_fingers_crossed"],"o":4},"flag-ad":{"a":"Andorra Flag","b":"1F1E6-1F1E9","d":true,"e":true,"f":true,"h":true,"k":[0,32],"o":2},"slightly_smiling_face":{"a":"Slightly Smiling Face","b":"1F642","d":true,"e":true,"f":true,"h":true,"j":["face","smile"],"k":[31,44],"l":[":)","(:",":-)"],"o":2},"apple":{"a":"Red Apple","b":"1F34E","d":true,"e":true,"f":true,"h":true,"j":["fruit","mac","school"],"k":[6,38],"o":2},"wc":{"a":"Water Closet","b":"1F6BE","d":true,"e":true,"f":true,"h":true,"j":["toilet","restroom","blue-square"],"k":[36,15],"o":2},"scarf":{"a":"Scarf","b":"1F9E3","d":true,"e":true,"f":true,"h":true,"k":[51,22],"o":5},"mountain":{"a":"Mountain","b":"26F0-FE0F","c":"26F0","d":true,"e":true,"f":true,"h":true,"j":["photo","nature","environment"],"k":[54,11],"o":2},"confetti_ball":{"a":"Confetti Ball","b":"1F38A","d":true,"e":true,"f":true,"h":true,"j":["festival","party","birthday","circus"],"k":[7,46],"o":2},"i_love_you_hand_sign":{"skin_variations":{"1F3FB":{"unified":"1F91F-1F3FB","non_qualified":null,"image":"1f91f-1f3fb.png","sheet_x":38,"sheet_y":12,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F91F-1F3FC","non_qualified":null,"image":"1f91f-1f3fc.png","sheet_x":38,"sheet_y":13,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F91F-1F3FD","non_qualified":null,"image":"1f91f-1f3fd.png","sheet_x":38,"sheet_y":14,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F91F-1F3FE","non_qualified":null,"image":"1f91f-1f3fe.png","sheet_x":38,"sheet_y":15,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F91F-1F3FF","non_qualified":null,"image":"1f91f-1f3ff.png","sheet_x":38,"sheet_y":16,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"I Love You Hand Sign","b":"1F91F","d":true,"e":true,"f":true,"h":true,"k":[38,11],"o":5},"wolf":{"a":"Wolf Face","b":"1F43A","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","wild"],"k":[12,30],"o":2},"gloves":{"a":"Gloves","b":"1F9E4","d":true,"e":true,"f":true,"h":true,"k":[51,23],"o":5},"flag-ae":{"a":"United Arab Emirates Flag","b":"1F1E6-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[0,33],"o":2},"upside_down_face":{"a":"Upside-Down Face","b":"1F643","d":true,"e":true,"f":true,"h":true,"j":["face","flipped","silly","smile"],"k":[31,45],"o":2},"green_apple":{"a":"Green Apple","b":"1F34F","d":true,"e":true,"f":true,"h":true,"j":["fruit","nature"],"k":[6,39],"o":2},"passport_control":{"a":"Passport Control","b":"1F6C2","d":true,"e":true,"f":true,"h":true,"j":["custom","blue-square"],"k":[36,24],"o":2},"volcano":{"a":"Volcano","b":"1F30B","d":true,"e":true,"f":true,"h":true,"j":["photo","nature","disaster"],"k":[5,30],"o":2},"tanabata_tree":{"a":"Tanabata Tree","b":"1F38B","d":true,"e":true,"f":true,"h":true,"j":["plant","nature","branch","summer"],"k":[7,47],"o":2},"customs":{"a":"Customs","b":"1F6C3","d":true,"e":true,"f":true,"h":true,"j":["passport","border","blue-square"],"k":[36,25],"o":2},"coat":{"a":"Coat","b":"1F9E5","d":true,"e":true,"f":true,"h":true,"k":[51,24],"o":5},"wink":{"a":"Winking Face","b":"1F609","d":true,"e":true,"f":true,"h":true,"j":["face","happy","mischievous","secret",";)","smile","eye"],"k":[30,44],"l":[";)",";-)"],"m":";)","o":2},"bamboo":{"a":"Pine Decoration","b":"1F38D","d":true,"e":true,"f":true,"h":true,"j":["plant","nature","vegetable","panda","pine_decoration"],"k":[7,49],"o":2},"flag-af":{"a":"Afghanistan Flag","b":"1F1E6-1F1EB","d":true,"e":true,"f":true,"h":true,"k":[0,34],"o":2},"fox_face":{"a":"Fox Face","b":"1F98A","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","face"],"k":[42,28],"o":4},"pear":{"a":"Pear","b":"1F350","d":true,"e":true,"f":true,"h":true,"j":["fruit","nature","food"],"k":[6,40],"o":2},"mount_fuji":{"a":"Mount Fuji","b":"1F5FB","d":true,"e":true,"f":true,"h":true,"j":["photo","mountain","nature","japanese"],"k":[30,30],"o":2},"the_horns":{"skin_variations":{"1F3FB":{"unified":"1F918-1F3FB","non_qualified":null,"image":"1f918-1f3fb.png","sheet_x":37,"sheet_y":32,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F918-1F3FC","non_qualified":null,"image":"1f918-1f3fc.png","sheet_x":37,"sheet_y":33,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F918-1F3FD","non_qualified":null,"image":"1f918-1f3fd.png","sheet_x":37,"sheet_y":34,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F918-1F3FE","non_qualified":null,"image":"1f918-1f3fe.png","sheet_x":37,"sheet_y":35,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F918-1F3FF","non_qualified":null,"image":"1f918-1f3ff.png","sheet_x":37,"sheet_y":36,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Sign of the Horns","b":"1F918","d":true,"e":true,"f":true,"h":true,"k":[37,31],"n":["sign_of_the_horns"],"o":2},"call_me_hand":{"skin_variations":{"1F3FB":{"unified":"1F919-1F3FB","non_qualified":null,"image":"1f919-1f3fb.png","sheet_x":37,"sheet_y":38,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F919-1F3FC","non_qualified":null,"image":"1f919-1f3fc.png","sheet_x":37,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F919-1F3FD","non_qualified":null,"image":"1f919-1f3fd.png","sheet_x":37,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F919-1F3FE","non_qualified":null,"image":"1f919-1f3fe.png","sheet_x":37,"sheet_y":41,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F919-1F3FF","non_qualified":null,"image":"1f919-1f3ff.png","sheet_x":37,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Call Me Hand","b":"1F919","d":true,"e":true,"f":true,"h":true,"j":["hands","gesture"],"k":[37,37],"o":4},"flag-ag":{"a":"Antigua & Barbuda Flag","b":"1F1E6-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[0,35],"o":2},"raccoon":{"a":"Raccoon","b":"1F99D","d":true,"e":true,"f":true,"h":true,"k":[42,47],"o":11},"dolls":{"a":"Japanese Dolls","b":"1F38E","d":true,"e":true,"f":true,"h":true,"j":["japanese","toy","kimono"],"k":[7,50],"o":2},"blush":{"a":"Smiling Face with Smiling Eyes","b":"1F60A","d":true,"e":true,"f":true,"h":true,"j":["face","smile","happy","flushed","crush","embarrassed","shy","joy"],"k":[30,45],"m":":)","o":2},"peach":{"a":"Peach","b":"1F351","d":true,"e":true,"f":true,"h":true,"j":["fruit","nature","food"],"k":[6,41],"o":2},"baggage_claim":{"a":"Baggage Claim","b":"1F6C4","d":true,"e":true,"f":true,"h":true,"j":["blue-square","airport","transport"],"k":[36,26],"o":2},"socks":{"a":"Socks","b":"1F9E6","d":true,"e":true,"f":true,"h":true,"k":[51,25],"o":5},"camping":{"a":"Camping","b":"1F3D5-FE0F","c":"1F3D5","d":true,"e":true,"f":true,"h":true,"j":["photo","outdoors","tent"],"k":[10,40],"o":2},"dress":{"a":"Dress","b":"1F457","d":true,"e":true,"f":true,"h":true,"j":["clothes","fashion","shopping"],"k":[14,11],"o":2},"beach_with_umbrella":{"a":"Beach with Umbrella","b":"1F3D6-FE0F","c":"1F3D6","d":true,"e":true,"f":true,"h":true,"k":[10,41],"o":2},"cherries":{"a":"Cherries","b":"1F352","d":true,"e":true,"f":true,"h":true,"j":["food","fruit"],"k":[6,42],"o":2},"cat":{"a":"Cat Face","b":"1F431","d":true,"e":true,"f":true,"h":true,"j":["animal","meow","nature","pet","kitten"],"k":[12,21],"o":2},"point_left":{"skin_variations":{"1F3FB":{"unified":"1F448-1F3FB","non_qualified":null,"image":"1f448-1f3fb.png","sheet_x":13,"sheet_y":9,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F448-1F3FC","non_qualified":null,"image":"1f448-1f3fc.png","sheet_x":13,"sheet_y":10,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F448-1F3FD","non_qualified":null,"image":"1f448-1f3fd.png","sheet_x":13,"sheet_y":11,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F448-1F3FE","non_qualified":null,"image":"1f448-1f3fe.png","sheet_x":13,"sheet_y":12,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F448-1F3FF","non_qualified":null,"image":"1f448-1f3ff.png","sheet_x":13,"sheet_y":13,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"White Left Pointing Backhand Index","b":"1F448","d":true,"e":true,"f":true,"h":true,"j":["direction","fingers","hand","left"],"k":[13,8],"o":2},"left_luggage":{"a":"Left Luggage","b":"1F6C5","d":true,"e":true,"f":true,"h":true,"j":["blue-square","travel"],"k":[36,27],"o":2},"flag-ai":{"a":"Anguilla Flag","b":"1F1E6-1F1EE","d":true,"e":true,"f":true,"h":true,"k":[0,36],"o":2},"innocent":{"a":"Smiling Face with Halo","b":"1F607","d":true,"e":true,"f":true,"h":true,"j":["face","angel","heaven","halo"],"k":[30,42],"o":2},"flags":{"a":"Carp Streamer","b":"1F38F","d":true,"e":true,"f":true,"h":true,"j":["fish","japanese","koinobori","carp","banner"],"k":[7,51],"o":2},"warning":{"a":"Warning Sign","b":"26A0-FE0F","c":"26A0","d":true,"e":true,"f":true,"h":true,"j":["exclamation","wip","alert","error","problem","issue"],"k":[53,50],"o":2},"strawberry":{"a":"Strawberry","b":"1F353","d":true,"e":true,"f":true,"h":true,"j":["fruit","food","nature"],"k":[6,43],"o":2},"point_right":{"skin_variations":{"1F3FB":{"unified":"1F449-1F3FB","non_qualified":null,"image":"1f449-1f3fb.png","sheet_x":13,"sheet_y":15,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F449-1F3FC","non_qualified":null,"image":"1f449-1f3fc.png","sheet_x":13,"sheet_y":16,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F449-1F3FD","non_qualified":null,"image":"1f449-1f3fd.png","sheet_x":13,"sheet_y":17,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F449-1F3FE","non_qualified":null,"image":"1f449-1f3fe.png","sheet_x":13,"sheet_y":18,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F449-1F3FF","non_qualified":null,"image":"1f449-1f3ff.png","sheet_x":13,"sheet_y":19,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"White Right Pointing Backhand Index","b":"1F449","d":true,"e":true,"f":true,"h":true,"j":["fingers","hand","direction","right"],"k":[13,14],"o":2},"desert":{"a":"Desert","b":"1F3DC-FE0F","c":"1F3DC","d":true,"e":true,"f":true,"h":true,"j":["photo","warm","saharah"],"k":[10,47],"o":2},"kimono":{"a":"Kimono","b":"1F458","d":true,"e":true,"f":true,"h":true,"j":["dress","fashion","women","female","japanese"],"k":[14,12],"o":2},"flag-al":{"a":"Albania Flag","b":"1F1E6-1F1F1","d":true,"e":true,"f":true,"h":true,"k":[0,37],"o":2},"wind_chime":{"a":"Wind Chime","b":"1F390","d":true,"e":true,"f":true,"h":true,"j":["nature","ding","spring","bell"],"k":[7,52],"o":2},"smiling_face_with_3_hearts":{"a":"Smiling Face with Smiling Eyes and Three Hearts","b":"1F970","d":true,"e":true,"f":true,"h":true,"k":[42,6],"o":11},"cat2":{"a":"Cat","b":"1F408","d":true,"e":true,"f":true,"h":true,"j":["animal","meow","pet","cats"],"k":[11,36],"o":2},"rice_scene":{"a":"Moon Viewing Ceremony","b":"1F391","d":true,"e":true,"f":true,"h":true,"j":["photo","japan","asia","tsukimi"],"k":[7,53],"o":2},"heart_eyes":{"a":"Smiling Face with Heart-Shaped Eyes","b":"1F60D","d":true,"e":true,"f":true,"h":true,"j":["face","love","like","affection","valentines","infatuation","crush","heart"],"k":[30,48],"o":2},"sari":{"a":"Sari","b":"1F97B","d":true,"e":true,"f":true,"h":true,"k":[42,13],"o":12},"flag-am":{"a":"Armenia Flag","b":"1F1E6-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[0,38],"o":2},"lion_face":{"a":"Lion Face","b":"1F981","d":true,"e":true,"f":true,"h":true,"k":[42,19],"o":2},"desert_island":{"a":"Desert Island","b":"1F3DD-FE0F","c":"1F3DD","d":true,"e":true,"f":true,"h":true,"j":["photo","tropical","mojito"],"k":[10,48],"o":2},"point_up_2":{"skin_variations":{"1F3FB":{"unified":"1F446-1F3FB","non_qualified":null,"image":"1f446-1f3fb.png","sheet_x":12,"sheet_y":54,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F446-1F3FC","non_qualified":null,"image":"1f446-1f3fc.png","sheet_x":12,"sheet_y":55,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F446-1F3FD","non_qualified":null,"image":"1f446-1f3fd.png","sheet_x":12,"sheet_y":56,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F446-1F3FE","non_qualified":null,"image":"1f446-1f3fe.png","sheet_x":13,"sheet_y":0,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F446-1F3FF","non_qualified":null,"image":"1f446-1f3ff.png","sheet_x":13,"sheet_y":1,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"White Up Pointing Backhand Index","b":"1F446","d":true,"e":true,"f":true,"h":true,"j":["fingers","hand","direction","up"],"k":[12,53],"o":2},"kiwifruit":{"a":"Kiwifruit","b":"1F95D","d":true,"e":true,"f":true,"h":true,"k":[41,44],"o":4},"children_crossing":{"a":"Children Crossing","b":"1F6B8","d":true,"e":true,"f":true,"h":true,"j":["school","warning","danger","sign","driving","yellow-diamond"],"k":[36,9],"o":2},"national_park":{"a":"National Park","b":"1F3DE-FE0F","c":"1F3DE","d":true,"e":true,"f":true,"h":true,"j":["photo","environment","nature"],"k":[10,49],"o":2},"no_entry":{"a":"No Entry","b":"26D4","d":true,"e":true,"f":true,"h":true,"j":["limit","security","privacy","bad","denied","stop","circle"],"k":[54,8],"o":2},"one-piece_swimsuit":{"a":"One-Piece Swimsuit","b":"1FA71","d":true,"e":true,"f":true,"h":true,"k":[51,52],"o":12},"tiger":{"a":"Tiger Face","b":"1F42F","d":true,"e":true,"f":true,"h":true,"j":["animal","cat","danger","wild","nature","roar"],"k":[12,19],"o":2},"red_envelope":{"a":"Red Gift Envelope","b":"1F9E7","d":true,"e":true,"f":true,"h":true,"k":[51,26],"o":11},"star-struck":{"a":"Grinning Face with Star Eyes","b":"1F929","d":true,"e":true,"f":true,"h":true,"k":[38,43],"n":["grinning_face_with_star_eyes"],"o":5},"middle_finger":{"skin_variations":{"1F3FB":{"unified":"1F595-1F3FB","non_qualified":null,"image":"1f595-1f3fb.png","sheet_x":29,"sheet_y":55,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F595-1F3FC","non_qualified":null,"image":"1f595-1f3fc.png","sheet_x":29,"sheet_y":56,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F595-1F3FD","non_qualified":null,"image":"1f595-1f3fd.png","sheet_x":30,"sheet_y":0,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F595-1F3FE","non_qualified":null,"image":"1f595-1f3fe.png","sheet_x":30,"sheet_y":1,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F595-1F3FF","non_qualified":null,"image":"1f595-1f3ff.png","sheet_x":30,"sheet_y":2,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Reversed Hand with Middle Finger Extended","b":"1F595","d":true,"e":true,"f":true,"h":true,"k":[29,54],"n":["reversed_hand_with_middle_finger_extended"],"o":2},"flag-ao":{"a":"Angola Flag","b":"1F1E6-1F1F4","d":true,"e":true,"f":true,"h":true,"k":[0,39],"o":2},"tomato":{"a":"Tomato","b":"1F345","d":true,"e":true,"f":true,"h":true,"j":["fruit","vegetable","nature","food"],"k":[6,29],"o":2},"coconut":{"a":"Coconut","b":"1F965","d":true,"e":true,"f":true,"h":true,"k":[41,52],"o":5},"ribbon":{"a":"Ribbon","b":"1F380","d":true,"e":true,"f":true,"h":true,"j":["decoration","pink","girl","bowtie"],"k":[7,31],"o":2},"no_entry_sign":{"a":"No Entry Sign","b":"1F6AB","d":true,"e":true,"f":true,"h":true,"j":["forbid","stop","limit","denied","disallow","circle"],"k":[35,2],"o":2},"point_down":{"skin_variations":{"1F3FB":{"unified":"1F447-1F3FB","non_qualified":null,"image":"1f447-1f3fb.png","sheet_x":13,"sheet_y":3,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F447-1F3FC","non_qualified":null,"image":"1f447-1f3fc.png","sheet_x":13,"sheet_y":4,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F447-1F3FD","non_qualified":null,"image":"1f447-1f3fd.png","sheet_x":13,"sheet_y":5,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F447-1F3FE","non_qualified":null,"image":"1f447-1f3fe.png","sheet_x":13,"sheet_y":6,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F447-1F3FF","non_qualified":null,"image":"1f447-1f3ff.png","sheet_x":13,"sheet_y":7,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"White Down Pointing Backhand Index","b":"1F447","d":true,"e":true,"f":true,"h":true,"j":["fingers","hand","direction","down"],"k":[13,2],"o":2},"flag-aq":{"a":"Antarctica Flag","b":"1F1E6-1F1F6","d":true,"e":true,"f":true,"h":true,"k":[0,40],"o":2},"briefs":{"a":"Briefs","b":"1FA72","d":true,"e":true,"f":true,"h":true,"k":[51,53],"o":12},"kissing_heart":{"a":"Face Throwing a Kiss","b":"1F618","d":true,"e":true,"f":true,"h":true,"j":["face","love","like","affection","valentines","infatuation","kiss"],"k":[31,2],"l":[":*",":-*"],"o":2},"tiger2":{"a":"Tiger","b":"1F405","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","roar"],"k":[11,33],"o":2},"stadium":{"a":"Stadium","b":"1F3DF-FE0F","c":"1F3DF","d":true,"e":true,"f":true,"h":true,"j":["photo","place","sports","concert","venue"],"k":[10,50],"o":2},"leopard":{"a":"Leopard","b":"1F406","d":true,"e":true,"f":true,"h":true,"j":["animal","nature"],"k":[11,34],"o":2},"no_bicycles":{"a":"No Bicycles","b":"1F6B3","d":true,"e":true,"f":true,"h":true,"j":["cyclist","prohibited","circle"],"k":[35,10],"o":2},"kissing":{"a":"Kissing Face","b":"1F617","d":true,"e":true,"f":true,"h":true,"j":["love","like","face","3","valentines","infatuation","kiss"],"k":[31,1],"o":2},"flag-ar":{"a":"Argentina Flag","b":"1F1E6-1F1F7","d":true,"e":true,"f":true,"h":true,"k":[0,41],"o":2},"avocado":{"a":"Avocado","b":"1F951","d":true,"e":true,"f":true,"h":true,"j":["fruit","food"],"k":[41,32],"o":4},"point_up":{"skin_variations":{"1F3FB":{"unified":"261D-1F3FB","non_qualified":null,"image":"261d-1f3fb.png","sheet_x":53,"sheet_y":3,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"261D-1F3FC","non_qualified":null,"image":"261d-1f3fc.png","sheet_x":53,"sheet_y":4,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"261D-1F3FD","non_qualified":null,"image":"261d-1f3fd.png","sheet_x":53,"sheet_y":5,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"261D-1F3FE","non_qualified":null,"image":"261d-1f3fe.png","sheet_x":53,"sheet_y":6,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"261D-1F3FF","non_qualified":null,"image":"261d-1f3ff.png","sheet_x":53,"sheet_y":7,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"White Up Pointing Index","b":"261D-FE0F","c":"261D","d":true,"e":true,"f":true,"h":true,"j":["hand","fingers","direction","up"],"k":[53,2],"o":2},"gift":{"a":"Wrapped Present","b":"1F381","d":true,"e":true,"f":true,"h":true,"j":["present","birthday","christmas","xmas"],"k":[7,32],"o":2},"classical_building":{"a":"Classical Building","b":"1F3DB-FE0F","c":"1F3DB","d":true,"e":true,"f":true,"h":true,"j":["art","culture","history"],"k":[10,46],"o":2},"shorts":{"a":"Shorts","b":"1FA73","d":true,"e":true,"f":true,"h":true,"k":[51,54],"o":12},"+1":{"skin_variations":{"1F3FB":{"unified":"1F44D-1F3FB","non_qualified":null,"image":"1f44d-1f3fb.png","sheet_x":13,"sheet_y":39,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F44D-1F3FC","non_qualified":null,"image":"1f44d-1f3fc.png","sheet_x":13,"sheet_y":40,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F44D-1F3FD","non_qualified":null,"image":"1f44d-1f3fd.png","sheet_x":13,"sheet_y":41,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F44D-1F3FE","non_qualified":null,"image":"1f44d-1f3fe.png","sheet_x":13,"sheet_y":42,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F44D-1F3FF","non_qualified":null,"image":"1f44d-1f3ff.png","sheet_x":13,"sheet_y":43,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Thumbs Up Sign","b":"1F44D","d":true,"e":true,"f":true,"h":true,"j":["thumbsup","yes","awesome","good","agree","accept","cool","hand","like"],"k":[13,38],"n":["thumbsup"],"o":2},"horse":{"a":"Horse Face","b":"1F434","d":true,"e":true,"f":true,"h":true,"j":["animal","brown","nature"],"k":[12,24],"o":2},"bikini":{"a":"Bikini","b":"1F459","d":true,"e":true,"f":true,"h":true,"j":["swimming","female","woman","girl","fashion","beach","summer"],"k":[14,13],"o":2},"no_smoking":{"a":"No Smoking Symbol","b":"1F6AD","d":true,"e":true,"f":true,"h":true,"j":["cigarette","blue-square","smell","smoke"],"k":[35,4],"o":2},"eggplant":{"a":"Aubergine","b":"1F346","d":true,"e":true,"f":true,"h":true,"j":["vegetable","nature","food","aubergine"],"k":[6,30],"o":2},"flag-as":{"a":"American Samoa Flag","b":"1F1E6-1F1F8","d":true,"e":true,"f":true,"h":true,"k":[0,42],"o":2},"reminder_ribbon":{"a":"Reminder Ribbon","b":"1F397-FE0F","c":"1F397","d":true,"e":true,"f":true,"h":true,"j":["sports","cause","support","awareness"],"k":[8,0],"o":2},"building_construction":{"a":"Building Construction","b":"1F3D7-FE0F","c":"1F3D7","d":true,"e":true,"f":true,"h":true,"j":["wip","working","progress"],"k":[10,42],"o":2},"relaxed":{"a":"White Smiling Face","b":"263A-FE0F","c":"263A","d":true,"e":true,"f":true,"h":true,"j":["face","blush","massage","happiness"],"k":[53,17],"o":2},"kissing_closed_eyes":{"a":"Kissing Face with Closed Eyes","b":"1F61A","d":true,"e":true,"f":true,"h":true,"j":["face","love","like","affection","valentines","infatuation","kiss"],"k":[31,4],"o":2},"-1":{"skin_variations":{"1F3FB":{"unified":"1F44E-1F3FB","non_qualified":null,"image":"1f44e-1f3fb.png","sheet_x":13,"sheet_y":45,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F44E-1F3FC","non_qualified":null,"image":"1f44e-1f3fc.png","sheet_x":13,"sheet_y":46,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F44E-1F3FD","non_qualified":null,"image":"1f44e-1f3fd.png","sheet_x":13,"sheet_y":47,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F44E-1F3FE","non_qualified":null,"image":"1f44e-1f3fe.png","sheet_x":13,"sheet_y":48,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F44E-1F3FF","non_qualified":null,"image":"1f44e-1f3ff.png","sheet_x":13,"sheet_y":49,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Thumbs Down Sign","b":"1F44E","d":true,"e":true,"f":true,"h":true,"j":["thumbsdown","no","dislike","hand"],"k":[13,44],"n":["thumbsdown"],"o":2},"admission_tickets":{"a":"Admission Tickets","b":"1F39F-FE0F","c":"1F39F","d":true,"e":true,"f":true,"h":true,"k":[8,5],"o":2},"flag-at":{"a":"Austria Flag","b":"1F1E6-1F1F9","d":true,"e":true,"f":true,"h":true,"k":[0,43],"o":2},"womans_clothes":{"a":"Womans Clothes","b":"1F45A","d":true,"e":true,"f":true,"h":true,"j":["fashion","shopping_bags","female"],"k":[14,14],"o":2},"do_not_litter":{"a":"Do Not Litter Symbol","b":"1F6AF","d":true,"e":true,"f":true,"h":true,"j":["trash","bin","garbage","circle"],"k":[35,6],"o":2},"potato":{"a":"Potato","b":"1F954","d":true,"e":true,"f":true,"h":true,"j":["food","tuber","vegatable","starch"],"k":[41,35],"o":4},"racehorse":{"a":"Horse","b":"1F40E","d":true,"e":true,"f":true,"h":true,"j":["animal","gamble","luck"],"k":[11,42],"o":2},"bricks":{"a":"Brick","b":"1F9F1","d":true,"e":true,"f":true,"h":true,"k":[51,36],"o":11},"fist":{"skin_variations":{"1F3FB":{"unified":"270A-1F3FB","non_qualified":null,"image":"270a-1f3fb.png","sheet_x":54,"sheet_y":44,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"270A-1F3FC","non_qualified":null,"image":"270a-1f3fc.png","sheet_x":54,"sheet_y":45,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"270A-1F3FD","non_qualified":null,"image":"270a-1f3fd.png","sheet_x":54,"sheet_y":46,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"270A-1F3FE","non_qualified":null,"image":"270a-1f3fe.png","sheet_x":54,"sheet_y":47,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"270A-1F3FF","non_qualified":null,"image":"270a-1f3ff.png","sheet_x":54,"sheet_y":48,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Raised Fist","b":"270A","d":true,"e":true,"f":true,"h":true,"j":["fingers","hand","grasp"],"k":[54,43],"o":2},"house_buildings":{"a":"House Buildings","b":"1F3D8-FE0F","c":"1F3D8","d":true,"e":true,"f":true,"h":true,"k":[10,43],"o":2},"carrot":{"a":"Carrot","b":"1F955","d":true,"e":true,"f":true,"h":true,"j":["vegetable","food","orange"],"k":[41,36],"o":4},"ticket":{"a":"Ticket","b":"1F3AB","d":true,"e":true,"f":true,"h":true,"j":["event","concert","pass"],"k":[8,17],"o":2},"flag-au":{"a":"Australia Flag","b":"1F1E6-1F1FA","d":true,"e":true,"f":true,"h":true,"k":[0,44],"o":2},"non-potable_water":{"a":"Non-Potable Water Symbol","b":"1F6B1","d":true,"e":true,"f":true,"h":true,"j":["drink","faucet","tap","circle"],"k":[35,8],"o":2},"purse":{"a":"Purse","b":"1F45B","d":true,"e":true,"f":true,"h":true,"j":["fashion","accessories","money","sales","shopping"],"k":[14,15],"o":2},"unicorn_face":{"a":"Unicorn Face","b":"1F984","d":true,"e":true,"f":true,"h":true,"k":[42,22],"o":2},"kissing_smiling_eyes":{"a":"Kissing Face with Smiling Eyes","b":"1F619","d":true,"e":true,"f":true,"h":true,"j":["face","affection","valentines","infatuation","kiss"],"k":[31,3],"o":2},"facepunch":{"skin_variations":{"1F3FB":{"unified":"1F44A-1F3FB","non_qualified":null,"image":"1f44a-1f3fb.png","sheet_x":13,"sheet_y":21,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F44A-1F3FC","non_qualified":null,"image":"1f44a-1f3fc.png","sheet_x":13,"sheet_y":22,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F44A-1F3FD","non_qualified":null,"image":"1f44a-1f3fd.png","sheet_x":13,"sheet_y":23,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F44A-1F3FE","non_qualified":null,"image":"1f44a-1f3fe.png","sheet_x":13,"sheet_y":24,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F44A-1F3FF","non_qualified":null,"image":"1f44a-1f3ff.png","sheet_x":13,"sheet_y":25,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Fisted Hand Sign","b":"1F44A","d":true,"e":true,"f":true,"h":true,"j":["angry","violence","fist","hit","attack","hand"],"k":[13,20],"n":["punch"],"o":2},"medal":{"a":"Medal","b":"1F396-FE0F","c":"1F396","d":true,"e":true,"f":true,"h":true,"k":[7,56],"o":2},"zebra_face":{"a":"Zebra Face","b":"1F993","d":true,"e":true,"f":true,"h":true,"k":[42,37],"o":5},"handbag":{"a":"Handbag","b":"1F45C","d":true,"e":true,"f":true,"h":true,"j":["fashion","accessory","accessories","shopping"],"k":[14,16],"o":2},"derelict_house_building":{"a":"Derelict House Building","b":"1F3DA-FE0F","c":"1F3DA","d":true,"e":true,"f":true,"h":true,"k":[10,45],"o":2},"yum":{"a":"Face Savouring Delicious Food","b":"1F60B","d":true,"e":true,"f":true,"h":true,"j":["happy","joy","tongue","smile","face","silly","yummy","nom","delicious","savouring"],"k":[30,46],"o":2},"corn":{"a":"Ear of Maize","b":"1F33D","d":true,"e":true,"f":true,"h":true,"j":["food","vegetable","plant"],"k":[6,21],"o":2},"flag-aw":{"a":"Aruba Flag","b":"1F1E6-1F1FC","d":true,"e":true,"f":true,"h":true,"k":[0,45],"o":2},"no_pedestrians":{"a":"No Pedestrians","b":"1F6B7","d":true,"e":true,"f":true,"h":true,"j":["rules","crossing","walking","circle"],"k":[36,8],"o":2},"house":{"a":"House Building","b":"1F3E0","d":true,"e":true,"f":true,"h":true,"j":["building","home"],"k":[10,51],"o":2},"hot_pepper":{"a":"Hot Pepper","b":"1F336-FE0F","c":"1F336","d":true,"e":true,"f":true,"h":true,"j":["food","spicy","chilli","chili"],"k":[6,14],"o":2},"flag-ax":{"a":"Åland Islands Flag","b":"1F1E6-1F1FD","d":true,"e":true,"f":true,"h":true,"k":[0,46],"o":2},"trophy":{"a":"Trophy","b":"1F3C6","d":true,"e":true,"f":true,"h":true,"j":["win","award","contest","place","ftw","ceremony"],"k":[9,26],"o":2},"deer":{"a":"Deer","b":"1F98C","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","horns","venison"],"k":[42,30],"o":4},"left-facing_fist":{"skin_variations":{"1F3FB":{"unified":"1F91B-1F3FB","non_qualified":null,"image":"1f91b-1f3fb.png","sheet_x":37,"sheet_y":50,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F91B-1F3FC","non_qualified":null,"image":"1f91b-1f3fc.png","sheet_x":37,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F91B-1F3FD","non_qualified":null,"image":"1f91b-1f3fd.png","sheet_x":37,"sheet_y":52,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F91B-1F3FE","non_qualified":null,"image":"1f91b-1f3fe.png","sheet_x":37,"sheet_y":53,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F91B-1F3FF","non_qualified":null,"image":"1f91b-1f3ff.png","sheet_x":37,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Left-Facing Fist","b":"1F91B","d":true,"e":true,"f":true,"h":true,"k":[37,49],"o":4},"stuck_out_tongue":{"a":"Face with Stuck-out Tongue","b":"1F61B","d":true,"e":true,"f":true,"h":true,"j":["face","prank","childish","playful","mischievous","smile","tongue"],"k":[31,5],"l":[":p",":-p",":P",":-P",":b",":-b"],"m":":p","o":2},"pouch":{"a":"Pouch","b":"1F45D","d":true,"e":true,"f":true,"h":true,"j":["bag","accessories","shopping"],"k":[14,17],"o":2},"no_mobile_phones":{"a":"No Mobile Phones","b":"1F4F5","d":true,"e":true,"f":true,"h":true,"j":["iphone","mute","circle"],"k":[27,18],"o":2},"stuck_out_tongue_winking_eye":{"a":"Face with Stuck-out Tongue and Winking Eye","b":"1F61C","d":true,"e":true,"f":true,"h":true,"j":["face","prank","childish","playful","mischievous","smile","wink","tongue"],"k":[31,6],"l":[";p",";-p",";b",";-b",";P",";-P"],"m":";p","o":2},"sports_medal":{"a":"Sports Medal","b":"1F3C5","d":true,"e":true,"f":true,"h":true,"k":[9,25],"o":2},"cucumber":{"a":"Cucumber","b":"1F952","d":true,"e":true,"f":true,"h":true,"j":["fruit","food","pickle"],"k":[41,33],"o":4},"cow":{"a":"Cow Face","b":"1F42E","d":true,"e":true,"f":true,"h":true,"j":["beef","ox","animal","nature","moo","milk"],"k":[12,18],"o":2},"underage":{"a":"No One Under Eighteen Symbol","b":"1F51E","d":true,"e":true,"f":true,"h":true,"j":["18","drink","pub","night","minor","circle"],"k":[28,1],"o":2},"flag-az":{"a":"Azerbaijan Flag","b":"1F1E6-1F1FF","d":true,"e":true,"f":true,"h":true,"k":[0,47],"o":2},"shopping_bags":{"a":"Shopping Bags","b":"1F6CD-FE0F","c":"1F6CD","d":true,"e":true,"f":true,"h":true,"k":[36,35],"o":2},"right-facing_fist":{"skin_variations":{"1F3FB":{"unified":"1F91C-1F3FB","non_qualified":null,"image":"1f91c-1f3fb.png","sheet_x":37,"sheet_y":56,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F91C-1F3FC","non_qualified":null,"image":"1f91c-1f3fc.png","sheet_x":38,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F91C-1F3FD","non_qualified":null,"image":"1f91c-1f3fd.png","sheet_x":38,"sheet_y":1,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F91C-1F3FE","non_qualified":null,"image":"1f91c-1f3fe.png","sheet_x":38,"sheet_y":2,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F91C-1F3FF","non_qualified":null,"image":"1f91c-1f3ff.png","sheet_x":38,"sheet_y":3,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Right-Facing Fist","b":"1F91C","d":true,"e":true,"f":true,"h":true,"k":[37,55],"o":4},"house_with_garden":{"a":"House with Garden","b":"1F3E1","d":true,"e":true,"f":true,"h":true,"j":["home","plant","nature"],"k":[10,52],"o":2},"clap":{"skin_variations":{"1F3FB":{"unified":"1F44F-1F3FB","non_qualified":null,"image":"1f44f-1f3fb.png","sheet_x":13,"sheet_y":51,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F44F-1F3FC","non_qualified":null,"image":"1f44f-1f3fc.png","sheet_x":13,"sheet_y":52,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F44F-1F3FD","non_qualified":null,"image":"1f44f-1f3fd.png","sheet_x":13,"sheet_y":53,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F44F-1F3FE","non_qualified":null,"image":"1f44f-1f3fe.png","sheet_x":13,"sheet_y":54,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F44F-1F3FF","non_qualified":null,"image":"1f44f-1f3ff.png","sheet_x":13,"sheet_y":55,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Clapping Hands Sign","b":"1F44F","d":true,"e":true,"f":true,"h":true,"j":["hands","praise","applause","congrats","yay"],"k":[13,50],"o":2},"leafy_green":{"a":"Leafy Green","b":"1F96C","d":true,"e":true,"f":true,"h":true,"k":[42,2],"o":11},"office":{"a":"Office Building","b":"1F3E2","d":true,"e":true,"f":true,"h":true,"j":["building","bureau","work"],"k":[10,53],"o":2},"flag-ba":{"a":"Bosnia & Herzegovina Flag","b":"1F1E7-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[0,48],"o":2},"zany_face":{"a":"Grinning Face with One Large and One Small Eye","b":"1F92A","d":true,"e":true,"f":true,"h":true,"k":[38,44],"n":["grinning_face_with_one_large_and_one_small_eye"],"o":5},"first_place_medal":{"a":"First Place Medal","b":"1F947","d":true,"e":true,"f":true,"h":true,"k":[41,22],"o":4},"ox":{"a":"Ox","b":"1F402","d":true,"e":true,"f":true,"h":true,"j":["animal","cow","beef"],"k":[11,30],"o":2},"school_satchel":{"a":"School Satchel","b":"1F392","d":true,"e":true,"f":true,"h":true,"j":["student","education","bag","backpack"],"k":[7,54],"o":2},"radioactive_sign":{"a":"Radioactive Sign","b":"2622-FE0F","c":"2622","d":true,"e":true,"f":true,"h":true,"k":[53,9],"o":2},"second_place_medal":{"a":"Second Place Medal","b":"1F948","d":true,"e":true,"f":true,"h":true,"k":[41,23],"o":4},"stuck_out_tongue_closed_eyes":{"a":"Face with Stuck-out Tongue and Tightly-Closed Eyes","b":"1F61D","d":true,"e":true,"f":true,"h":true,"j":["face","prank","playful","mischievous","smile","tongue"],"k":[31,7],"o":2},"broccoli":{"a":"Broccoli","b":"1F966","d":true,"e":true,"f":true,"h":true,"k":[41,53],"o":5},"biohazard_sign":{"a":"Biohazard Sign","b":"2623-FE0F","c":"2623","d":true,"e":true,"f":true,"h":true,"k":[53,10],"o":2},"mans_shoe":{"a":"Mans Shoe","b":"1F45E","d":true,"e":true,"f":true,"h":true,"j":["fashion","male"],"k":[14,18],"n":["shoe"],"o":2},"raised_hands":{"skin_variations":{"1F3FB":{"unified":"1F64C-1F3FB","non_qualified":null,"image":"1f64c-1f3fb.png","sheet_x":33,"sheet_y":9,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F64C-1F3FC","non_qualified":null,"image":"1f64c-1f3fc.png","sheet_x":33,"sheet_y":10,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F64C-1F3FD","non_qualified":null,"image":"1f64c-1f3fd.png","sheet_x":33,"sheet_y":11,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F64C-1F3FE","non_qualified":null,"image":"1f64c-1f3fe.png","sheet_x":33,"sheet_y":12,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F64C-1F3FF","non_qualified":null,"image":"1f64c-1f3ff.png","sheet_x":33,"sheet_y":13,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Person Raising Both Hands in Celebration","b":"1F64C","d":true,"e":true,"f":true,"h":true,"j":["gesture","hooray","yea","celebration","hands"],"k":[33,8],"o":2},"post_office":{"a":"Japanese Post Office","b":"1F3E3","d":true,"e":true,"f":true,"h":true,"j":["building","envelope","communication"],"k":[10,54],"o":2},"flag-bb":{"a":"Barbados Flag","b":"1F1E7-1F1E7","d":true,"e":true,"f":true,"h":true,"k":[0,49],"o":2},"water_buffalo":{"a":"Water Buffalo","b":"1F403","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","ox","cow"],"k":[11,31],"o":2},"third_place_medal":{"a":"Third Place Medal","b":"1F949","d":true,"e":true,"f":true,"h":true,"k":[41,24],"o":4},"european_post_office":{"a":"European Post Office","b":"1F3E4","d":true,"e":true,"f":true,"h":true,"j":["building","email"],"k":[10,55],"o":2},"athletic_shoe":{"a":"Athletic Shoe","b":"1F45F","d":true,"e":true,"f":true,"h":true,"j":["shoes","sports","sneakers"],"k":[14,19],"o":2},"arrow_up":{"a":"Upwards Black Arrow","b":"2B06-FE0F","c":"2B06","d":true,"e":true,"f":true,"h":true,"j":["blue-square","continue","top","direction"],"k":[55,38],"o":2},"cow2":{"a":"Cow","b":"1F404","d":true,"e":true,"f":true,"h":true,"j":["beef","ox","animal","nature","moo","milk"],"k":[11,32],"o":2},"open_hands":{"skin_variations":{"1F3FB":{"unified":"1F450-1F3FB","non_qualified":null,"image":"1f450-1f3fb.png","sheet_x":14,"sheet_y":0,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F450-1F3FC","non_qualified":null,"image":"1f450-1f3fc.png","sheet_x":14,"sheet_y":1,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F450-1F3FD","non_qualified":null,"image":"1f450-1f3fd.png","sheet_x":14,"sheet_y":2,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F450-1F3FE","non_qualified":null,"image":"1f450-1f3fe.png","sheet_x":14,"sheet_y":3,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F450-1F3FF","non_qualified":null,"image":"1f450-1f3ff.png","sheet_x":14,"sheet_y":4,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Open Hands Sign","b":"1F450","d":true,"e":true,"f":true,"h":true,"j":["fingers","butterfly","hands","open"],"k":[13,56],"o":2},"garlic":{"a":"Garlic","b":"1F9C4","d":true,"e":true,"f":true,"h":true,"k":[44,12],"o":12},"money_mouth_face":{"a":"Money-Mouth Face","b":"1F911","d":true,"e":true,"f":true,"h":true,"j":["face","rich","dollar","money"],"k":[37,24],"o":2},"flag-bd":{"a":"Bangladesh Flag","b":"1F1E7-1F1E9","d":true,"e":true,"f":true,"h":true,"k":[0,50],"o":2},"soccer":{"a":"Soccer Ball","b":"26BD","d":true,"e":true,"f":true,"h":true,"j":["sports","football"],"k":[53,56],"o":2},"hugging_face":{"a":"Hugging Face","b":"1F917","d":true,"e":true,"f":true,"h":true,"k":[37,30],"o":2},"onion":{"a":"Onion","b":"1F9C5","d":true,"e":true,"f":true,"h":true,"k":[44,13],"o":12},"arrow_upper_right":{"a":"North East Arrow","b":"2197-FE0F","c":"2197","d":true,"e":true,"f":true,"h":true,"j":["blue-square","point","direction","diagonal","northeast"],"k":[52,17],"o":2},"palms_up_together":{"skin_variations":{"1F3FB":{"unified":"1F932-1F3FB","non_qualified":null,"image":"1f932-1f3fb.png","sheet_x":39,"sheet_y":6,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F932-1F3FC","non_qualified":null,"image":"1f932-1f3fc.png","sheet_x":39,"sheet_y":7,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F932-1F3FD","non_qualified":null,"image":"1f932-1f3fd.png","sheet_x":39,"sheet_y":8,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F932-1F3FE","non_qualified":null,"image":"1f932-1f3fe.png","sheet_x":39,"sheet_y":9,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F932-1F3FF","non_qualified":null,"image":"1f932-1f3ff.png","sheet_x":39,"sheet_y":10,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Palms Up Together","b":"1F932","d":true,"e":true,"f":true,"h":true,"k":[39,5],"o":5},"pig":{"a":"Pig Face","b":"1F437","d":true,"e":true,"f":true,"h":true,"j":["animal","oink","nature"],"k":[12,27],"o":2},"hospital":{"a":"Hospital","b":"1F3E5","d":true,"e":true,"f":true,"h":true,"j":["building","health","surgery","doctor"],"k":[10,56],"o":2},"hiking_boot":{"a":"Hiking Boot","b":"1F97E","d":true,"e":true,"f":true,"h":true,"k":[42,16],"o":11},"flag-be":{"a":"Belgium Flag","b":"1F1E7-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[0,51],"o":2},"flag-bf":{"a":"Burkina Faso Flag","b":"1F1E7-1F1EB","d":true,"e":true,"f":true,"h":true,"k":[0,52],"o":2},"mushroom":{"a":"Mushroom","b":"1F344","d":true,"e":true,"f":true,"h":true,"j":["plant","vegetable"],"k":[6,28],"o":2},"pig2":{"a":"Pig","b":"1F416","d":true,"e":true,"f":true,"h":true,"j":["animal","nature"],"k":[11,51],"o":2},"baseball":{"a":"Baseball","b":"26BE","d":true,"e":true,"f":true,"h":true,"j":["sports","balls"],"k":[54,0],"o":2},"face_with_hand_over_mouth":{"a":"Smiling Face with Smiling Eyes and Hand Covering Mouth","b":"1F92D","d":true,"e":true,"f":true,"h":true,"k":[38,47],"n":["smiling_face_with_smiling_eyes_and_hand_covering_mouth"],"o":5},"handshake":{"a":"Handshake","b":"1F91D","d":true,"e":true,"f":true,"h":true,"j":["agreement","shake"],"k":[38,4],"o":4},"womans_flat_shoe":{"a":"Flat Shoe","b":"1F97F","d":true,"e":true,"f":true,"h":true,"k":[42,17],"o":11},"bank":{"a":"Bank","b":"1F3E6","d":true,"e":true,"f":true,"h":true,"j":["building","money","sales","cash","business","enterprise"],"k":[11,0],"o":2},"arrow_right":{"a":"Black Rightwards Arrow","b":"27A1-FE0F","c":"27A1","d":true,"e":true,"f":true,"h":true,"j":["blue-square","next"],"k":[55,32],"o":2},"peanuts":{"a":"Peanuts","b":"1F95C","d":true,"e":true,"f":true,"h":true,"j":["food","nut"],"k":[41,43],"o":4},"shushing_face":{"a":"Face with Finger Covering Closed Lips","b":"1F92B","d":true,"e":true,"f":true,"h":true,"k":[38,45],"n":["face_with_finger_covering_closed_lips"],"o":5},"pray":{"skin_variations":{"1F3FB":{"unified":"1F64F-1F3FB","non_qualified":null,"image":"1f64f-1f3fb.png","sheet_x":33,"sheet_y":51,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F64F-1F3FC","non_qualified":null,"image":"1f64f-1f3fc.png","sheet_x":33,"sheet_y":52,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F64F-1F3FD","non_qualified":null,"image":"1f64f-1f3fd.png","sheet_x":33,"sheet_y":53,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F64F-1F3FE","non_qualified":null,"image":"1f64f-1f3fe.png","sheet_x":33,"sheet_y":54,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F64F-1F3FF","non_qualified":null,"image":"1f64f-1f3ff.png","sheet_x":33,"sheet_y":55,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Person with Folded Hands","b":"1F64F","d":true,"e":true,"f":true,"h":true,"j":["please","hope","wish","namaste","highfive"],"k":[33,50],"o":2},"softball":{"a":"Softball","b":"1F94E","d":true,"e":true,"f":true,"h":true,"k":[41,29],"o":11},"high_heel":{"a":"High-Heeled Shoe","b":"1F460","d":true,"e":true,"f":true,"h":true,"j":["fashion","shoes","female","pumps","stiletto"],"k":[14,20],"o":2},"flag-bg":{"a":"Bulgaria Flag","b":"1F1E7-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[0,53],"o":2},"arrow_lower_right":{"a":"South East Arrow","b":"2198-FE0F","c":"2198","d":true,"e":true,"f":true,"h":true,"j":["blue-square","direction","diagonal","southeast"],"k":[52,18],"o":2},"hotel":{"a":"Hotel","b":"1F3E8","d":true,"e":true,"f":true,"h":true,"j":["building","accomodation","checkin"],"k":[11,2],"o":2},"boar":{"a":"Boar","b":"1F417","d":true,"e":true,"f":true,"h":true,"j":["animal","nature"],"k":[11,52],"o":2},"sandal":{"a":"Womans Sandal","b":"1F461","d":true,"e":true,"f":true,"h":true,"j":["shoes","fashion","flip flops"],"k":[14,21],"o":2},"flag-bh":{"a":"Bahrain Flag","b":"1F1E7-1F1ED","d":true,"e":true,"f":true,"h":true,"k":[0,54],"o":2},"arrow_down":{"a":"Downwards Black Arrow","b":"2B07-FE0F","c":"2B07","d":true,"e":true,"f":true,"h":true,"j":["blue-square","direction","bottom"],"k":[55,39],"o":2},"thinking_face":{"a":"Thinking Face","b":"1F914","d":true,"e":true,"f":true,"h":true,"k":[37,27],"o":2},"writing_hand":{"skin_variations":{"1F3FB":{"unified":"270D-1F3FB","non_qualified":null,"image":"270d-1f3fb.png","sheet_x":55,"sheet_y":5,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"270D-1F3FC","non_qualified":null,"image":"270d-1f3fc.png","sheet_x":55,"sheet_y":6,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"270D-1F3FD","non_qualified":null,"image":"270d-1f3fd.png","sheet_x":55,"sheet_y":7,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"270D-1F3FE","non_qualified":null,"image":"270d-1f3fe.png","sheet_x":55,"sheet_y":8,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"270D-1F3FF","non_qualified":null,"image":"270d-1f3ff.png","sheet_x":55,"sheet_y":9,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Writing Hand","b":"270D-FE0F","c":"270D","d":true,"e":true,"f":true,"h":true,"j":["lower_left_ballpoint_pen","stationery","write","compose"],"k":[55,4],"o":2},"chestnut":{"a":"Chestnut","b":"1F330","d":true,"e":true,"f":true,"h":true,"j":["food","squirrel"],"k":[6,8],"o":2},"basketball":{"a":"Basketball and Hoop","b":"1F3C0","d":true,"e":true,"f":true,"h":true,"j":["sports","balls","NBA"],"k":[8,38],"o":2},"pig_nose":{"a":"Pig Nose","b":"1F43D","d":true,"e":true,"f":true,"h":true,"j":["animal","oink"],"k":[12,33],"o":2},"love_hotel":{"a":"Love Hotel","b":"1F3E9","d":true,"e":true,"f":true,"h":true,"j":["like","affection","dating"],"k":[11,3],"o":2},"nail_care":{"skin_variations":{"1F3FB":{"unified":"1F485-1F3FB","non_qualified":null,"image":"1f485-1f3fb.png","sheet_x":24,"sheet_y":34,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F485-1F3FC","non_qualified":null,"image":"1f485-1f3fc.png","sheet_x":24,"sheet_y":35,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F485-1F3FD","non_qualified":null,"image":"1f485-1f3fd.png","sheet_x":24,"sheet_y":36,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F485-1F3FE","non_qualified":null,"image":"1f485-1f3fe.png","sheet_x":24,"sheet_y":37,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F485-1F3FF","non_qualified":null,"image":"1f485-1f3ff.png","sheet_x":24,"sheet_y":38,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Nail Polish","b":"1F485","d":true,"e":true,"f":true,"h":true,"j":["beauty","manicure","finger","fashion","nail"],"k":[24,33],"o":2},"volleyball":{"a":"Volleyball","b":"1F3D0","d":true,"e":true,"f":true,"h":true,"j":["sports","balls"],"k":[10,35],"o":2},"flag-bi":{"a":"Burundi Flag","b":"1F1E7-1F1EE","d":true,"e":true,"f":true,"h":true,"k":[0,55],"o":2},"arrow_lower_left":{"a":"South West Arrow","b":"2199-FE0F","c":"2199","d":true,"e":true,"f":true,"h":true,"j":["blue-square","direction","diagonal","southwest"],"k":[52,19],"o":2},"ram":{"a":"Ram","b":"1F40F","d":true,"e":true,"f":true,"h":true,"j":["animal","sheep","nature"],"k":[11,43],"o":2},"ballet_shoes":{"a":"Ballet Shoes","b":"1FA70","d":true,"e":true,"f":true,"h":true,"k":[51,51],"o":12},"zipper_mouth_face":{"a":"Zipper-Mouth Face","b":"1F910","d":true,"e":true,"f":true,"h":true,"j":["face","sealed","zipper","secret"],"k":[37,23],"o":2},"bread":{"a":"Bread","b":"1F35E","d":true,"e":true,"f":true,"h":true,"j":["food","wheat","breakfast","toast"],"k":[6,54],"o":2},"convenience_store":{"a":"Convenience Store","b":"1F3EA","d":true,"e":true,"f":true,"h":true,"j":["building","shopping","groceries"],"k":[11,4],"o":2},"boot":{"a":"Womans Boots","b":"1F462","d":true,"e":true,"f":true,"h":true,"j":["shoes","fashion"],"k":[14,22],"o":2},"sheep":{"a":"Sheep","b":"1F411","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","wool","shipit"],"k":[11,45],"o":2},"face_with_raised_eyebrow":{"a":"Face with One Eyebrow Raised","b":"1F928","d":true,"e":true,"f":true,"h":true,"k":[38,42],"n":["face_with_one_eyebrow_raised"],"o":5},"flag-bj":{"a":"Benin Flag","b":"1F1E7-1F1EF","d":true,"e":true,"f":true,"h":true,"k":[0,56],"o":2},"arrow_left":{"a":"Leftwards Black Arrow","b":"2B05-FE0F","c":"2B05","d":true,"e":true,"f":true,"h":true,"j":["blue-square","previous","back"],"k":[55,37],"o":2},"selfie":{"skin_variations":{"1F3FB":{"unified":"1F933-1F3FB","non_qualified":null,"image":"1f933-1f3fb.png","sheet_x":39,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F933-1F3FC","non_qualified":null,"image":"1f933-1f3fc.png","sheet_x":39,"sheet_y":13,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F933-1F3FD","non_qualified":null,"image":"1f933-1f3fd.png","sheet_x":39,"sheet_y":14,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F933-1F3FE","non_qualified":null,"image":"1f933-1f3fe.png","sheet_x":39,"sheet_y":15,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F933-1F3FF","non_qualified":null,"image":"1f933-1f3ff.png","sheet_x":39,"sheet_y":16,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Selfie","b":"1F933","d":true,"e":true,"f":true,"h":true,"j":["camera","phone"],"k":[39,11],"o":4},"croissant":{"a":"Croissant","b":"1F950","d":true,"e":true,"f":true,"h":true,"j":["food","bread","french"],"k":[41,31],"o":4},"school":{"a":"School","b":"1F3EB","d":true,"e":true,"f":true,"h":true,"j":["building","student","education","learn","teach"],"k":[11,5],"o":2},"football":{"a":"American Football","b":"1F3C8","d":true,"e":true,"f":true,"h":true,"j":["sports","balls","NFL"],"k":[9,33],"o":2},"goat":{"a":"Goat","b":"1F410","d":true,"e":true,"f":true,"h":true,"j":["animal","nature"],"k":[11,44],"o":2},"department_store":{"a":"Department Store","b":"1F3EC","d":true,"e":true,"f":true,"h":true,"j":["building","shopping","mall"],"k":[11,6],"o":2},"flag-bl":{"a":"St. Barthélemy Flag","b":"1F1E7-1F1F1","d":true,"e":true,"f":true,"h":true,"k":[1,0],"o":2},"crown":{"a":"Crown","b":"1F451","d":true,"e":true,"f":true,"h":true,"j":["king","kod","leader","royalty","lord"],"k":[14,5],"o":2},"arrow_upper_left":{"a":"North West Arrow","b":"2196-FE0F","c":"2196","d":true,"e":true,"f":true,"h":true,"j":["blue-square","point","direction","diagonal","northwest"],"k":[52,16],"o":2},"neutral_face":{"a":"Neutral Face","b":"1F610","d":true,"e":true,"f":true,"h":true,"j":["indifference","meh",":|","neutral"],"k":[30,51],"l":[":|",":-|"],"o":2},"rugby_football":{"a":"Rugby Football","b":"1F3C9","d":true,"e":true,"f":true,"h":true,"j":["sports","team"],"k":[9,34],"o":2},"muscle":{"skin_variations":{"1F3FB":{"unified":"1F4AA-1F3FB","non_qualified":null,"image":"1f4aa-1f3fb.png","sheet_x":25,"sheet_y":53,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F4AA-1F3FC","non_qualified":null,"image":"1f4aa-1f3fc.png","sheet_x":25,"sheet_y":54,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F4AA-1F3FD","non_qualified":null,"image":"1f4aa-1f3fd.png","sheet_x":25,"sheet_y":55,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F4AA-1F3FE","non_qualified":null,"image":"1f4aa-1f3fe.png","sheet_x":25,"sheet_y":56,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F4AA-1F3FF","non_qualified":null,"image":"1f4aa-1f3ff.png","sheet_x":26,"sheet_y":0,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Flexed Biceps","b":"1F4AA","d":true,"e":true,"f":true,"h":true,"j":["arm","flex","hand","summer","strong","biceps"],"k":[25,52],"o":2},"baguette_bread":{"a":"Baguette Bread","b":"1F956","d":true,"e":true,"f":true,"h":true,"j":["food","bread","french"],"k":[41,37],"o":4},"expressionless":{"a":"Expressionless Face","b":"1F611","d":true,"e":true,"f":true,"h":true,"j":["face","indifferent","-_-","meh","deadpan"],"k":[30,52],"o":2},"womans_hat":{"a":"Womans Hat","b":"1F452","d":true,"e":true,"f":true,"h":true,"j":["fashion","accessories","female","lady","spring"],"k":[14,6],"o":2},"pretzel":{"a":"Pretzel","b":"1F968","d":true,"e":true,"f":true,"h":true,"k":[41,55],"o":5},"mechanical_arm":{"a":"Mechanical Arm","b":"1F9BE","d":true,"e":true,"f":true,"h":true,"k":[44,6],"o":12},"arrow_up_down":{"a":"Up Down Arrow","b":"2195-FE0F","c":"2195","d":true,"e":true,"f":true,"h":true,"j":["blue-square","direction","way","vertical"],"k":[52,15],"o":2},"dromedary_camel":{"a":"Dromedary Camel","b":"1F42A","d":true,"e":true,"f":true,"h":true,"j":["animal","hot","desert","hump"],"k":[12,14],"o":2},"tennis":{"a":"Tennis Racquet and Ball","b":"1F3BE","d":true,"e":true,"f":true,"h":true,"j":["sports","balls","green"],"k":[8,36],"o":2},"flag-bm":{"a":"Bermuda Flag","b":"1F1E7-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[1,1],"o":2},"factory":{"a":"Factory","b":"1F3ED","d":true,"e":true,"f":true,"h":true,"j":["building","industry","pollution","smoke"],"k":[11,7],"o":2},"japanese_castle":{"a":"Japanese Castle","b":"1F3EF","d":true,"e":true,"f":true,"h":true,"j":["photo","building"],"k":[11,9],"o":2},"no_mouth":{"a":"Face Without Mouth","b":"1F636","d":true,"e":true,"f":true,"h":true,"j":["face","hellokitty"],"k":[31,32],"o":2},"mechanical_leg":{"a":"Mechanical Leg","b":"1F9BF","d":true,"e":true,"f":true,"h":true,"k":[44,7],"o":12},"bagel":{"a":"Bagel","b":"1F96F","d":true,"e":true,"f":true,"h":true,"k":[42,5],"o":11},"camel":{"a":"Bactrian Camel","b":"1F42B","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","hot","desert","hump"],"k":[12,15],"o":2},"tophat":{"a":"Top Hat","b":"1F3A9","d":true,"e":true,"f":true,"h":true,"j":["magic","gentleman","classy","circus"],"k":[8,15],"o":2},"left_right_arrow":{"a":"Left Right Arrow","b":"2194-FE0F","c":"2194","d":true,"e":true,"f":true,"h":true,"j":["shape","direction","horizontal","sideways"],"k":[52,14],"o":2},"flag-bn":{"a":"Brunei Flag","b":"1F1E7-1F1F3","d":true,"e":true,"f":true,"h":true,"k":[1,2],"o":2},"flying_disc":{"a":"Flying Disc","b":"1F94F","d":true,"e":true,"f":true,"h":true,"k":[41,30],"o":11},"smirk":{"a":"Smirking Face","b":"1F60F","d":true,"e":true,"f":true,"h":true,"j":["face","smile","mean","prank","smug","sarcasm"],"k":[30,50],"o":2},"mortar_board":{"a":"Graduation Cap","b":"1F393","d":true,"e":true,"f":true,"h":true,"j":["school","college","degree","university","graduation","cap","hat","legal","learn","education"],"k":[7,55],"o":2},"european_castle":{"a":"European Castle","b":"1F3F0","d":true,"e":true,"f":true,"h":true,"j":["building","royalty","history"],"k":[11,10],"o":2},"leg":{"skin_variations":{"1F3FB":{"unified":"1F9B5-1F3FB","non_qualified":null,"image":"1f9b5-1f3fb.png","sheet_x":43,"sheet_y":6,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9B5-1F3FC","non_qualified":null,"image":"1f9b5-1f3fc.png","sheet_x":43,"sheet_y":7,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9B5-1F3FD","non_qualified":null,"image":"1f9b5-1f3fd.png","sheet_x":43,"sheet_y":8,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9B5-1F3FE","non_qualified":null,"image":"1f9b5-1f3fe.png","sheet_x":43,"sheet_y":9,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9B5-1F3FF","non_qualified":null,"image":"1f9b5-1f3ff.png","sheet_x":43,"sheet_y":10,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Leg","b":"1F9B5","d":true,"e":true,"f":true,"h":true,"k":[43,5],"o":11},"pancakes":{"a":"Pancakes","b":"1F95E","d":true,"e":true,"f":true,"h":true,"j":["food","breakfast","flapjacks","hotcakes"],"k":[41,45],"o":4},"leftwards_arrow_with_hook":{"a":"Leftwards Arrow with Hook","b":"21A9-FE0F","c":"21A9","d":true,"e":true,"f":true,"h":true,"j":["back","return","blue-square","undo","enter"],"k":[52,20],"o":2},"flag-bo":{"a":"Bolivia Flag","b":"1F1E7-1F1F4","d":true,"e":true,"f":true,"h":true,"k":[1,3],"o":2},"bowling":{"a":"Bowling","b":"1F3B3","d":true,"e":true,"f":true,"h":true,"j":["sports","fun","play"],"k":[8,25],"o":2},"llama":{"a":"Llama","b":"1F999","d":true,"e":true,"f":true,"h":true,"k":[42,43],"o":11},"arrow_right_hook":{"a":"Rightwards Arrow with Hook","b":"21AA-FE0F","c":"21AA","d":true,"e":true,"f":true,"h":true,"j":["blue-square","return","rotate","direction"],"k":[52,21],"o":2},"wedding":{"a":"Wedding","b":"1F492","d":true,"e":true,"f":true,"h":true,"j":["love","like","affection","couple","marriage","bride","groom"],"k":[25,28],"o":2},"flag-bq":{"a":"Caribbean Netherlands Flag","b":"1F1E7-1F1F6","d":true,"e":true,"f":true,"h":true,"k":[1,4],"o":2},"foot":{"skin_variations":{"1F3FB":{"unified":"1F9B6-1F3FB","non_qualified":null,"image":"1f9b6-1f3fb.png","sheet_x":43,"sheet_y":12,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9B6-1F3FC","non_qualified":null,"image":"1f9b6-1f3fc.png","sheet_x":43,"sheet_y":13,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9B6-1F3FD","non_qualified":null,"image":"1f9b6-1f3fd.png","sheet_x":43,"sheet_y":14,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9B6-1F3FE","non_qualified":null,"image":"1f9b6-1f3fe.png","sheet_x":43,"sheet_y":15,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9B6-1F3FF","non_qualified":null,"image":"1f9b6-1f3ff.png","sheet_x":43,"sheet_y":16,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Foot","b":"1F9B6","d":true,"e":true,"f":true,"h":true,"k":[43,11],"o":11},"giraffe_face":{"a":"Giraffe Face","b":"1F992","d":true,"e":true,"f":true,"h":true,"k":[42,36],"o":5},"unamused":{"a":"Unamused Face","b":"1F612","d":true,"e":true,"f":true,"h":true,"j":["indifference","bored","straight face","serious","sarcasm"],"k":[30,53],"m":":(","o":2},"billed_cap":{"a":"Billed Cap","b":"1F9E2","d":true,"e":true,"f":true,"h":true,"k":[51,21],"o":5},"waffle":{"a":"Waffle","b":"1F9C7","d":true,"e":true,"f":true,"h":true,"k":[44,15],"o":12},"cricket_bat_and_ball":{"a":"Cricket Bat and Ball","b":"1F3CF","d":true,"e":true,"f":true,"h":true,"k":[10,34],"o":2},"helmet_with_white_cross":{"a":"Helmet with White Cross","b":"26D1-FE0F","c":"26D1","d":true,"e":true,"f":true,"h":true,"k":[54,6],"o":2},"ear":{"skin_variations":{"1F3FB":{"unified":"1F442-1F3FB","non_qualified":null,"image":"1f442-1f3fb.png","sheet_x":12,"sheet_y":40,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F442-1F3FC","non_qualified":null,"image":"1f442-1f3fc.png","sheet_x":12,"sheet_y":41,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F442-1F3FD","non_qualified":null,"image":"1f442-1f3fd.png","sheet_x":12,"sheet_y":42,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F442-1F3FE","non_qualified":null,"image":"1f442-1f3fe.png","sheet_x":12,"sheet_y":43,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F442-1F3FF","non_qualified":null,"image":"1f442-1f3ff.png","sheet_x":12,"sheet_y":44,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Ear","b":"1F442","d":true,"e":true,"f":true,"h":true,"j":["face","hear","sound","listen"],"k":[12,39],"o":2},"elephant":{"a":"Elephant","b":"1F418","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","nose","th","circus"],"k":[11,53],"o":2},"cheese_wedge":{"a":"Cheese Wedge","b":"1F9C0","d":true,"e":true,"f":true,"h":true,"k":[44,8],"o":2},"tokyo_tower":{"a":"Tokyo Tower","b":"1F5FC","d":true,"e":true,"f":true,"h":true,"j":["photo","japanese"],"k":[30,31],"o":2},"arrow_heading_up":{"a":"Arrow Pointing Rightwards Then Curving Upwards","b":"2934-FE0F","c":"2934","d":true,"e":true,"f":true,"h":true,"j":["blue-square","direction","top"],"k":[55,35],"o":2},"field_hockey_stick_and_ball":{"a":"Field Hockey Stick and Ball","b":"1F3D1","d":true,"e":true,"f":true,"h":true,"k":[10,36],"o":2},"flag-br":{"a":"Brazil Flag","b":"1F1E7-1F1F7","d":true,"e":true,"f":true,"h":true,"k":[1,5],"o":2},"face_with_rolling_eyes":{"a":"Face with Rolling Eyes","b":"1F644","d":true,"e":true,"f":true,"h":true,"k":[31,46],"o":2},"ear_with_hearing_aid":{"skin_variations":{"1F3FB":{"unified":"1F9BB-1F3FB","non_qualified":null,"image":"1f9bb-1f3fb.png","sheet_x":43,"sheet_y":56,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9BB-1F3FC","non_qualified":null,"image":"1f9bb-1f3fc.png","sheet_x":44,"sheet_y":0,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9BB-1F3FD","non_qualified":null,"image":"1f9bb-1f3fd.png","sheet_x":44,"sheet_y":1,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9BB-1F3FE","non_qualified":null,"image":"1f9bb-1f3fe.png","sheet_x":44,"sheet_y":2,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9BB-1F3FF","non_qualified":null,"image":"1f9bb-1f3ff.png","sheet_x":44,"sheet_y":3,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Ear with Hearing Aid","b":"1F9BB","d":true,"e":true,"f":true,"h":true,"k":[43,55],"o":12},"arrow_heading_down":{"a":"Arrow Pointing Rightwards Then Curving Downwards","b":"2935-FE0F","c":"2935","d":true,"e":true,"f":true,"h":true,"j":["blue-square","direction","bottom"],"k":[55,36],"o":2},"ice_hockey_stick_and_puck":{"a":"Ice Hockey Stick and Puck","b":"1F3D2","d":true,"e":true,"f":true,"h":true,"k":[10,37],"o":2},"meat_on_bone":{"a":"Meat on Bone","b":"1F356","d":true,"e":true,"f":true,"h":true,"j":["good","food","drumstick"],"k":[6,46],"o":2},"prayer_beads":{"a":"Prayer Beads","b":"1F4FF","d":true,"e":true,"f":true,"h":true,"j":["dhikr","religious"],"k":[27,27],"o":2},"statue_of_liberty":{"a":"Statue of Liberty","b":"1F5FD","d":true,"e":true,"f":true,"h":true,"j":["american","newyork"],"k":[30,32],"o":2},"grimacing":{"a":"Grimacing Face","b":"1F62C","d":true,"e":true,"f":true,"h":true,"j":["face","grimace","teeth"],"k":[31,22],"o":2},"flag-bs":{"a":"Bahamas Flag","b":"1F1E7-1F1F8","d":true,"e":true,"f":true,"h":true,"k":[1,6],"o":2},"rhinoceros":{"a":"Rhinoceros","b":"1F98F","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","horn"],"k":[42,33],"o":4},"lacrosse":{"a":"Lacrosse Stick and Ball","b":"1F94D","d":true,"e":true,"f":true,"h":true,"k":[41,28],"o":11},"poultry_leg":{"a":"Poultry Leg","b":"1F357","d":true,"e":true,"f":true,"h":true,"j":["food","meat","drumstick","bird","chicken","turkey"],"k":[6,47],"o":2},"hippopotamus":{"a":"Hippopotamus","b":"1F99B","d":true,"e":true,"f":true,"h":true,"k":[42,45],"o":11},"nose":{"skin_variations":{"1F3FB":{"unified":"1F443-1F3FB","non_qualified":null,"image":"1f443-1f3fb.png","sheet_x":12,"sheet_y":46,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F443-1F3FC","non_qualified":null,"image":"1f443-1f3fc.png","sheet_x":12,"sheet_y":47,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F443-1F3FD","non_qualified":null,"image":"1f443-1f3fd.png","sheet_x":12,"sheet_y":48,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F443-1F3FE","non_qualified":null,"image":"1f443-1f3fe.png","sheet_x":12,"sheet_y":49,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F443-1F3FF","non_qualified":null,"image":"1f443-1f3ff.png","sheet_x":12,"sheet_y":50,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Nose","b":"1F443","d":true,"e":true,"f":true,"h":true,"j":["smell","sniff"],"k":[12,45],"o":2},"arrows_clockwise":{"a":"Clockwise Downwards and Upwards Open Circle Arrows","b":"1F503","d":true,"e":true,"f":true,"h":true,"j":["sync","cycle","round","repeat"],"k":[27,31],"o":2},"flag-bt":{"a":"Bhutan Flag","b":"1F1E7-1F1F9","d":true,"e":true,"f":true,"h":true,"k":[1,7],"o":2},"church":{"a":"Church","b":"26EA","d":true,"e":true,"f":true,"h":true,"j":["building","religion","christ"],"k":[54,10],"o":2},"lipstick":{"a":"Lipstick","b":"1F484","d":true,"e":true,"f":true,"h":true,"j":["female","girl","fashion","woman"],"k":[24,32],"o":2},"lying_face":{"a":"Lying Face","b":"1F925","d":true,"e":true,"f":true,"h":true,"j":["face","lie","pinocchio"],"k":[38,22],"o":4},"arrows_counterclockwise":{"a":"Anticlockwise Downwards and Upwards Open Circle Arrows","b":"1F504","d":true,"e":true,"f":true,"h":true,"j":["blue-square","sync","cycle"],"k":[27,32],"o":2},"flag-bv":{"a":"Bouvet Island Flag","b":"1F1E7-1F1FB","d":true,"e":true,"f":true,"h":true,"k":[1,8],"o":2},"cut_of_meat":{"a":"Cut of Meat","b":"1F969","d":true,"e":true,"f":true,"h":true,"k":[41,56],"o":5},"mosque":{"a":"Mosque","b":"1F54C","d":true,"e":true,"f":true,"h":true,"j":["islam","worship","minaret"],"k":[28,36],"o":2},"ring":{"a":"Ring","b":"1F48D","d":true,"e":true,"f":true,"h":true,"j":["wedding","propose","marriage","valentines","diamond","fashion","jewelry","gem","engagement"],"k":[25,23],"o":2},"brain":{"a":"Brain","b":"1F9E0","d":true,"e":true,"f":true,"h":true,"k":[51,19],"o":5},"table_tennis_paddle_and_ball":{"a":"Table Tennis Paddle and Ball","b":"1F3D3","d":true,"e":true,"f":true,"h":true,"k":[10,38],"o":2},"relieved":{"a":"Relieved Face","b":"1F60C","d":true,"e":true,"f":true,"h":true,"j":["face","relaxed","phew","massage","happiness"],"k":[30,47],"o":2},"mouse":{"a":"Mouse Face","b":"1F42D","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","cheese_wedge","rodent"],"k":[12,17],"o":2},"hindu_temple":{"a":"Hindu Temple","b":"1F6D5","d":true,"e":true,"f":true,"h":true,"k":[36,41],"o":12},"back":{"a":"Back with Leftwards Arrow Above","b":"1F519","d":true,"e":true,"f":true,"h":true,"j":["arrow","words","return"],"k":[27,53],"o":2},"gem":{"a":"Gem Stone","b":"1F48E","d":true,"e":true,"f":true,"h":true,"j":["blue","ruby","diamond","jewelry"],"k":[25,24],"o":2},"pensive":{"a":"Pensive Face","b":"1F614","d":true,"e":true,"f":true,"h":true,"j":["face","sad","depressed","upset"],"k":[30,55],"o":2},"flag-bw":{"a":"Botswana Flag","b":"1F1E7-1F1FC","d":true,"e":true,"f":true,"h":true,"k":[1,9],"o":2},"mouse2":{"a":"Mouse","b":"1F401","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","rodent"],"k":[11,29],"o":2},"bacon":{"a":"Bacon","b":"1F953","d":true,"e":true,"f":true,"h":true,"j":["food","breakfast","pork","pig","meat"],"k":[41,34],"o":4},"tooth":{"a":"Tooth","b":"1F9B7","d":true,"e":true,"f":true,"h":true,"k":[43,17],"o":11},"badminton_racquet_and_shuttlecock":{"a":"Badminton Racquet and Shuttlecock","b":"1F3F8","d":true,"e":true,"f":true,"h":true,"k":[11,20],"o":2},"rat":{"a":"Rat","b":"1F400","d":true,"e":true,"f":true,"h":true,"j":["animal","mouse","rodent"],"k":[11,28],"o":2},"synagogue":{"a":"Synagogue","b":"1F54D","d":true,"e":true,"f":true,"h":true,"j":["judaism","worship","temple","jewish"],"k":[28,37],"o":2},"end":{"a":"End with Leftwards Arrow Above","b":"1F51A","d":true,"e":true,"f":true,"h":true,"j":["words","arrow"],"k":[27,54],"o":2},"bone":{"a":"Bone","b":"1F9B4","d":true,"e":true,"f":true,"h":true,"k":[43,4],"o":11},"boxing_glove":{"a":"Boxing Glove","b":"1F94A","d":true,"e":true,"f":true,"h":true,"j":["sports","fighting"],"k":[41,25],"o":4},"mute":{"a":"Speaker with Cancellation Stroke","b":"1F507","d":true,"e":true,"f":true,"h":true,"j":["sound","volume","silence","quiet"],"k":[27,35],"o":2},"hamburger":{"a":"Hamburger","b":"1F354","d":true,"e":true,"f":true,"h":true,"j":["meat","fast food","beef","cheeseburger","mcdonalds","burger king"],"k":[6,44],"o":2},"flag-by":{"a":"Belarus Flag","b":"1F1E7-1F1FE","d":true,"e":true,"f":true,"h":true,"k":[1,10],"o":2},"sleepy":{"a":"Sleepy Face","b":"1F62A","d":true,"e":true,"f":true,"h":true,"j":["face","tired","rest","nap"],"k":[31,20],"o":2},"on":{"a":"On with Exclamation Mark with Left Right Arrow Above","b":"1F51B","d":true,"e":true,"f":true,"h":true,"j":["arrow","words"],"k":[27,55],"o":2},"martial_arts_uniform":{"a":"Martial Arts Uniform","b":"1F94B","d":true,"e":true,"f":true,"h":true,"j":["judo","karate","taekwondo"],"k":[41,26],"o":4},"speaker":{"a":"Speaker","b":"1F508","d":true,"e":true,"f":true,"h":true,"j":["sound","volume","silence","broadcast"],"k":[27,36],"o":2},"drooling_face":{"a":"Drooling Face","b":"1F924","d":true,"e":true,"f":true,"h":true,"j":["face"],"k":[38,21],"o":4},"eyes":{"a":"Eyes","b":"1F440","d":true,"e":true,"f":true,"h":true,"j":["look","watch","stalk","peek","see"],"k":[12,36],"o":2},"flag-bz":{"a":"Belize Flag","b":"1F1E7-1F1FF","d":true,"e":true,"f":true,"h":true,"k":[1,11],"o":2},"hamster":{"a":"Hamster Face","b":"1F439","d":true,"e":true,"f":true,"h":true,"j":["animal","nature"],"k":[12,29],"o":2},"shinto_shrine":{"a":"Shinto Shrine","b":"26E9-FE0F","c":"26E9","d":true,"e":true,"f":true,"h":true,"j":["temple","japan","kyoto"],"k":[54,9],"o":2},"fries":{"a":"French Fries","b":"1F35F","d":true,"e":true,"f":true,"h":true,"j":["chips","snack","fast food"],"k":[6,55],"o":2},"goal_net":{"a":"Goal Net","b":"1F945","d":true,"e":true,"f":true,"h":true,"j":["sports"],"k":[41,21],"o":4},"kaaba":{"a":"Kaaba","b":"1F54B","d":true,"e":true,"f":true,"h":true,"j":["mecca","mosque","islam"],"k":[28,35],"o":2},"soon":{"a":"Soon with Rightwards Arrow Above","b":"1F51C","d":true,"e":true,"f":true,"h":true,"j":["arrow","words"],"k":[27,56],"o":2},"flag-ca":{"a":"Canada Flag","b":"1F1E8-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[1,12],"o":2},"rabbit":{"a":"Rabbit Face","b":"1F430","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","pet","spring","magic","bunny"],"k":[12,20],"o":2},"eye":{"a":"Eye","b":"1F441-FE0F","c":"1F441","d":true,"e":true,"f":true,"h":true,"j":["face","look","see","watch","stare"],"k":[12,38],"o":2},"sleeping":{"a":"Sleeping Face","b":"1F634","d":true,"e":true,"f":true,"h":true,"j":["face","tired","sleepy","night","zzz"],"k":[31,30],"o":2},"pizza":{"a":"Slice of Pizza","b":"1F355","d":true,"e":true,"f":true,"h":true,"j":["food","party"],"k":[6,45],"o":2},"sound":{"a":"Speaker with One Sound Wave","b":"1F509","d":true,"e":true,"f":true,"h":true,"j":["volume","speaker","broadcast"],"k":[27,37],"o":2},"rabbit2":{"a":"Rabbit","b":"1F407","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","pet","magic","spring"],"k":[11,35],"o":2},"fountain":{"a":"Fountain","b":"26F2","d":true,"e":true,"f":true,"h":true,"j":["photo","summer","water","fresh"],"k":[54,13],"o":2},"golf":{"a":"Flag in Hole","b":"26F3","d":true,"e":true,"f":true,"h":true,"j":["sports","business","flag","hole","summer"],"k":[54,14],"o":2},"top":{"a":"Top with Upwards Arrow Above","b":"1F51D","d":true,"e":true,"f":true,"h":true,"j":["words","blue-square"],"k":[28,0],"o":2},"mask":{"a":"Face with Medical Mask","b":"1F637","d":true,"e":true,"f":true,"h":true,"j":["face","sick","ill","disease"],"k":[31,33],"o":2},"flag-cc":{"a":"Cocos (keeling) Islands Flag","b":"1F1E8-1F1E8","d":true,"e":true,"f":true,"h":true,"k":[1,13],"o":2},"hotdog":{"a":"Hot Dog","b":"1F32D","d":true,"e":true,"f":true,"h":true,"j":["food","frankfurter"],"k":[6,5],"o":2},"loud_sound":{"a":"Speaker with Three Sound Waves","b":"1F50A","d":true,"e":true,"f":true,"h":true,"j":["volume","noise","noisy","speaker","broadcast"],"k":[27,38],"o":2},"tongue":{"a":"Tongue","b":"1F445","d":true,"e":true,"f":true,"h":true,"j":["mouth","playful"],"k":[12,52],"o":2},"place_of_worship":{"a":"Place of Worship","b":"1F6D0","d":true,"e":true,"f":true,"h":true,"j":["religion","church","temple","prayer"],"k":[36,38],"o":2},"ice_skate":{"a":"Ice Skate","b":"26F8-FE0F","c":"26F8","d":true,"e":true,"f":true,"h":true,"j":["sports"],"k":[54,18],"o":2},"sandwich":{"a":"Sandwich","b":"1F96A","d":true,"e":true,"f":true,"h":true,"k":[42,0],"o":5},"chipmunk":{"a":"Chipmunk","b":"1F43F-FE0F","c":"1F43F","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","rodent","squirrel"],"k":[12,35],"o":2},"loudspeaker":{"a":"Public Address Loudspeaker","b":"1F4E2","d":true,"e":true,"f":true,"h":true,"j":["volume","sound"],"k":[26,56],"o":2},"lips":{"a":"Mouth","b":"1F444","d":true,"e":true,"f":true,"h":true,"j":["mouth","kiss"],"k":[12,51],"o":2},"flag-cd":{"a":"Congo - Kinshasa Flag","b":"1F1E8-1F1E9","d":true,"e":true,"f":true,"h":true,"k":[1,14],"o":2},"tent":{"a":"Tent","b":"26FA","d":true,"e":true,"f":true,"h":true,"j":["photo","camping","outdoors"],"k":[54,37],"o":2},"face_with_thermometer":{"a":"Face with Thermometer","b":"1F912","d":true,"e":true,"f":true,"h":true,"j":["sick","temperature","thermometer","cold","fever"],"k":[37,25],"o":2},"taco":{"a":"Taco","b":"1F32E","d":true,"e":true,"f":true,"h":true,"j":["food","mexican"],"k":[6,6],"o":2},"foggy":{"a":"Foggy","b":"1F301","d":true,"e":true,"f":true,"h":true,"j":["photo","mountain"],"k":[5,20],"o":2},"flag-cf":{"a":"Central African Republic Flag","b":"1F1E8-1F1EB","d":true,"e":true,"f":true,"h":true,"k":[1,15],"o":2},"baby":{"skin_variations":{"1F3FB":{"unified":"1F476-1F3FB","non_qualified":null,"image":"1f476-1f3fb.png","sheet_x":23,"sheet_y":5,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F476-1F3FC","non_qualified":null,"image":"1f476-1f3fc.png","sheet_x":23,"sheet_y":6,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F476-1F3FD","non_qualified":null,"image":"1f476-1f3fd.png","sheet_x":23,"sheet_y":7,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F476-1F3FE","non_qualified":null,"image":"1f476-1f3fe.png","sheet_x":23,"sheet_y":8,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F476-1F3FF","non_qualified":null,"image":"1f476-1f3ff.png","sheet_x":23,"sheet_y":9,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Baby","b":"1F476","d":true,"e":true,"f":true,"h":true,"j":["child","boy","girl","toddler"],"k":[23,4],"o":2},"atom_symbol":{"a":"Atom Symbol","b":"269B-FE0F","c":"269B","d":true,"e":true,"f":true,"h":true,"j":["science","physics","chemistry"],"k":[53,48],"o":2},"fishing_pole_and_fish":{"a":"Fishing Pole and Fish","b":"1F3A3","d":true,"e":true,"f":true,"h":true,"j":["food","hobby","summer"],"k":[8,9],"o":2},"hedgehog":{"a":"Hedgehog","b":"1F994","d":true,"e":true,"f":true,"h":true,"k":[42,38],"o":5},"face_with_head_bandage":{"a":"Face with Head-Bandage","b":"1F915","d":true,"e":true,"f":true,"h":true,"j":["injured","clumsy","bandage","hurt"],"k":[37,28],"o":2},"mega":{"a":"Cheering Megaphone","b":"1F4E3","d":true,"e":true,"f":true,"h":true,"j":["sound","speaker","volume"],"k":[27,0],"o":2},"nauseated_face":{"a":"Nauseated Face","b":"1F922","d":true,"e":true,"f":true,"h":true,"j":["face","vomit","gross","green","sick","throw up","ill"],"k":[38,19],"o":4},"child":{"skin_variations":{"1F3FB":{"unified":"1F9D2-1F3FB","non_qualified":null,"image":"1f9d2-1f3fb.png","sheet_x":48,"sheet_y":17,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9D2-1F3FC","non_qualified":null,"image":"1f9d2-1f3fc.png","sheet_x":48,"sheet_y":18,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9D2-1F3FD","non_qualified":null,"image":"1f9d2-1f3fd.png","sheet_x":48,"sheet_y":19,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9D2-1F3FE","non_qualified":null,"image":"1f9d2-1f3fe.png","sheet_x":48,"sheet_y":20,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9D2-1F3FF","non_qualified":null,"image":"1f9d2-1f3ff.png","sheet_x":48,"sheet_y":21,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Child","b":"1F9D2","d":true,"e":true,"f":true,"h":true,"k":[48,16],"o":5},"flag-cg":{"a":"Congo - Brazzaville Flag","b":"1F1E8-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[1,16],"o":2},"bat":{"a":"Bat","b":"1F987","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","blind","vampire"],"k":[42,25],"o":4},"diving_mask":{"a":"Diving Mask","b":"1F93F","d":true,"e":true,"f":true,"h":true,"k":[41,15],"o":12},"burrito":{"a":"Burrito","b":"1F32F","d":true,"e":true,"f":true,"h":true,"j":["food","mexican"],"k":[6,7],"o":2},"postal_horn":{"a":"Postal Horn","b":"1F4EF","d":true,"e":true,"f":true,"h":true,"j":["instrument","music"],"k":[27,12],"o":2},"night_with_stars":{"a":"Night with Stars","b":"1F303","d":true,"e":true,"f":true,"h":true,"j":["evening","city","downtown"],"k":[5,22],"o":2},"om_symbol":{"a":"Om Symbol","b":"1F549-FE0F","c":"1F549","d":true,"e":true,"f":true,"h":true,"k":[28,33],"o":2},"star_of_david":{"a":"Star of David","b":"2721-FE0F","c":"2721","d":true,"e":true,"f":true,"h":true,"j":["judaism"],"k":[55,15],"o":2},"boy":{"skin_variations":{"1F3FB":{"unified":"1F466-1F3FB","non_qualified":null,"image":"1f466-1f3fb.png","sheet_x":14,"sheet_y":27,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F466-1F3FC","non_qualified":null,"image":"1f466-1f3fc.png","sheet_x":14,"sheet_y":28,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F466-1F3FD","non_qualified":null,"image":"1f466-1f3fd.png","sheet_x":14,"sheet_y":29,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F466-1F3FE","non_qualified":null,"image":"1f466-1f3fe.png","sheet_x":14,"sheet_y":30,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F466-1F3FF","non_qualified":null,"image":"1f466-1f3ff.png","sheet_x":14,"sheet_y":31,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Boy","b":"1F466","d":true,"e":true,"f":true,"h":true,"j":["man","male","guy","teenager"],"k":[14,26],"o":2},"bell":{"a":"Bell","b":"1F514","d":true,"e":true,"f":true,"h":true,"j":["sound","notification","christmas","xmas","chime"],"k":[27,48],"o":2},"flag-ch":{"a":"Switzerland Flag","b":"1F1E8-1F1ED","d":true,"e":true,"f":true,"h":true,"k":[1,17],"o":2},"running_shirt_with_sash":{"a":"Running Shirt with Sash","b":"1F3BD","d":true,"e":true,"f":true,"h":true,"j":["play","pageant"],"k":[8,35],"o":2},"stuffed_flatbread":{"a":"Stuffed Flatbread","b":"1F959","d":true,"e":true,"f":true,"h":true,"j":["food","flatbread","stuffed","gyro"],"k":[41,40],"o":4},"bear":{"a":"Bear Face","b":"1F43B","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","wild"],"k":[12,31],"o":2},"cityscape":{"a":"Cityscape","b":"1F3D9-FE0F","c":"1F3D9","d":true,"e":true,"f":true,"h":true,"j":["photo","night life","urban"],"k":[10,44],"o":2},"face_vomiting":{"a":"Face with Open Mouth Vomiting","b":"1F92E","d":true,"e":true,"f":true,"h":true,"k":[38,48],"n":["face_with_open_mouth_vomiting"],"o":5},"wheel_of_dharma":{"a":"Wheel of Dharma","b":"2638-FE0F","c":"2638","d":true,"e":true,"f":true,"h":true,"j":["hinduism","buddhism","sikhism","jainism"],"k":[53,15],"o":2},"ski":{"a":"Ski and Ski Boot","b":"1F3BF","d":true,"e":true,"f":true,"h":true,"j":["sports","winter","cold","snow"],"k":[8,37],"o":2},"girl":{"skin_variations":{"1F3FB":{"unified":"1F467-1F3FB","non_qualified":null,"image":"1f467-1f3fb.png","sheet_x":14,"sheet_y":33,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F467-1F3FC","non_qualified":null,"image":"1f467-1f3fc.png","sheet_x":14,"sheet_y":34,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F467-1F3FD","non_qualified":null,"image":"1f467-1f3fd.png","sheet_x":14,"sheet_y":35,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F467-1F3FE","non_qualified":null,"image":"1f467-1f3fe.png","sheet_x":14,"sheet_y":36,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F467-1F3FF","non_qualified":null,"image":"1f467-1f3ff.png","sheet_x":14,"sheet_y":37,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Girl","b":"1F467","d":true,"e":true,"f":true,"h":true,"j":["female","woman","teenager"],"k":[14,32],"o":2},"falafel":{"a":"Falafel","b":"1F9C6","d":true,"e":true,"f":true,"h":true,"k":[44,14],"o":12},"sneezing_face":{"a":"Sneezing Face","b":"1F927","d":true,"e":true,"f":true,"h":true,"j":["face","gesundheit","sneeze","sick","allergy"],"k":[38,41],"o":4},"no_bell":{"a":"Bell with Cancellation Stroke","b":"1F515","d":true,"e":true,"f":true,"h":true,"j":["sound","volume","mute","quiet","silent"],"k":[27,49],"o":2},"koala":{"a":"Koala","b":"1F428","d":true,"e":true,"f":true,"h":true,"j":["animal","nature"],"k":[12,12],"o":2},"sunrise_over_mountains":{"a":"Sunrise over Mountains","b":"1F304","d":true,"e":true,"f":true,"h":true,"j":["view","vacation","photo"],"k":[5,23],"o":2},"flag-ci":{"a":"Côte D’ivoire Flag","b":"1F1E8-1F1EE","d":true,"e":true,"f":true,"h":true,"k":[1,18],"o":2},"sunrise":{"a":"Sunrise","b":"1F305","d":true,"e":true,"f":true,"h":true,"j":["morning","view","vacation","photo"],"k":[5,24],"o":2},"yin_yang":{"a":"Yin Yang","b":"262F-FE0F","c":"262F","d":true,"e":true,"f":true,"h":true,"j":["balance"],"k":[53,14],"o":2},"adult":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB","non_qualified":null,"image":"1f9d1-1f3fb.png","sheet_x":48,"sheet_y":11,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9D1-1F3FC","non_qualified":null,"image":"1f9d1-1f3fc.png","sheet_x":48,"sheet_y":12,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9D1-1F3FD","non_qualified":null,"image":"1f9d1-1f3fd.png","sheet_x":48,"sheet_y":13,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9D1-1F3FE","non_qualified":null,"image":"1f9d1-1f3fe.png","sheet_x":48,"sheet_y":14,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9D1-1F3FF","non_qualified":null,"image":"1f9d1-1f3ff.png","sheet_x":48,"sheet_y":15,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Adult","b":"1F9D1","d":true,"e":true,"f":true,"h":true,"k":[48,10],"o":5},"hot_face":{"a":"Overheated Face","b":"1F975","d":true,"e":true,"f":true,"h":true,"k":[42,10],"o":11},"musical_score":{"a":"Musical Score","b":"1F3BC","d":true,"e":true,"f":true,"h":true,"j":["treble","clef","compose"],"k":[8,34],"o":2},"sled":{"a":"Sled","b":"1F6F7","d":true,"e":true,"f":true,"h":true,"k":[36,56],"o":5},"egg":{"a":"Egg","b":"1F95A","d":true,"e":true,"f":true,"h":true,"j":["food","chicken","breakfast"],"k":[41,41],"o":4},"panda_face":{"a":"Panda Face","b":"1F43C","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","panda"],"k":[12,32],"o":2},"flag-ck":{"a":"Cook Islands Flag","b":"1F1E8-1F1F0","d":true,"e":true,"f":true,"h":true,"k":[1,19],"o":2},"flag-cl":{"a":"Chile Flag","b":"1F1E8-1F1F1","d":true,"e":true,"f":true,"h":true,"k":[1,20],"o":2},"person_with_blond_hair":{"skin_variations":{"1F3FB":{"unified":"1F471-1F3FB","non_qualified":null,"image":"1f471-1f3fb.png","sheet_x":22,"sheet_y":20,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F471-1F3FC","non_qualified":null,"image":"1f471-1f3fc.png","sheet_x":22,"sheet_y":21,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F471-1F3FD","non_qualified":null,"image":"1f471-1f3fd.png","sheet_x":22,"sheet_y":22,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F471-1F3FE","non_qualified":null,"image":"1f471-1f3fe.png","sheet_x":22,"sheet_y":23,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F471-1F3FF","non_qualified":null,"image":"1f471-1f3ff.png","sheet_x":22,"sheet_y":24,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F471-200D-2642-FE0F","a":"Person with Blond Hair","b":"1F471","d":true,"e":true,"f":true,"h":false,"k":[22,19],"o":2},"sloth":{"a":"Sloth","b":"1F9A5","d":true,"e":true,"f":true,"h":true,"k":[42,53],"o":12},"latin_cross":{"a":"Latin Cross","b":"271D-FE0F","c":"271D","d":true,"e":true,"f":true,"h":true,"j":["christianity"],"k":[55,14],"o":2},"curling_stone":{"a":"Curling Stone","b":"1F94C","d":true,"e":true,"f":true,"h":true,"k":[41,27],"o":5},"cold_face":{"a":"Freezing Face","b":"1F976","d":true,"e":true,"f":true,"h":true,"k":[42,11],"o":11},"fried_egg":{"a":"Cooking","b":"1F373","d":true,"e":true,"f":true,"h":true,"j":["food","breakfast","kitchen","egg"],"k":[7,18],"n":["cooking"],"o":2},"city_sunset":{"a":"Cityscape at Dusk","b":"1F306","d":true,"e":true,"f":true,"h":true,"j":["photo","evening","sky","buildings"],"k":[5,25],"o":2},"musical_note":{"a":"Musical Note","b":"1F3B5","d":true,"e":true,"f":true,"h":true,"j":["score","tone","sound"],"k":[8,27],"o":2},"flag-cm":{"a":"Cameroon Flag","b":"1F1E8-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[1,21],"o":2},"notes":{"a":"Multiple Musical Notes","b":"1F3B6","d":true,"e":true,"f":true,"h":true,"j":["music","score"],"k":[8,28],"o":2},"woozy_face":{"a":"Face with Uneven Eyes and Wavy Mouth","b":"1F974","d":true,"e":true,"f":true,"h":true,"k":[42,9],"o":11},"dart":{"a":"Direct Hit","b":"1F3AF","d":true,"e":true,"f":true,"h":true,"j":["game","play","bar"],"k":[8,21],"o":2},"orthodox_cross":{"a":"Orthodox Cross","b":"2626-FE0F","c":"2626","d":true,"e":true,"f":true,"h":true,"j":["suppedaneum","religion"],"k":[53,11],"o":2},"shallow_pan_of_food":{"a":"Shallow Pan of Food","b":"1F958","d":true,"e":true,"f":true,"h":true,"j":["food","cooking","casserole","paella"],"k":[41,39],"o":4},"otter":{"a":"Otter","b":"1F9A6","d":true,"e":true,"f":true,"h":true,"k":[42,54],"o":12},"man":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB","non_qualified":null,"image":"1f468-1f3fb.png","sheet_x":17,"sheet_y":23,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC","non_qualified":null,"image":"1f468-1f3fc.png","sheet_x":17,"sheet_y":24,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD","non_qualified":null,"image":"1f468-1f3fd.png","sheet_x":17,"sheet_y":25,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE","non_qualified":null,"image":"1f468-1f3fe.png","sheet_x":17,"sheet_y":26,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF","non_qualified":null,"image":"1f468-1f3ff.png","sheet_x":17,"sheet_y":27,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man","b":"1F468","d":true,"e":true,"f":true,"h":true,"j":["mustache","father","dad","guy","classy","sir","moustache"],"k":[17,22],"o":2},"city_sunrise":{"a":"Sunset over Buildings","b":"1F307","d":true,"e":true,"f":true,"h":true,"j":["photo","good morning","dawn"],"k":[5,26],"o":2},"bearded_person":{"skin_variations":{"1F3FB":{"unified":"1F9D4-1F3FB","non_qualified":null,"image":"1f9d4-1f3fb.png","sheet_x":48,"sheet_y":29,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9D4-1F3FC","non_qualified":null,"image":"1f9d4-1f3fc.png","sheet_x":48,"sheet_y":30,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9D4-1F3FD","non_qualified":null,"image":"1f9d4-1f3fd.png","sheet_x":48,"sheet_y":31,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9D4-1F3FE","non_qualified":null,"image":"1f9d4-1f3fe.png","sheet_x":48,"sheet_y":32,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9D4-1F3FF","non_qualified":null,"image":"1f9d4-1f3ff.png","sheet_x":48,"sheet_y":33,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Bearded Person","b":"1F9D4","d":true,"e":true,"f":true,"h":true,"k":[48,28],"o":5},"skunk":{"a":"Skunk","b":"1F9A8","d":true,"e":true,"f":true,"h":true,"k":[42,56],"o":12},"stew":{"a":"Pot of Food","b":"1F372","d":true,"e":true,"f":true,"h":true,"j":["food","meat","soup"],"k":[7,17],"o":2},"cn":{"a":"China Flag","b":"1F1E8-1F1F3","d":true,"e":true,"f":true,"h":true,"j":["china","chinese","prc","flag","country","nation","banner"],"k":[1,22],"n":["flag-cn"],"o":2},"studio_microphone":{"a":"Studio Microphone","b":"1F399-FE0F","c":"1F399","d":true,"e":true,"f":true,"h":true,"j":["sing","recording","artist","talkshow"],"k":[8,1],"o":2},"star_and_crescent":{"a":"Star and Crescent","b":"262A-FE0F","c":"262A","d":true,"e":true,"f":true,"h":true,"j":["islam"],"k":[53,12],"o":2},"yo-yo":{"a":"Yo-Yo","b":"1FA80","d":true,"e":true,"f":true,"h":true,"k":[52,1],"o":12},"bridge_at_night":{"a":"Bridge at Night","b":"1F309","d":true,"e":true,"f":true,"h":true,"j":["photo","sanfrancisco"],"k":[5,28],"o":2},"dizzy_face":{"a":"Dizzy Face","b":"1F635","d":true,"e":true,"f":true,"h":true,"j":["spent","unconscious","xox","dizzy"],"k":[31,31],"o":2},"red_haired_man":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F9B0","non_qualified":null,"image":"1f468-1f3fb-200d-1f9b0.png","sheet_x":16,"sheet_y":24,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F9B0","non_qualified":null,"image":"1f468-1f3fc-200d-1f9b0.png","sheet_x":16,"sheet_y":25,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F9B0","non_qualified":null,"image":"1f468-1f3fd-200d-1f9b0.png","sheet_x":16,"sheet_y":26,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F9B0","non_qualified":null,"image":"1f468-1f3fe-200d-1f9b0.png","sheet_x":16,"sheet_y":27,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F9B0","non_qualified":null,"image":"1f468-1f3ff-200d-1f9b0.png","sheet_x":16,"sheet_y":28,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Red Haired Man","b":"1F468-200D-1F9B0","d":true,"e":true,"f":true,"h":true,"k":[16,23],"o":11},"kite":{"a":"Kite","b":"1FA81","d":true,"e":true,"f":true,"h":true,"k":[52,2],"o":12},"bowl_with_spoon":{"a":"Bowl with Spoon","b":"1F963","d":true,"e":true,"f":true,"h":true,"k":[41,50],"o":5},"flag-co":{"a":"Colombia Flag","b":"1F1E8-1F1F4","d":true,"e":true,"f":true,"h":true,"k":[1,23],"o":2},"peace_symbol":{"a":"Peace Symbol","b":"262E-FE0F","c":"262E","d":true,"e":true,"f":true,"h":true,"j":["hippie"],"k":[53,13],"o":2},"kangaroo":{"a":"Kangaroo","b":"1F998","d":true,"e":true,"f":true,"h":true,"k":[42,42],"o":11},"hotsprings":{"a":"Hot Springs","b":"2668-FE0F","c":"2668","d":true,"e":true,"f":true,"h":true,"j":["bath","warm","relax"],"k":[53,37],"o":2},"exploding_head":{"a":"Shocked Face with Exploding Head","b":"1F92F","d":true,"e":true,"f":true,"h":true,"k":[38,49],"n":["shocked_face_with_exploding_head"],"o":5},"level_slider":{"a":"Level Slider","b":"1F39A-FE0F","c":"1F39A","d":true,"e":true,"f":true,"h":true,"j":["scale"],"k":[8,2],"o":2},"badger":{"a":"Badger","b":"1F9A1","d":true,"e":true,"f":true,"h":true,"k":[42,51],"o":11},"8ball":{"a":"Billiards","b":"1F3B1","d":true,"e":true,"f":true,"h":true,"j":["pool","hobby","game","luck","magic"],"k":[8,23],"o":2},"curly_haired_man":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F9B1","non_qualified":null,"image":"1f468-1f3fb-200d-1f9b1.png","sheet_x":16,"sheet_y":30,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F9B1","non_qualified":null,"image":"1f468-1f3fc-200d-1f9b1.png","sheet_x":16,"sheet_y":31,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F9B1","non_qualified":null,"image":"1f468-1f3fd-200d-1f9b1.png","sheet_x":16,"sheet_y":32,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F9B1","non_qualified":null,"image":"1f468-1f3fe-200d-1f9b1.png","sheet_x":16,"sheet_y":33,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F9B1","non_qualified":null,"image":"1f468-1f3ff-200d-1f9b1.png","sheet_x":16,"sheet_y":34,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Curly Haired Man","b":"1F468-200D-1F9B1","d":true,"e":true,"f":true,"h":true,"k":[16,29],"o":11},"flag-cp":{"a":"Clipperton Island Flag","b":"1F1E8-1F1F5","d":true,"e":true,"f":true,"h":true,"k":[1,24],"o":2},"carousel_horse":{"a":"Carousel Horse","b":"1F3A0","d":true,"e":true,"f":true,"h":true,"j":["photo","carnival"],"k":[8,6],"o":2},"face_with_cowboy_hat":{"a":"Face with Cowboy Hat","b":"1F920","d":true,"e":true,"f":true,"h":true,"k":[38,17],"o":4},"menorah_with_nine_branches":{"a":"Menorah with Nine Branches","b":"1F54E","d":true,"e":true,"f":true,"h":true,"k":[28,38],"o":2},"green_salad":{"a":"Green Salad","b":"1F957","d":true,"e":true,"f":true,"h":true,"j":["food","healthy","lettuce"],"k":[41,38],"o":4},"control_knobs":{"a":"Control Knobs","b":"1F39B-FE0F","c":"1F39B","d":true,"e":true,"f":true,"h":true,"j":["dial"],"k":[8,3],"o":2},"popcorn":{"a":"Popcorn","b":"1F37F","d":true,"e":true,"f":true,"h":true,"j":["food","movie theater","films","snack"],"k":[7,30],"o":2},"six_pointed_star":{"a":"Six Pointed Star with Middle Dot","b":"1F52F","d":true,"e":true,"f":true,"h":true,"j":["purple-square","religion","jewish","hexagram"],"k":[28,18],"o":2},"feet":{"a":"Paw Prints","b":"1F43E","d":true,"e":true,"f":true,"h":true,"k":[12,34],"n":["paw_prints"],"o":2},"ferris_wheel":{"a":"Ferris Wheel","b":"1F3A1","d":true,"e":true,"f":true,"h":true,"j":["photo","carnival","londoneye"],"k":[8,7],"o":2},"microphone":{"a":"Microphone","b":"1F3A4","d":true,"e":true,"f":true,"h":true,"j":["sound","music","PA","sing","talkshow"],"k":[8,10],"o":2},"crystal_ball":{"a":"Crystal Ball","b":"1F52E","d":true,"e":true,"f":true,"h":true,"j":["disco","party","magic","circus","fortune_teller"],"k":[28,17],"o":2},"partying_face":{"a":"Face with Party Horn and Party Hat","b":"1F973","d":true,"e":true,"f":true,"h":true,"k":[42,8],"o":11},"flag-cr":{"a":"Costa Rica Flag","b":"1F1E8-1F1F7","d":true,"e":true,"f":true,"h":true,"k":[1,25],"o":2},"white_haired_man":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F9B3","non_qualified":null,"image":"1f468-1f3fb-200d-1f9b3.png","sheet_x":16,"sheet_y":42,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F9B3","non_qualified":null,"image":"1f468-1f3fc-200d-1f9b3.png","sheet_x":16,"sheet_y":43,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F9B3","non_qualified":null,"image":"1f468-1f3fd-200d-1f9b3.png","sheet_x":16,"sheet_y":44,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F9B3","non_qualified":null,"image":"1f468-1f3fe-200d-1f9b3.png","sheet_x":16,"sheet_y":45,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F9B3","non_qualified":null,"image":"1f468-1f3ff-200d-1f9b3.png","sheet_x":16,"sheet_y":46,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"White Haired Man","b":"1F468-200D-1F9B3","d":true,"e":true,"f":true,"h":true,"k":[16,41],"o":11},"headphones":{"a":"Headphone","b":"1F3A7","d":true,"e":true,"f":true,"h":true,"j":["music","score","gadgets"],"k":[8,13],"o":2},"bald_man":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F9B2","non_qualified":null,"image":"1f468-1f3fb-200d-1f9b2.png","sheet_x":16,"sheet_y":36,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F9B2","non_qualified":null,"image":"1f468-1f3fc-200d-1f9b2.png","sheet_x":16,"sheet_y":37,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F9B2","non_qualified":null,"image":"1f468-1f3fd-200d-1f9b2.png","sheet_x":16,"sheet_y":38,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F9B2","non_qualified":null,"image":"1f468-1f3fe-200d-1f9b2.png","sheet_x":16,"sheet_y":39,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F9B2","non_qualified":null,"image":"1f468-1f3ff-200d-1f9b2.png","sheet_x":16,"sheet_y":40,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Bald Man","b":"1F468-200D-1F9B2","d":true,"e":true,"f":true,"h":true,"k":[16,35],"o":11},"sunglasses":{"a":"Smiling Face with Sunglasses","b":"1F60E","d":true,"e":true,"f":true,"h":true,"j":["face","cool","smile","summer","beach","sunglass"],"k":[30,49],"l":["8)"],"o":2},"butter":{"a":"Butter","b":"1F9C8","d":true,"e":true,"f":true,"h":true,"k":[44,16],"o":12},"roller_coaster":{"a":"Roller Coaster","b":"1F3A2","d":true,"e":true,"f":true,"h":true,"j":["carnival","playground","photo","fun"],"k":[8,8],"o":2},"turkey":{"a":"Turkey","b":"1F983","d":true,"e":true,"f":true,"h":true,"j":["animal","bird"],"k":[42,21],"o":2},"nazar_amulet":{"a":"Nazar Amulet","b":"1F9FF","d":true,"e":true,"f":true,"h":true,"k":[51,50],"o":11},"flag-cu":{"a":"Cuba Flag","b":"1F1E8-1F1FA","d":true,"e":true,"f":true,"h":true,"k":[1,26],"o":2},"aries":{"a":"Aries","b":"2648","d":true,"e":true,"f":true,"h":true,"j":["sign","purple-square","zodiac","astrology"],"k":[53,20],"o":2},"flag-cv":{"a":"Cape Verde Flag","b":"1F1E8-1F1FB","d":true,"e":true,"f":true,"h":true,"k":[1,27],"o":2},"barber":{"a":"Barber Pole","b":"1F488","d":true,"e":true,"f":true,"h":true,"j":["hair","salon","style"],"k":[25,18],"o":2},"taurus":{"a":"Taurus","b":"2649","d":true,"e":true,"f":true,"h":true,"j":["purple-square","sign","zodiac","astrology"],"k":[53,21],"o":2},"salt":{"a":"Salt Shaker","b":"1F9C2","d":true,"e":true,"f":true,"h":true,"k":[44,10],"o":11},"woman":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB","non_qualified":null,"image":"1f469-1f3fb.png","sheet_x":20,"sheet_y":10,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC","non_qualified":null,"image":"1f469-1f3fc.png","sheet_x":20,"sheet_y":11,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD","non_qualified":null,"image":"1f469-1f3fd.png","sheet_x":20,"sheet_y":12,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE","non_qualified":null,"image":"1f469-1f3fe.png","sheet_x":20,"sheet_y":13,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF","non_qualified":null,"image":"1f469-1f3ff.png","sheet_x":20,"sheet_y":14,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman","b":"1F469","d":true,"e":true,"f":true,"h":true,"j":["female","girls","lady"],"k":[20,9],"o":2},"video_game":{"a":"Video Game","b":"1F3AE","d":true,"e":true,"f":true,"h":true,"j":["play","console","PS4","controller"],"k":[8,20],"o":2},"chicken":{"a":"Chicken","b":"1F414","d":true,"e":true,"f":true,"h":true,"j":["animal","cluck","nature","bird"],"k":[11,48],"o":2},"radio":{"a":"Radio","b":"1F4FB","d":true,"e":true,"f":true,"h":true,"j":["communication","music","podcast","program"],"k":[27,24],"o":2},"nerd_face":{"a":"Nerd Face","b":"1F913","d":true,"e":true,"f":true,"h":true,"j":["face","nerdy","geek","dork"],"k":[37,26],"o":2},"red_haired_woman":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F9B0","non_qualified":null,"image":"1f469-1f3fb-200d-1f9b0.png","sheet_x":19,"sheet_y":9,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F9B0","non_qualified":null,"image":"1f469-1f3fc-200d-1f9b0.png","sheet_x":19,"sheet_y":10,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F9B0","non_qualified":null,"image":"1f469-1f3fd-200d-1f9b0.png","sheet_x":19,"sheet_y":11,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F9B0","non_qualified":null,"image":"1f469-1f3fe-200d-1f9b0.png","sheet_x":19,"sheet_y":12,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F9B0","non_qualified":null,"image":"1f469-1f3ff-200d-1f9b0.png","sheet_x":19,"sheet_y":13,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Red Haired Woman","b":"1F469-200D-1F9B0","d":true,"e":true,"f":true,"h":true,"k":[19,8],"o":11},"circus_tent":{"a":"Circus Tent","b":"1F3AA","d":true,"e":true,"f":true,"h":true,"j":["festival","carnival","party"],"k":[8,16],"o":2},"face_with_monocle":{"a":"Face with Monocle","b":"1F9D0","d":true,"e":true,"f":true,"h":true,"k":[45,16],"o":5},"canned_food":{"a":"Canned Food","b":"1F96B","d":true,"e":true,"f":true,"h":true,"k":[42,1],"o":5},"flag-cw":{"a":"Curaçao Flag","b":"1F1E8-1F1FC","d":true,"e":true,"f":true,"h":true,"k":[1,28],"o":2},"gemini":{"a":"Gemini","b":"264A","d":true,"e":true,"f":true,"h":true,"j":["sign","zodiac","purple-square","astrology"],"k":[53,22],"o":2},"saxophone":{"a":"Saxophone","b":"1F3B7","d":true,"e":true,"f":true,"h":true,"j":["music","instrument","jazz","blues"],"k":[8,29],"o":2},"rooster":{"a":"Rooster","b":"1F413","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","chicken"],"k":[11,47],"o":2},"joystick":{"a":"Joystick","b":"1F579-FE0F","c":"1F579","d":true,"e":true,"f":true,"h":true,"j":["game","play"],"k":[29,36],"o":2},"guitar":{"a":"Guitar","b":"1F3B8","d":true,"e":true,"f":true,"h":true,"j":["music","instrument"],"k":[8,30],"o":2},"slot_machine":{"a":"Slot Machine","b":"1F3B0","d":true,"e":true,"f":true,"h":true,"j":["bet","gamble","vegas","fruit machine","luck","casino"],"k":[8,22],"o":2},"bento":{"a":"Bento Box","b":"1F371","d":true,"e":true,"f":true,"h":true,"j":["food","japanese","box"],"k":[7,16],"o":2},"steam_locomotive":{"a":"Steam Locomotive","b":"1F682","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle","train"],"k":[34,1],"o":2},"confused":{"a":"Confused Face","b":"1F615","d":true,"e":true,"f":true,"h":true,"j":["face","indifference","huh","weird","hmmm",":/"],"k":[30,56],"l":[":\\",":-\\",":/",":-/"],"o":2},"flag-cx":{"a":"Christmas Island Flag","b":"1F1E8-1F1FD","d":true,"e":true,"f":true,"h":true,"k":[1,29],"o":2},"hatching_chick":{"a":"Hatching Chick","b":"1F423","d":true,"e":true,"f":true,"h":true,"j":["animal","chicken","egg","born","baby","bird"],"k":[12,7],"o":2},"cancer":{"a":"Cancer","b":"264B","d":true,"e":true,"f":true,"h":true,"j":["sign","zodiac","purple-square","astrology"],"k":[53,23],"o":2},"red_haired_person":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F9B0","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f9b0.png","sheet_x":47,"sheet_y":14,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F9B0","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f9b0.png","sheet_x":47,"sheet_y":15,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F9B0","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f9b0.png","sheet_x":47,"sheet_y":16,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F9B0","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f9b0.png","sheet_x":47,"sheet_y":17,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F9B0","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f9b0.png","sheet_x":47,"sheet_y":18,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Red Haired Person","b":"1F9D1-200D-1F9B0","d":true,"e":false,"f":false,"h":false,"k":[47,13],"o":12},"flag-cy":{"a":"Cyprus Flag","b":"1F1E8-1F1FE","d":true,"e":true,"f":true,"h":true,"k":[1,30],"o":2},"worried":{"a":"Worried Face","b":"1F61F","d":true,"e":true,"f":true,"h":true,"j":["face","concern","nervous",":("],"k":[31,9],"o":2},"railway_car":{"a":"Railway Car","b":"1F683","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle"],"k":[34,2],"o":2},"leo":{"a":"Leo","b":"264C","d":true,"e":true,"f":true,"h":true,"j":["sign","purple-square","zodiac","astrology"],"k":[53,24],"o":2},"curly_haired_woman":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F9B1","non_qualified":null,"image":"1f469-1f3fb-200d-1f9b1.png","sheet_x":19,"sheet_y":15,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F9B1","non_qualified":null,"image":"1f469-1f3fc-200d-1f9b1.png","sheet_x":19,"sheet_y":16,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F9B1","non_qualified":null,"image":"1f469-1f3fd-200d-1f9b1.png","sheet_x":19,"sheet_y":17,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F9B1","non_qualified":null,"image":"1f469-1f3fe-200d-1f9b1.png","sheet_x":19,"sheet_y":18,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F9B1","non_qualified":null,"image":"1f469-1f3ff-200d-1f9b1.png","sheet_x":19,"sheet_y":19,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Curly Haired Woman","b":"1F469-200D-1F9B1","d":true,"e":true,"f":true,"h":true,"k":[19,14],"o":11},"baby_chick":{"a":"Baby Chick","b":"1F424","d":true,"e":true,"f":true,"h":true,"j":["animal","chicken","bird"],"k":[12,8],"o":2},"musical_keyboard":{"a":"Musical Keyboard","b":"1F3B9","d":true,"e":true,"f":true,"h":true,"j":["piano","instrument","compose"],"k":[8,31],"o":2},"game_die":{"a":"Game Die","b":"1F3B2","d":true,"e":true,"f":true,"h":true,"j":["dice","random","tabletop","play","luck"],"k":[8,24],"o":2},"rice_cracker":{"a":"Rice Cracker","b":"1F358","d":true,"e":true,"f":true,"h":true,"j":["food","japanese"],"k":[6,48],"o":2},"virgo":{"a":"Virgo","b":"264D","d":true,"e":true,"f":true,"h":true,"j":["sign","zodiac","purple-square","astrology"],"k":[53,25],"o":2},"flag-cz":{"a":"Czechia Flag","b":"1F1E8-1F1FF","d":true,"e":true,"f":true,"h":true,"k":[1,31],"o":2},"curly_haired_person":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F9B1","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f9b1.png","sheet_x":47,"sheet_y":20,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F9B1","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f9b1.png","sheet_x":47,"sheet_y":21,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F9B1","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f9b1.png","sheet_x":47,"sheet_y":22,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F9B1","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f9b1.png","sheet_x":47,"sheet_y":23,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F9B1","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f9b1.png","sheet_x":47,"sheet_y":24,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Curly Haired Person","b":"1F9D1-200D-1F9B1","d":true,"e":false,"f":false,"h":false,"k":[47,19],"o":12},"rice_ball":{"a":"Rice Ball","b":"1F359","d":true,"e":true,"f":true,"h":true,"j":["food","japanese"],"k":[6,49],"o":2},"hatched_chick":{"a":"Front-Facing Baby Chick","b":"1F425","d":true,"e":true,"f":true,"h":true,"j":["animal","chicken","baby","bird"],"k":[12,9],"o":2},"jigsaw":{"a":"Jigsaw Puzzle Piece","b":"1F9E9","d":true,"e":true,"f":true,"h":true,"k":[51,28],"o":11},"trumpet":{"a":"Trumpet","b":"1F3BA","d":true,"e":true,"f":true,"h":true,"j":["music","brass"],"k":[8,32],"o":2},"slightly_frowning_face":{"a":"Slightly Frowning Face","b":"1F641","d":true,"e":true,"f":true,"h":true,"j":["face","frowning","disappointed","sad","upset"],"k":[31,43],"o":2},"bullettrain_side":{"a":"High-Speed Train","b":"1F684","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle"],"k":[34,3],"o":2},"libra":{"a":"Libra","b":"264E","d":true,"e":true,"f":true,"h":true,"j":["sign","purple-square","zodiac","astrology"],"k":[53,26],"o":2},"de":{"a":"Germany Flag","b":"1F1E9-1F1EA","d":true,"e":true,"f":true,"h":true,"j":["german","nation","flag","country","banner"],"k":[1,32],"n":["flag-de"],"o":2},"rice":{"a":"Cooked Rice","b":"1F35A","d":true,"e":true,"f":true,"h":true,"j":["food","china","asian"],"k":[6,50],"o":2},"violin":{"a":"Violin","b":"1F3BB","d":true,"e":true,"f":true,"h":true,"j":["music","instrument","orchestra","symphony"],"k":[8,33],"o":2},"white_haired_woman":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F9B3","non_qualified":null,"image":"1f469-1f3fb-200d-1f9b3.png","sheet_x":19,"sheet_y":27,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F9B3","non_qualified":null,"image":"1f469-1f3fc-200d-1f9b3.png","sheet_x":19,"sheet_y":28,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F9B3","non_qualified":null,"image":"1f469-1f3fd-200d-1f9b3.png","sheet_x":19,"sheet_y":29,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F9B3","non_qualified":null,"image":"1f469-1f3fe-200d-1f9b3.png","sheet_x":19,"sheet_y":30,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F9B3","non_qualified":null,"image":"1f469-1f3ff-200d-1f9b3.png","sheet_x":19,"sheet_y":31,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"White Haired Woman","b":"1F469-200D-1F9B3","d":true,"e":true,"f":true,"h":true,"k":[19,26],"o":11},"bird":{"a":"Bird","b":"1F426","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","fly","tweet","spring"],"k":[12,10],"o":2},"white_frowning_face":{"a":"White Frowning Face","b":"2639-FE0F","c":"2639","d":true,"e":true,"f":true,"h":true,"k":[53,16],"o":2},"bullettrain_front":{"a":"High-Speed Train with Bullet Nose","b":"1F685","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle","speed","fast","public","travel"],"k":[34,4],"o":2},"teddy_bear":{"a":"Teddy Bear","b":"1F9F8","d":true,"e":true,"f":true,"h":true,"k":[51,43],"o":11},"white_haired_person":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F9B3","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f9b3.png","sheet_x":47,"sheet_y":32,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F9B3","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f9b3.png","sheet_x":47,"sheet_y":33,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F9B3","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f9b3.png","sheet_x":47,"sheet_y":34,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F9B3","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f9b3.png","sheet_x":47,"sheet_y":35,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F9B3","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f9b3.png","sheet_x":47,"sheet_y":36,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"White Haired Person","b":"1F9D1-200D-1F9B3","d":true,"e":false,"f":false,"h":false,"k":[47,31],"o":12},"spades":{"a":"Black Spade Suit","b":"2660-FE0F","c":"2660","d":true,"e":true,"f":true,"h":true,"j":["poker","cards","suits","magic"],"k":[53,33],"o":2},"banjo":{"a":"Banjo","b":"1FA95","d":true,"e":true,"f":true,"h":true,"k":[52,9],"o":12},"train2":{"a":"Train","b":"1F686","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle"],"k":[34,5],"o":2},"scorpius":{"a":"Scorpius","b":"264F","d":true,"e":true,"f":true,"h":true,"j":["sign","zodiac","purple-square","astrology","scorpio"],"k":[53,27],"o":2},"curry":{"a":"Curry and Rice","b":"1F35B","d":true,"e":true,"f":true,"h":true,"j":["food","spicy","hot","indian"],"k":[6,51],"o":2},"open_mouth":{"a":"Face with Open Mouth","b":"1F62E","d":true,"e":true,"f":true,"h":true,"j":["face","surprise","impressed","wow","whoa",":O"],"k":[31,24],"l":[":o",":-o",":O",":-O"],"o":2},"flag-dg":{"a":"Diego Garcia Flag","b":"1F1E9-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[1,33],"o":2},"penguin":{"a":"Penguin","b":"1F427","d":true,"e":true,"f":true,"h":true,"j":["animal","nature"],"k":[12,11],"o":2},"hearts":{"a":"Black Heart Suit","b":"2665-FE0F","c":"2665","d":true,"e":true,"f":true,"h":true,"j":["poker","cards","magic","suits"],"k":[53,35],"o":2},"ramen":{"a":"Steaming Bowl","b":"1F35C","d":true,"e":true,"f":true,"h":true,"j":["food","japanese","noodle","chopsticks"],"k":[6,52],"o":2},"sagittarius":{"a":"Sagittarius","b":"2650","d":true,"e":true,"f":true,"h":true,"j":["sign","zodiac","purple-square","astrology"],"k":[53,28],"o":2},"bald_woman":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F9B2","non_qualified":null,"image":"1f469-1f3fb-200d-1f9b2.png","sheet_x":19,"sheet_y":21,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F9B2","non_qualified":null,"image":"1f469-1f3fc-200d-1f9b2.png","sheet_x":19,"sheet_y":22,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F9B2","non_qualified":null,"image":"1f469-1f3fd-200d-1f9b2.png","sheet_x":19,"sheet_y":23,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F9B2","non_qualified":null,"image":"1f469-1f3fe-200d-1f9b2.png","sheet_x":19,"sheet_y":24,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F9B2","non_qualified":null,"image":"1f469-1f3ff-200d-1f9b2.png","sheet_x":19,"sheet_y":25,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Bald Woman","b":"1F469-200D-1F9B2","d":true,"e":true,"f":true,"h":true,"k":[19,20],"o":11},"dove_of_peace":{"a":"Dove of Peace","b":"1F54A-FE0F","c":"1F54A","d":true,"e":true,"f":true,"h":true,"k":[28,34],"o":2},"hushed":{"a":"Hushed Face","b":"1F62F","d":true,"e":true,"f":true,"h":true,"j":["face","woo","shh"],"k":[31,25],"o":2},"metro":{"a":"Metro","b":"1F687","d":true,"e":true,"f":true,"h":true,"j":["transportation","blue-square","mrt","underground","tube"],"k":[34,6],"o":2},"flag-dj":{"a":"Djibouti Flag","b":"1F1E9-1F1EF","d":true,"e":true,"f":true,"h":true,"k":[1,34],"o":2},"drum_with_drumsticks":{"a":"Drum with Drumsticks","b":"1F941","d":true,"e":true,"f":true,"h":true,"k":[41,17],"o":4},"spaghetti":{"a":"Spaghetti","b":"1F35D","d":true,"e":true,"f":true,"h":true,"j":["food","italian","noodle"],"k":[6,53],"o":2},"eagle":{"a":"Eagle","b":"1F985","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","bird"],"k":[42,23],"o":4},"astonished":{"a":"Astonished Face","b":"1F632","d":true,"e":true,"f":true,"h":true,"j":["face","xox","surprised","poisoned"],"k":[31,28],"o":2},"capricorn":{"a":"Capricorn","b":"2651","d":true,"e":true,"f":true,"h":true,"j":["sign","zodiac","purple-square","astrology"],"k":[53,29],"o":2},"light_rail":{"a":"Light Rail","b":"1F688","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle"],"k":[34,7],"o":2},"flag-dk":{"a":"Denmark Flag","b":"1F1E9-1F1F0","d":true,"e":true,"f":true,"h":true,"k":[1,35],"o":2},"iphone":{"a":"Mobile Phone","b":"1F4F1","d":true,"e":true,"f":true,"h":true,"j":["technology","apple","gadgets","dial"],"k":[27,14],"o":2},"bald_person":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F9B2","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f9b2.png","sheet_x":47,"sheet_y":26,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F9B2","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f9b2.png","sheet_x":47,"sheet_y":27,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F9B2","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f9b2.png","sheet_x":47,"sheet_y":28,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F9B2","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f9b2.png","sheet_x":47,"sheet_y":29,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F9B2","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f9b2.png","sheet_x":47,"sheet_y":30,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Bald Person","b":"1F9D1-200D-1F9B2","d":true,"e":false,"f":false,"h":false,"k":[47,25],"o":12},"diamonds":{"a":"Black Diamond Suit","b":"2666-FE0F","c":"2666","d":true,"e":true,"f":true,"h":true,"j":["poker","cards","magic","suits"],"k":[53,36],"o":2},"clubs":{"a":"Black Club Suit","b":"2663-FE0F","c":"2663","d":true,"e":true,"f":true,"h":true,"j":["poker","cards","magic","suits"],"k":[53,34],"o":2},"aquarius":{"a":"Aquarius","b":"2652","d":true,"e":true,"f":true,"h":true,"j":["sign","purple-square","zodiac","astrology"],"k":[53,30],"o":2},"sweet_potato":{"a":"Roasted Sweet Potato","b":"1F360","d":true,"e":true,"f":true,"h":true,"j":["food","nature"],"k":[6,56],"o":2},"flag-dm":{"a":"Dominica Flag","b":"1F1E9-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[1,36],"o":2},"duck":{"a":"Duck","b":"1F986","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","bird","mallard"],"k":[42,24],"o":4},"calling":{"a":"Mobile Phone with Rightwards Arrow at Left","b":"1F4F2","d":true,"e":true,"f":true,"h":true,"j":["iphone","incoming"],"k":[27,15],"o":2},"station":{"a":"Station","b":"1F689","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle","public"],"k":[34,8],"o":2},"blond-haired-woman":{"skin_variations":{"1F3FB":{"unified":"1F471-1F3FB-200D-2640-FE0F","non_qualified":"1F471-1F3FB-200D-2640","image":"1f471-1f3fb-200d-2640-fe0f.png","sheet_x":22,"sheet_y":8,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F471-1F3FC-200D-2640-FE0F","non_qualified":"1F471-1F3FC-200D-2640","image":"1f471-1f3fc-200d-2640-fe0f.png","sheet_x":22,"sheet_y":9,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F471-1F3FD-200D-2640-FE0F","non_qualified":"1F471-1F3FD-200D-2640","image":"1f471-1f3fd-200d-2640-fe0f.png","sheet_x":22,"sheet_y":10,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F471-1F3FE-200D-2640-FE0F","non_qualified":"1F471-1F3FE-200D-2640","image":"1f471-1f3fe-200d-2640-fe0f.png","sheet_x":22,"sheet_y":11,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F471-1F3FF-200D-2640-FE0F","non_qualified":"1F471-1F3FF-200D-2640","image":"1f471-1f3ff-200d-2640-fe0f.png","sheet_x":22,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Blond Haired Woman","b":"1F471-200D-2640-FE0F","c":"1F471-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[22,7],"o":4},"flushed":{"a":"Flushed Face","b":"1F633","d":true,"e":true,"f":true,"h":true,"j":["face","blush","shy","flattered"],"k":[31,29],"o":2},"pisces":{"a":"Pisces","b":"2653","d":true,"e":true,"f":true,"h":true,"j":["purple-square","sign","zodiac","astrology"],"k":[53,31],"o":2},"chess_pawn":{"a":"Chess Pawn","b":"265F-FE0F","c":"265F","d":true,"e":true,"f":true,"h":true,"k":[53,32],"o":11},"blond-haired-man":{"skin_variations":{"1F3FB":{"unified":"1F471-1F3FB-200D-2642-FE0F","non_qualified":"1F471-1F3FB-200D-2642","image":"1f471-1f3fb-200d-2642-fe0f.png","sheet_x":22,"sheet_y":14,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F471-1F3FC-200D-2642-FE0F","non_qualified":"1F471-1F3FC-200D-2642","image":"1f471-1f3fc-200d-2642-fe0f.png","sheet_x":22,"sheet_y":15,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F471-1F3FD-200D-2642-FE0F","non_qualified":"1F471-1F3FD-200D-2642","image":"1f471-1f3fd-200d-2642-fe0f.png","sheet_x":22,"sheet_y":16,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F471-1F3FE-200D-2642-FE0F","non_qualified":"1F471-1F3FE-200D-2642","image":"1f471-1f3fe-200d-2642-fe0f.png","sheet_x":22,"sheet_y":17,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F471-1F3FF-200D-2642-FE0F","non_qualified":"1F471-1F3FF-200D-2642","image":"1f471-1f3ff-200d-2642-fe0f.png","sheet_x":22,"sheet_y":18,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F471","a":"Blond Haired Man","b":"1F471-200D-2642-FE0F","c":"1F471-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[22,13],"o":4},"phone":{"a":"Black Telephone","b":"260E-FE0F","c":"260E","d":true,"e":true,"f":true,"h":true,"j":["technology","communication","dial","telephone"],"k":[52,54],"n":["telephone"],"o":2},"oden":{"a":"Oden","b":"1F362","d":true,"e":true,"f":true,"h":true,"j":["food","japanese"],"k":[7,1],"o":2},"flag-do":{"a":"Dominican Republic Flag","b":"1F1E9-1F1F4","d":true,"e":true,"f":true,"h":true,"k":[1,37],"o":2},"tram":{"a":"Tram","b":"1F68A","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle"],"k":[34,9],"o":2},"swan":{"a":"Swan","b":"1F9A2","d":true,"e":true,"f":true,"h":true,"k":[42,52],"o":11},"pleading_face":{"a":"Face with Pleading Eyes","b":"1F97A","d":true,"e":true,"f":true,"h":true,"k":[42,12],"o":11},"flag-dz":{"a":"Algeria Flag","b":"1F1E9-1F1FF","d":true,"e":true,"f":true,"h":true,"k":[1,38],"o":2},"monorail":{"a":"Monorail","b":"1F69D","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle"],"k":[34,28],"o":2},"owl":{"a":"Owl","b":"1F989","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","bird","hoot"],"k":[42,27],"o":4},"sushi":{"a":"Sushi","b":"1F363","d":true,"e":true,"f":true,"h":true,"j":["food","fish","japanese","rice"],"k":[7,2],"o":2},"telephone_receiver":{"a":"Telephone Receiver","b":"1F4DE","d":true,"e":true,"f":true,"h":true,"j":["technology","communication","dial"],"k":[26,52],"o":2},"black_joker":{"a":"Playing Card Black Joker","b":"1F0CF","d":true,"e":true,"f":true,"h":true,"j":["poker","cards","game","play","magic"],"k":[0,15],"o":2},"ophiuchus":{"a":"Ophiuchus","b":"26CE","d":true,"e":true,"f":true,"h":true,"j":["sign","purple-square","constellation","astrology"],"k":[54,4],"o":2},"frowning":{"a":"Frowning Face with Open Mouth","b":"1F626","d":true,"e":true,"f":true,"h":true,"j":["face","aw","what"],"k":[31,16],"o":2},"older_adult":{"skin_variations":{"1F3FB":{"unified":"1F9D3-1F3FB","non_qualified":null,"image":"1f9d3-1f3fb.png","sheet_x":48,"sheet_y":23,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9D3-1F3FC","non_qualified":null,"image":"1f9d3-1f3fc.png","sheet_x":48,"sheet_y":24,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9D3-1F3FD","non_qualified":null,"image":"1f9d3-1f3fd.png","sheet_x":48,"sheet_y":25,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9D3-1F3FE","non_qualified":null,"image":"1f9d3-1f3fe.png","sheet_x":48,"sheet_y":26,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9D3-1F3FF","non_qualified":null,"image":"1f9d3-1f3ff.png","sheet_x":48,"sheet_y":27,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Older Adult","b":"1F9D3","d":true,"e":true,"f":true,"h":true,"k":[48,22],"o":5},"flag-ea":{"a":"Ceuta & Melilla Flag","b":"1F1EA-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[1,39],"o":2},"flamingo":{"a":"Flamingo","b":"1F9A9","d":true,"e":true,"f":true,"h":true,"k":[43,0],"o":12},"pager":{"a":"Pager","b":"1F4DF","d":true,"e":true,"f":true,"h":true,"j":["bbcall","oldschool","90s"],"k":[26,53],"o":2},"mountain_railway":{"a":"Mountain Railway","b":"1F69E","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle"],"k":[34,29],"o":2},"mahjong":{"a":"Mahjong Tile Red Dragon","b":"1F004","d":true,"e":true,"f":true,"h":true,"j":["game","play","chinese","kanji"],"k":[0,14],"o":2},"older_man":{"skin_variations":{"1F3FB":{"unified":"1F474-1F3FB","non_qualified":null,"image":"1f474-1f3fb.png","sheet_x":22,"sheet_y":50,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F474-1F3FC","non_qualified":null,"image":"1f474-1f3fc.png","sheet_x":22,"sheet_y":51,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F474-1F3FD","non_qualified":null,"image":"1f474-1f3fd.png","sheet_x":22,"sheet_y":52,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F474-1F3FE","non_qualified":null,"image":"1f474-1f3fe.png","sheet_x":22,"sheet_y":53,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F474-1F3FF","non_qualified":null,"image":"1f474-1f3ff.png","sheet_x":22,"sheet_y":54,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Older Man","b":"1F474","d":true,"e":true,"f":true,"h":true,"j":["human","male","men","old","elder","senior"],"k":[22,49],"o":2},"twisted_rightwards_arrows":{"a":"Twisted Rightwards Arrows","b":"1F500","d":true,"e":true,"f":true,"h":true,"j":["blue-square","shuffle","music","random"],"k":[27,28],"o":2},"fried_shrimp":{"a":"Fried Shrimp","b":"1F364","d":true,"e":true,"f":true,"h":true,"j":["food","animal","appetizer","summer"],"k":[7,3],"o":2},"anguished":{"a":"Anguished Face","b":"1F627","d":true,"e":true,"f":true,"h":true,"j":["face","stunned","nervous"],"k":[31,17],"l":["D:"],"o":2},"repeat":{"a":"Clockwise Rightwards and Leftwards Open Circle Arrows","b":"1F501","d":true,"e":true,"f":true,"h":true,"j":["loop","record"],"k":[27,29],"o":2},"fish_cake":{"a":"Fish Cake with Swirl Design","b":"1F365","d":true,"e":true,"f":true,"h":true,"j":["food","japan","sea","beach","narutomaki","pink","swirl","kamaboko","surimi","ramen"],"k":[7,4],"o":2},"fax":{"a":"Fax Machine","b":"1F4E0","d":true,"e":true,"f":true,"h":true,"j":["communication","technology"],"k":[26,54],"o":2},"older_woman":{"skin_variations":{"1F3FB":{"unified":"1F475-1F3FB","non_qualified":null,"image":"1f475-1f3fb.png","sheet_x":22,"sheet_y":56,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F475-1F3FC","non_qualified":null,"image":"1f475-1f3fc.png","sheet_x":23,"sheet_y":0,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F475-1F3FD","non_qualified":null,"image":"1f475-1f3fd.png","sheet_x":23,"sheet_y":1,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F475-1F3FE","non_qualified":null,"image":"1f475-1f3fe.png","sheet_x":23,"sheet_y":2,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F475-1F3FF","non_qualified":null,"image":"1f475-1f3ff.png","sheet_x":23,"sheet_y":3,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Older Woman","b":"1F475","d":true,"e":true,"f":true,"h":true,"j":["human","female","women","lady","old","elder","senior"],"k":[22,55],"o":2},"flag-ec":{"a":"Ecuador Flag","b":"1F1EA-1F1E8","d":true,"e":true,"f":true,"h":true,"k":[1,40],"o":2},"peacock":{"a":"Peacock","b":"1F99A","d":true,"e":true,"f":true,"h":true,"k":[42,44],"o":11},"fearful":{"a":"Fearful Face","b":"1F628","d":true,"e":true,"f":true,"h":true,"j":["face","scared","terrified","nervous","oops","huh"],"k":[31,18],"o":2},"train":{"a":"Tram Car","b":"1F68B","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle","carriage","public","travel"],"k":[34,10],"o":2},"flower_playing_cards":{"a":"Flower Playing Cards","b":"1F3B4","d":true,"e":true,"f":true,"h":true,"j":["game","sunset","red"],"k":[8,26],"o":2},"repeat_one":{"a":"Clockwise Rightwards and Leftwards Open Circle Arrows with Circled One Overlay","b":"1F502","d":true,"e":true,"f":true,"h":true,"j":["blue-square","loop"],"k":[27,30],"o":2},"moon_cake":{"a":"Moon Cake","b":"1F96E","d":true,"e":true,"f":true,"h":true,"k":[42,4],"o":11},"performing_arts":{"a":"Performing Arts","b":"1F3AD","d":true,"e":true,"f":true,"h":true,"j":["acting","theater","drama"],"k":[8,19],"o":2},"cold_sweat":{"a":"Face with Open Mouth and Cold Sweat","b":"1F630","d":true,"e":true,"f":true,"h":true,"j":["face","nervous","sweat"],"k":[31,26],"o":2},"person_frowning":{"skin_variations":{"1F3FB":{"unified":"1F64D-1F3FB","non_qualified":null,"image":"1f64d-1f3fb.png","sheet_x":33,"sheet_y":27,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F64D-1F3FC","non_qualified":null,"image":"1f64d-1f3fc.png","sheet_x":33,"sheet_y":28,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F64D-1F3FD","non_qualified":null,"image":"1f64d-1f3fd.png","sheet_x":33,"sheet_y":29,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F64D-1F3FE","non_qualified":null,"image":"1f64d-1f3fe.png","sheet_x":33,"sheet_y":30,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F64D-1F3FF","non_qualified":null,"image":"1f64d-1f3ff.png","sheet_x":33,"sheet_y":31,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F64D-200D-2640-FE0F","a":"Person Frowning","b":"1F64D","d":true,"e":true,"f":true,"h":false,"k":[33,26],"o":2},"flag-ee":{"a":"Estonia Flag","b":"1F1EA-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[1,41],"o":2},"battery":{"a":"Battery","b":"1F50B","d":true,"e":true,"f":true,"h":true,"j":["power","energy","sustain"],"k":[27,39],"o":2},"parrot":{"a":"Parrot","b":"1F99C","d":true,"e":true,"f":true,"h":true,"k":[42,46],"o":11},"bus":{"a":"Bus","b":"1F68C","d":true,"e":true,"f":true,"h":true,"j":["car","vehicle","transportation"],"k":[34,11],"o":2},"flag-eg":{"a":"Egypt Flag","b":"1F1EA-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[1,42],"o":2},"arrow_forward":{"a":"Black Right-Pointing Triangle","b":"25B6-FE0F","c":"25B6","d":true,"e":true,"f":true,"h":true,"j":["blue-square","right","direction","play"],"k":[52,43],"o":2},"man-frowning":{"skin_variations":{"1F3FB":{"unified":"1F64D-1F3FB-200D-2642-FE0F","non_qualified":"1F64D-1F3FB-200D-2642","image":"1f64d-1f3fb-200d-2642-fe0f.png","sheet_x":33,"sheet_y":21,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F64D-1F3FC-200D-2642-FE0F","non_qualified":"1F64D-1F3FC-200D-2642","image":"1f64d-1f3fc-200d-2642-fe0f.png","sheet_x":33,"sheet_y":22,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F64D-1F3FD-200D-2642-FE0F","non_qualified":"1F64D-1F3FD-200D-2642","image":"1f64d-1f3fd-200d-2642-fe0f.png","sheet_x":33,"sheet_y":23,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F64D-1F3FE-200D-2642-FE0F","non_qualified":"1F64D-1F3FE-200D-2642","image":"1f64d-1f3fe-200d-2642-fe0f.png","sheet_x":33,"sheet_y":24,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F64D-1F3FF-200D-2642-FE0F","non_qualified":"1F64D-1F3FF-200D-2642","image":"1f64d-1f3ff-200d-2642-fe0f.png","sheet_x":33,"sheet_y":25,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Frowning","b":"1F64D-200D-2642-FE0F","c":"1F64D-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[33,20],"o":4},"disappointed_relieved":{"a":"Disappointed but Relieved Face","b":"1F625","d":true,"e":true,"f":true,"h":true,"j":["face","phew","sweat","nervous"],"k":[31,15],"o":2},"electric_plug":{"a":"Electric Plug","b":"1F50C","d":true,"e":true,"f":true,"h":true,"j":["charger","power"],"k":[27,40],"o":2},"frame_with_picture":{"a":"Frame with Picture","b":"1F5BC-FE0F","c":"1F5BC","d":true,"e":true,"f":true,"h":true,"k":[30,14],"o":2},"oncoming_bus":{"a":"Oncoming Bus","b":"1F68D","d":true,"e":true,"f":true,"h":true,"j":["vehicle","transportation"],"k":[34,12],"o":2},"dango":{"a":"Dango","b":"1F361","d":true,"e":true,"f":true,"h":true,"j":["food","dessert","sweet","japanese","barbecue","meat"],"k":[7,0],"o":2},"frog":{"a":"Frog Face","b":"1F438","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","croak","toad"],"k":[12,28],"o":2},"computer":{"a":"Personal Computer","b":"1F4BB","d":true,"e":true,"f":true,"h":true,"j":["technology","laptop","screen","display","monitor"],"k":[26,17],"o":2},"art":{"a":"Artist Palette","b":"1F3A8","d":true,"e":true,"f":true,"h":true,"j":["design","paint","draw","colors"],"k":[8,14],"o":2},"flag-eh":{"a":"Western Sahara Flag","b":"1F1EA-1F1ED","d":true,"e":true,"f":true,"h":true,"k":[1,43],"o":2},"fast_forward":{"a":"Black Right-Pointing Double Triangle","b":"23E9","d":true,"e":true,"f":true,"h":true,"j":["blue-square","play","speed","continue"],"k":[52,26],"o":2},"cry":{"a":"Crying Face","b":"1F622","d":true,"e":true,"f":true,"h":true,"j":["face","tears","sad","depressed","upset",":'("],"k":[31,12],"l":[":'("],"m":":'(","o":2},"woman-frowning":{"skin_variations":{"1F3FB":{"unified":"1F64D-1F3FB-200D-2640-FE0F","non_qualified":"1F64D-1F3FB-200D-2640","image":"1f64d-1f3fb-200d-2640-fe0f.png","sheet_x":33,"sheet_y":15,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F64D-1F3FC-200D-2640-FE0F","non_qualified":"1F64D-1F3FC-200D-2640","image":"1f64d-1f3fc-200d-2640-fe0f.png","sheet_x":33,"sheet_y":16,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F64D-1F3FD-200D-2640-FE0F","non_qualified":"1F64D-1F3FD-200D-2640","image":"1f64d-1f3fd-200d-2640-fe0f.png","sheet_x":33,"sheet_y":17,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F64D-1F3FE-200D-2640-FE0F","non_qualified":"1F64D-1F3FE-200D-2640","image":"1f64d-1f3fe-200d-2640-fe0f.png","sheet_x":33,"sheet_y":18,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F64D-1F3FF-200D-2640-FE0F","non_qualified":"1F64D-1F3FF-200D-2640","image":"1f64d-1f3ff-200d-2640-fe0f.png","sheet_x":33,"sheet_y":19,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F64D","a":"Woman Frowning","b":"1F64D-200D-2640-FE0F","c":"1F64D-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[33,14],"o":4},"trolleybus":{"a":"Trolleybus","b":"1F68E","d":true,"e":true,"f":true,"h":true,"j":["bart","transportation","vehicle"],"k":[34,13],"o":2},"crocodile":{"a":"Crocodile","b":"1F40A","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","reptile","lizard","alligator"],"k":[11,38],"o":2},"dumpling":{"a":"Dumpling","b":"1F95F","d":true,"e":true,"f":true,"h":true,"k":[41,46],"o":5},"black_right_pointing_double_triangle_with_vertical_bar":{"a":"Black Right Pointing Double Triangle with Vertical Bar","b":"23ED-FE0F","c":"23ED","d":true,"e":true,"f":true,"h":true,"k":[52,30],"o":2},"desktop_computer":{"a":"Desktop Computer","b":"1F5A5-FE0F","c":"1F5A5","d":true,"e":true,"f":true,"h":true,"j":["technology","computing","screen"],"k":[30,10],"o":2},"person_with_pouting_face":{"skin_variations":{"1F3FB":{"unified":"1F64E-1F3FB","non_qualified":null,"image":"1f64e-1f3fb.png","sheet_x":33,"sheet_y":45,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F64E-1F3FC","non_qualified":null,"image":"1f64e-1f3fc.png","sheet_x":33,"sheet_y":46,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F64E-1F3FD","non_qualified":null,"image":"1f64e-1f3fd.png","sheet_x":33,"sheet_y":47,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F64E-1F3FE","non_qualified":null,"image":"1f64e-1f3fe.png","sheet_x":33,"sheet_y":48,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F64E-1F3FF","non_qualified":null,"image":"1f64e-1f3ff.png","sheet_x":33,"sheet_y":49,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F64E-200D-2640-FE0F","a":"Person with Pouting Face","b":"1F64E","d":true,"e":true,"f":true,"h":false,"k":[33,44],"o":2},"turtle":{"a":"Turtle","b":"1F422","d":true,"e":true,"f":true,"h":true,"j":["animal","slow","nature","tortoise"],"k":[12,6],"o":2},"sob":{"a":"Loudly Crying Face","b":"1F62D","d":true,"e":true,"f":true,"h":true,"j":["face","cry","tears","sad","upset","depressed"],"k":[31,23],"m":":'(","o":2},"flag-er":{"a":"Eritrea Flag","b":"1F1EA-1F1F7","d":true,"e":true,"f":true,"h":true,"k":[1,44],"o":2},"thread":{"a":"Spool of Thread","b":"1F9F5","d":true,"e":true,"f":true,"h":true,"k":[51,40],"o":11},"minibus":{"a":"Minibus","b":"1F690","d":true,"e":true,"f":true,"h":true,"j":["vehicle","car","transportation"],"k":[34,15],"o":2},"fortune_cookie":{"a":"Fortune Cookie","b":"1F960","d":true,"e":true,"f":true,"h":true,"k":[41,47],"o":5},"yarn":{"a":"Ball of Yarn","b":"1F9F6","d":true,"e":true,"f":true,"h":true,"k":[51,41],"o":11},"takeout_box":{"a":"Takeout Box","b":"1F961","d":true,"e":true,"f":true,"h":true,"k":[41,48],"o":5},"man-pouting":{"skin_variations":{"1F3FB":{"unified":"1F64E-1F3FB-200D-2642-FE0F","non_qualified":"1F64E-1F3FB-200D-2642","image":"1f64e-1f3fb-200d-2642-fe0f.png","sheet_x":33,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F64E-1F3FC-200D-2642-FE0F","non_qualified":"1F64E-1F3FC-200D-2642","image":"1f64e-1f3fc-200d-2642-fe0f.png","sheet_x":33,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F64E-1F3FD-200D-2642-FE0F","non_qualified":"1F64E-1F3FD-200D-2642","image":"1f64e-1f3fd-200d-2642-fe0f.png","sheet_x":33,"sheet_y":41,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F64E-1F3FE-200D-2642-FE0F","non_qualified":"1F64E-1F3FE-200D-2642","image":"1f64e-1f3fe-200d-2642-fe0f.png","sheet_x":33,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F64E-1F3FF-200D-2642-FE0F","non_qualified":"1F64E-1F3FF-200D-2642","image":"1f64e-1f3ff-200d-2642-fe0f.png","sheet_x":33,"sheet_y":43,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Pouting","b":"1F64E-200D-2642-FE0F","c":"1F64E-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[33,38],"o":4},"printer":{"a":"Printer","b":"1F5A8-FE0F","c":"1F5A8","d":true,"e":true,"f":true,"h":true,"j":["paper","ink"],"k":[30,11],"o":2},"scream":{"a":"Face Screaming in Fear","b":"1F631","d":true,"e":true,"f":true,"h":true,"j":["face","munch","scared","omg"],"k":[31,27],"o":2},"es":{"a":"Spain Flag","b":"1F1EA-1F1F8","d":true,"e":true,"f":true,"h":true,"j":["spain","flag","nation","country","banner"],"k":[1,45],"n":["flag-es"],"o":2},"ambulance":{"a":"Ambulance","b":"1F691","d":true,"e":true,"f":true,"h":true,"j":["health","911","hospital"],"k":[34,16],"o":2},"black_right_pointing_triangle_with_double_vertical_bar":{"a":"Black Right Pointing Triangle with Double Vertical Bar","b":"23EF-FE0F","c":"23EF","d":true,"e":true,"f":true,"h":true,"k":[52,32],"o":2},"lizard":{"a":"Lizard","b":"1F98E","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","reptile"],"k":[42,32],"o":4},"flag-et":{"a":"Ethiopia Flag","b":"1F1EA-1F1F9","d":true,"e":true,"f":true,"h":true,"k":[1,46],"o":2},"keyboard":{"a":"Keyboard","b":"2328-FE0F","c":"2328","d":true,"e":true,"f":true,"h":true,"j":["technology","computer","type","input","text"],"k":[52,24],"o":2},"crab":{"a":"Crab","b":"1F980","d":true,"e":true,"f":true,"h":true,"j":["animal","crustacean"],"k":[42,18],"o":2},"confounded":{"a":"Confounded Face","b":"1F616","d":true,"e":true,"f":true,"h":true,"j":["face","confused","sick","unwell","oops",":S"],"k":[31,0],"o":2},"snake":{"a":"Snake","b":"1F40D","d":true,"e":true,"f":true,"h":true,"j":["animal","evil","nature","hiss","python"],"k":[11,41],"o":2},"woman-pouting":{"skin_variations":{"1F3FB":{"unified":"1F64E-1F3FB-200D-2640-FE0F","non_qualified":"1F64E-1F3FB-200D-2640","image":"1f64e-1f3fb-200d-2640-fe0f.png","sheet_x":33,"sheet_y":33,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F64E-1F3FC-200D-2640-FE0F","non_qualified":"1F64E-1F3FC-200D-2640","image":"1f64e-1f3fc-200d-2640-fe0f.png","sheet_x":33,"sheet_y":34,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F64E-1F3FD-200D-2640-FE0F","non_qualified":"1F64E-1F3FD-200D-2640","image":"1f64e-1f3fd-200d-2640-fe0f.png","sheet_x":33,"sheet_y":35,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F64E-1F3FE-200D-2640-FE0F","non_qualified":"1F64E-1F3FE-200D-2640","image":"1f64e-1f3fe-200d-2640-fe0f.png","sheet_x":33,"sheet_y":36,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F64E-1F3FF-200D-2640-FE0F","non_qualified":"1F64E-1F3FF-200D-2640","image":"1f64e-1f3ff-200d-2640-fe0f.png","sheet_x":33,"sheet_y":37,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F64E","a":"Woman Pouting","b":"1F64E-200D-2640-FE0F","c":"1F64E-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[33,32],"o":4},"arrow_backward":{"a":"Black Left-Pointing Triangle","b":"25C0-FE0F","c":"25C0","d":true,"e":true,"f":true,"h":true,"j":["blue-square","left","direction"],"k":[52,44],"o":2},"fire_engine":{"a":"Fire Engine","b":"1F692","d":true,"e":true,"f":true,"h":true,"j":["transportation","cars","vehicle"],"k":[34,17],"o":2},"rewind":{"a":"Black Left-Pointing Double Triangle","b":"23EA","d":true,"e":true,"f":true,"h":true,"j":["play","blue-square"],"k":[52,27],"o":2},"three_button_mouse":{"a":"Three Button Mouse","b":"1F5B1-FE0F","c":"1F5B1","d":true,"e":true,"f":true,"h":true,"k":[30,12],"o":2},"no_good":{"skin_variations":{"1F3FB":{"unified":"1F645-1F3FB","non_qualified":null,"image":"1f645-1f3fb.png","sheet_x":32,"sheet_y":3,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F645-1F3FC","non_qualified":null,"image":"1f645-1f3fc.png","sheet_x":32,"sheet_y":4,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F645-1F3FD","non_qualified":null,"image":"1f645-1f3fd.png","sheet_x":32,"sheet_y":5,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F645-1F3FE","non_qualified":null,"image":"1f645-1f3fe.png","sheet_x":32,"sheet_y":6,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F645-1F3FF","non_qualified":null,"image":"1f645-1f3ff.png","sheet_x":32,"sheet_y":7,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F645-200D-2640-FE0F","a":"Face with No Good Gesture","b":"1F645","d":true,"e":true,"f":true,"h":false,"k":[32,2],"o":2},"police_car":{"a":"Police Car","b":"1F693","d":true,"e":true,"f":true,"h":true,"j":["vehicle","cars","transportation","law","legal","enforcement"],"k":[34,18],"o":2},"dragon_face":{"a":"Dragon Face","b":"1F432","d":true,"e":true,"f":true,"h":true,"j":["animal","myth","nature","chinese","green"],"k":[12,22],"o":2},"persevere":{"a":"Persevering Face","b":"1F623","d":true,"e":true,"f":true,"h":true,"j":["face","sick","no","upset","oops"],"k":[31,13],"o":2},"lobster":{"a":"Lobster","b":"1F99E","d":true,"e":true,"f":true,"h":true,"k":[42,48],"o":11},"flag-eu":{"a":"European Union Flag","b":"1F1EA-1F1FA","d":true,"e":true,"f":true,"h":true,"k":[1,47],"o":2},"disappointed":{"a":"Disappointed Face","b":"1F61E","d":true,"e":true,"f":true,"h":true,"j":["face","sad","upset","depressed",":("],"k":[31,8],"l":["):",":(",":-("],"m":":(","o":2},"shrimp":{"a":"Shrimp","b":"1F990","d":true,"e":true,"f":true,"h":true,"j":["animal","ocean","nature","seafood"],"k":[42,34],"o":4},"dragon":{"a":"Dragon","b":"1F409","d":true,"e":true,"f":true,"h":true,"j":["animal","myth","nature","chinese","green"],"k":[11,37],"o":2},"man-gesturing-no":{"skin_variations":{"1F3FB":{"unified":"1F645-1F3FB-200D-2642-FE0F","non_qualified":"1F645-1F3FB-200D-2642","image":"1f645-1f3fb-200d-2642-fe0f.png","sheet_x":31,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F645-1F3FC-200D-2642-FE0F","non_qualified":"1F645-1F3FC-200D-2642","image":"1f645-1f3fc-200d-2642-fe0f.png","sheet_x":31,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F645-1F3FD-200D-2642-FE0F","non_qualified":"1F645-1F3FD-200D-2642","image":"1f645-1f3fd-200d-2642-fe0f.png","sheet_x":31,"sheet_y":56,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F645-1F3FE-200D-2642-FE0F","non_qualified":"1F645-1F3FE-200D-2642","image":"1f645-1f3fe-200d-2642-fe0f.png","sheet_x":32,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F645-1F3FF-200D-2642-FE0F","non_qualified":"1F645-1F3FF-200D-2642","image":"1f645-1f3ff-200d-2642-fe0f.png","sheet_x":32,"sheet_y":1,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Gesturing No","b":"1F645-200D-2642-FE0F","c":"1F645-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[31,53],"o":4},"flag-fi":{"a":"Finland Flag","b":"1F1EB-1F1EE","d":true,"e":true,"f":true,"h":true,"k":[1,48],"o":2},"trackball":{"a":"Trackball","b":"1F5B2-FE0F","c":"1F5B2","d":true,"e":true,"f":true,"h":true,"j":["technology","trackpad"],"k":[30,13],"o":2},"black_left_pointing_double_triangle_with_vertical_bar":{"a":"Black Left Pointing Double Triangle with Vertical Bar","b":"23EE-FE0F","c":"23EE","d":true,"e":true,"f":true,"h":true,"k":[52,31],"o":2},"oncoming_police_car":{"a":"Oncoming Police Car","b":"1F694","d":true,"e":true,"f":true,"h":true,"j":["vehicle","law","legal","enforcement","911"],"k":[34,19],"o":2},"minidisc":{"a":"Minidisc","b":"1F4BD","d":true,"e":true,"f":true,"h":true,"j":["technology","record","data","disk","90s"],"k":[26,19],"o":2},"sweat":{"a":"Face with Cold Sweat","b":"1F613","d":true,"e":true,"f":true,"h":true,"j":["face","hot","sad","tired","exercise"],"k":[30,54],"o":2},"squid":{"a":"Squid","b":"1F991","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","ocean","sea"],"k":[42,35],"o":4},"sauropod":{"a":"Sauropod","b":"1F995","d":true,"e":true,"f":true,"h":true,"k":[42,39],"o":5},"arrow_up_small":{"a":"Up-Pointing Small Red Triangle","b":"1F53C","d":true,"e":true,"f":true,"h":true,"j":["blue-square","triangle","direction","point","forward","top"],"k":[28,31],"o":2},"flag-fj":{"a":"Fiji Flag","b":"1F1EB-1F1EF","d":true,"e":true,"f":true,"h":true,"k":[1,49],"o":2},"woman-gesturing-no":{"skin_variations":{"1F3FB":{"unified":"1F645-1F3FB-200D-2640-FE0F","non_qualified":"1F645-1F3FB-200D-2640","image":"1f645-1f3fb-200d-2640-fe0f.png","sheet_x":31,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F645-1F3FC-200D-2640-FE0F","non_qualified":"1F645-1F3FC-200D-2640","image":"1f645-1f3fc-200d-2640-fe0f.png","sheet_x":31,"sheet_y":49,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F645-1F3FD-200D-2640-FE0F","non_qualified":"1F645-1F3FD-200D-2640","image":"1f645-1f3fd-200d-2640-fe0f.png","sheet_x":31,"sheet_y":50,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F645-1F3FE-200D-2640-FE0F","non_qualified":"1F645-1F3FE-200D-2640","image":"1f645-1f3fe-200d-2640-fe0f.png","sheet_x":31,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F645-1F3FF-200D-2640-FE0F","non_qualified":"1F645-1F3FF-200D-2640","image":"1f645-1f3ff-200d-2640-fe0f.png","sheet_x":31,"sheet_y":52,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F645","a":"Woman Gesturing No","b":"1F645-200D-2640-FE0F","c":"1F645-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[31,47],"o":4},"taxi":{"a":"Taxi","b":"1F695","d":true,"e":true,"f":true,"h":true,"j":["uber","vehicle","cars","transportation"],"k":[34,20],"o":2},"flag-fk":{"a":"Falkland Islands Flag","b":"1F1EB-1F1F0","d":true,"e":true,"f":true,"h":true,"k":[1,50],"o":2},"floppy_disk":{"a":"Floppy Disk","b":"1F4BE","d":true,"e":true,"f":true,"h":true,"j":["oldschool","technology","save","90s","80s"],"k":[26,20],"o":2},"t-rex":{"a":"T-Rex","b":"1F996","d":true,"e":true,"f":true,"h":true,"k":[42,40],"o":5},"oyster":{"a":"Oyster","b":"1F9AA","d":true,"e":true,"f":true,"h":true,"k":[43,1],"o":12},"arrow_double_up":{"a":"Black Up-Pointing Double Triangle","b":"23EB","d":true,"e":true,"f":true,"h":true,"j":["blue-square","direction","top"],"k":[52,28],"o":2},"oncoming_taxi":{"a":"Oncoming Taxi","b":"1F696","d":true,"e":true,"f":true,"h":true,"j":["vehicle","cars","uber"],"k":[34,21],"o":2},"ok_woman":{"skin_variations":{"1F3FB":{"unified":"1F646-1F3FB","non_qualified":null,"image":"1f646-1f3fb.png","sheet_x":32,"sheet_y":21,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F646-1F3FC","non_qualified":null,"image":"1f646-1f3fc.png","sheet_x":32,"sheet_y":22,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F646-1F3FD","non_qualified":null,"image":"1f646-1f3fd.png","sheet_x":32,"sheet_y":23,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F646-1F3FE","non_qualified":null,"image":"1f646-1f3fe.png","sheet_x":32,"sheet_y":24,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F646-1F3FF","non_qualified":null,"image":"1f646-1f3ff.png","sheet_x":32,"sheet_y":25,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F646-200D-2640-FE0F","a":"Face with Ok Gesture","b":"1F646","d":true,"e":true,"f":true,"h":false,"j":["women","girl","female","pink","human","woman"],"k":[32,20],"o":2},"weary":{"a":"Weary Face","b":"1F629","d":true,"e":true,"f":true,"h":true,"j":["face","tired","sleepy","sad","frustrated","upset"],"k":[31,19],"o":2},"man-gesturing-ok":{"skin_variations":{"1F3FB":{"unified":"1F646-1F3FB-200D-2642-FE0F","non_qualified":"1F646-1F3FB-200D-2642","image":"1f646-1f3fb-200d-2642-fe0f.png","sheet_x":32,"sheet_y":15,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F646-1F3FC-200D-2642-FE0F","non_qualified":"1F646-1F3FC-200D-2642","image":"1f646-1f3fc-200d-2642-fe0f.png","sheet_x":32,"sheet_y":16,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F646-1F3FD-200D-2642-FE0F","non_qualified":"1F646-1F3FD-200D-2642","image":"1f646-1f3fd-200d-2642-fe0f.png","sheet_x":32,"sheet_y":17,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F646-1F3FE-200D-2642-FE0F","non_qualified":"1F646-1F3FE-200D-2642","image":"1f646-1f3fe-200d-2642-fe0f.png","sheet_x":32,"sheet_y":18,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F646-1F3FF-200D-2642-FE0F","non_qualified":"1F646-1F3FF-200D-2642","image":"1f646-1f3ff-200d-2642-fe0f.png","sheet_x":32,"sheet_y":19,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Gesturing Ok","b":"1F646-200D-2642-FE0F","c":"1F646-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[32,14],"o":4},"arrow_down_small":{"a":"Down-Pointing Small Red Triangle","b":"1F53D","d":true,"e":true,"f":true,"h":true,"j":["blue-square","direction","bottom"],"k":[28,32],"o":2},"tired_face":{"a":"Tired Face","b":"1F62B","d":true,"e":true,"f":true,"h":true,"j":["sick","whine","upset","frustrated"],"k":[31,21],"o":2},"car":{"a":"Automobile","b":"1F697","d":true,"e":true,"f":true,"h":true,"k":[34,22],"n":["red_car"],"o":2},"icecream":{"a":"Soft Ice Cream","b":"1F366","d":true,"e":true,"f":true,"h":true,"j":["food","hot","dessert","summer"],"k":[7,5],"o":2},"cd":{"a":"Optical Disc","b":"1F4BF","d":true,"e":true,"f":true,"h":true,"j":["technology","dvd","disk","disc","90s"],"k":[26,21],"o":2},"whale":{"a":"Spouting Whale","b":"1F433","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","sea","ocean"],"k":[12,23],"o":2},"flag-fm":{"a":"Micronesia Flag","b":"1F1EB-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[1,51],"o":2},"oncoming_automobile":{"a":"Oncoming Automobile","b":"1F698","d":true,"e":true,"f":true,"h":true,"j":["car","vehicle","transportation"],"k":[34,23],"o":2},"arrow_double_down":{"a":"Black Down-Pointing Double Triangle","b":"23EC","d":true,"e":true,"f":true,"h":true,"j":["blue-square","direction","bottom"],"k":[52,29],"o":2},"woman-gesturing-ok":{"skin_variations":{"1F3FB":{"unified":"1F646-1F3FB-200D-2640-FE0F","non_qualified":"1F646-1F3FB-200D-2640","image":"1f646-1f3fb-200d-2640-fe0f.png","sheet_x":32,"sheet_y":9,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F646-1F3FC-200D-2640-FE0F","non_qualified":"1F646-1F3FC-200D-2640","image":"1f646-1f3fc-200d-2640-fe0f.png","sheet_x":32,"sheet_y":10,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F646-1F3FD-200D-2640-FE0F","non_qualified":"1F646-1F3FD-200D-2640","image":"1f646-1f3fd-200d-2640-fe0f.png","sheet_x":32,"sheet_y":11,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F646-1F3FE-200D-2640-FE0F","non_qualified":"1F646-1F3FE-200D-2640","image":"1f646-1f3fe-200d-2640-fe0f.png","sheet_x":32,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F646-1F3FF-200D-2640-FE0F","non_qualified":"1F646-1F3FF-200D-2640","image":"1f646-1f3ff-200d-2640-fe0f.png","sheet_x":32,"sheet_y":13,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F646","a":"Woman Gesturing Ok","b":"1F646-200D-2640-FE0F","c":"1F646-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[32,8],"o":4},"yawning_face":{"a":"Yawning Face","b":"1F971","d":true,"e":true,"f":true,"h":true,"k":[42,7],"o":12},"dvd":{"a":"Dvd","b":"1F4C0","d":true,"e":true,"f":true,"h":true,"j":["cd","disk","disc"],"k":[26,22],"o":2},"whale2":{"a":"Whale","b":"1F40B","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","sea","ocean"],"k":[11,39],"o":2},"flag-fo":{"a":"Faroe Islands Flag","b":"1F1EB-1F1F4","d":true,"e":true,"f":true,"h":true,"k":[1,52],"o":2},"shaved_ice":{"a":"Shaved Ice","b":"1F367","d":true,"e":true,"f":true,"h":true,"j":["hot","dessert","summer"],"k":[7,6],"o":2},"double_vertical_bar":{"a":"Double Vertical Bar","b":"23F8-FE0F","c":"23F8","d":true,"e":true,"f":true,"h":true,"k":[52,37],"o":2},"information_desk_person":{"skin_variations":{"1F3FB":{"unified":"1F481-1F3FB","non_qualified":null,"image":"1f481-1f3fb.png","sheet_x":24,"sheet_y":3,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F481-1F3FC","non_qualified":null,"image":"1f481-1f3fc.png","sheet_x":24,"sheet_y":4,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F481-1F3FD","non_qualified":null,"image":"1f481-1f3fd.png","sheet_x":24,"sheet_y":5,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F481-1F3FE","non_qualified":null,"image":"1f481-1f3fe.png","sheet_x":24,"sheet_y":6,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F481-1F3FF","non_qualified":null,"image":"1f481-1f3ff.png","sheet_x":24,"sheet_y":7,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F481-200D-2640-FE0F","a":"Information Desk Person","b":"1F481","d":true,"e":true,"f":true,"h":false,"k":[24,2],"o":2},"dolphin":{"a":"Dolphin","b":"1F42C","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","fish","sea","ocean","flipper","fins","beach"],"k":[12,16],"n":["flipper"],"o":2},"blue_car":{"a":"Recreational Vehicle","b":"1F699","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle"],"k":[34,24],"o":2},"ice_cream":{"a":"Ice Cream","b":"1F368","d":true,"e":true,"f":true,"h":true,"j":["food","hot","dessert"],"k":[7,7],"o":2},"fr":{"a":"France Flag","b":"1F1EB-1F1F7","d":true,"e":true,"f":true,"h":true,"j":["banner","flag","nation","france","french","country"],"k":[1,53],"n":["flag-fr"],"o":2},"triumph":{"a":"Face with Look of Triumph","b":"1F624","d":true,"e":true,"f":true,"h":true,"j":["face","gas","phew","proud","pride"],"k":[31,14],"o":2},"abacus":{"a":"Abacus","b":"1F9EE","d":true,"e":true,"f":true,"h":true,"k":[51,33],"o":11},"man-tipping-hand":{"skin_variations":{"1F3FB":{"unified":"1F481-1F3FB-200D-2642-FE0F","non_qualified":"1F481-1F3FB-200D-2642","image":"1f481-1f3fb-200d-2642-fe0f.png","sheet_x":23,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F481-1F3FC-200D-2642-FE0F","non_qualified":"1F481-1F3FC-200D-2642","image":"1f481-1f3fc-200d-2642-fe0f.png","sheet_x":23,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F481-1F3FD-200D-2642-FE0F","non_qualified":"1F481-1F3FD-200D-2642","image":"1f481-1f3fd-200d-2642-fe0f.png","sheet_x":23,"sheet_y":56,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F481-1F3FE-200D-2642-FE0F","non_qualified":"1F481-1F3FE-200D-2642","image":"1f481-1f3fe-200d-2642-fe0f.png","sheet_x":24,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F481-1F3FF-200D-2642-FE0F","non_qualified":"1F481-1F3FF-200D-2642","image":"1f481-1f3ff-200d-2642-fe0f.png","sheet_x":24,"sheet_y":1,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Tipping Hand","b":"1F481-200D-2642-FE0F","c":"1F481-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[23,53],"o":4},"doughnut":{"a":"Doughnut","b":"1F369","d":true,"e":true,"f":true,"h":true,"j":["food","dessert","snack","sweet","donut"],"k":[7,8],"o":2},"fish":{"a":"Fish","b":"1F41F","d":true,"e":true,"f":true,"h":true,"j":["animal","food","nature"],"k":[12,3],"o":2},"truck":{"a":"Delivery Truck","b":"1F69A","d":true,"e":true,"f":true,"h":true,"j":["cars","transportation"],"k":[34,25],"o":2},"movie_camera":{"a":"Movie Camera","b":"1F3A5","d":true,"e":true,"f":true,"h":true,"j":["film","record"],"k":[8,11],"o":2},"flag-ga":{"a":"Gabon Flag","b":"1F1EC-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[1,54],"o":2},"rage":{"a":"Pouting Face","b":"1F621","d":true,"e":true,"f":true,"h":true,"j":["angry","mad","hate","despise"],"k":[31,11],"o":2},"black_square_for_stop":{"a":"Black Square for Stop","b":"23F9-FE0F","c":"23F9","d":true,"e":true,"f":true,"h":true,"k":[52,38],"o":2},"articulated_lorry":{"a":"Articulated Lorry","b":"1F69B","d":true,"e":true,"f":true,"h":true,"j":["vehicle","cars","transportation","express"],"k":[34,26],"o":2},"angry":{"a":"Angry Face","b":"1F620","d":true,"e":true,"f":true,"h":true,"j":["mad","face","annoyed","frustrated"],"k":[31,10],"l":[">:(",">:-("],"o":2},"cookie":{"a":"Cookie","b":"1F36A","d":true,"e":true,"f":true,"h":true,"j":["food","snack","oreo","chocolate","sweet","dessert"],"k":[7,9],"o":2},"gb":{"a":"United Kingdom Flag","b":"1F1EC-1F1E7","d":true,"e":true,"f":true,"h":true,"k":[1,55],"n":["uk","flag-gb"],"o":2},"tropical_fish":{"a":"Tropical Fish","b":"1F420","d":true,"e":true,"f":true,"h":true,"j":["animal","swim","ocean","beach","nemo"],"k":[12,4],"o":2},"woman-tipping-hand":{"skin_variations":{"1F3FB":{"unified":"1F481-1F3FB-200D-2640-FE0F","non_qualified":"1F481-1F3FB-200D-2640","image":"1f481-1f3fb-200d-2640-fe0f.png","sheet_x":23,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F481-1F3FC-200D-2640-FE0F","non_qualified":"1F481-1F3FC-200D-2640","image":"1f481-1f3fc-200d-2640-fe0f.png","sheet_x":23,"sheet_y":49,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F481-1F3FD-200D-2640-FE0F","non_qualified":"1F481-1F3FD-200D-2640","image":"1f481-1f3fd-200d-2640-fe0f.png","sheet_x":23,"sheet_y":50,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F481-1F3FE-200D-2640-FE0F","non_qualified":"1F481-1F3FE-200D-2640","image":"1f481-1f3fe-200d-2640-fe0f.png","sheet_x":23,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F481-1F3FF-200D-2640-FE0F","non_qualified":"1F481-1F3FF-200D-2640","image":"1f481-1f3ff-200d-2640-fe0f.png","sheet_x":23,"sheet_y":52,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F481","a":"Woman Tipping Hand","b":"1F481-200D-2640-FE0F","c":"1F481-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[23,47],"o":4},"black_circle_for_record":{"a":"Black Circle for Record","b":"23FA-FE0F","c":"23FA","d":true,"e":true,"f":true,"h":true,"k":[52,39],"o":2},"film_frames":{"a":"Film Frames","b":"1F39E-FE0F","c":"1F39E","d":true,"e":true,"f":true,"h":true,"k":[8,4],"o":2},"film_projector":{"a":"Film Projector","b":"1F4FD-FE0F","c":"1F4FD","d":true,"e":true,"f":true,"h":true,"j":["video","tape","record","movie"],"k":[27,26],"o":2},"flag-gd":{"a":"Grenada Flag","b":"1F1EC-1F1E9","d":true,"e":true,"f":true,"h":true,"k":[1,56],"o":2},"blowfish":{"a":"Blowfish","b":"1F421","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","food","sea","ocean"],"k":[12,5],"o":2},"face_with_symbols_on_mouth":{"a":"Serious Face with Symbols Covering Mouth","b":"1F92C","d":true,"e":true,"f":true,"h":true,"k":[38,46],"n":["serious_face_with_symbols_covering_mouth"],"o":5},"birthday":{"a":"Birthday Cake","b":"1F382","d":true,"e":true,"f":true,"h":true,"j":["food","dessert","cake"],"k":[7,33],"o":2},"eject":{"a":"Eject","b":"23CF-FE0F","c":"23CF","d":true,"e":true,"f":true,"h":true,"k":[52,25],"o":2},"raising_hand":{"skin_variations":{"1F3FB":{"unified":"1F64B-1F3FB","non_qualified":null,"image":"1f64b-1f3fb.png","sheet_x":33,"sheet_y":3,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F64B-1F3FC","non_qualified":null,"image":"1f64b-1f3fc.png","sheet_x":33,"sheet_y":4,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F64B-1F3FD","non_qualified":null,"image":"1f64b-1f3fd.png","sheet_x":33,"sheet_y":5,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F64B-1F3FE","non_qualified":null,"image":"1f64b-1f3fe.png","sheet_x":33,"sheet_y":6,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F64B-1F3FF","non_qualified":null,"image":"1f64b-1f3ff.png","sheet_x":33,"sheet_y":7,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F64B-200D-2640-FE0F","a":"Happy Person Raising One Hand","b":"1F64B","d":true,"e":true,"f":true,"h":false,"k":[33,2],"o":2},"tractor":{"a":"Tractor","b":"1F69C","d":true,"e":true,"f":true,"h":true,"j":["vehicle","car","farming","agriculture"],"k":[34,27],"o":2},"flag-ge":{"a":"Georgia Flag","b":"1F1EC-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[2,0],"o":2},"smiling_imp":{"a":"Smiling Face with Horns","b":"1F608","d":true,"e":true,"f":true,"h":true,"j":["devil","horns"],"k":[30,43],"o":2},"racing_car":{"a":"Racing Car","b":"1F3CE-FE0F","c":"1F3CE","d":true,"e":true,"f":true,"h":true,"j":["sports","race","fast","formula","f1"],"k":[10,33],"o":2},"cinema":{"a":"Cinema","b":"1F3A6","d":true,"e":true,"f":true,"h":true,"j":["blue-square","record","film","movie","curtain","stage","theater"],"k":[8,12],"o":2},"clapper":{"a":"Clapper Board","b":"1F3AC","d":true,"e":true,"f":true,"h":true,"j":["movie","film","record"],"k":[8,18],"o":2},"shark":{"a":"Shark","b":"1F988","d":true,"e":true,"f":true,"h":true,"j":["animal","nature","fish","sea","ocean","jaws","fins","beach"],"k":[42,26],"o":4},"cake":{"a":"Shortcake","b":"1F370","d":true,"e":true,"f":true,"h":true,"j":["food","dessert"],"k":[7,15],"o":2},"man-raising-hand":{"skin_variations":{"1F3FB":{"unified":"1F64B-1F3FB-200D-2642-FE0F","non_qualified":"1F64B-1F3FB-200D-2642","image":"1f64b-1f3fb-200d-2642-fe0f.png","sheet_x":32,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F64B-1F3FC-200D-2642-FE0F","non_qualified":"1F64B-1F3FC-200D-2642","image":"1f64b-1f3fc-200d-2642-fe0f.png","sheet_x":32,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F64B-1F3FD-200D-2642-FE0F","non_qualified":"1F64B-1F3FD-200D-2642","image":"1f64b-1f3fd-200d-2642-fe0f.png","sheet_x":32,"sheet_y":56,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F64B-1F3FE-200D-2642-FE0F","non_qualified":"1F64B-1F3FE-200D-2642","image":"1f64b-1f3fe-200d-2642-fe0f.png","sheet_x":33,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F64B-1F3FF-200D-2642-FE0F","non_qualified":"1F64B-1F3FF-200D-2642","image":"1f64b-1f3ff-200d-2642-fe0f.png","sheet_x":33,"sheet_y":1,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Raising Hand","b":"1F64B-200D-2642-FE0F","c":"1F64B-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[32,53],"o":4},"octopus":{"a":"Octopus","b":"1F419","d":true,"e":true,"f":true,"h":true,"j":["animal","creature","ocean","sea","nature","beach"],"k":[11,54],"o":2},"woman-raising-hand":{"skin_variations":{"1F3FB":{"unified":"1F64B-1F3FB-200D-2640-FE0F","non_qualified":"1F64B-1F3FB-200D-2640","image":"1f64b-1f3fb-200d-2640-fe0f.png","sheet_x":32,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F64B-1F3FC-200D-2640-FE0F","non_qualified":"1F64B-1F3FC-200D-2640","image":"1f64b-1f3fc-200d-2640-fe0f.png","sheet_x":32,"sheet_y":49,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F64B-1F3FD-200D-2640-FE0F","non_qualified":"1F64B-1F3FD-200D-2640","image":"1f64b-1f3fd-200d-2640-fe0f.png","sheet_x":32,"sheet_y":50,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F64B-1F3FE-200D-2640-FE0F","non_qualified":"1F64B-1F3FE-200D-2640","image":"1f64b-1f3fe-200d-2640-fe0f.png","sheet_x":32,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F64B-1F3FF-200D-2640-FE0F","non_qualified":"1F64B-1F3FF-200D-2640","image":"1f64b-1f3ff-200d-2640-fe0f.png","sheet_x":32,"sheet_y":52,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F64B","a":"Woman Raising Hand","b":"1F64B-200D-2640-FE0F","c":"1F64B-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[32,47],"o":4},"flag-gf":{"a":"French Guiana Flag","b":"1F1EC-1F1EB","d":true,"e":true,"f":true,"h":true,"k":[2,1],"o":2},"tv":{"a":"Television","b":"1F4FA","d":true,"e":true,"f":true,"h":true,"j":["technology","program","oldschool","show","television"],"k":[27,23],"o":2},"imp":{"a":"Imp","b":"1F47F","d":true,"e":true,"f":true,"h":true,"j":["devil","angry","horns"],"k":[23,45],"o":2},"cupcake":{"a":"Cupcake","b":"1F9C1","d":true,"e":true,"f":true,"h":true,"k":[44,9],"o":11},"racing_motorcycle":{"a":"Racing Motorcycle","b":"1F3CD-FE0F","c":"1F3CD","d":true,"e":true,"f":true,"h":true,"k":[10,32],"o":2},"low_brightness":{"a":"Low Brightness Symbol","b":"1F505","d":true,"e":true,"f":true,"h":true,"j":["sun","afternoon","warm","summer"],"k":[27,33],"o":2},"shell":{"a":"Spiral Shell","b":"1F41A","d":true,"e":true,"f":true,"h":true,"j":["nature","sea","beach"],"k":[11,55],"o":2},"flag-gg":{"a":"Guernsey Flag","b":"1F1EC-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[2,2],"o":2},"high_brightness":{"a":"High Brightness Symbol","b":"1F506","d":true,"e":true,"f":true,"h":true,"j":["sun","light"],"k":[27,34],"o":2},"deaf_person":{"skin_variations":{"1F3FB":{"unified":"1F9CF-1F3FB","non_qualified":null,"image":"1f9cf-1f3fb.png","sheet_x":45,"sheet_y":11,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9CF-1F3FC","non_qualified":null,"image":"1f9cf-1f3fc.png","sheet_x":45,"sheet_y":12,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9CF-1F3FD","non_qualified":null,"image":"1f9cf-1f3fd.png","sheet_x":45,"sheet_y":13,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9CF-1F3FE","non_qualified":null,"image":"1f9cf-1f3fe.png","sheet_x":45,"sheet_y":14,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9CF-1F3FF","non_qualified":null,"image":"1f9cf-1f3ff.png","sheet_x":45,"sheet_y":15,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Deaf Person","b":"1F9CF","d":true,"e":true,"f":true,"h":true,"k":[45,10],"o":12},"skull":{"a":"Skull","b":"1F480","d":true,"e":true,"f":true,"h":true,"j":["dead","skeleton","creepy","death"],"k":[23,46],"o":2},"motor_scooter":{"a":"Motor Scooter","b":"1F6F5","d":true,"e":true,"f":true,"h":true,"j":["vehicle","vespa","sasha"],"k":[36,54],"o":4},"camera":{"a":"Camera","b":"1F4F7","d":true,"e":true,"f":true,"h":true,"j":["gadgets","photography"],"k":[27,20],"o":2},"pie":{"a":"Pie","b":"1F967","d":true,"e":true,"f":true,"h":true,"k":[41,54],"o":5},"flag-gh":{"a":"Ghana Flag","b":"1F1EC-1F1ED","d":true,"e":true,"f":true,"h":true,"k":[2,3],"o":2},"deaf_man":{"skin_variations":{"1F3FB":{"unified":"1F9CF-1F3FB-200D-2642-FE0F","non_qualified":"1F9CF-1F3FB-200D-2642","image":"1f9cf-1f3fb-200d-2642-fe0f.png","sheet_x":45,"sheet_y":5,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9CF-1F3FC-200D-2642-FE0F","non_qualified":"1F9CF-1F3FC-200D-2642","image":"1f9cf-1f3fc-200d-2642-fe0f.png","sheet_x":45,"sheet_y":6,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9CF-1F3FD-200D-2642-FE0F","non_qualified":"1F9CF-1F3FD-200D-2642","image":"1f9cf-1f3fd-200d-2642-fe0f.png","sheet_x":45,"sheet_y":7,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9CF-1F3FE-200D-2642-FE0F","non_qualified":"1F9CF-1F3FE-200D-2642","image":"1f9cf-1f3fe-200d-2642-fe0f.png","sheet_x":45,"sheet_y":8,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9CF-1F3FF-200D-2642-FE0F","non_qualified":"1F9CF-1F3FF-200D-2642","image":"1f9cf-1f3ff-200d-2642-fe0f.png","sheet_x":45,"sheet_y":9,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Deaf Man","b":"1F9CF-200D-2642-FE0F","c":"1F9CF-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[45,4],"o":12},"skull_and_crossbones":{"a":"Skull and Crossbones","b":"2620-FE0F","c":"2620","d":true,"e":true,"f":true,"h":true,"j":["poison","danger","deadly","scary","death","pirate","evil"],"k":[53,8],"o":2},"camera_with_flash":{"a":"Camera with Flash","b":"1F4F8","d":true,"e":true,"f":true,"h":true,"k":[27,21],"o":2},"signal_strength":{"a":"Antenna with Bars","b":"1F4F6","d":true,"e":true,"f":true,"h":true,"j":["blue-square","reception","phone","internet","connection","wifi","bluetooth","bars"],"k":[27,19],"o":2},"chocolate_bar":{"a":"Chocolate Bar","b":"1F36B","d":true,"e":true,"f":true,"h":true,"j":["food","snack","dessert","sweet"],"k":[7,10],"o":2},"manual_wheelchair":{"a":"Manual Wheelchair","b":"1F9BD","d":true,"e":true,"f":true,"h":true,"k":[44,5],"o":12},"snail":{"a":"Snail","b":"1F40C","d":true,"e":true,"f":true,"h":true,"j":["slow","animal","shell"],"k":[11,40],"o":2},"motorized_wheelchair":{"a":"Motorized Wheelchair","b":"1F9BC","d":true,"e":true,"f":true,"h":true,"k":[44,4],"o":12},"flag-gi":{"a":"Gibraltar Flag","b":"1F1EC-1F1EE","d":true,"e":true,"f":true,"h":true,"k":[2,4],"o":2},"hankey":{"a":"Pile of Poo","b":"1F4A9","d":true,"e":true,"f":true,"h":true,"k":[25,51],"n":["poop","shit"],"o":2},"vibration_mode":{"a":"Vibration Mode","b":"1F4F3","d":true,"e":true,"f":true,"h":true,"j":["orange-square","phone"],"k":[27,16],"o":2},"deaf_woman":{"skin_variations":{"1F3FB":{"unified":"1F9CF-1F3FB-200D-2640-FE0F","non_qualified":"1F9CF-1F3FB-200D-2640","image":"1f9cf-1f3fb-200d-2640-fe0f.png","sheet_x":44,"sheet_y":56,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9CF-1F3FC-200D-2640-FE0F","non_qualified":"1F9CF-1F3FC-200D-2640","image":"1f9cf-1f3fc-200d-2640-fe0f.png","sheet_x":45,"sheet_y":0,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9CF-1F3FD-200D-2640-FE0F","non_qualified":"1F9CF-1F3FD-200D-2640","image":"1f9cf-1f3fd-200d-2640-fe0f.png","sheet_x":45,"sheet_y":1,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9CF-1F3FE-200D-2640-FE0F","non_qualified":"1F9CF-1F3FE-200D-2640","image":"1f9cf-1f3fe-200d-2640-fe0f.png","sheet_x":45,"sheet_y":2,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9CF-1F3FF-200D-2640-FE0F","non_qualified":"1F9CF-1F3FF-200D-2640","image":"1f9cf-1f3ff-200d-2640-fe0f.png","sheet_x":45,"sheet_y":3,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Deaf Woman","b":"1F9CF-200D-2640-FE0F","c":"1F9CF-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[44,55],"o":12},"butterfly":{"a":"Butterfly","b":"1F98B","d":true,"e":true,"f":true,"h":true,"j":["animal","insect","nature","caterpillar"],"k":[42,29],"o":4},"video_camera":{"a":"Video Camera","b":"1F4F9","d":true,"e":true,"f":true,"h":true,"j":["film","record"],"k":[27,22],"o":2},"candy":{"a":"Candy","b":"1F36C","d":true,"e":true,"f":true,"h":true,"j":["snack","dessert","sweet","lolly"],"k":[7,11],"o":2},"auto_rickshaw":{"a":"Auto Rickshaw","b":"1F6FA","d":true,"e":true,"f":true,"h":true,"k":[37,2],"o":12},"bow":{"skin_variations":{"1F3FB":{"unified":"1F647-1F3FB","non_qualified":null,"image":"1f647-1f3fb.png","sheet_x":32,"sheet_y":39,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F647-1F3FC","non_qualified":null,"image":"1f647-1f3fc.png","sheet_x":32,"sheet_y":40,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F647-1F3FD","non_qualified":null,"image":"1f647-1f3fd.png","sheet_x":32,"sheet_y":41,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F647-1F3FE","non_qualified":null,"image":"1f647-1f3fe.png","sheet_x":32,"sheet_y":42,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F647-1F3FF","non_qualified":null,"image":"1f647-1f3ff.png","sheet_x":32,"sheet_y":43,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F647-200D-2642-FE0F","a":"Person Bowing Deeply","b":"1F647","d":true,"e":true,"f":true,"h":false,"k":[32,38],"o":2},"mobile_phone_off":{"a":"Mobile Phone off","b":"1F4F4","d":true,"e":true,"f":true,"h":true,"j":["mute","orange-square","silence","quiet"],"k":[27,17],"o":2},"clown_face":{"a":"Clown Face","b":"1F921","d":true,"e":true,"f":true,"h":true,"j":["face"],"k":[38,18],"o":4},"lollipop":{"a":"Lollipop","b":"1F36D","d":true,"e":true,"f":true,"h":true,"j":["food","snack","candy","sweet"],"k":[7,12],"o":2},"flag-gl":{"a":"Greenland Flag","b":"1F1EC-1F1F1","d":true,"e":true,"f":true,"h":true,"k":[2,5],"o":2},"vhs":{"a":"Videocassette","b":"1F4FC","d":true,"e":true,"f":true,"h":true,"j":["record","video","oldschool","90s","80s"],"k":[27,25],"o":2},"bug":{"a":"Bug","b":"1F41B","d":true,"e":true,"f":true,"h":true,"j":["animal","insect","nature","worm"],"k":[11,56],"o":2},"bike":{"a":"Bicycle","b":"1F6B2","d":true,"e":true,"f":true,"h":true,"j":["sports","bicycle","exercise","hipster"],"k":[35,9],"o":2},"man-bowing":{"skin_variations":{"1F3FB":{"unified":"1F647-1F3FB-200D-2642-FE0F","non_qualified":"1F647-1F3FB-200D-2642","image":"1f647-1f3fb-200d-2642-fe0f.png","sheet_x":32,"sheet_y":33,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F647-1F3FC-200D-2642-FE0F","non_qualified":"1F647-1F3FC-200D-2642","image":"1f647-1f3fc-200d-2642-fe0f.png","sheet_x":32,"sheet_y":34,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F647-1F3FD-200D-2642-FE0F","non_qualified":"1F647-1F3FD-200D-2642","image":"1f647-1f3fd-200d-2642-fe0f.png","sheet_x":32,"sheet_y":35,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F647-1F3FE-200D-2642-FE0F","non_qualified":"1F647-1F3FE-200D-2642","image":"1f647-1f3fe-200d-2642-fe0f.png","sheet_x":32,"sheet_y":36,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F647-1F3FF-200D-2642-FE0F","non_qualified":"1F647-1F3FF-200D-2642","image":"1f647-1f3ff-200d-2642-fe0f.png","sheet_x":32,"sheet_y":37,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F647","a":"Man Bowing","b":"1F647-200D-2642-FE0F","c":"1F647-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[32,32],"o":4},"female_sign":{"a":"Female Sign","b":"2640-FE0F","c":"2640","d":false,"e":true,"f":true,"h":true,"k":[53,18],"o":4},"japanese_ogre":{"a":"Japanese Ogre","b":"1F479","d":true,"e":true,"f":true,"h":true,"j":["monster","red","mask","halloween","scary","creepy","devil","demon","japanese","ogre"],"k":[23,34],"o":2},"custard":{"a":"Custard","b":"1F36E","d":true,"e":true,"f":true,"h":true,"j":["dessert","food"],"k":[7,13],"o":2},"ant":{"a":"Ant","b":"1F41C","d":true,"e":true,"f":true,"h":true,"j":["animal","insect","nature","bug"],"k":[12,0],"o":2},"mag":{"a":"Left-Pointing Magnifying Glass","b":"1F50D","d":true,"e":true,"f":true,"h":true,"j":["search","zoom","find","detective"],"k":[27,41],"o":2},"flag-gm":{"a":"Gambia Flag","b":"1F1EC-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[2,6],"o":2},"honey_pot":{"a":"Honey Pot","b":"1F36F","d":true,"e":true,"f":true,"h":true,"j":["bees","sweet","kitchen"],"k":[7,14],"o":2},"woman-bowing":{"skin_variations":{"1F3FB":{"unified":"1F647-1F3FB-200D-2640-FE0F","non_qualified":"1F647-1F3FB-200D-2640","image":"1f647-1f3fb-200d-2640-fe0f.png","sheet_x":32,"sheet_y":27,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F647-1F3FC-200D-2640-FE0F","non_qualified":"1F647-1F3FC-200D-2640","image":"1f647-1f3fc-200d-2640-fe0f.png","sheet_x":32,"sheet_y":28,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F647-1F3FD-200D-2640-FE0F","non_qualified":"1F647-1F3FD-200D-2640","image":"1f647-1f3fd-200d-2640-fe0f.png","sheet_x":32,"sheet_y":29,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F647-1F3FE-200D-2640-FE0F","non_qualified":"1F647-1F3FE-200D-2640","image":"1f647-1f3fe-200d-2640-fe0f.png","sheet_x":32,"sheet_y":30,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F647-1F3FF-200D-2640-FE0F","non_qualified":"1F647-1F3FF-200D-2640","image":"1f647-1f3ff-200d-2640-fe0f.png","sheet_x":32,"sheet_y":31,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Bowing","b":"1F647-200D-2640-FE0F","c":"1F647-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[32,26],"o":4},"male_sign":{"a":"Male Sign","b":"2642-FE0F","c":"2642","d":false,"e":true,"f":true,"h":true,"k":[53,19],"o":4},"mag_right":{"a":"Right-Pointing Magnifying Glass","b":"1F50E","d":true,"e":true,"f":true,"h":true,"j":["search","zoom","find","detective"],"k":[27,42],"o":2},"japanese_goblin":{"a":"Japanese Goblin","b":"1F47A","d":true,"e":true,"f":true,"h":true,"j":["red","evil","mask","monster","scary","creepy","japanese","goblin"],"k":[23,35],"o":2},"scooter":{"a":"Scooter","b":"1F6F4","d":true,"e":true,"f":true,"h":true,"k":[36,53],"o":4},"bee":{"a":"Honeybee","b":"1F41D","d":true,"e":true,"f":true,"h":true,"k":[12,1],"n":["honeybee"],"o":2},"flag-gn":{"a":"Guinea Flag","b":"1F1EC-1F1F3","d":true,"e":true,"f":true,"h":true,"k":[2,7],"o":2},"candle":{"a":"Candle","b":"1F56F-FE0F","c":"1F56F","d":true,"e":true,"f":true,"h":true,"j":["fire","wax"],"k":[29,6],"o":2},"skateboard":{"a":"Skateboard","b":"1F6F9","d":true,"e":true,"f":true,"h":true,"k":[37,1],"o":11},"medical_symbol":{"a":"Medical Symbol","b":"2695-FE0F","c":"2695","d":false,"e":true,"f":true,"h":true,"k":[53,44],"n":["staff_of_aesculapius"],"o":4},"ghost":{"a":"Ghost","b":"1F47B","d":true,"e":true,"f":true,"h":true,"j":["halloween","spooky","scary"],"k":[23,36],"o":2},"beetle":{"a":"Lady Beetle","b":"1F41E","d":true,"e":true,"f":true,"h":true,"j":["animal","insect","nature","ladybug"],"k":[12,2],"o":2},"face_palm":{"skin_variations":{"1F3FB":{"unified":"1F926-1F3FB","non_qualified":null,"image":"1f926-1f3fb.png","sheet_x":38,"sheet_y":36,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F926-1F3FC","non_qualified":null,"image":"1f926-1f3fc.png","sheet_x":38,"sheet_y":37,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F926-1F3FD","non_qualified":null,"image":"1f926-1f3fd.png","sheet_x":38,"sheet_y":38,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F926-1F3FE","non_qualified":null,"image":"1f926-1f3fe.png","sheet_x":38,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F926-1F3FF","non_qualified":null,"image":"1f926-1f3ff.png","sheet_x":38,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"a":"Face Palm","b":"1F926","d":true,"e":true,"f":true,"h":false,"k":[38,35],"o":4},"flag-gp":{"a":"Guadeloupe Flag","b":"1F1EC-1F1F5","d":true,"e":true,"f":true,"h":true,"k":[2,8],"o":2},"baby_bottle":{"a":"Baby Bottle","b":"1F37C","d":true,"e":true,"f":true,"h":true,"j":["food","container","milk"],"k":[7,27],"o":2},"infinity":{"a":"Infinity","b":"267E-FE0F","c":"267E","d":true,"e":true,"f":true,"h":true,"k":[53,39],"o":11},"glass_of_milk":{"a":"Glass of Milk","b":"1F95B","d":true,"e":true,"f":true,"h":true,"k":[41,42],"o":4},"man-facepalming":{"skin_variations":{"1F3FB":{"unified":"1F926-1F3FB-200D-2642-FE0F","non_qualified":"1F926-1F3FB-200D-2642","image":"1f926-1f3fb-200d-2642-fe0f.png","sheet_x":38,"sheet_y":30,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F926-1F3FC-200D-2642-FE0F","non_qualified":"1F926-1F3FC-200D-2642","image":"1f926-1f3fc-200d-2642-fe0f.png","sheet_x":38,"sheet_y":31,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F926-1F3FD-200D-2642-FE0F","non_qualified":"1F926-1F3FD-200D-2642","image":"1f926-1f3fd-200d-2642-fe0f.png","sheet_x":38,"sheet_y":32,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F926-1F3FE-200D-2642-FE0F","non_qualified":"1F926-1F3FE-200D-2642","image":"1f926-1f3fe-200d-2642-fe0f.png","sheet_x":38,"sheet_y":33,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F926-1F3FF-200D-2642-FE0F","non_qualified":"1F926-1F3FF-200D-2642","image":"1f926-1f3ff-200d-2642-fe0f.png","sheet_x":38,"sheet_y":34,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Facepalming","b":"1F926-200D-2642-FE0F","c":"1F926-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[38,29],"o":4},"cricket":{"a":"Cricket","b":"1F997","d":true,"e":true,"f":true,"h":true,"j":["sports"],"k":[42,41],"o":5},"busstop":{"a":"Bus Stop","b":"1F68F","d":true,"e":true,"f":true,"h":true,"j":["transportation","wait"],"k":[34,14],"o":2},"flag-gq":{"a":"Equatorial Guinea Flag","b":"1F1EC-1F1F6","d":true,"e":true,"f":true,"h":true,"k":[2,9],"o":2},"alien":{"a":"Extraterrestrial Alien","b":"1F47D","d":true,"e":true,"f":true,"h":true,"j":["UFO","paul","weird","outer_space"],"k":[23,43],"o":2},"bulb":{"a":"Electric Light Bulb","b":"1F4A1","d":true,"e":true,"f":true,"h":true,"j":["light","electricity","idea"],"k":[25,43],"o":2},"woman-facepalming":{"skin_variations":{"1F3FB":{"unified":"1F926-1F3FB-200D-2640-FE0F","non_qualified":"1F926-1F3FB-200D-2640","image":"1f926-1f3fb-200d-2640-fe0f.png","sheet_x":38,"sheet_y":24,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F926-1F3FC-200D-2640-FE0F","non_qualified":"1F926-1F3FC-200D-2640","image":"1f926-1f3fc-200d-2640-fe0f.png","sheet_x":38,"sheet_y":25,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F926-1F3FD-200D-2640-FE0F","non_qualified":"1F926-1F3FD-200D-2640","image":"1f926-1f3fd-200d-2640-fe0f.png","sheet_x":38,"sheet_y":26,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F926-1F3FE-200D-2640-FE0F","non_qualified":"1F926-1F3FE-200D-2640","image":"1f926-1f3fe-200d-2640-fe0f.png","sheet_x":38,"sheet_y":27,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F926-1F3FF-200D-2640-FE0F","non_qualified":"1F926-1F3FF-200D-2640","image":"1f926-1f3ff-200d-2640-fe0f.png","sheet_x":38,"sheet_y":28,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Facepalming","b":"1F926-200D-2640-FE0F","c":"1F926-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[38,23],"o":4},"spider":{"a":"Spider","b":"1F577-FE0F","c":"1F577","d":true,"e":true,"f":true,"h":true,"j":["animal","arachnid"],"k":[29,34],"o":2},"space_invader":{"a":"Alien Monster","b":"1F47E","d":true,"e":true,"f":true,"h":true,"j":["game","arcade","play"],"k":[23,44],"o":2},"motorway":{"a":"Motorway","b":"1F6E3-FE0F","c":"1F6E3","d":true,"e":true,"f":true,"h":true,"j":["road","cupertino","interstate","highway"],"k":[36,45],"o":2},"flag-gr":{"a":"Greece Flag","b":"1F1EC-1F1F7","d":true,"e":true,"f":true,"h":true,"k":[2,10],"o":2},"recycle":{"a":"Black Universal Recycling Symbol","b":"267B-FE0F","c":"267B","d":true,"e":true,"f":true,"h":true,"j":["arrow","environment","garbage","trash"],"k":[53,38],"o":2},"coffee":{"a":"Hot Beverage","b":"2615","d":true,"e":true,"f":true,"h":true,"j":["beverage","caffeine","latte","espresso"],"k":[53,0],"o":2},"flashlight":{"a":"Electric Torch","b":"1F526","d":true,"e":true,"f":true,"h":true,"j":["dark","camping","sight","night"],"k":[28,9],"o":2},"spider_web":{"a":"Spider Web","b":"1F578-FE0F","c":"1F578","d":true,"e":true,"f":true,"h":true,"j":["animal","insect","arachnid","silk"],"k":[29,35],"o":2},"izakaya_lantern":{"a":"Izakaya Lantern","b":"1F3EE","d":true,"e":true,"f":true,"h":true,"j":["light","paper","halloween","spooky"],"k":[11,8],"n":["lantern"],"o":2},"flag-gs":{"a":"South Georgia & South Sandwich Islands Flag","b":"1F1EC-1F1F8","d":true,"e":true,"f":true,"h":true,"k":[2,11],"o":2},"shrug":{"skin_variations":{"1F3FB":{"unified":"1F937-1F3FB","non_qualified":null,"image":"1f937-1f3fb.png","sheet_x":39,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F937-1F3FC","non_qualified":null,"image":"1f937-1f3fc.png","sheet_x":39,"sheet_y":49,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F937-1F3FD","non_qualified":null,"image":"1f937-1f3fd.png","sheet_x":39,"sheet_y":50,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F937-1F3FE","non_qualified":null,"image":"1f937-1f3fe.png","sheet_x":39,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F937-1F3FF","non_qualified":null,"image":"1f937-1f3ff.png","sheet_x":39,"sheet_y":52,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"a":"Shrug","b":"1F937","d":true,"e":true,"f":true,"h":false,"k":[39,47],"o":4},"fleur_de_lis":{"a":"Fleur De Lis","b":"269C-FE0F","c":"269C","d":true,"e":true,"f":true,"h":true,"j":["decorative","scout"],"k":[53,49],"o":2},"robot_face":{"a":"Robot Face","b":"1F916","d":true,"e":true,"f":true,"h":true,"k":[37,29],"o":2},"railway_track":{"a":"Railway Track","b":"1F6E4-FE0F","c":"1F6E4","d":true,"e":true,"f":true,"h":true,"j":["train","transportation"],"k":[36,46],"o":2},"tea":{"a":"Teacup Without Handle","b":"1F375","d":true,"e":true,"f":true,"h":true,"j":["drink","bowl","breakfast","green","british"],"k":[7,20],"o":2},"flag-gt":{"a":"Guatemala Flag","b":"1F1EC-1F1F9","d":true,"e":true,"f":true,"h":true,"k":[2,12],"o":2},"oil_drum":{"a":"Oil Drum","b":"1F6E2-FE0F","c":"1F6E2","d":true,"e":true,"f":true,"h":true,"j":["barrell"],"k":[36,44],"o":2},"diya_lamp":{"a":"Diya Lamp","b":"1FA94","d":true,"e":true,"f":true,"h":true,"k":[52,8],"o":12},"sake":{"a":"Sake Bottle and Cup","b":"1F376","d":true,"e":true,"f":true,"h":true,"j":["wine","drink","drunk","beverage","japanese","alcohol","booze"],"k":[7,21],"o":2},"trident":{"a":"Trident Emblem","b":"1F531","d":true,"e":true,"f":true,"h":true,"j":["weapon","spear"],"k":[28,20],"o":2},"man-shrugging":{"skin_variations":{"1F3FB":{"unified":"1F937-1F3FB-200D-2642-FE0F","non_qualified":"1F937-1F3FB-200D-2642","image":"1f937-1f3fb-200d-2642-fe0f.png","sheet_x":39,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F937-1F3FC-200D-2642-FE0F","non_qualified":"1F937-1F3FC-200D-2642","image":"1f937-1f3fc-200d-2642-fe0f.png","sheet_x":39,"sheet_y":43,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F937-1F3FD-200D-2642-FE0F","non_qualified":"1F937-1F3FD-200D-2642","image":"1f937-1f3fd-200d-2642-fe0f.png","sheet_x":39,"sheet_y":44,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F937-1F3FE-200D-2642-FE0F","non_qualified":"1F937-1F3FE-200D-2642","image":"1f937-1f3fe-200d-2642-fe0f.png","sheet_x":39,"sheet_y":45,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F937-1F3FF-200D-2642-FE0F","non_qualified":"1F937-1F3FF-200D-2642","image":"1f937-1f3ff-200d-2642-fe0f.png","sheet_x":39,"sheet_y":46,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Shrugging","b":"1F937-200D-2642-FE0F","c":"1F937-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[39,41],"o":4},"smiley_cat":{"a":"Smiling Cat Face with Open Mouth","b":"1F63A","d":true,"e":true,"f":true,"h":true,"j":["animal","cats","happy","smile"],"k":[31,36],"o":2},"scorpion":{"a":"Scorpion","b":"1F982","d":true,"e":true,"f":true,"h":true,"j":["animal","arachnid"],"k":[42,20],"o":2},"woman-shrugging":{"skin_variations":{"1F3FB":{"unified":"1F937-1F3FB-200D-2640-FE0F","non_qualified":"1F937-1F3FB-200D-2640","image":"1f937-1f3fb-200d-2640-fe0f.png","sheet_x":39,"sheet_y":36,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F937-1F3FC-200D-2640-FE0F","non_qualified":"1F937-1F3FC-200D-2640","image":"1f937-1f3fc-200d-2640-fe0f.png","sheet_x":39,"sheet_y":37,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F937-1F3FD-200D-2640-FE0F","non_qualified":"1F937-1F3FD-200D-2640","image":"1f937-1f3fd-200d-2640-fe0f.png","sheet_x":39,"sheet_y":38,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F937-1F3FE-200D-2640-FE0F","non_qualified":"1F937-1F3FE-200D-2640","image":"1f937-1f3fe-200d-2640-fe0f.png","sheet_x":39,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F937-1F3FF-200D-2640-FE0F","non_qualified":"1F937-1F3FF-200D-2640","image":"1f937-1f3ff-200d-2640-fe0f.png","sheet_x":39,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Shrugging","b":"1F937-200D-2640-FE0F","c":"1F937-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[39,35],"o":4},"notebook_with_decorative_cover":{"a":"Notebook with Decorative Cover","b":"1F4D4","d":true,"e":true,"f":true,"h":true,"j":["classroom","notes","record","paper","study"],"k":[26,42],"o":2},"fuelpump":{"a":"Fuel Pump","b":"26FD","d":true,"e":true,"f":true,"h":true,"j":["gas station","petroleum"],"k":[54,38],"o":2},"name_badge":{"a":"Name Badge","b":"1F4DB","d":true,"e":true,"f":true,"h":true,"j":["fire","forbid"],"k":[26,49],"o":2},"mosquito":{"a":"Mosquito","b":"1F99F","d":true,"e":true,"f":true,"h":true,"k":[42,49],"o":11},"flag-gu":{"a":"Guam Flag","b":"1F1EC-1F1FA","d":true,"e":true,"f":true,"h":true,"k":[2,13],"o":2},"smile_cat":{"a":"Grinning Cat Face with Smiling Eyes","b":"1F638","d":true,"e":true,"f":true,"h":true,"j":["animal","cats","smile"],"k":[31,34],"o":2},"champagne":{"a":"Bottle with Popping Cork","b":"1F37E","d":true,"e":true,"f":true,"h":true,"j":["drink","wine","bottle","celebration"],"k":[7,29],"o":2},"joy_cat":{"a":"Cat Face with Tears of Joy","b":"1F639","d":true,"e":true,"f":true,"h":true,"j":["animal","cats","haha","happy","tears"],"k":[31,35],"o":2},"closed_book":{"a":"Closed Book","b":"1F4D5","d":true,"e":true,"f":true,"h":true,"j":["read","library","knowledge","textbook","learn"],"k":[26,43],"o":2},"health_worker":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-2695-FE0F","non_qualified":"1F9D1-1F3FB-200D-2695","image":"1f9d1-1f3fb-200d-2695-fe0f.png","sheet_x":47,"sheet_y":50,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-2695-FE0F","non_qualified":"1F9D1-1F3FC-200D-2695","image":"1f9d1-1f3fc-200d-2695-fe0f.png","sheet_x":47,"sheet_y":51,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-2695-FE0F","non_qualified":"1F9D1-1F3FD-200D-2695","image":"1f9d1-1f3fd-200d-2695-fe0f.png","sheet_x":47,"sheet_y":52,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-2695-FE0F","non_qualified":"1F9D1-1F3FE-200D-2695","image":"1f9d1-1f3fe-200d-2695-fe0f.png","sheet_x":47,"sheet_y":53,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-2695-FE0F","non_qualified":"1F9D1-1F3FF-200D-2695","image":"1f9d1-1f3ff-200d-2695-fe0f.png","sheet_x":47,"sheet_y":54,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Health Worker","b":"1F9D1-200D-2695-FE0F","c":"1F9D1-200D-2695","d":true,"e":false,"f":false,"h":false,"k":[47,49],"o":12},"rotating_light":{"a":"Police Cars Revolving Light","b":"1F6A8","d":true,"e":true,"f":true,"h":true,"j":["police","ambulance","911","emergency","alert","error","pinged","law","legal"],"k":[34,56],"o":2},"microbe":{"a":"Microbe","b":"1F9A0","d":true,"e":true,"f":true,"h":true,"k":[42,50],"o":11},"flag-gw":{"a":"Guinea-Bissau Flag","b":"1F1EC-1F1FC","d":true,"e":true,"f":true,"h":true,"k":[2,14],"o":2},"wine_glass":{"a":"Wine Glass","b":"1F377","d":true,"e":true,"f":true,"h":true,"j":["drink","beverage","drunk","alcohol","booze"],"k":[7,22],"o":2},"beginner":{"a":"Japanese Symbol for Beginner","b":"1F530","d":true,"e":true,"f":true,"h":true,"j":["badge","shield"],"k":[28,19],"o":2},"bouquet":{"a":"Bouquet","b":"1F490","d":true,"e":true,"f":true,"h":true,"j":["flowers","nature","spring"],"k":[25,26],"o":2},"heart_eyes_cat":{"a":"Smiling Cat Face with Heart-Shaped Eyes","b":"1F63B","d":true,"e":true,"f":true,"h":true,"j":["animal","love","like","affection","cats","valentines","heart"],"k":[31,37],"o":2},"male-doctor":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-2695-FE0F","non_qualified":"1F468-1F3FB-200D-2695","image":"1f468-1f3fb-200d-2695-fe0f.png","sheet_x":17,"sheet_y":3,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-2695-FE0F","non_qualified":"1F468-1F3FC-200D-2695","image":"1f468-1f3fc-200d-2695-fe0f.png","sheet_x":17,"sheet_y":4,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-2695-FE0F","non_qualified":"1F468-1F3FD-200D-2695","image":"1f468-1f3fd-200d-2695-fe0f.png","sheet_x":17,"sheet_y":5,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-2695-FE0F","non_qualified":"1F468-1F3FE-200D-2695","image":"1f468-1f3fe-200d-2695-fe0f.png","sheet_x":17,"sheet_y":6,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-2695-FE0F","non_qualified":"1F468-1F3FF-200D-2695","image":"1f468-1f3ff-200d-2695-fe0f.png","sheet_x":17,"sheet_y":7,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Doctor","b":"1F468-200D-2695-FE0F","c":"1F468-200D-2695","d":true,"e":true,"f":true,"h":true,"k":[17,2],"o":4},"book":{"a":"Open Book","b":"1F4D6","d":true,"e":true,"f":true,"h":true,"k":[26,44],"n":["open_book"],"o":2},"traffic_light":{"a":"Horizontal Traffic Light","b":"1F6A5","d":true,"e":true,"f":true,"h":true,"j":["transportation","signal"],"k":[34,53],"o":2},"cocktail":{"a":"Cocktail Glass","b":"1F378","d":true,"e":true,"f":true,"h":true,"j":["drink","drunk","alcohol","beverage","booze","mojito"],"k":[7,23],"o":2},"o":{"a":"Heavy Large Circle","b":"2B55","d":true,"e":true,"f":true,"h":true,"j":["circle","round"],"k":[55,43],"o":2},"flag-gy":{"a":"Guyana Flag","b":"1F1EC-1F1FE","d":true,"e":true,"f":true,"h":true,"k":[2,15],"o":2},"female-doctor":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-2695-FE0F","non_qualified":"1F469-1F3FB-200D-2695","image":"1f469-1f3fb-200d-2695-fe0f.png","sheet_x":19,"sheet_y":45,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-2695-FE0F","non_qualified":"1F469-1F3FC-200D-2695","image":"1f469-1f3fc-200d-2695-fe0f.png","sheet_x":19,"sheet_y":46,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-2695-FE0F","non_qualified":"1F469-1F3FD-200D-2695","image":"1f469-1f3fd-200d-2695-fe0f.png","sheet_x":19,"sheet_y":47,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-2695-FE0F","non_qualified":"1F469-1F3FE-200D-2695","image":"1f469-1f3fe-200d-2695-fe0f.png","sheet_x":19,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-2695-FE0F","non_qualified":"1F469-1F3FF-200D-2695","image":"1f469-1f3ff-200d-2695-fe0f.png","sheet_x":19,"sheet_y":49,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Doctor","b":"1F469-200D-2695-FE0F","c":"1F469-200D-2695","d":true,"e":true,"f":true,"h":true,"k":[19,44],"o":4},"smirk_cat":{"a":"Cat Face with Wry Smile","b":"1F63C","d":true,"e":true,"f":true,"h":true,"j":["animal","cats","smirk"],"k":[31,38],"o":2},"green_book":{"a":"Green Book","b":"1F4D7","d":true,"e":true,"f":true,"h":true,"j":["read","library","knowledge","study"],"k":[26,45],"o":2},"cherry_blossom":{"a":"Cherry Blossom","b":"1F338","d":true,"e":true,"f":true,"h":true,"j":["nature","plant","spring","flower"],"k":[6,16],"o":2},"flag-hk":{"a":"Hong Kong Sar China Flag","b":"1F1ED-1F1F0","d":true,"e":true,"f":true,"h":true,"k":[2,16],"o":2},"vertical_traffic_light":{"a":"Vertical Traffic Light","b":"1F6A6","d":true,"e":true,"f":true,"h":true,"j":["transportation","driving"],"k":[34,54],"o":2},"white_check_mark":{"a":"White Heavy Check Mark","b":"2705","d":true,"e":true,"f":true,"h":true,"j":["green-square","ok","agree","vote","election","answer","tick"],"k":[54,40],"o":2},"tropical_drink":{"a":"Tropical Drink","b":"1F379","d":true,"e":true,"f":true,"h":true,"j":["beverage","cocktail","summer","beach","alcohol","booze","mojito"],"k":[7,24],"o":2},"kissing_cat":{"a":"Kissing Cat Face with Closed Eyes","b":"1F63D","d":true,"e":true,"f":true,"h":true,"j":["animal","cats","kiss"],"k":[31,39],"o":2},"flag-hm":{"a":"Heard & Mcdonald Islands Flag","b":"1F1ED-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[2,17],"o":2},"octagonal_sign":{"a":"Octagonal Sign","b":"1F6D1","d":true,"e":true,"f":true,"h":true,"k":[36,39],"o":4},"white_flower":{"a":"White Flower","b":"1F4AE","d":true,"e":true,"f":true,"h":true,"j":["japanese","spring"],"k":[26,4],"o":2},"ballot_box_with_check":{"a":"Ballot Box with Check","b":"2611-FE0F","c":"2611","d":true,"e":true,"f":true,"h":true,"j":["ok","agree","confirm","black-square","vote","election","yes","tick"],"k":[52,55],"o":2},"student":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F393","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f393.png","sheet_x":45,"sheet_y":30,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F393","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f393.png","sheet_x":45,"sheet_y":31,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F393","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f393.png","sheet_x":45,"sheet_y":32,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F393","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f393.png","sheet_x":45,"sheet_y":33,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F393","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f393.png","sheet_x":45,"sheet_y":34,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Student","b":"1F9D1-200D-1F393","d":true,"e":false,"f":false,"h":false,"k":[45,29],"o":12},"blue_book":{"a":"Blue Book","b":"1F4D8","d":true,"e":true,"f":true,"h":true,"j":["read","library","knowledge","learn","study"],"k":[26,46],"o":2},"beer":{"a":"Beer Mug","b":"1F37A","d":true,"e":true,"f":true,"h":true,"j":["relax","beverage","drink","drunk","party","pub","summer","alcohol","booze"],"k":[7,25],"o":2},"construction":{"a":"Construction Sign","b":"1F6A7","d":true,"e":true,"f":true,"h":true,"j":["wip","progress","caution","warning"],"k":[34,55],"o":2},"rosette":{"a":"Rosette","b":"1F3F5-FE0F","c":"1F3F5","d":true,"e":true,"f":true,"h":true,"j":["flower","decoration","military"],"k":[11,18],"o":2},"heavy_check_mark":{"a":"Heavy Check Mark","b":"2714-FE0F","c":"2714","d":true,"e":true,"f":true,"h":true,"j":["ok","nike","answer","yes","tick"],"k":[55,12],"o":2},"scream_cat":{"a":"Weary Cat Face","b":"1F640","d":true,"e":true,"f":true,"h":true,"j":["animal","cats","munch","scared","scream"],"k":[31,42],"o":2},"orange_book":{"a":"Orange Book","b":"1F4D9","d":true,"e":true,"f":true,"h":true,"j":["read","library","knowledge","textbook","study"],"k":[26,47],"o":2},"beers":{"a":"Clinking Beer Mugs","b":"1F37B","d":true,"e":true,"f":true,"h":true,"j":["relax","beverage","drink","drunk","party","pub","summer","alcohol","booze"],"k":[7,26],"o":2},"male-student":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F393","non_qualified":null,"image":"1f468-1f3fb-200d-1f393.png","sheet_x":14,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F393","non_qualified":null,"image":"1f468-1f3fc-200d-1f393.png","sheet_x":14,"sheet_y":52,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F393","non_qualified":null,"image":"1f468-1f3fd-200d-1f393.png","sheet_x":14,"sheet_y":53,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F393","non_qualified":null,"image":"1f468-1f3fe-200d-1f393.png","sheet_x":14,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F393","non_qualified":null,"image":"1f468-1f3ff-200d-1f393.png","sheet_x":14,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Student","b":"1F468-200D-1F393","d":true,"e":true,"f":true,"h":true,"k":[14,50],"o":4},"flag-hn":{"a":"Honduras Flag","b":"1F1ED-1F1F3","d":true,"e":true,"f":true,"h":true,"k":[2,18],"o":2},"crying_cat_face":{"a":"Crying Cat Face","b":"1F63F","d":true,"e":true,"f":true,"h":true,"j":["animal","tears","weep","sad","cats","upset","cry"],"k":[31,41],"o":2},"anchor":{"a":"Anchor","b":"2693","d":true,"e":true,"f":true,"h":true,"j":["ship","ferry","sea","boat"],"k":[53,42],"o":2},"flag-hr":{"a":"Croatia Flag","b":"1F1ED-1F1F7","d":true,"e":true,"f":true,"h":true,"k":[2,19],"o":2},"heavy_multiplication_x":{"a":"Heavy Multiplication X","b":"2716-FE0F","c":"2716","d":true,"e":true,"f":true,"h":true,"j":["math","calculation"],"k":[55,13],"o":2},"female-student":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F393","non_qualified":null,"image":"1f469-1f3fb-200d-1f393.png","sheet_x":17,"sheet_y":41,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F393","non_qualified":null,"image":"1f469-1f3fc-200d-1f393.png","sheet_x":17,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F393","non_qualified":null,"image":"1f469-1f3fd-200d-1f393.png","sheet_x":17,"sheet_y":43,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F393","non_qualified":null,"image":"1f469-1f3fe-200d-1f393.png","sheet_x":17,"sheet_y":44,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F393","non_qualified":null,"image":"1f469-1f3ff-200d-1f393.png","sheet_x":17,"sheet_y":45,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Student","b":"1F469-200D-1F393","d":true,"e":true,"f":true,"h":true,"k":[17,40],"o":4},"rose":{"a":"Rose","b":"1F339","d":true,"e":true,"f":true,"h":true,"j":["flowers","valentines","love","spring"],"k":[6,17],"o":2},"books":{"a":"Books","b":"1F4DA","d":true,"e":true,"f":true,"h":true,"j":["literature","library","study"],"k":[26,48],"o":2},"clinking_glasses":{"a":"Clinking Glasses","b":"1F942","d":true,"e":true,"f":true,"h":true,"j":["beverage","drink","party","alcohol","celebrate","cheers"],"k":[41,18],"o":4},"teacher":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F3EB","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f3eb.png","sheet_x":45,"sheet_y":48,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F3EB","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f3eb.png","sheet_x":45,"sheet_y":49,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F3EB","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f3eb.png","sheet_x":45,"sheet_y":50,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F3EB","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f3eb.png","sheet_x":45,"sheet_y":51,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F3EB","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f3eb.png","sheet_x":45,"sheet_y":52,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Teacher","b":"1F9D1-200D-1F3EB","d":true,"e":false,"f":false,"h":false,"k":[45,47],"o":12},"x":{"a":"Cross Mark","b":"274C","d":true,"e":true,"f":true,"h":true,"j":["no","delete","remove","cancel"],"k":[55,21],"o":2},"pouting_cat":{"a":"Pouting Cat Face","b":"1F63E","d":true,"e":true,"f":true,"h":true,"j":["animal","cats"],"k":[31,40],"o":2},"wilted_flower":{"a":"Wilted Flower","b":"1F940","d":true,"e":true,"f":true,"h":true,"j":["plant","nature","flower"],"k":[41,16],"o":4},"boat":{"a":"Sailboat","b":"26F5","d":true,"e":true,"f":true,"h":true,"k":[54,16],"n":["sailboat"],"o":2},"flag-ht":{"a":"Haiti Flag","b":"1F1ED-1F1F9","d":true,"e":true,"f":true,"h":true,"k":[2,20],"o":2},"tumbler_glass":{"a":"Tumbler Glass","b":"1F943","d":true,"e":true,"f":true,"h":true,"j":["drink","beverage","drunk","alcohol","liquor","booze","bourbon","scotch","whisky","glass","shot"],"k":[41,19],"o":4},"notebook":{"a":"Notebook","b":"1F4D3","d":true,"e":true,"f":true,"h":true,"j":["stationery","record","notes","paper","study"],"k":[26,41],"o":2},"male-teacher":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F3EB","non_qualified":null,"image":"1f468-1f3fb-200d-1f3eb.png","sheet_x":15,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F3EB","non_qualified":null,"image":"1f468-1f3fc-200d-1f3eb.png","sheet_x":15,"sheet_y":13,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F3EB","non_qualified":null,"image":"1f468-1f3fd-200d-1f3eb.png","sheet_x":15,"sheet_y":14,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F3EB","non_qualified":null,"image":"1f468-1f3fe-200d-1f3eb.png","sheet_x":15,"sheet_y":15,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F3EB","non_qualified":null,"image":"1f468-1f3ff-200d-1f3eb.png","sheet_x":15,"sheet_y":16,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Teacher","b":"1F468-200D-1F3EB","d":true,"e":true,"f":true,"h":true,"k":[15,11],"o":4},"ledger":{"a":"Ledger","b":"1F4D2","d":true,"e":true,"f":true,"h":true,"j":["notes","paper"],"k":[26,40],"o":2},"flag-hu":{"a":"Hungary Flag","b":"1F1ED-1F1FA","d":true,"e":true,"f":true,"h":true,"k":[2,21],"o":2},"cup_with_straw":{"a":"Cup with Straw","b":"1F964","d":true,"e":true,"f":true,"h":true,"k":[41,51],"o":5},"hibiscus":{"a":"Hibiscus","b":"1F33A","d":true,"e":true,"f":true,"h":true,"j":["plant","vegetable","flowers","beach"],"k":[6,18],"o":2},"see_no_evil":{"a":"See-No-Evil Monkey","b":"1F648","d":true,"e":true,"f":true,"h":true,"j":["monkey","animal","nature","haha"],"k":[32,44],"o":2},"canoe":{"a":"Canoe","b":"1F6F6","d":true,"e":true,"f":true,"h":true,"j":["boat","paddle","water","ship"],"k":[36,55],"o":4},"negative_squared_cross_mark":{"a":"Negative Squared Cross Mark","b":"274E","d":true,"e":true,"f":true,"h":true,"j":["x","green-square","no","deny"],"k":[55,22],"o":2},"flag-ic":{"a":"Canary Islands Flag","b":"1F1EE-1F1E8","d":true,"e":true,"f":true,"h":true,"k":[2,22],"o":2},"beverage_box":{"a":"Beverage Box","b":"1F9C3","d":true,"e":true,"f":true,"h":true,"k":[44,11],"o":12},"speedboat":{"a":"Speedboat","b":"1F6A4","d":true,"e":true,"f":true,"h":true,"j":["ship","transportation","vehicle","summer"],"k":[34,52],"o":2},"heavy_plus_sign":{"a":"Heavy Plus Sign","b":"2795","d":true,"e":true,"f":true,"h":true,"j":["math","calculation","addition","more","increase"],"k":[55,29],"o":2},"sunflower":{"a":"Sunflower","b":"1F33B","d":true,"e":true,"f":true,"h":true,"j":["nature","plant","fall"],"k":[6,19],"o":2},"page_with_curl":{"a":"Page with Curl","b":"1F4C3","d":true,"e":true,"f":true,"h":true,"j":["documents","office","paper"],"k":[26,25],"o":2},"female-teacher":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F3EB","non_qualified":null,"image":"1f469-1f3fb-200d-1f3eb.png","sheet_x":18,"sheet_y":2,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F3EB","non_qualified":null,"image":"1f469-1f3fc-200d-1f3eb.png","sheet_x":18,"sheet_y":3,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F3EB","non_qualified":null,"image":"1f469-1f3fd-200d-1f3eb.png","sheet_x":18,"sheet_y":4,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F3EB","non_qualified":null,"image":"1f469-1f3fe-200d-1f3eb.png","sheet_x":18,"sheet_y":5,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F3EB","non_qualified":null,"image":"1f469-1f3ff-200d-1f3eb.png","sheet_x":18,"sheet_y":6,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Teacher","b":"1F469-200D-1F3EB","d":true,"e":true,"f":true,"h":true,"k":[18,1],"o":4},"hear_no_evil":{"a":"Hear-No-Evil Monkey","b":"1F649","d":true,"e":true,"f":true,"h":true,"j":["animal","monkey","nature"],"k":[32,45],"o":2},"mate_drink":{"a":"Mate Drink","b":"1F9C9","d":true,"e":true,"f":true,"h":true,"k":[44,17],"o":12},"passenger_ship":{"a":"Passenger Ship","b":"1F6F3-FE0F","c":"1F6F3","d":true,"e":true,"f":true,"h":true,"j":["yacht","cruise","ferry"],"k":[36,52],"o":2},"judge":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-2696-FE0F","non_qualified":"1F9D1-1F3FB-200D-2696","image":"1f9d1-1f3fb-200d-2696-fe0f.png","sheet_x":47,"sheet_y":56,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-2696-FE0F","non_qualified":"1F9D1-1F3FC-200D-2696","image":"1f9d1-1f3fc-200d-2696-fe0f.png","sheet_x":48,"sheet_y":0,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-2696-FE0F","non_qualified":"1F9D1-1F3FD-200D-2696","image":"1f9d1-1f3fd-200d-2696-fe0f.png","sheet_x":48,"sheet_y":1,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-2696-FE0F","non_qualified":"1F9D1-1F3FE-200D-2696","image":"1f9d1-1f3fe-200d-2696-fe0f.png","sheet_x":48,"sheet_y":2,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-2696-FE0F","non_qualified":"1F9D1-1F3FF-200D-2696","image":"1f9d1-1f3ff-200d-2696-fe0f.png","sheet_x":48,"sheet_y":3,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Judge","b":"1F9D1-200D-2696-FE0F","c":"1F9D1-200D-2696","d":true,"e":false,"f":false,"h":false,"k":[47,55],"o":12},"scroll":{"a":"Scroll","b":"1F4DC","d":true,"e":true,"f":true,"h":true,"j":["documents","ancient","history","paper"],"k":[26,50],"o":2},"blossom":{"a":"Blossom","b":"1F33C","d":true,"e":true,"f":true,"h":true,"j":["nature","flowers","yellow"],"k":[6,20],"o":2},"flag-id":{"a":"Indonesia Flag","b":"1F1EE-1F1E9","d":true,"e":true,"f":true,"h":true,"k":[2,23],"o":2},"speak_no_evil":{"a":"Speak-No-Evil Monkey","b":"1F64A","d":true,"e":true,"f":true,"h":true,"j":["monkey","animal","nature","omg"],"k":[32,46],"o":2},"heavy_minus_sign":{"a":"Heavy Minus Sign","b":"2796","d":true,"e":true,"f":true,"h":true,"j":["math","calculation","subtract","less"],"k":[55,30],"o":2},"flag-ie":{"a":"Ireland Flag","b":"1F1EE-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[2,24],"o":2},"ice_cube":{"a":"Ice Cube","b":"1F9CA","d":true,"e":true,"f":true,"h":true,"k":[44,18],"o":12},"page_facing_up":{"a":"Page Facing Up","b":"1F4C4","d":true,"e":true,"f":true,"h":true,"j":["documents","office","paper","information"],"k":[26,26],"o":2},"male-judge":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-2696-FE0F","non_qualified":"1F468-1F3FB-200D-2696","image":"1f468-1f3fb-200d-2696-fe0f.png","sheet_x":17,"sheet_y":9,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-2696-FE0F","non_qualified":"1F468-1F3FC-200D-2696","image":"1f468-1f3fc-200d-2696-fe0f.png","sheet_x":17,"sheet_y":10,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-2696-FE0F","non_qualified":"1F468-1F3FD-200D-2696","image":"1f468-1f3fd-200d-2696-fe0f.png","sheet_x":17,"sheet_y":11,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-2696-FE0F","non_qualified":"1F468-1F3FE-200D-2696","image":"1f468-1f3fe-200d-2696-fe0f.png","sheet_x":17,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-2696-FE0F","non_qualified":"1F468-1F3FF-200D-2696","image":"1f468-1f3ff-200d-2696-fe0f.png","sheet_x":17,"sheet_y":13,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Judge","b":"1F468-200D-2696-FE0F","c":"1F468-200D-2696","d":true,"e":true,"f":true,"h":true,"k":[17,8],"o":4},"tulip":{"a":"Tulip","b":"1F337","d":true,"e":true,"f":true,"h":true,"j":["flowers","plant","nature","summer","spring"],"k":[6,15],"o":2},"ferry":{"a":"Ferry","b":"26F4-FE0F","c":"26F4","d":true,"e":true,"f":true,"h":true,"j":["boat","ship","yacht"],"k":[54,15],"o":2},"kiss":{"a":"Kiss Mark","b":"1F48B","d":true,"e":true,"f":true,"h":true,"j":["face","lips","love","like","affection","valentines"],"k":[25,21],"o":2},"heavy_division_sign":{"a":"Heavy Division Sign","b":"2797","d":true,"e":true,"f":true,"h":true,"j":["divide","math","calculation"],"k":[55,31],"o":2},"newspaper":{"a":"Newspaper","b":"1F4F0","d":true,"e":true,"f":true,"h":true,"j":["press","headline"],"k":[27,13],"o":2},"female-judge":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-2696-FE0F","non_qualified":"1F469-1F3FB-200D-2696","image":"1f469-1f3fb-200d-2696-fe0f.png","sheet_x":19,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-2696-FE0F","non_qualified":"1F469-1F3FC-200D-2696","image":"1f469-1f3fc-200d-2696-fe0f.png","sheet_x":19,"sheet_y":52,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-2696-FE0F","non_qualified":"1F469-1F3FD-200D-2696","image":"1f469-1f3fd-200d-2696-fe0f.png","sheet_x":19,"sheet_y":53,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-2696-FE0F","non_qualified":"1F469-1F3FE-200D-2696","image":"1f469-1f3fe-200d-2696-fe0f.png","sheet_x":19,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-2696-FE0F","non_qualified":"1F469-1F3FF-200D-2696","image":"1f469-1f3ff-200d-2696-fe0f.png","sheet_x":19,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Judge","b":"1F469-200D-2696-FE0F","c":"1F469-200D-2696","d":true,"e":true,"f":true,"h":true,"k":[19,50],"o":4},"seedling":{"a":"Seedling","b":"1F331","d":true,"e":true,"f":true,"h":true,"j":["plant","nature","grass","lawn","spring"],"k":[6,9],"o":2},"love_letter":{"a":"Love Letter","b":"1F48C","d":true,"e":true,"f":true,"h":true,"j":["email","like","affection","envelope","valentines"],"k":[25,22],"o":2},"chopsticks":{"a":"Chopsticks","b":"1F962","d":true,"e":true,"f":true,"h":true,"k":[41,49],"o":5},"motor_boat":{"a":"Motor Boat","b":"1F6E5-FE0F","c":"1F6E5","d":true,"e":true,"f":true,"h":true,"j":["ship"],"k":[36,47],"o":2},"flag-il":{"a":"Israel Flag","b":"1F1EE-1F1F1","d":true,"e":true,"f":true,"h":true,"k":[2,25],"o":2},"curly_loop":{"a":"Curly Loop","b":"27B0","d":true,"e":true,"f":true,"h":true,"j":["scribble","draw","shape","squiggle"],"k":[55,33],"o":2},"flag-im":{"a":"Isle of Man Flag","b":"1F1EE-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[2,26],"o":2},"evergreen_tree":{"a":"Evergreen Tree","b":"1F332","d":true,"e":true,"f":true,"h":true,"j":["plant","nature"],"k":[6,10],"o":2},"cupid":{"a":"Heart with Arrow","b":"1F498","d":true,"e":true,"f":true,"h":true,"j":["love","like","heart","affection","valentines"],"k":[25,34],"o":2},"loop":{"a":"Double Curly Loop","b":"27BF","d":true,"e":true,"f":true,"h":true,"j":["tape","cassette"],"k":[55,34],"o":2},"ship":{"a":"Ship","b":"1F6A2","d":true,"e":true,"f":true,"h":true,"j":["transportation","titanic","deploy"],"k":[34,33],"o":2},"farmer":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F33E","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f33e.png","sheet_x":45,"sheet_y":18,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F33E","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f33e.png","sheet_x":45,"sheet_y":19,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F33E","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f33e.png","sheet_x":45,"sheet_y":20,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F33E","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f33e.png","sheet_x":45,"sheet_y":21,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F33E","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f33e.png","sheet_x":45,"sheet_y":22,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Farmer","b":"1F9D1-200D-1F33E","d":true,"e":false,"f":false,"h":false,"k":[45,17],"o":12},"rolled_up_newspaper":{"a":"Rolled Up Newspaper","b":"1F5DE-FE0F","c":"1F5DE","d":true,"e":true,"f":true,"h":true,"k":[30,23],"o":2},"knife_fork_plate":{"a":"Knife Fork Plate","b":"1F37D-FE0F","c":"1F37D","d":true,"e":true,"f":true,"h":true,"k":[7,28],"o":2},"fork_and_knife":{"a":"Fork and Knife","b":"1F374","d":true,"e":true,"f":true,"h":true,"j":["cutlery","kitchen"],"k":[7,19],"o":2},"male-farmer":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F33E","non_qualified":null,"image":"1f468-1f3fb-200d-1f33e.png","sheet_x":14,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F33E","non_qualified":null,"image":"1f468-1f3fc-200d-1f33e.png","sheet_x":14,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F33E","non_qualified":null,"image":"1f468-1f3fd-200d-1f33e.png","sheet_x":14,"sheet_y":41,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F33E","non_qualified":null,"image":"1f468-1f3fe-200d-1f33e.png","sheet_x":14,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F33E","non_qualified":null,"image":"1f468-1f3ff-200d-1f33e.png","sheet_x":14,"sheet_y":43,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Farmer","b":"1F468-200D-1F33E","d":true,"e":true,"f":true,"h":true,"k":[14,38],"o":4},"bookmark_tabs":{"a":"Bookmark Tabs","b":"1F4D1","d":true,"e":true,"f":true,"h":true,"j":["favorite","save","order","tidy"],"k":[26,39],"o":2},"part_alternation_mark":{"a":"Part Alternation Mark","b":"303D-FE0F","c":"303D","d":true,"e":true,"f":true,"h":true,"j":["graph","presentation","stats","business","economics","bad"],"k":[55,45],"o":2},"flag-in":{"a":"India Flag","b":"1F1EE-1F1F3","d":true,"e":true,"f":true,"h":true,"k":[2,27],"o":2},"gift_heart":{"a":"Heart with Ribbon","b":"1F49D","d":true,"e":true,"f":true,"h":true,"j":["love","valentines"],"k":[25,39],"o":2},"airplane":{"a":"Airplane","b":"2708-FE0F","c":"2708","d":true,"e":true,"f":true,"h":true,"j":["vehicle","transportation","flight","fly"],"k":[54,41],"o":2},"deciduous_tree":{"a":"Deciduous Tree","b":"1F333","d":true,"e":true,"f":true,"h":true,"j":["plant","nature"],"k":[6,11],"o":2},"spoon":{"a":"Spoon","b":"1F944","d":true,"e":true,"f":true,"h":true,"j":["cutlery","kitchen","tableware"],"k":[41,20],"o":4},"flag-io":{"a":"British Indian Ocean Territory Flag","b":"1F1EE-1F1F4","d":true,"e":true,"f":true,"h":true,"k":[2,28],"o":2},"palm_tree":{"a":"Palm Tree","b":"1F334","d":true,"e":true,"f":true,"h":true,"j":["plant","vegetable","nature","summer","beach","mojito","tropical"],"k":[6,12],"o":2},"sparkling_heart":{"a":"Sparkling Heart","b":"1F496","d":true,"e":true,"f":true,"h":true,"j":["love","like","affection","valentines"],"k":[25,32],"o":2},"female-farmer":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F33E","non_qualified":null,"image":"1f469-1f3fb-200d-1f33e.png","sheet_x":17,"sheet_y":29,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F33E","non_qualified":null,"image":"1f469-1f3fc-200d-1f33e.png","sheet_x":17,"sheet_y":30,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F33E","non_qualified":null,"image":"1f469-1f3fd-200d-1f33e.png","sheet_x":17,"sheet_y":31,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F33E","non_qualified":null,"image":"1f469-1f3fe-200d-1f33e.png","sheet_x":17,"sheet_y":32,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F33E","non_qualified":null,"image":"1f469-1f3ff-200d-1f33e.png","sheet_x":17,"sheet_y":33,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Farmer","b":"1F469-200D-1F33E","d":true,"e":true,"f":true,"h":true,"k":[17,28],"o":4},"eight_spoked_asterisk":{"a":"Eight Spoked Asterisk","b":"2733-FE0F","c":"2733","d":true,"e":true,"f":true,"h":true,"j":["star","sparkle","green-square"],"k":[55,17],"o":2},"small_airplane":{"a":"Small Airplane","b":"1F6E9-FE0F","c":"1F6E9","d":true,"e":true,"f":true,"h":true,"j":["flight","transportation","fly","vehicle"],"k":[36,48],"o":2},"bookmark":{"a":"Bookmark","b":"1F516","d":true,"e":true,"f":true,"h":true,"j":["favorite","label","save"],"k":[27,50],"o":2},"cook":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F373","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f373.png","sheet_x":45,"sheet_y":24,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F373","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f373.png","sheet_x":45,"sheet_y":25,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F373","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f373.png","sheet_x":45,"sheet_y":26,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F373","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f373.png","sheet_x":45,"sheet_y":27,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F373","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f373.png","sheet_x":45,"sheet_y":28,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Cook","b":"1F9D1-200D-1F373","d":true,"e":false,"f":false,"h":false,"k":[45,23],"o":12},"eight_pointed_black_star":{"a":"Eight Pointed Black Star","b":"2734-FE0F","c":"2734","d":true,"e":true,"f":true,"h":true,"j":["orange-square","shape","polygon"],"k":[55,18],"o":2},"heartpulse":{"a":"Growing Heart","b":"1F497","d":true,"e":true,"f":true,"h":true,"j":["like","love","affection","valentines","pink"],"k":[25,33],"o":2},"label":{"a":"Label","b":"1F3F7-FE0F","c":"1F3F7","d":true,"e":true,"f":true,"h":true,"j":["sale","tag"],"k":[11,19],"o":2},"flag-iq":{"a":"Iraq Flag","b":"1F1EE-1F1F6","d":true,"e":true,"f":true,"h":true,"k":[2,29],"o":2},"hocho":{"a":"Hocho","b":"1F52A","d":true,"e":true,"f":true,"h":true,"j":["knife","blade","cutlery","kitchen","weapon"],"k":[28,13],"n":["knife"],"o":2},"cactus":{"a":"Cactus","b":"1F335","d":true,"e":true,"f":true,"h":true,"j":["vegetable","plant","nature"],"k":[6,13],"o":2},"airplane_departure":{"a":"Airplane Departure","b":"1F6EB","d":true,"e":true,"f":true,"h":true,"k":[36,49],"o":2},"airplane_arriving":{"a":"Airplane Arriving","b":"1F6EC","d":true,"e":true,"f":true,"h":true,"k":[36,50],"o":2},"ear_of_rice":{"a":"Ear of Rice","b":"1F33E","d":true,"e":true,"f":true,"h":true,"j":["nature","plant"],"k":[6,22],"o":2},"flag-ir":{"a":"Iran Flag","b":"1F1EE-1F1F7","d":true,"e":true,"f":true,"h":true,"k":[2,30],"o":2},"moneybag":{"a":"Money Bag","b":"1F4B0","d":true,"e":true,"f":true,"h":true,"j":["dollar","payment","coins","sale"],"k":[26,6],"o":2},"male-cook":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F373","non_qualified":null,"image":"1f468-1f3fb-200d-1f373.png","sheet_x":14,"sheet_y":45,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F373","non_qualified":null,"image":"1f468-1f3fc-200d-1f373.png","sheet_x":14,"sheet_y":46,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F373","non_qualified":null,"image":"1f468-1f3fd-200d-1f373.png","sheet_x":14,"sheet_y":47,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F373","non_qualified":null,"image":"1f468-1f3fe-200d-1f373.png","sheet_x":14,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F373","non_qualified":null,"image":"1f468-1f3ff-200d-1f373.png","sheet_x":14,"sheet_y":49,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Cook","b":"1F468-200D-1F373","d":true,"e":true,"f":true,"h":true,"k":[14,44],"o":4},"heartbeat":{"a":"Beating Heart","b":"1F493","d":true,"e":true,"f":true,"h":true,"j":["love","like","affection","valentines","pink","heart"],"k":[25,29],"o":2},"sparkle":{"a":"Sparkle","b":"2747-FE0F","c":"2747","d":true,"e":true,"f":true,"h":true,"j":["stars","green-square","awesome","good","fireworks"],"k":[55,20],"o":2},"amphora":{"a":"Amphora","b":"1F3FA","d":true,"e":true,"f":true,"h":true,"j":["vase","jar"],"k":[11,22],"o":2},"yen":{"a":"Banknote with Yen Sign","b":"1F4B4","d":true,"e":true,"f":true,"h":true,"j":["money","sales","japanese","dollar","currency"],"k":[26,10],"o":2},"revolving_hearts":{"a":"Revolving Hearts","b":"1F49E","d":true,"e":true,"f":true,"h":true,"j":["love","like","affection","valentines"],"k":[25,40],"o":2},"bangbang":{"a":"Double Exclamation Mark","b":"203C-FE0F","c":"203C","d":true,"e":true,"f":true,"h":true,"j":["exclamation","surprise"],"k":[52,10],"o":2},"parachute":{"a":"Parachute","b":"1FA82","d":true,"e":true,"f":true,"h":true,"k":[52,3],"o":12},"herb":{"a":"Herb","b":"1F33F","d":true,"e":true,"f":true,"h":true,"j":["vegetable","plant","medicine","weed","grass","lawn"],"k":[6,23],"o":2},"flag-is":{"a":"Iceland Flag","b":"1F1EE-1F1F8","d":true,"e":true,"f":true,"h":true,"k":[2,31],"o":2},"female-cook":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F373","non_qualified":null,"image":"1f469-1f3fb-200d-1f373.png","sheet_x":17,"sheet_y":35,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F373","non_qualified":null,"image":"1f469-1f3fc-200d-1f373.png","sheet_x":17,"sheet_y":36,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F373","non_qualified":null,"image":"1f469-1f3fd-200d-1f373.png","sheet_x":17,"sheet_y":37,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F373","non_qualified":null,"image":"1f469-1f3fe-200d-1f373.png","sheet_x":17,"sheet_y":38,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F373","non_qualified":null,"image":"1f469-1f3ff-200d-1f373.png","sheet_x":17,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Cook","b":"1F469-200D-1F373","d":true,"e":true,"f":true,"h":true,"k":[17,34],"o":4},"mechanic":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F527","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f527.png","sheet_x":46,"sheet_y":15,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F527","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f527.png","sheet_x":46,"sheet_y":16,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F527","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f527.png","sheet_x":46,"sheet_y":17,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F527","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f527.png","sheet_x":46,"sheet_y":18,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F527","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f527.png","sheet_x":46,"sheet_y":19,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Mechanic","b":"1F9D1-200D-1F527","d":true,"e":false,"f":false,"h":false,"k":[46,14],"o":12},"interrobang":{"a":"Exclamation Question Mark","b":"2049-FE0F","c":"2049","d":true,"e":true,"f":true,"h":true,"j":["wat","punctuation","surprise"],"k":[52,11],"o":2},"seat":{"a":"Seat","b":"1F4BA","d":true,"e":true,"f":true,"h":true,"j":["sit","airplane","transport","bus","flight","fly"],"k":[26,16],"o":2},"dollar":{"a":"Banknote with Dollar Sign","b":"1F4B5","d":true,"e":true,"f":true,"h":true,"j":["money","sales","bill","currency"],"k":[26,11],"o":2},"two_hearts":{"a":"Two Hearts","b":"1F495","d":true,"e":true,"f":true,"h":true,"j":["love","like","affection","valentines","heart"],"k":[25,31],"o":2},"it":{"a":"Italy Flag","b":"1F1EE-1F1F9","d":true,"e":true,"f":true,"h":true,"j":["italy","flag","nation","country","banner"],"k":[2,32],"n":["flag-it"],"o":2},"shamrock":{"a":"Shamrock","b":"2618-FE0F","c":"2618","d":true,"e":true,"f":true,"h":true,"j":["vegetable","plant","nature","irish","clover"],"k":[53,1],"o":2},"four_leaf_clover":{"a":"Four Leaf Clover","b":"1F340","d":true,"e":true,"f":true,"h":true,"j":["vegetable","plant","nature","lucky","irish"],"k":[6,24],"o":2},"euro":{"a":"Banknote with Euro Sign","b":"1F4B6","d":true,"e":true,"f":true,"h":true,"j":["money","sales","dollar","currency"],"k":[26,12],"o":2},"question":{"a":"Black Question Mark Ornament","b":"2753","d":true,"e":true,"f":true,"h":true,"j":["doubt","confused"],"k":[55,23],"o":2},"helicopter":{"a":"Helicopter","b":"1F681","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle","fly"],"k":[34,0],"o":2},"heart_decoration":{"a":"Heart Decoration","b":"1F49F","d":true,"e":true,"f":true,"h":true,"j":["purple-square","love","like"],"k":[25,41],"o":2},"flag-je":{"a":"Jersey Flag","b":"1F1EF-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[2,33],"o":2},"male-mechanic":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F527","non_qualified":null,"image":"1f468-1f3fb-200d-1f527.png","sheet_x":15,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F527","non_qualified":null,"image":"1f468-1f3fc-200d-1f527.png","sheet_x":15,"sheet_y":52,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F527","non_qualified":null,"image":"1f468-1f3fd-200d-1f527.png","sheet_x":15,"sheet_y":53,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F527","non_qualified":null,"image":"1f468-1f3fe-200d-1f527.png","sheet_x":15,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F527","non_qualified":null,"image":"1f468-1f3ff-200d-1f527.png","sheet_x":15,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Mechanic","b":"1F468-200D-1F527","d":true,"e":true,"f":true,"h":true,"k":[15,50],"o":4},"suspension_railway":{"a":"Suspension Railway","b":"1F69F","d":true,"e":true,"f":true,"h":true,"j":["vehicle","transportation"],"k":[34,30],"o":2},"heavy_heart_exclamation_mark_ornament":{"a":"Heavy Heart Exclamation Mark Ornament","b":"2763-FE0F","c":"2763","d":true,"e":true,"f":true,"h":true,"k":[55,27],"o":2},"female-mechanic":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F527","non_qualified":null,"image":"1f469-1f3fb-200d-1f527.png","sheet_x":18,"sheet_y":36,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F527","non_qualified":null,"image":"1f469-1f3fc-200d-1f527.png","sheet_x":18,"sheet_y":37,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F527","non_qualified":null,"image":"1f469-1f3fd-200d-1f527.png","sheet_x":18,"sheet_y":38,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F527","non_qualified":null,"image":"1f469-1f3fe-200d-1f527.png","sheet_x":18,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F527","non_qualified":null,"image":"1f469-1f3ff-200d-1f527.png","sheet_x":18,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Mechanic","b":"1F469-200D-1F527","d":true,"e":true,"f":true,"h":true,"k":[18,35],"o":4},"flag-jm":{"a":"Jamaica Flag","b":"1F1EF-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[2,34],"o":2},"grey_question":{"a":"White Question Mark Ornament","b":"2754","d":true,"e":true,"f":true,"h":true,"j":["doubts","gray","huh","confused"],"k":[55,24],"o":2},"maple_leaf":{"a":"Maple Leaf","b":"1F341","d":true,"e":true,"f":true,"h":true,"j":["nature","plant","vegetable","ca","fall"],"k":[6,25],"o":2},"pound":{"a":"Banknote with Pound Sign","b":"1F4B7","d":true,"e":true,"f":true,"h":true,"j":["british","sterling","money","sales","bills","uk","england","currency"],"k":[26,13],"o":2},"money_with_wings":{"a":"Money with Wings","b":"1F4B8","d":true,"e":true,"f":true,"h":true,"j":["dollar","bills","payment","sale"],"k":[26,14],"o":2},"flag-jo":{"a":"Jordan Flag","b":"1F1EF-1F1F4","d":true,"e":true,"f":true,"h":true,"k":[2,35],"o":2},"fallen_leaf":{"a":"Fallen Leaf","b":"1F342","d":true,"e":true,"f":true,"h":true,"j":["nature","plant","vegetable","leaves"],"k":[6,26],"o":2},"factory_worker":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F3ED","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f3ed.png","sheet_x":45,"sheet_y":54,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F3ED","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f3ed.png","sheet_x":45,"sheet_y":55,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F3ED","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f3ed.png","sheet_x":45,"sheet_y":56,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F3ED","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f3ed.png","sheet_x":46,"sheet_y":0,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F3ED","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f3ed.png","sheet_x":46,"sheet_y":1,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Factory Worker","b":"1F9D1-200D-1F3ED","d":true,"e":false,"f":false,"h":false,"k":[45,53],"o":12},"broken_heart":{"a":"Broken Heart","b":"1F494","d":true,"e":true,"f":true,"h":true,"j":["sad","sorry","break","heart","heartbreak"],"k":[25,30],"l":["</3"],"m":"</3","o":2},"grey_exclamation":{"a":"White Exclamation Mark Ornament","b":"2755","d":true,"e":true,"f":true,"h":true,"j":["surprise","punctuation","gray","wow","warning"],"k":[55,25],"o":2},"mountain_cableway":{"a":"Mountain Cableway","b":"1F6A0","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle","ski"],"k":[34,31],"o":2},"exclamation":{"a":"Heavy Exclamation Mark Symbol","b":"2757","d":true,"e":true,"f":true,"h":true,"j":["heavy_exclamation_mark","danger","surprise","punctuation","wow","warning"],"k":[55,26],"n":["heavy_exclamation_mark"],"o":2},"leaves":{"a":"Leaf Fluttering in Wind","b":"1F343","d":true,"e":true,"f":true,"h":true,"j":["nature","plant","tree","vegetable","grass","lawn","spring"],"k":[6,27],"o":2},"heart":{"a":"Heavy Black Heart","b":"2764-FE0F","c":"2764","d":true,"e":true,"f":true,"h":true,"j":["love","like","valentines"],"k":[55,28],"l":["<3"],"m":"<3","o":2},"jp":{"a":"Japan Flag","b":"1F1EF-1F1F5","d":true,"e":true,"f":true,"h":true,"j":["japanese","nation","flag","country","banner"],"k":[2,36],"n":["flag-jp"],"o":2},"male-factory-worker":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F3ED","non_qualified":null,"image":"1f468-1f3fb-200d-1f3ed.png","sheet_x":15,"sheet_y":18,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F3ED","non_qualified":null,"image":"1f468-1f3fc-200d-1f3ed.png","sheet_x":15,"sheet_y":19,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F3ED","non_qualified":null,"image":"1f468-1f3fd-200d-1f3ed.png","sheet_x":15,"sheet_y":20,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F3ED","non_qualified":null,"image":"1f468-1f3fe-200d-1f3ed.png","sheet_x":15,"sheet_y":21,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F3ED","non_qualified":null,"image":"1f468-1f3ff-200d-1f3ed.png","sheet_x":15,"sheet_y":22,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Factory Worker","b":"1F468-200D-1F3ED","d":true,"e":true,"f":true,"h":true,"k":[15,17],"o":4},"credit_card":{"a":"Credit Card","b":"1F4B3","d":true,"e":true,"f":true,"h":true,"j":["money","sales","dollar","bill","payment","shopping"],"k":[26,9],"o":2},"aerial_tramway":{"a":"Aerial Tramway","b":"1F6A1","d":true,"e":true,"f":true,"h":true,"j":["transportation","vehicle","ski"],"k":[34,32],"o":2},"female-factory-worker":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F3ED","non_qualified":null,"image":"1f469-1f3fb-200d-1f3ed.png","sheet_x":18,"sheet_y":8,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F3ED","non_qualified":null,"image":"1f469-1f3fc-200d-1f3ed.png","sheet_x":18,"sheet_y":9,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F3ED","non_qualified":null,"image":"1f469-1f3fd-200d-1f3ed.png","sheet_x":18,"sheet_y":10,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F3ED","non_qualified":null,"image":"1f469-1f3fe-200d-1f3ed.png","sheet_x":18,"sheet_y":11,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F3ED","non_qualified":null,"image":"1f469-1f3ff-200d-1f3ed.png","sheet_x":18,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Factory Worker","b":"1F469-200D-1F3ED","d":true,"e":true,"f":true,"h":true,"k":[18,7],"o":4},"receipt":{"a":"Receipt","b":"1F9FE","d":true,"e":true,"f":true,"h":true,"k":[51,49],"o":11},"wavy_dash":{"a":"Wavy Dash","b":"3030-FE0F","c":"3030","d":true,"e":true,"f":true,"h":true,"j":["draw","line","moustache","mustache","squiggle","scribble"],"k":[55,44],"o":2},"flag-ke":{"a":"Kenya Flag","b":"1F1F0-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[2,37],"o":2},"satellite":{"a":"Satellite","b":"1F6F0-FE0F","c":"1F6F0","d":true,"e":true,"f":true,"h":true,"j":["communication","future","radio","space"],"k":[36,51],"o":2},"orange_heart":{"a":"Orange Heart","b":"1F9E1","d":true,"e":true,"f":true,"h":true,"k":[51,20],"o":5},"yellow_heart":{"a":"Yellow Heart","b":"1F49B","d":true,"e":true,"f":true,"h":true,"j":["love","like","affection","valentines"],"k":[25,37],"m":"<3","o":2},"copyright":{"a":"Copyright Sign","b":"00A9-FE0F","c":"00A9","d":true,"e":true,"f":true,"h":false,"j":["ip","license","circle","law","legal"],"k":[0,12],"o":2},"rocket":{"a":"Rocket","b":"1F680","d":true,"e":true,"f":true,"h":true,"j":["launch","ship","staffmode","NASA","outer space","outer_space","fly"],"k":[33,56],"o":2},"chart":{"a":"Chart with Upwards Trend and Yen Sign","b":"1F4B9","d":true,"e":true,"f":true,"h":true,"j":["green-square","graph","presentation","stats"],"k":[26,15],"o":2},"flag-kg":{"a":"Kyrgyzstan Flag","b":"1F1F0-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[2,38],"o":2},"office_worker":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F4BC","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f4bc.png","sheet_x":46,"sheet_y":9,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F4BC","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f4bc.png","sheet_x":46,"sheet_y":10,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F4BC","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f4bc.png","sheet_x":46,"sheet_y":11,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F4BC","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f4bc.png","sheet_x":46,"sheet_y":12,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F4BC","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f4bc.png","sheet_x":46,"sheet_y":13,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Office Worker","b":"1F9D1-200D-1F4BC","d":true,"e":false,"f":false,"h":false,"k":[46,8],"o":12},"currency_exchange":{"a":"Currency Exchange","b":"1F4B1","d":true,"e":true,"f":true,"h":true,"j":["money","sales","dollar","travel"],"k":[26,7],"o":2},"registered":{"a":"Registered Sign","b":"00AE-FE0F","c":"00AE","d":true,"e":true,"f":true,"h":false,"j":["alphabet","circle"],"k":[0,13],"o":2},"green_heart":{"a":"Green Heart","b":"1F49A","d":true,"e":true,"f":true,"h":true,"j":["love","like","affection","valentines"],"k":[25,36],"m":"<3","o":2},"flying_saucer":{"a":"Flying Saucer","b":"1F6F8","d":true,"e":true,"f":true,"h":true,"k":[37,0],"o":5},"flag-kh":{"a":"Cambodia Flag","b":"1F1F0-1F1ED","d":true,"e":true,"f":true,"h":true,"k":[2,39],"o":2},"male-office-worker":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F4BC","non_qualified":null,"image":"1f468-1f3fb-200d-1f4bc.png","sheet_x":15,"sheet_y":45,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F4BC","non_qualified":null,"image":"1f468-1f3fc-200d-1f4bc.png","sheet_x":15,"sheet_y":46,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F4BC","non_qualified":null,"image":"1f468-1f3fd-200d-1f4bc.png","sheet_x":15,"sheet_y":47,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F4BC","non_qualified":null,"image":"1f468-1f3fe-200d-1f4bc.png","sheet_x":15,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F4BC","non_qualified":null,"image":"1f468-1f3ff-200d-1f4bc.png","sheet_x":15,"sheet_y":49,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Office Worker","b":"1F468-200D-1F4BC","d":true,"e":true,"f":true,"h":true,"k":[15,44],"o":4},"tm":{"a":"Trade Mark Sign","b":"2122-FE0F","c":"2122","d":true,"e":true,"f":true,"h":true,"j":["trademark","brand","law","legal"],"k":[52,12],"o":2},"bellhop_bell":{"a":"Bellhop Bell","b":"1F6CE-FE0F","c":"1F6CE","d":true,"e":true,"f":true,"h":true,"j":["service"],"k":[36,36],"o":2},"blue_heart":{"a":"Blue Heart","b":"1F499","d":true,"e":true,"f":true,"h":true,"j":["love","like","affection","valentines"],"k":[25,35],"m":"<3","o":2},"flag-ki":{"a":"Kiribati Flag","b":"1F1F0-1F1EE","d":true,"e":true,"f":true,"h":true,"k":[2,40],"o":2},"heavy_dollar_sign":{"a":"Heavy Dollar Sign","b":"1F4B2","d":true,"e":true,"f":true,"h":true,"j":["money","sales","payment","currency","buck"],"k":[26,8],"o":2},"female-office-worker":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F4BC","non_qualified":null,"image":"1f469-1f3fb-200d-1f4bc.png","sheet_x":18,"sheet_y":30,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F4BC","non_qualified":null,"image":"1f469-1f3fc-200d-1f4bc.png","sheet_x":18,"sheet_y":31,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F4BC","non_qualified":null,"image":"1f469-1f3fd-200d-1f4bc.png","sheet_x":18,"sheet_y":32,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F4BC","non_qualified":null,"image":"1f469-1f3fe-200d-1f4bc.png","sheet_x":18,"sheet_y":33,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F4BC","non_qualified":null,"image":"1f469-1f3ff-200d-1f4bc.png","sheet_x":18,"sheet_y":34,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Office Worker","b":"1F469-200D-1F4BC","d":true,"e":true,"f":true,"h":true,"k":[18,29],"o":4},"purple_heart":{"a":"Purple Heart","b":"1F49C","d":true,"e":true,"f":true,"h":true,"j":["love","like","affection","valentines"],"k":[25,38],"m":"<3","o":2},"scientist":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F52C","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f52c.png","sheet_x":46,"sheet_y":21,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F52C","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f52c.png","sheet_x":46,"sheet_y":22,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F52C","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f52c.png","sheet_x":46,"sheet_y":23,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F52C","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f52c.png","sheet_x":46,"sheet_y":24,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F52C","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f52c.png","sheet_x":46,"sheet_y":25,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Scientist","b":"1F9D1-200D-1F52C","d":true,"e":false,"f":false,"h":false,"k":[46,20],"o":12},"luggage":{"a":"Luggage","b":"1F9F3","d":true,"e":true,"f":true,"h":true,"k":[51,38],"o":11},"hash":{"a":"Hash Key","b":"0023-FE0F-20E3","c":"0023-20E3","d":true,"e":true,"f":true,"h":false,"j":["symbol","blue-square","twitter"],"k":[0,0],"o":0},"flag-km":{"a":"Comoros Flag","b":"1F1F0-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[2,41],"o":2},"email":{"a":"Envelope","b":"2709-FE0F","c":"2709","d":true,"e":true,"f":true,"h":true,"j":["letter","postal","inbox","communication"],"k":[54,42],"n":["envelope"],"o":2},"e-mail":{"a":"E-Mail Symbol","b":"1F4E7","d":true,"e":true,"f":true,"h":true,"j":["communication","inbox"],"k":[27,4],"o":2},"keycap_star":{"a":"Keycap Star","b":"002A-FE0F-20E3","c":"002A-20E3","d":true,"e":true,"f":true,"h":false,"k":[0,1],"o":0},"flag-kn":{"a":"St. Kitts & Nevis Flag","b":"1F1F0-1F1F3","d":true,"e":true,"f":true,"h":true,"k":[2,42],"o":2},"hourglass":{"a":"Hourglass","b":"231B","d":true,"e":true,"f":true,"h":true,"j":["time","clock","oldschool","limit","exam","quiz","test"],"k":[52,23],"o":2},"brown_heart":{"a":"Brown Heart","b":"1F90E","d":true,"e":true,"f":true,"h":true,"k":[37,16],"o":12},"male-scientist":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F52C","non_qualified":null,"image":"1f468-1f3fb-200d-1f52c.png","sheet_x":16,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F52C","non_qualified":null,"image":"1f468-1f3fc-200d-1f52c.png","sheet_x":16,"sheet_y":1,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F52C","non_qualified":null,"image":"1f468-1f3fd-200d-1f52c.png","sheet_x":16,"sheet_y":2,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F52C","non_qualified":null,"image":"1f468-1f3fe-200d-1f52c.png","sheet_x":16,"sheet_y":3,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F52C","non_qualified":null,"image":"1f468-1f3ff-200d-1f52c.png","sheet_x":16,"sheet_y":4,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Scientist","b":"1F468-200D-1F52C","d":true,"e":true,"f":true,"h":true,"k":[15,56],"o":4},"hourglass_flowing_sand":{"a":"Hourglass with Flowing Sand","b":"23F3","d":true,"e":true,"f":true,"h":true,"j":["oldschool","time","countdown"],"k":[52,36],"o":2},"black_heart":{"a":"Black Heart","b":"1F5A4","d":true,"e":true,"f":true,"h":true,"j":["evil"],"k":[30,9],"o":4},"zero":{"a":"Keycap 0","b":"0030-FE0F-20E3","c":"0030-20E3","d":true,"e":true,"f":true,"h":false,"j":["0","numbers","blue-square","null"],"k":[0,2],"o":0},"incoming_envelope":{"a":"Incoming Envelope","b":"1F4E8","d":true,"e":true,"f":true,"h":true,"j":["email","inbox"],"k":[27,5],"o":2},"flag-kp":{"a":"North Korea Flag","b":"1F1F0-1F1F5","d":true,"e":true,"f":true,"h":true,"k":[2,43],"o":2},"female-scientist":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F52C","non_qualified":null,"image":"1f469-1f3fb-200d-1f52c.png","sheet_x":18,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F52C","non_qualified":null,"image":"1f469-1f3fc-200d-1f52c.png","sheet_x":18,"sheet_y":43,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F52C","non_qualified":null,"image":"1f469-1f3fd-200d-1f52c.png","sheet_x":18,"sheet_y":44,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F52C","non_qualified":null,"image":"1f469-1f3fe-200d-1f52c.png","sheet_x":18,"sheet_y":45,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F52C","non_qualified":null,"image":"1f469-1f3ff-200d-1f52c.png","sheet_x":18,"sheet_y":46,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Scientist","b":"1F469-200D-1F52C","d":true,"e":true,"f":true,"h":true,"k":[18,41],"o":4},"watch":{"a":"Watch","b":"231A","d":true,"e":true,"f":true,"h":true,"j":["time","accessories"],"k":[52,22],"o":2},"white_heart":{"a":"White Heart","b":"1F90D","d":true,"e":true,"f":true,"h":true,"k":[37,15],"o":12},"one":{"a":"Keycap 1","b":"0031-FE0F-20E3","c":"0031-20E3","d":true,"e":true,"f":true,"h":false,"j":["blue-square","numbers","1"],"k":[0,3],"o":0},"kr":{"a":"South Korea Flag","b":"1F1F0-1F1F7","d":true,"e":true,"f":true,"h":true,"j":["south","korea","nation","flag","country","banner"],"k":[2,44],"n":["flag-kr"],"o":2},"envelope_with_arrow":{"a":"Envelope with Downwards Arrow Above","b":"1F4E9","d":true,"e":true,"f":true,"h":true,"j":["email","communication"],"k":[27,6],"o":2},"technologist":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F4BB","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f4bb.png","sheet_x":46,"sheet_y":3,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F4BB","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f4bb.png","sheet_x":46,"sheet_y":4,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F4BB","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f4bb.png","sheet_x":46,"sheet_y":5,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F4BB","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f4bb.png","sheet_x":46,"sheet_y":6,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F4BB","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f4bb.png","sheet_x":46,"sheet_y":7,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Technologist","b":"1F9D1-200D-1F4BB","d":true,"e":false,"f":false,"h":false,"k":[46,2],"o":12},"outbox_tray":{"a":"Outbox Tray","b":"1F4E4","d":true,"e":true,"f":true,"h":true,"j":["inbox","email"],"k":[27,1],"o":2},"male-technologist":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F4BB","non_qualified":null,"image":"1f468-1f3fb-200d-1f4bb.png","sheet_x":15,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F4BB","non_qualified":null,"image":"1f468-1f3fc-200d-1f4bb.png","sheet_x":15,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F4BB","non_qualified":null,"image":"1f468-1f3fd-200d-1f4bb.png","sheet_x":15,"sheet_y":41,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F4BB","non_qualified":null,"image":"1f468-1f3fe-200d-1f4bb.png","sheet_x":15,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F4BB","non_qualified":null,"image":"1f468-1f3ff-200d-1f4bb.png","sheet_x":15,"sheet_y":43,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Technologist","b":"1F468-200D-1F4BB","d":true,"e":true,"f":true,"h":true,"k":[15,38],"o":4},"alarm_clock":{"a":"Alarm Clock","b":"23F0","d":true,"e":true,"f":true,"h":true,"j":["time","wake"],"k":[52,33],"o":2},"flag-kw":{"a":"Kuwait Flag","b":"1F1F0-1F1FC","d":true,"e":true,"f":true,"h":true,"k":[2,45],"o":2},"two":{"a":"Keycap 2","b":"0032-FE0F-20E3","c":"0032-20E3","d":true,"e":true,"f":true,"h":false,"j":["numbers","2","prime","blue-square"],"k":[0,4],"o":0},"anger":{"a":"Anger Symbol","b":"1F4A2","d":true,"e":true,"f":true,"h":true,"j":["angry","mad"],"k":[25,44],"o":2},"inbox_tray":{"a":"Inbox Tray","b":"1F4E5","d":true,"e":true,"f":true,"h":true,"j":["email","documents"],"k":[27,2],"o":2},"three":{"a":"Keycap 3","b":"0033-FE0F-20E3","c":"0033-20E3","d":true,"e":true,"f":true,"h":false,"j":["3","numbers","prime","blue-square"],"k":[0,5],"o":0},"flag-ky":{"a":"Cayman Islands Flag","b":"1F1F0-1F1FE","d":true,"e":true,"f":true,"h":true,"k":[2,46],"o":2},"stopwatch":{"a":"Stopwatch","b":"23F1-FE0F","c":"23F1","d":true,"e":true,"f":true,"h":true,"j":["time","deadline"],"k":[52,34],"o":2},"female-technologist":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F4BB","non_qualified":null,"image":"1f469-1f3fb-200d-1f4bb.png","sheet_x":18,"sheet_y":24,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F4BB","non_qualified":null,"image":"1f469-1f3fc-200d-1f4bb.png","sheet_x":18,"sheet_y":25,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F4BB","non_qualified":null,"image":"1f469-1f3fd-200d-1f4bb.png","sheet_x":18,"sheet_y":26,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F4BB","non_qualified":null,"image":"1f469-1f3fe-200d-1f4bb.png","sheet_x":18,"sheet_y":27,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F4BB","non_qualified":null,"image":"1f469-1f3ff-200d-1f4bb.png","sheet_x":18,"sheet_y":28,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Technologist","b":"1F469-200D-1F4BB","d":true,"e":true,"f":true,"h":true,"k":[18,23],"o":4},"boom":{"a":"Collision Symbol","b":"1F4A5","d":true,"e":true,"f":true,"h":true,"j":["bomb","explode","explosion","collision","blown"],"k":[25,47],"n":["collision"],"o":2},"flag-kz":{"a":"Kazakhstan Flag","b":"1F1F0-1F1FF","d":true,"e":true,"f":true,"h":true,"k":[2,47],"o":2},"four":{"a":"Keycap 4","b":"0034-FE0F-20E3","c":"0034-20E3","d":true,"e":true,"f":true,"h":false,"j":["4","numbers","blue-square"],"k":[0,6],"o":0},"timer_clock":{"a":"Timer Clock","b":"23F2-FE0F","c":"23F2","d":true,"e":true,"f":true,"h":true,"j":["alarm"],"k":[52,35],"o":2},"singer":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F3A4","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f3a4.png","sheet_x":45,"sheet_y":36,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F3A4","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f3a4.png","sheet_x":45,"sheet_y":37,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F3A4","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f3a4.png","sheet_x":45,"sheet_y":38,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F3A4","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f3a4.png","sheet_x":45,"sheet_y":39,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F3A4","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f3a4.png","sheet_x":45,"sheet_y":40,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Singer","b":"1F9D1-200D-1F3A4","d":true,"e":false,"f":false,"h":false,"k":[45,35],"o":12},"package":{"a":"Package","b":"1F4E6","d":true,"e":true,"f":true,"h":true,"j":["mail","gift","cardboard","box","moving"],"k":[27,3],"o":2},"mailbox":{"a":"Closed Mailbox with Raised Flag","b":"1F4EB","d":true,"e":true,"f":true,"h":true,"j":["email","inbox","communication"],"k":[27,8],"o":2},"flag-la":{"a":"Laos Flag","b":"1F1F1-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[2,48],"o":2},"dizzy":{"a":"Dizzy Symbol","b":"1F4AB","d":true,"e":true,"f":true,"h":true,"j":["star","sparkle","shoot","magic"],"k":[26,1],"o":2},"five":{"a":"Keycap 5","b":"0035-FE0F-20E3","c":"0035-20E3","d":true,"e":true,"f":true,"h":false,"j":["5","numbers","blue-square","prime"],"k":[0,7],"o":0},"male-singer":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F3A4","non_qualified":null,"image":"1f468-1f3fb-200d-1f3a4.png","sheet_x":15,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F3A4","non_qualified":null,"image":"1f468-1f3fc-200d-1f3a4.png","sheet_x":15,"sheet_y":1,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F3A4","non_qualified":null,"image":"1f468-1f3fd-200d-1f3a4.png","sheet_x":15,"sheet_y":2,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F3A4","non_qualified":null,"image":"1f468-1f3fe-200d-1f3a4.png","sheet_x":15,"sheet_y":3,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F3A4","non_qualified":null,"image":"1f468-1f3ff-200d-1f3a4.png","sheet_x":15,"sheet_y":4,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Singer","b":"1F468-200D-1F3A4","d":true,"e":true,"f":true,"h":true,"k":[14,56],"o":4},"mantelpiece_clock":{"a":"Mantelpiece Clock","b":"1F570-FE0F","c":"1F570","d":true,"e":true,"f":true,"h":true,"j":["time"],"k":[29,7],"o":2},"female-singer":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F3A4","non_qualified":null,"image":"1f469-1f3fb-200d-1f3a4.png","sheet_x":17,"sheet_y":47,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F3A4","non_qualified":null,"image":"1f469-1f3fc-200d-1f3a4.png","sheet_x":17,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F3A4","non_qualified":null,"image":"1f469-1f3fd-200d-1f3a4.png","sheet_x":17,"sheet_y":49,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F3A4","non_qualified":null,"image":"1f469-1f3fe-200d-1f3a4.png","sheet_x":17,"sheet_y":50,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F3A4","non_qualified":null,"image":"1f469-1f3ff-200d-1f3a4.png","sheet_x":17,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Singer","b":"1F469-200D-1F3A4","d":true,"e":true,"f":true,"h":true,"k":[17,46],"o":4},"flag-lb":{"a":"Lebanon Flag","b":"1F1F1-1F1E7","d":true,"e":true,"f":true,"h":true,"k":[2,49],"o":2},"six":{"a":"Keycap 6","b":"0036-FE0F-20E3","c":"0036-20E3","d":true,"e":true,"f":true,"h":false,"j":["6","numbers","blue-square"],"k":[0,8],"o":0},"mailbox_closed":{"a":"Closed Mailbox with Lowered Flag","b":"1F4EA","d":true,"e":true,"f":true,"h":true,"j":["email","communication","inbox"],"k":[27,7],"o":2},"sweat_drops":{"a":"Splashing Sweat Symbol","b":"1F4A6","d":true,"e":true,"f":true,"h":true,"j":["water","drip","oops"],"k":[25,48],"o":2},"clock12":{"a":"Clock Face Twelve Oclock","b":"1F55B","d":true,"e":true,"f":true,"h":true,"j":["time","noon","midnight","midday","late","early","schedule"],"k":[28,50],"o":2},"seven":{"a":"Keycap 7","b":"0037-FE0F-20E3","c":"0037-20E3","d":true,"e":true,"f":true,"h":false,"j":["7","numbers","blue-square","prime"],"k":[0,9],"o":0},"mailbox_with_mail":{"a":"Open Mailbox with Raised Flag","b":"1F4EC","d":true,"e":true,"f":true,"h":true,"j":["email","inbox","communication"],"k":[27,9],"o":2},"clock1230":{"a":"Clock Face Twelve-Thirty","b":"1F567","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[29,5],"o":2},"dash":{"a":"Dash Symbol","b":"1F4A8","d":true,"e":true,"f":true,"h":true,"j":["wind","air","fast","shoo","fart","smoke","puff"],"k":[25,50],"o":2},"artist":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F3A8","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f3a8.png","sheet_x":45,"sheet_y":42,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F3A8","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f3a8.png","sheet_x":45,"sheet_y":43,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F3A8","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f3a8.png","sheet_x":45,"sheet_y":44,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F3A8","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f3a8.png","sheet_x":45,"sheet_y":45,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F3A8","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f3a8.png","sheet_x":45,"sheet_y":46,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Artist","b":"1F9D1-200D-1F3A8","d":true,"e":false,"f":false,"h":false,"k":[45,41],"o":12},"flag-lc":{"a":"St. Lucia Flag","b":"1F1F1-1F1E8","d":true,"e":true,"f":true,"h":true,"k":[2,50],"o":2},"hole":{"a":"Hole","b":"1F573-FE0F","c":"1F573","d":true,"e":true,"f":true,"h":true,"j":["embarrassing"],"k":[29,8],"o":2},"male-artist":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F3A8","non_qualified":null,"image":"1f468-1f3fb-200d-1f3a8.png","sheet_x":15,"sheet_y":6,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F3A8","non_qualified":null,"image":"1f468-1f3fc-200d-1f3a8.png","sheet_x":15,"sheet_y":7,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F3A8","non_qualified":null,"image":"1f468-1f3fd-200d-1f3a8.png","sheet_x":15,"sheet_y":8,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F3A8","non_qualified":null,"image":"1f468-1f3fe-200d-1f3a8.png","sheet_x":15,"sheet_y":9,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F3A8","non_qualified":null,"image":"1f468-1f3ff-200d-1f3a8.png","sheet_x":15,"sheet_y":10,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Artist","b":"1F468-200D-1F3A8","d":true,"e":true,"f":true,"h":true,"k":[15,5],"o":4},"clock1":{"a":"Clock Face One Oclock","b":"1F550","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,39],"o":2},"eight":{"a":"Keycap 8","b":"0038-FE0F-20E3","c":"0038-20E3","d":true,"e":true,"f":true,"h":false,"j":["8","blue-square","numbers"],"k":[0,10],"o":0},"mailbox_with_no_mail":{"a":"Open Mailbox with Lowered Flag","b":"1F4ED","d":true,"e":true,"f":true,"h":true,"j":["email","inbox"],"k":[27,10],"o":2},"flag-li":{"a":"Liechtenstein Flag","b":"1F1F1-1F1EE","d":true,"e":true,"f":true,"h":true,"k":[2,51],"o":2},"bomb":{"a":"Bomb","b":"1F4A3","d":true,"e":true,"f":true,"h":true,"j":["boom","explode","explosion","terrorism"],"k":[25,45],"o":2},"nine":{"a":"Keycap 9","b":"0039-FE0F-20E3","c":"0039-20E3","d":true,"e":true,"f":true,"h":false,"j":["blue-square","numbers","9"],"k":[0,11],"o":0},"postbox":{"a":"Postbox","b":"1F4EE","d":true,"e":true,"f":true,"h":true,"j":["email","letter","envelope"],"k":[27,11],"o":2},"female-artist":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F3A8","non_qualified":null,"image":"1f469-1f3fb-200d-1f3a8.png","sheet_x":17,"sheet_y":53,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F3A8","non_qualified":null,"image":"1f469-1f3fc-200d-1f3a8.png","sheet_x":17,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F3A8","non_qualified":null,"image":"1f469-1f3fd-200d-1f3a8.png","sheet_x":17,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F3A8","non_qualified":null,"image":"1f469-1f3fe-200d-1f3a8.png","sheet_x":17,"sheet_y":56,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F3A8","non_qualified":null,"image":"1f469-1f3ff-200d-1f3a8.png","sheet_x":18,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Artist","b":"1F469-200D-1F3A8","d":true,"e":true,"f":true,"h":true,"k":[17,52],"o":4},"clock130":{"a":"Clock Face One-Thirty","b":"1F55C","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,51],"o":2},"flag-lk":{"a":"Sri Lanka Flag","b":"1F1F1-1F1F0","d":true,"e":true,"f":true,"h":true,"k":[2,52],"o":2},"ballot_box_with_ballot":{"a":"Ballot Box with Ballot","b":"1F5F3-FE0F","c":"1F5F3","d":true,"e":true,"f":true,"h":true,"k":[30,28],"o":2},"pilot":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-2708-FE0F","non_qualified":"1F9D1-1F3FB-200D-2708","image":"1f9d1-1f3fb-200d-2708-fe0f.png","sheet_x":48,"sheet_y":5,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-2708-FE0F","non_qualified":"1F9D1-1F3FC-200D-2708","image":"1f9d1-1f3fc-200d-2708-fe0f.png","sheet_x":48,"sheet_y":6,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-2708-FE0F","non_qualified":"1F9D1-1F3FD-200D-2708","image":"1f9d1-1f3fd-200d-2708-fe0f.png","sheet_x":48,"sheet_y":7,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-2708-FE0F","non_qualified":"1F9D1-1F3FE-200D-2708","image":"1f9d1-1f3fe-200d-2708-fe0f.png","sheet_x":48,"sheet_y":8,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-2708-FE0F","non_qualified":"1F9D1-1F3FF-200D-2708","image":"1f9d1-1f3ff-200d-2708-fe0f.png","sheet_x":48,"sheet_y":9,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Pilot","b":"1F9D1-200D-2708-FE0F","c":"1F9D1-200D-2708","d":true,"e":false,"f":false,"h":false,"k":[48,4],"o":12},"keycap_ten":{"a":"Keycap Ten","b":"1F51F","d":true,"e":true,"f":true,"h":true,"j":["numbers","10","blue-square"],"k":[28,2],"o":2},"clock2":{"a":"Clock Face Two Oclock","b":"1F551","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,40],"o":2},"flag-lr":{"a":"Liberia Flag","b":"1F1F1-1F1F7","d":true,"e":true,"f":true,"h":true,"k":[2,53],"o":2},"speech_balloon":{"a":"Speech Balloon","b":"1F4AC","d":true,"e":true,"f":true,"h":true,"j":["bubble","words","message","talk","chatting"],"k":[26,2],"o":2},"eye-in-speech-bubble":{"a":"Eye in Speech Bubble","b":"1F441-FE0F-200D-1F5E8-FE0F","d":true,"e":true,"f":false,"h":false,"k":[12,37],"o":2},"flag-ls":{"a":"Lesotho Flag","b":"1F1F1-1F1F8","d":true,"e":true,"f":true,"h":true,"k":[2,54],"o":2},"clock230":{"a":"Clock Face Two-Thirty","b":"1F55D","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,52],"o":2},"male-pilot":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-2708-FE0F","non_qualified":"1F468-1F3FB-200D-2708","image":"1f468-1f3fb-200d-2708-fe0f.png","sheet_x":17,"sheet_y":15,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-2708-FE0F","non_qualified":"1F468-1F3FC-200D-2708","image":"1f468-1f3fc-200d-2708-fe0f.png","sheet_x":17,"sheet_y":16,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-2708-FE0F","non_qualified":"1F468-1F3FD-200D-2708","image":"1f468-1f3fd-200d-2708-fe0f.png","sheet_x":17,"sheet_y":17,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-2708-FE0F","non_qualified":"1F468-1F3FE-200D-2708","image":"1f468-1f3fe-200d-2708-fe0f.png","sheet_x":17,"sheet_y":18,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-2708-FE0F","non_qualified":"1F468-1F3FF-200D-2708","image":"1f468-1f3ff-200d-2708-fe0f.png","sheet_x":17,"sheet_y":19,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Pilot","b":"1F468-200D-2708-FE0F","c":"1F468-200D-2708","d":true,"e":true,"f":true,"h":true,"k":[17,14],"o":4},"capital_abcd":{"a":"Input Symbol for Latin Capital Letters","b":"1F520","d":true,"e":true,"f":true,"h":true,"j":["alphabet","words","blue-square"],"k":[28,3],"o":2},"pencil2":{"a":"Pencil","b":"270F-FE0F","c":"270F","d":true,"e":true,"f":true,"h":true,"j":["stationery","write","paper","writing","school","study"],"k":[55,10],"o":2},"female-pilot":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-2708-FE0F","non_qualified":"1F469-1F3FB-200D-2708","image":"1f469-1f3fb-200d-2708-fe0f.png","sheet_x":20,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-2708-FE0F","non_qualified":"1F469-1F3FC-200D-2708","image":"1f469-1f3fc-200d-2708-fe0f.png","sheet_x":20,"sheet_y":1,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-2708-FE0F","non_qualified":"1F469-1F3FD-200D-2708","image":"1f469-1f3fd-200d-2708-fe0f.png","sheet_x":20,"sheet_y":2,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-2708-FE0F","non_qualified":"1F469-1F3FE-200D-2708","image":"1f469-1f3fe-200d-2708-fe0f.png","sheet_x":20,"sheet_y":3,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-2708-FE0F","non_qualified":"1F469-1F3FF-200D-2708","image":"1f469-1f3ff-200d-2708-fe0f.png","sheet_x":20,"sheet_y":4,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Pilot","b":"1F469-200D-2708-FE0F","c":"1F469-200D-2708","d":true,"e":true,"f":true,"h":true,"k":[19,56],"o":4},"black_nib":{"a":"Black Nib","b":"2712-FE0F","c":"2712","d":true,"e":true,"f":true,"h":true,"j":["pen","stationery","writing","write"],"k":[55,11],"o":2},"left_speech_bubble":{"a":"Left Speech Bubble","b":"1F5E8-FE0F","c":"1F5E8","d":true,"e":true,"f":true,"h":true,"j":["words","message","talk","chatting"],"k":[30,26],"o":2},"clock3":{"a":"Clock Face Three Oclock","b":"1F552","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,41],"o":2},"abcd":{"a":"Input Symbol for Latin Small Letters","b":"1F521","d":true,"e":true,"f":true,"h":true,"j":["blue-square","alphabet"],"k":[28,4],"o":2},"flag-lt":{"a":"Lithuania Flag","b":"1F1F1-1F1F9","d":true,"e":true,"f":true,"h":true,"k":[2,55],"o":2},"clock330":{"a":"Clock Face Three-Thirty","b":"1F55E","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,53],"o":2},"astronaut":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F680","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f680.png","sheet_x":46,"sheet_y":27,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F680","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f680.png","sheet_x":46,"sheet_y":28,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F680","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f680.png","sheet_x":46,"sheet_y":29,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F680","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f680.png","sheet_x":46,"sheet_y":30,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F680","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f680.png","sheet_x":46,"sheet_y":31,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Astronaut","b":"1F9D1-200D-1F680","d":true,"e":false,"f":false,"h":false,"k":[46,26],"o":12},"flag-lu":{"a":"Luxembourg Flag","b":"1F1F1-1F1FA","d":true,"e":true,"f":true,"h":true,"k":[2,56],"o":2},"right_anger_bubble":{"a":"Right Anger Bubble","b":"1F5EF-FE0F","c":"1F5EF","d":true,"e":true,"f":true,"h":true,"j":["caption","speech","thinking","mad"],"k":[30,27],"o":2},"lower_left_fountain_pen":{"a":"Lower Left Fountain Pen","b":"1F58B-FE0F","c":"1F58B","d":true,"e":true,"f":true,"h":true,"k":[29,45],"o":2},"male-astronaut":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F680","non_qualified":null,"image":"1f468-1f3fb-200d-1f680.png","sheet_x":16,"sheet_y":6,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F680","non_qualified":null,"image":"1f468-1f3fc-200d-1f680.png","sheet_x":16,"sheet_y":7,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F680","non_qualified":null,"image":"1f468-1f3fd-200d-1f680.png","sheet_x":16,"sheet_y":8,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F680","non_qualified":null,"image":"1f468-1f3fe-200d-1f680.png","sheet_x":16,"sheet_y":9,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F680","non_qualified":null,"image":"1f468-1f3ff-200d-1f680.png","sheet_x":16,"sheet_y":10,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Astronaut","b":"1F468-200D-1F680","d":true,"e":true,"f":true,"h":true,"k":[16,5],"o":4},"thought_balloon":{"a":"Thought Balloon","b":"1F4AD","d":true,"e":true,"f":true,"h":true,"j":["bubble","cloud","speech","thinking","dream"],"k":[26,3],"o":2},"symbols":{"a":"Input Symbol for Symbols","b":"1F523","d":true,"e":true,"f":true,"h":true,"j":["blue-square","music","note","ampersand","percent","glyphs","characters"],"k":[28,6],"o":2},"clock4":{"a":"Clock Face Four Oclock","b":"1F553","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,42],"o":2},"flag-lv":{"a":"Latvia Flag","b":"1F1F1-1F1FB","d":true,"e":true,"f":true,"h":true,"k":[3,0],"o":2},"lower_left_ballpoint_pen":{"a":"Lower Left Ballpoint Pen","b":"1F58A-FE0F","c":"1F58A","d":true,"e":true,"f":true,"h":true,"k":[29,44],"o":2},"abc":{"a":"Input Symbol for Latin Letters","b":"1F524","d":true,"e":true,"f":true,"h":true,"j":["blue-square","alphabet"],"k":[28,7],"o":2},"zzz":{"a":"Sleeping Symbol","b":"1F4A4","d":true,"e":true,"f":true,"h":true,"j":["sleepy","tired","dream"],"k":[25,46],"o":2},"lower_left_paintbrush":{"a":"Lower Left Paintbrush","b":"1F58C-FE0F","c":"1F58C","d":true,"e":true,"f":true,"h":true,"k":[29,46],"o":2},"female-astronaut":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F680","non_qualified":null,"image":"1f469-1f3fb-200d-1f680.png","sheet_x":18,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F680","non_qualified":null,"image":"1f469-1f3fc-200d-1f680.png","sheet_x":18,"sheet_y":49,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F680","non_qualified":null,"image":"1f469-1f3fd-200d-1f680.png","sheet_x":18,"sheet_y":50,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F680","non_qualified":null,"image":"1f469-1f3fe-200d-1f680.png","sheet_x":18,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F680","non_qualified":null,"image":"1f469-1f3ff-200d-1f680.png","sheet_x":18,"sheet_y":52,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Astronaut","b":"1F469-200D-1F680","d":true,"e":true,"f":true,"h":true,"k":[18,47],"o":4},"flag-ly":{"a":"Libya Flag","b":"1F1F1-1F1FE","d":true,"e":true,"f":true,"h":true,"k":[3,1],"o":2},"clock430":{"a":"Clock Face Four-Thirty","b":"1F55F","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,54],"o":2},"flag-ma":{"a":"Morocco Flag","b":"1F1F2-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[3,2],"o":2},"a":{"a":"Negative Squared Latin Capital Letter a","b":"1F170-FE0F","c":"1F170","d":true,"e":true,"f":true,"h":true,"j":["red-square","alphabet","letter"],"k":[0,16],"o":2},"clock5":{"a":"Clock Face Five Oclock","b":"1F554","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,43],"o":2},"lower_left_crayon":{"a":"Lower Left Crayon","b":"1F58D-FE0F","c":"1F58D","d":true,"e":true,"f":true,"h":true,"k":[29,47],"o":2},"firefighter":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F692","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f692.png","sheet_x":46,"sheet_y":33,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F692","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f692.png","sheet_x":46,"sheet_y":34,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F692","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f692.png","sheet_x":46,"sheet_y":35,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F692","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f692.png","sheet_x":46,"sheet_y":36,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F692","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f692.png","sheet_x":46,"sheet_y":37,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Firefighter","b":"1F9D1-200D-1F692","d":true,"e":false,"f":false,"h":false,"k":[46,32],"o":12},"male-firefighter":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F692","non_qualified":null,"image":"1f468-1f3fb-200d-1f692.png","sheet_x":16,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F692","non_qualified":null,"image":"1f468-1f3fc-200d-1f692.png","sheet_x":16,"sheet_y":13,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F692","non_qualified":null,"image":"1f468-1f3fd-200d-1f692.png","sheet_x":16,"sheet_y":14,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F692","non_qualified":null,"image":"1f468-1f3fe-200d-1f692.png","sheet_x":16,"sheet_y":15,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F692","non_qualified":null,"image":"1f468-1f3ff-200d-1f692.png","sheet_x":16,"sheet_y":16,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Firefighter","b":"1F468-200D-1F692","d":true,"e":true,"f":true,"h":true,"k":[16,11],"o":4},"memo":{"a":"Memo","b":"1F4DD","d":true,"e":true,"f":true,"h":true,"j":["write","documents","stationery","pencil","paper","writing","legal","exam","quiz","test","study","compose"],"k":[26,51],"n":["pencil"],"o":2},"ab":{"a":"Negative Squared Ab","b":"1F18E","d":true,"e":true,"f":true,"h":true,"j":["red-square","alphabet"],"k":[0,20],"o":2},"flag-mc":{"a":"Monaco Flag","b":"1F1F2-1F1E8","d":true,"e":true,"f":true,"h":true,"k":[3,3],"o":2},"clock530":{"a":"Clock Face Five-Thirty","b":"1F560","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,55],"o":2},"briefcase":{"a":"Briefcase","b":"1F4BC","d":true,"e":true,"f":true,"h":true,"j":["business","documents","work","law","legal","job","career"],"k":[26,18],"o":2},"female-firefighter":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F692","non_qualified":null,"image":"1f469-1f3fb-200d-1f692.png","sheet_x":18,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F692","non_qualified":null,"image":"1f469-1f3fc-200d-1f692.png","sheet_x":18,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F692","non_qualified":null,"image":"1f469-1f3fd-200d-1f692.png","sheet_x":18,"sheet_y":56,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F692","non_qualified":null,"image":"1f469-1f3fe-200d-1f692.png","sheet_x":19,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F692","non_qualified":null,"image":"1f469-1f3ff-200d-1f692.png","sheet_x":19,"sheet_y":1,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Firefighter","b":"1F469-200D-1F692","d":true,"e":true,"f":true,"h":true,"k":[18,53],"o":4},"clock6":{"a":"Clock Face Six Oclock","b":"1F555","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule","dawn","dusk"],"k":[28,44],"o":2},"b":{"a":"Negative Squared Latin Capital Letter B","b":"1F171-FE0F","c":"1F171","d":true,"e":true,"f":true,"h":true,"j":["red-square","alphabet","letter"],"k":[0,17],"o":2},"flag-md":{"a":"Moldova Flag","b":"1F1F2-1F1E9","d":true,"e":true,"f":true,"h":true,"k":[3,4],"o":2},"clock630":{"a":"Clock Face Six-Thirty","b":"1F561","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,56],"o":2},"cl":{"a":"Squared Cl","b":"1F191","d":true,"e":true,"f":true,"h":true,"j":["alphabet","words","red-square"],"k":[0,21],"o":2},"flag-me":{"a":"Montenegro Flag","b":"1F1F2-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[3,5],"o":2},"file_folder":{"a":"File Folder","b":"1F4C1","d":true,"e":true,"f":true,"h":true,"j":["documents","business","office"],"k":[26,23],"o":2},"cop":{"skin_variations":{"1F3FB":{"unified":"1F46E-1F3FB","non_qualified":null,"image":"1f46e-1f3fb.png","sheet_x":21,"sheet_y":50,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F46E-1F3FC","non_qualified":null,"image":"1f46e-1f3fc.png","sheet_x":21,"sheet_y":51,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F46E-1F3FD","non_qualified":null,"image":"1f46e-1f3fd.png","sheet_x":21,"sheet_y":52,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F46E-1F3FE","non_qualified":null,"image":"1f46e-1f3fe.png","sheet_x":21,"sheet_y":53,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F46E-1F3FF","non_qualified":null,"image":"1f46e-1f3ff.png","sheet_x":21,"sheet_y":54,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F46E-200D-2642-FE0F","a":"Police Officer","b":"1F46E","d":true,"e":true,"f":true,"h":false,"k":[21,49],"o":2},"male-police-officer":{"skin_variations":{"1F3FB":{"unified":"1F46E-1F3FB-200D-2642-FE0F","non_qualified":"1F46E-1F3FB-200D-2642","image":"1f46e-1f3fb-200d-2642-fe0f.png","sheet_x":21,"sheet_y":44,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F46E-1F3FC-200D-2642-FE0F","non_qualified":"1F46E-1F3FC-200D-2642","image":"1f46e-1f3fc-200d-2642-fe0f.png","sheet_x":21,"sheet_y":45,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F46E-1F3FD-200D-2642-FE0F","non_qualified":"1F46E-1F3FD-200D-2642","image":"1f46e-1f3fd-200d-2642-fe0f.png","sheet_x":21,"sheet_y":46,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F46E-1F3FE-200D-2642-FE0F","non_qualified":"1F46E-1F3FE-200D-2642","image":"1f46e-1f3fe-200d-2642-fe0f.png","sheet_x":21,"sheet_y":47,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F46E-1F3FF-200D-2642-FE0F","non_qualified":"1F46E-1F3FF-200D-2642","image":"1f46e-1f3ff-200d-2642-fe0f.png","sheet_x":21,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F46E","a":"Male Police Officer","b":"1F46E-200D-2642-FE0F","c":"1F46E-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[21,43],"o":4},"cool":{"a":"Squared Cool","b":"1F192","d":true,"e":true,"f":true,"h":true,"j":["words","blue-square"],"k":[0,22],"o":2},"clock7":{"a":"Clock Face Seven Oclock","b":"1F556","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,45],"o":2},"flag-mf":{"a":"St. Martin Flag","b":"1F1F2-1F1EB","d":true,"e":true,"f":true,"h":true,"k":[3,6],"o":2},"open_file_folder":{"a":"Open File Folder","b":"1F4C2","d":true,"e":true,"f":true,"h":true,"j":["documents","load"],"k":[26,24],"o":2},"card_index_dividers":{"a":"Card Index Dividers","b":"1F5C2-FE0F","c":"1F5C2","d":true,"e":true,"f":true,"h":true,"j":["organizing","business","stationery"],"k":[30,15],"o":2},"flag-mg":{"a":"Madagascar Flag","b":"1F1F2-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[3,7],"o":2},"free":{"a":"Squared Free","b":"1F193","d":true,"e":true,"f":true,"h":true,"j":["blue-square","words"],"k":[0,23],"o":2},"female-police-officer":{"skin_variations":{"1F3FB":{"unified":"1F46E-1F3FB-200D-2640-FE0F","non_qualified":"1F46E-1F3FB-200D-2640","image":"1f46e-1f3fb-200d-2640-fe0f.png","sheet_x":21,"sheet_y":38,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F46E-1F3FC-200D-2640-FE0F","non_qualified":"1F46E-1F3FC-200D-2640","image":"1f46e-1f3fc-200d-2640-fe0f.png","sheet_x":21,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F46E-1F3FD-200D-2640-FE0F","non_qualified":"1F46E-1F3FD-200D-2640","image":"1f46e-1f3fd-200d-2640-fe0f.png","sheet_x":21,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F46E-1F3FE-200D-2640-FE0F","non_qualified":"1F46E-1F3FE-200D-2640","image":"1f46e-1f3fe-200d-2640-fe0f.png","sheet_x":21,"sheet_y":41,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F46E-1F3FF-200D-2640-FE0F","non_qualified":"1F46E-1F3FF-200D-2640","image":"1f46e-1f3ff-200d-2640-fe0f.png","sheet_x":21,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Police Officer","b":"1F46E-200D-2640-FE0F","c":"1F46E-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[21,37],"o":4},"clock730":{"a":"Clock Face Seven-Thirty","b":"1F562","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[29,0],"o":2},"date":{"a":"Calendar","b":"1F4C5","d":true,"e":true,"f":true,"h":true,"j":["calendar","schedule"],"k":[26,27],"o":2},"clock8":{"a":"Clock Face Eight Oclock","b":"1F557","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,46],"o":2},"information_source":{"a":"Information Source","b":"2139-FE0F","c":"2139","d":true,"e":true,"f":true,"h":true,"j":["blue-square","alphabet","letter"],"k":[52,13],"o":2},"sleuth_or_spy":{"skin_variations":{"1F3FB":{"unified":"1F575-1F3FB","non_qualified":null,"image":"1f575-1f3fb.png","sheet_x":29,"sheet_y":28,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F575-1F3FC","non_qualified":null,"image":"1f575-1f3fc.png","sheet_x":29,"sheet_y":29,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F575-1F3FD","non_qualified":null,"image":"1f575-1f3fd.png","sheet_x":29,"sheet_y":30,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F575-1F3FE","non_qualified":null,"image":"1f575-1f3fe.png","sheet_x":29,"sheet_y":31,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F575-1F3FF","non_qualified":null,"image":"1f575-1f3ff.png","sheet_x":29,"sheet_y":32,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F575-FE0F-200D-2642-FE0F","a":"Sleuth or Spy","b":"1F575-FE0F","c":"1F575","d":true,"e":true,"f":true,"h":false,"k":[29,27],"o":2},"flag-mh":{"a":"Marshall Islands Flag","b":"1F1F2-1F1ED","d":true,"e":true,"f":true,"h":true,"k":[3,8],"o":2},"clock830":{"a":"Clock Face Eight-Thirty","b":"1F563","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[29,1],"o":2},"calendar":{"a":"Tear-off Calendar","b":"1F4C6","d":true,"e":true,"f":true,"h":true,"j":["schedule","date","planning"],"k":[26,28],"o":2},"male-detective":{"skin_variations":{"1F3FB":{"unified":"1F575-1F3FB-200D-2642-FE0F","non_qualified":"1F575-1F3FB-200D-2642","image":"1f575-1f3fb-200d-2642-fe0f.png","sheet_x":29,"sheet_y":22,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F575-1F3FC-200D-2642-FE0F","non_qualified":"1F575-1F3FC-200D-2642","image":"1f575-1f3fc-200d-2642-fe0f.png","sheet_x":29,"sheet_y":23,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F575-1F3FD-200D-2642-FE0F","non_qualified":"1F575-1F3FD-200D-2642","image":"1f575-1f3fd-200d-2642-fe0f.png","sheet_x":29,"sheet_y":24,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F575-1F3FE-200D-2642-FE0F","non_qualified":"1F575-1F3FE-200D-2642","image":"1f575-1f3fe-200d-2642-fe0f.png","sheet_x":29,"sheet_y":25,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F575-1F3FF-200D-2642-FE0F","non_qualified":"1F575-1F3FF-200D-2642","image":"1f575-1f3ff-200d-2642-fe0f.png","sheet_x":29,"sheet_y":26,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F575-FE0F","a":"Male Detective","b":"1F575-FE0F-200D-2642-FE0F","d":true,"e":true,"f":true,"h":false,"k":[29,21],"o":4},"flag-mk":{"a":"North Macedonia Flag","b":"1F1F2-1F1F0","d":true,"e":true,"f":true,"h":true,"k":[3,9],"o":2},"id":{"a":"Squared Id","b":"1F194","d":true,"e":true,"f":true,"h":true,"j":["purple-square","words"],"k":[0,24],"o":2},"spiral_note_pad":{"a":"Spiral Note Pad","b":"1F5D2-FE0F","c":"1F5D2","d":true,"e":true,"f":true,"h":true,"k":[30,19],"o":2},"female-detective":{"skin_variations":{"1F3FB":{"unified":"1F575-1F3FB-200D-2640-FE0F","non_qualified":"1F575-1F3FB-200D-2640","image":"1f575-1f3fb-200d-2640-fe0f.png","sheet_x":29,"sheet_y":16,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F575-1F3FC-200D-2640-FE0F","non_qualified":"1F575-1F3FC-200D-2640","image":"1f575-1f3fc-200d-2640-fe0f.png","sheet_x":29,"sheet_y":17,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F575-1F3FD-200D-2640-FE0F","non_qualified":"1F575-1F3FD-200D-2640","image":"1f575-1f3fd-200d-2640-fe0f.png","sheet_x":29,"sheet_y":18,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F575-1F3FE-200D-2640-FE0F","non_qualified":"1F575-1F3FE-200D-2640","image":"1f575-1f3fe-200d-2640-fe0f.png","sheet_x":29,"sheet_y":19,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F575-1F3FF-200D-2640-FE0F","non_qualified":"1F575-1F3FF-200D-2640","image":"1f575-1f3ff-200d-2640-fe0f.png","sheet_x":29,"sheet_y":20,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Detective","b":"1F575-FE0F-200D-2640-FE0F","d":true,"e":true,"f":true,"h":false,"k":[29,15],"o":4},"clock9":{"a":"Clock Face Nine Oclock","b":"1F558","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,47],"o":2},"flag-ml":{"a":"Mali Flag","b":"1F1F2-1F1F1","d":true,"e":true,"f":true,"h":true,"k":[3,10],"o":2},"m":{"a":"Circled Latin Capital Letter M","b":"24C2-FE0F","c":"24C2","d":true,"e":true,"f":true,"h":true,"j":["alphabet","blue-circle","letter"],"k":[52,40],"o":2},"flag-mm":{"a":"Myanmar (burma) Flag","b":"1F1F2-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[3,11],"o":2},"clock930":{"a":"Clock Face Nine-Thirty","b":"1F564","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[29,2],"o":2},"guardsman":{"skin_variations":{"1F3FB":{"unified":"1F482-1F3FB","non_qualified":null,"image":"1f482-1f3fb.png","sheet_x":24,"sheet_y":21,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F482-1F3FC","non_qualified":null,"image":"1f482-1f3fc.png","sheet_x":24,"sheet_y":22,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F482-1F3FD","non_qualified":null,"image":"1f482-1f3fd.png","sheet_x":24,"sheet_y":23,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F482-1F3FE","non_qualified":null,"image":"1f482-1f3fe.png","sheet_x":24,"sheet_y":24,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F482-1F3FF","non_qualified":null,"image":"1f482-1f3ff.png","sheet_x":24,"sheet_y":25,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F482-200D-2642-FE0F","a":"Guardsman","b":"1F482","d":true,"e":true,"f":true,"h":false,"j":["uk","gb","british","male","guy","royal"],"k":[24,20],"o":2},"new":{"a":"Squared New","b":"1F195","d":true,"e":true,"f":true,"h":true,"j":["blue-square","words","start"],"k":[0,25],"o":2},"spiral_calendar_pad":{"a":"Spiral Calendar Pad","b":"1F5D3-FE0F","c":"1F5D3","d":true,"e":true,"f":true,"h":true,"k":[30,20],"o":2},"ng":{"a":"Squared Ng","b":"1F196","d":true,"e":true,"f":true,"h":true,"j":["blue-square","words","shape","icon"],"k":[0,26],"o":2},"card_index":{"a":"Card Index","b":"1F4C7","d":true,"e":true,"f":true,"h":true,"j":["business","stationery"],"k":[26,29],"o":2},"clock10":{"a":"Clock Face Ten Oclock","b":"1F559","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,48],"o":2},"flag-mn":{"a":"Mongolia Flag","b":"1F1F2-1F1F3","d":true,"e":true,"f":true,"h":true,"k":[3,12],"o":2},"male-guard":{"skin_variations":{"1F3FB":{"unified":"1F482-1F3FB-200D-2642-FE0F","non_qualified":"1F482-1F3FB-200D-2642","image":"1f482-1f3fb-200d-2642-fe0f.png","sheet_x":24,"sheet_y":15,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F482-1F3FC-200D-2642-FE0F","non_qualified":"1F482-1F3FC-200D-2642","image":"1f482-1f3fc-200d-2642-fe0f.png","sheet_x":24,"sheet_y":16,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F482-1F3FD-200D-2642-FE0F","non_qualified":"1F482-1F3FD-200D-2642","image":"1f482-1f3fd-200d-2642-fe0f.png","sheet_x":24,"sheet_y":17,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F482-1F3FE-200D-2642-FE0F","non_qualified":"1F482-1F3FE-200D-2642","image":"1f482-1f3fe-200d-2642-fe0f.png","sheet_x":24,"sheet_y":18,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F482-1F3FF-200D-2642-FE0F","non_qualified":"1F482-1F3FF-200D-2642","image":"1f482-1f3ff-200d-2642-fe0f.png","sheet_x":24,"sheet_y":19,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F482","a":"Male Guard","b":"1F482-200D-2642-FE0F","c":"1F482-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[24,14],"o":4},"flag-mo":{"a":"Macao Sar China Flag","b":"1F1F2-1F1F4","d":true,"e":true,"f":true,"h":true,"k":[3,13],"o":2},"clock1030":{"a":"Clock Face Ten-Thirty","b":"1F565","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[29,3],"o":2},"chart_with_upwards_trend":{"a":"Chart with Upwards Trend","b":"1F4C8","d":true,"e":true,"f":true,"h":true,"j":["graph","presentation","stats","recovery","business","economics","money","sales","good","success"],"k":[26,30],"o":2},"o2":{"a":"Negative Squared Latin Capital Letter O","b":"1F17E-FE0F","c":"1F17E","d":true,"e":true,"f":true,"h":true,"j":["alphabet","red-square","letter"],"k":[0,18],"o":2},"female-guard":{"skin_variations":{"1F3FB":{"unified":"1F482-1F3FB-200D-2640-FE0F","non_qualified":"1F482-1F3FB-200D-2640","image":"1f482-1f3fb-200d-2640-fe0f.png","sheet_x":24,"sheet_y":9,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F482-1F3FC-200D-2640-FE0F","non_qualified":"1F482-1F3FC-200D-2640","image":"1f482-1f3fc-200d-2640-fe0f.png","sheet_x":24,"sheet_y":10,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F482-1F3FD-200D-2640-FE0F","non_qualified":"1F482-1F3FD-200D-2640","image":"1f482-1f3fd-200d-2640-fe0f.png","sheet_x":24,"sheet_y":11,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F482-1F3FE-200D-2640-FE0F","non_qualified":"1F482-1F3FE-200D-2640","image":"1f482-1f3fe-200d-2640-fe0f.png","sheet_x":24,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F482-1F3FF-200D-2640-FE0F","non_qualified":"1F482-1F3FF-200D-2640","image":"1f482-1f3ff-200d-2640-fe0f.png","sheet_x":24,"sheet_y":13,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Guard","b":"1F482-200D-2640-FE0F","c":"1F482-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[24,8],"o":4},"chart_with_downwards_trend":{"a":"Chart with Downwards Trend","b":"1F4C9","d":true,"e":true,"f":true,"h":true,"j":["graph","presentation","stats","recession","business","economics","money","sales","bad","failure"],"k":[26,31],"o":2},"flag-mp":{"a":"Northern Mariana Islands Flag","b":"1F1F2-1F1F5","d":true,"e":true,"f":true,"h":true,"k":[3,14],"o":2},"ok":{"a":"Squared Ok","b":"1F197","d":true,"e":true,"f":true,"h":true,"j":["good","agree","yes","blue-square"],"k":[0,27],"o":2},"clock11":{"a":"Clock Face Eleven Oclock","b":"1F55A","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[28,49],"o":2},"construction_worker":{"skin_variations":{"1F3FB":{"unified":"1F477-1F3FB","non_qualified":null,"image":"1f477-1f3fb.png","sheet_x":23,"sheet_y":23,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F477-1F3FC","non_qualified":null,"image":"1f477-1f3fc.png","sheet_x":23,"sheet_y":24,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F477-1F3FD","non_qualified":null,"image":"1f477-1f3fd.png","sheet_x":23,"sheet_y":25,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F477-1F3FE","non_qualified":null,"image":"1f477-1f3fe.png","sheet_x":23,"sheet_y":26,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F477-1F3FF","non_qualified":null,"image":"1f477-1f3ff.png","sheet_x":23,"sheet_y":27,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F477-200D-2642-FE0F","a":"Construction Worker","b":"1F477","d":true,"e":true,"f":true,"h":false,"k":[23,22],"o":2},"male-construction-worker":{"skin_variations":{"1F3FB":{"unified":"1F477-1F3FB-200D-2642-FE0F","non_qualified":"1F477-1F3FB-200D-2642","image":"1f477-1f3fb-200d-2642-fe0f.png","sheet_x":23,"sheet_y":17,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F477-1F3FC-200D-2642-FE0F","non_qualified":"1F477-1F3FC-200D-2642","image":"1f477-1f3fc-200d-2642-fe0f.png","sheet_x":23,"sheet_y":18,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F477-1F3FD-200D-2642-FE0F","non_qualified":"1F477-1F3FD-200D-2642","image":"1f477-1f3fd-200d-2642-fe0f.png","sheet_x":23,"sheet_y":19,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F477-1F3FE-200D-2642-FE0F","non_qualified":"1F477-1F3FE-200D-2642","image":"1f477-1f3fe-200d-2642-fe0f.png","sheet_x":23,"sheet_y":20,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F477-1F3FF-200D-2642-FE0F","non_qualified":"1F477-1F3FF-200D-2642","image":"1f477-1f3ff-200d-2642-fe0f.png","sheet_x":23,"sheet_y":21,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F477","a":"Male Construction Worker","b":"1F477-200D-2642-FE0F","c":"1F477-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[23,16],"o":4},"clock1130":{"a":"Clock Face Eleven-Thirty","b":"1F566","d":true,"e":true,"f":true,"h":true,"j":["time","late","early","schedule"],"k":[29,4],"o":2},"flag-mq":{"a":"Martinique Flag","b":"1F1F2-1F1F6","d":true,"e":true,"f":true,"h":true,"k":[3,15],"o":2},"bar_chart":{"a":"Bar Chart","b":"1F4CA","d":true,"e":true,"f":true,"h":true,"j":["graph","presentation","stats"],"k":[26,32],"o":2},"parking":{"a":"Negative Squared Latin Capital Letter P","b":"1F17F-FE0F","c":"1F17F","d":true,"e":true,"f":true,"h":true,"j":["cars","blue-square","alphabet","letter"],"k":[0,19],"o":2},"new_moon":{"a":"New Moon Symbol","b":"1F311","d":true,"e":true,"f":true,"h":true,"j":["nature","twilight","planet","space","night","evening","sleep"],"k":[5,36],"o":2},"female-construction-worker":{"skin_variations":{"1F3FB":{"unified":"1F477-1F3FB-200D-2640-FE0F","non_qualified":"1F477-1F3FB-200D-2640","image":"1f477-1f3fb-200d-2640-fe0f.png","sheet_x":23,"sheet_y":11,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F477-1F3FC-200D-2640-FE0F","non_qualified":"1F477-1F3FC-200D-2640","image":"1f477-1f3fc-200d-2640-fe0f.png","sheet_x":23,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F477-1F3FD-200D-2640-FE0F","non_qualified":"1F477-1F3FD-200D-2640","image":"1f477-1f3fd-200d-2640-fe0f.png","sheet_x":23,"sheet_y":13,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F477-1F3FE-200D-2640-FE0F","non_qualified":"1F477-1F3FE-200D-2640","image":"1f477-1f3fe-200d-2640-fe0f.png","sheet_x":23,"sheet_y":14,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F477-1F3FF-200D-2640-FE0F","non_qualified":"1F477-1F3FF-200D-2640","image":"1f477-1f3ff-200d-2640-fe0f.png","sheet_x":23,"sheet_y":15,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Construction Worker","b":"1F477-200D-2640-FE0F","c":"1F477-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[23,10],"o":4},"sos":{"a":"Squared Sos","b":"1F198","d":true,"e":true,"f":true,"h":true,"j":["help","red-square","words","emergency","911"],"k":[0,28],"o":2},"clipboard":{"a":"Clipboard","b":"1F4CB","d":true,"e":true,"f":true,"h":true,"j":["stationery","documents"],"k":[26,33],"o":2},"flag-mr":{"a":"Mauritania Flag","b":"1F1F2-1F1F7","d":true,"e":true,"f":true,"h":true,"k":[3,16],"o":2},"prince":{"skin_variations":{"1F3FB":{"unified":"1F934-1F3FB","non_qualified":null,"image":"1f934-1f3fb.png","sheet_x":39,"sheet_y":18,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F934-1F3FC","non_qualified":null,"image":"1f934-1f3fc.png","sheet_x":39,"sheet_y":19,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F934-1F3FD","non_qualified":null,"image":"1f934-1f3fd.png","sheet_x":39,"sheet_y":20,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F934-1F3FE","non_qualified":null,"image":"1f934-1f3fe.png","sheet_x":39,"sheet_y":21,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F934-1F3FF","non_qualified":null,"image":"1f934-1f3ff.png","sheet_x":39,"sheet_y":22,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Prince","b":"1F934","d":true,"e":true,"f":true,"h":true,"j":["boy","man","male","crown","royal","king"],"k":[39,17],"o":4},"waxing_crescent_moon":{"a":"Waxing Crescent Moon Symbol","b":"1F312","d":true,"e":true,"f":true,"h":true,"j":["nature","twilight","planet","space","night","evening","sleep"],"k":[5,37],"o":2},"flag-ms":{"a":"Montserrat Flag","b":"1F1F2-1F1F8","d":true,"e":true,"f":true,"h":true,"k":[3,17],"o":2},"pushpin":{"a":"Pushpin","b":"1F4CC","d":true,"e":true,"f":true,"h":true,"j":["stationery","mark","here"],"k":[26,34],"o":2},"up":{"a":"Squared Up with Exclamation Mark","b":"1F199","d":true,"e":true,"f":true,"h":true,"j":["blue-square","above","high"],"k":[0,29],"o":2},"flag-mt":{"a":"Malta Flag","b":"1F1F2-1F1F9","d":true,"e":true,"f":true,"h":true,"k":[3,18],"o":2},"princess":{"skin_variations":{"1F3FB":{"unified":"1F478-1F3FB","non_qualified":null,"image":"1f478-1f3fb.png","sheet_x":23,"sheet_y":29,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F478-1F3FC","non_qualified":null,"image":"1f478-1f3fc.png","sheet_x":23,"sheet_y":30,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F478-1F3FD","non_qualified":null,"image":"1f478-1f3fd.png","sheet_x":23,"sheet_y":31,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F478-1F3FE","non_qualified":null,"image":"1f478-1f3fe.png","sheet_x":23,"sheet_y":32,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F478-1F3FF","non_qualified":null,"image":"1f478-1f3ff.png","sheet_x":23,"sheet_y":33,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Princess","b":"1F478","d":true,"e":true,"f":true,"h":true,"j":["girl","woman","female","blond","crown","royal","queen"],"k":[23,28],"o":2},"round_pushpin":{"a":"Round Pushpin","b":"1F4CD","d":true,"e":true,"f":true,"h":true,"j":["stationery","location","map","here"],"k":[26,35],"o":2},"first_quarter_moon":{"a":"First Quarter Moon Symbol","b":"1F313","d":true,"e":true,"f":true,"h":true,"j":["nature","twilight","planet","space","night","evening","sleep"],"k":[5,38],"o":2},"vs":{"a":"Squared Vs","b":"1F19A","d":true,"e":true,"f":true,"h":true,"j":["words","orange-square"],"k":[0,30],"o":2},"flag-mu":{"a":"Mauritius Flag","b":"1F1F2-1F1FA","d":true,"e":true,"f":true,"h":true,"k":[3,19],"o":2},"koko":{"a":"Squared Katakana Koko","b":"1F201","d":true,"e":true,"f":true,"h":true,"j":["blue-square","here","katakana","japanese","destination"],"k":[5,4],"o":2},"man_with_turban":{"skin_variations":{"1F3FB":{"unified":"1F473-1F3FB","non_qualified":null,"image":"1f473-1f3fb.png","sheet_x":22,"sheet_y":44,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F473-1F3FC","non_qualified":null,"image":"1f473-1f3fc.png","sheet_x":22,"sheet_y":45,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F473-1F3FD","non_qualified":null,"image":"1f473-1f3fd.png","sheet_x":22,"sheet_y":46,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F473-1F3FE","non_qualified":null,"image":"1f473-1f3fe.png","sheet_x":22,"sheet_y":47,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F473-1F3FF","non_qualified":null,"image":"1f473-1f3ff.png","sheet_x":22,"sheet_y":48,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F473-200D-2642-FE0F","a":"Man with Turban","b":"1F473","d":true,"e":true,"f":true,"h":false,"j":["male","indian","hinduism","arabs"],"k":[22,43],"o":2},"moon":{"a":"Waxing Gibbous Moon Symbol","b":"1F314","d":true,"e":true,"f":true,"h":true,"k":[5,39],"n":["waxing_gibbous_moon"],"o":2},"paperclip":{"a":"Paperclip","b":"1F4CE","d":true,"e":true,"f":true,"h":true,"j":["documents","stationery"],"k":[26,36],"o":2},"linked_paperclips":{"a":"Linked Paperclips","b":"1F587-FE0F","c":"1F587","d":true,"e":true,"f":true,"h":true,"k":[29,43],"o":2},"man-wearing-turban":{"skin_variations":{"1F3FB":{"unified":"1F473-1F3FB-200D-2642-FE0F","non_qualified":"1F473-1F3FB-200D-2642","image":"1f473-1f3fb-200d-2642-fe0f.png","sheet_x":22,"sheet_y":38,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F473-1F3FC-200D-2642-FE0F","non_qualified":"1F473-1F3FC-200D-2642","image":"1f473-1f3fc-200d-2642-fe0f.png","sheet_x":22,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F473-1F3FD-200D-2642-FE0F","non_qualified":"1F473-1F3FD-200D-2642","image":"1f473-1f3fd-200d-2642-fe0f.png","sheet_x":22,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F473-1F3FE-200D-2642-FE0F","non_qualified":"1F473-1F3FE-200D-2642","image":"1f473-1f3fe-200d-2642-fe0f.png","sheet_x":22,"sheet_y":41,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F473-1F3FF-200D-2642-FE0F","non_qualified":"1F473-1F3FF-200D-2642","image":"1f473-1f3ff-200d-2642-fe0f.png","sheet_x":22,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F473","a":"Man Wearing Turban","b":"1F473-200D-2642-FE0F","c":"1F473-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[22,37],"o":4},"sa":{"a":"Squared Katakana Sa","b":"1F202-FE0F","c":"1F202","d":true,"e":true,"f":true,"h":true,"j":["japanese","blue-square","katakana"],"k":[5,5],"o":2},"full_moon":{"a":"Full Moon Symbol","b":"1F315","d":true,"e":true,"f":true,"h":true,"j":["nature","yellow","twilight","planet","space","night","evening","sleep"],"k":[5,40],"o":2},"flag-mv":{"a":"Maldives Flag","b":"1F1F2-1F1FB","d":true,"e":true,"f":true,"h":true,"k":[3,20],"o":2},"flag-mw":{"a":"Malawi Flag","b":"1F1F2-1F1FC","d":true,"e":true,"f":true,"h":true,"k":[3,21],"o":2},"waning_gibbous_moon":{"a":"Waning Gibbous Moon Symbol","b":"1F316","d":true,"e":true,"f":true,"h":true,"j":["nature","twilight","planet","space","night","evening","sleep","waxing_gibbous_moon"],"k":[5,41],"o":2},"woman-wearing-turban":{"skin_variations":{"1F3FB":{"unified":"1F473-1F3FB-200D-2640-FE0F","non_qualified":"1F473-1F3FB-200D-2640","image":"1f473-1f3fb-200d-2640-fe0f.png","sheet_x":22,"sheet_y":32,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F473-1F3FC-200D-2640-FE0F","non_qualified":"1F473-1F3FC-200D-2640","image":"1f473-1f3fc-200d-2640-fe0f.png","sheet_x":22,"sheet_y":33,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F473-1F3FD-200D-2640-FE0F","non_qualified":"1F473-1F3FD-200D-2640","image":"1f473-1f3fd-200d-2640-fe0f.png","sheet_x":22,"sheet_y":34,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F473-1F3FE-200D-2640-FE0F","non_qualified":"1F473-1F3FE-200D-2640","image":"1f473-1f3fe-200d-2640-fe0f.png","sheet_x":22,"sheet_y":35,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F473-1F3FF-200D-2640-FE0F","non_qualified":"1F473-1F3FF-200D-2640","image":"1f473-1f3ff-200d-2640-fe0f.png","sheet_x":22,"sheet_y":36,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Wearing Turban","b":"1F473-200D-2640-FE0F","c":"1F473-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[22,31],"o":4},"u6708":{"a":"Squared Cjk Unified Ideograph-6708","b":"1F237-FE0F","c":"1F237","d":true,"e":true,"f":true,"h":true,"j":["chinese","month","moon","japanese","orange-square","kanji"],"k":[5,13],"o":2},"straight_ruler":{"a":"Straight Ruler","b":"1F4CF","d":true,"e":true,"f":true,"h":true,"j":["stationery","calculate","length","math","school","drawing","architect","sketch"],"k":[26,37],"o":2},"u6709":{"a":"Squared Cjk Unified Ideograph-6709","b":"1F236","d":true,"e":true,"f":true,"h":true,"j":["orange-square","chinese","have","kanji"],"k":[5,12],"o":2},"triangular_ruler":{"a":"Triangular Ruler","b":"1F4D0","d":true,"e":true,"f":true,"h":true,"j":["stationery","math","architect","sketch"],"k":[26,38],"o":2},"man_with_gua_pi_mao":{"skin_variations":{"1F3FB":{"unified":"1F472-1F3FB","non_qualified":null,"image":"1f472-1f3fb.png","sheet_x":22,"sheet_y":26,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F472-1F3FC","non_qualified":null,"image":"1f472-1f3fc.png","sheet_x":22,"sheet_y":27,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F472-1F3FD","non_qualified":null,"image":"1f472-1f3fd.png","sheet_x":22,"sheet_y":28,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F472-1F3FE","non_qualified":null,"image":"1f472-1f3fe.png","sheet_x":22,"sheet_y":29,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F472-1F3FF","non_qualified":null,"image":"1f472-1f3ff.png","sheet_x":22,"sheet_y":30,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man with Gua Pi Mao","b":"1F472","d":true,"e":true,"f":true,"h":true,"j":["male","boy","chinese"],"k":[22,25],"o":2},"flag-mx":{"a":"Mexico Flag","b":"1F1F2-1F1FD","d":true,"e":true,"f":true,"h":true,"k":[3,22],"o":2},"last_quarter_moon":{"a":"Last Quarter Moon Symbol","b":"1F317","d":true,"e":true,"f":true,"h":true,"j":["nature","twilight","planet","space","night","evening","sleep"],"k":[5,42],"o":2},"person_with_headscarf":{"skin_variations":{"1F3FB":{"unified":"1F9D5-1F3FB","non_qualified":null,"image":"1f9d5-1f3fb.png","sheet_x":48,"sheet_y":35,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9D5-1F3FC","non_qualified":null,"image":"1f9d5-1f3fc.png","sheet_x":48,"sheet_y":36,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9D5-1F3FD","non_qualified":null,"image":"1f9d5-1f3fd.png","sheet_x":48,"sheet_y":37,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9D5-1F3FE","non_qualified":null,"image":"1f9d5-1f3fe.png","sheet_x":48,"sheet_y":38,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9D5-1F3FF","non_qualified":null,"image":"1f9d5-1f3ff.png","sheet_x":48,"sheet_y":39,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Person with Headscarf","b":"1F9D5","d":true,"e":true,"f":true,"h":true,"k":[48,34],"o":5},"waning_crescent_moon":{"a":"Waning Crescent Moon Symbol","b":"1F318","d":true,"e":true,"f":true,"h":true,"j":["nature","twilight","planet","space","night","evening","sleep"],"k":[5,43],"o":2},"u6307":{"a":"Squared Cjk Unified Ideograph-6307","b":"1F22F","d":true,"e":true,"f":true,"h":true,"j":["chinese","point","green-square","kanji"],"k":[5,7],"o":2},"scissors":{"a":"Black Scissors","b":"2702-FE0F","c":"2702","d":true,"e":true,"f":true,"h":true,"j":["stationery","cut"],"k":[54,39],"o":2},"flag-my":{"a":"Malaysia Flag","b":"1F1F2-1F1FE","d":true,"e":true,"f":true,"h":true,"k":[3,23],"o":2},"ideograph_advantage":{"a":"Circled Ideograph Advantage","b":"1F250","d":true,"e":true,"f":true,"h":true,"j":["chinese","kanji","obtain","get","circle"],"k":[5,17],"o":2},"man_in_tuxedo":{"skin_variations":{"1F3FB":{"unified":"1F935-1F3FB","non_qualified":null,"image":"1f935-1f3fb.png","sheet_x":39,"sheet_y":24,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F935-1F3FC","non_qualified":null,"image":"1f935-1f3fc.png","sheet_x":39,"sheet_y":25,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F935-1F3FD","non_qualified":null,"image":"1f935-1f3fd.png","sheet_x":39,"sheet_y":26,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F935-1F3FE","non_qualified":null,"image":"1f935-1f3fe.png","sheet_x":39,"sheet_y":27,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F935-1F3FF","non_qualified":null,"image":"1f935-1f3ff.png","sheet_x":39,"sheet_y":28,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man in Tuxedo","b":"1F935","d":true,"e":true,"f":true,"h":true,"j":["couple","marriage","wedding","groom"],"k":[39,23],"o":4},"flag-mz":{"a":"Mozambique Flag","b":"1F1F2-1F1FF","d":true,"e":true,"f":true,"h":true,"k":[3,24],"o":2},"card_file_box":{"a":"Card File Box","b":"1F5C3-FE0F","c":"1F5C3","d":true,"e":true,"f":true,"h":true,"j":["business","stationery"],"k":[30,16],"o":2},"crescent_moon":{"a":"Crescent Moon","b":"1F319","d":true,"e":true,"f":true,"h":true,"j":["night","sleep","sky","evening","magic"],"k":[5,44],"o":2},"flag-na":{"a":"Namibia Flag","b":"1F1F3-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[3,25],"o":2},"bride_with_veil":{"skin_variations":{"1F3FB":{"unified":"1F470-1F3FB","non_qualified":null,"image":"1f470-1f3fb.png","sheet_x":22,"sheet_y":2,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F470-1F3FC","non_qualified":null,"image":"1f470-1f3fc.png","sheet_x":22,"sheet_y":3,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F470-1F3FD","non_qualified":null,"image":"1f470-1f3fd.png","sheet_x":22,"sheet_y":4,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F470-1F3FE","non_qualified":null,"image":"1f470-1f3fe.png","sheet_x":22,"sheet_y":5,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F470-1F3FF","non_qualified":null,"image":"1f470-1f3ff.png","sheet_x":22,"sheet_y":6,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Bride with Veil","b":"1F470","d":true,"e":true,"f":true,"h":true,"j":["couple","marriage","wedding","woman","bride"],"k":[22,1],"o":2},"new_moon_with_face":{"a":"New Moon with Face","b":"1F31A","d":true,"e":true,"f":true,"h":true,"j":["nature","twilight","planet","space","night","evening","sleep"],"k":[5,45],"o":2},"file_cabinet":{"a":"File Cabinet","b":"1F5C4-FE0F","c":"1F5C4","d":true,"e":true,"f":true,"h":true,"j":["filing","organizing"],"k":[30,17],"o":2},"u5272":{"a":"Squared Cjk Unified Ideograph-5272","b":"1F239","d":true,"e":true,"f":true,"h":true,"j":["cut","divide","chinese","kanji","pink-square"],"k":[5,15],"o":2},"wastebasket":{"a":"Wastebasket","b":"1F5D1-FE0F","c":"1F5D1","d":true,"e":true,"f":true,"h":true,"j":["bin","trash","rubbish","garbage","toss"],"k":[30,18],"o":2},"pregnant_woman":{"skin_variations":{"1F3FB":{"unified":"1F930-1F3FB","non_qualified":null,"image":"1f930-1f3fb.png","sheet_x":38,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F930-1F3FC","non_qualified":null,"image":"1f930-1f3fc.png","sheet_x":38,"sheet_y":52,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F930-1F3FD","non_qualified":null,"image":"1f930-1f3fd.png","sheet_x":38,"sheet_y":53,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F930-1F3FE","non_qualified":null,"image":"1f930-1f3fe.png","sheet_x":38,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F930-1F3FF","non_qualified":null,"image":"1f930-1f3ff.png","sheet_x":38,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Pregnant Woman","b":"1F930","d":true,"e":true,"f":true,"h":true,"j":["baby"],"k":[38,50],"o":4},"first_quarter_moon_with_face":{"a":"First Quarter Moon with Face","b":"1F31B","d":true,"e":true,"f":true,"h":true,"j":["nature","twilight","planet","space","night","evening","sleep"],"k":[5,46],"o":2},"flag-nc":{"a":"New Caledonia Flag","b":"1F1F3-1F1E8","d":true,"e":true,"f":true,"h":true,"k":[3,26],"o":2},"u7121":{"a":"Squared Cjk Unified Ideograph-7121","b":"1F21A","d":true,"e":true,"f":true,"h":true,"j":["nothing","chinese","kanji","japanese","orange-square"],"k":[5,6],"o":2},"lock":{"a":"Lock","b":"1F512","d":true,"e":true,"f":true,"h":true,"j":["security","password","padlock"],"k":[27,46],"o":2},"flag-ne":{"a":"Niger Flag","b":"1F1F3-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[3,27],"o":2},"last_quarter_moon_with_face":{"a":"Last Quarter Moon with Face","b":"1F31C","d":true,"e":true,"f":true,"h":true,"j":["nature","twilight","planet","space","night","evening","sleep"],"k":[5,47],"o":2},"breast-feeding":{"skin_variations":{"1F3FB":{"unified":"1F931-1F3FB","non_qualified":null,"image":"1f931-1f3fb.png","sheet_x":39,"sheet_y":0,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F931-1F3FC","non_qualified":null,"image":"1f931-1f3fc.png","sheet_x":39,"sheet_y":1,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F931-1F3FD","non_qualified":null,"image":"1f931-1f3fd.png","sheet_x":39,"sheet_y":2,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F931-1F3FE","non_qualified":null,"image":"1f931-1f3fe.png","sheet_x":39,"sheet_y":3,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F931-1F3FF","non_qualified":null,"image":"1f931-1f3ff.png","sheet_x":39,"sheet_y":4,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Breast-Feeding","b":"1F931","d":true,"e":true,"f":true,"h":true,"k":[38,56],"o":5},"u7981":{"a":"Squared Cjk Unified Ideograph-7981","b":"1F232","d":true,"e":true,"f":true,"h":true,"j":["kanji","japanese","chinese","forbidden","limit","restricted","red-square"],"k":[5,8],"o":2},"accept":{"a":"Circled Ideograph Accept","b":"1F251","d":true,"e":true,"f":true,"h":true,"j":["ok","good","chinese","kanji","agree","yes","orange-circle"],"k":[5,18],"o":2},"angel":{"skin_variations":{"1F3FB":{"unified":"1F47C-1F3FB","non_qualified":null,"image":"1f47c-1f3fb.png","sheet_x":23,"sheet_y":38,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F47C-1F3FC","non_qualified":null,"image":"1f47c-1f3fc.png","sheet_x":23,"sheet_y":39,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F47C-1F3FD","non_qualified":null,"image":"1f47c-1f3fd.png","sheet_x":23,"sheet_y":40,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F47C-1F3FE","non_qualified":null,"image":"1f47c-1f3fe.png","sheet_x":23,"sheet_y":41,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F47C-1F3FF","non_qualified":null,"image":"1f47c-1f3ff.png","sheet_x":23,"sheet_y":42,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Baby Angel","b":"1F47C","d":true,"e":true,"f":true,"h":true,"j":["heaven","wings","halo"],"k":[23,37],"o":2},"unlock":{"a":"Open Lock","b":"1F513","d":true,"e":true,"f":true,"h":true,"j":["privacy","security"],"k":[27,47],"o":2},"flag-nf":{"a":"Norfolk Island Flag","b":"1F1F3-1F1EB","d":true,"e":true,"f":true,"h":true,"k":[3,28],"o":2},"thermometer":{"a":"Thermometer","b":"1F321-FE0F","c":"1F321","d":true,"e":true,"f":true,"h":true,"j":["weather","temperature","hot","cold"],"k":[5,52],"o":2},"flag-ng":{"a":"Nigeria Flag","b":"1F1F3-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[3,29],"o":2},"u7533":{"a":"Squared Cjk Unified Ideograph-7533","b":"1F238","d":true,"e":true,"f":true,"h":true,"j":["chinese","japanese","kanji","orange-square"],"k":[5,14],"o":2},"sunny":{"a":"Black Sun with Rays","b":"2600-FE0F","c":"2600","d":true,"e":true,"f":true,"h":true,"j":["weather","nature","brightness","summer","beach","spring"],"k":[52,49],"o":2},"lock_with_ink_pen":{"a":"Lock with Ink Pen","b":"1F50F","d":true,"e":true,"f":true,"h":true,"j":["security","secret"],"k":[27,43],"o":2},"santa":{"skin_variations":{"1F3FB":{"unified":"1F385-1F3FB","non_qualified":null,"image":"1f385-1f3fb.png","sheet_x":7,"sheet_y":37,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F385-1F3FC","non_qualified":null,"image":"1f385-1f3fc.png","sheet_x":7,"sheet_y":38,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F385-1F3FD","non_qualified":null,"image":"1f385-1f3fd.png","sheet_x":7,"sheet_y":39,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F385-1F3FE","non_qualified":null,"image":"1f385-1f3fe.png","sheet_x":7,"sheet_y":40,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F385-1F3FF","non_qualified":null,"image":"1f385-1f3ff.png","sheet_x":7,"sheet_y":41,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Father Christmas","b":"1F385","d":true,"e":true,"f":true,"h":true,"j":["festival","man","male","xmas","father christmas"],"k":[7,36],"o":2},"closed_lock_with_key":{"a":"Closed Lock with Key","b":"1F510","d":true,"e":true,"f":true,"h":true,"j":["security","privacy"],"k":[27,44],"o":2},"u5408":{"a":"Squared Cjk Unified Ideograph-5408","b":"1F234","d":true,"e":true,"f":true,"h":true,"j":["japanese","chinese","join","kanji","red-square"],"k":[5,10],"o":2},"flag-ni":{"a":"Nicaragua Flag","b":"1F1F3-1F1EE","d":true,"e":true,"f":true,"h":true,"k":[3,30],"o":2},"mrs_claus":{"skin_variations":{"1F3FB":{"unified":"1F936-1F3FB","non_qualified":null,"image":"1f936-1f3fb.png","sheet_x":39,"sheet_y":30,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F936-1F3FC","non_qualified":null,"image":"1f936-1f3fc.png","sheet_x":39,"sheet_y":31,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F936-1F3FD","non_qualified":null,"image":"1f936-1f3fd.png","sheet_x":39,"sheet_y":32,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F936-1F3FE","non_qualified":null,"image":"1f936-1f3fe.png","sheet_x":39,"sheet_y":33,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F936-1F3FF","non_qualified":null,"image":"1f936-1f3ff.png","sheet_x":39,"sheet_y":34,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Mother Christmas","b":"1F936","d":true,"e":true,"f":true,"h":true,"j":["woman","female","xmas","mother christmas"],"k":[39,29],"n":["mother_christmas"],"o":4},"full_moon_with_face":{"a":"Full Moon with Face","b":"1F31D","d":true,"e":true,"f":true,"h":true,"j":["nature","twilight","planet","space","night","evening","sleep"],"k":[5,48],"o":2},"key":{"a":"Key","b":"1F511","d":true,"e":true,"f":true,"h":true,"j":["lock","door","password"],"k":[27,45],"o":2},"superhero":{"skin_variations":{"1F3FB":{"unified":"1F9B8-1F3FB","non_qualified":null,"image":"1f9b8-1f3fb.png","sheet_x":43,"sheet_y":31,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9B8-1F3FC","non_qualified":null,"image":"1f9b8-1f3fc.png","sheet_x":43,"sheet_y":32,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9B8-1F3FD","non_qualified":null,"image":"1f9b8-1f3fd.png","sheet_x":43,"sheet_y":33,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9B8-1F3FE","non_qualified":null,"image":"1f9b8-1f3fe.png","sheet_x":43,"sheet_y":34,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9B8-1F3FF","non_qualified":null,"image":"1f9b8-1f3ff.png","sheet_x":43,"sheet_y":35,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Superhero","b":"1F9B8","d":true,"e":true,"f":true,"h":true,"k":[43,30],"o":11},"flag-nl":{"a":"Netherlands Flag","b":"1F1F3-1F1F1","d":true,"e":true,"f":true,"h":true,"k":[3,31],"o":2},"u7a7a":{"a":"Squared Cjk Unified Ideograph-7a7a","b":"1F233","d":true,"e":true,"f":true,"h":true,"j":["kanji","japanese","chinese","empty","sky","blue-square"],"k":[5,9],"o":2},"sun_with_face":{"a":"Sun with Face","b":"1F31E","d":true,"e":true,"f":true,"h":true,"j":["nature","morning","sky"],"k":[5,49],"o":2},"male_superhero":{"skin_variations":{"1F3FB":{"unified":"1F9B8-1F3FB-200D-2642-FE0F","non_qualified":"1F9B8-1F3FB-200D-2642","image":"1f9b8-1f3fb-200d-2642-fe0f.png","sheet_x":43,"sheet_y":25,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9B8-1F3FC-200D-2642-FE0F","non_qualified":"1F9B8-1F3FC-200D-2642","image":"1f9b8-1f3fc-200d-2642-fe0f.png","sheet_x":43,"sheet_y":26,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9B8-1F3FD-200D-2642-FE0F","non_qualified":"1F9B8-1F3FD-200D-2642","image":"1f9b8-1f3fd-200d-2642-fe0f.png","sheet_x":43,"sheet_y":27,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9B8-1F3FE-200D-2642-FE0F","non_qualified":"1F9B8-1F3FE-200D-2642","image":"1f9b8-1f3fe-200d-2642-fe0f.png","sheet_x":43,"sheet_y":28,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9B8-1F3FF-200D-2642-FE0F","non_qualified":"1F9B8-1F3FF-200D-2642","image":"1f9b8-1f3ff-200d-2642-fe0f.png","sheet_x":43,"sheet_y":29,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Superhero","b":"1F9B8-200D-2642-FE0F","c":"1F9B8-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[43,24],"o":11},"ringed_planet":{"a":"Ringed Planet","b":"1FA90","d":true,"e":true,"f":true,"h":true,"k":[52,4],"o":12},"old_key":{"a":"Old Key","b":"1F5DD-FE0F","c":"1F5DD","d":true,"e":true,"f":true,"h":true,"j":["lock","door","password"],"k":[30,22],"o":2},"congratulations":{"a":"Circled Ideograph Congratulation","b":"3297-FE0F","c":"3297","d":true,"e":true,"f":true,"h":true,"j":["chinese","kanji","japanese","red-circle"],"k":[55,46],"o":2},"flag-no":{"a":"Norway Flag","b":"1F1F3-1F1F4","d":true,"e":true,"f":true,"h":true,"k":[3,32],"o":2},"star":{"a":"White Medium Star","b":"2B50","d":true,"e":true,"f":true,"h":true,"j":["night","yellow"],"k":[55,42],"o":2},"secret":{"a":"Circled Ideograph Secret","b":"3299-FE0F","c":"3299","d":true,"e":true,"f":true,"h":true,"j":["privacy","chinese","sshh","kanji","red-circle"],"k":[55,47],"o":2},"flag-np":{"a":"Nepal Flag","b":"1F1F3-1F1F5","d":true,"e":true,"f":true,"h":true,"k":[3,33],"o":2},"female_superhero":{"skin_variations":{"1F3FB":{"unified":"1F9B8-1F3FB-200D-2640-FE0F","non_qualified":"1F9B8-1F3FB-200D-2640","image":"1f9b8-1f3fb-200d-2640-fe0f.png","sheet_x":43,"sheet_y":19,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9B8-1F3FC-200D-2640-FE0F","non_qualified":"1F9B8-1F3FC-200D-2640","image":"1f9b8-1f3fc-200d-2640-fe0f.png","sheet_x":43,"sheet_y":20,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9B8-1F3FD-200D-2640-FE0F","non_qualified":"1F9B8-1F3FD-200D-2640","image":"1f9b8-1f3fd-200d-2640-fe0f.png","sheet_x":43,"sheet_y":21,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9B8-1F3FE-200D-2640-FE0F","non_qualified":"1F9B8-1F3FE-200D-2640","image":"1f9b8-1f3fe-200d-2640-fe0f.png","sheet_x":43,"sheet_y":22,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9B8-1F3FF-200D-2640-FE0F","non_qualified":"1F9B8-1F3FF-200D-2640","image":"1f9b8-1f3ff-200d-2640-fe0f.png","sheet_x":43,"sheet_y":23,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Superhero","b":"1F9B8-200D-2640-FE0F","c":"1F9B8-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[43,18],"o":11},"hammer":{"a":"Hammer","b":"1F528","d":true,"e":true,"f":true,"h":true,"j":["tools","build","create"],"k":[28,11],"o":2},"star2":{"a":"Glowing Star","b":"1F31F","d":true,"e":true,"f":true,"h":true,"j":["night","sparkle","awesome","good","magic"],"k":[5,50],"o":2},"flag-nr":{"a":"Nauru Flag","b":"1F1F3-1F1F7","d":true,"e":true,"f":true,"h":true,"k":[3,34],"o":2},"axe":{"a":"Axe","b":"1FA93","d":true,"e":true,"f":true,"h":true,"k":[52,7],"o":12},"u55b6":{"a":"Squared Cjk Unified Ideograph-55b6","b":"1F23A","d":true,"e":true,"f":true,"h":true,"j":["japanese","opening hours","orange-square"],"k":[5,16],"o":2},"supervillain":{"skin_variations":{"1F3FB":{"unified":"1F9B9-1F3FB","non_qualified":null,"image":"1f9b9-1f3fb.png","sheet_x":43,"sheet_y":49,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9B9-1F3FC","non_qualified":null,"image":"1f9b9-1f3fc.png","sheet_x":43,"sheet_y":50,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9B9-1F3FD","non_qualified":null,"image":"1f9b9-1f3fd.png","sheet_x":43,"sheet_y":51,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9B9-1F3FE","non_qualified":null,"image":"1f9b9-1f3fe.png","sheet_x":43,"sheet_y":52,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9B9-1F3FF","non_qualified":null,"image":"1f9b9-1f3ff.png","sheet_x":43,"sheet_y":53,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Supervillain","b":"1F9B9","d":true,"e":true,"f":true,"h":true,"k":[43,48],"o":11},"stars":{"a":"Shooting Star","b":"1F320","d":true,"e":true,"f":true,"h":true,"j":["night","photo"],"k":[5,51],"o":2},"u6e80":{"a":"Squared Cjk Unified Ideograph-6e80","b":"1F235","d":true,"e":true,"f":true,"h":true,"j":["full","chinese","japanese","red-square","kanji"],"k":[5,11],"o":2},"flag-nu":{"a":"Niue Flag","b":"1F1F3-1F1FA","d":true,"e":true,"f":true,"h":true,"k":[3,35],"o":2},"pick":{"a":"Pick","b":"26CF-FE0F","c":"26CF","d":true,"e":true,"f":true,"h":true,"j":["tools","dig"],"k":[54,5],"o":2},"male_supervillain":{"skin_variations":{"1F3FB":{"unified":"1F9B9-1F3FB-200D-2642-FE0F","non_qualified":"1F9B9-1F3FB-200D-2642","image":"1f9b9-1f3fb-200d-2642-fe0f.png","sheet_x":43,"sheet_y":43,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9B9-1F3FC-200D-2642-FE0F","non_qualified":"1F9B9-1F3FC-200D-2642","image":"1f9b9-1f3fc-200d-2642-fe0f.png","sheet_x":43,"sheet_y":44,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9B9-1F3FD-200D-2642-FE0F","non_qualified":"1F9B9-1F3FD-200D-2642","image":"1f9b9-1f3fd-200d-2642-fe0f.png","sheet_x":43,"sheet_y":45,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9B9-1F3FE-200D-2642-FE0F","non_qualified":"1F9B9-1F3FE-200D-2642","image":"1f9b9-1f3fe-200d-2642-fe0f.png","sheet_x":43,"sheet_y":46,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9B9-1F3FF-200D-2642-FE0F","non_qualified":"1F9B9-1F3FF-200D-2642","image":"1f9b9-1f3ff-200d-2642-fe0f.png","sheet_x":43,"sheet_y":47,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Supervillain","b":"1F9B9-200D-2642-FE0F","c":"1F9B9-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[43,42],"o":11},"female_supervillain":{"skin_variations":{"1F3FB":{"unified":"1F9B9-1F3FB-200D-2640-FE0F","non_qualified":"1F9B9-1F3FB-200D-2640","image":"1f9b9-1f3fb-200d-2640-fe0f.png","sheet_x":43,"sheet_y":37,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9B9-1F3FC-200D-2640-FE0F","non_qualified":"1F9B9-1F3FC-200D-2640","image":"1f9b9-1f3fc-200d-2640-fe0f.png","sheet_x":43,"sheet_y":38,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9B9-1F3FD-200D-2640-FE0F","non_qualified":"1F9B9-1F3FD-200D-2640","image":"1f9b9-1f3fd-200d-2640-fe0f.png","sheet_x":43,"sheet_y":39,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9B9-1F3FE-200D-2640-FE0F","non_qualified":"1F9B9-1F3FE-200D-2640","image":"1f9b9-1f3fe-200d-2640-fe0f.png","sheet_x":43,"sheet_y":40,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9B9-1F3FF-200D-2640-FE0F","non_qualified":"1F9B9-1F3FF-200D-2640","image":"1f9b9-1f3ff-200d-2640-fe0f.png","sheet_x":43,"sheet_y":41,"added_in":"11.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Supervillain","b":"1F9B9-200D-2640-FE0F","c":"1F9B9-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[43,36],"o":11},"hammer_and_pick":{"a":"Hammer and Pick","b":"2692-FE0F","c":"2692","d":true,"e":true,"f":true,"h":true,"j":["tools","build","create"],"k":[53,41],"o":2},"milky_way":{"a":"Milky Way","b":"1F30C","d":true,"e":true,"f":true,"h":true,"j":["photo","space","stars"],"k":[5,31],"o":2},"red_circle":{"a":"Large Red Circle","b":"1F534","d":true,"e":true,"f":true,"h":true,"j":["shape","error","danger"],"k":[28,23],"o":2},"flag-nz":{"a":"New Zealand Flag","b":"1F1F3-1F1FF","d":true,"e":true,"f":true,"h":true,"k":[3,36],"o":2},"large_orange_circle":{"a":"Large Orange Circle","b":"1F7E0","d":true,"e":true,"f":true,"h":true,"k":[37,3],"o":12},"hammer_and_wrench":{"a":"Hammer and Wrench","b":"1F6E0-FE0F","c":"1F6E0","d":true,"e":true,"f":true,"h":true,"j":["tools","build","create"],"k":[36,42],"o":2},"flag-om":{"a":"Oman Flag","b":"1F1F4-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[3,37],"o":2},"cloud":{"a":"Cloud","b":"2601-FE0F","c":"2601","d":true,"e":true,"f":true,"h":true,"j":["weather","sky"],"k":[52,50],"o":2},"mage":{"skin_variations":{"1F3FB":{"unified":"1F9D9-1F3FB","non_qualified":null,"image":"1f9d9-1f3fb.png","sheet_x":49,"sheet_y":50,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D9-1F3FB-200D-2640-FE0F"},"1F3FC":{"unified":"1F9D9-1F3FC","non_qualified":null,"image":"1f9d9-1f3fc.png","sheet_x":49,"sheet_y":51,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D9-1F3FC-200D-2640-FE0F"},"1F3FD":{"unified":"1F9D9-1F3FD","non_qualified":null,"image":"1f9d9-1f3fd.png","sheet_x":49,"sheet_y":52,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D9-1F3FD-200D-2640-FE0F"},"1F3FE":{"unified":"1F9D9-1F3FE","non_qualified":null,"image":"1f9d9-1f3fe.png","sheet_x":49,"sheet_y":53,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D9-1F3FE-200D-2640-FE0F"},"1F3FF":{"unified":"1F9D9-1F3FF","non_qualified":null,"image":"1f9d9-1f3ff.png","sheet_x":49,"sheet_y":54,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D9-1F3FF-200D-2640-FE0F"}},"obsoleted_by":"1F9D9-200D-2640-FE0F","a":"Mage","b":"1F9D9","d":true,"e":true,"f":true,"h":true,"k":[49,49],"o":5},"dagger_knife":{"a":"Dagger Knife","b":"1F5E1-FE0F","c":"1F5E1","d":true,"e":true,"f":true,"h":true,"k":[30,24],"o":2},"partly_sunny":{"a":"Sun Behind Cloud","b":"26C5","d":true,"e":true,"f":true,"h":true,"j":["weather","nature","cloudy","morning","fall","spring"],"k":[54,2],"o":2},"large_yellow_circle":{"a":"Large Yellow Circle","b":"1F7E1","d":true,"e":true,"f":true,"h":true,"k":[37,4],"o":12},"male_mage":{"skin_variations":{"1F3FB":{"unified":"1F9D9-1F3FB-200D-2642-FE0F","non_qualified":"1F9D9-1F3FB-200D-2642","image":"1f9d9-1f3fb-200d-2642-fe0f.png","sheet_x":49,"sheet_y":44,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9D9-1F3FC-200D-2642-FE0F","non_qualified":"1F9D9-1F3FC-200D-2642","image":"1f9d9-1f3fc-200d-2642-fe0f.png","sheet_x":49,"sheet_y":45,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9D9-1F3FD-200D-2642-FE0F","non_qualified":"1F9D9-1F3FD-200D-2642","image":"1f9d9-1f3fd-200d-2642-fe0f.png","sheet_x":49,"sheet_y":46,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9D9-1F3FE-200D-2642-FE0F","non_qualified":"1F9D9-1F3FE-200D-2642","image":"1f9d9-1f3fe-200d-2642-fe0f.png","sheet_x":49,"sheet_y":47,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9D9-1F3FF-200D-2642-FE0F","non_qualified":"1F9D9-1F3FF-200D-2642","image":"1f9d9-1f3ff-200d-2642-fe0f.png","sheet_x":49,"sheet_y":48,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Mage","b":"1F9D9-200D-2642-FE0F","c":"1F9D9-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[49,43],"o":5},"flag-pa":{"a":"Panama Flag","b":"1F1F5-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[3,38],"o":2},"thunder_cloud_and_rain":{"a":"Thunder Cloud and Rain","b":"26C8-FE0F","c":"26C8","d":true,"e":true,"f":true,"h":true,"k":[54,3],"o":2},"large_green_circle":{"a":"Large Green Circle","b":"1F7E2","d":true,"e":true,"f":true,"h":true,"k":[37,5],"o":12},"female_mage":{"skin_variations":{"1F3FB":{"unified":"1F9D9-1F3FB-200D-2640-FE0F","non_qualified":"1F9D9-1F3FB-200D-2640","image":"1f9d9-1f3fb-200d-2640-fe0f.png","sheet_x":49,"sheet_y":38,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D9-1F3FB"},"1F3FC":{"unified":"1F9D9-1F3FC-200D-2640-FE0F","non_qualified":"1F9D9-1F3FC-200D-2640","image":"1f9d9-1f3fc-200d-2640-fe0f.png","sheet_x":49,"sheet_y":39,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D9-1F3FC"},"1F3FD":{"unified":"1F9D9-1F3FD-200D-2640-FE0F","non_qualified":"1F9D9-1F3FD-200D-2640","image":"1f9d9-1f3fd-200d-2640-fe0f.png","sheet_x":49,"sheet_y":40,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D9-1F3FD"},"1F3FE":{"unified":"1F9D9-1F3FE-200D-2640-FE0F","non_qualified":"1F9D9-1F3FE-200D-2640","image":"1f9d9-1f3fe-200d-2640-fe0f.png","sheet_x":49,"sheet_y":41,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D9-1F3FE"},"1F3FF":{"unified":"1F9D9-1F3FF-200D-2640-FE0F","non_qualified":"1F9D9-1F3FF-200D-2640","image":"1f9d9-1f3ff-200d-2640-fe0f.png","sheet_x":49,"sheet_y":42,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D9-1F3FF"}},"obsoletes":"1F9D9","a":"Female Mage","b":"1F9D9-200D-2640-FE0F","c":"1F9D9-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[49,37],"o":5},"crossed_swords":{"a":"Crossed Swords","b":"2694-FE0F","c":"2694","d":true,"e":true,"f":true,"h":true,"j":["weapon"],"k":[53,43],"o":2},"flag-pe":{"a":"Peru Flag","b":"1F1F5-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[3,39],"o":2},"gun":{"a":"Pistol","b":"1F52B","d":true,"e":true,"f":true,"h":true,"j":["violence","weapon","pistol","revolver"],"k":[28,14],"o":2},"mostly_sunny":{"a":"Mostly Sunny","b":"1F324-FE0F","c":"1F324","d":true,"e":true,"f":true,"h":true,"k":[5,53],"n":["sun_small_cloud"],"o":2},"fairy":{"skin_variations":{"1F3FB":{"unified":"1F9DA-1F3FB","non_qualified":null,"image":"1f9da-1f3fb.png","sheet_x":50,"sheet_y":11,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false,"obsoleted_by":"1F9DA-1F3FB-200D-2640-FE0F"},"1F3FC":{"unified":"1F9DA-1F3FC","non_qualified":null,"image":"1f9da-1f3fc.png","sheet_x":50,"sheet_y":12,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false,"obsoleted_by":"1F9DA-1F3FC-200D-2640-FE0F"},"1F3FD":{"unified":"1F9DA-1F3FD","non_qualified":null,"image":"1f9da-1f3fd.png","sheet_x":50,"sheet_y":13,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false,"obsoleted_by":"1F9DA-1F3FD-200D-2640-FE0F"},"1F3FE":{"unified":"1F9DA-1F3FE","non_qualified":null,"image":"1f9da-1f3fe.png","sheet_x":50,"sheet_y":14,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false,"obsoleted_by":"1F9DA-1F3FE-200D-2640-FE0F"},"1F3FF":{"unified":"1F9DA-1F3FF","non_qualified":null,"image":"1f9da-1f3ff.png","sheet_x":50,"sheet_y":15,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false,"obsoleted_by":"1F9DA-1F3FF-200D-2640-FE0F"}},"obsoleted_by":"1F9DA-200D-2640-FE0F","a":"Fairy","b":"1F9DA","d":true,"e":true,"f":true,"h":true,"k":[50,10],"o":5},"flag-pf":{"a":"French Polynesia Flag","b":"1F1F5-1F1EB","d":true,"e":true,"f":true,"h":true,"k":[3,40],"o":2},"large_blue_circle":{"a":"Large Blue Circle","b":"1F535","d":true,"e":true,"f":true,"h":true,"j":["shape","icon","button"],"k":[28,24],"o":2},"large_purple_circle":{"a":"Large Purple Circle","b":"1F7E3","d":true,"e":true,"f":true,"h":true,"k":[37,6],"o":12},"bow_and_arrow":{"a":"Bow and Arrow","b":"1F3F9","d":true,"e":true,"f":true,"h":true,"j":["sports"],"k":[11,21],"o":2},"male_fairy":{"skin_variations":{"1F3FB":{"unified":"1F9DA-1F3FB-200D-2642-FE0F","non_qualified":"1F9DA-1F3FB-200D-2642","image":"1f9da-1f3fb-200d-2642-fe0f.png","sheet_x":50,"sheet_y":5,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F9DA-1F3FC-200D-2642-FE0F","non_qualified":"1F9DA-1F3FC-200D-2642","image":"1f9da-1f3fc-200d-2642-fe0f.png","sheet_x":50,"sheet_y":6,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F9DA-1F3FD-200D-2642-FE0F","non_qualified":"1F9DA-1F3FD-200D-2642","image":"1f9da-1f3fd-200d-2642-fe0f.png","sheet_x":50,"sheet_y":7,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F9DA-1F3FE-200D-2642-FE0F","non_qualified":"1F9DA-1F3FE-200D-2642","image":"1f9da-1f3fe-200d-2642-fe0f.png","sheet_x":50,"sheet_y":8,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F9DA-1F3FF-200D-2642-FE0F","non_qualified":"1F9DA-1F3FF-200D-2642","image":"1f9da-1f3ff-200d-2642-fe0f.png","sheet_x":50,"sheet_y":9,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"a":"Male Fairy","b":"1F9DA-200D-2642-FE0F","c":"1F9DA-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[50,4],"o":5},"barely_sunny":{"a":"Barely Sunny","b":"1F325-FE0F","c":"1F325","d":true,"e":true,"f":true,"h":true,"k":[5,54],"n":["sun_behind_cloud"],"o":2},"flag-pg":{"a":"Papua New Guinea Flag","b":"1F1F5-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[3,41],"o":2},"shield":{"a":"Shield","b":"1F6E1-FE0F","c":"1F6E1","d":true,"e":true,"f":true,"h":true,"j":["protection","security"],"k":[36,43],"o":2},"partly_sunny_rain":{"a":"Partly Sunny Rain","b":"1F326-FE0F","c":"1F326","d":true,"e":true,"f":true,"h":true,"k":[5,55],"n":["sun_behind_rain_cloud"],"o":2},"large_brown_circle":{"a":"Large Brown Circle","b":"1F7E4","d":true,"e":true,"f":true,"h":true,"k":[37,7],"o":12},"female_fairy":{"skin_variations":{"1F3FB":{"unified":"1F9DA-1F3FB-200D-2640-FE0F","non_qualified":"1F9DA-1F3FB-200D-2640","image":"1f9da-1f3fb-200d-2640-fe0f.png","sheet_x":49,"sheet_y":56,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false,"obsoletes":"1F9DA-1F3FB"},"1F3FC":{"unified":"1F9DA-1F3FC-200D-2640-FE0F","non_qualified":"1F9DA-1F3FC-200D-2640","image":"1f9da-1f3fc-200d-2640-fe0f.png","sheet_x":50,"sheet_y":0,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false,"obsoletes":"1F9DA-1F3FC"},"1F3FD":{"unified":"1F9DA-1F3FD-200D-2640-FE0F","non_qualified":"1F9DA-1F3FD-200D-2640","image":"1f9da-1f3fd-200d-2640-fe0f.png","sheet_x":50,"sheet_y":1,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false,"obsoletes":"1F9DA-1F3FD"},"1F3FE":{"unified":"1F9DA-1F3FE-200D-2640-FE0F","non_qualified":"1F9DA-1F3FE-200D-2640","image":"1f9da-1f3fe-200d-2640-fe0f.png","sheet_x":50,"sheet_y":2,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false,"obsoletes":"1F9DA-1F3FE"},"1F3FF":{"unified":"1F9DA-1F3FF-200D-2640-FE0F","non_qualified":"1F9DA-1F3FF-200D-2640","image":"1f9da-1f3ff-200d-2640-fe0f.png","sheet_x":50,"sheet_y":3,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false,"obsoletes":"1F9DA-1F3FF"}},"obsoletes":"1F9DA","a":"Female Fairy","b":"1F9DA-200D-2640-FE0F","c":"1F9DA-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[49,55],"o":5},"flag-ph":{"a":"Philippines Flag","b":"1F1F5-1F1ED","d":true,"e":true,"f":true,"h":true,"k":[3,42],"o":2},"flag-pk":{"a":"Pakistan Flag","b":"1F1F5-1F1F0","d":true,"e":true,"f":true,"h":true,"k":[3,43],"o":2},"black_circle":{"a":"Medium Black Circle","b":"26AB","d":true,"e":true,"f":true,"h":true,"j":["shape","button","round"],"k":[53,53],"o":2},"wrench":{"a":"Wrench","b":"1F527","d":true,"e":true,"f":true,"h":true,"j":["tools","diy","ikea","fix","maintainer"],"k":[28,10],"o":2},"vampire":{"skin_variations":{"1F3FB":{"unified":"1F9DB-1F3FB","non_qualified":null,"image":"1f9db-1f3fb.png","sheet_x":50,"sheet_y":29,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DB-1F3FB-200D-2640-FE0F"},"1F3FC":{"unified":"1F9DB-1F3FC","non_qualified":null,"image":"1f9db-1f3fc.png","sheet_x":50,"sheet_y":30,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DB-1F3FC-200D-2640-FE0F"},"1F3FD":{"unified":"1F9DB-1F3FD","non_qualified":null,"image":"1f9db-1f3fd.png","sheet_x":50,"sheet_y":31,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DB-1F3FD-200D-2640-FE0F"},"1F3FE":{"unified":"1F9DB-1F3FE","non_qualified":null,"image":"1f9db-1f3fe.png","sheet_x":50,"sheet_y":32,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DB-1F3FE-200D-2640-FE0F"},"1F3FF":{"unified":"1F9DB-1F3FF","non_qualified":null,"image":"1f9db-1f3ff.png","sheet_x":50,"sheet_y":33,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DB-1F3FF-200D-2640-FE0F"}},"obsoleted_by":"1F9DB-200D-2640-FE0F","a":"Vampire","b":"1F9DB","d":true,"e":true,"f":true,"h":true,"k":[50,28],"o":5},"rain_cloud":{"a":"Rain Cloud","b":"1F327-FE0F","c":"1F327","d":true,"e":true,"f":true,"h":true,"k":[5,56],"o":2},"snow_cloud":{"a":"Snow Cloud","b":"1F328-FE0F","c":"1F328","d":true,"e":true,"f":true,"h":true,"k":[6,0],"o":2},"flag-pl":{"a":"Poland Flag","b":"1F1F5-1F1F1","d":true,"e":true,"f":true,"h":true,"k":[3,44],"o":2},"male_vampire":{"skin_variations":{"1F3FB":{"unified":"1F9DB-1F3FB-200D-2642-FE0F","non_qualified":"1F9DB-1F3FB-200D-2642","image":"1f9db-1f3fb-200d-2642-fe0f.png","sheet_x":50,"sheet_y":23,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9DB-1F3FC-200D-2642-FE0F","non_qualified":"1F9DB-1F3FC-200D-2642","image":"1f9db-1f3fc-200d-2642-fe0f.png","sheet_x":50,"sheet_y":24,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9DB-1F3FD-200D-2642-FE0F","non_qualified":"1F9DB-1F3FD-200D-2642","image":"1f9db-1f3fd-200d-2642-fe0f.png","sheet_x":50,"sheet_y":25,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9DB-1F3FE-200D-2642-FE0F","non_qualified":"1F9DB-1F3FE-200D-2642","image":"1f9db-1f3fe-200d-2642-fe0f.png","sheet_x":50,"sheet_y":26,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9DB-1F3FF-200D-2642-FE0F","non_qualified":"1F9DB-1F3FF-200D-2642","image":"1f9db-1f3ff-200d-2642-fe0f.png","sheet_x":50,"sheet_y":27,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Male Vampire","b":"1F9DB-200D-2642-FE0F","c":"1F9DB-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[50,22],"o":5},"nut_and_bolt":{"a":"Nut and Bolt","b":"1F529","d":true,"e":true,"f":true,"h":true,"j":["handy","tools","fix"],"k":[28,12],"o":2},"white_circle":{"a":"Medium White Circle","b":"26AA","d":true,"e":true,"f":true,"h":true,"j":["shape","round"],"k":[53,52],"o":2},"female_vampire":{"skin_variations":{"1F3FB":{"unified":"1F9DB-1F3FB-200D-2640-FE0F","non_qualified":"1F9DB-1F3FB-200D-2640","image":"1f9db-1f3fb-200d-2640-fe0f.png","sheet_x":50,"sheet_y":17,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DB-1F3FB"},"1F3FC":{"unified":"1F9DB-1F3FC-200D-2640-FE0F","non_qualified":"1F9DB-1F3FC-200D-2640","image":"1f9db-1f3fc-200d-2640-fe0f.png","sheet_x":50,"sheet_y":18,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DB-1F3FC"},"1F3FD":{"unified":"1F9DB-1F3FD-200D-2640-FE0F","non_qualified":"1F9DB-1F3FD-200D-2640","image":"1f9db-1f3fd-200d-2640-fe0f.png","sheet_x":50,"sheet_y":19,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DB-1F3FD"},"1F3FE":{"unified":"1F9DB-1F3FE-200D-2640-FE0F","non_qualified":"1F9DB-1F3FE-200D-2640","image":"1f9db-1f3fe-200d-2640-fe0f.png","sheet_x":50,"sheet_y":20,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DB-1F3FE"},"1F3FF":{"unified":"1F9DB-1F3FF-200D-2640-FE0F","non_qualified":"1F9DB-1F3FF-200D-2640","image":"1f9db-1f3ff-200d-2640-fe0f.png","sheet_x":50,"sheet_y":21,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DB-1F3FF"}},"obsoletes":"1F9DB","a":"Female Vampire","b":"1F9DB-200D-2640-FE0F","c":"1F9DB-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[50,16],"o":5},"flag-pm":{"a":"St. Pierre & Miquelon Flag","b":"1F1F5-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[3,45],"o":2},"large_red_square":{"a":"Large Red Square","b":"1F7E5","d":true,"e":true,"f":true,"h":true,"k":[37,8],"o":12},"lightning":{"a":"Lightning","b":"1F329-FE0F","c":"1F329","d":true,"e":true,"f":true,"h":true,"k":[6,1],"n":["lightning_cloud"],"o":2},"gear":{"a":"Gear","b":"2699-FE0F","c":"2699","d":true,"e":true,"f":true,"h":true,"j":["cog"],"k":[53,47],"o":2},"merperson":{"skin_variations":{"1F3FB":{"unified":"1F9DC-1F3FB","non_qualified":null,"image":"1f9dc-1f3fb.png","sheet_x":50,"sheet_y":47,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DC-1F3FB-200D-2642-FE0F"},"1F3FC":{"unified":"1F9DC-1F3FC","non_qualified":null,"image":"1f9dc-1f3fc.png","sheet_x":50,"sheet_y":48,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DC-1F3FC-200D-2642-FE0F"},"1F3FD":{"unified":"1F9DC-1F3FD","non_qualified":null,"image":"1f9dc-1f3fd.png","sheet_x":50,"sheet_y":49,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DC-1F3FD-200D-2642-FE0F"},"1F3FE":{"unified":"1F9DC-1F3FE","non_qualified":null,"image":"1f9dc-1f3fe.png","sheet_x":50,"sheet_y":50,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DC-1F3FE-200D-2642-FE0F"},"1F3FF":{"unified":"1F9DC-1F3FF","non_qualified":null,"image":"1f9dc-1f3ff.png","sheet_x":50,"sheet_y":51,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DC-1F3FF-200D-2642-FE0F"}},"obsoleted_by":"1F9DC-200D-2642-FE0F","a":"Merperson","b":"1F9DC","d":true,"e":true,"f":true,"h":true,"k":[50,46],"o":5},"tornado":{"a":"Tornado","b":"1F32A-FE0F","c":"1F32A","d":true,"e":true,"f":true,"h":true,"j":["weather","cyclone","twister"],"k":[6,2],"n":["tornado_cloud"],"o":2},"large_orange_square":{"a":"Large Orange Square","b":"1F7E7","d":true,"e":true,"f":true,"h":true,"k":[37,10],"o":12},"flag-pn":{"a":"Pitcairn Islands Flag","b":"1F1F5-1F1F3","d":true,"e":true,"f":true,"h":true,"k":[3,46],"o":2},"compression":{"a":"Compression","b":"1F5DC-FE0F","c":"1F5DC","d":true,"e":true,"f":true,"h":true,"k":[30,21],"o":2},"merman":{"skin_variations":{"1F3FB":{"unified":"1F9DC-1F3FB-200D-2642-FE0F","non_qualified":"1F9DC-1F3FB-200D-2642","image":"1f9dc-1f3fb-200d-2642-fe0f.png","sheet_x":50,"sheet_y":41,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DC-1F3FB"},"1F3FC":{"unified":"1F9DC-1F3FC-200D-2642-FE0F","non_qualified":"1F9DC-1F3FC-200D-2642","image":"1f9dc-1f3fc-200d-2642-fe0f.png","sheet_x":50,"sheet_y":42,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DC-1F3FC"},"1F3FD":{"unified":"1F9DC-1F3FD-200D-2642-FE0F","non_qualified":"1F9DC-1F3FD-200D-2642","image":"1f9dc-1f3fd-200d-2642-fe0f.png","sheet_x":50,"sheet_y":43,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DC-1F3FD"},"1F3FE":{"unified":"1F9DC-1F3FE-200D-2642-FE0F","non_qualified":"1F9DC-1F3FE-200D-2642","image":"1f9dc-1f3fe-200d-2642-fe0f.png","sheet_x":50,"sheet_y":44,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DC-1F3FE"},"1F3FF":{"unified":"1F9DC-1F3FF-200D-2642-FE0F","non_qualified":"1F9DC-1F3FF-200D-2642","image":"1f9dc-1f3ff-200d-2642-fe0f.png","sheet_x":50,"sheet_y":45,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DC-1F3FF"}},"obsoletes":"1F9DC","a":"Merman","b":"1F9DC-200D-2642-FE0F","c":"1F9DC-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[50,40],"o":5},"large_yellow_square":{"a":"Large Yellow Square","b":"1F7E8","d":true,"e":true,"f":true,"h":true,"k":[37,11],"o":12},"fog":{"a":"Fog","b":"1F32B-FE0F","c":"1F32B","d":true,"e":true,"f":true,"h":true,"j":["weather"],"k":[6,3],"o":2},"scales":{"a":"Scales","b":"2696-FE0F","c":"2696","d":true,"e":true,"f":true,"h":true,"k":[53,45],"o":2},"flag-pr":{"a":"Puerto Rico Flag","b":"1F1F5-1F1F7","d":true,"e":true,"f":true,"h":true,"k":[3,47],"o":2},"wind_blowing_face":{"a":"Wind Blowing Face","b":"1F32C-FE0F","c":"1F32C","d":true,"e":true,"f":true,"h":true,"k":[6,4],"o":2},"flag-ps":{"a":"Palestinian Territories Flag","b":"1F1F5-1F1F8","d":true,"e":true,"f":true,"h":true,"k":[3,48],"o":2},"mermaid":{"skin_variations":{"1F3FB":{"unified":"1F9DC-1F3FB-200D-2640-FE0F","non_qualified":"1F9DC-1F3FB-200D-2640","image":"1f9dc-1f3fb-200d-2640-fe0f.png","sheet_x":50,"sheet_y":35,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9DC-1F3FC-200D-2640-FE0F","non_qualified":"1F9DC-1F3FC-200D-2640","image":"1f9dc-1f3fc-200d-2640-fe0f.png","sheet_x":50,"sheet_y":36,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9DC-1F3FD-200D-2640-FE0F","non_qualified":"1F9DC-1F3FD-200D-2640","image":"1f9dc-1f3fd-200d-2640-fe0f.png","sheet_x":50,"sheet_y":37,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9DC-1F3FE-200D-2640-FE0F","non_qualified":"1F9DC-1F3FE-200D-2640","image":"1f9dc-1f3fe-200d-2640-fe0f.png","sheet_x":50,"sheet_y":38,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9DC-1F3FF-200D-2640-FE0F","non_qualified":"1F9DC-1F3FF-200D-2640","image":"1f9dc-1f3ff-200d-2640-fe0f.png","sheet_x":50,"sheet_y":39,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Mermaid","b":"1F9DC-200D-2640-FE0F","c":"1F9DC-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[50,34],"o":5},"probing_cane":{"a":"Probing Cane","b":"1F9AF","d":true,"e":true,"f":true,"h":true,"k":[43,3],"o":12},"large_green_square":{"a":"Large Green Square","b":"1F7E9","d":true,"e":true,"f":true,"h":true,"k":[37,12],"o":12},"flag-pt":{"a":"Portugal Flag","b":"1F1F5-1F1F9","d":true,"e":true,"f":true,"h":true,"k":[3,49],"o":2},"link":{"a":"Link Symbol","b":"1F517","d":true,"e":true,"f":true,"h":true,"j":["rings","url"],"k":[27,51],"o":2},"large_blue_square":{"a":"Large Blue Square","b":"1F7E6","d":true,"e":true,"f":true,"h":true,"k":[37,9],"o":12},"elf":{"skin_variations":{"1F3FB":{"unified":"1F9DD-1F3FB","non_qualified":null,"image":"1f9dd-1f3fb.png","sheet_x":51,"sheet_y":8,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DD-1F3FB-200D-2642-FE0F"},"1F3FC":{"unified":"1F9DD-1F3FC","non_qualified":null,"image":"1f9dd-1f3fc.png","sheet_x":51,"sheet_y":9,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DD-1F3FC-200D-2642-FE0F"},"1F3FD":{"unified":"1F9DD-1F3FD","non_qualified":null,"image":"1f9dd-1f3fd.png","sheet_x":51,"sheet_y":10,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DD-1F3FD-200D-2642-FE0F"},"1F3FE":{"unified":"1F9DD-1F3FE","non_qualified":null,"image":"1f9dd-1f3fe.png","sheet_x":51,"sheet_y":11,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DD-1F3FE-200D-2642-FE0F"},"1F3FF":{"unified":"1F9DD-1F3FF","non_qualified":null,"image":"1f9dd-1f3ff.png","sheet_x":51,"sheet_y":12,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9DD-1F3FF-200D-2642-FE0F"}},"obsoleted_by":"1F9DD-200D-2642-FE0F","a":"Elf","b":"1F9DD","d":true,"e":true,"f":true,"h":true,"k":[51,7],"o":5},"cyclone":{"a":"Cyclone","b":"1F300","d":true,"e":true,"f":true,"h":true,"j":["weather","swirl","blue","cloud","vortex","spiral","whirlpool","spin","tornado","hurricane","typhoon"],"k":[5,19],"o":2},"rainbow":{"a":"Rainbow","b":"1F308","d":true,"e":true,"f":true,"h":true,"j":["nature","happy","unicorn_face","photo","sky","spring"],"k":[5,27],"o":2},"male_elf":{"skin_variations":{"1F3FB":{"unified":"1F9DD-1F3FB-200D-2642-FE0F","non_qualified":"1F9DD-1F3FB-200D-2642","image":"1f9dd-1f3fb-200d-2642-fe0f.png","sheet_x":51,"sheet_y":2,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DD-1F3FB"},"1F3FC":{"unified":"1F9DD-1F3FC-200D-2642-FE0F","non_qualified":"1F9DD-1F3FC-200D-2642","image":"1f9dd-1f3fc-200d-2642-fe0f.png","sheet_x":51,"sheet_y":3,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DD-1F3FC"},"1F3FD":{"unified":"1F9DD-1F3FD-200D-2642-FE0F","non_qualified":"1F9DD-1F3FD-200D-2642","image":"1f9dd-1f3fd-200d-2642-fe0f.png","sheet_x":51,"sheet_y":4,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DD-1F3FD"},"1F3FE":{"unified":"1F9DD-1F3FE-200D-2642-FE0F","non_qualified":"1F9DD-1F3FE-200D-2642","image":"1f9dd-1f3fe-200d-2642-fe0f.png","sheet_x":51,"sheet_y":5,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DD-1F3FE"},"1F3FF":{"unified":"1F9DD-1F3FF-200D-2642-FE0F","non_qualified":"1F9DD-1F3FF-200D-2642","image":"1f9dd-1f3ff-200d-2642-fe0f.png","sheet_x":51,"sheet_y":6,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9DD-1F3FF"}},"obsoletes":"1F9DD","a":"Male Elf","b":"1F9DD-200D-2642-FE0F","c":"1F9DD-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[51,1],"o":5},"flag-pw":{"a":"Palau Flag","b":"1F1F5-1F1FC","d":true,"e":true,"f":true,"h":true,"k":[3,50],"o":2},"chains":{"a":"Chains","b":"26D3-FE0F","c":"26D3","d":true,"e":true,"f":true,"h":true,"j":["lock","arrest"],"k":[54,7],"o":2},"large_purple_square":{"a":"Large Purple Square","b":"1F7EA","d":true,"e":true,"f":true,"h":true,"k":[37,13],"o":12},"female_elf":{"skin_variations":{"1F3FB":{"unified":"1F9DD-1F3FB-200D-2640-FE0F","non_qualified":"1F9DD-1F3FB-200D-2640","image":"1f9dd-1f3fb-200d-2640-fe0f.png","sheet_x":50,"sheet_y":53,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9DD-1F3FC-200D-2640-FE0F","non_qualified":"1F9DD-1F3FC-200D-2640","image":"1f9dd-1f3fc-200d-2640-fe0f.png","sheet_x":50,"sheet_y":54,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9DD-1F3FD-200D-2640-FE0F","non_qualified":"1F9DD-1F3FD-200D-2640","image":"1f9dd-1f3fd-200d-2640-fe0f.png","sheet_x":50,"sheet_y":55,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9DD-1F3FE-200D-2640-FE0F","non_qualified":"1F9DD-1F3FE-200D-2640","image":"1f9dd-1f3fe-200d-2640-fe0f.png","sheet_x":50,"sheet_y":56,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9DD-1F3FF-200D-2640-FE0F","non_qualified":"1F9DD-1F3FF-200D-2640","image":"1f9dd-1f3ff-200d-2640-fe0f.png","sheet_x":51,"sheet_y":0,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Female Elf","b":"1F9DD-200D-2640-FE0F","c":"1F9DD-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[50,52],"o":5},"flag-py":{"a":"Paraguay Flag","b":"1F1F5-1F1FE","d":true,"e":true,"f":true,"h":true,"k":[3,51],"o":2},"closed_umbrella":{"a":"Closed Umbrella","b":"1F302","d":true,"e":true,"f":true,"h":true,"j":["weather","rain","drizzle"],"k":[5,21],"o":2},"toolbox":{"a":"Toolbox","b":"1F9F0","d":true,"e":true,"f":true,"h":true,"k":[51,35],"o":11},"large_brown_square":{"a":"Large Brown Square","b":"1F7EB","d":true,"e":true,"f":true,"h":true,"k":[37,14],"o":12},"magnet":{"a":"Magnet","b":"1F9F2","d":true,"e":true,"f":true,"h":true,"k":[51,37],"o":11},"genie":{"obsoleted_by":"1F9DE-200D-2642-FE0F","a":"Genie","b":"1F9DE","d":true,"e":true,"f":true,"h":true,"k":[51,15],"o":5},"flag-qa":{"a":"Qatar Flag","b":"1F1F6-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[3,52],"o":2},"umbrella":{"a":"Umbrella","b":"2602-FE0F","c":"2602","d":true,"e":true,"f":true,"h":true,"j":["rainy","weather","spring"],"k":[52,51],"o":2},"black_large_square":{"a":"Black Large Square","b":"2B1B","d":true,"e":true,"f":true,"h":true,"j":["shape","icon","button"],"k":[55,40],"o":2},"male_genie":{"obsoletes":"1F9DE","a":"Male Genie","b":"1F9DE-200D-2642-FE0F","c":"1F9DE-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[51,14],"o":5},"umbrella_with_rain_drops":{"a":"Umbrella with Rain Drops","b":"2614","d":true,"e":true,"f":true,"h":true,"k":[52,56],"o":2},"flag-re":{"a":"Réunion Flag","b":"1F1F7-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[3,53],"o":2},"white_large_square":{"a":"White Large Square","b":"2B1C","d":true,"e":true,"f":true,"h":true,"j":["shape","icon","stone","button"],"k":[55,41],"o":2},"alembic":{"a":"Alembic","b":"2697-FE0F","c":"2697","d":true,"e":true,"f":true,"h":true,"j":["distilling","science","experiment","chemistry"],"k":[53,46],"o":2},"black_medium_square":{"a":"Black Medium Square","b":"25FC-FE0F","c":"25FC","d":true,"e":true,"f":true,"h":true,"j":["shape","button","icon"],"k":[52,46],"o":2},"test_tube":{"a":"Test Tube","b":"1F9EA","d":true,"e":true,"f":true,"h":true,"k":[51,29],"o":11},"flag-ro":{"a":"Romania Flag","b":"1F1F7-1F1F4","d":true,"e":true,"f":true,"h":true,"k":[3,54],"o":2},"female_genie":{"a":"Female Genie","b":"1F9DE-200D-2640-FE0F","c":"1F9DE-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[51,13],"o":5},"umbrella_on_ground":{"a":"Umbrella on Ground","b":"26F1-FE0F","c":"26F1","d":true,"e":true,"f":true,"h":true,"k":[54,12],"o":2},"zombie":{"obsoleted_by":"1F9DF-200D-2642-FE0F","a":"Zombie","b":"1F9DF","d":true,"e":true,"f":true,"h":true,"k":[51,18],"o":5},"zap":{"a":"High Voltage Sign","b":"26A1","d":true,"e":true,"f":true,"h":true,"j":["thunder","weather","lightning bolt","fast"],"k":[53,51],"o":2},"white_medium_square":{"a":"White Medium Square","b":"25FB-FE0F","c":"25FB","d":true,"e":true,"f":true,"h":true,"j":["shape","stone","icon"],"k":[52,45],"o":2},"flag-rs":{"a":"Serbia Flag","b":"1F1F7-1F1F8","d":true,"e":true,"f":true,"h":true,"k":[3,55],"o":2},"petri_dish":{"a":"Petri Dish","b":"1F9EB","d":true,"e":true,"f":true,"h":true,"k":[51,30],"o":11},"snowflake":{"a":"Snowflake","b":"2744-FE0F","c":"2744","d":true,"e":true,"f":true,"h":true,"j":["winter","season","cold","weather","christmas","xmas"],"k":[55,19],"o":2},"dna":{"a":"Dna Double Helix","b":"1F9EC","d":true,"e":true,"f":true,"h":true,"k":[51,31],"o":11},"male_zombie":{"obsoletes":"1F9DF","a":"Male Zombie","b":"1F9DF-200D-2642-FE0F","c":"1F9DF-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[51,17],"o":5},"black_medium_small_square":{"a":"Black Medium Small Square","b":"25FE","d":true,"e":true,"f":true,"h":true,"j":["icon","shape","button"],"k":[52,48],"o":2},"ru":{"a":"Russia Flag","b":"1F1F7-1F1FA","d":true,"e":true,"f":true,"h":true,"j":["russian","federation","flag","nation","country","banner"],"k":[3,56],"n":["flag-ru"],"o":2},"female_zombie":{"a":"Female Zombie","b":"1F9DF-200D-2640-FE0F","c":"1F9DF-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[51,16],"o":5},"flag-rw":{"a":"Rwanda Flag","b":"1F1F7-1F1FC","d":true,"e":true,"f":true,"h":true,"k":[4,0],"o":2},"snowman":{"a":"Snowman","b":"2603-FE0F","c":"2603","d":true,"e":true,"f":true,"h":true,"j":["winter","season","cold","weather","christmas","xmas","frozen","without_snow"],"k":[52,52],"o":2},"white_medium_small_square":{"a":"White Medium Small Square","b":"25FD","d":true,"e":true,"f":true,"h":true,"j":["shape","stone","icon","button"],"k":[52,47],"o":2},"microscope":{"a":"Microscope","b":"1F52C","d":true,"e":true,"f":true,"h":true,"j":["laboratory","experiment","zoomin","science","study"],"k":[28,15],"o":2},"snowman_without_snow":{"a":"Snowman Without Snow","b":"26C4","d":true,"e":true,"f":true,"h":true,"k":[54,1],"o":2},"telescope":{"a":"Telescope","b":"1F52D","d":true,"e":true,"f":true,"h":true,"j":["stars","space","zoom","science","astronomy"],"k":[28,16],"o":2},"massage":{"skin_variations":{"1F3FB":{"unified":"1F486-1F3FB","non_qualified":null,"image":"1f486-1f3fb.png","sheet_x":24,"sheet_y":52,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F486-1F3FC","non_qualified":null,"image":"1f486-1f3fc.png","sheet_x":24,"sheet_y":53,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F486-1F3FD","non_qualified":null,"image":"1f486-1f3fd.png","sheet_x":24,"sheet_y":54,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F486-1F3FE","non_qualified":null,"image":"1f486-1f3fe.png","sheet_x":24,"sheet_y":55,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F486-1F3FF","non_qualified":null,"image":"1f486-1f3ff.png","sheet_x":24,"sheet_y":56,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F486-200D-2640-FE0F","a":"Face Massage","b":"1F486","d":true,"e":true,"f":true,"h":false,"k":[24,51],"o":2},"black_small_square":{"a":"Black Small Square","b":"25AA-FE0F","c":"25AA","d":true,"e":true,"f":true,"h":true,"j":["shape","icon"],"k":[52,41],"o":2},"flag-sa":{"a":"Saudi Arabia Flag","b":"1F1F8-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[4,1],"o":2},"man-getting-massage":{"skin_variations":{"1F3FB":{"unified":"1F486-1F3FB-200D-2642-FE0F","non_qualified":"1F486-1F3FB-200D-2642","image":"1f486-1f3fb-200d-2642-fe0f.png","sheet_x":24,"sheet_y":46,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F486-1F3FC-200D-2642-FE0F","non_qualified":"1F486-1F3FC-200D-2642","image":"1f486-1f3fc-200d-2642-fe0f.png","sheet_x":24,"sheet_y":47,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F486-1F3FD-200D-2642-FE0F","non_qualified":"1F486-1F3FD-200D-2642","image":"1f486-1f3fd-200d-2642-fe0f.png","sheet_x":24,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F486-1F3FE-200D-2642-FE0F","non_qualified":"1F486-1F3FE-200D-2642","image":"1f486-1f3fe-200d-2642-fe0f.png","sheet_x":24,"sheet_y":49,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F486-1F3FF-200D-2642-FE0F","non_qualified":"1F486-1F3FF-200D-2642","image":"1f486-1f3ff-200d-2642-fe0f.png","sheet_x":24,"sheet_y":50,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Getting Massage","b":"1F486-200D-2642-FE0F","c":"1F486-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[24,45],"o":4},"comet":{"a":"Comet","b":"2604-FE0F","c":"2604","d":true,"e":true,"f":true,"h":true,"j":["space"],"k":[52,53],"o":2},"white_small_square":{"a":"White Small Square","b":"25AB-FE0F","c":"25AB","d":true,"e":true,"f":true,"h":true,"j":["shape","icon"],"k":[52,42],"o":2},"flag-sb":{"a":"Solomon Islands Flag","b":"1F1F8-1F1E7","d":true,"e":true,"f":true,"h":true,"k":[4,2],"o":2},"satellite_antenna":{"a":"Satellite Antenna","b":"1F4E1","d":true,"e":true,"f":true,"h":true,"k":[26,55],"o":2},"large_orange_diamond":{"a":"Large Orange Diamond","b":"1F536","d":true,"e":true,"f":true,"h":true,"j":["shape","jewel","gem"],"k":[28,25],"o":2},"woman-getting-massage":{"skin_variations":{"1F3FB":{"unified":"1F486-1F3FB-200D-2640-FE0F","non_qualified":"1F486-1F3FB-200D-2640","image":"1f486-1f3fb-200d-2640-fe0f.png","sheet_x":24,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F486-1F3FC-200D-2640-FE0F","non_qualified":"1F486-1F3FC-200D-2640","image":"1f486-1f3fc-200d-2640-fe0f.png","sheet_x":24,"sheet_y":41,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F486-1F3FD-200D-2640-FE0F","non_qualified":"1F486-1F3FD-200D-2640","image":"1f486-1f3fd-200d-2640-fe0f.png","sheet_x":24,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F486-1F3FE-200D-2640-FE0F","non_qualified":"1F486-1F3FE-200D-2640","image":"1f486-1f3fe-200d-2640-fe0f.png","sheet_x":24,"sheet_y":43,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F486-1F3FF-200D-2640-FE0F","non_qualified":"1F486-1F3FF-200D-2640","image":"1f486-1f3ff-200d-2640-fe0f.png","sheet_x":24,"sheet_y":44,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F486","a":"Woman Getting Massage","b":"1F486-200D-2640-FE0F","c":"1F486-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[24,39],"o":4},"fire":{"a":"Fire","b":"1F525","d":true,"e":true,"f":true,"h":true,"j":["hot","cook","flame"],"k":[28,8],"o":2},"syringe":{"a":"Syringe","b":"1F489","d":true,"e":true,"f":true,"h":true,"j":["health","hospital","drugs","blood","medicine","needle","doctor","nurse"],"k":[25,19],"o":2},"flag-sc":{"a":"Seychelles Flag","b":"1F1F8-1F1E8","d":true,"e":true,"f":true,"h":true,"k":[4,3],"o":2},"large_blue_diamond":{"a":"Large Blue Diamond","b":"1F537","d":true,"e":true,"f":true,"h":true,"j":["shape","jewel","gem"],"k":[28,26],"o":2},"flag-sd":{"a":"Sudan Flag","b":"1F1F8-1F1E9","d":true,"e":true,"f":true,"h":true,"k":[4,4],"o":2},"droplet":{"a":"Droplet","b":"1F4A7","d":true,"e":true,"f":true,"h":true,"j":["water","drip","faucet","spring"],"k":[25,49],"o":2},"drop_of_blood":{"a":"Drop of Blood","b":"1FA78","d":true,"e":true,"f":true,"h":true,"k":[51,55],"o":12},"haircut":{"skin_variations":{"1F3FB":{"unified":"1F487-1F3FB","non_qualified":null,"image":"1f487-1f3fb.png","sheet_x":25,"sheet_y":13,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F487-1F3FC","non_qualified":null,"image":"1f487-1f3fc.png","sheet_x":25,"sheet_y":14,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F487-1F3FD","non_qualified":null,"image":"1f487-1f3fd.png","sheet_x":25,"sheet_y":15,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F487-1F3FE","non_qualified":null,"image":"1f487-1f3fe.png","sheet_x":25,"sheet_y":16,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F487-1F3FF","non_qualified":null,"image":"1f487-1f3ff.png","sheet_x":25,"sheet_y":17,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F487-200D-2640-FE0F","a":"Haircut","b":"1F487","d":true,"e":true,"f":true,"h":false,"k":[25,12],"o":2},"ocean":{"a":"Water Wave","b":"1F30A","d":true,"e":true,"f":true,"h":true,"j":["sea","water","wave","nature","tsunami","disaster"],"k":[5,29],"o":2},"flag-se":{"a":"Sweden Flag","b":"1F1F8-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[4,5],"o":2},"man-getting-haircut":{"skin_variations":{"1F3FB":{"unified":"1F487-1F3FB-200D-2642-FE0F","non_qualified":"1F487-1F3FB-200D-2642","image":"1f487-1f3fb-200d-2642-fe0f.png","sheet_x":25,"sheet_y":7,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F487-1F3FC-200D-2642-FE0F","non_qualified":"1F487-1F3FC-200D-2642","image":"1f487-1f3fc-200d-2642-fe0f.png","sheet_x":25,"sheet_y":8,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F487-1F3FD-200D-2642-FE0F","non_qualified":"1F487-1F3FD-200D-2642","image":"1f487-1f3fd-200d-2642-fe0f.png","sheet_x":25,"sheet_y":9,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F487-1F3FE-200D-2642-FE0F","non_qualified":"1F487-1F3FE-200D-2642","image":"1f487-1f3fe-200d-2642-fe0f.png","sheet_x":25,"sheet_y":10,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F487-1F3FF-200D-2642-FE0F","non_qualified":"1F487-1F3FF-200D-2642","image":"1f487-1f3ff-200d-2642-fe0f.png","sheet_x":25,"sheet_y":11,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Getting Haircut","b":"1F487-200D-2642-FE0F","c":"1F487-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[25,6],"o":4},"small_orange_diamond":{"a":"Small Orange Diamond","b":"1F538","d":true,"e":true,"f":true,"h":true,"j":["shape","jewel","gem"],"k":[28,27],"o":2},"pill":{"a":"Pill","b":"1F48A","d":true,"e":true,"f":true,"h":true,"j":["health","medicine","doctor","pharmacy","drug"],"k":[25,20],"o":2},"woman-getting-haircut":{"skin_variations":{"1F3FB":{"unified":"1F487-1F3FB-200D-2640-FE0F","non_qualified":"1F487-1F3FB-200D-2640","image":"1f487-1f3fb-200d-2640-fe0f.png","sheet_x":25,"sheet_y":1,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F487-1F3FC-200D-2640-FE0F","non_qualified":"1F487-1F3FC-200D-2640","image":"1f487-1f3fc-200d-2640-fe0f.png","sheet_x":25,"sheet_y":2,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F487-1F3FD-200D-2640-FE0F","non_qualified":"1F487-1F3FD-200D-2640","image":"1f487-1f3fd-200d-2640-fe0f.png","sheet_x":25,"sheet_y":3,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F487-1F3FE-200D-2640-FE0F","non_qualified":"1F487-1F3FE-200D-2640","image":"1f487-1f3fe-200d-2640-fe0f.png","sheet_x":25,"sheet_y":4,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F487-1F3FF-200D-2640-FE0F","non_qualified":"1F487-1F3FF-200D-2640","image":"1f487-1f3ff-200d-2640-fe0f.png","sheet_x":25,"sheet_y":5,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F487","a":"Woman Getting Haircut","b":"1F487-200D-2640-FE0F","c":"1F487-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[25,0],"o":4},"small_blue_diamond":{"a":"Small Blue Diamond","b":"1F539","d":true,"e":true,"f":true,"h":true,"j":["shape","jewel","gem"],"k":[28,28],"o":2},"flag-sg":{"a":"Singapore Flag","b":"1F1F8-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[4,6],"o":2},"adhesive_bandage":{"a":"Adhesive Bandage","b":"1FA79","d":true,"e":true,"f":true,"h":true,"k":[51,56],"o":12},"walking":{"skin_variations":{"1F3FB":{"unified":"1F6B6-1F3FB","non_qualified":null,"image":"1f6b6-1f3fb.png","sheet_x":36,"sheet_y":3,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F6B6-1F3FC","non_qualified":null,"image":"1f6b6-1f3fc.png","sheet_x":36,"sheet_y":4,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F6B6-1F3FD","non_qualified":null,"image":"1f6b6-1f3fd.png","sheet_x":36,"sheet_y":5,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F6B6-1F3FE","non_qualified":null,"image":"1f6b6-1f3fe.png","sheet_x":36,"sheet_y":6,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F6B6-1F3FF","non_qualified":null,"image":"1f6b6-1f3ff.png","sheet_x":36,"sheet_y":7,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F6B6-200D-2642-FE0F","a":"Pedestrian","b":"1F6B6","d":true,"e":true,"f":true,"h":false,"k":[36,2],"o":2},"small_red_triangle":{"a":"Up-Pointing Red Triangle","b":"1F53A","d":true,"e":true,"f":true,"h":true,"j":["shape","direction","up","top"],"k":[28,29],"o":2},"flag-sh":{"a":"St. Helena Flag","b":"1F1F8-1F1ED","d":true,"e":true,"f":true,"h":true,"k":[4,7],"o":2},"stethoscope":{"a":"Stethoscope","b":"1FA7A","d":true,"e":true,"f":true,"h":true,"k":[52,0],"o":12},"man-walking":{"skin_variations":{"1F3FB":{"unified":"1F6B6-1F3FB-200D-2642-FE0F","non_qualified":"1F6B6-1F3FB-200D-2642","image":"1f6b6-1f3fb-200d-2642-fe0f.png","sheet_x":35,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F6B6-1F3FC-200D-2642-FE0F","non_qualified":"1F6B6-1F3FC-200D-2642","image":"1f6b6-1f3fc-200d-2642-fe0f.png","sheet_x":35,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F6B6-1F3FD-200D-2642-FE0F","non_qualified":"1F6B6-1F3FD-200D-2642","image":"1f6b6-1f3fd-200d-2642-fe0f.png","sheet_x":35,"sheet_y":56,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F6B6-1F3FE-200D-2642-FE0F","non_qualified":"1F6B6-1F3FE-200D-2642","image":"1f6b6-1f3fe-200d-2642-fe0f.png","sheet_x":36,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F6B6-1F3FF-200D-2642-FE0F","non_qualified":"1F6B6-1F3FF-200D-2642","image":"1f6b6-1f3ff-200d-2642-fe0f.png","sheet_x":36,"sheet_y":1,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F6B6","a":"Man Walking","b":"1F6B6-200D-2642-FE0F","c":"1F6B6-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[35,53],"o":4},"flag-si":{"a":"Slovenia Flag","b":"1F1F8-1F1EE","d":true,"e":true,"f":true,"h":true,"k":[4,8],"o":2},"door":{"a":"Door","b":"1F6AA","d":true,"e":true,"f":true,"h":true,"j":["house","entry","exit"],"k":[35,1],"o":2},"small_red_triangle_down":{"a":"Down-Pointing Red Triangle","b":"1F53B","d":true,"e":true,"f":true,"h":true,"j":["shape","direction","bottom"],"k":[28,30],"o":2},"flag-sj":{"a":"Svalbard & Jan Mayen Flag","b":"1F1F8-1F1EF","d":true,"e":true,"f":true,"h":true,"k":[4,9],"o":2},"diamond_shape_with_a_dot_inside":{"a":"Diamond Shape with a Dot Inside","b":"1F4A0","d":true,"e":true,"f":true,"h":true,"j":["jewel","blue","gem","crystal","fancy"],"k":[25,42],"o":2},"woman-walking":{"skin_variations":{"1F3FB":{"unified":"1F6B6-1F3FB-200D-2640-FE0F","non_qualified":"1F6B6-1F3FB-200D-2640","image":"1f6b6-1f3fb-200d-2640-fe0f.png","sheet_x":35,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F6B6-1F3FC-200D-2640-FE0F","non_qualified":"1F6B6-1F3FC-200D-2640","image":"1f6b6-1f3fc-200d-2640-fe0f.png","sheet_x":35,"sheet_y":49,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F6B6-1F3FD-200D-2640-FE0F","non_qualified":"1F6B6-1F3FD-200D-2640","image":"1f6b6-1f3fd-200d-2640-fe0f.png","sheet_x":35,"sheet_y":50,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F6B6-1F3FE-200D-2640-FE0F","non_qualified":"1F6B6-1F3FE-200D-2640","image":"1f6b6-1f3fe-200d-2640-fe0f.png","sheet_x":35,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F6B6-1F3FF-200D-2640-FE0F","non_qualified":"1F6B6-1F3FF-200D-2640","image":"1f6b6-1f3ff-200d-2640-fe0f.png","sheet_x":35,"sheet_y":52,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Walking","b":"1F6B6-200D-2640-FE0F","c":"1F6B6-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[35,47],"o":4},"bed":{"a":"Bed","b":"1F6CF-FE0F","c":"1F6CF","d":true,"e":true,"f":true,"h":true,"j":["sleep","rest"],"k":[36,37],"o":2},"radio_button":{"a":"Radio Button","b":"1F518","d":true,"e":true,"f":true,"h":true,"j":["input","old","music","circle"],"k":[27,52],"o":2},"flag-sk":{"a":"Slovakia Flag","b":"1F1F8-1F1F0","d":true,"e":true,"f":true,"h":true,"k":[4,10],"o":2},"standing_person":{"skin_variations":{"1F3FB":{"unified":"1F9CD-1F3FB","non_qualified":null,"image":"1f9cd-1f3fb.png","sheet_x":44,"sheet_y":32,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9CD-1F3FC","non_qualified":null,"image":"1f9cd-1f3fc.png","sheet_x":44,"sheet_y":33,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9CD-1F3FD","non_qualified":null,"image":"1f9cd-1f3fd.png","sheet_x":44,"sheet_y":34,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9CD-1F3FE","non_qualified":null,"image":"1f9cd-1f3fe.png","sheet_x":44,"sheet_y":35,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9CD-1F3FF","non_qualified":null,"image":"1f9cd-1f3ff.png","sheet_x":44,"sheet_y":36,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Standing Person","b":"1F9CD","d":true,"e":true,"f":true,"h":true,"k":[44,31],"o":12},"couch_and_lamp":{"a":"Couch and Lamp","b":"1F6CB-FE0F","c":"1F6CB","d":true,"e":true,"f":true,"h":true,"j":["read","chill"],"k":[36,28],"o":2},"man_standing":{"skin_variations":{"1F3FB":{"unified":"1F9CD-1F3FB-200D-2642-FE0F","non_qualified":"1F9CD-1F3FB-200D-2642","image":"1f9cd-1f3fb-200d-2642-fe0f.png","sheet_x":44,"sheet_y":26,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9CD-1F3FC-200D-2642-FE0F","non_qualified":"1F9CD-1F3FC-200D-2642","image":"1f9cd-1f3fc-200d-2642-fe0f.png","sheet_x":44,"sheet_y":27,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9CD-1F3FD-200D-2642-FE0F","non_qualified":"1F9CD-1F3FD-200D-2642","image":"1f9cd-1f3fd-200d-2642-fe0f.png","sheet_x":44,"sheet_y":28,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9CD-1F3FE-200D-2642-FE0F","non_qualified":"1F9CD-1F3FE-200D-2642","image":"1f9cd-1f3fe-200d-2642-fe0f.png","sheet_x":44,"sheet_y":29,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9CD-1F3FF-200D-2642-FE0F","non_qualified":"1F9CD-1F3FF-200D-2642","image":"1f9cd-1f3ff-200d-2642-fe0f.png","sheet_x":44,"sheet_y":30,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Standing","b":"1F9CD-200D-2642-FE0F","c":"1F9CD-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[44,25],"o":12},"white_square_button":{"a":"White Square Button","b":"1F533","d":true,"e":true,"f":true,"h":true,"j":["shape","input"],"k":[28,22],"o":2},"flag-sl":{"a":"Sierra Leone Flag","b":"1F1F8-1F1F1","d":true,"e":true,"f":true,"h":true,"k":[4,11],"o":2},"chair":{"a":"Chair","b":"1FA91","d":true,"e":true,"f":true,"h":true,"k":[52,5],"o":12},"toilet":{"a":"Toilet","b":"1F6BD","d":true,"e":true,"f":true,"h":true,"j":["restroom","wc","washroom","bathroom","potty"],"k":[36,14],"o":2},"black_square_button":{"a":"Black Square Button","b":"1F532","d":true,"e":true,"f":true,"h":true,"j":["shape","input","frame"],"k":[28,21],"o":2},"flag-sm":{"a":"San Marino Flag","b":"1F1F8-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[4,12],"o":2},"woman_standing":{"skin_variations":{"1F3FB":{"unified":"1F9CD-1F3FB-200D-2640-FE0F","non_qualified":"1F9CD-1F3FB-200D-2640","image":"1f9cd-1f3fb-200d-2640-fe0f.png","sheet_x":44,"sheet_y":20,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9CD-1F3FC-200D-2640-FE0F","non_qualified":"1F9CD-1F3FC-200D-2640","image":"1f9cd-1f3fc-200d-2640-fe0f.png","sheet_x":44,"sheet_y":21,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9CD-1F3FD-200D-2640-FE0F","non_qualified":"1F9CD-1F3FD-200D-2640","image":"1f9cd-1f3fd-200d-2640-fe0f.png","sheet_x":44,"sheet_y":22,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9CD-1F3FE-200D-2640-FE0F","non_qualified":"1F9CD-1F3FE-200D-2640","image":"1f9cd-1f3fe-200d-2640-fe0f.png","sheet_x":44,"sheet_y":23,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9CD-1F3FF-200D-2640-FE0F","non_qualified":"1F9CD-1F3FF-200D-2640","image":"1f9cd-1f3ff-200d-2640-fe0f.png","sheet_x":44,"sheet_y":24,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Standing","b":"1F9CD-200D-2640-FE0F","c":"1F9CD-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[44,19],"o":12},"kneeling_person":{"skin_variations":{"1F3FB":{"unified":"1F9CE-1F3FB","non_qualified":null,"image":"1f9ce-1f3fb.png","sheet_x":44,"sheet_y":50,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9CE-1F3FC","non_qualified":null,"image":"1f9ce-1f3fc.png","sheet_x":44,"sheet_y":51,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9CE-1F3FD","non_qualified":null,"image":"1f9ce-1f3fd.png","sheet_x":44,"sheet_y":52,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9CE-1F3FE","non_qualified":null,"image":"1f9ce-1f3fe.png","sheet_x":44,"sheet_y":53,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9CE-1F3FF","non_qualified":null,"image":"1f9ce-1f3ff.png","sheet_x":44,"sheet_y":54,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Kneeling Person","b":"1F9CE","d":true,"e":true,"f":true,"h":true,"k":[44,49],"o":12},"shower":{"a":"Shower","b":"1F6BF","d":true,"e":true,"f":true,"h":true,"j":["clean","water","bathroom"],"k":[36,16],"o":2},"flag-sn":{"a":"Senegal Flag","b":"1F1F8-1F1F3","d":true,"e":true,"f":true,"h":true,"k":[4,13],"o":2},"bathtub":{"a":"Bathtub","b":"1F6C1","d":true,"e":true,"f":true,"h":true,"j":["clean","shower","bathroom"],"k":[36,23],"o":2},"flag-so":{"a":"Somalia Flag","b":"1F1F8-1F1F4","d":true,"e":true,"f":true,"h":true,"k":[4,14],"o":2},"man_kneeling":{"skin_variations":{"1F3FB":{"unified":"1F9CE-1F3FB-200D-2642-FE0F","non_qualified":"1F9CE-1F3FB-200D-2642","image":"1f9ce-1f3fb-200d-2642-fe0f.png","sheet_x":44,"sheet_y":44,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9CE-1F3FC-200D-2642-FE0F","non_qualified":"1F9CE-1F3FC-200D-2642","image":"1f9ce-1f3fc-200d-2642-fe0f.png","sheet_x":44,"sheet_y":45,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9CE-1F3FD-200D-2642-FE0F","non_qualified":"1F9CE-1F3FD-200D-2642","image":"1f9ce-1f3fd-200d-2642-fe0f.png","sheet_x":44,"sheet_y":46,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9CE-1F3FE-200D-2642-FE0F","non_qualified":"1F9CE-1F3FE-200D-2642","image":"1f9ce-1f3fe-200d-2642-fe0f.png","sheet_x":44,"sheet_y":47,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9CE-1F3FF-200D-2642-FE0F","non_qualified":"1F9CE-1F3FF-200D-2642","image":"1f9ce-1f3ff-200d-2642-fe0f.png","sheet_x":44,"sheet_y":48,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Kneeling","b":"1F9CE-200D-2642-FE0F","c":"1F9CE-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[44,43],"o":12},"flag-sr":{"a":"Suriname Flag","b":"1F1F8-1F1F7","d":true,"e":true,"f":true,"h":true,"k":[4,15],"o":2},"woman_kneeling":{"skin_variations":{"1F3FB":{"unified":"1F9CE-1F3FB-200D-2640-FE0F","non_qualified":"1F9CE-1F3FB-200D-2640","image":"1f9ce-1f3fb-200d-2640-fe0f.png","sheet_x":44,"sheet_y":38,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9CE-1F3FC-200D-2640-FE0F","non_qualified":"1F9CE-1F3FC-200D-2640","image":"1f9ce-1f3fc-200d-2640-fe0f.png","sheet_x":44,"sheet_y":39,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9CE-1F3FD-200D-2640-FE0F","non_qualified":"1F9CE-1F3FD-200D-2640","image":"1f9ce-1f3fd-200d-2640-fe0f.png","sheet_x":44,"sheet_y":40,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9CE-1F3FE-200D-2640-FE0F","non_qualified":"1F9CE-1F3FE-200D-2640","image":"1f9ce-1f3fe-200d-2640-fe0f.png","sheet_x":44,"sheet_y":41,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9CE-1F3FF-200D-2640-FE0F","non_qualified":"1F9CE-1F3FF-200D-2640","image":"1f9ce-1f3ff-200d-2640-fe0f.png","sheet_x":44,"sheet_y":42,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Kneeling","b":"1F9CE-200D-2640-FE0F","c":"1F9CE-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[44,37],"o":12},"razor":{"a":"Razor","b":"1FA92","d":true,"e":true,"f":true,"h":true,"k":[52,6],"o":12},"person_with_probing_cane":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F9AF","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f9af.png","sheet_x":47,"sheet_y":8,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F9AF","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f9af.png","sheet_x":47,"sheet_y":9,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F9AF","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f9af.png","sheet_x":47,"sheet_y":10,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F9AF","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f9af.png","sheet_x":47,"sheet_y":11,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F9AF","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f9af.png","sheet_x":47,"sheet_y":12,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Person with Probing Cane","b":"1F9D1-200D-1F9AF","d":true,"e":false,"f":false,"h":false,"k":[47,7],"o":12},"flag-ss":{"a":"South Sudan Flag","b":"1F1F8-1F1F8","d":true,"e":true,"f":true,"h":true,"k":[4,16],"o":2},"lotion_bottle":{"a":"Lotion Bottle","b":"1F9F4","d":true,"e":true,"f":true,"h":true,"k":[51,39],"o":11},"flag-st":{"a":"São Tomé & Príncipe Flag","b":"1F1F8-1F1F9","d":true,"e":true,"f":true,"h":true,"k":[4,17],"o":2},"safety_pin":{"a":"Safety Pin","b":"1F9F7","d":true,"e":true,"f":true,"h":true,"k":[51,42],"o":11},"man_with_probing_cane":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F9AF","non_qualified":null,"image":"1f468-1f3fb-200d-1f9af.png","sheet_x":16,"sheet_y":18,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F9AF","non_qualified":null,"image":"1f468-1f3fc-200d-1f9af.png","sheet_x":16,"sheet_y":19,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F9AF","non_qualified":null,"image":"1f468-1f3fd-200d-1f9af.png","sheet_x":16,"sheet_y":20,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F9AF","non_qualified":null,"image":"1f468-1f3fe-200d-1f9af.png","sheet_x":16,"sheet_y":21,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F9AF","non_qualified":null,"image":"1f468-1f3ff-200d-1f9af.png","sheet_x":16,"sheet_y":22,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man with Probing Cane","b":"1F468-200D-1F9AF","d":true,"e":true,"f":true,"h":true,"k":[16,17],"o":12},"broom":{"a":"Broom","b":"1F9F9","d":true,"e":true,"f":true,"h":true,"k":[51,44],"o":11},"woman_with_probing_cane":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F9AF","non_qualified":null,"image":"1f469-1f3fb-200d-1f9af.png","sheet_x":19,"sheet_y":3,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F9AF","non_qualified":null,"image":"1f469-1f3fc-200d-1f9af.png","sheet_x":19,"sheet_y":4,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F9AF","non_qualified":null,"image":"1f469-1f3fd-200d-1f9af.png","sheet_x":19,"sheet_y":5,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F9AF","non_qualified":null,"image":"1f469-1f3fe-200d-1f9af.png","sheet_x":19,"sheet_y":6,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F9AF","non_qualified":null,"image":"1f469-1f3ff-200d-1f9af.png","sheet_x":19,"sheet_y":7,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman with Probing Cane","b":"1F469-200D-1F9AF","d":true,"e":true,"f":true,"h":true,"k":[19,2],"o":12},"flag-sv":{"a":"El Salvador Flag","b":"1F1F8-1F1FB","d":true,"e":true,"f":true,"h":true,"k":[4,18],"o":2},"flag-sx":{"a":"Sint Maarten Flag","b":"1F1F8-1F1FD","d":true,"e":true,"f":true,"h":true,"k":[4,19],"o":2},"basket":{"a":"Basket","b":"1F9FA","d":true,"e":true,"f":true,"h":true,"k":[51,45],"o":11},"person_in_motorized_wheelchair":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F9BC","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f9bc.png","sheet_x":47,"sheet_y":38,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F9BC","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f9bc.png","sheet_x":47,"sheet_y":39,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F9BC","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f9bc.png","sheet_x":47,"sheet_y":40,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F9BC","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f9bc.png","sheet_x":47,"sheet_y":41,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F9BC","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f9bc.png","sheet_x":47,"sheet_y":42,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Person in Motorized Wheelchair","b":"1F9D1-200D-1F9BC","d":true,"e":false,"f":false,"h":false,"k":[47,37],"o":12},"man_in_motorized_wheelchair":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F9BC","non_qualified":null,"image":"1f468-1f3fb-200d-1f9bc.png","sheet_x":16,"sheet_y":48,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F9BC","non_qualified":null,"image":"1f468-1f3fc-200d-1f9bc.png","sheet_x":16,"sheet_y":49,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F9BC","non_qualified":null,"image":"1f468-1f3fd-200d-1f9bc.png","sheet_x":16,"sheet_y":50,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F9BC","non_qualified":null,"image":"1f468-1f3fe-200d-1f9bc.png","sheet_x":16,"sheet_y":51,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F9BC","non_qualified":null,"image":"1f468-1f3ff-200d-1f9bc.png","sheet_x":16,"sheet_y":52,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man in Motorized Wheelchair","b":"1F468-200D-1F9BC","d":true,"e":true,"f":true,"h":true,"k":[16,47],"o":12},"flag-sy":{"a":"Syria Flag","b":"1F1F8-1F1FE","d":true,"e":true,"f":true,"h":true,"k":[4,20],"o":2},"roll_of_paper":{"a":"Roll of Paper","b":"1F9FB","d":true,"e":true,"f":true,"h":true,"k":[51,46],"o":11},"woman_in_motorized_wheelchair":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F9BC","non_qualified":null,"image":"1f469-1f3fb-200d-1f9bc.png","sheet_x":19,"sheet_y":33,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F9BC","non_qualified":null,"image":"1f469-1f3fc-200d-1f9bc.png","sheet_x":19,"sheet_y":34,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F9BC","non_qualified":null,"image":"1f469-1f3fd-200d-1f9bc.png","sheet_x":19,"sheet_y":35,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F9BC","non_qualified":null,"image":"1f469-1f3fe-200d-1f9bc.png","sheet_x":19,"sheet_y":36,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F9BC","non_qualified":null,"image":"1f469-1f3ff-200d-1f9bc.png","sheet_x":19,"sheet_y":37,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman in Motorized Wheelchair","b":"1F469-200D-1F9BC","d":true,"e":true,"f":true,"h":true,"k":[19,32],"o":12},"flag-sz":{"a":"Eswatini Flag","b":"1F1F8-1F1FF","d":true,"e":true,"f":true,"h":true,"k":[4,21],"o":2},"soap":{"a":"Bar of Soap","b":"1F9FC","d":true,"e":true,"f":true,"h":true,"k":[51,47],"o":11},"flag-ta":{"a":"Tristan Da Cunha Flag","b":"1F1F9-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[4,22],"o":2},"sponge":{"a":"Sponge","b":"1F9FD","d":true,"e":true,"f":true,"h":true,"k":[51,48],"o":11},"person_in_manual_wheelchair":{"skin_variations":{"1F3FB":{"unified":"1F9D1-1F3FB-200D-1F9BD","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f9bd.png","sheet_x":47,"sheet_y":44,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FC":{"unified":"1F9D1-1F3FC-200D-1F9BD","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f9bd.png","sheet_x":47,"sheet_y":45,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FD":{"unified":"1F9D1-1F3FD-200D-1F9BD","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f9bd.png","sheet_x":47,"sheet_y":46,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FE":{"unified":"1F9D1-1F3FE-200D-1F9BD","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f9bd.png","sheet_x":47,"sheet_y":47,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false},"1F3FF":{"unified":"1F9D1-1F3FF-200D-1F9BD","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f9bd.png","sheet_x":47,"sheet_y":48,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_facebook":false}},"a":"Person in Manual Wheelchair","b":"1F9D1-200D-1F9BD","d":true,"e":false,"f":false,"h":false,"k":[47,43],"o":12},"fire_extinguisher":{"a":"Fire Extinguisher","b":"1F9EF","d":true,"e":true,"f":true,"h":true,"k":[51,34],"o":11},"man_in_manual_wheelchair":{"skin_variations":{"1F3FB":{"unified":"1F468-1F3FB-200D-1F9BD","non_qualified":null,"image":"1f468-1f3fb-200d-1f9bd.png","sheet_x":16,"sheet_y":54,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F468-1F3FC-200D-1F9BD","non_qualified":null,"image":"1f468-1f3fc-200d-1f9bd.png","sheet_x":16,"sheet_y":55,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F468-1F3FD-200D-1F9BD","non_qualified":null,"image":"1f468-1f3fd-200d-1f9bd.png","sheet_x":16,"sheet_y":56,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F468-1F3FE-200D-1F9BD","non_qualified":null,"image":"1f468-1f3fe-200d-1f9bd.png","sheet_x":17,"sheet_y":0,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F468-1F3FF-200D-1F9BD","non_qualified":null,"image":"1f468-1f3ff-200d-1f9bd.png","sheet_x":17,"sheet_y":1,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man in Manual Wheelchair","b":"1F468-200D-1F9BD","d":true,"e":true,"f":true,"h":true,"k":[16,53],"o":12},"flag-tc":{"a":"Turks & Caicos Islands Flag","b":"1F1F9-1F1E8","d":true,"e":true,"f":true,"h":true,"k":[4,23],"o":2},"woman_in_manual_wheelchair":{"skin_variations":{"1F3FB":{"unified":"1F469-1F3FB-200D-1F9BD","non_qualified":null,"image":"1f469-1f3fb-200d-1f9bd.png","sheet_x":19,"sheet_y":39,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F469-1F3FC-200D-1F9BD","non_qualified":null,"image":"1f469-1f3fc-200d-1f9bd.png","sheet_x":19,"sheet_y":40,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F469-1F3FD-200D-1F9BD","non_qualified":null,"image":"1f469-1f3fd-200d-1f9bd.png","sheet_x":19,"sheet_y":41,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F469-1F3FE-200D-1F9BD","non_qualified":null,"image":"1f469-1f3fe-200d-1f9bd.png","sheet_x":19,"sheet_y":42,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F469-1F3FF-200D-1F9BD","non_qualified":null,"image":"1f469-1f3ff-200d-1f9bd.png","sheet_x":19,"sheet_y":43,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman in Manual Wheelchair","b":"1F469-200D-1F9BD","d":true,"e":true,"f":true,"h":true,"k":[19,38],"o":12},"flag-td":{"a":"Chad Flag","b":"1F1F9-1F1E9","d":true,"e":true,"f":true,"h":true,"k":[4,24],"o":2},"shopping_trolley":{"a":"Shopping Trolley","b":"1F6D2","d":true,"e":true,"f":true,"h":true,"k":[36,40],"o":4},"runner":{"skin_variations":{"1F3FB":{"unified":"1F3C3-1F3FB","non_qualified":null,"image":"1f3c3-1f3fb.png","sheet_x":9,"sheet_y":2,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F3C3-1F3FC","non_qualified":null,"image":"1f3c3-1f3fc.png","sheet_x":9,"sheet_y":3,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F3C3-1F3FD","non_qualified":null,"image":"1f3c3-1f3fd.png","sheet_x":9,"sheet_y":4,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F3C3-1F3FE","non_qualified":null,"image":"1f3c3-1f3fe.png","sheet_x":9,"sheet_y":5,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F3C3-1F3FF","non_qualified":null,"image":"1f3c3-1f3ff.png","sheet_x":9,"sheet_y":6,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F3C3-200D-2642-FE0F","a":"Runner","b":"1F3C3","d":true,"e":true,"f":true,"h":false,"k":[9,1],"n":["running"],"o":2},"flag-tf":{"a":"French Southern Territories Flag","b":"1F1F9-1F1EB","d":true,"e":true,"f":true,"h":true,"k":[4,25],"o":2},"smoking":{"a":"Smoking Symbol","b":"1F6AC","d":true,"e":true,"f":true,"h":true,"j":["kills","tobacco","cigarette","joint","smoke"],"k":[35,3],"o":2},"coffin":{"a":"Coffin","b":"26B0-FE0F","c":"26B0","d":true,"e":true,"f":true,"h":true,"j":["vampire","dead","die","death","rip","graveyard","cemetery","casket","funeral","box"],"k":[53,54],"o":2},"man-running":{"skin_variations":{"1F3FB":{"unified":"1F3C3-1F3FB-200D-2642-FE0F","non_qualified":"1F3C3-1F3FB-200D-2642","image":"1f3c3-1f3fb-200d-2642-fe0f.png","sheet_x":8,"sheet_y":53,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F3C3-1F3FC-200D-2642-FE0F","non_qualified":"1F3C3-1F3FC-200D-2642","image":"1f3c3-1f3fc-200d-2642-fe0f.png","sheet_x":8,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F3C3-1F3FD-200D-2642-FE0F","non_qualified":"1F3C3-1F3FD-200D-2642","image":"1f3c3-1f3fd-200d-2642-fe0f.png","sheet_x":8,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F3C3-1F3FE-200D-2642-FE0F","non_qualified":"1F3C3-1F3FE-200D-2642","image":"1f3c3-1f3fe-200d-2642-fe0f.png","sheet_x":8,"sheet_y":56,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F3C3-1F3FF-200D-2642-FE0F","non_qualified":"1F3C3-1F3FF-200D-2642","image":"1f3c3-1f3ff-200d-2642-fe0f.png","sheet_x":9,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F3C3","a":"Man Running","b":"1F3C3-200D-2642-FE0F","c":"1F3C3-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[8,52],"o":4},"flag-tg":{"a":"Togo Flag","b":"1F1F9-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[4,26],"o":2},"woman-running":{"skin_variations":{"1F3FB":{"unified":"1F3C3-1F3FB-200D-2640-FE0F","non_qualified":"1F3C3-1F3FB-200D-2640","image":"1f3c3-1f3fb-200d-2640-fe0f.png","sheet_x":8,"sheet_y":47,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F3C3-1F3FC-200D-2640-FE0F","non_qualified":"1F3C3-1F3FC-200D-2640","image":"1f3c3-1f3fc-200d-2640-fe0f.png","sheet_x":8,"sheet_y":48,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F3C3-1F3FD-200D-2640-FE0F","non_qualified":"1F3C3-1F3FD-200D-2640","image":"1f3c3-1f3fd-200d-2640-fe0f.png","sheet_x":8,"sheet_y":49,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F3C3-1F3FE-200D-2640-FE0F","non_qualified":"1F3C3-1F3FE-200D-2640","image":"1f3c3-1f3fe-200d-2640-fe0f.png","sheet_x":8,"sheet_y":50,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F3C3-1F3FF-200D-2640-FE0F","non_qualified":"1F3C3-1F3FF-200D-2640","image":"1f3c3-1f3ff-200d-2640-fe0f.png","sheet_x":8,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Running","b":"1F3C3-200D-2640-FE0F","c":"1F3C3-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[8,46],"o":4},"funeral_urn":{"a":"Funeral Urn","b":"26B1-FE0F","c":"26B1","d":true,"e":true,"f":true,"h":true,"j":["dead","die","death","rip","ashes"],"k":[53,55],"o":2},"flag-th":{"a":"Thailand Flag","b":"1F1F9-1F1ED","d":true,"e":true,"f":true,"h":true,"k":[4,27],"o":2},"moyai":{"a":"Moyai","b":"1F5FF","d":true,"e":true,"f":true,"h":true,"j":["rock","easter island","moai"],"k":[30,34],"o":2},"flag-tj":{"a":"Tajikistan Flag","b":"1F1F9-1F1EF","d":true,"e":true,"f":true,"h":true,"k":[4,28],"o":2},"dancer":{"skin_variations":{"1F3FB":{"unified":"1F483-1F3FB","non_qualified":null,"image":"1f483-1f3fb.png","sheet_x":24,"sheet_y":27,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F483-1F3FC","non_qualified":null,"image":"1f483-1f3fc.png","sheet_x":24,"sheet_y":28,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F483-1F3FD","non_qualified":null,"image":"1f483-1f3fd.png","sheet_x":24,"sheet_y":29,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F483-1F3FE","non_qualified":null,"image":"1f483-1f3fe.png","sheet_x":24,"sheet_y":30,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F483-1F3FF","non_qualified":null,"image":"1f483-1f3ff.png","sheet_x":24,"sheet_y":31,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Dancer","b":"1F483","d":true,"e":true,"f":true,"h":true,"j":["female","girl","woman","fun"],"k":[24,26],"o":2},"flag-tk":{"a":"Tokelau Flag","b":"1F1F9-1F1F0","d":true,"e":true,"f":true,"h":true,"k":[4,29],"o":2},"man_dancing":{"skin_variations":{"1F3FB":{"unified":"1F57A-1F3FB","non_qualified":null,"image":"1f57a-1f3fb.png","sheet_x":29,"sheet_y":38,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F57A-1F3FC","non_qualified":null,"image":"1f57a-1f3fc.png","sheet_x":29,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F57A-1F3FD","non_qualified":null,"image":"1f57a-1f3fd.png","sheet_x":29,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F57A-1F3FE","non_qualified":null,"image":"1f57a-1f3fe.png","sheet_x":29,"sheet_y":41,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F57A-1F3FF","non_qualified":null,"image":"1f57a-1f3ff.png","sheet_x":29,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Dancing","b":"1F57A","d":true,"e":true,"f":true,"h":true,"j":["male","boy","fun","dancer"],"k":[29,37],"o":4},"flag-tl":{"a":"Timor-Leste Flag","b":"1F1F9-1F1F1","d":true,"e":true,"f":true,"h":true,"k":[4,30],"o":2},"man_in_business_suit_levitating":{"skin_variations":{"1F3FB":{"unified":"1F574-1F3FB","non_qualified":null,"image":"1f574-1f3fb.png","sheet_x":29,"sheet_y":10,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F574-1F3FC","non_qualified":null,"image":"1f574-1f3fc.png","sheet_x":29,"sheet_y":11,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F574-1F3FD","non_qualified":null,"image":"1f574-1f3fd.png","sheet_x":29,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F574-1F3FE","non_qualified":null,"image":"1f574-1f3fe.png","sheet_x":29,"sheet_y":13,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F574-1F3FF","non_qualified":null,"image":"1f574-1f3ff.png","sheet_x":29,"sheet_y":14,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man in Business Suit Levitating","b":"1F574-FE0F","c":"1F574","d":true,"e":true,"f":true,"h":true,"k":[29,9],"o":2},"flag-tm":{"a":"Turkmenistan Flag","b":"1F1F9-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[4,31],"o":2},"dancers":{"obsoleted_by":"1F46F-200D-2640-FE0F","a":"Woman with Bunny Ears","b":"1F46F","d":true,"e":true,"f":true,"h":true,"k":[22,0],"o":2},"man-with-bunny-ears-partying":{"a":"Man with Bunny Ears Partying","b":"1F46F-200D-2642-FE0F","c":"1F46F-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[21,56],"o":4},"flag-tn":{"a":"Tunisia Flag","b":"1F1F9-1F1F3","d":true,"e":true,"f":true,"h":true,"k":[4,32],"o":2},"flag-to":{"a":"Tonga Flag","b":"1F1F9-1F1F4","d":true,"e":true,"f":true,"h":true,"k":[4,33],"o":2},"woman-with-bunny-ears-partying":{"obsoletes":"1F46F","a":"Woman with Bunny Ears Partying","b":"1F46F-200D-2640-FE0F","c":"1F46F-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[21,55],"o":4},"flag-tr":{"a":"Turkey Flag","b":"1F1F9-1F1F7","d":true,"e":true,"f":true,"h":true,"k":[4,34],"o":2},"person_in_steamy_room":{"skin_variations":{"1F3FB":{"unified":"1F9D6-1F3FB","non_qualified":null,"image":"1f9d6-1f3fb.png","sheet_x":48,"sheet_y":53,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D6-1F3FB-200D-2642-FE0F"},"1F3FC":{"unified":"1F9D6-1F3FC","non_qualified":null,"image":"1f9d6-1f3fc.png","sheet_x":48,"sheet_y":54,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D6-1F3FC-200D-2642-FE0F"},"1F3FD":{"unified":"1F9D6-1F3FD","non_qualified":null,"image":"1f9d6-1f3fd.png","sheet_x":48,"sheet_y":55,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D6-1F3FD-200D-2642-FE0F"},"1F3FE":{"unified":"1F9D6-1F3FE","non_qualified":null,"image":"1f9d6-1f3fe.png","sheet_x":48,"sheet_y":56,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D6-1F3FE-200D-2642-FE0F"},"1F3FF":{"unified":"1F9D6-1F3FF","non_qualified":null,"image":"1f9d6-1f3ff.png","sheet_x":49,"sheet_y":0,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D6-1F3FF-200D-2642-FE0F"}},"obsoleted_by":"1F9D6-200D-2642-FE0F","a":"Person in Steamy Room","b":"1F9D6","d":true,"e":true,"f":true,"h":true,"k":[48,52],"o":5},"man_in_steamy_room":{"skin_variations":{"1F3FB":{"unified":"1F9D6-1F3FB-200D-2642-FE0F","non_qualified":"1F9D6-1F3FB-200D-2642","image":"1f9d6-1f3fb-200d-2642-fe0f.png","sheet_x":48,"sheet_y":47,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D6-1F3FB"},"1F3FC":{"unified":"1F9D6-1F3FC-200D-2642-FE0F","non_qualified":"1F9D6-1F3FC-200D-2642","image":"1f9d6-1f3fc-200d-2642-fe0f.png","sheet_x":48,"sheet_y":48,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D6-1F3FC"},"1F3FD":{"unified":"1F9D6-1F3FD-200D-2642-FE0F","non_qualified":"1F9D6-1F3FD-200D-2642","image":"1f9d6-1f3fd-200d-2642-fe0f.png","sheet_x":48,"sheet_y":49,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D6-1F3FD"},"1F3FE":{"unified":"1F9D6-1F3FE-200D-2642-FE0F","non_qualified":"1F9D6-1F3FE-200D-2642","image":"1f9d6-1f3fe-200d-2642-fe0f.png","sheet_x":48,"sheet_y":50,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D6-1F3FE"},"1F3FF":{"unified":"1F9D6-1F3FF-200D-2642-FE0F","non_qualified":"1F9D6-1F3FF-200D-2642","image":"1f9d6-1f3ff-200d-2642-fe0f.png","sheet_x":48,"sheet_y":51,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D6-1F3FF"}},"obsoletes":"1F9D6","a":"Man in Steamy Room","b":"1F9D6-200D-2642-FE0F","c":"1F9D6-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[48,46],"o":5},"flag-tt":{"a":"Trinidad & Tobago Flag","b":"1F1F9-1F1F9","d":true,"e":true,"f":true,"h":true,"k":[4,35],"o":2},"woman_in_steamy_room":{"skin_variations":{"1F3FB":{"unified":"1F9D6-1F3FB-200D-2640-FE0F","non_qualified":"1F9D6-1F3FB-200D-2640","image":"1f9d6-1f3fb-200d-2640-fe0f.png","sheet_x":48,"sheet_y":41,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9D6-1F3FC-200D-2640-FE0F","non_qualified":"1F9D6-1F3FC-200D-2640","image":"1f9d6-1f3fc-200d-2640-fe0f.png","sheet_x":48,"sheet_y":42,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9D6-1F3FD-200D-2640-FE0F","non_qualified":"1F9D6-1F3FD-200D-2640","image":"1f9d6-1f3fd-200d-2640-fe0f.png","sheet_x":48,"sheet_y":43,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9D6-1F3FE-200D-2640-FE0F","non_qualified":"1F9D6-1F3FE-200D-2640","image":"1f9d6-1f3fe-200d-2640-fe0f.png","sheet_x":48,"sheet_y":44,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9D6-1F3FF-200D-2640-FE0F","non_qualified":"1F9D6-1F3FF-200D-2640","image":"1f9d6-1f3ff-200d-2640-fe0f.png","sheet_x":48,"sheet_y":45,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman in Steamy Room","b":"1F9D6-200D-2640-FE0F","c":"1F9D6-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[48,40],"o":5},"flag-tv":{"a":"Tuvalu Flag","b":"1F1F9-1F1FB","d":true,"e":true,"f":true,"h":true,"k":[4,36],"o":2},"flag-tw":{"a":"Taiwan Flag","b":"1F1F9-1F1FC","d":true,"e":true,"f":true,"h":true,"k":[4,37],"o":2},"person_climbing":{"skin_variations":{"1F3FB":{"unified":"1F9D7-1F3FB","non_qualified":null,"image":"1f9d7-1f3fb.png","sheet_x":49,"sheet_y":14,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D7-1F3FB-200D-2640-FE0F"},"1F3FC":{"unified":"1F9D7-1F3FC","non_qualified":null,"image":"1f9d7-1f3fc.png","sheet_x":49,"sheet_y":15,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D7-1F3FC-200D-2640-FE0F"},"1F3FD":{"unified":"1F9D7-1F3FD","non_qualified":null,"image":"1f9d7-1f3fd.png","sheet_x":49,"sheet_y":16,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D7-1F3FD-200D-2640-FE0F"},"1F3FE":{"unified":"1F9D7-1F3FE","non_qualified":null,"image":"1f9d7-1f3fe.png","sheet_x":49,"sheet_y":17,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D7-1F3FE-200D-2640-FE0F"},"1F3FF":{"unified":"1F9D7-1F3FF","non_qualified":null,"image":"1f9d7-1f3ff.png","sheet_x":49,"sheet_y":18,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D7-1F3FF-200D-2640-FE0F"}},"obsoleted_by":"1F9D7-200D-2640-FE0F","a":"Person Climbing","b":"1F9D7","d":true,"e":true,"f":true,"h":true,"k":[49,13],"o":5},"man_climbing":{"skin_variations":{"1F3FB":{"unified":"1F9D7-1F3FB-200D-2642-FE0F","non_qualified":"1F9D7-1F3FB-200D-2642","image":"1f9d7-1f3fb-200d-2642-fe0f.png","sheet_x":49,"sheet_y":8,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9D7-1F3FC-200D-2642-FE0F","non_qualified":"1F9D7-1F3FC-200D-2642","image":"1f9d7-1f3fc-200d-2642-fe0f.png","sheet_x":49,"sheet_y":9,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9D7-1F3FD-200D-2642-FE0F","non_qualified":"1F9D7-1F3FD-200D-2642","image":"1f9d7-1f3fd-200d-2642-fe0f.png","sheet_x":49,"sheet_y":10,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9D7-1F3FE-200D-2642-FE0F","non_qualified":"1F9D7-1F3FE-200D-2642","image":"1f9d7-1f3fe-200d-2642-fe0f.png","sheet_x":49,"sheet_y":11,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9D7-1F3FF-200D-2642-FE0F","non_qualified":"1F9D7-1F3FF-200D-2642","image":"1f9d7-1f3ff-200d-2642-fe0f.png","sheet_x":49,"sheet_y":12,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Climbing","b":"1F9D7-200D-2642-FE0F","c":"1F9D7-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[49,7],"o":5},"flag-tz":{"a":"Tanzania Flag","b":"1F1F9-1F1FF","d":true,"e":true,"f":true,"h":true,"k":[4,38],"o":2},"flag-ua":{"a":"Ukraine Flag","b":"1F1FA-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[4,39],"o":2},"woman_climbing":{"skin_variations":{"1F3FB":{"unified":"1F9D7-1F3FB-200D-2640-FE0F","non_qualified":"1F9D7-1F3FB-200D-2640","image":"1f9d7-1f3fb-200d-2640-fe0f.png","sheet_x":49,"sheet_y":2,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D7-1F3FB"},"1F3FC":{"unified":"1F9D7-1F3FC-200D-2640-FE0F","non_qualified":"1F9D7-1F3FC-200D-2640","image":"1f9d7-1f3fc-200d-2640-fe0f.png","sheet_x":49,"sheet_y":3,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D7-1F3FC"},"1F3FD":{"unified":"1F9D7-1F3FD-200D-2640-FE0F","non_qualified":"1F9D7-1F3FD-200D-2640","image":"1f9d7-1f3fd-200d-2640-fe0f.png","sheet_x":49,"sheet_y":4,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D7-1F3FD"},"1F3FE":{"unified":"1F9D7-1F3FE-200D-2640-FE0F","non_qualified":"1F9D7-1F3FE-200D-2640","image":"1f9d7-1f3fe-200d-2640-fe0f.png","sheet_x":49,"sheet_y":5,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D7-1F3FE"},"1F3FF":{"unified":"1F9D7-1F3FF-200D-2640-FE0F","non_qualified":"1F9D7-1F3FF-200D-2640","image":"1f9d7-1f3ff-200d-2640-fe0f.png","sheet_x":49,"sheet_y":6,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D7-1F3FF"}},"obsoletes":"1F9D7","a":"Woman Climbing","b":"1F9D7-200D-2640-FE0F","c":"1F9D7-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[49,1],"o":5},"flag-ug":{"a":"Uganda Flag","b":"1F1FA-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[4,40],"o":2},"fencer":{"a":"Fencer","b":"1F93A","d":true,"e":true,"f":true,"h":true,"k":[40,32],"o":4},"flag-um":{"a":"U.s. Outlying Islands Flag","b":"1F1FA-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[4,41],"o":2},"horse_racing":{"skin_variations":{"1F3FB":{"unified":"1F3C7-1F3FB","non_qualified":null,"image":"1f3c7-1f3fb.png","sheet_x":9,"sheet_y":28,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F3C7-1F3FC","non_qualified":null,"image":"1f3c7-1f3fc.png","sheet_x":9,"sheet_y":29,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F3C7-1F3FD","non_qualified":null,"image":"1f3c7-1f3fd.png","sheet_x":9,"sheet_y":30,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F3C7-1F3FE","non_qualified":null,"image":"1f3c7-1f3fe.png","sheet_x":9,"sheet_y":31,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F3C7-1F3FF","non_qualified":null,"image":"1f3c7-1f3ff.png","sheet_x":9,"sheet_y":32,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Horse Racing","b":"1F3C7","d":true,"e":true,"f":true,"h":true,"j":["animal","betting","competition","gambling","luck"],"k":[9,27],"o":2},"skier":{"a":"Skier","b":"26F7-FE0F","c":"26F7","d":true,"e":true,"f":true,"h":true,"j":["sports","winter","snow"],"k":[54,17],"o":2},"flag-un":{"a":"United Nations Flag","b":"1F1FA-1F1F3","d":true,"e":true,"f":true,"h":true,"k":[4,42],"o":4},"us":{"a":"United States Flag","b":"1F1FA-1F1F8","d":true,"e":true,"f":true,"h":true,"j":["united","states","america","flag","nation","country","banner"],"k":[4,43],"n":["flag-us"],"o":2},"snowboarder":{"skin_variations":{"1F3FB":{"unified":"1F3C2-1F3FB","non_qualified":null,"image":"1f3c2-1f3fb.png","sheet_x":8,"sheet_y":41,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F3C2-1F3FC","non_qualified":null,"image":"1f3c2-1f3fc.png","sheet_x":8,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F3C2-1F3FD","non_qualified":null,"image":"1f3c2-1f3fd.png","sheet_x":8,"sheet_y":43,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F3C2-1F3FE","non_qualified":null,"image":"1f3c2-1f3fe.png","sheet_x":8,"sheet_y":44,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F3C2-1F3FF","non_qualified":null,"image":"1f3c2-1f3ff.png","sheet_x":8,"sheet_y":45,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Snowboarder","b":"1F3C2","d":true,"e":true,"f":true,"h":true,"j":["sports","winter"],"k":[8,40],"o":2},"golfer":{"skin_variations":{"1F3FB":{"unified":"1F3CC-1F3FB","non_qualified":null,"image":"1f3cc-1f3fb.png","sheet_x":10,"sheet_y":27,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F3CC-1F3FC","non_qualified":null,"image":"1f3cc-1f3fc.png","sheet_x":10,"sheet_y":28,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F3CC-1F3FD","non_qualified":null,"image":"1f3cc-1f3fd.png","sheet_x":10,"sheet_y":29,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F3CC-1F3FE","non_qualified":null,"image":"1f3cc-1f3fe.png","sheet_x":10,"sheet_y":30,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F3CC-1F3FF","non_qualified":null,"image":"1f3cc-1f3ff.png","sheet_x":10,"sheet_y":31,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F3CC-FE0F-200D-2642-FE0F","a":"Golfer","b":"1F3CC-FE0F","c":"1F3CC","d":true,"e":true,"f":true,"h":false,"k":[10,26],"o":2},"flag-uy":{"a":"Uruguay Flag","b":"1F1FA-1F1FE","d":true,"e":true,"f":true,"h":true,"k":[4,44],"o":2},"flag-uz":{"a":"Uzbekistan Flag","b":"1F1FA-1F1FF","d":true,"e":true,"f":true,"h":true,"k":[4,45],"o":2},"man-golfing":{"skin_variations":{"1F3FB":{"unified":"1F3CC-1F3FB-200D-2642-FE0F","non_qualified":"1F3CC-1F3FB-200D-2642","image":"1f3cc-1f3fb-200d-2642-fe0f.png","sheet_x":10,"sheet_y":21,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F3CC-1F3FC-200D-2642-FE0F","non_qualified":"1F3CC-1F3FC-200D-2642","image":"1f3cc-1f3fc-200d-2642-fe0f.png","sheet_x":10,"sheet_y":22,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F3CC-1F3FD-200D-2642-FE0F","non_qualified":"1F3CC-1F3FD-200D-2642","image":"1f3cc-1f3fd-200d-2642-fe0f.png","sheet_x":10,"sheet_y":23,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F3CC-1F3FE-200D-2642-FE0F","non_qualified":"1F3CC-1F3FE-200D-2642","image":"1f3cc-1f3fe-200d-2642-fe0f.png","sheet_x":10,"sheet_y":24,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F3CC-1F3FF-200D-2642-FE0F","non_qualified":"1F3CC-1F3FF-200D-2642","image":"1f3cc-1f3ff-200d-2642-fe0f.png","sheet_x":10,"sheet_y":25,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F3CC-FE0F","a":"Man Golfing","b":"1F3CC-FE0F-200D-2642-FE0F","d":true,"e":true,"f":true,"h":false,"k":[10,20],"o":4},"flag-va":{"a":"Vatican City Flag","b":"1F1FB-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[4,46],"o":2},"woman-golfing":{"skin_variations":{"1F3FB":{"unified":"1F3CC-1F3FB-200D-2640-FE0F","non_qualified":"1F3CC-1F3FB-200D-2640","image":"1f3cc-1f3fb-200d-2640-fe0f.png","sheet_x":10,"sheet_y":15,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F3CC-1F3FC-200D-2640-FE0F","non_qualified":"1F3CC-1F3FC-200D-2640","image":"1f3cc-1f3fc-200d-2640-fe0f.png","sheet_x":10,"sheet_y":16,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F3CC-1F3FD-200D-2640-FE0F","non_qualified":"1F3CC-1F3FD-200D-2640","image":"1f3cc-1f3fd-200d-2640-fe0f.png","sheet_x":10,"sheet_y":17,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F3CC-1F3FE-200D-2640-FE0F","non_qualified":"1F3CC-1F3FE-200D-2640","image":"1f3cc-1f3fe-200d-2640-fe0f.png","sheet_x":10,"sheet_y":18,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F3CC-1F3FF-200D-2640-FE0F","non_qualified":"1F3CC-1F3FF-200D-2640","image":"1f3cc-1f3ff-200d-2640-fe0f.png","sheet_x":10,"sheet_y":19,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Golfing","b":"1F3CC-FE0F-200D-2640-FE0F","d":true,"e":true,"f":true,"h":false,"k":[10,14],"o":4},"flag-vc":{"a":"St. Vincent & Grenadines Flag","b":"1F1FB-1F1E8","d":true,"e":true,"f":true,"h":true,"k":[4,47],"o":2},"surfer":{"skin_variations":{"1F3FB":{"unified":"1F3C4-1F3FB","non_qualified":null,"image":"1f3c4-1f3fb.png","sheet_x":9,"sheet_y":20,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F3C4-1F3FC","non_qualified":null,"image":"1f3c4-1f3fc.png","sheet_x":9,"sheet_y":21,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F3C4-1F3FD","non_qualified":null,"image":"1f3c4-1f3fd.png","sheet_x":9,"sheet_y":22,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F3C4-1F3FE","non_qualified":null,"image":"1f3c4-1f3fe.png","sheet_x":9,"sheet_y":23,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F3C4-1F3FF","non_qualified":null,"image":"1f3c4-1f3ff.png","sheet_x":9,"sheet_y":24,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F3C4-200D-2642-FE0F","a":"Surfer","b":"1F3C4","d":true,"e":true,"f":true,"h":false,"k":[9,19],"o":2},"man-surfing":{"skin_variations":{"1F3FB":{"unified":"1F3C4-1F3FB-200D-2642-FE0F","non_qualified":"1F3C4-1F3FB-200D-2642","image":"1f3c4-1f3fb-200d-2642-fe0f.png","sheet_x":9,"sheet_y":14,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F3C4-1F3FC-200D-2642-FE0F","non_qualified":"1F3C4-1F3FC-200D-2642","image":"1f3c4-1f3fc-200d-2642-fe0f.png","sheet_x":9,"sheet_y":15,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F3C4-1F3FD-200D-2642-FE0F","non_qualified":"1F3C4-1F3FD-200D-2642","image":"1f3c4-1f3fd-200d-2642-fe0f.png","sheet_x":9,"sheet_y":16,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F3C4-1F3FE-200D-2642-FE0F","non_qualified":"1F3C4-1F3FE-200D-2642","image":"1f3c4-1f3fe-200d-2642-fe0f.png","sheet_x":9,"sheet_y":17,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F3C4-1F3FF-200D-2642-FE0F","non_qualified":"1F3C4-1F3FF-200D-2642","image":"1f3c4-1f3ff-200d-2642-fe0f.png","sheet_x":9,"sheet_y":18,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F3C4","a":"Man Surfing","b":"1F3C4-200D-2642-FE0F","c":"1F3C4-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[9,13],"o":4},"flag-ve":{"a":"Venezuela Flag","b":"1F1FB-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[4,48],"o":2},"flag-vg":{"a":"British Virgin Islands Flag","b":"1F1FB-1F1EC","d":true,"e":true,"f":true,"h":true,"k":[4,49],"o":2},"woman-surfing":{"skin_variations":{"1F3FB":{"unified":"1F3C4-1F3FB-200D-2640-FE0F","non_qualified":"1F3C4-1F3FB-200D-2640","image":"1f3c4-1f3fb-200d-2640-fe0f.png","sheet_x":9,"sheet_y":8,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F3C4-1F3FC-200D-2640-FE0F","non_qualified":"1F3C4-1F3FC-200D-2640","image":"1f3c4-1f3fc-200d-2640-fe0f.png","sheet_x":9,"sheet_y":9,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F3C4-1F3FD-200D-2640-FE0F","non_qualified":"1F3C4-1F3FD-200D-2640","image":"1f3c4-1f3fd-200d-2640-fe0f.png","sheet_x":9,"sheet_y":10,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F3C4-1F3FE-200D-2640-FE0F","non_qualified":"1F3C4-1F3FE-200D-2640","image":"1f3c4-1f3fe-200d-2640-fe0f.png","sheet_x":9,"sheet_y":11,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F3C4-1F3FF-200D-2640-FE0F","non_qualified":"1F3C4-1F3FF-200D-2640","image":"1f3c4-1f3ff-200d-2640-fe0f.png","sheet_x":9,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Surfing","b":"1F3C4-200D-2640-FE0F","c":"1F3C4-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[9,7],"o":4},"rowboat":{"skin_variations":{"1F3FB":{"unified":"1F6A3-1F3FB","non_qualified":null,"image":"1f6a3-1f3fb.png","sheet_x":34,"sheet_y":47,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F6A3-1F3FC","non_qualified":null,"image":"1f6a3-1f3fc.png","sheet_x":34,"sheet_y":48,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F6A3-1F3FD","non_qualified":null,"image":"1f6a3-1f3fd.png","sheet_x":34,"sheet_y":49,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F6A3-1F3FE","non_qualified":null,"image":"1f6a3-1f3fe.png","sheet_x":34,"sheet_y":50,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F6A3-1F3FF","non_qualified":null,"image":"1f6a3-1f3ff.png","sheet_x":34,"sheet_y":51,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F6A3-200D-2642-FE0F","a":"Rowboat","b":"1F6A3","d":true,"e":true,"f":true,"h":false,"k":[34,46],"o":2},"flag-vi":{"a":"U.s. Virgin Islands Flag","b":"1F1FB-1F1EE","d":true,"e":true,"f":true,"h":true,"k":[4,50],"o":2},"man-rowing-boat":{"skin_variations":{"1F3FB":{"unified":"1F6A3-1F3FB-200D-2642-FE0F","non_qualified":"1F6A3-1F3FB-200D-2642","image":"1f6a3-1f3fb-200d-2642-fe0f.png","sheet_x":34,"sheet_y":41,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F6A3-1F3FC-200D-2642-FE0F","non_qualified":"1F6A3-1F3FC-200D-2642","image":"1f6a3-1f3fc-200d-2642-fe0f.png","sheet_x":34,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F6A3-1F3FD-200D-2642-FE0F","non_qualified":"1F6A3-1F3FD-200D-2642","image":"1f6a3-1f3fd-200d-2642-fe0f.png","sheet_x":34,"sheet_y":43,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F6A3-1F3FE-200D-2642-FE0F","non_qualified":"1F6A3-1F3FE-200D-2642","image":"1f6a3-1f3fe-200d-2642-fe0f.png","sheet_x":34,"sheet_y":44,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F6A3-1F3FF-200D-2642-FE0F","non_qualified":"1F6A3-1F3FF-200D-2642","image":"1f6a3-1f3ff-200d-2642-fe0f.png","sheet_x":34,"sheet_y":45,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F6A3","a":"Man Rowing Boat","b":"1F6A3-200D-2642-FE0F","c":"1F6A3-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[34,40],"o":4},"flag-vn":{"a":"Vietnam Flag","b":"1F1FB-1F1F3","d":true,"e":true,"f":true,"h":true,"k":[4,51],"o":2},"flag-vu":{"a":"Vanuatu Flag","b":"1F1FB-1F1FA","d":true,"e":true,"f":true,"h":true,"k":[4,52],"o":2},"woman-rowing-boat":{"skin_variations":{"1F3FB":{"unified":"1F6A3-1F3FB-200D-2640-FE0F","non_qualified":"1F6A3-1F3FB-200D-2640","image":"1f6a3-1f3fb-200d-2640-fe0f.png","sheet_x":34,"sheet_y":35,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F6A3-1F3FC-200D-2640-FE0F","non_qualified":"1F6A3-1F3FC-200D-2640","image":"1f6a3-1f3fc-200d-2640-fe0f.png","sheet_x":34,"sheet_y":36,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F6A3-1F3FD-200D-2640-FE0F","non_qualified":"1F6A3-1F3FD-200D-2640","image":"1f6a3-1f3fd-200d-2640-fe0f.png","sheet_x":34,"sheet_y":37,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F6A3-1F3FE-200D-2640-FE0F","non_qualified":"1F6A3-1F3FE-200D-2640","image":"1f6a3-1f3fe-200d-2640-fe0f.png","sheet_x":34,"sheet_y":38,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F6A3-1F3FF-200D-2640-FE0F","non_qualified":"1F6A3-1F3FF-200D-2640","image":"1f6a3-1f3ff-200d-2640-fe0f.png","sheet_x":34,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Rowing Boat","b":"1F6A3-200D-2640-FE0F","c":"1F6A3-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[34,34],"o":4},"swimmer":{"skin_variations":{"1F3FB":{"unified":"1F3CA-1F3FB","non_qualified":null,"image":"1f3ca-1f3fb.png","sheet_x":9,"sheet_y":48,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F3CA-1F3FC","non_qualified":null,"image":"1f3ca-1f3fc.png","sheet_x":9,"sheet_y":49,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F3CA-1F3FD","non_qualified":null,"image":"1f3ca-1f3fd.png","sheet_x":9,"sheet_y":50,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F3CA-1F3FE","non_qualified":null,"image":"1f3ca-1f3fe.png","sheet_x":9,"sheet_y":51,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F3CA-1F3FF","non_qualified":null,"image":"1f3ca-1f3ff.png","sheet_x":9,"sheet_y":52,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F3CA-200D-2642-FE0F","a":"Swimmer","b":"1F3CA","d":true,"e":true,"f":true,"h":false,"k":[9,47],"o":2},"flag-wf":{"a":"Wallis & Futuna Flag","b":"1F1FC-1F1EB","d":true,"e":true,"f":true,"h":true,"k":[4,53],"o":2},"man-swimming":{"skin_variations":{"1F3FB":{"unified":"1F3CA-1F3FB-200D-2642-FE0F","non_qualified":"1F3CA-1F3FB-200D-2642","image":"1f3ca-1f3fb-200d-2642-fe0f.png","sheet_x":9,"sheet_y":42,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F3CA-1F3FC-200D-2642-FE0F","non_qualified":"1F3CA-1F3FC-200D-2642","image":"1f3ca-1f3fc-200d-2642-fe0f.png","sheet_x":9,"sheet_y":43,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F3CA-1F3FD-200D-2642-FE0F","non_qualified":"1F3CA-1F3FD-200D-2642","image":"1f3ca-1f3fd-200d-2642-fe0f.png","sheet_x":9,"sheet_y":44,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F3CA-1F3FE-200D-2642-FE0F","non_qualified":"1F3CA-1F3FE-200D-2642","image":"1f3ca-1f3fe-200d-2642-fe0f.png","sheet_x":9,"sheet_y":45,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F3CA-1F3FF-200D-2642-FE0F","non_qualified":"1F3CA-1F3FF-200D-2642","image":"1f3ca-1f3ff-200d-2642-fe0f.png","sheet_x":9,"sheet_y":46,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F3CA","a":"Man Swimming","b":"1F3CA-200D-2642-FE0F","c":"1F3CA-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[9,41],"o":4},"flag-ws":{"a":"Samoa Flag","b":"1F1FC-1F1F8","d":true,"e":true,"f":true,"h":true,"k":[4,54],"o":2},"woman-swimming":{"skin_variations":{"1F3FB":{"unified":"1F3CA-1F3FB-200D-2640-FE0F","non_qualified":"1F3CA-1F3FB-200D-2640","image":"1f3ca-1f3fb-200d-2640-fe0f.png","sheet_x":9,"sheet_y":36,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F3CA-1F3FC-200D-2640-FE0F","non_qualified":"1F3CA-1F3FC-200D-2640","image":"1f3ca-1f3fc-200d-2640-fe0f.png","sheet_x":9,"sheet_y":37,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F3CA-1F3FD-200D-2640-FE0F","non_qualified":"1F3CA-1F3FD-200D-2640","image":"1f3ca-1f3fd-200d-2640-fe0f.png","sheet_x":9,"sheet_y":38,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F3CA-1F3FE-200D-2640-FE0F","non_qualified":"1F3CA-1F3FE-200D-2640","image":"1f3ca-1f3fe-200d-2640-fe0f.png","sheet_x":9,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F3CA-1F3FF-200D-2640-FE0F","non_qualified":"1F3CA-1F3FF-200D-2640","image":"1f3ca-1f3ff-200d-2640-fe0f.png","sheet_x":9,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Swimming","b":"1F3CA-200D-2640-FE0F","c":"1F3CA-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[9,35],"o":4},"flag-xk":{"a":"Kosovo Flag","b":"1F1FD-1F1F0","d":true,"e":true,"f":true,"h":true,"k":[4,55],"o":2},"person_with_ball":{"skin_variations":{"1F3FB":{"unified":"26F9-1F3FB","non_qualified":null,"image":"26f9-1f3fb.png","sheet_x":54,"sheet_y":32,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"26F9-1F3FC","non_qualified":null,"image":"26f9-1f3fc.png","sheet_x":54,"sheet_y":33,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"26F9-1F3FD","non_qualified":null,"image":"26f9-1f3fd.png","sheet_x":54,"sheet_y":34,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"26F9-1F3FE","non_qualified":null,"image":"26f9-1f3fe.png","sheet_x":54,"sheet_y":35,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"26F9-1F3FF","non_qualified":null,"image":"26f9-1f3ff.png","sheet_x":54,"sheet_y":36,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"26F9-FE0F-200D-2642-FE0F","a":"Person with Ball","b":"26F9-FE0F","c":"26F9","d":true,"e":true,"f":true,"h":false,"k":[54,31],"o":2},"flag-ye":{"a":"Yemen Flag","b":"1F1FE-1F1EA","d":true,"e":true,"f":true,"h":true,"k":[4,56],"o":2},"man-bouncing-ball":{"skin_variations":{"1F3FB":{"unified":"26F9-1F3FB-200D-2642-FE0F","non_qualified":"26F9-1F3FB-200D-2642","image":"26f9-1f3fb-200d-2642-fe0f.png","sheet_x":54,"sheet_y":26,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"26F9-1F3FC-200D-2642-FE0F","non_qualified":"26F9-1F3FC-200D-2642","image":"26f9-1f3fc-200d-2642-fe0f.png","sheet_x":54,"sheet_y":27,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"26F9-1F3FD-200D-2642-FE0F","non_qualified":"26F9-1F3FD-200D-2642","image":"26f9-1f3fd-200d-2642-fe0f.png","sheet_x":54,"sheet_y":28,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"26F9-1F3FE-200D-2642-FE0F","non_qualified":"26F9-1F3FE-200D-2642","image":"26f9-1f3fe-200d-2642-fe0f.png","sheet_x":54,"sheet_y":29,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"26F9-1F3FF-200D-2642-FE0F","non_qualified":"26F9-1F3FF-200D-2642","image":"26f9-1f3ff-200d-2642-fe0f.png","sheet_x":54,"sheet_y":30,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"26F9-FE0F","a":"Man Bouncing Ball","b":"26F9-FE0F-200D-2642-FE0F","d":true,"e":true,"f":true,"h":false,"k":[54,25],"o":4},"flag-yt":{"a":"Mayotte Flag","b":"1F1FE-1F1F9","d":true,"e":true,"f":true,"h":true,"k":[5,0],"o":2},"woman-bouncing-ball":{"skin_variations":{"1F3FB":{"unified":"26F9-1F3FB-200D-2640-FE0F","non_qualified":"26F9-1F3FB-200D-2640","image":"26f9-1f3fb-200d-2640-fe0f.png","sheet_x":54,"sheet_y":20,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"26F9-1F3FC-200D-2640-FE0F","non_qualified":"26F9-1F3FC-200D-2640","image":"26f9-1f3fc-200d-2640-fe0f.png","sheet_x":54,"sheet_y":21,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"26F9-1F3FD-200D-2640-FE0F","non_qualified":"26F9-1F3FD-200D-2640","image":"26f9-1f3fd-200d-2640-fe0f.png","sheet_x":54,"sheet_y":22,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"26F9-1F3FE-200D-2640-FE0F","non_qualified":"26F9-1F3FE-200D-2640","image":"26f9-1f3fe-200d-2640-fe0f.png","sheet_x":54,"sheet_y":23,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"26F9-1F3FF-200D-2640-FE0F","non_qualified":"26F9-1F3FF-200D-2640","image":"26f9-1f3ff-200d-2640-fe0f.png","sheet_x":54,"sheet_y":24,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Bouncing Ball","b":"26F9-FE0F-200D-2640-FE0F","d":true,"e":true,"f":true,"h":false,"k":[54,19],"o":4},"flag-za":{"a":"South Africa Flag","b":"1F1FF-1F1E6","d":true,"e":true,"f":true,"h":true,"k":[5,1],"o":2},"flag-zm":{"a":"Zambia Flag","b":"1F1FF-1F1F2","d":true,"e":true,"f":true,"h":true,"k":[5,2],"o":2},"weight_lifter":{"skin_variations":{"1F3FB":{"unified":"1F3CB-1F3FB","non_qualified":null,"image":"1f3cb-1f3fb.png","sheet_x":10,"sheet_y":9,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F3CB-1F3FC","non_qualified":null,"image":"1f3cb-1f3fc.png","sheet_x":10,"sheet_y":10,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F3CB-1F3FD","non_qualified":null,"image":"1f3cb-1f3fd.png","sheet_x":10,"sheet_y":11,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F3CB-1F3FE","non_qualified":null,"image":"1f3cb-1f3fe.png","sheet_x":10,"sheet_y":12,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F3CB-1F3FF","non_qualified":null,"image":"1f3cb-1f3ff.png","sheet_x":10,"sheet_y":13,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F3CB-FE0F-200D-2642-FE0F","a":"Weight Lifter","b":"1F3CB-FE0F","c":"1F3CB","d":true,"e":true,"f":true,"h":false,"k":[10,8],"o":2},"man-lifting-weights":{"skin_variations":{"1F3FB":{"unified":"1F3CB-1F3FB-200D-2642-FE0F","non_qualified":"1F3CB-1F3FB-200D-2642","image":"1f3cb-1f3fb-200d-2642-fe0f.png","sheet_x":10,"sheet_y":3,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F3CB-1F3FC-200D-2642-FE0F","non_qualified":"1F3CB-1F3FC-200D-2642","image":"1f3cb-1f3fc-200d-2642-fe0f.png","sheet_x":10,"sheet_y":4,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F3CB-1F3FD-200D-2642-FE0F","non_qualified":"1F3CB-1F3FD-200D-2642","image":"1f3cb-1f3fd-200d-2642-fe0f.png","sheet_x":10,"sheet_y":5,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F3CB-1F3FE-200D-2642-FE0F","non_qualified":"1F3CB-1F3FE-200D-2642","image":"1f3cb-1f3fe-200d-2642-fe0f.png","sheet_x":10,"sheet_y":6,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F3CB-1F3FF-200D-2642-FE0F","non_qualified":"1F3CB-1F3FF-200D-2642","image":"1f3cb-1f3ff-200d-2642-fe0f.png","sheet_x":10,"sheet_y":7,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F3CB-FE0F","a":"Man Lifting Weights","b":"1F3CB-FE0F-200D-2642-FE0F","d":true,"e":true,"f":true,"h":false,"k":[10,2],"o":4},"flag-zw":{"a":"Zimbabwe Flag","b":"1F1FF-1F1FC","d":true,"e":true,"f":true,"h":true,"k":[5,3],"o":2},"woman-lifting-weights":{"skin_variations":{"1F3FB":{"unified":"1F3CB-1F3FB-200D-2640-FE0F","non_qualified":"1F3CB-1F3FB-200D-2640","image":"1f3cb-1f3fb-200d-2640-fe0f.png","sheet_x":9,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F3CB-1F3FC-200D-2640-FE0F","non_qualified":"1F3CB-1F3FC-200D-2640","image":"1f3cb-1f3fc-200d-2640-fe0f.png","sheet_x":9,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F3CB-1F3FD-200D-2640-FE0F","non_qualified":"1F3CB-1F3FD-200D-2640","image":"1f3cb-1f3fd-200d-2640-fe0f.png","sheet_x":9,"sheet_y":56,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F3CB-1F3FE-200D-2640-FE0F","non_qualified":"1F3CB-1F3FE-200D-2640","image":"1f3cb-1f3fe-200d-2640-fe0f.png","sheet_x":10,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F3CB-1F3FF-200D-2640-FE0F","non_qualified":"1F3CB-1F3FF-200D-2640","image":"1f3cb-1f3ff-200d-2640-fe0f.png","sheet_x":10,"sheet_y":1,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Lifting Weights","b":"1F3CB-FE0F-200D-2640-FE0F","d":true,"e":true,"f":true,"h":false,"k":[9,53],"o":4},"flag-england":{"a":"England Flag","b":"1F3F4-E0067-E0062-E0065-E006E-E0067-E007F","d":true,"e":true,"f":true,"h":true,"k":[11,14],"o":5},"bicyclist":{"skin_variations":{"1F3FB":{"unified":"1F6B4-1F3FB","non_qualified":null,"image":"1f6b4-1f3fb.png","sheet_x":35,"sheet_y":24,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F6B4-1F3FC","non_qualified":null,"image":"1f6b4-1f3fc.png","sheet_x":35,"sheet_y":25,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F6B4-1F3FD","non_qualified":null,"image":"1f6b4-1f3fd.png","sheet_x":35,"sheet_y":26,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F6B4-1F3FE","non_qualified":null,"image":"1f6b4-1f3fe.png","sheet_x":35,"sheet_y":27,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F6B4-1F3FF","non_qualified":null,"image":"1f6b4-1f3ff.png","sheet_x":35,"sheet_y":28,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F6B4-200D-2642-FE0F","a":"Bicyclist","b":"1F6B4","d":true,"e":true,"f":true,"h":false,"k":[35,23],"o":2},"flag-scotland":{"a":"Scotland Flag","b":"1F3F4-E0067-E0062-E0073-E0063-E0074-E007F","d":true,"e":true,"f":true,"h":true,"k":[11,15],"o":5},"flag-wales":{"a":"Wales Flag","b":"1F3F4-E0067-E0062-E0077-E006C-E0073-E007F","d":true,"e":true,"f":true,"h":true,"k":[11,16],"o":5},"man-biking":{"skin_variations":{"1F3FB":{"unified":"1F6B4-1F3FB-200D-2642-FE0F","non_qualified":"1F6B4-1F3FB-200D-2642","image":"1f6b4-1f3fb-200d-2642-fe0f.png","sheet_x":35,"sheet_y":18,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F6B4-1F3FC-200D-2642-FE0F","non_qualified":"1F6B4-1F3FC-200D-2642","image":"1f6b4-1f3fc-200d-2642-fe0f.png","sheet_x":35,"sheet_y":19,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F6B4-1F3FD-200D-2642-FE0F","non_qualified":"1F6B4-1F3FD-200D-2642","image":"1f6b4-1f3fd-200d-2642-fe0f.png","sheet_x":35,"sheet_y":20,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F6B4-1F3FE-200D-2642-FE0F","non_qualified":"1F6B4-1F3FE-200D-2642","image":"1f6b4-1f3fe-200d-2642-fe0f.png","sheet_x":35,"sheet_y":21,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F6B4-1F3FF-200D-2642-FE0F","non_qualified":"1F6B4-1F3FF-200D-2642","image":"1f6b4-1f3ff-200d-2642-fe0f.png","sheet_x":35,"sheet_y":22,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F6B4","a":"Man Biking","b":"1F6B4-200D-2642-FE0F","c":"1F6B4-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[35,17],"o":4},"woman-biking":{"skin_variations":{"1F3FB":{"unified":"1F6B4-1F3FB-200D-2640-FE0F","non_qualified":"1F6B4-1F3FB-200D-2640","image":"1f6b4-1f3fb-200d-2640-fe0f.png","sheet_x":35,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F6B4-1F3FC-200D-2640-FE0F","non_qualified":"1F6B4-1F3FC-200D-2640","image":"1f6b4-1f3fc-200d-2640-fe0f.png","sheet_x":35,"sheet_y":13,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F6B4-1F3FD-200D-2640-FE0F","non_qualified":"1F6B4-1F3FD-200D-2640","image":"1f6b4-1f3fd-200d-2640-fe0f.png","sheet_x":35,"sheet_y":14,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F6B4-1F3FE-200D-2640-FE0F","non_qualified":"1F6B4-1F3FE-200D-2640","image":"1f6b4-1f3fe-200d-2640-fe0f.png","sheet_x":35,"sheet_y":15,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F6B4-1F3FF-200D-2640-FE0F","non_qualified":"1F6B4-1F3FF-200D-2640","image":"1f6b4-1f3ff-200d-2640-fe0f.png","sheet_x":35,"sheet_y":16,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Biking","b":"1F6B4-200D-2640-FE0F","c":"1F6B4-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[35,11],"o":4},"mountain_bicyclist":{"skin_variations":{"1F3FB":{"unified":"1F6B5-1F3FB","non_qualified":null,"image":"1f6b5-1f3fb.png","sheet_x":35,"sheet_y":42,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F6B5-1F3FC","non_qualified":null,"image":"1f6b5-1f3fc.png","sheet_x":35,"sheet_y":43,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F6B5-1F3FD","non_qualified":null,"image":"1f6b5-1f3fd.png","sheet_x":35,"sheet_y":44,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F6B5-1F3FE","non_qualified":null,"image":"1f6b5-1f3fe.png","sheet_x":35,"sheet_y":45,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F6B5-1F3FF","non_qualified":null,"image":"1f6b5-1f3ff.png","sheet_x":35,"sheet_y":46,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"obsoleted_by":"1F6B5-200D-2642-FE0F","a":"Mountain Bicyclist","b":"1F6B5","d":true,"e":true,"f":true,"h":false,"k":[35,41],"o":2},"man-mountain-biking":{"skin_variations":{"1F3FB":{"unified":"1F6B5-1F3FB-200D-2642-FE0F","non_qualified":"1F6B5-1F3FB-200D-2642","image":"1f6b5-1f3fb-200d-2642-fe0f.png","sheet_x":35,"sheet_y":36,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F6B5-1F3FC-200D-2642-FE0F","non_qualified":"1F6B5-1F3FC-200D-2642","image":"1f6b5-1f3fc-200d-2642-fe0f.png","sheet_x":35,"sheet_y":37,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F6B5-1F3FD-200D-2642-FE0F","non_qualified":"1F6B5-1F3FD-200D-2642","image":"1f6b5-1f3fd-200d-2642-fe0f.png","sheet_x":35,"sheet_y":38,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F6B5-1F3FE-200D-2642-FE0F","non_qualified":"1F6B5-1F3FE-200D-2642","image":"1f6b5-1f3fe-200d-2642-fe0f.png","sheet_x":35,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F6B5-1F3FF-200D-2642-FE0F","non_qualified":"1F6B5-1F3FF-200D-2642","image":"1f6b5-1f3ff-200d-2642-fe0f.png","sheet_x":35,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"obsoletes":"1F6B5","a":"Man Mountain Biking","b":"1F6B5-200D-2642-FE0F","c":"1F6B5-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[35,35],"o":4},"woman-mountain-biking":{"skin_variations":{"1F3FB":{"unified":"1F6B5-1F3FB-200D-2640-FE0F","non_qualified":"1F6B5-1F3FB-200D-2640","image":"1f6b5-1f3fb-200d-2640-fe0f.png","sheet_x":35,"sheet_y":30,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F6B5-1F3FC-200D-2640-FE0F","non_qualified":"1F6B5-1F3FC-200D-2640","image":"1f6b5-1f3fc-200d-2640-fe0f.png","sheet_x":35,"sheet_y":31,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F6B5-1F3FD-200D-2640-FE0F","non_qualified":"1F6B5-1F3FD-200D-2640","image":"1f6b5-1f3fd-200d-2640-fe0f.png","sheet_x":35,"sheet_y":32,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F6B5-1F3FE-200D-2640-FE0F","non_qualified":"1F6B5-1F3FE-200D-2640","image":"1f6b5-1f3fe-200d-2640-fe0f.png","sheet_x":35,"sheet_y":33,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F6B5-1F3FF-200D-2640-FE0F","non_qualified":"1F6B5-1F3FF-200D-2640","image":"1f6b5-1f3ff-200d-2640-fe0f.png","sheet_x":35,"sheet_y":34,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Mountain Biking","b":"1F6B5-200D-2640-FE0F","c":"1F6B5-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[35,29],"o":4},"person_doing_cartwheel":{"skin_variations":{"1F3FB":{"unified":"1F938-1F3FB","non_qualified":null,"image":"1f938-1f3fb.png","sheet_x":40,"sheet_y":9,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F938-1F3FC","non_qualified":null,"image":"1f938-1f3fc.png","sheet_x":40,"sheet_y":10,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F938-1F3FD","non_qualified":null,"image":"1f938-1f3fd.png","sheet_x":40,"sheet_y":11,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F938-1F3FE","non_qualified":null,"image":"1f938-1f3fe.png","sheet_x":40,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F938-1F3FF","non_qualified":null,"image":"1f938-1f3ff.png","sheet_x":40,"sheet_y":13,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"a":"Person Doing Cartwheel","b":"1F938","d":true,"e":true,"f":true,"h":false,"k":[40,8],"o":4},"man-cartwheeling":{"skin_variations":{"1F3FB":{"unified":"1F938-1F3FB-200D-2642-FE0F","non_qualified":"1F938-1F3FB-200D-2642","image":"1f938-1f3fb-200d-2642-fe0f.png","sheet_x":40,"sheet_y":3,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F938-1F3FC-200D-2642-FE0F","non_qualified":"1F938-1F3FC-200D-2642","image":"1f938-1f3fc-200d-2642-fe0f.png","sheet_x":40,"sheet_y":4,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F938-1F3FD-200D-2642-FE0F","non_qualified":"1F938-1F3FD-200D-2642","image":"1f938-1f3fd-200d-2642-fe0f.png","sheet_x":40,"sheet_y":5,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F938-1F3FE-200D-2642-FE0F","non_qualified":"1F938-1F3FE-200D-2642","image":"1f938-1f3fe-200d-2642-fe0f.png","sheet_x":40,"sheet_y":6,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F938-1F3FF-200D-2642-FE0F","non_qualified":"1F938-1F3FF-200D-2642","image":"1f938-1f3ff-200d-2642-fe0f.png","sheet_x":40,"sheet_y":7,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Cartwheeling","b":"1F938-200D-2642-FE0F","c":"1F938-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[40,2],"o":4},"woman-cartwheeling":{"skin_variations":{"1F3FB":{"unified":"1F938-1F3FB-200D-2640-FE0F","non_qualified":"1F938-1F3FB-200D-2640","image":"1f938-1f3fb-200d-2640-fe0f.png","sheet_x":39,"sheet_y":54,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F938-1F3FC-200D-2640-FE0F","non_qualified":"1F938-1F3FC-200D-2640","image":"1f938-1f3fc-200d-2640-fe0f.png","sheet_x":39,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F938-1F3FD-200D-2640-FE0F","non_qualified":"1F938-1F3FD-200D-2640","image":"1f938-1f3fd-200d-2640-fe0f.png","sheet_x":39,"sheet_y":56,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F938-1F3FE-200D-2640-FE0F","non_qualified":"1F938-1F3FE-200D-2640","image":"1f938-1f3fe-200d-2640-fe0f.png","sheet_x":40,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F938-1F3FF-200D-2640-FE0F","non_qualified":"1F938-1F3FF-200D-2640","image":"1f938-1f3ff-200d-2640-fe0f.png","sheet_x":40,"sheet_y":1,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Cartwheeling","b":"1F938-200D-2640-FE0F","c":"1F938-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[39,53],"o":4},"wrestlers":{"a":"Wrestlers","b":"1F93C","d":true,"e":true,"f":true,"h":true,"k":[40,35],"o":4},"man-wrestling":{"a":"Man Wrestling","b":"1F93C-200D-2642-FE0F","c":"1F93C-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[40,34],"o":4},"woman-wrestling":{"a":"Woman Wrestling","b":"1F93C-200D-2640-FE0F","c":"1F93C-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[40,33],"o":4},"water_polo":{"skin_variations":{"1F3FB":{"unified":"1F93D-1F3FB","non_qualified":null,"image":"1f93d-1f3fb.png","sheet_x":40,"sheet_y":49,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F93D-1F3FC","non_qualified":null,"image":"1f93d-1f3fc.png","sheet_x":40,"sheet_y":50,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F93D-1F3FD","non_qualified":null,"image":"1f93d-1f3fd.png","sheet_x":40,"sheet_y":51,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F93D-1F3FE","non_qualified":null,"image":"1f93d-1f3fe.png","sheet_x":40,"sheet_y":52,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F93D-1F3FF","non_qualified":null,"image":"1f93d-1f3ff.png","sheet_x":40,"sheet_y":53,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"a":"Water Polo","b":"1F93D","d":true,"e":true,"f":true,"h":false,"k":[40,48],"o":4},"man-playing-water-polo":{"skin_variations":{"1F3FB":{"unified":"1F93D-1F3FB-200D-2642-FE0F","non_qualified":"1F93D-1F3FB-200D-2642","image":"1f93d-1f3fb-200d-2642-fe0f.png","sheet_x":40,"sheet_y":43,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F93D-1F3FC-200D-2642-FE0F","non_qualified":"1F93D-1F3FC-200D-2642","image":"1f93d-1f3fc-200d-2642-fe0f.png","sheet_x":40,"sheet_y":44,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F93D-1F3FD-200D-2642-FE0F","non_qualified":"1F93D-1F3FD-200D-2642","image":"1f93d-1f3fd-200d-2642-fe0f.png","sheet_x":40,"sheet_y":45,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F93D-1F3FE-200D-2642-FE0F","non_qualified":"1F93D-1F3FE-200D-2642","image":"1f93d-1f3fe-200d-2642-fe0f.png","sheet_x":40,"sheet_y":46,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F93D-1F3FF-200D-2642-FE0F","non_qualified":"1F93D-1F3FF-200D-2642","image":"1f93d-1f3ff-200d-2642-fe0f.png","sheet_x":40,"sheet_y":47,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Playing Water Polo","b":"1F93D-200D-2642-FE0F","c":"1F93D-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[40,42],"o":4},"woman-playing-water-polo":{"skin_variations":{"1F3FB":{"unified":"1F93D-1F3FB-200D-2640-FE0F","non_qualified":"1F93D-1F3FB-200D-2640","image":"1f93d-1f3fb-200d-2640-fe0f.png","sheet_x":40,"sheet_y":37,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F93D-1F3FC-200D-2640-FE0F","non_qualified":"1F93D-1F3FC-200D-2640","image":"1f93d-1f3fc-200d-2640-fe0f.png","sheet_x":40,"sheet_y":38,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F93D-1F3FD-200D-2640-FE0F","non_qualified":"1F93D-1F3FD-200D-2640","image":"1f93d-1f3fd-200d-2640-fe0f.png","sheet_x":40,"sheet_y":39,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F93D-1F3FE-200D-2640-FE0F","non_qualified":"1F93D-1F3FE-200D-2640","image":"1f93d-1f3fe-200d-2640-fe0f.png","sheet_x":40,"sheet_y":40,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F93D-1F3FF-200D-2640-FE0F","non_qualified":"1F93D-1F3FF-200D-2640","image":"1f93d-1f3ff-200d-2640-fe0f.png","sheet_x":40,"sheet_y":41,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Playing Water Polo","b":"1F93D-200D-2640-FE0F","c":"1F93D-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[40,36],"o":4},"handball":{"skin_variations":{"1F3FB":{"unified":"1F93E-1F3FB","non_qualified":null,"image":"1f93e-1f3fb.png","sheet_x":41,"sheet_y":10,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FC":{"unified":"1F93E-1F3FC","non_qualified":null,"image":"1f93e-1f3fc.png","sheet_x":41,"sheet_y":11,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FD":{"unified":"1F93E-1F3FD","non_qualified":null,"image":"1f93e-1f3fd.png","sheet_x":41,"sheet_y":12,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FE":{"unified":"1F93E-1F3FE","non_qualified":null,"image":"1f93e-1f3fe.png","sheet_x":41,"sheet_y":13,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false},"1F3FF":{"unified":"1F93E-1F3FF","non_qualified":null,"image":"1f93e-1f3ff.png","sheet_x":41,"sheet_y":14,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":false}},"a":"Handball","b":"1F93E","d":true,"e":true,"f":true,"h":false,"k":[41,9],"o":4},"man-playing-handball":{"skin_variations":{"1F3FB":{"unified":"1F93E-1F3FB-200D-2642-FE0F","non_qualified":"1F93E-1F3FB-200D-2642","image":"1f93e-1f3fb-200d-2642-fe0f.png","sheet_x":41,"sheet_y":4,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F93E-1F3FC-200D-2642-FE0F","non_qualified":"1F93E-1F3FC-200D-2642","image":"1f93e-1f3fc-200d-2642-fe0f.png","sheet_x":41,"sheet_y":5,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F93E-1F3FD-200D-2642-FE0F","non_qualified":"1F93E-1F3FD-200D-2642","image":"1f93e-1f3fd-200d-2642-fe0f.png","sheet_x":41,"sheet_y":6,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F93E-1F3FE-200D-2642-FE0F","non_qualified":"1F93E-1F3FE-200D-2642","image":"1f93e-1f3fe-200d-2642-fe0f.png","sheet_x":41,"sheet_y":7,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F93E-1F3FF-200D-2642-FE0F","non_qualified":"1F93E-1F3FF-200D-2642","image":"1f93e-1f3ff-200d-2642-fe0f.png","sheet_x":41,"sheet_y":8,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Playing Handball","b":"1F93E-200D-2642-FE0F","c":"1F93E-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[41,3],"o":4},"woman-playing-handball":{"skin_variations":{"1F3FB":{"unified":"1F93E-1F3FB-200D-2640-FE0F","non_qualified":"1F93E-1F3FB-200D-2640","image":"1f93e-1f3fb-200d-2640-fe0f.png","sheet_x":40,"sheet_y":55,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F93E-1F3FC-200D-2640-FE0F","non_qualified":"1F93E-1F3FC-200D-2640","image":"1f93e-1f3fc-200d-2640-fe0f.png","sheet_x":40,"sheet_y":56,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F93E-1F3FD-200D-2640-FE0F","non_qualified":"1F93E-1F3FD-200D-2640","image":"1f93e-1f3fd-200d-2640-fe0f.png","sheet_x":41,"sheet_y":0,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F93E-1F3FE-200D-2640-FE0F","non_qualified":"1F93E-1F3FE-200D-2640","image":"1f93e-1f3fe-200d-2640-fe0f.png","sheet_x":41,"sheet_y":1,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F93E-1F3FF-200D-2640-FE0F","non_qualified":"1F93E-1F3FF-200D-2640","image":"1f93e-1f3ff-200d-2640-fe0f.png","sheet_x":41,"sheet_y":2,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Playing Handball","b":"1F93E-200D-2640-FE0F","c":"1F93E-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[40,54],"o":4},"juggling":{"skin_variations":{"1F3FB":{"unified":"1F939-1F3FB","non_qualified":null,"image":"1f939-1f3fb.png","sheet_x":40,"sheet_y":27,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F939-1F3FC","non_qualified":null,"image":"1f939-1f3fc.png","sheet_x":40,"sheet_y":28,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F939-1F3FD","non_qualified":null,"image":"1f939-1f3fd.png","sheet_x":40,"sheet_y":29,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F939-1F3FE","non_qualified":null,"image":"1f939-1f3fe.png","sheet_x":40,"sheet_y":30,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F939-1F3FF","non_qualified":null,"image":"1f939-1f3ff.png","sheet_x":40,"sheet_y":31,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Juggling","b":"1F939","d":true,"e":true,"f":true,"h":true,"k":[40,26],"o":4},"man-juggling":{"skin_variations":{"1F3FB":{"unified":"1F939-1F3FB-200D-2642-FE0F","non_qualified":"1F939-1F3FB-200D-2642","image":"1f939-1f3fb-200d-2642-fe0f.png","sheet_x":40,"sheet_y":21,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F939-1F3FC-200D-2642-FE0F","non_qualified":"1F939-1F3FC-200D-2642","image":"1f939-1f3fc-200d-2642-fe0f.png","sheet_x":40,"sheet_y":22,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F939-1F3FD-200D-2642-FE0F","non_qualified":"1F939-1F3FD-200D-2642","image":"1f939-1f3fd-200d-2642-fe0f.png","sheet_x":40,"sheet_y":23,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F939-1F3FE-200D-2642-FE0F","non_qualified":"1F939-1F3FE-200D-2642","image":"1f939-1f3fe-200d-2642-fe0f.png","sheet_x":40,"sheet_y":24,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F939-1F3FF-200D-2642-FE0F","non_qualified":"1F939-1F3FF-200D-2642","image":"1f939-1f3ff-200d-2642-fe0f.png","sheet_x":40,"sheet_y":25,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man Juggling","b":"1F939-200D-2642-FE0F","c":"1F939-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[40,20],"o":4},"woman-juggling":{"skin_variations":{"1F3FB":{"unified":"1F939-1F3FB-200D-2640-FE0F","non_qualified":"1F939-1F3FB-200D-2640","image":"1f939-1f3fb-200d-2640-fe0f.png","sheet_x":40,"sheet_y":15,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F939-1F3FC-200D-2640-FE0F","non_qualified":"1F939-1F3FC-200D-2640","image":"1f939-1f3fc-200d-2640-fe0f.png","sheet_x":40,"sheet_y":16,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F939-1F3FD-200D-2640-FE0F","non_qualified":"1F939-1F3FD-200D-2640","image":"1f939-1f3fd-200d-2640-fe0f.png","sheet_x":40,"sheet_y":17,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F939-1F3FE-200D-2640-FE0F","non_qualified":"1F939-1F3FE-200D-2640","image":"1f939-1f3fe-200d-2640-fe0f.png","sheet_x":40,"sheet_y":18,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F939-1F3FF-200D-2640-FE0F","non_qualified":"1F939-1F3FF-200D-2640","image":"1f939-1f3ff-200d-2640-fe0f.png","sheet_x":40,"sheet_y":19,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Woman Juggling","b":"1F939-200D-2640-FE0F","c":"1F939-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[40,14],"o":4},"person_in_lotus_position":{"skin_variations":{"1F3FB":{"unified":"1F9D8-1F3FB","non_qualified":null,"image":"1f9d8-1f3fb.png","sheet_x":49,"sheet_y":32,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D8-1F3FB-200D-2640-FE0F"},"1F3FC":{"unified":"1F9D8-1F3FC","non_qualified":null,"image":"1f9d8-1f3fc.png","sheet_x":49,"sheet_y":33,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D8-1F3FC-200D-2640-FE0F"},"1F3FD":{"unified":"1F9D8-1F3FD","non_qualified":null,"image":"1f9d8-1f3fd.png","sheet_x":49,"sheet_y":34,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D8-1F3FD-200D-2640-FE0F"},"1F3FE":{"unified":"1F9D8-1F3FE","non_qualified":null,"image":"1f9d8-1f3fe.png","sheet_x":49,"sheet_y":35,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D8-1F3FE-200D-2640-FE0F"},"1F3FF":{"unified":"1F9D8-1F3FF","non_qualified":null,"image":"1f9d8-1f3ff.png","sheet_x":49,"sheet_y":36,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoleted_by":"1F9D8-1F3FF-200D-2640-FE0F"}},"obsoleted_by":"1F9D8-200D-2640-FE0F","a":"Person in Lotus Position","b":"1F9D8","d":true,"e":true,"f":true,"h":true,"k":[49,31],"o":5},"man_in_lotus_position":{"skin_variations":{"1F3FB":{"unified":"1F9D8-1F3FB-200D-2642-FE0F","non_qualified":"1F9D8-1F3FB-200D-2642","image":"1f9d8-1f3fb-200d-2642-fe0f.png","sheet_x":49,"sheet_y":26,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F9D8-1F3FC-200D-2642-FE0F","non_qualified":"1F9D8-1F3FC-200D-2642","image":"1f9d8-1f3fc-200d-2642-fe0f.png","sheet_x":49,"sheet_y":27,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F9D8-1F3FD-200D-2642-FE0F","non_qualified":"1F9D8-1F3FD-200D-2642","image":"1f9d8-1f3fd-200d-2642-fe0f.png","sheet_x":49,"sheet_y":28,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F9D8-1F3FE-200D-2642-FE0F","non_qualified":"1F9D8-1F3FE-200D-2642","image":"1f9d8-1f3fe-200d-2642-fe0f.png","sheet_x":49,"sheet_y":29,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F9D8-1F3FF-200D-2642-FE0F","non_qualified":"1F9D8-1F3FF-200D-2642","image":"1f9d8-1f3ff-200d-2642-fe0f.png","sheet_x":49,"sheet_y":30,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man in Lotus Position","b":"1F9D8-200D-2642-FE0F","c":"1F9D8-200D-2642","d":true,"e":true,"f":true,"h":true,"k":[49,25],"o":5},"woman_in_lotus_position":{"skin_variations":{"1F3FB":{"unified":"1F9D8-1F3FB-200D-2640-FE0F","non_qualified":"1F9D8-1F3FB-200D-2640","image":"1f9d8-1f3fb-200d-2640-fe0f.png","sheet_x":49,"sheet_y":20,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D8-1F3FB"},"1F3FC":{"unified":"1F9D8-1F3FC-200D-2640-FE0F","non_qualified":"1F9D8-1F3FC-200D-2640","image":"1f9d8-1f3fc-200d-2640-fe0f.png","sheet_x":49,"sheet_y":21,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D8-1F3FC"},"1F3FD":{"unified":"1F9D8-1F3FD-200D-2640-FE0F","non_qualified":"1F9D8-1F3FD-200D-2640","image":"1f9d8-1f3fd-200d-2640-fe0f.png","sheet_x":49,"sheet_y":22,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D8-1F3FD"},"1F3FE":{"unified":"1F9D8-1F3FE-200D-2640-FE0F","non_qualified":"1F9D8-1F3FE-200D-2640","image":"1f9d8-1f3fe-200d-2640-fe0f.png","sheet_x":49,"sheet_y":23,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D8-1F3FE"},"1F3FF":{"unified":"1F9D8-1F3FF-200D-2640-FE0F","non_qualified":"1F9D8-1F3FF-200D-2640","image":"1f9d8-1f3ff-200d-2640-fe0f.png","sheet_x":49,"sheet_y":24,"added_in":"5.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true,"obsoletes":"1F9D8-1F3FF"}},"obsoletes":"1F9D8","a":"Woman in Lotus Position","b":"1F9D8-200D-2640-FE0F","c":"1F9D8-200D-2640","d":true,"e":true,"f":true,"h":true,"k":[49,19],"o":5},"bath":{"skin_variations":{"1F3FB":{"unified":"1F6C0-1F3FB","non_qualified":null,"image":"1f6c0-1f3fb.png","sheet_x":36,"sheet_y":18,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F6C0-1F3FC","non_qualified":null,"image":"1f6c0-1f3fc.png","sheet_x":36,"sheet_y":19,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F6C0-1F3FD","non_qualified":null,"image":"1f6c0-1f3fd.png","sheet_x":36,"sheet_y":20,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F6C0-1F3FE","non_qualified":null,"image":"1f6c0-1f3fe.png","sheet_x":36,"sheet_y":21,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F6C0-1F3FF","non_qualified":null,"image":"1f6c0-1f3ff.png","sheet_x":36,"sheet_y":22,"added_in":"2.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Bath","b":"1F6C0","d":true,"e":true,"f":true,"h":true,"j":["clean","shower","bathroom"],"k":[36,17],"o":2},"sleeping_accommodation":{"skin_variations":{"1F3FB":{"unified":"1F6CC-1F3FB","non_qualified":null,"image":"1f6cc-1f3fb.png","sheet_x":36,"sheet_y":30,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F6CC-1F3FC","non_qualified":null,"image":"1f6cc-1f3fc.png","sheet_x":36,"sheet_y":31,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F6CC-1F3FD","non_qualified":null,"image":"1f6cc-1f3fd.png","sheet_x":36,"sheet_y":32,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F6CC-1F3FE","non_qualified":null,"image":"1f6cc-1f3fe.png","sheet_x":36,"sheet_y":33,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F6CC-1F3FF","non_qualified":null,"image":"1f6cc-1f3ff.png","sheet_x":36,"sheet_y":34,"added_in":"4.0","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Sleeping Accommodation","b":"1F6CC","d":true,"e":true,"f":true,"h":true,"k":[36,29],"o":2},"people_holding_hands":{"skin_variations":{"1F3FB-1F3FB":{"unified":"1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FB","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb.png","sheet_x":46,"sheet_y":39,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FB-1F3FC":{"unified":"1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FC","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fc.png","sheet_x":46,"sheet_y":40,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FB-1F3FD":{"unified":"1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FD","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fd.png","sheet_x":46,"sheet_y":41,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FB-1F3FE":{"unified":"1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FE","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fe.png","sheet_x":46,"sheet_y":42,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FB-1F3FF":{"unified":"1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FF","non_qualified":null,"image":"1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3ff.png","sheet_x":46,"sheet_y":43,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FC-1F3FB":{"unified":"1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FB","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb.png","sheet_x":46,"sheet_y":44,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC-1F3FC":{"unified":"1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FC","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc.png","sheet_x":46,"sheet_y":45,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC-1F3FD":{"unified":"1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FD","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fd.png","sheet_x":46,"sheet_y":46,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FC-1F3FE":{"unified":"1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FE","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fe.png","sheet_x":46,"sheet_y":47,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FC-1F3FF":{"unified":"1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FF","non_qualified":null,"image":"1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3ff.png","sheet_x":46,"sheet_y":48,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FD-1F3FB":{"unified":"1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FB","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb.png","sheet_x":46,"sheet_y":49,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD-1F3FC":{"unified":"1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FC","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc.png","sheet_x":46,"sheet_y":50,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD-1F3FD":{"unified":"1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FD","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd.png","sheet_x":46,"sheet_y":51,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD-1F3FE":{"unified":"1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FE","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fe.png","sheet_x":46,"sheet_y":52,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FD-1F3FF":{"unified":"1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FF","non_qualified":null,"image":"1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3ff.png","sheet_x":46,"sheet_y":53,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FE-1F3FB":{"unified":"1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FB","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb.png","sheet_x":46,"sheet_y":54,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FC":{"unified":"1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FC","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc.png","sheet_x":46,"sheet_y":55,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FD":{"unified":"1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FD","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd.png","sheet_x":46,"sheet_y":56,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FE":{"unified":"1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FE","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe.png","sheet_x":47,"sheet_y":0,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FF":{"unified":"1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FF","non_qualified":null,"image":"1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3ff.png","sheet_x":47,"sheet_y":1,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FF-1F3FB":{"unified":"1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FB","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb.png","sheet_x":47,"sheet_y":2,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FC":{"unified":"1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FC","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc.png","sheet_x":47,"sheet_y":3,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FD":{"unified":"1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FD","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd.png","sheet_x":47,"sheet_y":4,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FE":{"unified":"1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FE","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe.png","sheet_x":47,"sheet_y":5,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FF":{"unified":"1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FF","non_qualified":null,"image":"1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff.png","sheet_x":47,"sheet_y":6,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"People Holding Hands","b":"1F9D1-200D-1F91D-200D-1F9D1","d":true,"e":true,"f":true,"h":true,"k":[46,38],"o":12},"two_women_holding_hands":{"skin_variations":{"1F3FB":{"unified":"1F46D-1F3FB","non_qualified":null,"image":"1f46d-1f3fb.png","sheet_x":21,"sheet_y":12,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F46D-1F3FC","non_qualified":null,"image":"1f46d-1f3fc.png","sheet_x":21,"sheet_y":13,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F46D-1F3FD","non_qualified":null,"image":"1f46d-1f3fd.png","sheet_x":21,"sheet_y":14,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F46D-1F3FE","non_qualified":null,"image":"1f46d-1f3fe.png","sheet_x":21,"sheet_y":15,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F46D-1F3FF","non_qualified":null,"image":"1f46d-1f3ff.png","sheet_x":21,"sheet_y":16,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FB-1F3FC":{"unified":"1F469-1F3FB-200D-1F91D-200D-1F469-1F3FC","non_qualified":null,"image":"1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc.png","sheet_x":21,"sheet_y":17,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FB-1F3FD":{"unified":"1F469-1F3FB-200D-1F91D-200D-1F469-1F3FD","non_qualified":null,"image":"1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd.png","sheet_x":21,"sheet_y":18,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FB-1F3FE":{"unified":"1F469-1F3FB-200D-1F91D-200D-1F469-1F3FE","non_qualified":null,"image":"1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe.png","sheet_x":21,"sheet_y":19,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FB-1F3FF":{"unified":"1F469-1F3FB-200D-1F91D-200D-1F469-1F3FF","non_qualified":null,"image":"1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff.png","sheet_x":21,"sheet_y":20,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FC-1F3FB":{"unified":"1F469-1F3FC-200D-1F91D-200D-1F469-1F3FB","non_qualified":null,"image":"1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb.png","sheet_x":21,"sheet_y":21,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC-1F3FD":{"unified":"1F469-1F3FC-200D-1F91D-200D-1F469-1F3FD","non_qualified":null,"image":"1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd.png","sheet_x":21,"sheet_y":22,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FC-1F3FE":{"unified":"1F469-1F3FC-200D-1F91D-200D-1F469-1F3FE","non_qualified":null,"image":"1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe.png","sheet_x":21,"sheet_y":23,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FC-1F3FF":{"unified":"1F469-1F3FC-200D-1F91D-200D-1F469-1F3FF","non_qualified":null,"image":"1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff.png","sheet_x":21,"sheet_y":24,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FD-1F3FB":{"unified":"1F469-1F3FD-200D-1F91D-200D-1F469-1F3FB","non_qualified":null,"image":"1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb.png","sheet_x":21,"sheet_y":25,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD-1F3FC":{"unified":"1F469-1F3FD-200D-1F91D-200D-1F469-1F3FC","non_qualified":null,"image":"1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc.png","sheet_x":21,"sheet_y":26,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD-1F3FE":{"unified":"1F469-1F3FD-200D-1F91D-200D-1F469-1F3FE","non_qualified":null,"image":"1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe.png","sheet_x":21,"sheet_y":27,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FD-1F3FF":{"unified":"1F469-1F3FD-200D-1F91D-200D-1F469-1F3FF","non_qualified":null,"image":"1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff.png","sheet_x":21,"sheet_y":28,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FE-1F3FB":{"unified":"1F469-1F3FE-200D-1F91D-200D-1F469-1F3FB","non_qualified":null,"image":"1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb.png","sheet_x":21,"sheet_y":29,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FC":{"unified":"1F469-1F3FE-200D-1F91D-200D-1F469-1F3FC","non_qualified":null,"image":"1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc.png","sheet_x":21,"sheet_y":30,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FD":{"unified":"1F469-1F3FE-200D-1F91D-200D-1F469-1F3FD","non_qualified":null,"image":"1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd.png","sheet_x":21,"sheet_y":31,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FF":{"unified":"1F469-1F3FE-200D-1F91D-200D-1F469-1F3FF","non_qualified":null,"image":"1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff.png","sheet_x":21,"sheet_y":32,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FF-1F3FB":{"unified":"1F469-1F3FF-200D-1F91D-200D-1F469-1F3FB","non_qualified":null,"image":"1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb.png","sheet_x":21,"sheet_y":33,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FC":{"unified":"1F469-1F3FF-200D-1F91D-200D-1F469-1F3FC","non_qualified":null,"image":"1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc.png","sheet_x":21,"sheet_y":34,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FD":{"unified":"1F469-1F3FF-200D-1F91D-200D-1F469-1F3FD","non_qualified":null,"image":"1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd.png","sheet_x":21,"sheet_y":35,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FE":{"unified":"1F469-1F3FF-200D-1F91D-200D-1F469-1F3FE","non_qualified":null,"image":"1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe.png","sheet_x":21,"sheet_y":36,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Two Women Holding Hands","b":"1F46D","d":true,"e":true,"f":true,"h":true,"j":["pair","friendship","couple","love","like","female","people","human"],"k":[21,11],"n":["women_holding_hands"],"o":2},"couple":{"skin_variations":{"1F3FB":{"unified":"1F46B-1F3FB","non_qualified":null,"image":"1f46b-1f3fb.png","sheet_x":20,"sheet_y":17,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F46B-1F3FC","non_qualified":null,"image":"1f46b-1f3fc.png","sheet_x":20,"sheet_y":18,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F46B-1F3FD","non_qualified":null,"image":"1f46b-1f3fd.png","sheet_x":20,"sheet_y":19,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F46B-1F3FE","non_qualified":null,"image":"1f46b-1f3fe.png","sheet_x":20,"sheet_y":20,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F46B-1F3FF","non_qualified":null,"image":"1f46b-1f3ff.png","sheet_x":20,"sheet_y":21,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FB-1F3FC":{"unified":"1F469-1F3FB-200D-1F91D-200D-1F468-1F3FC","non_qualified":null,"image":"1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc.png","sheet_x":20,"sheet_y":22,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FB-1F3FD":{"unified":"1F469-1F3FB-200D-1F91D-200D-1F468-1F3FD","non_qualified":null,"image":"1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd.png","sheet_x":20,"sheet_y":23,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FB-1F3FE":{"unified":"1F469-1F3FB-200D-1F91D-200D-1F468-1F3FE","non_qualified":null,"image":"1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe.png","sheet_x":20,"sheet_y":24,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FB-1F3FF":{"unified":"1F469-1F3FB-200D-1F91D-200D-1F468-1F3FF","non_qualified":null,"image":"1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff.png","sheet_x":20,"sheet_y":25,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC-1F3FB":{"unified":"1F469-1F3FC-200D-1F91D-200D-1F468-1F3FB","non_qualified":null,"image":"1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb.png","sheet_x":20,"sheet_y":26,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC-1F3FD":{"unified":"1F469-1F3FC-200D-1F91D-200D-1F468-1F3FD","non_qualified":null,"image":"1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd.png","sheet_x":20,"sheet_y":27,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC-1F3FE":{"unified":"1F469-1F3FC-200D-1F91D-200D-1F468-1F3FE","non_qualified":null,"image":"1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe.png","sheet_x":20,"sheet_y":28,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC-1F3FF":{"unified":"1F469-1F3FC-200D-1F91D-200D-1F468-1F3FF","non_qualified":null,"image":"1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff.png","sheet_x":20,"sheet_y":29,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD-1F3FB":{"unified":"1F469-1F3FD-200D-1F91D-200D-1F468-1F3FB","non_qualified":null,"image":"1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb.png","sheet_x":20,"sheet_y":30,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD-1F3FC":{"unified":"1F469-1F3FD-200D-1F91D-200D-1F468-1F3FC","non_qualified":null,"image":"1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc.png","sheet_x":20,"sheet_y":31,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD-1F3FE":{"unified":"1F469-1F3FD-200D-1F91D-200D-1F468-1F3FE","non_qualified":null,"image":"1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe.png","sheet_x":20,"sheet_y":32,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD-1F3FF":{"unified":"1F469-1F3FD-200D-1F91D-200D-1F468-1F3FF","non_qualified":null,"image":"1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff.png","sheet_x":20,"sheet_y":33,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FB":{"unified":"1F469-1F3FE-200D-1F91D-200D-1F468-1F3FB","non_qualified":null,"image":"1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb.png","sheet_x":20,"sheet_y":34,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FC":{"unified":"1F469-1F3FE-200D-1F91D-200D-1F468-1F3FC","non_qualified":null,"image":"1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc.png","sheet_x":20,"sheet_y":35,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FD":{"unified":"1F469-1F3FE-200D-1F91D-200D-1F468-1F3FD","non_qualified":null,"image":"1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd.png","sheet_x":20,"sheet_y":36,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FF":{"unified":"1F469-1F3FE-200D-1F91D-200D-1F468-1F3FF","non_qualified":null,"image":"1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff.png","sheet_x":20,"sheet_y":37,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FB":{"unified":"1F469-1F3FF-200D-1F91D-200D-1F468-1F3FB","non_qualified":null,"image":"1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb.png","sheet_x":20,"sheet_y":38,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FC":{"unified":"1F469-1F3FF-200D-1F91D-200D-1F468-1F3FC","non_qualified":null,"image":"1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc.png","sheet_x":20,"sheet_y":39,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FD":{"unified":"1F469-1F3FF-200D-1F91D-200D-1F468-1F3FD","non_qualified":null,"image":"1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd.png","sheet_x":20,"sheet_y":40,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FE":{"unified":"1F469-1F3FF-200D-1F91D-200D-1F468-1F3FE","non_qualified":null,"image":"1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe.png","sheet_x":20,"sheet_y":41,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Man and Woman Holding Hands","b":"1F46B","d":true,"e":true,"f":true,"h":true,"j":["pair","people","human","love","date","dating","like","affection","valentines","marriage"],"k":[20,16],"n":["man_and_woman_holding_hands","woman_and_man_holding_hands"],"o":2},"two_men_holding_hands":{"skin_variations":{"1F3FB":{"unified":"1F46C-1F3FB","non_qualified":null,"image":"1f46c-1f3fb.png","sheet_x":20,"sheet_y":43,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC":{"unified":"1F46C-1F3FC","non_qualified":null,"image":"1f46c-1f3fc.png","sheet_x":20,"sheet_y":44,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD":{"unified":"1F46C-1F3FD","non_qualified":null,"image":"1f46c-1f3fd.png","sheet_x":20,"sheet_y":45,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE":{"unified":"1F46C-1F3FE","non_qualified":null,"image":"1f46c-1f3fe.png","sheet_x":20,"sheet_y":46,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF":{"unified":"1F46C-1F3FF","non_qualified":null,"image":"1f46c-1f3ff.png","sheet_x":20,"sheet_y":47,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FB-1F3FC":{"unified":"1F468-1F3FB-200D-1F91D-200D-1F468-1F3FC","non_qualified":null,"image":"1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc.png","sheet_x":20,"sheet_y":48,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FB-1F3FD":{"unified":"1F468-1F3FB-200D-1F91D-200D-1F468-1F3FD","non_qualified":null,"image":"1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd.png","sheet_x":20,"sheet_y":49,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FB-1F3FE":{"unified":"1F468-1F3FB-200D-1F91D-200D-1F468-1F3FE","non_qualified":null,"image":"1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe.png","sheet_x":20,"sheet_y":50,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FB-1F3FF":{"unified":"1F468-1F3FB-200D-1F91D-200D-1F468-1F3FF","non_qualified":null,"image":"1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff.png","sheet_x":20,"sheet_y":51,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FC-1F3FB":{"unified":"1F468-1F3FC-200D-1F91D-200D-1F468-1F3FB","non_qualified":null,"image":"1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb.png","sheet_x":20,"sheet_y":52,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FC-1F3FD":{"unified":"1F468-1F3FC-200D-1F91D-200D-1F468-1F3FD","non_qualified":null,"image":"1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd.png","sheet_x":20,"sheet_y":53,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FC-1F3FE":{"unified":"1F468-1F3FC-200D-1F91D-200D-1F468-1F3FE","non_qualified":null,"image":"1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe.png","sheet_x":20,"sheet_y":54,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FC-1F3FF":{"unified":"1F468-1F3FC-200D-1F91D-200D-1F468-1F3FF","non_qualified":null,"image":"1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff.png","sheet_x":20,"sheet_y":55,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FD-1F3FB":{"unified":"1F468-1F3FD-200D-1F91D-200D-1F468-1F3FB","non_qualified":null,"image":"1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb.png","sheet_x":20,"sheet_y":56,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD-1F3FC":{"unified":"1F468-1F3FD-200D-1F91D-200D-1F468-1F3FC","non_qualified":null,"image":"1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc.png","sheet_x":21,"sheet_y":0,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FD-1F3FE":{"unified":"1F468-1F3FD-200D-1F91D-200D-1F468-1F3FE","non_qualified":null,"image":"1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe.png","sheet_x":21,"sheet_y":1,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FD-1F3FF":{"unified":"1F468-1F3FD-200D-1F91D-200D-1F468-1F3FF","non_qualified":null,"image":"1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff.png","sheet_x":21,"sheet_y":2,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FE-1F3FB":{"unified":"1F468-1F3FE-200D-1F91D-200D-1F468-1F3FB","non_qualified":null,"image":"1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb.png","sheet_x":21,"sheet_y":3,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FC":{"unified":"1F468-1F3FE-200D-1F91D-200D-1F468-1F3FC","non_qualified":null,"image":"1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc.png","sheet_x":21,"sheet_y":4,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FD":{"unified":"1F468-1F3FE-200D-1F91D-200D-1F468-1F3FD","non_qualified":null,"image":"1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd.png","sheet_x":21,"sheet_y":5,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FE-1F3FF":{"unified":"1F468-1F3FE-200D-1F91D-200D-1F468-1F3FF","non_qualified":null,"image":"1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff.png","sheet_x":21,"sheet_y":6,"added_in":"12.1","has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_facebook":false},"1F3FF-1F3FB":{"unified":"1F468-1F3FF-200D-1F91D-200D-1F468-1F3FB","non_qualified":null,"image":"1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb.png","sheet_x":21,"sheet_y":7,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FC":{"unified":"1F468-1F3FF-200D-1F91D-200D-1F468-1F3FC","non_qualified":null,"image":"1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc.png","sheet_x":21,"sheet_y":8,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FD":{"unified":"1F468-1F3FF-200D-1F91D-200D-1F468-1F3FD","non_qualified":null,"image":"1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd.png","sheet_x":21,"sheet_y":9,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true},"1F3FF-1F3FE":{"unified":"1F468-1F3FF-200D-1F91D-200D-1F468-1F3FE","non_qualified":null,"image":"1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe.png","sheet_x":21,"sheet_y":10,"added_in":"12.1","has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_facebook":true}},"a":"Two Men Holding Hands","b":"1F46C","d":true,"e":true,"f":true,"h":true,"j":["pair","couple","love","like","bromance","friendship","people","human"],"k":[20,42],"n":["men_holding_hands"],"o":2},"couplekiss":{"obsoleted_by":"1F469-200D-2764-FE0F-200D-1F48B-200D-1F468","a":"Kiss","b":"1F48F","d":true,"e":true,"f":true,"h":true,"k":[25,25],"o":2},"woman-kiss-man":{"obsoletes":"1F48F","a":"Woman Kiss Man","b":"1F469-200D-2764-FE0F-200D-1F48B-200D-1F468","c":"1F469-200D-2764-200D-1F48B-200D-1F468","d":true,"e":true,"f":true,"h":true,"k":[20,7],"o":2},"man-kiss-man":{"a":"Man Kiss Man","b":"1F468-200D-2764-FE0F-200D-1F48B-200D-1F468","c":"1F468-200D-2764-200D-1F48B-200D-1F468","d":true,"e":true,"f":true,"h":true,"k":[17,21],"o":2},"woman-kiss-woman":{"a":"Woman Kiss Woman","b":"1F469-200D-2764-FE0F-200D-1F48B-200D-1F469","c":"1F469-200D-2764-200D-1F48B-200D-1F469","d":true,"e":true,"f":true,"h":true,"k":[20,8],"o":2},"couple_with_heart":{"obsoleted_by":"1F469-200D-2764-FE0F-200D-1F468","a":"Couple with Heart","b":"1F491","d":true,"e":true,"f":true,"h":true,"k":[25,27],"o":2},"woman-heart-man":{"obsoletes":"1F491","a":"Woman Heart Man","b":"1F469-200D-2764-FE0F-200D-1F468","c":"1F469-200D-2764-200D-1F468","d":true,"e":true,"f":true,"h":true,"k":[20,5],"o":2},"man-heart-man":{"a":"Man Heart Man","b":"1F468-200D-2764-FE0F-200D-1F468","c":"1F468-200D-2764-200D-1F468","d":true,"e":true,"f":true,"h":true,"k":[17,20],"o":2},"woman-heart-woman":{"a":"Woman Heart Woman","b":"1F469-200D-2764-FE0F-200D-1F469","c":"1F469-200D-2764-200D-1F469","d":true,"e":true,"f":true,"h":true,"k":[20,6],"o":2},"family":{"obsoleted_by":"1F468-200D-1F469-200D-1F466","a":"Family","b":"1F46A","d":true,"e":true,"f":true,"h":true,"k":[20,15],"n":["man-woman-boy"],"o":2},"man-woman-boy":{"obsoletes":"1F46A","a":"Man Woman Boy","b":"1F468-200D-1F469-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[15,33],"n":["family"],"o":2},"man-woman-girl":{"a":"Man Woman Girl","b":"1F468-200D-1F469-200D-1F467","d":true,"e":true,"f":true,"h":true,"k":[15,35],"o":2},"man-woman-girl-boy":{"a":"Man Woman Girl Boy","b":"1F468-200D-1F469-200D-1F467-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[15,36],"o":2},"man-woman-boy-boy":{"a":"Man Woman Boy Boy","b":"1F468-200D-1F469-200D-1F466-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[15,34],"o":2},"man-woman-girl-girl":{"a":"Man Woman Girl Girl","b":"1F468-200D-1F469-200D-1F467-200D-1F467","d":true,"e":true,"f":true,"h":true,"k":[15,37],"o":2},"man-man-boy":{"a":"Man Man Boy","b":"1F468-200D-1F468-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[15,28],"o":2},"man-man-girl":{"a":"Man Man Girl","b":"1F468-200D-1F468-200D-1F467","d":true,"e":true,"f":true,"h":true,"k":[15,30],"o":2},"man-man-girl-boy":{"a":"Man Man Girl Boy","b":"1F468-200D-1F468-200D-1F467-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[15,31],"o":2},"man-man-boy-boy":{"a":"Man Man Boy Boy","b":"1F468-200D-1F468-200D-1F466-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[15,29],"o":2},"man-man-girl-girl":{"a":"Man Man Girl Girl","b":"1F468-200D-1F468-200D-1F467-200D-1F467","d":true,"e":true,"f":true,"h":true,"k":[15,32],"o":2},"woman-woman-boy":{"a":"Woman Woman Boy","b":"1F469-200D-1F469-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[18,18],"o":2},"woman-woman-girl":{"a":"Woman Woman Girl","b":"1F469-200D-1F469-200D-1F467","d":true,"e":true,"f":true,"h":true,"k":[18,20],"o":2},"woman-woman-girl-boy":{"a":"Woman Woman Girl Boy","b":"1F469-200D-1F469-200D-1F467-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[18,21],"o":2},"woman-woman-boy-boy":{"a":"Woman Woman Boy Boy","b":"1F469-200D-1F469-200D-1F466-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[18,19],"o":2},"woman-woman-girl-girl":{"a":"Woman Woman Girl Girl","b":"1F469-200D-1F469-200D-1F467-200D-1F467","d":true,"e":true,"f":true,"h":true,"k":[18,22],"o":2},"man-boy":{"a":"Man Boy","b":"1F468-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[15,24],"o":4},"man-boy-boy":{"a":"Man Boy Boy","b":"1F468-200D-1F466-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[15,23],"o":4},"man-girl":{"a":"Man Girl","b":"1F468-200D-1F467","d":true,"e":true,"f":true,"h":true,"k":[15,27],"o":4},"man-girl-boy":{"a":"Man Girl Boy","b":"1F468-200D-1F467-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[15,25],"o":4},"man-girl-girl":{"a":"Man Girl Girl","b":"1F468-200D-1F467-200D-1F467","d":true,"e":true,"f":true,"h":true,"k":[15,26],"o":4},"woman-boy":{"a":"Woman Boy","b":"1F469-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[18,14],"o":4},"woman-boy-boy":{"a":"Woman Boy Boy","b":"1F469-200D-1F466-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[18,13],"o":4},"woman-girl":{"a":"Woman Girl","b":"1F469-200D-1F467","d":true,"e":true,"f":true,"h":true,"k":[18,17],"o":4},"woman-girl-boy":{"a":"Woman Girl Boy","b":"1F469-200D-1F467-200D-1F466","d":true,"e":true,"f":true,"h":true,"k":[18,15],"o":4},"woman-girl-girl":{"a":"Woman Girl Girl","b":"1F469-200D-1F467-200D-1F467","d":true,"e":true,"f":true,"h":true,"k":[18,16],"o":4},"speaking_head_in_silhouette":{"a":"Speaking Head in Silhouette","b":"1F5E3-FE0F","c":"1F5E3","d":true,"e":true,"f":true,"h":true,"k":[30,25],"o":2},"bust_in_silhouette":{"a":"Bust in Silhouette","b":"1F464","d":true,"e":true,"f":true,"h":true,"j":["user","person","human"],"k":[14,24],"o":2},"busts_in_silhouette":{"a":"Busts in Silhouette","b":"1F465","d":true,"e":true,"f":true,"h":true,"j":["user","person","human","group","team"],"k":[14,25],"o":2},"footprints":{"a":"Footprints","b":"1F463","d":true,"e":true,"f":true,"h":true,"j":["feet","tracking","walking","beach"],"k":[14,23],"o":2}},"aliases":{"raised_hand":"hand","satisfied":"laughing","tshirt":"shirt","hand_with_index_and_middle_fingers_crossed":"crossed_fingers","sign_of_the_horns":"the_horns","grinning_face_with_star_eyes":"star-struck","reversed_hand_with_middle_finger_extended":"middle_finger","thumbsup":"+1","thumbsdown":"-1","punch":"facepunch","grinning_face_with_one_large_and_one_small_eye":"zany_face","shoe":"mans_shoe","smiling_face_with_smiling_eyes_and_hand_covering_mouth":"face_with_hand_over_mouth","face_with_finger_covering_closed_lips":"shushing_face","face_with_one_eyebrow_raised":"face_with_raised_eyebrow","face_with_open_mouth_vomiting":"face_vomiting","cooking":"fried_egg","flag-cn":"cn","shocked_face_with_exploding_head":"exploding_head","paw_prints":"feet","flag-de":"de","telephone":"phone","flag-es":"es","red_car":"car","flipper":"dolphin","flag-fr":"fr","uk":"gb","flag-gb":"gb","serious_face_with_symbols_covering_mouth":"face_with_symbols_on_mouth","poop":"hankey","shit":"hankey","honeybee":"bee","staff_of_aesculapius":"medical_symbol","lantern":"izakaya_lantern","open_book":"book","sailboat":"boat","knife":"hocho","flag-it":"it","heavy_exclamation_mark":"exclamation","flag-jp":"jp","envelope":"email","flag-kr":"kr","collision":"boom","pencil":"memo","waxing_gibbous_moon":"moon","mother_christmas":"mrs_claus","sun_small_cloud":"mostly_sunny","sun_behind_cloud":"barely_sunny","sun_behind_rain_cloud":"partly_sunny_rain","lightning_cloud":"lightning","tornado_cloud":"tornado","flag-ru":"ru","running":"runner","flag-us":"us","women_holding_hands":"two_women_holding_hands","man_and_woman_holding_hands":"couple","woman_and_man_holding_hands":"couple","men_holding_hands":"two_men_holding_hands","man-woman-boy":"family","family":"man-woman-boy"}};
},{}],"fcMS":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],"P8NW":[function(require,module,exports) {
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],"b9XL":[function(require,module,exports) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}],"wCL8":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uncompress = exports.compress = exports.buildSearch = void 0;
var mapping = {
  name: 'a',
  unified: 'b',
  non_qualified: 'c',
  has_img_apple: 'd',
  has_img_google: 'e',
  has_img_twitter: 'f',
  has_img_facebook: 'h',
  keywords: 'j',
  sheet: 'k',
  emoticons: 'l',
  text: 'm',
  short_names: 'n',
  added_in: 'o'
};

var buildSearch = function buildSearch(emoji) {
  var search = [];

  var addToSearch = function addToSearch(strings, split) {
    if (!strings) {
      return;
    }

    ;
    (Array.isArray(strings) ? strings : [strings]).forEach(function (string) {
      ;
      (split ? string.split(/[-|_|\s]+/) : [string]).forEach(function (s) {
        s = s.toLowerCase();

        if (search.indexOf(s) == -1) {
          search.push(s);
        }
      });
    });
  };

  addToSearch(emoji.short_names, true);
  addToSearch(emoji.name, true);
  addToSearch(emoji.keywords, false);
  addToSearch(emoji.emoticons, false);
  return search.join(',');
};

exports.buildSearch = buildSearch;

var compress = function compress(emoji) {
  emoji.short_names = emoji.short_names.filter(function (short_name) {
    return short_name !== emoji.short_name;
  });
  delete emoji.short_name;
  emoji.sheet = [emoji.sheet_x, emoji.sheet_y];
  delete emoji.sheet_x;
  delete emoji.sheet_y;
  emoji.added_in = parseInt(emoji.added_in);

  if (emoji.added_in === 6) {
    delete emoji.added_in;
  }

  for (var key in mapping) {
    emoji[mapping[key]] = emoji[key];
    delete emoji[key];
  }

  for (var _key in emoji) {
    var value = emoji[_key];

    if (Array.isArray(value) && !value.length) {
      delete emoji[_key];
    } else if (typeof value === 'string' && !value.length) {
      delete emoji[_key];
    } else if (value === null) {
      delete emoji[_key];
    }
  }
};

exports.compress = compress;

var uncompress = function uncompress(data) {
  data.compressed = false;

  for (var id in data.emojis) {
    var emoji = data.emojis[id];

    for (var key in mapping) {
      emoji[key] = emoji[mapping[key]];
      delete emoji[mapping[key]];
    }

    if (!emoji.short_names) emoji.short_names = [];
    emoji.short_names.unshift(id);
    emoji.sheet_x = emoji.sheet[0];
    emoji.sheet_y = emoji.sheet[1];
    delete emoji.sheet;
    if (!emoji.text) emoji.text = '';
    if (!emoji.added_in) emoji.added_in = 6;
    emoji.added_in = emoji.added_in.toFixed(1);
    emoji.search = buildSearch(emoji);
  }
};

exports.uncompress = uncompress;
},{}],"vpWd":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _String = String;

var _default = _String.fromCodePoint || function stringFromCodePoint() {
  var MAX_SIZE = 0x4000;
  var codeUnits = [];
  var highSurrogate;
  var lowSurrogate;
  var index = -1;
  var length = arguments.length;

  if (!length) {
    return '';
  }

  var result = '';

  while (++index < length) {
    var codePoint = Number(arguments[index]);

    if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
    codePoint < 0 || // not a valid Unicode code point
    codePoint > 0x10ffff || // not a valid Unicode code point
    Math.floor(codePoint) != codePoint // not an integer
    ) {
        throw RangeError('Invalid code point: ' + codePoint);
      }

    if (codePoint <= 0xffff) {
      // BMP code point
      codeUnits.push(codePoint);
    } else {
      // Astral code point; split in surrogate halves
      // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      codePoint -= 0x10000;
      highSurrogate = (codePoint >> 10) + 0xd800;
      lowSurrogate = codePoint % 0x400 + 0xdc00;
      codeUnits.push(highSurrogate, lowSurrogate);
    }

    if (index + 1 === length || codeUnits.length > MAX_SIZE) {
      result += String.fromCharCode.apply(null, codeUnits);
      codeUnits.length = 0;
    }
  }

  return result;
};

exports.default = _default;
},{}],"ifVZ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = getData;
exports.getEmojiDataFromNative = getEmojiDataFromNative;
exports.getSanitizedData = getSanitizedData;
exports.uniq = uniq;
exports.intersect = intersect;
exports.deepMerge = deepMerge;
exports.unifiedToNative = unifiedToNative;
exports.measureScrollbar = measureScrollbar;
exports.throttleIdleTask = throttleIdleTask;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _data = require("./data");

var _stringFromCodePoint = _interopRequireDefault(require("../polyfills/stringFromCodePoint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COLONS_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;
var SKINS = ['1F3FA', '1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF'];

function unifiedToNative(unified) {
  var unicodes = unified.split('-'),
      codePoints = unicodes.map(function (u) {
    return "0x".concat(u);
  });
  return _stringFromCodePoint.default.apply(null, codePoints);
}

function sanitize(emoji) {
  var name = emoji.name,
      short_names = emoji.short_names,
      skin_tone = emoji.skin_tone,
      skin_variations = emoji.skin_variations,
      emoticons = emoji.emoticons,
      unified = emoji.unified,
      custom = emoji.custom,
      customCategory = emoji.customCategory,
      imageUrl = emoji.imageUrl,
      id = emoji.id || short_names[0],
      colons = ":".concat(id, ":");

  if (custom) {
    return {
      id: id,
      name: name,
      short_names: short_names,
      colons: colons,
      emoticons: emoticons,
      custom: custom,
      customCategory: customCategory,
      imageUrl: imageUrl
    };
  }

  if (skin_tone) {
    colons += ":skin-tone-".concat(skin_tone, ":");
  }

  return {
    id: id,
    name: name,
    short_names: short_names,
    colons: colons,
    emoticons: emoticons,
    unified: unified.toLowerCase(),
    skin: skin_tone || (skin_variations ? 1 : null),
    "native": unifiedToNative(unified)
  };
}

function getSanitizedData() {
  return sanitize(getData.apply(void 0, arguments));
}

function getData(emoji, skin, set, data) {
  var emojiData = {};

  if (typeof emoji == 'string') {
    var matches = emoji.match(COLONS_REGEX);

    if (matches) {
      emoji = matches[1];

      if (matches[2]) {
        skin = parseInt(matches[2], 10);
      }
    }

    if (data.aliases.hasOwnProperty(emoji)) {
      emoji = data.aliases[emoji];
    }

    if (data.emojis.hasOwnProperty(emoji)) {
      emojiData = data.emojis[emoji];
    } else {
      return null;
    }
  } else if (emoji.id) {
    if (data.aliases.hasOwnProperty(emoji.id)) {
      emoji.id = data.aliases[emoji.id];
    }

    if (data.emojis.hasOwnProperty(emoji.id)) {
      emojiData = data.emojis[emoji.id];
      skin || (skin = emoji.skin);
    }
  }

  if (!Object.keys(emojiData).length) {
    emojiData = emoji;
    emojiData.custom = true;

    if (!emojiData.search) {
      emojiData.search = (0, _data.buildSearch)(emoji);
    }
  }

  emojiData.emoticons || (emojiData.emoticons = []);
  emojiData.variations || (emojiData.variations = []);

  if (emojiData.skin_variations && skin > 1) {
    emojiData = JSON.parse(JSON.stringify(emojiData));
    var skinKey = SKINS[skin - 1],
        variationData = emojiData.skin_variations[skinKey];

    if (variationData) {
      if (!variationData.variations && emojiData.variations) {
        delete emojiData.variations;
      }

      if (set && (variationData["has_img_".concat(set)] == undefined || variationData["has_img_".concat(set)]) || !set) {
        emojiData.skin_tone = skin;

        for (var k in variationData) {
          var v = variationData[k];
          emojiData[k] = v;
        }
      }
    }
  }

  if (emojiData.variations && emojiData.variations.length) {
    emojiData = JSON.parse(JSON.stringify(emojiData));
    emojiData.unified = emojiData.variations.shift();
  }

  return emojiData;
}

function getEmojiDataFromNative(nativeString, set, data) {
  if (data.compressed) {
    (0, _data.uncompress)(data);
  }

  var skinTones = ['🏻', '🏼', '🏽', '🏾', '🏿'];
  var skinCodes = ['1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF'];
  var skin;
  var skinCode;
  var baseNativeString = nativeString;
  skinTones.forEach(function (skinTone, skinToneIndex) {
    if (nativeString.indexOf(skinTone) > 0) {
      skin = skinToneIndex + 2;
      skinCode = skinCodes[skinToneIndex];
    }
  });
  var emojiData;

  for (var id in data.emojis) {
    var emoji = data.emojis[id];
    var emojiUnified = emoji.unified;

    if (emoji.variations && emoji.variations.length) {
      emojiUnified = emoji.variations.shift();
    }

    if (skin && emoji.skin_variations && emoji.skin_variations[skinCode]) {
      emojiUnified = emoji.skin_variations[skinCode].unified;
    }

    if (unifiedToNative(emojiUnified) === baseNativeString) emojiData = emoji;
  }

  if (!emojiData) {
    return null;
  }

  emojiData.id = emojiData.short_names[0];
  return getSanitizedData(emojiData, skin, set, data);
}

function uniq(arr) {
  return arr.reduce(function (acc, item) {
    if (acc.indexOf(item) === -1) {
      acc.push(item);
    }

    return acc;
  }, []);
}

function intersect(a, b) {
  var uniqA = uniq(a);
  var uniqB = uniq(b);
  return uniqA.filter(function (item) {
    return uniqB.indexOf(item) >= 0;
  });
}

function deepMerge(a, b) {
  var o = {};

  for (var key in a) {
    var originalValue = a[key],
        value = originalValue;

    if (b.hasOwnProperty(key)) {
      value = b[key];
    }

    if ((0, _typeof2.default)(value) === 'object') {
      value = deepMerge(originalValue, value);
    }

    o[key] = value;
  }

  return o;
} // https://github.com/sonicdoe/measure-scrollbar


function measureScrollbar() {
  if (typeof document == 'undefined') return 0;
  var div = document.createElement('div');
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.overflow = 'scroll';
  div.style.position = 'absolute';
  div.style.top = '-9999px';
  document.body.appendChild(div);
  var scrollbarWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  return scrollbarWidth;
} // Use requestIdleCallback() if available, else fall back to setTimeout().
// Throttle so as not to run too frequently.


function throttleIdleTask(func) {
  var doIdleTask = typeof requestIdleCallback === 'function' ? requestIdleCallback : setTimeout;
  var running = false;
  return function throttled() {
    if (running) {
      return;
    }

    running = true;
    doIdleTask(function () {
      running = false;
      func();
    });
  };
}
},{"@babel/runtime/helpers/typeof":"b9XL","./data":"wCL8","../polyfills/stringFromCodePoint":"vpWd"}],"XgkV":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var NAMESPACE = 'emoji-mart';
var isLocalStorageSupported = typeof window !== 'undefined' && 'localStorage' in window;
var getter;
var setter;

function setHandlers(handlers) {
  handlers || (handlers = {});
  getter = handlers.getter;
  setter = handlers.setter;
}

function setNamespace(namespace) {
  NAMESPACE = namespace;
}

function update(state) {
  for (var key in state) {
    var value = state[key];
    set(key, value);
  }
}

function set(key, value) {
  if (setter) {
    setter(key, value);
  } else {
    if (!isLocalStorageSupported) return;

    try {
      window.localStorage["".concat(NAMESPACE, ".").concat(key)] = JSON.stringify(value);
    } catch (e) {}
  }
}

function get(key) {
  if (getter) {
    return getter(key);
  } else {
    if (!isLocalStorageSupported) return;

    try {
      var value = window.localStorage["".concat(NAMESPACE, ".").concat(key)];

      if (value) {
        return JSON.parse(value);
      }
    } catch (e) {
      return;
    }
  }
}

var _default = {
  update: update,
  set: set,
  get: get,
  setNamespace: setNamespace,
  setHandlers: setHandlers
};
exports.default = _default;
},{}],"tWBa":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ = require("..");

var _data = require("../data");

var _store = _interopRequireDefault(require("../store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NimbleEmojiIndex = /*#__PURE__*/function () {
  function NimbleEmojiIndex(data, set) {
    (0, _classCallCheck2.default)(this, NimbleEmojiIndex);

    if (data.compressed) {
      (0, _data.uncompress)(data);
    }

    this.data = data || {};
    this.set = set || null;
    this.originalPool = {};
    this.index = {};
    this.emojis = {};
    this.emoticons = {};
    this.customEmojisList = [];
    this.buildIndex();
  }

  (0, _createClass2.default)(NimbleEmojiIndex, [{
    key: "buildIndex",
    value: function buildIndex() {
      var _this = this;

      var _loop = function _loop(emoji) {
        var emojiData = _this.data.emojis[emoji],
            short_names = emojiData.short_names,
            emoticons = emojiData.emoticons,
            skin_variations = emojiData.skin_variations,
            id = short_names[0];

        if (emoticons) {
          emoticons.forEach(function (emoticon) {
            if (_this.emoticons[emoticon]) {
              return;
            }

            _this.emoticons[emoticon] = id;
          });
        } // If skin variations include them


        if (skin_variations) {
          _this.emojis[id] = {};

          for (var skinTone = 1; skinTone <= 6; skinTone++) {
            _this.emojis[id][skinTone] = (0, _.getSanitizedData)({
              id: id,
              skin: skinTone
            }, skinTone, _this.set, _this.data);
          }
        } else {
          _this.emojis[id] = (0, _.getSanitizedData)(id, null, _this.set, _this.data);
        }

        _this.originalPool[id] = emojiData;
      };

      for (var emoji in this.data.emojis) {
        _loop(emoji);
      }
    }
  }, {
    key: "clearCustomEmojis",
    value: function clearCustomEmojis(pool) {
      var _this2 = this;

      this.customEmojisList.forEach(function (emoji) {
        var emojiId = emoji.id || emoji.short_names[0];
        delete pool[emojiId];
        delete _this2.emojis[emojiId];
      });
    }
  }, {
    key: "addCustomToPool",
    value: function addCustomToPool(custom, pool) {
      var _this3 = this;

      if (this.customEmojisList.length) this.clearCustomEmojis(pool);
      custom.forEach(function (emoji) {
        var emojiId = emoji.id || emoji.short_names[0];

        if (emojiId && !pool[emojiId]) {
          pool[emojiId] = (0, _.getData)(emoji, null, null, _this3.data);
          _this3.emojis[emojiId] = (0, _.getSanitizedData)(emoji, null, null, _this3.data);
        }
      });
      this.customEmojisList = custom;
      this.index = {};
    }
  }, {
    key: "search",
    value: function search(value) {
      var _this4 = this;

      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          emojisToShowFilter = _ref.emojisToShowFilter,
          maxResults = _ref.maxResults,
          include = _ref.include,
          exclude = _ref.exclude,
          _ref$custom = _ref.custom,
          custom = _ref$custom === void 0 ? [] : _ref$custom;

      if (this.customEmojisList != custom) this.addCustomToPool(custom, this.originalPool);
      var skinTone = _store.default.get('skin') || 1;
      maxResults || (maxResults = 75);
      include || (include = []);
      exclude || (exclude = []);
      var results = null,
          pool = this.originalPool;

      if (value.length) {
        if (value == '-' || value == '-1') {
          return [this.emojis['-1'][skinTone]];
        }

        var values = value.toLowerCase().split(/[\s|,|\-|_]+/),
            allResults = [];

        if (values.length > 2) {
          values = [values[0], values[1]];
        }

        if (include.length || exclude.length) {
          pool = {};
          this.data.categories.forEach(function (category) {
            var isIncluded = include && include.length ? include.indexOf(category.id) > -1 : true;
            var isExcluded = exclude && exclude.length ? exclude.indexOf(category.id) > -1 : false;

            if (!isIncluded || isExcluded) {
              return;
            }

            category.emojis.forEach(function (emojiId) {
              return pool[emojiId] = _this4.data.emojis[emojiId];
            });
          });

          if (custom.length) {
            var customIsIncluded = include && include.length ? include.indexOf('custom') > -1 : true;
            var customIsExcluded = exclude && exclude.length ? exclude.indexOf('custom') > -1 : false;

            if (customIsIncluded && !customIsExcluded) {
              this.addCustomToPool(custom, pool);
            }
          }
        }

        allResults = values.map(function (value) {
          var aPool = pool,
              aIndex = _this4.index,
              length = 0;

          for (var charIndex = 0; charIndex < value.length; charIndex++) {
            var _char = value[charIndex];
            length++;
            aIndex[_char] || (aIndex[_char] = {});
            aIndex = aIndex[_char];

            if (!aIndex.results) {
              (function () {
                var scores = {};
                aIndex.results = [];
                aIndex.pool = {};

                for (var id in aPool) {
                  var emoji = aPool[id],
                      search = emoji.search,
                      sub = value.substr(0, length),
                      subIndex = search.indexOf(sub);

                  if (subIndex != -1) {
                    var score = subIndex + 1;
                    if (sub == id) score = 0;

                    if (_this4.emojis[id] && _this4.emojis[id][skinTone]) {
                      aIndex.results.push(_this4.emojis[id][skinTone]);
                    } else {
                      aIndex.results.push(_this4.emojis[id]);
                    }

                    aIndex.pool[id] = emoji;
                    scores[id] = score;
                  }
                }

                aIndex.results.sort(function (a, b) {
                  var aScore = scores[a.id],
                      bScore = scores[b.id];

                  if (aScore == bScore) {
                    return a.id.localeCompare(b.id);
                  } else {
                    return aScore - bScore;
                  }
                });
              })();
            }

            aPool = aIndex.pool;
          }

          return aIndex.results;
        }).filter(function (a) {
          return a;
        });

        if (allResults.length > 1) {
          results = _.intersect.apply(null, allResults);
        } else if (allResults.length) {
          results = allResults[0];
        } else {
          results = [];
        }
      }

      if (results) {
        if (emojisToShowFilter) {
          results = results.filter(function (result) {
            return emojisToShowFilter(pool[result.id]);
          });
        }

        if (results && results.length > maxResults) {
          results = results.slice(0, maxResults);
        }
      }

      return results;
    }
  }]);
  return NimbleEmojiIndex;
}();

exports.default = NimbleEmojiIndex;
},{"@babel/runtime/helpers/classCallCheck":"fcMS","@babel/runtime/helpers/createClass":"P8NW","..":"ifVZ","../data":"wCL8","../store":"XgkV"}],"c6xv":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _all = _interopRequireDefault(require("../../../data/all.json"));

var _nimbleEmojiIndex = _interopRequireDefault(require("./nimble-emoji-index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emojiIndex = new _nimbleEmojiIndex.default(_all.default);
var emojis = emojiIndex.emojis,
    emoticons = emojiIndex.emoticons;

function search() {
  return emojiIndex.search.apply(emojiIndex, arguments);
}

var _default = {
  search: search,
  emojis: emojis,
  emoticons: emoticons
};
exports.default = _default;
},{"../../../data/all.json":"Wjva","./nimble-emoji-index":"tWBa"}],"D5Ct":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULTS = ['+1', 'grinning', 'kissing_heart', 'heart_eyes', 'laughing', 'stuck_out_tongue_winking_eye', 'sweat_smile', 'joy', 'scream', 'disappointed', 'unamused', 'weary', 'sob', 'sunglasses', 'heart', 'poop'];
var frequently, initialized;
var defaults = {};

function init() {
  initialized = true;
  frequently = _store.default.get('frequently');
}

function add(emoji) {
  if (!initialized) init();
  var id = emoji.id;
  frequently || (frequently = defaults);
  frequently[id] || (frequently[id] = 0);
  frequently[id] += 1;

  _store.default.set('last', id);

  _store.default.set('frequently', frequently);
}

function get(perLine) {
  if (!initialized) init();

  if (!frequently) {
    defaults = {};
    var result = [];

    for (var i = 0; i < perLine; i++) {
      defaults[DEFAULTS[i]] = perLine - i;
      result.push(DEFAULTS[i]);
    }

    return result;
  }

  var quantity = perLine * 4;
  var frequentlyKeys = [];

  for (var key in frequently) {
    if (frequently.hasOwnProperty(key)) {
      frequentlyKeys.push(key);
    }
  }

  var sorted = frequentlyKeys.sort(function (a, b) {
    return frequently[a] - frequently[b];
  }).reverse();
  var sliced = sorted.slice(0, quantity);

  var last = _store.default.get('last');

  if (last && sliced.indexOf(last) == -1) {
    sliced.pop();
    sliced.push(last);
  }

  return sliced;
}

var _default = {
  add: add,
  get: get
};
exports.default = _default;
},{"./store":"XgkV"}],"IxO8":[function(require,module,exports) {
function _defineProperty(obj, key, value) {
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

module.exports = _defineProperty;
},{}],"dLyZ":[function(require,module,exports) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
},{}],"E7HD":[function(require,module,exports) {
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
},{}],"pxk2":[function(require,module,exports) {
var _typeof = require("../helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
},{"../helpers/typeof":"b9XL","./assertThisInitialized":"E7HD"}],"UJE0":[function(require,module,exports) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
},{}],"AkAO":[function(require,module,exports) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{}],"d4H2":[function(require,module,exports) {
var setPrototypeOf = require("./setPrototypeOf");

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
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
},{"./setPrototypeOf":"AkAO"}],"Asjh":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

},{}],"wVGV":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

},{"./lib/ReactPropTypesSecret":"Asjh"}],"D9Od":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if ("production" !== 'production') {
  var ReactIs = require('react-is'); // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod


  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}
},{"./factoryWithThrowingShims":"wVGV"}],"J9gs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = exports.categories = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var categories = {
  activity: function activity() {
    return _react.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, _react.default.createElement("path", {
      d: "M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"
    }));
  },
  custom: function custom() {
    return _react.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, _react.default.createElement("g", {
      transform: "translate(2.000000, 1.000000)"
    }, _react.default.createElement("rect", {
      id: "Rectangle",
      x: "8",
      y: "0",
      width: "3",
      height: "21",
      rx: "1.5"
    }), _react.default.createElement("rect", {
      id: "Rectangle",
      transform: "translate(9.843, 10.549) rotate(60) translate(-9.843, -10.549) ",
      x: "8.343",
      y: "0.049",
      width: "3",
      height: "21",
      rx: "1.5"
    }), _react.default.createElement("rect", {
      id: "Rectangle",
      transform: "translate(9.843, 10.549) rotate(-60) translate(-9.843, -10.549) ",
      x: "8.343",
      y: "0.049",
      width: "3",
      height: "21",
      rx: "1.5"
    })));
  },
  flags: function flags() {
    return _react.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, _react.default.createElement("path", {
      d: "M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"
    }));
  },
  foods: function foods() {
    return _react.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, _react.default.createElement("path", {
      d: "M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"
    }));
  },
  nature: function nature() {
    return _react.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, _react.default.createElement("path", {
      d: "M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"
    }), _react.default.createElement("path", {
      d: "M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"
    }));
  },
  objects: function objects() {
    return _react.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, _react.default.createElement("path", {
      d: "M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"
    }), _react.default.createElement("path", {
      d: "M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"
    }));
  },
  people: function people() {
    return _react.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, _react.default.createElement("path", {
      d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"
    }), _react.default.createElement("path", {
      d: "M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"
    }));
  },
  places: function places() {
    return _react.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, _react.default.createElement("path", {
      d: "M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"
    }), _react.default.createElement("path", {
      d: "M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"
    }));
  },
  recent: function recent() {
    return _react.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, _react.default.createElement("path", {
      d: "M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"
    }), _react.default.createElement("path", {
      d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"
    }));
  },
  symbols: function symbols() {
    return _react.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, _react.default.createElement("path", {
      d: "M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"
    }));
  }
};
exports.categories = categories;
var search = {
  search: function search() {
    return _react.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "13",
      height: "13",
      viewBox: "0 0 20 20",
      opacity: "0.5"
    }, _react.default.createElement("path", {
      d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
    }));
  },
  "delete": function _delete() {
    return _react.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "13",
      height: "13",
      viewBox: "0 0 20 20",
      opacity: "0.5"
    }, _react.default.createElement("path", {
      d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
    }));
  }
};
exports.search = search;
},{"react":"n8MK"}],"SXJN":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PickerPropTypes = exports.EmojiPropTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmojiPropTypes = {
  data: _propTypes.default.object.isRequired,
  onOver: _propTypes.default.func,
  onLeave: _propTypes.default.func,
  onClick: _propTypes.default.func,
  fallback: _propTypes.default.func,
  backgroundImageFn: _propTypes.default.func,
  "native": _propTypes.default.bool,
  forceSize: _propTypes.default.bool,
  tooltip: _propTypes.default.bool,
  useButton: _propTypes.default.bool,
  skin: _propTypes.default.oneOf([1, 2, 3, 4, 5, 6]),
  sheetSize: _propTypes.default.oneOf([16, 20, 32, 64]),
  sheetColumns: _propTypes.default.number,
  sheetRows: _propTypes.default.number,
  set: _propTypes.default.oneOf(['apple', 'google', 'twitter', 'facebook']),
  size: _propTypes.default.number.isRequired,
  emoji: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired
};
exports.EmojiPropTypes = EmojiPropTypes;
var PickerPropTypes = {
  onClick: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  onSkinChange: _propTypes.default.func,
  perLine: _propTypes.default.number,
  emojiSize: _propTypes.default.number,
  i18n: _propTypes.default.object,
  style: _propTypes.default.object,
  title: _propTypes.default.string,
  emoji: _propTypes.default.string,
  color: _propTypes.default.string,
  set: EmojiPropTypes.set,
  skin: EmojiPropTypes.skin,
  "native": _propTypes.default.bool,
  backgroundImageFn: EmojiPropTypes.backgroundImageFn,
  sheetSize: EmojiPropTypes.sheetSize,
  emojisToShowFilter: _propTypes.default.func,
  showPreview: _propTypes.default.bool,
  showSkinTones: _propTypes.default.bool,
  emojiTooltip: EmojiPropTypes.tooltip,
  useButton: EmojiPropTypes.useButton,
  theme: _propTypes.default.oneOf(['auto', 'light', 'dark']),
  include: _propTypes.default.arrayOf(_propTypes.default.string),
  exclude: _propTypes.default.arrayOf(_propTypes.default.string),
  recent: _propTypes.default.arrayOf(_propTypes.default.string),
  autoFocus: _propTypes.default.bool,
  enableFrequentEmojiSort: _propTypes.default.bool,
  custom: _propTypes.default.arrayOf(_propTypes.default.shape({
    name: _propTypes.default.string.isRequired,
    short_names: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
    emoticons: _propTypes.default.arrayOf(_propTypes.default.string),
    keywords: _propTypes.default.arrayOf(_propTypes.default.string),
    imageUrl: _propTypes.default.string,
    spriteUrl: _propTypes.default.string,
    sheet_x: _propTypes.default.number,
    sheet_y: _propTypes.default.number,
    size: _propTypes.default.number,
    sheetColumns: _propTypes.default.number,
    sheetRows: _propTypes.default.number
  })),
  skinEmoji: _propTypes.default.string,
  notFound: _propTypes.default.func,
  notFoundEmoji: _propTypes.default.string,
  icons: _propTypes.default.object
};
exports.PickerPropTypes = PickerPropTypes;
},{"prop-types":"D9Od"}],"gAqE":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Anchors = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(Anchors, _React$PureComponent);

  function Anchors(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Anchors);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Anchors).call(this, props));
    var defaultCategory = props.categories.filter(function (category) {
      return category.first;
    })[0];
    _this.state = {
      selected: defaultCategory.name
    };
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Anchors, [{
    key: "handleClick",
    value: function handleClick(e) {
      var index = e.currentTarget.getAttribute('data-index');
      var _this$props = this.props,
          categories = _this$props.categories,
          onAnchorClick = _this$props.onAnchorClick;
      onAnchorClick(categories[index], index);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          categories = _this$props2.categories,
          color = _this$props2.color,
          i18n = _this$props2.i18n,
          icons = _this$props2.icons,
          selected = this.state.selected;
      return _react.default.createElement("nav", {
        className: "emoji-mart-anchors",
        "aria-label": i18n.categorieslabel
      }, categories.map(function (category, i) {
        var id = category.id,
            name = category.name,
            anchor = category.anchor,
            isSelected = name == selected;

        if (anchor === false) {
          return null;
        }

        var iconId = id.startsWith('custom-') ? 'custom' : id;
        return _react.default.createElement("button", {
          key: id,
          "aria-label": i18n.categories[id],
          title: i18n.categories[id],
          "data-index": i,
          type: 'button',
          onClick: _this2.handleClick,
          className: "emoji-mart-anchor ".concat(isSelected ? 'emoji-mart-anchor-selected' : ''),
          style: {
            color: isSelected ? color : null
          }
        }, _react.default.createElement("div", {
          className: "emoji-mart-anchor-icon"
        }, icons.categories[iconId]()), _react.default.createElement("span", {
          className: "emoji-mart-anchor-bar",
          style: {
            backgroundColor: color
          }
        }));
      }));
    }
  }]);
  return Anchors;
}(_react.default.PureComponent);

exports.default = Anchors;
Anchors.propTypes
/* remove-proptypes */
= {
  categories: _propTypes.default.array,
  onAnchorClick: _propTypes.default.func,
  icons: _propTypes.default.object
};
Anchors.defaultProps = {
  categories: [],
  onAnchorClick: function onAnchorClick() {},
  icons: {}
};
},{"@babel/runtime/helpers/classCallCheck":"fcMS","@babel/runtime/helpers/createClass":"P8NW","@babel/runtime/helpers/possibleConstructorReturn":"pxk2","@babel/runtime/helpers/getPrototypeOf":"UJE0","@babel/runtime/helpers/assertThisInitialized":"E7HD","@babel/runtime/helpers/inherits":"d4H2","react":"n8MK","prop-types":"D9Od"}],"iDF3":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmojiDefaultProps = exports.PickerDefaultProps = void 0;
var EmojiDefaultProps = {
  skin: 1,
  set: 'apple',
  sheetSize: 64,
  sheetColumns: 57,
  sheetRows: 57,
  "native": false,
  forceSize: false,
  tooltip: false,
  useButton: true,
  backgroundImageFn: function backgroundImageFn(set, sheetSize) {
    return "https://unpkg.com/emoji-datasource-".concat(set, "@").concat("5.0.1", "/img/").concat(set, "/sheets-256/").concat(sheetSize, ".png");
  }
};
exports.EmojiDefaultProps = EmojiDefaultProps;
var PickerDefaultProps = {
  onClick: function onClick() {},
  onSelect: function onSelect() {},
  onSkinChange: function onSkinChange() {},
  emojiSize: 24,
  perLine: 9,
  i18n: {},
  style: {},
  title: 'Emoji Mart™',
  emoji: 'department_store',
  color: '#ae65c5',
  set: EmojiDefaultProps.set,
  theme: 'light',
  skin: null,
  defaultSkin: EmojiDefaultProps.skin,
  "native": EmojiDefaultProps["native"],
  sheetSize: EmojiDefaultProps.sheetSize,
  backgroundImageFn: EmojiDefaultProps.backgroundImageFn,
  emojisToShowFilter: null,
  showPreview: true,
  showSkinTones: true,
  emojiTooltip: EmojiDefaultProps.tooltip,
  useButton: EmojiDefaultProps.useButton,
  autoFocus: false,
  enableFrequentEmojiSort: false,
  custom: [],
  skinEmoji: '',
  notFound: function notFound() {},
  notFoundEmoji: 'sleuth_or_spy',
  icons: {}
};
exports.PickerDefaultProps = PickerDefaultProps;
},{}],"u63F":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../utils");

var _data = require("../../utils/data");

var _sharedProps = require("../../utils/shared-props");

var _sharedDefaultProps = require("../../utils/shared-default-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0, _defineProperty2.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var _getData = function _getData(props) {
  var emoji = props.emoji,
      skin = props.skin,
      set = props.set,
      data = props.data;
  return (0, _utils.getData)(emoji, skin, set, data);
};

var _getPosition = function _getPosition(props) {
  var _getData2 = _getData(props),
      sheet_x = _getData2.sheet_x,
      sheet_y = _getData2.sheet_y,
      multiplyX = 100 / (props.sheetColumns - 1),
      multiplyY = 100 / (props.sheetRows - 1);

  return "".concat(multiplyX * sheet_x, "% ").concat(multiplyY * sheet_y, "%");
};

var _getSanitizedData = function _getSanitizedData(props) {
  var emoji = props.emoji,
      skin = props.skin,
      set = props.set,
      data = props.data;
  return (0, _utils.getSanitizedData)(emoji, skin, set, data);
};

var _handleClick = function _handleClick(e, props) {
  if (!props.onClick) {
    return;
  }

  var onClick = props.onClick,
      emoji = _getSanitizedData(props);

  onClick(emoji, e);
};

var _handleOver = function _handleOver(e, props) {
  if (!props.onOver) {
    return;
  }

  var onOver = props.onOver,
      emoji = _getSanitizedData(props);

  onOver(emoji, e);
};

var _handleLeave = function _handleLeave(e, props) {
  if (!props.onLeave) {
    return;
  }

  var onLeave = props.onLeave,
      emoji = _getSanitizedData(props);

  onLeave(emoji, e);
};

var _isNumeric = function _isNumeric(value) {
  return !isNaN(value - parseFloat(value));
};

var _convertStyleToCSS = function _convertStyleToCSS(style) {
  var div = document.createElement('div');

  for (var key in style) {
    var value = style[key];

    if (_isNumeric(value)) {
      value += 'px';
    }

    div.style[key] = value;
  }

  return div.getAttribute('style');
};

var NimbleEmoji = function NimbleEmoji(props) {
  if (props.data.compressed) {
    (0, _data.uncompress)(props.data);
  }

  for (var k in NimbleEmoji.defaultProps) {
    if (props[k] == undefined && NimbleEmoji.defaultProps[k] != undefined) {
      props[k] = NimbleEmoji.defaultProps[k];
    }
  }

  var data = _getData(props);

  if (!data) {
    if (props.fallback) {
      return props.fallback(null, props);
    } else {
      return null;
    }
  }

  var unified = data.unified,
      custom = data.custom,
      short_names = data.short_names,
      imageUrl = data.imageUrl,
      style = {},
      children = props.children,
      className = 'emoji-mart-emoji',
      nativeEmoji = unified && (0, _utils.unifiedToNative)(unified),
      label = [nativeEmoji].concat(short_names).filter(Boolean).join(', '),
      title = null;

  if (!unified && !custom) {
    if (props.fallback) {
      return props.fallback(data, props);
    } else {
      return null;
    }
  }

  if (props.tooltip) {
    title = short_names[0];
  }

  if (props["native"] && unified) {
    className += ' emoji-mart-emoji-native';
    style = {
      fontSize: props.size
    };
    children = nativeEmoji;

    if (props.forceSize) {
      style.display = 'inline-block';
      style.width = props.size;
      style.height = props.size;
      style.wordBreak = 'keep-all';
    }
  } else if (custom) {
    className += ' emoji-mart-emoji-custom';
    style = {
      width: props.size,
      height: props.size,
      display: 'inline-block'
    };

    if (data.spriteUrl) {
      style = _objectSpread({}, style, {
        backgroundImage: "url(".concat(data.spriteUrl, ")"),
        backgroundSize: "".concat(100 * props.sheetColumns, "% ").concat(100 * props.sheetRows, "%"),
        backgroundPosition: _getPosition(props)
      });
    } else {
      style = _objectSpread({}, style, {
        backgroundImage: "url(".concat(imageUrl, ")"),
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      });
    }
  } else {
    var setHasEmoji = data["has_img_".concat(props.set)] == undefined || data["has_img_".concat(props.set)];

    if (!setHasEmoji) {
      if (props.fallback) {
        return props.fallback(data, props);
      } else {
        return null;
      }
    } else {
      style = {
        width: props.size,
        height: props.size,
        display: 'inline-block',
        backgroundImage: "url(".concat(props.backgroundImageFn(props.set, props.sheetSize), ")"),
        backgroundSize: "".concat(100 * props.sheetColumns, "% ").concat(100 * props.sheetRows, "%"),
        backgroundPosition: _getPosition(props)
      };
    }
  }

  var Tag = {
    name: 'span',
    props: {}
  };

  if (props.onClick && props.useButton) {
    Tag.name = 'button';
    Tag.props = {
      type: 'button'
    };
  }

  if (props.html) {
    style = _convertStyleToCSS(style);
    return "<".concat(Tag.name, " style='").concat(style, "' aria-label='").concat(label, "' ").concat(title ? "title='".concat(title, "'") : '', " class='").concat(className, "'>").concat(children || '', "</").concat(Tag.name, ">");
  } else {
    return _react.default.createElement(Tag.name, (0, _extends2.default)({
      onClick: function onClick(e) {
        return _handleClick(e, props);
      },
      onMouseEnter: function onMouseEnter(e) {
        return _handleOver(e, props);
      },
      onMouseLeave: function onMouseLeave(e) {
        return _handleLeave(e, props);
      },
      "aria-label": label,
      title: title,
      className: className
    }, Tag.props), _react.default.createElement("span", {
      style: style
    }, children));
  }
};

NimbleEmoji.propTypes
/* remove-proptypes */
= _objectSpread({}, _sharedProps.EmojiPropTypes, {
  data: _propTypes.default.object.isRequired
});
NimbleEmoji.defaultProps = _sharedDefaultProps.EmojiDefaultProps;
var _default = NimbleEmoji;
exports.default = _default;
},{"@babel/runtime/helpers/extends":"dLyZ","@babel/runtime/helpers/defineProperty":"IxO8","react":"n8MK","prop-types":"D9Od","../../utils":"ifVZ","../../utils/data":"wCL8","../../utils/shared-props":"SXJN","../../utils/shared-default-props":"iDF3"}],"WybT":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _nimbleEmoji = _interopRequireDefault(require("./emoji/nimble-emoji"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0, _defineProperty2.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var NotFound = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(NotFound, _React$PureComponent);

  function NotFound() {
    (0, _classCallCheck2.default)(this, NotFound);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NotFound).apply(this, arguments));
  }

  (0, _createClass2.default)(NotFound, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          emojiProps = _this$props.emojiProps,
          i18n = _this$props.i18n,
          notFound = _this$props.notFound,
          notFoundEmoji = _this$props.notFoundEmoji;

      var component = notFound && notFound() || _react.default.createElement("div", {
        className: "emoji-mart-no-results"
      }, (0, _nimbleEmoji.default)(_objectSpread({
        data: data
      }, emojiProps, {
        size: 38,
        emoji: notFoundEmoji,
        onOver: null,
        onLeave: null,
        onClick: null
      })), _react.default.createElement("div", {
        className: "emoji-mart-no-results-label"
      }, i18n.notfound));

      return component;
    }
  }]);
  return NotFound;
}(_react.default.PureComponent);

exports.default = NotFound;
NotFound.propTypes
/* remove-proptypes */
= {
  notFound: _propTypes.default.func.isRequired,
  emojiProps: _propTypes.default.object.isRequired
};
},{"@babel/runtime/helpers/defineProperty":"IxO8","@babel/runtime/helpers/classCallCheck":"fcMS","@babel/runtime/helpers/createClass":"P8NW","@babel/runtime/helpers/possibleConstructorReturn":"pxk2","@babel/runtime/helpers/getPrototypeOf":"UJE0","@babel/runtime/helpers/inherits":"d4H2","react":"n8MK","prop-types":"D9Od","./emoji/nimble-emoji":"u63F"}],"yD1U":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _frequently = _interopRequireDefault(require("../utils/frequently"));

var _utils = require("../utils");

var _nimbleEmoji = _interopRequireDefault(require("./emoji/nimble-emoji"));

var _notFound = _interopRequireDefault(require("./not-found"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0, _defineProperty2.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var Category = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Category, _React$Component);

  function Category(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Category);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Category).call(this, props));
    _this.data = props.data;
    _this.setContainerRef = _this.setContainerRef.bind((0, _assertThisInitialized2.default)(_this));
    _this.setLabelRef = _this.setLabelRef.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Category, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.margin = 0;
      this.minMargin = 0;
      this.memoizeSize();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _this$props = this.props,
          name = _this$props.name,
          perLine = _this$props.perLine,
          _native = _this$props["native"],
          hasStickyPosition = _this$props.hasStickyPosition,
          emojis = _this$props.emojis,
          emojiProps = _this$props.emojiProps,
          skin = emojiProps.skin,
          size = emojiProps.size,
          set = emojiProps.set,
          nextPerLine = nextProps.perLine,
          nextNative = nextProps["native"],
          nextHasStickyPosition = nextProps.hasStickyPosition,
          nextEmojis = nextProps.emojis,
          nextEmojiProps = nextProps.emojiProps,
          nextSkin = nextEmojiProps.skin,
          nextSize = nextEmojiProps.size,
          nextSet = nextEmojiProps.set,
          shouldUpdate = false;

      if (name == 'Recent' && perLine != nextPerLine) {
        shouldUpdate = true;
      }

      if (name == 'Search') {
        shouldUpdate = !(emojis == nextEmojis);
      }

      if (skin != nextSkin || size != nextSize || _native != nextNative || set != nextSet || hasStickyPosition != nextHasStickyPosition) {
        shouldUpdate = true;
      }

      return shouldUpdate;
    }
  }, {
    key: "memoizeSize",
    value: function memoizeSize() {
      if (!this.container) {
        // probably this is a test environment, e.g. jest
        this.top = 0;
        this.maxMargin = 0;
        return;
      }

      var parent = this.container.parentElement;

      var _this$container$getBo = this.container.getBoundingClientRect(),
          top = _this$container$getBo.top,
          height = _this$container$getBo.height;

      var _parent$getBoundingCl = parent.getBoundingClientRect(),
          parentTop = _parent$getBoundingCl.top;

      var _this$label$getBoundi = this.label.getBoundingClientRect(),
          labelHeight = _this$label$getBoundi.height;

      this.top = top - parentTop + parent.scrollTop;

      if (height == 0) {
        this.maxMargin = 0;
      } else {
        this.maxMargin = height - labelHeight;
      }
    }
  }, {
    key: "handleScroll",
    value: function handleScroll(scrollTop) {
      var margin = scrollTop - this.top;
      margin = margin < this.minMargin ? this.minMargin : margin;
      margin = margin > this.maxMargin ? this.maxMargin : margin;
      if (margin == this.margin) return;

      if (!this.props.hasStickyPosition) {
        this.label.style.top = "".concat(margin, "px");
      }

      this.margin = margin;
      return true;
    }
  }, {
    key: "getEmojis",
    value: function getEmojis() {
      var _this2 = this;

      var _this$props2 = this.props,
          name = _this$props2.name,
          emojis = _this$props2.emojis,
          recent = _this$props2.recent,
          perLine = _this$props2.perLine;

      if (name == 'Recent') {
        var custom = this.props.custom;

        var frequentlyUsed = recent || _frequently.default.get(perLine);

        if (frequentlyUsed.length) {
          emojis = frequentlyUsed.map(function (id) {
            var emoji = custom.filter(function (e) {
              return e.id === id;
            })[0];

            if (emoji) {
              return emoji;
            }

            return id;
          }).filter(function (id) {
            return !!(0, _utils.getData)(id, null, null, _this2.data);
          });
        }

        if (emojis.length === 0 && frequentlyUsed.length > 0) {
          return null;
        }
      }

      if (emojis) {
        emojis = emojis.slice(0);
      }

      return emojis;
    }
  }, {
    key: "updateDisplay",
    value: function updateDisplay(display) {
      var emojis = this.getEmojis();

      if (!emojis || !this.container) {
        return;
      }

      this.container.style.display = display;
    }
  }, {
    key: "setContainerRef",
    value: function setContainerRef(c) {
      this.container = c;
    }
  }, {
    key: "setLabelRef",
    value: function setLabelRef(c) {
      this.label = c;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props3 = this.props,
          id = _this$props3.id,
          name = _this$props3.name,
          hasStickyPosition = _this$props3.hasStickyPosition,
          emojiProps = _this$props3.emojiProps,
          i18n = _this$props3.i18n,
          notFound = _this$props3.notFound,
          notFoundEmoji = _this$props3.notFoundEmoji,
          emojis = this.getEmojis(),
          labelStyles = {},
          labelSpanStyles = {},
          containerStyles = {};

      if (!emojis) {
        containerStyles = {
          display: 'none'
        };
      }

      if (!hasStickyPosition) {
        labelStyles = {
          height: 28
        };
        labelSpanStyles = {
          position: 'absolute'
        };
      }

      var label = i18n.categories[id] || name;
      return _react.default.createElement("section", {
        ref: this.setContainerRef,
        className: "emoji-mart-category",
        "aria-label": label,
        style: containerStyles
      }, _react.default.createElement("div", {
        style: labelStyles,
        "data-name": name,
        className: "emoji-mart-category-label"
      }, _react.default.createElement("span", {
        style: labelSpanStyles,
        ref: this.setLabelRef,
        "aria-hidden": true
        /* already labeled by the section aria-label */

      }, label)), _react.default.createElement("ul", {
        className: "emoji-mart-category-list"
      }, emojis && emojis.map(function (emoji) {
        return _react.default.createElement("li", {
          key: emoji.short_names && emoji.short_names.join('_') || emoji
        }, (0, _nimbleEmoji.default)(_objectSpread({
          emoji: emoji,
          data: _this3.data
        }, emojiProps)));
      })), emojis && !emojis.length && _react.default.createElement(_notFound.default, {
        i18n: i18n,
        notFound: notFound,
        notFoundEmoji: notFoundEmoji,
        data: this.data,
        emojiProps: emojiProps
      }));
    }
  }]);
  return Category;
}(_react.default.Component);

exports.default = Category;
Category.propTypes
/* remove-proptypes */
= {
  emojis: _propTypes.default.array,
  hasStickyPosition: _propTypes.default.bool,
  name: _propTypes.default.string.isRequired,
  "native": _propTypes.default.bool.isRequired,
  perLine: _propTypes.default.number.isRequired,
  emojiProps: _propTypes.default.object.isRequired,
  recent: _propTypes.default.arrayOf(_propTypes.default.string),
  notFound: _propTypes.default.func,
  notFoundEmoji: _propTypes.default.string.isRequired
};
Category.defaultProps = {
  emojis: [],
  hasStickyPosition: true
};
},{"@babel/runtime/helpers/defineProperty":"IxO8","@babel/runtime/helpers/classCallCheck":"fcMS","@babel/runtime/helpers/createClass":"P8NW","@babel/runtime/helpers/possibleConstructorReturn":"pxk2","@babel/runtime/helpers/getPrototypeOf":"UJE0","@babel/runtime/helpers/assertThisInitialized":"E7HD","@babel/runtime/helpers/inherits":"d4H2","react":"n8MK","prop-types":"D9Od","../utils/frequently":"D5Ct","../utils":"ifVZ","./emoji/nimble-emoji":"u63F","./not-found":"WybT"}],"jAxA":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Skins = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(Skins, _React$PureComponent);

  function Skins(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Skins);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Skins).call(this, props));
    _this.state = {
      opened: false
    };
    return _this;
  }

  (0, _createClass2.default)(Skins, [{
    key: "handleClick",
    value: function handleClick(e) {
      var skin = parseInt(e.currentTarget.getAttribute('data-skin'));
      var onChange = this.props.onChange;

      if (!this.state.opened) {
        this.setState({
          opened: true
        });
      } else {
        this.setState({
          opened: false
        });

        if (skin != this.props.skin) {
          onChange(skin);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Skins;
}(_react.default.PureComponent);

exports.default = Skins;
Skins.propTypes
/* remove-proptypes */
= {
  onChange: _propTypes.default.func,
  skin: _propTypes.default.number.isRequired
};
Skins.defaultProps = {
  onChange: function onChange() {}
};
},{"@babel/runtime/helpers/classCallCheck":"fcMS","@babel/runtime/helpers/createClass":"P8NW","@babel/runtime/helpers/possibleConstructorReturn":"pxk2","@babel/runtime/helpers/getPrototypeOf":"UJE0","@babel/runtime/helpers/inherits":"d4H2","react":"n8MK","prop-types":"D9Od"}],"NmNn":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _nimbleEmoji = _interopRequireDefault(require("./emoji/nimble-emoji"));

var _skins = _interopRequireDefault(require("./skins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SkinsEmoji = /*#__PURE__*/function (_Skins) {
  (0, _inherits2.default)(SkinsEmoji, _Skins);

  function SkinsEmoji(props) {
    var _this;

    (0, _classCallCheck2.default)(this, SkinsEmoji);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SkinsEmoji).call(this, props));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(SkinsEmoji, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          skin = _this$props.skin,
          emojiProps = _this$props.emojiProps,
          data = _this$props.data,
          skinEmoji = _this$props.skinEmoji,
          i18n = _this$props.i18n;
      var opened = this.state.opened;
      var skinToneNodes = [];

      for (var skinTone = 1; skinTone <= 6; skinTone++) {
        var selected = skinTone === skin;
        skinToneNodes.push(_react.default.createElement("span", {
          key: "skin-tone-".concat(skinTone),
          className: "emoji-mart-skin-swatch custom".concat(selected ? ' selected' : '')
        }, _react.default.createElement("span", {
          onClick: this.handleClick,
          "data-skin": skinTone,
          className: "emoji-mart-skin-tone-".concat(skinTone)
        }, (0, _nimbleEmoji.default)({
          emoji: skinEmoji,
          data: data,
          skin: skinTone,
          backgroundImageFn: emojiProps.backgroundImageFn,
          "native": emojiProps["native"],
          set: emojiProps.set,
          sheetSize: emojiProps.sheetSize,
          size: 23
        }))));
      }

      return _react.default.createElement("div", {
        className: "emoji-mart-skin-swatches custom".concat(opened ? ' opened' : '')
      }, _react.default.createElement("div", {
        className: "emoji-mart-skin-text".concat(opened ? ' opened' : '')
      }, i18n.skintext), skinToneNodes);
    }
  }]);
  return SkinsEmoji;
}(_skins.default);

exports.default = SkinsEmoji;
SkinsEmoji.propTypes
/* remove-proptypes */
= {
  onChange: _propTypes.default.func,
  skin: _propTypes.default.number.isRequired,
  emojiProps: _propTypes.default.object.isRequired,
  skinTone: _propTypes.default.number,
  skinEmoji: _propTypes.default.string.isRequired,
  i18n: _propTypes.default.object
};
SkinsEmoji.defaultProps = {
  onChange: function onChange() {},
  skinTone: null
};
},{"@babel/runtime/helpers/classCallCheck":"fcMS","@babel/runtime/helpers/createClass":"P8NW","@babel/runtime/helpers/possibleConstructorReturn":"pxk2","@babel/runtime/helpers/getPrototypeOf":"UJE0","@babel/runtime/helpers/assertThisInitialized":"E7HD","@babel/runtime/helpers/inherits":"d4H2","react":"n8MK","prop-types":"D9Od","./emoji/nimble-emoji":"u63F","./skins":"jAxA"}],"if6z":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _skins = _interopRequireDefault(require("./skins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SkinsDot = /*#__PURE__*/function (_Skins) {
  (0, _inherits2.default)(SkinsDot, _Skins);

  function SkinsDot(props) {
    var _this;

    (0, _classCallCheck2.default)(this, SkinsDot);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SkinsDot).call(this, props));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(SkinsDot, [{
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      // if either enter or space is pressed, then execute
      if (event.keyCode === 13 || event.keyCode === 32) {
        event.preventDefault();
        this.handleClick(event);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          skin = _this$props.skin,
          i18n = _this$props.i18n;
      var opened = this.state.opened;
      var skinToneNodes = [];

      for (var skinTone = 1; skinTone <= 6; skinTone++) {
        var selected = skinTone === skin;
        var visible = opened || selected;
        skinToneNodes.push(_react.default.createElement("span", (0, _extends2.default)({
          key: "skin-tone-".concat(skinTone),
          className: "emoji-mart-skin-swatch".concat(selected ? ' selected' : ''),
          "aria-label": i18n.skintones[skinTone],
          "aria-hidden": !visible
        }, opened ? {
          role: 'menuitem'
        } : {}), _react.default.createElement("span", (0, _extends2.default)({
          onClick: this.handleClick,
          onKeyDown: this.handleKeyDown,
          role: "button"
        }, selected ? {
          'aria-haspopup': true,
          'aria-expanded': !!opened
        } : {}, opened ? {
          'aria-pressed': !!selected
        } : {}, {
          tabIndex: visible ? '0' : '',
          "aria-label": i18n.skintones[skinTone],
          title: i18n.skintones[skinTone],
          "data-skin": skinTone,
          className: "emoji-mart-skin emoji-mart-skin-tone-".concat(skinTone)
        }))));
      }

      return _react.default.createElement("section", {
        className: "emoji-mart-skin-swatches".concat(opened ? ' opened' : ''),
        "aria-label": i18n.skintext
      }, _react.default.createElement("div", opened ? {
        role: 'menubar'
      } : {}, skinToneNodes));
    }
  }]);
  return SkinsDot;
}(_skins.default);

exports.default = SkinsDot;
SkinsDot.propTypes
/* remove-proptypes */
= {
  onChange: _propTypes.default.func,
  skin: _propTypes.default.number.isRequired,
  i18n: _propTypes.default.object
};
SkinsDot.defaultProps = {
  onChange: function onChange() {}
};
},{"@babel/runtime/helpers/extends":"dLyZ","@babel/runtime/helpers/classCallCheck":"fcMS","@babel/runtime/helpers/createClass":"P8NW","@babel/runtime/helpers/possibleConstructorReturn":"pxk2","@babel/runtime/helpers/getPrototypeOf":"UJE0","@babel/runtime/helpers/assertThisInitialized":"E7HD","@babel/runtime/helpers/inherits":"d4H2","react":"n8MK","prop-types":"D9Od","./skins":"jAxA"}],"PdWa":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _nimbleEmoji = _interopRequireDefault(require("./emoji/nimble-emoji"));

var _skinsEmoji = _interopRequireDefault(require("./skins-emoji"));

var _skinsDot = _interopRequireDefault(require("./skins-dot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0, _defineProperty2.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var Preview = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(Preview, _React$PureComponent);

  function Preview(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Preview);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Preview).call(this, props));
    _this.data = props.data;
    _this.state = {
      emoji: null
    };
    return _this;
  }

  (0, _createClass2.default)(Preview, [{
    key: "render",
    value: function render() {
      var emoji = this.state.emoji,
          _this$props = this.props,
          emojiProps = _this$props.emojiProps,
          skinsProps = _this$props.skinsProps,
          showSkinTones = _this$props.showSkinTones,
          title = _this$props.title,
          idleEmoji = _this$props.emoji,
          i18n = _this$props.i18n,
          showPreview = _this$props.showPreview;

      if (emoji && showPreview) {
        var emojiData = (0, _utils.getData)(emoji, null, null, this.data),
            _emojiData$emoticons = emojiData.emoticons,
            emoticons = _emojiData$emoticons === void 0 ? [] : _emojiData$emoticons,
            knownEmoticons = [],
            listedEmoticons = [];
        emoticons.forEach(function (emoticon) {
          if (knownEmoticons.indexOf(emoticon.toLowerCase()) >= 0) {
            return;
          }

          knownEmoticons.push(emoticon.toLowerCase());
          listedEmoticons.push(emoticon);
        });
        return _react.default.createElement("div", {
          className: "emoji-mart-preview"
        }, _react.default.createElement("div", {
          className: "emoji-mart-preview-emoji",
          "aria-hidden": "true"
        }, (0, _nimbleEmoji.default)(_objectSpread({
          key: emoji.id,
          emoji: emoji,
          data: this.data
        }, emojiProps))), _react.default.createElement("div", {
          className: "emoji-mart-preview-data",
          "aria-hidden": "true"
        }, _react.default.createElement("div", {
          className: "emoji-mart-preview-name"
        }, emoji.name), _react.default.createElement("div", {
          className: "emoji-mart-preview-shortnames"
        }, emojiData.short_names.map(function (short_name) {
          return _react.default.createElement("span", {
            key: short_name,
            className: "emoji-mart-preview-shortname"
          }, ":", short_name, ":");
        })), _react.default.createElement("div", {
          className: "emoji-mart-preview-emoticons"
        }, listedEmoticons.map(function (emoticon) {
          return _react.default.createElement("span", {
            key: emoticon,
            className: "emoji-mart-preview-emoticon"
          }, emoticon);
        }))));
      } else {
        return _react.default.createElement("div", {
          className: "emoji-mart-preview"
        }, _react.default.createElement("div", {
          className: "emoji-mart-preview-emoji",
          "aria-hidden": "true"
        }, idleEmoji && idleEmoji.length && (0, _nimbleEmoji.default)(_objectSpread({
          emoji: idleEmoji,
          data: this.data
        }, emojiProps))), _react.default.createElement("div", {
          className: "emoji-mart-preview-data",
          "aria-hidden": "true"
        }, _react.default.createElement("span", {
          className: "emoji-mart-title-label"
        }, title)), showSkinTones && _react.default.createElement("div", {
          className: "emoji-mart-preview-skins".concat(skinsProps.skinEmoji ? ' custom' : '')
        }, skinsProps.skinEmoji ? _react.default.createElement(_skinsEmoji.default, {
          skin: skinsProps.skin,
          emojiProps: emojiProps,
          data: this.data,
          skinEmoji: skinsProps.skinEmoji,
          i18n: i18n,
          onChange: skinsProps.onChange
        }) : _react.default.createElement(_skinsDot.default, {
          skin: skinsProps.skin,
          i18n: i18n,
          onChange: skinsProps.onChange
        })));
      }
    }
  }]);
  return Preview;
}(_react.default.PureComponent);

exports.default = Preview;
Preview.propTypes
/* remove-proptypes */
= {
  showSkinTones: _propTypes.default.bool,
  title: _propTypes.default.string.isRequired,
  emoji: _propTypes.default.string.isRequired,
  emojiProps: _propTypes.default.object.isRequired,
  skinsProps: _propTypes.default.object.isRequired
};
Preview.defaultProps = {
  showSkinTones: true,
  onChange: function onChange() {}
};
},{"@babel/runtime/helpers/defineProperty":"IxO8","@babel/runtime/helpers/classCallCheck":"fcMS","@babel/runtime/helpers/createClass":"P8NW","@babel/runtime/helpers/possibleConstructorReturn":"pxk2","@babel/runtime/helpers/getPrototypeOf":"UJE0","@babel/runtime/helpers/inherits":"d4H2","react":"n8MK","prop-types":"D9Od","../utils":"ifVZ","./emoji/nimble-emoji":"u63F","./skins-emoji":"NmNn","./skins-dot":"if6z"}],"pdDc":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _svgs = require("../svgs");

var _nimbleEmojiIndex = _interopRequireDefault(require("../utils/emoji-index/nimble-emoji-index"));

var _index = require("../utils/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = 0;

var Search = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(Search, _React$PureComponent);

  function Search(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Search);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Search).call(this, props));
    _this.state = {
      icon: _svgs.search.search,
      isSearching: false,
      id: ++id
    };
    _this.data = props.data;
    _this.emojiIndex = new _nimbleEmojiIndex.default(_this.data);
    _this.setRef = _this.setRef.bind((0, _assertThisInitialized2.default)(_this));
    _this.clear = _this.clear.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleKeyUp = _this.handleKeyUp.bind((0, _assertThisInitialized2.default)(_this)); // throttle keyboard input so that typing isn't delayed

    _this.handleChange = (0, _index.throttleIdleTask)(_this.handleChange.bind((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  (0, _createClass2.default)(Search, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // in some cases (e.g. preact) the input may already be pre-populated
      // this.input is undefined in Jest tests
      if (this.input && this.input.value) {
        this.search(this.input.value);
      }
    }
  }, {
    key: "search",
    value: function search(value) {
      if (value == '') this.setState({
        icon: _svgs.search.search,
        isSearching: false
      });else this.setState({
        icon: _svgs.search["delete"],
        isSearching: true
      });
      this.props.onSearch(this.emojiIndex.search(value, {
        emojisToShowFilter: this.props.emojisToShowFilter,
        maxResults: this.props.maxResults,
        include: this.props.include,
        exclude: this.props.exclude,
        custom: this.props.custom
      }));
    }
  }, {
    key: "clear",
    value: function clear() {
      if (this.input.value == '') return;
      this.input.value = '';
      this.input.focus();
      this.search('');
    }
  }, {
    key: "handleChange",
    value: function handleChange() {
      this.search(this.input.value);
    }
  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(e) {
      if (e.keyCode === 13) {
        this.clear();
      }
    }
  }, {
    key: "setRef",
    value: function setRef(c) {
      this.input = c;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          i18n = _this$props.i18n,
          autoFocus = _this$props.autoFocus;
      var _this$state = this.state,
          icon = _this$state.icon,
          isSearching = _this$state.isSearching,
          id = _this$state.id;
      var inputId = "emoji-mart-search-".concat(id);
      return _react.default.createElement("section", {
        className: "emoji-mart-search",
        "aria-label": i18n.search
      }, _react.default.createElement("input", {
        id: inputId,
        ref: this.setRef,
        type: "search",
        onChange: this.handleChange,
        placeholder: i18n.search,
        autoFocus: autoFocus
      }), _react.default.createElement("label", {
        className: "emoji-mart-sr-only",
        htmlFor: inputId
      }, i18n.search), _react.default.createElement("button", {
        className: "emoji-mart-search-icon",
        onClick: this.clear,
        onKeyUp: this.handleKeyUp,
        "aria-label": i18n.clear,
        disabled: !isSearching
      }, icon()));
    }
  }]);
  return Search;
}(_react.default.PureComponent);

exports.default = Search;
Search.propTypes
/* remove-proptypes */
= {
  onSearch: _propTypes.default.func,
  maxResults: _propTypes.default.number,
  emojisToShowFilter: _propTypes.default.func,
  autoFocus: _propTypes.default.bool
};
Search.defaultProps = {
  onSearch: function onSearch() {},
  maxResults: 75,
  emojisToShowFilter: null,
  autoFocus: false
};
},{"@babel/runtime/helpers/classCallCheck":"fcMS","@babel/runtime/helpers/createClass":"P8NW","@babel/runtime/helpers/possibleConstructorReturn":"pxk2","@babel/runtime/helpers/getPrototypeOf":"UJE0","@babel/runtime/helpers/assertThisInitialized":"E7HD","@babel/runtime/helpers/inherits":"d4H2","react":"n8MK","prop-types":"D9Od","../svgs":"J9gs","../utils/emoji-index/nimble-emoji-index":"tWBa","../utils/index":"ifVZ"}],"oEIK":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var icons = _interopRequireWildcard(require("../../svgs"));

var _store = _interopRequireDefault(require("../../utils/store"));

var _frequently = _interopRequireDefault(require("../../utils/frequently"));

var _utils = require("../../utils");

var _data = require("../../utils/data");

var _sharedProps = require("../../utils/shared-props");

var _anchors = _interopRequireDefault(require("../anchors"));

var _category = _interopRequireDefault(require("../category"));

var _preview = _interopRequireDefault(require("../preview"));

var _search = _interopRequireDefault(require("../search"));

var _sharedDefaultProps = require("../../utils/shared-default-props");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0, _defineProperty2.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var I18N = {
  search: 'Search',
  clear: 'Clear',
  // Accessible label on "clear" button
  notfound: 'No Emoji Found',
  skintext: 'Choose your default skin tone',
  categories: {
    search: 'Search Results',
    recent: 'Frequently Used',
    people: 'Smileys & People',
    nature: 'Animals & Nature',
    foods: 'Food & Drink',
    activity: 'Activity',
    places: 'Travel & Places',
    objects: 'Objects',
    symbols: 'Symbols',
    flags: 'Flags',
    custom: 'Custom'
  },
  categorieslabel: 'Emoji categories',
  // Accessible title for the list of categories
  skintones: {
    1: 'Default Skin Tone',
    2: 'Light Skin Tone',
    3: 'Medium-Light Skin Tone',
    4: 'Medium Skin Tone',
    5: 'Medium-Dark Skin Tone',
    6: 'Dark Skin Tone'
  }
};

var NimblePicker = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(NimblePicker, _React$PureComponent);

  function NimblePicker(props) {
    var _this;

    (0, _classCallCheck2.default)(this, NimblePicker);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NimblePicker).call(this, props));
    _this.CUSTOM = [];
    _this.RECENT_CATEGORY = {
      id: 'recent',
      name: 'Recent',
      emojis: null
    };
    _this.SEARCH_CATEGORY = {
      id: 'search',
      name: 'Search',
      emojis: null,
      anchor: false
    };

    if (props.data.compressed) {
      (0, _data.uncompress)(props.data);
    }

    _this.data = props.data;
    _this.i18n = (0, _utils.deepMerge)(I18N, props.i18n);
    _this.icons = (0, _utils.deepMerge)(icons, props.icons);
    _this.state = {
      firstRender: true
    };
    _this.categories = [];
    var allCategories = [].concat(_this.data.categories);

    if (props.custom.length > 0) {
      var customCategories = {};
      var customCategoriesCreated = 0;
      props.custom.forEach(function (emoji) {
        if (!customCategories[emoji.customCategory]) {
          customCategories[emoji.customCategory] = {
            id: emoji.customCategory ? "custom-".concat(emoji.customCategory) : 'custom',
            name: emoji.customCategory || 'Custom',
            emojis: [],
            anchor: customCategoriesCreated === 0
          };
          customCategoriesCreated++;
        }

        var category = customCategories[emoji.customCategory];

        var customEmoji = _objectSpread({}, emoji, {
          // `<Category />` expects emoji to have an `id`.
          id: emoji.short_names[0],
          custom: true
        });

        category.emojis.push(customEmoji);

        _this.CUSTOM.push(customEmoji);
      });
      allCategories = allCategories.concat(Object.keys(customCategories).map(function (key) {
        return customCategories[key];
      }));
    }

    _this.hideRecent = true;

    if (props.include != undefined) {
      allCategories.sort(function (a, b) {
        if (props.include.indexOf(a.id) > props.include.indexOf(b.id)) {
          return 1;
        }

        return -1;
      });
    }

    for (var categoryIndex = 0; categoryIndex < allCategories.length; categoryIndex++) {
      var category = allCategories[categoryIndex];
      var isIncluded = props.include && props.include.length ? props.include.indexOf(category.id) > -1 : true;
      var isExcluded = props.exclude && props.exclude.length ? props.exclude.indexOf(category.id) > -1 : false;

      if (!isIncluded || isExcluded) {
        continue;
      }

      if (props.emojisToShowFilter) {
        var newEmojis = [];
        var emojis = category.emojis;

        for (var emojiIndex = 0; emojiIndex < emojis.length; emojiIndex++) {
          var emoji = emojis[emojiIndex];

          if (props.emojisToShowFilter(_this.data.emojis[emoji] || emoji)) {
            newEmojis.push(emoji);
          }
        }

        if (newEmojis.length) {
          var newCategory = {
            emojis: newEmojis,
            name: category.name,
            id: category.id
          };

          _this.categories.push(newCategory);
        }
      } else {
        _this.categories.push(category);
      }
    }

    var includeRecent = props.include && props.include.length ? props.include.indexOf(_this.RECENT_CATEGORY.id) > -1 : true;
    var excludeRecent = props.exclude && props.exclude.length ? props.exclude.indexOf(_this.RECENT_CATEGORY.id) > -1 : false;

    if (includeRecent && !excludeRecent) {
      _this.hideRecent = false;

      _this.categories.unshift(_this.RECENT_CATEGORY);
    }

    if (_this.categories[0]) {
      _this.categories[0].first = true;
    }

    _this.categories.unshift(_this.SEARCH_CATEGORY);

    _this.setAnchorsRef = _this.setAnchorsRef.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleAnchorClick = _this.handleAnchorClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.setSearchRef = _this.setSearchRef.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleSearch = _this.handleSearch.bind((0, _assertThisInitialized2.default)(_this));
    _this.setScrollRef = _this.setScrollRef.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleScroll = _this.handleScroll.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleScrollPaint = _this.handleScrollPaint.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleEmojiOver = _this.handleEmojiOver.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleEmojiLeave = _this.handleEmojiLeave.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleEmojiClick = _this.handleEmojiClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleEmojiSelect = _this.handleEmojiSelect.bind((0, _assertThisInitialized2.default)(_this));
    _this.setPreviewRef = _this.setPreviewRef.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleSkinChange = _this.handleSkinChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleDarkMatchMediaChange = _this.handleDarkMatchMediaChange.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(NimblePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.state.firstRender) {
        this.testStickyPosition();
        this.firstRenderTimeout = setTimeout(function () {
          _this2.setState({
            firstRender: false
          });
        }, 60);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateCategoriesSize();
      this.handleScroll();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.SEARCH_CATEGORY.emojis = null;
      clearTimeout(this.leaveTimeout);
      clearTimeout(this.firstRenderTimeout);

      if (this.darkMatchMedia) {
        this.darkMatchMedia.removeListener(this.handleDarkMatchMediaChange);
      }
    }
  }, {
    key: "testStickyPosition",
    value: function testStickyPosition() {
      var stickyTestElement = document.createElement('div');
      var prefixes = ['', '-webkit-', '-ms-', '-moz-', '-o-'];
      prefixes.forEach(function (prefix) {
        return stickyTestElement.style.position = "".concat(prefix, "sticky");
      });
      this.hasStickyPosition = !!stickyTestElement.style.position.length;
    }
  }, {
    key: "getPreferredTheme",
    value: function getPreferredTheme() {
      if (this.props.theme != 'auto') return this.props.theme;
      if (this.state.theme) return this.state.theme;
      if (typeof matchMedia !== 'function') return _sharedDefaultProps.PickerDefaultProps.theme;

      if (!this.darkMatchMedia) {
        this.darkMatchMedia = matchMedia('(prefers-color-scheme: dark)');
        this.darkMatchMedia.addListener(this.handleDarkMatchMediaChange);
      }

      if (this.darkMatchMedia.media.match(/^not/)) return _sharedDefaultProps.PickerDefaultProps.theme;
      return this.darkMatchMedia.matches ? 'dark' : 'light';
    }
  }, {
    key: "handleDarkMatchMediaChange",
    value: function handleDarkMatchMediaChange() {
      this.setState({
        theme: this.darkMatchMedia.matches ? 'dark' : 'light'
      });
    }
  }, {
    key: "handleEmojiOver",
    value: function handleEmojiOver(emoji) {
      var preview = this.preview;

      if (!preview) {
        return;
      } // Use Array.prototype.find() when it is more widely supported.


      var emojiData = this.CUSTOM.filter(function (customEmoji) {
        return customEmoji.id === emoji.id;
      })[0];

      for (var key in emojiData) {
        if (emojiData.hasOwnProperty(key)) {
          emoji[key] = emojiData[key];
        }
      }

      preview.setState({
        emoji: emoji
      });
      clearTimeout(this.leaveTimeout);
    }
  }, {
    key: "handleEmojiLeave",
    value: function handleEmojiLeave(emoji) {
      var preview = this.preview;

      if (!preview) {
        return;
      }

      this.leaveTimeout = setTimeout(function () {
        preview.setState({
          emoji: null
        });
      }, 16);
    }
  }, {
    key: "handleEmojiClick",
    value: function handleEmojiClick(emoji, e) {
      this.props.onClick(emoji, e);
      this.handleEmojiSelect(emoji);
    }
  }, {
    key: "handleEmojiSelect",
    value: function handleEmojiSelect(emoji) {
      var _this3 = this;

      this.props.onSelect(emoji);
      if (!this.hideRecent && !this.props.recent) _frequently.default.add(emoji);
      var component = this.categoryRefs['category-1'];

      if (component) {
        var maxMargin = component.maxMargin;

        if (this.props.enableFrequentEmojiSort) {
          component.forceUpdate();
        }

        requestAnimationFrame(function () {
          if (!_this3.scroll) return;
          component.memoizeSize();
          if (maxMargin == component.maxMargin) return;

          _this3.updateCategoriesSize();

          _this3.handleScrollPaint();

          if (_this3.SEARCH_CATEGORY.emojis) {
            component.updateDisplay('none');
          }
        });
      }
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      if (!this.waitingForPaint) {
        this.waitingForPaint = true;
        requestAnimationFrame(this.handleScrollPaint);
      }
    }
  }, {
    key: "handleScrollPaint",
    value: function handleScrollPaint() {
      this.waitingForPaint = false;

      if (!this.scroll) {
        return;
      }

      var activeCategory = null;

      if (this.SEARCH_CATEGORY.emojis) {
        activeCategory = this.SEARCH_CATEGORY;
      } else {
        var target = this.scroll,
            scrollTop = target.scrollTop,
            scrollingDown = scrollTop > (this.scrollTop || 0),
            minTop = 0;

        for (var i = 0, l = this.categories.length; i < l; i++) {
          var ii = scrollingDown ? this.categories.length - 1 - i : i,
              category = this.categories[ii],
              component = this.categoryRefs["category-".concat(ii)];

          if (component) {
            var active = component.handleScroll(scrollTop);

            if (!minTop || component.top < minTop) {
              if (component.top > 0) {
                minTop = component.top;
              }
            }

            if (active && !activeCategory) {
              activeCategory = category;
            }
          }
        }

        if (scrollTop < minTop) {
          activeCategory = this.categories.filter(function (category) {
            return !(category.anchor === false);
          })[0];
        } else if (scrollTop + this.clientHeight >= this.scrollHeight) {
          activeCategory = this.categories[this.categories.length - 1];
        }
      }

      if (activeCategory) {
        var anchors = this.anchors,
            _activeCategory = activeCategory,
            categoryName = _activeCategory.name;

        if (anchors.state.selected != categoryName) {
          anchors.setState({
            selected: categoryName
          });
        }
      }

      this.scrollTop = scrollTop;
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(emojis) {
      this.SEARCH_CATEGORY.emojis = emojis;

      for (var i = 0, l = this.categories.length; i < l; i++) {
        var component = this.categoryRefs["category-".concat(i)];

        if (component && component.props.name != 'Search') {
          var display = emojis ? 'none' : 'inherit';
          component.updateDisplay(display);
        }
      }

      this.forceUpdate();

      if (this.scroll) {
        this.scroll.scrollTop = 0;
      }

      this.handleScroll();
    }
  }, {
    key: "handleAnchorClick",
    value: function handleAnchorClick(category, i) {
      var component = this.categoryRefs["category-".concat(i)],
          scroll = this.scroll,
          anchors = this.anchors,
          scrollToComponent = null;

      scrollToComponent = function scrollToComponent() {
        if (component) {
          var top = component.top;

          if (category.first) {
            top = 0;
          } else {
            top += 1;
          }

          scroll.scrollTop = top;
        }
      };

      if (this.SEARCH_CATEGORY.emojis) {
        this.handleSearch(null);
        this.search.clear();
        requestAnimationFrame(scrollToComponent);
      } else {
        scrollToComponent();
      }
    }
  }, {
    key: "handleSkinChange",
    value: function handleSkinChange(skin) {
      var newState = {
        skin: skin
      },
          onSkinChange = this.props.onSkinChange;
      this.setState(newState);

      _store.default.update(newState);

      onSkinChange(skin);
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {
      var handled = false;

      switch (e.keyCode) {
        case 13:
          var emoji;

          if (this.SEARCH_CATEGORY.emojis && this.SEARCH_CATEGORY.emojis.length && (emoji = (0, _utils.getSanitizedData)(this.SEARCH_CATEGORY.emojis[0], this.state.skin, this.props.set, this.props.data))) {
            this.handleEmojiSelect(emoji);
            handled = true;
          }

          break;
      }

      if (handled) {
        e.preventDefault();
      }
    }
  }, {
    key: "updateCategoriesSize",
    value: function updateCategoriesSize() {
      for (var i = 0, l = this.categories.length; i < l; i++) {
        var component = this.categoryRefs["category-".concat(i)];
        if (component) component.memoizeSize();
      }

      if (this.scroll) {
        var target = this.scroll;
        this.scrollHeight = target.scrollHeight;
        this.clientHeight = target.clientHeight;
      }
    }
  }, {
    key: "getCategories",
    value: function getCategories() {
      return this.state.firstRender ? this.categories.slice(0, 3) : this.categories;
    }
  }, {
    key: "setAnchorsRef",
    value: function setAnchorsRef(c) {
      this.anchors = c;
    }
  }, {
    key: "setSearchRef",
    value: function setSearchRef(c) {
      this.search = c;
    }
  }, {
    key: "setPreviewRef",
    value: function setPreviewRef(c) {
      this.preview = c;
    }
  }, {
    key: "setScrollRef",
    value: function setScrollRef(c) {
      this.scroll = c;
    }
  }, {
    key: "setCategoryRef",
    value: function setCategoryRef(name, c) {
      if (!this.categoryRefs) {
        this.categoryRefs = {};
      }

      this.categoryRefs[name] = c;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          perLine = _this$props.perLine,
          emojiSize = _this$props.emojiSize,
          set = _this$props.set,
          sheetSize = _this$props.sheetSize,
          sheetColumns = _this$props.sheetColumns,
          sheetRows = _this$props.sheetRows,
          style = _this$props.style,
          title = _this$props.title,
          emoji = _this$props.emoji,
          color = _this$props.color,
          _native = _this$props["native"],
          backgroundImageFn = _this$props.backgroundImageFn,
          emojisToShowFilter = _this$props.emojisToShowFilter,
          showPreview = _this$props.showPreview,
          showSkinTones = _this$props.showSkinTones,
          emojiTooltip = _this$props.emojiTooltip,
          useButton = _this$props.useButton,
          include = _this$props.include,
          exclude = _this$props.exclude,
          recent = _this$props.recent,
          autoFocus = _this$props.autoFocus,
          skinEmoji = _this$props.skinEmoji,
          notFound = _this$props.notFound,
          notFoundEmoji = _this$props.notFoundEmoji;
      var width = perLine * (emojiSize + 12) + 12 + 2 + (0, _utils.measureScrollbar)();
      var theme = this.getPreferredTheme();
      var skin = this.props.skin || this.state.skin || _store.default.get('skin') || this.props.defaultSkin;
      return _react.default.createElement("section", {
        style: _objectSpread({
          width: width
        }, style),
        className: "emoji-mart emoji-mart-".concat(theme),
        "aria-label": title,
        onKeyDown: this.handleKeyDown
      }, _react.default.createElement("div", {
        className: "emoji-mart-bar"
      }, _react.default.createElement(_anchors.default, {
        ref: this.setAnchorsRef,
        data: this.data,
        i18n: this.i18n,
        color: color,
        categories: this.categories,
        onAnchorClick: this.handleAnchorClick,
        icons: this.icons
      })), _react.default.createElement(_search.default, {
        ref: this.setSearchRef,
        onSearch: this.handleSearch,
        data: this.data,
        i18n: this.i18n,
        emojisToShowFilter: emojisToShowFilter,
        include: include,
        exclude: exclude,
        custom: this.CUSTOM,
        autoFocus: autoFocus
      }), _react.default.createElement("div", {
        ref: this.setScrollRef,
        className: "emoji-mart-scroll",
        onScroll: this.handleScroll
      }, this.getCategories().map(function (category, i) {
        return _react.default.createElement(_category.default, {
          ref: _this4.setCategoryRef.bind(_this4, "category-".concat(i)),
          key: category.name,
          id: category.id,
          name: category.name,
          emojis: category.emojis,
          perLine: perLine,
          "native": _native,
          hasStickyPosition: _this4.hasStickyPosition,
          data: _this4.data,
          i18n: _this4.i18n,
          recent: category.id == _this4.RECENT_CATEGORY.id ? recent : undefined,
          custom: category.id == _this4.RECENT_CATEGORY.id ? _this4.CUSTOM : undefined,
          emojiProps: {
            "native": _native,
            skin: skin,
            size: emojiSize,
            set: set,
            sheetSize: sheetSize,
            sheetColumns: sheetColumns,
            sheetRows: sheetRows,
            forceSize: _native,
            tooltip: emojiTooltip,
            backgroundImageFn: backgroundImageFn,
            useButton: useButton,
            onOver: _this4.handleEmojiOver,
            onLeave: _this4.handleEmojiLeave,
            onClick: _this4.handleEmojiClick
          },
          notFound: notFound,
          notFoundEmoji: notFoundEmoji
        });
      })), (showPreview || showSkinTones) && _react.default.createElement("div", {
        className: "emoji-mart-bar"
      }, _react.default.createElement(_preview.default, {
        ref: this.setPreviewRef,
        data: this.data,
        title: title,
        emoji: emoji,
        showSkinTones: showSkinTones,
        showPreview: showPreview,
        emojiProps: {
          "native": _native,
          size: 38,
          skin: skin,
          set: set,
          sheetSize: sheetSize,
          sheetColumns: sheetColumns,
          sheetRows: sheetRows,
          backgroundImageFn: backgroundImageFn
        },
        skinsProps: {
          skin: skin,
          onChange: this.handleSkinChange,
          skinEmoji: skinEmoji
        },
        i18n: this.i18n
      })));
    }
  }]);
  return NimblePicker;
}(_react.default.PureComponent);

exports.default = NimblePicker;
NimblePicker.propTypes
/* remove-proptypes */
= _objectSpread({}, _sharedProps.PickerPropTypes, {
  data: _propTypes.default.object.isRequired
});
NimblePicker.defaultProps = _objectSpread({}, _sharedDefaultProps.PickerDefaultProps);
},{"@babel/runtime/helpers/defineProperty":"IxO8","@babel/runtime/helpers/classCallCheck":"fcMS","@babel/runtime/helpers/createClass":"P8NW","@babel/runtime/helpers/possibleConstructorReturn":"pxk2","@babel/runtime/helpers/getPrototypeOf":"UJE0","@babel/runtime/helpers/assertThisInitialized":"E7HD","@babel/runtime/helpers/inherits":"d4H2","react":"n8MK","prop-types":"D9Od","../../svgs":"J9gs","../../utils/store":"XgkV","../../utils/frequently":"D5Ct","../../utils":"ifVZ","../../utils/data":"wCL8","../../utils/shared-props":"SXJN","../anchors":"gAqE","../category":"yD1U","../preview":"PdWa","../search":"pdDc","../../utils/shared-default-props":"iDF3"}],"uaBi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _all = _interopRequireDefault(require("../../../data/all.json"));

var _nimblePicker = _interopRequireDefault(require("./nimble-picker"));

var _sharedProps = require("../../utils/shared-props");

var _sharedDefaultProps = require("../../utils/shared-default-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0, _defineProperty2.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var Picker = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(Picker, _React$PureComponent);

  function Picker() {
    (0, _classCallCheck2.default)(this, Picker);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Picker).apply(this, arguments));
  }

  (0, _createClass2.default)(Picker, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_nimblePicker.default, (0, _extends2.default)({}, this.props, this.state));
    }
  }]);
  return Picker;
}(_react.default.PureComponent);

exports.default = Picker;
Picker.propTypes
/* remove-proptypes */
= _sharedProps.PickerPropTypes;
Picker.defaultProps = _objectSpread({}, _sharedDefaultProps.PickerDefaultProps, {
  data: _all.default
});
},{"@babel/runtime/helpers/defineProperty":"IxO8","@babel/runtime/helpers/extends":"dLyZ","@babel/runtime/helpers/classCallCheck":"fcMS","@babel/runtime/helpers/createClass":"P8NW","@babel/runtime/helpers/possibleConstructorReturn":"pxk2","@babel/runtime/helpers/getPrototypeOf":"UJE0","@babel/runtime/helpers/inherits":"d4H2","react":"n8MK","../../../data/all.json":"Wjva","./nimble-picker":"oEIK","../../utils/shared-props":"SXJN","../../utils/shared-default-props":"iDF3"}],"IuPK":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _all = _interopRequireDefault(require("../../../data/all.json"));

var _nimbleEmoji = _interopRequireDefault(require("./nimble-emoji"));

var _sharedProps = require("../../utils/shared-props");

var _sharedDefaultProps = require("../../utils/shared-default-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0, _defineProperty2.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var Emoji = function Emoji(props) {
  for (var k in Emoji.defaultProps) {
    if (props[k] == undefined && Emoji.defaultProps[k] != undefined) {
      props[k] = Emoji.defaultProps[k];
    }
  }

  return (0, _nimbleEmoji.default)(_objectSpread({}, props));
};

Emoji.propTypes
/* remove-proptypes */
= _sharedProps.EmojiPropTypes;
Emoji.defaultProps = _objectSpread({}, _sharedDefaultProps.EmojiDefaultProps, {
  data: _all.default
});
var _default = Emoji;
exports.default = _default;
},{"@babel/runtime/helpers/defineProperty":"IxO8","react":"n8MK","../../../data/all.json":"Wjva","./nimble-emoji":"u63F","../../utils/shared-props":"SXJN","../../utils/shared-default-props":"iDF3"}],"oC99":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "emojiIndex", {
  enumerable: true,
  get: function () {
    return _emojiIndex.default;
  }
});
Object.defineProperty(exports, "NimbleEmojiIndex", {
  enumerable: true,
  get: function () {
    return _nimbleEmojiIndex.default;
  }
});
Object.defineProperty(exports, "store", {
  enumerable: true,
  get: function () {
    return _store.default;
  }
});
Object.defineProperty(exports, "frequently", {
  enumerable: true,
  get: function () {
    return _frequently.default;
  }
});
Object.defineProperty(exports, "getEmojiDataFromNative", {
  enumerable: true,
  get: function () {
    return _utils.getEmojiDataFromNative;
  }
});
Object.defineProperty(exports, "Picker", {
  enumerable: true,
  get: function () {
    return _picker.default;
  }
});
Object.defineProperty(exports, "NimblePicker", {
  enumerable: true,
  get: function () {
    return _nimblePicker.default;
  }
});
Object.defineProperty(exports, "Emoji", {
  enumerable: true,
  get: function () {
    return _emoji.default;
  }
});
Object.defineProperty(exports, "NimbleEmoji", {
  enumerable: true,
  get: function () {
    return _nimbleEmoji.default;
  }
});
Object.defineProperty(exports, "Category", {
  enumerable: true,
  get: function () {
    return _category.default;
  }
});

var _emojiIndex = _interopRequireDefault(require("./utils/emoji-index/emoji-index"));

var _nimbleEmojiIndex = _interopRequireDefault(require("./utils/emoji-index/nimble-emoji-index"));

var _store = _interopRequireDefault(require("./utils/store"));

var _frequently = _interopRequireDefault(require("./utils/frequently"));

var _utils = require("./utils");

var _picker = _interopRequireDefault(require("./components/picker/picker"));

var _nimblePicker = _interopRequireDefault(require("./components/picker/nimble-picker"));

var _emoji = _interopRequireDefault(require("./components/emoji/emoji"));

var _nimbleEmoji = _interopRequireDefault(require("./components/emoji/nimble-emoji"));

var _category = _interopRequireDefault(require("./components/category"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./utils/emoji-index/emoji-index":"c6xv","./utils/emoji-index/nimble-emoji-index":"tWBa","./utils/store":"XgkV","./utils/frequently":"D5Ct","./utils":"ifVZ","./components/picker/picker":"uaBi","./components/picker/nimble-picker":"oEIK","./components/emoji/emoji":"IuPK","./components/emoji/nimble-emoji":"u63F","./components/category":"yD1U"}],"lqYF":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toFullWidth = toFullWidth;
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
},{"react":"n8MK","csstips":"pm94","typestyle":"oehJ","../util/charUtil":"lqYF"}],"RYpE":[function(require,module,exports) {
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

var _emojiMart = require("emoji-mart");

require("emoji-mart/css/emoji-mart.css");

var _Display = require("./Display");

var _typestyle = require("typestyle");

var _emojiUtil = require("../util/emojiUtil");

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
var defaultStackRaw = "\nabc\n\uFF24\uFF25\uFF26\n\u2728\u2601\uD83D\uDE0C";
var defaultStack = {
  lines: defaultStackRaw.split('\n').map(function (line) {
    return {
      characters: line.split('')
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
  var _a = (0, _react.useState)(props.initialStack || defaultStack),
      stack = _a[0],
      setStack = _a[1];

  var _b = (0, _react.useState)('😇'),
      brush = _b[0],
      setBrush = _b[1];

  var handlePickerSelect = function handlePickerSelect(emoji) {
    console.log(emoji);
    setBrush(emoji.native);
  };

  var handleCharacterClick = function handleCharacterClick(event) {
    var nextState = (0, _immer.default)(stack, function (draft) {
      draft.lines[event.position[0]].characters[event.position[1]] = brush;
    });
    setStack(nextState);
  };

  var rootStyle = __assign({}, csstips.flex);

  return _react.default.createElement("div", {
    className: (0, _typestyle.style)(rootStyle)
  }, _react.default.createElement("h3", null, "Click on a stack slot to change"), _react.default.createElement(_Display.Display, {
    stack: stack,
    onCharacterClick: handleCharacterClick
  }), _react.default.createElement("h3", null, "Brush"), _react.default.createElement("input", {
    type: "text",
    className: inputStyle,
    // size={2}
    maxLength: 6,
    width: "1em",
    value: brush,
    onChange: function onChange(ev) {
      return setBrush(ev.target.value);
    }
  }), _react.default.createElement("h3", null, "Select brush"), _react.default.createElement("div", null, _react.default.createElement(_emojiMart.NimblePicker, {
    onSelect: handlePickerSelect,
    data: emojiData,
    emoji: "",
    title: ""
  })));
}
},{"react":"n8MK","immer":"SSrD","csstips":"pm94","emoji-mart":"oC99","emoji-mart/css/emoji-mart.css":"o6es","./Display":"aOan","typestyle":"oehJ","../util/emojiUtil":"qHcg"}],"R3v4":[function(require,module,exports) {
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
//# sourceMappingURL=src.e4163686.js.map
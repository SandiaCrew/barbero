function pf(e, t) {
    for (var i = 0; i < t.length; i++) {
        const l = t[i];
        if (typeof l != "string" && !Array.isArray(l)) {
            for (const c in l)
                if (c !== "default" && !(c in e)) {
                    const f = Object.getOwnPropertyDescriptor(l, c);
                    f && Object.defineProperty(e, c, f.get ? f : {
                        enumerable: !0,
                        get: ()=>l[c]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]'))
        l(c);
    new MutationObserver(c=>{
        for (const f of c)
            if (f.type === "childList")
                for (const g of f.addedNodes)
                    g.tagName === "LINK" && g.rel === "modulepreload" && l(g)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function i(c) {
        const f = {};
        return c.integrity && (f.integrity = c.integrity),
        c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy),
        c.crossOrigin === "use-credentials" ? f.credentials = "include" : c.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin",
        f
    }
    function l(c) {
        if (c.ep)
            return;
        c.ep = !0;
        const f = i(c);
        fetch(c.href, f)
    }
}
)();
var cs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function rc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var xf = {
    exports: {}
}
  , Dl = {}
  , mf = {
    exports: {}
}
  , Ae = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $s = Symbol.for("react.element")
  , X2 = Symbol.for("react.portal")
  , Y2 = Symbol.for("react.fragment")
  , Z2 = Symbol.for("react.strict_mode")
  , K2 = Symbol.for("react.profiler")
  , Q2 = Symbol.for("react.provider")
  , q2 = Symbol.for("react.context")
  , J2 = Symbol.for("react.forward_ref")
  , $2 = Symbol.for("react.suspense")
  , eg = Symbol.for("react.memo")
  , tg = Symbol.for("react.lazy")
  , N1 = Symbol.iterator;
function ng(e) {
    return e === null || typeof e != "object" ? null : (e = N1 && e[N1] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var wf = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , yf = Object.assign
  , Ef = {};
function Xi(e, t, i) {
    this.props = e,
    this.context = t,
    this.refs = Ef,
    this.updater = i || wf
}
Xi.prototype.isReactComponent = {};
Xi.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Xi.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Cf() {}
Cf.prototype = Xi.prototype;
function ic(e, t, i) {
    this.props = e,
    this.context = t,
    this.refs = Ef,
    this.updater = i || wf
}
var sc = ic.prototype = new Cf;
sc.constructor = ic;
yf(sc, Xi.prototype);
sc.isPureReactComponent = !0;
var _1 = Array.isArray
  , Af = Object.prototype.hasOwnProperty
  , oc = {
    current: null
}
  , Sf = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function vf(e, t, i) {
    var l, c = {}, f = null, g = null;
    if (t != null)
        for (l in t.ref !== void 0 && (g = t.ref),
        t.key !== void 0 && (f = "" + t.key),
        t)
            Af.call(t, l) && !Sf.hasOwnProperty(l) && (c[l] = t[l]);
    var m = arguments.length - 2;
    if (m === 1)
        c.children = i;
    else if (1 < m) {
        for (var y = Array(m), x = 0; x < m; x++)
            y[x] = arguments[x + 2];
        c.children = y
    }
    if (e && e.defaultProps)
        for (l in m = e.defaultProps,
        m)
            c[l] === void 0 && (c[l] = m[l]);
    return {
        $$typeof: $s,
        type: e,
        key: f,
        ref: g,
        props: c,
        _owner: oc.current
    }
}
function rg(e, t) {
    return {
        $$typeof: $s,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function lc(e) {
    return typeof e == "object" && e !== null && e.$$typeof === $s
}
function ig(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(i) {
        return t[i]
    })
}
var R1 = /\/+/g;
function Ca(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? ig("" + e.key) : t.toString(36)
}
function Uo(e, t, i, l, c) {
    var f = typeof e;
    (f === "undefined" || f === "boolean") && (e = null);
    var g = !1;
    if (e === null)
        g = !0;
    else
        switch (f) {
        case "string":
        case "number":
            g = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case $s:
            case X2:
                g = !0
            }
        }
    if (g)
        return g = e,
        c = c(g),
        e = l === "" ? "." + Ca(g, 0) : l,
        _1(c) ? (i = "",
        e != null && (i = e.replace(R1, "$&/") + "/"),
        Uo(c, t, i, "", function(x) {
            return x
        })) : c != null && (lc(c) && (c = rg(c, i + (!c.key || g && g.key === c.key ? "" : ("" + c.key).replace(R1, "$&/") + "/") + e)),
        t.push(c)),
        1;
    if (g = 0,
    l = l === "" ? "." : l + ":",
    _1(e))
        for (var m = 0; m < e.length; m++) {
            f = e[m];
            var y = l + Ca(f, m);
            g += Uo(f, t, i, y, c)
        }
    else if (y = ng(e),
    typeof y == "function")
        for (e = y.call(e),
        m = 0; !(f = e.next()).done; )
            f = f.value,
            y = l + Ca(f, m++),
            g += Uo(f, t, i, y, c);
    else if (f === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return g
}
function Ao(e, t, i) {
    if (e == null)
        return e;
    var l = []
      , c = 0;
    return Uo(e, l, "", "", function(f) {
        return t.call(i, f, c++)
    }),
    l
}
function sg(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(i) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = i)
        }, function(i) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = i)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var zt = {
    current: null
}
  , Vo = {
    transition: null
}
  , og = {
    ReactCurrentDispatcher: zt,
    ReactCurrentBatchConfig: Vo,
    ReactCurrentOwner: oc
};
function If() {
    throw Error("act(...) is not supported in production builds of React.")
}
Ae.Children = {
    map: Ao,
    forEach: function(e, t, i) {
        Ao(e, function() {
            t.apply(this, arguments)
        }, i)
    },
    count: function(e) {
        var t = 0;
        return Ao(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Ao(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!lc(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Ae.Component = Xi;
Ae.Fragment = Y2;
Ae.Profiler = K2;
Ae.PureComponent = ic;
Ae.StrictMode = Z2;
Ae.Suspense = $2;
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = og;
Ae.act = If;
Ae.cloneElement = function(e, t, i) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var l = yf({}, e.props)
      , c = e.key
      , f = e.ref
      , g = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (f = t.ref,
        g = oc.current),
        t.key !== void 0 && (c = "" + t.key),
        e.type && e.type.defaultProps)
            var m = e.type.defaultProps;
        for (y in t)
            Af.call(t, y) && !Sf.hasOwnProperty(y) && (l[y] = t[y] === void 0 && m !== void 0 ? m[y] : t[y])
    }
    var y = arguments.length - 2;
    if (y === 1)
        l.children = i;
    else if (1 < y) {
        m = Array(y);
        for (var x = 0; x < y; x++)
            m[x] = arguments[x + 2];
        l.children = m
    }
    return {
        $$typeof: $s,
        type: e.type,
        key: c,
        ref: f,
        props: l,
        _owner: g
    }
}
;
Ae.createContext = function(e) {
    return e = {
        $$typeof: q2,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Q2,
        _context: e
    },
    e.Consumer = e
}
;
Ae.createElement = vf;
Ae.createFactory = function(e) {
    var t = vf.bind(null, e);
    return t.type = e,
    t
}
;
Ae.createRef = function() {
    return {
        current: null
    }
}
;
Ae.forwardRef = function(e) {
    return {
        $$typeof: J2,
        render: e
    }
}
;
Ae.isValidElement = lc;
Ae.lazy = function(e) {
    return {
        $$typeof: tg,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: sg
    }
}
;
Ae.memo = function(e, t) {
    return {
        $$typeof: eg,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
Ae.startTransition = function(e) {
    var t = Vo.transition;
    Vo.transition = {};
    try {
        e()
    } finally {
        Vo.transition = t
    }
}
;
Ae.unstable_act = If;
Ae.useCallback = function(e, t) {
    return zt.current.useCallback(e, t)
}
;
Ae.useContext = function(e) {
    return zt.current.useContext(e)
}
;
Ae.useDebugValue = function() {}
;
Ae.useDeferredValue = function(e) {
    return zt.current.useDeferredValue(e)
}
;
Ae.useEffect = function(e, t) {
    return zt.current.useEffect(e, t)
}
;
Ae.useId = function() {
    return zt.current.useId()
}
;
Ae.useImperativeHandle = function(e, t, i) {
    return zt.current.useImperativeHandle(e, t, i)
}
;
Ae.useInsertionEffect = function(e, t) {
    return zt.current.useInsertionEffect(e, t)
}
;
Ae.useLayoutEffect = function(e, t) {
    return zt.current.useLayoutEffect(e, t)
}
;
Ae.useMemo = function(e, t) {
    return zt.current.useMemo(e, t)
}
;
Ae.useReducer = function(e, t, i) {
    return zt.current.useReducer(e, t, i)
}
;
Ae.useRef = function(e) {
    return zt.current.useRef(e)
}
;
Ae.useState = function(e) {
    return zt.current.useState(e)
}
;
Ae.useSyncExternalStore = function(e, t, i) {
    return zt.current.useSyncExternalStore(e, t, i)
}
;
Ae.useTransition = function() {
    return zt.current.useTransition()
}
;
Ae.version = "18.3.1";
mf.exports = Ae;
var ee = mf.exports;
const Jn = rc(ee)
  , lg = pf({
    __proto__: null,
    default: Jn
}, [ee]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ag = ee
  , ug = Symbol.for("react.element")
  , cg = Symbol.for("react.fragment")
  , fg = Object.prototype.hasOwnProperty
  , dg = ag.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , hg = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Tf(e, t, i) {
    var l, c = {}, f = null, g = null;
    i !== void 0 && (f = "" + i),
    t.key !== void 0 && (f = "" + t.key),
    t.ref !== void 0 && (g = t.ref);
    for (l in t)
        fg.call(t, l) && !hg.hasOwnProperty(l) && (c[l] = t[l]);
    if (e && e.defaultProps)
        for (l in t = e.defaultProps,
        t)
            c[l] === void 0 && (c[l] = t[l]);
    return {
        $$typeof: ug,
        type: e,
        key: f,
        ref: g,
        props: c,
        _owner: dg.current
    }
}
Dl.Fragment = cg;
Dl.jsx = Tf;
Dl.jsxs = Tf;
xf.exports = Dl;
var q = xf.exports
  , Ja = {}
  , Nf = {
    exports: {}
}
  , an = {}
  , _f = {
    exports: {}
}
  , Rf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(re, he) {
        var pe = re.length;
        re.push(he);
        e: for (; 0 < pe; ) {
            var Ye = pe - 1 >>> 1
              , Te = re[Ye];
            if (0 < c(Te, he))
                re[Ye] = he,
                re[pe] = Te,
                pe = Ye;
            else
                break e
        }
    }
    function i(re) {
        return re.length === 0 ? null : re[0]
    }
    function l(re) {
        if (re.length === 0)
            return null;
        var he = re[0]
          , pe = re.pop();
        if (pe !== he) {
            re[0] = pe;
            e: for (var Ye = 0, Te = re.length, cn = Te >>> 1; Ye < cn; ) {
                var Qe = 2 * (Ye + 1) - 1
                  , Lr = re[Qe]
                  , ae = Qe + 1
                  , sr = re[ae];
                if (0 > c(Lr, pe))
                    ae < Te && 0 > c(sr, Lr) ? (re[Ye] = sr,
                    re[ae] = pe,
                    Ye = ae) : (re[Ye] = Lr,
                    re[Qe] = pe,
                    Ye = Qe);
                else if (ae < Te && 0 > c(sr, pe))
                    re[Ye] = sr,
                    re[ae] = pe,
                    Ye = ae;
                else
                    break e
            }
        }
        return he
    }
    function c(re, he) {
        var pe = re.sortIndex - he.sortIndex;
        return pe !== 0 ? pe : re.id - he.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var f = performance;
        e.unstable_now = function() {
            return f.now()
        }
    } else {
        var g = Date
          , m = g.now();
        e.unstable_now = function() {
            return g.now() - m
        }
    }
    var y = []
      , x = []
      , S = 1
      , v = null
      , D = 3
      , B = !1
      , k = !1
      , M = !1
      , X = typeof setTimeout == "function" ? setTimeout : null
      , O = typeof clearTimeout == "function" ? clearTimeout : null
      , _ = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function N(re) {
        for (var he = i(x); he !== null; ) {
            if (he.callback === null)
                l(x);
            else if (he.startTime <= re)
                l(x),
                he.sortIndex = he.expirationTime,
                t(y, he);
            else
                break;
            he = i(x)
        }
    }
    function V(re) {
        if (M = !1,
        N(re),
        !k)
            if (i(y) !== null)
                k = !0,
                tt(te);
            else {
                var he = i(x);
                he !== null && xe(V, he.startTime - re)
            }
    }
    function te(re, he) {
        k = !1,
        M && (M = !1,
        O($),
        $ = -1),
        B = !0;
        var pe = D;
        try {
            for (N(he),
            v = i(y); v !== null && (!(v.expirationTime > he) || re && !Ue()); ) {
                var Ye = v.callback;
                if (typeof Ye == "function") {
                    v.callback = null,
                    D = v.priorityLevel;
                    var Te = Ye(v.expirationTime <= he);
                    he = e.unstable_now(),
                    typeof Te == "function" ? v.callback = Te : v === i(y) && l(y),
                    N(he)
                } else
                    l(y);
                v = i(y)
            }
            if (v !== null)
                var cn = !0;
            else {
                var Qe = i(x);
                Qe !== null && xe(V, Qe.startTime - he),
                cn = !1
            }
            return cn
        } finally {
            v = null,
            D = pe,
            B = !1
        }
    }
    var Z = !1
      , F = null
      , $ = -1
      , W = 5
      , me = -1;
    function Ue() {
        return !(e.unstable_now() - me < W)
    }
    function fe() {
        if (F !== null) {
            var re = e.unstable_now();
            me = re;
            var he = !0;
            try {
                he = F(!0, re)
            } finally {
                he ? Ie() : (Z = !1,
                F = null)
            }
        } else
            Z = !1
    }
    var Ie;
    if (typeof _ == "function")
        Ie = function() {
            _(fe)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var lt = new MessageChannel
          , j = lt.port2;
        lt.port1.onmessage = fe,
        Ie = function() {
            j.postMessage(null)
        }
    } else
        Ie = function() {
            X(fe, 0)
        }
        ;
    function tt(re) {
        F = re,
        Z || (Z = !0,
        Ie())
    }
    function xe(re, he) {
        $ = X(function() {
            re(e.unstable_now())
        }, he)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(re) {
        re.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        k || B || (k = !0,
        tt(te))
    }
    ,
    e.unstable_forceFrameRate = function(re) {
        0 > re || 125 < re ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < re ? Math.floor(1e3 / re) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return D
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return i(y)
    }
    ,
    e.unstable_next = function(re) {
        switch (D) {
        case 1:
        case 2:
        case 3:
            var he = 3;
            break;
        default:
            he = D
        }
        var pe = D;
        D = he;
        try {
            return re()
        } finally {
            D = pe
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(re, he) {
        switch (re) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            re = 3
        }
        var pe = D;
        D = re;
        try {
            return he()
        } finally {
            D = pe
        }
    }
    ,
    e.unstable_scheduleCallback = function(re, he, pe) {
        var Ye = e.unstable_now();
        switch (typeof pe == "object" && pe !== null ? (pe = pe.delay,
        pe = typeof pe == "number" && 0 < pe ? Ye + pe : Ye) : pe = Ye,
        re) {
        case 1:
            var Te = -1;
            break;
        case 2:
            Te = 250;
            break;
        case 5:
            Te = 1073741823;
            break;
        case 4:
            Te = 1e4;
            break;
        default:
            Te = 5e3
        }
        return Te = pe + Te,
        re = {
            id: S++,
            callback: he,
            priorityLevel: re,
            startTime: pe,
            expirationTime: Te,
            sortIndex: -1
        },
        pe > Ye ? (re.sortIndex = pe,
        t(x, re),
        i(y) === null && re === i(x) && (M ? (O($),
        $ = -1) : M = !0,
        xe(V, pe - Ye))) : (re.sortIndex = Te,
        t(y, re),
        k || B || (k = !0,
        tt(te))),
        re
    }
    ,
    e.unstable_shouldYield = Ue,
    e.unstable_wrapCallback = function(re) {
        var he = D;
        return function() {
            var pe = D;
            D = he;
            try {
                return re.apply(this, arguments)
            } finally {
                D = pe
            }
        }
    }
}
)(Rf);
_f.exports = Rf;
var gg = _f.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pg = ee
  , ln = gg;
function K(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++)
        t += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Of = new Set
  , Ms = {};
function ii(e, t) {
    Ui(e, t),
    Ui(e + "Capture", t)
}
function Ui(e, t) {
    for (Ms[e] = t,
    e = 0; e < t.length; e++)
        Of.add(t[e])
}
var er = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , $a = Object.prototype.hasOwnProperty
  , xg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , O1 = {}
  , b1 = {};
function mg(e) {
    return $a.call(b1, e) ? !0 : $a.call(O1, e) ? !1 : xg.test(e) ? b1[e] = !0 : (O1[e] = !0,
    !1)
}
function wg(e, t, i, l) {
    if (i !== null && i.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return l ? !1 : i !== null ? !i.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function yg(e, t, i, l) {
    if (t === null || typeof t > "u" || wg(e, t, i, l))
        return !0;
    if (l)
        return !1;
    if (i !== null)
        switch (i.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Ht(e, t, i, l, c, f, g) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = l,
    this.attributeNamespace = c,
    this.mustUseProperty = i,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = f,
    this.removeEmptyString = g
}
var Ot = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ot[e] = new Ht(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Ot[t] = new Ht(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ot[e] = new Ht(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ot[e] = new Ht(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ot[e] = new Ht(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ot[e] = new Ht(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Ot[e] = new Ht(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ot[e] = new Ht(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Ot[e] = new Ht(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var ac = /[\-:]([a-z])/g;
function uc(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(ac, uc);
    Ot[t] = new Ht(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ac, uc);
    Ot[t] = new Ht(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ac, uc);
    Ot[t] = new Ht(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ot[e] = new Ht(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Ot.xlinkHref = new Ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ot[e] = new Ht(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function cc(e, t, i, l) {
    var c = Ot.hasOwnProperty(t) ? Ot[t] : null;
    (c !== null ? c.type !== 0 : l || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (yg(t, i, c, l) && (i = null),
    l || c === null ? mg(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i)) : c.mustUseProperty ? e[c.propertyName] = i === null ? c.type === 3 ? !1 : "" : i : (t = c.attributeName,
    l = c.attributeNamespace,
    i === null ? e.removeAttribute(t) : (c = c.type,
    i = c === 3 || c === 4 && i === !0 ? "" : "" + i,
    l ? e.setAttributeNS(l, t, i) : e.setAttribute(t, i))))
}
var ir = pg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , So = Symbol.for("react.element")
  , yi = Symbol.for("react.portal")
  , Ei = Symbol.for("react.fragment")
  , fc = Symbol.for("react.strict_mode")
  , eu = Symbol.for("react.profiler")
  , bf = Symbol.for("react.provider")
  , Df = Symbol.for("react.context")
  , dc = Symbol.for("react.forward_ref")
  , tu = Symbol.for("react.suspense")
  , nu = Symbol.for("react.suspense_list")
  , hc = Symbol.for("react.memo")
  , pr = Symbol.for("react.lazy")
  , Mf = Symbol.for("react.offscreen")
  , D1 = Symbol.iterator;
function fs(e) {
    return e === null || typeof e != "object" ? null : (e = D1 && e[D1] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var et = Object.assign, Aa;
function Es(e) {
    if (Aa === void 0)
        try {
            throw Error()
        } catch (i) {
            var t = i.stack.trim().match(/\n( *(at )?)/);
            Aa = t && t[1] || ""
        }
    return `
` + Aa + e
}
var Sa = !1;
function va(e, t) {
    if (!e || Sa)
        return "";
    Sa = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (x) {
                    var l = x
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (x) {
                    l = x
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (x) {
                l = x
            }
            e()
        }
    } catch (x) {
        if (x && l && typeof x.stack == "string") {
            for (var c = x.stack.split(`
`), f = l.stack.split(`
`), g = c.length - 1, m = f.length - 1; 1 <= g && 0 <= m && c[g] !== f[m]; )
                m--;
            for (; 1 <= g && 0 <= m; g--,
            m--)
                if (c[g] !== f[m]) {
                    if (g !== 1 || m !== 1)
                        do
                            if (g--,
                            m--,
                            0 > m || c[g] !== f[m]) {
                                var y = `
` + c[g].replace(" at new ", " at ");
                                return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)),
                                y
                            }
                        while (1 <= g && 0 <= m);
                    break
                }
        }
    } finally {
        Sa = !1,
        Error.prepareStackTrace = i
    }
    return (e = e ? e.displayName || e.name : "") ? Es(e) : ""
}
function Eg(e) {
    switch (e.tag) {
    case 5:
        return Es(e.type);
    case 16:
        return Es("Lazy");
    case 13:
        return Es("Suspense");
    case 19:
        return Es("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = va(e.type, !1),
        e;
    case 11:
        return e = va(e.type.render, !1),
        e;
    case 1:
        return e = va(e.type, !0),
        e;
    default:
        return ""
    }
}
function ru(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Ei:
        return "Fragment";
    case yi:
        return "Portal";
    case eu:
        return "Profiler";
    case fc:
        return "StrictMode";
    case tu:
        return "Suspense";
    case nu:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Df:
            return (e.displayName || "Context") + ".Consumer";
        case bf:
            return (e._context.displayName || "Context") + ".Provider";
        case dc:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case hc:
            return t = e.displayName || null,
            t !== null ? t : ru(e.type) || "Memo";
        case pr:
            t = e._payload,
            e = e._init;
            try {
                return ru(e(t))
            } catch {}
        }
    return null
}
function Cg(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return ru(t);
    case 8:
        return t === fc ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function br(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function kf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Ag(e) {
    var t = kf(e) ? "checked" : "value"
      , i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , l = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
        var c = i.get
          , f = i.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return c.call(this)
            },
            set: function(g) {
                l = "" + g,
                f.call(this, g)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: i.enumerable
        }),
        {
            getValue: function() {
                return l
            },
            setValue: function(g) {
                l = "" + g
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function vo(e) {
    e._valueTracker || (e._valueTracker = Ag(e))
}
function Pf(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var i = t.getValue()
      , l = "";
    return e && (l = kf(e) ? e.checked ? "true" : "false" : e.value),
    e = l,
    e !== i ? (t.setValue(e),
    !0) : !1
}
function $o(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function iu(e, t) {
    var i = t.checked;
    return et({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? e._wrapperState.initialChecked
    })
}
function M1(e, t) {
    var i = t.defaultValue == null ? "" : t.defaultValue
      , l = t.checked != null ? t.checked : t.defaultChecked;
    i = br(t.value != null ? t.value : i),
    e._wrapperState = {
        initialChecked: l,
        initialValue: i,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Bf(e, t) {
    t = t.checked,
    t != null && cc(e, "checked", t, !1)
}
function su(e, t) {
    Bf(e, t);
    var i = br(t.value)
      , l = t.type;
    if (i != null)
        l === "number" ? (i === 0 && e.value === "" || e.value != i) && (e.value = "" + i) : e.value !== "" + i && (e.value = "" + i);
    else if (l === "submit" || l === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ou(e, t.type, i) : t.hasOwnProperty("defaultValue") && ou(e, t.type, br(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function k1(e, t, i) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type;
        if (!(l !== "submit" && l !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        i || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    i = e.name,
    i !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    i !== "" && (e.name = i)
}
function ou(e, t, i) {
    (t !== "number" || $o(e.ownerDocument) !== e) && (i == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + i && (e.defaultValue = "" + i))
}
var Cs = Array.isArray;
function Mi(e, t, i, l) {
    if (e = e.options,
    t) {
        t = {};
        for (var c = 0; c < i.length; c++)
            t["$" + i[c]] = !0;
        for (i = 0; i < e.length; i++)
            c = t.hasOwnProperty("$" + e[i].value),
            e[i].selected !== c && (e[i].selected = c),
            c && l && (e[i].defaultSelected = !0)
    } else {
        for (i = "" + br(i),
        t = null,
        c = 0; c < e.length; c++) {
            if (e[c].value === i) {
                e[c].selected = !0,
                l && (e[c].defaultSelected = !0);
                return
            }
            t !== null || e[c].disabled || (t = e[c])
        }
        t !== null && (t.selected = !0)
    }
}
function lu(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(K(91));
    return et({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function P1(e, t) {
    var i = t.value;
    if (i == null) {
        if (i = t.children,
        t = t.defaultValue,
        i != null) {
            if (t != null)
                throw Error(K(92));
            if (Cs(i)) {
                if (1 < i.length)
                    throw Error(K(93));
                i = i[0]
            }
            t = i
        }
        t == null && (t = ""),
        i = t
    }
    e._wrapperState = {
        initialValue: br(i)
    }
}
function Lf(e, t) {
    var i = br(t.value)
      , l = br(t.defaultValue);
    i != null && (i = "" + i,
    i !== e.value && (e.value = i),
    t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)),
    l != null && (e.defaultValue = "" + l)
}
function B1(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Ff(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function au(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Ff(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Io, Uf = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, l, c) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, i, l, c)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Io = Io || document.createElement("div"),
        Io.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Io.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function ks(e, t) {
    if (t) {
        var i = e.firstChild;
        if (i && i === e.lastChild && i.nodeType === 3) {
            i.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var vs = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Sg = ["Webkit", "ms", "Moz", "O"];
Object.keys(vs).forEach(function(e) {
    Sg.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        vs[t] = vs[e]
    })
});
function Vf(e, t, i) {
    return t == null || typeof t == "boolean" || t === "" ? "" : i || typeof t != "number" || t === 0 || vs.hasOwnProperty(e) && vs[e] ? ("" + t).trim() : t + "px"
}
function zf(e, t) {
    e = e.style;
    for (var i in t)
        if (t.hasOwnProperty(i)) {
            var l = i.indexOf("--") === 0
              , c = Vf(i, t[i], l);
            i === "float" && (i = "cssFloat"),
            l ? e.setProperty(i, c) : e[i] = c
        }
}
var vg = et({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function uu(e, t) {
    if (t) {
        if (vg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(K(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(K(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(K(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(K(62))
    }
}
function cu(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var fu = null;
function gc(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var du = null
  , ki = null
  , Pi = null;
function L1(e) {
    if (e = no(e)) {
        if (typeof du != "function")
            throw Error(K(280));
        var t = e.stateNode;
        t && (t = Ll(t),
        du(e.stateNode, e.type, t))
    }
}
function Hf(e) {
    ki ? Pi ? Pi.push(e) : Pi = [e] : ki = e
}
function jf() {
    if (ki) {
        var e = ki
          , t = Pi;
        if (Pi = ki = null,
        L1(e),
        t)
            for (e = 0; e < t.length; e++)
                L1(t[e])
    }
}
function Wf(e, t) {
    return e(t)
}
function Gf() {}
var Ia = !1;
function Xf(e, t, i) {
    if (Ia)
        return e(t, i);
    Ia = !0;
    try {
        return Wf(e, t, i)
    } finally {
        Ia = !1,
        (ki !== null || Pi !== null) && (Gf(),
        jf())
    }
}
function Ps(e, t) {
    var i = e.stateNode;
    if (i === null)
        return null;
    var l = Ll(i);
    if (l === null)
        return null;
    i = l[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (l = !l.disabled) || (e = e.type,
        l = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !l;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (i && typeof i != "function")
        throw Error(K(231, t, typeof i));
    return i
}
var hu = !1;
if (er)
    try {
        var ds = {};
        Object.defineProperty(ds, "passive", {
            get: function() {
                hu = !0
            }
        }),
        window.addEventListener("test", ds, ds),
        window.removeEventListener("test", ds, ds)
    } catch {
        hu = !1
    }
function Ig(e, t, i, l, c, f, g, m, y) {
    var x = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(i, x)
    } catch (S) {
        this.onError(S)
    }
}
var Is = !1
  , el = null
  , tl = !1
  , gu = null
  , Tg = {
    onError: function(e) {
        Is = !0,
        el = e
    }
};
function Ng(e, t, i, l, c, f, g, m, y) {
    Is = !1,
    el = null,
    Ig.apply(Tg, arguments)
}
function _g(e, t, i, l, c, f, g, m, y) {
    if (Ng.apply(this, arguments),
    Is) {
        if (Is) {
            var x = el;
            Is = !1,
            el = null
        } else
            throw Error(K(198));
        tl || (tl = !0,
        gu = x)
    }
}
function si(e) {
    var t = e
      , i = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (i = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? i : null
}
function Yf(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function F1(e) {
    if (si(e) !== e)
        throw Error(K(188))
}
function Rg(e) {
    var t = e.alternate;
    if (!t) {
        if (t = si(e),
        t === null)
            throw Error(K(188));
        return t !== e ? null : e
    }
    for (var i = e, l = t; ; ) {
        var c = i.return;
        if (c === null)
            break;
        var f = c.alternate;
        if (f === null) {
            if (l = c.return,
            l !== null) {
                i = l;
                continue
            }
            break
        }
        if (c.child === f.child) {
            for (f = c.child; f; ) {
                if (f === i)
                    return F1(c),
                    e;
                if (f === l)
                    return F1(c),
                    t;
                f = f.sibling
            }
            throw Error(K(188))
        }
        if (i.return !== l.return)
            i = c,
            l = f;
        else {
            for (var g = !1, m = c.child; m; ) {
                if (m === i) {
                    g = !0,
                    i = c,
                    l = f;
                    break
                }
                if (m === l) {
                    g = !0,
                    l = c,
                    i = f;
                    break
                }
                m = m.sibling
            }
            if (!g) {
                for (m = f.child; m; ) {
                    if (m === i) {
                        g = !0,
                        i = f,
                        l = c;
                        break
                    }
                    if (m === l) {
                        g = !0,
                        l = f,
                        i = c;
                        break
                    }
                    m = m.sibling
                }
                if (!g)
                    throw Error(K(189))
            }
        }
        if (i.alternate !== l)
            throw Error(K(190))
    }
    if (i.tag !== 3)
        throw Error(K(188));
    return i.stateNode.current === i ? e : t
}
function Zf(e) {
    return e = Rg(e),
    e !== null ? Kf(e) : null
}
function Kf(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Kf(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Qf = ln.unstable_scheduleCallback
  , U1 = ln.unstable_cancelCallback
  , Og = ln.unstable_shouldYield
  , bg = ln.unstable_requestPaint
  , ut = ln.unstable_now
  , Dg = ln.unstable_getCurrentPriorityLevel
  , pc = ln.unstable_ImmediatePriority
  , qf = ln.unstable_UserBlockingPriority
  , nl = ln.unstable_NormalPriority
  , Mg = ln.unstable_LowPriority
  , Jf = ln.unstable_IdlePriority
  , Ml = null
  , Wn = null;
function kg(e) {
    if (Wn && typeof Wn.onCommitFiberRoot == "function")
        try {
            Wn.onCommitFiberRoot(Ml, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Rn = Math.clz32 ? Math.clz32 : Lg
  , Pg = Math.log
  , Bg = Math.LN2;
function Lg(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Pg(e) / Bg | 0) | 0
}
var To = 64
  , No = 4194304;
function As(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function rl(e, t) {
    var i = e.pendingLanes;
    if (i === 0)
        return 0;
    var l = 0
      , c = e.suspendedLanes
      , f = e.pingedLanes
      , g = i & 268435455;
    if (g !== 0) {
        var m = g & ~c;
        m !== 0 ? l = As(m) : (f &= g,
        f !== 0 && (l = As(f)))
    } else
        g = i & ~c,
        g !== 0 ? l = As(g) : f !== 0 && (l = As(f));
    if (l === 0)
        return 0;
    if (t !== 0 && t !== l && !(t & c) && (c = l & -l,
    f = t & -t,
    c >= f || c === 16 && (f & 4194240) !== 0))
        return t;
    if (l & 4 && (l |= i & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= l; 0 < t; )
            i = 31 - Rn(t),
            c = 1 << i,
            l |= e[i],
            t &= ~c;
    return l
}
function Fg(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Ug(e, t) {
    for (var i = e.suspendedLanes, l = e.pingedLanes, c = e.expirationTimes, f = e.pendingLanes; 0 < f; ) {
        var g = 31 - Rn(f)
          , m = 1 << g
          , y = c[g];
        y === -1 ? (!(m & i) || m & l) && (c[g] = Fg(m, t)) : y <= t && (e.expiredLanes |= m),
        f &= ~m
    }
}
function pu(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function $f() {
    var e = To;
    return To <<= 1,
    !(To & 4194240) && (To = 64),
    e
}
function Ta(e) {
    for (var t = [], i = 0; 31 > i; i++)
        t.push(e);
    return t
}
function eo(e, t, i) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Rn(t),
    e[t] = i
}
function Vg(e, t) {
    var i = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var l = e.eventTimes;
    for (e = e.expirationTimes; 0 < i; ) {
        var c = 31 - Rn(i)
          , f = 1 << c;
        t[c] = 0,
        l[c] = -1,
        e[c] = -1,
        i &= ~f
    }
}
function xc(e, t) {
    var i = e.entangledLanes |= t;
    for (e = e.entanglements; i; ) {
        var l = 31 - Rn(i)
          , c = 1 << l;
        c & t | e[l] & t && (e[l] |= t),
        i &= ~c
    }
}
var ke = 0;
function ed(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var td, mc, nd, rd, id, xu = !1, _o = [], Ar = null, Sr = null, vr = null, Bs = new Map, Ls = new Map, mr = [], zg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function V1(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Ar = null;
        break;
    case "dragenter":
    case "dragleave":
        Sr = null;
        break;
    case "mouseover":
    case "mouseout":
        vr = null;
        break;
    case "pointerover":
    case "pointerout":
        Bs.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Ls.delete(t.pointerId)
    }
}
function hs(e, t, i, l, c, f) {
    return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: i,
        eventSystemFlags: l,
        nativeEvent: f,
        targetContainers: [c]
    },
    t !== null && (t = no(t),
    t !== null && mc(t)),
    e) : (e.eventSystemFlags |= l,
    t = e.targetContainers,
    c !== null && t.indexOf(c) === -1 && t.push(c),
    e)
}
function Hg(e, t, i, l, c) {
    switch (t) {
    case "focusin":
        return Ar = hs(Ar, e, t, i, l, c),
        !0;
    case "dragenter":
        return Sr = hs(Sr, e, t, i, l, c),
        !0;
    case "mouseover":
        return vr = hs(vr, e, t, i, l, c),
        !0;
    case "pointerover":
        var f = c.pointerId;
        return Bs.set(f, hs(Bs.get(f) || null, e, t, i, l, c)),
        !0;
    case "gotpointercapture":
        return f = c.pointerId,
        Ls.set(f, hs(Ls.get(f) || null, e, t, i, l, c)),
        !0
    }
    return !1
}
function sd(e) {
    var t = Xr(e.target);
    if (t !== null) {
        var i = si(t);
        if (i !== null) {
            if (t = i.tag,
            t === 13) {
                if (t = Yf(i),
                t !== null) {
                    e.blockedOn = t,
                    id(e.priority, function() {
                        nd(i)
                    });
                    return
                }
            } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function zo(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var i = mu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (i === null) {
            i = e.nativeEvent;
            var l = new i.constructor(i.type,i);
            fu = l,
            i.target.dispatchEvent(l),
            fu = null
        } else
            return t = no(i),
            t !== null && mc(t),
            e.blockedOn = i,
            !1;
        t.shift()
    }
    return !0
}
function z1(e, t, i) {
    zo(e) && i.delete(t)
}
function jg() {
    xu = !1,
    Ar !== null && zo(Ar) && (Ar = null),
    Sr !== null && zo(Sr) && (Sr = null),
    vr !== null && zo(vr) && (vr = null),
    Bs.forEach(z1),
    Ls.forEach(z1)
}
function gs(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    xu || (xu = !0,
    ln.unstable_scheduleCallback(ln.unstable_NormalPriority, jg)))
}
function Fs(e) {
    function t(c) {
        return gs(c, e)
    }
    if (0 < _o.length) {
        gs(_o[0], e);
        for (var i = 1; i < _o.length; i++) {
            var l = _o[i];
            l.blockedOn === e && (l.blockedOn = null)
        }
    }
    for (Ar !== null && gs(Ar, e),
    Sr !== null && gs(Sr, e),
    vr !== null && gs(vr, e),
    Bs.forEach(t),
    Ls.forEach(t),
    i = 0; i < mr.length; i++)
        l = mr[i],
        l.blockedOn === e && (l.blockedOn = null);
    for (; 0 < mr.length && (i = mr[0],
    i.blockedOn === null); )
        sd(i),
        i.blockedOn === null && mr.shift()
}
var Bi = ir.ReactCurrentBatchConfig
  , il = !0;
function Wg(e, t, i, l) {
    var c = ke
      , f = Bi.transition;
    Bi.transition = null;
    try {
        ke = 1,
        wc(e, t, i, l)
    } finally {
        ke = c,
        Bi.transition = f
    }
}
function Gg(e, t, i, l) {
    var c = ke
      , f = Bi.transition;
    Bi.transition = null;
    try {
        ke = 4,
        wc(e, t, i, l)
    } finally {
        ke = c,
        Bi.transition = f
    }
}
function wc(e, t, i, l) {
    if (il) {
        var c = mu(e, t, i, l);
        if (c === null)
            Ba(e, t, l, sl, i),
            V1(e, l);
        else if (Hg(c, e, t, i, l))
            l.stopPropagation();
        else if (V1(e, l),
        t & 4 && -1 < zg.indexOf(e)) {
            for (; c !== null; ) {
                var f = no(c);
                if (f !== null && td(f),
                f = mu(e, t, i, l),
                f === null && Ba(e, t, l, sl, i),
                f === c)
                    break;
                c = f
            }
            c !== null && l.stopPropagation()
        } else
            Ba(e, t, l, null, i)
    }
}
var sl = null;
function mu(e, t, i, l) {
    if (sl = null,
    e = gc(l),
    e = Xr(e),
    e !== null)
        if (t = si(e),
        t === null)
            e = null;
        else if (i = t.tag,
        i === 13) {
            if (e = Yf(t),
            e !== null)
                return e;
            e = null
        } else if (i === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return sl = e,
    null
}
function od(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Dg()) {
        case pc:
            return 1;
        case qf:
            return 4;
        case nl:
        case Mg:
            return 16;
        case Jf:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var yr = null
  , yc = null
  , Ho = null;
function ld() {
    if (Ho)
        return Ho;
    var e, t = yc, i = t.length, l, c = "value"in yr ? yr.value : yr.textContent, f = c.length;
    for (e = 0; e < i && t[e] === c[e]; e++)
        ;
    var g = i - e;
    for (l = 1; l <= g && t[i - l] === c[f - l]; l++)
        ;
    return Ho = c.slice(e, 1 < l ? 1 - l : void 0)
}
function jo(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Ro() {
    return !0
}
function H1() {
    return !1
}
function un(e) {
    function t(i, l, c, f, g) {
        this._reactName = i,
        this._targetInst = c,
        this.type = l,
        this.nativeEvent = f,
        this.target = g,
        this.currentTarget = null;
        for (var m in e)
            e.hasOwnProperty(m) && (i = e[m],
            this[m] = i ? i(f) : f[m]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Ro : H1,
        this.isPropagationStopped = H1,
        this
    }
    return et(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var i = this.nativeEvent;
            i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1),
            this.isDefaultPrevented = Ro)
        },
        stopPropagation: function() {
            var i = this.nativeEvent;
            i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
            this.isPropagationStopped = Ro)
        },
        persist: function() {},
        isPersistent: Ro
    }),
    t
}
var Yi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Ec = un(Yi), to = et({}, Yi, {
    view: 0,
    detail: 0
}), Xg = un(to), Na, _a, ps, kl = et({}, to, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Cc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== ps && (ps && e.type === "mousemove" ? (Na = e.screenX - ps.screenX,
        _a = e.screenY - ps.screenY) : _a = Na = 0,
        ps = e),
        Na)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : _a
    }
}), j1 = un(kl), Yg = et({}, kl, {
    dataTransfer: 0
}), Zg = un(Yg), Kg = et({}, to, {
    relatedTarget: 0
}), Ra = un(Kg), Qg = et({}, Yi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), qg = un(Qg), Jg = et({}, Yi, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), $g = un(Jg), ep = et({}, Yi, {
    data: 0
}), W1 = un(ep), tp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, np = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, rp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function ip(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = rp[e]) ? !!t[e] : !1
}
function Cc() {
    return ip
}
var sp = et({}, to, {
    key: function(e) {
        if (e.key) {
            var t = tp[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = jo(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? np[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Cc,
    charCode: function(e) {
        return e.type === "keypress" ? jo(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? jo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , op = un(sp)
  , lp = et({}, kl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , G1 = un(lp)
  , ap = et({}, to, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Cc
})
  , up = un(ap)
  , cp = et({}, Yi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , fp = un(cp)
  , dp = et({}, kl, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , hp = un(dp)
  , gp = [9, 13, 27, 32]
  , Ac = er && "CompositionEvent"in window
  , Ts = null;
er && "documentMode"in document && (Ts = document.documentMode);
var pp = er && "TextEvent"in window && !Ts
  , ad = er && (!Ac || Ts && 8 < Ts && 11 >= Ts)
  , X1 = " "
  , Y1 = !1;
function ud(e, t) {
    switch (e) {
    case "keyup":
        return gp.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function cd(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Ci = !1;
function xp(e, t) {
    switch (e) {
    case "compositionend":
        return cd(t);
    case "keypress":
        return t.which !== 32 ? null : (Y1 = !0,
        X1);
    case "textInput":
        return e = t.data,
        e === X1 && Y1 ? null : e;
    default:
        return null
    }
}
function mp(e, t) {
    if (Ci)
        return e === "compositionend" || !Ac && ud(e, t) ? (e = ld(),
        Ho = yc = yr = null,
        Ci = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return ad && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var wp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Z1(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!wp[e.type] : t === "textarea"
}
function fd(e, t, i, l) {
    Hf(l),
    t = ol(t, "onChange"),
    0 < t.length && (i = new Ec("onChange","change",null,i,l),
    e.push({
        event: i,
        listeners: t
    }))
}
var Ns = null
  , Us = null;
function yp(e) {
    Ad(e, 0)
}
function Pl(e) {
    var t = vi(e);
    if (Pf(t))
        return e
}
function Ep(e, t) {
    if (e === "change")
        return t
}
var dd = !1;
if (er) {
    var Oa;
    if (er) {
        var ba = "oninput"in document;
        if (!ba) {
            var K1 = document.createElement("div");
            K1.setAttribute("oninput", "return;"),
            ba = typeof K1.oninput == "function"
        }
        Oa = ba
    } else
        Oa = !1;
    dd = Oa && (!document.documentMode || 9 < document.documentMode)
}
function Q1() {
    Ns && (Ns.detachEvent("onpropertychange", hd),
    Us = Ns = null)
}
function hd(e) {
    if (e.propertyName === "value" && Pl(Us)) {
        var t = [];
        fd(t, Us, e, gc(e)),
        Xf(yp, t)
    }
}
function Cp(e, t, i) {
    e === "focusin" ? (Q1(),
    Ns = t,
    Us = i,
    Ns.attachEvent("onpropertychange", hd)) : e === "focusout" && Q1()
}
function Ap(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Pl(Us)
}
function Sp(e, t) {
    if (e === "click")
        return Pl(t)
}
function vp(e, t) {
    if (e === "input" || e === "change")
        return Pl(t)
}
function Ip(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Dn = typeof Object.is == "function" ? Object.is : Ip;
function Vs(e, t) {
    if (Dn(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var i = Object.keys(e)
      , l = Object.keys(t);
    if (i.length !== l.length)
        return !1;
    for (l = 0; l < i.length; l++) {
        var c = i[l];
        if (!$a.call(t, c) || !Dn(e[c], t[c]))
            return !1
    }
    return !0
}
function q1(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function J1(e, t) {
    var i = q1(e);
    e = 0;
    for (var l; i; ) {
        if (i.nodeType === 3) {
            if (l = e + i.textContent.length,
            e <= t && l >= t)
                return {
                    node: i,
                    offset: t - e
                };
            e = l
        }
        e: {
            for (; i; ) {
                if (i.nextSibling) {
                    i = i.nextSibling;
                    break e
                }
                i = i.parentNode
            }
            i = void 0
        }
        i = q1(i)
    }
}
function gd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? gd(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function pd() {
    for (var e = window, t = $o(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var i = typeof t.contentWindow.location.href == "string"
        } catch {
            i = !1
        }
        if (i)
            e = t.contentWindow;
        else
            break;
        t = $o(e.document)
    }
    return t
}
function Sc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Tp(e) {
    var t = pd()
      , i = e.focusedElem
      , l = e.selectionRange;
    if (t !== i && i && i.ownerDocument && gd(i.ownerDocument.documentElement, i)) {
        if (l !== null && Sc(i)) {
            if (t = l.start,
            e = l.end,
            e === void 0 && (e = t),
            "selectionStart"in i)
                i.selectionStart = t,
                i.selectionEnd = Math.min(e, i.value.length);
            else if (e = (t = i.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var c = i.textContent.length
                  , f = Math.min(l.start, c);
                l = l.end === void 0 ? f : Math.min(l.end, c),
                !e.extend && f > l && (c = l,
                l = f,
                f = c),
                c = J1(i, f);
                var g = J1(i, l);
                c && g && (e.rangeCount !== 1 || e.anchorNode !== c.node || e.anchorOffset !== c.offset || e.focusNode !== g.node || e.focusOffset !== g.offset) && (t = t.createRange(),
                t.setStart(c.node, c.offset),
                e.removeAllRanges(),
                f > l ? (e.addRange(t),
                e.extend(g.node, g.offset)) : (t.setEnd(g.node, g.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = i; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof i.focus == "function" && i.focus(),
        i = 0; i < t.length; i++)
            e = t[i],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Np = er && "documentMode"in document && 11 >= document.documentMode
  , Ai = null
  , wu = null
  , _s = null
  , yu = !1;
function $1(e, t, i) {
    var l = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    yu || Ai == null || Ai !== $o(l) || (l = Ai,
    "selectionStart"in l && Sc(l) ? l = {
        start: l.selectionStart,
        end: l.selectionEnd
    } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(),
    l = {
        anchorNode: l.anchorNode,
        anchorOffset: l.anchorOffset,
        focusNode: l.focusNode,
        focusOffset: l.focusOffset
    }),
    _s && Vs(_s, l) || (_s = l,
    l = ol(wu, "onSelect"),
    0 < l.length && (t = new Ec("onSelect","select",null,t,i),
    e.push({
        event: t,
        listeners: l
    }),
    t.target = Ai)))
}
function Oo(e, t) {
    var i = {};
    return i[e.toLowerCase()] = t.toLowerCase(),
    i["Webkit" + e] = "webkit" + t,
    i["Moz" + e] = "moz" + t,
    i
}
var Si = {
    animationend: Oo("Animation", "AnimationEnd"),
    animationiteration: Oo("Animation", "AnimationIteration"),
    animationstart: Oo("Animation", "AnimationStart"),
    transitionend: Oo("Transition", "TransitionEnd")
}
  , Da = {}
  , xd = {};
er && (xd = document.createElement("div").style,
"AnimationEvent"in window || (delete Si.animationend.animation,
delete Si.animationiteration.animation,
delete Si.animationstart.animation),
"TransitionEvent"in window || delete Si.transitionend.transition);
function Bl(e) {
    if (Da[e])
        return Da[e];
    if (!Si[e])
        return e;
    var t = Si[e], i;
    for (i in t)
        if (t.hasOwnProperty(i) && i in xd)
            return Da[e] = t[i];
    return e
}
var md = Bl("animationend")
  , wd = Bl("animationiteration")
  , yd = Bl("animationstart")
  , Ed = Bl("transitionend")
  , Cd = new Map
  , e0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Mr(e, t) {
    Cd.set(e, t),
    ii(t, [e])
}
for (var Ma = 0; Ma < e0.length; Ma++) {
    var ka = e0[Ma]
      , _p = ka.toLowerCase()
      , Rp = ka[0].toUpperCase() + ka.slice(1);
    Mr(_p, "on" + Rp)
}
Mr(md, "onAnimationEnd");
Mr(wd, "onAnimationIteration");
Mr(yd, "onAnimationStart");
Mr("dblclick", "onDoubleClick");
Mr("focusin", "onFocus");
Mr("focusout", "onBlur");
Mr(Ed, "onTransitionEnd");
Ui("onMouseEnter", ["mouseout", "mouseover"]);
Ui("onMouseLeave", ["mouseout", "mouseover"]);
Ui("onPointerEnter", ["pointerout", "pointerover"]);
Ui("onPointerLeave", ["pointerout", "pointerover"]);
ii("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ii("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ii("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ii("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ii("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ii("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ss = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Op = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ss));
function t0(e, t, i) {
    var l = e.type || "unknown-event";
    e.currentTarget = i,
    _g(l, t, void 0, e),
    e.currentTarget = null
}
function Ad(e, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
        var l = e[i]
          , c = l.event;
        l = l.listeners;
        e: {
            var f = void 0;
            if (t)
                for (var g = l.length - 1; 0 <= g; g--) {
                    var m = l[g]
                      , y = m.instance
                      , x = m.currentTarget;
                    if (m = m.listener,
                    y !== f && c.isPropagationStopped())
                        break e;
                    t0(c, m, x),
                    f = y
                }
            else
                for (g = 0; g < l.length; g++) {
                    if (m = l[g],
                    y = m.instance,
                    x = m.currentTarget,
                    m = m.listener,
                    y !== f && c.isPropagationStopped())
                        break e;
                    t0(c, m, x),
                    f = y
                }
        }
    }
    if (tl)
        throw e = gu,
        tl = !1,
        gu = null,
        e
}
function We(e, t) {
    var i = t[vu];
    i === void 0 && (i = t[vu] = new Set);
    var l = e + "__bubble";
    i.has(l) || (Sd(t, e, 2, !1),
    i.add(l))
}
function Pa(e, t, i) {
    var l = 0;
    t && (l |= 4),
    Sd(i, e, l, t)
}
var bo = "_reactListening" + Math.random().toString(36).slice(2);
function zs(e) {
    if (!e[bo]) {
        e[bo] = !0,
        Of.forEach(function(i) {
            i !== "selectionchange" && (Op.has(i) || Pa(i, !1, e),
            Pa(i, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[bo] || (t[bo] = !0,
        Pa("selectionchange", !1, t))
    }
}
function Sd(e, t, i, l) {
    switch (od(t)) {
    case 1:
        var c = Wg;
        break;
    case 4:
        c = Gg;
        break;
    default:
        c = wc
    }
    i = c.bind(null, t, i, e),
    c = void 0,
    !hu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (c = !0),
    l ? c !== void 0 ? e.addEventListener(t, i, {
        capture: !0,
        passive: c
    }) : e.addEventListener(t, i, !0) : c !== void 0 ? e.addEventListener(t, i, {
        passive: c
    }) : e.addEventListener(t, i, !1)
}
function Ba(e, t, i, l, c) {
    var f = l;
    if (!(t & 1) && !(t & 2) && l !== null)
        e: for (; ; ) {
            if (l === null)
                return;
            var g = l.tag;
            if (g === 3 || g === 4) {
                var m = l.stateNode.containerInfo;
                if (m === c || m.nodeType === 8 && m.parentNode === c)
                    break;
                if (g === 4)
                    for (g = l.return; g !== null; ) {
                        var y = g.tag;
                        if ((y === 3 || y === 4) && (y = g.stateNode.containerInfo,
                        y === c || y.nodeType === 8 && y.parentNode === c))
                            return;
                        g = g.return
                    }
                for (; m !== null; ) {
                    if (g = Xr(m),
                    g === null)
                        return;
                    if (y = g.tag,
                    y === 5 || y === 6) {
                        l = f = g;
                        continue e
                    }
                    m = m.parentNode
                }
            }
            l = l.return
        }
    Xf(function() {
        var x = f
          , S = gc(i)
          , v = [];
        e: {
            var D = Cd.get(e);
            if (D !== void 0) {
                var B = Ec
                  , k = e;
                switch (e) {
                case "keypress":
                    if (jo(i) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    B = op;
                    break;
                case "focusin":
                    k = "focus",
                    B = Ra;
                    break;
                case "focusout":
                    k = "blur",
                    B = Ra;
                    break;
                case "beforeblur":
                case "afterblur":
                    B = Ra;
                    break;
                case "click":
                    if (i.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    B = j1;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    B = Zg;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    B = up;
                    break;
                case md:
                case wd:
                case yd:
                    B = qg;
                    break;
                case Ed:
                    B = fp;
                    break;
                case "scroll":
                    B = Xg;
                    break;
                case "wheel":
                    B = hp;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    B = $g;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    B = G1
                }
                var M = (t & 4) !== 0
                  , X = !M && e === "scroll"
                  , O = M ? D !== null ? D + "Capture" : null : D;
                M = [];
                for (var _ = x, N; _ !== null; ) {
                    N = _;
                    var V = N.stateNode;
                    if (N.tag === 5 && V !== null && (N = V,
                    O !== null && (V = Ps(_, O),
                    V != null && M.push(Hs(_, V, N)))),
                    X)
                        break;
                    _ = _.return
                }
                0 < M.length && (D = new B(D,k,null,i,S),
                v.push({
                    event: D,
                    listeners: M
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (D = e === "mouseover" || e === "pointerover",
                B = e === "mouseout" || e === "pointerout",
                D && i !== fu && (k = i.relatedTarget || i.fromElement) && (Xr(k) || k[tr]))
                    break e;
                if ((B || D) && (D = S.window === S ? S : (D = S.ownerDocument) ? D.defaultView || D.parentWindow : window,
                B ? (k = i.relatedTarget || i.toElement,
                B = x,
                k = k ? Xr(k) : null,
                k !== null && (X = si(k),
                k !== X || k.tag !== 5 && k.tag !== 6) && (k = null)) : (B = null,
                k = x),
                B !== k)) {
                    if (M = j1,
                    V = "onMouseLeave",
                    O = "onMouseEnter",
                    _ = "mouse",
                    (e === "pointerout" || e === "pointerover") && (M = G1,
                    V = "onPointerLeave",
                    O = "onPointerEnter",
                    _ = "pointer"),
                    X = B == null ? D : vi(B),
                    N = k == null ? D : vi(k),
                    D = new M(V,_ + "leave",B,i,S),
                    D.target = X,
                    D.relatedTarget = N,
                    V = null,
                    Xr(S) === x && (M = new M(O,_ + "enter",k,i,S),
                    M.target = N,
                    M.relatedTarget = X,
                    V = M),
                    X = V,
                    B && k)
                        t: {
                            for (M = B,
                            O = k,
                            _ = 0,
                            N = M; N; N = mi(N))
                                _++;
                            for (N = 0,
                            V = O; V; V = mi(V))
                                N++;
                            for (; 0 < _ - N; )
                                M = mi(M),
                                _--;
                            for (; 0 < N - _; )
                                O = mi(O),
                                N--;
                            for (; _--; ) {
                                if (M === O || O !== null && M === O.alternate)
                                    break t;
                                M = mi(M),
                                O = mi(O)
                            }
                            M = null
                        }
                    else
                        M = null;
                    B !== null && n0(v, D, B, M, !1),
                    k !== null && X !== null && n0(v, X, k, M, !0)
                }
            }
            e: {
                if (D = x ? vi(x) : window,
                B = D.nodeName && D.nodeName.toLowerCase(),
                B === "select" || B === "input" && D.type === "file")
                    var te = Ep;
                else if (Z1(D))
                    if (dd)
                        te = vp;
                    else {
                        te = Ap;
                        var Z = Cp
                    }
                else
                    (B = D.nodeName) && B.toLowerCase() === "input" && (D.type === "checkbox" || D.type === "radio") && (te = Sp);
                if (te && (te = te(e, x))) {
                    fd(v, te, i, S);
                    break e
                }
                Z && Z(e, D, x),
                e === "focusout" && (Z = D._wrapperState) && Z.controlled && D.type === "number" && ou(D, "number", D.value)
            }
            switch (Z = x ? vi(x) : window,
            e) {
            case "focusin":
                (Z1(Z) || Z.contentEditable === "true") && (Ai = Z,
                wu = x,
                _s = null);
                break;
            case "focusout":
                _s = wu = Ai = null;
                break;
            case "mousedown":
                yu = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                yu = !1,
                $1(v, i, S);
                break;
            case "selectionchange":
                if (Np)
                    break;
            case "keydown":
            case "keyup":
                $1(v, i, S)
            }
            var F;
            if (Ac)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var $ = "onCompositionStart";
                        break e;
                    case "compositionend":
                        $ = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        $ = "onCompositionUpdate";
                        break e
                    }
                    $ = void 0
                }
            else
                Ci ? ud(e, i) && ($ = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && ($ = "onCompositionStart");
            $ && (ad && i.locale !== "ko" && (Ci || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && Ci && (F = ld()) : (yr = S,
            yc = "value"in yr ? yr.value : yr.textContent,
            Ci = !0)),
            Z = ol(x, $),
            0 < Z.length && ($ = new W1($,e,null,i,S),
            v.push({
                event: $,
                listeners: Z
            }),
            F ? $.data = F : (F = cd(i),
            F !== null && ($.data = F)))),
            (F = pp ? xp(e, i) : mp(e, i)) && (x = ol(x, "onBeforeInput"),
            0 < x.length && (S = new W1("onBeforeInput","beforeinput",null,i,S),
            v.push({
                event: S,
                listeners: x
            }),
            S.data = F))
        }
        Ad(v, t)
    })
}
function Hs(e, t, i) {
    return {
        instance: e,
        listener: t,
        currentTarget: i
    }
}
function ol(e, t) {
    for (var i = t + "Capture", l = []; e !== null; ) {
        var c = e
          , f = c.stateNode;
        c.tag === 5 && f !== null && (c = f,
        f = Ps(e, i),
        f != null && l.unshift(Hs(e, f, c)),
        f = Ps(e, t),
        f != null && l.push(Hs(e, f, c))),
        e = e.return
    }
    return l
}
function mi(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function n0(e, t, i, l, c) {
    for (var f = t._reactName, g = []; i !== null && i !== l; ) {
        var m = i
          , y = m.alternate
          , x = m.stateNode;
        if (y !== null && y === l)
            break;
        m.tag === 5 && x !== null && (m = x,
        c ? (y = Ps(i, f),
        y != null && g.unshift(Hs(i, y, m))) : c || (y = Ps(i, f),
        y != null && g.push(Hs(i, y, m)))),
        i = i.return
    }
    g.length !== 0 && e.push({
        event: t,
        listeners: g
    })
}
var bp = /\r\n?/g
  , Dp = /\u0000|\uFFFD/g;
function r0(e) {
    return (typeof e == "string" ? e : "" + e).replace(bp, `
`).replace(Dp, "")
}
function Do(e, t, i) {
    if (t = r0(t),
    r0(e) !== t && i)
        throw Error(K(425))
}
function ll() {}
var Eu = null
  , Cu = null;
function Au(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Su = typeof setTimeout == "function" ? setTimeout : void 0
  , Mp = typeof clearTimeout == "function" ? clearTimeout : void 0
  , i0 = typeof Promise == "function" ? Promise : void 0
  , kp = typeof queueMicrotask == "function" ? queueMicrotask : typeof i0 < "u" ? function(e) {
    return i0.resolve(null).then(e).catch(Pp)
}
: Su;
function Pp(e) {
    setTimeout(function() {
        throw e
    })
}
function La(e, t) {
    var i = t
      , l = 0;
    do {
        var c = i.nextSibling;
        if (e.removeChild(i),
        c && c.nodeType === 8)
            if (i = c.data,
            i === "/$") {
                if (l === 0) {
                    e.removeChild(c),
                    Fs(t);
                    return
                }
                l--
            } else
                i !== "$" && i !== "$?" && i !== "$!" || l++;
        i = c
    } while (i);
    Fs(t)
}
function Ir(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function s0(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var i = e.data;
            if (i === "$" || i === "$!" || i === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                i === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Zi = Math.random().toString(36).slice(2)
  , jn = "__reactFiber$" + Zi
  , js = "__reactProps$" + Zi
  , tr = "__reactContainer$" + Zi
  , vu = "__reactEvents$" + Zi
  , Bp = "__reactListeners$" + Zi
  , Lp = "__reactHandles$" + Zi;
function Xr(e) {
    var t = e[jn];
    if (t)
        return t;
    for (var i = e.parentNode; i; ) {
        if (t = i[tr] || i[jn]) {
            if (i = t.alternate,
            t.child !== null || i !== null && i.child !== null)
                for (e = s0(e); e !== null; ) {
                    if (i = e[jn])
                        return i;
                    e = s0(e)
                }
            return t
        }
        e = i,
        i = e.parentNode
    }
    return null
}
function no(e) {
    return e = e[jn] || e[tr],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function vi(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(K(33))
}
function Ll(e) {
    return e[js] || null
}
var Iu = []
  , Ii = -1;
function kr(e) {
    return {
        current: e
    }
}
function Xe(e) {
    0 > Ii || (e.current = Iu[Ii],
    Iu[Ii] = null,
    Ii--)
}
function He(e, t) {
    Ii++,
    Iu[Ii] = e.current,
    e.current = t
}
var Dr = {}
  , Bt = kr(Dr)
  , qt = kr(!1)
  , Jr = Dr;
function Vi(e, t) {
    var i = e.type.contextTypes;
    if (!i)
        return Dr;
    var l = e.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
        return l.__reactInternalMemoizedMaskedChildContext;
    var c = {}, f;
    for (f in i)
        c[f] = t[f];
    return l && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = c),
    c
}
function Jt(e) {
    return e = e.childContextTypes,
    e != null
}
function al() {
    Xe(qt),
    Xe(Bt)
}
function o0(e, t, i) {
    if (Bt.current !== Dr)
        throw Error(K(168));
    He(Bt, t),
    He(qt, i)
}
function vd(e, t, i) {
    var l = e.stateNode;
    if (t = t.childContextTypes,
    typeof l.getChildContext != "function")
        return i;
    l = l.getChildContext();
    for (var c in l)
        if (!(c in t))
            throw Error(K(108, Cg(e) || "Unknown", c));
    return et({}, i, l)
}
function ul(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Dr,
    Jr = Bt.current,
    He(Bt, e),
    He(qt, qt.current),
    !0
}
function l0(e, t, i) {
    var l = e.stateNode;
    if (!l)
        throw Error(K(169));
    i ? (e = vd(e, t, Jr),
    l.__reactInternalMemoizedMergedChildContext = e,
    Xe(qt),
    Xe(Bt),
    He(Bt, e)) : Xe(qt),
    He(qt, i)
}
var Kn = null
  , Fl = !1
  , Fa = !1;
function Id(e) {
    Kn === null ? Kn = [e] : Kn.push(e)
}
function Fp(e) {
    Fl = !0,
    Id(e)
}
function Pr() {
    if (!Fa && Kn !== null) {
        Fa = !0;
        var e = 0
          , t = ke;
        try {
            var i = Kn;
            for (ke = 1; e < i.length; e++) {
                var l = i[e];
                do
                    l = l(!0);
                while (l !== null)
            }
            Kn = null,
            Fl = !1
        } catch (c) {
            throw Kn !== null && (Kn = Kn.slice(e + 1)),
            Qf(pc, Pr),
            c
        } finally {
            ke = t,
            Fa = !1
        }
    }
    return null
}
var Ti = []
  , Ni = 0
  , cl = null
  , fl = 0
  , pn = []
  , xn = 0
  , $r = null
  , Qn = 1
  , qn = "";
function Wr(e, t) {
    Ti[Ni++] = fl,
    Ti[Ni++] = cl,
    cl = e,
    fl = t
}
function Td(e, t, i) {
    pn[xn++] = Qn,
    pn[xn++] = qn,
    pn[xn++] = $r,
    $r = e;
    var l = Qn;
    e = qn;
    var c = 32 - Rn(l) - 1;
    l &= ~(1 << c),
    i += 1;
    var f = 32 - Rn(t) + c;
    if (30 < f) {
        var g = c - c % 5;
        f = (l & (1 << g) - 1).toString(32),
        l >>= g,
        c -= g,
        Qn = 1 << 32 - Rn(t) + c | i << c | l,
        qn = f + e
    } else
        Qn = 1 << f | i << c | l,
        qn = e
}
function vc(e) {
    e.return !== null && (Wr(e, 1),
    Td(e, 1, 0))
}
function Ic(e) {
    for (; e === cl; )
        cl = Ti[--Ni],
        Ti[Ni] = null,
        fl = Ti[--Ni],
        Ti[Ni] = null;
    for (; e === $r; )
        $r = pn[--xn],
        pn[xn] = null,
        qn = pn[--xn],
        pn[xn] = null,
        Qn = pn[--xn],
        pn[xn] = null
}
var on = null
  , sn = null
  , Ke = !1
  , _n = null;
function Nd(e, t) {
    var i = mn(5, null, null, 0);
    i.elementType = "DELETED",
    i.stateNode = t,
    i.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [i],
    e.flags |= 16) : t.push(i)
}
function a0(e, t) {
    switch (e.tag) {
    case 5:
        var i = e.type;
        return t = t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        on = e,
        sn = Ir(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        on = e,
        sn = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (i = $r !== null ? {
            id: Qn,
            overflow: qn
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: i,
            retryLane: 1073741824
        },
        i = mn(18, null, null, 0),
        i.stateNode = t,
        i.return = e,
        e.child = i,
        on = e,
        sn = null,
        !0) : !1;
    default:
        return !1
    }
}
function Tu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Nu(e) {
    if (Ke) {
        var t = sn;
        if (t) {
            var i = t;
            if (!a0(e, t)) {
                if (Tu(e))
                    throw Error(K(418));
                t = Ir(i.nextSibling);
                var l = on;
                t && a0(e, t) ? Nd(l, i) : (e.flags = e.flags & -4097 | 2,
                Ke = !1,
                on = e)
            }
        } else {
            if (Tu(e))
                throw Error(K(418));
            e.flags = e.flags & -4097 | 2,
            Ke = !1,
            on = e
        }
    }
}
function u0(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    on = e
}
function Mo(e) {
    if (e !== on)
        return !1;
    if (!Ke)
        return u0(e),
        Ke = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Au(e.type, e.memoizedProps)),
    t && (t = sn)) {
        if (Tu(e))
            throw _d(),
            Error(K(418));
        for (; t; )
            Nd(e, t),
            t = Ir(t.nextSibling)
    }
    if (u0(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(K(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var i = e.data;
                    if (i === "/$") {
                        if (t === 0) {
                            sn = Ir(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        i !== "$" && i !== "$!" && i !== "$?" || t++
                }
                e = e.nextSibling
            }
            sn = null
        }
    } else
        sn = on ? Ir(e.stateNode.nextSibling) : null;
    return !0
}
function _d() {
    for (var e = sn; e; )
        e = Ir(e.nextSibling)
}
function zi() {
    sn = on = null,
    Ke = !1
}
function Tc(e) {
    _n === null ? _n = [e] : _n.push(e)
}
var Up = ir.ReactCurrentBatchConfig;
function xs(e, t, i) {
    if (e = i.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (i._owner) {
            if (i = i._owner,
            i) {
                if (i.tag !== 1)
                    throw Error(K(309));
                var l = i.stateNode
            }
            if (!l)
                throw Error(K(147, e));
            var c = l
              , f = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === f ? t.ref : (t = function(g) {
                var m = c.refs;
                g === null ? delete m[f] : m[f] = g
            }
            ,
            t._stringRef = f,
            t)
        }
        if (typeof e != "string")
            throw Error(K(284));
        if (!i._owner)
            throw Error(K(290, e))
    }
    return e
}
function ko(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(K(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function c0(e) {
    var t = e._init;
    return t(e._payload)
}
function Rd(e) {
    function t(O, _) {
        if (e) {
            var N = O.deletions;
            N === null ? (O.deletions = [_],
            O.flags |= 16) : N.push(_)
        }
    }
    function i(O, _) {
        if (!e)
            return null;
        for (; _ !== null; )
            t(O, _),
            _ = _.sibling;
        return null
    }
    function l(O, _) {
        for (O = new Map; _ !== null; )
            _.key !== null ? O.set(_.key, _) : O.set(_.index, _),
            _ = _.sibling;
        return O
    }
    function c(O, _) {
        return O = Rr(O, _),
        O.index = 0,
        O.sibling = null,
        O
    }
    function f(O, _, N) {
        return O.index = N,
        e ? (N = O.alternate,
        N !== null ? (N = N.index,
        N < _ ? (O.flags |= 2,
        _) : N) : (O.flags |= 2,
        _)) : (O.flags |= 1048576,
        _)
    }
    function g(O) {
        return e && O.alternate === null && (O.flags |= 2),
        O
    }
    function m(O, _, N, V) {
        return _ === null || _.tag !== 6 ? (_ = Ga(N, O.mode, V),
        _.return = O,
        _) : (_ = c(_, N),
        _.return = O,
        _)
    }
    function y(O, _, N, V) {
        var te = N.type;
        return te === Ei ? S(O, _, N.props.children, V, N.key) : _ !== null && (_.elementType === te || typeof te == "object" && te !== null && te.$$typeof === pr && c0(te) === _.type) ? (V = c(_, N.props),
        V.ref = xs(O, _, N),
        V.return = O,
        V) : (V = Qo(N.type, N.key, N.props, null, O.mode, V),
        V.ref = xs(O, _, N),
        V.return = O,
        V)
    }
    function x(O, _, N, V) {
        return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== N.containerInfo || _.stateNode.implementation !== N.implementation ? (_ = Xa(N, O.mode, V),
        _.return = O,
        _) : (_ = c(_, N.children || []),
        _.return = O,
        _)
    }
    function S(O, _, N, V, te) {
        return _ === null || _.tag !== 7 ? (_ = Qr(N, O.mode, V, te),
        _.return = O,
        _) : (_ = c(_, N),
        _.return = O,
        _)
    }
    function v(O, _, N) {
        if (typeof _ == "string" && _ !== "" || typeof _ == "number")
            return _ = Ga("" + _, O.mode, N),
            _.return = O,
            _;
        if (typeof _ == "object" && _ !== null) {
            switch (_.$$typeof) {
            case So:
                return N = Qo(_.type, _.key, _.props, null, O.mode, N),
                N.ref = xs(O, null, _),
                N.return = O,
                N;
            case yi:
                return _ = Xa(_, O.mode, N),
                _.return = O,
                _;
            case pr:
                var V = _._init;
                return v(O, V(_._payload), N)
            }
            if (Cs(_) || fs(_))
                return _ = Qr(_, O.mode, N, null),
                _.return = O,
                _;
            ko(O, _)
        }
        return null
    }
    function D(O, _, N, V) {
        var te = _ !== null ? _.key : null;
        if (typeof N == "string" && N !== "" || typeof N == "number")
            return te !== null ? null : m(O, _, "" + N, V);
        if (typeof N == "object" && N !== null) {
            switch (N.$$typeof) {
            case So:
                return N.key === te ? y(O, _, N, V) : null;
            case yi:
                return N.key === te ? x(O, _, N, V) : null;
            case pr:
                return te = N._init,
                D(O, _, te(N._payload), V)
            }
            if (Cs(N) || fs(N))
                return te !== null ? null : S(O, _, N, V, null);
            ko(O, N)
        }
        return null
    }
    function B(O, _, N, V, te) {
        if (typeof V == "string" && V !== "" || typeof V == "number")
            return O = O.get(N) || null,
            m(_, O, "" + V, te);
        if (typeof V == "object" && V !== null) {
            switch (V.$$typeof) {
            case So:
                return O = O.get(V.key === null ? N : V.key) || null,
                y(_, O, V, te);
            case yi:
                return O = O.get(V.key === null ? N : V.key) || null,
                x(_, O, V, te);
            case pr:
                var Z = V._init;
                return B(O, _, N, Z(V._payload), te)
            }
            if (Cs(V) || fs(V))
                return O = O.get(N) || null,
                S(_, O, V, te, null);
            ko(_, V)
        }
        return null
    }
    function k(O, _, N, V) {
        for (var te = null, Z = null, F = _, $ = _ = 0, W = null; F !== null && $ < N.length; $++) {
            F.index > $ ? (W = F,
            F = null) : W = F.sibling;
            var me = D(O, F, N[$], V);
            if (me === null) {
                F === null && (F = W);
                break
            }
            e && F && me.alternate === null && t(O, F),
            _ = f(me, _, $),
            Z === null ? te = me : Z.sibling = me,
            Z = me,
            F = W
        }
        if ($ === N.length)
            return i(O, F),
            Ke && Wr(O, $),
            te;
        if (F === null) {
            for (; $ < N.length; $++)
                F = v(O, N[$], V),
                F !== null && (_ = f(F, _, $),
                Z === null ? te = F : Z.sibling = F,
                Z = F);
            return Ke && Wr(O, $),
            te
        }
        for (F = l(O, F); $ < N.length; $++)
            W = B(F, O, $, N[$], V),
            W !== null && (e && W.alternate !== null && F.delete(W.key === null ? $ : W.key),
            _ = f(W, _, $),
            Z === null ? te = W : Z.sibling = W,
            Z = W);
        return e && F.forEach(function(Ue) {
            return t(O, Ue)
        }),
        Ke && Wr(O, $),
        te
    }
    function M(O, _, N, V) {
        var te = fs(N);
        if (typeof te != "function")
            throw Error(K(150));
        if (N = te.call(N),
        N == null)
            throw Error(K(151));
        for (var Z = te = null, F = _, $ = _ = 0, W = null, me = N.next(); F !== null && !me.done; $++,
        me = N.next()) {
            F.index > $ ? (W = F,
            F = null) : W = F.sibling;
            var Ue = D(O, F, me.value, V);
            if (Ue === null) {
                F === null && (F = W);
                break
            }
            e && F && Ue.alternate === null && t(O, F),
            _ = f(Ue, _, $),
            Z === null ? te = Ue : Z.sibling = Ue,
            Z = Ue,
            F = W
        }
        if (me.done)
            return i(O, F),
            Ke && Wr(O, $),
            te;
        if (F === null) {
            for (; !me.done; $++,
            me = N.next())
                me = v(O, me.value, V),
                me !== null && (_ = f(me, _, $),
                Z === null ? te = me : Z.sibling = me,
                Z = me);
            return Ke && Wr(O, $),
            te
        }
        for (F = l(O, F); !me.done; $++,
        me = N.next())
            me = B(F, O, $, me.value, V),
            me !== null && (e && me.alternate !== null && F.delete(me.key === null ? $ : me.key),
            _ = f(me, _, $),
            Z === null ? te = me : Z.sibling = me,
            Z = me);
        return e && F.forEach(function(fe) {
            return t(O, fe)
        }),
        Ke && Wr(O, $),
        te
    }
    function X(O, _, N, V) {
        if (typeof N == "object" && N !== null && N.type === Ei && N.key === null && (N = N.props.children),
        typeof N == "object" && N !== null) {
            switch (N.$$typeof) {
            case So:
                e: {
                    for (var te = N.key, Z = _; Z !== null; ) {
                        if (Z.key === te) {
                            if (te = N.type,
                            te === Ei) {
                                if (Z.tag === 7) {
                                    i(O, Z.sibling),
                                    _ = c(Z, N.props.children),
                                    _.return = O,
                                    O = _;
                                    break e
                                }
                            } else if (Z.elementType === te || typeof te == "object" && te !== null && te.$$typeof === pr && c0(te) === Z.type) {
                                i(O, Z.sibling),
                                _ = c(Z, N.props),
                                _.ref = xs(O, Z, N),
                                _.return = O,
                                O = _;
                                break e
                            }
                            i(O, Z);
                            break
                        } else
                            t(O, Z);
                        Z = Z.sibling
                    }
                    N.type === Ei ? (_ = Qr(N.props.children, O.mode, V, N.key),
                    _.return = O,
                    O = _) : (V = Qo(N.type, N.key, N.props, null, O.mode, V),
                    V.ref = xs(O, _, N),
                    V.return = O,
                    O = V)
                }
                return g(O);
            case yi:
                e: {
                    for (Z = N.key; _ !== null; ) {
                        if (_.key === Z)
                            if (_.tag === 4 && _.stateNode.containerInfo === N.containerInfo && _.stateNode.implementation === N.implementation) {
                                i(O, _.sibling),
                                _ = c(_, N.children || []),
                                _.return = O,
                                O = _;
                                break e
                            } else {
                                i(O, _);
                                break
                            }
                        else
                            t(O, _);
                        _ = _.sibling
                    }
                    _ = Xa(N, O.mode, V),
                    _.return = O,
                    O = _
                }
                return g(O);
            case pr:
                return Z = N._init,
                X(O, _, Z(N._payload), V)
            }
            if (Cs(N))
                return k(O, _, N, V);
            if (fs(N))
                return M(O, _, N, V);
            ko(O, N)
        }
        return typeof N == "string" && N !== "" || typeof N == "number" ? (N = "" + N,
        _ !== null && _.tag === 6 ? (i(O, _.sibling),
        _ = c(_, N),
        _.return = O,
        O = _) : (i(O, _),
        _ = Ga(N, O.mode, V),
        _.return = O,
        O = _),
        g(O)) : i(O, _)
    }
    return X
}
var Hi = Rd(!0)
  , Od = Rd(!1)
  , dl = kr(null)
  , hl = null
  , _i = null
  , Nc = null;
function _c() {
    Nc = _i = hl = null
}
function Rc(e) {
    var t = dl.current;
    Xe(dl),
    e._currentValue = t
}
function _u(e, t, i) {
    for (; e !== null; ) {
        var l = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === i)
            break;
        e = e.return
    }
}
function Li(e, t) {
    hl = e,
    Nc = _i = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Qt = !0),
    e.firstContext = null)
}
function En(e) {
    var t = e._currentValue;
    if (Nc !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        _i === null) {
            if (hl === null)
                throw Error(K(308));
            _i = e,
            hl.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            _i = _i.next = e;
    return t
}
var Yr = null;
function Oc(e) {
    Yr === null ? Yr = [e] : Yr.push(e)
}
function bd(e, t, i, l) {
    var c = t.interleaved;
    return c === null ? (i.next = i,
    Oc(t)) : (i.next = c.next,
    c.next = i),
    t.interleaved = i,
    nr(e, l)
}
function nr(e, t) {
    e.lanes |= t;
    var i = e.alternate;
    for (i !== null && (i.lanes |= t),
    i = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        i = e.alternate,
        i !== null && (i.childLanes |= t),
        i = e,
        e = e.return;
    return i.tag === 3 ? i.stateNode : null
}
var xr = !1;
function bc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Dd(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function $n(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Tr(e, t, i) {
    var l = e.updateQueue;
    if (l === null)
        return null;
    if (l = l.shared,
    Re & 2) {
        var c = l.pending;
        return c === null ? t.next = t : (t.next = c.next,
        c.next = t),
        l.pending = t,
        nr(e, i)
    }
    return c = l.interleaved,
    c === null ? (t.next = t,
    Oc(l)) : (t.next = c.next,
    c.next = t),
    l.interleaved = t,
    nr(e, i)
}
function Wo(e, t, i) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (i & 4194240) !== 0)) {
        var l = t.lanes;
        l &= e.pendingLanes,
        i |= l,
        t.lanes = i,
        xc(e, i)
    }
}
function f0(e, t) {
    var i = e.updateQueue
      , l = e.alternate;
    if (l !== null && (l = l.updateQueue,
    i === l)) {
        var c = null
          , f = null;
        if (i = i.firstBaseUpdate,
        i !== null) {
            do {
                var g = {
                    eventTime: i.eventTime,
                    lane: i.lane,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null
                };
                f === null ? c = f = g : f = f.next = g,
                i = i.next
            } while (i !== null);
            f === null ? c = f = t : f = f.next = t
        } else
            c = f = t;
        i = {
            baseState: l.baseState,
            firstBaseUpdate: c,
            lastBaseUpdate: f,
            shared: l.shared,
            effects: l.effects
        },
        e.updateQueue = i;
        return
    }
    e = i.lastBaseUpdate,
    e === null ? i.firstBaseUpdate = t : e.next = t,
    i.lastBaseUpdate = t
}
function gl(e, t, i, l) {
    var c = e.updateQueue;
    xr = !1;
    var f = c.firstBaseUpdate
      , g = c.lastBaseUpdate
      , m = c.shared.pending;
    if (m !== null) {
        c.shared.pending = null;
        var y = m
          , x = y.next;
        y.next = null,
        g === null ? f = x : g.next = x,
        g = y;
        var S = e.alternate;
        S !== null && (S = S.updateQueue,
        m = S.lastBaseUpdate,
        m !== g && (m === null ? S.firstBaseUpdate = x : m.next = x,
        S.lastBaseUpdate = y))
    }
    if (f !== null) {
        var v = c.baseState;
        g = 0,
        S = x = y = null,
        m = f;
        do {
            var D = m.lane
              , B = m.eventTime;
            if ((l & D) === D) {
                S !== null && (S = S.next = {
                    eventTime: B,
                    lane: 0,
                    tag: m.tag,
                    payload: m.payload,
                    callback: m.callback,
                    next: null
                });
                e: {
                    var k = e
                      , M = m;
                    switch (D = t,
                    B = i,
                    M.tag) {
                    case 1:
                        if (k = M.payload,
                        typeof k == "function") {
                            v = k.call(B, v, D);
                            break e
                        }
                        v = k;
                        break e;
                    case 3:
                        k.flags = k.flags & -65537 | 128;
                    case 0:
                        if (k = M.payload,
                        D = typeof k == "function" ? k.call(B, v, D) : k,
                        D == null)
                            break e;
                        v = et({}, v, D);
                        break e;
                    case 2:
                        xr = !0
                    }
                }
                m.callback !== null && m.lane !== 0 && (e.flags |= 64,
                D = c.effects,
                D === null ? c.effects = [m] : D.push(m))
            } else
                B = {
                    eventTime: B,
                    lane: D,
                    tag: m.tag,
                    payload: m.payload,
                    callback: m.callback,
                    next: null
                },
                S === null ? (x = S = B,
                y = v) : S = S.next = B,
                g |= D;
            if (m = m.next,
            m === null) {
                if (m = c.shared.pending,
                m === null)
                    break;
                D = m,
                m = D.next,
                D.next = null,
                c.lastBaseUpdate = D,
                c.shared.pending = null
            }
        } while (!0);
        if (S === null && (y = v),
        c.baseState = y,
        c.firstBaseUpdate = x,
        c.lastBaseUpdate = S,
        t = c.shared.interleaved,
        t !== null) {
            c = t;
            do
                g |= c.lane,
                c = c.next;
            while (c !== t)
        } else
            f === null && (c.shared.lanes = 0);
        ti |= g,
        e.lanes = g,
        e.memoizedState = v
    }
}
function d0(e, t, i) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var l = e[t]
              , c = l.callback;
            if (c !== null) {
                if (l.callback = null,
                l = i,
                typeof c != "function")
                    throw Error(K(191, c));
                c.call(l)
            }
        }
}
var ro = {}
  , Gn = kr(ro)
  , Ws = kr(ro)
  , Gs = kr(ro);
function Zr(e) {
    if (e === ro)
        throw Error(K(174));
    return e
}
function Dc(e, t) {
    switch (He(Gs, t),
    He(Ws, e),
    He(Gn, ro),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : au(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = au(t, e)
    }
    Xe(Gn),
    He(Gn, t)
}
function ji() {
    Xe(Gn),
    Xe(Ws),
    Xe(Gs)
}
function Md(e) {
    Zr(Gs.current);
    var t = Zr(Gn.current)
      , i = au(t, e.type);
    t !== i && (He(Ws, e),
    He(Gn, i))
}
function Mc(e) {
    Ws.current === e && (Xe(Gn),
    Xe(Ws))
}
var Je = kr(0);
function pl(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var i = t.memoizedState;
            if (i !== null && (i = i.dehydrated,
            i === null || i.data === "$?" || i.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Ua = [];
function kc() {
    for (var e = 0; e < Ua.length; e++)
        Ua[e]._workInProgressVersionPrimary = null;
    Ua.length = 0
}
var Go = ir.ReactCurrentDispatcher
  , Va = ir.ReactCurrentBatchConfig
  , ei = 0
  , $e = null
  , mt = null
  , At = null
  , xl = !1
  , Rs = !1
  , Xs = 0
  , Vp = 0;
function Mt() {
    throw Error(K(321))
}
function Pc(e, t) {
    if (t === null)
        return !1;
    for (var i = 0; i < t.length && i < e.length; i++)
        if (!Dn(e[i], t[i]))
            return !1;
    return !0
}
function Bc(e, t, i, l, c, f) {
    if (ei = f,
    $e = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Go.current = e === null || e.memoizedState === null ? Wp : Gp,
    e = i(l, c),
    Rs) {
        f = 0;
        do {
            if (Rs = !1,
            Xs = 0,
            25 <= f)
                throw Error(K(301));
            f += 1,
            At = mt = null,
            t.updateQueue = null,
            Go.current = Xp,
            e = i(l, c)
        } while (Rs)
    }
    if (Go.current = ml,
    t = mt !== null && mt.next !== null,
    ei = 0,
    At = mt = $e = null,
    xl = !1,
    t)
        throw Error(K(300));
    return e
}
function Lc() {
    var e = Xs !== 0;
    return Xs = 0,
    e
}
function Hn() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return At === null ? $e.memoizedState = At = e : At = At.next = e,
    At
}
function Cn() {
    if (mt === null) {
        var e = $e.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = mt.next;
    var t = At === null ? $e.memoizedState : At.next;
    if (t !== null)
        At = t,
        mt = e;
    else {
        if (e === null)
            throw Error(K(310));
        mt = e,
        e = {
            memoizedState: mt.memoizedState,
            baseState: mt.baseState,
            baseQueue: mt.baseQueue,
            queue: mt.queue,
            next: null
        },
        At === null ? $e.memoizedState = At = e : At = At.next = e
    }
    return At
}
function Ys(e, t) {
    return typeof t == "function" ? t(e) : t
}
function za(e) {
    var t = Cn()
      , i = t.queue;
    if (i === null)
        throw Error(K(311));
    i.lastRenderedReducer = e;
    var l = mt
      , c = l.baseQueue
      , f = i.pending;
    if (f !== null) {
        if (c !== null) {
            var g = c.next;
            c.next = f.next,
            f.next = g
        }
        l.baseQueue = c = f,
        i.pending = null
    }
    if (c !== null) {
        f = c.next,
        l = l.baseState;
        var m = g = null
          , y = null
          , x = f;
        do {
            var S = x.lane;
            if ((ei & S) === S)
                y !== null && (y = y.next = {
                    lane: 0,
                    action: x.action,
                    hasEagerState: x.hasEagerState,
                    eagerState: x.eagerState,
                    next: null
                }),
                l = x.hasEagerState ? x.eagerState : e(l, x.action);
            else {
                var v = {
                    lane: S,
                    action: x.action,
                    hasEagerState: x.hasEagerState,
                    eagerState: x.eagerState,
                    next: null
                };
                y === null ? (m = y = v,
                g = l) : y = y.next = v,
                $e.lanes |= S,
                ti |= S
            }
            x = x.next
        } while (x !== null && x !== f);
        y === null ? g = l : y.next = m,
        Dn(l, t.memoizedState) || (Qt = !0),
        t.memoizedState = l,
        t.baseState = g,
        t.baseQueue = y,
        i.lastRenderedState = l
    }
    if (e = i.interleaved,
    e !== null) {
        c = e;
        do
            f = c.lane,
            $e.lanes |= f,
            ti |= f,
            c = c.next;
        while (c !== e)
    } else
        c === null && (i.lanes = 0);
    return [t.memoizedState, i.dispatch]
}
function Ha(e) {
    var t = Cn()
      , i = t.queue;
    if (i === null)
        throw Error(K(311));
    i.lastRenderedReducer = e;
    var l = i.dispatch
      , c = i.pending
      , f = t.memoizedState;
    if (c !== null) {
        i.pending = null;
        var g = c = c.next;
        do
            f = e(f, g.action),
            g = g.next;
        while (g !== c);
        Dn(f, t.memoizedState) || (Qt = !0),
        t.memoizedState = f,
        t.baseQueue === null && (t.baseState = f),
        i.lastRenderedState = f
    }
    return [f, l]
}
function kd() {}
function Pd(e, t) {
    var i = $e
      , l = Cn()
      , c = t()
      , f = !Dn(l.memoizedState, c);
    if (f && (l.memoizedState = c,
    Qt = !0),
    l = l.queue,
    Fc(Fd.bind(null, i, l, e), [e]),
    l.getSnapshot !== t || f || At !== null && At.memoizedState.tag & 1) {
        if (i.flags |= 2048,
        Zs(9, Ld.bind(null, i, l, c, t), void 0, null),
        St === null)
            throw Error(K(349));
        ei & 30 || Bd(i, t, c)
    }
    return c
}
function Bd(e, t, i) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: i
    },
    t = $e.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    $e.updateQueue = t,
    t.stores = [e]) : (i = t.stores,
    i === null ? t.stores = [e] : i.push(e))
}
function Ld(e, t, i, l) {
    t.value = i,
    t.getSnapshot = l,
    Ud(t) && Vd(e)
}
function Fd(e, t, i) {
    return i(function() {
        Ud(t) && Vd(e)
    })
}
function Ud(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var i = t();
        return !Dn(e, i)
    } catch {
        return !0
    }
}
function Vd(e) {
    var t = nr(e, 1);
    t !== null && On(t, e, 1, -1)
}
function h0(e) {
    var t = Hn();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ys,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = jp.bind(null, $e, e),
    [t.memoizedState, e]
}
function Zs(e, t, i, l) {
    return e = {
        tag: e,
        create: t,
        destroy: i,
        deps: l,
        next: null
    },
    t = $e.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    $e.updateQueue = t,
    t.lastEffect = e.next = e) : (i = t.lastEffect,
    i === null ? t.lastEffect = e.next = e : (l = i.next,
    i.next = e,
    e.next = l,
    t.lastEffect = e)),
    e
}
function zd() {
    return Cn().memoizedState
}
function Xo(e, t, i, l) {
    var c = Hn();
    $e.flags |= e,
    c.memoizedState = Zs(1 | t, i, void 0, l === void 0 ? null : l)
}
function Ul(e, t, i, l) {
    var c = Cn();
    l = l === void 0 ? null : l;
    var f = void 0;
    if (mt !== null) {
        var g = mt.memoizedState;
        if (f = g.destroy,
        l !== null && Pc(l, g.deps)) {
            c.memoizedState = Zs(t, i, f, l);
            return
        }
    }
    $e.flags |= e,
    c.memoizedState = Zs(1 | t, i, f, l)
}
function g0(e, t) {
    return Xo(8390656, 8, e, t)
}
function Fc(e, t) {
    return Ul(2048, 8, e, t)
}
function Hd(e, t) {
    return Ul(4, 2, e, t)
}
function jd(e, t) {
    return Ul(4, 4, e, t)
}
function Wd(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Gd(e, t, i) {
    return i = i != null ? i.concat([e]) : null,
    Ul(4, 4, Wd.bind(null, t, e), i)
}
function Uc() {}
function Xd(e, t) {
    var i = Cn();
    t = t === void 0 ? null : t;
    var l = i.memoizedState;
    return l !== null && t !== null && Pc(t, l[1]) ? l[0] : (i.memoizedState = [e, t],
    e)
}
function Yd(e, t) {
    var i = Cn();
    t = t === void 0 ? null : t;
    var l = i.memoizedState;
    return l !== null && t !== null && Pc(t, l[1]) ? l[0] : (e = e(),
    i.memoizedState = [e, t],
    e)
}
function Zd(e, t, i) {
    return ei & 21 ? (Dn(i, t) || (i = $f(),
    $e.lanes |= i,
    ti |= i,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Qt = !0),
    e.memoizedState = i)
}
function zp(e, t) {
    var i = ke;
    ke = i !== 0 && 4 > i ? i : 4,
    e(!0);
    var l = Va.transition;
    Va.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ke = i,
        Va.transition = l
    }
}
function Kd() {
    return Cn().memoizedState
}
function Hp(e, t, i) {
    var l = _r(e);
    if (i = {
        lane: l,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Qd(e))
        qd(t, i);
    else if (i = bd(e, t, i, l),
    i !== null) {
        var c = Vt();
        On(i, e, l, c),
        Jd(i, t, l)
    }
}
function jp(e, t, i) {
    var l = _r(e)
      , c = {
        lane: l,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Qd(e))
        qd(t, c);
    else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer,
        f !== null))
            try {
                var g = t.lastRenderedState
                  , m = f(g, i);
                if (c.hasEagerState = !0,
                c.eagerState = m,
                Dn(m, g)) {
                    var y = t.interleaved;
                    y === null ? (c.next = c,
                    Oc(t)) : (c.next = y.next,
                    y.next = c),
                    t.interleaved = c;
                    return
                }
            } catch {} finally {}
        i = bd(e, t, c, l),
        i !== null && (c = Vt(),
        On(i, e, l, c),
        Jd(i, t, l))
    }
}
function Qd(e) {
    var t = e.alternate;
    return e === $e || t !== null && t === $e
}
function qd(e, t) {
    Rs = xl = !0;
    var i = e.pending;
    i === null ? t.next = t : (t.next = i.next,
    i.next = t),
    e.pending = t
}
function Jd(e, t, i) {
    if (i & 4194240) {
        var l = t.lanes;
        l &= e.pendingLanes,
        i |= l,
        t.lanes = i,
        xc(e, i)
    }
}
var ml = {
    readContext: En,
    useCallback: Mt,
    useContext: Mt,
    useEffect: Mt,
    useImperativeHandle: Mt,
    useInsertionEffect: Mt,
    useLayoutEffect: Mt,
    useMemo: Mt,
    useReducer: Mt,
    useRef: Mt,
    useState: Mt,
    useDebugValue: Mt,
    useDeferredValue: Mt,
    useTransition: Mt,
    useMutableSource: Mt,
    useSyncExternalStore: Mt,
    useId: Mt,
    unstable_isNewReconciler: !1
}
  , Wp = {
    readContext: En,
    useCallback: function(e, t) {
        return Hn().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: En,
    useEffect: g0,
    useImperativeHandle: function(e, t, i) {
        return i = i != null ? i.concat([e]) : null,
        Xo(4194308, 4, Wd.bind(null, t, e), i)
    },
    useLayoutEffect: function(e, t) {
        return Xo(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Xo(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var i = Hn();
        return t = t === void 0 ? null : t,
        e = e(),
        i.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, i) {
        var l = Hn();
        return t = i !== void 0 ? i(t) : t,
        l.memoizedState = l.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        l.queue = e,
        e = e.dispatch = Hp.bind(null, $e, e),
        [l.memoizedState, e]
    },
    useRef: function(e) {
        var t = Hn();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: h0,
    useDebugValue: Uc,
    useDeferredValue: function(e) {
        return Hn().memoizedState = e
    },
    useTransition: function() {
        var e = h0(!1)
          , t = e[0];
        return e = zp.bind(null, e[1]),
        Hn().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, i) {
        var l = $e
          , c = Hn();
        if (Ke) {
            if (i === void 0)
                throw Error(K(407));
            i = i()
        } else {
            if (i = t(),
            St === null)
                throw Error(K(349));
            ei & 30 || Bd(l, t, i)
        }
        c.memoizedState = i;
        var f = {
            value: i,
            getSnapshot: t
        };
        return c.queue = f,
        g0(Fd.bind(null, l, f, e), [e]),
        l.flags |= 2048,
        Zs(9, Ld.bind(null, l, f, i, t), void 0, null),
        i
    },
    useId: function() {
        var e = Hn()
          , t = St.identifierPrefix;
        if (Ke) {
            var i = qn
              , l = Qn;
            i = (l & ~(1 << 32 - Rn(l) - 1)).toString(32) + i,
            t = ":" + t + "R" + i,
            i = Xs++,
            0 < i && (t += "H" + i.toString(32)),
            t += ":"
        } else
            i = Vp++,
            t = ":" + t + "r" + i.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Gp = {
    readContext: En,
    useCallback: Xd,
    useContext: En,
    useEffect: Fc,
    useImperativeHandle: Gd,
    useInsertionEffect: Hd,
    useLayoutEffect: jd,
    useMemo: Yd,
    useReducer: za,
    useRef: zd,
    useState: function() {
        return za(Ys)
    },
    useDebugValue: Uc,
    useDeferredValue: function(e) {
        var t = Cn();
        return Zd(t, mt.memoizedState, e)
    },
    useTransition: function() {
        var e = za(Ys)[0]
          , t = Cn().memoizedState;
        return [e, t]
    },
    useMutableSource: kd,
    useSyncExternalStore: Pd,
    useId: Kd,
    unstable_isNewReconciler: !1
}
  , Xp = {
    readContext: En,
    useCallback: Xd,
    useContext: En,
    useEffect: Fc,
    useImperativeHandle: Gd,
    useInsertionEffect: Hd,
    useLayoutEffect: jd,
    useMemo: Yd,
    useReducer: Ha,
    useRef: zd,
    useState: function() {
        return Ha(Ys)
    },
    useDebugValue: Uc,
    useDeferredValue: function(e) {
        var t = Cn();
        return mt === null ? t.memoizedState = e : Zd(t, mt.memoizedState, e)
    },
    useTransition: function() {
        var e = Ha(Ys)[0]
          , t = Cn().memoizedState;
        return [e, t]
    },
    useMutableSource: kd,
    useSyncExternalStore: Pd,
    useId: Kd,
    unstable_isNewReconciler: !1
};
function Tn(e, t) {
    if (e && e.defaultProps) {
        t = et({}, t),
        e = e.defaultProps;
        for (var i in e)
            t[i] === void 0 && (t[i] = e[i]);
        return t
    }
    return t
}
function Ru(e, t, i, l) {
    t = e.memoizedState,
    i = i(l, t),
    i = i == null ? t : et({}, t, i),
    e.memoizedState = i,
    e.lanes === 0 && (e.updateQueue.baseState = i)
}
var Vl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? si(e) === e : !1
    },
    enqueueSetState: function(e, t, i) {
        e = e._reactInternals;
        var l = Vt()
          , c = _r(e)
          , f = $n(l, c);
        f.payload = t,
        i != null && (f.callback = i),
        t = Tr(e, f, c),
        t !== null && (On(t, e, c, l),
        Wo(t, e, c))
    },
    enqueueReplaceState: function(e, t, i) {
        e = e._reactInternals;
        var l = Vt()
          , c = _r(e)
          , f = $n(l, c);
        f.tag = 1,
        f.payload = t,
        i != null && (f.callback = i),
        t = Tr(e, f, c),
        t !== null && (On(t, e, c, l),
        Wo(t, e, c))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var i = Vt()
          , l = _r(e)
          , c = $n(i, l);
        c.tag = 2,
        t != null && (c.callback = t),
        t = Tr(e, c, l),
        t !== null && (On(t, e, l, i),
        Wo(t, e, l))
    }
};
function p0(e, t, i, l, c, f, g) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, f, g) : t.prototype && t.prototype.isPureReactComponent ? !Vs(i, l) || !Vs(c, f) : !0
}
function $d(e, t, i) {
    var l = !1
      , c = Dr
      , f = t.contextType;
    return typeof f == "object" && f !== null ? f = En(f) : (c = Jt(t) ? Jr : Bt.current,
    l = t.contextTypes,
    f = (l = l != null) ? Vi(e, c) : Dr),
    t = new t(i,f),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Vl,
    e.stateNode = t,
    t._reactInternals = e,
    l && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = c,
    e.__reactInternalMemoizedMaskedChildContext = f),
    t
}
function x0(e, t, i, l) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, l),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, l),
    t.state !== e && Vl.enqueueReplaceState(t, t.state, null)
}
function Ou(e, t, i, l) {
    var c = e.stateNode;
    c.props = i,
    c.state = e.memoizedState,
    c.refs = {},
    bc(e);
    var f = t.contextType;
    typeof f == "object" && f !== null ? c.context = En(f) : (f = Jt(t) ? Jr : Bt.current,
    c.context = Vi(e, f)),
    c.state = e.memoizedState,
    f = t.getDerivedStateFromProps,
    typeof f == "function" && (Ru(e, t, f, i),
    c.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (t = c.state,
    typeof c.componentWillMount == "function" && c.componentWillMount(),
    typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(),
    t !== c.state && Vl.enqueueReplaceState(c, c.state, null),
    gl(e, i, c, l),
    c.state = e.memoizedState),
    typeof c.componentDidMount == "function" && (e.flags |= 4194308)
}
function Wi(e, t) {
    try {
        var i = ""
          , l = t;
        do
            i += Eg(l),
            l = l.return;
        while (l);
        var c = i
    } catch (f) {
        c = `
Error generating stack: ` + f.message + `
` + f.stack
    }
    return {
        value: e,
        source: t,
        stack: c,
        digest: null
    }
}
function ja(e, t, i) {
    return {
        value: e,
        source: null,
        stack: i ?? null,
        digest: t ?? null
    }
}
function bu(e, t) {
    try {
        console.error(t.value)
    } catch (i) {
        setTimeout(function() {
            throw i
        })
    }
}
var Yp = typeof WeakMap == "function" ? WeakMap : Map;
function eh(e, t, i) {
    i = $n(-1, i),
    i.tag = 3,
    i.payload = {
        element: null
    };
    var l = t.value;
    return i.callback = function() {
        yl || (yl = !0,
        zu = l),
        bu(e, t)
    }
    ,
    i
}
function th(e, t, i) {
    i = $n(-1, i),
    i.tag = 3;
    var l = e.type.getDerivedStateFromError;
    if (typeof l == "function") {
        var c = t.value;
        i.payload = function() {
            return l(c)
        }
        ,
        i.callback = function() {
            bu(e, t)
        }
    }
    var f = e.stateNode;
    return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        bu(e, t),
        typeof l != "function" && (Nr === null ? Nr = new Set([this]) : Nr.add(this));
        var g = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: g !== null ? g : ""
        })
    }
    ),
    i
}
function m0(e, t, i) {
    var l = e.pingCache;
    if (l === null) {
        l = e.pingCache = new Yp;
        var c = new Set;
        l.set(t, c)
    } else
        c = l.get(t),
        c === void 0 && (c = new Set,
        l.set(t, c));
    c.has(i) || (c.add(i),
    e = lx.bind(null, e, t, i),
    t.then(e, e))
}
function w0(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function y0(e, t, i, l, c) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = c,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    i.flags |= 131072,
    i.flags &= -52805,
    i.tag === 1 && (i.alternate === null ? i.tag = 17 : (t = $n(-1, 1),
    t.tag = 2,
    Tr(i, t, 1))),
    i.lanes |= 1),
    e)
}
var Zp = ir.ReactCurrentOwner
  , Qt = !1;
function Ut(e, t, i, l) {
    t.child = e === null ? Od(t, null, i, l) : Hi(t, e.child, i, l)
}
function E0(e, t, i, l, c) {
    i = i.render;
    var f = t.ref;
    return Li(t, c),
    l = Bc(e, t, i, l, f, c),
    i = Lc(),
    e !== null && !Qt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~c,
    rr(e, t, c)) : (Ke && i && vc(t),
    t.flags |= 1,
    Ut(e, t, l, c),
    t.child)
}
function C0(e, t, i, l, c) {
    if (e === null) {
        var f = i.type;
        return typeof f == "function" && !Yc(f) && f.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (t.tag = 15,
        t.type = f,
        nh(e, t, f, l, c)) : (e = Qo(i.type, null, l, t, t.mode, c),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (f = e.child,
    !(e.lanes & c)) {
        var g = f.memoizedProps;
        if (i = i.compare,
        i = i !== null ? i : Vs,
        i(g, l) && e.ref === t.ref)
            return rr(e, t, c)
    }
    return t.flags |= 1,
    e = Rr(f, l),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function nh(e, t, i, l, c) {
    if (e !== null) {
        var f = e.memoizedProps;
        if (Vs(f, l) && e.ref === t.ref)
            if (Qt = !1,
            t.pendingProps = l = f,
            (e.lanes & c) !== 0)
                e.flags & 131072 && (Qt = !0);
            else
                return t.lanes = e.lanes,
                rr(e, t, c)
    }
    return Du(e, t, i, l, c)
}
function rh(e, t, i) {
    var l = t.pendingProps
      , c = l.children
      , f = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            He(Oi, rn),
            rn |= i;
        else {
            if (!(i & 1073741824))
                return e = f !== null ? f.baseLanes | i : i,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                He(Oi, rn),
                rn |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            l = f !== null ? f.baseLanes : i,
            He(Oi, rn),
            rn |= l
        }
    else
        f !== null ? (l = f.baseLanes | i,
        t.memoizedState = null) : l = i,
        He(Oi, rn),
        rn |= l;
    return Ut(e, t, c, i),
    t.child
}
function ih(e, t) {
    var i = t.ref;
    (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Du(e, t, i, l, c) {
    var f = Jt(i) ? Jr : Bt.current;
    return f = Vi(t, f),
    Li(t, c),
    i = Bc(e, t, i, l, f, c),
    l = Lc(),
    e !== null && !Qt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~c,
    rr(e, t, c)) : (Ke && l && vc(t),
    t.flags |= 1,
    Ut(e, t, i, c),
    t.child)
}
function A0(e, t, i, l, c) {
    if (Jt(i)) {
        var f = !0;
        ul(t)
    } else
        f = !1;
    if (Li(t, c),
    t.stateNode === null)
        Yo(e, t),
        $d(t, i, l),
        Ou(t, i, l, c),
        l = !0;
    else if (e === null) {
        var g = t.stateNode
          , m = t.memoizedProps;
        g.props = m;
        var y = g.context
          , x = i.contextType;
        typeof x == "object" && x !== null ? x = En(x) : (x = Jt(i) ? Jr : Bt.current,
        x = Vi(t, x));
        var S = i.getDerivedStateFromProps
          , v = typeof S == "function" || typeof g.getSnapshotBeforeUpdate == "function";
        v || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (m !== l || y !== x) && x0(t, g, l, x),
        xr = !1;
        var D = t.memoizedState;
        g.state = D,
        gl(t, l, g, c),
        y = t.memoizedState,
        m !== l || D !== y || qt.current || xr ? (typeof S == "function" && (Ru(t, i, S, l),
        y = t.memoizedState),
        (m = xr || p0(t, i, m, l, D, y, x)) ? (v || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (typeof g.componentWillMount == "function" && g.componentWillMount(),
        typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount()),
        typeof g.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof g.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = l,
        t.memoizedState = y),
        g.props = l,
        g.state = y,
        g.context = x,
        l = m) : (typeof g.componentDidMount == "function" && (t.flags |= 4194308),
        l = !1)
    } else {
        g = t.stateNode,
        Dd(e, t),
        m = t.memoizedProps,
        x = t.type === t.elementType ? m : Tn(t.type, m),
        g.props = x,
        v = t.pendingProps,
        D = g.context,
        y = i.contextType,
        typeof y == "object" && y !== null ? y = En(y) : (y = Jt(i) ? Jr : Bt.current,
        y = Vi(t, y));
        var B = i.getDerivedStateFromProps;
        (S = typeof B == "function" || typeof g.getSnapshotBeforeUpdate == "function") || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (m !== v || D !== y) && x0(t, g, l, y),
        xr = !1,
        D = t.memoizedState,
        g.state = D,
        gl(t, l, g, c);
        var k = t.memoizedState;
        m !== v || D !== k || qt.current || xr ? (typeof B == "function" && (Ru(t, i, B, l),
        k = t.memoizedState),
        (x = xr || p0(t, i, x, l, D, k, y) || !1) ? (S || typeof g.UNSAFE_componentWillUpdate != "function" && typeof g.componentWillUpdate != "function" || (typeof g.componentWillUpdate == "function" && g.componentWillUpdate(l, k, y),
        typeof g.UNSAFE_componentWillUpdate == "function" && g.UNSAFE_componentWillUpdate(l, k, y)),
        typeof g.componentDidUpdate == "function" && (t.flags |= 4),
        typeof g.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof g.componentDidUpdate != "function" || m === e.memoizedProps && D === e.memoizedState || (t.flags |= 4),
        typeof g.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && D === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = l,
        t.memoizedState = k),
        g.props = l,
        g.state = k,
        g.context = y,
        l = x) : (typeof g.componentDidUpdate != "function" || m === e.memoizedProps && D === e.memoizedState || (t.flags |= 4),
        typeof g.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && D === e.memoizedState || (t.flags |= 1024),
        l = !1)
    }
    return Mu(e, t, i, l, f, c)
}
function Mu(e, t, i, l, c, f) {
    ih(e, t);
    var g = (t.flags & 128) !== 0;
    if (!l && !g)
        return c && l0(t, i, !1),
        rr(e, t, f);
    l = t.stateNode,
    Zp.current = t;
    var m = g && typeof i.getDerivedStateFromError != "function" ? null : l.render();
    return t.flags |= 1,
    e !== null && g ? (t.child = Hi(t, e.child, null, f),
    t.child = Hi(t, null, m, f)) : Ut(e, t, m, f),
    t.memoizedState = l.state,
    c && l0(t, i, !0),
    t.child
}
function sh(e) {
    var t = e.stateNode;
    t.pendingContext ? o0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && o0(e, t.context, !1),
    Dc(e, t.containerInfo)
}
function S0(e, t, i, l, c) {
    return zi(),
    Tc(c),
    t.flags |= 256,
    Ut(e, t, i, l),
    t.child
}
var ku = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Pu(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function oh(e, t, i) {
    var l = t.pendingProps, c = Je.current, f = !1, g = (t.flags & 128) !== 0, m;
    if ((m = g) || (m = e !== null && e.memoizedState === null ? !1 : (c & 2) !== 0),
    m ? (f = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (c |= 1),
    He(Je, c & 1),
    e === null)
        return Nu(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (g = l.children,
        e = l.fallback,
        f ? (l = t.mode,
        f = t.child,
        g = {
            mode: "hidden",
            children: g
        },
        !(l & 1) && f !== null ? (f.childLanes = 0,
        f.pendingProps = g) : f = jl(g, l, 0, null),
        e = Qr(e, l, i, null),
        f.return = t,
        e.return = t,
        f.sibling = e,
        t.child = f,
        t.child.memoizedState = Pu(i),
        t.memoizedState = ku,
        e) : Vc(t, g));
    if (c = e.memoizedState,
    c !== null && (m = c.dehydrated,
    m !== null))
        return Kp(e, t, g, l, m, c, i);
    if (f) {
        f = l.fallback,
        g = t.mode,
        c = e.child,
        m = c.sibling;
        var y = {
            mode: "hidden",
            children: l.children
        };
        return !(g & 1) && t.child !== c ? (l = t.child,
        l.childLanes = 0,
        l.pendingProps = y,
        t.deletions = null) : (l = Rr(c, y),
        l.subtreeFlags = c.subtreeFlags & 14680064),
        m !== null ? f = Rr(m, f) : (f = Qr(f, g, i, null),
        f.flags |= 2),
        f.return = t,
        l.return = t,
        l.sibling = f,
        t.child = l,
        l = f,
        f = t.child,
        g = e.child.memoizedState,
        g = g === null ? Pu(i) : {
            baseLanes: g.baseLanes | i,
            cachePool: null,
            transitions: g.transitions
        },
        f.memoizedState = g,
        f.childLanes = e.childLanes & ~i,
        t.memoizedState = ku,
        l
    }
    return f = e.child,
    e = f.sibling,
    l = Rr(f, {
        mode: "visible",
        children: l.children
    }),
    !(t.mode & 1) && (l.lanes = i),
    l.return = t,
    l.sibling = null,
    e !== null && (i = t.deletions,
    i === null ? (t.deletions = [e],
    t.flags |= 16) : i.push(e)),
    t.child = l,
    t.memoizedState = null,
    l
}
function Vc(e, t) {
    return t = jl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Po(e, t, i, l) {
    return l !== null && Tc(l),
    Hi(t, e.child, null, i),
    e = Vc(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Kp(e, t, i, l, c, f, g) {
    if (i)
        return t.flags & 256 ? (t.flags &= -257,
        l = ja(Error(K(422))),
        Po(e, t, g, l)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (f = l.fallback,
        c = t.mode,
        l = jl({
            mode: "visible",
            children: l.children
        }, c, 0, null),
        f = Qr(f, c, g, null),
        f.flags |= 2,
        l.return = t,
        f.return = t,
        l.sibling = f,
        t.child = l,
        t.mode & 1 && Hi(t, e.child, null, g),
        t.child.memoizedState = Pu(g),
        t.memoizedState = ku,
        f);
    if (!(t.mode & 1))
        return Po(e, t, g, null);
    if (c.data === "$!") {
        if (l = c.nextSibling && c.nextSibling.dataset,
        l)
            var m = l.dgst;
        return l = m,
        f = Error(K(419)),
        l = ja(f, l, void 0),
        Po(e, t, g, l)
    }
    if (m = (g & e.childLanes) !== 0,
    Qt || m) {
        if (l = St,
        l !== null) {
            switch (g & -g) {
            case 4:
                c = 2;
                break;
            case 16:
                c = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                c = 32;
                break;
            case 536870912:
                c = 268435456;
                break;
            default:
                c = 0
            }
            c = c & (l.suspendedLanes | g) ? 0 : c,
            c !== 0 && c !== f.retryLane && (f.retryLane = c,
            nr(e, c),
            On(l, e, c, -1))
        }
        return Xc(),
        l = ja(Error(K(421))),
        Po(e, t, g, l)
    }
    return c.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = ax.bind(null, e),
    c._reactRetry = t,
    null) : (e = f.treeContext,
    sn = Ir(c.nextSibling),
    on = t,
    Ke = !0,
    _n = null,
    e !== null && (pn[xn++] = Qn,
    pn[xn++] = qn,
    pn[xn++] = $r,
    Qn = e.id,
    qn = e.overflow,
    $r = t),
    t = Vc(t, l.children),
    t.flags |= 4096,
    t)
}
function v0(e, t, i) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t),
    _u(e.return, t, i)
}
function Wa(e, t, i, l, c) {
    var f = e.memoizedState;
    f === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: l,
        tail: i,
        tailMode: c
    } : (f.isBackwards = t,
    f.rendering = null,
    f.renderingStartTime = 0,
    f.last = l,
    f.tail = i,
    f.tailMode = c)
}
function lh(e, t, i) {
    var l = t.pendingProps
      , c = l.revealOrder
      , f = l.tail;
    if (Ut(e, t, l.children, i),
    l = Je.current,
    l & 2)
        l = l & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && v0(e, i, t);
                else if (e.tag === 19)
                    v0(e, i, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        l &= 1
    }
    if (He(Je, l),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (c) {
        case "forwards":
            for (i = t.child,
            c = null; i !== null; )
                e = i.alternate,
                e !== null && pl(e) === null && (c = i),
                i = i.sibling;
            i = c,
            i === null ? (c = t.child,
            t.child = null) : (c = i.sibling,
            i.sibling = null),
            Wa(t, !1, c, i, f);
            break;
        case "backwards":
            for (i = null,
            c = t.child,
            t.child = null; c !== null; ) {
                if (e = c.alternate,
                e !== null && pl(e) === null) {
                    t.child = c;
                    break
                }
                e = c.sibling,
                c.sibling = i,
                i = c,
                c = e
            }
            Wa(t, !0, i, null, f);
            break;
        case "together":
            Wa(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Yo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function rr(e, t, i) {
    if (e !== null && (t.dependencies = e.dependencies),
    ti |= t.lanes,
    !(i & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(K(153));
    if (t.child !== null) {
        for (e = t.child,
        i = Rr(e, e.pendingProps),
        t.child = i,
        i.return = t; e.sibling !== null; )
            e = e.sibling,
            i = i.sibling = Rr(e, e.pendingProps),
            i.return = t;
        i.sibling = null
    }
    return t.child
}
function Qp(e, t, i) {
    switch (t.tag) {
    case 3:
        sh(t),
        zi();
        break;
    case 5:
        Md(t);
        break;
    case 1:
        Jt(t.type) && ul(t);
        break;
    case 4:
        Dc(t, t.stateNode.containerInfo);
        break;
    case 10:
        var l = t.type._context
          , c = t.memoizedProps.value;
        He(dl, l._currentValue),
        l._currentValue = c;
        break;
    case 13:
        if (l = t.memoizedState,
        l !== null)
            return l.dehydrated !== null ? (He(Je, Je.current & 1),
            t.flags |= 128,
            null) : i & t.child.childLanes ? oh(e, t, i) : (He(Je, Je.current & 1),
            e = rr(e, t, i),
            e !== null ? e.sibling : null);
        He(Je, Je.current & 1);
        break;
    case 19:
        if (l = (i & t.childLanes) !== 0,
        e.flags & 128) {
            if (l)
                return lh(e, t, i);
            t.flags |= 128
        }
        if (c = t.memoizedState,
        c !== null && (c.rendering = null,
        c.tail = null,
        c.lastEffect = null),
        He(Je, Je.current),
        l)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        rh(e, t, i)
    }
    return rr(e, t, i)
}
var ah, Bu, uh, ch;
ah = function(e, t) {
    for (var i = t.child; i !== null; ) {
        if (i.tag === 5 || i.tag === 6)
            e.appendChild(i.stateNode);
        else if (i.tag !== 4 && i.child !== null) {
            i.child.return = i,
            i = i.child;
            continue
        }
        if (i === t)
            break;
        for (; i.sibling === null; ) {
            if (i.return === null || i.return === t)
                return;
            i = i.return
        }
        i.sibling.return = i.return,
        i = i.sibling
    }
}
;
Bu = function() {}
;
uh = function(e, t, i, l) {
    var c = e.memoizedProps;
    if (c !== l) {
        e = t.stateNode,
        Zr(Gn.current);
        var f = null;
        switch (i) {
        case "input":
            c = iu(e, c),
            l = iu(e, l),
            f = [];
            break;
        case "select":
            c = et({}, c, {
                value: void 0
            }),
            l = et({}, l, {
                value: void 0
            }),
            f = [];
            break;
        case "textarea":
            c = lu(e, c),
            l = lu(e, l),
            f = [];
            break;
        default:
            typeof c.onClick != "function" && typeof l.onClick == "function" && (e.onclick = ll)
        }
        uu(i, l);
        var g;
        i = null;
        for (x in c)
            if (!l.hasOwnProperty(x) && c.hasOwnProperty(x) && c[x] != null)
                if (x === "style") {
                    var m = c[x];
                    for (g in m)
                        m.hasOwnProperty(g) && (i || (i = {}),
                        i[g] = "")
                } else
                    x !== "dangerouslySetInnerHTML" && x !== "children" && x !== "suppressContentEditableWarning" && x !== "suppressHydrationWarning" && x !== "autoFocus" && (Ms.hasOwnProperty(x) ? f || (f = []) : (f = f || []).push(x, null));
        for (x in l) {
            var y = l[x];
            if (m = c != null ? c[x] : void 0,
            l.hasOwnProperty(x) && y !== m && (y != null || m != null))
                if (x === "style")
                    if (m) {
                        for (g in m)
                            !m.hasOwnProperty(g) || y && y.hasOwnProperty(g) || (i || (i = {}),
                            i[g] = "");
                        for (g in y)
                            y.hasOwnProperty(g) && m[g] !== y[g] && (i || (i = {}),
                            i[g] = y[g])
                    } else
                        i || (f || (f = []),
                        f.push(x, i)),
                        i = y;
                else
                    x === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0,
                    m = m ? m.__html : void 0,
                    y != null && m !== y && (f = f || []).push(x, y)) : x === "children" ? typeof y != "string" && typeof y != "number" || (f = f || []).push(x, "" + y) : x !== "suppressContentEditableWarning" && x !== "suppressHydrationWarning" && (Ms.hasOwnProperty(x) ? (y != null && x === "onScroll" && We("scroll", e),
                    f || m === y || (f = [])) : (f = f || []).push(x, y))
        }
        i && (f = f || []).push("style", i);
        var x = f;
        (t.updateQueue = x) && (t.flags |= 4)
    }
}
;
ch = function(e, t, i, l) {
    i !== l && (t.flags |= 4)
}
;
function ms(e, t) {
    if (!Ke)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var i = null; t !== null; )
                t.alternate !== null && (i = t),
                t = t.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
        case "collapsed":
            i = e.tail;
            for (var l = null; i !== null; )
                i.alternate !== null && (l = i),
                i = i.sibling;
            l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null
        }
}
function kt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , i = 0
      , l = 0;
    if (t)
        for (var c = e.child; c !== null; )
            i |= c.lanes | c.childLanes,
            l |= c.subtreeFlags & 14680064,
            l |= c.flags & 14680064,
            c.return = e,
            c = c.sibling;
    else
        for (c = e.child; c !== null; )
            i |= c.lanes | c.childLanes,
            l |= c.subtreeFlags,
            l |= c.flags,
            c.return = e,
            c = c.sibling;
    return e.subtreeFlags |= l,
    e.childLanes = i,
    t
}
function qp(e, t, i) {
    var l = t.pendingProps;
    switch (Ic(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return kt(t),
        null;
    case 1:
        return Jt(t.type) && al(),
        kt(t),
        null;
    case 3:
        return l = t.stateNode,
        ji(),
        Xe(qt),
        Xe(Bt),
        kc(),
        l.pendingContext && (l.context = l.pendingContext,
        l.pendingContext = null),
        (e === null || e.child === null) && (Mo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        _n !== null && (Wu(_n),
        _n = null))),
        Bu(e, t),
        kt(t),
        null;
    case 5:
        Mc(t);
        var c = Zr(Gs.current);
        if (i = t.type,
        e !== null && t.stateNode != null)
            uh(e, t, i, l, c),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!l) {
                if (t.stateNode === null)
                    throw Error(K(166));
                return kt(t),
                null
            }
            if (e = Zr(Gn.current),
            Mo(t)) {
                l = t.stateNode,
                i = t.type;
                var f = t.memoizedProps;
                switch (l[jn] = t,
                l[js] = f,
                e = (t.mode & 1) !== 0,
                i) {
                case "dialog":
                    We("cancel", l),
                    We("close", l);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    We("load", l);
                    break;
                case "video":
                case "audio":
                    for (c = 0; c < Ss.length; c++)
                        We(Ss[c], l);
                    break;
                case "source":
                    We("error", l);
                    break;
                case "img":
                case "image":
                case "link":
                    We("error", l),
                    We("load", l);
                    break;
                case "details":
                    We("toggle", l);
                    break;
                case "input":
                    M1(l, f),
                    We("invalid", l);
                    break;
                case "select":
                    l._wrapperState = {
                        wasMultiple: !!f.multiple
                    },
                    We("invalid", l);
                    break;
                case "textarea":
                    P1(l, f),
                    We("invalid", l)
                }
                uu(i, f),
                c = null;
                for (var g in f)
                    if (f.hasOwnProperty(g)) {
                        var m = f[g];
                        g === "children" ? typeof m == "string" ? l.textContent !== m && (f.suppressHydrationWarning !== !0 && Do(l.textContent, m, e),
                        c = ["children", m]) : typeof m == "number" && l.textContent !== "" + m && (f.suppressHydrationWarning !== !0 && Do(l.textContent, m, e),
                        c = ["children", "" + m]) : Ms.hasOwnProperty(g) && m != null && g === "onScroll" && We("scroll", l)
                    }
                switch (i) {
                case "input":
                    vo(l),
                    k1(l, f, !0);
                    break;
                case "textarea":
                    vo(l),
                    B1(l);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof f.onClick == "function" && (l.onclick = ll)
                }
                l = c,
                t.updateQueue = l,
                l !== null && (t.flags |= 4)
            } else {
                g = c.nodeType === 9 ? c : c.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Ff(i)),
                e === "http://www.w3.org/1999/xhtml" ? i === "script" ? (e = g.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof l.is == "string" ? e = g.createElement(i, {
                    is: l.is
                }) : (e = g.createElement(i),
                i === "select" && (g = e,
                l.multiple ? g.multiple = !0 : l.size && (g.size = l.size))) : e = g.createElementNS(e, i),
                e[jn] = t,
                e[js] = l,
                ah(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (g = cu(i, l),
                    i) {
                    case "dialog":
                        We("cancel", e),
                        We("close", e),
                        c = l;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        We("load", e),
                        c = l;
                        break;
                    case "video":
                    case "audio":
                        for (c = 0; c < Ss.length; c++)
                            We(Ss[c], e);
                        c = l;
                        break;
                    case "source":
                        We("error", e),
                        c = l;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        We("error", e),
                        We("load", e),
                        c = l;
                        break;
                    case "details":
                        We("toggle", e),
                        c = l;
                        break;
                    case "input":
                        M1(e, l),
                        c = iu(e, l),
                        We("invalid", e);
                        break;
                    case "option":
                        c = l;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!l.multiple
                        },
                        c = et({}, l, {
                            value: void 0
                        }),
                        We("invalid", e);
                        break;
                    case "textarea":
                        P1(e, l),
                        c = lu(e, l),
                        We("invalid", e);
                        break;
                    default:
                        c = l
                    }
                    uu(i, c),
                    m = c;
                    for (f in m)
                        if (m.hasOwnProperty(f)) {
                            var y = m[f];
                            f === "style" ? zf(e, y) : f === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0,
                            y != null && Uf(e, y)) : f === "children" ? typeof y == "string" ? (i !== "textarea" || y !== "") && ks(e, y) : typeof y == "number" && ks(e, "" + y) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (Ms.hasOwnProperty(f) ? y != null && f === "onScroll" && We("scroll", e) : y != null && cc(e, f, y, g))
                        }
                    switch (i) {
                    case "input":
                        vo(e),
                        k1(e, l, !1);
                        break;
                    case "textarea":
                        vo(e),
                        B1(e);
                        break;
                    case "option":
                        l.value != null && e.setAttribute("value", "" + br(l.value));
                        break;
                    case "select":
                        e.multiple = !!l.multiple,
                        f = l.value,
                        f != null ? Mi(e, !!l.multiple, f, !1) : l.defaultValue != null && Mi(e, !!l.multiple, l.defaultValue, !0);
                        break;
                    default:
                        typeof c.onClick == "function" && (e.onclick = ll)
                    }
                    switch (i) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        l = !!l.autoFocus;
                        break e;
                    case "img":
                        l = !0;
                        break e;
                    default:
                        l = !1
                    }
                }
                l && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return kt(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            ch(e, t, e.memoizedProps, l);
        else {
            if (typeof l != "string" && t.stateNode === null)
                throw Error(K(166));
            if (i = Zr(Gs.current),
            Zr(Gn.current),
            Mo(t)) {
                if (l = t.stateNode,
                i = t.memoizedProps,
                l[jn] = t,
                (f = l.nodeValue !== i) && (e = on,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Do(l.nodeValue, i, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Do(l.nodeValue, i, (e.mode & 1) !== 0)
                    }
                f && (t.flags |= 4)
            } else
                l = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(l),
                l[jn] = t,
                t.stateNode = l
        }
        return kt(t),
        null;
    case 13:
        if (Xe(Je),
        l = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (Ke && sn !== null && t.mode & 1 && !(t.flags & 128))
                _d(),
                zi(),
                t.flags |= 98560,
                f = !1;
            else if (f = Mo(t),
            l !== null && l.dehydrated !== null) {
                if (e === null) {
                    if (!f)
                        throw Error(K(318));
                    if (f = t.memoizedState,
                    f = f !== null ? f.dehydrated : null,
                    !f)
                        throw Error(K(317));
                    f[jn] = t
                } else
                    zi(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                kt(t),
                f = !1
            } else
                _n !== null && (Wu(_n),
                _n = null),
                f = !0;
            if (!f)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = i,
        t) : (l = l !== null,
        l !== (e !== null && e.memoizedState !== null) && l && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || Je.current & 1 ? wt === 0 && (wt = 3) : Xc())),
        t.updateQueue !== null && (t.flags |= 4),
        kt(t),
        null);
    case 4:
        return ji(),
        Bu(e, t),
        e === null && zs(t.stateNode.containerInfo),
        kt(t),
        null;
    case 10:
        return Rc(t.type._context),
        kt(t),
        null;
    case 17:
        return Jt(t.type) && al(),
        kt(t),
        null;
    case 19:
        if (Xe(Je),
        f = t.memoizedState,
        f === null)
            return kt(t),
            null;
        if (l = (t.flags & 128) !== 0,
        g = f.rendering,
        g === null)
            if (l)
                ms(f, !1);
            else {
                if (wt !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (g = pl(e),
                        g !== null) {
                            for (t.flags |= 128,
                            ms(f, !1),
                            l = g.updateQueue,
                            l !== null && (t.updateQueue = l,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            l = i,
                            i = t.child; i !== null; )
                                f = i,
                                e = l,
                                f.flags &= 14680066,
                                g = f.alternate,
                                g === null ? (f.childLanes = 0,
                                f.lanes = e,
                                f.child = null,
                                f.subtreeFlags = 0,
                                f.memoizedProps = null,
                                f.memoizedState = null,
                                f.updateQueue = null,
                                f.dependencies = null,
                                f.stateNode = null) : (f.childLanes = g.childLanes,
                                f.lanes = g.lanes,
                                f.child = g.child,
                                f.subtreeFlags = 0,
                                f.deletions = null,
                                f.memoizedProps = g.memoizedProps,
                                f.memoizedState = g.memoizedState,
                                f.updateQueue = g.updateQueue,
                                f.type = g.type,
                                e = g.dependencies,
                                f.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                i = i.sibling;
                            return He(Je, Je.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                f.tail !== null && ut() > Gi && (t.flags |= 128,
                l = !0,
                ms(f, !1),
                t.lanes = 4194304)
            }
        else {
            if (!l)
                if (e = pl(g),
                e !== null) {
                    if (t.flags |= 128,
                    l = !0,
                    i = e.updateQueue,
                    i !== null && (t.updateQueue = i,
                    t.flags |= 4),
                    ms(f, !0),
                    f.tail === null && f.tailMode === "hidden" && !g.alternate && !Ke)
                        return kt(t),
                        null
                } else
                    2 * ut() - f.renderingStartTime > Gi && i !== 1073741824 && (t.flags |= 128,
                    l = !0,
                    ms(f, !1),
                    t.lanes = 4194304);
            f.isBackwards ? (g.sibling = t.child,
            t.child = g) : (i = f.last,
            i !== null ? i.sibling = g : t.child = g,
            f.last = g)
        }
        return f.tail !== null ? (t = f.tail,
        f.rendering = t,
        f.tail = t.sibling,
        f.renderingStartTime = ut(),
        t.sibling = null,
        i = Je.current,
        He(Je, l ? i & 1 | 2 : i & 1),
        t) : (kt(t),
        null);
    case 22:
    case 23:
        return Gc(),
        l = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== l && (t.flags |= 8192),
        l && t.mode & 1 ? rn & 1073741824 && (kt(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : kt(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(K(156, t.tag))
}
function Jp(e, t) {
    switch (Ic(t),
    t.tag) {
    case 1:
        return Jt(t.type) && al(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return ji(),
        Xe(qt),
        Xe(Bt),
        kc(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Mc(t),
        null;
    case 13:
        if (Xe(Je),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(K(340));
            zi()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return Xe(Je),
        null;
    case 4:
        return ji(),
        null;
    case 10:
        return Rc(t.type._context),
        null;
    case 22:
    case 23:
        return Gc(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Bo = !1
  , Pt = !1
  , $p = typeof WeakSet == "function" ? WeakSet : Set
  , oe = null;
function Ri(e, t) {
    var i = e.ref;
    if (i !== null)
        if (typeof i == "function")
            try {
                i(null)
            } catch (l) {
                ot(e, t, l)
            }
        else
            i.current = null
}
function Lu(e, t, i) {
    try {
        i()
    } catch (l) {
        ot(e, t, l)
    }
}
var I0 = !1;
function ex(e, t) {
    if (Eu = il,
    e = pd(),
    Sc(e)) {
        if ("selectionStart"in e)
            var i = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                i = (i = e.ownerDocument) && i.defaultView || window;
                var l = i.getSelection && i.getSelection();
                if (l && l.rangeCount !== 0) {
                    i = l.anchorNode;
                    var c = l.anchorOffset
                      , f = l.focusNode;
                    l = l.focusOffset;
                    try {
                        i.nodeType,
                        f.nodeType
                    } catch {
                        i = null;
                        break e
                    }
                    var g = 0
                      , m = -1
                      , y = -1
                      , x = 0
                      , S = 0
                      , v = e
                      , D = null;
                    t: for (; ; ) {
                        for (var B; v !== i || c !== 0 && v.nodeType !== 3 || (m = g + c),
                        v !== f || l !== 0 && v.nodeType !== 3 || (y = g + l),
                        v.nodeType === 3 && (g += v.nodeValue.length),
                        (B = v.firstChild) !== null; )
                            D = v,
                            v = B;
                        for (; ; ) {
                            if (v === e)
                                break t;
                            if (D === i && ++x === c && (m = g),
                            D === f && ++S === l && (y = g),
                            (B = v.nextSibling) !== null)
                                break;
                            v = D,
                            D = v.parentNode
                        }
                        v = B
                    }
                    i = m === -1 || y === -1 ? null : {
                        start: m,
                        end: y
                    }
                } else
                    i = null
            }
        i = i || {
            start: 0,
            end: 0
        }
    } else
        i = null;
    for (Cu = {
        focusedElem: e,
        selectionRange: i
    },
    il = !1,
    oe = t; oe !== null; )
        if (t = oe,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            oe = e;
        else
            for (; oe !== null; ) {
                t = oe;
                try {
                    var k = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (k !== null) {
                                var M = k.memoizedProps
                                  , X = k.memoizedState
                                  , O = t.stateNode
                                  , _ = O.getSnapshotBeforeUpdate(t.elementType === t.type ? M : Tn(t.type, M), X);
                                O.__reactInternalSnapshotBeforeUpdate = _
                            }
                            break;
                        case 3:
                            var N = t.stateNode.containerInfo;
                            N.nodeType === 1 ? N.textContent = "" : N.nodeType === 9 && N.documentElement && N.removeChild(N.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(K(163))
                        }
                } catch (V) {
                    ot(t, t.return, V)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    oe = e;
                    break
                }
                oe = t.return
            }
    return k = I0,
    I0 = !1,
    k
}
function Os(e, t, i) {
    var l = t.updateQueue;
    if (l = l !== null ? l.lastEffect : null,
    l !== null) {
        var c = l = l.next;
        do {
            if ((c.tag & e) === e) {
                var f = c.destroy;
                c.destroy = void 0,
                f !== void 0 && Lu(t, i, f)
            }
            c = c.next
        } while (c !== l)
    }
}
function zl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var i = t = t.next;
        do {
            if ((i.tag & e) === e) {
                var l = i.create;
                i.destroy = l()
            }
            i = i.next
        } while (i !== t)
    }
}
function Fu(e) {
    var t = e.ref;
    if (t !== null) {
        var i = e.stateNode;
        switch (e.tag) {
        case 5:
            e = i;
            break;
        default:
            e = i
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function fh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    fh(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[jn],
    delete t[js],
    delete t[vu],
    delete t[Bp],
    delete t[Lp])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function dh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function T0(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || dh(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Uu(e, t, i) {
    var l = e.tag;
    if (l === 5 || l === 6)
        e = e.stateNode,
        t ? i.nodeType === 8 ? i.parentNode.insertBefore(e, t) : i.insertBefore(e, t) : (i.nodeType === 8 ? (t = i.parentNode,
        t.insertBefore(e, i)) : (t = i,
        t.appendChild(e)),
        i = i._reactRootContainer,
        i != null || t.onclick !== null || (t.onclick = ll));
    else if (l !== 4 && (e = e.child,
    e !== null))
        for (Uu(e, t, i),
        e = e.sibling; e !== null; )
            Uu(e, t, i),
            e = e.sibling
}
function Vu(e, t, i) {
    var l = e.tag;
    if (l === 5 || l === 6)
        e = e.stateNode,
        t ? i.insertBefore(e, t) : i.appendChild(e);
    else if (l !== 4 && (e = e.child,
    e !== null))
        for (Vu(e, t, i),
        e = e.sibling; e !== null; )
            Vu(e, t, i),
            e = e.sibling
}
var _t = null
  , Nn = !1;
function hr(e, t, i) {
    for (i = i.child; i !== null; )
        hh(e, t, i),
        i = i.sibling
}
function hh(e, t, i) {
    if (Wn && typeof Wn.onCommitFiberUnmount == "function")
        try {
            Wn.onCommitFiberUnmount(Ml, i)
        } catch {}
    switch (i.tag) {
    case 5:
        Pt || Ri(i, t);
    case 6:
        var l = _t
          , c = Nn;
        _t = null,
        hr(e, t, i),
        _t = l,
        Nn = c,
        _t !== null && (Nn ? (e = _t,
        i = i.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i)) : _t.removeChild(i.stateNode));
        break;
    case 18:
        _t !== null && (Nn ? (e = _t,
        i = i.stateNode,
        e.nodeType === 8 ? La(e.parentNode, i) : e.nodeType === 1 && La(e, i),
        Fs(e)) : La(_t, i.stateNode));
        break;
    case 4:
        l = _t,
        c = Nn,
        _t = i.stateNode.containerInfo,
        Nn = !0,
        hr(e, t, i),
        _t = l,
        Nn = c;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Pt && (l = i.updateQueue,
        l !== null && (l = l.lastEffect,
        l !== null))) {
            c = l = l.next;
            do {
                var f = c
                  , g = f.destroy;
                f = f.tag,
                g !== void 0 && (f & 2 || f & 4) && Lu(i, t, g),
                c = c.next
            } while (c !== l)
        }
        hr(e, t, i);
        break;
    case 1:
        if (!Pt && (Ri(i, t),
        l = i.stateNode,
        typeof l.componentWillUnmount == "function"))
            try {
                l.props = i.memoizedProps,
                l.state = i.memoizedState,
                l.componentWillUnmount()
            } catch (m) {
                ot(i, t, m)
            }
        hr(e, t, i);
        break;
    case 21:
        hr(e, t, i);
        break;
    case 22:
        i.mode & 1 ? (Pt = (l = Pt) || i.memoizedState !== null,
        hr(e, t, i),
        Pt = l) : hr(e, t, i);
        break;
    default:
        hr(e, t, i)
    }
}
function N0(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var i = e.stateNode;
        i === null && (i = e.stateNode = new $p),
        t.forEach(function(l) {
            var c = ux.bind(null, e, l);
            i.has(l) || (i.add(l),
            l.then(c, c))
        })
    }
}
function In(e, t) {
    var i = t.deletions;
    if (i !== null)
        for (var l = 0; l < i.length; l++) {
            var c = i[l];
            try {
                var f = e
                  , g = t
                  , m = g;
                e: for (; m !== null; ) {
                    switch (m.tag) {
                    case 5:
                        _t = m.stateNode,
                        Nn = !1;
                        break e;
                    case 3:
                        _t = m.stateNode.containerInfo,
                        Nn = !0;
                        break e;
                    case 4:
                        _t = m.stateNode.containerInfo,
                        Nn = !0;
                        break e
                    }
                    m = m.return
                }
                if (_t === null)
                    throw Error(K(160));
                hh(f, g, c),
                _t = null,
                Nn = !1;
                var y = c.alternate;
                y !== null && (y.return = null),
                c.return = null
            } catch (x) {
                ot(c, t, x)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            gh(t, e),
            t = t.sibling
}
function gh(e, t) {
    var i = e.alternate
      , l = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (In(t, e),
        zn(e),
        l & 4) {
            try {
                Os(3, e, e.return),
                zl(3, e)
            } catch (M) {
                ot(e, e.return, M)
            }
            try {
                Os(5, e, e.return)
            } catch (M) {
                ot(e, e.return, M)
            }
        }
        break;
    case 1:
        In(t, e),
        zn(e),
        l & 512 && i !== null && Ri(i, i.return);
        break;
    case 5:
        if (In(t, e),
        zn(e),
        l & 512 && i !== null && Ri(i, i.return),
        e.flags & 32) {
            var c = e.stateNode;
            try {
                ks(c, "")
            } catch (M) {
                ot(e, e.return, M)
            }
        }
        if (l & 4 && (c = e.stateNode,
        c != null)) {
            var f = e.memoizedProps
              , g = i !== null ? i.memoizedProps : f
              , m = e.type
              , y = e.updateQueue;
            if (e.updateQueue = null,
            y !== null)
                try {
                    m === "input" && f.type === "radio" && f.name != null && Bf(c, f),
                    cu(m, g);
                    var x = cu(m, f);
                    for (g = 0; g < y.length; g += 2) {
                        var S = y[g]
                          , v = y[g + 1];
                        S === "style" ? zf(c, v) : S === "dangerouslySetInnerHTML" ? Uf(c, v) : S === "children" ? ks(c, v) : cc(c, S, v, x)
                    }
                    switch (m) {
                    case "input":
                        su(c, f);
                        break;
                    case "textarea":
                        Lf(c, f);
                        break;
                    case "select":
                        var D = c._wrapperState.wasMultiple;
                        c._wrapperState.wasMultiple = !!f.multiple;
                        var B = f.value;
                        B != null ? Mi(c, !!f.multiple, B, !1) : D !== !!f.multiple && (f.defaultValue != null ? Mi(c, !!f.multiple, f.defaultValue, !0) : Mi(c, !!f.multiple, f.multiple ? [] : "", !1))
                    }
                    c[js] = f
                } catch (M) {
                    ot(e, e.return, M)
                }
        }
        break;
    case 6:
        if (In(t, e),
        zn(e),
        l & 4) {
            if (e.stateNode === null)
                throw Error(K(162));
            c = e.stateNode,
            f = e.memoizedProps;
            try {
                c.nodeValue = f
            } catch (M) {
                ot(e, e.return, M)
            }
        }
        break;
    case 3:
        if (In(t, e),
        zn(e),
        l & 4 && i !== null && i.memoizedState.isDehydrated)
            try {
                Fs(t.containerInfo)
            } catch (M) {
                ot(e, e.return, M)
            }
        break;
    case 4:
        In(t, e),
        zn(e);
        break;
    case 13:
        In(t, e),
        zn(e),
        c = e.child,
        c.flags & 8192 && (f = c.memoizedState !== null,
        c.stateNode.isHidden = f,
        !f || c.alternate !== null && c.alternate.memoizedState !== null || (jc = ut())),
        l & 4 && N0(e);
        break;
    case 22:
        if (S = i !== null && i.memoizedState !== null,
        e.mode & 1 ? (Pt = (x = Pt) || S,
        In(t, e),
        Pt = x) : In(t, e),
        zn(e),
        l & 8192) {
            if (x = e.memoizedState !== null,
            (e.stateNode.isHidden = x) && !S && e.mode & 1)
                for (oe = e,
                S = e.child; S !== null; ) {
                    for (v = oe = S; oe !== null; ) {
                        switch (D = oe,
                        B = D.child,
                        D.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Os(4, D, D.return);
                            break;
                        case 1:
                            Ri(D, D.return);
                            var k = D.stateNode;
                            if (typeof k.componentWillUnmount == "function") {
                                l = D,
                                i = D.return;
                                try {
                                    t = l,
                                    k.props = t.memoizedProps,
                                    k.state = t.memoizedState,
                                    k.componentWillUnmount()
                                } catch (M) {
                                    ot(l, i, M)
                                }
                            }
                            break;
                        case 5:
                            Ri(D, D.return);
                            break;
                        case 22:
                            if (D.memoizedState !== null) {
                                R0(v);
                                continue
                            }
                        }
                        B !== null ? (B.return = D,
                        oe = B) : R0(v)
                    }
                    S = S.sibling
                }
            e: for (S = null,
            v = e; ; ) {
                if (v.tag === 5) {
                    if (S === null) {
                        S = v;
                        try {
                            c = v.stateNode,
                            x ? (f = c.style,
                            typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none") : (m = v.stateNode,
                            y = v.memoizedProps.style,
                            g = y != null && y.hasOwnProperty("display") ? y.display : null,
                            m.style.display = Vf("display", g))
                        } catch (M) {
                            ot(e, e.return, M)
                        }
                    }
                } else if (v.tag === 6) {
                    if (S === null)
                        try {
                            v.stateNode.nodeValue = x ? "" : v.memoizedProps
                        } catch (M) {
                            ot(e, e.return, M)
                        }
                } else if ((v.tag !== 22 && v.tag !== 23 || v.memoizedState === null || v === e) && v.child !== null) {
                    v.child.return = v,
                    v = v.child;
                    continue
                }
                if (v === e)
                    break e;
                for (; v.sibling === null; ) {
                    if (v.return === null || v.return === e)
                        break e;
                    S === v && (S = null),
                    v = v.return
                }
                S === v && (S = null),
                v.sibling.return = v.return,
                v = v.sibling
            }
        }
        break;
    case 19:
        In(t, e),
        zn(e),
        l & 4 && N0(e);
        break;
    case 21:
        break;
    default:
        In(t, e),
        zn(e)
    }
}
function zn(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var i = e.return; i !== null; ) {
                    if (dh(i)) {
                        var l = i;
                        break e
                    }
                    i = i.return
                }
                throw Error(K(160))
            }
            switch (l.tag) {
            case 5:
                var c = l.stateNode;
                l.flags & 32 && (ks(c, ""),
                l.flags &= -33);
                var f = T0(e);
                Vu(e, f, c);
                break;
            case 3:
            case 4:
                var g = l.stateNode.containerInfo
                  , m = T0(e);
                Uu(e, m, g);
                break;
            default:
                throw Error(K(161))
            }
        } catch (y) {
            ot(e, e.return, y)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function tx(e, t, i) {
    oe = e,
    ph(e)
}
function ph(e, t, i) {
    for (var l = (e.mode & 1) !== 0; oe !== null; ) {
        var c = oe
          , f = c.child;
        if (c.tag === 22 && l) {
            var g = c.memoizedState !== null || Bo;
            if (!g) {
                var m = c.alternate
                  , y = m !== null && m.memoizedState !== null || Pt;
                m = Bo;
                var x = Pt;
                if (Bo = g,
                (Pt = y) && !x)
                    for (oe = c; oe !== null; )
                        g = oe,
                        y = g.child,
                        g.tag === 22 && g.memoizedState !== null ? O0(c) : y !== null ? (y.return = g,
                        oe = y) : O0(c);
                for (; f !== null; )
                    oe = f,
                    ph(f),
                    f = f.sibling;
                oe = c,
                Bo = m,
                Pt = x
            }
            _0(e)
        } else
            c.subtreeFlags & 8772 && f !== null ? (f.return = c,
            oe = f) : _0(e)
    }
}
function _0(e) {
    for (; oe !== null; ) {
        var t = oe;
        if (t.flags & 8772) {
            var i = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Pt || zl(5, t);
                        break;
                    case 1:
                        var l = t.stateNode;
                        if (t.flags & 4 && !Pt)
                            if (i === null)
                                l.componentDidMount();
                            else {
                                var c = t.elementType === t.type ? i.memoizedProps : Tn(t.type, i.memoizedProps);
                                l.componentDidUpdate(c, i.memoizedState, l.__reactInternalSnapshotBeforeUpdate)
                            }
                        var f = t.updateQueue;
                        f !== null && d0(t, f, l);
                        break;
                    case 3:
                        var g = t.updateQueue;
                        if (g !== null) {
                            if (i = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    i = t.child.stateNode;
                                    break;
                                case 1:
                                    i = t.child.stateNode
                                }
                            d0(t, g, i)
                        }
                        break;
                    case 5:
                        var m = t.stateNode;
                        if (i === null && t.flags & 4) {
                            i = m;
                            var y = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                y.autoFocus && i.focus();
                                break;
                            case "img":
                                y.src && (i.src = y.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var x = t.alternate;
                            if (x !== null) {
                                var S = x.memoizedState;
                                if (S !== null) {
                                    var v = S.dehydrated;
                                    v !== null && Fs(v)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(K(163))
                    }
                Pt || t.flags & 512 && Fu(t)
            } catch (D) {
                ot(t, t.return, D)
            }
        }
        if (t === e) {
            oe = null;
            break
        }
        if (i = t.sibling,
        i !== null) {
            i.return = t.return,
            oe = i;
            break
        }
        oe = t.return
    }
}
function R0(e) {
    for (; oe !== null; ) {
        var t = oe;
        if (t === e) {
            oe = null;
            break
        }
        var i = t.sibling;
        if (i !== null) {
            i.return = t.return,
            oe = i;
            break
        }
        oe = t.return
    }
}
function O0(e) {
    for (; oe !== null; ) {
        var t = oe;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var i = t.return;
                try {
                    zl(4, t)
                } catch (y) {
                    ot(t, i, y)
                }
                break;
            case 1:
                var l = t.stateNode;
                if (typeof l.componentDidMount == "function") {
                    var c = t.return;
                    try {
                        l.componentDidMount()
                    } catch (y) {
                        ot(t, c, y)
                    }
                }
                var f = t.return;
                try {
                    Fu(t)
                } catch (y) {
                    ot(t, f, y)
                }
                break;
            case 5:
                var g = t.return;
                try {
                    Fu(t)
                } catch (y) {
                    ot(t, g, y)
                }
            }
        } catch (y) {
            ot(t, t.return, y)
        }
        if (t === e) {
            oe = null;
            break
        }
        var m = t.sibling;
        if (m !== null) {
            m.return = t.return,
            oe = m;
            break
        }
        oe = t.return
    }
}
var nx = Math.ceil
  , wl = ir.ReactCurrentDispatcher
  , zc = ir.ReactCurrentOwner
  , wn = ir.ReactCurrentBatchConfig
  , Re = 0
  , St = null
  , dt = null
  , Rt = 0
  , rn = 0
  , Oi = kr(0)
  , wt = 0
  , Ks = null
  , ti = 0
  , Hl = 0
  , Hc = 0
  , bs = null
  , Kt = null
  , jc = 0
  , Gi = 1 / 0
  , Zn = null
  , yl = !1
  , zu = null
  , Nr = null
  , Lo = !1
  , Er = null
  , El = 0
  , Ds = 0
  , Hu = null
  , Zo = -1
  , Ko = 0;
function Vt() {
    return Re & 6 ? ut() : Zo !== -1 ? Zo : Zo = ut()
}
function _r(e) {
    return e.mode & 1 ? Re & 2 && Rt !== 0 ? Rt & -Rt : Up.transition !== null ? (Ko === 0 && (Ko = $f()),
    Ko) : (e = ke,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : od(e.type)),
    e) : 1
}
function On(e, t, i, l) {
    if (50 < Ds)
        throw Ds = 0,
        Hu = null,
        Error(K(185));
    eo(e, i, l),
    (!(Re & 2) || e !== St) && (e === St && (!(Re & 2) && (Hl |= i),
    wt === 4 && wr(e, Rt)),
    $t(e, l),
    i === 1 && Re === 0 && !(t.mode & 1) && (Gi = ut() + 500,
    Fl && Pr()))
}
function $t(e, t) {
    var i = e.callbackNode;
    Ug(e, t);
    var l = rl(e, e === St ? Rt : 0);
    if (l === 0)
        i !== null && U1(i),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = l & -l,
    e.callbackPriority !== t) {
        if (i != null && U1(i),
        t === 1)
            e.tag === 0 ? Fp(b0.bind(null, e)) : Id(b0.bind(null, e)),
            kp(function() {
                !(Re & 6) && Pr()
            }),
            i = null;
        else {
            switch (ed(l)) {
            case 1:
                i = pc;
                break;
            case 4:
                i = qf;
                break;
            case 16:
                i = nl;
                break;
            case 536870912:
                i = Jf;
                break;
            default:
                i = nl
            }
            i = Sh(i, xh.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = i
    }
}
function xh(e, t) {
    if (Zo = -1,
    Ko = 0,
    Re & 6)
        throw Error(K(327));
    var i = e.callbackNode;
    if (Fi() && e.callbackNode !== i)
        return null;
    var l = rl(e, e === St ? Rt : 0);
    if (l === 0)
        return null;
    if (l & 30 || l & e.expiredLanes || t)
        t = Cl(e, l);
    else {
        t = l;
        var c = Re;
        Re |= 2;
        var f = wh();
        (St !== e || Rt !== t) && (Zn = null,
        Gi = ut() + 500,
        Kr(e, t));
        do
            try {
                sx();
                break
            } catch (m) {
                mh(e, m)
            }
        while (!0);
        _c(),
        wl.current = f,
        Re = c,
        dt !== null ? t = 0 : (St = null,
        Rt = 0,
        t = wt)
    }
    if (t !== 0) {
        if (t === 2 && (c = pu(e),
        c !== 0 && (l = c,
        t = ju(e, c))),
        t === 1)
            throw i = Ks,
            Kr(e, 0),
            wr(e, l),
            $t(e, ut()),
            i;
        if (t === 6)
            wr(e, l);
        else {
            if (c = e.current.alternate,
            !(l & 30) && !rx(c) && (t = Cl(e, l),
            t === 2 && (f = pu(e),
            f !== 0 && (l = f,
            t = ju(e, f))),
            t === 1))
                throw i = Ks,
                Kr(e, 0),
                wr(e, l),
                $t(e, ut()),
                i;
            switch (e.finishedWork = c,
            e.finishedLanes = l,
            t) {
            case 0:
            case 1:
                throw Error(K(345));
            case 2:
                Gr(e, Kt, Zn);
                break;
            case 3:
                if (wr(e, l),
                (l & 130023424) === l && (t = jc + 500 - ut(),
                10 < t)) {
                    if (rl(e, 0) !== 0)
                        break;
                    if (c = e.suspendedLanes,
                    (c & l) !== l) {
                        Vt(),
                        e.pingedLanes |= e.suspendedLanes & c;
                        break
                    }
                    e.timeoutHandle = Su(Gr.bind(null, e, Kt, Zn), t);
                    break
                }
                Gr(e, Kt, Zn);
                break;
            case 4:
                if (wr(e, l),
                (l & 4194240) === l)
                    break;
                for (t = e.eventTimes,
                c = -1; 0 < l; ) {
                    var g = 31 - Rn(l);
                    f = 1 << g,
                    g = t[g],
                    g > c && (c = g),
                    l &= ~f
                }
                if (l = c,
                l = ut() - l,
                l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * nx(l / 1960)) - l,
                10 < l) {
                    e.timeoutHandle = Su(Gr.bind(null, e, Kt, Zn), l);
                    break
                }
                Gr(e, Kt, Zn);
                break;
            case 5:
                Gr(e, Kt, Zn);
                break;
            default:
                throw Error(K(329))
            }
        }
    }
    return $t(e, ut()),
    e.callbackNode === i ? xh.bind(null, e) : null
}
function ju(e, t) {
    var i = bs;
    return e.current.memoizedState.isDehydrated && (Kr(e, t).flags |= 256),
    e = Cl(e, t),
    e !== 2 && (t = Kt,
    Kt = i,
    t !== null && Wu(t)),
    e
}
function Wu(e) {
    Kt === null ? Kt = e : Kt.push.apply(Kt, e)
}
function rx(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var i = t.updateQueue;
            if (i !== null && (i = i.stores,
            i !== null))
                for (var l = 0; l < i.length; l++) {
                    var c = i[l]
                      , f = c.getSnapshot;
                    c = c.value;
                    try {
                        if (!Dn(f(), c))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (i = t.child,
        t.subtreeFlags & 16384 && i !== null)
            i.return = t,
            t = i;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function wr(e, t) {
    for (t &= ~Hc,
    t &= ~Hl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var i = 31 - Rn(t)
          , l = 1 << i;
        e[i] = -1,
        t &= ~l
    }
}
function b0(e) {
    if (Re & 6)
        throw Error(K(327));
    Fi();
    var t = rl(e, 0);
    if (!(t & 1))
        return $t(e, ut()),
        null;
    var i = Cl(e, t);
    if (e.tag !== 0 && i === 2) {
        var l = pu(e);
        l !== 0 && (t = l,
        i = ju(e, l))
    }
    if (i === 1)
        throw i = Ks,
        Kr(e, 0),
        wr(e, t),
        $t(e, ut()),
        i;
    if (i === 6)
        throw Error(K(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Gr(e, Kt, Zn),
    $t(e, ut()),
    null
}
function Wc(e, t) {
    var i = Re;
    Re |= 1;
    try {
        return e(t)
    } finally {
        Re = i,
        Re === 0 && (Gi = ut() + 500,
        Fl && Pr())
    }
}
function ni(e) {
    Er !== null && Er.tag === 0 && !(Re & 6) && Fi();
    var t = Re;
    Re |= 1;
    var i = wn.transition
      , l = ke;
    try {
        if (wn.transition = null,
        ke = 1,
        e)
            return e()
    } finally {
        ke = l,
        wn.transition = i,
        Re = t,
        !(Re & 6) && Pr()
    }
}
function Gc() {
    rn = Oi.current,
    Xe(Oi)
}
function Kr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var i = e.timeoutHandle;
    if (i !== -1 && (e.timeoutHandle = -1,
    Mp(i)),
    dt !== null)
        for (i = dt.return; i !== null; ) {
            var l = i;
            switch (Ic(l),
            l.tag) {
            case 1:
                l = l.type.childContextTypes,
                l != null && al();
                break;
            case 3:
                ji(),
                Xe(qt),
                Xe(Bt),
                kc();
                break;
            case 5:
                Mc(l);
                break;
            case 4:
                ji();
                break;
            case 13:
                Xe(Je);
                break;
            case 19:
                Xe(Je);
                break;
            case 10:
                Rc(l.type._context);
                break;
            case 22:
            case 23:
                Gc()
            }
            i = i.return
        }
    if (St = e,
    dt = e = Rr(e.current, null),
    Rt = rn = t,
    wt = 0,
    Ks = null,
    Hc = Hl = ti = 0,
    Kt = bs = null,
    Yr !== null) {
        for (t = 0; t < Yr.length; t++)
            if (i = Yr[t],
            l = i.interleaved,
            l !== null) {
                i.interleaved = null;
                var c = l.next
                  , f = i.pending;
                if (f !== null) {
                    var g = f.next;
                    f.next = c,
                    l.next = g
                }
                i.pending = l
            }
        Yr = null
    }
    return e
}
function mh(e, t) {
    do {
        var i = dt;
        try {
            if (_c(),
            Go.current = ml,
            xl) {
                for (var l = $e.memoizedState; l !== null; ) {
                    var c = l.queue;
                    c !== null && (c.pending = null),
                    l = l.next
                }
                xl = !1
            }
            if (ei = 0,
            At = mt = $e = null,
            Rs = !1,
            Xs = 0,
            zc.current = null,
            i === null || i.return === null) {
                wt = 1,
                Ks = t,
                dt = null;
                break
            }
            e: {
                var f = e
                  , g = i.return
                  , m = i
                  , y = t;
                if (t = Rt,
                m.flags |= 32768,
                y !== null && typeof y == "object" && typeof y.then == "function") {
                    var x = y
                      , S = m
                      , v = S.tag;
                    if (!(S.mode & 1) && (v === 0 || v === 11 || v === 15)) {
                        var D = S.alternate;
                        D ? (S.updateQueue = D.updateQueue,
                        S.memoizedState = D.memoizedState,
                        S.lanes = D.lanes) : (S.updateQueue = null,
                        S.memoizedState = null)
                    }
                    var B = w0(g);
                    if (B !== null) {
                        B.flags &= -257,
                        y0(B, g, m, f, t),
                        B.mode & 1 && m0(f, x, t),
                        t = B,
                        y = x;
                        var k = t.updateQueue;
                        if (k === null) {
                            var M = new Set;
                            M.add(y),
                            t.updateQueue = M
                        } else
                            k.add(y);
                        break e
                    } else {
                        if (!(t & 1)) {
                            m0(f, x, t),
                            Xc();
                            break e
                        }
                        y = Error(K(426))
                    }
                } else if (Ke && m.mode & 1) {
                    var X = w0(g);
                    if (X !== null) {
                        !(X.flags & 65536) && (X.flags |= 256),
                        y0(X, g, m, f, t),
                        Tc(Wi(y, m));
                        break e
                    }
                }
                f = y = Wi(y, m),
                wt !== 4 && (wt = 2),
                bs === null ? bs = [f] : bs.push(f),
                f = g;
                do {
                    switch (f.tag) {
                    case 3:
                        f.flags |= 65536,
                        t &= -t,
                        f.lanes |= t;
                        var O = eh(f, y, t);
                        f0(f, O);
                        break e;
                    case 1:
                        m = y;
                        var _ = f.type
                          , N = f.stateNode;
                        if (!(f.flags & 128) && (typeof _.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && (Nr === null || !Nr.has(N)))) {
                            f.flags |= 65536,
                            t &= -t,
                            f.lanes |= t;
                            var V = th(f, m, t);
                            f0(f, V);
                            break e
                        }
                    }
                    f = f.return
                } while (f !== null)
            }
            Eh(i)
        } catch (te) {
            t = te,
            dt === i && i !== null && (dt = i = i.return);
            continue
        }
        break
    } while (!0)
}
function wh() {
    var e = wl.current;
    return wl.current = ml,
    e === null ? ml : e
}
function Xc() {
    (wt === 0 || wt === 3 || wt === 2) && (wt = 4),
    St === null || !(ti & 268435455) && !(Hl & 268435455) || wr(St, Rt)
}
function Cl(e, t) {
    var i = Re;
    Re |= 2;
    var l = wh();
    (St !== e || Rt !== t) && (Zn = null,
    Kr(e, t));
    do
        try {
            ix();
            break
        } catch (c) {
            mh(e, c)
        }
    while (!0);
    if (_c(),
    Re = i,
    wl.current = l,
    dt !== null)
        throw Error(K(261));
    return St = null,
    Rt = 0,
    wt
}
function ix() {
    for (; dt !== null; )
        yh(dt)
}
function sx() {
    for (; dt !== null && !Og(); )
        yh(dt)
}
function yh(e) {
    var t = Ah(e.alternate, e, rn);
    e.memoizedProps = e.pendingProps,
    t === null ? Eh(e) : dt = t,
    zc.current = null
}
function Eh(e) {
    var t = e;
    do {
        var i = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (i = Jp(i, t),
            i !== null) {
                i.flags &= 32767,
                dt = i;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                wt = 6,
                dt = null;
                return
            }
        } else if (i = qp(i, t, rn),
        i !== null) {
            dt = i;
            return
        }
        if (t = t.sibling,
        t !== null) {
            dt = t;
            return
        }
        dt = t = e
    } while (t !== null);
    wt === 0 && (wt = 5)
}
function Gr(e, t, i) {
    var l = ke
      , c = wn.transition;
    try {
        wn.transition = null,
        ke = 1,
        ox(e, t, i, l)
    } finally {
        wn.transition = c,
        ke = l
    }
    return null
}
function ox(e, t, i, l) {
    do
        Fi();
    while (Er !== null);
    if (Re & 6)
        throw Error(K(327));
    i = e.finishedWork;
    var c = e.finishedLanes;
    if (i === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    i === e.current)
        throw Error(K(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var f = i.lanes | i.childLanes;
    if (Vg(e, f),
    e === St && (dt = St = null,
    Rt = 0),
    !(i.subtreeFlags & 2064) && !(i.flags & 2064) || Lo || (Lo = !0,
    Sh(nl, function() {
        return Fi(),
        null
    })),
    f = (i.flags & 15990) !== 0,
    i.subtreeFlags & 15990 || f) {
        f = wn.transition,
        wn.transition = null;
        var g = ke;
        ke = 1;
        var m = Re;
        Re |= 4,
        zc.current = null,
        ex(e, i),
        gh(i, e),
        Tp(Cu),
        il = !!Eu,
        Cu = Eu = null,
        e.current = i,
        tx(i),
        bg(),
        Re = m,
        ke = g,
        wn.transition = f
    } else
        e.current = i;
    if (Lo && (Lo = !1,
    Er = e,
    El = c),
    f = e.pendingLanes,
    f === 0 && (Nr = null),
    kg(i.stateNode),
    $t(e, ut()),
    t !== null)
        for (l = e.onRecoverableError,
        i = 0; i < t.length; i++)
            c = t[i],
            l(c.value, {
                componentStack: c.stack,
                digest: c.digest
            });
    if (yl)
        throw yl = !1,
        e = zu,
        zu = null,
        e;
    return El & 1 && e.tag !== 0 && Fi(),
    f = e.pendingLanes,
    f & 1 ? e === Hu ? Ds++ : (Ds = 0,
    Hu = e) : Ds = 0,
    Pr(),
    null
}
function Fi() {
    if (Er !== null) {
        var e = ed(El)
          , t = wn.transition
          , i = ke;
        try {
            if (wn.transition = null,
            ke = 16 > e ? 16 : e,
            Er === null)
                var l = !1;
            else {
                if (e = Er,
                Er = null,
                El = 0,
                Re & 6)
                    throw Error(K(331));
                var c = Re;
                for (Re |= 4,
                oe = e.current; oe !== null; ) {
                    var f = oe
                      , g = f.child;
                    if (oe.flags & 16) {
                        var m = f.deletions;
                        if (m !== null) {
                            for (var y = 0; y < m.length; y++) {
                                var x = m[y];
                                for (oe = x; oe !== null; ) {
                                    var S = oe;
                                    switch (S.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Os(8, S, f)
                                    }
                                    var v = S.child;
                                    if (v !== null)
                                        v.return = S,
                                        oe = v;
                                    else
                                        for (; oe !== null; ) {
                                            S = oe;
                                            var D = S.sibling
                                              , B = S.return;
                                            if (fh(S),
                                            S === x) {
                                                oe = null;
                                                break
                                            }
                                            if (D !== null) {
                                                D.return = B,
                                                oe = D;
                                                break
                                            }
                                            oe = B
                                        }
                                }
                            }
                            var k = f.alternate;
                            if (k !== null) {
                                var M = k.child;
                                if (M !== null) {
                                    k.child = null;
                                    do {
                                        var X = M.sibling;
                                        M.sibling = null,
                                        M = X
                                    } while (M !== null)
                                }
                            }
                            oe = f
                        }
                    }
                    if (f.subtreeFlags & 2064 && g !== null)
                        g.return = f,
                        oe = g;
                    else
                        e: for (; oe !== null; ) {
                            if (f = oe,
                            f.flags & 2048)
                                switch (f.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Os(9, f, f.return)
                                }
                            var O = f.sibling;
                            if (O !== null) {
                                O.return = f.return,
                                oe = O;
                                break e
                            }
                            oe = f.return
                        }
                }
                var _ = e.current;
                for (oe = _; oe !== null; ) {
                    g = oe;
                    var N = g.child;
                    if (g.subtreeFlags & 2064 && N !== null)
                        N.return = g,
                        oe = N;
                    else
                        e: for (g = _; oe !== null; ) {
                            if (m = oe,
                            m.flags & 2048)
                                try {
                                    switch (m.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        zl(9, m)
                                    }
                                } catch (te) {
                                    ot(m, m.return, te)
                                }
                            if (m === g) {
                                oe = null;
                                break e
                            }
                            var V = m.sibling;
                            if (V !== null) {
                                V.return = m.return,
                                oe = V;
                                break e
                            }
                            oe = m.return
                        }
                }
                if (Re = c,
                Pr(),
                Wn && typeof Wn.onPostCommitFiberRoot == "function")
                    try {
                        Wn.onPostCommitFiberRoot(Ml, e)
                    } catch {}
                l = !0
            }
            return l
        } finally {
            ke = i,
            wn.transition = t
        }
    }
    return !1
}
function D0(e, t, i) {
    t = Wi(i, t),
    t = eh(e, t, 1),
    e = Tr(e, t, 1),
    t = Vt(),
    e !== null && (eo(e, 1, t),
    $t(e, t))
}
function ot(e, t, i) {
    if (e.tag === 3)
        D0(e, e, i);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                D0(t, e, i);
                break
            } else if (t.tag === 1) {
                var l = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Nr === null || !Nr.has(l))) {
                    e = Wi(i, e),
                    e = th(t, e, 1),
                    t = Tr(t, e, 1),
                    e = Vt(),
                    t !== null && (eo(t, 1, e),
                    $t(t, e));
                    break
                }
            }
            t = t.return
        }
}
function lx(e, t, i) {
    var l = e.pingCache;
    l !== null && l.delete(t),
    t = Vt(),
    e.pingedLanes |= e.suspendedLanes & i,
    St === e && (Rt & i) === i && (wt === 4 || wt === 3 && (Rt & 130023424) === Rt && 500 > ut() - jc ? Kr(e, 0) : Hc |= i),
    $t(e, t)
}
function Ch(e, t) {
    t === 0 && (e.mode & 1 ? (t = No,
    No <<= 1,
    !(No & 130023424) && (No = 4194304)) : t = 1);
    var i = Vt();
    e = nr(e, t),
    e !== null && (eo(e, t, i),
    $t(e, i))
}
function ax(e) {
    var t = e.memoizedState
      , i = 0;
    t !== null && (i = t.retryLane),
    Ch(e, i)
}
function ux(e, t) {
    var i = 0;
    switch (e.tag) {
    case 13:
        var l = e.stateNode
          , c = e.memoizedState;
        c !== null && (i = c.retryLane);
        break;
    case 19:
        l = e.stateNode;
        break;
    default:
        throw Error(K(314))
    }
    l !== null && l.delete(t),
    Ch(e, i)
}
var Ah;
Ah = function(e, t, i) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || qt.current)
            Qt = !0;
        else {
            if (!(e.lanes & i) && !(t.flags & 128))
                return Qt = !1,
                Qp(e, t, i);
            Qt = !!(e.flags & 131072)
        }
    else
        Qt = !1,
        Ke && t.flags & 1048576 && Td(t, fl, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var l = t.type;
        Yo(e, t),
        e = t.pendingProps;
        var c = Vi(t, Bt.current);
        Li(t, i),
        c = Bc(null, t, l, e, c, i);
        var f = Lc();
        return t.flags |= 1,
        typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Jt(l) ? (f = !0,
        ul(t)) : f = !1,
        t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null,
        bc(t),
        c.updater = Vl,
        t.stateNode = c,
        c._reactInternals = t,
        Ou(t, l, e, i),
        t = Mu(null, t, l, !0, f, i)) : (t.tag = 0,
        Ke && f && vc(t),
        Ut(null, t, c, i),
        t = t.child),
        t;
    case 16:
        l = t.elementType;
        e: {
            switch (Yo(e, t),
            e = t.pendingProps,
            c = l._init,
            l = c(l._payload),
            t.type = l,
            c = t.tag = fx(l),
            e = Tn(l, e),
            c) {
            case 0:
                t = Du(null, t, l, e, i);
                break e;
            case 1:
                t = A0(null, t, l, e, i);
                break e;
            case 11:
                t = E0(null, t, l, e, i);
                break e;
            case 14:
                t = C0(null, t, l, Tn(l.type, e), i);
                break e
            }
            throw Error(K(306, l, ""))
        }
        return t;
    case 0:
        return l = t.type,
        c = t.pendingProps,
        c = t.elementType === l ? c : Tn(l, c),
        Du(e, t, l, c, i);
    case 1:
        return l = t.type,
        c = t.pendingProps,
        c = t.elementType === l ? c : Tn(l, c),
        A0(e, t, l, c, i);
    case 3:
        e: {
            if (sh(t),
            e === null)
                throw Error(K(387));
            l = t.pendingProps,
            f = t.memoizedState,
            c = f.element,
            Dd(e, t),
            gl(t, l, null, i);
            var g = t.memoizedState;
            if (l = g.element,
            f.isDehydrated)
                if (f = {
                    element: l,
                    isDehydrated: !1,
                    cache: g.cache,
                    pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
                    transitions: g.transitions
                },
                t.updateQueue.baseState = f,
                t.memoizedState = f,
                t.flags & 256) {
                    c = Wi(Error(K(423)), t),
                    t = S0(e, t, l, i, c);
                    break e
                } else if (l !== c) {
                    c = Wi(Error(K(424)), t),
                    t = S0(e, t, l, i, c);
                    break e
                } else
                    for (sn = Ir(t.stateNode.containerInfo.firstChild),
                    on = t,
                    Ke = !0,
                    _n = null,
                    i = Od(t, null, l, i),
                    t.child = i; i; )
                        i.flags = i.flags & -3 | 4096,
                        i = i.sibling;
            else {
                if (zi(),
                l === c) {
                    t = rr(e, t, i);
                    break e
                }
                Ut(e, t, l, i)
            }
            t = t.child
        }
        return t;
    case 5:
        return Md(t),
        e === null && Nu(t),
        l = t.type,
        c = t.pendingProps,
        f = e !== null ? e.memoizedProps : null,
        g = c.children,
        Au(l, c) ? g = null : f !== null && Au(l, f) && (t.flags |= 32),
        ih(e, t),
        Ut(e, t, g, i),
        t.child;
    case 6:
        return e === null && Nu(t),
        null;
    case 13:
        return oh(e, t, i);
    case 4:
        return Dc(t, t.stateNode.containerInfo),
        l = t.pendingProps,
        e === null ? t.child = Hi(t, null, l, i) : Ut(e, t, l, i),
        t.child;
    case 11:
        return l = t.type,
        c = t.pendingProps,
        c = t.elementType === l ? c : Tn(l, c),
        E0(e, t, l, c, i);
    case 7:
        return Ut(e, t, t.pendingProps, i),
        t.child;
    case 8:
        return Ut(e, t, t.pendingProps.children, i),
        t.child;
    case 12:
        return Ut(e, t, t.pendingProps.children, i),
        t.child;
    case 10:
        e: {
            if (l = t.type._context,
            c = t.pendingProps,
            f = t.memoizedProps,
            g = c.value,
            He(dl, l._currentValue),
            l._currentValue = g,
            f !== null)
                if (Dn(f.value, g)) {
                    if (f.children === c.children && !qt.current) {
                        t = rr(e, t, i);
                        break e
                    }
                } else
                    for (f = t.child,
                    f !== null && (f.return = t); f !== null; ) {
                        var m = f.dependencies;
                        if (m !== null) {
                            g = f.child;
                            for (var y = m.firstContext; y !== null; ) {
                                if (y.context === l) {
                                    if (f.tag === 1) {
                                        y = $n(-1, i & -i),
                                        y.tag = 2;
                                        var x = f.updateQueue;
                                        if (x !== null) {
                                            x = x.shared;
                                            var S = x.pending;
                                            S === null ? y.next = y : (y.next = S.next,
                                            S.next = y),
                                            x.pending = y
                                        }
                                    }
                                    f.lanes |= i,
                                    y = f.alternate,
                                    y !== null && (y.lanes |= i),
                                    _u(f.return, i, t),
                                    m.lanes |= i;
                                    break
                                }
                                y = y.next
                            }
                        } else if (f.tag === 10)
                            g = f.type === t.type ? null : f.child;
                        else if (f.tag === 18) {
                            if (g = f.return,
                            g === null)
                                throw Error(K(341));
                            g.lanes |= i,
                            m = g.alternate,
                            m !== null && (m.lanes |= i),
                            _u(g, i, t),
                            g = f.sibling
                        } else
                            g = f.child;
                        if (g !== null)
                            g.return = f;
                        else
                            for (g = f; g !== null; ) {
                                if (g === t) {
                                    g = null;
                                    break
                                }
                                if (f = g.sibling,
                                f !== null) {
                                    f.return = g.return,
                                    g = f;
                                    break
                                }
                                g = g.return
                            }
                        f = g
                    }
            Ut(e, t, c.children, i),
            t = t.child
        }
        return t;
    case 9:
        return c = t.type,
        l = t.pendingProps.children,
        Li(t, i),
        c = En(c),
        l = l(c),
        t.flags |= 1,
        Ut(e, t, l, i),
        t.child;
    case 14:
        return l = t.type,
        c = Tn(l, t.pendingProps),
        c = Tn(l.type, c),
        C0(e, t, l, c, i);
    case 15:
        return nh(e, t, t.type, t.pendingProps, i);
    case 17:
        return l = t.type,
        c = t.pendingProps,
        c = t.elementType === l ? c : Tn(l, c),
        Yo(e, t),
        t.tag = 1,
        Jt(l) ? (e = !0,
        ul(t)) : e = !1,
        Li(t, i),
        $d(t, l, c),
        Ou(t, l, c, i),
        Mu(null, t, l, !0, e, i);
    case 19:
        return lh(e, t, i);
    case 22:
        return rh(e, t, i)
    }
    throw Error(K(156, t.tag))
}
;
function Sh(e, t) {
    return Qf(e, t)
}
function cx(e, t, i, l) {
    this.tag = e,
    this.key = i,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = l,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function mn(e, t, i, l) {
    return new cx(e,t,i,l)
}
function Yc(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function fx(e) {
    if (typeof e == "function")
        return Yc(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === dc)
            return 11;
        if (e === hc)
            return 14
    }
    return 2
}
function Rr(e, t) {
    var i = e.alternate;
    return i === null ? (i = mn(e.tag, t, e.key, e.mode),
    i.elementType = e.elementType,
    i.type = e.type,
    i.stateNode = e.stateNode,
    i.alternate = e,
    e.alternate = i) : (i.pendingProps = t,
    i.type = e.type,
    i.flags = 0,
    i.subtreeFlags = 0,
    i.deletions = null),
    i.flags = e.flags & 14680064,
    i.childLanes = e.childLanes,
    i.lanes = e.lanes,
    i.child = e.child,
    i.memoizedProps = e.memoizedProps,
    i.memoizedState = e.memoizedState,
    i.updateQueue = e.updateQueue,
    t = e.dependencies,
    i.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    i.sibling = e.sibling,
    i.index = e.index,
    i.ref = e.ref,
    i
}
function Qo(e, t, i, l, c, f) {
    var g = 2;
    if (l = e,
    typeof e == "function")
        Yc(e) && (g = 1);
    else if (typeof e == "string")
        g = 5;
    else
        e: switch (e) {
        case Ei:
            return Qr(i.children, c, f, t);
        case fc:
            g = 8,
            c |= 8;
            break;
        case eu:
            return e = mn(12, i, t, c | 2),
            e.elementType = eu,
            e.lanes = f,
            e;
        case tu:
            return e = mn(13, i, t, c),
            e.elementType = tu,
            e.lanes = f,
            e;
        case nu:
            return e = mn(19, i, t, c),
            e.elementType = nu,
            e.lanes = f,
            e;
        case Mf:
            return jl(i, c, f, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case bf:
                    g = 10;
                    break e;
                case Df:
                    g = 9;
                    break e;
                case dc:
                    g = 11;
                    break e;
                case hc:
                    g = 14;
                    break e;
                case pr:
                    g = 16,
                    l = null;
                    break e
                }
            throw Error(K(130, e == null ? e : typeof e, ""))
        }
    return t = mn(g, i, t, c),
    t.elementType = e,
    t.type = l,
    t.lanes = f,
    t
}
function Qr(e, t, i, l) {
    return e = mn(7, e, l, t),
    e.lanes = i,
    e
}
function jl(e, t, i, l) {
    return e = mn(22, e, l, t),
    e.elementType = Mf,
    e.lanes = i,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Ga(e, t, i) {
    return e = mn(6, e, null, t),
    e.lanes = i,
    e
}
function Xa(e, t, i) {
    return t = mn(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = i,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function dx(e, t, i, l, c) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Ta(0),
    this.expirationTimes = Ta(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Ta(0),
    this.identifierPrefix = l,
    this.onRecoverableError = c,
    this.mutableSourceEagerHydrationData = null
}
function Zc(e, t, i, l, c, f, g, m, y) {
    return e = new dx(e,t,i,m,y),
    t === 1 ? (t = 1,
    f === !0 && (t |= 8)) : t = 0,
    f = mn(3, null, null, t),
    e.current = f,
    f.stateNode = e,
    f.memoizedState = {
        element: l,
        isDehydrated: i,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    bc(f),
    e
}
function hx(e, t, i) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: yi,
        key: l == null ? null : "" + l,
        children: e,
        containerInfo: t,
        implementation: i
    }
}
function vh(e) {
    if (!e)
        return Dr;
    e = e._reactInternals;
    e: {
        if (si(e) !== e || e.tag !== 1)
            throw Error(K(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Jt(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(K(171))
    }
    if (e.tag === 1) {
        var i = e.type;
        if (Jt(i))
            return vd(e, i, t)
    }
    return t
}
function Ih(e, t, i, l, c, f, g, m, y) {
    return e = Zc(i, l, !0, e, c, f, g, m, y),
    e.context = vh(null),
    i = e.current,
    l = Vt(),
    c = _r(i),
    f = $n(l, c),
    f.callback = t ?? null,
    Tr(i, f, c),
    e.current.lanes = c,
    eo(e, c, l),
    $t(e, l),
    e
}
function Wl(e, t, i, l) {
    var c = t.current
      , f = Vt()
      , g = _r(c);
    return i = vh(i),
    t.context === null ? t.context = i : t.pendingContext = i,
    t = $n(f, g),
    t.payload = {
        element: e
    },
    l = l === void 0 ? null : l,
    l !== null && (t.callback = l),
    e = Tr(c, t, g),
    e !== null && (On(e, c, g, f),
    Wo(e, c, g)),
    g
}
function Al(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function M0(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var i = e.retryLane;
        e.retryLane = i !== 0 && i < t ? i : t
    }
}
function Kc(e, t) {
    M0(e, t),
    (e = e.alternate) && M0(e, t)
}
function gx() {
    return null
}
var Th = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Qc(e) {
    this._internalRoot = e
}
Gl.prototype.render = Qc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(K(409));
    Wl(e, t, null, null)
}
;
Gl.prototype.unmount = Qc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        ni(function() {
            Wl(null, e, null, null)
        }),
        t[tr] = null
    }
}
;
function Gl(e) {
    this._internalRoot = e
}
Gl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = rd();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var i = 0; i < mr.length && t !== 0 && t < mr[i].priority; i++)
            ;
        mr.splice(i, 0, e),
        i === 0 && sd(e)
    }
}
;
function qc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Xl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function k0() {}
function px(e, t, i, l, c) {
    if (c) {
        if (typeof l == "function") {
            var f = l;
            l = function() {
                var x = Al(g);
                f.call(x)
            }
        }
        var g = Ih(t, l, e, 0, null, !1, !1, "", k0);
        return e._reactRootContainer = g,
        e[tr] = g.current,
        zs(e.nodeType === 8 ? e.parentNode : e),
        ni(),
        g
    }
    for (; c = e.lastChild; )
        e.removeChild(c);
    if (typeof l == "function") {
        var m = l;
        l = function() {
            var x = Al(y);
            m.call(x)
        }
    }
    var y = Zc(e, 0, !1, null, null, !1, !1, "", k0);
    return e._reactRootContainer = y,
    e[tr] = y.current,
    zs(e.nodeType === 8 ? e.parentNode : e),
    ni(function() {
        Wl(t, y, i, l)
    }),
    y
}
function Yl(e, t, i, l, c) {
    var f = i._reactRootContainer;
    if (f) {
        var g = f;
        if (typeof c == "function") {
            var m = c;
            c = function() {
                var y = Al(g);
                m.call(y)
            }
        }
        Wl(t, g, e, c)
    } else
        g = px(i, t, e, c, l);
    return Al(g)
}
td = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var i = As(t.pendingLanes);
            i !== 0 && (xc(t, i | 1),
            $t(t, ut()),
            !(Re & 6) && (Gi = ut() + 500,
            Pr()))
        }
        break;
    case 13:
        ni(function() {
            var l = nr(e, 1);
            if (l !== null) {
                var c = Vt();
                On(l, e, 1, c)
            }
        }),
        Kc(e, 1)
    }
}
;
mc = function(e) {
    if (e.tag === 13) {
        var t = nr(e, 134217728);
        if (t !== null) {
            var i = Vt();
            On(t, e, 134217728, i)
        }
        Kc(e, 134217728)
    }
}
;
nd = function(e) {
    if (e.tag === 13) {
        var t = _r(e)
          , i = nr(e, t);
        if (i !== null) {
            var l = Vt();
            On(i, e, t, l)
        }
        Kc(e, t)
    }
}
;
rd = function() {
    return ke
}
;
id = function(e, t) {
    var i = ke;
    try {
        return ke = e,
        t()
    } finally {
        ke = i
    }
}
;
du = function(e, t, i) {
    switch (t) {
    case "input":
        if (su(e, i),
        t = i.name,
        i.type === "radio" && t != null) {
            for (i = e; i.parentNode; )
                i = i.parentNode;
            for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < i.length; t++) {
                var l = i[t];
                if (l !== e && l.form === e.form) {
                    var c = Ll(l);
                    if (!c)
                        throw Error(K(90));
                    Pf(l),
                    su(l, c)
                }
            }
        }
        break;
    case "textarea":
        Lf(e, i);
        break;
    case "select":
        t = i.value,
        t != null && Mi(e, !!i.multiple, t, !1)
    }
}
;
Wf = Wc;
Gf = ni;
var xx = {
    usingClientEntryPoint: !1,
    Events: [no, vi, Ll, Hf, jf, Wc]
}
  , ws = {
    findFiberByHostInstance: Xr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , mx = {
    bundleType: ws.bundleType,
    version: ws.version,
    rendererPackageName: ws.rendererPackageName,
    rendererConfig: ws.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ir.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Zf(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: ws.findFiberByHostInstance || gx,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Fo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fo.isDisabled && Fo.supportsFiber)
        try {
            Ml = Fo.inject(mx),
            Wn = Fo
        } catch {}
}
an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xx;
an.createPortal = function(e, t) {
    var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!qc(t))
        throw Error(K(200));
    return hx(e, t, null, i)
}
;
an.createRoot = function(e, t) {
    if (!qc(e))
        throw Error(K(299));
    var i = !1
      , l = ""
      , c = Th;
    return t != null && (t.unstable_strictMode === !0 && (i = !0),
    t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
    t = Zc(e, 1, !1, null, null, i, !1, l, c),
    e[tr] = t.current,
    zs(e.nodeType === 8 ? e.parentNode : e),
    new Qc(t)
}
;
an.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(K(188)) : (e = Object.keys(e).join(","),
        Error(K(268, e)));
    return e = Zf(t),
    e = e === null ? null : e.stateNode,
    e
}
;
an.flushSync = function(e) {
    return ni(e)
}
;
an.hydrate = function(e, t, i) {
    if (!Xl(t))
        throw Error(K(200));
    return Yl(null, e, t, !0, i)
}
;
an.hydrateRoot = function(e, t, i) {
    if (!qc(e))
        throw Error(K(405));
    var l = i != null && i.hydratedSources || null
      , c = !1
      , f = ""
      , g = Th;
    if (i != null && (i.unstable_strictMode === !0 && (c = !0),
    i.identifierPrefix !== void 0 && (f = i.identifierPrefix),
    i.onRecoverableError !== void 0 && (g = i.onRecoverableError)),
    t = Ih(t, null, e, 1, i ?? null, c, !1, f, g),
    e[tr] = t.current,
    zs(e),
    l)
        for (e = 0; e < l.length; e++)
            i = l[e],
            c = i._getVersion,
            c = c(i._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [i, c] : t.mutableSourceEagerHydrationData.push(i, c);
    return new Gl(t)
}
;
an.render = function(e, t, i) {
    if (!Xl(t))
        throw Error(K(200));
    return Yl(null, e, t, !1, i)
}
;
an.unmountComponentAtNode = function(e) {
    if (!Xl(e))
        throw Error(K(40));
    return e._reactRootContainer ? (ni(function() {
        Yl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[tr] = null
        })
    }),
    !0) : !1
}
;
an.unstable_batchedUpdates = Wc;
an.unstable_renderSubtreeIntoContainer = function(e, t, i, l) {
    if (!Xl(i))
        throw Error(K(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(K(38));
    return Yl(e, t, i, !1, l)
}
;
an.version = "18.3.1-next-f1338f8080-20240426";
function Nh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nh)
        } catch (e) {
            console.error(e)
        }
}
Nh(),
Nf.exports = an;
var _h = Nf.exports;
const wx = rc(_h);
var P0 = _h;
Ja.createRoot = P0.createRoot,
Ja.hydrateRoot = P0.hydrateRoot;
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Qs() {
    return Qs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var l in i)
                Object.prototype.hasOwnProperty.call(i, l) && (e[l] = i[l])
        }
        return e
    }
    ,
    Qs.apply(this, arguments)
}
var Cr;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Cr || (Cr = {}));
const B0 = "popstate";
function yx(e) {
    e === void 0 && (e = {});
    function t(l, c) {
        let {pathname: f, search: g, hash: m} = l.location;
        return Gu("", {
            pathname: f,
            search: g,
            hash: m
        }, c.state && c.state.usr || null, c.state && c.state.key || "default")
    }
    function i(l, c) {
        return typeof c == "string" ? c : Sl(c)
    }
    return Cx(t, i, null, e)
}
function ht(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Rh(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function Ex() {
    return Math.random().toString(36).substr(2, 8)
}
function L0(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Gu(e, t, i, l) {
    return i === void 0 && (i = null),
    Qs({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Ki(t) : t, {
        state: i,
        key: t && t.key || l || Ex()
    })
}
function Sl(e) {
    let {pathname: t="/", search: i="", hash: l=""} = e;
    return i && i !== "?" && (t += i.charAt(0) === "?" ? i : "?" + i),
    l && l !== "#" && (t += l.charAt(0) === "#" ? l : "#" + l),
    t
}
function Ki(e) {
    let t = {};
    if (e) {
        let i = e.indexOf("#");
        i >= 0 && (t.hash = e.substr(i),
        e = e.substr(0, i));
        let l = e.indexOf("?");
        l >= 0 && (t.search = e.substr(l),
        e = e.substr(0, l)),
        e && (t.pathname = e)
    }
    return t
}
function Cx(e, t, i, l) {
    l === void 0 && (l = {});
    let {window: c=document.defaultView, v5Compat: f=!1} = l
      , g = c.history
      , m = Cr.Pop
      , y = null
      , x = S();
    x == null && (x = 0,
    g.replaceState(Qs({}, g.state, {
        idx: x
    }), ""));
    function S() {
        return (g.state || {
            idx: null
        }).idx
    }
    function v() {
        m = Cr.Pop;
        let X = S()
          , O = X == null ? null : X - x;
        x = X,
        y && y({
            action: m,
            location: M.location,
            delta: O
        })
    }
    function D(X, O) {
        m = Cr.Push;
        let _ = Gu(M.location, X, O);
        x = S() + 1;
        let N = L0(_, x)
          , V = M.createHref(_);
        try {
            g.pushState(N, "", V)
        } catch (te) {
            if (te instanceof DOMException && te.name === "DataCloneError")
                throw te;
            c.location.assign(V)
        }
        f && y && y({
            action: m,
            location: M.location,
            delta: 1
        })
    }
    function B(X, O) {
        m = Cr.Replace;
        let _ = Gu(M.location, X, O);
        x = S();
        let N = L0(_, x)
          , V = M.createHref(_);
        g.replaceState(N, "", V),
        f && y && y({
            action: m,
            location: M.location,
            delta: 0
        })
    }
    function k(X) {
        let O = c.location.origin !== "null" ? c.location.origin : c.location.href
          , _ = typeof X == "string" ? X : Sl(X);
        return _ = _.replace(/ $/, "%20"),
        ht(O, "No window.location.(origin|href) available to create URL for href: " + _),
        new URL(_,O)
    }
    let M = {
        get action() {
            return m
        },
        get location() {
            return e(c, g)
        },
        listen(X) {
            if (y)
                throw new Error("A history only accepts one active listener");
            return c.addEventListener(B0, v),
            y = X,
            ()=>{
                c.removeEventListener(B0, v),
                y = null
            }
        },
        createHref(X) {
            return t(c, X)
        },
        createURL: k,
        encodeLocation(X) {
            let O = k(X);
            return {
                pathname: O.pathname,
                search: O.search,
                hash: O.hash
            }
        },
        push: D,
        replace: B,
        go(X) {
            return g.go(X)
        }
    };
    return M
}
var F0;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(F0 || (F0 = {}));
function Ax(e, t, i) {
    i === void 0 && (i = "/");
    let l = typeof t == "string" ? Ki(t) : t
      , c = Jc(l.pathname || "/", i);
    if (c == null)
        return null;
    let f = Oh(e);
    Sx(f);
    let g = null;
    for (let m = 0; g == null && m < f.length; ++m) {
        let y = Px(c);
        g = Dx(f[m], y)
    }
    return g
}
function Oh(e, t, i, l) {
    t === void 0 && (t = []),
    i === void 0 && (i = []),
    l === void 0 && (l = "");
    let c = (f,g,m)=>{
        let y = {
            relativePath: m === void 0 ? f.path || "" : m,
            caseSensitive: f.caseSensitive === !0,
            childrenIndex: g,
            route: f
        };
        y.relativePath.startsWith("/") && (ht(y.relativePath.startsWith(l), 'Absolute route path "' + y.relativePath + '" nested under path ' + ('"' + l + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        y.relativePath = y.relativePath.slice(l.length));
        let x = Or([l, y.relativePath])
          , S = i.concat(y);
        f.children && f.children.length > 0 && (ht(f.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + x + '".')),
        Oh(f.children, t, S, x)),
        !(f.path == null && !f.index) && t.push({
            path: x,
            score: Ox(x, f.index),
            routesMeta: S
        })
    }
    ;
    return e.forEach((f,g)=>{
        var m;
        if (f.path === "" || !((m = f.path) != null && m.includes("?")))
            c(f, g);
        else
            for (let y of bh(f.path))
                c(f, g, y)
    }
    ),
    t
}
function bh(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[i,...l] = t
      , c = i.endsWith("?")
      , f = i.replace(/\?$/, "");
    if (l.length === 0)
        return c ? [f, ""] : [f];
    let g = bh(l.join("/"))
      , m = [];
    return m.push(...g.map(y=>y === "" ? f : [f, y].join("/"))),
    c && m.push(...g),
    m.map(y=>e.startsWith("/") && y === "" ? "/" : y)
}
function Sx(e) {
    e.sort((t,i)=>t.score !== i.score ? i.score - t.score : bx(t.routesMeta.map(l=>l.childrenIndex), i.routesMeta.map(l=>l.childrenIndex)))
}
const vx = /^:[\w-]+$/
  , Ix = 3
  , Tx = 2
  , Nx = 1
  , _x = 10
  , Rx = -2
  , U0 = e=>e === "*";
function Ox(e, t) {
    let i = e.split("/")
      , l = i.length;
    return i.some(U0) && (l += Rx),
    t && (l += Tx),
    i.filter(c=>!U0(c)).reduce((c,f)=>c + (vx.test(f) ? Ix : f === "" ? Nx : _x), l)
}
function bx(e, t) {
    return e.length === t.length && e.slice(0, -1).every((l,c)=>l === t[c]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function Dx(e, t) {
    let {routesMeta: i} = e
      , l = {}
      , c = "/"
      , f = [];
    for (let g = 0; g < i.length; ++g) {
        let m = i[g]
          , y = g === i.length - 1
          , x = c === "/" ? t : t.slice(c.length) || "/"
          , S = Mx({
            path: m.relativePath,
            caseSensitive: m.caseSensitive,
            end: y
        }, x);
        if (!S)
            return null;
        Object.assign(l, S.params);
        let v = m.route;
        f.push({
            params: l,
            pathname: Or([c, S.pathname]),
            pathnameBase: Ux(Or([c, S.pathnameBase])),
            route: v
        }),
        S.pathnameBase !== "/" && (c = Or([c, S.pathnameBase]))
    }
    return f
}
function Mx(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[i,l] = kx(e.path, e.caseSensitive, e.end)
      , c = t.match(i);
    if (!c)
        return null;
    let f = c[0]
      , g = f.replace(/(.)\/+$/, "$1")
      , m = c.slice(1);
    return {
        params: l.reduce((x,S,v)=>{
            let {paramName: D, isOptional: B} = S;
            if (D === "*") {
                let M = m[v] || "";
                g = f.slice(0, f.length - M.length).replace(/(.)\/+$/, "$1")
            }
            const k = m[v];
            return B && !k ? x[D] = void 0 : x[D] = (k || "").replace(/%2F/g, "/"),
            x
        }
        , {}),
        pathname: f,
        pathnameBase: g,
        pattern: e
    }
}
function kx(e, t, i) {
    t === void 0 && (t = !1),
    i === void 0 && (i = !0),
    Rh(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let l = []
      , c = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (g,m,y)=>(l.push({
        paramName: m,
        isOptional: y != null
    }),
    y ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (l.push({
        paramName: "*"
    }),
    c += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : i ? c += "\\/*$" : e !== "" && e !== "/" && (c += "(?:(?=\\/|$))"),
    [new RegExp(c,t ? void 0 : "i"), l]
}
function Px(e) {
    try {
        return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Rh(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function Jc(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let i = t.endsWith("/") ? t.length - 1 : t.length
      , l = e.charAt(i);
    return l && l !== "/" ? null : e.slice(i) || "/"
}
function Bx(e, t) {
    t === void 0 && (t = "/");
    let {pathname: i, search: l="", hash: c=""} = typeof e == "string" ? Ki(e) : e;
    return {
        pathname: i ? i.startsWith("/") ? i : Lx(i, t) : t,
        search: Vx(l),
        hash: zx(c)
    }
}
function Lx(e, t) {
    let i = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(c=>{
        c === ".." ? i.length > 1 && i.pop() : c !== "." && i.push(c)
    }
    ),
    i.length > 1 ? i.join("/") : "/"
}
function Ya(e, t, i, l) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(l) + "].  Please separate it out to the ") + ("`to." + i + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function Fx(e) {
    return e.filter((t,i)=>i === 0 || t.route.path && t.route.path.length > 0)
}
function Dh(e, t) {
    let i = Fx(e);
    return t ? i.map((l,c)=>c === e.length - 1 ? l.pathname : l.pathnameBase) : i.map(l=>l.pathnameBase)
}
function Mh(e, t, i, l) {
    l === void 0 && (l = !1);
    let c;
    typeof e == "string" ? c = Ki(e) : (c = Qs({}, e),
    ht(!c.pathname || !c.pathname.includes("?"), Ya("?", "pathname", "search", c)),
    ht(!c.pathname || !c.pathname.includes("#"), Ya("#", "pathname", "hash", c)),
    ht(!c.search || !c.search.includes("#"), Ya("#", "search", "hash", c)));
    let f = e === "" || c.pathname === "", g = f ? "/" : c.pathname, m;
    if (g == null)
        m = i;
    else {
        let v = t.length - 1;
        if (!l && g.startsWith("..")) {
            let D = g.split("/");
            for (; D[0] === ".."; )
                D.shift(),
                v -= 1;
            c.pathname = D.join("/")
        }
        m = v >= 0 ? t[v] : "/"
    }
    let y = Bx(c, m)
      , x = g && g !== "/" && g.endsWith("/")
      , S = (f || g === ".") && i.endsWith("/");
    return !y.pathname.endsWith("/") && (x || S) && (y.pathname += "/"),
    y
}
const Or = e=>e.join("/").replace(/\/\/+/g, "/")
  , Ux = e=>e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , Vx = e=>!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , zx = e=>!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Hx(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const kh = ["post", "put", "patch", "delete"];
new Set(kh);
const jx = ["get", ...kh];
new Set(jx);
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function qs() {
    return qs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var l in i)
                Object.prototype.hasOwnProperty.call(i, l) && (e[l] = i[l])
        }
        return e
    }
    ,
    qs.apply(this, arguments)
}
const $c = ee.createContext(null)
  , Wx = ee.createContext(null)
  , oi = ee.createContext(null)
  , Zl = ee.createContext(null)
  , Br = ee.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Ph = ee.createContext(null);
function Gx(e, t) {
    let {relative: i} = t === void 0 ? {} : t;
    io() || ht(!1);
    let {basename: l, navigator: c} = ee.useContext(oi)
      , {hash: f, pathname: g, search: m} = Lh(e, {
        relative: i
    })
      , y = g;
    return l !== "/" && (y = g === "/" ? l : Or([l, g])),
    c.createHref({
        pathname: y,
        search: m,
        hash: f
    })
}
function io() {
    return ee.useContext(Zl) != null
}
function Kl() {
    return io() || ht(!1),
    ee.useContext(Zl).location
}
function Bh(e) {
    ee.useContext(oi).static || ee.useLayoutEffect(e)
}
function e1() {
    let {isDataRoute: e} = ee.useContext(Br);
    return e ? sm() : Xx()
}
function Xx() {
    io() || ht(!1);
    let e = ee.useContext($c)
      , {basename: t, future: i, navigator: l} = ee.useContext(oi)
      , {matches: c} = ee.useContext(Br)
      , {pathname: f} = Kl()
      , g = JSON.stringify(Dh(c, i.v7_relativeSplatPath))
      , m = ee.useRef(!1);
    return Bh(()=>{
        m.current = !0
    }
    ),
    ee.useCallback(function(x, S) {
        if (S === void 0 && (S = {}),
        !m.current)
            return;
        if (typeof x == "number") {
            l.go(x);
            return
        }
        let v = Mh(x, JSON.parse(g), f, S.relative === "path");
        e == null && t !== "/" && (v.pathname = v.pathname === "/" ? t : Or([t, v.pathname])),
        (S.replace ? l.replace : l.push)(v, S.state, S)
    }, [t, l, g, f, e])
}
function Yx() {
    let {matches: e} = ee.useContext(Br)
      , t = e[e.length - 1];
    return t ? t.params : {}
}
function Lh(e, t) {
    let {relative: i} = t === void 0 ? {} : t
      , {future: l} = ee.useContext(oi)
      , {matches: c} = ee.useContext(Br)
      , {pathname: f} = Kl()
      , g = JSON.stringify(Dh(c, l.v7_relativeSplatPath));
    return ee.useMemo(()=>Mh(e, JSON.parse(g), f, i === "path"), [e, g, f, i])
}
function Zx(e, t) {
    return Kx(e, t)
}
function Kx(e, t, i, l) {
    io() || ht(!1);
    let {navigator: c} = ee.useContext(oi)
      , {matches: f} = ee.useContext(Br)
      , g = f[f.length - 1]
      , m = g ? g.params : {};
    g && g.pathname;
    let y = g ? g.pathnameBase : "/";
    g && g.route;
    let x = Kl(), S;
    if (t) {
        var v;
        let X = typeof t == "string" ? Ki(t) : t;
        y === "/" || (v = X.pathname) != null && v.startsWith(y) || ht(!1),
        S = X
    } else
        S = x;
    let D = S.pathname || "/"
      , B = D;
    if (y !== "/") {
        let X = y.replace(/^\//, "").split("/");
        B = "/" + D.replace(/^\//, "").split("/").slice(X.length).join("/")
    }
    let k = Ax(e, {
        pathname: B
    })
      , M = em(k && k.map(X=>Object.assign({}, X, {
        params: Object.assign({}, m, X.params),
        pathname: Or([y, c.encodeLocation ? c.encodeLocation(X.pathname).pathname : X.pathname]),
        pathnameBase: X.pathnameBase === "/" ? y : Or([y, c.encodeLocation ? c.encodeLocation(X.pathnameBase).pathname : X.pathnameBase])
    })), f, i, l);
    return t && M ? ee.createElement(Zl.Provider, {
        value: {
            location: qs({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, S),
            navigationType: Cr.Pop
        }
    }, M) : M
}
function Qx() {
    let e = im()
      , t = Hx(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , i = e instanceof Error ? e.stack : null
      , c = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return ee.createElement(ee.Fragment, null, ee.createElement("h2", null, "Unexpected Application Error!"), ee.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), i ? ee.createElement("pre", {
        style: c
    }, i) : null, null)
}
const qx = ee.createElement(Qx, null);
class Jx extends ee.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, i) {
        return i.location !== t.location || i.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : i.error,
            location: i.location,
            revalidation: t.revalidation || i.revalidation
        }
    }
    componentDidCatch(t, i) {
        console.error("React Router caught the following error during render", t, i)
    }
    render() {
        return this.state.error !== void 0 ? ee.createElement(Br.Provider, {
            value: this.props.routeContext
        }, ee.createElement(Ph.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function $x(e) {
    let {routeContext: t, match: i, children: l} = e
      , c = ee.useContext($c);
    return c && c.static && c.staticContext && (i.route.errorElement || i.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = i.route.id),
    ee.createElement(Br.Provider, {
        value: t
    }, l)
}
function em(e, t, i, l) {
    var c;
    if (t === void 0 && (t = []),
    i === void 0 && (i = null),
    l === void 0 && (l = null),
    e == null) {
        var f;
        if ((f = i) != null && f.errors)
            e = i.matches;
        else
            return null
    }
    let g = e
      , m = (c = i) == null ? void 0 : c.errors;
    if (m != null) {
        let S = g.findIndex(v=>v.route.id && (m == null ? void 0 : m[v.route.id]) !== void 0);
        S >= 0 || ht(!1),
        g = g.slice(0, Math.min(g.length, S + 1))
    }
    let y = !1
      , x = -1;
    if (i && l && l.v7_partialHydration)
        for (let S = 0; S < g.length; S++) {
            let v = g[S];
            if ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (x = S),
            v.route.id) {
                let {loaderData: D, errors: B} = i
                  , k = v.route.loader && D[v.route.id] === void 0 && (!B || B[v.route.id] === void 0);
                if (v.route.lazy || k) {
                    y = !0,
                    x >= 0 ? g = g.slice(0, x + 1) : g = [g[0]];
                    break
                }
            }
        }
    return g.reduceRight((S,v,D)=>{
        let B, k = !1, M = null, X = null;
        i && (B = m && v.route.id ? m[v.route.id] : void 0,
        M = v.route.errorElement || qx,
        y && (x < 0 && D === 0 ? (k = !0,
        X = null) : x === D && (k = !0,
        X = v.route.hydrateFallbackElement || null)));
        let O = t.concat(g.slice(0, D + 1))
          , _ = ()=>{
            let N;
            return B ? N = M : k ? N = X : v.route.Component ? N = ee.createElement(v.route.Component, null) : v.route.element ? N = v.route.element : N = S,
            ee.createElement($x, {
                match: v,
                routeContext: {
                    outlet: S,
                    matches: O,
                    isDataRoute: i != null
                },
                children: N
            })
        }
        ;
        return i && (v.route.ErrorBoundary || v.route.errorElement || D === 0) ? ee.createElement(Jx, {
            location: i.location,
            revalidation: i.revalidation,
            component: M,
            error: B,
            children: _(),
            routeContext: {
                outlet: null,
                matches: O,
                isDataRoute: !0
            }
        }) : _()
    }
    , null)
}
var Fh = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(Fh || {})
  , vl = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(vl || {});
function tm(e) {
    let t = ee.useContext($c);
    return t || ht(!1),
    t
}
function nm(e) {
    let t = ee.useContext(Wx);
    return t || ht(!1),
    t
}
function rm(e) {
    let t = ee.useContext(Br);
    return t || ht(!1),
    t
}
function Uh(e) {
    let t = rm()
      , i = t.matches[t.matches.length - 1];
    return i.route.id || ht(!1),
    i.route.id
}
function im() {
    var e;
    let t = ee.useContext(Ph)
      , i = nm(vl.UseRouteError)
      , l = Uh(vl.UseRouteError);
    return t !== void 0 ? t : (e = i.errors) == null ? void 0 : e[l]
}
function sm() {
    let {router: e} = tm(Fh.UseNavigateStable)
      , t = Uh(vl.UseNavigateStable)
      , i = ee.useRef(!1);
    return Bh(()=>{
        i.current = !0
    }
    ),
    ee.useCallback(function(c, f) {
        f === void 0 && (f = {}),
        i.current && (typeof c == "number" ? e.navigate(c) : e.navigate(c, qs({
            fromRouteId: t
        }, f)))
    }, [e, t])
}
function wi(e) {
    ht(!1)
}
function om(e) {
    let {basename: t="/", children: i=null, location: l, navigationType: c=Cr.Pop, navigator: f, static: g=!1, future: m} = e;
    io() && ht(!1);
    let y = t.replace(/^\/*/, "/")
      , x = ee.useMemo(()=>({
        basename: y,
        navigator: f,
        static: g,
        future: qs({
            v7_relativeSplatPath: !1
        }, m)
    }), [y, m, f, g]);
    typeof l == "string" && (l = Ki(l));
    let {pathname: S="/", search: v="", hash: D="", state: B=null, key: k="default"} = l
      , M = ee.useMemo(()=>{
        let X = Jc(S, y);
        return X == null ? null : {
            location: {
                pathname: X,
                search: v,
                hash: D,
                state: B,
                key: k
            },
            navigationType: c
        }
    }
    , [y, S, v, D, B, k, c]);
    return M == null ? null : ee.createElement(oi.Provider, {
        value: x
    }, ee.createElement(Zl.Provider, {
        children: i,
        value: M
    }))
}
function lm(e) {
    let {children: t, location: i} = e;
    return Zx(Xu(t), i)
}
new Promise(()=>{}
);
function Xu(e, t) {
    t === void 0 && (t = []);
    let i = [];
    return ee.Children.forEach(e, (l,c)=>{
        if (!ee.isValidElement(l))
            return;
        let f = [...t, c];
        if (l.type === ee.Fragment) {
            i.push.apply(i, Xu(l.props.children, f));
            return
        }
        l.type !== wi && ht(!1),
        !l.props.index || !l.props.children || ht(!1);
        let g = {
            id: l.props.id || f.join("-"),
            caseSensitive: l.props.caseSensitive,
            element: l.props.element,
            Component: l.props.Component,
            index: l.props.index,
            path: l.props.path,
            loader: l.props.loader,
            action: l.props.action,
            errorElement: l.props.errorElement,
            ErrorBoundary: l.props.ErrorBoundary,
            hasErrorBoundary: l.props.ErrorBoundary != null || l.props.errorElement != null,
            shouldRevalidate: l.props.shouldRevalidate,
            handle: l.props.handle,
            lazy: l.props.lazy
        };
        l.props.children && (g.children = Xu(l.props.children, f)),
        i.push(g)
    }
    ),
    i
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Yu() {
    return Yu = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var l in i)
                Object.prototype.hasOwnProperty.call(i, l) && (e[l] = i[l])
        }
        return e
    }
    ,
    Yu.apply(this, arguments)
}
function am(e, t) {
    if (e == null)
        return {};
    var i = {}, l = Object.keys(e), c, f;
    for (f = 0; f < l.length; f++)
        c = l[f],
        !(t.indexOf(c) >= 0) && (i[c] = e[c]);
    return i
}
function um(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function cm(e, t) {
    return e.button === 0 && (!t || t === "_self") && !um(e)
}
const fm = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"]
  , dm = "6";
try {
    window.__reactRouterVersion = dm
} catch {}
const hm = "startTransition"
  , V0 = lg[hm];
function gm(e) {
    let {basename: t, children: i, future: l, window: c} = e
      , f = ee.useRef();
    f.current == null && (f.current = yx({
        window: c,
        v5Compat: !0
    }));
    let g = f.current
      , [m,y] = ee.useState({
        action: g.action,
        location: g.location
    })
      , {v7_startTransition: x} = l || {}
      , S = ee.useCallback(v=>{
        x && V0 ? V0(()=>y(v)) : y(v)
    }
    , [y, x]);
    return ee.useLayoutEffect(()=>g.listen(S), [g, S]),
    ee.createElement(om, {
        basename: t,
        children: i,
        location: m.location,
        navigationType: m.action,
        navigator: g,
        future: l
    })
}
const pm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , xm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , bi = ee.forwardRef(function(t, i) {
    let {onClick: l, relative: c, reloadDocument: f, replace: g, state: m, target: y, to: x, preventScrollReset: S, unstable_viewTransition: v} = t, D = am(t, fm), {basename: B} = ee.useContext(oi), k, M = !1;
    if (typeof x == "string" && xm.test(x) && (k = x,
    pm))
        try {
            let N = new URL(window.location.href)
              , V = x.startsWith("//") ? new URL(N.protocol + x) : new URL(x)
              , te = Jc(V.pathname, B);
            V.origin === N.origin && te != null ? x = te + V.search + V.hash : M = !0
        } catch {}
    let X = Gx(x, {
        relative: c
    })
      , O = mm(x, {
        replace: g,
        state: m,
        target: y,
        preventScrollReset: S,
        relative: c,
        unstable_viewTransition: v
    });
    function _(N) {
        l && l(N),
        N.defaultPrevented || O(N)
    }
    return ee.createElement("a", Yu({}, D, {
        href: k || X,
        onClick: M || f ? l : _,
        ref: i,
        target: y
    }))
});
var z0;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(z0 || (z0 = {}));
var H0;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(H0 || (H0 = {}));
function mm(e, t) {
    let {target: i, replace: l, state: c, preventScrollReset: f, relative: g, unstable_viewTransition: m} = t === void 0 ? {} : t
      , y = e1()
      , x = Kl()
      , S = Lh(e, {
        relative: g
    });
    return ee.useCallback(v=>{
        if (cm(v, i)) {
            v.preventDefault();
            let D = l !== void 0 ? l : Sl(x) === Sl(S);
            y(e, {
                replace: D,
                state: c,
                preventScrollReset: f,
                relative: g,
                unstable_viewTransition: m
            })
        }
    }
    , [x, y, S, l, c, i, e, f, g, m])
}
const so = ({children: e, style: t, className: i})=>{
    const l = {
        padding: "20px",
        margin: "10px",
        ...t
    };
    return q.jsx("div", {
        className: i,
        style: l,
        children: e
    })
}
;
function wm() {
    return q.jsxs(so, {
        className: "flex flex-col",
        children: [q.jsx("h1", {
            className: "text-2xl text-center font-bold",
            children: "Home"
        }), q.jsx("hr", {
            className: "my-8"
        })]
    })
}
var se;
(function(e) {
    e[e.QR_CODE = 0] = "QR_CODE",
    e[e.AZTEC = 1] = "AZTEC",
    e[e.CODABAR = 2] = "CODABAR",
    e[e.CODE_39 = 3] = "CODE_39",
    e[e.CODE_93 = 4] = "CODE_93",
    e[e.CODE_128 = 5] = "CODE_128",
    e[e.DATA_MATRIX = 6] = "DATA_MATRIX",
    e[e.MAXICODE = 7] = "MAXICODE",
    e[e.ITF = 8] = "ITF",
    e[e.EAN_13 = 9] = "EAN_13",
    e[e.EAN_8 = 10] = "EAN_8",
    e[e.PDF_417 = 11] = "PDF_417",
    e[e.RSS_14 = 12] = "RSS_14",
    e[e.RSS_EXPANDED = 13] = "RSS_EXPANDED",
    e[e.UPC_A = 14] = "UPC_A",
    e[e.UPC_E = 15] = "UPC_E",
    e[e.UPC_EAN_EXTENSION = 16] = "UPC_EAN_EXTENSION"
}
)(se || (se = {}));
var j0 = new Map([[se.QR_CODE, "QR_CODE"], [se.AZTEC, "AZTEC"], [se.CODABAR, "CODABAR"], [se.CODE_39, "CODE_39"], [se.CODE_93, "CODE_93"], [se.CODE_128, "CODE_128"], [se.DATA_MATRIX, "DATA_MATRIX"], [se.MAXICODE, "MAXICODE"], [se.ITF, "ITF"], [se.EAN_13, "EAN_13"], [se.EAN_8, "EAN_8"], [se.PDF_417, "PDF_417"], [se.RSS_14, "RSS_14"], [se.RSS_EXPANDED, "RSS_EXPANDED"], [se.UPC_A, "UPC_A"], [se.UPC_E, "UPC_E"], [se.UPC_EAN_EXTENSION, "UPC_EAN_EXTENSION"]]), W0;
(function(e) {
    e[e.UNKNOWN = 0] = "UNKNOWN",
    e[e.URL = 1] = "URL"
}
)(W0 || (W0 = {}));
function ym(e) {
    return Object.values(se).includes(e)
}
var Il;
(function(e) {
    e[e.SCAN_TYPE_CAMERA = 0] = "SCAN_TYPE_CAMERA",
    e[e.SCAN_TYPE_FILE = 1] = "SCAN_TYPE_FILE"
}
)(Il || (Il = {}));
var Em = function() {
    function e() {}
    return e.GITHUB_PROJECT_URL = "https://github.com/mebjas/html5-qrcode",
    e.SCAN_DEFAULT_FPS = 2,
    e.DEFAULT_DISABLE_FLIP = !1,
    e.DEFAULT_REMEMBER_LAST_CAMERA_USED = !0,
    e.DEFAULT_SUPPORTED_SCAN_TYPE = [Il.SCAN_TYPE_CAMERA, Il.SCAN_TYPE_FILE],
    e
}(), Vh = function() {
    function e(t, i) {
        this.format = t,
        this.formatName = i
    }
    return e.prototype.toString = function() {
        return this.formatName
    }
    ,
    e.create = function(t) {
        if (!j0.has(t))
            throw "".concat(t, " not in html5QrcodeSupportedFormatsTextMap");
        return new e(t,j0.get(t))
    }
    ,
    e
}(), G0 = function() {
    function e() {}
    return e.createFromText = function(t) {
        var i = {
            text: t
        };
        return {
            decodedText: t,
            result: i
        }
    }
    ,
    e.createFromQrcodeResult = function(t) {
        return {
            decodedText: t.text,
            result: t
        }
    }
    ,
    e
}(), Zu;
(function(e) {
    e[e.UNKWOWN_ERROR = 0] = "UNKWOWN_ERROR",
    e[e.IMPLEMENTATION_ERROR = 1] = "IMPLEMENTATION_ERROR",
    e[e.NO_CODE_FOUND_ERROR = 2] = "NO_CODE_FOUND_ERROR"
}
)(Zu || (Zu = {}));
var Cm = function() {
    function e() {}
    return e.createFrom = function(t) {
        return {
            errorMessage: t,
            type: Zu.UNKWOWN_ERROR
        }
    }
    ,
    e
}()
  , Am = function() {
    function e(t) {
        this.verbose = t
    }
    return e.prototype.log = function(t) {
        this.verbose && console.log(t)
    }
    ,
    e.prototype.warn = function(t) {
        this.verbose && console.warn(t)
    }
    ,
    e.prototype.logError = function(t, i) {
        (this.verbose || i === !0) && console.error(t)
    }
    ,
    e.prototype.logErrors = function(t) {
        if (t.length === 0)
            throw "Logger#logError called without arguments";
        this.verbose && console.error(t)
    }
    ,
    e
}();
function Yn(e) {
    return typeof e > "u" || e === null
}
var Di = function() {
    function e() {}
    return e.codeParseError = function(t) {
        return "QR code parse error, error = ".concat(t)
    }
    ,
    e.errorGettingUserMedia = function(t) {
        return "Error getting userMedia, error = ".concat(t)
    }
    ,
    e.onlyDeviceSupportedError = function() {
        return "The device doesn't support navigator.mediaDevices , only supported cameraIdOrConfig in this case is deviceId parameter (string)."
    }
    ,
    e.cameraStreamingNotSupported = function() {
        return "Camera streaming not supported by the browser."
    }
    ,
    e.unableToQuerySupportedDevices = function() {
        return "Unable to query supported devices, unknown error."
    }
    ,
    e.insecureContextCameraQueryError = function() {
        return "Camera access is only supported in secure context like https or localhost."
    }
    ,
    e.scannerPaused = function() {
        return "Scanner paused"
    }
    ,
    e
}()
  , zh = function() {
    function e() {}
    return e.isMediaStreamConstraintsValid = function(t, i) {
        if (typeof t != "object") {
            var l = typeof t;
            return i.logError("videoConstraints should be of type object, the " + "object passed is of type ".concat(l, "."), !0),
            !1
        }
        for (var c = ["autoGainControl", "channelCount", "echoCancellation", "latency", "noiseSuppression", "sampleRate", "sampleSize", "volume"], f = new Set(c), g = Object.keys(t), m = 0, y = g; m < y.length; m++) {
            var x = y[m];
            if (f.has(x))
                return i.logError("".concat(x, " is not supported videoConstaints."), !0),
                !1
        }
        return !0
    }
    ,
    e
}()
  , Ku = {
    exports: {}
};
(function(e, t) {
    (function(i, l) {
        l(t)
    }
    )(cs, function(i) {
        function l(E) {
            return E == null
        }
        var c = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(E, n) {
            E.__proto__ = n
        }
        || function(E, n) {
            for (var r in n)
                n.hasOwnProperty(r) && (E[r] = n[r])
        }
        ;
        function f(E, n) {
            c(E, n);
            function r() {
                this.constructor = E
            }
            E.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype,
            new r)
        }
        function g(E, n) {
            var r = Object.setPrototypeOf;
            r ? r(E, n) : E.__proto__ = n
        }
        function m(E, n) {
            n === void 0 && (n = E.constructor);
            var r = Error.captureStackTrace;
            r && r(E, n)
        }
        var y = function(E) {
            f(n, E);
            function n(r) {
                var s = this.constructor
                  , o = E.call(this, r) || this;
                return Object.defineProperty(o, "name", {
                    value: s.name,
                    enumerable: !1
                }),
                g(o, s.prototype),
                m(o),
                o
            }
            return n
        }(Error);
        class x extends y {
            constructor(n=void 0) {
                super(n),
                this.message = n
            }
            getKind() {
                return this.constructor.kind
            }
        }
        x.kind = "Exception";
        class S extends x {
        }
        S.kind = "ArgumentException";
        class v extends x {
        }
        v.kind = "IllegalArgumentException";
        class D {
            constructor(n) {
                if (this.binarizer = n,
                n === null)
                    throw new v("Binarizer must be non-null.")
            }
            getWidth() {
                return this.binarizer.getWidth()
            }
            getHeight() {
                return this.binarizer.getHeight()
            }
            getBlackRow(n, r) {
                return this.binarizer.getBlackRow(n, r)
            }
            getBlackMatrix() {
                return (this.matrix === null || this.matrix === void 0) && (this.matrix = this.binarizer.getBlackMatrix()),
                this.matrix
            }
            isCropSupported() {
                return this.binarizer.getLuminanceSource().isCropSupported()
            }
            crop(n, r, s, o) {
                const a = this.binarizer.getLuminanceSource().crop(n, r, s, o);
                return new D(this.binarizer.createBinarizer(a))
            }
            isRotateSupported() {
                return this.binarizer.getLuminanceSource().isRotateSupported()
            }
            rotateCounterClockwise() {
                const n = this.binarizer.getLuminanceSource().rotateCounterClockwise();
                return new D(this.binarizer.createBinarizer(n))
            }
            rotateCounterClockwise45() {
                const n = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
                return new D(this.binarizer.createBinarizer(n))
            }
            toString() {
                try {
                    return this.getBlackMatrix().toString()
                } catch {
                    return ""
                }
            }
        }
        class B extends x {
            static getChecksumInstance() {
                return new B
            }
        }
        B.kind = "ChecksumException";
        class k {
            constructor(n) {
                this.source = n
            }
            getLuminanceSource() {
                return this.source
            }
            getWidth() {
                return this.source.getWidth()
            }
            getHeight() {
                return this.source.getHeight()
            }
        }
        class M {
            static arraycopy(n, r, s, o, a) {
                for (; a--; )
                    s[o++] = n[r++]
            }
            static currentTimeMillis() {
                return Date.now()
            }
        }
        class X extends x {
        }
        X.kind = "IndexOutOfBoundsException";
        class O extends X {
            constructor(n=void 0, r=void 0) {
                super(r),
                this.index = n,
                this.message = r
            }
        }
        O.kind = "ArrayIndexOutOfBoundsException";
        class _ {
            static fill(n, r) {
                for (let s = 0, o = n.length; s < o; s++)
                    n[s] = r
            }
            static fillWithin(n, r, s, o) {
                _.rangeCheck(n.length, r, s);
                for (let a = r; a < s; a++)
                    n[a] = o
            }
            static rangeCheck(n, r, s) {
                if (r > s)
                    throw new v("fromIndex(" + r + ") > toIndex(" + s + ")");
                if (r < 0)
                    throw new O(r);
                if (s > n)
                    throw new O(s)
            }
            static asList(...n) {
                return n
            }
            static create(n, r, s) {
                return Array.from({
                    length: n
                }).map(a=>Array.from({
                    length: r
                }).fill(s))
            }
            static createInt32Array(n, r, s) {
                return Array.from({
                    length: n
                }).map(a=>Int32Array.from({
                    length: r
                }).fill(s))
            }
            static equals(n, r) {
                if (!n || !r || !n.length || !r.length || n.length !== r.length)
                    return !1;
                for (let s = 0, o = n.length; s < o; s++)
                    if (n[s] !== r[s])
                        return !1;
                return !0
            }
            static hashCode(n) {
                if (n === null)
                    return 0;
                let r = 1;
                for (const s of n)
                    r = 31 * r + s;
                return r
            }
            static fillUint8Array(n, r) {
                for (let s = 0; s !== n.length; s++)
                    n[s] = r
            }
            static copyOf(n, r) {
                return n.slice(0, r)
            }
            static copyOfUint8Array(n, r) {
                if (n.length <= r) {
                    const s = new Uint8Array(r);
                    return s.set(n),
                    s
                }
                return n.slice(0, r)
            }
            static copyOfRange(n, r, s) {
                const o = s - r
                  , a = new Int32Array(o);
                return M.arraycopy(n, r, a, 0, o),
                a
            }
            static binarySearch(n, r, s) {
                s === void 0 && (s = _.numberComparator);
                let o = 0
                  , a = n.length - 1;
                for (; o <= a; ) {
                    const u = a + o >> 1
                      , d = s(r, n[u]);
                    if (d > 0)
                        o = u + 1;
                    else if (d < 0)
                        a = u - 1;
                    else
                        return u
                }
                return -o - 1
            }
            static numberComparator(n, r) {
                return n - r
            }
        }
        class N {
            static numberOfTrailingZeros(n) {
                let r;
                if (n === 0)
                    return 32;
                let s = 31;
                return r = n << 16,
                r !== 0 && (s -= 16,
                n = r),
                r = n << 8,
                r !== 0 && (s -= 8,
                n = r),
                r = n << 4,
                r !== 0 && (s -= 4,
                n = r),
                r = n << 2,
                r !== 0 && (s -= 2,
                n = r),
                s - (n << 1 >>> 31)
            }
            static numberOfLeadingZeros(n) {
                if (n === 0)
                    return 32;
                let r = 1;
                return n >>> 16 || (r += 16,
                n <<= 16),
                n >>> 24 || (r += 8,
                n <<= 8),
                n >>> 28 || (r += 4,
                n <<= 4),
                n >>> 30 || (r += 2,
                n <<= 2),
                r -= n >>> 31,
                r
            }
            static toHexString(n) {
                return n.toString(16)
            }
            static toBinaryString(n) {
                return String(parseInt(String(n), 2))
            }
            static bitCount(n) {
                return n = n - (n >>> 1 & 1431655765),
                n = (n & 858993459) + (n >>> 2 & 858993459),
                n = n + (n >>> 4) & 252645135,
                n = n + (n >>> 8),
                n = n + (n >>> 16),
                n & 63
            }
            static truncDivision(n, r) {
                return Math.trunc(n / r)
            }
            static parseInt(n, r=void 0) {
                return parseInt(n, r)
            }
        }
        N.MIN_VALUE_32_BITS = -2147483648,
        N.MAX_VALUE = Number.MAX_SAFE_INTEGER;
        class V {
            constructor(n, r) {
                n === void 0 ? (this.size = 0,
                this.bits = new Int32Array(1)) : (this.size = n,
                r == null ? this.bits = V.makeArray(n) : this.bits = r)
            }
            getSize() {
                return this.size
            }
            getSizeInBytes() {
                return Math.floor((this.size + 7) / 8)
            }
            ensureCapacity(n) {
                if (n > this.bits.length * 32) {
                    const r = V.makeArray(n);
                    M.arraycopy(this.bits, 0, r, 0, this.bits.length),
                    this.bits = r
                }
            }
            get(n) {
                return (this.bits[Math.floor(n / 32)] & 1 << (n & 31)) !== 0
            }
            set(n) {
                this.bits[Math.floor(n / 32)] |= 1 << (n & 31)
            }
            flip(n) {
                this.bits[Math.floor(n / 32)] ^= 1 << (n & 31)
            }
            getNextSet(n) {
                const r = this.size;
                if (n >= r)
                    return r;
                const s = this.bits;
                let o = Math.floor(n / 32)
                  , a = s[o];
                a &= ~((1 << (n & 31)) - 1);
                const u = s.length;
                for (; a === 0; ) {
                    if (++o === u)
                        return r;
                    a = s[o]
                }
                const d = o * 32 + N.numberOfTrailingZeros(a);
                return d > r ? r : d
            }
            getNextUnset(n) {
                const r = this.size;
                if (n >= r)
                    return r;
                const s = this.bits;
                let o = Math.floor(n / 32)
                  , a = ~s[o];
                a &= ~((1 << (n & 31)) - 1);
                const u = s.length;
                for (; a === 0; ) {
                    if (++o === u)
                        return r;
                    a = ~s[o]
                }
                const d = o * 32 + N.numberOfTrailingZeros(a);
                return d > r ? r : d
            }
            setBulk(n, r) {
                this.bits[Math.floor(n / 32)] = r
            }
            setRange(n, r) {
                if (r < n || n < 0 || r > this.size)
                    throw new v;
                if (r === n)
                    return;
                r--;
                const s = Math.floor(n / 32)
                  , o = Math.floor(r / 32)
                  , a = this.bits;
                for (let u = s; u <= o; u++) {
                    const d = u > s ? 0 : n & 31
                      , p = (2 << (u < o ? 31 : r & 31)) - (1 << d);
                    a[u] |= p
                }
            }
            clear() {
                const n = this.bits.length
                  , r = this.bits;
                for (let s = 0; s < n; s++)
                    r[s] = 0
            }
            isRange(n, r, s) {
                if (r < n || n < 0 || r > this.size)
                    throw new v;
                if (r === n)
                    return !0;
                r--;
                const o = Math.floor(n / 32)
                  , a = Math.floor(r / 32)
                  , u = this.bits;
                for (let d = o; d <= a; d++) {
                    const h = d > o ? 0 : n & 31
                      , w = (2 << (d < a ? 31 : r & 31)) - (1 << h) & 4294967295;
                    if ((u[d] & w) !== (s ? w : 0))
                        return !1
                }
                return !0
            }
            appendBit(n) {
                this.ensureCapacity(this.size + 1),
                n && (this.bits[Math.floor(this.size / 32)] |= 1 << (this.size & 31)),
                this.size++
            }
            appendBits(n, r) {
                if (r < 0 || r > 32)
                    throw new v("Num bits must be between 0 and 32");
                this.ensureCapacity(this.size + r);
                for (let s = r; s > 0; s--)
                    this.appendBit((n >> s - 1 & 1) === 1)
            }
            appendBitArray(n) {
                const r = n.size;
                this.ensureCapacity(this.size + r);
                for (let s = 0; s < r; s++)
                    this.appendBit(n.get(s))
            }
            xor(n) {
                if (this.size !== n.size)
                    throw new v("Sizes don't match");
                const r = this.bits;
                for (let s = 0, o = r.length; s < o; s++)
                    r[s] ^= n.bits[s]
            }
            toBytes(n, r, s, o) {
                for (let a = 0; a < o; a++) {
                    let u = 0;
                    for (let d = 0; d < 8; d++)
                        this.get(n) && (u |= 1 << 7 - d),
                        n++;
                    r[s + a] = u
                }
            }
            getBitArray() {
                return this.bits
            }
            reverse() {
                const n = new Int32Array(this.bits.length)
                  , r = Math.floor((this.size - 1) / 32)
                  , s = r + 1
                  , o = this.bits;
                for (let a = 0; a < s; a++) {
                    let u = o[a];
                    u = u >> 1 & 1431655765 | (u & 1431655765) << 1,
                    u = u >> 2 & 858993459 | (u & 858993459) << 2,
                    u = u >> 4 & 252645135 | (u & 252645135) << 4,
                    u = u >> 8 & 16711935 | (u & 16711935) << 8,
                    u = u >> 16 & 65535 | (u & 65535) << 16,
                    n[r - a] = u
                }
                if (this.size !== s * 32) {
                    const a = s * 32 - this.size;
                    let u = n[0] >>> a;
                    for (let d = 1; d < s; d++) {
                        const h = n[d];
                        u |= h << 32 - a,
                        n[d - 1] = u,
                        u = h >>> a
                    }
                    n[s - 1] = u
                }
                this.bits = n
            }
            static makeArray(n) {
                return new Int32Array(Math.floor((n + 31) / 32))
            }
            equals(n) {
                if (!(n instanceof V))
                    return !1;
                const r = n;
                return this.size === r.size && _.equals(this.bits, r.bits)
            }
            hashCode() {
                return 31 * this.size + _.hashCode(this.bits)
            }
            toString() {
                let n = "";
                for (let r = 0, s = this.size; r < s; r++)
                    r & 7 || (n += " "),
                    n += this.get(r) ? "X" : ".";
                return n
            }
            clone() {
                return new V(this.size,this.bits.slice())
            }
        }
        var te;
        (function(E) {
            E[E.OTHER = 0] = "OTHER",
            E[E.PURE_BARCODE = 1] = "PURE_BARCODE",
            E[E.POSSIBLE_FORMATS = 2] = "POSSIBLE_FORMATS",
            E[E.TRY_HARDER = 3] = "TRY_HARDER",
            E[E.CHARACTER_SET = 4] = "CHARACTER_SET",
            E[E.ALLOWED_LENGTHS = 5] = "ALLOWED_LENGTHS",
            E[E.ASSUME_CODE_39_CHECK_DIGIT = 6] = "ASSUME_CODE_39_CHECK_DIGIT",
            E[E.ASSUME_GS1 = 7] = "ASSUME_GS1",
            E[E.RETURN_CODABAR_START_END = 8] = "RETURN_CODABAR_START_END",
            E[E.NEED_RESULT_POINT_CALLBACK = 9] = "NEED_RESULT_POINT_CALLBACK",
            E[E.ALLOWED_EAN_EXTENSIONS = 10] = "ALLOWED_EAN_EXTENSIONS"
        }
        )(te || (te = {}));
        var Z = te;
        class F extends x {
            static getFormatInstance() {
                return new F
            }
        }
        F.kind = "FormatException";
        var $;
        (function(E) {
            E[E.Cp437 = 0] = "Cp437",
            E[E.ISO8859_1 = 1] = "ISO8859_1",
            E[E.ISO8859_2 = 2] = "ISO8859_2",
            E[E.ISO8859_3 = 3] = "ISO8859_3",
            E[E.ISO8859_4 = 4] = "ISO8859_4",
            E[E.ISO8859_5 = 5] = "ISO8859_5",
            E[E.ISO8859_6 = 6] = "ISO8859_6",
            E[E.ISO8859_7 = 7] = "ISO8859_7",
            E[E.ISO8859_8 = 8] = "ISO8859_8",
            E[E.ISO8859_9 = 9] = "ISO8859_9",
            E[E.ISO8859_10 = 10] = "ISO8859_10",
            E[E.ISO8859_11 = 11] = "ISO8859_11",
            E[E.ISO8859_13 = 12] = "ISO8859_13",
            E[E.ISO8859_14 = 13] = "ISO8859_14",
            E[E.ISO8859_15 = 14] = "ISO8859_15",
            E[E.ISO8859_16 = 15] = "ISO8859_16",
            E[E.SJIS = 16] = "SJIS",
            E[E.Cp1250 = 17] = "Cp1250",
            E[E.Cp1251 = 18] = "Cp1251",
            E[E.Cp1252 = 19] = "Cp1252",
            E[E.Cp1256 = 20] = "Cp1256",
            E[E.UnicodeBigUnmarked = 21] = "UnicodeBigUnmarked",
            E[E.UTF8 = 22] = "UTF8",
            E[E.ASCII = 23] = "ASCII",
            E[E.Big5 = 24] = "Big5",
            E[E.GB18030 = 25] = "GB18030",
            E[E.EUC_KR = 26] = "EUC_KR"
        }
        )($ || ($ = {}));
        class W {
            constructor(n, r, s, ...o) {
                this.valueIdentifier = n,
                this.name = s,
                typeof r == "number" ? this.values = Int32Array.from([r]) : this.values = r,
                this.otherEncodingNames = o,
                W.VALUE_IDENTIFIER_TO_ECI.set(n, this),
                W.NAME_TO_ECI.set(s, this);
                const a = this.values;
                for (let u = 0, d = a.length; u !== d; u++) {
                    const h = a[u];
                    W.VALUES_TO_ECI.set(h, this)
                }
                for (const u of o)
                    W.NAME_TO_ECI.set(u, this)
            }
            getValueIdentifier() {
                return this.valueIdentifier
            }
            getName() {
                return this.name
            }
            getValue() {
                return this.values[0]
            }
            static getCharacterSetECIByValue(n) {
                if (n < 0 || n >= 900)
                    throw new F("incorect value");
                const r = W.VALUES_TO_ECI.get(n);
                if (r === void 0)
                    throw new F("incorect value");
                return r
            }
            static getCharacterSetECIByName(n) {
                const r = W.NAME_TO_ECI.get(n);
                if (r === void 0)
                    throw new F("incorect value");
                return r
            }
            equals(n) {
                if (!(n instanceof W))
                    return !1;
                const r = n;
                return this.getName() === r.getName()
            }
        }
        W.VALUE_IDENTIFIER_TO_ECI = new Map,
        W.VALUES_TO_ECI = new Map,
        W.NAME_TO_ECI = new Map,
        W.Cp437 = new W($.Cp437,Int32Array.from([0, 2]),"Cp437"),
        W.ISO8859_1 = new W($.ISO8859_1,Int32Array.from([1, 3]),"ISO-8859-1","ISO88591","ISO8859_1"),
        W.ISO8859_2 = new W($.ISO8859_2,4,"ISO-8859-2","ISO88592","ISO8859_2"),
        W.ISO8859_3 = new W($.ISO8859_3,5,"ISO-8859-3","ISO88593","ISO8859_3"),
        W.ISO8859_4 = new W($.ISO8859_4,6,"ISO-8859-4","ISO88594","ISO8859_4"),
        W.ISO8859_5 = new W($.ISO8859_5,7,"ISO-8859-5","ISO88595","ISO8859_5"),
        W.ISO8859_6 = new W($.ISO8859_6,8,"ISO-8859-6","ISO88596","ISO8859_6"),
        W.ISO8859_7 = new W($.ISO8859_7,9,"ISO-8859-7","ISO88597","ISO8859_7"),
        W.ISO8859_8 = new W($.ISO8859_8,10,"ISO-8859-8","ISO88598","ISO8859_8"),
        W.ISO8859_9 = new W($.ISO8859_9,11,"ISO-8859-9","ISO88599","ISO8859_9"),
        W.ISO8859_10 = new W($.ISO8859_10,12,"ISO-8859-10","ISO885910","ISO8859_10"),
        W.ISO8859_11 = new W($.ISO8859_11,13,"ISO-8859-11","ISO885911","ISO8859_11"),
        W.ISO8859_13 = new W($.ISO8859_13,15,"ISO-8859-13","ISO885913","ISO8859_13"),
        W.ISO8859_14 = new W($.ISO8859_14,16,"ISO-8859-14","ISO885914","ISO8859_14"),
        W.ISO8859_15 = new W($.ISO8859_15,17,"ISO-8859-15","ISO885915","ISO8859_15"),
        W.ISO8859_16 = new W($.ISO8859_16,18,"ISO-8859-16","ISO885916","ISO8859_16"),
        W.SJIS = new W($.SJIS,20,"SJIS","Shift_JIS"),
        W.Cp1250 = new W($.Cp1250,21,"Cp1250","windows-1250"),
        W.Cp1251 = new W($.Cp1251,22,"Cp1251","windows-1251"),
        W.Cp1252 = new W($.Cp1252,23,"Cp1252","windows-1252"),
        W.Cp1256 = new W($.Cp1256,24,"Cp1256","windows-1256"),
        W.UnicodeBigUnmarked = new W($.UnicodeBigUnmarked,25,"UnicodeBigUnmarked","UTF-16BE","UnicodeBig"),
        W.UTF8 = new W($.UTF8,26,"UTF8","UTF-8"),
        W.ASCII = new W($.ASCII,Int32Array.from([27, 170]),"ASCII","US-ASCII"),
        W.Big5 = new W($.Big5,28,"Big5"),
        W.GB18030 = new W($.GB18030,29,"GB18030","GB2312","EUC_CN","GBK"),
        W.EUC_KR = new W($.EUC_KR,30,"EUC_KR","EUC-KR");
        class me extends x {
        }
        me.kind = "UnsupportedOperationException";
        class Ue {
            static decode(n, r) {
                const s = this.encodingName(r);
                return this.customDecoder ? this.customDecoder(n, s) : typeof TextDecoder > "u" || this.shouldDecodeOnFallback(s) ? this.decodeFallback(n, s) : new TextDecoder(s).decode(n)
            }
            static shouldDecodeOnFallback(n) {
                return !Ue.isBrowser() && n === "ISO-8859-1"
            }
            static encode(n, r) {
                const s = this.encodingName(r);
                return this.customEncoder ? this.customEncoder(n, s) : typeof TextEncoder > "u" ? this.encodeFallback(n) : new TextEncoder().encode(n)
            }
            static isBrowser() {
                return typeof window < "u" && {}.toString.call(window) === "[object Window]"
            }
            static encodingName(n) {
                return typeof n == "string" ? n : n.getName()
            }
            static encodingCharacterSet(n) {
                return n instanceof W ? n : W.getCharacterSetECIByName(n)
            }
            static decodeFallback(n, r) {
                const s = this.encodingCharacterSet(r);
                if (Ue.isDecodeFallbackSupported(s)) {
                    let o = "";
                    for (let a = 0, u = n.length; a < u; a++) {
                        let d = n[a].toString(16);
                        d.length < 2 && (d = "0" + d),
                        o += "%" + d
                    }
                    return decodeURIComponent(o)
                }
                if (s.equals(W.UnicodeBigUnmarked))
                    return String.fromCharCode.apply(null, new Uint16Array(n.buffer));
                throw new me(`Encoding ${this.encodingName(r)} not supported by fallback.`)
            }
            static isDecodeFallbackSupported(n) {
                return n.equals(W.UTF8) || n.equals(W.ISO8859_1) || n.equals(W.ASCII)
            }
            static encodeFallback(n) {
                const s = btoa(unescape(encodeURIComponent(n))).split("")
                  , o = [];
                for (let a = 0; a < s.length; a++)
                    o.push(s[a].charCodeAt(0));
                return new Uint8Array(o)
            }
        }
        class fe {
            static castAsNonUtf8Char(n, r=null) {
                const s = r ? r.getName() : this.ISO88591;
                return Ue.decode(new Uint8Array([n]), s)
            }
            static guessEncoding(n, r) {
                if (r != null && r.get(Z.CHARACTER_SET) !== void 0)
                    return r.get(Z.CHARACTER_SET).toString();
                const s = n.length;
                let o = !0
                  , a = !0
                  , u = !0
                  , d = 0
                  , h = 0
                  , p = 0
                  , w = 0
                  , C = 0
                  , A = 0
                  , T = 0
                  , R = 0
                  , b = 0
                  , P = 0
                  , z = 0;
                const Q = n.length > 3 && n[0] === 239 && n[1] === 187 && n[2] === 191;
                for (let J = 0; J < s && (o || a || u); J++) {
                    const Y = n[J] & 255;
                    u && (d > 0 ? Y & 128 ? d-- : u = !1 : Y & 128 && (Y & 64 ? (d++,
                    Y & 32 ? (d++,
                    Y & 16 ? (d++,
                    Y & 8 ? u = !1 : w++) : p++) : h++) : u = !1)),
                    o && (Y > 127 && Y < 160 ? o = !1 : Y > 159 && (Y < 192 || Y === 215 || Y === 247) && z++),
                    a && (C > 0 ? Y < 64 || Y === 127 || Y > 252 ? a = !1 : C-- : Y === 128 || Y === 160 || Y > 239 ? a = !1 : Y > 160 && Y < 224 ? (A++,
                    R = 0,
                    T++,
                    T > b && (b = T)) : Y > 127 ? (C++,
                    T = 0,
                    R++,
                    R > P && (P = R)) : (T = 0,
                    R = 0))
                }
                return u && d > 0 && (u = !1),
                a && C > 0 && (a = !1),
                u && (Q || h + p + w > 0) ? fe.UTF8 : a && (fe.ASSUME_SHIFT_JIS || b >= 3 || P >= 3) ? fe.SHIFT_JIS : o && a ? b === 2 && A === 2 || z * 10 >= s ? fe.SHIFT_JIS : fe.ISO88591 : o ? fe.ISO88591 : a ? fe.SHIFT_JIS : u ? fe.UTF8 : fe.PLATFORM_DEFAULT_ENCODING
            }
            static format(n, ...r) {
                let s = -1;
                function o(u, d, h, p, w, C) {
                    if (u === "%%")
                        return "%";
                    if (r[++s] === void 0)
                        return;
                    u = p ? parseInt(p.substr(1)) : void 0;
                    let A = w ? parseInt(w.substr(1)) : void 0, T;
                    switch (C) {
                    case "s":
                        T = r[s];
                        break;
                    case "c":
                        T = r[s][0];
                        break;
                    case "f":
                        T = parseFloat(r[s]).toFixed(u);
                        break;
                    case "p":
                        T = parseFloat(r[s]).toPrecision(u);
                        break;
                    case "e":
                        T = parseFloat(r[s]).toExponential(u);
                        break;
                    case "x":
                        T = parseInt(r[s]).toString(A || 16);
                        break;
                    case "d":
                        T = parseFloat(parseInt(r[s], A || 10).toPrecision(u)).toFixed(0);
                        break
                    }
                    T = typeof T == "object" ? JSON.stringify(T) : (+T).toString(A);
                    let R = parseInt(h)
                      , b = h && h[0] + "" == "0" ? "0" : " ";
                    for (; T.length < R; )
                        T = d !== void 0 ? T + b : b + T;
                    return T
                }
                let a = /%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g;
                return n.replace(a, o)
            }
            static getBytes(n, r) {
                return Ue.encode(n, r)
            }
            static getCharCode(n, r=0) {
                return n.charCodeAt(r)
            }
            static getCharAt(n) {
                return String.fromCharCode(n)
            }
        }
        fe.SHIFT_JIS = W.SJIS.getName(),
        fe.GB2312 = "GB2312",
        fe.ISO88591 = W.ISO8859_1.getName(),
        fe.EUC_JP = "EUC_JP",
        fe.UTF8 = W.UTF8.getName(),
        fe.PLATFORM_DEFAULT_ENCODING = fe.UTF8,
        fe.ASSUME_SHIFT_JIS = !1;
        class Ie {
            constructor(n="") {
                this.value = n
            }
            enableDecoding(n) {
                return this.encoding = n,
                this
            }
            append(n) {
                return typeof n == "string" ? this.value += n.toString() : this.encoding ? this.value += fe.castAsNonUtf8Char(n, this.encoding) : this.value += String.fromCharCode(n),
                this
            }
            appendChars(n, r, s) {
                for (let o = r; r < r + s; o++)
                    this.append(n[o]);
                return this
            }
            length() {
                return this.value.length
            }
            charAt(n) {
                return this.value.charAt(n)
            }
            deleteCharAt(n) {
                this.value = this.value.substr(0, n) + this.value.substring(n + 1)
            }
            setCharAt(n, r) {
                this.value = this.value.substr(0, n) + r + this.value.substr(n + 1)
            }
            substring(n, r) {
                return this.value.substring(n, r)
            }
            setLengthToZero() {
                this.value = ""
            }
            toString() {
                return this.value
            }
            insert(n, r) {
                this.value = this.value.substr(0, n) + r + this.value.substr(n + r.length)
            }
        }
        class lt {
            constructor(n, r, s, o) {
                if (this.width = n,
                this.height = r,
                this.rowSize = s,
                this.bits = o,
                r == null && (r = n),
                this.height = r,
                n < 1 || r < 1)
                    throw new v("Both dimensions must be greater than 0");
                s == null && (s = Math.floor((n + 31) / 32)),
                this.rowSize = s,
                o == null && (this.bits = new Int32Array(this.rowSize * this.height))
            }
            static parseFromBooleanArray(n) {
                const r = n.length
                  , s = n[0].length
                  , o = new lt(s,r);
                for (let a = 0; a < r; a++) {
                    const u = n[a];
                    for (let d = 0; d < s; d++)
                        u[d] && o.set(d, a)
                }
                return o
            }
            static parseFromString(n, r, s) {
                if (n === null)
                    throw new v("stringRepresentation cannot be null");
                const o = new Array(n.length);
                let a = 0
                  , u = 0
                  , d = -1
                  , h = 0
                  , p = 0;
                for (; p < n.length; )
                    if (n.charAt(p) === `
` || n.charAt(p) === "\r") {
                        if (a > u) {
                            if (d === -1)
                                d = a - u;
                            else if (a - u !== d)
                                throw new v("row lengths do not match");
                            u = a,
                            h++
                        }
                        p++
                    } else if (n.substring(p, p + r.length) === r)
                        p += r.length,
                        o[a] = !0,
                        a++;
                    else if (n.substring(p, p + s.length) === s)
                        p += s.length,
                        o[a] = !1,
                        a++;
                    else
                        throw new v("illegal character encountered: " + n.substring(p));
                if (a > u) {
                    if (d === -1)
                        d = a - u;
                    else if (a - u !== d)
                        throw new v("row lengths do not match");
                    h++
                }
                const w = new lt(d,h);
                for (let C = 0; C < a; C++)
                    o[C] && w.set(Math.floor(C % d), Math.floor(C / d));
                return w
            }
            get(n, r) {
                const s = r * this.rowSize + Math.floor(n / 32);
                return (this.bits[s] >>> (n & 31) & 1) !== 0
            }
            set(n, r) {
                const s = r * this.rowSize + Math.floor(n / 32);
                this.bits[s] |= 1 << (n & 31) & 4294967295
            }
            unset(n, r) {
                const s = r * this.rowSize + Math.floor(n / 32);
                this.bits[s] &= ~(1 << (n & 31) & 4294967295)
            }
            flip(n, r) {
                const s = r * this.rowSize + Math.floor(n / 32);
                this.bits[s] ^= 1 << (n & 31) & 4294967295
            }
            xor(n) {
                if (this.width !== n.getWidth() || this.height !== n.getHeight() || this.rowSize !== n.getRowSize())
                    throw new v("input matrix dimensions do not match");
                const r = new V(Math.floor(this.width / 32) + 1)
                  , s = this.rowSize
                  , o = this.bits;
                for (let a = 0, u = this.height; a < u; a++) {
                    const d = a * s
                      , h = n.getRow(a, r).getBitArray();
                    for (let p = 0; p < s; p++)
                        o[d + p] ^= h[p]
                }
            }
            clear() {
                const n = this.bits
                  , r = n.length;
                for (let s = 0; s < r; s++)
                    n[s] = 0
            }
            setRegion(n, r, s, o) {
                if (r < 0 || n < 0)
                    throw new v("Left and top must be nonnegative");
                if (o < 1 || s < 1)
                    throw new v("Height and width must be at least 1");
                const a = n + s
                  , u = r + o;
                if (u > this.height || a > this.width)
                    throw new v("The region must fit inside the matrix");
                const d = this.rowSize
                  , h = this.bits;
                for (let p = r; p < u; p++) {
                    const w = p * d;
                    for (let C = n; C < a; C++)
                        h[w + Math.floor(C / 32)] |= 1 << (C & 31) & 4294967295
                }
            }
            getRow(n, r) {
                r == null || r.getSize() < this.width ? r = new V(this.width) : r.clear();
                const s = this.rowSize
                  , o = this.bits
                  , a = n * s;
                for (let u = 0; u < s; u++)
                    r.setBulk(u * 32, o[a + u]);
                return r
            }
            setRow(n, r) {
                M.arraycopy(r.getBitArray(), 0, this.bits, n * this.rowSize, this.rowSize)
            }
            rotate180() {
                const n = this.getWidth()
                  , r = this.getHeight();
                let s = new V(n)
                  , o = new V(n);
                for (let a = 0, u = Math.floor((r + 1) / 2); a < u; a++)
                    s = this.getRow(a, s),
                    o = this.getRow(r - 1 - a, o),
                    s.reverse(),
                    o.reverse(),
                    this.setRow(a, o),
                    this.setRow(r - 1 - a, s)
            }
            getEnclosingRectangle() {
                const n = this.width
                  , r = this.height
                  , s = this.rowSize
                  , o = this.bits;
                let a = n
                  , u = r
                  , d = -1
                  , h = -1;
                for (let p = 0; p < r; p++)
                    for (let w = 0; w < s; w++) {
                        const C = o[p * s + w];
                        if (C !== 0) {
                            if (p < u && (u = p),
                            p > h && (h = p),
                            w * 32 < a) {
                                let A = 0;
                                for (; !(C << 31 - A & 4294967295); )
                                    A++;
                                w * 32 + A < a && (a = w * 32 + A)
                            }
                            if (w * 32 + 31 > d) {
                                let A = 31;
                                for (; !(C >>> A); )
                                    A--;
                                w * 32 + A > d && (d = w * 32 + A)
                            }
                        }
                    }
                return d < a || h < u ? null : Int32Array.from([a, u, d - a + 1, h - u + 1])
            }
            getTopLeftOnBit() {
                const n = this.rowSize
                  , r = this.bits;
                let s = 0;
                for (; s < r.length && r[s] === 0; )
                    s++;
                if (s === r.length)
                    return null;
                const o = s / n;
                let a = s % n * 32;
                const u = r[s];
                let d = 0;
                for (; !(u << 31 - d & 4294967295); )
                    d++;
                return a += d,
                Int32Array.from([a, o])
            }
            getBottomRightOnBit() {
                const n = this.rowSize
                  , r = this.bits;
                let s = r.length - 1;
                for (; s >= 0 && r[s] === 0; )
                    s--;
                if (s < 0)
                    return null;
                const o = Math.floor(s / n);
                let a = Math.floor(s % n) * 32;
                const u = r[s];
                let d = 31;
                for (; !(u >>> d); )
                    d--;
                return a += d,
                Int32Array.from([a, o])
            }
            getWidth() {
                return this.width
            }
            getHeight() {
                return this.height
            }
            getRowSize() {
                return this.rowSize
            }
            equals(n) {
                if (!(n instanceof lt))
                    return !1;
                const r = n;
                return this.width === r.width && this.height === r.height && this.rowSize === r.rowSize && _.equals(this.bits, r.bits)
            }
            hashCode() {
                let n = this.width;
                return n = 31 * n + this.width,
                n = 31 * n + this.height,
                n = 31 * n + this.rowSize,
                n = 31 * n + _.hashCode(this.bits),
                n
            }
            toString(n="X ", r="  ", s=`
`) {
                return this.buildToString(n, r, s)
            }
            buildToString(n, r, s) {
                let o = new Ie;
                for (let a = 0, u = this.height; a < u; a++) {
                    for (let d = 0, h = this.width; d < h; d++)
                        o.append(this.get(d, a) ? n : r);
                    o.append(s)
                }
                return o.toString()
            }
            clone() {
                return new lt(this.width,this.height,this.rowSize,this.bits.slice())
            }
        }
        class j extends x {
            static getNotFoundInstance() {
                return new j
            }
        }
        j.kind = "NotFoundException";
        class tt extends k {
            constructor(n) {
                super(n),
                this.luminances = tt.EMPTY,
                this.buckets = new Int32Array(tt.LUMINANCE_BUCKETS)
            }
            getBlackRow(n, r) {
                const s = this.getLuminanceSource()
                  , o = s.getWidth();
                r == null || r.getSize() < o ? r = new V(o) : r.clear(),
                this.initArrays(o);
                const a = s.getRow(n, this.luminances)
                  , u = this.buckets;
                for (let h = 0; h < o; h++)
                    u[(a[h] & 255) >> tt.LUMINANCE_SHIFT]++;
                const d = tt.estimateBlackPoint(u);
                if (o < 3)
                    for (let h = 0; h < o; h++)
                        (a[h] & 255) < d && r.set(h);
                else {
                    let h = a[0] & 255
                      , p = a[1] & 255;
                    for (let w = 1; w < o - 1; w++) {
                        const C = a[w + 1] & 255;
                        (p * 4 - h - C) / 2 < d && r.set(w),
                        h = p,
                        p = C
                    }
                }
                return r
            }
            getBlackMatrix() {
                const n = this.getLuminanceSource()
                  , r = n.getWidth()
                  , s = n.getHeight()
                  , o = new lt(r,s);
                this.initArrays(r);
                const a = this.buckets;
                for (let h = 1; h < 5; h++) {
                    const p = Math.floor(s * h / 5)
                      , w = n.getRow(p, this.luminances)
                      , C = Math.floor(r * 4 / 5);
                    for (let A = Math.floor(r / 5); A < C; A++) {
                        const T = w[A] & 255;
                        a[T >> tt.LUMINANCE_SHIFT]++
                    }
                }
                const u = tt.estimateBlackPoint(a)
                  , d = n.getMatrix();
                for (let h = 0; h < s; h++) {
                    const p = h * r;
                    for (let w = 0; w < r; w++)
                        (d[p + w] & 255) < u && o.set(w, h)
                }
                return o
            }
            createBinarizer(n) {
                return new tt(n)
            }
            initArrays(n) {
                this.luminances.length < n && (this.luminances = new Uint8ClampedArray(n));
                const r = this.buckets;
                for (let s = 0; s < tt.LUMINANCE_BUCKETS; s++)
                    r[s] = 0
            }
            static estimateBlackPoint(n) {
                const r = n.length;
                let s = 0
                  , o = 0
                  , a = 0;
                for (let w = 0; w < r; w++)
                    n[w] > a && (o = w,
                    a = n[w]),
                    n[w] > s && (s = n[w]);
                let u = 0
                  , d = 0;
                for (let w = 0; w < r; w++) {
                    const C = w - o
                      , A = n[w] * C * C;
                    A > d && (u = w,
                    d = A)
                }
                if (o > u) {
                    const w = o;
                    o = u,
                    u = w
                }
                if (u - o <= r / 16)
                    throw new j;
                let h = u - 1
                  , p = -1;
                for (let w = u - 1; w > o; w--) {
                    const C = w - o
                      , A = C * C * (u - w) * (s - n[w]);
                    A > p && (h = w,
                    p = A)
                }
                return h << tt.LUMINANCE_SHIFT
            }
        }
        tt.LUMINANCE_BITS = 5,
        tt.LUMINANCE_SHIFT = 8 - tt.LUMINANCE_BITS,
        tt.LUMINANCE_BUCKETS = 1 << tt.LUMINANCE_BITS,
        tt.EMPTY = Uint8ClampedArray.from([0]);
        class xe extends tt {
            constructor(n) {
                super(n),
                this.matrix = null
            }
            getBlackMatrix() {
                if (this.matrix !== null)
                    return this.matrix;
                const n = this.getLuminanceSource()
                  , r = n.getWidth()
                  , s = n.getHeight();
                if (r >= xe.MINIMUM_DIMENSION && s >= xe.MINIMUM_DIMENSION) {
                    const o = n.getMatrix();
                    let a = r >> xe.BLOCK_SIZE_POWER;
                    r & xe.BLOCK_SIZE_MASK && a++;
                    let u = s >> xe.BLOCK_SIZE_POWER;
                    s & xe.BLOCK_SIZE_MASK && u++;
                    const d = xe.calculateBlackPoints(o, a, u, r, s)
                      , h = new lt(r,s);
                    xe.calculateThresholdForBlock(o, a, u, r, s, d, h),
                    this.matrix = h
                } else
                    this.matrix = super.getBlackMatrix();
                return this.matrix
            }
            createBinarizer(n) {
                return new xe(n)
            }
            static calculateThresholdForBlock(n, r, s, o, a, u, d) {
                const h = a - xe.BLOCK_SIZE
                  , p = o - xe.BLOCK_SIZE;
                for (let w = 0; w < s; w++) {
                    let C = w << xe.BLOCK_SIZE_POWER;
                    C > h && (C = h);
                    const A = xe.cap(w, 2, s - 3);
                    for (let T = 0; T < r; T++) {
                        let R = T << xe.BLOCK_SIZE_POWER;
                        R > p && (R = p);
                        const b = xe.cap(T, 2, r - 3);
                        let P = 0;
                        for (let Q = -2; Q <= 2; Q++) {
                            const J = u[A + Q];
                            P += J[b - 2] + J[b - 1] + J[b] + J[b + 1] + J[b + 2]
                        }
                        const z = P / 25;
                        xe.thresholdBlock(n, R, C, z, o, d)
                    }
                }
            }
            static cap(n, r, s) {
                return n < r ? r : n > s ? s : n
            }
            static thresholdBlock(n, r, s, o, a, u) {
                for (let d = 0, h = s * a + r; d < xe.BLOCK_SIZE; d++,
                h += a)
                    for (let p = 0; p < xe.BLOCK_SIZE; p++)
                        (n[h + p] & 255) <= o && u.set(r + p, s + d)
            }
            static calculateBlackPoints(n, r, s, o, a) {
                const u = a - xe.BLOCK_SIZE
                  , d = o - xe.BLOCK_SIZE
                  , h = new Array(s);
                for (let p = 0; p < s; p++) {
                    h[p] = new Int32Array(r);
                    let w = p << xe.BLOCK_SIZE_POWER;
                    w > u && (w = u);
                    for (let C = 0; C < r; C++) {
                        let A = C << xe.BLOCK_SIZE_POWER;
                        A > d && (A = d);
                        let T = 0
                          , R = 255
                          , b = 0;
                        for (let z = 0, Q = w * o + A; z < xe.BLOCK_SIZE; z++,
                        Q += o) {
                            for (let J = 0; J < xe.BLOCK_SIZE; J++) {
                                const Y = n[Q + J] & 255;
                                T += Y,
                                Y < R && (R = Y),
                                Y > b && (b = Y)
                            }
                            if (b - R > xe.MIN_DYNAMIC_RANGE)
                                for (z++,
                                Q += o; z < xe.BLOCK_SIZE; z++,
                                Q += o)
                                    for (let J = 0; J < xe.BLOCK_SIZE; J++)
                                        T += n[Q + J] & 255
                        }
                        let P = T >> xe.BLOCK_SIZE_POWER * 2;
                        if (b - R <= xe.MIN_DYNAMIC_RANGE && (P = R / 2,
                        p > 0 && C > 0)) {
                            const z = (h[p - 1][C] + 2 * h[p][C - 1] + h[p - 1][C - 1]) / 4;
                            R < z && (P = z)
                        }
                        h[p][C] = P
                    }
                }
                return h
            }
        }
        xe.BLOCK_SIZE_POWER = 3,
        xe.BLOCK_SIZE = 1 << xe.BLOCK_SIZE_POWER,
        xe.BLOCK_SIZE_MASK = xe.BLOCK_SIZE - 1,
        xe.MINIMUM_DIMENSION = xe.BLOCK_SIZE * 5,
        xe.MIN_DYNAMIC_RANGE = 24;
        class re {
            constructor(n, r) {
                this.width = n,
                this.height = r
            }
            getWidth() {
                return this.width
            }
            getHeight() {
                return this.height
            }
            isCropSupported() {
                return !1
            }
            crop(n, r, s, o) {
                throw new me("This luminance source does not support cropping.")
            }
            isRotateSupported() {
                return !1
            }
            rotateCounterClockwise() {
                throw new me("This luminance source does not support rotation by 90 degrees.")
            }
            rotateCounterClockwise45() {
                throw new me("This luminance source does not support rotation by 45 degrees.")
            }
            toString() {
                const n = new Uint8ClampedArray(this.width);
                let r = new Ie;
                for (let s = 0; s < this.height; s++) {
                    const o = this.getRow(s, n);
                    for (let a = 0; a < this.width; a++) {
                        const u = o[a] & 255;
                        let d;
                        u < 64 ? d = "#" : u < 128 ? d = "+" : u < 192 ? d = "." : d = " ",
                        r.append(d)
                    }
                    r.append(`
`)
                }
                return r.toString()
            }
        }
        class he extends re {
            constructor(n) {
                super(n.getWidth(), n.getHeight()),
                this.delegate = n
            }
            getRow(n, r) {
                const s = this.delegate.getRow(n, r)
                  , o = this.getWidth();
                for (let a = 0; a < o; a++)
                    s[a] = 255 - (s[a] & 255);
                return s
            }
            getMatrix() {
                const n = this.delegate.getMatrix()
                  , r = this.getWidth() * this.getHeight()
                  , s = new Uint8ClampedArray(r);
                for (let o = 0; o < r; o++)
                    s[o] = 255 - (n[o] & 255);
                return s
            }
            isCropSupported() {
                return this.delegate.isCropSupported()
            }
            crop(n, r, s, o) {
                return new he(this.delegate.crop(n, r, s, o))
            }
            isRotateSupported() {
                return this.delegate.isRotateSupported()
            }
            invert() {
                return this.delegate
            }
            rotateCounterClockwise() {
                return new he(this.delegate.rotateCounterClockwise())
            }
            rotateCounterClockwise45() {
                return new he(this.delegate.rotateCounterClockwise45())
            }
        }
        class pe extends re {
            constructor(n) {
                super(n.width, n.height),
                this.canvas = n,
                this.tempCanvasElement = null,
                this.buffer = pe.makeBufferFromCanvasImageData(n)
            }
            static makeBufferFromCanvasImageData(n) {
                const r = n.getContext("2d").getImageData(0, 0, n.width, n.height);
                return pe.toGrayscaleBuffer(r.data, n.width, n.height)
            }
            static toGrayscaleBuffer(n, r, s) {
                const o = new Uint8ClampedArray(r * s);
                for (let a = 0, u = 0, d = n.length; a < d; a += 4,
                u++) {
                    let h;
                    if (n[a + 3] === 0)
                        h = 255;
                    else {
                        const w = n[a]
                          , C = n[a + 1]
                          , A = n[a + 2];
                        h = 306 * w + 601 * C + 117 * A + 512 >> 10
                    }
                    o[u] = h
                }
                return o
            }
            getRow(n, r) {
                if (n < 0 || n >= this.getHeight())
                    throw new v("Requested row is outside the image: " + n);
                const s = this.getWidth()
                  , o = n * s;
                return r === null ? r = this.buffer.slice(o, o + s) : (r.length < s && (r = new Uint8ClampedArray(s)),
                r.set(this.buffer.slice(o, o + s))),
                r
            }
            getMatrix() {
                return this.buffer
            }
            isCropSupported() {
                return !0
            }
            crop(n, r, s, o) {
                return super.crop(n, r, s, o),
                this
            }
            isRotateSupported() {
                return !0
            }
            rotateCounterClockwise() {
                return this.rotate(-90),
                this
            }
            rotateCounterClockwise45() {
                return this.rotate(-45),
                this
            }
            getTempCanvasElement() {
                if (this.tempCanvasElement === null) {
                    const n = this.canvas.ownerDocument.createElement("canvas");
                    n.width = this.canvas.width,
                    n.height = this.canvas.height,
                    this.tempCanvasElement = n
                }
                return this.tempCanvasElement
            }
            rotate(n) {
                const r = this.getTempCanvasElement()
                  , s = r.getContext("2d")
                  , o = n * pe.DEGREE_TO_RADIANS
                  , a = this.canvas.width
                  , u = this.canvas.height
                  , d = Math.ceil(Math.abs(Math.cos(o)) * a + Math.abs(Math.sin(o)) * u)
                  , h = Math.ceil(Math.abs(Math.sin(o)) * a + Math.abs(Math.cos(o)) * u);
                return r.width = d,
                r.height = h,
                s.translate(d / 2, h / 2),
                s.rotate(o),
                s.drawImage(this.canvas, a / -2, u / -2),
                this.buffer = pe.makeBufferFromCanvasImageData(r),
                this
            }
            invert() {
                return new he(this)
            }
        }
        pe.DEGREE_TO_RADIANS = Math.PI / 180;
        class Ye {
            constructor(n, r, s) {
                this.deviceId = n,
                this.label = r,
                this.kind = "videoinput",
                this.groupId = s || void 0
            }
            toJSON() {
                return {
                    kind: this.kind,
                    groupId: this.groupId,
                    deviceId: this.deviceId,
                    label: this.label
                }
            }
        }
        var Te = (globalThis || cs || self || window || void 0) && (globalThis || cs || self || window || void 0).__awaiter || function(E, n, r, s) {
            function o(a) {
                return a instanceof r ? a : new r(function(u) {
                    u(a)
                }
                )
            }
            return new (r || (r = Promise))(function(a, u) {
                function d(w) {
                    try {
                        p(s.next(w))
                    } catch (C) {
                        u(C)
                    }
                }
                function h(w) {
                    try {
                        p(s.throw(w))
                    } catch (C) {
                        u(C)
                    }
                }
                function p(w) {
                    w.done ? a(w.value) : o(w.value).then(d, h)
                }
                p((s = s.apply(E, n || [])).next())
            }
            )
        }
        ;
        class cn {
            constructor(n, r=500, s) {
                this.reader = n,
                this.timeBetweenScansMillis = r,
                this._hints = s,
                this._stopContinuousDecode = !1,
                this._stopAsyncDecode = !1,
                this._timeBetweenDecodingAttempts = 0
            }
            get hasNavigator() {
                return typeof navigator < "u"
            }
            get isMediaDevicesSuported() {
                return this.hasNavigator && !!navigator.mediaDevices
            }
            get canEnumerateDevices() {
                return !!(this.isMediaDevicesSuported && navigator.mediaDevices.enumerateDevices)
            }
            get timeBetweenDecodingAttempts() {
                return this._timeBetweenDecodingAttempts
            }
            set timeBetweenDecodingAttempts(n) {
                this._timeBetweenDecodingAttempts = n < 0 ? 0 : n
            }
            set hints(n) {
                this._hints = n || null
            }
            get hints() {
                return this._hints
            }
            listVideoInputDevices() {
                return Te(this, void 0, void 0, function*() {
                    if (!this.hasNavigator)
                        throw new Error("Can't enumerate devices, navigator is not present.");
                    if (!this.canEnumerateDevices)
                        throw new Error("Can't enumerate devices, method not supported.");
                    const n = yield navigator.mediaDevices.enumerateDevices()
                      , r = [];
                    for (const s of n) {
                        const o = s.kind === "video" ? "videoinput" : s.kind;
                        if (o !== "videoinput")
                            continue;
                        const a = s.deviceId || s.id
                          , u = s.label || `Video device ${r.length + 1}`
                          , d = s.groupId
                          , h = {
                            deviceId: a,
                            label: u,
                            kind: o,
                            groupId: d
                        };
                        r.push(h)
                    }
                    return r
                })
            }
            getVideoInputDevices() {
                return Te(this, void 0, void 0, function*() {
                    return (yield this.listVideoInputDevices()).map(r=>new Ye(r.deviceId,r.label))
                })
            }
            findDeviceById(n) {
                return Te(this, void 0, void 0, function*() {
                    const r = yield this.listVideoInputDevices();
                    return r ? r.find(s=>s.deviceId === n) : null
                })
            }
            decodeFromInputVideoDevice(n, r) {
                return Te(this, void 0, void 0, function*() {
                    return yield this.decodeOnceFromVideoDevice(n, r)
                })
            }
            decodeOnceFromVideoDevice(n, r) {
                return Te(this, void 0, void 0, function*() {
                    this.reset();
                    let s;
                    n ? s = {
                        deviceId: {
                            exact: n
                        }
                    } : s = {
                        facingMode: "environment"
                    };
                    const o = {
                        video: s
                    };
                    return yield this.decodeOnceFromConstraints(o, r)
                })
            }
            decodeOnceFromConstraints(n, r) {
                return Te(this, void 0, void 0, function*() {
                    const s = yield navigator.mediaDevices.getUserMedia(n);
                    return yield this.decodeOnceFromStream(s, r)
                })
            }
            decodeOnceFromStream(n, r) {
                return Te(this, void 0, void 0, function*() {
                    this.reset();
                    const s = yield this.attachStreamToVideo(n, r);
                    return yield this.decodeOnce(s)
                })
            }
            decodeFromInputVideoDeviceContinuously(n, r, s) {
                return Te(this, void 0, void 0, function*() {
                    return yield this.decodeFromVideoDevice(n, r, s)
                })
            }
            decodeFromVideoDevice(n, r, s) {
                return Te(this, void 0, void 0, function*() {
                    let o;
                    n ? o = {
                        deviceId: {
                            exact: n
                        }
                    } : o = {
                        facingMode: "environment"
                    };
                    const a = {
                        video: o
                    };
                    return yield this.decodeFromConstraints(a, r, s)
                })
            }
            decodeFromConstraints(n, r, s) {
                return Te(this, void 0, void 0, function*() {
                    const o = yield navigator.mediaDevices.getUserMedia(n);
                    return yield this.decodeFromStream(o, r, s)
                })
            }
            decodeFromStream(n, r, s) {
                return Te(this, void 0, void 0, function*() {
                    this.reset();
                    const o = yield this.attachStreamToVideo(n, r);
                    return yield this.decodeContinuously(o, s)
                })
            }
            stopAsyncDecode() {
                this._stopAsyncDecode = !0
            }
            stopContinuousDecode() {
                this._stopContinuousDecode = !0
            }
            attachStreamToVideo(n, r) {
                return Te(this, void 0, void 0, function*() {
                    const s = this.prepareVideoElement(r);
                    return this.addVideoSource(s, n),
                    this.videoElement = s,
                    this.stream = n,
                    yield this.playVideoOnLoadAsync(s),
                    s
                })
            }
            playVideoOnLoadAsync(n) {
                return new Promise((r,s)=>this.playVideoOnLoad(n, ()=>r()))
            }
            playVideoOnLoad(n, r) {
                this.videoEndedListener = ()=>this.stopStreams(),
                this.videoCanPlayListener = ()=>this.tryPlayVideo(n),
                n.addEventListener("ended", this.videoEndedListener),
                n.addEventListener("canplay", this.videoCanPlayListener),
                n.addEventListener("playing", r),
                this.tryPlayVideo(n)
            }
            isVideoPlaying(n) {
                return n.currentTime > 0 && !n.paused && !n.ended && n.readyState > 2
            }
            tryPlayVideo(n) {
                return Te(this, void 0, void 0, function*() {
                    if (this.isVideoPlaying(n)) {
                        console.warn("Trying to play video that is already playing.");
                        return
                    }
                    try {
                        yield n.play()
                    } catch {
                        console.warn("It was not possible to play the video.")
                    }
                })
            }
            getMediaElement(n, r) {
                const s = document.getElementById(n);
                if (!s)
                    throw new S(`element with id '${n}' not found`);
                if (s.nodeName.toLowerCase() !== r.toLowerCase())
                    throw new S(`element with id '${n}' must be an ${r} element`);
                return s
            }
            decodeFromImage(n, r) {
                if (!n && !r)
                    throw new S("either imageElement with a src set or an url must be provided");
                return r && !n ? this.decodeFromImageUrl(r) : this.decodeFromImageElement(n)
            }
            decodeFromVideo(n, r) {
                if (!n && !r)
                    throw new S("Either an element with a src set or an URL must be provided");
                return r && !n ? this.decodeFromVideoUrl(r) : this.decodeFromVideoElement(n)
            }
            decodeFromVideoContinuously(n, r, s) {
                if (n === void 0 && r === void 0)
                    throw new S("Either an element with a src set or an URL must be provided");
                return r && !n ? this.decodeFromVideoUrlContinuously(r, s) : this.decodeFromVideoElementContinuously(n, s)
            }
            decodeFromImageElement(n) {
                if (!n)
                    throw new S("An image element must be provided.");
                this.reset();
                const r = this.prepareImageElement(n);
                this.imageElement = r;
                let s;
                return this.isImageLoaded(r) ? s = this.decodeOnce(r, !1, !0) : s = this._decodeOnLoadImage(r),
                s
            }
            decodeFromVideoElement(n) {
                const r = this._decodeFromVideoElementSetup(n);
                return this._decodeOnLoadVideo(r)
            }
            decodeFromVideoElementContinuously(n, r) {
                const s = this._decodeFromVideoElementSetup(n);
                return this._decodeOnLoadVideoContinuously(s, r)
            }
            _decodeFromVideoElementSetup(n) {
                if (!n)
                    throw new S("A video element must be provided.");
                this.reset();
                const r = this.prepareVideoElement(n);
                return this.videoElement = r,
                r
            }
            decodeFromImageUrl(n) {
                if (!n)
                    throw new S("An URL must be provided.");
                this.reset();
                const r = this.prepareImageElement();
                this.imageElement = r;
                const s = this._decodeOnLoadImage(r);
                return r.src = n,
                s
            }
            decodeFromVideoUrl(n) {
                if (!n)
                    throw new S("An URL must be provided.");
                this.reset();
                const r = this.prepareVideoElement()
                  , s = this.decodeFromVideoElement(r);
                return r.src = n,
                s
            }
            decodeFromVideoUrlContinuously(n, r) {
                if (!n)
                    throw new S("An URL must be provided.");
                this.reset();
                const s = this.prepareVideoElement()
                  , o = this.decodeFromVideoElementContinuously(s, r);
                return s.src = n,
                o
            }
            _decodeOnLoadImage(n) {
                return new Promise((r,s)=>{
                    this.imageLoadedListener = ()=>this.decodeOnce(n, !1, !0).then(r, s),
                    n.addEventListener("load", this.imageLoadedListener)
                }
                )
            }
            _decodeOnLoadVideo(n) {
                return Te(this, void 0, void 0, function*() {
                    return yield this.playVideoOnLoadAsync(n),
                    yield this.decodeOnce(n)
                })
            }
            _decodeOnLoadVideoContinuously(n, r) {
                return Te(this, void 0, void 0, function*() {
                    yield this.playVideoOnLoadAsync(n),
                    this.decodeContinuously(n, r)
                })
            }
            isImageLoaded(n) {
                return !(!n.complete || n.naturalWidth === 0)
            }
            prepareImageElement(n) {
                let r;
                return typeof n > "u" && (r = document.createElement("img"),
                r.width = 200,
                r.height = 200),
                typeof n == "string" && (r = this.getMediaElement(n, "img")),
                n instanceof HTMLImageElement && (r = n),
                r
            }
            prepareVideoElement(n) {
                let r;
                return !n && typeof document < "u" && (r = document.createElement("video"),
                r.width = 200,
                r.height = 200),
                typeof n == "string" && (r = this.getMediaElement(n, "video")),
                n instanceof HTMLVideoElement && (r = n),
                r.setAttribute("autoplay", "true"),
                r.setAttribute("muted", "true"),
                r.setAttribute("playsinline", "true"),
                r
            }
            decodeOnce(n, r=!0, s=!0) {
                this._stopAsyncDecode = !1;
                const o = (a,u)=>{
                    if (this._stopAsyncDecode) {
                        u(new j("Video stream has ended before any code could be detected.")),
                        this._stopAsyncDecode = void 0;
                        return
                    }
                    try {
                        const d = this.decode(n);
                        a(d)
                    } catch (d) {
                        const h = r && d instanceof j
                          , w = (d instanceof B || d instanceof F) && s;
                        if (h || w)
                            return setTimeout(o, this._timeBetweenDecodingAttempts, a, u);
                        u(d)
                    }
                }
                ;
                return new Promise((a,u)=>o(a, u))
            }
            decodeContinuously(n, r) {
                this._stopContinuousDecode = !1;
                const s = ()=>{
                    if (this._stopContinuousDecode) {
                        this._stopContinuousDecode = void 0;
                        return
                    }
                    try {
                        const o = this.decode(n);
                        r(o, null),
                        setTimeout(s, this.timeBetweenScansMillis)
                    } catch (o) {
                        r(null, o);
                        const a = o instanceof B || o instanceof F
                          , u = o instanceof j;
                        (a || u) && setTimeout(s, this._timeBetweenDecodingAttempts)
                    }
                }
                ;
                s()
            }
            decode(n) {
                const r = this.createBinaryBitmap(n);
                return this.decodeBitmap(r)
            }
            _isHTMLVideoElement(n) {
                return n.videoWidth !== 0
            }
            drawFrameOnCanvas(n, r, s) {
                r || (r = {
                    sx: 0,
                    sy: 0,
                    sWidth: n.videoWidth,
                    sHeight: n.videoHeight,
                    dx: 0,
                    dy: 0,
                    dWidth: n.videoWidth,
                    dHeight: n.videoHeight
                }),
                s || (s = this.captureCanvasContext),
                s.drawImage(n, r.sx, r.sy, r.sWidth, r.sHeight, r.dx, r.dy, r.dWidth, r.dHeight)
            }
            drawImageOnCanvas(n, r, s=this.captureCanvasContext) {
                r || (r = {
                    sx: 0,
                    sy: 0,
                    sWidth: n.naturalWidth,
                    sHeight: n.naturalHeight,
                    dx: 0,
                    dy: 0,
                    dWidth: n.naturalWidth,
                    dHeight: n.naturalHeight
                }),
                s || (s = this.captureCanvasContext),
                s.drawImage(n, r.sx, r.sy, r.sWidth, r.sHeight, r.dx, r.dy, r.dWidth, r.dHeight)
            }
            createBinaryBitmap(n) {
                this.getCaptureCanvasContext(n),
                this._isHTMLVideoElement(n) ? this.drawFrameOnCanvas(n) : this.drawImageOnCanvas(n);
                const r = this.getCaptureCanvas(n)
                  , s = new pe(r)
                  , o = new xe(s);
                return new D(o)
            }
            getCaptureCanvasContext(n) {
                if (!this.captureCanvasContext) {
                    const s = this.getCaptureCanvas(n).getContext("2d");
                    this.captureCanvasContext = s
                }
                return this.captureCanvasContext
            }
            getCaptureCanvas(n) {
                if (!this.captureCanvas) {
                    const r = this.createCaptureCanvas(n);
                    this.captureCanvas = r
                }
                return this.captureCanvas
            }
            decodeBitmap(n) {
                return this.reader.decode(n, this._hints)
            }
            createCaptureCanvas(n) {
                if (typeof document > "u")
                    return this._destroyCaptureCanvas(),
                    null;
                const r = document.createElement("canvas");
                let s, o;
                return typeof n < "u" && (n instanceof HTMLVideoElement ? (s = n.videoWidth,
                o = n.videoHeight) : n instanceof HTMLImageElement && (s = n.naturalWidth || n.width,
                o = n.naturalHeight || n.height)),
                r.style.width = s + "px",
                r.style.height = o + "px",
                r.width = s,
                r.height = o,
                r
            }
            stopStreams() {
                this.stream && (this.stream.getVideoTracks().forEach(n=>n.stop()),
                this.stream = void 0),
                this._stopAsyncDecode === !1 && this.stopAsyncDecode(),
                this._stopContinuousDecode === !1 && this.stopContinuousDecode()
            }
            reset() {
                this.stopStreams(),
                this._destroyVideoElement(),
                this._destroyImageElement(),
                this._destroyCaptureCanvas()
            }
            _destroyVideoElement() {
                this.videoElement && (typeof this.videoEndedListener < "u" && this.videoElement.removeEventListener("ended", this.videoEndedListener),
                typeof this.videoPlayingEventListener < "u" && this.videoElement.removeEventListener("playing", this.videoPlayingEventListener),
                typeof this.videoCanPlayListener < "u" && this.videoElement.removeEventListener("loadedmetadata", this.videoCanPlayListener),
                this.cleanVideoSource(this.videoElement),
                this.videoElement = void 0)
            }
            _destroyImageElement() {
                this.imageElement && (this.imageLoadedListener !== void 0 && this.imageElement.removeEventListener("load", this.imageLoadedListener),
                this.imageElement.src = void 0,
                this.imageElement.removeAttribute("src"),
                this.imageElement = void 0)
            }
            _destroyCaptureCanvas() {
                this.captureCanvasContext = void 0,
                this.captureCanvas = void 0
            }
            addVideoSource(n, r) {
                try {
                    n.srcObject = r
                } catch {
                    n.src = URL.createObjectURL(r)
                }
            }
            cleanVideoSource(n) {
                try {
                    n.srcObject = null
                } catch {
                    n.src = ""
                }
                this.videoElement.removeAttribute("src")
            }
        }
        class Qe {
            constructor(n, r, s=r == null ? 0 : 8 * r.length, o, a, u=M.currentTimeMillis()) {
                this.text = n,
                this.rawBytes = r,
                this.numBits = s,
                this.resultPoints = o,
                this.format = a,
                this.timestamp = u,
                this.text = n,
                this.rawBytes = r,
                s == null ? this.numBits = r == null ? 0 : 8 * r.length : this.numBits = s,
                this.resultPoints = o,
                this.format = a,
                this.resultMetadata = null,
                u == null ? this.timestamp = M.currentTimeMillis() : this.timestamp = u
            }
            getText() {
                return this.text
            }
            getRawBytes() {
                return this.rawBytes
            }
            getNumBits() {
                return this.numBits
            }
            getResultPoints() {
                return this.resultPoints
            }
            getBarcodeFormat() {
                return this.format
            }
            getResultMetadata() {
                return this.resultMetadata
            }
            putMetadata(n, r) {
                this.resultMetadata === null && (this.resultMetadata = new Map),
                this.resultMetadata.set(n, r)
            }
            putAllMetadata(n) {
                n !== null && (this.resultMetadata === null ? this.resultMetadata = n : this.resultMetadata = new Map(n))
            }
            addResultPoints(n) {
                const r = this.resultPoints;
                if (r === null)
                    this.resultPoints = n;
                else if (n !== null && n.length > 0) {
                    const s = new Array(r.length + n.length);
                    M.arraycopy(r, 0, s, 0, r.length),
                    M.arraycopy(n, 0, s, r.length, n.length),
                    this.resultPoints = s
                }
            }
            getTimestamp() {
                return this.timestamp
            }
            toString() {
                return this.text
            }
        }
        var Lr;
        (function(E) {
            E[E.AZTEC = 0] = "AZTEC",
            E[E.CODABAR = 1] = "CODABAR",
            E[E.CODE_39 = 2] = "CODE_39",
            E[E.CODE_93 = 3] = "CODE_93",
            E[E.CODE_128 = 4] = "CODE_128",
            E[E.DATA_MATRIX = 5] = "DATA_MATRIX",
            E[E.EAN_8 = 6] = "EAN_8",
            E[E.EAN_13 = 7] = "EAN_13",
            E[E.ITF = 8] = "ITF",
            E[E.MAXICODE = 9] = "MAXICODE",
            E[E.PDF_417 = 10] = "PDF_417",
            E[E.QR_CODE = 11] = "QR_CODE",
            E[E.RSS_14 = 12] = "RSS_14",
            E[E.RSS_EXPANDED = 13] = "RSS_EXPANDED",
            E[E.UPC_A = 14] = "UPC_A",
            E[E.UPC_E = 15] = "UPC_E",
            E[E.UPC_EAN_EXTENSION = 16] = "UPC_EAN_EXTENSION"
        }
        )(Lr || (Lr = {}));
        var ae = Lr, sr;
        (function(E) {
            E[E.OTHER = 0] = "OTHER",
            E[E.ORIENTATION = 1] = "ORIENTATION",
            E[E.BYTE_SEGMENTS = 2] = "BYTE_SEGMENTS",
            E[E.ERROR_CORRECTION_LEVEL = 3] = "ERROR_CORRECTION_LEVEL",
            E[E.ISSUE_NUMBER = 4] = "ISSUE_NUMBER",
            E[E.SUGGESTED_PRICE = 5] = "SUGGESTED_PRICE",
            E[E.POSSIBLE_COUNTRY = 6] = "POSSIBLE_COUNTRY",
            E[E.UPC_EAN_EXTENSION = 7] = "UPC_EAN_EXTENSION",
            E[E.PDF417_EXTRA_METADATA = 8] = "PDF417_EXTRA_METADATA",
            E[E.STRUCTURED_APPEND_SEQUENCE = 9] = "STRUCTURED_APPEND_SEQUENCE",
            E[E.STRUCTURED_APPEND_PARITY = 10] = "STRUCTURED_APPEND_PARITY"
        }
        )(sr || (sr = {}));
        var yt = sr;
        class Ji {
            constructor(n, r, s, o, a=-1, u=-1) {
                this.rawBytes = n,
                this.text = r,
                this.byteSegments = s,
                this.ecLevel = o,
                this.structuredAppendSequenceNumber = a,
                this.structuredAppendParity = u,
                this.numBits = n == null ? 0 : 8 * n.length
            }
            getRawBytes() {
                return this.rawBytes
            }
            getNumBits() {
                return this.numBits
            }
            setNumBits(n) {
                this.numBits = n
            }
            getText() {
                return this.text
            }
            getByteSegments() {
                return this.byteSegments
            }
            getECLevel() {
                return this.ecLevel
            }
            getErrorsCorrected() {
                return this.errorsCorrected
            }
            setErrorsCorrected(n) {
                this.errorsCorrected = n
            }
            getErasures() {
                return this.erasures
            }
            setErasures(n) {
                this.erasures = n
            }
            getOther() {
                return this.other
            }
            setOther(n) {
                this.other = n
            }
            hasStructuredAppend() {
                return this.structuredAppendParity >= 0 && this.structuredAppendSequenceNumber >= 0
            }
            getStructuredAppendParity() {
                return this.structuredAppendParity
            }
            getStructuredAppendSequenceNumber() {
                return this.structuredAppendSequenceNumber
            }
        }
        class $i {
            exp(n) {
                return this.expTable[n]
            }
            log(n) {
                if (n === 0)
                    throw new v;
                return this.logTable[n]
            }
            static addOrSubtract(n, r) {
                return n ^ r
            }
        }
        class jt {
            constructor(n, r) {
                if (r.length === 0)
                    throw new v;
                this.field = n;
                const s = r.length;
                if (s > 1 && r[0] === 0) {
                    let o = 1;
                    for (; o < s && r[o] === 0; )
                        o++;
                    o === s ? this.coefficients = Int32Array.from([0]) : (this.coefficients = new Int32Array(s - o),
                    M.arraycopy(r, o, this.coefficients, 0, this.coefficients.length))
                } else
                    this.coefficients = r
            }
            getCoefficients() {
                return this.coefficients
            }
            getDegree() {
                return this.coefficients.length - 1
            }
            isZero() {
                return this.coefficients[0] === 0
            }
            getCoefficient(n) {
                return this.coefficients[this.coefficients.length - 1 - n]
            }
            evaluateAt(n) {
                if (n === 0)
                    return this.getCoefficient(0);
                const r = this.coefficients;
                let s;
                if (n === 1) {
                    s = 0;
                    for (let u = 0, d = r.length; u !== d; u++) {
                        const h = r[u];
                        s = $i.addOrSubtract(s, h)
                    }
                    return s
                }
                s = r[0];
                const o = r.length
                  , a = this.field;
                for (let u = 1; u < o; u++)
                    s = $i.addOrSubtract(a.multiply(n, s), r[u]);
                return s
            }
            addOrSubtract(n) {
                if (!this.field.equals(n.field))
                    throw new v("GenericGFPolys do not have same GenericGF field");
                if (this.isZero())
                    return n;
                if (n.isZero())
                    return this;
                let r = this.coefficients
                  , s = n.coefficients;
                if (r.length > s.length) {
                    const u = r;
                    r = s,
                    s = u
                }
                let o = new Int32Array(s.length);
                const a = s.length - r.length;
                M.arraycopy(s, 0, o, 0, a);
                for (let u = a; u < s.length; u++)
                    o[u] = $i.addOrSubtract(r[u - a], s[u]);
                return new jt(this.field,o)
            }
            multiply(n) {
                if (!this.field.equals(n.field))
                    throw new v("GenericGFPolys do not have same GenericGF field");
                if (this.isZero() || n.isZero())
                    return this.field.getZero();
                const r = this.coefficients
                  , s = r.length
                  , o = n.coefficients
                  , a = o.length
                  , u = new Int32Array(s + a - 1)
                  , d = this.field;
                for (let h = 0; h < s; h++) {
                    const p = r[h];
                    for (let w = 0; w < a; w++)
                        u[h + w] = $i.addOrSubtract(u[h + w], d.multiply(p, o[w]))
                }
                return new jt(d,u)
            }
            multiplyScalar(n) {
                if (n === 0)
                    return this.field.getZero();
                if (n === 1)
                    return this;
                const r = this.coefficients.length
                  , s = this.field
                  , o = new Int32Array(r)
                  , a = this.coefficients;
                for (let u = 0; u < r; u++)
                    o[u] = s.multiply(a[u], n);
                return new jt(s,o)
            }
            multiplyByMonomial(n, r) {
                if (n < 0)
                    throw new v;
                if (r === 0)
                    return this.field.getZero();
                const s = this.coefficients
                  , o = s.length
                  , a = new Int32Array(o + n)
                  , u = this.field;
                for (let d = 0; d < o; d++)
                    a[d] = u.multiply(s[d], r);
                return new jt(u,a)
            }
            divide(n) {
                if (!this.field.equals(n.field))
                    throw new v("GenericGFPolys do not have same GenericGF field");
                if (n.isZero())
                    throw new v("Divide by 0");
                const r = this.field;
                let s = r.getZero()
                  , o = this;
                const a = n.getCoefficient(n.getDegree())
                  , u = r.inverse(a);
                for (; o.getDegree() >= n.getDegree() && !o.isZero(); ) {
                    const d = o.getDegree() - n.getDegree()
                      , h = r.multiply(o.getCoefficient(o.getDegree()), u)
                      , p = n.multiplyByMonomial(d, h)
                      , w = r.buildMonomial(d, h);
                    s = s.addOrSubtract(w),
                    o = o.addOrSubtract(p)
                }
                return [s, o]
            }
            toString() {
                let n = "";
                for (let r = this.getDegree(); r >= 0; r--) {
                    let s = this.getCoefficient(r);
                    if (s !== 0) {
                        if (s < 0 ? (n += " - ",
                        s = -s) : n.length > 0 && (n += " + "),
                        r === 0 || s !== 1) {
                            const o = this.field.log(s);
                            o === 0 ? n += "1" : o === 1 ? n += "a" : (n += "a^",
                            n += o)
                        }
                        r !== 0 && (r === 1 ? n += "x" : (n += "x^",
                        n += r))
                    }
                }
                return n
            }
        }
        class ao extends x {
        }
        ao.kind = "ArithmeticException";
        class Oe extends $i {
            constructor(n, r, s) {
                super(),
                this.primitive = n,
                this.size = r,
                this.generatorBase = s;
                const o = new Int32Array(r);
                let a = 1;
                for (let d = 0; d < r; d++)
                    o[d] = a,
                    a *= 2,
                    a >= r && (a ^= n,
                    a &= r - 1);
                this.expTable = o;
                const u = new Int32Array(r);
                for (let d = 0; d < r - 1; d++)
                    u[o[d]] = d;
                this.logTable = u,
                this.zero = new jt(this,Int32Array.from([0])),
                this.one = new jt(this,Int32Array.from([1]))
            }
            getZero() {
                return this.zero
            }
            getOne() {
                return this.one
            }
            buildMonomial(n, r) {
                if (n < 0)
                    throw new v;
                if (r === 0)
                    return this.zero;
                const s = new Int32Array(n + 1);
                return s[0] = r,
                new jt(this,s)
            }
            inverse(n) {
                if (n === 0)
                    throw new ao;
                return this.expTable[this.size - this.logTable[n] - 1]
            }
            multiply(n, r) {
                return n === 0 || r === 0 ? 0 : this.expTable[(this.logTable[n] + this.logTable[r]) % (this.size - 1)]
            }
            getSize() {
                return this.size
            }
            getGeneratorBase() {
                return this.generatorBase
            }
            toString() {
                return "GF(0x" + N.toHexString(this.primitive) + "," + this.size + ")"
            }
            equals(n) {
                return n === this
            }
        }
        Oe.AZTEC_DATA_12 = new Oe(4201,4096,1),
        Oe.AZTEC_DATA_10 = new Oe(1033,1024,1),
        Oe.AZTEC_DATA_6 = new Oe(67,64,1),
        Oe.AZTEC_PARAM = new Oe(19,16,1),
        Oe.QR_CODE_FIELD_256 = new Oe(285,256,0),
        Oe.DATA_MATRIX_FIELD_256 = new Oe(301,256,1),
        Oe.AZTEC_DATA_8 = Oe.DATA_MATRIX_FIELD_256,
        Oe.MAXICODE_FIELD_64 = Oe.AZTEC_DATA_6;
        class li extends x {
        }
        li.kind = "ReedSolomonException";
        class kn extends x {
        }
        kn.kind = "IllegalStateException";
        class es {
            constructor(n) {
                this.field = n
            }
            decode(n, r) {
                const s = this.field
                  , o = new jt(s,n)
                  , a = new Int32Array(r);
                let u = !0;
                for (let T = 0; T < r; T++) {
                    const R = o.evaluateAt(s.exp(T + s.getGeneratorBase()));
                    a[a.length - 1 - T] = R,
                    R !== 0 && (u = !1)
                }
                if (u)
                    return;
                const d = new jt(s,a)
                  , h = this.runEuclideanAlgorithm(s.buildMonomial(r, 1), d, r)
                  , p = h[0]
                  , w = h[1]
                  , C = this.findErrorLocations(p)
                  , A = this.findErrorMagnitudes(w, C);
                for (let T = 0; T < C.length; T++) {
                    const R = n.length - 1 - s.log(C[T]);
                    if (R < 0)
                        throw new li("Bad error location");
                    n[R] = Oe.addOrSubtract(n[R], A[T])
                }
            }
            runEuclideanAlgorithm(n, r, s) {
                if (n.getDegree() < r.getDegree()) {
                    const T = n;
                    n = r,
                    r = T
                }
                const o = this.field;
                let a = n
                  , u = r
                  , d = o.getZero()
                  , h = o.getOne();
                for (; u.getDegree() >= (s / 2 | 0); ) {
                    let T = a
                      , R = d;
                    if (a = u,
                    d = h,
                    a.isZero())
                        throw new li("r_{i-1} was zero");
                    u = T;
                    let b = o.getZero();
                    const P = a.getCoefficient(a.getDegree())
                      , z = o.inverse(P);
                    for (; u.getDegree() >= a.getDegree() && !u.isZero(); ) {
                        const Q = u.getDegree() - a.getDegree()
                          , J = o.multiply(u.getCoefficient(u.getDegree()), z);
                        b = b.addOrSubtract(o.buildMonomial(Q, J)),
                        u = u.addOrSubtract(a.multiplyByMonomial(Q, J))
                    }
                    if (h = b.multiply(d).addOrSubtract(R),
                    u.getDegree() >= a.getDegree())
                        throw new kn("Division algorithm failed to reduce polynomial?")
                }
                const p = h.getCoefficient(0);
                if (p === 0)
                    throw new li("sigmaTilde(0) was zero");
                const w = o.inverse(p)
                  , C = h.multiplyScalar(w)
                  , A = u.multiplyScalar(w);
                return [C, A]
            }
            findErrorLocations(n) {
                const r = n.getDegree();
                if (r === 1)
                    return Int32Array.from([n.getCoefficient(1)]);
                const s = new Int32Array(r);
                let o = 0;
                const a = this.field;
                for (let u = 1; u < a.getSize() && o < r; u++)
                    n.evaluateAt(u) === 0 && (s[o] = a.inverse(u),
                    o++);
                if (o !== r)
                    throw new li("Error locator degree does not match number of roots");
                return s
            }
            findErrorMagnitudes(n, r) {
                const s = r.length
                  , o = new Int32Array(s)
                  , a = this.field;
                for (let u = 0; u < s; u++) {
                    const d = a.inverse(r[u]);
                    let h = 1;
                    for (let p = 0; p < s; p++)
                        if (u !== p) {
                            const w = a.multiply(r[p], d)
                              , C = w & 1 ? w & -2 : w | 1;
                            h = a.multiply(h, C)
                        }
                    o[u] = a.multiply(n.evaluateAt(d), a.inverse(h)),
                    a.getGeneratorBase() !== 0 && (o[u] = a.multiply(o[u], d))
                }
                return o
            }
        }
        var vt;
        (function(E) {
            E[E.UPPER = 0] = "UPPER",
            E[E.LOWER = 1] = "LOWER",
            E[E.MIXED = 2] = "MIXED",
            E[E.DIGIT = 3] = "DIGIT",
            E[E.PUNCT = 4] = "PUNCT",
            E[E.BINARY = 5] = "BINARY"
        }
        )(vt || (vt = {}));
        class Ve {
            decode(n) {
                this.ddata = n;
                let r = n.getBits()
                  , s = this.extractBits(r)
                  , o = this.correctBits(s)
                  , a = Ve.convertBoolArrayToByteArray(o)
                  , u = Ve.getEncodedData(o)
                  , d = new Ji(a,u,null,null);
                return d.setNumBits(o.length),
                d
            }
            static highLevelDecode(n) {
                return this.getEncodedData(n)
            }
            static getEncodedData(n) {
                let r = n.length
                  , s = vt.UPPER
                  , o = vt.UPPER
                  , a = ""
                  , u = 0;
                for (; u < r; )
                    if (o === vt.BINARY) {
                        if (r - u < 5)
                            break;
                        let d = Ve.readCode(n, u, 5);
                        if (u += 5,
                        d === 0) {
                            if (r - u < 11)
                                break;
                            d = Ve.readCode(n, u, 11) + 31,
                            u += 11
                        }
                        for (let h = 0; h < d; h++) {
                            if (r - u < 8) {
                                u = r;
                                break
                            }
                            const p = Ve.readCode(n, u, 8);
                            a += fe.castAsNonUtf8Char(p),
                            u += 8
                        }
                        o = s
                    } else {
                        let d = o === vt.DIGIT ? 4 : 5;
                        if (r - u < d)
                            break;
                        let h = Ve.readCode(n, u, d);
                        u += d;
                        let p = Ve.getCharacter(o, h);
                        p.startsWith("CTRL_") ? (s = o,
                        o = Ve.getTable(p.charAt(5)),
                        p.charAt(6) === "L" && (s = o)) : (a += p,
                        o = s)
                    }
                return a
            }
            static getTable(n) {
                switch (n) {
                case "L":
                    return vt.LOWER;
                case "P":
                    return vt.PUNCT;
                case "M":
                    return vt.MIXED;
                case "D":
                    return vt.DIGIT;
                case "B":
                    return vt.BINARY;
                case "U":
                default:
                    return vt.UPPER
                }
            }
            static getCharacter(n, r) {
                switch (n) {
                case vt.UPPER:
                    return Ve.UPPER_TABLE[r];
                case vt.LOWER:
                    return Ve.LOWER_TABLE[r];
                case vt.MIXED:
                    return Ve.MIXED_TABLE[r];
                case vt.PUNCT:
                    return Ve.PUNCT_TABLE[r];
                case vt.DIGIT:
                    return Ve.DIGIT_TABLE[r];
                default:
                    throw new kn("Bad table")
                }
            }
            correctBits(n) {
                let r, s;
                this.ddata.getNbLayers() <= 2 ? (s = 6,
                r = Oe.AZTEC_DATA_6) : this.ddata.getNbLayers() <= 8 ? (s = 8,
                r = Oe.AZTEC_DATA_8) : this.ddata.getNbLayers() <= 22 ? (s = 10,
                r = Oe.AZTEC_DATA_10) : (s = 12,
                r = Oe.AZTEC_DATA_12);
                let o = this.ddata.getNbDatablocks()
                  , a = n.length / s;
                if (a < o)
                    throw new F;
                let u = n.length % s
                  , d = new Int32Array(a);
                for (let A = 0; A < a; A++,
                u += s)
                    d[A] = Ve.readCode(n, u, s);
                try {
                    new es(r).decode(d, a - o)
                } catch (A) {
                    throw new F(A)
                }
                let h = (1 << s) - 1
                  , p = 0;
                for (let A = 0; A < o; A++) {
                    let T = d[A];
                    if (T === 0 || T === h)
                        throw new F;
                    (T === 1 || T === h - 1) && p++
                }
                let w = new Array(o * s - p)
                  , C = 0;
                for (let A = 0; A < o; A++) {
                    let T = d[A];
                    if (T === 1 || T === h - 1)
                        w.fill(T > 1, C, C + s - 1),
                        C += s - 1;
                    else
                        for (let R = s - 1; R >= 0; --R)
                            w[C++] = (T & 1 << R) !== 0
                }
                return w
            }
            extractBits(n) {
                let r = this.ddata.isCompact()
                  , s = this.ddata.getNbLayers()
                  , o = (r ? 11 : 14) + s * 4
                  , a = new Int32Array(o)
                  , u = new Array(this.totalBitsInLayer(s, r));
                if (r)
                    for (let d = 0; d < a.length; d++)
                        a[d] = d;
                else {
                    let d = o + 1 + 2 * N.truncDivision(N.truncDivision(o, 2) - 1, 15)
                      , h = o / 2
                      , p = N.truncDivision(d, 2);
                    for (let w = 0; w < h; w++) {
                        let C = w + N.truncDivision(w, 15);
                        a[h - w - 1] = p - C - 1,
                        a[h + w] = p + C + 1
                    }
                }
                for (let d = 0, h = 0; d < s; d++) {
                    let p = (s - d) * 4 + (r ? 9 : 12)
                      , w = d * 2
                      , C = o - 1 - w;
                    for (let A = 0; A < p; A++) {
                        let T = A * 2;
                        for (let R = 0; R < 2; R++)
                            u[h + T + R] = n.get(a[w + R], a[w + A]),
                            u[h + 2 * p + T + R] = n.get(a[w + A], a[C - R]),
                            u[h + 4 * p + T + R] = n.get(a[C - R], a[C - A]),
                            u[h + 6 * p + T + R] = n.get(a[C - A], a[w + R])
                    }
                    h += p * 8
                }
                return u
            }
            static readCode(n, r, s) {
                let o = 0;
                for (let a = r; a < r + s; a++)
                    o <<= 1,
                    n[a] && (o |= 1);
                return o
            }
            static readByte(n, r) {
                let s = n.length - r;
                return s >= 8 ? Ve.readCode(n, r, 8) : Ve.readCode(n, r, s) << 8 - s
            }
            static convertBoolArrayToByteArray(n) {
                let r = new Uint8Array((n.length + 7) / 8);
                for (let s = 0; s < r.length; s++)
                    r[s] = Ve.readByte(n, 8 * s);
                return r
            }
            totalBitsInLayer(n, r) {
                return ((r ? 88 : 112) + 16 * n) * n
            }
        }
        Ve.UPPER_TABLE = ["CTRL_PS", " ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "CTRL_LL", "CTRL_ML", "CTRL_DL", "CTRL_BS"],
        Ve.LOWER_TABLE = ["CTRL_PS", " ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "CTRL_US", "CTRL_ML", "CTRL_DL", "CTRL_BS"],
        Ve.MIXED_TABLE = ["CTRL_PS", " ", "\\1", "\\2", "\\3", "\\4", "\\5", "\\6", "\\7", "\b", "	", `
`, "\\13", "\f", "\r", "\\33", "\\34", "\\35", "\\36", "\\37", "@", "\\", "^", "_", "`", "|", "~", "\\177", "CTRL_LL", "CTRL_UL", "CTRL_PL", "CTRL_BS"],
        Ve.PUNCT_TABLE = ["", "\r", `\r
`, ". ", ", ", ": ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "{", "}", "CTRL_UL"],
        Ve.DIGIT_TABLE = ["CTRL_PS", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ",", ".", "CTRL_UL", "CTRL_US"];
        class Ne {
            constructor() {}
            static round(n) {
                return n === NaN ? 0 : n <= Number.MIN_SAFE_INTEGER ? Number.MIN_SAFE_INTEGER : n >= Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : n + (n < 0 ? -.5 : .5) | 0
            }
            static distance(n, r, s, o) {
                const a = n - s
                  , u = r - o;
                return Math.sqrt(a * a + u * u)
            }
            static sum(n) {
                let r = 0;
                for (let s = 0, o = n.length; s !== o; s++) {
                    const a = n[s];
                    r += a
                }
                return r
            }
        }
        class uo {
            static floatToIntBits(n) {
                return n
            }
        }
        uo.MAX_VALUE = Number.MAX_SAFE_INTEGER;
        class le {
            constructor(n, r) {
                this.x = n,
                this.y = r
            }
            getX() {
                return this.x
            }
            getY() {
                return this.y
            }
            equals(n) {
                if (n instanceof le) {
                    const r = n;
                    return this.x === r.x && this.y === r.y
                }
                return !1
            }
            hashCode() {
                return 31 * uo.floatToIntBits(this.x) + uo.floatToIntBits(this.y)
            }
            toString() {
                return "(" + this.x + "," + this.y + ")"
            }
            static orderBestPatterns(n) {
                const r = this.distance(n[0], n[1])
                  , s = this.distance(n[1], n[2])
                  , o = this.distance(n[0], n[2]);
                let a, u, d;
                if (s >= r && s >= o ? (u = n[0],
                a = n[1],
                d = n[2]) : o >= s && o >= r ? (u = n[1],
                a = n[0],
                d = n[2]) : (u = n[2],
                a = n[0],
                d = n[1]),
                this.crossProductZ(a, u, d) < 0) {
                    const h = a;
                    a = d,
                    d = h
                }
                n[0] = a,
                n[1] = u,
                n[2] = d
            }
            static distance(n, r) {
                return Ne.distance(n.x, n.y, r.x, r.y)
            }
            static crossProductZ(n, r, s) {
                const o = r.x
                  , a = r.y;
                return (s.x - o) * (n.y - a) - (s.y - a) * (n.x - o)
            }
        }
        class co {
            constructor(n, r) {
                this.bits = n,
                this.points = r
            }
            getBits() {
                return this.bits
            }
            getPoints() {
                return this.points
            }
        }
        class l1 extends co {
            constructor(n, r, s, o, a) {
                super(n, r),
                this.compact = s,
                this.nbDatablocks = o,
                this.nbLayers = a
            }
            getNbLayers() {
                return this.nbLayers
            }
            getNbDatablocks() {
                return this.nbDatablocks
            }
            isCompact() {
                return this.compact
            }
        }
        class Xn {
            constructor(n, r, s, o) {
                this.image = n,
                this.height = n.getHeight(),
                this.width = n.getWidth(),
                r == null && (r = Xn.INIT_SIZE),
                s == null && (s = n.getWidth() / 2 | 0),
                o == null && (o = n.getHeight() / 2 | 0);
                const a = r / 2 | 0;
                if (this.leftInit = s - a,
                this.rightInit = s + a,
                this.upInit = o - a,
                this.downInit = o + a,
                this.upInit < 0 || this.leftInit < 0 || this.downInit >= this.height || this.rightInit >= this.width)
                    throw new j
            }
            detect() {
                let n = this.leftInit
                  , r = this.rightInit
                  , s = this.upInit
                  , o = this.downInit
                  , a = !1
                  , u = !0
                  , d = !1
                  , h = !1
                  , p = !1
                  , w = !1
                  , C = !1;
                const A = this.width
                  , T = this.height;
                for (; u; ) {
                    u = !1;
                    let R = !0;
                    for (; (R || !h) && r < A; )
                        R = this.containsBlackPoint(s, o, r, !1),
                        R ? (r++,
                        u = !0,
                        h = !0) : h || r++;
                    if (r >= A) {
                        a = !0;
                        break
                    }
                    let b = !0;
                    for (; (b || !p) && o < T; )
                        b = this.containsBlackPoint(n, r, o, !0),
                        b ? (o++,
                        u = !0,
                        p = !0) : p || o++;
                    if (o >= T) {
                        a = !0;
                        break
                    }
                    let P = !0;
                    for (; (P || !w) && n >= 0; )
                        P = this.containsBlackPoint(s, o, n, !1),
                        P ? (n--,
                        u = !0,
                        w = !0) : w || n--;
                    if (n < 0) {
                        a = !0;
                        break
                    }
                    let z = !0;
                    for (; (z || !C) && s >= 0; )
                        z = this.containsBlackPoint(n, r, s, !0),
                        z ? (s--,
                        u = !0,
                        C = !0) : C || s--;
                    if (s < 0) {
                        a = !0;
                        break
                    }
                    u && (d = !0)
                }
                if (!a && d) {
                    const R = r - n;
                    let b = null;
                    for (let J = 1; b === null && J < R; J++)
                        b = this.getBlackPointOnSegment(n, o - J, n + J, o);
                    if (b == null)
                        throw new j;
                    let P = null;
                    for (let J = 1; P === null && J < R; J++)
                        P = this.getBlackPointOnSegment(n, s + J, n + J, s);
                    if (P == null)
                        throw new j;
                    let z = null;
                    for (let J = 1; z === null && J < R; J++)
                        z = this.getBlackPointOnSegment(r, s + J, r - J, s);
                    if (z == null)
                        throw new j;
                    let Q = null;
                    for (let J = 1; Q === null && J < R; J++)
                        Q = this.getBlackPointOnSegment(r, o - J, r - J, o);
                    if (Q == null)
                        throw new j;
                    return this.centerEdges(Q, b, z, P)
                } else
                    throw new j
            }
            getBlackPointOnSegment(n, r, s, o) {
                const a = Ne.round(Ne.distance(n, r, s, o))
                  , u = (s - n) / a
                  , d = (o - r) / a
                  , h = this.image;
                for (let p = 0; p < a; p++) {
                    const w = Ne.round(n + p * u)
                      , C = Ne.round(r + p * d);
                    if (h.get(w, C))
                        return new le(w,C)
                }
                return null
            }
            centerEdges(n, r, s, o) {
                const a = n.getX()
                  , u = n.getY()
                  , d = r.getX()
                  , h = r.getY()
                  , p = s.getX()
                  , w = s.getY()
                  , C = o.getX()
                  , A = o.getY()
                  , T = Xn.CORR;
                return a < this.width / 2 ? [new le(C - T,A + T), new le(d + T,h + T), new le(p - T,w - T), new le(a + T,u - T)] : [new le(C + T,A + T), new le(d + T,h - T), new le(p - T,w + T), new le(a - T,u - T)]
            }
            containsBlackPoint(n, r, s, o) {
                const a = this.image;
                if (o) {
                    for (let u = n; u <= r; u++)
                        if (a.get(u, s))
                            return !0
                } else
                    for (let u = n; u <= r; u++)
                        if (a.get(s, u))
                            return !0;
                return !1
            }
        }
        Xn.INIT_SIZE = 10,
        Xn.CORR = 1;
        class ta {
            static checkAndNudgePoints(n, r) {
                const s = n.getWidth()
                  , o = n.getHeight();
                let a = !0;
                for (let u = 0; u < r.length && a; u += 2) {
                    const d = Math.floor(r[u])
                      , h = Math.floor(r[u + 1]);
                    if (d < -1 || d > s || h < -1 || h > o)
                        throw new j;
                    a = !1,
                    d === -1 ? (r[u] = 0,
                    a = !0) : d === s && (r[u] = s - 1,
                    a = !0),
                    h === -1 ? (r[u + 1] = 0,
                    a = !0) : h === o && (r[u + 1] = o - 1,
                    a = !0)
                }
                a = !0;
                for (let u = r.length - 2; u >= 0 && a; u -= 2) {
                    const d = Math.floor(r[u])
                      , h = Math.floor(r[u + 1]);
                    if (d < -1 || d > s || h < -1 || h > o)
                        throw new j;
                    a = !1,
                    d === -1 ? (r[u] = 0,
                    a = !0) : d === s && (r[u] = s - 1,
                    a = !0),
                    h === -1 ? (r[u + 1] = 0,
                    a = !0) : h === o && (r[u + 1] = o - 1,
                    a = !0)
                }
            }
        }
        class An {
            constructor(n, r, s, o, a, u, d, h, p) {
                this.a11 = n,
                this.a21 = r,
                this.a31 = s,
                this.a12 = o,
                this.a22 = a,
                this.a32 = u,
                this.a13 = d,
                this.a23 = h,
                this.a33 = p
            }
            static quadrilateralToQuadrilateral(n, r, s, o, a, u, d, h, p, w, C, A, T, R, b, P) {
                const z = An.quadrilateralToSquare(n, r, s, o, a, u, d, h);
                return An.squareToQuadrilateral(p, w, C, A, T, R, b, P).times(z)
            }
            transformPoints(n) {
                const r = n.length
                  , s = this.a11
                  , o = this.a12
                  , a = this.a13
                  , u = this.a21
                  , d = this.a22
                  , h = this.a23
                  , p = this.a31
                  , w = this.a32
                  , C = this.a33;
                for (let A = 0; A < r; A += 2) {
                    const T = n[A]
                      , R = n[A + 1]
                      , b = a * T + h * R + C;
                    n[A] = (s * T + u * R + p) / b,
                    n[A + 1] = (o * T + d * R + w) / b
                }
            }
            transformPointsWithValues(n, r) {
                const s = this.a11
                  , o = this.a12
                  , a = this.a13
                  , u = this.a21
                  , d = this.a22
                  , h = this.a23
                  , p = this.a31
                  , w = this.a32
                  , C = this.a33
                  , A = n.length;
                for (let T = 0; T < A; T++) {
                    const R = n[T]
                      , b = r[T]
                      , P = a * R + h * b + C;
                    n[T] = (s * R + u * b + p) / P,
                    r[T] = (o * R + d * b + w) / P
                }
            }
            static squareToQuadrilateral(n, r, s, o, a, u, d, h) {
                const p = n - s + a - d
                  , w = r - o + u - h;
                if (p === 0 && w === 0)
                    return new An(s - n,a - s,n,o - r,u - o,r,0,0,1);
                {
                    const C = s - a
                      , A = d - a
                      , T = o - u
                      , R = h - u
                      , b = C * R - A * T
                      , P = (p * R - A * w) / b
                      , z = (C * w - p * T) / b;
                    return new An(s - n + P * s,d - n + z * d,n,o - r + P * o,h - r + z * h,r,P,z,1)
                }
            }
            static quadrilateralToSquare(n, r, s, o, a, u, d, h) {
                return An.squareToQuadrilateral(n, r, s, o, a, u, d, h).buildAdjoint()
            }
            buildAdjoint() {
                return new An(this.a22 * this.a33 - this.a23 * this.a32,this.a23 * this.a31 - this.a21 * this.a33,this.a21 * this.a32 - this.a22 * this.a31,this.a13 * this.a32 - this.a12 * this.a33,this.a11 * this.a33 - this.a13 * this.a31,this.a12 * this.a31 - this.a11 * this.a32,this.a12 * this.a23 - this.a13 * this.a22,this.a13 * this.a21 - this.a11 * this.a23,this.a11 * this.a22 - this.a12 * this.a21)
            }
            times(n) {
                return new An(this.a11 * n.a11 + this.a21 * n.a12 + this.a31 * n.a13,this.a11 * n.a21 + this.a21 * n.a22 + this.a31 * n.a23,this.a11 * n.a31 + this.a21 * n.a32 + this.a31 * n.a33,this.a12 * n.a11 + this.a22 * n.a12 + this.a32 * n.a13,this.a12 * n.a21 + this.a22 * n.a22 + this.a32 * n.a23,this.a12 * n.a31 + this.a22 * n.a32 + this.a32 * n.a33,this.a13 * n.a11 + this.a23 * n.a12 + this.a33 * n.a13,this.a13 * n.a21 + this.a23 * n.a22 + this.a33 * n.a23,this.a13 * n.a31 + this.a23 * n.a32 + this.a33 * n.a33)
            }
        }
        class a1 extends ta {
            sampleGrid(n, r, s, o, a, u, d, h, p, w, C, A, T, R, b, P, z, Q, J) {
                const Y = An.quadrilateralToQuadrilateral(o, a, u, d, h, p, w, C, A, T, R, b, P, z, Q, J);
                return this.sampleGridWithTransform(n, r, s, Y)
            }
            sampleGridWithTransform(n, r, s, o) {
                if (r <= 0 || s <= 0)
                    throw new j;
                const a = new lt(r,s)
                  , u = new Float32Array(2 * r);
                for (let d = 0; d < s; d++) {
                    const h = u.length
                      , p = d + .5;
                    for (let w = 0; w < h; w += 2)
                        u[w] = w / 2 + .5,
                        u[w + 1] = p;
                    o.transformPoints(u),
                    ta.checkAndNudgePoints(n, u);
                    try {
                        for (let w = 0; w < h; w += 2)
                            n.get(Math.floor(u[w]), Math.floor(u[w + 1])) && a.set(w / 2, d)
                    } catch {
                        throw new j
                    }
                }
                return a
            }
        }
        class or {
            static setGridSampler(n) {
                or.gridSampler = n
            }
            static getInstance() {
                return or.gridSampler
            }
        }
        or.gridSampler = new a1;
        class Lt {
            constructor(n, r) {
                this.x = n,
                this.y = r
            }
            toResultPoint() {
                return new le(this.getX(),this.getY())
            }
            getX() {
                return this.x
            }
            getY() {
                return this.y
            }
        }
        class u1 {
            constructor(n) {
                this.EXPECTED_CORNER_BITS = new Int32Array([3808, 476, 2107, 1799]),
                this.image = n
            }
            detect() {
                return this.detectMirror(!1)
            }
            detectMirror(n) {
                let r = this.getMatrixCenter()
                  , s = this.getBullsEyeCorners(r);
                if (n) {
                    let u = s[0];
                    s[0] = s[2],
                    s[2] = u
                }
                this.extractParameters(s);
                let o = this.sampleGrid(this.image, s[this.shift % 4], s[(this.shift + 1) % 4], s[(this.shift + 2) % 4], s[(this.shift + 3) % 4])
                  , a = this.getMatrixCornerPoints(s);
                return new l1(o,a,this.compact,this.nbDataBlocks,this.nbLayers)
            }
            extractParameters(n) {
                if (!this.isValidPoint(n[0]) || !this.isValidPoint(n[1]) || !this.isValidPoint(n[2]) || !this.isValidPoint(n[3]))
                    throw new j;
                let r = 2 * this.nbCenterLayers
                  , s = new Int32Array([this.sampleLine(n[0], n[1], r), this.sampleLine(n[1], n[2], r), this.sampleLine(n[2], n[3], r), this.sampleLine(n[3], n[0], r)]);
                this.shift = this.getRotation(s, r);
                let o = 0;
                for (let u = 0; u < 4; u++) {
                    let d = s[(this.shift + u) % 4];
                    this.compact ? (o <<= 7,
                    o += d >> 1 & 127) : (o <<= 10,
                    o += (d >> 2 & 992) + (d >> 1 & 31))
                }
                let a = this.getCorrectedParameterData(o, this.compact);
                this.compact ? (this.nbLayers = (a >> 6) + 1,
                this.nbDataBlocks = (a & 63) + 1) : (this.nbLayers = (a >> 11) + 1,
                this.nbDataBlocks = (a & 2047) + 1)
            }
            getRotation(n, r) {
                let s = 0;
                n.forEach((o,a,u)=>{
                    let d = (o >> r - 2 << 1) + (o & 1);
                    s = (s << 3) + d
                }
                ),
                s = ((s & 1) << 11) + (s >> 1);
                for (let o = 0; o < 4; o++)
                    if (N.bitCount(s ^ this.EXPECTED_CORNER_BITS[o]) <= 2)
                        return o;
                throw new j
            }
            getCorrectedParameterData(n, r) {
                let s, o;
                r ? (s = 7,
                o = 2) : (s = 10,
                o = 4);
                let a = s - o
                  , u = new Int32Array(s);
                for (let h = s - 1; h >= 0; --h)
                    u[h] = n & 15,
                    n >>= 4;
                try {
                    new es(Oe.AZTEC_PARAM).decode(u, a)
                } catch {
                    throw new j
                }
                let d = 0;
                for (let h = 0; h < o; h++)
                    d = (d << 4) + u[h];
                return d
            }
            getBullsEyeCorners(n) {
                let r = n
                  , s = n
                  , o = n
                  , a = n
                  , u = !0;
                for (this.nbCenterLayers = 1; this.nbCenterLayers < 9; this.nbCenterLayers++) {
                    let C = this.getFirstDifferent(r, u, 1, -1)
                      , A = this.getFirstDifferent(s, u, 1, 1)
                      , T = this.getFirstDifferent(o, u, -1, 1)
                      , R = this.getFirstDifferent(a, u, -1, -1);
                    if (this.nbCenterLayers > 2) {
                        let b = this.distancePoint(R, C) * this.nbCenterLayers / (this.distancePoint(a, r) * (this.nbCenterLayers + 2));
                        if (b < .75 || b > 1.25 || !this.isWhiteOrBlackRectangle(C, A, T, R))
                            break
                    }
                    r = C,
                    s = A,
                    o = T,
                    a = R,
                    u = !u
                }
                if (this.nbCenterLayers !== 5 && this.nbCenterLayers !== 7)
                    throw new j;
                this.compact = this.nbCenterLayers === 5;
                let d = new le(r.getX() + .5,r.getY() - .5)
                  , h = new le(s.getX() + .5,s.getY() + .5)
                  , p = new le(o.getX() - .5,o.getY() + .5)
                  , w = new le(a.getX() - .5,a.getY() - .5);
                return this.expandSquare([d, h, p, w], 2 * this.nbCenterLayers - 3, 2 * this.nbCenterLayers)
            }
            getMatrixCenter() {
                let n, r, s, o;
                try {
                    let d = new Xn(this.image).detect();
                    n = d[0],
                    r = d[1],
                    s = d[2],
                    o = d[3]
                } catch {
                    let h = this.image.getWidth() / 2
                      , p = this.image.getHeight() / 2;
                    n = this.getFirstDifferent(new Lt(h + 7,p - 7), !1, 1, -1).toResultPoint(),
                    r = this.getFirstDifferent(new Lt(h + 7,p + 7), !1, 1, 1).toResultPoint(),
                    s = this.getFirstDifferent(new Lt(h - 7,p + 7), !1, -1, 1).toResultPoint(),
                    o = this.getFirstDifferent(new Lt(h - 7,p - 7), !1, -1, -1).toResultPoint()
                }
                let a = Ne.round((n.getX() + o.getX() + r.getX() + s.getX()) / 4)
                  , u = Ne.round((n.getY() + o.getY() + r.getY() + s.getY()) / 4);
                try {
                    let d = new Xn(this.image,15,a,u).detect();
                    n = d[0],
                    r = d[1],
                    s = d[2],
                    o = d[3]
                } catch {
                    n = this.getFirstDifferent(new Lt(a + 7,u - 7), !1, 1, -1).toResultPoint(),
                    r = this.getFirstDifferent(new Lt(a + 7,u + 7), !1, 1, 1).toResultPoint(),
                    s = this.getFirstDifferent(new Lt(a - 7,u + 7), !1, -1, 1).toResultPoint(),
                    o = this.getFirstDifferent(new Lt(a - 7,u - 7), !1, -1, -1).toResultPoint()
                }
                return a = Ne.round((n.getX() + o.getX() + r.getX() + s.getX()) / 4),
                u = Ne.round((n.getY() + o.getY() + r.getY() + s.getY()) / 4),
                new Lt(a,u)
            }
            getMatrixCornerPoints(n) {
                return this.expandSquare(n, 2 * this.nbCenterLayers, this.getDimension())
            }
            sampleGrid(n, r, s, o, a) {
                let u = or.getInstance()
                  , d = this.getDimension()
                  , h = d / 2 - this.nbCenterLayers
                  , p = d / 2 + this.nbCenterLayers;
                return u.sampleGrid(n, d, d, h, h, p, h, p, p, h, p, r.getX(), r.getY(), s.getX(), s.getY(), o.getX(), o.getY(), a.getX(), a.getY())
            }
            sampleLine(n, r, s) {
                let o = 0
                  , a = this.distanceResultPoint(n, r)
                  , u = a / s
                  , d = n.getX()
                  , h = n.getY()
                  , p = u * (r.getX() - n.getX()) / a
                  , w = u * (r.getY() - n.getY()) / a;
                for (let C = 0; C < s; C++)
                    this.image.get(Ne.round(d + C * p), Ne.round(h + C * w)) && (o |= 1 << s - C - 1);
                return o
            }
            isWhiteOrBlackRectangle(n, r, s, o) {
                let a = 3;
                n = new Lt(n.getX() - a,n.getY() + a),
                r = new Lt(r.getX() - a,r.getY() - a),
                s = new Lt(s.getX() + a,s.getY() - a),
                o = new Lt(o.getX() + a,o.getY() + a);
                let u = this.getColor(o, n);
                if (u === 0)
                    return !1;
                let d = this.getColor(n, r);
                return d !== u || (d = this.getColor(r, s),
                d !== u) ? !1 : (d = this.getColor(s, o),
                d === u)
            }
            getColor(n, r) {
                let s = this.distancePoint(n, r)
                  , o = (r.getX() - n.getX()) / s
                  , a = (r.getY() - n.getY()) / s
                  , u = 0
                  , d = n.getX()
                  , h = n.getY()
                  , p = this.image.get(n.getX(), n.getY())
                  , w = Math.ceil(s);
                for (let A = 0; A < w; A++)
                    d += o,
                    h += a,
                    this.image.get(Ne.round(d), Ne.round(h)) !== p && u++;
                let C = u / s;
                return C > .1 && C < .9 ? 0 : C <= .1 === p ? 1 : -1
            }
            getFirstDifferent(n, r, s, o) {
                let a = n.getX() + s
                  , u = n.getY() + o;
                for (; this.isValid(a, u) && this.image.get(a, u) === r; )
                    a += s,
                    u += o;
                for (a -= s,
                u -= o; this.isValid(a, u) && this.image.get(a, u) === r; )
                    a += s;
                for (a -= s; this.isValid(a, u) && this.image.get(a, u) === r; )
                    u += o;
                return u -= o,
                new Lt(a,u)
            }
            expandSquare(n, r, s) {
                let o = s / (2 * r)
                  , a = n[0].getX() - n[2].getX()
                  , u = n[0].getY() - n[2].getY()
                  , d = (n[0].getX() + n[2].getX()) / 2
                  , h = (n[0].getY() + n[2].getY()) / 2
                  , p = new le(d + o * a,h + o * u)
                  , w = new le(d - o * a,h - o * u);
                a = n[1].getX() - n[3].getX(),
                u = n[1].getY() - n[3].getY(),
                d = (n[1].getX() + n[3].getX()) / 2,
                h = (n[1].getY() + n[3].getY()) / 2;
                let C = new le(d + o * a,h + o * u)
                  , A = new le(d - o * a,h - o * u);
                return [p, C, w, A]
            }
            isValid(n, r) {
                return n >= 0 && n < this.image.getWidth() && r > 0 && r < this.image.getHeight()
            }
            isValidPoint(n) {
                let r = Ne.round(n.getX())
                  , s = Ne.round(n.getY());
                return this.isValid(r, s)
            }
            distancePoint(n, r) {
                return Ne.distance(n.getX(), n.getY(), r.getX(), r.getY())
            }
            distanceResultPoint(n, r) {
                return Ne.distance(n.getX(), n.getY(), r.getX(), r.getY())
            }
            getDimension() {
                return this.compact ? 4 * this.nbLayers + 11 : this.nbLayers <= 4 ? 4 * this.nbLayers + 15 : 4 * this.nbLayers + 2 * (N.truncDivision(this.nbLayers - 4, 8) + 1) + 15
            }
        }
        class fo {
            decode(n, r=null) {
                let s = null
                  , o = new u1(n.getBlackMatrix())
                  , a = null
                  , u = null;
                try {
                    let w = o.detectMirror(!1);
                    a = w.getPoints(),
                    this.reportFoundResultPoints(r, a),
                    u = new Ve().decode(w)
                } catch (w) {
                    s = w
                }
                if (u == null)
                    try {
                        let w = o.detectMirror(!0);
                        a = w.getPoints(),
                        this.reportFoundResultPoints(r, a),
                        u = new Ve().decode(w)
                    } catch (w) {
                        throw s ?? w
                    }
                let d = new Qe(u.getText(),u.getRawBytes(),u.getNumBits(),a,ae.AZTEC,M.currentTimeMillis())
                  , h = u.getByteSegments();
                h != null && d.putMetadata(yt.BYTE_SEGMENTS, h);
                let p = u.getECLevel();
                return p != null && d.putMetadata(yt.ERROR_CORRECTION_LEVEL, p),
                d
            }
            reportFoundResultPoints(n, r) {
                if (n != null) {
                    let s = n.get(Z.NEED_RESULT_POINT_CALLBACK);
                    s != null && r.forEach((o,a,u)=>{
                        s.foundPossibleResultPoint(o)
                    }
                    )
                }
            }
            reset() {}
        }
        class p2 extends cn {
            constructor(n=500) {
                super(new fo, n)
            }
        }
        class ft {
            decode(n, r) {
                try {
                    return this.doDecode(n, r)
                } catch {
                    if (r && r.get(Z.TRY_HARDER) === !0 && n.isRotateSupported()) {
                        const a = n.rotateCounterClockwise()
                          , u = this.doDecode(a, r)
                          , d = u.getResultMetadata();
                        let h = 270;
                        d !== null && d.get(yt.ORIENTATION) === !0 && (h = h + d.get(yt.ORIENTATION) % 360),
                        u.putMetadata(yt.ORIENTATION, h);
                        const p = u.getResultPoints();
                        if (p !== null) {
                            const w = a.getHeight();
                            for (let C = 0; C < p.length; C++)
                                p[C] = new le(w - p[C].getY() - 1,p[C].getX())
                        }
                        return u
                    } else
                        throw new j
                }
            }
            reset() {}
            doDecode(n, r) {
                const s = n.getWidth()
                  , o = n.getHeight();
                let a = new V(s);
                const u = r && r.get(Z.TRY_HARDER) === !0
                  , d = Math.max(1, o >> (u ? 8 : 5));
                let h;
                u ? h = o : h = 15;
                const p = Math.trunc(o / 2);
                for (let w = 0; w < h; w++) {
                    const C = Math.trunc((w + 1) / 2)
                      , A = (w & 1) === 0
                      , T = p + d * (A ? C : -C);
                    if (T < 0 || T >= o)
                        break;
                    try {
                        a = n.getBlackRow(T, a)
                    } catch {
                        continue
                    }
                    for (let R = 0; R < 2; R++) {
                        if (R === 1 && (a.reverse(),
                        r && r.get(Z.NEED_RESULT_POINT_CALLBACK) === !0)) {
                            const b = new Map;
                            r.forEach((P,z)=>b.set(z, P)),
                            b.delete(Z.NEED_RESULT_POINT_CALLBACK),
                            r = b
                        }
                        try {
                            const b = this.decodeRow(T, a, r);
                            if (R === 1) {
                                b.putMetadata(yt.ORIENTATION, 180);
                                const P = b.getResultPoints();
                                P !== null && (P[0] = new le(s - P[0].getX() - 1,P[0].getY()),
                                P[1] = new le(s - P[1].getX() - 1,P[1].getY()))
                            }
                            return b
                        } catch {}
                    }
                }
                throw new j
            }
            static recordPattern(n, r, s) {
                const o = s.length;
                for (let p = 0; p < o; p++)
                    s[p] = 0;
                const a = n.getSize();
                if (r >= a)
                    throw new j;
                let u = !n.get(r)
                  , d = 0
                  , h = r;
                for (; h < a; ) {
                    if (n.get(h) !== u)
                        s[d]++;
                    else {
                        if (++d === o)
                            break;
                        s[d] = 1,
                        u = !u
                    }
                    h++
                }
                if (!(d === o || d === o - 1 && h === a))
                    throw new j
            }
            static recordPatternInReverse(n, r, s) {
                let o = s.length
                  , a = n.get(r);
                for (; r > 0 && o >= 0; )
                    n.get(--r) !== a && (o--,
                    a = !a);
                if (o >= 0)
                    throw new j;
                ft.recordPattern(n, r + 1, s)
            }
            static patternMatchVariance(n, r, s) {
                const o = n.length;
                let a = 0
                  , u = 0;
                for (let p = 0; p < o; p++)
                    a += n[p],
                    u += r[p];
                if (a < u)
                    return Number.POSITIVE_INFINITY;
                const d = a / u;
                s *= d;
                let h = 0;
                for (let p = 0; p < o; p++) {
                    const w = n[p]
                      , C = r[p] * d
                      , A = w > C ? w - C : C - w;
                    if (A > s)
                        return Number.POSITIVE_INFINITY;
                    h += A
                }
                return h / a
            }
        }
        class ne extends ft {
            static findStartPattern(n) {
                const r = n.getSize()
                  , s = n.getNextSet(0);
                let o = 0
                  , a = Int32Array.from([0, 0, 0, 0, 0, 0])
                  , u = s
                  , d = !1;
                const h = 6;
                for (let p = s; p < r; p++)
                    if (n.get(p) !== d)
                        a[o]++;
                    else {
                        if (o === h - 1) {
                            let w = ne.MAX_AVG_VARIANCE
                              , C = -1;
                            for (let A = ne.CODE_START_A; A <= ne.CODE_START_C; A++) {
                                const T = ft.patternMatchVariance(a, ne.CODE_PATTERNS[A], ne.MAX_INDIVIDUAL_VARIANCE);
                                T < w && (w = T,
                                C = A)
                            }
                            if (C >= 0 && n.isRange(Math.max(0, u - (p - u) / 2), u, !1))
                                return Int32Array.from([u, p, C]);
                            u += a[0] + a[1],
                            a = a.slice(2, a.length - 1),
                            a[o - 1] = 0,
                            a[o] = 0,
                            o--
                        } else
                            o++;
                        a[o] = 1,
                        d = !d
                    }
                throw new j
            }
            static decodeCode(n, r, s) {
                ft.recordPattern(n, s, r);
                let o = ne.MAX_AVG_VARIANCE
                  , a = -1;
                for (let u = 0; u < ne.CODE_PATTERNS.length; u++) {
                    const d = ne.CODE_PATTERNS[u]
                      , h = this.patternMatchVariance(r, d, ne.MAX_INDIVIDUAL_VARIANCE);
                    h < o && (o = h,
                    a = u)
                }
                if (a >= 0)
                    return a;
                throw new j
            }
            decodeRow(n, r, s) {
                const o = s && s.get(Z.ASSUME_GS1) === !0
                  , a = ne.findStartPattern(r)
                  , u = a[2];
                let d = 0;
                const h = new Uint8Array(20);
                h[d++] = u;
                let p;
                switch (u) {
                case ne.CODE_START_A:
                    p = ne.CODE_CODE_A;
                    break;
                case ne.CODE_START_B:
                    p = ne.CODE_CODE_B;
                    break;
                case ne.CODE_START_C:
                    p = ne.CODE_CODE_C;
                    break;
                default:
                    throw new F
                }
                let w = !1
                  , C = !1
                  , A = ""
                  , T = a[0]
                  , R = a[1];
                const b = Int32Array.from([0, 0, 0, 0, 0, 0]);
                let P = 0
                  , z = 0
                  , Q = u
                  , J = 0
                  , Y = !0
                  , Se = !1
                  , we = !1;
                for (; !w; ) {
                    const xi = C;
                    switch (C = !1,
                    P = z,
                    z = ne.decodeCode(r, b, R),
                    h[d++] = z,
                    z !== ne.CODE_STOP && (Y = !0),
                    z !== ne.CODE_STOP && (J++,
                    Q += J * z),
                    T = R,
                    R += b.reduce((W2,G2)=>W2 + G2, 0),
                    z) {
                    case ne.CODE_START_A:
                    case ne.CODE_START_B:
                    case ne.CODE_START_C:
                        throw new F
                    }
                    switch (p) {
                    case ne.CODE_CODE_A:
                        if (z < 64)
                            we === Se ? A += String.fromCharCode(32 + z) : A += String.fromCharCode(32 + z + 128),
                            we = !1;
                        else if (z < 96)
                            we === Se ? A += String.fromCharCode(z - 64) : A += String.fromCharCode(z + 64),
                            we = !1;
                        else
                            switch (z !== ne.CODE_STOP && (Y = !1),
                            z) {
                            case ne.CODE_FNC_1:
                                o && (A.length === 0 ? A += "]C1" : A += "");
                                break;
                            case ne.CODE_FNC_2:
                            case ne.CODE_FNC_3:
                                break;
                            case ne.CODE_FNC_4_A:
                                !Se && we ? (Se = !0,
                                we = !1) : Se && we ? (Se = !1,
                                we = !1) : we = !0;
                                break;
                            case ne.CODE_SHIFT:
                                C = !0,
                                p = ne.CODE_CODE_B;
                                break;
                            case ne.CODE_CODE_B:
                                p = ne.CODE_CODE_B;
                                break;
                            case ne.CODE_CODE_C:
                                p = ne.CODE_CODE_C;
                                break;
                            case ne.CODE_STOP:
                                w = !0;
                                break
                            }
                        break;
                    case ne.CODE_CODE_B:
                        if (z < 96)
                            we === Se ? A += String.fromCharCode(32 + z) : A += String.fromCharCode(32 + z + 128),
                            we = !1;
                        else
                            switch (z !== ne.CODE_STOP && (Y = !1),
                            z) {
                            case ne.CODE_FNC_1:
                                o && (A.length === 0 ? A += "]C1" : A += "");
                                break;
                            case ne.CODE_FNC_2:
                            case ne.CODE_FNC_3:
                                break;
                            case ne.CODE_FNC_4_B:
                                !Se && we ? (Se = !0,
                                we = !1) : Se && we ? (Se = !1,
                                we = !1) : we = !0;
                                break;
                            case ne.CODE_SHIFT:
                                C = !0,
                                p = ne.CODE_CODE_A;
                                break;
                            case ne.CODE_CODE_A:
                                p = ne.CODE_CODE_A;
                                break;
                            case ne.CODE_CODE_C:
                                p = ne.CODE_CODE_C;
                                break;
                            case ne.CODE_STOP:
                                w = !0;
                                break
                            }
                        break;
                    case ne.CODE_CODE_C:
                        if (z < 100)
                            z < 10 && (A += "0"),
                            A += z;
                        else
                            switch (z !== ne.CODE_STOP && (Y = !1),
                            z) {
                            case ne.CODE_FNC_1:
                                o && (A.length === 0 ? A += "]C1" : A += "");
                                break;
                            case ne.CODE_CODE_A:
                                p = ne.CODE_CODE_A;
                                break;
                            case ne.CODE_CODE_B:
                                p = ne.CODE_CODE_B;
                                break;
                            case ne.CODE_STOP:
                                w = !0;
                                break
                            }
                        break
                    }
                    xi && (p = p === ne.CODE_CODE_A ? ne.CODE_CODE_B : ne.CODE_CODE_A)
                }
                const Yt = R - T;
                if (R = r.getNextUnset(R),
                !r.isRange(R, Math.min(r.getSize(), R + (R - T) / 2), !1))
                    throw new j;
                if (Q -= J * P,
                Q % 103 !== P)
                    throw new B;
                const vn = A.length;
                if (vn === 0)
                    throw new j;
                vn > 0 && Y && (p === ne.CODE_CODE_C ? A = A.substring(0, vn - 2) : A = A.substring(0, vn - 1));
                const Zt = (a[1] + a[0]) / 2
                  , Fe = T + Yt / 2
                  , Nt = h.length
                  , tn = new Uint8Array(Nt);
                for (let xi = 0; xi < Nt; xi++)
                    tn[xi] = h[xi];
                const pi = [new le(Zt,n), new le(Fe,n)];
                return new Qe(A,tn,0,pi,ae.CODE_128,new Date().getTime())
            }
        }
        ne.CODE_PATTERNS = [Int32Array.from([2, 1, 2, 2, 2, 2]), Int32Array.from([2, 2, 2, 1, 2, 2]), Int32Array.from([2, 2, 2, 2, 2, 1]), Int32Array.from([1, 2, 1, 2, 2, 3]), Int32Array.from([1, 2, 1, 3, 2, 2]), Int32Array.from([1, 3, 1, 2, 2, 2]), Int32Array.from([1, 2, 2, 2, 1, 3]), Int32Array.from([1, 2, 2, 3, 1, 2]), Int32Array.from([1, 3, 2, 2, 1, 2]), Int32Array.from([2, 2, 1, 2, 1, 3]), Int32Array.from([2, 2, 1, 3, 1, 2]), Int32Array.from([2, 3, 1, 2, 1, 2]), Int32Array.from([1, 1, 2, 2, 3, 2]), Int32Array.from([1, 2, 2, 1, 3, 2]), Int32Array.from([1, 2, 2, 2, 3, 1]), Int32Array.from([1, 1, 3, 2, 2, 2]), Int32Array.from([1, 2, 3, 1, 2, 2]), Int32Array.from([1, 2, 3, 2, 2, 1]), Int32Array.from([2, 2, 3, 2, 1, 1]), Int32Array.from([2, 2, 1, 1, 3, 2]), Int32Array.from([2, 2, 1, 2, 3, 1]), Int32Array.from([2, 1, 3, 2, 1, 2]), Int32Array.from([2, 2, 3, 1, 1, 2]), Int32Array.from([3, 1, 2, 1, 3, 1]), Int32Array.from([3, 1, 1, 2, 2, 2]), Int32Array.from([3, 2, 1, 1, 2, 2]), Int32Array.from([3, 2, 1, 2, 2, 1]), Int32Array.from([3, 1, 2, 2, 1, 2]), Int32Array.from([3, 2, 2, 1, 1, 2]), Int32Array.from([3, 2, 2, 2, 1, 1]), Int32Array.from([2, 1, 2, 1, 2, 3]), Int32Array.from([2, 1, 2, 3, 2, 1]), Int32Array.from([2, 3, 2, 1, 2, 1]), Int32Array.from([1, 1, 1, 3, 2, 3]), Int32Array.from([1, 3, 1, 1, 2, 3]), Int32Array.from([1, 3, 1, 3, 2, 1]), Int32Array.from([1, 1, 2, 3, 1, 3]), Int32Array.from([1, 3, 2, 1, 1, 3]), Int32Array.from([1, 3, 2, 3, 1, 1]), Int32Array.from([2, 1, 1, 3, 1, 3]), Int32Array.from([2, 3, 1, 1, 1, 3]), Int32Array.from([2, 3, 1, 3, 1, 1]), Int32Array.from([1, 1, 2, 1, 3, 3]), Int32Array.from([1, 1, 2, 3, 3, 1]), Int32Array.from([1, 3, 2, 1, 3, 1]), Int32Array.from([1, 1, 3, 1, 2, 3]), Int32Array.from([1, 1, 3, 3, 2, 1]), Int32Array.from([1, 3, 3, 1, 2, 1]), Int32Array.from([3, 1, 3, 1, 2, 1]), Int32Array.from([2, 1, 1, 3, 3, 1]), Int32Array.from([2, 3, 1, 1, 3, 1]), Int32Array.from([2, 1, 3, 1, 1, 3]), Int32Array.from([2, 1, 3, 3, 1, 1]), Int32Array.from([2, 1, 3, 1, 3, 1]), Int32Array.from([3, 1, 1, 1, 2, 3]), Int32Array.from([3, 1, 1, 3, 2, 1]), Int32Array.from([3, 3, 1, 1, 2, 1]), Int32Array.from([3, 1, 2, 1, 1, 3]), Int32Array.from([3, 1, 2, 3, 1, 1]), Int32Array.from([3, 3, 2, 1, 1, 1]), Int32Array.from([3, 1, 4, 1, 1, 1]), Int32Array.from([2, 2, 1, 4, 1, 1]), Int32Array.from([4, 3, 1, 1, 1, 1]), Int32Array.from([1, 1, 1, 2, 2, 4]), Int32Array.from([1, 1, 1, 4, 2, 2]), Int32Array.from([1, 2, 1, 1, 2, 4]), Int32Array.from([1, 2, 1, 4, 2, 1]), Int32Array.from([1, 4, 1, 1, 2, 2]), Int32Array.from([1, 4, 1, 2, 2, 1]), Int32Array.from([1, 1, 2, 2, 1, 4]), Int32Array.from([1, 1, 2, 4, 1, 2]), Int32Array.from([1, 2, 2, 1, 1, 4]), Int32Array.from([1, 2, 2, 4, 1, 1]), Int32Array.from([1, 4, 2, 1, 1, 2]), Int32Array.from([1, 4, 2, 2, 1, 1]), Int32Array.from([2, 4, 1, 2, 1, 1]), Int32Array.from([2, 2, 1, 1, 1, 4]), Int32Array.from([4, 1, 3, 1, 1, 1]), Int32Array.from([2, 4, 1, 1, 1, 2]), Int32Array.from([1, 3, 4, 1, 1, 1]), Int32Array.from([1, 1, 1, 2, 4, 2]), Int32Array.from([1, 2, 1, 1, 4, 2]), Int32Array.from([1, 2, 1, 2, 4, 1]), Int32Array.from([1, 1, 4, 2, 1, 2]), Int32Array.from([1, 2, 4, 1, 1, 2]), Int32Array.from([1, 2, 4, 2, 1, 1]), Int32Array.from([4, 1, 1, 2, 1, 2]), Int32Array.from([4, 2, 1, 1, 1, 2]), Int32Array.from([4, 2, 1, 2, 1, 1]), Int32Array.from([2, 1, 2, 1, 4, 1]), Int32Array.from([2, 1, 4, 1, 2, 1]), Int32Array.from([4, 1, 2, 1, 2, 1]), Int32Array.from([1, 1, 1, 1, 4, 3]), Int32Array.from([1, 1, 1, 3, 4, 1]), Int32Array.from([1, 3, 1, 1, 4, 1]), Int32Array.from([1, 1, 4, 1, 1, 3]), Int32Array.from([1, 1, 4, 3, 1, 1]), Int32Array.from([4, 1, 1, 1, 1, 3]), Int32Array.from([4, 1, 1, 3, 1, 1]), Int32Array.from([1, 1, 3, 1, 4, 1]), Int32Array.from([1, 1, 4, 1, 3, 1]), Int32Array.from([3, 1, 1, 1, 4, 1]), Int32Array.from([4, 1, 1, 1, 3, 1]), Int32Array.from([2, 1, 1, 4, 1, 2]), Int32Array.from([2, 1, 1, 2, 1, 4]), Int32Array.from([2, 1, 1, 2, 3, 2]), Int32Array.from([2, 3, 3, 1, 1, 1, 2])],
        ne.MAX_AVG_VARIANCE = .25,
        ne.MAX_INDIVIDUAL_VARIANCE = .7,
        ne.CODE_SHIFT = 98,
        ne.CODE_CODE_C = 99,
        ne.CODE_CODE_B = 100,
        ne.CODE_CODE_A = 101,
        ne.CODE_FNC_1 = 102,
        ne.CODE_FNC_2 = 97,
        ne.CODE_FNC_3 = 96,
        ne.CODE_FNC_4_A = 101,
        ne.CODE_FNC_4_B = 100,
        ne.CODE_START_A = 103,
        ne.CODE_START_B = 104,
        ne.CODE_START_C = 105,
        ne.CODE_STOP = 106;
        class gt extends ft {
            constructor(n=!1, r=!1) {
                super(),
                this.usingCheckDigit = n,
                this.extendedMode = r,
                this.decodeRowResult = "",
                this.counters = new Int32Array(9)
            }
            decodeRow(n, r, s) {
                let o = this.counters;
                o.fill(0),
                this.decodeRowResult = "";
                let a = gt.findAsteriskPattern(r, o), u = r.getNextSet(a[1]), d = r.getSize(), h, p;
                do {
                    gt.recordPattern(r, u, o);
                    let b = gt.toNarrowWidePattern(o);
                    if (b < 0)
                        throw new j;
                    h = gt.patternToChar(b),
                    this.decodeRowResult += h,
                    p = u;
                    for (let P of o)
                        u += P;
                    u = r.getNextSet(u)
                } while (h !== "*");
                this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
                let w = 0;
                for (let b of o)
                    w += b;
                let C = u - p - w;
                if (u !== d && C * 2 < w)
                    throw new j;
                if (this.usingCheckDigit) {
                    let b = this.decodeRowResult.length - 1
                      , P = 0;
                    for (let z = 0; z < b; z++)
                        P += gt.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(z));
                    if (this.decodeRowResult.charAt(b) !== gt.ALPHABET_STRING.charAt(P % 43))
                        throw new B;
                    this.decodeRowResult = this.decodeRowResult.substring(0, b)
                }
                if (this.decodeRowResult.length === 0)
                    throw new j;
                let A;
                this.extendedMode ? A = gt.decodeExtended(this.decodeRowResult) : A = this.decodeRowResult;
                let T = (a[1] + a[0]) / 2
                  , R = p + w / 2;
                return new Qe(A,null,0,[new le(T,n), new le(R,n)],ae.CODE_39,new Date().getTime())
            }
            static findAsteriskPattern(n, r) {
                let s = n.getSize()
                  , o = n.getNextSet(0)
                  , a = 0
                  , u = o
                  , d = !1
                  , h = r.length;
                for (let p = o; p < s; p++)
                    if (n.get(p) !== d)
                        r[a]++;
                    else {
                        if (a === h - 1) {
                            if (this.toNarrowWidePattern(r) === gt.ASTERISK_ENCODING && n.isRange(Math.max(0, u - Math.floor((p - u) / 2)), u, !1))
                                return [u, p];
                            u += r[0] + r[1],
                            r.copyWithin(0, 2, 2 + a - 1),
                            r[a - 1] = 0,
                            r[a] = 0,
                            a--
                        } else
                            a++;
                        r[a] = 1,
                        d = !d
                    }
                throw new j
            }
            static toNarrowWidePattern(n) {
                let r = n.length, s = 0, o;
                do {
                    let a = 2147483647;
                    for (let h of n)
                        h < a && h > s && (a = h);
                    s = a,
                    o = 0;
                    let u = 0
                      , d = 0;
                    for (let h = 0; h < r; h++) {
                        let p = n[h];
                        p > s && (d |= 1 << r - 1 - h,
                        o++,
                        u += p)
                    }
                    if (o === 3) {
                        for (let h = 0; h < r && o > 0; h++) {
                            let p = n[h];
                            if (p > s && (o--,
                            p * 2 >= u))
                                return -1
                        }
                        return d
                    }
                } while (o > 3);
                return -1
            }
            static patternToChar(n) {
                for (let r = 0; r < gt.CHARACTER_ENCODINGS.length; r++)
                    if (gt.CHARACTER_ENCODINGS[r] === n)
                        return gt.ALPHABET_STRING.charAt(r);
                if (n === gt.ASTERISK_ENCODING)
                    return "*";
                throw new j
            }
            static decodeExtended(n) {
                let r = n.length
                  , s = "";
                for (let o = 0; o < r; o++) {
                    let a = n.charAt(o);
                    if (a === "+" || a === "$" || a === "%" || a === "/") {
                        let u = n.charAt(o + 1)
                          , d = "\0";
                        switch (a) {
                        case "+":
                            if (u >= "A" && u <= "Z")
                                d = String.fromCharCode(u.charCodeAt(0) + 32);
                            else
                                throw new F;
                            break;
                        case "$":
                            if (u >= "A" && u <= "Z")
                                d = String.fromCharCode(u.charCodeAt(0) - 64);
                            else
                                throw new F;
                            break;
                        case "%":
                            if (u >= "A" && u <= "E")
                                d = String.fromCharCode(u.charCodeAt(0) - 38);
                            else if (u >= "F" && u <= "J")
                                d = String.fromCharCode(u.charCodeAt(0) - 11);
                            else if (u >= "K" && u <= "O")
                                d = String.fromCharCode(u.charCodeAt(0) + 16);
                            else if (u >= "P" && u <= "T")
                                d = String.fromCharCode(u.charCodeAt(0) + 43);
                            else if (u === "U")
                                d = "\0";
                            else if (u === "V")
                                d = "@";
                            else if (u === "W")
                                d = "`";
                            else if (u === "X" || u === "Y" || u === "Z")
                                d = "";
                            else
                                throw new F;
                            break;
                        case "/":
                            if (u >= "A" && u <= "O")
                                d = String.fromCharCode(u.charCodeAt(0) - 32);
                            else if (u === "Z")
                                d = ":";
                            else
                                throw new F;
                            break
                        }
                        s += d,
                        o++
                    } else
                        s += a
                }
                return s
            }
        }
        gt.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%",
        gt.CHARACTER_ENCODINGS = [52, 289, 97, 352, 49, 304, 112, 37, 292, 100, 265, 73, 328, 25, 280, 88, 13, 268, 76, 28, 259, 67, 322, 19, 274, 82, 7, 262, 70, 22, 385, 193, 448, 145, 400, 208, 133, 388, 196, 168, 162, 138, 42],
        gt.ASTERISK_ENCODING = 148;
        class Be extends ft {
            constructor() {
                super(...arguments),
                this.narrowLineWidth = -1
            }
            decodeRow(n, r, s) {
                let o = this.decodeStart(r)
                  , a = this.decodeEnd(r)
                  , u = new Ie;
                Be.decodeMiddle(r, o[1], a[0], u);
                let d = u.toString()
                  , h = null;
                s != null && (h = s.get(Z.ALLOWED_LENGTHS)),
                h == null && (h = Be.DEFAULT_ALLOWED_LENGTHS);
                let p = d.length
                  , w = !1
                  , C = 0;
                for (let R of h) {
                    if (p === R) {
                        w = !0;
                        break
                    }
                    R > C && (C = R)
                }
                if (!w && p > C && (w = !0),
                !w)
                    throw new F;
                const A = [new le(o[1],n), new le(a[0],n)];
                return new Qe(d,null,0,A,ae.ITF,new Date().getTime())
            }
            static decodeMiddle(n, r, s, o) {
                let a = new Int32Array(10)
                  , u = new Int32Array(5)
                  , d = new Int32Array(5);
                for (a.fill(0),
                u.fill(0),
                d.fill(0); r < s; ) {
                    ft.recordPattern(n, r, a);
                    for (let p = 0; p < 5; p++) {
                        let w = 2 * p;
                        u[p] = a[w],
                        d[p] = a[w + 1]
                    }
                    let h = Be.decodeDigit(u);
                    o.append(h.toString()),
                    h = this.decodeDigit(d),
                    o.append(h.toString()),
                    a.forEach(function(p) {
                        r += p
                    })
                }
            }
            decodeStart(n) {
                let r = Be.skipWhiteSpace(n)
                  , s = Be.findGuardPattern(n, r, Be.START_PATTERN);
                return this.narrowLineWidth = (s[1] - s[0]) / 4,
                this.validateQuietZone(n, s[0]),
                s
            }
            validateQuietZone(n, r) {
                let s = this.narrowLineWidth * 10;
                s = s < r ? s : r;
                for (let o = r - 1; s > 0 && o >= 0 && !n.get(o); o--)
                    s--;
                if (s !== 0)
                    throw new j
            }
            static skipWhiteSpace(n) {
                const r = n.getSize()
                  , s = n.getNextSet(0);
                if (s === r)
                    throw new j;
                return s
            }
            decodeEnd(n) {
                n.reverse();
                try {
                    let r = Be.skipWhiteSpace(n), s;
                    try {
                        s = Be.findGuardPattern(n, r, Be.END_PATTERN_REVERSED[0])
                    } catch (a) {
                        a instanceof j && (s = Be.findGuardPattern(n, r, Be.END_PATTERN_REVERSED[1]))
                    }
                    this.validateQuietZone(n, s[0]);
                    let o = s[0];
                    return s[0] = n.getSize() - s[1],
                    s[1] = n.getSize() - o,
                    s
                } finally {
                    n.reverse()
                }
            }
            static findGuardPattern(n, r, s) {
                let o = s.length
                  , a = new Int32Array(o)
                  , u = n.getSize()
                  , d = !1
                  , h = 0
                  , p = r;
                a.fill(0);
                for (let w = r; w < u; w++)
                    if (n.get(w) !== d)
                        a[h]++;
                    else {
                        if (h === o - 1) {
                            if (ft.patternMatchVariance(a, s, Be.MAX_INDIVIDUAL_VARIANCE) < Be.MAX_AVG_VARIANCE)
                                return [p, w];
                            p += a[0] + a[1],
                            M.arraycopy(a, 2, a, 0, h - 1),
                            a[h - 1] = 0,
                            a[h] = 0,
                            h--
                        } else
                            h++;
                        a[h] = 1,
                        d = !d
                    }
                throw new j
            }
            static decodeDigit(n) {
                let r = Be.MAX_AVG_VARIANCE
                  , s = -1
                  , o = Be.PATTERNS.length;
                for (let a = 0; a < o; a++) {
                    let u = Be.PATTERNS[a]
                      , d = ft.patternMatchVariance(n, u, Be.MAX_INDIVIDUAL_VARIANCE);
                    d < r ? (r = d,
                    s = a) : d === r && (s = -1)
                }
                if (s >= 0)
                    return s % 10;
                throw new j
            }
        }
        Be.PATTERNS = [Int32Array.from([1, 1, 2, 2, 1]), Int32Array.from([2, 1, 1, 1, 2]), Int32Array.from([1, 2, 1, 1, 2]), Int32Array.from([2, 2, 1, 1, 1]), Int32Array.from([1, 1, 2, 1, 2]), Int32Array.from([2, 1, 2, 1, 1]), Int32Array.from([1, 2, 2, 1, 1]), Int32Array.from([1, 1, 1, 2, 2]), Int32Array.from([2, 1, 1, 2, 1]), Int32Array.from([1, 2, 1, 2, 1]), Int32Array.from([1, 1, 3, 3, 1]), Int32Array.from([3, 1, 1, 1, 3]), Int32Array.from([1, 3, 1, 1, 3]), Int32Array.from([3, 3, 1, 1, 1]), Int32Array.from([1, 1, 3, 1, 3]), Int32Array.from([3, 1, 3, 1, 1]), Int32Array.from([1, 3, 3, 1, 1]), Int32Array.from([1, 1, 1, 3, 3]), Int32Array.from([3, 1, 1, 3, 1]), Int32Array.from([1, 3, 1, 3, 1])],
        Be.MAX_AVG_VARIANCE = .38,
        Be.MAX_INDIVIDUAL_VARIANCE = .5,
        Be.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14],
        Be.START_PATTERN = Int32Array.from([1, 1, 1, 1]),
        Be.END_PATTERN_REVERSED = [Int32Array.from([1, 1, 2]), Int32Array.from([1, 1, 3])];
        class nt extends ft {
            constructor() {
                super(...arguments),
                this.decodeRowStringBuffer = ""
            }
            static findStartGuardPattern(n) {
                let r = !1, s, o = 0, a = Int32Array.from([0, 0, 0]);
                for (; !r; ) {
                    a = Int32Array.from([0, 0, 0]),
                    s = nt.findGuardPattern(n, o, !1, this.START_END_PATTERN, a);
                    let u = s[0];
                    o = s[1];
                    let d = u - (o - u);
                    d >= 0 && (r = n.isRange(d, u, !1))
                }
                return s
            }
            static checkChecksum(n) {
                return nt.checkStandardUPCEANChecksum(n)
            }
            static checkStandardUPCEANChecksum(n) {
                let r = n.length;
                if (r === 0)
                    return !1;
                let s = parseInt(n.charAt(r - 1), 10);
                return nt.getStandardUPCEANChecksum(n.substring(0, r - 1)) === s
            }
            static getStandardUPCEANChecksum(n) {
                let r = n.length
                  , s = 0;
                for (let o = r - 1; o >= 0; o -= 2) {
                    let a = n.charAt(o).charCodeAt(0) - 48;
                    if (a < 0 || a > 9)
                        throw new F;
                    s += a
                }
                s *= 3;
                for (let o = r - 2; o >= 0; o -= 2) {
                    let a = n.charAt(o).charCodeAt(0) - 48;
                    if (a < 0 || a > 9)
                        throw new F;
                    s += a
                }
                return (1e3 - s) % 10
            }
            static decodeEnd(n, r) {
                return nt.findGuardPattern(n, r, !1, nt.START_END_PATTERN, new Int32Array(nt.START_END_PATTERN.length).fill(0))
            }
            static findGuardPatternWithoutCounters(n, r, s, o) {
                return this.findGuardPattern(n, r, s, o, new Int32Array(o.length))
            }
            static findGuardPattern(n, r, s, o, a) {
                let u = n.getSize();
                r = s ? n.getNextUnset(r) : n.getNextSet(r);
                let d = 0
                  , h = r
                  , p = o.length
                  , w = s;
                for (let C = r; C < u; C++)
                    if (n.get(C) !== w)
                        a[d]++;
                    else {
                        if (d === p - 1) {
                            if (ft.patternMatchVariance(a, o, nt.MAX_INDIVIDUAL_VARIANCE) < nt.MAX_AVG_VARIANCE)
                                return Int32Array.from([h, C]);
                            h += a[0] + a[1];
                            let A = a.slice(2, a.length - 1);
                            for (let T = 0; T < d - 1; T++)
                                a[T] = A[T];
                            a[d - 1] = 0,
                            a[d] = 0,
                            d--
                        } else
                            d++;
                        a[d] = 1,
                        w = !w
                    }
                throw new j
            }
            static decodeDigit(n, r, s, o) {
                this.recordPattern(n, s, r);
                let a = this.MAX_AVG_VARIANCE
                  , u = -1
                  , d = o.length;
                for (let h = 0; h < d; h++) {
                    let p = o[h]
                      , w = ft.patternMatchVariance(r, p, nt.MAX_INDIVIDUAL_VARIANCE);
                    w < a && (a = w,
                    u = h)
                }
                if (u >= 0)
                    return u;
                throw new j
            }
        }
        nt.MAX_AVG_VARIANCE = .48,
        nt.MAX_INDIVIDUAL_VARIANCE = .7,
        nt.START_END_PATTERN = Int32Array.from([1, 1, 1]),
        nt.MIDDLE_PATTERN = Int32Array.from([1, 1, 1, 1, 1]),
        nt.END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]),
        nt.L_PATTERNS = [Int32Array.from([3, 2, 1, 1]), Int32Array.from([2, 2, 2, 1]), Int32Array.from([2, 1, 2, 2]), Int32Array.from([1, 4, 1, 1]), Int32Array.from([1, 1, 3, 2]), Int32Array.from([1, 2, 3, 1]), Int32Array.from([1, 1, 1, 4]), Int32Array.from([1, 3, 1, 2]), Int32Array.from([1, 2, 1, 3]), Int32Array.from([3, 1, 1, 2])];
        class ts {
            constructor() {
                this.CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5],
                this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]),
                this.decodeRowStringBuffer = ""
            }
            decodeRow(n, r, s) {
                let o = this.decodeRowStringBuffer
                  , a = this.decodeMiddle(r, s, o)
                  , u = o.toString()
                  , d = ts.parseExtensionString(u)
                  , h = [new le((s[0] + s[1]) / 2,n), new le(a,n)]
                  , p = new Qe(u,null,0,h,ae.UPC_EAN_EXTENSION,new Date().getTime());
                return d != null && p.putAllMetadata(d),
                p
            }
            decodeMiddle(n, r, s) {
                let o = this.decodeMiddleCounters;
                o[0] = 0,
                o[1] = 0,
                o[2] = 0,
                o[3] = 0;
                let a = n.getSize()
                  , u = r[1]
                  , d = 0;
                for (let p = 0; p < 5 && u < a; p++) {
                    let w = nt.decodeDigit(n, o, u, nt.L_AND_G_PATTERNS);
                    s += String.fromCharCode(48 + w % 10);
                    for (let C of o)
                        u += C;
                    w >= 10 && (d |= 1 << 4 - p),
                    p !== 4 && (u = n.getNextSet(u),
                    u = n.getNextUnset(u))
                }
                if (s.length !== 5)
                    throw new j;
                let h = this.determineCheckDigit(d);
                if (ts.extensionChecksum(s.toString()) !== h)
                    throw new j;
                return u
            }
            static extensionChecksum(n) {
                let r = n.length
                  , s = 0;
                for (let o = r - 2; o >= 0; o -= 2)
                    s += n.charAt(o).charCodeAt(0) - 48;
                s *= 3;
                for (let o = r - 1; o >= 0; o -= 2)
                    s += n.charAt(o).charCodeAt(0) - 48;
                return s *= 3,
                s % 10
            }
            determineCheckDigit(n) {
                for (let r = 0; r < 10; r++)
                    if (n === this.CHECK_DIGIT_ENCODINGS[r])
                        return r;
                throw new j
            }
            static parseExtensionString(n) {
                if (n.length !== 5)
                    return null;
                let r = ts.parseExtension5String(n);
                return r == null ? null : new Map([[yt.SUGGESTED_PRICE, r]])
            }
            static parseExtension5String(n) {
                let r;
                switch (n.charAt(0)) {
                case "0":
                    r = "£";
                    break;
                case "5":
                    r = "$";
                    break;
                case "9":
                    switch (n) {
                    case "90000":
                        return null;
                    case "99991":
                        return "0.00";
                    case "99990":
                        return "Used"
                    }
                    r = "";
                    break;
                default:
                    r = "";
                    break
                }
                let s = parseInt(n.substring(1))
                  , o = (s / 100).toString()
                  , a = s % 100
                  , u = a < 10 ? "0" + a : a.toString();
                return r + o + "." + u
            }
        }
        class na {
            constructor() {
                this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]),
                this.decodeRowStringBuffer = ""
            }
            decodeRow(n, r, s) {
                let o = this.decodeRowStringBuffer
                  , a = this.decodeMiddle(r, s, o)
                  , u = o.toString()
                  , d = na.parseExtensionString(u)
                  , h = [new le((s[0] + s[1]) / 2,n), new le(a,n)]
                  , p = new Qe(u,null,0,h,ae.UPC_EAN_EXTENSION,new Date().getTime());
                return d != null && p.putAllMetadata(d),
                p
            }
            decodeMiddle(n, r, s) {
                let o = this.decodeMiddleCounters;
                o[0] = 0,
                o[1] = 0,
                o[2] = 0,
                o[3] = 0;
                let a = n.getSize()
                  , u = r[1]
                  , d = 0;
                for (let h = 0; h < 2 && u < a; h++) {
                    let p = nt.decodeDigit(n, o, u, nt.L_AND_G_PATTERNS);
                    s += String.fromCharCode(48 + p % 10);
                    for (let w of o)
                        u += w;
                    p >= 10 && (d |= 1 << 1 - h),
                    h !== 1 && (u = n.getNextSet(u),
                    u = n.getNextUnset(u))
                }
                if (s.length !== 2)
                    throw new j;
                if (parseInt(s.toString()) % 4 !== d)
                    throw new j;
                return u
            }
            static parseExtensionString(n) {
                return n.length !== 2 ? null : new Map([[yt.ISSUE_NUMBER, parseInt(n)]])
            }
        }
        class c1 {
            static decodeRow(n, r, s) {
                let o = nt.findGuardPattern(r, s, !1, this.EXTENSION_START_PATTERN, new Int32Array(this.EXTENSION_START_PATTERN.length).fill(0));
                try {
                    return new ts().decodeRow(n, r, o)
                } catch {
                    return new na().decodeRow(n, r, o)
                }
            }
        }
        c1.EXTENSION_START_PATTERN = Int32Array.from([1, 1, 2]);
        class be extends nt {
            constructor() {
                super(),
                this.decodeRowStringBuffer = "",
                be.L_AND_G_PATTERNS = be.L_PATTERNS.map(n=>Int32Array.from(n));
                for (let n = 10; n < 20; n++) {
                    let r = be.L_PATTERNS[n - 10]
                      , s = new Int32Array(r.length);
                    for (let o = 0; o < r.length; o++)
                        s[o] = r[r.length - o - 1];
                    be.L_AND_G_PATTERNS[n] = s
                }
            }
            decodeRow(n, r, s) {
                let o = be.findStartGuardPattern(r)
                  , a = s == null ? null : s.get(Z.NEED_RESULT_POINT_CALLBACK);
                if (a != null) {
                    const Y = new le((o[0] + o[1]) / 2,n);
                    a.foundPossibleResultPoint(Y)
                }
                let u = this.decodeMiddle(r, o, this.decodeRowStringBuffer)
                  , d = u.rowOffset
                  , h = u.resultString;
                if (a != null) {
                    const Y = new le(d,n);
                    a.foundPossibleResultPoint(Y)
                }
                let p = this.decodeEnd(r, d);
                if (a != null) {
                    const Y = new le((p[0] + p[1]) / 2,n);
                    a.foundPossibleResultPoint(Y)
                }
                let w = p[1]
                  , C = w + (w - p[0]);
                if (C >= r.getSize() || !r.isRange(w, C, !1))
                    throw new j;
                let A = h.toString();
                if (A.length < 8)
                    throw new F;
                if (!be.checkChecksum(A))
                    throw new B;
                let T = (o[1] + o[0]) / 2
                  , R = (p[1] + p[0]) / 2
                  , b = this.getBarcodeFormat()
                  , P = [new le(T,n), new le(R,n)]
                  , z = new Qe(A,null,0,P,b,new Date().getTime())
                  , Q = 0;
                try {
                    let Y = c1.decodeRow(n, r, p[1]);
                    z.putMetadata(yt.UPC_EAN_EXTENSION, Y.getText()),
                    z.putAllMetadata(Y.getResultMetadata()),
                    z.addResultPoints(Y.getResultPoints()),
                    Q = Y.getText().length
                } catch {}
                let J = s == null ? null : s.get(Z.ALLOWED_EAN_EXTENSIONS);
                if (J != null) {
                    let Y = !1;
                    for (let Se in J)
                        if (Q.toString() === Se) {
                            Y = !0;
                            break
                        }
                    if (!Y)
                        throw new j
                }
                return z
            }
            decodeEnd(n, r) {
                return be.findGuardPattern(n, r, !1, be.START_END_PATTERN, new Int32Array(be.START_END_PATTERN.length).fill(0))
            }
            static checkChecksum(n) {
                return be.checkStandardUPCEANChecksum(n)
            }
            static checkStandardUPCEANChecksum(n) {
                let r = n.length;
                if (r === 0)
                    return !1;
                let s = parseInt(n.charAt(r - 1), 10);
                return be.getStandardUPCEANChecksum(n.substring(0, r - 1)) === s
            }
            static getStandardUPCEANChecksum(n) {
                let r = n.length
                  , s = 0;
                for (let o = r - 1; o >= 0; o -= 2) {
                    let a = n.charAt(o).charCodeAt(0) - 48;
                    if (a < 0 || a > 9)
                        throw new F;
                    s += a
                }
                s *= 3;
                for (let o = r - 2; o >= 0; o -= 2) {
                    let a = n.charAt(o).charCodeAt(0) - 48;
                    if (a < 0 || a > 9)
                        throw new F;
                    s += a
                }
                return (1e3 - s) % 10
            }
        }
        class Fr extends be {
            constructor() {
                super(),
                this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0])
            }
            decodeMiddle(n, r, s) {
                let o = this.decodeMiddleCounters;
                o[0] = 0,
                o[1] = 0,
                o[2] = 0,
                o[3] = 0;
                let a = n.getSize()
                  , u = r[1]
                  , d = 0;
                for (let p = 0; p < 6 && u < a; p++) {
                    let w = be.decodeDigit(n, o, u, be.L_AND_G_PATTERNS);
                    s += String.fromCharCode(48 + w % 10);
                    for (let C of o)
                        u += C;
                    w >= 10 && (d |= 1 << 5 - p)
                }
                s = Fr.determineFirstDigit(s, d),
                u = be.findGuardPattern(n, u, !0, be.MIDDLE_PATTERN, new Int32Array(be.MIDDLE_PATTERN.length).fill(0))[1];
                for (let p = 0; p < 6 && u < a; p++) {
                    let w = be.decodeDigit(n, o, u, be.L_PATTERNS);
                    s += String.fromCharCode(48 + w);
                    for (let C of o)
                        u += C
                }
                return {
                    rowOffset: u,
                    resultString: s
                }
            }
            getBarcodeFormat() {
                return ae.EAN_13
            }
            static determineFirstDigit(n, r) {
                for (let s = 0; s < 10; s++)
                    if (r === this.FIRST_DIGIT_ENCODINGS[s])
                        return n = String.fromCharCode(48 + s) + n,
                        n;
                throw new j
            }
        }
        Fr.FIRST_DIGIT_ENCODINGS = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26];
        class f1 extends be {
            constructor() {
                super(),
                this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0])
            }
            decodeMiddle(n, r, s) {
                const o = this.decodeMiddleCounters;
                o[0] = 0,
                o[1] = 0,
                o[2] = 0,
                o[3] = 0;
                let a = n.getSize()
                  , u = r[1];
                for (let h = 0; h < 4 && u < a; h++) {
                    let p = be.decodeDigit(n, o, u, be.L_PATTERNS);
                    s += String.fromCharCode(48 + p);
                    for (let w of o)
                        u += w
                }
                u = be.findGuardPattern(n, u, !0, be.MIDDLE_PATTERN, new Int32Array(be.MIDDLE_PATTERN.length).fill(0))[1];
                for (let h = 0; h < 4 && u < a; h++) {
                    let p = be.decodeDigit(n, o, u, be.L_PATTERNS);
                    s += String.fromCharCode(48 + p);
                    for (let w of o)
                        u += w
                }
                return {
                    rowOffset: u,
                    resultString: s
                }
            }
            getBarcodeFormat() {
                return ae.EAN_8
            }
        }
        class d1 extends be {
            constructor() {
                super(...arguments),
                this.ean13Reader = new Fr
            }
            getBarcodeFormat() {
                return ae.UPC_A
            }
            decode(n, r) {
                return this.maybeReturnResult(this.ean13Reader.decode(n))
            }
            decodeRow(n, r, s) {
                return this.maybeReturnResult(this.ean13Reader.decodeRow(n, r, s))
            }
            decodeMiddle(n, r, s) {
                return this.ean13Reader.decodeMiddle(n, r, s)
            }
            maybeReturnResult(n) {
                let r = n.getText();
                if (r.charAt(0) === "0") {
                    let s = new Qe(r.substring(1),null,null,n.getResultPoints(),ae.UPC_A);
                    return n.getResultMetadata() != null && s.putAllMetadata(n.getResultMetadata()),
                    s
                } else
                    throw new j
            }
            reset() {
                this.ean13Reader.reset()
            }
        }
        class Sn extends be {
            constructor() {
                super(),
                this.decodeMiddleCounters = new Int32Array(4)
            }
            decodeMiddle(n, r, s) {
                const o = this.decodeMiddleCounters.map(p=>p);
                o[0] = 0,
                o[1] = 0,
                o[2] = 0,
                o[3] = 0;
                const a = n.getSize();
                let u = r[1]
                  , d = 0;
                for (let p = 0; p < 6 && u < a; p++) {
                    const w = Sn.decodeDigit(n, o, u, Sn.L_AND_G_PATTERNS);
                    s += String.fromCharCode(48 + w % 10);
                    for (let C of o)
                        u += C;
                    w >= 10 && (d |= 1 << 5 - p)
                }
                let h = Sn.determineNumSysAndCheckDigit(s, d);
                return {
                    rowOffset: u,
                    resultString: h
                }
            }
            decodeEnd(n, r) {
                return Sn.findGuardPatternWithoutCounters(n, r, !0, Sn.MIDDLE_END_PATTERN)
            }
            checkChecksum(n) {
                return be.checkChecksum(Sn.convertUPCEtoUPCA(n))
            }
            static determineNumSysAndCheckDigit(n, r) {
                for (let s = 0; s <= 1; s++)
                    for (let o = 0; o < 10; o++)
                        if (r === this.NUMSYS_AND_CHECK_DIGIT_PATTERNS[s][o]) {
                            let a = String.fromCharCode(48 + s)
                              , u = String.fromCharCode(48 + o);
                            return a + n + u
                        }
                throw j.getNotFoundInstance()
            }
            getBarcodeFormat() {
                return ae.UPC_E
            }
            static convertUPCEtoUPCA(n) {
                const r = n.slice(1, 7).split("").map(a=>a.charCodeAt(0))
                  , s = new Ie;
                s.append(n.charAt(0));
                let o = r[5];
                switch (o) {
                case 0:
                case 1:
                case 2:
                    s.appendChars(r, 0, 2),
                    s.append(o),
                    s.append("0000"),
                    s.appendChars(r, 2, 3);
                    break;
                case 3:
                    s.appendChars(r, 0, 3),
                    s.append("00000"),
                    s.appendChars(r, 3, 2);
                    break;
                case 4:
                    s.appendChars(r, 0, 4),
                    s.append("00000"),
                    s.append(r[4]);
                    break;
                default:
                    s.appendChars(r, 0, 5),
                    s.append("0000"),
                    s.append(o);
                    break
                }
                return n.length >= 8 && s.append(n.charAt(7)),
                s.toString()
            }
        }
        Sn.MIDDLE_END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]),
        Sn.NUMSYS_AND_CHECK_DIGIT_PATTERNS = [Int32Array.from([56, 52, 50, 49, 44, 38, 35, 42, 41, 37]), Int32Array.from([7, 11, 13, 14, 19, 25, 28, 21, 22, 26])];
        class ra extends ft {
            constructor(n) {
                super();
                let r = n == null ? null : n.get(Z.POSSIBLE_FORMATS)
                  , s = [];
                l(r) ? (s.push(new Fr),
                s.push(new d1),
                s.push(new f1),
                s.push(new Sn)) : (r.indexOf(ae.EAN_13) > -1 && s.push(new Fr),
                r.indexOf(ae.UPC_A) > -1 && s.push(new d1),
                r.indexOf(ae.EAN_8) > -1 && s.push(new f1),
                r.indexOf(ae.UPC_E) > -1 && s.push(new Sn)),
                this.readers = s
            }
            decodeRow(n, r, s) {
                for (let o of this.readers)
                    try {
                        const a = o.decodeRow(n, r, s)
                          , u = a.getBarcodeFormat() === ae.EAN_13 && a.getText().charAt(0) === "0"
                          , d = s == null ? null : s.get(Z.POSSIBLE_FORMATS)
                          , h = d == null || d.includes(ae.UPC_A);
                        if (u && h) {
                            const p = a.getRawBytes()
                              , w = new Qe(a.getText().substring(1),p,p ? p.length : null,a.getResultPoints(),ae.UPC_A);
                            return w.putAllMetadata(a.getResultMetadata()),
                            w
                        }
                        return a
                    } catch {}
                throw new j
            }
            reset() {
                for (let n of this.readers)
                    n.reset()
            }
        }
        class bt extends ft {
            constructor() {
                super(),
                this.decodeFinderCounters = new Int32Array(4),
                this.dataCharacterCounters = new Int32Array(8),
                this.oddRoundingErrors = new Array(4),
                this.evenRoundingErrors = new Array(4),
                this.oddCounts = new Array(this.dataCharacterCounters.length / 2),
                this.evenCounts = new Array(this.dataCharacterCounters.length / 2)
            }
            getDecodeFinderCounters() {
                return this.decodeFinderCounters
            }
            getDataCharacterCounters() {
                return this.dataCharacterCounters
            }
            getOddRoundingErrors() {
                return this.oddRoundingErrors
            }
            getEvenRoundingErrors() {
                return this.evenRoundingErrors
            }
            getOddCounts() {
                return this.oddCounts
            }
            getEvenCounts() {
                return this.evenCounts
            }
            parseFinderValue(n, r) {
                for (let s = 0; s < r.length; s++)
                    if (ft.patternMatchVariance(n, r[s], bt.MAX_INDIVIDUAL_VARIANCE) < bt.MAX_AVG_VARIANCE)
                        return s;
                throw new j
            }
            static count(n) {
                return Ne.sum(new Int32Array(n))
            }
            static increment(n, r) {
                let s = 0
                  , o = r[0];
                for (let a = 1; a < n.length; a++)
                    r[a] > o && (o = r[a],
                    s = a);
                n[s]++
            }
            static decrement(n, r) {
                let s = 0
                  , o = r[0];
                for (let a = 1; a < n.length; a++)
                    r[a] < o && (o = r[a],
                    s = a);
                n[s]--
            }
            static isFinderPattern(n) {
                let r = n[0] + n[1]
                  , s = r + n[2] + n[3]
                  , o = r / s;
                if (o >= bt.MIN_FINDER_PATTERN_RATIO && o <= bt.MAX_FINDER_PATTERN_RATIO) {
                    let a = Number.MAX_SAFE_INTEGER
                      , u = Number.MIN_SAFE_INTEGER;
                    for (let d of n)
                        d > u && (u = d),
                        d < a && (a = d);
                    return u < 10 * a
                }
                return !1
            }
        }
        bt.MAX_AVG_VARIANCE = .2,
        bt.MAX_INDIVIDUAL_VARIANCE = .45,
        bt.MIN_FINDER_PATTERN_RATIO = 9.5 / 12,
        bt.MAX_FINDER_PATTERN_RATIO = 12.5 / 14;
        class ai {
            constructor(n, r) {
                this.value = n,
                this.checksumPortion = r
            }
            getValue() {
                return this.value
            }
            getChecksumPortion() {
                return this.checksumPortion
            }
            toString() {
                return this.value + "(" + this.checksumPortion + ")"
            }
            equals(n) {
                if (!(n instanceof ai))
                    return !1;
                const r = n;
                return this.value === r.value && this.checksumPortion === r.checksumPortion
            }
            hashCode() {
                return this.value ^ this.checksumPortion
            }
        }
        class ho {
            constructor(n, r, s, o, a) {
                this.value = n,
                this.startEnd = r,
                this.value = n,
                this.startEnd = r,
                this.resultPoints = new Array,
                this.resultPoints.push(new le(s,a)),
                this.resultPoints.push(new le(o,a))
            }
            getValue() {
                return this.value
            }
            getStartEnd() {
                return this.startEnd
            }
            getResultPoints() {
                return this.resultPoints
            }
            equals(n) {
                if (!(n instanceof ho))
                    return !1;
                const r = n;
                return this.value === r.value
            }
            hashCode() {
                return this.value
            }
        }
        class Pn {
            constructor() {}
            static getRSSvalue(n, r, s) {
                let o = 0;
                for (let h of n)
                    o += h;
                let a = 0
                  , u = 0
                  , d = n.length;
                for (let h = 0; h < d - 1; h++) {
                    let p;
                    for (p = 1,
                    u |= 1 << h; p < n[h]; p++,
                    u &= ~(1 << h)) {
                        let w = Pn.combins(o - p - 1, d - h - 2);
                        if (s && u === 0 && o - p - (d - h - 1) >= d - h - 1 && (w -= Pn.combins(o - p - (d - h), d - h - 2)),
                        d - h - 1 > 1) {
                            let C = 0;
                            for (let A = o - p - (d - h - 2); A > r; A--)
                                C += Pn.combins(o - p - A - 1, d - h - 3);
                            w -= C * (d - 1 - h)
                        } else
                            o - p > r && w--;
                        a += w
                    }
                    o -= p
                }
                return a
            }
            static combins(n, r) {
                let s, o;
                n - r > r ? (o = r,
                s = n - r) : (o = n - r,
                s = r);
                let a = 1
                  , u = 1;
                for (let d = n; d > s; d--)
                    a *= d,
                    u <= o && (a /= u,
                    u++);
                for (; u <= o; )
                    a /= u,
                    u++;
                return a
            }
        }
        class x2 {
            static buildBitArray(n) {
                let r = n.length * 2 - 1;
                n[n.length - 1].getRightChar() == null && (r -= 1);
                let s = 12 * r
                  , o = new V(s)
                  , a = 0
                  , d = n[0].getRightChar().getValue();
                for (let h = 11; h >= 0; --h)
                    d & 1 << h && o.set(a),
                    a++;
                for (let h = 1; h < n.length; ++h) {
                    let p = n[h]
                      , w = p.getLeftChar().getValue();
                    for (let C = 11; C >= 0; --C)
                        w & 1 << C && o.set(a),
                        a++;
                    if (p.getRightChar() != null) {
                        let C = p.getRightChar().getValue();
                        for (let A = 11; A >= 0; --A)
                            C & 1 << A && o.set(a),
                            a++
                    }
                }
                return o
            }
        }
        class Ur {
            constructor(n, r) {
                r ? this.decodedInformation = null : (this.finished = n,
                this.decodedInformation = r)
            }
            getDecodedInformation() {
                return this.decodedInformation
            }
            isFinished() {
                return this.finished
            }
        }
        class ia {
            constructor(n) {
                this.newPosition = n
            }
            getNewPosition() {
                return this.newPosition
            }
        }
        class Wt extends ia {
            constructor(n, r) {
                super(n),
                this.value = r
            }
            getValue() {
                return this.value
            }
            isFNC1() {
                return this.value === Wt.FNC1
            }
        }
        Wt.FNC1 = "$";
        class Vr extends ia {
            constructor(n, r, s) {
                super(n),
                s ? (this.remaining = !0,
                this.remainingValue = this.remainingValue) : (this.remaining = !1,
                this.remainingValue = 0),
                this.newString = r
            }
            getNewString() {
                return this.newString
            }
            isRemaining() {
                return this.remaining
            }
            getRemainingValue() {
                return this.remainingValue
            }
        }
        class fn extends ia {
            constructor(n, r, s) {
                if (super(n),
                r < 0 || r > 10 || s < 0 || s > 10)
                    throw new F;
                this.firstDigit = r,
                this.secondDigit = s
            }
            getFirstDigit() {
                return this.firstDigit
            }
            getSecondDigit() {
                return this.secondDigit
            }
            getValue() {
                return this.firstDigit * 10 + this.secondDigit
            }
            isFirstDigitFNC1() {
                return this.firstDigit === fn.FNC1
            }
            isSecondDigitFNC1() {
                return this.secondDigit === fn.FNC1
            }
            isAnyFNC1() {
                return this.firstDigit === fn.FNC1 || this.secondDigit === fn.FNC1
            }
        }
        fn.FNC1 = 10;
        class ie {
            constructor() {}
            static parseFieldsInGeneralPurpose(n) {
                if (!n)
                    return null;
                if (n.length < 2)
                    throw new j;
                let r = n.substring(0, 2);
                for (let a of ie.TWO_DIGIT_DATA_LENGTH)
                    if (a[0] === r)
                        return a[1] === ie.VARIABLE_LENGTH ? ie.processVariableAI(2, a[2], n) : ie.processFixedAI(2, a[1], n);
                if (n.length < 3)
                    throw new j;
                let s = n.substring(0, 3);
                for (let a of ie.THREE_DIGIT_DATA_LENGTH)
                    if (a[0] === s)
                        return a[1] === ie.VARIABLE_LENGTH ? ie.processVariableAI(3, a[2], n) : ie.processFixedAI(3, a[1], n);
                for (let a of ie.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH)
                    if (a[0] === s)
                        return a[1] === ie.VARIABLE_LENGTH ? ie.processVariableAI(4, a[2], n) : ie.processFixedAI(4, a[1], n);
                if (n.length < 4)
                    throw new j;
                let o = n.substring(0, 4);
                for (let a of ie.FOUR_DIGIT_DATA_LENGTH)
                    if (a[0] === o)
                        return a[1] === ie.VARIABLE_LENGTH ? ie.processVariableAI(4, a[2], n) : ie.processFixedAI(4, a[1], n);
                throw new j
            }
            static processFixedAI(n, r, s) {
                if (s.length < n)
                    throw new j;
                let o = s.substring(0, n);
                if (s.length < n + r)
                    throw new j;
                let a = s.substring(n, n + r)
                  , u = s.substring(n + r)
                  , d = "(" + o + ")" + a
                  , h = ie.parseFieldsInGeneralPurpose(u);
                return h == null ? d : d + h
            }
            static processVariableAI(n, r, s) {
                let o = s.substring(0, n), a;
                s.length < n + r ? a = s.length : a = n + r;
                let u = s.substring(n, a)
                  , d = s.substring(a)
                  , h = "(" + o + ")" + u
                  , p = ie.parseFieldsInGeneralPurpose(d);
                return p == null ? h : h + p
            }
        }
        ie.VARIABLE_LENGTH = [],
        ie.TWO_DIGIT_DATA_LENGTH = [["00", 18], ["01", 14], ["02", 14], ["10", ie.VARIABLE_LENGTH, 20], ["11", 6], ["12", 6], ["13", 6], ["15", 6], ["17", 6], ["20", 2], ["21", ie.VARIABLE_LENGTH, 20], ["22", ie.VARIABLE_LENGTH, 29], ["30", ie.VARIABLE_LENGTH, 8], ["37", ie.VARIABLE_LENGTH, 8], ["90", ie.VARIABLE_LENGTH, 30], ["91", ie.VARIABLE_LENGTH, 30], ["92", ie.VARIABLE_LENGTH, 30], ["93", ie.VARIABLE_LENGTH, 30], ["94", ie.VARIABLE_LENGTH, 30], ["95", ie.VARIABLE_LENGTH, 30], ["96", ie.VARIABLE_LENGTH, 30], ["97", ie.VARIABLE_LENGTH, 3], ["98", ie.VARIABLE_LENGTH, 30], ["99", ie.VARIABLE_LENGTH, 30]],
        ie.THREE_DIGIT_DATA_LENGTH = [["240", ie.VARIABLE_LENGTH, 30], ["241", ie.VARIABLE_LENGTH, 30], ["242", ie.VARIABLE_LENGTH, 6], ["250", ie.VARIABLE_LENGTH, 30], ["251", ie.VARIABLE_LENGTH, 30], ["253", ie.VARIABLE_LENGTH, 17], ["254", ie.VARIABLE_LENGTH, 20], ["400", ie.VARIABLE_LENGTH, 30], ["401", ie.VARIABLE_LENGTH, 30], ["402", 17], ["403", ie.VARIABLE_LENGTH, 30], ["410", 13], ["411", 13], ["412", 13], ["413", 13], ["414", 13], ["420", ie.VARIABLE_LENGTH, 20], ["421", ie.VARIABLE_LENGTH, 15], ["422", 3], ["423", ie.VARIABLE_LENGTH, 15], ["424", 3], ["425", 3], ["426", 3]],
        ie.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH = [["310", 6], ["311", 6], ["312", 6], ["313", 6], ["314", 6], ["315", 6], ["316", 6], ["320", 6], ["321", 6], ["322", 6], ["323", 6], ["324", 6], ["325", 6], ["326", 6], ["327", 6], ["328", 6], ["329", 6], ["330", 6], ["331", 6], ["332", 6], ["333", 6], ["334", 6], ["335", 6], ["336", 6], ["340", 6], ["341", 6], ["342", 6], ["343", 6], ["344", 6], ["345", 6], ["346", 6], ["347", 6], ["348", 6], ["349", 6], ["350", 6], ["351", 6], ["352", 6], ["353", 6], ["354", 6], ["355", 6], ["356", 6], ["357", 6], ["360", 6], ["361", 6], ["362", 6], ["363", 6], ["364", 6], ["365", 6], ["366", 6], ["367", 6], ["368", 6], ["369", 6], ["390", ie.VARIABLE_LENGTH, 15], ["391", ie.VARIABLE_LENGTH, 18], ["392", ie.VARIABLE_LENGTH, 15], ["393", ie.VARIABLE_LENGTH, 18], ["703", ie.VARIABLE_LENGTH, 30]],
        ie.FOUR_DIGIT_DATA_LENGTH = [["7001", 13], ["7002", ie.VARIABLE_LENGTH, 30], ["7003", 10], ["8001", 14], ["8002", ie.VARIABLE_LENGTH, 20], ["8003", ie.VARIABLE_LENGTH, 30], ["8004", ie.VARIABLE_LENGTH, 30], ["8005", 6], ["8006", 18], ["8007", ie.VARIABLE_LENGTH, 30], ["8008", ie.VARIABLE_LENGTH, 12], ["8018", 18], ["8020", ie.VARIABLE_LENGTH, 25], ["8100", 6], ["8101", 10], ["8102", 2], ["8110", ie.VARIABLE_LENGTH, 70], ["8200", ie.VARIABLE_LENGTH, 70]];
        class ui {
            constructor(n) {
                this.buffer = new Ie,
                this.information = n
            }
            decodeAllCodes(n, r) {
                let s = r
                  , o = null;
                do {
                    let a = this.decodeGeneralPurposeField(s, o)
                      , u = ie.parseFieldsInGeneralPurpose(a.getNewString());
                    if (u != null && n.append(u),
                    a.isRemaining() ? o = "" + a.getRemainingValue() : o = null,
                    s === a.getNewPosition())
                        break;
                    s = a.getNewPosition()
                } while (!0);
                return n.toString()
            }
            isStillNumeric(n) {
                if (n + 7 > this.information.getSize())
                    return n + 4 <= this.information.getSize();
                for (let r = n; r < n + 3; ++r)
                    if (this.information.get(r))
                        return !0;
                return this.information.get(n + 3)
            }
            decodeNumeric(n) {
                if (n + 7 > this.information.getSize()) {
                    let a = this.extractNumericValueFromBitArray(n, 4);
                    return a === 0 ? new fn(this.information.getSize(),fn.FNC1,fn.FNC1) : new fn(this.information.getSize(),a - 1,fn.FNC1)
                }
                let r = this.extractNumericValueFromBitArray(n, 7)
                  , s = (r - 8) / 11
                  , o = (r - 8) % 11;
                return new fn(n + 7,s,o)
            }
            extractNumericValueFromBitArray(n, r) {
                return ui.extractNumericValueFromBitArray(this.information, n, r)
            }
            static extractNumericValueFromBitArray(n, r, s) {
                let o = 0;
                for (let a = 0; a < s; ++a)
                    n.get(r + a) && (o |= 1 << s - a - 1);
                return o
            }
            decodeGeneralPurposeField(n, r) {
                this.buffer.setLengthToZero(),
                r != null && this.buffer.append(r),
                this.current.setPosition(n);
                let s = this.parseBlocks();
                return s != null && s.isRemaining() ? new Vr(this.current.getPosition(),this.buffer.toString(),s.getRemainingValue()) : new Vr(this.current.getPosition(),this.buffer.toString())
            }
            parseBlocks() {
                let n, r;
                do {
                    let s = this.current.getPosition();
                    if (this.current.isAlpha() ? (r = this.parseAlphaBlock(),
                    n = r.isFinished()) : this.current.isIsoIec646() ? (r = this.parseIsoIec646Block(),
                    n = r.isFinished()) : (r = this.parseNumericBlock(),
                    n = r.isFinished()),
                    !(s !== this.current.getPosition()) && !n)
                        break
                } while (!n);
                return r.getDecodedInformation()
            }
            parseNumericBlock() {
                for (; this.isStillNumeric(this.current.getPosition()); ) {
                    let n = this.decodeNumeric(this.current.getPosition());
                    if (this.current.setPosition(n.getNewPosition()),
                    n.isFirstDigitFNC1()) {
                        let r;
                        return n.isSecondDigitFNC1() ? r = new Vr(this.current.getPosition(),this.buffer.toString()) : r = new Vr(this.current.getPosition(),this.buffer.toString(),n.getSecondDigit()),
                        new Ur(!0,r)
                    }
                    if (this.buffer.append(n.getFirstDigit()),
                    n.isSecondDigitFNC1()) {
                        let r = new Vr(this.current.getPosition(),this.buffer.toString());
                        return new Ur(!0,r)
                    }
                    this.buffer.append(n.getSecondDigit())
                }
                return this.isNumericToAlphaNumericLatch(this.current.getPosition()) && (this.current.setAlpha(),
                this.current.incrementPosition(4)),
                new Ur(!1)
            }
            parseIsoIec646Block() {
                for (; this.isStillIsoIec646(this.current.getPosition()); ) {
                    let n = this.decodeIsoIec646(this.current.getPosition());
                    if (this.current.setPosition(n.getNewPosition()),
                    n.isFNC1()) {
                        let r = new Vr(this.current.getPosition(),this.buffer.toString());
                        return new Ur(!0,r)
                    }
                    this.buffer.append(n.getValue())
                }
                return this.isAlphaOr646ToNumericLatch(this.current.getPosition()) ? (this.current.incrementPosition(3),
                this.current.setNumeric()) : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) && (this.current.getPosition() + 5 < this.information.getSize() ? this.current.incrementPosition(5) : this.current.setPosition(this.information.getSize()),
                this.current.setAlpha()),
                new Ur(!1)
            }
            parseAlphaBlock() {
                for (; this.isStillAlpha(this.current.getPosition()); ) {
                    let n = this.decodeAlphanumeric(this.current.getPosition());
                    if (this.current.setPosition(n.getNewPosition()),
                    n.isFNC1()) {
                        let r = new Vr(this.current.getPosition(),this.buffer.toString());
                        return new Ur(!0,r)
                    }
                    this.buffer.append(n.getValue())
                }
                return this.isAlphaOr646ToNumericLatch(this.current.getPosition()) ? (this.current.incrementPosition(3),
                this.current.setNumeric()) : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) && (this.current.getPosition() + 5 < this.information.getSize() ? this.current.incrementPosition(5) : this.current.setPosition(this.information.getSize()),
                this.current.setIsoIec646()),
                new Ur(!1)
            }
            isStillIsoIec646(n) {
                if (n + 5 > this.information.getSize())
                    return !1;
                let r = this.extractNumericValueFromBitArray(n, 5);
                if (r >= 5 && r < 16)
                    return !0;
                if (n + 7 > this.information.getSize())
                    return !1;
                let s = this.extractNumericValueFromBitArray(n, 7);
                if (s >= 64 && s < 116)
                    return !0;
                if (n + 8 > this.information.getSize())
                    return !1;
                let o = this.extractNumericValueFromBitArray(n, 8);
                return o >= 232 && o < 253
            }
            decodeIsoIec646(n) {
                let r = this.extractNumericValueFromBitArray(n, 5);
                if (r === 15)
                    return new Wt(n + 5,Wt.FNC1);
                if (r >= 5 && r < 15)
                    return new Wt(n + 5,"0" + (r - 5));
                let s = this.extractNumericValueFromBitArray(n, 7);
                if (s >= 64 && s < 90)
                    return new Wt(n + 7,"" + (s + 1));
                if (s >= 90 && s < 116)
                    return new Wt(n + 7,"" + (s + 7));
                let o = this.extractNumericValueFromBitArray(n, 8), a;
                switch (o) {
                case 232:
                    a = "!";
                    break;
                case 233:
                    a = '"';
                    break;
                case 234:
                    a = "%";
                    break;
                case 235:
                    a = "&";
                    break;
                case 236:
                    a = "'";
                    break;
                case 237:
                    a = "(";
                    break;
                case 238:
                    a = ")";
                    break;
                case 239:
                    a = "*";
                    break;
                case 240:
                    a = "+";
                    break;
                case 241:
                    a = ",";
                    break;
                case 242:
                    a = "-";
                    break;
                case 243:
                    a = ".";
                    break;
                case 244:
                    a = "/";
                    break;
                case 245:
                    a = ":";
                    break;
                case 246:
                    a = ";";
                    break;
                case 247:
                    a = "<";
                    break;
                case 248:
                    a = "=";
                    break;
                case 249:
                    a = ">";
                    break;
                case 250:
                    a = "?";
                    break;
                case 251:
                    a = "_";
                    break;
                case 252:
                    a = " ";
                    break;
                default:
                    throw new F
                }
                return new Wt(n + 8,a)
            }
            isStillAlpha(n) {
                if (n + 5 > this.information.getSize())
                    return !1;
                let r = this.extractNumericValueFromBitArray(n, 5);
                if (r >= 5 && r < 16)
                    return !0;
                if (n + 6 > this.information.getSize())
                    return !1;
                let s = this.extractNumericValueFromBitArray(n, 6);
                return s >= 16 && s < 63
            }
            decodeAlphanumeric(n) {
                let r = this.extractNumericValueFromBitArray(n, 5);
                if (r === 15)
                    return new Wt(n + 5,Wt.FNC1);
                if (r >= 5 && r < 15)
                    return new Wt(n + 5,"0" + (r - 5));
                let s = this.extractNumericValueFromBitArray(n, 6);
                if (s >= 32 && s < 58)
                    return new Wt(n + 6,"" + (s + 33));
                let o;
                switch (s) {
                case 58:
                    o = "*";
                    break;
                case 59:
                    o = ",";
                    break;
                case 60:
                    o = "-";
                    break;
                case 61:
                    o = ".";
                    break;
                case 62:
                    o = "/";
                    break;
                default:
                    throw new kn("Decoding invalid alphanumeric value: " + s)
                }
                return new Wt(n + 6,o)
            }
            isAlphaTo646ToAlphaLatch(n) {
                if (n + 1 > this.information.getSize())
                    return !1;
                for (let r = 0; r < 5 && r + n < this.information.getSize(); ++r)
                    if (r === 2) {
                        if (!this.information.get(n + 2))
                            return !1
                    } else if (this.information.get(n + r))
                        return !1;
                return !0
            }
            isAlphaOr646ToNumericLatch(n) {
                if (n + 3 > this.information.getSize())
                    return !1;
                for (let r = n; r < n + 3; ++r)
                    if (this.information.get(r))
                        return !1;
                return !0
            }
            isNumericToAlphaNumericLatch(n) {
                if (n + 1 > this.information.getSize())
                    return !1;
                for (let r = 0; r < 4 && r + n < this.information.getSize(); ++r)
                    if (this.information.get(n + r))
                        return !1;
                return !0
            }
        }
        class sa {
            constructor(n) {
                this.information = n,
                this.generalDecoder = new ui(n)
            }
            getInformation() {
                return this.information
            }
            getGeneralDecoder() {
                return this.generalDecoder
            }
        }
        class Gt extends sa {
            constructor(n) {
                super(n)
            }
            encodeCompressedGtin(n, r) {
                n.append("(01)");
                let s = n.length();
                n.append("9"),
                this.encodeCompressedGtinWithoutAI(n, r, s)
            }
            encodeCompressedGtinWithoutAI(n, r, s) {
                for (let o = 0; o < 4; ++o) {
                    let a = this.getGeneralDecoder().extractNumericValueFromBitArray(r + 10 * o, 10);
                    a / 100 === 0 && n.append("0"),
                    a / 10 === 0 && n.append("0"),
                    n.append(a)
                }
                Gt.appendCheckDigit(n, s)
            }
            static appendCheckDigit(n, r) {
                let s = 0;
                for (let o = 0; o < 13; o++) {
                    let a = n.charAt(o + r).charCodeAt(0) - 48;
                    s += o & 1 ? a : 3 * a
                }
                s = 10 - s % 10,
                s === 10 && (s = 0),
                n.append(s)
            }
        }
        Gt.GTIN_SIZE = 40;
        class ci extends Gt {
            constructor(n) {
                super(n)
            }
            parseInformation() {
                let n = new Ie;
                n.append("(01)");
                let r = n.length()
                  , s = this.getGeneralDecoder().extractNumericValueFromBitArray(ci.HEADER_SIZE, 4);
                return n.append(s),
                this.encodeCompressedGtinWithoutAI(n, ci.HEADER_SIZE + 4, r),
                this.getGeneralDecoder().decodeAllCodes(n, ci.HEADER_SIZE + 44)
            }
        }
        ci.HEADER_SIZE = 4;
        class go extends sa {
            constructor(n) {
                super(n)
            }
            parseInformation() {
                let n = new Ie;
                return this.getGeneralDecoder().decodeAllCodes(n, go.HEADER_SIZE)
            }
        }
        go.HEADER_SIZE = 5;
        class po extends Gt {
            constructor(n) {
                super(n)
            }
            encodeCompressedWeight(n, r, s) {
                let o = this.getGeneralDecoder().extractNumericValueFromBitArray(r, s);
                this.addWeightCode(n, o);
                let a = this.checkWeight(o)
                  , u = 1e5;
                for (let d = 0; d < 5; ++d)
                    a / u === 0 && n.append("0"),
                    u /= 10;
                n.append(a)
            }
        }
        class Bn extends po {
            constructor(n) {
                super(n)
            }
            parseInformation() {
                if (this.getInformation().getSize() != Bn.HEADER_SIZE + po.GTIN_SIZE + Bn.WEIGHT_SIZE)
                    throw new j;
                let n = new Ie;
                return this.encodeCompressedGtin(n, Bn.HEADER_SIZE),
                this.encodeCompressedWeight(n, Bn.HEADER_SIZE + po.GTIN_SIZE, Bn.WEIGHT_SIZE),
                n.toString()
            }
        }
        Bn.HEADER_SIZE = 5,
        Bn.WEIGHT_SIZE = 15;
        class m2 extends Bn {
            constructor(n) {
                super(n)
            }
            addWeightCode(n, r) {
                n.append("(3103)")
            }
            checkWeight(n) {
                return n
            }
        }
        class w2 extends Bn {
            constructor(n) {
                super(n)
            }
            addWeightCode(n, r) {
                r < 1e4 ? n.append("(3202)") : n.append("(3203)")
            }
            checkWeight(n) {
                return n < 1e4 ? n : n - 1e4
            }
        }
        class Ln extends Gt {
            constructor(n) {
                super(n)
            }
            parseInformation() {
                if (this.getInformation().getSize() < Ln.HEADER_SIZE + Gt.GTIN_SIZE)
                    throw new j;
                let n = new Ie;
                this.encodeCompressedGtin(n, Ln.HEADER_SIZE);
                let r = this.getGeneralDecoder().extractNumericValueFromBitArray(Ln.HEADER_SIZE + Gt.GTIN_SIZE, Ln.LAST_DIGIT_SIZE);
                n.append("(392"),
                n.append(r),
                n.append(")");
                let s = this.getGeneralDecoder().decodeGeneralPurposeField(Ln.HEADER_SIZE + Gt.GTIN_SIZE + Ln.LAST_DIGIT_SIZE, null);
                return n.append(s.getNewString()),
                n.toString()
            }
        }
        Ln.HEADER_SIZE = 8,
        Ln.LAST_DIGIT_SIZE = 2;
        class Ft extends Gt {
            constructor(n) {
                super(n)
            }
            parseInformation() {
                if (this.getInformation().getSize() < Ft.HEADER_SIZE + Gt.GTIN_SIZE)
                    throw new j;
                let n = new Ie;
                this.encodeCompressedGtin(n, Ft.HEADER_SIZE);
                let r = this.getGeneralDecoder().extractNumericValueFromBitArray(Ft.HEADER_SIZE + Gt.GTIN_SIZE, Ft.LAST_DIGIT_SIZE);
                n.append("(393"),
                n.append(r),
                n.append(")");
                let s = this.getGeneralDecoder().extractNumericValueFromBitArray(Ft.HEADER_SIZE + Gt.GTIN_SIZE + Ft.LAST_DIGIT_SIZE, Ft.FIRST_THREE_DIGITS_SIZE);
                s / 100 == 0 && n.append("0"),
                s / 10 == 0 && n.append("0"),
                n.append(s);
                let o = this.getGeneralDecoder().decodeGeneralPurposeField(Ft.HEADER_SIZE + Gt.GTIN_SIZE + Ft.LAST_DIGIT_SIZE + Ft.FIRST_THREE_DIGITS_SIZE, null);
                return n.append(o.getNewString()),
                n.toString()
            }
        }
        Ft.HEADER_SIZE = 8,
        Ft.LAST_DIGIT_SIZE = 2,
        Ft.FIRST_THREE_DIGITS_SIZE = 10;
        class Ze extends po {
            constructor(n, r, s) {
                super(n),
                this.dateCode = s,
                this.firstAIdigits = r
            }
            parseInformation() {
                if (this.getInformation().getSize() != Ze.HEADER_SIZE + Ze.GTIN_SIZE + Ze.WEIGHT_SIZE + Ze.DATE_SIZE)
                    throw new j;
                let n = new Ie;
                return this.encodeCompressedGtin(n, Ze.HEADER_SIZE),
                this.encodeCompressedWeight(n, Ze.HEADER_SIZE + Ze.GTIN_SIZE, Ze.WEIGHT_SIZE),
                this.encodeCompressedDate(n, Ze.HEADER_SIZE + Ze.GTIN_SIZE + Ze.WEIGHT_SIZE),
                n.toString()
            }
            encodeCompressedDate(n, r) {
                let s = this.getGeneralDecoder().extractNumericValueFromBitArray(r, Ze.DATE_SIZE);
                if (s == 38400)
                    return;
                n.append("("),
                n.append(this.dateCode),
                n.append(")");
                let o = s % 32;
                s /= 32;
                let a = s % 12 + 1;
                s /= 12;
                let u = s;
                u / 10 == 0 && n.append("0"),
                n.append(u),
                a / 10 == 0 && n.append("0"),
                n.append(a),
                o / 10 == 0 && n.append("0"),
                n.append(o)
            }
            addWeightCode(n, r) {
                n.append("("),
                n.append(this.firstAIdigits),
                n.append(r / 1e5),
                n.append(")")
            }
            checkWeight(n) {
                return n % 1e5
            }
        }
        Ze.HEADER_SIZE = 8,
        Ze.WEIGHT_SIZE = 20,
        Ze.DATE_SIZE = 16;
        function h1(E) {
            try {
                if (E.get(1))
                    return new ci(E);
                if (!E.get(2))
                    return new go(E);
                switch (ui.extractNumericValueFromBitArray(E, 1, 4)) {
                case 4:
                    return new m2(E);
                case 5:
                    return new w2(E)
                }
                switch (ui.extractNumericValueFromBitArray(E, 1, 5)) {
                case 12:
                    return new Ln(E);
                case 13:
                    return new Ft(E)
                }
                switch (ui.extractNumericValueFromBitArray(E, 1, 7)) {
                case 56:
                    return new Ze(E,"310","11");
                case 57:
                    return new Ze(E,"320","11");
                case 58:
                    return new Ze(E,"310","13");
                case 59:
                    return new Ze(E,"320","13");
                case 60:
                    return new Ze(E,"310","15");
                case 61:
                    return new Ze(E,"320","15");
                case 62:
                    return new Ze(E,"310","17");
                case 63:
                    return new Ze(E,"320","17")
                }
            } catch (n) {
                throw console.log(n),
                new kn("unknown decoder: " + E)
            }
        }
        class lr {
            constructor(n, r, s, o) {
                this.leftchar = n,
                this.rightchar = r,
                this.finderpattern = s,
                this.maybeLast = o
            }
            mayBeLast() {
                return this.maybeLast
            }
            getLeftChar() {
                return this.leftchar
            }
            getRightChar() {
                return this.rightchar
            }
            getFinderPattern() {
                return this.finderpattern
            }
            mustBeLast() {
                return this.rightchar == null
            }
            toString() {
                return "[ " + this.leftchar + ", " + this.rightchar + " : " + (this.finderpattern == null ? "null" : this.finderpattern.getValue()) + " ]"
            }
            static equals(n, r) {
                return n instanceof lr ? lr.equalsOrNull(n.leftchar, r.leftchar) && lr.equalsOrNull(n.rightchar, r.rightchar) && lr.equalsOrNull(n.finderpattern, r.finderpattern) : !1
            }
            static equalsOrNull(n, r) {
                return n === null ? r === null : lr.equals(n, r)
            }
            hashCode() {
                return this.leftchar.getValue() ^ this.rightchar.getValue() ^ this.finderpattern.getValue()
            }
        }
        class oa {
            constructor(n, r, s) {
                this.pairs = n,
                this.rowNumber = r,
                this.wasReversed = s
            }
            getPairs() {
                return this.pairs
            }
            getRowNumber() {
                return this.rowNumber
            }
            isReversed() {
                return this.wasReversed
            }
            isEquivalent(n) {
                return this.checkEqualitity(this, n)
            }
            toString() {
                return "{ " + this.pairs + " }"
            }
            equals(n, r) {
                return n instanceof oa ? this.checkEqualitity(n, r) && n.wasReversed === r.wasReversed : !1
            }
            checkEqualitity(n, r) {
                if (!n || !r)
                    return;
                let s;
                return n.forEach((o,a)=>{
                    r.forEach(u=>{
                        o.getLeftChar().getValue() === u.getLeftChar().getValue() && o.getRightChar().getValue() === u.getRightChar().getValue() && o.getFinderPatter().getValue() === u.getFinderPatter().getValue() && (s = !0)
                    }
                    )
                }
                ),
                s
            }
        }
        class G extends bt {
            constructor(n) {
                super(...arguments),
                this.pairs = new Array(G.MAX_PAIRS),
                this.rows = new Array,
                this.startEnd = [2],
                this.verbose = n === !0
            }
            decodeRow(n, r, s) {
                this.pairs.length = 0,
                this.startFromEven = !1;
                try {
                    return G.constructResult(this.decodeRow2pairs(n, r))
                } catch (o) {
                    this.verbose && console.log(o)
                }
                return this.pairs.length = 0,
                this.startFromEven = !0,
                G.constructResult(this.decodeRow2pairs(n, r))
            }
            reset() {
                this.pairs.length = 0,
                this.rows.length = 0
            }
            decodeRow2pairs(n, r) {
                let s = !1;
                for (; !s; )
                    try {
                        this.pairs.push(this.retrieveNextPair(r, this.pairs, n))
                    } catch (a) {
                        if (a instanceof j) {
                            if (!this.pairs.length)
                                throw new j;
                            s = !0
                        }
                    }
                if (this.checkChecksum())
                    return this.pairs;
                let o;
                if (this.rows.length ? o = !0 : o = !1,
                this.storeRow(n, !1),
                o) {
                    let a = this.checkRowsBoolean(!1);
                    if (a != null || (a = this.checkRowsBoolean(!0),
                    a != null))
                        return a
                }
                throw new j
            }
            checkRowsBoolean(n) {
                if (this.rows.length > 25)
                    return this.rows.length = 0,
                    null;
                this.pairs.length = 0,
                n && (this.rows = this.rows.reverse());
                let r = null;
                try {
                    r = this.checkRows(new Array, 0)
                } catch (s) {
                    this.verbose && console.log(s)
                }
                return n && (this.rows = this.rows.reverse()),
                r
            }
            checkRows(n, r) {
                for (let s = r; s < this.rows.length; s++) {
                    let o = this.rows[s];
                    this.pairs.length = 0;
                    for (let u of n)
                        this.pairs.push(u.getPairs());
                    if (this.pairs.push(o.getPairs()),
                    !G.isValidSequence(this.pairs))
                        continue;
                    if (this.checkChecksum())
                        return this.pairs;
                    let a = new Array(n);
                    a.push(o);
                    try {
                        return this.checkRows(a, s + 1)
                    } catch (u) {
                        this.verbose && console.log(u)
                    }
                }
                throw new j
            }
            static isValidSequence(n) {
                for (let r of G.FINDER_PATTERN_SEQUENCES) {
                    if (n.length > r.length)
                        continue;
                    let s = !0;
                    for (let o = 0; o < n.length; o++)
                        if (n[o].getFinderPattern().getValue() != r[o]) {
                            s = !1;
                            break
                        }
                    if (s)
                        return !0
                }
                return !1
            }
            storeRow(n, r) {
                let s = 0
                  , o = !1
                  , a = !1;
                for (; s < this.rows.length; ) {
                    let u = this.rows[s];
                    if (u.getRowNumber() > n) {
                        a = u.isEquivalent(this.pairs);
                        break
                    }
                    o = u.isEquivalent(this.pairs),
                    s++
                }
                a || o || G.isPartialRow(this.pairs, this.rows) || (this.rows.push(s, new oa(this.pairs,n,r)),
                this.removePartialRows(this.pairs, this.rows))
            }
            removePartialRows(n, r) {
                for (let s of r)
                    if (s.getPairs().length !== n.length) {
                        for (let o of s.getPairs())
                            for (let a of n)
                                if (lr.equals(o, a))
                                    break
                    }
            }
            static isPartialRow(n, r) {
                for (let s of r) {
                    let o = !0;
                    for (let a of n) {
                        let u = !1;
                        for (let d of s.getPairs())
                            if (a.equals(d)) {
                                u = !0;
                                break
                            }
                        if (!u) {
                            o = !1;
                            break
                        }
                    }
                    if (o)
                        return !0
                }
                return !1
            }
            getRows() {
                return this.rows
            }
            static constructResult(n) {
                let r = x2.buildBitArray(n)
                  , o = h1(r).parseInformation()
                  , a = n[0].getFinderPattern().getResultPoints()
                  , u = n[n.length - 1].getFinderPattern().getResultPoints()
                  , d = [a[0], a[1], u[0], u[1]];
                return new Qe(o,null,null,d,ae.RSS_EXPANDED,null)
            }
            checkChecksum() {
                let n = this.pairs.get(0)
                  , r = n.getLeftChar()
                  , s = n.getRightChar();
                if (s == null)
                    return !1;
                let o = s.getChecksumPortion()
                  , a = 2;
                for (let d = 1; d < this.pairs.size(); ++d) {
                    let h = this.pairs.get(d);
                    o += h.getLeftChar().getChecksumPortion(),
                    a++;
                    let p = h.getRightChar();
                    p != null && (o += p.getChecksumPortion(),
                    a++)
                }
                return o %= 211,
                211 * (a - 4) + o == r.getValue()
            }
            static getNextSecondBar(n, r) {
                let s;
                return n.get(r) ? (s = n.getNextUnset(r),
                s = n.getNextSet(s)) : (s = n.getNextSet(r),
                s = n.getNextUnset(s)),
                s
            }
            retrieveNextPair(n, r, s) {
                let o = r.length % 2 == 0;
                this.startFromEven && (o = !o);
                let a, u = !0, d = -1;
                do
                    this.findNextPair(n, r, d),
                    a = this.parseFoundFinderPattern(n, s, o),
                    a == null ? d = G.getNextSecondBar(n, this.startEnd[0]) : u = !1;
                while (u);
                let h = this.decodeDataCharacter(n, a, o, !0);
                if (!this.isEmptyPair(r) && r[r.length - 1].mustBeLast())
                    throw new j;
                let p;
                try {
                    p = this.decodeDataCharacter(n, a, o, !1)
                } catch (w) {
                    p = null,
                    this.verbose && console.log(w)
                }
                return new lr(h,p,a,!0)
            }
            isEmptyPair(n) {
                return n.length === 0
            }
            findNextPair(n, r, s) {
                let o = this.getDecodeFinderCounters();
                o[0] = 0,
                o[1] = 0,
                o[2] = 0,
                o[3] = 0;
                let a = n.getSize(), u;
                s >= 0 ? u = s : this.isEmptyPair(r) ? u = 0 : u = r[r.length - 1].getFinderPattern().getStartEnd()[1];
                let d = r.length % 2 != 0;
                this.startFromEven && (d = !d);
                let h = !1;
                for (; u < a && (h = !n.get(u),
                !!h); )
                    u++;
                let p = 0
                  , w = u;
                for (let C = u; C < a; C++)
                    if (n.get(C) != h)
                        o[p]++;
                    else {
                        if (p == 3) {
                            if (d && G.reverseCounters(o),
                            G.isFinderPattern(o)) {
                                this.startEnd[0] = w,
                                this.startEnd[1] = C;
                                return
                            }
                            d && G.reverseCounters(o),
                            w += o[0] + o[1],
                            o[0] = o[2],
                            o[1] = o[3],
                            o[2] = 0,
                            o[3] = 0,
                            p--
                        } else
                            p++;
                        o[p] = 1,
                        h = !h
                    }
                throw new j
            }
            static reverseCounters(n) {
                let r = n.length;
                for (let s = 0; s < r / 2; ++s) {
                    let o = n[s];
                    n[s] = n[r - s - 1],
                    n[r - s - 1] = o
                }
            }
            parseFoundFinderPattern(n, r, s) {
                let o, a, u;
                if (s) {
                    let p = this.startEnd[0] - 1;
                    for (; p >= 0 && !n.get(p); )
                        p--;
                    p++,
                    o = this.startEnd[0] - p,
                    a = p,
                    u = this.startEnd[1]
                } else
                    a = this.startEnd[0],
                    u = n.getNextUnset(this.startEnd[1] + 1),
                    o = u - this.startEnd[1];
                let d = this.getDecodeFinderCounters();
                M.arraycopy(d, 0, d, 1, d.length - 1),
                d[0] = o;
                let h;
                try {
                    h = this.parseFinderValue(d, G.FINDER_PATTERNS)
                } catch {
                    return null
                }
                return new ho(h,[a, u],a,u,r)
            }
            decodeDataCharacter(n, r, s, o) {
                let a = this.getDataCharacterCounters();
                for (let Fe = 0; Fe < a.length; Fe++)
                    a[Fe] = 0;
                if (o)
                    G.recordPatternInReverse(n, r.getStartEnd()[0], a);
                else {
                    G.recordPattern(n, r.getStartEnd()[1], a);
                    for (let Fe = 0, Nt = a.length - 1; Fe < Nt; Fe++,
                    Nt--) {
                        let tn = a[Fe];
                        a[Fe] = a[Nt],
                        a[Nt] = tn
                    }
                }
                let u = 17
                  , d = Ne.sum(new Int32Array(a)) / u
                  , h = (r.getStartEnd()[1] - r.getStartEnd()[0]) / 15;
                if (Math.abs(d - h) / h > .3)
                    throw new j;
                let p = this.getOddCounts()
                  , w = this.getEvenCounts()
                  , C = this.getOddRoundingErrors()
                  , A = this.getEvenRoundingErrors();
                for (let Fe = 0; Fe < a.length; Fe++) {
                    let Nt = 1 * a[Fe] / d
                      , tn = Nt + .5;
                    if (tn < 1) {
                        if (Nt < .3)
                            throw new j;
                        tn = 1
                    } else if (tn > 8) {
                        if (Nt > 8.7)
                            throw new j;
                        tn = 8
                    }
                    let pi = Fe / 2;
                    Fe & 1 ? (w[pi] = tn,
                    A[pi] = Nt - tn) : (p[pi] = tn,
                    C[pi] = Nt - tn)
                }
                this.adjustOddEvenCounts(u);
                let T = 4 * r.getValue() + (s ? 0 : 2) + (o ? 0 : 1) - 1
                  , R = 0
                  , b = 0;
                for (let Fe = p.length - 1; Fe >= 0; Fe--) {
                    if (G.isNotA1left(r, s, o)) {
                        let Nt = G.WEIGHTS[T][2 * Fe];
                        b += p[Fe] * Nt
                    }
                    R += p[Fe]
                }
                let P = 0;
                for (let Fe = w.length - 1; Fe >= 0; Fe--)
                    if (G.isNotA1left(r, s, o)) {
                        let Nt = G.WEIGHTS[T][2 * Fe + 1];
                        P += w[Fe] * Nt
                    }
                let z = b + P;
                if (R & 1 || R > 13 || R < 4)
                    throw new j;
                let Q = (13 - R) / 2
                  , J = G.SYMBOL_WIDEST[Q]
                  , Y = 9 - J
                  , Se = Pn.getRSSvalue(p, J, !0)
                  , we = Pn.getRSSvalue(w, Y, !1)
                  , Yt = G.EVEN_TOTAL_SUBSET[Q]
                  , vn = G.GSUM[Q]
                  , Zt = Se * Yt + we + vn;
                return new ai(Zt,z)
            }
            static isNotA1left(n, r, s) {
                return !(n.getValue() == 0 && r && s)
            }
            adjustOddEvenCounts(n) {
                let r = Ne.sum(new Int32Array(this.getOddCounts()))
                  , s = Ne.sum(new Int32Array(this.getEvenCounts()))
                  , o = !1
                  , a = !1;
                r > 13 ? a = !0 : r < 4 && (o = !0);
                let u = !1
                  , d = !1;
                s > 13 ? d = !0 : s < 4 && (u = !0);
                let h = r + s - n
                  , p = (r & 1) == 1
                  , w = (s & 1) == 0;
                if (h == 1)
                    if (p) {
                        if (w)
                            throw new j;
                        a = !0
                    } else {
                        if (!w)
                            throw new j;
                        d = !0
                    }
                else if (h == -1)
                    if (p) {
                        if (w)
                            throw new j;
                        o = !0
                    } else {
                        if (!w)
                            throw new j;
                        u = !0
                    }
                else if (h == 0) {
                    if (p) {
                        if (!w)
                            throw new j;
                        r < s ? (o = !0,
                        d = !0) : (a = !0,
                        u = !0)
                    } else if (w)
                        throw new j
                } else
                    throw new j;
                if (o) {
                    if (a)
                        throw new j;
                    G.increment(this.getOddCounts(), this.getOddRoundingErrors())
                }
                if (a && G.decrement(this.getOddCounts(), this.getOddRoundingErrors()),
                u) {
                    if (d)
                        throw new j;
                    G.increment(this.getEvenCounts(), this.getOddRoundingErrors())
                }
                d && G.decrement(this.getEvenCounts(), this.getEvenRoundingErrors())
            }
        }
        G.SYMBOL_WIDEST = [7, 5, 4, 3, 1],
        G.EVEN_TOTAL_SUBSET = [4, 20, 52, 104, 204],
        G.GSUM = [0, 348, 1388, 2948, 3988],
        G.FINDER_PATTERNS = [Int32Array.from([1, 8, 4, 1]), Int32Array.from([3, 6, 4, 1]), Int32Array.from([3, 4, 6, 1]), Int32Array.from([3, 2, 8, 1]), Int32Array.from([2, 6, 5, 1]), Int32Array.from([2, 2, 9, 1])],
        G.WEIGHTS = [[1, 3, 9, 27, 81, 32, 96, 77], [20, 60, 180, 118, 143, 7, 21, 63], [189, 145, 13, 39, 117, 140, 209, 205], [193, 157, 49, 147, 19, 57, 171, 91], [62, 186, 136, 197, 169, 85, 44, 132], [185, 133, 188, 142, 4, 12, 36, 108], [113, 128, 173, 97, 80, 29, 87, 50], [150, 28, 84, 41, 123, 158, 52, 156], [46, 138, 203, 187, 139, 206, 196, 166], [76, 17, 51, 153, 37, 111, 122, 155], [43, 129, 176, 106, 107, 110, 119, 146], [16, 48, 144, 10, 30, 90, 59, 177], [109, 116, 137, 200, 178, 112, 125, 164], [70, 210, 208, 202, 184, 130, 179, 115], [134, 191, 151, 31, 93, 68, 204, 190], [148, 22, 66, 198, 172, 94, 71, 2], [6, 18, 54, 162, 64, 192, 154, 40], [120, 149, 25, 75, 14, 42, 126, 167], [79, 26, 78, 23, 69, 207, 199, 175], [103, 98, 83, 38, 114, 131, 182, 124], [161, 61, 183, 127, 170, 88, 53, 159], [55, 165, 73, 8, 24, 72, 5, 15], [45, 135, 194, 160, 58, 174, 100, 89]],
        G.FINDER_PAT_A = 0,
        G.FINDER_PAT_B = 1,
        G.FINDER_PAT_C = 2,
        G.FINDER_PAT_D = 3,
        G.FINDER_PAT_E = 4,
        G.FINDER_PAT_F = 5,
        G.FINDER_PATTERN_SEQUENCES = [[G.FINDER_PAT_A, G.FINDER_PAT_A], [G.FINDER_PAT_A, G.FINDER_PAT_B, G.FINDER_PAT_B], [G.FINDER_PAT_A, G.FINDER_PAT_C, G.FINDER_PAT_B, G.FINDER_PAT_D], [G.FINDER_PAT_A, G.FINDER_PAT_E, G.FINDER_PAT_B, G.FINDER_PAT_D, G.FINDER_PAT_C], [G.FINDER_PAT_A, G.FINDER_PAT_E, G.FINDER_PAT_B, G.FINDER_PAT_D, G.FINDER_PAT_D, G.FINDER_PAT_F], [G.FINDER_PAT_A, G.FINDER_PAT_E, G.FINDER_PAT_B, G.FINDER_PAT_D, G.FINDER_PAT_E, G.FINDER_PAT_F, G.FINDER_PAT_F], [G.FINDER_PAT_A, G.FINDER_PAT_A, G.FINDER_PAT_B, G.FINDER_PAT_B, G.FINDER_PAT_C, G.FINDER_PAT_C, G.FINDER_PAT_D, G.FINDER_PAT_D], [G.FINDER_PAT_A, G.FINDER_PAT_A, G.FINDER_PAT_B, G.FINDER_PAT_B, G.FINDER_PAT_C, G.FINDER_PAT_C, G.FINDER_PAT_D, G.FINDER_PAT_E, G.FINDER_PAT_E], [G.FINDER_PAT_A, G.FINDER_PAT_A, G.FINDER_PAT_B, G.FINDER_PAT_B, G.FINDER_PAT_C, G.FINDER_PAT_C, G.FINDER_PAT_D, G.FINDER_PAT_E, G.FINDER_PAT_F, G.FINDER_PAT_F], [G.FINDER_PAT_A, G.FINDER_PAT_A, G.FINDER_PAT_B, G.FINDER_PAT_B, G.FINDER_PAT_C, G.FINDER_PAT_D, G.FINDER_PAT_D, G.FINDER_PAT_E, G.FINDER_PAT_E, G.FINDER_PAT_F, G.FINDER_PAT_F]],
        G.MAX_PAIRS = 11;
        class y2 extends ai {
            constructor(n, r, s) {
                super(n, r),
                this.count = 0,
                this.finderPattern = s
            }
            getFinderPattern() {
                return this.finderPattern
            }
            getCount() {
                return this.count
            }
            incrementCount() {
                this.count++
            }
        }
        class rt extends bt {
            constructor() {
                super(...arguments),
                this.possibleLeftPairs = [],
                this.possibleRightPairs = []
            }
            decodeRow(n, r, s) {
                const o = this.decodePair(r, !1, n, s);
                rt.addOrTally(this.possibleLeftPairs, o),
                r.reverse();
                let a = this.decodePair(r, !0, n, s);
                rt.addOrTally(this.possibleRightPairs, a),
                r.reverse();
                for (let u of this.possibleLeftPairs)
                    if (u.getCount() > 1) {
                        for (let d of this.possibleRightPairs)
                            if (d.getCount() > 1 && rt.checkChecksum(u, d))
                                return rt.constructResult(u, d)
                    }
                throw new j
            }
            static addOrTally(n, r) {
                if (r == null)
                    return;
                let s = !1;
                for (let o of n)
                    if (o.getValue() === r.getValue()) {
                        o.incrementCount(),
                        s = !0;
                        break
                    }
                s || n.push(r)
            }
            reset() {
                this.possibleLeftPairs.length = 0,
                this.possibleRightPairs.length = 0
            }
            static constructResult(n, r) {
                let s = 4537077 * n.getValue() + r.getValue()
                  , o = new String(s).toString()
                  , a = new Ie;
                for (let p = 13 - o.length; p > 0; p--)
                    a.append("0");
                a.append(o);
                let u = 0;
                for (let p = 0; p < 13; p++) {
                    let w = a.charAt(p).charCodeAt(0) - 48;
                    u += p & 1 ? w : 3 * w
                }
                u = 10 - u % 10,
                u === 10 && (u = 0),
                a.append(u.toString());
                let d = n.getFinderPattern().getResultPoints()
                  , h = r.getFinderPattern().getResultPoints();
                return new Qe(a.toString(),null,0,[d[0], d[1], h[0], h[1]],ae.RSS_14,new Date().getTime())
            }
            static checkChecksum(n, r) {
                let s = (n.getChecksumPortion() + 16 * r.getChecksumPortion()) % 79
                  , o = 9 * n.getFinderPattern().getValue() + r.getFinderPattern().getValue();
                return o > 72 && o--,
                o > 8 && o--,
                s === o
            }
            decodePair(n, r, s, o) {
                try {
                    let a = this.findFinderPattern(n, r)
                      , u = this.parseFoundFinderPattern(n, s, r, a)
                      , d = o == null ? null : o.get(Z.NEED_RESULT_POINT_CALLBACK);
                    if (d != null) {
                        let w = (a[0] + a[1]) / 2;
                        r && (w = n.getSize() - 1 - w),
                        d.foundPossibleResultPoint(new le(w,s))
                    }
                    let h = this.decodeDataCharacter(n, u, !0)
                      , p = this.decodeDataCharacter(n, u, !1);
                    return new y2(1597 * h.getValue() + p.getValue(),h.getChecksumPortion() + 4 * p.getChecksumPortion(),u)
                } catch {
                    return null
                }
            }
            decodeDataCharacter(n, r, s) {
                let o = this.getDataCharacterCounters();
                for (let P = 0; P < o.length; P++)
                    o[P] = 0;
                if (s)
                    ft.recordPatternInReverse(n, r.getStartEnd()[0], o);
                else {
                    ft.recordPattern(n, r.getStartEnd()[1] + 1, o);
                    for (let P = 0, z = o.length - 1; P < z; P++,
                    z--) {
                        let Q = o[P];
                        o[P] = o[z],
                        o[z] = Q
                    }
                }
                let a = s ? 16 : 15
                  , u = Ne.sum(new Int32Array(o)) / a
                  , d = this.getOddCounts()
                  , h = this.getEvenCounts()
                  , p = this.getOddRoundingErrors()
                  , w = this.getEvenRoundingErrors();
                for (let P = 0; P < o.length; P++) {
                    let z = o[P] / u
                      , Q = Math.floor(z + .5);
                    Q < 1 ? Q = 1 : Q > 8 && (Q = 8);
                    let J = Math.floor(P / 2);
                    P & 1 ? (h[J] = Q,
                    w[J] = z - Q) : (d[J] = Q,
                    p[J] = z - Q)
                }
                this.adjustOddEvenCounts(s, a);
                let C = 0
                  , A = 0;
                for (let P = d.length - 1; P >= 0; P--)
                    A *= 9,
                    A += d[P],
                    C += d[P];
                let T = 0
                  , R = 0;
                for (let P = h.length - 1; P >= 0; P--)
                    T *= 9,
                    T += h[P],
                    R += h[P];
                let b = A + 3 * T;
                if (s) {
                    if (C & 1 || C > 12 || C < 4)
                        throw new j;
                    let P = (12 - C) / 2
                      , z = rt.OUTSIDE_ODD_WIDEST[P]
                      , Q = 9 - z
                      , J = Pn.getRSSvalue(d, z, !1)
                      , Y = Pn.getRSSvalue(h, Q, !0)
                      , Se = rt.OUTSIDE_EVEN_TOTAL_SUBSET[P]
                      , we = rt.OUTSIDE_GSUM[P];
                    return new ai(J * Se + Y + we,b)
                } else {
                    if (R & 1 || R > 10 || R < 4)
                        throw new j;
                    let P = (10 - R) / 2
                      , z = rt.INSIDE_ODD_WIDEST[P]
                      , Q = 9 - z
                      , J = Pn.getRSSvalue(d, z, !0)
                      , Y = Pn.getRSSvalue(h, Q, !1)
                      , Se = rt.INSIDE_ODD_TOTAL_SUBSET[P]
                      , we = rt.INSIDE_GSUM[P];
                    return new ai(Y * Se + J + we,b)
                }
            }
            findFinderPattern(n, r) {
                let s = this.getDecodeFinderCounters();
                s[0] = 0,
                s[1] = 0,
                s[2] = 0,
                s[3] = 0;
                let o = n.getSize()
                  , a = !1
                  , u = 0;
                for (; u < o && (a = !n.get(u),
                r !== a); )
                    u++;
                let d = 0
                  , h = u;
                for (let p = u; p < o; p++)
                    if (n.get(p) !== a)
                        s[d]++;
                    else {
                        if (d === 3) {
                            if (bt.isFinderPattern(s))
                                return [h, p];
                            h += s[0] + s[1],
                            s[0] = s[2],
                            s[1] = s[3],
                            s[2] = 0,
                            s[3] = 0,
                            d--
                        } else
                            d++;
                        s[d] = 1,
                        a = !a
                    }
                throw new j
            }
            parseFoundFinderPattern(n, r, s, o) {
                let a = n.get(o[0])
                  , u = o[0] - 1;
                for (; u >= 0 && a !== n.get(u); )
                    u--;
                u++;
                const d = o[0] - u
                  , h = this.getDecodeFinderCounters()
                  , p = new Int32Array(h.length);
                M.arraycopy(h, 0, p, 1, h.length - 1),
                p[0] = d;
                const w = this.parseFinderValue(p, rt.FINDER_PATTERNS);
                let C = u
                  , A = o[1];
                return s && (C = n.getSize() - 1 - C,
                A = n.getSize() - 1 - A),
                new ho(w,[u, o[1]],C,A,r)
            }
            adjustOddEvenCounts(n, r) {
                let s = Ne.sum(new Int32Array(this.getOddCounts()))
                  , o = Ne.sum(new Int32Array(this.getEvenCounts()))
                  , a = !1
                  , u = !1
                  , d = !1
                  , h = !1;
                n ? (s > 12 ? u = !0 : s < 4 && (a = !0),
                o > 12 ? h = !0 : o < 4 && (d = !0)) : (s > 11 ? u = !0 : s < 5 && (a = !0),
                o > 10 ? h = !0 : o < 4 && (d = !0));
                let p = s + o - r
                  , w = (s & 1) === (n ? 1 : 0)
                  , C = (o & 1) === 1;
                if (p === 1)
                    if (w) {
                        if (C)
                            throw new j;
                        u = !0
                    } else {
                        if (!C)
                            throw new j;
                        h = !0
                    }
                else if (p === -1)
                    if (w) {
                        if (C)
                            throw new j;
                        a = !0
                    } else {
                        if (!C)
                            throw new j;
                        d = !0
                    }
                else if (p === 0) {
                    if (w) {
                        if (!C)
                            throw new j;
                        s < o ? (a = !0,
                        h = !0) : (u = !0,
                        d = !0)
                    } else if (C)
                        throw new j
                } else
                    throw new j;
                if (a) {
                    if (u)
                        throw new j;
                    bt.increment(this.getOddCounts(), this.getOddRoundingErrors())
                }
                if (u && bt.decrement(this.getOddCounts(), this.getOddRoundingErrors()),
                d) {
                    if (h)
                        throw new j;
                    bt.increment(this.getEvenCounts(), this.getOddRoundingErrors())
                }
                h && bt.decrement(this.getEvenCounts(), this.getEvenRoundingErrors())
            }
        }
        rt.OUTSIDE_EVEN_TOTAL_SUBSET = [1, 10, 34, 70, 126],
        rt.INSIDE_ODD_TOTAL_SUBSET = [4, 20, 48, 81],
        rt.OUTSIDE_GSUM = [0, 161, 961, 2015, 2715],
        rt.INSIDE_GSUM = [0, 336, 1036, 1516],
        rt.OUTSIDE_ODD_WIDEST = [8, 6, 4, 3, 1],
        rt.INSIDE_ODD_WIDEST = [2, 4, 6, 8],
        rt.FINDER_PATTERNS = [Int32Array.from([3, 8, 2, 1]), Int32Array.from([3, 5, 5, 1]), Int32Array.from([3, 3, 7, 1]), Int32Array.from([3, 1, 9, 1]), Int32Array.from([2, 7, 4, 1]), Int32Array.from([2, 5, 6, 1]), Int32Array.from([2, 3, 8, 1]), Int32Array.from([1, 5, 7, 1]), Int32Array.from([1, 3, 9, 1])];
        class fi extends ft {
            constructor(n, r) {
                super(),
                this.readers = [],
                this.verbose = r === !0;
                const s = n ? n.get(Z.POSSIBLE_FORMATS) : null
                  , o = n && n.get(Z.ASSUME_CODE_39_CHECK_DIGIT) !== void 0;
                s ? ((s.includes(ae.EAN_13) || s.includes(ae.UPC_A) || s.includes(ae.EAN_8) || s.includes(ae.UPC_E)) && this.readers.push(new ra(n)),
                s.includes(ae.CODE_39) && this.readers.push(new gt(o)),
                s.includes(ae.CODE_128) && this.readers.push(new ne),
                s.includes(ae.ITF) && this.readers.push(new Be),
                s.includes(ae.RSS_14) && this.readers.push(new rt),
                s.includes(ae.RSS_EXPANDED) && this.readers.push(new G(this.verbose))) : (this.readers.push(new ra(n)),
                this.readers.push(new gt),
                this.readers.push(new ra(n)),
                this.readers.push(new ne),
                this.readers.push(new Be),
                this.readers.push(new rt),
                this.readers.push(new G(this.verbose)))
            }
            decodeRow(n, r, s) {
                for (let o = 0; o < this.readers.length; o++)
                    try {
                        return this.readers[o].decodeRow(n, r, s)
                    } catch {}
                throw new j
            }
            reset() {
                this.readers.forEach(n=>n.reset())
            }
        }
        class E2 extends cn {
            constructor(n=500, r) {
                super(new fi(r), n, r)
            }
        }
        class Me {
            constructor(n, r, s) {
                this.ecCodewords = n,
                this.ecBlocks = [r],
                s && this.ecBlocks.push(s)
            }
            getECCodewords() {
                return this.ecCodewords
            }
            getECBlocks() {
                return this.ecBlocks
            }
        }
        class De {
            constructor(n, r) {
                this.count = n,
                this.dataCodewords = r
            }
            getCount() {
                return this.count
            }
            getDataCodewords() {
                return this.dataCodewords
            }
        }
        class ve {
            constructor(n, r, s, o, a, u) {
                this.versionNumber = n,
                this.symbolSizeRows = r,
                this.symbolSizeColumns = s,
                this.dataRegionSizeRows = o,
                this.dataRegionSizeColumns = a,
                this.ecBlocks = u;
                let d = 0;
                const h = u.getECCodewords()
                  , p = u.getECBlocks();
                for (let w of p)
                    d += w.getCount() * (w.getDataCodewords() + h);
                this.totalCodewords = d
            }
            getVersionNumber() {
                return this.versionNumber
            }
            getSymbolSizeRows() {
                return this.symbolSizeRows
            }
            getSymbolSizeColumns() {
                return this.symbolSizeColumns
            }
            getDataRegionSizeRows() {
                return this.dataRegionSizeRows
            }
            getDataRegionSizeColumns() {
                return this.dataRegionSizeColumns
            }
            getTotalCodewords() {
                return this.totalCodewords
            }
            getECBlocks() {
                return this.ecBlocks
            }
            static getVersionForDimensions(n, r) {
                if (n & 1 || r & 1)
                    throw new F;
                for (let s of ve.VERSIONS)
                    if (s.symbolSizeRows === n && s.symbolSizeColumns === r)
                        return s;
                throw new F
            }
            toString() {
                return "" + this.versionNumber
            }
            static buildVersions() {
                return [new ve(1,10,10,8,8,new Me(5,new De(1,3))), new ve(2,12,12,10,10,new Me(7,new De(1,5))), new ve(3,14,14,12,12,new Me(10,new De(1,8))), new ve(4,16,16,14,14,new Me(12,new De(1,12))), new ve(5,18,18,16,16,new Me(14,new De(1,18))), new ve(6,20,20,18,18,new Me(18,new De(1,22))), new ve(7,22,22,20,20,new Me(20,new De(1,30))), new ve(8,24,24,22,22,new Me(24,new De(1,36))), new ve(9,26,26,24,24,new Me(28,new De(1,44))), new ve(10,32,32,14,14,new Me(36,new De(1,62))), new ve(11,36,36,16,16,new Me(42,new De(1,86))), new ve(12,40,40,18,18,new Me(48,new De(1,114))), new ve(13,44,44,20,20,new Me(56,new De(1,144))), new ve(14,48,48,22,22,new Me(68,new De(1,174))), new ve(15,52,52,24,24,new Me(42,new De(2,102))), new ve(16,64,64,14,14,new Me(56,new De(2,140))), new ve(17,72,72,16,16,new Me(36,new De(4,92))), new ve(18,80,80,18,18,new Me(48,new De(4,114))), new ve(19,88,88,20,20,new Me(56,new De(4,144))), new ve(20,96,96,22,22,new Me(68,new De(4,174))), new ve(21,104,104,24,24,new Me(56,new De(6,136))), new ve(22,120,120,18,18,new Me(68,new De(6,175))), new ve(23,132,132,20,20,new Me(62,new De(8,163))), new ve(24,144,144,22,22,new Me(62,new De(8,156),new De(2,155))), new ve(25,8,18,6,16,new Me(7,new De(1,5))), new ve(26,8,32,6,14,new Me(11,new De(1,10))), new ve(27,12,26,10,24,new Me(14,new De(1,16))), new ve(28,12,36,10,16,new Me(18,new De(1,22))), new ve(29,16,36,14,16,new Me(24,new De(1,32))), new ve(30,16,48,14,22,new Me(28,new De(1,49)))]
            }
        }
        ve.VERSIONS = ve.buildVersions();
        class la {
            constructor(n) {
                const r = n.getHeight();
                if (r < 8 || r > 144 || r & 1)
                    throw new F;
                this.version = la.readVersion(n),
                this.mappingBitMatrix = this.extractDataRegion(n),
                this.readMappingMatrix = new lt(this.mappingBitMatrix.getWidth(),this.mappingBitMatrix.getHeight())
            }
            getVersion() {
                return this.version
            }
            static readVersion(n) {
                const r = n.getHeight()
                  , s = n.getWidth();
                return ve.getVersionForDimensions(r, s)
            }
            readCodewords() {
                const n = new Int8Array(this.version.getTotalCodewords());
                let r = 0
                  , s = 4
                  , o = 0;
                const a = this.mappingBitMatrix.getHeight()
                  , u = this.mappingBitMatrix.getWidth();
                let d = !1
                  , h = !1
                  , p = !1
                  , w = !1;
                do
                    if (s === a && o === 0 && !d)
                        n[r++] = this.readCorner1(a, u) & 255,
                        s -= 2,
                        o += 2,
                        d = !0;
                    else if (s === a - 2 && o === 0 && u & 3 && !h)
                        n[r++] = this.readCorner2(a, u) & 255,
                        s -= 2,
                        o += 2,
                        h = !0;
                    else if (s === a + 4 && o === 2 && !(u & 7) && !p)
                        n[r++] = this.readCorner3(a, u) & 255,
                        s -= 2,
                        o += 2,
                        p = !0;
                    else if (s === a - 2 && o === 0 && (u & 7) === 4 && !w)
                        n[r++] = this.readCorner4(a, u) & 255,
                        s -= 2,
                        o += 2,
                        w = !0;
                    else {
                        do
                            s < a && o >= 0 && !this.readMappingMatrix.get(o, s) && (n[r++] = this.readUtah(s, o, a, u) & 255),
                            s -= 2,
                            o += 2;
                        while (s >= 0 && o < u);
                        s += 1,
                        o += 3;
                        do
                            s >= 0 && o < u && !this.readMappingMatrix.get(o, s) && (n[r++] = this.readUtah(s, o, a, u) & 255),
                            s += 2,
                            o -= 2;
                        while (s < a && o >= 0);
                        s += 3,
                        o += 1
                    }
                while (s < a || o < u);
                if (r !== this.version.getTotalCodewords())
                    throw new F;
                return n
            }
            readModule(n, r, s, o) {
                return n < 0 && (n += s,
                r += 4 - (s + 4 & 7)),
                r < 0 && (r += o,
                n += 4 - (o + 4 & 7)),
                this.readMappingMatrix.set(r, n),
                this.mappingBitMatrix.get(r, n)
            }
            readUtah(n, r, s, o) {
                let a = 0;
                return this.readModule(n - 2, r - 2, s, o) && (a |= 1),
                a <<= 1,
                this.readModule(n - 2, r - 1, s, o) && (a |= 1),
                a <<= 1,
                this.readModule(n - 1, r - 2, s, o) && (a |= 1),
                a <<= 1,
                this.readModule(n - 1, r - 1, s, o) && (a |= 1),
                a <<= 1,
                this.readModule(n - 1, r, s, o) && (a |= 1),
                a <<= 1,
                this.readModule(n, r - 2, s, o) && (a |= 1),
                a <<= 1,
                this.readModule(n, r - 1, s, o) && (a |= 1),
                a <<= 1,
                this.readModule(n, r, s, o) && (a |= 1),
                a
            }
            readCorner1(n, r) {
                let s = 0;
                return this.readModule(n - 1, 0, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(n - 1, 1, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(n - 1, 2, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(0, r - 2, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(0, r - 1, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(1, r - 1, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(2, r - 1, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(3, r - 1, n, r) && (s |= 1),
                s
            }
            readCorner2(n, r) {
                let s = 0;
                return this.readModule(n - 3, 0, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(n - 2, 0, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(n - 1, 0, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(0, r - 4, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(0, r - 3, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(0, r - 2, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(0, r - 1, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(1, r - 1, n, r) && (s |= 1),
                s
            }
            readCorner3(n, r) {
                let s = 0;
                return this.readModule(n - 1, 0, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(n - 1, r - 1, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(0, r - 3, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(0, r - 2, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(0, r - 1, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(1, r - 3, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(1, r - 2, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(1, r - 1, n, r) && (s |= 1),
                s
            }
            readCorner4(n, r) {
                let s = 0;
                return this.readModule(n - 3, 0, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(n - 2, 0, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(n - 1, 0, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(0, r - 2, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(0, r - 1, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(1, r - 1, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(2, r - 1, n, r) && (s |= 1),
                s <<= 1,
                this.readModule(3, r - 1, n, r) && (s |= 1),
                s
            }
            extractDataRegion(n) {
                const r = this.version.getSymbolSizeRows()
                  , s = this.version.getSymbolSizeColumns();
                if (n.getHeight() !== r)
                    throw new v("Dimension of bitMatrix must match the version size");
                const o = this.version.getDataRegionSizeRows()
                  , a = this.version.getDataRegionSizeColumns()
                  , u = r / o | 0
                  , d = s / a | 0
                  , h = u * o
                  , p = d * a
                  , w = new lt(p,h);
                for (let C = 0; C < u; ++C) {
                    const A = C * o;
                    for (let T = 0; T < d; ++T) {
                        const R = T * a;
                        for (let b = 0; b < o; ++b) {
                            const P = C * (o + 2) + 1 + b
                              , z = A + b;
                            for (let Q = 0; Q < a; ++Q) {
                                const J = T * (a + 2) + 1 + Q;
                                if (n.get(J, P)) {
                                    const Y = R + Q;
                                    w.set(Y, z)
                                }
                            }
                        }
                    }
                }
                return w
            }
        }
        class aa {
            constructor(n, r) {
                this.numDataCodewords = n,
                this.codewords = r
            }
            static getDataBlocks(n, r) {
                const s = r.getECBlocks();
                let o = 0;
                const a = s.getECBlocks();
                for (let b of a)
                    o += b.getCount();
                const u = new Array(o);
                let d = 0;
                for (let b of a)
                    for (let P = 0; P < b.getCount(); P++) {
                        const z = b.getDataCodewords()
                          , Q = s.getECCodewords() + z;
                        u[d++] = new aa(z,new Uint8Array(Q))
                    }
                const p = u[0].codewords.length - s.getECCodewords()
                  , w = p - 1;
                let C = 0;
                for (let b = 0; b < w; b++)
                    for (let P = 0; P < d; P++)
                        u[P].codewords[b] = n[C++];
                const A = r.getVersionNumber() === 24
                  , T = A ? 8 : d;
                for (let b = 0; b < T; b++)
                    u[b].codewords[p - 1] = n[C++];
                const R = u[0].codewords.length;
                for (let b = p; b < R; b++)
                    for (let P = 0; P < d; P++) {
                        const z = A ? (P + 8) % d : P
                          , Q = A && z > 7 ? b - 1 : b;
                        u[z].codewords[Q] = n[C++]
                    }
                if (C !== n.length)
                    throw new v;
                return u
            }
            getNumDataCodewords() {
                return this.numDataCodewords
            }
            getCodewords() {
                return this.codewords
            }
        }
        class ua {
            constructor(n) {
                this.bytes = n,
                this.byteOffset = 0,
                this.bitOffset = 0
            }
            getBitOffset() {
                return this.bitOffset
            }
            getByteOffset() {
                return this.byteOffset
            }
            readBits(n) {
                if (n < 1 || n > 32 || n > this.available())
                    throw new v("" + n);
                let r = 0
                  , s = this.bitOffset
                  , o = this.byteOffset;
                const a = this.bytes;
                if (s > 0) {
                    const u = 8 - s
                      , d = n < u ? n : u
                      , h = u - d
                      , p = 255 >> 8 - d << h;
                    r = (a[o] & p) >> h,
                    n -= d,
                    s += d,
                    s === 8 && (s = 0,
                    o++)
                }
                if (n > 0) {
                    for (; n >= 8; )
                        r = r << 8 | a[o] & 255,
                        o++,
                        n -= 8;
                    if (n > 0) {
                        const u = 8 - n
                          , d = 255 >> u << u;
                        r = r << n | (a[o] & d) >> u,
                        s += n
                    }
                }
                return this.bitOffset = s,
                this.byteOffset = o,
                r
            }
            available() {
                return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset
            }
        }
        var pt;
        (function(E) {
            E[E.PAD_ENCODE = 0] = "PAD_ENCODE",
            E[E.ASCII_ENCODE = 1] = "ASCII_ENCODE",
            E[E.C40_ENCODE = 2] = "C40_ENCODE",
            E[E.TEXT_ENCODE = 3] = "TEXT_ENCODE",
            E[E.ANSIX12_ENCODE = 4] = "ANSIX12_ENCODE",
            E[E.EDIFACT_ENCODE = 5] = "EDIFACT_ENCODE",
            E[E.BASE256_ENCODE = 6] = "BASE256_ENCODE"
        }
        )(pt || (pt = {}));
        class ar {
            static decode(n) {
                const r = new ua(n)
                  , s = new Ie
                  , o = new Ie
                  , a = new Array;
                let u = pt.ASCII_ENCODE;
                do
                    if (u === pt.ASCII_ENCODE)
                        u = this.decodeAsciiSegment(r, s, o);
                    else {
                        switch (u) {
                        case pt.C40_ENCODE:
                            this.decodeC40Segment(r, s);
                            break;
                        case pt.TEXT_ENCODE:
                            this.decodeTextSegment(r, s);
                            break;
                        case pt.ANSIX12_ENCODE:
                            this.decodeAnsiX12Segment(r, s);
                            break;
                        case pt.EDIFACT_ENCODE:
                            this.decodeEdifactSegment(r, s);
                            break;
                        case pt.BASE256_ENCODE:
                            this.decodeBase256Segment(r, s, a);
                            break;
                        default:
                            throw new F
                        }
                        u = pt.ASCII_ENCODE
                    }
                while (u !== pt.PAD_ENCODE && r.available() > 0);
                return o.length() > 0 && s.append(o.toString()),
                new Ji(n,s.toString(),a.length === 0 ? null : a,null)
            }
            static decodeAsciiSegment(n, r, s) {
                let o = !1;
                do {
                    let a = n.readBits(8);
                    if (a === 0)
                        throw new F;
                    if (a <= 128)
                        return o && (a += 128),
                        r.append(String.fromCharCode(a - 1)),
                        pt.ASCII_ENCODE;
                    if (a === 129)
                        return pt.PAD_ENCODE;
                    if (a <= 229) {
                        const u = a - 130;
                        u < 10 && r.append("0"),
                        r.append("" + u)
                    } else
                        switch (a) {
                        case 230:
                            return pt.C40_ENCODE;
                        case 231:
                            return pt.BASE256_ENCODE;
                        case 232:
                            r.append("");
                            break;
                        case 233:
                        case 234:
                            break;
                        case 235:
                            o = !0;
                            break;
                        case 236:
                            r.append("[)>05"),
                            s.insert(0, "");
                            break;
                        case 237:
                            r.append("[)>06"),
                            s.insert(0, "");
                            break;
                        case 238:
                            return pt.ANSIX12_ENCODE;
                        case 239:
                            return pt.TEXT_ENCODE;
                        case 240:
                            return pt.EDIFACT_ENCODE;
                        case 241:
                            break;
                        default:
                            if (a !== 254 || n.available() !== 0)
                                throw new F;
                            break
                        }
                } while (n.available() > 0);
                return pt.ASCII_ENCODE
            }
            static decodeC40Segment(n, r) {
                let s = !1;
                const o = [];
                let a = 0;
                do {
                    if (n.available() === 8)
                        return;
                    const u = n.readBits(8);
                    if (u === 254)
                        return;
                    this.parseTwoBytes(u, n.readBits(8), o);
                    for (let d = 0; d < 3; d++) {
                        const h = o[d];
                        switch (a) {
                        case 0:
                            if (h < 3)
                                a = h + 1;
                            else if (h < this.C40_BASIC_SET_CHARS.length) {
                                const p = this.C40_BASIC_SET_CHARS[h];
                                s ? (r.append(String.fromCharCode(p.charCodeAt(0) + 128)),
                                s = !1) : r.append(p)
                            } else
                                throw new F;
                            break;
                        case 1:
                            s ? (r.append(String.fromCharCode(h + 128)),
                            s = !1) : r.append(String.fromCharCode(h)),
                            a = 0;
                            break;
                        case 2:
                            if (h < this.C40_SHIFT2_SET_CHARS.length) {
                                const p = this.C40_SHIFT2_SET_CHARS[h];
                                s ? (r.append(String.fromCharCode(p.charCodeAt(0) + 128)),
                                s = !1) : r.append(p)
                            } else
                                switch (h) {
                                case 27:
                                    r.append("");
                                    break;
                                case 30:
                                    s = !0;
                                    break;
                                default:
                                    throw new F
                                }
                            a = 0;
                            break;
                        case 3:
                            s ? (r.append(String.fromCharCode(h + 224)),
                            s = !1) : r.append(String.fromCharCode(h + 96)),
                            a = 0;
                            break;
                        default:
                            throw new F
                        }
                    }
                } while (n.available() > 0)
            }
            static decodeTextSegment(n, r) {
                let s = !1
                  , o = []
                  , a = 0;
                do {
                    if (n.available() === 8)
                        return;
                    const u = n.readBits(8);
                    if (u === 254)
                        return;
                    this.parseTwoBytes(u, n.readBits(8), o);
                    for (let d = 0; d < 3; d++) {
                        const h = o[d];
                        switch (a) {
                        case 0:
                            if (h < 3)
                                a = h + 1;
                            else if (h < this.TEXT_BASIC_SET_CHARS.length) {
                                const p = this.TEXT_BASIC_SET_CHARS[h];
                                s ? (r.append(String.fromCharCode(p.charCodeAt(0) + 128)),
                                s = !1) : r.append(p)
                            } else
                                throw new F;
                            break;
                        case 1:
                            s ? (r.append(String.fromCharCode(h + 128)),
                            s = !1) : r.append(String.fromCharCode(h)),
                            a = 0;
                            break;
                        case 2:
                            if (h < this.TEXT_SHIFT2_SET_CHARS.length) {
                                const p = this.TEXT_SHIFT2_SET_CHARS[h];
                                s ? (r.append(String.fromCharCode(p.charCodeAt(0) + 128)),
                                s = !1) : r.append(p)
                            } else
                                switch (h) {
                                case 27:
                                    r.append("");
                                    break;
                                case 30:
                                    s = !0;
                                    break;
                                default:
                                    throw new F
                                }
                            a = 0;
                            break;
                        case 3:
                            if (h < this.TEXT_SHIFT3_SET_CHARS.length) {
                                const p = this.TEXT_SHIFT3_SET_CHARS[h];
                                s ? (r.append(String.fromCharCode(p.charCodeAt(0) + 128)),
                                s = !1) : r.append(p),
                                a = 0
                            } else
                                throw new F;
                            break;
                        default:
                            throw new F
                        }
                    }
                } while (n.available() > 0)
            }
            static decodeAnsiX12Segment(n, r) {
                const s = [];
                do {
                    if (n.available() === 8)
                        return;
                    const o = n.readBits(8);
                    if (o === 254)
                        return;
                    this.parseTwoBytes(o, n.readBits(8), s);
                    for (let a = 0; a < 3; a++) {
                        const u = s[a];
                        switch (u) {
                        case 0:
                            r.append("\r");
                            break;
                        case 1:
                            r.append("*");
                            break;
                        case 2:
                            r.append(">");
                            break;
                        case 3:
                            r.append(" ");
                            break;
                        default:
                            if (u < 14)
                                r.append(String.fromCharCode(u + 44));
                            else if (u < 40)
                                r.append(String.fromCharCode(u + 51));
                            else
                                throw new F;
                            break
                        }
                    }
                } while (n.available() > 0)
            }
            static parseTwoBytes(n, r, s) {
                let o = (n << 8) + r - 1
                  , a = Math.floor(o / 1600);
                s[0] = a,
                o -= a * 1600,
                a = Math.floor(o / 40),
                s[1] = a,
                s[2] = o - a * 40
            }
            static decodeEdifactSegment(n, r) {
                do {
                    if (n.available() <= 16)
                        return;
                    for (let s = 0; s < 4; s++) {
                        let o = n.readBits(6);
                        if (o === 31) {
                            const a = 8 - n.getBitOffset();
                            a !== 8 && n.readBits(a);
                            return
                        }
                        o & 32 || (o |= 64),
                        r.append(String.fromCharCode(o))
                    }
                } while (n.available() > 0)
            }
            static decodeBase256Segment(n, r, s) {
                let o = 1 + n.getByteOffset();
                const a = this.unrandomize255State(n.readBits(8), o++);
                let u;
                if (a === 0 ? u = n.available() / 8 | 0 : a < 250 ? u = a : u = 250 * (a - 249) + this.unrandomize255State(n.readBits(8), o++),
                u < 0)
                    throw new F;
                const d = new Uint8Array(u);
                for (let h = 0; h < u; h++) {
                    if (n.available() < 8)
                        throw new F;
                    d[h] = this.unrandomize255State(n.readBits(8), o++)
                }
                s.push(d);
                try {
                    r.append(Ue.decode(d, fe.ISO88591))
                } catch (h) {
                    throw new kn("Platform does not support required encoding: " + h.message)
                }
            }
            static unrandomize255State(n, r) {
                const s = 149 * r % 255 + 1
                  , o = n - s;
                return o >= 0 ? o : o + 256
            }
        }
        ar.C40_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        ar.C40_SHIFT2_SET_CHARS = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_"],
        ar.TEXT_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        ar.TEXT_SHIFT2_SET_CHARS = ar.C40_SHIFT2_SET_CHARS,
        ar.TEXT_SHIFT3_SET_CHARS = ["`", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "{", "|", "}", "~", ""];
        class C2 {
            constructor() {
                this.rsDecoder = new es(Oe.DATA_MATRIX_FIELD_256)
            }
            decode(n) {
                const r = new la(n)
                  , s = r.getVersion()
                  , o = r.readCodewords()
                  , a = aa.getDataBlocks(o, s);
                let u = 0;
                for (let p of a)
                    u += p.getNumDataCodewords();
                const d = new Uint8Array(u)
                  , h = a.length;
                for (let p = 0; p < h; p++) {
                    const w = a[p]
                      , C = w.getCodewords()
                      , A = w.getNumDataCodewords();
                    this.correctErrors(C, A);
                    for (let T = 0; T < A; T++)
                        d[T * h + p] = C[T]
                }
                return ar.decode(d)
            }
            correctErrors(n, r) {
                const s = new Int32Array(n);
                try {
                    this.rsDecoder.decode(s, n.length - r)
                } catch {
                    throw new B
                }
                for (let o = 0; o < r; o++)
                    n[o] = s[o]
            }
        }
        class at {
            constructor(n) {
                this.image = n,
                this.rectangleDetector = new Xn(this.image)
            }
            detect() {
                const n = this.rectangleDetector.detect();
                let r = this.detectSolid1(n);
                if (r = this.detectSolid2(r),
                r[3] = this.correctTopRight(r),
                !r[3])
                    throw new j;
                r = this.shiftToModuleCenter(r);
                const s = r[0]
                  , o = r[1]
                  , a = r[2]
                  , u = r[3];
                let d = this.transitionsBetween(s, u) + 1
                  , h = this.transitionsBetween(a, u) + 1;
                (d & 1) === 1 && (d += 1),
                (h & 1) === 1 && (h += 1),
                4 * d < 7 * h && 4 * h < 7 * d && (d = h = Math.max(d, h));
                let p = at.sampleGrid(this.image, s, o, a, u, d, h);
                return new co(p,[s, o, a, u])
            }
            static shiftPoint(n, r, s) {
                let o = (r.getX() - n.getX()) / (s + 1)
                  , a = (r.getY() - n.getY()) / (s + 1);
                return new le(n.getX() + o,n.getY() + a)
            }
            static moveAway(n, r, s) {
                let o = n.getX()
                  , a = n.getY();
                return o < r ? o -= 1 : o += 1,
                a < s ? a -= 1 : a += 1,
                new le(o,a)
            }
            detectSolid1(n) {
                let r = n[0]
                  , s = n[1]
                  , o = n[3]
                  , a = n[2]
                  , u = this.transitionsBetween(r, s)
                  , d = this.transitionsBetween(s, o)
                  , h = this.transitionsBetween(o, a)
                  , p = this.transitionsBetween(a, r)
                  , w = u
                  , C = [a, r, s, o];
                return w > d && (w = d,
                C[0] = r,
                C[1] = s,
                C[2] = o,
                C[3] = a),
                w > h && (w = h,
                C[0] = s,
                C[1] = o,
                C[2] = a,
                C[3] = r),
                w > p && (C[0] = o,
                C[1] = a,
                C[2] = r,
                C[3] = s),
                C
            }
            detectSolid2(n) {
                let r = n[0]
                  , s = n[1]
                  , o = n[2]
                  , a = n[3]
                  , u = this.transitionsBetween(r, a)
                  , d = at.shiftPoint(s, o, (u + 1) * 4)
                  , h = at.shiftPoint(o, s, (u + 1) * 4)
                  , p = this.transitionsBetween(d, r)
                  , w = this.transitionsBetween(h, a);
                return p < w ? (n[0] = r,
                n[1] = s,
                n[2] = o,
                n[3] = a) : (n[0] = s,
                n[1] = o,
                n[2] = a,
                n[3] = r),
                n
            }
            correctTopRight(n) {
                let r = n[0]
                  , s = n[1]
                  , o = n[2]
                  , a = n[3]
                  , u = this.transitionsBetween(r, a)
                  , d = this.transitionsBetween(s, a)
                  , h = at.shiftPoint(r, s, (d + 1) * 4)
                  , p = at.shiftPoint(o, s, (u + 1) * 4);
                u = this.transitionsBetween(h, a),
                d = this.transitionsBetween(p, a);
                let w = new le(a.getX() + (o.getX() - s.getX()) / (u + 1),a.getY() + (o.getY() - s.getY()) / (u + 1))
                  , C = new le(a.getX() + (r.getX() - s.getX()) / (d + 1),a.getY() + (r.getY() - s.getY()) / (d + 1));
                if (!this.isValid(w))
                    return this.isValid(C) ? C : null;
                if (!this.isValid(C))
                    return w;
                let A = this.transitionsBetween(h, w) + this.transitionsBetween(p, w)
                  , T = this.transitionsBetween(h, C) + this.transitionsBetween(p, C);
                return A > T ? w : C
            }
            shiftToModuleCenter(n) {
                let r = n[0]
                  , s = n[1]
                  , o = n[2]
                  , a = n[3]
                  , u = this.transitionsBetween(r, a) + 1
                  , d = this.transitionsBetween(o, a) + 1
                  , h = at.shiftPoint(r, s, d * 4)
                  , p = at.shiftPoint(o, s, u * 4);
                u = this.transitionsBetween(h, a) + 1,
                d = this.transitionsBetween(p, a) + 1,
                (u & 1) === 1 && (u += 1),
                (d & 1) === 1 && (d += 1);
                let w = (r.getX() + s.getX() + o.getX() + a.getX()) / 4
                  , C = (r.getY() + s.getY() + o.getY() + a.getY()) / 4;
                r = at.moveAway(r, w, C),
                s = at.moveAway(s, w, C),
                o = at.moveAway(o, w, C),
                a = at.moveAway(a, w, C);
                let A, T;
                return h = at.shiftPoint(r, s, d * 4),
                h = at.shiftPoint(h, a, u * 4),
                A = at.shiftPoint(s, r, d * 4),
                A = at.shiftPoint(A, o, u * 4),
                p = at.shiftPoint(o, a, d * 4),
                p = at.shiftPoint(p, s, u * 4),
                T = at.shiftPoint(a, o, d * 4),
                T = at.shiftPoint(T, r, u * 4),
                [h, A, p, T]
            }
            isValid(n) {
                return n.getX() >= 0 && n.getX() < this.image.getWidth() && n.getY() > 0 && n.getY() < this.image.getHeight()
            }
            static sampleGrid(n, r, s, o, a, u, d) {
                return or.getInstance().sampleGrid(n, u, d, .5, .5, u - .5, .5, u - .5, d - .5, .5, d - .5, r.getX(), r.getY(), a.getX(), a.getY(), o.getX(), o.getY(), s.getX(), s.getY())
            }
            transitionsBetween(n, r) {
                let s = Math.trunc(n.getX())
                  , o = Math.trunc(n.getY())
                  , a = Math.trunc(r.getX())
                  , u = Math.trunc(r.getY())
                  , d = Math.abs(u - o) > Math.abs(a - s);
                if (d) {
                    let b = s;
                    s = o,
                    o = b,
                    b = a,
                    a = u,
                    u = b
                }
                let h = Math.abs(a - s)
                  , p = Math.abs(u - o)
                  , w = -h / 2
                  , C = o < u ? 1 : -1
                  , A = s < a ? 1 : -1
                  , T = 0
                  , R = this.image.get(d ? o : s, d ? s : o);
                for (let b = s, P = o; b !== a; b += A) {
                    let z = this.image.get(d ? P : b, d ? b : P);
                    if (z !== R && (T++,
                    R = z),
                    w += p,
                    w > 0) {
                        if (P === u)
                            break;
                        P += C,
                        w -= h
                    }
                }
                return T
            }
        }
        class ur {
            constructor() {
                this.decoder = new C2
            }
            decode(n, r=null) {
                let s, o;
                if (r != null && r.has(Z.PURE_BARCODE)) {
                    const p = ur.extractPureBits(n.getBlackMatrix());
                    s = this.decoder.decode(p),
                    o = ur.NO_POINTS
                } else {
                    const p = new at(n.getBlackMatrix()).detect();
                    s = this.decoder.decode(p.getBits()),
                    o = p.getPoints()
                }
                const a = s.getRawBytes()
                  , u = new Qe(s.getText(),a,8 * a.length,o,ae.DATA_MATRIX,M.currentTimeMillis())
                  , d = s.getByteSegments();
                d != null && u.putMetadata(yt.BYTE_SEGMENTS, d);
                const h = s.getECLevel();
                return h != null && u.putMetadata(yt.ERROR_CORRECTION_LEVEL, h),
                u
            }
            reset() {}
            static extractPureBits(n) {
                const r = n.getTopLeftOnBit()
                  , s = n.getBottomRightOnBit();
                if (r == null || s == null)
                    throw new j;
                const o = this.moduleSize(r, n);
                let a = r[1];
                const u = s[1];
                let d = r[0];
                const p = (s[0] - d + 1) / o
                  , w = (u - a + 1) / o;
                if (p <= 0 || w <= 0)
                    throw new j;
                const C = o / 2;
                a += C,
                d += C;
                const A = new lt(p,w);
                for (let T = 0; T < w; T++) {
                    const R = a + T * o;
                    for (let b = 0; b < p; b++)
                        n.get(d + b * o, R) && A.set(b, T)
                }
                return A
            }
            static moduleSize(n, r) {
                const s = r.getWidth();
                let o = n[0];
                const a = n[1];
                for (; o < s && r.get(o, a); )
                    o++;
                if (o === s)
                    throw new j;
                const u = o - n[0];
                if (u === 0)
                    throw new j;
                return u
            }
        }
        ur.NO_POINTS = [];
        class A2 extends cn {
            constructor(n=500) {
                super(new ur, n)
            }
        }
        var di;
        (function(E) {
            E[E.L = 0] = "L",
            E[E.M = 1] = "M",
            E[E.Q = 2] = "Q",
            E[E.H = 3] = "H"
        }
        )(di || (di = {}));
        class ze {
            constructor(n, r, s) {
                this.value = n,
                this.stringValue = r,
                this.bits = s,
                ze.FOR_BITS.set(s, this),
                ze.FOR_VALUE.set(n, this)
            }
            getValue() {
                return this.value
            }
            getBits() {
                return this.bits
            }
            static fromString(n) {
                switch (n) {
                case "L":
                    return ze.L;
                case "M":
                    return ze.M;
                case "Q":
                    return ze.Q;
                case "H":
                    return ze.H;
                default:
                    throw new S(n + "not available")
                }
            }
            toString() {
                return this.stringValue
            }
            equals(n) {
                if (!(n instanceof ze))
                    return !1;
                const r = n;
                return this.value === r.value
            }
            static forBits(n) {
                if (n < 0 || n >= ze.FOR_BITS.size)
                    throw new v;
                return ze.FOR_BITS.get(n)
            }
        }
        ze.FOR_BITS = new Map,
        ze.FOR_VALUE = new Map,
        ze.L = new ze(di.L,"L",1),
        ze.M = new ze(di.M,"M",0),
        ze.Q = new ze(di.Q,"Q",3),
        ze.H = new ze(di.H,"H",2);
        class Dt {
            constructor(n) {
                this.errorCorrectionLevel = ze.forBits(n >> 3 & 3),
                this.dataMask = n & 7
            }
            static numBitsDiffering(n, r) {
                return N.bitCount(n ^ r)
            }
            static decodeFormatInformation(n, r) {
                const s = Dt.doDecodeFormatInformation(n, r);
                return s !== null ? s : Dt.doDecodeFormatInformation(n ^ Dt.FORMAT_INFO_MASK_QR, r ^ Dt.FORMAT_INFO_MASK_QR)
            }
            static doDecodeFormatInformation(n, r) {
                let s = Number.MAX_SAFE_INTEGER
                  , o = 0;
                for (const a of Dt.FORMAT_INFO_DECODE_LOOKUP) {
                    const u = a[0];
                    if (u === n || u === r)
                        return new Dt(a[1]);
                    let d = Dt.numBitsDiffering(n, u);
                    d < s && (o = a[1],
                    s = d),
                    n !== r && (d = Dt.numBitsDiffering(r, u),
                    d < s && (o = a[1],
                    s = d))
                }
                return s <= 3 ? new Dt(o) : null
            }
            getErrorCorrectionLevel() {
                return this.errorCorrectionLevel
            }
            getDataMask() {
                return this.dataMask
            }
            hashCode() {
                return this.errorCorrectionLevel.getBits() << 3 | this.dataMask
            }
            equals(n) {
                if (!(n instanceof Dt))
                    return !1;
                const r = n;
                return this.errorCorrectionLevel === r.errorCorrectionLevel && this.dataMask === r.dataMask
            }
        }
        Dt.FORMAT_INFO_MASK_QR = 21522,
        Dt.FORMAT_INFO_DECODE_LOOKUP = [Int32Array.from([21522, 0]), Int32Array.from([20773, 1]), Int32Array.from([24188, 2]), Int32Array.from([23371, 3]), Int32Array.from([17913, 4]), Int32Array.from([16590, 5]), Int32Array.from([20375, 6]), Int32Array.from([19104, 7]), Int32Array.from([30660, 8]), Int32Array.from([29427, 9]), Int32Array.from([32170, 10]), Int32Array.from([30877, 11]), Int32Array.from([26159, 12]), Int32Array.from([25368, 13]), Int32Array.from([27713, 14]), Int32Array.from([26998, 15]), Int32Array.from([5769, 16]), Int32Array.from([5054, 17]), Int32Array.from([7399, 18]), Int32Array.from([6608, 19]), Int32Array.from([1890, 20]), Int32Array.from([597, 21]), Int32Array.from([3340, 22]), Int32Array.from([2107, 23]), Int32Array.from([13663, 24]), Int32Array.from([12392, 25]), Int32Array.from([16177, 26]), Int32Array.from([14854, 27]), Int32Array.from([9396, 28]), Int32Array.from([8579, 29]), Int32Array.from([11994, 30]), Int32Array.from([11245, 31])];
        class L {
            constructor(n, ...r) {
                this.ecCodewordsPerBlock = n,
                this.ecBlocks = r
            }
            getECCodewordsPerBlock() {
                return this.ecCodewordsPerBlock
            }
            getNumBlocks() {
                let n = 0;
                const r = this.ecBlocks;
                for (const s of r)
                    n += s.getCount();
                return n
            }
            getTotalECCodewords() {
                return this.ecCodewordsPerBlock * this.getNumBlocks()
            }
            getECBlocks() {
                return this.ecBlocks
            }
        }
        class I {
            constructor(n, r) {
                this.count = n,
                this.dataCodewords = r
            }
            getCount() {
                return this.count
            }
            getDataCodewords() {
                return this.dataCodewords
            }
        }
        class ue {
            constructor(n, r, ...s) {
                this.versionNumber = n,
                this.alignmentPatternCenters = r,
                this.ecBlocks = s;
                let o = 0;
                const a = s[0].getECCodewordsPerBlock()
                  , u = s[0].getECBlocks();
                for (const d of u)
                    o += d.getCount() * (d.getDataCodewords() + a);
                this.totalCodewords = o
            }
            getVersionNumber() {
                return this.versionNumber
            }
            getAlignmentPatternCenters() {
                return this.alignmentPatternCenters
            }
            getTotalCodewords() {
                return this.totalCodewords
            }
            getDimensionForVersion() {
                return 17 + 4 * this.versionNumber
            }
            getECBlocksForLevel(n) {
                return this.ecBlocks[n.getValue()]
            }
            static getProvisionalVersionForDimension(n) {
                if (n % 4 !== 1)
                    throw new F;
                try {
                    return this.getVersionForNumber((n - 17) / 4)
                } catch {
                    throw new F
                }
            }
            static getVersionForNumber(n) {
                if (n < 1 || n > 40)
                    throw new v;
                return ue.VERSIONS[n - 1]
            }
            static decodeVersionInformation(n) {
                let r = Number.MAX_SAFE_INTEGER
                  , s = 0;
                for (let o = 0; o < ue.VERSION_DECODE_INFO.length; o++) {
                    const a = ue.VERSION_DECODE_INFO[o];
                    if (a === n)
                        return ue.getVersionForNumber(o + 7);
                    const u = Dt.numBitsDiffering(n, a);
                    u < r && (s = o + 7,
                    r = u)
                }
                return r <= 3 ? ue.getVersionForNumber(s) : null
            }
            buildFunctionPattern() {
                const n = this.getDimensionForVersion()
                  , r = new lt(n);
                r.setRegion(0, 0, 9, 9),
                r.setRegion(n - 8, 0, 8, 9),
                r.setRegion(0, n - 8, 9, 8);
                const s = this.alignmentPatternCenters.length;
                for (let o = 0; o < s; o++) {
                    const a = this.alignmentPatternCenters[o] - 2;
                    for (let u = 0; u < s; u++)
                        o === 0 && (u === 0 || u === s - 1) || o === s - 1 && u === 0 || r.setRegion(this.alignmentPatternCenters[u] - 2, a, 5, 5)
                }
                return r.setRegion(6, 9, 1, n - 17),
                r.setRegion(9, 6, n - 17, 1),
                this.versionNumber > 6 && (r.setRegion(n - 11, 0, 3, 6),
                r.setRegion(0, n - 11, 6, 3)),
                r
            }
            toString() {
                return "" + this.versionNumber
            }
        }
        ue.VERSION_DECODE_INFO = Int32Array.from([31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017]),
        ue.VERSIONS = [new ue(1,new Int32Array(0),new L(7,new I(1,19)),new L(10,new I(1,16)),new L(13,new I(1,13)),new L(17,new I(1,9))), new ue(2,Int32Array.from([6, 18]),new L(10,new I(1,34)),new L(16,new I(1,28)),new L(22,new I(1,22)),new L(28,new I(1,16))), new ue(3,Int32Array.from([6, 22]),new L(15,new I(1,55)),new L(26,new I(1,44)),new L(18,new I(2,17)),new L(22,new I(2,13))), new ue(4,Int32Array.from([6, 26]),new L(20,new I(1,80)),new L(18,new I(2,32)),new L(26,new I(2,24)),new L(16,new I(4,9))), new ue(5,Int32Array.from([6, 30]),new L(26,new I(1,108)),new L(24,new I(2,43)),new L(18,new I(2,15),new I(2,16)),new L(22,new I(2,11),new I(2,12))), new ue(6,Int32Array.from([6, 34]),new L(18,new I(2,68)),new L(16,new I(4,27)),new L(24,new I(4,19)),new L(28,new I(4,15))), new ue(7,Int32Array.from([6, 22, 38]),new L(20,new I(2,78)),new L(18,new I(4,31)),new L(18,new I(2,14),new I(4,15)),new L(26,new I(4,13),new I(1,14))), new ue(8,Int32Array.from([6, 24, 42]),new L(24,new I(2,97)),new L(22,new I(2,38),new I(2,39)),new L(22,new I(4,18),new I(2,19)),new L(26,new I(4,14),new I(2,15))), new ue(9,Int32Array.from([6, 26, 46]),new L(30,new I(2,116)),new L(22,new I(3,36),new I(2,37)),new L(20,new I(4,16),new I(4,17)),new L(24,new I(4,12),new I(4,13))), new ue(10,Int32Array.from([6, 28, 50]),new L(18,new I(2,68),new I(2,69)),new L(26,new I(4,43),new I(1,44)),new L(24,new I(6,19),new I(2,20)),new L(28,new I(6,15),new I(2,16))), new ue(11,Int32Array.from([6, 30, 54]),new L(20,new I(4,81)),new L(30,new I(1,50),new I(4,51)),new L(28,new I(4,22),new I(4,23)),new L(24,new I(3,12),new I(8,13))), new ue(12,Int32Array.from([6, 32, 58]),new L(24,new I(2,92),new I(2,93)),new L(22,new I(6,36),new I(2,37)),new L(26,new I(4,20),new I(6,21)),new L(28,new I(7,14),new I(4,15))), new ue(13,Int32Array.from([6, 34, 62]),new L(26,new I(4,107)),new L(22,new I(8,37),new I(1,38)),new L(24,new I(8,20),new I(4,21)),new L(22,new I(12,11),new I(4,12))), new ue(14,Int32Array.from([6, 26, 46, 66]),new L(30,new I(3,115),new I(1,116)),new L(24,new I(4,40),new I(5,41)),new L(20,new I(11,16),new I(5,17)),new L(24,new I(11,12),new I(5,13))), new ue(15,Int32Array.from([6, 26, 48, 70]),new L(22,new I(5,87),new I(1,88)),new L(24,new I(5,41),new I(5,42)),new L(30,new I(5,24),new I(7,25)),new L(24,new I(11,12),new I(7,13))), new ue(16,Int32Array.from([6, 26, 50, 74]),new L(24,new I(5,98),new I(1,99)),new L(28,new I(7,45),new I(3,46)),new L(24,new I(15,19),new I(2,20)),new L(30,new I(3,15),new I(13,16))), new ue(17,Int32Array.from([6, 30, 54, 78]),new L(28,new I(1,107),new I(5,108)),new L(28,new I(10,46),new I(1,47)),new L(28,new I(1,22),new I(15,23)),new L(28,new I(2,14),new I(17,15))), new ue(18,Int32Array.from([6, 30, 56, 82]),new L(30,new I(5,120),new I(1,121)),new L(26,new I(9,43),new I(4,44)),new L(28,new I(17,22),new I(1,23)),new L(28,new I(2,14),new I(19,15))), new ue(19,Int32Array.from([6, 30, 58, 86]),new L(28,new I(3,113),new I(4,114)),new L(26,new I(3,44),new I(11,45)),new L(26,new I(17,21),new I(4,22)),new L(26,new I(9,13),new I(16,14))), new ue(20,Int32Array.from([6, 34, 62, 90]),new L(28,new I(3,107),new I(5,108)),new L(26,new I(3,41),new I(13,42)),new L(30,new I(15,24),new I(5,25)),new L(28,new I(15,15),new I(10,16))), new ue(21,Int32Array.from([6, 28, 50, 72, 94]),new L(28,new I(4,116),new I(4,117)),new L(26,new I(17,42)),new L(28,new I(17,22),new I(6,23)),new L(30,new I(19,16),new I(6,17))), new ue(22,Int32Array.from([6, 26, 50, 74, 98]),new L(28,new I(2,111),new I(7,112)),new L(28,new I(17,46)),new L(30,new I(7,24),new I(16,25)),new L(24,new I(34,13))), new ue(23,Int32Array.from([6, 30, 54, 78, 102]),new L(30,new I(4,121),new I(5,122)),new L(28,new I(4,47),new I(14,48)),new L(30,new I(11,24),new I(14,25)),new L(30,new I(16,15),new I(14,16))), new ue(24,Int32Array.from([6, 28, 54, 80, 106]),new L(30,new I(6,117),new I(4,118)),new L(28,new I(6,45),new I(14,46)),new L(30,new I(11,24),new I(16,25)),new L(30,new I(30,16),new I(2,17))), new ue(25,Int32Array.from([6, 32, 58, 84, 110]),new L(26,new I(8,106),new I(4,107)),new L(28,new I(8,47),new I(13,48)),new L(30,new I(7,24),new I(22,25)),new L(30,new I(22,15),new I(13,16))), new ue(26,Int32Array.from([6, 30, 58, 86, 114]),new L(28,new I(10,114),new I(2,115)),new L(28,new I(19,46),new I(4,47)),new L(28,new I(28,22),new I(6,23)),new L(30,new I(33,16),new I(4,17))), new ue(27,Int32Array.from([6, 34, 62, 90, 118]),new L(30,new I(8,122),new I(4,123)),new L(28,new I(22,45),new I(3,46)),new L(30,new I(8,23),new I(26,24)),new L(30,new I(12,15),new I(28,16))), new ue(28,Int32Array.from([6, 26, 50, 74, 98, 122]),new L(30,new I(3,117),new I(10,118)),new L(28,new I(3,45),new I(23,46)),new L(30,new I(4,24),new I(31,25)),new L(30,new I(11,15),new I(31,16))), new ue(29,Int32Array.from([6, 30, 54, 78, 102, 126]),new L(30,new I(7,116),new I(7,117)),new L(28,new I(21,45),new I(7,46)),new L(30,new I(1,23),new I(37,24)),new L(30,new I(19,15),new I(26,16))), new ue(30,Int32Array.from([6, 26, 52, 78, 104, 130]),new L(30,new I(5,115),new I(10,116)),new L(28,new I(19,47),new I(10,48)),new L(30,new I(15,24),new I(25,25)),new L(30,new I(23,15),new I(25,16))), new ue(31,Int32Array.from([6, 30, 56, 82, 108, 134]),new L(30,new I(13,115),new I(3,116)),new L(28,new I(2,46),new I(29,47)),new L(30,new I(42,24),new I(1,25)),new L(30,new I(23,15),new I(28,16))), new ue(32,Int32Array.from([6, 34, 60, 86, 112, 138]),new L(30,new I(17,115)),new L(28,new I(10,46),new I(23,47)),new L(30,new I(10,24),new I(35,25)),new L(30,new I(19,15),new I(35,16))), new ue(33,Int32Array.from([6, 30, 58, 86, 114, 142]),new L(30,new I(17,115),new I(1,116)),new L(28,new I(14,46),new I(21,47)),new L(30,new I(29,24),new I(19,25)),new L(30,new I(11,15),new I(46,16))), new ue(34,Int32Array.from([6, 34, 62, 90, 118, 146]),new L(30,new I(13,115),new I(6,116)),new L(28,new I(14,46),new I(23,47)),new L(30,new I(44,24),new I(7,25)),new L(30,new I(59,16),new I(1,17))), new ue(35,Int32Array.from([6, 30, 54, 78, 102, 126, 150]),new L(30,new I(12,121),new I(7,122)),new L(28,new I(12,47),new I(26,48)),new L(30,new I(39,24),new I(14,25)),new L(30,new I(22,15),new I(41,16))), new ue(36,Int32Array.from([6, 24, 50, 76, 102, 128, 154]),new L(30,new I(6,121),new I(14,122)),new L(28,new I(6,47),new I(34,48)),new L(30,new I(46,24),new I(10,25)),new L(30,new I(2,15),new I(64,16))), new ue(37,Int32Array.from([6, 28, 54, 80, 106, 132, 158]),new L(30,new I(17,122),new I(4,123)),new L(28,new I(29,46),new I(14,47)),new L(30,new I(49,24),new I(10,25)),new L(30,new I(24,15),new I(46,16))), new ue(38,Int32Array.from([6, 32, 58, 84, 110, 136, 162]),new L(30,new I(4,122),new I(18,123)),new L(28,new I(13,46),new I(32,47)),new L(30,new I(48,24),new I(14,25)),new L(30,new I(42,15),new I(32,16))), new ue(39,Int32Array.from([6, 26, 54, 82, 110, 138, 166]),new L(30,new I(20,117),new I(4,118)),new L(28,new I(40,47),new I(7,48)),new L(30,new I(43,24),new I(22,25)),new L(30,new I(10,15),new I(67,16))), new ue(40,Int32Array.from([6, 30, 58, 86, 114, 142, 170]),new L(30,new I(19,118),new I(6,119)),new L(28,new I(18,47),new I(31,48)),new L(30,new I(34,24),new I(34,25)),new L(30,new I(20,15),new I(61,16)))];
        var Et;
        (function(E) {
            E[E.DATA_MASK_000 = 0] = "DATA_MASK_000",
            E[E.DATA_MASK_001 = 1] = "DATA_MASK_001",
            E[E.DATA_MASK_010 = 2] = "DATA_MASK_010",
            E[E.DATA_MASK_011 = 3] = "DATA_MASK_011",
            E[E.DATA_MASK_100 = 4] = "DATA_MASK_100",
            E[E.DATA_MASK_101 = 5] = "DATA_MASK_101",
            E[E.DATA_MASK_110 = 6] = "DATA_MASK_110",
            E[E.DATA_MASK_111 = 7] = "DATA_MASK_111"
        }
        )(Et || (Et = {}));
        class dn {
            constructor(n, r) {
                this.value = n,
                this.isMasked = r
            }
            unmaskBitMatrix(n, r) {
                for (let s = 0; s < r; s++)
                    for (let o = 0; o < r; o++)
                        this.isMasked(s, o) && n.flip(o, s)
            }
        }
        dn.values = new Map([[Et.DATA_MASK_000, new dn(Et.DATA_MASK_000,(E,n)=>(E + n & 1) === 0)], [Et.DATA_MASK_001, new dn(Et.DATA_MASK_001,(E,n)=>(E & 1) === 0)], [Et.DATA_MASK_010, new dn(Et.DATA_MASK_010,(E,n)=>n % 3 === 0)], [Et.DATA_MASK_011, new dn(Et.DATA_MASK_011,(E,n)=>(E + n) % 3 === 0)], [Et.DATA_MASK_100, new dn(Et.DATA_MASK_100,(E,n)=>(Math.floor(E / 2) + Math.floor(n / 3) & 1) === 0)], [Et.DATA_MASK_101, new dn(Et.DATA_MASK_101,(E,n)=>E * n % 6 === 0)], [Et.DATA_MASK_110, new dn(Et.DATA_MASK_110,(E,n)=>E * n % 6 < 3)], [Et.DATA_MASK_111, new dn(Et.DATA_MASK_111,(E,n)=>(E + n + E * n % 3 & 1) === 0)]]);
        class S2 {
            constructor(n) {
                const r = n.getHeight();
                if (r < 21 || (r & 3) !== 1)
                    throw new F;
                this.bitMatrix = n
            }
            readFormatInformation() {
                if (this.parsedFormatInfo !== null && this.parsedFormatInfo !== void 0)
                    return this.parsedFormatInfo;
                let n = 0;
                for (let a = 0; a < 6; a++)
                    n = this.copyBit(a, 8, n);
                n = this.copyBit(7, 8, n),
                n = this.copyBit(8, 8, n),
                n = this.copyBit(8, 7, n);
                for (let a = 5; a >= 0; a--)
                    n = this.copyBit(8, a, n);
                const r = this.bitMatrix.getHeight();
                let s = 0;
                const o = r - 7;
                for (let a = r - 1; a >= o; a--)
                    s = this.copyBit(8, a, s);
                for (let a = r - 8; a < r; a++)
                    s = this.copyBit(a, 8, s);
                if (this.parsedFormatInfo = Dt.decodeFormatInformation(n, s),
                this.parsedFormatInfo !== null)
                    return this.parsedFormatInfo;
                throw new F
            }
            readVersion() {
                if (this.parsedVersion !== null && this.parsedVersion !== void 0)
                    return this.parsedVersion;
                const n = this.bitMatrix.getHeight()
                  , r = Math.floor((n - 17) / 4);
                if (r <= 6)
                    return ue.getVersionForNumber(r);
                let s = 0;
                const o = n - 11;
                for (let u = 5; u >= 0; u--)
                    for (let d = n - 9; d >= o; d--)
                        s = this.copyBit(d, u, s);
                let a = ue.decodeVersionInformation(s);
                if (a !== null && a.getDimensionForVersion() === n)
                    return this.parsedVersion = a,
                    a;
                s = 0;
                for (let u = 5; u >= 0; u--)
                    for (let d = n - 9; d >= o; d--)
                        s = this.copyBit(u, d, s);
                if (a = ue.decodeVersionInformation(s),
                a !== null && a.getDimensionForVersion() === n)
                    return this.parsedVersion = a,
                    a;
                throw new F
            }
            copyBit(n, r, s) {
                return (this.isMirror ? this.bitMatrix.get(r, n) : this.bitMatrix.get(n, r)) ? s << 1 | 1 : s << 1
            }
            readCodewords() {
                const n = this.readFormatInformation()
                  , r = this.readVersion()
                  , s = dn.values.get(n.getDataMask())
                  , o = this.bitMatrix.getHeight();
                s.unmaskBitMatrix(this.bitMatrix, o);
                const a = r.buildFunctionPattern();
                let u = !0;
                const d = new Uint8Array(r.getTotalCodewords());
                let h = 0
                  , p = 0
                  , w = 0;
                for (let C = o - 1; C > 0; C -= 2) {
                    C === 6 && C--;
                    for (let A = 0; A < o; A++) {
                        const T = u ? o - 1 - A : A;
                        for (let R = 0; R < 2; R++)
                            a.get(C - R, T) || (w++,
                            p <<= 1,
                            this.bitMatrix.get(C - R, T) && (p |= 1),
                            w === 8 && (d[h++] = p,
                            w = 0,
                            p = 0))
                    }
                    u = !u
                }
                if (h !== r.getTotalCodewords())
                    throw new F;
                return d
            }
            remask() {
                if (this.parsedFormatInfo === null)
                    return;
                const n = dn.values[this.parsedFormatInfo.getDataMask()]
                  , r = this.bitMatrix.getHeight();
                n.unmaskBitMatrix(this.bitMatrix, r)
            }
            setMirror(n) {
                this.parsedVersion = null,
                this.parsedFormatInfo = null,
                this.isMirror = n
            }
            mirror() {
                const n = this.bitMatrix;
                for (let r = 0, s = n.getWidth(); r < s; r++)
                    for (let o = r + 1, a = n.getHeight(); o < a; o++)
                        n.get(r, o) !== n.get(o, r) && (n.flip(o, r),
                        n.flip(r, o))
            }
        }
        class ca {
            constructor(n, r) {
                this.numDataCodewords = n,
                this.codewords = r
            }
            static getDataBlocks(n, r, s) {
                if (n.length !== r.getTotalCodewords())
                    throw new v;
                const o = r.getECBlocksForLevel(s);
                let a = 0;
                const u = o.getECBlocks();
                for (const R of u)
                    a += R.getCount();
                const d = new Array(a);
                let h = 0;
                for (const R of u)
                    for (let b = 0; b < R.getCount(); b++) {
                        const P = R.getDataCodewords()
                          , z = o.getECCodewordsPerBlock() + P;
                        d[h++] = new ca(P,new Uint8Array(z))
                    }
                const p = d[0].codewords.length;
                let w = d.length - 1;
                for (; w >= 0 && d[w].codewords.length !== p; )
                    w--;
                w++;
                const C = p - o.getECCodewordsPerBlock();
                let A = 0;
                for (let R = 0; R < C; R++)
                    for (let b = 0; b < h; b++)
                        d[b].codewords[R] = n[A++];
                for (let R = w; R < h; R++)
                    d[R].codewords[C] = n[A++];
                const T = d[0].codewords.length;
                for (let R = C; R < T; R++)
                    for (let b = 0; b < h; b++) {
                        const P = b < w ? R : R + 1;
                        d[b].codewords[P] = n[A++]
                    }
                return d
            }
            getNumDataCodewords() {
                return this.numDataCodewords
            }
            getCodewords() {
                return this.codewords
            }
        }
        var hn;
        (function(E) {
            E[E.TERMINATOR = 0] = "TERMINATOR",
            E[E.NUMERIC = 1] = "NUMERIC",
            E[E.ALPHANUMERIC = 2] = "ALPHANUMERIC",
            E[E.STRUCTURED_APPEND = 3] = "STRUCTURED_APPEND",
            E[E.BYTE = 4] = "BYTE",
            E[E.ECI = 5] = "ECI",
            E[E.KANJI = 6] = "KANJI",
            E[E.FNC1_FIRST_POSITION = 7] = "FNC1_FIRST_POSITION",
            E[E.FNC1_SECOND_POSITION = 8] = "FNC1_SECOND_POSITION",
            E[E.HANZI = 9] = "HANZI"
        }
        )(hn || (hn = {}));
        class ce {
            constructor(n, r, s, o) {
                this.value = n,
                this.stringValue = r,
                this.characterCountBitsForVersions = s,
                this.bits = o,
                ce.FOR_BITS.set(o, this),
                ce.FOR_VALUE.set(n, this)
            }
            static forBits(n) {
                const r = ce.FOR_BITS.get(n);
                if (r === void 0)
                    throw new v;
                return r
            }
            getCharacterCountBits(n) {
                const r = n.getVersionNumber();
                let s;
                return r <= 9 ? s = 0 : r <= 26 ? s = 1 : s = 2,
                this.characterCountBitsForVersions[s]
            }
            getValue() {
                return this.value
            }
            getBits() {
                return this.bits
            }
            equals(n) {
                if (!(n instanceof ce))
                    return !1;
                const r = n;
                return this.value === r.value
            }
            toString() {
                return this.stringValue
            }
        }
        ce.FOR_BITS = new Map,
        ce.FOR_VALUE = new Map,
        ce.TERMINATOR = new ce(hn.TERMINATOR,"TERMINATOR",Int32Array.from([0, 0, 0]),0),
        ce.NUMERIC = new ce(hn.NUMERIC,"NUMERIC",Int32Array.from([10, 12, 14]),1),
        ce.ALPHANUMERIC = new ce(hn.ALPHANUMERIC,"ALPHANUMERIC",Int32Array.from([9, 11, 13]),2),
        ce.STRUCTURED_APPEND = new ce(hn.STRUCTURED_APPEND,"STRUCTURED_APPEND",Int32Array.from([0, 0, 0]),3),
        ce.BYTE = new ce(hn.BYTE,"BYTE",Int32Array.from([8, 16, 16]),4),
        ce.ECI = new ce(hn.ECI,"ECI",Int32Array.from([0, 0, 0]),7),
        ce.KANJI = new ce(hn.KANJI,"KANJI",Int32Array.from([8, 10, 12]),8),
        ce.FNC1_FIRST_POSITION = new ce(hn.FNC1_FIRST_POSITION,"FNC1_FIRST_POSITION",Int32Array.from([0, 0, 0]),5),
        ce.FNC1_SECOND_POSITION = new ce(hn.FNC1_SECOND_POSITION,"FNC1_SECOND_POSITION",Int32Array.from([0, 0, 0]),9),
        ce.HANZI = new ce(hn.HANZI,"HANZI",Int32Array.from([8, 10, 12]),13);
        class qe {
            static decode(n, r, s, o) {
                const a = new ua(n);
                let u = new Ie;
                const d = new Array;
                let h = -1
                  , p = -1;
                try {
                    let w = null, C = !1, A;
                    do {
                        if (a.available() < 4)
                            A = ce.TERMINATOR;
                        else {
                            const T = a.readBits(4);
                            A = ce.forBits(T)
                        }
                        switch (A) {
                        case ce.TERMINATOR:
                            break;
                        case ce.FNC1_FIRST_POSITION:
                        case ce.FNC1_SECOND_POSITION:
                            C = !0;
                            break;
                        case ce.STRUCTURED_APPEND:
                            if (a.available() < 16)
                                throw new F;
                            h = a.readBits(8),
                            p = a.readBits(8);
                            break;
                        case ce.ECI:
                            const T = qe.parseECIValue(a);
                            if (w = W.getCharacterSetECIByValue(T),
                            w === null)
                                throw new F;
                            break;
                        case ce.HANZI:
                            const R = a.readBits(4)
                              , b = a.readBits(A.getCharacterCountBits(r));
                            R === qe.GB2312_SUBSET && qe.decodeHanziSegment(a, u, b);
                            break;
                        default:
                            const P = a.readBits(A.getCharacterCountBits(r));
                            switch (A) {
                            case ce.NUMERIC:
                                qe.decodeNumericSegment(a, u, P);
                                break;
                            case ce.ALPHANUMERIC:
                                qe.decodeAlphanumericSegment(a, u, P, C);
                                break;
                            case ce.BYTE:
                                qe.decodeByteSegment(a, u, P, w, d, o);
                                break;
                            case ce.KANJI:
                                qe.decodeKanjiSegment(a, u, P);
                                break;
                            default:
                                throw new F
                            }
                            break
                        }
                    } while (A !== ce.TERMINATOR)
                } catch {
                    throw new F
                }
                return new Ji(n,u.toString(),d.length === 0 ? null : d,s === null ? null : s.toString(),h,p)
            }
            static decodeHanziSegment(n, r, s) {
                if (s * 13 > n.available())
                    throw new F;
                const o = new Uint8Array(2 * s);
                let a = 0;
                for (; s > 0; ) {
                    const u = n.readBits(13);
                    let d = u / 96 << 8 & 4294967295 | u % 96;
                    d < 959 ? d += 41377 : d += 42657,
                    o[a] = d >> 8 & 255,
                    o[a + 1] = d & 255,
                    a += 2,
                    s--
                }
                try {
                    r.append(Ue.decode(o, fe.GB2312))
                } catch (u) {
                    throw new F(u)
                }
            }
            static decodeKanjiSegment(n, r, s) {
                if (s * 13 > n.available())
                    throw new F;
                const o = new Uint8Array(2 * s);
                let a = 0;
                for (; s > 0; ) {
                    const u = n.readBits(13);
                    let d = u / 192 << 8 & 4294967295 | u % 192;
                    d < 7936 ? d += 33088 : d += 49472,
                    o[a] = d >> 8,
                    o[a + 1] = d,
                    a += 2,
                    s--
                }
                try {
                    r.append(Ue.decode(o, fe.SHIFT_JIS))
                } catch (u) {
                    throw new F(u)
                }
            }
            static decodeByteSegment(n, r, s, o, a, u) {
                if (8 * s > n.available())
                    throw new F;
                const d = new Uint8Array(s);
                for (let p = 0; p < s; p++)
                    d[p] = n.readBits(8);
                let h;
                o === null ? h = fe.guessEncoding(d, u) : h = o.getName();
                try {
                    r.append(Ue.decode(d, h))
                } catch (p) {
                    throw new F(p)
                }
                a.push(d)
            }
            static toAlphaNumericChar(n) {
                if (n >= qe.ALPHANUMERIC_CHARS.length)
                    throw new F;
                return qe.ALPHANUMERIC_CHARS[n]
            }
            static decodeAlphanumericSegment(n, r, s, o) {
                const a = r.length();
                for (; s > 1; ) {
                    if (n.available() < 11)
                        throw new F;
                    const u = n.readBits(11);
                    r.append(qe.toAlphaNumericChar(Math.floor(u / 45))),
                    r.append(qe.toAlphaNumericChar(u % 45)),
                    s -= 2
                }
                if (s === 1) {
                    if (n.available() < 6)
                        throw new F;
                    r.append(qe.toAlphaNumericChar(n.readBits(6)))
                }
                if (o)
                    for (let u = a; u < r.length(); u++)
                        r.charAt(u) === "%" && (u < r.length() - 1 && r.charAt(u + 1) === "%" ? r.deleteCharAt(u + 1) : r.setCharAt(u, ""))
            }
            static decodeNumericSegment(n, r, s) {
                for (; s >= 3; ) {
                    if (n.available() < 10)
                        throw new F;
                    const o = n.readBits(10);
                    if (o >= 1e3)
                        throw new F;
                    r.append(qe.toAlphaNumericChar(Math.floor(o / 100))),
                    r.append(qe.toAlphaNumericChar(Math.floor(o / 10) % 10)),
                    r.append(qe.toAlphaNumericChar(o % 10)),
                    s -= 3
                }
                if (s === 2) {
                    if (n.available() < 7)
                        throw new F;
                    const o = n.readBits(7);
                    if (o >= 100)
                        throw new F;
                    r.append(qe.toAlphaNumericChar(Math.floor(o / 10))),
                    r.append(qe.toAlphaNumericChar(o % 10))
                } else if (s === 1) {
                    if (n.available() < 4)
                        throw new F;
                    const o = n.readBits(4);
                    if (o >= 10)
                        throw new F;
                    r.append(qe.toAlphaNumericChar(o))
                }
            }
            static parseECIValue(n) {
                const r = n.readBits(8);
                if (!(r & 128))
                    return r & 127;
                if ((r & 192) === 128) {
                    const s = n.readBits(8);
                    return (r & 63) << 8 & 4294967295 | s
                }
                if ((r & 224) === 192) {
                    const s = n.readBits(16);
                    return (r & 31) << 16 & 4294967295 | s
                }
                throw new F
            }
        }
        qe.ALPHANUMERIC_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",
        qe.GB2312_SUBSET = 1;
        class g1 {
            constructor(n) {
                this.mirrored = n
            }
            isMirrored() {
                return this.mirrored
            }
            applyMirroredCorrection(n) {
                if (!this.mirrored || n === null || n.length < 3)
                    return;
                const r = n[0];
                n[0] = n[2],
                n[2] = r
            }
        }
        class v2 {
            constructor() {
                this.rsDecoder = new es(Oe.QR_CODE_FIELD_256)
            }
            decodeBooleanArray(n, r) {
                return this.decodeBitMatrix(lt.parseFromBooleanArray(n), r)
            }
            decodeBitMatrix(n, r) {
                const s = new S2(n);
                let o = null;
                try {
                    return this.decodeBitMatrixParser(s, r)
                } catch (a) {
                    o = a
                }
                try {
                    s.remask(),
                    s.setMirror(!0),
                    s.readVersion(),
                    s.readFormatInformation(),
                    s.mirror();
                    const a = this.decodeBitMatrixParser(s, r);
                    return a.setOther(new g1(!0)),
                    a
                } catch (a) {
                    throw o !== null ? o : a
                }
            }
            decodeBitMatrixParser(n, r) {
                const s = n.readVersion()
                  , o = n.readFormatInformation().getErrorCorrectionLevel()
                  , a = n.readCodewords()
                  , u = ca.getDataBlocks(a, s, o);
                let d = 0;
                for (const w of u)
                    d += w.getNumDataCodewords();
                const h = new Uint8Array(d);
                let p = 0;
                for (const w of u) {
                    const C = w.getCodewords()
                      , A = w.getNumDataCodewords();
                    this.correctErrors(C, A);
                    for (let T = 0; T < A; T++)
                        h[p++] = C[T]
                }
                return qe.decode(h, s, o, r)
            }
            correctErrors(n, r) {
                const s = new Int32Array(n);
                try {
                    this.rsDecoder.decode(s, n.length - r)
                } catch {
                    throw new B
                }
                for (let o = 0; o < r; o++)
                    n[o] = s[o]
            }
        }
        class fa extends le {
            constructor(n, r, s) {
                super(n, r),
                this.estimatedModuleSize = s
            }
            aboutEquals(n, r, s) {
                if (Math.abs(r - this.getY()) <= n && Math.abs(s - this.getX()) <= n) {
                    const o = Math.abs(n - this.estimatedModuleSize);
                    return o <= 1 || o <= this.estimatedModuleSize
                }
                return !1
            }
            combineEstimate(n, r, s) {
                const o = (this.getX() + r) / 2
                  , a = (this.getY() + n) / 2
                  , u = (this.estimatedModuleSize + s) / 2;
                return new fa(o,a,u)
            }
        }
        class xo {
            constructor(n, r, s, o, a, u, d) {
                this.image = n,
                this.startX = r,
                this.startY = s,
                this.width = o,
                this.height = a,
                this.moduleSize = u,
                this.resultPointCallback = d,
                this.possibleCenters = [],
                this.crossCheckStateCount = new Int32Array(3)
            }
            find() {
                const n = this.startX
                  , r = this.height
                  , s = this.width
                  , o = n + s
                  , a = this.startY + r / 2
                  , u = new Int32Array(3)
                  , d = this.image;
                for (let h = 0; h < r; h++) {
                    const p = a + (h & 1 ? -Math.floor((h + 1) / 2) : Math.floor((h + 1) / 2));
                    u[0] = 0,
                    u[1] = 0,
                    u[2] = 0;
                    let w = n;
                    for (; w < o && !d.get(w, p); )
                        w++;
                    let C = 0;
                    for (; w < o; ) {
                        if (d.get(w, p))
                            if (C === 1)
                                u[1]++;
                            else if (C === 2) {
                                if (this.foundPatternCross(u)) {
                                    const A = this.handlePossibleCenter(u, p, w);
                                    if (A !== null)
                                        return A
                                }
                                u[0] = u[2],
                                u[1] = 1,
                                u[2] = 0,
                                C = 1
                            } else
                                u[++C]++;
                        else
                            C === 1 && C++,
                            u[C]++;
                        w++
                    }
                    if (this.foundPatternCross(u)) {
                        const A = this.handlePossibleCenter(u, p, o);
                        if (A !== null)
                            return A
                    }
                }
                if (this.possibleCenters.length !== 0)
                    return this.possibleCenters[0];
                throw new j
            }
            static centerFromEnd(n, r) {
                return r - n[2] - n[1] / 2
            }
            foundPatternCross(n) {
                const r = this.moduleSize
                  , s = r / 2;
                for (let o = 0; o < 3; o++)
                    if (Math.abs(r - n[o]) >= s)
                        return !1;
                return !0
            }
            crossCheckVertical(n, r, s, o) {
                const a = this.image
                  , u = a.getHeight()
                  , d = this.crossCheckStateCount;
                d[0] = 0,
                d[1] = 0,
                d[2] = 0;
                let h = n;
                for (; h >= 0 && a.get(r, h) && d[1] <= s; )
                    d[1]++,
                    h--;
                if (h < 0 || d[1] > s)
                    return NaN;
                for (; h >= 0 && !a.get(r, h) && d[0] <= s; )
                    d[0]++,
                    h--;
                if (d[0] > s)
                    return NaN;
                for (h = n + 1; h < u && a.get(r, h) && d[1] <= s; )
                    d[1]++,
                    h++;
                if (h === u || d[1] > s)
                    return NaN;
                for (; h < u && !a.get(r, h) && d[2] <= s; )
                    d[2]++,
                    h++;
                if (d[2] > s)
                    return NaN;
                const p = d[0] + d[1] + d[2];
                return 5 * Math.abs(p - o) >= 2 * o ? NaN : this.foundPatternCross(d) ? xo.centerFromEnd(d, h) : NaN
            }
            handlePossibleCenter(n, r, s) {
                const o = n[0] + n[1] + n[2]
                  , a = xo.centerFromEnd(n, s)
                  , u = this.crossCheckVertical(r, a, 2 * n[1], o);
                if (!isNaN(u)) {
                    const d = (n[0] + n[1] + n[2]) / 3;
                    for (const p of this.possibleCenters)
                        if (p.aboutEquals(d, u, a))
                            return p.combineEstimate(u, a, d);
                    const h = new fa(a,u,d);
                    this.possibleCenters.push(h),
                    this.resultPointCallback !== null && this.resultPointCallback !== void 0 && this.resultPointCallback.foundPossibleResultPoint(h)
                }
                return null
            }
        }
        class da extends le {
            constructor(n, r, s, o) {
                super(n, r),
                this.estimatedModuleSize = s,
                this.count = o,
                o === void 0 && (this.count = 1)
            }
            getEstimatedModuleSize() {
                return this.estimatedModuleSize
            }
            getCount() {
                return this.count
            }
            aboutEquals(n, r, s) {
                if (Math.abs(r - this.getY()) <= n && Math.abs(s - this.getX()) <= n) {
                    const o = Math.abs(n - this.estimatedModuleSize);
                    return o <= 1 || o <= this.estimatedModuleSize
                }
                return !1
            }
            combineEstimate(n, r, s) {
                const o = this.count + 1
                  , a = (this.count * this.getX() + r) / o
                  , u = (this.count * this.getY() + n) / o
                  , d = (this.count * this.estimatedModuleSize + s) / o;
                return new da(a,u,d,o)
            }
        }
        class I2 {
            constructor(n) {
                this.bottomLeft = n[0],
                this.topLeft = n[1],
                this.topRight = n[2]
            }
            getBottomLeft() {
                return this.bottomLeft
            }
            getTopLeft() {
                return this.topLeft
            }
            getTopRight() {
                return this.topRight
            }
        }
        class Ct {
            constructor(n, r) {
                this.image = n,
                this.resultPointCallback = r,
                this.possibleCenters = [],
                this.crossCheckStateCount = new Int32Array(5),
                this.resultPointCallback = r
            }
            getImage() {
                return this.image
            }
            getPossibleCenters() {
                return this.possibleCenters
            }
            find(n) {
                const r = n != null && n.get(Z.TRY_HARDER) !== void 0
                  , s = n != null && n.get(Z.PURE_BARCODE) !== void 0
                  , o = this.image
                  , a = o.getHeight()
                  , u = o.getWidth();
                let d = Math.floor(3 * a / (4 * Ct.MAX_MODULES));
                (d < Ct.MIN_SKIP || r) && (d = Ct.MIN_SKIP);
                let h = !1;
                const p = new Int32Array(5);
                for (let C = d - 1; C < a && !h; C += d) {
                    p[0] = 0,
                    p[1] = 0,
                    p[2] = 0,
                    p[3] = 0,
                    p[4] = 0;
                    let A = 0;
                    for (let T = 0; T < u; T++)
                        if (o.get(T, C))
                            (A & 1) === 1 && A++,
                            p[A]++;
                        else if (A & 1)
                            p[A]++;
                        else if (A === 4)
                            if (Ct.foundPatternCross(p)) {
                                if (this.handlePossibleCenter(p, C, T, s) === !0)
                                    if (d = 2,
                                    this.hasSkipped === !0)
                                        h = this.haveMultiplyConfirmedCenters();
                                    else {
                                        const b = this.findRowSkip();
                                        b > p[2] && (C += b - p[2] - d,
                                        T = u - 1)
                                    }
                                else {
                                    p[0] = p[2],
                                    p[1] = p[3],
                                    p[2] = p[4],
                                    p[3] = 1,
                                    p[4] = 0,
                                    A = 3;
                                    continue
                                }
                                A = 0,
                                p[0] = 0,
                                p[1] = 0,
                                p[2] = 0,
                                p[3] = 0,
                                p[4] = 0
                            } else
                                p[0] = p[2],
                                p[1] = p[3],
                                p[2] = p[4],
                                p[3] = 1,
                                p[4] = 0,
                                A = 3;
                        else
                            p[++A]++;
                    Ct.foundPatternCross(p) && this.handlePossibleCenter(p, C, u, s) === !0 && (d = p[0],
                    this.hasSkipped && (h = this.haveMultiplyConfirmedCenters()))
                }
                const w = this.selectBestPatterns();
                return le.orderBestPatterns(w),
                new I2(w)
            }
            static centerFromEnd(n, r) {
                return r - n[4] - n[3] - n[2] / 2
            }
            static foundPatternCross(n) {
                let r = 0;
                for (let a = 0; a < 5; a++) {
                    const u = n[a];
                    if (u === 0)
                        return !1;
                    r += u
                }
                if (r < 7)
                    return !1;
                const s = r / 7
                  , o = s / 2;
                return Math.abs(s - n[0]) < o && Math.abs(s - n[1]) < o && Math.abs(3 * s - n[2]) < 3 * o && Math.abs(s - n[3]) < o && Math.abs(s - n[4]) < o
            }
            getCrossCheckStateCount() {
                const n = this.crossCheckStateCount;
                return n[0] = 0,
                n[1] = 0,
                n[2] = 0,
                n[3] = 0,
                n[4] = 0,
                n
            }
            crossCheckDiagonal(n, r, s, o) {
                const a = this.getCrossCheckStateCount();
                let u = 0;
                const d = this.image;
                for (; n >= u && r >= u && d.get(r - u, n - u); )
                    a[2]++,
                    u++;
                if (n < u || r < u)
                    return !1;
                for (; n >= u && r >= u && !d.get(r - u, n - u) && a[1] <= s; )
                    a[1]++,
                    u++;
                if (n < u || r < u || a[1] > s)
                    return !1;
                for (; n >= u && r >= u && d.get(r - u, n - u) && a[0] <= s; )
                    a[0]++,
                    u++;
                if (a[0] > s)
                    return !1;
                const h = d.getHeight()
                  , p = d.getWidth();
                for (u = 1; n + u < h && r + u < p && d.get(r + u, n + u); )
                    a[2]++,
                    u++;
                if (n + u >= h || r + u >= p)
                    return !1;
                for (; n + u < h && r + u < p && !d.get(r + u, n + u) && a[3] < s; )
                    a[3]++,
                    u++;
                if (n + u >= h || r + u >= p || a[3] >= s)
                    return !1;
                for (; n + u < h && r + u < p && d.get(r + u, n + u) && a[4] < s; )
                    a[4]++,
                    u++;
                if (a[4] >= s)
                    return !1;
                const w = a[0] + a[1] + a[2] + a[3] + a[4];
                return Math.abs(w - o) < 2 * o && Ct.foundPatternCross(a)
            }
            crossCheckVertical(n, r, s, o) {
                const a = this.image
                  , u = a.getHeight()
                  , d = this.getCrossCheckStateCount();
                let h = n;
                for (; h >= 0 && a.get(r, h); )
                    d[2]++,
                    h--;
                if (h < 0)
                    return NaN;
                for (; h >= 0 && !a.get(r, h) && d[1] <= s; )
                    d[1]++,
                    h--;
                if (h < 0 || d[1] > s)
                    return NaN;
                for (; h >= 0 && a.get(r, h) && d[0] <= s; )
                    d[0]++,
                    h--;
                if (d[0] > s)
                    return NaN;
                for (h = n + 1; h < u && a.get(r, h); )
                    d[2]++,
                    h++;
                if (h === u)
                    return NaN;
                for (; h < u && !a.get(r, h) && d[3] < s; )
                    d[3]++,
                    h++;
                if (h === u || d[3] >= s)
                    return NaN;
                for (; h < u && a.get(r, h) && d[4] < s; )
                    d[4]++,
                    h++;
                if (d[4] >= s)
                    return NaN;
                const p = d[0] + d[1] + d[2] + d[3] + d[4];
                return 5 * Math.abs(p - o) >= 2 * o ? NaN : Ct.foundPatternCross(d) ? Ct.centerFromEnd(d, h) : NaN
            }
            crossCheckHorizontal(n, r, s, o) {
                const a = this.image
                  , u = a.getWidth()
                  , d = this.getCrossCheckStateCount();
                let h = n;
                for (; h >= 0 && a.get(h, r); )
                    d[2]++,
                    h--;
                if (h < 0)
                    return NaN;
                for (; h >= 0 && !a.get(h, r) && d[1] <= s; )
                    d[1]++,
                    h--;
                if (h < 0 || d[1] > s)
                    return NaN;
                for (; h >= 0 && a.get(h, r) && d[0] <= s; )
                    d[0]++,
                    h--;
                if (d[0] > s)
                    return NaN;
                for (h = n + 1; h < u && a.get(h, r); )
                    d[2]++,
                    h++;
                if (h === u)
                    return NaN;
                for (; h < u && !a.get(h, r) && d[3] < s; )
                    d[3]++,
                    h++;
                if (h === u || d[3] >= s)
                    return NaN;
                for (; h < u && a.get(h, r) && d[4] < s; )
                    d[4]++,
                    h++;
                if (d[4] >= s)
                    return NaN;
                const p = d[0] + d[1] + d[2] + d[3] + d[4];
                return 5 * Math.abs(p - o) >= o ? NaN : Ct.foundPatternCross(d) ? Ct.centerFromEnd(d, h) : NaN
            }
            handlePossibleCenter(n, r, s, o) {
                const a = n[0] + n[1] + n[2] + n[3] + n[4];
                let u = Ct.centerFromEnd(n, s)
                  , d = this.crossCheckVertical(r, Math.floor(u), n[2], a);
                if (!isNaN(d) && (u = this.crossCheckHorizontal(Math.floor(u), Math.floor(d), n[2], a),
                !isNaN(u) && (!o || this.crossCheckDiagonal(Math.floor(d), Math.floor(u), n[2], a)))) {
                    const h = a / 7;
                    let p = !1;
                    const w = this.possibleCenters;
                    for (let C = 0, A = w.length; C < A; C++) {
                        const T = w[C];
                        if (T.aboutEquals(h, d, u)) {
                            w[C] = T.combineEstimate(d, u, h),
                            p = !0;
                            break
                        }
                    }
                    if (!p) {
                        const C = new da(u,d,h);
                        w.push(C),
                        this.resultPointCallback !== null && this.resultPointCallback !== void 0 && this.resultPointCallback.foundPossibleResultPoint(C)
                    }
                    return !0
                }
                return !1
            }
            findRowSkip() {
                if (this.possibleCenters.length <= 1)
                    return 0;
                let r = null;
                for (const s of this.possibleCenters)
                    if (s.getCount() >= Ct.CENTER_QUORUM)
                        if (r == null)
                            r = s;
                        else
                            return this.hasSkipped = !0,
                            Math.floor((Math.abs(r.getX() - s.getX()) - Math.abs(r.getY() - s.getY())) / 2);
                return 0
            }
            haveMultiplyConfirmedCenters() {
                let n = 0
                  , r = 0;
                const s = this.possibleCenters.length;
                for (const u of this.possibleCenters)
                    u.getCount() >= Ct.CENTER_QUORUM && (n++,
                    r += u.getEstimatedModuleSize());
                if (n < 3)
                    return !1;
                const o = r / s;
                let a = 0;
                for (const u of this.possibleCenters)
                    a += Math.abs(u.getEstimatedModuleSize() - o);
                return a <= .05 * r
            }
            selectBestPatterns() {
                const n = this.possibleCenters.length;
                if (n < 3)
                    throw new j;
                const r = this.possibleCenters;
                let s;
                if (n > 3) {
                    let o = 0
                      , a = 0;
                    for (const h of this.possibleCenters) {
                        const p = h.getEstimatedModuleSize();
                        o += p,
                        a += p * p
                    }
                    s = o / n;
                    let u = Math.sqrt(a / n - s * s);
                    r.sort((h,p)=>{
                        const w = Math.abs(p.getEstimatedModuleSize() - s)
                          , C = Math.abs(h.getEstimatedModuleSize() - s);
                        return w < C ? -1 : w > C ? 1 : 0
                    }
                    );
                    const d = Math.max(.2 * s, u);
                    for (let h = 0; h < r.length && r.length > 3; h++) {
                        const p = r[h];
                        Math.abs(p.getEstimatedModuleSize() - s) > d && (r.splice(h, 1),
                        h--)
                    }
                }
                if (r.length > 3) {
                    let o = 0;
                    for (const a of r)
                        o += a.getEstimatedModuleSize();
                    s = o / r.length,
                    r.sort((a,u)=>{
                        if (u.getCount() === a.getCount()) {
                            const d = Math.abs(u.getEstimatedModuleSize() - s)
                              , h = Math.abs(a.getEstimatedModuleSize() - s);
                            return d < h ? 1 : d > h ? -1 : 0
                        } else
                            return u.getCount() - a.getCount()
                    }
                    ),
                    r.splice(3)
                }
                return [r[0], r[1], r[2]]
            }
        }
        Ct.CENTER_QUORUM = 2,
        Ct.MIN_SKIP = 3,
        Ct.MAX_MODULES = 57;
        class ns {
            constructor(n) {
                this.image = n
            }
            getImage() {
                return this.image
            }
            getResultPointCallback() {
                return this.resultPointCallback
            }
            detect(n) {
                this.resultPointCallback = n == null ? null : n.get(Z.NEED_RESULT_POINT_CALLBACK);
                const s = new Ct(this.image,this.resultPointCallback).find(n);
                return this.processFinderPatternInfo(s)
            }
            processFinderPatternInfo(n) {
                const r = n.getTopLeft()
                  , s = n.getTopRight()
                  , o = n.getBottomLeft()
                  , a = this.calculateModuleSize(r, s, o);
                if (a < 1)
                    throw new j("No pattern found in proccess finder.");
                const u = ns.computeDimension(r, s, o, a)
                  , d = ue.getProvisionalVersionForDimension(u)
                  , h = d.getDimensionForVersion() - 7;
                let p = null;
                if (d.getAlignmentPatternCenters().length > 0) {
                    const T = s.getX() - r.getX() + o.getX()
                      , R = s.getY() - r.getY() + o.getY()
                      , b = 1 - 3 / h
                      , P = Math.floor(r.getX() + b * (T - r.getX()))
                      , z = Math.floor(r.getY() + b * (R - r.getY()));
                    for (let Q = 4; Q <= 16; Q <<= 1)
                        try {
                            p = this.findAlignmentInRegion(a, P, z, Q);
                            break
                        } catch (J) {
                            if (!(J instanceof j))
                                throw J
                        }
                }
                const w = ns.createTransform(r, s, o, p, u)
                  , C = ns.sampleGrid(this.image, w, u);
                let A;
                return p === null ? A = [o, r, s] : A = [o, r, s, p],
                new co(C,A)
            }
            static createTransform(n, r, s, o, a) {
                const u = a - 3.5;
                let d, h, p, w;
                return o !== null ? (d = o.getX(),
                h = o.getY(),
                p = u - 3,
                w = p) : (d = r.getX() - n.getX() + s.getX(),
                h = r.getY() - n.getY() + s.getY(),
                p = u,
                w = u),
                An.quadrilateralToQuadrilateral(3.5, 3.5, u, 3.5, p, w, 3.5, u, n.getX(), n.getY(), r.getX(), r.getY(), d, h, s.getX(), s.getY())
            }
            static sampleGrid(n, r, s) {
                return or.getInstance().sampleGridWithTransform(n, s, s, r)
            }
            static computeDimension(n, r, s, o) {
                const a = Ne.round(le.distance(n, r) / o)
                  , u = Ne.round(le.distance(n, s) / o);
                let d = Math.floor((a + u) / 2) + 7;
                switch (d & 3) {
                case 0:
                    d++;
                    break;
                case 2:
                    d--;
                    break;
                case 3:
                    throw new j("Dimensions could be not found.")
                }
                return d
            }
            calculateModuleSize(n, r, s) {
                return (this.calculateModuleSizeOneWay(n, r) + this.calculateModuleSizeOneWay(n, s)) / 2
            }
            calculateModuleSizeOneWay(n, r) {
                const s = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(n.getX()), Math.floor(n.getY()), Math.floor(r.getX()), Math.floor(r.getY()))
                  , o = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(r.getX()), Math.floor(r.getY()), Math.floor(n.getX()), Math.floor(n.getY()));
                return isNaN(s) ? o / 7 : isNaN(o) ? s / 7 : (s + o) / 14
            }
            sizeOfBlackWhiteBlackRunBothWays(n, r, s, o) {
                let a = this.sizeOfBlackWhiteBlackRun(n, r, s, o)
                  , u = 1
                  , d = n - (s - n);
                d < 0 ? (u = n / (n - d),
                d = 0) : d >= this.image.getWidth() && (u = (this.image.getWidth() - 1 - n) / (d - n),
                d = this.image.getWidth() - 1);
                let h = Math.floor(r - (o - r) * u);
                return u = 1,
                h < 0 ? (u = r / (r - h),
                h = 0) : h >= this.image.getHeight() && (u = (this.image.getHeight() - 1 - r) / (h - r),
                h = this.image.getHeight() - 1),
                d = Math.floor(n + (d - n) * u),
                a += this.sizeOfBlackWhiteBlackRun(n, r, d, h),
                a - 1
            }
            sizeOfBlackWhiteBlackRun(n, r, s, o) {
                const a = Math.abs(o - r) > Math.abs(s - n);
                if (a) {
                    let T = n;
                    n = r,
                    r = T,
                    T = s,
                    s = o,
                    o = T
                }
                const u = Math.abs(s - n)
                  , d = Math.abs(o - r);
                let h = -u / 2;
                const p = n < s ? 1 : -1
                  , w = r < o ? 1 : -1;
                let C = 0;
                const A = s + p;
                for (let T = n, R = r; T !== A; T += p) {
                    const b = a ? R : T
                      , P = a ? T : R;
                    if (C === 1 === this.image.get(b, P)) {
                        if (C === 2)
                            return Ne.distance(T, R, n, r);
                        C++
                    }
                    if (h += d,
                    h > 0) {
                        if (R === o)
                            break;
                        R += w,
                        h -= u
                    }
                }
                return C === 2 ? Ne.distance(s + p, o, n, r) : NaN
            }
            findAlignmentInRegion(n, r, s, o) {
                const a = Math.floor(o * n)
                  , u = Math.max(0, r - a)
                  , d = Math.min(this.image.getWidth() - 1, r + a);
                if (d - u < n * 3)
                    throw new j("Alignment top exceeds estimated module size.");
                const h = Math.max(0, s - a)
                  , p = Math.min(this.image.getHeight() - 1, s + a);
                if (p - h < n * 3)
                    throw new j("Alignment bottom exceeds estimated module size.");
                return new xo(this.image,u,h,d - u,p - h,n,this.resultPointCallback).find()
            }
        }
        class cr {
            constructor() {
                this.decoder = new v2
            }
            getDecoder() {
                return this.decoder
            }
            decode(n, r) {
                let s, o;
                if (r != null && r.get(Z.PURE_BARCODE) !== void 0) {
                    const h = cr.extractPureBits(n.getBlackMatrix());
                    s = this.decoder.decodeBitMatrix(h, r),
                    o = cr.NO_POINTS
                } else {
                    const h = new ns(n.getBlackMatrix()).detect(r);
                    s = this.decoder.decodeBitMatrix(h.getBits(), r),
                    o = h.getPoints()
                }
                s.getOther()instanceof g1 && s.getOther().applyMirroredCorrection(o);
                const a = new Qe(s.getText(),s.getRawBytes(),void 0,o,ae.QR_CODE,void 0)
                  , u = s.getByteSegments();
                u !== null && a.putMetadata(yt.BYTE_SEGMENTS, u);
                const d = s.getECLevel();
                return d !== null && a.putMetadata(yt.ERROR_CORRECTION_LEVEL, d),
                s.hasStructuredAppend() && (a.putMetadata(yt.STRUCTURED_APPEND_SEQUENCE, s.getStructuredAppendSequenceNumber()),
                a.putMetadata(yt.STRUCTURED_APPEND_PARITY, s.getStructuredAppendParity())),
                a
            }
            reset() {}
            static extractPureBits(n) {
                const r = n.getTopLeftOnBit()
                  , s = n.getBottomRightOnBit();
                if (r === null || s === null)
                    throw new j;
                const o = this.moduleSize(r, n);
                let a = r[1]
                  , u = s[1]
                  , d = r[0]
                  , h = s[0];
                if (d >= h || a >= u)
                    throw new j;
                if (u - a !== h - d && (h = d + (u - a),
                h >= n.getWidth()))
                    throw new j;
                const p = Math.round((h - d + 1) / o)
                  , w = Math.round((u - a + 1) / o);
                if (p <= 0 || w <= 0)
                    throw new j;
                if (w !== p)
                    throw new j;
                const C = Math.floor(o / 2);
                a += C,
                d += C;
                const A = d + Math.floor((p - 1) * o) - h;
                if (A > 0) {
                    if (A > C)
                        throw new j;
                    d -= A
                }
                const T = a + Math.floor((w - 1) * o) - u;
                if (T > 0) {
                    if (T > C)
                        throw new j;
                    a -= T
                }
                const R = new lt(p,w);
                for (let b = 0; b < w; b++) {
                    const P = a + Math.floor(b * o);
                    for (let z = 0; z < p; z++)
                        n.get(d + Math.floor(z * o), P) && R.set(z, b)
                }
                return R
            }
            static moduleSize(n, r) {
                const s = r.getHeight()
                  , o = r.getWidth();
                let a = n[0]
                  , u = n[1]
                  , d = !0
                  , h = 0;
                for (; a < o && u < s; ) {
                    if (d !== r.get(a, u)) {
                        if (++h === 5)
                            break;
                        d = !d
                    }
                    a++,
                    u++
                }
                if (a === o || u === s)
                    throw new j;
                return (a - n[0]) / 7
            }
        }
        cr.NO_POINTS = new Array;
        class ge {
            PDF417Common() {}
            static getBitCountSum(n) {
                return Ne.sum(n)
            }
            static toIntArray(n) {
                if (n == null || !n.length)
                    return ge.EMPTY_INT_ARRAY;
                const r = new Int32Array(n.length);
                let s = 0;
                for (const o of n)
                    r[s++] = o;
                return r
            }
            static getCodeword(n) {
                const r = _.binarySearch(ge.SYMBOL_TABLE, n & 262143);
                return r < 0 ? -1 : (ge.CODEWORD_TABLE[r] - 1) % ge.NUMBER_OF_CODEWORDS
            }
        }
        ge.NUMBER_OF_CODEWORDS = 929,
        ge.MAX_CODEWORDS_IN_BARCODE = ge.NUMBER_OF_CODEWORDS - 1,
        ge.MIN_ROWS_IN_BARCODE = 3,
        ge.MAX_ROWS_IN_BARCODE = 90,
        ge.MODULES_IN_CODEWORD = 17,
        ge.MODULES_IN_STOP_PATTERN = 18,
        ge.BARS_IN_MODULE = 8,
        ge.EMPTY_INT_ARRAY = new Int32Array([]),
        ge.SYMBOL_TABLE = Int32Array.from([66142, 66170, 66206, 66236, 66290, 66292, 66350, 66382, 66396, 66454, 66470, 66476, 66594, 66600, 66614, 66626, 66628, 66632, 66640, 66654, 66662, 66668, 66682, 66690, 66718, 66720, 66748, 66758, 66776, 66798, 66802, 66804, 66820, 66824, 66832, 66846, 66848, 66876, 66880, 66936, 66950, 66956, 66968, 66992, 67006, 67022, 67036, 67042, 67044, 67048, 67062, 67118, 67150, 67164, 67214, 67228, 67256, 67294, 67322, 67350, 67366, 67372, 67398, 67404, 67416, 67438, 67474, 67476, 67490, 67492, 67496, 67510, 67618, 67624, 67650, 67656, 67664, 67678, 67686, 67692, 67706, 67714, 67716, 67728, 67742, 67744, 67772, 67782, 67788, 67800, 67822, 67826, 67828, 67842, 67848, 67870, 67872, 67900, 67904, 67960, 67974, 67992, 68016, 68030, 68046, 68060, 68066, 68068, 68072, 68086, 68104, 68112, 68126, 68128, 68156, 68160, 68216, 68336, 68358, 68364, 68376, 68400, 68414, 68448, 68476, 68494, 68508, 68536, 68546, 68548, 68552, 68560, 68574, 68582, 68588, 68654, 68686, 68700, 68706, 68708, 68712, 68726, 68750, 68764, 68792, 68802, 68804, 68808, 68816, 68830, 68838, 68844, 68858, 68878, 68892, 68920, 68976, 68990, 68994, 68996, 69e3, 69008, 69022, 69024, 69052, 69062, 69068, 69080, 69102, 69106, 69108, 69142, 69158, 69164, 69190, 69208, 69230, 69254, 69260, 69272, 69296, 69310, 69326, 69340, 69386, 69394, 69396, 69410, 69416, 69430, 69442, 69444, 69448, 69456, 69470, 69478, 69484, 69554, 69556, 69666, 69672, 69698, 69704, 69712, 69726, 69754, 69762, 69764, 69776, 69790, 69792, 69820, 69830, 69836, 69848, 69870, 69874, 69876, 69890, 69918, 69920, 69948, 69952, 70008, 70022, 70040, 70064, 70078, 70094, 70108, 70114, 70116, 70120, 70134, 70152, 70174, 70176, 70264, 70384, 70412, 70448, 70462, 70496, 70524, 70542, 70556, 70584, 70594, 70600, 70608, 70622, 70630, 70636, 70664, 70672, 70686, 70688, 70716, 70720, 70776, 70896, 71136, 71180, 71192, 71216, 71230, 71264, 71292, 71360, 71416, 71452, 71480, 71536, 71550, 71554, 71556, 71560, 71568, 71582, 71584, 71612, 71622, 71628, 71640, 71662, 71726, 71732, 71758, 71772, 71778, 71780, 71784, 71798, 71822, 71836, 71864, 71874, 71880, 71888, 71902, 71910, 71916, 71930, 71950, 71964, 71992, 72048, 72062, 72066, 72068, 72080, 72094, 72096, 72124, 72134, 72140, 72152, 72174, 72178, 72180, 72206, 72220, 72248, 72304, 72318, 72416, 72444, 72456, 72464, 72478, 72480, 72508, 72512, 72568, 72588, 72600, 72624, 72638, 72654, 72668, 72674, 72676, 72680, 72694, 72726, 72742, 72748, 72774, 72780, 72792, 72814, 72838, 72856, 72880, 72894, 72910, 72924, 72930, 72932, 72936, 72950, 72966, 72972, 72984, 73008, 73022, 73056, 73084, 73102, 73116, 73144, 73156, 73160, 73168, 73182, 73190, 73196, 73210, 73226, 73234, 73236, 73250, 73252, 73256, 73270, 73282, 73284, 73296, 73310, 73318, 73324, 73346, 73348, 73352, 73360, 73374, 73376, 73404, 73414, 73420, 73432, 73454, 73498, 73518, 73522, 73524, 73550, 73564, 73570, 73572, 73576, 73590, 73800, 73822, 73858, 73860, 73872, 73886, 73888, 73916, 73944, 73970, 73972, 73992, 74014, 74016, 74044, 74048, 74104, 74118, 74136, 74160, 74174, 74210, 74212, 74216, 74230, 74244, 74256, 74270, 74272, 74360, 74480, 74502, 74508, 74544, 74558, 74592, 74620, 74638, 74652, 74680, 74690, 74696, 74704, 74726, 74732, 74782, 74784, 74812, 74992, 75232, 75288, 75326, 75360, 75388, 75456, 75512, 75576, 75632, 75646, 75650, 75652, 75664, 75678, 75680, 75708, 75718, 75724, 75736, 75758, 75808, 75836, 75840, 75896, 76016, 76256, 76736, 76824, 76848, 76862, 76896, 76924, 76992, 77048, 77296, 77340, 77368, 77424, 77438, 77536, 77564, 77572, 77576, 77584, 77600, 77628, 77632, 77688, 77702, 77708, 77720, 77744, 77758, 77774, 77788, 77870, 77902, 77916, 77922, 77928, 77966, 77980, 78008, 78018, 78024, 78032, 78046, 78060, 78074, 78094, 78136, 78192, 78206, 78210, 78212, 78224, 78238, 78240, 78268, 78278, 78284, 78296, 78322, 78324, 78350, 78364, 78448, 78462, 78560, 78588, 78600, 78622, 78624, 78652, 78656, 78712, 78726, 78744, 78768, 78782, 78798, 78812, 78818, 78820, 78824, 78838, 78862, 78876, 78904, 78960, 78974, 79072, 79100, 79296, 79352, 79368, 79376, 79390, 79392, 79420, 79424, 79480, 79600, 79628, 79640, 79664, 79678, 79712, 79740, 79772, 79800, 79810, 79812, 79816, 79824, 79838, 79846, 79852, 79894, 79910, 79916, 79942, 79948, 79960, 79982, 79988, 80006, 80024, 80048, 80062, 80078, 80092, 80098, 80100, 80104, 80134, 80140, 80176, 80190, 80224, 80252, 80270, 80284, 80312, 80328, 80336, 80350, 80358, 80364, 80378, 80390, 80396, 80408, 80432, 80446, 80480, 80508, 80576, 80632, 80654, 80668, 80696, 80752, 80766, 80776, 80784, 80798, 80800, 80828, 80844, 80856, 80878, 80882, 80884, 80914, 80916, 80930, 80932, 80936, 80950, 80962, 80968, 80976, 80990, 80998, 81004, 81026, 81028, 81040, 81054, 81056, 81084, 81094, 81100, 81112, 81134, 81154, 81156, 81160, 81168, 81182, 81184, 81212, 81216, 81272, 81286, 81292, 81304, 81328, 81342, 81358, 81372, 81380, 81384, 81398, 81434, 81454, 81458, 81460, 81486, 81500, 81506, 81508, 81512, 81526, 81550, 81564, 81592, 81602, 81604, 81608, 81616, 81630, 81638, 81644, 81702, 81708, 81722, 81734, 81740, 81752, 81774, 81778, 81780, 82050, 82078, 82080, 82108, 82180, 82184, 82192, 82206, 82208, 82236, 82240, 82296, 82316, 82328, 82352, 82366, 82402, 82404, 82408, 82440, 82448, 82462, 82464, 82492, 82496, 82552, 82672, 82694, 82700, 82712, 82736, 82750, 82784, 82812, 82830, 82882, 82884, 82888, 82896, 82918, 82924, 82952, 82960, 82974, 82976, 83004, 83008, 83064, 83184, 83424, 83468, 83480, 83504, 83518, 83552, 83580, 83648, 83704, 83740, 83768, 83824, 83838, 83842, 83844, 83848, 83856, 83872, 83900, 83910, 83916, 83928, 83950, 83984, 84e3, 84028, 84032, 84088, 84208, 84448, 84928, 85040, 85054, 85088, 85116, 85184, 85240, 85488, 85560, 85616, 85630, 85728, 85756, 85764, 85768, 85776, 85790, 85792, 85820, 85824, 85880, 85894, 85900, 85912, 85936, 85966, 85980, 86048, 86080, 86136, 86256, 86496, 86976, 88160, 88188, 88256, 88312, 88560, 89056, 89200, 89214, 89312, 89340, 89536, 89592, 89608, 89616, 89632, 89664, 89720, 89840, 89868, 89880, 89904, 89952, 89980, 89998, 90012, 90040, 90190, 90204, 90254, 90268, 90296, 90306, 90308, 90312, 90334, 90382, 90396, 90424, 90480, 90494, 90500, 90504, 90512, 90526, 90528, 90556, 90566, 90572, 90584, 90610, 90612, 90638, 90652, 90680, 90736, 90750, 90848, 90876, 90884, 90888, 90896, 90910, 90912, 90940, 90944, 91e3, 91014, 91020, 91032, 91056, 91070, 91086, 91100, 91106, 91108, 91112, 91126, 91150, 91164, 91192, 91248, 91262, 91360, 91388, 91584, 91640, 91664, 91678, 91680, 91708, 91712, 91768, 91888, 91928, 91952, 91966, 92e3, 92028, 92046, 92060, 92088, 92098, 92100, 92104, 92112, 92126, 92134, 92140, 92188, 92216, 92272, 92384, 92412, 92608, 92664, 93168, 93200, 93214, 93216, 93244, 93248, 93304, 93424, 93664, 93720, 93744, 93758, 93792, 93820, 93888, 93944, 93980, 94008, 94064, 94078, 94084, 94088, 94096, 94110, 94112, 94140, 94150, 94156, 94168, 94246, 94252, 94278, 94284, 94296, 94318, 94342, 94348, 94360, 94384, 94398, 94414, 94428, 94440, 94470, 94476, 94488, 94512, 94526, 94560, 94588, 94606, 94620, 94648, 94658, 94660, 94664, 94672, 94686, 94694, 94700, 94714, 94726, 94732, 94744, 94768, 94782, 94816, 94844, 94912, 94968, 94990, 95004, 95032, 95088, 95102, 95112, 95120, 95134, 95136, 95164, 95180, 95192, 95214, 95218, 95220, 95244, 95256, 95280, 95294, 95328, 95356, 95424, 95480, 95728, 95758, 95772, 95800, 95856, 95870, 95968, 95996, 96008, 96016, 96030, 96032, 96060, 96064, 96120, 96152, 96176, 96190, 96220, 96226, 96228, 96232, 96290, 96292, 96296, 96310, 96322, 96324, 96328, 96336, 96350, 96358, 96364, 96386, 96388, 96392, 96400, 96414, 96416, 96444, 96454, 96460, 96472, 96494, 96498, 96500, 96514, 96516, 96520, 96528, 96542, 96544, 96572, 96576, 96632, 96646, 96652, 96664, 96688, 96702, 96718, 96732, 96738, 96740, 96744, 96758, 96772, 96776, 96784, 96798, 96800, 96828, 96832, 96888, 97008, 97030, 97036, 97048, 97072, 97086, 97120, 97148, 97166, 97180, 97208, 97220, 97224, 97232, 97246, 97254, 97260, 97326, 97330, 97332, 97358, 97372, 97378, 97380, 97384, 97398, 97422, 97436, 97464, 97474, 97476, 97480, 97488, 97502, 97510, 97516, 97550, 97564, 97592, 97648, 97666, 97668, 97672, 97680, 97694, 97696, 97724, 97734, 97740, 97752, 97774, 97830, 97836, 97850, 97862, 97868, 97880, 97902, 97906, 97908, 97926, 97932, 97944, 97968, 97998, 98012, 98018, 98020, 98024, 98038, 98618, 98674, 98676, 98838, 98854, 98874, 98892, 98904, 98926, 98930, 98932, 98968, 99006, 99042, 99044, 99048, 99062, 99166, 99194, 99246, 99286, 99350, 99366, 99372, 99386, 99398, 99416, 99438, 99442, 99444, 99462, 99504, 99518, 99534, 99548, 99554, 99556, 99560, 99574, 99590, 99596, 99608, 99632, 99646, 99680, 99708, 99726, 99740, 99768, 99778, 99780, 99784, 99792, 99806, 99814, 99820, 99834, 99858, 99860, 99874, 99880, 99894, 99906, 99920, 99934, 99962, 99970, 99972, 99976, 99984, 99998, 1e5, 100028, 100038, 100044, 100056, 100078, 100082, 100084, 100142, 100174, 100188, 100246, 100262, 100268, 100306, 100308, 100390, 100396, 100410, 100422, 100428, 100440, 100462, 100466, 100468, 100486, 100504, 100528, 100542, 100558, 100572, 100578, 100580, 100584, 100598, 100620, 100656, 100670, 100704, 100732, 100750, 100792, 100802, 100808, 100816, 100830, 100838, 100844, 100858, 100888, 100912, 100926, 100960, 100988, 101056, 101112, 101148, 101176, 101232, 101246, 101250, 101252, 101256, 101264, 101278, 101280, 101308, 101318, 101324, 101336, 101358, 101362, 101364, 101410, 101412, 101416, 101430, 101442, 101448, 101456, 101470, 101478, 101498, 101506, 101508, 101520, 101534, 101536, 101564, 101580, 101618, 101620, 101636, 101640, 101648, 101662, 101664, 101692, 101696, 101752, 101766, 101784, 101838, 101858, 101860, 101864, 101934, 101938, 101940, 101966, 101980, 101986, 101988, 101992, 102030, 102044, 102072, 102082, 102084, 102088, 102096, 102138, 102166, 102182, 102188, 102214, 102220, 102232, 102254, 102282, 102290, 102292, 102306, 102308, 102312, 102326, 102444, 102458, 102470, 102476, 102488, 102514, 102516, 102534, 102552, 102576, 102590, 102606, 102620, 102626, 102632, 102646, 102662, 102668, 102704, 102718, 102752, 102780, 102798, 102812, 102840, 102850, 102856, 102864, 102878, 102886, 102892, 102906, 102936, 102974, 103008, 103036, 103104, 103160, 103224, 103280, 103294, 103298, 103300, 103312, 103326, 103328, 103356, 103366, 103372, 103384, 103406, 103410, 103412, 103472, 103486, 103520, 103548, 103616, 103672, 103920, 103992, 104048, 104062, 104160, 104188, 104194, 104196, 104200, 104208, 104224, 104252, 104256, 104312, 104326, 104332, 104344, 104368, 104382, 104398, 104412, 104418, 104420, 104424, 104482, 104484, 104514, 104520, 104528, 104542, 104550, 104570, 104578, 104580, 104592, 104606, 104608, 104636, 104652, 104690, 104692, 104706, 104712, 104734, 104736, 104764, 104768, 104824, 104838, 104856, 104910, 104930, 104932, 104936, 104968, 104976, 104990, 104992, 105020, 105024, 105080, 105200, 105240, 105278, 105312, 105372, 105410, 105412, 105416, 105424, 105446, 105518, 105524, 105550, 105564, 105570, 105572, 105576, 105614, 105628, 105656, 105666, 105672, 105680, 105702, 105722, 105742, 105756, 105784, 105840, 105854, 105858, 105860, 105864, 105872, 105888, 105932, 105970, 105972, 106006, 106022, 106028, 106054, 106060, 106072, 106100, 106118, 106124, 106136, 106160, 106174, 106190, 106210, 106212, 106216, 106250, 106258, 106260, 106274, 106276, 106280, 106306, 106308, 106312, 106320, 106334, 106348, 106394, 106414, 106418, 106420, 106566, 106572, 106610, 106612, 106630, 106636, 106648, 106672, 106686, 106722, 106724, 106728, 106742, 106758, 106764, 106776, 106800, 106814, 106848, 106876, 106894, 106908, 106936, 106946, 106948, 106952, 106960, 106974, 106982, 106988, 107032, 107056, 107070, 107104, 107132, 107200, 107256, 107292, 107320, 107376, 107390, 107394, 107396, 107400, 107408, 107422, 107424, 107452, 107462, 107468, 107480, 107502, 107506, 107508, 107544, 107568, 107582, 107616, 107644, 107712, 107768, 108016, 108060, 108088, 108144, 108158, 108256, 108284, 108290, 108292, 108296, 108304, 108318, 108320, 108348, 108352, 108408, 108422, 108428, 108440, 108464, 108478, 108494, 108508, 108514, 108516, 108520, 108592, 108640, 108668, 108736, 108792, 109040, 109536, 109680, 109694, 109792, 109820, 110016, 110072, 110084, 110088, 110096, 110112, 110140, 110144, 110200, 110320, 110342, 110348, 110360, 110384, 110398, 110432, 110460, 110478, 110492, 110520, 110532, 110536, 110544, 110558, 110658, 110686, 110714, 110722, 110724, 110728, 110736, 110750, 110752, 110780, 110796, 110834, 110836, 110850, 110852, 110856, 110864, 110878, 110880, 110908, 110912, 110968, 110982, 111e3, 111054, 111074, 111076, 111080, 111108, 111112, 111120, 111134, 111136, 111164, 111168, 111224, 111344, 111372, 111422, 111456, 111516, 111554, 111556, 111560, 111568, 111590, 111632, 111646, 111648, 111676, 111680, 111736, 111856, 112096, 112152, 112224, 112252, 112320, 112440, 112514, 112516, 112520, 112528, 112542, 112544, 112588, 112686, 112718, 112732, 112782, 112796, 112824, 112834, 112836, 112840, 112848, 112870, 112890, 112910, 112924, 112952, 113008, 113022, 113026, 113028, 113032, 113040, 113054, 113056, 113100, 113138, 113140, 113166, 113180, 113208, 113264, 113278, 113376, 113404, 113416, 113424, 113440, 113468, 113472, 113560, 113614, 113634, 113636, 113640, 113686, 113702, 113708, 113734, 113740, 113752, 113778, 113780, 113798, 113804, 113816, 113840, 113854, 113870, 113890, 113892, 113896, 113926, 113932, 113944, 113968, 113982, 114016, 114044, 114076, 114114, 114116, 114120, 114128, 114150, 114170, 114194, 114196, 114210, 114212, 114216, 114242, 114244, 114248, 114256, 114270, 114278, 114306, 114308, 114312, 114320, 114334, 114336, 114364, 114380, 114420, 114458, 114478, 114482, 114484, 114510, 114524, 114530, 114532, 114536, 114842, 114866, 114868, 114970, 114994, 114996, 115042, 115044, 115048, 115062, 115130, 115226, 115250, 115252, 115278, 115292, 115298, 115300, 115304, 115318, 115342, 115394, 115396, 115400, 115408, 115422, 115430, 115436, 115450, 115478, 115494, 115514, 115526, 115532, 115570, 115572, 115738, 115758, 115762, 115764, 115790, 115804, 115810, 115812, 115816, 115830, 115854, 115868, 115896, 115906, 115912, 115920, 115934, 115942, 115948, 115962, 115996, 116024, 116080, 116094, 116098, 116100, 116104, 116112, 116126, 116128, 116156, 116166, 116172, 116184, 116206, 116210, 116212, 116246, 116262, 116268, 116282, 116294, 116300, 116312, 116334, 116338, 116340, 116358, 116364, 116376, 116400, 116414, 116430, 116444, 116450, 116452, 116456, 116498, 116500, 116514, 116520, 116534, 116546, 116548, 116552, 116560, 116574, 116582, 116588, 116602, 116654, 116694, 116714, 116762, 116782, 116786, 116788, 116814, 116828, 116834, 116836, 116840, 116854, 116878, 116892, 116920, 116930, 116936, 116944, 116958, 116966, 116972, 116986, 117006, 117048, 117104, 117118, 117122, 117124, 117136, 117150, 117152, 117180, 117190, 117196, 117208, 117230, 117234, 117236, 117304, 117360, 117374, 117472, 117500, 117506, 117508, 117512, 117520, 117536, 117564, 117568, 117624, 117638, 117644, 117656, 117680, 117694, 117710, 117724, 117730, 117732, 117736, 117750, 117782, 117798, 117804, 117818, 117830, 117848, 117874, 117876, 117894, 117936, 117950, 117966, 117986, 117988, 117992, 118022, 118028, 118040, 118064, 118078, 118112, 118140, 118172, 118210, 118212, 118216, 118224, 118238, 118246, 118266, 118306, 118312, 118338, 118352, 118366, 118374, 118394, 118402, 118404, 118408, 118416, 118430, 118432, 118460, 118476, 118514, 118516, 118574, 118578, 118580, 118606, 118620, 118626, 118628, 118632, 118678, 118694, 118700, 118730, 118738, 118740, 118830, 118834, 118836, 118862, 118876, 118882, 118884, 118888, 118902, 118926, 118940, 118968, 118978, 118980, 118984, 118992, 119006, 119014, 119020, 119034, 119068, 119096, 119152, 119166, 119170, 119172, 119176, 119184, 119198, 119200, 119228, 119238, 119244, 119256, 119278, 119282, 119284, 119324, 119352, 119408, 119422, 119520, 119548, 119554, 119556, 119560, 119568, 119582, 119584, 119612, 119616, 119672, 119686, 119692, 119704, 119728, 119742, 119758, 119772, 119778, 119780, 119784, 119798, 119920, 119934, 120032, 120060, 120256, 120312, 120324, 120328, 120336, 120352, 120384, 120440, 120560, 120582, 120588, 120600, 120624, 120638, 120672, 120700, 120718, 120732, 120760, 120770, 120772, 120776, 120784, 120798, 120806, 120812, 120870, 120876, 120890, 120902, 120908, 120920, 120946, 120948, 120966, 120972, 120984, 121008, 121022, 121038, 121058, 121060, 121064, 121078, 121100, 121112, 121136, 121150, 121184, 121212, 121244, 121282, 121284, 121288, 121296, 121318, 121338, 121356, 121368, 121392, 121406, 121440, 121468, 121536, 121592, 121656, 121730, 121732, 121736, 121744, 121758, 121760, 121804, 121842, 121844, 121890, 121922, 121924, 121928, 121936, 121950, 121958, 121978, 121986, 121988, 121992, 122e3, 122014, 122016, 122044, 122060, 122098, 122100, 122116, 122120, 122128, 122142, 122144, 122172, 122176, 122232, 122246, 122264, 122318, 122338, 122340, 122344, 122414, 122418, 122420, 122446, 122460, 122466, 122468, 122472, 122510, 122524, 122552, 122562, 122564, 122568, 122576, 122598, 122618, 122646, 122662, 122668, 122694, 122700, 122712, 122738, 122740, 122762, 122770, 122772, 122786, 122788, 122792, 123018, 123026, 123028, 123042, 123044, 123048, 123062, 123098, 123146, 123154, 123156, 123170, 123172, 123176, 123190, 123202, 123204, 123208, 123216, 123238, 123244, 123258, 123290, 123314, 123316, 123402, 123410, 123412, 123426, 123428, 123432, 123446, 123458, 123464, 123472, 123486, 123494, 123500, 123514, 123522, 123524, 123528, 123536, 123552, 123580, 123590, 123596, 123608, 123630, 123634, 123636, 123674, 123698, 123700, 123740, 123746, 123748, 123752, 123834, 123914, 123922, 123924, 123938, 123944, 123958, 123970, 123976, 123984, 123998, 124006, 124012, 124026, 124034, 124036, 124048, 124062, 124064, 124092, 124102, 124108, 124120, 124142, 124146, 124148, 124162, 124164, 124168, 124176, 124190, 124192, 124220, 124224, 124280, 124294, 124300, 124312, 124336, 124350, 124366, 124380, 124386, 124388, 124392, 124406, 124442, 124462, 124466, 124468, 124494, 124508, 124514, 124520, 124558, 124572, 124600, 124610, 124612, 124616, 124624, 124646, 124666, 124694, 124710, 124716, 124730, 124742, 124748, 124760, 124786, 124788, 124818, 124820, 124834, 124836, 124840, 124854, 124946, 124948, 124962, 124964, 124968, 124982, 124994, 124996, 125e3, 125008, 125022, 125030, 125036, 125050, 125058, 125060, 125064, 125072, 125086, 125088, 125116, 125126, 125132, 125144, 125166, 125170, 125172, 125186, 125188, 125192, 125200, 125216, 125244, 125248, 125304, 125318, 125324, 125336, 125360, 125374, 125390, 125404, 125410, 125412, 125416, 125430, 125444, 125448, 125456, 125472, 125504, 125560, 125680, 125702, 125708, 125720, 125744, 125758, 125792, 125820, 125838, 125852, 125880, 125890, 125892, 125896, 125904, 125918, 125926, 125932, 125978, 125998, 126002, 126004, 126030, 126044, 126050, 126052, 126056, 126094, 126108, 126136, 126146, 126148, 126152, 126160, 126182, 126202, 126222, 126236, 126264, 126320, 126334, 126338, 126340, 126344, 126352, 126366, 126368, 126412, 126450, 126452, 126486, 126502, 126508, 126522, 126534, 126540, 126552, 126574, 126578, 126580, 126598, 126604, 126616, 126640, 126654, 126670, 126684, 126690, 126692, 126696, 126738, 126754, 126756, 126760, 126774, 126786, 126788, 126792, 126800, 126814, 126822, 126828, 126842, 126894, 126898, 126900, 126934, 127126, 127142, 127148, 127162, 127178, 127186, 127188, 127254, 127270, 127276, 127290, 127302, 127308, 127320, 127342, 127346, 127348, 127370, 127378, 127380, 127394, 127396, 127400, 127450, 127510, 127526, 127532, 127546, 127558, 127576, 127598, 127602, 127604, 127622, 127628, 127640, 127664, 127678, 127694, 127708, 127714, 127716, 127720, 127734, 127754, 127762, 127764, 127778, 127784, 127810, 127812, 127816, 127824, 127838, 127846, 127866, 127898, 127918, 127922, 127924, 128022, 128038, 128044, 128058, 128070, 128076, 128088, 128110, 128114, 128116, 128134, 128140, 128152, 128176, 128190, 128206, 128220, 128226, 128228, 128232, 128246, 128262, 128268, 128280, 128304, 128318, 128352, 128380, 128398, 128412, 128440, 128450, 128452, 128456, 128464, 128478, 128486, 128492, 128506, 128522, 128530, 128532, 128546, 128548, 128552, 128566, 128578, 128580, 128584, 128592, 128606, 128614, 128634, 128642, 128644, 128648, 128656, 128670, 128672, 128700, 128716, 128754, 128756, 128794, 128814, 128818, 128820, 128846, 128860, 128866, 128868, 128872, 128886, 128918, 128934, 128940, 128954, 128978, 128980, 129178, 129198, 129202, 129204, 129238, 129258, 129306, 129326, 129330, 129332, 129358, 129372, 129378, 129380, 129384, 129398, 129430, 129446, 129452, 129466, 129482, 129490, 129492, 129562, 129582, 129586, 129588, 129614, 129628, 129634, 129636, 129640, 129654, 129678, 129692, 129720, 129730, 129732, 129736, 129744, 129758, 129766, 129772, 129814, 129830, 129836, 129850, 129862, 129868, 129880, 129902, 129906, 129908, 129930, 129938, 129940, 129954, 129956, 129960, 129974, 130010]),
        ge.CODEWORD_TABLE = Int32Array.from([2627, 1819, 2622, 2621, 1813, 1812, 2729, 2724, 2723, 2779, 2774, 2773, 902, 896, 908, 868, 865, 861, 859, 2511, 873, 871, 1780, 835, 2493, 825, 2491, 842, 837, 844, 1764, 1762, 811, 810, 809, 2483, 807, 2482, 806, 2480, 815, 814, 813, 812, 2484, 817, 816, 1745, 1744, 1742, 1746, 2655, 2637, 2635, 2626, 2625, 2623, 2628, 1820, 2752, 2739, 2737, 2728, 2727, 2725, 2730, 2785, 2783, 2778, 2777, 2775, 2780, 787, 781, 747, 739, 736, 2413, 754, 752, 1719, 692, 689, 681, 2371, 678, 2369, 700, 697, 694, 703, 1688, 1686, 642, 638, 2343, 631, 2341, 627, 2338, 651, 646, 643, 2345, 654, 652, 1652, 1650, 1647, 1654, 601, 599, 2322, 596, 2321, 594, 2319, 2317, 611, 610, 608, 606, 2324, 603, 2323, 615, 614, 612, 1617, 1616, 1614, 1612, 616, 1619, 1618, 2575, 2538, 2536, 905, 901, 898, 909, 2509, 2507, 2504, 870, 867, 864, 860, 2512, 875, 872, 1781, 2490, 2489, 2487, 2485, 1748, 836, 834, 832, 830, 2494, 827, 2492, 843, 841, 839, 845, 1765, 1763, 2701, 2676, 2674, 2653, 2648, 2656, 2634, 2633, 2631, 2629, 1821, 2638, 2636, 2770, 2763, 2761, 2750, 2745, 2753, 2736, 2735, 2733, 2731, 1848, 2740, 2738, 2786, 2784, 591, 588, 576, 569, 566, 2296, 1590, 537, 534, 526, 2276, 522, 2274, 545, 542, 539, 548, 1572, 1570, 481, 2245, 466, 2242, 462, 2239, 492, 485, 482, 2249, 496, 494, 1534, 1531, 1528, 1538, 413, 2196, 406, 2191, 2188, 425, 419, 2202, 415, 2199, 432, 430, 427, 1472, 1467, 1464, 433, 1476, 1474, 368, 367, 2160, 365, 2159, 362, 2157, 2155, 2152, 378, 377, 375, 2166, 372, 2165, 369, 2162, 383, 381, 379, 2168, 1419, 1418, 1416, 1414, 385, 1411, 384, 1423, 1422, 1420, 1424, 2461, 802, 2441, 2439, 790, 786, 783, 794, 2409, 2406, 2403, 750, 742, 738, 2414, 756, 753, 1720, 2367, 2365, 2362, 2359, 1663, 693, 691, 684, 2373, 680, 2370, 702, 699, 696, 704, 1690, 1687, 2337, 2336, 2334, 2332, 1624, 2329, 1622, 640, 637, 2344, 634, 2342, 630, 2340, 650, 648, 645, 2346, 655, 653, 1653, 1651, 1649, 1655, 2612, 2597, 2595, 2571, 2568, 2565, 2576, 2534, 2529, 2526, 1787, 2540, 2537, 907, 904, 900, 910, 2503, 2502, 2500, 2498, 1768, 2495, 1767, 2510, 2508, 2506, 869, 866, 863, 2513, 876, 874, 1782, 2720, 2713, 2711, 2697, 2694, 2691, 2702, 2672, 2670, 2664, 1828, 2678, 2675, 2647, 2646, 2644, 2642, 1823, 2639, 1822, 2654, 2652, 2650, 2657, 2771, 1855, 2765, 2762, 1850, 1849, 2751, 2749, 2747, 2754, 353, 2148, 344, 342, 336, 2142, 332, 2140, 345, 1375, 1373, 306, 2130, 299, 2128, 295, 2125, 319, 314, 311, 2132, 1354, 1352, 1349, 1356, 262, 257, 2101, 253, 2096, 2093, 274, 273, 267, 2107, 263, 2104, 280, 278, 275, 1316, 1311, 1308, 1320, 1318, 2052, 202, 2050, 2044, 2040, 219, 2063, 212, 2060, 208, 2055, 224, 221, 2066, 1260, 1258, 1252, 231, 1248, 229, 1266, 1264, 1261, 1268, 155, 1998, 153, 1996, 1994, 1991, 1988, 165, 164, 2007, 162, 2006, 159, 2003, 2e3, 172, 171, 169, 2012, 166, 2010, 1186, 1184, 1182, 1179, 175, 1176, 173, 1192, 1191, 1189, 1187, 176, 1194, 1193, 2313, 2307, 2305, 592, 589, 2294, 2292, 2289, 578, 572, 568, 2297, 580, 1591, 2272, 2267, 2264, 1547, 538, 536, 529, 2278, 525, 2275, 547, 544, 541, 1574, 1571, 2237, 2235, 2229, 1493, 2225, 1489, 478, 2247, 470, 2244, 465, 2241, 493, 488, 484, 2250, 498, 495, 1536, 1533, 1530, 1539, 2187, 2186, 2184, 2182, 1432, 2179, 1430, 2176, 1427, 414, 412, 2197, 409, 2195, 405, 2193, 2190, 426, 424, 421, 2203, 418, 2201, 431, 429, 1473, 1471, 1469, 1466, 434, 1477, 1475, 2478, 2472, 2470, 2459, 2457, 2454, 2462, 803, 2437, 2432, 2429, 1726, 2443, 2440, 792, 789, 785, 2401, 2399, 2393, 1702, 2389, 1699, 2411, 2408, 2405, 745, 741, 2415, 758, 755, 1721, 2358, 2357, 2355, 2353, 1661, 2350, 1660, 2347, 1657, 2368, 2366, 2364, 2361, 1666, 690, 687, 2374, 683, 2372, 701, 698, 705, 1691, 1689, 2619, 2617, 2610, 2608, 2605, 2613, 2593, 2588, 2585, 1803, 2599, 2596, 2563, 2561, 2555, 1797, 2551, 1795, 2573, 2570, 2567, 2577, 2525, 2524, 2522, 2520, 1786, 2517, 1785, 2514, 1783, 2535, 2533, 2531, 2528, 1788, 2541, 2539, 906, 903, 911, 2721, 1844, 2715, 2712, 1838, 1836, 2699, 2696, 2693, 2703, 1827, 1826, 1824, 2673, 2671, 2669, 2666, 1829, 2679, 2677, 1858, 1857, 2772, 1854, 1853, 1851, 1856, 2766, 2764, 143, 1987, 139, 1986, 135, 133, 131, 1984, 128, 1983, 125, 1981, 138, 137, 136, 1985, 1133, 1132, 1130, 112, 110, 1974, 107, 1973, 104, 1971, 1969, 122, 121, 119, 117, 1977, 114, 1976, 124, 1115, 1114, 1112, 1110, 1117, 1116, 84, 83, 1953, 81, 1952, 78, 1950, 1948, 1945, 94, 93, 91, 1959, 88, 1958, 85, 1955, 99, 97, 95, 1961, 1086, 1085, 1083, 1081, 1078, 100, 1090, 1089, 1087, 1091, 49, 47, 1917, 44, 1915, 1913, 1910, 1907, 59, 1926, 56, 1925, 53, 1922, 1919, 66, 64, 1931, 61, 1929, 1042, 1040, 1038, 71, 1035, 70, 1032, 68, 1048, 1047, 1045, 1043, 1050, 1049, 12, 10, 1869, 1867, 1864, 1861, 21, 1880, 19, 1877, 1874, 1871, 28, 1888, 25, 1886, 22, 1883, 982, 980, 977, 974, 32, 30, 991, 989, 987, 984, 34, 995, 994, 992, 2151, 2150, 2147, 2146, 2144, 356, 355, 354, 2149, 2139, 2138, 2136, 2134, 1359, 343, 341, 338, 2143, 335, 2141, 348, 347, 346, 1376, 1374, 2124, 2123, 2121, 2119, 1326, 2116, 1324, 310, 308, 305, 2131, 302, 2129, 298, 2127, 320, 318, 316, 313, 2133, 322, 321, 1355, 1353, 1351, 1357, 2092, 2091, 2089, 2087, 1276, 2084, 1274, 2081, 1271, 259, 2102, 256, 2100, 252, 2098, 2095, 272, 269, 2108, 266, 2106, 281, 279, 277, 1317, 1315, 1313, 1310, 282, 1321, 1319, 2039, 2037, 2035, 2032, 1203, 2029, 1200, 1197, 207, 2053, 205, 2051, 201, 2049, 2046, 2043, 220, 218, 2064, 215, 2062, 211, 2059, 228, 226, 223, 2069, 1259, 1257, 1254, 232, 1251, 230, 1267, 1265, 1263, 2316, 2315, 2312, 2311, 2309, 2314, 2304, 2303, 2301, 2299, 1593, 2308, 2306, 590, 2288, 2287, 2285, 2283, 1578, 2280, 1577, 2295, 2293, 2291, 579, 577, 574, 571, 2298, 582, 581, 1592, 2263, 2262, 2260, 2258, 1545, 2255, 1544, 2252, 1541, 2273, 2271, 2269, 2266, 1550, 535, 532, 2279, 528, 2277, 546, 543, 549, 1575, 1573, 2224, 2222, 2220, 1486, 2217, 1485, 2214, 1482, 1479, 2238, 2236, 2234, 2231, 1496, 2228, 1492, 480, 477, 2248, 473, 2246, 469, 2243, 490, 487, 2251, 497, 1537, 1535, 1532, 2477, 2476, 2474, 2479, 2469, 2468, 2466, 2464, 1730, 2473, 2471, 2453, 2452, 2450, 2448, 1729, 2445, 1728, 2460, 2458, 2456, 2463, 805, 804, 2428, 2427, 2425, 2423, 1725, 2420, 1724, 2417, 1722, 2438, 2436, 2434, 2431, 1727, 2444, 2442, 793, 791, 788, 795, 2388, 2386, 2384, 1697, 2381, 1696, 2378, 1694, 1692, 2402, 2400, 2398, 2395, 1703, 2392, 1701, 2412, 2410, 2407, 751, 748, 744, 2416, 759, 757, 1807, 2620, 2618, 1806, 1805, 2611, 2609, 2607, 2614, 1802, 1801, 1799, 2594, 2592, 2590, 2587, 1804, 2600, 2598, 1794, 1793, 1791, 1789, 2564, 2562, 2560, 2557, 1798, 2554, 1796, 2574, 2572, 2569, 2578, 1847, 1846, 2722, 1843, 1842, 1840, 1845, 2716, 2714, 1835, 1834, 1832, 1830, 1839, 1837, 2700, 2698, 2695, 2704, 1817, 1811, 1810, 897, 862, 1777, 829, 826, 838, 1760, 1758, 808, 2481, 1741, 1740, 1738, 1743, 2624, 1818, 2726, 2776, 782, 740, 737, 1715, 686, 679, 695, 1682, 1680, 639, 628, 2339, 647, 644, 1645, 1643, 1640, 1648, 602, 600, 597, 595, 2320, 593, 2318, 609, 607, 604, 1611, 1610, 1608, 1606, 613, 1615, 1613, 2328, 926, 924, 892, 886, 899, 857, 850, 2505, 1778, 824, 823, 821, 819, 2488, 818, 2486, 833, 831, 828, 840, 1761, 1759, 2649, 2632, 2630, 2746, 2734, 2732, 2782, 2781, 570, 567, 1587, 531, 527, 523, 540, 1566, 1564, 476, 467, 463, 2240, 486, 483, 1524, 1521, 1518, 1529, 411, 403, 2192, 399, 2189, 423, 416, 1462, 1457, 1454, 428, 1468, 1465, 2210, 366, 363, 2158, 360, 2156, 357, 2153, 376, 373, 370, 2163, 1410, 1409, 1407, 1405, 382, 1402, 380, 1417, 1415, 1412, 1421, 2175, 2174, 777, 774, 771, 784, 732, 725, 722, 2404, 743, 1716, 676, 674, 668, 2363, 665, 2360, 685, 1684, 1681, 626, 624, 622, 2335, 620, 2333, 617, 2330, 641, 635, 649, 1646, 1644, 1642, 2566, 928, 925, 2530, 2527, 894, 891, 888, 2501, 2499, 2496, 858, 856, 854, 851, 1779, 2692, 2668, 2665, 2645, 2643, 2640, 2651, 2768, 2759, 2757, 2744, 2743, 2741, 2748, 352, 1382, 340, 337, 333, 1371, 1369, 307, 300, 296, 2126, 315, 312, 1347, 1342, 1350, 261, 258, 250, 2097, 246, 2094, 271, 268, 264, 1306, 1301, 1298, 276, 1312, 1309, 2115, 203, 2048, 195, 2045, 191, 2041, 213, 209, 2056, 1246, 1244, 1238, 225, 1234, 222, 1256, 1253, 1249, 1262, 2080, 2079, 154, 1997, 150, 1995, 147, 1992, 1989, 163, 160, 2004, 156, 2001, 1175, 1174, 1172, 1170, 1167, 170, 1164, 167, 1185, 1183, 1180, 1177, 174, 1190, 1188, 2025, 2024, 2022, 587, 586, 564, 559, 556, 2290, 573, 1588, 520, 518, 512, 2268, 508, 2265, 530, 1568, 1565, 461, 457, 2233, 450, 2230, 446, 2226, 479, 471, 489, 1526, 1523, 1520, 397, 395, 2185, 392, 2183, 389, 2180, 2177, 410, 2194, 402, 422, 1463, 1461, 1459, 1456, 1470, 2455, 799, 2433, 2430, 779, 776, 773, 2397, 2394, 2390, 734, 728, 724, 746, 1717, 2356, 2354, 2351, 2348, 1658, 677, 675, 673, 670, 667, 688, 1685, 1683, 2606, 2589, 2586, 2559, 2556, 2552, 927, 2523, 2521, 2518, 2515, 1784, 2532, 895, 893, 890, 2718, 2709, 2707, 2689, 2687, 2684, 2663, 2662, 2660, 2658, 1825, 2667, 2769, 1852, 2760, 2758, 142, 141, 1139, 1138, 134, 132, 129, 126, 1982, 1129, 1128, 1126, 1131, 113, 111, 108, 105, 1972, 101, 1970, 120, 118, 115, 1109, 1108, 1106, 1104, 123, 1113, 1111, 82, 79, 1951, 75, 1949, 72, 1946, 92, 89, 86, 1956, 1077, 1076, 1074, 1072, 98, 1069, 96, 1084, 1082, 1079, 1088, 1968, 1967, 48, 45, 1916, 42, 1914, 39, 1911, 1908, 60, 57, 54, 1923, 50, 1920, 1031, 1030, 1028, 1026, 67, 1023, 65, 1020, 62, 1041, 1039, 1036, 1033, 69, 1046, 1044, 1944, 1943, 1941, 11, 9, 1868, 7, 1865, 1862, 1859, 20, 1878, 16, 1875, 13, 1872, 970, 968, 966, 963, 29, 960, 26, 23, 983, 981, 978, 975, 33, 971, 31, 990, 988, 985, 1906, 1904, 1902, 993, 351, 2145, 1383, 331, 330, 328, 326, 2137, 323, 2135, 339, 1372, 1370, 294, 293, 291, 289, 2122, 286, 2120, 283, 2117, 309, 303, 317, 1348, 1346, 1344, 245, 244, 242, 2090, 239, 2088, 236, 2085, 2082, 260, 2099, 249, 270, 1307, 1305, 1303, 1300, 1314, 189, 2038, 186, 2036, 183, 2033, 2030, 2026, 206, 198, 2047, 194, 216, 1247, 1245, 1243, 1240, 227, 1237, 1255, 2310, 2302, 2300, 2286, 2284, 2281, 565, 563, 561, 558, 575, 1589, 2261, 2259, 2256, 2253, 1542, 521, 519, 517, 514, 2270, 511, 533, 1569, 1567, 2223, 2221, 2218, 2215, 1483, 2211, 1480, 459, 456, 453, 2232, 449, 474, 491, 1527, 1525, 1522, 2475, 2467, 2465, 2451, 2449, 2446, 801, 800, 2426, 2424, 2421, 2418, 1723, 2435, 780, 778, 775, 2387, 2385, 2382, 2379, 1695, 2375, 1693, 2396, 735, 733, 730, 727, 749, 1718, 2616, 2615, 2604, 2603, 2601, 2584, 2583, 2581, 2579, 1800, 2591, 2550, 2549, 2547, 2545, 1792, 2542, 1790, 2558, 929, 2719, 1841, 2710, 2708, 1833, 1831, 2690, 2688, 2686, 1815, 1809, 1808, 1774, 1756, 1754, 1737, 1736, 1734, 1739, 1816, 1711, 1676, 1674, 633, 629, 1638, 1636, 1633, 1641, 598, 1605, 1604, 1602, 1600, 605, 1609, 1607, 2327, 887, 853, 1775, 822, 820, 1757, 1755, 1584, 524, 1560, 1558, 468, 464, 1514, 1511, 1508, 1519, 408, 404, 400, 1452, 1447, 1444, 417, 1458, 1455, 2208, 364, 361, 358, 2154, 1401, 1400, 1398, 1396, 374, 1393, 371, 1408, 1406, 1403, 1413, 2173, 2172, 772, 726, 723, 1712, 672, 669, 666, 682, 1678, 1675, 625, 623, 621, 618, 2331, 636, 632, 1639, 1637, 1635, 920, 918, 884, 880, 889, 849, 848, 847, 846, 2497, 855, 852, 1776, 2641, 2742, 2787, 1380, 334, 1367, 1365, 301, 297, 1340, 1338, 1335, 1343, 255, 251, 247, 1296, 1291, 1288, 265, 1302, 1299, 2113, 204, 196, 192, 2042, 1232, 1230, 1224, 214, 1220, 210, 1242, 1239, 1235, 1250, 2077, 2075, 151, 148, 1993, 144, 1990, 1163, 1162, 1160, 1158, 1155, 161, 1152, 157, 1173, 1171, 1168, 1165, 168, 1181, 1178, 2021, 2020, 2018, 2023, 585, 560, 557, 1585, 516, 509, 1562, 1559, 458, 447, 2227, 472, 1516, 1513, 1510, 398, 396, 393, 390, 2181, 386, 2178, 407, 1453, 1451, 1449, 1446, 420, 1460, 2209, 769, 764, 720, 712, 2391, 729, 1713, 664, 663, 661, 659, 2352, 656, 2349, 671, 1679, 1677, 2553, 922, 919, 2519, 2516, 885, 883, 881, 2685, 2661, 2659, 2767, 2756, 2755, 140, 1137, 1136, 130, 127, 1125, 1124, 1122, 1127, 109, 106, 102, 1103, 1102, 1100, 1098, 116, 1107, 1105, 1980, 80, 76, 73, 1947, 1068, 1067, 1065, 1063, 90, 1060, 87, 1075, 1073, 1070, 1080, 1966, 1965, 46, 43, 40, 1912, 36, 1909, 1019, 1018, 1016, 1014, 58, 1011, 55, 1008, 51, 1029, 1027, 1024, 1021, 63, 1037, 1034, 1940, 1939, 1937, 1942, 8, 1866, 4, 1863, 1, 1860, 956, 954, 952, 949, 946, 17, 14, 969, 967, 964, 961, 27, 957, 24, 979, 976, 972, 1901, 1900, 1898, 1896, 986, 1905, 1903, 350, 349, 1381, 329, 327, 324, 1368, 1366, 292, 290, 287, 284, 2118, 304, 1341, 1339, 1337, 1345, 243, 240, 237, 2086, 233, 2083, 254, 1297, 1295, 1293, 1290, 1304, 2114, 190, 187, 184, 2034, 180, 2031, 177, 2027, 199, 1233, 1231, 1229, 1226, 217, 1223, 1241, 2078, 2076, 584, 555, 554, 552, 550, 2282, 562, 1586, 507, 506, 504, 502, 2257, 499, 2254, 515, 1563, 1561, 445, 443, 441, 2219, 438, 2216, 435, 2212, 460, 454, 475, 1517, 1515, 1512, 2447, 798, 797, 2422, 2419, 770, 768, 766, 2383, 2380, 2376, 721, 719, 717, 714, 731, 1714, 2602, 2582, 2580, 2548, 2546, 2543, 923, 921, 2717, 2706, 2705, 2683, 2682, 2680, 1771, 1752, 1750, 1733, 1732, 1731, 1735, 1814, 1707, 1670, 1668, 1631, 1629, 1626, 1634, 1599, 1598, 1596, 1594, 1603, 1601, 2326, 1772, 1753, 1751, 1581, 1554, 1552, 1504, 1501, 1498, 1509, 1442, 1437, 1434, 401, 1448, 1445, 2206, 1392, 1391, 1389, 1387, 1384, 359, 1399, 1397, 1394, 1404, 2171, 2170, 1708, 1672, 1669, 619, 1632, 1630, 1628, 1773, 1378, 1363, 1361, 1333, 1328, 1336, 1286, 1281, 1278, 248, 1292, 1289, 2111, 1218, 1216, 1210, 197, 1206, 193, 1228, 1225, 1221, 1236, 2073, 2071, 1151, 1150, 1148, 1146, 152, 1143, 149, 1140, 145, 1161, 1159, 1156, 1153, 158, 1169, 1166, 2017, 2016, 2014, 2019, 1582, 510, 1556, 1553, 452, 448, 1506, 1500, 394, 391, 387, 1443, 1441, 1439, 1436, 1450, 2207, 765, 716, 713, 1709, 662, 660, 657, 1673, 1671, 916, 914, 879, 878, 877, 882, 1135, 1134, 1121, 1120, 1118, 1123, 1097, 1096, 1094, 1092, 103, 1101, 1099, 1979, 1059, 1058, 1056, 1054, 77, 1051, 74, 1066, 1064, 1061, 1071, 1964, 1963, 1007, 1006, 1004, 1002, 999, 41, 996, 37, 1017, 1015, 1012, 1009, 52, 1025, 1022, 1936, 1935, 1933, 1938, 942, 940, 938, 935, 932, 5, 2, 955, 953, 950, 947, 18, 943, 15, 965, 962, 958, 1895, 1894, 1892, 1890, 973, 1899, 1897, 1379, 325, 1364, 1362, 288, 285, 1334, 1332, 1330, 241, 238, 234, 1287, 1285, 1283, 1280, 1294, 2112, 188, 185, 181, 178, 2028, 1219, 1217, 1215, 1212, 200, 1209, 1227, 2074, 2072, 583, 553, 551, 1583, 505, 503, 500, 513, 1557, 1555, 444, 442, 439, 436, 2213, 455, 451, 1507, 1505, 1502, 796, 763, 762, 760, 767, 711, 710, 708, 706, 2377, 718, 715, 1710, 2544, 917, 915, 2681, 1627, 1597, 1595, 2325, 1769, 1749, 1747, 1499, 1438, 1435, 2204, 1390, 1388, 1385, 1395, 2169, 2167, 1704, 1665, 1662, 1625, 1623, 1620, 1770, 1329, 1282, 1279, 2109, 1214, 1207, 1222, 2068, 2065, 1149, 1147, 1144, 1141, 146, 1157, 1154, 2013, 2011, 2008, 2015, 1579, 1549, 1546, 1495, 1487, 1433, 1431, 1428, 1425, 388, 1440, 2205, 1705, 658, 1667, 1664, 1119, 1095, 1093, 1978, 1057, 1055, 1052, 1062, 1962, 1960, 1005, 1003, 1e3, 997, 38, 1013, 1010, 1932, 1930, 1927, 1934, 941, 939, 936, 933, 6, 930, 3, 951, 948, 944, 1889, 1887, 1884, 1881, 959, 1893, 1891, 35, 1377, 1360, 1358, 1327, 1325, 1322, 1331, 1277, 1275, 1272, 1269, 235, 1284, 2110, 1205, 1204, 1201, 1198, 182, 1195, 179, 1213, 2070, 2067, 1580, 501, 1551, 1548, 440, 437, 1497, 1494, 1490, 1503, 761, 709, 707, 1706, 913, 912, 2198, 1386, 2164, 2161, 1621, 1766, 2103, 1208, 2058, 2054, 1145, 1142, 2005, 2002, 1999, 2009, 1488, 1429, 1426, 2200, 1698, 1659, 1656, 1975, 1053, 1957, 1954, 1001, 998, 1924, 1921, 1918, 1928, 937, 934, 931, 1879, 1876, 1873, 1870, 945, 1885, 1882, 1323, 1273, 1270, 2105, 1202, 1199, 1196, 1211, 2061, 2057, 1576, 1543, 1540, 1484, 1481, 1478, 1491, 1700]);
        class T2 {
            constructor(n, r) {
                this.bits = n,
                this.points = r
            }
            getBits() {
                return this.bits
            }
            getPoints() {
                return this.points
            }
        }
        class Ee {
            static detectMultiple(n, r, s) {
                let o = n.getBlackMatrix()
                  , a = Ee.detect(s, o);
                return a.length || (o = o.clone(),
                o.rotate180(),
                a = Ee.detect(s, o)),
                new T2(o,a)
            }
            static detect(n, r) {
                const s = new Array;
                let o = 0
                  , a = 0
                  , u = !1;
                for (; o < r.getHeight(); ) {
                    const d = Ee.findVertices(r, o, a);
                    if (d[0] == null && d[3] == null) {
                        if (!u)
                            break;
                        u = !1,
                        a = 0;
                        for (const h of s)
                            h[1] != null && (o = Math.trunc(Math.max(o, h[1].getY()))),
                            h[3] != null && (o = Math.max(o, Math.trunc(h[3].getY())));
                        o += Ee.ROW_STEP;
                        continue
                    }
                    if (u = !0,
                    s.push(d),
                    !n)
                        break;
                    d[2] != null ? (a = Math.trunc(d[2].getX()),
                    o = Math.trunc(d[2].getY())) : (a = Math.trunc(d[4].getX()),
                    o = Math.trunc(d[4].getY()))
                }
                return s
            }
            static findVertices(n, r, s) {
                const o = n.getHeight()
                  , a = n.getWidth()
                  , u = new Array(8);
                return Ee.copyToResult(u, Ee.findRowsWithPattern(n, o, a, r, s, Ee.START_PATTERN), Ee.INDEXES_START_PATTERN),
                u[4] != null && (s = Math.trunc(u[4].getX()),
                r = Math.trunc(u[4].getY())),
                Ee.copyToResult(u, Ee.findRowsWithPattern(n, o, a, r, s, Ee.STOP_PATTERN), Ee.INDEXES_STOP_PATTERN),
                u
            }
            static copyToResult(n, r, s) {
                for (let o = 0; o < s.length; o++)
                    n[s[o]] = r[o]
            }
            static findRowsWithPattern(n, r, s, o, a, u) {
                const d = new Array(4);
                let h = !1;
                const p = new Int32Array(u.length);
                for (; o < r; o += Ee.ROW_STEP) {
                    let C = Ee.findGuardPattern(n, a, o, s, !1, u, p);
                    if (C != null) {
                        for (; o > 0; ) {
                            const A = Ee.findGuardPattern(n, a, --o, s, !1, u, p);
                            if (A != null)
                                C = A;
                            else {
                                o++;
                                break
                            }
                        }
                        d[0] = new le(C[0],o),
                        d[1] = new le(C[1],o),
                        h = !0;
                        break
                    }
                }
                let w = o + 1;
                if (h) {
                    let C = 0
                      , A = Int32Array.from([Math.trunc(d[0].getX()), Math.trunc(d[1].getX())]);
                    for (; w < r; w++) {
                        const T = Ee.findGuardPattern(n, A[0], w, s, !1, u, p);
                        if (T != null && Math.abs(A[0] - T[0]) < Ee.MAX_PATTERN_DRIFT && Math.abs(A[1] - T[1]) < Ee.MAX_PATTERN_DRIFT)
                            A = T,
                            C = 0;
                        else {
                            if (C > Ee.SKIPPED_ROW_COUNT_MAX)
                                break;
                            C++
                        }
                    }
                    w -= C + 1,
                    d[2] = new le(A[0],w),
                    d[3] = new le(A[1],w)
                }
                return w - o < Ee.BARCODE_MIN_HEIGHT && _.fill(d, null),
                d
            }
            static findGuardPattern(n, r, s, o, a, u, d) {
                _.fillWithin(d, 0, d.length, 0);
                let h = r
                  , p = 0;
                for (; n.get(h, s) && h > 0 && p++ < Ee.MAX_PIXEL_DRIFT; )
                    h--;
                let w = h
                  , C = 0
                  , A = u.length;
                for (let T = a; w < o; w++)
                    if (n.get(w, s) !== T)
                        d[C]++;
                    else {
                        if (C === A - 1) {
                            if (Ee.patternMatchVariance(d, u, Ee.MAX_INDIVIDUAL_VARIANCE) < Ee.MAX_AVG_VARIANCE)
                                return new Int32Array([h, w]);
                            h += d[0] + d[1],
                            M.arraycopy(d, 2, d, 0, C - 1),
                            d[C - 1] = 0,
                            d[C] = 0,
                            C--
                        } else
                            C++;
                        d[C] = 1,
                        T = !T
                    }
                return C === A - 1 && Ee.patternMatchVariance(d, u, Ee.MAX_INDIVIDUAL_VARIANCE) < Ee.MAX_AVG_VARIANCE ? new Int32Array([h, w - 1]) : null
            }
            static patternMatchVariance(n, r, s) {
                let o = n.length
                  , a = 0
                  , u = 0;
                for (let p = 0; p < o; p++)
                    a += n[p],
                    u += r[p];
                if (a < u)
                    return 1 / 0;
                let d = a / u;
                s *= d;
                let h = 0;
                for (let p = 0; p < o; p++) {
                    let w = n[p]
                      , C = r[p] * d
                      , A = w > C ? w - C : C - w;
                    if (A > s)
                        return 1 / 0;
                    h += A
                }
                return h / a
            }
        }
        Ee.INDEXES_START_PATTERN = Int32Array.from([0, 4, 1, 5]),
        Ee.INDEXES_STOP_PATTERN = Int32Array.from([6, 2, 7, 3]),
        Ee.MAX_AVG_VARIANCE = .42,
        Ee.MAX_INDIVIDUAL_VARIANCE = .8,
        Ee.START_PATTERN = Int32Array.from([8, 1, 1, 1, 1, 1, 1, 3]),
        Ee.STOP_PATTERN = Int32Array.from([7, 1, 1, 3, 1, 1, 1, 2, 1]),
        Ee.MAX_PIXEL_DRIFT = 3,
        Ee.MAX_PATTERN_DRIFT = 5,
        Ee.SKIPPED_ROW_COUNT_MAX = 25,
        Ee.ROW_STEP = 5,
        Ee.BARCODE_MIN_HEIGHT = 10;
        class It {
            constructor(n, r) {
                if (r.length === 0)
                    throw new v;
                this.field = n;
                let s = r.length;
                if (s > 1 && r[0] === 0) {
                    let o = 1;
                    for (; o < s && r[o] === 0; )
                        o++;
                    o === s ? this.coefficients = new Int32Array([0]) : (this.coefficients = new Int32Array(s - o),
                    M.arraycopy(r, o, this.coefficients, 0, this.coefficients.length))
                } else
                    this.coefficients = r
            }
            getCoefficients() {
                return this.coefficients
            }
            getDegree() {
                return this.coefficients.length - 1
            }
            isZero() {
                return this.coefficients[0] === 0
            }
            getCoefficient(n) {
                return this.coefficients[this.coefficients.length - 1 - n]
            }
            evaluateAt(n) {
                if (n === 0)
                    return this.getCoefficient(0);
                if (n === 1) {
                    let o = 0;
                    for (let a of this.coefficients)
                        o = this.field.add(o, a);
                    return o
                }
                let r = this.coefficients[0]
                  , s = this.coefficients.length;
                for (let o = 1; o < s; o++)
                    r = this.field.add(this.field.multiply(n, r), this.coefficients[o]);
                return r
            }
            add(n) {
                if (!this.field.equals(n.field))
                    throw new v("ModulusPolys do not have same ModulusGF field");
                if (this.isZero())
                    return n;
                if (n.isZero())
                    return this;
                let r = this.coefficients
                  , s = n.coefficients;
                if (r.length > s.length) {
                    let u = r;
                    r = s,
                    s = u
                }
                let o = new Int32Array(s.length)
                  , a = s.length - r.length;
                M.arraycopy(s, 0, o, 0, a);
                for (let u = a; u < s.length; u++)
                    o[u] = this.field.add(r[u - a], s[u]);
                return new It(this.field,o)
            }
            subtract(n) {
                if (!this.field.equals(n.field))
                    throw new v("ModulusPolys do not have same ModulusGF field");
                return n.isZero() ? this : this.add(n.negative())
            }
            multiply(n) {
                return n instanceof It ? this.multiplyOther(n) : this.multiplyScalar(n)
            }
            multiplyOther(n) {
                if (!this.field.equals(n.field))
                    throw new v("ModulusPolys do not have same ModulusGF field");
                if (this.isZero() || n.isZero())
                    return new It(this.field,new Int32Array([0]));
                let r = this.coefficients
                  , s = r.length
                  , o = n.coefficients
                  , a = o.length
                  , u = new Int32Array(s + a - 1);
                for (let d = 0; d < s; d++) {
                    let h = r[d];
                    for (let p = 0; p < a; p++)
                        u[d + p] = this.field.add(u[d + p], this.field.multiply(h, o[p]))
                }
                return new It(this.field,u)
            }
            negative() {
                let n = this.coefficients.length
                  , r = new Int32Array(n);
                for (let s = 0; s < n; s++)
                    r[s] = this.field.subtract(0, this.coefficients[s]);
                return new It(this.field,r)
            }
            multiplyScalar(n) {
                if (n === 0)
                    return new It(this.field,new Int32Array([0]));
                if (n === 1)
                    return this;
                let r = this.coefficients.length
                  , s = new Int32Array(r);
                for (let o = 0; o < r; o++)
                    s[o] = this.field.multiply(this.coefficients[o], n);
                return new It(this.field,s)
            }
            multiplyByMonomial(n, r) {
                if (n < 0)
                    throw new v;
                if (r === 0)
                    return new It(this.field,new Int32Array([0]));
                let s = this.coefficients.length
                  , o = new Int32Array(s + n);
                for (let a = 0; a < s; a++)
                    o[a] = this.field.multiply(this.coefficients[a], r);
                return new It(this.field,o)
            }
            toString() {
                let n = new Ie;
                for (let r = this.getDegree(); r >= 0; r--) {
                    let s = this.getCoefficient(r);
                    s !== 0 && (s < 0 ? (n.append(" - "),
                    s = -s) : n.length() > 0 && n.append(" + "),
                    (r === 0 || s !== 1) && n.append(s),
                    r !== 0 && (r === 1 ? n.append("x") : (n.append("x^"),
                    n.append(r))))
                }
                return n.toString()
            }
        }
        class N2 {
            add(n, r) {
                return (n + r) % this.modulus
            }
            subtract(n, r) {
                return (this.modulus + n - r) % this.modulus
            }
            exp(n) {
                return this.expTable[n]
            }
            log(n) {
                if (n === 0)
                    throw new v;
                return this.logTable[n]
            }
            inverse(n) {
                if (n === 0)
                    throw new ao;
                return this.expTable[this.modulus - this.logTable[n] - 1]
            }
            multiply(n, r) {
                return n === 0 || r === 0 ? 0 : this.expTable[(this.logTable[n] + this.logTable[r]) % (this.modulus - 1)]
            }
            getSize() {
                return this.modulus
            }
            equals(n) {
                return n === this
            }
        }
        class ha extends N2 {
            constructor(n, r) {
                super(),
                this.modulus = n,
                this.expTable = new Int32Array(n),
                this.logTable = new Int32Array(n);
                let s = 1;
                for (let o = 0; o < n; o++)
                    this.expTable[o] = s,
                    s = s * r % n;
                for (let o = 0; o < n - 1; o++)
                    this.logTable[this.expTable[o]] = o;
                this.zero = new It(this,new Int32Array([0])),
                this.one = new It(this,new Int32Array([1]))
            }
            getZero() {
                return this.zero
            }
            getOne() {
                return this.one
            }
            buildMonomial(n, r) {
                if (n < 0)
                    throw new v;
                if (r === 0)
                    return this.zero;
                let s = new Int32Array(n + 1);
                return s[0] = r,
                new It(this,s)
            }
        }
        ha.PDF417_GF = new ha(ge.NUMBER_OF_CODEWORDS,3);
        class p1 {
            constructor() {
                this.field = ha.PDF417_GF
            }
            decode(n, r, s) {
                let o = new It(this.field,n)
                  , a = new Int32Array(r)
                  , u = !1;
                for (let R = r; R > 0; R--) {
                    let b = o.evaluateAt(this.field.exp(R));
                    a[r - R] = b,
                    b !== 0 && (u = !0)
                }
                if (!u)
                    return 0;
                let d = this.field.getOne();
                if (s != null)
                    for (const R of s) {
                        let b = this.field.exp(n.length - 1 - R)
                          , P = new It(this.field,new Int32Array([this.field.subtract(0, b), 1]));
                        d = d.multiply(P)
                    }
                let h = new It(this.field,a)
                  , p = this.runEuclideanAlgorithm(this.field.buildMonomial(r, 1), h, r)
                  , w = p[0]
                  , C = p[1]
                  , A = this.findErrorLocations(w)
                  , T = this.findErrorMagnitudes(C, w, A);
                for (let R = 0; R < A.length; R++) {
                    let b = n.length - 1 - this.field.log(A[R]);
                    if (b < 0)
                        throw B.getChecksumInstance();
                    n[b] = this.field.subtract(n[b], T[R])
                }
                return A.length
            }
            runEuclideanAlgorithm(n, r, s) {
                if (n.getDegree() < r.getDegree()) {
                    let A = n;
                    n = r,
                    r = A
                }
                let o = n
                  , a = r
                  , u = this.field.getZero()
                  , d = this.field.getOne();
                for (; a.getDegree() >= Math.round(s / 2); ) {
                    let A = o
                      , T = u;
                    if (o = a,
                    u = d,
                    o.isZero())
                        throw B.getChecksumInstance();
                    a = A;
                    let R = this.field.getZero()
                      , b = o.getCoefficient(o.getDegree())
                      , P = this.field.inverse(b);
                    for (; a.getDegree() >= o.getDegree() && !a.isZero(); ) {
                        let z = a.getDegree() - o.getDegree()
                          , Q = this.field.multiply(a.getCoefficient(a.getDegree()), P);
                        R = R.add(this.field.buildMonomial(z, Q)),
                        a = a.subtract(o.multiplyByMonomial(z, Q))
                    }
                    d = R.multiply(u).subtract(T).negative()
                }
                let h = d.getCoefficient(0);
                if (h === 0)
                    throw B.getChecksumInstance();
                let p = this.field.inverse(h)
                  , w = d.multiply(p)
                  , C = a.multiply(p);
                return [w, C]
            }
            findErrorLocations(n) {
                let r = n.getDegree()
                  , s = new Int32Array(r)
                  , o = 0;
                for (let a = 1; a < this.field.getSize() && o < r; a++)
                    n.evaluateAt(a) === 0 && (s[o] = this.field.inverse(a),
                    o++);
                if (o !== r)
                    throw B.getChecksumInstance();
                return s
            }
            findErrorMagnitudes(n, r, s) {
                let o = r.getDegree()
                  , a = new Int32Array(o);
                for (let p = 1; p <= o; p++)
                    a[o - p] = this.field.multiply(p, r.getCoefficient(p));
                let u = new It(this.field,a)
                  , d = s.length
                  , h = new Int32Array(d);
                for (let p = 0; p < d; p++) {
                    let w = this.field.inverse(s[p])
                      , C = this.field.subtract(0, n.evaluateAt(w))
                      , A = this.field.inverse(u.evaluateAt(w));
                    h[p] = this.field.multiply(C, A)
                }
                return h
            }
        }
        class zr {
            constructor(n, r, s, o, a) {
                n instanceof zr ? this.constructor_2(n) : this.constructor_1(n, r, s, o, a)
            }
            constructor_1(n, r, s, o, a) {
                const u = r == null || s == null
                  , d = o == null || a == null;
                if (u && d)
                    throw new j;
                u ? (r = new le(0,o.getY()),
                s = new le(0,a.getY())) : d && (o = new le(n.getWidth() - 1,r.getY()),
                a = new le(n.getWidth() - 1,s.getY())),
                this.image = n,
                this.topLeft = r,
                this.bottomLeft = s,
                this.topRight = o,
                this.bottomRight = a,
                this.minX = Math.trunc(Math.min(r.getX(), s.getX())),
                this.maxX = Math.trunc(Math.max(o.getX(), a.getX())),
                this.minY = Math.trunc(Math.min(r.getY(), o.getY())),
                this.maxY = Math.trunc(Math.max(s.getY(), a.getY()))
            }
            constructor_2(n) {
                this.image = n.image,
                this.topLeft = n.getTopLeft(),
                this.bottomLeft = n.getBottomLeft(),
                this.topRight = n.getTopRight(),
                this.bottomRight = n.getBottomRight(),
                this.minX = n.getMinX(),
                this.maxX = n.getMaxX(),
                this.minY = n.getMinY(),
                this.maxY = n.getMaxY()
            }
            static merge(n, r) {
                return n == null ? r : r == null ? n : new zr(n.image,n.topLeft,n.bottomLeft,r.topRight,r.bottomRight)
            }
            addMissingRows(n, r, s) {
                let o = this.topLeft
                  , a = this.bottomLeft
                  , u = this.topRight
                  , d = this.bottomRight;
                if (n > 0) {
                    let h = s ? this.topLeft : this.topRight
                      , p = Math.trunc(h.getY() - n);
                    p < 0 && (p = 0);
                    let w = new le(h.getX(),p);
                    s ? o = w : u = w
                }
                if (r > 0) {
                    let h = s ? this.bottomLeft : this.bottomRight
                      , p = Math.trunc(h.getY() + r);
                    p >= this.image.getHeight() && (p = this.image.getHeight() - 1);
                    let w = new le(h.getX(),p);
                    s ? a = w : d = w
                }
                return new zr(this.image,o,a,u,d)
            }
            getMinX() {
                return this.minX
            }
            getMaxX() {
                return this.maxX
            }
            getMinY() {
                return this.minY
            }
            getMaxY() {
                return this.maxY
            }
            getTopLeft() {
                return this.topLeft
            }
            getTopRight() {
                return this.topRight
            }
            getBottomLeft() {
                return this.bottomLeft
            }
            getBottomRight() {
                return this.bottomRight
            }
        }
        class _2 {
            constructor(n, r, s, o) {
                this.columnCount = n,
                this.errorCorrectionLevel = o,
                this.rowCountUpperPart = r,
                this.rowCountLowerPart = s,
                this.rowCount = r + s
            }
            getColumnCount() {
                return this.columnCount
            }
            getErrorCorrectionLevel() {
                return this.errorCorrectionLevel
            }
            getRowCount() {
                return this.rowCount
            }
            getRowCountUpperPart() {
                return this.rowCountUpperPart
            }
            getRowCountLowerPart() {
                return this.rowCountLowerPart
            }
        }
        class rs {
            constructor() {
                this.buffer = ""
            }
            static form(n, r) {
                let s = -1;
                function o(u, d, h, p, w, C) {
                    if (u === "%%")
                        return "%";
                    if (r[++s] === void 0)
                        return;
                    u = p ? parseInt(p.substr(1)) : void 0;
                    let A = w ? parseInt(w.substr(1)) : void 0, T;
                    switch (C) {
                    case "s":
                        T = r[s];
                        break;
                    case "c":
                        T = r[s][0];
                        break;
                    case "f":
                        T = parseFloat(r[s]).toFixed(u);
                        break;
                    case "p":
                        T = parseFloat(r[s]).toPrecision(u);
                        break;
                    case "e":
                        T = parseFloat(r[s]).toExponential(u);
                        break;
                    case "x":
                        T = parseInt(r[s]).toString(A || 16);
                        break;
                    case "d":
                        T = parseFloat(parseInt(r[s], A || 10).toPrecision(u)).toFixed(0);
                        break
                    }
                    T = typeof T == "object" ? JSON.stringify(T) : (+T).toString(A);
                    let R = parseInt(h)
                      , b = h && h[0] + "" == "0" ? "0" : " ";
                    for (; T.length < R; )
                        T = d !== void 0 ? T + b : b + T;
                    return T
                }
                let a = /%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g;
                return n.replace(a, o)
            }
            format(n, ...r) {
                this.buffer += rs.form(n, r)
            }
            toString() {
                return this.buffer
            }
        }
        class is {
            constructor(n) {
                this.boundingBox = new zr(n),
                this.codewords = new Array(n.getMaxY() - n.getMinY() + 1)
            }
            getCodewordNearby(n) {
                let r = this.getCodeword(n);
                if (r != null)
                    return r;
                for (let s = 1; s < is.MAX_NEARBY_DISTANCE; s++) {
                    let o = this.imageRowToCodewordIndex(n) - s;
                    if (o >= 0 && (r = this.codewords[o],
                    r != null) || (o = this.imageRowToCodewordIndex(n) + s,
                    o < this.codewords.length && (r = this.codewords[o],
                    r != null)))
                        return r
                }
                return null
            }
            imageRowToCodewordIndex(n) {
                return n - this.boundingBox.getMinY()
            }
            setCodeword(n, r) {
                this.codewords[this.imageRowToCodewordIndex(n)] = r
            }
            getCodeword(n) {
                return this.codewords[this.imageRowToCodewordIndex(n)]
            }
            getBoundingBox() {
                return this.boundingBox
            }
            getCodewords() {
                return this.codewords
            }
            toString() {
                const n = new rs;
                let r = 0;
                for (const s of this.codewords) {
                    if (s == null) {
                        n.format("%3d:    |   %n", r++);
                        continue
                    }
                    n.format("%3d: %3d|%3d%n", r++, s.getRowNumber(), s.getValue())
                }
                return n.toString()
            }
        }
        is.MAX_NEARBY_DISTANCE = 5;
        class ss {
            constructor() {
                this.values = new Map
            }
            setValue(n) {
                n = Math.trunc(n);
                let r = this.values.get(n);
                r == null && (r = 0),
                r++,
                this.values.set(n, r)
            }
            getValue() {
                let n = -1
                  , r = new Array;
                for (const [s,o] of this.values.entries()) {
                    const a = {
                        getKey: ()=>s,
                        getValue: ()=>o
                    };
                    a.getValue() > n ? (n = a.getValue(),
                    r = [],
                    r.push(a.getKey())) : a.getValue() === n && r.push(a.getKey())
                }
                return ge.toIntArray(r)
            }
            getConfidence(n) {
                return this.values.get(n)
            }
        }
        class x1 extends is {
            constructor(n, r) {
                super(n),
                this._isLeft = r
            }
            setRowNumbers() {
                for (let n of this.getCodewords())
                    n != null && n.setRowNumberAsRowIndicatorColumn()
            }
            adjustCompleteIndicatorColumnRowNumbers(n) {
                let r = this.getCodewords();
                this.setRowNumbers(),
                this.removeIncorrectCodewords(r, n);
                let s = this.getBoundingBox()
                  , o = this._isLeft ? s.getTopLeft() : s.getTopRight()
                  , a = this._isLeft ? s.getBottomLeft() : s.getBottomRight()
                  , u = this.imageRowToCodewordIndex(Math.trunc(o.getY()))
                  , d = this.imageRowToCodewordIndex(Math.trunc(a.getY()))
                  , h = -1
                  , p = 1
                  , w = 0;
                for (let C = u; C < d; C++) {
                    if (r[C] == null)
                        continue;
                    let A = r[C]
                      , T = A.getRowNumber() - h;
                    if (T === 0)
                        w++;
                    else if (T === 1)
                        p = Math.max(p, w),
                        w = 1,
                        h = A.getRowNumber();
                    else if (T < 0 || A.getRowNumber() >= n.getRowCount() || T > C)
                        r[C] = null;
                    else {
                        let R;
                        p > 2 ? R = (p - 2) * T : R = T;
                        let b = R >= C;
                        for (let P = 1; P <= R && !b; P++)
                            b = r[C - P] != null;
                        b ? r[C] = null : (h = A.getRowNumber(),
                        w = 1)
                    }
                }
            }
            getRowHeights() {
                let n = this.getBarcodeMetadata();
                if (n == null)
                    return null;
                this.adjustIncompleteIndicatorColumnRowNumbers(n);
                let r = new Int32Array(n.getRowCount());
                for (let s of this.getCodewords())
                    if (s != null) {
                        let o = s.getRowNumber();
                        if (o >= r.length)
                            continue;
                        r[o]++
                    }
                return r
            }
            adjustIncompleteIndicatorColumnRowNumbers(n) {
                let r = this.getBoundingBox()
                  , s = this._isLeft ? r.getTopLeft() : r.getTopRight()
                  , o = this._isLeft ? r.getBottomLeft() : r.getBottomRight()
                  , a = this.imageRowToCodewordIndex(Math.trunc(s.getY()))
                  , u = this.imageRowToCodewordIndex(Math.trunc(o.getY()))
                  , d = this.getCodewords()
                  , h = -1;
                for (let p = a; p < u; p++) {
                    if (d[p] == null)
                        continue;
                    let w = d[p];
                    w.setRowNumberAsRowIndicatorColumn();
                    let C = w.getRowNumber() - h;
                    C === 0 || (C === 1 ? h = w.getRowNumber() : w.getRowNumber() >= n.getRowCount() ? d[p] = null : h = w.getRowNumber())
                }
            }
            getBarcodeMetadata() {
                let n = this.getCodewords()
                  , r = new ss
                  , s = new ss
                  , o = new ss
                  , a = new ss;
                for (let d of n) {
                    if (d == null)
                        continue;
                    d.setRowNumberAsRowIndicatorColumn();
                    let h = d.getValue() % 30
                      , p = d.getRowNumber();
                    switch (this._isLeft || (p += 2),
                    p % 3) {
                    case 0:
                        s.setValue(h * 3 + 1);
                        break;
                    case 1:
                        a.setValue(h / 3),
                        o.setValue(h % 3);
                        break;
                    case 2:
                        r.setValue(h + 1);
                        break
                    }
                }
                if (r.getValue().length === 0 || s.getValue().length === 0 || o.getValue().length === 0 || a.getValue().length === 0 || r.getValue()[0] < 1 || s.getValue()[0] + o.getValue()[0] < ge.MIN_ROWS_IN_BARCODE || s.getValue()[0] + o.getValue()[0] > ge.MAX_ROWS_IN_BARCODE)
                    return null;
                let u = new _2(r.getValue()[0],s.getValue()[0],o.getValue()[0],a.getValue()[0]);
                return this.removeIncorrectCodewords(n, u),
                u
            }
            removeIncorrectCodewords(n, r) {
                for (let s = 0; s < n.length; s++) {
                    let o = n[s];
                    if (n[s] == null)
                        continue;
                    let a = o.getValue() % 30
                      , u = o.getRowNumber();
                    if (u > r.getRowCount()) {
                        n[s] = null;
                        continue
                    }
                    switch (this._isLeft || (u += 2),
                    u % 3) {
                    case 0:
                        a * 3 + 1 !== r.getRowCountUpperPart() && (n[s] = null);
                        break;
                    case 1:
                        (Math.trunc(a / 3) !== r.getErrorCorrectionLevel() || a % 3 !== r.getRowCountLowerPart()) && (n[s] = null);
                        break;
                    case 2:
                        a + 1 !== r.getColumnCount() && (n[s] = null);
                        break
                    }
                }
            }
            isLeft() {
                return this._isLeft
            }
            toString() {
                return "IsLeft: " + this._isLeft + `
` + super.toString()
            }
        }
        class os {
            constructor(n, r) {
                this.ADJUST_ROW_NUMBER_SKIP = 2,
                this.barcodeMetadata = n,
                this.barcodeColumnCount = n.getColumnCount(),
                this.boundingBox = r,
                this.detectionResultColumns = new Array(this.barcodeColumnCount + 2)
            }
            getDetectionResultColumns() {
                this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[0]),
                this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[this.barcodeColumnCount + 1]);
                let n = ge.MAX_CODEWORDS_IN_BARCODE, r;
                do
                    r = n,
                    n = this.adjustRowNumbersAndGetCount();
                while (n > 0 && n < r);
                return this.detectionResultColumns
            }
            adjustIndicatorColumnRowNumbers(n) {
                n != null && n.adjustCompleteIndicatorColumnRowNumbers(this.barcodeMetadata)
            }
            adjustRowNumbersAndGetCount() {
                let n = this.adjustRowNumbersByRow();
                if (n === 0)
                    return 0;
                for (let r = 1; r < this.barcodeColumnCount + 1; r++) {
                    let s = this.detectionResultColumns[r].getCodewords();
                    for (let o = 0; o < s.length; o++)
                        s[o] != null && (s[o].hasValidRowNumber() || this.adjustRowNumbers(r, o, s))
                }
                return n
            }
            adjustRowNumbersByRow() {
                return this.adjustRowNumbersFromBothRI(),
                this.adjustRowNumbersFromLRI() + this.adjustRowNumbersFromRRI()
            }
            adjustRowNumbersFromBothRI() {
                if (this.detectionResultColumns[0] == null || this.detectionResultColumns[this.barcodeColumnCount + 1] == null)
                    return;
                let n = this.detectionResultColumns[0].getCodewords()
                  , r = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords();
                for (let s = 0; s < n.length; s++)
                    if (n[s] != null && r[s] != null && n[s].getRowNumber() === r[s].getRowNumber())
                        for (let o = 1; o <= this.barcodeColumnCount; o++) {
                            let a = this.detectionResultColumns[o].getCodewords()[s];
                            a != null && (a.setRowNumber(n[s].getRowNumber()),
                            a.hasValidRowNumber() || (this.detectionResultColumns[o].getCodewords()[s] = null))
                        }
            }
            adjustRowNumbersFromRRI() {
                if (this.detectionResultColumns[this.barcodeColumnCount + 1] == null)
                    return 0;
                let n = 0
                  , r = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords();
                for (let s = 0; s < r.length; s++) {
                    if (r[s] == null)
                        continue;
                    let o = r[s].getRowNumber()
                      , a = 0;
                    for (let u = this.barcodeColumnCount + 1; u > 0 && a < this.ADJUST_ROW_NUMBER_SKIP; u--) {
                        let d = this.detectionResultColumns[u].getCodewords()[s];
                        d != null && (a = os.adjustRowNumberIfValid(o, a, d),
                        d.hasValidRowNumber() || n++)
                    }
                }
                return n
            }
            adjustRowNumbersFromLRI() {
                if (this.detectionResultColumns[0] == null)
                    return 0;
                let n = 0
                  , r = this.detectionResultColumns[0].getCodewords();
                for (let s = 0; s < r.length; s++) {
                    if (r[s] == null)
                        continue;
                    let o = r[s].getRowNumber()
                      , a = 0;
                    for (let u = 1; u < this.barcodeColumnCount + 1 && a < this.ADJUST_ROW_NUMBER_SKIP; u++) {
                        let d = this.detectionResultColumns[u].getCodewords()[s];
                        d != null && (a = os.adjustRowNumberIfValid(o, a, d),
                        d.hasValidRowNumber() || n++)
                    }
                }
                return n
            }
            static adjustRowNumberIfValid(n, r, s) {
                return s == null || s.hasValidRowNumber() || (s.isValidRowNumber(n) ? (s.setRowNumber(n),
                r = 0) : ++r),
                r
            }
            adjustRowNumbers(n, r, s) {
                if (!this.detectionResultColumns[n - 1])
                    return;
                let o = s[r]
                  , a = this.detectionResultColumns[n - 1].getCodewords()
                  , u = a;
                this.detectionResultColumns[n + 1] != null && (u = this.detectionResultColumns[n + 1].getCodewords());
                let d = new Array(14);
                d[2] = a[r],
                d[3] = u[r],
                r > 0 && (d[0] = s[r - 1],
                d[4] = a[r - 1],
                d[5] = u[r - 1]),
                r > 1 && (d[8] = s[r - 2],
                d[10] = a[r - 2],
                d[11] = u[r - 2]),
                r < s.length - 1 && (d[1] = s[r + 1],
                d[6] = a[r + 1],
                d[7] = u[r + 1]),
                r < s.length - 2 && (d[9] = s[r + 2],
                d[12] = a[r + 2],
                d[13] = u[r + 2]);
                for (let h of d)
                    if (os.adjustRowNumber(o, h))
                        return
            }
            static adjustRowNumber(n, r) {
                return r == null ? !1 : r.hasValidRowNumber() && r.getBucket() === n.getBucket() ? (n.setRowNumber(r.getRowNumber()),
                !0) : !1
            }
            getBarcodeColumnCount() {
                return this.barcodeColumnCount
            }
            getBarcodeRowCount() {
                return this.barcodeMetadata.getRowCount()
            }
            getBarcodeECLevel() {
                return this.barcodeMetadata.getErrorCorrectionLevel()
            }
            setBoundingBox(n) {
                this.boundingBox = n
            }
            getBoundingBox() {
                return this.boundingBox
            }
            setDetectionResultColumn(n, r) {
                this.detectionResultColumns[n] = r
            }
            getDetectionResultColumn(n) {
                return this.detectionResultColumns[n]
            }
            toString() {
                let n = this.detectionResultColumns[0];
                n == null && (n = this.detectionResultColumns[this.barcodeColumnCount + 1]);
                let r = new rs;
                for (let s = 0; s < n.getCodewords().length; s++) {
                    r.format("CW %3d:", s);
                    for (let o = 0; o < this.barcodeColumnCount + 2; o++) {
                        if (this.detectionResultColumns[o] == null) {
                            r.format("    |   ");
                            continue
                        }
                        let a = this.detectionResultColumns[o].getCodewords()[s];
                        if (a == null) {
                            r.format("    |   ");
                            continue
                        }
                        r.format(" %3d|%3d", a.getRowNumber(), a.getValue())
                    }
                    r.format("%n")
                }
                return r.toString()
            }
        }
        class ls {
            constructor(n, r, s, o) {
                this.rowNumber = ls.BARCODE_ROW_UNKNOWN,
                this.startX = Math.trunc(n),
                this.endX = Math.trunc(r),
                this.bucket = Math.trunc(s),
                this.value = Math.trunc(o)
            }
            hasValidRowNumber() {
                return this.isValidRowNumber(this.rowNumber)
            }
            isValidRowNumber(n) {
                return n !== ls.BARCODE_ROW_UNKNOWN && this.bucket === n % 3 * 3
            }
            setRowNumberAsRowIndicatorColumn() {
                this.rowNumber = Math.trunc(Math.trunc(this.value / 30) * 3 + Math.trunc(this.bucket / 3))
            }
            getWidth() {
                return this.endX - this.startX
            }
            getStartX() {
                return this.startX
            }
            getEndX() {
                return this.endX
            }
            getBucket() {
                return this.bucket
            }
            getValue() {
                return this.value
            }
            getRowNumber() {
                return this.rowNumber
            }
            setRowNumber(n) {
                this.rowNumber = n
            }
            toString() {
                return this.rowNumber + "|" + this.value
            }
        }
        ls.BARCODE_ROW_UNKNOWN = -1;
        class Xt {
            static initialize() {
                for (let n = 0; n < ge.SYMBOL_TABLE.length; n++) {
                    let r = ge.SYMBOL_TABLE[n]
                      , s = r & 1;
                    for (let o = 0; o < ge.BARS_IN_MODULE; o++) {
                        let a = 0;
                        for (; (r & 1) === s; )
                            a += 1,
                            r >>= 1;
                        s = r & 1,
                        Xt.RATIOS_TABLE[n] || (Xt.RATIOS_TABLE[n] = new Array(ge.BARS_IN_MODULE)),
                        Xt.RATIOS_TABLE[n][ge.BARS_IN_MODULE - o - 1] = Math.fround(a / ge.MODULES_IN_CODEWORD)
                    }
                }
                this.bSymbolTableReady = !0
            }
            static getDecodedValue(n) {
                let r = Xt.getDecodedCodewordValue(Xt.sampleBitCounts(n));
                return r !== -1 ? r : Xt.getClosestDecodedValue(n)
            }
            static sampleBitCounts(n) {
                let r = Ne.sum(n)
                  , s = new Int32Array(ge.BARS_IN_MODULE)
                  , o = 0
                  , a = 0;
                for (let u = 0; u < ge.MODULES_IN_CODEWORD; u++) {
                    let d = r / (2 * ge.MODULES_IN_CODEWORD) + u * r / ge.MODULES_IN_CODEWORD;
                    a + n[o] <= d && (a += n[o],
                    o++),
                    s[o]++
                }
                return s
            }
            static getDecodedCodewordValue(n) {
                let r = Xt.getBitValue(n);
                return ge.getCodeword(r) === -1 ? -1 : r
            }
            static getBitValue(n) {
                let r = 0;
                for (let s = 0; s < n.length; s++)
                    for (let o = 0; o < n[s]; o++)
                        r = r << 1 | (s % 2 === 0 ? 1 : 0);
                return Math.trunc(r)
            }
            static getClosestDecodedValue(n) {
                let r = Ne.sum(n)
                  , s = new Array(ge.BARS_IN_MODULE);
                if (r > 1)
                    for (let u = 0; u < s.length; u++)
                        s[u] = Math.fround(n[u] / r);
                let o = uo.MAX_VALUE
                  , a = -1;
                this.bSymbolTableReady || Xt.initialize();
                for (let u = 0; u < Xt.RATIOS_TABLE.length; u++) {
                    let d = 0
                      , h = Xt.RATIOS_TABLE[u];
                    for (let p = 0; p < ge.BARS_IN_MODULE; p++) {
                        let w = Math.fround(h[p] - s[p]);
                        if (d += Math.fround(w * w),
                        d >= o)
                            break
                    }
                    d < o && (o = d,
                    a = ge.SYMBOL_TABLE[u])
                }
                return a
            }
        }
        Xt.bSymbolTableReady = !1,
        Xt.RATIOS_TABLE = new Array(ge.SYMBOL_TABLE.length).map(E=>new Array(ge.BARS_IN_MODULE));
        class m1 {
            constructor() {
                this.segmentCount = -1,
                this.fileSize = -1,
                this.timestamp = -1,
                this.checksum = -1
            }
            getSegmentIndex() {
                return this.segmentIndex
            }
            setSegmentIndex(n) {
                this.segmentIndex = n
            }
            getFileId() {
                return this.fileId
            }
            setFileId(n) {
                this.fileId = n
            }
            getOptionalData() {
                return this.optionalData
            }
            setOptionalData(n) {
                this.optionalData = n
            }
            isLastSegment() {
                return this.lastSegment
            }
            setLastSegment(n) {
                this.lastSegment = n
            }
            getSegmentCount() {
                return this.segmentCount
            }
            setSegmentCount(n) {
                this.segmentCount = n
            }
            getSender() {
                return this.sender || null
            }
            setSender(n) {
                this.sender = n
            }
            getAddressee() {
                return this.addressee || null
            }
            setAddressee(n) {
                this.addressee = n
            }
            getFileName() {
                return this.fileName
            }
            setFileName(n) {
                this.fileName = n
            }
            getFileSize() {
                return this.fileSize
            }
            setFileSize(n) {
                this.fileSize = n
            }
            getChecksum() {
                return this.checksum
            }
            setChecksum(n) {
                this.checksum = n
            }
            getTimestamp() {
                return this.timestamp
            }
            setTimestamp(n) {
                this.timestamp = n
            }
        }
        class w1 {
            static parseLong(n, r=void 0) {
                return parseInt(n, r)
            }
        }
        class y1 extends x {
        }
        y1.kind = "NullPointerException";
        class R2 {
            writeBytes(n) {
                this.writeBytesOffset(n, 0, n.length)
            }
            writeBytesOffset(n, r, s) {
                if (n == null)
                    throw new y1;
                if (r < 0 || r > n.length || s < 0 || r + s > n.length || r + s < 0)
                    throw new X;
                if (s === 0)
                    return;
                for (let o = 0; o < s; o++)
                    this.write(n[r + o])
            }
            flush() {}
            close() {}
        }
        class O2 extends x {
        }
        class b2 extends R2 {
            constructor(n=32) {
                if (super(),
                this.count = 0,
                n < 0)
                    throw new v("Negative initial size: " + n);
                this.buf = new Uint8Array(n)
            }
            ensureCapacity(n) {
                n - this.buf.length > 0 && this.grow(n)
            }
            grow(n) {
                let s = this.buf.length << 1;
                if (s - n < 0 && (s = n),
                s < 0) {
                    if (n < 0)
                        throw new O2;
                    s = N.MAX_VALUE
                }
                this.buf = _.copyOfUint8Array(this.buf, s)
            }
            write(n) {
                this.ensureCapacity(this.count + 1),
                this.buf[this.count] = n,
                this.count += 1
            }
            writeBytesOffset(n, r, s) {
                if (r < 0 || r > n.length || s < 0 || r + s - n.length > 0)
                    throw new X;
                this.ensureCapacity(this.count + s),
                M.arraycopy(n, r, this.buf, this.count, s),
                this.count += s
            }
            writeTo(n) {
                n.writeBytesOffset(this.buf, 0, this.count)
            }
            reset() {
                this.count = 0
            }
            toByteArray() {
                return _.copyOfUint8Array(this.buf, this.count)
            }
            size() {
                return this.count
            }
            toString(n) {
                return n ? typeof n == "string" ? this.toString_string(n) : this.toString_number(n) : this.toString_void()
            }
            toString_void() {
                return new String(this.buf).toString()
            }
            toString_string(n) {
                return new String(this.buf).toString()
            }
            toString_number(n) {
                return new String(this.buf).toString()
            }
            close() {}
        }
        var Pe;
        (function(E) {
            E[E.ALPHA = 0] = "ALPHA",
            E[E.LOWER = 1] = "LOWER",
            E[E.MIXED = 2] = "MIXED",
            E[E.PUNCT = 3] = "PUNCT",
            E[E.ALPHA_SHIFT = 4] = "ALPHA_SHIFT",
            E[E.PUNCT_SHIFT = 5] = "PUNCT_SHIFT"
        }
        )(Pe || (Pe = {}));
        function E1() {
            if (typeof window < "u")
                return window.BigInt || null;
            if (typeof cs < "u")
                return cs.BigInt || null;
            if (typeof self < "u")
                return self.BigInt || null;
            throw new Error("Can't search globals for BigInt!")
        }
        let mo;
        function fr(E) {
            if (typeof mo > "u" && (mo = E1()),
            mo === null)
                throw new Error("BigInt is not supported!");
            return mo(E)
        }
        function D2() {
            let E = [];
            E[0] = fr(1);
            let n = fr(900);
            E[1] = n;
            for (let r = 2; r < 16; r++)
                E[r] = E[r - 1] * n;
            return E
        }
        class U {
            static decode(n, r) {
                let s = new Ie("")
                  , o = W.ISO8859_1;
                s.enableDecoding(o);
                let a = 1
                  , u = n[a++]
                  , d = new m1;
                for (; a < n[0]; ) {
                    switch (u) {
                    case U.TEXT_COMPACTION_MODE_LATCH:
                        a = U.textCompaction(n, a, s);
                        break;
                    case U.BYTE_COMPACTION_MODE_LATCH:
                    case U.BYTE_COMPACTION_MODE_LATCH_6:
                        a = U.byteCompaction(u, n, o, a, s);
                        break;
                    case U.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                        s.append(n[a++]);
                        break;
                    case U.NUMERIC_COMPACTION_MODE_LATCH:
                        a = U.numericCompaction(n, a, s);
                        break;
                    case U.ECI_CHARSET:
                        W.getCharacterSetECIByValue(n[a++]);
                        break;
                    case U.ECI_GENERAL_PURPOSE:
                        a += 2;
                        break;
                    case U.ECI_USER_DEFINED:
                        a++;
                        break;
                    case U.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                        a = U.decodeMacroBlock(n, a, d);
                        break;
                    case U.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                    case U.MACRO_PDF417_TERMINATOR:
                        throw new F;
                    default:
                        a--,
                        a = U.textCompaction(n, a, s);
                        break
                    }
                    if (a < n.length)
                        u = n[a++];
                    else
                        throw F.getFormatInstance()
                }
                if (s.length() === 0)
                    throw F.getFormatInstance();
                let h = new Ji(null,s.toString(),null,r);
                return h.setOther(d),
                h
            }
            static decodeMacroBlock(n, r, s) {
                if (r + U.NUMBER_OF_SEQUENCE_CODEWORDS > n[0])
                    throw F.getFormatInstance();
                let o = new Int32Array(U.NUMBER_OF_SEQUENCE_CODEWORDS);
                for (let d = 0; d < U.NUMBER_OF_SEQUENCE_CODEWORDS; d++,
                r++)
                    o[d] = n[r];
                s.setSegmentIndex(N.parseInt(U.decodeBase900toBase10(o, U.NUMBER_OF_SEQUENCE_CODEWORDS)));
                let a = new Ie;
                r = U.textCompaction(n, r, a),
                s.setFileId(a.toString());
                let u = -1;
                for (n[r] === U.BEGIN_MACRO_PDF417_OPTIONAL_FIELD && (u = r + 1); r < n[0]; )
                    switch (n[r]) {
                    case U.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                        switch (r++,
                        n[r]) {
                        case U.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME:
                            let d = new Ie;
                            r = U.textCompaction(n, r + 1, d),
                            s.setFileName(d.toString());
                            break;
                        case U.MACRO_PDF417_OPTIONAL_FIELD_SENDER:
                            let h = new Ie;
                            r = U.textCompaction(n, r + 1, h),
                            s.setSender(h.toString());
                            break;
                        case U.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE:
                            let p = new Ie;
                            r = U.textCompaction(n, r + 1, p),
                            s.setAddressee(p.toString());
                            break;
                        case U.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT:
                            let w = new Ie;
                            r = U.numericCompaction(n, r + 1, w),
                            s.setSegmentCount(N.parseInt(w.toString()));
                            break;
                        case U.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP:
                            let C = new Ie;
                            r = U.numericCompaction(n, r + 1, C),
                            s.setTimestamp(w1.parseLong(C.toString()));
                            break;
                        case U.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM:
                            let A = new Ie;
                            r = U.numericCompaction(n, r + 1, A),
                            s.setChecksum(N.parseInt(A.toString()));
                            break;
                        case U.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE:
                            let T = new Ie;
                            r = U.numericCompaction(n, r + 1, T),
                            s.setFileSize(w1.parseLong(T.toString()));
                            break;
                        default:
                            throw F.getFormatInstance()
                        }
                        break;
                    case U.MACRO_PDF417_TERMINATOR:
                        r++,
                        s.setLastSegment(!0);
                        break;
                    default:
                        throw F.getFormatInstance()
                    }
                if (u !== -1) {
                    let d = r - u;
                    s.isLastSegment() && d--,
                    s.setOptionalData(_.copyOfRange(n, u, u + d))
                }
                return r
            }
            static textCompaction(n, r, s) {
                let o = new Int32Array((n[0] - r) * 2)
                  , a = new Int32Array((n[0] - r) * 2)
                  , u = 0
                  , d = !1;
                for (; r < n[0] && !d; ) {
                    let h = n[r++];
                    if (h < U.TEXT_COMPACTION_MODE_LATCH)
                        o[u] = h / 30,
                        o[u + 1] = h % 30,
                        u += 2;
                    else
                        switch (h) {
                        case U.TEXT_COMPACTION_MODE_LATCH:
                            o[u++] = U.TEXT_COMPACTION_MODE_LATCH;
                            break;
                        case U.BYTE_COMPACTION_MODE_LATCH:
                        case U.BYTE_COMPACTION_MODE_LATCH_6:
                        case U.NUMERIC_COMPACTION_MODE_LATCH:
                        case U.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                        case U.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                        case U.MACRO_PDF417_TERMINATOR:
                            r--,
                            d = !0;
                            break;
                        case U.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                            o[u] = U.MODE_SHIFT_TO_BYTE_COMPACTION_MODE,
                            h = n[r++],
                            a[u] = h,
                            u++;
                            break
                        }
                }
                return U.decodeTextCompaction(o, a, u, s),
                r
            }
            static decodeTextCompaction(n, r, s, o) {
                let a = Pe.ALPHA
                  , u = Pe.ALPHA
                  , d = 0;
                for (; d < s; ) {
                    let h = n[d]
                      , p = "";
                    switch (a) {
                    case Pe.ALPHA:
                        if (h < 26)
                            p = String.fromCharCode(65 + h);
                        else
                            switch (h) {
                            case 26:
                                p = " ";
                                break;
                            case U.LL:
                                a = Pe.LOWER;
                                break;
                            case U.ML:
                                a = Pe.MIXED;
                                break;
                            case U.PS:
                                u = a,
                                a = Pe.PUNCT_SHIFT;
                                break;
                            case U.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                o.append(r[d]);
                                break;
                            case U.TEXT_COMPACTION_MODE_LATCH:
                                a = Pe.ALPHA;
                                break
                            }
                        break;
                    case Pe.LOWER:
                        if (h < 26)
                            p = String.fromCharCode(97 + h);
                        else
                            switch (h) {
                            case 26:
                                p = " ";
                                break;
                            case U.AS:
                                u = a,
                                a = Pe.ALPHA_SHIFT;
                                break;
                            case U.ML:
                                a = Pe.MIXED;
                                break;
                            case U.PS:
                                u = a,
                                a = Pe.PUNCT_SHIFT;
                                break;
                            case U.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                o.append(r[d]);
                                break;
                            case U.TEXT_COMPACTION_MODE_LATCH:
                                a = Pe.ALPHA;
                                break
                            }
                        break;
                    case Pe.MIXED:
                        if (h < U.PL)
                            p = U.MIXED_CHARS[h];
                        else
                            switch (h) {
                            case U.PL:
                                a = Pe.PUNCT;
                                break;
                            case 26:
                                p = " ";
                                break;
                            case U.LL:
                                a = Pe.LOWER;
                                break;
                            case U.AL:
                                a = Pe.ALPHA;
                                break;
                            case U.PS:
                                u = a,
                                a = Pe.PUNCT_SHIFT;
                                break;
                            case U.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                o.append(r[d]);
                                break;
                            case U.TEXT_COMPACTION_MODE_LATCH:
                                a = Pe.ALPHA;
                                break
                            }
                        break;
                    case Pe.PUNCT:
                        if (h < U.PAL)
                            p = U.PUNCT_CHARS[h];
                        else
                            switch (h) {
                            case U.PAL:
                                a = Pe.ALPHA;
                                break;
                            case U.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                o.append(r[d]);
                                break;
                            case U.TEXT_COMPACTION_MODE_LATCH:
                                a = Pe.ALPHA;
                                break
                            }
                        break;
                    case Pe.ALPHA_SHIFT:
                        if (a = u,
                        h < 26)
                            p = String.fromCharCode(65 + h);
                        else
                            switch (h) {
                            case 26:
                                p = " ";
                                break;
                            case U.TEXT_COMPACTION_MODE_LATCH:
                                a = Pe.ALPHA;
                                break
                            }
                        break;
                    case Pe.PUNCT_SHIFT:
                        if (a = u,
                        h < U.PAL)
                            p = U.PUNCT_CHARS[h];
                        else
                            switch (h) {
                            case U.PAL:
                                a = Pe.ALPHA;
                                break;
                            case U.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                o.append(r[d]);
                                break;
                            case U.TEXT_COMPACTION_MODE_LATCH:
                                a = Pe.ALPHA;
                                break
                            }
                        break
                    }
                    p !== "" && o.append(p),
                    d++
                }
            }
            static byteCompaction(n, r, s, o, a) {
                let u = new b2
                  , d = 0
                  , h = 0
                  , p = !1;
                switch (n) {
                case U.BYTE_COMPACTION_MODE_LATCH:
                    let w = new Int32Array(6)
                      , C = r[o++];
                    for (; o < r[0] && !p; )
                        switch (w[d++] = C,
                        h = 900 * h + C,
                        C = r[o++],
                        C) {
                        case U.TEXT_COMPACTION_MODE_LATCH:
                        case U.BYTE_COMPACTION_MODE_LATCH:
                        case U.NUMERIC_COMPACTION_MODE_LATCH:
                        case U.BYTE_COMPACTION_MODE_LATCH_6:
                        case U.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                        case U.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                        case U.MACRO_PDF417_TERMINATOR:
                            o--,
                            p = !0;
                            break;
                        default:
                            if (d % 5 === 0 && d > 0) {
                                for (let A = 0; A < 6; ++A)
                                    u.write(Number(fr(h) >> fr(8 * (5 - A))));
                                h = 0,
                                d = 0
                            }
                            break
                        }
                    o === r[0] && C < U.TEXT_COMPACTION_MODE_LATCH && (w[d++] = C);
                    for (let A = 0; A < d; A++)
                        u.write(w[A]);
                    break;
                case U.BYTE_COMPACTION_MODE_LATCH_6:
                    for (; o < r[0] && !p; ) {
                        let A = r[o++];
                        if (A < U.TEXT_COMPACTION_MODE_LATCH)
                            d++,
                            h = 900 * h + A;
                        else
                            switch (A) {
                            case U.TEXT_COMPACTION_MODE_LATCH:
                            case U.BYTE_COMPACTION_MODE_LATCH:
                            case U.NUMERIC_COMPACTION_MODE_LATCH:
                            case U.BYTE_COMPACTION_MODE_LATCH_6:
                            case U.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                            case U.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                            case U.MACRO_PDF417_TERMINATOR:
                                o--,
                                p = !0;
                                break
                            }
                        if (d % 5 === 0 && d > 0) {
                            for (let T = 0; T < 6; ++T)
                                u.write(Number(fr(h) >> fr(8 * (5 - T))));
                            h = 0,
                            d = 0
                        }
                    }
                    break
                }
                return a.append(Ue.decode(u.toByteArray(), s)),
                o
            }
            static numericCompaction(n, r, s) {
                let o = 0
                  , a = !1
                  , u = new Int32Array(U.MAX_NUMERIC_CODEWORDS);
                for (; r < n[0] && !a; ) {
                    let d = n[r++];
                    if (r === n[0] && (a = !0),
                    d < U.TEXT_COMPACTION_MODE_LATCH)
                        u[o] = d,
                        o++;
                    else
                        switch (d) {
                        case U.TEXT_COMPACTION_MODE_LATCH:
                        case U.BYTE_COMPACTION_MODE_LATCH:
                        case U.BYTE_COMPACTION_MODE_LATCH_6:
                        case U.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                        case U.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                        case U.MACRO_PDF417_TERMINATOR:
                            r--,
                            a = !0;
                            break
                        }
                    (o % U.MAX_NUMERIC_CODEWORDS === 0 || d === U.NUMERIC_COMPACTION_MODE_LATCH || a) && o > 0 && (s.append(U.decodeBase900toBase10(u, o)),
                    o = 0)
                }
                return r
            }
            static decodeBase900toBase10(n, r) {
                let s = fr(0);
                for (let a = 0; a < r; a++)
                    s += U.EXP900[r - a - 1] * fr(n[a]);
                let o = s.toString();
                if (o.charAt(0) !== "1")
                    throw new F;
                return o.substring(1)
            }
        }
        U.TEXT_COMPACTION_MODE_LATCH = 900,
        U.BYTE_COMPACTION_MODE_LATCH = 901,
        U.NUMERIC_COMPACTION_MODE_LATCH = 902,
        U.BYTE_COMPACTION_MODE_LATCH_6 = 924,
        U.ECI_USER_DEFINED = 925,
        U.ECI_GENERAL_PURPOSE = 926,
        U.ECI_CHARSET = 927,
        U.BEGIN_MACRO_PDF417_CONTROL_BLOCK = 928,
        U.BEGIN_MACRO_PDF417_OPTIONAL_FIELD = 923,
        U.MACRO_PDF417_TERMINATOR = 922,
        U.MODE_SHIFT_TO_BYTE_COMPACTION_MODE = 913,
        U.MAX_NUMERIC_CODEWORDS = 15,
        U.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME = 0,
        U.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT = 1,
        U.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP = 2,
        U.MACRO_PDF417_OPTIONAL_FIELD_SENDER = 3,
        U.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE = 4,
        U.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE = 5,
        U.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM = 6,
        U.PL = 25,
        U.LL = 27,
        U.AS = 27,
        U.ML = 28,
        U.AL = 28,
        U.PS = 29,
        U.PAL = 29,
        U.PUNCT_CHARS = `;<>@[\\]_\`~!\r	,:
-.$/"|*()?{}'`,
        U.MIXED_CHARS = "0123456789&\r	,:#-.$/+%*=^",
        U.EXP900 = E1() ? D2() : [],
        U.NUMBER_OF_SEQUENCE_CODEWORDS = 2;
        class Ce {
            constructor() {}
            static decode(n, r, s, o, a, u, d) {
                let h = new zr(n,r,s,o,a), p = null, w = null, C;
                for (let R = !0; ; R = !1) {
                    if (r != null && (p = Ce.getRowIndicatorColumn(n, h, r, !0, u, d)),
                    o != null && (w = Ce.getRowIndicatorColumn(n, h, o, !1, u, d)),
                    C = Ce.merge(p, w),
                    C == null)
                        throw j.getNotFoundInstance();
                    let b = C.getBoundingBox();
                    if (R && b != null && (b.getMinY() < h.getMinY() || b.getMaxY() > h.getMaxY()))
                        h = b;
                    else
                        break
                }
                C.setBoundingBox(h);
                let A = C.getBarcodeColumnCount() + 1;
                C.setDetectionResultColumn(0, p),
                C.setDetectionResultColumn(A, w);
                let T = p != null;
                for (let R = 1; R <= A; R++) {
                    let b = T ? R : A - R;
                    if (C.getDetectionResultColumn(b) !== void 0)
                        continue;
                    let P;
                    b === 0 || b === A ? P = new x1(h,b === 0) : P = new is(h),
                    C.setDetectionResultColumn(b, P);
                    let z = -1
                      , Q = z;
                    for (let J = h.getMinY(); J <= h.getMaxY(); J++) {
                        if (z = Ce.getStartColumn(C, b, J, T),
                        z < 0 || z > h.getMaxX()) {
                            if (Q === -1)
                                continue;
                            z = Q
                        }
                        let Y = Ce.detectCodeword(n, h.getMinX(), h.getMaxX(), T, z, J, u, d);
                        Y != null && (P.setCodeword(J, Y),
                        Q = z,
                        u = Math.min(u, Y.getWidth()),
                        d = Math.max(d, Y.getWidth()))
                    }
                }
                return Ce.createDecoderResult(C)
            }
            static merge(n, r) {
                if (n == null && r == null)
                    return null;
                let s = Ce.getBarcodeMetadata(n, r);
                if (s == null)
                    return null;
                let o = zr.merge(Ce.adjustBoundingBox(n), Ce.adjustBoundingBox(r));
                return new os(s,o)
            }
            static adjustBoundingBox(n) {
                if (n == null)
                    return null;
                let r = n.getRowHeights();
                if (r == null)
                    return null;
                let s = Ce.getMax(r)
                  , o = 0;
                for (let d of r)
                    if (o += s - d,
                    d > 0)
                        break;
                let a = n.getCodewords();
                for (let d = 0; o > 0 && a[d] == null; d++)
                    o--;
                let u = 0;
                for (let d = r.length - 1; d >= 0 && (u += s - r[d],
                !(r[d] > 0)); d--)
                    ;
                for (let d = a.length - 1; u > 0 && a[d] == null; d--)
                    u--;
                return n.getBoundingBox().addMissingRows(o, u, n.isLeft())
            }
            static getMax(n) {
                let r = -1;
                for (let s of n)
                    r = Math.max(r, s);
                return r
            }
            static getBarcodeMetadata(n, r) {
                let s;
                if (n == null || (s = n.getBarcodeMetadata()) == null)
                    return r == null ? null : r.getBarcodeMetadata();
                let o;
                return r == null || (o = r.getBarcodeMetadata()) == null ? s : s.getColumnCount() !== o.getColumnCount() && s.getErrorCorrectionLevel() !== o.getErrorCorrectionLevel() && s.getRowCount() !== o.getRowCount() ? null : s
            }
            static getRowIndicatorColumn(n, r, s, o, a, u) {
                let d = new x1(r,o);
                for (let h = 0; h < 2; h++) {
                    let p = h === 0 ? 1 : -1
                      , w = Math.trunc(Math.trunc(s.getX()));
                    for (let C = Math.trunc(Math.trunc(s.getY())); C <= r.getMaxY() && C >= r.getMinY(); C += p) {
                        let A = Ce.detectCodeword(n, 0, n.getWidth(), o, w, C, a, u);
                        A != null && (d.setCodeword(C, A),
                        o ? w = A.getStartX() : w = A.getEndX())
                    }
                }
                return d
            }
            static adjustCodewordCount(n, r) {
                let s = r[0][1]
                  , o = s.getValue()
                  , a = n.getBarcodeColumnCount() * n.getBarcodeRowCount() - Ce.getNumberOfECCodeWords(n.getBarcodeECLevel());
                if (o.length === 0) {
                    if (a < 1 || a > ge.MAX_CODEWORDS_IN_BARCODE)
                        throw j.getNotFoundInstance();
                    s.setValue(a)
                } else
                    o[0] !== a && s.setValue(a)
            }
            static createDecoderResult(n) {
                let r = Ce.createBarcodeMatrix(n);
                Ce.adjustCodewordCount(n, r);
                let s = new Array
                  , o = new Int32Array(n.getBarcodeRowCount() * n.getBarcodeColumnCount())
                  , a = []
                  , u = new Array;
                for (let h = 0; h < n.getBarcodeRowCount(); h++)
                    for (let p = 0; p < n.getBarcodeColumnCount(); p++) {
                        let w = r[h][p + 1].getValue()
                          , C = h * n.getBarcodeColumnCount() + p;
                        w.length === 0 ? s.push(C) : w.length === 1 ? o[C] = w[0] : (u.push(C),
                        a.push(w))
                    }
                let d = new Array(a.length);
                for (let h = 0; h < d.length; h++)
                    d[h] = a[h];
                return Ce.createDecoderResultFromAmbiguousValues(n.getBarcodeECLevel(), o, ge.toIntArray(s), ge.toIntArray(u), d)
            }
            static createDecoderResultFromAmbiguousValues(n, r, s, o, a) {
                let u = new Int32Array(o.length)
                  , d = 100;
                for (; d-- > 0; ) {
                    for (let h = 0; h < u.length; h++)
                        r[o[h]] = a[h][u[h]];
                    try {
                        return Ce.decodeCodewords(r, n, s)
                    } catch (h) {
                        if (!(h instanceof B))
                            throw h
                    }
                    if (u.length === 0)
                        throw B.getChecksumInstance();
                    for (let h = 0; h < u.length; h++)
                        if (u[h] < a[h].length - 1) {
                            u[h]++;
                            break
                        } else if (u[h] = 0,
                        h === u.length - 1)
                            throw B.getChecksumInstance()
                }
                throw B.getChecksumInstance()
            }
            static createBarcodeMatrix(n) {
                let r = Array.from({
                    length: n.getBarcodeRowCount()
                }, ()=>new Array(n.getBarcodeColumnCount() + 2));
                for (let o = 0; o < r.length; o++)
                    for (let a = 0; a < r[o].length; a++)
                        r[o][a] = new ss;
                let s = 0;
                for (let o of n.getDetectionResultColumns()) {
                    if (o != null) {
                        for (let a of o.getCodewords())
                            if (a != null) {
                                let u = a.getRowNumber();
                                if (u >= 0) {
                                    if (u >= r.length)
                                        continue;
                                    r[u][s].setValue(a.getValue())
                                }
                            }
                    }
                    s++
                }
                return r
            }
            static isValidBarcodeColumn(n, r) {
                return r >= 0 && r <= n.getBarcodeColumnCount() + 1
            }
            static getStartColumn(n, r, s, o) {
                let a = o ? 1 : -1
                  , u = null;
                if (Ce.isValidBarcodeColumn(n, r - a) && (u = n.getDetectionResultColumn(r - a).getCodeword(s)),
                u != null)
                    return o ? u.getEndX() : u.getStartX();
                if (u = n.getDetectionResultColumn(r).getCodewordNearby(s),
                u != null)
                    return o ? u.getStartX() : u.getEndX();
                if (Ce.isValidBarcodeColumn(n, r - a) && (u = n.getDetectionResultColumn(r - a).getCodewordNearby(s)),
                u != null)
                    return o ? u.getEndX() : u.getStartX();
                let d = 0;
                for (; Ce.isValidBarcodeColumn(n, r - a); ) {
                    r -= a;
                    for (let h of n.getDetectionResultColumn(r).getCodewords())
                        if (h != null)
                            return (o ? h.getEndX() : h.getStartX()) + a * d * (h.getEndX() - h.getStartX());
                    d++
                }
                return o ? n.getBoundingBox().getMinX() : n.getBoundingBox().getMaxX()
            }
            static detectCodeword(n, r, s, o, a, u, d, h) {
                a = Ce.adjustCodewordStartColumn(n, r, s, o, a, u);
                let p = Ce.getModuleBitCount(n, r, s, o, a, u);
                if (p == null)
                    return null;
                let w, C = Ne.sum(p);
                if (o)
                    w = a + C;
                else {
                    for (let R = 0; R < p.length / 2; R++) {
                        let b = p[R];
                        p[R] = p[p.length - 1 - R],
                        p[p.length - 1 - R] = b
                    }
                    w = a,
                    a = w - C
                }
                if (!Ce.checkCodewordSkew(C, d, h))
                    return null;
                let A = Xt.getDecodedValue(p)
                  , T = ge.getCodeword(A);
                return T === -1 ? null : new ls(a,w,Ce.getCodewordBucketNumber(A),T)
            }
            static getModuleBitCount(n, r, s, o, a, u) {
                let d = a
                  , h = new Int32Array(8)
                  , p = 0
                  , w = o ? 1 : -1
                  , C = o;
                for (; (o ? d < s : d >= r) && p < h.length; )
                    n.get(d, u) === C ? (h[p]++,
                    d += w) : (p++,
                    C = !C);
                return p === h.length || d === (o ? s : r) && p === h.length - 1 ? h : null
            }
            static getNumberOfECCodeWords(n) {
                return 2 << n
            }
            static adjustCodewordStartColumn(n, r, s, o, a, u) {
                let d = a
                  , h = o ? -1 : 1;
                for (let p = 0; p < 2; p++) {
                    for (; (o ? d >= r : d < s) && o === n.get(d, u); ) {
                        if (Math.abs(a - d) > Ce.CODEWORD_SKEW_SIZE)
                            return a;
                        d += h
                    }
                    h = -h,
                    o = !o
                }
                return d
            }
            static checkCodewordSkew(n, r, s) {
                return r - Ce.CODEWORD_SKEW_SIZE <= n && n <= s + Ce.CODEWORD_SKEW_SIZE
            }
            static decodeCodewords(n, r, s) {
                if (n.length === 0)
                    throw F.getFormatInstance();
                let o = 1 << r + 1
                  , a = Ce.correctErrors(n, s, o);
                Ce.verifyCodewordCount(n, o);
                let u = U.decode(n, "" + r);
                return u.setErrorsCorrected(a),
                u.setErasures(s.length),
                u
            }
            static correctErrors(n, r, s) {
                if (r != null && r.length > s / 2 + Ce.MAX_ERRORS || s < 0 || s > Ce.MAX_EC_CODEWORDS)
                    throw B.getChecksumInstance();
                return Ce.errorCorrection.decode(n, s, r)
            }
            static verifyCodewordCount(n, r) {
                if (n.length < 4)
                    throw F.getFormatInstance();
                let s = n[0];
                if (s > n.length)
                    throw F.getFormatInstance();
                if (s === 0)
                    if (r < n.length)
                        n[0] = n.length - r;
                    else
                        throw F.getFormatInstance()
            }
            static getBitCountForCodeword(n) {
                let r = new Int32Array(8)
                  , s = 0
                  , o = r.length - 1;
                for (; !((n & 1) !== s && (s = n & 1,
                o--,
                o < 0)); )
                    r[o]++,
                    n >>= 1;
                return r
            }
            static getCodewordBucketNumber(n) {
                return n instanceof Int32Array ? this.getCodewordBucketNumber_Int32Array(n) : this.getCodewordBucketNumber_number(n)
            }
            static getCodewordBucketNumber_number(n) {
                return Ce.getCodewordBucketNumber(Ce.getBitCountForCodeword(n))
            }
            static getCodewordBucketNumber_Int32Array(n) {
                return (n[0] - n[2] + n[4] - n[6] + 9) % 9
            }
            static toString(n) {
                let r = new rs;
                for (let s = 0; s < n.length; s++) {
                    r.format("Row %2d: ", s);
                    for (let o = 0; o < n[s].length; o++) {
                        let a = n[s][o];
                        a.getValue().length === 0 ? r.format("        ", null) : r.format("%4d(%2d)", a.getValue()[0], a.getConfidence(a.getValue()[0]))
                    }
                    r.format("%n")
                }
                return r.toString()
            }
        }
        Ce.CODEWORD_SKEW_SIZE = 2,
        Ce.MAX_ERRORS = 3,
        Ce.MAX_EC_CODEWORDS = 512,
        Ce.errorCorrection = new p1;
        class Tt {
            decode(n, r=null) {
                let s = Tt.decode(n, r, !1);
                if (s == null || s.length === 0 || s[0] == null)
                    throw j.getNotFoundInstance();
                return s[0]
            }
            decodeMultiple(n, r=null) {
                try {
                    return Tt.decode(n, r, !0)
                } catch (s) {
                    throw s instanceof F || s instanceof B ? j.getNotFoundInstance() : s
                }
            }
            static decode(n, r, s) {
                const o = new Array
                  , a = Ee.detectMultiple(n, r, s);
                for (const u of a.getPoints()) {
                    const d = Ce.decode(a.getBits(), u[4], u[5], u[6], u[7], Tt.getMinCodewordWidth(u), Tt.getMaxCodewordWidth(u))
                      , h = new Qe(d.getText(),d.getRawBytes(),void 0,u,ae.PDF_417);
                    h.putMetadata(yt.ERROR_CORRECTION_LEVEL, d.getECLevel());
                    const p = d.getOther();
                    p != null && h.putMetadata(yt.PDF417_EXTRA_METADATA, p),
                    o.push(h)
                }
                return o.map(u=>u)
            }
            static getMaxWidth(n, r) {
                return n == null || r == null ? 0 : Math.trunc(Math.abs(n.getX() - r.getX()))
            }
            static getMinWidth(n, r) {
                return n == null || r == null ? N.MAX_VALUE : Math.trunc(Math.abs(n.getX() - r.getX()))
            }
            static getMaxCodewordWidth(n) {
                return Math.floor(Math.max(Math.max(Tt.getMaxWidth(n[0], n[4]), Tt.getMaxWidth(n[6], n[2]) * ge.MODULES_IN_CODEWORD / ge.MODULES_IN_STOP_PATTERN), Math.max(Tt.getMaxWidth(n[1], n[5]), Tt.getMaxWidth(n[7], n[3]) * ge.MODULES_IN_CODEWORD / ge.MODULES_IN_STOP_PATTERN)))
            }
            static getMinCodewordWidth(n) {
                return Math.floor(Math.min(Math.min(Tt.getMinWidth(n[0], n[4]), Tt.getMinWidth(n[6], n[2]) * ge.MODULES_IN_CODEWORD / ge.MODULES_IN_STOP_PATTERN), Math.min(Tt.getMinWidth(n[1], n[5]), Tt.getMinWidth(n[7], n[3]) * ge.MODULES_IN_CODEWORD / ge.MODULES_IN_STOP_PATTERN)))
            }
            reset() {}
        }
        class wo extends x {
        }
        wo.kind = "ReaderException";
        class C1 {
            constructor(n, r) {
                this.verbose = n === !0,
                r && this.setHints(r)
            }
            decode(n, r) {
                return r && this.setHints(r),
                this.decodeInternal(n)
            }
            decodeWithState(n) {
                return (this.readers === null || this.readers === void 0) && this.setHints(null),
                this.decodeInternal(n)
            }
            setHints(n) {
                this.hints = n;
                const r = !l(n) && n.get(Z.TRY_HARDER) === !0
                  , s = l(n) ? null : n.get(Z.POSSIBLE_FORMATS)
                  , o = new Array;
                if (!l(s)) {
                    const a = s.some(u=>u === ae.UPC_A || u === ae.UPC_E || u === ae.EAN_13 || u === ae.EAN_8 || u === ae.CODABAR || u === ae.CODE_39 || u === ae.CODE_93 || u === ae.CODE_128 || u === ae.ITF || u === ae.RSS_14 || u === ae.RSS_EXPANDED);
                    a && !r && o.push(new fi(n,this.verbose)),
                    s.includes(ae.QR_CODE) && o.push(new cr),
                    s.includes(ae.DATA_MATRIX) && o.push(new ur),
                    s.includes(ae.AZTEC) && o.push(new fo),
                    s.includes(ae.PDF_417) && o.push(new Tt),
                    a && r && o.push(new fi(n,this.verbose))
                }
                o.length === 0 && (r || o.push(new fi(n,this.verbose)),
                o.push(new cr),
                o.push(new ur),
                o.push(new fo),
                o.push(new Tt),
                r && o.push(new fi(n,this.verbose))),
                this.readers = o
            }
            reset() {
                if (this.readers !== null)
                    for (const n of this.readers)
                        n.reset()
            }
            decodeInternal(n) {
                if (this.readers === null)
                    throw new wo("No readers where selected, nothing can be read.");
                for (const r of this.readers)
                    try {
                        return r.decode(n, this.hints)
                    } catch (s) {
                        if (s instanceof wo)
                            continue
                    }
                throw new j("No MultiFormat Readers were able to detect the code.")
            }
        }
        class M2 extends cn {
            constructor(n=null, r=500) {
                const s = new C1;
                s.setHints(n),
                super(s, r)
            }
            decodeBitmap(n) {
                return this.reader.decodeWithState(n)
            }
        }
        class k2 extends cn {
            constructor(n=500) {
                super(new Tt, n)
            }
        }
        class P2 extends cn {
            constructor(n=500) {
                super(new cr, n)
            }
        }
        var ga;
        (function(E) {
            E[E.ERROR_CORRECTION = 0] = "ERROR_CORRECTION",
            E[E.CHARACTER_SET = 1] = "CHARACTER_SET",
            E[E.DATA_MATRIX_SHAPE = 2] = "DATA_MATRIX_SHAPE",
            E[E.MIN_SIZE = 3] = "MIN_SIZE",
            E[E.MAX_SIZE = 4] = "MAX_SIZE",
            E[E.MARGIN = 5] = "MARGIN",
            E[E.PDF417_COMPACT = 6] = "PDF417_COMPACT",
            E[E.PDF417_COMPACTION = 7] = "PDF417_COMPACTION",
            E[E.PDF417_DIMENSIONS = 8] = "PDF417_DIMENSIONS",
            E[E.AZTEC_LAYERS = 9] = "AZTEC_LAYERS",
            E[E.QR_VERSION = 10] = "QR_VERSION"
        }
        )(ga || (ga = {}));
        var xt = ga;
        class pa {
            constructor(n) {
                this.field = n,
                this.cachedGenerators = [],
                this.cachedGenerators.push(new jt(n,Int32Array.from([1])))
            }
            buildGenerator(n) {
                const r = this.cachedGenerators;
                if (n >= r.length) {
                    let s = r[r.length - 1];
                    const o = this.field;
                    for (let a = r.length; a <= n; a++) {
                        const u = s.multiply(new jt(o,Int32Array.from([1, o.exp(a - 1 + o.getGeneratorBase())])));
                        r.push(u),
                        s = u
                    }
                }
                return r[n]
            }
            encode(n, r) {
                if (r === 0)
                    throw new v("No error correction bytes");
                const s = n.length - r;
                if (s <= 0)
                    throw new v("No data bytes provided");
                const o = this.buildGenerator(r)
                  , a = new Int32Array(s);
                M.arraycopy(n, 0, a, 0, s);
                let u = new jt(this.field,a);
                u = u.multiplyByMonomial(r, 1);
                const h = u.divide(o)[1].getCoefficients()
                  , p = r - h.length;
                for (let w = 0; w < p; w++)
                    n[s + w] = 0;
                M.arraycopy(h, 0, n, s + p, h.length)
            }
        }
        class it {
            constructor() {}
            static applyMaskPenaltyRule1(n) {
                return it.applyMaskPenaltyRule1Internal(n, !0) + it.applyMaskPenaltyRule1Internal(n, !1)
            }
            static applyMaskPenaltyRule2(n) {
                let r = 0;
                const s = n.getArray()
                  , o = n.getWidth()
                  , a = n.getHeight();
                for (let u = 0; u < a - 1; u++) {
                    const d = s[u];
                    for (let h = 0; h < o - 1; h++) {
                        const p = d[h];
                        p === d[h + 1] && p === s[u + 1][h] && p === s[u + 1][h + 1] && r++
                    }
                }
                return it.N2 * r
            }
            static applyMaskPenaltyRule3(n) {
                let r = 0;
                const s = n.getArray()
                  , o = n.getWidth()
                  , a = n.getHeight();
                for (let u = 0; u < a; u++)
                    for (let d = 0; d < o; d++) {
                        const h = s[u];
                        d + 6 < o && h[d] === 1 && h[d + 1] === 0 && h[d + 2] === 1 && h[d + 3] === 1 && h[d + 4] === 1 && h[d + 5] === 0 && h[d + 6] === 1 && (it.isWhiteHorizontal(h, d - 4, d) || it.isWhiteHorizontal(h, d + 7, d + 11)) && r++,
                        u + 6 < a && s[u][d] === 1 && s[u + 1][d] === 0 && s[u + 2][d] === 1 && s[u + 3][d] === 1 && s[u + 4][d] === 1 && s[u + 5][d] === 0 && s[u + 6][d] === 1 && (it.isWhiteVertical(s, d, u - 4, u) || it.isWhiteVertical(s, d, u + 7, u + 11)) && r++
                    }
                return r * it.N3
            }
            static isWhiteHorizontal(n, r, s) {
                r = Math.max(r, 0),
                s = Math.min(s, n.length);
                for (let o = r; o < s; o++)
                    if (n[o] === 1)
                        return !1;
                return !0
            }
            static isWhiteVertical(n, r, s, o) {
                s = Math.max(s, 0),
                o = Math.min(o, n.length);
                for (let a = s; a < o; a++)
                    if (n[a][r] === 1)
                        return !1;
                return !0
            }
            static applyMaskPenaltyRule4(n) {
                let r = 0;
                const s = n.getArray()
                  , o = n.getWidth()
                  , a = n.getHeight();
                for (let h = 0; h < a; h++) {
                    const p = s[h];
                    for (let w = 0; w < o; w++)
                        p[w] === 1 && r++
                }
                const u = n.getHeight() * n.getWidth();
                return Math.floor(Math.abs(r * 2 - u) * 10 / u) * it.N4
            }
            static getDataMaskBit(n, r, s) {
                let o, a;
                switch (n) {
                case 0:
                    o = s + r & 1;
                    break;
                case 1:
                    o = s & 1;
                    break;
                case 2:
                    o = r % 3;
                    break;
                case 3:
                    o = (s + r) % 3;
                    break;
                case 4:
                    o = Math.floor(s / 2) + Math.floor(r / 3) & 1;
                    break;
                case 5:
                    a = s * r,
                    o = (a & 1) + a % 3;
                    break;
                case 6:
                    a = s * r,
                    o = (a & 1) + a % 3 & 1;
                    break;
                case 7:
                    a = s * r,
                    o = a % 3 + (s + r & 1) & 1;
                    break;
                default:
                    throw new v("Invalid mask pattern: " + n)
                }
                return o === 0
            }
            static applyMaskPenaltyRule1Internal(n, r) {
                let s = 0;
                const o = r ? n.getHeight() : n.getWidth()
                  , a = r ? n.getWidth() : n.getHeight()
                  , u = n.getArray();
                for (let d = 0; d < o; d++) {
                    let h = 0
                      , p = -1;
                    for (let w = 0; w < a; w++) {
                        const C = r ? u[d][w] : u[w][d];
                        C === p ? h++ : (h >= 5 && (s += it.N1 + (h - 5)),
                        h = 1,
                        p = C)
                    }
                    h >= 5 && (s += it.N1 + (h - 5))
                }
                return s
            }
        }
        it.N1 = 3,
        it.N2 = 3,
        it.N3 = 40,
        it.N4 = 10;
        class yo {
            constructor(n, r) {
                this.width = n,
                this.height = r;
                const s = new Array(r);
                for (let o = 0; o !== r; o++)
                    s[o] = new Uint8Array(n);
                this.bytes = s
            }
            getHeight() {
                return this.height
            }
            getWidth() {
                return this.width
            }
            get(n, r) {
                return this.bytes[r][n]
            }
            getArray() {
                return this.bytes
            }
            setNumber(n, r, s) {
                this.bytes[r][n] = s
            }
            setBoolean(n, r, s) {
                this.bytes[r][n] = s ? 1 : 0
            }
            clear(n) {
                for (const r of this.bytes)
                    _.fill(r, n)
            }
            equals(n) {
                if (!(n instanceof yo))
                    return !1;
                const r = n;
                if (this.width !== r.width || this.height !== r.height)
                    return !1;
                for (let s = 0, o = this.height; s < o; ++s) {
                    const a = this.bytes[s]
                      , u = r.bytes[s];
                    for (let d = 0, h = this.width; d < h; ++d)
                        if (a[d] !== u[d])
                            return !1
                }
                return !0
            }
            toString() {
                const n = new Ie;
                for (let r = 0, s = this.height; r < s; ++r) {
                    const o = this.bytes[r];
                    for (let a = 0, u = this.width; a < u; ++a)
                        switch (o[a]) {
                        case 0:
                            n.append(" 0");
                            break;
                        case 1:
                            n.append(" 1");
                            break;
                        default:
                            n.append("  ");
                            break
                        }
                    n.append(`
`)
                }
                return n.toString()
            }
        }
        class Hr {
            constructor() {
                this.maskPattern = -1
            }
            getMode() {
                return this.mode
            }
            getECLevel() {
                return this.ecLevel
            }
            getVersion() {
                return this.version
            }
            getMaskPattern() {
                return this.maskPattern
            }
            getMatrix() {
                return this.matrix
            }
            toString() {
                const n = new Ie;
                return n.append(`<<
`),
                n.append(" mode: "),
                n.append(this.mode ? this.mode.toString() : "null"),
                n.append(`
 ecLevel: `),
                n.append(this.ecLevel ? this.ecLevel.toString() : "null"),
                n.append(`
 version: `),
                n.append(this.version ? this.version.toString() : "null"),
                n.append(`
 maskPattern: `),
                n.append(this.maskPattern.toString()),
                this.matrix ? (n.append(`
 matrix:
`),
                n.append(this.matrix.toString())) : n.append(`
 matrix: null
`),
                n.append(`>>
`),
                n.toString()
            }
            setMode(n) {
                this.mode = n
            }
            setECLevel(n) {
                this.ecLevel = n
            }
            setVersion(n) {
                this.version = n
            }
            setMaskPattern(n) {
                this.maskPattern = n
            }
            setMatrix(n) {
                this.matrix = n
            }
            static isValidMaskPattern(n) {
                return n >= 0 && n < Hr.NUM_MASK_PATTERNS
            }
        }
        Hr.NUM_MASK_PATTERNS = 8;
        class Le extends x {
        }
        Le.kind = "WriterException";
        class de {
            constructor() {}
            static clearMatrix(n) {
                n.clear(255)
            }
            static buildMatrix(n, r, s, o, a) {
                de.clearMatrix(a),
                de.embedBasicPatterns(s, a),
                de.embedTypeInfo(r, o, a),
                de.maybeEmbedVersionInfo(s, a),
                de.embedDataBits(n, o, a)
            }
            static embedBasicPatterns(n, r) {
                de.embedPositionDetectionPatternsAndSeparators(r),
                de.embedDarkDotAtLeftBottomCorner(r),
                de.maybeEmbedPositionAdjustmentPatterns(n, r),
                de.embedTimingPatterns(r)
            }
            static embedTypeInfo(n, r, s) {
                const o = new V;
                de.makeTypeInfoBits(n, r, o);
                for (let a = 0, u = o.getSize(); a < u; ++a) {
                    const d = o.get(o.getSize() - 1 - a)
                      , h = de.TYPE_INFO_COORDINATES[a]
                      , p = h[0]
                      , w = h[1];
                    if (s.setBoolean(p, w, d),
                    a < 8) {
                        const C = s.getWidth() - a - 1;
                        s.setBoolean(C, 8, d)
                    } else {
                        const A = s.getHeight() - 7 + (a - 8);
                        s.setBoolean(8, A, d)
                    }
                }
            }
            static maybeEmbedVersionInfo(n, r) {
                if (n.getVersionNumber() < 7)
                    return;
                const s = new V;
                de.makeVersionInfoBits(n, s);
                let o = 6 * 3 - 1;
                for (let a = 0; a < 6; ++a)
                    for (let u = 0; u < 3; ++u) {
                        const d = s.get(o);
                        o--,
                        r.setBoolean(a, r.getHeight() - 11 + u, d),
                        r.setBoolean(r.getHeight() - 11 + u, a, d)
                    }
            }
            static embedDataBits(n, r, s) {
                let o = 0
                  , a = -1
                  , u = s.getWidth() - 1
                  , d = s.getHeight() - 1;
                for (; u > 0; ) {
                    for (u === 6 && (u -= 1); d >= 0 && d < s.getHeight(); ) {
                        for (let h = 0; h < 2; ++h) {
                            const p = u - h;
                            if (!de.isEmpty(s.get(p, d)))
                                continue;
                            let w;
                            o < n.getSize() ? (w = n.get(o),
                            ++o) : w = !1,
                            r !== 255 && it.getDataMaskBit(r, p, d) && (w = !w),
                            s.setBoolean(p, d, w)
                        }
                        d += a
                    }
                    a = -a,
                    d += a,
                    u -= 2
                }
                if (o !== n.getSize())
                    throw new Le("Not all bits consumed: " + o + "/" + n.getSize())
            }
            static findMSBSet(n) {
                return 32 - N.numberOfLeadingZeros(n)
            }
            static calculateBCHCode(n, r) {
                if (r === 0)
                    throw new v("0 polynomial");
                const s = de.findMSBSet(r);
                for (n <<= s - 1; de.findMSBSet(n) >= s; )
                    n ^= r << de.findMSBSet(n) - s;
                return n
            }
            static makeTypeInfoBits(n, r, s) {
                if (!Hr.isValidMaskPattern(r))
                    throw new Le("Invalid mask pattern");
                const o = n.getBits() << 3 | r;
                s.appendBits(o, 5);
                const a = de.calculateBCHCode(o, de.TYPE_INFO_POLY);
                s.appendBits(a, 10);
                const u = new V;
                if (u.appendBits(de.TYPE_INFO_MASK_PATTERN, 15),
                s.xor(u),
                s.getSize() !== 15)
                    throw new Le("should not happen but we got: " + s.getSize())
            }
            static makeVersionInfoBits(n, r) {
                r.appendBits(n.getVersionNumber(), 6);
                const s = de.calculateBCHCode(n.getVersionNumber(), de.VERSION_INFO_POLY);
                if (r.appendBits(s, 12),
                r.getSize() !== 18)
                    throw new Le("should not happen but we got: " + r.getSize())
            }
            static isEmpty(n) {
                return n === 255
            }
            static embedTimingPatterns(n) {
                for (let r = 8; r < n.getWidth() - 8; ++r) {
                    const s = (r + 1) % 2;
                    de.isEmpty(n.get(r, 6)) && n.setNumber(r, 6, s),
                    de.isEmpty(n.get(6, r)) && n.setNumber(6, r, s)
                }
            }
            static embedDarkDotAtLeftBottomCorner(n) {
                if (n.get(8, n.getHeight() - 8) === 0)
                    throw new Le;
                n.setNumber(8, n.getHeight() - 8, 1)
            }
            static embedHorizontalSeparationPattern(n, r, s) {
                for (let o = 0; o < 8; ++o) {
                    if (!de.isEmpty(s.get(n + o, r)))
                        throw new Le;
                    s.setNumber(n + o, r, 0)
                }
            }
            static embedVerticalSeparationPattern(n, r, s) {
                for (let o = 0; o < 7; ++o) {
                    if (!de.isEmpty(s.get(n, r + o)))
                        throw new Le;
                    s.setNumber(n, r + o, 0)
                }
            }
            static embedPositionAdjustmentPattern(n, r, s) {
                for (let o = 0; o < 5; ++o) {
                    const a = de.POSITION_ADJUSTMENT_PATTERN[o];
                    for (let u = 0; u < 5; ++u)
                        s.setNumber(n + u, r + o, a[u])
                }
            }
            static embedPositionDetectionPattern(n, r, s) {
                for (let o = 0; o < 7; ++o) {
                    const a = de.POSITION_DETECTION_PATTERN[o];
                    for (let u = 0; u < 7; ++u)
                        s.setNumber(n + u, r + o, a[u])
                }
            }
            static embedPositionDetectionPatternsAndSeparators(n) {
                const r = de.POSITION_DETECTION_PATTERN[0].length;
                de.embedPositionDetectionPattern(0, 0, n),
                de.embedPositionDetectionPattern(n.getWidth() - r, 0, n),
                de.embedPositionDetectionPattern(0, n.getWidth() - r, n);
                const s = 8;
                de.embedHorizontalSeparationPattern(0, s - 1, n),
                de.embedHorizontalSeparationPattern(n.getWidth() - s, s - 1, n),
                de.embedHorizontalSeparationPattern(0, n.getWidth() - s, n);
                const o = 7;
                de.embedVerticalSeparationPattern(o, 0, n),
                de.embedVerticalSeparationPattern(n.getHeight() - o - 1, 0, n),
                de.embedVerticalSeparationPattern(o, n.getHeight() - o, n)
            }
            static maybeEmbedPositionAdjustmentPatterns(n, r) {
                if (n.getVersionNumber() < 2)
                    return;
                const s = n.getVersionNumber() - 1
                  , o = de.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[s];
                for (let a = 0, u = o.length; a !== u; a++) {
                    const d = o[a];
                    if (d >= 0)
                        for (let h = 0; h !== u; h++) {
                            const p = o[h];
                            p >= 0 && de.isEmpty(r.get(p, d)) && de.embedPositionAdjustmentPattern(p - 2, d - 2, r)
                        }
                }
            }
        }
        de.POSITION_DETECTION_PATTERN = Array.from([Int32Array.from([1, 1, 1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 0, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 0, 0, 0, 0, 1]), Int32Array.from([1, 1, 1, 1, 1, 1, 1])]),
        de.POSITION_ADJUSTMENT_PATTERN = Array.from([Int32Array.from([1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 1]), Int32Array.from([1, 0, 1, 0, 1]), Int32Array.from([1, 0, 0, 0, 1]), Int32Array.from([1, 1, 1, 1, 1])]),
        de.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = Array.from([Int32Array.from([-1, -1, -1, -1, -1, -1, -1]), Int32Array.from([6, 18, -1, -1, -1, -1, -1]), Int32Array.from([6, 22, -1, -1, -1, -1, -1]), Int32Array.from([6, 26, -1, -1, -1, -1, -1]), Int32Array.from([6, 30, -1, -1, -1, -1, -1]), Int32Array.from([6, 34, -1, -1, -1, -1, -1]), Int32Array.from([6, 22, 38, -1, -1, -1, -1]), Int32Array.from([6, 24, 42, -1, -1, -1, -1]), Int32Array.from([6, 26, 46, -1, -1, -1, -1]), Int32Array.from([6, 28, 50, -1, -1, -1, -1]), Int32Array.from([6, 30, 54, -1, -1, -1, -1]), Int32Array.from([6, 32, 58, -1, -1, -1, -1]), Int32Array.from([6, 34, 62, -1, -1, -1, -1]), Int32Array.from([6, 26, 46, 66, -1, -1, -1]), Int32Array.from([6, 26, 48, 70, -1, -1, -1]), Int32Array.from([6, 26, 50, 74, -1, -1, -1]), Int32Array.from([6, 30, 54, 78, -1, -1, -1]), Int32Array.from([6, 30, 56, 82, -1, -1, -1]), Int32Array.from([6, 30, 58, 86, -1, -1, -1]), Int32Array.from([6, 34, 62, 90, -1, -1, -1]), Int32Array.from([6, 28, 50, 72, 94, -1, -1]), Int32Array.from([6, 26, 50, 74, 98, -1, -1]), Int32Array.from([6, 30, 54, 78, 102, -1, -1]), Int32Array.from([6, 28, 54, 80, 106, -1, -1]), Int32Array.from([6, 32, 58, 84, 110, -1, -1]), Int32Array.from([6, 30, 58, 86, 114, -1, -1]), Int32Array.from([6, 34, 62, 90, 118, -1, -1]), Int32Array.from([6, 26, 50, 74, 98, 122, -1]), Int32Array.from([6, 30, 54, 78, 102, 126, -1]), Int32Array.from([6, 26, 52, 78, 104, 130, -1]), Int32Array.from([6, 30, 56, 82, 108, 134, -1]), Int32Array.from([6, 34, 60, 86, 112, 138, -1]), Int32Array.from([6, 30, 58, 86, 114, 142, -1]), Int32Array.from([6, 34, 62, 90, 118, 146, -1]), Int32Array.from([6, 30, 54, 78, 102, 126, 150]), Int32Array.from([6, 24, 50, 76, 102, 128, 154]), Int32Array.from([6, 28, 54, 80, 106, 132, 158]), Int32Array.from([6, 32, 58, 84, 110, 136, 162]), Int32Array.from([6, 26, 54, 82, 110, 138, 166]), Int32Array.from([6, 30, 58, 86, 114, 142, 170])]),
        de.TYPE_INFO_COORDINATES = Array.from([Int32Array.from([8, 0]), Int32Array.from([8, 1]), Int32Array.from([8, 2]), Int32Array.from([8, 3]), Int32Array.from([8, 4]), Int32Array.from([8, 5]), Int32Array.from([8, 7]), Int32Array.from([8, 8]), Int32Array.from([7, 8]), Int32Array.from([5, 8]), Int32Array.from([4, 8]), Int32Array.from([3, 8]), Int32Array.from([2, 8]), Int32Array.from([1, 8]), Int32Array.from([0, 8])]),
        de.VERSION_INFO_POLY = 7973,
        de.TYPE_INFO_POLY = 1335,
        de.TYPE_INFO_MASK_PATTERN = 21522;
        class B2 {
            constructor(n, r) {
                this.dataBytes = n,
                this.errorCorrectionBytes = r
            }
            getDataBytes() {
                return this.dataBytes
            }
            getErrorCorrectionBytes() {
                return this.errorCorrectionBytes
            }
        }
        class je {
            constructor() {}
            static calculateMaskPenalty(n) {
                return it.applyMaskPenaltyRule1(n) + it.applyMaskPenaltyRule2(n) + it.applyMaskPenaltyRule3(n) + it.applyMaskPenaltyRule4(n)
            }
            static encode(n, r, s=null) {
                let o = je.DEFAULT_BYTE_MODE_ENCODING;
                const a = s !== null && s.get(xt.CHARACTER_SET) !== void 0;
                a && (o = s.get(xt.CHARACTER_SET).toString());
                const u = this.chooseMode(n, o)
                  , d = new V;
                if (u === ce.BYTE && (a || je.DEFAULT_BYTE_MODE_ENCODING !== o)) {
                    const J = W.getCharacterSetECIByName(o);
                    J !== void 0 && this.appendECI(J, d)
                }
                this.appendModeInfo(u, d);
                const h = new V;
                this.appendBytes(n, u, h, o);
                let p;
                if (s !== null && s.get(xt.QR_VERSION) !== void 0) {
                    const J = Number.parseInt(s.get(xt.QR_VERSION).toString(), 10);
                    p = ue.getVersionForNumber(J);
                    const Y = this.calculateBitsNeeded(u, d, h, p);
                    if (!this.willFit(Y, p, r))
                        throw new Le("Data too big for requested version")
                } else
                    p = this.recommendVersion(r, u, d, h);
                const w = new V;
                w.appendBitArray(d);
                const C = u === ce.BYTE ? h.getSizeInBytes() : n.length;
                this.appendLengthInfo(C, p, u, w),
                w.appendBitArray(h);
                const A = p.getECBlocksForLevel(r)
                  , T = p.getTotalCodewords() - A.getTotalECCodewords();
                this.terminateBits(T, w);
                const R = this.interleaveWithECBytes(w, p.getTotalCodewords(), T, A.getNumBlocks())
                  , b = new Hr;
                b.setECLevel(r),
                b.setMode(u),
                b.setVersion(p);
                const P = p.getDimensionForVersion()
                  , z = new yo(P,P)
                  , Q = this.chooseMaskPattern(R, r, p, z);
                return b.setMaskPattern(Q),
                de.buildMatrix(R, r, p, Q, z),
                b.setMatrix(z),
                b
            }
            static recommendVersion(n, r, s, o) {
                const a = this.calculateBitsNeeded(r, s, o, ue.getVersionForNumber(1))
                  , u = this.chooseVersion(a, n)
                  , d = this.calculateBitsNeeded(r, s, o, u);
                return this.chooseVersion(d, n)
            }
            static calculateBitsNeeded(n, r, s, o) {
                return r.getSize() + n.getCharacterCountBits(o) + s.getSize()
            }
            static getAlphanumericCode(n) {
                return n < je.ALPHANUMERIC_TABLE.length ? je.ALPHANUMERIC_TABLE[n] : -1
            }
            static chooseMode(n, r=null) {
                if (W.SJIS.getName() === r && this.isOnlyDoubleByteKanji(n))
                    return ce.KANJI;
                let s = !1
                  , o = !1;
                for (let a = 0, u = n.length; a < u; ++a) {
                    const d = n.charAt(a);
                    if (je.isDigit(d))
                        s = !0;
                    else if (this.getAlphanumericCode(d.charCodeAt(0)) !== -1)
                        o = !0;
                    else
                        return ce.BYTE
                }
                return o ? ce.ALPHANUMERIC : s ? ce.NUMERIC : ce.BYTE
            }
            static isOnlyDoubleByteKanji(n) {
                let r;
                try {
                    r = Ue.encode(n, W.SJIS)
                } catch {
                    return !1
                }
                const s = r.length;
                if (s % 2 !== 0)
                    return !1;
                for (let o = 0; o < s; o += 2) {
                    const a = r[o] & 255;
                    if ((a < 129 || a > 159) && (a < 224 || a > 235))
                        return !1
                }
                return !0
            }
            static chooseMaskPattern(n, r, s, o) {
                let a = Number.MAX_SAFE_INTEGER
                  , u = -1;
                for (let d = 0; d < Hr.NUM_MASK_PATTERNS; d++) {
                    de.buildMatrix(n, r, s, d, o);
                    let h = this.calculateMaskPenalty(o);
                    h < a && (a = h,
                    u = d)
                }
                return u
            }
            static chooseVersion(n, r) {
                for (let s = 1; s <= 40; s++) {
                    const o = ue.getVersionForNumber(s);
                    if (je.willFit(n, o, r))
                        return o
                }
                throw new Le("Data too big")
            }
            static willFit(n, r, s) {
                const o = r.getTotalCodewords()
                  , u = r.getECBlocksForLevel(s).getTotalECCodewords()
                  , d = o - u
                  , h = (n + 7) / 8;
                return d >= h
            }
            static terminateBits(n, r) {
                const s = n * 8;
                if (r.getSize() > s)
                    throw new Le("data bits cannot fit in the QR Code" + r.getSize() + " > " + s);
                for (let u = 0; u < 4 && r.getSize() < s; ++u)
                    r.appendBit(!1);
                const o = r.getSize() & 7;
                if (o > 0)
                    for (let u = o; u < 8; u++)
                        r.appendBit(!1);
                const a = n - r.getSizeInBytes();
                for (let u = 0; u < a; ++u)
                    r.appendBits(u & 1 ? 17 : 236, 8);
                if (r.getSize() !== s)
                    throw new Le("Bits size does not equal capacity")
            }
            static getNumDataBytesAndNumECBytesForBlockID(n, r, s, o, a, u) {
                if (o >= s)
                    throw new Le("Block ID too large");
                const d = n % s
                  , h = s - d
                  , p = Math.floor(n / s)
                  , w = p + 1
                  , C = Math.floor(r / s)
                  , A = C + 1
                  , T = p - C
                  , R = w - A;
                if (T !== R)
                    throw new Le("EC bytes mismatch");
                if (s !== h + d)
                    throw new Le("RS blocks mismatch");
                if (n !== (C + T) * h + (A + R) * d)
                    throw new Le("Total bytes mismatch");
                o < h ? (a[0] = C,
                u[0] = T) : (a[0] = A,
                u[0] = R)
            }
            static interleaveWithECBytes(n, r, s, o) {
                if (n.getSizeInBytes() !== s)
                    throw new Le("Number of bits and data bytes does not match");
                let a = 0
                  , u = 0
                  , d = 0;
                const h = new Array;
                for (let w = 0; w < o; ++w) {
                    const C = new Int32Array(1)
                      , A = new Int32Array(1);
                    je.getNumDataBytesAndNumECBytesForBlockID(r, s, o, w, C, A);
                    const T = C[0]
                      , R = new Uint8Array(T);
                    n.toBytes(8 * a, R, 0, T);
                    const b = je.generateECBytes(R, A[0]);
                    h.push(new B2(R,b)),
                    u = Math.max(u, T),
                    d = Math.max(d, b.length),
                    a += C[0]
                }
                if (s !== a)
                    throw new Le("Data bytes does not match offset");
                const p = new V;
                for (let w = 0; w < u; ++w)
                    for (const C of h) {
                        const A = C.getDataBytes();
                        w < A.length && p.appendBits(A[w], 8)
                    }
                for (let w = 0; w < d; ++w)
                    for (const C of h) {
                        const A = C.getErrorCorrectionBytes();
                        w < A.length && p.appendBits(A[w], 8)
                    }
                if (r !== p.getSizeInBytes())
                    throw new Le("Interleaving error: " + r + " and " + p.getSizeInBytes() + " differ.");
                return p
            }
            static generateECBytes(n, r) {
                const s = n.length
                  , o = new Int32Array(s + r);
                for (let u = 0; u < s; u++)
                    o[u] = n[u] & 255;
                new pa(Oe.QR_CODE_FIELD_256).encode(o, r);
                const a = new Uint8Array(r);
                for (let u = 0; u < r; u++)
                    a[u] = o[s + u];
                return a
            }
            static appendModeInfo(n, r) {
                r.appendBits(n.getBits(), 4)
            }
            static appendLengthInfo(n, r, s, o) {
                const a = s.getCharacterCountBits(r);
                if (n >= 1 << a)
                    throw new Le(n + " is bigger than " + ((1 << a) - 1));
                o.appendBits(n, a)
            }
            static appendBytes(n, r, s, o) {
                switch (r) {
                case ce.NUMERIC:
                    je.appendNumericBytes(n, s);
                    break;
                case ce.ALPHANUMERIC:
                    je.appendAlphanumericBytes(n, s);
                    break;
                case ce.BYTE:
                    je.append8BitBytes(n, s, o);
                    break;
                case ce.KANJI:
                    je.appendKanjiBytes(n, s);
                    break;
                default:
                    throw new Le("Invalid mode: " + r)
                }
            }
            static getDigit(n) {
                return n.charCodeAt(0) - 48
            }
            static isDigit(n) {
                const r = je.getDigit(n);
                return r >= 0 && r <= 9
            }
            static appendNumericBytes(n, r) {
                const s = n.length;
                let o = 0;
                for (; o < s; ) {
                    const a = je.getDigit(n.charAt(o));
                    if (o + 2 < s) {
                        const u = je.getDigit(n.charAt(o + 1))
                          , d = je.getDigit(n.charAt(o + 2));
                        r.appendBits(a * 100 + u * 10 + d, 10),
                        o += 3
                    } else if (o + 1 < s) {
                        const u = je.getDigit(n.charAt(o + 1));
                        r.appendBits(a * 10 + u, 7),
                        o += 2
                    } else
                        r.appendBits(a, 4),
                        o++
                }
            }
            static appendAlphanumericBytes(n, r) {
                const s = n.length;
                let o = 0;
                for (; o < s; ) {
                    const a = je.getAlphanumericCode(n.charCodeAt(o));
                    if (a === -1)
                        throw new Le;
                    if (o + 1 < s) {
                        const u = je.getAlphanumericCode(n.charCodeAt(o + 1));
                        if (u === -1)
                            throw new Le;
                        r.appendBits(a * 45 + u, 11),
                        o += 2
                    } else
                        r.appendBits(a, 6),
                        o++
                }
            }
            static append8BitBytes(n, r, s) {
                let o;
                try {
                    o = Ue.encode(n, s)
                } catch (a) {
                    throw new Le(a)
                }
                for (let a = 0, u = o.length; a !== u; a++) {
                    const d = o[a];
                    r.appendBits(d, 8)
                }
            }
            static appendKanjiBytes(n, r) {
                let s;
                try {
                    s = Ue.encode(n, W.SJIS)
                } catch (a) {
                    throw new Le(a)
                }
                const o = s.length;
                for (let a = 0; a < o; a += 2) {
                    const u = s[a] & 255
                      , d = s[a + 1] & 255
                      , h = u << 8 & 4294967295 | d;
                    let p = -1;
                    if (h >= 33088 && h <= 40956 ? p = h - 33088 : h >= 57408 && h <= 60351 && (p = h - 49472),
                    p === -1)
                        throw new Le("Invalid byte sequence");
                    const w = (p >> 8) * 192 + (p & 255);
                    r.appendBits(w, 13)
                }
            }
            static appendECI(n, r) {
                r.appendBits(ce.ECI.getBits(), 4),
                r.appendBits(n.getValue(), 8)
            }
        }
        je.ALPHANUMERIC_TABLE = Int32Array.from([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 36, -1, -1, -1, 37, 38, -1, -1, -1, -1, 39, 40, -1, 41, 42, 43, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 44, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, -1, -1, -1]),
        je.DEFAULT_BYTE_MODE_ENCODING = W.UTF8.getName();
        class jr {
            write(n, r, s, o=null) {
                if (n.length === 0)
                    throw new v("Found empty contents");
                if (r < 0 || s < 0)
                    throw new v("Requested dimensions are too small: " + r + "x" + s);
                let a = ze.L
                  , u = jr.QUIET_ZONE_SIZE;
                o !== null && (o.get(xt.ERROR_CORRECTION) !== void 0 && (a = ze.fromString(o.get(xt.ERROR_CORRECTION).toString())),
                o.get(xt.MARGIN) !== void 0 && (u = Number.parseInt(o.get(xt.MARGIN).toString(), 10)));
                const d = je.encode(n, a, o);
                return this.renderResult(d, r, s, u)
            }
            writeToDom(n, r, s, o, a=null) {
                typeof n == "string" && (n = document.querySelector(n));
                const u = this.write(r, s, o, a);
                n && n.appendChild(u)
            }
            renderResult(n, r, s, o) {
                const a = n.getMatrix();
                if (a === null)
                    throw new kn;
                const u = a.getWidth()
                  , d = a.getHeight()
                  , h = u + o * 2
                  , p = d + o * 2
                  , w = Math.max(r, h)
                  , C = Math.max(s, p)
                  , A = Math.min(Math.floor(w / h), Math.floor(C / p))
                  , T = Math.floor((w - u * A) / 2)
                  , R = Math.floor((C - d * A) / 2)
                  , b = this.createSVGElement(w, C);
                for (let P = 0, z = R; P < d; P++,
                z += A)
                    for (let Q = 0, J = T; Q < u; Q++,
                    J += A)
                        if (a.get(Q, P) === 1) {
                            const Y = this.createSvgRectElement(J, z, A, A);
                            b.appendChild(Y)
                        }
                return b
            }
            createSVGElement(n, r) {
                const s = document.createElementNS(jr.SVG_NS, "svg");
                return s.setAttributeNS(null, "height", n.toString()),
                s.setAttributeNS(null, "width", r.toString()),
                s
            }
            createSvgRectElement(n, r, s, o) {
                const a = document.createElementNS(jr.SVG_NS, "rect");
                return a.setAttributeNS(null, "x", n.toString()),
                a.setAttributeNS(null, "y", r.toString()),
                a.setAttributeNS(null, "height", s.toString()),
                a.setAttributeNS(null, "width", o.toString()),
                a.setAttributeNS(null, "fill", "#000000"),
                a
            }
        }
        jr.QUIET_ZONE_SIZE = 4,
        jr.SVG_NS = "http://www.w3.org/2000/svg";
        class hi {
            encode(n, r, s, o, a) {
                if (n.length === 0)
                    throw new v("Found empty contents");
                if (r !== ae.QR_CODE)
                    throw new v("Can only encode QR_CODE, but got " + r);
                if (s < 0 || o < 0)
                    throw new v(`Requested dimensions are too small: ${s}x${o}`);
                let u = ze.L
                  , d = hi.QUIET_ZONE_SIZE;
                a !== null && (a.get(xt.ERROR_CORRECTION) !== void 0 && (u = ze.fromString(a.get(xt.ERROR_CORRECTION).toString())),
                a.get(xt.MARGIN) !== void 0 && (d = Number.parseInt(a.get(xt.MARGIN).toString(), 10)));
                const h = je.encode(n, u, a);
                return hi.renderResult(h, s, o, d)
            }
            static renderResult(n, r, s, o) {
                const a = n.getMatrix();
                if (a === null)
                    throw new kn;
                const u = a.getWidth()
                  , d = a.getHeight()
                  , h = u + o * 2
                  , p = d + o * 2
                  , w = Math.max(r, h)
                  , C = Math.max(s, p)
                  , A = Math.min(Math.floor(w / h), Math.floor(C / p))
                  , T = Math.floor((w - u * A) / 2)
                  , R = Math.floor((C - d * A) / 2)
                  , b = new lt(w,C);
                for (let P = 0, z = R; P < d; P++,
                z += A)
                    for (let Q = 0, J = T; Q < u; Q++,
                    J += A)
                        a.get(Q, P) === 1 && b.setRegion(J, z, A, A);
                return b
            }
        }
        hi.QUIET_ZONE_SIZE = 4;
        class L2 {
            encode(n, r, s, o, a) {
                let u;
                switch (r) {
                case ae.QR_CODE:
                    u = new hi;
                    break;
                default:
                    throw new v("No encoder available for format " + r)
                }
                return u.encode(n, r, s, o, a)
            }
        }
        class Fn extends re {
            constructor(n, r, s, o, a, u, d, h) {
                if (super(u, d),
                this.yuvData = n,
                this.dataWidth = r,
                this.dataHeight = s,
                this.left = o,
                this.top = a,
                o + u > r || a + d > s)
                    throw new v("Crop rectangle does not fit within image data.");
                h && this.reverseHorizontal(u, d)
            }
            getRow(n, r) {
                if (n < 0 || n >= this.getHeight())
                    throw new v("Requested row is outside the image: " + n);
                const s = this.getWidth();
                (r == null || r.length < s) && (r = new Uint8ClampedArray(s));
                const o = (n + this.top) * this.dataWidth + this.left;
                return M.arraycopy(this.yuvData, o, r, 0, s),
                r
            }
            getMatrix() {
                const n = this.getWidth()
                  , r = this.getHeight();
                if (n === this.dataWidth && r === this.dataHeight)
                    return this.yuvData;
                const s = n * r
                  , o = new Uint8ClampedArray(s);
                let a = this.top * this.dataWidth + this.left;
                if (n === this.dataWidth)
                    return M.arraycopy(this.yuvData, a, o, 0, s),
                    o;
                for (let u = 0; u < r; u++) {
                    const d = u * n;
                    M.arraycopy(this.yuvData, a, o, d, n),
                    a += this.dataWidth
                }
                return o
            }
            isCropSupported() {
                return !0
            }
            crop(n, r, s, o) {
                return new Fn(this.yuvData,this.dataWidth,this.dataHeight,this.left + n,this.top + r,s,o,!1)
            }
            renderThumbnail() {
                const n = this.getWidth() / Fn.THUMBNAIL_SCALE_FACTOR
                  , r = this.getHeight() / Fn.THUMBNAIL_SCALE_FACTOR
                  , s = new Int32Array(n * r)
                  , o = this.yuvData;
                let a = this.top * this.dataWidth + this.left;
                for (let u = 0; u < r; u++) {
                    const d = u * n;
                    for (let h = 0; h < n; h++) {
                        const p = o[a + h * Fn.THUMBNAIL_SCALE_FACTOR] & 255;
                        s[d + h] = 4278190080 | p * 65793
                    }
                    a += this.dataWidth * Fn.THUMBNAIL_SCALE_FACTOR
                }
                return s
            }
            getThumbnailWidth() {
                return this.getWidth() / Fn.THUMBNAIL_SCALE_FACTOR
            }
            getThumbnailHeight() {
                return this.getHeight() / Fn.THUMBNAIL_SCALE_FACTOR
            }
            reverseHorizontal(n, r) {
                const s = this.yuvData;
                for (let o = 0, a = this.top * this.dataWidth + this.left; o < r; o++,
                a += this.dataWidth) {
                    const u = a + n / 2;
                    for (let d = a, h = a + n - 1; d < u; d++,
                    h--) {
                        const p = s[d];
                        s[d] = s[h],
                        s[h] = p
                    }
                }
            }
            invert() {
                return new he(this)
            }
        }
        Fn.THUMBNAIL_SCALE_FACTOR = 2;
        class xa extends re {
            constructor(n, r, s, o, a, u, d) {
                if (super(r, s),
                this.dataWidth = o,
                this.dataHeight = a,
                this.left = u,
                this.top = d,
                n.BYTES_PER_ELEMENT === 4) {
                    const h = r * s
                      , p = new Uint8ClampedArray(h);
                    for (let w = 0; w < h; w++) {
                        const C = n[w]
                          , A = C >> 16 & 255
                          , T = C >> 7 & 510
                          , R = C & 255;
                        p[w] = (A + T + R) / 4 & 255
                    }
                    this.luminances = p
                } else
                    this.luminances = n;
                if (o === void 0 && (this.dataWidth = r),
                a === void 0 && (this.dataHeight = s),
                u === void 0 && (this.left = 0),
                d === void 0 && (this.top = 0),
                this.left + r > this.dataWidth || this.top + s > this.dataHeight)
                    throw new v("Crop rectangle does not fit within image data.")
            }
            getRow(n, r) {
                if (n < 0 || n >= this.getHeight())
                    throw new v("Requested row is outside the image: " + n);
                const s = this.getWidth();
                (r == null || r.length < s) && (r = new Uint8ClampedArray(s));
                const o = (n + this.top) * this.dataWidth + this.left;
                return M.arraycopy(this.luminances, o, r, 0, s),
                r
            }
            getMatrix() {
                const n = this.getWidth()
                  , r = this.getHeight();
                if (n === this.dataWidth && r === this.dataHeight)
                    return this.luminances;
                const s = n * r
                  , o = new Uint8ClampedArray(s);
                let a = this.top * this.dataWidth + this.left;
                if (n === this.dataWidth)
                    return M.arraycopy(this.luminances, a, o, 0, s),
                    o;
                for (let u = 0; u < r; u++) {
                    const d = u * n;
                    M.arraycopy(this.luminances, a, o, d, n),
                    a += this.dataWidth
                }
                return o
            }
            isCropSupported() {
                return !0
            }
            crop(n, r, s, o) {
                return new xa(this.luminances,s,o,this.dataWidth,this.dataHeight,this.left + n,this.top + r)
            }
            invert() {
                return new he(this)
            }
        }
        class A1 extends W {
            static forName(n) {
                return this.getCharacterSetECIByName(n)
            }
        }
        class ma {
        }
        ma.ISO_8859_1 = W.ISO8859_1;
        class S1 {
            isCompact() {
                return this.compact
            }
            setCompact(n) {
                this.compact = n
            }
            getSize() {
                return this.size
            }
            setSize(n) {
                this.size = n
            }
            getLayers() {
                return this.layers
            }
            setLayers(n) {
                this.layers = n
            }
            getCodeWords() {
                return this.codeWords
            }
            setCodeWords(n) {
                this.codeWords = n
            }
            getMatrix() {
                return this.matrix
            }
            setMatrix(n) {
                this.matrix = n
            }
        }
        class v1 {
            static singletonList(n) {
                return [n]
            }
            static min(n, r) {
                return n.sort(r)[0]
            }
        }
        class F2 {
            constructor(n) {
                this.previous = n
            }
            getPrevious() {
                return this.previous
            }
        }
        class gi extends F2 {
            constructor(n, r, s) {
                super(n),
                this.value = r,
                this.bitCount = s
            }
            appendTo(n, r) {
                n.appendBits(this.value, this.bitCount)
            }
            add(n, r) {
                return new gi(this,n,r)
            }
            addBinaryShift(n, r) {
                return console.warn("addBinaryShift on SimpleToken, this simply returns a copy of this token"),
                new gi(this,n,r)
            }
            toString() {
                let n = this.value & (1 << this.bitCount) - 1;
                return n |= 1 << this.bitCount,
                "<" + N.toBinaryString(n | 1 << this.bitCount).substring(1) + ">"
            }
        }
        class wa extends gi {
            constructor(n, r, s) {
                super(n, 0, 0),
                this.binaryShiftStart = r,
                this.binaryShiftByteCount = s
            }
            appendTo(n, r) {
                for (let s = 0; s < this.binaryShiftByteCount; s++)
                    (s === 0 || s === 31 && this.binaryShiftByteCount <= 62) && (n.appendBits(31, 5),
                    this.binaryShiftByteCount > 62 ? n.appendBits(this.binaryShiftByteCount - 31, 16) : s === 0 ? n.appendBits(Math.min(this.binaryShiftByteCount, 31), 5) : n.appendBits(this.binaryShiftByteCount - 31, 5)),
                    n.appendBits(r[this.binaryShiftStart + s], 8)
            }
            addBinaryShift(n, r) {
                return new wa(this,n,r)
            }
            toString() {
                return "<" + this.binaryShiftStart + "::" + (this.binaryShiftStart + this.binaryShiftByteCount - 1) + ">"
            }
        }
        function U2(E, n, r) {
            return new wa(E,n,r)
        }
        function as(E, n, r) {
            return new gi(E,n,r)
        }
        const V2 = ["UPPER", "LOWER", "DIGIT", "MIXED", "PUNCT"]
          , dr = 0
          , Eo = 1
          , gn = 2
          , I1 = 3
          , Un = 4
          , z2 = new gi(null,0,0)
          , ya = [Int32Array.from([0, (5 << 16) + 28, (5 << 16) + 30, (5 << 16) + 29, 656318]), Int32Array.from([(9 << 16) + 480 + 14, 0, (5 << 16) + 30, (5 << 16) + 29, 656318]), Int32Array.from([(4 << 16) + 14, (9 << 16) + 448 + 28, 0, (9 << 16) + 448 + 29, 932798]), Int32Array.from([(5 << 16) + 29, (5 << 16) + 28, 656318, 0, (5 << 16) + 30]), Int32Array.from([(5 << 16) + 31, 656380, 656382, 656381, 0])];
        function H2(E) {
            for (let n of E)
                _.fill(n, -1);
            return E[dr][Un] = 0,
            E[Eo][Un] = 0,
            E[Eo][dr] = 28,
            E[I1][Un] = 0,
            E[gn][Un] = 0,
            E[gn][dr] = 15,
            E
        }
        const T1 = H2(_.createInt32Array(6, 6));
        class Vn {
            constructor(n, r, s, o) {
                this.token = n,
                this.mode = r,
                this.binaryShiftByteCount = s,
                this.bitCount = o
            }
            getMode() {
                return this.mode
            }
            getToken() {
                return this.token
            }
            getBinaryShiftByteCount() {
                return this.binaryShiftByteCount
            }
            getBitCount() {
                return this.bitCount
            }
            latchAndAppend(n, r) {
                let s = this.bitCount
                  , o = this.token;
                if (n !== this.mode) {
                    let u = ya[this.mode][n];
                    o = as(o, u & 65535, u >> 16),
                    s += u >> 16
                }
                let a = n === gn ? 4 : 5;
                return o = as(o, r, a),
                new Vn(o,n,0,s + a)
            }
            shiftAndAppend(n, r) {
                let s = this.token
                  , o = this.mode === gn ? 4 : 5;
                return s = as(s, T1[this.mode][n], o),
                s = as(s, r, 5),
                new Vn(s,this.mode,0,this.bitCount + o + 5)
            }
            addBinaryShiftChar(n) {
                let r = this.token
                  , s = this.mode
                  , o = this.bitCount;
                if (this.mode === Un || this.mode === gn) {
                    let d = ya[s][dr];
                    r = as(r, d & 65535, d >> 16),
                    o += d >> 16,
                    s = dr
                }
                let a = this.binaryShiftByteCount === 0 || this.binaryShiftByteCount === 31 ? 18 : this.binaryShiftByteCount === 62 ? 9 : 8
                  , u = new Vn(r,s,this.binaryShiftByteCount + 1,o + a);
                return u.binaryShiftByteCount === 2078 && (u = u.endBinaryShift(n + 1)),
                u
            }
            endBinaryShift(n) {
                if (this.binaryShiftByteCount === 0)
                    return this;
                let r = this.token;
                return r = U2(r, n - this.binaryShiftByteCount, this.binaryShiftByteCount),
                new Vn(r,this.mode,0,this.bitCount)
            }
            isBetterThanOrEqualTo(n) {
                let r = this.bitCount + (ya[this.mode][n.mode] >> 16);
                return this.binaryShiftByteCount < n.binaryShiftByteCount ? r += Vn.calculateBinaryShiftCost(n) - Vn.calculateBinaryShiftCost(this) : this.binaryShiftByteCount > n.binaryShiftByteCount && n.binaryShiftByteCount > 0 && (r += 10),
                r <= n.bitCount
            }
            toBitArray(n) {
                let r = [];
                for (let o = this.endBinaryShift(n.length).token; o !== null; o = o.getPrevious())
                    r.unshift(o);
                let s = new V;
                for (const o of r)
                    o.appendTo(s, n);
                return s
            }
            toString() {
                return fe.format("%s bits=%d bytes=%d", V2[this.mode], this.bitCount, this.binaryShiftByteCount)
            }
            static calculateBinaryShiftCost(n) {
                return n.binaryShiftByteCount > 62 ? 21 : n.binaryShiftByteCount > 31 ? 20 : n.binaryShiftByteCount > 0 ? 10 : 0
            }
        }
        Vn.INITIAL_STATE = new Vn(z2,dr,0,0);
        function j2(E) {
            const n = fe.getCharCode(" ")
              , r = fe.getCharCode(".")
              , s = fe.getCharCode(",");
            E[dr][n] = 1;
            const o = fe.getCharCode("Z")
              , a = fe.getCharCode("A");
            for (let A = a; A <= o; A++)
                E[dr][A] = A - a + 2;
            E[Eo][n] = 1;
            const u = fe.getCharCode("z")
              , d = fe.getCharCode("a");
            for (let A = d; A <= u; A++)
                E[Eo][A] = A - d + 2;
            E[gn][n] = 1;
            const h = fe.getCharCode("9")
              , p = fe.getCharCode("0");
            for (let A = p; A <= h; A++)
                E[gn][A] = A - p + 2;
            E[gn][s] = 12,
            E[gn][r] = 13;
            const w = ["\0", " ", "", "", "", "", "", "", "\x07", "\b", "	", `
`, "\v", "\f", "\r", "\x1B", "", "", "", "", "@", "\\", "^", "_", "`", "|", "~", ""];
            for (let A = 0; A < w.length; A++)
                E[I1][fe.getCharCode(w[A])] = A;
            const C = ["\0", "\r", "\0", "\0", "\0", "\0", "!", "'", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "{", "}"];
            for (let A = 0; A < C.length; A++)
                fe.getCharCode(C[A]) > 0 && (E[Un][fe.getCharCode(C[A])] = A);
            return E
        }
        const Ea = j2(_.createInt32Array(5, 256));
        class us {
            constructor(n) {
                this.text = n
            }
            encode() {
                const n = fe.getCharCode(" ")
                  , r = fe.getCharCode(`
`);
                let s = v1.singletonList(Vn.INITIAL_STATE);
                for (let a = 0; a < this.text.length; a++) {
                    let u, d = a + 1 < this.text.length ? this.text[a + 1] : 0;
                    switch (this.text[a]) {
                    case fe.getCharCode("\r"):
                        u = d === r ? 2 : 0;
                        break;
                    case fe.getCharCode("."):
                        u = d === n ? 3 : 0;
                        break;
                    case fe.getCharCode(","):
                        u = d === n ? 4 : 0;
                        break;
                    case fe.getCharCode(":"):
                        u = d === n ? 5 : 0;
                        break;
                    default:
                        u = 0
                    }
                    u > 0 ? (s = us.updateStateListForPair(s, a, u),
                    a++) : s = this.updateStateListForChar(s, a)
                }
                return v1.min(s, (a,u)=>a.getBitCount() - u.getBitCount()).toBitArray(this.text)
            }
            updateStateListForChar(n, r) {
                const s = [];
                for (let o of n)
                    this.updateStateForChar(o, r, s);
                return us.simplifyStates(s)
            }
            updateStateForChar(n, r, s) {
                let o = this.text[r] & 255
                  , a = Ea[n.getMode()][o] > 0
                  , u = null;
                for (let d = 0; d <= Un; d++) {
                    let h = Ea[d][o];
                    if (h > 0) {
                        if (u == null && (u = n.endBinaryShift(r)),
                        !a || d === n.getMode() || d === gn) {
                            const p = u.latchAndAppend(d, h);
                            s.push(p)
                        }
                        if (!a && T1[n.getMode()][d] >= 0) {
                            const p = u.shiftAndAppend(d, h);
                            s.push(p)
                        }
                    }
                }
                if (n.getBinaryShiftByteCount() > 0 || Ea[n.getMode()][o] === 0) {
                    let d = n.addBinaryShiftChar(r);
                    s.push(d)
                }
            }
            static updateStateListForPair(n, r, s) {
                const o = [];
                for (let a of n)
                    this.updateStateForPair(a, r, s, o);
                return this.simplifyStates(o)
            }
            static updateStateForPair(n, r, s, o) {
                let a = n.endBinaryShift(r);
                if (o.push(a.latchAndAppend(Un, s)),
                n.getMode() !== Un && o.push(a.shiftAndAppend(Un, s)),
                s === 3 || s === 4) {
                    let u = a.latchAndAppend(gn, 16 - s).latchAndAppend(gn, 1);
                    o.push(u)
                }
                if (n.getBinaryShiftByteCount() > 0) {
                    let u = n.addBinaryShiftChar(r).addBinaryShiftChar(r + 1);
                    o.push(u)
                }
            }
            static simplifyStates(n) {
                let r = [];
                for (const s of n) {
                    let o = !0;
                    for (const a of r) {
                        if (a.isBetterThanOrEqualTo(s)) {
                            o = !1;
                            break
                        }
                        s.isBetterThanOrEqualTo(a) && (r = r.filter(u=>u !== a))
                    }
                    o && r.push(s)
                }
                return r
            }
        }
        class _e {
            constructor() {}
            static encodeBytes(n) {
                return _e.encode(n, _e.DEFAULT_EC_PERCENT, _e.DEFAULT_AZTEC_LAYERS)
            }
            static encode(n, r, s) {
                let o = new us(n).encode(), a = N.truncDivision(o.getSize() * r, 100) + 11, u = o.getSize() + a, d, h, p, w, C;
                if (s !== _e.DEFAULT_AZTEC_LAYERS) {
                    if (d = s < 0,
                    h = Math.abs(s),
                    h > (d ? _e.MAX_NB_BITS_COMPACT : _e.MAX_NB_BITS))
                        throw new v(fe.format("Illegal value %s for layers", s));
                    p = _e.totalBitsInLayer(h, d),
                    w = _e.WORD_SIZE[h];
                    let Y = p - p % w;
                    if (C = _e.stuffBits(o, w),
                    C.getSize() + a > Y)
                        throw new v("Data to large for user specified layer");
                    if (d && C.getSize() > w * 64)
                        throw new v("Data to large for user specified layer")
                } else {
                    w = 0,
                    C = null;
                    for (let Y = 0; ; Y++) {
                        if (Y > _e.MAX_NB_BITS)
                            throw new v("Data too large for an Aztec code");
                        if (d = Y <= 3,
                        h = d ? Y + 1 : Y,
                        p = _e.totalBitsInLayer(h, d),
                        u > p)
                            continue;
                        (C == null || w !== _e.WORD_SIZE[h]) && (w = _e.WORD_SIZE[h],
                        C = _e.stuffBits(o, w));
                        let Se = p - p % w;
                        if (!(d && C.getSize() > w * 64) && C.getSize() + a <= Se)
                            break
                    }
                }
                let A = _e.generateCheckWords(C, p, w), T = C.getSize() / w, R = _e.generateModeMessage(d, h, T), b = (d ? 11 : 14) + h * 4, P = new Int32Array(b), z;
                if (d) {
                    z = b;
                    for (let Y = 0; Y < P.length; Y++)
                        P[Y] = Y
                } else {
                    z = b + 1 + 2 * N.truncDivision(N.truncDivision(b, 2) - 1, 15);
                    let Y = N.truncDivision(b, 2)
                      , Se = N.truncDivision(z, 2);
                    for (let we = 0; we < Y; we++) {
                        let Yt = we + N.truncDivision(we, 15);
                        P[Y - we - 1] = Se - Yt - 1,
                        P[Y + we] = Se + Yt + 1
                    }
                }
                let Q = new lt(z);
                for (let Y = 0, Se = 0; Y < h; Y++) {
                    let we = (h - Y) * 4 + (d ? 9 : 12);
                    for (let Yt = 0; Yt < we; Yt++) {
                        let vn = Yt * 2;
                        for (let Zt = 0; Zt < 2; Zt++)
                            A.get(Se + vn + Zt) && Q.set(P[Y * 2 + Zt], P[Y * 2 + Yt]),
                            A.get(Se + we * 2 + vn + Zt) && Q.set(P[Y * 2 + Yt], P[b - 1 - Y * 2 - Zt]),
                            A.get(Se + we * 4 + vn + Zt) && Q.set(P[b - 1 - Y * 2 - Zt], P[b - 1 - Y * 2 - Yt]),
                            A.get(Se + we * 6 + vn + Zt) && Q.set(P[b - 1 - Y * 2 - Yt], P[Y * 2 + Zt])
                    }
                    Se += we * 8
                }
                if (_e.drawModeMessage(Q, d, z, R),
                d)
                    _e.drawBullsEye(Q, N.truncDivision(z, 2), 5);
                else {
                    _e.drawBullsEye(Q, N.truncDivision(z, 2), 7);
                    for (let Y = 0, Se = 0; Y < N.truncDivision(b, 2) - 1; Y += 15,
                    Se += 16)
                        for (let we = N.truncDivision(z, 2) & 1; we < z; we += 2)
                            Q.set(N.truncDivision(z, 2) - Se, we),
                            Q.set(N.truncDivision(z, 2) + Se, we),
                            Q.set(we, N.truncDivision(z, 2) - Se),
                            Q.set(we, N.truncDivision(z, 2) + Se)
                }
                let J = new S1;
                return J.setCompact(d),
                J.setSize(z),
                J.setLayers(h),
                J.setCodeWords(T),
                J.setMatrix(Q),
                J
            }
            static drawBullsEye(n, r, s) {
                for (let o = 0; o < s; o += 2)
                    for (let a = r - o; a <= r + o; a++)
                        n.set(a, r - o),
                        n.set(a, r + o),
                        n.set(r - o, a),
                        n.set(r + o, a);
                n.set(r - s, r - s),
                n.set(r - s + 1, r - s),
                n.set(r - s, r - s + 1),
                n.set(r + s, r - s),
                n.set(r + s, r - s + 1),
                n.set(r + s, r + s - 1)
            }
            static generateModeMessage(n, r, s) {
                let o = new V;
                return n ? (o.appendBits(r - 1, 2),
                o.appendBits(s - 1, 6),
                o = _e.generateCheckWords(o, 28, 4)) : (o.appendBits(r - 1, 5),
                o.appendBits(s - 1, 11),
                o = _e.generateCheckWords(o, 40, 4)),
                o
            }
            static drawModeMessage(n, r, s, o) {
                let a = N.truncDivision(s, 2);
                if (r)
                    for (let u = 0; u < 7; u++) {
                        let d = a - 3 + u;
                        o.get(u) && n.set(d, a - 5),
                        o.get(u + 7) && n.set(a + 5, d),
                        o.get(20 - u) && n.set(d, a + 5),
                        o.get(27 - u) && n.set(a - 5, d)
                    }
                else
                    for (let u = 0; u < 10; u++) {
                        let d = a - 5 + u + N.truncDivision(u, 5);
                        o.get(u) && n.set(d, a - 7),
                        o.get(u + 10) && n.set(a + 7, d),
                        o.get(29 - u) && n.set(d, a + 7),
                        o.get(39 - u) && n.set(a - 7, d)
                    }
            }
            static generateCheckWords(n, r, s) {
                let o = n.getSize() / s
                  , a = new pa(_e.getGF(s))
                  , u = N.truncDivision(r, s)
                  , d = _e.bitsToWords(n, s, u);
                a.encode(d, u - o);
                let h = r % s
                  , p = new V;
                p.appendBits(0, h);
                for (const w of Array.from(d))
                    p.appendBits(w, s);
                return p
            }
            static bitsToWords(n, r, s) {
                let o = new Int32Array(s), a, u;
                for (a = 0,
                u = n.getSize() / r; a < u; a++) {
                    let d = 0;
                    for (let h = 0; h < r; h++)
                        d |= n.get(a * r + h) ? 1 << r - h - 1 : 0;
                    o[a] = d
                }
                return o
            }
            static getGF(n) {
                switch (n) {
                case 4:
                    return Oe.AZTEC_PARAM;
                case 6:
                    return Oe.AZTEC_DATA_6;
                case 8:
                    return Oe.AZTEC_DATA_8;
                case 10:
                    return Oe.AZTEC_DATA_10;
                case 12:
                    return Oe.AZTEC_DATA_12;
                default:
                    throw new v("Unsupported word size " + n)
                }
            }
            static stuffBits(n, r) {
                let s = new V
                  , o = n.getSize()
                  , a = (1 << r) - 2;
                for (let u = 0; u < o; u += r) {
                    let d = 0;
                    for (let h = 0; h < r; h++)
                        (u + h >= o || n.get(u + h)) && (d |= 1 << r - 1 - h);
                    (d & a) === a ? (s.appendBits(d & a, r),
                    u--) : d & a ? s.appendBits(d, r) : (s.appendBits(d | 1, r),
                    u--)
                }
                return s
            }
            static totalBitsInLayer(n, r) {
                return ((r ? 88 : 112) + 16 * n) * n
            }
        }
        _e.DEFAULT_EC_PERCENT = 33,
        _e.DEFAULT_AZTEC_LAYERS = 0,
        _e.MAX_NB_BITS = 32,
        _e.MAX_NB_BITS_COMPACT = 4,
        _e.WORD_SIZE = Int32Array.from([4, 6, 6, 8, 8, 8, 8, 8, 8, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]);
        class Co {
            encode(n, r, s, o) {
                return this.encodeWithHints(n, r, s, o, null)
            }
            encodeWithHints(n, r, s, o, a) {
                let u = ma.ISO_8859_1
                  , d = _e.DEFAULT_EC_PERCENT
                  , h = _e.DEFAULT_AZTEC_LAYERS;
                return a != null && (a.has(xt.CHARACTER_SET) && (u = A1.forName(a.get(xt.CHARACTER_SET).toString())),
                a.has(xt.ERROR_CORRECTION) && (d = N.parseInt(a.get(xt.ERROR_CORRECTION).toString())),
                a.has(xt.AZTEC_LAYERS) && (h = N.parseInt(a.get(xt.AZTEC_LAYERS).toString()))),
                Co.encodeLayers(n, r, s, o, u, d, h)
            }
            static encodeLayers(n, r, s, o, a, u, d) {
                if (r !== ae.AZTEC)
                    throw new v("Can only encode AZTEC, but got " + r);
                let h = _e.encode(fe.getBytes(n, a), u, d);
                return Co.renderResult(h, s, o)
            }
            static renderResult(n, r, s) {
                let o = n.getMatrix();
                if (o == null)
                    throw new kn;
                let a = o.getWidth()
                  , u = o.getHeight()
                  , d = Math.max(r, a)
                  , h = Math.max(s, u)
                  , p = Math.min(d / a, h / u)
                  , w = (d - a * p) / 2
                  , C = (h - u * p) / 2
                  , A = new lt(d,h);
                for (let T = 0, R = C; T < u; T++,
                R += p)
                    for (let b = 0, P = w; b < a; b++,
                    P += p)
                        o.get(b, T) && A.setRegion(P, R, p, p);
                return A
            }
        }
        i.AbstractExpandedDecoder = sa,
        i.ArgumentException = S,
        i.ArithmeticException = ao,
        i.AztecCode = S1,
        i.AztecCodeReader = fo,
        i.AztecCodeWriter = Co,
        i.AztecDecoder = Ve,
        i.AztecDetector = u1,
        i.AztecDetectorResult = l1,
        i.AztecEncoder = _e,
        i.AztecHighLevelEncoder = us,
        i.AztecPoint = Lt,
        i.BarcodeFormat = ae,
        i.Binarizer = k,
        i.BinaryBitmap = D,
        i.BitArray = V,
        i.BitMatrix = lt,
        i.BitSource = ua,
        i.BrowserAztecCodeReader = p2,
        i.BrowserBarcodeReader = E2,
        i.BrowserCodeReader = cn,
        i.BrowserDatamatrixCodeReader = A2,
        i.BrowserMultiFormatReader = M2,
        i.BrowserPDF417Reader = k2,
        i.BrowserQRCodeReader = P2,
        i.BrowserQRCodeSvgWriter = jr,
        i.CharacterSetECI = W,
        i.ChecksumException = B,
        i.Code128Reader = ne,
        i.Code39Reader = gt,
        i.DataMatrixDecodedBitStreamParser = ar,
        i.DataMatrixReader = ur,
        i.DecodeHintType = Z,
        i.DecoderResult = Ji,
        i.DefaultGridSampler = a1,
        i.DetectorResult = co,
        i.EAN13Reader = Fr,
        i.EncodeHintType = xt,
        i.Exception = x,
        i.FormatException = F,
        i.GenericGF = Oe,
        i.GenericGFPoly = jt,
        i.GlobalHistogramBinarizer = tt,
        i.GridSampler = ta,
        i.GridSamplerInstance = or,
        i.HTMLCanvasElementLuminanceSource = pe,
        i.HybridBinarizer = xe,
        i.ITFReader = Be,
        i.IllegalArgumentException = v,
        i.IllegalStateException = kn,
        i.InvertedLuminanceSource = he,
        i.LuminanceSource = re,
        i.MathUtils = Ne,
        i.MultiFormatOneDReader = fi,
        i.MultiFormatReader = C1,
        i.MultiFormatWriter = L2,
        i.NotFoundException = j,
        i.OneDReader = ft,
        i.PDF417DecodedBitStreamParser = U,
        i.PDF417DecoderErrorCorrection = p1,
        i.PDF417Reader = Tt,
        i.PDF417ResultMetadata = m1,
        i.PerspectiveTransform = An,
        i.PlanarYUVLuminanceSource = Fn,
        i.QRCodeByteMatrix = yo,
        i.QRCodeDataMask = dn,
        i.QRCodeDecodedBitStreamParser = qe,
        i.QRCodeDecoderErrorCorrectionLevel = ze,
        i.QRCodeDecoderFormatInformation = Dt,
        i.QRCodeEncoder = je,
        i.QRCodeEncoderQRCode = Hr,
        i.QRCodeMaskUtil = it,
        i.QRCodeMatrixUtil = de,
        i.QRCodeMode = ce,
        i.QRCodeReader = cr,
        i.QRCodeVersion = ue,
        i.QRCodeWriter = hi,
        i.RGBLuminanceSource = xa,
        i.RSS14Reader = rt,
        i.RSSExpandedReader = G,
        i.ReaderException = wo,
        i.ReedSolomonDecoder = es,
        i.ReedSolomonEncoder = pa,
        i.ReedSolomonException = li,
        i.Result = Qe,
        i.ResultMetadataType = yt,
        i.ResultPoint = le,
        i.StringUtils = fe,
        i.UnsupportedOperationException = me,
        i.VideoInputDevice = Ye,
        i.WhiteRectangleDetector = Xn,
        i.WriterException = Le,
        i.ZXingArrays = _,
        i.ZXingCharset = A1,
        i.ZXingInteger = N,
        i.ZXingStandardCharsets = ma,
        i.ZXingStringBuilder = Ie,
        i.ZXingStringEncoding = Ue,
        i.ZXingSystem = M,
        i.createAbstractExpandedDecoder = h1,
        Object.defineProperty(i, "__esModule", {
            value: !0
        })
    })
}
)(Ku, Ku.exports);
var Ge = Ku.exports;
const Sm = rc(Ge)
  , vm = pf({
    __proto__: null,
    default: Sm
}, [Ge]);
var X0 = function() {
    function e(t, i, l) {
        if (this.formatMap = new Map([[se.QR_CODE, Ge.BarcodeFormat.QR_CODE], [se.AZTEC, Ge.BarcodeFormat.AZTEC], [se.CODABAR, Ge.BarcodeFormat.CODABAR], [se.CODE_39, Ge.BarcodeFormat.CODE_39], [se.CODE_93, Ge.BarcodeFormat.CODE_93], [se.CODE_128, Ge.BarcodeFormat.CODE_128], [se.DATA_MATRIX, Ge.BarcodeFormat.DATA_MATRIX], [se.MAXICODE, Ge.BarcodeFormat.MAXICODE], [se.ITF, Ge.BarcodeFormat.ITF], [se.EAN_13, Ge.BarcodeFormat.EAN_13], [se.EAN_8, Ge.BarcodeFormat.EAN_8], [se.PDF_417, Ge.BarcodeFormat.PDF_417], [se.RSS_14, Ge.BarcodeFormat.RSS_14], [se.RSS_EXPANDED, Ge.BarcodeFormat.RSS_EXPANDED], [se.UPC_A, Ge.BarcodeFormat.UPC_A], [se.UPC_E, Ge.BarcodeFormat.UPC_E], [se.UPC_EAN_EXTENSION, Ge.BarcodeFormat.UPC_EAN_EXTENSION]]),
        this.reverseFormatMap = this.createReverseFormatMap(),
        !vm)
            throw "Use html5qrcode.min.js without edit, ZXing not found.";
        this.verbose = i,
        this.logger = l;
        var c = this.createZXingFormats(t)
          , f = new Map;
        f.set(Ge.DecodeHintType.POSSIBLE_FORMATS, c),
        f.set(Ge.DecodeHintType.TRY_HARDER, !1),
        this.hints = f
    }
    return e.prototype.decodeAsync = function(t) {
        var i = this;
        return new Promise(function(l, c) {
            try {
                l(i.decode(t))
            } catch (f) {
                c(f)
            }
        }
        )
    }
    ,
    e.prototype.decode = function(t) {
        var i = new Ge.MultiFormatReader(this.verbose,this.hints)
          , l = new Ge.HTMLCanvasElementLuminanceSource(t)
          , c = new Ge.BinaryBitmap(new Ge.HybridBinarizer(l))
          , f = i.decode(c);
        return {
            text: f.text,
            format: Vh.create(this.toHtml5QrcodeSupportedFormats(f.format)),
            debugData: this.createDebugData()
        }
    }
    ,
    e.prototype.createReverseFormatMap = function() {
        var t = new Map;
        return this.formatMap.forEach(function(i, l, c) {
            t.set(i, l)
        }),
        t
    }
    ,
    e.prototype.toHtml5QrcodeSupportedFormats = function(t) {
        if (!this.reverseFormatMap.has(t))
            throw "reverseFormatMap doesn't have ".concat(t);
        return this.reverseFormatMap.get(t)
    }
    ,
    e.prototype.createZXingFormats = function(t) {
        for (var i = [], l = 0, c = t; l < c.length; l++) {
            var f = c[l];
            this.formatMap.has(f) ? i.push(this.formatMap.get(f)) : this.logger.logError("".concat(f, " is not supported by") + "ZXingHtml5QrcodeShim")
        }
        return i
    }
    ,
    e.prototype.createDebugData = function() {
        return {
            decoderName: "zxing-js"
        }
    }
    ,
    e
}(), Im = function(e, t, i, l) {
    function c(f) {
        return f instanceof i ? f : new i(function(g) {
            g(f)
        }
        )
    }
    return new (i || (i = Promise))(function(f, g) {
        function m(S) {
            try {
                x(l.next(S))
            } catch (v) {
                g(v)
            }
        }
        function y(S) {
            try {
                x(l.throw(S))
            } catch (v) {
                g(v)
            }
        }
        function x(S) {
            S.done ? f(S.value) : c(S.value).then(m, y)
        }
        x((l = l.apply(e, t || [])).next())
    }
    )
}, Tm = function(e, t) {
    var i = {
        label: 0,
        sent: function() {
            if (f[0] & 1)
                throw f[1];
            return f[1]
        },
        trys: [],
        ops: []
    }, l, c, f, g;
    return g = {
        next: m(0),
        throw: m(1),
        return: m(2)
    },
    typeof Symbol == "function" && (g[Symbol.iterator] = function() {
        return this
    }
    ),
    g;
    function m(x) {
        return function(S) {
            return y([x, S])
        }
    }
    function y(x) {
        if (l)
            throw new TypeError("Generator is already executing.");
        for (; g && (g = 0,
        x[0] && (i = 0)),
        i; )
            try {
                if (l = 1,
                c && (f = x[0] & 2 ? c.return : x[0] ? c.throw || ((f = c.return) && f.call(c),
                0) : c.next) && !(f = f.call(c, x[1])).done)
                    return f;
                switch (c = 0,
                f && (x = [x[0] & 2, f.value]),
                x[0]) {
                case 0:
                case 1:
                    f = x;
                    break;
                case 4:
                    return i.label++,
                    {
                        value: x[1],
                        done: !1
                    };
                case 5:
                    i.label++,
                    c = x[1],
                    x = [0];
                    continue;
                case 7:
                    x = i.ops.pop(),
                    i.trys.pop();
                    continue;
                default:
                    if (f = i.trys,
                    !(f = f.length > 0 && f[f.length - 1]) && (x[0] === 6 || x[0] === 2)) {
                        i = 0;
                        continue
                    }
                    if (x[0] === 3 && (!f || x[1] > f[0] && x[1] < f[3])) {
                        i.label = x[1];
                        break
                    }
                    if (x[0] === 6 && i.label < f[1]) {
                        i.label = f[1],
                        f = x;
                        break
                    }
                    if (f && i.label < f[2]) {
                        i.label = f[2],
                        i.ops.push(x);
                        break
                    }
                    f[2] && i.ops.pop(),
                    i.trys.pop();
                    continue
                }
                x = t.call(e, i)
            } catch (S) {
                x = [6, S],
                c = 0
            } finally {
                l = f = 0
            }
        if (x[0] & 5)
            throw x[1];
        return {
            value: x[0] ? x[1] : void 0,
            done: !0
        }
    }
}, Y0 = function() {
    function e(t, i, l) {
        if (this.formatMap = new Map([[se.QR_CODE, "qr_code"], [se.AZTEC, "aztec"], [se.CODABAR, "codabar"], [se.CODE_39, "code_39"], [se.CODE_93, "code_93"], [se.CODE_128, "code_128"], [se.DATA_MATRIX, "data_matrix"], [se.ITF, "itf"], [se.EAN_13, "ean_13"], [se.EAN_8, "ean_8"], [se.PDF_417, "pdf417"], [se.UPC_A, "upc_a"], [se.UPC_E, "upc_e"]]),
        this.reverseFormatMap = this.createReverseFormatMap(),
        !e.isSupported())
            throw "Use html5qrcode.min.js without edit, Use BarcodeDetectorDelegate only if it isSupported();";
        this.verbose = i,
        this.logger = l;
        var c = this.createBarcodeDetectorFormats(t);
        if (this.detector = new BarcodeDetector(c),
        !this.detector)
            throw "BarcodeDetector detector not supported"
    }
    return e.isSupported = function() {
        if (!("BarcodeDetector"in window))
            return !1;
        var t = new BarcodeDetector({
            formats: ["qr_code"]
        });
        return typeof t < "u"
    }
    ,
    e.prototype.decodeAsync = function(t) {
        return Im(this, void 0, void 0, function() {
            var i, l;
            return Tm(this, function(c) {
                switch (c.label) {
                case 0:
                    return [4, this.detector.detect(t)];
                case 1:
                    if (i = c.sent(),
                    !i || i.length === 0)
                        throw "No barcode or QR code detected.";
                    return l = this.selectLargestBarcode(i),
                    [2, {
                        text: l.rawValue,
                        format: Vh.create(this.toHtml5QrcodeSupportedFormats(l.format)),
                        debugData: this.createDebugData()
                    }]
                }
            })
        })
    }
    ,
    e.prototype.selectLargestBarcode = function(t) {
        for (var i = null, l = 0, c = 0, f = t; c < f.length; c++) {
            var g = f[c]
              , m = g.boundingBox.width * g.boundingBox.height;
            m > l && (l = m,
            i = g)
        }
        if (!i)
            throw "No largest barcode found";
        return i
    }
    ,
    e.prototype.createBarcodeDetectorFormats = function(t) {
        for (var i = [], l = 0, c = t; l < c.length; l++) {
            var f = c[l];
            this.formatMap.has(f) ? i.push(this.formatMap.get(f)) : this.logger.warn("".concat(f, " is not supported by") + "BarcodeDetectorDelegate")
        }
        return {
            formats: i
        }
    }
    ,
    e.prototype.toHtml5QrcodeSupportedFormats = function(t) {
        if (!this.reverseFormatMap.has(t))
            throw "reverseFormatMap doesn't have ".concat(t);
        return this.reverseFormatMap.get(t)
    }
    ,
    e.prototype.createReverseFormatMap = function() {
        var t = new Map;
        return this.formatMap.forEach(function(i, l, c) {
            t.set(i, l)
        }),
        t
    }
    ,
    e.prototype.createDebugData = function() {
        return {
            decoderName: "BarcodeDetector"
        }
    }
    ,
    e
}(), Z0 = function(e, t, i, l) {
    function c(f) {
        return f instanceof i ? f : new i(function(g) {
            g(f)
        }
        )
    }
    return new (i || (i = Promise))(function(f, g) {
        function m(S) {
            try {
                x(l.next(S))
            } catch (v) {
                g(v)
            }
        }
        function y(S) {
            try {
                x(l.throw(S))
            } catch (v) {
                g(v)
            }
        }
        function x(S) {
            S.done ? f(S.value) : c(S.value).then(m, y)
        }
        x((l = l.apply(e, t || [])).next())
    }
    )
}, K0 = function(e, t) {
    var i = {
        label: 0,
        sent: function() {
            if (f[0] & 1)
                throw f[1];
            return f[1]
        },
        trys: [],
        ops: []
    }, l, c, f, g;
    return g = {
        next: m(0),
        throw: m(1),
        return: m(2)
    },
    typeof Symbol == "function" && (g[Symbol.iterator] = function() {
        return this
    }
    ),
    g;
    function m(x) {
        return function(S) {
            return y([x, S])
        }
    }
    function y(x) {
        if (l)
            throw new TypeError("Generator is already executing.");
        for (; g && (g = 0,
        x[0] && (i = 0)),
        i; )
            try {
                if (l = 1,
                c && (f = x[0] & 2 ? c.return : x[0] ? c.throw || ((f = c.return) && f.call(c),
                0) : c.next) && !(f = f.call(c, x[1])).done)
                    return f;
                switch (c = 0,
                f && (x = [x[0] & 2, f.value]),
                x[0]) {
                case 0:
                case 1:
                    f = x;
                    break;
                case 4:
                    return i.label++,
                    {
                        value: x[1],
                        done: !1
                    };
                case 5:
                    i.label++,
                    c = x[1],
                    x = [0];
                    continue;
                case 7:
                    x = i.ops.pop(),
                    i.trys.pop();
                    continue;
                default:
                    if (f = i.trys,
                    !(f = f.length > 0 && f[f.length - 1]) && (x[0] === 6 || x[0] === 2)) {
                        i = 0;
                        continue
                    }
                    if (x[0] === 3 && (!f || x[1] > f[0] && x[1] < f[3])) {
                        i.label = x[1];
                        break
                    }
                    if (x[0] === 6 && i.label < f[1]) {
                        i.label = f[1],
                        f = x;
                        break
                    }
                    if (f && i.label < f[2]) {
                        i.label = f[2],
                        i.ops.push(x);
                        break
                    }
                    f[2] && i.ops.pop(),
                    i.trys.pop();
                    continue
                }
                x = t.call(e, i)
            } catch (S) {
                x = [6, S],
                c = 0
            } finally {
                l = f = 0
            }
        if (x[0] & 5)
            throw x[1];
        return {
            value: x[0] ? x[1] : void 0,
            done: !0
        }
    }
}, Nm = function() {
    function e(t, i, l, c) {
        this.EXECUTIONS_TO_REPORT_PERFORMANCE = 100,
        this.executions = 0,
        this.executionResults = [],
        this.wasPrimaryDecoderUsedInLastDecode = !1,
        this.verbose = l,
        i && Y0.isSupported() ? (this.primaryDecoder = new Y0(t,l,c),
        this.secondaryDecoder = new X0(t,l,c)) : this.primaryDecoder = new X0(t,l,c)
    }
    return e.prototype.decodeAsync = function(t) {
        return Z0(this, void 0, void 0, function() {
            var i;
            return K0(this, function(l) {
                switch (l.label) {
                case 0:
                    i = performance.now(),
                    l.label = 1;
                case 1:
                    return l.trys.push([1, , 3, 4]),
                    [4, this.getDecoder().decodeAsync(t)];
                case 2:
                    return [2, l.sent()];
                case 3:
                    return this.possiblyLogPerformance(i),
                    [7];
                case 4:
                    return [2]
                }
            })
        })
    }
    ,
    e.prototype.decodeRobustlyAsync = function(t) {
        return Z0(this, void 0, void 0, function() {
            var i, l;
            return K0(this, function(c) {
                switch (c.label) {
                case 0:
                    i = performance.now(),
                    c.label = 1;
                case 1:
                    return c.trys.push([1, 3, 4, 5]),
                    [4, this.primaryDecoder.decodeAsync(t)];
                case 2:
                    return [2, c.sent()];
                case 3:
                    if (l = c.sent(),
                    this.secondaryDecoder)
                        return [2, this.secondaryDecoder.decodeAsync(t)];
                    throw l;
                case 4:
                    return this.possiblyLogPerformance(i),
                    [7];
                case 5:
                    return [2]
                }
            })
        })
    }
    ,
    e.prototype.getDecoder = function() {
        return this.secondaryDecoder ? this.wasPrimaryDecoderUsedInLastDecode === !1 ? (this.wasPrimaryDecoderUsedInLastDecode = !0,
        this.primaryDecoder) : (this.wasPrimaryDecoderUsedInLastDecode = !1,
        this.secondaryDecoder) : this.primaryDecoder
    }
    ,
    e.prototype.possiblyLogPerformance = function(t) {
        if (this.verbose) {
            var i = performance.now() - t;
            this.executionResults.push(i),
            this.executions++,
            this.possiblyFlushPerformanceReport()
        }
    }
    ,
    e.prototype.possiblyFlushPerformanceReport = function() {
        if (!(this.executions < this.EXECUTIONS_TO_REPORT_PERFORMANCE)) {
            for (var t = 0, i = 0, l = this.executionResults; i < l.length; i++) {
                var c = l[i];
                t += c
            }
            var f = t / this.executionResults.length;
            console.log("".concat(f, " ms for ").concat(this.executionResults.length, " last runs.")),
            this.executions = 0,
            this.executionResults = []
        }
    }
    ,
    e
}(), t1 = function() {
    var e = function(t, i) {
        return e = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(l, c) {
            l.__proto__ = c
        }
        || function(l, c) {
            for (var f in c)
                Object.prototype.hasOwnProperty.call(c, f) && (l[f] = c[f])
        }
        ,
        e(t, i)
    };
    return function(t, i) {
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
        e(t, i);
        function l() {
            this.constructor = t
        }
        t.prototype = i === null ? Object.create(i) : (l.prototype = i.prototype,
        new l)
    }
}(), Tl = function(e, t, i, l) {
    function c(f) {
        return f instanceof i ? f : new i(function(g) {
            g(f)
        }
        )
    }
    return new (i || (i = Promise))(function(f, g) {
        function m(S) {
            try {
                x(l.next(S))
            } catch (v) {
                g(v)
            }
        }
        function y(S) {
            try {
                x(l.throw(S))
            } catch (v) {
                g(v)
            }
        }
        function x(S) {
            S.done ? f(S.value) : c(S.value).then(m, y)
        }
        x((l = l.apply(e, t || [])).next())
    }
    )
}, Nl = function(e, t) {
    var i = {
        label: 0,
        sent: function() {
            if (f[0] & 1)
                throw f[1];
            return f[1]
        },
        trys: [],
        ops: []
    }, l, c, f, g;
    return g = {
        next: m(0),
        throw: m(1),
        return: m(2)
    },
    typeof Symbol == "function" && (g[Symbol.iterator] = function() {
        return this
    }
    ),
    g;
    function m(x) {
        return function(S) {
            return y([x, S])
        }
    }
    function y(x) {
        if (l)
            throw new TypeError("Generator is already executing.");
        for (; g && (g = 0,
        x[0] && (i = 0)),
        i; )
            try {
                if (l = 1,
                c && (f = x[0] & 2 ? c.return : x[0] ? c.throw || ((f = c.return) && f.call(c),
                0) : c.next) && !(f = f.call(c, x[1])).done)
                    return f;
                switch (c = 0,
                f && (x = [x[0] & 2, f.value]),
                x[0]) {
                case 0:
                case 1:
                    f = x;
                    break;
                case 4:
                    return i.label++,
                    {
                        value: x[1],
                        done: !1
                    };
                case 5:
                    i.label++,
                    c = x[1],
                    x = [0];
                    continue;
                case 7:
                    x = i.ops.pop(),
                    i.trys.pop();
                    continue;
                default:
                    if (f = i.trys,
                    !(f = f.length > 0 && f[f.length - 1]) && (x[0] === 6 || x[0] === 2)) {
                        i = 0;
                        continue
                    }
                    if (x[0] === 3 && (!f || x[1] > f[0] && x[1] < f[3])) {
                        i.label = x[1];
                        break
                    }
                    if (x[0] === 6 && i.label < f[1]) {
                        i.label = f[1],
                        f = x;
                        break
                    }
                    if (f && i.label < f[2]) {
                        i.label = f[2],
                        i.ops.push(x);
                        break
                    }
                    f[2] && i.ops.pop(),
                    i.trys.pop();
                    continue
                }
                x = t.call(e, i)
            } catch (S) {
                x = [6, S],
                c = 0
            } finally {
                l = f = 0
            }
        if (x[0] & 5)
            throw x[1];
        return {
            value: x[0] ? x[1] : void 0,
            done: !0
        }
    }
}, Hh = function() {
    function e(t, i) {
        this.name = t,
        this.track = i
    }
    return e.prototype.isSupported = function() {
        return this.track.getCapabilities ? this.name in this.track.getCapabilities() : !1
    }
    ,
    e.prototype.apply = function(t) {
        var i = {};
        i[this.name] = t;
        var l = {
            advanced: [i]
        };
        return this.track.applyConstraints(l)
    }
    ,
    e.prototype.value = function() {
        var t = this.track.getSettings();
        if (this.name in t) {
            var i = t[this.name];
            return i
        }
        return null
    }
    ,
    e
}(), _m = function(e) {
    t1(t, e);
    function t(i, l) {
        return e.call(this, i, l) || this
    }
    return t.prototype.min = function() {
        return this.getCapabilities().min
    }
    ,
    t.prototype.max = function() {
        return this.getCapabilities().max
    }
    ,
    t.prototype.step = function() {
        return this.getCapabilities().step
    }
    ,
    t.prototype.apply = function(i) {
        var l = {};
        l[this.name] = i;
        var c = {
            advanced: [l]
        };
        return this.track.applyConstraints(c)
    }
    ,
    t.prototype.getCapabilities = function() {
        this.failIfNotSupported();
        var i = this.track.getCapabilities()
          , l = i[this.name];
        return {
            min: l.min,
            max: l.max,
            step: l.step
        }
    }
    ,
    t.prototype.failIfNotSupported = function() {
        if (!this.isSupported())
            throw new Error("".concat(this.name, " capability not supported"))
    }
    ,
    t
}(Hh), Rm = function(e) {
    t1(t, e);
    function t(i) {
        return e.call(this, "zoom", i) || this
    }
    return t
}(_m), Om = function(e) {
    t1(t, e);
    function t(i) {
        return e.call(this, "torch", i) || this
    }
    return t
}(Hh), bm = function() {
    function e(t) {
        this.track = t
    }
    return e.prototype.zoomFeature = function() {
        return new Rm(this.track)
    }
    ,
    e.prototype.torchFeature = function() {
        return new Om(this.track)
    }
    ,
    e
}(), Dm = function() {
    function e(t, i, l) {
        this.isClosed = !1,
        this.parentElement = t,
        this.mediaStream = i,
        this.callbacks = l,
        this.surface = this.createVideoElement(this.parentElement.clientWidth),
        t.append(this.surface)
    }
    return e.prototype.createVideoElement = function(t) {
        var i = document.createElement("video");
        return i.style.width = "".concat(t, "px"),
        i.style.display = "block",
        i.muted = !0,
        i.setAttribute("muted", "true"),
        i.playsInline = !0,
        i
    }
    ,
    e.prototype.setupSurface = function() {
        var t = this;
        this.surface.onabort = function() {
            throw "RenderedCameraImpl video surface onabort() called"
        }
        ,
        this.surface.onerror = function() {
            throw "RenderedCameraImpl video surface onerror() called"
        }
        ;
        var i = function() {
            var l = t.surface.clientWidth
              , c = t.surface.clientHeight;
            t.callbacks.onRenderSurfaceReady(l, c),
            t.surface.removeEventListener("playing", i)
        };
        this.surface.addEventListener("playing", i),
        this.surface.srcObject = this.mediaStream,
        this.surface.play()
    }
    ,
    e.create = function(t, i, l, c) {
        return Tl(this, void 0, void 0, function() {
            var f, g;
            return Nl(this, function(m) {
                switch (m.label) {
                case 0:
                    return f = new e(t,i,c),
                    l.aspectRatio ? (g = {
                        aspectRatio: l.aspectRatio
                    },
                    [4, f.getFirstTrackOrFail().applyConstraints(g)]) : [3, 2];
                case 1:
                    m.sent(),
                    m.label = 2;
                case 2:
                    return f.setupSurface(),
                    [2, f]
                }
            })
        })
    }
    ,
    e.prototype.failIfClosed = function() {
        if (this.isClosed)
            throw "The RenderedCamera has already been closed."
    }
    ,
    e.prototype.getFirstTrackOrFail = function() {
        if (this.failIfClosed(),
        this.mediaStream.getVideoTracks().length === 0)
            throw "No video tracks found";
        return this.mediaStream.getVideoTracks()[0]
    }
    ,
    e.prototype.pause = function() {
        this.failIfClosed(),
        this.surface.pause()
    }
    ,
    e.prototype.resume = function(t) {
        this.failIfClosed();
        var i = this
          , l = function() {
            setTimeout(t, 200),
            i.surface.removeEventListener("playing", l)
        };
        this.surface.addEventListener("playing", l),
        this.surface.play()
    }
    ,
    e.prototype.isPaused = function() {
        return this.failIfClosed(),
        this.surface.paused
    }
    ,
    e.prototype.getSurface = function() {
        return this.failIfClosed(),
        this.surface
    }
    ,
    e.prototype.getRunningTrackCapabilities = function() {
        return this.getFirstTrackOrFail().getCapabilities()
    }
    ,
    e.prototype.getRunningTrackSettings = function() {
        return this.getFirstTrackOrFail().getSettings()
    }
    ,
    e.prototype.applyVideoConstraints = function(t) {
        return Tl(this, void 0, void 0, function() {
            return Nl(this, function(i) {
                if ("aspectRatio"in t)
                    throw "Changing 'aspectRatio' in run-time is not yet supported.";
                return [2, this.getFirstTrackOrFail().applyConstraints(t)]
            })
        })
    }
    ,
    e.prototype.close = function() {
        if (this.isClosed)
            return Promise.resolve();
        var t = this;
        return new Promise(function(i, l) {
            var c = t.mediaStream.getVideoTracks()
              , f = c.length
              , g = 0;
            t.mediaStream.getVideoTracks().forEach(function(m) {
                t.mediaStream.removeTrack(m),
                m.stop(),
                ++g,
                g >= f && (t.isClosed = !0,
                t.parentElement.removeChild(t.surface),
                i())
            })
        }
        )
    }
    ,
    e.prototype.getCapabilities = function() {
        return new bm(this.getFirstTrackOrFail())
    }
    ,
    e
}(), Mm = function() {
    function e(t) {
        this.mediaStream = t
    }
    return e.prototype.render = function(t, i, l) {
        return Tl(this, void 0, void 0, function() {
            return Nl(this, function(c) {
                return [2, Dm.create(t, this.mediaStream, i, l)]
            })
        })
    }
    ,
    e.create = function(t) {
        return Tl(this, void 0, void 0, function() {
            var i, l;
            return Nl(this, function(c) {
                switch (c.label) {
                case 0:
                    if (!navigator.mediaDevices)
                        throw "navigator.mediaDevices not supported";
                    return i = {
                        audio: !1,
                        video: t
                    },
                    [4, navigator.mediaDevices.getUserMedia(i)];
                case 1:
                    return l = c.sent(),
                    [2, new e(l)]
                }
            })
        })
    }
    ,
    e
}(), Q0 = function(e, t, i, l) {
    function c(f) {
        return f instanceof i ? f : new i(function(g) {
            g(f)
        }
        )
    }
    return new (i || (i = Promise))(function(f, g) {
        function m(S) {
            try {
                x(l.next(S))
            } catch (v) {
                g(v)
            }
        }
        function y(S) {
            try {
                x(l.throw(S))
            } catch (v) {
                g(v)
            }
        }
        function x(S) {
            S.done ? f(S.value) : c(S.value).then(m, y)
        }
        x((l = l.apply(e, t || [])).next())
    }
    )
}, q0 = function(e, t) {
    var i = {
        label: 0,
        sent: function() {
            if (f[0] & 1)
                throw f[1];
            return f[1]
        },
        trys: [],
        ops: []
    }, l, c, f, g;
    return g = {
        next: m(0),
        throw: m(1),
        return: m(2)
    },
    typeof Symbol == "function" && (g[Symbol.iterator] = function() {
        return this
    }
    ),
    g;
    function m(x) {
        return function(S) {
            return y([x, S])
        }
    }
    function y(x) {
        if (l)
            throw new TypeError("Generator is already executing.");
        for (; g && (g = 0,
        x[0] && (i = 0)),
        i; )
            try {
                if (l = 1,
                c && (f = x[0] & 2 ? c.return : x[0] ? c.throw || ((f = c.return) && f.call(c),
                0) : c.next) && !(f = f.call(c, x[1])).done)
                    return f;
                switch (c = 0,
                f && (x = [x[0] & 2, f.value]),
                x[0]) {
                case 0:
                case 1:
                    f = x;
                    break;
                case 4:
                    return i.label++,
                    {
                        value: x[1],
                        done: !1
                    };
                case 5:
                    i.label++,
                    c = x[1],
                    x = [0];
                    continue;
                case 7:
                    x = i.ops.pop(),
                    i.trys.pop();
                    continue;
                default:
                    if (f = i.trys,
                    !(f = f.length > 0 && f[f.length - 1]) && (x[0] === 6 || x[0] === 2)) {
                        i = 0;
                        continue
                    }
                    if (x[0] === 3 && (!f || x[1] > f[0] && x[1] < f[3])) {
                        i.label = x[1];
                        break
                    }
                    if (x[0] === 6 && i.label < f[1]) {
                        i.label = f[1],
                        f = x;
                        break
                    }
                    if (f && i.label < f[2]) {
                        i.label = f[2],
                        i.ops.push(x);
                        break
                    }
                    f[2] && i.ops.pop(),
                    i.trys.pop();
                    continue
                }
                x = t.call(e, i)
            } catch (S) {
                x = [6, S],
                c = 0
            } finally {
                l = f = 0
            }
        if (x[0] & 5)
            throw x[1];
        return {
            value: x[0] ? x[1] : void 0,
            done: !0
        }
    }
}, km = function() {
    function e() {}
    return e.failIfNotSupported = function() {
        return Q0(this, void 0, void 0, function() {
            return q0(this, function(t) {
                if (!navigator.mediaDevices)
                    throw "navigator.mediaDevices not supported";
                return [2, new e]
            })
        })
    }
    ,
    e.prototype.create = function(t) {
        return Q0(this, void 0, void 0, function() {
            return q0(this, function(i) {
                return [2, Mm.create(t)]
            })
        })
    }
    ,
    e
}(), Pm = function(e, t, i, l) {
    function c(f) {
        return f instanceof i ? f : new i(function(g) {
            g(f)
        }
        )
    }
    return new (i || (i = Promise))(function(f, g) {
        function m(S) {
            try {
                x(l.next(S))
            } catch (v) {
                g(v)
            }
        }
        function y(S) {
            try {
                x(l.throw(S))
            } catch (v) {
                g(v)
            }
        }
        function x(S) {
            S.done ? f(S.value) : c(S.value).then(m, y)
        }
        x((l = l.apply(e, t || [])).next())
    }
    )
}, Bm = function(e, t) {
    var i = {
        label: 0,
        sent: function() {
            if (f[0] & 1)
                throw f[1];
            return f[1]
        },
        trys: [],
        ops: []
    }, l, c, f, g;
    return g = {
        next: m(0),
        throw: m(1),
        return: m(2)
    },
    typeof Symbol == "function" && (g[Symbol.iterator] = function() {
        return this
    }
    ),
    g;
    function m(x) {
        return function(S) {
            return y([x, S])
        }
    }
    function y(x) {
        if (l)
            throw new TypeError("Generator is already executing.");
        for (; g && (g = 0,
        x[0] && (i = 0)),
        i; )
            try {
                if (l = 1,
                c && (f = x[0] & 2 ? c.return : x[0] ? c.throw || ((f = c.return) && f.call(c),
                0) : c.next) && !(f = f.call(c, x[1])).done)
                    return f;
                switch (c = 0,
                f && (x = [x[0] & 2, f.value]),
                x[0]) {
                case 0:
                case 1:
                    f = x;
                    break;
                case 4:
                    return i.label++,
                    {
                        value: x[1],
                        done: !1
                    };
                case 5:
                    i.label++,
                    c = x[1],
                    x = [0];
                    continue;
                case 7:
                    x = i.ops.pop(),
                    i.trys.pop();
                    continue;
                default:
                    if (f = i.trys,
                    !(f = f.length > 0 && f[f.length - 1]) && (x[0] === 6 || x[0] === 2)) {
                        i = 0;
                        continue
                    }
                    if (x[0] === 3 && (!f || x[1] > f[0] && x[1] < f[3])) {
                        i.label = x[1];
                        break
                    }
                    if (x[0] === 6 && i.label < f[1]) {
                        i.label = f[1],
                        f = x;
                        break
                    }
                    if (f && i.label < f[2]) {
                        i.label = f[2],
                        i.ops.push(x);
                        break
                    }
                    f[2] && i.ops.pop(),
                    i.trys.pop();
                    continue
                }
                x = t.call(e, i)
            } catch (S) {
                x = [6, S],
                c = 0
            } finally {
                l = f = 0
            }
        if (x[0] & 5)
            throw x[1];
        return {
            value: x[0] ? x[1] : void 0,
            done: !0
        }
    }
}, Lm = function() {
    function e() {}
    return e.retrieve = function() {
        if (navigator.mediaDevices)
            return e.getCamerasFromMediaDevices();
        var t = MediaStreamTrack;
        return MediaStreamTrack && t.getSources ? e.getCamerasFromMediaStreamTrack() : e.rejectWithError()
    }
    ,
    e.rejectWithError = function() {
        var t = Di.unableToQuerySupportedDevices();
        return e.isHttpsOrLocalhost() || (t = Di.insecureContextCameraQueryError()),
        Promise.reject(t)
    }
    ,
    e.isHttpsOrLocalhost = function() {
        if (location.protocol === "https:")
            return !0;
        var t = location.host.split(":")[0];
        return t === "127.0.0.1" || t === "localhost"
    }
    ,
    e.getCamerasFromMediaDevices = function() {
        return Pm(this, void 0, void 0, function() {
            var t, i, l, c, f, g, m;
            return Bm(this, function(y) {
                switch (y.label) {
                case 0:
                    return t = function(x) {
                        for (var S = x.getVideoTracks(), v = 0, D = S; v < D.length; v++) {
                            var B = D[v];
                            B.enabled = !1,
                            B.stop(),
                            x.removeTrack(B)
                        }
                    }
                    ,
                    [4, navigator.mediaDevices.getUserMedia({
                        audio: !1,
                        video: !0
                    })];
                case 1:
                    return i = y.sent(),
                    [4, navigator.mediaDevices.enumerateDevices()];
                case 2:
                    for (l = y.sent(),
                    c = [],
                    f = 0,
                    g = l; f < g.length; f++)
                        m = g[f],
                        m.kind === "videoinput" && c.push({
                            id: m.deviceId,
                            label: m.label
                        });
                    return t(i),
                    [2, c]
                }
            })
        })
    }
    ,
    e.getCamerasFromMediaStreamTrack = function() {
        return new Promise(function(t, i) {
            var l = function(f) {
                for (var g = [], m = 0, y = f; m < y.length; m++) {
                    var x = y[m];
                    x.kind === "video" && g.push({
                        id: x.id,
                        label: x.label
                    })
                }
                t(g)
            }
              , c = MediaStreamTrack;
            c.getSources(l)
        }
        )
    }
    ,
    e
}(), st;
(function(e) {
    e[e.UNKNOWN = 0] = "UNKNOWN",
    e[e.NOT_STARTED = 1] = "NOT_STARTED",
    e[e.SCANNING = 2] = "SCANNING",
    e[e.PAUSED = 3] = "PAUSED"
}
)(st || (st = {}));
var Fm = function() {
    function e() {
        this.state = st.NOT_STARTED,
        this.onGoingTransactionNewState = st.UNKNOWN
    }
    return e.prototype.directTransition = function(t) {
        this.failIfTransitionOngoing(),
        this.validateTransition(t),
        this.state = t
    }
    ,
    e.prototype.startTransition = function(t) {
        return this.failIfTransitionOngoing(),
        this.validateTransition(t),
        this.onGoingTransactionNewState = t,
        this
    }
    ,
    e.prototype.execute = function() {
        if (this.onGoingTransactionNewState === st.UNKNOWN)
            throw "Transaction is already cancelled, cannot execute().";
        var t = this.onGoingTransactionNewState;
        this.onGoingTransactionNewState = st.UNKNOWN,
        this.directTransition(t)
    }
    ,
    e.prototype.cancel = function() {
        if (this.onGoingTransactionNewState === st.UNKNOWN)
            throw "Transaction is already cancelled, cannot cancel().";
        this.onGoingTransactionNewState = st.UNKNOWN
    }
    ,
    e.prototype.getState = function() {
        return this.state
    }
    ,
    e.prototype.failIfTransitionOngoing = function() {
        if (this.onGoingTransactionNewState !== st.UNKNOWN)
            throw "Cannot transition to a new state, already under transition"
    }
    ,
    e.prototype.validateTransition = function(t) {
        switch (this.state) {
        case st.UNKNOWN:
            throw "Transition from unknown is not allowed";
        case st.NOT_STARTED:
            this.failIfNewStateIs(t, [st.PAUSED]);
            break;
        case st.SCANNING:
            break;
        case st.PAUSED:
            break
        }
    }
    ,
    e.prototype.failIfNewStateIs = function(t, i) {
        for (var l = 0, c = i; l < c.length; l++) {
            var f = c[l];
            if (t === f)
                throw "Cannot transition from ".concat(this.state, " to ").concat(t)
        }
    }
    ,
    e
}(), Um = function() {
    function e(t) {
        this.stateManager = t
    }
    return e.prototype.startTransition = function(t) {
        return this.stateManager.startTransition(t)
    }
    ,
    e.prototype.directTransition = function(t) {
        this.stateManager.directTransition(t)
    }
    ,
    e.prototype.getState = function() {
        return this.stateManager.getState()
    }
    ,
    e.prototype.canScanFile = function() {
        return this.stateManager.getState() === st.NOT_STARTED
    }
    ,
    e.prototype.isScanning = function() {
        return this.stateManager.getState() !== st.NOT_STARTED
    }
    ,
    e.prototype.isStrictlyScanning = function() {
        return this.stateManager.getState() === st.SCANNING
    }
    ,
    e.prototype.isPaused = function() {
        return this.stateManager.getState() === st.PAUSED
    }
    ,
    e
}(), Vm = function() {
    function e() {}
    return e.create = function() {
        return new Um(new Fm)
    }
    ,
    e
}(), zm = function() {
    var e = function(t, i) {
        return e = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(l, c) {
            l.__proto__ = c
        }
        || function(l, c) {
            for (var f in c)
                Object.prototype.hasOwnProperty.call(c, f) && (l[f] = c[f])
        }
        ,
        e(t, i)
    };
    return function(t, i) {
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
        e(t, i);
        function l() {
            this.constructor = t
        }
        t.prototype = i === null ? Object.create(i) : (l.prototype = i.prototype,
        new l)
    }
}(), nn = function(e) {
    zm(t, e);
    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return t.DEFAULT_WIDTH = 300,
    t.DEFAULT_WIDTH_OFFSET = 2,
    t.FILE_SCAN_MIN_HEIGHT = 300,
    t.FILE_SCAN_HIDDEN_CANVAS_PADDING = 100,
    t.MIN_QR_BOX_SIZE = 50,
    t.SHADED_LEFT = 1,
    t.SHADED_RIGHT = 2,
    t.SHADED_TOP = 3,
    t.SHADED_BOTTOM = 4,
    t.SHADED_REGION_ELEMENT_ID = "qr-shaded-region",
    t.VERBOSE = !1,
    t.BORDER_SHADER_DEFAULT_COLOR = "#ffffff",
    t.BORDER_SHADER_MATCH_COLOR = "rgb(90, 193, 56)",
    t
}(Em), Hm = function() {
    function e(t, i) {
        this.logger = i,
        this.fps = nn.SCAN_DEFAULT_FPS,
        t ? (t.fps && (this.fps = t.fps),
        this.disableFlip = t.disableFlip === !0,
        this.qrbox = t.qrbox,
        this.aspectRatio = t.aspectRatio,
        this.videoConstraints = t.videoConstraints) : this.disableFlip = nn.DEFAULT_DISABLE_FLIP
    }
    return e.prototype.isMediaStreamConstraintsValid = function() {
        return this.videoConstraints ? zh.isMediaStreamConstraintsValid(this.videoConstraints, this.logger) : (this.logger.logError("Empty videoConstraints", !0),
        !1)
    }
    ,
    e.prototype.isShadedBoxEnabled = function() {
        return !Yn(this.qrbox)
    }
    ,
    e.create = function(t, i) {
        return new e(t,i)
    }
    ,
    e
}(), jm = function() {
    function e(t, i) {
        if (this.element = null,
        this.canvasElement = null,
        this.scannerPausedUiElement = null,
        this.hasBorderShaders = null,
        this.borderShaders = null,
        this.qrMatch = null,
        this.renderedCamera = null,
        this.qrRegion = null,
        this.context = null,
        this.lastScanImageFile = null,
        this.isScanning = !1,
        !document.getElementById(t))
            throw "HTML Element with id=".concat(t, " not found");
        this.elementId = t,
        this.verbose = !1;
        var l;
        typeof i == "boolean" ? this.verbose = i === !0 : i && (l = i,
        this.verbose = l.verbose === !0,
        l.experimentalFeatures),
        this.logger = new Am(this.verbose),
        this.qrcode = new Nm(this.getSupportedFormats(i),this.getUseBarCodeDetectorIfSupported(l),this.verbose,this.logger),
        this.foreverScanTimeout,
        this.shouldScan = !0,
        this.stateManagerProxy = Vm.create()
    }
    return e.prototype.start = function(t, i, l, c) {
        var f = this;
        if (!t)
            throw "cameraIdOrConfig is required";
        if (!l || typeof l != "function")
            throw "qrCodeSuccessCallback is required and should be a function.";
        var g;
        c ? g = c : g = this.verbose ? this.logger.log : function() {}
        ;
        var m = Hm.create(i, this.logger);
        this.clearElement();
        var y = !1;
        m.videoConstraints && (m.isMediaStreamConstraintsValid() ? y = !0 : this.logger.logError("'videoConstraints' is not valid 'MediaStreamConstraints, it will be ignored.'", !0));
        var x = y
          , S = document.getElementById(this.elementId);
        S.clientWidth ? S.clientWidth : nn.DEFAULT_WIDTH,
        S.style.position = "relative",
        this.shouldScan = !0,
        this.element = S;
        var v = this
          , D = this.stateManagerProxy.startTransition(st.SCANNING);
        return new Promise(function(B, k) {
            var M = x ? m.videoConstraints : v.createVideoConstraints(t);
            if (!M) {
                D.cancel(),
                k("videoConstraints should be defined");
                return
            }
            var X = {};
            (!x || m.aspectRatio) && (X.aspectRatio = m.aspectRatio);
            var O = {
                onRenderSurfaceReady: function(_, N) {
                    v.setupUi(_, N, m),
                    v.isScanning = !0,
                    v.foreverScan(m, l, g)
                }
            };
            km.failIfNotSupported().then(function(_) {
                _.create(M).then(function(N) {
                    return N.render(f.element, X, O).then(function(V) {
                        v.renderedCamera = V,
                        D.execute(),
                        B(null)
                    }).catch(function(V) {
                        D.cancel(),
                        k(V)
                    })
                }).catch(function(N) {
                    D.cancel(),
                    k(Di.errorGettingUserMedia(N))
                })
            }).catch(function(_) {
                D.cancel(),
                k(Di.cameraStreamingNotSupported())
            })
        }
        )
    }
    ,
    e.prototype.pause = function(t) {
        if (!this.stateManagerProxy.isStrictlyScanning())
            throw "Cannot pause, scanner is not scanning.";
        this.stateManagerProxy.directTransition(st.PAUSED),
        this.showPausedState(),
        (Yn(t) || t !== !0) && (t = !1),
        t && this.renderedCamera && this.renderedCamera.pause()
    }
    ,
    e.prototype.resume = function() {
        if (!this.stateManagerProxy.isPaused())
            throw "Cannot result, scanner is not paused.";
        if (!this.renderedCamera)
            throw "renderedCamera doesn't exist while trying resume()";
        var t = this
          , i = function() {
            t.stateManagerProxy.directTransition(st.SCANNING),
            t.hidePausedState()
        };
        if (!this.renderedCamera.isPaused()) {
            i();
            return
        }
        this.renderedCamera.resume(function() {
            i()
        })
    }
    ,
    e.prototype.getState = function() {
        return this.stateManagerProxy.getState()
    }
    ,
    e.prototype.stop = function() {
        var t = this;
        if (!this.stateManagerProxy.isScanning())
            throw "Cannot stop, scanner is not running or paused.";
        var i = this.stateManagerProxy.startTransition(st.NOT_STARTED);
        this.shouldScan = !1,
        this.foreverScanTimeout && clearTimeout(this.foreverScanTimeout);
        var l = function() {
            if (t.element) {
                var f = document.getElementById(nn.SHADED_REGION_ELEMENT_ID);
                f && t.element.removeChild(f)
            }
        }
          , c = this;
        return this.renderedCamera.close().then(function() {
            return c.renderedCamera = null,
            c.element && (c.element.removeChild(c.canvasElement),
            c.canvasElement = null),
            l(),
            c.qrRegion && (c.qrRegion = null),
            c.context && (c.context = null),
            i.execute(),
            c.hidePausedState(),
            c.isScanning = !1,
            Promise.resolve()
        })
    }
    ,
    e.prototype.scanFile = function(t, i) {
        return this.scanFileV2(t, i).then(function(l) {
            return l.decodedText
        })
    }
    ,
    e.prototype.scanFileV2 = function(t, i) {
        var l = this;
        if (!t || !(t instanceof File))
            throw "imageFile argument is mandatory and should be instance of File. Use 'event.target.files[0]'.";
        if (Yn(i) && (i = !0),
        !this.stateManagerProxy.canScanFile())
            throw "Cannot start file scan - ongoing camera scan";
        return new Promise(function(c, f) {
            l.possiblyCloseLastScanImageFile(),
            l.clearElement(),
            l.lastScanImageFile = URL.createObjectURL(t);
            var g = new Image;
            g.onload = function() {
                var m = g.width
                  , y = g.height
                  , x = document.getElementById(l.elementId)
                  , S = x.clientWidth ? x.clientWidth : nn.DEFAULT_WIDTH
                  , v = Math.max(x.clientHeight ? x.clientHeight : y, nn.FILE_SCAN_MIN_HEIGHT)
                  , D = l.computeCanvasDrawConfig(m, y, S, v);
                if (i) {
                    var B = l.createCanvasElement(S, v, "qr-canvas-visible");
                    B.style.display = "inline-block",
                    x.appendChild(B);
                    var k = B.getContext("2d");
                    if (!k)
                        throw "Unable to get 2d context from canvas";
                    k.canvas.width = S,
                    k.canvas.height = v,
                    k.drawImage(g, 0, 0, m, y, D.x, D.y, D.width, D.height)
                }
                var M = nn.FILE_SCAN_HIDDEN_CANVAS_PADDING
                  , X = Math.max(g.width, D.width)
                  , O = Math.max(g.height, D.height)
                  , _ = X + 2 * M
                  , N = O + 2 * M
                  , V = l.createCanvasElement(_, N);
                x.appendChild(V);
                var te = V.getContext("2d");
                if (!te)
                    throw "Unable to get 2d context from canvas";
                te.canvas.width = _,
                te.canvas.height = N,
                te.drawImage(g, 0, 0, m, y, M, M, X, O);
                try {
                    l.qrcode.decodeRobustlyAsync(V).then(function(Z) {
                        c(G0.createFromQrcodeResult(Z))
                    }).catch(f)
                } catch (Z) {
                    f("QR code parse error, error = ".concat(Z))
                }
            }
            ,
            g.onerror = f,
            g.onabort = f,
            g.onstalled = f,
            g.onsuspend = f,
            g.src = URL.createObjectURL(t)
        }
        )
    }
    ,
    e.prototype.clear = function() {
        this.clearElement()
    }
    ,
    e.getCameras = function() {
        return Lm.retrieve()
    }
    ,
    e.prototype.getRunningTrackCapabilities = function() {
        return this.getRenderedCameraOrFail().getRunningTrackCapabilities()
    }
    ,
    e.prototype.getRunningTrackSettings = function() {
        return this.getRenderedCameraOrFail().getRunningTrackSettings()
    }
    ,
    e.prototype.getRunningTrackCameraCapabilities = function() {
        return this.getRenderedCameraOrFail().getCapabilities()
    }
    ,
    e.prototype.applyVideoConstraints = function(t) {
        if (t) {
            if (!zh.isMediaStreamConstraintsValid(t, this.logger))
                throw "invalid videoConstaints passed, check logs for more details"
        } else
            throw "videoConstaints is required argument.";
        return this.getRenderedCameraOrFail().applyVideoConstraints(t)
    }
    ,
    e.prototype.getRenderedCameraOrFail = function() {
        if (this.renderedCamera == null)
            throw "Scanning is not in running state, call this API only when QR code scanning using camera is in running state.";
        return this.renderedCamera
    }
    ,
    e.prototype.getSupportedFormats = function(t) {
        var i = [se.QR_CODE, se.AZTEC, se.CODABAR, se.CODE_39, se.CODE_93, se.CODE_128, se.DATA_MATRIX, se.MAXICODE, se.ITF, se.EAN_13, se.EAN_8, se.PDF_417, se.RSS_14, se.RSS_EXPANDED, se.UPC_A, se.UPC_E, se.UPC_EAN_EXTENSION];
        if (!t || typeof t == "boolean" || !t.formatsToSupport)
            return i;
        if (!Array.isArray(t.formatsToSupport))
            throw "configOrVerbosityFlag.formatsToSupport should be undefined or an array.";
        if (t.formatsToSupport.length === 0)
            throw "Atleast 1 formatsToSupport is needed.";
        for (var l = [], c = 0, f = t.formatsToSupport; c < f.length; c++) {
            var g = f[c];
            ym(g) ? l.push(g) : this.logger.warn("Invalid format: ".concat(g, " passed in config, ignoring."))
        }
        if (l.length === 0)
            throw "None of formatsToSupport match supported values.";
        return l
    }
    ,
    e.prototype.getUseBarCodeDetectorIfSupported = function(t) {
        if (Yn(t))
            return !0;
        if (!Yn(t.useBarCodeDetectorIfSupported))
            return t.useBarCodeDetectorIfSupported !== !1;
        if (Yn(t.experimentalFeatures))
            return !0;
        var i = t.experimentalFeatures;
        return Yn(i.useBarCodeDetectorIfSupported) ? !0 : i.useBarCodeDetectorIfSupported !== !1
    }
    ,
    e.prototype.validateQrboxSize = function(t, i, l) {
        var c = this
          , f = l.qrbox;
        this.validateQrboxConfig(f);
        var g = this.toQrdimensions(t, i, f)
          , m = function(x) {
            if (x < nn.MIN_QR_BOX_SIZE)
                throw "minimum size of 'config.qrbox' dimension value is" + " ".concat(nn.MIN_QR_BOX_SIZE, "px.")
        }
          , y = function(x) {
            return x > t && (c.logger.warn("`qrbox.width` or `qrbox` is larger than the width of the root element. The width will be truncated to the width of root element."),
            x = t),
            x
        };
        m(g.width),
        m(g.height),
        g.width = y(g.width)
    }
    ,
    e.prototype.validateQrboxConfig = function(t) {
        if (typeof t != "number" && typeof t != "function" && (t.width === void 0 || t.height === void 0))
            throw "Invalid instance of QrDimensions passed for 'config.qrbox'. Both 'width' and 'height' should be set."
    }
    ,
    e.prototype.toQrdimensions = function(t, i, l) {
        if (typeof l == "number")
            return {
                width: l,
                height: l
            };
        if (typeof l == "function")
            try {
                return l(t, i)
            } catch (c) {
                throw new Error("qrbox config was passed as a function but it failed with unknown error" + c)
            }
        return l
    }
    ,
    e.prototype.setupUi = function(t, i, l) {
        l.isShadedBoxEnabled() && this.validateQrboxSize(t, i, l);
        var c = Yn(l.qrbox) ? {
            width: t,
            height: i
        } : l.qrbox;
        this.validateQrboxConfig(c);
        var f = this.toQrdimensions(t, i, c);
        f.height > i && this.logger.warn("[Html5Qrcode] config.qrbox has height that isgreater than the height of the video stream. Shading will be ignored");
        var g = l.isShadedBoxEnabled() && f.height <= i
          , m = {
            x: 0,
            y: 0,
            width: t,
            height: i
        }
          , y = g ? this.getShadedRegionBounds(t, i, f) : m
          , x = this.createCanvasElement(y.width, y.height)
          , S = {
            willReadFrequently: !0
        }
          , v = x.getContext("2d", S);
        v.canvas.width = y.width,
        v.canvas.height = y.height,
        this.element.append(x),
        g && this.possiblyInsertShadingElement(this.element, t, i, f),
        this.createScannerPausedUiElement(this.element),
        this.qrRegion = y,
        this.context = v,
        this.canvasElement = x
    }
    ,
    e.prototype.createScannerPausedUiElement = function(t) {
        var i = document.createElement("div");
        i.innerText = Di.scannerPaused(),
        i.style.display = "none",
        i.style.position = "absolute",
        i.style.top = "0px",
        i.style.zIndex = "1",
        i.style.background = "rgba(9, 9, 9, 0.46)",
        i.style.color = "#FFECEC",
        i.style.textAlign = "center",
        i.style.width = "100%",
        t.appendChild(i),
        this.scannerPausedUiElement = i
    }
    ,
    e.prototype.scanContext = function(t, i) {
        var l = this;
        return this.stateManagerProxy.isPaused() ? Promise.resolve(!1) : this.qrcode.decodeAsync(this.canvasElement).then(function(c) {
            return t(c.text, G0.createFromQrcodeResult(c)),
            l.possiblyUpdateShaders(!0),
            !0
        }).catch(function(c) {
            l.possiblyUpdateShaders(!1);
            var f = Di.codeParseError(c);
            return i(f, Cm.createFrom(f)),
            !1
        })
    }
    ,
    e.prototype.foreverScan = function(t, i, l) {
        var c = this;
        if (this.shouldScan && this.renderedCamera) {
            var f = this.renderedCamera.getSurface()
              , g = f.videoWidth / f.clientWidth
              , m = f.videoHeight / f.clientHeight;
            if (!this.qrRegion)
                throw "qrRegion undefined when localMediaStream is ready.";
            var y = this.qrRegion.width * g
              , x = this.qrRegion.height * m
              , S = this.qrRegion.x * g
              , v = this.qrRegion.y * m;
            this.context.drawImage(f, S, v, y, x, 0, 0, this.qrRegion.width, this.qrRegion.height);
            var D = function() {
                c.foreverScanTimeout = setTimeout(function() {
                    c.foreverScan(t, i, l)
                }, c.getTimeoutFps(t.fps))
            };
            this.scanContext(i, l).then(function(B) {
                !B && t.disableFlip !== !0 ? (c.context.translate(c.context.canvas.width, 0),
                c.context.scale(-1, 1),
                c.scanContext(i, l).finally(function() {
                    D()
                })) : D()
            }).catch(function(B) {
                c.logger.logError("Error happend while scanning context", B),
                D()
            })
        }
    }
    ,
    e.prototype.createVideoConstraints = function(t) {
        if (typeof t == "string")
            return {
                deviceId: {
                    exact: t
                }
            };
        if (typeof t == "object") {
            var i = "facingMode"
              , l = "deviceId"
              , c = {
                user: !0,
                environment: !0
            }
              , f = "exact"
              , g = function(k) {
                if (k in c)
                    return !0;
                throw "config has invalid 'facingMode' value = " + "'".concat(k, "'")
            }
              , m = Object.keys(t);
            if (m.length !== 1)
                throw "'cameraIdOrConfig' object should have exactly 1 key," + " if passed as an object, found ".concat(m.length, " keys");
            var y = Object.keys(t)[0];
            if (y !== i && y !== l)
                throw "Only '".concat(i, "' and '").concat(l, "' ") + " are supported for 'cameraIdOrConfig'";
            if (y === i) {
                var x = t.facingMode;
                if (typeof x == "string") {
                    if (g(x))
                        return {
                            facingMode: x
                        }
                } else if (typeof x == "object")
                    if (f in x) {
                        if (g(x["".concat(f)]))
                            return {
                                facingMode: {
                                    exact: x["".concat(f)]
                                }
                            }
                    } else
                        throw "'facingMode' should be string or object with" + " ".concat(f, " as key.");
                else {
                    var S = typeof x;
                    throw "Invalid type of 'facingMode' = ".concat(S)
                }
            } else {
                var v = t.deviceId;
                if (typeof v == "string")
                    return {
                        deviceId: v
                    };
                if (typeof v == "object") {
                    if (f in v)
                        return {
                            deviceId: {
                                exact: v["".concat(f)]
                            }
                        };
                    throw "'deviceId' should be string or object with" + " ".concat(f, " as key.")
                } else {
                    var D = typeof v;
                    throw "Invalid type of 'deviceId' = ".concat(D)
                }
            }
        }
        var B = typeof t;
        throw "Invalid type of 'cameraIdOrConfig' = ".concat(B)
    }
    ,
    e.prototype.computeCanvasDrawConfig = function(t, i, l, c) {
        if (t <= l && i <= c) {
            var f = (l - t) / 2
              , g = (c - i) / 2;
            return {
                x: f,
                y: g,
                width: t,
                height: i
            }
        } else {
            var m = t
              , y = i;
            return t > l && (i = l / t * i,
            t = l),
            i > c && (t = c / i * t,
            i = c),
            this.logger.log("Image downsampled from " + "".concat(m, "X").concat(y) + " to ".concat(t, "X").concat(i, ".")),
            this.computeCanvasDrawConfig(t, i, l, c)
        }
    }
    ,
    e.prototype.clearElement = function() {
        if (this.stateManagerProxy.isScanning())
            throw "Cannot clear while scan is ongoing, close it first.";
        var t = document.getElementById(this.elementId);
        t && (t.innerHTML = "")
    }
    ,
    e.prototype.possiblyUpdateShaders = function(t) {
        this.qrMatch !== t && (this.hasBorderShaders && this.borderShaders && this.borderShaders.length && this.borderShaders.forEach(function(i) {
            i.style.backgroundColor = t ? nn.BORDER_SHADER_MATCH_COLOR : nn.BORDER_SHADER_DEFAULT_COLOR
        }),
        this.qrMatch = t)
    }
    ,
    e.prototype.possiblyCloseLastScanImageFile = function() {
        this.lastScanImageFile && (URL.revokeObjectURL(this.lastScanImageFile),
        this.lastScanImageFile = null)
    }
    ,
    e.prototype.createCanvasElement = function(t, i, l) {
        var c = t
          , f = i
          , g = document.createElement("canvas");
        return g.style.width = "".concat(c, "px"),
        g.style.height = "".concat(f, "px"),
        g.style.display = "none",
        g.id = Yn(l) ? "qr-canvas" : l,
        g
    }
    ,
    e.prototype.getShadedRegionBounds = function(t, i, l) {
        if (l.width > t || l.height > i)
            throw "'config.qrbox' dimensions should not be greater than the dimensions of the root HTML element.";
        return {
            x: (t - l.width) / 2,
            y: (i - l.height) / 2,
            width: l.width,
            height: l.height
        }
    }
    ,
    e.prototype.possiblyInsertShadingElement = function(t, i, l, c) {
        if (!(i - c.width < 1 || l - c.height < 1)) {
            var f = document.createElement("div");
            f.style.position = "absolute";
            var g = (i - c.width) / 2
              , m = (l - c.height) / 2;
            if (f.style.borderLeft = "".concat(g, "px solid rgba(0, 0, 0, 0.48)"),
            f.style.borderRight = "".concat(g, "px solid rgba(0, 0, 0, 0.48)"),
            f.style.borderTop = "".concat(m, "px solid rgba(0, 0, 0, 0.48)"),
            f.style.borderBottom = "".concat(m, "px solid rgba(0, 0, 0, 0.48)"),
            f.style.boxSizing = "border-box",
            f.style.top = "0px",
            f.style.bottom = "0px",
            f.style.left = "0px",
            f.style.right = "0px",
            f.id = "".concat(nn.SHADED_REGION_ELEMENT_ID),
            i - c.width < 11 || l - c.height < 11)
                this.hasBorderShaders = !1;
            else {
                var y = 5
                  , x = 40;
                this.insertShaderBorders(f, x, y, -y, null, 0, !0),
                this.insertShaderBorders(f, x, y, -y, null, 0, !1),
                this.insertShaderBorders(f, x, y, null, -y, 0, !0),
                this.insertShaderBorders(f, x, y, null, -y, 0, !1),
                this.insertShaderBorders(f, y, x + y, -y, null, -y, !0),
                this.insertShaderBorders(f, y, x + y, null, -y, -y, !0),
                this.insertShaderBorders(f, y, x + y, -y, null, -y, !1),
                this.insertShaderBorders(f, y, x + y, null, -y, -y, !1),
                this.hasBorderShaders = !0
            }
            t.append(f)
        }
    }
    ,
    e.prototype.insertShaderBorders = function(t, i, l, c, f, g, m) {
        var y = document.createElement("div");
        y.style.position = "absolute",
        y.style.backgroundColor = nn.BORDER_SHADER_DEFAULT_COLOR,
        y.style.width = "".concat(i, "px"),
        y.style.height = "".concat(l, "px"),
        c !== null && (y.style.top = "".concat(c, "px")),
        f !== null && (y.style.bottom = "".concat(f, "px")),
        m ? y.style.left = "".concat(g, "px") : y.style.right = "".concat(g, "px"),
        this.borderShaders || (this.borderShaders = []),
        this.borderShaders.push(y),
        t.appendChild(y)
    }
    ,
    e.prototype.showPausedState = function() {
        if (!this.scannerPausedUiElement)
            throw "[internal error] scanner paused UI element not found";
        this.scannerPausedUiElement.style.display = "block"
    }
    ,
    e.prototype.hidePausedState = function() {
        if (!this.scannerPausedUiElement)
            throw "[internal error] scanner paused UI element not found";
        this.scannerPausedUiElement.style.display = "none"
    }
    ,
    e.prototype.getTimeoutFps = function(t) {
        return 1e3 / t
    }
    ,
    e
}(), J0;
(function(e) {
    e[e.STATUS_DEFAULT = 0] = "STATUS_DEFAULT",
    e[e.STATUS_SUCCESS = 1] = "STATUS_SUCCESS",
    e[e.STATUS_WARNING = 2] = "STATUS_WARNING",
    e[e.STATUS_REQUESTING_PERMISSION = 3] = "STATUS_REQUESTING_PERMISSION"
}
)(J0 || (J0 = {}));
function Wm({onClose: e, children: t}) {
    return wx.createPortal(q.jsx("div", {
        className: "fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75",
        children: q.jsxs("div", {
            className: "bg-white p-4 rounded shadow-lg",
            children: [t, q.jsx("button", {
                onClick: e,
                className: "mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
                children: "Close"
            })]
        })
    }), document.getElementById("root"))
}
const Gm = "https://barbero-backend-5gj8.onrender.com";
function Xm() {
    const e = ee.useRef(null)
      , [t,i] = ee.useState(null)
      , [l,c] = ee.useState("")
      , [f,g] = ee.useState(!1)
      , [m,y] = ee.useState("")
      , [x,S] = ee.useState("")
      , v = e1();
    ee.useEffect(()=>{
        if (!t) {
            const k = new jm("qr-reader");
            i(k);
            const M = {
                fps: 10,
                qrbox: 250
            };
            k.start({
                facingMode: "environment"
            }, M, X=>{
                D(X)
            }
            , X=>{
                console.error("QR Code scan error:", X)
            }
            ).then(()=>{
                console.log("QR Scanning started.")
            }
            ).catch(X=>{
                console.error("Unable to start QR scanner", X),
                c("Unable to start QR scanner. Make sure camera is accessible.")
            }
            )
        }
        return ()=>{
            t && t.isScanning && t.stop().then(()=>{
                console.log("QR Scanning stopped.")
            }
            ).catch(k=>{
                console.error("Unable to stop QR scanner", k)
            }
            )
        }
    }
    , [t]);
    const D = ee.useCallback(k=>{
        fetch(`${Gm}/client/${k}/create-visit`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                clientId: k
            })
        }).then(M=>{
            if (!M.ok)
                throw new Error(`Failed to log visit: ${M.statusText} (${M.status})`);
            return M.json()
        }
        ).then(M=>{
            y(M.clientName),
            S(k),
            g(!0),
            t && t.stop().then(()=>{
                console.log("QR Scanning stopped.")
            }
            ).catch(X=>{
                console.error("Unable to stop QR scanner", X)
            }
            )
        }
        ).catch(M=>{
            console.error("API call error:", M),
            c(`Error logging visit: ${M.message}`)
        }
        )
    }
    , [t])
      , B = ee.useCallback(()=>{
        v(`/client/${x}`)
    }
    , [x, v]);
    return q.jsxs(so, {
        className: "flex flex-col",
        children: [q.jsx("h1", {
            className: "text-2xl text-center font-bold",
            children: "Scan QR"
        }), q.jsx("hr", {
            className: "my-8"
        }), q.jsx("div", {
            id: "qr-reader",
            ref: e,
            style: {
                width: "100%",
                height: "100%"
            }
        }), l && q.jsx("p", {
            className: "text-red-500",
            children: l
        }), q.jsx("hr", {
            className: "my-8"
        }), f && q.jsxs(Wm, {
            onClose: ()=>g(!1),
            children: [q.jsxs("p", {
                children: ["Visit successfully logged for ", m]
            }), q.jsx("button", {
                onClick: B,
                className: "mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
                children: "View Client"
            })]
        })]
    })
}
function jh(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: Ym} = Object.prototype
  , {getPrototypeOf: n1} = Object
  , Ql = (e=>t=>{
    const i = Ym.call(t);
    return e[i] || (e[i] = i.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , Mn = e=>(e = e.toLowerCase(),
t=>Ql(t) === e)
  , ql = e=>t=>typeof t === e
  , {isArray: Qi} = Array
  , Js = ql("undefined");
function Zm(e) {
    return e !== null && !Js(e) && e.constructor !== null && !Js(e.constructor) && yn(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const Wh = Mn("ArrayBuffer");
function Km(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Wh(e.buffer),
    t
}
const Qm = ql("string")
  , yn = ql("function")
  , Gh = ql("number")
  , Jl = e=>e !== null && typeof e == "object"
  , qm = e=>e === !0 || e === !1
  , qo = e=>{
    if (Ql(e) !== "object")
        return !1;
    const t = n1(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
  , Jm = Mn("Date")
  , $m = Mn("File")
  , ew = Mn("Blob")
  , tw = Mn("FileList")
  , nw = e=>Jl(e) && yn(e.pipe)
  , rw = e=>{
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || yn(e.append) && ((t = Ql(e)) === "formdata" || t === "object" && yn(e.toString) && e.toString() === "[object FormData]"))
}
  , iw = Mn("URLSearchParams")
  , [sw,ow,lw,aw] = ["ReadableStream", "Request", "Response", "Headers"].map(Mn)
  , uw = e=>e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function oo(e, t, {allOwnKeys: i=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let l, c;
    if (typeof e != "object" && (e = [e]),
    Qi(e))
        for (l = 0,
        c = e.length; l < c; l++)
            t.call(null, e[l], l, e);
    else {
        const f = i ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , g = f.length;
        let m;
        for (l = 0; l < g; l++)
            m = f[l],
            t.call(null, e[m], m, e)
    }
}
function Xh(e, t) {
    t = t.toLowerCase();
    const i = Object.keys(e);
    let l = i.length, c;
    for (; l-- > 0; )
        if (c = i[l],
        t === c.toLowerCase())
            return c;
    return null
}
const Yh = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , Zh = e=>!Js(e) && e !== Yh;
function Qu() {
    const {caseless: e} = Zh(this) && this || {}
      , t = {}
      , i = (l,c)=>{
        const f = e && Xh(t, c) || c;
        qo(t[f]) && qo(l) ? t[f] = Qu(t[f], l) : qo(l) ? t[f] = Qu({}, l) : Qi(l) ? t[f] = l.slice() : t[f] = l
    }
    ;
    for (let l = 0, c = arguments.length; l < c; l++)
        arguments[l] && oo(arguments[l], i);
    return t
}
const cw = (e,t,i,{allOwnKeys: l}={})=>(oo(t, (c,f)=>{
    i && yn(c) ? e[f] = jh(c, i) : e[f] = c
}
, {
    allOwnKeys: l
}),
e)
  , fw = e=>(e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
  , dw = (e,t,i,l)=>{
    e.prototype = Object.create(t.prototype, l),
    e.prototype.constructor = e,
    Object.defineProperty(e, "super", {
        value: t.prototype
    }),
    i && Object.assign(e.prototype, i)
}
  , hw = (e,t,i,l)=>{
    let c, f, g;
    const m = {};
    if (t = t || {},
    e == null)
        return t;
    do {
        for (c = Object.getOwnPropertyNames(e),
        f = c.length; f-- > 0; )
            g = c[f],
            (!l || l(g, e, t)) && !m[g] && (t[g] = e[g],
            m[g] = !0);
        e = i !== !1 && n1(e)
    } while (e && (!i || i(e, t)) && e !== Object.prototype);
    return t
}
  , gw = (e,t,i)=>{
    e = String(e),
    (i === void 0 || i > e.length) && (i = e.length),
    i -= t.length;
    const l = e.indexOf(t, i);
    return l !== -1 && l === i
}
  , pw = e=>{
    if (!e)
        return null;
    if (Qi(e))
        return e;
    let t = e.length;
    if (!Gh(t))
        return null;
    const i = new Array(t);
    for (; t-- > 0; )
        i[t] = e[t];
    return i
}
  , xw = (e=>t=>e && t instanceof e)(typeof Uint8Array < "u" && n1(Uint8Array))
  , mw = (e,t)=>{
    const l = (e && e[Symbol.iterator]).call(e);
    let c;
    for (; (c = l.next()) && !c.done; ) {
        const f = c.value;
        t.call(e, f[0], f[1])
    }
}
  , ww = (e,t)=>{
    let i;
    const l = [];
    for (; (i = e.exec(t)) !== null; )
        l.push(i);
    return l
}
  , yw = Mn("HTMLFormElement")
  , Ew = e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(i, l, c) {
    return l.toUpperCase() + c
})
  , $0 = (({hasOwnProperty: e})=>(t,i)=>e.call(t, i))(Object.prototype)
  , Cw = Mn("RegExp")
  , Kh = (e,t)=>{
    const i = Object.getOwnPropertyDescriptors(e)
      , l = {};
    oo(i, (c,f)=>{
        let g;
        (g = t(c, f, e)) !== !1 && (l[f] = g || c)
    }
    ),
    Object.defineProperties(e, l)
}
  , Aw = e=>{
    Kh(e, (t,i)=>{
        if (yn(e) && ["arguments", "caller", "callee"].indexOf(i) !== -1)
            return !1;
        const l = e[i];
        if (yn(l)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = ()=>{
                throw Error("Can not rewrite read-only method '" + i + "'")
            }
            )
        }
    }
    )
}
  , Sw = (e,t)=>{
    const i = {}
      , l = c=>{
        c.forEach(f=>{
            i[f] = !0
        }
        )
    }
    ;
    return Qi(e) ? l(e) : l(String(e).split(t)),
    i
}
  , vw = ()=>{}
  , Iw = (e,t)=>e != null && Number.isFinite(e = +e) ? e : t
  , Za = "abcdefghijklmnopqrstuvwxyz"
  , ef = "0123456789"
  , Qh = {
    DIGIT: ef,
    ALPHA: Za,
    ALPHA_DIGIT: Za + Za.toUpperCase() + ef
}
  , Tw = (e=16,t=Qh.ALPHA_DIGIT)=>{
    let i = "";
    const {length: l} = t;
    for (; e--; )
        i += t[Math.random() * l | 0];
    return i
}
;
function Nw(e) {
    return !!(e && yn(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const _w = e=>{
    const t = new Array(10)
      , i = (l,c)=>{
        if (Jl(l)) {
            if (t.indexOf(l) >= 0)
                return;
            if (!("toJSON"in l)) {
                t[c] = l;
                const f = Qi(l) ? [] : {};
                return oo(l, (g,m)=>{
                    const y = i(g, c + 1);
                    !Js(y) && (f[m] = y)
                }
                ),
                t[c] = void 0,
                f
            }
        }
        return l
    }
    ;
    return i(e, 0)
}
  , Rw = Mn("AsyncFunction")
  , Ow = e=>e && (Jl(e) || yn(e)) && yn(e.then) && yn(e.catch)
  , H = {
    isArray: Qi,
    isArrayBuffer: Wh,
    isBuffer: Zm,
    isFormData: rw,
    isArrayBufferView: Km,
    isString: Qm,
    isNumber: Gh,
    isBoolean: qm,
    isObject: Jl,
    isPlainObject: qo,
    isReadableStream: sw,
    isRequest: ow,
    isResponse: lw,
    isHeaders: aw,
    isUndefined: Js,
    isDate: Jm,
    isFile: $m,
    isBlob: ew,
    isRegExp: Cw,
    isFunction: yn,
    isStream: nw,
    isURLSearchParams: iw,
    isTypedArray: xw,
    isFileList: tw,
    forEach: oo,
    merge: Qu,
    extend: cw,
    trim: uw,
    stripBOM: fw,
    inherits: dw,
    toFlatObject: hw,
    kindOf: Ql,
    kindOfTest: Mn,
    endsWith: gw,
    toArray: pw,
    forEachEntry: mw,
    matchAll: ww,
    isHTMLForm: yw,
    hasOwnProperty: $0,
    hasOwnProp: $0,
    reduceDescriptors: Kh,
    freezeMethods: Aw,
    toObjectSet: Sw,
    toCamelCase: Ew,
    noop: vw,
    toFiniteNumber: Iw,
    findKey: Xh,
    global: Yh,
    isContextDefined: Zh,
    ALPHABET: Qh,
    generateString: Tw,
    isSpecCompliantForm: Nw,
    toJSONObject: _w,
    isAsyncFn: Rw,
    isThenable: Ow
};
function ye(e, t, i, l, c) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    i && (this.config = i),
    l && (this.request = l),
    c && (this.response = c)
}
H.inherits(ye, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: H.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const qh = ye.prototype
  , Jh = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e=>{
    Jh[e] = {
        value: e
    }
}
);
Object.defineProperties(ye, Jh);
Object.defineProperty(qh, "isAxiosError", {
    value: !0
});
ye.from = (e,t,i,l,c,f)=>{
    const g = Object.create(qh);
    return H.toFlatObject(e, g, function(y) {
        return y !== Error.prototype
    }, m=>m !== "isAxiosError"),
    ye.call(g, e.message, t, i, l, c),
    g.cause = e,
    g.name = e.name,
    f && Object.assign(g, f),
    g
}
;
const bw = null;
function qu(e) {
    return H.isPlainObject(e) || H.isArray(e)
}
function $h(e) {
    return H.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function tf(e, t, i) {
    return e ? e.concat(t).map(function(c, f) {
        return c = $h(c),
        !i && f ? "[" + c + "]" : c
    }).join(i ? "." : "") : t
}
function Dw(e) {
    return H.isArray(e) && !e.some(qu)
}
const Mw = H.toFlatObject(H, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});
function $l(e, t, i) {
    if (!H.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData,
    i = H.toFlatObject(i, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(M, X) {
        return !H.isUndefined(X[M])
    });
    const l = i.metaTokens
      , c = i.visitor || S
      , f = i.dots
      , g = i.indexes
      , y = (i.Blob || typeof Blob < "u" && Blob) && H.isSpecCompliantForm(t);
    if (!H.isFunction(c))
        throw new TypeError("visitor must be a function");
    function x(k) {
        if (k === null)
            return "";
        if (H.isDate(k))
            return k.toISOString();
        if (!y && H.isBlob(k))
            throw new ye("Blob is not supported. Use a Buffer instead.");
        return H.isArrayBuffer(k) || H.isTypedArray(k) ? y && typeof Blob == "function" ? new Blob([k]) : Buffer.from(k) : k
    }
    function S(k, M, X) {
        let O = k;
        if (k && !X && typeof k == "object") {
            if (H.endsWith(M, "{}"))
                M = l ? M : M.slice(0, -2),
                k = JSON.stringify(k);
            else if (H.isArray(k) && Dw(k) || (H.isFileList(k) || H.endsWith(M, "[]")) && (O = H.toArray(k)))
                return M = $h(M),
                O.forEach(function(N, V) {
                    !(H.isUndefined(N) || N === null) && t.append(g === !0 ? tf([M], V, f) : g === null ? M : M + "[]", x(N))
                }),
                !1
        }
        return qu(k) ? !0 : (t.append(tf(X, M, f), x(k)),
        !1)
    }
    const v = []
      , D = Object.assign(Mw, {
        defaultVisitor: S,
        convertValue: x,
        isVisitable: qu
    });
    function B(k, M) {
        if (!H.isUndefined(k)) {
            if (v.indexOf(k) !== -1)
                throw Error("Circular reference detected in " + M.join("."));
            v.push(k),
            H.forEach(k, function(O, _) {
                (!(H.isUndefined(O) || O === null) && c.call(t, O, H.isString(_) ? _.trim() : _, M, D)) === !0 && B(O, M ? M.concat(_) : [_])
            }),
            v.pop()
        }
    }
    if (!H.isObject(e))
        throw new TypeError("data must be an object");
    return B(e),
    t
}
function nf(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(l) {
        return t[l]
    })
}
function r1(e, t) {
    this._pairs = [],
    e && $l(e, this, t)
}
const e2 = r1.prototype;
e2.append = function(t, i) {
    this._pairs.push([t, i])
}
;
e2.toString = function(t) {
    const i = t ? function(l) {
        return t.call(this, l, nf)
    }
    : nf;
    return this._pairs.map(function(c) {
        return i(c[0]) + "=" + i(c[1])
    }, "").join("&")
}
;
function kw(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function t2(e, t, i) {
    if (!t)
        return e;
    const l = i && i.encode || kw
      , c = i && i.serialize;
    let f;
    if (c ? f = c(t, i) : f = H.isURLSearchParams(t) ? t.toString() : new r1(t,i).toString(l),
    f) {
        const g = e.indexOf("#");
        g !== -1 && (e = e.slice(0, g)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + f
    }
    return e
}
class rf {
    constructor() {
        this.handlers = []
    }
    use(t, i, l) {
        return this.handlers.push({
            fulfilled: t,
            rejected: i,
            synchronous: l ? l.synchronous : !1,
            runWhen: l ? l.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        H.forEach(this.handlers, function(l) {
            l !== null && t(l)
        })
    }
}
const n2 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , Pw = typeof URLSearchParams < "u" ? URLSearchParams : r1
  , Bw = typeof FormData < "u" ? FormData : null
  , Lw = typeof Blob < "u" ? Blob : null
  , Fw = {
    isBrowser: !0,
    classes: {
        URLSearchParams: Pw,
        FormData: Bw,
        Blob: Lw
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , i1 = typeof window < "u" && typeof document < "u"
  , Uw = (e=>i1 && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product)
  , Vw = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , zw = i1 && window.location.href || "http://localhost"
  , Hw = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: i1,
    hasStandardBrowserEnv: Uw,
    hasStandardBrowserWebWorkerEnv: Vw,
    origin: zw
}, Symbol.toStringTag, {
    value: "Module"
}))
  , bn = {
    ...Hw,
    ...Fw
};
function jw(e, t) {
    return $l(e, new bn.classes.URLSearchParams, Object.assign({
        visitor: function(i, l, c, f) {
            return bn.isNode && H.isBuffer(i) ? (this.append(l, i.toString("base64")),
            !1) : f.defaultVisitor.apply(this, arguments)
        }
    }, t))
}
function Ww(e) {
    return H.matchAll(/\w+|\[(\w*)]/g, e).map(t=>t[0] === "[]" ? "" : t[1] || t[0])
}
function Gw(e) {
    const t = {}
      , i = Object.keys(e);
    let l;
    const c = i.length;
    let f;
    for (l = 0; l < c; l++)
        f = i[l],
        t[f] = e[f];
    return t
}
function r2(e) {
    function t(i, l, c, f) {
        let g = i[f++];
        if (g === "__proto__")
            return !0;
        const m = Number.isFinite(+g)
          , y = f >= i.length;
        return g = !g && H.isArray(c) ? c.length : g,
        y ? (H.hasOwnProp(c, g) ? c[g] = [c[g], l] : c[g] = l,
        !m) : ((!c[g] || !H.isObject(c[g])) && (c[g] = []),
        t(i, l, c[g], f) && H.isArray(c[g]) && (c[g] = Gw(c[g])),
        !m)
    }
    if (H.isFormData(e) && H.isFunction(e.entries)) {
        const i = {};
        return H.forEachEntry(e, (l,c)=>{
            t(Ww(l), c, i, 0)
        }
        ),
        i
    }
    return null
}
function Xw(e, t, i) {
    if (H.isString(e))
        try {
            return (t || JSON.parse)(e),
            H.trim(e)
        } catch (l) {
            if (l.name !== "SyntaxError")
                throw l
        }
    return (i || JSON.stringify)(e)
}
const lo = {
    transitional: n2,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(t, i) {
        const l = i.getContentType() || ""
          , c = l.indexOf("application/json") > -1
          , f = H.isObject(t);
        if (f && H.isHTMLForm(t) && (t = new FormData(t)),
        H.isFormData(t))
            return c ? JSON.stringify(r2(t)) : t;
        if (H.isArrayBuffer(t) || H.isBuffer(t) || H.isStream(t) || H.isFile(t) || H.isBlob(t) || H.isReadableStream(t))
            return t;
        if (H.isArrayBufferView(t))
            return t.buffer;
        if (H.isURLSearchParams(t))
            return i.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            t.toString();
        let m;
        if (f) {
            if (l.indexOf("application/x-www-form-urlencoded") > -1)
                return jw(t, this.formSerializer).toString();
            if ((m = H.isFileList(t)) || l.indexOf("multipart/form-data") > -1) {
                const y = this.env && this.env.FormData;
                return $l(m ? {
                    "files[]": t
                } : t, y && new y, this.formSerializer)
            }
        }
        return f || c ? (i.setContentType("application/json", !1),
        Xw(t)) : t
    }
    ],
    transformResponse: [function(t) {
        const i = this.transitional || lo.transitional
          , l = i && i.forcedJSONParsing
          , c = this.responseType === "json";
        if (H.isResponse(t) || H.isReadableStream(t))
            return t;
        if (t && H.isString(t) && (l && !this.responseType || c)) {
            const g = !(i && i.silentJSONParsing) && c;
            try {
                return JSON.parse(t)
            } catch (m) {
                if (g)
                    throw m.name === "SyntaxError" ? ye.from(m, ye.ERR_BAD_RESPONSE, this, null, this.response) : m
            }
        }
        return t
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: bn.classes.FormData,
        Blob: bn.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
H.forEach(["delete", "get", "head", "post", "put", "patch"], e=>{
    lo.headers[e] = {}
}
);
const Yw = H.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , Zw = e=>{
    const t = {};
    let i, l, c;
    return e && e.split(`
`).forEach(function(g) {
        c = g.indexOf(":"),
        i = g.substring(0, c).trim().toLowerCase(),
        l = g.substring(c + 1).trim(),
        !(!i || t[i] && Yw[i]) && (i === "set-cookie" ? t[i] ? t[i].push(l) : t[i] = [l] : t[i] = t[i] ? t[i] + ", " + l : l)
    }),
    t
}
  , sf = Symbol("internals");
function ys(e) {
    return e && String(e).trim().toLowerCase()
}
function Jo(e) {
    return e === !1 || e == null ? e : H.isArray(e) ? e.map(Jo) : String(e)
}
function Kw(e) {
    const t = Object.create(null)
      , i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let l;
    for (; l = i.exec(e); )
        t[l[1]] = l[2];
    return t
}
const Qw = e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ka(e, t, i, l, c) {
    if (H.isFunction(l))
        return l.call(this, t, i);
    if (c && (t = i),
    !!H.isString(t)) {
        if (H.isString(l))
            return t.indexOf(l) !== -1;
        if (H.isRegExp(l))
            return l.test(t)
    }
}
function qw(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t,i,l)=>i.toUpperCase() + l)
}
function Jw(e, t) {
    const i = H.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(l=>{
        Object.defineProperty(e, l + i, {
            value: function(c, f, g) {
                return this[l].call(this, t, c, f, g)
            },
            configurable: !0
        })
    }
    )
}
class en {
    constructor(t) {
        t && this.set(t)
    }
    set(t, i, l) {
        const c = this;
        function f(m, y, x) {
            const S = ys(y);
            if (!S)
                throw new Error("header name must be a non-empty string");
            const v = H.findKey(c, S);
            (!v || c[v] === void 0 || x === !0 || x === void 0 && c[v] !== !1) && (c[v || y] = Jo(m))
        }
        const g = (m,y)=>H.forEach(m, (x,S)=>f(x, S, y));
        if (H.isPlainObject(t) || t instanceof this.constructor)
            g(t, i);
        else if (H.isString(t) && (t = t.trim()) && !Qw(t))
            g(Zw(t), i);
        else if (H.isHeaders(t))
            for (const [m,y] of t.entries())
                f(y, m, l);
        else
            t != null && f(i, t, l);
        return this
    }
    get(t, i) {
        if (t = ys(t),
        t) {
            const l = H.findKey(this, t);
            if (l) {
                const c = this[l];
                if (!i)
                    return c;
                if (i === !0)
                    return Kw(c);
                if (H.isFunction(i))
                    return i.call(this, c, l);
                if (H.isRegExp(i))
                    return i.exec(c);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, i) {
        if (t = ys(t),
        t) {
            const l = H.findKey(this, t);
            return !!(l && this[l] !== void 0 && (!i || Ka(this, this[l], l, i)))
        }
        return !1
    }
    delete(t, i) {
        const l = this;
        let c = !1;
        function f(g) {
            if (g = ys(g),
            g) {
                const m = H.findKey(l, g);
                m && (!i || Ka(l, l[m], m, i)) && (delete l[m],
                c = !0)
            }
        }
        return H.isArray(t) ? t.forEach(f) : f(t),
        c
    }
    clear(t) {
        const i = Object.keys(this);
        let l = i.length
          , c = !1;
        for (; l--; ) {
            const f = i[l];
            (!t || Ka(this, this[f], f, t, !0)) && (delete this[f],
            c = !0)
        }
        return c
    }
    normalize(t) {
        const i = this
          , l = {};
        return H.forEach(this, (c,f)=>{
            const g = H.findKey(l, f);
            if (g) {
                i[g] = Jo(c),
                delete i[f];
                return
            }
            const m = t ? qw(f) : String(f).trim();
            m !== f && delete i[f],
            i[m] = Jo(c),
            l[m] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const i = Object.create(null);
        return H.forEach(this, (l,c)=>{
            l != null && l !== !1 && (i[c] = t && H.isArray(l) ? l.join(", ") : l)
        }
        ),
        i
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t,i])=>t + ": " + i).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...i) {
        const l = new this(t);
        return i.forEach(c=>l.set(c)),
        l
    }
    static accessor(t) {
        const l = (this[sf] = this[sf] = {
            accessors: {}
        }).accessors
          , c = this.prototype;
        function f(g) {
            const m = ys(g);
            l[m] || (Jw(c, g),
            l[m] = !0)
        }
        return H.isArray(t) ? t.forEach(f) : f(t),
        this
    }
}
en.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
H.reduceDescriptors(en.prototype, ({value: e},t)=>{
    let i = t[0].toUpperCase() + t.slice(1);
    return {
        get: ()=>e,
        set(l) {
            this[i] = l
        }
    }
}
);
H.freezeMethods(en);
function Qa(e, t) {
    const i = this || lo
      , l = t || i
      , c = en.from(l.headers);
    let f = l.data;
    return H.forEach(e, function(m) {
        f = m.call(i, f, c.normalize(), t ? t.status : void 0)
    }),
    c.normalize(),
    f
}
function i2(e) {
    return !!(e && e.__CANCEL__)
}
function qi(e, t, i) {
    ye.call(this, e ?? "canceled", ye.ERR_CANCELED, t, i),
    this.name = "CanceledError"
}
H.inherits(qi, ye, {
    __CANCEL__: !0
});
function s2(e, t, i) {
    const l = i.config.validateStatus;
    !i.status || !l || l(i.status) ? e(i) : t(new ye("Request failed with status code " + i.status,[ye.ERR_BAD_REQUEST, ye.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4],i.config,i.request,i))
}
function $w(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
function e3(e, t) {
    e = e || 10;
    const i = new Array(e)
      , l = new Array(e);
    let c = 0, f = 0, g;
    return t = t !== void 0 ? t : 1e3,
    function(y) {
        const x = Date.now()
          , S = l[f];
        g || (g = x),
        i[c] = y,
        l[c] = x;
        let v = f
          , D = 0;
        for (; v !== c; )
            D += i[v++],
            v = v % e;
        if (c = (c + 1) % e,
        c === f && (f = (f + 1) % e),
        x - g < t)
            return;
        const B = S && x - S;
        return B ? Math.round(D * 1e3 / B) : void 0
    }
}
function t3(e, t) {
    let i = 0;
    const l = 1e3 / t;
    let c = null;
    return function() {
        const g = this === !0
          , m = Date.now();
        if (g || m - i > l)
            return c && (clearTimeout(c),
            c = null),
            i = m,
            e.apply(null, arguments);
        c || (c = setTimeout(()=>(c = null,
        i = Date.now(),
        e.apply(null, arguments)), l - (m - i)))
    }
}
const _l = (e,t,i=3)=>{
    let l = 0;
    const c = e3(50, 250);
    return t3(f=>{
        const g = f.loaded
          , m = f.lengthComputable ? f.total : void 0
          , y = g - l
          , x = c(y)
          , S = g <= m;
        l = g;
        const v = {
            loaded: g,
            total: m,
            progress: m ? g / m : void 0,
            bytes: y,
            rate: x || void 0,
            estimated: x && m && S ? (m - g) / x : void 0,
            event: f,
            lengthComputable: m != null
        };
        v[t ? "download" : "upload"] = !0,
        e(v)
    }
    , i)
}
  , n3 = bn.hasStandardBrowserEnv ? function() {
    const t = /(msie|trident)/i.test(navigator.userAgent)
      , i = document.createElement("a");
    let l;
    function c(f) {
        let g = f;
        return t && (i.setAttribute("href", g),
        g = i.href),
        i.setAttribute("href", g),
        {
            href: i.href,
            protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
            host: i.host,
            search: i.search ? i.search.replace(/^\?/, "") : "",
            hash: i.hash ? i.hash.replace(/^#/, "") : "",
            hostname: i.hostname,
            port: i.port,
            pathname: i.pathname.charAt(0) === "/" ? i.pathname : "/" + i.pathname
        }
    }
    return l = c(window.location.href),
    function(g) {
        const m = H.isString(g) ? c(g) : g;
        return m.protocol === l.protocol && m.host === l.host
    }
}() : function() {
    return function() {
        return !0
    }
}()
  , r3 = bn.hasStandardBrowserEnv ? {
    write(e, t, i, l, c, f) {
        const g = [e + "=" + encodeURIComponent(t)];
        H.isNumber(i) && g.push("expires=" + new Date(i).toGMTString()),
        H.isString(l) && g.push("path=" + l),
        H.isString(c) && g.push("domain=" + c),
        f === !0 && g.push("secure"),
        document.cookie = g.join("; ")
    },
    read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function i3(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function s3(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function o2(e, t) {
    return e && !i3(t) ? s3(e, t) : t
}
const of = e=>e instanceof en ? {
    ...e
} : e;
function ri(e, t) {
    t = t || {};
    const i = {};
    function l(x, S, v) {
        return H.isPlainObject(x) && H.isPlainObject(S) ? H.merge.call({
            caseless: v
        }, x, S) : H.isPlainObject(S) ? H.merge({}, S) : H.isArray(S) ? S.slice() : S
    }
    function c(x, S, v) {
        if (H.isUndefined(S)) {
            if (!H.isUndefined(x))
                return l(void 0, x, v)
        } else
            return l(x, S, v)
    }
    function f(x, S) {
        if (!H.isUndefined(S))
            return l(void 0, S)
    }
    function g(x, S) {
        if (H.isUndefined(S)) {
            if (!H.isUndefined(x))
                return l(void 0, x)
        } else
            return l(void 0, S)
    }
    function m(x, S, v) {
        if (v in t)
            return l(x, S);
        if (v in e)
            return l(void 0, x)
    }
    const y = {
        url: f,
        method: f,
        data: f,
        baseURL: g,
        transformRequest: g,
        transformResponse: g,
        paramsSerializer: g,
        timeout: g,
        timeoutMessage: g,
        withCredentials: g,
        withXSRFToken: g,
        adapter: g,
        responseType: g,
        xsrfCookieName: g,
        xsrfHeaderName: g,
        onUploadProgress: g,
        onDownloadProgress: g,
        decompress: g,
        maxContentLength: g,
        maxBodyLength: g,
        beforeRedirect: g,
        transport: g,
        httpAgent: g,
        httpsAgent: g,
        cancelToken: g,
        socketPath: g,
        responseEncoding: g,
        validateStatus: m,
        headers: (x,S)=>c(of(x), of(S), !0)
    };
    return H.forEach(Object.keys(Object.assign({}, e, t)), function(S) {
        const v = y[S] || c
          , D = v(e[S], t[S], S);
        H.isUndefined(D) && v !== m || (i[S] = D)
    }),
    i
}
const l2 = e=>{
    const t = ri({}, e);
    let {data: i, withXSRFToken: l, xsrfHeaderName: c, xsrfCookieName: f, headers: g, auth: m} = t;
    t.headers = g = en.from(g),
    t.url = t2(o2(t.baseURL, t.url), e.params, e.paramsSerializer),
    m && g.set("Authorization", "Basic " + btoa((m.username || "") + ":" + (m.password ? unescape(encodeURIComponent(m.password)) : "")));
    let y;
    if (H.isFormData(i)) {
        if (bn.hasStandardBrowserEnv || bn.hasStandardBrowserWebWorkerEnv)
            g.setContentType(void 0);
        else if ((y = g.getContentType()) !== !1) {
            const [x,...S] = y ? y.split(";").map(v=>v.trim()).filter(Boolean) : [];
            g.setContentType([x || "multipart/form-data", ...S].join("; "))
        }
    }
    if (bn.hasStandardBrowserEnv && (l && H.isFunction(l) && (l = l(t)),
    l || l !== !1 && n3(t.url))) {
        const x = c && f && r3.read(f);
        x && g.set(c, x)
    }
    return t
}
  , o3 = typeof XMLHttpRequest < "u"
  , l3 = o3 && function(e) {
    return new Promise(function(i, l) {
        const c = l2(e);
        let f = c.data;
        const g = en.from(c.headers).normalize();
        let {responseType: m} = c, y;
        function x() {
            c.cancelToken && c.cancelToken.unsubscribe(y),
            c.signal && c.signal.removeEventListener("abort", y)
        }
        let S = new XMLHttpRequest;
        S.open(c.method.toUpperCase(), c.url, !0),
        S.timeout = c.timeout;
        function v() {
            if (!S)
                return;
            const B = en.from("getAllResponseHeaders"in S && S.getAllResponseHeaders())
              , M = {
                data: !m || m === "text" || m === "json" ? S.responseText : S.response,
                status: S.status,
                statusText: S.statusText,
                headers: B,
                config: e,
                request: S
            };
            s2(function(O) {
                i(O),
                x()
            }, function(O) {
                l(O),
                x()
            }, M),
            S = null
        }
        "onloadend"in S ? S.onloadend = v : S.onreadystatechange = function() {
            !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(v)
        }
        ,
        S.onabort = function() {
            S && (l(new ye("Request aborted",ye.ECONNABORTED,c,S)),
            S = null)
        }
        ,
        S.onerror = function() {
            l(new ye("Network Error",ye.ERR_NETWORK,c,S)),
            S = null
        }
        ,
        S.ontimeout = function() {
            let k = c.timeout ? "timeout of " + c.timeout + "ms exceeded" : "timeout exceeded";
            const M = c.transitional || n2;
            c.timeoutErrorMessage && (k = c.timeoutErrorMessage),
            l(new ye(k,M.clarifyTimeoutError ? ye.ETIMEDOUT : ye.ECONNABORTED,c,S)),
            S = null
        }
        ,
        f === void 0 && g.setContentType(null),
        "setRequestHeader"in S && H.forEach(g.toJSON(), function(k, M) {
            S.setRequestHeader(M, k)
        }),
        H.isUndefined(c.withCredentials) || (S.withCredentials = !!c.withCredentials),
        m && m !== "json" && (S.responseType = c.responseType),
        typeof c.onDownloadProgress == "function" && S.addEventListener("progress", _l(c.onDownloadProgress, !0)),
        typeof c.onUploadProgress == "function" && S.upload && S.upload.addEventListener("progress", _l(c.onUploadProgress)),
        (c.cancelToken || c.signal) && (y = B=>{
            S && (l(!B || B.type ? new qi(null,e,S) : B),
            S.abort(),
            S = null)
        }
        ,
        c.cancelToken && c.cancelToken.subscribe(y),
        c.signal && (c.signal.aborted ? y() : c.signal.addEventListener("abort", y)));
        const D = $w(c.url);
        if (D && bn.protocols.indexOf(D) === -1) {
            l(new ye("Unsupported protocol " + D + ":",ye.ERR_BAD_REQUEST,e));
            return
        }
        S.send(f || null)
    }
    )
}
  , a3 = (e,t)=>{
    let i = new AbortController, l;
    const c = function(y) {
        if (!l) {
            l = !0,
            g();
            const x = y instanceof Error ? y : this.reason;
            i.abort(x instanceof ye ? x : new qi(x instanceof Error ? x.message : x))
        }
    };
    let f = t && setTimeout(()=>{
        c(new ye(`timeout ${t} of ms exceeded`,ye.ETIMEDOUT))
    }
    , t);
    const g = ()=>{
        e && (f && clearTimeout(f),
        f = null,
        e.forEach(y=>{
            y && (y.removeEventListener ? y.removeEventListener("abort", c) : y.unsubscribe(c))
        }
        ),
        e = null)
    }
    ;
    e.forEach(y=>y && y.addEventListener && y.addEventListener("abort", c));
    const {signal: m} = i;
    return m.unsubscribe = g,
    [m, ()=>{
        f && clearTimeout(f),
        f = null
    }
    ]
}
  , u3 = function*(e, t) {
    let i = e.byteLength;
    if (!t || i < t) {
        yield e;
        return
    }
    let l = 0, c;
    for (; l < i; )
        c = l + t,
        yield e.slice(l, c),
        l = c
}
  , c3 = async function*(e, t, i) {
    for await(const l of e)
        yield*u3(ArrayBuffer.isView(l) ? l : await i(String(l)), t)
}
  , lf = (e,t,i,l,c)=>{
    const f = c3(e, t, c);
    let g = 0;
    return new ReadableStream({
        type: "bytes",
        async pull(m) {
            const {done: y, value: x} = await f.next();
            if (y) {
                m.close(),
                l();
                return
            }
            let S = x.byteLength;
            i && i(g += S),
            m.enqueue(new Uint8Array(x))
        },
        cancel(m) {
            return l(m),
            f.return()
        }
    },{
        highWaterMark: 2
    })
}
  , af = (e,t)=>{
    const i = e != null;
    return l=>setTimeout(()=>t({
        lengthComputable: i,
        total: e,
        loaded: l
    }))
}
  , ea = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function"
  , a2 = ea && typeof ReadableStream == "function"
  , Ju = ea && (typeof TextEncoder == "function" ? (e=>t=>e.encode(t))(new TextEncoder) : async e=>new Uint8Array(await new Response(e).arrayBuffer()))
  , f3 = a2 && (()=>{
    let e = !1;
    const t = new Request(bn.origin,{
        body: new ReadableStream,
        method: "POST",
        get duplex() {
            return e = !0,
            "half"
        }
    }).headers.has("Content-Type");
    return e && !t
}
)()
  , uf = 64 * 1024
  , $u = a2 && !!(()=>{
    try {
        return H.isReadableStream(new Response("").body)
    } catch {}
}
)()
  , Rl = {
    stream: $u && (e=>e.body)
};
ea && (e=>{
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t=>{
        !Rl[t] && (Rl[t] = H.isFunction(e[t]) ? i=>i[t]() : (i,l)=>{
            throw new ye(`Response type '${t}' is not supported`,ye.ERR_NOT_SUPPORT,l)
        }
        )
    }
    )
}
)(new Response);
const d3 = async e=>{
    if (e == null)
        return 0;
    if (H.isBlob(e))
        return e.size;
    if (H.isSpecCompliantForm(e))
        return (await new Request(e).arrayBuffer()).byteLength;
    if (H.isArrayBufferView(e))
        return e.byteLength;
    if (H.isURLSearchParams(e) && (e = e + ""),
    H.isString(e))
        return (await Ju(e)).byteLength
}
  , h3 = async(e,t)=>{
    const i = H.toFiniteNumber(e.getContentLength());
    return i ?? d3(t)
}
  , g3 = ea && (async e=>{
    let {url: t, method: i, data: l, signal: c, cancelToken: f, timeout: g, onDownloadProgress: m, onUploadProgress: y, responseType: x, headers: S, withCredentials: v="same-origin", fetchOptions: D} = l2(e);
    x = x ? (x + "").toLowerCase() : "text";
    let[B,k] = c || f || g ? a3([c, f], g) : [], M, X;
    const O = ()=>{
        !M && setTimeout(()=>{
            B && B.unsubscribe()
        }
        ),
        M = !0
    }
    ;
    let _;
    try {
        if (y && f3 && i !== "get" && i !== "head" && (_ = await h3(S, l)) !== 0) {
            let Z = new Request(t,{
                method: "POST",
                body: l,
                duplex: "half"
            }), F;
            H.isFormData(l) && (F = Z.headers.get("content-type")) && S.setContentType(F),
            Z.body && (l = lf(Z.body, uf, af(_, _l(y)), null, Ju))
        }
        H.isString(v) || (v = v ? "cors" : "omit"),
        X = new Request(t,{
            ...D,
            signal: B,
            method: i.toUpperCase(),
            headers: S.normalize().toJSON(),
            body: l,
            duplex: "half",
            withCredentials: v
        });
        let N = await fetch(X);
        const V = $u && (x === "stream" || x === "response");
        if ($u && (m || V)) {
            const Z = {};
            ["status", "statusText", "headers"].forEach($=>{
                Z[$] = N[$]
            }
            );
            const F = H.toFiniteNumber(N.headers.get("content-length"));
            N = new Response(lf(N.body, uf, m && af(F, _l(m, !0)), V && O, Ju),Z)
        }
        x = x || "text";
        let te = await Rl[H.findKey(Rl, x) || "text"](N, e);
        return !V && O(),
        k && k(),
        await new Promise((Z,F)=>{
            s2(Z, F, {
                data: te,
                headers: en.from(N.headers),
                status: N.status,
                statusText: N.statusText,
                config: e,
                request: X
            })
        }
        )
    } catch (N) {
        throw O(),
        N && N.name === "TypeError" && /fetch/i.test(N.message) ? Object.assign(new ye("Network Error",ye.ERR_NETWORK,e,X), {
            cause: N.cause || N
        }) : ye.from(N, N && N.code, e, X)
    }
}
)
  , ec = {
    http: bw,
    xhr: l3,
    fetch: g3
};
H.forEach(ec, (e,t)=>{
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
);
const cf = e=>`- ${e}`
  , p3 = e=>H.isFunction(e) || e === null || e === !1
  , u2 = {
    getAdapter: e=>{
        e = H.isArray(e) ? e : [e];
        const {length: t} = e;
        let i, l;
        const c = {};
        for (let f = 0; f < t; f++) {
            i = e[f];
            let g;
            if (l = i,
            !p3(i) && (l = ec[(g = String(i)).toLowerCase()],
            l === void 0))
                throw new ye(`Unknown adapter '${g}'`);
            if (l)
                break;
            c[g || "#" + f] = l
        }
        if (!l) {
            const f = Object.entries(c).map(([m,y])=>`adapter ${m} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build"));
            let g = t ? f.length > 1 ? `since :
` + f.map(cf).join(`
`) : " " + cf(f[0]) : "as no adapter specified";
            throw new ye("There is no suitable adapter to dispatch the request " + g,"ERR_NOT_SUPPORT")
        }
        return l
    }
    ,
    adapters: ec
};
function qa(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new qi(null,e)
}
function ff(e) {
    return qa(e),
    e.headers = en.from(e.headers),
    e.data = Qa.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    u2.getAdapter(e.adapter || lo.adapter)(e).then(function(l) {
        return qa(e),
        l.data = Qa.call(e, e.transformResponse, l),
        l.headers = en.from(l.headers),
        l
    }, function(l) {
        return i2(l) || (qa(e),
        l && l.response && (l.response.data = Qa.call(e, e.transformResponse, l.response),
        l.response.headers = en.from(l.response.headers))),
        Promise.reject(l)
    })
}
const c2 = "1.7.2"
  , s1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e,t)=>{
    s1[e] = function(l) {
        return typeof l === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
);
const df = {};
s1.transitional = function(t, i, l) {
    function c(f, g) {
        return "[Axios v" + c2 + "] Transitional option '" + f + "'" + g + (l ? ". " + l : "")
    }
    return (f,g,m)=>{
        if (t === !1)
            throw new ye(c(g, " has been removed" + (i ? " in " + i : "")),ye.ERR_DEPRECATED);
        return i && !df[g] && (df[g] = !0,
        console.warn(c(g, " has been deprecated since v" + i + " and will be removed in the near future"))),
        t ? t(f, g, m) : !0
    }
}
;
function x3(e, t, i) {
    if (typeof e != "object")
        throw new ye("options must be an object",ye.ERR_BAD_OPTION_VALUE);
    const l = Object.keys(e);
    let c = l.length;
    for (; c-- > 0; ) {
        const f = l[c]
          , g = t[f];
        if (g) {
            const m = e[f]
              , y = m === void 0 || g(m, f, e);
            if (y !== !0)
                throw new ye("option " + f + " must be " + y,ye.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (i !== !0)
            throw new ye("Unknown option " + f,ye.ERR_BAD_OPTION)
    }
}
const tc = {
    assertOptions: x3,
    validators: s1
}
  , gr = tc.validators;
class qr {
    constructor(t) {
        this.defaults = t,
        this.interceptors = {
            request: new rf,
            response: new rf
        }
    }
    async request(t, i) {
        try {
            return await this._request(t, i)
        } catch (l) {
            if (l instanceof Error) {
                let c;
                Error.captureStackTrace ? Error.captureStackTrace(c = {}) : c = new Error;
                const f = c.stack ? c.stack.replace(/^.+\n/, "") : "";
                try {
                    l.stack ? f && !String(l.stack).endsWith(f.replace(/^.+\n.+\n/, "")) && (l.stack += `
` + f) : l.stack = f
                } catch {}
            }
            throw l
        }
    }
    _request(t, i) {
        typeof t == "string" ? (i = i || {},
        i.url = t) : i = t || {},
        i = ri(this.defaults, i);
        const {transitional: l, paramsSerializer: c, headers: f} = i;
        l !== void 0 && tc.assertOptions(l, {
            silentJSONParsing: gr.transitional(gr.boolean),
            forcedJSONParsing: gr.transitional(gr.boolean),
            clarifyTimeoutError: gr.transitional(gr.boolean)
        }, !1),
        c != null && (H.isFunction(c) ? i.paramsSerializer = {
            serialize: c
        } : tc.assertOptions(c, {
            encode: gr.function,
            serialize: gr.function
        }, !0)),
        i.method = (i.method || this.defaults.method || "get").toLowerCase();
        let g = f && H.merge(f.common, f[i.method]);
        f && H.forEach(["delete", "get", "head", "post", "put", "patch", "common"], k=>{
            delete f[k]
        }
        ),
        i.headers = en.concat(g, f);
        const m = [];
        let y = !0;
        this.interceptors.request.forEach(function(M) {
            typeof M.runWhen == "function" && M.runWhen(i) === !1 || (y = y && M.synchronous,
            m.unshift(M.fulfilled, M.rejected))
        });
        const x = [];
        this.interceptors.response.forEach(function(M) {
            x.push(M.fulfilled, M.rejected)
        });
        let S, v = 0, D;
        if (!y) {
            const k = [ff.bind(this), void 0];
            for (k.unshift.apply(k, m),
            k.push.apply(k, x),
            D = k.length,
            S = Promise.resolve(i); v < D; )
                S = S.then(k[v++], k[v++]);
            return S
        }
        D = m.length;
        let B = i;
        for (v = 0; v < D; ) {
            const k = m[v++]
              , M = m[v++];
            try {
                B = k(B)
            } catch (X) {
                M.call(this, X);
                break
            }
        }
        try {
            S = ff.call(this, B)
        } catch (k) {
            return Promise.reject(k)
        }
        for (v = 0,
        D = x.length; v < D; )
            S = S.then(x[v++], x[v++]);
        return S
    }
    getUri(t) {
        t = ri(this.defaults, t);
        const i = o2(t.baseURL, t.url);
        return t2(i, t.params, t.paramsSerializer)
    }
}
H.forEach(["delete", "get", "head", "options"], function(t) {
    qr.prototype[t] = function(i, l) {
        return this.request(ri(l || {}, {
            method: t,
            url: i,
            data: (l || {}).data
        }))
    }
});
H.forEach(["post", "put", "patch"], function(t) {
    function i(l) {
        return function(f, g, m) {
            return this.request(ri(m || {}, {
                method: t,
                headers: l ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: f,
                data: g
            }))
        }
    }
    qr.prototype[t] = i(),
    qr.prototype[t + "Form"] = i(!0)
});
class o1 {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let i;
        this.promise = new Promise(function(f) {
            i = f
        }
        );
        const l = this;
        this.promise.then(c=>{
            if (!l._listeners)
                return;
            let f = l._listeners.length;
            for (; f-- > 0; )
                l._listeners[f](c);
            l._listeners = null
        }
        ),
        this.promise.then = c=>{
            let f;
            const g = new Promise(m=>{
                l.subscribe(m),
                f = m
            }
            ).then(c);
            return g.cancel = function() {
                l.unsubscribe(f)
            }
            ,
            g
        }
        ,
        t(function(f, g, m) {
            l.reason || (l.reason = new qi(f,g,m),
            i(l.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const i = this._listeners.indexOf(t);
        i !== -1 && this._listeners.splice(i, 1)
    }
    static source() {
        let t;
        return {
            token: new o1(function(c) {
                t = c
            }
            ),
            cancel: t
        }
    }
}
function m3(e) {
    return function(i) {
        return e.apply(null, i)
    }
}
function w3(e) {
    return H.isObject(e) && e.isAxiosError === !0
}
const nc = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(nc).forEach(([e,t])=>{
    nc[t] = e
}
);
function f2(e) {
    const t = new qr(e)
      , i = jh(qr.prototype.request, t);
    return H.extend(i, qr.prototype, t, {
        allOwnKeys: !0
    }),
    H.extend(i, t, null, {
        allOwnKeys: !0
    }),
    i.create = function(c) {
        return f2(ri(e, c))
    }
    ,
    i
}
const ct = f2(lo);
ct.Axios = qr;
ct.CanceledError = qi;
ct.CancelToken = o1;
ct.isCancel = i2;
ct.VERSION = c2;
ct.toFormData = $l;
ct.AxiosError = ye;
ct.Cancel = ct.CanceledError;
ct.all = function(t) {
    return Promise.all(t)
}
;
ct.spread = m3;
ct.isAxiosError = w3;
ct.mergeConfig = ri;
ct.AxiosHeaders = en;
ct.formToJSON = e=>r2(H.isHTMLForm(e) ? new FormData(e) : e);
ct.getAdapter = u2.getAdapter;
ct.HttpStatusCode = nc;
ct.default = ct;
function y3() {
    const [e,t] = ee.useState("")
      , [i,l] = ee.useState("")
      , [c,f] = ee.useState("")
      , g = e1();
    async function m(y) {
        y.preventDefault();
        try {
            const x = await ct.post("https://barbero-backend-5gj8.onrender.com/create-client", {
                name: e,
                phone: i,
                email: c
            });
            g(`/client/${x.data.id}`)
        } catch (x) {
            console.log("Error", x.response ? x.response.data : x.message)
        }
    }
    return q.jsxs(so, {
        className: "flex flex-col",
        children: [q.jsx("h1", {
            className: "text-2xl text-center font-bold",
            children: "Add a new client"
        }), q.jsx("hr", {
            className: "my-8"
        }), q.jsxs("form", {
            onSubmit: m,
            children: [q.jsxs("div", {
                className: "mb-8",
                children: [q.jsx("label", {
                    htmlFor: "name",
                    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                    children: "Name:"
                }), q.jsx("input", {
                    autoFocus: !0,
                    onChange: y=>t(y.target.value),
                    type: "text",
                    id: "name",
                    name: "name",
                    className: "shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                })]
            }), q.jsxs("div", {
                className: "mb-8",
                children: [q.jsx("label", {
                    htmlFor: "phone",
                    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                    children: "Phone:"
                }), q.jsx("input", {
                    onChange: y=>l(y.target.value),
                    type: "tel",
                    id: "phone",
                    name: "phone",
                    className: "shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                })]
            }), q.jsxs("div", {
                className: "mb-8",
                children: [q.jsx("label", {
                    htmlFor: "email",
                    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                    children: "Email:"
                }), q.jsx("input", {
                    onChange: y=>f(y.target.value),
                    type: "email",
                    id: "email",
                    name: "email",
                    className: "shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                })]
            }), q.jsx("button", {
                type: "submit",
                className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
                children: "Add Client"
            })]
        })]
    })
}
function E3() {
    const [e,t] = ee.useState([])
      , [i,l] = ee.useState("");
    ee.useEffect(()=>{
        (async()=>{
            try {
                const m = await ct.get("https://barbero-backend-5gj8.onrender.com/clients");
                t(m.data)
            } catch (g) {
                console.error("Error loading clients:", g)
            }
        }
        )()
    }
    , []);
    const c = e.filter(f=>f.name.toLowerCase().includes(i.toLowerCase()));
    return q.jsxs(so, {
        className: "flex flex-col",
        children: [q.jsx("h1", {
            className: "text-2xl text-center font-bold",
            children: "Clients"
        }), q.jsx("hr", {
            className: "my-8"
        }), q.jsx("input", {
            type: "text",
            placeholder: "Search clients...",
            value: i,
            onChange: f=>l(f.target.value),
            className: "bg-gray-50 border border-gray-300 block w-full p-4 mb-4 rounded-md outline-slate-300 outline-1"
        }), q.jsx("ul", {
            className: "text-md font-medium text-sky-700 bg-white border border-gray-200 rounded-lg",
            children: c.map(f=>q.jsx("li", {
                className: "first-of-type:rounded-t-lg last-of-type:rounded-b-lg last-of-type:border-b-0 bg-slate-50 odd:bg-white border-b",
                children: q.jsx(bi, {
                    to: `/client/${f._id}`,
                    className: "block w-full px-4 py-6 cursor-pointer hover:bg-slate-200",
                    children: f.name
                })
            }, f._id))
        })]
    })
}
function C3({qrCode: e}) {
    if (!e)
        return null;
    const t = async()=>{
        if (navigator.share)
            try {
                const l = await (await fetch(e)).blob()
                  , c = new File([l],"qr_code.png",{
                    type: "image/png"
                });
                await navigator.share({
                    files: [c],
                    title: "Client QR Code",
                    text: "Your personal BarberShow QR code. Keep it safe, and show it next time you visit us!"
                }),
                console.log("QR Code shared successfully!")
            } catch (i) {
                console.error("Error sharing QR Code:", i)
            }
        else
            alert("Sharing not supported. Please manually download and share the QR Code.")
    }
    ;
    return q.jsxs(q.Fragment, {
        children: [q.jsx("h2", {
            className: "text-xl font-bold",
            children: "Client QR Code:"
        }), q.jsx("img", {
            src: e,
            alt: "Client QR Code",
            style: {
                width: "100%",
                objectFit: "contain"
            }
        }), q.jsx("button", {
            onClick: t,
            className: "mt-4 mb-4 p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700",
            children: "Share QR Code"
        }), q.jsx("hr", {
            className: "my-4"
        })]
    })
}
function A3({visits: e}) {
    return !e || e.length === 0 ? null : q.jsxs(q.Fragment, {
        children: [q.jsxs("section", {
            className: "my-6 bg-sky-200 text-sky-900 p-4 rounded-md flex flex-col justify-center items-center gap-2",
            children: [q.jsx("h1", {
                className: "text-4xl font-bold",
                children: e.length
            }), q.jsx("h4", {
                children: "total visits"
            })]
        }), q.jsxs("section", {
            children: [q.jsx("h2", {
                className: "text-center uppercase text-sm font-medium mb-4 text-slate-600",
                children: "Visit History"
            }), q.jsx("ul", {
                className: "text-md font-medium text-slate-500 bg-white border border-gray-200 rounded-lg",
                children: e.map(t=>q.jsx("li", {
                    className: `
              w-full
              p-4
              border-b border-gray-200 bg-slate-50 odd:bg-white first-of-type:rounded-t-lg last-of-type:rounded-b-lg last-of-type:border-b-0`,
                    children: new Date(t.date).toLocaleDateString("en-GB")
                }, t._id))
            })]
        })]
    })
}
var d2 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
}
  , hf = Jn.createContext && Jn.createContext(d2)
  , S3 = ["attr", "size", "title"];
function v3(e, t) {
    if (e == null)
        return {};
    var i = I3(e, t), l, c;
    if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(e);
        for (c = 0; c < f.length; c++)
            l = f[c],
            !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l])
    }
    return i
}
function I3(e, t) {
    if (e == null)
        return {};
    var i = {};
    for (var l in e)
        if (Object.prototype.hasOwnProperty.call(e, l)) {
            if (t.indexOf(l) >= 0)
                continue;
            i[l] = e[l]
        }
    return i
}
function Ol() {
    return Ol = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var l in i)
                Object.prototype.hasOwnProperty.call(i, l) && (e[l] = i[l])
        }
        return e
    }
    ,
    Ol.apply(this, arguments)
}
function gf(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        t && (l = l.filter(function(c) {
            return Object.getOwnPropertyDescriptor(e, c).enumerable
        })),
        i.push.apply(i, l)
    }
    return i
}
function bl(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t] != null ? arguments[t] : {};
        t % 2 ? gf(Object(i), !0).forEach(function(l) {
            T3(e, l, i[l])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : gf(Object(i)).forEach(function(l) {
            Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(i, l))
        })
    }
    return e
}
function T3(e, t, i) {
    return t = N3(t),
    t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i,
    e
}
function N3(e) {
    var t = _3(e, "string");
    return typeof t == "symbol" ? t : t + ""
}
function _3(e, t) {
    if (typeof e != "object" || !e)
        return e;
    var i = e[Symbol.toPrimitive];
    if (i !== void 0) {
        var l = i.call(e, t || "default");
        if (typeof l != "object")
            return l;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function h2(e) {
    return e && e.map((t,i)=>Jn.createElement(t.tag, bl({
        key: i
    }, t.attr), h2(t.child)))
}
function g2(e) {
    return t=>Jn.createElement(R3, Ol({
        attr: bl({}, e.attr)
    }, t), h2(e.child))
}
function R3(e) {
    var t = i=>{
        var {attr: l, size: c, title: f} = e, g = v3(e, S3), m = c || i.size || "1em", y;
        return i.className && (y = i.className),
        e.className && (y = (y ? y + " " : "") + e.className),
        Jn.createElement("svg", Ol({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, i.attr, l, g, {
            className: y,
            style: bl(bl({
                color: e.color || i.color
            }, i.style), e.style),
            height: m,
            width: m,
            xmlns: "http://www.w3.org/2000/svg"
        }), f && Jn.createElement("title", null, f), e.children)
    }
    ;
    return hf !== void 0 ? Jn.createElement(hf.Consumer, null, i=>t(i)) : t(d2)
}
function O3(e) {
    return g2({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
            },
            child: []
        }]
    })(e)
}
function b3(e) {
    return g2({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "rect",
            attr: {
                width: "416",
                height: "320",
                x: "48",
                y: "96",
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32",
                rx: "40",
                ry: "40"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32",
                d: "m112 160 144 112 144-112"
            },
            child: []
        }]
    })(e)
}
function D3() {
    const [e,t] = ee.useState(!0)
      , [i,l] = ee.useState(null)
      , [c,f] = ee.useState([])
      , [g,m] = ee.useState(!1)
      , y = Yx();
    ee.useEffect(()=>{
        async function S() {
            t(!0);
            try {
                const v = "https://barbero-backend-5gj8.onrender.com"
                  , D = await fetch(`${v}/client/${y.id}`);
                if (!D.ok)
                    throw new Error("Failed to fetch client");
                const B = await D.json();
                l(B);
                const k = await fetch(`${v}/client/${y.id}/visits`);
                if (!k.ok)
                    throw new Error("Failed to fetch visits");
                const M = await k.json();
                f(M)
            } catch (v) {
                console.error("Failed to fetch data:", v)
            }
            t(!1)
        }
        S()
    }
    , [y.id]);
    const x = ()=>{
        m(!g)
    }
    ;
    return e ? q.jsx("p", {
        children: "Loading..."
    }) : i ? q.jsxs(so, {
        className: "flex flex-col",
        children: [q.jsx("h1", {
            className: "text-2xl text-center font-bold text-sky-950 uppercase mb-3",
            children: i.name
        }), q.jsxs("ul", {
            className: "border rounded-md text-lg mb-8",
            children: [q.jsxs("li", {
                className: "flex justify-start items-center gap-4 p-4 text-gray-700 border-b",
                children: [q.jsx(O3, {}), " ", i.phone]
            }), q.jsxs("li", {
                className: "flex justify-start items-center gap-4 p-4",
                children: [q.jsx(b3, {}), " ", q.jsx(bi, {
                    to: `mailto:${i.email}`,
                    className: "underline text-sky-500 hover:text-sky-800",
                    children: i.email
                })]
            })]
        }), q.jsx("button", {
            onClick: x,
            className: "mb-4 p-4 w-full bg-blue-500 text-white font-bold rounded hover:bg-blue-700",
            children: g ? "Hide QR Code" : "Show QR Code"
        }), " ", g && q.jsx(C3, {
            qrCode: i.qrCode
        }), " ", q.jsx(A3, {
            visits: c,
            className: "mt-8"
        })]
    }) : q.jsx("p", {
        children: "No client data found."
    })
}
function M3() {
    return q.jsx(q.Fragment, {
        children: q.jsx("nav", {
            children: q.jsxs("ul", {
                className: "w-full flex justify-center p-2 bg-zinc-900 gap-3 ",
                children: [q.jsx("li", {
                    className: "text-zinc-200 bg-zinc-800 rounded",
                    children: q.jsx(bi, {
                        to: "/",
                        className: "p-3 flex text-center w-full h-full",
                        children: "Home"
                    })
                }), q.jsx("li", {
                    className: "text-zinc-200 bg-zinc-800 rounded",
                    children: q.jsx(bi, {
                        to: "/scan-qr",
                        className: "p-3 flex text-center w-full h-full",
                        children: "Scan QR"
                    })
                }), q.jsx("li", {
                    className: "text-zinc-200 bg-zinc-800 rounded",
                    children: q.jsx(bi, {
                        to: "/create-client",
                        className: "p-3 flex text-center w-full h-full",
                        children: "Add Client"
                    })
                }), q.jsx("li", {
                    className: "text-zinc-200 bg-zinc-800 rounded",
                    children: q.jsx(bi, {
                        to: "/clients",
                        className: "p-3 flex text-center w-full h-full",
                        children: "Clients"
                    })
                })]
            })
        })
    })
}
function k3() {
    return q.jsxs(gm, {
        children: [q.jsx(M3, {}), q.jsxs(lm, {
            children: [q.jsx(wi, {
                path: "/",
                element: q.jsx(wm, {})
            }), q.jsx(wi, {
                path: "/scan-qr",
                element: q.jsx(Xm, {})
            }), q.jsx(wi, {
                path: "/client/:id",
                element: q.jsx(D3, {})
            }), q.jsx(wi, {
                path: "/create-client",
                element: q.jsx(y3, {})
            }), q.jsx(wi, {
                path: "/clients",
                element: q.jsx(E3, {})
            })]
        })]
    })
}
Ja.createRoot(document.getElementById("root")).render(q.jsx(Jn.StrictMode, {
    children: q.jsx(k3, {})
}));

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { c as createStore, a as combineReducers, b as applyMiddleware, d as compose, t as thunk, e as axios, u as useDispatch, j as jsxDevRuntime, f as useSelector, r as react, g as createRoot, P as Provider } from "./index.js";
var style = "";
function n(n2) {
  for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e = 1; e < r2; e++)
    t2[e - 1] = arguments[e];
  {
    var i2 = Y[n2], o2 = i2 ? typeof i2 == "function" ? i2.apply(null, t2) : i2 : "unknown error nr: " + n2;
    throw Error("[Immer] " + o2);
  }
}
function r(n2) {
  return !!n2 && !!n2[Q];
}
function t(n2) {
  return !!n2 && (function(n3) {
    if (!n3 || typeof n3 != "object")
      return false;
    var r2 = Object.getPrototypeOf(n3);
    if (r2 === null)
      return true;
    var t2 = Object.hasOwnProperty.call(r2, "constructor") && r2.constructor;
    return t2 === Object || typeof t2 == "function" && Function.toString.call(t2) === Z;
  }(n2) || Array.isArray(n2) || !!n2[L] || !!n2.constructor[L] || s(n2) || v(n2));
}
function i(n2, r2, t2) {
  t2 === void 0 && (t2 = false), o(n2) === 0 ? (t2 ? Object.keys : nn)(n2).forEach(function(e) {
    t2 && typeof e == "symbol" || r2(e, n2[e], n2);
  }) : n2.forEach(function(t3, e) {
    return r2(e, t3, n2);
  });
}
function o(n2) {
  var r2 = n2[Q];
  return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v(n2) ? 3 : 0;
}
function u(n2, r2) {
  return o(n2) === 2 ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
}
function a(n2, r2) {
  return o(n2) === 2 ? n2.get(r2) : n2[r2];
}
function f(n2, r2, t2) {
  var e = o(n2);
  e === 2 ? n2.set(r2, t2) : e === 3 ? (n2.delete(r2), n2.add(t2)) : n2[r2] = t2;
}
function c(n2, r2) {
  return n2 === r2 ? n2 !== 0 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
}
function s(n2) {
  return X && n2 instanceof Map;
}
function v(n2) {
  return q && n2 instanceof Set;
}
function p(n2) {
  return n2.o || n2.t;
}
function l(n2) {
  if (Array.isArray(n2))
    return Array.prototype.slice.call(n2);
  var r2 = rn(n2);
  delete r2[Q];
  for (var t2 = nn(r2), e = 0; e < t2.length; e++) {
    var i2 = t2[e], o2 = r2[i2];
    o2.writable === false && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
  }
  return Object.create(Object.getPrototypeOf(n2), r2);
}
function d(n2, e) {
  return e === void 0 && (e = false), y(n2) || r(n2) || !t(n2) ? n2 : (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h), Object.freeze(n2), e && i(n2, function(n3, r2) {
    return d(r2, true);
  }, true), n2);
}
function h() {
  n(2);
}
function y(n2) {
  return n2 == null || typeof n2 != "object" || Object.isFrozen(n2);
}
function b(r2) {
  var t2 = tn[r2];
  return t2 || n(18, r2), t2;
}
function m(n2, r2) {
  tn[n2] || (tn[n2] = r2);
}
function _() {
  return U || n(0), U;
}
function j(n2, r2) {
  r2 && (b("Patches"), n2.u = [], n2.s = [], n2.v = r2);
}
function O(n2) {
  g(n2), n2.p.forEach(S), n2.p = null;
}
function g(n2) {
  n2 === U && (U = n2.l);
}
function w(n2) {
  return U = { p: [], l: U, h: n2, m: true, _: 0 };
}
function S(n2) {
  var r2 = n2[Q];
  r2.i === 0 || r2.i === 1 ? r2.j() : r2.O = true;
}
function P(r2, e) {
  e._ = e.p.length;
  var i2 = e.p[0], o2 = r2 !== void 0 && r2 !== i2;
  return e.h.g || b("ES5").S(e, r2, o2), o2 ? (i2[Q].P && (O(e), n(4)), t(r2) && (r2 = M(e, r2), e.l || x(e, r2)), e.u && b("Patches").M(i2[Q].t, r2, e.u, e.s)) : r2 = M(e, i2, []), O(e), e.u && e.v(e.u, e.s), r2 !== H ? r2 : void 0;
}
function M(n2, r2, t2) {
  if (y(r2))
    return r2;
  var e = r2[Q];
  if (!e)
    return i(r2, function(i2, o3) {
      return A(n2, e, r2, i2, o3, t2);
    }, true), r2;
  if (e.A !== n2)
    return r2;
  if (!e.P)
    return x(n2, e.t, true), e.t;
  if (!e.I) {
    e.I = true, e.A._--;
    var o2 = e.i === 4 || e.i === 5 ? e.o = l(e.k) : e.o;
    i(e.i === 3 ? new Set(o2) : o2, function(r3, i2) {
      return A(n2, e, o2, r3, i2, t2);
    }), x(n2, o2, false), t2 && n2.u && b("Patches").R(e, t2, n2.u, n2.s);
  }
  return e.o;
}
function A(e, i2, o2, a2, c2, s2) {
  if (c2 === o2 && n(5), r(c2)) {
    var v2 = M(e, c2, s2 && i2 && i2.i !== 3 && !u(i2.D, a2) ? s2.concat(a2) : void 0);
    if (f(o2, a2, v2), !r(v2))
      return;
    e.m = false;
  }
  if (t(c2) && !y(c2)) {
    if (!e.h.F && e._ < 1)
      return;
    M(e, c2), i2 && i2.A.l || x(e, c2);
  }
}
function x(n2, r2, t2) {
  t2 === void 0 && (t2 = false), n2.h.F && n2.m && d(r2, t2);
}
function z(n2, r2) {
  var t2 = n2[Q];
  return (t2 ? p(t2) : n2)[r2];
}
function I(n2, r2) {
  if (r2 in n2)
    for (var t2 = Object.getPrototypeOf(n2); t2; ) {
      var e = Object.getOwnPropertyDescriptor(t2, r2);
      if (e)
        return e;
      t2 = Object.getPrototypeOf(t2);
    }
}
function k(n2) {
  n2.P || (n2.P = true, n2.l && k(n2.l));
}
function E(n2) {
  n2.o || (n2.o = l(n2.t));
}
function R(n2, r2, t2) {
  var e = s(r2) ? b("MapSet").N(r2, t2) : v(r2) ? b("MapSet").T(r2, t2) : n2.g ? function(n3, r3) {
    var t3 = Array.isArray(n3), e2 = { i: t3 ? 1 : 0, A: r3 ? r3.A : _(), P: false, I: false, D: {}, l: r3, t: n3, k: null, o: null, j: null, C: false }, i2 = e2, o2 = en;
    t3 && (i2 = [e2], o2 = on);
    var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
    return e2.k = f2, e2.j = a2, f2;
  }(r2, t2) : b("ES5").J(r2, t2);
  return (t2 ? t2.A : _()).p.push(e), e;
}
function D(e) {
  return r(e) || n(22, e), function n2(r2) {
    if (!t(r2))
      return r2;
    var e2, u2 = r2[Q], c2 = o(r2);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b("ES5").K(u2)))
        return u2.t;
      u2.I = true, e2 = F(r2, c2), u2.I = false;
    } else
      e2 = F(r2, c2);
    return i(e2, function(r3, t2) {
      u2 && a(u2.t, r3) === t2 || f(e2, r3, n2(t2));
    }), c2 === 3 ? new Set(e2) : e2;
  }(e);
}
function F(n2, r2) {
  switch (r2) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l(n2);
}
function N() {
  function t2(n2, r2) {
    var t3 = s2[n2];
    return t3 ? t3.enumerable = r2 : s2[n2] = t3 = { configurable: true, enumerable: r2, get: function() {
      var r3 = this[Q];
      return f2(r3), en.get(r3, n2);
    }, set: function(r3) {
      var t4 = this[Q];
      f2(t4), en.set(t4, n2, r3);
    } }, t3;
  }
  function e(n2) {
    for (var r2 = n2.length - 1; r2 >= 0; r2--) {
      var t3 = n2[r2][Q];
      if (!t3.P)
        switch (t3.i) {
          case 5:
            a2(t3) && k(t3);
            break;
          case 4:
            o2(t3) && k(t3);
        }
    }
  }
  function o2(n2) {
    for (var r2 = n2.t, t3 = n2.k, e2 = nn(t3), i2 = e2.length - 1; i2 >= 0; i2--) {
      var o3 = e2[i2];
      if (o3 !== Q) {
        var a3 = r2[o3];
        if (a3 === void 0 && !u(r2, o3))
          return true;
        var f3 = t3[o3], s3 = f3 && f3[Q];
        if (s3 ? s3.t !== a3 : !c(f3, a3))
          return true;
      }
    }
    var v2 = !!r2[Q];
    return e2.length !== nn(r2).length + (v2 ? 0 : 1);
  }
  function a2(n2) {
    var r2 = n2.k;
    if (r2.length !== n2.t.length)
      return true;
    var t3 = Object.getOwnPropertyDescriptor(r2, r2.length - 1);
    if (t3 && !t3.get)
      return true;
    for (var e2 = 0; e2 < r2.length; e2++)
      if (!r2.hasOwnProperty(e2))
        return true;
    return false;
  }
  function f2(r2) {
    r2.O && n(3, JSON.stringify(p(r2)));
  }
  var s2 = {};
  m("ES5", { J: function(n2, r2) {
    var e2 = Array.isArray(n2), i2 = function(n3, r3) {
      if (n3) {
        for (var e3 = Array(r3.length), i3 = 0; i3 < r3.length; i3++)
          Object.defineProperty(e3, "" + i3, t2(i3, true));
        return e3;
      }
      var o4 = rn(r3);
      delete o4[Q];
      for (var u2 = nn(o4), a3 = 0; a3 < u2.length; a3++) {
        var f3 = u2[a3];
        o4[f3] = t2(f3, n3 || !!o4[f3].enumerable);
      }
      return Object.create(Object.getPrototypeOf(r3), o4);
    }(e2, n2), o3 = { i: e2 ? 5 : 4, A: r2 ? r2.A : _(), P: false, I: false, D: {}, l: r2, t: n2, k: i2, o: null, O: false, C: false };
    return Object.defineProperty(i2, Q, { value: o3, writable: true }), i2;
  }, S: function(n2, t3, o3) {
    o3 ? r(t3) && t3[Q].A === n2 && e(n2.p) : (n2.u && function n3(r2) {
      if (r2 && typeof r2 == "object") {
        var t4 = r2[Q];
        if (t4) {
          var e2 = t4.t, o4 = t4.k, f3 = t4.D, c2 = t4.i;
          if (c2 === 4)
            i(o4, function(r3) {
              r3 !== Q && (e2[r3] !== void 0 || u(e2, r3) ? f3[r3] || n3(o4[r3]) : (f3[r3] = true, k(t4)));
            }), i(e2, function(n4) {
              o4[n4] !== void 0 || u(o4, n4) || (f3[n4] = false, k(t4));
            });
          else if (c2 === 5) {
            if (a2(t4) && (k(t4), f3.length = true), o4.length < e2.length)
              for (var s3 = o4.length; s3 < e2.length; s3++)
                f3[s3] = false;
            else
              for (var v2 = e2.length; v2 < o4.length; v2++)
                f3[v2] = true;
            for (var p2 = Math.min(o4.length, e2.length), l2 = 0; l2 < p2; l2++)
              o4.hasOwnProperty(l2) || (f3[l2] = true), f3[l2] === void 0 && n3(o4[l2]);
          }
        }
      }
    }(n2.p[0]), e(n2.p));
  }, K: function(n2) {
    return n2.i === 4 ? o2(n2) : a2(n2);
  } });
}
var G, U, W = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol", X = typeof Map != "undefined", q = typeof Set != "undefined", B = typeof Proxy != "undefined" && Proxy.revocable !== void 0 && typeof Reflect != "undefined", H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G), L = W ? Symbol.for("immer-draftable") : "__$immer_draftable", Q = W ? Symbol.for("immer-state") : "__$immer_state", Y = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(n2) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n2;
}, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(n2) {
  return "Cannot apply patch, path doesn't resolve: " + n2;
}, 16: 'Sets cannot have "replace" patches.', 17: function(n2) {
  return "Unsupported patch operation: " + n2;
}, 18: function(n2) {
  return "The plugin for '" + n2 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n2 + "()` when initializing your application.";
}, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(n2) {
  return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n2 + "'";
}, 22: function(n2) {
  return "'current' expects a draft, got: " + n2;
}, 23: function(n2) {
  return "'original' expects a draft, got: " + n2;
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, Z = "" + Object.prototype.constructor, nn = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames, rn = Object.getOwnPropertyDescriptors || function(n2) {
  var r2 = {};
  return nn(n2).forEach(function(t2) {
    r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
  }), r2;
}, tn = {}, en = { get: function(n2, r2) {
  if (r2 === Q)
    return n2;
  var e = p(n2);
  if (!u(e, r2))
    return function(n3, r3, t2) {
      var e2, i3 = I(r3, t2);
      return i3 ? "value" in i3 ? i3.value : (e2 = i3.get) === null || e2 === void 0 ? void 0 : e2.call(n3.k) : void 0;
    }(n2, e, r2);
  var i2 = e[r2];
  return n2.I || !t(i2) ? i2 : i2 === z(n2.t, r2) ? (E(n2), n2.o[r2] = R(n2.A.h, i2, n2)) : i2;
}, has: function(n2, r2) {
  return r2 in p(n2);
}, ownKeys: function(n2) {
  return Reflect.ownKeys(p(n2));
}, set: function(n2, r2, t2) {
  var e = I(p(n2), r2);
  if (e == null ? void 0 : e.set)
    return e.set.call(n2.k, t2), true;
  if (!n2.P) {
    var i2 = z(p(n2), r2), o2 = i2 == null ? void 0 : i2[Q];
    if (o2 && o2.t === t2)
      return n2.o[r2] = t2, n2.D[r2] = false, true;
    if (c(t2, i2) && (t2 !== void 0 || u(n2.t, r2)))
      return true;
    E(n2), k(n2);
  }
  return n2.o[r2] === t2 && typeof t2 != "number" && (t2 !== void 0 || r2 in n2.o) || (n2.o[r2] = t2, n2.D[r2] = true, true);
}, deleteProperty: function(n2, r2) {
  return z(n2.t, r2) !== void 0 || r2 in n2.t ? (n2.D[r2] = false, E(n2), k(n2)) : delete n2.D[r2], n2.o && delete n2.o[r2], true;
}, getOwnPropertyDescriptor: function(n2, r2) {
  var t2 = p(n2), e = Reflect.getOwnPropertyDescriptor(t2, r2);
  return e ? { writable: true, configurable: n2.i !== 1 || r2 !== "length", enumerable: e.enumerable, value: t2[r2] } : e;
}, defineProperty: function() {
  n(11);
}, getPrototypeOf: function(n2) {
  return Object.getPrototypeOf(n2.t);
}, setPrototypeOf: function() {
  n(12);
} }, on = {};
i(en, function(n2, r2) {
  on[n2] = function() {
    return arguments[0] = arguments[0][0], r2.apply(this, arguments);
  };
}), on.deleteProperty = function(r2, t2) {
  return isNaN(parseInt(t2)) && n(13), on.set.call(this, r2, t2, void 0);
}, on.set = function(r2, t2, e) {
  return t2 !== "length" && isNaN(parseInt(t2)) && n(14), en.set.call(this, r2[0], t2, e, r2[0]);
};
var un = function() {
  function e(r2) {
    var e2 = this;
    this.g = B, this.F = true, this.produce = function(r3, i3, o2) {
      if (typeof r3 == "function" && typeof i3 != "function") {
        var u2 = i3;
        i3 = r3;
        var a2 = e2;
        return function(n2) {
          var r4 = this;
          n2 === void 0 && (n2 = u2);
          for (var t2 = arguments.length, e3 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++)
            e3[o3 - 1] = arguments[o3];
          return a2.produce(n2, function(n3) {
            var t3;
            return (t3 = i3).call.apply(t3, [r4, n3].concat(e3));
          });
        };
      }
      var f2;
      if (typeof i3 != "function" && n(6), o2 !== void 0 && typeof o2 != "function" && n(7), t(r3)) {
        var c2 = w(e2), s2 = R(e2, r3, void 0), v2 = true;
        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? O(c2) : g(c2);
        }
        return typeof Promise != "undefined" && f2 instanceof Promise ? f2.then(function(n2) {
          return j(c2, o2), P(n2, c2);
        }, function(n2) {
          throw O(c2), n2;
        }) : (j(c2, o2), P(f2, c2));
      }
      if (!r3 || typeof r3 != "object") {
        if ((f2 = i3(r3)) === void 0 && (f2 = r3), f2 === H && (f2 = void 0), e2.F && d(f2, true), o2) {
          var p2 = [], l2 = [];
          b("Patches").M(r3, f2, p2, l2), o2(p2, l2);
        }
        return f2;
      }
      n(21, r3);
    }, this.produceWithPatches = function(n2, r3) {
      if (typeof n2 == "function")
        return function(r4) {
          for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++)
            i4[o3 - 1] = arguments[o3];
          return e2.produceWithPatches(r4, function(r5) {
            return n2.apply(void 0, [r5].concat(i4));
          });
        };
      var t2, i3, o2 = e2.produce(n2, r3, function(n3, r4) {
        t2 = n3, i3 = r4;
      });
      return typeof Promise != "undefined" && o2 instanceof Promise ? o2.then(function(n3) {
        return [n3, t2, i3];
      }) : [o2, t2, i3];
    }, typeof (r2 == null ? void 0 : r2.useProxies) == "boolean" && this.setUseProxies(r2.useProxies), typeof (r2 == null ? void 0 : r2.autoFreeze) == "boolean" && this.setAutoFreeze(r2.autoFreeze);
  }
  var i2 = e.prototype;
  return i2.createDraft = function(e2) {
    t(e2) || n(8), r(e2) && (e2 = D(e2));
    var i3 = w(this), o2 = R(this, e2, void 0);
    return o2[Q].C = true, g(i3), o2;
  }, i2.finishDraft = function(r2, t2) {
    var e2 = r2 && r2[Q];
    e2 && e2.C || n(9), e2.I && n(10);
    var i3 = e2.A;
    return j(i3, t2), P(void 0, i3);
  }, i2.setAutoFreeze = function(n2) {
    this.F = n2;
  }, i2.setUseProxies = function(r2) {
    r2 && !B && n(20), this.g = r2;
  }, i2.applyPatches = function(n2, t2) {
    var e2;
    for (e2 = t2.length - 1; e2 >= 0; e2--) {
      var i3 = t2[e2];
      if (i3.path.length === 0 && i3.op === "replace") {
        n2 = i3.value;
        break;
      }
    }
    e2 > -1 && (t2 = t2.slice(e2 + 1));
    var o2 = b("Patches").$;
    return r(n2) ? o2(n2, t2) : this.produce(n2, function(n3) {
      return o2(n3, t2);
    });
  }, e;
}(), an = new un(), fn = an.produce;
an.produceWithPatches.bind(an);
an.setAutoFreeze.bind(an);
an.setUseProxies.bind(an);
an.applyPatches.bind(an);
an.createDraft.bind(an);
an.finishDraft.bind(an);
var createNextState2 = fn;
var __extends = globalThis && globalThis.__extends || function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p2 in b3)
        if (Object.prototype.hasOwnProperty.call(b3, p2))
          d3[p2] = b3[p2];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    if (typeof b2 !== "function" && b2 !== null)
      throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __generator = globalThis && globalThis.__generator || function(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t2[0] & 1)
      throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_2)
      try {
        if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
          return t2;
        if (y2 = 0, t2)
          op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _2.label++;
            return { value: op[1], done: false };
          case 5:
            _2.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t2[1]) {
              _2.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _2.label < t2[2]) {
              _2.label = t2[2];
              _2.ops.push(op);
              break;
            }
            if (t2[2])
              _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body.call(thisArg, _2);
      } catch (e) {
        op = [6, e];
        y2 = 0;
      } finally {
        f2 = t2 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __spreadArray = globalThis && globalThis.__spreadArray || function(to, from) {
  for (var i2 = 0, il = from.length, j2 = to.length; i2 < il; i2++, j2++)
    to[j2] = from[i2];
  return to;
};
var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = function(obj, key, value) {
  return key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
};
var __spreadValues2 = function(a2, b2) {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp2.call(b2, prop))
      __defNormalProp2(a2, prop, b2[prop]);
  if (__getOwnPropSymbols2)
    for (var _i = 0, _c = __getOwnPropSymbols2(b2); _i < _c.length; _i++) {
      var prop = _c[_i];
      if (__propIsEnum2.call(b2, prop))
        __defNormalProp2(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = function(a2, b2) {
  return __defProps(a2, __getOwnPropDescs(b2));
};
var __async2 = function(__this, __arguments, generator) {
  return new Promise(function(resolve, reject) {
    var fulfilled = function(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = function(value) {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = function(x2) {
      return x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    };
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length === 0)
    return void 0;
  if (typeof arguments[0] === "object")
    return compose;
  return compose.apply(null, arguments);
};
function isPlainObject(value) {
  if (typeof value !== "object" || value === null)
    return false;
  var proto = Object.getPrototypeOf(value);
  if (proto === null)
    return true;
  var baseProto = proto;
  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }
  return proto === baseProto;
}
function getTimeMeasureUtils(maxDelay, fnName) {
  var elapsed = 0;
  return {
    measureTime: function(fn2) {
      var started = Date.now();
      try {
        return fn2();
      } finally {
        var finished = Date.now();
        elapsed += finished - started;
      }
    },
    warnIfExceeded: function() {
      if (elapsed > maxDelay) {
        console.warn(fnName + " took " + elapsed + "ms, which is more than the warning threshold of " + maxDelay + "ms. \nIf your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.\nIt is disabled in production builds, so you don't need to worry about that.");
      }
    }
  };
}
var MiddlewareArray = function(_super) {
  __extends(MiddlewareArray2, _super);
  function MiddlewareArray2() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var _this = _super.apply(this, args) || this;
    Object.setPrototypeOf(_this, MiddlewareArray2.prototype);
    return _this;
  }
  Object.defineProperty(MiddlewareArray2, Symbol.species, {
    get: function() {
      return MiddlewareArray2;
    },
    enumerable: false,
    configurable: true
  });
  MiddlewareArray2.prototype.concat = function() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      arr[_i] = arguments[_i];
    }
    return _super.prototype.concat.apply(this, arr);
  };
  MiddlewareArray2.prototype.prepend = function() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      arr[_i] = arguments[_i];
    }
    if (arr.length === 1 && Array.isArray(arr[0])) {
      return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray([void 0], arr[0].concat(this))))();
    }
    return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray([void 0], arr.concat(this))))();
  };
  return MiddlewareArray2;
}(Array);
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  throw new Error(prefix + ": " + (message || ""));
}
function stringify(obj, serializer, indent, decycler) {
  return JSON.stringify(obj, getSerialize(serializer, decycler), indent);
}
function getSerialize(serializer, decycler) {
  var stack = [], keys = [];
  if (!decycler)
    decycler = function(_2, value) {
      if (stack[0] === value)
        return "[Circular ~]";
      return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
    };
  return function(key, value) {
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this);
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
      if (~stack.indexOf(value))
        value = decycler.call(this, key, value);
    } else
      stack.push(value);
    return serializer == null ? value : serializer.call(this, key, value);
  };
}
function isImmutableDefault(value) {
  return typeof value !== "object" || value === null || typeof value === "undefined" || Object.isFrozen(value);
}
function trackForMutations(isImmutable, ignorePaths, obj) {
  var trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
  return {
    detectMutations: function() {
      return detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
    }
  };
}
function trackProperties(isImmutable, ignorePaths, obj, path) {
  if (ignorePaths === void 0) {
    ignorePaths = [];
  }
  if (path === void 0) {
    path = "";
  }
  var tracked = { value: obj };
  if (!isImmutable(obj)) {
    tracked.children = {};
    for (var key in obj) {
      var childPath = path ? path + "." + key : key;
      if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
        continue;
      }
      tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
    }
  }
  return tracked;
}
function detectMutations(isImmutable, ignorePaths, trackedProperty, obj, sameParentRef, path) {
  if (ignorePaths === void 0) {
    ignorePaths = [];
  }
  if (sameParentRef === void 0) {
    sameParentRef = false;
  }
  if (path === void 0) {
    path = "";
  }
  var prevObj = trackedProperty ? trackedProperty.value : void 0;
  var sameRef = prevObj === obj;
  if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
    return { wasMutated: true, path };
  }
  if (isImmutable(prevObj) || isImmutable(obj)) {
    return { wasMutated: false };
  }
  var keysToDetect = {};
  for (var key in trackedProperty.children) {
    keysToDetect[key] = true;
  }
  for (var key in obj) {
    keysToDetect[key] = true;
  }
  for (var key in keysToDetect) {
    var childPath = path ? path + "." + key : key;
    if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
      continue;
    }
    var result = detectMutations(isImmutable, ignorePaths, trackedProperty.children[key], obj[key], sameRef, childPath);
    if (result.wasMutated) {
      return result;
    }
  }
  return { wasMutated: false };
}
function createImmutableStateInvariantMiddleware(options) {
  if (options === void 0) {
    options = {};
  }
  var _c = options.isImmutable, isImmutable = _c === void 0 ? isImmutableDefault : _c, ignoredPaths = options.ignoredPaths, _d = options.warnAfter, warnAfter = _d === void 0 ? 32 : _d, ignore = options.ignore;
  ignoredPaths = ignoredPaths || ignore;
  var track = trackForMutations.bind(null, isImmutable, ignoredPaths);
  return function(_c2) {
    var getState = _c2.getState;
    var state = getState();
    var tracker = track(state);
    var result;
    return function(next) {
      return function(action) {
        var measureUtils = getTimeMeasureUtils(warnAfter, "ImmutableStateInvariantMiddleware");
        measureUtils.measureTime(function() {
          state = getState();
          result = tracker.detectMutations();
          tracker = track(state);
          invariant(!result.wasMutated, "A state mutation was detected between dispatches, in the path '" + (result.path || "") + "'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
        });
        var dispatchedAction = next(action);
        measureUtils.measureTime(function() {
          state = getState();
          result = tracker.detectMutations();
          tracker = track(state);
          result.wasMutated && invariant(!result.wasMutated, "A state mutation was detected inside a dispatch, in the path: " + (result.path || "") + ". Take a look at the reducer(s) handling the action " + stringify(action) + ". (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
        });
        measureUtils.warnIfExceeded();
        return dispatchedAction;
      };
    };
  };
}
function isPlain(val) {
  var type = typeof val;
  return type === "undefined" || val === null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || isPlainObject(val);
}
function findNonSerializableValue(value, path, isSerializable, getEntries, ignoredPaths) {
  if (path === void 0) {
    path = "";
  }
  if (isSerializable === void 0) {
    isSerializable = isPlain;
  }
  if (ignoredPaths === void 0) {
    ignoredPaths = [];
  }
  var foundNestedSerializable;
  if (!isSerializable(value)) {
    return {
      keyPath: path || "<root>",
      value
    };
  }
  if (typeof value !== "object" || value === null) {
    return false;
  }
  var entries = getEntries != null ? getEntries(value) : Object.entries(value);
  var hasIgnoredPaths = ignoredPaths.length > 0;
  for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
    var _c = entries_1[_i], key = _c[0], nestedValue = _c[1];
    var nestedPath = path ? path + "." + key : key;
    if (hasIgnoredPaths && ignoredPaths.indexOf(nestedPath) >= 0) {
      continue;
    }
    if (!isSerializable(nestedValue)) {
      return {
        keyPath: nestedPath,
        value: nestedValue
      };
    }
    if (typeof nestedValue === "object") {
      foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths);
      if (foundNestedSerializable) {
        return foundNestedSerializable;
      }
    }
  }
  return false;
}
function createSerializableStateInvariantMiddleware(options) {
  if (options === void 0) {
    options = {};
  }
  var _c = options.isSerializable, isSerializable = _c === void 0 ? isPlain : _c, getEntries = options.getEntries, _d = options.ignoredActions, ignoredActions = _d === void 0 ? [] : _d, _e = options.ignoredActionPaths, ignoredActionPaths = _e === void 0 ? ["meta.arg", "meta.baseQueryMeta"] : _e, _f = options.ignoredPaths, ignoredPaths = _f === void 0 ? [] : _f, _g = options.warnAfter, warnAfter = _g === void 0 ? 32 : _g, _h = options.ignoreState, ignoreState = _h === void 0 ? false : _h, _j = options.ignoreActions, ignoreActions = _j === void 0 ? false : _j;
  return function(storeAPI) {
    return function(next) {
      return function(action) {
        var result = next(action);
        var measureUtils = getTimeMeasureUtils(warnAfter, "SerializableStateInvariantMiddleware");
        if (!ignoreActions && !(ignoredActions.length && ignoredActions.indexOf(action.type) !== -1)) {
          measureUtils.measureTime(function() {
            var foundActionNonSerializableValue = findNonSerializableValue(action, "", isSerializable, getEntries, ignoredActionPaths);
            if (foundActionNonSerializableValue) {
              var keyPath = foundActionNonSerializableValue.keyPath, value = foundActionNonSerializableValue.value;
              console.error("A non-serializable value was detected in an action, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the logic that dispatched this action: ", action, "\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)", "\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)");
            }
          });
        }
        if (!ignoreState) {
          measureUtils.measureTime(function() {
            var state = storeAPI.getState();
            var foundStateNonSerializableValue = findNonSerializableValue(state, "", isSerializable, getEntries, ignoredPaths);
            if (foundStateNonSerializableValue) {
              var keyPath = foundStateNonSerializableValue.keyPath, value = foundStateNonSerializableValue.value;
              console.error("A non-serializable value was detected in the state, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the reducer(s) handling this action type: " + action.type + ".\n(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)");
            }
          });
          measureUtils.warnIfExceeded();
        }
        return result;
      };
    };
  };
}
function isBoolean(x2) {
  return typeof x2 === "boolean";
}
function curryGetDefaultMiddleware() {
  return function curriedGetDefaultMiddleware(options) {
    return getDefaultMiddleware(options);
  };
}
function getDefaultMiddleware(options) {
  if (options === void 0) {
    options = {};
  }
  var _c = options.thunk, thunk$1 = _c === void 0 ? true : _c, _d = options.immutableCheck, immutableCheck = _d === void 0 ? true : _d, _e = options.serializableCheck, serializableCheck = _e === void 0 ? true : _e;
  var middlewareArray = new MiddlewareArray();
  if (thunk$1) {
    if (isBoolean(thunk$1)) {
      middlewareArray.push(thunk);
    } else {
      middlewareArray.push(thunk.withExtraArgument(thunk$1.extraArgument));
    }
  }
  {
    if (immutableCheck) {
      var immutableOptions = {};
      if (!isBoolean(immutableCheck)) {
        immutableOptions = immutableCheck;
      }
      middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
    }
    if (serializableCheck) {
      var serializableOptions = {};
      if (!isBoolean(serializableCheck)) {
        serializableOptions = serializableCheck;
      }
      middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
    }
  }
  return middlewareArray;
}
var IS_PRODUCTION = false;
function configureStore(options) {
  var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();
  var _c = options || {}, _d = _c.reducer, reducer = _d === void 0 ? void 0 : _d, _e = _c.middleware, middleware = _e === void 0 ? curriedGetDefaultMiddleware() : _e, _f = _c.devTools, devTools = _f === void 0 ? true : _f, _g = _c.preloadedState, preloadedState = _g === void 0 ? void 0 : _g, _h = _c.enhancers, enhancers = _h === void 0 ? void 0 : _h;
  var rootReducer;
  if (typeof reducer === "function") {
    rootReducer = reducer;
  } else if (isPlainObject(reducer)) {
    rootReducer = combineReducers(reducer);
  } else {
    throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  }
  var finalMiddleware = middleware;
  if (typeof finalMiddleware === "function") {
    finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
    if (!Array.isArray(finalMiddleware)) {
      throw new Error("when using a middleware builder function, an array of middleware must be returned");
    }
  }
  if (finalMiddleware.some(function(item) {
    return typeof item !== "function";
  })) {
    throw new Error("each middleware provided to configureStore must be a function");
  }
  var middlewareEnhancer = applyMiddleware.apply(void 0, finalMiddleware);
  var finalCompose = compose;
  if (devTools) {
    finalCompose = composeWithDevTools(__spreadValues2({
      trace: !IS_PRODUCTION
    }, typeof devTools === "object" && devTools));
  }
  var storeEnhancers = [middlewareEnhancer];
  if (Array.isArray(enhancers)) {
    storeEnhancers = __spreadArray([middlewareEnhancer], enhancers);
  } else if (typeof enhancers === "function") {
    storeEnhancers = enhancers(storeEnhancers);
  }
  var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
  return createStore(rootReducer, preloadedState, composedEnhancer);
}
function createAction(type, prepareAction) {
  function actionCreator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (prepareAction) {
      var prepared = prepareAction.apply(void 0, args);
      if (!prepared) {
        throw new Error("prepareAction did not return an object");
      }
      return __spreadValues2(__spreadValues2({
        type,
        payload: prepared.payload
      }, "meta" in prepared && { meta: prepared.meta }), "error" in prepared && { error: prepared.error });
    }
    return { type, payload: args[0] };
  }
  actionCreator.toString = function() {
    return "" + type;
  };
  actionCreator.type = type;
  actionCreator.match = function(action) {
    return action.type === type;
  };
  return actionCreator;
}
function executeReducerBuilderCallback(builderCallback) {
  var actionsMap = {};
  var actionMatchers = [];
  var defaultCaseReducer;
  var builder = {
    addCase: function(typeOrActionCreator, reducer) {
      {
        if (actionMatchers.length > 0) {
          throw new Error("`builder.addCase` should only be called before calling `builder.addMatcher`");
        }
        if (defaultCaseReducer) {
          throw new Error("`builder.addCase` should only be called before calling `builder.addDefaultCase`");
        }
      }
      var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
      if (type in actionsMap) {
        throw new Error("addCase cannot be called with two reducers for the same action type");
      }
      actionsMap[type] = reducer;
      return builder;
    },
    addMatcher: function(matcher, reducer) {
      {
        if (defaultCaseReducer) {
          throw new Error("`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
        }
      }
      actionMatchers.push({ matcher, reducer });
      return builder;
    },
    addDefaultCase: function(reducer) {
      {
        if (defaultCaseReducer) {
          throw new Error("`builder.addDefaultCase` can only be called once");
        }
      }
      defaultCaseReducer = reducer;
      return builder;
    }
  };
  builderCallback(builder);
  return [actionsMap, actionMatchers, defaultCaseReducer];
}
function isStateFunction(x2) {
  return typeof x2 === "function";
}
function createReducer(initialState2, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
  if (actionMatchers === void 0) {
    actionMatchers = [];
  }
  var _c = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer], actionsMap = _c[0], finalActionMatchers = _c[1], finalDefaultCaseReducer = _c[2];
  var getInitialState;
  if (isStateFunction(initialState2)) {
    getInitialState = function() {
      return createNextState2(initialState2(), function() {
      });
    };
  } else {
    var frozenInitialState_1 = createNextState2(initialState2, function() {
    });
    getInitialState = function() {
      return frozenInitialState_1;
    };
  }
  function reducer(state, action) {
    if (state === void 0) {
      state = getInitialState();
    }
    var caseReducers = __spreadArray([
      actionsMap[action.type]
    ], finalActionMatchers.filter(function(_c2) {
      var matcher = _c2.matcher;
      return matcher(action);
    }).map(function(_c2) {
      var reducer2 = _c2.reducer;
      return reducer2;
    }));
    if (caseReducers.filter(function(cr) {
      return !!cr;
    }).length === 0) {
      caseReducers = [finalDefaultCaseReducer];
    }
    return caseReducers.reduce(function(previousState, caseReducer) {
      if (caseReducer) {
        if (r(previousState)) {
          var draft = previousState;
          var result = caseReducer(draft, action);
          if (typeof result === "undefined") {
            return previousState;
          }
          return result;
        } else if (!t(previousState)) {
          var result = caseReducer(previousState, action);
          if (typeof result === "undefined") {
            if (previousState === null) {
              return previousState;
            }
            throw Error("A case reducer on a non-draftable value must not return undefined");
          }
          return result;
        } else {
          return createNextState2(previousState, function(draft2) {
            return caseReducer(draft2, action);
          });
        }
      }
      return previousState;
    }, state);
  }
  reducer.getInitialState = getInitialState;
  return reducer;
}
function getType2(slice, actionKey) {
  return slice + "/" + actionKey;
}
function createSlice(options) {
  var name = options.name;
  if (!name) {
    throw new Error("`name` is a required option for createSlice");
  }
  var initialState2 = typeof options.initialState == "function" ? options.initialState : createNextState2(options.initialState, function() {
  });
  var reducers = options.reducers || {};
  var reducerNames = Object.keys(reducers);
  var sliceCaseReducersByName = {};
  var sliceCaseReducersByType = {};
  var actionCreators = {};
  reducerNames.forEach(function(reducerName) {
    var maybeReducerWithPrepare = reducers[reducerName];
    var type = getType2(name, reducerName);
    var caseReducer;
    var prepareCallback;
    if ("reducer" in maybeReducerWithPrepare) {
      caseReducer = maybeReducerWithPrepare.reducer;
      prepareCallback = maybeReducerWithPrepare.prepare;
    } else {
      caseReducer = maybeReducerWithPrepare;
    }
    sliceCaseReducersByName[reducerName] = caseReducer;
    sliceCaseReducersByType[type] = caseReducer;
    actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
  });
  function buildReducer() {
    var _c = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers], _d = _c[0], extraReducers = _d === void 0 ? {} : _d, _e = _c[1], actionMatchers = _e === void 0 ? [] : _e, _f = _c[2], defaultCaseReducer = _f === void 0 ? void 0 : _f;
    var finalCaseReducers = __spreadValues2(__spreadValues2({}, extraReducers), sliceCaseReducersByType);
    return createReducer(initialState2, finalCaseReducers, actionMatchers, defaultCaseReducer);
  }
  var _reducer;
  return {
    name,
    reducer: function(state, action) {
      if (!_reducer)
        _reducer = buildReducer();
      return _reducer(state, action);
    },
    actions: actionCreators,
    caseReducers: sliceCaseReducersByName,
    getInitialState: function() {
      if (!_reducer)
        _reducer = buildReducer();
      return _reducer.getInitialState();
    }
  };
}
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = function(size) {
  if (size === void 0) {
    size = 21;
  }
  var id = "";
  var i2 = size;
  while (i2--) {
    id += urlAlphabet[Math.random() * 64 | 0];
  }
  return id;
};
var commonProperties = [
  "name",
  "message",
  "stack",
  "code"
];
var RejectWithValue = function() {
  function RejectWithValue2(payload, meta) {
    this.payload = payload;
    this.meta = meta;
  }
  return RejectWithValue2;
}();
var FulfillWithMeta = function() {
  function FulfillWithMeta2(payload, meta) {
    this.payload = payload;
    this.meta = meta;
  }
  return FulfillWithMeta2;
}();
var miniSerializeError = function(value) {
  if (typeof value === "object" && value !== null) {
    var simpleError = {};
    for (var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++) {
      var property = commonProperties_1[_i];
      if (typeof value[property] === "string") {
        simpleError[property] = value[property];
      }
    }
    return simpleError;
  }
  return { message: String(value) };
};
function createAsyncThunk(typePrefix, payloadCreator, options) {
  var fulfilled = createAction(typePrefix + "/fulfilled", function(payload, requestId, arg, meta) {
    return {
      payload,
      meta: __spreadProps(__spreadValues2({}, meta || {}), {
        arg,
        requestId,
        requestStatus: "fulfilled"
      })
    };
  });
  var pending = createAction(typePrefix + "/pending", function(requestId, arg, meta) {
    return {
      payload: void 0,
      meta: __spreadProps(__spreadValues2({}, meta || {}), {
        arg,
        requestId,
        requestStatus: "pending"
      })
    };
  });
  var rejected = createAction(typePrefix + "/rejected", function(error, requestId, arg, payload, meta) {
    return {
      payload,
      error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
      meta: __spreadProps(__spreadValues2({}, meta || {}), {
        arg,
        requestId,
        rejectedWithValue: !!payload,
        requestStatus: "rejected",
        aborted: (error == null ? void 0 : error.name) === "AbortError",
        condition: (error == null ? void 0 : error.name) === "ConditionError"
      })
    };
  });
  var displayedWarning = false;
  var AC = typeof AbortController !== "undefined" ? AbortController : function() {
    function class_1() {
      this.signal = {
        aborted: false,
        addEventListener: function() {
        },
        dispatchEvent: function() {
          return false;
        },
        onabort: function() {
        },
        removeEventListener: function() {
        }
      };
    }
    class_1.prototype.abort = function() {
      {
        if (!displayedWarning) {
          displayedWarning = true;
          console.info("This platform does not implement AbortController. \nIf you want to use the AbortController to react to `abort` events, please consider importing a polyfill like 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'.");
        }
      }
    };
    return class_1;
  }();
  function actionCreator(arg) {
    return function(dispatch, getState, extra) {
      var requestId = (options == null ? void 0 : options.idGenerator) ? options.idGenerator(arg) : nanoid();
      var abortController = new AC();
      var abortReason;
      var abortedPromise = new Promise(function(_2, reject) {
        return abortController.signal.addEventListener("abort", function() {
          return reject({ name: "AbortError", message: abortReason || "Aborted" });
        });
      });
      var started = false;
      function abort(reason) {
        if (started) {
          abortReason = reason;
          abortController.abort();
        }
      }
      var promise = function() {
        return __async2(this, null, function() {
          var _a, _b, finalAction, conditionResult, err_1, skipDispatch;
          return __generator(this, function(_c) {
            switch (_c.label) {
              case 0:
                _c.trys.push([0, 4, , 5]);
                conditionResult = (_a = options == null ? void 0 : options.condition) == null ? void 0 : _a.call(options, arg, { getState, extra });
                if (!isThenable(conditionResult))
                  return [3, 2];
                return [4, conditionResult];
              case 1:
                conditionResult = _c.sent();
                _c.label = 2;
              case 2:
                if (conditionResult === false) {
                  throw {
                    name: "ConditionError",
                    message: "Aborted due to condition callback returning false."
                  };
                }
                started = true;
                dispatch(pending(requestId, arg, (_b = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _b.call(options, { requestId, arg }, { getState, extra })));
                return [4, Promise.race([
                  abortedPromise,
                  Promise.resolve(payloadCreator(arg, {
                    dispatch,
                    getState,
                    extra,
                    requestId,
                    signal: abortController.signal,
                    rejectWithValue: function(value, meta) {
                      return new RejectWithValue(value, meta);
                    },
                    fulfillWithValue: function(value, meta) {
                      return new FulfillWithMeta(value, meta);
                    }
                  })).then(function(result) {
                    if (result instanceof RejectWithValue) {
                      throw result;
                    }
                    if (result instanceof FulfillWithMeta) {
                      return fulfilled(result.payload, requestId, arg, result.meta);
                    }
                    return fulfilled(result, requestId, arg);
                  })
                ])];
              case 3:
                finalAction = _c.sent();
                return [3, 5];
              case 4:
                err_1 = _c.sent();
                finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
                return [3, 5];
              case 5:
                skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                if (!skipDispatch) {
                  dispatch(finalAction);
                }
                return [2, finalAction];
            }
          });
        });
      }();
      return Object.assign(promise, {
        abort,
        requestId,
        arg,
        unwrap: function() {
          return promise.then(unwrapResult);
        }
      });
    };
  }
  return Object.assign(actionCreator, {
    pending,
    rejected,
    fulfilled,
    typePrefix
  });
}
function unwrapResult(action) {
  if (action.meta && action.meta.rejectedWithValue) {
    throw action.payload;
  }
  if (action.error) {
    throw action.error;
  }
  return action.payload;
}
function isThenable(value) {
  return value !== null && typeof value === "object" && typeof value.then === "function";
}
var alm = "listenerMiddleware";
createAction(alm + "/add");
createAction(alm + "/removeAll");
createAction(alm + "/remove");
N();
const axiosObj = axios.create({
  baseURL: wpWaxCustomerSupportAppScriptData.apiEndpoint,
  headers: {
    "Content-type": "application/json",
    "X-WP-Nonce": wpWaxCustomerSupportAppScriptData.apiNonce
  }
});
const sendMessage$1 = (name, email, data) => __async(this, null, function* () {
  if (data.type == "text") {
    return yield axiosObj.post("/messages", {
      name,
      email,
      message_type: "text",
      message_value: data.text
    });
  }
});
const api = {
  axiosObj,
  sendMessage: sendMessage$1
};
const initialState = {
  name: "",
  email: "",
  data: {},
  displayChatScreen: false,
  chatScreen: "welcome",
  chatStep: 1
};
const sendMessage = createAsyncThunk("chatBox/send", (_2, thunkAPI) => __async(this, null, function* () {
  const data = thunkAPI.getState().data;
  const name = thunkAPI.getState().name;
  const email = thunkAPI.getState().email;
  try {
    let response = yield api.sendMessage(name, email, data);
    let result = response.data;
    return thunkAPI.fulfillWithValue(result);
  } catch (error) {
    let result = error.response.data;
    return thunkAPI.rejectWithValue(result);
  }
}));
const chatBoxSlice = createSlice({
  name: "chatBox",
  initialState,
  reducers: {
    toggleDisplayChatScreen(state) {
      state.displayChatScreen = !state.displayChatScreen;
    },
    chatScreen(state, action) {
      state.chatScreen = action.payload;
    },
    chatStep(state, action) {
      state.chatStep = action.payload;
    },
    back(state) {
      if (state.chatStep > 1) {
        state.chatStep -= 1;
      } else {
        state.chatScreen = "welcome";
      }
    },
    reset() {
      return initialState;
    },
    resetWithChatScreen() {
      let state = __spreadValues({}, initialState);
      state.displayChatScreen = true;
      return state;
    },
    setContactInfo(state, { payload }) {
      state.name = payload.name;
      state.email = payload.email;
    },
    setData(state, action) {
      state.data = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(sendMessage.pending, (state) => {
      state.chatScreen = "sending";
    });
    builder.addCase(sendMessage.fulfilled, (state) => {
      state.chatScreen = "success";
    });
    builder.addCase(sendMessage.rejected, (state, { payload }) => {
      state.chatScreen = "contactForm";
      let message = payload.message;
      console.log(message);
    });
  }
});
const chatBoxActions = chatBoxSlice.actions;
const store = configureStore({
  reducer: chatBoxSlice.reducer
});
const avatar = "_avatar_1iq8b_1";
const ttt = "_ttt_1iq8b_7";
var classes$2 = {
  avatar,
  ttt
};
var avater = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAFVBMVEXFxcX////7+/vv7+/e3t7R0dHJycnl4e1FAAADpUlEQVRo3u2YTVMbMQyG2+bjrndDz2ghPSeZgXPSaTlDoD1ngP//G9ox2ijG63gl57jvAEnI7DOSLMuyvowaNWrUqFGjRmX05+XX778XIb20TP91c3eoJU3XxPSh5qEO9c5MR+GuBjURiMC4AjZtKRZWXtRsTZ/VPjpZe2UwiRZOD6lP9y7WupfVHDxryNSrHw7WRkMFYtQYNmVByR/NNHtePFFOjTm3mLJ6dO2ey0R/R6paJ1sJNRMxE2qcnAqIuzWMwrfybUWVAnlhDReUgUCAvLcGjBNjVGwL2IzOCitzduHEyVjXBta3yLfUySvzZlQgxDJPdd1BYbGzH29bV0ntdxYHa0rkheFJMRdW3ratK71SFHwslocTPThPxtRHGCrFlNEbcQUbWFQyzGLXiQ2IklasW9WWCX9O5MUW1txgl30PcRR9WArrmhHCHhgSdYExiE17e3PMJw6/HD6AIAvZVjcmqhsD67VQJ5amsyPER/xjCZOvO5nmMkubAG8xZHy8hFWFtTnZnc17W8u6JxAklyA2aeFZWNvCgIC00YILbAm9MWCgXmHr7jG5iz6cPearbr5TZPjXlb8nZ9nZ6IjiotVJ9IStqbha1V+u5usEAu0ljHpLOUFL/21byoQAWc1yG6ZyjhV+xucFkpuoN8eE6J7DvHG1h6o9x8X+tmYyFAIlxR81Lj5rVnGlk8/FnPCj/LD3XIuJe8eoI6d2a6wSm3wjhxt7YuW1dHiYAQIWLzcn4e7DNvZqEzMYxyad723lOZpZyQfoEMzbyfkPkHmbVHn3zfYtc/9UPzF4nrlWjAZbQyc/zcEyRYOkBCvbOmzaCSaKF3PX3wPy6dbQ9rJYg9xCbKsTQrW0tRF8LjUab2dPjug/6WZWcz6vhDTCS8vNEemNm09dr3LRtJJ7E+uqsH8samwTbf/o6hsVxdEMcuicENJURikRD/wW/nkcGwI2C2YUOTwkKyaFcVyS/VgVwnWZDNtk3eOo1GLAoKKVJ4cLF9iMXAr+pLOeO1cglRoxCeUh5P5Y5xGdQwzhy9foChjyhXoX7BAKFCbvFBbwQbwwFgkkYSpm/jz7uEJSHQxTVV9tneiFM4Vml3JVLF6IQMkMWY8QXBdObI44alN6suWSYpeGu3tFPoCLDMugAotz63a+1y8WaCQkU6WYyRPRYZFiw4Y/QfNjL4v77cJpZ8dpS1dVvcqsiYPDmvh+lgouFoZ3h1/Jp+vM1vboe6ba17H+AetQVgc5T+AyAAAAAElFTkSuQmCC";
var _jsxFileName$e = "/Users/syedgalibahmed/Local Sites/video-chat-support/app/public/wp-content/plugins/wpwax-video-message/src/js/apps/chatbox/components/Avatar.jsx";
function Avatar() {
  const dispatch = useDispatch();
  function clickHandler(e) {
    e.preventDefault();
    dispatch(chatBoxActions.toggleDisplayChatScreen());
  }
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: classes$2.avatar,
    onClick: clickHandler,
    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
      className: classes$2.ttt,
      src: avater,
      alt: "Avatar"
    }, void 0, false, {
      fileName: _jsxFileName$e,
      lineNumber: 16,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName$e,
    lineNumber: 15,
    columnNumber: 3
  }, this);
}
const main = "_main_1yz4z_1";
const box = "_box_1yz4z_10";
var classes$1 = {
  main,
  box
};
var _jsxFileName$d = "/Users/syedgalibahmed/Local Sites/video-chat-support/app/public/wp-content/plugins/wpwax-video-message/src/js/apps/chatbox/components/ui/ClosePopup.jsx";
function ClosePopup(props) {
  const dispatch = useDispatch();
  function yesHandler() {
    dispatch(chatBoxActions.reset());
  }
  function noHandler() {
    props.setDisplayClosePopup(false);
  }
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: classes$1.main,
    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: classes$1.box,
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
        children: "Are you sure that you want to close? All progress will be lost."
      }, void 0, false, {
        fileName: _jsxFileName$d,
        lineNumber: 18,
        columnNumber: 5
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
          onClick: yesHandler,
          children: "Yes I'm Sure"
        }, void 0, false, {
          fileName: _jsxFileName$d,
          lineNumber: 23,
          columnNumber: 6
        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
          onClick: noHandler,
          children: "No"
        }, void 0, false, {
          fileName: _jsxFileName$d,
          lineNumber: 24,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$d,
        lineNumber: 22,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$d,
      lineNumber: 17,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName$d,
    lineNumber: 16,
    columnNumber: 3
  }, this);
}
const container = "_container_aud45_1";
const relative = "_relative_aud45_10";
const back = "_back_aud45_13";
const minus = "_minus_aud45_25";
const close = "_close_aud45_37";
var classes = {
  container,
  relative,
  back,
  minus,
  close
};
var _jsxFileName$c = "/Users/syedgalibahmed/Local Sites/video-chat-support/app/public/wp-content/plugins/wpwax-video-message/src/js/apps/chatbox/components/ui/Container.jsx";
function Container(props) {
  const dispatch = useDispatch();
  const chatScreen = useSelector((state) => state.chatScreen);
  const [displayClosePopup, setDisplayClosePopup] = react.exports.useState(false);
  function backHandler() {
    dispatch(chatBoxActions.back());
  }
  function minusHandler() {
    dispatch(chatBoxActions.toggleDisplayChatScreen());
  }
  function closeHandler() {
    if (chatScreen == "success") {
      dispatch(chatBoxActions.reset());
    } else {
      setDisplayClosePopup(true);
    }
  }
  let backBtn = /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
    onClick: backHandler,
    className: classes.back,
    children: "<<Back"
  }, void 0, false, {
    fileName: _jsxFileName$c,
    lineNumber: 29,
    columnNumber: 3
  }, this);
  if (chatScreen == "welcome" || chatScreen == "success") {
    backBtn = "";
  }
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: classes.container,
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: classes.relative,
        children: [backBtn, /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
          onClick: minusHandler,
          className: classes.minus,
          children: "-"
        }, void 0, false, {
          fileName: _jsxFileName$c,
          lineNumber: 42,
          columnNumber: 6
        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
          onClick: closeHandler,
          className: classes.close,
          children: "x"
        }, void 0, false, {
          fileName: _jsxFileName$c,
          lineNumber: 45,
          columnNumber: 6
        }, this), props.children]
      }, void 0, true, {
        fileName: _jsxFileName$c,
        lineNumber: 40,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$c,
      lineNumber: 39,
      columnNumber: 4
    }, this), displayClosePopup && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ClosePopup, {
      setDisplayClosePopup
    }, void 0, false, {
      fileName: _jsxFileName$c,
      lineNumber: 52,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}
var _jsxFileName$b = "/Users/syedgalibahmed/Local Sites/video-chat-support/app/public/wp-content/plugins/wpwax-video-message/src/js/apps/chatbox/components/Welcome.jsx";
function Welcome() {
  const dispatch = useDispatch();
  function btnHandler(type) {
    dispatch(chatBoxActions.chatScreen(type));
    dispatch(chatBoxActions.chatStep(1));
  }
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      children: "Welcome to wpWax, Leave your question below and we'll get back to you asap."
    }, void 0, false, {
      fileName: _jsxFileName$b,
      lineNumber: 15,
      columnNumber: 4
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      children: "[Video Screen]"
    }, void 0, false, {
      fileName: _jsxFileName$b,
      lineNumber: 18,
      columnNumber: 4
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      children: "How would you like to chat?"
    }, void 0, false, {
      fileName: _jsxFileName$b,
      lineNumber: 19,
      columnNumber: 4
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
        onClick: () => btnHandler("video"),
        children: "Video"
      }, void 0, false, {
        fileName: _jsxFileName$b,
        lineNumber: 21,
        columnNumber: 5
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
        onClick: () => btnHandler("screenRecord"),
        children: "Screen Record"
      }, void 0, false, {
        fileName: _jsxFileName$b,
        lineNumber: 22,
        columnNumber: 5
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
        onClick: () => btnHandler("audio"),
        children: "Voice"
      }, void 0, false, {
        fileName: _jsxFileName$b,
        lineNumber: 25,
        columnNumber: 5
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
        onClick: () => btnHandler("text"),
        children: "Text"
      }, void 0, false, {
        fileName: _jsxFileName$b,
        lineNumber: 26,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$b,
      lineNumber: 20,
      columnNumber: 4
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      children: "You can practise before sending"
    }, void 0, false, {
      fileName: _jsxFileName$b,
      lineNumber: 28,
      columnNumber: 4
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      children: "Powered by wpWax"
    }, void 0, false, {
      fileName: _jsxFileName$b,
      lineNumber: 29,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$b,
    lineNumber: 14,
    columnNumber: 3
  }, this);
}
var _jsxFileName$a = "/Users/syedgalibahmed/Local Sites/video-chat-support/app/public/wp-content/plugins/wpwax-video-message/src/js/apps/chatbox/components/ContactForm.jsx";
function ContactForm() {
  const dispatch = useDispatch();
  const nameRef = react.exports.useRef();
  const emailRef = react.exports.useRef();
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);
  function submitHandler(e) {
    e.preventDefault();
    const name2 = nameRef.current.value;
    const email2 = emailRef.current.value;
    dispatch(chatBoxActions.setContactInfo({
      name: name2,
      email: email2
    }));
    dispatch(sendMessage());
  }
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
      children: "Before you go, please leave your contact details so that we can get back to you..."
    }, void 0, false, {
      fileName: _jsxFileName$a,
      lineNumber: 25,
      columnNumber: 4
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("form", {
      onSubmit: submitHandler,
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
        placeholder: "Your name*",
        type: "text",
        defaultValue: name,
        ref: nameRef,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName$a,
        lineNumber: 30,
        columnNumber: 5
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
        placeholder: "Your email*",
        type: "email",
        defaultValue: email,
        ref: emailRef,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName$a,
        lineNumber: 37,
        columnNumber: 5
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
        children: "Send"
      }, void 0, false, {
        fileName: _jsxFileName$a,
        lineNumber: 44,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$a,
      lineNumber: 29,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$a,
    lineNumber: 24,
    columnNumber: 3
  }, this);
}
var _jsxFileName$9 = "/Users/syedgalibahmed/Local Sites/video-chat-support/app/public/wp-content/plugins/wpwax-video-message/src/js/apps/chatbox/components/Sending.jsx";
function Sending() {
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
      children: "Sending...."
    }, void 0, false, {
      fileName: _jsxFileName$9,
      lineNumber: 6,
      columnNumber: 4
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
      children: "We are currently sending your response"
    }, void 0, false, {
      fileName: _jsxFileName$9,
      lineNumber: 7,
      columnNumber: 4
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
      children: "Please dont close this page"
    }, void 0, false, {
      fileName: _jsxFileName$9,
      lineNumber: 8,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$9,
    lineNumber: 5,
    columnNumber: 3
  }, this);
}
var _jsxFileName$8 = "/Users/syedgalibahmed/Local Sites/video-chat-support/app/public/wp-content/plugins/wpwax-video-message/src/js/apps/chatbox/components/Success.jsx";
function Success() {
  const dispatch = useDispatch();
  function btnHandler(e) {
    e.preventDefault();
    dispatch(chatBoxActions.resetWithChatScreen());
  }
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
      children: "Submission Success"
    }, void 0, false, {
      fileName: _jsxFileName$8,
      lineNumber: 14,
      columnNumber: 4
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
      onClick: btnHandler,
      children: "Start a new chat"
    }, void 0, false, {
      fileName: _jsxFileName$8,
      lineNumber: 15,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$8,
    lineNumber: 13,
    columnNumber: 3
  }, this);
}
var _jsxFileName$7 = "/Users/syedgalibahmed/Local Sites/video-chat-support/app/public/wp-content/plugins/wpwax-video-message/src/js/apps/chatbox/components/video/Index.jsx";
function Video() {
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    children: "Video"
  }, void 0, false, {
    fileName: _jsxFileName$7,
    lineNumber: 2,
    columnNumber: 9
  }, this);
}
var _jsxFileName$6 = "/Users/syedgalibahmed/Local Sites/video-chat-support/app/public/wp-content/plugins/wpwax-video-message/src/js/apps/chatbox/components/audio/Index.jsx";
function Audio() {
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    children: "Audio"
  }, void 0, false, {
    fileName: _jsxFileName$6,
    lineNumber: 2,
    columnNumber: 9
  }, this);
}
var _jsxFileName$5 = "/Users/syedgalibahmed/Local Sites/video-chat-support/app/public/wp-content/plugins/wpwax-video-message/src/js/apps/chatbox/components/text/Form.jsx";
function Form() {
  const dispatch = useDispatch();
  const textRef = react.exports.useRef();
  function submitHandler(e) {
    e.preventDefault();
    const text = textRef.current.value;
    const data = {
      type: "text",
      text
    };
    dispatch(chatBoxActions.setData(data));
    dispatch(chatBoxActions.chatScreen("contactForm"));
  }
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("form", {
    onSubmit: submitHandler,
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("textarea", {
      required: true,
      maxLength: "1000",
      row: "5",
      placeholder: "Type your text...",
      ref: textRef
    }, void 0, false, {
      fileName: _jsxFileName$5,
      lineNumber: 23,
      columnNumber: 4
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
      children: "Send"
    }, void 0, false, {
      fileName: _jsxFileName$5,
      lineNumber: 30,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$5,
    lineNumber: 22,
    columnNumber: 3
  }, this);
}
var _jsxFileName$4 = "/Users/syedgalibahmed/Local Sites/video-chat-support/app/public/wp-content/plugins/wpwax-video-message/src/js/apps/chatbox/components/text/Index.jsx";
function Text() {
  const chatStep = useSelector((state) => state.chatStep);
  let result = "";
  switch (chatStep) {
    case 1:
      result = /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Form, {}, void 0, false, {
        fileName: _jsxFileName$4,
        lineNumber: 11,
        columnNumber: 13
      }, this);
      break;
  }
  return result;
}
var _jsxFileName$3 = "/Users/syedgalibahmed/Local Sites/video-chat-support/app/public/wp-content/plugins/wpwax-video-message/src/js/apps/chatbox/components/screen-record/Index.jsx";
function ScreenRecord() {
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    children: "ScreenRecord"
  }, void 0, false, {
    fileName: _jsxFileName$3,
    lineNumber: 2,
    columnNumber: 9
  }, this);
}
var _jsxFileName$2 = "/Users/syedgalibahmed/Local Sites/video-chat-support/app/public/wp-content/plugins/wpwax-video-message/src/js/apps/chatbox/components/ChatScreen.jsx";
function ChatScreen() {
  const chatScreen = useSelector((state) => state.chatScreen);
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Container, {
    children: [chatScreen == "welcome" && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Welcome, {}, void 0, false, {
      fileName: _jsxFileName$2,
      lineNumber: 18,
      columnNumber: 32
    }, this), chatScreen == "video" && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Video, {}, void 0, false, {
      fileName: _jsxFileName$2,
      lineNumber: 19,
      columnNumber: 30
    }, this), chatScreen == "audio" && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Audio, {}, void 0, false, {
      fileName: _jsxFileName$2,
      lineNumber: 20,
      columnNumber: 30
    }, this), chatScreen == "text" && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Text, {}, void 0, false, {
      fileName: _jsxFileName$2,
      lineNumber: 21,
      columnNumber: 29
    }, this), chatScreen == "screenRecord" && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ScreenRecord, {}, void 0, false, {
      fileName: _jsxFileName$2,
      lineNumber: 22,
      columnNumber: 37
    }, this), chatScreen == "contactForm" && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ContactForm, {}, void 0, false, {
      fileName: _jsxFileName$2,
      lineNumber: 24,
      columnNumber: 36
    }, this), chatScreen == "sending" && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Sending, {}, void 0, false, {
      fileName: _jsxFileName$2,
      lineNumber: 25,
      columnNumber: 32
    }, this), chatScreen == "success" && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Success, {}, void 0, false, {
      fileName: _jsxFileName$2,
      lineNumber: 26,
      columnNumber: 32
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$2,
    lineNumber: 17,
    columnNumber: 3
  }, this);
}
var _jsxFileName$1 = "/Users/syedgalibahmed/Local Sites/video-chat-support/app/public/wp-content/plugins/wpwax-video-message/src/js/apps/chatbox/App.jsx";
function App() {
  const displayChatScreen = useSelector((state) => state.displayChatScreen);
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Avatar, {}, void 0, false, {
      fileName: _jsxFileName$1,
      lineNumber: 11,
      columnNumber: 4
    }, this), displayChatScreen && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ChatScreen, {}, void 0, false, {
      fileName: _jsxFileName$1,
      lineNumber: 12,
      columnNumber: 26
    }, this)]
  }, void 0, true);
}
var _jsxFileName = "/Users/syedgalibahmed/Local Sites/video-chat-support/app/public/wp-content/plugins/wpwax-video-message/src/js/apps/chatbox/index.jsx";
document.addEventListener("DOMContentLoaded", function() {
  const container2 = document.getElementById("wpwax-vm-chatbox");
  if (!container2) {
    return;
  }
  const root = createRoot(container2);
  root.render(/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Provider, {
    store,
    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(App, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }, this));
});
//# sourceMappingURL=public.js.map

// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({13:[function(require,module,exports) {
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (t) {
  function a(a) {
    for (var e, r, o = a[0], c = a[1], l = a[2], d = 0, p = []; d < o.length; d++) {
      r = o[d], n[r] && p.push(n[r][0]), n[r] = 0;
    }for (e in c) {
      Object.prototype.hasOwnProperty.call(c, e) && (t[e] = c[e]);
    }u && u(a);while (p.length) {
      p.shift()();
    }return i.push.apply(i, l || []), s();
  }function s() {
    for (var t, a = 0; a < i.length; a++) {
      for (var s = i[a], e = !0, o = 1; o < s.length; o++) {
        var c = s[o];0 !== n[c] && (e = !1);
      }e && (i.splice(a--, 1), t = r(r.s = s[0]));
    }return t;
  }var e = {},
      n = { app: 0 },
      i = [];function r(a) {
    if (e[a]) return e[a].exports;var s = e[a] = { i: a, l: !1, exports: {} };return t[a].call(s.exports, s, s.exports, r), s.l = !0, s.exports;
  }r.m = t, r.c = e, r.d = function (t, a, s) {
    r.o(t, a) || Object.defineProperty(t, a, { enumerable: !0, get: s });
  }, r.r = function (t) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
  }, r.t = function (t, a) {
    if (1 & a && (t = r(t)), 8 & a) return t;if (4 & a && "object" === (typeof t === "undefined" ? "undefined" : _typeof(t)) && t && t.__esModule) return t;var s = Object.create(null);if (r.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: t }), 2 & a && "string" != typeof t) for (var e in t) {
      r.d(s, e, function (a) {
        return t[a];
      }.bind(null, e));
    }return s;
  }, r.n = function (t) {
    var a = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };return r.d(a, "a", a), a;
  }, r.o = function (t, a) {
    return Object.prototype.hasOwnProperty.call(t, a);
  }, r.p = "/";var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
      c = o.push.bind(o);o.push = a, o = o.slice();for (var l = 0; l < o.length; l++) {
    a(o[l]);
  }var u = c;i.push([0, "chunk-vendors"]), s();
})({ 0: function _(t, a, s) {
    t.exports = s("cd49");
  }, "034f": function f(t, a, s) {
    "use strict";
    var e = s("64a9"),
        n = s.n(e);n.a;
  }, "550c": function c(t, a, s) {
    "use strict";
    var e = s("a128"),
        n = s.n(e);n.a;
  }, "64a9": function a9(t, a, s) {}, a128: function a128(t, a, s) {}, cccb: function cccb(t, a, s) {
    "use strict";
    var e = s("d563"),
        n = s.n(e);n.a;
  }, cd49: function cd49(t, a, s) {
    "use strict";
    s.r(a);s("cadf"), s("551c"), s("f751"), s("097d");var e,
        n,
        i = s("2b0e"),
        r = function r() {
      var t = this,
          a = t.$createElement,
          s = t._self._c || a;return s("div", { attrs: { id: "app" } }, [s("div", { staticClass: "container" }, [s("main", { staticClass: "main" }, [s("Poster")], 1), s("aside", [s("div", { attrs: { id: "nav" } }), s("List"), s("transition", { attrs: { name: "fade", mode: "out-in" } })], 1)])]);
    },
        o = [],
        c = function c() {
      var t = this,
          a = t.$createElement;t._self._c;return t._m(0);
    },
        l = [function () {
      var t = this,
          a = t.$createElement,
          s = t._self._c || a;return s("div", { staticClass: "home" }, [s("h1", [t._v("Лига треклокроссовых гонок")]), s("p", [t._v('\n    "Треклокросс серия" — это серия гонок на фиксах по бездорожью в 14 городах России.\n    Каждая гонка серии это самостоятельное локальное событие, на каждой гонке есть фикс-зачет, в котором первые десять человек, пересекшие финишную линию получают очки.\n    Количество очков зависит от того откуда участник и в каком городе проходит гонка, таблица очков доступна тут: https://goo.gl/GZid5R\n    Только фиксы, только брейклесс, шлем обязателен.\n  ')])]);
    }],
        u = { name: "Home", data: function data() {
        return {};
      } },
        d = u,
        p = (s("cccb"), s("2877")),
        f = Object(p["a"])(d, c, l, !1, null, null, null),
        v = f.exports,
        m = function m() {
      var t = this,
          a = t.$createElement;t._self._c;return t._m(0);
    },
        h = [function () {
      var t = this,
          a = t.$createElement,
          s = t._self._c || a;return s("div", { staticClass: "main-container" }, [s("div", { staticClass: "main-header" }, [s("img", { staticClass: "main-header-image", attrs: { src: "https://tracklocross.ru/img/title.svg", alt: "Треклокросс серия 2019" } })]), s("div", { staticClass: "main-lead" }, [s("div", { staticClass: "main-citylist-right" }, [s("ul", [s("li", { staticStyle: { "text-decoration": "line-through" } }, [s("span", { staticClass: "bold" }, [t._v("27.04 ")]), t._v("Москва\n        ")]), s("li", [s("span", { staticClass: "bold" }, [t._v("11.05 ")]), t._v("Краснодар\n        ")]), s("li", [s("span", { staticClass: "bold" }, [t._v("25.05 ")]), t._v("Челябинск\n        ")]), s("li", [s("span", { staticClass: "bold" }, [t._v("08.06 ")]), t._v("Обнинск\n        ")]), s("li", [s("span", { staticClass: "bold" }, [t._v("22.06 ")]), t._v("Тула\n        ")]), s("li", [s("span", { staticClass: "bold" }, [t._v("29.06 ")]), t._v("Новосибирск\n        ")]), s("li", [s("span", { staticClass: "bold" }, [t._v("06.07 ")]), t._v("Мытищи\n        ")]), s("li", [s("span", { staticClass: "bold" }, [t._v("06.07 ")]), t._v("Пермь\n        ")])])]), s("div", { staticClass: "main-citylist-left" }, [s("ul", [s("li", [s("span", { staticClass: "bold" }, [t._v("20.07 ")]), t._v("Санкт-Петербург\n        ")]), s("li", [s("span", { staticClass: "bold" }, [t._v("27.07 ")]), t._v("Екатеринбург\n        ")]), s("li", [s("span", { staticClass: "bold" }, [t._v("03.08 ")]), t._v("Тюмень\n        ")]), s("li", [s("span", { staticClass: "bold" }, [t._v("17.08 ")]), t._v("Омск\n        ")]), s("li", [s("span", { staticClass: "bold" }, [t._v("31.08 ")]), t._v("Казань\n        ")]), s("li", [s("span", { staticClass: "bold" }, [t._v("07.09 ")]), t._v("Симферополь\n        ")]), s("li", [s("span", { staticClass: "bold" }, [t._v("14.09 ")]), t._v("Москва\n        ")])])])]), s("div", { staticClass: "main-footer" }, [s("div", { staticClass: "main-footer-social" }, [s("div", { staticClass: "icon-container" }, [s("a", { attrs: { href: "https://vk.com/trc19" } }, [s("img", { staticClass: "social-icon", attrs: { src: "https://tracklocross.ru/img/logo_vk.svg", alt: "", width: "20", height: "20", fill: "white" } })])]), s("div", { staticClass: "icon-container" }, [s("a", { attrs: { href: "https://www.instagram.com/tracklocross_rf" } }, [s("img", { staticClass: "social-icon", attrs: { src: "https://tracklocross.ru/img/logo_i.svg", alt: "", width: "20", height: "20" } })])])])])]);
    }],
        _ = i["a"].extend({ name: "Poster", data: function data() {
        return { count: 0 };
      } }),
        b = _,
        C = (s("550c"), Object(p["a"])(b, m, h, !1, null, "1ac8edf4", null)),
        g = C.exports,
        y = function y() {
      var t = this,
          a = t.$createElement,
          s = t._self._c || a;return s("div", { staticClass: "list-container" }, [s("div", { staticClass: "search-wrapper" }, [s("h1", [t._v("Список участников")]), s("input", { directives: [{ name: "model", rawName: "v-model", value: t.search, expression: "search" }], attrs: { type: "text", placeholder: "поиск по имени" }, domProps: { value: t.search }, on: { input: function input(a) {
            a.target.composing || (t.search = a.target.value);
          } } })]), s("div", { staticClass: "wrapper" }, [s("transition-group", { attrs: { name: "fade", mode: "in-out" } }, t._l(t.filteredList, function (a) {
        return s("div", { key: a.timestamp, staticClass: "card", on: { click: function click(s) {
              return t.showMore(a, t.filteredList);
            } } }, [s("div", { staticClass: "card-item" }, [s("div", { staticClass: "card-item-left card-info" }, [s("p", [s("small", [t._v(t._s(a.city))]), s("br"), t._v("\n              " + t._s(a.num) + " | " + t._s(a.name) + "\n            ")])]), s("div", { staticClass: "card-item-right card-score" }, [s("p", [t._v(t._s(a.score))])])]), a.showMore ? s("div", { staticClass: "card-expand" }, t._l(a.Races, function (a) {
          return s("ul", { key: a.City }, [s("li", [t._v(t._s(a.City) + " | " + t._s(a.Place) + " место | +" + t._s(a.Score))])]);
        }), 0) : t._e()]);
      }), 0)], 1)]);
    },
        w = [],
        x = (s("386d"), s("7f7f"), s("6762"), s("2fdb"), s("55dd"), s("ac6a"), s("75fc")),
        j = s("8aa5"),
        L = s.n(j),
        O = (s("e71f"), i["a"].extend({ name: "list", data: function data() {
        return { search: "", postList: [] };
      }, mounted: function mounted() {
        var t = this;L.a.database().ref("users/").once("value").then(function (a) {
          var s;return (s = t.postList).push.apply(s, Object(x["a"])(a.val()));
        });
      }, methods: { showMore: function showMore(t, a) {
          a.forEach(function (t) {
            t.showMore = !1;
          }), t.showMore = !t.showMore;
        } }, computed: { filteredList: function filteredList() {
          var t = this;function a(t, a) {
            return t.score < a.score ? 1 : t.score > a.score ? -1 : 0;
          }this.postList.sort(a);return this.postList.filter(function (a) {
            return a.name.toLowerCase().includes(t.search.toLowerCase());
          });
        } } })),
        k = O,
        P = (s("f36c"), Object(p["a"])(k, y, w, !1, null, "9c330560", null)),
        M = P.exports,
        S = { data: function data() {
        return { count: 0 };
      }, components: { Home: v, Poster: g, List: M } },
        R = S,
        E = (s("034f"), Object(p["a"])(R, r, o, !1, null, null, null)),
        $ = E.exports,
        I = s("8c4f"),
        z = {},
        D = Object(p["a"])(z, e, n, !1, null, null, null),
        T = D.exports;i["a"].use(I["a"]);var q = new I["a"]({ mode: "history", base: "/", routes: [{ path: "/", name: "home", component: v }, { path: "/Registration", name: "Registration", component: T }, { path: "/List", name: "List", component: M }] });i["a"].config.productionTip = !1, new i["a"]({ router: q, created: function created() {
        var t = { apiKey: "AIzaSyChZD34h4R1yrpDLGjof2RnRLySUWzqqFg", authDomain: "trc19-a7d22.firebaseapp.com", databaseURL: "https://trc19-a7d22.firebaseio.com", projectId: "trc19-a7d22", storageBucket: "trc19-a7d22.appspot.com", messagingSenderId: "706630593121", appId: "1:706630593121:web:f1b41306036a8761" };L.a.initializeApp(t);
      }, render: function render(t) {
        return t($);
      } }).$mount("#app");
  }, d563: function d563(t, a, s) {}, f36c: function f36c(t, a, s) {
    "use strict";
    var e = s("fd83"),
        n = s.n(e);n.a;
  }, fd83: function fd83(t, a, s) {} });
//# sourceMappingURL=app.dbaed912.js.map
},{}],21:[function(require,module,exports) {

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '65021' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}]},{},[21,13])
//# sourceMappingURL=/dist/58a071cc588dc97af6a11e7dd582f699.map
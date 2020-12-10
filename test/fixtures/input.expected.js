var _globalThis = function (Object) {
  function get() {
    var _global = this || self;

    delete Object.prototype.__magic__;
    return _global;
  }

  if (typeof globalThis === "object") {
    return globalThis;
  }

  if (this) {
    return get();
  } else {
    Object.defineProperty(Object.prototype, "__magic__", {
      configurable: true,
      get: get
    });
    var _global = __magic__;
    return _global;
  }
}(Object);

_globalThis;
_globalThis;
_globalThis;
_globalThis;
_globalThis;
_globalThis;
_globalThis;
_globalThis;
_globalThis;
_globalThis.a.b.c;
_globalThis.a.b.c;
_globalThis.a.b.c;
_globalThis.a.b.c;
_globalThis.a.b.c;
_globalThis.a.b.c;
_globalThis.a.b.c;
_globalThis.a.b.c;
_globalThis.a.b.c;
_globalThis.window.a.b.c;
_globalThis.window.a.b.c;
_globalThis.window.a.b.c;
_globalThis.window.a.b.c;
_globalThis.window.a.b.c;
_globalThis.window.a.b.c;
_globalThis.window.a.b.c;
_globalThis.window.a.b.c;
_globalThis.window.a.b.c;
_globalThis.window.a.b.c;
_globalThis.window.globalThis.a.b.c;
_globalThis.window.globalThis.a.b.c;
_globalThis.window.globalThis.a.b.c;
_globalThis.window.globalThis.a.b.c;
_globalThis.window.globalThis.a.b.c;
_globalThis.window.globalThis.a.b.c;
_globalThis.window.globalThis.a.b.c;
_globalThis.window.globalThis.a.b.c;
_globalThis.window.globalThis.a.b.c;
_globalThis.window.globalThis.a;
_globalThis.window['globalThis'].a.b.c;
_globalThis.window['globalThis'].a.b.c;
_globalThis.window['globalThis'].a.b.c;
_globalThis.window['globalThis'].a.b.c;
_globalThis.window['globalThis'].a.b.c;

if (_globalThis.a.b.c) {}

if (_globalThis.a.b.c) {}

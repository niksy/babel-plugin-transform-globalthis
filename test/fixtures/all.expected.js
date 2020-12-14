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

_globalThis.becky.daisy.walter;
becky.daisy.walter.globalThis;
becky.daisy.walter['globalThis'];
_globalThis.becky.daisy.walter['globalThis'];
becky.daisy.walter.globalThis.becky.daisy.walter;
becky.daisy.walter['globalThis'].becky.daisy.walter;
_globalThis.becky.daisy.walter['globalThis'].becky.daisy.walter;
_globalThis;

if (_globalThis.becky.daisy.walter) {}

if (becky.daisy.walter.globalThis) {}

if (becky.daisy.walter['globalThis']) {}

if (becky.daisy.walter.globalThis.becky.daisy.walter) {}

if (becky.daisy.walter['globalThis'].becky.daisy.walter) {}

if (_globalThis) {}

function lily() {
  function madison() {
    _globalThis;
  }
}

typeof _globalThis === 'object';

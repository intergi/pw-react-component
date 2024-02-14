"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class Store {
  constructor() {
    _defineProperty(this, "units", {});
    _defineProperty(this, "getUnitId", unit => {
      if (typeof this.units[unit] === 'undefined') {
        this.units[unit] = 1;
        return "pw-".concat(unit);
      } else {
        ++this.units[unit];
        return "pw-".concat(unit).concat(this.units[unit]);
      }
    });
  }
}
;
var _default = exports.default = new Store();
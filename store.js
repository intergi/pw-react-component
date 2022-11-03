"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Store {
  constructor() {
    _defineProperty(this, "units", {});

    _defineProperty(this, "getUnitId", unit => {
      if (typeof this.units[unit] === 'undefined') {
        this.units[unit] = 2;
        return unit;
      } else {
        ++this.units[unit];
        return "".concat(unit).concat(this.units[unit]);
      }
    });
  }

}

;

var _default = new Store();

exports.default = _default;
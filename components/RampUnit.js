"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.promise.finally.js");
var _react = _interopRequireWildcard(require("react"));
var _store = _interopRequireDefault(require("./../store"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
window.ramp = window.ramp || {};
window.ramp.que = window.ramp.que || [];
const inPageUnits = ['leaderboard_atf', 'leaderboard_btf', 'med_rect_atf', 'med_rect_btf', 'sky_atf', 'sky_btf'];

// find a new unique element ID to place this ad
const getUniqueId = type => {
  return _store.default.getUnitId(type);
};

// sets up the object and adds a selectorId if necessary
const getInitialUnit = props => {
  const unit = {
    type: props.type
  };
  if (inPageUnits.includes(props.type)) {
    unit.selectorId = getUniqueId(props.type);
  }
  return unit;
};

// destroy the unit when componenent unmounts
const cleanUp = parentId => {
  // possible that component was removed before first ad was created
  if (!window.ramp.settings || !window.ramp.settings.slots) return;
  let slotToRemove = null;
  Object.entries(window.ramp.settings.slots).forEach(_ref => {
    let [slotName, slot] = _ref;
    if (slot.element && slot.element.parentElement && slot.element.parentElement.id === parentId) {
      slotToRemove = slotName;
    }
  });
  if (slotToRemove) {
    window.ramp.destroyUnits(slotToRemove);
  }
};
class RampUnit extends _react.default.Component {
  constructor(props) {
    super(props);
    this.rendered = false;
    this.unitToAdd = getInitialUnit(props);
  }
  componentDidMount() {
    if (this.rendered) return;
    this.rendered = true;
    window.ramp.que.push(() => {
      window.ramp.addUnits([this.unitToAdd]).catch(e => {
        console.warn(e);
      }).finally(() => {
        window.ramp.displayUnits();
      });
    });
  }
  componentWillUnmount() {
    window.ramp.que.push(() => {
      cleanUp(this.unitToAdd.selectorId);
    });
  }
  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      id: this.unitToAdd.selectorId,
      className: this.props.cssClass
    });
  }
}
exports.default = RampUnit;
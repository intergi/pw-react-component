"use strict";

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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

window.ramp = window.ramp || {};
window.ramp.que = window.ramp.que || [];
const inPageUnits = ['leaderboard_atf', 'leaderboard_btf', 'med_rect_atf', 'med_rect_btf', 'sky_atf', 'sky_btf']; // find a new unique element ID to place this ad

const getUniqueId = type => {
  return _store.default.getUnitId(type);
}; // sets up the object and adds a selectorId if necessary


const getInitialUnit = props => {
  const unit = {
    type: props.type
  };

  if (inPageUnits.includes(props.type)) {
    unit.selectorId = getUniqueId(props.type);
  }

  return unit;
}; // destroy the unit when componenent unmounts


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
      if (this.unitToAdd && this.unitToAdd.selectorId) {
        cleanUp(this.unitToAdd.selectorId);
      }
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

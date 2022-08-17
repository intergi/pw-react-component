"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Ramp extends _react.default.Component {
  render() {
    const props = this.props;
    window.ramp = window.ramp || {};
    window.ramp.que = window.ramp.que || [];
    window.ramp.que.push(() => {
      window.ramp.addUnits([{
        selectorId: props.selectorId,
        type: props.type
      }]).then(() => {
        window.ramp.displayUnits();
      }).catch(e => {
        console.log(e);
      });
    });
    return /*#__PURE__*/_react.default.createElement("div", {
      "data-pw-desk": props.type,
      id: props.selectorId,
      className: props.cssClass
    });
  }

}

exports.default = Ramp;
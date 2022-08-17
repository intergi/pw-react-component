"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Ramp extends _react.default.Component {
  constructor(props) {
    super(props);
    window.ramp = {
      mode: "ramp",
      passiveMode: true
    };
    const configScript = document.createElement("script");
    configScript.src = "//cdn.intergient.com/".concat(props.publisherId, "/").concat(props.id, "/ramp.js");
    document.head.appendChild(configScript);

    configScript.onload = () => {};
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", null) //   <div className="ramp" style={{display: "flex"}}>
    //       <span>Powered by</span>
    //       <img src={pwLogo} alt="playwire-logo" style={{marginLeft: "10px"}}></img>
    //   </div>
    ;
  }

}

exports.default = Ramp;
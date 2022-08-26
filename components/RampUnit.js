"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Ramp;

require("core-js/modules/es.array.includes.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

window.ramp = window.ramp || {};
window.ramp.que = window.ramp.que || [];
const inPageUnits = ['leaderboard_atf', 'leaderboard_btf', 'med_rect_atf', 'med_rect_btf', 'sky_atf', 'sky_btf']; // find a new unique element ID to place this ad

const getUniqueId = type => {
  let base = "pw-".concat(type);
  let idx = 1;

  while (document.getElementById("".concat(base).concat(idx))) {
    idx++;
  }

  return "".concat(base).concat(idx);
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
  if (!window.ramp.setttings || !window.ramp.settings.slots) return;
  let slotToRemove = null;
  Object.entries(window.ramp.settings.slots).forEach(_ref => {
    let [slotName, slot] = _ref;

    if (slot.element && slot.element.parentElement && slot.element.parentElement.id === parentId) {
      slotToRemove = slotName;
    }
  });

  if (slotToRemove) {
    window.ramp.que.push(() => {
      window.ramp.destroyUnits(slotToRemove);
    });
  }
};

function Ramp(props) {
  const [rendered, setRendered] = (0, _react.useState)(false);
  const [unitToAdd] = (0, _react.useState)(getInitialUnit(props));
  const elementRef = (0, _react.useRef)(null);

  const renderAd = () => {
    if (rendered) {
      return;
    }

    setRendered(true);
    window.ramp.que.push(() => {
      window.ramp.addUnits([unitToAdd]).then(() => {
        window.ramp.displayUnits();
      }).catch(e => {
        console.log(e);
      });
    });
  };

  (0, _react.useEffect)(() => {
    renderAd();
    return () => {
      cleanUp(unitToAdd.selectorId);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: elementRef,
    id: unitToAdd.selectorId,
    className: props.cssClass
  });
}

; // class Ramp extends React.Component {
//     constructor (props) {
//         super (props);
//     }
//     shouldComponentUpdate (nextProps) {
//         return nextProps.selectorId !== this.props.selectorId;
//     }
//     render() {
//
//         const props = this.props;
//
//         if (document.getElementById(props.selectorId))
//             return null;
//         window.ramp = window.ramp || {};
//         window.ramp.que = window.ramp.que || [];
//
//         window.ramp.que.push(() => {
//             window.ramp.addUnits([
//                 {
//                     selectorId: props.selectorId,
//                     type: props.type
//                 }
//                 ]).then( () => {
//                     window.ramp.displayUnits();
//                 }).catch( (e) =>{
//                     console.log(e);
//                 });
//         });
//
//         return (
//             <div data-pw-desk={props.type} id={props.selectorId} className={props.cssClass}></div>
//         );
//     }
// }
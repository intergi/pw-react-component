"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.promise.finally.js");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.ramp = window.ramp || {};
window.ramp.que = window.ramp.que || [];
window.ramp.passiveMode = true;
window._pwRampComponentLoaded = window._pwRampComponentLoaded || false;
const oopUnits = ['trendi_slideshow', 'trendi_video', 'site_skin', 'flex_leaderboard', 'top_rail', 'right_rail', 'bottom_rail', 'left_rail']; // destroy the units when componenent unmounts

const cleanUp = parentId => new Promise((resolve, reject) => {
  // possible that component was removed before first ad was created
  if (!window.ramp.settings || !window.ramp.settings.slots) return;
  delete window.ramp.forcePath;
  let slotsToRemove = [];
  Object.entries(window.ramp.settings.slots).forEach(_ref => {
    let [slotName, slot] = _ref;

    if (oopUnits.includes(slot.type) || slot.videoType === 'Bolt Player') {
      slotsToRemove.push(slotName);
    }
  });

  if (slotsToRemove.length > 0) {
    window.ramp.destroyUnits(slotsToRemove).finally(() => resolve());
  }
});

class Ramp extends _react.default.Component {
  constructor(props) {
    super(props);

    if (!props || !props.publisherId || !props.id) {
      console.error('publisherId and id are required props.');
      return;
    }

    this.init(props);
  }

  init(_ref2) {
    let {
      publisherId,
      id,
      forcePath
    } = _ref2;
    if (forcePath) window.ramp.forcePath = forcePath; // make sure we only do this once per "app" load

    if (!window._pwRampComponentLoaded) {
      window._pwRampComponentLoaded = true;
      window.ramp.config = "https://config.playwire.com/".concat(publisherId, "/v2/websites/").concat(id, "/banner.json");
      const configScript = document.createElement("script"); // configScript.src = `https://cdn.intergient.com/${publisherId}/${id}/ramp.js`;

      configScript.src = 'https://cdn.intergient.com/ramp_core.js';
      document.head.appendChild(configScript);
    }

    this.displayTaglessUnits();
  }

  displayTaglessUnits() {
    window.ramp.que.push(() => {
      window.ramp.addUnits([{
        type: 'trendi_slideshow'
      }, {
        type: 'trendi_video'
      }, {
        type: 'site_skin'
      }, {
        type: 'flex_leaderboard'
      }, {
        type: 'top_rail'
      }, {
        type: 'right_rail'
      }, {
        type: 'bottom_rail'
      }, {
        type: 'left_rail'
      } // {type: 'behind_page'},
      // {type: 'in_image'},
      // {type: 'above_page'},
      // {type: 'in_content'},
      // {type: 'inimg'},
      // {type: 'skin'}
      ]).finally(() => {
        return window.ramp.displayUnits();
      }).finally(() => {
        console.log('done');
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.forcePath && prevProps.forcePath !== this.props.forcePath) {
      window.ramp.forcePath = this.props.forcePath;
      window.ramp.que.push(() => {
        window.ramp.setPath(this.props.forcePath).then(() => {
          return cleanUp();
        }).then(() => {
          this.displayTaglessUnits();
        });
      });
    }
  }

  componentWillUnmount() {
    window.ramp.que.push(() => {
      cleanUp(this.unitToAdd.selectorId);
    });
  }

  render() {
    return null;
  }

}

exports.default = Ramp;
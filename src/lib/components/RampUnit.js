import React from "react";
import PropTypes from "prop-types";

import "./Ramp.css";

export default class Ramp extends React.Component {

  render() {

    const props = this.props;
    window.ramp = window.ramp || {};
    window.ramp.que = window.ramp.que || [];

    window.ramp.que.push(() => {
        window.ramp.addUnits([
          {   
              selectorId: props.selectorId, 
              type: props.type
          }
          ]).then( () => {
              window.ramp.displayUnits();
          }).catch( (e) =>{
              console.log(e);
          })
        }
    )

    return (
        <div data-pw-desk={props.type} id={props.selectorId} className={props.cssClass}></div>
    );
  }
}

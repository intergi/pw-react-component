import React from "react";

export default class Ramp extends React.Component {


    constructor(props) {

        super(props);

        window.ramp = {
            mode: "ramp",
            passiveMode: true
        };

        const configScript = document.createElement("script");
        configScript.src = `//cdn.intergient.com/${props.publisherId}/${props.id}/ramp.js`;
        document.head.appendChild(configScript);
        configScript.onload = () => {}

    }

    render() {
      return (
        <div></div>
        //   <div className="ramp" style={{display: "flex"}}>
        //       <span>Powered by</span>
        //       <img src={pwLogo} alt="playwire-logo" style={{marginLeft: "10px"}}></img>
        //   </div>
      );
    }
}

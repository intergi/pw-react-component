import React from "react";
import { Ramp, RampUnit }  from "@playwire/pw-react-component";

export default class App extends React.Component {
  state = {
  };

  render() {
    return (
      <div>

        {/* Ramp.js Component */}
        {/* <Ramp
          publisherId="1016948"
          id="63673"
        /> */}

        <Ramp
          publisherId="343"
          id="926"
        />

        <RampUnit
            selectorId="pwLeaderboardAtf"
            type="leaderboard_atf"
            cssClass="leaderboard"
        />

        <div>

          <RampUnit
            selectorId="pwMedRectAtf"
            type="med_rect_atf"
            cssClass="med_rect"
          />

        </div>

      </div>
    );
  }
}

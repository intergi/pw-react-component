import React from "react";
import Ramp from "./Ramp/Ramp";
import RampUnit from "./Ramp/RampUnit";

export default class App extends React.Component {
  state = {
  };

  render() {
    return (
      <div>

        {/* Ramp.js Component */}
        <Ramp
          publisherId="1016948"
          id="63673"
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
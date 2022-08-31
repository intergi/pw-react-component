# pw-react-component
Playwire's react component library


### Install it as a npm dependency
```npm i --save @playwire/pw-react-component```


### How to use it
```import { Ramp }  from "@playwire/pw-react-component";```

```import { RampUnit }  from "@playwire/pw-react-component";```

```
{/* Only load this component once, at the top most level of your app */}
<Ramp
  publisherId="1016948"
  id="63673"
/>

{/* Place this component as needed for all in-page units */}
<RampUnit
  type="leaderboard_atf"
  cssClass="leaderboard"
/>
```

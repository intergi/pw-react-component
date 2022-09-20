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

- publisherId [required] -The publisher’s unique identifier.

- id [required] - The website’s unique identifier.

- forcePath [optional] - Override the URL path. When this prop changes, it will reload OOP/tagless units based on the config rules for the new path.

- type [required] - The tagged ad units that the AM sets up. These units require a placeholder, for example, leaderboard, medium rectangle, and skyscraper.

- cssClass [optional] - Places css class on div element. Won’t load any styles.
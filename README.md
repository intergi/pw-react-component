# Playwire React Ramp Component

Playwire's React Component


### React Ramp Component NPM package

https://www.npmjs.com/package/@playwire/pw-react-component


### Install the component in a React App

`npm i --save @playwire/pw-react-component`


### Use the component in a React App

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

### Playwire Demo App

In the terminal `cd demos/pw-react-app/`

Run `npm run start` for a dev server. Navigate to `https://localhost:3000/`. You will see the app running.


### Build the component

Run `npm run build` to build the project. The build artifacts will be stored in the `src/lib` directory.


### Publish the component to NPM registry

In the root folder run `npm login` then `npm publish`.
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
<Ramp
  publisherId="1016948"
  id="63673"
/>

<RampUnit
  type="leaderboard_atf"
  cssClass="leaderboard"
/>
```


### Playwire Demo App

In the terminal `cd demos/pw-react-app/`

Run `npm run start` for a dev server. Navigate to `https://localhost:3000/`. You will see the app running.


### Build the component

Run `npm run build` to build the project. The build artifacts will be stored in the `src/lib` directory.


### Publish the component to NPM registry

In the root folder run `npm login` then `npm publish`.
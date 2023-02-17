## yoembed-sample-react-app

#### This is a sample application which simulates an embeddable CSV import button.
#### A SaaS application has to do the following things to embedd a CSV button in their application.

* Import yoembed NPM package.`npm i yoembed`
* Update the `importerId` created through YoBulk backend application,Running in a separate port.
* Update the `yoHostUrl` with the endpoint url where the YoBulk backend application is running.

Example in App.js

````bash
import { YoButton } from "yoembed";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>This is my SAAS</h2>
      <hr />
      <br />
      <YoButton
        btnText="My upload"
        
        importerId={"63d1eecfb9086d1c4170a1d8"}
        yoHostUrl={"http://localhost:3000"}
      />
    </div>
  );
}

export default App;
````
## Building and Running Sample CSV button App
````bash
git clone git@github.com:yobulkdev/yoembed-sample-react-app.git
cd yoembed-sample-react-app
yarn install
yarn start
````

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
        templateId={"638b13b2bc7dc31149b40b3b"}
        yoHostUrl={"http://localhost:3006"}
      />
    </div>
  );
}

export default App;

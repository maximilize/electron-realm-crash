import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <h2>
        Test app to demonstrate the Electron + Realm crash on macOS.
      </h2>
      After quitting the app, there should appear an exception within 1 to 10 seconds.
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

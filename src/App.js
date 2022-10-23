import React from "react";

import "./App.css";
import "./main.css";
import Listing from "./components/Listing";
import data from "./db/data.json";

function App() {
  return (
    <>
      <div className="App">
        <Listing items={data} />
      </div>
    </>
  );
}

export default App;

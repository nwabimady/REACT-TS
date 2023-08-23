import React from "react";
import "./App.css";
import { HelloTs } from "./components/hello-ts";

function App() {
  return (
    <HelloTs checked={true} value={"Nwabisa"}>
      <h1>Hello world!</h1>
    </HelloTs>
  );
}

export default App;

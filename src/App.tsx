import React from "react";
import "./App.css";
import { colors } from "./constants/colors";
import CardBackground from "./components/CardBackground";
import Card from "./components/Card";

function App() {
  return (
    <div className="App flex flex-col justify-center items-center h-screen">
      <div className="flex flex-row">
        <Card />
      </div>
    </div>
  );
}

export default App;

import { Button, TextField } from "@material-ui/core";
import React, { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import SpreadSheet from "./components/SpreadSheet";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { TopBar } from "./components/TopBarComponents/TopBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopBar />
        {Routes}
      </div>
    </BrowserRouter>
  );
}

export default App;

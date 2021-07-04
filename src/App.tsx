import { Button, TextField } from "@material-ui/core";
import React, { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import SpreadSheet from "./components/SpreadSheet";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">{Routes}</div>
    </BrowserRouter>
  );
}

export default App;

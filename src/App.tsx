import { Button, TextField } from "@material-ui/core";
import React, { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import SpreadSheet from "./components/SpreadSheet";

function App() {
  const [currentStockSymbol, setCurrentStockSymbol] = useState<string>("");
  const [symbol, setSymbol] = useState<string>("");

  const onChangeStockSymbol = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentStockSymbol((event.target as HTMLInputElement).value);
  };

  useEffect(() => {}, [symbol]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <TextField
          onChange={onChangeStockSymbol}
          style={{ margin: "5rem .5rem 5rem 5rem" }}
          label="Stock symbol"
          variant="outlined"
        />
        <Button
          style={{ height: "3.5rem", marginTop: "5rem" }}
          variant="contained"
          color="primary"
          onClick={() => setSymbol(currentStockSymbol)}
        >
          Search
        </Button>
        <button onClick={() => console.log(currentStockSymbol)}>
          log cur stock symbol
        </button>
        <button onClick={() => console.log(symbol)}>log symbol</button>
      </div>
      {symbol !== "" && <SpreadSheet symbol={symbol} />}
    </div>
  );
}

export default App;

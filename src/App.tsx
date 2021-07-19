import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./Context";

//Alphavantage
const request = require("request");

function App() {
  const [stock, setStock] = useState<string>("NHY.OL");
  const stockValue = useMemo(() => ({ stock, setStock }), [stock, setStock]);

  //Alphavantage
  // useEffect(() => {
  //   const url =
  //     "https://www.alphavantage.co/query?function=OVERVIEW&symbol=AAPL&apikey=Y7JQFCQD7BFLYY7M";
  //   request.get(
  //     {
  //       url: url,
  //       json: true,
  //       headers: { "User-Agent": "request" },
  //     },
  //     (err: Error, res: any, data: any) => {
  //       if (err) {
  //         console.log("Error:", err);
  //       } else if (res.statusCode !== 200) {
  //         console.log("Status:", res.statusCode);
  //       } else {
  //         // data is successfully parsed as a JSON object:
  //         console.log(data);
  //       }
  //     }
  //   );
  // }, []);

  // useEffect(() => {
  //   const getData = async () => {
  //     const request = await yahooFinance.quoteSummary("AAPL");
  //     return request;
  //   };
  //   getData();
  // }, []);

  return (
    <Context.StockContext.Provider value={stockValue}>
      <BrowserRouter>
        <div className="App">{Routes}</div>
      </BrowserRouter>
    </Context.StockContext.Provider>
  );
}

export default App;

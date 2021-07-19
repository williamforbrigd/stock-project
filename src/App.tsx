import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import protobuf from "protobufjs";
import yahooFinance from "yahoo-finance2";
import { Context } from "./Context";

//Alphavantage
const request = require("request");
const { Buffer } = require("buffer/");

function App() {
  const [stock, setStock] = useState<string>("");
  const stockValue = useMemo(() => ({ stock, setStock }), [stock, setStock]);

  useEffect(() => {
    /*
    const WebSocket = require("isomorphic-ws");
    const protobuf = require("protobufjs");

    const root = protobuf.loadSync("./YPricingData.proto");

    const Yaticker = root.lookupType("yaticker");
    */
    //https://github.com/khayuenkam/yahooliveticker/blob/master/index.js
    const ws = new WebSocket("wss://streamer.finance.yahoo.com");
    protobuf.load("./YPricingData.proto", (error, root) => {
      if (error) {
        return console.log(error);
      }
      if (root !== undefined) {
        const Yaticker = root.lookupType("yaticker");
        ws.onopen = function open() {
          console.log("connected");
          ws.send(
            JSON.stringify({
              subscribe: ["GME"],
            })
          );
        };

        ws.onclose = function close() {
          console.log("disconnected");
        };

        ws.onmessage = function incoming(message) {
          console.log("comming message");
          console.log(message);
          console.log(Yaticker.decode(new Buffer(message.data, "base64")));
        };
      }
    });
  }, []);

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

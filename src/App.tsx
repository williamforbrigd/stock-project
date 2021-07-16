import React, { useEffect } from "react";
import "./App.css";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import protobuf from "protobufjs";
const { Buffer } = require("buffer/");

function App() {
  useEffect(() => {
    /*
    const WebSocket = require("isomorphic-ws");
    const protobuf = require("protobufjs");

    const root = protobuf.loadSync("./YPricingData.proto");

    const Yaticker = root.lookupType("yaticker");
    */
    const ws = new WebSocket("wss://streamer.finance.yahoo.com");
    protobuf.load(
      "./YPricingData.proto",
      (error, root: protobuf.Root | undefined) => {
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

          ws.onmessage = function incoming(data: any) {
            console.log("comming message");
            console.log(data.data);
            //console.log(Yaticker.decode(new Buffer(data.data, "base64")));
          };
        }
      }
    );
  }, []);
  return (
    <BrowserRouter>
      <div className="App">{Routes}</div>
    </BrowserRouter>
  );
}

export default App;

import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "../axios";
import { BalanceSheetStatement } from "../components/BalanceSheetStatement";
import { TotalCash } from "../components/TotalCash";
import { CashFlowStatement } from "../components/CashFlowStatement";
import { Context } from "../Context";
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@material-ui/core";
import "./SpreadSheet.css";
import protobuf, { Message } from "protobufjs";
import yahooFinance from "yahoo-finance2";

import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const { Buffer } = require("buffer/");

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  root: {
    minWidth: 275,
    marginLeft: 50,
    marginBottom: 50,
    marginRight: 50,
    marginTop: 4,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
  buttons: {
    width: 500,
    backgroundColor: "white",
  },
});

export default function BasicTable() {
  const classes = useStyles();
  const { stock, setStock } = useContext(Context.StockContext);
  const [symbolString, setSymbolString] = useState<string>("");
  const [balanceSheetStatements, setBalanceSheetStatements] = useState<any[]>(
    []
  );
  const [cashFlowStatements, setCashFlowStatements] = useState<any[]>([]);

  const [longName, setLongName] = useState<string>("");
  const [stonk, setStonk] = useState<any>(null);

  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  const fetchData = async () => {
    const request = await axios.get("stock/v2/get-cash-flow", {
      params: {
        symbol: stock,
      },
      headers: {
        "x-rapidapi-key": "362a045420msh6a56907d12b3a99p189eccjsn301273e64d30",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      },
    });
    console.log(request.data);
    setBalanceSheetStatements(
      request.data.balanceSheetHistory.balanceSheetStatements
    );
    setCashFlowStatements(
      request.data.cashflowStatementHistory.cashflowStatements
    );
    setLongName(request.data.quoteType.longName);
    setSymbolString(request.data.symbol);
    return request;
  };
  useEffect(() => {
    // fetchData();
  }, [stock]);

  const renderCashFlowStatements = cashFlowStatements.map(
    (c: any, key: number) => {
      return (
        <CashFlowStatement
          key={key}
          cashFlowStatement={c}
          symbolString={symbolString}
        />
      );
    }
  );

  const renderBalanceSheetStatements = balanceSheetStatements.map(
    (b: any, key: number) => {
      return (
        <BalanceSheetStatement
          key={key}
          balanceSheetStatement={b}
          symbolString={symbolString}
        />
      );
    }
  );

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
              subscribe: [stock],
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
          const next = Yaticker.decode(new Buffer(message.data, "base64"));
          const x = JSON.parse(JSON.stringify(next));
          setStonk(x);
        };
      }
    });
  }, []);

  return (
    <div className="main">
      <Card className={classes.root} variant="outlined">
        <CardContent>
          {stonk && (
            <div>
              <Typography>{stonk.id}</Typography>
              <Typography>{stonk.price}</Typography>

              <Typography>Norsk Hydro</Typography>
              <Divider />
              <div className="info-container">
                <Typography>{stonk.price}</Typography>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.buttons}
      >
        <BottomNavigationAction
          label="Recents"
          value="recents"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="Folder"
          value="folder"
          icon={<FolderIcon />}
        />
      </BottomNavigation>
      <div className="spreadsheet-buttons">
        <Button>Cash</Button>
      </div>
      <TotalCash
        balanceSheetStatements={balanceSheetStatements}
        symbolString={symbolString}
      />
      {renderCashFlowStatements}
      {renderBalanceSheetStatements}
    </div>
  );
}

import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { TickerBox } from "./TickerBox";
import { Requests } from "../../interfaces/Requests";

export const TopBar: React.FC = () => {
  const [sp500, setSp500] = useState<string>("");
  const [sp500Current, setSp500Current] = useState<number>(0);
  const [sp500PrevClose, setSp500PrevClose] = useState<number>(0);
  const [sp500Percentage, setSp500Percentage] = useState<number>(0);

  const [osebx, setOsebx] = useState<string>("");
  const [osebxCurrent, setOsebxCurrent] = useState<number>(0);
  const [osebxPrevClose, setOsebxPrevClose] = useState<number>(0);
  const [osebxPercentage, setOsebxPercentage] = useState<number>(0);

  const calcPercentage = (tickerClose: number, tickerPrevClose: number) => {
    if (tickerClose !== 0 || tickerPrevClose !== 0) {
      return (tickerClose / tickerPrevClose - 1) * 100;
    } else return 0;
  };

  // const fetchDataSp500 = async () => {
  //   const request = await axios.get("market/v2/get-summary", {
  //     params: { region: "US" },
  //     headers: {
  //       "x-rapidapi-key": "362a045420msh6a56907d12b3a99p189eccjsn301273e64d30",
  //       "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
  //     },
  //   });
  //   console.log(request.data);
  //   setSp500(request.data.marketSummaryAndSparkResponse.result[0].shortName);
  //   setSp500Current(
  //     request.data.marketSummaryAndSparkResponse.result[0].spark.close[
  //       request.data.marketSummaryAndSparkResponse.result[0].spark.close
  //         .length - 1
  //     ]
  //   );
  //   setSp500PrevClose(
  //     request.data.marketSummaryAndSparkResponse.result[0].spark.previousClose
  //   );
  //   setSp500Percentage(calcPercentage(sp500Current, sp500PrevClose));
  //   return request;
  // };

  const fetchDataOsebx = async () => {
    const request = await axios.get("stock/v2/get-summary", {
      params: {
        symbol: "OSEBX.OL",
      },
      headers: {
        "x-rapidapi-key": "362a045420msh6a56907d12b3a99p189eccjsn301273e64d30",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      },
    });
    console.log(request.data);
    setOsebx(request.data.symbol);
    setOsebxCurrent(request.data.price.regularMarketPrice.raw);
    setOsebxPrevClose(request.data.summaryDetail.previousClose.raw);
    setOsebxPercentage(calcPercentage(osebxCurrent, osebxPrevClose));
    return request;
  };

  useEffect(() => {
    //fetchDataSp500();
    fetchDataOsebx();
    const req = Requests.fetchDataSp500();
    //console.log(req["[[PromiseResult]]"]);
    console.log(req);
    // setSp500(request.data.marketSummaryAndSparkResponse.result[0].shortName);
    // setSp500Current(
    //   request.data.marketSummaryAndSparkResponse.result[0].spark.close[
    //     request.data.marketSummaryAndSparkResponse.result[0].spark.close
    //       .length - 1
    //   ]
    // );
    // setSp500PrevClose(
    //   request.data.marketSummaryAndSparkResponse.result[0].spark.previousClose
    // );
    // setSp500Percentage(calcPercentage(sp500Current, sp500PrevClose));
  }, []);

  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        position: "fixed",
        width: "100%",
        top: "0",
      }}
    >
      {sp500 === "" || sp500Current === 0 ? (
        <div style={{ display: "flex" }}>
          <Typography>Fetching data...</Typography>
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          <TickerBox
            tickerName={sp500}
            tickerClose={sp500Current}
            tickerPrevClose={sp500PrevClose}
            tickerPercentage={sp500Percentage}
          />
          <TickerBox
            tickerName={osebx}
            tickerClose={osebxCurrent}
            tickerPrevClose={osebxPrevClose}
            tickerPercentage={osebxPercentage}
          />
        </div>
      )}
    </div>
  );
};

import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "../../axios";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import { TickerBox } from "./TickerBox";

// interface TopBarProps {}

export const TopBar: React.FC = () => {
  const [sp500, setSp500] = useState<string>("");
  const [sp500Close, setSp500Close] = useState<number>(0);
  const [sp500PrevClose, setSp500PrevClose] = useState<number>(0);
  const [sp500Percentage, setSp500Percentage] = useState<number>(0);

  const calcPercentage = () => {
    if (sp500Close !== 0 || sp500PrevClose !== 0) {
      setSp500Percentage(sp500Close / sp500PrevClose - 1);
    }
  };

  const fetchData = async () => {
    const request = await axios.get("market/v2/get-summary", {
      params: { region: "US" },
      headers: {
        "x-rapidapi-key": "362a045420msh6a56907d12b3a99p189eccjsn301273e64d30",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      },
    });
    console.log(request.data);
    setSp500(request.data.marketSummaryAndSparkResponse.result[0].shortName);
    setSp500Close(
      request.data.marketSummaryAndSparkResponse.result[0].spark.close[
        request.data.marketSummaryAndSparkResponse.result[0].spark.close
          .length - 1
      ]
    );
    setSp500PrevClose(
      request.data.marketSummaryAndSparkResponse.result[0].spark.previousClose
    );
    return request;
  };

  useEffect(() => {
    fetchData();
    calcPercentage();
  }, []);

  return (
    <div style={{ display: "flex", backgroundColor: "lightgrey" }}>
      {sp500 === "" || sp500Close === 0 ? (
        <div style={{ display: "flex", backgroundColor: "lightgrey" }}>
          <Typography>Fetching data...</Typography>
        </div>
      ) : (
        <TickerBox
          tickerName={sp500}
          tickerClose={sp500Close}
          tickerPrevClose={sp500PrevClose}
          tickerPercentage={sp500Percentage}
        />
        // <div style={{ display: "flex", backgroundColor: "lightgrey" }}>
        //   <Typography style={{ marginRight: "5px" }}>{sp500} </Typography>
        //   {sp500Percentage < 0 ? (
        //     <div style={{ display: "flex" }}>
        //       <TrendingDownIcon style={{ color: "red" }} />
        //       <Typography style={{ color: "red" }}>
        //         -{(sp500Percentage * 100).toFixed(2)}%
        //       </Typography>
        //     </div>
        //   ) : (
        //     <div style={{ display: "flex" }}>
        //       <TrendingUpIcon style={{ color: "green", marginRight: "5px" }} />
        //       <Typography style={{ color: "green" }}>
        //         +{(sp500Percentage * 100).toFixed(2)}%
        //       </Typography>
        //     </div>
        //   )}
        //   <Typography style={{ marginLeft: "5px" }}>{sp500Close}</Typography>
        // </div>
      )}
    </div>
  );
};

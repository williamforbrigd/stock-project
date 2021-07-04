import { Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";

interface TickerBoxProps {
  tickerName: string;
  tickerClose: number;
  tickerPrevClose: number;
  tickerPercentage: number;
}

export const TickerBox: React.FC<TickerBoxProps> = ({
  tickerName,
  tickerClose,
  tickerPrevClose,
  tickerPercentage,
}: TickerBoxProps) => {
  return (
    <div style={{ display: "flex", backgroundColor: "lightgrey" }}>
      <Typography style={{ marginRight: "5px" }}>{tickerName} </Typography>
      {tickerPercentage < 0 ? (
        <div style={{ display: "flex" }}>
          <TrendingDownIcon style={{ color: "red" }} />
          <Typography style={{ color: "red" }}>
            {(tickerPercentage * 100).toFixed(2)}%
          </Typography>
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          <TrendingUpIcon style={{ color: "green", marginRight: "5px" }} />
          <Typography style={{ color: "green" }}>
            +{(tickerPercentage * 100).toFixed(2)}%
          </Typography>
        </div>
      )}
      <Typography style={{ marginLeft: "5px" }}>{tickerClose}</Typography>
    </div>
  );
};

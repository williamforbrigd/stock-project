import { Typography, withStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";

const StyledTypography = withStyles({
  root: {
    marginRight: "5px",
  },
})(Typography);

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
    <div
      style={{
        display: "flex",
        backgroundColor: "lightgrey",
        marginRight: "10px",
      }}
    >
      <StyledTypography style={{ marginRight: "5px" }} variant="body2">
        {tickerName}{" "}
      </StyledTypography>
      {tickerPercentage < 0 ? (
        <div style={{ display: "flex" }}>
          <TrendingDownIcon style={{ color: "red", marginRight: "5px" }} />
          <StyledTypography style={{ color: "red" }} variant="body2">
            {(tickerPercentage * 100).toFixed(2)}%
          </StyledTypography>
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          <TrendingUpIcon style={{ color: "green", marginRight: "5px" }} />
          <StyledTypography style={{ color: "green" }} variant="body2">
            +{tickerPercentage.toFixed(2)}%
          </StyledTypography>
        </div>
      )}
      <StyledTypography style={{ marginLeft: "5px" }} variant="body2">
        {tickerClose}
      </StyledTypography>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "../axios";
import { BalanceSheetStatement } from "./BalanceSheetStatement";
import { TotalCash } from "./TotalCash";
import { CashFlowStatement } from "./CashFlowStatement";

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
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

interface SpreadSheetProps {
  symbol: string;
}

export default function BasicTable({ symbol }: SpreadSheetProps) {
  const classes = useStyles();
  const [symbolString, setSymbolString] = useState<string>("");
  const [balanceSheetStatements, setBalanceSheetStatements] = useState<any[]>(
    []
  );
  const [cashFlowStatements, setCashFlowStatements] = useState<any[]>([]);

  const fetchData = async () => {
    const request = await axios.get("stock/v2/get-cash-flow", {
      params: {
        symbol: symbol,
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
    setSymbolString(request.data.symbol);
    return request;
  };
  useEffect(() => {
    fetchData();
  }, [symbol]);

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

  return (
    <div>
      <TotalCash
        balanceSheetStatements={balanceSheetStatements}
        symbolString={symbolString}
      />
      {renderCashFlowStatements}
      {renderBalanceSheetStatements}
    </div>
  );
}

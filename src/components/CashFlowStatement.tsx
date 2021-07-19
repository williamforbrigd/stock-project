import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Typography } from "@material-ui/core";

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

interface CashFlowStatementProps {
  cashFlowStatement?: any;
  symbolString?: string;
}

export const CashFlowStatement: React.FC<CashFlowStatementProps> = ({
  cashFlowStatement,
  symbolString,
}: CashFlowStatementProps) => {
  const classes = useStyles();
  const [operating, setOperating] = useState<string>(
    cashFlowStatement.totalCashFromOperatingActivities.fmt
  );
  const [investing, setInvesting] = useState<string>(
    cashFlowStatement.totalCashflowsFromInvestingActivities.fmt
  );
  const [financing, setFinancing] = useState<string>(
    cashFlowStatement.totalCashFromFinancingActivities.fmt
  );

  const getTotalCashFlow = () => {
    const sub1 = operating.substring(0, operating.length - 1);
    const sub2 = investing.substring(0, investing.length - 1);
    const sub3 = financing.substring(0, financing.length - 1);
    const sum = +sub1 + +sub2 + +sub3;
    return sum.toFixed(2) + "B";
  };

  return (
    <div>
      <Typography style={{ marginLeft: "3rem", marginTop: "1rem" }}>
        Cash Flow Statement {cashFlowStatement.endDate.fmt}
      </Typography>
      <TableContainer className={classes.root} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Symbol</TableCell>
              <TableCell>Operating</TableCell>
              <TableCell>Investing</TableCell>
              <TableCell>Financing</TableCell>
              <TableCell>Total Cash Flow</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cashFlowStatement !== undefined && (
              <TableRow>
                <TableCell>{symbolString}</TableCell>
                <TableCell>{operating}</TableCell>
                <TableCell>{investing}</TableCell>
                <TableCell>{financing}</TableCell>
                <TableCell>{getTotalCashFlow()}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

import React from "react";
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

interface TotalCashProps {
  balanceSheetStatements: any[];
  symbolString: string;
}

export const TotalCash: React.FC<TotalCashProps> = ({
  balanceSheetStatements,
  symbolString,
}: TotalCashProps) => {
  const classes = useStyles();
  return (
    <div>
      <Typography style={{ marginLeft: "3rem", marginTop: "1rem" }}>
        Total Cash
      </Typography>
      <TableContainer className={classes.root} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Symbol</TableCell>
              {balanceSheetStatements !== undefined &&
                balanceSheetStatements.map((b: any, key: number) => (
                  <TableCell key={key}>
                    {b !== undefined && b.endDate.fmt}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{symbolString}</TableCell>
              {balanceSheetStatements !== undefined &&
                balanceSheetStatements.map((b: any, key: number) => (
                  <TableCell key={key}>
                    {b !== undefined && b.cash.fmt}
                  </TableCell>
                ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

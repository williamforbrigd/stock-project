import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginLeft: 50,
    marginBottom: 50,
    marginRight: 50,
    marginTop: 4,
  },
  table: {
    minWidth: 650,
  },
});

interface BalanceSheetStatementProps {
  balanceSheetStatement: any;
  symbolString: string;
}

export const BalanceSheetStatement: React.FC<BalanceSheetStatementProps> = ({
  balanceSheetStatement,
  symbolString,
}: BalanceSheetStatementProps) => {
  const classes = useStyles();
  return (
    <div>
      <Typography style={{ marginLeft: "3rem" }}>
        Balance Sheet{" "}
        {balanceSheetStatement !== undefined &&
          balanceSheetStatement.endDate.fmt}
      </Typography>
      <TableContainer className={classes.root} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Symbol</TableCell>
              <TableCell>Accounts payable</TableCell>
              <TableCell>Cash</TableCell>
              <TableCell>Total Assets</TableCell>
              <TableCell>Total Liabilities</TableCell>
              <TableCell>Retained Earnings</TableCell>
              <TableCell>Long Term Debt</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {balanceSheetStatement !== undefined && (
              <TableRow>
                <TableCell>{symbolString}</TableCell>
                <TableCell>
                  {balanceSheetStatement.accountsPayable.fmt}
                </TableCell>
                <TableCell>{balanceSheetStatement.cash.fmt}</TableCell>
                <TableCell>{balanceSheetStatement.totalAssets.fmt}</TableCell>
                <TableCell>{balanceSheetStatement.totalLiab.fmt}</TableCell>
                <TableCell>
                  {balanceSheetStatement.retainedEarnings.fmt}
                </TableCell>
                <TableCell>{balanceSheetStatement.longTermDebt.fmt}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

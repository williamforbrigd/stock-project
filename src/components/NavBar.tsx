import React, { ChangeEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {
  createStyles,
  //alpha,
  Theme,
  makeStyles,
} from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Button, TextField } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { DefinitionsAccordion } from "./DefinitionsAccordion";
import SpreadSheet from "./SpreadSheet";
import "./NavBar.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      position: "fixed",
      width: "100%",
      marginTop: "24px",
      top: "0",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      //backgroundColor: alpha(theme.palette.common.white, 0.15),
      //"&:hover": {
      //backgroundColor: alpha(theme.palette.common.white, 0.25),
      //},
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  })
);

// interface NavBarProps {}

export const NavBar: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const [currentStockSymbol, setCurrentStockSymbol] = useState<string>("");
  const [symbol, setSymbol] = useState<string>("");

  const onChangeStockSymbol = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentStockSymbol((event.target as HTMLInputElement).value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => history.push("/mainpage")}
          >
            <HomeIcon />
          </IconButton>
          <DefinitionsAccordion />
          {/* <Typography className={classes.title} variant="h6" noWrap>
            Halla
          </Typography> */}
          <Button
            style={{ color: "white" }}
            onClick={() => history.push("/definitions")}
          >
            Definisjoner
          </Button>
          <div className={classes.search}>
            <div className="navbar__search">
              {/* <TextField
                onChange={onChangeStockSymbol}
                //style={{ margin: "5rem .5rem 5rem 5rem" }}
                label="Stock symbol"
                variant="outlined"
                className="navbar__searchInput"
              /> */}
              <input
                type="text"
                className="navbar__searchInput"
                onChange={onChangeStockSymbol}
              />
              <Button
                //style={{ height: "3.5rem", marginTop: "5rem" }}
                variant="contained"
                color="primary"
                onClick={() => {
                  setSymbol(currentStockSymbol);
                }}
                className="navbar__searchButton"
              >
                Search
              </Button>
            </div>
            {symbol !== "" && <SpreadSheet symbol={symbol} />}
            {/* <div className={classes.searchIcon}>
              <SearchIcon />
            </div> */}
            {/* <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            /> */}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

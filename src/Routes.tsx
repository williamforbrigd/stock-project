import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "./containers/MainPage";

export default (
  <Switch>
    <Route path="/mainpage" component={MainPage} />
  </Switch>
);

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "./containers/MainPage";
import Definitions from "./containers/Definitions";
import { TopBar } from "./components/TopBarComponents/TopBar";
import { NavBar } from "./components/NavBar";

export default (
  <Switch>
    <div>
      <TopBar />
      <NavBar />
      <Route path="/mainpage" component={MainPage} />
      <Route path="/definitions" component={Definitions} />
    </div>
  </Switch>
);

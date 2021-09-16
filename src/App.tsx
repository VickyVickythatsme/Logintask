
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import Insturction from "./Pages/Instruction";
import User from "./Pages/User";
import MoreMenu from "./Pages/MoreMenu";
import Food from "./Pages/Food";
import Animals from "./Pages/Animals";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";


function App() {
  return (
    <div>
      <Sidebar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/instruction" component={Insturction} />
          <Route path="/signin" component={SignIn} />
          <Route path="/user" component={User} />
          <Route path="/moremenu" component={MoreMenu} />
          <Route path="/food" component={Food} />
          <Route path="/animals" component={Animals} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

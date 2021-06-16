
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './components/reset.css';
import './components/ui.css';
import './components/style.css';

import ProjectList from './components/ProjectList';
import ProjectRegist from "./components/ProjectRegist";
import ProjectEdit from "./components/ProjectEdit";
import ManagerList from "./components/ManagerList";
import ManagerRegist from "./components/ManagerRegist";
import ManagerEdit from "./components/ManagerEdit";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";






function App() {
  return (
    <div className="container">
      <Router>
          <Switch>
            <Route path="/" exact render={() => <ProjectList/>}></Route>
            <Route path="/projectRegist" exact render={() => <ProjectRegist/>}></Route>
            <Route path="/projectEdit" exact render={() => <ProjectEdit/>}></Route>
            <Route path="/manager" exact render={() => <ManagerList/>}></Route>
            <Route path="/managerRegist" exact render={() => <ManagerRegist/>}></Route>
            <Route path="/managerEdit" exact render={() => <ManagerEdit/>}></Route>
            <Route path="/signIn" exact render={() => <SignIn/>}></Route>
            <Route path="/singUp" exact render={() => <SignUp/>}></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavMenue } from "./components/navigation/NavMenue";
import { Footersection } from "./components/footer/Footersection";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Notfound } from "./pages/Notfound";
import { Applications } from "./pages/Applications";
import { Category } from "./pages/Category";
import { AndroidGames } from "./pages/Android-games";
import { AppDetails } from "./pages/AppDetails";

import { Login } from "./pages/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <NavMenue />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/applications" component={Applications} />
          <Route exact path="/android-games" component={AndroidGames} />
          <Route exact path="/app/:id" component={AppDetails} />
          <Route exact path="/apps/:category" component={Category} />
          <Route exact path="/login" component={Login} />
          <Route path="*" component={Notfound} />
        </Switch>
        <Footersection />
      </div>
    </Router>
  );
}

export default App;

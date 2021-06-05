import "./App.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About/index.js";
import Portfolio from "./pages/Portfolio/index.js";
import Contact from "./pages/Contact/index.js";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <About/>
            </Route>
            <Route path="/portfolio">
              <Portfolio/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
          </Switch>
          <Footer />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;

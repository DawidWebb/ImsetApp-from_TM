import { HashRouter as Router } from "react-router-dom";
import { Fragment } from "react";
import { MainSwitch } from "./components";
import { Header, Footer } from "./templates";

function App() {
  return (
    <Router>
      <Header />
      <Fragment>
        <MainSwitch />
      </Fragment>
      <Footer />
    </Router>
  );
}

export default App;
